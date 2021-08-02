import { createApp } from 'vue'
import App from './App.vue'
import icon from './components/icons/icon.vue'

const app = createApp(App)

app.component('icon', icon)
app.mount('#app')
