import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/views/LayOut/LayOut.vue'
import HomePage from '@/views/LayOut/HomePage/HomePage.vue'
import MyPage from '@/views/LayOut/MyPage.vue'
import SearchPage from '@/views/LayOut/SearchPage.vue'
import SongListDetail from '@/views/SongListDetail/SongListDetail.vue'
import PlayPage from '@/views/PlayPage/PlayPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayOut,
    redirect: '/homepage',
    children: [
      { path: '/homepage', component: HomePage },
      { path: '/mypage', component: MyPage },
      { path: '/searchpage', component: SearchPage }
    ]
  },
  { path: '/songlistdetail', component: SongListDetail },
  {
    path: '/playpage', component: PlayPage
  }
]

const router = new VueRouter({
  routes
})

export default router
