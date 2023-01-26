import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router/router";
import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCode,
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
  faArrowRight,
  faPhoneSquare,
  faEnvelopeOpen,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(
  faCode,
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
  faArrowRight,
  faPhoneSquare,
  faEnvelopeOpen,
  faMap,
  faLinkedin
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");

// app.use(router);
