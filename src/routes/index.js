import {createRouter, createWebHistory} from 'vue-router';
import MapComponent from './../components/MapComponent';
import CCMenu from './../components/CCMenu';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: CCMenu },
    { path: '/map', component: MapComponent },
  ],
})

export default router;