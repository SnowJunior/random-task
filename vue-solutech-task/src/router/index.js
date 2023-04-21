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
      path: '/tasks',
      name: 'TaskIndex',
      component: () => import('../views/tasks/tasksIndex.vue')
    },
    {
      path: '/tasks/create',
      name: 'TaskCreate',
      component: () => import('../views/tasks/tasksCreate.vue')
    },
    {
      path: '/tasks/:id/edit',
      name: 'TaskEdit',
      component: () => import('../views/tasks/taskEdit.vue')
    },
  ]
})

export default router
