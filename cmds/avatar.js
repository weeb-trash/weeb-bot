const Discord = require('discord.js');

module.exports = (client, msg, args) => {
    let mention = msg.mentions.members.first();

        if(!args[0] || !mention) return msg.channel.send('Mention someone you snatch licker');

        const embed = new Discord.RichEmbed()
        .setTitle(`${mention.user.tag}'s avatar:`)
        .setImage(mention.user.displayAvatarURL)
        .setFooter(msg.author.tag, msg.author.displayAvatarURL)
        .setColor(msg.guild.members.get(client.user.id).displayHexColor)
        msg.channel.send(embed);
}