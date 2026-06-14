<script setup lang="ts">
import NavBar from './components/orgamisms/NavBar.vue';


</script>

<template>
  <main>
    <div class="container mx-auto px-4 my-8">
      <nav class="bg-blue-500 text-white p-4">NavBar
        <ul class="flex gap-3">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/docs">Docs</RouterLink>
          <RouterLink to="/themes">Themes</RouterLink>
          <RouterLink to="/typograpy-chart">Typography Chart</RouterLink>
        </ul>
      </nav>
      <RouterView/>
    </div>
  </main>
</template>

<style>
/* DO NOT add scoped styles, the themes will stop working */
.theme-one h2 {
  font-family: "Fjalla One", sans-serif !important;
  color: red !important;
}
</style>
