import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // UBAH: Dari 'base: /' menjadi 'base: ""' (kosong/relatif)
  base: "", 
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
