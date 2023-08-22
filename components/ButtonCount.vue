<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <button
    type="button"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="store.increment"
  >
    double: {{ store.doubleCount }}
  </button>
</template>
