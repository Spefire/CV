import HobbieState from "@/components/hobbie-state/HobbieState.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Hobbies",
  components: {
    HobbieState,
  },
  setup: () => {
    const hobbieList = ref([
      {
        name: "Illustrations",
        icon: "images",
      },
      {
        name: "Séries, beaucoup de séries",
        icon: "video-camera",
      },
      {
        name: "Maître rôliste (Le Monde d'Arlénor, L'Appel de Cthulhu, Sens Hexalogie...)",
        icon: "dice",
      },
      {
        name: "Jeux vidéo (coopératifs, narratifs, horreur...)",
        icon: "pacman",
      },
      {
        name: "Danse modern-jazz (et Beat-Saber, ça compte ?)",
        icon: "accessibility",
      },
    ]);

    return { hobbieList };
  },
});
