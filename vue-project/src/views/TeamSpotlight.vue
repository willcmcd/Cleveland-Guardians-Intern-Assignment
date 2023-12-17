<template>
  <div class="teamSpotlight">
    <h1>{{ teamData.teamName }}</h1>
    <p>{{ $route.params.id }}</p>
    <!-- <p>{{this.teamRoster}}</p> -->
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
import axios from "axios";
import PlayerInfo from "@/components/PlayerInfo.vue";

export default defineComponent({  
  name: 'TeamSpotlight',
  components: {
    PlayerInfo
  },
  data() {
    return {
      teamId: '0',
      teamData: { teamName: String },
      teamRoster: [ {person: {fullName: String, id: String}, jerseyNumber: Number, position: { name: String } } ]
    }
  },
  methods: {
    async fetchTeamData() {
      try {
        let uri = "https://statsapi.mlb.com/api/v1/teams/" + this.$route.params.id;
        const response = await axios.get(uri);
        this.teamData = await response.data.teams[0];
        
      } catch (e) {
        console.error("Error fetching team data.", e);
      }
    },
    async fetchRosterData() {
      try {
        let uri = "https://statsapi.mlb.com/api/v1/teams/" + this.$route.params.id + "/roster";
        const response = await axios.get(uri);
        this.teamRoster = await response.data.roster;
      } catch (e) {
        console.error("Error fetching roster data.", e);
      }
    }
  },
  created() {
    this.teamId = this.$route.params.id.toString();
    this.fetchTeamData();
    this.fetchRosterData();
  },

})
</script>