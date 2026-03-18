const PageFooter = () => (
  <footer className="py-16 bg-section-primary border-t border-gold-dark text-center text-sm text-text-secondary">
    <div className="container">
      <span className="font-display text-lg font-black tracking-[2px] text-foreground block mb-8">
        FATOR ESSENCIAL
      </span>
      <div className="flex justify-center gap-8 mb-5">
        <a href="#" className="text-text-secondary hover:text-gold transition-colors">Política de Privacidade</a>
        <a href="#" className="text-text-secondary hover:text-gold transition-colors">Termos de Uso</a>
      </div>
      <p>© 2025 Ricardo Borges · Fator Essencial · Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default PageFooter;
