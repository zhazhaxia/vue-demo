<template>
  <div class="demo1">
    demo1
    <Test></Test>
  </div>
</template>

<script>
import Test from '../../components/test'
import { sleep } from '../../utils/sleep'
export default {
  name: 'Demo1',

  components: {
    Test
  },

  mounted () {
    sleep(3)
  }
}
</script>

