const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = '+';
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Amy its ready !!");
    bot.user.setPresence({ game: { name: "Coder"}});
});
bot.on('message', async message => {
    var args = message.content.substring().split(" ");
    if (message.member.roles.some(r=>["Administrateur"].includes(r.name)) ) {
        if(message.content.startsWith(prefix + "clear")) {
            const deleteCount = parseInt(args[0], 10);
            if(!deleteCount || deleteCount < 2 || deleteCount > 100){
                return message.reply("Il faut mettre un chiffre entre 1 et 100...");
            }
            const fetched = await message.channel.fetchMessages({count: deleteCount});
            message.channel.bulkDelete(fetched)
        }
    }else{  
        message.channel.send("Tu n'as pas la permission ^^'");
    }
});
