import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Trabalhamos", href: "#processo" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold text-primary-foreground">T</span>
          </div>
          <span className="hidden text-sm font-semibold text-foreground sm:inline lg:text-base">
            Trust Automation
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#orcamento" className="hidden sm:block">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Solicitar orçamento
            </Button>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-muted-foreground hover:text-foreground lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a href="#orcamento" onClick={() => setOpen(false)} className="mt-2">
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Solicitar orçamento
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
