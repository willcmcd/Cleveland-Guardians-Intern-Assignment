<template>
    <div class="bg-secondary text-light text-left rounded p-2">
        <h1 class="text-4xl text-center">ROSTER</h1>
        <PlayerInfo v-for="player in teamRoster.roster" :key="player.person.id" :name="player.person.fullName"
            :jerseyNumber="player.jerseyNumber.toString()" :position="player.position.name"></PlayerInfo>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerInfo from "./PlayerInfo.vue";
import { I_TeamRoster } from "../types/TeamTypes"
import axios from "axios";

export default defineComponent({
    props: {
        teamId: {
            type: String,
            required: true
        }
    },
    components: {
        PlayerInfo
    },
    data() {
        return {
            teamRoster: {} as I_TeamRoster
        }
    },
    created() {
        this.fetchRosterData();
    },
    methods: {
        async fetchRosterData() {
            try {
                let uri = "https://statsapi.mlb.com/api/v1/teams/" + this.teamId + "/roster";
                const response = await axios.get(uri);
                this.teamRoster = await response.data;
            } catch (e) {
                console.error("Error fetching roster data.", e);
            }
        }
    }
})

</script>