/**
 * Created by skyeguy on 1/22/17.
 */

//THIS IS THE GAME LOOP IN CHARGE OF THE MAIN MENU
function mainMenuLoop()
{
    //Sensing
    addEventListener("mousemove", getMousePositionOnWindow); //This enables the sensing of mouse movement for the window.
    LCC.addEventListener("mousemove", findMouse); //This enables the sensing of mouse movement for the lower canvas.
    LCC.addEventListener("mouseout", lowerCanvasMouseCoordsReset); //This obscures the mouse coordinates for the lower canvas when the mouse has left.
    CCC.addEventListener("mousemove", locateMouse); //This enables the sensing of mouse movement for the main canvas.
    CCC.addEventListener("mouseout", mainCanvasMouseCoordsReset); //This obscures the mouse coordinates for the main canvas when the mouse has left.
    addEventListener("mousedown", mouseClicked); //This enables the sensing of mouse clicking.
    addEventListener("mouseup", mouseReleased); //This enables the sensing of the mouse release from clicking.
    addEventListener("keyup", keyReleased); //This enables key release sensing.
    addEventListener("keydown", keyHeld); //This enables key press sensing.
    addEventListener("dblclick", doubleClicker); //This enables double clicking.
    theme.play();

    //The Main Menu
    if (gameState == "mainMenu") //Main Menu Mode
    {
        //Draw the main menu
        //set background for main canvas
        XXX.beginPath();
        XXX.fillStyle = "white";
        XXX.fillRect(0, 0, 1400, 550);

        //Draw the background image
        XXX.drawImage(themeIMG, 0, 0);

        //set background for lower canvas
        LXX.beginPath();
        LXX.fillStyle = "white";
        LXX.fillRect(0, 0, 1400, 80);
        //Title
        XXX.fillStyle = "black";
        XXX.font = "160px Impact";
        XXX.fillText("Poly Land", 400, 140);
        //Option Buttons.
        newGameButton();
        resumeGameButton();
    }
    else if (gameState == "characterBuilder") //Character Builder Mode
    {
        //set background for main canvas
        XXX.beginPath();
        XXX.fillStyle = "white";
        XXX.fillRect(0, 0, 1400, 550);
        //set background for lower canvas
        LXX.beginPath();
        LXX.fillStyle = "white";
        LXX.fillRect(0, 0, 1400, 80);

        //Draw the background image
        XXX.drawImage(charCreaIMG, 0, 0);//, 1080, 608, 0, 0,  1400 / 180, 550 / 608);
        //Title
        XXX.textAlign = "left";
        XXX.fillStyle = "black";
        XXX.font = "90px Impact";
        XXX.fillText("Character Creation", 330, 90);
        //example character
        exampleGuyList[0].operations();
        //Selectors for:
        selectorList[0].operations(); //race
        selectorList[1].operations(); //gender
        selectorList[2].operations(); //title
        selectorList[3].operations(); //combat style
        selectorList[4].operations(); //game mode
        //begin game button
        applySelectionsButton();
        //character naming button.
        this.namePickerButton(1/2 * CCC.width - (1/2 * 230), 210);

    }
    else if (gameState == "loadSelect") //Load Game Menu
    {
        //set background for main canvas
        XXX.beginPath();
        XXX.fillStyle = "white";
        XXX.fillRect(0, 0, 1400, 550);
        //set background for lower canvas
        LXX.beginPath();
        LXX.fillStyle = "white";
        LXX.fillRect(0, 0, 1400, 80);
        //Draw the background image
        XXX.drawImage(loadGameIMG, 0, 0);
        //Title
        XXX.textAlign = "left";
        XXX.fillStyle = "white"; //"black"
        XXX.font = "90px Impact";
        XXX.fillText("Select a Game to Load", 330, 90);

        //load the game functions
        this.loadClickability = function(x, y, w, h, loadNumber, lowerBar)
        {
            if (lowerBar != true)
            {
                if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h)
                {
                    XXX.beginPath();
                    XXX.fillStyle = "rgba(255,215,0, 0.35)";
                    XXX.lineWidth = "1";
                    XXX.rect(x, y, w, h);
                    XXX.fill();
                    XXX.stroke();
                    //Player Information
                    var getMenuSaveData = localStorage.getItem("save" + loadNumber);
                    var getMenuData = null;
                    if (typeof(getMenuSaveData) != "undefined")
                    {
                        getMenuData = JSON.parse(getMenuSaveData);
                        if (getMenuData != null)
                        {
                            loadType = loadNumber;
                            load();
                            //name
                            XXX.textAlign = "center";
                            XXX.fillStyle = "black";
                            XXX.font = "bold 12px Book Antiqua";
                            XXX.fillText(player.name, (170 * (loadNumber - 1)) + 27.5 + 75, 250);
                            //level
                            XXX.textAlign = "center";
                            XXX.fillStyle = "black";
                            XXX.font = "bold 12px Book Antiqua";
                            XXX.fillText("LV: " + player.level, (170 * (loadNumber - 1)) + 27.5 + 75, 270);
                            XXX.fillText("XP: " + Math.floor(player.experience) + " / " + player.experienceRequiredToLevel, (170 * (loadNumber - 1)) + 27.5 + 75, 290);
                            XXX.fillText("SP: " + (player.getTotalSkillPoints()), (170 * (loadNumber - 1)) + 27.5 + 75, 310);
                            XXX.fillText("MLV: " + player.magicLevel, (170 * (loadNumber - 1)) + 27.5 + 75, 330);
                            XXX.fillText("MXP: " + Math.floor(player.magicalExperience) + " / " + player.magicalExperienceRequiredToLevel, (170 * (loadNumber - 1)) + 27.5 + 75, 350);
                            XXX.fillText("MSP: " + (player.getTotalMagicPoints()), (170 * (loadNumber - 1)) + 27.5 + 75, 370);
                            XXX.fillText("Fame: " + player.fame, (170 * (loadNumber - 1)) + 27.5 + 75, 390);
                            XXX.fillText("Time Played", (170 * (loadNumber - 1)) + 27.5 + 75, 430);
                            XXX.fillText(Math.floor(timePlayed / 3600) + ":" + Math.floor(timePlayed % 3600 / 60) + " (" + Math.floor(timePlayed % 60) + ")", (170 * (loadNumber - 1)) + 27.5 + 75, 445);

                            //Click to load into the game
                            if (clicked == true)
                            {
                                theme.pause();
                                clicked = false;
                                //loadType = loadNumber;
                                gameState = "active";
                                //load();
                                requestAnimationFrame(gameloopOfDestiny, CCC);
                            }
                        }
                        else
                        {
                            XXX.textAlign = "center";
                            XXX.fillStyle = "black";
                            XXX.font = "bold 40px Book Antiqua";
                            XXX.fillText("Empty", (170 * (loadNumber - 1)) + 27.5 + 75, y + 1/2 * h);
                        }
                    }

                }
            }
            else
            {
                if (lMouseX > x && lMouseX < x + w && lMouseY > y && lMouseY < y + h)
                {
                    LXX.beginPath();
                    LXX.fillStyle = "rgba(255,215,0, 0.35)";
                    LXX.lineWidth = "1";
                    LXX.rect(x, y, w, h);
                    LXX.fill();
                    LXX.stroke();

                    if (clicked == true)
                    {
                        theme.pause();
                        clicked = false;
                        loadType = loadNumber;
                        gameState = "active";
                        load();
                        requestAnimationFrame(gameloopOfDestiny, CCC);
                    }
                }
            }
        };
        //autosave
        LXX.beginPath();
        LXX.fillStyle = "lightGrey";
        LXX.lineWidth = "1";
        LXX.rect(0, 0, LCC.width / 2, LCC.height);
        LXX.fill();
        LXX.stroke();
        this.loadClickability(0, 0, 699, LCC.height, "autosave", true);
        LXX.textAlign = "center";
        LXX.fillStyle = "black";
        LXX.font = "bold 65px Book Antiqua";
        LXX.fillText("Autosave", LCC.width / 4, LCC.height * 2 / 3 + 5);
        //quicksave
        LXX.beginPath();
        LXX.fillStyle = "lightGrey";
        LXX.lineWidth = "1";
        LXX.rect(700, 0, LCC.width/2, LCC.height);
        LXX.fill();
        LXX.stroke();
        this.loadClickability(701, 0, 699, LCC.height, "quicksave", true);
        LXX.textAlign = "center";
        LXX.fillStyle = "black";
        LXX.font = "bold 65px Book Antiqua";
        LXX.fillText("Quicksave", LCC.width * 3/ 4, LCC.height * 2 / 3 + 5);
        //load buttons 1-8
        //load save 1;
        //box
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = "1";
        XXX.rect(27.5, 180, 150, 300);
        XXX.fill();
        XXX.stroke();
        this.loadClickability(27.5, 180, 150, 300, 1);
        //Data
        XXX.textAlign = "center";
        XXX.fillStyle = "black";
        XXX.font = "bold 40px Book Antiqua";
        XXX.fillText("Save 1", 27.5 + 75, 230);
        //load save 2;
        //box
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = "1";
        XXX.rect(197.5, 180, 150, 300);
        XXX.fill();
        XXX.stroke();
        this.loadClickability(197.5, 180, 150, 300, 2);
        //Data
        XXX.textAlign = "center";
        XXX.fillStyle = "black";
        XXX.font = "bold 40px Book Antiqua";
        XXX.fillText("Save 2", 197.5 + 75, 230);
        //load save 3;
        //box
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = "1";
        XXX.rect(367.5, 180, 150, 300);
        XXX.fill();
        XXX.stroke();
        this.loadClickability(367.5, 180, 150, 300, 3);
        //Data
        XXX.textAlign = "center";
        XXX.fillStyle = "black";
        XXX.font = "bold 40px Book Antiqua";
        XXX.fillText("Save 3", 367.5 + 75, 230);
        //load save 4;
        //box
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = "1";
        XXX.rect(537.5, 180, 150, 300);
        XXX.fill();
        XXX.stroke();
        this.loadClickability(537.5, 180, 150, 300, 4);
        //Data
        XXX.textAlign = "center";
        XXX.fillStyle = "black";
        XXX.font = "bold 40px Book Antiqua";
        XXX.fillText("Save 4", 537.5 + 75, 230);
        //load save 5;
        //box
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = "1";
        XXX.rect(707.5, 180, 150, 300);
        XXX.fill();
        XXX.stroke();
        this.loadClickability(707.5, 180, 150, 300, 5);
        //Data
        XXX.textAlign = "center";
        XXX.fillStyle = "black";
        XXX.font = "bold 40px Book Antiqua";
        XXX.fillText("Save 5", 707.5 + 75, 230);
        //load save 6;
        //box
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = "1";
        XXX.rect(877.5, 180, 150, 300);
        XXX.fill();
        XXX.stroke();
        this.loadClickability(877.5, 180, 150, 300, 6);
        //Data
        XXX.textAlign = "center";
        XXX.fillStyle = "black";
        XXX.font = "bold 40px Book Antiqua";
        XXX.fillText("Save 6", 877.5 + 75, 230);
        //load save 7;
        //box
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = "1";
        XXX.rect(1047.5, 180, 150, 300);
        XXX.fill();
        XXX.stroke();
        this.loadClickability(1047.5, 180, 150, 300, 7);
        //Data
        XXX.textAlign = "center";
        XXX.fillStyle = "black";
        XXX.font = "bold 40px Book Antiqua";
        XXX.fillText("Save 7", 1047.5 + 75, 230);
        //load save 8;
        //box
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = "1";
        XXX.rect(1217.5, 180, 150, 300);
        XXX.fill();
        XXX.stroke();
        this.loadClickability(1217.5, 180, 150, 300, 8);
        //Data
        XXX.textAlign = "center";
        XXX.fillStyle = "black";
        XXX.font = "bold 40px Book Antiqua";
        XXX.fillText("Save 8", 1217.5 + 75, 230);

        //requestAnimationFrame(gameloopOfDestiny, CCC);
    }


    if (gameState == "mainMenu" || gameState == "characterBuilder" || gameState == "loadSelect")
    {
        requestAnimationFrame(mainMenuLoop, CCC);
    }
}

