/*=====================[ Variables ]============================*/
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modé"}});
});
bot.on('message', message => {
    if (message.content === "inf"){
        var embed = new Discord.RichEmbed()
        .setTitle("Informations")
        .setDescription("Pour se connecter à différents salons, veuillez vous rendre sur #authentification")
        message.channel.sendEmbed(embed);
    }
});

