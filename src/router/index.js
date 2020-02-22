import Vue from 'vue'
import VueRouter from 'vue-router'

const Container = () => import('@/containers/Container.vue')
const Home = () => import('@/views/Home.vue')
const Profile = () => import('@/views/Profile.vue')
const Latest = () => import('@/views/Latest.vue')
const DetailProduk = () => import('@/views/DetailProduk.vue')
const Login = () => import('@/views/auth/Login.vue')

Vue.use(VueRouter)

const routes = [
  { // Login Page
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/gudang',
    name: 'container',
    component: Container,
    children: [
      {
        path: 'gudang',
        name: 'Gudang',
        component: Home
      },
      {
        path: 'latest-product',
        name: 'latest-product',
        component: Latest
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/gudang/detail/:id',
        name: 'DetailProduk',
        component: DetailProduk
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes,
  base: process.env.BASE_URL
})
// Export Router
export default router
