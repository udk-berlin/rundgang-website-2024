const projects = {
  bul: {
    artist: 'Joana Bachurova',
    faculty: 'Fakultät Musik',
    subject: 'Lehramt Musik an Grundschulen',
    language: {
      name: 'Bulgarian',
      iso_639_1_code: 'bg',
      searchParam: 'bul',
    },
  },
  de: {
    artist: 'Aaron Langguth',
    faculty: 'Fakultät Gestaltung',
    subject: 'Gesellschafts- und Wirtschaftskommunikation',
    language: {
      name: 'German',
      iso_639_1_code: 'de',
      searchParam: 'de',
    },
  },
  hi: {
    artist: 'Agneya Chikte',
    faculty: 'Jazz Institut Berlin',
    subject: 'Master of Music',
    language: {
      name: 'Hindi',
      iso_639_1_code: 'hi',
      searchParam: 'hi',
    },
  },
  ja: {
    artist: 'Yui Yamagishi',
    faculty: 'Fakultät Gestaltung',
    subject: 'Visuelle Kommunikation',
    language: {
      name: 'Japanese',
      iso_639_1_code: 'ja',
      searchParam: 'ja',
    },
  },
  ka: {
    artist: 'Liza Bokeria',
    faculty: 'Fakultät Gestaltung',
    subject: 'Architektur',
    language: {
      name: 'Georgian',
      iso_639_1_code: 'ka',
      searchParam: 'ka',
    },
  },
  mr: {
    artist: 'Agneya Chikte',
    faculty: 'Jazz Institut Berlin',
    subject: 'Master of Music',
    language: {
      name: 'Marathi',
      iso_639_1_code: 'mr',
      searchParam: 'mr',
    },
  },
  pt: {
    artist: 'Kim R. Martins',
    faculty: 'Berlin Career College',
    subject: 'Sound Studies and Sonic Arts',
    language: {
      name: 'Portugese (Brazilian)',
      iso_639_1_code: 'pt',
      searchParam: 'pt',
    },
  },
  ru: {
    artist: 'Konstantin Maltcev',
    faculty: 'Fakultät Musik',
    subject: 'Lehramt Musik',
    language: {
      name: 'Russian',
      iso_639_1_code: 'ru',
      searchParam: 'ru',
    },
  },
  es: {
    artist: 'B. Skarlett B. Cisneros',
    faculty: 'Fakultät Gestaltung',
    subject: 'Produktdesign',
    language: {
      name: 'Spanish',
      iso_639_1_code: 'es',
      searchParam: 'es',
    },
  },
  sr: {
    artist: 'Milica Milić',
    faculty: 'Fakultät Darstellende Kunst',
    subject: 'Operngesang und Musiktheater',
    language: {
      name: 'Serbian',
      iso_639_1_code: 'sr',
      searchParam: 'sr',
    },
  },
  uk: {
    artist: 'Angelina Cherny',
    faculty: 'Fakultät Gestaltung',
    subject: 'Visuelle Kommunikation',
    language: {
      name: 'Ukrainian',
      iso_639_1_code: 'uk',
      searchParam: 'uk',
    },
  },
  ur: {
    artist: 'Hira Noor',
    faculty: 'Fakultät Bildende Kunst',
    subject: 'Art in Context',
    language: {
      name: 'Urdu',
      iso_639_1_code: 'ur',
      searchParam: 'ur',
    },
  },
  yue: {
    artist: 'Peony Lo',
    faculty: 'Fakultät Bildende Kunst',
    subject: 'Bildende Kunst',
    language: {
      name: 'Cantonese',
      nativeName: '粵語',
      iso_639_1_code: 'zh',
      searchParam: 'yue',
    },
  },
  zh: {
    artist: 'Yuxiao Feng',
    faculty: 'Fakultät Gestaltung',
    subject: 'Architektur',
    language: {
      name: 'Chinese',
      iso_639_1_code: 'zh',
      searchParam: 'zh',
    },
  },
};

export type ProjectLanguages = keyof typeof projects;
export default projects;
