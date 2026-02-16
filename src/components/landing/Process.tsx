import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Entendimento", desc: "Ouvimos sua demanda e mapeamos o problema real." },
  { n: "02", title: "Diagnóstico e proposta", desc: "Analisamos viabilidade e apresentamos escopo, prazo e investimento." },
  { n: "03", title: "Prova de conceito", desc: "Protótipo rápido para validar a solução antes de escalar." },
  { n: "04", title: "Implementação", desc: "Desenvolvimento iterativo com testes contínuos." },
  { n: "05", title: "Entrega e suporte", desc: "Deploy, documentação e acompanhamento pós-entrega." },
];

const Process = () => {
  return (
    <section id="processo" className="border-t border-border/30 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Como <span className="text-gradient">trabalhamos</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Processo enxuto e ágil — da ideia à entrega, com transparência em cada etapa.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-0 hidden h-full w-px bg-border/50 sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex gap-5"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-card font-mono text-sm font-medium text-primary">
                  {step.n}
                </div>
                <div className="pt-1">
                  <h3 className="mb-1 font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
