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
defineEmits(["close"]);
const props = defineProps(["stateModal"]);
</script>
