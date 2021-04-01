import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { AlmanaxService } from "../services/Almanax";
import { DATETIME_NOW_MILI, DATE_NOW_MILI, DATE_TOMORROW_MILI } from "../utils/Constants";

export default class BonusCommand extends Command {
  private almanaxService;

  constructor() {
    super("bonus", {
      aliases: ["b"],
    });
    this.almanaxService = new AlmanaxService();
  }

  public exec(message: Message) {
    const bonus = this.almanaxService.getAlmanaxBonus(DATE_NOW_MILI());
    const nextBonusIs = this.almanaxService.getAlmanaxBonus(DATE_TOMORROW_MILI());
    const nextBonusIn = this.almanaxService.getRemainingTimeToNextBonus(DATETIME_NOW_MILI())
    console.log({nextBonusIs}, {nextBonusIn})
    return message.reply(`${bonus} | ${JSON.stringify(nextBonusIn)} | ${nextBonusIs}`);
  }
}
