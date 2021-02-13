<template>
  <the-header></the-header>
  <div class="content">
    <div class="home-container">
      <hero-component></hero-component>
      <div class="illustration">
        <img
          src="../../assets/vector-creator.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader     from "../layout/TheHeader.vue";
import HeroComponent from "../UI/HeroComponent.vue";

export default {
  components: { TheHeader, HeroComponent },
  data() {
    return {
      socket: {},
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  display: flex;
  justify-content: space-around;
  padding: 40px;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
}

.illustration {
  width: 550px;
  height: 450px;
  overflow: hidden;
}

.illustration img {
  width: 100%;
  height: 100%;
}

/* ========================================= tabs ======================== */
@media (max-width: 768px) {
  .home-container {
    flex-wrap: wrap;
    text-align: center;
  }
}

/* ========================================= smart phones ======================== */
@media (max-width: 767px) {
  .illustration {
    width: 320px;
    height: 300px;
    margin: 10px auto;
  }
}

/* ========================================= 4k screens ======================== */

@media (min-width: 2560px) {
  .content {
    display: grid;
    place-content: center;
    height: 100vh;
  }
}
</style>
