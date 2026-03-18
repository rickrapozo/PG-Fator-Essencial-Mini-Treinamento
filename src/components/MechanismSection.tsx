import { useEffect, useRef, useState } from "react";
import { useReveal } from "./useReveal";

const steps = [
  { num: 1, title: "Pensamento", desc: '"Uma voz na sua cabeça diz \'isso vai dar errado\' ou \'eu não dou conta, não sou bom o suficiente\'."' },
  { num: 2, title: "Sentimento", desc: '"Esse pensamento ruim gera um aperto no peito, uma sensação de insegurança ou angústia."' },
  { num: 3, title: "Emoção", desc: '"Essa angústia se transforma em medo ou ansiedade pura."' },
  { num: 4, title: "Ação", desc: '"Com medo ou cansado emocionalmente, você adia o que precisa ser feito. Você procrastina. Você foge."' },
  { num: 5, title: "Resultado", desc: '"As contas acumulam, as brigas acontecem e a vida não sai do lugar."' },
];

const MechanismSection = () => {
  const ref = useReveal();
  const [count, setCount] = useState(0);
  const counterStarted = useRef(false);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counterStarted.current) {
          counterStarted.current = true;
          let c = 0;
          const interval = setInterval(() => {
            c++;
            setCount(c);
            if (c >= 95) clearInterval(interval);
          }, 20);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-8 md:py-16 bg-section-secondary relative overflow-hidden px-4 md:px-0">
      {/* Giant 95% background */}
      <span
        ref={triggerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[120px] md:text-[250px] text-gold opacity-5 pointer-events-none select-none"
      >
        95%
      </span>

      <div className="container relative z-10">
        <div className="text-center">
          <span className="reveal-element inline-block border border-gold text-gold px-4 py-1 text-[10px] md:text-xs tracking-[2px] uppercase mb-4 md:mb-5">
            A CIÊNCIA EXPLICA
          </span>
          <h2 className="reveal-element font-display font-bold text-2xl md:text-4xl text-foreground mb-4">
            O 'Piloto Automático' que está sabotando os seus resultados
          </h2>
          <p className="reveal-element text-sm md:text-lg text-text-secondary max-w-[680px] mx-auto">
            A ciência já comprovou que{" "}
            <span className="text-gold font-bold">{count}%</span> do que nós fazemos todos os dias é
            controlado pelo nosso subconsciente. Ou seja: você age no 'piloto automático',{" "}
            <span className="border-b-[2px] border-gold pb-[2px] text-foreground font-bold whitespace-nowrap">Sem Nem Perceber</span>.
          </p>
        </div>

        {/* Bloco Elegante de Continuação */}
        <div className="reveal-element relative max-w-[800px] mx-auto mt-10 md:mt-14 p-6 md:p-8 bg-black/40 border border-gold/20 text-center rounded-lg shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-gold" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-gold" />
          
          <p className="text-foreground/90 text-sm md:text-[17px] leading-[1.8]">
            Desde a infância, o seu cérebro gravou regras e medos. Se você cresceu ouvindo que <span className="text-foreground font-semibold italic">"dinheiro é sujo"</span> ou sentindo que <span className="text-foreground font-semibold italic">"não era bom o suficiente"</span>, o seu cérebro gravou isso como uma verdade absoluta.
          </p>
          <p className="text-gold font-accent text-base md:text-[19px] leading-[1.6] mt-4 md:mt-6">
            E é aqui que o ciclo da autossabotagem destrói os seus resultados. Existe uma engrenagem na sua mente chamada <span className="font-bold border-b border-gold/50 pb-1">Fator Essencial</span>. Ela funciona em 5 passos exatos:
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-[800px] mx-auto mt-10 md:mt-14">
          {/* Dashed line */}
          <div className="absolute left-[22px] md:left-[30px] top-0 bottom-0 w-px border-l border-dashed border-gold z-[1]" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="reveal-element ml-[50px] md:ml-[60px] mb-5 md:mb-8 bg-bg-card p-4 md:p-8 rounded relative z-[2] transition-all duration-300 hover:translate-x-2"
            >
              <div className="absolute -left-[46px] md:-left-[55px] top-4 md:top-6 w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-bg-primary border border-gold text-gold rounded-full flex items-center justify-center font-bold text-sm md:text-base z-[3]">
                {step.num}
              </div>
              <h3 className="font-display text-lg md:text-xl mb-1 md:mb-2 text-foreground">{step.title}</h3>
              <p className="text-foreground text-sm md:text-base">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Faucet quote */}
        <div className="reveal-element max-w-[700px] mx-auto mt-10 md:mt-20 p-6 md:p-10 border border-accent-green text-center font-accent text-base md:text-xl text-foreground">
          "Você tenta mudar as suas ações à força, mas não funciona. É como tentar secar o chão com
          a torneira aberta. Você precisa fechar a torneira primeiro."
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
