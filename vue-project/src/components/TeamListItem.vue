<template>
        <div>
            <h1>{{ teamName }}</h1>
            <img :src="'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/scoreboard/' + teamAbbrv + '.png'" alt="TeamLogo" width="50px">
            <p>The {{ city }} {{ teamName }}'s play at their home field, {{ venue }}</p>
        </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import axios from "axios";

export default defineComponent({
    name: 'TeamListItem',
    props: {
        teamId: String,
        teamName: String,
        teamAbbrv: String,
        venue: String,
        city: String,
    }
});
</script>
