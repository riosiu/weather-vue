<template>
  <div class="flex flex-col min-h-screen w-full font-roboto  bg-weather-primary">
    <SiteNavigations/>
    <HomeView/>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import HomeView from "./views/homeview.vue"
  import SiteNavigations from './components/SiteNavigations.vue';
</script>