<template>
  <div class="song-list-details">
    <!-- 导航 -->
    <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <!-- 歌曲封面 -->
    <div class="cover-container">
      <img class="cover-image" :src="picUrl" alt="歌单封面" />
    </div>

    <!-- 歌手信息 -->
    <div class="info-container">
      <h2 style="text-align: center" class="title">{{ songName }}</h2>
      <!-- <p class="description">{{ singer }}</p> -->
      <p style="text-align: center" class="created-by">{{ singer }}</p>
    </div>

    <!-- 歌词列表 -->
    <div class="song-list">

      <!-- 使用 v-for 遍历歌曲列表 -->
      <div  class="song-item">
        <!-- <div class="song-number" style="color: gray; width: 20px">
          1
        </div> -->
        <div class="song-info">
          <h3 id="lyricsContainer" class="song-title"></h3>
          <!-- <p class="song-artist">3</p> -->
        </div>
      </div>
    </div>
     <!-- <div id="lyricsContainer" class="lyrics-container">
      歌词将在这里动态添加
    </div> -->
    <audio id="audioPlayer" :src="musicUrl" controls autoplay></audio>
  </div>
</template>

<script>
import { getMusicUrl, getLyricString } from '@/api/PlayPage'
export default {
  name: 'PlayPage',
  data () {
    return {
      musicUrl: '',
      lyricString: '',
      lyricData: []
    }
  },
  async created () {
    const res = await getMusicUrl(this.id)
    this.musicUrl = res.data[0].url
  },
  async mounted () {
    // 歌词滚动实现
    const LyricRes = await getLyricString(this.id)
    this.lyricString = LyricRes.lrc.lyric
    // 拆解歌词
    const lines = this.lyricString.split('\n')
    const timeRegex = /\[(\d+:\d+\.\d+)\](.*)/
    for (const line of lines) {
      const match = line.match(timeRegex)
      if (match) {
        const timeData = match[1]
        const text = match[2].trim()
        // 把时间戳化为秒数
        const parts = timeData.split(':')
        const minutes = parseFloat(parts[0])
        const seconds = parseFloat(parts[1])
        const time = minutes * 60 + seconds
        this.lyricData.push({ time, text })
      }
    }
    console.log(this.lyricData)
    // Dom操作
    const audioPlayer = this.$el.querySelector('#audioPlayer')
    // const lyricsContainer = this.$el.querySelector('#lyricsContainer')
    // 找到对应的歌词并跟新上去
    audioPlayer.addEventListener('timeupdate', () => {
      const currentTime = audioPlayer.currentTime
      let currentLyric = ''
      for (let i = 0; i < this.lyricData.length; i++) {
        if (currentTime >= this.lyricData[i].time && currentTime < this.lyricData[i + 1].time) {
          currentLyric = this.lyricData[i].text
          console.log(currentTime)
          console.log(currentLyric)
          break
        }
      }
    })
  },
  computed: {
    picUrl () {
      return this.$route.query.picUrl
    },
    id () {
      return this.$route.query.id
    },
    singer () {
      return this.$route.query.singerName
    },
    songName () {
      return this.$route.query.songName
    }
  }
}
</script>

<style scoped>
.lyrics-container {
  height: 60px;
  overflow: hidden;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 2;
}

.lyrics p {
  margin: 0;
}

audio {
  width: 100%;
}
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
  text-align: center;
  /* display: flex;
  justify-content: space-between; */
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
