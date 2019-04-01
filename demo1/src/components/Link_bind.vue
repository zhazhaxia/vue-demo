<template>
    <ul>
    <p>事件 {{fatherProp}}</p>
      <li v-for="item in urlList">
      	<a href="javascript:;" v-on:click.stop.prevent="showLink(item.url,$event)">{{item.name}}</a>
      </li>
    </ul>

</template>

<script>
import bus from '../event'
export default {
  name: 'app',
  data () {
    return {
      urlList: [
      	{url:'https://vuejs.org',name:'click me'},
      	{url:'https://forum.vuejs.org',name:'forum'},
      	{url:'https://chat.vuejs.org',name:'community chat'},
      	{url:'https://twitter.com/vuejs',name:"twitter"}
      	]
    }
  },
  methods:{
    showLink(url,e){

      // console.log(url)
      // console.log(this)
      // console.log('props',this.fatherProp)
      // console.log(e) //event对象传递
      this.$emit("receiveChildData",url);//父子组件通信

      bus.$emit("change-me-sibling",url);//兄弟组件之间的通信
    }
  },
  props:["fatherProp"]
}
</script>

<style lang="scss">

</style>
