<script>
import customCard from "../components/customCard.vue";

export default {
  components: {
    customCard,
  },

  data() {
    return {
      cardDataLocal: [
        { title: 'check out our youtube channel!', link: 'https://www.youtube.com/@yupitsmartino', emoji: '📺 👀 🎉' },
        { title: 'we tweet sometimes ig', link: 'https://twitter.com/yupitsmartino', emoji: '🦆 🦤 🐓' },
        { title: 'check out ultra-wide dog pics here', link: 'https://www.instagram.com/yupitsmartino/', emoji: '📷 🤳 📸' },
        { title: 'Item 4', link: '#' },
        { title: 'Item 5', link: '#' },
        { title: 'Item 6', link: '#' },
        { title: 'Item 7', link: '#' },
        { title: 'Item 8', link: '#' },
        { title: 'Item 9', link: '#' },
        { title: 'Item 10', link: '#' },
        { title: 'Item 11', link: '#' },
        { title: 'Item 12', link: '#' },
        { title: 'Item 13', link: '#' }
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
