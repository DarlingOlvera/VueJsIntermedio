<script setup lang="ts">
import {watch} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClient from '@/clients/composables/useClient';

const route = useRoute()
const router = useRouter()

const {client, isLoading,clientMutation, isError} = useClient(+route.params.id) //el + es para convertir el id a numero sí se puede

//manejo de errores, si el cliente no existe se redirecciona a la pagina clients
watch(isError, () =>{
        if(isError.value)
            router.replace('/clients')
    })

</script>

<template>
    <h3 v-if="clientMutation.isLoading.value">Guardando...</h3>
    <h3 v-if="clientMutation.isSuccess.value">Guardado</h3>

     <LoadingModal v-if="isLoading"/> 

    <div v-if="client">
        <h1>{{ client.name }}</h1>
        <form @submit.prevent="clientMutation.mutate(client!)">
            <input
              type="text"
              placeholder="Nombre"
              v-model="client.name">
            <br>
            <input
              type="text"
              placeholder="Dirección"
              v-model="client.address">
            <br>
            <button type="submit" :disabled="clientMutation.isLoading.value">Guardar</button>
        </form>
    </div>
    <code>
        {{ client }}
    </code>

</template>



<style scoped>

input{
  width: 100%;
  max-width: 300px;
  height: 45px;
  padding: 12px;
  border-radius: 12px;
  border: 1.5px solid lightgrey;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
  margin-top: 15px;
  margin-bottom: 15px;
}

input:hover{
  border: 2px solid lightgrey;
  box-shadow: 0px 0px 20px -17px;
}

input:active{
    transform: scale(0.95);
}

input:focus{
    border: 2px solid grey;   
}

button{
  font-family: monospace;
  background-color: #f3f7fe;
  color: #FFE267;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 45px;
  transition: .3s;
  margin-bottom: 10px;
}

button:hover {
  background-color: #FFE267;
  box-shadow: 0 0 0 5px #FFC93F;
  color: #fff;
}
code{
    color:#369b43;
}

button:disabled{
  cursor:not-allowed;
}
</style>