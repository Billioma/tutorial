<template>
  <div class="container">
    <span class="img">
      <img src="../../assets/main.png" />
    </span>
    <nav class="stack">
      <router-link v-for="item in header" :key="item.id" :to="item.path">{{
        item.name
      }}</router-link>
    </nav>
    <span class="icons">
      <v-icon
        v-for="item in icon"
        :key="item.id"
        :name="item.icon"
        scale="1"
        color="#FF0000"
      />
    </span>
  </div>
</template>

<script>
import { headers, headerIcons } from "../common/constants";

export default {
  data() {
    return {
      header: headers,
      icon: headerIcons,
    };
  },
};
</script>

<style scoped>
.container {
  box-shadow: 0px 2px 10px gray;
  background: #fff;
  display: grid;
  grid-template-columns: 50px 400px 400px;
  position: fixed;
  align-items: center;
  padding: 1rem 8rem;
  justify-content: space-between;
  z-index: 5;
  height: 4vh;
  width: 100%;
}
.img {
  width: 40%;
}
img {
  width: 6rem;
}
.stack {
  display: flex;
  justify-content: space-between;
}
.icons {
  display: flex;
  gap: 1rem;
}
.list {
  display: inline-block;
}
</style>
