module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,//小数点后几位
      viewportUnit: 'vw',//转成的单位
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'],//不需要转换的类
      minPixelValue: 1,//小于或等于1px的不转换成视窗单位
      mediaQuery: false
    }
  }
}
