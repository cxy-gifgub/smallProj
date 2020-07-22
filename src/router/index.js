import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import("@/views/home/home.vue")
const category = () => import("@/views/category/category.vue")
const cart = () => import("@/views/cart/cart.vue")
const profile = () => import("@/views/profile/profile.vue")
const detail = () => import("@/views/detail/detail.vue")

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
    },
    {
        name: "detail",
        path: '/detail',
        component: detail,
        // beforeEnter: (to, from, next) => {
        // console.log(to,'to');
        // console.log(from,'from');
        // console.log(next,'next');
        // next() 
        // }
    }
]

const router = new VueRouter({
    routes
})
// router.beforeEach((to,from,next)=>{
//     console.log(from,'from');
//     console.log(to.params.bvid,'to');
//     next()
// })
export default router