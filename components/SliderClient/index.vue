<template>
  <div class="container-list">
    <ul class="menu" ref="menu">
      <div
        :class="`${amount === i ? 'active' : 'left-full'} item`"
        class="carousel-item transform transition-all duration-500 ease-in-out"
        v-for="(img, i) in imgUsers"
        :key="i"
      >
        <img :src="img" class="user-imgs" />
      </div>
    </ul>

    <ul v-for="user in users" :key="user.id">
      <li>{{ user }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "SliderClient",
  data: () => ({
    amount: 0,
    imgUsers: [],
  }),

  computed: { ...mapState(["users"]) },

  mounted() {
    this.fetchDataUser();
    let i = 0;
    setInterval(() => {
      if (i > this.imgUsers.length - 1) {
        i = 0;
      }
      this.amount = i;
      i++;
    }, 1000);
  },

  methods: {
    ...mapActions(["getUsers"]),
    async fetchDataUser() {
      const data = await this.$axios.get(
        "https://randomuser.me/api/?results=20"
      );
      const resDatas = data.data.results;
      resDatas.map((items) => {
        this.imgUsers.push(items.picture.large);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container-list {
  margin-bottom: 40px;
}

.menu-wrapper {
  position: relative;
  max-width: 90%;
  height: 100px;
  margin: 1em auto;
  border: 1px solid black;
  overflow-x: hidden;
  overflow-y: hidden;
}

.menu {
  height: 120px;
  border: 1px solid grey;
  box-sizing: border-box;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}

.item {
  display: inline-block;
  width: 100px;
  height: 100%;
  padding: 1em;
  box-sizing: border-box;
  margin-left: 100px;
}

.paddle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3em;
}
.left-paddle {
  left: 0;
}
.right-paddle {
  right: 0;
}
.hidden {
  display: none;
}

.print {
  margin: auto;
  max-width: 500px;
}

.left-full {
  left: -100%;
}

span {
  display: inline-block;
  width: 100px;
}

.user-imgs {
  width: 100%;
  height: 100%;
}
</style>
