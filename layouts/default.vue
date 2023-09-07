<script setup lang="ts"></script>

<template>
  <div
    class="font-serif text-base min-h-screen bg-skin-bg text-skin-text antialiased"
  >
    <div class="pb-6 flex">
      <TheSidebar />
      <TheTopnav />

      <div class="flex-auto w-full">
        <div class="flex-auto mt-[72px] ml-0 lg:ml-[72px]">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
