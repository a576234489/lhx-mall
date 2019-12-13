<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tabBar{
    display: flex;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #f6f6f6;
    height: 49px;
  }
</style>
