import ArtDecoSeparator from "./ArtDecoSeparator";
import { useReveal } from "./useReveal";
import VSLPlayer from "./VSLPlayer";

interface HeroSectionProps {
  onVideoStart: () => void;
  showOffer: boolean;
}

const HeroSection = ({ onVideoStart, showOffer }: HeroSectionProps) => {
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

        {/* VSL Player */}
        <div className="reveal-element w-full max-w-[340px] md:max-w-[380px] mx-auto mb-8 md:mb-12">
          <VSLPlayer videoId="0Tf0a-tymY8" onStart={onVideoStart} />
        </div>

        {showOffer && (
          <a href="#offer" className="btn-cta reveal-element text-xs md:text-sm !px-6 !py-4 md:!px-10 md:!py-5 animate-in fade-in zoom-in duration-500" aria-label="Acessar o treinamento por R$ 27,90">
            QUERO DESCOBRIR O QUE ESTÁ ME TRAVANDO
          </a>
        )}

        <div className="reveal-element mt-8 md:mt-0">
          <ArtDecoSeparator />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
