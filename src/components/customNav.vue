<script>
export default {
  data() {
    return {
      showI: false,
      showT: false,
      showYT: false,
      menuHidden: true,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.menuHidden = !this.menuHidden
      console.log("menuHidden = " + this.menuHidden)
    }
  }
};
</script>

<template>
  <div class="customNav">
    <div class="navTitle">martino hq</div>

    <svg @click="toggleMobileMenu" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#212529" viewBox="0 0 16 16" class="menuIcon"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>

    <div class="mobileMenuToggle" v-if="menuHidden">
      <div class="navLink">
        <RouterLink to="/">🏠 home</RouterLink>
      </div>
      <div class="navLink">
        <RouterLink to="/about">📚 about</RouterLink>
      </div>
      <div class="navLink">
        <RouterLink to="/contact">👋 contact</RouterLink>
      </div>
      <div class="navLink navDisabled">
        <RouterLink to="#">🌍 store (soon!)</RouterLink>
      </div>
    </div>

    <a
      class="socialLink"
      v-on:mouseover="showI = true"
      v-on:mouseleave="showI = false"
      href="https://www.instagram.com/yupitsmartino/"
      >📸</a
    >
    <a
      class="socialLink"
      v-on:mouseover="showT = true"
      v-on:mouseleave="showT = false"
      href="https://twitter.com/yupitsmartino"
      >🐦</a
    >
    <a
      class="socialLink"
      v-on:mouseover="showYT = true"
      v-on:mouseleave="showYT = false"
      href="https://youtube.com/@yupitsmartino"
      >📺</a
    >
  </div>

  <p class="socialTip" v-show="showI">instagram</p>
  <p class="socialTip" v-show="showT">twitter</p>
  <p class="socialTip" v-show="showYT">youtube</p>
</template>
