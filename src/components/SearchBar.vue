<template>
  <input
    v-model="searchTerm"
    type="text"
    placeholder="Search"
  >
</template>

<script setup lang="ts">
import { useArticles } from 'src/composable/useArticles'

const { searchTerm } = useArticles()
</script>
