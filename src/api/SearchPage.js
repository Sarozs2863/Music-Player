import request from '@/utils/request'

export const getSearchResult = (keywords) => {
  return request.get('/cloudsearch', {
    params: {
      keywords
    }
  })
}
