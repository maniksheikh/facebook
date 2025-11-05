<template>
  <div>
    <AppHeaderVue />
    <div>
      <Nuxt class="nuxt-container" />
    </div>
  </div>
</template>

<script>
import AppHeaderVue from '~/components/AppHeaderVue.vue';

export default {
  components: {
    AppHeaderVue,
  },
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}
body {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.nuxt-container {
  margin-top: 60px;
}
</style>