import { Component, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  contactAdress = "Appartement A202<br/>4 Rue de la Sirène<br/>44300 Nantes";
  contactMail = "nicholasbrun.pro@gmail.com";
  contactMailIllus = "spefire@gmail.com";
  contactPhone = "06.66.21.86.44";
}
