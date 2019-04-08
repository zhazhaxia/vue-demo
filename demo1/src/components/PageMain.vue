
<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <Link />
    <Link_bind v-on:receiveChildData="recChildData" fatherProp="prop from father"/>
    <NameInput />
    <ShowNameInput />
  </div>
</template>

<script>
import Link from "@/components/Link.vue";
import Link_bind from "@/components/Link_bind.vue";
import NameInput from "@/components/NameInput.vue";
import ShowNameInput from "@/components/ShowNameInput.vue";
export default {
  name: 'app',
  data () {
    return {
      msg: 'vue 测试demo'
    }
  },
  methods:{
    recChildData(data){
      console.log('children data:',data)
    }
  },
  components:{
    Link,
    Link_bind,
    ShowNameInput,
    NameInput,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img_pic{
  width:50px;
}
</style>
