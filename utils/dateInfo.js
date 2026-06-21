// dateInfo.js
// 日期信息获取模块

// 农历数据 1900-2100 年
const lunarInfo = [
  0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
  0x0d520
]

// 节气名称
const solarTermNames = [
  '小寒', '大寒', '立春', '雨水', '惊蛰', '春分',
  '清明', '谷雨', '立夏', '小满', '芒种', '夏至',
  '小暑', '大暑', '立秋', '处暑', '白露', '秋分',
  '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'
]

// 农历月份名称
const lunarMonthNames = ['正月', '二月', '三月', '四月', '五月', '六月',
                         '七月', '八月', '九月', '十月', '冬月', '腊月']

// 农历日期名称
const lunarDayNames = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                        '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                        '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十']

// 天干
const tianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
// 地支
const diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
// 生肖
const shengXiao = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']

// 星期名称
const weekdayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

// 农历月干支起始偏移（从正月开始）
const lunarMonthGanZhiOffset = 3 // 1900年正月为丙寅

/**
 * 返回农历年的总天数
 */
function getLunarYearDays(year) {
  let sum = 348
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    sum += (lunarInfo[year - 1900] & i) ? 1 : 0
  }
  return sum + getLeapMonthDays(year)
}

/**
 * 返回农历年闰月的天数
 */
function getLeapMonthDays(year) {
  if (getLeapMonth(year)) {
    return (lunarInfo[year - 1900] & 0x10000) ? 30 : 29
  }
  return 0
}

/**
 * 返回农历年闰哪个月，没有闰月返回0
 */
function getLeapMonth(year) {
  return lunarInfo[year - 1900] & 0xf
}

/**
 * 返回农历年某月的总天数
 */
function getLunarMonthDays(year, month) {
  return (lunarInfo[year - 1900] & (0x10000 >> month)) ? 30 : 29
}

/**
 * 公历转农历
 */
function solarToLunar(year, month, day) {
  const baseDate = new Date(1900, 0, 31)
  const targetDate = new Date(year, month - 1, day)

  let offset = Math.floor((targetDate - baseDate) / 86400000)

  let lunarYear = 1900
  let yearDays
  while (lunarYear < 2101 && offset > 0) {
    yearDays = getLunarYearDays(lunarYear)
    if (offset < yearDays) break
    offset -= yearDays
    lunarYear++
  }

  let lunarMonth = 1
  let leapMonth = getLeapMonth(lunarYear)
  let isLeap = false
  let monthDays

  while (lunarMonth < 13 && offset > 0) {
    if (leapMonth > 0 && lunarMonth === (leapMonth + 1) && !isLeap) {
      lunarMonth--
      isLeap = true
      monthDays = getLeapMonthDays(lunarYear)
    } else {
      monthDays = getLunarMonthDays(lunarYear, lunarMonth)
    }

    if (offset < monthDays) break
    offset -= monthDays

    if (isLeap && lunarMonth === (leapMonth + 1)) {
      isLeap = false
    }
    lunarMonth++
  }

  const lunarDay = offset + 1

  return {
    year: lunarYear,
    month: lunarMonth,
    day: lunarDay,
    isLeap: isLeap
  }
}

/**
 * 获取年份干支
 */
function getYearGanZhi(year) {
  const ganIndex = (year - 4) % 10
  const zhiIndex = (year - 4) % 12
  return tianGan[ganIndex] + diZhi[zhiIndex]
}

/**
 * 获取农历月份干支
 */
function getLunarMonthGanZhi(lunarYear, lunarMonth, isLeap) {
  // 计算从1900年正月到当前农历月的天数偏移
  let totalMonths = (lunarYear - 1900) * 12 + (lunarMonth - 1)

  // 如果是闰月，需要额外计算
  if (isLeap) {
    // 闰月的干支与该月相同
    const ganIndex = (totalMonths + lunarMonthGanZhiOffset) % 10
    const zhiIndex = (totalMonths + lunarMonthGanZhiOffset) % 12
    return tianGan[ganIndex] + diZhi[zhiIndex]
  }

  const ganIndex = (totalMonths + lunarMonthGanZhiOffset) % 10
  const zhiIndex = (totalMonths + lunarMonthGanZhiOffset) % 12
  return tianGan[ganIndex] + diZhi[zhiIndex]
}

