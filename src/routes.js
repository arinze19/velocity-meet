import { createRouter, createWebHistory }  from 'vue-router'
import HomePage   from './components/pages/Home.vue'
import RoomPage   from './components/pages/Room.vue'


const routes = [
    { path: '/',  component: HomePage },
    { path: '/rooms/:roomId', component: RoomPage },
    { path: '/:notFound(.*)', redirect: "/" }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 