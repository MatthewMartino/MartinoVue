<script>
import customCard from "../components/customCard.vue";

export default {
  components: {
    customCard,
  },

  data() {
    return {
      cardDataLocal: [
        { title: 'Item 1', link: '#' },
        { title: 'Item 2', link: '#' },
        { title: 'Item 3', link: '#' },
        { title: 'Item 4', link: '#' },
        { title: 'Item 5', link: '#' },
        { title: 'Item 6', link: '#' },
        { title: 'Item 7', link: '#' },
        { title: 'Item 8', link: '#' },
        { title: 'Item 9', link: '#' },
        { title: 'Item 10', link: '#' },
        { title: 'Item 11', link: '#' },
        { title: 'Item 12', link: '#' },
        { title: 'Item 13', link: '#' },
      ]
    }
  },
};
</script>

<template>
  <div class="home">
    <div class="heroText">hey! it's me:</div>
    <div class="heroImg"><img src="../assets/img/martino.png" /></div>

    <customCard 
      v-bind:cardData="cardDataLocal"
    />
  </div>
</template>
