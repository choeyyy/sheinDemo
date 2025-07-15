import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    allowedHosts: [
      'localhost',
      '.ngrok-free.app',  // 使用通配符允许所有 ngrok 的域名
    ],
    host: true,  // 允许通过本机 IP 访问
    port: 5173,  // 前端服务端口
    hot: true,   // 开启热更新
    liveReload: true,  // 开启实时重载
  }
})
