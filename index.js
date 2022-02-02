
//BTCBUSD
//36291
//35764

// 5223534824:AAGGHAJqPL9pPIdXVuvvEZbQEuOlORv4ynM
const CHAT_ID = 383579528;
let lastmessage = "";

async function process() {
const {Telegraf} = require("telegraf");
const bot = new Telegraf("5223534824:AAGGHAJqPL9pPIdXVuvvEZbQEuOlORv4ynM");
const axios = require("axios");

const response = await axios.get("https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m");
const candle = response.data[499];
const price = parseFloat(candle[4]);

if(price >= 36291 && lastmessage !== "Hora de Vender"){
  lastmessage = "Hora de Vender";
  console.log(lastmessage);
   bot.telegram.sendMessage(CHAT_ID, lastmessage);
}
else if (price <= 35764 && lastmessage !== "Hora de  Comprar"){
  lastmessage = "Hora de Comprar";
  console.log(lastmessage);
  bot.telegram.sendMessage(CHAT_ID, lastmessage);
}
else 
console.log("Aguardar!");  
   
}

setInterval(process, 1000);

process();