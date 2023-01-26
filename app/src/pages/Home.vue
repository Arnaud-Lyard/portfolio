<template>
  <main>
    <Header />
    <div class="home-container">
      <div class="home-container__background"></div>
      <div class="home-container__presentation">
        <div class="home-container__details">
          <img
            src="../assets/images/Arnaud.jpg"
            alt="Arnaud LYARD"
            class="home-container__details-img"
          />
          <h1 class="home-container__details-title">
            I'm Arnaud LYARD.<br />
            <span class="home-container__details-subtitle"
              >full stack developper</span
            >
          </h1>
          <p class="home-container__details-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            error eos quas possimus adipisci quisquam rerum, voluptatem delectus
            ducimus unde quo atque minima magni repellat dolor magnam saepe
            impedit sint!
          </p>

          <button class="home-container__details-button">
            <span class="home-container__details-button-text"
              >More about me</span
            >
            <span class="home-container__details-button-icon"
              ><font-awesome-icon icon="fa-solid fa-arrow-right"
            /></span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<style scoped>
main {
  height: 100vh;
}

.home-container {
  display: flex;
  align-items: center;
  height: 100%;
}
@media (max-width: 991px) {
  .home-container {
    justify-content: center;
  }
}
@media (max-width: 650px) {
  .home-container {
    padding-bottom: 80px;
  }
}
.home-container__background {
  position: fixed;
  width: 33%;
  background-image: url("../assets/images/Arnaud.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: calc(100vh - 80px);
  z-index: 1;
  border-radius: 30px;
  left: 40px;
  top: 40px;
}
@media (max-width: 991px) {
  .home-container__background {
    display: none;
  }
}
.home-container__presentation {
  margin-left: 33%;
  width: 66%;
}
@media (max-width: 991px) {
  .home-container__presentation {
    margin-left: 0;
    width: 50%;
    text-align: center;
    min-width: 230px;
  }
}
.home-container__details {
  margin: 0 auto;
  max-width: 500px;
}
.home-container__details-description {
  text-align: justify;
  font-family: sans-serif;
  font-size: 15px;
  color: #666;
  line-height: 30px;
  margin: 10px 0 20px 0;
}
.home-container__details-img {
  display: none;
}
@media (max-width: 991px) {
  .home-container__details-img {
    display: block;
    margin: 0 auto 25px;
    border-radius: 50%;
    width: 230px;
    height: 230px;
  }
}
.home-container__details-title {
  font-size: 51px;
  line-height: 62px;
  font-weight: 700;
  margin: 0 0 10px;
  text-transform: uppercase;
  font-family: "Titillium Web Black", sans-serif;
  color: #2d82b5;
}
@media (max-width: 991px) {
  .home-container__details-title {
    font-size: 38px;
    line-height: 48px;
  }
}
.home-container__details-subtitle {
  color: #666;
  font-size: 40px;
}
@media (max-width: 991px) {
  .home-container__details-subtitle {
    font-size: 27px;
  }
}
.home-container__details-button {
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
.home-container__details-button:hover .home-container__details-button-text {
  color: #fff;
}
.home-container__details-button-text {
  position: relative;
  z-index: 2;
  color: #666;
  transition: all 0.3s ease-out;
}
.home-container__details-button-icon {
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
.home-container__details-button:before {
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
.home-container__details-button:hover::before {
  transform: translateX(0);
}
.home-container__details-button:hover .home-container__details-button-text {
  color: #fff;
}
</style>
