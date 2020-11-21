<template>
  <div class="progress-bar">
    <div class="progress-bar-header">
      <h3>{{ name }}</h3>
      <h3>{{ progressList[value - 1] }}</h3>
    </div>
    <div class="progress-bar-externe">
      <div
        class="progress-bar-interne"
        :style="{ width: initLevel * 20 + '%' }"
      >
        <!--label>{{ initLevel + "%" }}</label-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ProgressBar.ts"></script>
<style scoped lang="scss" src="./ProgressBar.scss"></style>
