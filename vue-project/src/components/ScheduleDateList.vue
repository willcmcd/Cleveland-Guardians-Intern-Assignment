<template>
    <div class="bg-light shadow-lg">
        <h1 class="text-dark text-4xl text-left">SCHEDULE</h1>
        <ScheduleDate v-for="date in schedule?.dates" :key="date.date.toString()" :data="date"></ScheduleDate>
    </div>
</template>

//https://statsapi.mlb.com/api/v1/schedule/postseason

<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";
import ScheduleDate from './ScheduleDate.vue';
import { I_SchedulePostseason } from '../types/ScheduleTypes'

export default defineComponent({
    props: {
        title: String
    },
    components: {
        ScheduleDate
    },
    data() {
        return {
            schedule: {} as I_SchedulePostseason,
        }
    },
    created() {
        this.getSchedule();
    },
    methods: {
        async getSchedule() {
            const response = await axios.get('https://statsapi.mlb.com/api/v1/schedule/postseason');
            this.schedule = response.data;
        }
    }
})

</script>
