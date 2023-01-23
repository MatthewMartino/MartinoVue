<script>
import buttonCover from "../components/buttonCover.vue";

export default {
  components: {
    buttonCover,
  },
};
</script>

<template>
    <div class="heroText">let's get in touch!</div>
    <div class="defaultGrid">
      <div />
      <buttonCover
        buttonText="click to reveal email"
        hiddenText="matt@prdxlabs.com"
      />
      <div />
  </div>
</template>
