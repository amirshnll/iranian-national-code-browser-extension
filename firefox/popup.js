const allDigitEqual = [
  "0000000000", "1111111111", "2222222222", "3333333333", "4444444444",
  "5555555555", "6666666666", "7777777777", "8888888888", "9999999999"
]

function generator() {
  const list = []
  let sum = 0
  for (let i = 10; i > 1; i--) {
    const j = Math.floor(Math.random() * Math.floor(10))
    list.push(j)
    sum += j * i
  }
  const s = sum % 11
  if (s < 2) list.push(s)
  else list.push(11 - s)
  return list.join("")
}

function roundGenerator() {
  const list = []
  let sum = 0
  let j = 10
  for (let i = 10; i > 1; i--) {
    j = Math.floor(Math.random() * Math.floor(j < 2 ? 2 : j))
    list.push(j)
    sum += j * i
  }
  const s = sum % 11
  if (s < 2) list.push(s)
  else list.push(11 - s)
  if (list.filter(a => a != list[0]).length == 0) return roundGenerator()
  return list.join("")
}

function validator(val) {
  const codeMelliPattern = /^([0-9]{10})+$/
  if (allDigitEqual.indexOf(val) != -1 || !codeMelliPattern.test(val)) return false
  const chArray = Array.from(val)
  const num0 = parseInt(chArray[0]) * 10
  const num2 = parseInt(chArray[1]) * 9
  const num3 = parseInt(chArray[2]) * 8
  const num4 = parseInt(chArray[3]) * 7
  const num5 = parseInt(chArray[4]) * 6
  const num6 = parseInt(chArray[5]) * 5
  const num7 = parseInt(chArray[6]) * 4
  const num8 = parseInt(chArray[7]) * 3
  const num9 = parseInt(chArray[8]) * 2
  const a = parseInt(chArray[9])
  const b = num0 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9
  const c = b % 11
  return ((c < 2) && (a == c)) || ((c >= 2) && ((11 - c) == a))
}

const regionEntries = [
  { p: [349, 350], city: "بوشهر", prov: "بوشهر" },
  { p: [351, 352], city: "دشتستان", prov: "بوشهر" },
  { p: [353], city: "بندر گناوه", prov: "بوشهر" },
  { p: [354], city: "دشتی", prov: "بوشهر" },
  { p: [355], city: "تنگستان", prov: "بوشهر" },
  { p: [356], city: "کنگان", prov: "بوشهر" },
  { p: [357], city: "دیر", prov: "بوشهر" },
  { p: [529], city: "بندر دیلم", prov: "بوشهر" },
  { p: [532], city: "سعد آباد", prov: "بوشهر" },
  { p: [609], city: "جم", prov: "بوشهر" },
  { p: [610], city: "شبانکاره", prov: "بوشهر" },
  { p: [181], city: "آبادان", prov: "خوزستان" },
  { p: [182], city: "خرمشهر", prov: "خوزستان" },
  { p: [174, 175], city: "اهواز", prov: "خوزستان" },
  { p: [185, 186], city: "بهبهان", prov: "خوزستان" },
  { p: [192, 193], city: "اندیمشک", prov: "خوزستان" },
  { p: [199, 200], city: "دزفول", prov: "خوزستان" },
  { p: [196, 197], city: "مسجدسلیمان", prov: "خوزستان" },
  { p: [338, 339], city: "بندرعباس", prov: "هرمزگان" },
  { p: [343, 344], city: "بندرلنگه", prov: "هرمزگان" },
  { p: [341, 342], city: "میناب", prov: "هرمزگان" },
  { p: [345], city: "قشم", prov: "هرمزگان" },
  { p: [346], city: "جاسک", prov: "هرمزگان" },
  { p: [337], city: "حاجی آباد", prov: "هرمزگان" },
  { p: [240, 241], city: "آباده", prov: "فارس" },
  { p: [228, 229, 230], city: "شیراز", prov: "فارس" },
  { p: [256, 257], city: "فسا", prov: "فارس" },
  { p: [244, 245], city: "فیروزآباد", prov: "فارس" },
  { p: [236, 237], city: "کازرون", prov: "فارس" },
  { p: [250, 251], city: "لارستان", prov: "فارس" },
  { p: [242, 243], city: "مرودشت", prov: "فارس" },
  { p: [255], city: "نی‌ریز", prov: "فارس" },
  { p: [312, 313], city: "بافت", prov: "کرمان" },
  { p: [310, 311], city: "بم", prov: "کرمان" },
  { p: [304, 305], city: "رفسنجان", prov: "کرمان" },
  { p: [306, 307], city: "سیرجان", prov: "کرمان" },
  { p: [308, 309], city: "زرند", prov: "کرمان" },
  { p: [302, 303], city: "جیرفت", prov: "کرمان" },
  { p: [274, 275], city: "ارومیه", prov: "آذربایجان غربی" },
  { p: [279, 280], city: "خوی", prov: "آذربایجان غربی" },
  { p: [286, 287], city: "مهاباد", prov: "آذربایجان غربی" },
  { p: [296, 297], city: "میاندوآب", prov: "آذربایجان غربی" },
  { p: [386, 387], city: "همدان", prov: "همدان" },
  { p: [392, 393], city: "ملایر", prov: "همدان" },
  { p: [395, 396], city: "نهاوند", prov: "همدان" },
  { p: [400, 401], city: "اسدآباد", prov: "همدان" },
  { p: [404, 405], city: "بهار", prov: "همدان" },
  { p: [444], city: "اردکان", prov: "یزد" },
  { p: [442, 443], city: "یزد", prov: "یزد" },
  { p: [446], city: "مهریز", prov: "یزد" },
  { p: [448], city: "میبد", prov: "یزد" },
  { p: [52, 53], city: "اراک", prov: "مرکزی" },
  { p: [59, 60], city: "ساوه", prov: "مرکزی" },
  { p: [51], city: "آشتیان", prov: "مرکزی" },
  { p: [55], city: "خمین", prov: "مرکزی" },
  { p: [412, 413], city: "بروجرد", prov: "لرستان" },
  { p: [406, 407], city: "خرم آباد", prov: "لرستان" },
  { p: [420], city: "نورآباد", prov: "لرستان" },
]

