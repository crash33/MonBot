const Discord = require('discord.js');
const bot = new Discord.Client();
var randnum = 0;
var prefix = "+";
var rdm = ['Arrete... tu va me faire rougir :blush:', 'Moi aussi :heart:', "Désolé de te dire ça mais c'est pas réciproque :sweat_smile:", "Je ne suis qu'une intelligence artificielle.. :sweat_smile: ", ':heart_eyes: ', 'Pegi :underage:'];
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modérer"}});
});

bot.login(process.env.TOKEN);
bot.on('message', message => {   
    var input = message.content.toUpperCase();
    if ((input === ("JE T'AIME WILLI")) || (input === ("JE T'AIME WILLI !"))){
        random();
        message.reply(rdm[randnum]);
    }
   
});
function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(6);
    randnum = Math.floor(Math.random() * (max - min) + min);
}
/*==================================================================================*/

      
          
