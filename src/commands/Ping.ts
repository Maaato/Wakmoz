import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class PingCommand extends Command {
  constructor() {
    super("ping", {
      aliases: ["ping"],
    });
  }

  public exec(message: Message) {
    return message.reply("Pong!");
  }
}