//OTHER FUNCTIONS THAT ARE FOR THE MAIN MENU

function newGameButton()
{
    if (mouseX > (1/2 * CCC.width) - (1/2 * 300) && mouseX < ((1/2 * CCC.width) - (1/2 * 300)) + 300 && mouseY > 200 && mouseY < 200 + 80)
    {
        this.hoveredOver = true;
    }
    else
    {
        this.hoveredOver = false;
    }
    //draw button
    if (this.hoveredOver == true)
    {
        XXX.beginPath();
        XXX.fillStyle = "gold";
        XXX.lineWidth = 5;
        XXX.strokeStyle = "black";
        XXX.rect((1/2 * CCC.width) - (1/2 * 300), 200, 300, 80);
        XXX.fill();
        XXX.stroke();
    }
    else
    {
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = 5;
        XXX.strokeStyle = "black";
        XXX.rect((1/2 * CCC.width) - (1/2 * 300), 200, 300, 80);
        XXX.fill();
        XXX.stroke();
    }
    //draw text in button
    XXX.fillStyle = "black";
    XXX.font = "40px Impact";
    XXX.fillText("Start New Game", (1/2 * CCC.width) - (1/2 * 255), 255);

    if (this.hoveredOver == true && clicked == true)
    {
        clicked = false;
        gameState = "characterBuilder";
    }
}

function resumeGameButton()
{
    if (mouseX > (1/2 * CCC.width) - (1/2 * 300) && mouseX < ((1/2 * CCC.width) - (1/2 * 300)) + 300 && mouseY > 290 && mouseY < 290 + 80)
    {
        this.hoveredOver = true;
    }
    else
    {
        this.hoveredOver = false;
    }
    //draw button
    if (this.hoveredOver == true)
    {
        XXX.beginPath();
        XXX.fillStyle = "gold";
        XXX.lineWidth = 5;
        XXX.strokeStyle = "black";
        XXX.rect((1/2 * CCC.width) - (1/2 * 300), 290, 300, 80);
        XXX.fill();
        XXX.stroke();
    }
    else
    {
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = 5;
        XXX.strokeStyle = "black";
        XXX.rect((1/2 * CCC.width) - (1/2 * 300), 290, 300, 80);
        XXX.fill();
        XXX.stroke();
    }
    //draw text in button
    XXX.fillStyle = "black";
    XXX.font = "40px Impact";
    XXX.fillText("Resume Game", (1/2 * CCC.width) - (1/2 * 230), 345);

    if (this.hoveredOver == true && clicked == true)
    {
        clicked = false;
        gameState = "loadSelect";
    }
}

function drawExampleCharacter(exX, exY, exRotation) //this is the character example that is shown during the character creator.
{

    this.lLegY = 0;
    this.rLegY = 0;
    this.legSwitch = 0;

    //to put it simply, this function draws two lines that represent the main character's legs.
    this.drawLegs = function()
    {
        XXX.save();
        XXX.translate(exX, exY);
        XXX.rotate(exRotation);
        XXX.strokeStyle ="black";
        XXX.lineWidth = 2;
        XXX.moveTo(-4, 0);
        XXX.lineTo(-4, 0 + this.lLegY);
        XXX.stroke();
        XXX.moveTo(4, 0);
        XXX.lineTo(4, 0 + this.rLegY);
        XXX.stroke();
        XXX.restore();
    };

    //this function draws a circle the color of the character's race with a black border line around it, this acts as the main characters body.
    this.drawBody = function()
    {
        XXX.save();
        XXX.translate(exX, exY);
        XXX.rotate(exRotation);
        XXX.beginPath();
        XXX.lineWidth = 1;
        XXX.arc(0, 0, 10, 0, 2 * Math.PI);
        XXX.strokeStyle = "black";
        XXX.fillStyle = player.race;
        XXX.stroke();
        XXX.fill();
        XXX.restore();
    };

    //draw an example character so the player can see their characters colour change as they look through the different races.
    this.drawArms = function()
    {
        XXX.save();
        XXX.translate(exX, exY);
        XXX.rotate(exRotation);
        XXX.drawImage(polyPNG, 631, 55, 92, 30, -22, -17, 46, 22);
        XXX.restore();
    };

    this.walkWhenHoveredOver = function()
    {
        if (mouseX >= exX - 10 && mouseX <= exX + 10 && mouseY >= exY - 10 && mouseY <= exY + 10)
        {
            this.hoveredOver = true;
        }
        else
        {
            this.hoveredOver = false;
            this.lLegY = 0;
            this.rLegY = 0;
            this.legSwitch = 0;
        }

        if (this.hoveredOver == true)
        {
            // the right leg goes back 25 pixles and the left goes forward 25.
            if (this.lLegY < 23 && this.legSwitch == 0 )
            {
                // this makes the legs extend
                this.lLegY += 11 / (16.75 - (0.17 / 2));
                this.rLegY -= 11 / (16.75 - (0.17 / 2));
                //console.log("left" + " " + self.lLegY + " " + self.rLegY);
            }
            else
            {
                //switch to the right leg forward routine.
                this.legSwitch = 1;
            }

            // the left leg goes back 25 pixles and the right goes forward 25.
            if (this.lLegY > -23 && this.legSwitch == 1)
            {
                // this makes the legs extend
                this.lLegY -= 11 / (16.75 - (0.17 / 2));
                this.rLegY += 11 / (16.75 - (0.17 / 2));
                //console.log("right" + " " + self.lLegY + " " + self.rLegY);
            }
            else
            {
                // switch to the left leg forward routine.
                this.legSwitch = 0;
            }
        }
    };

    this.operations = function()
    {
        this.walkWhenHoveredOver();
        this.drawLegs();
        this.drawBody();
        this.drawArms();
    }
}

