import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { config } from "dotenv";

export class WakmozClient extends AkairoClient {
  constructor() {
    super();
  }

  public login(token: string) {
    return super.login(token);
  }
}
