import { Component, Vue } from "vue-property-decorator";

import HobbieState from "@/components/hobbie-state/HobbieState.vue";

@Component({
  components: {
    HobbieState,
  },
})
export default class Hobbies extends Vue {
  hobbieList = [
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
  ];
}
