import Footer from "@/components/footer/Footer.vue";
import Header from "@/components/header/Header.vue";
import About from "@/views/about/About.vue";
import Contact from "@/views/contact/Contact.vue";
import Education from "@/views/education/Education.vue";
import Experiences from "@/views/experiences/Experiences.vue";
import Hobbies from "@/views/hobbies/Hobbies.vue";
import Languages from "@/views/languages/Languages.vue";
import Skills from "@/views/skills/Skills.vue";

export default {
  name: "Home",
  components: {
    About,
    Contact,
    Education,
    Experiences,
    Footer,
    Header,
    Hobbies,
    Languages,
    Skills,
  },
  data() {
    return {
      name: "Nicholas BRUN",
      profile: [
        "Je suis <b>Ingénieur en développement Front-End</b>.",
        "Je suis <b>Artiste illustrateur</b>.",
        "Je suis <b>Amateur de Réalités virtuelle et augmentée</b>.",
      ],
      txtProfile: "Ingénieur en développement Front-End<br>et artiste illustrateur.",
      description:
        "Ma passion : <b>créer, donner vie à des idées</b>.<br/>Faisons défiler ensemble la page pour en savoir plus...",
    };
  },
};
