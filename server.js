const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NDQxMjkwMTcxOTU1MjgxOTMy.DcuHOQ.XTeGIER85IJCiog69O7OT9xMnsY');
