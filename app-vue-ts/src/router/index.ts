import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PaginaInicio from "../pages/PaginaInicio.vue";
// import { LMap, LTileLayer, LMarker } from 'vue3-leaflet';

// * Rutas
const rutas: RouteRecordRaw[] = [
  // Ruta por defecto
  {
    path: '/', // url de la ruta
    name: 'default', // Nombre de la ruta
    component: HomeView // Componente
  },
  {
    path: '/inicio',
    name: 'Inicio',
   component: PaginaInicio
  },
  {
    path: '/pagina1',
    name: 'pagina_1',
    component: () => import('../views/AboutView.vue')
  }
]

// Todo --> Control de rutas
const router: Router = createRouter({
  // * Historial
  history: createWebHistory(import.meta.env.BASE_URL),
  // * Rutas
  routes: rutas
})

export default router
