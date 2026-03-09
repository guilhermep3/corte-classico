import { Button } from "../button"
import { ScrollReveal } from "../ScrollReveal"

export const Hero = () => {

  return (
    <section className="hero-section" id="home">
      <ScrollReveal XorY="Y" minusplus="+" transition="0.8s">
        <p className="local-hero">São Paulo - Brasil</p>
        <h1 className="hero-h1">Seja seu próprio estilo</h1>
      </ScrollReveal>
      <ScrollReveal XorY="Y" minusplus="-" transition="0.8s">
        <h2 className="hero-h2">Barbearia estilo clássico feito para você ter a melhor experiência e estilo.
          <br />
          Entre em contato conosco para agendar um horário.</h2>
        <Button label="AGENDAR" scrollTo="contact" />
      </ScrollReveal>
    </section>
  )
}