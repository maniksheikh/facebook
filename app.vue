<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s - Facebook Clone',
  meta: [
    { name: 'description', content: 'Facebook clone built with Nuxt 3' }
  ]
})
</script>
