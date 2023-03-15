//uso de composables para reutilizar codigo de una manera más limpia

import {watch} from 'vue';
import {useQuery} from '@tanstack/vue-query'
import clientsApi from '@/api/clients-api'
import type {Client} from '@/clients/interfaces/client'
import {useClientsStore} from '@/store/clients'
import { storeToRefs } from 'pinia'


const getClients = async(): Promise<Client[]> =>{

    const {data} = await clientsApi<Client[]>('/clients?_page=1')
    return data
}


const useClients = () => {

    const store = useClientsStore();
    const {currentPage, clients, totalPages} = storeToRefs(store)

    const {isLoading, data} = useQuery(
        ['clients?_page=1'],
        () => getClients(),
    )

    watch(data, clients =>{
        if(clients)
            store.setClients(clients);
    })
    
    return{

        //state
        isLoading,
        clients,
        
    }

}

export default useClients;