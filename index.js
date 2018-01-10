const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);
var prefix = '+';
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Amy its ready !!");
    bot.user.setPresence({ game: { name: "Coder"}});
});

