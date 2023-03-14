import {reactive} from 'vue'
import type {Quote} from '@/characters/interfaces/quotes'
import breakingBadApi from '@/api/breakingBadApi'
interface Store {
    quotes:{
        list: Quote[],
        count: number,
        isLoading: boolean,
        hasError: boolean,
        errorMessage: string | null
    },

    //metodos
    startLoadingQuotes: () => void;
    loadedQuotes: (data:Quote[]) => void;
    loadQuotesFailed: (error:string) => void;

}

//initial state
const quoteStore = reactive<Store>({
    quotes:{
        count: 0,
        errorMessage: null,
        hasError: false,
        isLoading: true,
        list: []
    },

    //metodos
    async startLoadingQuotes(){
        const {data} = await breakingBadApi.get<Quote[]>('/5');
        this.loadedQuotes(data)
    },
    loadedQuotes(data:Quote[] | string) {
        
        if(typeof data === 'string'){
            return this.loadQuotesFailed('Its not a Quotes array')
        }
        this.quotes = {
            count: data.length,
            errorMessage: null,
            hasError: false,
            isLoading: false,
            list: data
        }
    },
    loadQuotesFailed(error: string) {
        this.quotes ={
            count: 0,
            errorMessage:error,
            hasError:true,
            isLoading:true,
            list:[]
        }
    },
}   
);

quoteStore.startLoadingQuotes()

export default quoteStore;