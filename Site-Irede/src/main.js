import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/index'
import 'primevue/resources/themes/aura-light-green/theme.css'
 
const app = createApp(App).use(router).use(PrimeVue).mount('#app')