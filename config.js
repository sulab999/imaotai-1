module.exports = {
  baseURL: 'https://h5.moutai519.com.cn/game/',
  cookie: process.env.MT_COOKIE || [
    'YX_SUPPORT_WEBP=1; MT-Device-ID-Wap=141E2B70-DFCB-4229-888F-AE696795E8A4; MT-Token-Wap=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtdCIsImV4cCI6MTY2NTEwODA4NiwidXNlcklkIjoxMTAxMDQ1NDI2LCJkZXZpY2VJZCI6IjE0MUUyQjcwLURGQ0ItNDIyOS04ODhGLUFFNjk2Nzk1RThBNCIsImlhdCI6MTY2MjUxNjA4Nn0.gleuabrEDIzuSJOyZdG3C2e7ln0JAs8K5gimAbOYnzA'
  ], // 小茅运 H5 页面请求 cookie
  deviceId: process.env.MT_DEVICEID || 'fffef784fec4e9f7acb49d0ee63d1abd', // User-Agent 里的 deviceId 值
  bark: process.env.BARK || 'https://api.day.app/4yUzZPkxJXS7TkyQXtEqaE' // bark 推送地址
}
