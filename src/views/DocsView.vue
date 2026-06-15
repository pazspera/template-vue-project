<script setup lang="ts">
import { useDocumentTitle } from '@/composables/useDocumentTitle';
import { DOCUMENT_TITLES } from '@/constants/documentTitles';

defineOptions({ name: "DocsView"})

useDocumentTitle(DOCUMENT_TITLES.DOCS)
</script>

<template>
    <h1>Docs View</h1>
</template>