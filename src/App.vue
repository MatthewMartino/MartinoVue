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
</template>
