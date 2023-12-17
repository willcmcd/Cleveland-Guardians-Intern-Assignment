<template>
    <h3>#{{ jerseyNumber }} {{ name }}, {{ position }}</h3>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: String,
        jerseyNumber: Number,
        position: String
    }
})
</script>
