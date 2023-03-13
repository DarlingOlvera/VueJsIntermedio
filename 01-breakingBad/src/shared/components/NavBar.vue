<script setup lang="ts">
import type {RouteLink} from '@/router/links-route'

interface Props{
    title?:string;
    links:RouteLink[];
    showIcon?: boolean;
}



const props = withDefaults(defineProps<Props>(),{
    showIcon:true,
    links: () =>[],
});
</script>
<template>
    <nav>
        <img
          v-if="props.showIcon"  
          src="@/assets/logo.svg"
          alt="Vue logo"
          heigth="25"
          width="25">
        <span v-if="props.title">{{ props.title }}</span> 
        
        <router-link
          v-for="link of props.links"
          :key="link.path"
          :to="{name: link.name}">{{ link.title }}</router-link>
        
    </nav>
</template>


<style scoped>
    nav{
        align-items: flex-start;
        display: flex;
        font-size: 12px;
        margin-top: 10px;
        text-align: center;
        width:100%;
    }

    img{
        margin-right: 5px;
    }

    span{
        margin-right: 10px;
    }
    a{
        margin-right: 5px;
    }

</style>