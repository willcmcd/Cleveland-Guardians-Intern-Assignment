<!-- TODO: implement tailwind styling -->
<!-- TODO: show more information?  -->

<template>
    <div class="bg-primary text-dark text rounded my-2 p-2">
        <h2 class="text-2xl">{{ name }}{{ jerseyNumber?.length > 0 ? ", " + jerseyNumber : "" }}</h2>
        <p>Position: {{ position }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true
        },
        jerseyNumber: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        }
    }
})
</script>
