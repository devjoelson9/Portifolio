import ScrollAnimation from '../ui/ScrollAnimation';
import { education } from '../../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Formação
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Minha jornada acadêmica e profissional
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <ScrollAnimation key={edu.id}>
              <div className="bg-white dark:bg-black rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}