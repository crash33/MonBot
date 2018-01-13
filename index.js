/*=====================[ Variables ]============================*/
const Discord = require('discord.js');
const bot = new Discord.Client();
/*==========================[ Start ]============================*/

bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modérer"}});
});

