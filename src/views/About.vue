<template>
  <div>
    <FirstLayer />
    <AboutUs />
    <Founder />
    <FourthLayer />
  </div>
</template>

<script>
import { FirstLayer, FourthLayer } from "../components/data/About/index";
import { Founder, AboutUs } from "../components/common/index";

export default {
  components: {
    FirstLayer,
    FourthLayer,
    AboutUs,
    Founder,
  },
};
</script>
