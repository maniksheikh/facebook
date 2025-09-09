<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Facebook Clone',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Facebook clone built with Nuxt 2'
        }
      ]
    }
  }
}
</script>
