import HomePage from './components/HomePage.vue'
import SingUp from './components/SingUp.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SingUp',
        component:SingUp,
        path:'/sing-up'
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes

});

export default router;
