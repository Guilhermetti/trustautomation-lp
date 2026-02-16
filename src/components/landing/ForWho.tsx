import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const useCases = [
  "Padronizar tarefas repetitivas e eliminar retrabalho",
  "Unificar dados entre sistemas diferentes",
  "Acelerar fluxos de aprovação e decisão",
  "Reduzir erros manuais em processos críticos",
  "Melhorar visibilidade com indicadores em tempo real",
];

const ForWho = () => {
  return (
    <section className="border-t border-border/30 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Para quem é
            </h2>
            <p className="mb-10 text-muted-foreground">
              Atendemos empresas de todos os tamanhos que querem operar com mais
              eficiência, reduzir custos operacionais e escalar sem aumentar a
              complexidade.
            </p>
          </motion.div>

          <div className="space-y-4 text-left">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-lg border border-border/30 bg-card-gradient p-4"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{uc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
