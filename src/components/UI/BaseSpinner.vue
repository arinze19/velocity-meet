<template>
  <div class="loading-container">
    <div class="one bar"></div>
    <div class="two bar"></div>
    <div class="three bar"></div>
  </div>
</template>



<style scoped>
.bar {
  height: 10px;
  width: 5px;
  display: inline-block;
  background-color: #ecf0f0;
  -webkit-animation: loader 1.3s linear infinite;
  -moz-animation: loader 1.3s linear infinite;
  animation: loader 1.3s linear infinite;
  -webkit-transform: scale(0.91);
  -moz-transform: scale(0.91);
  transform: scale(0.91);
}

.one {
  -webkit-animation-delay: 0.39s;
  -moz-animation-delay: 0.39s;
  animation-delay: 0.39s;
}

.two {
  -webkit-animation-delay: 0.52s;
  -moz-animation-delay: 0.52s;
  animation-delay: 0.52s;
}

.three {
  -webkit-animation-delay: 0.65s;
  -moz-animation-delay: 0.65s;
  animation-delay: 0.65s;
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: scale(1.2);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.7);
    opacity: 0.1;
  }
}

@-moz-keyframes loader {
  0% {
    -moz-transform: scale(1.2);
    opacity: 1;
  }
  100% {
    -moz-transform: scale(0.7);
    opacity: 0.1;
  }
}

@keyframes loader {
  0% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.7);
    opacity: 0.1;
  }
}
</style>