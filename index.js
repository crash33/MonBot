const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = "+";
var randnum = 0;
bot.on('ready', () => {
    console.log("Pret");
});

bot.login(process.env.TOKEN);
bot.on('message', message => {
   if ((message.content === ("salope")) || (message.content === ("pute")) || (message.content === ("connard")) || (message.content === ("salaud")) || (message.content === ("putain")) || (message.content === ("con")) || (message.content === ("connasse")) || (message.content === ("bite")) || (message.content === ("gland")) || (message.content === ("enculer")) || (message.content === ("batard")) || (message.content === ("fdp")) || (message.content === ("garage à bite")) || (message.content === ("jean-foutre")) || (message.content === ("merde")) || (message.content === ("caca")) || (message.content === ("merdeux")) || (message.content === ("niquer")) || (message.content === ("pd")) || (message.content === ("pédale")) || (message.content === ("pouffiasse")) || (message.content === ("sac a foutre")) || (message.content === ("sac à foutre")) || (message.content === ("stéarique")) || (message.content === ("tafiole")) || (message.content === ("tarlouze")) || (message.content === ("tocard")) || (message.content === ("zguègue")) || (message.content === ("xéropineur")) || (message.content === ("teubé")) || (message.content === ("raclure")) || (message.content === ("couilles")) || (message.content === ("tapette")) || (message.content === ("sac à merde")) || (message.content === ("sac a merde")) || (message.content === ("grosse merde")))
        message.delete()
    if ((message.content === ("je m'aime trop")) || (message.content === ("je m'aime")) || (message.content === ("je m'aime trop <3")) || (message.content === ("j'm'aime trop")) || (message.content === ("Je m'aime trop")) || (message.content === ("Je m'aime trop <3")) || (message.content === ("j'me kiff")))
        message.channel.send('Moi aussi :smirk:')
    if ((message.content === ("tu va bien willi?")) || (message.content === ("Tu va bien willi?")) || (message.content === ("Tu va bien Willi ?")) || (message.content === ("tu va bien Willi?")) || (message.content === ("Tu vas bien willi")) || (message.content === ("Tu va bien willi.")) || (message.content === ("Tu vas bien willi..")) || (message.content === ("Tu va bien willi...")) || (message.content === ("tu vas bien willi")) || (message.content === ("tu va bien willi.")) || (message.content === ("tu va bien willi..")) || (message.content === ("tu vas bien willi...")) || (message.content === ("willi comment vas-tu ?")) || (message.content === ("willi comment vas tu?")) || (message.content === ("Willi comment vas-tu?")) || (message.content === ("Willi comment vas-tu ?")) || (message.content === ("willi comment vas-tu ?")))
        message.channel.send('Je vais bien merci :sunglasses: ')
    if ((message.content === ("je t'aime Willi")) || (message.content === ("je t'aime willi")) || (message.content === ("jt'aime willi")) || (message.content === ("je t'aime willi !")) || (message.content === ("je t'aime Willi !")) || (message.content === ("je t'aime Willi !! <3")) || (message.content === ("je t'aime willi !!")) || (message.content === ("je t'aime willi !! <3")) || (message.content === ("Jt'aime willi !!")) || (message.content === ("jt'aime willi <3")) || (message.content === ("jt'aime willi ! <3")) || (message.content === ("je t'aime willi <3")) || (message.content === ("Willi je t'aime <3")) || (message.content === ("willi je t'aime <3")) || (message.content === ("willi jt'aime")) || (message.content === ("Willi jt'aime")) || (message.content === ("Willi jt'aime <3")) || (message.content === ("Willi je t'aime <3")) || (message.content === ("Willi je t'aime")) || (message.content === ("willi je t'aime <3")) || (message.content === ("willi je t'aime")) || (message.content === ("Willi jtm <3")) || (message.content === ("Willi jtm")) || (message.content === ("willi jtm <3")) || (message.content === ("willi jtm")) || (message.content === ("jtm willi")) || (message.content === ("jtm Willi")) || (message.content === ("Jtm willi")) || (message.content === ("Jtm Willi")) || (message.content === ("jtm willi <3")) || (message.content === ("jtm Willi <3")) || (message.content === ("Jtm willi <3")) || (message.content === ("Jtm Willi <3"))){
        random();
        if (randnum == 1){
            message.reply('Moi aussi :blush:');
        }
        if (randnum == 2){
            message.reply(':blush:');
        }
        if (randnum == 3){
            message.reply('Arrete... tu va me faire rougir :kissing_closed_eyes:');
        }
        if (randunm == 4){
            message.reply("Ce n'est pas réciproque :laughing:");
        }
        if (randnum == 5){
            message.reply("Pas moi <3");
        }
        if (randnum == 6){
            message.reply("Pas moi :laughing:");
        }
    }
    if ((message.content === ("t'as qu'elle age willi?")) || (message.content === ("quel âge as tu willi?")) || (message.content === ("qu'elle âge as-tu willi ?")) || (message.content === ("Qu'elle âge as-tu willi?")) || (message.content === ("t'as qu'elle age Willi?")) || (message.content === ("quel âge as tu Willi ?")) || (message.content === ("Willi t'as qu'elle âge ?")) || (message.content === ("willi t'as qu'elle age?")) || (message.content === ("t'as qu'elle age willi ?")) || (message.content === ("T'as qu'elle age willi?")) || (message.content === ("t'as qu'elle age Willi?")) || (message.content === ("willi qu'elle age as tu ?")) || (message.content === ("willi qu'elle age as tu?")) || (message.content === ("Willi qu'elle age as tu ?")) || (message.content === ("Willi qu'elle age as tu?")) || (message.content === ("Willi qu'elle âge as-tu?")))
        message.channel.send("J'ai 48 ans :older_man:")
    if ((message.content === ("Willi")) || (message.content === ("Willi ?")) || (message.content === ("willi")) || (message.content === ("Willi?")) || (message.contant === ("willi?")))
        message.channel.send("Pour le moment je ne suis qu'un prototype. :robot:")
    
    }
});
function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(6);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
