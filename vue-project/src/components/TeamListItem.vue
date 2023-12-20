<template>
    <router-link :to="'/team/' + teamId ">
    <div class="bg-primary rounded m-2 p-1 flex flex-row items-center">
        <img :src="'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/scoreboard/' + teamAbbrv + '.png'" 
                alt="TeamLogo"
                class="w-16 m-2 overflow-hidden">
        <h1 class="m-2 text-2xl font-bold">{{ teamName }}</h1>
        <p class="m-2">The {{ city }} {{ teamName }}'s play at their home field, {{ venue }}</p>
    </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TeamListItem',
    props: {
        teamId: Number,
        teamName: String,
        teamAbbrv: String,
        venue: String,
        city: String,
    }
});
</script>
