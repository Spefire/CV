import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ProgressBar extends Vue {
  @Prop(String) name!: string;
  @Prop(Number) value!: number;
  progressList = ["Basique", "Intermédiaire", "Avancée", "Native"];

  initLevel = 0;
  intervalID = -1;
  increment = 1;

  mounted() {
    this.intervalID = setInterval(() => {
      this.getLevelProgress(this.increment);
    }, 10);
  }

  getLevelProgress(v: number) {
    this.initLevel = Math.min(Math.floor(this.initLevel + v), this.value);
  }

  beforeDestroy() {
    clearInterval(this.intervalID);
  }
}
