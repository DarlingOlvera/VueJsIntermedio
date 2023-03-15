<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';
import CounterOptionsValue from '@/counter/components/CounterOptionsValue.vue';

const counterOptions = useCounterOptionsStore();

//NOTA: no se pueden desestructurar los getters o states porque se pierde su reactividad
//si se pueden desestructurar las acciones

//una forma de hacerlo sin perder la reactividad es con el uso de refs
const {count, squareCount} = storeToRefs (counterOptions)
</script>

<template>
    <h1>Counter: {{ count }}</h1>
    <h4>Square Counter: {{ squareCount }}</h4>
    <br>
    <button @click="counterOptions.increment()">+1</button>
    <button @click="counterOptions.incrementBy(2)">+2</button>
    <button @click="counterOptions.incrementBy(5)">+5</button>
    <button @click="counterOptions.$reset()">Reset</button>

    <br>
    <CounterOptionsValue/>
</template>


<style scoped>
button{
    background-color: goldenrod;
    border-style: none;
    color:white;
    height: 40px;
    margin-right: 5px;
    width: 50px;
    cursor: pointer;
}
</style>