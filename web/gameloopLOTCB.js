/**
 * Created by skyeguy on 1/22/17.
 */

//THIS IS THE MAIN GAME LOOP
function gameloopOfDestiny(time)
{
    gameLoopNumber += 1;
    XXX.clearRect(0, 0, 1400, 550);

    // Instead of clearing the interface bar is light grey.
    LXX.beginPath();
    LXX.fillStyle = "lightGrey";
    LXX.fillRect(0, 0, 1400, 80);

    //this resets the variable that determines whether or not to light the inv desciption box.
    itemDescriptionBox = false;

    //this fixes the noticed box geting stuck sometimes
    if (gameLoopNumber % 50 == 0)
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

    //FLUX -- this changes the ocean texture back and forth
    seaFlux += 1;
    if (seaFlux > 140)
    {
        seaFlux = 0;
    }

    // THIS IS THE BACKGROUND BUILDER (height, width, type, x, y) // The tile coords 0, 0 are at the bottom right corner of Teshir City.
    //Different parts of the world load at different Y values. // maps are 34 by 34 tiles and for somereason the maps are -20 to the left. and + 14 down.
    worldBuilder();

    //EVENT SENSING
    addEventListener("mousemove", getMousePositionOnWindow); //This enables the sensing of mouse movement for the window.
    LCC.addEventListener("mousemove", findMouse); //This enables the sensing of mouse movement for the lower canvas.
    LCC.addEventListener("mouseout", lowerCanvasMouseCoordsReset); //This obscures the mouse coordinates for the lower canvas when the mouse has left.
    CCC.addEventListener("mousemove", locateMouse); //This enables the sensing of mouse movement for the main canvas.
    CCC.addEventListener("mouseout", mainCanvasMouseCoordsReset); //This obscures the mouse coordinates for the main canvas when the mouse has left.
    addEventListener("mousedown", mouseClicked); //This enables the sensing of mouse clicking.
    addEventListener("mouseup", mouseReleased); //This enables the sensing of the mouse release from clicking.
    addEventListener("keyup", keyReleased); //This enables key release sensing.
    addEventListener("keydown", keyHeld); //This enables key press sensing.
    addEventListener("dblclick", doubleClicker);

    //TIME MANAGER
    timeTracker(time); // this is the tool to keep the game running smoothly
    isMouseReleasedDone(); //This switches mouseReleased to false after 44 miliseconds of it being true.
    //console.log(TTD);

    //CHEATS
    if (gameState == "active" || gameState == "stopTime")
    {
        cheats();
    }

    //MASTER BUILDER
    buildMaster();

    //Layering, Drawing and World Life
    for (var z = 1; z <= 6; z++)
    {
        //STRUCTURES AND SCENERY
        sceneryOperationsManager(z);

        if (z == 1)
        {
            //DEAD BODIES
            deadAIOperationsManagement();
        }

        //ITEMS
        ItemOperationsManager(z); //This draws items to the world;

        //ENTITIES
        artificialIntelligenceOperationsManagement(z);
        mainCharacterAccess[0].operations(z); //this activates all of the main character's methods and therefore makes the main character a part of the game.


        //PROJECTILES
        projectileOperationsManagement(z);
        magicOperationsManagement(z);
    }

    //invisible game barriers (they block player and creature movement and they delete magic and projectiles)
    barrierOperationsManager();
    var barriersToBeDeleted = [];
        //Delete all non-Dev barriers (dev barriers are the ones that are manually placed on each map, while non-dev variables are called into existence each loop by other objects)
    for (var k = 0; k < barrierList.length; k++)
    {
        if (!barrierList[k].dev)
        {
            barriersToBeDeleted.push(k);
        }
    }
    for (var kk = 0; kk < barriersToBeDeleted.length; kk++)
    {
        barrierList.splice(barriersToBeDeleted[kk], 1);
    }
    //set certain player variables. (FINAL PLAYER RESET)
    function wornAbilities()
    {
        if (player.outfitType != "none")
        {
            if (player.outfitType.ability == "heavy")
            {
                player.freeze = Math.max(player.freeze, 3);
            }
            if (player.outfitType.ability == "hefty")
            {
                player.freeze = Math.max(player.freeze, 2);
            }
            if (player.outfitType.ability == "slow")
            {
                player.freeze = Math.max(player.freeze, 1.5);
            }
        }
    }
    player.land = true;
    player.water = false;
    player.freeze = 1;
    wornAbilities();
    player.obscurity = true; //ability to be invisible is reset at the end of every loop.

    //SHOPS/CRAFTING
    shopItemIDSetter();

    //AI name display and interaction with...
    aiIdentify();

    //POP-UPs
    //level up pop-up
    if (popType == "levelup")
    {
        if (new Date().getTime() - popDuration < 3500)
        {
            inGamePopUp("alert", "Congratulations, you have reached level " + player.level + "!", "levelup");
        }
        else if (new Date().getTime() - popDuration < 3600 && new Date().getTime() - popDuration > 3500)
        {
            gameState = "active";
        }
    }
    else if (popType == "magicLevelup")
    {
        if (new Date().getTime() - popDuration < 3500)
        {
            inGamePopUp("alert", "Congratulations, you have reached magic level " + player.magicLevel + "!", "levelup");
        }
        else if (new Date().getTime() - popDuration < 3600 && new Date().getTime() - popDuration > 3500)
        {
            gameState = "active";
        }
    }
    else if (popType == "save1" && confirmed == false)
    {
        save1 = inGamePopUp("confirm", "Are you sure you want to overwrite 'Save 1'?");
        if (save1 != null)
        {
            //console.log(save1);
            if (save1)
            {
                save();
            }
        }
    }
    else if (popType == "save2" && confirmed == false)
    {
        save2 = inGamePopUp("confirm", "Are you sure you want to overwrite 'Save 2'?");
        if (save2 != null)
        {
            //console.log(save2);
            if (save2)
            {
                save();
            }
        }
    }
    else if (popType == "save3" && confirmed == false)
    {
        save3 = inGamePopUp("confirm", "Are you sure you want to overwrite 'Save 3'?");
        if (save3 != null)
        {
            //console.log(save2);
            if (save3)
            {
                save();
            }
        }
    }
    else if (popType == "save4" && confirmed == false)
    {
        save4 = inGamePopUp("confirm", "Are you sure you want to overwrite 'Save 4'?");
        if (save4 != null)
        {
            //console.log(save2);
            if (save4)
            {
                save();
            }
        }
    }
    else if (popType == "save5" && confirmed == false)
    {
        save5 = inGamePopUp("confirm", "Are you sure you want to overwrite 'Save 5'?");
        if (save5 != null)
        {
            if (save5)
            {
                save();
            }
        }
    }
    else if (popType == "save6" && confirmed == false)
    {
        save6 = inGamePopUp("confirm", "Are you sure you want to overwrite 'Save 6'?");
        if (save6 != null)
        {
            if (save6)
            {
                save();
            }
        }
    }
    else if (popType == "save7" && confirmed == false)
    {
        save7 = inGamePopUp("confirm", "Are you sure you want to overwrite 'Save 7'?");
        if (save7 != null)
        {
            if (save7)
            {
                save();
            }
        }
    }
    else if (popType == "save8" && confirmed == false)
    {
        save8 = inGamePopUp("confirm", "Are you sure you want to overwrite 'Save 8'?");
        if (save8 != null)
        {
            if (save8)
            {
                save();
            }
        }
    }
    //Autosave
    autosave();

    //Screen Covers
    gameTimeKeeper();
    screenCover();

    //Turn Off Certain Variables at the very end of the game loop
    clicked = false;

    //UI type text that needs to be read over the night and day cycle
    if (gameState == "active")
    {
        player.showNoticeName();
        player.tellCoordinates();
    }

    if (gameState != "mainMenu" && gameState != "characterBuilder")
    {
        requestAnimationFrame(gameloopOfDestiny, CCC);
    }
}