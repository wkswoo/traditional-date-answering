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
 * 输出长度：90-160字
 * 风格：判词感、断语感、古风短评感
 */
function generateText(dateInfo) {
  const {
    solarDate, weekday, lunarYear, lunarMonth, lunarDay,
    ganzhiYear, ganzhiMonth, ganzhiDay,
    solarTerm, daysFromSolarTerm, nextSolarTerm, daysToNextSolarTerm,
    festival, daysToFestival,
    moonPhase, seasonPhase, dayOfYear
  } = dateInfo

  // 优先级1: 节日当天
  if (festival) {
    return generateFestivalText(dateInfo)
  }

  // 优先级2: 节气当天
  if (solarTerm && daysFromSolarTerm === 0) {
    return generateSolarTermText(dateInfo)
  }

  // 优先级3: 节气前后3天
  if (solarTerm && daysFromSolarTerm > 0 && daysFromSolarTerm <= 3) {
    return generateNearSolarTermText(dateInfo)
  }

  // 优先级4: 农历特殊日
  if (lunarDay === 1 || lunarDay === 15 || lunarDay >= 28) {
    return generateSpecialLunarDayText(dateInfo)
  }

  // 优先级5: 根据干支、月相、农历日生成
  return generateDailyText(dateInfo)
}

/**
 * 生成节日判词
 */
function generateFestivalText(dateInfo) {
  const { festival, ganzhiYear, ganzhiDay, moonPhase, seasonPhase } = dateInfo

  const festivalTexts = {
    '春节': `${ganzhiYear}岁首，万象更始。${ganzhiDay}值日，天地交泰，${moonPhase}悬空，阴阳和合。爆竹声中辞旧岁，春风送暖入屠苏。此日阳气初生，万物萌动，宜静心体悟岁月流转，感念天地生生不息之德。`,
    '元宵': `${ganzhiYear}年上元之夜，${ganzhiDay}当值。${moonPhase}当空，灯火万家。火树银花合，星桥铁锁开。月圆人团圆，此夜赏灯品茗，承千年雅俗，寄美好祝愿。月华如水，映照人间团圆之意。`,
    '清明': `${ganzhiYear}年清明，${ganzhiDay}值日。气清景明，草木萌发。${moonPhase}悬于天际，天地一片清朗。此乃慎终追远之期，祭祖扫墓，缅怀先人。春和景明，万物生发，宜踏青郊野，感悟生命轮回。`,
    '端午': `${ganzhiYear}年端午，${ganzhiDay}值日。${moonPhase}当空，仲夏阳气正盛。龙舟竞渡，粽叶飘香，承屈原忠贞之志。五月五日午，艾草悬门，驱邪避秽。此日宜登高望远，品味传统文化之深厚。`,
    '中秋': `${ganzhiYear}年中秋，${ganzhiDay}值日。${moonPhase}当空，桂花飘香。明月几时有，把酒问青天。月圆人团圆，此夜赏月品茗，寄托思乡之情。月华如练，映照古今，承载华夏民族对团圆之向往。`,
    '重阳': `${ganzhiYear}年重阳，${ganzhiDay}值日。${moonPhase}悬空，秋高气爽。登高望远，插茱萸，饮菊酒。独在异乡为异客，每逢佳节倍思亲。此日宜敬老尊贤，感念亲恩，登高而望，天地辽阔。`,
    '冬至': `${ganzhiYear}年冬至，${ganzhiDay}值日。阴极之至，阳气始生。${moonPhase}悬于天际，日影最长。古人云冬至大如年，此日宜静养身心，顺应阴阳消长。寒极而暖生，冬尽而春至，天地循环不息。`,
    '七夕': `${ganzhiYear}年七夕，${ganzhiDay}值日。${moonPhase}之夜，银汉迢迢。纤云弄巧，飞星传恨，牛郎织女鹊桥相会。此夜仰望星空，感念忠贞爱情，愿有情人终成眷属，岁月静好。`,
    '除夕': `${ganzhiYear}年除夕，${ganzhiDay}值日。爆竹声中一岁除，春风送暖入屠苏。${moonPhase}悬空，万家灯火通明。辞旧迎新，守岁纳福，此夜宜静心回顾，感恩岁月馈赠，期盼来年顺遂。`,
    '元旦': `${ganzhiYear}年元旦，${ganzhiDay}值日。岁首之始，万象更新。${moonPhase}当空，天地同春。此日宜展望未来，开启新年征程。愿新的一年，风调雨顺，国泰民安。`,
    '国庆': `${ganzhiYear}年国庆，${ganzhiDay}值日。金秋十月，举国同庆。${moonPhase}悬空，山河壮丽。此日宜感念家国情怀，珍惜和平岁月，为祖国繁荣昌盛贡献力量。`
  }

  return festivalTexts[festival] || `${festival}之日，${ganzhiYear}年，${ganzhiDay}值日。${moonPhase}悬空，${seasonPhase}时节。此日宜静心体悟，感念天地之德。`
}

