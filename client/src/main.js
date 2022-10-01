import { createApp } from 'vue'
import '../index.css'
import App from './App.vue'
import router from './router';
import store from './store/store.js'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');


