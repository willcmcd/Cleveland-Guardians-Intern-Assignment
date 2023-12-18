// TODO: implement some sort of decent layout for this.
<template>
  <div class="ScheduleGameItem">
    <p>{{ data?.description }} <br> <b>{{ data?.teams.away.team.name }}</b> <i>vs</i> <b>{{ data?.teams.home.team.name }}</b></p>

    <h3 style="text-align: left;">METADATA</h3>
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

</script>

<style scoped>
.ScheduleGameItem {
    background: lightblue !important;
}

table, th, td {
  border: 1px solid black;
}
</style>
