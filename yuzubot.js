const discord = require ('discord.js');

var client = new discord.Client();

const token = "NDQ1NDc4NzY5ODIyNTMxNTg0.DdtOhQ.NNPmAsaSxC7dtHiRz0XLt7orqmA";

client.on ("ready", () => {
    console.log ("ready!");

    client.user.setActivity ("Peach Sisters");
});

const prefix = ".";

client.on ("message", (message) => {

    if (message.author.bot) return;

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "help",)) {
        message.channel.send ("**Prefix:** `.` **Command list:** __Citrus:__ `read citrus` `read anthology` `watch citrus` `about citrus manga` `about citrus anime` `citrus site` `height chart` __Action Commands:__ `poke` `pet` `smile` `blush` `glomp` `tickle` `kiss` `nan` `hold hands` `cry` `i'm excited` `pray` `poochie` `panting` `shocked` `quiet` `spit` `drink` `stare` `nom` `hairflip` `deal with it` `clap` `game on` `hehe` `impatient` `mad` __Lewd Commands:__ `boobs` `scissor` `undress` `lick` `shower` `threesome` `lewd` __Misc. Commands:__ `host server`");
    }

    if (msg.startsWith (prefix + "yuzu undress")) {
        message.channel.send ({files: ["./gifs/yuzuundress.gif"]});
    }

    if (msg.startsWith (prefix + "mei undress")) {
        message.channel.send ({files: ["./gifs/meiundress.gif"]});
    }

    if (msg.startsWith (prefix + "host server")) {
        message.channel.send ("https://discord.gg/D92mevd");
    }

    if (msg.startsWith (prefix + "read citrus")) {
        message.channel.send ("https://dynasty-scans.com/series/citrus");
    }

    if (msg.startsWith (prefix + "read anthology")) {
        message.channel.send ("https://dynasty-scans.com/doujins/citrus");
    }

    if (msg.startsWith (prefix + "watch citrus")) {
        message.channel.send ("http://www.crunchyroll.com/citrus");
    }

    if (msg.startsWith (prefix + "about citrus manga")) {
        message.channel.send ("https://myanimelist.net/manga/50145/Citrus");
    }

    if (msg.startsWith (prefix + "about citrus anime")) {
        message.channel.send ("https://myanimelist.net/anime/34382/Citrus?q=citrus");
    }

    if (msg.startsWith (prefix + "citrus site")) {
        message.channel.send ("http://citrus-anime.com");
    }

    if (msg.startsWith (prefix + "deal with it")) {
        message.channel.send ("**Deal with it**", {files: ["./gifs/dealwithit.gif"]});
    }

    if (msg.startsWith (prefix + "lewd")) {
        message.channel.send ("**Hide your porn**", {files: ["./gifs/lewd.png"]});
    }

    if (msg.startsWith (prefix + "poke")) {
        message.channel.send ({files: ["./gifs/poke.gif"]});
    }

    if (msg.startsWith (prefix + "drink")) {
        message.channel.send ({files: ["./gifs/drinkup.gif"]});
    }
    
    if (msg.startsWith (prefix + "nom")) {
        message.channel.send ({files: ["./gifs/nom.gif"]});
    }

    if (msg.startsWith (prefix + "hairflip")) {
        message.channel.send ({files: ["./gifs/hairflip.gif"]});
    }

    if (msg.startsWith (prefix + "tickle")) {
        message.channel.send ({files: ["./gifs/tickle.gif"]});
    }

    if (msg.startsWith (prefix + "poochie")) {
        message.channel.send ({files: ["./gifs/poochie.gif"]});
    }

    if (msg.startsWith (prefix + "pray")) {
        message.channel.send ({files: ["./gifs/pray.gif"]});
    }

    if (msg.startsWith (prefix + "quiet")) {
        message.channel.send ({files: ["./gifs/quiet.gif"]});
    }

    if (msg.startsWith (prefix + "spit")) {
        message.channel.send ({files: ["./gifs/spit.gif"]});
    }

    if (msg.startsWith (prefix + "game on")) {
        message.channel.send ({files: ["./gifs/gameon.gif"]});
    }

    if (msg.startsWith (prefix + "hehe")) {
        message.channel.send ({files: ["./gifs/hehe.gif"]});
    }

    if (msg.startsWith (prefix + "notmad") || msg.startsWith (prefix + "mad")) {
        message.channel.send ({files: ["./gifs/notmad.gif"]});
    }

    if (msg.startsWith (prefix + "impatient")) {
        message.channel.send ({files: ["./gifs/impatient.gif"]});
    }

    if (msg.startsWith (prefix + "shower time") || msg.startsWith (prefix + "shower") || msg.startsWith (prefix + "showertime")) {
        message.channel.send ({files: ["./gifs/showertime.gif"]});
    }

    if (msg.startsWith (prefix + "3some") || msg.startsWith (prefix + "threesome")) {
        message.channel.send ({files: ["./gifs/threesome.gif"]});
    }

    if (msg.startsWith (prefix + "heightchart") || msg.startsWith (prefix + "height chart") || msg.startsWith (prefix + "citrus height chart") || msg.startsWith (prefix + "citrus girls height chart")) {
        message.channel.send ({files: ["./gifs/citrusgirlsheightchart.png"]});
    }

    if (msg.startsWith (prefix + "matsuri")) {
        matsurimessage = message.content.slice (9); // . m a t s u r i [your message]
        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ("Hey you, with the boobs", {files: ["./dealwithit/dealwithit.gif"]}); break;
            case 2: message.channel.send ("It's not like I like you or anything", {files: ["./dealwithit/dealwithit.gif"]}); break;
            case 3: message.channel.send ("I love you, Yuzu", {files: ["./dealwithit/dealwithit.gif"]}); break;
        }
    }

