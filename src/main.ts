import { createApp } from 'vue'
import '@/styles/main.scss'
import App from './App.vue'
import { registerPlugins } from '@/plugins'

const app = createApp(App)
registerPlugins(app)

app.mount('#app')
