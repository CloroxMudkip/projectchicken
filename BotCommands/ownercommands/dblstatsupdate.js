const axios = require("axios");
require("dotenv").config();
const ownerID = '293148538886553602';

exports.run = async (bot, message, _args) => {
    if (message.author.id != ownerID) return;
    message.channel.send("Updating Stats On Dbl");

    axios.post(`https://discordbotlist.com/api/bots/${process.env.BOT_ID}/stats`, {
        shard_id: 0,
        guilds: bot.guilds.cache.size,
        users: bot.users.cache.size
    }, {
      headers: {
          Authorization: `Bot ${process.env.DBLTOKEN}`,
      }
    }).catch(console.error);
}
 
exports.help = {
  name: "updatestats",
  aliases: ['dblupdate']
}
