<template>
  <div>
    <router-view></router-view>
    <van-tabbar route active-color="black" inactive-color="gray">
      <van-tabbar-item to="/homepage" icon="music">首页</van-tabbar-item>
      <!-- <van-tabbar-item to="/mypage" icon="like">我的</van-tabbar-item> -->
      <van-tabbar-item to="/searchpage" icon="fire">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayOut',
  methods: {}
}
</script>

<style>
</style>
@/api/HomePage
