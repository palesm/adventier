import "bootstrap/dist/css/bootstrap.css"
import { createApp, h } from 'vue'
import store from './store/index.js'
import router from './routes/index.js'
import App from './App.vue'

const app = createApp({
  render: ()=>h(App)
})

app.use(store)
app.use(router)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
