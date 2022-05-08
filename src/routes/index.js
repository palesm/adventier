import {createRouter, createWebHistory} from 'vue-router';
import MapComponent from './../components/MapComponent';
import CCMenu from './../components/CCMenu';
import Map2Component from './../components/Map2Component'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: CCMenu },
    { path: '/map', component: MapComponent },
    { path: '/map2', component: Map2Component}
  ],
})

export default router;