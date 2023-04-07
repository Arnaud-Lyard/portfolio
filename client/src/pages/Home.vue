<template>
  <main class="home-container__main">
    <Header />
    <div class="home-container">
      <div class="home-container__background"></div>
      <div class="home-container__presentation">
        <div class="home-container__details">
          <img src="/images/Arnaud-mobile.jpg" alt="Arnaud LYARD" class="home-container__details-img" />
          <h1 class="home-container__details-title">
            I'm Arnaud LYARD.<br />
            <span class="home-container__details-subtitle">full stack developper</span>
          </h1>
          <p class="home-container__details-description">
            I'm a french based full stack developper, I'm passionate about web
            development and I'm always looking for new challenges.
          </p>
          <router-link to="/about">
            <button class="home-container__details-button">
              <span class="home-container__details-button-text">More about me</span>
              <span class="home-container__details-button-icon"><font-awesome-icon
                  icon="fa-solid fa-arrow-right" /></span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<style scoped></style>