/**
 * 获取农历日期干支
 */
function getLunarDayGanZhi(lunarYear, lunarMonth, lunarDay) {
  // 计算从1900年正月初一到当前农历日的天数偏移
  let totalDays = 0

  // 计算年份天数
  for (let y = 1900; y < lunarYear; y++) {
    totalDays += getLunarYearDays(y)
  }

  // 计算月份天数
  for (let m = 1; m < lunarMonth; m++) {
    totalDays += getLunarMonthDays(lunarYear, m)
  }

  // 加上当前月的天数
  totalDays += lunarDay - 1

  // 干支起始：1900年正月初一为甲辰日
  const baseOffset = 40
  const ganIndex = (totalDays + baseOffset) % 10
  const zhiIndex = (totalDays + baseOffset) % 12

  return tianGan[ganIndex] + diZhi[zhiIndex]
}

/**
 * 获取月相
 */
function getMoonPhase(year, month, day) {
  // 简化的月相计算（基于朔望月29.53天）
  // 1900年1月31日（农历正月初一）为新月
  const baseDate = new Date(1900, 0, 31)
  const targetDate = new Date(year, month - 1, day)
  const daysDiff = Math.floor((targetDate - baseDate) / 86400000)

  const lunarCycle = 29.53
  const phase = (daysDiff % lunarCycle + lunarCycle) % lunarCycle

  if (phase < 1.85) return '新月'
  if (phase < 7.38) return '蛾眉月'
  if (phase < 9.26) return '上弦月'
  if (phase < 13.17) return '盈凸月'
  if (phase < 16.69) return '满月'
  if (phase < 22.21) return '亏凸月'
  if (phase < 24.09) return '下弦月'
  return '残月'
}

/**
 * 计算某年某节气的日期
 */
function getSolarTermDate(year, index) {
  const termBase = [
    [1, 5], [1, 20], [2, 3], [2, 18], [3, 5], [3, 20],
    [4, 4], [4, 19], [5, 5], [5, 20], [6, 5], [6, 21],
    [7, 7], [7, 22], [8, 7], [8, 22], [9, 7], [9, 22],
    [10, 8], [10, 23], [11, 7], [11, 22], [12, 7], [12, 21]
  ]

  const [m, d] = termBase[index]
  let day = d

  const adjustment = Math.floor((year - 2000) / 4)
  if (index % 2 === 0) {
    day = d + Math.floor(adjustment / 10)
  } else {
    day = d + Math.floor(adjustment / 10)
  }

  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[2] = 29
  }

  if (day < 1) day = 1
  if (day > daysInMonth[m]) day = daysInMonth[m]

  return { month: m, day: day }
}

/**
 * 获取某日期的节气信息
 */
function getSolarTermInfo(year, month, day) {
  const termIndex = (month - 1) * 2
  let currentTerm = ''
  let daysFromTerm = 0
  let nextTerm = ''
  let daysToNext = 0

  // 检查当前月和上个月的节气
  for (let i = -1; i <= 1; i++) {
    const idx = termIndex + i
    if (idx >= 0 && idx < 24) {
      const termDate = getSolarTermDate(year, idx)
      const termDateObj = new Date(year, termDate.month - 1, termDate.day)
      const currentDateObj = new Date(year, month - 1, day)
      const diff = Math.floor((currentDateObj - termDateObj) / 86400000)

      if (diff === 0) {
        currentTerm = solarTermNames[idx]
        daysFromTerm = 0
      } else if (diff > 0 && (currentTerm === '' || diff < daysFromTerm)) {
        currentTerm = solarTermNames[idx]
        daysFromTerm = diff
      }
    }
  }

  // 查找下一个节气
  for (let i = 0; i < 24; i++) {
    const idx = (termIndex + i) % 24
    let checkYear = year
    if (idx < termIndex) checkYear++

    const termDate = getSolarTermDate(checkYear, idx)
    const termDateObj = new Date(checkYear, termDate.month - 1, termDate.day)
    const currentDateObj = new Date(year, month - 1, day)
    const diff = Math.floor((termDateObj - currentDateObj) / 86400000)

    if (diff > 0) {
      nextTerm = solarTermNames[idx]
      daysToNext = diff
      break
    }
  }

  return {
    currentTerm,
    daysFromTerm,
    nextTerm,
    daysToNext
  }
}

