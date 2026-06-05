export const skillGroups = [
  { label: 'Languages', items: ['Rust', 'Go', 'Python', 'TypeScript', 'JavaScript', 'Java', 'Dart'] },
  { label: 'Backend', items: ['Axum', 'SQLx', 'NestJS', 'Node.js', 'REST APIs', 'PostgreSQL', 'MySQL'] },
  { label: 'Frontend', items: ['Next.js', 'React', 'Svelte', 'Vue', 'Astro', 'Tailwind CSS'] },
  { label: 'Systems & Tooling', items: ['Linux', 'Docker', 'Git', 'Tauri', 'FFmpeg', 'Serial-port / hardware', 'CLI tooling'] },
  { label: 'Machine Learning', items: ['TensorFlow', 'Keras'] },
] as const;

export const stackLines = [
  { key: 'languages', value: 'Rust · Go · Python · TS · Java' },
  { key: 'backend', value: 'Axum · SQLx · NestJS · Next.js' },
  { key: 'systems', value: 'Linux · Docker · serial-port' },
  { key: 'ml', value: 'TensorFlow / Keras' },
] as const;
