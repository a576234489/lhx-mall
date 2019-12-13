<template>
  <div class="tabBarItem" @click="changeTab">
    <div v-if="isActive">
      <slot name = 'bar-item-icon-active'></slot>
    </div>
    <div v-else>
      <slot name = 'bar-item-icon'></slot>
    </div>
    <div :style="fontStyle">
      <slot name = "bar-item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      colorStyle:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{

      }
    },
    methods:{
      changeTab(){
        this.$router.push(this.path)
      }
    },
    computed:{
      isActive(){
        console.log(this.$route.path)
        return this.$route.path.indexOf(this.path)!==-1?true:false
      },
      fontStyle(){
        return this.isActive?{color:this.colorStyle}:{}
      }
    }
  }
</script>

<style scoped>
  .tabBarItem{
    flex: 1;
    text-align: center;
    font-size: 14px;
    margin-top: 3px;
  }
  .tabBarItem img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
