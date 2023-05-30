
import { createRouter, createWebHistory } from 'vue-router'
import ListPost from '../views/ListPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ListPost',
      component: ListPost
    },
    {
      path: '/:id',
      name: 'post_detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostDetail.vue')
    }
  ]
})

export default router
