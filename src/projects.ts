const projects = {
  bul: {
    artist: 'Joana Bachurova',
    faculty: 'Fakultät Musik',
    language: 'Bulgarian',
    subject: 'Lehramt Musik an Grundschulen',
    cms_lng: 'BG',
  },
  de: {
    artist: 'Aaron Langguth',
    faculty: 'Fakultät Gestaltung',
    language: 'German',
    subject: 'Gesellschafts- und Wirtschaftskommunikation',
    cms_lng: 'DE',
  },
  hi: {
    artist: 'Agneya Chikte',
    faculty: 'Jazz Institut Berlin',
    language: 'Hindi',
    subject: 'Master of Music',
    cms_lng: 'HI',
  },
  ja: {
    artist: 'Yui Yamagishi',
    faculty: 'Fakultät Gestaltung',
    language: 'Japanese',
    subject: 'Visuelle Kommunikation',
    cms_lng: 'JA',
  },
  ka: {
    artist: 'Liza Bokeria',
    faculty: 'Fakultät Gestaltung',
    language: 'Georgian',
    subject: 'Architektur',
    cms_lng: 'KA',
  },
  mr: {
    artist: 'Agneya Chikte',
    faculty: 'Jazz Institut Berlin',
    language: 'Marathi',
    subject: 'Master of Music',
    cms_lng: 'MR',
  },
  pt: {
    artist: 'Kim R. Martins',
    faculty: 'Berlin Career College',
    language: 'Portugese (Brazilian)',
    subject: 'Sound Studies and Sonic Arts',
    cms_lng: 'PT',
  },
  ru: {
    artist: 'Konstantin Maltcev',
    faculty: 'Fakultät Musik',
    language: 'Russian',
    subject: 'Lehramt Musik',
    cms_lng: 'RU',
  },
  es: {
    artist: 'B. Skarlett B. Cisneros',
    faculty: 'Fakultät Gestaltung',
    language: 'Spanish',
    subject: 'Produktdesign',
    cms_lng: 'ES',
  },
  sr: {
    artist: 'Milica Milić',
    faculty: 'Fakultät Darstellende Kunst',
    language: 'Serbian',
    subject: 'Operngesang und Musiktheater',
    cms_lng: 'SR',
  },
  uk: {
    artist: 'Angelina Cherny',
    faculty: 'Fakultät Gestaltung',
    language: 'Ukrainian',
    subject: 'Visuelle Kommunikation',
    cms_lng: 'UK',
  },
  ur: {
    artist: 'Hira Noor',
    faculty: 'Fakultät Bildende Kunst',
    language: 'Urdu',
    subject: 'Art in Context',
    cms_lng: 'UR',
  },
  yue: {
    artist: 'Peony Lo',
    faculty: 'Fakultät Bildende Kunst',
    language: 'Cantonese',
    subject: 'Bildende Kunst',
    cms_lng: 'ZH',
  },
  zh: {
    artist: 'Yuxiao Feng',
    faculty: 'Fakultät Gestaltung',
    language: 'Chinese',
    subject: 'Architektur',
    cms_lng: 'ZH',
  },
};

// Use the default: `always`
export const localePrefix = undefined;

export type ProjectLanguages = keyof typeof projects;
export default projects;
