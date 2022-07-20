import { createRouter, createWebHashHistory } from 'vue-router'
import PostList from './components/views/PostList.vue'
import Post from './components/views/Post.vue'
import Profile from './components/Profile.vue'

const routes = [
    {
        path: '/',
        components: {
            default: PostList,
            Profile
        }
    },
    {
        path: '/posts/:id',
        components: {
            default: Post,
            Profile
        }
    }
]

const Router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })
  
  export default Router