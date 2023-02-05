<template>
  <div class="contact-title-section">
    <h1 class="contact-title-section__title">
      Get in <span class="contact-title-section__subtitle">Touch</span>
    </h1>
  </div>
  <div class="contact-container">
    <div class="contact-container-information">
      <h2 class="contact-container-information__title">Contact me !</h2>
      <p class="contact-container-information__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut
        illo obcaecati earum. Impedit repellendus reiciendis excepturi amet
        tempore totam, ut, facere doloribus earum illum quo sapiente
        voluptatibus accusantium temporibus?
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
        <a
          class="contact-container-information__link"
          href="mailto:contactArobaseprochainweb.com"
          >arnaud.lyardArobasegmail.com</a
        >
      </p>
      <p class="contact-container-information__contact">
        <i class="contact-container-information__icon-phone">
          <font-awesome-icon icon="fa-solid fa-phone-square" />
        </i>
        <span class="contact-container-information__title">Phone number</span>
        +3306 87 28 27 18
      </p>
      <ul class="contact-container-information__social-network">
        <li class="contact-container-information__social-network-item">
          <a
            class="contact-container-information__social-network-link"
            href="https://www.linkedin.com/in/arnaud-lyard/"
            target="_blank"
            ><i class="contact-container-information__social-network-icon">
              <font-awesome-icon icon="fa-brands fa-linkedin" /> </i
          ></a>
        </li>
      </ul>
    </div>
    <div class="contact-container-form">
      <form action="" class="contact-container-form__form">
        <div class="contact-container-form__form-content">
          <div class="contact-container-form__form-section">
            <input
              class="contact-container-form__form-input"
              type="text"
              name="name"
              placeholder="YOUR NAME"
              required
            />
          </div>
          <div class="contact-container-form__form-section">
            <input
              class="contact-container-form__form-input"
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              required
            />
          </div>
        </div>
        <div class="contact-container-form__form-content-subject">
          <input
            class="contact-container-form__form-input"
            type="text"
            name="subject"
            placeholder="YOUR SUBJECT"
            required
          />
        </div>
        <div class="contact-container-form__form-content-subject">
          <textarea
            class="contact-container-form__form-textarea"
            type="text"
            name="subject"
            placeholder="YOUR MESSAGE"
            required
          ></textarea>
        </div>
        <button class="contact-container-form__button">
          <span class="contact-container-form__button-text">Send message</span>
          <span class="contact-container-form__button-icon"
            ><font-awesome-icon icon="fa-solid fa-arrow-right"
          /></span>
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.contact-title-section {
  display: flex;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
}

.contact-title-section__title {
  color: #666;
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 450px) {
  .contact-title-section__title {
    font-size: 35px;
  }
}
.contact-title-section__subtitle {
  color: #2d82b5;
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 450px) {
  .contact-title-section__subtitle {
    font-size: 35px;
  }
}
.contact-container {
  display: grid;
  grid-template-columns: 33% 67%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}
@media (max-width: 1380px) {
  .contact-container {
    max-width: 950px;
  }
}
@media (max-width: 1130px) {
  .contact-container {
    max-width: 800px;
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .contact-container {
    max-width: 700px;
  }
}
@media (max-width: 650px) {
  .contact-container {
    max-width: 600px;
  }
}
.contact-container-information {
  padding: 15px 15px 30px 15px;
}
.contact-container-information__title {
  font-size: 26px;
  text-transform: uppercase;
  font-family: "Titillium Web Bold", sans-serif;
  color: #666;
  padding-bottom: 15px;
}
.contact-container-information__description {
  font-family: "sans-serif";
  color: #666;
  margin-bottom: 30px;
  text-align: justify;
}
.contact-container-information__contact {
  position: relative;
  font-weight: 600;
  padding-left: 50px;
  line-height: 25px;
  padding-top: 5px;
  margin-bottom: 20px;
  color: #666;
  font-size: 15px;
}
.contact-container-information__icon {
  position: absolute;
  color: #2d82b5;
  left: 0;
  top: 10px;
  font-size: 33px;
}
.contact-container-information__icon-phone {
  position: absolute;
  color: #2d82b5;
  left: 0;
  top: 7px;
  font-size: 39px;
}
.contact-container-information__title {
  display: block;
  text-transform: uppercase;
  opacity: 0.8;
  font-weight: 400;
  padding-bottom: 0;
  line-height: 25px;
  font-family: "sans-serif";
  font-size: 15px;
}
.contact-container-information__link {
  color: #666;
  font-size: 15px;
  text-decoration: none;
}

.contact-container-information__social-network {
  padding-top: 15px;
}
.contact-container-information__social-network-item {
  display: inline-block;
}
.contact-container-information__social-network-link {
  text-decoration: none;
  color: #666;
  display: inline-block;
  height: 40px;
  width: 40px;
  line-height: 42px;
  text-align: center;
  transition: 0.3s;
  font-size: 17px;
  margin: 0 6px;
  border-radius: 50%;
  background: #eee;
}
.contact-container-information__social-network-link:hover {
  background: #2d82b5;
  color: #fff;
}
.contact-container-information__social-network-icon {
  font-size: 20px;
}
.contact-container-form__form {
  padding-left: 15px;
  padding-right: 15px;
}
.contact-container-form__form-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 30px;
}
@media (max-width: 650px) {
  .contact-container-form__form-content {
    grid-template-columns: 1fr;
    padding-bottom: 0;
  }
}
.contact-container-form__form-section {
  width: 100%;
}
@media (max-width: 650px) {
  .contact-container-form__form-section {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 30px;
  }
}
.contact-container-form__form-input {
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
.contact-container-form__form-content-subject {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.contact-container-form__form-textarea {
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
  height: 200px;
}
.contact-container-form__button {
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
.contact-container-form__button:hover .contact-container-form__button-text {
  color: #fff;
}
.contact-container-form__button::before {
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
.contact-container-form__button:hover::before {
  transform: translateX(0);
}
.contact-container-form__button-text {
  position: relative;
  z-index: 2;
  color: #666;
  transition: all 0.3s ease-out;
}
.contact-container-form__button-icon {
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
</style>
