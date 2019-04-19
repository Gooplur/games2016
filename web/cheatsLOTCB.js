/**
 * Created by skyeguy on 1/22/17.
 */
//this function contains cheat methods that rely on the gameLoop.
function cheats()
{
    if (buildMode == true)
    {
        var buildList = ["coords", "Selva Tree", "Sonja Tree"];
        if (tKey)
        {
            tKey = false;
            buildToggle -= 1;
            if (buildToggle < 0)
            {
                buildToggle = (buildList.length - 1);
            }
            console.log(buildList[buildToggle]);
        }
        if (yKey)
        {
            yKey = false;
            buildToggle += 1;
            if (buildToggle >= buildList.length)
            {
                buildToggle = 0;
            }
            console.log(buildList[buildToggle]);
        }

        //BUILDMENU
        if (buildToggle == 0)
        {
            if (xKey)
            {
                xKey = false;
                console.log(X + ", " + Y);
                worldItems.push([new Item("marker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.beginPath();
                XXX.fillStyle = "#BF0000";
                XXX.arc(1/2 * CCC.width, 1/2 * CCC.height, 15, 0, Math.PI * 2);
                XXX.fill();
            }
        }
        else if (buildToggle == 1)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("selvaTree", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("treeMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(humpa, 1211, 394, 755, 871, -(1/2 * 755 * 1), -(1/2 * 871 * 1), 755 * 1, 871 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 2)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("sonjaTree", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("treeMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(humpa, 1802, 26, 279, 242, -(1/2 * 279 * 1.5), -(1/2 * 242 * 1.5), 279 * 1.5, 242 * 1.5);
                XXX.restore();

                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(humpa, 2128, 24, 279, 242, -(1/2 * 279 * 1.5), -(1/2 * 242 * 1.5), 279 * 1.5, 242 * 1.5);
                XXX.restore();
            }
        }
    }
    //kids mode silliness
    if (player.gamemode == "protagonist")
    {
        for (var iiii = scenicList.length - 1; iiii >= 0; iiii--)
        {
            if (scenicList[iiii].type == "blood" || scenicList[iiii].type == "deadBody" || scenicList[iiii].type == "skeleton" || scenicList[iiii].type == "hyelingSkeleton" || scenicList[iiii].type == "deadNaaprid" || scenicList[iiii].type == "deadHorse")
            {
                scenicList.splice(iiii, 1);
            }
        }
    }

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
        else if (cheatcode == "peterization")
        {
            player.name = "Peter";
            player.race = "#fc9462";
            alert("You are become Peter. You can now use the 'HACK' command in the console menu.")
        }
        else if (cheatcode == "monsterMaker")
        {
            var creature = prompt("Pick creature type...");
            var alpha = prompt("Pick creature's alpha...");
            if (alpha == "true")
            {
                alpha = true;
            }
            else if (alpha == false)
            {
                alpha = false;
            }
            var equis = Number(prompt("Set X value..."));
            var yGriega = Number(prompt("Set Y value..."));
            var alliegenced = confirm("Click cancle and it will try to cancle you, clikc ok and it will be ok with you.");
            magicList.push(new Magic({ID: "adminSummon", CNX: 100}, true, [equis, yGriega, creature, alpha, alliegenced], false));
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
        else if (cheatcode == "duendeéstanlosduendes" || cheatcode == "duendeestanlosduendes")
        {
            duendeSwarm = true;
        }
        else if (cheatcode == "licántropo" || cheatcode == "lobizón" || cheatcode == "licantropo" || cheatcode == "lobizon")
        {
            player.lycanthropy = true;
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
        else if (cheatcode == "radical")
        {
            player.radiation += 90;
        }
        else if (cheatcode == "oozling")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 600, Y, "Xormid", true, "Sluba"));
        }
        else if (cheatcode == "forget")
        {
            if (player.getKnowledge() >= 1)
            {
                var chekerPromt = confirm("Are you sure you want to forget all of the spells you have learned?");
                if (chekerPromt)
                {
                    primarySpells = [];
                    secondarySpells = [];
                    tertiarySpells = [];
                }
            }
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
        else if (cheatcode == "rename")
        {
            if (player.name != "Peter" || player.race != "#fc9462")
            {
                if (player.name != "Gooplur" && player.name != "Qualdo")
                {
                    player.name = prompt("You are apparently a total idiot who can not stick to their decisions: Please be my guest and pick a new name for your character, you'll be back again soon I'm sure.", "XXXbu113t5uckin6N00BXXX")
                }
            }
            else
            {
                alert("WARNING: Peter is a perfect name; you do not have the required permissions to change it.");
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
        else if (cheatcode == "seeSight" || cheatcode == "seesight" || cheatcode == "showSight" || cheatcode == "showsight")
        {
            if (showSightCheat == false)
            {
                showSightCheat = true;
            }
            else
            {
                showSightCheat = false;
            }
        }
        else if (cheatcode == "showcenter")
        {
            testingUnitCenters = true;
        }
        else if (cheatcode == "earnings")
        {
            console.log(player.earnings);
        }
        else if (cheatcode == "corriente")
        {
            for (var ii = 0; ii < bankAccount.length; ii++)
            {
                console.log(bankAccount[ii]);
            }
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
        else if (cheatcode == "wobéame" || cheatcode == "wobeame")
        {
            scenicList.push(new Scenery("wobeaPlant", X + 200, Y, Math.random() * 2 * Math.PI, true));
        }
        else if (cheatcode == "8675309")
        {
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
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
        else if (cheatcode.toLowerCase() == "beastjam")
        {
            if (!changeBeastiary)
            {
                changeBeastiary = true;
            }
            else
            {
                changeBeastiary = false;
            }
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
        else if (cheatcode == "SMSP")
        {
            player.warmth += 5;
            player.thirst += 3;
            player.hunger += 2;
        }
        else if (cheatcode == "GOOPGOOPGOOPGOOP")
        {
            if (player.title != "MRB Agent")
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
        }
        else if (cheatcode == "VOOP" || cheatcode == "venandify" || cheatcode == "venandi")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                if (cheatcode == "venandify")
                {
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].DTP() <= 900)
                        {
                            ArtificialIntelligenceAccess[i].venandi = 400;
                        }
                    }
                }
                else if (cheatcode == "venandi")
                {
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].DTP() <= 2000)
                        {
                            ArtificialIntelligenceAccess[i].venandi = 390;
                        }
                    }
                }
                else
                {
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].DTP() <= 1000)
                        {
                            ArtificialIntelligenceAccess[i].venandi = 361;
                        }
                    }
                }
            }
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
        else if (cheatcode == "HACK")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                alert("Welcome to your exclusive life manipulation informational center. Here are the commands that you can use: \ getItem \ setCoords \ setAttribute \ getAllWeapons \ getAllWorn \ getAllSpells \ getSkillpoints \ getMagicpoints")
            }
        }
        else if (cheatcode == "setAttribute")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                var attrib = prompt("select attribute to set:", "catEye \ medusa \ tunskBlood \ heavenlyStep");
                if (attrib == "catEye")
                {
                    if (player.nightVision)
                    {
                        player.nightVision = false;
                        alert("catEye = false;");
                    }
                    else
                    {
                        player.nightVision = true;
                        alert("catEye = true;");
                    }
                }
                else if (attrib == "medusa")
                {
                    if (player.medusa == true)
                    {
                        player.medusa = false;
                        alert("medusa = false;");
                    }
                    else
                    {
                        player.medusa = true;
                        alert("medusa = true;");
                    }
                }
                else if (attrib == "tunskBlood")
                {
                    if (player.petrificationResistanceTime > 0)
                    {
                        player.petrificationResistanceTime = 0;
                        alert("tunskBlood = false;");
                    }
                    else
                    {
                        player.petrificationResistanceTime = 100000000000000000;
                        alert("tunskBlood = true;");
                    }
                }
                else if (attrib == "heavenlyStep")
                {
                    if (player.waterwalkingTime > 0)
                    {
                        player.waterwalkingTime = 0;
                        alert("heavenlyStep = false;");
                    }
                    else
                    {
                        player.waterwalkingTime = 100000000000000000;
                        alert("heavenlyStep = true;");
                    }
                }
            }
        }
        else if (cheatcode == "getAllWeapons")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                var wepp;
                for (var i = 0; i < allWeapons.length; i++)
                {
                    if (i != 2)
                    {
                        wepp = [new Item(allWeapons[i].type, X, Y), 1];
                        Inventory.push(wepp);
                    }
                }
            }
        }
        else if (cheatcode == "getAllWorn")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                var wepp;
                for (var i = 1; i < allWorn.length; i++)
                {
                    wepp = [new Item(allWorn[i].type, X, Y), 1];
                    Inventory.push(wepp);
                }
            }
        }
        else if (cheatcode == "getAllSpells")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                for (var i = 1; i < allSpells.length; i++)
                {
                    Inventory.push(allSpells[i]);
                }
            }
        }
        else if (cheatcode == "getSkillpoints")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                player.skillPoints += 50;
            }
        }
        else if (cheatcode == "getMagicpoints")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                player.magicalSkillPoints += 50;
            }
        }
        else if (cheatcode == "getItem")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                var chtItem = prompt("Poly-Land-Server:~ Administrative-User$ getItem =");
                var chtAmnt = JSON.parse(prompt("Poly-Land-Server:~ Administrative-User$ setAmount ="));
                worldItems.push([new Item(chtItem, X, Y), chtAmnt]);
            }
        }
        else if (cheatcode == "setCoords")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                X = Number(prompt("Poly-Land-Server:~ Administrative-User$ setXCoord ="));
                Y = Number(prompt("Poly-Land-Server:~ Administrative-User$ setYCoord ="));

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
                player.venandi = 0;
                if (player.form == "venandi")
                {
                    player.form = false;
                    player.weapon = "none";
                }
            }
        }
        else if (cheatcode == "OOP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                X = Number(prompt("Teleport X"));
                Y = Number(prompt("Teleport Y"));
            }
        }
        else if (cheatcode == "GOOPGOOP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                buildMode = true;
                player.lifeEternal = true;
            }
        }
        else if (cheatcode == "OP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                X = X + Number(prompt("Teleport X"));
                Y = Y + Number(prompt("Teleport Y"));
            }
        }
        else if (cheatcode == "GOO")
        {
            if (player.name == "Gooplur" && player.gender == "Goop" && player.race == "#336600")
            {
                player.gender = "Gooplon";
                player.waterwalkingTime = 99999999999999999999999999;
                player.petrificationResistanceTime = 99999999999999999999999999;
                player.nightVision = true;
            }
        }
        else if (cheatcode == "NEO")
        {
            if (player.name == "Gooplur" && player.gender == "Goop" && player.race == "#336600" || player.name == "Gooplur" && player.gender == "Gooplon" && player.race == "#336600" || player.name == "Gooplur" && player.gender == "Gooplurg" && player.race == "#336600")
            {
                player.gender = "Gooplitor";
            }
        }
        else if (cheatcode == "MEDUSA")
        {
            if (player.name == "Gooplur" && player.gender == "Gooplon" && player.race == "#336600")
            {
                player.gender = "Gooplurg";
                player.medusa = true;
            }
        }
        else if (cheatcode == "cmplst")
        {
            alert("The length of the companion list is: " + player.companions.length);
            for (var cmplst = 0; cmplst < player.companions.length; cmplst++)
            {
                console.log(player.companions[cmplst]);
            }
        }
        else if (cheatcode == "sustituto") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 60, Y - 60, "Changeling", false, "changeling"));
        }
        else if (cheatcode == "sustituida") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Changeling", true, "Young Kellish Slave Girl", {race: "Kel", faction: "player", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "sustituido") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Changeling", true, "Young Kellish Girl", {race: "Kel", faction: "Kel", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "sustituible") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Person", true, "Sue", {race: "Kel", faction: "Kel", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "sustituir") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Person", true, "Young Kellish Slave Girl", {race: "Kel", faction: "player", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "magzSustituir") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Person", true, "Little Maggy", {race: "Freynor", faction: "player", personality: "scared", outfit: ["frichFurClothing", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "tailorSustituir") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Person", true, "Maggy the Tailor", {race: "Freynor", faction: "player", personality: "scared", outfit: ["frichFurClothing", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "drugsaregoodandifyoudothempeoplethinkthatyou'recool")
        {
            player.constitution = 1000;
            player.health = player.healthMAX;
            player.inebriation = 10000000;
            player.cyrinthilimTime = 10000000;
        }
        else if (cheatcode == "444416theskyisthecoolerest164444")
        {
            constantMagic = true;
        }
        else if (cheatcode.toLowerCase() == "greaty")
        {
            var lesky = Y;
            for (var i = 0; i < scenicList.length; i++)
            {
                if (scenicList[i].Y > lesky)
                {
                    console.log('scenicList.push(new Scenery("' + scenicList[i].type +'", ' + scenicList[i].X + ', ' + scenicList[i].Y + ',' + scenicList[i].rotation + ', ' + scenicList[i].temporary +', ' + scenicList[i].information + ')); //copied ' + region);
                }
            }
        }
        else if (cheatcode.toLowerCase() == "lessy")
        {
            var lesky = Y;
            for (var i = 0; i < scenicList.length; i++)
            {
                if (scenicList[i].Y < lesky)
                {
                    console.log('scenicList.push(new Scenery("' + scenicList[i].type +'", ' + scenicList[i].X + ', ' + scenicList[i].Y + ',' + scenicList[i].rotation + ', ' + scenicList[i].temporary +', ' + scenicList[i].information + ')); //copied ' + region);
                }
            }
        }
        else if (cheatcode.toLowerCase() == "lessx")
        {
            var lesky = X;
            for (var i = 0; i < scenicList.length; i++)
            {
                if (scenicList[i].X < lesky)
                {
                    console.log('scenicList.push(new Scenery("' + scenicList[i].type +'", ' + scenicList[i].X + ', ' + scenicList[i].Y + ',' + scenicList[i].rotation + ', ' + scenicList[i].temporary +', ' + scenicList[i].information + ')); //copied ' + region);
                }
            }
        }
        else if (cheatcode.toLowerCase() == "greatx")
        {
            var lesky = X;
            for (var i = 0; i < scenicList.length; i++)
            {
                if (scenicList[i].X > lesky)
                {
                    console.log('scenicList.push(new Scenery("' + scenicList[i].type +'", ' + scenicList[i].X + ', ' + scenicList[i].Y + ',' + scenicList[i].rotation + ', ' + scenicList[i].temporary +', ' + scenicList[i].information + ')); //copied ' + region);
                }
            }
        }
        else if (cheatcode == "badbeans")
        {
            player.gassinessTime += 10;
            magicList.push(new Magic({ID:"fart"}, true));
        }
        else if (cheatcode == "missedOpportunities")
        {
            if (player.levelBonusSkillPoints < 2 && player.level >= 10 && player.level < 20)
            {
                player.skillPoints += 2;
                player.levelBonusSkillPoints = 2;
            }
        }
        else if (cheatcode.toLowerCase() == "salty")
        {
            player.thirst = 3;
            if (player.raceName == "Freynor" && player.gender == "Female")
            {
                player.romance.push("hilmund");
            }
        }
        else if (cheatcode.toLowerCase() == "haeyouthere")
        {
            player.haeflowerTime += 60;
        }
        else if (cheatcode.toLowerCase() == "iwill")
        {
            player.will = 0;
        }
        else if (cheatcode == "MRB")
        {
            player.race = "#999966";
            player.raceName = "Empiric";
            player.title = "MRB Agent";
            player.constitution = 1;
            player.toughness = 4;
        }
        else if (cheatcode.toLowerCase() == "testunits")
        {
            if (testingUnitCenters == true)
            {
                testingUnitCenters = false;
                testingUnitSizes = false;
                showUnitAttackBubble = false;
            }
            else
            {
                testingUnitCenters = true;
                testingUnitSizes = true;
                showUnitAttackBubble = true;
            }
        }
        else if (cheatcode.toLowerCase() == "showbarriers" || cheatcode.toLowerCase() == "testbarriers" || cheatcode.toLowerCase() == "b")
        {
            if (!testBarriers)
            {
                testBarriers = true;
            }
            else
            {
                testBarriers = false;
            }
        }
        else if (cheatcode.toLowerCase() == "resetsurvivalism")
        {
            player.survivalism = 0;
        }
        else if (cheatcode.toLowerCase() == "resetdexterity")
        {
            player.dexterity = 0;
        }
        else if (cheatcode.toLowerCase() == "getfistdamage")
        {
            alert(player.getFistDamage());
        }
        else if (cheatcode == "4444444444444444")
        {
            if (player.eminence == 50 && player.knowledge == 50)
            {
                player.hunger = player.hungerMAX;
                player.thirst = player.thirstMAX;
            }
        }
        else if (cheatcode == "sleepyseed")
        {
            player.sleep -= 14;
        }
        else if (cheatcode == "unitList")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                console.log(ArtificialIntelligenceAccess[i]);
            }
        }
        else if (cheatcode == "isThere")
        {
            var unttNme = prompt("Enter the type of unit you are seeking");
            var isDere = false;
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].type == unttNme)
                {
                    alert("Yes, there is. At coords (" + ArtificialIntelligenceAccess[i].X + ", " + ArtificialIntelligenceAccess[i].Y + ")");
                    isDere = true;
                    break;
                }
            }
            if (isDere == false)
            {
                alert("No, there is not.");
            }
        }
        else if (cheatcode == "hay")
        {
            var unttNme = prompt("Ingresa el tipo del objeto decorativo que buscas.");
            var isDere = false;
            for (var i = 0; i < scenicList.length; i++)
            {
                if (scenicList[i].type == unttNme)
                {
                    isDere = true;
                    alert("Yes, there is. At coords (" + scenicList[i].X + ", " + scenicList[i].Y + ")");
                    break;
                }
            }
            if (isDere == false)
            {
                alert("No, there is not.");
            }
        }
        else if (cheatcode == "bones")
        {
            console.log(quests.flamingBones);
        }
        else if (cheatcode.toLowerCase() == "peter")
        {
            var crrPrompt;
            var crPrompt = prompt("Hello user, my name is Peter. I am your informational asistant, here to help you find out more about your character.", "cold, sleep, team, tutorial")
            if (crPrompt == "cold")
            {
                alert("Cold is what happens when the tempurature in a particular region of the game world is meant to simulate a low-temperature environment from real life. Your cold stat is so -- Warmth: " + player.warmth + " / " + "Full Warmth: " + player.warmthMAX);
            }
            else if (crPrompt == "sleep")
            {
                alert("Sleep is a stat that decreases over time and must be replenished by sleeping, and if it isn't then the player character will suffer negative effects from sleep deprivation. Your sleep stat is so -- Sleep: " + (Math.round((player.sleep * 100)) / 100) + " / " + "Full Sleep: " + player.totalSleep);
            }
            else if (crPrompt == "tutorial")
            {
                alert("If you need a tutorial to play this absurdly complex game you are clearly not one of the few people this game was intended to be played by. Consider putting in the effort to learn the games rules or finding something else to do with your time. Thank you for using Peter, your personal Q and A assistant!");
            }
            else if (crPrompt == "team")
            {
                crrPrompt = prompt("Almost all beings in the game have a team/faction, the player is the exception. The player has stored relation with each faction. Which faction would you like to know your value in?", "freynor, thengar, kel, aldrek, orgell, vardan, cephrite, nirwaden");
            }

            if (crrPrompt == "kel")
            {
                alert("Your relation with this faction is: " + player.kelFaction);
            }
            else if (crrPrompt == "freynor")
            {
                alert("Your relation with this faction is: " + player.freynorFaction);
            }
            else if (crrPrompt == "thengar")
            {
                alert("Your relation with this faction is: " + player.thengarFaction);
            }
            else if (crrPrompt == "aldrek")
            {
                alert("Your relation with this faction is: " + player.aldrekFaction);
            }
            else if (crrPrompt == "orgell")
            {
                alert("Your relation with this faction is: " + player.orgellFaction);
            }
            else if (crrPrompt == "vardan")
            {
                alert("Your relation with this faction is: " + player.vardanFaction);
            }
            else if (crrPrompt == "cephrite")
            {
                alert("Your relation with this faction is: " + player.cephriteFaction);
            }
            else if (crrPrompt == "nirwaden")
            {
                alert("Your relation with this faction is: " + player.nirwadenFaction);
            }

            if (typeof(crPrompt) != null)
            {
                alert("Thank you for letting me help you to know more!")
            }
            else
            {
                alert("Interaction Terminated")
            }
        }
        else if (cheatcode.toLowerCase() == "overview")
        {
            console.log(player);
        }
        else if (cheatcode.toLowerCase() == "unitoverview")
        {
            console.log(ArtificialIntelligenceAccess);
        }
        else if (cheatcode.toLowerCase() == "tellme")
        {
            console.log(this.levelBonusMagicPoints);
        }
        else if (cheatcode.toLowerCase() == "dime")
        {
            alert([player.illnesses[0][0], player.illnesses[0][1]]);
        }
        else if (cheatcode.toLowerCase() == "throatfrosttest")
        {
            var chekked = 0;
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
        else if (cheatcode.toLowerCase() == "lypelistest")
        {
            var chekked = 0;
            for (var i = 0; i < player.illnesses.length; i++)
            {
                if (player.illnesses[i][0] == "Lypelis")
                {
                    chekked = 1;
                }
            }

            if (chekked == 0)
            {
                player.illnesses.push(["Lypelis", 0, 89]);
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
        else if (cheatcode.toLowerCase() == "buenasiesta")
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
        else if (cheatcode.toLowerCase() == "noonesawnooneknows")
        {
            if (player.name == "Desmonde")
            {
                player.theBalgurMercenariesFaction = 0;
            }
        }
        else if (cheatcode.toLowerCase() == "qualdo")
        {
            console.log(allSpells.length);
            Inventory = allSpells;
            player.race = "#301934";
            player.name = "Qualdo";
            player.magicalSkillPoints = 250 + allSpells.length;
            player.title = "Superhero";
            player.gender = "Male";
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
        else if (cheatcode.toLowerCase() == "change")
        {
            change = "cheatChange#" + (Math.random() * Math.random() * Math.random());
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
            if (player.name != "Peter")
            {
                player.raceName = prompt("Welcome to the all new race picker advanced edition, Enter your desired racial preload:");
            }
        }
        else if (cheatcode.toLowerCase() == "selfproclaimedtitle")
        {
            if (player.name != "Peter" && player.title != "MRB Agent")
            {
                player.title = prompt("Proclaim your new title then...");
            }
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
        else if (cheatcode.toLowerCase() == "devomori")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 400 - 1/2 * CCC.width, Y + 400 - 1/2 * CCC.height, "Olkrin", true, "Devomori the Destroyer"));
        }
        else if (cheatcode.toLowerCase() == "tulli")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 400 - 1/2 * CCC.width, Y + 400 - 1/2 * CCC.height, "Sprite", true, "Tulli the Watcher"));
        }
        else if (cheatcode.toLowerCase() == "wetnoodle") //resets all physical stats to 0
        {
            player.toughness = 0;
            player.endurance = 0;
            player.stamina = 0;
            player.charisma = 0;
            player.constitution = 0;
            player.strength = 0;
            player.dexterity = 0;
            player.ranged = 0;
            player.intelligence = 0;
            player.survivalism = 0;
        }
        else if (cheatcode.toLowerCase() == "drynoodle") //resets all magical stats to 0
        {
            player.eminence = 0;
            player.concentration = 0;
            player.willpower= 0;
            player.knowledge= 0;
            player.memory = 0;
        }
        else if (cheatcode.toLowerCase() == "wallachia") //resets all magical stats to 0
        {
            player.vamprism = true;
        }
        else if (cheatcode.toLowerCase() == "nofilter") //turns off content filter
        {
            player.matureContentFilter = false;
        }
        else if (cheatcode.toLowerCase() == "perfectArmour")
        {
            perfectArmour = true;
        }
        else if (cheatcode.toLowerCase() == "foePerfectArmour")
        {
            foePerfectArmour = true;
        }
        else if (cheatcode.toLowerCase() == "filter") //turns on content filter
        {
            player.matureContentFilter = true;
        }
        else if (cheatcode.toLowerCase() == "tellmap") //resets all magical stats to 0
        {
            alert("World: " +  map +", Map: " + region + ", Elevation: " + elevation);
        }
        else if (cheatcode.toLowerCase() == "borrar")
        {
            dialogueReset();
            //Delete All Non-native AI Units
            for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--)
            {
                if (!ArtificialIntelligenceAccess[i].guarantee)
                {
                    ArtificialIntelligenceAccess.splice(i, 1);
                }
            }
            //Delete All Non-native Scenery
            scenicList = [];
            //Delete All Barriers
            barrierList = [];
        }
        else if (cheatcode.toLowerCase() == "reiniciar")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                dialogueReset(ArtificialIntelligenceAccess[i]);
            }
            //Delete All Non-native AI Units
            for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--)
            {
                if (!ArtificialIntelligenceAccess[i].guarantee)
                {
                    ArtificialIntelligenceAccess.splice(i, 1);
                }
            }
            //Delete All Non-native Scenery
            scenicList = [];
            //Delete All Barriers
            barrierList = [];

            change = "reiniciar";
        }
        else if (cheatcode.toLowerCase() == "kalbus")
        {
            if (player.name == "Kalbus")
            {
                player.willpower = 10;
                player.memory = 10;
                player.eminence = 0;
                player.knowledge = 10;
                Inventory.push([new Item("wizardGown", X, Y), 1], [new Item("frostWind", X, Y), 1]);
            }
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
        else if (cheatcode == "masDeCincuenta")
        {
            player.level = 51;
        }
        else if (cheatcode == "questData")
        {
            console.log(quests);
        }
        else if (cheatcode == "googleIsMyHusbandCheatingOnMeWithPirates?")
        {
            if (quests.aNobleConspiracyQuest == false && quests.matrimonyTorStambjordCompletionStyle == "marriage")
            {
                quests.aNobleConspiracyQuest = true;
                quests.activeQuests.push({name: "A Noble Conspiracy", description: "You have witnessed evidence that The Jarl of Venning permits piratry in exchange for a cut of the loot."});
            }
        }
        else if (cheatcode == "googleIsMySistersHusbandCheatingOnHerWithPirates?")
        {
            if (quests.aNobleConspiracyQuest == false && quests.matrimonyTorStambjordCompletionStyle != "marriage")
            {
                quests.aNobleConspiracyQuest = true;
                quests.activeQuests.push({name: "A Noble Conspiracy", description: "You have witnessed evidence that The Jarl of Venning permits piratry in exchange for a cut of the loot."});
            }
        }
        else if (cheatcode.toLowerCase() == "toggleautosave")
        {
            if (player.autosaveEnabled)
            {
                alert("Autosaving Disabled!");
                player.autosaveEnabled = false;
            }
            else
            {
                alert("Autosaving Enabled!");
                player.autosaveEnabled = true;
            }
        }
        else if (cheatcode.toLowerCase() == "saverate")
        {
            var saveRateManual = prompt("Set the rate at which the game downloads an autosave file to your computer in terms of seconds. If you do not want autosaving use the cheat 'toggleAutosave'.");
            if (saveRateManual >= 180)
            {
                player.autosaveFrequency = saveRateManual;
                alert("The game will now make an autosave every " + saveRateManual + " seconds.")
            }
            else
            {
                player.autosaveFrequency = 200;
                alert("Input too small, save rate set to default. (minimum input: 180 seconds)")
            }
        }
        else if (cheatcode.toLowerCase() == "tellarmour")
        {
            alert("Armour Rating [ " + player.armourTotal + " ]");
        }
        else if (cheatcode.toLowerCase() == "tellweight")
        {
            alert("Weight Carried [ " + player.carryWeight + " ]");
        }
        else if (cheatcode.toLowerCase() == "thisgameismissingsomething")
        {
            player.totalSkillPoints -= player.constitution;
            player.constitution = 0;
            player.strength = 20;
            player.health = player.healthMAX;
            if (machineGunCrossbow == false)
            {
                Inventory = [];
                Inventory.push([new Item("crossbow", false, false), 1]);
                Inventory.push([new Item("steelBolt", false, false), 501]);
                machineGunCrossbow = true;
            }
        }
        else if (cheatcode == "ohSayCanYouSeeByTheDawn'sEarlyLight" && player.name == "Big Sister" || cheatcode == "ohSayCanYouSeeByTheDawn'sEarlyLight" && player.name == "Big Brother" || cheatcode == "ohSayCanYouSeeByTheDawn'sEarlyLight" && player.name == "Uncle Sam" || cheatcode == "whoseBroadStripesAndBrightStarsThroughThePerilousFight" && player.name == "Uncle Sam" || cheatcode == "ohSayCanYouSeeByTheDawn'sEarlyLight" && player.name == "Aunt Sue" || cheatcode == "whoseBroadStripesAndBrightStarsThroughThePerilousFight" && player.name == "Aunt Sue")
        {
            Inventory.push([new Item("m16Carbine", false, false), 1]);
            Inventory.push([new Item("m16CarbineClip", false, false), 25]);
        }
        else if (cheatcode.toLowerCase() == "clearitems")
        {
            worldItems = [];
        }
    }
}