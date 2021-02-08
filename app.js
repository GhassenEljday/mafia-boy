import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { App } = require("@slack/bolt");
import {SLACK_BOT_TOKEN, SLACK_SIGNING_SECRET }from "./configs/config.js";

// Initializes your app with your bot token and signing secret
const app = new App({
  token: SLACK_BOT_TOKEN,
  signingSecret: SLACK_SIGNING_SECRET
});


app.message("hello", async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("Mafia BOY is running!");
})();