const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; // Changez le préfixe si vous le souhaitez

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'presentation') {
    const embed = new Discord.MessageEmbed()
      .setColor('#303136')
      .setTitle('Kaori Café - Communauté Francophone')
      .setDescription('Bienvenue sur Kaori Café, une communauté francophone où vous pouvez discuter de tout et de rien avec des gens partageant les mêmes intérêts que vous. Nous avons plusieurs salons de discussion, y compris des salons pour les jeux, la musique, les films et la nourriture. Nous organisons également des événements amusants et des concours. Rejoignez-nous dès maintenant !')
      .setImage('https://i.imgur.com/cEEVtMX.jpg')
      .setFooter('Sélectionnez une option ci-dessous pour en savoir plus.');

    const buttonRow = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Sélectionnez une option')
          .addOptions([
            {
              label: 'Règlement',
              description: 'Consultez les règles du serveur.',
              value: 'regles',
            },
            {
              label: 'Guide communautaire',
              description: 'Consultez notre guide communautaire.',
              value: 'guide',
            },
            {
              label: 'Avantages Boost',
              description: 'Découvrez les avantages de booster le serveur.',
              value: 'boost',
            },
          ]),
      );

    message.channel.send({ embeds: [embed], components: [buttonRow] });
  }

  if (command === 'select') {
    const option = args[0];
    let embed;

    switch (option) {
      case 'regles':
        embed = new Discord.MessageEmbed()
          .setColor('#303136')
          .setTitle('Règles importantes à respecter')
          .setDescription('Voici quelques règles importantes à respecter sur le serveur Discord Kaori :')
          .addFields(
            { name: 'Règle 1', value: 'Respectez les autres membres.' },
            { name: 'Règle 2', value: 'Pas de harcèlement, de discours de haine ou de racisme.' },
            { name: 'Règle 3', value: 'Pas de contenu offensant ou inapproprié.' },
          );
        break;

      case 'guide':
        embed = new Discord.MessageEmbed()
          .setColor('#303136')
          .setTitle('Guide de la communauté')
          .setDescription('Voici quelques informations utiles pour vous aider à naviguer sur le serveur Discord Kaori :')
          .addFields(
            { name: 'Salons de discussion', value: 'Nous avons plusieurs salons pour discuter de différents sujets, y compris les jeux, la musique, les films et la nourriture. Utilisez-les pour discuter avec d\'autres membres ayant des intérêts similaires' },
	    { name: 'Événements', value: 'Nous organisons régulièrement des événements amusants et des concours pour nos membres. Restez à l\'affût des annonces pour ne rien manquer !' },
	    { name: 'Rôles', value: 'Nous avons des rôles qui vous permettent d\'accéder à des salons spécifiques ou de mettre en avant vos centres d\'intérêt. Demandez un rôle à un modérateur si vous êtes intéressé !' },
		);
		    break;
		      case 'boost':
    embed = new Discord.MessageEmbed()
      .setColor('#303136')
      .setTitle('Avantages de booster')
      .setDescription('Si vous boostez le serveur Discord Kaori, vous aurez accès à des avantages exclusifs, notamment :')
      .addFields(
        { name: 'Rôle de booster', value: 'Vous obtiendrez un rôle spécial qui vous permettra d\'accéder à des salons exclusifs.' },
        { name: 'Emoji personnalisé', value: 'Vous pouvez soumettre un emoji personnalisé à ajouter au serveur.' },
        { name: 'Couleur de rôle personnalisée', value: 'Vous pouvez choisir votre propre couleur de rôle.' },
      );
    break;

  default:
    embed = new Discord.MessageEmbed()
      .setColor('#303136')
      .setTitle('Option invalide')
      .setDescription('L\'option sélectionnée n\'est pas valide. Veuillez sélectionner une option valide dans le menu déroulant.');
    break;
}

message.channel.send({ embeds: [embed] });
  }
});
client.login(process.env.TOKEN); // Remplacez 'TOKEN_DISCORD' par votre propre jeton Discord.
