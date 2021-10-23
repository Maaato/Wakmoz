import { Listener } from "discord-akairo";
import { AlmanaxService } from "../services/Almanax";
import { DATETIME_NOW_MILI, DATE_NOW_MILI } from "../utils/Constants";

import { Logger } from "../utils/Logger";

export default class ReadyListener extends Listener {
  private readonly almanaxService;

  constructor() {
    super("ready", {
      emitter: "client",
      event: "ready",
    });
    this.almanaxService = new AlmanaxService();
  }

  public exec() {
    Logger.info(`${this.client.user!.tag} Up`, "Listener");
    const { diff } = this.almanaxService.getRemainingTimeToNextBonus(
      DATETIME_NOW_MILI()
    );
    Logger.info(`Timeout in ${diff} ms`, "Listener");
    setTimeout(async () => {
      Logger.info(`Timeout Started`, "Listener");
      const dayMillseconds = 1000 * 60 * 60 * 24;
      setInterval(() => {
        Logger.info(`New Interval Status`, "Listener");
        const bonus = this.almanaxService.getAlmanaxBonus(DATE_NOW_MILI());
        this.client.user?.setActivity(`WAKFU: ${bonus}`, { type: "PLAYING" });
      }, dayMillseconds);
    }, diff);
  }
}
