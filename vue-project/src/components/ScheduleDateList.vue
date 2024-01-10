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
            const response = await axios.get('https://statsapi.mlb.com/api/v1/schedule/postseason', { params: { season: 2023 }});
            this.schedule = response.data;

            // // Identify Sport ID for MLB
            // // const sports = await axios.get('https://statsapi.mlb.com/api/v1/sports');
            // // console.log(sports.data);
            // // Result: sportID: 1

            // // Get most up to date season
            // const seasons = await axios.get('https://statsapi.mlb.com/api/v1/seasons/all', { params: { sportId: 1, all: true }});
            // const seasonArr = seasons.data.seasons;
            // console.log(seasonArr[seasonArr.length - 1]);

            // const currSeason = seasonArr[seasonArr.length - 1].seasonId;
            
            // const season = await axios.get('https://statsapi.mlb.com/api/v1/seasons/' + currSeason, { params: { sportId: 1 }});
            // const seasonData = season.data;
            // console.log(seasonData);


            // this.schedule = JSON.parse(CACHED_POSTSEASON); // this doesn't work, It's likely necessary to really fix the issue to get this looking right again.
        }
    }
})

</script>
