import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView          from '@/views/HomeView.vue'
import AboutView         from '@/views/AboutView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/project/:id',
    name: 'project',
    component: ProjectDetailView,
    props: true,
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => savedPosition || { top: 0 },
})
