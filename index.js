const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', () => {
    console.log("Pret");
});

bot.login(process.env.TOKEN);
bot.on('message', message => {
   if ((message.content === ("salope")) || (message.content === ("pute")) || (message.content === ("connard")) || (message.content === ("salaud")) || (message.content === ("putain")) || (message.content === ("con")) || (message.content === ("connasse")) || (message.content === ("bite")) || (message.content === ("gland")) || (message.content === ("enculer")) || (message.content === ("batard")) || (message.content === ("fdp")) || (message.content === ("garage à bite")) || (message.content === ("jean-foutre")) || (message.content === ("merde")) || (message.content === ("caca")) || (message.content === ("merdeux")) || (message.content === ("niquer")) || (message.content === ("pd")) || (message.content === ("pédale")) || (message.content === ("pouffiasse")) || (message.content === ("sac a foutre")) || (message.content === ("sac à foutre")) || (message.content === ("stéarique")) || (message.content === ("tafiole")) || (message.content === ("tarlouze")) || (message.content === ("tocard")) || (message.content === ("zguègue")) || (message.content === ("xéropineur")) || (message.content === ("teubé")) || (message.content === ("raclure")) || (message.content === ("couilles")) || (message.content === ("tapette")) || (message.content === ("sac à merde")) || (message.content === ("sac a merde")) || (message.content === ("grosse merde")))
        message.delete()
    if ((message.content === ("je m'aime trop")) || (message.content === ("je m'aime")) || (message.content === ("je m'aime trop <3")) || (message.content === ("j'm'aime trop")) || (message.content === ("Je m'aime trop")) || (message.content === ("Je m'aime trop <3")) || (message.content === ("j'me kiff")))
        message.channel.send('Moi aussi :smirk:')
    if ((message.content === ("tu va bien willi?")) || (message.content === ("Tu va bien willi?")) || (message.content === ("Tu va bien Willi ?")) || (message.content === ("tu va bien Willi?")) || (message.content === ("Tu va bien willi")) || (message.content === ("Tu va bien willi.")) || (message.content === ("Tu va bien willi..")) || (message.content === ("Tu va bien willi...")) || (message.content === ("tu va bien willi")) || (message.content === ("tu va bien willi.")) || (message.content === ("tu va bien willi..")) || (message.content === ("tu va bien willi...")))
        message.channel.send('Je vais bien merci :sunglasses: ')
    if ((message.content === ("je t'aime Willi")) || (message.content === ("je t'aime willi")) || (message.content === ("jt'aime willi")) || (message.content === ("je t'aime willi !")) || (message.content === ("je t'aime Willi !")) || (message.content === ("je t'aime Willi !! <3")) || (message.content === ("je t'aime willi !!")))
        message.channel.send('Moi aussi :heart_eyes:')
    if ((message.content === ("t'as qu'elle age willi?")) || (message.content === ("quel âge as tu willi?")) || (message.content === ("qu'elle âge as-tu willi ?")) || (message.content === ("Qu'elle âge as-tu willi?")) || (message.content === ("t'as qu'elle age Willi?")) || (message.content === ("quel âge as tu Willi ?")) || (message.content === ("Willi t'as qu'elle âge ?")) || (message.content === ("willi t'as qu'elle age?")) || (message.content === ("t'as qu'elle age willi ?")) || (message.content === ("T'as qu'elle age willi?")) || (message.content === ("t'as qu'elle age Willi?")))
        message.channel.send("J'ai 48 ans :older_man:")
    });
