/**
 * Created by skyeguy on 10/26/17.
 */
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

            if (self.type == "Person" || self.type == "Soldier" || self.interactable)
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
                                    }
                                }
                            }
                        }
                        else if (conversationID[1] == "0a")
                        {
                            drohforGreet.play();
                            drohforGreet.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            if (player.getCharisma() < 1 && player.title != "Nobility" && player.title != "Royalty")
                            {
                                drohforWastingTime.play();
                                drohforWastingTime.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else if (player.title == "Royalty" || player.title == "Nobility")
                            {
                                if (player.gender == "Female")
                                {
                                    drohforTrackingMLady.play();
                                    drohforTrackingMLady.onended = function()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 1;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    drohforTrackingMLord.play();
                                    drohforTrackingMLord.onended = function()
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
                                drohforTrackingCHA.play();
                                drohforTrackingCHA.onended = function()
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
                            drohforOutfit.play();
                            drohforOutfit.onended = function()
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
                                    drohforLadyWins.play();
                                    drohforLadyWins.onended = function ()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        conversationID[1] = 0;
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    if (player.gender == "Male")
                                    {
                                        drohforHighbornLad.play();
                                        drohforHighbornLad.onended = function ()
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            quests.activeQuests.push({name: "Hunting Wager", description: "After insulting Drohfor he suggested that you would no better at hunting the pack of peculiar friches he was after."});
                                            conversationID[1] = 2;
                                            quests.huntingWagerFrichPack = true;
                                            change = "none";
                                            self.SC();
                                        }
                                    }
                                    else
                                    {
                                        drohforHighbornLasse.play();
                                        drohforHighbornLasse.onended = function ()
                                        {
                                            playersTurnToSpeak = true;
                                            player.dialoguePosition = 0;
                                            quests.activeQuests.push({name: "Hunting Wager", description: "After insulting Drohfor he suggested that you would no better at hunting the pack of peculiar friches he was after."});
                                            conversationID[1] = 2;
                                            quests.huntingWagerFrichPack = true;
                                            change = "none";
                                            self.SC();
                                        }
                                    }
                                }
                            }
                            else
                            {
                                if (player.gender == "Female")
                                {
                                    drohforSoEasy.play();
                                    drohforSoEasy.onended = function ()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        quests.activeQuests.push({name: "Hunting Wager", description: "After insulting Drohfor he bet you 15 coins that you would do no better at hunting the peculiar pack of friches he was after."});
                                        conversationID[1] = 2;
                                        quests.huntingWagerFrichPack = true;
                                        change = "none";
                                        self.SC();
                                    }
                                }
                                else
                                {
                                    drohforTailBetweenLegs.play();
                                    drohforTailBetweenLegs.onended = function ()
                                    {
                                        playersTurnToSpeak = true;
                                        player.dialoguePosition = 0;
                                        quests.activeQuests.push({name: "Hunting Wager", description: "After insulting Drohfor he bet you 15 coins that you would do no better at hunting the peculiar pack of friches he was after."});
                                        conversationID[1] = 2;
                                        quests.huntingWagerFrichPack = true;
                                        change = "none";
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
                                drohforNoMore.play();
                                drohforNoMore.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
                                    self.SC();
                                }
                            }
                            else
                            {
                                drohforShutUp.play();
                                drohforShutUp.onended = function()
                                {
                                    playersTurnToSpeak = true;
                                    player.dialoguePosition = 0;
                                    conversationID[1] = 0;
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
                                quests.activeQuests.push({name: "Teshir North Road", description: "Bandits block the road to the north, get rid of them so that Toggin can get back home."})
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
                                player.dialogueOptions = [["Good Day.", false, "a"], ["What is that you're working on?", false, "b"], ["What's new Maggy?", false, "c"], ["How's business?", false, "d"]];
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
                            maggyJustLovely.play();
                            maggyJustLovely.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0b")
                        {
                            maggyJustCleaning.play();
                            maggyJustCleaning.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0c")
                        {
                            maggyMostlyCleaning.play();
                            maggyMostlyCleaning.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
                        }
                        else if (conversationID[1] == "0d")
                        {
                            maggyLifeStory.play();
                            maggyLifeStory.onended = function()
                            {
                                playersTurnToSpeak = true;
                                player.dialoguePosition = 0;
                                conversationID[1] = 0;
                                self.SC();
                            }
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

                    if (self.ID == "Johanna the Herbalist" || conversationID[0] == "Johanna")
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

                    if (self.ID == "Lena" || conversationID[0] == "Lena")
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
                    dialogueReset();
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
                        shopkeeper = self;
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

function dialogueReset()
{
    self.engagedInDialogue = false;
    player.dialoguePosition = 0;
    player.inventoryPosition = 0;
    invScroll = 0;
    conversationID[0] = "none";
    conversationID[1] = 0;
    lowBar = "information";
    dialogueActive = false;
}