/**
 * Created by skyeguy on 1/22/17.
 */

//THIS FUNCTION IS FUNCTIONALLY THE BACK BUTTON TO THE MAIN MENU
function goToMain()
{
    if (gameState != "mainMenu" && gameState != "characterBuilder")
    {
        theme.play();
        gameState = "mainMenu";
        requestAnimationFrame(mainMenuLoop, CCC);
    }
}

//sleep function
function sleep(safe)
{
    if (player.insomnia == false)
    {
        var durationOfSleep = prompt("For how many hours would you like to sleep?");
        var dOS = Number(durationOfSleep);

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
                if (dOS > 10)
                {
                    player.sleep = player.totalSleep;
                    player.sleep += 1000000000;
                }
                else
                {
                    var sleepChange;
                    if (dOS >= 9)
                    {
                        sleepChange = dOS * 7;
                    }
                    else if (dOS >= 6)
                    {
                        sleepChange = dOS * 3;
                    }
                    else
                    {
                        sleepChange = dOS * 2;
                    }
                    player.sleep += sleepChange;
                    console.log(player.sleep + " + " + sleepChange + " = " + (player.sleep + sleepChange));
                }

                //this is where if you are sleeping in an untraditional way you could be ambushed and will certainly be "sore" in the morning.
                if (safe == false)
                {
                    //todo add potential monster/enemy ambush and add soreness which will weaken constitution and dexterity and ranged and strength and endurance and all magic skills except knowledge by - 1 //booble
                }
            }
        }
    }
}

