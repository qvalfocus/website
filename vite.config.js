import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',               // since your index.html is in src
  base: '/website/',         // replace "website" with your GitHub repo name
  build: {
    outDir: '../dist',       // tell Vite to output outside of src
    emptyOutDir: true,
  },
  plugins: [react()],
});