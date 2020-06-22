<template>
  <footer v-bind:class="{ legaced: isLegacy }">
    <div class="footer-line">
      <div>© Copyrights <b>Nicholas Brun</b></div>
      <div class="footer-mobile">. Tous droits réservés.</div>
    </div>
    <div class="footer-line">
      <div class="footer-left footer-mobile">
        Site réalisé
        <a href="https://github.com/Spefire/TemplateCV" target="_blank">
          <b>par mes soins</b>
        </a>
      </div>
      <div class="nav-separator footer-mobile"></div>
      <router-link class="footer-right" to="mentions-legales"
        >Mentions Légales</router-link
      >
    </div>
  </footer>
</template>

<script lang="ts" src="./Footer.ts"></script>
<style scoped lang="scss" src="./Footer.scss"></style>
