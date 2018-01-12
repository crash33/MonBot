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

