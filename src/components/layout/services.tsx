import { GiBeard } from "react-icons/gi"
import { ScrollReveal } from "../ScrollReveal"
import { TbCut } from "react-icons/tb"
import { FaSoap } from "react-icons/fa6"
import { MdContentCut } from "react-icons/md"

export const Services = () => {

  return (
    <section className="services-section" id="services">
      <div className="services-title">
        <h2 >O que fornecemos aos</h2>
        <h3>nossos clientes</h3>
      </div>
      <div className="skill-area">
        <ScrollReveal XorY="Y" minusplus="-" transition="0.8s">
          <div className="skill">
            <GiBeard className="skill-icon" />
            <p className="skill-title">Corte de Barba</p>
            <p className="skill-text">Cortes baseados no estilo do século 20 que garantem elegância para você.</p>
            <p className="skill-price">R$<span>30</span>,00</p>
          </div>
        </ScrollReveal>
        <ScrollReveal XorY="Y" minusplus="-" transition="1s">
          <div className="skill">
            <TbCut className="skill-icon" />
            <p className="skill-title">Corte de cabelo</p>
            <p className="skill-text">Cortes baseados no estilo do século 20 que garantem elegância para você.</p>
            <p className="skill-price">R$<span>40</span>,00</p>
          </div>
        </ScrollReveal>
        <ScrollReveal XorY="Y" minusplus="-" transition="1.2s">
          <div className="skill">
            <FaSoap className="skill-icon" />
            <p className="skill-title">Hidratação Capilar</p>
            <p className="skill-text">A hidratação essêncial para seu cabelo estar saudável e bonito.</p>
            <p className="skill-price">R$<span>50</span>,00</p>
          </div>
        </ScrollReveal>
        <ScrollReveal XorY="Y" minusplus="-" transition="1.4s">
          <div className="skill">
            <MdContentCut className="skill-icon" />
            <p className="skill-title">Design de Sobrancelha</p>
            <p className="skill-text">Ajuste e alinhamento da sobrancelha para destacar seu visual.</p>
            <p className="skill-price">R$<span>20</span>,00</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}