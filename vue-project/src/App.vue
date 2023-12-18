<template>
  <div class="flex flex-col min-h-screen font-Helvetica bg-light text-dark text-xl text-center">
    <SiteNavbar/>
    <router-view/>
  </div>
</template>


<script lang='ts' setup>
import SiteNavbar from './components/SiteNavbar.vue'
</script>
