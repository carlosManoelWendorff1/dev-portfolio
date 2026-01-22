// Atualize seu dict com ícones
export const dict = {
  pt: {
    hello: "👋 OLÁ, EU SOU",
    role: "Engenheiro de Software",
    roleJob: "Desenvolvedor Full Stack Pleno",
    roleLang: "Java & React",
    explore: "EXPLORAR",
    desc: "Desenvolvo soluções completas utilizando tecnologias modernas como React, Next.js e Java com Spring Boot/Quarkus. Foco em performance, escalabilidade e código limpo.",
    projects: "Ver projetos",
    madeWithLove: "Feito com",
    used: "usando Next.js, Tailwind e Shadcn UI",
    technologiesUsed: "Tecnologias e Habilidades",
    resp: "Principais Responsabilidades",
    contact: {
      title: "Vamos Conversar?",
      subtitle: "Estou sempre aberto a novas oportunidades e conexões",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "📍 Jaraguá do Sul, Santa Catarina, Brasil",
      availability: "Disponível para novas oportunidades",
      cta: "Vamos construir algo incrível juntos?",
      copyright:
        "© {year} Carlos Manoel Wendorff. Todos os direitos reservados.",
      form: {
        title: "Envie uma mensagem",
        description:
          "Preencha o formulário abaixo e entrarei em contato o mais rápido possível",
        name: "Nome",
        email: "Email",
        subject: "Assunto",
        message: "Mensagem",
        optional: "(opcional)",
        required: "*",
        sendButton: "Enviar Mensagem",
        sending: "Enviando...",
        directEmailButton: "Usar Email Direto",
        successTitle: "Mensagem enviada com sucesso!",
        successMessage: "Entrarei em contato em breve. Obrigado!",
        error:
          "Erro ao enviar mensagem. Tente novamente ou use o email diretamente.",
        validationError: "Por favor, preencha todos os campos obrigatórios.",
        placeholder: {
          name: "Seu nome",
          email: "seu@email.com",
          subject: "Sobre o que gostaria de conversar?",
          message: "Olá Carlos, gostaria de conversar sobre...",
        },
      },

      cards: {
        linkedin: {
          title: "LinkedIn",
          description: "Conecte-se profissionalmente e veja minha experiência",
        },
        github: {
          title: "GitHub",
          description: "Explore meus projetos, contribuições e código-fonte",
        },
      },

      info: {
        location: "Localização",
        locationDetails: "Jaraguá do Sul, SC<br />Brasil - Remoto disponível",
        directEmail: "Email Direto",
        directEmailLink: "Clique para enviar diretamente",
        availability: "Disponibilidade",
        availabilityDetails:
          "Aberto a novas oportunidades<br />Freelance e projetos de longo prazo",
      },

      footer: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        madeWith: "Feito com",
        using: "usando Next.js, Tailwind e Shadcn UI",
      },
    },
    // Novos campos para o formulário

    oportunities: "Buscando novas oportunidades",
    menu: ["Início", "Especialidades", "Projetos", "Experiência", "Contato"],

    expertise: {
      title: "Minhas Especialidades",
      subtitle: "Tecnologias e habilidades que aplico diariamente",
      items: [
        {
          title: "Frontend",
          desc: "React, Next.js 14, TypeScript, Tailwind CSS, Framer Motion",
          icon: "Layout", // Corresponde ao componente Layout
          color: "from-blue-500 to-cyan-400",
        },
        {
          title: "Backend & APIs",
          desc: "Java, Spring Boot, Quarkus, REST/GraphQL, JPA/Hibernate",
          icon: "Server",
          color: "from-purple-500 to-pink-500",
        },
        {
          title: "Arquitetura & DevOps",
          desc: "Microsserviços, Docker, Kubernetes, AWS, CI/CD, Mensageria",
          icon: "Cloud",
          color: "from-orange-500 to-red-500",
        },
      ],
    },

    work: {
      title: "Projetos",
      subtitle: "Trabalhos que desenvolvi e participei",
      viewProject: "Ver Projeto",
      items: [
        {
          id: 1,
          title: "CloudyMeter",
          type: "Solução IoT  + React + JAVA",
          image: "/projects/saas.jpg", // ou use placeholder
          link: "https://github.com/carlosManoelWendorff1/cloudyMeter",
          demo: false,
        },
        {
          id: 2,
          title: "Java OAuth2 Server",
          type: "Backend & APIs",
          image: "/projects/api.jpg",
          link: "https://github.com/carlosManoelWendorff1/Oauth2Server",
          demo: false,
        },
        {
          id: 3,
          title: "Bank Login Web",
          type: "Vite",
          image: "/projects/microservices.jpg",
          link: "https://github.com/carlosManoelWendorff1/bank-login-web",
          demo: false,
        },
      ],
    },

    experience: {
      title: "Experiência Profissional",
      subtitle: "Minha jornada e contribuições",
      items: [
        {
          company: "WEG",
          role: "Software Architecture Researcher",
          period: "dezembro 2024 - Presente",
          duration: "1 ano 2 meses",
          location: "Jaraguá do Sul, SC, Brasil",
          description:
            "Pesquisa e desenvolvimento de arquiteturas de software inovadoras para soluções industriais.",
          technologies: [
            "Java",
            "Spring Boot",
            "React",
            "Next",
            "Design Systems",
            "Microservices",
            "Docker",
            "Kubernetes",
            "Cloud",
          ],
          responsibilities: [
            "Pesquisa e desenvolvimento de novas arquiteturas de software",
            "Otimização de sistemas existentes",
            "Implementação de práticas de DevOps",
            "Colaboração com equipes multidisciplinares",
          ],
        },
        {
          company: "V2COM",
          role: "Bolsista de Pesquisa em Inovações Tecnológicas",
          period: "outubro 2022 - dezembro 2024",
          duration: "2 anos 3 meses",
          location: "Santa Catarina, Brasil",
          description:
            "Pesquisa e desenvolvimento de soluções tecnológicas inovadoras para IoT e automação.",
          technologies: [
            "Python",
            "IoT",
            "Research",
            "Data Analysis",
            "Prototyping",
            "Java",
            "Quarkus",
            "Angular",
            "React",
          ],
          responsibilities: [
            "Desenvolvimento de protótipos para soluções IoT",
            "Análise de dados e pesquisas tecnológicas",
            "Colaboração em projetos de inovação",
            "Documentação técnica e relatórios",
          ],
        },
        {
          company: "NAXI Fibra",
          role: "Suporte Técnico de Redes",
          period: "março 2022 - setembro 2022",
          duration: "7 meses",
          location: "Jaraguá do Sul, SC, Brasil",
          description:
            "Suporte técnico especializado em redes de telecomunicações.",
          technologies: [
            "Networking",
            "Customer Support",
            "Troubleshooting",
            "TCP/IP",
          ],
          responsibilities: [
            "Atendimento técnico ao cliente",
            "Resolução de problemas de rede",
            "Configuração de equipamentos",
            "Suporte interno para equipe de redes",
          ],
        },
      ],
    },

    education: {
      title: "Formação Acadêmica",
      items: [
        {
          institution: "Católica de Santa Catarina - Centro Universitário",
          degree: "Bacharelado em Engenharia de Software",
          period: "fevereiro 2022 - dezembro 2025",
          description:
            "Formação completa em engenharia de software com foco em desenvolvimento e arquitetura de sistemas.",
        },
        {
          institution: "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
          degree: "Formação Técnica",
          period: "2020 - dezembro 2021",
          description:
            "Formação técnica com ênfase em áreas industriais e tecnológicas.",
        },
      ],
    },
  },

  en: {
    hello: "👋 HI, I'M",
    role: "Software Engineer",
    roleJob: "Full Stack Developer",
    roleLang: "Java & React",
    desc: "I develop complete solutions using modern technologies like React, Next.js, and Java with Spring Boot/Quarkus. Focus on performance, scalability, and clean code.",
    projects: "View Projects",
    madeWithLove: "Made with",
    technologiesUsed: "Technologies and Skills",
    resp: "Main Responsibilities",
    used: "using Next.js, Tailwind and Shadcn UI",
    contact: {
      title: "Let's Connect",
      subtitle: "I'm always open to new opportunities and connections",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "📍 Jaraguá do Sul, Santa Catarina, Brazil",
      availability: "Open to new opportunities",
      cta: "Let's build something amazing together?",
      copyright: "© {year} Carlos Manoel Wendorff. All rights reserved.",
      form: {
        title: "Send a message",
        description:
          "Fill out the form below and I'll get back to you as soon as possible",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        optional: "(optional)",
        required: "*",
        sendButton: "Send Message",
        sending: "Sending...",
        directEmailButton: "Use Direct Email",
        successTitle: "Message sent successfully!",
        successMessage: "I'll get back to you soon. Thank you!",
        error: "Error sending message. Try again or use direct email.",
        validationError: "Please fill in all required fields.",
        placeholder: {
          name: "Your name",
          email: "your@email.com",
          subject: "What would you like to talk about?",
          message: "Hello Carlos, I'd like to discuss...",
        },
      },

      cards: {
        linkedin: {
          title: "LinkedIn",
          description: "Connect professionally and view my experience",
        },
        github: {
          title: "GitHub",
          description: "Explore my projects, contributions and source code",
        },
      },

      info: {
        location: "Location",
        locationDetails: "Jaraguá do Sul, SC<br />Brazil - Remote available",
        directEmail: "Direct Email",
        directEmailLink: "Click to send directly",
        availability: "Availability",
        availabilityDetails:
          "Open to new opportunities<br />Freelance and long-term projects",
      },

      footer: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        madeWith: "Made with",
        using: "using Next.js, Tailwind and Shadcn UI",
      },
    },
    // New fields for the form

    menu: ["Home", "Expertise", "Projects", "Experience", "Contact"],
    oportunities: "Seeking new opportunities",
    explore: "EXPLORE",
    expertise: {
      title: "My Expertise",
      subtitle: "Technologies and skills I apply daily",
      items: [
        {
          title: "Frontend",
          desc: "React, Next.js 14, TypeScript, Tailwind CSS, Framer Motion",
          icon: "Layout",
          color: "from-blue-500 to-cyan-400",
        },
        {
          title: "Backend & APIs",
          desc: "Java, Spring Boot, Quarkus, REST/GraphQL, JPA/Hibernate",
          icon: "Server",
          color: "from-purple-500 to-pink-500",
        },
        {
          title: "Architecture & DevOps",
          desc: "Microservices, Docker, Kubernetes, AWS, CI/CD, Messaging",
          icon: "Cloud",
          color: "from-orange-500 to-red-500",
        },
      ],
    },

    work: {
      title: "Projects",
      subtitle: "Work I've developed and participated in",
      viewProject: "View Project",
      items: [
        {
          id: 1,
          title: "CloudyMeter",
          type: "Iot Solution + React + JAVA",
          image: "/projects/saas.jpg", // ou use placeholder
          link: "https://github.com/carlosManoelWendorff1/cloudyMeter",
          demo: false,
        },
        {
          id: 2,
          title: "Java OAuth2 Server",
          type: "Backend & APIs",
          image: "/projects/api.jpg",
          link: "https://github.com/carlosManoelWendorff1/Oauth2Server",
          demo: false,
        },
        {
          id: 3,
          title: "Bank Login Web",
          type: "Vite",
          image: "/projects/microservices.jpg",
          link: "https://github.com/carlosManoelWendorff1/bank-login-web",
          demo: false,
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My journey and contributions",
      items: [
        {
          company: "WEG",
          role: "Software Architecture Researcher",
          period: "December 2024 - Present",
          duration: "1 year 2 months",
          location: "Jaraguá do Sul, SC, Brazil",
          description:
            "Research and development of innovative software architectures for industrial solutions.",
          technologies: [
            "Java",
            "Spring Boot",
            "React",
            "Next",
            "Design Systems",
            "Microservices",
            "Docker",
            "Kubernetes",
            "Cloud",
          ],
          responsibilities: [
            "Research and development of new software architectures",
            "Optimization of existing systems",
            "Implementation of DevOps practices",
            "Collaboration with multidisciplinary teams",
          ],
        },
        {
          company: "V2COM",
          role: "Technology Innovation Research Scholar",
          period: "October 2022 - December 2024",
          duration: "2 years 3 months",
          location: "Santa Catarina, Brazil",
          description:
            "Research and development of innovative technological solutions for IoT and automation.",
          technologies: [
            "Python",
            "IoT",
            "Research",
            "Data Analysis",
            "Prototyping",
            "Java",
            "Quarkus",
            "Angular",
            "React",
          ],
          responsibilities: [
            "Development of prototypes for IoT solutions",
            "Data analysis and technological research",
            "Collaboration on innovation projects",
            "Technical documentation and reports",
          ],
        },
        {
          company: "NAXI Fibra",
          role: "Network Technical Support",
          period: "March 2022 - September 2022",
          duration: "7 months",
          location: "Jaraguá do Sul, SC, Brazil",
          description:
            "Specialized technical support for telecommunications networks.",
          technologies: [
            "Networking",
            "Customer Support",
            "Troubleshooting",
            "TCP/IP",
          ],
          responsibilities: [
            "Technical customer support",
            "Network problem resolution",
            "Equipment configuration",
            "Internal support for network team",
          ],
        },
      ],
    },

    education: {
      title: "Academic Background",
      items: [
        {
          institution: "Católica de Santa Catarina - University Center",
          degree: "Bachelor's in Software Engineering",
          period: "February 2022 - December 2025",
          description:
            "Complete training in software engineering with focus on system development and architecture.",
        },
        {
          institution: "SENAI/SC - National Industrial Learning Service",
          degree: "Technical Training",
          period: "2020 - December 2021",
          description:
            "Technical training with emphasis on industrial and technological areas.",
        },
      ],
    },
  },
};
