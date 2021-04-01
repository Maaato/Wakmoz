import moment from "moment-timezone";

const RUBILAX_TIME_ZONE: string = "Europe/London";
export const EVENT_ANNIVERSARY: string = "2020-02-29"

export const DATE_NOW = () =>  moment().tz(RUBILAX_TIME_ZONE).format("yyyy-MM-DD")
export const DATE_NOW_MILI = () =>  new Date(DATE_NOW()).getTime();

export const DATETIME_NOW = () => moment().tz(RUBILAX_TIME_ZONE).format("yyyy-MM-DD HH:mm:ss");
export const DATETIME_NOW_MILI = () => new Date(DATETIME_NOW()).getTime();

export const DATE_TOMORROW = () => moment().tz(RUBILAX_TIME_ZONE).add(1,'days').startOf('day').format("yyyy-MM-DD");
export const DATE_TOMORROW_MILI = () => new Date(DATE_TOMORROW()).getTime()

export const DATETIME_TOMORROW = () => moment().tz(RUBILAX_TIME_ZONE).add(1,'days').startOf('day').format("yyyy-MM-DD HH:mm:ss");
export const DATETIME_TOMORROW_MILI = () => new Date(DATETIME_TOMORROW()).getTime()






