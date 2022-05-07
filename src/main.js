import { createApp, h } from 'vue'
import store from './store/index.js'
import App from './App.vue'

const app = createApp({
  render: ()=>h(App)
})

app.use(store)

app.mount('#app')
