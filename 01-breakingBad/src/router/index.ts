import { characterRoute } from '@/characters/router';
import AboutPage from '@/shared/pages/AboutPage.vue';
import HomePage from '@/shared/pages/HomePage.vue';
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        //public
        {path: '/', name:'home', component:HomePage},
        {path:'/about', name:'about', component:AboutPage},

        //characters
        //la importación peresoza se recomienda cuando el componente a cargr es muy grande o tiene varios subcomponentes
        // {path:'/characters', name:'characters', component:()=>import('@/characters/layout/CharacterLayout.vue')},
        {
            ...characterRoute,
            path:'/characters'
        },

        //default
        {path: '/:pathMatch(.*)*',redirect:()=>({name:'home'})}
    ]
});

//otra forma de agregar la ruta
//router.addRoute(characterRoute)
export default router
