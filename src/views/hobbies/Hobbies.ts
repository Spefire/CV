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
      name: "Illustrations (section à venir)",
      icon: "images",
    },
    {
      name: "Séries, beaucoup de séries",
      icon: "video-camera",
    },
    {
      name: "Maître rôliste (section à venir)",
      icon: "dice",
    },
    {
      name: "Jeux vidéo (section à venir)",
      icon: "pacman",
    },
    {
      name: "Danse modern-jazz (et Beat-Saber, ça compte ?)",
      icon: "accessibility",
    },
  ];
}
