const Discord = require('discord.js');

module.exports = (client, msg, args) => {
    const embed = new Discord.RichEmbed()
        .setFooter(msg.author.tag, msg.author.displayAvatarURL)
        .setDescription(`${msg.guild.name}'s Info`)
        .setThumbnail(msg.guild.iconURL)
        .addField("Members", `\`${msg.guild.memberCount}\` members, \n\`${msg.guild.members.filter(member => member.user.bot).size}\` bots, \n\`${msg.guild.members.filter(member => !member.user.bot).size}\` humans`, true)
        .addField("Channels", `\`${msg.guild.channels.filter(ch => ch.type === 'voice').size}\` VC's, \n\`${msg.guild.channels.filter(ch => ch.type === 'text').size}\` text channels`, true)
        .addField(`Owner`,`\`${msg.guild.owner.user.tag}\``, true)
        .addField(`Roles`, `\`${msg.guild.roles.size}\``, true)
        .setColor(msg.guild.members.get(client.user.id).displayHexColor)
    msg.channel.send(embed)
}