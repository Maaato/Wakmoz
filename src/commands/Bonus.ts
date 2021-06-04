import { Command } from "discord-akairo";
import { Message } from "discord.js";

import { AlmanaxService } from "../services/Almanax";
import { Embed } from '../utils/Embed'
import { DATETIME_NOW_MILI, DATE_NOW_MILI, DATE_TOMORROW_MILI } from "../utils/Constants";
import { IBonusData } from '../interfaces/BonusData'

export default class BonusCommand extends Command {
  private almanaxService;

  constructor() {
    super("bonus", {
      aliases: ["bonus","b"],
    });
    this.almanaxService = new AlmanaxService();
  }

  public async exec(message: Message) {
    const bonusInfo  = await this.almanaxService.scrapBonusInfo();
    const bonus = this.almanaxService.getAlmanaxBonus(DATE_NOW_MILI());
    const nextBonusIs = this.almanaxService.getAlmanaxBonus(DATE_TOMORROW_MILI());
    const nextBonusIn = this.almanaxService.getRemainingTimeToNextBonus(DATETIME_NOW_MILI())
    const bonusData : IBonusData = { ...bonusInfo , bonus , nextBonusIs, nextBonusIn }
    const bonusEmbed = bonus ? new Embed().MessageEmbed(bonusData) : new Embed().ErrorEmbed()
    return message.channel.send(bonusEmbed);
  }
}
