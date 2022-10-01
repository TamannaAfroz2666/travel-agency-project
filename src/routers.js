import Home from './components/Home.vue'
import SingUp from './components/SingUp.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SingUp',
        component:SingUp,
        path:'/Sing-up'
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes

});

export default router;