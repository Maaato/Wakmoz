import { INextBonusIn } from "./NextBonusIn";

export interface IBonusInfo {
  avatar: string;
  blessing: string;
  day: string;
  dayAsText: string;
  season: string;
  bonus: string;
  nextBonusIs: string;
  nextBonusIn: INextBonusIn;
}
