import ScrollAnimation from '../ui/ScrollAnimation';
import { stats } from '../../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Sobre
            </h2>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <ScrollAnimation>
            <div className="bg-white dark:bg-black rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Sou desenvolvedor fullstack com foco em construção de APIs robustas, 
                arquitetura de sistemas e boas práticas de segurança. Trabalho com Laravel, Livewire, Spring boot utilizando bancos de dados PostgreSQL, MySQL e MongoDb para soluções 
                que precisam escalar.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Minha abordagem prioriza código limpo, documentação clara e sistemas que 
                podem ser mantidos a longo prazo. Estou sempre buscando aprender novas 
                tecnologias e padrões que agreguem valor aos projetos.
              </p>
              <div className="grid sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.yearsExperience}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Anos de experiência</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.projectsDelivered}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Projetos entregues</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.apisDeveloped}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">APIs desenvolvidas</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.clientsSatisfied}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Clientes satisfeitos</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}