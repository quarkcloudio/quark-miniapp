module.exports = {
  env: {
    NODE_ENV: '"development"',
    API_HOST: '"http://127.0.0.1:3000"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api/': {
          target: "http://127.0.0.1:3000",
          pathRewrite: { '^/api': '/api' },
          changeOrigin: true
        }
      }
    }
  },
}
