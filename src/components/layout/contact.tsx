"use client";
import { FormEvent, useState } from "react";
import { EmailModal } from "../EmailModal";

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [modalProps, setModalProps] = useState<{ isValid: boolean } | null>(null);

  const handleSubmitEmail = (evt: FormEvent<HTMLFormElement>) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    evt.preventDefault();
    if (email.trim() === '') {
      { setModalProps({ isValid: false }) }
    } else if (!emailRegex.test(email)) {
      alert('erro na validação do email')
    } else {
      { setModalProps({ isValid: true }) }
    }
  };

  const handleCloseModal = () => {
    setModalProps(null);
    setEmail('');
  }

  return (
    <section className="subscribe-section" id="contact">
      <img src="/barber/barbershop-logo-removebg.png" alt="logo da Corte Clássico" />
      <div className="subscribe-area">
        <h2>Inscreva-se na nossa Newsletter</h2>
        <h3>Tenha <span>10%</span> de desconto</h3>
        <p>Assine nossa newsletter para receber as principais notícias do mundo da moda masculina e as últimas tendências de cortes de cabelo. Mantenha-se sempre atualizado!</p>
        <form className="subscribe-input" onSubmit={handleSubmitEmail}>
          <input type="text" placeholder="Digite seu email"
            data-rules="email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
          <button type="submit">ENVIAR</button>
          {modalProps && <EmailModal isValid={modalProps.isValid} onClose={handleCloseModal} />}
        </form>
      </div>
    </section>
  )
}