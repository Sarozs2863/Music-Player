<template>
  <div>
    <keep-alive :exclude="['PlayPage','SongListDetail']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
