<template>
  <div>
    <a href="#">
      <div v-if="showButton" @click="hideButton" class="button">
        {{ buttonText }}
      </div></a
    >
    <a href="mailto:matt@prdxlabs.com"
      ><div class="hiddenText">{{ hiddenText }}</div></a
    >
  </div>
</template>

<script>
export default {
  props: ["buttonText", "hiddenText"],
  data() {
    return { showButton: true };
  },
  methods: {
    hideButton() {
      this.showButton = false;
    },
  },
};
</script>
