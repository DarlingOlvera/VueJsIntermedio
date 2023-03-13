import type { RouteRecordRaw } from "vue-router";
import CharacterLayout from "@/characters/layout/CharacterLayout.vue";
import CharacterId from "@/characters/pages/CharacterId.vue";
import CharacterList from "@/characters/pages/CharacterList.vue";
import CharacterSearch from "@/characters/pages/CharacterSearch.vue";

export const characterRoute:RouteRecordRaw = {
    path:'/characters',
    name:'characters',
    redirect: {name:'character-list'},
    component: CharacterLayout,
    children:[
        {
            path:'by/id', 
            name:'character-id',
            props:{title:'Por Id', visible:false}, 
            component: CharacterId},
        {
            path:'list', 
            name:'character-list', 
            props:{title:'Lista', visible:true},
            component: CharacterList},
        {
            path:'search', 
            name:'character-search', 
            props:{title:'Busqueda', visible:true},
            component: CharacterSearch},
    ]
}

//NOTA: no poner el '/' inicial en los path de los children porque
//estaría indicando que ahora la ruta del hijo pertenece a la raiz principal