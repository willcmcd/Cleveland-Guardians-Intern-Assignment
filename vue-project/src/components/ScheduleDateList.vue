<template>
    <div class="ScheduleDateList">
        <h1>SCHEDULE</h1>
        <ScheduleDate v-for="date in schedule?.dates" :key="date.date" :data="date"></ScheduleDate>
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

<style scoped>
.ScheduleDateList {
    background-color: cadetblue;
    padding: 10px;
}

</style>
