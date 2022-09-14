<template>
  <header
    :class="{ 'with-background': fixNavbar }"
    :style="{ opacity: fixNavbar ? '1.0' : opacNavbar }">
    <nav v-if="!isLegacy">
      <div :class="{ active: currentLocation === 'nav-home' }">
        Accueil
      </div>
      <div class="nav-separator" />
      <div :class="{ active: currentLocation == 'nav-about' }">
        Présentation
      </div>
      <div :class="{ active: currentLocation == 'nav-education' }">
        Formations
      </div>
      <div :class="{ active: currentLocation == 'nav-experiences' }">
        Expériences
      </div>
      <div :class="{ active: currentLocation == 'nav-skills' }">
        Compétences
      </div>
      <div class="nav-separator" />
      <div :class="{ active: currentLocation == 'nav-contact' }">
        Contact
      </div>
      <span class="icon nav-icon icon-home" />
      <span class="icon nav-icon icon-briefcase" />
      <span class="icon nav-icon icon-stats-bars" />
      <span class="icon nav-icon icon-star" />
      <span class="icon nav-icon icon-bubbles" />
    </nav>
    <nav v-if="isLegacy">
      <router-link to="/">
        <div>Accueil</div>
        <span class="icon nav-icon icon-home" />
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts" src="./Header.ts"></script>
<style scoped lang="scss" src="./Header.scss"></style>
