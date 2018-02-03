module.exports = (client, msg) => {
    
    if (msg.author.bot) return;

    if (msg.content.indexOf(client.cfg.pf) !== 0) return;

    const args = msg.content.slice(client.cfg.pf.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(client.cmds.has(cmd)) {
        client.cmds.get(cmd)(client, msg, args);
    }
};