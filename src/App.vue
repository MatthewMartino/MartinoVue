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

  <video id="bg-video" poster="./assets/img/space.png" autoplay loop muted>
    <source src="./assets/vid/space_min.mp4" type="video/mp4">
  </video>
</template>
