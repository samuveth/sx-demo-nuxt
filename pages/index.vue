<script setup lang="ts"></script>

<template>
  <div class="space-y-6">
    <div>
      Pinia store counter:
      <ButtonCount />
    </div>

    <div class="flex gap-1">
      Iconify icon:
      <Icon name="uil:github" />
    </div>

    <div class="flex gap-1">
      Custom icon from /assets/icons/github.svg:
      <NuxtIcon
        name="github"
        class="text-2xl"
      />
    </div>
  </div>
</template>
