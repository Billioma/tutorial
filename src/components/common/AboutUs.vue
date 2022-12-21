<template>
  <Wrapper>
    <span class="flex_container gap">
      <Motion
        :initial="{ opacity: 0 }"
        :inView="{ x: [-250, 0], opacity: 1 }"
        :transition="{ duration: 1 }"
      >
        <div class="container">
          <span class="quote flex_column">
            <v-icon name="ri-double-quotes-l" color="orange" scale="2" />
            <span class="lunch">
              "Ask not what you can do for your country. Ask what's for lunch."
              <br />
              ~ Orson Welles
            </span>
          </span>
          <img src="@/assets/chef.jpg" />
        </div>
      </Motion>
      <Motion
        :initial="{ x: 0, opacity: 0 }"
        :inView="{ x: [250, 0], opacity: 1 }"
        :transition="{ duration: 1 }"
      >
        <div class="us">
          <h4>WHO WE ARE</h4>
          <h2>One thousand flavors in one place.</h2>
          <span class="inspo">
            Are you running low on inspiration or losing your cooking mojo in
            the kitchen?
            <br />
            <br />
            There are plenty of personal secrets to cooking that you can store
            up your sleeves. Do not let the fear of failure in cooking hold you
            back from showing your culinary skills and producing some good food
            for everyone. Cooking done with care is an act of joy and cooking
            done with love is always appreciated. Here are some popular cooking
            quotes you can count on!
          </span>
        </div>
      </Motion>
    </span>
  </Wrapper>
</template>

<script>
import Wrapper from "../Layouts/Wrapper.vue";
import { Motion } from "motion/vue";

export default {
  components: {
    Wrapper,
    Motion,
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
.gap {
  gap: 5rem;
}
.quote {
  text-align: center;
  width: 45%;
  background: #fff;
  padding: 1rem;
  position: absolute;
}
.lunch {
  font-size: 13px;
  line-height: 1.2em;
}
img {
  width: 37rem;
  border-radius: 5px;
}
.us {
  width: 85%;
  font-size: 15px;
}
.inspo {
  margin: 2rem 0;
  line-height: 1.5em;
}
h4 {
  color: red;
  font-size: 13px;
}
h2 {
  font-size: 35px;
  width: 65%;
}
</style>
