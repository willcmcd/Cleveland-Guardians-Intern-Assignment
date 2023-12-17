<template>
    <!-- Generate list of all teams -->
    <TeamListItem v-for="team in teams" 
        :key="team.id" 
        :team-name="team.teamName" 
        :team-id="team.id" 
        :team-abbrv="team.fileCode"
        :venue="team.venue.name"
        :city="team.locationName">
    </TeamListItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeamListItem from "@/components/TeamListItem.vue";
import axios from "axios";

export default defineComponent({  
  name: 'TeamList',
  components: {
    TeamListItem,
  },
  data() {
    return {
      teams: [{ id: 0, teamName: '', fileCode: '', venue: { name: ''}, locationName: ''}]
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