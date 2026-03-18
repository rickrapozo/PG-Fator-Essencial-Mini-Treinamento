import { useEffect, useState } from "react";

const StickyHeader = () => {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowCta(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="hidden md:block fixed top-0 w-full z-[1000] bg-bg-primary/80 backdrop-blur-md border-b border-gold-dark/30 transition-all duration-300">
      <div className="container flex justify-between items-center py-4">
        <div>
          <span className="font-display text-lg font-black tracking-[2px] text-foreground">FATOR ESSENCIAL</span>
          <span className="block font-accent text-xs text-gold">Método 5Ps</span>
        </div>
        <div
          className={`transition-all duration-300 ${showCta ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5 pointer-events-none"}`}
        >
          <a href="#offer" className="btn-cta btn-cta-mini">
            ACESSAR POR R$ 27,90
          </a>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
