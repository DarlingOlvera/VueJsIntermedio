<script setup lang="ts">
//import breakingBadApi from '@/api/breakingBadApi';
//import { useQuotes } from '@/characters/composables/useQuotes';
//import { useQuery } from '@tanstack/vue-query';

import QuoteCard from '@/characters/components/QuoteCard.vue'
import type {Quote} from '@/characters/interfaces/quotes'

interface Props{
    quotes:Quote[],
}
const props = defineProps<Props>();


//1.uso con suspense
//const {data: quotes} = await breakingBadApi.get<Quote[]>('/5')

//2.uso composable functions
//const {quotes, isLoading, hasError,errorMessage} = useQuotes()

//3. uso tanstack vue-query

/* const getQuotesSlow = async():Promise<Quote[]> => {
    
    return new Promise ((resolve) =>{
        
        setTimeout(async() =>{
            const {data} = await breakingBadApi.get<Quote[]>('/20')
            resolve(data)
            
        }, 1)
    })
}

const {isLoading,data:quotes} = useQuery(
    ['quotes'],
    getQuotesSlow,
) */

</script>

<template>
   <!--  <h1 v-if="isLoading">Loading...</h1> -->

    <div class="card-list">
        <QuoteCard
          v-for="q of props.quotes"
          :key="q.quote"
          :quote="q" />
    </div>
</template>


<style scoped>
.card-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>