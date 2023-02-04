import { defineStore } from "pinia";
import {
  useProfileLazyQuery,
  useProfileQuery,
} from "../graphql/generated/schema";

interface State {
  email: string;
  id: number | null;
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      email: "",
      id: null,
    };
  },
  getters: {
    getUserEmail(state) {
      return state.email;
    },
  },
  actions: {
    async userProfile() {
      try {
        const { result, onResult } = useProfileQuery();
        onResult(() => {
          if (result.value) {
            this.email = result.value.profile.email;
            this.id = result.value.profile.id;
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
