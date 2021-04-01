import { WakmozClient } from "./client";
import { config } from "dotenv";

config();

new WakmozClient()
  .login(process.env.DISCORD_TOKEN!)
  .then(() => console.log("WakmozClient Up"));
