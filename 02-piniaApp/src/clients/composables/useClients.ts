//uso de composables para reutilizar codigo de una manera más limpia

import {watch, computed} from 'vue';
import {useQuery} from '@tanstack/vue-query'
import clientsApi from '@/api/clients-api'
import type {Client} from '@/clients/interfaces/client'
import {useClientsStore} from '@/store/clients'
import { storeToRefs } from 'pinia'


const getClients = async(page:number): Promise<Client[]> =>{

    //hacer la peticion un poco mas lenta
    /* await new Promise(resolve =>{
        setTimeout(() => resolve(true), 1500 )
    })  */

    const {data} = await clientsApi<Client[]>(`/clients?_page=${page}`)
    return data
}


const useClients = () => {

    const store = useClientsStore();
    const {currentPage, clients, totalPages} = storeToRefs(store)

    const {isLoading, data} = useQuery(
        ['clients?_page=',currentPage],
        () => getClients(currentPage.value),
    )

    //se obtienen los clientes directamente del store en lugar de useQuery
    watch(data, clients =>{
        if(clients)
            store.setClients(clients);
    })

    return{

        //state
        clients,
        currentPage,
        isLoading,
        totalPages,

        //Metodos
        getPage(page:number){
            store.setPage(page)
        },

        //getters
        
        
    }

}

export default useClients;