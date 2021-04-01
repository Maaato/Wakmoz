import scrapeIt from "scrape-it";

import { DATETIME_TOMORROW_MILI, EVENT_ANNIVERSARY , KROSMOZ_URI , DATE_NOW} from "../utils/Constants";

export class AlmanaxService {
  public getAlmanaxBonus(dateMili: number): string {
    const eventAnniversaryMili = Date.parse(EVENT_ANNIVERSARY);
    const diff = Math.floor(dateMili - eventAnniversaryMili) / 1000 / 3600 / 24;
    let bonus: string = "";
    switch (diff % 5) {
      case 0:
        bonus = "+40 Prospecting";
        break;
      case 1:
        bonus = "+20% XP & Speed Craft";
        break;
      case 2:
        bonus = "+30% XP Harvest & Planting";
        break;
      case 3:
        bonus = "+20% Quantity of Harvest & +20% Chance of Planting";
        break;
      case 4:
        bonus = "+40 Wisdom";
        break;
    }
    return bonus;
  }

  public getRemainingTimeToNextBonus(nowInMili: number) {
    const tomorrowInMii = DATETIME_TOMORROW_MILI();
    const diff = tomorrowInMii - nowInMili;
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { hours, minutes, seconds };
  }
  
  public async scrapBonusInfo() : Promise<any> {
    const scrapItOptions = {
      avatar: { selector: "#almanax_boss_image img", attr: "src" },
      blessing: { selector: ".wakfu .mid" },
      day: { selector: "#almanax_day .day-number" },
      dayAsText: { selector: "#almanax_day .day-text" },
      season: { selector: "#almanax", attr: "class" },
    };
    const { data } = await scrapeIt(`${KROSMOZ_URI}/${DATE_NOW()}`, scrapItOptions)
    return data;
  }
}