/**
 * 获取时令（孟仲季）
 */
function getSeasonPhase(lunarMonth) {
  const phases = ['孟春', '仲春', '季春', '孟夏', '仲夏', '季夏',
                  '孟秋', '仲秋', '季秋', '孟冬', '仲冬', '季冬']
  return phases[(lunarMonth - 1) % 12]
}

/**
 * 获取传统节日信息
 */
function getFestivalInfo(lunarMonth, lunarDay, solarMonth, solarDay, lunarYear) {
  // 农历节日
  const lunarFestivals = {
    '1-1': '春节',
    '1-15': '元宵',
    '5-5': '端午',
    '7-7': '七夕',
    '7-15': '中元',
    '8-15': '中秋',
    '9-9': '重阳',
    '12-8': '腊八',
    '12-30': '除夕'
  }

  // 公历节日
  const solarFestivals = {
    '1-1': '元旦',
    '2-14': '情人节',
    '3-8': '妇女节',
    '3-12': '植树节',
    '4-1': '愚人节',
    '5-1': '劳动节',
    '5-4': '青年节',
    '6-1': '儿童节',
    '7-1': '建党节',
    '8-1': '建军节',
    '9-10': '教师节',
    '10-1': '国庆节',
    '12-25': '圣诞节'
  }

  // 优先返回传统农历节日
  const lunarKey = `${lunarMonth}-${lunarDay}`
  if (lunarFestivals[lunarKey]) {
    return { name: lunarFestivals[lunarKey], daysToFestival: 0 }
  }

  const solarKey = `${solarMonth}-${solarDay}`
  if (solarFestivals[solarKey]) {
    return { name: solarFestivals[solarKey], daysToFestival: 0 }
  }

  // 计算距离下一个节日的天数
  let minDays = 365
  let nextFestival = ''

  // 检查农历节日
  for (const [key, name] of Object.entries(lunarFestivals)) {
    const [fMonth, fDay] = key.split('-').map(Number)
    // 简化计算，假设同一年
    if (fMonth > lunarMonth || (fMonth === lunarMonth && fDay > lunarDay)) {
      const days = (fMonth - lunarMonth) * 30 + (fDay - lunarDay)
      if (days < minDays) {
        minDays = days
        nextFestival = name
      }
    }
  }

  return { name: '', daysToFestival: minDays }
}

/**
 * 获取一年中的第几天
 */
function getDayOfYear(year, month, day) {
  const date = new Date(year, month - 1, day)
  const start = new Date(year, 0, 1)
  return Math.floor((date - start) / 86400000) + 1
}

/**
 * 根据公历日期获取日期信息
 */
