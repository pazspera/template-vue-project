<script setup lang="ts">
import { useDocumentTitle } from '@/composable/useDocumentTitle';
import { DOCUMENT_TITLES } from '@/constants/documentTitles';

defineOptions({ name: "ThemesView"})

useDocumentTitle(DOCUMENT_TITLES)
</script>

<template>
    <h1>Themes View</h1>
</template>