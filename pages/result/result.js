// result.js
Page({
  data: {
    solarDate: '',
    lunarDate: ''
  },

  onLoad(options) {
    const date = options.date || ''
    this.setData({
      solarDate: date
    })
    this.convertToLunar(date)
  },

  convertToLunar(dateStr) {
    if (!dateStr) return

    const [year, month, day] = dateStr.split('-').map(Number)

    // 简化的农历转换
    const lunarInfo = this.getLunarDate(year, month, day)

    this.setData({
      lunarDate: lunarInfo.date
    })
  },

  getLunarDate(year, month, day) {
    // 农历月份名称
    const lunarMonths = ['正月', '二月', '三月', '四月', '五月', '六月',
                         '七月', '八月', '九月', '十月', '冬月', '腊月']
    // 农历日期名称
    const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                       '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                       '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十']

    // 简化计算
    const lunarMonth = ((month + 10) % 12)
    const lunarDay = ((day + 28) % 30)

    const dateStr = `${lunarMonths[lunarMonth]}${lunarDays[lunarDay]}`

    return {
      date: dateStr
    }
  }
})