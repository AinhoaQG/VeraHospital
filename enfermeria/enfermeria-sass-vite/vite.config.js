import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        mapaCamas: resolve(__dirname, 'mapaCamas.html'),
      },
    },
  },
})