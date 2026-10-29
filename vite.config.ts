import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: "/my-portfolio2.0/",
  build: {
    target: 'es2022',
    // Three.js va en un chunk aparte (import dinámico en App.tsx) que solo se pide en escritorio.
    chunkSizeWarningLimit: 1000,
  },
})
