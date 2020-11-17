import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  aboutText =
    "Partant d'une formation scientifique, j'ai souhaité éveiller à côté de ça, mon côté créatif et le fait de <b>transmettre des émotions</b>. Je suis donc devenu <b>développeur le jour et illustrateur la nuit</b>. Aujourd'hui, je mèle dans ma vie le côté technique et artistique tant sur le plan personnel que professionnel !";
  cvFile = "./CV_NicholasBrun.pdf";
}
