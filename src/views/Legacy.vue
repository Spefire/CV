<template>
  <div>
    <Header :is-legacy="true" />
    <div
      id="nav-legacy"
      class="legacy-page">
      <div class="legacy-background" />
      <h2 class="section-title inverted">Mentions Légales</h2>
      <p
        class="bloc"
        v-html="mentions" />
      <router-link
        class="link-button"
        to="/">
        <span class="icon button-icon icon-home" />Retourner à l'accueil
      </router-link>
    </div>
    <Footer :is-legacy="true" />
  </div>
</template>

<script lang="ts" src="./Legacy.ts"></script>
