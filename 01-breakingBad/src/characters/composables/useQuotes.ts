import {ref} from 'vue'
import type {Quote} from '@/characters/interfaces/quotes'
import breakingBadApi from '@/api/breakingBadApi';

const quotes = ref<Quote[]>([])
const isLoading = ref<boolean>(true)


export const useQuotes = () =>{

    //controlar las peticiones, para que no se repitan si ya se hizo antes
    if (quotes.value.length === 0){

        breakingBadApi.get<Quote[]>('/20')
            .then(resp =>{
                //console.log(resp);
            quotes.value = resp.data
            isLoading.value = false
            })
            
    }




    return{
        quotes,
        isLoading

    }
}