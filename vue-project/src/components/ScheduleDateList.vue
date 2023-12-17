<template>
    <div class="ScheduleDateList">
        <h1>SCHEDULE</h1>
        <!-- <p>{{ schedule }}</p> -->
        <ScheduleDate v-for="date in schedule.dates" :key="date.date" :data="date"></ScheduleDate>
    </div>
</template>

//https://statsapi.mlb.com/api/v1/schedule/postseason

<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";
import ScheduleDate from './ScheduleDate.vue';

export default defineComponent({
    props: {
        title: String
    },
    components: {
        ScheduleDate
    },
    data() {
        return {
            schedule: { dates: [ {date: String, totalItems: Number, games: [{}] } ]},
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

<style scoped>
.ScheduleDateList {
    background-color: cadetblue;
    padding: 10px;
}

</style>
