<template>
  <div class="header">
    <Motion
      :initial="{ opacity: 0 }"
      :animate="{ x: [-250, 0], opacity: 1 }"
      :transition="{ duration: 1 }"
    >
      <div class="container">
        <h4>MESSAGE FROM FOUNDER</h4>
        <h1>First, we weat. Then, we do everything else.</h1>
        <div class="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque iure
          consequatur nobis nostrum! Totam ratione eveniet fuga dolores laborum
          adipisci?
        </div>
        <br />
        <div class="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque iure
          consequatur nobis nostrum! Totam ratione eveniet fuga dolores laborum
          adipisci?
        </div>
        <img src="@/assets/sign.png" />
      </div>
    </Motion>
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
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("@/assets/food.jpg");
  background-size: cover;
  height: 70vh;
  background-repeat: no-repeat;
  padding: 0 0 0 5rem;
  color: #fff;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 11rem;
  -webkit-animation: zoomin 50s ease-in infinite;
  animation: zoomin 50s ease-in infinite;
  transition: all 0.5s ease-in-out;
}
.container {
  width: 35%;
}
h4 {
  font-size: 13px;
}
img {
  width: 15rem;
  margin: 1rem 0;
}
.text {
  font-size: 14px;
  line-height: 1.5em;
}
</style>
