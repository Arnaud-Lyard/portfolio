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

<style scoped>
.login-title-section {
  display: flex;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
}

.login-title-section__title {
  color: #666;
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 450px) {
  .login-title-section__title {
    font-size: 35px;
  }
}
.login-title-section__subtitle {
  color: #2d82b5;
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 450px) {
  .login-title-section__subtitle {
    font-size: 35px;
  }
}

.login-container-form__form {
  padding-left: 15px;
  padding-right: 15px;
  max-width: 800px;
  margin: 0 auto;
}
.login-container-form__form-content {
  display: grid;
  grid-template-columns: 1fr;
}
@media (max-width: 650px) {
  .login-container-form__form-content {
    grid-template-columns: 1fr;
    padding-bottom: 0;
  }
}
.login-container-form__form-section {
  width: 100%;
  padding-bottom: 30px;
}
@media (max-width: 650px) {
  .login-container-form__form-section {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 30px;
  }
}
.login-container-form__form-input {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #666;
  width: 100%;
  padding: 11px 26px;
  border-radius: 30px;
  outline: none;
  transition: 0.3s;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  box-sizing: border-box;
}
.login-container-form__button {
  overflow: hidden;
  display: inline-block;
  line-height: 1.4;
  border-radius: 35px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  transition: all 0.25s ease-in-out;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  z-index: 1;
  padding: 16px 70px 16px 35px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 1px solid #2d82b5;
}
.login-container-form__button:hover .login-container-form__button-text {
  color: #fff;
}
.login-container-form__button::before {
  z-index: -1;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateX(100%);
  transition: all 0.3s ease-out;
  background-color: #2d82b5;
}
.login-container-form__button:hover::before {
  transform: translateX(0);
}
.login-container-form__button-text {
  position: relative;
  z-index: 2;
  color: #666;
  transition: all 0.3s ease-out;
}
.login-container-form__button-icon {
  position: absolute;
  right: -1px;
  top: -1px;
  bottom: 0;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  color: #fff;
  border-radius: 50%;
  background-color: #2d82b5;
}
.error {
  padding-left: 20px;
  color: red;
  font-size: 12px;
}
</style>
