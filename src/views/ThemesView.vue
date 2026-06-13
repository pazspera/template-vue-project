<script setup lang="ts">
import { useDocumentTitle } from '@/composable/useDocumentTitle';
import { DOCUMENT_TITLES } from '@/constants/documentTitles';

defineOptions({ name: "ThemesView"})

useDocumentTitle(DOCUMENT_TITLES.THEMES)
</script>

<template>
    <h1>Themes View</h1>
    <section class="theme-one">
        <p>Theme 1: To be named</p>
        <h2>Title: Fjalla One</h2>
        <p>Text: Libre Baskerville</p>
      </section>
  
      <section class="theme-two">
        <p>Theme 2</p>
        <h2>Title: Yeseva One</h2>
        <p>Text: Josefin Sans</p>
      </section>

       <section class="theme-three">
        <p>Theme 3</p>
        <h2>Title: Spectral</h2>
        <p>Text: Karla</p>
      </section>

      <section class="theme-four">
        <p>Theme 4</p>
        <h2>Title: Ubuntu Bold</h2>
        <p>Text: Open Sans</p>
      </section>

      <section class="theme-five">
        <p>Theme 5</p>
        <h2>Title: Ultra</h2>
        <p>Text: Slabo 27px</p>
      </section>

      <section class="theme-six">
        <p>Theme 6</p>
        <h2>Title: Cabin</h2>
        <p>Text: Roboto Contensed</p>
      </section>
</template>