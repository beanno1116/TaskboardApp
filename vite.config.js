import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  // base: '/taskboard',
  plugins: [react()],
  server: {
    cors: {
      origin: "http://localhost:5174",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
      preflightContinue: true
    },
    proxy: {
      // with options
      '/api': {
        target: 'https://w3bentities.com/taskboard/api/api.php',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
