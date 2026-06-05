export interface Skill {
  name: string;
  icon: string;
}

export const skillGroups: { label: string; items: Skill[] }[] = [
  {
    label: 'Languages',
    items: [
      { name: 'Rust', icon: 'simple-icons:rust' },
      { name: 'Go', icon: 'simple-icons:go' },
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'Java', icon: 'simple-icons:openjdk' },
      { name: 'Dart', icon: 'simple-icons:dart' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Axum', icon: 'lucide:server' },
      { name: 'SQLx', icon: 'lucide:database' },
      { name: 'NestJS', icon: 'simple-icons:nestjs' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'REST APIs', icon: 'lucide:webhook' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MySQL', icon: 'simple-icons:mysql' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'Svelte', icon: 'simple-icons:svelte' },
      { name: 'Vue', icon: 'simple-icons:vuedotjs' },
      { name: 'Astro', icon: 'simple-icons:astro' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
    ],
  },
  {
    label: 'Systems & Tooling',
    items: [
      { name: 'Linux', icon: 'simple-icons:linux' },
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'Tauri', icon: 'simple-icons:tauri' },
      { name: 'FFmpeg', icon: 'simple-icons:ffmpeg' },
      { name: 'Serial-port / hardware', icon: 'lucide:cpu' },
      { name: 'CLI tooling', icon: 'lucide:terminal' },
    ],
  },
  {
    label: 'Machine Learning',
    items: [
      { name: 'TensorFlow', icon: 'simple-icons:tensorflow' },
      { name: 'Keras', icon: 'simple-icons:keras' },
    ],
  },
];

export const stackLines = [
  { key: 'languages', value: 'Rust · Go · Python · TS · Java' },
  { key: 'backend', value: 'Axum · SQLx · NestJS · Next.js' },
  { key: 'systems', value: 'Linux · Docker · serial-port' },
  { key: 'ml', value: 'TensorFlow / Keras' },
] as const;
