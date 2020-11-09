const RetroText = require('retrotext').default;

exports.run = async (_bot, message, args) => {
    if (args.length !== 0) {
        const [line1, line2, line3] = args.join(" ").split(",").map(elem => elem.trim());
        if (/^[\w\ ]+$/i.test(line1) === false || /^[\w\ ]+$/i.test(line2) === false || /^[\w\ ]+$/i.test(line3) === false) return message.reply("Only alphanumeric characters, spaces, and underscores are allowed!");

        if (line3 !== undefined) {
            const text = new RetroText().setLine1(line1).setLine2(line2).setLine3(line3).setBackgroundStyle("outlineTri").setTextStyle("chrome");
            const textImage = await text.fetchURL();
            message.channel.send({
                files: [{
                    attachment: textImage,
                    name: "retro.png"
                }]
            });

        } else if (line2 !== undefined) {
            const text = new RetroText().setLine1(line1).setLine2(line2).setBackgroundStyle("outlineTri").setTextStyle("chrome");
            const textImage = await text.fetchURL();
            message.channel.send({
                files: [{
                    attachment: textImage,
                    name: "retro.png"
                }]
            });

        } else {
            const text = new RetroText().setLine2(line1).setBackgroundStyle("outlineTri").setTextStyle("chrome");
            const textImage = await text.fetchURL();
            message.channel.send({
                files: [{
                    attachment: textImage,
                    name: "retro.png"
                }]
            });
        }
    } else {
        message.reply("you need to provide some text to generate some retro text");
    }
};

exports.help = {
    name: "retro"
}