function getDateInfo(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)

  // 公历转农历
  const lunar = solarToLunar(year, month, day)

  // 获取星期
  const weekday = weekdayNames[new Date(year, month - 1, day).getDay()]

  // 获取干支
  const ganzhiYear = getYearGanZhi(lunar.year)
  const ganzhiMonth = getLunarMonthGanZhi(lunar.year, lunar.month, lunar.isLeap)
  const ganzhiDay = getLunarDayGanZhi(lunar.year, lunar.month, lunar.day)

  // 获取节气信息
  const solarTermInfo = getSolarTermInfo(year, month, day)

  // 获取节日信息
  const festivalInfo = getFestivalInfo(lunar.month, lunar.day, month, day, lunar.year)

  // 获取月相
  const moonPhase = getMoonPhase(year, month, day)

  // 获取时令
  const seasonPhase = getSeasonPhase(lunar.month)

  // 获取一年中的第几天
  const dayOfYear = getDayOfYear(year, month, day)

  // 农历日期字符串
  const lunarDateStr = (lunar.isLeap ? '闰' : '') + lunarMonthNames[lunar.month - 1] + lunarDayNames[lunar.day - 1]

  return {
    solarDate: dateString,
    weekday: weekday,
    lunarYear: lunar.year,
    lunarMonth: lunar.month,
    lunarDay: lunar.day,
    ganzhiYear: ganzhiYear,
    ganzhiMonth: ganzhiMonth,
    ganzhiDay: ganzhiDay,
    solarTerm: solarTermInfo.currentTerm,
    daysFromSolarTerm: solarTermInfo.daysFromTerm,
    nextSolarTerm: solarTermInfo.nextTerm,
    daysToNextSolarTerm: solarTermInfo.daysToNext,
    festival: festivalInfo.name,
    daysToFestival: festivalInfo.daysToFestival,
    moonPhase: moonPhase,
    seasonPhase: seasonPhase,
    dayOfYear: dayOfYear,
    lunarDate: lunarDateStr
  }
}

/**
 * 根据日期信息生成传统文化风格判词
 * 输出长度：180-280字
 * 结构：起句 → 展开 → 万物 → 映照 → 收束
 * 风格：万物生机版，润物细无声
 * 核心原则：由日级维度组合生成，而非时令决定
 */
function generateText(dateInfo) {
  const {
    solarDate, weekday, lunarYear, lunarMonth, lunarDay,
    ganzhiYear, ganzhiMonth, ganzhiDay,
    solarTerm, daysFromSolarTerm, nextSolarTerm, daysToNextSolarTerm,
    festival, daysToFestival,
    moonPhase, seasonPhase, dayOfYear
  } = dateInfo

  // 计算四个日级维度
  const solarTermPosition = getSolarTermPosition(dateInfo)
  const moonPhasePosition = getMoonPhasePosition(dateInfo)
  const lunarDayPosition = getLunarDayPosition(dateInfo)
  const dailyNature = getDailyNature(dateInfo)

  // 节日当天特殊处理（保留原有逻辑，因为节日本身就是日级特征）
  if (festival) {
    return generateFestivalText(dateInfo, solarTermPosition, moonPhasePosition, lunarDayPosition, dailyNature)
  }

  // 动态组合生成判词
  return composeText(dateInfo, solarTermPosition, moonPhasePosition, lunarDayPosition, dailyNature)
}

/**
 * 获取节气位置描述
 */
function getSolarTermPosition(dateInfo) {
  const { solarTerm, daysFromSolarTerm, nextSolarTerm, daysToNextSolarTerm } = dateInfo

  if (!solarTerm) {
    return {
      type: 'none',
      desc: '',
      detail: ''
    }
  }

  if (daysFromSolarTerm === 0) {
    return {
      type: 'term_day',
      desc: `${solarTerm}正位`,
      detail: `节气正位，气机转折`
    }
  }

  if (daysFromSolarTerm === 1) {
    return {
      type: 'term_after_1',
      desc: `${solarTerm}初过`,
      detail: `节气刚过，余韵犹在`
    }
  }

  if (daysFromSolarTerm === 2) {
    return {
      type: 'term_after_2',
      desc: `${solarTerm}已过二日`,
      detail: `节气渐远，气机渐稳`
    }
  }

  if (daysFromSolarTerm === 3) {
    return {
      type: 'term_after_3',
      desc: `${solarTerm}已过三日`,
      detail: `节气远逝，新气初生`
    }
  }

  if (daysToNextSolarTerm === 1) {
    return {
      type: 'term_before_1',
      desc: `${nextSolarTerm}将至`,
      detail: `新节气将临，气机酝酿`
    }
  }

  if (daysToNextSolarTerm === 2) {
    return {
      type: 'term_before_2',
      desc: `${nextSolarTerm}近在咫尺`,
      detail: `新节气渐近，气机微动`
    }
  }

  if (daysToNextSolarTerm === 3) {
    return {
      type: 'term_before_3',
      desc: `${nextSolarTerm}三日后至`,
      detail: `新节气在望，气机渐起`
    }
  }

  // 节气中段
  const midPoint = Math.floor((15 - daysFromSolarTerm) / 2)
  return {
    type: 'term_mid',
    desc: `${solarTerm}后${daysFromSolarTerm}日`,
    detail: `节气中段，气机平稳流转`
  }
}

