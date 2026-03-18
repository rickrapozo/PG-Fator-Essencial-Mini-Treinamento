import ArtDecoSeparator from "./ArtDecoSeparator";
import { useReveal } from "./useReveal";

const HeroSection = () => {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative pt-16 md:pt-28 pb-8 md:pb-12 text-center px-4 md:px-0"
      style={{
        background: "radial-gradient(circle at center, hsl(150 30% 10%) 0%, hsl(144 33% 5%) 100%)"
      }}>
      
      {/* Art deco corner ornaments — hidden on mobile */}
      <div className="hidden md:block absolute top-5 left-5 w-24 h-24 border-t border-l border-gold-dark my-[77px]" />
      <div className="hidden md:block absolute top-5 right-5 w-24 h-24 border-t border-r border-gold-dark my-[77px]" />

      <div className="container">
        <span className="reveal-element block font-accent text-gold mb-4 md:mb-5 text-xs md:text-sm">
          Para você que trabalha duro o mês inteiro, mas sente que está apenas 'sobrevivendo'...
        </span>

        <h1 className="reveal-element font-display text-foreground leading-[1.15] mb-5 md:mb-8 font-semibold text-[1.6rem] md:text-4xl">
          Por que algumas pessoas{" "}
          <em className="font-display italic text-gold">prosperam</em>, enquanto você acorda
          cansado, trabalha duro e a sua vida parece andar em círculos?
        </h1>

        <p className="reveal-element text-sm md:text-lg text-text-secondary max-w-[680px] mx-auto mb-8 md:mb-12">
          Descubra o padrão silencioso que está travando o seu dinheiro, os seus relacionamentos e a
          sua energia — e veja como a neurociência explica por que você repete os mesmos erros, mesmo
          querendo mudar.
        </p>

        {/* Video placeholder */}
        <div className="reveal-element w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] bg-black mx-auto mb-8 md:mb-12 border border-gold-dark flex items-center justify-center relative shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden">
          <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gold/10 cursor-pointer">
            <svg viewBox="0 0 24 24" width="24" height="24" className="fill-gold ml-1 md:w-8 md:h-8">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <a href="#offer" className="btn-cta reveal-element text-xs md:text-sm !px-6 !py-4 md:!px-10 md:!py-5" aria-label="Acessar o treinamento por R$ 27,90">
          QUERO DESCOBRIR O QUE ESTÁ ME TRAVANDO
        </a>

        <div className="reveal-element mt-8 md:mt-0">
          <ArtDecoSeparator />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
