<template>
  <p>Here is your <strong>room link</strong>:</p>
  <br />
  <div class="room-link-container">
    <i
      class="bi bi-clipboard"
      @click="copyClip(createdRoomId)"
      v-if="clipboardIsEmpty"
    ></i>
    <i class="bi bi-check2" v-else></i>
    <p>{{ createdRoomId }}</p>
  </div>
</template>

<script>
export default {
  props: ["createdRoomId"],
  data() {
    return {
      clipboardIsEmpty: true,
    };
  },
  methods: {
    async copyClip(text) {
      if (!navigator.clipboard) {
        // clipboard Api is not supported
      }

      await navigator.clipboard.writeText(text);
      this.clipboardIsEmpty = false;
      setTimeout(() => {
        this.clipboardIsEmpty = true;
      }, 4000);
    },
  },
};
</script>



<style scoped>
.room-link-container {
  width: 80%;
  overflow-x: scroll;
  padding: 20px;
  overflow-y: hidden;
  white-space: nowrap;
  border: 1px solid #cccccc;
  display: flex;
}

.bi {
  margin-right: 1em;
  font-size: 20px;
  cursor: pointer;
}

.bi-clipboard:hover {
  color: #1983f5;
}

.bi-check2 {
  color: #00a900;
}

@media (max-width: 768px) {
  .room-link-container {
    width: 100%;
    margin: 0 auto;
  }
}
</style>