<template>
  <div class="bg-light text-4xl text-dark text-center flex items-center justify-center min-h-screen">
    <div class="flex flex-col bg-primary rounded">
      <div class="p-4 my-2 rounded">
        <p class="text-4xl">MENU</p>
      </div>
      <router-link to="/games">
      <div class="bg-secondary text-primary hover:bg-pop hover:text-dark transition duration-200 p-2 mx-2 my-1 rounded">
        <p>Schedule</p>
      </div>
      </router-link>
      <router-link to="/teams">
      <div class="bg-secondary text-primary hover:bg-pop hover:text-dark transition duration-200 p-2 mx-2 my-1 rounded">
        <p>Team List</p>
      </div>
      </router-link>
      <router-link to="/team/114">
      <div class="bg-secondary text-primary hover:bg-pop hover:text-dark transition duration-200 p-2 mx-2 my-1 rounded">
        <p>Team Spotlight</p>
      </div>
      </router-link>
    </div>
  </div>
</template>
