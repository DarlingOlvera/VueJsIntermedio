<script setup lang="ts">
import { useQuotes } from '@/characters/composables/useQuotes';

const {quotes, isLoading} = useQuotes()


//uso con suspense
//const {data: quotes} = await breakingBadApi.get<Quote[]>('/5')



</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <!-- <h1>ERROR!!</h1> -->
    <ul>
        <li v-for="{quote, author} of quotes" :key="quote">{{ author }}</li>
    </ul>
</template>


<style scoped>

</style>