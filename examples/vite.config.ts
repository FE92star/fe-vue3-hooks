import { defineConfig } from "vite"

export default defineConfig({
  server: {
    open: true,
    port: 8083,
    host: '0.0.0.0'
  },
  publicDir: './public/',
  base: './',
  root: './examples'
})
