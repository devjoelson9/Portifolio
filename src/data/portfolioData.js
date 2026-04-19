export const technologies = [
  {
    id: 1,
    name: "Node.js",
    description: "APIs RESTful, microsserviços e aplicações de alta performance",
    icon: "nodejs"
  },
  {
    id: 2,
    name: "Laravel",
    description: "Desenvolvimento robusto com Laravel, MVC e APIs REST",
    icon: "laravel"
  },
  {
    id: 3,
    name: "PostgreSQL",
    description: "Bancos de dados relacionais, otimização de queries e migrations",
    icon: "postgresql"
  },
  {
    id: 4,
    name: "MySQL",
    description: "Gerenciamento de dados, procedures e otimização de performance",
    icon: "mysql"
  }
];

export const skills = [
  // Linguagens
  { name: "JavaScript", color: "#F7DF1E", category: "language", icon: "js" },
  { name: "TypeScript", color: "#3178C6", category: "language", icon: "ts" },
  { name: "PHP", color: "#777BB4", category: "language", icon: "php" },
  { name: "Python", color: "#3776AB", category: "language", icon: "python" },
  
  // Frameworks
  { name: "Node.js", color: "#339933", category: "framework", icon: "node" },
  { name: "Laravel", color: "#FF2D20", category: "framework", icon: "laravel" },
  { name: "Express", color: "#000000", category: "framework", icon: "express" },
  { name: "React", color: "#61DAFB", category: "framework", icon: "react" },
  
  // Databases
  { name: "PostgreSQL", color: "#336791", category: "database", icon: "postgres" },
  { name: "MySQL", color: "#4479A1", category: "database", icon: "mysql" },
  { name: "Redis", color: "#DC382D", category: "database", icon: "redis" },
  { name: "MongoDB", color: "#47A248", category: "database", icon: "mongo" },
  
  // Concepts
  { name: "REST API", color: "#6DB33F", category: "concept", icon: "rest" },
  { name: "GraphQL", color: "#E10098", category: "concept", icon: "graphql" },
  { name: "Microservices", color: "#7B68EE", category: "concept", icon: "micro" },
  { name: "CI/CD", color: "#CB0000", category: "concept", icon: "cicd" }
];

export const stack = [
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
  { name: "Nginx", icon: "nginx" },
  { name: "Redis", icon: "redis" },
  { name: "CI/CD", icon: "cicd" }
];

export const stats = {
  yearsExperience: "3+",
  projectsDelivered: "15+",
  apisDeveloped: "8+",
  clientsSatisfied: "5+"
};

export const projects = [
  {
    id: 1,
    name: "SGE - Sistema de Gerenciamento de Estoque",
    description: "Sistema de gerenciamento de estoque com API REST, permitindo controle de produtos, movimentações (entrada e saída), monitoramento de níveis e relatórios estratégicos. Projetado com foco em performance, segurança e integração com aplicações web.",
    technologies: ["Spring Boot", "PostgreSQL", "Java", "JavaScript", "Html", "Tailwind CSS", "Docker"],
    link: "#"
  },
  {
    id: 2,
    name: "FinControl - Sistema de Controle Financeiro",
    description: "Sistema de controle financeiro completo, permitindo gestão de receitas, despesas e fluxo de caixa, com categorização de transações e relatórios estratégicos. Desenvolvido com foco em organização, performance e experiência do usuário.",
    technologies: ["Laravel", "Livewire", "MySQL", "Tailwind CSS", "Docker"],
    link: "#"
  },
  {
    id: 3,
    name: "DisciplineFlow",
    description: "Plataforma SaaS para gestão de estudos, permitindo organização por disciplinas e assuntos, acompanhamento de desempenho, cronograma inteligente e insights personalizados. Conta com arquitetura escalável e foco em consistência e aprovação em concursos.",
    technologies: ["Laravel", "Livewire", "Html", "Tailwind CSS", "MySQL", "Redis", "Docker"],
    link: "#"
  }
];

export const socialLinks = {
  email: "joelson.silva.dev11@gmail.com",
  github: "https://github.com/devjoelson9",
  linkedin: "https://www.linkedin.com/in/joelson-silva-2a950a344"
};

export const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Formação", href: "#education" },
  { name: "Tecnologias", href: "#technologies" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" }
];

export const education = [
  {
    id: 1,
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "IFRN - Campus Nova Cruz",
    period: "2023 - 2027",
    description: "Graduação em desenvolvimento de sistemas, incluindo análise de requisitos, modelagem de dados, programação orientada a objetos e metodologias ágeis."
  },
  {
    id: 2,
    degree: "Desenvolvimento Web Full Stack",
    institution: "Rocketseat",
    period: "2024 - 2025",
    description: "Curso intensivo de desenvolvimento web com foco em JavaScript, React, PostgreSQL e boas práticas de código."
  },
  {
    id: 3,
    degree: "Desenvolvimento PHP com Laravel",
    institution: "Udemy",
    period: "2025 - 2026",
    description: "Formação em PHP moderno e Laravel, incluindo autenticação, APIs REST, migrations e deployment."
  }
];