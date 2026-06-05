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
    tagline: 'Async Rust client library for the Jikan (MyAnimeList) API — full endpoint coverage and built-in rate limiting.',
    tech: ['Rust', 'async', 'crates.io'],
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
    tagline: 'Real-time network packet capture and analysis tool in Go, with live traffic parsing and detailed reporting.',
    tech: ['Go', 'Networking', 'Linux'],
    repo: 'https://github.com/sw3do/packet-sniffer',
    featured: true,
    caseStudy: true,
    domain: 'Systems',
  },
  {
    slug: 'nsfw-detector',
    name: 'nsfw-detector',
    tagline: 'Image NSFW-content classifier exposed as a Python library and REST API, built on TensorFlow/Keras.',
    tech: ['Python', 'TensorFlow', 'Keras'],
    repo: 'https://github.com/sw3do/nsfw-detector',
    featured: true,
    caseStudy: false,
    domain: 'ML',
  },
  {
    slug: 'discord-custom-rpc',
    name: 'discord-custom-rpc',
    tagline: 'Cross-platform desktop app to create and manage custom Discord Rich Presence — built with Tauri, Vue 3 and Rust.',
    tech: ['Tauri', 'Vue', 'Rust', 'TypeScript'],
    repo: 'https://github.com/sw3do/discord-custom-rpc',
    featured: true,
    caseStudy: false,
    domain: 'Full-stack',
  },
  {
    slug: 'toxblock',
    name: 'toxblock',
    tagline: 'TypeScript module that uses Google Gemini to detect toxic and inappropriate language across all languages, fully typed and tested.',
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
    tagline: 'Internet speed-test web app with real-time analytics and network insights, built with Next.js and TypeScript.',
    tech: ['Next.js', 'TypeScript', 'React'],
    repo: 'https://github.com/sw3do/speedtest',
    featured: true,
    caseStudy: false,
    domain: 'Full-stack',
  },

  {
    slug: 'discord-tag-role-bot',
    name: 'discord-tag-role-bot',
    tagline: 'Discord bot that automatically assigns and removes roles based on a user’s primary guild tag.',
    tech: ['TypeScript', 'Discord.js', 'Node.js'],
    repo: 'https://github.com/sw3do/discord-tag-role-bot',
    featured: false,
    caseStudy: false,
    domain: 'Backend',
  },
  {
    slug: 'video-converter-site',
    name: 'video-converter-site',
    tagline: 'Browser-based video converter using FFmpeg WebAssembly — converts locally, nothing is uploaded.',
    tech: ['SvelteKit', 'FFmpeg WASM', 'TypeScript'],
    repo: 'https://github.com/sw3do/video-converter-site',
    featured: false,
    caseStudy: false,
    domain: 'Full-stack',
  },
  {
    slug: 'macos-service-manager',
    name: 'macos-service-manager',
    tagline: 'Interactive Rust CLI to manage macOS launchd and Homebrew services.',
    tech: ['Rust', 'CLI'],
    repo: 'https://github.com/sw3do/macos-service-manager',
    featured: false,
    caseStudy: false,
    domain: 'Systems',
  },
];

export const featured = projects.filter((p) => p.featured);
export const caseStudies = projects.filter((p) => p.caseStudy);
