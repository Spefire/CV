import { Component, Vue } from "vue-property-decorator";

import ProgressBar from "@/components/progress-bar/ProgressBar.vue";

@Component({
  components: {
    ProgressBar,
  },
})
export default class Skills extends Vue {
  skillList = [
    {
      name: "HTML / CSS",
      value: 85,
    },
    {
      name: "ReactJS / Redux",
      value: 60,
    },
    {
      name: "VueJS",
      value: 50,
    },
    {
      name: "Angular 6+",
      value: 40,
    },
    {
      name: "BabylonJS / A-Frame",
      value: 50,
    },
    {
      name: "Unity / C#",
      value: 60,
    },
    {
      name: "3DS Max",
      value: 40,
    },
    {
      name: "GIMP",
      value: 85,
    },
    {
      name: "Clip Studio Paint",
      value: 60,
    },
    {
      name: "Indesign",
      value: 60,
    },
  ];

  otherSkillList = [
    "Utilisation du Typescript",
    "Utilisation de SASS / SCSS",
    "Méthode agile Scrum",
    "Utilisation de Git / SourceTree",
    "Visual Studio Code",
    "Autonome et curieux",
    "Humour incompris",
  ];
}
