<script>
import customButton from "../components/buttonCover.vue";

export default {
  components: {
    customButton,
  },
};
</script>

<template>
  <div class="contact">
    <div class="heroText">let's get in touch!</div>
    <customButton
      buttonText="click to reveal email"
      hiddenText="matt@prdxlabs.com"
    />
  </div>
</template>