//this is the button to begin the game after having built your character. It sets your inventory according to your selections.
function applySelectionsButton()
{

    //DRAW SELF
    if (mouseX > (1/2 * CCC.width) - (1/2 * 300) && mouseX < ((1/2 * CCC.width) - (1/2 * 300)) + 300 && mouseY > 465 && mouseY < 490 + 80)
    {
        this.hoveredOver = true;
    }
    else
    {
        this.hoveredOver = false;
    }
    //draw button
    if (this.hoveredOver == true)
    {
        XXX.beginPath();
        XXX.fillStyle = "gold";
        XXX.lineWidth = 5;
        XXX.strokeStyle = "black";
        XXX.rect((1/2 * CCC.width) - (1/2 * 300), 465, 300, 80);
        XXX.fill();
        XXX.stroke();
    }
    else
    {
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = 5;
        XXX.strokeStyle = "black";
        XXX.rect((1/2 * CCC.width) - (1/2 * 300), 465, 300, 80);
        XXX.fill();
        XXX.stroke();
    }
    //draw text in button
    XXX.fillStyle = "black";
    XXX.font = "40px Impact";
    XXX.fillText("Begin", (1/2 * CCC.width), 520);

    if (this.hoveredOver == true && clicked == true)
    {
        clicked = false;

        //Spells set to empty
        primarySpells = [];
        secondarySpells = [];
        tertiarySpells = [];

        //NOBILITY and ROYALTY have INCREASED versions of their FACTION RELATIONS
        if (player.title == "Nobility" && player.raceName == "Kel" || player.title == "Royalty" && player.raceName == "Kel")
        {
            player.kelFaction = 500; //green (kellish) Chieftain Har
            player.thengarFaction = -500; //brown (thengan) King Wolthgar
            player.freynorFaction = 25; //blue (freydic) King Jirdun
            player.aldrekFaction = 25; //red (aldrekii) Evaraxii Zoteff
            player.orgellFaction = 25; //yellow (orgish) King Lysander
            player.vardanFaction = -15; //black (vardanian) High Count Arlod
            player.cephriteFaction = 25; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
            player.nirwadenFaction = -15; //orange (nirinese) Queen Lelaine
            if (player.title == "Royalty")
            {
                player.endurance = 5;
            }
        }
        else if (player.title == "Nobility" && player.raceName == "Thengar" || player.title == "Royalty" && player.raceName == "Thengar")
        {
            player.kelFaction = -500; //green (kellish) Chieftain Har
            player.thengarFaction = 500; //brown (thengan) King Wolthgar
            player.freynorFaction = 40; //blue (freydic) King Jirdun
            player.aldrekFaction = -5; //red (aldrekii) Evaraxii Zoteff
            player.orgellFaction = -40; //yellow (orgish) King Lysander
            player.vardanFaction = 25; //black (vardanian) High Count Arlod
            player.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
            player.nirwadenFaction = -20; //orange (nirinese) Queen Lelaine
            if (player.title == "Royalty")
            {
                player.strength = 4;
            }
        }
        else if (player.title == "Nobility" && player.raceName == "Freynor" || player.title == "Royalty" && player.raceName == "Freynor")
        {
            player.kelFaction = 25; //green (kellish) Chieftain Har
            player.thengarFaction = 40; //brown (thengan) King Wolthgar
            player.freynorFaction = 500; //blue (freydic) King Jirdun
            player.aldrekFaction = 0; //red (aldrekii) Evaraxii Zoteff
            player.orgellFaction = 0; //yellow (orgish) King Lysander
            player.vardanFaction = 0; //black (vardanian) High Count Arlod
            player.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
            player.nirwadenFaction = -5; //orange (nirinese) Queen Lelaine
            if (player.title == "Royalty")
            {
                player.toughness = 4;

                if (player.gender == "Male")
                {
                    Inventory.push([new Item("freydicRoyalOutfit", false, false), 1]);
                }
                else
                {
                    Inventory.push([new Item("freydicRoyalDress", false, false), 1]);
                }
                Inventory.push([new Item("theNorthernGem", false, false), 1]);
            }
            else if (player.title == "Nobility")
            {
                if (player.gender == "Female")
                {
                    Inventory.push([new Item("fineFreydicOutfitF", false, false), 1]);
                }
                else
                {
                    Inventory.push([new Item("fineFreydicOutfitM", false, false), 1]);
                }
            }
        }
        else if (player.title == "Nobility" && player.raceName == "Aldrek" || player.title == "Royalty" && player.raceName == "Aldrek")
        {
            player.kelFaction = 15; //green (kellish) Chieftain Har
            player.thengarFaction = 0; //brown (thengan) King Wolthgar
            player.freynorFaction = 0; //blue (freydic) King Jirdun
            player.aldrekFaction = 500; //red (aldrekii) Evaraxii Zoteff
            player.orgellFaction = -500; //yellow (orgish) King Lysander
            player.vardanFaction = -20; //black (vardanian) High Count Arlod
            player.cephriteFaction = -500; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
            player.nirwadenFaction = -500; //orange (nirinese) Queen Lelaine
            if (player.title == "Royalty")
            {
                player.ranged = 5;
            }
        }
        else if (player.title == "Nobility" && player.raceName == "Orgell" || player.title == "Royalty" && player.raceName == "Orgell")
        {
            player.kelFaction = 10; //green (kellish) Chieftain Har
            player.thengarFaction = -49; //brown (thengan) King Wolthgar
            player.freynorFaction = 0; //blue (freydic) King Jirdun
            player.aldrekFaction = -500; //red (aldrekii) Evaraxii Zoteff
            player.orgellFaction = 500; //yellow (orgish) King Lysander
            player.vardanFaction = 0; //black (vardanian) High Count Arlod
            player.cephriteFaction = -49; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
            player.nirwadenFaction = -49; //orange (nirinese) Queen Lelaine
            if (player.title == "Royalty")
            {
                player.dexterity = 1;
                player.stamina = 1;
            }
        }
        else if (player.title == "Nobility" && player.raceName == "Vardan" || player.title == "Royalty" && player.raceName == "Vardan")
        {
            player.kelFaction = -20; //green (kellish) Chieftain Har
            player.thengarFaction = 25; //brown (thengan) King Wolthgar
            player.freynorFaction = 0; //blue (freydic) King Jirdun
            player.aldrekFaction = -35; //red (aldrekii) Evaraxii Zoteff
            player.orgellFaction = 0; //yellow (orgish) King Lysander
            player.vardanFaction = 500; //black (vardanian) High Count Arlod
            player.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
            player.nirwadenFaction = 0; //orange (nirinese) Queen Lelaine
            if (player.title == "Royalty")
            {
                player.stamina = 4;
                player.dexterity = 2;
            }
        }
        else if (player.title == "Nobility" && player.raceName == "Cephrite" || player.title == "Royalty" && player.raceName == "Cephrite")
        {
            player.kelFaction = 20; //green (kellish) Chieftain Har
            player.thengarFaction = 0; //brown (thengan) King Wolthgar
            player.freynorFaction = 0; //blue (freydic) King Jirdun
            player.aldrekFaction = -500; //red (aldrekii) Evaraxii Zoteff
            player.orgellFaction = -45; //yellow (orgish) King Lysander
            player.vardanFaction = 0; //black (vardanian) High Count Arlod
            player.cephriteFaction = 500; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
            player.nirwadenFaction = -49; //orange (nirinese) Queen Lelaine
            if (player.title == "Royalty")
            {
                player.knowledge = 4;
                player.willpower = 4;
                player.memory = 2;
            }
            else if (player.title == "Nobility")
            {
                player.knowledge = 3;
                player.memory = 1;
            }
        }
        else if (player.title == "Nobility" && player.raceName == "Nirwaden" || player.title == "Royalty" && player.raceName == "Nirwaden")
        {
            player.kelFaction = 0; //green (kellish) Chieftain Har
            player.thengarFaction = -35; //brown (thengan) King Wolthgar
            player.freynorFaction = 0; //blue (freydic) King Jirdun
            player.aldrekFaction = -500; //red (aldrekii) Evaraxii Zoteff
            player.orgellFaction = -35; //yellow (orgish) King Lysander
            player.vardanFaction = -35; //black (vardanian) High Count Arlod
            player.cephriteFaction = -25; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
            player.nirwadenFaction = 500; //orange (nirinese) Queen Lelaine
            if (player.title == "Royalty")
            {
                player.dexterity = 2;
                player.stamina = 2;
            }
        }
        else if (player.title == "Nobility" && player.raceName == "Nirwaden" || player.title == "Royalty" && player.raceName == "Outlander")
        {
            if (player.title == "Royalty")
            {
                player.skillPoints = 10 + extraSkillPoints;
            }
        }

        //Race and rank based STARTER WEAPONS
        //FIGHTER starting weapon kits.
        if (player.class == "Fighter" && player.raceName == "Thengar")
        {
            if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner")
            {
                Inventory.push([new Item("pickaxe", false, false), 1]);
            }
            else if (player.title == "Tradefolk")
            {
                Inventory.push([new Item("longsword", false, false), 1]);
            }
            else
            {
                Inventory.push([new Item("thenganSwordAndShield", false, false), 1]);
            }
        }
        else if (player.class == "Fighter" && player.raceName == "Vardan")
        {
            if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner")
            {
                Inventory.push([new Item("vardanianAxe", false, false), 1]);
            }
            else if (player.title == "Tradefolk")
            {
                Inventory.push([new Item("vardanianAxeDual", false, false), 1]);
            }
            else if (player.title == "Royalty")
            {
                Inventory.push([new Item("vardanianBattleAxe", false, false), 1]);
            }
            else if (player.title == "Highfolk")
            {
                Inventory.push([new Item("vardanianCleaver", false, false), 1]);
            }
            else if (player.title == "Nobility")
            {
                Inventory.push([new Item("vardanianHeavyCleaver", false, false), 1]);
            }
        }
        else if (player.class == "Fighter" && player.raceName == "Nirwaden")
        {
            if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner")
            {
                Inventory.push([new Item("nirineseSpear", false, false), 1]);
            }
            else if (player.title == "Nobility" || player.title == "Royalty")
            {
                Inventory.push([new Item("nirineseSabre", false, false), 1], [new Item("estoc", false, false), 1]);
                if (player.gender != "Female")
                {
                    Inventory.push([new Item("nirwadenNobleOutfit", false, false), 1]);
                }
                else
                {
                    Inventory.push([new Item("nirwadenNobleDress", false, false), 1]);
                }
            }
            else
            {
                if (player.gender == "Male")
                {
                    Inventory.push([new Item("nirwadenClothingM", false, false), 1]);
                }
                else
                {
                    Inventory.push([new Item("nirwadenClothingF", false, false), 1]);
                }
                Inventory.push([new Item("nirineseSabre", false, false), 1]);
            }
        }
        else if (player.class == "Fighter" && player.raceName == "Freynor")
        {
            if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner")
            {
                Inventory.push([new Item("freydicSpear", false, false), 1]);
            }
            else
            {
                Inventory.push([new Item("freydicSword", false, false), 1]);
            }
        }
        else if (player.class == "Fighter" && player.raceName == "Aldrek")
        {
            Inventory.push([new Item("aldrekiiBlade", false, false), 1]);
        }
        else if (player.class == "Fighter" && player.raceName == "Orgell")
        {
            if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner")
            {
                Inventory.push([new Item("curvedDagger", false, false), 1]);
            }
            else if (player.title == "Tradefolk")
            {
                Inventory.push([new Item("dualCurvedDaggers", false, false), 1]);
            }
            else
            {
                Inventory.push([new Item("katana", false, false), 1]);
            }
        }
        else if (player.class == "Fighter" && player.raceName == "Kel")
        {
            if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner")
            {
                Inventory.push([new Item("kellishSawClub", false, false), 1]);
            }
            else if (player.title == "Tradefolk")
            {
                Inventory.push([new Item("warHammer", false, false), 1]);
            }
            else
            {
                Inventory.push([new Item("kellishClaymore", false, false), 1]);
            }
        }
        else if (player.class == "Fighter" && player.raceName == "Outlander") //This is the general one for all that don't meet a specific exception.
        {
            Inventory.push([new Item("cutlass", false, false), 1]);
        }
        //RANGER starting weapon kit
        if (player.class == "Ranger" && player.raceName == "Aldrek")
        {
            if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner" || player.title == "Tradefolk")
            {
                Inventory.push([new Item("aldrekiiLongbow", false, false), 1], [new Item("arrow", false, false), 25]);
            }
            else
            {
                Inventory.push([new Item("aldrekiiLongbow", false, false), 1], [new Item("aldrekiiArrow", false, false), 50]);
            }
        }
        else if (player.class == "Ranger" && player.raceName == "Nirwaden")
        {
            if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner" || player.title == "Tradefolk")
            {
                //todo add a weak crossbow that can only use a special type of weak bolt and give it to the lower class Nirinese to start with if they are a ranger.
                Inventory.push([new Item("longbow", false, false), 1], [new Item("arrow", false, false), 20]);
                if (player.title == "Tradefolk")
                {
                    if (player.gender == "Male")
                    {
                        Inventory.push([new Item("nirwadenClothingM", false, false), 1]);
                    }
                    else
                    {
                        Inventory.push([new Item("nirwadenClothingF", false, false), 1]);
                    }
                }
            }
            else if (player.title == "Highfolk")
            {
                Inventory.push([new Item("crossbow", false, false), 1], [new Item("steelBolt", false, false), 20]);
                if (player.gender == "Male")
                {
                    Inventory.push([new Item("nirwadenClothingM", false, false), 1]);
                }
                else
                {
                    Inventory.push([new Item("nirwadenClothingF", false, false), 1]);
                }
            }
            else
            {
                Inventory.push([new Item("crossbow", false, false), 1], [new Item("steelBolt", false, false), 55]);
                if (player.gender != "Female")
                {
                    Inventory.push([new Item("nirwadenNobleOutfit", false, false), 1]);
                }
                else
                {
                    Inventory.push([new Item("nirwadenNobleDress", false, false), 1]);
                }
            }
        }
        else if (player.class == "Ranger" && player.raceName == "Outlander")//This is the general one for all that don't meet a specific exception.
        {
            if (player.title == "Vagabond")
            {
                Inventory.push([new Item("musket", false, false), 1], [new Item("blackPowder", false, false), 9], [new Item("bullet", false, false), 9]);
            }
            else if (player.title == "Peasant")
            {
                Inventory.push([new Item("musket", false, false), 1], [new Item("blackPowder", false, false), 56], [new Item("bullet", false, false), 56]);
            }
            else if (player.title == "Commoner")
            {
                Inventory.push([new Item("musket", false, false), 1], [new Item("blackPowder", false, false), 100], [new Item("bullet", false, false), 100]);
            }
            else if (player.title == "Tradefolk")
            {
                Inventory.push([new Item("blunderbuss", false, false), 1], [new Item("blackPowder", false, false), 60], [new Item("bullet", false, false), 300]);
            }
            else if (player.title == "Highfolk")
            {
                Inventory.push([new Item("blunderbuss", false, false), 1], [new Item("blackPowder", false, false), 100], [new Item("bullet", false, false), 500]);
            }
            else
            {
                Inventory.push([new Item("blunderbuss", false, false), 1], [new Item("musket", false, false), 1], [new Item("blackPowder", false, false), 300], [new Item("bullet", false, false), 1100]);
            }
        }
        else if (player.class == "Ranger")//This is the general one for all that don't meet a specific exception.
        {
            if (player.title == "Vagabond")
            {
                Inventory.push([new Item("longbow", false, false), 1], [new Item("arrow", false, false), 18]);
            }
            else if (player.title == "Peasant")
            {
                Inventory.push([new Item("longbow", false, false), 1], [new Item("arrow", false, false), 22]);
            }
            else if (player.title == "Commoner")
            {
                Inventory.push([new Item("longbow", false, false), 1], [new Item("arrow", false, false), 25]);
            }
            else if (player.title == "Tradefolk")
            {
                Inventory.push([new Item("longbow", false, false), 1], [new Item("arrow", false, false), 30]);
            }
            else if (player.title == "Highfolk")
            {
                Inventory.push([new Item("longbow", false, false), 1], [new Item("steelArrow", false, false), 35]);
            }
            else
            {
                Inventory.push([new Item("longbow", false, false), 1], [new Item("steelArrow", false, false), 60]);
            }
        }
        //MAGE starting weapon kit
        //TODO start mages off with a basic level combat magic scroll.
        if (player.class == "Mage" || player.class == "Priest")//This is the general one for all that don't meet a specific exception.
        {
            if (player.raceName != "Cephrite")
            {
                player.knowledge += 1;
                player.willpower += 1;
                player.memory += 1;

                if (player.raceName == "Freynor")
                {
                    Inventory.push([new Item("iceSpikes", false, false), 1]);
                }
                else if (player.raceName == "Vardan")
                {
                    Inventory.push([new Item("drainingI", false, false), 1]);
                }
                else if (player.raceName == "Nirwaden")
                {
                    Inventory.push([new Item("nirwadenPriestRobes", false, false), 1], [new Item("healingPsalms", false, false), 1]);
                    if (player.title == "Nobility" || player.title == "Royalty")
                    {
                        if (player.gender != "Female")
                        {
                            Inventory.push([new Item("nirwadenNobleOutfit", false, false), 1]);
                        }
                        else
                        {
                            Inventory.push([new Item("nirwadenNobleDress", false, false), 1]);
                        }
                    }
                }
                else
                {
                    Inventory.push([new Item("embers", false, false), 1]);
                }
            }
            else
            {
                player.knowledge += 1;
                player.memory += 2;
                Inventory.push([new Item("flyingColours", false, false), 1], [new Item("fireballI", false, false), 1]);
                if (player.title == "Royalty" || player.title == "Nobility")
                {
                    Inventory.push([new Item("shieldingI", false, false), 1]);
                }
            }

            if (player.gamemode == "veteran" || player.gamemode == "protagonist")
            {
                Inventory.push([new Item("shieldingII", false, false), 1], [new Item("fireHands", false, false), 1], [new Item("frostWind", false, false), 1], [new Item("summonWolf", false, false), 1]);
                if (player.gamemode == "protagonist")
                {
                    Inventory.push([new Item("sanctuary", false, false), 1]);
                    player.magicLevel += 14;
                    player.magicalSkillPoints += 28;
                    player.totalMagicPoints += 28;
                }
                else
                {
                    player.magicLevel += 8;
                    player.magicalSkillPoints += 16;
                    player.totalMagicPoints += 16;
                }
            }
        }
        else
        {
            if (player.gamemode == "veteran" || player.gamemode == "protagonist")
            {
                if (player.gamemode == "protagonist")
                {
                    player.level += 14;
                    player.skillPoints += 56;
                    player.totalSkillPoints += 56;

                    if (player.class == "Ranger")
                    {
                        Inventory.push([new Item("longbow", false, false), 1], [new Item("steelArrow", false, false), 200]);
                    }
                }
                else
                {
                    player.level += 9;
                    player.skillPoints += 36;
                    player.totalSkillPoints += 36;

                    if (player.class == "Ranger")
                    {
                        Inventory.push([new Item("longbow", false, false), 1], [new Item("arrow", false, false), 100]);
                    }
                }
            }
        }

        //Special bonuses for some races
        if (player.raceName == "Aldrek")
        {
            player.baseThirst = 35;
        }
        else if (player.raceName == "Freynor")
        {
            player.baseWarmth = 200;
        }
        else if (player.raceName == "Orgell")
        {
            player.baseThirst = 25;
            player.baseHunger = 55;
        }
        else if (player.raceName == "Kel")
        {
            player.baseHunger = 60;
        }
        else if (player.raceName == "Vardan")
        {
            player.sleepMAX = 48;
        }

        //Base survival stats significantly boosted for protagonist mode
        if (player.gamemode == "protagonist")
        {
            player.baseThirst = player.baseThirst * 4;
            player.baseHunger = player.baseHunger * 4;
            player.baseWarmth = player.baseWarmth * 4;
            player.sleepMAX = player.sleepMAX * 4;
        }

        //reset stats.
        player.setBaseStats();
        player.energy = player.energyMAX;
        player.health = player.healthMAX;
        player.will = player.willMAX;
        player.warmth = player.warmthMAX;
        player.thirst = player.thirstMAX;
        if (player.gamemode == "protagonist")
        {
            player.hunger = player.hungerMAX;
        }

        //set starting areas
        if (player.raceName == "Freynor")
        {
            //Freynor starting area is the default
            if (player.title == "Nobility")
            {
                X = -90;
                Y = 467;
            }
        }
        else if (player.raceName == "Kel")
        {
            X = -1297;
            Y = -30784;
        }
        else if (player.raceName == "Thengar")
        {
            X = 51861;
            Y = -8577;
        }
        //Actually start the game here.
        theme.pause();
        gameState = "active";
        requestAnimationFrame(gameloopOfDestiny, CCC);
    }

}

