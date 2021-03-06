const fs = require('fs');

module.exports = (bot) => {
    fs.readdir("/root/Project_Mudkip/events/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            const event = require(`/root/Project_Mudkip/events/${file}`);
            let eventName = file.split(".")[0];
            bot.on(eventName, event.bind(null, bot));
        });
    });

    fs.readdir("/root/Project_Mudkip/Modules/", (err) => {
        let files = ["functions", "logs"];
        if (err) return console.error(err);
        files.forEach(file => {
            require(`/root/Project_Mudkip/Modules/${file}.js`)(bot);
            console.log(`${file}.js loaded`);
        });
    });
    
    let folders = ["songcommands", "musiccommands", "imagecommands", "funcommands", "imagecommands/gifcommands", "modcommands", "maincommands", "economycommands", "economycommands/games", "ownercommands"];
    folders.forEach(function(folder) {
        fs.readdir(`/root/Project_Mudkip/BotCommands/${folder}/`, (err, files) => {
            if (err) return console.log(err);
            let jsfile = files.filter(f => f.split(".").pop() === "js")
            if (jsfile.length <= 0) {
                console.log("Could not find commands");
                return;
            } 
    
            jsfile.forEach((f) => {
                let props = require(`/root/Project_Mudkip/BotCommands/${folder}/${f}`);
                console.log(`${f} loaded`);
                bot.commands.set(props.help.name, props);
                if (props.help.aliases) {
                    props.help.aliases.forEach(alias => {
                        bot.aliases.set(alias, props);
                    });
                }
            });
        });
    });
}