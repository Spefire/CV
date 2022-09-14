<template>
  <div
    id="nav-languages"
    class="section languages-section">
    <div class="section-left-layout">
      <h2 class="section-title">Langues</h2>
    </div>
    <div class="section-right-layout">
      <div class="wrap-container">
        <ProgressBar
          v-for="(language, index) in languageList"
          :key="'languageList' + index"
          :name="language.name"
          :value="language.value" />
      </div>
      <ul class="wrap-container">
        <li
          v-for="(otherLanguage, index) in otherLanguageList"
          :key="'otherLanguageList' + index">
          {{ otherLanguage }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./Languages.ts"></script>
