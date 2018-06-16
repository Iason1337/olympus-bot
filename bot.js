const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
    client.user.setPresence( { game: {name: 'play.olympusnetwork.eu', type: 0 }});
});


 client.on('message', msg => {

    if (msg.content.includes('/help')) {
   const embed = new Discord.RichEmbed()
   // .setTitle("Olympus Network")
   .setAuthor("Available commands")
   .addField("/store", "CURRENTLY UNAVAILABLE")
   .addField("/discord", "Generates you a link to invite your friends")
   .addField("/event", "Find information about upcoming events")
   .addField("/address", "Gives you the server address.")
   .addField("/games", "Gives you a list with all the available gamemodes")
   .addField("/rules", "Gives you a link to read the server rules")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }
    if (msg.content.includes('/store')) {
   const embed = new Discord.RichEmbed()
   // .setTitle("Olympus Network")
   .setAuthor("Server Store")
   .addField("Support the servers by buying ranks here", "http://olympusnetwork.eu/store")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }
    if (msg.content.includes('/discord')) {
   const embed = new Discord.RichEmbed()
   // .setTitle("Olympus Network")
   .setAuthor("Server Discord")
   .addField("Invite your friends to our discord by giving them this link", "http://olympusnetwork.eu/discord")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }
    if (msg.content.includes('/event')) {
   const embed = new Discord.RichEmbed()
   .setAuthor("Server Events")
   .addField("There's currently one event", "http://olympusnetwork.eu/discord/event")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }
    if (msg.content.includes('/address')) {
   const embed = new Discord.RichEmbed()
   .setAuthor("Server IP")
   .addField("Play games in this address", "play.olympusnetwork.eu")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }
    if (msg.content.includes('/games')) {
   const embed = new Discord.RichEmbed()
   .setAuthor("Server Gamemodes")
   .addField("You can currently play Factions and Ultra Hardcore", "You can find the ip by typing /address")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }
   if (msg.content.includes('/rules')) {
   const embed = new Discord.RichEmbed()
   .setAuthor("Server Rules")
   .addField("You can read the server rules here", "https://goo.gl/UdShBM")
   .setColor(0x551A8B)
   .setThumbnail("https://cdn.discordapp.com/attachments/433746542747451393/452523047908540416/olympus2.png")
     msg.channel.send({embed})
   }

 });


client.on("message", async message =>{
    if (message.author.bot) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
    if(message.channel === message.guild.channels.find("name","suggestions") || cmd==="!suggest"){
    if(message.content.includes("suggest")!==true){
      message.delete()
      return message.author.send("This channel is only for suggestions. To suggest something type catcher suggest <your suggestion> ")
    } if (args===""){
      return message.delete()
    //   message.author.send("please provide a suggestion after the !suggest command")
    }
    message.delete();
    const like = message.guild.emojis.find('name', 'agree');
    const dislike = message.guild.emojis.find('name', 'disagree');
    let suggestEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .addField("Suggestion",args.join(" "))
    .setColor("0x004bbc")
    message.channel.send(suggestEmbed)
    .then(message =>message.react(like) + message.react(dislike))
    message.author.send("Thank you for your suggestion")
  }
});




client.login(process.env.BOT_TOKEN);
