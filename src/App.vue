<script setup lang="ts">

</script>

<template>
  <main>
    
    <div class="container mx-auto px-4 my-8">
      <nav class="bg-blue-500 text-white p-4">NavBar
        <ul>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/docs">Docs</RouterLink>
          <RouterLink to="/themes">Themes</RouterLink>
          <RouterLink to="/typograpy-chart">Typography Chart</RouterLink>
          <li>Docs</li>
          <li>Themes</li>
          <li>Typography</li>
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
