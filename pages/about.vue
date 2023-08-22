<script setup lang="ts">
const { data, pending } = await useAsyncGql({
  operation: 'proposal',
  variables: {
    id: '0x7889339ebc62182cacccc69efbbf46902995eb4f35f6cf62724ba6aaad3933c7'
  },
  options: {
    lazy: true
  }
})
</script>

<template>
  <div>
    Graphql query:
    <span v-if="pending">loading..</span>
    <span v-else-if="data.proposal">
      {{ data.proposal.title }}
    </span>
  </div>
</template>
