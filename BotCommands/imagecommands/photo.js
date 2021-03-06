const fetch = require('snekfetch');

exports.run = function (bot, message, _args) {
    fetch.get('http://www.splashbase.co/api/v1/images/random').then(photo => {
        const embed = new bot.discord.MessageEmbed()
        .setColor('#01FF6D')
        .setTitle("Random Photo :frame_photo:")
        .setImage(`${photo.body.url}`);
        message.channel.send(embed)
    }).catch(err => {
        if (err) {
            message.channel.send('OOPS... something went wrong');
        }
    });
};

exports.help = {
    name: 'photo'
};
