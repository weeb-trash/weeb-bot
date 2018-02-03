const Discord = require('discord.js');

module.exports = (client, msg, args) => {
    if (msg.author.id !== (client.cfg.ownerID)) return;
        if (!args) return msg.reply("no args bich");
        if (!args[0].toLowerCase().startsWith("http")) return msg.reply('Invalid link you autistic gobshite');
        client.user.setAvatar(`${args.join(" ")}`);
        msg.channel.send("Avatar changed ;3");
}