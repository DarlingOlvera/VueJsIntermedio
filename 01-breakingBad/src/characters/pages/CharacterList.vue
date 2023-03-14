<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';

import CardList from '@/characters/components/CardList.vue';
import breakingBadApi from '@/api/breakingBadApi';
import type {Quote} from '@/characters/interfaces/quotes'
import quoteStore from '@/store/quotes.store';


const props = defineProps<{title:string, visible:boolean}>()

 const getQuotesCacheFirst = async(): Promise<Quote[]> =>{

     if (quoteStore.quotes.count>0){
          return quoteStore.quotes.list
     }

     const {data} = await breakingBadApi.get<Quote[]>('/5');
     return data
}

useQuery(
     ['quotes'],
     getQuotesCacheFirst,
     {
          onSuccess(data){
               quoteStore.loadedQuotes(data);
          }
     }
) 

</script>

<template>
     <h1 v-if="quoteStore.quotes.isLoading">Loading...</h1>
     <div v-else-if="quoteStore.quotes.hasError">
          <h1>Error al cargar</h1>
          <p>{{ quoteStore.quotes.errorMessage }}</p>
     </div>

     <template v-else>
          <h1>{{ props.title }}</h1>
     
          <CardList :quotes="quoteStore.quotes.list"/>  
     </template>

    
</template>


<style scoped>

</style>