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
            .setAuthor("Poudlard", "https://zupimages.net/up/18/34/f6xe.png")
            .setTitle("Aide :")
            .setDescription("Le choixpeau ne sait pas dans quelle maison te mettre, aide le en utilisant le sort suivante : HP-gryffondor ,HP-serpentard ,HP-poufsouffle ,HP-serdaigle")
            .setColor("0x0E8E7D")
            .setFooter("Family")
            message.channel.sendEmbed(embedss);
           
        }
        if (message.content === "popo1"){
            var embedpopo1 = new Discord.RichEmbed()
            .setAuthor("Severus Rogue - Philtre de Mort Vivante", "https://zupimages.net/up/18/34/f6xe.png")
            .setTitle("Wiki :")
            .setDescription("La Goutte du Mort vivant est une potion somnifère très puissante également appelée philtre de Mort Vivante.")
            .addField("Recette Partie 1 :","Ajouter de la poudre rose jusqu'à ce que la potion devienne jaune, ajouter des fèves sopophoriques liquéfiées jusqu'à ce que la potion devienne turquoise. Chauffer jusqu'à ce que la potion devienne violette. Ajouter du liquide blanc jusqu'à ce que la potion devienne rouge. Chauffer jusqu'à ce que la potion devienne jaune. Chauffer jusqu'à ce que la potion devienne verte. Ajouter des crochets de serpent en poudre jusqu'à ce que la potion devienne turquoise.", false)
            .addField("Recette Partie 2 :","Ajouter du mucus de Veracrasse jusqu'à ce que la potion devienne rose. Chauffer jusqu'à ce que la potion devienne orange. Ajouter de la poudre rose jusqu'à ce que la potion devienne verte. Ajouter de la cervelle de paresseux liquéfiée jusqu'à ce que la potion devienne verte. Chauffer jusqu'à ce que la potion devienne rose. Ajouter de l'infusion d'armoise jusqu'à ce que la potion devienne orange. Ajouter des crochets de serpent en poudre jusqu'à ce que la potion devienne jaune. Ajouter du liquide violet[1] jusqu'à ce que la potion devienne turquoise. Chauffer jusqu'à ce que la potion devienne violette. Chauffer jusqu'à ce que la potion devienne rose.", false)
            .setColor("0x0E8E7D")
            .setFooter("Source http://fr.harrypotter.wikia.com")
            .setThumbnail("https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiU84GM04DdAhUPEVAKHVoCDukQjRx6BAgBEAU&url=http%3A%2F%2Ffr.crossroads.wikia.com%2Fwiki%2FPhiltre_de_Mort_Vivante&psig=AOvVaw1MFcEIgRzDv5qvTJVPXQSa&ust=1535026909696133")
            message.channel.sendEmbed(embedpopo1);
           
        }
    }
});

bot.on('messageReactionAdd', (reaction, user) => { 
});

