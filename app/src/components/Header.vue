<template>
  <header class="header">
    <ul class="header__navbar">
      <router-link to="/"
        ><li class="header__list-item">
          <button href="#" class="header__button">
            <i class="header__list-icon">
              <font-awesome-icon icon="fa-solid fa-home" />
            </i>
            <h2 class="header__list-title">Home</h2>
          </button>
        </li>
      </router-link>
      <router-link to="/about">
        <li class="header__list-item">
          <button href="#" class="header__button">
            <i class="header__list-icon">
              <font-awesome-icon icon="fa-solid fa-user" />
            </i>
            <h2 class="header__list-title">About</h2>
          </button>
        </li>
      </router-link>
      <router-link to="/portfolio">
        <li class="header__list-item">
          <button href="#" class="header__button">
            <i class="header__list-icon">
              <font-awesome-icon icon="fa-solid fa-briefcase" />
            </i>
            <h2 class="header__list-title">Portfolio</h2>
          </button>
        </li>
      </router-link>
      <router-link to="/technologies">
        <li class="header__list-item">
          <button href="#" class="header__button">
            <i class="header__list-icon">
              <font-awesome-icon icon="fa-solid fa-code" />
            </i>
            <h2 class="header__list-title">Technologies</h2>
          </button>
        </li>
      </router-link>
      <router-link to="/contact">
        <li class="header__list-item">
          <button href="#" class="header__button">
            <i class="header__list-icon">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </i>
            <h2 class="header__list-title">Contact</h2>
          </button>
        </li>
      </router-link>
      <router-link v-if="!userStore.getUserEmail" to="/login">
        <li class="header__list-item">
          <button href="#" class="header__button">
            <i class="header__list-icon">
              <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
            </i>
            <h2 class="header__list-title">Login</h2>
          </button>
        </li>
      </router-link>
      <router-link v-else to="/dashboard">
        <li class="header__list-item">
          <button href="#" class="header__button">
            <i class="header__list-icon">
              <font-awesome-icon icon="fa-solid fa-lock" />
            </i>
            <h2 class="header__list-title">Admin</h2>
          </button>
        </li>
      </router-link>
    </ul>
  </header>
</template>

<script lang="ts" setup>
import { useUserStore } from "../store";
const userStore = useUserStore();
</script>

<style scoped>
.header {
  position: fixed;
  right: 30px;
  display: flex;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
}
@media (max-width: 991px) {
  .header {
    left: 0;
    right: auto;
    bottom: 0;
    top: auto;
    transform: none;
    width: 100%;
    display: block;
    padding: 8px;
    z-index: 10;
    box-shadow: 0 0 47px #dedede;
    background-color: #fff;
  }
}
.header__navbar {
  list-style-type: none;
}
@media (max-width: 991px) {
  .header__navbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 45px;
  }
}
.header__list-item {
  width: 50px;
  height: 50px;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  transition: 0.3s;
  margin: 20px 0;
  border-radius: 50%;
  cursor: pointer;
  background-color: #d7d7d7;
}
.header__button {
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  transition: 0.3s;
}
.header__list-title {
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  color: #fff;
  line-height: 50px;
  font-weight: 700;
  transition: all 0.3s;
  border-radius: 30px;
  text-transform: uppercase;
  padding: 0 25px 0 30px;
  height: 50px;
  margin: 0;
  background-color: #2d82b5;
  font-family: "Titillium Web Bold", sans-serif;
}
.header__list-icon {
  color: #fff;
  font-size: 19px;
  transition: 0.3s;
}
.header__list-item:hover .header__list-title {
  opacity: 1;
  right: 27px;
  margin: 0;
  text-align: center;
  border-radius: 30px 0 0 30px;
}
.header__list-item:hover {
  background-color: #2d82b5;
}
@media (max-width: 991px) {
  .header__list-item:hover .header__list-title {
    opacity: 0;
  }
}
.router-link-active .header__list-item {
  background-color: #2d82b5;
}
</style>
