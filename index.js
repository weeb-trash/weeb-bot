const Discord = require('discord.js');
const client = new Discord.Client();

client.cfg = require ('./source/cfg.json');

client.log = require('./functions/log.js');

client.cmds = new Discord.Collection();

client.cmds.set('ping', require('./cmds/ping.js'));
client.cmds.set('say', require('./cmds/say.js'));
client.cmds.set('server', require('./cmds/server.js'));
client.cmds.set('avatar', require('./cmds/avatar.js'));
client.cmds.set('setavatar', require('./cmds/setavatar.js'));
client.cmds.set('setgame', require('./cmds/setgame.js'));

client.on('ready', () => require('./events/ready.js')(client));
client.on('message', (msg) => require('./events/msg.js')(client, msg));

client.login(process.env.BOT_TOKEN);
