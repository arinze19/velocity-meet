<template>
  <div class="header">
    <div class="logo">
      <img src="../../assets/meet-velocity.svg" />
    </div>

    <div class="nav">
        <p class="date">{{ date }}</p>
    </div>
  </div>
</template>


<script>
import moment from "moment";

export default {
  data() {
    return {
      date: moment().format('dddd, MMM Do')
    };
  }
};
</script>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center
}

.nav p {
    font-size: 21px;
    color: #5f6368;
}

h1 {
    color: #5f6368
}

.logo img {
  width: 40px;
  height: 40px;
}


@media(max-width: 768px) {
  .nav p {
    font-size: 16px;
  }
}

@media(max-width: 767px) {
  .header {
    padding: 10px;
  }
}
</style>