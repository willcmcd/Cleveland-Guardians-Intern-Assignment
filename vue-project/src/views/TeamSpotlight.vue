<template>
  <div class="bg-light text-dark p-2">
    <h1 class="text-5xl text-left">{{ teamData.teamName }}</h1>
    <TeamSpotlightFastFacts :teamId="teamId"></TeamSpotlightFastFacts>
    <div class="flex flex-row">
      <div class="w-1/2 m-1 bg-secondary rounded">
        <TeamSpotlightRoster :teamId="teamId"></TeamSpotlightRoster>
      </div>
      <div class="w-1/2 m-1 p-2 bg-secondary text-primary rounded">
        <p> MORE INFO HERE </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

import TeamSpotlightFastFacts from "@/components/TeamSpotlightFastFacts.vue";
import TeamSpotlightRoster from "@/components/TeamSpotlightRoster.vue";

export default defineComponent({
  name: 'TeamSpotlight',
  components: {
    TeamSpotlightFastFacts,
    TeamSpotlightRoster
  },
  data() {
    return {
      teamId: '0',
      teamData: { teamName: String },
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
    }
  },
  created() {
    this.teamId = this.$route.params.id.toString();
    this.fetchTeamData();
  },

})
</script>