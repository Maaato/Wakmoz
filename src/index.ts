import { WakmozClient } from "./client";
import { config } from "dotenv";
import { Logger } from "./utils/Logger";

config();

const init = async (client: WakmozClient) => {
  try {
    await client.login(process.env.DISCORD_TOKEN!);
    Logger.info("WakmozClient Up", "Main");
  } catch (err: any) {
    Logger.error(err.message, "Main");
  }
};

init(new WakmozClient());
