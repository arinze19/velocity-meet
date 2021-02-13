<template>
  <footer>
    <div class="media-settings">
      <div class="audio" @click="toggleAudio">
        <div>
          <i class="bi bi-mic-mute-fill" v-if="audioIsOn"></i>
          <i class="bi bi-mic-fill" v-else></i>
        </div>
      </div>
      <div class="video" @click="toggleVideo">
        <div>
          <i class="bi bi-camera-video-off-fill" v-if="videoIsOn"></i>
          <i class="bi bi-camera-video-fill" v-else></i>
        </div>
      </div>
    </div>
    <button class="leave-room" @click="leaveRoom">✌️ <span>Leave Quietly</span></button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      audioIsOn: true,
      videoIsOn: true,
    };
  },
  methods: {
    toggleAudio() {
      this.audioIsOn = !this.audioIsOn;
    },
    toggleVideo() {
      this.videoIsOn = !this.videoIsOn;
    },
    leaveRoom() {
      this.$router.replace('/')
    }
  },
};
</script>


<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 20px;
  bottom: 0;
}

.media-settings {
  display: flex;
}

.audio,
.video {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  margin-right: 5px;
  margin-top: 5px;
  border: none;
  text-align: center;
  display: grid;
  cursor: pointer;
  place-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.leave-room {
  border-radius: 30px;
  padding: 12px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  background-color: white;
}

@media (max-width: 767px) {
  .media-settings {
    display: block;
  }

  .leave-room span {
    display: none;
  }

  .leave-room {
    border-radius: 50%;
  }
}
</style>