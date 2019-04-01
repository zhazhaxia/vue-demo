<template>
    <div>
      <input type="text" v-model="myusername">
      <button v-on:click="changeInput()">确定22</button>
    </div>

</template>

<script>
export default {
  name: 'showNameInput',
  data () {
    return {
      myusername:this.$store.state.username
    }
  },
  methods:{
    changeInput(){
      console.log('myusername',this.myusername)
      this.$store.state.username = this.myusername+"33"
    }
  }
} 
</script>

<style lang="scss">

</style>
