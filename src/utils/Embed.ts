import { MessageEmbed } from "discord.js";

import {
  RANDOM_EMOJI,
  KROZMOZ_YEAR,
  UPPER_FIRST_LETTER,
  DATETIME_NOW,
} from "../utils/Constants";
import { IBonusData } from "../interfaces/BonusData";

export class Embed {
  public MessageEmbed(bonusData: IBonusData): MessageEmbed {
    const { avatar, blessing, day, dayAsText, season } = bonusData;
    const { bonus, nextBonusIs, nextBonusIn } = bonusData;
    const { hours, minutes, seconds } = nextBonusIn;
    return new MessageEmbed({
      color: 0x40b2b5,
      timestamp: new Date(),
      title: `**${RANDOM_EMOJI()} ${day} ${dayAsText} ${KROZMOZ_YEAR}** - ${blessing}`,
      thumbnail: {
        url: `${avatar}`,
      },
      footer: {
        text: "Wakmoz",
      },
      description: `**Season:** ${UPPER_FIRST_LETTER(season)} **Time:** ${
        DATETIME_NOW().split(" ")[1]
      } \n**Bonus:** ${bonus} \n\n **Next Bonus:** ${nextBonusIs} \n**Time Remaining:** ${hours}h ${minutes}m ${seconds}s`,
    });
  }

  public ErrorEmbed(): MessageEmbed {
    return new MessageEmbed({
      color: 0x40b2b5,
      timestamp: new Date(),
      description: `**Ups! Something went wrong.\n Please try again later 😢**`,
      footer: {
        text: `Wakmoz`,
      },
    });
  }
}
