const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

var reglement = new Discord.MessageEmbed()
    .setColor('#303136')
    .setTitle('Règlement principal de la communauté')
    .setDescription("Ce règlement s'applique à tous les membres de la communauté Discord Kaori. En rejoignant notre serveur, vous acceptez de respecter ces règles. En cas de violation, des mesures disciplinaires peuvent être prises, y compris le bannissement du serveur.")
    .addField('Règle 1 : Respect des autres membres', 'Tous les membres de la communauté doivent être traités avec respect et politesse. Tout harcèlement, intimidation ou comportement offensant envers les autres membres est interdit.')
    .addField('Règle 2 : Contenu inapproprié', 'Tout contenu inapproprié est strictement interdit sur le serveur, y compris les images, vidéos, messages ou liens offensants, discriminatoires ou pornographiques.')
    .addField('Règle 3 : Publicité', 'Toute forme de publicité est interdite sur le serveur, sauf autorisation expresse des administrateurs. Cela inclut la publicité pour d\'autres serveurs Discord, des sites web ou des réseaux sociaux.')
    .addField('Règle 4 : Langage', 'Le langage offensant, vulgaire ou discriminatoire est interdit sur le serveur. Les insultes et les jurons sont également interdits.')
    .addField('Règle 5 : Spoilers', 'Les spoilers pour les films, les jeux vidéo, les séries TV ou tout autre contenu sont interdits sur le serveur. Si vous devez discuter de quelque chose qui pourrait être un spoiler, utilisez la fonction de spoiler pour cacher le contenu.')
    .addField('Règle 6 : Usage abusif de mentions', 'L\'utilisation abusive de mentions est interdite sur le serveur. Les mentions doivent être utilisées de manière appropriée pour les communications importantes.')
    .addField('Règle 7 : Respect des canaux', 'Les messages doivent être postés dans les canaux appropriés. Le spamming et la dérivation des sujets sont interdits.')
    .addField('Règle 8 : Langue', 'Le serveur est principalement en français, donc évitez d\'utiliser d\'autres langues sauf si cela est autorisé par les administrateurs.')
    .addField('Règle 9 : Droit d\'auteur', 'Le contenu protégé par le droit d\'auteur ne doit pas être partagé sans autorisation. Les violations du droit d\'auteur peuvent entraîner des sanctions.')
    .addField('Règle 10 : Respect des administrateurs', 'Les administrateurs du serveur doivent être respectés en tout temps. Tout comportement irrespectueux envers les administrateurs peut entraîner des sanctions.')
    .setImage('https://i.imgur.com/RsgSUaa.png');
var donateur = new Discord.MessageEmbed()
  .setColor('#303136')
  .setTitle('Avantages Booster')
  .setDescription('Merci beaucoup de soutenir notre serveur Discord en le boostant ! En tant que booster, vous bénéficiez de plusieurs avantages exclusifs :')
  .addFields(
    { name: 'Rôle exclusif', value: 'Un rôle personnalisé vous sera attribué pour vous remercier de votre soutien.' },
    { name: 'Accès anticipé', value: 'Vous serez les premiers à avoir accès aux nouveautés et aux annonces du serveur Discord.' },
    { name: 'Accès à un salon privé', value: 'Vous aurez accès à un salon vocal privé pour discuter avec les autres boosters.' },
    { name: 'Mention spéciale', value: 'Votre nom sera mentionné dans un salon dédié aux boosters pour vous remercier publiquement de votre soutien.' },
  );
const guide = new Discord.MessageEmbed()
    .setColor('#303136')
    .setTitle('Guide de la communauté')
    .setDescription('Nous sommes heureux de vous accueillir dans notre communauté ! Pour que tout le monde puisse profiter de cette expérience dans un environnement sûr et respectueux, veuillez suivre les règles ci-dessous.')
    .addFields(
        { name: 'Respectez les autres membres', value: 'Pas d’insultes, de harcèlement, de discours haineux ou de tout autre comportement irrespectueux. Respectez les opinions, les croyances et les différences des autres membres.' },
        { name: 'Pas de contenu offensant', value: 'Aucun contenu pornographique, gore, violent, raciste, sexiste ou offensant n’est autorisé. Évitez également les blagues ou les memes qui pourraient offenser ou blesser les autres.' },
        { name: 'Pas de spam', value: 'N’envoyez pas de messages inutiles ou répétitifs, ne faites pas de publicité sans autorisation et ne spammez pas les canaux avec des émoticônes ou des réactions.' },
        { name: 'Respectez les modérateurs', value: 'Les modérateurs sont là pour assurer le bon fonctionnement de la communauté. Respectez leurs décisions et ne les harcelez pas.' },
        { name: 'Utilisez les canaux appropriés', value: 'Utilisez les canaux prévus à cet effet pour éviter de polluer les discussions. Si vous ne savez pas où poster, demandez à un modérateur.' },
        { name: 'Ne partagez pas d’informations personnelles', value: 'Pour votre sécurité, ne partagez pas d’informations personnelles (adresse, numéro de téléphone, etc.) sur la communauté. Si vous avez besoin d’aide, contactez un modérateur.' },
        { name: 'Soyez vous-même', value: 'Soyez vous-même et amusez-vous ! La communauté est un endroit pour rencontrer de nouvelles personnes, discuter et partager vos centres d’intérêt.' },
    );

