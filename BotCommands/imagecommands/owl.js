const superagent = require('superagent');

exports.run = async (bot, message, _args) => {
    let {body} = await superagent.get(`http://pics.floofybot.moe/owl`);
    let owlembed = new bot.discord.MessageEmbed()
    .setColor("#01FF6D")
    .setTitle("owl :owl:")
    .setImage(body.image);
    message.channel.send(owlembed);
}

exports.help = {
    name: "owl"
}
