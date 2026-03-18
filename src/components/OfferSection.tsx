import ArtDecoSeparator from "./ArtDecoSeparator";
import { useReveal } from "./useReveal";

const OfferSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} id="offer" className="py-10 md:py-24 text-center px-4 md:px-0 relative"
      style={{
        background: "radial-gradient(ellipse at center, hsl(150 30% 12%) 0%, hsl(150 30% 8%) 100%)"
      }}
    >
      {/* Top/bottom gold borders for distinction */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container">
        <div className="reveal-element mb-6 md:mb-8">
          <ArtDecoSeparator />
        </div>

        <p className="reveal-element text-sm md:text-lg text-text-secondary max-w-[680px] mx-auto mb-5 md:mb-8">
          Se você fosse pagar uma consulta individual comigo para descobrirmos tudo isso juntos, você
          investiria facilmente mais de R$ 120,00 por uma única hora. Mas eu sei como é difícil dar o
          primeiro passo quando o orçamento está apertado.
        </p>
        <p className="reveal-element text-sm md:text-lg text-foreground max-w-[680px] mx-auto mb-8 md:mb-12">
          Por isso, eu transformei esse diagnóstico inicial em um treinamento online que custa menos
          do que um lanche na padaria.
        </p>

        <div className="reveal-element text-text-secondary text-xl md:text-2xl line-through">R$ 120,00</div>
        <div className="reveal-element font-display font-black text-gold text-[clamp(50px,12vw,90px)] leading-none my-2">
          R$ 27,90
        </div>
        <div className="reveal-element inline-flex flex-wrap justify-center gap-3 md:gap-5 border border-gold-dark px-5 md:px-8 py-2 md:py-3 mb-8 md:mb-10 text-xs md:text-sm text-gold-light">
          <span>pagamento único</span>
          <span>sem mensalidades</span>
          <span>acesso imediato</span>
        </div>
        <br />
        <a href="#" className="btn-cta reveal-element text-xs md:text-sm !px-6 !py-4 md:!px-10 md:!py-5" aria-label="Acessar o treinamento agora">
          QUERO ACESSAR AGORA
        </a>

        {/* Security icons */}
        <div className="reveal-element flex justify-center gap-6 md:gap-10 mt-8 md:mt-10 opacity-60">
          <div className="text-center text-[10px] md:text-[11px] uppercase tracking-wider text-text-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" className="fill-gold mx-auto mb-2">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
            Compra Segura
          </div>
          <div className="text-center text-[10px] md:text-[11px] uppercase tracking-wider text-text-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" className="fill-gold mx-auto mb-2">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            Acesso Imediato
          </div>
          <div className="text-center text-[10px] md:text-[11px] uppercase tracking-wider text-text-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" className="fill-gold mx-auto mb-2">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
            </svg>
            Garantia 7 Dias
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
