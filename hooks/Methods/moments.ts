import moment from 'moment'

moment.locale('ja')

export const momentFormat = (date: number | string, format: string) => {
    try {
        if (!date) return '' 

        if (typeof date === 'string') {
            return moment(date).format(format)
        } else if (typeof date === 'number' && date !== 0) {
            return moment.unix(date).format(format)
        }
        return ''
    } catch {
        return ''
    }
}

export const customFormat = (s: string) => {
    try {
      if (s.length === 4) {
        return moment(s).format(FORMAT.FORMAT_YEAR_JP)
      } else if (s.length === 7) {
        return moment(s).format(FORMAT.FORMAT_YEAR_MONTH_JP)
      } else if (s.length === 10) {
        return moment(s).format(FORMAT.FORMAT_DATE_JP)
      }
      return s
    } catch {
      return ''
    }
  }
  
  export const customDateFormat = (s: string, type: number) => {
    try {
      if (type === 1) {
        return '時期不明'
      } else if (type === 2) {
        return moment(s).format(FORMAT.FORMAT_YEAR_JP_MAYBE)
      } else if (type === 3) {
        return moment(s).format(FORMAT.FORMAT_YEAR_MONTH_JP_MAYBE)
      } else if (type === 4) {
        return moment(s).format(FORMAT.FORMAT_DATE_JP)
      }
      return s
    } catch {
      return ''
    }
  }
  
  export const getJPYear = (date: string) => {
    const day: moment.Moment = moment(date)
    const YY: number = +day.format('YYYY').slice(2)
    if (day.isSameOrBefore('1912-07-29')) {
      return `明治${YY + 33}`
    } else if (
      day.isBetween('1912-07-30', '1926-12-25') ||
      day.isSame('1912-07-30') ||
      day.isSame('1926-12-25')
    ) {
      return `大正${YY - 11}`
    } else if (
      day.isBetween('1926-12-26', '1989-01-07') ||
      day.isSame('1926-12-26') ||
      day.isSame('1989-01-07')
    ) {
      return `昭和${YY - 25}`
    } else if (
      day.isBetween('1989-01-08', '2019-04-30') ||
      day.isSame('1989-01-08') ||
      day.isSame('2019-04-30')
    ) {
      if (YY + 12 < 100) {
        return `平成${String(YY + 12)}`
      } else {
        return `平成${String(YY + 12).slice(1)}`
      }
    } else if (day.isSameOrAfter('2019-05-01')) {
      return `令和${YY - 18}`
    }
  }
  
  // フォーマット
  export enum FORMAT {
    FORMAT_DATE = 'YYYY-MM-DD',
    FORMAT_DATE_2 = 'YYYY/MM/DD',
    FORMAT_DATE_3 = 'YYYYMMDD',
    FORMAT_DATE_HOUR = 'YYYY-MM-DD HH:mm',
    FORMAT_DATE_HOUR_2 = 'YYYY/MM/DD HH:mm',
    FORMAT_DATE_TIME = 'YYYY-MM-DD HH:mm:ss',
    FORMAT_DATE_TIME_2 = 'YYYY/MM/DD HH:mm:ss',
    FORMAT_MONTH_DAY = 'MM/DD',
    FORMAT_DATE_HOUR_3 = 'YYYY/MM/DD (ddd) HH:mm',
    FORMAT_DATE_JP = 'YYYY年MM月DD日',
    FORMAT_YEAR = 'YYYY',
    FORMAT_YEAR_JP = 'YYYY年',
    FORMAT_YEAR_JP_MAYBE = 'YYYY年頃',
    FORMAT_MONTH_JP = 'MM月',
    FORMAT_DAY_JP = 'DD日',
    FORMAT_HOUR = 'HH:mm',
    FORMAT_HOUR_2 = 'HH',
    FORMAT_MIN = 'mm',
    FORMAT_DATE_TIME_JP = 'YYYY年MM月DD日 HH:mm',
    FORMAT_DATE_TIME_JP2 = 'YYYY年MM月DD日 HH:mm:ss',
    FORMAT_DATE_TIME_WEEK_JP = 'YYYY年MM月DD日(ddd)',
    FORMAT_MONTH = 'YYYYMM',
    FORMAT_MONTH_2 = 'YYYY-MM',
    FORMAT_YEAR_MONTH_JP_MAYBE = 'YYYY年MM月頃',
    FORMAT_YEAR_MONTH_JP = 'YYYY年MM月',
  }