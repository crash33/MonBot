const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', () => {
    console.log("Pret");
});

bot.login('Mzk4NTcyMjA0ODgwNTYwMTI5.DTAfFg.xePyT2ohwbzkFQ_cYqU-hqL4aZM');
bot.on('message', message => {
    if (message.content === ("salope"))
        message.delete()
    if (message.content === ("pute"))
        message.delete()
    });
