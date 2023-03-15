<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';
import { storeToRefs } from 'pinia';
import CounterSetupValue from '@/counter/components/CounterSetupValue.vue';

const counterSetup = useCounterSetupStore();

//NOTA: no se pueden desestructurar los getters o states porque se pierde su reactividad
//si se pueden desestructurar las acciones

//una forma de hacerlo sin perder la reactividad es con el uso de refs
const {count, squareCount} = storeToRefs (counterSetup)
</script>

<template>
    <h1>Pinia Setup</h1>
    <h2>Counter: {{ count }}</h2>
    <h4>Square Counter: {{ squareCount }}</h4>
    <br>
    <button @click="counterSetup.increment()">+1</button>
    <button @click="counterSetup.incrementBy(2)">+2</button>
    <button @click="counterSetup.incrementBy(5)">+5</button>
    <button @click="counterSetup.$reset()">Reset</button>

    <br>
    <CounterSetupValue/>
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