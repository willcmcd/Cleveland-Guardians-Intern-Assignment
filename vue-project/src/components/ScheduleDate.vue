<!-- TODO: "Cardify" -->
<!-- TODO: tailwind -->

<template>
    <div class="flex flex-col bg-primary rounded-md mb-2 mx-1">
        <h2 class="m-3 text-dark text-center">{{ data?.date.replace(/-/g, '/') }}</h2>
        <!-- Generate a ScheduleGame Component for each game in the date games array. -->
        <ScheduleGame v-for="game in data?.games" :key="game.gameGuid" :data="game"></ScheduleGame>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ScheduleGame from './ScheduleGame.vue';
import { I_ScheduleDate } from '../types/ScheduleTypes'

export default defineComponent({
    props: {
        data: {} as () => I_ScheduleDate
    },
    components: {
        ScheduleGame
    }
})

</script>
