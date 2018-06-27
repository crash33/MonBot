/*=====================[ Variables ]============================*/
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modérer"}});
});
bot.on('message', message => {
    if (message.content === "inf"){
        var embed = new Discord.RichEmbed()
        .setTitle("Informations")
        .setDescription("Pour se connecter à différents salons, veuillez vous rendre sur le salon textuel : #authentification")
        .addField("Jeux :","- Fortnite     - League Of Legends", false)
        .addField("Grades :", "Visiteur / Membre / Ami(e) / Modo / Admin", true)
        .setColor("0x0053ce")
        .setFooter("Family Games")
        .setAuthor(" ","https://image.noelshack.com/fichiers/2018/26/3/1530109504-logo.png")
        message.channel.sendEmbed(embed);
    }
});

