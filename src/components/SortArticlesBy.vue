<template>
  Sort by
  {{ sortBy }}
  <select v-model="sortBy">
    <option value="date">
      date
    </option>
    <option value="tag">
      tag
    </option>
    <option value="user">
      user
    </option>
  </select>
</template>

<script setup lang="ts">
import { watch } from '@vue/runtime-core'
import { useArticles } from 'src/composable/useArticles'

const { sortBy } = useArticles()
</script>
