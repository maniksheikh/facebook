<template>
    <div class="main-container">
         <AppHeaderVue></AppHeaderVue>
         <nuxt></nuxt>
    </div>
</template>

<script>
 import AppHeaderVue from '~/components/AppHeaderVue.vue';
 
  export default {

    components: {
      AppHeaderVue
     
    }
   
  }
 
</script>