let regionPrefixMap = null

function buildFallbackPrefixMap() {
  const m = new Map()
  for (const e of regionEntries) {
    for (const code of e.p) {
      const codeStr = String(code).padStart(3, '0')
      m.set(codeStr, { city: e.city, prov: e.prov })
    }
  }
  return m
}

async function initRegionDB() {
  try {
    const getURL = (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL)
      ? chrome.runtime.getURL
      : (typeof browser !== 'undefined' && browser.runtime && browser.runtime.getURL)
        ? browser.runtime.getURL
        : (p) => p
    const res = await fetch(getURL('regions.json'))
    const data = await res.json()
    const m = new Map()
    for (const prov of Object.keys(data)) {
      const entries = data[prov] || []
      for (const entry of entries) {
        const codes = entry.codes || []
        for (const code of codes) {
          const codeStr = String(code).padStart(3, '0')
          m.set(codeStr, { city: entry.city, prov })
        }
      }
    }
    regionPrefixMap = m
  } catch {
    regionPrefixMap = buildFallbackPrefixMap()
  }
}

function resolveRegionFromPrefix(prefix) {
  const pref = String(prefix).padStart(3, '0')
  const map = regionPrefixMap || buildFallbackPrefixMap()
  return map.get(pref) || null
}

function extractPrefix(input) {
  const s = String(input || "").trim()
  if (s.length >= 3 && /^[0-9]+$/.test(s)) return s.substring(0, 3)
  return null
}

function ui() {
  const genOut = document.getElementById("gen-output")
  const genMsg = document.getElementById("gen-msg")
  const btnGen = document.getElementById("btn-generate")
  const btnCopy = document.getElementById("btn-copy")
  const valIn = document.getElementById("validate-input")
  const valRes = document.getElementById("validate-result")
  const regIn = document.getElementById("region-input")
  const regRes = document.getElementById("region-result")
  const yearEl = document.getElementById("year")
  const versionEl = document.getElementById("version")

  initRegionDB()

  btnGen.addEventListener("click", () => {
    const code = roundGenerator()
    genOut.value = code
    genMsg.textContent = "تولید شد"
    genMsg.className = "msg ok"
  })

  btnCopy.addEventListener("click", async () => {
    const v = genOut.value
    if (!v) return
    try {
      await navigator.clipboard.writeText(v)
      genMsg.textContent = "کپی شد"
      genMsg.className = "msg ok"
    } catch {
      genMsg.textContent = "امکان کپی وجود ندارد"
      genMsg.className = "msg err"
    }
  })

  document.getElementById("btn-validate").addEventListener("click", () => {
    const v = String(valIn.value || "").trim()
    if (!v) { valRes.textContent = "کد وارد نشده"; valRes.className = "msg err"; return }
    const ok = validator(v)
    valRes.textContent = ok ? "معتبر" : "نامعتبر"
    valRes.className = ok ? "msg ok" : "msg err"
  })

  document.getElementById("btn-region").addEventListener("click", () => {
    const input = String(regIn.value || "").trim()
    if (!input) { regRes.textContent = "ورودی خالی"; regRes.className = "msg err"; return }
    const pref = extractPrefix(input)
    if (!pref) { regRes.textContent = "ورودی فقط عدد باشد"; regRes.className = "msg err"; return }
    const info = resolveRegionFromPrefix(pref)
    if (!info) { regRes.textContent = `سه‌رقم ${pref} یافت نشد`; regRes.className = "msg"; return }
    regRes.textContent = `${info.city}، ${info.prov}`
    regRes.className = "msg ok"
  })

  if (yearEl) yearEl.textContent = String(new Date().getFullYear())
  try {
    const getManifest = (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getManifest)
      ? chrome.runtime.getManifest
      : (typeof browser !== 'undefined' && browser.runtime && browser.runtime.getManifest)
        ? browser.runtime.getManifest
        : null
    const manifest = getManifest ? getManifest() : null
    const ver = manifest && manifest.version ? manifest.version : ""
    if (versionEl) versionEl.textContent = ver || "1.0.0"
  } catch {
    if (versionEl) versionEl.textContent = "1.0.0"
  }
}

document.addEventListener("DOMContentLoaded", ui)
