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


    // THIS IS THE BACKGROUND BUILDER (height, width, type, x, y) // The tile coords 0, 0 are at the bottom right corner of Teshir City.
    //Different parts of the world load at different Y values. // maps are 34 by 34 tiles and for somereason the maps are -20 to the left. and + 14 down.
    if (map == "world")
    {
        //Layer -3 (cold temperate region) //mapS3
        if (Y > -34556 && Y < -23654 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s3";
            outlineBuilder( 34, 34, "greenGrass", -20, 82);
            outlineBuilder( 34, 1, "stonePath", 3, 82);
            outlineBuilder( 1, 1, "forest", 3, 82);
            outlineBuilder( 4, 4, "kelltile", 4, 103);
            outlineBuilder( 1, 1, "farmland", 8, 104);
        }
        //Layer -2 (cold temperate region)//mapS2
        if (Y > -24704 && Y < -13476 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s2";
            outlineBuilder( 34, 34, "greenGrass", -20, 48);
            outlineBuilder( 34, 1, "stonePath", 3, 48);
            outlineBuilder( 1, 7, "stonePath", -4, 48);
            outlineBuilder( 8, 10, "forest", -13, 62); //little patch of forest in the middle of the kellish northern plains
            outlineBuilder( 1, 5, "forest", -13, 61); //^
            outlineBuilder( 1, 3, "forest", -7, 61); //^
            outlineBuilder( 1, 3, "forest", -12, 60); //^
            outlineBuilder( 5, 1, "forest", -3, 64); //^
            outlineBuilder( 3, 1, "forest", -14, 65); //^
            outlineBuilder( 1, 6, "forest", -10, 70); //^
        }
        //Layer -1 (cold temperate region)//mapS1
        if (Y > -14144 && Y < -3328 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s1";
            outlineBuilder( 34, 34, "greenGrass", -20, 14);
            outlineBuilder( 34, 1, "stonePath", -4, 14);
            //outlineBuilder( 1, 1, "forest", -4, 14);
        }
        //Layer 0 (cold region)//mapCentral
        if (Y > -3919 && Y < 6870 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "central";
            outlineBuilder( 14, 6, "greenGrass", -6, -20);
            outlineBuilder( 14, 6, "greenGrass", -6, 0);
            outlineBuilder( 34, 14, "greenGrass", -20, -20);
            outlineBuilder( 34, 14, "greenGrass", 0, -20);
            outlineBuilder( 6, 6, "stoneWork", -6, -6);
            outlineBuilder( 17, 1, "stonePath", -3, -20);
            outlineBuilder( 1, 20, "stonePath", -6, -3);
            outlineBuilder( 16, 1, "stonePath", -4, -2);
            outlineBuilder( 7, 1, "stonePath", -7, -7);
            outlineBuilder( 1, 8, "stonePath", -7, 0);
            outlineBuilder( 7, 1, "stonePath", -0, -7);
            outlineBuilder( 1, 6, "stonePath", -6, -7);
            outlineBuilder( 1, 13, "stonePath", -20, -7);
            outlineBuilder( 2, 3, "farmland", -7, 1);
        }
        //mapS1 E1
        if (Y > -14144 && Y < -3328 && X < - 2490 && X > -14114) //X1
        {
            elevation = -1;
            region = "s1e1";
            outlineBuilder( 34, 34, "outline", 14, 14); //booble
            outlineBuilder( 1, 22, "forest", 26, 14);
            outlineBuilder( 1, 20, "forest", 28, 15);
            outlineBuilder( 1, 13, "forest", 35, 16);
            outlineBuilder( 1, 9, "forest", 39, 17);
            outlineBuilder( 1, 7, "forest", 41, 18);
            outlineBuilder( 1, 4, "forest", 44, 19);
        }
        //layer 1 (frosty region) anti warmth effects start here
        if (Y > 6290 && Y < 32370) //this is the cold snowy environment //X0
        {
            elevation = 1;
            region = "n1";
            outlineBuilder( 20, 83, "frost", -80, -40); //frost
            outlineBuilder( 80, 83, "snow", -80, -105); //snow
        }
        //mapE2
        if (Y > -3919 && Y < 6870 && X < -12685 && X > -24362) //X1
        {
            elevation = 0;
            region = "e2";
            outlineBuilder( 34, 34, "forest", 48, -20);
            outlineBuilder( 1, 34, "stonePath", 48, -3);
        }
        //mapE1
        if (Y > -3919 && Y < 6870 && X < - 2490 && X > -14114) //X1
        {
            elevation = 0;
            region = "e1";
            outlineBuilder( 34, 22, "forest", 26, -20);
            outlineBuilder( 7, 2, "greenGrass", 26, -18);
            outlineBuilder( 4, 3, "greenGrass", 28, -17);
            outlineBuilder( 1, 2, "greenGrass", 28, -13);
            outlineBuilder( 2, 1, "greenGrass", 26, -20);
            outlineBuilder( 34, 12, "greenGrass", 14, -20);
            outlineBuilder( 7, 1, "greenGrass", 26, -7);
            outlineBuilder( 6, 2, "greenGrass", 26, 3);
            outlineBuilder( 3, 1, "greenGrass", 28, 5);
            outlineBuilder( 4, 1, "greenGrass", 26, 9);
            outlineBuilder( 1, 2, "greenGrass", 26, -4);
            outlineBuilder( 1, 34, "stonePath", 14, -3);
        }
        //mapW1
        if (Y > -3919 && Y < 6870 && X < 17891 && X > 6299) //X-1
        {
            elevation = 0;
            region = "w1";
            outlineBuilder( 14, 6, "crag", -40, -20);
            outlineBuilder( 14, 6, "crag", -40, 0);
            outlineBuilder( 34, 14, "crag", -54, -20);
            outlineBuilder( 34, 14, "crag", -34, -20);
            outlineBuilder( 6, 6, "crag", -40, -6);
        }
        //layer 2 (freezing region)
        if (Y > 31750 && Y < 77360) //this is the freezing arctic environment //X0
        {
            elevation = 2;
            region = "n2";
            outlineBuilder( 150, 83, "snow", -80, -255);
        }
        //layer 3 (freezing region)
        if (Y > 76780) //this is the north Pole... basically. //X0
        {
            elevation = 2;
            region = "n3";
            outlineBuilder( 150, 83, "snow", -80, -405);
        }
    }

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

    //DEAD BODIES
    deadAIOperationsManagement();

    //Layering, Drawing and World Life
    for (var z = 1; z <= 6; z++)
    {
        //STRUCTURES AND SCENERY
        sceneryOperationsManager(z);
        //TODO build structures

        //ITEMS
        ItemOperationsManager(z); //This draws items to the world;

        //ENTITIES
        artificialIntelligenceOperationsManagement(z);
        mainCharacterAccess[0].operations(z); //this activates all of the main character's methods and therefore makes the main character a part of the game.


        //PROJECTILES
        projectileOperationsManagement(z);
        magicOperationsManagement(z);
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
    player.freeze = 1;
    wornAbilities();

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