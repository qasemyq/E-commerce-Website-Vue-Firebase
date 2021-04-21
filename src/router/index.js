import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Products from '../views/Products.vue'
import OverView from '../views/OverView.vue'
import Productsp from '../views/Productsp.vue'
import Orders from '../views/Orders.vue'
import Profile from '../views/Profile.vue'
import CheckOut from '../views/CheckOut.vue'
import {fb} from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    // yani harkasi mikhad be admin area dastrasi dashte bashe bayad auth anjam bede 
    meta: { requiresAuth: true },
    children: [
      {
        // inja / nemizaram bara childha 
        path: 'overview',
        name: 'OverView',
        component: OverView
      },
      {
        path: 'productsp',
        name: 'Productsp',
        component: Productsp
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders
      },
    ]
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser ) {
      next('/')
    } else if(requiresAuth && currentUser) {
      next()
  } else {
    next() 
  }
}) 

export default router