blush1 = "./gifs/blush1.gif"; blush2 = "./gifs/blush2.gif"; blush3 = "./gifs/blush3.gif"; blush4 = "./gifs/blush4.gif"; blush5 = "./gifs/blush5.gif"; blush6 = "./gifs/blush6.gif"; blush7 = "./gifs/blush7.gif"; blush8 = "./gifs/blush8.gif"; blush9 = "./gifs/blush9.gif"; blush10 = "./gifs/blush10.gif"; blush11 = "./gifs/blush11.gif"; blush12 = "./gifs/blush12.gif"; blush13 = "./gifs/blush13.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "blush")) {
    number = 13;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [blush1] }); break;
        case 2: message.channel.send ({ files: [blush2] }); break;
        case 3: message.channel.send ({ files: [blush3] }); break;
        case 4: message.channel.send ({ files: [blush4] }); break;
        case 5: message.channel.send ({ files: [blush5] }); break;
        case 6: message.channel.send ({ files: [blush6] }); break;
        case 7: message.channel.send ({ files: [blush7] }); break;
        case 8: message.channel.send ({ files: [blush8] }); break;
        case 9: message.channel.send ({ files: [blush9] }); break;
        case 10: message.channel.send ({ files: [blush10] }); break;
        case 11: message.channel.send ({ files: [blush11] }); break;
        case 12: message.channel.send ({ files: [blush12] }); break;
        case 13: message.channel.send ({ files: [blush13] }); break;
    }    
}

smile1 = "./gifs/smile1.gif"; smile2 = "./gifs/smile2.gif"; smile3 = "./gifs/smile3.gif"; smile4 = "./gifs/smile4.gif"; smile5 = "./gifs/smile5.gif"; smile6 = "./gifs/smile6.gif"; smile7 = "./gifs/smile7.gif"; smile8 = "./gifs/smile8.gif"; smile9 = "./gifs/smile9.gif"; smile10 = "./gifs/smile10.gif"; smile11 = "./gifs/smile11.gif"; smile12 = "./gifs/smile12.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "smile")) {
    number = 12;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [smile1] }); break;
        case 2: message.channel.send ({ files: [smile2] }); break;
        case 3: message.channel.send ({ files: [smile3] }); break;
        case 4: message.channel.send ({ files: [smile4] }); break;
        case 5: message.channel.send ({ files: [smile5] }); break;
        case 6: message.channel.send ({ files: [smile6] }); break;
        case 7: message.channel.send ({ files: [smile7] }); break;
        case 8: message.channel.send ({ files: [smile8] }); break;
        case 9: message.channel.send ({ files: [smile9] }); break;
        case 10: message.channel.send ({ files: [smile10] }); break;
        case 11: message.channel.send ({ files: [smile11] }); break;
        case 12: message.channel.send ({ files: [smile12] }); break;
    }    
}

glomp1 = "./gifs/glomp1.gif"; glomp2 = "./gifs/glomp2.gif"; glomp3 = "./gifs/glomp3.gif"; glomp4 = "./gifs/glomp4.gif"; glomp5 = "./gifs/glomp5.gif"; glomp6 = "./gifs/glomp6.gif"; glomp7 = "./gifs/glomp7.gif"; glomp8 = "./gifs/glomp8.gif"; glomp9 = "./gifs/glomp9.gif"; glomp10 = "./gifs/glomp10.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "glomp")) {
    number = 10;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [glomp1] }); break;
        case 2: message.channel.send ({ files: [glomp2] }); break;
        case 3: message.channel.send ({ files: [glomp3] }); break;
        case 4: message.channel.send ({ files: [glomp4] }); break;
        case 5: message.channel.send ({ files: [glomp5] }); break;
        case 6: message.channel.send ({ files: [glomp6] }); break;
        case 7: message.channel.send ({ files: [glomp7] }); break;
        case 8: message.channel.send ({ files: [glomp8] }); break;
        case 9: message.channel.send ({ files: [glomp9] }); break;
        case 10: message.channel.send ({ files: [glomp10] }); break;
    } 
}

