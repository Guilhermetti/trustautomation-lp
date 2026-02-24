import { useEffect, useRef, useState } from "react";

type WarmupStatus = "idle" | "checking" | "ok" | "error";

export type ApiWarmupState = {
  status: WarmupStatus;
  message: string;
  lastCheckedAt?: number;
};

const HEALTH_URL =
  import.meta.env.VITE_API_HEALTH_URL ?? "https://trustautomation-api.onrender.com/health";

console.log(HEALTH_URL)

async function pingHealth(timeoutMs = 8000) {
  const controller = new AbortController();
  const t = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(HEALTH_URL, {
      method: "GET",
      cache: "no-store",
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });

    // Se chegou aqui com 200/OK, isso já é "ok"
    if (!res.ok) {
      return { ok: false, statusCode: res.status, details: "" };
    }

    // tenta ler JSON, mas não depende disso
    let details = "";
    try {
      const data = await res.json();
      if (data?.utc) details = String(data.utc);
      // se tiver ok=false explicitamente (não é o seu caso), respeita
      if (data?.ok === false) return { ok: false, statusCode: res.status, details };
    } catch {
      // ignore parse errors
    }

    return { ok: true, statusCode: res.status, details };
  } catch {
    return { ok: false, statusCode: 0, details: "" };
  } finally {
    window.clearTimeout(t);
  }
}

export function useApiWarmup(options?: { intervalMs?: number }) {
  const intervalMs = options?.intervalMs ?? 12 * 60 * 1000;

  const [state, setState] = useState<ApiWarmupState>({
    status: "idle",
    message: "",
  });

  const ranOnceRef = useRef(false);

  useEffect(() => {
    let disposed = false;

    const run = async (silent?: boolean) => {
      if (disposed) return;

      setState((s) => ({
        ...s,
        status: "checking",
        message: silent ? s.message : "Conectando ao servidor…",
      }));

      const result = await pingHealth();

      if (disposed) return;

      const next: ApiWarmupState = result.ok
        ? {
            status: "ok",
            message: "Servidor online.",
            lastCheckedAt: Date.now(),
          }
        : {
            status: "error",
            message: "Servidor indisponível. Tentaremos novamente.",
            lastCheckedAt: Date.now(),
          };

      setState(next);
    };

    // ping inicial ao abrir o site
    if (!ranOnceRef.current) {
      ranOnceRef.current = true;
      run(false);
    }

    // ping periódico (enquanto a aba estiver visível)
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") run(true);
    }, intervalMs);

    // quando volta pra aba, ping
    const onVisibility = () => {
      if (document.visibilityState === "visible") run(true);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      disposed = true;
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [intervalMs]);

  return state;
}