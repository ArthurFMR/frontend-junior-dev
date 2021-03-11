import Vue from 'vue'
import VuewRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'


Vue.use(VuewRouter)


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
]


const router = new VuewRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router