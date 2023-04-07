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
          <img class="portfolio-container-gallery__image" :src="portfolio[0].image" alt="" />
          <div @click="showModal(0)" class="portfolio-container-gallery__image---hover">
            <span class="portfolio-container-gallery__image-title">{{
              portfolio[0].project
            }}</span>
          </div>
        </div>
      </div>
      <div class="portfolio-container-gallery__wrapper">
        <div class="portfolio-container-gallery__element">
          <img class="portfolio-container-gallery__image" :src="portfolio[1].image" alt="" />
          <div @click="showModal(1)" class="portfolio-container-gallery__image---hover">
            <span class="portfolio-container-gallery__image-title">{{
              portfolio[1].project
            }}</span>
          </div>
        </div>
      </div>
      <div class="portfolio-container-gallery__wrapper">
        <div class="portfolio-container-gallery__element">
          <img class="portfolio-container-gallery__image" :src="portfolio[2].image" alt="" />
          <div @click="showModal(2)" class="portfolio-container-gallery__image---hover">
            <span class="portfolio-container-gallery__image-title">{{
              portfolio[2].project
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
    image: "/images/velosbuis.jpg",
  },
  {
    id: 1,
    project: "Gite des Echudes",
    client: "Marie Pierre et Frédéric",
    langages: "Wordpress",
    website: "https://gitedesechudes.fr/",
    image: "/images/gitedesechudes.jpg",
  },
  {
    id: 2,
    project: "Portfolio",
    client: "Arnaud",
    langages: "Vue 3, NodeJS",
    website: "https://arnaud-lyard.com/",
    image: "/images/portfolio.jpg",
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
<style scoped></style>
