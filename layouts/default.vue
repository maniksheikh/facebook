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

<style   >
*,
*:before,
*:after {
  box-sizing: border-box;
  font-family: inherit;
}

.nuxt-container {
  margin-top: 60px;
}
</style>