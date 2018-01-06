/*=====================[ Variables ]============================*/
const Discord = require('discord.js');
const bot = new Discord.Client();
var randnum = 0;
var prefix = "+";
/*===================[ Variable / message ] ====================*/

var rdm2 = ['Pourquoi dis tu ça?', ':sob:', "C'est méchant ..", "Je ne suis qu'un robot. Je suis gentil ..:sweat_smile:", 'Je suis un robot certe mais il y a des limites :triumph:', 'Ok...'];
var rdm = ['Arrete... tu va me faire rougir :blush:', 'Moi aussi :heart:', "Désolé de te dire ça mais c'est pas réciproque :sweat_smile:", "Je ne suis qu'une intelligence artificielle.. :sweat_smile: ", ':heart_eyes: ', 'Pegi :underage:'];

/*==========================[ Start ]============================*/


bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modérer"}});
});

/*=======================[ JTM WILLI ]============================*/


bot.on('message', message => {   
    var input = message.content.toUpperCase();
    if ((input === ("JE T'AIME WILLI")) || (input === ("JE T'AIME WILLI !")) || (input === ("JTM WILLI")) || (input === ("JTM WILLI <3")) || (input === ("I LOVE WILLI")) || (input === ("WILLI JE T'AIME")) || (input === ("WILLI JTM")) || (input === ("JE T AIME WILLI"))){
        random();
        message.reply(rdm[randnum]);
    }
    
/*=====================[Je t'aime pas willi]=======================*/
    
    
    if ((input === ("JE TE DETESTE WILLI")) || (input === ("WILLI TU ES CON")) || (input === ("WILLI T'ES MOCHE")) || (input === ("JE T'AIME PAS WILLI")) || (input === ("WILLI T'ES CON"))){
        random();
        message.reply(rdm2[randnum]);
    }  
    
/*=========================[ TFK WILLI ?]===========================*/
    
    if ((input === ("QUE FAIS TU WILLI")) || (input === ("QUE FAIS TU WILLI?")) || (input === ("QUE FAIS TU WILLI ?")) || (input === ("WILLI TU FAIS QUOI")) || (input === ("WILLI TU FAIS QUOI?")) || (input === ("WILLI TU FAIS QUOI ?")) || (input === ("WILLI TFK")) || (input === ("WILLI TFK?")) || (input === ("WILLI TFK ?")) || (input === ("TFK WILLI")) || (input === ("TFK WILLI?")) || (input === ("TFK WILLI ?"))){
        message.reply("Je m'occupe en ce moment même de la modération.");
    }   
});
/*======================[ Systeme Random ]==========================*/

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(6);
    randnum = Math.floor(Math.random() * (max - min) + min);
}
/*====================================================================*/

          
