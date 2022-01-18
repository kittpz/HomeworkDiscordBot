import discord from 'discord.js';
import fs from "fs";

try {
    fs.accessSync('./config.json');
} catch (e) {
    fs.writeFileSync('./config.json', JSON.stringify({
        token: ""
    }, null, 4));
}

const config = JSON.parse(fs.readFileSync('./config.json', {
    encoding: 'utf8'
}));

const token = config.token;

if (token == null || token == "") {
    throw new Error("No token.");
}

const bot = new discord.Client({
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES,
        discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});

function ready() {
    console.log("Bot is ready!");
}

bot.once("ready", ready);

bot.login(token);