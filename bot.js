const Discord = require("discord.js");
const client = new Discord.Client();
require("discord-buttons")(client);
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
const moment_tz = require("moment-timezone");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const YouTube = require("simple-youtube-api");
const queue = new Map();
const ffmpeg = require("ffmpeg"); 
const express = require("express");
const ms = require("ms");
const ytdl = require("ytdl-core");
const db = require("quick.db");
const http = require("http");
require("./util/eventLoader.js")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");

const app = express();
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });;



//açlıksusuzluk
client.on("message", async message => {
	let member = message.author
  const request = require("node-superfetch");
  let dakdest = await db.fetch(`xxx_${message.author.id}`);
  let timeout = 900000; //1000 = 1 saniye // ideal değer = 900000
  let sü = 2*900000;
 

  if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
    let kontrol2 = await db.fetch(`aclik_${message.guild.id}_${message.member.id}`);
    if (!kontrol2) db.set(`aclik_${message.guild.id}_${message.member.id}`, 100);
    let time = ms(sü - (Date.now() - dakdest));
  } else {
    if (message.author.bot) return;
    if (message.content.length > 1) {
      var açlık = [1, 2];
      var açlık2 = açlık[Math.floor(Math.random() * açlık.length)];
      let kontrol2 = await db.fetch(`aclik_${message.guild.id}_${message.member.id}`);
      if (!kontrol2) db.set(`aclik_${message.guild.id}_${message.member.id}`, 100);

	
if (message.channel.parentID == "862029628290105344") 
if (message.channel.parentID == "862029629716299776")
if (message.channel.parentID == "862029626821574696")
if (message.channel.parentID == "862029623893819402")
if (message.channel.parentID == "862029622492528650")
if (message.channel.parentID == "862029618894602240")
if (message.channel.parentID == "862029611851448380")
if (message.channel.parentID == "862029615917039636")
if (message.channel.parentID == "862029614582202378")
if (message.channel.parentID == "862029613127041054")
if (message.channel.parentID == "862029607188430908")
if (message.channel.parentID == "905851818490331137")
if (message.channel.parentID == "905852191846313996")
if (message.channel.parentID == "905855525621739590")
if (message.channel.parentID == "862764744111947816")
if (message.channel.parentID == "862029586120441896")
if (message.channel.parentID == "862029580318277652")
if (message.channel.parentID == "862029578914758686")
if (message.channel.parentID == "862029577688711179")
if (message.channel.parentID == "862764444639559701")
if (message.channel.parentID == "862029576120827935")
if (message.channel.parentID == "862029572126933023")
if (message.channel.parentID == "862029570382364815")
if (message.channel.parentID == "862029565709516810")
if (message.channel.parentID == "862029569133772890")
if (message.channel.parentID == "862029563122024449")
if (message.channel.parentID == "862029562099662878")
if (message.channel.parentID == "862029560584601620")
if (message.channel.parentID == "862029559057874964")
if (message.channel.parentID == "862029557703114752")
if (message.channel.parentID == "862029556407336960")
if (message.channel.parentID == "862029554951520306")
if (message.channel.parentID == "862226581338062878")
if (message.channel.parentID == "862226500652105728")
if (message.channel.parentID == "862225512520089610")
if (message.channel.parentID == "862029553638834187")
if (message.channel.parentID == "862029552140943360")
if (message.channel.parentID == "862029550644232232")
if (message.channel.parentID == "862029549293666336")
if (message.channel.parentID == "862029547977441290")
if (message.channel.parentID == "862029547977441290")
if (message.channel.parentID == "862029546702372864")
if (message.channel.parentID == "862434416987078706")
if (message.channel.parentID == "862351216141664297")
if (message.channel.parentID == "862029543699382312")
if (message.channel.parentID == "862029540951457793")
if (message.channel.parentID == "862029538083078205")
if (message.channel.parentID == "862029539751231558")
if (message.channel.parentID == "862029532722626600")
if (message.channel.parentID == "862029536663961650")
if (message.channel.parentID == "862029535175507968");

	  
	  let kontrol = await db.fetch(`aclik_${message.guild.id}_${message.member.id}`)
      db.set(`xxx_${message.member.id}`, Date.now());
      if (kontrol > 10) return db.add(`aclik_${message.guild.id}_${message.member.id}`, -açlık2);


      if (kontrol < 10) {
        db.delete(`aclik_${message.guild.id}_${message.member.id}`);

        message.member.send(`<@${message.member.id}>**, Açlıktan hastaneye kaldırıldın!**`)
        message.member.roles.add('862029072623861801');
      }
      if (kontrol < 25)
        return message.member.send(
          `<@${message.member.id}>**, Açıktın! Eğer bir şeyler yemezsen bayılıp hastaneye kaldırılacaksın!**`);
    }
  } 
});

setInterval(async () => {
  client.channels.cache.get('904441633771225128').send("Belirli Zaman Dilimi Arasında Gönderilen Database Veri Dosyam:", {files: ["./json.sqlite"]});
}, (2*60000)) 
 


client.login(process.env.token);
