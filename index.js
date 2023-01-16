const TelegramBot = require("node-telegram-bot-api");
const randomstring = require("randomstring");

// Token bot Telegram yang didapat dari BotFather
const token = "5921091811:AAENynl6Xpn7o972cxDPIjV2S194WXhfWlY";

const bot = new TelegramBot(token, { polling: true });
let helloWorldSent = false;
let generate = false;

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (!helloWorldSent) {
    bot.sendMessage(chatId, "Hello, world!");
    helloWorldSent = true;
  }
  if (!generate) {
    bot.onText(/\/generate (.+)/, (msg, match) => {
      const chatId = msg.chat.id;
      const passwordLength = match[1];
      const password = randomstring.generate({
        length: passwordLength,
        charset: "alphanumeric",
      });
      bot.sendMessage(chatId, `Password Anda: ${password}`);
    });
    generate = true;
  }
});
``;
