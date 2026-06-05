export interface Project {
  slug: string;
  name: string;
  tagline: string;
  tech: string[];
  repo: string;
  demo?: string;
  demoLabel?: string;
  featured: boolean;
  caseStudy: boolean;
  domain: 'Backend' | 'Systems' | 'Full-stack' | 'ML' | 'Library';
}

export const projects: Project[] = [
  {
    slug: 'jikan-rs',
    name: 'jikan-rs',
    tagline: "A Rust library for the Jikan (MyAnimeList) API. It's async, covers every endpoint, and handles rate limiting for you.",
    tech: ['Rust', 'async', 'tokio', 'serde', 'crates.io'],
    repo: 'https://github.com/sw3do/jikan-rs',
    demo: 'https://sw3do.github.io/jikan-rs/',
    demoLabel: 'Docs',
    featured: true,
    caseStudy: true,
    domain: 'Library',
  },
  {
    slug: 'packet-sniffer',
    name: 'packet-sniffer',
    tagline: 'A small Go tool that captures network traffic in real time, reads the common protocols, and prints what it finds.',
    tech: ['Go', 'Networking', 'libpcap', 'BPF', 'Linux'],
    repo: 'https://github.com/sw3do/packet-sniffer',
    featured: true,
    caseStudy: true,
    domain: 'Systems',
  },
  {
    slug: 'nsfw-detector',
    name: 'nsfw-detector',
    tagline: 'A Python library and small REST API that checks images for NSFW content, built on TensorFlow/Keras.',
    tech: ['Python', 'TensorFlow', 'Keras'],
    repo: 'https://github.com/sw3do/nsfw-detector',
    featured: true,
    caseStudy: false,
    domain: 'ML',
  },
  {
    slug: 'discord-custom-rpc',
    name: 'discord-custom-rpc',
    tagline: 'A desktop app for making your own Discord Rich Presence. Built with Tauri, Vue 3 and Rust, so it runs everywhere.',
    tech: ['Tauri', 'Vue', 'Rust', 'TypeScript'],
    repo: 'https://github.com/sw3do/discord-custom-rpc',
    featured: true,
    caseStudy: false,
    domain: 'Full-stack',
  },
  {
    slug: 'toxblock',
    name: 'toxblock',
    tagline: 'A TypeScript module that uses Google Gemini to flag toxic or rude text in any language. Fully typed and tested.',
    tech: ['TypeScript', 'Gemini AI', 'NLP'],
    repo: 'https://github.com/sw3do/toxblock',
    demo: 'https://sw3do.github.io/toxblock/',
    demoLabel: 'Docs',
    featured: true,
    caseStudy: false,
    domain: 'Library',
  },
  {
    slug: 'speedtest',
    name: 'speedtest',
    tagline: 'An internet speed test built with Next.js and TypeScript, with live charts and some network details.',
    tech: ['Next.js', 'TypeScript', 'React'],
    repo: 'https://github.com/sw3do/speedtest',
    featured: true,
    caseStudy: false,
    domain: 'Full-stack',
  },

  {
    slug: 'discord-tag-role-bot',
    name: 'discord-tag-role-bot',
    tagline: "A Discord bot that gives and removes roles based on a user's guild tag.",
    tech: ['TypeScript', 'Discord.js', 'Node.js'],
    repo: 'https://github.com/sw3do/discord-tag-role-bot',
    featured: false,
    caseStudy: false,
    domain: 'Backend',
  },
  {
    slug: 'video-converter-site',
    name: 'video-converter-site',
    tagline: 'A video converter that runs fully in the browser with FFmpeg WebAssembly, so your files never get uploaded.',
    tech: ['SvelteKit', 'FFmpeg WASM', 'TypeScript'],
    repo: 'https://github.com/sw3do/video-converter-site',
    featured: false,
    caseStudy: false,
    domain: 'Full-stack',
  },
  {
    slug: 'macos-service-manager',
    name: 'macos-service-manager',
    tagline: 'A small Rust CLI for managing macOS launchd and Homebrew services from one place.',
    tech: ['Rust', 'CLI'],
    repo: 'https://github.com/sw3do/macos-service-manager',
    featured: false,
    caseStudy: false,
    domain: 'Systems',
  },
];

export const featured = projects.filter((p) => p.featured);
export const caseStudies = projects.filter((p) => p.caseStudy);
