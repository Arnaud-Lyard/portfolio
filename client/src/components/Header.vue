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
            <h2 class="header__list-title">Dashboard</h2>
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
