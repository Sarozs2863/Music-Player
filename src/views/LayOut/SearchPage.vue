<!-- MusicSearch.vue -->

<template>
  <div class="music-search">
    <!-- 顶部导航栏 -->
    <div class="nav-bar">
      <!-- 左侧返回按钮 -->
      <i class="back-icon"></i>
      <!-- 应用程序名称或Logo图标 -->
      <img class="logo" src="logo.png" alt="App Logo">
      <!-- 右侧菜单按钮 -->
      <i class="menu-icon"></i>
    </div>

    <!-- 搜索框 -->
    <div class="search-box">
      <!-- 搜索图标 -->
      <i class="search-icon"></i>
      <!-- 搜索输入框 -->
      <input type="text" placeholder="请输入歌曲名或歌手名">
    </div>

    <!-- 搜索结果显示区域 -->
    <div class="search-results">
      <ul>
        <li>
          <img src="song1_cover.jpg" alt="Song Cover">
          <div class="song-info">
            <h3>歌曲标题1</h3>
            <p>歌手名1</p>
          </div>
        </li>
        <li>
          <img src="song2_cover.jpg" alt="Song Cover">
          <div class="song-info">
            <h3>歌曲标题2</h3>
            <p>歌手名2</p>
          </div>
        </li>
        <!-- 更多搜索结果项... -->
      </ul>
    </div>

    <!-- 底部播放控制栏 -->
    <div class="playback-control">
      <img class="current-song-cover" src="current_song_cover.jpg" alt="Current Song Cover">
      <marquee class="current-song-info">当前歌曲标题 - 当前歌手名</marquee>
      <div class="control-buttons">
        <i class="play-pause-icon"></i>
        <i class="next-song-icon"></i>
        <i class="playlist-icon"></i>
      </div>
    </div>
  </div>
</template>

<style>
/* 基本布局样式 */
.music-search {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  color: #333;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 顶部导航栏样式 */
.nav-bar {
  display: flex;
  align-items: center;
  background-color: #2a80eb;
  color: #fff;
  padding: 10px;
}

/* 搜索框样式 */
.search-box {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
}

.search-box input[type="text"] {
  border: none;
  outline: none;
  width: 100%;
  padding: 5px;
  font-size: 16px;
  color: #333;
}

/* 搜索结果样式 */
.search-results {
  margin-top: 20px;
  padding: 10px;
}

.search-results ul {
  list-style: none;
  padding: 0;
}

.search-results li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
}

.search-results li img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

/* 底部播放控制栏样式 */
.playback-control {
  display: flex;
  align-items: center;
  background-color: #2a80eb;
  color: #fff;
  padding: 10px;
}

.playback-control .current-song-cover {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
}

.playback-control .current-song-info {
  flex: 1;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
}

.playback-control .control-buttons i {
  margin: 0 5px;
  cursor: pointer;
}

/* 文字滚动样式 */
marquee {
  display: block;
  white-space: nowrap;
  overflow: hidden;
}

/* 响应式布局 */
@media (max-width: 480px) {
  /* 在这里添加适应手机屏幕的样式 */
}
</style>
