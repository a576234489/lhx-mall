<template>
  <div class="tab-control">
    <div v-for="(title,index) in title" :key="index" class="tab-control-item" :class="{isActive:index==currentIndex}" @click="changeActive(index)">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        currentIndex:0
      }
    },
    props:{
      title:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    methods:{
      changeActive(index){
        this.currentIndex = index
      }
    }

  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 49px;
    line-height: 40px;
    font-size: 15px;
  }
  .tab-control-item{
    flex: 1;
  }
  .isActive{
    color: var(--color-high-text);
  }
  .isActive span{
    padding-bottom: 3px;
    border-bottom: 3px solid var(--color-high-text);
  }
  .home-tab-control{
    position: sticky;
    top: 44px;
  }
</style>
