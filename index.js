const Discord = require("discord.js");
const ms = require("ms");
const MUTED_ROLE = '694846710945415168';

const bot = new Discord.Client({disableEveryone: true});
const token = "Njk0MTU5NTIyNDg2Mjg4NDQ0.XuTJlQ.dnBwhaY3D9RNQMkOGOtlCAtDJoo";

const colours = require("./colours.json");
const prefix = "!";
var version = "1.0.0";


bot.on('ready' , () =>{
    console.log('Bot jest online!');
    bot.user.setActivity("paypal.me/patrykswietlik");
})


bot.on("message" , async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()


    if(command == "say"){
            message.delete()

            if(message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(message.content.slice(prefix.length+3))
            else
            return message.channel.send("")
    }
        if(command == "info" && message.member.hasPermission("BAN_MEMBERS") ) {
            message.delete()
        
            const exampleEmbed = new Discord.MessageEmbed()
            
    .setColor(colours.blue)
	.setTitle('Info')
	.addField('Nick' , message.author.username, true)
    .addField('Server' , message.guild.name, true)
    .setThumbnail(message.author.avatarURL)
    console.log("Test");
    

message.channel.send(exampleEmbed);

            
        
        
       }


       if(command == "mewho" && message.member.hasPermission("BAN_MEMBERS") ) {
        message.delete()
        message.channel.send('@everyone');
    
        const exampleEmbed = new Discord.MessageEmbed()
        
        .setColor(colours.pink)
        .setTitle('Dane Michałka')
        .setURL('https://www.facebook.com/profile.php?id=100011747825556')
        .addFields(
            { name: 'Imię i nazwisko', value: 'Michał Kwiatkowski' },
        
            { name: 'Adres', value: 'Płock, Ciechomicka 72', inline: true },
            { name: 'Numer telefonu:', value: '789238653', inline: true },
        )
        .setImage('https://i.imgur.com/dgnsOrs.jpg')
        .setTimestamp()
        .setFooter('Pozdrawiam cieplutko', 'https://i.imgur.com/dgnsOrs.jpg');


message.channel.send(exampleEmbed);
       }

       if(command == "magnel" && message.member.hasPermission("BAN_MEMBERS") ) {
        message.delete()
        message.channel.send('@everyone');
    
        const exampleEmbed = new Discord.MessageEmbed()
        
        .setColor(colours.green)
        .setTitle('Dane Olusia')
        .setURL('https://www.facebook.com/profile.php?id=100009484208068')
        .addFields(
            { name: 'Imię i nazwisko', value: 'Aleksander Makowski' },
        
            { name: 'Adres', value: 'Łąck, Piękna 21', inline: true },
            { name: 'Numer telefonu:', value: '601403984', inline: true },
        )
        .setImage('https://i.imgur.com/dA3ez8Y.png')
        .setTimestamp()
        .setFooter('Pozdrawiam cieplutko', 'https://i.imgur.com/dA3ez8Y.png');


message.channel.send(exampleEmbed);
       }


       if(command == "tarez" && message.member.hasPermission("BAN_MEMBERS") ) {
        message.delete()
        message.channel.send('@everyone');
    
        const exampleEmbed = new Discord.MessageEmbed()
        
        .setColor(colours.yellow)
        .setTitle('Dane Kubusia')
        .setURL('https://www.facebook.com/tarezikretardteamofficial')
        .addFields(
            { name: 'Imię i nazwisko', value: 'Jakub Świetlik' },
        
            { name: 'Adres', value: 'Ciechomicka 11', inline: true },
            { name: 'Numer telefonu', value: '502114688', inline: true },
        )
        .setImage('https://i.imgur.com/W41DGfS.jpg')
        .setTimestamp()
        .setFooter('Pozdrawiam cieplutko', 'https://i.imgur.com/W41DGfS.jpg');


message.channel.send(exampleEmbed);
       }

       if(command == "iplist" && message.member.hasPermission("BAN_MEMBERS") ) {
        message.delete()
     
    
        const exampleEmbed = new Discord.MessageEmbed()
        
        .setColor(colours.dark_red)
        .setTitle('IP LIST')
        .setURL('https://www.stressthem.to')
        .addFields(
            { name: 'Gajdus', value: '185.25.123.163' },
            { name: 'Hawajska', value: '94.240.3.254', inline: true },
            { name: 'Luxus', value: '91.219.115.3', inline: true },
            { name: 'MilutuS', value: '77.254.226.152 | 77.254.228.180', inline: true },
            { name: 'Znajak', value: '83.30.32.74', inline: true },
            { name: 'Exet', value: '86.63.89.51', inline: true },
            { name: 'Sievvca', value: '85.221.129.211', inline: true },
            { name: 'Cezik', value: '185.241.254.148', inline: true },
            { name: 'Kamyk', value: '80.68.230.165', inline: true },
            { name: 'Be44st', value: '79.110.204.54', inline: true },
            { name: 'CSC Husar', value: '37.7.201.23', inline: true },
            { name: 'Filipukuk', value: '195.189.89.170', inline: true },
            { name: 'Pomocnik(Janusz)', value: '31.135.192.17', inline: true },
            
        )
        .setImage('https://i.imgur.com/6Hu28Vx.jpg')
        .setTimestamp()
        .setFooter('Miłego ataku :)', 'https://i.imgur.com/6Hu28Vx.jpg');


message.channel.send(exampleEmbed);
       }
    });
    
    

   bot.on("message" , async message => {
        if (message.author.bot) return;
    
        if (message.content.indexOf(prefix) !== 0) return;
        var args = message.content.slice(prefix.length).trim().split(/ +/g);
        var command = args.shift().toLowerCase()
    
    
        if(command == "clear"){
                message.delete()
    
        if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply("oof.");
        if(!args[0]) return message.channel.send("Podaj wartość");
        message.channel.bulkDelete(args[0]).then(() => {
                message.channel.send('').then(msg => msg.delete(1000));
        })
    }
    });


    bot.on('message' , message => {
        let args = message.content.substring(prefix.length).split(" ");

        switch (args[0]) {
                case "kick":

                    const user = message.mentions.users.first();

                    if (user && message.member.hasPermission("KICK_MEMBERS") ) {
                            const member = message.guild.member(user);

                            if (member&& message.member.hasPermission("KICK_MEMBERS") ) {
                                member.kick(' ').then(() => {
                                        message.delete()
                                }).catch(err => {
                                    message.delete()
                                    console.log(err);
                                });
                            } else {
                                message.delete()
                            }
                        } else {
                            message.delete()
                        }  

                    }

                });


                bot.on('message' , message => {
                    let args = message.content.substring(prefix.length).split(" ");
            
                    switch (args[0]) {
                            case "ban":
            
                                const user = message.mentions.users.first();
            
                                if (user && message.member.hasPermission("BAN_MEMBERS") ) {
                                        const member = message.guild.member(user);
            
                                        if (member&& message.member.hasPermission("BAN_MEMBERS") ) {
                                            member.ban(' ').then(() => {
                                                    message.delete()
                                            }).catch(err => {
                                                message.delete()
                                                console.log(err);
                                            });
                                        } else {
                                            message.delete()
                                        }
                                    } else {
                                        message.delete()
                                    }  
            
                                }
            
                            });
                    
                            



                            /*bot.on('message' , message => {
                                    let args = message.content.substring(prefix.length).split(" ");

                                    switch (args[0]) {
                                        case 'mute':
                                            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
                                            if(!person) return message.reply("Nie mogę znaleźć tego użytkownika");

                                            let mainrole = message.guild.roles.find(role => role.name === "Lokalny");
                                            let muterole = message.guild.roles.find(role => role.name === "MUTED");

                                            if(!muterole) return message.reply(" ")
                                            message.delete()
                                            let time = args[2];

                                            if(!time){
                                                return message.reply("Nie podałeś długości wyciszenia");
                                            }

                                            person.removeRole(mainrole.id);
                                            person.addRole(muterole.id);

                                            message.channel.send('@${person.user.tag} został wyciszony na ${ms(ms(time))}');

                                            setTimeout(function(){
                                                    person.addRole(mainrole.id);
                                                    person.removeRole(muterole.id);
                                                    message.channel.send('@${person.user.tag} został odmutowany!')

                                            }, ms(time));





                                            break;
                                        }

                                    });      */
                        
                
                    
                                    bot.on('message', message => {
                                        if (!message.content.startsWith(prefix) || message.author.bot) return;
                                    
                                        const args = message.content.slice(prefix.length).split(/ +/);
                                        const command = args.shift().toLowerCase();
                                    
                                        if (command === 'ping') {
                                            message.channel.send('Pong.');
                                        } else if (command === 'beep') {
                                            message.channel.send('Boop.');
                                        }
                                        // other commands...
                                    });

                                    bot.on('message', message => {

                                        if (message.author.bot) return;
                                        if (message.content.indexOf(prefix) !== 0) return;
                                    
                                        const args = message.content.slice(prefix.length).trim().split(/ +/g);
                                        const command = args.shift().toLowerCase();
                                    
                                        if (command === 'graj') {
                                            let replies = ['kamień', 'papier', 'nożyczki'];
                                            let result = Math.floor((Math.random() * replies.length));
                                    
                                            let uReply = args[0];
                                            if (!uReply) return message.channel.send(`Wybierz opcję: \`${replies.join(', ')}\``);
                                            if (!replies.includes(uReply)) return message.channel.send(`Tylko te sie liczą: \`${replies.join(', ')}\``);
                                    
                                            if (replies[result] === uReply) {
                                                console.log(replies[result]);
                                                return message.channel.send('Remis. KURWA!');
                                            } else if (uReply === 'kamień') {
                                                console.log(replies[result]);
                                                if (replies[result] === 'papier') return message.channel.send('Aaa przegrałeś lamusie!');
                                                else return message.channel.send('Wygrałeś!');
                                            } else if (uReply === 'nożyczki') {
                                                console.log(replies[result]);
                                                if (replies[result] === 'kamień') return message.channel.send('Aaa przegrałeś lamusie!');
                                                else return message.channel.send('Wygrałeś!');
                                            } else if (uReply === 'papier') {
                                                console.log(replies[result]);
                                                if (replies[result] === 'nożyczki') return message.channel.send('Aaa przegrałeś lamusie!');
                                                else return message.channel.send('Wygrałeś!');
                                            }
                                        }
                                    });

bot.login(token);
