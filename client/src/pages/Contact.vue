<template>
  <div class="contact-title-section">
    <h1 class="contact-title-section__title">
      Get in <span class="contact-title-section__subtitle">Touch</span>
    </h1>
  </div>
  <div class="contact-container">
    <div class="contact-container-information">
      <h2 class="contact-container-information__main-title">Contact me !</h2>
      <p class="contact-container-information__description">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities.
      </p>
      <p class="contact-container-information__contact">
        <i class="contact-container-information__icon">
          <font-awesome-icon icon="fa-solid fa-map" />
        </i>
        <span class="contact-container-information__title">Adress point</span>2
        rue des Granges 01500 Ambutrix, France
      </p>
      <p class="contact-container-information__contact">
        <i class="contact-container-information__icon">
          <font-awesome-icon icon="fa-solid fa-envelope-open" />
        </i>
        <span class="contact-container-information__title">Email adress</span>
        <a class="contact-container-information__link"
          href="mailto:arnaud.lyardarobasegmail.com">arnaud.lyardarobasegmail.com</a>
      </p>
      <p class="contact-container-information__contact">
        <i class="contact-container-information__icon-phone">
          <font-awesome-icon icon="fa-solid fa-phone-square" />
        </i>
        <span class="contact-container-information__title">Phone number</span>
        +33 06 87 28 27 18
      </p>
      <ul class="contact-container-information__social-network">
        <li class="contact-container-information__social-network-item">
          <a class="contact-container-information__social-network-link" href="https://www.linkedin.com/in/arnaud-lyard/"
            target="_blank"><i class="contact-container-information__social-network-icon">
              <font-awesome-icon icon="fa-brands fa-linkedin" /> </i></a>
        </li>
        <li class="contact-container-information__social-network-item">
          <a class="contact-container-information__social-network-link" href="https://github.com/Arnaud-Lyard"
            target="_blank"><i class="contact-container-information__social-network-icon">
              <font-awesome-icon icon="fa-brands fa-github" /> </i></a>
        </li>
      </ul>
    </div>
    <div class="contact-container-form">
      <form @submit.prevent="submitForm()" action="submit" class="contact-container-form__form">
        <div class="contact-container-form__form-content">
          <div class="contact-container-form__form-section">
            <input v-model.trim="name" @keyup="validateName()" @blue="validateName()"
              class="contact-container-form__form-input" type="text" name="name" placeholder="YOUR NAME" required />
            <div class="error">{{ errorName }}</div>
          </div>
          <div class="contact-container-form__form-section">
            <input v-model.trim="email" @keyup="validateEmail()" @blue="validateEmail()"
              class="contact-container-form__form-input" type="email" name="email" placeholder="YOUR EMAIL" required />
            <div class="error">{{ errorEmail }}</div>
          </div>
        </div>
        <div class="contact-container-form__form-content-subject">
          <input v-model.trim="subject" @keyup="validateSubject()" @blue="validateSubject()"
            class="contact-container-form__form-input" type="text" name="subject" placeholder="YOUR SUBJECT" required />
          <div class="error">{{ errorSubject }}</div>
        </div>
        <div class="contact-container-form__form-content-subject">
          <textarea v-model.trim="message" @keyup="validateMessage()" @blue="validateMessage()"
            class="contact-container-form__form-textarea" type="text" name="subject" placeholder="YOUR MESSAGE"
            required></textarea>
          <div class="error">{{ errorMessage }}</div>
        </div>
        <button type="submit" class="contact-container-form__button">
          <span class="contact-container-form__button-text">Send message</span>
          <span class="contact-container-form__button-icon"><font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
        </button>
      </form>
      <div v-if="mailSend" class="success">Thanks for your message !</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useContactAdminMutation } from "../graphql/generated/schema";

const name = ref<string>("");
const email = ref<string>("");
const subject = ref<string>("");
const message = ref<string>("");
const errorName = ref<string>("");
const errorEmail = ref<string>("");
const errorSubject = ref<string>("");
const errorMessage = ref<string>("");
const mailSend = ref<boolean>(false);


const validateEmail = () => {
  errorEmail.value = email.value === "" ? "The Input field is required" : "";
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  errorEmail.value = !re.test(email.value)
    ? `The input ${email.value} is not a valid  address`
    : "";
};

const validateName = () => {
  errorName.value = name.value === "" ? "The Input field is required" : "";
};
const validateMessage = () => {
  errorMessage.value =
    message.value === "" ? "The Input field is required" : "";
};

const validateSubject = () => {
  errorSubject.value =
    subject.value === "" ? "The Input field is required" : "";
};



const submitForm = async () => {
  if (
    !errorEmail.value &&
    !errorEmail.value &&
    !errorSubject.value &&
    !errorMessage.value
  ) {
    const { mutate: sendContact } = useContactAdminMutation({
      variables: {
        data: {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        },
      },
    });
    await sendContact();
  }
  mailSend.value = true
};

</script>
