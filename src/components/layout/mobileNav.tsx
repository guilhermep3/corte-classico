"use client"
import { navLinksData } from "@/data/navLinksData";

type props = {
  isMobileNav: boolean;
  handleMenuMobileClick: () => void;
}
export const MobileNav = ({ isMobileNav, handleMenuMobileClick }: props) => {

  return (
    <div className={`mobile-nav ${isMobileNav ? 'show-mobile-nav' : ''}`}>
      {navLinksData.map((link) => (
        <a key={link.name}
          href={link.href}
          onClick={handleMenuMobileClick}
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}