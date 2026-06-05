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
    slug: 'blogappbackend',
    name: 'BlogAppBackend',
    tagline: 'Production-style blog REST API in Rust with automatic migrations, integration tests and a multi-stage Docker build.',
    tech: ['Rust', 'Axum', 'SQLx', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/sw3do/BlogAppBackend',
    featured: true,
    caseStudy: true,
    domain: 'Backend',
  },
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
    tagline: 'Real-time network packet capture and analysis tool with detailed traffic reporting.',
    tech: ['Go', 'Networking', 'Linux'],
    repo: 'https://github.com/sw3do/packet-sniffer',
    featured: true,
    caseStudy: true,
    domain: 'Systems',
  },
  {
    slug: 'local-drive',
    name: 'local-drive',
    tagline: 'Self-hosted Google-Drive alternative: store and manage files across multiple disks with a modern web UI.',
    tech: ['Rust', 'Next.js', 'TypeScript'],
    repo: 'https://github.com/sw3do/local-drive',
    featured: true,
    caseStudy: false,
    domain: 'Full-stack',
  },
  {
    slug: 'nsfw-detector',
    name: 'nsfw-detector',
    tagline: 'Image NSFW-content detector exposed as a Python library and REST API.',
    tech: ['Python', 'TensorFlow', 'Keras'],
    repo: 'https://github.com/sw3do/nsfw-detector',
    featured: true,
    caseStudy: false,
    domain: 'ML',
  },
  {
    slug: 'github-analyzer',
    name: 'github-analyzer',
    tagline: 'Web app for in-depth GitHub repository analysis: commit history, contributors and activity trends.',
    tech: ['TypeScript', 'Next.js', 'GitHub API'],
    repo: 'https://github.com/sw3do/github-analyzer',
    featured: true,
    caseStudy: false,
    domain: 'Full-stack',
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
    tagline: 'Interactive Rust CLI to manage macOS launchd and Brew services.',
    tech: ['Rust', 'CLI'],
    repo: 'https://github.com/sw3do/macos-service-manager',
    featured: false,
    caseStudy: false,
    domain: 'Systems',
  },
];

export const featured = projects.filter((p) => p.featured);
export const caseStudies = projects.filter((p) => p.caseStudy);
