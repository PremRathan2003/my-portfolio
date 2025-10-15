// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 🔑 Use './' for project pages hosted in a subdirectory (like /my-portfolio/)
  base: './',
});