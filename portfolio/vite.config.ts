import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,                  // Cho phép truy cập từ bên ngoài
    allowedHosts: ['.ngrok-free.app'] // Cho phép tất cả subdomain của ngrok-free.app
  }
})
