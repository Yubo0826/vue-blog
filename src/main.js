import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import Router from './route'
import Markdown from 'vue3-markdown-it'
import infiniteScroll from 'vue3-infinite-scroll-good'
import "vue-progressive-image/dist/style.css"

const app = createApp(App)

app.config.globalProperties.$strapiURL = 'https://yubo-strapi.herokuapp.com'

app.use(Markdown).use(infiniteScroll).use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  
app.use(Router)
app.mount('#app')
  