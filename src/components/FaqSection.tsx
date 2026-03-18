import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "./useReveal";

const faqData = [
  {
    question: "Eu não tenho tempo. Esse treinamento é muito longo?",
    answer:
      "Não. O treinamento foi criado justamente para quem trabalha o dia todo e tem a rotina corrida. São aulas curtas, rápidas e direto ao ponto . Você pode assistir pelo celular no caminho para o trabalho, no ônibus ou durante a sua pausa para o almoço.",
  },
  {
    question: "É só R$ 27,90 mesmo? Tem alguma pegadinha ou mensalidade?",
    answer:
      "É apenas R$ 27,90 e nada mais. É um pagamento único, sem letras miúdas e sem nenhuma mensalidade surpresa cobrada depois no seu cartão. O valor é baixo porque eu quero que o dinheiro não seja um obstáculo para você dar o primeiro passo e descobrir o que está travando a sua vida.",
  },
  {
    question: "Eu nunca fiz terapia ou estudei sobre a mente. Vou conseguir entender?",
    answer:
      "Com certeza. Minha regra número um neste treinamento é: sem palavras difíceis e sem teorias chatas. Eu peguei o que existe de mais moderno na ciência e na psicologia e traduzi para a vida real do dia a dia . Se você consegue assistir a um vídeo no YouTube, você vai entender e conseguir usar as ferramentas.",
  },
  {
    question: "Como eu vou acessar o treinamento? Vai chegar na minha casa?",
    answer:
      "Não, o material é 100% digital. Assim que o seu pagamento de R$ 27,90 for aprovado, você receberá um e-mail com o seu login e senha. Você acessa a plataforma na mesma hora pelo seu próprio celular, computador ou tablet e já pode começar a assistir.",
  },
  {
    question: "E se eu comprar, assistir e achar que não serviu pra mim?",
    answer:
      "O risco é zero para você. Você tem 7 dias de garantia incondicional. Se você entrar, fizer o teste dos pensamentos sabotadores e achar que o treinamento não te ajudou a enxergar os seus bloqueios, basta mandar um único e-mail. Eu devolvo 100% dos seus R$ 27,90 na hora, sem perguntas burocráticas.",
  },
  {
    question: "Como eu sei se esse treinamento é realmente pro meu caso?",
    answer:
      'Se você acorda cansado, trabalha duro o mês inteiro, vê o dinheiro sumir rápido e sente que a sua vida não sai do lugar, o seu cérebro está operando no "piloto automático" da autossabotagem . Esse treinamento foi desenhado exatamente para te mostrar onde está a falha que está causando isso.',
  },
];

const FaqSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-12 md:py-20 bg-section-primary px-4 md:px-0 border-t border-gold/10">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="reveal-element font-display font-bold text-2xl md:text-4xl text-foreground inline-block relative mb-4">
            PERGUNTAS FREQUENTES (FAQ)
            <span className="absolute bottom-[-10px] left-0 w-[60%] h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
          </h2>
        </div>

        <div className="reveal-element">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-bg-card border border-gold/20 rounded-lg px-4 md:px-6 data-[state=open]:border-gold/50 data-[state=open]:bg-[#1a3523] transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg text-foreground hover:text-gold-light hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary text-sm md:text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
