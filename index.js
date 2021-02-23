///cd .\onedrive\masaüstü\bot\

const Discord=require("discord.js");

const client = new Discord.Client();

///reply
client.on("message",message=>{
    console.log("Gelen Mesaj: "+message.content)

    if(message.content.toLowerCase()==="selam"){
        message.reply("selamm")
    }
    if(message.content.toLowerCase()==="sa"){
        message.reply("as")
    }
    if(message.content.toLowerCase()==="slm"){
        message.reply("slm cnm")
    }

    if(message.content.toLowerCase()==="günaydın"){
        message.reply("Günaydın :sunny:")
    }

    if(message.content.toLowerCase()==="iyi akşamlar"){
        message.reply("iyi akşamlarr")
    }

    if(message.content.toLowerCase()==="iyi geceler"){
        message.reply("iyi gecelerr")
    }

    if(message.content.toLowerCase()==="denemekomut"){
        message.reply("komut cevap :sunny:")
    }

    if(message.content.toLowerCase()==="denemekomut"){
        message.channel.send("f")
    }
    
    if(message.content===".avatar")
    message.channel.send(message.author.displayAvatarURL())

///ban
    const parsedString=message.content.split(" ");

    if(parsedString[0]=="t!ban"){
        if(parsedString[1]){
            const user = message.mentions.users.first();
            if(user){
                const member = message.guild.member(user);
                if(!member){
                    message.reply("Kullanıcı bulunamadı");
                    return;
                }
                member.ban({reason:"Kurallara aykırı davrandın"}).then(()=>{
                    message.reply(user.tag+" banlandı! :haluk:");
                }).catch((error)=>{
                    message.reply("hata oluştu");
                    console.log(error)
                })
            }
        }
        else{
            message.reply("Kullanıcı adı belirtmelisiniz!")
        }
    }

///kick
    if(parsedString[0]=="t!kick"){
        if(parsedString[1]){
            const user = message.mentions.users.first();
            if(user){
                const member = message.guild.member(user);
                if(!member){
                    message.reply("Kullanıcı bulunamadı");
                    return;
                }
                member.kick(" atıldı!").then(()=>{
                    message.reply(user.tag+" atıldı! :haluk:");
                }).catch((error)=>{
                    message.reply("hata oluştu");
                    console.log(error)
                })
            }
        }
        else{
            message.reply("Kullanıcı adı belirtmelisiniz!")
        }
    }   
})


///token
client.login("ODEyNjkxMzU0NDk2NDAxNDI4.YDEbzQ._tu6AOKv6_b6vpCuG9wf5iN1ido")