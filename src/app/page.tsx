"use client"
import { useState } from "react";
import { MobileNav } from "@/components/layout/mobileNav";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { About } from "@/components/layout/about";
import { Services } from "@/components/layout/services";
import { Kids } from "@/components/layout/kids";
import { Barbers } from "@/components/layout/barbers";
import { Contact } from "@/components/layout/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const handleMenuMobileClick = () => {
    setIsMobileNav(!isMobileNav)
  }

  return (
    <div className="text-white">
      <Header isMobileNav={isMobileNav} handleMenuMobileClick={handleMenuMobileClick} />
      <MobileNav isMobileNav={isMobileNav} handleMenuMobileClick={handleMenuMobileClick} />
      <main>
        <Hero />
        <About />
        <Services />
        <Kids />
        <Barbers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}