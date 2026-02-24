import { useEffect, useRef } from "react";
import { toast } from "sonner";
import type { ApiWarmupState } from "@/hooks/use-api-warmup";

export default function ApiWarmupIndicator({ state }: { state: ApiWarmupState }) {
  const lastToastRef = useRef<"ok" | "error" | null>(null);

  useEffect(() => {
    // evita “spam” de toast em intervalos
    if (state.status === "ok" && lastToastRef.current !== "ok") {
      toast.success(state.message);
      lastToastRef.current = "ok";
    }

    if (state.status === "error" && lastToastRef.current !== "error") {
      toast.error(state.message);
      lastToastRef.current = "error";
    }
  }, [state.status, state.message]);

  const base =
    "fixed bottom-4 right-4 z-50 rounded-full px-3 py-2 text-xs shadow-sm border backdrop-blur";

  if (state.status === "checking") {
    return (
      <div className={`${base} bg-background/80`}>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
          {state.message || "Conectando…"}
        </span>
      </div>
    );
  }

  if (state.status === "ok") {
    return (
      <div className={`${base} bg-background/80`}>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Online
        </span>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className={`${base} bg-background/80`}>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          Offline
        </span>
      </div>
    );
  }

  return null;
}