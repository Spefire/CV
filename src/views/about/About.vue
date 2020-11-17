<template>
  <div id="nav-about" class="section inverted about-section">
    <div class="section-left-layout">
      <div class="about-profile" />
    </div>
    <div class="section-right-layout">
      <h2 class="section-title inverted">Présentation</h2>
      <p class="bloc" v-html="aboutText"></p>
      <div class="about-links">
        <a class="link-button" v-bind:href="cvFile" download>
          <span class="icon button-icon icon-folder-upload"></span>Télécharger
          mon CV
        </a>
        <a
          class="link-button"
          v-scroll-to="{ el: '#nav-contact', offset: -50 }"
        >
          <span class="icon button-icon icon-users"></span>Me contacter
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./About.ts"></script>
