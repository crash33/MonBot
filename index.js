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
            .addField("Réglement :","Il est interdit d'insulter mais aussi de faire de la publicité ou d'avoir un pseudo inapproprié. ", false)
            .setColor("0x0053ce")
            .setFooter("Family")
            .setThumbnail("https://zupimages.net/up/18/34/f6xe.png")
            message.channel.sendEmbed(embed);
        }
        if (message.content === "sondage"){
            var embedsond = new Discord.RichEmbed()
            .setAuthor("staff", "https://zupimages.net/up/18/34/f6xe.png")
            .setTitle("Sondage")
            .setDescription("Aimez-vous le serveur ?")
            .setColor("0xB40404")
            .setFooter("Family")
            message.channel.sendEmbed(embedsond).then(embedMessage => {
            embedMessage.react("👍"),embedMessage.react("👎")});
        }
        if (message.content === "choixxxpeau"){
            var embedss = new Discord.RichEmbed()
            .setAuthor("staff", "https://zupimages.net/up/18/34/f6xe.png")
            .setTitle("Aide :")
            .setDescription("Le choixpeau ne sait pas dans quelle maison te mettre, aide le en utilisant le sort suivante : HP-gryffondor ,HP-serpentard ,HP-poufsouffle ,HP-serdaigle")
            .setColor("0x0E8E7D")
            .setFooter("Family")
            message.channel.sendEmbed(embedss);
           
        }
    }
});

bot.on('messageReactionAdd', (reaction, user) => { 
});

