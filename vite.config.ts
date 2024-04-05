import { defineConfig } from 'vite';
import { join, } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": join(__dirname, 'src', 'assets'),
      "@components": join(__dirname, 'src', 'components'),
      "@router": join(__dirname, 'src', 'router'),
      "@services": join(__dirname, 'src', 'service'),
      "@storage": join(__dirname, 'src', 'storage'),
      "@app-types": join(__dirname, 'src', 'types'),
      "@utils": join(__dirname, 'src', 'utils'),
      "@": join(__dirname, 'src'),
    }
  },
  plugins: [react()],
})
