<template>
    <header class="sticky top-0 bg-dark shadow-lg z-50">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 py-6">
            <div class="flex items-center gap-3 flex-1 text-light text-2xl font-bold">
                <RouterLink to="/">Home</RouterLink> |
                <RouterLink to="/games">Games</RouterLink> |
                <RouterLink to="/teams">Teams</RouterLink> |
                <RouterLink to="/scoreboard">Scoreboard</RouterLink>
            </div>
        </nav>
    </header>
</template>

<style>
nav a.router-link-exact-active {
    /* TODO: figure out how to use colors defined in tailwind. */
    color: #eb5e28;
}
</style>

<script lang='ts' setup>
import { RouterLink } from 'vue-router';

</script>