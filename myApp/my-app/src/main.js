import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home'
import Company from './views/Company'
import Contact from './views/Contact'
import Team from './views/Team'
import Error404 from './views/404'
import CompanyHistory from './views/CompanyHistory'
import CompanyAwards from './views/CompanyAwards'


const routes = [
    { path: '/', name: 'home', component: Home },
    { 
        path: '/a-empresa',
        redirect: { name: 'company' } 
    },
    { 
        path: '/empresa',
        name: 'company',
        component: Company,
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
        component: Contact,
        meta:{
            auth: true,
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
