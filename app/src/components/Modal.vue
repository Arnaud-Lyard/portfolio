<template>
  <transition name="modal--fade">
    <div @click="$emit('close')" class="modal__backdrop">
      <div
        class="modal"
        role="dialog"
        :aria-labelledby="props.stateModal?.project"
        :aria-describedby="props.stateModal?.client"
        @click.stop=""
      >
        <header class="modal__header" :id="props.stateModal?.project">
          <div class="modal__header-separation">
            <h3 class="modal_title">{{ props.stateModal?.project }}</h3>
            <button
              type="button"
              class="modal__button-close"
              @click="$emit('close')"
              aria-label="Close Modal"
            >
              x
            </button>
          </div>
          <div class="modal__details">
            <div class="modal__details-element">
              <i class="modal__details-icon">
                <font-awesome-icon icon="fa-solid fa-file-lines" />
              </i>
              Project :
              <span class="modal__details-content">{{
                props.stateModal?.project
              }}</span>
            </div>
            <div class="modal__details-element">
              <i class="modal__details-icon">
                <font-awesome-icon icon="fa-solid fa-user" />
              </i>
              Client :
              <span class="modal__details-content">{{
                props.stateModal?.client
              }}</span>
            </div>
            <div class="modal__details-element">
              <i class="modal__details-icon">
                <font-awesome-icon icon="fa-solid fa-code" />
              </i>
              Langages :
              <span class="modal__details-content">{{
                props.stateModal?.langages
              }}</span>
            </div>
            <div class="modal__details-element">
              <i class="modal__details-icon">
                <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
              </i>
              Preview :
              <span class="modal__details-content">
                <a
                  :href="props.stateModal?.website"
                  target="_blank"
                  class="modal__details-content-link"
                  >{{ props.stateModal?.website }}</a
                >
              </span>
            </div>
          </div>
        </header>

        <main class="modal__body" :id="props.stateModal?.client">
          <img
            :src="props.stateModal?.image"
            :alt="props.stateModal?.project"
            class="modal__image"
          />
        </main>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";
const emit = defineEmits(["close"]);
const props = defineProps(["stateModal"]);
</script>
<style>
.modal__backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 600px;
}

.modal_title {
  text-transform: uppercase;
  padding: 10px 0 10px;
  font-weight: 700;
  font-size: 33px;
  color: #2d82b5;
  text-align: center;
  font-family: "Titillium Web Bold", sans-serif;
}

.modal__header {
  height: 125px;
  position: relative;
  border-bottom: 1px solid rgb(227, 231, 233);
  color: #666;
}

.modal__header-separation {
  border-bottom: 1px solid rgb(227, 231, 233);
}

.modal__details-icon {
  padding-right: 10px;
}
.modal__details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 30px;
  font-size: 14px;
}

.modal__details-content-link {
  text-decoration: none;
  color: #2d82b5;
}

.modal__body {
  position: relative;
  padding: 20px 10px;
  margin: 0 auto;
}

.modal__image {
  width: 550px;
  height: 300px;
  border-radius: 10px;
}

.modal__button-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: red;
  background: transparent;
}

.modal__details-element {
  padding: 5px 0;
}

.modal__details-content {
  font-weight: 700;
}
.modal--fade-enter,
.modal--fade-leave-to {
  opacity: 0;
}

.modal--fade-enter-active,
.modal--fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
