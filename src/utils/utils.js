// 把date对象转化为字符串 （'2020-08-01'）
export function formatParamsDate (date, full = true) {
  if (!date) {
    return
  }
  if (typeof date !== 'object') {
    date = new Date(date)
  }
  let year = date.getFullYear()
  let month = (date.getMonth() + 1) > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
  let hour = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
  let minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
  let seconds = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
  return full ? `${year}-${month}-${day} ${hour}:${minutes}:${seconds}` : `${year}-${month}-${day}`
}

/**
 * 时间格式化
 * @param {Date} d
 * @param {String} fmt
 * @example format(new Date(), 'yyyy-MM-dd hh:mm:ss') => 2006-07-02 08:09:04.423
 */
export function format(d, fmt) {
      const obj = {
          'M+': d.getMonth() + 1,
          'd+': d.getDate(),
          'h+': d.getHours(),
          'm+': d.getMinutes(),
          's+': d.getSeconds(),
          'q+': Math.floor((d.getMonth() + 3) / 3),
          'S': d.getMilliseconds()
      }
      if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (var i in obj) {
          if (new RegExp('(' + i + ')').test(fmt)) {
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
                  ? (obj[i])
                  : (('00' + obj[i]).substr(('' + obj[i]).length)))
          }
      }
      return fmt
  }

export default {
  formatParamsDate,
  format
}