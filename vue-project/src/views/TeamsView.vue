<template>
  <div class="teams">
    <h1>Teams</h1>
    <TeamInfo v-for="team in teams" :key="team.id" :team-name="team.teamName" :team-id="team.id"></TeamInfo>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeamInfo from "@/components/TeamInfo.vue";
import axios from "axios";

export default defineComponent({  
  name: 'TeamsView',
  components: {
    TeamInfo,
  },
  data() {
    return {
      teams: null
    }
  },
  mounted() {
    this.LoadTeams();
  },
  methods: {
    async LoadTeams() {
      const response = await axios.get("https://statsapi.mlb.com/api/v1/teams", { params: { activeStatus: true , sportId: 1 } });
      const res = await response.data;
      this.teams = res.teams;
    },
  }
});

</script>