<template>
    <div class="ScheduleDate">
        <h2>{{ data.date }}</h2>
        <!-- <p>{{ data.games }}</p> -->
        <ScheduleGame v-for="game in data.games" :key="game.gameGuid" :data="game"></ScheduleGame>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ScheduleGame from './ScheduleGame.vue';

export default defineComponent({
    props: {
        data: {}
    },
    components: {
        ScheduleGame
    }
})

</script>

<style scoped>
.ScheduleDate {
    background-color: antiquewhite;
    padding: 10px;
}
</style>