<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue'
import PaginationNumber from '@/clients/components/PaginationNumber.vue';
import useClients from '@/clients/composables/useClients';
import LoadingModal from '@/shared/components/LoadingModal.vue'
const {isLoading,clients,currentPage,totalPages,getPage} = useClients();

</script>

<template>
    <div>
        <h1>Lista de Clientes</h1>
        <!--Client list-->
        <ClientList :clients="clients"/>
        <!--PaginationNumbers-->
        <PaginationNumber
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-changed="getPage"
          />
        <!--LoadingModal-->
        <LoadingModal v-if="isLoading"/>
    </div>
</template>



<style scoped>

</style>