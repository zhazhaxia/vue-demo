<template>
    <div>
      <input type="text" v-model="age">
      <button v-on:click="setAge">设置年龄</button>
      <input type="text" :value="spanname">
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
    }
  },
  methods:{
    setAge(){
      // this.$store.dispatch("SET_AGE",this.age)
      this.$store.dispatch("SET_AGE_2",this.age)
    }
  }
} 
</script>

<style lang="scss">

</style>
