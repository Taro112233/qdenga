// tailwind.config.ts
import type { Config } from 'tailwindcss';
export default <Config>{
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#059669',
        accent: '#ea580c',
        textDark: '#374151',
      },
    },
  },
  plugins: [],
};
