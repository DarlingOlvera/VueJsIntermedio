<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';
import type { RouteLink } from '@/router/links-route';
import { characterRoute } from '../router';

const routeLinks: RouteLink[] = characterRoute.children!
    .filter(route => (route.props as {visible:boolean}).visible)
    .map(route => {
        return{
            name:route.name as string,
            path:route.path,
            title: (route.props as {title:string, visible:boolean}).title
        }
    })

</script>

<template>
    <h1>Personajes</h1>

    <NavBar
      :show-icon="false"
      :links="routeLinks" />

    <RouterView/>
</template>


<style scoped>

</style>