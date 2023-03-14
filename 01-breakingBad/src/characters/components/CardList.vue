<script setup lang="ts">
import QuoteCard from '@/characters/components/QuoteCard.vue'
import breakingBadApi from '@/api/breakingBadApi';
import type {Quote} from '@/characters/interfaces/quotes'
//import { useQuotes } from '@/characters/composables/useQuotes';
import { useQuery } from '@tanstack/vue-query';

//1.uso con suspense
//const {data: quotes} = await breakingBadApi.get<Quote[]>('/5')

//2.uso composable functions
//const {quotes, isLoading, hasError,errorMessage} = useQuotes()

//3. uso tanstack vue-query

const getQuotesSlow = async():Promise<Quote[]> => {
    
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
    {
        cacheTime: 1000 * 60,
        refetchOnReconnect: 'always' 
    }
)

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>

    <div class="card-list">
        <QuoteCard
          v-for="q of quotes"
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