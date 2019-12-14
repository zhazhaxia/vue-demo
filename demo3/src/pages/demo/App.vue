<template>
  <div class="demo">
    demo
    <img src="./img/test.jpg" />
  </div>
</template>

<script>
import { sleep } from '../../utils/sleep'
export default {
  name: 'Demo',
  components: {
  },
  mounted () {
    sleep(3)
  }
}
</script>
