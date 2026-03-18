import React from "react";

const StickyHeader = () => {
  return (
    <header className="hidden md:block absolute top-0 w-full z-[10000] bg-bg-primary/80 backdrop-blur-md border-b border-gold-dark/30 transition-all duration-300">
      <div className="container flex justify-between items-center py-4">
        <div>
          <span className="font-display text-lg font-black tracking-[2px] text-foreground">FATOR ESSENCIAL</span>
          <span className="block font-accent text-xs text-gold">Método 5Ps</span>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
