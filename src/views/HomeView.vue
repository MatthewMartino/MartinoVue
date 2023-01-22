<script>
import customCard from "../components/customCard.vue";

export default {
  components: {
    customCard,
  },

  data() {
    return {
      cardDataLocal: [
        { title: 'Item 1', link: 'https://www.item1.com' },
        { title: 'Item 2', link: 'https://www.item2.com' },
        { title: 'Item 3', link: 'https://www.item3.com' },
        { title: 'Item 4', link: 'https://www.item1.com' },
        { title: 'Item 5', link: 'https://www.item2.com' },
        { title: 'Item 6', link: 'https://www.item3.com' },
        { title: 'Item 7', link: 'https://www.item1.com' },
        { title: 'Item 8', link: 'https://www.item2.com' },
        { title: 'Item 9', link: 'https://www.item3.com' },
        { title: 'Item 10', link: 'https://www.item1.com' },
        { title: 'Item 11', link: 'https://www.item2.com' },
        { title: 'Item 12', link: 'https://www.item3.com' },
        { title: 'Item 13', link: 'https://www.item3.com' },
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
