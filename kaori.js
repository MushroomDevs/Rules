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
  .setTitle('Avantages Booster')
  .setDescription(`Chers membres de la communauté Kaori,

Nous vous remercions d'être avec nous sur notre serveur Discord ! Si vous souhaitez nous soutenir dans notre travail, vous pouvez envisager de booster notre serveur. Les boosts sont un excellent moyen de soutenir notre communauté et de nous aider à grandir.

Voici les avantages de booster notre serveur :

**Niveau 1**
- Boosteur de serveur de niveau 1
- Accès aux emojis animés personnalisés
- 128 kbps de qualité audio pour les salons vocaux
- Un badge "Booster" dans votre profil
- Accès au salon vocal "Booster"

**Niveau 2**
- Boosteur de serveur de niveau 2
- 256 kbps de qualité audio pour les salons vocaux
- Un badge "Booster" amélioré dans votre profil
- Accès à un salon vocal exclusif aux Boosteurs de Niveau 2

**Niveau 3**
- Boosteur de serveur de niveau 3
- 384 kbps de qualité audio pour les salons vocaux
- Un badge "Booster" amélioré dans votre profil
- Accès à un salon vocal exclusif aux Boosteurs de Niveau 3

Nous espérons que vous considérerez de booster notre serveur. Merci pour votre soutien constant et nous espérons que vous continuerez à apprécier votre temps sur notre serveur.

**Cordialement**,
L'équipe Kaori`);
const guide = new Discord.MessageEmbed()
    .setColor('#303136')
    .setTitle('Guide de la communauté')
    .addFields(
        { name: 'Utilisation des commandes', value: 'Pour utiliser les commandes sur le serveur, tapez "/" suivi de la commande souhaitée. Vous pouvez trouver la liste des commandes disponibles dans le canal <#945910640860622878>.' },
        { name: 'Participer aux discussions', value: 'Pour participer aux discussions sur le serveur, cliquez sur un canal de discussion et tapez votre message. Respectez les autres membres de la communauté et ne publiez pas de contenu inapproprié.' },
        { name: 'Utilisation des réactions', value: 'Vous pouvez utiliser les réactions pour exprimer vos sentiments en réponse à un message. Cliquez sur le bouton "+" à côté du message et choisissez la réaction souhaitée.' },
        { name: 'Partager du contenu', value: 'Vous pouvez partager du contenu, comme des images ou des vidéos, en cliquant sur le bouton "Upload" et en sélectionnant le fichier que vous souhaitez partager. Ne partagez pas de contenu inapproprié ou offensant.' },
        { name: 'Signaler un comportement inapproprié', value: 'Si vous rencontrez un comportement inapproprié sur le serveur, contactez un membre du personnel.' },
    )
    .setFooter('Contactez un membre du personnel pour toute question.');

// Vous pouvez maintenant envoyer cet embed dans un canal approprié.
var guide2 = new Discord.MessageEmbed()
  .setColor('#303136')
  .setTitle('Règles importantes à respecter')
  .setDescription('Voici quelques règles importantes à respecter sur le serveur Discord Kaori :')
  .addFields(
    { name: 'Respect', value: 'Le respect est primordial sur ce serveur. Tout comportement irrespectueux envers les autres membres ne sera pas toléré.' },
    { name: 'Harcèlement', value: 'Le harcèlement est strictement interdit sur le serveur Discord Kaori. Cela inclut le harcèlement en ligne, le harcèlement envers les personnes LGBT et le rabaissement. Les personnes qui commettent de tels actes peuvent être expulsées du serveur.' },
    { name: 'Discrimination', value: 'La discrimination envers les personnes en raison de leur origine ethnique, de leur orientation sexuelle, de leur genre, de leur religion, de leur handicap, etc. est interdite sur le serveur Discord Kaori. Les personnes qui commettent de tels actes peuvent être expulsées du serveur.' },
    { name: 'Contenu inapproprié', value: 'Il est interdit de publier du contenu inapproprié sur le serveur Discord Kaori. Cela inclut les images ou les propos à caractère sexuel, violent ou discriminatoire. Les personnes qui publient de tels contenus peuvent être expulsées du serveur.' },
    { name: 'Publicité', value: 'La publicité pour d\'autres serveurs Discord ou pour des produits est interdite sur le serveur Discord Kaori.' },
    { name: 'Respect de la vie privée', value: 'Il est interdit de partager des informations personnelles d\'autres membres du serveur sans leur consentement.' },
    { name: 'Spamming', value: 'Le spamming, c\'est-à-dire envoyer de nombreux messages inutiles ou répétitifs, est interdit sur le serveur Discord Kaori.' },
    { name: 'Comportement adulte', value: 'Les membres doivent faire preuve de maturité et de responsabilité. Les comportements immatures ou puérils ne sont pas tolérés.' },
    { name: 'Langage approprié', value: 'Il est important d\'utiliser un langage approprié et de ne pas utiliser de langage grossier ou offensant sur le serveur. Les personnes qui utilisent un langage inapproprié peuvent être averties ou expulsées du serveur.' },
    { name: 'Incitation à la haine', value: 'Il est interdit de publier des messages qui incitent à la haine ou qui diffusent des idées racistes, sexistes, homophobes, etc.' },
    { name: 'Fake news', value: 'La propagation de fausses informations ou de théories du complot est interdite sur le serveur Discord Kaori.' },
    { name: 'Sécurité', value: 'Les membres doivent prendre des précautions pour protéger leur compte Discord et ne pas partager leur mot de passe avec d\'autres personnes.' },
    );

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
                    label: "Guide Communautaire",
                  emoji: "",
                    value: "guide"
                },
              {
                    label: "Avantages",
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
    .setTitle("Kaori Café - Communauté Francophone")
    .setColor("#303136")
    .setDescription("Bienvenue sur Kaori Café, une communauté francophone qui a pour objectif de rassembler des personnes sympathiques et bienveillantes. Nous sommes heureux de vous accueillir parmi nous et nous espérons que vous passerez un bon moment en notre compagnie.")
    .setImage("https://i.imgur.com/RsgSUaa.png");

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