function Selector(bX, bY, type, selNumMAX)
{

    var selectNumber = 0;

    this.drawSelf = function()
    {
        //Draw Left Scroller
        XXX.drawImage(polyPNG, 1, 735, 11, 30, bX - 11, bY, 6, 32);
        //Draw Name Display
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = 1;
        XXX.strokeStyle = "black";
        XXX.rect(bX, bY, 210, 30);
        XXX.fill();
        XXX.stroke();
        //Draw Right Scroller
        XXX.drawImage(polyPNG, 11, 735, 11, 30, bX +214, bY, 6, 32);
    };

    this.scroll = function()
    {
        //left Scroll
        if (mouseX < bX && mouseX >= bX - 13 && mouseY > bY && mouseY < bY + 30 && clicked == true)
        {
            clicked = false;
            selectNumber -= 1;
        }
        else if (mouseX > bX + 210 && mouseX <= bX + 223 && mouseY > bY && mouseY < bY + 30 && clicked == true)
        {
            clicked = false;
            selectNumber += 1;
        }

        if (selectNumber < 0)
        {
            selectNumber = selNumMAX;
        }
        else if (selectNumber > selNumMAX)
        {
            selectNumber = 0;
        }
    };

    this.definer = function() //this function defines what the selector means based on its type.
    {
        if (type == "gender")
        {
            if (selectNumber == 0)
            {
                //gender: Female
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Female", bX + 105, bY + 23);
                //attributes:
                player.gender = "Female";
                //gender low bar description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("Women of the realm are treated differently depending on the culture they are a part of.", 5, (LCC.height / 2) + 4);
                }
            }
            else if (selectNumber == 1)
            {
                //gender: Male
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Male", bX + 105, bY + 23);
                //attributes:
                player.gender = "Male";
                //gender low bar description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("Men of the realm tend to be more priveledged in their opportunities.", 5, (LCC.height / 2) + 4);
                }
            }
            else if (selectNumber == 2)
            {
                //gender: Hermaphrodite
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Hermaphrodite", bX + 105, bY + 23);
                //attributes:
                player.gender = "hermaphrodite";
                //gender low bar description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("Although there is no hermaphrodite specific gameplay, choosing this sex will allow you to play the exclusive content reserved for both male and female characters.", 5, (LCC.height / 2) + 4);
                }
            }
        }
        else if (type == "style")
        {
            if (selectNumber == 0)
            {
                //Combat Style: Fighter
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Fighter", bX + 105, bY + 23);
                //attributes:
                player.class = "Fighter";
                //combat style low bar description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("Fighters specialize in close quarters combat with weapons like swords, daggers, axes, hammers, spears, etc. This class will allow your character to start out with a close quarters weapon appropriate to your culture and status.", 5, (LCC.height / 2) + 4);
                }
            }
            else if (selectNumber == 1)
            {
                //Combat Style: Fighter
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Ranger", bX + 105, bY + 23);
                //attributes:
                player.class = "Ranger";
                //combat style low bar description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("Rangers specialize in the use of projectile weapons meant to attack targets from long distances such as bows, crossbows, blowdarts, powder guns, etc. This class will allow your character to start out with a ranged weapon appropriate to your culture and status.", 5, (LCC.height / 2) + 4);
                }
            }
            else if (selectNumber == 2)
            {
                if (player.raceName != "Nirwaden" && player.raceName != "Aldrek")
                {
                    //Combat Style: Mage
                    XXX.fillStyle = "black";
                    XXX.font = "20px Impact";
                    XXX.textAlign = "center";
                    XXX.fillText("Mage", bX + 105, bY + 23);
                    //attributes:
                    player.class = "Mage";
                    //combat style low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Magi's talents revolve around the realm of magic rather than the physical and their weapon of choice is in fact their own mind and spirit, with which they use to tap into the magical essence of reality. This class will allow your character to start out with a beginner level spell scroll appropriate to your culture and status.", 5, (LCC.height / 2) + 4);
                    }
                }
                else
                {
                    //Combat Style: Priest (same as mage except that it is a socially acceptable form of magic use in Nirwaden and Aldrek)
                    XXX.fillStyle = "black";
                    XXX.font = "20px Impact";
                    XXX.textAlign = "center";
                    XXX.fillText("Priest", bX + 105, bY + 23);
                    //attributes:
                    player.class = "Priest";
                    //combat style low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Priests' talents revolve around the realm of clerical magic. Their weapon of choice is in fact their own mind and spirit, with which they use to tap into the magical essence of their divine master. This class will allow your character to start out with a beginner level spell scroll appropriate to your culture and status.", 5, (LCC.height / 2) + 4);
                    }
                }
            }
        }
        else if (type == "class")
        {
            //[ascribed titles include: scum, peasant, commoner, tradefolk, highfolk, nobility, and royalty]
            if (selectNumber == 0)
            {
                //Wealth Class: Scum
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Vagabond", bX + 105, bY + 23);
                //attributes:
                player.title = "Vagabond";
                if (player.raceName == "Vardan")
                {
                    Inventory = [];
                    player.hunger = 1/8 * player.hungerMAX;
                    player.satiated = false;
                }
                else
                {
                    Inventory = [];
                    player.hunger = 4/11 * player.hungerMAX;
                    player.satiated = false;
                }
                //class low bar description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("You grew up an orphan and barely scratched out a living off of scraps and who knows what else. Now you are a vagabond wandering from place to place without a home nor any money to speak of, never really sure where your next meal is coming from.", 5, (LCC.height / 2) + 4);
                }
            }
            else if (selectNumber == 1)
            {
                //Wealth Class: Peasant
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Peasant", bX + 105, bY + 23);
                //attributes:
                player.title = "Peasant";
                if (player.raceName == "Vardan")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 12]);
                    player.hunger = 1/6 * player.hungerMAX;
                    player.satiated = false;
                }
                else
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 20]);
                    player.hunger = 6/11 * player.hungerMAX;
                    player.satiated = false;
                }
                //class low bar description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("You spent your childhood in a small one room shack that you shared with your entire family, but you never felt too cramped because you hardly ever had a chance to go inside with all of the hard labour you had to help your family with to get by.", 5, (LCC.height / 2) + 4);

                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("Now that you're older you have set off to seek your fortune, your family gives you all of the coins they can spare and you feel your nervous heartbeat as you say your last goodbyes and step out the door.", 5, (LCC.height / 2) + 16);
                }

            }
            else if (selectNumber == 2)
            {
                //Wealth Class: Commoner
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Commoner", bX + 105, bY + 23);
                //attributes:
                player.title = "Commoner";
                if (player.raceName == "Vardan")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 23]);
                    player.hunger = 5 / 18 * player.hungerMAX;
                    player.satiated = false;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("You grew up as an apprentice under a master artisan, but one day when it was time for your daily training your master didn't show... Eventually you found him, he was lying on the side of the road stabbed through and bleeding.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Although you did not have a master long enough to learn your craft, the money he had in his workshop was enough to subsidize your family's income until you were grown enough to set off and make your fortune.", 5, (LCC.height / 2) + 16);
                    }
                }
                else
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 26]);
                    player.hunger = 8 / 11 * player.hungerMAX;
                    player.satiated = false;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("You grew up as an apprentice under a master artisan, but you were constantly bored by the art and honestly didn't retain much or any of it because when it came time for your evaluation you failed.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Now that you are older you have decided to walk your own path, rather than the one chosen for you by your family. You take what coin your family can afford to give and set of on your journey.", 5, (LCC.height / 2) + 16);
                    }
                }
            }
            else if (selectNumber == 3)
            {
                //Wealth Class: Tradefolk
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Tradefolk", bX + 105, bY + 23);
                //attributes:
                player.title = "Tradefolk";
                if (player.raceName == "Vardan")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 26]);
                    player.hunger = 1 / 3 * player.hungerMAX;
                    player.satiated = false;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("The civil war created horrible conditions for trade, and trade being your family's only source of income made your life a bit challenging. There were several times when your family considered selling you, but luckily for you they didn't.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Now the civil war has passed and trade is starting to come back to Vardania your family gives you what little they can and you set off to make your fortune.", 5, (LCC.height / 2) + 16);
                    }
                }
                else
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 35]);
                    player.hunger = player.hungerMAX;
                    player.satiated = false;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Growing up the child of a trader family you had a relatively comfortable childhood. Your house wasn't large but it was a place to live and it was warm. Now that you are fully grown you're expected to go off and seek your fortune", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("so that you are no longer a drain on your family's income. They give you a bag of coins and set you on your way.", 5, (LCC.height / 2) + 16);
                    }
                }
            }
            else if (selectNumber == 4)
            {
                //Wealth Class: Highfolk
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Highfolk", bX + 105, bY + 23);
                //attributes:
                player.title = "Highfolk";
                if (player.raceName == "Vardan")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 88]);
                    player.hunger = 3 / 4 * player.hungerMAX;
                    player.satiated = false;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Highfolk, an empty title in Vardania, in fact being related to nobility in any way or form was extremely dangerous, luckily your family's lineage is connected to the new high counts family rather than his slain predecessor or one of those other deposed counts.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Of course being related to the high count doesn't really get you any favours, you're like his second cousin twice removed's cousin on her mom's side's nephew... or something like that, it is hard to remember.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Nirwaden")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 140]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your family managed to come into a good deal of money through successful trade ventures during your childhood and purchased minor ranks of nobility from the crown, whose treasury was in need of some fresh coin.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("After purchasing status your family's wealth dropped significantly, but by the time you were old enough to make your own living your family had enough money to give you a sizable bag of coins for your venture.", 5, (LCC.height / 2) + 16);
                    }
                }
                else
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 150]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("You grew up with relatively abundant amounts of wealth, in fact you had a very comfortable childhood. As the grandnephew of a local nobles cousin's halfsister you also sort of had status in society.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("When it was time for you to leave home you were given a substantial amount of money to help you on your way.", 5, (LCC.height / 2) + 16);
                    }
                }
            }
            else if (selectNumber == 5)
            {
                //Wealth Class: Nobility
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Nobility", bX + 105, bY + 23);
                //attributes:
                player.title = "Nobility";
                if (player.raceName == "Vardan")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 900]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Growing up in your father's household you were raised to believe that those who were not of nobility were lesser creatures ultimately only here to support your family's lavish existence. When you came of age your", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("father suggested that you explore that which you will one day govern in the name of the high count, for this venture he gives you a huge amount of coins, as you had expected he would of course...", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Nirwaden")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 1000]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Having been born to one of the important magnates in the kingdom of Nirwaden your childhood was all about preparing for your position in society. As much as you honored your family you also wanted to be able to make your own", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("choices, so when you came of age you requested permission to travel the lands, it harldy seemed likely but that permission was granted and you set off with a massive load of coins on your adventure.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Freynor")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 800]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30 && player.gender != "Female")
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Just because you grew up as the first child of a powerful Jarl doesn't mean that you didn't get your feet wet in the snow. As a youngin' you practised hunting land walruses with your father's men, and once you even watch one of your father's knights slay a giant wolf.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("When you came of age your father sat you down and told you that in order to be truly prepared for becoming jarl you would have to prove your worth to the Freydic people by walking, hunting, and fighting along side them. 'A Freydic jarl must know the land and the people.'", 5, (LCC.height / 2) + 16);
                    }
                    else if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("As the daughter of a powerful Jarl it was your duty to learn to abide by apropriate lady-like etiquete and to set an example of feminine positivity and cultured delicacacy for the people to look up to. When you turned nine your mother died of fever; your father's best", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("alchemists could do nothing to temper it and you were left to the care of servants who continued your social education. When you came of age it became time to marry and your father arranged your marriage with the wealthy lord of the port city to the north.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Kel")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 240]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30 && player.gender == "Female")
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your mother is a Chieftain of one of the many Kellish tribes unified by Chieftain Har, growing up you knew it was your honor to inheirit the leadership and protection of your brothers and sisters in the tribe.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("When you came of age, your mother requested from you that you go on a spiritual quest of self awakening so that when you return you will have true wisdom to share with the brothers and sisters.", 5, (LCC.height / 2) + 16);
                    }
                    else if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your father is a Chieftain of one of the many Kellish tribes unified by Chieftain Har, growing up you knew it was your honor to inheirit the leadership and protection of your brothers and sisters in the tribe.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("When you came of age, your father requested from you that you go on a spiritual quest of self awakening so that when you return you will have true wisdom to share with the brothers and sisters.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Orgell")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 1200]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("As your family was one of the wealthiest families in the tribe it was obvious that they were chosen to be lords of the new homeland. It was now your family's duty to protect the homeland from the savage Adrekii who were unrelenting in their ferocity.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("When you came of age you left with a load of wealth to experience your people old nomadic ways so that you would be truly wisened by the time you returned to your inheritance, your parents protested but slowly they gave in to your request.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Aldrek")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 950]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Having grown up as the child of high ranking lords, you grew up surrounded by astounding amounts of wealth. As soon as you came of age you set off to explore the creator's miracles, with an excessive amount of wealth to pad the journey.", 5, (LCC.height / 2) + 4);
                    }
                }
                else if (player.raceName == "Cephrite")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 1400]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your parents were both in The Grand Magus Council for your entire childhood, they were quite old when they had you but they were able to express to you the importance of magical study. So study you did, and by the time they had died around the time you came", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("of age you were granted a seat on the council in their place. As a councilor of Cephrite you decided it was your duty to learn more about the world so that you could make more educated decisions on the council. So you set off!", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Outlander")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 650]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your parents were nobles, yes, in a far off land a long way from here... You were schemed out of your inheritance of course by your jealous younger sibling who wanted what was rightfully yours. Your sibling raised", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("an army with your own money and used it to cast you out claiming that you killed your parents to get their wealth sooner. A servant helped you escape your own castle with a chest of coins.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Thengar")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 800]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Having grown up with rich and noble parents, you have been raised to inherit their wealth, part of that responsibility is of course learning how to lead men and women into war. Throughout your childhood you have trained for this and finally once you got to lead your first attack", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("against an unsupsecting Kellish tribe you slipped on slick mud and nearly got stabbed through. Luckily a Thengan soldier was their to see your disgrace and she dragged you out of the battle as an excuse to retreat, she was killed of course to hide the shame you brought your family.", 5, (LCC.height / 2) + 16);
                    }
                }
            }
            else if (selectNumber == 6)
            {
                //Wealth Class: Royalty
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Royalty", bX + 105, bY + 23);
                //attributes:
                player.title = "Royalty";
                if (player.raceName == "Vardan")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 3500]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30 && player.gender == "Male")
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("You grew up on the battlefield with your father, who was constantly at war with one of his brother's counts or another. It wasn't until your father won the civil war and claimed the throne as high count that you were able to settle down, and when you did it wasn't", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("for long because as soon as you came of age your father sent you out the door with a large bag of cash claiming that in order to hold the kingdom from future claimants you needed to be ready to face the world on your own.", 5, (LCC.height / 2) + 16);
                    }
                    else if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("You grew up on the battlefield with your father, who was constantly at war with one of his brother's counts or another. It wasn't until your father won the civil war and claimed the throne as high count that you were able to settle down, and when you did it wasn't", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("for long because as soon as you came of age your father sent you out the door with a large bag of cash claiming that in order for him to hold the kingdom from future claimants he needed you to get married into alliance with another powerful kingdom, Thengaria.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Nirwaden")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 4000]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30 && player.gender == "Male")
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your mother, Queen Lelaine, was a very busy monarch throughout your childhood, so much so that you were mostly raised by her servants. Your father who was king in name but in truth had almost no power in the court was almost always busy pretending to be busy so you never", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("really saw much of him either. Eventually as you got older though, your mother paid you more mind and explained to you that you were to travel the realm and gain experience during her reign so that you will be more fit to inherit the kingdom upon your return.", 5, (LCC.height / 2) + 16);
                    }
                    else if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("You grew up in the shadow of your mother, Queen Lelaine, she expected you to be just like her, and you couldn't help but feel a bit oppressed by her standards for you. You spent almost all day in The Temple of The Everlasting Spirit, studying the faith and learning ", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("the divinity's ambitious goals for creation and this empire you are to inherit. You were there the day that your mother's men captured the first Aldrekii city, and on that day she told you how she had saved those people from irrelivance and a single life.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Freynor")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 3250]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30 && player.gender == "Male")
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("When you were born your father, King Jirdun, was overjoyed to have an heir apparent and the first thing he did was to take you on a long ride through the arctic lands. You almost froze that night, but luckily an expert midwife managed to save you from death.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("That was just the start, you accompanied your father on several hunts during your toddler years, and by your age-coming you had already slain your first elder land walrus, with the help of several knights of course.", 5, (LCC.height / 2) + 16);
                    }
                    else if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("When you were born your father was furious that you were not a boy and he was temted to throw you off the wall of Tor-Ruhn-Tel Keep, luckily for you your mother's pleading was enough to convince him not to and you got to live.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("As you grew his likeness for you grew as well and as he had been unable to produce any male children or for that matter any living children other than you he eventually decided to train you to be High Queen of his lands.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Kel")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 400]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your father High Chieftain Har treats you with no more respect than he does any other brother or sister, it is his duty to the tribes to promote a selection process where the tribes themselves pick the high chief. Such a position of", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("power should not fall into hereditary control for then the Kellish tribes would be just as corrupt as the kingdoms. You are to inherit his original tribe only, his position of highest authority will bypass you...", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Orgell")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 5500]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30 && player.gender == "Male")
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Growing up as the prince of the orgish people was fantastic and you were always engulfed in enourmous amounts of wealth and comfort. By the time you came of age you were already prepared for the life of luxury that being a king meant for you.", 5, (LCC.height / 2) + 4);
                    }
                    else if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("As a girl you grew up with a stone in your gut knowing that you would never inherit your father's position at the head of the Orgish Kingdom. You were to be sold into a royal marriage in a foriegn land. Even the thought of becoming Queen", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("in a foreign land felt wrong to you. You are royal here, why can't you stay here and rule. But apparently that is just how it must be, you must go become Queen somewhere else while one of your brothers becomes the new king after your father.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Aldrek")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 3800]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30 && player.gender == "Male")
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your father Everaxii Zoteff has nurtured you since you were a child toward taking his place as the embodiment of the eturnal spirit. It is you divine birthright!", 5, (LCC.height / 2) + 4);
                    }
                    else if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your father, the Everaxii himself, has raised you and spoiled you with the most lavish jewels and ornamates in the land, but that spoiling has of course been paired with a massive curriculum of religious teachings.", 5, (LCC.height / 2) + 4);
                    }
                }
                else if (player.raceName == "Cephrite")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 6550]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Arch Magus Eferous has raised you to be a great and powerful mage like himself, he has already ensured you a spot on The Grand Magus Council, and you've been highly successful in your magical studies.", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("All that remains is for you to go out into the world to hone your magical ability so that when you come back maybe you will be powerful enough to be elected to your father's seat as arch magus.", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Outlander")
                {
                    if (player.gender == "Male")
                    {
                        Inventory = [];
                        Inventory.push([new Item("coins", false, false), 2500]);
                    }
                    else
                    {
                        Inventory = [];
                        Inventory.push([new Item("coins", false, false), 7500]);
                    }
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30 && player.gender == "Male")
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your a prospector, that's right, you're a king from an extremely far away land looking into this place as one that maybe you might someday conquer when you return back to your kingdom, or not...", 5, (LCC.height / 2) + 4);
                    }
                    else if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Your evil sister has stolen your throne and beheaded the entire court! Luckily you got away on a sail boat the night before... Well actually that was an accident, you were really just out for a sail when the wind... Long story actually, better not...", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Also it just so happens that you had brought several large chests of coins with you on your sail to keep you company... So although you have been deposed you are still extremely rich!", 5, (LCC.height / 2) + 16);
                    }
                }
                else if (player.raceName == "Thengar")
                {
                    Inventory = [];
                    Inventory.push([new Item("coins", false, false), 3600]);
                    player.hunger = player.hungerMAX;
                    player.satiated = true;

                    //class low bar description
                    if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30 && player.gender == "Male")
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Living in your father, King Wolthgar's castle was a dark and lonly childhood. When the screams of tortured peasants couldn't be heard it was because your father's shouting was louder. Growing up with your father you quickly learned that his subjects only respect him through ", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("the fear he makes them feel. By the time you were old enough to hold a sword your father had brought a treasonous noble, or perhaps just a noble, to the courtyard and he made you cut off his head on the spot. He said that if you didn't, he would kill you for being weak.", 5, (LCC.height / 2) + 16);
                    }
                    else if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("Living in your father, King Wolthgar's castle was a dark and lonly childhood. When the screams of tortured peasants couldn't be heard it was because your father's shouting was louder. Growing up with your father you quickly learned that his subjects only respect him through ", 5, (LCC.height / 2) + 4);

                        LXX.fillStyle = "black";
                        LXX.font = "12px Book Antiqua";
                        LXX.textAlign = "left";
                        LXX.fillText("the fear he makes them feel. By the time you had reached womanhood your father brought several Kellish tribals to his court including men, women, and children and had his guards kill them for his amusement.... he made you watch the slaughter to 'purge the weakness from you'", 5, (LCC.height / 2) + 16);
                    }
                }
            }
        }
        else if (type == "race")
        {

            if (selectNumber == 0)
            {
                //race: Kel
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Kel", bX + 105, bY + 23);
                //race attributes
                //colour and race name
                player.raceName = "Kel";
                player.race = "green";
                //faction relations
                player.kelFaction = 75; //green (kellish) Chieftain Har
                player.thengarFaction = -200; //brown (thengan) King Wolthgar
                player.freynorFaction = 5; //blue (freydic) King Jirdun
                player.aldrekFaction = 5; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = 5; //yellow (orgish) King Lysander
                player.vardanFaction = -5; //black (vardanian) High Count Arlod
                player.cephriteFaction = 5; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -10; //orange (nirinese) Queen Lelaine
                //skill bonus
                player.constitution = 0;
                player.strength = 0;
                player.stamina = 0;
                player.dexterity = 1;
                player.ranged = 0;
                player.survivalism = 0;
                player.intelligence = 0;
                player.endurance = 3;
                player.toughness = 0;
                player.charisma = 0;
                player.willpower = 0;
                player.knowledge = 0;
                player.concentration = 0;
                player.memory = 0;
                player.eminence = 0;
                player.skillPoints = 4 + extraSkillPoints;
                //low bar race description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("The kellish are a friendly tribal people who live off of the land. Although the Kellish tribes were once seperate there has been a unification under the Kellish chieftain, Har, who has convinced his people to come together as one in defence of their homeland against Thengan aggression.", 5, (LCC.height / 2) + 4);
                }
            }
            else if (selectNumber == 1)
            {
                //race: Thengar
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Thengar", bX + 105, bY + 23);
                //race attributes
                //colour and race name
                player.raceName = "Thengar";
                player.race = "#663300";
                //faction relations
                player.kelFaction = -200; //green (kellish) Chieftain Har
                player.thengarFaction = 75; //brown (thengan) King Wolthgar
                player.freynorFaction = 15; //blue (freydic) King Jirdun
                player.aldrekFaction = 0; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = -15; //yellow (orgish) King Lysander
                player.vardanFaction = 5; //black (vardanian) High Count Arlod
                player.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -10; //orange (nirinese) Queen Lelaine
                //skill bonus
                player.constitution = 0;
                player.strength = 2;
                player.stamina = 2;
                player.dexterity = 0;
                player.ranged = 0;
                player.survivalism = 0;
                player.intelligence = 0;
                player.endurance = 0;
                player.toughness = 0;
                player.charisma = 0;
                player.willpower = 0;
                player.knowledge = 0;
                player.concentration = 0;
                player.memory = 0;
                player.eminence = 0;
                player.skillPoints = 4 + extraSkillPoints;
                //low bar race description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("The Thengans are a harsh and violent people who believe that they are superior to all others. Under the rule of the savage King Wolthgar the Thengan kingdom has been particularly imperious and violent!", 5, (LCC.height / 2) + 4);
                }
            }
            else if (selectNumber == 2)
            {
                //race: Freynor
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Freynor", bX + 105, bY + 23);
                //race attributes
                //colour and race name
                player.raceName = "Freynor";
                player.race = "navy";
                //faction relations
                player.kelFaction = 10; //green (kellish) Chieftain Har
                player.thengarFaction = 10; //brown (thengan) King Wolthgar
                player.freynorFaction = 75; //blue (freydic) King Jirdun
                player.aldrekFaction = 0; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = 0; //yellow (orgish) King Lysander
                player.vardanFaction = 0; //black (vardanian) High Count Arlod
                player.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -10; //orange (nirinese) Queen Lelaine
                //skill bonus
                player.constitution = 2;
                player.strength = 0;
                player.stamina = 0;
                player.dexterity = 0;
                player.ranged = 0;
                player.survivalism = 0;
                player.intelligence = 0;
                player.endurance = 0;
                player.toughness = 2;
                player.charisma = 0;
                player.willpower = 0;
                player.knowledge = 0;
                player.concentration = 0;
                player.memory = 0;
                player.eminence = 0;
                player.skillPoints = 4 + extraSkillPoints;
                //low bar race description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("The Freynor have lived in seclusion from the other cultures for centuries. They inhabit the barren icy land of Frajek in the north where most people would either freeze to death or be eaten by ferocious arctic beasts if they tried to visit.", 5, (LCC.height / 2) + 4);

                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("They have managed to remain neutral in the affairs of the other kingdoms thus far, and they intend to keep it that way.", 5, (LCC.height / 2) + 16);
                }
            }
            else if (selectNumber == 3)
            {
                //race: Aldrek
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Aldrek", bX + 105, bY + 23);
                //race attributes
                //colour and race name
                player.raceName = "Aldrek";
                player.race = "darkRed";
                //faction relations
                player.kelFaction = 10; //green (kellish) Chieftain Har
                player.thengarFaction = 0; //brown (thengan) King Wolthgar
                player.freynorFaction = 0; //blue (freydic) King Jirdun
                player.aldrekFaction = 75; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = -200; //yellow (orgish) King Lysander
                player.vardanFaction = -5; //black (vardanian) High Count Arlod
                player.cephriteFaction = -200; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -200; //orange (nirinese) Queen Lelaine
                //skill bonus
                player.constitution = 0;
                player.strength = 0;
                player.stamina = 0;
                player.dexterity = 0;
                player.ranged = 3;
                player.survivalism = 0;
                player.intelligence = 0;
                player.endurance = 1;
                player.toughness = 0;
                player.charisma = 0;
                player.willpower = 0;
                player.knowledge = 0;
                player.concentration = 0;
                player.memory = 0;
                player.eminence = 0;
                player.skillPoints = 4 + extraSkillPoints;
                //low bar race description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("The Aldrekii people of the burning southern desert believe that a great and allpowerful being controls all of creation, and that being's consciousness rests in dormant form in the body of their leader, the royal Everaxii.", 5, (LCC.height / 2) + -8);

                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("They are at war with the Cephrians because the atheistic beliefs of the magi people are highly distastful in aldrekii culture, they are at war with the kingdom of Orgell because of a land dispute and over religious differences,", 5, (LCC.height / 2) + 4);

                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("and they are at war with the nirwaden kingdom because the nirwaden kingdom has decided to try and expand their terrotorry, and has already started by taking over an Aldrekii border city.", 5, (LCC.height / 2) + 16);
                }
            }
            else if (selectNumber == 4)
            {
                //race: Orgell
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Orgell", bX + 105, bY + 23);
                //race attributes
                //colour and race name
                player.raceName = "Orgell";
                player.race = "gold";
                //faction relations
                player.kelFaction = 5; //green (kellish) Chieftain Har
                player.thengarFaction = -45; //brown (thengan) King Wolthgar
                player.freynorFaction = 0; //blue (freydic) King Jirdun
                player.aldrekFaction = -200; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = 75; //yellow (orgish) King Lysander
                player.vardanFaction = 0; //black (vardanian) High Count Arlod
                player.cephriteFaction = -45; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -45; //orange (nirinese) Queen Lelaine
                //skill bonus
                player.constitution = 0;
                player.strength = 0;
                player.stamina = 0;
                player.dexterity = 0;
                player.ranged = 0;
                player.survivalism = 0;
                player.intelligence = 2;
                player.endurance = 0;
                player.toughness = 0;
                player.charisma = 2;
                player.willpower = 0;
                player.knowledge = 0;
                player.concentration = 0;
                player.memory = 0;
                player.eminence = 0;
                player.skillPoints = 4 + extraSkillPoints;
                //low bar race description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("The Orgish peoples have long been persecuted for their nomadic culture, but finally they have found their true homeland in the heart of the burning southern desert, and after decades living in constant battle with the Aldrekii they have managed to establish themselves as a kingdom", 5, (LCC.height / 2) + 4);

                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("and define their borders.", 5, (LCC.height / 2) + 16);
                }
            }
            else if (selectNumber == 5)
            {
                //race: Vardan
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Vardan", bX + 105, bY + 23);
                //race attributes
                //colour and race name
                player.raceName = "Vardan";
                player.race = "#1c1c1c";
                //faction relations
                player.kelFaction = -5; //green (kellish) Chieftain Har
                player.thengarFaction = 5; //brown (thengan) King Wolthgar
                player.freynorFaction = 0; //blue (freydic) King Jirdun
                player.aldrekFaction = -5; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = 0; //yellow (orgish) King Lysander
                player.vardanFaction = 75; //black (vardanian) High Count Arlod
                player.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -10; //orange (nirinese) Queen Lelaine
                //skill bonus
                player.constitution = 0;
                player.strength = 0;
                player.stamina = 3;
                player.dexterity = 1;
                player.ranged = 0;
                player.survivalism = 0;
                player.intelligence = 0;
                player.endurance = 0;
                player.toughness = 0;
                player.charisma = 0;
                player.willpower = 0;
                player.knowledge = 0;
                player.concentration = 0;
                player.memory = 0;
                player.eminence = 0;
                player.skillPoints = 4 + extraSkillPoints;
                //low bar race description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("The Vardanian people have lived in dire conditions throughout the rules of their many rich and powerful counts and high counts. The recently ended civil war hasn't done much to help with the living conditions either.", 5, (LCC.height / 2) + -8);

                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("Life in Vardania up until recently was mearly the question of whether one's loved ones would starve, be conscripted and die in battle, be slain by conscripts, be eaten by wild animals or monsters, or perhaps even eaten by one's neighbor.", 5, (LCC.height / 2) + 4);

                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("After the victory of the newly proclaimed high count, Arlod, the conditions have improved some, but nairly a scratch has been made at the vast epidemic of Vardanian starvation.", 5, (LCC.height / 2) + 16);
                }
            }
            else if (selectNumber == 6)
            {
                //race: Cephrite
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Cephrite", bX + 105, bY + 23);
                //race attributes
                //colour and race name
                player.raceName = "Cephrite";
                player.race = "purple";
                //faction relations
                player.kelFaction = 10; //green (kellish) Chieftain Har
                player.thengarFaction = 0; //brown (thengan) King Wolthgar
                player.freynorFaction = 0; //blue (freydic) King Jirdun
                player.aldrekFaction = -200; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = -25; //yellow (orgish) King Lysander
                player.vardanFaction = 0; //black (vardanian) High Count Arlod
                player.cephriteFaction = 75; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -45; //orange (nirinese) Queen Lelaine
                //skill bonus
                player.constitution = 0;
                player.strength = 0;
                player.stamina = 0;
                player.dexterity = 0;
                player.ranged = 0;
                player.survivalism = 0;
                player.intelligence = 0;
                player.endurance = 0;
                player.toughness = 0;
                player.charisma = 0;
                player.willpower = 3;
                player.knowledge = 1;
                player.concentration = 0;
                player.memory = 0;
                player.eminence = 0;
                player.skillPoints = 4 + extraSkillPoints;
                //low bar race description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("Centuries ago the cephrian people have gained the understanding of the magical arts and since then their culture has evolved around it. They believe that no power exists except for the spirit of magic itself which they believe can be tamed and harnessed to their will.", 5, (LCC.height / 2) + 4);
                }
            }
            else if (selectNumber == 7)
            {
                //race: Nirwaden
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Nirwaden", bX + 105, bY + 23);
                //race attributes
                //colour and race name
                player.raceName = "Nirwaden";
                player.race = "#e68900";
                //faction relations
                player.kelFaction = 0; //green (kellish) Chieftain Har
                player.thengarFaction = -10; //brown (thengan) King Wolthgar
                player.freynorFaction = 0; //blue (freydic) King Jirdun
                player.aldrekFaction = -200; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = -10; //yellow (orgish) King Lysander
                player.vardanFaction = -10; //black (vardanian) High Count Arlod
                player.cephriteFaction = -10; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = 75; //orange (nirinese) Queen Lelaine
                //skill bonus
                player.constitution = 0;
                player.strength = 1;
                player.stamina = 1;
                player.dexterity = 1;
                player.ranged = 1;
                player.survivalism = 0;
                player.intelligence = 0;
                player.endurance = 0;
                player.toughness = 0;
                player.charisma = 0;
                player.willpower = 0;
                player.knowledge = 0;
                player.concentration = 0;
                player.memory = 0;
                player.eminence = 0;
                player.skillPoints = 4 + extraSkillPoints;
                //low bar race description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("The Nirinese people have honed their skills in metalwork, craftsmanship, and warfare, and now they seek to expand their dominion across the land, not only to profit from their conquests, but also to spread their righteous faith in The Everlasting Spirit.", 5, (LCC.height / 2) + 4);
                }
            }
            else if (selectNumber == 8)
            {
                //race: Outlander
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Outlander", bX + 105, bY + 23);
                //race attributes
                //colour and race name
                player.raceName = "Outlander";
                player.race = "white";
                //faction relations
                player.kelFaction = -25; //green (kellish) Chieftain Har
                player.thengarFaction = -25; //brown (thengan) King Wolthgar
                player.freynorFaction = -25; //blue (freydic) King Jirdun
                player.aldrekFaction = -50; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = -10; //yellow (orgish) King Lysander
                player.vardanFaction = -25; //black (vardanian) High Count Arlod
                player.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -50; //orange (nirinese) Queen Lelaine
                //skill bonus
                player.constitution = 0;
                player.strength = 0;
                player.stamina = 0;
                player.dexterity = 0;
                player.ranged = 0;
                player.survivalism = 0;
                player.intelligence = 0;
                player.endurance = 0;
                player.toughness = 0;
                player.charisma = 0;
                player.willpower = 0;
                player.knowledge = 0;
                player.concentration = 0;
                player.memory = 0;
                player.eminence = 0;
                player.skillPoints = 8 + extraSkillPoints;
                //low bar race description
                if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                {
                    LXX.fillStyle = "black";
                    LXX.font = "12px Book Antiqua";
                    LXX.textAlign = "left";
                    LXX.fillText("The ghastly and pale outlanders are not of this land and are generally rejected by all of the kingdoms, the only exception to that is the Cephrians who do not easily develop superstitions, and are interested in the rare occurence of an outlander.", 5, (LCC.height / 2) + 4);
                }
            }
        }
        else if (type == "mode")
        {
            if (selectNumber == 0)
            {
                //leaves all the same as far as special game modes
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Standard (Hard)", bX + 105, bY + 23);

                player.gamemode = "standard";
            }
            else if (selectNumber == 1)
            {
                //leaves all the same as far as special game modes
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Veteran (Easy)", bX + 105, bY + 23);

                player.gamemode = "veteran";
            }
            else if (selectNumber == 2)
            {
                //leaves all the same as far as special game modes
                XXX.fillStyle = "black";
                XXX.font = "20px Impact";
                XXX.textAlign = "center";
                XXX.fillText("Protagonist (Kid's Mode)", bX + 105, bY + 23);

                player.gamemode = "protagonist";
            }
        }
    };

    this.operations = function()
    {
        this.scroll();
        this.drawSelf();
        this.definer();
    };
}

