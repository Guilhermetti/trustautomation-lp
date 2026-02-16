import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Trust Automation.")}`;
  const emailUrl = `mailto:contato@trustautomation.com?subject=${encodeURIComponent("Contato pelo site")}`;

  return (
    <section id="contato" className="border-t border-border/30 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Contato</h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            Prefere falar diretamente? Estamos disponíveis nos canais abaixo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-3"
        >
          <div className="flex flex-col items-center rounded-xl border border-border/40 bg-card-gradient p-6 text-center shadow-card">
            <Mail size={22} className="mb-3 text-primary" />
            <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">E-mail</span>
            <span className="text-sm text-foreground">contato@trustautomation.com</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-border/40 bg-card-gradient p-6 text-center shadow-card">
            <Phone size={22} className="mb-3 text-primary" />
            <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">WhatsApp</span>
            <span className="text-sm text-foreground">(11) 99999-9999</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-border/40 bg-card-gradient p-6 text-center shadow-card">
            <Clock size={22} className="mb-3 text-primary" />
            <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Horário</span>
            <span className="text-sm text-foreground">Seg–Sex, 9h–18h</span>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone size={16} />
              Abrir WhatsApp
            </Button>
          </a>
          <a href={emailUrl}>
            <Button variant="outline" className="gap-2 border-border/60 text-foreground hover:bg-secondary">
              <Mail size={16} />
              Enviar e-mail
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
