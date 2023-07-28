<template>
  <div class="recommend">
    <h2 class="recommend-title">{{ title }}</h2>
    <div class="songlist">
      <div v-for="item in songLists" @click="goToDetail(item.id,item.name,item.picUrl)" :key="item.id" class="songlist-item">
        <img
          class="songlist-img"
          :src=item.picUrl
          alt="歌单1"
        />
        <p class="songlist-title">{{ item.name }}</p>
        <!-- <p class="songlist-creator">创建者1</p> -->
      </div>
      <!-- 可以根据需要添加更多推荐歌单项 -->
    </div>
  </div>
</template>

<script>
// import { showDetail } from '@/utils/showDetail'
export default {
  name: 'PartView',
  props: {
    songLists: Array,
    title: {
      type: String,
      default: '歌单'
    }
  },
  methods: {
    goToDetail (id, name, pic) {
      this.$router.push({
        path: '/songlistdetail',
        query: {
          id,
          name,
          pic
        }
      })
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
/* 推荐歌单样式 */
.recommend {
  padding: 20px;
}
.recommend-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.songlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.songlist-item {
  width: 45%;
  margin-bottom: 20px;
}

.songlist-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.songlist-title {
  font-size: 16px;
  margin-top: 10px;
}

.songlist-creator {
  font-size: 12px;
  color: #999;
}
</style>
