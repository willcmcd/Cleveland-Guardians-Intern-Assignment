<template>
    <div class="relative m-2 p-2 bg-secondary rounded">
        <!-- persistent information -->
        <div class="text-primary">
            <h3><router-link :to='"/team/" + data!.teams.away.team.id'><b>{{ data?.teams.away.team.name }}</b></router-link> <wbr><i>vs</i> <wbr><router-link :to='"/team/" + data?.teams.home.team.id'><b>{{ data?.teams.home.team.name }}</b></router-link></h3>
            <p>{{ getGameTime() }}</p>
            <p>{{ data?.description }} @ {{ data!.venue.name }}</p>
        </div>

        <!-- TODO: display more information -->
        <div v-if="dropdown" class="relative bg-primary rounded-b-md">
            <p>{{ data?.teams.away }}</p>
            <p>{{ data?.teams.home }}</p>
            <p>{{ data?.gamePk }}</p>
            <p>{{ data?.link }}</p>
        </div>
    
        <!-- EXPAND/COLLAPSE BUTTONS -->
        <div>
            <button v-if="dropdown === false" @click="toggleDropDown()" class="bg-pop p-2 rounded shadow">EXPAND</button>
            <button v-if="dropdown === true" @click="toggleDropDown()" class="bg-pop p-2 rounded shadow">COLLAPSE</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { I_ScheduleGame } from '../types/ScheduleTypes'

export default defineComponent({
    props: {
        data: {} as () => I_ScheduleGame
    },
    data() {
        return {
            dropdown: false
        }
    },
    methods: {
        toggleDropDown() {
            this.dropdown = !this.dropdown;
        },
        getGameTime() {
            if (this.data == null || this.data.officialDate == null) return "ERROR"

            const dateString: string = this.data.officialDate;
            const dateDate: Date = new Date(dateString);

            return dateDate.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'});
        }
    }
})
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}

/* remove hyperlink styling for team names */
a {
    text-decoration: none;
    color: black;
}
</style>
