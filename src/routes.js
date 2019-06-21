import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue';
import Detail from './pages/DetailFilm.vue';
import Login from './pages/Login.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/detail/:id',
            component: Detail,
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})