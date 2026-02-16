import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [needType, setNeedType] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const idea = (formData.get("idea") as string)?.trim();

    if (!name || !email || !idea) {
      toast.error("Preencha os campos obrigatórios: Nome, E-mail e Descrição da ideia.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Informe um e-mail válido.");
      return;
    }

    if (!consent) {
      toast.error("Você precisa aceitar ser contatado para prosseguir.");
      return;
    }

    // In a real app this would POST to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="orcamento" className="border-t border-border/30 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-primary/20 bg-card-gradient p-10 text-center shadow-glow"
          >
            <CheckCircle size={48} className="mb-4 text-primary" />
            <h3 className="mb-2 text-xl font-bold text-foreground">Solicitação enviada!</h3>
            <p className="text-sm text-muted-foreground">
              Recebemos sua ideia e retornaremos em até 1–2 dias úteis. Obrigado pelo interesse!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="orcamento" className="border-t border-border/30 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Solicitar <span className="text-gradient">orçamento</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Descreva sua ideia e entraremos em contato para entender melhor sua necessidade.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-xl space-y-5 rounded-2xl border border-border/40 bg-card-gradient p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                Nome *
              </label>
              <Input id="name" name="name" placeholder="Seu nome" maxLength={100} className="bg-secondary/40 border-border/50" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                E-mail *
              </label>
              <Input id="email" name="email" type="email" placeholder="seu@email.com" maxLength={255} className="bg-secondary/40 border-border/50" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">
                Empresa <span className="text-muted-foreground">(opcional)</span>
              </label>
              <Input id="company" name="company" placeholder="Nome da empresa" maxLength={100} className="bg-secondary/40 border-border/50" />
            </div>
            <div>
              <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-foreground">
                WhatsApp <span className="text-muted-foreground">(opcional)</span>
              </label>
              <Input id="whatsapp" name="whatsapp" placeholder="(11) 99999-9999" maxLength={20} className="bg-secondary/40 border-border/50" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Tipo de necessidade
              </label>
              <Select value={needType} onValueChange={setNeedType}>
                <SelectTrigger className="bg-secondary/40 border-border/50">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="automacao">Automação simples</SelectItem>
                  <SelectItem value="integracao">Integração</SelectItem>
                  <SelectItem value="sistema">Sistema</SelectItem>
                  <SelectItem value="consultoria">Consultoria</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Prazo desejado
              </label>
              <Select value={deadline} onValueChange={setDeadline}>
                <SelectTrigger className="bg-secondary/40 border-border/50">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgente">Urgente</SelectItem>
                  <SelectItem value="2-4sem">2–4 semanas</SelectItem>
                  <SelectItem value="1-2meses">1–2 meses</SelectItem>
                  <SelectItem value="flexivel">Flexível</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label htmlFor="idea" className="mb-1.5 block text-sm font-medium text-foreground">
              Descreva sua ideia *
            </label>
            <Textarea
              id="idea"
              name="idea"
              placeholder="Conte-nos sobre o problema que quer resolver, o resultado esperado e qualquer detalhe relevante..."
              rows={5}
              maxLength={1000}
              className="bg-secondary/40 border-border/50 resize-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(v) => setConsent(v === true)}
              className="mt-0.5"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
              Aceito ser contatado para entender melhor a demanda.
            </label>
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-glow">
            <Send size={16} />
            Enviar para orçamento
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default QuoteForm;
