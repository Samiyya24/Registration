<script setup>
import Sidebar from "../components/sidebar.vue";
import Navbar from "../components/navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <main class="">
    <div class="grid grid-cols-6">
      <div class="col-span-1"><Sidebar /></div>
      <div class="col-span-5"><Navbar /><RouterView /></div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
