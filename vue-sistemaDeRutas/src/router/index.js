import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import contact from "../views/contact.vue"
import game from "../views/game.vue"
import error404 from "../views/error404.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        // objetos
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },

    {
      path:"/contact",
      name:"contact",
      component:contact,
    },
    // ruta dinamico
    { 
      path:"/ps5/:name",
      component:game,
    },
    {
      // catchALL(.*) para que en todas salga 404
      path:"/:catchAll(.*)",
      component:error404,
    }
  ]
})

export default router
