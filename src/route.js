import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/views/Home.vue'
import Post from '@/components/views/Post.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/post/:id',
        component: Post
    }
]

const Router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })
  
  export default Router