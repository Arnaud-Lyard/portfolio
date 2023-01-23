<template>
  <div class="about__title-section">
    <h1 class="about__title">About <span class="about__subtitle">me</span></h1>
  </div>
  <section>
    <div class="about-container-title">
      <h3 class="about-container-title__title">Personal Infos</h3>
    </div>
    <div class="about-container-infos">
      <ul class="about-container-infos__list">
        <li class="about-container-infos__list-element">
          <span class="about-container-infos__list-item-title"
            >first name : </span
          ><span class="about-container-infos__list-item-value">Arnaud</span>
        </li>
        <li class="about-container-infos__list-element">
          <span class="about-container-infos__list-item-title"
            >last name : </span
          ><span class="about-container-infos__list-item-value">Lyard</span>
        </li>
        <li class="about-container-infos__list-element">
          <span class="about-container-infos__list-item-title">age : </span
          ><span class="about-container-infos__list-item-value">34 Years</span>
        </li>
        <li class="about-container-infos__list-element">
          <span class="about-container-infos__list-item-title"
            >nationality : </span
          ><span class="about-container-infos__list-item-value">French</span>
        </li>
      </ul>
      <div class="about-container-infos__experience">test</div>
    </div>
  </section>
</template>
<script lang="ts"></script>
<style scoped>
.about__title-section {
  display: flex;
  justify-content: center;
  padding: 80px 0;
}
.about__title {
  color: #666;
  font-size: 56px;
  text-transform: uppercase;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 576px) {
  .about__title {
    font-size: 35px;
  }
}
.about__subtitle {
  color: #2d82b5;
  font-size: 56px;
}
@media (max-width: 576px) {
  .about__subtitle {
    font-size: 35px;
  }
}
.about-container-title__title {
  font-size: 26px;
  text-transform: uppercase;
  color: #666;
  font-family: "Titillium Web B>old", sans-serif;
  padding-bottom: 22px;
}
@media (max-width: 576px) {
  .about-container-title__title {
    font-size: 21px;
  }
}
.about-container-title {
  display: flex;
  justify-content: center;
}
.about-container-infos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-left: 15px;
  padding-right: 15px;
}
@media (max-width: 992px) {
  .about-container-infos {
    grid-template-columns: 1fr;
  }
}
.about-container-infos__list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
/* .about-container-infos__list-item-value {
  display: block;
  display: inline-block;
} */
.about-container-infos__list-item-title {
  text-transform: capitalize;
  opacity: 0.8;
  color: #666;
}
.about-container-infos__list-item-value {
  color: #666;
  font-weight: 600;
}
.about-container-infos__experience {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.about-container-infos__list-element {
  flex: 0 0 50%;
  max-width: 50%;
  padding-bottom: 20px;
}
</style>
