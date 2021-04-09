import { Listener } from "discord-akairo";

import { Logger } from "../utils/Logger";
import { AlmanaxService } from "../services/Almanax";
import { DATETIME_NOW_MILI } from "../utils/Constants";

export default class ReadyListener extends Listener {
  private almanaxService;
  constructor() {
    super("ready", {
      emitter: "client",
      event: "ready",
    });
    this.almanaxService = new AlmanaxService();
  }

  public exec() {
    const { diff } = this.almanaxService.getRemainingTimeToNextBonus(DATETIME_NOW_MILI())
    setTimeout(async () => {
      Logger.info(`Discord ${this.client.user!.tag} Up`, "Listener");
      const dayMillseconds = 1000 * 60 * 60 * 24;
      setInterval(() => {
        Logger.info(`Discord ${this.client.user!.tag} Up`, "Listener");
      }, dayMillseconds);
    }, diff);
  }
}
