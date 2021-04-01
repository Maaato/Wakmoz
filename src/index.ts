import { WakmozClient } from "./client";
import { config } from "dotenv";
import { Logger } from "./utils/Logger";

config();

new WakmozClient()
  .login(process.env.DISCORD_TOKEN!)
  .then(() => Logger.info("WakmozClient Up", "Main"))
  .catch(({ message }) => Logger.error(message, "Main"));
