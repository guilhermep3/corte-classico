import { navLinksData } from "@/data/navLinksData";

type props = {
  isMobileNav: boolean;
  handleMenuMobileClick: () => void;
}
export const Header = ({ isMobileNav, handleMenuMobileClick }: props) => {

  return (
    <header className={`header`}>
      <nav className="header-nav">
        <ul className="header-list">
          {navLinksData.slice(0, 3).map((link) => (
            <li key={link.name}>
              <a href={link.href}
                className="linksHeader"
                onClick={handleMenuMobileClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <img src="/barber/barbershop-logo-removebg.png" alt="logo da Corte Clássico"
          className="logo" />
        <ul className="header-list">
          {navLinksData.slice(3, 6).map((link) => (
            <li key={link.name}>
              <a href={link.href}
                className="linksHeader"
                onClick={handleMenuMobileClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`mobile-burger ${isMobileNav ? 'burger-active' : ''}`}
        onClick={handleMenuMobileClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}