import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import '@/assets/main.scss'

const
  app = createApp(App),
  pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#vessel_constructor')
