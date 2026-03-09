import { ScrollReveal } from "../ScrollReveal"

const kidsAsideData = [
  { title: 'Corte de cabelo', price: 'R$20,00' },
  { title: 'Hidratação Capilar', price: 'R$25,00' },
  { title: 'Skin Care', price: 'R$20,00' },
  { title: 'Kit Brinquedos', price: 'R$30,00' }
]

export const Kids = () => {

  return (
    <section className="kids-section" id="kids">
      <div className="kids-section-aside">
        {kidsAsideData.map((item, index) => (
          <div key={index}
            className="kids-price-area"
          >
            <p className="kids-price-title">{item.title}</p>
            <p className="kids-price">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="kids-area">
        <ScrollReveal XorY="X" minusplus="-" transition="0.8s">
          <div className="kids-text-area">
            <div className="kids-title">
              <h2>Espaço infantil</h2>
              <span>especializado</span>
            </div>
            <p className="kids-text">Na nossa barbearia, pensamos em toda a família, e é por isso que possuímos uma área infantil especialmente projetada
              para tornar a experiência dos pequenos mais agradável e divertida. Enquanto aguardam pelo atendimento, as crianças podem se divertir em um espaço seguro e acolhedor,
              repleto de brinquedos e atividades que estimulam a criatividade e o entretenimento.
            </p>
            <p className="kids-text">Estamos comprometidos em proporcionar um serviço de alta qualidade para todos os nossos clientes, independentemente da idade.
              Nossa dedicação aos detalhes e ao conforto de cada cliente faz da nossa barbearia o lugar ideal para toda a família.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal XorY="X" minusplus="-" transition="0.8s">
          <div className="kids-image-area">
            <img src="/barber/kids-section.jpg" alt="criança cortando cabelo" />
            <div className="bg-img">
              <img src="/barber/barbershop-logo-removebg.png" alt="" />Corte Clássico</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}