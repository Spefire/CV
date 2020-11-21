<template>
  <div id="nav-education" class="section education-section">
    <div class="section-left-layout">
      <h2 class="section-title">Formations</h2>
    </div>
    <div class="section-right-layout">
      <div v-for="(educ, index) in educList" :key="index">
        <h2>{{ educ.name }}</h2>
        <h3>{{ educ.place }} • {{ educ.city }} • {{ educ.date }}</h3>
        <p v-html="educ.description"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Education.ts"></script>
