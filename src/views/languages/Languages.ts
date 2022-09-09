import ProgressBar from "@/components/progress-bar/ProgressBar.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Languages",
  components: {
    ProgressBar,
  },
  setup: () => {
    const languageList = ref([
      {
        name: "Français",
        value: 5,
      },
      {
        name: "Anglais",
        value: 3,
      },
    ]);

    const otherLanguageList = ref([
      "+ Compréhension anglaise (orale et écrite)",
      "TOEIC : 800 points en 2017",
      "- Expression anglaise (orale)",
    ]);

    return {
      languageList,
      otherLanguageList
    };
  },
});

