<template>
  <div class="progress-bar">
    <div class="progress-bar-header">
      <h4>{{ name }}</h4>
      <h4>{{ progressList[value - 1] }}</h4>
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
