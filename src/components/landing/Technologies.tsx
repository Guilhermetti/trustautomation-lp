import { motion } from "framer-motion";

const techs = [
  ".NET / C#", "Node.js", "Python", "React / Next.js",
  "SQL (PostgreSQL / SQL Server)", "Azure / AWS", "Docker", "Power Automate",
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="border-t border-border/30 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Tecnologias
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Escolhemos a melhor stack para cada desafio. Trabalhamos com tecnologias
            consolidadas e ferramentas modernas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3"
        >
          {techs.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-full border border-border/50 bg-secondary/60 px-5 py-2.5 font-mono text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
