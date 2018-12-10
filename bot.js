const Discord = require('discord.js');
const flixz9 = new Discord.Client();

flixz9.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf-BiTcH","iBander","iWantAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '520026772151205893').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1500));
    }, 5000);
});

flixz9.on('ready', () => {
    setInterval(() => flixz8.channels.get('485710163966296064').send('#daily <@475958548082458629>'), 86403000);
});

flixz9.login(process.env.BOT_TOKEN);
