<template>
  <div class="teams">
    <h1 class="text-5xl pb-5 m-2">Teams</h1>
    <TeamList></TeamList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeamList from "@/components/TeamList.vue";

export default defineComponent({  
  name: 'TeamsView',
  components: {
    TeamList,
  }
})
</script>