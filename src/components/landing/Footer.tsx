const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Trabalhamos", href: "#processo" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h3 className="mb-1 text-lg font-bold text-foreground">
              Trust Automation And Solutions Technology
            </h3>
            <p className="text-sm text-muted-foreground">
              Startup focada em automação e soluções sob medida.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Trust Automation And Solutions Technology. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
