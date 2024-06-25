<script setup>
import Sidebar from "../components/sidebar.vue";
import Navbar from "../components/navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <main class="">
    <div class="grid grid-cols-6 relative">
      <div class="col-span-1 sticky h-screen top-0 left-0"><Sidebar /></div>
      <div class="col-span-5">
        <Navbar class="sticky top-0 right-0 bg-white" />
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
