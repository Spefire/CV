import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "About",
  components: {},
  setup: () => {
    const aboutText = ref("Partant d'une formation scientifique, j'ai souhaité éveiller à côté de ça, mon côté créatif et le fait de <b>transmettre des émotions</b>. Je suis donc devenu <b>développeur le jour et illustrateur la nuit</b>. Aujourd'hui, je mèle dans ma vie le côté technique et artistique tant sur le plan personnel que professionnel !");
    const cvFile = ref("./CV_NicholasBrun.pdf");
    
    return {
      aboutText,
      cvFile
    };
  },
});
