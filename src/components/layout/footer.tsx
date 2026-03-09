import { navLinksData } from "@/data/navLinksData"
import { contactData, socialMediaData } from "@/data/footerData";

export const Footer = () => {

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-div">
          <h2>Links</h2>
          <ul className="link-list">
            {navLinksData.map((link) => (
              <li key={link.name}>
                <a href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-div">
          <h2>Horários</h2>
          <div className="horary-footer-area">
            <div className="horary-footer">
              <p>Seg a Sex</p>
              <span>09:00 - 22:00</span>
            </div>
            <div className="horary-footer">
              <p>Sáb</p>
              <span>10:00 - 21:00</span>
            </div>
            <div className="horary-footer">
              <p>Dom</p>
              <span>13:00 - 20:00</span>
            </div>
          </div>
        </div>
        <div className="footer-div">
          <h2>Redes Sociais</h2>
          {socialMediaData.map((social) => (
            <div key={social.name}
              className="social-media"
            >
              {social.icon}
              <p>{social.username}</p>
            </div>
          ))}
        </div>
        <div className="footer-div">
          <h2>Contatos</h2>
          {contactData.map((contact) => (
            <div key={contact.type}
              className="contact"
            >
              {contact.icon}
              <p>{contact.username}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-copyright">
        <p>© copyright -
          <a href="https://github.com/guilhermep3" target="_blank"> Developed by Guilherme Pereira</a>
        </p>
      </div>
    </footer>
  )
}