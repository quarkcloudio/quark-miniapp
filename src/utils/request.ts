import Taro from '@tarojs/taro'

/**
 * 发起网络请求
 * @description 发起网络请求
 * @param {String} url 请求连接
 * @param {Object} options 请求属性
 */
const request = async (url, options) => {
  if (Taro.getEnv() !== "WEB") {
    url = process.env.API_HOST + url;
  }

  var token = Taro.getStorageSync('token')
  if (!token) {
    token = ''
  }

  var res = await Taro.request({
    url: url,
    data: options.data,
    method: options.method,
    header: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.data;
}

export default request