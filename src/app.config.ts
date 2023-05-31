export default defineAppConfig({
  pages: [
    'pages/custom/index',
    'pages/default/index',
    'pages/my/index',
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
        pagePath: 'pages/custom/index',
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
