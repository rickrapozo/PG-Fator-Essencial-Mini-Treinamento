# Fator Essencial - Mind Unlock Project

## Project Vision
Landing page de alta conversão para o treinamento "Fator Essencial". Foco em neurociência, prosperidade e quebra de padrões limitantes. Estética noir premium com detalhes em dourado.

## Tech Stack
- Frontend: React + Vite + TypeScript
- Styling: Tailwind CSS (Custom components in src/components/ui)
- Animations: Intersection Observer (useReveal), native CSS transitions.
- Video: Custom YouTube VSL Player with Smart Play.

## Xquads Config
- Orchestrator: @claude-code-mastery:claude-mastery-chief
- Specialist: @design-squad:ui-engineer
- Strategy: @copy-squad:hormozi-squad

## Rules & Guidelines
- Manter paleta #D4AF37 (Gold) e tons de preto/zinc-950.
- VSL deve seguir o padrão Smart Play: autoplay mudo, reinício com som ao clique.
- Não remover a barra de volume e velocidade do VSL.
- Preservar a estética noir e tipografia font-display/font-accent.

## Project Structure
- `src/components/`: Componentes principais das seções.
- `src/components/ui/`: Biblioteca base de componentes (Radix/Shadcn).
- `src/components/VSLPlayer.tsx`: Player customizado.
