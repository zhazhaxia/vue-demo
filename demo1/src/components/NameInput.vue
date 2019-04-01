<template>
    <div>
      <input type="text" v-model="username">
      <button>确定11</button>
      <input type="text" v-model="spanname">
    </div>

</template>

<script>
export default {
  name: 'nameInput',
  data () {
    return {
      username:"my name",
      spanname:this.$store.state.username
    }
  },
  methods:{
  }
} 
</script>

<style lang="scss">

</style>
