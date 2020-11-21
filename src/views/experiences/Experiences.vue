<template>
  <div id="nav-experiences" class="section inverted experiences-section">
    <div class="section-left-layout">
      <h2 class="section-title inverted">Expériences</h2>
    </div>
    <div class="section-right-layout">
      <div v-for="(exp, index) in expList" :key="index" class="bloc">
        <h2>{{ exp.name }}</h2>
        <h3>{{ exp.place }} • {{ exp.city }} • {{ exp.date }}</h3>
        <p v-html="exp.description"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Experiences.ts"></script>
