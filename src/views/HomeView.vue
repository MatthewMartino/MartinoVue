<script>
import customCard from "../components/customCard.vue";

export default {
  components: {
    customCard,
  },

  data() {
    return {
      cardDataLocal: [
        { title: "resume? résumé? resumé? 🤨", link: "https://mattmartino.me/download/resume.pdf", emoji: "📄"  },
        { title: "only 999.9K subs away from 1M 🥲", link: "https://www.youtube.com/@yupitsmartino", emoji: "📺" },
        { title: "check out my 3 tweets here lol 🤡", link: "https://twitter.com/yupitsmartino", emoji: "🐦" },
        { title: "open source or bust 🥴", link: "https://github.com/MatthewMartino", emoji: "💻"  },
        { title: "i hate meta but here's my insta rip 🥱", link: "https://www.instagram.com/yupitsmartino/", emoji: "📸" },
        { title: "have no attention span? tiktok it is! 🤠", link: "https://www.tiktok.com/@yupitsmartino", emoji: "🤳"  }
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