function getTimeSpeed(percentage)
{
    if (percentage == true)
    {
        timeSpeed = 1;
    }
    else
    {
        timeSpeed = percentage;
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
        if (gameState == "active")
        {
            timePlayed += 0.1 * timeSpeed;
            player.totalTimePlayed = timePlayed;
        }
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

    if (seasonOfYear == 0)
    {
        currentSeason = "Harvest";
    }
    else if (seasonOfYear == 1)
    {
        currentSeason = "Frost";
    }
    else if (seasonOfYear == 2)
    {
        currentSeason = "Bounty";
    }
    else if (seasonOfYear == 3)
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
var mushBlurRot2 = 0;
var mushStretchX2 = 9;
var mushStretchY2 = 9;
var mushMoovX = 0;
var mushMoovY = 0;

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

        if (player.inebriation > 3 * (100 + (3 * player.getToughness())) && player.gender == "Male" || player.inebriation >= 1.5 * (100 + (1.5 * player.getToughness())) && player.gender != "Male" || player.raceName == "Sylkeem" && player.inebriation >= 0.5 * (100 + (1.5 * player.getToughness()))) //Men and women get drunk at different rates
        {
            XXX.beginPath();
            XXX.save();
            XXX.translate(drunkScreenShift, 0);
            XXX.scale(1.1, 1);
            XXX.globalAlpha = 0.45;
            XXX.drawImage(CCC, -60, 0);
            XXX.restore();

            if (player.inebriation >= 5 * (100 + (3 * player.getToughness())) && player.gender == "Male" || player.inebriation >= 3 * (100 + (1.5 * player.getToughness())) && player.gender != "Male"|| player.raceName == "Sylkeem" && player.inebriation >= 1 * (100 + (1.5 * player.getToughness()))) //Men and women get drunk at different rates
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

                if (player.inebriation >= 8 * (100 + (3 * player.getToughness())) && player.gender == "Male" || player.inebriation >= 6.5 * (100 + (1.5 * player.getToughness())) && player.gender != "Male"|| player.raceName == "Sylkeem" && player.inebriation >= 3 * (100 + (1.5 * player.getToughness()))) //Men and women get drunk at different rates
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
        mushBlurRot += 1/360 * Math.PI;
        mushStretchX = mushStretch[Math.floor(Math.random() * 7)];
        mushStretchY = mushStretch[Math.floor(Math.random() * 7)];

        XXX.beginPath();
        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(mushStretchX, mushStretchY);
        XXX.rotate(mushBlurRot);
        XXX.globalAlpha = 0.4;
        XXX.drawImage(mushBlur, -1/2 * mushBlur.width, -1/2 * mushBlur.height);
        XXX.restore();
    }

    if (player.haeflowerTrip)
    {
         mushBlurRot2 += 20/360 * Math.PI;
         mushStretchX2 = 8 + Math.floor(Math.random() * 20);
         mushStretchY2 = 8 + Math.floor(Math.random() * 20);

         XXX.beginPath();
         XXX.save();
         XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
         XXX.scale(mushStretchX2, mushStretchY2);
         XXX.rotate(mushBlurRot2);
         XXX.globalAlpha = 0.4;
         XXX.drawImage(rainSpin, -1/2 * rainSpin.width, -1/2 * rainSpin.height);
         XXX.restore();

        mushBlurRot -= 10/360 * Math.PI;
        mushStretchX = 8 + Math.floor(Math.random() * 20);
        mushStretchY = 8 + Math.floor(Math.random() * 20);

        XXX.beginPath();
        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(mushStretchX, mushStretchY);
        XXX.rotate(mushBlurRot);
        XXX.globalAlpha = 0.4;
        XXX.drawImage(rainblur, -1/2 * rainblur.width, -1/2 * rainblur.height);
        XXX.restore();
    }

    if (player.bahabTrip)
    {
        mushBlurRot2 -= 80/360 * Math.PI;
        mushStretchX2 = 17 + Math.floor(Math.random() * 20);
        mushStretchY2 = 17 + Math.floor(Math.random() * 20);

        XXX.beginPath();
        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(mushStretchX2, mushStretchY2);
        XXX.rotate(mushBlurRot2);
        XXX.globalAlpha = 0.3;
        XXX.drawImage(stic, 160, 392, 212, 206, -1/2 * 212, -1/2 * 206, 212, 206);
        XXX.restore();

        mushBlurRot += 130/360 * Math.PI;

        mushStretchX = 1 + Math.floor(Math.random() * 4);
        mushStretchY = 1 + Math.floor(Math.random() * 4);

        for (var mushdog = 0; mushdog < ArtificialIntelligenceAccess.length; mushdog++)
        {
            var mushydog = Math.random();
            var mushdogg = ArtificialIntelligenceAccess[mushdog];

            if (mushydog < 0.25)
            {
                XXX.beginPath();
                XXX.save();
                //XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.translate(X + 1/2 * CCC.width - mushdogg.X, Y + 1/2 * CCC.height - mushdogg.Y);
                XXX.scale(mushStretchX, mushStretchY);
                XXX.rotate(mushBlurRot);
                XXX.globalAlpha = 0.86;
                XXX.drawImage(stic, 22, 102, 66, 57, -1/2 * 66 * mushdogg.alphaSize, -1/2 * 57 * mushdogg.alphaSize, 66 * mushdogg.alphaSize, 57 * mushdogg.alphaSize);
                XXX.restore();
            }
            else if (mushydog < 0.50)
            {
                XXX.beginPath();
                XXX.save();
                //XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.translate(X + 1/2 * CCC.width - mushdogg.X, Y + 1/2 * CCC.height - mushdogg.Y);
                XXX.scale(mushStretchX, mushStretchY);
                XXX.rotate(mushBlurRot);
                XXX.globalAlpha = 0.86;
                XXX.drawImage(stic, 22, 161, 66, 57, -1/2 * 66 * mushdogg.alphaSize, -1/2 * 57 * mushdogg.alphaSize, 66 * mushdogg.alphaSize, 57 * mushdogg.alphaSize);
                XXX.restore();
            }
            else if (mushydog < 0.75)
            {
                XXX.beginPath();
                XXX.save();
                //XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.translate(X + 1/2 * CCC.width - mushdogg.X, Y + 1/2 * CCC.height - mushdogg.Y);
                XXX.scale(mushStretchX, mushStretchY);
                XXX.rotate(mushBlurRot);
                XXX.globalAlpha = 0.86;
                XXX.drawImage(stic, 25, 221, 66, 57, -1/2 * 66 * mushdogg.alphaSize, -1/2 * 57 * mushdogg.alphaSize, 66 * mushdogg.alphaSize, 57 * mushdogg.alphaSize);
                XXX.restore();
            }
            else if (mushydog <= 1)
            {
                XXX.beginPath();
                XXX.save();
                //XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.translate(X + 1/2 * CCC.width - mushdogg.X, Y + 1/2 * CCC.height - mushdogg.Y);
                XXX.scale(mushStretchX, mushStretchY);
                XXX.rotate(mushBlurRot);
                XXX.globalAlpha = 0.86;
                XXX.drawImage(stic, 26, 286, 66, 57, -1/2 * 66 * mushdogg.alphaSize, -1/2 * 57 * mushdogg.alphaSize, 66 * mushdogg.alphaSize, 57 * mushdogg.alphaSize);
                XXX.restore();
            }
        }

        mushMoovX += (14 - Math.random() * 28);
        mushMoovY += (14 - Math.random() * 28);

        if (mushMoovX > 128)
        {
            mushMoovX = 128;
        }
        if (mushMoovX < 0)
        {
            mushMoovX = 0;
        }

        if (mushMoovY > 131)
        {
            mushMoovY = 131;
        }
        if (mushMoovY < 0)
        {
            mushMoovY = 0;
        }

        XXX.beginPath();
        XXX.save();
        //XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.translate(0, 0);
        //XXX.scale(mushStretchX, mushStretchY);
        //XXX.rotate(mushBlurRot);
        XXX.globalAlpha = 0.4;
        XXX.drawImage(stic, 388 + mushMoovX, 394 + mushMoovY, 83, 75, 0 , 0 , 83 * 17, 75 * 8);
        XXX.restore();

        //uncontrolable movement
        if (player.controlled == false)
        {
            if (Math.random() > 0.22)
            {
                wKey = true;
                if (Math.random() > 0.65 && player.energy >= 1/3 * player.energyMAX)
                {
                    shiftKey = true;
                    sKey = false;
                }
            }

            if (Math.random() > 0.2)
            {
                player.rotation += 1/2 * Math.PI - Math.PI * Math.random();
            }

            if (Math.random() > 0.8)
            {
                spaceKey = false;
            }

            if (Math.random() > 0.97)
            {
                spaceKey = true;
            }
        }
    }

    if (player.etnaVenom)
    {
        mushStretchX2 = 9 + Math.floor(Math.random() * 20);
        mushStretchY2 = 9 + Math.floor(Math.random() * 20);
        mushBlurRot2 = (Math.random() * 2*Math.PI);

        XXX.beginPath();
        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(mushStretchX2, mushStretchY2);
        XXX.rotate(mushBlurRot2);
        XXX.globalAlpha = 0.2;
        XXX.drawImage(etnaDistortion, -1/2 * etnaDistortion.width, -1/2 * etnaDistortion.height);
        XXX.restore();

        mushBlurRot = -(Math.random() * 2*Math.PI);
        mushStretchX = 10 + Math.floor(Math.random() * 20);
        mushStretchY = 10 + Math.floor(Math.random() * 20);

        XXX.beginPath();
        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(mushStretchX, mushStretchY);
        XXX.rotate(mushBlurRot);
        XXX.globalAlpha = 0.2;
        XXX.drawImage(etnaDistortion, -1/2 * etnaDistortion.width, -1/2 * etnaDistortion.height);
        XXX.restore();
    }

    //Dizziness
    if (player.dizzyTime > 0 && gameState == "active" && player.dizzyVI == true)
    {
        dizzySpin += 0.06;
        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(3.1, 3.1);
        XXX.rotate(dizzySpin);
        XXX.globalAlpha = 1;
        XXX.drawImage(CCC, -1/2 * CCC.width, -1/2 * CCC.height);
        XXX.restore();
    }
    else if (player.dizzyTime > 0 && gameState == "active" && player.dizzyV == true)
    {
        dizzySpin += 0.02;
        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(3, 3);
        XXX.rotate(dizzySpin);
        XXX.globalAlpha = 1;
        XXX.drawImage(CCC, -1/2 * CCC.width, -1/2 * CCC.height);
        XXX.restore();
    }
    else if (player.dizzyTime > 0 && gameState == "active" && player.dizzyIV == true)
    {
        dizzySpin += 0.01;
        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(2.9, 2.9);
        XXX.rotate(dizzySpin);
        XXX.globalAlpha = 0.95;
        XXX.drawImage(CCC, -1/2 * CCC.width, -1/2 * CCC.height);
        XXX.restore();
    }
    else if (player.dizzyTime > 0 && gameState == "active" && player.dizzyIII == true)
    {
        if (dizzySpinDir == 0)
        {
            dizzySpin += 0.005;
            if (dizzySpin >= 0.25)
            {
                dizzySpinDir = 1;
            }
        }
        else if (dizzySpinDir == 1)
        {
            dizzySpin -= 0.005;
            if (dizzySpin <= -0.25)
            {
                dizzySpinDir = 0;
            }
        }

        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(2.8, 2.8);
        XXX.rotate(dizzySpin);
        XXX.globalAlpha = 0.95;
        XXX.drawImage(CCC, -1/2 * CCC.width, -1/2 * CCC.height);
        XXX.restore();
    }
    else if (player.dizzyTime > 0 && gameState == "active" && player.dizzyII == true)
    {
        if (dizzySpinDir == 0)
        {
            dizzySpin += 0.0025;
            if (dizzySpin >= 0.2)
            {
                dizzySpinDir = 1;
            }
        }
        else if (dizzySpinDir == 1)
        {
            dizzySpin -= 0.0025;
            if (dizzySpin <= -0.2)
            {
                dizzySpinDir = 0;
            }
        }

        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(1.65, 1.65);
        XXX.rotate(dizzySpin);
        XXX.globalAlpha = 0.95;
        XXX.drawImage(CCC, -1/2 * CCC.width, -1/2 * CCC.height);
        XXX.restore();
    }
    else if (player.dizzyTime > 0 && gameState == "active" && player.dizzyI == true)
    {
        if (dizzySpinDir == 0)
        {
            dizzySpin += 0.0012;
            if (dizzySpin >= 0.1)
            {
                dizzySpinDir = 1;
            }
        }
        else if (dizzySpinDir == 1)
        {
            dizzySpin -= 0.0012;
            if (dizzySpin <= -0.1)
            {
                dizzySpinDir = 0;
            }
        }

        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(1.2, 1.2);
        XXX.rotate(dizzySpin);
        XXX.globalAlpha = 0.95;
        XXX.drawImage(CCC, -1/2 * CCC.width, -1/2 * CCC.height);
        XXX.restore();
    }
    else if (player.dizzyTime > 0 && gameState == "active")
    {
        if (dizzySpinDir == 0)
        {
            dizzySpin += 0.0006;
            if (dizzySpin >= 0.05)
            {
                dizzySpinDir = 1;
            }
        }
        else if (dizzySpinDir == 1)
        {
            dizzySpin -= 0.0006;
            if (dizzySpin <= -0.05)
            {
                dizzySpinDir = 0;
            }
        }

        XXX.save();
        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
        XXX.scale(1.08, 1.08);
        XXX.rotate(dizzySpin);
        XXX.globalAlpha = 0.95;
        XXX.drawImage(CCC, -1/2 * CCC.width, -1/2 * CCC.height);
        XXX.restore();
    }


    //cyberNightVision
    if (player.cyberToggle == 1 || player.cyberToggle == 3) //cyber night vision
    {
        XXX.save();
        XXX.beginPath();
        //XXX.fillStyle = "#53D915";
        XXX.fillStyle = "#CA081C";
        XXX.globalAlpha = 0.4;
        XXX.fillRect(0, 0, CCC.width, CCC.height);
        XXX.restore();
    }

    //Night and Day
    if (timeOfDay != "Day" && player.nightVision == false && gameState != "paused" || player.underground && player.nightVision == false && gameState != "paused")
    {
        var grd;
        var lightsDrawn = 0;
        var filler = "blue";
        NDX.clearRect(0, 0, NDC.width, NDC.height);

        //light up miniNotices at night
        if (player.showStatBars || showTheStatsBars)
        {
            NDX.fillStyle = "rgba(255, 255, 255, 1)";
            NDX.beginPath();
            NDX.rect(0, NDC.height - 137, 21 * player.miniNoticeList.length, 21);
            NDX.fill();

            //light up stats at night
            NDX.fillStyle = "rgba(255, 255, 255, 1)";
            NDX.beginPath();
            NDX.rect(0, NDC.height - 115, 151, 115);
            NDX.fill();
        }

        //light up UI at night
        if (player.showStatBars && mouseY > 526 || !player.showStatBars && mouseY > 526 && mouseX > 151)
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
        if (player.underground)
        {
            nightDarkness = 0.99;
        }
        else if (timeOfDay == "Night")
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

    //cyberTargeting
    if (player.cyberToggle == 2 || player.cyberToggle == 3) //cyber targeting
    {
        if (gameState == "active" || gameState == "stopTime")
        {
            for (var cyberTarget = 0; cyberTarget < ArtificialIntelligenceAccess.length; cyberTarget++)
            {
                if (ArtificialIntelligenceAccess[cyberTarget].alive && ArtificialIntelligenceAccess[cyberTarget].undeath == false && ArtificialIntelligenceAccess[cyberTarget].ghost == false && ArtificialIntelligenceAccess[cyberTarget].petrified == false && ArtificialIntelligenceAccess[cyberTarget].team != "undead")
                {
                    var ddttpp = ArtificialIntelligenceAccess[cyberTarget].DTP();
                    if (ddttpp <= 2250 && ddttpp > 550)
                    {
                        if (ArtificialIntelligenceAccess[cyberTarget].team != "player")
                        {
                            if (ArtificialIntelligenceAccess[cyberTarget].type == "Person" || ArtificialIntelligenceAccess[cyberTarget].type == "Soldier")
                            {
                                if (ArtificialIntelligenceAccess[cyberTarget].disturbed)
                                {
                                    var cyTarX = 1/2 * CCC.width + Math.cos(Math.atan2(Y - ArtificialIntelligenceAccess[cyberTarget].Y, X - ArtificialIntelligenceAccess[cyberTarget].X)) * 70;
                                    var cyTarY = 1/2 * CCC.height + Math.sin(Math.atan2(Y - ArtificialIntelligenceAccess[cyberTarget].Y, X - ArtificialIntelligenceAccess[cyberTarget].X)) * 70;
                                    console.log(cyTarX);
                                    console.log(cyTarY);
                                    XXX.save();
                                    XXX.beginPath();
                                    //XXX.fillStyle = "#53D915";
                                    XXX.fillStyle = "red";
                                    XXX.globalAlpha = 0.65;
                                    XXX.arc(cyTarX, cyTarY, 2, 0, 2*Math.PI);
                                    XXX.fill();
                                    XXX.restore();
                                }
                                else
                                {
                                    var cyTarX = 1/2 * CCC.width + Math.cos(Math.atan2(Y - ArtificialIntelligenceAccess[cyberTarget].Y, X - ArtificialIntelligenceAccess[cyberTarget].X)) * 70;
                                    var cyTarY = 1/2 * CCC.height + Math.sin(Math.atan2(Y - ArtificialIntelligenceAccess[cyberTarget].Y, X - ArtificialIntelligenceAccess[cyberTarget].X)) * 70;
                                    console.log(cyTarX);
                                    console.log(cyTarY);
                                    XXX.save();
                                    XXX.beginPath();
                                    XXX.fillStyle = "#3F82C5";
                                    XXX.globalAlpha = 0.65;
                                    XXX.arc(cyTarX, cyTarY, 2, 0, 2*Math.PI);
                                    XXX.fill();
                                    XXX.restore();
                                }
                            }
                            else
                            {
                                var cyTarX = 1/2 * CCC.width + Math.cos(Math.atan2(Y - ArtificialIntelligenceAccess[cyberTarget].Y, X - ArtificialIntelligenceAccess[cyberTarget].X)) * 70;
                                var cyTarY = 1/2 * CCC.height + Math.sin(Math.atan2(Y - ArtificialIntelligenceAccess[cyberTarget].Y, X - ArtificialIntelligenceAccess[cyberTarget].X)) * 70;
                                console.log(cyTarX);
                                console.log(cyTarY);
                                XXX.save();
                                XXX.beginPath();
                                XXX.fillStyle = "#DE7206";
                                XXX.globalAlpha = 0.65;
                                XXX.arc(cyTarX, cyTarY, 2, 0, 2*Math.PI);
                                XXX.fill();
                                XXX.restore();
                            }
                        }
                        else
                        {
                            var cyTarX = 1/2 * CCC.width + Math.cos(Math.atan2(Y - ArtificialIntelligenceAccess[cyberTarget].Y, X - ArtificialIntelligenceAccess[cyberTarget].X)) * 70;
                            var cyTarY = 1/2 * CCC.height + Math.sin(Math.atan2(Y - ArtificialIntelligenceAccess[cyberTarget].Y, X - ArtificialIntelligenceAccess[cyberTarget].X)) * 70;
                            console.log(cyTarX);
                            console.log(cyTarY);
                            XXX.save();
                            XXX.beginPath();
                            XXX.fillStyle = "#92DEDE";
                            XXX.globalAlpha = 0.65;
                            XXX.arc(cyTarX, cyTarY, 2, 0, 2*Math.PI);
                            XXX.fill();
                            XXX.restore();
                        }
                    }
                }
            }
        }
    }

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

function doPlayerShops()
{
    var shopzList = [];
    if (quests.atalinShopOwned == true)
    {
        for (var j = storageList.length - 1; j >= 0; j--)
        {
            if (storageList[j][0] == "atalinShopCrate" && storageList[j][2].length > 0)
            {
                shopzList.push(j);
                break;
            }
        }
    }

    for (var j = 0; j < shopzList.length; j++)
    {
        if (new Date().getTime() - playerShopsTime >= (60 * 3000 - (player.getCharisma() * 20)))
        {
            var hipo = Math.floor(Math.random() * storageList[shopzList[j]][2].length);
            var cantidad = Math.min(8, Math.round(Math.random() * storageList[shopzList[j]][2][hipo][1]));
            player.earnings += storageList[shopzList[j]][2][hipo][0].buyValue * cantidad;
            storageList[shopzList[j]][2][hipo][1] -= cantidad;
            if (storageList[shopzList[j]][2][hipo][1] <= 0)
            {
                storageList[shopzList[j]][2].splice(hipo, 1);
            }
        }
    }

    if (shopzList.length > 0)
    {
        if (new Date().getTime() - playerShopsTime >= (60 * 3000 - (player.getCharisma() * 20)))
        {
            playerShopsTime = new Date().getTime();
            var hitx = false;
            for (var j = 0; j < bankAccount.length; j++)
            {
                if (bankAccount[j][0].type == "coins")
                {
                    bankAccount[j][1] += player.earnings;
                    player.earnings = 0;
                    hitx = true;
                    break
                }
            }
            if (hitx == false)
            {
                if (bankAccount.length < bankSlots)
                {
                    bankAccount.unshift([new Item("coins", false, false), player.earnings]);
                    player.earnings = 0;
                }
            }
        }
    }
}

function skWithdraw()
{
    var skAmt = prompt("How much would you like to withdraw? Your balance is presently (" + Math.floor(player.silverKeep) + ")");
    if (skAmt > player.silverKeep)
    {
        skAmt = player.silverKeep;
    }

    if (Math.floor(skAmt) > 0)
    {
        player.silverKeep -= Math.floor(skAmt);

        var skCoins = -1;
        for (var sk = 0; sk < Inventory.length; sk++)
        {
            if (Inventory[sk][0].type == "coins")
            {
                skCoins = sk;
                break;
            }
        }

        if (skCoins > -1)
        {
            Inventory[skCoins][1] += Math.floor(skAmt);
        }
        else
        {
            Inventory.unshift([new Item("coins", false, false), Math.floor(skAmt)]);
        }
    }
}

function skDeposit()
{
    var skAmt = prompt("How much would you like to deposit? Your balance is presently (" + Math.floor(player.silverKeep) + ")");
    var skCoins = -1;
    var skInvAmt = 0;

    if (Math.floor(skAmt) > 0)
    {
        for (var sk = 0; sk < Inventory.length; sk++)
        {
            if (Inventory[sk][0].type == "coins")
            {
                skCoins = sk;
                skInvAmt = Inventory[sk][1];
                if (skAmt > Inventory[sk][1])
                {
                    skAmt = Inventory[sk][1];
                }
                break;
            }
        }

        if (skCoins > -1)
        {
            if (skInvAmt <= Math.floor(skAmt))
            {
                Inventory.splice(skCoins, 1);
            }
            else
            {
                Inventory[skCoins][1] -= Math.floor(skAmt);
            }
            player.silverKeep += Math.floor(skAmt);
        }
    }
}

function skLoan()
{
    var skAmt = prompt("How much would you like to borrow? You are permitted as much as (" + Math.max(0, Math.floor((player.creditRating * 500) - player.debt)) + ") at an interest rate of " + (player.interestRate * 100) + "%");
    if (Math.floor(skAmt) > 0)
    {
        if (Math.floor(skAmt) <= ((player.creditRating * 500) - player.debt))
        {
            player.debt += Math.floor(skAmt);

            var skCoins = -1;
            for (var sk = 0; sk < Inventory.length; sk++)
            {
                if (Inventory[sk][0].type == "coins")
                {
                    skCoins = sk;
                    break;
                }
            }

            if (skCoins > -1)
            {
                Inventory[skCoins][1] += Math.floor(skAmt);
            }
            else
            {
                Inventory.unshift([new Item("coins", false, false), Math.floor(skAmt)]);
            }
        }
    }
}

function skRepay()
{
    var skAmt = prompt("How much would you like to repay? You presently owe (" + Math.ceil(player.debt) + ")");
    var skCoins = -1;
    var skInvAmt = 0;


    if (Math.floor(skAmt) > 0)
    {
        for (var sk = 0; sk < Inventory.length; sk++)
        {
            if (Inventory[sk][0].type == "coins")
            {
                skCoins = sk;
                skInvAmt = Inventory[sk][1];
                if (skAmt > Inventory[sk][1])
                {
                    skAmt = Inventory[sk][1];
                }
                break;
            }
        }

        if (skCoins > -1)
        {
            if (skInvAmt <= skAmt)
            {
                Inventory.splice(skCoins, 1);
            }
            else
            {
                Inventory[skCoins][1] -= skAmt;
            }
            if (skAmt > player.debt)
            {
                player.silverKeep += Math.floor(skAmt - player.debt);
                skAmt = player.debt;
            }
            player.creditRating += (skAmt / 5000);
            player.debt -= skAmt;
        }
    }
}

function skBanking()
{
    if (player.debt > 0 || player.silverKeep > 0)
    {
        if (new Date().getTime() - skIntTime >= (60 * 1000)) //once per minute
        {
            skIntTime = new Date().getTime();

            if (player.debt > 0)
            {
                player.debt += (player.debt * (player.interestRate / 240));
                if (player.debt >= (1.2 * (player.creditRating * 500)))
                {
                    if (player.creditRating >= 0.05)
                    {
                        player.creditRating -= 0.05
                    }
                    else
                    {
                        player.creditRating = 0;
                    }
                }
            }
            if (player.silverKeep > 0)
            {
                if (player.debt < (1.2 * (player.creditRating * 500)))
                {
                    player.silverKeep += player.silverKeep * (0.03 / 240);
                }
            }
        }
    }
}

function taxes()
{
    if (new Date().getTime() - quests.taxTime >= 12000)
    {
        quests.taxTime = new Date().getTime();
        //Átalin
        if (uniqueChars.basilioAltezorLDS == false && player.raceName == "Nirwaden" && player.title == "Nobility" && player.nirwadenFaction > -50)
        {
            if (quests.atalinTournyHosted == true)
            {
                quests.atalinTaxes += (19.95 / 9);
            }
            else
            {
                quests.atalinTaxes += (15.94 / 9); //bountiful/large
            }
        }
        //Teshir
        if (uniqueChars.OrjovTorLDS == false && player.raceName == "Freynor" && player.title == "Nobility" && quests.matrimonyTorStambjordCompletionStyle != "marriage" && player.freynorFaction > -50 || quests.atalinTeshirAnnexed == true)
        {
            if (quests.atalinTeshirAnnexed == true)
            {
                if (quests.atalinSisterJarl == true)
                {
                    quests.teshirTaxes += (7.22 / 9);
                }
                else
                {
                    quests.teshirTaxes += (4.13 / 9);
                }
            }
            else
            {
                quests.teshirTaxes += (6.22 / 9); //bountiful/medium
            }
        }
    }
}

function decayer()
{
    if (new Date().getTime() - decayTime > 6000)
    {
        decayTime = new Date().getTime();

        for (var l = 0; l < worldItems.length; l++)
        {
            if (worldItems[l][0].decayable == true)
            {
                if (worldItems[l][0].decay > worldItems[l][0].decayLimit)
                {
                    worldItems.push([new Item(worldItems[l][0].decayObjective, worldItems[l][0].X, worldItems[l][0].Y), worldItems[l][1]])
                    worldItems.splice(l, 1);
                    break;
                }
                else
                {
                    worldItems[l][0].decay += 1;
                }
            }
        }
    }
}

function miniEvent()
{
    //Assassin that comes to kill the player
    if (player.debt >= (2 * (player.creditRating * 500)) || quests.retaliation == true)
    {
        if (new Date().getTime() - player.timeTillAssassinAttack >= 29 * 60 * 1000)
        {
            player.timeTillAssassinAttack = new Date().getTime();
            quests.retaliation = false;

            var rrnnddm = Math.random();
            ArtificialIntelligenceAccess.push(new Unit(X + Math.cos(2* Math.PI * rrnnddm) * 900, Y + Math.sin(2* Math.PI * rrnnddm) * 900, "Soldier", false, "Assassin", {race: "Orgell", faction: "Assassin", con: 4, speed: 1.7, outfit: ["assassinWrappings", 0], weapon: ["thenganDagger", [6, 6], 2, 17, 1.1], ranged: [false, "arrow", 11, 2100, 11, 11, 0, "poisonII", 2.2], patrolStops: 0, patrolLoop: false, route:[[0, 0]]}));
        }
    }
}


function logRotatedCoords(cx, cy, x, y, angle)
{
    var nnx;
    var nny;
    var radians = (Math.PI / 180) * angle,
    cos = Math.cos(radians),
    sin = Math.sin(radians),
    nnx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
    nny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nnx, nny];
}

function pDist(x, y, x1, y1, x2, y2)
{
    var A = x - x1;
    var B = y - y1;
    var C = x2 - x1;
    var D = y2 - y1;

    var dot = A * C + B * D;
    var len_sq = C * C + D * D;
    var param = -1;
    if (len_sq != 0) //in case of 0 length line
        param = dot / len_sq;

    var xx, yy;

    if (param < 0) {
        xx = x1;
        yy = y1;
    }
    else if (param > 1) {
        xx = x2;
        yy = y2;
    }
    else {
        xx = x1 + param * C;
        yy = y1 + param * D;
    }

    var dx = x - xx;
    var dy = y - yy;
    return (dx * dx + dy * dy);
    //Math.sqrt();
}

function degrees(radians)
{
    return radians * (180/Math.PI);
}

function radians(degrees)
{
    return degrees * Math.PI / 180;
}

function have(itemType, quantity) //checks if the player has more than or as much as a specified amoun of a particular item
{
    var iHasIt = false;
    for (var iHave = 0; iHave < Inventory.length; iHave++)
    {
        if (Inventory[iHave][0].type == itemType && Inventory[iHave][1] >= quantity)
        {
            iHasIt = true;
            break;
        }
    }
    return iHasIt;
}

function lack(itemType, quantity) //checks if the player has less that a certain amount of something
{
    var hasALackDe = true;
    for (var iLack = 0; iLack < Inventory.length; iLack++)
    {
        if (Inventory[iLack][0].type == itemType && Inventory[iLack][1] >= quantity)
        {
            hasALackDe = false;
        }
    }
    return hasALackDe;
}

function take(itemType, quantity) //takes away items in a certain quantity from the player
{
    for (var iHave = 0; iHave < Inventory.length; iHave++)
    {
        if (Inventory[iHave][0].type == itemType && Inventory[iHave][1] > quantity)
        {
            Inventory[iHave][1] -= quantity;
            break;
        }
        else if (Inventory[iHave][0].type == itemType && Inventory[iHave][1] <= quantity)
        {
            Inventory.splice(iHave, 1);
            break;
        }
    }
}

function give(itemType, quantity) //gives items in a certain quantity to the player
{
    var hits = 0;
    for (var iHave = 0; iHave < Inventory.length; iHave++)
    {
        if (Inventory[iHave][0].type == itemType)
        {
            Inventory[iHave][1] += quantity;
            break;
        }
        else
        {
            hits += 1;
        }
    }
    if (hits == Inventory.length)
    {
        Inventory.push([new Item(itemType, false, false), quantity]);
    }
}

function barrierCreator(objxx, objyy)
{
    if (typeof(objxx) != "undefined")
    {
        barrX = (X - mouseX + 1/2 * CCC.width) - objxx;
        barrY = (Y - mouseY + 1/2 * CCC.height) - objyy;
    }
    else
    {
        barrX = (X - mouseX + 1/2 * CCC.width);
        barrY = (Y - mouseY + 1/2 * CCC.height);
    }

    if (lKey == true) //this is a helpful tool for getting coords quickly for making buildings: remember barriers build (bottom right -> top left) For adding roof start in the top left and end in the bottom right
    {
        lKey = false;
        barrW = 10;
        barrH = 10;

        if (typeof(objxx) != "undefined")
        {
            console.log(((X - mouseX + 1/2 * CCC.width) - objxx) + ", " + ((Y - mouseY + 1/2 * CCC.height) - objyy));
        }
        else
        {
            console.log((X - mouseX + 1/2 * CCC.width) + ", " + (Y - mouseY + 1/2 * CCC.height));
        }
    }

    if (zKey == true) //this is a helpful tool for getting coords quickly for making buildings: remember barriers build (bottom right -> top left) For adding roof start in the top left and end in the bottom right
    {
        zKey = false;
        barrW = 10;
        barrH = 10;
    }

    if (rKey)
    {
        rKey = false;

        if (toggleBarrWH == true)
        {
            toggleBarrWH = false;
        }
        else
        {
            toggleBarrWH = true;
        }
    }

    if (tKey)
    {
        tKey = false;
        if (shiftKey)
        {
            if (toggleBarrWH == true)
            {
                barrW = Math.max(1, barrW - 5);
            }
            else
            {
                barrH = Math.max(1, barrH - 5);
            }
        }
        else if (altKey)
        {
            if (toggleBarrWH == true)
            {
                barrW = Math.max(0, barrW - 300);
            }
            else
            {
                barrH = Math.max(0, barrH - 300);
            }
        }
        else
        {
            if (toggleBarrWH == true)
            {
                barrW = Math.max(1, barrW - 1);
            }
            else
            {
                barrH = Math.max(1, barrH - 1);
            }
        }
    }

    if (yKey)
    {
        yKey = false;

        if (shiftKey)
        {
            if (toggleBarrWH == true)
            {
                barrW += 5;
            }
            else
            {
                barrH += 5;
            }
        }
        else if (altKey)
        {
            if (toggleBarrWH == true)
            {
                barrW += 300;
            }
            else
            {
                barrH += 300;
            }
        }
        else
        {
            if (toggleBarrWH == true)
            {
                barrW += 1;
            }
            else
            {
                barrH += 1;
            }
        }
    }

    if (vKey == true)
    {
        vKey = false;

        var storrrBarrr = barrW;
        barrW = barrH;
        barrH = storrrBarrr;

        if (toggleBarrWH == true)
        {
            toggleBarrWH = false;
        }
        else
        {
            toggleBarrWH = true;
        }
    }

    XXX.beginPath();
    XXX.fillStyle = "orange";
    XXX.fillRect(mouseX, mouseY, -barrW, -barrH);

    if (cKey)
    {
        cKey = false;
        if (typeof(objxx) != "undefined")
        {
            console.log('barrierList.push(new Barrier((this.X + ' + barrX + '), (this.Y + ' + barrY + '), ' + barrH + ', ' + barrW + ', true));');
        }
        else
        {
            console.log('barrierList.push(new Barrier((' + barrX + '), (' + barrY + '), ' + barrH + ', ' + barrW + ', true));');
        }
    }
}

function reiniciar()
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