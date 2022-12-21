<template>
  <Wrapper>
    <div>
      <Motion
        :initial="{ opacity: 0 }"
        :inView="{ y: [-50, 0], opacity: 1 }"
        :transition="{ duration: 1 }"
      >
        <div class="flex_column">
          <h5>TESTIMONIAL</h5>
          <h1>What they say</h1>
          <span>We have interesting reviews from our users!</span>
        </div>
      </Motion>
      <Motion
        :initial="{ opacity: 0 }"
        :inView="{ y: [50, 0], opacity: 1 }"
        :transition="{ duration: 1 }"
      >
        <div class="grid">
          <div
            class="grid-item flex_column"
            v-for="item in review"
            :key="item.id"
          >
            <img :src="item.img" />
            <span>{{ item.desc }} </span>
            <h4>{{ item.author }}</h4>
          </div>
        </div>
      </Motion>
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from "../../Layouts/Wrapper.vue";
import { reviews } from "../../common/constants";
import { Motion } from "motion/vue";

export default {
  components: {
    Wrapper,
    Motion,
  },
  data() {
    return {
      review: reviews,
    };
  },
};
</script>

<style scoped>
h5 {
  color: red;
  margin-bottom: 0;
}
.grid {
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
}
.grid-item {
  box-shadow: 0px 1px 3px gray;
  background: #fff;
  line-height: 1.5em;
  border-radius: 5px;
  font-size: 15px;
  padding: 1rem;
}
img {
  width: 2.5rem;
  margin-bottom: 1rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 2px solid red;
}
</style>
