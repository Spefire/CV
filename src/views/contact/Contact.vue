<template>
  <div id="nav-contact" class="section inverted contact-section">
    <div class="section-left-layout">
      <h2 class="section-title inverted">Contact</h2>
    </div>
    <div class="section-right-layout">
      <div class="contact-links wrap-container">
        <div>
          <h3 class="contact-title">Adresse postale</h3>
          <p
            v-if="!showAdress"
            @click="displayAdress"
            class="bloc contact-sensible"
          >
            Cliquez ici pour l'afficher
          </p>
          <p v-else class="bloc" v-html="contactAdress"></p>
          <h3 class="contact-title">Téléphone</h3>
          <p
            v-if="!showPhone"
            @click="displayPhone"
            class="bloc contact-sensible"
          >
            Cliquez ici pour l'afficher
          </p>
          <p v-else class="bloc">{{ contactPhone }}</p>
        </div>
        <div>
          <h3 class="contact-title">Courriel principal</h3>
          <a v-bind:href="'mailto:' + contactMail">
            <p class="bloc">{{ contactMail }}</p>
          </a>
          <h3 class="contact-title">Courriel pour les illustrations</h3>
          <a v-bind:href="'mailto:' + contactMailIllus">
            <p class="bloc">{{ contactMailIllus }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Contact.ts"></script>
