<template>
      <div class="main-container">
         <div class="flex-container">
          <SidebarVue></SidebarVue>
          <MidelVueVue></MidelVueVue>
           <RightSide></RightSide>
         </div>  
      </div>
</template>

<script>
import SidebarVue from '~/components/SidebarVue.vue';
import MidelVueVue from '~/components/MidelVue.vue';
import RightSide from '~/components/RightSide.vue';


export default {
    components: { 
      SidebarVue,
      MidelVueVue,
      RightSide
    }
}

</script>

<style lang="scss">

.main-container {
  width: 100%;
  

  .flex-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background:#F0F2F5 ;
    grid-gap: 2rem;
  }

}

</style>
