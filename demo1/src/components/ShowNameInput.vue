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
      myusername:""
    }
  },
  methods:{
    changeInput(){
      console.log('myusername',this.myusername)
      // this.$store.state.username = this.myusername+"33"
      this.$store.commit("changeUsername",this.myusername)
    }
  }
} 
</script>

<style lang="scss">

</style>
