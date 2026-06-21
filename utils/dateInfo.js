// dateInfo.js
// 日期信息获取模块

// 农历数据 1900-2100 年
// 数据格式：每年用16位二进制表示
// 第1-4位表示闰月大小，0小月28天，1大月30天
// 第5-16位表示12个月的大小月，0小月29天，1大月30天
// 第17-20位表示闰月月份，0表示无闰月
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

// 节气数据表（1900-2100年每个节气的儒略日）
const solarTermInfo = [
  0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551,
  218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447,
  419210, 440795, 462224, 483532, 504758
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
  // 基准日期：1900年1月31日（农历1900年正月初一）
  const baseDate = new Date(1900, 0, 31)
  const targetDate = new Date(year, month - 1, day)

  // 计算偏移天数
  let offset = Math.floor((targetDate - baseDate) / 86400000)

  // 计算农历年
  let lunarYear = 1900
  let yearDays
  while (lunarYear < 2101 && offset > 0) {
    yearDays = getLunarYearDays(lunarYear)
    if (offset < yearDays) break
    offset -= yearDays
    lunarYear++
  }

  // 计算农历月和日
  let lunarMonth = 1
  let leapMonth = getLeapMonth(lunarYear)
  let isLeap = false
  let monthDays

  while (lunarMonth < 13 && offset > 0) {
    // 闰月
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
    isLeap: isLeap,
    yearGanZhi: tianGan[(lunarYear - 4) % 10] + diZhi[(lunarYear - 4) % 12],
    shengXiao: shengXiao[(lunarYear - 4) % 12]
  }
}

/**
 * 计算某年某节气的日期
 */
function getSolarTermDate(year, index) {
  // 使用寿星万年历算法简化版
  const century = Math.floor(year / 100)
  const y = year % 100

  // 每个节气对应的基准日期偏移（简化计算）
  const termBase = [
    [1, 5], [1, 20], [2, 3], [2, 18], [3, 5], [3, 20],
    [4, 4], [4, 19], [5, 5], [5, 20], [6, 5], [6, 21],
    [7, 7], [7, 22], [8, 7], [8, 22], [9, 7], [9, 22],
    [10, 8], [10, 23], [11, 7], [11, 22], [12, 7], [12, 21]
  ]

  const [m, d] = termBase[index]
  let day = d

  // 根据年份微调（简化算法）
  const adjustment = Math.floor((year - 2000) / 4)
  if (index % 2 === 0) {
    day = d + Math.floor(adjustment / 10)
  } else {
    day = d + Math.floor(adjustment / 10)
  }

  // 确保日期在合理范围内
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[2] = 29
  }

  if (day < 1) day = 1
  if (day > daysInMonth[m]) day = daysInMonth[m]

  return { month: m, day: day }
}

/**
 * 获取某日期的节气
 */
function getSolarTerm(year, month, day) {
  // 计算当月和前后月份的节气
  const termIndex = (month - 1) * 2

  for (let i = 0; i < 2; i++) {
    const idx = termIndex + i
    if (idx >= 0 && idx < 24) {
      const termDate = getSolarTermDate(year, idx)
      if (termDate.month === month && termDate.day === day) {
        return solarTermNames[idx]
      }
    }
  }

  return ''
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
 * 获取传统节日
 */
function getFestival(lunarMonth, lunarDay, solarMonth, solarDay) {
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
    return lunarFestivals[lunarKey]
  }

  const solarKey = `${solarMonth}-${solarDay}`
  if (solarFestivals[solarKey]) {
    return solarFestivals[solarKey]
  }

  return ''
}

/**
 * 根据公历日期获取日期信息
 * @param {string} dateString - 公历日期字符串，例如 '2026-06-19'
 * @returns {Object} 日期信息对象
 */
