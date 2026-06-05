export const profile = {
  name: 'Mert Çelik',
  role: 'Software Engineering Student',
  location: 'Berlin, Germany',
  email: 'sw3doo@gmail.com',
  github: 'https://github.com/sw3do',
  githubUser: 'sw3do',
  linkedin: 'https://linkedin.com/in/swedo',
  site: 'https://sw3do.github.io',
  tagline: 'Building backends, systems & full-stack apps.',
  bio: 'B.Sc. Software Engineering student in Berlin shipping production-style tools in Rust, Go and TypeScript — from Dockerized APIs to a published crate and serial-port hardware integrations.',
  education: {
    degree: 'B.Sc. Software Engineering',
    school: 'GISMA University of Applied Sciences',
    place: 'Berlin, Germany',
    status: 'Currently enrolled',
  },
  experience: [
    {
      title: 'Working Student — Software & Operations',
      org: 'Bar & Entertainment Venue',
      place: 'Berlin, Germany',
      period: 'Part-time',
      points: [
        'Built internal software tools supporting day-to-day operations at the venue.',
        'Implemented serial-port communication between software and physical machines for live operation.',
        'Automated routine operational processes on Linux.',
      ],
    },
  ],
  languages: [
    { name: 'Turkish', level: 'Native', cefr: 'C2' },
    { name: 'English', level: 'Professional working proficiency', cefr: 'C1' },
    { name: 'German', level: 'Basic, actively improving', cefr: 'A1' },
  ],
} as const;
