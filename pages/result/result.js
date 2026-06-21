// result.js
const { getDateInfo, generateText } = require('../../utils/dateInfo')

Page({
  data: {
    solarDate: '',
    lunarDate: '',
    solarTerm: '',
    festival: '',
    seasonPhase: '',
    content: '',
    displayContent: '',
    isPlaying: false
  },

  onLoad(options) {
    const date = options.date || ''
    if (!date) return

    const dateInfo = getDateInfo(date)
    const content = generateText(dateInfo)
    const showSolarTerm = dateInfo.daysFromSolarTerm === 0 ? dateInfo.solarTerm : ''

    this.setData({
      solarDate: dateInfo.solarDate,
      lunarDate: dateInfo.lunarDate,
      solarTerm: showSolarTerm,
      festival: dateInfo.festival,
      seasonPhase: dateInfo.seasonPhase,
      content: content
    })

    this.startPlayback(content)
  },

  startPlayback(content) {
    if (!content) return

    this.setData({ isPlaying: true, displayContent: '' })

    const chars = content.split('')
    let currentIndex = 0

    const playNext = () => {
      if (currentIndex >= chars.length) {
        this.setData({ isPlaying: false })
        return
      }

      const nextContent = this.data.displayContent + chars[currentIndex]
      this.setData({ displayContent: nextContent })

      currentIndex++

      const char = chars[currentIndex - 1]
      const delay = /[。！？；：、，,\.]/.test(char) ? 80 : 40
      setTimeout(playNext, delay)
    }

    setTimeout(playNext, 400)
  },

  replay() {
    const { content, isPlaying } = this.data
    if (isPlaying || !content) return
    this.startPlayback(content)
  },

  copy() {
    const { content } = this.data
    if (!content) return

    wx.setClipboardData({
      data: content,
      success: () => {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1500
        })
      },
      fail: () => {
        wx.showToast({
          title: '复制失败',
          icon: 'none',
          duration: 1500
        })
      }
    })
  }
})