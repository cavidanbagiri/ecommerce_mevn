
import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/HomePage.vue';
import Catalog from '../views/CatalogPage.vue';
import Admin from '../views/AdminPage.vue';
import Parfumery from '../views/ParfumeryPage.vue';

const routes = [

    {path:'/', name:'Home', component:Home},
    {path:'/catalog', name:'Catalog', component:Catalog},
    {path:'/admin', name:'Admin', component:Admin},
    {path:'/parfumery', name:'Parfumery', component:Parfumery}

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
