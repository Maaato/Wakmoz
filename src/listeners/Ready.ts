import { Listener } from "discord-akairo";

import { Logger } from "../utils/Logger";

export default class ReadyListener extends Listener {
  constructor() {
    super("ready", {
      emitter: "client",
      event: "ready",
    });
  }

  public exec() {
    Logger.info(`${this.client.user!.tag} Up`, "Listener");
  }
}
