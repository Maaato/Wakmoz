import moment from "moment-timezone";

const RUBILAX_TIME_ZONE: string = `${process.env.RUBILAX_TIME_ZONE}`;
const WEATHER_EMOJIS = ['⛅','🌧️','☀️','☁️','🌨️']
export const EVENT_ANNIVERSARY: string = "2020-02-29"
export const KROSMOZ_URI: string = "http://www.krosmoz.com/es/almanax";
export const KROZMOZ_YEAR: number = Number(moment().tz(RUBILAX_TIME_ZONE).format('yyyy')) - 1043;
export const RANDOM_EMOJI = () => WEATHER_EMOJIS[Math.floor(Math.random() * WEATHER_EMOJIS.length)];
export const UPPER_FIRST_LETTER = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const DATE_NOW = () =>  moment().tz(RUBILAX_TIME_ZONE).format("yyyy-MM-DD")
export const DATE_NOW_MILI = () =>  new Date(DATE_NOW()).getTime();

export const DATETIME_NOW = () => moment().tz(RUBILAX_TIME_ZONE).format("yyyy-MM-DD HH:mm:ss");
export const DATETIME_NOW_MILI = () => new Date(DATETIME_NOW()).getTime();

export const DATE_TOMORROW = () => moment().tz(RUBILAX_TIME_ZONE).add(1,'days').startOf('day').format("yyyy-MM-DD");
export const DATE_TOMORROW_MILI = () => new Date(DATE_TOMORROW()).getTime()

export const DATETIME_TOMORROW = () => moment().tz(RUBILAX_TIME_ZONE).add(1,'days').startOf('day').format("yyyy-MM-DD HH:mm:ss");
export const DATETIME_TOMORROW_MILI = () => new Date(DATETIME_TOMORROW()).getTime()






