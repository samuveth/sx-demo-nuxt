<template>
  <div class="px-5 py-3">
    <NuxtLink to="/"> Home </NuxtLink>
    <NuxtLink to="/about"> About </NuxtLink>

    <h1 class="text-xl mt-3">Nuxt template demo</h1>

    <div class="mt-6">
      <slot />
    </div>
  </div>
</template>
