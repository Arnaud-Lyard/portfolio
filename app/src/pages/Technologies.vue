<template>
  <div class="technologies-title-section">
    <h1 class="technologies-title-section__title">
      My favorite
      <span class="technologies-title-section__subtitle"> Technologies</span>
    </h1>
  </div>
  <div class="technologies-container-main">
    <div class="technologies-container-gallery">
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image---javascript"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image---typescript"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image---node-js"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image---nest-js"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image---vue-js"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image---react-js"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image---graphql"></div>
        </div>
      </div>
      <div class="technologies-container-gallery__wrapper">
        <div class="technologies-container-gallery__element">
          <div class="technologies-container-gallery__image---docker"></div>
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
.technologies-container-gallery__image---javascript {
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 15px;
  background: url("../assets/images/javascript.png") no-repeat;
  background-size: contain;
  transition: 0.3s;
}
.technologies-container-gallery__image---javascript:hover {
  background: url("../assets/images/javascript-bw.png") no-repeat;
  background-size: contain;
}
.technologies-container-gallery__image---typescript {
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 15px;
  background: url("../assets/images/typescript.png") no-repeat;
  background-size: contain;
  transition: 0.3s;
}
.technologies-container-gallery__image---typescript:hover {
  background: url("../assets/images/typescript-bw.png") no-repeat;
  background-size: contain;
}
.technologies-container-gallery__image---node-js {
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 15px;
  background: url("../assets/images/node-js.png") no-repeat;
  background-size: contain;
  transition: 0.3s;
}
.technologies-container-gallery__image---node-js:hover {
  background: url("../assets/images/node-js-bw.png") no-repeat;
  background-size: contain;
}
.technologies-container-gallery__image---nest-js {
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 15px;
  background: url("../assets/images/nest-js.png") no-repeat;
  background-size: contain;
  transition: 0.3s;
}
.technologies-container-gallery__image---nest-js:hover {
  background: url("../assets/images/nest-js-bw.png") no-repeat;
  background-size: contain;
}

.technologies-container-gallery__image---vue-js {
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 15px;
  background: url("../assets/images/vue-js.png") no-repeat;
  background-size: contain;
  transition: 0.3s;
}
.technologies-container-gallery__image---vue-js:hover {
  background: url("../assets/images/vue-js-bw.png") no-repeat;
  background-size: contain;
}
.technologies-container-gallery__image---graphql {
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 15px;
  background: url("../assets/images/graphql.png") no-repeat;
  background-size: contain;
  transition: 0.3s;
}
.technologies-container-gallery__image---graphql:hover {
  background: url("../assets/images/graphql-bw.png") no-repeat;
  background-size: contain;
}
.technologies-container-gallery__image---react-js {
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 15px;
  background: url("../assets/images/react-js.png") no-repeat;
  background-size: contain;
  transition: 0.3s;
}
.technologies-container-gallery__image---react-js:hover {
  background: url("../assets/images/react-js-bw.png") no-repeat;
  background-size: contain;
}
.technologies-container-gallery__image---docker {
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 15px;
  background: url("../assets/images/docker.png") no-repeat;
  background-size: contain;
  transition: 0.3s;
}
.technologies-container-gallery__image---docker:hover {
  background: url("../assets/images/docker-bw.png") no-repeat;
  background-size: contain;
}
@media (max-width: 1250px) {
  .technologies-container-gallery__image---javascript,
  .technologies-container-gallery__image---typescript,
  .technologies-container-gallery__image---node-js,
  .technologies-container-gallery__image---nest-js,
  .technologies-container-gallery__image---graphql,
  .technologies-container-gallery__image---react-js,
  .technologies-container-gallery__image---docker {
    width: 175px;
    height: 175px;
  }
}
@media (max-width: 850px) {
  .technologies-container-gallery__image---javascript,
  .technologies-container-gallery__image---typescript,
  .technologies-container-gallery__image---node-js,
  .technologies-container-gallery__image---nest-js,
  .technologies-container-gallery__image---graphql,
  .technologies-container-gallery__image---react-js,
  .technologies-container-gallery__image---docker {
    width: 150px;
    height: 150px;
  }
}
@media (max-width: 450px) {
  .technologies-container-gallery__image---javascript,
  .technologies-container-gallery__image---typescript,
  .technologies-container-gallery__image---node-js,
  .technologies-container-gallery__image---nest-js,
  .technologies-container-gallery__image---graphql,
  .technologies-container-gallery__image---react-js,
  .technologies-container-gallery__image---docker {
    width: 100px;
    height: 100px;
  }
}
.technologies-container-gallery__wrapper {
  display: flex;
  justify-content: center;
}
</style>
