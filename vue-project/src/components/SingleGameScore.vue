TODO: API integration

<template>
        <div>
            <h1>{{ GameTitle }}: {{ TeamA }} vs {{ TeamB }}</h1>
            <p>{{ TeamA }}: H R E</p>
            <p>{{ TeamB }}: H R E</p>
        </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'SingleGameScore',
    props: {
        GameTitle: String,
        TeamA: String,
        TeamB: String
    },
});
</script>
