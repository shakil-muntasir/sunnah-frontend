import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

import './style.css'
import App from './App.vue'
import routes from './routes'

axios.defaults.baseURL = "https://localhost:44326"

const token = localStorage.getItem('authToken')

axios.defaults.headers.common['Authorization'] = token;

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - Sunnah Station` || "Sunnah Station";
    
    if(to.path != '/login' && to.meta.auth && !token){
        next('/login')
    } else if (from.path == '/login' && to.meta.auth && token){
        next()
    } else {
        next()
    }
})

app.use(router)

app.mount('#app')
