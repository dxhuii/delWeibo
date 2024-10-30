import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: '批量删除新浪微博博文',
        icon: 'https://weibo.com/favicon.ico',
        namespace: 'https://github.com/dxhuii/delWeibo',
        author: 'plain',
        description: '批量删除新浪微博',
        match: ['*://weibo.com/*/profile?*', '*://weibo.com/u/*', '*://weibo.com/fav*', '*://weibo.com/u/page/fav/*'],
        license: 'MIT'
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js')
        }
      }
    })
  ]
})
