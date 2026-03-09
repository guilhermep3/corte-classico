import { ScrollReveal } from "../ScrollReveal"

export const About = () => {

  return (
    <section className="about-section" id="about">
      <div className="about-section-top">
        <div className="about-section-text">
          <ScrollReveal transition="1s" XorY="x" minusplus="-">
            <h2 className="about-section-h2">
              Nós temos <span className="yearsExp">15 anos</span> de <span className="experience">Experiência</span>
            </h2>
          </ScrollReveal>
          <p className="about-text">Barbeiros especializados em cortes de cabelo, barba, hidratação. Apaixonados em transformar o visual dos clientes ampliando a auto-estima do homem.</p>
          <p className="about-text">A Corte Clássico é o melhor lugar para um corte de cabelo em estilo. A atenção aos detalhes e o serviço de primeira classe fazem toda a diferença.</p>
          <span className="line"></span>
          <div className="hours-container">
            <span>Horários</span>
            <div className="hours-area">
              <ScrollReveal XorY="Y" minusplus="-" transition="1s">
                <div>
                  <p className="hours-week">Seg a Sex</p>
                  <p>09:00 - 22:00</p>
                </div>
              </ScrollReveal>
              <ScrollReveal XorY="Y" minusplus="-" transition="1.2s">
                <div>
                  <p className="hours-week">Sáb</p>
                  <p>10:00 - 21:00</p>
                </div>
              </ScrollReveal>
              <ScrollReveal XorY="Y" minusplus="-" transition="1.4s">
                <div>
                  <p className="hours-week">Dom</p>
                  <p>13:00 - 20:00</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <img src="/barber/barber-smiling.jpg" id="about-img" alt="imagem section 1" />
      </div>
    </section>
  )
}