// dateInfo.js
// 日期信息获取模块

/**
 * 根据公历日期获取日期信息
 * @param {string} dateString - 公历日期字符串，例如 '2026-06-19'
 * @returns {Object} 日期信息对象
 */
function getDateInfo(dateString) {
  // 解析日期
  const [year, month, day] = dateString.split('-').map(Number)

  // Mock 数据，后续可接入真实 API 或算法
  return {
    solarDate: dateString,                    // 公历日期
    lunarDate: '五月廿四',                     // 农历日期
    solarTerm: '夏至',                         // 节气
    festival: '',                              // 节日
    seasonPhase: '仲夏'                        // 季节阶段
  }
}

module.exports = {
  getDateInfo
}