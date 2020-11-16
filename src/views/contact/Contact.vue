<template>
  <div id="nav-contact" class="section inverted contact-section">
    <div class="section-left-layout">
      <h2 class="section-title">Contact</h2>
    </div>
    <div class="section-right-layout">
      <div class="contact-links wrap-container">
        <div>
          <h4 class="contact-title">Adresse postale</h4>
          <p class="bloc" v-html="contactAdress"></p>
          <h4 class="contact-title">Téléphone</h4>
          <p class="bloc">{{ contactPhone }}</p>
        </div>
        <div>
          <h4 class="contact-title">Courriel principal</h4>
          <a v-bind:href="'mailto:' + contactMail">
            <p class="bloc">{{ contactMail }}</p>
          </a>
          <h4 class="contact-title">Courriel pour les illustrations</h4>
          <a v-bind:href="'mailto:' + contactMailIllus">
            <p class="bloc">{{ contactMailIllus }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Contact.ts"></script>
