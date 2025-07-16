import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/website/' : '/', // ✅ dev gets base '/', build gets '/website/'
  plugins: [react()],
}))