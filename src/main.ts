import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount(
  (() => {
    const app = document.createElement('div')
    document.body.append(app)
    return app
  })()
)
