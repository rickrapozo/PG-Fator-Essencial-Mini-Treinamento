import { useReveal } from "./useReveal";

const EmpathySection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-8 md:py-16 bg-section-primary px-4 md:px-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-16 items-center">
          <div className="reveal-element">
            <p className="text-base md:text-[17px] leading-[1.8] text-foreground">
              "Parece que você está carregando um <span className="text-gold font-bold">peso invisível</span> nas costas, não é?"
            </p>
            <br />
            <p className="text-base md:text-[17px] leading-[1.8] text-foreground">
              Você acorda cedo. Você cumpre suas obrigações. Você tenta economizar, tenta melhorar de
              vida, promete para si mesmo que as coisas vão ser diferentes na segunda-feira... Mas, no
              fundo, bate aquela <span className="text-foreground font-semibold">frustração</span>. O <span className="text-foreground font-semibold">dinheiro não sobra</span> no fim do mês. A vontade de fazer
              algo novo <span className="text-foreground font-semibold">some debaixo do cansaço</span>. E, muitas vezes, você acaba descontando o estresse em
              quem você ama ou abandonando os seus projetos pela metade.
            </p>

            {/* Bloco de pergunta para o mobile, exibido antes da resposta */}
            <div className="relative font-accent text-[clamp(22px,4vw,38px)] leading-[1.3] text-gold-light lg:hidden mt-8 mb-4">
              <span className="absolute -top-6 -left-4 text-[60px] opacity-20 font-display">"</span>
              Você olha ao redor e se pergunta: 'O que eu estou fazendo de errado? Será que o problema
              sou eu?'
            </div>

            <div className="border-l-4 border-gold bg-bg-card p-5 md:p-8 my-6 md:my-10">
              <h4 className="font-display text-xl md:text-2xl text-gold mb-2">A resposta é <span className="underline decoration-gold/50">NÃO</span>.</h4>
              <p className="text-foreground text-sm md:text-base">
                A <span className="text-foreground font-bold italic underline-offset-4 underline decoration-gold/30">culpa não é sua</span>. Não é preguiça. Não é falta de inteligência. E definitivamente não
                é falta de esforço.
              </p>
            </div>
          </div>

          <div className="reveal-element hidden lg:block">
            <div className="relative font-accent text-[clamp(22px,4vw,38px)] leading-[1.3] text-gold-light">
              <span className="absolute -top-6 -left-4 md:-top-10 md:-left-8 text-[60px] md:text-[100px] opacity-20 font-display">"</span>
              Você olha ao redor e se pergunta: 'O que eu estou fazendo de errado? Será que o problema
              sou eu?'
            </div>
          </div>
        </div>

        <p className="reveal-element text-lg md:text-2xl text-center font-accent text-gold mt-10 md:mt-16">
          O problema é que ninguém te entregou o <span className="text-foreground font-bold">manual de como o seu cérebro funciona</span>.
        </p>
      </div>
    </section>
  );
};

export default EmpathySection;
