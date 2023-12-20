<template>
  <div class="flex flex-col min-h-screen bg-light text-secondary">
    <h1 class="text-5xl">MLB Scoreboard</h1>
    <h1 class="text-5xl text-pop">TODO: wire in to /api/v1/game/gamePk/boxscore</h1>
    <div>
      <h2>Dates</h2>
    </div>
    <div id="games">
      <h1 style="text-align: left">SELECTED_DATE</h1>
      <SingleGameScore -game-title="The Big One" -team-a="Team A" -team-b="Team B"></SingleGameScore>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SingleGameScore from "@/components/SingleGameScore.vue";

export default defineComponent({
  name: 'ScoreboardView',
  components: {
    SingleGameScore,
  }
});

</script>