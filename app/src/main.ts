import { createApp, provide, h, onMounted } from "vue";
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
  faLock,
  faFileLines,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  DefaultApolloClient,
  provideApolloClient,
} from "@vue/apollo-composable";
import { useUserStore } from "./store/";

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
  faRightToBracket,
  faLock,
  faGithub,
  faFileLines,
  faUpRightFromSquare
);
const pinia = createPinia();

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
  credentials: "include",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  defaultOptions: {
    query: {
      errorPolicy: "ignore",
    },
    mutate: {
      errorPolicy: "ignore",
    },
  },
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

const userStore = useUserStore();
userStore.userProfile();
