<template>
  <div class="room-container">
    <div class="video-grid">
      <div
        class="video-container"
        v-for="(stream, index) in roomMembersStream"
        :key="index"
      >
        <video muted :srcObject="stream" autoplay></video>
      </div>
    </div>

    <the-footer></the-footer>
  </div>
</template>

<script>
import io from "socket.io-client";
import Peer from "peerjs";
import TheFooter from "../layout/TheFooter.vue";

export default {
  components: { TheFooter },
  data() {
    return {
      socket: {},
      peer: null,
      roomMembersStream: [],
      userStream: null,
    };
  },

  methods: {
    connectToNewUser(userId, stream) {
      const call = this.peer.call(userId, stream);

      call.on("stream", (userVideoStream) => {
        this.roomMembersStream.push(userVideoStream);
      });
    },
    answerCall(stream) {
      this.peer.on("call", (call) => {
        call.answer(stream);
      });
    },
    toggleAudioMute(muteStatus) {
      this.audioIsNotMute = muteStatus;
      console.log(this.audioIsNotMute);
    },
    toggleVideoMute(muteStatus) {
      this.videoIsNotMute = muteStatus;
      console.log(this.videoIsNotMute);
    },
  },

  created() {
    this.socket = io("https://velocity-meet.herokuapp.com");
  },

  mounted() {
    this.peer = new Peer();

    this.peer.on("open", (id) => {
      this.socket.emit("join-room", this.$route.params.roomId, id);

      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          this.roomMembersStream.push(stream);
          this.userStream = stream;

          this.socket.on("user-connected", (userId) => {
            this.connectToNewUser(userId, stream);
          });
        });
    });

    this.answerCall(this.userStream);
  },
};
</script>


<style scoped>
.room-container {
  background-color: #181818;
  width: 100%;
  height: 100vh;
}

.video-grid {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: start;
  max-width: 1440px;
  margin: 0 auto;
}

.video-container {
  width: 300px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  border: 1px solid #181818;
}

video {
  height: 100%;
  width: 100%;
}

@media (max-width: 767px) {
  .video-container {
    width: 90%;
  }

  .video-grid {
    padding: 10px;
  }
}
</style>