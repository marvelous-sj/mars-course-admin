import request from '@/utils/request'

const chapterApi = {
  list: '/admin/chapter-list'
}

export default chapterApi

export function getChapterList () {
  return request({
    url: chapterApi.list,
    method: 'get',
    baseURL: process.env.VUE_APP_API_LOCAL_URL
  })
}
