const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');
var prefix = '+';
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Amy its ready !!");
    bot.user.setPresence({ game: { name: "Coder"}});
});
bot.on('message', message => {
    if (message.startsWith(prefix + 'meteo')) { // This checks to see if the beginning of the message is calling the weather command.
        // You can find some of the code used here on the weather-js npm page in the description.

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err) message.channel.send(err);

            // We also want them to know if a place they enter is invalid.
             [if (result === undefined || result.length === 0)] {
                message.channel.send('**Merci de rentrer une location valide ..**') // This tells them in chat that the place they entered is invalid.
                return; // This exits the code so the rest doesn't run.
            }

            // Variables
            var current = result[0].current; // This is a variable for the current part of the JSON output
            var location = result[0].location; // This is a variable for the location part of the JSON output

            // Let's use an embed for this.
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
                .setAuthor(`Météo pour: ${current.observationpoint}`) // This shows the current location of the weather.
                .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
                .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
                .addField('Timezone',`UTC${location.timezone}`, true) 
                .addField('Température:',`${current.temperature} °C`, true)
                .addField('Vents:',current.winddisplay, true)
                .addField('Humidité:', `${current.humidity}%`, true)
                message.channel.send({embed});
        });
    }

});
