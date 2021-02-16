<template>
  <div class="main">
    <h2>Quality video meetings for next generation remote startups.</h2>
    <br />
    <p>
      We have built on the issues from the pandemic to provide you with a unique
      quality video meetings platform. Free Now, Free Forever.
    </p>

    <div class="action">
      <button @click="createRoom">
        <base-spinner v-if="isLoading"></base-spinner>
        <span v-else>Create A Meeting </span>
      </button>

      <input
        type="text"
        placeholder="paste a room link"
        v-model.trim="roomId"
      />
      <span v-if="roomIsNotValid" @click="joinRoom" class="join">Join</span>
    </div>

    <room-link
      v-if="createdRoomIdIsAvailable"
      :createdRoomId="createdRoomId"
    ></room-link>
  </div>
</template>


<script>
import RoomLink from "../UI/RoomLink.vue";
import BaseSpinner from "../UI/BaseSpinner.vue";
import axios from "axios";

export default {
  components: { RoomLink, BaseSpinner },
  data() {
    return {
      roomId: "",
      isLoading: false,
      socket: {},
      createdRoomId: null,
    };
  },
  methods: {
    async createRoom() {
      this.isLoading = true
      const response = await axios.get("https://velocity-meet.herokuapp.com");
      const newRoomId = await response.data.roomId;
      this.createdRoomId = newRoomId;
      this.isLoading = false
    },
    joinRoom() {
      this.$router.push(`/rooms/${this.roomId}`);
    },
  },
  computed: {
    roomIsNotValid() {
      return this.roomId === "" ? false : true;
    },
    createdRoomIdIsAvailable() {
      return this.createdRoomId === null ? false : true;
    },
  },
};
</script>






<style scoped>
.main {
  width: 50%;
}

.main p {
  font-size: 20px;
  color: #5f6368;
}

h2 {
  font-size: 45px;
}

.action {
  margin: 30px 0;
}

.action button {
  padding: 15px;
  background-color: #1d1d1d;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.1s linear;
  margin-right: 20px;
}

.action button:hover {
  background-color: #2b2b2b;
}

.action input {
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  margin-right: 10px;
}

.action input:hover {
  border: 1px solid black;
}

.join {
  cursor: pointer;
  letter-spacing: 1.5px;
}

/* ================================================= tablets  */

@media (max-width: 768px) {
  .main {
    width: 100%;
  }

  .main p {
    font-size: 16px;
  }

  h2 {
    font-size: 30px;
  }

  .action {
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin: 30px auto;
    align-items: center;
  }

  .action button {
    margin-right: 0;
  }
}

@media (max-width: 767px) {
  .action {
    display: block;
    width: 100%;
  }

  .main p {
    line-height: 1.5;
  }

  .action button,
  .action input {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>