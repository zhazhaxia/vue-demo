<template>
    <div>
      <input type="text" v-model="age">
      <button v-on:click="setAge">设置年龄</button>
      <button v-on:click="setPhone">设置phone</button>
      <br>2222测试
      <input type="text" :value="spanname+'===length:'+nameLength">
    </div>

</template>

<script>
export default {
  name: 'nameInput',
  data () {
    return {
      age:"",
      // spanname:this.$store.state.username
    }
  },
  computed:{
    spanname(){
      return this.$store.state.username
    },
    nameLength(){
      return this.$store.getters.getUsernameLength
    },

  },
  methods:{
    setAge(){
      // this.$store.dispatch("SET_AGE",this.age)
      this.$store.dispatch("SET_AGE_2",this.age)
      this.age++
    },
    setPhone(){
      this.$store.commit("setPhone",Math.random())
    }
  }
} 
</script>

<style lang="scss">

</style>
