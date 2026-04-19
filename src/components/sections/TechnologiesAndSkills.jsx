import { useState, useEffect, useRef } from 'react';
import ScrollAnimation from '../ui/ScrollAnimation';
import { 
  FaJava, FaPhp, FaJs, FaLaravel, FaDocker, FaAws, 
  FaReact, FaHtml5, FaCss3, FaBootstrap, FaGit, FaGithub,
  FaDatabase, FaServer, FaCode
} from 'react-icons/fa';
import { 
  SiSpring, SiMongodb, SiRedis, SiMysql, SiPostgresql, 
  SiTailwindcss, SiLivewire, SiGithubactions
} from 'react-icons/si';

const skills = [
  { name: "Java", icon: "java" },
  { name: "PHP", icon: "php" },
  { name: "JavaScript", icon: "js" },
  { name: "Laravel", icon: "laravel" },
  { name: "Livewire", icon: "livewire" },
  { name: "Spring Boot", icon: "springBoot" },
  { name: "Spring Security", icon: "springSecurity" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
  { name: "SQL", icon: "sql" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "MySQL", icon: "mysql" },
  { name: "MongoDB", icon: "mongo" },
  { name: "Redis", icon: "redis" },
  { name: "React", icon: "react" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Microsservices", icon: "micro" },
  { name: "REST API", icon: "rest" },
  { name: "CI/CD", icon: "cicd" }
];

const iconMap = {
  java: <FaJava className="w-10 h-10" />,
  php: <FaPhp className="w-10 h-10" />,
  js: <FaJs className="w-10 h-10" />,
  laravel: <FaLaravel className="w-10 h-10" />,
  livewire: <SiLivewire className="w-10 h-10" />,
  springBoot: <SiSpring className="w-10 h-10" style={{ color: "#6DB33F" }} />,
  springSecurity: <SiSpring className="w-10 h-10" style={{ color: "#4B5563" }} />,
  docker: <FaDocker className="w-10 h-10" />,
  aws: <FaAws className="w-10 h-10" />,
  sql: <FaDatabase className="w-10 h-10" />,
  postgres: <SiPostgresql className="w-10 h-10" />,
  mysql: <SiMysql className="w-10 h-10" />,
  mongo: <SiMongodb className="w-10 h-10" />,
  redis: <SiRedis className="w-10 h-10" />,
  react: <FaReact className="w-10 h-10" />,
  html: <FaHtml5 className="w-10 h-10" />,
  css: <FaCss3 className="w-10 h-10" />,
  tailwind: <SiTailwindcss className="w-10 h-10" />,
  bootstrap: <FaBootstrap className="w-10 h-10" />,
  git: <FaGit className="w-10 h-10" />,
  github: <FaGithub className="w-10 h-10" />,
  micro: <FaServer className="w-10 h-10" />,
  rest: <FaCode className="w-10 h-10" />,
  cicd: <SiGithubactions className="w-10 h-10" />
};

const colorMap = {
  java: "#007396",
  php: "#777BB4",
  js: "#F7DF1E",
  laravel: "#FF2D20",
  livewire: "#4F46E5",
  spring: "#6DB33F",
  docker: "#2496ED",
  aws: "#FF9900",
  sql: "#336791",
  postgres: "#336791",
  mysql: "#4479A1",
  mongo: "#47A248",
  redis: "#DC382D",
  react: "#61DAFB",
  html: "#E34F26",
  css: "#1572B6",
  tailwind: "#06B6D4",
  bootstrap: "#7952B3",
  git: "#F05032",
  github: "#181717",
  micro: "#7B68EE",
  rest: "#6DB33F",
  cicd: "#CB0000"
};

export default function TechnologiesAndSkills() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const itemWidth = 160; // Largura de cada item + gap
  const totalItems = skills.length;
  const visibleItems = 6;
  
  // Animação contínua para a esquerda
  useEffect(() => {
    const animate = () => {
      setOffset((prev) => {
        const maxOffset = -(totalItems * itemWidth);
        // Quando chegar ao final, volta ao início suavemente
        if (prev <= maxOffset + (visibleItems * itemWidth)) {
          return 0;
        }
        return prev - 1.7; // Velocidade da animação
      });
    };

    const animationId = requestAnimationFrame(function loop() {
      animate();
      requestAnimationFrame(loop);
    });

    return () => cancelAnimationFrame(animationId);
  }, [totalItems]);

  // Duplicar skills para criar efeito infinito
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="technologies" className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Tecnologias e Habilidades
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Tecnologias e habilidades com as quais venho trabalhando e me aprimorando constantemente para entregar soluções de alta qualidade
            </p>
          </div>
        </ScrollAnimation>

        {/* Carrossel infinito com animação contínua */}
        <div className="relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex gap-4"
            style={{
              transform: `translateX(${offset}px)`,
              transition: 'none'
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-36 flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg hover:scale-105"
                style={{ color: colorMap[skill.icon] }}
              >
                <div className="mb-3">
                  {iconMap[skill.icon]}
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradientes de fade nas bordas */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-5 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-5 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
