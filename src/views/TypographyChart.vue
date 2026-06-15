<script setup lang="ts">
import { useDocumentTitle } from '@/composables/useDocumentTitle';
import { DOCUMENT_TITLES } from '@/constants/documentTitles';

defineOptions({ name: "TypographyChartView"})

useDocumentTitle(DOCUMENT_TITLES.TYPOGRAPHY)
</script>

<template>
    <h1>Typography Chart</h1>
</template>