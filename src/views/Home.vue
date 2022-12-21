<template>
  <div>
    <FirstLayer />
    <AboutUs />
    <ThirdLayer />
    <Founder />
  </div>
</template>

<script>
import { FirstLayer, ThirdLayer } from "../components/data/Home/index";
import { Founder, AboutUs } from "../components/common/index";

export default {
  components: {
    FirstLayer,
    AboutUs,
    ThirdLayer,
    Founder,
  },
};
</script>

<style></style>
