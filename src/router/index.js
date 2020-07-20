import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import("@/views/home/home.vue")
const category = () => import("@/views/category/category.vue")
const cart = () => import("@/views/cart/cart.vue")
const profile = () => import("@/views/profile/profile.vue")
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        name: "home",
        path: '/home',
        component: home
    },
    {
        name: "category",
        path: '/category',
        component: category
    },
    {
        name: "cart",
        path: '/cart',
        component: cart
    },
    {
        name: "profile",
        path: '/profile',
        component: profile
    }
]

const router = new VueRouter({
    routes
})
export default router