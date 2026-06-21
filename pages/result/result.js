// result.js
const { getDateInfo, generateText } = require('../../utils/dateInfo')

Page({
  data: {
    solarDate: '',
    lunarDate: '',
    solarTerm: '',
    festival: '',
    seasonPhase: '',
    content: ''
  },

  onLoad(options) {
    const date = options.date || ''
    if (!date) return

    // 获取日期信息
    const dateInfo = getDateInfo(date)

    // 生成文案
    const content = generateText(dateInfo)

    // 更新页面数据
    this.setData({
      solarDate: dateInfo.solarDate,
      lunarDate: dateInfo.lunarDate,
      solarTerm: dateInfo.solarTerm,
      festival: dateInfo.festival,
      seasonPhase: dateInfo.seasonPhase,
      content: content
    })
  }
})