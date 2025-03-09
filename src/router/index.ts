import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ChatView from '../views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth/login',
    },
    {
      path: '/auth',
      component: AuthView,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView,
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView,
        }
      ]
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
    }
  ],
})

export default router
