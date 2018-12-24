/**
 * Created by skyeguy on 10/26/17.
 */

var message = " ";
var tellMessage = false;
var makeWord = [];
var msgWords = [];
var msgPhrase = -1;
var msgWord = 0;
var msgWordLimit = 17;
var msgWait = 120;
var msgKeepTime = new Date().getTime();

function messageReader()
{
    //Leave conversation
    if (lowBar == "dialogue" && playersTurnToSpeak == false)
    {
        if (sKey)
        {
            sKey = false;
            playersTurnToSpeak = true;
            conversationID[0] = "none";
            msgPhrase = -1;
            msgWord = 0;
            msgWords = [];
            makeWord = [];
            message = " ";
            tellMessage = false;
            msgKeepTime = 0;
        }
    }

    //cycle through words to read over time and read them in chunks
    if (lowBar == "dialogue" && tellMessage == true)
    {
        if (mouseY < 90 && clickReleased)
        {
            clickReleased = false;
            msgKeepTime = new Date().getTime();
            msgPhrase += 1;
            if (msgPhrase >= msgWords.length)
            {
                msgPhrase = -1;
                msgWord = 0;
                msgWords = [];
                makeWord = [];
                message = " ";
                tellMessage = "reset";
            }
        }
        XXX.beginPath();
        XXX.lineWidth = 2;
        XXX.fillStyle = "#f8ecc7";
        XXX.strokeStyle = "black";
        XXX.rect(0, 0, CCC.width, 90);
        XXX.fill();
        XXX.stroke();

        //change phrase
        if (new Date().getTime() - msgKeepTime > (msgWait * 100))
        {
            msgKeepTime = new Date().getTime();
            if (msgPhrase == -1)
            {
                msgPhrase = 0;
            }
            else
            {
                msgPhrase += 1;
                if (msgPhrase >= msgWords.length)
                {
                    msgPhrase = -1;
                    msgWord = 0;
                    msgWords = [];
                    makeWord = [];
                    message = " ";
                    tellMessage = "reset";
                }
            }
        }

        //READ word by word
        if (tellMessage != "reset" && msgPhrase >= 0)
        {
            XXX.font="bold 18px Book Antiqua";
            XXX.fillStyle = "black";
            XXX.textAlign="center";
            XXX.fillText(msgWords[msgPhrase], 1/2 * CCC.width, 45);
            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
        }
    }
}

function setMsg(msg)
{
    if (tellMessage == false && tellMessage != "reset")
    {
        message = msg;
        console.log(message);
        tellMessage = true;

        msgPhrase = -1;
        for (var mssg = 0; mssg < message.length; mssg++)
        {
            if (message[mssg] != " ")
            {
                makeWord.push(message[mssg]);

                if ((mssg + 1) == message.length)
                {
                    msgWords.push(makeWord.join(""));
                    makeWord = [];
                    msgWord = 0;
                }
            }
            else if (mssg != 0)
            {
                msgWord += 1;
                if (msgWord >= msgWordLimit)
                {
                    msgWords.push(makeWord.join(""));
                    makeWord = [];
                    msgWord = 0;
                }
                else
                {
                    makeWord.push(message[mssg]);
                }
            }
        }
    }
}

