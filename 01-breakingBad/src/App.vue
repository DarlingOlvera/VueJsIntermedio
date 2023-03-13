<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';

import { routerLinks } from './router/links-route';
</script>

<template>
  <div class="wrapper">
    <header>
      <nav-bar
        title="BreakingBad"
        :links="routerLinks"></nav-bar>
    </header>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>

  .wrapper {
    display: flex;
    flex-direction: column;
  }

</style>
