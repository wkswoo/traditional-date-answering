// index.js
Page({
  data: {
    date: ''
  },

  onLoad() {
    // 默认选中今天
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    this.setData({
      date: `${year}-${month}-${day}`
    })
  },

  onDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  startReading() {
    if (!this.data.date) {
      wx.showToast({
        title: '请先选择日期',
        icon: 'none'
      })
      return
    }
    wx.navigateTo({
      url: `/pages/result/result?date=${this.data.date}`
    })
  }
})