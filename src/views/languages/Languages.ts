import { Component, Vue } from "vue-property-decorator";

import ProgressBar from "@/components/progress-bar/ProgressBar.vue";

@Component({
  components: {
    ProgressBar,
  },
})
export default class Languages extends Vue {
  languageList = [
    {
      name: "Français",
      value: 5,
    },
    {
      name: "Anglais",
      value: 3,
    },
  ];

  otherLanguageList = [
    "+ Compréhension anglaise (orale et écrite)",
    "TOEIC : 800 points en 2017",
    "- Expression anglaise (orale)",
  ];
}
