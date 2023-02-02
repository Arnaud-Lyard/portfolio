import { createApp, provide, h } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router/router";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createPinia } from "pinia";

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
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  DefaultApolloClient,
  provideApolloClient,
} from "@vue/apollo-composable";
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
  faLinkedin,
  faRightToBracket
);
const pinia = createPinia();

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

provideApolloClient(apolloClient);

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .mount("#app");
