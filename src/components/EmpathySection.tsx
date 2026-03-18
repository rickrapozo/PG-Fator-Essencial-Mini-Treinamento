import { useReveal } from "./useReveal";

const EmpathySection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 bg-section-primary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="reveal-element">
            <p className="text-[17px] leading-[1.8] text-foreground">
              "Parece que você está carregando um peso invisível nas costas, não é?"
            </p>
            <br />
            <p className="text-[17px] leading-[1.8] text-foreground">
              Você acorda cedo. Você cumpre suas obrigações. Você tenta economizar, tenta melhorar de
              vida, promete para si mesmo que as coisas vão ser diferentes na segunda-feira... Mas, no
              fundo, bate aquela frustração. O dinheiro não sobra no fim do mês. A vontade de fazer
              algo novo some debaixo do cansaço. E, muitas vezes, você acaba descontando o estresse em
              quem você ama ou abandonando os seus projetos pela metade.
            </p>

            <div className="border-l-4 border-gold bg-bg-card p-8 my-10">
              <h4 className="font-display text-2xl text-gold mb-2">A resposta é NÃO.</h4>
              <p className="text-foreground">
                A culpa não é sua. Não é preguiça. Não é falta de inteligência. E definitivamente não
                é falta de esforço.
              </p>
            </div>
          </div>

          <div className="reveal-element">
            <div className="relative font-accent text-[clamp(28px,4vw,38px)] leading-[1.2] text-gold-light">
              <span className="absolute -top-10 -left-8 text-[100px] opacity-20 font-display">"</span>
              Você olha ao redor e se pergunta: 'O que eu estou fazendo de errado? Será que o problema
              sou eu?'
            </div>
          </div>
        </div>

        <p className="reveal-element text-2xl text-center font-accent text-gold mt-16">
          O problema é que ninguém te entregou o manual de como o seu cérebro funciona.
        </p>
      </div>
    </section>
  );
};

export default EmpathySection;
