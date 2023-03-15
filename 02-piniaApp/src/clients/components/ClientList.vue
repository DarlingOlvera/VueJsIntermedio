<script setup lang="ts">
import useClients from '@/clients/composables/useClients';

const { clients } = useClients()
</script>

<template>
   <ul>
    <li v-for="client of clients" :key="client.id">
        <router-link :to="{
            name:'client-id',
            params: {id:client.id}
        }">
            {{ client.name }}
        </router-link>
    </li>
    
   </ul>
</template>

<style scoped>

</style>