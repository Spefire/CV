<template>
  <div class="hobbie-state">
    <div class="hobbie-img">
      <span
        class="icon hobbie-icon"
        :class="'icon-' + icon" />
    </div>
    <label>{{ name }}</label>
  </div>
</template>

<script lang="ts" src="./HobbieState.ts"></script>
<style scoped lang="scss" src="./HobbieState.scss"></style>
