/*=====================[ Variables ]============================*/
const Discord = require('discord.js');
const bot = new Discord.Client();
var randnum = 0;
var prefix = "+";
/*===================[ Variable / message ] ====================*/

var rdm2 = ['Pourquoi dis tu ça?', ':sob:', "C'est méchant ..", "Je ne suis qu'un robot. Je suis gentil ..:sweat_smile:", 'Je suis un robot certe mais il y a des limites :triumph:', 'Ok...'];
var rdm = ['Arrete... tu va me faire rougir :blush:', 'Moi aussi :heart:', "Désolé de te dire ça mais c'est pas réciproque :stuck_out_tongue_closed_eyes:", "Je ne suis qu'une intelligence artificielle.. :sweat_smile: ", ':heart_eyes: ', 'Pegi :underage:'];
var rdm3 = ['http://www.rethinkrobotics.com/wp-content/uploads/2017/03/Dab-301x150-300x150.jpg', 'https://pm1.narvii.com/6299/128a473bf98c5dba9dd2d4eac4b155c055570050_hq.jpg', 'https://i.imgur.com/vputvm4.jpg','https://pm1.narvii.com/6370/29445dd8783366ef8899c7ad9e3323c0f4d4b185_hq.jpg', 'https://cdn140.picsart.com/234113641004211.png?r1024x1024', 'https://www.spreadshirt.fr/image-server/v1/mp/designs/139969593,width=178,height=178/soccer-boy-dab-dance.png'];

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
    
    
    if ((input === ("JE TE DETESTE WILLI")) || (input === ("WILLI TU ES CON")) || (input === ("WILLI T'ES MOCHE")) || (input === ("JE T'AIME PAS WILLI")) || (input === ("WILLI T'ES CON")) || (input === ("T'ES DEBILLE WILLI")) || (input === ("T'ES CON WILLI"))){
        random();
        message.reply(rdm2[randnum]);
    }  
    
/*=========================[ TFK WILLI ?]===========================*/
    
    if ((input === ("QUE FAIS TU WILLI")) || (input === ("QUE FAIS TU WILLI?")) || (input === ("QUE FAIS TU WILLI ?")) || (input === ("WILLI TU FAIS QUOI")) || (input === ("WILLI TU FAIS QUOI?")) || (input === ("WILLI TU FAIS QUOI ?")) || (input === ("WILLI TFK")) || (input === ("WILLI TFK?")) || (input === ("WILLI TFK ?")) || (input === ("TFK WILLI")) || (input === ("TFK WILLI?")) || (input === ("TFK WILLI ?")) || (input === ("TU FAIS QUOI WILLI?")) || (input === ("TU FAIS QUOI WILLI")) || (input === ("TU FAIS QUOI WILLI ?"))){
        message.reply("Je m'occupe en ce moment même de la modération.");
    }   
/*==================================================================*/
    
    if ((input === ("WILLI DAB")) || (input === ("DAB WILLI")) || (input === ("FAIS UN DAB WILLI"))){
        message.channel.send("OK.. Je DAB !!!!", {
            file: "(rdm3[randnum])" 
        });
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
          
