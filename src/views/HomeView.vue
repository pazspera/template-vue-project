<script setup lang="ts">
import { useDocumentTitle } from '@/composables/useDocumentTitle';
import { DOCUMENT_TITLES } from '@/constants/documentTitles';

defineOptions({ name: "HomeView"})

useDocumentTitle(DOCUMENT_TITLES.DOCS)
</script>

<template>
    <h1>Home View</h1>
</template>