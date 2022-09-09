
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  components: {},
  props: {
    isLegacy: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  setup: () => {
    const fixNavbar = ref(false);
    const opacNavbar = ref(1.0);

    const currentLocation = ref("nav-home");

    const homeTotalHeight = ref(0);
    const aboutTotalHeight = ref(0);
    const educationTotalHeight = ref(0);
    const experiencesTotalHeight = ref(0);
    const skillsTotalHeight = ref(0);
    const contactTotalHeight = ref(0);

    return {
      fixNavbar,
      opacNavbar,
      currentLocation,
      homeTotalHeight,
      aboutTotalHeight,
      educationTotalHeight,
      experiencesTotalHeight,
      skillsTotalHeight,
      contactTotalHeight,
    };
  },

  mounted() {
    this.handleSize();
    this.handleScroll();
  },

  created() {
    window.addEventListener("resize", this.handleSize);
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("resize", this.handleSize);
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleSize() {
      const header = document.getElementsByTagName("header")[0];
      const home = document.getElementById("nav-home");
      const about = document.getElementById("nav-about");
      const education = document.getElementById("nav-education");
      const experiences = document.getElementById("nav-experiences");
      const skills = document.getElementById("nav-skills");
      const languages = document.getElementById("nav-languages");
      const hobbies = document.getElementById("nav-hobbies");
      const contact = document.getElementById("nav-contact");
  
      // homeTotalHeight
      if (home) {
        this.homeTotalHeight = home.offsetHeight - 51;
      }
      // aboutTotalHeight
      if (about) {
        this.aboutTotalHeight =
          this.homeTotalHeight + about.offsetHeight - header.offsetHeight;
      }
      // educationTotalHeight
      if (education) {
        this.educationTotalHeight =
          this.aboutTotalHeight + education.offsetHeight;
      }
      // experiencesTotalHeight
      if (experiences) {
        this.experiencesTotalHeight =
          this.educationTotalHeight + experiences.offsetHeight;
      }
      // skillsTotalHeight
      if (skills) {
        this.skillsTotalHeight =
          this.experiencesTotalHeight + skills.offsetHeight;
      }
      if (languages) {
        this.skillsTotalHeight = this.skillsTotalHeight + languages.offsetHeight;
      }
      if (hobbies) {
        this.skillsTotalHeight = this.skillsTotalHeight + hobbies.offsetHeight;
      }
      // contactTotalHeight
      if (contact) {
        this.contactTotalHeight = this.skillsTotalHeight + contact.offsetHeight;
      }
    },
  
    handleScroll() {
      // Entre le haut de la page et la fin de la section home
      if (0 <= window.pageYOffset && window.pageYOffset < this.homeTotalHeight) {
        this.fixNavbar = false;
        this.opacNavbar =
          (window.innerHeight / 2 - window.pageYOffset) /
          (window.innerHeight / 2);
        this.currentLocation = "nav-home";
      }
      // Entre le bas de la section home et la fin de la section about
      else if (
        this.homeTotalHeight <= window.pageYOffset &&
        window.pageYOffset < this.aboutTotalHeight
      ) {
        this.fixNavbar = this.homeTotalHeight != window.pageYOffset;
        this.currentLocation = "nav-about";
      }
      // Entre le bas de la section about et la fin de la section education
      else if (
        this.aboutTotalHeight <= window.pageYOffset &&
        window.pageYOffset < this.educationTotalHeight
      ) {
        this.fixNavbar = true;
        this.currentLocation = "nav-education";
      }
      // Entre le bas de la section education et la fin de la section experiences
      else if (
        this.educationTotalHeight <= window.pageYOffset &&
        window.pageYOffset < this.experiencesTotalHeight
      ) {
        this.fixNavbar = true;
        this.currentLocation = "nav-experiences";
      }
      // Entre le bas de la section experiences et avant de voir le footer
      else if (
        this.educationTotalHeight <= window.pageYOffset &&
        window.pageYOffset + window.innerHeight < this.contactTotalHeight
      ) {
        this.fixNavbar = true;
        this.currentLocation = "nav-skills";
      } else {
        this.fixNavbar = true;
        this.currentLocation = "nav-contact";
      }
    }
  }
});
