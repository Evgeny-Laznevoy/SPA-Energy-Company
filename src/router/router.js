import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Contacts from '@/components/Contacts'
import Information from '@/components/Information'
import Procurement from '@/components/Procurement'
import ToConsumers from '@/components/ToConsumers'
import Login from '@/components/Login'
import Register from '@/components/Register'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home 
        },
        {
            path: '/news',
            name: 'news',
            component: News 
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts 
        },
        {
            path: '/information',
            name: 'information',
            component: Information 
        },
        {
            path: '/procurement',
            name: 'procurement',
            component: Procurement 
        },
        {
            path: '/toConsumers',
            name: 'toConsumers',
            component: ToConsumers 
        },
        {
            path: '/login',
            name: 'login',
            component: Login 
        },
        {
            path: '/register',
            name: 'register',
            component: Register 
        }
    ],
    mode: 'history'
})