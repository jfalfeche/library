import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = Object.assign(process.env, loadEnv(mode, process.cwd()))
  const port = parseInt(env.VITE_PORT) || 3000

  return {
    base: '/atelier/',
    server: {
      port,
    },
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: env,
        },
      }),
    ],
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: {
        '@app': resolve(__dirname, 'src'),
      },
    },
  }
})
