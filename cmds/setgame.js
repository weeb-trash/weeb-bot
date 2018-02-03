const Discord = require('discord.js');

module.exports = (client, msg, args) => {
    if (msg.author.id !== (client.cfg.ownerID)) return;
        if (!args) return msg.reply("no args bich");
        client.user.setGame(`${args.join(" ")}`);
        msg.channel.send(`Game set to: ${args.join(" ")}`);
}