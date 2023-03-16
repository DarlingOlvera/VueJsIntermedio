<script setup lang="ts">
import {toRef, ref, watch} from 'vue'

//const {getPage} = useClients()

interface Props{
  currentPage:number
  totalPages:number
}

interface Emits {
  (e:'pageChanged',page:number) : void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const totalPages = toRef(props,'totalPages');
const currentPage = toRef(props, 'currentPage');

const totalPageNumbers = ref<number[]>([]);

watch(totalPages, () =>{
  totalPageNumbers.value = [...new Array(totalPages.value)].map((value, index) =>index + 1) 
},{immediate:true});



/* const emit = defineEmits<{
  (e:'changePage',value:number):void
}>(); */

</script>

<template>
    <div>
        <button
          class="btn"
          :disabled="currentPage === 1"
          @click="emits('pageChanged', currentPage - 1)">Anterior</button>
        <button
          v-for="number of totalPageNumbers"
          :key="number"
          class="btn"
          :class="{active: currentPage === number}"
          @click="emits('pageChanged',number)">{{ number }}</button>
        <button
          class="btn"
          :disabled="currentPage === totalPages"
          @click="emits('pageChanged', currentPage + 1)">Siguiente</button>

    </div>
</template>

<style scoped>

div{
    margin-top: 10px; 
}

.btn {
 background-color: #FFCF49;
 padding: 5px;
 color: #fff;
 text-transform: uppercase;
 letter-spacing: 2px;
 justify-content: start;
 cursor: pointer;
 border-radius: 10px;
 border: 2px dashed #FFCF49;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
 transition: .4s;
 width: inherit;
 height: 30px;
 margin: 5px;
}

.btn span:last-child {
 display: none;
}

.btn:hover {
 transition: .4s;
 border: 2px dashed #FFCF49;
 background-color: #fff;
 color: #FFCF49;
}

.btn:active {
 background-color: #f7ed6a; 

}

.btn:disabled{
    cursor: not-allowed;
}

.active{
    border: 2px dashed #FFCF49;
    background-color: #fff;
    color: #FFCF49;  
}

</style>