
import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/HomePage.vue';
import Category from '../views/CategoryPage.vue';

const routes = [

    {path:'/', name:'Home', component:Home},
    {path:'/category', name:'Category', component:Category}

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
