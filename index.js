const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
console.log(process.version)
client.login('NzMyODc0MDY5MjYyODYwMzA5.Xw68Kg.W1x5gdb5RX68ZwbW24EhqgtARU4');