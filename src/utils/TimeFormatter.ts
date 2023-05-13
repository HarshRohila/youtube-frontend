import TimeAgo from "javascript-time-ago"
TimeAgo.addDefaultLocale(en)

import en from "javascript-time-ago/locale/en"

export interface TimeAgoFormatter {
  format(data: Date): string
}

export function getTimeAgoFormatter() {
  return new JsTimeAgo() as TimeAgoFormatter
}

class JsTimeAgo implements TimeAgoFormatter {
  private timeAgo: TimeAgo
  constructor() {
    this.timeAgo = new TimeAgo("en-US")
  }

  format(date: Date) {
    return this.timeAgo.format(date)
  }
}
