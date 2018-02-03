const Discord = require('discord.js');

module.exports = (client, msg, args) => {
    msg.channel.send(`Pong...`).then((m) => {
        m.edit(`Pong! \nBot latency: \`${m.createdTimestamp - msg.createdTimestamp} ms\` \nApi latency: \`${Math.round(client.ping)} ms\``);
    })
}