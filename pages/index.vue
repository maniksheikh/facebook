<template>
      <div class="main-container">
         <div class="flex-container">
          <SidebarVue></SidebarVue>
          <MidelVueVue></MidelVueVue>
  
         </div>  
      </div>
</template>

<script>
import SidebarVue from '~/components/SidebarVue.vue';
import MidelVueVue from '~/components/MidelVue.vue';


export default {
    components: { 
      SidebarVue,
      MidelVueVue,
  
    }
}

</script>

<style lang="scss">

.main-container {
  width: 100%;
  // padding: 5px;

  .flex-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: rgb(236, 242, 245);
    grid-gap: 2rem;
  }

}

</style>
