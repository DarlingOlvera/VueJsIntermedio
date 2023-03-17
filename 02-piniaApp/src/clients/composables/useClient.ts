import {ref, watch} from 'vue'
import type {Client} from '@/clients/interfaces/client'
import {useQuery, useMutation} from '@tanstack/vue-query';
import clientsApi from '@/api/clients-api';



//const queryClient = useQueryClient()

//funcion para la petición 
const getClient = async(id:number):Promise<Client> => {
    const {data} = await clientsApi.get(`/clients/${id}`);
    return data;
}

//mutation function
const updateClient = async(client:Client):Promise<Client> =>{

    /* await new Promise(resolve =>{
        setTimeout(() =>resolve(true),2000)
    }); */

    const {data} = await clientsApi.patch<Client>(`/clients/${client.id}`, client);
    //borrar cache y hacer peticion nueva cuando se actualiza un usuario
    /* const queries = queryClient.getQueryCache().findAll(['clients?page='],{exact:false});
    queries.forEach(query => query.reset()) */
    return data
}

const useClient = (id:number) => {
    
    const client = ref<Client>()

    

    const {isLoading, data, isError} = useQuery(
        ['client', id],
        () => getClient(id),
        { retry:false}
    )

    watch(data, () =>{
        if(data.value)
            client.value = {...data.value};
    },{immediate:true})

    const  clientMutation = useMutation(updateClient)

    watch(clientMutation.isSuccess,() =>{
        setTimeout(() =>{
            clientMutation.reset()
        },2000)
    })
    
    


    return{
        client,
        clientMutation,
        isError,
        isLoading,
    }

}
 
export default useClient
 