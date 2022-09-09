import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Contact",
  components: {},
  setup: () => {
    const fixNavbar = ref(false);
    const contactAdress = ref("Appartement A202<br/>4 Rue de la Sirène<br/>44300 Nantes");
    const contactMail = ref("nicholasbrun.pro@gmail.com");
    const contactMailIllus = ref("spefire@gmail.com");
    const contactPhone = ref("+33 (0)6 66 21 86 44");
  
    const showAdress = ref(false);
    const showPhone = ref(false);

    return {
      fixNavbar,
      contactAdress,
      contactMail,
      contactMailIllus,
      contactPhone,
      showAdress,
      showPhone,
    };
  },

  methods: {
    displayAdress() {
      this.showAdress = true;
    },

    displayPhone() {
      this.showPhone = true;
    }
  }
});