/**
 * 获取月相位置描述
 */
function getMoonPhasePosition(dateInfo) {
  const { moonPhase, lunarDay } = dateInfo

  const phaseMap = {
    '新月': { type: 'new_moon', desc: '朔月', detail: '月始生，阳气初萌' },
    '蛾眉月': { type: 'crescent', desc: '蛾眉初生', detail: '月光微露，生机渐显' },
    '上弦月': { type: 'first_quarter', desc: '上弦月', detail: '月半明，阴阳相半' },
    '盈凸月': { type: 'waxing_gibbous', desc: '月渐盈', detail: '月光渐满，阳气渐盛' },
    '满月': { type: 'full_moon', desc: '望月', detail: '月圆满，阴阳调和' },
    '亏凸月': { type: 'waning_gibbous', desc: '月渐亏', detail: '月光渐减，阴气渐生' },
    '下弦月': { type: 'last_quarter', desc: '下弦月', detail: '月半明，阴阳相半' },
    '残月': { type: 'waning_crescent', desc: '残月将尽', detail: '月光将隐，阴气渐盛' }
  }

  return phaseMap[moonPhase] || { type: 'unknown', desc: '月', detail: '月相流转' }
}

/**
 * 获取农历日序描述
 */
function getLunarDayPosition(dateInfo) {
  const { lunarDay, lunarMonth, ganzhiMonth } = dateInfo

  if (lunarDay === 1) {
    return {
      type: 'month_start',
      desc: `${ganzhiMonth}月朔`,
      detail: '月始，阳气初生'
    }
  }

  if (lunarDay === 2) {
    return {
      type: 'month_2',
      desc: '朔后一日',
      detail: '月始生，生机初显'
    }
  }

  if (lunarDay === 3) {
    return {
      type: 'month_3',
      desc: '朔后三日',
      detail: '月渐明，阳气渐升'
    }
  }

  if (lunarDay === 7) {
    return {
      type: 'month_7',
      desc: '初七',
      detail: '上弦将近，阴阳渐分'
    }
  }

  if (lunarDay === 8) {
    return {
      type: 'month_8',
      desc: '初八',
      detail: '上弦刚过，阳气渐盛'
    }
  }

  if (lunarDay === 14) {
    return {
      type: 'month_14',
      desc: '十四',
      detail: '望日前夕，月华将满'
    }
  }

  if (lunarDay === 15) {
    return {
      type: 'month_15',
      desc: `${ganzhiMonth}月望`,
      detail: '月中，阴阳平衡'
    }
  }

  if (lunarDay === 16) {
    return {
      type: 'month_16',
      desc: '望后一日',
      detail: '月渐亏，阴气始生'
    }
  }

  if (lunarDay === 21) {
    return {
      type: 'month_21',
      desc: '廿一',
      detail: '下弦将近，阴气渐盛'
    }
  }

  if (lunarDay === 22) {
    return {
      type: 'month_22',
      desc: '廿二',
      detail: '下弦刚过，阴气渐升'
    }
  }

  if (lunarDay === 27) {
    return {
      type: 'month_27',
      desc: '廿七',
      detail: '月末将近，阳气将藏'
    }
  }

  if (lunarDay === 28) {
    return {
      type: 'month_28',
      desc: '廿八',
      detail: '月末，阴气渐浓'
    }
  }

  if (lunarDay === 29) {
    return {
      type: 'month_29',
      desc: '廿九',
      detail: '晦日前夕，月将隐'
    }
  }

  if (lunarDay === 30) {
    return {
      type: 'month_end',
      desc: `${ganzhiMonth}月晦`,
      detail: '月终，阳气潜藏'
    }
  }

  // 普通日
  const dayGroup = Math.floor((lunarDay - 1) / 5)
  const groupDesc = [
    '月初上旬',
    '月中上旬',
    '月中',
    '月中下旬',
    '月末上旬',
    '月末'
  ]

  return {
    type: `month_mid_${dayGroup}`,
    desc: `${ganzhiMonth}月${lunarDay}日`,
    detail: groupDesc[dayGroup] || '月中流转'
  }
}

