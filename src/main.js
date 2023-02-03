import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Tres from '@tresjs/core'

export const app = createApp(App)

app.use(router)
app.use(Tres)
app.mount('#app')
