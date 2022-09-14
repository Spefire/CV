import ProgressBar from "@/components/progress-bar/ProgressBar.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Skills",
  components: {
    ProgressBar
  },
  setup: () => {
    const skillList = ref([
      {
        name: "HTML / CSS",
        value: 4,
      },
      {
        name: "ReactJS / Redux",
        value: 3,
      },
      {
        name: "VueJS",
        value: 3,
      },
      {
        name: "Angular 6+",
        value: 2,
      },
      {
        name: "BabylonJS / A-Frame",
        value: 2,
      },
      {
        name: "Unity / C#",
        value: 3,
      },
      {
        name: "3DS Max",
        value: 2,
      },
      {
        name: "GIMP",
        value: 4,
      },
      {
        name: "Clip Studio Paint",
        value: 3,
      },
      {
        name: "Indesign",
        value: 2,
      },
    ]);
  
    const otherSkillList = ref([
      "Utilisation du Typescript",
      "Utilisation de SASS / SCSS",
      "Méthode agile Scrum",
      "Utilisation de Git / SourceTree",
      "Visual Studio Code",
      "Autonome et curieux",
      "Humour incompris",
    ]);
  
    return {
      skillList,
      otherSkillList
    };
  },
});
