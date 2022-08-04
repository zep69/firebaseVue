import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import {auth} from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
   /* meta:{
      requiresAuth:true
    }*/
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
   /* meta:{
      requiresAuth:true
    }*/
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from,next)=>{
  if(to.path ==='/login' && auth.currentUser){
    next('/')
    return
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('/')
    return;
  }
  next();
})

export default router
