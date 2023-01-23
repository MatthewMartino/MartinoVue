<script>
import { RouterView } from "vue-router";
import customNav from "./components/customNav.vue";

export default {
  components: {
    customNav,
  },
};
</script>

<template>
  <header>
    <customNav />
  </header>

  <RouterView />

  <div class="bgOverlay"></div>
  <video class="bgVideo" poster="./assets/img/space.png" autoplay loop muted>
    <source src="./assets/vid/space_min.mp4" type="video/mp4">
  </video>
</template>
