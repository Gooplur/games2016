/**
 * Created by skyeguy on 1/22/17.
 */

//THIS MODULE IS FOR IMPORTANT FUNCTIONS THAT DO NOT FIT A MAJOR CATEGORY.

// This is the template for building a map out of tiles.
function outlineBuilder(width, length, terrain, extraX, extraY)
{
    for(var i = 0; i < width; i++)
    {
        for(var j = 0; j < length; j++)
        {
            if ((j - 1) * 300 + (extraX * 300) >= -X - 1 * CCC.width && (j - 1) * 300 + (extraX * 300) <= -X + 1 * CCC.width && (i - 1) * 300 + (extraY * 300) >= -Y - 1 * CCC.height && (i - 1) * 300 + (extraY * 300) <= -Y + 1 * CCC.height)
            {
                if (player.cyrinthilimTrip)
                {
                    XXX.save();
                    XXX.globalAlpha = 0.4;
                    XXX.scale(Math.random() * 6 + 1,Math.random() * 6 + 1)
                    XXX.drawImage(blurDots, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    XXX.restore();
                }
                else if (terrain == "outline")
                {
                    XXX.beginPath();
                    XXX.fillStyle = "white";
                    XXX.strokeStyle = "black";
                    XXX.rect((j-1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    XXX.fill();
                    XXX.stroke();
                }
                else if (terrain == "muckgrass")
                {
                    XXX.drawImage(bogGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "muck")
                {
                    XXX.drawImage(bogMuckEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "kellstone")
                {
                    XXX.drawImage(kellStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "kelltile")
                {
                    XXX.drawImage(kellsStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "farmland")
                {
                    XXX.drawImage(farmground, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "greenGrass")
                {
                    XXX.drawImage(lushGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "hotGrass")
                {
                    XXX.drawImage(greenGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "jungle")
                {
                    XXX.drawImage(forestEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "crag")
                {
                    XXX.drawImage(rockyFlatEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "desert")
                {
                    XXX.drawImage(sandyEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "frost")
                {
                    XXX.drawImage(snowyEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "stoneWork")
                {
                    XXX.drawImage(stoneWorkEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "molten")
                {
                    XXX.drawImage(volcanicEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "dryGrass")
                {
                    XXX.drawImage(dryGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "snow")
                {
                    XXX.drawImage(snowEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "stonePath")
                {
                    XXX.drawImage(stonePathEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "arctic")
                {
                    XXX.drawImage(frozenEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "forest")
                {
                    XXX.drawImage(nordWoods, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
            }
        }

    }
}

//sleep function
function sleep(safe)
{
    if (player.insomnia == false)
    {
        var durationOfSleep = prompt("For how many hours would you like to sleep?");
        var dOS = JSON.parse(durationOfSleep);

        if (typeof dOS == "number")
        {
            if (dOS > 0 && dOS < 25)
            {
                sleeperTime += (60 * 60 * dOS);

                //make the screen dark
                player.blindedTime = dOS;
                player.blindedStoreTime = new Date().getTime();

                //reduce drug effects
                //alcohol
                //hangover
                if (player.inebriation >= 3 * (100 + (3 * player.getToughness())))
                {
                    //todo give player a hangover.
                }
                player.inebriation = Math.max(0, player.inebriation - (225 * dOS));
                //todo decrease other drug effect's time as well.

                //Give the player rest -- if you sleep for a reasonable amount of time your get more rest
                var sleepChange;
                if (dOS >= 8)
                {
                    sleepChange = dOS * 3;
                }
                else if (dOS >= 6)
                {
                    sleepChange = dOS * 2.5;
                }
                else
                {
                    sleepChange = dOS * 2;
                }
                //console.log(player.sleep + " + " + sleepChange + " = " + (player.sleep + sleepChange));

                player.sleep += sleepChange;

                //this is where if you are sleeping in an untraditional way you could be ambushed and will certainly be "sore" in the morning.
                if (safe == false)
                {
                    //todo add potential monster/enemy ambush and add soreness which will weaken constitution and dexterity and ranged and strength and endurance and all magic skills except knowledge by - 1 //booble
                }
            }
        }
    }
}

function exists(itemType) //checks players inventory, bank, the ground, and all shops for an item and returns false if the item does not yet exist.
{
    var existz = false;
    //checks all items in inventory
    for (var i = 0; i < Inventory.length; i++)
    {
        if (Inventory[i][0].type == itemType)
        {
            existz = true;
        }
    }

    //checks all items in bank account
    for (var i = 0; i < bankAccount.length; i++)
    {
        if (bankAccount[i][0].type == itemType)
        {
            existz = true;
        }
    }

    //checks all items on the ground
    for (var i = 0; i < worldItems.length; i++)
    {
        if (worldItems[i][0].type == itemType)
        {
            existz = true;
        }
    }

    //checks the shops of all currently active AI
    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
    {
        if (typeof(ArtificialIntelligenceAccess[i].ultra) != "undefined")
        {
            if (typeof(ArtificialIntelligenceAccess[i].ultra.merchant) != "undefined")
            {
                if (ArtificialIntelligenceAccess[i].ultra.merchant == true)
                {
                    for (var j = 0; j < ArtificialIntelligenceAccess[i].ultra.merchandise.length; j++)
                    {
                        if (ArtificialIntelligenceAccess[i].ultra.merchandise[j][0].type == itemType)
                        {
                            existz = true;
                        }
                    }
                }
            }
        }
    }

    if (existz)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function itemPlacer() //places items on the map once each game start given each meets especificas condiciones o circumstancias.
{
    //The Broken Well Quest Items
    //Well Axle (quest item)
    if (!exists("wellAxle") && quests.theBrokenWellQuest != "complete")
    {
        worldItems.push([new Item("wellAxle", -1038, -1899), 1]);
    }
    if (!exists("wellWinch") && quests.theBrokenWellQuest != "complete")
    {
        worldItems.push([new Item("wellWinch", -1351, -1881), 1]);
    }
    if (!exists("wellCord") && quests.theBrokenWellQuest != "complete")
    {
        worldItems.push([new Item("wellCord", -1012, -1944), 1]);
    }
    if (!exists("wellStone") && quests.theBrokenWellQuest != "complete")
    {
        worldItems.push([new Item("wellStone", -1397, -1917), 1]);
    }
}

function gameTimeKeeper()
{
    if (new Date().getTime() - timeRegulator >= 100)
    {
        timeRegulator = new Date().getTime();
        timePlayed += 0.1;
    }
    gameTime = (timePlayed / 0.0625) + sleeperTime;

    gameMinute = Math.floor(gameTime / 60);

    gameHour = Math.floor(gameMinute / 60);

    gameDay = Math.floor(gameHour / 24);

    gameSeason = Math.floor(gameDay / 90); //There are four seasons: Frost, Bounty, Bright, Harvest

    gameYear = Math.floor(gameSeason / 4); //game years are only 360 days made up of four 90 day seasons.

    hourOfDay = Math.floor(gameHour % 24);

    seasonOfYear = Math.floor(gameSeason % 4);

    dayOfYear = Math.floor(gameDay % 360);

    minuteOfHour = Math.floor(gameMinute % 60);

    secondOfMinute = Math.floor(gameTime % 60);

    if (seasonOfYear == 1)
    {
        currentSeason = "Harvest";
    }
    else if (seasonOfYear == 2)
    {
        currentSeason = "Frost";
    }
    else if (seasonOfYear == 3)
    {
        currentSeason = "Bounty";
    }
    else if (seasonOfYear == 4)
    {
        currentSeason = "Bright";
    }

    //determine when night and day is in the different Seasons
    if (currentSeason == "Bright")
    {
        darkestDark = 0.92; //the darkest night is able to be during the season. (how much alpha is the nights maximum)
        if (hourOfDay < 5 || hourOfDay > 21) //gets light at 5AM and gets dark at 9PM
        {
            timeOfDay = "Night";
        }
        else if (hourOfDay == 5)
        {
            timeOfDay = "Dawn";
        }
        else if (hourOfDay == 21)
        {
            timeOfDay = "Dusk";
        }
        else
        {
            timeOfDay = "Day";
        }
    }
    else if (currentSeason == "Harvest")
    {
        darkestDark = 0.95;
        if (hourOfDay < 6 || hourOfDay > 19) //gets light at 7AM and gets dark at 8PM
        {
            timeOfDay = "Night";
        }
        else if (hourOfDay == 6)
        {
            timeOfDay = "Dawn";
        }
        else if (hourOfDay == 19)
        {
            timeOfDay = "Dusk";
        }
        else
        {
            timeOfDay = "Day";
        }
    }
    else if (currentSeason == "Frost")
    {
        darkestDark = 0.98;
        if (hourOfDay < 7 || hourOfDay > 17) //gets light at 8AM and gets dark at 6PM
        {
            timeOfDay = "Night";
        }
        else if (hourOfDay == 7)
        {
            timeOfDay = "Dawn";
        }
        else if (hourOfDay == 17)
        {
            timeOfDay = "Dusk";
        }
        else
        {
            timeOfDay = "Day";
        }
    }
    else if (currentSeason == "Bounty")
    {
        darkestDark = 0.95;
        if (hourOfDay < 6 || hourOfDay > 19) //gets light at 7AM and gets dark at 8PM
        {
            timeOfDay = "Night";
        }
        else if (hourOfDay == 6)
        {
            timeOfDay = "Dawn";
        }
        else if (hourOfDay == 19)
        {
            timeOfDay = "Dusk";
        }
        else
        {
            timeOfDay = "Day";
        }
    }
}

//screen cover variables
var mushBlurRot = 0;
var mushStretch = [9, 9.5, 10, 11, 11.5, 12, 15];
var mushStretchX = 9;
var mushStretchY = 9;
//Screen Covers (includes night and day cycle)
function screenCover()
{
    //Inebriated Blur
    if (player.inebriated == true)
    {
        if (drunkScreenShift < 40 && drunkDirectionSwitch == false)
        {
            drunkScreenShift += 0.1;
        }
        else
        {
            drunkDirectionSwitch = true;
            drunkScreenShift -= 0.1;
        }

        if (drunkScreenShift < -40)
        {
            drunkDirectionSwitch = false;
        }
        //draw double vision.
        XXX.beginPath();
        XXX.save();
        XXX.translate(drunkScreenShift, 0);
        XXX.scale(1.05, 1);
        XXX.globalAlpha = 0.45;
        XXX.drawImage(CCC, -40, 0);
        XXX.restore();

        if (player.inebriation > 3 * (100 + (3 * player.getToughness())))
        {
            XXX.beginPath();
            XXX.save();
            XXX.translate(drunkScreenShift, 0);
            XXX.scale(1.1, 1);
            XXX.globalAlpha = 0.45;
            XXX.drawImage(CCC, -60, 0);
            XXX.restore();

            if (player.inebriation >= 5 * (100 + (3 * player.getToughness())))
            {
                XXX.beginPath();
                XXX.save();
                XXX.translate(drunkScreenShift, 0);
                XXX.scale(1.1, 1);
                XXX.globalAlpha = 0.45;
                XXX.drawImage(CCC, 0, 35);
                XXX.restore();

                XXX.beginPath();
                XXX.save();
                XXX.translate(drunkScreenShift, 0);
                XXX.scale(1.1, 1);
                XXX.globalAlpha = 0.45;
                XXX.drawImage(CCC, 0, -35);
                XXX.restore();

                if (player.inebriation >= 8 * (100 + (3 * player.getToughness())))
                {
                    XXX.beginPath();
                    XXX.save();
                    XXX.translate(0, 0);
                    XXX.scale(3, 3);
                    XXX.globalAlpha = 0.45;
                    XXX.drawImage(CCC, 0, 0);
                    XXX.restore();

                    XXX.beginPath();
                    XXX.save();
                    XXX.translate(0, 0);
                    XXX.scale(2, 2);
                    XXX.globalAlpha = 0.45;
                    XXX.drawImage(CCC, 0, 0);
                    XXX.restore();
                }
            }
        }
    }
    //Cyrinthilim Mushroom Drug Trip
    if (player.cyrinthilimTrip)
    {
        mushBlurRot += 1/360 * Math.PI
        mushStretchX = mushStretch[Math.floor(Math.random() * 7)];
        mushStretchY = mushStretch[Math.floor(Math.random() * 7)];

        //todo add this drug trip!
        XXX.beginPath();
        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(mushStretchX, mushStretchY);
        XXX.rotate(mushBlurRot);
        XXX.globalAlpha = 0.4;
        XXX.drawImage(mushBlur, -1/2 * mushBlur.width, -1/2 * mushBlur.height);
        XXX.restore();

    }

    //Night and Day
    if (timeOfDay != "Day" && player.nightVision == false && gameState != "paused"|| player.underground && player.nightVision == false && gameState != "paused")
    {
        var grd;
        var lightsDrawn = 0;
        var filler = "blue";
        NDX.clearRect(0, 0, NDC.width, NDC.height);

        //light up miniNotices at night
        NDX.fillStyle = "rgba(255, 255, 255, 1)";
        NDX.beginPath();
        NDX.rect(0, NDC.height - 137, 21 * player.miniNoticeList.length, 21);
        NDX.fill();

        //light up stats at night
        NDX.fillStyle = "rgba(255, 255, 255, 1)";
        NDX.beginPath();
        NDX.rect(0, NDC.height - 115, 151, 115);
        NDX.fill();

        //light up UI at night
        if (mouseY > 526)
        {
            NDX.fillStyle = "rgba(255, 255, 255, 1)";
            NDX.beginPath();
            NDX.rect(152, NDC.height - 22, NDC.width - 152, 22);
            NDX.fill();
        }

        if (itemDescriptionBox == true)
        {
            NDX.fillStyle = "rgba(255, 255, 255, 1)";
            NDX.beginPath();
            NDX.rect(152, NDC.height - 90, NDC.width - 152, 68);
            NDX.fill();
        }

        for (var i = 0; i < lights.length; i++)
        {
            if (lights[i].X < X + 1/2 * CCC.width + lights[i].size && lights[i].X > X - 1/2 * CCC.width - lights[i].size && lights[i].Y < Y + 1/2 * CCC.height + lights[i].size && lights[i].Y > Y - 1/2 * CCC.height - lights[i].size || lights[i].showMe == true)
            {
                grd = NDX.createRadialGradient(X - lights[i].X + 1/2 * NDC.width, Y - lights[i].Y + 1/2 * NDC.height, 0, X - lights[i].X + 1/2 * NDC.width, Y - lights[i].Y + 1/2 * NDC.height, lights[i].size);
                filler = "rgba(255, 255, 255, " + lights[i].Alpha + ")";
                grd.addColorStop(0, filler);
                if (lights[i].extraStops)
                {
                    filler = "rgba(255, 255, 255, " + lights[i].Alpha + ")";
                    grd.addColorStop(lights[i].GRD, filler);
                }
                filler = "rgba(255, 255, 255, 0)";
                grd.addColorStop(1, filler);

                NDX.fillStyle = grd;
                NDX.beginPath();
                NDX.arc(X - lights[i].X + 1/2 * NDC.width, Y - lights[i].Y + 1/2 * NDC.height, lights[i].size, 0, 2 * Math.PI);
                NDX.fill();
            }
        }

        //night
        if (timeOfDay == "Night")
        {
            nightDarkness = darkestDark;
        }
        else if (timeOfDay == "Dusk")
        {
            nightDarkness = darkestDark * (minuteOfHour/ 60);
        }
        else if (timeOfDay == "Dawn")
        {
            nightDarkness = darkestDark - ((1/60 * darkestDark) * minuteOfHour);
        }

        //console.log(nightDarkness);
        /* */
        filler = "rgba(0, 0, 0, " + nightDarkness + ")";
        NDX.fillStyle = filler;
        NDX.save();
        NDX.globalCompositeOperation="source-out";
        NDX.beginPath();
        NDX.rect( 0, 0, NDC.width, NDC.height );
        NDX.fill();
        NDX.restore();
        /* */

        XXX.drawImage( NDC, 0, 0 );
    }
    lights = [];

    //Blindness
    if (player.blinded == true)
    {
        XXX.fillStyle = "black";
        XXX.beginPath();
        XXX.fillRect(0, 0, CCC.width, CCC.height);
    }
}

function inGamePopUp(type, message, unique)
{
    gameState = "popUp";
    lowBar = "popUp";
    confirmed = false;

    //popUpBox
    XXX.beginPath();
    XXX.fillStyle = "lightGrey";
    XXX.strokeStyle = "black";
    XXX.rect(400, 175, 600, 150);
    XXX.fill();
    XXX.stroke();

    if (type == "alert")
    {
        if (unique == "levelup")
        {
            XXX.fillStyle = "gold";
            XXX.font = "bold 24px Book Antiqua";
            XXX.textAlign = "center";
            XXX.fillText("LEVEL UP!", 700, 210)
        }

        XXX.fillStyle = "gold";
        XXX.font = "bold 18px Book Antiqua";
        XXX.textAlign = "center";
        XXX.fillText(message, 700, 250);
    }
    else if (type == "confirm")
    {
        //message
        XXX.fillStyle = "black";
        XXX.font = "bold 20px Book Antiqua";
        XXX.textAlign = "center";
        XXX.fillText(message, 700, 210);
        //yes button
        if (mouseX > 510 && mouseX < 640 && mouseY > 260 && mouseY < 300)
        {
            XXX.beginPath();
            XXX.fillStyle = "gold";
            XXX.strokeStyle = "black";
            XXX.rect(510, 300, 140, -40);
            XXX.fill();
            XXX.stroke();

            if (clicked == true)
            {
                clicked = false;
                confirmed = true;
                gameState = "active";
                lowBar = "information";

                return true;
            }
        }
        else
        {
            XXX.beginPath();
            XXX.fillStyle = "grey";
            XXX.strokeStyle = "black";
            XXX.rect(510, 300, 140, -40);
            XXX.fill();
            XXX.stroke();
        }

        XXX.fillStyle = "black";
        XXX.font = "bold 16px Book Antiqua";
        XXX.textAlign = "center";
        XXX.fillText("Yes", 580, 285);

        //no button
        if (mouseX > 750 && mouseX < 880 && mouseY > 260 && mouseY < 300)
        {
            XXX.beginPath();
            XXX.fillStyle = "gold";
            XXX.strokeStyle = "black";
            XXX.rect(880, 300, -140, -40);
            XXX.fill();
            XXX.stroke();

            if (clicked == true)
            {
                clicked = false;
                confirmed = true;
                gameState = "active";
                lowBar = "information";

                return false;
            }
        }
        else
        {
            XXX.beginPath();
            XXX.fillStyle = "grey";
            XXX.strokeStyle = "black";
            XXX.rect(880, 300, -140, -40);
            XXX.fill();
            XXX.stroke();
        }

        XXX.fillStyle = "black";
        XXX.font = "bold 16px Book Antiqua";
        XXX.textAlign = "center";
        XXX.fillText("No", 810, 285);

    }
}