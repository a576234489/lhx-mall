import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//解决路由连续点击两次报错问题
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const Home = ()=>import('views/home/Home');
const Category = ()=>import('views/category/Category');
const Profile = ()=>import('views/profile/Profile');
const Cart = ()=>import('views/cart/Cart');

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
]
const router = new VueRouter({
  routes,
  mode:'history'
})
export default router


