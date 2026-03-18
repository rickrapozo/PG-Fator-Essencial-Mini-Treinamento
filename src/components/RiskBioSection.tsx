import ArtDecoSeparator from "./ArtDecoSeparator";
import { useReveal } from "./useReveal";

const RiskBioSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-8 md:py-16 bg-section-primary px-4 md:px-0">
      <div className="container">
        {/* Guarantee */}
        <div className="reveal-element border-4 border-double border-gold p-6 md:p-16 max-w-[800px] mx-auto mb-12 md:mb-24 text-center">
          <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-20 md:h-20 fill-gold mx-auto mb-4 md:mb-5">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-gold mb-3 md:mb-4">7 DIAS DE GARANTIA</h2>
          <p className="text-foreground text-sm md:text-lg">
            Seu Risco é Zero. Assista às aulas. Faça o teste. Se em 7 dias você achar que não serviu
            para nada e que a sua mente continuou a mesma, você aperta um botão e eu devolvo os seus
            R$ 27,90. O risco é todo meu.
          </p>
        </div>

        <div className="reveal-element">
          <ArtDecoSeparator />
        </div>

        {/* Bio Title */}
        <div className="reveal-element text-center mt-12 md:mt-20 mb-8 md:mb-14">
          <h2 className="font-display text-xl md:text-3xl text-foreground max-w-[800px] mx-auto leading-relaxed px-4 md:px-0">
            Mas você pode estar se perguntando:<br className="hidden md:block" />
            <span className="text-gold font-bold italic"> quem é você para me ensinar tudo isso?</span>
          </h2>
        </div>

        {/* Bio */}
        <div className="reveal-element grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-16 items-center">
          <img 
            src="/Ricardo.webp" 
            alt="Ricardo Borges"
            className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] rounded-full border-2 border-gold object-cover mx-auto shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          />
          <div className="text-center md:text-left">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-gold mb-3 md:mb-4">Ricardo Borges</h2>
            <div className="flex flex-wrap gap-2 mb-4 md:mb-5 justify-center md:justify-start">
              {["Terapeuta Emocional", "Neurociência", "PNL", "Psicanálise"].map((badge) => (
                <span
                  key={badge}
                  className="border border-gold-dark rounded-full px-3 md:px-4 py-1 text-[10px] md:text-xs text-gold-light"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="text-foreground leading-relaxed text-sm md:text-base">
              Eu me chamo Ricardo Borges. Sou Terapeuta Emocional, com formações em Neurociência, PNL
              (Programação Neurolinguística) e Psicanálise, e sou o criador do Fator Essencial -
              Método 5Ps. Minha missão aqui não é falar difícil ou ensinar teorias que você não usará
              no seu dia a dia. É pegar a ciência e a psicologia e entregar para você de um jeito
              simples e prático, para que você consiga desvendar a sua mente e destravar a sua vida,
              para ter paz com a sua família e prosperar pelo seu próprio esforço.
            </p>
          </div>
        </div>

        {/* Urgency */}
        <div className="reveal-element border-l-4 border-[hsl(15_70%_35%)] p-5 md:p-8 bg-[hsl(15_70%_35%/0.05)] my-8 md:my-10">
          <p className="text-foreground text-sm md:text-base">
            <strong>Atenção:</strong> Esse treinamento foi desenvolvido para ser 100% prático, focando
            em identificar a causa do problema. Mas tome uma decisão agora, porque cada dia que passa
            você perde energia, dinheiro e saúde. O único risco real é você fechar esta página,
            continuar consumindo conteúdos rasos e chegar ao final deste ano com as mesmas
            reclamações, o mesmo cansaço e a mesma conta bancária. Pare de tentar adivinhar o que está
            errado.
          </p>
        </div>

        <div className="text-center mt-10 md:mt-16">
          <p className="reveal-element font-accent text-gold text-base md:text-[19px] mb-6 md:mb-8">
            Clique no botão abaixo e acesse o treinamento com essa condição única.
          </p>
          <a href="#offer" className="btn-cta btn-cta-large reveal-element text-sm md:text-lg !px-8 !py-5 md:!px-16 md:!py-6" aria-label="Destravar minha mente por R$ 27,90">
            SIM, QUERO DESTRAVAR MINHA MENTE POR R$ 27,90
          </a>
        </div>
      </div>
    </section>
  );
};

export default RiskBioSection;
