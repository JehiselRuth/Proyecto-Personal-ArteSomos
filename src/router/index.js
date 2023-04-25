import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'registrarme',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/advices',
      name: 'consejos',
      component: () => import('../views/AdvicesView.vue')
    },
    {
      path: '/advicedetail/:id',
      name: 'detalleconsejos',
      props: true,
      component: () => import('../views/AdviceDetailView.vue')
    },
    {
      path: '/activities',
      name: 'actividades',
      component: () => import('../views/ActivitiesView.vue')
    }, 
    {
      path: '/scanner',
      name: 'detector',
      component: () => import('../views/ScannerView.vue')
    },
    // {
    //   path: '/help',
    //   name: 'ayuda',
    //   component: () => import('../views/HelpView.vue')
    // },
    {
      path: '/myspace',
      name: 'miespacio',
      props: true,
      component: () => import('../views/MySpaceView.vue')
    },
    {
      path: "/greetings/:id",
      name: "felicitaciones",
      props: true,
      component: () => import('../views/GreetingsView.vue')
    }, 
  ]
})

export default router
