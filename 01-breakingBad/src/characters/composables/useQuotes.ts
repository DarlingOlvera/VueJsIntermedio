import {ref, onMounted} from 'vue'
import type {Quote} from '@/characters/interfaces/quotes'
import breakingBadApi from '@/api/breakingBadApi';
import axios from 'axios'

const quotes = ref<Quote[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();


export const useQuotes = () =>{

    //controlar las peticiones, para que no se repitan si ya se hizo antes

    onMounted(async() => {
        loadQuotes() //no olvidar esos parentesis al llamar la función
    })

    const loadQuotes = async() =>{

        if (quotes.value.length > 0) return;

        isLoading.value = true;

        try {
            const {data} = await breakingBadApi.get<Quote[]>('/20');
            quotes.value = data;
            isLoading.value = false;
        } catch (error) {
            hasError.value = true;
            
            if(axios.isAxiosError(error)){
                return errorMessage.value = error.message;
            }

            errorMessage.value = JSON.stringify(error);
        }
    }

    




    return{
        errorMessage,
        hasError,
        isLoading,
        quotes,

    }
}