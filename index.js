/*=====================[ Variables ]============================*/
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modérer"}});
});
bot.on('message', message => { 
    let memberGotRole = message.member.roles.find('id', message.guild.roles.find("name", "Administration").id)
    if (memberGotRole){
        if (message.content === "inf"){
            var embed = new Discord.RichEmbed()
            .setTitle("Informations")
            .setDescription("Ce serveur est en Bêta-Test")
            .addField("Réglement :","Il est interdit d'insulter, de faire de la publicité et d'avoir un pseudo inapproprié ", false)
            .setColor("0x0053ce")
            .setFooter("Family")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/26/3/1530109504-logo.png")
            message.channel.sendEmbed(embed);
        }
        if (message.content === "sondage"){
            var embedsond = new Discord.RichEmbed()
            .setAuthor("staff", "https://image.noelshack.com/fichiers/2018/26/3/1530109504-logo.png")
            .setTitle("Sondage")
            .setDescription("Aimez-vous le serveur ?")
            .setColor("0xB40404")
            .setFooter("Family")
            .setReact("👍")
            .setReact("👎")
            message.channel.sendEmbed(embedsond);
        }
    }
});

bot.on('messageReactionAdd', (reaction, user) => { 
});

