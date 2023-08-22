<script setup lang="ts">
useHead({
  title: 'nuxt-toile',
  meta: [{ name: 'description', content: 'Template for creating nuxt apps' }]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
