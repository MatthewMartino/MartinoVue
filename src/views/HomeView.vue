<script allowjs="true">
import customCard from "../components/customCard.vue";

export default {
  components: {
    customCard,
  },

  data() {
    return {
      cardDataLocal: [
        // { title: "resume? résumé? resumé? 🤨", link: "https://mattmartino.me/download/resume.pdf", emoji: "📄"  },
        { title: "business stuff? got questions? email me!", link: "https://martino.store/contact", emoji: "🤙"  },
        { title: "only 999.9K subs away from 1M 🥲", link: "https://www.youtube.com/@yupitsmartino", emoji: "📺" },
        { title: "check out my 3 tweets here lol ", link: "https://twitter.com/yupitsmartino", emoji: "🐦" },
        { title: "open source or bust... like this website!", link: "https://github.com/MatthewMartino/MartinoVue", emoji: "💻"  },
        { title: "i hate meta but here's my insta, rip 🪦", link: "https://www.instagram.com/yupitsmartino/", emoji: "📸" },
        { title: "have no attention span? tiktok it is! ", link: "https://www.tiktok.com/@yupitsmartino", emoji: "🤳"  }
      ]
    }
  },
};
</script>

<template>
  <div class="heroText">hey! it's me:</div>
  <div class="heroImg"><img src="../assets/img/martino.png" /></div>

  <!-- <div class="cardHintD">(scroll / click n' drag the cards!)</div> -->
  <!-- <div class="cardHintM">(swipe through the cards!)</div> -->
  <customCard 
    v-bind:cardData="cardDataLocal"
  />
</template>
