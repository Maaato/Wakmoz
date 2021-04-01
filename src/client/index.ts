import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { config } from "dotenv";
import { join } from "path";

config();

export class WakmozClient extends AkairoClient {
  private commandHandler: CommandHandler;
  private listenerHandler: ListenerHandler;

  constructor() {
    super({ ownerID: process.env.OWNERID });
    this.commandHandler = new CommandHandler(this, {
      directory: join(__dirname, "..", "commands/"),
      prefix: process.env.DISCORD_PREFIX,
    });
    this.listenerHandler = new ListenerHandler(this, {
      directory: join(__dirname, "..", "listeners/"),
    });
  }

  private _init() {
    this.commandHandler.useListenerHandler(this.listenerHandler);
    this.listenerHandler.setEmitters({
      CommandHandler: this.commandHandler,
      ListenerHandler: this.listenerHandler,
    });
    this.commandHandler.loadAll();
    this.listenerHandler.loadAll();
  }

  public login(token: string) {
    this._init();
    return super.login(token);
  }
}
