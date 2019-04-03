<template>
  <div>
    <p>属性-组件间通信-{{siblingsData}}</p>
    <p>我今年-{{myage}}-岁-电话:{{phone}}</p>
    <ul>
      <li v-for="item in urlList">
      	<a :href="item.url" target="_blank">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from '../event'

import {mapState} from "vuex"
export default {
  name: 'app',
  data () {
    return {
      urlList: [
      	{url:'https://twitter.com/vuejs',name:"twitter"}
      	],
      siblingsData:""
    }
  },
  computed:{
    myage(){
      return this.$store.state.age
    },
    // ...mapState({
    //   phone:state=>state.phone
    // })
    ...mapState(['phone'])


  },
  methods:{
    receiveSib(){
      bus.$on("change-me-sibling",(data)=>{
        console.log('message from sibling',data)
        this.siblingsData = data
      })
    }
  },
  mounted(){
    this.receiveSib()
    console.log('ttttttttttt',this)
    // debugger
  }
}
</script>

<style lang="scss">

</style>
