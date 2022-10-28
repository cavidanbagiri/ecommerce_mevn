import { createApp } from 'vue'
import '../index.css'
import App from './App.vue'
import router from './router';
import store from './store/store.js'
//Import Custom Directives
import {Focus, FontSize} from './directives/directive';
//Import Custom Plugins
import VeeValidationPlugin from './plugins/validations';
const app = createApp(App);

//Custom Directives
app.directive('font-size', FontSize);
app.directive('autofocus',Focus);

//Custom Plugins
app.use(VeeValidationPlugin);

app.use(router);
app.use(store);


app.mount('#app');


