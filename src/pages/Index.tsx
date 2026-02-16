import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Solutions from "@/components/landing/Solutions";
import ForWho from "@/components/landing/ForWho";
import Process from "@/components/landing/Process";
import Technologies from "@/components/landing/Technologies";
import QuoteForm from "@/components/landing/QuoteForm";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <ForWho />
      <Process />
      <Technologies />
      <QuoteForm />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
