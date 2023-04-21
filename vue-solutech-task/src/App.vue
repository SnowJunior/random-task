<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="max-w-7xl mx-auto">

      <nav class="p-2">
        <RouterLink to="/" class="px-4 py-2 mr-4 bg-green-400 hover:bg-purple-500 rounded text-white">Home</RouterLink>
        <RouterLink to="/tasks" class="px-4 py-2 mr-4 bg-green-400 hover:bg-purple-500 rounded text-white">Task</RouterLink>
      </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>

