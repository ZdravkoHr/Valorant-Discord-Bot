const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
const TENOR_API_KEY = '6JZKPHOQ8PSC';
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
	console.log(':beer');
});

client.on('message', async msg => {
	if (msg.content === '!gif') {
		const url = `https://g.tenor.com/v1/search?q=cat&key=${TENOR_API_KEY}&limit=8`;
		const response = await fetch(url);
		const json = await response.json();
		msg.channel.send(json.results[0].url);
	}
});
