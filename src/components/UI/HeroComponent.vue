<template>
  <div class="main">
    <h2>Quality video meetings for next generation remote startups.</h2>
    <br />
    <p>
      We have built on the issues from the pandemic to provide you with a unique
      quality video meetings platform. Free Now, Free Forever.
    </p>

    <div class="action">
      <button @click="createRoom"> Create A Meeting</button>
      <input
        type="text"
        placeholder="paste a room link"
        v-model.trim="roomId"
      />
      <span v-if="roomIsNotValid" @click="joinRoom">Join</span>
    </div>

    <room-link
      v-if="createdRoomIdIsAvailable"
      :createdRoomId="createdRoomId"
    ></room-link>
  </div>
</template>


<script>
import RoomLink from "../UI/RoomLink.vue";
import axios    from "axios";


export default {
  components: { RoomLink },
  data() {
    return {
      roomId: "",
      loading: false,
      socket: {},
      createdRoomId: null,
    };
  },
  methods: {
    async createRoom() {
      const response = await axios.get("http://localhost:3000");
      const newRoomId = await response.data.roomId;
      this.createdRoomId = newRoomId;
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

.action span {
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