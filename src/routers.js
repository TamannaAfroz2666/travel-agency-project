import HomePage from './components/HomePage.vue'
import SingUp from './components/SingUp.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'

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
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id'
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes

});

export default router;
