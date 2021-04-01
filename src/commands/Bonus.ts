import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { AlmanaxService } from "../services/Almanax";

export default class BonusCommand extends Command {
  private almanaxService;

  constructor() {
    super("bonus", {
      aliases: ["b"],
    });
    this.almanaxService = new AlmanaxService();
  }

  public exec(message: Message) {
    const bonus = this.almanaxService.getAlmanaxBonus(Date.parse("2021-04-01"));
    return message.reply(`${bonus}`);
  }
}
