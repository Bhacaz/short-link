import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueClipboard from 'vue3-clipboard'

createApp(App)
    .use(router)
    .use(VueClipboard, {
        autoSetContainer: true,
        appendToBody: true,
    })
    .mount('#app')
