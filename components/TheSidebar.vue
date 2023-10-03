<script setup lang="ts">
import Draggable from 'vuedraggable'

const uiStore = useUiStore()
const spacesStore = useSpacesStore()
</script>

<template>
  <div class="w-[72px] border-r fixed left-0 top-0 bottom-0 text-center">
    <NuxtLink
      :to="''"
      class="h-[72px] block"
    >
      <IHStop class="inline-block my-4 w-[32px] h-[32px] text-skin-link" />
    </NuxtLink>
    <Draggable
      v-model="spacesStore.starredSpaces"
      :delay="100"
      delay-on-touch-only
      :touch-start-threshold="35"
      :item-key="i => i"
      class="space-y-3 p-2"
    >
      <template #item="{ element }">
        <NuxtLink
          :to="''"
          class="block"
          @click="uiStore.sidebarOpen = false"
        >
          <SpaceAvatar
            :space="element"
            :size="32"
            class="!rounded-[4px]"
          />
        </NuxtLink>
      </template>
    </Draggable>
  </div>
</template>
