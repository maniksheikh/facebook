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

    AppHeaderVue
<style   >
*,
*:before,
*:after {
  box-sizing: inherit;
}

.nuxt-container {
  margin-top: 60px;
}
</style>