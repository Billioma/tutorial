import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  FaSearch,
  MdRestaurantmenuRound,
  MdGroups,
  RiDoubleQuotesL,
  BiBookmarkFill,
  BiArrowUpRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  PrArrowUpRight,
  FaYoutube,
} from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

addIcons(
  FaSearch,
  MdRestaurantmenuRound,
  RiDoubleQuotesL,
  MdGroups,
  FaYoutube,
  FaFacebookF,
  PrArrowUpRight,
  FaTwitter,
  FaInstagram,
  BiArrowUpRight,
  BiBookmarkFill
);

createApp(App)
  .use(store)
  .use(router)
  .component("v-icon", OhVueIcon)
  .mount("#app");
