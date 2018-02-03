const Discord = require('discord.js');

module.exports = (client, msg, args) => {
    if (!args) return msg.reply("no args bich");
        if (msg.content.toLowerCase().includes("@everyone") || msg.content.toLowerCase().includes("@here")) return;
        msg.channel.send(args.join(" "));
        msg.delete();
}