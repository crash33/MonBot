/*=====================[ Variables ]============================*/
const Discord = require('discord.js');
const bot = new Discord.Client();
var randnum = 0;
var prefix = "+";
/*===================[ Variable / message ] ====================*/

var rdm2 = ['Pourquoi dis tu ça?', ':sob:', "C'est méchant ..", "Je ne suis qu'un robot. Je suis gentil ..:sweat_smile:", 'Je suis un robot certe mais il y a des limites :triumph:', 'Ok...'];
var rdm = ['Arrete... tu va me faire rougir :blush:', 'Moi aussi :heart:', "Désolé de te dire ça mais c'est pas réciproque :stuck_out_tongue_closed_eyes:", "Je ne suis qu'une intelligence artificielle.. :sweat_smile: ", ':heart_eyes: ', 'Pegi :underage:'];

/*==========================[ Start ]============================*/


bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modérer"}});
});

/*=======================[ JTM WILLI ]============================*/


bot.on('message', message => {   
    var input = message.content.toUpperCase();
    if ((input === ("JE TE DETESTE WILLI")) || (input === ("WILLI TU ES CON")) || (input === ("WILLI T'ES MOCHE")) || (input === ("JE T'AIME PAS WILLI")) || (input === ("WILLI T'ES CON")) || (input === ("T'ES DEBILLE WILLI")) || (input === ("T'ES CON WILLI"))){
        random();
        message.reply(rdm2[randnum]);
    }    
});
/*======================[ Systeme Random ]==========================*/

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(6);
    randnum = Math.floor(Math.random() * (max - min) + min);
}
/*============================[ Bot ]================================*/
bot.on('message', message => {
    if (message.content.startsWith(prefix + "help")){
        var help_embed = new Discord.RichEmbed();
        help_embed.setColor('#3498db');
        message.channel.send({embed: {
            color: 3447003,
            title: "[BOT] Willi",
            fields: [{
                name: "Version :",
                value: "1.0.0"
            },
            {
                name: "Auteur:",
                value: "Crashmandu33"
            }]
        }});
    }   
});
/*=====================================================================*/
var badWords = ['salope', 'pute', 'con', 'bite', 'connasse', 'penis', 'connard', 'fdp', 'merde', 'putain', 'encule', 'enculer', 'fils de pute', 'chier', 'emmerde', 'foutre', 'youporn', 'pornhub'];
var willi = ['willi'];
var willitest2 = ['dab'];
var willipas = ['pas', 'ne', "n'"];
var williaime = ['aime', 'aimes', 'jtm', 'love'];
var willitfk = ['tfk', 'tu fais quoi', 'que fais tu'];
var williwht = ['?'];
var willip = [','];
bot.on('message', message => {
    random();
    var words = message.content.toLowerCase().trim().match(/\w+|\s+|[^\s\w]+/g);
    var containsBadWord = words.some(word => {
    return badWords.includes(word);         });
    var containsWilli = words.some(word => {
    return willi.includes(word);            });
    var containsWillitest2 = words.some(word => {
    return willitest2.includes(word);       });
    var containsWillipas = words.some(word => {
    return willipas.includes(word);         });
    var containsWilliaime = words.some(word => {
    return williaime.includes(word);        });
    var containsWilliwht = words.some(word => {
    return williwht.includes(word);        });
    var containsWillitfk = words.some(word => {
    return willitfk.includes(word);        });
    var containsWillip = words.some(word => {
    return willip.includes(word);        });
    if (containsBadWord) {
        message.delete(1);
    }
    if (containsWilli) {
        if (containsWilliaime) {
            if (!containsWillipas) {
                message.reply(rdm[randnum]);
            }else{
                message.reply("J'ai rien fais moi :sob: ");
                }
            if (containsWillitest2) {
                message.reply("OK.. Je DAB !!!!", {
                    file: "http://www.rethinkrobotics.com/wp-content/uploads/2017/03/Dab-301x150-300x150.jpg" 
                });
            }
        }
        if (containsWillitfk) {
            if (containsWilliwht) {
                message.reply("Je suis actuellement en plein développement :robot:");
            }else{
                message.reply("Je m'occupe de la sécurité :guardsman: ");
            }
        }
    }
});