function getDateInfo(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)

  // 公历转农历
  const lunar = solarToLunar(year, month, day)

  // 获取节气
  const solarTerm = getSolarTerm(year, month, day)

  // 获取节日
  const festival = getFestival(lunar.month, lunar.day, month, day)

  // 获取时令
  const seasonPhase = getSeasonPhase(lunar.month)

  // 农历日期字符串
  const lunarDateStr = (lunar.isLeap ? '闰' : '') + lunarMonthNames[lunar.month - 1] + lunarDayNames[lunar.day - 1]

  return {
    solarDate: dateString,
    lunarDate: lunarDateStr,
    lunarYear: lunar.year,
    lunarMonth: lunar.month,
    lunarDay: lunar.day,
    yearGanZhi: lunar.yearGanZhi,
    shengXiao: lunar.shengXiao,
    solarTerm: solarTerm,
    festival: festival,
    seasonPhase: seasonPhase
  }
}

/**
 * 根据日期信息生成传统文化风格短文
 */
function generateText(dateInfo) {
  const { solarDate, lunarDate, solarTerm, festival, seasonPhase } = dateInfo

  // 节日相关文本
  const festivalTexts = {
    '春节': '爆竹声中一岁除，春风送暖入屠苏。春节乃岁首之节，万象更新，天地同春。家家户户张灯结彩，辞旧迎新，祈愿来年风调雨顺、国泰民安。此日宜与家人团聚，共享天伦之乐，感念岁月流转，珍惜当下时光。',
    '元宵': '火树银花合，星桥铁锁开。元宵佳节，月圆人团圆，灯火璀璨映照人间。此夜赏灯猜谜，品元宵之甜美，承千年之雅俗。月华如水，寄托美好祝愿，愿诸事圆满，阖家安康。',
    '清明': '清明时节雨纷纷，路上行人欲断魂。清明乃祭祖扫墓之期，慎终追远，缅怀先人。春和景明，草木萌发，天地清朗。此日宜踏青郊游，感悟生命轮回，铭记根本，传承家风。',
    '端午': '五月五日午，赠我一枝艾。端午佳节，龙舟竞渡，粽叶飘香。此节源于纪念屈原，传承忠贞爱国之精神。仲夏时节，阳气正盛，宜登高望远，品味传统文化之深厚底蕴。',
    '中秋': '明月几时有，把酒问青天。中秋佳节，月圆人团圆，桂花飘香满人间。此夜赏月品茗，寄托思乡之情，祈愿阖家幸福。月华如练，映照古今，承载着华夏民族对团圆的美好向往。',
    '重阳': '独在异乡为异客，每逢佳节倍思亲。重阳佳节，登高望远，插茱萸，饮菊酒。秋高气爽，金风送凉，此日宜敬老尊贤，感念亲恩。登高而望，天地辽阔，心胸亦随之开阔。',
    '冬至': '天时人事日相催，冬至阳生春又来。冬至乃阴极之至，阳气始生，日影最长。古人云冬至大如年，此日宜静心养性，顺应阴阳消长之理。寒极而暖生，冬尽而春至，天地循环，生生不息。',
    '七夕': '纤云弄巧，飞星传恨，银汉迢迢暗度。七夕佳节，牛郎织女鹊桥相会，人间乞巧祈福。此夜仰望星空，感念忠贞爱情，愿有情人终成眷属，岁月静好，情深意长。',
    '除夕': '爆竹声中一岁除，春风送暖入屠苏。除夕之夜，辞旧迎新，万家灯火通明。阖家团圆，守岁纳福，共话一年收获。此夜宜静心回顾，感恩岁月馈赠，期盼来年顺遂安康。'
  }

  // 节气相关文本
  const solarTermTexts = {
    '立春': '立春一日，百草回芽。东风解冻，蛰虫始振，万物复苏。春为岁首，四时之始，天地间生机盎然。此时宜舒展身心，感受春之气息，顺应自然，开启新一年的耕耘与希望。',
    '雨水': '好雨知时节，当春乃发生。雨水时节，天气回暖，冰雪消融，降水渐增。草木萌动，鸿雁北归。春雨润物无声，滋养大地，万物得此甘霖，皆显蓬勃之态。',
    '惊蛰': '微雨众卉新，一雷惊蛰始。春雷乍动，惊醒蛰伏之虫，万物生机勃发。桃始华，仓庚鸣，鹰化为鸠。此时阳气升腾，宜舒展筋骨，感受天地间蓬勃的生命力量。',
    '春分': '仲春初四日，春色正中分。昼夜等长，阴阳相半，万物生长。燕飞南北，雷发声，始电。此时春和景明，宜踏青赏花，感受天地和谐之美，体悟自然平衡之道。',
    '清明': '清明时节，气清景明，万物皆显。桐始华，田鼠化为鴽，虹始见。此时风和日丽，草木繁茂，天地间一片清朗。宜亲近自然，感受春之盛景，珍惜光阴。',
    '谷雨': '雨生百谷，万物逢时。萍始生，鸣鸠拂其羽，戴胜降于桑。谷雨乃春季最后一个节气，雨水丰沛，百谷茁壮。此时宜耕种，顺应农时，期待秋之收获。',
    '立夏': '斗指东南，维为立夏。蝼蝈鸣，蚯蚓出，王瓜生。夏之始也，万物繁茂，天地始交。此时宜养心安神，顺应夏日阳气旺盛之特点，调摄身心，以应时令。',
    '小满': '小满小满，麦粒渐满。苦菜秀，靡草死，麦秋至。此时夏熟作物籽粒渐饱满，但尚未成熟。小满者，满而不损，满而不盈，蕴含中庸之道，宜谦逊自持。',
    '芒种': '芒种忙忙种，过了芒种不种田。螳螂生，鵙始鸣，反舌无声。此时麦黄稻绿，农事繁忙。芒种寓意有芒之谷可播种，宜勤勉耕耘，把握农时，不负天时地利。',
    '夏至': '夏至一阴生，日长之至。鹿角解，蝉始鸣，半夏生。此日白昼最长，阳气极盛，阴气始萌。古人云夏至养心，宜静心宁神，顺应阴阳消长，调和身心以度盛夏。',
    '小暑': '小暑大暑，上蒸下煮。温风至，蟋蟀居壁，鹰始挚。暑气渐盛，天地如蒸笼。此时宜清心寡欲，避暑纳凉，饮食清淡，保养精气，以安然度过炎夏。',
    '大暑': '大暑运金气，荆扬不知秋。腐草为萤，土润溽暑，大雨时行。一年中最热之时，阳气极盛。宜静心养性，避免暑气侵扰，待暑退凉生，自有清风徐来。',
    '立秋': '立秋凉风至，暑去天渐高。凉风至，白露降，寒蝉鸣。秋之始也，阳气渐收，阴气渐长。此时宜收敛神气，使志安宁，顺应秋收之气，为冬藏做准备。',
    '处暑': '处暑天还暑，好似秋老虎。鹰乃祭鸟，天地始肃，禾乃登。暑气渐消，秋意渐浓。此时宜早睡早起，与鸡俱兴，调养肺气，感受秋之清爽。',
    '白露': '白露秋风夜，一夜凉一夜。鸿雁来，玄鸟归，群鸟养羞。露凝而白，秋意渐浓。此时阴阳之气开始转换，宜保暖养阴，感受秋之静美，珍惜天高云淡之时。',
    '秋分': '秋分秋分，昼夜平分。雷始收声，蛰虫坯户，水始涸。阴阳相半，秋色平分。此时宜调养身心，保持平和心境，感受秋之中正之美，体悟自然平衡之道。',
    '寒露': '寒露寒露，遍地冷露。鸿雁来宾，雀入大水为蛤，菊有黄华。露气寒冷，将凝结成霜。此时宜添衣保暖，养阴防燥，感受秋之深沉，品味岁月静好。',
    '霜降': '霜降杀百草，寒气逼人来。豺乃祭兽，草木黄落，蛰虫咸俯。秋之末也，霜华满地，天地萧瑟。此时宜防寒保暖，养精蓄锐，静待冬之来临。',
    '立冬': '立冬补冬，补嘴空。水始冰，地始冻，雉入大水为蜃。冬之始也，万物收藏。此时宜温补养阳，早睡晚起，顺应冬藏之理，为来年积蓄能量。',
    '小雪': '小雪地封严，大雪河冰封。虹藏不见，天气上升地气下降，闭塞而成冬。雪意渐浓，天地清寒。此时宜温养身心，感受冬之静谧，品味岁月沉淀。',
    '大雪': '大雪纷纷落，明年吃馍馍。鹖鴠不鸣，虎始交，荔挺出。雪盛也，天寒地冻。此时宜保暖养藏，感受冬之壮美，静待瑞雪兆丰年。',
    '冬至': '冬至阳气起，君道长。蚯蚓结，麋角解，水泉动。阴极之至，阳气始生，日影最长。古人云冬至大如年，此日宜静养身心，顺应阴阳消长，期待春回大地。',
    '小寒': '小寒大寒，冻成一团。雁北乡，鹊始巢，雉雊。寒气渐盛，然阳气已动。此时宜温补养肾，防寒保暖，感受冬之严寒中蕴含的生机。',
    '大寒': '大寒小寒，无风也寒。鸡乳，征鸟厉疾，水泽腹坚。一年中最冷之时，然春意已近。此时宜静心养性，感受冬尽春来之际，天地循环不息。'
  }

  // 时令相关文本
  const seasonTexts = {
    '孟春': '孟春之月，东风解冻，蛰虫始振。春气始发，万物萌动。此时宜舒展身心，感受春之气息，开启新一年的希望与憧憬。天地间生机盎然，正所谓一年之计在于春。',
    '仲春': '仲春之月，桃始华，仓庚鸣。春色正浓，百花争艳。此时宜踏青赏花，感受天地间蓬勃的生命力。春风和煦，万物生长，正是人间好时节。',
    '季春': '季春之月，桐始华，虹始见。春之将尽，夏之将来。此时宜珍惜春光，感受季节交替之美。落红不是无情物，化作春泥更护花，天地循环，生生不息。',
    '孟夏': '孟夏之月，蝼蝈鸣，蚯蚓出。夏之始也，万物繁茂。此时宜养心安神，感受夏日之初的清新与活力。绿树成荫，鸟语花香，天地一片欣欣向荣。',
    '仲夏': '仲夏之月，蝉始鸣，半夏生。夏至已过，暑气渐盛。此时宜静心养性，顺应夏日阳气旺盛之特点。荷风送香气，竹露滴清响，感受夏之热烈。',
    '季夏': '季夏之月，腐草为萤，土润溽暑。夏之将尽，秋之将来。此时宜调养身心，感受季节转换之际的微妙变化。暑气渐消，凉意渐生，天地循环有序。',
    '孟秋': '孟秋之月，凉风至，白露降。秋之始也，暑气渐消。此时宜收敛神气，感受秋之初凉。天高云淡，风清气爽，正是人间好时节。',
    '仲秋': '仲秋之月，鸿雁来，玄鸟归。秋色正浓，月圆人团圆。此时宜赏月品茗，感受秋之静美。金风送爽，桂花飘香，天地间一片祥和。',
    '季秋': '季秋之月，鸿雁来宾，菊有黄华。秋之将尽，冬之将来。此时宜添衣保暖，感受秋之深沉。霜叶红于二月花，天地萧瑟中蕴含着别样的美。',
    '孟冬': '孟冬之月，水始冰，地始冻。冬之始也，万物收藏。此时宜温补养阳，感受冬之初寒。天地清寂，万物蛰伏，静待春回大地。',
    '仲冬': '仲冬之月，鹖鴠不鸣，虎始交。冬至已过，阳气始生。此时宜静养身心，感受阴阳消长之理。寒极而暖生，冬尽而春至，天地循环不息。',
    '季冬': '季冬之月，雁北乡，鹊始巢。冬之将尽，春之将来。此时宜养精蓄锐，期待新的一年。梅花香自苦寒来，严冬过后，必是春暖花开。'
  }

  // 优先级：节日 > 节气 > 时令
  if (festival && festivalTexts[festival]) {
    return festivalTexts[festival]
  }

  if (solarTerm && solarTermTexts[solarTerm]) {
    return solarTermTexts[solarTerm]
  }

  if (seasonPhase && seasonTexts[seasonPhase]) {
    return seasonTexts[seasonPhase]
  }

  // 默认文本
  return '天地有大美而不言，四时有明法而不议。观日月之运行，感阴阳之消长，悟万物之荣枯。岁月流转，时光荏苒，愿君珍惜当下，顺应自然之道，在四季更迭中体悟生命之美，于平凡日子里感受人间值得。'
}

module.exports = {
  getDateInfo,
  generateText
}