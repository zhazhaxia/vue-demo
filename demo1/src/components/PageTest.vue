<template>
    <div>
      <p>test 路由页面</p>
      <p>测试文案</p>
      <input type="text" v-model="age">
      <button v-on:click="setAge">确认</button>
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
    

  },
  methods:{
    setAge(){
      
    }
  }
} 
</script>

<style lang="scss">

</style>
