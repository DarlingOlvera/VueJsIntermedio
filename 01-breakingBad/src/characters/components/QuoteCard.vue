<script setup lang="ts">
import type {Quote} from '@/characters/interfaces/quotes'
import {toRef} from 'vue'


const props = defineProps<{quote:Quote}>();

const quote = toRef(props,'quote');


</script>

<template>
    <div class="quote-card">
        <div class="interior">
            <h2>{{ quote.quote }}</h2>
            <h4>{{ quote.author}}</h4> 
        </div>
    </div>
</template>


<style scoped>
.quote-card{
   margin-right: 5px;
   margin-left: 5px;
   display:flex; 
   flex-direction: column;
   align-items: center;
   margin-bottom: 20px;
   box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
}
.interior{
    margin:10px;
}

h2{
    font-style: italic;
}
</style>