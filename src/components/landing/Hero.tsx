import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-hero pt-16">
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 bg-glow" />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Automação & Soluções sob medida
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Automatize processos.{" "}
            <span className="text-gradient">Escale resultados.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desenvolvemos automações sob medida e soluções digitais completas para
            empresas que querem operar com mais eficiência e menos retrabalho.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#orcamento">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow gap-2">
                <ArrowDown size={16} />
                Descrever minha ideia
              </Button>
            </a>
            <a href="#contato">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border/60 text-foreground hover:bg-secondary"
              >
                <MessageCircle size={16} />
                Falar com especialista
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Decorative shapes */}
        <div className="pointer-events-none absolute bottom-20 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-muted-foreground/30"
          >
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
