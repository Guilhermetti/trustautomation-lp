import { motion } from "framer-motion";
import { Bot, Workflow, BarChart3, MessageSquare, Globe, RefreshCcw } from "lucide-react";

const solutions = [
  {
    icon: Workflow,
    title: "Automação de processos",
    desc: "Eliminamos tarefas repetitivas com RPA e rotinas automatizadas, liberando sua equipe para o que importa.",
  },
  {
    icon: RefreshCcw,
    title: "Integrações entre sistemas",
    desc: "Conectamos APIs, webhooks e plataformas para que seus dados fluam sem fricção entre sistemas.",
  },
  {
    icon: BarChart3,
    title: "Dashboards e relatórios",
    desc: "Relatórios automatizados e painéis visuais para decisões mais rápidas e baseadas em dados.",
  },
  {
    icon: Bot,
    title: "Chatbots e assistentes",
    desc: "Assistentes internos e chatbots inteligentes para agilizar atendimento e processos do dia a dia.",
  },
  {
    icon: Globe,
    title: "Sistemas sob medida",
    desc: "Desenvolvemos aplicações web completas, do back-end ao front-end, para necessidades específicas.",
  },
  {
    icon: MessageSquare,
    title: "Otimização de sistemas",
    desc: "Modernizamos e otimizamos sistemas legados para melhorar performance, segurança e usabilidade.",
  },
];

const Solutions = () => {
  return (
    <section id="solucoes" className="relative border-t border-border/30 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            O que <span className="text-gradient">fazemos</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Soluções que vão de automações simples a sistemas complexos — sempre sob medida para o seu negócio.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-border/40 bg-card-gradient p-6 shadow-card transition-all hover:border-primary/30 hover:shadow-glow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <s.icon size={20} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
