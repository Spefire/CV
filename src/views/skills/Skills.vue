<template>
  <div
    id="nav-skills"
    class="section skills-section">
    <div class="section-left-layout">
      <h2 class="section-title">Compétences</h2>
    </div>
    <div class="section-right-layout">
      <div class="wrap-container">
        <ProgressBar
          v-for="(skill, index) in skillList"
          :key="'skillList' + index"
          :name="skill.name"
          :value="skill.value" />
      </div>
      <ul class="wrap-container">
        <li
          v-for="(otherSkill, index) in otherSkillList"
          :key="'otherSkillList' + index">
          {{ otherSkill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./Skills.ts"></script>
