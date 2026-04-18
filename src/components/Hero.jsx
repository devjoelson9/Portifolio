import ScrollAnimation from './ScrollAnimation';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              Disponível para projetos
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Desenvolvedor Backend
              <span className="block text-blue-600 dark:text-blue-400">focado em performance,</span>
              <span className="block text-blue-600 dark:text-blue-400">segurança e escalabilidade</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
              Construo APIs robustas, sistemas de alta disponibilidade e soluções que 
              escalam. Especializado em Node.js, Laravel e arquitetura de microsserviços.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={300}>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
              >
                Ver Projetos
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                Contato
              </a>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={200} className="hidden md:flex justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 p-8 flex flex-col justify-center items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-slate-900 dark:text-white font-semibold text-lg">Backend Developer</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Joelson Silva</p>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">N</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">L</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">P</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}