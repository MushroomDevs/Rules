const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

var reglement = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('Règlement principale de la communauté')
.setDescription("`1.`Respectez les autres utilisateurs - Tout manque de respect envers les autres utilisateurs, qu'il s'agisse d'insultes, de harcèlement, de diffamation ou de tout autre comportement inapproprié, est strictement interdit.\n\n`2.` Gardez un langage approprié - Veuillez éviter les propos vulgaires, les insultes, les propos haineux ou tout autre langage offensant pour les autres utilisateurs.\n\n`3.` Ne partagez pas de contenu inapproprié - Il est interdit de partager du contenu offensant, pornographique, haineux ou violent.\n\n`4.` Évitez les sujets de controverse - Il est préférable d'éviter les sujets de controverse tels que la politique, la religion, etc. afin de maintenir une atmosphère amicale et positive sur le serveur.\n\n`5.` Pas de spam - Il est interdit de spammer les canaux de discussion avec des messages répétitifs ou non pertinents.\n\n`6.` Respectez les règles du serveur - Veuillez respecter toutes les règles du serveur, y compris les restrictions de canal et les horaires de modération.\n\n`7.` Signalez les violations des règles - Si vous observez une violation des règles du serveur, veuillez le signaler aux modérateurs pour qu'ils puissent prendre les mesures nécessaires.\n\n`8.` Soyez positif et constructif - Encouragez une atmosphère positive et constructrice sur le serveur en faisant preuve de courtoisie, de compréhension et de bienveillance envers les autres utilisateurs.\n\n`9.` Pas de publicités non autorisées - Il est interdit de faire de la publicité pour d'autres serveurs Discord ou pour tout autre produit ou service sans autorisation préalable des modérateurs.\n\n`10.` Évitez les débats houleux - Les débats peuvent être une source d'apprentissage et d'enrichissement, mais il est important de les aborder de manière respectueuse et de ne pas les laisser dégénérer en disputes inutiles.")
.setImage('https://i.imgur.com/RsgSUaa.png')
var donateur = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('Dontions aux serveur')
.setDescription(`Chers membres de la communauté Kaori,

Nous voulons vous remercier d'être avec nous sur notre serveur Discord ! Nous travaillons sans relâche pour vous offrir une expérience agréable et pour maintenir notre serveur en bonne santé.

Si vous avez apprécié votre temps sur notre serveur et si vous souhaitez nous soutenir dans notre travail, nous vous encourageons à faire un don. Toutes les contributions, même les plus petites, sont grandement appréciées et nous aideront à poursuivre notre travail.

Vous pouvez faire un don en suivant ce lien : https://ko-fi.com/kaorifr.

Merci pour votre soutien constant et nous espérons que vous continuerez à apprécier votre temps sur notre serveur.

**Cordialement**,

L'équipe Kaori`)
.setImage('https://i.imgur.com/RsgSUaa.png')
var guide = new Discord.MessageEmbed()
.setColor('#303136')
.setTitle('Guide de la communauté')
.setDescription(`Comment utiliser les commandes : Pour utiliser les commandes sur le serveur, il vous suffit de taper "/" suivi de la commande souhaitée. Vous pouvez trouver la liste des commandes disponibles dans le canal <#945910640860622878>.

Comment participer aux discussions : Pour participer aux discussions sur le serveur, il vous suffit de cliquer sur un canal de discussion et de taper votre message. N'oubliez pas de respecter les autres membres de la communauté et de ne pas publier de contenu inapproprié.

Comment utiliser les réactions : Vous pouvez utiliser les réactions pour exprimer vos sentiments en réponse à un message. Pour ajouter une réaction, cliquez sur le bouton "+" à côté du message et choisissez la réaction souhaitée.

Comment partager du contenu : Vous pouvez partager du contenu, comme des images ou des vidéos, en cliquant sur le bouton "Upload" et en sélectionnant le fichier que vous souhaitez partager. Assurez-vous de ne pas partager de contenu inapproprié ou offensant.

Comment signaler un comportement inapproprié : Si vous rencontrez un comportement inapproprié sur le serveur, vous pouvez signaler ce comportement en contactant un membre du personnel.

Nous espérons que ce guide vous aidera à tirer le meilleur parti de votre expérience sur le serveur Discord Kaori. Si vous avez d'autres questions, n'hésitez pas à contacter un membre du personnel.`)
.setImage('https://i.imgur.com/RsgSUaa.png')
var guide2 = new Discord.MessageEmbed()
.setColor('#303136')
.setImage('https://i.imgur.com/RsgSUaa.png')
.setDescription(`**Harcèlement en ligne** : La loi française interdit le harcèlement en ligne, qui est défini comme tout comportement abusif ou menaçant perpétré à l'aide d'internet ou d'autres technologies en ligne. Cela peut inclure des menaces, des insultes, des moqueries, la diffusion de rumeurs ou de contenu personnel, etc. Les personnes qui commettent des actes de harcèlement en ligne peuvent être poursuivies en justice.

**Harcèlement envers les personnes LGBT** : La loi française interdit la discrimination envers les personnes LGBT, y compris le harcèlement envers les personnes lesbiennes, gay, bisexuelles et transgenres. Les personnes qui commettent des actes de harcèlement envers les personnes LGBT peuvent être poursuivies en justice.

**Rabaissement** : La loi française interdit le rabaissement, qui est défini comme tout comportement qui a pour but de dénigrer, dénigrer ou déprécier une personne ou un groupe de personnes en raison de leur apparence physique, de leur origine ethnique, de leur orientation sexuelle, de leur genre, de leur religion, de leur handicap, etc. Les personnes qui commettent des actes de rabaissement peuvent être poursuivies en justice.


****Il est important de respecter les lois contre le harcèlement en ligne, le harcèlement envers les personnes LGBT et le rabaissement sur le serveur Discord Kaori et de faire preuve de tolérance envers les autres membres de la communauté.****`)

client.on('ready', () => {
	console.log('ready')
})

client.on('messageCreate',  message => {
  if(message.author.bot) return;

        var row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("select")
            .setPlaceholder("Lire le règlement de la communauté")
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
              if(interaction.values == "donateur"){
                    interaction.reply({embeds: [donateur], ephemeral: true});
                
            };
        }
        }
    });

client.login(process.env.TOKEN)