/**
 * 生成节气判词
 */
function generateSolarTermText(dateInfo) {
  const { solarTerm, ganzhiYear, ganzhiDay, moonPhase, seasonPhase } = dateInfo

  const solarTermTexts = {
    '立春': `${ganzhiYear}年立春，${ganzhiDay}值日。东风解冻，蛰虫始振，万物复苏。${moonPhase}悬空，春为岁首，四时之始。天地间生机盎然，阳气升腾，草木萌动。此日宜舒展身心，感受春之气息，体悟天地生生不息之德。`,
    '雨水': `${ganzhiYear}年雨水，${ganzhiDay}值日。天气回暖，冰雪消融。${moonPhase}当空，好雨知时节，当春乃发生。草木萌动，鸿雁北归。春雨润物无声，滋养大地，万物得此甘霖，皆显蓬勃之态。`,
    '惊蛰': `${ganzhiYear}年惊蛰，${ganzhiDay}值日。${moonPhase}悬空，春雷乍动，惊醒蛰伏之虫。桃始华，仓庚鸣，鹰化为鸠。万物生机勃发，阳气升腾，宜舒展筋骨，感受天地间蓬勃生命之力。`,
    '春分': `${ganzhiYear}年春分，${ganzhiDay}值日。昼夜等长，阴阳相半。${moonPhase}当空，燕飞南北，雷发声，始电。春和景明，万物生长，宜踏青赏花，感受天地和谐之美，体悟自然平衡之道。`,
    '清明': `${ganzhiYear}年清明，${ganzhiDay}值日。气清景明，万物皆显。${moonPhase}悬空，桐始华，虹始见。风和日丽，草木繁茂，天地间一片清朗。宜亲近自然，感受春之盛景，珍惜光阴。`,
    '谷雨': `${ganzhiYear}年谷雨，${ganzhiDay}值日。雨生百谷，万物逢时。${moonPhase}当空，萍始生，鸣鸠拂其羽。雨水丰沛，百谷茁壮。此乃春季最后一个节气，宜顺应农时，期待秋之收获。`,
    '立夏': `${ganzhiYear}年立夏，${ganzhiDay}值日。${moonPhase}悬空，斗指东南，维为立夏。蝼蝈鸣，蚯蚓出，王瓜生。夏之始也，万物繁茂，天地始交。宜养心安神，顺应夏日阳气旺盛之特点。`,
    '小满': `${ganzhiYear}年小满，${ganzhiDay}值日。${moonPhase}当空，小满小满，麦粒渐满。苦菜秀，靡草死，麦秋至。夏熟作物籽粒渐饱满，然尚未成熟。小满者，满而不损，满而不盈，蕴含中庸之道。`,
    '芒种': `${ganzhiYear}年芒种，${ganzhiDay}值日。${moonPhase}悬空，螳螂生，鵙始鸣。麦黄稻绿，农事繁忙。芒种寓意有芒之谷可播种，宜勤勉耕耘，把握农时，不负天时地利。`,
    '夏至': `${ganzhiYear}年夏至，${ganzhiDay}值日。${moonPhase}当空，夏至一阴生，日长之至。鹿角解，蝉始鸣，半夏生。白昼最长，阳气极盛，阴气始萌。宜静心宁神，顺应阴阳消长，调和身心以度盛夏。`,
    '小暑': `${ganzhiYear}年小暑，${ganzhiDay}值日。${moonPhase}悬空，温风至，蟋蟀居壁。暑气渐盛，天地如蒸笼。宜清心寡欲，避暑纳凉，饮食清淡，保养精气，以安然度过炎夏。`,
    '大暑': `${ganzhiYear}年大暑，${ganzhiDay}值日。${moonPhase}当空，腐草为萤，土润溽暑。一年中最热之时，阳气极盛。宜静心养性，避免暑气侵扰，待暑退凉生，自有清风徐来。`,
    '立秋': `${ganzhiYear}年立秋，${ganzhiDay}值日。${moonPhase}悬空，凉风至，白露降，寒蝉鸣。秋之始也，阳气渐收，阴气渐长。宜收敛神气，使志安宁，顺应秋收之气，为冬藏做准备。`,
    '处暑': `${ganzhiYear}年处暑，${ganzhiDay}值日。${moonPhase}当空，鹰乃祭鸟，天地始肃。暑气渐消，秋意渐浓。宜早睡早起，与鸡俱兴，调养肺气，感受秋之清爽。`,
    '白露': `${ganzhiYear}年白露，${ganzhiDay}值日。${moonPhase}悬空，鸿雁来，玄鸟归。露凝而白，秋意渐浓。阴阳之气开始转换，宜保暖养阴，感受秋之静美，珍惜天高云淡之时。`,
    '秋分': `${ganzhiYear}年秋分，${ganzhiDay}值日。${moonPhase}当空，雷始收声，蛰虫坯户。阴阳相半，秋色平分。宜调养身心，保持平和心境，感受秋之中正之美，体悟自然平衡之道。`,
    '寒露': `${ganzhiYear}年寒露，${ganzhiDay}值日。${moonPhase}悬空，鸿雁来宾，菊有黄华。露气寒冷，将凝结成霜。宜添衣保暖，养阴防燥，感受秋之深沉，品味岁月静好。`,
    '霜降': `${ganzhiYear}年霜降，${ganzhiDay}值日。${moonPhase}当空，豺乃祭兽，草木黄落。秋之末也，霜华满地，天地萧瑟。宜防寒保暖，养精蓄锐，静待冬之来临。`,
    '立冬': `${ganzhiYear}年立冬，${ganzhiDay}值日。${moonPhase}悬空，水始冰，地始冻。冬之始也，万物收藏。宜温补养阳，早睡晚起，顺应冬藏之理，为来年积蓄能量。`,
    '小雪': `${ganzhiYear}年小雪，${ganzhiDay}值日。${moonPhase}当空，虹藏不见，天气上升地气下降。雪意渐浓，天地清寒。宜温养身心，感受冬之静谧，品味岁月沉淀。`,
    '大雪': `${ganzhiYear}年大雪，${ganzhiDay}值日。${moonPhase}悬空，鹖鴠不鸣，虎始交。雪盛也，天寒地冻。宜保暖养藏，感受冬之壮美，静待瑞雪兆丰年。`,
    '冬至': `${ganzhiYear}年冬至，${ganzhiDay}值日。${moonPhase}当空，蚯蚓结，麋角解，水泉动。阴极之至，阳气始生，日影最长。古人云冬至大如年，此日宜静养身心，顺应阴阳消长，期待春回大地。`,
    '小寒': `${ganzhiYear}年小寒，${ganzhiDay}值日。${moonPhase}悬空，雁北乡，鹊始巢。寒气渐盛，然阳气已动。宜温补养肾，防寒保暖，感受冬之严寒中蕴含的生机。`,
    '大寒': `${ganzhiYear}年大寒，${ganzhiDay}值日。${moonPhase}当空，鸡乳，征鸟厉疾。一年中最冷之时，然春意已近。宜静心养性，感受冬尽春来之际，天地循环不息。`
  }

  return solarTermTexts[solarTerm] || `${solarTerm}之日，${ganzhiYear}年，${ganzhiDay}值日。${moonPhase}悬空，${seasonPhase}时节。天地之气流转，宜静心体悟自然之德。`
}

