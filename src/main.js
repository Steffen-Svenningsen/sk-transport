import './assets/main.sass'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "reset-css"
import { register } from 'swiper/element/bundle';

register();

const app = createApp(App)

app.use(router)

app.mount('#app')
