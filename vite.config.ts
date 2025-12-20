// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // KEMBALIKAN KE ABSOLUT PATH
  base: '/', 
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
