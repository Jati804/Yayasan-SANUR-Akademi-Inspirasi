import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // WAJIB DITAMBAHKAN: BASE PATH UNTUK VERSEL/BROWSER ROUTER
  base: '/',
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Fix: Removed unsupported 'historyApiFallback' property from the 'server' config.
  // Vite's dev server handles SPA history API fallback automatically.
});
