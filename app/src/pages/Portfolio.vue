<template>
  <div class="portfolio__title-section">
    <h1 class="portfolio__title-section__title">
      My <span class="portfolio__title-section__subtitle">Portfolio</span>
    </h1>
  </div>
  <div class="portfolio-container-main">
    <div class="portfolio-container-gallery">
      <div class="portfolio-container-gallery__wrapper">
        <div class="portfolio-container-gallery__element">
          <img
            class="portfolio-container-gallery__image"
            :src="portfolio[0].image"
            alt=""
          />
          <div
            @click="showModal(0)"
            class="portfolio-container-gallery__image---hover"
          >
            <span class="portfolio-container-gallery__image-title">{{
              portfolio[0].project
            }}</span>
          </div>
        </div>
      </div>
      <div class="portfolio-container-gallery__wrapper">
        <div class="portfolio-container-gallery__element">
          <img
            class="portfolio-container-gallery__image"
            :src="portfolio[1].image"
            alt=""
          />
          <div
            @click="showModal(1)"
            class="portfolio-container-gallery__image---hover"
          >
            <span class="portfolio-container-gallery__image-title">{{
              portfolio[1].project
            }}</span>
          </div>
        </div>
      </div>
      <div class="portfolio-container-gallery__wrapper">
        <div class="portfolio-container-gallery__element">
          <img
            class="portfolio-container-gallery__image"
            :src="portfolio[1].image"
            alt=""
          />
          <div
            @click="showModal(1)"
            class="portfolio-container-gallery__image---hover"
          >
            <span class="portfolio-container-gallery__image-title">{{
              portfolio[1].project
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal v-show="isVisible" @close="closeModal()" :stateModal="stateModal">
    <template v-slot:header> {{ stateModal?.client }}</template>
  </Modal>
</template>
<script lang="ts" setup>
import Modal from "../components/Modal.vue";
import { reactive, ref } from "vue";
const portfolio = reactive<
  {
    id: number;
    project: string;
    client: string;
    langages: string;
    website: string;
    image: string;
  }[]
>([
  {
    id: 0,
    project: "Velosbuis",
    client: "Michel",
    langages: "Wordpress",
    website: "https://velosbuis.com",
    image: "./src/assets/images/velosbuis.jpg",
  },
  {
    id: 1,
    project: "Gite des Echudes",
    client: "Marie Pierre et Frédéric",
    langages: "Wordpress",
    website: "https://gitedesechudes.fr/",
    image: "./src/assets/images/gitedesechudes.jpg",
  },
]);
const isVisible = ref<boolean>(false);
const stateModal = ref<{
  id: number;
  project: string;
  client: string;
  langages: string;
  website: string;
  image: string;
}>();
const showModal = (number: number) => {
  isVisible.value = true;
  stateModal.value = portfolio[number];
};
const closeModal = () => {
  isVisible.value = false;
};
</script>
<style scoped>
.portfolio__title-section {
  display: flex;
  justify-content: center;
  padding: 80px 0;
}
.portfolio__title-section__title {
  color: #666;
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 450px) {
  .portfolio__title-section__title {
    font-size: 35px;
  }
}
.portfolio__title-section__subtitle {
  color: #2d82b5;
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 450px) {
  .portfolio__title-section__subtitle {
    font-size: 35px;
  }
}
.portfolio-container-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 70px;
}
@media (max-width: 1250px) {
  .portfolio-container-gallery {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
  }
}
@media (max-width: 850px) {
  .portfolio-container-gallery {
    grid-template-columns: repeat(1, 1fr);
  }
}
.portfolio-container-gallery__element {
  position: relative;
}
.portfolio-container-gallery__image {
  width: 300px;
  height: 200px;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 25px;
}
.portfolio-container-gallery__image---hover {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #2d82b5;
  width: 300px;
  height: 200px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 10px;
  opacity: 0;
}
@media (max-width: 1250px) {
  .portfolio-container-gallery__image {
    width: 375px;
    height: 250px;
  }
  .portfolio-container-gallery__image---hover {
    width: 375px;
    height: 250px;
  }
}
@media (max-width: 450px) {
  .portfolio-container-gallery__image {
    width: 300px;
    height: 200px;
  }
  .portfolio-container-gallery__image---hover {
    width: 300px;
    height: 200px;
  }
}
.portfolio-container-gallery__image---hover:hover {
  opacity: 1;
}

.portfolio-container-gallery__image-title {
  margin: 0;
  text-transform: uppercase;
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 0;
  top: 50%;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  opacity: 0;
  font-family: "Titillium Web Regular", sans-serif;
  font-weight: 600;
}

.portfolio-container-gallery__image---hover:hover
  .portfolio-container-gallery__image-title {
  transform: translateY(-50%);
  opacity: 1;
}
.portfolio-container-gallery__wrapper {
  display: flex;
  justify-content: center;
}
</style>
