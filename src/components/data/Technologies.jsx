import { technologies } from '../../data/portfolioData';
import ScrollAnimation from '../ui/ScrollAnimation';

const iconMap = {
  nodejs: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5c-.06-.04-.14-.07-.22-.07-.27 0-.5.23-.5.5v.5c0 .28.23.5.5.5.27 0 .5-.22.5-.5V16.5l7.44-4.29c.23-.13.5-.2.78-.2.27 0 .55.07.78.2l7.44 4.29v.5c0 .28.23.5.5.5.27 0 .5-.22.5-.5 0-.27-.23-.5-.5-.5-.08 0-.16.03-.22.07l-7.44-4.29c-.23-.13-.5-.2-.78-.2zm0 2.12c.27 0 .55.07.78.2l7.44 4.29c.23.13.39.35.42.6.03.25-.06.51-.26.68l-7.44 4.29c-.23.13-.5.2-.78.2-.27 0-.55-.07-.78-.2L3.5 9.74c-.2-.17-.29-.43-.26-.68.03-.25.19-.47.42-.6l7.44-4.29z"/>
    </svg>
  ),
  laravel: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5c-.06-.04-.14-.07-.22-.07-.27 0-.5.23-.5.5v.5c0 .28.23.5.5.5.27 0 .5-.22.5-.5V16.5l7.44-4.29c.23-.13.5-.2.78-.2.27 0 .55.07.78.2l7.44 4.29v.5c0 .28.23.5.5.5.27 0 .5-.22.5-.5 0-.27-.23-.5-.5-.5-.08 0-.16.03-.22.07l-7.44-4.29c-.23-.13-.5-.2-.78-.2zm0 2.12c.27 0 .55.07.78.2l7.44 4.29c.23.13.39.35.42.6.03.25-.06.51-.26.68l-7.44 4.29c-.23.13-.5.2-.78.2-.27 0-.55-.07-.78-.2L3.5 9.74c-.2-.17-.29-.43-.26-.68.03-.25.19-.47.42-.6l7.44-4.29z"/>
    </svg>
  ),
  postgresql: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5c-.06-.04-.14-.07-.22-.07-.27 0-.5.23-.5.5v.5c0 .28.23.5.5.5.27 0 .5-.22.5-.5V16.5l7.44-4.29c.23-.13.5-.2.78-.2.27 0 .55.07.78.2l7.44 4.29v.5c0 .28.23.5.5.5.27 0 .5-.22.5-.5 0-.27-.23-.5-.5-.5-.08 0-.16.03-.22.07l-7.44-4.29c-.23-.13-.5-.2-.78-.2zm0 2.12c.27 0 .55.07.78.2l7.44 4.29c.23.13.39.35.42.6.03.25-.06.51-.26.68l-7.44 4.29c-.23.13-.5.2-.78.2-.27 0-.55-.07-.78-.2L3.5 9.74c-.2-.17-.29-.43-.26-.68.03-.25.19-.47.42-.6l7.44-4.29z"/>
    </svg>
  ),
  mysql: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5c-.06-.04-.14-.07-.22-.07-.27 0-.5.23-.5.5v.5c0 .28.23.5.5.5.27 0 .5-.22.5-.5V16.5l7.44-4.29c.23-.13.5-.2.78-.2.27 0 .55.07.78.2l7.44 4.29v.5c0 .28.23.5.5.5.27 0 .5-.22.5-.5 0-.27-.23-.5-.5-.5-.08 0-.16.03-.22.07l-7.44-4.29c-.23-.13-.5-.2-.78-.2zm0 2.12c.27 0 .55.07.78.2l7.44 4.29c.23.13.39.35.42.6.03.25-.06.51-.26.68l-7.44 4.29c-.23.13-.5.2-.78.2-.27 0-.55-.07-.78-.2L3.5 9.74c-.2-.17-.29-.43-.26-.68.03-.25.19-.47.42-.6l7.44-4.29z"/>
    </svg>
  )
};

export default function Technologies() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Tecnologias
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Stack principal para desenvolvimento de APIs robustas
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className="flex-shrink-0 w-72 snap-center"
            >
              <div
                className="group bg-white dark:bg-black rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[tech.icon]}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}