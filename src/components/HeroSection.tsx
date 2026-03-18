import ArtDecoSeparator from "./ArtDecoSeparator";
import { useReveal } from "./useReveal";

const HeroSection = () => {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-36 pb-20 text-center"
      style={{
        background: "radial-gradient(circle at center, hsl(150 30% 10%) 0%, hsl(144 33% 5%) 100%)"
      }}>
      
      {/* Art deco corner ornaments */}
      <div className="absolute top-5 left-5 w-24 h-24 border-t border-l border-gold-dark py-0 my-[77px]" />
      <div className="absolute top-5 right-5 w-24 h-24 border-t border-r border-gold-dark my-[77px]" />

      <div className="container my-[5px]">
        <span className="reveal-element block font-accent text-gold mb-5 my-0 text-sm">
          Para você que trabalha duro o mês inteiro, mas sente que está apenas 'sobrevivendo'...
        </span>

        <h1 className="reveal-element font-display text-foreground leading-[1.1] mb-8 my-[7px] font-semibold text-4xl">
          Por que algumas pessoas{" "}
          <em className="font-display italic text-gold">prosperam</em>, enquanto você acorda
          cansado, trabalha duro e a sua vida parece andar em círculos?
        </h1>

        <p className="reveal-element text-lg text-text-secondary max-w-[680px] mx-auto mb-12">
          Descubra o padrão silencioso que está travando o seu dinheiro, os seus relacionamentos e a
          sua energia — e veja como a neurociência explica por que você repete os mesmos erros, mesmo
          querendo mudar.
        </p>

        {/* Video placeholder */}
        <div className="reveal-element w-full max-w-[760px] aspect-video bg-black mx-auto mb-12 border border-gold-dark flex items-center justify-center relative shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
          <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gold/10 cursor-pointer">
            <svg viewBox="0 0 24 24" width="40" height="40" className="fill-gold ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <a href="#offer" className="btn-cta reveal-element" aria-label="Acessar o treinamento por R$ 27,90">
          QUERO DESCOBRIR O QUE ESTÁ ME TRAVANDO
        </a>

        <div className="reveal-element">
          <ArtDecoSeparator />
        </div>
      </div>
    </section>);

};

export default HeroSection;