const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', () => {
    console.log("Pret");
});

bot.login(process.env.TOKEN);
bot.on('message', message => {
   if ((message.content === ("salope")) || (message.content === ("pute")) || (message.content === ("connard")) || (message.content === ("salaud")) || (message.content === ("putain")) || (message.content === ("con")))
        message.delete()
    });
