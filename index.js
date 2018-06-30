/*=====================[ Variables ]============================*/
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modérer"}});
});
bot.on('message', message => { 
    let memberGotRole = message.member.roles.find('id', message.guild.roles.find("name", "Admin").id)
    if (memberGotRole){
        if (message.content === "inf"){
            var embed = new Discord.RichEmbed()
            .setTitle("Informations")
            .setDescription("Veuillez vous rendre sur le salon textuel : #authentification   Pour vous connecter sur les différents salons Gaming")
            .addField("Jeux :","- Fortnite     - League Of Legends", false)
            .addField("Grades :", "Visiteur / Membre / Ami(e) / Modo / Admin", true)
            .setColor("0x0053ce")
            .setFooter("Family Games")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/26/3/1530109504-logo.png")
            message.channel.sendEmbed(embed);
        }
        if (message.content === "sond"){
            var embedsond = new Discord.RichEmbed()
            .setAuthor("staff", "https://image.noelshack.com/fichiers/2018/26/3/1530109504-logo.png")
            .setTitle("Sondage")
            .setDescription("Comment trouvez-vous ce nouveau système ?")
            .setColor("0xB40404")
            .setFooter("Family Games")
            message.channel.sendEmbed(embedsond);
        }
    }
});
clientDiscord.on('messageReactionAdd' , (reaction, user) => {
    if(reaction.emoji.name === ":one:"){
        let guild = bot.guilds.find("name", "Family Games");
        var channel = guild.channels.find("name", "informations");
    }       
});

