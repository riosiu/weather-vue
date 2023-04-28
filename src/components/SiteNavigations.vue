<template>
  <header class="sticky top-0 bg-weather-primary shadow-lg">
    <nav class="container flex flex-row sm:flex-row justify-between items-center gap-4 text-white py-6">
      <router-link :to="{name: 'home'}">
        <div class="flex flex-row items-center gap-3 flex-1">
          <i class="fa-solid fa-sun text-2xl"></i>
          <span class="text-2xl">The Local Weather</span>
        </div></router-link
      >

      <div class="flex items-center gap-2 justify-end">
        <i class="fa-solid fa-circle-info text-xl hover:text-weather-secondary cursor-pointer duration-150 " @click="toggleModal"></i>
        <i class="fa-plus fa-solid text-xl hover:text-weather-secondary cursor-pointer duration-150 "></i>
      </div>

      <BaseModal class="text-black p-2" :activeModal ="activeModal" @closeModal = "toggleModal">
        <h1>Hello world</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum fugiat quos distinctio dolore blanditiis quae quas! Molestiae, nesciunt ut?</p>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import BaseModal from './BaseModal.vue';

const activeModal = ref(null)
const toggleModal = () =>{
  activeModal.value = !activeModal.value
}

</script>
