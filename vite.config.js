import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({               // since your index.html is in src
  base: '/website/',         // replace "website" with your GitHub repo name
  plugins: [react()],
});