import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios';

const app = createApp(App);
app.use(router).mount('#app')


const http = axios.create({
    baseURL: 'http://localhost:8000'
});

export default http;