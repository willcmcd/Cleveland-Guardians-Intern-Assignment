// TODO: implement some sort of decent layout for this.
<template>
  <div class="ScheduleGameItem">
    
    <h3><router-link :to='"/team/" + data?.teams.away.team.id'><b>{{ data?.teams.away.team.name }}</b></router-link> <wbr><i>vs</i> <wbr><router-link :to='"/team/" + data?.teams.home.team.id'><b>{{ data?.teams.home.team.name }}</b></router-link></h3>
    <p>{{ data?.description }}<br>at {{ data?.venue.name }} </p>

    <h4 style="text-align: left;">METADATA</h4>
    <table>
        <tr>
            <td>gamePk</td>
            <td>{{ data?.gamePk }}</td>
        </tr>
        <tr>
            <td>gameGuid</td>
            <td>{{ data?.gameGuid }}</td>
        </tr>
    </table>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { I_ScheduleGame } from '../types/ScheduleTypes'

export default defineComponent({
    props: {
        data: {} as () => I_ScheduleGame
    }
})
// https://statsapi.mlb.com/api/v1/game/748581/boxscore
</script>

<style scoped>
.ScheduleGameItem {
    background: lightblue !important;
}

table, th, td {
  border: 1px solid black;
}

/* remove hyperlink styling for team names */
a {
    text-decoration: none;
    color: black;
}
</style>