// Vous pouvez maintenant envoyer cet embed dans un canal approprié.
var guide2 = new Discord.MessageEmbed()
  .setColor('#303136')
  .setTitle('Règles importantes à respecter')
  .setDescription('Voici quelques règles importantes à respecter sur le serveur Discord Kaori :')
  .addFields(
    { name: '1. Respectez les autres membres du serveur', value: 'Aucune forme de discrimination, de harcèlement ou d\'insulte ne sera tolérée sur le serveur. Soyez respectueux et courtois envers tous les membres.' },
    { name: '2. Évitez les propos offensants ou inappropriés', value: 'Les propos à caractère raciste, sexiste, homophobe ou violent ne sont pas tolérés sur le serveur. Évitez également les propos vulgaires ou obscènes.' },
    { name: '3. Pas de spam ou de publicité', value: 'Le spam, la publicité ou le partage de liens sans autorisation préalable sont interdits sur le serveur. Évitez également de partager des informations personnelles ou confidentielles.' },
    { name: '4. Respectez les salons et les thématiques', value: 'Postez dans les salons appropriés et respectez les thématiques des salons. Évitez également de poster des messages hors-sujet ou de détourner des conversations.' },
    { name: '5. Suivez les instructions des modérateurs', value: 'Les modérateurs ont le droit de donner des instructions et de prendre des mesures pour assurer le bon fonctionnement du serveur. Suivez leurs instructions et ne discutez pas de leurs décisions publiquement.' },
    { name: '6. Pas de contenu illégal ou dangereux', value: 'Le partage de contenu illégal ou dangereux est strictement interdit sur le serveur. Évitez également de partager des liens vers des sites malveillants ou des fichiers infectés.' },
    { name: '7. Respectez les règles de Discord', value: 'Le serveur Discord Kaori est hébergé sur la plateforme Discord. Respectez donc les règles et les conditions d\'utilisation de Discord, en plus des règles spécifiques au serveur Kaori.' },
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
	if (message.content.toLowerCase().startsWith('=')) {
	 	const msg = message.content.slice(1).trim()
      	const args = msg.split(/ +/)
      	const command = args.shift().toLowerCase()

      	if (command === "rules") {
   const regle = new Discord.MessageEmbed()
   .setImage('');
   const descregle = new Discord.MessageEmbed()
  .setColor('#303136')
  .setTitle('Bienvenue sur Kaori Café')
  .setDescription('Kaori Café est une communauté francophone conviviale et accueillante, où les passionnés de culture japonaise peuvent se retrouver pour discuter, partager et découvrir ensemble.')
  .addFields(
    { name: 'Des salons pour tous les goûts', value: 'Notre serveur dispose d\'une variété de salons textuels et vocaux dédiés à différents sujets, tels que les anime, les jeux vidéo, la musique, la cuisine et plus encore.' },
    { name: 'Une équipe modératrice attentive', value: 'Notre équipe de modération veille à ce que les membres respectent les règles et à maintenir une ambiance agréable et respectueuse pour tous.' },
    { name: 'Des événements réguliers', value: 'Nous organisons régulièrement des événements tels que des soirées jeux, des visionnages d\'anime, des concours et plus encore, pour que nos membres puissent se divertir et se rencontrer.' },
    { name: 'Un serveur boosté', value: 'En boostant notre serveur, vous bénéficierez d\'avantages tels qu\'un rôle exclusif, un accès à un salon privé, une augmentation de la qualité audio, et plus encore. N\'hésitez pas à nous soutenir !' }
  )
  .setImage('https://i.imgur.com/RsgSUaa.png');

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
