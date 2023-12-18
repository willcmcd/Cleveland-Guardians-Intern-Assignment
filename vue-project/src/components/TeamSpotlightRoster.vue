<template>
    <div>
        <h1>ROSTER:</h1>
        <ul>
            <PlayerInfo v-for="player in teamRoster" 
            :key="player.person.id"
            :name="player.person.fullName"
            :jerseyNumber="player.jerseyNumber"
            :position="player.position.name"></PlayerInfo>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerInfo from "./components/PlayerInfo.vue"
import { I_TeamRoster } from "../types/TeamTypes"

export default defineComponent({
    props: {
        teamRoster: {} as () => I_TeamRoster
    },
})

</script>