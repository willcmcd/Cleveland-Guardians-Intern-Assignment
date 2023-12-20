<template>
    <div class="bg-secondary text-light text-left rounded p-2 my-2">
        <!-- CONTENT -->
        <!-- <p>{{ teamData }}</p> -->
        <p>The {{ teamData.locationName }} {{ teamData.teamName }} have been playing since {{ teamData.firstYearOfPlay }}.</p>
        <p>They have {{ teamData.allStarStatus !== "N" ? "have" : "have not yet" }} achieved all star status.</p>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { I_TeamInfo } from "../types/TeamTypes"
import axios from "axios";

export default defineComponent({
    props: {
        teamId: String
    },
    data() {
        return {
            teamData: {} as I_TeamInfo
        }
    },
    created() {
        this.fetchTeamData();
    },
    methods: {
        async fetchTeamData() {
            try {
                let uri = "https://statsapi.mlb.com/api/v1/teams/" + this.teamId;
                const response = await axios.get(uri);
                this.teamData = await response.data.teams[0];
            } catch (e) {
                console.error("Error fetching roster data.", e);
            }
        }
    }
})

</script>