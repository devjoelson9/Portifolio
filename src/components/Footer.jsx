export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Joelson Silva. Todos os direitos reservados.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Desenvolvido com React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}