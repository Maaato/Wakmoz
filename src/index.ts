import { WakmozClient } from "./client";
import { config } from "dotenv";
import { Logger } from "./utils/Logger";
import { AlmanaxService } from "./services/Almanax";
import { DATE_NOW_MILI } from "./utils/Constants";

config();

const init = async (client: WakmozClient) => {
  try {
    await client.login(process.env.DISCORD_TOKEN!);
    const bonus = new AlmanaxService().getAlmanaxBonus(DATE_NOW_MILI());
    client.user!.setActivity(`WAKFU: ${bonus}`, { type: "PLAYING" });
    Logger.info("WakmozClient Up", "Main");
  } catch (err: any) {
    Logger.error(err.message, "Main");
  }
};

init(new WakmozClient());
