<template>
  <div class="dashboard-title-section">
    <h1 class="dashboard-title-section__title">
      Admin <span class="dashboard-title-section__subtitle">Dashboard</span>
    </h1>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.dashboard-title-section {
  display: flex;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
}

.dashboard-title-section__title {
  color: #666;
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 450px) {
  .dashboard-title-section__title {
    font-size: 35px;
  }
}
.dashboard-title-section__subtitle {
  color: #2d82b5;
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: "Titillium Web Black", sans-serif;
}
@media (max-width: 450px) {
  .dashboard-title-section__subtitle {
    font-size: 35px;
  }
}
</style>
