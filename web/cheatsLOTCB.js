/**
 * Created by skyeguy on 1/22/17.
 */
//this function contains cheat methods that rely on the gameLoop.
function cheats()
{
    if (player.raceName == "Goop" && player.name == "Gooplur")
    {
        player.recoveryTime = 10;
        player.recoverV = true;
        player.will += 0.02;
    }

    if (constantEXP == true)
    {
        player.experience += 1;
    }

    if (constantMagic == true)
    {
        player.will += 0.2;
    }

    //Official Cheats
    if (key0)
    {
        key0 = false;
        var cheatcode = prompt("Enter game code:");
        if (cheatcode == null)
        {

        }
        else if (cheatcode == "monsterMaker")
        {
            var creature = prompt("Pick creature type...");
            var alpha = prompt("Pick creature's alpha...");
            if (alpha == "true")
            {
                alpha = true;
            }
            var equis = prompt("Set X value...");
            var yGriega = prompt("Set Y value...");
            var alliegenced = confirm("Click cancle and it will try to cancle you, clikc ok and it will be ok with you.");
            magicList.push(new Magic({ID: "adminSummon"}, true, [equis, yGriega, creature, alpha, alliegenced]));
        }
        else if (cheatcode == "unitListChecker")
        {
            console.log(ArtificialIntelligenceAccess);
        }
        else if (cheatcode == "1390")
        {
            player.concentration = Math.round(player.concentration / 2);
            player.eminence = Math.round(player.eminence / 2);
        }
        else if (cheatcode == "671W19THAVE")
        {
            player.skillPoints += 10;
            player.gender = "!*&#$^*CHEATER!#(&*#(&(";
            player.name = "***!!NOOB-SUCKER198!!***";
            player.title = "&*%^&$%^$^%**$";
            player.race = "&&&$0Wh4T&&&!^!!";
            player.raceName = "&&&$0Wh4T&&&!^!!";

        }
        else if (cheatcode == "2863980297")
        {
            player.concentration = JSON.parse(prompt("How much concentration would you like?"));
            player.eminence = JSON.parse(prompt("How much eminence would you like?"));
        }
        else if (cheatcode == "MedliaKit")
        {
            uniqueChars.medliaLDS = true;
        }
        else if (cheatcode == "MedliaKit")
        {
            uniqueChars.medliaLDS = true;
        }
        else if (cheatcode == "fixOrgell")
        {
            if (player.raceName == "Orgell")
            {
                player.baseThirst = 25;
                player.baseHunger = 55;
            }
        }
        else if (cheatcode == "pointMeInTheRightDirection")
        {
            player.skillPoints += 1;
        }
        else if (cheatcode == "suberbian")
        {
            player.survivalism = 0;
        }
        else if (cheatcode == "showsize")
        {
            testingUnitSizes = true;
        }
        else if (cheatcode == "showcenter")
        {
            testingUnitCenters = true;
        }
        else if (cheatcode == "00567817")
        {
            player.concentration = 0;
            player.eminence = 0;
            if (player.willpower == 1)
            {
                player.willpower = 0;
            }
            else
            {
                player.willpower = 1;
            }
        }
        else if (cheatcode == "8675309")
        {
            magicList.push(new Magic({ID: "chasingLights"}, true));
            magicList.push(new Magic({ID: "chasingLights"}, true));
            magicList.push(new Magic({ID: "chasingLights"}, true));
            magicList.push(new Magic({ID: "chasingLights"}, true));
            magicList.push(new Magic({ID: "chasingLights"}, true));
            magicList.push(new Magic({ID: "chasingLights"}, true));
            magicList.push(new Magic({ID: "chasingLights"}, true));
            magicList.push(new Magic({ID: "chasingLights"}, true));
            magicList.push(new Magic({ID: "chasingLights"}, true));
            magicList.push(new Magic({ID: "chasingLights"}, true));
        }
        else if (cheatcode == "111248392741664s")
        {
            if (player.eminence == 50)
            {
                player.eminence = 1000;
            }
        }
        else if (cheatcode == "SerJackOfLantern")
        {
            player.timeSinceLightSourceFuelUsed = new Date().getTime();
            player.lightSourceDuration = 540;
            player.lightSource = "jackOLantern";
        }
        else if (cheatcode == "KoolKandleKrew")
        {
            player.timeSinceLightSourceFuelUsed = new Date().getTime();
            player.lightSourceDuration = 180;
            player.lightSource = "candle";
        }
        else if (cheatcode == "JumP")
        {
            sleeperTime += (60 * 60 * 24 * 90);
        }
        else if (cheatcode == "SkiP")
        {
            sleeperTime += (60 * 60 * 3);
        }
        else if (cheatcode == "SkP")
        {
            sleeperTime += (60 * 60 * 1);
        }
        else if (cheatcode == "SliP")
        {
            sleeperTime -= (60 * 60 * 3);
        }
        else if (cheatcode == "SlP")
        {
            sleeperTime -= (60 * 60 * 1);
        }
        else if (cheatcode == "IBEMANGIRL" || cheatcode == "ibegirlman")
        {
            player.gender = "Hermaphrodite";
        }
        else if (cheatcode == "getTime")
        {
            alert("Total Real Time Played: " + Math.floor(timePlayed) +
                " Second Of Game Minute: " + secondOfMinute +
                " Minute Of Game Hour: " + minuteOfHour + " Hour Of Game Day: " + hourOfDay + " Day of Game Year: " + dayOfYear + " Time of Day: " + timeOfDay +
                " Current Game Season: " + currentSeason)
        }
        else if (cheatcode == "time")
        {
            alert(hourOfDay + ":" + minuteOfHour + "    ( " + secondOfMinute + " )");
        }
        else if (cheatcode == "exists")
        {
            var exst = prompt("Type the name of the item which you would like to investigate.");
            alert("The existence status of " + exst + " is currently: " + exists(exst));
        }
        else if (cheatcode == "6060842")
        {
            player.energilTime = 100;
            player.fatigueI = true;
        }
        else if (cheatcode == "SMFSGD")
        {
            player.warmth += 5;
            player.thirst += 3;
            player.hunger += 2;
        }
        else if (cheatcode == "GOOPGOOPGOOPGOOP")
        {
            player.endurance = 50;
            player.constitution = 100;
            player.knowledge = 50;
            player.willpower = 100;
            player.will = 100;
            player.concentration = 50;
            player.eminence = 50;
            player.memory = 100;
            player.health = 400;
            player.race = "#336600";
            player.strength = 50;
            player.stamina = 100;
            player.energy = 506;
            player.toughness = 50;
            player.intelligence = 50;
            player.ranged = 50;
            player.dexterity = 70;
            player.raceName = "Goop";
            player.title = "Supreme Overlord";
            player.name = "Gooplur";
            player.gender = "Goop";
        }
        else if (cheatcode == "G")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                developerRapidamente = true;
                rapidamente = true;
            }
        }
        else if (cheatcode == "GOPLUR")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                Inventory = allSpells;
            }
        }
        else if (cheatcode == "GP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                worldItems.push([new Item("coins", X, Y), 1000]);
            }
        }
        else if (cheatcode == "GOOP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                var chtItem = prompt("Enter the name of the item you would like.");
                var chtAmnt = JSON.parse(prompt("Enter the amount of " + chtItem + " you would like."));
                worldItems.push([new Item(chtItem, X, Y), chtAmnt]);
            }
        }
        else if (cheatcode == "thereallyverysuperspecialcorner")
        {
            //1899 2373
            if (X < 1899 + 50 && X > 1899 - 50 && Y < 2373 + 50 && Y > 2373 - 50)
            {
                var chtItem = prompt("And so it was that you reached enlightenment here on the street corner of Teshir City... Suddenly it all became clear... the physical the spiritual... one and the same!!! Imagine and you shall create:");
                var chtAmnt = JSON.parse(prompt("What quantity of " + chtItem + " do you imagine will appear into this worldy mesh of confused energy?"));
                worldItems.push([new Item(chtItem, X, Y), chtAmnt]);
            }
        }
        else if (cheatcode == "GOP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                player.survivalism = 500;
            }
        }
        else if (cheatcode == "drugsaregoodandifyoudothempeoplethinkthatyou'recool")
        {
            player.constitution = 1000;
            player.health = player.healthMAX;
            player.inebriation = 10000000;
            player.cyrinthilimTime = 10000000;
        }
        else if (cheatcode == "444416skyeisthecoolerest164444")
        {
            constantMagic = true;
        }
        else if (cheatcode == "badbeans")
        {
            player.gassinessTime += 10;
            magicList.push(new Magic({ID:"fart"}, true));
        }
        else if (cheatcode.toLowerCase() == "salty")
        {
            player.thirst = 3;
            if (player.raceName == "Freynor" && player.gender == "Female")
            {
                player.romance.push("hilmund");
            }
        }
        else if (cheatcode.toLowerCase() == "testunits")
        {
            if (testingUnitCenters == true)
            {
                testingUnitCenters = false;
                testingUnitSizes = false;
            }
            else
            {
                testingUnitCenters = true;
                testingUnitSizes = true;
            }
        }
        else if (cheatcode.toLowerCase() == "resetSurvivalism")
        {
            this.survivalism = 0;
        }
        else if (cheatcode == "4444444444444444")
        {
            if (player.eminence == 50 && player.knowledge == 50)
            {
                player.hunger = player.hungerMAX;
                player.thirst = player.thirstMAX;
            }
        }
        else if (cheatcode.toLowerCase() == "lineuptodie")
        {
            if (unitSurround == true)
            {
                unitSurround = false;
            }
            else
            {
                unitSurround = true;
            }
        }
        else if (cheatcode.toLowerCase() == "tellme")
        {

        }
        else if (cheatcode.toLowerCase() == "dime")
        {
            alert([player.illnesses[0][0], player.illnesses[0][1]]);
        }
        else if (cheatcode.toLowerCase() == "test")
        {
            var chekked = 0
            for (var i = 0; i < player.illnesses.length; i++)
            {
                if (player.illnesses[i][0] == "Throat-Frost")
                {
                    chekked = 1;
                }
            }

            if (chekked == 0)
            {
                player.illnesses.push(["Throat-Frost", 0, 43]);
            }
        }
        else if (cheatcode.toLowerCase() == "clearinv")
        {
            Inventory = [];
        }
        else if (cheatcode.toLowerCase() == "testinv")
        {
            console.log(Inventory);
        }
        else if (cheatcode.toLowerCase() == "buensiesta")
        {
            sleep();
        }
        else if (cheatcode.toLowerCase() == "coords")
        {
            if (tellCoords == true)
            {
                tellCoords = false;
            }
            else
            {
                tellCoords = true;
            }
        }
        else if (cheatcode.toLowerCase() == "attackbubble")
        {
            if (showPlayerAttackBubble == true)
            {
                showPlayerAttackBubble = false;
            }
            else
            {
                showPlayerAttackBubble = true;
            }
        }
        else if (cheatcode.toLowerCase() == "restoredesmonde")
        {
            if (player.name == "Desmonde")
            {
                player.level = 13;
                player.skillPoints = 4 * 13;
                player.totalSkillPoints = 4 * 14;
                teshirNorthRoadBandits = false;
                teshirNorthRoadKillCount = 4;
                teshirNorthRoadQuest = "complete";
                huntingWagerFrichPack = false;
                huntingWagerKillCount = 3;
                huntingWagerQuest = "complete";
                Inventory = [[new Item("glinMushrooms", false, false), 3], [new Item("neprilneBerries", false, false), 6], [new Item("frichMeat", false, false), 130], [new Item("hetmerArmour", false, false), 1], [new Item("vardanianCleaver", false, false), 1], [new Item("freydicSword", false, false), 1], [new Item("freydicGreatSword", false, false), 1], [new Item("winterWolfOutfit", false, false), 1], [new Item("walrusLeatherWaterskinFull", false, false), 6], [new Item("walrusLeatherWaterskin", false, false), 28], [new Item("walrusMeat", false, false), 5], [new Item("fireStarter", false, false), 1], [new Item("suuliMelonSlice", false, false), 12], [new Item("coins", false, false), 394]];
                bankSlots = 10;
            }
        }
        else if (cheatcode.toLowerCase() == "yoglithewarriornun")
        {
            if (player.name == "Yogli" && player.gender == "Female")
            {
                player.constitution = 4;
                player.strength = 10;
                player.stamina = 5;
                player.dexterity = 1;
                player.skillPoints = 4;
                player.totalSkillPoints = 4 * 6;
                player.title = "Warrior Nun";
            }
        }
        else if (cheatcode.toLowerCase() == "fixcombatsenser")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].DTP() > ArtificialIntelligenceAccess[i].rangeOfSight)
                {
                    ArtificialIntelligenceAccess[i].playerSeen = false;
                }
            }
            player.engagedSenser();
        }
        else if (cheatcode.toLowerCase() == "howsexyami")
        {
            player.charisma = JSON.parse(prompt("You tell me, how sexy are you???"));
        }
        else if (cheatcode.toLowerCase() == "easterly")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 55, Y - 55, "Neev", false, "Bruma"));
        }
        else if (cheatcode.toLowerCase() == "westerly")
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 55, Y - 55, "Neev", true, "Wester"));
        }
        else if (cheatcode.toLowerCase() == "racepickeradvanced")
        {
            player.raceName = prompt("Welcome to the all new race picker advanced edition, Enter your desired racial preload:");
        }
        else if (cheatcode.toLowerCase() == "selfproclaimedtitle")
        {
            player.title = prompt("Proclaim your new title then...");
        }
        else if (cheatcode.toLowerCase() == "unstuckme")
        {
            this.speechMovementInhibitor = false;
            playersTurnToSpeak = true;

            {
                X = X + Math.cos(player.rotation + 1/2 * Math.PI) * 55;
                Y = Y + Math.sin(player.rotation + 1/2 * Math.PI) * 55;
            }
        }
        else if (cheatcode.toLowerCase() == "fixmininoticelist")
        {
            player.miniNoticeList = [];
        }
        else if (cheatcode.toLowerCase() == "fixinvplus")
        {
            //invScroll = -79;
            player.inventoryPosition += 1;
            alert(player.inventoryPosition);
        }
        else if (cheatcode.toLowerCase() == "fixinv")
        {
            player.inventoryPosition = 0;
            invScroll = 0;
        }
        else if (cheatcode.toLowerCase() == "fixinvminus")
        {
            //invScroll = 0;
            player.inventoryPosition -= 1;
            alert(player.inventoryPosition);
        }
        else if (cheatcode.toLowerCase() == "fixshopplus")
        {
            //merchScroll = -79;
            player.merchPosition += 1;
            alert(player.merchPosition);
        }
        else if (cheatcode.toLowerCase() == "fixshop")
        {
            player.merchPosition = 0;
            merchScroll = 0;
        }
        else if (cheatcode.toLowerCase() == "fixshopminus")
        {
            //merchScroll = 0;
            player.merchPosition -= 1;
            alert(player.merchPosition);
        }
        else if (cheatcode.toLowerCase() == "serpytheserpent")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 40, Y, "Viper", false, "Serpy the Serpent"));
        }
        else if (cheatcode.toLowerCase() == "traavinjathetroll")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 500 - 1/2 * CCC.width, Y + 500 - 1/2 * CCC.height, "BogTroll", false, "Traavinja the Troll"));
        }
        else if (cheatcode.toLowerCase() == "gravimullthetroll")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 500 - 1/2 * CCC.width, Y + 500 - 1/2 * CCC.height, "BogTroll", true, "Gravimull the Troll"));
        }
        else if (cheatcode.toLowerCase() == "wetnoodle")
        {
            player.toughness = 0;
            player.endurance = 0;
            player.stamina = 0;
            player.charisma = 0;
        }
        else if (cheatcode.toLowerCase() == "lightningflashspeedyspeed")
        {
            rapidamente = true;
            developerRapidamente = true;
        }
        else if (cheatcode.toLowerCase() == "dameunaespada")
        {
            worldItems.push([new Item("katana", X, Y), 1]);
        }
        else if (cheatcode.toLowerCase() == "damedinero")
        {
            worldItems.push([new Item("coins", X, Y), 100]);
        }
        else if (cheatcode == "over9000")
        {
            player.level = 9001;
        }
        else if (cheatcode.toLowerCase() == "thisgameismissingsomething")
        {
            player.totalSkillPoints -= player.constitution;
            player.constitution = 0;
            player.health = player.healthMAX;
            if (machineGunCrossbow == false)
            {
                Inventory = [];
                Inventory.push([new Item("crossbow", false, false), 1]);
                Inventory.push([new Item("steelBolt", false, false), 11]);
                machineGunCrossbow = true;
            }
        }
        else if (cheatcode.toLowerCase() == "clearitems")
        {
            worldItems = [];
        }
    }
}