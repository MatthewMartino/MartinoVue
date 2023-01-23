<script>
export default {
  props: ['cardData'],
  data() {
    return {
        colorList: ['#ff533d', '#ff813d', '#ffe83d', '#3dff5d', '#3dd8ff', '#5a64f4', '#b454ff', '#ff3ddb'],
        colors: undefined,
        colorIndex: 0
    }
  },
  methods: {
    colorArrayGenerator() {
      let index = 0;
      let newColors = []

      this.cardData.forEach(card => {
        if(index > this.colorList.length - 1) {
          index = 0;
        }
        newColors.push(this.colorList[index]);
        index++;
      });
      
      return(newColors);
    }
  },
  created() {
    this.colors = this.colorArrayGenerator(this.colorList.length)
  },
  mounted() {

    const slider = document.querySelector(".cardShelf");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      cancelMomentumTracking();
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
      beginMomentumTracking();
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      var prevScrollLeft = slider.scrollLeft;
      slider.scrollLeft = scrollLeft - walk;
      velX = slider.scrollLeft - prevScrollLeft;
    });

    // Momentum
    var velX = 0;
    var momentumID;

    slider.addEventListener("wheel", () => {
      cancelMomentumTracking();
    });

    function beginMomentumTracking() {
      cancelMomentumTracking();
      momentumID = requestAnimationFrame(momentumLoop);
    }
    function cancelMomentumTracking() {
      cancelAnimationFrame(momentumID);
    }
    function momentumLoop() {
      slider.scrollLeft += velX;
      velX *= 0.95;
      if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
      }
    }
  }
};
</script>

<template>
  <div class="cardShelf">

    <div  class="card"
      v-for="(card, index) in cardData"
      :key="card.title"
      :style="{ backgroundColor: colors[index] }"
    >
      <div class="title">{{ card.title }}</div>
      <div class="cardEmoji">{{ card.emoji }}</div>
      <a 
      :href="card.link"
      class="link"
      :style="{ color: colors[index] }"
      >+</a>
    </div>

    <div class="card">
      <div class="title">end of the line! 🚨</div>
      <div class="title">&nbsp</div>
      <div class="title"><RouterLink to="/contact">lets talk! 🤙</RouterLink></div>
    </div>

  </div>
</template>