/**
 * 获取当天日性描述
 */
function getDailyNature(dateInfo) {
  const { ganzhiDay, dayOfYear } = dateInfo

  // 五行属性
  const wuxingMap = {
    '甲': '木', '乙': '木',
    '丙': '火', '丁': '火',
    '戊': '土', '己': '土',
    '庚': '金', '辛': '金',
    '壬': '水', '癸': '水'
  }

  const gan = ganzhiDay[0]
  const zhi = ganzhiDay[1]

  const ganWuxing = wuxingMap[gan] || '土'
  const zhiWuxing = wuxingMap[zhi] || '土'

  // 阴阳属性
  const yangGan = ['甲', '丙', '戊', '庚', '壬']
  const yangZhi = ['子', '寅', '辰', '午', '申', '戌']

  const ganYinYang = yangGan.includes(gan) ? '阳' : '阴'
  const zhiYinYang = yangZhi.includes(zhi) ? '阳' : '阴'

  // 根据五行和阴阳组合生成气质描述
  const natureTypes = [
    { conditions: ['木木', '木火'], type: '生发', desc: '生机盎然', detail: '木气旺盛，万物萌发' },
    { conditions: ['火火', '火土'], type: '渐盛', desc: '阳气渐盛', detail: '火气升腾，光华外扬' },
    { conditions: ['土土', '土木', '土金'], type: '盈满', desc: '万象丰茂', detail: '土气厚重，万物结实' },
    { conditions: ['金金', '金水'], type: '将敛', desc: '肃敛沉静', detail: '金气清冽，万物收束' },
    { conditions: ['水水', '水木'], type: '潜藏', desc: '潜藏孕育', detail: '水气充盈，万物蓄养' }
  ]

  let nature = { type: 'neutral', desc: '气机平和', detail: '天地之气，平和流转' }

  const wuxingCombo = ganWuxing + zhiWuxing
  for (const nt of natureTypes) {
    if (nt.conditions.includes(wuxingCombo)) {
      nature = nt
      break
    }
  }

  // 根据阴阳调整
  if (ganYinYang === '阳' && zhiYinYang === '阳') {
    nature.desc += '，阳气充足'
  } else if (ganYinYang === '阴' && zhiYinYang === '阴') {
    nature.desc += '，阴气内敛'
  } else {
    nature.desc += '，阴阳调和'
  }

  return nature
}

/**
 * 动态组合生成判词
 * 由四个日级维度共同决定，而非时令决定
 */
