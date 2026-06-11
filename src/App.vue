<script setup lang="ts"></script>

<template>
  <main>
    <div class="container mx-auto px-4 my-8">
      <h1 class="bg-blue-500 text-white p-4">You did it!</h1>
      <p>
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
      </p>
    
      <section class="theme-one">
        <h2>Theme 1: To be named</h2>
        <p>Title: Fjalla One</p>
        <p>Text: Libre Baskerville</p>
      </section>
  
      <section class="theme-two">
        <h2>Theme 2</h2>
        <p>Title: Yeseva One</p>
        <p>Text: Josefin Sans</p>
      </section>

       <section class="theme-three">
        <h2>Theme 3</h2>
        <p>Title: Spectral</p>
        <p>Text: Karla</p>
      </section>

      <section class="theme-four">
        <h2>Theme 4</h2>
        <p>Title: Ubuntu Bold</p>
        <p>Text: Open Sans</p>
      </section>

      <section class="theme-five">
        <h2>Theme 5</h2>
        <p>Title: Ultra</p>
        <p>Text: Slabo 27px</p>
      </section>

      <section class="theme-six">
        <h2>Theme 6</h2>
        <p>Title: Cabin</p>
        <p>Text: Roboto Contensed</p>
      </section>
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