this.namePickerButton = function(bX, bY)
{
    if (mouseX > bX && mouseX < bX + 230 && mouseY > bY && mouseY < bY + 30)
    {
        //Draw the name picker button
        XXX.beginPath();
        XXX.fillStyle = "gold";
        XXX.lineWidth = 1;
        XXX.strokeStyle = "black";
        XXX.rect(bX, bY, 230, 30);
        XXX.fill();
        XXX.stroke();
    }
    else
    {
        //Draw the name picker button
        XXX.beginPath();
        XXX.fillStyle = "lightGrey";
        XXX.lineWidth = 1;
        XXX.strokeStyle = "black";
        XXX.rect(bX, bY, 230, 30);
        XXX.fill();
        XXX.stroke();
    }

    //draw the text of the character's name in the box.
    XXX.fillStyle = "black";
    XXX.font = "24px Impact";
    XXX.textAlign = "center";
    XXX.fillText(mainCharacterAccess[0].name, bX + 115, bY + 24);

    if (mouseX > bX && mouseX < bX + 230 && mouseY > bY && mouseY < bY + 30 && clicked == true)
    {
        clicked = false;
        var naming = prompt("Enter your character's name.");

        if (naming != undefined)
        {
            mainCharacterAccess[0].name = naming;
        }
    }
};