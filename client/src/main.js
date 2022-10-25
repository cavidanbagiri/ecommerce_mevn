import { createApp } from 'vue'
import '../index.css'
import App from './App.vue'
import router from './router';
import store from './store/store.js'
import {Focus, FontSize} from './directives/directive';
const app = createApp(App);

//Custom Directives
app.directive('font-size', FontSize);
app.directive('autofocus',Focus);


app.use(router);
app.use(store);

app.mount('#app');