function composeText(dateInfo, solarTermPosition, moonPhasePosition, lunarDayPosition, dailyNature) {
  const { seasonPhase, ganzhiYear, ganzhiDay } = dateInfo

  // 万物描写库（根据日性动态选择，而非按时令固定）
  const wanwuLibrary = {
    '生发': [
      '草木萌动，芽尖初露，虫声初起于草际',
      '柳芽新绿，桃萼含苞，地气上腾',
      '冰雪消融，溪水解冻，春芽破土',
      '嫩芽初绽，蛰虫微动，露水轻凝',
      '阳气初生，万物复苏，生机萌动'
    ],
    '渐盛': [
      '枝叶舒展，绿意渐浓，光华外扬',
      '蝉声初鸣，暑气潜长，万物繁茂',
      '禾苗拔节，花开次第，生机盎然',
      '阳光渐盛，雨露滋润，草木向荣',
      '阳气渐升，万物茁壮，气势渐增'
    ],
    '盈满': [
      '万象丰茂，花果初成，气势充沛',
      '蝉鸣阵阵，荷香远溢，暑气正盛',
      '果实饱满，草木葱茏，生机鼎盛',
      '月华圆满，星光璀璨，万物丰盈',
      '阳气极盛，万物成熟，物性外达'
    ],
    '将敛': [
      '声息渐收，光色转沉，果实归实',
      '蝉声渐稀，秋叶初黄，金风送爽',
      '稻穗低垂，硕果累累，万物收束',
      '露水渐重，夜气微凉，草木开始凋零',
      '阴气渐生，阳气渐收，万物敛藏'
    ],
    '潜藏': [
      '露重夜长，地气回伏，群生敛迹',
      '虫声俱寂，草木休眠，天地清寒',
      '白雪皑皑，万物潜藏，静待春来',
      '阳气潜藏，阴气弥漫，天地沉静',
      '万物蛰伏，生机内藏，蓄势待发'
    ],
    'neutral': [
      '万物平和，气机流转，有条不紊',
      '阴阳调和，草木安然，虫声悠然',
      '天地沉静，万物有序，时节如常'
    ]
  }

  // 映照暗示库（根据日性动态选择）
  const yingzhaoLibrary = {
    '生发': [
      '当蓄而不泄，守而不发',
      '如草木之待雨，如虫鸟之候暖',
      '宜静守，待时机，不急不躁'
    ],
    '渐盛': [
      '当发而不躁，行而不急',
      '如草木之舒展，如虫鸟之欢鸣',
      '宜顺势而行，稳步推进'
    ],
    '盈满': [
      '当察而不急，待而不躁',
      '如花果之待熟，如日月之待明',
      '宜静观，知进退，不贪不躁'
    ],
    '将敛': [
      '当守而不发，蓄而不泄',
      '如草木之待霜，如虫鸟之备冬',
      '宜收敛，蓄元气，养精蓄锐'
    ],
    '潜藏': [
      '当藏而不露，蓄而不发',
      '如草木之待春，如虫鸟之待暖',
      '宜静养，蓄生机，静待天时'
    ],
    'neutral': [
      '当察而不急，待而不躁',
      '如天地之自然，如时节之流转',
      '宜平和，守中道，顺其自然'
    ]
  }

  // 收束语句库
  const shoushuLibrary = [
    '天地之气，流转不息，万物之动，皆有其时',
    '今日之气机，自有其序，顺之则和，逆之则失',
    '时节推移，气机流转，顺其自然，便是顺应生命',
    '天地有常，万物有序，今日之气，亦是自然之理'
  ]

  // 随机选择
  const randomPick = (arr) => arr[Math.floor(Math.random() * arr.length)]

  // 起句：节气位置 + 月相位置 + 日性，不按时令开头
  let qiju = ''
  if (solarTermPosition.type !== 'none') {
    qiju = `${solarTermPosition.desc}，${moonPhasePosition.desc}，${dailyNature.desc}`
  } else {
    qiju = `${lunarDayPosition.desc}，${moonPhasePosition.desc}，${dailyNature.desc}`
  }

  // 展开：详细描述各维度的内在节律
  let zhankai = ''
  const detailParts = []
  if (solarTermPosition.detail) detailParts.push(solarTermPosition.detail)
  if (moonPhasePosition.detail) detailParts.push(moonPhasePosition.detail)
  if (lunarDayPosition.detail) detailParts.push(lunarDayPosition.detail)
  if (dailyNature.detail) detailParts.push(dailyNature.detail)

  if (detailParts.length > 0) {
    zhankai = `${detailParts.join('，')}。此乃天地气机流转之至，亦是时节流转之必然。`
  } else {
    zhankai = '气机流转，时节推移，自有其序。'
  }

  // 万物：根据日性动态选择
  const wanwu = randomPick(wanwuLibrary[dailyNature.type] || wanwuLibrary['neutral'])

  // 映照：根据日性动态选择
  const yingzhao = randomPick(yingzhaoLibrary[dailyNature.type] || yingzhaoLibrary['neutral'])

  // 收束：随机选择
  const shoushu = randomPick(shoushuLibrary)

  // 组合成完整判词（seasonPhase只作为背景提及）
  const fullText = `${qiju}。${zhankai}此时天地之间，${wanwu}，万物之动，皆顺此气机而发。观万物之动，可见今日之气机：${yingzhao}。${shoushu}。`

  // 如果有seasonPhase，在适当位置插入作为背景
  if (seasonPhase) {
    const seasonInsertIndex = fullText.indexOf('万物之动')
    if (seasonInsertIndex > 0) {
      return fullText.slice(0, seasonInsertIndex) + `，${seasonPhase}之时` + fullText.slice(seasonInsertIndex)
    }
  }

  return fullText
}

