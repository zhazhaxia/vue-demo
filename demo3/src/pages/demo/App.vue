<template>
  <div class="demo">
    demo
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