/**
 * 生成节气前后判词
 */
function generateNearSolarTermText(dateInfo) {
  const { solarTerm, daysFromSolarTerm, ganzhiDay, moonPhase, nextSolarTerm, daysToNextSolarTerm, seasonPhase } = dateInfo

  const templates = [
    `${solarTerm}初过，天地之气渐变。${ganzhiDay}值日，${moonPhase}悬空。阴阳消长，万物应时而动。${nextSolarTerm}将至，尚余${daysToNextSolarTerm}日。${seasonPhase}时节，宜静心体悟节气更替，感受天地间微妙变化。`,
    `${solarTerm}已过二日，气机流转。${ganzhiDay}当值，${moonPhase}映照天际。${seasonPhase}渐深，${nextSolarTerm}在望，距之${daysToNextSolarTerm}日。阴阳之气消长，宜顺应节气变化，调摄身心以应时令。`,
    `${solarTerm}已过三日，天时渐移。${ganzhiDay}值日，${moonPhase}悬空。${seasonPhase}时节，${nextSolarTerm}渐近，还有${daysToNextSolarTerm}日。万物应时而动，宜顺应节气更替，感受天地循环之妙。`
  ]

  return templates[daysFromSolarTerm - 1] || templates[0]
}

/**
 * 生成农历特殊日判词
 */