/**
 * 生成节日判词（动态组合版）
 */
function generateFestivalText(dateInfo, solarTermPosition, moonPhasePosition, lunarDayPosition, dailyNature) {
  const { festival, ganzhiYear } = dateInfo

  const festivalInfo = {
    '春节': { desc: '岁首', detail: '万象更始，阳气初生' },
    '元宵': { desc: '上元', detail: '灯火万家，月圆之夜' },
    '清明': { desc: '清明', detail: '气清景明，草木繁茂' },
    '端午': { desc: '端午', detail: '仲夏正盛，阳气极盛' },
    '中秋': { desc: '中秋', detail: '月圆满，人团圆' },
    '重阳': { desc: '重阳', detail: '秋高气爽，金气厚重' },
    '冬至': { desc: '冬至', detail: '阴极阳生，天地循环' },
    '七夕': { desc: '七夕', detail: '银河鹊桥，双星相会' },
    '除夕': { desc: '除夕', detail: '辞旧迎新，万象待发' },
    '元旦': { desc: '元旦', detail: '岁首之始，万象更新' },
    '国庆': { desc: '国庆', detail: '金秋时节，山河壮丽' }
  }

  const info = festivalInfo[festival] || { desc: festival, detail: '佳节之时' }

  // 使用composeText框架，但加入节日特征
  const qiju = `${ganzhiYear}${info.desc}，${moonPhasePosition.desc}，${dailyNature.desc}`
  const zhankai = `${info.detail}，${moonPhasePosition.detail}，${dailyNature.detail}。此乃天地气机流转之至，亦是时节流转之必然。`

  const wanwuLibrary = {
    '生发': ['草木萌动，虫声初起，喜气洋洋'],
    '渐盛': ['枝叶舒展，暑气潜长，热闹非凡'],
    '盈满': ['万象丰茂，花果初成，团圆美满'],
    '将敛': ['声息渐收，果实归实，祥和安宁'],
    '潜藏': ['露重夜长，万物潜藏，静待春来'],
    'neutral': ['万物平和，喜气洋洋，佳节氛围']
  }

  const yingzhaoLibrary = {
    '生发': ['当蓄而不泄，守而不发，静待新春'],
    '渐盛': ['当发而不躁，行而不急，乐享佳节'],
    '盈满': ['当察而不急，待而不躁，珍惜团圆'],
    '将敛': ['当守而不发，蓄而不泄，感恩收获'],
    '潜藏': ['当藏而不露，蓄而不发，静待春来'],
    'neutral': ['当察而不急，待而不躁，享受当下']
  }

  const shoushu = '天地之气，流转不息，佳节之时，亦是自然之理。'

  const wanwu = wanwuLibrary[dailyNature.type]?.[0] || '万物祥和，佳节氛围浓厚'
  const yingzhao = yingzhaoLibrary[dailyNature.type]?.[0] || '享受当下，珍惜此刻'

  return `${qiju}。${zhankai}此时天地之间，${wanwu}，万物之动，皆顺此气机而发。观万物之动，可见今日之气机：${yingzhao}。${shoushu}`
}

module.exports = {
  getDateInfo,
  generateText
}