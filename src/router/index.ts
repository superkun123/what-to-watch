import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MovieItemView from '@/views/MovieItemView.vue'
import LoginView from '@/views/LoginView.vue'
import FullScreenVideoView from '@/views/FullScreenVideoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/films/:id',
      name: 'moviePage',
      component: MovieItemView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/play/:id',
      name: 'play',
      component: FullScreenVideoView,
      meta: {
        hideHeader: true,
        hideFooter: true
      }
    },
  ]
})

export default router
