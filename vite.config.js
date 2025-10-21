import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/B.martins-automobiles-/', // 👈 mantém igual ao nome do repositório
  build: {
    outDir: 'dist',
  },
})
