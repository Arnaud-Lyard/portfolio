<template>
  <div class="login-title-section">
    <h1 class="login-title-section__title">
      Login <span class="login-title-section__subtitle">Admin</span>
    </h1>
  </div>
  <div class="login-container-form">
    <form @submit.prevent="submitForm()" class="login-container-form__form">
      <div class="login-container-form__form-content">
        <div class="login-container-form__form-section">
          <input
            v-model.trim="email"
            @keyup="validateEmail()"
            @blue="validateEmail()"
            class="login-container-form__form-input"
            type="text"
            name="email"
            placeholder="YOUR EMAIL"
            required
          />
          <div class="error">{{ errorEmail }}</div>
        </div>
        <div class="login-container-form__form-section">
          <input
            v-model.trim="password"
            @keyup="validatePassword()"
            @blue="validatePassword()"
            class="login-container-form__form-input"
            type="password"
            name="password"
            placeholder="YOUR PASSWORD"
            required
          />
          <div class="error">{{ errorPassword }}</div>
        </div>
      </div>
      <button type="submit" class="login-container-form__button">
        <span class="login-container-form__button-text">Connect</span>
        <span class="login-container-form__button-icon"
          ><font-awesome-icon icon="fa-solid fa-arrow-right"
        /></span>
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useLoginMutation } from "../graphql/generated/schema";
import { useRouter } from "vue-router";
import { useUserStore } from "../store";
const userStore = useUserStore();
const router = useRouter();

const password = ref<string>("");
const email = ref<string>("");
const errorPassword = ref<string>("");
const errorEmail = ref<string>("");

const validateEmail = () => {
  errorEmail.value = email.value === "" ? "The Input field is required" : "";
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  errorEmail.value = !re.test(email.value)
    ? `The input ${email.value} is not a valid  address`
    : "";
};

const validatePassword = () => {
  errorPassword.value =
    password.value === "" ? "The Input field is required" : "";
};

const submitForm = async () => {
  if (!errorEmail.value && !errorPassword.value) {
    const { mutate: sendLogin } = useLoginMutation({
      variables: {
        data: {
          email: email.value,
          password: password.value,
        },
      },
    });
    await sendLogin();
    await userStore.userProfile();
    await router.push("/");
  }
};
</script>
