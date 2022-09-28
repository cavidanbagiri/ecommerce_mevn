
import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/HomePage.vue';
import Category from '../views/CategoryPage.vue';
import Admin from '../views/AdminPage.vue';

const routes = [

    {path:'/', name:'Home', component:Home},
    {path:'/category', name:'Category', component:Category},
    {path:'/admin', name:'Admin', component:Admin}

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
