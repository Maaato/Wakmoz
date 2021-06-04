import { INextBonusIn } from "./NextBonusIn";

export interface IBonusData {
  avatar: string;
  blessing: string;
  day: string;
  dayAsText: string;
  season: string;
  bonus: string;
  nextBonusIs: string;
  nextBonusIn: INextBonusIn;
}
