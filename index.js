const Discord = require('discord.js');
const bot = new Discord.Client();
var randnum = 0;
var prefix = "+";
var rdm2 = ['Pourquoi dis tu ça?', ':sob:', "C'est méchant ..", "Je ne suis qu'un robot. Je suis gentil ..:sweat_smile:', "Je ne suis qu'un robot qui a ses limites !! :triumph:", 'Ok...'];
var rdm = ['Arrete... tu va me faire rougir :blush:', 'Moi aussi :heart:', "Désolé de te dire ça mais c'est pas réciproque :sweat_smile:", "Je ne suis qu'une intelligence artificielle.. :sweat_smile: ", ':heart_eyes: ', 'Pegi :underage:'];
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modérer"}});
});

bot.login(process.env.TOKEN);
bot.on('message', message => {   
    var input = message.content.toUpperCase();
    if ((input === ("JE T'AIME WILLI")) || (input === ("JE T'AIME WILLI !")) || (input === ("JTM WILLI")) || (input === ("JTM WILLI <3")) || (input === ("I LOVE WILLI")) || (input === ("WILLI JE T'AIME")) || (input === ("WILLI JTM")) || (input === ("JE T AIME WILLI"))){
        random();
        message.reply(rdm[randnum]);
    }
    if ((input === ("JE TE DETESTE WILLI")) || (input === ("WILLI TU ES CON")) || (input === ("WILLI T'ES MOCHE")) || (input === ("JE T'AIME PAS WILLI")) || (input === ("WILLI T'ES CON"))){
        random();
        message.reply(rdm2[randnum]);
    }
   
});
function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(6);
    randnum = Math.floor(Math.random() * (max - min) + min);
}
/*==================================================================================*/

      
          
