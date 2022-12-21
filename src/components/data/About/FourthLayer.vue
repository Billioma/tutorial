<template>
  <Wrapper>
    <span class="flex_container gap">
      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ x: [-250, 0], opacity: 1 }"
        :transition="{ duration: 1 }"
      >
        <div class="container">
          <h5>OUR VALUE</h5>
          <h1>Taking cooking to the next level</h1>
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dignissimos nulla excepturi, facere reprehenderit
            voluptatibus!</span
          >
        </div>
      </Motion>
      <Motion
        :initial="{ x: 0, opacity: 0 }"
        :animate="{ x: [250, 0], opacity: 1 }"
        :transition="{ duration: 1 }"
      >
        <div v-for="item in values" :key="item.id" class="flex flex_container">
          <span class="icon">
            <v-icon :name="item.icon" animation="pulse" fill="#ff0000" />
          </span>
          <div>
            <h4>{{ item.title }}</h4>
            <span class="text">{{ item.text }}</span>
          </div>
        </div>
      </Motion>
    </span>
  </Wrapper>
</template>

<script>
import Wrapper from "../../Layouts/Wrapper.vue";
import { Motion } from "motion/vue";
import { value } from "../../common/constants";

export default {
  components: {
    Wrapper,
    Motion,
  },
  data() {
    return {
      values: value,
    };
  },
};
</script>

<style scoped>
.container {
  width: 90%;
}
h5 {
  color: #ff0000;
}
h4 {
  margin-bottom: 0.5rem;
  margin-top: 0;
}
h1 {
  font-size: 50px;
}
.icon {
  background: #f3f3f3;
  border-radius: 50%;
  padding: 0.5rem;
}
.flex {
  gap: 1rem;
  background: #fff;
  margin-top: 1rem;
  padding: 2rem 2rem;
  border-radius: 5px;
}
.text {
  line-height: 1.4em;
}
.gap {
  gap: 2rem;
}
</style>
