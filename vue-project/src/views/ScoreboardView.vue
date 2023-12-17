<template>
  <div class="scoreboard">
    <h1>MLB Scoreboard</h1>
    <div>
      <h2>Dates</h2>
      <!-- <input type="date" name="game-date" id="game-date" value="" min="2018-01-01" max="2024-01-01"> -->
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