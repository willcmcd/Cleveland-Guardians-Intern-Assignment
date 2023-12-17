TODO: API integration

<template>
        <div>
            <h1>{{ teamName }}</h1>
            <p>{{ teamId }}</p>
            <pre>{{ responseData }}</pre>
        </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import axios from "axios";

export default defineComponent({
    name: 'TeamInfo',
    props: {
        teamId: String,
        teamName: String,
        responseData: Object,
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('https://statsapi.mlb.com/api/v1/teams/2128');
                const res = await response.json();
                console.log(res.teams[0]);
            } catch (e) {
                console.error("Fail to get team data.", e);
            }
        }
    }
});
</script>
