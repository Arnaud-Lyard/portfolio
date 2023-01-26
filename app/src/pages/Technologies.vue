<template>
  <div class="technologies-title-section">
    <h1 class="technologies-title-section__title">
      Favorite Programming
      <span class="technologies-title-section__subtitle"> languages</span>
    </h1>
  </div>
  <div class="technologies-container-main">
    <div class="technologies-container-gallery">
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
<style scoped>
.technologies-title-section {
  display: flex;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
}
.technologies-title-section__title {
  color: #666;
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 650px) {
  .technologies-title-section__title {
    font-size: 35px;
  }
}
.technologies-title-section__subtitle {
  color: #2d82b5;
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 650px) {
  .technologies-title-section__subtitle {
    font-size: 35px;
  }
}
.technologies-container-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 70px;
}
@media (max-width: 1350px) {
  .technologies-container-gallery {
    max-width: 1000px;
  }
}
@media (max-width: 1250px) {
  .technologies-container-gallery {
    grid-template-columns: repeat(3, 1fr);
    max-width: 800px;
  }
}
@media (max-width: 650px) {
  .technologies-container-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
.technologies-container-gallery__element {
  margin-bottom: 30px;
}
.technologies-container-gallery__image {
  width: 200px;
  height: 200px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 25px;
  background: url("../assets/images/javascript.png") no-repeat;
  background-size: contain;
  transition: 0.3s;
}
.technologies-container-gallery__image:hover {
  background: url("../assets/images/javascript-bw.png") no-repeat;
  background-size: contain;
}

@media (max-width: 1250px) {
  .technologies-container-gallery__image {
    width: 175px;
    height: 175px;
  }
}
@media (max-width: 850px) {
  .technologies-container-gallery__image {
    width: 150px;
    height: 150px;
  }
}
@media (max-width: 450px) {
  .technologies-container-gallery__image {
    width: 100px;
    height: 100px;
  }
}
.technologies-container-gallery__wrapper {
  display: flex;
  justify-content: center;
}
</style>
