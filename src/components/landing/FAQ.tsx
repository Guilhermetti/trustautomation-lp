import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qual o prazo médio para entrega de um projeto?",
    a: "Depende do escopo. Automações simples podem ficar prontas em 1–2 semanas. Projetos maiores passam por prova de conceito e são entregues de forma iterativa, geralmente entre 4–8 semanas.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Após entender sua necessidade, apresentamos uma proposta com escopo, prazo e valor fixo ou por sprint. Não trabalhamos com surpresas — tudo é acordado antes de começar.",
  },
  {
    q: "Como começo?",
    a: "Preencha o formulário de orçamento ou nos chame no WhatsApp. Vamos agendar uma conversa rápida para entender seu cenário e propor os próximos passos.",
  },
];

const FAQ = () => {
  return (
    <section className="border-t border-border/30 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border/40 bg-card-gradient px-5 shadow-card"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
