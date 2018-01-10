const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');
var prefix = '+';
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Amy its ready !!");
    bot.user.setPresence({ game: { name: "Coder"}});
});
bot.on('message', message => {
    if (message.member.roles.some(r=>["role_name"].includes(r.name)) ) {
        if(message.content.startsWith(prefix + "clear")) {
            const deleteCount = parseInt(args[0], 10);
            if(!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Il faut mettre un chiffre entre 1 et 100...");
            const fetched = await message.channel.fetchMessages({count: deleteCount});
            message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        }
    }else{
        message.channel.send("Tu n'as pas le grade suffisant pour faire cela");
    }
});
