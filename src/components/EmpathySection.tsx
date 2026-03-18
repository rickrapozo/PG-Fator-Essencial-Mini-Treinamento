import { useReveal } from "./useReveal";

const EmpathySection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-10 md:py-24 bg-section-primary px-4 md:px-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-16 items-center">
          <div className="reveal-element">
            <p className="text-base md:text-[17px] leading-[1.8] text-foreground">
              "Parece que você está carregando um peso invisível nas costas, não é?"
            </p>
            <br />
            <p className="text-base md:text-[17px] leading-[1.8] text-foreground">
              Você acorda cedo. Você cumpre suas obrigações. Você tenta economizar, tenta melhorar de
              vida, promete para si mesmo que as coisas vão ser diferentes na segunda-feira... Mas, no
              fundo, bate aquela frustração. O dinheiro não sobra no fim do mês. A vontade de fazer
              algo novo some debaixo do cansaço. E, muitas vezes, você acaba descontando o estresse em
              quem você ama ou abandonando os seus projetos pela metade.
            </p>

            <div className="border-l-4 border-gold bg-bg-card p-5 md:p-8 my-6 md:my-10">
              <h4 className="font-display text-xl md:text-2xl text-gold mb-2">A resposta é NÃO.</h4>
              <p className="text-foreground text-sm md:text-base">
                A culpa não é sua. Não é preguiça. Não é falta de inteligência. E definitivamente não
                é falta de esforço.
              </p>
            </div>
          </div>

          <div className="reveal-element">
            <div className="relative font-accent text-[clamp(22px,4vw,38px)] leading-[1.3] text-gold-light">
              <span className="absolute -top-6 -left-4 md:-top-10 md:-left-8 text-[60px] md:text-[100px] opacity-20 font-display">"</span>
              Você olha ao redor e se pergunta: 'O que eu estou fazendo de errado? Será que o problema
              sou eu?'
            </div>
          </div>
        </div>

        <p className="reveal-element text-lg md:text-2xl text-center font-accent text-gold mt-10 md:mt-16">
          O problema é que ninguém te entregou o manual de como o seu cérebro funciona.
        </p>
      </div>
    </section>
  );
};

export default EmpathySection;
