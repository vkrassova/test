import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from './vite-plagin-handlebars-precompile'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  // base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [handlebars()],
})
