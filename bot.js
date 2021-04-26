const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
const TENOR_API_KEY = '6JZKPHOQ8PSC';
client.login(process.env.BOT_TOKEN);
client.on('message', async msg => {
	if (msg.content === '!vc') {
		const characters = [
			{
				name: 'Brimstone',
				role: 'Controller',
				number: 1,
				img: 'https://liquipedia.net/commons/images/d/d9/Brimstone_Artwork.png',
			},
			{
				name: 'Viper',
				role: 'Controller',
				number: 2,
				img: 'https://liquipedia.net/commons/images/4/4b/Viper_Artwork.png',
			},
			{
				name: 'Omen',
				role: 'Controller',
				number: 3,
				img:
					'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png',
			},

			{
				name: 'Killjoy',
				role: 'Sentinel',
				number: 4,
				img: 'https://liquipedia.net/commons/images/8/8c/Killjoy_Artwork.png',
			},
			{
				name: 'Cypher',
				role: 'Sentinel',
				number: 5,
				img:
					'https://liquipedia.net/commons/images/thumb/b/b1/Cypher_Artwork.png/900px-Cypher_Artwork.png',
			},
			{
				name: 'Sova',
				role: 'Initiator',
				number: 6,
				img:
					'https://liquipedia.net/commons/images/thumb/e/ec/Sova_Artwork.png/900px-Sova_Artwork.png',
			},
			{
				name: 'Sage',
				role: 'Sentinel',
				number: 7,
				img:
					'https://liquipedia.net/commons/images/thumb/a/a4/Sage_Artwork.png/900px-Sage_Artwork.png',
			},
			{
				name: 'Phoenix',
				role: 'Duelist',
				number: 9,
				img: 'https://liquipedia.net/commons/images/f/f8/Phoenix_Artwork.png',
			},
			{
				name: 'Jett',
				role: 'Duelist',
				number: 10,
				img:
					'https://liquipedia.net/commons/images/thumb/2/2c/Jett_Artwork.png/900px-Jett_Artwork.png',
			},
			{
				name: 'Reyna',
				role: 'Duelist',
				number: 11,
				img: 'https://liquipedia.net/commons/images/f/f4/Reyna_Artwork.png',
			},
			{
				name: 'Raze',
				role: 'Duelist',
				number: 12,
				img:
					'https://liquipedia.net/commons/images/thumb/0/0c/Raze_Artwork.png/900px-Raze_Artwork.png',
			},
			{
				name: 'Breach',
				role: 'Initiator',
				number: 13,
				img: 'https://liquipedia.net/commons/images/4/4e/Breach_Artwork.png',
			},
			{
				name: 'Skye',
				role: 'Initiator',
				number: 14,
				img:
					'https://liquipedia.net/commons/images/thumb/4/41/Skye_Artwork.png/900px-Skye_Artwork.png',
			},
			{
				name: 'Yoru',
				role: 'Duelist',
				number: 15,
				img:
					'https://liquipedia.net/commons/images/thumb/f/fb/Yoru_Artwork.png/900px-Yoru_Artwork.png',
			},
			{
				name: 'Astra',
				role: 'Controller',
				number: 16,
				img:
					'https://liquipedia.net/commons/images/thumb/1/13/Astra_Artwork.png/900px-Astra_Artwork.png',
			},
		];

		const randomNum = Math.floor(Math.random() * characters.length);
		const character = characters[randomNum];

		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(character.number + ': ' + character.name)
			.setDescription(character.role)
			.setThumbnail(
				'https://cdn.dribbble.com/users/2348/screenshots/10696082/media/4a24583ea649f9df1415775a37c84ae5.png?compress=1&resize=400x300'
			)
			.setImage(character.img);

		msg.channel.send(embed);
	}
});
