export const profile = {
  name: 'Mert Çelik',
  role: 'Software Engineering Student',
  location: 'Berlin, Germany',
  email: 'sw3doo@gmail.com',
  github: 'https://github.com/sw3do',
  githubUser: 'sw3do',
  linkedin: 'https://linkedin.com/in/swedo',
  site: 'https://sw3do.github.io',
  tagline: 'I build backends, tools and full-stack apps.',
  bio: "I'm a Software Engineering student in Berlin. I mostly work with Rust, Go and TypeScript, and I learn best by building real things: a published Rust crate, a few backend APIs, and some serial-port code that talks to physical machines.",
  education: {
    degree: 'B.Sc. Software Engineering',
    school: 'GISMA University of Applied Sciences',
    place: 'Berlin, Germany',
    status: 'Currently enrolled',
  },
  experience: [
    {
      title: 'Working Student, Software & Operations',
      org: 'Bar & Entertainment Venue',
      place: 'Berlin, Germany',
      period: 'Part-time',
      points: [
        'Built small internal tools that made the day-to-day work at the venue easier.',
        'Wrote serial-port code so our software could talk to the physical machines while they were running.',
        'Automated a few repetitive tasks on Linux.',
      ],
    },
  ],
  languages: [
    { name: 'Turkish', level: 'Native', cefr: 'C2' },
    { name: 'English', level: 'Professional working proficiency', cefr: 'C1' },
    { name: 'German', level: 'Basic, learning', cefr: 'A1' },
  ],
} as const;
