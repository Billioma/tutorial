<template>
  <layout>
    <!--Your application goes here -->
    <router-view />
  </layout>
</template>

<script>
import { Layout } from "./components/Layouts/index";

export default {
  components: {
    Layout,
  },
};
</script>

<style>
@font-face {
  font-family: "Cera Pro";
  src: url("../public/fonts/CeraPro/CeraPro-Regular.eot");
  src: local("Cera Pro Regular"), local("CeraPro-Regular"),
    url("../public/fonts/CeraPro/CeraPro-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/CeraPro/CeraPro-Regular.woff2") format("woff2"),
    url("../public/fonts/CeraPro/CeraPro-Regular.woff") format("woff"),
    url("../public/fonts/CeraPro/CeraPro-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Cera Pro";
  src: url("../public/fonts/CeraPro/CeraPro-Medium.eot");
  src: local("Cera Pro Medium"), local("CeraPr- Medium"),
    url("../public/fonts/CeraPro/CeraPro-Medium.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/CeraPro/CeraPro-Medium.woff2") format("woff2"),
    url("../public/fonts/CeraPro/CeraPro-Medium.woff") format("woff"),
    url("../public/fonts/CeraPro/CeraPro-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Cera Pro";
  src: url("../public/fonts/CeraPro/CeraPro-Bold.eot");
  src: local("Cera Pro Bold"), local("CeraPro-Bold"),
    url("../public/fonts/CeraPro/CeraPro-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/CeraPro/CeraPro-Bold.woff2") format("woff2"),
    url("../public/fonts/CeraPro/CeraPro-Bold.woff") format("woff"),
    url("../public/fonts/CeraPro/CeraPro-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
body {
  font-family: "Cera Pro";
  margin: 0;
  background: #f7f7f7;
  padding: 0;
}
.flex_column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.flex_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
