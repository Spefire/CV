<template>
  <div
    id="nav-hobbies"
    class="section hobbies-section">
    <div class="section-left-layout">
      <h2 class="section-title">Loisirs</h2>
    </div>
    <div class="section-right-layout">
      <div class="wrap-container">
        <HobbieState
          v-for="(hobbie, index) in hobbieList"
          :key="'hobbieList' + index"
          :name="hobbie.name"
          :icon="hobbie.icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Hobbies.ts"></script>
