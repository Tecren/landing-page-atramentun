export type Language = 'en' | 'pt-BR' | 'es'

export const en = {
  nav: {
    introduction: 'Introduction',
    features: 'Features',
    'how-it-works': 'How it works',
  },
  header: {
    backToTop: 'Atramentum — back to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primaryNav: 'Primary navigation',
    mobileNav: 'Mobile navigation',
    login: 'Login',
    register: 'Register',
  },
  hero: {
    eyebrow: 'Tabletop RPG Platform',
    titleLead: 'Everything your tabletop RPG needs',
    titleAccent: 'in one place.',
    desc: 'Atramentum brings character sheets, game organization, community, friends, bookshelves, and real-time game rooms together for players and Game Masters.',
  },
  intro: {
    eyebrow: 'Why Atramentum',
    title: 'Built for players and Game Masters',
    subtitle:
      'A platform created for tabletop RPG communities — from character management to real-time sessions, everything stays organized and connected.',
    items: [
      {
        id: 'characterManagement',
        title: 'Character Management',
        text: 'Custom modular sheets that fit the RPGs you actually play.',
      },
      {
        id: 'campaigns',
        title: 'Campaigns & Games',
        text: 'Organize sessions, players, and resources around each game. Play together in real time with a tabletop designed for RPGs.',
      },
      {
        id: 'community',
        title: 'Community',
        text: 'Share posts and ideas with players across the platform. Connect with your group in just a few clicks.',
      },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Designed around your table',
    subtitle:
      'From character creation to the final roll, Atramentum brings every part of a campaign together.',
    list: {
      characterSheets: {
        title: 'Modular Character Sheets',
        lead: 'Character sheets that feel like your table.',
        description:
          'Build character sheets from reusable modules, so every grid fits the rules you actually play. Customize fields, layout, and roles — no matter which RPG or homebrew system your game uses.',
        points: [
          'Assemble sheets from reusable modules',
          'Fit any RPG or homebrew system',
        ],
        alt: 'Modular character sheet editor in Atramentum',
      },
      community: {
        title: 'Community and Posts',
        lead: 'Share your world with the community.',
        description:
          'Post campaign highlights, trade tips, and discover content from the Atramentum community. Interact with other players and let your creations reach other tables.',
        points: [
          'Posts, comments, and reactions',
          'Share homebrew and ideas',
          'Follow players and companies',
        ],
        alt: 'Community and posts feed in Atramentum',
      },
      gameRoom: {
        title: 'Game Room',
        lead: 'Play together, wherever you are.',
        description:
          'The real-time game room brings your table online with tools designed for RPG sessions — shared boards, dice, and notes that keep everyone in sync from the first roll to the last.',
        points: [
          'Real-time maps, tokens, and dice',
          'Built for long online sessions',
        ],
        alt: 'Real-time game room in Atramentum',
      },
      bookshelf: {
        title: 'Your RPG Bookshelf',
        lead: 'Every book, always at hand.',
        description:
          'Keep rules, adventures, and homebrew documents in a personal bookshelf. Organize your RPG PDFs and resources so they are a page away when you need them.',
        points: ['Organize PDFs and resources', 'Tag and browse your collection'],
        alt: 'RPG bookshelf in Atramentum',
      },
      friends: {
        title: 'Friends and Game Invitations',
        lead: 'Keep your table together.',
        description:
          'Connect with the people you play with. Keep your group close and jump into games together with just a few clicks.',
        points: ['Connect with players', 'Invite friends to any game'],
        alt: 'Friends and game invitations in Atramentum',
      },
    },
  },
  how: {
    eyebrow: 'How it works',
    title: 'From profile to game room',
    subtitle: 'Three steps between you and your next session.',
    steps: [
      {
        title: 'Create your profile',
        text: 'Set up your profile and organize your RPG content — characters, bookshelf, and library.',
      },
      {
        title: 'Bring your table together',
        text: 'Create or join a game, then prepare your characters and resources for the session.',
      },
      {
        title: 'Enter the game room',
        text: 'Play with your group in real time, exactly like being around the same table.',
      },
    ],
  },
  cta: {
    eyebrow: 'Ready to play?',
    title: 'Your next session starts here.',
    enter: 'Enter Atramentum',
  },
  footer: {
    navLabel: 'Footer navigation',
    desc: 'The tabletop RPG platform for players and Game Masters.',
    copyright: '© 2026 Atramentum. All rights reserved.',
    instagram: 'Atramentum on Instagram',
  },
}

export type I18nMessage = typeof en

export const ptBR = {
  nav: {
    introduction: 'Introdução',
    features: 'Recursos',
    'how-it-works': 'Como funciona',
  },
  header: {
    backToTop: 'Atramentum — voltar ao topo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    primaryNav: 'Navegação principal',
    mobileNav: 'Navegação no celular',
    login: 'Entrar',
    register: 'Registre-se',
  },
  hero: {
    eyebrow: 'Plataforma de RPG de Mesa',
    titleLead: 'Tudo o que seu RPG de mesa precisa',
    titleAccent: 'em um só lugar.',
    desc: 'O Atramentum reúne fichas de personagem, organização de jogos, comunidade, amigos, estantes e salas de jogo em tempo real para jogadores e mestres.',
  },
  intro: {
    eyebrow: 'Por que Atramentum',
    title: 'Feito para jogadores e mestres',
    subtitle:
      'Uma plataforma criada para comunidades de RPG de mesa — do gerenciamento de personagens às sessões em tempo real, tudo organizado e conectado.',
    items: [
      {
        id: 'characterManagement',
        title: 'Gerenciamento de Personagens',
        text: 'Fichas modulares personalizáveis que se encaixam nos RPGs que você realmente joga.',
      },
      {
        id: 'campaigns',
        title: 'Campanhas e Jogos',
        text: 'Organize sessões, jogadores e recursos em torno de cada jogo. Joguem juntos em tempo real com uma mesa feita para RPGs.',
      },
      {
        id: 'community',
        title: 'Comunidade e Amigos',
        text: 'Compartilhe posts e ideias com jogadores de toda a plataforma. Conecte-se com seu grupo com apenas alguns cliques.',
      },
    ],
  },
  features: {
    eyebrow: 'Recursos',
    title: 'Projetado para sua mesa',
    subtitle:
      'Da criação de personagem ao último dado, o Atramentum reúne todas as partes de uma campanha.',
    list: {
      characterSheets: {
        title: 'Fichas de Personagem Modulares',
        lead: 'Fichas que parecem a sua mesa.',
        description:
          'Monte fichas de personagem a partir de módulos reutilizáveis, para que cada grade se encaixe nas regras que você realmente joga. Personalize campos, layout e funções — não importa se o sistema é de RPG comercial ou caseiro.',
        points: [
          'Monte fichas a partir de módulos reutilizáveis',
          'Sirva para qualquer RPG ou sistema caseiro',
        ],
        alt: 'Editor de ficha de personagem modular no Atramentum',
      },
      community: {
        title: 'Comunidade e Posts',
        lead: 'Compartilhe seu mundo com a comunidade.',
        description:
          'Publique destaques de campanha, troque dicas e descubra conteúdos da comunidade do Atramentum. Interaja com outros jogadores e deixe suas criações chegarem a outras mesas.',
        points: [
          'Posts, comentários e reações',
          'Compartilhe homebrew e ideias',
          'Siga jogadores e empresas',
        ],
        alt: 'Feed de comunidade e posts no Atramentum',
      },
      gameRoom: {
        title: 'Salas de Jogo',
        lead: 'Joguem juntos, onde estiverem.',
        description:
          'A sala de jogo em tempo real leva sua mesa para a internet com ferramentas feitas para sessões de RPG — quadros compartilhados, dados e anotações que mantêm todos sincronizados da primeira a última rolagem.',
        points: [
          'Mapas, tokens e dados em tempo real',
          'Feita para longas sessões online',
        ],
        alt: 'Sala de jogo em tempo real no Atramentum',
      },
      bookshelf: {
        title: 'Sua Estante de RPG',
        lead: 'Seus livros, sempre à mão.',
        description:
          'Mantenha regras, aventuras e documentos caseiros em uma estante pessoal. Organize seus PDFs e recursos de RPG para que estejam a uma página de distância quando você precisar.',
        points: ['Organize PDFs e recursos', 'Marque e navegue pela sua coleção'],
        alt: 'Estante de RPG no Atramentum',
      },
      friends: {
        title: 'Amigos e Convites para Jogos',
        lead: 'Mantenha sua mesa unida.',
        description:
          'Conecte-se com as pessoas com quem você joga. Mantenha seu grupo por perto e entre em jogos juntos com apenas alguns cliques.',
        points: [
          'Conecte-se com jogadores',
          'Convite amigos para qualquer jogo',
        ],
        alt: 'Lista de amigos no Atramentum',
      },
    },
  },
  how: {
    eyebrow: 'Como funciona',
    title: 'Do perfil à sala de jogo',
    subtitle: 'Três passos entre você e sua próxima sessão.',
    steps: [
      {
        title: 'Crie seu perfil',
        text: 'Monte seu perfil e organize seu conteúdo de RPG — personagens, estante e biblioteca.',
      },
      {
        title: 'Reúna sua mesa',
        text: 'Crie ou entre em um jogo e prepare personagens e recursos para a sessão.',
      },
      {
        title: 'Entre na sala de jogo',
        text: 'Jogue com seu grupo em tempo real, exatamente como se estivessem na mesma mesa.',
      },
    ],
  },
  cta: {
    eyebrow: 'Pronto para jogar?',
    title: 'Sua próxima sessão começa aqui.',
    enter: 'Entrar no Atramentum',
  },
  footer: {
    navLabel: 'Navegação do rodapé',
    desc: 'A plataforma de RPG de mesa para jogadores e mestres.',
    copyright: '© 2026 Atramentum. Todos os direitos reservados.',
    instagram: 'Atramentum no Instagram',
  },
} satisfies I18nMessage

export const es = {
  nav: {
    introduction: 'Introducción',
    features: 'Funciones',
    'how-it-works': 'Cómo funciona',
  },
  header: {
    backToTop: 'Atramentum — volver arriba',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    primaryNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    login: 'Iniciar sesión',
    register: 'Registrarse',
  },
  hero: {
    eyebrow: 'Plataforma de RPG de Mesa',
    titleLead: 'Todo lo que tu RPG de mesa necesita',
    titleAccent: 'en un solo lugar.',
    desc: 'Atramentum reúne fichas de personaje, organización de juegos, comunidad, amigos, estanterías y salas de juego en tiempo real para jugadores y amos de juego.',
  },
  intro: {
    eyebrow: 'Por qué Atramentum',
    title: 'Hecho para jugadores y amos de juego',
    subtitle:
      'Una plataforma creada para comunidades de RPG de mesa: desde la gestión de personajes hasta las sesiones en tiempo real, todo organizado y conectado.',
    items: [
      {
        id: 'characterManagement',
        title: 'Gestión de Personajes',
        text: 'Hojas modulares personalizables que se adaptan a los RPGs que realmente juegas.',
      },
      {
        id: 'campaigns',
        title: 'Campañas y Juegos',
        text: 'Organiza las sesiones, los jugadores y los recursos en torno a cada juego. Juega en tiempo real con una mesa diseñada para juegos de rol.',
      },
      {
        id: 'community',
        title: 'Comunidad',
        text: 'Comparte publicaciones e ideas con otros jugadores en la plataforma. Conéctate con tu grupo en tan solo unos clics.',
      },
    ],
  },
  features: {
    eyebrow: 'Funciones',
    title: 'Diseñado alrededor de tu mesa',
    subtitle:
      'Desde la creación de personajes hasta el último dado, Atramentum reúne todas las partes de una campaña.',
    list: {
      characterSheets: {
        title: 'Hojas de Personaje Modulares',
        lead: 'Hojas que se sienten como tu mesa.',
        description:
          'Arma hojas de personaje a partir de módulos reutilizables para que cada cuadrícula encaje con las reglas que realmente juegas. Personaliza campos, diseño y funciones, sin importar si tu sistema es de RPG comercial o casero.',
        points: [
          'Arma hojas a partir de módulos reutilizables',
          'Sirve para cualquier RPG o sistema casero',
        ],
        alt: 'Editor de hoja de personaje modular en Atramentum',
      },
      community: {
        title: 'Comunidad y Publicaciones',
        lead: 'Comparte tu mundo con la comunidad.',
        description:
          'Publica momentos destacados de campaña, intercambia consejos y descubre contenido de la comunidad de Atramentum. Interactúa con otros jugadores y deja que tus creaciones lleguen a otras mesas.',
        points: [
          'Publicaciones, comentarios y reacciones',
          'Comparte homebrew e ideas',
          'Sigue a jugadores y empresas',
        ],
        alt: 'Feed de comunidad y publicaciones en Atramentum',
      },
      gameRoom: {
        title: 'Salas de Juego',
        lead: 'Jueguen juntos, donde estén.',
        description:
          'La sala de juego en tiempo real lleva tu mesa a internet con herramientas hechas para sesiones de RPG: tableros, dados y notas compartidos que mantienen a todos sincronizados del primer al último dado.',
        points: [
          'Mapas, fichas y dados en tiempo real',
          'Hecha para largas sesiones en línea',
        ],
        alt: 'Sala de juego en tiempo real en Atramentum',
      },
      bookshelf: {
        title: 'Tu Estantería de RPG',
        lead: 'Cada libro, siempre a la mano.',
        description:
          'Guarda reglas, aventuras y documentos caseros en una estantería personal. Organiza tus PDFs y recursos de RPG para que queden a una página de distancia cuando los necesites.',
        points: ['Organiza PDFs y recursos', 'Etiqueta y navega por tu colección'],
        alt: 'Estantería de RPG en Atramentum',
      },
      friends: {
        title: 'Amigos e Invitaciones a Juegos',
        lead: 'Mantén tu mesa unida.',
        description:
          'Conéctate con las personas con las que juegas. Mantén a tu grupo cerca y súmate a juegos juntos con solo unos clics.',
        points: ['Conéctate con jugadores', 'Invita amigos a cualquier juego'],
        alt: 'Lista de amigos en Atramentum',
      },
    },
  },
  how: {
    eyebrow: 'Cómo funciona',
    title: 'Del perfil a la sala de juego',
    subtitle: 'Tres pasos entre tú y tu próxima sesión.',
    steps: [
      {
        title: 'Crea tu perfil',
        text: 'Configura tu perfil y organiza tu contenido de RPG: personajes, estantería y biblioteca.',
      },
      {
        title: 'Reúne tu mesa',
        text: 'Crea o únete a un juego y prepara tus personajes y recursos para la sesión.',
      },
      {
        title: 'Entra a la sala de juego',
        text: 'Juega con tu grupo en tiempo real, exactamente como si estuvieran alrededor de la misma mesa.',
      },
    ],
  },
  cta: {
    eyebrow: '¿Listo para jugar?',
    title: 'Tu próxima sesión empieza aquí.',
    enter: 'Entrar en Atramentum',
  },
  footer: {
    navLabel: 'Navegación del pie de página',
    desc: 'La plataforma de RPG de mesa para jugadores y amos de juego.',
    copyright: '© 2026 Atramentum. Todos los derechos reservados.',
    instagram: 'Atramentum en Instagram',
  },
} satisfies I18nMessage

export const messages: Record<Language, I18nMessage> = {
  en,
  'pt-BR': ptBR,
  es,
}