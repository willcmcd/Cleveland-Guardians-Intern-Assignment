<template>
    <div class="bg-light shadow-lg">
        <ScheduleDate v-for="date in schedule?.dates" :key="date.date.toString()" :data="date"></ScheduleDate>
    </div>
</template>

//https://statsapi.mlb.com/api/v1/schedule/postseason

<script lang="ts">
import { defineComponent } from 'vue';
import ScheduleDate from './ScheduleDate.vue';
import { I_SchedulePostseason } from '../types/ScheduleTypes';

import axios from "axios";
// import CACHED_POSTSEASON from '../tmp/api_v1_schedule_postseason.json';

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
            // this.schedule = JSON.parse(CACHED_POSTSEASON); // this doesn't work, It's likely necessary to really fix the issue to get this looking right again.
        }
    }
})

</script>
