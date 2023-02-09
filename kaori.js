const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

var reglement = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('Principaux règles de la communauté Kaori')
.setDescription('')
.setImage('')
var donateur = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('')
.setImage('')
var guide = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('')
.setDescription(``)
.setImage('')
var guide2 = new Discord.MessageEmbed()
.setColor('#303136')
.setDescription('')

client.on('ready', () => {
	console.log('ready')
})

client.on('messageCreate',  message => {
  if(message.author.bot) return;

        var row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("select")
            .setPlaceholder("🧾 Lire le règlement de la communauté")
            .addOptions([
                {
                    label: "Règlement",
                  emoji: "",
                    value: "reglement"
                },
                {
                    label: "Guide",
                  emoji: "",
                    value: "guide"
                },
              {
                    label: "Donateur",
                emoji: "",
                    value: "donateur"
                }
            ])
			);
	if (message.content.toLowerCase().startsWith('.')) {
	 	const msg = message.content.slice(1).trim()
      	const args = msg.split(/ +/)
      	const command = args.shift().toLowerCase()

      	if (command === "rules") {
 			const regle = new Discord.MessageEmbed()
        .setImage("https://i.imgur.com/cEEVtMX.jpg")
          .setColor("#303136")
        	const descregle = new Discord.MessageEmbed()
          .setTitle("")
          .setColor("#303136")
          .setImage("https://i.imgur.com/RsgSUaa.png")
          .addFields(
		{ name: 'Présentation', value: `Kaori Café est une communauté francophone qui a pour but de regrouper plusieurs personnes autour d'une communauté amicale, respectueuse & bienfaisante.` },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Important', value: 'Tout comportement qui sera contre les conditions de notre communauté résultera à un bannissement immédiat et sans appel.', inline: true },
		{ name: 'Faire un don', value: 'Faites un don à la communauté [ici](https://ko-fi.com/kaorifr) merci en avance.', inline: true },
	)

       		message.channel.send({ embeds: [ regle, descregle ], components: [row]})
      	}
	}
});
client.on("interactionCreate", interaction => {
            if(interaction.isSelectMenu()){
            if(interaction.customId === "select"){
                console.log("Selection faite");
            
                if(interaction.values == "reglement"){
                    interaction.reply({embeds: [reglement], ephemeral: true});
                
            };
              if(interaction.values == "guide"){
                    interaction.reply({embeds: [ guide, guide2 ], ephemeral: true});
                
            };
              if(interaction.values == "conditions"){
                    interaction.reply({embeds: [donateur], ephemeral: true});
                
            };
        }
        }
    });

client.login(process.env.TOKEN)