function interaction(me)
{
    var self = me;

    //SC == store conversation
    self.SC = function()
    {
        for (var key in conversations)
        {
            if (conversations[key][0] == conversationID[0])
            {
                conversations[key][1] = conversationID[1];
            }
        }
    };
    //RC == restore conversation
    self.RC = function()
    {
        for (var key in conversations)
        {
            if (conversations[key][0] == conversationID[0])
            {
                conversationID[1] = conversations[key][1];
            }
        }
    };

    if (self.alive == true)
    {
        //Interaction with...
        var dtp = self.DTP();
        if (dtp < 200 )
        {
            var dtm = self.DTM();

            if (self.type == "Person" && !self.petrified || self.type == "Soldier" && !self.petrified || self.interactable && !self.petrified)
            {
                //CONVERSATION AND SOCIAL INTERACTIONS WITH AI CHARACTERS
                if (!dialogueActive && clickReleased == true && dtm < self.sizeRadius && dtp < 55 && self.disturbed == false && self.offended == false && self.dmx == player.dmx || dialogueActive && conversationID[0] != "none" && dtp < 55 && self.disturbed == false && self.offended == false && self.engagedInDialogue && self.dmx == player.dmx) //|| playersTurnToSpeak == false
                {
                    dialogueActive = true;
                    self.engagedInDialogue = true;

                    if (self.ID == "Drohfor" || conversationID[0] == "Drohfor")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Drohfor";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (quests.huntingWagerQuest == "complete")
                                {
                                    player.dialogueOptions = [["Good Day!", false, "a"], ["What's that you're wearing?", false, "c"]];
                                }
                                else if (player.getCharisma() >= 1)
                                {
                                    player.dialogueOptions = [["Good Day!", false, "a"], ["What are you doing?", false, "b"], ["What's that you're wearing?", false, "c"]];
                                }
                                else
                                {
                                    player.dialogueOptions = [["Good Day!", false, "a"], ["What are you doing?", false, "b"], ["What's that you're wearing?", false, "c"]];
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            conversationID[1] = "0a";
                                            playersTurnToSpeak = false;
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            conversationID[1] = "0b";
                                            playersTurnToSpeak = false;
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            conversationID[1] = "0c";
                                            playersTurnToSpeak = false;
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            setMsg("Same as any other, it's not special or nothin'.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (player.getCharisma() < 1 && player.title != "Nobility" && player.title != "Royalty")
                            {
                                //text dialogue
                                setMsg("Wasting time talking to you.");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                            else if (player.title == "Royalty" || player.title == "Nobility")
                            {
                                if (player.gender == "Female")
                                {
                                    //text dialogue
                                    setMsg("Tracking, m'lady.");

                                    //on ended text dialogue
                                    if (tellMessage == "reset")
                                    {
                                        msgReset();

                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 1;
                                        self.SC();
                                    }
                                    else
                                    {
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    //text dialogue
                                    setMsg("Tracking, m'lord.");

                                    //on ended text dialogue
                                    if (tellMessage == "reset")
                                    {
                                        msgReset();

                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 1;
                                        self.SC();
                                    }
                                    else
                                    {
                                        self.SC();
                                    }
                                }
                            }
                            else
                            {
                                //text dialogue
                                setMsg("I'm tracking a pack of friches, what's it to you?");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            //text dialogue
                            setMsg("This old thing? It's from a walrus I killed years back, had Maggy tan the hide n'make it into this.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (player.title == "Royalty" || player.title == "Nobility")
                                {
                                    player.dialogueOptions = [["Carry on.", false, "a"], ["Your tracking looks an awful lot like wandering to me.", false, "c"]];
                                }
                                else if (player.getCharisma() >= 1)
                                {
                                    player.dialogueOptions = [["Just curious that's all.", false, "a"], ["Don't let me keep you then.", false, "b"], ["Your tracking looks an awful lot like wandering to me.", false, "c"]];
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            conversationID[1] = 0;
                                            self.SC();
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            conversationID[1] = 0;
                                            self.SC();
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            conversationID[1] = "1c";
                                            playersTurnToSpeak = false;
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            if (player.title == "Royalty" || player.title == "Nobility")
                            {
                                if (player.gender == "Female" && player.getCharisma > 1 && player.raceName != "Thengar" || player.gender == "Female" && player.getCharisma > 1 && player.raceName != "Freynor" || player.gender == "Female" && player.getCharisma > 1 && player.raceName != "Kellish")
                                {
                                    //text dialogue
                                    setMsg("If you say so, m'lady...");

                                    //on ended text dialogue
                                    if (tellMessage == "reset")
                                    {
                                        msgReset();

                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                    else
                                    {
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    if (player.gender == "Male")
                                    {
                                        //text dialogue
                                        setMsg("Perhaps a highborn lad such as yourself would do better... Is that what you're sayin'? Well be my guest and hunt them if you'd like.");

                                        //on ended text dialogue
                                        if (tellMessage == "reset")
                                        {
                                            msgReset();

                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            quests.activeQuests.push({name: "Hunting Wager", description: "After insulting Drohfor he suggested that you would no better at hunting the pack of peculiar friches he was after."});
                                            conversationID[1] = 2;
                                            quests.huntingWagerFrichPack = true;
                                            change = "none";
                                            self.SC();
                                        }
                                        else
                                        {
                                            self.SC();
                                        }
                                    }
                                    else
                                    {
                                        //text dialogue
                                        setMsg("Perhaps a highborn lasse such as yourself would do better... Is that what you're sayin'? Be my guest and hunt them if you'd like...");

                                        //on ended text dialogue
                                        if (tellMessage == "reset")
                                        {
                                            msgReset();

                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            quests.activeQuests.push({name: "Hunting Wager", description: "After insulting Drohfor he suggested that you would no better at hunting the pack of peculiar friches he was after."});
                                            conversationID[1] = 2;
                                            quests.huntingWagerFrichPack = true;
                                            change = "none";
                                            self.SC();
                                        }
                                        else
                                        {
                                            self.SC();
                                        }
                                    }
                                }
                            }
                            else
                            {
                                if (player.gender == "Female")
                                {
                                    //text dialogue
                                    setMsg("You call this wandering!? Try it yourself if you think it's so easy! I'll bet you 15 coins that you won't even know where to start!");

                                    //on ended text dialogue
                                    if (tellMessage == "reset")
                                    {
                                        msgReset();

                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        quests.activeQuests.push({name: "Hunting Wager", description: "After insulting Drohfor he bet you 15 coins that you would do no better at hunting the peculiar pack of friches he was after."});
                                        conversationID[1] = 2;
                                        quests.huntingWagerFrichPack = true;
                                        change = "none";
                                        self.SC();
                                    }
                                    else
                                    {
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    //text dialogue
                                    setMsg("Wandering!? Let's see you try and hunt them then! I'll wager 15 coins you'll come running back here with your tail between your legs.");

                                    //on ended text dialogue
                                    if (tellMessage == "reset")
                                    {
                                        msgReset();

                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        quests.activeQuests.push({name: "Hunting Wager", description: "After insulting Drohfor he bet you 15 coins that you would do no better at hunting the peculiar pack of friches he was after."});
                                        conversationID[1] = 2;
                                        quests.huntingWagerFrichPack = true;
                                        change = "none";
                                        self.SC();
                                    }
                                    else
                                    {
                                        self.SC();
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (player.title == "Royalty" || player.title == "Nobility")
                                {
                                    player.dialogueOptions = [["The task is complete.", false, "a"]];
                                }
                                else if (player.getCharisma() >= 1)
                                {
                                    player.dialogueOptions = [["Done.", false, "a"]];
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            conversationID[1] = "2a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            console.log(quests.huntingWagerKillCount);
                            if (quests.huntingWagerKillCount >= 3 && quests.huntingWagerQuest == false)
                            {
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                playersTurnToSpeak = false;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (quests.huntingWagerKillCount >= 3 && quests.huntingWagerQuest == false)
                            {
                                quests.huntingWagerQuest = "complete";
                                quests.completeQuests.push({name: "Hunting Wager", description: "You successfully tracked down and slayed the pack of giant friches that Drohfor had been after."});
                                quests.huntingWagerFrichPack = false;
                                player.experience += 110;
                                player.fame += 1;
                                worldItems.push([new Item("coins", X, Y), 15]);

                                if (player.title == "Royalty" || player.title == "Nobility")
                                {
                                    if (player.gender = "Male")
                                    {
                                        drohforLordVictory.play();
                                    }
                                    else
                                    {
                                        drohforLadyVictory.play();
                                    }
                                }
                                else
                                {
                                    drohforCommonerVictory.play();
                                }
                            }
                            else
                            {
                                playersTurnToSpeak = true;
                            }

                            if (quests.huntingWagerQuest == "complete")
                            {
                                if (player.dialogueChoiceMade == false)
                                {
                                    if (player.title == "Royalty" || player.title == "Nobility")
                                    {
                                        player.dialogueOptions = [["I'll be on my way.", false, "a"]];
                                    }
                                    else if (player.getCharisma() >= 1)
                                    {
                                        player.dialogueOptions = [["I'll be on my way.", false, "a"], ["As I said before, wandering!", false, "b"]];
                                    }
                                }
                                else if (player.dialogueChoiceMade == true)
                                {
                                    player.dialogueChoiceMade = false;
                                    for (var i = 0; i < player.dialogueOptions.length; i++)
                                    {
                                        if (player.dialogueOptions[i][1] == true)
                                        {
                                            if (player.dialogueOptions[i][2] == "a")
                                            {
                                                conversationID[1] = "3a";
                                            }
                                            else if (player.dialogueOptions[i][2] == "b")
                                            {
                                                tellMessage = false;
                                                conversationID[1] = "3b";
                                                playersTurnToSpeak = false;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();

                        }
                        else if (conversationID[1] == "3b")
                        {
                            if (player.gender == "Female")
                            {
                                //text dialogue
                                setMsg("I'll hear no more of that lasse.");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                            else
                            {
                                //text dialogue
                                setMsg("Shut your mouth, boy!");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                        }
                    }

                    if (self.ID == "Toggin" || conversationID[0] == "Toggin")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Toggin";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (quests.teshirNorthRoadQuest == "complete")
                                {
                                    player.dialogueOptions = [["Good Day to you ser.", false, "a"], ["What is your trade?", false, "b"]];
                                }
                                else if (player.getCharisma() >= 2)
                                {
                                    player.dialogueOptions = [["Good Day to you ser.", false, "a"], ["What is your trade?", false, "b"], ["Is something bothering you? You seem worried.", false, "d"]];
                                }
                                else
                                {
                                    player.dialogueOptions = [["Good Day to you ser.", false, "a"], ["What is your trade?", false, "b"], ["Is something bothering you? You look worried.", false, "c"]];
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            conversationID[1] = "0a";
                                            playersTurnToSpeak = false;
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "0b";
                                            playersTurnToSpeak = false;
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            conversationID[1] = "0c";
                                            playersTurnToSpeak = false;
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            conversationID[1] = "0d";
                                            playersTurnToSpeak = false;
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            togginGreet.play();
                            togginGreet.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            togginLiving.play();
                            togginLiving.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            //This is the polite declination of sharing the quest
                            if (player.title == "Royalty" && player.raceName == "Freynor" || player.title == "Royalty" && player.freynorFaction > -50 || player.title == "Nobility" && player.freynorFaction > -50)
                            {
                                if (player.gender == "Female")
                                {
                                    togginFDecline.play();
                                    togginFDecline.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    togginMDecline.play();
                                    togginMDecline.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                            }
                            else
                            {
                                togginScat.play();
                                togginScat.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            //this introduces the quest
                            togginAdmit.play();
                            console.log(conversationID[0] != "none" && dtp < 100 && self.disturbed == false);
                            togginAdmit.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I accept.", false, "a"], ["Maybe another time.", false, "b"], ["That sounds dangerous, I don't think I'm up for it.", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "1b";
                                            playersTurnToSpeak = false;
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            conversationID[1] = "1c";
                                            playersTurnToSpeak = false;
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            if (quests.teshirNorthRoadQuest != "complete")
                            {
                                player.dialoguePosition = 0;
                                quests.activeQuests.push({name: "Teshir North Road", description: "Bandits block the road to the north, get rid of them so that Toggin can get back home."});
                                quests.teshirNorthRoadQuest = true;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            togginTooLong.play();
                            togginTooLong.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            togginChangeMind.play();
                            togginChangeMind.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            player.dialogueOptions = [];
                            if (quests.teshirNorthRoadKillCount >= 4 && quests.teshirNorthRoadQuest != "complete" && uniqueChars.hetmerLDS == false)
                            {
                                togginBanditPayment.play();
                                quests.teshirNorthRoadQuest = "complete";
                                quests.teshirNorthRoadBandits = false;
                                player.experience += 350;
                                player.freynorFaction += 10;
                                player.fame += 1;
                                worldItems.push([new Item("coins", X, Y), 20]);
                                quests.completeQuests.push({name: "Teshir North Road", description: "You have slain the bandits blocking the way to the north along with their fearsome bandit chieftan, Hetmer."})
                            }
                            togginBanditPayment.onended = function()
                            {
                                change = "none";
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Balgur Mercenary" && player.theBalgurMercenariesFaction >= 0 && self.team != "player" || self.ID == "Balgur Mercenary" && player.theBalgurMercenariesFaction >= 0 && self.team != "player" || conversationID[0] == "Balgur Mercenary" && player.theBalgurMercenariesFaction >= 0 && self.team != "player")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Balgur Mercenary";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["[Hire for 350 Coins]", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            var coinHitz = -1;
                            var servicesPaid = false;

                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 350)
                                {
                                    coinHitz = i;
                                }
                            }

                            if (coinHitz > -1)
                            {
                                if (Inventory[coinHitz][1] == 350)
                                {
                                    Inventory.splice(coinHitz, 1);
                                }
                                else
                                {
                                    Inventory[coinHitz][1] -= 350
                                }

                                servicesPaid = true;
                            }

                            if (servicesPaid)
                            {
                                self.baseTeam = "player";
                            }

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Sellsword" && self.team != "player" || conversationID[0] == "Sellsword" && self.team != "player")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Sellsword";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (typeof(self.ultra.hirePrice) != "undefined")
                                {
                                    if (self.ultra.hirePrice > 1)
                                    {
                                        player.dialogueOptions = [["[Hire for " + self.ultra.hirePrice + " Coins]", false, "a"]];
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            var coinHitz = -1;
                            var servicesPaid = false;

                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= self.ultra.hirePrice)
                                {
                                    coinHitz = i;
                                }
                            }

                            if (coinHitz > -1)
                            {
                                if (Inventory[coinHitz][1] == self.ultra.hirePrice)
                                {
                                    Inventory.splice(coinHitz, 1);
                                }
                                else
                                {
                                    Inventory[coinHitz][1] -= self.ultra.hirePrice;
                                }

                                servicesPaid = true;
                            }

                            if (servicesPaid)
                            {
                                self.baseTeam = "player";
                            }

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Naaprid Vendor" || conversationID[0] == "NaapridVendor")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "NaapridVendor";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 440)
                                    {
                                        player.dialogueOptions.push(["[Purchase a Milking Naaprid] 440 coins", false, "a"]);
                                        break;
                                    }
                                }
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 375)
                                    {
                                        player.dialogueOptions.push(["[Purchase a Work Naaprid] 375 coins", false, "b"]);
                                        break;
                                    }
                                }

                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                        if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            var hunz = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 440)
                                {
                                    hunz = i;
                                    break;
                                }
                            }

                            if (hunz > -1)
                            {
                                //pay
                                Inventory[hunz][1] -= 440;
                                if (Inventory[hunz][1] < 1)
                                {
                                    Inventory.splice(hunz, 1);
                                }
                                //receive
                                ArtificialIntelligenceAccess.push(new Unit(-44097, -2152, "Naaprid", false, "player"));
                            }
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "0b")
                        {
                            var hunz = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 375)
                                {
                                    hunz = i;
                                    break;
                                }
                            }

                            if (hunz > -1)
                            {
                                //pay
                                Inventory[hunz][1] -= 375;
                                if (Inventory[hunz][1] < 1)
                                {
                                    Inventory.splice(hunz, 1);
                                }
                                //receive
                                ArtificialIntelligenceAccess.push(new Unit(-44097, -2152, "Naaprid", true, "player"));
                            }
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Francil the Stablemaster" || conversationID[0] == "Francil")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Francil";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 725)
                                    {
                                        player.dialogueOptions.push(["[Purchase a Mare] 725 coins", false, "a"]);
                                        break;
                                    }
                                }
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 850)
                                    {
                                        player.dialogueOptions.push(["[Purchase a Stallion] 850 coins", false, "b"]);
                                        break;
                                    }
                                }

                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                        if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            var hunz = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 725)
                                {
                                    hunz = i;
                                    break;
                                }
                            }

                            if (hunz > -1)
                            {
                                //pay
                                Inventory[hunz][1] -= 725;
                                if (Inventory[hunz][1] < 1)
                                {
                                    Inventory.splice(hunz, 1);
                                }
                                //receive
                                ArtificialIntelligenceAccess.push(new Unit(-46869, 1564, "Horse", false, "player"));
                            }
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "0b")
                        {
                            var hunz = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 850)
                                {
                                    hunz = i;
                                    break;
                                }
                            }

                            if (hunz > -1)
                            {
                                //pay
                                Inventory[hunz][1] -= 850;
                                if (Inventory[hunz][1] < 1)
                                {
                                    Inventory.splice(hunz, 1);
                                }
                                //receive
                                ArtificialIntelligenceAccess.push(new Unit(-46869, 1564, "Horse", true, "player"));
                            }
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Tor Captain" && player.freynorFaction >= 0 && self.team != "player" && player.raceName == "Freynor" && player.title == "Nobility" || self.ID == "Tor Captain" && player.freynorFaction >= 0 && self.team != "player" && player.raceName == "Freynor" && player.title == "Royalty" || self.ID == "Tor Soldier" && player.freynorFaction >= 0 && self.team != "player" && player.raceName == "Freynor" && player.title == "Royalty" || self.ID == "Tor Soldier" && player.freynorFaction >= 0 && self.team != "player" && player.raceName == "Freynor" && player.title == "Nobility" || self.ID == "Tor Huskarl" && player.freynorFaction >= 0 && self.team != "player" && player.raceName == "Freynor" && player.title == "Royalty"  || self.ID == "Tor Huskarl" && player.freynorFaction >= 0 && self.team != "player" && player.raceName == "Freynor" && player.title == "Nobility" || conversationID[0] == "Tor" && player.freynorFaction >= 0 && self.team != "player" && player.raceName == "Freynor" && player.title == "Nobility" || conversationID[0] == "Tor" && player.freynorFaction >= 0 && self.team != "player" && player.raceName == "Freynor" && player.title == "Royalty")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Tor";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["[Take Command]", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            self.baseTeam = "player";

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Beulingerr Captain" && player.thengarFaction >= 0 && self.team != "player" && player.raceName == "Thengar" && player.title == "Nobility" || self.ID == "Beulingerr Captain" && player.thengarFaction >= 0 && self.team != "player" && player.raceName == "Thengar" && player.title == "Royalty" || self.ID == "Beulingerr Soldier" && player.thengarFaction >= 0 && self.team != "player" && player.raceName == "Thengar" && player.title == "Royalty" || self.ID == "Beulingerr Soldier" && player.thengarFaction >= 0 && self.team != "player" && player.raceName == "Thengar" && player.title == "Nobility" || conversationID[0] == "Beulingerr" && player.thengarFaction >= 0 && self.team != "player" && player.raceName == "Thengar" && player.title == "Nobility" || conversationID[0] == "Beulingerr" && player.thengarFaction >= 0 && self.team != "player" && player.raceName == "Thengar" && player.title == "Royalty")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Beulingerr";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["[Take Command]", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            self.baseTeam = "player";

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Altezor Captain" && player.nirwadenFaction >= 0 && self.team != "player" && player.raceName == "Nirwaden" && player.title == "Nobility" || self.ID == "Altezor Captain" && player.nirwadenFaction >= 0 && self.team != "player" && player.raceName == "Nirwaden" && player.title == "Royalty" || self.ID == "Altezor Soldier" && player.nirwadenFaction >= 0 && self.team != "player" && player.raceName == "Nirwaden" && player.title == "Royalty" || self.ID == "Altezor Soldier" && player.nirwadenFaction >= 0 && self.team != "player" && player.raceName == "Nirwaden" && player.title == "Nobility" || conversationID[0] == "Altezor" && player.nirwadenFaction >= 0 && self.team != "player" && player.raceName == "Nirwaden" && player.title == "Nobility" || conversationID[0] == "Altezor" && player.nirwadenFaction >= 0 && self.team != "player" && player.raceName == "Nirwaden" && player.title == "Royalty")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Altezor";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["[Take Command]", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            self.baseTeam = "player";

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Rutgar the Warden" || conversationID[0] == "Rutgar")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Rutgar";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["[Buy Kellish Slave For 290 Coins]", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            var coinHitz = -1;
                            var servicesPaid = false;

                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 290)
                                {
                                    coinHitz = i;
                                }
                            }

                            if (coinHitz > -1)
                            {
                                if (Inventory[coinHitz][1] == 290)
                                {
                                    Inventory.splice(coinHitz, 1);
                                }
                                else
                                {
                                    Inventory[coinHitz][1] -= 290;
                                }

                                servicesPaid = true;
                            }

                            if (servicesPaid)
                            {
                                quests.rutgarSlave = true;
                                change = "slavePurchased";
                            }

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Maggy the Tailor" || conversationID[0] == "Maggy")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Maggy";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good day.", false, "a"], ["What is that you're working on?", false, "b"], ["What's new Maggy?", false, "c"], ["How's business?", false, "d"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            setMsg("Oh good day to you too! It's just lovely don't you think?");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            //text dialogue
                            setMsg("Just cleanin' the furs. You got to clean 'em before you can make 'em into something.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            //text dialogue
                            setMsg("Oh you know... A bit o' cleaning a bit o' stitchin', mostly cleanin' though.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            //text dialogue
                            setMsg("Business is hard work youngin'. When I was a girl I had four sisters, and we'd all help my ma' with the sowing. Now it's just me. I'll tell you, this work is not as easy as it seems...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Cristobal the Innkeeper" || conversationID[0] == "Cristobal")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Cristobal";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Hello.", false, "a"], ["How much for a room?", false, "b"], ["Have you heard any interesting rumors?", false, "c"], ["Do you know where I might find work?", false, "d"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            setMsg("Can I get you anything? A drink perhaps?");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            //text dialogue
                            setMsg("A room will be 25 coins for the night.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            //text dialogue
                            if (quests.duendeInfestationKillCount < 9)
                            {
                                setMsg("Oh, yes, I heard that the big house for sale is infested with Duendes... Ha! Bad luck for whoever the owner is. They're never going to be able to sell it, it's illegal to sell a Duende infested home.");
                            }
                            else if (quests.imaginaryFriendQuest == false)
                            {
                                setMsg("You bet I have! I heard that the baker's daughter is crazy as they come... she thinks that some sort of imaginary six armed being follows her around or something, she told me so when I went over to stock up on bread. She says that it's her friend. He he he, yeah right, that girl's just gone mad.");
                            }
                            else if (quests.torturedSpiritQuest == false)
                            {
                                setMsg("I heard that the graveyard is haunted... I know, that sounds obvious but... a customer told me he saw him an apparition of sorts.");
                            }
                            else
                            {
                                setMsg("Lean in a little closer, this one's a secret... I hear that the Eastover Inn is has the best swill in town.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            //text dialogue
                            setMsg("Arcus Co. has a mine south of here that could use some new hands I hear... I guess those fishermen on the riverfront make an aright living if you're in to that... Starting your own shop is always an option in this economy, but hey don't bother trying to compete in the Inn business, mine is the best in town by a longshot.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I'll take it.", false, "a"], ["Nevermind.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            //text dialogue
                            var coinzHit = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 25)
                                {
                                    coinzHit = i;
                                    break;
                                }
                            }
                            if (coinzHit == -1)
                            {
                                setMsg("Not until you get more money you won't, I'm not a charity.");
                            }
                            else
                            {
                                setMsg("Enjoy your stay!");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                                if (coinzHit != -1)
                                {
                                    if (Inventory[coinzHit][1] > 25)
                                    {
                                        Inventory[coinzHit][1] -= 25;
                                    }
                                    else
                                    {
                                        Inventory.splice(coinzHit, 1);
                                    }
                                    X = -47059;
                                    Y = -1228;
                                    lowBar = "information";
                                    sleep();
                                }
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            //text dialogue
                            setMsg("Your loss really, our beds are extremely comfortable, and the rooms are spacious and relaxing...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Atalin Tax Officiator" || conversationID[0] == "atalinTO")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "atalinTO";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good day.", false, "a"]];
                                if (uniqueChars.basilioAltezorLDS == false && player.raceName == "Nirwaden" && player.title == "Nobility")
                                {
                                    if (player.gender == "Male")
                                    {
                                        player.dialogueOptions.push(["I am here to collect the taxes I am owed as Lord of Atalin and the surrounding hamlets.", false, "b"]);
                                    }
                                    else
                                    {
                                        player.dialogueOptions.push(["I am here to collect the taxes I am owed as the Lady of Atalin and the surrounding hamlets.", false, "b"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            setMsg("Good day to you.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            //text dialogue
                            setMsg("Here is everything the tax collectors have brought in up to this point...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                var coinzHitz = -1;
                                var taxColl = Math.floor(quests.atalinTaxes);

                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins")
                                    {
                                        coinzHitz = i;
                                    }
                                }
                                if (coinzHitz > -1)
                                {
                                    Inventory[coinzHitz][1] += taxColl;
                                    quests.atalinTaxes -= taxColl;
                                }
                                else
                                {
                                    Inventory.unshift([new Item("coins", false, false), taxColl]);
                                    quests.atalinTaxes -= taxColl;
                                }

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Tirbutin the Tax Officiator" || conversationID[0] == "Tirbutin")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Tirbutin";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good day.", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            setMsg("Mmmm, 2578, 2579, 2580... oh sorry, yes of course, good day to you... what is it that you need?");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];

                                if (player.title == "Nobility")
                                {
                                    if (uniqueChars.basilioAltezorLDS == true)
                                    {
                                        player.dialogueOptions.push(["How go the taxes?", false, "a"]);
                                    }
                                    else
                                    {
                                        if (player.gender == "Female")
                                        {
                                            if (quests.atalinTaxManReformed == true)
                                            {
                                                player.dialogueOptions.push(["I am here to collect the taxes I am owed as the Lady of Atalin and the surrounding hamlets.", false, "b"]);
                                            }
                                            else
                                            {
                                                player.dialogueOptions.push(["I am here to collect the taxes I am owed as the Lady of Atalin and the surrounding hamlets.", false, "c"]);
                                            }
                                        }
                                        else
                                        {
                                            player.dialogueOptions.push(["I am here to collect the taxes I am owed as Lord of Atalin and the surrounding hamlets.", false, "b"]);
                                        }
                                    }
                                }
                                else
                                {
                                    player.dialogueOptions.push(["Tell me about your work as the tax officiator.", false, "a"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            //text dialogue
                            setMsg("This work is not easy, but I have a particular talent with numbers so I make do.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            //text dialogue
                            if (player.gender == "Female")
                            {
                                setMsg("Here are the taxes that the tax collectors have brought to me so far, your most merciful excellency... I am but your humble servant.");
                            }
                            else
                            {
                                setMsg("Of course my lord, here are the taxes that the tax collectors have brought me thus far.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                var coinzHitz = -1;
                                var taxColl = Math.floor(quests.atalinTaxes);

                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins")
                                    {
                                        coinzHitz = i;
                                    }
                                }
                                if (coinzHitz > -1)
                                {
                                    Inventory[coinzHitz][1] += taxColl;
                                    quests.atalinTaxes -= taxColl;
                                }
                                else
                                {
                                    Inventory.unshift([new Item("coins", false, false), taxColl]);
                                    quests.atalinTaxes -= taxColl;
                                }

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            //text dialogue
                            if (quests.atalinTaxManReformed == false)
                            {
                                setMsg("My lady, here are the taxes that I have prepared for you.");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    var coinzHitz = -1;
                                    var taxColl = Math.floor(quests.atalinTaxes * 4/5);

                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].type == "coins")
                                        {
                                            coinzHitz = i;
                                        }
                                    }
                                    if (coinzHitz > -1)
                                    {
                                        Inventory[coinzHitz][1] += taxColl;
                                        quests.atalinTaxes = 0;
                                    }
                                    else
                                    {
                                        Inventory.unshift([new Item("coins", false, false), taxColl]);
                                        quests.atalinTaxes = 0;
                                    }

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    if (player.getIntelligence() >= 3)
                                    {
                                        conversationID[1] = 2;
                                    }
                                    else
                                    {
                                        conversationID[1] = 1;
                                    }
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                            else
                            {
                                setMsg("My lady, here I present to you the entire sum of your taxes, I assure you that is all of it...");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    var coinzHitz = -1;
                                    var taxColl = Math.floor(quests.atalinTaxes * 5/6);

                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].type == "coins")
                                        {
                                            coinzHitz = i;
                                        }
                                    }
                                    if (coinzHitz > -1)
                                    {
                                        Inventory[coinzHitz][1] += taxColl;
                                        quests.atalinTaxes = 0;
                                    }
                                    else
                                    {
                                        Inventory.unshift([new Item("coins", false, false), taxColl]);
                                        quests.atalinTaxes = 0;
                                    }

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    if (player.getIntelligence() >= 6)
                                    {
                                        conversationID[1] = 2;
                                    }
                                    else
                                    {
                                        conversationID[1] = 1;
                                    }
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I see that you are skimming from the taxes. Your evils will be burnt away at the pyre... [EXECUTE]", false, "a"], ["Stealing from your ruler is punishable by death... If you ever skim from my taxes again I will have your corruption burnt away at the pyre! [SCARE]", false, "b"], ["Thank you for your loyal service... [IGNORE]", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            //text dialogue
                            setMsg("Have mercy, have mercy, please, my lady, please show mercy! I will never decieve you again, please!!!");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                change = "pireGathering";
                                quests.doPire = true;
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 1;
                                X = -46299;
                                Y = 34;
                                quests.pireVictim = "Tirbutin the Tax Officiator";
                                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--)
                                {
                                    console.log(ArtificialIntelligenceAccess[i]);
                                    if (ArtificialIntelligenceAccess[i].ID == quests.pireVictim)
                                    {
                                        ArtificialIntelligenceAccess.splice(i, 1);
                                        break;
                                    }
                                }

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            //text dialogue
                            setMsg("Thank you my lady, thank the everlasting spirit for this wonderful act of mercy, I will never decieve you again... ");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                if (quests.atalinTaxManReformed == false)
                                {
                                    if (Math.random() >= 0.4)
                                    {
                                        quests.atalinTaxManReformed = true;
                                    }
                                    else
                                    {
                                        quests.atalinTaxManReformed = "failed";
                                    }
                                }

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2c")
                        {
                            //text dialogue
                            setMsg("This work is not easy, but I have a particular talent with numbers so I make do.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Inquisition Torturer" && map == "atalinTortureChamber" || conversationID[0] == "InquTort")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "InquTort";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Why hello there.", false, "a"], ["What did these people do?", false, "b"], ["What did you do to these people?", false, "c"], ["Goodbye.", false, "d"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            setMsg("Lovely to see somebody other than my bloody friends down here...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            //text dialogue
                            setMsg("Let's see... adultery for the older one, and for the little girl it was thievery.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            //text dialogue
                            setMsg("I castrated the adulterer, and I gouged the eyes out of the thief... They are free to live out the rest of their lives in exile if they survive, now that they have been properly punished, of course.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            //text dialogue
                            setMsg("Until next time...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Silver Keep Banker" || conversationID[0] == "SilverKeep")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "SilverKeep";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Tell me my account balance.", false, "e"], ["I would like to make a deposit.", false, "a"], ["I would like to make a withdrawal.", false, "b"], ["I would like to take out a loan.", false, "c"], ["I would like to repay a loan.", false, "d"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            skDeposit();
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "0b")
                        {
                            skWithdraw();
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "0c")
                        {
                            skLoan();
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "0d")
                        {
                            skRepay();
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "0e")
                        {
                            //text dialogue
                            setMsg("Your account balance is (" + Math.floor(player.silverKeep) + ")");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Guild Master Manolo" || conversationID[0] == "Manolo")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Manolo";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];

                                if (player.title == "Nobility" && player.raceName == "Nirwaden")
                                {
                                    player.dialogueOptions.push(["Good day, Sir, I would like to discuss the transportation taxes and tarrifs that my family has negociated with your guild.", false, "a"]);
                                }
                                else
                                {
                                    player.dialogueOptions.push(["Tell me about the merchants guild.", false, "a"]);
                                }

                                if (quests.atalinShopOwned != true)
                                {
                                    var coinzHitz = -1;

                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 19000)
                                        {
                                            coinzHitz = i;
                                        }
                                    }
                                    if (coinzHitz > -1)
                                    {
                                        player.dialogueOptions.push(["[buy 'The Atalin Supply' for 19000 coins]", false, "b"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            if (player.raceName != "Nirwaden" || player.title != "Nobility")
                            {
                                setMsg("We at the merchants guild ensure that the economy remains stable by negociating with the house of Altezor. If not for us the lord might charge merchants exorbitant fees and tarrifs and smother the flame of our region's economic prosperity.");
                            }
                            else
                            {
                                if (player.gender == "Male")
                                {
                                    setMsg("Ah, Lord Altezor, it is good to see you... If this inquiry is intended to alter the agreement we have come to regarding the regional tax rates for the trading and transporting of goods, I remind you that to charge any higher rates will harm the economic prosperity that this region has maintained for so long.");
                                }
                                else
                                {
                                    setMsg("Ah, Lady Altezor, you are looking gorgeous as ever... If this inquiry is intended to alter the agreement we have come to regarding the regional tax rates for the trading and transporting of goods, I will let you know that to charge any higher rates will harm the economic prosperity that this region has maintained for so long.");
                                }
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            var coinHitz = -1;
                            var servicesPaid = false;

                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 19000)
                                {
                                    coinHitz = i;
                                }
                            }

                            if (coinHitz > -1)
                            {
                                if (Inventory[coinHitz][1] == 19000)
                                {
                                    Inventory.splice(coinHitz, 1);
                                }
                                else
                                {
                                    Inventory[coinHitz][1] -= 19000;
                                }

                                servicesPaid = true;
                            }

                            if (servicesPaid)
                            {
                                quests.atalinShopOwned = true;
                                change = "shopPurchased";
                            }

                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Arcus Co Representative" || conversationID[0] == "ArcusCoRep")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "ArcusCoRep";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good day.", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            setMsg("Good day, welcome to the headquarters of the Arcus Mineral Company! How can I help you?");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Can you tell me about Arcus?", false, "a"], ["I would like to work for this company.", false, "b"], ["I would like to invest in this company.", false, "c"], ["That is all.", false, "d"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            //text dialogue
                            setMsg("The Arcus Mineral Company is responsible for ensuring that the Nirwaden Empire and her allies are supplied with the highest quality minerals.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            //text dialogue
                            setMsg("Arcus Mineral Co. would be delighted to employ you as a miner! If you are interested in a mining job you must speak with the task manager at our mine just South East of here.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            //text dialogue
                            setMsg("If you wish to invest in our company you should speak with the owner of the company, Hidalgo Ergoku.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1d")
                        {
                            //text dialogue
                            setMsg("Have a nice day!");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Ernesto the Engineer" || conversationID[0] == "Ernesto")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Ernesto";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        var plannns = -1;
                        var planns = -1
                        for (var i = 0; i < Inventory.length; i++)
                        {
                            if (Inventory[i][0].type == "inventionPlans")
                            {
                                planns = i;
                            }
                            else if (Inventory[i][0].type == "falseInventionPlans")
                            {
                                plannns = i;
                            }
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["What is that you're working on?", false, "e"]];
                                if (quests.inventorsFeudQuest == false)
                                {
                                    player.dialogueOptions.unshift(["How goes the day?", false, "a"]);
                                }
                                else if (quests.inventorsFeudQuest == true)
                                {
                                    if (quests.inventorsFeudStage == "hugoStart")
                                    {
                                        player.dialogueOptions.unshift(["Do you have any work for me?", false, "b"]);
                                    }
                                    else if (quests.inventorsFeudStage == "angry")
                                    {
                                        player.dialogueOptions.unshift(["You lyer! How dare you manipulate me into sabotaging your competition!", false, "f"]);
                                    }
                                    else if (quests.inventorsFeudStage == "angry2")
                                    {
                                        player.dialogueOptions.unshift(["You're a fraud!", false, "g"]);
                                    }
                                    else if (planns > -1)
                                    {
                                        player.dialogueOptions.unshift(["Here are the plans that were stolen from you...", false, "d"]);
                                    }
                                    else if (plannns > -1)
                                    {
                                        player.dialogueOptions.unshift(["Here are the plans that were stolen from you...", false, "c"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            setMsg("Not so well, my prized invention has been stolen from me by my rival, Hugo. Would you by chance be looking for work? I would be willing to pay you to get me my plans back from Hugo.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            //text dialogue
                            setMsg("Yes, as a matter of fact I do. My rival, Hugo has stolen my plans from me. I need you to get them back. I will pay you upon their safe return to me.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();
                                quests.inventorsFeudStage == "hugoMid";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            //text dialogue
                            setMsg("Wonderful, with this invention we will soar through the heavens, the sky is no longer the limit, we will surpass it through sheer human ingenuity! Oh right, your payment: Here are 50 coins for your efforts.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                worldItems.push([new Item("coins", X, Y), 50]);
                                Inventory.splice(plannns, 1);
                                if (quests.inventorsFeudStage == "falsePlans")
                                {
                                    quests.inventorsFeudStage = "done";
                                    quests.inventorsFeudCompletionStyle = "wrongPlans";
                                    quests.inventorsFeudQuest = "complete";
                                    quests.completeQuests.push({name: "Inventor's Feud", description: "You delivered the stolen plans back to Ernesto the Engineer."});
                                    player.nirwadenFaction += 1;
                                    player.experience += 45;
                                }
                                else
                                {
                                    quests.inventorsFeudStage = "hugoDone";
                                }
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            //text dialogue
                            setMsg("Brilliant! With this new technology I will be credited for having revolutionized the lumber industry! Oh right, your payment: Here are 50 coins for your efforts.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                worldItems.push([new Item("coins", X, Y), 50]);
                                Inventory.splice(planns, 1);
                                quests.inventorsFeudCompletionStyle = "rightPlans";
                                quests.inventorsFeudQuest = "complete";
                                quests.completeQuests.push({name: "Inventor's Feud", description: "You procured chainsaw schematics for Ernesto the Engineer."});
                                player.nirwadenFaction += 1;
                                player.experience += 45;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            //text dialogue
                            setMsg("I am working on an invention, and for that I need to focus, if you would be so kind as to leave I might resume my work.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0f")
                        {
                            //text dialogue
                            setMsg("I am sorry, I, I just needed to be successful for once. All of my inventions have been failing. I hope you understand, I, I had no other choice...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                quests.inventorsFeudStage = "angry2";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0g")
                        {
                            //text dialogue
                            setMsg("I'm sorry, I'm really sorry...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                quests.inventorsFeudCompletionStyle = "fraud";
                                quests.inventorsFeudQuest = "complete";
                                quests.completeQuests.push({name: "Inventor's Feud", description: "You discovered that Ernest had tried to manipulate you into sabotaging his competition."});
                                player.nirwadenFaction += 6;
                                player.experience += 25;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I'll do it.", false, "a"], ["I'd rather not.", false, "b"]];

                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            //text dialogue
                            setMsg("Excellent! Bring them back to me when your done and I will pay you.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                quests.inventorsFeudStage = "ernestoStart";
                                quests.activeQuests.push({name: "Inventor's Feud", description: "The plans for Ernesto's invention were stolen by Hugo the Inventor, get them back."});
                                quests.inventorsFeudQuest = true;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            //text dialogue
                            setMsg("Oh well, perhaps you aren't the best person for this job anyway...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Hugo the Inventor" || conversationID[0] == "Hugo")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Hugo";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (quests.inventorsFeudStage != "realPlans")
                                {
                                    player.dialogueOptions = [["Good day.", false, "a"], ["What are you up to?", false, "b"]];
                                    if (quests.inventorsFeudQuest == false)
                                    {
                                        player.dialogueOptions.push(["Do you have any work for me?", false, "c"]);
                                    }
                                    else if (quests.inventorsFeudQuest == true)
                                    {
                                        if (quests.inventorsFeudStage == "ernestoStart")
                                        {
                                            player.dialogueOptions.push(["Give me the invention plans that you stole from ernesto or you will regret it!", false, "d"]);
                                            player.dialogueOptions.push(["Where are the plans you stole from Ernesto!?", false, "d"]);
                                        }
                                        else if (quests.inventorsFeudStage == "falsePlans" && quests.inventorsFeudStage != "realPlans")
                                        {
                                            if (player.getIntelligence() >= 20)
                                            {
                                                player.dialogueOptions.push(["These plans are fake! Give me the real plans!", false, "h"]);
                                            }
                                        }
                                        else if (quests.inventorsFeudStage != false && quests.inventorsFeudStage != "hugoMid" && quests.inventorsFeudStage != "hugoLast" && quests.inventorsFeudStage != "hugoStart" && quests.inventorsFeudStage != "hugoDone" && quests.inventorsFeudStage != "angry" && quests.inventorsFeudStage != "angry2" && quests.inventorsFeudStage != "tablesTurned")
                                        {
                                            player.dialogueOptions.push(["I don't believe you; hand over the plans!", false, "e"]);
                                            player.dialogueOptions.push(["I don't care whose plans they are, hand them over!", false, "e"]);
                                            player.dialogueOptions.push(["I'm going to pay Ernesto a visit, nobody lies to me and gets away with it.", false, "f"]);
                                            player.dialogueOptions.push(["So, ernesto was lying to me...", false, "g"]);
                                        }
                                        else if (quests.inventorsFeudStage == "hugoMid")
                                        {
                                            player.dialogueOptions.push(["Alright, give me the false plans.", false, "i"]);
                                        }
                                        else if (quests.inventorsFeudStage == "hugoDone")
                                        {
                                            player.dialogueOptions.push(["I gave Ernesto the fake plans, lets discuss my payment.", false, "j"]);
                                        }
                                    }
                                }
                                else
                                {
                                    player.dialogueOptions = [];
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                        else if (player.dialogueOptions[i][2] == "f")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0f";
                                        }
                                        else if (player.dialogueOptions[i][2] == "g")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0g";
                                        }
                                        else if (player.dialogueOptions[i][2] == "h")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0h";
                                        }
                                        else if (player.dialogueOptions[i][2] == "i")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0i";
                                        }
                                        else if (player.dialogueOptions[i][2] == "j")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0j";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                setMsg("Yes, yes, it is. Now go away!");
                            }
                            else
                            {
                                setMsg("Oh, em, yes, it is.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                setMsg("I am constructing a new device that will change the world. So if you don't mind, I need to focus.");
                            }
                            else
                            {
                                setMsg("I am constructing a new device that will change the world, your excellency.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            //text dialogue
                            setMsg("Yes, I suspect that my rival, Ernesto, is plotting to steal the schematics for my most recent invention so that he can claim the credit for it. I will pay you to pretend to offer your services to him as a sabateur. I will give you false plans to give to him, that way he will be satisfied until I have officially patented my invention.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I'll do it.", false, "a"], ["No thanks.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                setMsg("Calm down! I didn't steal anything from Ernesto! The invention that he claims that I stole is one that he is trying to steal from me through you.");
                            }
                            else
                            {
                                setMsg("Your excellency, whatever Ernesto has told you is a lie, for the plans you seek on his behalf are my own.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                quests.inventorsFeudStage = "ernestoLies";
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                if (player.getStrength >= 4 || player.getCharisma >= 6)
                                {
                                    setMsg("You vile cretin, I am the rightful owner of these plans, you are robbing me of years of effort!");
                                }
                                else
                                {
                                    setMsg("I'm not giving up my invention without a fight!");
                                }

                            }
                            else
                            {
                                setMsg("Your excellency, this is most unjust, you are depriving me of the fruit of years of my own labour!");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                if (player.title == "Nobility" || player.title == "Royalty" || player.title == "Highfolk" || player.getStrength >= 4 || player.getCharisma >= 6)
                                {
                                    Inventory.push([new Item("falseInventionPlans", false, false), 1]);
                                    quests.inventorsFeudStage = "falsePlans";
                                }
                                else
                                {
                                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                                    {
                                        if (ArtificialIntelligenceAccess[i].ID == "Hugo the Inventor")
                                        {
                                            ArtificialIntelligenceAccess[i].healthMAX = 10;
                                            ArtificialIntelligenceAccess[i].health = 10;
                                            ArtificialIntelligenceAccess[i].baseTeam = "arena3";
                                            ArtificialIntelligenceAccess[i].ultra.personality = "violent";
                                            ArtificialIntelligenceAccess[i].disturbed = true;
                                        }
                                    }
                                }
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0f")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                setMsg("Do what you will...");
                            }
                            else
                            {
                                setMsg("Yes, em, lying is wrong and he must be punished as your excellent sees fit...");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                quests.inventorsFeudStage = "angry";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0g")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                setMsg("Yes, Ernesto has been trying to steal my inventions for a long time. I suspect if he were actually successful in any of his own inventions he would be less motivated to steal from me... But that lying fool deserves payback. Take him the plans for this failed invention of mine from a few years ago.");
                            }
                            else
                            {
                                setMsg("Yes, Ernesto has been trying to steal my inventions for a long time. I suspect if he were actually successful in any of his own inventions he would be less motivated to steal from me... But that lying fool deserves payback. Take him the plans for this failed invention of mine from a few years ago... if you will, your excellency.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                Inventory.push([new Item("falseInventionPlans", false, false), 1]);
                                quests.inventorsFeudStage = "tablesTurned";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0h")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                setMsg("How did you know that the icharus wings wouldn't work!? Fine here are my real plans, you dirty thief!");
                            }
                            else
                            {
                                setMsg("Oh... you meant you wanted the plans that work, here you are then, your excellency. Know that justice has been uprooted on this day.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                quests.inventorsFeudStage = "realPlans";
                                Inventory.push([new Item("inventionPlans", false, false), 1]);
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0i")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                setMsg("Here you are; that fool Ernesto, will have no idea that these plans are bogus...");
                            }
                            else
                            {
                                setMsg("Here are the false plans, your excellency.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                Inventory.push([new Item("falseInventionPlans", false, false), 1]);
                                quests.inventorsFeudStage = "hugoLast";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0j")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                setMsg("How would you like to be the very first to own my latest invention, a coal powered saw. Don't answer that, of course you want one, they are a revolutionary new technology that I invented.");
                            }
                            else
                            {
                                setMsg("Your excellence, can have a copy of my revolutionary invention, the one that your excellence helped me safeguard.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                Inventory.push([new Item("chainsaw", false, false), 1]);
                                quests.inventorsFeudStage = "done";
                                quests.inventorsFeudCompletionStyle = "falsePlans";
                                quests.inventorsFeudQuest = "complete";
                                quests.completeQuests.push({name: "Inventor's Feud", description: "You safeguarded Hugo's invention by giving Ernesto the wrong scematics."});
                                player.nirwadenFaction += 3;
                                player.experience += 45;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                setMsg("Great, I'm glad that we're in business!");
                            }
                            else
                            {
                                setMsg("Oh, how wonderful that you would help me with this, your excellency!");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                quests.activeQuests.push({name: "Inventor's Feud", description: "Hugo the Inventor has asked you to pretend to work for his rival in order to foil a plot to steal the plans for his latest invention."});
                                quests.inventorsFeudQuest = true;
                                quests.inventorsFeudStage = "hugoStart";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            //text dialogue
                            if (player.title != "Nobility" && player.title != "Royalty" && player.title != "Highfolk")
                            {
                                setMsg("Oh, okay then...");
                            }
                            else
                            {
                                setMsg("Of course, your excellency, I understand completely. This sort of work is much below you.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Jimena the Tailor" || conversationID[0] == "Jimena")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Jimena";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good day.", false, "a"], ["What's the word around town?", false, "b"], ["How's Business?", false, "c"], ["Do you like your job?", false, "d"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            if (player.gender == "Male")
                            {
                                if (player.title == "Royalty" || player.title == "Nobility" || player.title == "Highfolk")
                                {
                                    setMsg("Gud day, mi lord.");
                                }
                                else
                                {
                                    setMsg("Gud day, mister.");
                                }
                            }
                            else
                            {
                                if (player.title == "Royalty" || player.title == "Nobility" || player.title == "Highfolk")
                                {
                                    setMsg("Gud day, mi lady.");
                                }
                                else
                                {
                                    setMsg("Gud day, miss.");
                                }
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            //text dialogue
                            if (player.title == "Royalty" || player.title == "Nobility" || player.title == "Highfolk" || player.getCharisma() < 6)
                            {
                                setMsg("I don gossip...");
                            }
                            else
                            {
                                if (uniqueChars.matildaLDS == true)
                                {
                                    setMsg("I 'erd dat ol' lady Matilda es a witch... I always knew der was sometin' odd about 'er.");
                                }
                                else
                                {

                                    setMsg("I 'erd dat a picaro e'stole some fruit fron da orchar'. They caught 'im and purified 'im, doh. I would 'av been to da burnin', but I was too busy sewin'.");
                                }
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            //text dialogue
                            setMsg("Business es gud, t'anks for askin'.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            //text dialogue
                            setMsg("Does et matter? Work es work, bes' not complain about et...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Matilda" || conversationID[0] == "Matilda")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Matilda";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];

                                if (quests.atalinWitchHuntQuest == false && player.raceName != "Nirwaden" || quests.atalinWitchHuntQuest == false && player.title == "Royalty")
                                {
                                    player.dialogueOptions.push(["How are you?", false, "a"]);
                                    for (var ii = 0; ii < Inventory.length; ii++)
                                    {
                                        if (Inventory[ii][0].type == "coins" && Inventory[ii][1] >= 3)
                                        {
                                            player.dialogueOptions.push(["Tell me my future... (3 coins)", false, "b"]);
                                            break;
                                        }
                                    }
                                    if (quests.atalinWitchHuntWaysTaught == false && player.intelligence >= 4)
                                    {
                                        player.dialogueOptions.push(["*hushed* Can you teach me your ways?", false, "c"]);
                                    }
                                }
                                else if (quests.atalinWitchHuntQuest == true)
                                {
                                    player.dialogueOptions.push(["By the order of the Inquisition you are to be purified at the pire... If you resist I will kill you where you stand.", false, "e"]);
                                }

                                if (player.raceName == "Nirwaden" && player.title != "Royalty")
                                {
                                    player.dialogueOptions.push(["Foul hag!", false, "d"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            //text dialogue
                            if (player.gender == "Male")
                            {
                                if (player.title == "Royalty")
                                {
                                    setMsg("I am fine, jor grace.");
                                }
                                else
                                {
                                    setMsg("Not well, I sense dat any day now da inquisition will be knocking on mi door...");
                                }
                            }
                            else
                            {
                                if (player.title == "Royalty")
                                {
                                    setMsg("I am fine, jor 'ighness.");
                                }
                                else
                                {
                                    setMsg("Not well, I sense dat any day now da inquisition will be knocking on mi door...");
                                }
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            //text dialogue
                            if (player.raceName == "Freynor")
                            {
                                setMsg("A life long frozen over will soon t'aw, ju will do great t'ings. Riches and glory will be en jor future...");
                            }
                            else if (player.raceName == "Nirwaden")
                            {
                                setMsg("Jor highness, jor future es to lead dis empire, not'ing will get en jor way and ju will be great an' mighty...");
                            }
                            else if (player.raceName == "Vardan")
                            {
                                setMsg("Ju 'ab trabeled a long way to come to where ju are now, and ju will trabel farder e'still, but et will be all for not. Ju will be camping one night and en jor sleep ju will be devoured by a pack of ravenous friches... I'm sorry...");
                            }
                            else if (player.raceName == "Aldrek")
                            {
                                setMsg("Jor people are cursed... ju are cursed... ju will die en battle, soon...");
                            }
                            else if (player.raceName == "Orgell")
                            {
                                setMsg("Jor goin' to 'ab some difficulties en jor future, but dey will be wert' da reward of perseverence, for ju will be a proud parent and people will tell tales of your glorious exploits...");
                            }
                            else if (player.raceName == "Kel")
                            {
                                setMsg("Jor lan's will all be conquered an' jor people will lib as slabes swallowed by eas' an' wes' alike. Ju will be an outcas' where ever ju go, but ju will fin' passion wort' fightin' for...");
                            }
                            else if (player.raceName == "Cephrite")
                            {
                                setMsg("Ju will grow e'strong an' jor power will engulf da worl'... Ju will do great t'ings, vile t'ings, an' en da en' ju will not recognize jorselv...");
                            }
                            else if (player.raceName == "Thengar")
                            {
                                setMsg("Ju will grow e'strong an' dominate da weak. Dat es jor destiny...");
                            }
                            else
                            {
                                setMsg("Ju will wander... ju will feel los' and wit'out purpose... but den love will fin' ju and ju will understan' why ju do what ju do.");
                            }

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                var coinzPos = -1;
                                var coinzExcd = false;
                                for (var ii = 0; ii < Inventory.length; ii++)
                                {
                                    if (Inventory[ii][0].type == "coins" && Inventory[ii][1] <= 3)
                                    {
                                        coinzPos = ii;
                                        break;
                                    }
                                    else if (Inventory[ii][0].type == "coins" && Inventory[ii][1] > 3)
                                    {
                                        coinzPos = ii;
                                        coinzExcd = true;
                                        break;
                                    }
                                }
                                if (coinzExcd)
                                {
                                    Inventory[coinzPos][1] -= 3;
                                }
                                else
                                {
                                    Inventory.splice(coinzPos, 1);
                                }
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            //text dialogue
                            setMsg("En order to access jor true selv ju mus' calm jor min' an' open jor soul. Da e'spirit es en eberyone, more so dan da church would 'ab ju believe... ju mus' meditate an' tap ento jor enner potential...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                player.magicalExperience += 15;
                                quests.atalinWitchHuntWaysTaught = true;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            //text dialogue
                            setMsg("Leave me alone!! Get away!!");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            //text dialogue
                            setMsg("I will not submit!!");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                self.disturbed = true;
                                self.ultra.faction = "hiubdsaghlkbfdiusadbkjlsbas";
                                self.baseTeam = JSON.stringify(Math.random());
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Agustin the Doctor" || conversationID[0] == "Agustin")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Agustin";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Hello doctor.", false, "a"], ["Tell me about yourself.", false, "b"]];
                                if (player.raceName != "Nirwaden" || player.title != "Royalty")
                                {
                                    player.dialogueOptions.push(["Your accent sounds different.", false, "c"]);
                                }
                                if (player.gutWorms)
                                {
                                    player.dialogueOptions.push(["Cure me [gut worms]", false, "d"]);
                                }
                                player.dialogueOptions.push(["Goodbye.", false, "e"]);
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (player.title != "Highfolk" && player.title != "Nobility" && player.title != "Royalty" && player.title != "Tradefolk" && player.getCharisma() < 19 && player.fame < 19)
                            {
                                //text dialogue
                                setMsg("I doubt that you can afford my thervices...");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                            else if (player.title != "Nobility" && player.title != "Royalty")
                            {
                                //text dialogue
                                setMsg("Have you need of thomething?");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                            else
                            {
                                if (player.gender == "Female")
                                {
                                    //text dialogue
                                    setMsg("What ails you my lady?");

                                    //on ended text dialogue
                                    if (tellMessage == "reset")
                                    {
                                        msgReset();

                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                    else
                                    {
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    //text dialogue
                                    setMsg("What ails you my lord?");

                                    //on ended text dialogue
                                    if (tellMessage == "reset")
                                    {
                                        msgReset();

                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                    else
                                    {
                                        self.SC();
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            //text dialogue
                            setMsg("I was born in Nirin... I studied at the academy where I obtained my training in the field of the medical thiences.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            //text dialogue
                            setMsg("Were you born yesterday, fool? The Nirinese accent is the most prestigious in the nirwaden empire.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            if (player.title == "Nobility" || player.title == "Royalty" || player.title == "Highfolk")
                            {
                                //text dialogue
                                setMsg("I will require 300 coins.");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                            else
                            {
                                //text dialogue
                                setMsg("What in torment have you been eating!? Fine, but this will cost you 300 coins.");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            //text dialogue
                            setMsg("Fair well.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                var hasEnuf = false;
                                for (var ii = 0; ii < Inventory.length; ii++)
                                {
                                    if (Inventory[ii][0].type == "coins" && Inventory[ii][1] >= 300)
                                    {
                                        hasEnuf = true;
                                        break;
                                    }
                                }
                                if (hasEnuf)
                                {
                                    player.dialogueOptions.push(["[Pay 300 coins]", false, "a"]);
                                }
                                else
                                {
                                    player.dialogueOptions.push(["I can't afford this at the moment.", false, "b"]);
                                }
                                player.dialogueOptions.push(["Actually I change my mind...", false, "b"]);
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            tellMessage = false;
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            //text dialogue
                            setMsg("This is not going to be comfortable...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                var coinzPos = -1;
                                var coinzExcd = false;
                                for (var ii = 0; ii < Inventory.length; ii++)
                                {
                                    if (Inventory[ii][0].type == "coins" && Inventory[ii][1] <= 300)
                                    {
                                        coinzPos = ii;
                                        break;
                                    }
                                    else if (Inventory[ii][0].type == "coins" && Inventory[ii][1] > 300)
                                    {
                                        coinzPos = ii;
                                        coinzExcd = true;
                                        break;
                                    }
                                }
                                if (coinzExcd)
                                {
                                    Inventory[coinzPos][1] -= 300;
                                }
                                else
                                {
                                    Inventory.splice(coinzPos, 1);
                                }
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 4;
                                player.gutWorms = false;
                                player.hunger = player.hungerMAX;
                                player.thirst = player.thirstMAX;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            //text dialogue
                            setMsg("Please try not to waste my time...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Leon the Toll Master" || conversationID[0] == "Leon")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Leon";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (quests.atalinToll == false)
                                {
                                    player.dialogueOptions.push(["...", false, "a"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (player.gender == "Female" && player.title == "Highfolk" && player.raceName == "Nirwaden" || player.gender == "Female" && player.title == "Nobility" || player.gender == "Female" && player.title == "Royalty")
                            {
                                //text dialogue
                                setMsg("Welcon mi lady.");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                            else if (player.title == "Highfolk" && player.raceName == "Nirwaden" || player.title == "Nobility" || player.title == "Royalty")
                            {
                                //text dialogue
                                setMsg("Welcon mi liege.");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                            else
                            {
                                //text dialogue
                                setMsg("Alt! Ju mus pay a ten cwen toll ef ju wich to cross!");

                                //on ended text dialogue
                                if (tellMessage == "reset")
                                {
                                    msgReset();

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                                else
                                {
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I'll find another way to cross...", false, "b"], ["I don't have enough money.", false, "b"], ["Then I will not cross!", false, "b"]];
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 10)
                                    {
                                        player.dialogueOptions.unshift(["(pay toll of 10 coins)", false, "a"])
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            //text dialogue
                            setMsg("T'anks, ab a gud day...");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins")
                                    {
                                        Inventory[i][1] -= 10;
                                        if (Inventory[i][1] <= 0)
                                        {
                                            Inventory.splice(i, 1);
                                        }
                                        break;
                                    }
                                }
                                quests.atalinToll = true;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            //text dialogue
                            setMsg("Ef ju don pay, ju don cross.");

                            //on ended text dialogue
                            if (tellMessage == "reset")
                            {
                                msgReset();

                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                            else
                            {
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Joaquin the Barkeep" || conversationID[0] == "Joaquin")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Joaquin";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Hello.", false, "a"], ["Hey...", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (player.gender == "Female" && player.charisma >= 4 && player.gamemode != "protagonist" && player.title != "Highfolk" && player.title != "Nobility" && player.title != "Royalty")
                            {
                                joaquinPrettyThing.play();
                                joaquinPrettyThing.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else if (player.gender == "Male" || player.gamemode == "protagonist" || player.title == "Nobility" || player.title == "Royalty" || player.title == "Highfolk")
                            {
                                joaquinDrink.play();
                                joaquinDrink.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                joaquinUgly.play();
                                joaquinUgly.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I'm listening...", false, "a"], ["What sort of work?", false, "a"], ["I'm not.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                                joaquinHappy.play();
                                joaquinHappy.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 2;
                                    self.SC();
                                }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            joaquinYourself.play();
                            joaquinYourself.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Sure, I'll try it, I guess...", false, "a"], ["Sure, count me down.", false, "a"], ["I'll take it.", false, "a"], ["Vile! I would never stoop to such depravity!", false, "b"], ["No thanks, that just doesn't sound like me.", false, "b"], ["No!", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                        if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            joaquinToWork.play();
                            joaquinToWork.onended = function()
                            {
                                player.estolRank = "Hooker";
                                player.estolgangFaction += 10;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            joaquinYourself.play();
                            joaquinYourself.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Hey, Joaquin...", false, "a"], ["Hi there, Joaquin...", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            if (quests.estolHookup < 10)
                            {
                                joaquinNot.play();
                                joaquinNot.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 3;
                                    self.SC();
                                }
                            }
                            else if (quests.estolHookup < 104)
                            {
                                joaquinKeepUp.play();
                                joaquinKeepUp.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 3;
                                    self.SC();
                                }
                            }
                            else if (player.charisma >= 14)
                            {
                                joaquinGoodbye.play();
                                joaquinGoodbye.onended = function()
                                {
                                    if (player.estolRank == "Hooker")
                                    {
                                        player.estolgangFaction += 10;
                                    }
                                    player.estolRank = "Courtesan";
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 3;
                                    self.SC();
                                }
                            }
                        }
                    }

                    if (self.ID == "Hooker" || conversationID[0] == "Hooker")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Hooker";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (player.gender != "Female")
                                {
                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 15)
                                        {
                                            player.dialogueOptions.push(["(proposition 15 coins)", false, "a"]);
                                        }
                                    }
                                    if (player.getStrength() >= 10)
                                    {
                                        player.dialogueOptions.push(["(impose yourself)", false, "b"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            saxomoan.play();
                            player.blinded = true;
                            player.blindedStoreTime = new Date().getTime();
                            player.blindedTime = 3;
                            saxomoan.onended = function()
                            {
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins")
                                    {
                                        Inventory[i][1] -= 15;
                                        if (Inventory[i][1] <= 0)
                                        {
                                            Inventory.splice(i, 1);
                                        }
                                        break;
                                    }
                                }
                                player.energy += 1;
                                player.experience += 4;
                                player.strTime = new Date().getTime() + 300000;
                                player.strengthI = true;
                                player.sleep += 3;

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            saxosob.play();
                            player.blinded = true;
                            player.blindedStoreTime = new Date().getTime();
                            player.blindedTime = 22;
                            saxosob.onended = function()
                            {
                                player.experience += 6;
                                player.strTime = new Date().getTime() + 315000;
                                player.strengthI = true;
                                player.sleep += 2;
                                player.estolgangFaction -= 10;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "John" || conversationID[0] == "John")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "John";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (player.gender == "Female" && player.energy >= 11)
                                {
                                    if (player.estolRank == "Hooker" || player.estolRank == "Courtesan")
                                    {
                                        player.dialogueOptions.push(["(Entertain him for 15 coins) [you get to keep 6 coins]", false, "a"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            saxomoan.play();
                            player.blinded = true;
                            player.blindedStoreTime = new Date().getTime();
                            player.blindedTime = 6;
                            player.dialoguePosition = 0;
                            conversationID[1] = 1;
                            self.SC();
                            saxomoan.onended = function()
                            {
                                playersTurnToSpeak = true;

                                var gaveCoins = false;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins")
                                    {
                                        Inventory[i][1] += 6;
                                        gaveCoins = true;
                                        break;
                                    }
                                }

                                if (gaveCoins == false)
                                {
                                    Inventory.unshift([new Item("coins", false, false), 6]);
                                }

                                player.energy = -11;
                                player.experience = Math.max(0, player.experience - 50);

                                //abuse
                                if (Math.random() > 0.65)
                                {
                                    alert("The John was rough with you...");
                                    if (Math.random() > 0.65)
                                    {
                                        player.health -= 2;
                                    }
                                    else
                                    {
                                        if (Math.random() > 0.65)
                                        {
                                            player.health -= 1;
                                        }
                                        else
                                        {
                                            if (Math.random() > 0.65)
                                            {
                                                player.health -= 11;
                                            }
                                            else
                                            {
                                                player.health -= 6;
                                            }
                                        }
                                    }
                                }

                                quests.estolHookup += 1;
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["How was I...", false, "a"], ["That was so good...", false, "a"], ["Oh, have you finished yet...", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                            dialogueReset(self);
                            ArtificialIntelligenceAccess = [];
                            change = "hookup";
                        }
                    }

                    if (self.ID == "Feniglio" || conversationID[0] == "Feniglio")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Feniglio";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                var haveEnuf = false;
                                if (quests.atalinStoragePurchased != true)
                                {
                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 1200)
                                        {
                                            haveEnuf = true;
                                            player.dialogueOptions.push(["(buy storage space 1200 coins)", false, "a"]);
                                            break;
                                        }
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins")
                                {
                                    if (Inventory[i][1] - 1200 > 0)
                                    {
                                        Inventory[i][1] -= 1200;
                                        quests.atalinStoragePurchased = true;
                                    }
                                    else
                                    {
                                        Inventory.splice(i, 1);
                                        quests.atalinStoragePurchased = true;
                                    }
                                    break;
                                }
                            }
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Aarni the Stablemaster" || conversationID[0] == "Aarni")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Aarni";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 400)
                                    {
                                        player.dialogueOptions.push(["[buy naaprid for 400 coins]", false, "a"]);
                                        break;
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            var hunz = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 400)
                                {
                                    hunz = i;
                                    break;
                                }
                            }

                            if (hunz > -1)
                            {
                                //pay
                                Inventory[hunz][1] -= 400;
                                if (Inventory[hunz][1] < 1)
                                {
                                    Inventory.splice(hunz, 1);
                                }
                                //receive
                                ArtificialIntelligenceAccess.push(new Unit(596, 2003, "Naaprid", true, "player"));
                            }
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Jarl Rannuk Stambjord" || conversationID[0] == "Rannuk")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Rannuk";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (quests.matrimonyTorStambjordQuest == true) // && player.gender == "Female" && player.raceName == "Freynor" && player.title == "Nobility"
                                {
                                    player.dialogueOptions = [["I address thee, Jarl Rannuk Stambjord, my betrothed.", false, "b"]];
                                }
                                else if (quests.matrimonyTorStambjordQuest == "complete")
                                {
                                    if (quests.matrimonyTorStambjordCompletionStyle == "marriage")
                                    {
                                        player.dialogueOptions = [["My Husband...", false, "c"]];
                                    }
                                    else //he hates you if you ran from the wedding or rejected him during it.
                                    {
                                        player.dialogueOptions = [["I wish to speak with you if you have a moment, Jarl Stambjord...", false, "d"]];
                                    }
                                }
                                else
                                {
                                    if (quests.rannukThreatened == false)
                                    {
                                        if (player.title != "Royalty" && player.title != "Nobility" && player.title != "Highfolk")
                                        {
                                            player.dialogueOptions = [["I wish to address thee, Jarl Stambjord of Venning...", false, "a"]];
                                        }
                                        else
                                        {
                                            player.dialogueOptions = [["I wish to speak with you if you have a moment, Jarl Stambjord...", false, "a"]];
                                        }
                                    }
                                    else
                                    {
                                        if (player.title != "Royalty" && player.title != "Nobility" && player.title != "Highfolk")
                                        {
                                            player.dialogueOptions = [["I wish to address thee, Jarl Stambjord of Venning...", false, "d"]];
                                        }
                                        else
                                        {
                                            player.dialogueOptions = [["I wish to speak with you if you have a moment, Jarl Stambjord...", false, "d"]];
                                        }
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (player.title != "Royalty" && player.title != "Nobility" && player.title != "Highfolk")
                            {
                                rannukPeasant.play();
                                rannukPeasant.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else
                            {
                                rannukQuery.play();
                                rannukQuery.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            rannukUnited.play();
                            rannukUnited.onended = function()
                            {
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 1;
                                X = -20393;
                                Y = 41975;
                                for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                                {
                                    if (ArtificialIntelligenceAccess[i].ID == "Jarl Rannuk Stambjord")
                                    {
                                        ArtificialIntelligenceAccess[i].X = -20387;
                                        ArtificialIntelligenceAccess[i].Y = 41943;
                                        ArtificialIntelligenceAccess[i].newRotation = -1/2 * Math.PI;
                                    }
                                }
                                quests.matrimonyTorStambjordQuest = "coldfeet";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            rannukYesDelicateFlower.play();
                            rannukYesDelicateFlower.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 4;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            if (quests.matrimonyTorStambjordQuest == "complete" && quests.matrimonyTorStambjordCompletionStyle != "marriage")
                            {
                                rannukWoman.play();
                                rannukWoman.onended = function ()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                rannukNoWords.play();
                                rannukNoWords.onended = function ()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                    player.dialogueOptions = [["I am simply here to thank you for the excellent work you do as Jarl.", false, "b"], ["Nevermind, it wasn't important.", false, "c"]];

                                    if (quests.venningHomeOwned == false)
                                    {
                                        player.dialogueOptions.unshift(["I would like to purchase the property you have put up for sale.", false, "a"]);
                                    }
                                    if (quests.aNobleConspiracyQuest == true)
                                    {
                                        player.dialogueOptions.push(["I have found evidence that suggests you are involved in supporting the piratry that has been taking place in the northern sea.", false, "d"])
                                    }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            rannukYours.play();
                            rannukYours.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 5;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            rannukSpear.play();
                            rannukSpear.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "1d")
                        {
                            if (player.title == "Nobility" || player.title == "Royalty")
                            {
                                rannukBribe.play();
                                rannukBribe.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 6;
                                    self.SC();
                                }
                            }
                            else
                            {
                                if (player.gender == "Male")
                                {
                                    rannukKillHim.play();
                                    rannukKillHim.onended = function()
                                    {
                                        quests.rannukThreatened = true;
                                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                                        {
                                            if (ArtificialIntelligenceAccess[i].ID == "Stambjord Soldier" || ArtificialIntelligenceAccess[i].ID == "Stambjord Huskarl" || ArtificialIntelligenceAccess[i].ID == "Stambjord Captain")
                                            {
                                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime() + 10000000;
                                            }
                                        }
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    rannukKillHer.play();
                                    rannukKillHer.onended = function()
                                    {
                                        quests.rannukThreatened = true;
                                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                                        {
                                            if (ArtificialIntelligenceAccess[i].ID == "Stambjord Soldier" || ArtificialIntelligenceAccess[i].ID == "Stambjord Huskarl" || ArtificialIntelligenceAccess[i].ID == "Stambjord Captain")
                                            {
                                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime() + 10000000;
                                            }
                                        }
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["[Commense with the vows]", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            rannukVows.play();
                            rannukVows.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I do.", false, "a"], ["No.", false, "b"], ["Yes, of course!", false, "a"], ["How could I? I'm in love with someone else!", false, "b"], ["Yes, yes, yes, yes!", false, "a"], ["No, I would never marry such a debased and immoral person!", false, "b"], ["Ah hell no!", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            rannukBinding.play();
                            rannukBinding.onended = function()
                            {
                                quests.matrimonyTorStambjordQuest = "complete";
                                quests.matrimonyTorStambjordCompletionStyle = "marriage";
                                quests.completeQuests.push({name: "Matrimony: Tor/Stambjord", description: "You married Jarl Rannuk Stambjord of Venning! In doing so you have cemented your family's relation with Venning and you have a rich husband to care for you."});
                                player.freynorFaction += 400;
                                player.name = prompt("You Have Married into Another Noble House: (If your character's name includes a family name, please take this time to rename your character to reflect the Freydic cultural norm of adopting the husband's family name. The name your character is supposed to take on in this case is 'Stambjord'", player.name + " Stambjord");
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                                change = "weddingOver";
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 6;
                                X = -18976;
                                Y = 44644;
                                for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                                {
                                    if (ArtificialIntelligenceAccess[i].ID == "Jarl Rannuk Stambjord")
                                    {
                                        ArtificialIntelligenceAccess[i].X = -18930;
                                        ArtificialIntelligenceAccess[i].Y = 44712;
                                        ArtificialIntelligenceAccess[i].newRotation = 0;
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3b")
                        {
                            rannukNoUnion.play();
                            rannukNoUnion.onended = function()
                            {
                                quests.matrimonyTorStambjordQuest = "complete";
                                quests.matrimonyTorStambjordCompletionStyle = "rejection";
                                quests.completeQuests.push({name: "Matrimony: Tor/Stambjord", description: "You declined to marry the Jarl of Venning during the wedding ceremony and in doing so ended your father's planned marriage-alliance with house Stambjord. Scandalous!"});
                                player.freynorFaction -= 200;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                                change = "weddingOver";
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 1;
                                for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                                {
                                    if (ArtificialIntelligenceAccess[i].ID == "Jarl Rannuk Stambjord")
                                    {
                                        ArtificialIntelligenceAccess[i].X = -18930;
                                        ArtificialIntelligenceAccess[i].Y = 44712;
                                        ArtificialIntelligenceAccess[i].newRotation = 0;
                                    }
                                }

                            }
                        }
                        else if (conversationID[1] == 4)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I love you.", false, "a"], ["Let me take you to bed, my love.", false, "b"], ["May I suggest a policy?", false, "c"]];

                                if (quests.aNobleConspiracyQuest == true)
                                {
                                    player.dialogueOptions.push(["It has come to my attention that our house is supporting piratry.", false, "d"])
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "4a")
                        {
                            rannukBringFlower.play();
                            rannukBringFlower.onended = function()
                            {
                                var floresQueDa = ["rilthasiaFlower", "brightbloomFlower", "tylunFlower", "vorlymFlower"]; //the jarl has spent extravagent amounts to have a couple foreign flowers to give as well. eg. vorlym and rilthasia
                                var florSel = Math.floor(Math.random() * 4);

                                var hits = 0;
                                for (var i = 0; i < Inventory.length; i ++)
                                {
                                    if (Inventory[i][0].type == floresQueDa[florSel])
                                    {
                                        Inventory[i][1] += 1;
                                        break;
                                    }
                                    else
                                    {
                                        hits += 1;
                                    }
                                }
                                if (hits == Inventory.length)
                                {
                                    Inventory.push([new Item(floresQueDa[florSel], false, false), 1]);
                                }
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "4b")
                        {
                            rannukPetals.play();
                            rannukPetals.onended = function()
                            {
                                if (!quests.rannukChild)
                                {
                                    sleeperTime += 60 * 60 * 24 * 365 * 6.75;
                                    player.experience = 0;
                                    player.magicalExperience = 0;
                                    player.health = player.healthMAX;
                                    player.energy = player.energyMAX;
                                    player.will = player.willMAX;
                                    player.hunger = player.hungerMAX;
                                    player.thirst = player.thirstMAX;
                                }
                                sleep();
                                if (!quests.rannukChild)
                                {
                                    quests.rannukChild = true;
                                    quests.rannukChildName = prompt("Soon after having sexual relations with your newly wedded husband Jarl Rannuk Stambjord of Venning, you felt yourself growing heavy with child. Your husband lavishly spent from his massive fortune, doting upon you and making sure you were were satiated in any way that he was inclined to allow. Finally the day came when you went into labour and delivered your baby boy. You decided to name your son:", "Espen Stambjord");
                                    alert("You raised " + quests.rannukChildName + " in Venning in your husband's great longhouse. Your son was an anxious baby that cried all the time, even while you tried to comfort him. The only times he quieted were during his seemingly spontaneous naps and while he was feeding at your breast.");
                                    if (uniqueChars.OrjovTorLDS)
                                    {
                                        alert("As " + quests.rannukChildName + " aged he developed into a handsome young boy, your father came to visit him a few times and bragged about how he thought your son would make a fine hunter. Year after year your son grew more and more acquainted to the luxury of nobility...");
                                    }
                                    else
                                    {
                                        alert("As " + quests.rannukChildName + " aged he developed into a handsome young boy, and his rough playfulness demonstrated that he would grow to be a strong hunt-worthy man. Year after year your son grew more and more acquainted to the luxury of nobility...");
                                    }
                                    alert("He began to order people around, save for you and his father, and he seemed to considered himself to be superior to all around him. Now he is six years old and has been granted his own seat at the dining table (instead of sitting on your lap). You can tell that it makes him feel like his father, a figure he aspires to be like.");
                                    change = "makemy6yearoldherealready!";
                                }
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "4c")
                        {
                            rannukDuty.play();
                            rannukDuty.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "4d")
                        {
                            rannukJeopordize.play();
                            rannukJeopordize.onended = function()
                            {
                                quests.aNobleConspiracyQuest = "complete";
                                quests.aNobleConspiracyCompletionStyle = "complicit";
                                quests.completeQuests.push({name: "A Noble Conspiracy", description: "You have discovered that your husband is involved in supporting piratry, but their is little you can do about it as turning him in would risk your standing in the kingdom as well."});
                                player.experience += 85;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 5)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Nevermind.", false, "b"]];

                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 7100)
                                    {
                                        player.dialogueOptions.unshift(["It's all here. (give 7100 coins)", false, "a"]);
                                        break;
                                    }
                                }

                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "5b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "5a")
                        {
                            rannukWelcome.play();
                            rannukWelcome.onended = function()
                            {
                                var room = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 7100)
                                    {
                                        room = i;
                                    }
                                }

                                if (room > -1)
                                {
                                    Inventory[room][1] -= 7100;
                                    if (Inventory[room][1] < 1)
                                    {
                                        Inventory.splice(room, 1);
                                    }

                                    quests.venningHomeOwned = true;

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "5b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 6)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I do not require your coin, I agree that your actions are just, I was simply broaching the matter with you directly so I could understand your reasoning.", false, "a"], ["I'm starting to see how your reasons are just, I appologize if I had offended you.", false, "b"], ["I'm starting to see how your reasons are just, I appologize if I had offended you. (LIE)", false, "c"], ["You permit criminals to plunder freely in your lands and now you try to bribe me!? I will be telling the king of this treason.", false, "d"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "6a")
                        {
                            if (player.gender == "Female")
                            {
                                rannukGoodLady.play();
                                rannukGoodLady.onended = function()
                                {
                                    quests.aNobleConspiracyQuest = "complete";
                                    quests.aNobleConspiracyCompletionStyle = "agreement";
                                    quests.completeQuests.push({name: "A Noble Conspiracy", description: "You confronted Jarl Rannuk Stambjord about his support for the local pirates, but you ultimately agreed with him that he was acting within his reasonable right as Jarl of Venning."});
                                    player.experience += 85;
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                rannukGoodMan.play();
                                rannukGoodMan.onended = function()
                                {
                                    quests.aNobleConspiracyQuest = "complete";
                                    quests.aNobleConspiracyCompletionStyle = "agreement";
                                    quests.completeQuests.push({name: "A Noble Conspiracy", description: "You confronted Jarl Rannuk Stambjord about his support for the local pirates, but you ultimately agreed with him that he was acting within his reasonable right as Jarl of Venning."});
                                    player.experience += 85;
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "6b")
                        {
                            rannukMyWay.play();
                            rannukMyWay.onended = function()
                            {
                                quests.aNobleConspiracyQuest = "complete";
                                quests.aNobleConspiracyCompletionStyle = "bribed";
                                quests.completeQuests.push({name: "A Noble Conspiracy", description: "You confronted Jarl Rannuk Stambjord about his support for the local pirates, but left with sealed lips after accepting a 500 coin bribe."});
                                player.experience += 85;
                                worldItems.push([new Item("coins", X, Y), 500]);
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "6c")
                        {
                            rannukMyWay.play();
                            rannukMyWay.onended = function()
                            {
                                quests.aNobleConspiracyCompletionStyle = "lied";
                                worldItems.push([new Item("coins", X, Y), 500]);
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "6d")
                        {
                            rannukThreaten.play();
                            rannukThreaten.onended = function()
                            {
                                quests.rannukThreatened = true;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Jarl Orjov Tor" || conversationID[0] == "Orjov")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Orjov";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (player.raceName == "Freynor" && player.gender == "Female" && player.title == "Nobility")
                                {
                                    player.dialogueOptions = [["Hello father.", false, "b"]];
                                    if (quests.matrimonyTorStambjordQuest == false)
                                    {
                                        player.dialogueOptions.push(["Have you yet found me a husband?", false, "c"]);
                                    }
                                }
                                else if (player.raceName == "Freynor" && player.gender == "Male" && player.title == "Nobility")
                                {
                                    player.dialogueOptions = [["Hello father.", false, "d"], ["I wish to go on a hunt.", false, "e"]];
                                }
                                else if (player.raceName == "Freynor" && player.title == "Nobility")
                                {
                                    player.dialogueOptions = [["Hello father.", false, "f"], ["I wish to go on a hunt.", false, "g"], ["Have you found me a spouse?", false, "h"]];
                                }
                                else if (player.title != "nobility" && player.title != "royalty")
                                {
                                    player.dialogueOptions = [["I wish to address thee, Jarl Tor of Teshir...", false, "a"]];
                                }
                                else
                                {
                                    player.dialogueOptions = [["I have a matter to discuss with you Jarl Tor...", false, "a"]];
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                        else if (player.dialogueOptions[i][2] == "f")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0f";
                                        }
                                        else if (player.dialogueOptions[i][2] == "g")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0g";
                                        }
                                        else if (player.dialogueOptions[i][2] == "h")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0h";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (player.title != "nobility" && player.title != "royalty")
                            {
                                orjovConcise.play();
                                orjovConcise.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (quests.matrimonyTorStambjordCompletionStyle == "rejection" || quests.matrimonyTorStambjordCompletionStyle == "coldfeet")
                            {
                                orjovStrife.play();
                                orjovStrife.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                orjovDaughter.play();
                                orjovDaughter.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            orjovBrave.play();
                            orjovBrave.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();

                                quests.matrimonyTorStambjordQuest = true;
                                quests.activeQuests.push({name: "Matrimony: Tor/Stambjord", description: "Your father, Jarl Orjov Tor of Teshir, has arrange your engagement to the Jarl of Venning, Rannuk Stambjord. You should form an escort of soldiers to take you north."});
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            orjovSon.play();
                            orjovSon.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            orjovBoy.play();
                            orjovBoy.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0f")
                        {
                            orjovDespite.play();
                            orjovDespite.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0g")
                        {
                            orjovTryNotToDie.play();
                            orjovTryNotToDie.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0h")
                        {
                            orjovDoWhatYouWill.play();
                            orjovDoWhatYouWill.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I appreciate the good work you have done as Jarl of Teshir", false, "c"]];
                                if (player.raceName == "Freynor" && player.title != "Royalty" && player.title != "Nobility" && player.title != "Highfolk" && player.hunger <= 11 && quests.orjovBeseeched == false)
                                {
                                    player.dialogueOptions.unshift(["I beseech thee, give me food, thine excellency.", false, "b"]);
                                }
                                if (!quests.teshirHomeOwned)
                                {
                                    player.dialogueOptions.unshift(["I wish to purchase property here in Teshir.", false, "a"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            orjovFineHome.play();
                            orjovFineHome.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            orjovAxe.play();
                            orjovAxe.onended = function()
                            {
                                worldItems.push([new Item("timberAxe", X, Y), 1]);
                                quests.orjovBeseeched = true;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            orjovAppreciation.play();
                            orjovAppreciation.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Nevermind.", false, "b"]];
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 6200)
                                    {
                                        player.dialogueOptions.unshift(["I will buy it. (give 6200 coins)", false, "a"]);
                                        break;
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "2b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            orjovYours.play();
                            orjovYours.onended = function()
                            {
                                var room = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 6200)
                                    {
                                        room = i;
                                    }
                                }

                                if (room > -1)
                                {
                                    Inventory[room][1] -= 6200;
                                    if (Inventory[room][1] < 1)
                                    {
                                        Inventory.splice(room, 1);
                                    }

                                    quests.teshirHomeOwned = true;

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Ukko, Sage of Gemesh" || conversationID[0] == "Ukko")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Ukko";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good day.", false, "a"], ["Would you bless me?", false, "b"], ["How can I prove myself in the eyes of Gemesh?", false, "c"]];
                                if (quests.stolenScriptureQuest == false)
                                {
                                    player.dialogueOptions.push(["Is there anything I could do to help the temple?", false, "d"]);
                                }
                                if (quests.stolenScriptureScrollGiven == false)
                                {
                                    player.dialogueOptions.push(["Teach me the secret art of frost, so I can be closer to Gemesh as you have become.", false, "e"]);
                                }
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "stolenTablet")
                                    {
                                        player.dialogueOptions.push(["I have retrieved the stolen tablet.", false, "f"]);
                                        break;
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                        else if (player.dialogueOptions[i][2] == "f")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0f";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            ukkoForSome.play();
                            ukkoForSome.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            ukkoBlessing.play();
                            ukkoBlessing.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            ukkoBravery.play();
                            ukkoBravery.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            ukkoFruits.play();
                            ukkoFruits.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            if (quests.stolenScriptureCompletionStyle == "philosophicalReward")
                            {
                                ukkoIf.play();
                                ukkoIf.onended = function()
                                {
                                    quests.stolenScriptureScrollGiven = true;
                                    hasItYa = false;
                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].type == "iceSpikes")
                                        {
                                            Inventory[i][1] += 1;
                                            hasItYa = true;
                                            break;
                                        }
                                    }
                                    if (hasItYa == false)
                                    {
                                        Inventory.push([new Item("iceSpikes", false, false), 1]);
                                    }
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                ukkoClear.play();
                                ukkoClear.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0f")
                        {
                            quests.stolenScriptureQuest = "complete";
                            player.freynorFaction += 35;
                            if (quests.stolenScriptureCompletionStyle == "philosophicalReward")
                            {
                                quests.completeQuests.push({name: "Stolen Scripture", description: "In the name of Gemesh you retrieved the ancient tablet that was stolen from the temple in Venning. It was in an abandoned mineshaft surrounded by basilisks."});
                                player.fame += 1;
                                player.magicalExperience += 50;
                            }
                            else
                            {
                                quests.completeQuests.push({name: "Stolen Scripture", description: "You retrieved the ancient tablet stolen from the temple of Gemesh in Venning and received a 100 coin reward. The tablet was in an abandoned mineshaft surrounded by basilisks."});
                                player.fame += 1;
                                player.experience += 200;
                                var yaLoHas = false;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins")
                                    {
                                        Inventory[i][1] += 100;
                                        yaLoHas = true;
                                        break;
                                    }
                                }
                                if (!yaLoHas)
                                {
                                    Inventory.unshift([new Item("coins", false, false), 100]);
                                }
                            }

                            var tabbytablet = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "stolenTablet")
                                {
                                    tabbytablet = i;
                                    break;
                                }
                            }

                            if (tabbytablet > -1)
                            {
                                Inventory.splice(tabbytablet, 1);
                            }

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I will do it.", false, "a"], ["This sounds like real work, I would prefer to get a real reward for doing real work.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            ukkoPath.play();
                            ukkoPath.onended = function()
                            {
                                quests.stolenScriptureCompletionStyle = "philosophicalReward";
                                quests.stolenScriptureQuest = true;
                                quests.activeQuests.push({name: "Stolen Scripture", description: "An important stone tablet that belonged to the temple of Gemesh in Venning city was stolen. Retrieve it."});
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            ukkoSate.play();
                            ukkoSate.onended = function()
                            {
                                quests.stolenScriptureCompletionStyle = "realReward";
                                quests.stolenScriptureQuest = true;
                                quests.activeQuests.push({name: "Stolen Scripture", description: "An important stone tablet that belonged to the temple of Gemesh in Venning city was stolen. Retrieve it."});
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Bjorn" || conversationID[0] == "Bjorn")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Bjorn";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (quests.venningStoragePurchased)
                                {
                                    player.dialogueOptions = [["Hello.", false, "b"]];
                                }
                                else
                                {
                                    player.dialogueOptions = [["Hello.", false, "a"]];
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            bjornHelloThere.play();
                            bjornHelloThere.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            bjornKept.play();
                            bjornKept.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Sure.", false, "a"], ["No Thanks.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            bjornCostYou.play();
                            bjornCostYou.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Nevermind.", false, "b"]];
                                var haveEnuf = false;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 800)
                                    {
                                        haveEnuf = true;
                                        player.dialogueOptions.push(["You've got yourself a deal! (pay 800 coins)", false, "a"]);
                                        break;
                                    }
                                }
                                if (!haveEnuf)
                                {
                                    player.dialogueOptions.unshift(["I don't have that much.", false, "b"]);
                                    player.dialogueOptions.unshift(["I don't have that much with me.", false, "b"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "2b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            bjornPleasure.play();
                            bjornPleasure.onended = function()
                            {
                                var room = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 800)
                                    {
                                        room = i;
                                    }
                                }

                                if (room > -1)
                                {
                                    Inventory[room][1] -= 800;
                                    if (Inventory[room][1] < 1)
                                    {
                                        Inventory.splice(room, 1);
                                    }

                                    quests.venningStoragePurchased = true;
                                    change = "justPurchasedVenningStorage";

                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }

                    }

                    if (self.ID == "Cheryl the Tailor" || conversationID[0] == "Cheryl")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Cheryl";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                var romanceOrNot = false;
                                for (var i = 0; i < player.romance.length; i++)
                                {
                                    if (player.romance[i] == "cheryl")
                                    {
                                        romanceOrNot = true;
                                    }
                                }

                                if (romanceOrNot)
                                {
                                    player.dialogueOptions = [["Hi there my love.", false, "d"], ["I love you sweety!", false, "e"], ["Let's have a quick tumble.", false, "f"], ["Good Day!", false, "a"], ["How's business?", false, "b"], ["Let's go somewhere private with a bit less clothing.", false, "f"]];
                                    if (quests.cherylChild == true)
                                    {
                                        var childNameWithoutParenths = quests.cherylChildName;
                                        //childNameWithoutParenths.splice(0, 1);
                                        //childNameWithoutParenths.splice(childNameWithoutParenths.length - 1, 1);
                                        player.dialogueOptions.push(["How is our son, " + childNameWithoutParenths + "?", false, "g"], ["I want " + childNameWithoutParenths + " to come with me on my travels so that he can learn to be a man.", false, "h"]);
                                    }
                                }
                                else
                                {
                                    player.dialogueOptions = [["Good Day!", false, "a"], ["How's business?", false, "b"]];
                                    if (player.charisma >= 4 && player.gender == "Male")
                                    {
                                        player.dialogueOptions.push(["You are absolutely gorgeous!", false, "c"], ["I am madly in love with you!", false, "i"], ["I have been in love with you since the very first moment I laid eyes on your beautiful face. I feel that we should be together.", false, "i"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                        else if (player.dialogueOptions[i][2] == "f")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0f";
                                        }
                                        else if (player.dialogueOptions[i][2] == "g")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0g";
                                        }
                                        else if (player.dialogueOptions[i][2] == "h")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0h";
                                        }
                                        else if (player.dialogueOptions[i][2] == "i")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0i";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            cherylAsWell.play();
                            cherylAsWell.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            var romanceOrNot = false;
                            for (var i = 0; i < player.romance.length; i++)
                            {
                                if (player.romance[i] == "cheryl")
                                {
                                    romanceOrNot = true;
                                }
                            }
                            for (var ii = 0; ii < ArtificialIntelligenceAccess.length; ii++)
                            {
                                if (ArtificialIntelligenceAccess[ii].ID == ("[ " + quests.cherylChildName + " ]"))
                                {
                                    if (ArtificialIntelligenceAccess[ii].baseTeam == "player")
                                    {
                                        quests.cherylChildAccompany = true;
                                    }
                                    else
                                    {
                                        quests.cherylChildAccompany = false;
                                    }
                                }
                            }

                            if (quests.cherylChild && !quests.cherylChildAccompany)
                            {
                                cherylDifficult.play();
                                cherylDifficult.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else if (romanceOrNot)
                            {
                                cherylWell.play();
                                cherylWell.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                cherylStitching.play();
                                cherylStitching.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            cherylKind.play();
                            cherylKind.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            cherylDarling.play();
                            cherylDarling.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            cherylILoveYou.play();
                            cherylILoveYou.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0f")
                        {
                            cherylHoping.play();
                            cherylHoping.onended = function()
                            {
                                if (!quests.cherylChild)
                                {
                                    sleeperTime += 60 * 60 * 24 * 365 * 6.75;
                                    player.health = player.healthMAX;
                                    player.energy = player.energyMAX;
                                    player.will = player.willMAX;
                                    player.hunger = player.hungerMAX;
                                    player.thirst = player.thirstMAX;
                                    player.blindedStoreTime = new Date().getTime();
                                    player.blindedTime = 7;
                                    player.experience += 250; // gain for whatever your character did to provide for your new family for 6 years.
                                }
                                else
                                {
                                    player.blindedStoreTime = new Date().getTime();
                                    player.blindedTime = 3;
                                }

                                if (!quests.cherylChild)
                                {
                                    quests.cherylChild = true;
                                    quests.cherylChildName = prompt("Just a few weeks after having relations with Cheryl that night she confided to you that she was pregnant with your child. You did what you could to provide for her until the day came when your baby was born. Cheryl, with your input decided to name your child...", "Gunder");
                                    alert("You provided for Cheryl and " + quests.cherylChildName + " in whatever ways that you could. Your son grew fast and before you knew it he had turned six years old.");
                                    change = "makemy6yearoldherealready!";
                                }
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0g")
                        {
                            if (uniqueChars.cherylChildLDS)
                            {
                                cherylBehaving.play();
                                cherylBehaving.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                cherylDead.play();
                                cherylDead.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0h")
                        {
                            cherylSafe.play();
                            cherylSafe.onended = function()
                            {
                                for (var ii = 0; ii < ArtificialIntelligenceAccess.length; ii++)
                                {
                                    if (ArtificialIntelligenceAccess[ii].ID == ("[ " + quests.cherylChildName + " ]"))
                                    {
                                        ArtificialIntelligenceAccess[ii].baseTeam = "player";
                                        ArtificialIntelligenceAccess[ii].team = "player";
                                    }
                                }
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0i")
                        {
                            cherylSame.play();
                            cherylSame.onended = function()
                            {
                                player.romance.push("cheryl");
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Ederhal the Innkeeper" || conversationID[0] == "Ederhal")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Ederhal";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Hello.", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (player.raceName == "Thengar" || player.raceName == "Freynor" || player.raceName == "Vardan")
                            {
                                ederhalGet.play();
                                ederhalGet.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else if (player.raceName == "Kel")
                            {
                                ederhalKell.play();
                                ederhalKell.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                ederhalQuickly.play();
                                ederhalQuickly.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I'm looking for something to drink.", false, "a"], ["I want a place to spend the night.", false, "b"], ["Are there any interesting rumors going about?", false, "c"], ["Are there any jobs that I could take?", false, "d"]];

                                if (quests.debtCollectorQuest == true)
                                {
                                    player.dialogueOptions.push(["Who should I collect the money from and how much do they owe?", false, "e"]);
                                }
                                if (quests.draftAndDieQuest == true && uniqueChars.friedrichLDS == false)
                                {
                                    player.dialogueOptions.push(["Your shipment is in, now where's my coin?", false, "g"], ["The task is complete, I'm back for my pay.", false, "g"]);
                                }

                                var hasEnufCoinz = false;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 229)
                                    {
                                        hasEnufCoinz = true;
                                        break;
                                    }
                                }
                                if (hasEnufCoinz && quests.debtCollectorQuest == true)
                                {
                                    player.dialogueOptions.unshift(["I collected the bar tabs. (give 229 coins)", false, "f"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1e";
                                        }
                                        else if (player.dialogueOptions[i][2] == "f")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1f";
                                        }
                                        else if (player.dialogueOptions[i][2] == "g")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1g";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            ederhalRightPlace.play();
                            ederhalRightPlace.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            ederhalSheets.play();
                            ederhalSheets.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            ederhalGossip.play();
                            ederhalGossip.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                if (quests.thePlightOfLethikQuest != "complete")
                                {
                                    conversationID[1] = 3;
                                }
                                else
                                {
                                    conversationID[1] = 1;
                                }
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1d")
                        {
                            if (quests.debtCollectorQuest == false)
                            {
                                ederhalConvincing.play();
                                ederhalConvincing.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 4;
                                    self.SC();
                                }
                            }
                            else if (quests.draftAndDieQuest == false && uniqueChars.friedrichLDS == true)
                            {
                                ederhalTrust.play();
                                ederhalTrust.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 5;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "1e")
                        {
                            if (quests.debtCollectorWho == false)
                            {
                                quests.debtCollectorWho = true;
                                ederhalFirstRound.play();
                                ederhalFirstRound.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else
                            {
                                ederhalLetsSee.play();
                                ederhalLetsSee.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "1f")
                        {
                            ederhalYourCut.play();
                            ederhalYourCut.onended = function()
                            {
                                var coinReqq = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][1] >= 229 && Inventory[i][0].type == "coin")
                                    {
                                        coinReqq = i;
                                        break;
                                    }
                                }

                                if (coinReqq > -1)
                                {
                                    quests.debtCollectorQuest = "complete";
                                    quests.completeQuests.push({name: "Beer Money", description: "You brought Ederhal the Innkeeper the money that his patrons owed him for their bar tabs."});
                                    Inventory[coinReqq][1] -= 169;
                                    player.thengarFaction += 5;
                                    player.experience += 50;
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "1g")
                        {
                            if (quests.draftAndDiePlayersKill == true)
                            {
                                var coinReqq = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coin")
                                    {
                                        coinReqq = i;
                                        break;
                                    }
                                }

                                if (coinReqq > -1)
                                {
                                    Inventory[coinReqq][1] += quests.draftAndDieReward;
                                }
                                else
                                {
                                    Inventory.unshift([new Item("coin", false, false), quests.draftAndDieReward]);
                                }
                                quests.draftAndDieQuest = "complete";
                                quests.completeQuests.push({name: "To Draft to Death", description: "You assassinated the captain of the guard of Lethik City for a hefty sum."});
                                player.experience += 250;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                ederhalForgetAboutIt.play();
                                ederhalForgetAboutIt.onended = function()
                                {
                                    quests.draftAndDieQuest = "complete";
                                    quests.completeQuests.push({name: "To Draft to Death", description: "The captain of the guard was killed, but not by you. Your employer Ederhal was delighted that he no longer required such costly services as yours."});
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Alright, here you are. (give 9 coins)", false, "a"], ["Nevermind.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "2b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            var room = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 9)
                                {
                                    room = i;
                                }
                            }
                            if (room < 0)
                            {
                                ederhalForgetAboutIt.play();
                                ederhalForgetAboutIt.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else
                            {
                                Inventory[room][1] -= 9;
                                if (Inventory[room][1] < 1)
                                {
                                    Inventory.splice(room, 1);
                                }

                                sleep();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 1;
                            self.SC();
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Nevermind.", false, "b"], ["Forget it.", false, "b"], ["I can respect that.", false, "b"]];
                                var hasEnufCoinz = false;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 10)
                                    {
                                        hasEnufCoinz = true;
                                        break;
                                    }
                                }
                                if (hasEnufCoinz)
                                {
                                    player.dialogueOptions.unshift(["What if I were to pay you 10 coins?", false, "a"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "3b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            var room = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 10)
                                {
                                    room = i;
                                }
                            }
                            if (room < 0)
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                            else
                            {
                                Inventory[room][1] -= 10;
                                if (Inventory[room][1] < 1)
                                {
                                    Inventory.splice(room, 1);
                                }

                                ederhalKnow.play();
                                ederhalKnow.onended = function()
                                {
                                    ederhalNonsense.play();
                                    ederhalNonsense.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 1;
                                        self.SC();
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 1;
                            self.SC();
                        }
                        else if (conversationID[1] == 4)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["How much will you pay?", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "4a")
                        {
                            ederhalTabs.play();
                            ederhalTabs.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 8;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 5)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (player.getCharisma() >= 12)
                                {
                                    player.dialogueOptions.unshift(["What is it?", false, "a"], ["Elaborate.", false, "a"]);
                                }
                                else
                                {
                                    player.dialogueOptions.unshift(["What is it?", false, "b"], ["Trust me, you can trust me. I'm trustworthy.", false, "b"]);
                                }

                                if (player.getDexterity() >= 25)
                                {
                                    player.dialogueOptions.unshift(["I'm highly qualified, tell me about the job.", false, "a"]);
                                }
                                else if (player.getDexterity() >= 15)
                                {
                                    player.dialogueOptions.push(["Trust doesn't matter, I've got skill.", false, "b"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "5a")
                        {
                            ederhalDrafted.play();
                            ederhalDrafted.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 6;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "5b")
                        {
                            ederhalForgetAboutIt.play();
                            ederhalForgetAboutIt.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 6)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["What are you proposing that I do?", false, "a"]];
                                if (player.getCharisma() >= 20)
                                {
                                    player.dialogueOptions.unshift(["I understand what needs to be done; I will work for no less than 500 coins", false, "b"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "6b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "6a")
                        {
                            ederhalKill.play();
                            ederhalKill.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 7;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "6b")
                        {
                            quests.activeQuests.push({name: "To Draft to Death", description: "Assassinate the captain of the guard of Lethik City for drafting the Innkeeper's son."});
                            quests.draftAndDieQuest = true;
                            quests.draftAndDieReward = 500;

                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 1;
                            self.SC();
                        }
                        else if (conversationID[1] == 7)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I refuse.", false, "a"], ["I will do it for 300 coins.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "7a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "7b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "7a")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 1;
                            self.SC();
                        }
                        else if (conversationID[1] == "7b")
                        {
                            quests.activeQuests.push({name: "To Draft to Death", description: "Assassinate the captain of the guard of Lethik City for drafting the Innkeeper's son."});
                            quests.draftAndDieQuest = true;
                            quests.draftAndDieReward = 300;

                            player.dialoguePosition = 0;
                            conversationID[1] = 1;
                            self.SC();
                        }
                        else if (conversationID[1] == 8)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I'll do it.", false, "a"], ["That does not sound like something I would want to do.", false, "b"], ["My talents would be wasted doing such a dull job.", false, "c"], ["Who do I get to kill?", false, "d"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "8a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "8b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "8c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "8d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "8a")
                        {
                            quests.activeQuests.push({name: "Beer Money", description: "You have been tasked to collect 229 coins in bar tabs for Ederhal the Innkeeper."});
                            quests.debtCollectorQuest = true;

                            player.dialoguePosition = 0;
                            conversationID[1] = 1;
                            self.SC();
                        }
                        else if (conversationID[1] == "8b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 1;
                            self.SC();
                        }
                        else if (conversationID[1] == "8c")
                        {
                            if (quests.draftAndDieQuest == false && uniqueChars.friedrichLDS == true)
                            {
                                ederhalTrust.play();
                                ederhalTrust.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 5;
                                    self.SC();
                                }
                            }
                            else
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "8d")
                        {
                            ederhalOwe.play();
                            ederhalOwe.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 8;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Seeth the Innkeeper" || conversationID[0] == "Seeth")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Seeth";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                dialogueRND = Math.round(Math.random());
                                player.dialogueOptions = [["Hello.", false, "a"], ["I'm looking for a place to stay the night.", false, "b"], ["Have you heard any interesting tales recently?", false, "c"], ["How's business?", false, "d"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            seethTakeASeat.play();
                            seethTakeASeat.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            seeth10Coins.play();
                            seeth10Coins.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            if (dialogueRND == 1)
                            {
                                if (uniqueChars.jalmariLDS)
                                {
                                    seethPiratry.play();
                                    seethPiratry.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    seethJustHuman.play();
                                    seethJustHuman.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                            }
                            else
                            {
                                if (quests.theMineshaftMysteryQuest != "complete")
                                {
                                    seethBones.play();
                                    seethBones.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                        if (quests.theMineshaftMysteryQuest == false)
                                        {
                                            quests.theMineshaftMysteryQuest = true;
                                            quests.activeQuests.push({name: "The Mineshaft Mystery", description: "An abandoned mineshaft to the south of Venning City was said to potentially have stashed away treasure inside."});
                                        }
                                    }
                                }
                                else
                                {
                                    seethLurk.play();
                                    seethLurk.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            seethWell.play();
                            seethWell.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["[previous dialogue options]", false, "b"]];
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 10)
                                    {
                                        player.dialogueOptions.unshift(["I'll take it. (pay 10 coins)", false, "a"]);
                                        break;
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            var room = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 10)
                                {
                                    room = i;
                                }
                            }

                            if (room > -1)
                            {
                                Inventory[room][1] -= 10;
                                if (Inventory[room][1] < 1)
                                {
                                    Inventory.splice(room, 1);
                                }

                                sleep();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Hildegard" || conversationID[0] == "Hildegard")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Hildegard";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (quests.thePlightOfLethikWitchInterrogated == true && quests.thePlightOfLethikQuest == true)
                                {
                                    player.dialogueOptions.unshift(["I'm not done with you, hag!", false, "a"]);
                                    player.dialogueOptions.unshift(["Hello again.", false, "a"]);
                                }
                                else
                                {
                                    player.dialogueOptions.push(["Hello.", false, "a"]);
                                    player.dialogueOptions.push(["Hi there.", false, "a"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (quests.thePlightOfLethikWitchInterrogated == false)
                            {
                                hildegardSweety.play();
                                hildegardSweety.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else
                            {
                                hildegardNow.play();
                                hildegardNow.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["How are you?", false, "a"]];
                                if (quests.thePlightOfLethikQuest == true)
                                {
                                    player.dialogueOptions.unshift(["Prepare to die you foul hag!", false, "c"]);
                                    player.dialogueOptions.unshift(["You have been accused of witchcraft! How do you plead?", false, "b"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            hildegardCried.play();
                            hildegardCried.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            hildegardNasty.play();
                            hildegardNasty.onended = function()
                            {
                                quests.thePlightOfLethikWitchInterrogated = true;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            hildegardWait.play();
                            hildegardWait.onended = function()
                            {
                                quests.thePlightOfLethikWitchInterrogated = true;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Then tell me witch, who cursed Axel's field?", false, "a"], ["I don't believe you.", false, "b"], ["Then who might I ask is behind this outrageous and vile deed, who cursed the town field?", false, "a"], ["I've heard enough of your lies, witch!", false, "b"], ["If not you, who then cursed Axel's field?", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "2b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            hildegardVardan.play();
                            hildegardVardan.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["The punishment for witchcraft is death, crone.", false, "a"], ["You should have considered the value of your life before you went into witchcraft, it's too late for you now.", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            hildegardISwear.play();
                            hildegardISwear.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 4;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 4)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["That is exactly what a witch would say.", false, "a"], ["If your not a witch then why were you muttering spells by his field?", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            conversationID[1] = "4a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "4a")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "4b")
                        {
                            hildegardSinging.play();
                            hildegardSinging.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Johanna the Herbalist" && conversationID[0] != "Lena" || conversationID[0] == "Johanna")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Johanna";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good Day.", false, "a"], ["I need medical supplies, I'm hurt.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (uniqueChars.lenaLDS)
                            {
                                johannaHelp.play();
                                johannaHelp.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                johannaLeave.play();
                                johannaLeave.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (uniqueChars.lenaLDS)
                            {
                                johannaPoor.play();
                                johannaPoor.onended = function()
                                {
                                    if (player.health >= 0.75 * player.healthMAX)
                                    {
                                        johannaFine.play();
                                        johannaFine.onended = function()
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            conversationID[1] = 0;
                                            self.SC();
                                        }
                                    }
                                    else
                                    {
                                        johannaOwch.play();
                                        johannaOwch.onended = function()
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            conversationID[1] = 0;
                                            self.SC();
                                        }
                                    }
                                }
                            }
                            else
                            {
                                johannaLeave.play();
                                johannaLeave.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                    }

                    if (self.ID == "Lena" && conversationID[0] != "Johanna" || conversationID[0] == "Lena")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Lena";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Hello.", false, "a"], ["What do you do around here?", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (uniqueChars.johannaLDS)
                            {
                                lenaHi.play();
                                lenaHi.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                lenaAway.play();
                                lenaAway.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (uniqueChars.johannaLDS)
                            {
                                lenaPotions.play();
                                lenaPotions.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                lenaAway.play();
                                lenaAway.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                    }

                    if (self.ID == "Brunelda the Merchant" || conversationID[0] == "Brunelda")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Brunelda";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Hello.", false, "a"], ["How's business?", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            bruneldaLollygagging.play();
                            bruneldaLollygagging.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            bruneldaQuestions.play();
                            bruneldaQuestions.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Markos the Pit Master" || conversationID[0] == "Markos")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Markos";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I want to fight in the sand pit!", false, "a"], ["When will the next fight be?", false, "b"]];
                                if (player.raceName == "Thengar" && player.title == "Royalty" || player.raceName == "Thengar" && player.title == "Nobility")
                                {
                                    player.dialogueOptions.unshift(["Have one of the kellish prisoners devoured by beasts.", false, "c"], ["Have one of the kellish prisoners felled by a pit fighter.", false, "d"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (player.title == "Royalty" || player.title == "Nobility")
                            {
                                if (player.gender == "Female")
                                {
                                    markosShocked.play();
                                    markosShocked.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 1;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    markosLiege.play();
                                    markosLiege.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 1;
                                        self.SC();
                                    }
                                }
                            }
                            else
                            {
                                markosPick.play();
                                markosPick.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            markosNow.play();
                            markosNow.onended = function()
                            {
                                quests.pitFight = "spectacle";
                                change = "pitfight";
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 1;

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            markosRightAway.play();
                            markosRightAway.onended = function()
                            {
                                quests.kellExecution = "beasts";
                                change = "pitfight";
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 1;

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            markosRightAway.play();
                            markosRightAway.onended = function()
                            {
                                quests.kellExecution = "champion";
                                change = "pitfight";
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 1;

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["[bears]", false, "a"], ["[skols]", false, "b"], ["[nogs]", false, "c"], ["[pit fighters]", false, "d"], ["[kellish prisoners]", false, "e"], ["Nevermind.", false, "f"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1e";
                                        }
                                        else if (player.dialogueOptions[i][2] == "f")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1f";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            X = 51550;
                            Y = -8115;
                            quests.pitFight = "bears";
                            change = "pitfight";
                            player.blinded = true;
                            player.blindedStoreTime = new Date().getTime();
                            player.blindedTime = 0.2;

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "1b")
                        {
                            X = 51550;
                            Y = -8115;
                            quests.pitFight = "skols";
                            change = "pitfight";
                            player.blinded = true;
                            player.blindedStoreTime = new Date().getTime();
                            player.blindedTime = 0.2;

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "1c")
                        {
                            X = 51550;
                            Y = -8115;
                            quests.pitFight = "nogs";
                            change = "pitfight";
                            player.blinded = true;
                            player.blindedStoreTime = new Date().getTime();
                            player.blindedTime = 0.2;

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "1d")
                        {
                            X = 51550;
                            Y = -8115;
                            quests.pitFight = "pitFighters";
                            change = "pitfight";
                            player.blinded = true;
                            player.blindedStoreTime = new Date().getTime();
                            player.blindedTime = 0.2;

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "1e")
                        {
                            X = 51550;
                            Y = -8115;
                            quests.pitFight = "prisoners";
                            change = "pitfight";
                            player.blinded = true;
                            player.blindedStoreTime = new Date().getTime();
                            player.blindedTime = 0.2;

                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "1f")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Dagmar the Smith" || conversationID[0] == "Dagmar")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Dagmar";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Hello.", false, "a"], ["What do you have for sale?", false, "b"], ["Would you accept me as an apprentice?", false, "c"], ["Have you been a smith long?", false, "d"], ["I have some ore for sale.", false, "e"]];
                                if (quests.swordDeliveryQuest == false)
                                {
                                    player.dialogueOptions.push(["Have any work for me?", false, "f"]);
                                }
                                else if (quests.swordDeliveryQuest == true)
                                {
                                    player.dialogueOptions.unshift(["Who am I to deliver this to?", false, "g"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                        else if (player.dialogueOptions[i][2] == "f")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0f";
                                        }
                                        else if (player.dialogueOptions[i][2] == "g")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0g";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            dagmarLike.play();
                            dagmarLike.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            dagmarLookAround.play();
                            dagmarLookAround.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            dagmarOne.play();
                            dagmarOne.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            dagmarDecades.play();
                            dagmarDecades.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            dagmarGot.play();
                            dagmarGot.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0f")
                        {
                            dagmarSword.play();
                            dagmarSword.onended = function()
                            {
                                quests.activeQuests.push({name: "Sword Delivery", description: "Deliver the newly forged sword to its buyer."});
                                quests.swordDeliveryQuest = true;
                                Inventory.push([new Item("adolfsNewSword", false, false), 1]);

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0g")
                        {
                            dagmarAdolf.play();
                            dagmarAdolf.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["[previous dialogue options]", false, "c"]];

                                var coalHas = -1;
                                var ironHas = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "ironOre" && Inventory[i][1] >= 1)
                                    {
                                        ironHas = i;
                                    }
                                    else if (Inventory[i][0].type == "coal" && Inventory[i][1] >= 1)
                                    {
                                        coalHas = i;
                                    }
                                }

                                if (ironHas > -1)
                                {
                                    player.dialogueOptions.unshift(["[sell iron 8 coins]", false, "b"])
                                }
                                if (coalHas > -1)
                                {
                                    player.dialogueOptions.unshift(["[sell coal 6 coins]", false, "a"])
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            dagmarCoal.play();
                            dagmarCoal.onended = function()
                            {
                                var coalHas = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coal" && Inventory[i][1] >= 1)
                                    {
                                        coalHas = i;
                                    }
                                }

                                if (coalHas > -1)
                                {
                                    if (Inventory[coalHas][1] == 1)
                                    {
                                        Inventory.splice(coalHas, 1);
                                    }
                                    else
                                    {
                                        Inventory[coalHas][1] -= 1;
                                    }
                                }
                                worldItems.push([new Item("coins", X, Y), 6]);

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            dagmarIron.play();
                            dagmarIron.onended = function()
                            {
                                var ironHas = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "ironOre" && Inventory[i][1] >= 1)
                                    {
                                        ironHas = i;
                                    }
                                }

                                if (ironHas > -1)
                                {
                                    if (Inventory[ironHas][1] == 1)
                                    {
                                        Inventory.splice(ironHas, 1);
                                    }
                                    else
                                    {
                                        Inventory[ironHas][1] -= 1;
                                    }
                                }
                                worldItems.push([new Item("coins", X, Y), 8]);
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Adolf the Pit Fighter" || conversationID[0] == "Adolf")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Adolf";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good Day.", false, "a"], ["What are you fighting?", false, "b"]];

                                if (quests.swordDeliveryQuest)
                                {
                                    var swordHas = -1;
                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].type == "adolfsNewSword" && Inventory[i][1] >= 1)
                                        {
                                            swordHas = i;
                                        }
                                    }
                                    if (swordHas > -1)
                                    {
                                        player.dialogueOptions.unshift(["I have the sword that you purchased from Dagmar.", false, "c"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            adolfSure.play();
                            adolfSure.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            adolfDontKnow.play();
                            adolfDontKnow.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            adolfWin.play();
                            adolfWin.onended = function()
                            {
                                var swordHas = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "adolfsNewSword" && Inventory[i][1] >= 1)
                                    {
                                        swordHas = i;
                                    }
                                }

                                if (swordHas > -1)
                                {
                                    if (Inventory[swordHas][1] == 1)
                                    {
                                        Inventory.splice(swordHas, 1);
                                    }
                                    else
                                    {
                                        Inventory[swordHas][1] -= 1;
                                    }
                                }

                                quests.swordDeliveryQuest = "complete";
                                player.experience += 75;
                                player.thengarFaction += 2;
                                //player.fame += 1;
                                worldItems.push([new Item("coins", X, Y), 10]);
                                quests.completeQuests.push({name: "Sword Delivery", description: "You delivered a newly forged blade to Adolf, a pit fighter who needed it for a fight."});
                                self.baseTeam = "arena1";
                                self.team = "arena1";
                                change = "pitfight";
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 1;

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Ser Olis Pynske" || conversationID[0] == "Pynske")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Pynske";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Hello.", false, "a"], ["Who are you?", false, "b"], ["How did you become a knight?", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            olisHello.play();
                            olisHello.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (player.raceName == "Freynor")
                            {
                                if (player.title == "Royalty")
                                {
                                    if (player.gender == "Female")
                                    {
                                        olisGraceF.play();
                                        olisGraceF.onended = function()
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            conversationID[1] = 0;
                                            self.SC();
                                        }
                                    }
                                    else
                                    {
                                        olisMajestyM.play();
                                        olisMajestyM.onended = function()
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            conversationID[1] = 0;
                                            self.SC();
                                        }
                                    }
                                }
                                else if (player.title == "Nobility")
                                {
                                    if (player.gender == "Male")
                                    {
                                        olisMyLord.play();
                                        olisMyLord.onended = function()
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            conversationID[1] = 0;
                                            self.SC();
                                        }
                                    }
                                    else
                                    {
                                        olisMyLady.play();
                                        olisMyLady.onended = function()
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            conversationID[1] = 0;
                                            self.SC();
                                        }
                                    }
                                }
                                else if (player.title == "Highfolk")
                                {
                                    olisIntroAgain.play();
                                    olisIntroAgain.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    olisSurely.play();
                                    olisSurely.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                            }
                            else
                            {
                                if (player.title == "Royalty" || player.title == "Nobility")
                                {
                                    if (player.gender == "Male")
                                    {
                                        olisYourLordship.play();
                                        olisYourLordship.onended = function()
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            conversationID[1] = 0;
                                            self.SC();
                                        }
                                    }
                                    else
                                    {
                                        olisYourLadyship.play();
                                        olisYourLadyship.onended = function()
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            conversationID[1] = 0;
                                            self.SC();
                                        }
                                    }
                                }
                                else if (player.title == "Highfolk")
                                {
                                    olisIntroAgain.play();
                                    olisIntroAgain.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    olisIAm.play();
                                    olisIAm.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            if (player.title == "Nobility" && player.raceName == "Freynor")
                            {
                                olisHero.play();
                                olisHero.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else if (player.title == "Royalty" || player.title == "Nobility" || player.title == "Highfolk")
                            {
                                olisSavedHeir.play();
                                olisSavedHeir.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                olisBetterThanYou.play();
                                olisBetterThanYou.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                    }

                    if (self.ID == "Garld the Crazy Beggar" || conversationID[0] == "Garld")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Garld";


                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good Day.", false, "a"]];
                                if (quests.garldCrazyScroll == false)
                                {
                                    player.dialogueOptions.push(["What's that parchment you have in your hand?", false, "b"]);
                                }
                                else if (quests.garldCrazyScroll == true)
                                {
                                    player.dialogueOptions.push(["[try to obtain the parchment]", false, "c"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                            random = Math.floor(Math.random() * 4);
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                            random = Math.floor(Math.random() * 2);
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (random == 0)
                            {
                                garldCurse.play();
                                garldCurse.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else if (random == 1)
                            {
                                garldDemons.play();
                                garldDemons.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else if (random == 2)
                            {
                                garldTwig.play();
                                garldTwig.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else if (random == 3)
                            {
                                garldFiend.play();
                                garldFiend.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (random == 0)
                            {
                                garldWord.play();
                                garldWord.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else if (random == 1)
                            {
                                garldMemories.play();
                                garldMemories.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 4;
                            self.SC();
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Tell me more...", false, "a"], ["Ahuh, good luck with that...", false, "b"], ["I've heard enough of your gibberish!", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                            random = Math.floor(Math.random() * 2);
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            if (random == 0)
                            {
                                garldTrip.play();
                                garldTrip.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 2;
                                    self.SC();
                                }
                            }
                            else if (random == 1)
                            {
                                garldFingers.play();
                                garldFingers.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 2;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["What does self have to do with the parchment in your hand?", false, "a"], ["Go on.", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                            random = Math.floor(Math.random() * 2);
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            if (random == 0)
                            {
                                garldMarkings.play();
                                garldMarkings.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 3;
                                    self.SC();
                                }
                            }
                            else if (random == 1)
                            {
                                garldYouth.play();
                                garldYouth.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 3;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I understand now...", false, "a"], ["I get it now...", false, "a"], ["I want to join with you in the worship of the sky!", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                            random = Math.floor(Math.random() * 3);
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            if (random == 0)
                            {
                                garldYouDo.play();
                                garldYouDo.onended = function()
                                {
                                    quests.garldCrazyScroll = true;
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else if (random == 1)
                            {
                                garldDoomed.play();
                                garldDoomed.onended = function()
                                {
                                    quests.garldCrazyScroll = true;
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else if (random == 2)
                            {
                                garldToils.play();
                                garldToils.onended = function()
                                {
                                    quests.garldCrazyScroll = true;
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 4)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                var coiners = 0;
                                //find the players coins' quantity
                                for (var j = 0; j < Inventory.length; j++)
                                {
                                    if (Inventory[j][0].type == "coins")
                                    {
                                        coiners = Inventory[j][1];
                                    }
                                }
                                if (player.getCharisma() >= 4 && coiners >= 1)
                                {
                                    player.dialogueOptions.push(["That paper is nothing compared to this shiny medallion of awesomeness!", false, "a"]);
                                }
                                if (player.getCharisma() >= 8)
                                {
                                    player.dialogueOptions.push(["Ye' of little faith, I am the sky bearer cometh. By the sky's will thou shalt deliver the devine parchment unto me!", false, "b"]);
                                    player.dialogueOptions.push(["I am the great one, um... the sky bearer... yeah that, it is time that I take what is truly mine.", false, "b"]);
                                }
                                if (coiners >= 100)
                                {
                                    player.dialogueOptions.push(["I see the value of that parchment. Here, I will buy it from you.", false, "c"]);
                                }
                                player.dialogueOptions.push(["[don't try to obtain the parchment]", false, "d"]);
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "4d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "4a")
                        {
                            garldMedallion.play();
                            garldMedallion.onended = function()
                            {
                                for (var j = 0; j < Inventory.length; j++)
                                {
                                    if (Inventory[j][0].type == "coins")
                                    {
                                        if (Inventory[j][1] > 1)
                                        {
                                            Inventory[j][1] -= 1
                                        }
                                        else
                                        {
                                            Inventory.splice(j, 1);
                                        }
                                        break;
                                    }
                                }
                                Inventory.push([new Item("summonFrich", false, false), 1]);
                                quests.garldCrazyScroll = "obtained1";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "4b")
                        {
                            garldBearer.play();
                            garldBearer.onended = function()
                            {
                                Inventory.push([new Item("summonFrich", false, false), 1]);
                                quests.garldCrazyScroll = "obtained";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "4c")
                        {
                            garldBy.play();
                            garldBy.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 5;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "4d")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 5)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["No, I mean I will pay you for it... With coins.", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "5a")
                        {
                            garldWickedness.play();
                            garldWickedness.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 6;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 6)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Come on that worthless piece of paper, you won't even trade it for 100 coins?", false, "a"], ["You should know that I would give you a vast sum, for I deeply desire to learn from the parchment.", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "6a")
                        {
                            garldWorthless.play();
                            garldWorthless.onended = function()
                            {
                                for (var j = 0; j < Inventory.length; j++)
                                {
                                    if (Inventory[j][0].type == "coins")
                                    {
                                        if (Inventory[j][1] > 100)
                                        {
                                            Inventory[j][1] -= 100
                                        }
                                        else
                                        {
                                            Inventory.splice(j, 1);
                                        }
                                        break;
                                    }
                                }
                                Inventory.push([new Item("summonFrich", false, false), 1]);
                                quests.garldCrazyScroll = "obtained100";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Irene" && conversationID[0] != "Fenwik" || conversationID[0] == "Irene")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Irene";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Hi There!", false, "a"], ["Hello.", false, "a"],["Why are your clothes all muddy?", false, "b"], ["Can I buy one of those ardils?", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            ireneHi.play();
                            ireneHi.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            ireneChasing.play();
                            ireneChasing.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            ireneFluffyOne.play();
                            ireneFluffyOne.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Nevermind.", false, "b"]];

                                var hits = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 10)
                                    {
                                        hits = i;
                                        break;
                                    }
                                }

                                if (hits > -1)
                                {
                                    player.dialogueOptions.unshift(["Actually on second thought, I won't buy one.", false, "b"]);
                                    player.dialogueOptions.unshift(["I promise. (pay 10 coins)", false, "a"]);
                                }
                                else
                                {
                                    player.dialogueOptions.unshift(["I don't have enough money...", false, "b"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            var hits = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 10)
                                {
                                    hits = i;
                                    break;
                                }
                            }
                            if (hits > -1)
                            {
                                if (Inventory[hits][1] <= 10)
                                {
                                    Inventory.splice(hits, 1);
                                }
                                else
                                {
                                    Inventory[hits][1] -= 10;
                                }
                                magicList.push(new Magic({ID: "adminSummon"}, true, [-1143, -31504, "Ardil", false, true]));
                            }
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "1b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                    }

                    if (self.ID == "Irene, Fenwik's Daughter" || conversationID[0] == "IreneDaughter")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "IreneDaughter";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["It is time to come back home lil one.", false, "b"]];
                                if (player.raceName == "Kel" && player.gender == "Female" && player.title != "Royalty")
                                {
                                    player.dialogueOptions.unshift(["Irene, it's time to come back to the tribe, your father is worried about you.", false, "a"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            irenePaWorries.play();
                            irenePaWorries.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                player.blindedTime = 2;
                                player.blindedStoreTime = new Date().getTime();
                                quests.lostGirlFound = true;
                                X = -1006;
                                Y = -31327;
                                quests.lostGirlCompletionStyle = "convince";

                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            ireneNotReady.play();
                            ireneNotReady.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["What is the nature call?", false, "b"], ["Would you like me to help you find the nature call?", false, "c"]];
                                if (player.getStrength() >= 3)
                                {
                                    if (player.class == "mage")
                                    {
                                        player.dialogueOptions.push(["(Carry her back to the tribe)", false, "a"]);
                                    }
                                    else
                                    {
                                        player.dialogueOptions.unshift(["(Carry her back to the tribe)", false, "a"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            player.blindedTime = 3;
                            player.blindedStoreTime = new Date().getTime();
                            quests.lostGirlFound = true;
                            X = -1006;
                            Y = -31327;
                            quests.lostGirlCompletionStyle = "carry";

                            self.SC();
                        }
                        else if (conversationID[1] == "1b")
                        {
                            ireneDontHear.play();
                            ireneDontHear.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            ireneHaveTo.play();
                            ireneHaveTo.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I don't.", false, "a"], ["Nope, not a sound.", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            ireneMuf.play();
                            ireneMuf.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["What song?", false, "a"]];
                                if (player.getIntelligence >= 4)
                                {
                                    player.dialogueOptions.unshift(["Would you please sing me the song, it may help me to help you find the source of the nature call?", false, "a"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            irenePoem.play();
                            irenePoem.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 4;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 4)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["What a lovely poem you made!", false, "a"], ["How is making up silly songs going to help you find anything?", false, "a"], ["Wow, what an terrible poem!", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "4a")
                        {
                            ireneFrom.play();
                            ireneFrom.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 5;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 5)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["The nature call must be near, we are at the edge of the forest already.", false, "a"]];
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "natureCall")
                                    {
                                        player.dialogueOptions.unshift(["Is this it?", false, "b"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "5a")
                        {
                            ireneSleepingStone.play();
                            ireneSleepingStone.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 5;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "5b")
                        {
                            ireneExactly.play();
                            ireneExactly.onended = function()
                            {
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "natureCall")
                                    {
                                        Inventory.splice(i, 1);
                                        break;
                                    }
                                }
                                player.blindedTime = 2;
                                player.blindedStoreTime = new Date().getTime();
                                quests.lostGirlFound = true;
                                X = -1006;
                                Y = -31327;
                                quests.lostGirlCompletionStyle = "natureCall";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Fenwik the Smith" && conversationID[0] != "Irene" || conversationID[0] == "Fenwik")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Fenwik";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good Day.", false, "a"], ["What are you working on?", false, "b"]];
                                if (quests.lostGirlFound && quests.lostGirlQuest == true)
                                {
                                    player.dialogueOptions.unshift(["Here she is.", false, "e"]);
                                }
                                if (quests.lostGirlQuest == false)
                                {
                                    player.dialogueOptions.push(["Is everything going well?", false, "c"]);
                                }
                                player.dialogueOptions.push(["What can I do to help the Echlin Tribe?", false, "d"]);
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "0e";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (player.raceName == "Thengar" && player.kelFaction < 50 && quests.lostGirlQuest != "complete" || player.kelFaction <= 0 || player.raceName == "Thengar" && uniqueChars.ireneLDS == true && player.kelFaction < 115)
                            {
                                fenwikTwillBe.play();
                                fenwikTwillBe.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                fenwikGooday.play();
                                fenwikGooday.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (player.raceName == "Kel" && player.title == "Nobility" && uniqueChars.schuylarLDS == false)
                            {
                                fenwikFocus.play();
                                fenwikFocus.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else if (player.raceName == "Kel" && player.title != "Royalty")
                            {
                                fenwikSupplyingTribe.play();
                                fenwikSupplyingTribe.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                fenwikBother.play();
                                fenwikBother.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            fenwikDaughterLost.play();
                            fenwikDaughterLost.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            if (player.raceName == "Kel" && player.title != "Royalty")
                            {
                                fenwikPart.play();
                                fenwikPart.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                fenwikToChief.play();
                                fenwikToChief.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 3;
                            self.SC();
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I want you to focus on trading your goods domestically.", false, "a"], ["I want you to focus on trading your goods with foreigners to enhance the tribes economy.", false, "b"]];
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 1000)
                                    {
                                        if (quests.fenwikEchlinArmed == false)
                                        {
                                            player.dialogueOptions.push(["I want you to forge fine blades for each of the tribe's warriors. (costs 1000 coins)", false, "c"]);
                                        }
                                        break;
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            fenwikRightAway.play();
                            fenwikRightAway.onended = function()
                            {
                                quests.fenwikShopStyle = "normal";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            fenwikRightAway.play();
                            fenwikRightAway.onended = function()
                            {
                                quests.fenwikShopStyle = "cash";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            fenwikRightAway.play();
                            fenwikRightAway.onended = function()
                            {
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 1000)
                                    {
                                        if (Inventory[i][1] - 1000 < 1)
                                        {
                                            Inventory.splice(i, 1);
                                            break;
                                        }
                                        else
                                        {
                                            Inventory[i][1] -= 1000;
                                            break;
                                        }
                                    }
                                }
                                quests.fenwikEchlinArmed = true;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Oh, that's too bad.", false, "a"], ["I could help find her for you.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "2a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "2b")
                        {
                            fenwikEverGrateful.play();
                            fenwikEverGrateful.onended = function()
                            {
                                quests.lostGirlQuest = true;
                                quests.activeQuests.push({name: "Lost Girl", description: "Fenwik's young daughter has gotten herself lost, you offered to help find her."});
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["...", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            fenwikSoMuch.play();
                            fenwikSoMuch.onended = function()
                            {
                                if (quests.lostGirlCompletionStyle == "carry")
                                {
                                    quests.completeQuests.push({name: "Lost Girl", description: "You found Fenwik's daughter out by the woods and carried her back to her home."});
                                    player.experience += 85;
                                }
                                else if (quests.lostGirlCompletionStyle == "convince")
                                {
                                    quests.completeQuests.push({name: "Lost Girl", description: "Having looked after Irene before you were easily able to convince her to come back home to the tribe."});
                                    player.experience += 55;
                                }
                                else if (quests.lostGirlCompletionStyle == "natureCall")
                                {
                                    quests.completeQuests.push({name: "Lost Girl", description: "Fenwik's daughter was resistant to return home at first so you played along in what turned out to be a magical phenomenon."});
                                    player.magicalExperience += 35;
                                    if (player.class == "Mage")
                                    {
                                        player.magicalExperience += 65;
                                    }
                                    else
                                    {
                                        player.experience += 185;
                                    }
                                }
                                quests.lostGirlQuest = "complete";
                                player.fame += 1;
                                player.kelFaction += 15;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }


                    if (self.ID == "Svehn the Smith" || conversationID[0] == "Svehn")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Svehn";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["How goes the day?", false, "a"], ["Can I use your forge and anvil?", false, "b"], ["How's business?", false, "c"]];

                                if (quests.lostDeliveryQuest == false)
                                {
                                    player.dialogueOptions.push(["Do you have any work I could help with?", false, "d"]);
                                }
                                if (quests.theBrokenWellQuest == true && quests.theBrokenWellSvehn == false)
                                {
                                    player.dialogueOptions.unshift(["Do you know where I could find parts to fix the well?", false, "e"]);
                                }
                                if (quests.theBrokenWellQuest == true && quests.theBrokenWellSvehn == true)
                                {
                                    player.dialogueOptions.unshift(["Do you know where I could find parts to fix the well?", false, "g"]);
                                }
                                if (quests.theBrokenWellSvehn == true && quests.theBrokenWellQuest == "complete")
                                {
                                    player.dialogueOptions.unshift(["Old man Hettin is dead, his farmhouse was overrun by friches.", false, "f"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                        else if (player.dialogueOptions[i][2] == "f")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0f";
                                        }
                                        else if (player.dialogueOptions[i][2] == "g")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0g";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            svehnWell.play();
                            svehnWell.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            svehnMyWay.play();
                            svehnMyWay.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            svehnSmithing.play();
                            svehnSmithing.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            svehnGo.play();
                            svehnGo.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            svehnParts.play();
                            svehnParts.onended = function()
                            {
                                quests.theBrokenWellSvehn = true;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0f")
                        {
                            svehnShame.play();
                            svehnShame.onended = function()
                            {
                                quests.theBrokenWellSvehn = "over";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0g")
                        {
                            svehnAsISaid.play();
                            svehnAsISaid.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Sure, I'll go check on the delivery for you.", false, "a"], ["As good as done.", false, "a"], ["Okay.", false, "a"], ["No.", false, "b"], ["Not right now.", false, "b"], ["Sounds like a waste of my time.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            quests.lostDeliveryQuest = true;
                            quests.activeQuests.push({name: "A Lost Delivery", description: "Svehn asked you to check on an absent delivery of Nirinese goods from the east."});
                            player.dialoguePosition = 0;
                            conversationID[1] = 2;
                            self.SC();
                        }
                        else if (conversationID[1] == "1b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I'm back.", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            svehnHow.play();
                            svehnHow.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];

                                var hitz = false;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].identity == "Svehn's Shipment")
                                    {
                                        hitz = true;
                                    }
                                }

                                if (!hitz)
                                {
                                    player.dialogueOptions.push(["Not Yet.", false, "a"]);
                                }
                                else
                                {
                                    player.dialogueOptions.push(["I wasn't able to find it. (LIE)", false, "b"], ["I found it... but your going to have to pay me for it.", false, "c"], ["The shipment was attacked by woodland bandits, but I managed to grab the goods.", false, "d"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "3a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = true;
                                            conversationID[1] = "3b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 2;
                            self.SC();
                        }
                        else if (conversationID[1] == "3b")
                        {
                            quests.lostDeliveryQuest = "complete";
                            quests.lostDeliveryCompletionStyle = "keptShipment";
                            player.experience += 100;
                            if (uniqueChars.nelgrefLDS)
                            {
                                quests.completeQuests.push({name: "A Lost Delivery", description: "You evaded Nelgref the Flayer, took the shipment, and lied to Svehn about finding it keeping his delivery for yourself."});
                            }
                            else
                            {
                                quests.completeQuests.push({name: "A Lost Delivery", description: "You slayed Nelgref the Flayer, took the shipment, and lied to Svehn about finding it keeping his delivery for yourself."});
                            }
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                            var hit = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].identity == "Svehn's Shipment")
                                {
                                    hit = i;
                                }
                            }
                            if (hit != -1)
                            {
                                Inventory.splice(hit, 1);
                            }

                            Inventory.push([new Item("svehnsLoot", false, false), 1]);
                        }
                        else if (conversationID[1] == "3c")
                        {
                            if (player.getCharisma() >= 37)
                            {
                                svehnOnlyFair.play();
                                svehnOnlyFair.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                    var hit = -1;
                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].identity == "Svehn's Shipment")
                                        {
                                            hit = i;
                                        }
                                    }
                                    if (hit != -1)
                                    {
                                        Inventory.splice(hit, 1);
                                    }
                                    worldItems.push([new Item("coins", X, Y), 1100]);
                                    quests.lostDeliveryQuest = "complete";
                                    player.experience += 130;
                                    quests.lostDeliveryCompletionStyle = "soldShipment";
                                    if (uniqueChars.nelgrefLDS)
                                    {
                                        quests.completeQuests.push({name: "A Lost Delivery", description: "You evaded Nelgref the Flayer, took the shipment, and sold Svehn his delivery."});
                                    }
                                    else
                                    {
                                        quests.completeQuests.push({name: "A Lost Delivery", description: "You slayed Nelgref the Flayer, took the shipment, and sold Svehn his delivery."});
                                    }
                                }
                            }
                            else if (player.getCharisma() >= 14)
                            {
                                svehnCrook.play();
                                svehnCrook.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                    var hit = -1;
                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].identity == "Svehn's Shipment")
                                        {
                                            hit = i;
                                        }
                                    }
                                    if (hit != -1)
                                    {
                                        Inventory.splice(hit, 1);
                                    }
                                    worldItems.push([new Item("coins", X, Y), 200]);
                                    quests.lostDeliveryQuest = "complete";
                                    player.experience += 110;
                                    quests.lostDeliveryCompletionStyle = "soldShipment";

                                    if (uniqueChars.nelgrefLDS)
                                    {
                                        quests.completeQuests.push({name: "A Lost Delivery", description: "You evaded Nelgref the Flayer, took the shipment, and sold Svehn his delivery."});
                                    }
                                    else
                                    {
                                        quests.completeQuests.push({name: "A Lost Delivery", description: "You slayed Nelgref the Flayer, took the shipment, and sold Svehn his delivery."});
                                    }
                                }
                            }
                            else
                            {
                                svehnGetOutaHere.play();
                                svehnGetOutaHere.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                    var hit = -1;
                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].identity == "Svehn's Shipment")
                                        {
                                            hit = i;
                                        }
                                    }
                                    if (hit != -1)
                                    {
                                        Inventory.splice(hit, 1);
                                    }
                                    worldItems.push([new Item("coins", X, Y), 80]);
                                    player.experience += 75;
                                    quests.lostDeliveryQuest = "complete";
                                    quests.lostDeliveryCompletionStyle = "soldShipment";
                                    if (uniqueChars.nelgrefLDS)
                                    {
                                        quests.completeQuests.push({name: "A Lost Delivery", description: "You evaded Nelgref the Flayer, took the shipment, and sold Svehn his delivery."});
                                    }
                                    else
                                    {
                                        quests.completeQuests.push({name: "A Lost Delivery", description: "You slayed Nelgref the Flayer, took the shipment, and sold Svehn his delivery."});
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3d")
                        {
                            svehnSeemsFair.play();
                            svehnSeemsFair.onended = function()
                            {
                                quests.lostDeliveryQuest = "complete";
                                player.experience += 100;
                                player.freynorFaction += 14;
                                quests.lostDeliveryCompletionStyle = "gaveShipment";
                                if (uniqueChars.nelgrefLDS)
                                {
                                    quests.completeQuests.push({name: "A Lost Delivery", description: "You evaded Nelgref the Flayer, took the shipment and gave it to Svehn."});
                                }
                                else
                                {
                                    quests.completeQuests.push({name: "A Lost Delivery", description: "You slayed Nelgref the Flayer, took the shipment and gave it to Svehn."});
                                }
                                player.fame += 1;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                                var hit = -1;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].identity == "Svehn's Shipment")
                                    {
                                        hit = i;
                                    }
                                }
                                if (hit != -1)
                                {
                                    Inventory.splice(hit, 1);
                                }
                                worldItems.push([new Item("coins", X, Y), 120]);
                            }
                        }
                    }

                    if (self.ID == "Medlia the Merchant" || conversationID[0] == "Medlia")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Medlia";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Nice day isn't it?", false, "a"], ["How's business?", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            conversationID[1] = "0a";
                                            playersTurnToSpeak = false;
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "0b";
                                            playersTurnToSpeak = false;
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            if (player.getCharisma() < 2)
                            {
                                medliaMaybeIf.play();
                                medliaMaybeIf.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                medliaGuessItIs.play();
                                medliaGuessItIs.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }

                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (player.title == "Royalty" && player.freynorFaction > -50 || player.title == "Nobility" && player.freynorFaction > -50)
                            {
                                if (player.gender == "Male")
                                {
                                    medliaMyMyMeLord.play();
                                    medliaMyMyMeLord.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    medliaMyMyMeLady.play();
                                    medliaMyMyMeLady.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                            }
                            else if (player.getCharisma() > 2 && quests.medliaCompetitionControlQuest != "complete" && quests.bankruptNeculai != true)
                            {
                                medliaCantPretend.play();
                                medliaCantPretend.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else
                            {
                                medliaFine.play();
                                medliaFine.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["What's the problem?", false, "a"], ["I didn't mean to pry.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            conversationID[1] = "1a";
                                            playersTurnToSpeak = false;
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            if (player.raceName == "Freynor")
                            {
                                medliaOurProblem.play();
                                medliaOurProblem.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 2;
                                    self.SC();
                                }
                            }
                            else
                            {
                                medliaTheProblem.play();
                                medliaTheProblem.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 2;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Is there something I can do?", false, "a"], ["I'm done with this subject for now.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            conversationID[1] = "2a";
                                            playersTurnToSpeak = false;
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "2b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            medliaTen.play();
                            medliaTen.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                quests.medliaCompetitionControlReward = 10;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (player.getCharisma() > 5)
                                {
                                    player.dialogueOptions = [["I think that doing away with your competition is worth a bit more. don't you?", false, "a"], ["It's a deal.", false, "b"], ["No deal.", false, "c"]];
                                }
                                else
                                {
                                    player.dialogueOptions = [["It's a deal.", false, "b"], ["No deal.", false, "c"]];
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            conversationID[1] = "3a";
                                            playersTurnToSpeak = false;
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "3b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            conversationID[1] = "3c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            medliaEighteen.play();
                            medliaEighteen.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                quests.medliaCompetitionControlReward = 18;
                                quests.medliaCompetitionControlQuest = true;
                                quests.activeQuests.push({name: "Medlia's Competition Control", description: "Medlia feels that she is losing business to a Vardanian merchant that moved to town, she wants you to make him leave."});
                                conversationID[1] = 4;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "3b")
                        {
                            player.dialoguePosition = 0;
                            quests.medliaCompetitionControlQuest = true;
                            quests.activeQuests.push({name: "Medlia's Competition Control", description: "Medlia feels that she is losing business to a Vardanian merchant that moved to town, she wants you to make him leave."});
                            conversationID[1] = 4;
                            self.SC();
                        }
                        else if (conversationID[1] == "3c")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 4 && quests.medliaCompetitionControlQuest != "complete")
                        {
                            player.dialogueOptions = [];
                            if (quests.medliaCompetitionControlCompletionStyle == "friendly" || quests.medliaCompetitionControlCompletionStyle == "intimidate")
                            {
                                playersTurnToSpeak = false;
                                medliaItWorked.play();
                                conversationID[1] = 0;
                                medliaItWorked.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    quests.medliaCompetitionControlQuest = "complete";
                                    if (quests.medliaCompetitionControlCompletionStyle == "friendly")
                                    {
                                        quests.completeQuests.push({name: "Medlia's Competition Control", description: "You persuaded Neculai to leave town by kindly suggesting that he trade in a larger town with more opportunity and customers."});
                                        player.vardanFaction += 1;
                                    }
                                    else
                                    {
                                        quests.completeQuests.push({name: "Medlia's Competition Control", description: "You persuaded Neculai to leave town by threatening him."});
                                    }
                                    player.freynorFaction += 1;
                                    worldItems.push([new Item("coins", X, Y), quests.medliaCompetitionControlReward]);
                                    player.experience += 65;
                                    quests.medliaNewWealth += 55;
                                    quests.bobithNewWealth += 17;
                                    change = "none";
                                    self.SC();
                                }
                            }
                            else if (uniqueChars.neculaiLDS == false)
                            {
                                playersTurnToSpeak = false;
                                medliaThatFar.play();
                                conversationID[1] = 0;
                                medliaThatFar.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    quests.medliaCompetitionControlCompletionStyle = "murder";
                                    quests.medliaCompetitionControlQuest = "complete";
                                    player.freynorFaction += 1;
                                    quests.completeQuests.push({name: "Medlia's Competition Control", description: "Rather than making Neculai leave town you decided to murder him."});
                                    worldItems.push([new Item("coins", X, Y), quests.medliaCompetitionControlReward]);
                                    player.experience += 65;
                                    quests.medliaNewWealth += 55;
                                    quests.bobithNewWealth += 17;
                                    change = "none";
                                    self.SC();
                                }
                            }
                            else if (quests.medliaCompetitionControlCompletionStyle == "violence")
                            {
                                playersTurnToSpeak = false;
                                medliaHurtHim.play();
                                conversationID[1] = 0;
                                medliaHurtHim.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    quests.medliaCompetitionControlQuest = "complete";
                                    player.freynorFaction += 1;
                                    quests.completeQuests.push({name: "Medlia's Competition Control", description: "You attacked Neculai leaving him no choice but to flee town."});
                                    worldItems.push([new Item("coins", X, Y), quests.medliaCompetitionControlReward]);
                                    player.experience += 65;
                                    quests.medliaNewWealth += 55;
                                    quests.bobithNewWealth += 17;
                                    change = "none";
                                    self.SC();
                                }
                            }
                        }
                    }

                    if (self.ID == "Neculai the Merchant" || conversationID[0] == "Neculai")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Neculai";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (player.raceName == "Vardan" && quests.theBalgurMercenariesQuest != "complete" || player.raceName == "Vardan" && quests.medliaCompetitionControlCompletionStyle == "friendly" && quests.medliaCompetitionControlQuest == "complete")
                                {
                                    player.dialogueOptions = [["What brings you so far from the homeland?", false, "a"], ["Good day.", false, "b"], ["How's business?", false, "c"]];
                                    if (quests.neculaiShopDeal == false)
                                    {
                                        player.dialogueOptions.push(["Do you have any special deals for a fellow homelander?", false, "d"]);
                                    }
                                    if (quests.medliaCompetitionControlQuest == true && quests.medliaCompetitionControlCompletionStyle == false)
                                    {
                                        player.dialogueOptions.push(["We need to talk...", false, "e"]);
                                    }
                                }
                                else if (player.raceName == "Vardan")
                                {
                                    player.dialogueOptions = [["What brings you so far from the homeland?", false, "a"], ["Good day.", false, "b"]];
                                    if (quests.neculaiShopDeal == false)
                                    {
                                        player.dialogueOptions.push(["Do you have any special deals for a fellow homelander?", false, "d"]);
                                    }
                                    if (quests.medliaCompetitionControlQuest == true && quests.medliaCompetitionControlCompletionStyle == false)
                                    {
                                        player.dialogueOptions.push(["We need to talk...", false, "e"]);
                                    }
                                }
                                else if (quests.theBalgurMercenariesQuest != "complete" || quests.medliaCompetitionControlCompletionStyle == "friendly" && quests.medliaCompetitionControlQuest == "complete")
                                {
                                    player.dialogueOptions = [["Good day.", false, "b"], ["How's business?", false, "c"]];
                                    if (quests.medliaCompetitionControlQuest == true && quests.medliaCompetitionControlCompletionStyle == false)
                                    {
                                        player.dialogueOptions.push(["We need to talk...", false, "e"]);
                                    }
                                }
                                else
                                {
                                    player.dialogueOptions = [["Good day.", false, "b"]];
                                    if (quests.medliaCompetitionControlQuest == true && quests.medliaCompetitionControlCompletionStyle == false)
                                    {
                                        player.dialogueOptions.push(["We need to talk...", false, "e"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            conversationID[1] = "0e";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            neculaiBountyHere.play();
                            neculaiBountyHere.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            neculaiEveryDay.play();
                            neculaiEveryDay.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            if (quests.medliaCompetitionControlCompletionStyle == "friendly" && quests.medliaCompetitionControlQuest == "complete")
                            {
                                neculaiMuchBetter.play();
                                neculaiMuchBetter.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                neculaiBiggerProblem.play();
                                neculaiBiggerProblem.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 2;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            if (player.getCharisma() > 5)
                            {
                                neculaiSpecialDeals.play();
                                neculaiSpecialDeals.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    quests.neculaiShopDeal = true;
                                    worldItems.push([new Item("frichPelt", X, Y), 6]);
                                    self.SC();
                                }
                            }
                            else
                            {
                                neculaiStirUp.play();
                                neculaiStirUp.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }

                        }
                        else if (conversationID[1] == "0e")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 1;
                            self.SC();
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                if (player.getCharisma() >= 10)
                                {
                                    player.dialogueOptions = [["[convince Neculai that he would make more money trading in a larger town]", false, "a"], ["You're not wanted here, pack up your shop and leave, before I make you leave.", false, "b"]];
                                }
                                else
                                {
                                    player.dialogueOptions = [["You're not wanted here, pack up your shop and leave, before I make you leave.", false, "b"]];
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            neculaiLots.play();
                            neculaiLots.onended = function()
                            {
                                playersTurnToSpeak = true;
                                quests.medliaCompetitionControlCompletionStyle = "friendly";
                                player.experience += 15;
                                player.vardanFaction += 1;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            if (player.getCharisma() > 4 && player.getStrength() > 9)
                            {
                                neculaiZes.play();
                                neculaiZes.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    quests.medliaCompetitionControlCompletionStyle = "intimidate";
                                    player.experience += 15;
                                    player.vardanFaction -= 1;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                neculaiDontThinkSo.play();
                                neculaiDontThinkSo.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.vardanFaction -= 1;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Is there anything that I can do?", false, "a"], ["Good luck with that... I don't care.", false, "b"], ["Can we talk about something else?", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            neculaiThenganMercs.play();
                            neculaiThenganMercs.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "2c")
                        {
                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["It's a deal.", false, "a"], ["I will do it for 40.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            conversationID[1] = "3a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            player.dialoguePosition = 0;
                            quests.theBalgurMercenariesReward = 30;
                            quests.theBalgurMercenariesQuest = true;
                            quests.activeQuests.push({name: "The Balgur Mercenaries", description: "Neculai hired you to get rid of a crew of mercenaries that have been harrassing him."});
                            change = "none";
                            conversationID[1] = 4;
                            self.SC();
                        }
                        else if (conversationID[1] == "3b")
                        {
                            if (player.getCharisma() > 10)
                            {
                                neculaiFine.play();
                                neculaiFine.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    quests.theBalgurMercenariesReward = 40;
                                    quests.theBalgurMercenariesQuest = true;
                                    quests.activeQuests.push({name: "The Balgur Mercenaries", description: "Neculai hired you to get rid of a crew of mercenaries that have been harrassing him."});
                                    change = "none";
                                    conversationID[1] = 4;
                                    self.SC();
                                }
                            }
                            else if (player.getCharisma() > 7)
                            {
                                neculaiRid.play();
                                neculaiRid.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    quests.theBalgurMercenariesReward = 35;
                                    quests.theBalgurMercenariesQuest = true;
                                    quests.activeQuests.push({name: "The Balgur Mercenaries", description: "Neculai hired you to get rid of a crew of mercenaries that have been harrassing him."});
                                    change = "none";
                                    conversationID[1] = 4;
                                    self.SC();
                                }
                            }
                            else
                            {
                                neculaiZertyOne.play();
                                neculaiZertyOne.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    quests.theBalgurMercenariesReward = 31;
                                    quests.theBalgurMercenariesQuest = true;
                                    quests.activeQuests.push({name: "The Balgur Mercenaries", description: "Neculai hired you to get rid of a crew of mercenaries that have been harrassing him."});
                                    change = "none";
                                    conversationID[1] = 4;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 4)
                        {
                            player.dialogueOptions = [];
                            if (quests.theBalgurMercenariesMercsKilled >= 8 && uniqueChars.kronheimeLDS == false || quests.theBalgurMercenariesCompletionStyle == "paidMercs" || quests.theBalgurMercenariesCompletionStyle == "threaten" || quests.theBalgurMercenariesCompletionStyle == "royalProtection")
                            {
                                playersTurnToSpeak = false;
                                neculaiZerGone.play();
                                conversationID[1] = 0;
                                neculaiZerGone.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    if (quests.theBalgurMercenariesMercsKilled >= 8 && uniqueChars.kronheimeLDS == false)
                                    {
                                        quests.theBalgurMercenariesCompletionStyle = "killedMercs";
                                        quests.completeQuests.push({name: "The Balgur Mercenaries", description: "You slayed the entire band of mercenaries that had been harrassing Neculai."});
                                        player.fame += 2;
                                    }
                                    else
                                    {
                                        if (quests.theBalgurMercenariesCompletionStyle == "paidMercs")
                                        {
                                            quests.completeQuests.push({name: "The Balgur Mercenaries", description: "The band of mercenaries left after you paid them the money that Neculai owed."});
                                        }
                                        else if (quests.theBalgurMercenariesCompletionStyle == "threaten")
                                        {
                                            quests.completeQuests.push({name: "The Balgur Mercenaries", description: "You threatened to kill the mercenaries, who saw that they were no match for you and left without any trouble."});
                                        }
                                        else
                                        {
                                            quests.completeQuests.push({name: "The Balgur Mercenaries", description: "Declaring your royal freydic patronage you decreed Neculai was under your kingdom's protection."});
                                        }
                                        player.fame += 1;
                                    }
                                    quests.theBalgurMercenariesQuest = "complete";
                                    worldItems.push([new Item("coins", X, Y), quests.theBalgurMercenariesReward]);
                                    player.experience += 350;
                                    self.SC();
                                }
                            }
                        }
                    }

                    if (self.ID == "Mercenary Captain Kronheime" || conversationID[0] == "Kronheim")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Kronheime";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (player.theBalgurMercenariesRank == "none")
                                {
                                    player.dialogueOptions.push(["Who are the balgur mercenaries exactly?", false, "a"]);
                                }
                                if (player.theBalgurMercenariesFaction > - 50 && player.theBalgurMercenariesRank == "none")
                                {
                                    player.dialogueOptions.push(["What would I have to do to join this mercenary group?", false, "b"]);
                                }
                                if (quests.theBalgurMercenariesQuest == true)
                                {
                                    player.dialogueOptions.push(["About Neculai...", false, "c"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            kronheimeHaventHeard.play();
                            kronheimeHaventHeard.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (player.getStrength() < 20 && player.fame < 65)
                            {
                                kronheimeLastADay.play();
                                kronheimeLastADay.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                kronheimeTalkTo.play();
                                kronheimeTalkTo.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            if (player.fame < 65 && player.getStrength() < 40 && player.getConstitution() < 35 && player.getStamina() < 35 && player.magicLevel < 99)
                            {
                                kronheimeTalkQuick.play();
                                kronheimeTalkQuick.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 2;
                                    self.SC();
                                }
                            }
                            else
                            {
                                kronheimeYourWith.play();
                                kronheimeYourWith.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 2;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Where is the commander?", false, "a"], ["Enough of this topic for now.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            kronheimeWheresTheBoss.play();
                            kronheimeWheresTheBoss.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Leave or face my wrath!", false, "a"], ["How much does he owe you?", false, "b"]];
                                if (player.raceName == "Freynor" && player.title == "Royalty")
                                {
                                    player.dialogueOptions.unshift(["As the heir to the crown of Freynor I hereby command you to take your group and leave, Neculai is under this kingdom's protection.", false, "c"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            if (player.fame >= 65 || player.getStrength() >= 40 && player.getConstitution() >= 35 && player.getStamina() >= 35 || player.magicLevel > 99)
                            {
                                kronheimeLeaving.play();
                                kronheimeLeaving.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    quests.theBalgurMercenariesCompletionStyle = "threaten";
                                    player.theBalgurMercenariesFaction -= 15;
                                    player.blindedTime = 2;
                                    player.blindedStoreTime = new Date().getTime();
                                    ArtificialIntelligenceAccess = [];
                                    player.dialogueOptions = [];
                                    change = "none";
                                    conversationID[1] = 0;
                                    lowBar = "information";
                                    self.SC();
                                }
                            }
                            else
                            {
                                if (player.gender == "Male")
                                {
                                    kronheimeKillHim.play();
                                    kronheimeKillHim.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                        self.disturbed = true;
                                    }
                                }
                                else if (player.gender == "Female")
                                {
                                    kronheimeKillHer.play();
                                    kronheimeKillHer.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                        self.disturbed = true;
                                    }
                                }
                                else
                                {
                                    kronheimeKillIt.play();
                                    kronheimeKillIt.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                        self.disturbed = true;
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            kronheimeNoLess.play();
                            kronheimeNoLess.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2c")
                        {
                            kronheimeThisSlight.play();
                            kronheimeThisSlight.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                quests.theBalgurMercenariesCompletionStyle = "royalProtection";
                                player.theBalgurMercenariesFaction -= 3;
                                player.blindedTime = 2;
                                player.blindedStoreTime = new Date().getTime();
                                ArtificialIntelligenceAccess = [];
                                player.dialogueOptions = [];
                                change = "none";
                                conversationID[1] = 0;
                                lowBar = "information";
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Why have haven't you collected your money from him then?", false, "a"], ["I will pay Neculai's debt.", false, "b"], ["[go back to last set of options]", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            conversationID[1] = "3c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            kronheimeThatVardanian.play();
                            kronheimeThatVardanian.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 4;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "3b")
                        {
                            var hasEnoughToPay = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 200)
                                {
                                    hasEnoughToPay = i;
                                }
                            }

                            if (hasEnoughToPay == -1)
                            {
                                kronheimeDontHaveEnough.play();
                                kronheimeDontHaveEnough.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 3;
                                    self.SC();
                                }
                            }
                            else
                            {
                                if (Inventory[hasEnoughToPay][1] > 200)
                                {
                                    Inventory[hasEnoughToPay][1] -= 200;
                                }
                                else
                                {
                                    Inventory.splice(hasEnoughToPay, 1);
                                }

                                kronheimeSimple.play();
                                conversationID[1] = 0;
                                kronheimeSimple.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    quests.theBalgurMercenariesCompletionStyle = "paidMercs";
                                    player.theBalgurMercenariesFaction += 5;
                                    player.blindedTime = 2;
                                    player.blindedStoreTime = new Date().getTime();
                                    ArtificialIntelligenceAccess = [];
                                    player.dialogueOptions = [];
                                    change = "none";
                                    lowBar = "information";
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "3c")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 2;
                            self.SC();
                        }
                        else if (conversationID[1] == 4)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I could try to convince him to pay.", false, "a"], ["[go back to last set of options]", false, "b"]];
                                if (player.raceName == "Freynor" && player.title == "Royalty")
                                {
                                    if (uniqueChars.neculaiLDS == true)
                                    {
                                        player.dialogueOptions.unshift(["As heir to the crown of Freynor, I will have him executed and brought to you along with his possessions.", false, "d"]);
                                        player.dialogueOptions.unshift(["As heir to the crown of Freynor I grant you permission to take what you are owed, but leave him alive and unharmed.", false, "c"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "4b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "4a")
                        {
                            kronheimeEarAsProof.play();
                            kronheimeEarAsProof.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 5;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "4b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 3;
                            self.SC();
                        }
                        else if (conversationID[1] == "4c")
                        {
                            kronheimeDidntRealize.play();
                            kronheimeDidntRealize.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                quests.theBalgurMercenariesCompletionStyle = "bankruptedNeculai";
                                player.theBalgurMercenariesFaction += 10;
                                player.blindedTime = 2;
                                player.blindedStoreTime = new Date().getTime();
                                quests.bankruptNeculai = true;
                                quests.theBalgurMercenariesQuest = "complete";
                                quests.completeQuests.push({name: "The Balgur Mercenaries", description: "As the heir to The Kingdom of Freynor you allowed the mercenaries to take what they were owed from Neculai so long as they left him unharmed."});
                                player.experience += 350;
                                player.fame += 1;
                                ArtificialIntelligenceAccess = [];
                                player.dialogueOptions = [];
                                change = "none";
                                conversationID[1] = 0;
                                lowBar = "information";
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "4d")
                        {
                            kronheimeDidntRealize.play();
                            kronheimeDidntRealize.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                quests.theBalgurMercenariesCompletionStyle = "executedNeculai";
                                player.theBalgurMercenariesFaction += 15;
                                player.blindedTime = 2;
                                player.blindedStoreTime = new Date().getTime();
                                uniqueChars.neculaiLDS = false;
                                quests.theBalgurMercenariesQuest = "complete";
                                quests.completeQuests.push({name: "The Balgur Mercenaries", description: "With the power vested in you as the heir to The Kingdom of Freynor you ordered Neculai to be Executed and brought to the mercenaries along with all of his possessions."});
                                player.experience += 350;
                                player.fame += 1;
                                ArtificialIntelligenceAccess = [];
                                player.dialogueOptions = [];
                                change = "none";
                                conversationID[1] = 0;
                                lowBar = "information";
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 5)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I'll do it.", false, "a"], ["What will I get in exchange for this? ", false, "b"], ["I'm not killing anyone for you.", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "5a")
                        {
                            kronheimeGood.play();
                            kronheimeGood.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 7;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "5b")
                        {
                            kronheimeNecklace.play();
                            kronheimeNecklace.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 6;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "5c")
                        {
                            kronheimeGetAway.play();
                            kronheimeGetAway.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 4;
                                player.theBalgurMercenariesFaction -= 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 6)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I'll do it.", false, "a"], ["I'll have to think about this. ", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "6a")
                        {
                            kronheimeGood.play();
                            kronheimeGood.onended = function()
                            {
                                quests.theBalgurMercenariesNecklace = true;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 7;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "6b")
                        {
                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 4;
                            self.SC();
                        }
                        else if (conversationID[1] == 7)
                        {
                            player.dialogueOptions = [];

                            var hasPlayerDoneTheStuff = false;
                            if (uniqueChars.neculaiLDS == false && quests.theBalgurMercenariesQuest == true)
                            {
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "neculaisEar")
                                    {
                                        hasPlayerDoneTheStuff = true;
                                        Inventory.splice(i, 1);
                                        break;
                                    }
                                }

                                if (hasPlayerDoneTheStuff)
                                {
                                    kronheimeAnotherEar.play();
                                    conversationID[1] = 0;
                                    kronheimeAnotherEar.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        quests.theBalgurMercenariesCompletionStyle = "murderedNeculai";
                                        player.theBalgurMercenariesFaction += 15;
                                        player.blindedTime = 2;
                                        player.blindedStoreTime = new Date().getTime();
                                        quests.theBalgurMercenariesQuest = "complete";
                                        quests.completeQuests.push({name: "The Balgur Mercenaries", description: "You turned the tables on Neculai, instead of getting rid of the mercenaries, you took up the mercenaries' offer to kill Neculai."});
                                        player.experience += 350;
                                        player.fame += 1;
                                        ArtificialIntelligenceAccess = [];
                                        change = "none";
                                        if (quests.theBalgurMercenariesNecklace == true)
                                        {
                                            Inventory.unshift([new Item("berulnToothNecklace", X, Y), 1]);
                                        }
                                        player.dialoguePosition = 0;
                                        lowBar = "information";
                                        self.SC();
                                    }
                                }
                            }
                        }
                    }

                    if (self.ID == "Tor Commissioner Stendor" || conversationID[0] == "Stendor")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Stendor";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good Day.", false, "a"], ["Is there anything I can do to improve my relations with the kingdom of Freynor.", false, "b"], ["Can I see the active bounties for this town?", false, "c"], ["Goodbye.", false, "d"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            stendorGoodDay.play();
                            stendorGoodDay.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (player.title == "Royalty" && player.raceName == "Freynor" || player.title == "Nobility" && player.raceName == "Freynor")
                            {
                                stendorYourPeople.play();
                                stendorYourPeople.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                stendorHelpingPeople.play();
                                stendorHelpingPeople.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            stendorHereTheyAre.play();
                            stendorHereTheyAre.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            if (player.title == "Royalty" || player.title == "Nobility")
                            {
                                if (player.gender == "Male")
                                {
                                    stendorHealth.play();
                                    stendorHealth.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    stendorFairThee.play();
                                    stendorFairThee.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                            }
                            else if (player.title == "Highfolk")
                            {
                                stendorBeWell.play();
                                stendorBeWell.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                stendorTrouble.play();
                                stendorTrouble.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            lowBar = "information";
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (quests.theMasterThiefOfTeshirQuest == false)
                                {
                                    player.dialogueOptions.push(["{ Wanted: Master Thief ; 65 coins }", false, "a"]);
                                }
                                if (quests.bountyHetmerQuest == false && uniqueChars.hetmerLDS == true)
                                {
                                    player.dialogueOptions.push(["{ Wanted: Bandit Chief Hetmer ; 38 coins }", false, "b"]);
                                }
                                if (quests.bountyTeberQuest == false && uniqueChars.teberLDS == true)
                                {
                                    player.dialogueOptions.push(["{ Wanted: Teber the Deserter ; 25 coins }", false, "c"]);
                                }
                                if (player.dialogueOptions.length < 1)
                                {
                                    player.dialogueOptions.push(["(No Active Bounties: return to previous dialogue selection)", false, "d"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            stendorItemsGo.play();
                            stendorItemsGo.onended = function()
                            {
                                quests.theMasterThiefOfTeshirQuest = true;
                                quests.activeQuests.push({name: "The Master Thief of Teshir", description: "You took a bounty to aprehend or kill the skilled thief that has been stealing goods in the city of Teshir."});
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            stendorHetmerTough.play();
                            stendorHetmerTough.onended = function()
                            {
                                quests.bountyHetmerQuest = true;
                                quests.activeQuests.push({name: "Bounty: Hetmer the Bandit Chieftain", description: "Kill Hetmer the Bandit Chieftain and then return to Commissioner Stendor for payment."});
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 4;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            stendorPoorWretch.play();
                            stendorPoorWretch.onended = function()
                            {
                                quests.bountyTeberQuest = true;
                                quests.activeQuests.push({name: "Bounty: Teber the Deserter", description: "Kill Teber, a soldier who deserted the freydic jarl Tor's army."});
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 5;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1d")
                        {
                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (quests.theMasterThiefOfTeshirNeevKnown == true)
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 3;
                                    self.SC();
                                }
                                else
                                {
                                    player.dialogueOptions.push(["Where should I start looking?", false, "a"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            stendorTryAsking.play();
                            stendorTryAsking.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (quests.theMasterThiefOfTeshirQuest == true && quests.theMasterThiefOfTeshirNeevKnown == true && quests.theMasterThiefOfTeshirNeevSlain == true)
                                {
                                    player.dialogueOptions.push(["It turns out the thief was a Neev, I've slain it for all to see.", false, "a"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            if (quests.theMasterThiefOfTeshirQuest == true && quests.theMasterThiefOfTeshirNeevKnown == true && quests.theMasterThiefOfTeshirNeevSlain == true)
                            {
                                stendorNeevsAreReal.play();
                                stendorNeevsAreReal.onended = function()
                                {
                                    quests.theMasterThiefOfTeshirQuest = "complete";
                                    quests.completeQuests.push({name: "The Master Thief of Teshir", description: "You killed the thief, which turned out to be a magical creature commonly known as a beer fairy."});
                                    worldItems.push([new Item("coins", X, Y), 65]);
                                    player.freynorFaction += 25;
                                    player.fame += 1;
                                    if (player.class == "Mage")
                                    {
                                        player.magicalExperience += 75;
                                    }
                                    else
                                    {
                                        player.experience += 75;
                                    }
                                    player.magicalExperience += 25;
                                    player.experience += 25;
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 4)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (uniqueChars.hetmerLDS == false)
                                {
                                    player.dialogueOptions.push(["The bandit Hetmer has been brought to justice.", false, "a"]);
                                }
                                else
                                {
                                    player.dialogueOptions.push(["Where might I find him?", false, "b"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "4b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "4a")
                        {
                            if (quests.bountyHetmerQuest == true)
                            {
                                stendorExcellent.play();
                                stendorExcellent.onended = function()
                                {
                                    quests.bountyHetmerQuest = "complete";
                                    quests.completeQuests.push({name: "Bounty: Hetmer the Bandit Chieftain", description: "You killed the bandit chieftan Hetmer and collected your payment."});
                                    worldItems.push([new Item("coins", X, Y), 38]);
                                    player.freynorFaction += 5;
                                    player.fame += 1;
                                    player.experience += 75;
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "4b")
                        {
                            stendorAlwaysComeBack.play();
                            stendorAlwaysComeBack.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 4;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 5)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [];
                                if (quests.bountyTeberQuest == "complete")
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                                else if (uniqueChars.teberLDS == false)
                                {
                                    player.dialogueOptions.push(["Teber has been dealt with.", false, "a"]);
                                }
                                else
                                {
                                    player.dialogueOptions.push(["Do you know where he is?", false, "b"]);
                                    if (player.title == "Royalty" && player.raceName == "Freynor")
                                    {
                                        player.dialogueOptions.push(["As the heir to the kingdom of Freynor I hereby clear all charges against this soldier.", false, "c"]);
                                    }
                                    else if (player.title == "Nobility" && player.raceName == "Freynor")
                                    {
                                        player.dialogueOptions.push(["As the heir to the house of Tor I declare Teber cleared of all charges against him.", false, "d"]);
                                    }
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "5a")
                        {
                            if (quests.bountyTeberQuest == true)
                            {
                                stendorPoorSoul.play();
                                stendorPoorSoul.onended = function()
                                {
                                    quests.bountyTeberQuest = "complete";
                                    quests.bountyTeberCompletionStyle = "killed teber";
                                    quests.completeQuests.push({name: "Bounty: Teber the Deserter", description: "You tracked down and killed the soldier that had deserted Jarl Tor's army then collected payment."});
                                    worldItems.push([new Item("coins", X, Y), 25]);
                                    player.freynorFaction += 2;
                                    player.fame += 1;
                                    player.experience += 55;
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "5b")
                        {
                            stendorFarSouth.play();
                            stendorFarSouth.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 5;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "5c")
                        {
                            if (quests.bountyTeberQuest == true)
                            {
                                stendorHighness.play();
                                stendorHighness.onended = function()
                                {
                                    quests.bountyTeberQuest = "complete";
                                    quests.bountyTeberCompletionStyle = "royal pardon";
                                    quests.completeQuests.push({name: "Bounty: Teber the Deserter", description: "As the heir to the kingdom of Freynor, you pardoned Teber's desertion."});
                                    player.experience += 25;
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "5d")
                        {
                            if (quests.bountyTeberQuest == true)
                            {
                                if (player.gender == "Female")
                                {
                                    stendorWishLady.play();
                                    stendorWishLady.onended = function()
                                    {
                                        quests.bountyTeberQuest = "complete";
                                        quests.bountyTeberCompletionStyle = "royal pardon";
                                        quests.completeQuests.push({name: "Bounty: Teber the Deserter", description: "As the heir to the house of Tor, the very house whose army Teber deserted from, You pardoned Teber's Desertion."});
                                        player.experience += 25;
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    stendorWishLord.play();
                                    stendorWishLord.onended = function()
                                    {
                                        quests.bountyTeberQuest = "complete";
                                        quests.bountyTeberCompletionStyle = "royal pardon";
                                        quests.completeQuests.push({name: "Bounty: Teber the Deserter", description: "As the heir to the house of Tor, the very house whose army Teber deserted from, You pardoned Teber's Desertion."});
                                        player.experience += 25;
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                            }
                        }
                    }

                    if (self.ID == "Kedwin" && conversationID[0] != "Hilmund" || conversationID[0] == "Kedwin")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Kedwin";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["How goes the day?", false, "a"]];
                                if (quests.theMasterThiefOfTeshirQuest == true && quests.theMasterThiefOfTeshirNeevKnown == false)
                                {
                                    player.dialogueOptions.push(["Have you heard any rumors that would help me find the thief that is on the loose?", false, "b"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            kedwinBetter.play();
                            kedwinBetter.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            kedwinRumors.play();
                            kedwinRumors.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["[give harst ale]", false, "a"], ["[threaten him into telling you]", false, "b"], ["Actually let's not discuss rumors.", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            var gaveAleToKed = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "harstAle")
                                {
                                    gaveAleToKed = i;
                                }
                            }

                            if (gaveAleToKed != -1)
                            {
                                quests.theMasterThiefOfTeshirNeevKnown = true;
                                if (quests.theMasterThiefOfTeshirNeevSlain == false)
                                {
                                    kedwinGobblin.play();
                                    kedwinGobblin.onended = function()
                                    {
                                        if (Inventory[gaveAleToKed][1] > 1)
                                        {
                                            Inventory[gaveAleToKed][1] -= 1;
                                        }
                                        else
                                        {
                                            Inventory.splice(gaveAleToKed, 1);
                                        }

                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 2;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    kedwinSomeone.play();
                                    kedwinSomeone.onended = function()
                                    {
                                        if (Inventory[gaveAleToKed][1] > 1)
                                        {
                                            Inventory[gaveAleToKed][1] -= 1;
                                        }
                                        else
                                        {
                                            Inventory.splice(gaveAleToKed, 1);
                                        }

                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 3;
                                        self.SC();
                                    }
                                }
                            }
                            else
                            {

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            if (player.getCharisma() >= 15)
                            {
                                quests.theMasterThiefOfTeshirNeevKnown = true;
                                if (quests.theMasterThiefOfTeshirNeevSlain == false)
                                {
                                    kedwinGobblin.play();
                                    kedwinGobblin.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 2;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    kedwinSomeone.play();
                                    kedwinSomeone.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 3;
                                        self.SC();
                                    }
                                }
                            }
                            else
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                                self.disturbedTime = new Date().getTime();
                            }
                        }
                        else if (conversationID[1] == "1c")
                        {
                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["What is a Beer Fairy?", false, "a"]];
                                if (player.getIntelligence() > 11)
                                {
                                    player.dialogueOptions.unshift(["Beer fairies are just fairytales, they don't actually exist. Now tell me something useful.", false, "b"]);
                                }
                                if (player.getIntelligence() > 19)
                                {
                                    player.dialogueOptions.push(["Sounds like a Neev to me...", false, "c"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            kedwinNeverHeard.play();
                            kedwinNeverHeard.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            kedwinEitherWay.play();
                            kedwinEitherWay.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2c")
                        {
                            kedwinCause.play();
                            kedwinCause.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["That's bogus!", false, "a"], ["Thanks for the help.", false, "b"], ["This is what I get for asking a drunk to help me with a serious problem...", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a" || conversationID[1] == "3c")
                        {
                            kedwinYourLoss.play();
                            kedwinYourLoss.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "3b")
                        {
                            kedwinNothing.play();
                            kedwinNothing.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                    }

                    if (self.ID == "Teber the Deserter" || self.ID == "Teber the Artisan" || conversationID[0] == "Teber")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Teber";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Good Day.", false, "a"], ["What skills do you know?", false, "b"]];
                                if (player.raceName == "Kel")
                                {
                                    player.dialogueOptions.push(["What brings you to our tribe?", false, "c"]);
                                }
                                else
                                {
                                    player.dialogueOptions.push(["What brings you so far from your land?", false, "c"]);
                                }
                                if (quests.bountyTeberCompletionStyle != "doublecross")
                                {
                                    player.dialogueOptions.push(["[trade 5 mofu feathers and 52 coins for a mofu feather necklace]", false, "d"]);
                                }
                                if (quests.bountyTeberCompletionStyle == false && quests.bountyTeberQuest == true)
                                {
                                    player.dialogueOptions.push(["I'm here to kill you deserter... any last words?", false, "e"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            teberShanToor.play();
                            teberShanToor.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            teberSkills.play();
                            teberSkills.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            if (player.getCharisma() >= 10)
                            {
                                teberArtCareer.play();
                                teberArtCareer.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                teberLastJob.play();
                                teberLastJob.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            teberQueBellas.play();
                            teberQueBellas.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();

                                var featherHitz = -1;
                                var coinHitz = -1;
                                var giveNecklace = false;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 52)
                                    {
                                        coinHitz = i;
                                    }
                                    if (Inventory[i][0].type == "mofuFeather" && Inventory[i][1] >= 5)
                                    {
                                        featherHitz = i;
                                    }
                                }

                                if (featherHitz > -1 && coinHitz > -1)
                                {
                                    if (coinHitz > featherHitz)
                                    {
                                        if (Inventory[coinHitz][1] == 52)
                                        {
                                            Inventory.splice(coinHitz, 1);
                                        }
                                        else
                                        {
                                            Inventory[coinHitz][1] -= 52
                                        }

                                        if (Inventory[featherHitz][1] == 5)
                                        {
                                            Inventory.splice(featherHitz, 1);
                                        }
                                        else
                                        {
                                            Inventory[featherHitz][1] -= 5;
                                        }
                                        giveNecklace = true;
                                    }
                                    else
                                    {
                                        if (Inventory[featherHitz][1] == 5)
                                        {
                                            Inventory.splice(featherHitz, 1);
                                        }
                                        else
                                        {
                                            Inventory[featherHitz][1] -= 5;
                                        }

                                        if (Inventory[coinHitz][1] == 52)
                                        {
                                            Inventory.splice(coinHitz, 1);
                                        }
                                        else
                                        {
                                            Inventory[coinHitz][1] -= 52
                                        }
                                        giveNecklace = true;
                                    }
                                    if (giveNecklace)
                                    {
                                        Inventory.push([new Item("mofuFive", false, false), 1]);
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            if (player.level >= 8 || player.magicLevel >= 6)
                            {
                                teberPleaseDont.play();
                                teberPleaseDont.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 1;
                                    self.SC();
                                }
                            }
                            else
                            {
                                teberDontWant.play();
                                teberDontWant.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["If you pay me double your bounty I will let you live. (LIE)", false, "a"], ["If you pay me double your bounty I will let you live. (TRUTH)", false, "d"], ["Enough groveling deserter... Stand and fight me with whatever last scraps of honor you still have.", false, "b"], ["Okay... I won't kill you... but that doesn't mean somebody else won't, you're a wanted man.", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            teberAnyways.play();
                            teberAnyways.onended = function()
                            {
                                quests.bountyTeberCompletionStyle = "doublecross";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            self.disturbedTime = new Date().getTime();
                        }
                        else if (conversationID[1] == "1c")
                        {
                            quests.bountyTeberCompletionStyle = "spare";
                            quests.bountyTeberQuest = "complete";
                            quests.completeQuests.push({name: "Bounty: Teber the Deserter", description: "After hearing Teber's side of the story you decided to let him live."});
                            player.kelFaction += 3;
                            player.freynorFaction -= 5;
                            player.experience += 45;
                            playersTurnToSpeak = true;
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "1d")
                        {
                            teberAnyways.play();
                            teberAnyways.onended = function()
                            {
                                quests.bountyTeberCompletionStyle = "doublespare";
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 2;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I could kill you and take your money now if you would like...", false, "a"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            teberOkay.play();
                            teberOkay.onended = function()
                            {
                                if (quests.bountyTeberCompletionStyle == "doublespare")
                                {
                                    quests.bountyTeberQuest = "complete";
                                    quests.completeQuests.push({name: "Bounty: Teber the Deserter", description: "You spared Teber in exchange for double the price of his bounty."});
                                    player.freynorFaction -= 5;
                                    worldItems.push([new Item("coins", X, Y), 50]);
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                                else
                                {
                                    worldItems.push([new Item("coins", X, Y), 50]);
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                    }

                    if (self.ID == "Hilmund the Innkeeper" && conversationID[0] != "Kedwin" || conversationID[0] == "Hilmund")
                    {
                        lowBar = "dialogue";
                        conversationID[0] = "Hilmund";

                        if (clickReleased)
                        {
                            self.RC();
                        }

                        //CONVERSATION
                        if (conversationID[1] == 0)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["I could really use a drink.", false, "a"]];
                                var hits = 1;
                                for (var i = 0; i < player.romance.length; i++)
                                {
                                    if (player.romance[i] == "hilmund")
                                    {
                                        player.dialogueOptions.push(["I'm going to sleep here with you tonight.", false, "b"]);
                                        player.dialogueOptions.push(["I'm glad we're together.", false, "c"]);
                                        hits = 0;
                                        break;
                                    }
                                }
                                if (hits)
                                {
                                    player.dialogueOptions.push(["I'm looking for a place to spend the night.", false, "d"]);
                                    player.dialogueOptions.push(["Do you get many customers around here?", false, "e"]);
                                    if (player.freynorFaction >= 20 && player.inebriation >= 60 && player.charisma >= 4 || player.gender != "Female" && player.freynorFaction >= 20 && player.inebriation >= 70 || player.title == "Royalty" && player.freynorFaction >= 20 && player.inebriation >= 70 || player.title == "Nobility" && player.freynorFaction >= 20 && player.inebriation >= 70)
                                    {
                                        player.dialogueOptions.push(["Hey there handsome.", false, "f"]);
                                    }
                                }
                                if (quests.theBrokenWellQuest == false)
                                {
                                    player.dialogueOptions.push(["Do you know anything about that broken well right outside the inn?", false, "g"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0d";
                                        }
                                        else if (player.dialogueOptions[i][2] == "e")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0e";
                                        }
                                        else if (player.dialogueOptions[i][2] == "f")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0f";
                                        }
                                        else if (player.dialogueOptions[i][2] == "g")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "0g";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            var rmnc = 0;
                            for (var i = 0; i < player.romance.length; i++)
                            {
                                if (player.romance[i] == "hilmund")
                                {
                                    rmnc = 1;
                                }
                            }

                            var ttlc = 0;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins")
                                {
                                    ttlc += Inventory[i][1];
                                }
                                else if (Inventory[i][0].type == "bucketOfWater")
                                {
                                    ttlc += 20;
                                }
                            }
                            for (var i = 0; i < bankAccount.length; i++)
                            {
                                if (bankAccount[i][0].type == "coins")
                                {
                                    ttlc += bankAccount[i][1];
                                }
                                else if (bankAccount[i][0].type == "bucketOfWater")
                                {
                                    ttlc += 20;
                                }
                            }
                            for (var i = 0; i < worldItems.length; i++)
                            {
                                if (worldItems[i][0].type == "coins" && worldItems[i][0].X < X + 1100 && worldItems[i][0].X > X - 1100 && worldItems[i][0].Y < Y + 1100 && worldItems[i][0].Y > Y - 1100)
                                {
                                    ttlc += worldItems[i][1];
                                }
                                else if (worldItems[i][0].type == "bucketOfWater" && worldItems[i][0].X < X + 1100 && worldItems[i][0].X > X - 1100 && worldItems[i][0].Y < Y + 1100 && worldItems[i][0].Y > Y - 1100)
                                {
                                    ttlc += 20;
                                }
                            }
                            if (player.thirst <= 3 && ttlc < 2)
                            {
                                hilmundTakeThis.play();
                                hilmundTakeThis.onended = function()
                                {
                                    worldItems.push([new Item("bucketOfWater", X, Y), 1]);
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else if (rmnc)
                            {
                                var hits = 0;
                                hilmundThisOne.play();
                                hilmundThisOne.onended = function()
                                {
                                    for (var i = 0; i < Inventory.length; i++)
                                    {
                                        if (Inventory[i][0].type == "harstAle")
                                        {
                                            Inventory[i][1] += 1;
                                            hits = 1;
                                            break;
                                        }
                                    }
                                    if (!hits)
                                    {
                                        Inventory.push([new Item("harstAle", false, false), 1]);
                                    }
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                hilmundBuy.play();
                                hilmundBuy.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }

                        }
                        else if (conversationID[1] == "0b")
                        {
                            hilmundLookingForward.play();
                            hilmundLookingForward.onended = function()
                            {
                                if (!quests.hilmundChild)
                                {
                                    sleeperTime += 60 * 60 * 24 * 365 * 6.75;
                                    player.experience = 0;
                                    player.magicalExperience = 0;
                                    player.health = player.healthMAX;
                                    player.energy = player.energyMAX;
                                    player.will = player.willMAX;
                                    player.hunger = player.hungerMAX;
                                    player.thirst = player.thirstMAX;
                                }
                                sleep();
                                if (!quests.hilmundChild)
                                {
                                    quests.hilmundChild = true;
                                    quests.hilmundChildName = prompt("You may not have expected it, but shortly after sleeping with Hilmund you knew that you were carrying his baby. You and him worked out arrangements whilst you were pregnant for you to settle down; then finally, after nine long months of nausea and strange cravings the time came to bring your child into the world. What was the name that you and Hilmund decided upon for your baby boy?", "Boki");
                                    alert("You stayed with " + quests.hilmundChildName + " to care for him, making sure he was raised as you saw fit. He grew fast and before you knew it he had turned six years old.")
                                    change = "makemy6yearoldherealready!";
                                }
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            hilmundLove.play();
                            hilmundLove.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            hilmundForRoom.play();
                            hilmundForRoom.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 1;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0e")
                        {
                            hilmundThatIDo.play();
                            hilmundThatIDo.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0f")
                        {
                            if (player.title != "Nobility" && player.title != "Royalty" && player.gender == "Female")
                            {
                                hilmundLaugh.play();
                                hilmundLaugh.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 2;
                                    self.SC();
                                }
                            }
                            else if (player.gender == "Female" && player.title == "Royalty" || player.gender == "Female" && player.title == "Nobility")
                            {
                                hilmundFlattering.play();
                                hilmundFlattering.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else if (player.gender != "Female")
                            {
                                hilmundWoman.play();
                                hilmundWoman.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                        }
                        else if (conversationID[1] == "0g")
                        {
                            hilmundStorm.play();
                            hilmundStorm.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 5;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == 1)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Here you are then. (give 12 coins)", false, "a"], ["Nevermind.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "1a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "1b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "1a")
                        {
                            var room = -1;
                            for (var i = 0; i < Inventory.length; i++)
                            {
                                if (Inventory[i][0].type == "coins" && Inventory[i][1] >= 12)
                                {
                                    room = i;
                                }
                            }
                            if (room < 0)
                            {
                                hilmundNoMoney.play();
                                hilmundNoMoney.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                Inventory[room][1] -= 12;
                                if (Inventory[room][1] < 1)
                                {
                                    Inventory.splice(room, 1);
                                }

                                sleep();

                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "1b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 2)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["You aren't by chance seeing anyone are you?", false, "a"], ["Sorry, I've had a bit to drink.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "2a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "2b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "2a")
                        {
                            hilmundCoupleUp.play();
                            hilmundCoupleUp.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 3;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "2b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 3)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Just like that?", false, "a"], ["Honey, I'm all yours!", false, "b"], ["No, sorry I've had a bit too much to drink.", false, "c"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "3b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            conversationID[1] = "3c";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "3a")
                        {
                            hilmundFineEnough.play();
                            hilmundFineEnough.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 4;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "3b")
                        {
                            hilmundGoodTime.play();
                            hilmundGoodTime.onended = function()
                            {
                                sleep();
                                player.romance.push("hilmund");
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "3c")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 4)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Sure!", false, "a"], ["I'm not ready to make a decision like this yet...", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            conversationID[1] = "4a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "4b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "4a")
                        {
                            player.romance.push("hilmund");
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == "4b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 5)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Is there anyway I can help?", false, "a"], ["That's all I wanted to know.", false, "b"]];
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "5a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            conversationID[1] = "5b";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "5a")
                        {
                            hilmundFind.play();
                            hilmundFind.onended = function()
                            {
                                quests.theBrokenWellQuest = true;
                                playersTurnToSpeak = true;
                                quests.activeQuests.push({name: "The Broken Well", description: "You offered to help Hilmund find the parts to fix the town well."});
                                player.dialoguePosition = 0;
                                conversationID[1] = 6;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "5b")
                        {
                            player.dialoguePosition = 0;
                            conversationID[1] = 0;
                            self.SC();
                        }
                        else if (conversationID[1] == 6)
                        {
                            if (player.dialogueChoiceMade == false)
                            {
                                player.dialogueOptions = [["Where should I look for the parts?", false, "c"]];
                                if (quests.theBrokenWellDetailsTold == false)
                                {
                                    player.dialogueOptions.unshift(["What pieces do I need to find?", false, "a"]);
                                }
                                else
                                {
                                    player.dialogueOptions.unshift(["What pieces do I need to find?", false, "b"]);
                                }
                                var wlCord = false;
                                var wlWinch = false;
                                var wlStone = false;
                                var wlAxle = false;
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "wellCord")
                                    {
                                        wlCord = true;
                                    }
                                    else if (Inventory[i][0].type == "wellWinch")
                                    {
                                        wlWinch = true;
                                    }
                                    else if (Inventory[i][0].type == "wellStone")
                                    {
                                        wlStone = true;
                                    }
                                    else if (Inventory[i][0].type == "wellAxle")
                                    {
                                        wlAxle = true;
                                    }
                                }
                                if (wlCord && wlWinch && wlStone && wlAxle)
                                {
                                    player.dialogueOptions.unshift(["I have all of the parts for you to fix the well with.", false, "d"]);
                                }
                            }
                            else if (player.dialogueChoiceMade == true)
                            {
                                player.dialogueChoiceMade = false;
                                for (var i = 0; i < player.dialogueOptions.length; i++)
                                {
                                    if (player.dialogueOptions[i][1] == true)
                                    {
                                        if (player.dialogueOptions[i][2] == "a")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6a";
                                        }
                                        else if (player.dialogueOptions[i][2] == "b")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6b";
                                        }
                                        else if (player.dialogueOptions[i][2] == "c")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6c";
                                        }
                                        else if (player.dialogueOptions[i][2] == "d")
                                        {
                                            playersTurnToSpeak = false;
                                            conversationID[1] = "6d";
                                        }
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "6a")
                        {
                            hilmundNeed.play();
                            hilmundNeed.onended = function()
                            {
                                playersTurnToSpeak = true;
                                quests.theBrokenWellDetailsTold = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 6;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "6b")
                        {
                            hilmundAlreadyTold.play();
                            hilmundAlreadyTold.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 6;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "6c")
                        {
                            hilmundNoIdea.play();
                            hilmundNoIdea.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 6;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "6d")
                        {
                            hilmundGreat.play();
                            hilmundGreat.onended = function()
                            {
                                var toDelete = [];
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "wellCord")
                                    {
                                        toDelete.unshift(i);
                                    }
                                    else if (Inventory[i][0].type == "wellWinch")
                                    {
                                        toDelete.unshift(i);
                                    }
                                    else if (Inventory[i][0].type == "wellStone")
                                    {
                                        toDelete.unshift(i);
                                    }
                                    else if (Inventory[i][0].type == "wellAxle")
                                    {
                                        toDelete.unshift(i);
                                    }
                                }

                                for (var i = 0; i < toDelete.length; i++)
                                {
                                    Inventory.splice(toDelete[i], 1);
                                }
                                quests.theBrokenWellFixed = true;
                                quests.theBrokenWellQuest = "complete";
                                quests.completeQuests.push({name: "The Broken Well", description: "You found the parts to fix the well near a frich infested farm house; You gave them to Hilmund who fixed the well."});
                                worldItems.push([new Item("coins", X, Y), 30]);
                                quests.hilmundNewWealth += 63;
                                quests.medliaNewWealth += 9;
                                player.freynorFaction += 15;
                                player.fame += 1;
                                player.experience += 125;
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                                change = "none";
                            }
                        }
                    }
                }
                else if (dialogueActive && self.engagedInDialogue == true)
                {
                    dialogueReset(self);
                }

                //ACCESS SHOPS BANKS AND OTHER AI SERVICES
                if (dtm < self.sizeRadius)
                {
                    if (self.hostile == true)
                    {
                        if (self.team == "player")
                        {
                            XXX.fillStyle = "gold";
                        }
                        else
                        {
                            XXX.fillStyle = "red";
                        }
                    }
                    else
                    {
                        XXX.fillStyle = "gold";
                    }
                    XXX.textAlign = "center";
                    XXX.font = "bold 15px Book Antiqua";
                    XXX.fillText(self.ID, X - self.X + 1 / 2 * CCC.width, Y - self.Y - 16 + 1 / 2 * CCC.height);

                    //click-based interaction
                    if (self.ultra.faction != "outlander" && self.ultra.faction != "hostile")
                    {
                        var parsedFactionRelation = eval("player." + self.ultra.faction.toLowerCase() + "Faction");
                    }
                    else
                    {
                        var parsedFactionRelation = 0;
                    }

                    if (dClick == true && self.ultra.merchant == true && dtp < 100 && self.disturbed == false && parsedFactionRelation >= -25 || dClick == true && self.ultra.storage == true) //merchant by click
                    {
                        if (self.ultra.storage == true)
                        {
                            player.storage = true;
                            player.storageCap = self.ultra.storageCap;
                        }
                        else
                        {
                            player.storage = false;
                            player.storageCap = 0;
                        }
                        shopInventory = self.ultra.merchandise;
                        shopID = self.ID;
                        console.log(self.ID);
                        shopkeeper = self;
                        console.log(self);
                        player.merchPosition = 0;
                        merchScroll = 0;
                        lowBar = "shop";
                        gameState = "paused";
                    }
                    else if (dClick == true && self.ultra.banker == true && dtp < 100 && self.disturbed == false && parsedFactionRelation >= -49) //banker by click
                    {
                        player.bankPosition = 0;
                        bankScroll = 0;
                        lowBar = "bank";
                        gameState = "paused";
                    }
                }
            }
        }
    }
}

function dialogueReset(self)
{
    self.engagedInDialogue = false;
    player.dialoguePosition = 0;
    player.inventoryPosition = 0;
    invScroll = 0;
    conversationID[0] = "none";
    conversationID[1] = 0;
    if (gameState == "active")
    {
        lowBar = "information";
    }
    dialogueActive = false;

    //text dialogue reset
    msgPhrase = -1;
    msgWord = 0;
    msgWords = [];
    makeWord = [];
    message = " ";
    tellMessage = false;
}

function msgReset()
{
    tellMessage = false;
    msgPhrase = -1;
    msgWord = 0;
    msgWords = [];
    makeWord = [];
    message = " ";
    msgKeepTime = 0;
}