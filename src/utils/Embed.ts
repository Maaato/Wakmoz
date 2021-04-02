import { MessageEmbed } from "discord.js";
import {
  RANDOM_EMOJI,
  KROZMOZ_YEAR,
  UPPER_FIRST_LETTER,
} from "../utils/Constants";

export class Embed {
  public MessageEmbed(data: any): MessageEmbed {
    const { avatar, blessing, day, dayAsText, season } = data;
    const { bonus, nextBonusIs, nextBonusIn } = data;
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
      description: `**Season:** ${UPPER_FIRST_LETTER(
        season
      )} \n**Bonus:** ${bonus} \n\n **Next Bonus:** ${nextBonusIs} \n**Next Bonus in:** ${hours}h ${minutes}m ${seconds}s`,
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
