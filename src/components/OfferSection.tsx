import ArtDecoSeparator from "./ArtDecoSeparator";
import { useReveal } from "./useReveal";

const OfferSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} id="offer" className="py-8 md:py-16 text-center px-4 md:px-0 relative"
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

        <div className="reveal-element bg-bg-card border border-gold-dark/50 rounded-lg p-6 md:p-10 max-w-[800px] mx-auto mb-10 text-left shadow-[0_10px_40px_-10px_rgba(212,175,55,0.1)]">
          <h3 className="font-display text-xl md:text-2xl text-gold mb-6 font-semibold text-center">
            Veja exatamente o que você recebe hoje, com acesso imediato:
          </h3>
          <ul className="space-y-4 md:space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                <svg className="w-3.5 h-3.5 fill-gold" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
              <p className="text-foreground text-sm md:text-base leading-relaxed">
                <strong className="text-gold-light font-display tracking-wide">Mini Treinamento (8 Aulas Rápidas):</strong> Direto ao ponto, para você assistir no celular durante o almoço ou no ônibus.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                <svg className="w-3.5 h-3.5 fill-gold" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
              <p className="text-foreground text-sm md:text-base leading-relaxed">
                <strong className="text-gold-light font-display tracking-wide">Teste dos 5 Pensamentos Sabotadores:</strong> Descubra na hora qual "voz automática" está destruindo o seu dinheiro e as suas atitudes.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                <svg className="w-3.5 h-3.5 fill-gold" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
              <p className="text-foreground text-sm md:text-base leading-relaxed">
                <strong className="text-gold-light font-display tracking-wide">O Decodificador de Emoções:</strong> A técnica simples para você parar de ser dominado pelo cansaço mental, pelo estresse e pela ansiedade.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                <svg className="w-3.5 h-3.5 fill-gold" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
              <p className="text-foreground text-sm md:text-base leading-relaxed">
                <strong className="text-gold-light font-display tracking-wide">A Roda da sua Mente:</strong> O mapa visual rápido para encontrar exatamente onde a sua energia está travada hoje.
              </p>
            </li>
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gold-dark/30 text-center">
            <div className="text-text-secondary text-lg md:text-xl line-through decoration-red-500/50">R$ 120,00</div>
            <div className="font-display font-black text-gold text-[clamp(40px,10vw,70px)] leading-none my-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              R$ 27,90
            </div>
            <div className="inline-flex flex-wrap justify-center gap-3 md:gap-5 px-5 md:px-8 py-2 md:py-3 mb-6 text-xs md:text-sm text-gold-light font-semibold">
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-gold rounded-full" /> Pagamento único</span>
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-gold rounded-full" /> Sem mensalidades</span>
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-gold rounded-full" /> Acesso imediato</span>
            </div>
            
            <a href="#" className="btn-cta text-sm md:text-base !px-8 !py-5 md:!px-12 md:!py-6 w-full sm:w-auto shadow-[0_0_30px_-5px_rgba(212,175,55,0.4)]" aria-label="Acessar o treinamento agora">
              QUERO ACESSAR AGORA
            </a>
          </div>
        </div>

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
