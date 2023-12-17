// TODO: implement some sort of decent layout for this.
<template>
  <div class="ScheduleGameItem">
    <p>{{ data }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        data: Object
    }
})

</script>

<style scoped>
.ScheduleGameItem {
    background: lightblue !important;
}
</style>