function generateSpecialLunarDayText(dateInfo) {
  const { lunarDay, ganzhiDay, ganzhiMonth, moonPhase, seasonPhase, lunarMonth } = dateInfo

  if (lunarDay === 1) {
    return `${ganzhiMonth}月朔日，${ganzhiDay}值日。${moonPhase}悬空，月相初生。${seasonPhase}时节，万物待发。朔日之时，阳气始萌，宜静心养气，开启新的一月。月华如钩，暗藏生机，顺应自然，积蓄力量。`
  }

  if (lunarDay === 15) {
    return `${ganzhiMonth}月望日，${ganzhiDay}值日。${moonPhase}当空，月华圆满。${seasonPhase}时节，阴阳平衡。望日之夜，月华如练，宜赏月品茗，感受天地和谐。月圆人安，静心体悟自然之美。`
  }

  if (lunarDay >= 28) {
    const dayDesc = lunarDay === 28 ? '廿八' : lunarDay === 29 ? '廿九' : '三十'
    return `${ganzhiMonth}月${dayDesc}，${ganzhiDay}值日。${moonPhase}悬空，月将晦。${seasonPhase}时节，月相渐隐。晦日之时，阴气渐盛，宜静心回顾一月得失，养精蓄锐，静待新月。`
  }

  return generateDailyText(dateInfo)
}

/**
 * 生成日常判词
 */
