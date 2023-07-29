<template>
  <div>
    <!-- <SearchBar></SearchBar> -->
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in songLists2" :key="item.id">
        <img @click="goToDetail(item.id,item.name,item.picUrl)" class="swipe-img" :src="item.picUrl" alt="" />
      </van-swipe-item>
    </van-swipe>

    <!-- 歌单板块 -->
    <PartView :songLists="songLists" :title="'推荐歌单'"></PartView>
    <PartView :songLists="songLists1" :title="'热门歌单'"></PartView>
  </div>
</template>

<script>
// import SearchBar from '../SearchPage/SearchBar.vue'
import { getSongList } from '@/api/homepage'
import PartView from './PartView.vue'
import { showDetail } from '@/utils/showDetail'
import goToDetail from '@/mixins/goToDetail'
export default {
  name: 'HomePage',
  mixins: [goToDetail],
  components: {
    PartView
    // SearchBar
  },
  methods: {
    async getSongLists () {
      const res = await getSongList()
      console.log(res)
      this.songLists = res.result.slice(0, 4)
      this.songLists1 = res.result.slice(4, 8)
      this.songLists2 = res.result.slice(8, 12)
    },
    showDetail (id) {
      showDetail(id)
    }
  },
  created () {
    this.getSongLists()
  },
  data () {
    return {
      songLists: [],
      songLists1: [],
      songLists2: []
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* 轮播图 */
.my-swipe .van-swipe-item {
  margin-top: 20px;
  margin-bottom: 0px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: white;
  width: 100%;
  height: 300px;
}
.swipe-img {
  width: 90%;
  height: 290px;
  border-radius: 5%; /* 将图片设置为圆形 */
  box-shadow: 0 0 9px 3px gray; /* 添加立体阴影效果 */
}

/* 导航栏样式 */
.navbar {
  background-color: #336699;
  color: #fff;
  padding: 10px;
  text-align: center;
}

/* Banner轮播图样式 */
.banner {
  width: 100%;
  height: 200px;
  background-color: #f1f1f1;
  overflow: hidden;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
