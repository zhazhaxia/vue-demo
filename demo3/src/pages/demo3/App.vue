<template>
  <div class="demo3">demo3</div>
</template>

<script>
const test = import("../../components/test");
import { sleep } from "../../utils/sleep";
export default {
  name: "Demo3",

  data() {
    return {
      test
    };
  },

  mounted() {
    sleep(3);
  }
};
</script>

