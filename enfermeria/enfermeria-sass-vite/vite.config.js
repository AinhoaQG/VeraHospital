import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        mapaCamas: resolve(__dirname, 'index.html'),
        hojaMedicacion: resolve(__dirname, 'hojaMedicacion.html'),
      },
    },
  },
})