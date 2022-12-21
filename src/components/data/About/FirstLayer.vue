<template>
  <div class="overflow">
    <div class="header">
      <Motion
        :initial="{ opacity: 0 }"
        :inView="{ y: [-50, 0], opacity: 1 }"
        :transition="{ duration: 1 }"
      >
        <div class="flex flex_column">
          <h1>About Us</h1>
          <h3>Beyond the boundaries of taste.</h3>
        </div>
      </Motion>
    </div>
  </div>
</template>

<script>
import { Motion } from "motion/vue";

export default {
  components: {
    Motion,
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(rgba(0, 0, 0, 0), #525252),
    url("@/assets/dough1.jpg");
  background-size: cover;
  height: 30vh;
  background-repeat: no-repeat;
  padding-top: 8rem;
}
.flex {
  background: #fff;
  padding: 0 8rem 2rem 2rem;
  border-radius: 10px;
  margin: 5rem 8rem 0 0;
  box-shadow: 5px 0px 5px 3px orange;
  align-items: flex-start;
  float: right;
  width: fit-content;
}
h1 {
  font-size: 55px;
  margin-bottom: 0;
}
</style>
