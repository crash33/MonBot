const Discord = require('discord.js');
const bot = new Discord.Client();
var randnum = 0;
var prefix = "+";
var rdm = ['Arrete... tu va me faire rougir', 'Je te veux dans mon lit !', 'OUI', 'Suce moi !', 'test4', 'test5'];
bot.on('ready', () => {
    console.log("Pret");
    bot.user.setPresence({ game: { name: "Modérer"}});
});

bot.login(process.env.TOKEN);
bot.on('message', message => {   
    if ((message.content === ("je t'aime Willi")) || (message.content === ("je t'aime willi"))){
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
bot.on("message", function(message){
    var input = message.content.toUpperCase();
    if (input === "SALUT"){
        message.channel.send("Hey !");
    }
});
      
          