function generateDailyText(dateInfo) {
  const { ganzhiDay, ganzhiMonth, moonPhase, seasonPhase, lunarDay, lunarMonth } = dateInfo

  // 根据干支日生成不同描述
  const dayGanZhiDesc = {
    '甲子': '甲子值日，阳木阴水，万物萌发。',
    '乙丑': '乙丑值日，阴木阴土，草木扎根。',
    '丙寅': '丙寅值日，阳木阳火，生机勃发。',
    '丁卯': '丁卯值日，阴火阴木，温和生长。',
    '戊辰': '戊辰值日，阳土阳土，稳固根基。',
    '己巳': '己巳值日，阴土阴火，温润滋养。',
    '庚午': '庚午值日，阳金阳火，刚柔并济。',
    '辛未': '辛未值日，阴金阴土，细腻温润。',
    '壬申': '壬申值日，阳水阳金，流动清冽。',
    '癸酉': '癸酉值日，阴水阴金，柔润光泽。',
    '甲戌': '甲戌值日，阳木阳土，刚健稳固。',
    '乙亥': '乙亥值日，阴木阴水，柔顺滋养。',
    '丙子': '丙子值日，阳火阳水，光明温暖。',
    '丁丑': '丁丑值日，阴火阴土，温和厚实。',
    '戊寅': '戊寅值日，阳土阳木，稳固生长。',
    '己卯': '己卯值日，阴土阴木，温润滋养。',
    '庚辰': '庚辰值日，阳金阳土，刚健稳固。',
    '辛巳': '辛巳值日，阴金阴火，细腻温润。',
    '壬午': '壬午值日，阳水阳火，流动温暖。',
    '癸未': '癸未值日，阴水阴土，柔润滋养。',
    '甲申': '甲申值日，阳木阳金，刚健清冽。',
    '乙酉': '乙酉值日，阴木阴金，柔顺光泽。',
    '丙戌': '丙戌值日，阳火阳土，光明稳固。',
    '丁亥': '丁亥值日，阴火阴水，温和滋养。',
    '戊子': '戊子值日，阳土阳水，稳固流动。',
    '己丑': '己丑值日，阴土阴土，温润厚实。',
    '庚寅': '庚寅值日，阳金阳木，刚健生长。',
    '辛卯': '辛卯值日，阴金阴木，细腻滋养。',
    '壬辰': '壬辰值日，阳水阳土，流动稳固。',
    '癸巳': '癸巳值日，阴水阴火，柔润温润。',
    '甲午': '甲午值日，阳木阳火，生机温暖。',
    '乙未': '乙未值日，阴木阴土，柔顺滋养。',
    '丙申': '丙申值日，阳火阳金，光明清冽。',
    '丁酉': '丁酉值日，阴火阴金，温和光泽。',
    '戊戌': '戊戌值日，阳土阳土，稳固厚实。',
    '己亥': '己亥值日，阴土阴水，温润滋养。',
    '庚子': '庚子值日，阳金阳水，刚健流动。',
    '辛丑': '辛丑值日，阴金阴土，细腻厚实。',
    '壬寅': '壬寅值日，阳水阳木，流动生长。',
    '癸卯': '癸卯值日，阴水阴木，柔润滋养。',
    '甲辰': '甲辰值日，阳木阳土，刚健稳固。',
    '乙巳': '乙巳值日，阴木阴火，柔顺温润。',
    '丙午': '丙午值日，阳火阳火，光明炽热。',
    '丁未': '丁未值日，阴火阴土，温和滋养。',
    '戊申': '戊申值日，阳土阳金，稳固清冽。',
    '己酉': '己酉值日，阴土阴金，温润光泽。',
    '庚戌': '庚戌值日，阳金阳土，刚健稳固。',
    '辛亥': '辛亥值日，阴金阴水，细腻滋养。',
    '壬子': '壬子值日，阳水阳水，流动充沛。',
    '癸丑': '癸丑值日，阴水阴土，柔润厚实。',
    '甲寅': '甲寅值日，阳木阳木，生机勃发。',
    '乙卯': '乙卯值日，阴木阴木，柔顺生长。',
    '丙辰': '丙辰值日，阳火阳土，光明稳固。',
    '丁巳': '丁巳值日，阴火阴火，温和温润。',
    '戊午': '戊午值日，阳土阳火，稳固温暖。',
    '己未': '己未值日，阴土阴土，温润滋养。',
    '庚申': '庚申值日，阳金阳金，刚健清冽。',
    '辛酉': '辛酉值日，阴金阴金，细腻光泽。',
    '壬戌': '壬戌值日，阳水阳土，流动稳固。',
    '癸亥': '癸亥值日，阴水阴水，柔润充沛。'
  }

  const dayDesc = dayGanZhiDesc[ganzhiDay] || `${ganzhiDay}值日，天地之气流转。`

  // 根据月相生成不同描述
  const moonPhaseDescs = {
    '新月': '新月如钩，暗藏生机。',
    '蛾眉月': '蛾眉月现，生机渐显。',
    '上弦月': '上弦月明，阴阳平衡。',
    '盈凸月': '月将圆满，阳气渐盛。',
    '满月': '满月当空，阴阳调和。',
    '亏凸月': '月渐亏缺，阴气渐生。',
    '下弦月': '下弦月明，阴阳平衡。',
    '残月': '残月将晦，阴气渐盛。'
  }

  const moonDesc = moonPhaseDescs[moonPhase] || '月相流转，阴阳消长。'

  // 根据农历日生成不同描述
  const lunarDayDescs = [
    '朔后初生，阳气始萌。',
    '新月渐满，生机渐显。',
    '月相渐盈，万物生长。',
    '上弦将至，阳气升腾。',
    '月将盈满，阴阳调和。',
    '月近盈满，生机旺盛。',
    '月将圆满，阴阳平衡。',
    '月近圆满，万物繁茂。',
    '月将圆满，天地和谐。',
    '月近圆满，生机盎然。',
    '月将圆满，阴阳调和。',
    '月近圆满，万物生长。',
    '月将圆满，天地和谐。',
    '月近圆满，生机旺盛。',
    '月将圆满，阴阳平衡。',
    '月近圆满，万物繁茂。',
    '月将圆满，天地和谐。',
    '月近圆满，生机盎然。',
    '月将圆满，阴阳调和。',
    '月近圆满，万物生长。',
    '月将圆满，天地和谐。',
    '月近圆满，生机旺盛。',
    '月将圆满，阴阳平衡。',
    '月近圆满，万物繁茂。',
    '月将圆满，天地和谐。',
    '月近圆满，生机盎然。',
    '月将圆满，阴阳调和。',
    '月近圆满，万物生长。',
    '月将圆满，天地和谐。',
    '月近圆满，生机旺盛。'
  ]

  const lunarDesc = lunarDayDescs[lunarDay - 1] || '月相流转，阴阳消长。'

  // 组合生成判词
  return `${ganzhiMonth}月${lunarMonth}日，${ganzhiDay}值日。${moonPhase}悬空，${moonDesc}${dayDesc}${lunarDesc}${seasonPhase}时节，天地之气流转，宜静心体悟自然之德，感受四时变化之妙。`
}

module.exports = {
  getDateInfo,
  generateText
}