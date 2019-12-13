<template>
  <div id="home">
    <nav-bar id="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="home-tab-control" :title="['流行','新款','精选']"></tab-control>
    <ul>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/common/tabcontrol/TabControl'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import {getHomeMultidata,getHomeGoods} from "network/home";
  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,

      HomeSwiper,
      RecommendView,
      FeatureView,

    },
    data(){
      return {
        banners: [],
        recommends:[],
        goods:{
          pop:{
            page:0,
            list:[]
          },
          new:{
            page:0,
            list:[]
          },
          sell:{
            page:0,
            list:[]
          },
        }
      }
    },
    created() {
      //获取首页多样性数据
      this.getHomeMultidata()
      //获取首页商品数据
      this.getHomeGoods('pop')
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        console.log(this.goods[type])
        let page = this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          console.log(res)
        })
      }
    }

  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  #home-bar{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
</style>
