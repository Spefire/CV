<template>
  <div id="nav-contact" class="section contact-section">
    <div class="section-left-layout">
      <span class="icon contact-icon icon-users"></span>
    </div>
    <div class="section-right-layout">
      <h2>Contact</h2>
      <div class="contact-links wrap-container">
        <div>
          <h4>Adresse postale</h4>
          <p class="contact-text" v-html="contactAdress"></p>
          <h4>Téléphone</h4>
          <p class="contact-text">{{ contactPhone }}</p>
        </div>
        <div>
          <h4>Courriel principal</h4>
          <a v-bind:href="'mailto:' + contactMail">
            <p class="contact-text">{{ contactMail }}</p>
          </a>
          <h4>Courriel pour les illustrations</h4>
          <a v-bind:href="'mailto:' + contactMailIllus">
            <p class="contact-text">{{ contactMailIllus }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Contact.ts"></script>
<style scoped lang="scss" src="./Contact.scss"></style>
