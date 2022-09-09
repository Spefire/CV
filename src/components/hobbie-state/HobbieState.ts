import { defineComponent } from "vue";

export default defineComponent({
  name: "HobbieState",
  components: {},
  props: {
    name: {
      type: String,
      required: false,
      default: ""
    },
    icon: {
      type: String,
      required: false,
      default: ""
    },
  },
  setup: () => {
    return {};
  },
});