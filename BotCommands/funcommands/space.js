exports.run = async (_bot, message, args) => {
    if (args.length < 1) {
        return message.reply('**You must provide text to space out!**');
    }
    let amount = 2;

    if (!isNaN(args[0])) {
        amount = parseInt(args[0]);
        (amount < 1) && (amount = 1);
        (amount > 15) && (amount = 15);
        args = args.slice(1);
    }
    message.channel.send(args.join(' '.repeat(amount / 2)).split('').join(' '.repeat(amount)));
};

exports.help = {
    name: 'space'
};
