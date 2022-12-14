
import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/HomePage.vue';
import Catalog from '../views/CatalogPage.vue';
import Admin from '../views/AdminPage.vue';
import Parfumery from '../views/ParfumeryPage.vue';
import ProductItem from '../views/ProductItem.vue';
import Makeup from '../views/MakeupPage.vue';
import Accessories from '../views/AccessoriesPage.vue';
import Register from '../views/RegisterPage.vue';
import Login from '../views/LoginPage.vue';
import Basket from '../views/BasketPage.vue';
import Page404 from '../views/404.vue';

const routes = [

    {path:'/', name:'Home', component:Home},
    {path:'/catalog', name:'Catalog', component:Catalog},
    {path:'/admin', name:'Admin', component:Admin},
    {path:'/parfumery', name:'Parfumery', component:Parfumery},
    {path:'/makeup', name:'Makeup', component:Makeup},
    {path:'/accessories', name:'Accessories', component:Accessories},
    {path:'/product/:id', name:'ProductItem', component:ProductItem},
    {path:'/register', name:'Register', component:Register},
    {path:'/login', name:'Login', component:Login},
    {path:'/basket', name:'Basket', component:Basket},
    {path:'/:catchAll(.*)*', name:'Page404', component:Page404}

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
