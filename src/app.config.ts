export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/engine/custom',
    'pages/engine/default',
    'pages/test/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7D7E80',
    selectedColor: '#fa2c19',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/home.png',
        selectedIconPath: 'assets/selected_home.png',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: 'assets/my.png',
        selectedIconPath: 'assets/selected_my.png',
      },
    ],
  },
  animation: false,
})
