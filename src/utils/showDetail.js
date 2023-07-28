// 用于展示歌单详情,里面的歌曲

import { getListDetail } from '@/api/homepage'
export async function showDetail (id) {
  const res = await getListDetail(id, 10)
  console.log(res)
}
