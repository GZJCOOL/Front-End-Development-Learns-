
// 正向导航栏
const routes = {

  // 发现音乐
  '/': {
    page: './index.html',
    title: 'Home  ',
    description: 'Home Page'
  },
  //专属定制
  '/exclusive': {
    page: './src/views/find_music/exclusive/exclusive.html',
    title: 'About Us ',
    description: 'About Us'
  },
  // 歌单
  '/songs_list': {
    page: './src/views/find_music/songs_list/songs_list.html',
    title: 'Our Services  ',
    description: 'Our Services'
  },
  // 排行榜
  '/rank_list': {
    page: './src/views/find_music/rank_list/rank_list.html',
    title: 'Contact Us ',
    description: 'Contact Us'
  },
  //歌手
  '/singers': {
    page: './src/views/find_music/singers/singer_list.html',
    title: 'Contact Us  ',
    description: 'Contact Us'
  },
  // 最新音乐
  '/newest_music': {
    page: './src/views/find_music/newest_music/newmusic1.html',
    title: 'Contact Us ',
    description: 'newmusic'
  },
  //播客
  '/blog': {
    page: './src/views/blog/blog.html',
    title: '播客 ',
    description: 'newmusic'
  }
  ,
  //视频
  '/video': {
    page: './src/views/video/video_v/video.html',
    title: '视频 ',
    description: 'newmusic'
  }
  ,
  //关注
  '/dynamic': {
    page: './src/views/follow/dynamic.html',
    title: '关注 ',
    description: 'newmusic'
  }
  ,
  //直播
  '/direct_sending': {
    page: './src/views/direct_sending/direct_sending.html',
    title: '直播 ',
    description: 'newmusic'
  }
  ,
  //私人FM
  '/personal_FM': {
    page: './src/views/',
    title: '私人FM ',
    description: 'newmusic'
  },
  //歌手简介
  '/singers_intro': {
    page: './src/views/singer/singer_intro.html',
    title: ' 歌手简介',
    description: 'singer'
  },
  // 每日歌曲推荐
  '/daysongs': {
    page: './src/views/find_music/per_recom/daysongs/daysongs.html',
    title: ' 每日歌曲推荐',
    description: 'daysongs'
  },
  // mv播放
  '/alone_mv': {
    page: './src/views/',
    title: ' mv播放',
    description: 'mv'
  },
  //获取歌单详情
  '/songs_detail': {
    page: './src/views/find_music/per_recom/daysongs/daysongs.html',
    title: ' 获取歌单详情',
    description: 'songs_detail'
  },


}
var i = false
const ifrm2 = document.getElementById('ifm2').contentWindow
ifrm2.addEventListener('load', () => {
  ifrm2.document.querySelector('.find_nav').addEventListener('click', (e) => {
    // console.log("ads");
    if (e.target.matches('a')) {
      e.preventDefault()
      useRoute1()
    }
  })
})
// 侧面导航
const ifrm3 = document.getElementById('ifm3').contentWindow
ifrm3.addEventListener('load', () => {
  ifrm3.document.querySelector('.nav_a').addEventListener('click', (e) => {
    // console.log("ads");
    if (e.target.matches('a')) {
      i = true
      e.preventDefault()
      useRoute2()
    }
  })
})

const useRoute1 = (e) => {
  e = e || window.event
  e.preventDefault()
  window.history.pushState({ page: window.location.pathname }, '', e.target.href)
  renderPage1()
}
// 侧面导航
const useRoute2 = (e) => {
  e = e || window.event
  e.preventDefault()
  window.history.pushState({ page: window.location.pathname }, '', e.target.href)
  renderPage2()
  // renderPage(regbody2, /<iframe src=".\/src\/views\/find_music\/nav\/nav.html id='ifm2' scrolling="no" height="65px" frameborder="0" width="100%">/, /<\/iframe>/,)
}
const reghead = /<head>[\s\S]*<\/head>/
const regbody2 = /<body>[\s\S]*<\/body>/
const regscript = /<script[\s\S]*><\/script>/
const regbody = /<div class="content">[\s\S]*<\/div>/
// const regbody2 = /<iframe src=".\/src\/views\/find_music\/nav\/nav.html id='ifm2' scrolling="no" height="65px" frameborder="0" width="100%">[\s\S]*<\/iframe>/
const renderPage1 = async () => {

  const location = window.location.pathname
  const route = routes[location] || routes[404]
  const response = await fetch(route.page)
  const data = await response.text()
  // let foot = regscript.exec(data)

  const head = reghead.exec(data)[0].replace('<head>', '').replace("</head>", '')
  let body = regbody.exec(data)[0].replace('<div class="content">', '').replace(/(.*)<\/div>/, '')

  document.getElementsByTagName('head')[0].innerHTML = head  // 头部
  document.querySelector('.content').innerHTML = body //身体

  document.title = route.title
  document.querySelector('meta[name="description"]')
    .setAttribute('content', route.description)
}
const renderPage2 = async () => {

  const location = window.location.pathname
  const route = routes[location] || routes[404]
  const response = await fetch(route.page)
  const data = await response.text()
  // let foot = regscript.exec(data)

  const head = reghead.exec(data)[0].replace('<head>', '').replace("</head>", '')
  let body = regbody2.exec(data)[0].replace('<body>', '').replace("</body>", '')
  // .replace(/<iframe src=".\/src\/views\/find_music\/nav\/nav.html id='ifm2' scrolling="no" height="65px" frameborder="0" width="100%">/, '').replace(/<\/iframe>?/, '')

  document.getElementsByTagName('head')[0].innerHTML = head  // 头部
  document.getElementsByTagName('body')[0].innerHTML = body //身体

  document.title = route.title
  document.querySelector('meta[name="description"]')
    .setAttribute('content', route.description)
}

window.onpopstate = renderPage1
window.onpopstate = renderPage2
window.useRoute = useRoute1
window.useRoute = useRoute2
// renderPage2()
renderPage1()


