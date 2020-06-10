import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  aboutText =
    "Partant d'une formation scientifique, j'ai souhaité éveiller à côté de ça, mon côté créatif et le fait de transmettre des émotions. Je suis donc devenu développeur le jour et illustrateur la nuit. Aujourd'hui, je mèle dans ma vie le côté technique et artistique tant sur le plan personnel que professionnel !";
  cvFile = "./CV_NicholasBrun.pdf";
}