kiss1 = "./gifs/kiss1.gif"; kiss2 = "./gifs/kiss2.gif"; kiss3 = "./gifs/kiss3.gif"; kiss4 = "./gifs/kiss4.gif"; kiss5 = "./gifs/kiss5.gif"; kiss6 = "./gifs/kiss6.gif"; kiss7 = "./gifs/kiss7.gif"; kiss8 = "./gifs/kiss8.gif"; kiss9 = "./gifs/kiss9.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "kiss")) {
    number = 9;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [kiss1] }); break;
        case 2: message.channel.send ({ files: [kiss2] }); break;
        case 3: message.channel.send ({ files: [kiss3] }); break;
        case 4: message.channel.send ({ files: [kiss4] }); break;
        case 5: message.channel.send ({ files: [kiss5] }); break;
        case 6: message.channel.send ({ files: [kiss6] }); break;
        case 7: message.channel.send ({ files: [kiss7] }); break;
        case 8: message.channel.send ({ files: [kiss8] }); break;
        case 9: message.channel.send ({ files: [kiss9] }); break;
    }
}

cry1 = "./gifs/cry1.gif"; cry2 = "./gifs/cry2.gif"; cry3 = "./gifs/cry3.gif"; cry4 = "./gifs/cry4.gif"; cry5 = "./gifs/cry5.gif"; cry6 = "./gifs/cry6.gif"; cry7 = "./gifs/cry7.gif"; cry8 = "./gifs/cry8.gif"; cry9 = "./gifs/cry9.gif"; cry10 = "./gifs/cry10.gif"; cry11 = "./gifs/cry11.gif"; cry12 = "./gifs/cry12.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "cry")) {
    number = 12;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [cry1] }); break;
        case 2: message.channel.send ({ files: [cry2] }); break;
        case 3: message.channel.send ({ files: [cry3] }); break;
        case 4: message.channel.send ({ files: [cry4] }); break;
        case 5: message.channel.send ({ files: [cry5] }); break;
        case 6: message.channel.send ({ files: [cry6] }); break;
        case 7: message.channel.send ({ files: [cry7] }); break;
        case 8: message.channel.send ({ files: [cry8] }); break;
        case 9: message.channel.send ({ files: [cry9] }); break;
        case 10: message.channel.send ({ files: [cry10] }); break;
        case 11: message.channel.send ({ files: [cry11] }); break;
        case 12: message.channel.send ({ files: [cry12] }); break;
    } 
}

imexcited1 = "./gifs/imexcited1.gif"; imexcited2 = "./gifs/imexcited2.gif"; imexcited3 = "./gifs/imexcited3.gif"; imexcited4 = "./gifs/imexcited4.gif"; imexcited5 = "./gifs/imexcited5.gif"; imexcited6 = "./gifs/imexcited6.gif"; 

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "i'm excited") || msg.startsWith (prefix + "im excited") || msg.startsWith (prefix + "imexcited")) {
    number = 6;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [imexcited1] }); break;
        case 2: message.channel.send ({ files: [imexcited2] }); break;
        case 3: message.channel.send ({ files: [imexcited3] }); break;
        case 4: message.channel.send ({ files: [imexcited4] }); break;
        case 5: message.channel.send ({ files: [imexcited5] }); break;
        case 6: message.channel.send ({ files: [imexcited6] }); break;
    } 
}

shocked1 = "./gifs/shocked1.gif"; shocked2 = "./gifs/shocked2.gif"; shocked3 = "./gifs/shocked3.gif"; shocked4 = "./gifs/shocked4.gif"; shocked5 = "./gifs/shocked5.gif"; shocked6 = "./gifs/shocked6.gif"; shocked7 = "./gifs/shocked7.gif"; shocked8 = "./gifs/shocked8.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "shocked") || msg.startsWith (prefix + "surprised")) {
    number = 8;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [shocked1] }); break;
        case 2: message.channel.send ({ files: [shocked2] }); break;
        case 3: message.channel.send ({ files: [shocked3] }); break;
        case 4: message.channel.send ({ files: [shocked4] }); break;
        case 5: message.channel.send ({ files: [shocked5] }); break;
        case 6: message.channel.send ({ files: [shocked6] }); break;
        case 7: message.channel.send ({ files: [shocked7] }); break;
        case 8: message.channel.send ({ files: [shocked8] }); break;
    } 
}

