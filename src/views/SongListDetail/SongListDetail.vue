<template>
  <div class="song-list-details">
    <!-- 导航 -->
    <van-nav-bar
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 歌单封面 -->
    <div class="cover-container">
      <img class="cover-image" :src="pic" alt="歌单封面" />
    </div>

    <!-- 歌单信息 -->
    <div class="info-container">
      <!-- <h2 class="title">{{name}}</h2> -->
      <p class="description">{{ name }}</p>
      <!-- <p class="created-by">创建者：John Doe</p> -->
    </div>

    <!-- 歌曲列表 -->
    <div class="song-list">
      <!-- 使用 v-for 遍历歌曲列表 -->
      <div @click="goToSong(item.id,item.al.picUrl,item.ar[0].name,item.name)" v-for="(item, index) in songs" :key="item.id" class="song-item">
        <div class="song-number" style="color: gray; width: 20px">
          {{ index + 1 }}
        </div>
        <div class="song-info">
          <h3 class="song-title">{{ item.name }}</h3>
          <p class="song-artist">{{ item.ar[0].name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { showDetail } from '@/utils/showDetail'
import { getListDetail } from '@/api/homepage'

export default {
  name: 'SongListDetail',
  props: {
    List: Array
  },
  computed: {
    id () {
      return this.$route.query.id
    },
    name () {
      return this.$route.query.name
    },
    pic () {
      return this.$route.query.pic
    }
  },
  async created () {
    const res = await getListDetail(this.id, 20)
    console.log(res)
    this.songs = res.songs
  },
  data () {
    return {
      songs: []
    }
  },
  methods: {
    goToSong (id, picUrl, singerName, songName) {
      this.$router.push({
        path: '/playpage',
        query: {
          id,
          picUrl,
          singerName,
          songName
        }
      })
    }
  }
}
</script>

<style scoped>
/* 页面整体容器样式 */
.song-list-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* 歌单封面容器样式 */
.cover-container {
  text-align: center;
}

/* 歌单封面图片样式 */
.cover-image {
  max-width: 100%;
  border-radius: 8px;
}

/* 歌单信息容器样式 */
.info-container {
  margin-top: 20px;
}

/* 歌单名称样式 */
.title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

/* 歌单描述样式 */
.description {
  font-size: 16px;
  color: #666;
}

/* 创建者样式 */
.created-by {
  font-size: 14px;
  color: #888;
}

/* 歌曲列表容器样式 */
.song-list {
  margin-top: 30px;
}

/* 单个歌曲容器样式 */
.song-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 6px;
  background-color: #f7f7f7;
}

/* 歌曲序号样式 */
.song-number {
  font-size: 18px;
  font-weight: bold;
  margin-right: 15px;
}

/* 歌曲信息容器样式 */
.song-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

/* 歌曲标题样式 */
.song-title {
  margin: 0;
  font-size: 18px;
}

/* 歌曲艺术家样式 */
.song-artist {
  margin: 0;
  color: #666;
}
</style>
