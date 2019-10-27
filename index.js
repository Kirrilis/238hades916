const Discord = require('discord.js');
const { prefix, token } = require('./config.json'); 
const client = new Discord.Client(); 


client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    //console.log(message.content);

    if(message.content.startsWith(`${prefix}Sever`)) {

        //message.channel.send("It shall be done my lord.")

        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send("Bleed in the dark ocean of hell." + "Thou soul shall perish.")
        })
    }
})
client.on('message', message => {
    //console.log(message.content);

    if(message.content.startsWith(`${prefix}punish`)) {

        //message.channel.send("It shall be done my lord.")

        let member = message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send("Hasta la vista bitch")
        })
    }
})


client.login(process.env.BOT_TOKEN);
