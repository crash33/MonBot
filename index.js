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
var badWords = ['salope', 'pute', 'con', 'bite', 'connasse', 'penis', 'connard', 'fdp', 'merde', 'putain', 'encule', 'enculer', 'fils de pute', 'chier', 'emmerde', 'foutre', 'youporn', 'pornhub'];

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
    var containsWillibonne = words.some(word => {
    return willibonne.includes(word);        });
    var containsWillinuit = words.some(word => {
    return willinuit.includes(word);        });
    if (containsBadWord) {
        message.delete(1);
    }
)};
