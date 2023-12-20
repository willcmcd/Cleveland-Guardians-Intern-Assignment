<template>
  <div class="games bg-light text-secondary text-bold ">
    <h1 class="text-5xl p-1 pb-4">Games Page</h1>
    <ScheduleDateList></ScheduleDateList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ScheduleDateList from '../components/ScheduleDateList.vue';

export default defineComponent({
  components: {
    ScheduleDateList
  }
})
</script>
