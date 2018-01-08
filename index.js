const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');
var prefix = '+';
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Amy its ready !!");
    bot.user.setPresence({ game: { name: "Coder"}});
});

