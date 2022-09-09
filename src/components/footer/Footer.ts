import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  components: {},
  props: {
    isLegacy: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  setup: () => {
    return {};
  },
});