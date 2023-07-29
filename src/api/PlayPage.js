import request from '@/utils/request'

export const getMusicUrl = (id) => {
  return request.get('/song/url/v1', {
    params: {
      id,
      level: 'standard'
    }
  })
}

export const getLyricString = (id) => {
  return request.get('/lyric', {
    params: {
      id
    }
  })
}
