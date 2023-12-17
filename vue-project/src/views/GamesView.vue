<template>
  <div class="games">
    <h1>Games Page</h1>
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
