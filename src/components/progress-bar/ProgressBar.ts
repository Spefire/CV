import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProgressBar",
  components: {},
  props: {
    name: {
      type: String,
      required: false,
      default: ""
    },
    value: {
      type: Number,
      required: false,
      default: 0
    },
  },
  setup: () => {
    const progressList = ref(["Inexistant", "Basique", "Intermédiaire", "Avancée", "Native"]);
  
    const initLevel = ref(0);
    const intervalID = ref(-1);
    const increment = ref(1);
  
    return {
      progressList,
      initLevel,
      intervalID,
      increment,
    };
  },
  
  mounted() {
    this.intervalID = setInterval(() => {
      this.getLevelProgress(this.increment);
    }, 10);
  },

  methods: {
    getLevelProgress(v: number) {
      this.initLevel = Math.min(Math.floor(this.initLevel + v), this.value);
    },
  
    beforeDestroy() {
      clearInterval(this.intervalID);
    }
  }
});
