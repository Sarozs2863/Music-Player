import request from '@/utils/request'

export const getSongList = () => {
  return request.get('/personalized?limit=12')
}

export const getListDetail = (id, limit) => {
  return request.get('/playlist/track/all', {
    params: {
      id,
      limit
    }
  })
}
