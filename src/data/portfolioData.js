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

export const projects = [
  {
    id: 1,
    name: "Study API",
    description: "API REST para sistema de gestão de estudos com tracking de progresso, flashcards inteligentes e relatórios de desempenho. Inclui autenticação JWT e rate limiting.",
    technologies: ["Node.js", "PostgreSQL", "Redis", "JWT"],
    link: "#"
  },
  {
    id: 2,
    name: "Auth System",
    description: "Sistema completo de autenticação com login social, 2FA via TOTP, refresh tokens e proteção contra ataques brute force. Escalável para milhões de usuários.",
    technologies: ["Laravel", "MySQL", "Redis", "OAuth 2.0"],
    link: "#"
  },
  {
    id: 3,
    name: "DisciplineFlow",
    description: "Plataforma SaaS de produtividade para gestão de tarefas e hábitos. Inclui analytics avançado, gamificação, sincronização entre dispositivos e API pública para integrações.",
    technologies: ["Node.js", "PostgreSQL", "WebSockets", "Docker"],
    link: "#"
  }
];

export const socialLinks = {
  email: "joelson.silva@email.com",
  github: "https://github.com/joelsonsilva",
  linkedin: "https://linkedin.com/in/joelsonsilva"
};

export const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Projetos", href: "#projects" },
  { name: "Sobre", href: "#about" },
  { name: "Contato", href: "#contact" }
];