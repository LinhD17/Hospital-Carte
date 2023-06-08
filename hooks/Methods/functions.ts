import { cloneDeep } from 'lodash'
import moment from 'moment'

moment.locale('ja')

export const dateFormatted = (date: string) => {
  return moment(date).format('YYYY年MM月DD日')
}

export const dateFormatMonth = (date: string | number) => {
  return moment(date).format('YYYY年MM月')
}

export const dateFormatDay = (date: number) => {
  return moment.unix(date).format('YYYY年MM月DD日')
}

export const dateFormatWeek = (date: number) => {
  return moment.unix(date).format('YYYY年MM月DD日(ddd)')
}

export const dateFormatAt = (date: number) => {
  return moment.unix(date).format('YYYY年MM月DD日 HH:mm')
}

export const dateTimeFormat = (date: number | string) => {
  if (typeof date === 'string') {
    return moment(date).format('YYYY年MM月DD日 HH時mm分ss秒')
  }

  return moment.unix(date).format('YYYY年MM月DD日 HH時mm分ss秒')
}

export const dateTimeFormatFree = (date: number | string, format: string) => {
  try {
    if (typeof date === 'string') {
      return moment(date).format(format)
    } else if (typeof date === 'number' && date != 0) {
      return moment.unix(date).format(format)
    }
    return ''
  } catch {
    return ''
  }
}

// 文字列を年月日に置換
export const dateFormatBirthday = (date: string) => {
  const regexp = /(\d{4})\/(\d{2})\/(\d{2})/
  const formatBirthday = date.replace(regexp, '$1年$2月$3日')

  return formatBirthday
}

export const dateFormatString = (date: string) => {
  // YYYYMMDD -> YYYY年MM月DD日
  const dateString = moment(date).format('YYYY年M月D日')

  return dateString
}

// 文字列の秒数を置換
export const dateFormatTime = (time: string) => {
  try {
    const regexp = /(\d{4})\/(\d{2})\/(\d{2})/
    const formatTime = time.replace(regexp, '$1年$2月$3日').slice(0, -3)
    return formatTime
  } catch (error) {
    return ''
  }
}

// datePickerの値(文字列)を年月日に変換
export const dateFormatDatePicker = (date: string) => {
  try {
    const regexp = /(\d{4})-(\d{2})-(\d{2})/
    const formatDate = date.replace(regexp, '$1年$2月$3日')
    return formatDate
  } catch (error) {
    return ''
  }
}

// datePickerの値(文字列)を年月に変換
export const dateFormatDatePickerMonth = (date: string) => {
  try {
    const regexp = /(\d{4})-(\d{2})/
    const formatDate = date.replace(regexp, '$1年$2月')
    return formatDate
  } catch (error) {
    return ''
  }
}

export const dateFormatDatePickerYear = (date: string) => {
  try {
    const regexp = /(\d{4})/
    const formatDate = date.replace(regexp, '$1年')
    return formatDate
  } catch (error) {
    return ''
  }
}

export const unEscapeHtml = (target: any) => {
  if (!target) return ''
  if (typeof target !== 'string') return target

  const patterns = {
    '&lt;': '<',
    '&gt;': '>',
    '&amp;': '&',
    '&quot;': '"',
    '&#x27;': "'",
    '&#x60;': '`',
  }

  return target.replace(/&(lt|gt|amp|quot|#x27|#x60);/g, function (match) {
    // @ts-ignore
    return patterns[match]
  })
}

export const escapeHtml = (target: any) => {
  const str = unEscapeHtml(target)
  return str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
}

export const checkEmptyHtml = (s: string) => {
  if (escapeHtml(s)) {
    return s
  } else {
    return ''
  }
}

// ひらがなチェック
export const isHiaragana = (s: string) => {
  return !!s.match(/^[ぁ-んー]*$/)
}

// 全角カナチェック
export const isZenkakuKana = (s: string) => {
  return !!s.match(/^[ァ-ヶー]*$/)
}

// アルファベットチェック
export const isAlphabet = (s: string) => {
  return !!s.match(/^[a-zA-Z]+$/)
}

// 時間作成
export const convTimeform = (s1: string | number, s2: string | number) => {
  return `${String(s1).padStart(2, '0')}:${String(s2).padStart(2, '0')}`
}

// 可変のオブジェクトからFormDataを作成
export const cnvFormData = (data: any, inherKey?: string) => {
  const formData = new FormData()

  for (const key in data) {
    const value = data[key]
    const adoptKey = inherKey ? `${inherKey}[${key}]` : key
    if (value instanceof Array) {
      value.forEach((v: any) => formData.append(`${adoptKey}[]`, v))
    } else if (value instanceof Object) {
      cnvFormData(value, adoptKey).forEach((v: any, k: any) =>
        formData.append(k, v)
      )
    } else {
      if (value !== undefined) {
        if (value === null) {
          formData.append(adoptKey, '')
        } else {
          formData.append(adoptKey, value)
        }
      }
    }
  }
  return formData
}

export const defaultIfEmpty = <T>(data: T): T | undefined => {
  if (data === undefined || data === null) return undefined

  if (data instanceof Array && !data.length) {
    return undefined
  } else if (typeof data === 'string' && !data) {
    return undefined
  }
  return data
}

export const isObjectEmpty = (obj: any): boolean => {
  for (let key in obj) {
    if (obj[key]) {
      return false
    }
  }
  return true
}
