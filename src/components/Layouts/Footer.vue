<template>
  <div class="container">
    <div class="grid">
      <span class="grid-item">
        <img class="logo" src="@/assets/main.png" />
        <span class="text1"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam
          distinctio facere dignissimos eius nam itaque quae, commodi
        </span>
      </span>
      <span class="grid-item" v-for="item in todos" :key="item.id">
        <h3 class="title">{{ item.title }}</h3>
        <span class="list" v-for="item in item.list" :key="item.id">
          <v-icon name="pr-arrow-up-right" scale="1" fill="orange" />
          <span>{{ item.desc }} </span>
        </span>
      </span>
      <span class="grid-item">
        <h3 class="title">Get in connect</h3>
        <span>Follow us</span>
        <span class="stack">
          <div v-for="item in icons" :key="item.id">
            <v-icon :name="item.icon" />
          </div>
        </span>
        <button>Contact Us</button>
      </span>
    </div>
  </div>
</template>

<script>
import { footer, footerIcons } from "../common/constants";

export default {
  data() {
    return {
      todos: footer,
      icons: footerIcons,
    };
  },
};
</script>

<style scoped>
.container {
  background: #fff;
  margin: 4rem 0 0;
  padding: 2rem;
}
.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
}
.logo {
  width: 6rem;
  height: 2rem;
}
.title {
  font-size: 20px;
  margin-bottom: 1rem;
}
.list {
  display: flex;
  gap: 1rem;
  align-content: center;
}
.grid-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5;
}
.text1 {
  margin: 1rem 0;
  text-align: start;
}
.stack {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}
button {
  background: red;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
}
</style>
