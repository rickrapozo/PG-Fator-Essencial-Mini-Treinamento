import { useReveal } from "./useReveal";

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-gold mb-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    title: "Os 5 Tipos de Pensamentos",
    desc: "Vamos descobrir qual deles está tocando na sua cabeça todos os dias, como aquela música viciante que se repete.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-gold mb-5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: "Entenda o que sente",
    desc: "Vou te ensinar a parar de ser dominado pelo nervosismo e pela ansiedade, entendendo de onde eles vêm.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-gold mb-5">
        <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
      </svg>
    ),
    title: "O Mapa da sua Mente",
    desc: "Você vai sair com um retrato claro do que precisa ser consertado para voltar a prosperar.",
  },
];

const SolutionSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 bg-section-primary">
      <div className="container">
        <div className="text-center">
          <h2 className="reveal-element font-display font-bold text-3xl md:text-4xl text-foreground inline-block relative mb-16">
            Como fazer um 'Raio-X' na sua mente e encontrar o problema
            <span className="absolute bottom-[-15px] left-0 w-[60%] h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
          </h2>
          <p className="reveal-element text-lg text-text-secondary max-w-[680px] mx-auto mb-16">
            Você não pode vencer um inimigo que não consegue ver. Para sair desse ciclo de cansaço e
            falta de dinheiro, o primeiro passo é identificar exatamente quais são os pensamentos e
            emoções que estão te travando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="reveal-element bg-bg-card p-10 border-t-2 border-gold transition-all duration-300 hover:bg-[#1a3523] hover:border-gold-light"
            >
              {b.icon}
              <h3 className="font-display text-xl mb-4 text-foreground">{b.title}</h3>
              <p className="text-foreground">{b.desc}</p>
            </div>
          ))}
        </div>

        <p className="reveal-element text-center font-accent text-text-secondary mt-10">
          Assista no celular, no seu horário livre.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
