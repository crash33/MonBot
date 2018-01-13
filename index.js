/*=====================[ Variables ]============================*/
const Discord = require('discord.js');
const bot = new Discord.Client();
/*==========================[ Start ]============================*/

bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modérer"}});
});
var badWords = ['salope', 'pute', 'con', 'nique', 'baise', 'enfoirer', 'bite', 'connasse', 'penis', 'connard', 'fdp', 'merde', 'putain', 'encule', 'enculer', 'fils de pute', 'chier', 'emmerde', 'foutre', 'youporn', 'pornhub'];

bot.on('message', message => {
    var words = message.content.toLowerCase().trim().match(/\w+|\s+|[^\s\w]+/g);
    var containsBadWord = words.some(word => {
    return badWords.includes(word);         });
    if (containsBadWord) {
        message.delete(1);
    }
});
