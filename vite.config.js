// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/BeeByte1',  // <-- ADD THIS
  plugins: [react()],
});