boobs1 = "./gifs/boobs1.gif"; boobs2 = "./gifs/boobs2.gif"; boobs3 = "./gifs/boobs3.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "boobs")) {
    number = 3;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [boobs1] }); break;
        case 2: message.channel.send ({ files: [boobs2] }); break;
        case 3: message.channel.send ({ files: [boobs3] }); break;
    } 
}

panting1 = "./gifs/panting1.gif"; panting2 = "./gifs/panting2.gif"; panting3 = "./gifs/panting3.gif"; panting4 = "./gifs/panting4.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "panting") || msg.startsWith (prefix + "pant")) {
    number = 4;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [panting1] }); break;
        case 2: message.channel.send ({ files: [panting2] }); break;
        case 3: message.channel.send ({ files: [panting3] }); break;
        case 4: message.channel.send ({ files: [panting4] }); break;
    } 
}

undress1 = "./gifs/undress1.gif"; undress2 = "./gifs/undress2.gif"; undress3 = "./gifs/undress3.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "undress")) {
    number = 3;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [undress1] }); break;
        case 2: message.channel.send ({ files: [undress2] }); break;
        case 3: message.channel.send ({ files: [undress3] }); break;
    } 
}

lick1 = "./gifs/lick1.gif"; lick2 = "./gifs/lick2.gif"; lick3 = "./gifs/lick3.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "lick")) {
    number = 3;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [lick1] }); break;
        case 2: message.channel.send ({ files: [lick2] }); break;
        case 3: message.channel.send ({ files: [lick3] }); break;
    } 
}

smug1 = "./gifs/smug1.gif"; smug2 = "./gifs/smug2.gif"; smug3 = "./gifs/smug3.gif";  smug4 = "./gifs/smug4.gif";  smug5 = "./gifs/smug5.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "smug")) {
    number = 5;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [smug1] }); break;
        case 2: message.channel.send ({ files: [smug2] }); break;
        case 3: message.channel.send ({ files: [smug3] }); break;
        case 4: message.channel.send ({ files: [smug4] }); break;
        case 5: message.channel.send ({ files: [smug5] }); break;
    } 
}

pet1 = "./gifs/pet1.gif"; pet2 = "./gifs/pet2.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "pet")) {
    number = 2;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [pet1] }); break;
        case 2: message.channel.send ({ files: [pet2] }); break;
    } 
}

scissor1 = "./gifs/scissor1.gif"; scissor2 = "./gifs/scissor2.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "scissor")) {
    number = 2;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [scissor1] }); break;
        case 2: message.channel.send ({ files: [scissor2] }); break;
    } 
}

stare1 = "./gifs/stare1.gif"; stare2 = "./gifs/stare2.gif"; stare3 = "./gifs/stare3.gif"; stare4 = "./gifs/stare4.gif"; stare5 = "./gifs/stare5.gif"; stare6 = "./gifs/stare6.gif"; stare7 = "./gifs/stare7.gif"; stare8 = "./gifs/stare8.gif"; stare9 = "./gifs/stare9.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "stare")) {
    number = 8;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [stare1] }); break;
        case 2: message.channel.send ({ files: [stare2] }); break;
        case 3: message.channel.send ({ files: [stare3] }); break;
        case 4: message.channel.send ({ files: [stare4] }); break;
        case 5: message.channel.send ({ files: [stare5] }); break;
        case 6: message.channel.send ({ files: [stare6] }); break;
        case 7: message.channel.send ({ files: [stare7] }); break;
        case 8: message.channel.send ({ files: [stare8] }); break;
        case 9: message.channel.send ({ files: [stare9] }); break;
    } 
}

holdhands1 = "./gifs/holdhands1.gif"; holdhands2 = "./gifs/holdhands2.gif"; holdhands3 = "./gifs/holdhands3.gif"; holdhands4 = "./gifs/holdhands4.gif";

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "holdhands") || msg.startsWith (prefix + "hold hands")) {
    number = 4;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [holdhands1] }); break;
        case 2: message.channel.send ({ files: [holdhands2] }); break;
        case 3: message.channel.send ({ files: [holdhands3] }); break;
        case 4: message.channel.send ({ files: [holdhands4] }); break;
    } 
}

nani1 = "./gifs/nani1.gif"; nani2 = "./gifs/nani2.gif"; nani3 = "./gifs/nani3.gif"; 

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "nani")) {
    number = 3;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [nani1] }); break;
        case 2: message.channel.send ({ files: [nani2] }); break;
        case 3: message.channel.send ({ files: [nani3] }); break;
    } 
}

});

client.login (token);
