<template>
  <div class="feed bg-dark">
    <div class="container">
      <div class="left-sidebar">
        <SidebarVue></SidebarVue>
      </div>
      <div class="feed-sidebar mt-2">
        <ItemsVue></ItemsVue>
        <CreatePostVue></CreatePostVue>
        <PostSection></PostSection>
      </div>
      <div class="right-sidebar mt-2">
        <RightSide></RightSide>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarVue from "../components/SidebarVue.vue";
import CreatePostVue from "../components/CreatePost.vue";
import ItemsVue from "../components/ItemsVue.vue";
import PostSection from "../components/PostSection";
import RightSide from "../components/RightSide.vue";

export default {
  components: {
    SidebarVue,
    ItemsVue,
    CreatePostVue,
    PostSection,
    RightSide,
  },
};
</script>
<style lang="scss" scoped>
.feed {
  height: 100%;
  .container {
    display: flex;
    justify-content: space-between;

    .left-sidebar {
      width: 20%;
      position: fixed;
      left: 0;
    }
    .feed-sidebar {
      margin: 0 auto;
      width: 50%;
    }
    .right-sidebar {
      width: 18%;
      right: 0;
      position: fixed;
      margin-left: 2rem !important;
    }
  }
}

.bg-dark {
  background: #f0f2f5;
}
@media screen and (max-width: 1300px) {
  .feed-sidebar {
    width: 50% !important;
  }
  .right-sidebar {
    width: 10%;
  }
}
@media screen and (max-width: 1100px) {
  .feed-sidebar {
    width: 70% !important;
    margin-right: 25% !important;
  }
  .left-sidebar {
    display: none;
  }
}
@media screen and (max-width: 900px) {
  .right-sidebar {
    display: none;
  }
  .feed-sidebar {
    width: 100% !important;
  }
}
@media screen and (max-width: 600px) {
  .feed-sidebar {
    width: 350px !important;
    margin: auto !important;
  }
}
</style>
