import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import(/*webpackChunckName*/'./views/Home')
const Contact = () => import(/*webpackChunckName*/'./views/Contact')
const Team = () => import(/*webpackChunckName*/'./views/Team')
const Error404 = () => import(/*webpackChunckName*/'./views/404')
const CompanyHistory = () => import(/*webpackChunckName*/'./views/CompanyHistory')
const CompanyAwards = () => import(/*webpackChunckName*/'./views/CompanyAwards')

const routes = [
    { path: '/', name: 'home', component: Home },
    { 
        path: '/a-empresa',
        redirect: { name: 'company' } 
    },
    { 
        path: '/empresa',
        name: 'company',
        component: () => import(/*webpackChunckName*/'./views/Company'),
        meta: {
            sidebar: false,
        },
        children: [
            {
                path: 'historia',
                name: 'company-history',
                component: CompanyHistory,
            },
            {
                path: 'premios',  
                name: 'company-awards',
                component: CompanyAwards,
            }
        ],
    },
    { 
        path: '/equipe/:member(\\w+)?',
        name: 'team',
        component: Team,
        props: route => ({ member: route.params.member, color: 'Green' })
    },
    { 
        path: '/contato',
        name: 'contact',
        component: Contact,
        meta:{
            auth: false,
        },
    },
    { 
        path: '/:pathMatch(.*)',
        component: Error404
    }
]

const router = createRouter({ 
    history: createWebHistory (),
    routes,
    scrollBehavior(){
        return {
            el: '#main',
            top: 0
         }
    }
})

const isLogged = false;

router.beforeEach((to, from, next) => {
    let n = null
    if (to.meta.auth && !isLogged) {
        n =({ name: 'home' });
    } 
    next(n)
})

createApp(App)
    .use(router)
    .mount('#app')
