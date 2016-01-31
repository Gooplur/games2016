/**
 * Created by skyeguy on 12/17/15.
 */

//TODO LIST
//todo finish adding the bank, that includes deposits and withdrawals, purchasing bank slots, and saving and loading of the bankAccount list.
//todo Add harsh hot weather conditions: deserts cause dehydration (droplet with an increasingly red background) [cured by liquids]: drinkable items like drinks alcohols and water etc.
//todo Add spellbook and magic (and build the magic leveling function)
//todo build the intelligence based inspect system in which a character with high enough intelligence can find out certain details about a target Unit by clicking on them.
//todo It would be cool to add swimming, but it is not necessarily something that the game needs.
//todo Add multi dimensional gameplay... meaning Dungeons, Caves, trapdoors, castles, cellars, buildings, etc.
//todo Design a spawn system that slightly directs Unit re-spawning, and allows them to spawn in multiple locations.
//todo Add a structure class: a structure could be a wall or a barrier or a dimensional entrance like a home or a trap door, or a mountain cave.
//todo Add a scenery class: a scenery piece would be like a structure, but it would be sizably smaller than a structure and rather than resemble a building or entrance it would include things like crops, wild berry bushes, fruit trees, fountains, crates, treasure chests, wrecked wagons, sacks, and barrels. For containers you would click on them and you inventory secton would turn into the containers inventory and clicking on each item would give you an option.
//todo Add lore, human characters, guards, and important figures. King Wolthgar perhaps... or not... we'll see!
//todo Add shopkeepers, questgivers, unique characters and landmarks.
//todo make the map larger, and add new creatures and items to the world.
//todo Add beartraps and other traps that you can set
//todo Add haeflower... psycodelic, takes you to a drug trip world with a slowly flashing rainbow floor and a fog of disoriented colors plus in that world fight weird things like crack bears with a fish as your weapon.
//todo Add a gun as a secret developer/cheat weapon... make its damage ridiculously high. Cheat Code: "thisgameismissingsomething" Result: gives player a powerful pistol or Ak-47 gun.
function legendaryPrerequisites()
{
    //sounds
    //images
    var volcanicEnv = new Image();
    volcanicEnv.src = ("images/molten.jpg");
    window.volcanicEnv = volcanicEnv;

    var snowyEnv = new Image();
    snowyEnv.src = ("images/permaFrost.jpg");
    window.snowyEnv = snowyEnv;

    var frozenEnv = new Image();
    frozenEnv.src = ("images/tundra.jpg");
    window.frozenEnv = frozenEnv;

    var snowEnv = new Image();
    snowEnv.src = ("images/fluffySnow.jpg");
    window.snowEnv = snowEnv;

    var sandyEnv = new Image();
    sandyEnv.src = ("images/greatDunes.jpg");
    window.sandyEnv = sandyEnv;

    var dryGrassEnv = new Image();
    dryGrassEnv.src = ("images/dryGrass.png");
    window.dryGrassEnv = dryGrassEnv;

    var stoneWorkEnv = new Image();
    stoneWorkEnv.src = ("images/fancyStones.jpg");
    window.stoneWorkEnv = stoneWorkEnv;

    var stonePathEnv = new Image();
    stonePathEnv.src = ("images/stonePath.png");
    window.stonePathEnv = stonePathEnv;

    var rockyFlatEnv = new Image();
    rockyFlatEnv.src = ("images/dryLand.png");
    window.rockyFlatEnv = rockyFlatEnv;

    var greenGrassEnv = new Image();
    greenGrassEnv.src = ("images/grass.jpg");
    window.greenGrassEnv = greenGrassEnv;

    var forestEnv = new Image();
    forestEnv.src = ("images/mBank.jpg");
    window.forestEnv = forestEnv;

    var polyPNG = new Image();
    polyPNG.src = ("images/polyAssets.png");
    window.polyPNG = polyPNG;

    polyPNG.onload = function()
    {
        secondToLastPreStage();
    };

    //theLegend();
}
function secondToLastPreStage()
{
    var theCrack = new Image();
    theCrack.src = ("images/crackAssets.png");
    window.theCrack = theCrack;

    theCrack.onload = function()
    {
        lastPreStage();
    };
}
function lastPreStage()
{
    var verse = new Image();
    verse.src = ("images/verseAssets.png");
    window.verse = verse;

    verse.onload = function()
    {
        theLegend();
    };
}

function theLegend()
{
    // Establish the lower canvas and context
    var LCC = document.getElementById("bearPawAlpha");
    var LXX = LCC.getContext("2d");
    // Establish the canvas and its context
    var CCC = document.getElementById("bearPawBravo");
    var XXX = CCC.getContext("2d");

    //What part of the game world are you in
    var map = "world"; //this represents which map you are in.
    var region = "central"; //this represents which part of a map you are in.
    var change = 0; //This allows the buildMaster to know when a region has just changed so that it can delete everything from the old region before building the new one.
    var X = 2000; //This X represents the worlds location X compared to you, as you are a stationary object that never moves.
    var Y = 1000; //This Y represents the worlds location Y compared to you, as you are a stationary object that never moves.
    var spawnX = 2000;
    var spawnY = 1000;

    //Game Pausing, Moderation, and Control
    var gameState = "mainMenu"; //set to "active" for ingame play, and set to "mainMenu" for the main menu.

    //Saving
    var update = 0; //change this by one whenever a new update has changed any of the key game aspects that might interfere with the normal save structure.
    var lastUpdate = 0;
    var saveType = 1;
    var loadType = 1;
    var saveBrain = {};

    //Important Sensing Variables
    var mouseX = 0; //main canvas mouse coords.
    var mouseY = 0; //main canvas mouse coords.
    var lMouseX = 0; //lower canvas mouse coords.
    var lMouseY = 0; //lower canvas mouse coords.
    var wMouseX = 0; //window mouse coords.
    var wMouseY = 0; //window mouse coords.
    var clicked = false; //senses upon click and during hold click.
    var clickReleased = true; //senses once for the briefest moment upon release.
    var dClick = false;

    //Lower Canvas
    var lowBar = "information"; //This variable determines what type of menu the lower bar is.
        //inventory
    var invScroll = 0; //this is the variable that lets you scroll through the inventory.
        //shop
    var merchScroll = 0;
    var itemAmount = 1;
        //bank
    var bankAccount = [];
    var bankSlots = 1;
    var bankSlotCost = 25;
    var bankScroll = 0;

    //time Tracker Variables
    var beegin = "start"; // this is a variable that lets TTP set to time natural when the game starts
    var TTN = 0; //Current Time a.k.a [Time Now]
    var TTP = 0; //Previous Time a.k.a [Time Previous]
    var TTD = 0; //Difference in time a.k.a [Delta Time]

    //Key sensing variables
    var wKey = false;
    var spaceKey = false;
    var shiftKey = false;
    var altKey = false;

    //DEVELOPMENTAL VARIABLES (variables for the developer to use)
        //Locational
    var tellCoords = true; //This displays the players exact world coordinates on the screen.
        //AI Unit Focused
    var showSight = false; //This makes every AI UNIT draw their rangeOfSight to the world.
    var showPlayerAttackBubble = false; //This shows the bubble/radius in which the players attack will deal damage.
    var testingUnitCenters = false; //This displays the center point of all AI UNITS.
    var testingUnitSizes = false; //This displays the AI Units' sizes as a faded white circle.
        //manipulation
    var wallPhase = false;
        //Player Stat Focused
    var extraSkillPoints = 0;
    var energyDrink = false; //This makes energy regenerate at its absolute fastest point but it slowly deteriorates the players health by 1 for every couple of seconds.
    var quickRegeneration = false; //This makes both health and energy restore quickly.
    var incredibleHulk = false; //This makes the character outrageously strong and constituted.
    var developerRapidamente = false; //This must be true as well as rapidamente in order to enable super speed.
    var rapidamente = false; //This makes the character have true super speed, but this only works if the above is also true.
    var constantEXP = false;
        //Items
    var cheatItem = 0; //When the cheat is not active this should be at zero. This number represents the extra amount of items generated by the drop all option.
        //displays
    var showAntiVenomBar = false;

    //In-Game Pop Ups Variables
    var popDuration = 0; //This is the timer for how long some popups will last.
    var popType = 0;
    var confirmed = false;
        //Confirm variables
    var save1 = null;
    var save2 = null;
    var save3 = null;
    var save4 = null;
    //UNIQUE CHARACTERS
    var uniqueChars =
    {
        //Unique character life/death status //true means alive false means dead...
        bobithLDS: true,
        medliaLDS: true,
        drohforLDS: true,
        laandegLDS: true,
        maggyLDS: true,
        odeeLDS: true
    };
    //QUESTS
    var quests = {};

    //IMPORTANT LISTS
    //This list stores the identity of the players character
    var mainCharacterAccess = [];
    mainCharacterAccess.push(new Adventurer()); //This is the line of code that adds the main character to its access list.
    var player = mainCharacterAccess[0];
    //This list stores the identities of all the game's AI Units.
    var ArtificialIntelligenceAccess = [];
    //this list stores the example guy for the character builder.
    var exampleGuyList = [];
    exampleGuyList.push(new drawExampleCharacter(1/2 * CCC.width, 1/2 * CCC.height - 115, 0));
    //this list stores the Selector Bar Class for the character builder.
    var selectorList = [];
    selectorList.push(new Selector(1/2 * CCC.width - 105, 260, "race", 8)); // 0 == race selector
    selectorList.push(new Selector(1/2 * CCC.width - 105, 300, "gender", 2)); // 1 == gender selector
    selectorList.push(new Selector(1/2 * CCC.width - 105, 340, "class", 6)); // 2 == wealth and social class selector
    selectorList.push(new Selector(1/2 * CCC.width - 105, 380, "style", 2)); // 3 == combat style selector
    //This list stores the dead from the AI list.
    var deadAIList = [];

    //This list stores the identities of all the game's Items.
    var worldItems = [];

    //Player Inventory
    var Inventory = [];
    //todo TEST INVENTORY
    Inventory = [[new Item("glassJar", false, false), 6], [new Item("rawTrollsBlood", false, false), 10], [new Item("chainArmour", false, false), 52], [new Item("blackChainArmour", false, false), 12], [new Item("freydicGreatSword", false, false), 5], [new Item("aldrekiiArrow", false, false), 79], [new Item("wolfLiver", false, false), 4], [new Item("rawWolfLiver", false, false), 8], [new Item("winterWolfPelt", false, false), 3], [new Item("massiveWinterWolfPelt", false, false), 1], [new Item("rawWinterWolfFlesh", false, false), 2], [new Item("winterWolfMeat", false, false), 3], [new Item("torperVenomSac", false, false), 4], [new Item("torperFuzz", false, false), 2], [new Item("torperMeat", false, false), 13], [new Item("rawTorperFlesh", false, false), 16], [new Item("frichPelt", false, false), 6], [new Item("frichMeat", false, false), 8], [new Item("rawFrichFlesh", false, false), 3], [new Item("freydicSpear", false, false), 1], [new Item("rawGulfreyFlesh", false, false), 2], [new Item("gulfreyMeat", false, false), 3], [new Item("gulfreyShell", false, false), 1], [new Item("gulfreyMandibles", false, false), 1], [new Item("vomit", false, false), 1], [new Item("gojiiBerries", false, false), 19], [new Item("blueBlade", false, false), 1], [new Item("berulnMeat", false, false), 3], [new Item("rawBerulnFlesh", false, false), 2], [new Item("bigBerulnPelt", false, false), 1], [new Item("berulnPelt", false, false), 1], [new Item("berulnSkull", false, false), 1], [new Item("ogoFruit", false, false), 8], [new Item("arrow", false, false), 49], [new Item("longbow", false, false), 1], [new Item("walrusLeatherArmour", false, false), 1], [new Item("coins", false, false), 2890540], [new Item("yaihefBerries", false, false), 2256], [new Item("mace", false, false), 1], [new Item("etyrMeat", false, false), 4], [new Item("etyrHide", false, false), 12], [new Item("longsword", false, false), 1], [new Item("rawEtyrFlesh", false, false), 8], [new Item("rawWalrusFlesh", false, false), 2], [new Item("walrusMeat", false, false), 3], [new Item("blubber", false, false), 5], [new Item("walrusTusks", false, false), 1], [new Item("elderWalrusTusks", false, false), 4], [new Item("walrusHide", false, false), 2], [new Item("elderWalrusHide", false, false), 2], [new Item("freydicWarAxe", false, false), 1], [new Item("trollsBlood", false, false), 20] ];
    //Inventory = [[new Item("chainArmour", false, false), 1], [new Item("blackChainArmour", false, false), 1], [new Item("freydicGreatSword", false, false), 1], [new Item("aldrekiiArrow", false, false), 79], [new Item("freydicSword", false, false), 1], [new Item("pickaxe", false, false), 1], [new Item("aldrekiiBlade", false, false), 1], [new Item("flail", false, false), 1], [new Item("gulfreyShellArmour", false, false), 1], [new Item("vardanianAxe", false, false), 1], [new Item("vardanianAxeDual", false, false), 1], [new Item("freydicSpear", false, false), 1], [new Item("nirineseSabre", false, false), 1], [new Item("blueBlade", false, false), 1], [new Item("arrow", false, false), 250], [new Item("longbow", false, false), 1], [new Item("walrusLeatherArmour", false, false), 1], [new Item("aldrekiiBardiche", false, false), 1], [new Item("coins", false, false), 20], [new Item("freydicWarAxe", false, false), 1], [new Item("mace", false, false), 1], [new Item("longsword", false, false), 1]];

    //This list holds one of each type of weapon so that the player can access the weapons stats.
    var allWeapons = [];
    allWeapons.push(new Item("mace", false)); //0
    allWeapons.push(new Item("longsword", false)); //1
    allWeapons.push(new Item("none", false)); //2
    allWeapons.push(new Item("freydicWarAxe", false)); //3
    allWeapons.push(new Item("aldrekiiBardiche", false)); //4
    allWeapons.push(new Item("longbow", false)); //5
    allWeapons.push(new Item("arrow", false)); //6
    allWeapons.push(new Item("blueBlade", false)); //7
    allWeapons.push(new Item("nirineseSabre", false)); //8
    allWeapons.push(new Item("freydicSpear", false)); //9
    allWeapons.push(new Item("vardanianAxeDual", false)); //10
    allWeapons.push(new Item("vardanianAxe", false)); //11
    allWeapons.push(new Item("flail", false)); //12
    allWeapons.push(new Item("aldrekiiBlade", false)); //13
    allWeapons.push(new Item("pickaxe", false)); //14
    allWeapons.push(new Item("freydicSword", false)); //15
    allWeapons.push(new Item("aldrekiiArrow", false)); //16
    allWeapons.push(new Item("freydicGreatSword", false)); //17

    //This list holds one of each type of worn item so that the player can access the worn item stats.
    var allWorn = [];
    allWorn.push(new Item("nude", false)); //0
    allWorn.push(new Item("walrusLeatherArmour", false)); //1
    allWorn.push(new Item("gulfreyShellArmour", false)); //2
    allWorn.push(new Item("blackChainArmour", false)); //3
    allWorn.push(new Item("chainArmour", false)); //4

    //this is the list of projectiles fired by the player.
    var playerProjectiles = [];

    //this is the list of projectiles fired by all AI UNITS
    var unitProjectiles = [];

    //this is the list of the current shops wares.
    var shopID = "none";
    var shopInventory = [];
    var initialShopItemSet = false;
    var initialBankItemSet = false;

    //This sets the items that are in shops.
    function shopItemIDSetter()
    {
        if (lowBar == "shop" || initialShopItemSet == false)
        {
            initialShopItemSet = true;
            for (var i = 0; i < shopInventory.length; i++)
            {
                shopInventory[i][0].setItemID();
            }
        }

        if (lowBar == "bank" || initialBankItemSet == false)
        {
            initialBankItemSet = true;
            for (var i = 0; i < bankAccount.length; i++)
            {
                bankAccount[i][0].setItemID();
            }
        }
    }

    //This function runs through the list of Units and activates their Operation functions.
    function projectileOperationsManagement()
    {
        if (gameState == "active" || gameState == "stopTime")
        {
            for (var i = 0; i < playerProjectiles.length; i++)
            {
                playerProjectiles[i].operations();
            }
        }
        if (gameState == "active")
        {
            for (var i = 0; i < unitProjectiles.length; i++)
            {
                unitProjectiles[i].operations();
            }
        }
    }
    //This function runs through the list of Units and activates their Operation functions.
    function artificialIntelligenceOperationsManagement()
    {
        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
        {
            if (gameState == "active")
            {
                ArtificialIntelligenceAccess[i].operation();
            }
            else if (gameState == "stopTime" && ArtificialIntelligenceAccess[i].timeResistance == true) //when the player uses magic to stop time time resistant creatures will still exist but all others will disapear until time starts again. //TODO this needs to be rearranged if it is ever going to be a real spell for the game. Units would need to be able to take damage and draw during paused time.
            {
                ArtificialIntelligenceAccess[i].operation();
            }
        }
    }
    function aiIdentify()
    {
        if (gameState == "active")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                ArtificialIntelligenceAccess[i].interaction();
            }
        }
    }
    //This function runs through the list of Units and activates their Operation functions.
    function deadAIOperationsManagement()
    {
        for (var i = 0; i < deadAIList.length; i++)
        {
            deadAIList[i].operation();
        }
    }
    function ItemOperationsManager()
    {

        if (gameState == "active" || gameState == "stopTime")
        {
            for (var i = 0; i < worldItems.length; i++)
            {
                worldItems[i][0].operations();
            }

        }

        for (var i = 0; i < allWeapons.length; i++)
        {
            allWeapons[i].operations();
        }
        for (var i = 0; i < allWorn.length; i++)
        {
            allWorn[i].operations();
        }
    }
    //this function contains cheat methods that rely on the gameLoop.
    function cheats()
    {
        if (constantEXP == true)
        {
            player.experience += 1;
        }
    }

    //This function sets the lower canvas X and Y to un-problematic values whilst the mouse is in the main inventory.
    function lowerCanvasMouseCoordsReset()
    {
        lMouseX = -1000; //this makes it so when you are not in the lower canvas it does not try to set your mouses position, which can accidentally click something you didn't want to.
        lMouseY = 1000;
    }

    function mainCanvasMouseCoordsReset()
    {


        mouseX = Math.cos(player.rotation - 1/2 * Math.PI) * 500000;
        mouseY = Math.sin(player.rotation - 1/2 * Math.PI) * 500000;
    }

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
        if (mouseX > (1/2 * CCC.width) - (1/2 * 300) && mouseX < ((1/2 * CCC.width) - (1/2 * 300)) + 300 && mouseY > 450 && mouseY < 450 + 80)
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
            XXX.rect((1/2 * CCC.width) - (1/2 * 300), 450, 300, 80);
            XXX.fill();
            XXX.stroke();
        }
        else
        {
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.lineWidth = 5;
            XXX.strokeStyle = "black";
            XXX.rect((1/2 * CCC.width) - (1/2 * 300), 450, 300, 80);
            XXX.fill();
            XXX.stroke();
        }
        //draw text in button
        XXX.fillStyle = "black";
        XXX.font = "40px Impact";
        XXX.fillText("Begin", (1/2 * CCC.width), 505);

        if (this.hoveredOver == true && clicked == true)
        {
            clicked = false;

            //NOBILITY and ROYALTY have INCREASED versions of their FACTION RELATIONS
            if (player.title == "Nobility" && player.raceName == "Kel" || player.title == "Royalty" && player.raceName == "Kel")
            {
                player.kelFaction = 500; //green (kellish) Chieftan Har
                player.thengarFaction = -500; //brown (thengan) King Wolthgar
                player.freynorFaction = 25; //blue (freydic) King Jirdun
                player.aldrekFaction = 25; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = 25; //yellow (orgish) King Lysander
                player.vardanFaction = -15; //black (vardanian) High Count Arlod
                player.cephriteFaction = 25; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -15; //orange (nirinese) Queen Lelaine
            }
            else if (player.title == "Nobility" && player.raceName == "Thengar" || player.title == "Royalty" && player.raceName == "Thengar")
            {
                player.kelFaction = -500; //green (kellish) Chieftan Har
                player.thengarFaction = 500; //brown (thengan) King Wolthgar
                player.freynorFaction = 40; //blue (freydic) King Jirdun
                player.aldrekFaction = -5; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = -40; //yellow (orgish) King Lysander
                player.vardanFaction = 25; //black (vardanian) High Count Arlod
                player.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -20; //orange (nirinese) Queen Lelaine
            }
            else if (player.title == "Nobility" && player.raceName == "Freynor" || player.title == "Royalty" && player.raceName == "Freynor")
            {
                player.kelFaction = 25; //green (kellish) Chieftan Har
                player.thengarFaction = 40; //brown (thengan) King Wolthgar
                player.freynorFaction = 500; //blue (freydic) King Jirdun
                player.aldrekFaction = 0; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = 0; //yellow (orgish) King Lysander
                player.vardanFaction = 0; //black (vardanian) High Count Arlod
                player.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -5; //orange (nirinese) Queen Lelaine
            }
            else if (player.title == "Nobility" && player.raceName == "Aldrek" || player.title == "Royalty" && player.raceName == "Aldrek")
            {
                player.kelFaction = 15; //green (kellish) Chieftan Har
                player.thengarFaction = 0; //brown (thengan) King Wolthgar
                player.freynorFaction = 0; //blue (freydic) King Jirdun
                player.aldrekFaction = 500; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = -500; //yellow (orgish) King Lysander
                player.vardanFaction = -20; //black (vardanian) High Count Arlod
                player.cephriteFaction = -500; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -500; //orange (nirinese) Queen Lelaine
            }
            else if (player.title == "Nobility" && player.raceName == "Orgell" || player.title == "Royalty" && player.raceName == "Orgell")
            {
                player.kelFaction = 10; //green (kellish) Chieftan Har
                player.thengarFaction = -49; //brown (thengan) King Wolthgar
                player.freynorFaction = 0; //blue (freydic) King Jirdun
                player.aldrekFaction = -500; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = 500; //yellow (orgish) King Lysander
                player.vardanFaction = 0; //black (vardanian) High Count Arlod
                player.cephriteFaction = -49; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -49; //orange (nirinese) Queen Lelaine
            }
            else if (player.title == "Nobility" && player.raceName == "Vardan" || player.title == "Royalty" && player.raceName == "Vardan")
            {
                player.kelFaction = -20; //green (kellish) Chieftan Har
                player.thengarFaction = 25; //brown (thengan) King Wolthgar
                player.freynorFaction = 0; //blue (freydic) King Jirdun
                player.aldrekFaction = -35; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = 0; //yellow (orgish) King Lysander
                player.vardanFaction = 500; //black (vardanian) High Count Arlod
                player.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = 0; //orange (nirinese) Queen Lelaine
            }
            else if (player.title == "Nobility" && player.raceName == "Cephrite" || player.title == "Royalty" && player.raceName == "Cephrite")
            {
                player.kelFaction = 20; //green (kellish) Chieftan Har
                player.thengarFaction = 0; //brown (thengan) King Wolthgar
                player.freynorFaction = 0; //blue (freydic) King Jirdun
                player.aldrekFaction = -500; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = -45; //yellow (orgish) King Lysander
                player.vardanFaction = 0; //black (vardanian) High Count Arlod
                player.cephriteFaction = 500; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = -49; //orange (nirinese) Queen Lelaine
            }
            else if (player.title == "Nobility" && player.raceName == "Nirwaden" || player.title == "Royalty" && player.raceName == "Nirwaden")
            {
                player.kelFaction = 0; //green (kellish) Chieftan Har
                player.thengarFaction = -35; //brown (thengan) King Wolthgar
                player.freynorFaction = 0; //blue (freydic) King Jirdun
                player.aldrekFaction = -500; //red (aldrekii) Evaraxii Zoteff
                player.orgellFaction = -35; //yellow (orgish) King Lysander
                player.vardanFaction = -35; //black (vardanian) High Count Arlod
                player.cephriteFaction = -25; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
                player.nirwadenFaction = 500; //orange (nirinese) Queen Lelaine
            }

            //Race and rank based STARTER WEAPONS
            //FIGHTER starting weapon kits.
            if (player.class == "Fighter" && player.raceName == "Thengar")
            {
                if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner")
                {
                    Inventory.push([new Item("pickaxe", false, false), 1]);
                }
                else
                {
                    Inventory.push([new Item("longsword", false, false), 1]);
                }
            }
            else if (player.class == "Fighter" && player.raceName == "Vardan")
            {
                if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner")
                {
                    Inventory.push([new Item("vardanianAxe", false, false), 1]);
                }
                else
                {
                    Inventory.push([new Item("vardanianAxeDual", false, false), 1]);
                }
            }
            else if (player.class == "Fighter" && player.raceName == "Nirwaden")
            {
                Inventory.push([new Item("nirineseSabre", false, false), 1]);
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
            else if (player.class == "Fighter") //This is the general one for all that don't meet a specific exception.
            {
                Inventory.push([new Item("mace", false, false), 1]);
            }
            //RANGER starting weapon kit
            //TODO add different ranged weapons as starter weapons for different races.
            if (player.class == "Ranger" && player.raceName == "Aldrek")
            {
                if (player.title == "Vagabond" || player.title == "Peasant" || player.title == "Commoner" || player.title == "Tradefolk")
                {
                    Inventory.push([new Item("longbow", false, false), 1], [new Item("arrow", false, false), 25]);
                }
                else
                {
                    Inventory.push([new Item("longbow", false, false), 1], [new Item("aldrekiiArrow", false, false), 25]);
                }
            }
            else if (player.class == "Ranger")//This is the general one for all that don't meet a specific exception.
            {
                Inventory.push([new Item("longbow", false, false), 1], [new Item("arrow", false, false), 25]);
            }
            //MAGE starting weapon kit
            //TODO start mages off with a basic level combat magic scroll.
            if (player.class == "Mage")//This is the general one for all that don't meet a specific exception.
            {
                //TEST (take this out when the actual mage class starter kit is added)
                Inventory.push([new Item("aldrekiiBardiche", false, false), 1], [new Item("longbow", false, false), 1], [new Item("arrow", false, false), 55]);
            }

            //reset stats.
            player.setBaseStats();
            player.energy = player.energyMAX;
            player.health = player.healthMAX;
            player.will = player.willMAX;
            player.warmth = player.warmthMAX;
            player.thirst = player.thirstMAX;
            //Actually start the game here.
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
                    //Combat Style: Fighter
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
                        if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                        {
                            LXX.fillStyle = "black";
                            LXX.font = "12px Book Antiqua";
                            LXX.textAlign = "left";
                            LXX.fillText("Just because you grew up as the first child of a powerful Jarl doesn't mean that you didn't get your feet wet in the snow. As a youngin' you practised hunting land walruses with your father's men, and once you even watch one of your father's knights slay a giant gulfrey.", 5, (LCC.height / 2) + 4);

                            LXX.fillStyle = "black";
                            LXX.font = "12px Book Antiqua";
                            LXX.textAlign = "left";
                            LXX.fillText("When you came of age your father sat you down and told you that in order to be truly prepared for becoming jarl you would have to prove your worth to the Freydic people by walking, hunting, and fighting along side them. 'A Freydic jarl must know the land and the people.'", 5, (LCC.height / 2) + 16);
                        }
                    }
                    else if (player.raceName == "Kel")
                    {
                        Inventory = [];
                        Inventory.push([new Item("coins", false, false), 240]);
                        player.hunger = player.hungerMAX;
                        player.satiated = true;

                        //class low bar description
                        if (mouseX >= bX && mouseX <= bX + 210 && mouseY > bY && mouseY < bY + 30)
                        {
                            LXX.fillStyle = "black";
                            LXX.font = "12px Book Antiqua";
                            LXX.textAlign = "left";
                            LXX.fillText("Your mother is a Chieftan of one of the many Kellish tribes unified by Chieftan Har, growing up you knew it was your honor to inheirit the leadership and protection of your brothers and sisters in the tribe.", 5, (LCC.height / 2) + 4);

                            LXX.fillStyle = "black";
                            LXX.font = "12px Book Antiqua";
                            LXX.textAlign = "left";
                            LXX.fillText("When you came of age, your mother requested from you that you go on a spiritual quest of self awakening so that when you return you will have true wisdom to share with the brothers and sisters.", 5, (LCC.height / 2) + 16);
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
                            LXX.fillText("You grew up on the battlefielf with your father, who was constantly at war with one of his brother's counts or another. It wasn't until your father won the civil war and claimed the throne as high count that you were able to settle down, and when you did it wasn't", 5, (LCC.height / 2) + 4);

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
                            LXX.fillText("You grew up on the battlefielf with your father, who was constantly at war with one of his brother's counts or another. It wasn't until your father won the civil war and claimed the throne as high count that you were able to settle down, and when you did it wasn't", 5, (LCC.height / 2) + 4);

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
                            LXX.fillText("really saw much of him either. Eventually as you got older though you mother paid you more mind and explained to you that you were to travel the realm and gain experience during her reign so that you will be more fit to inherit the kingdom upon your return.", 5, (LCC.height / 2) + 16);
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
                            LXX.fillText("Your father High Chieftan Har treats you with no more respect than he does any other brother or sister, it is his duty to the tribes to promote a selection process where the tribes themselves pick the high chief. Such a position of", 5, (LCC.height / 2) + 4);

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
                            LXX.fillText("As a girl you grew up with a stone in your gut knowing that you would never inherit your father's position at the head of the Orgish Kingdom. You were to be sold into a royal marriage in a foriegn land. Even the though of becoming Queen", 5, (LCC.height / 2) + 4);

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
                            LXX.fillText("Also it just so happens that you had brought several large chests of coins with you on your sail to keep you company... So although you have been depose you are still extremely rich!", 5, (LCC.height / 2) + 16);
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
                    player.kelFaction = 75; //green (kellish) Chieftan Har
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
                    player.dexterity = 2;
                    player.ranged = 0;
                    player.stealth = 2;
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
                        LXX.fillText("The kellish are a friendly tribal people who live off of the land. Although the Kellish tribes were once seperate there has been a unification under the Kellish chieftan, Har, who has convinced his people to come together as one in defence of their homeland against Thengan aggression.", 5, (LCC.height / 2) + 4);
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
                    player.kelFaction = -200; //green (kellish) Chieftan Har
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
                    player.stealth = 0;
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
                    player.kelFaction = 10; //green (kellish) Chieftan Har
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
                    player.stealth = 0;
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
                    player.kelFaction = 10; //green (kellish) Chieftan Har
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
                    player.ranged = 2;
                    player.stealth = 0;
                    player.intelligence = 0;
                    player.endurance = 2;
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
                    player.kelFaction = 5; //green (kellish) Chieftan Har
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
                    player.stealth = 0;
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
                    player.kelFaction = -5; //green (kellish) Chieftan Har
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
                    player.stealth = 0;
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
                    player.kelFaction = 10; //green (kellish) Chieftan Har
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
                    player.stealth = 0;
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
                    player.kelFaction = 0; //green (kellish) Chieftan Har
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
                    player.stealth = 0;
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
                    player.kelFaction = -25; //green (kellish) Chieftan Har
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
                    player.stealth = 0;
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

        //The Main Menu
        if (gameState == "mainMenu") //Main Menu Mode
        {
            //Draw the main menu
            //set background for main canvas
            XXX.beginPath();
            XXX.fillStyle = "white";
            XXX.fillRect(0, 0, 1400, 550);
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
            //Title
            XXX.textAlign = "left";
            XXX.fillStyle = "black";
            XXX.font = "90px Impact";
            XXX.fillText("Select a Game to Load", 330, 90);

            //load the game functions
            this.loadClickability = function(x, y, w, h, loadNumber)
            {
                if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + w)
                {
                    XXX.beginPath();
                    XXX.fillStyle = "rgba(255,215,0, 0.35)";
                    XXX.lineWidth = "1";
                    XXX.rect(x, y, w, h);
                    XXX.fill();
                    XXX.stroke();

                    if (clicked == true)
                    {
                        clicked = false;
                        loadType = loadNumber;
                        gameState = "active";
                        load();
                        requestAnimationFrame(gameloopOfDestiny, CCC);
                    }
                }
            };
            //load buttons 1-3
                //load save 1;
                    //box
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.lineWidth = "1";
            XXX.rect(707.5, 180, 300, 300);
            XXX.fill();
            XXX.stroke();
            this.loadClickability(707.5, 180, 300, 300, 3);
                    //Data
            XXX.textAlign = "center";
            XXX.fillStyle = "black";
            XXX.font = "bold 50px Book Antiqua";
            XXX.fillText("Save 3", 857.5, 230);
                //load save 2;
                    //box
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.lineWidth = "1";
            XXX.rect(1027.5, 180, 300, 300);
            XXX.fill();
            XXX.stroke();
            this.loadClickability(1027.5, 180, 300, 300, 4);
                    //Data
            XXX.textAlign = "center";
            XXX.fillStyle = "black";
            XXX.font = "bold 50px Book Antiqua";
            XXX.fillText("Save 4", 1177.5, 230);
                //load save 3;
                    //box
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.lineWidth = "1";
            XXX.rect(367.5, 180, -300, 300);
            XXX.fill();
            XXX.stroke();
            this.loadClickability(67.5, 180, 300, 300, 1);
                    //Data
            XXX.textAlign = "center";
            XXX.fillStyle = "black";
            XXX.font = "bold 50px Book Antiqua";
            XXX.fillText("Save 1", 217.5, 230);
                //load save 4;
                    //box
            XXX.beginPath();
            XXX.fillStyle = "lightGrey";
            XXX.lineWidth = "1";
            XXX.rect(687.5, 180, -300, 300);
            XXX.fill();
            XXX.stroke();
            this.loadClickability(387.5, 180, 300, 300, 2);
                    //Data
            XXX.textAlign = "center";
            XXX.fillStyle = "black";
            XXX.font = "bold 50px Book Antiqua";
            XXX.fillText("Save 2", 537.5, 230);

            //requestAnimationFrame(gameloopOfDestiny, CCC);
        }


        if (gameState == "mainMenu" || gameState == "characterBuilder" || gameState == "loadSelect")
        {
            requestAnimationFrame(mainMenuLoop, CCC);
        }
    }

    //THIS IS THE MAIN GAME LOOP
    function gameloopOfDestiny(time)
    {


        XXX.clearRect(0, 0, 1400, 550);
        // Instead of clearing the interface bar is light grey.
        LXX.beginPath();
        LXX.fillStyle = "lightGrey";
        LXX.fillRect(0, 0, 1400, 80);

        // THIS IS THE BACKGROUND BUILDER (height, width, type x, y)
            //Different parts of the world load at different Y values.
        if (map == "world")
        {
            //Elevation 0 (cold region)
            if (Y < 6870 && X < 7687 && X > - 3901) //This is the central region
            {
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
            }
            if (Y < 6870 && X < 17891 && X > 6299) //This is the central region
            {
                region = "w1";
                outlineBuilder( 14, 6, "crag", -40, -20);
                outlineBuilder( 14, 6, "crag", -40, 0);
                outlineBuilder( 34, 14, "crag", -54, -20);
                outlineBuilder( 34, 14, "crag", -34, -20);
                outlineBuilder( 6, 6, "crag", -40, -6);
            }
            //Elevation 1 (frosty region) anti warmth effects start here
            if (Y > 6290 && Y < 32370) //this is the cold snowy environment
            {
                region = "n1";
                outlineBuilder( 20, 83, "frost", -80, -40);
                outlineBuilder( 80, 83, "snow", -80, -105);
            }
            //Elevation 2 (freezing region)
            if (Y > 31750 && Y < 77360) //this is the freezing arctic environment
            {
                region = "n2";
                outlineBuilder( 150, 83, "arctic", -80, -255);
            }
            //Elevation 3 (arctic region)
            if (Y > 76780) //this is the north Pole... basically.
            {
                region = "n3";
                outlineBuilder( 150, 83, "arctic", -80, -405);
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

        //STRUCTURES AND SCENERY
        //TODO build structures and scenery

        //DEAD BODIES
        deadAIOperationsManagement();

        //ITEMS
        ItemOperationsManager(); //This draws items to the world;

        //ENTITIES
        artificialIntelligenceOperationsManagement();
        mainCharacterAccess[0].operations(); //this activates all of the main character's methods and therefore makes the main character a part of the game.

        //PROJECTILES
        projectileOperationsManagement();

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

        if (gameState != "mainMenu" && gameState != "characterBuilder")
        {
            requestAnimationFrame(gameloopOfDestiny, CCC);
        }
    }

    //SENSING FUNCTIONS
        //double clicking
    var timeSinceDClick = 0;
    function doubleClicker(event)
    {
        dClick = true;
        timeSinceDClick = new Date().getTime();
    }
        //mouse move anywhere in the screen
    function getMousePositionOnWindow(event)
    {
        wMouseX = event.clientX;
        wMouseY = event.clientY;
        //console.log("Window's Mouse X = " + wMouseX + " :: Window's Mouse Y = " + wMouseY);
    }
        //mouse move in the main canvas
    function locateMouse(event)
    {
        mouseX = event.offsetX; //this sets the mouse coordinates.
        mouseY = event.offsetY; //this sets the mouse coordinates.
        //console.log(mouseX + mouseY);
    }
        //mouse move in the lower canvas
    function findMouse(event)
    {
        if (wMouseY < 452)
        {
            lMouseX = -1000; //this makes it so when you are not in the lower canvas it does not try to set your mouses position, which can accidentally click something you didn't want to.
            lMouseY = 1000;
        }
        else
        {
            lMouseX = event.offsetX; //this sets the mouse coordinates.
            lMouseY = event.offsetY; //this sets the mouse coordinates.
        }
    }
        //mouse-click
    function mouseClicked(event)
    {
        clicked = true;
        clickReleased = false;
    }
        //mouse-release from click
    var timeSinceMouseReleased = 0; //this represents the amount of time since the mouse was released.
    function mouseReleased(event)
    {
        clicked = false;
        timeSinceMouseReleased = new Date().getTime();
        clickReleased = true;
    }

    function isMouseReleasedDone()
    {
        if (new Date().getTime() - timeSinceMouseReleased > TTD)
        {
            clickReleased = false;
        }
        if (new Date().getTime() - timeSinceDClick > TTD)
        {
            dClick = false;
        }
    }
        //when a key is released
    function keyReleased(event)
    {
        var key = event.keyCode || event.which;

        if (key == 87)
        {
            wKey = false;
        }

        if (key == 32)
        {
            spaceKey = false;
        }

        if (key == 16)
        {
            shiftKey = false;
        }

        if (key == 18)
        {
            altKey = false;
        }
    }
        //when a key is held down
    function keyHeld(event)
    {
        var key = event.keyCode || event.which;

        if (key == 87)
        {
            wKey = true;
        }

        if (key == 32)
        {
            spaceKey = true;
        }

        if (key == 16)
        {
            shiftKey = true;
        }

        if (key == 18)
        {
            altKey = true;
        }
    }

    //This is the function that sets the difference in time that allows the game to maintain the same appearance of speed even when the gameloop is too slow or fast.
    function timeTracker(time)
    {
        if (beegin == "start")
        {
            TTP = time;
            beegin = null;
        }
        TTN = time;
        TTD = TTN - TTP;
        TTP = time;
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

    //The adventurer is the main character or the player.
    function Adventurer()
    {
        //Character related variables (non-code focused)
        this.name = "Name";
        //Leveling
        this.level = 1;
        this.experience = 0;
        this.experienceRequiredToLevel = 400 + (200 * (this.level - 1));
        this.skillPoints = 4; //you gain skill points every level that you can put into your skills. (4 points per level)
        this.totalSkillPoints = (4 * this.level) + 4;
        //Magical Leveling
        this.magicLevel = 0;
        this.magicalExperience = 0;
        this.magicalExperienceRequiredToLevel = 1000 + (400 * (this.level - 1));
        this.magicalSkillPoints = 0; //you gain magical skill points every magic level that you can put into magic related skills. ( 4 points per level)
        //Faction Relations
        this.kelFaction = 0; //green (kellish) Chieftan Har
        this.thengarFaction = 0; //brown (thengan) King Wolthgar
        this.freynorFaction = 0; //blue (freydic) King Jirdun
        this.aldrekFaction = 0; //red (aldrekii) Evaraxii Zoteff
        this.orgellFaction = 0; //yellow (orgish) King Lysander
        this.vardanFaction = 0; //black (vardanian) High Count Arlod
        this.cephriteFaction = 0; //purple (cephrian) Arch Magus Eferous and the grand council of the magi
        this.nirwadenFaction = 0; //orange (nirinese) Queen Lelaine
        //Skills
        this.constitution = 50; //this determines the amount of health that the player has. (4 health per point) (50 Maximum Constitution)
        this.strength = 5000; //this skill adds or subtracts from your physical damage blows based on whether or not it is positive or negative. [+ 5 points of carry weight per level] (50 Maximum Strength)
        this.stamina = 50; //stamina determines the amount of energy you have for running and attacking. (5 energy per point) (50 Maximum Stamina)
        this.dexterity = 20; //this determines how fast you can move and how fast you can run. (50 Maximum Dexterity) [don't let it be boosted past 86]
        this.ranged = 0; //this skill increases the effectiveness of ranged weaponry.
        this.stealth = 0; //this skill determines how well your character can sneak, meaning [alt key movement]. Better stealth allows you to sneak by your enemies without being detected, and it gives you a bonus to successful theft and any other thing that may require stealth... perhaps lockpicking. (50 Maximum Stealth)
        this.intelligence = 0; //intelligence helps you earn experience faster in both magical and physical leveling systems.
        this.endurance = 50; //this skill determines the rate of regeneration for both energy and health it also increases your total hunger points. (50 Maximum Endurance) [for developer use: 58.333 repeating is the maximum amount for energy regeneration before it breaks... at this speed it is basically instant. Health will regenerate in a negative direction though at this number, so be careful...]
        this.toughness = 0; //this skill determine the player's natural armour (up to 5!), or how much damage a player can take without it affecting the player's health. Toughness also increases the players resistance to the environment and it reduces the likeliness of taking on negative effects. (50 Maximum Toughness)
        this.charisma = 0; //this skill allows you to access certain options gained through socializing, and it also determines how fast you gain and lose fame. [high charisma means that you will gain positive as well as negative fame quicker because your actions are more noticed by people]
        //Skill Adjusters
        this.AdConstitution = 0; //this is the amount of stat adjustment to constitution.
        this.AdStrength = 0; //this is the amount of stat adjustment to strength.
        this.AdStamina = 0; //this is the amount of stat adjustment to stamina.
        this.AdDexterity = 0; //this is the amount of stat adjustment to dexterity.
        this.AdRanged = 0; //this is the amount of stat adjustment to ranged.
        this.AdStealth = 0; //this is the amount of stat adjustment to stealth.
        this.AdIntelligence = 0; //this is the amount of stat adjustment to intelligence.
        this.AdEndurance = 0; //this is the amount of stat adjustment to endurance.
        this.AdToughness = 0; //this is the amount of stat adjustment to toughness.
        this.AdCharisma = 0; //this is the amount of stat adjustment to charisma.
            //more skill adjusters
        this.dexBoost = 0; //this is stat adjustment by magic and potions.
        this.emiBoost = 0; //this is stat adjustment by magic and potions.
        //Magical Skills
        this.willpower = 0; //this is the amount of energy the caster has to cast magic with, like MP. (100 Maximum Willpower)
        this.knowledge = 0; //this determines what caliber of spells the caster can cast.
        this.concentration = 0; //this increases the effectiveness of the spells you cast.
        this.memory = 0; //this determines the rate of willpower regeneration. (100 Maximum Memory)
        this.eminence = 0; //this helps to determine your resistance to magical damage.
        //Magical Skill Adjusters
        this.AdWillpower = 0; //this is the amount of stat adjustment to willpower.
        this.AdKnowledge = 0; //this is the amount of stat adjustment to knowledge.
        this.AdConcentration = 0; //this is the amount of stat adjustment to concentration.
        this.AdMemory = 0; //this is the amount of stat adjustment to memory.
        this.AdEminence = 0; //this is the amount of stat adjustment to eminence.
        //Ascribed Traits [these traits are randomized when you start your character]
        this.title = "Fairy Princess"; //Your title is determined by your starting wealth. [ascribed titles include: scum, peasant, commoner, tradefolk, highfolk, nobility, and royalty]
        this.gender = "Female"; //this will determine which sex you start out as.
        this.raceName = "Faelan";
        this.race = "pink"; //your players race will be determined by this trait. [races in poly land are much different than in real life]
        this.class = "Politician"; //Your character's class will start your character out with a weapon appropriate to your favoured combat style.
        //Achieved Traits
        this.Status = []; //this is a list to be filled with all of the titles that the player earns or achieves.
        this.fame = 0; //this is how popular you are with the public, if it is positive it means that they like and honor you, and if it is negative it means that they hate and despise you. [fame is gained through quests and the slayings of certain dangerous beasts, whereas infamy is gained through crime and murder]
        this.subRace = "none"; //this is a race that you are not born as but you become, like a vampire or a werewolf.
        //SkillBased Stats
        this.antiVenomMAX = 0 + Math.floor((0.5 * this.toughness / 50) + (0.5 * this.endurance / 50)); //this is the maximum amount of venom resistance the player can have.
        this.antiVenom = this.antiVenomMAX; //this is the player's venom resistance.
        this.carryWeightMAX = 10 + (5 * this.strength);
        this.carryWeight = 0;
        this.magicalResistanceTotal = this.naturalMagicalResistance + this.magicalResistance; //this is the total resistance to magical attacks that your character has.
        this.naturalMagicalResistance = 0; //this is your characters natural magically-attained resistance to magical attacks.
        this.healthMAX = 0.1 + (4 * this.constitution); //maximum amount of damage the player can take.
        this.health = this.healthMAX; //amount of damage the player can take.
        this.energyMAX = 6 + (5 * this.stamina); //maximum amount of energy the player has.
        this.energy = this.energyMAX;//this.energyMAX; //characters energy for doing things.
        this.willMAX = 0.1 + this.willpower; //maximum amount of magical casting power.
        this.will = this.willMAX; //magical casting power.
        this.armourTotal = this.naturalArmour + this.armour; //amount of damage that is deducted from incoming attacks before it applies to the player's health.
        this.naturalArmour = 0; //amount of armour a player has without including armor that the player could wear.
        this.hungerMAX = 50;
        this.hunger = this.hungerMAX;
        //Non-SkillBased Stats
        this.armour = 0; //this is the armor that is gained from worn equipment.
        this.magicalResistance = 0; //this is the magical resistance that is gained from worn equipment.
        //Items and Such
        this.unskilledUse = false;
        this.weaponEquipped = "none";
        this.outfitEquipped = "none";

        //CODE FOCUSED VARIABLES (the stuff that is not so pretty to look at, but that makes the world go 'round)
        //position and build
        this.mySize = 10; // This determines the size of the player's body... Do not change this value!!!
        this.myScreenX = 700; //This is the midpoint X of the canvas.
        this.myScreenY = 275; //This is the midpoint Y of the canvas.
        this.rotation = 90 / 180 * Math.PI; //This is the rotation of your character in radians.
        //attacking variables
        this.stage = 0; //Stage represents which frame in a combat animation the character is on, and it is used to create weapon animations.
        this.attacking = false; //This variable is triggered by the attack button, when triggered and true it initiates an attack and it will not turn false again until that attack is carried out.
        this.resetFrameOrder = true; //This unlocks the animation for attacking when true, and locks it when false so that internal attack processes can finish up.
        //variables for walking and running related functions
        this.lLegY = 0; // this changes the length of the player's left leg
        this.rLegY = 0; // this changes the length of the player's right leg
        this.movingType = 1; //There are three four moving types 0: standing, 1: walking, 2: running, 3: sneaking
        this.legSwitch = 0;
        //Climate Affected Stats
        this.warmthMAX = 50 + (1 * this.endurance) + (4 * this.toughness); //This is how warm you are... if it goes to 0 or below then the player will start losing health at an average rate but also their speed will be massively decreased. [It only goes down in cold climates](freezing to death)
        this.warmth = this.warmthMAX; //This is the players current warmth.
        this.thirstMAX = 50 + (1 * this.endurance) + (4 * this.toughness); //This is how quenched you are... if it goes to 0 or below then the player will start losing health extremely fast. [It only goes down in hot climates](death by dehyrdration)
        this.thirst = this.thirstMAX; //This is the player's current thirst.
        this.timeSinceLastWarmthChange = new Date().getTime(); //This is the time since the last change in the player's warmth.
        this.timeSinceLastThirstChange = new Date().getTime();  //This is the time since the last change in the player's thirst.
        this.heatResistance = 0; //this is the amount of resistance from thirst depriving conditions and heat related effects the player has.
        this.warmthProtection = 0; //this is the amount of protection against the cold the player has.
        this.timeSinceLastColdRush = new Date().getTime(); //this is the time that has passed since the last time the player was hurt from being frozen.
        //Sensing related variables
        this.noticed = false; // if noticed is true it means that an AI Unit has and is currently noticing the player.
        this.inCombat = false; // this flag specifies whether or not the player is being attacked by a AI Unit.
        //attacking variables
        this.fistDamage = 0.25 + this.strength / 30; // this is the damage done by the player's fists
        this.bubbleOfDamageX = 0; //this is the x coordinate of the zone that the player hurts enemies with physical attacks in. (it changes based on the weapon.)
        this.bubbleOfDamageY = 0; //this is the y coordinate of the zone that the player hurts enemies with physical attacks in. (it changes based on the weapon.)
        this.weaponIsRanged = false; //this is flagged true if your weapon is a ranged weapon.
        this.weaponIsMagic = false; //this is flagged true if your weapon is a magical spell.
        this.finalAttackStage = false; //this lets you know when your attack animation is on its final frame.
        this.attackPause = new Date().getTime(); //This leaves a gap between your attacks so that you do not deal damage instantly.
        this.strike = false;
        this.releaseStage = false; //for archery this is the stage after the arrow has been loosed.
        this.ammoLoaded = false; //When the animation of loading the arrow/bolt etc. is done this flag turns on, allowing the player to shoot the projectile.
        this.reloadTime = new Date().getTime(); //this is the time that the player must wait before reloads.
            //archery
        this.projectileX = 0;
        this.projXAd = 0;
        this.projectileY = 0;
        this.projYAd = 0;
        //Spell variables
        this.fistMagicalDamage = 0; //This is the magical damage the player does with his/her fists.
        this.onTouchSpell = 0; //This is the magical effect brought on by "touch" (punching)
        //Inventory Variables
        this.inventoryPosition = 0;
        this.hinderance = false; //this is the state of being over-cucumbered.
        this.lootRadius = 50;
        this.distanceFromMouse = 0;
        this.isWeaponEquipped = false;
        this.isArmourEquipped = false;
        this.isAmmoEquipped = false;
        this.projectileReleased = true;
        this.rangedWeaponType = "none";
        //Shop Variables
        this.merchPosition = 0;
        //Bank Variables
        this.bankPosition = 0;
        //effects variables
        this.fedClock = 0; // this is the amount of time a player can avoid losing hunger after eating. This value is set elsewhere.
        this.fed = true; //When this is initiated the player will become satiated for a short duration of time.
        this.satiated = false; //This is an effect that means that the player is full and will not get hungry.
        this.gojiiTimer = 0;
        this.gojiiVomit = false; //this is a flag that makes sure that the vomiting part of gojii poisoning only happens once.
        this.timeSinceLastPoisoned = new Date().getTime();
        this.timeSinceBadFoodEaten = 0; //this is the time past which the player will throw up from food poisoning.
        this.poisonI = false;
        this.poisonII = false;
        this.poisonIII = false;
        this.poisonIV = false;
        this.poisonV = false;
        this.poisoned = false;
        this.gojiiPoisoned = false;
        this.timeSinceLastGutFeast = new Date().getTime();
        this.gutWorms = false; //this effect slowly saps the players hunger until the gutWorms starve to death or the player does at -1 hunger.
        this.freeze = 1; // this should be at one while the player has sufficient warmth. Otherwise, it should increase proportionally up to 4 by the time warmth is zero.
        this.frozen = false; //this is the flag that is triggered after the players warmth has reached 0 or below.
        this.parched = false; //this is the flag that is triggered after the players thirst has reached 0 or below.
        this.freezing = false; //this is the effect during which the player loses warmth.
        this.dehydration = false; //this is the effect during which the player loses thirst.
        this.recoverI = false;
        this.recoverII = false;
        this.recoverIII = false;
        this.recoverIV = false;
        this.recoverV = false;
        this.recovered = false; //this is the mini notice for health regeneration.
        this.recoveryTime = 0; //this is the amount of health bonuses the player gets over time.
        this.timeSinceLastRecovery = 0;
        this.energizeI = false;
        this.energizeII = false;
        this.energizeIII = false;
        this.energizeIV = false;
        this.energizeV = false;
        this.energized = false; //this is the mini notice for energy regeneration.
        this.energizeTime = 0; //this is the amount of energy bonuses the player gets over time.
        this.timeSinceLastEnergize = 0;
        this.speedI = false;
        this.speedII = false;
        this.speedIII = false;
        this.speedIV = false;
        this.speedV = false;
        this.dexTime = 0; //this is the amount of time that helps determine how long dexterity is magically increased.
        this.speedBoost = false; //this is the flag that indicates whether the effect is active for the mini notice system.
        this.timeSinceRawTrollBlood = 0; //this is the timer for troll poisoning
        this.trollPoisonActive = false; //this is the reset for troll poisonings magic resistance effect (resets the eminence boost to 0 when true)
        //utility or extra variables
        this.decreaseInHealth = 0;
        this.stage = 0;
        this.experienceToggle = "normal"; //This flag is for toggling between the magical experience bar and the regular one.

        //experience and leveling function
        this.doLeveling = function ()
        {
            if (this.raceName == "Cephrite")
            {
                this.totalSkillPoints = 4 * this.level;
                this.totalMagicPoints = (4 * this.magicLevel) + 4;
            }
            else
            {
                this.totalSkillPoints = (4 * this.level) + 4;
                this.totalMagicPoints = 4 * this.magicLevel;
            }

            this.magicalExperienceRequiredToLevel = 700 + (200 * (this.level - 1));
            this.experienceRequiredToLevel = 400 + (200 * (this.level - 1));

            if (this.experience >= this.experienceRequiredToLevel)
            {
                this.experience -= this.experienceRequiredToLevel;
                this.level += 1;
                this.skillPoints += 4;

                popDuration = new Date().getTime();
                popType = "levelup";
                //console.log("You are now level " + this.level + ", and now have " + this.skillPoints + " skill points to spend!");
            }

            if (this.magicalExperience >= this.magicalExperienceRequiredToLevel)
            {
                this.magicalExperience -= this.magicalExperienceRequiredToLevel;
                this.magicLevel += 1;
                this.magicalSkillPoints += 2;
            }
            //console.log(this.experience);
        };
        //set stats function
        this.setBaseStats = function ()
        {
            //this sets all other skills listed.
            this.fistDamage = 0.25 + (this.getStrength() / 50); // this is the damage done by the player's fists
            this.antiVenomMAX = 0 + (0.7 * (this.getToughness() / 50)) + (0.3 * (this.getEndurance() / 50)); //this is the maximum amount of venom resistance the player can have.
            this.carryWeightMAX = 10 + (5 * this.getStrength());
            this.naturalArmour = this.getToughness() / 10;
            this.armourTotal = this.naturalArmour + this.armour;
            this.willMAX = 0.1 + this.willpower;
            this.energyMAX = 6 + (5 * this.getStamina());
            this.healthMAX = 0.1 + (4 * this.getConstitution());
            this.naturalMagicalResistance = this.getEminence() / 5;
            this.magicalResistanceTotal = this.naturalMagicalResistance + this.magicalResistance;
            this.thirstMAX = 50 + (1 * this.getEndurance()) + (4 * this.getToughness());
            this.warmthMAX = 50 + (1 * this.getEndurance()) + (4 * this.getToughness());

            //this sets carry weight based on the total added weights in the player's inventory.
            if (Inventory.length > 0)
            {
                var totalWeight = 0;
                for (var i = 0; i < Inventory.length; i++)
                {
                    Inventory[i][0].setItemID();
                    totalWeight += (Inventory[i][0].weight * Inventory[i][1]); //this is the weight from the item times the amount of items of that type in the inventory.
                }
                this.carryWeight = totalWeight;
                //console.log("The carryWeight is: " + this.carryWeight + " out of a total potential weight limit of " + this.carryWeightMAX + ".")
            }
            else
            {
                this.carryWeight = 0; //If the Inventory is empty then the carry weight is 0.
            }
        };
        this.effects = function ()
        {
            this.climateEffects = function ()
            {
                //If the player's warmth is not at max then the flag for the mini notice is true otherwise it is false.
                if (this.warmth < this.warmthMAX)
                {
                    this.freezing = true;
                }
                else
                {
                    this.freezing = false;
                }

                //This is Where warmth and thirst will either increase or decrease depending on the region the player is in.
                if (region == "central" && new Date().getTime() - this.timeSinceLastWarmthChange > 1000) //every 0.85 seconds warmth increases if not at its max. Thirst only ever increases by intaking moisture... obviously.
                {
                    this.warmth = Math.min(this.warmthMAX, this.warmth + 1);
                    this.timeSinceLastWarmthChange = new Date().getTime();
                }
                else if (region == "w1" && new Date().getTime() - this.timeSinceLastWarmthChange > 1000) //every 0.85 seconds warmth increases if not at its max. Thirst only ever increases by intaking moisture... obviously.
                {
                    this.warmth = Math.min(this.warmthMAX, this.warmth + 1);
                    this.timeSinceLastWarmthChange = new Date().getTime();
                }
                else if (region == "n1" && new Date().getTime() - this.timeSinceLastWarmthChange > 12000)
                {
                    this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (1 - this.warmthProtection)));
                    this.timeSinceLastWarmthChange = new Date().getTime();
                }
                else if (region == "n2" && new Date().getTime() - this.timeSinceLastWarmthChange > 10000)
                {
                    this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (2 - this.warmthProtection)));
                    this.timeSinceLastWarmthChange = new Date().getTime();
                }
                else if (region == "n3" && new Date().getTime() - this.timeSinceLastWarmthChange > 8000)
                {
                    this.warmth = Math.min(this.warmthMAX, Math.min(this.warmth + 0, this.warmth - (4 - this.warmthProtection)));
                    this.timeSinceLastWarmthChange = new Date().getTime();
                }

                //This is where frozen is is set to true when your warmth runs out. //It Applies the speed decrease based on warmth here as well.
                if (this.warmth <= 0)
                {
                    this.warmth = 0;
                    this.frozen = true;
                    this.freeze = 4;
                }
                else if (this.warmth <= 10)
                {
                    this.frozen = false;
                    this.freeze = 3.44;
                }
                else if (this.warmth <= 20)
                {
                    this.frozen = false;
                    this.freeze = 3;
                }
                else if (this.warmth <= 25)
                {
                    this.frozen = false;
                    this.freeze = 2.44;
                }
                else if (this.warmth <= 30)
                {
                    this.frozen = false;
                    this.freeze = 2;
                }
                else if (this.warmth <= 40)
                {
                    this.frozen = false;
                    this.freeze = 1.44;
                }
                else
                {
                    this.frozen = false;
                    this.freeze = 1;
                }

                //If frozen is true decrease
                if (this.frozen == true)
                {
                    if (new Date().getTime() - this.timeSinceLastColdRush > 4000)
                    {
                        this.timeSinceLastColdRush = new Date().getTime();
                        this.health -= 4;
                    }
                }
            };

            this.overCucumbered = function ()
            {
                if (this.carryWeight > this.carryWeightMAX || this.unskilledUse == true)
                {
                    this.hinderance = true; //This is the flag that notes whether or not the player is carrying to much.//TODO make a mini notice for hinderance... it should look like and old fashioned circus weight.
                }
                else
                {
                    this.hinderance = false;
                }

                if (this.hinderance == true) //If the player is carrying too much then they are slowed down depending on how much above the maximum they are carrying.
                {
                    //slowness for using armour that is beyond your toughness level.
                    if (this.unskilledUse == true)
                    {
                        this.freeze = Math.max(this.freeze, 22);
                    }
                    else if (this.carryWeight > this.carryWeightMAX * 4)
                    {
                        this.freeze = Math.max(this.freeze, 20);
                    }
                    else if (this.carryWeight > this.carryWeightMAX * 3.5)
                    {
                        this.freeze = Math.max(this.freeze, 15);
                    }
                    else if (this.carryWeight > this.carryWeightMAX * 3)
                    {
                        this.freeze = Math.max(this.freeze, 11);
                    }
                    else if (this.carryWeight > this.carryWeightMAX * 2.5)
                    {
                        this.freeze = Math.max(this.freeze, 9);
                    }
                    else if (this.carryWeight > this.carryWeightMAX * 2.25)
                    {
                        this.freeze = Math.max(this.freeze, 7);
                    }
                    else if (this.carryWeight > this.carryWeightMAX * 2)
                    {
                        this.freeze = Math.max(this.freeze, 5);
                    }
                    else if (this.carryWeight > this.carryWeightMAX * 1.75)
                    {
                        this.freeze = Math.max(this.freeze, 4);
                    }
                    else if (this.carryWeight > this.carryWeightMAX * 1.5)
                    {
                        this.freeze = Math.max(this.freeze, 3);
                    }
                    else if (this.carryWeight > this.carryWeightMAX * 1.25)
                    {
                        this.freeze = Math.max(this.freeze, 2);
                    }
                    else if (this.carryWeight > this.carryWeightMAX)
                    {
                        this.freeze = Math.max(this.freeze, 1.5);
                    }
                }
                //freeze will otherwise be set in the function prior to this "climateEffects" so it will be at the standard (freeze == 1) if the player is not below on his/her warmth stat.
            };

            this.gutWorm = function ()
            {
                if (this.hunger <= -1)
                {
                    this.gutWorms = false;
                }
                if (this.gutWorms == true && new Date().getTime() - this.timeSinceLastGutFeast >= 100)
                {
                    //reset the timer for the gutworms feasting.
                    this.timeSinceLastGutFeast = new Date().getTime();
                    //Take away hunger from the player because the gut-worms are eating the player's nutrition and calorie intake.
                    this.hunger -= 0.005125 * (TTD / 16.75);
                }
            };

            this.recovery = function() //for health and energy regenerations
            {
                //This enables the poisoned mini notice if any type of any category of energy restore is in effect.
                if (this.energizeI || this.energizeII || this.energizeIII || this.energizeIV || this.energizeV)
                {
                    this.energized = true;
                }
                else
                {
                    this.energized = false;
                }

                //This enables the poisoned mini notice if any type of any category of health restore is in effect.
                if (this.recoverI || this.recoverII || this.recoverIII || this.recoverIV || this.recoverV)
                {
                    this.recovered = true;
                }
                else
                {
                    this.recovered = false;
                }

                //This section covers all five ranks of the basic type of health regeneration.
                if (this.recoveryTime > 0)
                {
                    if (this.recoverV == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                    {
                        //reset the timer for the poison.
                        this.timeSinceLastRecovery = new Date().getTime();
                        //Take away health
                        this.health = Math.min(this.healthMAX, this.health + (2 / 10));
                        this.recoveryTime -= 1;
                    }
                    else if (this.recoverIV == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                    {
                        //reset the timer for the poison.
                        this.timeSinceLastRecovery = new Date().getTime();
                        //Take away health
                        this.health = Math.min(this.healthMAX, this.health + (2 / 20));
                        this.recoveryTime -= 1;
                    }
                    else if (this.recoverIII == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                    {
                        //reset the timer for the poison.
                        this.timeSinceLastRecovery = new Date().getTime();
                        //Take away health
                        this.health = Math.min(this.healthMAX, this.health + (2 / 30));
                        this.recoveryTime -= 1;
                    }
                    if (this.recoverII == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                    {
                        //reset the timer for the poison.
                        this.timeSinceLastRecovery = new Date().getTime();
                        //Take away health
                        this.health = Math.min(this.healthMAX, this.health + (2 / 40));
                        this.recoveryTime -= 1;
                    }
                    else if (this.recoverI == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                    {
                        //reset the timer for the poison.
                        this.timeSinceLastRecovery = new Date().getTime();
                        //Take away health
                        this.health = Math.min(this.healthMAX, this.health + (2 / 50));
                        this.recoveryTime -= 1;
                    }
                }
                else
                {
                    this.recoverI = false;
                    this.recoverII = false;
                    this.recoverIII = false;
                    this.recoverIV = false;
                    this.recoverV = false;
                }

                //This section covers all five ranks of the basic type of energy regeneration.
                if (this.energizeTime > 0)
                {
                    if (this.energizeV == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                    {
                        //reset the timer for the poison.
                        this.timeSinceLastRecovery = new Date().getTime();
                        //Take away health
                        this.energy = Math.min(this.energyMAX, this.energy + (3 / 10));
                        this.energizeTime -= 1;
                    }
                    else if (this.energizeIV == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                    {
                        //reset the timer for the poison.
                        this.timeSinceLastRecovery = new Date().getTime();
                        //Take away health
                        this.energy = Math.min(this.energyMAX, this.energy + (3 / 20));
                        this.energizeTime -= 1;
                    }
                    else if (this.energizeIII == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                    {
                        //reset the timer for the poison.
                        this.timeSinceLastRecovery = new Date().getTime();
                        //Take away health
                        this.energy = Math.min(this.energyMAX, this.energy + (3 / 30));
                        this.energizeTime -= 1;
                    }
                    if (this.energizeII == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                    {
                        //reset the timer for the poison.
                        this.timeSinceLastRecovery = new Date().getTime();
                        //Take away health
                        this.energy = Math.min(this.energyMAX, this.energy + (3 / 40));
                        this.energizeTime -= 1;
                    }
                    else if (this.energizeI == true && new Date().getTime() - this.timeSinceLastRecovery > 50)
                    {
                        //reset the timer for the poison.
                        this.timeSinceLastRecovery = new Date().getTime();
                        //Take away health
                        this.energy = Math.min(this.energyMAX, this.energy + (3 / 50));
                        this.energizeTime -= 1;
                    }
                }
                else
                {
                    this.energizeI = false;
                    this.energizeII = false;
                    this.energizeIII = false;
                    this.energizeIV = false;
                    this.energizeV = false;
                }
            };

            this.skillBoost = function()
            {
                //This is the flag setter for dexterity boosts.
                if (this.speedI || this.speedII || this.speedIII || this.speedIV || this.speedV)
                {
                    this.speedBoost = true;
                }
                else
                {
                    if (this.speedBoost == true)
                    {
                        this.dexBoost = 0;
                        this.speedBoost = false;
                    }
                }

                //This applies the boost.
                if (this.speedV == true && new Date().getTime() - this.dexTime < 25000)
                {
                    rapidamente = true;
                }
                else if (this.speedIV == true && new Date().getTime() - this.dexTime < 25000)
                {
                    this.dexBoost = 65;
                }
                else if (this.speedIII == true && new Date().getTime() - this.dexTime < 25000)
                {
                    this.dexBoost = 55;
                }
                if (this.speedII == true && new Date().getTime() - this.dexTime < 25000)
                {
                    this.dexBoost = 45;
                }
                else if (this.speedI == true && new Date().getTime() - this.dexTime < 25000)
                {
                    this.dexBoost = 35;
                }
                else
                {
                    this.dexBoost = false;
                    if (developerRapidamente == false)
                    {
                        rapidamente = false;
                    }

                    this.speedI = false;
                    this.speedII = false;
                    this.speedIII = false;
                    this.speedIV = false;
                    this.speedV = false;
                }
            };

            this.poison = function ()
            {
                //This enables the poisoned mini notice if any type of any category of poison is in effect.
                if (this.poisonI == true || this.poisonII == true || this.poisonIII == true || this.poisonIV == true || this.poisonV == true)
                {
                    this.poisoned = true;
                }
                else
                {
                    this.poisoned = false;
                }

                //This section covers all five ranks of the basic type of poison.
                if (this.poisonV == true && new Date().getTime() - this.timeSinceLastPoisoned > 2000)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastPoisoned = new Date().getTime();
                    //Take away health
                    this.health -= Math.max(0, (6 - (this.antiVenom * 2)));
                }
                else if (this.poisonIV == true && new Date().getTime() - this.timeSinceLastPoisoned > 3000)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastPoisoned = new Date().getTime();
                    //Take away health
                    this.health -= Math.max(0, (5 - (this.antiVenom * 2)));
                }
                else if (this.poisonIII == true && new Date().getTime() - this.timeSinceLastPoisoned > 4000)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastPoisoned = new Date().getTime();
                    //Take away health
                    this.health -= Math.max(0, (4 - (this.antiVenom * 2)));
                }
                if (this.poisonII == true && new Date().getTime() - this.timeSinceLastPoisoned > 6000)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastPoisoned = new Date().getTime();
                    //Take away health
                    this.health -= Math.max(0, (3 - (this.antiVenom * 2)));
                }
                else if (this.poisonI == true && new Date().getTime() - this.timeSinceLastPoisoned > 8000)
                {
                    //reset the timer for the poison.
                    this.timeSinceLastPoisoned = new Date().getTime();
                    //Take away health
                    this.health -= Math.max(0, (2 - (this.antiVenom * 2)));
                }

                //gojii berry poison
                if (new Date().getTime() - this.gojiiTimer >= 300000 && new Date().getTime() - this.gojiiTimer < 301000) //was 240000
                {

                    if (this.gojiiVomit == true)
                    {
                        worldItems.push(new Item("vomit", X, Y));
                        worldItems.push(new Item("vomit", X, Y));
                        this.hunger = Math.max(0, this.hunger - 48);
                        this.gojiiVomit = false;
                    }
                    this.antiVenom = 0;
                    this.poisonV = true;
                    this.energy = -10;
                    this.will = 0;
                    this.gojiiPoisoned = true;
                }

                //Food poisoning
                if (new Date().getTime() - this.timeSinceBadFoodEaten >= 33000 && new Date().getTime() - this.timeSinceBadFoodEaten < 34000)
                {
                    worldItems.push(new Item("vomit", X, Y));
                    this.hunger = Math.max(0, this.hunger - 24);
                    this.energy -= 3;
                    this.timeSinceBadFoodEaten = 0;
                }

                //Troll poisoning
                if (new Date().getTime() - this.timeSinceRawTrollBlood < 25000)
                {
                    this.emiBoost = 5;
                    this.trollPoisonActive = true; //this triggers the mini notice.
                }
                else
                {
                    if (this.trollPoisonActive == true)
                    {
                        this.emiBoost = 0;
                        this.trollPoisonActive = false;
                    }
                }

                //TODO different types of poisons will get their own seperate categories!
            };

            //Effects Operations
            //major game effects
            this.climateEffects(); //TODO in progress... add dehydration!
            this.overCucumbered(); //If the player is carrying too much weight the player all of a sudden becomes submersed in invisible cucumbers making it very challenging for him/her to move.
            //minor game effects
            this.gutWorm();
            this.poison();
            this.recovery();
            this.skillBoost();
        };

        //operations for the stat/variables regarding the characters skills and leveling
        this.skillOperations = function ()
        {
            //basic skills
            this.doLeveling();
            this.setBaseStats();
        };

        //SKILL BACKUP FUNCTIONS (these functions will allow base skills to be adjusted while retaining the original value of the skill)
        //this function sets endurance to itself if not in the instant regeneration developer mode otherwise it sets it to 58.333
        this.getEndurance = function ()
        {
            if (energyDrink == true) //Increases energy instantly but decreases health at about - 1 per every four seconds.
            {
                //If developerMode "instantRegeneration" is on the players endurance will rise to the highest possible point without breaking
                return 58.333;
            }
            else if (quickRegeneration == true) //Increases Both health and energy Quickly, but health much more quickly than energy.
            {
                return 53.555;
            }
            else if (this.gojiiPoisoned == true)
            {
                return Math.max(0, (this.endurance + this.AdEndurance) / 2);
            }
            else // returns the normal amount.
            {
                return Math.max(0, Math.min(this.endurance + this.AdEndurance, 53.555));
            }
        };
        this.getStrength = function ()
        {
            if (incredibleHulk == true) //increases strength a lot!!!
            {
                //If developerMode "incredibleHulk" is on the players strength will be ten times the normal maximum.
                return 500;
            }
            else if (this.gojiiPoisoned == true)
            {
                return Math.max(0, (this.strength + this.AdStrength) / 2);
            }
            else // returns the normal amount.
            {
                return Math.max(0, (this.strength + this.AdStrength));
            }
        };
        this.getConstitution = function ()
        {
            if (incredibleHulk == true) //increases health a lot!!!
            {
                //If developerMode "incredibleHulk" is on the players constitution will be five times its normal maximum.
                return 250;
            }
            else // returns the normal amount.
            {
                return Math.max(0, (this.constitution + this.AdConstitution));
            }
        };
        this.getDexterity = function ()
        {
            if (rapidamente == true)
            {
                return 350;
            }
            else if (this.gojiiPoisoned == true) //increases health a lot!!!
            {
                //If developerMode "incredibleHulk" is on the players constitution will be five times its normal maximum.
                return Math.max(0, Math.min(86, (this.dexterity + this.AdDexterity + this.dexBoost) / 12));
            }
            else if (this.frozen == true)
            {
                return Math.max(0, Math.min(86, (this.dexterity + this.AdDexterity + this.dexBoost) / 10));
            }
            else // returns the normal amount.
            {
                return Math.max(0, Math.min(86, (this.dexterity + this.AdDexterity + this.dexBoost)));
            }
        };

        this.getStamina = function ()
        {
            return (Math.max(0, this.stamina + this.AdStamina));
        };

        this.getToughness = function ()
        {
            return (Math.max(0, this.toughness + this.AdToughness));
        };

        this.getRanged = function ()
        {
            return (Math.max(0, this.ranged + this.AdRanged));
        };

        this.getStealth = function ()
        {
            return (Math.max(0, this.stealth + this.AdStealth));
        };

        this.getIntelligence = function ()
        {
            return (Math.max(0, this.intelligence + this.AdIntelligence));
        };

        this.getCharisma = function ()
        {
            return (Math.max(0, this.charisma + this.AdCharisma));
        };

        this.getWillpower = function ()
        {
            return (Math.max(0, this.willpower + this.AdWillpower));
        };

        this.getConcentration = function ()
        {
            return (Math.max(0, this.concentration + this.AdConcentration));
        };

        this.getMemory = function ()
        {
            return (Math.max(0, this.memory + this.AdMemory));
        };

        this.getEminence = function ()
        {
            return (Math.max(0, this.eminence + this.AdEminence + this.emiBoost));
        };

        //MINI NOTICES
        //THIS IS DAD's example of how to make a miniNotice bar

        //this.notices = [];
        //
        //this.addNotice( name )
        //{
        //    if (name in notices)
        //        return;
        //    notices.push( name );
        //};
        //this.removeNotice( name )
        //{
        //    var pos = notices.indexOf( name );
        //    if (pos != -1)
        //        notices.splice( pos, 1 );
        //};

        this.miniNoticeList = [];

        this.addNotice = function (name)
        {
            var positionInNoticeList = this.miniNoticeList.indexOf(name);
            if (positionInNoticeList in this.miniNoticeList)
            {
                return;
            }
            else
            {
                this.miniNoticeList.push(name);
                positionInNoticeList = this.miniNoticeList.indexOf(name);
            }
        };

        this.removeNotice = function (name)
        {
            var positionInNoticeList = this.miniNoticeList.indexOf(name); //This looks through the mini notice list and finds the position of the object you are looking for.
            if (positionInNoticeList != -1) //if it is not equal to negative one, which is the return when something is not in a list...
            {
                //then remove it from the list
                this.miniNoticeList.splice(positionInNoticeList, 1);
            }
        };

        this.arrangeNotices = function (name)
        {
            var positionInNoticeList = this.miniNoticeList.indexOf(name);
            for (var i = 0; i < this.miniNoticeList.length; i++)
            {
                if (i == positionInNoticeList)
                {
                    return (1 + (21 * i));
                }
            }
        };
        //FREEZING Notice Function
        this.freezingChecker = function ()
        {
            if (this.freezing == true)
            {
                // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.

                this.addNotice("freezing");
                //blue background
                XXX.beginPath();
                XXX.fillStyle = "rgba(255, 255, 255, 1)";
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.rect(this.arrangeNotices("freezing"), 436, 20, 20);
                XXX.fill();
                XXX.stroke();
                //white cover layer that fades away as warmth gos away
                var trans = Math.max(0.15, Math.min(1, this.warmth / 50)); // this is how faded the white layer should be.
                XXX.beginPath();
                XXX.fillStyle = "rgba(65, 105, 225, " + trans + ")";
                XXX.rect(this.arrangeNotices("freezing"), 436, 20, 20);
                XXX.fill();
                XXX.drawImage(polyPNG, 207, 7, 13, 12, this.arrangeNotices("freezing") + 1, 438, 20, 20);
            }
            else
            {
                //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
                this.removeNotice("freezing");
            }
        };
        //Gut Worms Notice Function
        this.gutWormsChecker = function ()
        {
            if (this.gutWorms == true)
            {
                // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
                this.addNotice("gutWorms");
                //pinkish gut-like background colour.
                XXX.beginPath();
                XXX.fillStyle = "rgba(255, 255, 255, 1)";
                XXX.rect(this.arrangeNotices("gutWorms"), 436, 20, 20);
                XXX.fill();

                //pinkish gut-like background colour.
                XXX.beginPath();
                XXX.fillStyle = "rgba(233, 150, 122, 0.4)";
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.rect(this.arrangeNotices("gutWorms"), 436, 20, 20);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 5, 716, 18, 16, this.arrangeNotices("gutWorms") + 0, 437, 20, 20);
            }
            else
            {
                //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
                this.removeNotice("gutWorms");
            }
        };
        //RECOVERY Notice Function
        this.recoveredChecker = function ()
        {
            if (this.recovered == true)
            {
                // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
                this.addNotice("recovery");
                //the background
                XXX.beginPath();
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.fillStyle = "lightGreen";
                XXX.rect(this.arrangeNotices("recovery"), 436, 20, 20);
                XXX.fill();
                XXX.stroke();
                //the image
                XXX.drawImage(polyPNG, 36, 26, 13, 11, this.arrangeNotices("recovery") - 0.75, 436, 21, 20);
            }
            else
            {
                //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
                this.removeNotice("recovery");
            }
        };

        //ENERGIZED Notice Function
        this.energizedChecker = function ()
        {
            if (this.energized == true)
            {
                // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
                this.addNotice("energized");
                //the background
                XXX.beginPath();
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.fillStyle = "#ffff99";
                XXX.rect(this.arrangeNotices("energized"), 436, 20, 20);
                XXX.fill();
                XXX.stroke();
                //the image
                XXX.drawImage(polyPNG, 63, 25, 13, 14, this.arrangeNotices("energized") - 1.525, 436, 24, 20);
            }
            else
            {
                //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
                this.removeNotice("energized");
            }
        };

        //SPEED BOOST Notice Function
        this.speedBoostChecker = function ()
        {
            if (this.speedBoost == true)
            {
                // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
                this.addNotice("quickness");
                //the background
                XXX.beginPath();
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.fillStyle = "#cca400";
                XXX.rect(this.arrangeNotices("quickness"), 436, 20, 20);
                XXX.fill();
                XXX.stroke();
                //the image
                XXX.drawImage(polyPNG, 77, 27, 13, 13, this.arrangeNotices("quickness") - 0.5, 436, 20, 20);
            }
            else
            {
                //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
                this.removeNotice("quickness");
            }
        };

        //TROLL POISON Notice Function
        this.trollPoisonChecker = function ()
        {
            if (this.trollPoisonActive == true)
            {
                // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
                this.addNotice("trollPoison");
                //the background
                XXX.beginPath();
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.fillStyle = "#d9ff66";
                XXX.rect(this.arrangeNotices("trollPoison"), 436, 20, 20);
                XXX.fill();
                XXX.stroke();
                //the image
                XXX.drawImage(polyPNG, 16, 24, 18, 16, this.arrangeNotices("trollPoison") - 0.70, 437.3, 19.8, 17.6);
            }
            else
            {
                //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
                this.removeNotice("trollPoison");
            }
        };
        //HINDERANCE Notice Function
        this.hinderanceChecker = function ()
        {
            if (this.hinderance == true)
            {
                // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
                this.addNotice("hinderance");
                XXX.beginPath();
                XXX.fillStyle = "slategrey";
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.rect(this.arrangeNotices("hinderance"), 436, 20, 20);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 232, 5, 17, 14, this.arrangeNotices("hinderance") - 0.6, 437, 21.25, 17.5);
            }
            else
            {
                //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
                this.removeNotice("hinderance");
            }
        };

        this.poisonedChecker = function ()
        {
            if (this.poisoned == true)
            {
                // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.
                this.addNotice("poisoned");
                XXX.beginPath();
                XXX.fillStyle = "darkseagreen";
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.rect(this.arrangeNotices("poisoned"), 436, 20, 20);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 5, 1, 21, 18, this.arrangeNotices("poisoned") + 0.25, 436.75, 21, 20);
            }
            else
            {
                //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
                this.removeNotice("poisoned");
            }
        };

        //SATIATION Notice Function
        this.satiationChecker = function ()
        {
            if (this.satiated == true)
            {
                // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.

                this.addNotice("satiation");
                XXX.beginPath();
                XXX.fillStyle = "darkOrange";
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.rect(this.arrangeNotices("satiation"), 436, 20, 20);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 124, 6, 17, 19, this.arrangeNotices("satiation"), 436, 17, 19);
            }
            else
            {
                //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
                this.removeNotice("satiation");
            }
        };

        //SEEN BY TARGET Notice Function (noticed by any AI unit)
        this.noticedChecker = function ()
        {
            var hits = 0;
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].playerSeen == true)
                {
                    hits += 1;
                }
            }
            if (hits > 0)
            {
                this.noticed = true;
            }
            else
            {
                this.noticed = false;
            }

            if (this.noticed == true)
            {
                // at this point the slot should be consistent so it should not have to check again to be entered into a position on the miniNoticeList.

                this.addNotice("noticed");
                XXX.beginPath();
                XXX.fillStyle = "darkGrey";
                XXX.lineWidth = 1;
                XXX.strokeStyle = "black";
                XXX.rect(this.arrangeNotices("noticed"), 436, 20, 20);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 28, 8, 52, 14, this.arrangeNotices("noticed"), 443, 27 * 0.7, 7 * 0.7); // main Y + 7 :: main X + 0
            }
            else
            {
                //at this point the slot will have been cleared so next time the effect shows up it should have to check again to be entered into a position on the miniNoticeList.
                this.removeNotice("noticed");
            }
        };

        //Mini Notice Operations Function
        this.miniNotices = function ()
        {
            this.arrangeNotices();
            this.noticedChecker();
            this.satiationChecker();
            this.freezingChecker();
            this.hinderanceChecker();
            this.gutWormsChecker();
            this.poisonedChecker();
            this.recoveredChecker();
            this.trollPoisonChecker();
            this.energizedChecker();
            this.speedBoostChecker();
        };

        //MOVEMENT ANIMATION
        //walking, running, sneaking, etc.
        this.movement = function ()
        {
            // self = this because apparently you can not use this in a setTimeout which I needed to use to pace the walking animation speed.
            var self = this;

            // if the player is standing, the player's legs are not moving or changing.
            //STANDING
            if (this.movingType == 0)
            {
                this.lLegY = 0;
                this.rLegY = 0;
            }
            // if the player is walking then the player's legs move back and forth to simulate walking.
            //WALKING
            if (rapidamente == true)
            {
                if (this.lLegY < 27 && this.legSwitch == 0)
                {
                    // this makes the legs extend
                    self.lLegY += 1 * TTD / (12.35 - (0.25 / 2 * 86));
                    self.rLegY -= 1 * TTD / (12.35 - (0.25 / 2 * 86));
                }
                else
                {
                    // switch to the left leg forward routine.
                    this.legSwitch = 1;
                }

                if (this.lLegY > -27 && this.legSwitch == 1)
                {
                    // this makes the legs extend
                    self.lLegY -= 1 * TTD / (12.35 - (0.25 / 2 * 86));
                    self.rLegY += 1 * TTD / (12.35 - (0.25 / 2 * 86));
                }
                else
                {
                    // switch to the left leg forward routine.
                    this.legSwitch = 0;
                }
            }
            else if (this.movingType == 1)
            {
                // the right leg goes back 25 pixles and the left goes forward 25.
                if (this.lLegY < 23 && this.legSwitch == 0)
                {
                    // this makes the legs extend
                    self.lLegY += 1 * TTD / (16.75 - (0.17 / 2 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                    self.rLegY -= 1 * TTD / (16.75 - (0.17 / 2 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
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
                    self.lLegY -= 1 * TTD / (16.75 - (0.17 / 2 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                    self.rLegY += 1 * TTD / (16.75 - (0.17 / 2 * this.getDexterity())); // 0.17 subtracted from the DT stabilizer is to make the walking animation speed as dexterity is increased.
                    //console.log("right" + " " + self.lLegY + " " + self.rLegY);
                }
                else
                {
                    // switch to the left leg forward routine.
                    this.legSwitch = 0;
                }
            }
            //RUNNING
            //You can only run if you have the energy...

            if (this.movingType == 2)
            {
                // the right leg goes back 25 pixles and the left goes forward 25.
                if (this.lLegY < 27 && this.legSwitch == 0)
                {
                    // this makes the legs extend
                    self.lLegY += 1 * TTD / (12.35 - (0.25 / 2 * this.getDexterity())); // 0.25 subtracted from the DT stabilizer is to make the running animation speed as dexterity is increased.
                    self.rLegY -= 1 * TTD / (12.35 - (0.25 / 2 * this.getDexterity())); // 0.25 subtracted from the DT stabilizer is to make the running animation speed as dexterity is increased.
                    //console.log("left" + " " + self.lLegY + " " + self.rLegY);
                }
                else
                {
                    //switch to the right leg forward routine.
                    this.legSwitch = 1;
                }

                // the left leg goes back 25 pixles and the right goes forward 25.
                if (this.lLegY > -27 && this.legSwitch == 1)
                {
                    // this makes the legs extend
                    self.lLegY -= 1 * TTD / (12.35 - (0.25 / 2 * this.getDexterity())); // 0.25 subtracted from the DT stabilizer is to make the running animation speed as dexterity is increased.
                    self.rLegY += 1 * TTD / (12.35 - (0.25 / 2 * this.getDexterity())); // 0.25 subtracted from the DT stabilizer is to make the running animation speed as dexterity is increased.
                    //console.log("right" + " " + self.lLegY + " " + self.rLegY);
                }
                else
                {
                    // switch to the left leg forward routine.
                    this.legSwitch = 0;
                }
            }
            //SNEAKING
            if (this.movingType == 3)
            {
                // the right leg goes back 25 pixles and the left goes forward 25.
                if (this.lLegY < 15 && this.legSwitch == 0)
                {
                    // this makes the legs extend
                    self.lLegY += 1 * TTD / (50.75 - (0.3 / 2 * this.getDexterity())); // 0.3 subtracted from the DT stabilizer is to make the sneaking animation speed as dexterity is increased.
                    self.rLegY -= 1 * TTD / (50.75 - (0.3 / 2 * this.getDexterity())); // 0.3 subtracted from the DT stabilizer is to make the sneaking animation speed as dexterity is increased.
                    //console.log("left" + " " + self.lLegY + " " + self.rLegY);
                }
                else
                {
                    //switch to the right leg forward routine.
                    this.legSwitch = 1;
                }

                // the left leg goes back 25 pixles and the right goes forward 25.
                if (this.lLegY > -15 && this.legSwitch == 1)
                {
                    // this makes the legs extend
                    self.lLegY -= 1 * TTD / (50.75 - (0.3 / 2 * this.getDexterity())); // 0.3 subtracted from the DT stabilizer is to make the sneaking animation speed as dexterity is increased.
                    self.rLegY += 1 * TTD / (50.75 - (0.3 / 2 * this.getDexterity())); // 0.3 subtracted from the DT stabilizer is to make the sneaking animation speed as dexterity is increased.
                    //console.log("right" + " " + self.lLegY + " " + self.rLegY);
                }
                else
                {
                    // switch to the left leg forward routine.
                    this.legSwitch = 0;
                }
            }
        };
        //DRAW SELF STUFF
        //to put it simply, this function draws two lines that represent the main character's legs.
        this.drawLegs = function ()
        {
            XXX.save();
            XXX.translate(700, 275);
            XXX.rotate(this.rotation);
            XXX.strokeStyle = "black";
            XXX.lineWidth = 2;
            XXX.moveTo(-4, 0);
            XXX.lineTo(-4, 0 + this.lLegY);
            XXX.stroke();
            XXX.moveTo(4, 0);
            XXX.lineTo(4, 0 + this.rLegY);
            XXX.stroke();
            XXX.restore();
            //console.log(this.lLegY + " is this.lLegY, " + this.rLegY + " is this.rLegY, " + this.movingType + " is this.movingType")
        };

        //this function draws a circle the color of the character's race with a black border line around it, this acts as the main characters body.
        this.drawBody = function ()
        {
            XXX.save();
            XXX.translate(this.myScreenX, this.myScreenY); //Translate resets the coordinates to the arguements mentioned (x, y).
            XXX.rotate(this.rotation);
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.arc(0, 0, this.mySize, 0, 2 * Math.PI);
            XXX.strokeStyle = "black";
            XXX.fillStyle = this.race;
            XXX.stroke();
            XXX.fill();
            XXX.restore();
        };

        this.drawOutfit = function ()
        {
            //this.outfitEquipped = "walrusLeatherArmour";
            //Stat Determination
            //OUTFIT
            var outfit;
            if (this.outfitEquipped == "walrusLeatherArmour")
            {
                outfit = allWorn[1];
            }
            else if (this.outfitEquipped == "gulfreyShellArmour")
            {
                outfit = allWorn[2];
            }
            else if (this.outfitEquipped == "blackChainArmour")
            {
                outfit = allWorn[3];
            }
            else if (this.outfitEquipped == "chainArmour")
            {
                outfit = allWorn[4];
            }
            else
            {
                outfit = allWorn[0];
            }

            //TODO add ring.
            //TODO add pendant.
            //TODO add boots.

            this.armour = outfit.protection; //TODO add ring, pendant, and boot's stats to all of the stats as well.
            this.magicalResistance = outfit.magicalProtection;
            this.warmthProtection = outfit.warmthRetention;
            this.heatResistance = outfit.thirstRetention;
            //Main Stat Bonuses
            this.AdStrength = outfit.strengthBonus;
            this.AdEndurance = outfit.enduranceBonus;
            this.AdToughness = outfit.toughnessBonus;
            this.AdIntelligence = outfit.intelligenceBonus;
            this.AdCharisma = outfit.charismaBonus;
            this.AdRanged = outfit.rangedBonus;
            this.AdConstitution = outfit.constitutionBonus;
            this.AdStamina = outfit.staminaBonus;
            this.AdDexterity = outfit.dexterityBonus;
            this.AdStealth = outfit.stealthBonus;
            //Extra Stat Bonuses
            this.hungerMAX = this.hungerMAX + outfit.hungerBonus;
            this.thirstMAX = this.thirstMAX + outfit.thirstBonus;
            this.warmthMAX = this.warmthMAX + outfit.warmthBonus;
            //Magical Stat Bonuses
            this.AdEminence = outfit.eminenceBonus;
            this.AdWillpower = outfit.willpowerBonus;
            this.AdKnowledge = outfit.knowledgeBonus;
            this.AdConcentration = outfit.concentrationBonus;
            this.AdMemory = outfit.memoryBonus;

            if (this.getToughness() < outfit.toughnessRequirement)
            {
                this.unskilledUse = true;
            }
            else
            {
                this.unskilledUse = false;
            }

            //DRAW OUTFIT
            if (this.outfitEquipped == "walrusLeatherArmour")
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                XXX.drawImage(polyPNG, 804, 262, 35, 24, -(1 / 2 * 45.5) + 8, -(1 / 2 * 31.2) + 1.25, 42, 28.8);
                XXX.restore();
            }
            else if (this.outfitEquipped == "gulfreyShellArmour")
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                XXX.drawImage(verse, 44, 89, 51, 35, -(1 / 2 * 40.8) + 6.3, -(1 / 2 * 28) - 0.5, 45.9, 31.5);
                XXX.restore();
            }
            else if (this.outfitEquipped == "blackChainArmour")
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 1948, 1, 31, 27, -(1 / 2 * 26) - 0.3, -(1 / 2 * 27) + 1.5, 27, 27);
                XXX.restore();
            }
            else if (this.outfitEquipped == "chainArmour")
            {
                XXX.save();
                XXX.translate(this.myScreenX, this.myScreenY);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 1915, 1, 31, 27, -(1 / 2 * 26) - 1.3, -(1 / 2 * 27) + 1.5, 27, 27);
                XXX.restore();
            }
        };

        //This draws the arms either equipped with weaponry spells, or bare. Also the animation for the attacks is done here!
        this.drawArms = function ()
        {
            var self = this;

            //ATTACK INITIATOR [this triggers the attack when the player presses the space key]
            if (spaceKey == true)
            {
                //TODO include a special attacking case for spells and magic!!!
                if (this.weaponIsRanged == false && (this.weapon.energyCost <= this.energy))
                {
                    if (this.attacking != true)
                    {
                        this.energy -= this.weapon.energyCost;
                        this.strike = true;
                    }
                }
                else if (this.weaponIsRanged == true)
                {
                    for (var i = Inventory.length - 1; i > -1; i--)
                    {
                        if (Inventory[i][0].utility == "ammunition" && Inventory[i][0].subUtility == "arrow" && Inventory[i][0].equipped == true && this.rangedWeaponType == "bow")
                        {
                            if (this.attacking != true && this.projectileReleased == true)
                            {
                                if (Inventory[i][1] >= 1 && this.isAmmoEquipped == true)
                                {
                                    Inventory[i][1] -= 1;
                                    this.projectileReleased = false;
                                    this.strike = true;
                                }
                            }
                        }
                        else if (Inventory[i][0].utility == "ammunition" && Inventory[i][0].subUtility == "bolt" && Inventory[i][0].equipped == true && this.rangedWeaponType == "crossbow")
                        {
                            if (this.attacking != true && this.projectileReleased == true)
                            {
                                if (Inventory[i][1] >= 1)
                                {
                                    Inventory[i][1] -= 1;
                                    this.projectileReleased = false;
                                    this.strike = true;
                                }
                            }
                        }
                    }
                }
            }

            if (this.strike == true) //Strike triggers attacking which needs to be on for the entire attack.
            {
                this.strike = false;
                this.attacking = true;
            }
            //STAGE ENGINE [this function allows each type of weapon to cycle through the stages of their attack]
            this.stageEngine = function (maxStage, framerate, bothwaysBool)
            {

                if (self.attacking == true && self.weaponIsRanged == false || self.attacking == true && self.weaponIsRanged == true && self.projectileReleased == false)
                {
                    if (this.resetFrameOrder == true)
                    {
                        this.frameOrder = "positive"; // this sets the animation frame cycling direction to positive when the attack is initialized.
                        this.resetFrameOrder = false; // this keeps the reset from messing up reverse swings that may come after the primary positive direction attack.
                    }
                    if (this.frameOrder == "positive")
                    {
                        if (self.stage >= maxStage) // Once all of the animation stages are completed...
                        {
                            if (bothwaysBool == false) // if the animation is one way it ends here...
                            {
                                if (this.weaponEquipped != "flail")
                                {
                                    self.finalAttackStage = true;
                                }
                                self.attacking = false;
                                self.stage = 0;
                                this.resetFrameOrder = true; //This variable resets the order of the frames so that it always starts cycling through the animations in the positive direction.
                            }
                            else if (bothwaysBool == true) //but if it is two directional it swings back to frame zero.
                            {
                                self.finalAttackStage = true;
                                this.frameOrder = "negative";
                            }
                        }
                        else
                        {
                            if (rapidamente == false)
                            {
                                self.stage += framerate * TTD / (16.75 - (0.1 / 2 * ((this.getDexterity() / 2) + 0.5))); //This is the part that actually changes the frame in the positive direction.
                            }
                            else
                            {
                                self.stage += framerate * TTD / (16.75 - (0.1 / 2 * 25));
                            }
                        }
                    }

                    if (this.frameOrder == "negative") //This stuff is for the swing back.
                    {
                        if (self.stage < 1)
                        {
                            self.attacking = false;
                            self.stage = 0;
                            this.resetFrameOrder = true; //This variable resets the order of the frames so that it always starts cycling through the animations in the positive direction.

                        }
                        else
                        {
                            if (rapidamente == false)
                            {
                                self.stage -= framerate * TTD / (16.75 - (0.1 / 2 * ((this.getDexterity() / 2) + 0.5))); //This is the part that actually changes the frame in the negative direction.
                            }
                            else
                            {
                                self.stage -= framerate * TTD / (16.75 - (0.1 / 2 * 25));
                            }
                        }
                    }

                }
            };
            //ARM VARIANTS (player weapon types)
            //FISTS
            if (this.weaponEquipped == "none")
            {
                this.stageEngine(6, 0.2, true);

                //ATTACK ANIMATION
                if (this.stage <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 631, 55, 92, 30, -22, -17, 46, 22);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 638, 118, 80, 37, -24, -17, 46, 22);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 639, 195, 80, 37, -26, -20, 46, 22);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 643, 276, 80, 37, -28.5, -20, 48, 23);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 653, 352, 80, 37, -26.5, -21, 48, 23);
                    XXX.restore();
                }

            }
            //MACE
            if (this.weaponEquipped == "mace")
            {
                this.stageEngine(6, 0.15, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK ANIMATION
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 51, 70, 105, 46, -26, -22, 70, 45);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 169, 62, 105, 46, -26, -29, 70, 45);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 282, 47, 105, 53, -33, -40, 70, 45);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 399, 68, 105, 59, -38, -43, 72, 45);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 520, 59, 105, 69, -28, -43, 72, 47);
                    XXX.restore();
                }
            }
            //LONG SWORD
            if (this.weaponEquipped == "longsword")
            {
                this.stageEngine(8, 0.2, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 917, 566, 96, 86, -18, -31, 88, 86);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 918, 487, 96, 86, -12, -39, 88, 86);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 915, 421, 96, 86, -16, -57, 88, 86);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 909, 342, 96, 86, -22, -67, 88, 86);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 905, 239, 96, 86, -29, -77, 88, 86);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 5)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 898, 100, 96, 86, -35, -81, 88, 86);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 6)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 825, 1, 96, 86, -35, -78, 88, 86);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 7)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 788, 111, 96, 86, -48, -75, 88, 86);
                    XXX.restore();
                }
            }
            //NIRINESE SABRE
            if (this.weaponEquipped == "nirineseSabre")
            {
                this.stageEngine(9, 0.3, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 373, 2, 90, 96, -57, -41, 90, 96);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 455, 2, 90, 96, -41, -44, 90, 96);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 529, 2, 90, 96, -44, -41, 90, 96);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 600, 2, 90, 96, -46, -44, 90, 96);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 696, 2, 90, 96, -32, -44, 90, 96);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 5)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 798, 2, 90, 96, -33, -48, 90, 96);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 6)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 896, 2, 90, 96, -36, -48, 90, 96);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 7)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 996, 2, 90, 96, -43, -73, 90, 96);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 8)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 1085, 2, 90, 96, -50, -87, 90, 96);
                    XXX.restore();
                }
            }
            //RUHNKOR-GREN (ancient freydic greatsword)
            if (this.weaponEquipped == "blueBlade")
            {
                this.stageEngine(7, 0.21, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 3, 189, 100, 97, -16, -80, 120, 116.4);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 202, 616, 100, 97, -16, -28, 120, 116.4);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 204, 670, 100, 97, -16, -95, 120, 116.4);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 308, 669, 100, 97, -24, -97, 120, 116.4);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 403, 669, 100, 97, -33, -108, 120, 116.4);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 5)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 491, 671, 100, 97, -35, -109, 120, 116.4);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 6)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 558, 670, 100, 97, -62, -108, 120, 116.4);
                    XXX.restore();
                }
            }
            //FREYDIC WAR AXE
            if (this.weaponEquipped == "freydicWarAxe")
            {
                this.stageEngine(6, 0.19, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 138, 118, 113, 104, -68.75, -55, 101.7, 93.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 301, 145, 113, 104, -55.75, -60, 101.7, 93.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 428, 163, 113, 104, -49, -56, 101.7, 93.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 133, 229, 113, 104, -48, -62.5, 101.7, 93.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 276, 252, 113, 104, -38, -63, 101.7, 93.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 5)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 393, 275, 113, 104, -40.5, -51.3, 101.7, 93.6);
                    XXX.restore();
                }
            }
            //ALDREKII BARDICHE
            if (this.weaponEquipped == "aldrekiiBardiche")
            {
                this.stageEngine(5, 0.18, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 68, 381, 143, 141, -45, -65, 100.1, 98.7);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 234, 391, 143, 141, -42, -76, 100.1, 98.7);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 394, 414, 143, 141, -48, -79, 100.1, 98.7);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 565, 413, 143, 141, -52, -86, 100.1, 98.7);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 714, 396, 143, 141, -67, -89, 100.1, 98.7);
                    XXX.restore();
                }
            }
            //FREYDIC SPEAR
            if (this.weaponEquipped == "freydicSpear")
            {
                this.stageEngine(5, 0.18, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 382, 104, 53, 76, -41, -66, 53, 76);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 434, 104, 53, 76, -39.5, -68, 53, 76);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 484, 104, 53, 76, -37.25, -69, 53, 76);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 535, 104, 53, 76, -30.5, -72, 53, 76);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 591, 104, 53, 76, -22.5, -74.75, 53, 76);
                    XXX.restore();
                }
            }
            //ALDREKII WAR BLADE
            if (this.weaponEquipped == "aldrekiiBlade")
            {
                this.stageEngine(6, 0.2, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2206, 75, 60, 52, -13, -51, 72, 64.8);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2271, 74, 60, 52, -22.5, -54, 72, 64.8);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2334, 71, 60, 52, -35, -54, 72, 64.8);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2397, 69, 60, 52, -47, -56, 72, 64.8);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2458, 67, 60, 52, -54, -54.5, 72, 64.8);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 5)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2515, 66, 60, 52, -60.5, -51, 72, 64.8);
                    XXX.restore();
                }
            }
            //PICKAXE
            if (this.weaponEquipped == "pickaxe")
            {
                this.stageEngine(6, 0.2, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2581, 78, 35, 37, -22, -51, 52.5, 55.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2626, 78, 35, 37, -17.5, -53, 52.5, 55.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2669, 78, 35, 37, -20, -54, 52.5, 55.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2716, 78, 35, 37, -23, -50, 52.5, 55.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2765, 78, 35, 37, -22, -47.5, 52.5, 55.5);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 5)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2800, 78, 35, 37, -42, -43, 52.5, 55.5);
                    XXX.restore();
                }
            }
            //FREYDIC LONGSWORD
            if (this.weaponEquipped == "freydicSword")
            {
                this.stageEngine(7, 0.2, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2210, 1, 73, 63, -13, -60, 91.875, 78.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2290, 1, 73, 63, -17.5, -60, 91.875, 78.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2367, 1, 73, 63, -25, -61, 91.875, 78.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2438, 1, 73, 63, -31, -61.5, 91.875, 78.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2513, 1, 73, 63, -36, -64, 91.875, 78.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 5)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2577, 1, 73, 63, -44, -69, 91.875, 78.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 6)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2635, 1, 73, 63, -49.25, -69, 91.875, 78.75);
                    XXX.restore();
                }
            }
            //FREYDIC GREATSWORD
            if (this.weaponEquipped == "freydicGreatSword")
            {
                this.stageEngine(8, 0.23, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2205, 203, 89, 88, -7, -80, 106.8, 105.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2305, 203, 89, 88, -6, -83.5, 106.8, 105.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2405, 203, 89, 88, -8, -85.5, 106.8, 105.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2505, 203, 89, 88, -13.5, -87, 106.8, 105.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2605, 203, 89, 88, -21, -90, 106.8, 105.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 5)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2678, 203, 89, 88, -49, -93, 106.8, 105.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 6)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2750, 203, 89, 88, -55, -92.5, 106.8, 105.6);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 7)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2830, 203, 89, 88, -65, -90, 106.8, 105.6);
                    XXX.restore();
                }
            }
            //SMALL WAR AXE
            if (this.weaponEquipped == "vardanianAxe")
            {
                this.stageEngine(5, 0.20, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 670, 161, 86, 53, -51, -46, 86, 53);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 789, 161, 86, 53, -45, -46, 86, 53);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 879, 161, 86, 53, -55, -46, 86, 53);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 988, 161, 86, 53, -36, -48, 86, 53);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 4)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 1075, 161, 86, 53, -38, -48, 86, 53);
                    XXX.restore();
                }
            }
            //TWIN WAR AXES
            if (this.weaponEquipped == "vardanianAxeDual")
            {
                this.stageEngine(4, 0.21, true); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 669, 92, 110, 68, -55, -60, 110, 68);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 785, 92, 110, 68, -49, -60, 110, 68);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 884, 92, 110, 68, -49, -65, 110, 68);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 972, 92, 110, 68, -49, -68, 110, 68);
                    XXX.restore();
                }
            }
            //FLAIL
            if (this.weaponEquipped == "flail")
            {
                this.stageEngine(11, 0.18, false); //This cycles through the stages of the attack for four stages (ending at five) and at a rate of 4 * 16.75 miliseconds

                //ATTACK
                if (Math.floor(this.stage) <= 0)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2194, 128, 66, 72, -42, -102, 99, 108);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2253, 128, 66, 72, -47.5, -103, 99, 108);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2313, 128, 66, 72, -41.75, -103, 99, 108);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2373, 128, 66, 72, -46.5, -102, 99, 108);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4)
                {
                    this.finalAttackStage = true;
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2430, 128, 66, 72, -62, -104.5, 99, 108);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 5)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2489, 128, 66, 72, -57.5, -105, 99, 108);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 6)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2539, 128, 66, 72, -59.25, -103, 99, 108);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 7)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2588, 128, 66, 72, -61.5, -104.5, 99, 108);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 8)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2639, 128, 66, 72, -58, -104, 99, 108);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 9)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2689, 128, 66, 72, -62, -104, 99, 108);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 10)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2744, 128, 66, 72, -51.5, -105, 99, 108);
                    XXX.restore();
                }
            }
            //LONG BOW
            if (this.weaponEquipped == "longbow")
            {
                //for ranged this sets the stage back so that it can start again.
                if (this.ammoLoaded == false && new Date().getTime() - this.reloadTime > allWeapons[5].rate * 100 && this.releaseStage == true)
                {
                    this.stage = 0;
                    this.releaseStage = false;
                }

                //If the stage is less than full drawback then draw back when attacking is triggered.
                if (this.stage < 6)
                {
                    this.stageEngine(8, 0.15, false);
                }

                //ATTACK ANIMATION
                //This cycles through the stages of the attack
                if (Math.floor(this.stage) <= 0 && this.releaseStage == false)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 421, 589, 40, 43, -17, -41, 50, 53.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 1 && this.releaseStage == false)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 487, 589, 40, 43, -11, -42, 50, 53.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 2 && this.releaseStage == false)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 536, 589, 40, 43, -16, -39, 50, 53.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 3 && this.releaseStage == false)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 576, 588, 40, 43, -19, -41, 50, 53.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 4 && this.releaseStage == false)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 608, 588, 40, 43, -21, -41, 50, 53.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) <= 5 && this.releaseStage == false)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 645, 589, 40, 43, -16, -40, 50, 53.75);
                    XXX.restore();
                }
                else if (Math.floor(this.stage) >= 6 && this.releaseStage == false)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 681, 582, 40, 43, -22, -38.5, 50, 53.75);
                    XXX.restore();
                    this.ammoLoaded = true;
                }
                //This is an extra stage for the release, it is specially triggered by the release of the space bar.
                if (this.releaseStage == true)
                {
                    XXX.save();
                    XXX.translate(this.myScreenX, this.myScreenY);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(polyPNG, 717, 583, 40, 43, -17, -38.5, 50, 53.75);
                    XXX.restore();
                }
            }
        };

        this.weaponSetup = function ()
        {
            //if the weapon is ranged they tell the projectile class where to position the arrow/bolt here.
            if (this.weaponEquipped == "longbow")
            {
                this.weapon = allWeapons[5];

                //This adjusts the starting position of the arrow/bolt.
                this.projectileX = -3;
                this.projectileY = -3;
            }

            //Access Stats for each weapon first. //1/2 is directly forward facing.
            if (this.weaponEquipped == "mace")
            {
                this.weapon = allWeapons[0];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.4 / 5 * Math.PI) * (this.mySize + 24);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.4 / 5 * Math.PI) * (this.mySize + 24);
            }
            else if (this.weaponEquipped == "longsword")
            {
                this.weapon = allWeapons[1];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 1 / 4 * Math.PI) * (this.mySize + 25);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1 / 4 * Math.PI) * (this.mySize + 25);
            }
            else if (this.weaponEquipped == "none")
            {
                this.weapon = allWeapons[2];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 1 / 2 * Math.PI) * (this.mySize + 10);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1 / 2 * Math.PI) * (this.mySize + 10);
            }
            else if (this.weaponEquipped == "freydicWarAxe")
            {
                this.weapon = allWeapons[3];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 1 / 3 * Math.PI) * (this.mySize + 23);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1 / 3 * Math.PI) * (this.mySize + 23);
            }
            else if (this.weaponEquipped == "aldrekiiBardiche")
            {
                this.weapon = allWeapons[4];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 16 / 30 * Math.PI) * (this.mySize + 55);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 16 / 30 * Math.PI) * (this.mySize + 55);
            }
            else if (this.weaponEquipped == "blueBlade")
            {
                this.weapon = allWeapons[7];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 1 / 4 * Math.PI) * (this.mySize + 45);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1 / 4 * Math.PI) * (this.mySize + 45);
            }
            else if (this.weaponEquipped == "nirineseSabre")
            {
                this.weapon = allWeapons[8];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 1.9 / 5 * Math.PI) * (this.mySize + 28);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1.9 / 5 * Math.PI) * (this.mySize + 28);
            }
            else if (this.weaponEquipped == "freydicSpear")
            {
                this.weapon = allWeapons[9];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.3 / 5 * Math.PI) * (this.mySize + 38);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.3 / 5 * Math.PI) * (this.mySize + 38);
            }
            else if (this.weaponEquipped == "vardanianAxeDual")
            {
                this.weapon = allWeapons[10];
                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 1 / 2 * Math.PI) * (this.mySize + 17);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1 / 2 * Math.PI) * (this.mySize + 17);
            }
            else if (this.weaponEquipped == "vardanianAxe")
            {
                this.weapon = allWeapons[11];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 3 / 5 * Math.PI) * (this.mySize + 16);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3 / 5 * Math.PI) * (this.mySize + 16);
            }
            else if (this.weaponEquipped == "flail")
            {
                this.weapon = allWeapons[12];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 2.4 / 5 * Math.PI) * (this.mySize + 40);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 2.4 / 5 * Math.PI) * (this.mySize + 40);
            }
            else if (this.weaponEquipped == "aldrekiiBlade")
            {
                this.weapon = allWeapons[13];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 3 / 5 * Math.PI) * (this.mySize + 18);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3 / 5 * Math.PI) * (this.mySize + 18);
            }
            else if (this.weaponEquipped == "pickaxe")
            {
                this.weapon = allWeapons[14];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 3.2 / 5 * Math.PI) * (this.mySize + 18);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 3.2 / 5 * Math.PI) * (this.mySize + 18);
            }
            else if (this.weaponEquipped == "freydicSword")
            {
                this.weapon = allWeapons[15];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 1.45 / 5 * Math.PI) * (this.mySize + 29);
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1.45 / 5 * Math.PI) * (this.mySize + 29);
            }
            else if (this.weaponEquipped == "freydicGreatSword")
            {
                this.weapon = allWeapons[17];

                //keep the angle at this.rotation if you intend for it to go to the right, otherwise you can change the damage radius center by listing a different rotation.
                this.bubbleOfDamageX = X - Math.cos(this.rotation - 1.65 / 5 * Math.PI) * (this.mySize + 38); //was -1.45 / 5 //was 33
                this.bubbleOfDamageY = Y - Math.sin(this.rotation - 1.65 / 5 * Math.PI) * (this.mySize + 38); //was -1.45 / 5 //was 33
            }
        };

        //OFFICIAL ATTACKING FUNCTION
        this.attack = function ()
        {
            //Access Stats for each weapon first with weaponSetup function.

            //Carry Out melee attack.
            if (this.attacking == true && this.weaponIsRanged == false && this.weaponIsMagic == false)
            {
                //show attack bubble if visual attack range mode is on for development
                if (showPlayerAttackBubble == true)
                {
                    XXX.beginPath();
                    XXX.fillStyle = "rgba(0, 0, 300, 0.25)";
                    XXX.arc(this.myScreenX - (this.bubbleOfDamageX - X), this.myScreenY - (this.bubbleOfDamageY - Y), (this.weapon.range * 6), 0, 2 * Math.PI);
                    XXX.fill();
                }
                if ((new Date().getTime() - this.attackPause) > 1000 - (20 * this.weapon.rate))
                {
                    this.attackPause = new Date().getTime();

                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        var dfu = Math.sqrt((ArtificialIntelligenceAccess[i].X - this.bubbleOfDamageX) * (ArtificialIntelligenceAccess[i].X - this.bubbleOfDamageX) + (ArtificialIntelligenceAccess[i].Y - this.bubbleOfDamageY) * (ArtificialIntelligenceAccess[i].Y - this.bubbleOfDamageY)) - ArtificialIntelligenceAccess[i].sizeRadius; //This is the distance from the center of the players attack/damaging bubble to the AI Unit.
                        if (dfu < this.weapon.range * 7 && this.finalAttackStage == true)
                        {
                            ArtificialIntelligenceAccess[i].health -= Math.max(0, this.weapon.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.weapon.negateArmour));
                            ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                            //console.log("You Dealt " + Math.max(0, this.weapon.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.weapon.negateArmour)) + " damage!" + " ");
                        }
                    }
                    this.finalAttackStage = false;
                }
            }
            else if (this.weaponIsRanged == true)
            {
                //TODO add crossbow style for ranged!
                //On release the projectile is fired.
                if (this.projectileReleased == false && spaceKey == false && this.ammoLoaded == true)
                {
                    this.attacking = false;
                    this.reloadTime = new Date().getTime();
                    this.releaseStage = true;
                    this.ammoLoaded = false;
                    this.projectileReleased = true;
                    for (var i = 0; i < Inventory.length; i++)
                    {
                        if (Inventory[i][0].utility == "ammunition" && Inventory[i][0].equipped == true)
                        {
                            //this sets the currently equipped ammo to a variable called loaded.
                            var loaded = Inventory[i][0];
                        }
                        else if (Inventory[i][0].utility == "ranged" && Inventory[i][0].equipped == true)
                        {
                            //This sets the currently equipped ranged weapon to a variable called projector.
                            var projector = Inventory[i][0];
                        }
                    }
                    //This puts the projectile into action!
                    playerProjectiles.push(new Projectile(loaded.type, X + Math.cos(this.rotation) * (this.projectileX + this.projXAd), Y + Math.sin(this.rotation) * (this.projectileY + this.projYAd), this.rotation, projector.speed, projector.range, projector.negateArmour, playerProjectiles));
                    for (var i = 0; i < Inventory.length; i++)
                    {
                        if (Inventory[i][1] < 1 && Inventory[i][0].utility == "ammunition" && Inventory[i][0].equipped == true)
                        {
                            this.isAmmoEquipped = false;
                            Inventory.splice(i, 1);
                            break;
                        }
                    }
                    //TODO this is the point at which the projectile class should be called to go to the weapon and then fire.
                }
            }
            else
            {
                //TODO add casting for magic here...
            }
        };

        //This makes the character always face the mouse pointer.
        this.pointAtMouse = function ()
        {
            this.rotation = Math.atan2(mouseY - this.myScreenY, mouseX - this.myScreenX) + Math.PI / 2;
            //console.log(this.rotation);
        };

        //OBSTRUCTION CHECKER (this checks to see if something is in the player's way).
        this.isObstructed = function (x, y)
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i])
                {
                    var focusUnit = ArtificialIntelligenceAccess[i]; //This is the current unit focused on other than this unit.
                    var x1 = focusUnit.X; //the focus unit's X position.
                    var y1 = focusUnit.Y; //the focus unit's Y position.
                    var d = Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1)); //This is the distance between this unit and the focus unit.
                    if (d < this.mySize + focusUnit.sizeRadius && focusUnit.alive == true) // if the total distance between this unit and the focus unit is less than the size of the two radiuses then it returns true to the movement function which calls it.
                    {
                        return true; //d == this.sizeRadius + focusUnit.sizeRadius :: this is the point at which the two units would be exactly touching eachother with no overlap.
                    }
                }
            }
            //TODO add a similar routine for the structure list when it is added...
        };

        // CHARACTER MOVEMENT
        this.motion = function ()
        {
            //STANDING
            if (wKey == false && altKey == false)
            {
                this.movingType = 0;
            }
            //WALKING
            if (wKey == true && shiftKey != true)
            {
                this.movingType = 1;

                // If the place where the player would move next under the same instruction is blocked then the player will not move.
                if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
                {
                    var nextX = X + (Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    var nextY = Y + (Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    if (!this.isObstructed(nextX, nextY))
                    {
                        X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                        Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    }
                }
                else
                {
                    //TODO eventually make magical walls and game borders that wallPhase does not let the player walk through.
                    X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * 1 + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
                    Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * 1 + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
                }
            }
            //RUNNING
            // if you run out of energy while running you regress into a walk.
            if (this.energy <= 0 && wKey == true && shiftKey == true)
            {
                this.movingType = 1;

                // If the place where the player would move next under the same instruction is blocked then the player will not move.
                if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
                {
                    var nextX = X + (Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    var nextY = Y + (Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    if (!this.isObstructed(nextX, nextY))
                    {
                        X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                        Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    }
                }
                else
                {
                    X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * 1 + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
                    Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * 1 + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
                }
            }

            if (wKey == true && shiftKey == true && this.energy > 0)
            {
                this.movingType = 2;

                // If the place where the player would move next under the same instruction is blocked then the player will not move.
                if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
                {
                    var nextX = X + (Math.cos(this.rotation + 1 / 2 * Math.PI) * (4 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    var nextY = Y + (Math.sin(this.rotation + 1 / 2 * Math.PI) * (4 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    if (!this.isObstructed(nextX, nextY))
                    {
                        X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * (4 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                        Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * (4 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    }
                }
                else
                {
                    X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * 4 + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
                    Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * 4 + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 24 * this.getDexterity())) * (TTD / 16.75);
                }
            }
            //SNEAKING
            if (altKey == true && wKey == false)
            {
                this.movingType = 3;

                // If the place where the player would move next under the same instruction is blocked then the player will not move.
                if (wallPhase == false) //If the developerMode wallPhase is set to false the player can not walk through obstacles, otherwise the player can.
                {
                    var nextX = X + (Math.cos(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    var nextY = Y + (Math.sin(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    if (!this.isObstructed(nextX, nextY))
                    {
                        X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                        Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * (0.2 / this.freeze) + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity() / this.freeze)) * (TTD / 16.75);
                    }
                }
                else
                {
                    X += (Math.cos(this.rotation + 1 / 2 * Math.PI) * 0.2 + Math.cos(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity())) * (TTD / 16.75);
                    Y += (Math.sin(this.rotation + 1 / 2 * Math.PI) * 0.2 + Math.sin(this.rotation + 1 / 2 * Math.PI) * (1 / 40 * this.getDexterity())) * (TTD / 16.75);
                }
            }
        };

        //USER INTERFACE BAR

        //The bar for the UI buttons
        this.buildUIBar = function ()
        {
            XXX.beginPath();
            if (mouseY < 526 && lowBar != "skills" && lowBar != "shop" && lowBar != "bank")
            {
                XXX.fillStyle = "rgba(211, 211, 211, 0.1)";
                XXX.strokeStyle = "rgba(211, 211, 211, 0.1)"
            }
            else
            {
                XXX.fillStyle = "lightGrey";
                XXX.strokeStyle = "black";
            }
            XXX.rect(140, 527, 1259, 22);
            XXX.fill();
            XXX.stroke();
        };
        //UI Buttons
        this.uiButton = function ()
        {
            if (mouseY > 526 || lowBar == "skills" || lowBar == "shop" || lowBar == "bank")
            {
                //inventory button
                XXX.beginPath();
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.fillStyle = "chocolate";
                XXX.rect(152, 527, 20, 22);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 153, 5, 21, 18, 151.25, 528.5, 21, 18);

                //character skills menu button
                XXX.beginPath();
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.fillStyle = "cornsilk";
                XXX.rect(173, 527, 20, 22);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 639, 1, 23, 20, 172.25, 530.75, 20, 18);

                //magic menu (spellbook) button
                //TODO change this into the new magic menu button!
                //XXX.beginPath();
                //XXX.strokeStyle = "black";
                //XXX.lineWidth = 1;
                //XXX.fillStyle = "white";
                //XXX.rect(194, 527, 20, 22);
                //XXX.fill();
                //XXX.stroke();
                //XXX.drawImage(polyPNG, 663, 1, 31, 24, 193, 530, 21, 15.6);

                //dialogue menu button
                //TODO change this into the new diologue menu button!
                //XXX.beginPath();
                //XXX.strokeStyle = "black";
                //XXX.lineWidth = 1;
                //XXX.fillStyle = "white";
                //XXX.rect(194, 527, 20, 22);
                //XXX.fill();
                //XXX.stroke();
                //XXX.drawImage(polyPNG, 663, 1, 31, 24, 193, 530, 21, 15.6);

                //saving menu button
                //TODO change all of the save stuff so that its coords are two spaces to the right.
                XXX.beginPath();
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.fillStyle = "white";
                XXX.rect(194, 527, 20, 22);
                XXX.fill();
                XXX.stroke();
                XXX.drawImage(polyPNG, 663, 1, 31, 24, 193, 530, 21, 15.6);
            }
        };

        //This makes it so that clicking will toggle on or off any of the UI icons.
        this.toggleUIIcon = function ()
        {
            //When the inventory button clicked the lowbar becomes the inventory.
            if (mouseX > 152 && mouseX < 172 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar != "inventory")
            {
                lowBar = "inventory";
                if (gameState == "paused")
                {
                    gameState = "active";
                }
            }
            else if (mouseX > 152 && mouseX < 172 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar == "inventory")
            {
                lowBar = "information";
            }

            //When the character/skills button is clicked the entire screen transforms and becomes the character skills section.
            if (mouseX > 173 && mouseX < 193 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar != "skills")
            {
                lowBar = "skills";
                gameState = "paused";
            }
            else if (mouseX > 173 && mouseX < 193 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar == "skills")
            {
                lowBar = "information";
                gameState = "active";
            }

            //When the save button is clicked the lowbar shows the player the four saving slots to choose from.
            if (mouseX > 194 && mouseX < 214 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar != "save")
            {
                lowBar = "save";
                if (gameState == "paused")
                {
                    gameState = "active";
                }
            }
            else if (mouseX > 194 && mouseX < 214 && mouseY < 549 && mouseY > 527 && clickReleased == true && lowBar == "save")
            {
                lowBar = "information";
                gameState = "active";
            }
        };

        //highlight the selected icon in the user interface.
        this.highlightSelectedUI = function ()
        {
            if (lowBar == "inventory")
            {
                XXX.beginPath();
                XXX.fillStyle = "rgba(255, 215, 0, 0.35)";
                XXX.fillRect(152, 527, 20, 23);
            }
            if (lowBar == "skills")
            {
                XXX.beginPath();
                XXX.fillStyle = "rgba(255, 215, 0, 0.35)";
                XXX.fillRect(173, 527, 20, 23);
            }
            if (lowBar == "save")
            {
                XXX.beginPath();
                XXX.fillStyle = "rgba(255, 215, 0, 0.35)";
                XXX.fillRect(194, 527, 20, 23);
            }
        };

        //BANKING
        this.displayBank = function()
        {
            if (lowBar == "bank")
            {
                //MAIN BACKGROUND
                XXX.beginPath();
                XXX.fillStyle = "lightGrey";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(1, 1, 1398, 526);
                XXX.fill();
                XXX.stroke();

                //Exit bank Button
                //the button part
                if (mouseX > 2 && mouseX < 2 + 148 && mouseY > 529 && mouseY < 529 + 20)
                {
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 3;
                    XXX.rect(2, 529, 148, 20);
                    XXX.fill();
                    XXX.stroke();

                    if (clicked == true)
                    {
                        clicked = false;
                        lowBar = "information";
                        gameState = "active";
                    }
                }
                else
                {
                    XXX.beginPath();
                    XXX.fillStyle = "E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 3;
                    XXX.rect(2, 529, 148, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                //the text part
                XXX.font = "bold 14px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Exit Bank", 75, 543);

                //line between bank account and description
                XXX.beginPath();
                XXX.strokeStyle = "black";
                XXX.lineWidth = 2;
                XXX.moveTo(0, 80);
                XXX.lineTo(1400, 80);
                XXX.stroke();

                //DISPLAY PLAYER'S INVENTORY
                this.displayCustomerInventory = function()
                {
                    // each inventory slot is a list with three things in it... [Item, quantity]
                    for (var i = 0; i < Inventory.length; i++)
                    {
                        if (Inventory[i][0].equipped == true)
                        {
                            LXX.beginPath();
                            LXX.lineWidth = 2;
                            LXX.fillStyle ="rgba(102, 255, 102, 0.35)";
                            LXX.strokeStyle ="black";
                            LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                            LXX.fill();
                            LXX.stroke();
                            Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                            //quantity
                            LXX.font="16px Book Antiqua";
                            LXX.textAlign="left";
                            LXX.fillStyle ="black";
                            if (Inventory[i][1] < 1000)
                            {
                                LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                            {
                                LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            else if (Inventory[i][1] >= 1000000)
                            {
                                LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            //weight
                            LXX.font="10px Book Antiqua";
                            LXX.fillStyle ="black";
                            LXX.textAlign="right";
                            LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                            LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                        }
                        else
                        {
                            LXX.beginPath();
                            LXX.lineWidth = 2;
                            LXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                            LXX.strokeStyle ="black";
                            LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                            LXX.fill();
                            LXX.stroke();
                            Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                            //quantity
                            LXX.font="16px Book Antiqua";
                            LXX.textAlign="left";
                            LXX.fillStyle ="black";
                            if (Inventory[i][1] < 1000)
                            {
                                LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                            {
                                LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            else if (Inventory[i][1] >= 1000000)
                            {
                                LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            //weight
                            LXX.font="10px Book Antiqua";
                            LXX.fillStyle ="black";
                            LXX.textAlign="right";
                            LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                            LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                        }
                    }

                    //left scroll arrow
                    LXX.beginPath();
                    LXX.lineWidth = 1;
                    LXX.fillStyle ="darkGrey";
                    LXX.strokeStyle ="black";
                    LXX.rect(0.5, 0.5, 20, 79);
                    LXX.fill();
                    LXX.stroke();
                    LXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                    //weight display
                    LXX.beginPath();
                    LXX.fillStyle ="lightGray";
                    LXX.strokeStyle ="black";
                    LXX.rect(1329.5, 0.1, 50, 79.8);
                    LXX.fill();
                    LXX.stroke();
                    //Draw a cover on the weight display to represent the amount of carry weight filled.
                    LXX.beginPath();
                    //LXX.fillStyle ="rgba(255, 255, 255, 0.65)"; //white fill in colour
                    //LXX.fillStyle ="rgba(139, 134, 78, 0.8)"; //beige fill in colour
                    //LXX.fillStyle = "rgba(138, 54, 15, 0.65)"; //burnt sienna colour
                    LXX.fillStyle ="grey";
                    LXX.rect(1329.6, 79.5, 50, -79 * this.carryWeight / this.carryWeightMAX);
                    LXX.fill();
                    //Draw the weight number on the top and bottom and the deviding bar.
                    LXX.font="16px Book Antiqua";
                    LXX.fillStyle = "black";
                    LXX.textAlign="center";
                    LXX.fillText(JSON.stringify(Math.floor(this.carryWeight)), 1352, 25);
                    //dividing line
                    LXX.beginPath();
                    LXX.strokeStyle="black";
                    LXX.lineWidth=3;
                    LXX.moveTo(1334, 39.5);
                    LXX.lineTo(1374, 39.5);
                    LXX.stroke();
                    //divisor
                    LXX.font="16px Book Antiqua";
                    LXX.fillStyle = "black";
                    LXX.textAlign="center";
                    LXX.fillText(JSON.stringify(Math.floor(this.carryWeightMAX)), 1352, 64.5);
                    LXX.textAlign="left"; //this is to reset it to the standard for the rest to come.

                    //right scroll arrow
                    LXX.beginPath();
                    LXX.lineWidth=1;
                    LXX.fillStyle ="darkGrey";
                    LXX.strokeStyle ="black";
                    LXX.rect(1379.5, 0.5, 20, 79);
                    LXX.fill();
                    LXX.stroke();
                    LXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
                };

                //
                //THE INVENTORY's SCROLLING IS LEAKING INTO BOTH SHOP AND BANK SYSTEMS So an extra inventory scroll is not needed here.
                //

                //DISPLAY BANK ACCOUNT
                this.displayBankAccount = function()
                {
                    // each inventory slot is a list with three things in it... [Item, quantity]
                    for (var i = 0; i < bankSlots; i++)
                    {
                        XXX.beginPath();
                        XXX.lineWidth = 2;
                        XXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                        XXX.strokeStyle ="black";
                        XXX.rect(bankScroll + 20.5 + (79 * i), 0.5, 79, 79);
                        XXX.fill();
                        XXX.stroke();
                        if (i < bankAccount.length)
                        {
                            //image
                            bankAccount[i][0].drawShopCraftItem(bankAccount[i][0].type, bankScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                            //quantity
                            XXX.font="16px Book Antiqua";
                            XXX.textAlign="left";
                            XXX.fillStyle ="black";
                            if (bankAccount[i][1] < 1000)
                            {
                                XXX.fillText(bankAccount[i][1], bankScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            else if (bankAccount[i][1] >= 1000 && bankAccount[i][1] < 1000000)
                            {
                                XXX.fillText(Math.floor(bankAccount[i][1] / 1000) + "K", bankScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            else if (bankAccount[i][1] >= 1000000)
                            {
                                XXX.fillText((Math.floor(bankAccount[i][1] / 100000) / 10) + "M", bankScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            //weight
                            XXX.font="10px Book Antiqua";
                            XXX.fillStyle ="black";
                            XXX.textAlign="right";
                            XXX.fillText("W:" + bankAccount[i][0].weight, bankScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                            XXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                        }
                    }

                    //left scroll arrow
                    XXX.beginPath();
                    XXX.lineWidth = 1;
                    XXX.fillStyle ="darkGrey";
                    XXX.strokeStyle ="black";
                    XXX.rect(0.5, 0.5, 20, 79);
                    XXX.fill();
                    XXX.stroke();
                    XXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                    //right scroll arrow
                    XXX.beginPath();
                    XXX.lineWidth=1;
                    XXX.fillStyle ="darkGrey";
                    XXX.strokeStyle ="black";
                    XXX.rect(1379.5, 0.5, 20, 79);
                    XXX.fill();
                    XXX.stroke();
                    XXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
                };

                this.bankAccountScrolling = function()
                {
                    //When the left inventory scroll is clicked scroll one to the left if there is one to the left otherwise don't.
                    if (this.bankPosition < bankSlots && mouseX > 1379.5 && mouseX < 1399.5 && mouseY > 0.5 && mouseY < 80 && clickReleased == true) //this (20.5, 0.5, 79, 79) is the position the first in the list will be in if the left scroll will not work.
                    {
                        this.timeSinceLastScrolled = new Date().getTime();
                        bankScroll -= 79;
                        this.bankPosition += 1;
                    }

                    //When the right inventory scroll is clicked scroll one to the right if there is one to the right otherwise don't.
                    if (this.bankPosition > 0 && mouseX > 0.5 && mouseX < 20.5 && mouseY > 0.5 && mouseY < 80 && clickReleased == true)
                    {
                        this.timeSinceLastScrolled = new Date().getTime();
                        bankScroll += 79;
                        this.bankPosition -= 1;
                    }
                };

                this.customerInventoryInteract = function()
                {
                    var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                    for (var i = -this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
                    {
                        listOfInvX1Coords.push(20.5 + (79 * i));
                    }


                    var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                    for (var i = -this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
                    {
                        listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                    }


                    var invY1Coord = 0.5; //This doesn't change.


                    var invY2Coord = 79.5; //this is just Y + 79

                    for (var i = Inventory.length - 1; i > -1; i--)
                    {
                        if (lMouseX >= 21 && lMouseX <= 1329) //This checks if the mouse is between the scroll buttons rather than on them.
                        {
                            if (clickReleased == true && lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord && this.projectileReleased == true) //When you click on an item you either access its utility or you equip it.
                            {
                                if (Inventory[i][0].equipped == false)
                                {
                                    var gotIn = false;
                                    for (var j = bankAccount.length - 1; j > -1; j--)
                                    {
                                        if (bankAccount[j][0].type == Inventory[i][0].type)
                                        {
                                            gotIn = true;
                                            if (altKey)
                                            {
                                                altKey = false;
                                                var amount = prompt("Enter the amount you would like to deposit.");
                                                var amountt = JSON.parse(amount);
                                                if (Inventory[i][1] - amountt <= 0)
                                                {
                                                    if (Inventory[i][1] - amountt == 0)
                                                    {
                                                        bankAccount[j][1] += amountt;
                                                        Inventory.splice(i, 1);
                                                    }
                                                }
                                                else
                                                {
                                                    bankAccount[j][1] += amountt;
                                                    Inventory[i][1] -= amountt;
                                                }
                                            }
                                            else if (shiftKey)
                                            {
                                                bankAccount[j][1] += Inventory[i][1];
                                                Inventory.splice(i, 1);
                                            }
                                            else
                                            {
                                                bankAccount[j][1] += 1;
                                                if (Inventory[i][1] - 1 < 1)
                                                {
                                                    Inventory.splice(i, 1);
                                                }
                                                else
                                                {
                                                    Inventory[i][1] -= 1;
                                                }
                                            }
                                        }
                                    }
                                    if (gotIn == false)
                                    {
                                        if (bankAccount.length < bankSlots)
                                        {
                                            var invenType = Inventory[i][0].type;
                                            if (altKey)
                                            {
                                                altKey = false;
                                                var amount = prompt("Enter the amount you would like to deposit.");
                                                var amountt = JSON.parse(amount);
                                                if (Inventory[i][1] - amountt <= 0)
                                                {
                                                    if (Inventory[i][1] - amountt == 0)
                                                    {
                                                        bankAccount.push([new Item(invenType, false, false), amount]);
                                                        Inventory.splice(i, 1);
                                                    }
                                                }
                                                else
                                                {
                                                    bankAccount.push([new Item(invenType, false, false), amount]);
                                                    Inventory[i][1] -= amountt;
                                                }
                                            }
                                            else if (shiftKey)
                                            {
                                                bankAccount.push([new Item(invenType, false, false), Inventory[i][1]]);
                                                Inventory.splice(i, 1);
                                            }
                                            else
                                            {
                                                bankAccount.push([new Item(invenType, false, false), 1]);
                                                if (Inventory[i][1] - 1 < 1)
                                                {
                                                    Inventory.splice(i, 1);
                                                }
                                                else
                                                {
                                                    Inventory[i][1] -= 1;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                            {
                                var sizer = 0;

                                for (var k = 0; k < Inventory[i][0].identity.length; k++)
                                {
                                    if (Inventory[i][0].identity[k] == "'")
                                    {
                                        sizer += 1;
                                    }
                                    else if (Inventory[i][0].identity[k].indexOf(' ') != -1)
                                    {
                                        sizer += 0;
                                        console.log("space");
                                    }
                                    else if (Inventory[i][0].identity[k] == Inventory[i][0].identity[k].toUpperCase() )
                                    {
                                        sizer += 17; //9.21;
                                    }
                                    else if (Inventory[i][0].identity[k] == Inventory[i][0].identity[k].toLowerCase())
                                    {
                                        sizer += 12;
                                    }
                                }

                                XXX.beginPath();
                                XXX.fillStyle="white";
                                XXX.fillRect(3, 503, sizer, 22);
                                //The Name of the Item
                                XXX.font = "bold 22px Book Antiqua";
                                XXX.fillStyle = "black";
                                XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                                XXX.fillText(Inventory[i][0].identity, 4, 522);
                            }
                        }
                    }
                };

                this.bankAccountInteract = function()
                {
                    var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                    for (var i = -this.bankPosition; i < bankAccount.length - this.bankPosition; i++)
                    {
                        listOfInvX1Coords.push(20.5 + (79 * i));
                    }


                    var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                    for (var i = -this.bankPosition; i < bankAccount.length - this.bankPosition; i++)
                    {
                        listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                    }


                    var invY1Coord = 0.5; //This doesn't change.


                    var invY2Coord = 79.5; //this is just Y + 79

                    for (var i = bankAccount.length - 1; i > -1; i--)
                    {
                        if (mouseX >= 21 && mouseX <= 1329  && mouseY < 80) //This checks if the mouse is between the scroll buttons rather than on them.
                        {
                            if (clickReleased == true && mouseX > listOfInvX1Coords[i] && mouseX < listOfInvX2Coords[i] && mouseY > invY1Coord && mouseY < invY2Coord && this.projectileReleased == true)
                            {
                                var gotIn = false;
                                for (var j = Inventory.length - 1; j > -1; j--)
                                {
                                    console.log("i: " + i + " j: " + j + "bankAccount.length: " + bankAccount.length);
                                    console.log("bank: " + bankAccount[i]);
                                    console.log("Inv: " + Inventory[j][0]);
                                    if (bankAccount[i][0].type == Inventory[j][0].type)
                                    {
                                        gotIn = true;
                                        if (altKey)
                                        {
                                            altKey = false;
                                            var amount = prompt("Enter the amount you would like to withdraw.");
                                            var amountt = JSON.parse(amount);
                                            if (bankAccount[i][1] - amountt <= 0)
                                            {
                                                if (bankAccount[i][1] - amountt == 0)
                                                {
                                                    Inventory[j][1] += amountt;
                                                    bankAccount.splice(i, 1);
                                                    break;
                                                }
                                            }
                                            else
                                            {
                                                Inventory[j][1] += amountt;
                                                bankAccount[i][1] -= amountt;
                                            }
                                        }
                                        else if (shiftKey)
                                        {
                                            Inventory[j][1] += bankAccount[i][1];
                                            bankAccount.splice(i, 1);
                                            break;
                                        }
                                        else
                                        {
                                            Inventory[j][1] += 1;
                                            if (bankAccount[i][1] - 1 < 1)
                                            {
                                                bankAccount.splice(i, 1);
                                                break;
                                            }
                                            else
                                            {
                                                bankAccount[i][1] -= 1;
                                            }
                                        }
                                    }
                                }

                                if (gotIn == false)
                                {
                                    var invenType = bankAccount[i][0].type;
                                    if (altKey)
                                    {
                                        altKey = false;
                                        var amount = prompt("Enter the amount you would like to withdraw.");
                                        var amountt = JSON.parse(amount);
                                        if (bankAccount[i][1] - amountt <= 0)
                                        {
                                            if (bankAccount[i][1] - amountt == 0)
                                            {
                                                Inventory.push([new Item(invenType, false, false), amount]);
                                                bankAccount.splice(i, 1);
                                            }
                                        }
                                        else
                                        {
                                            Inventory.push([new Item(invenType, false, false), amount]);
                                            bankAccount[i][1] -= amountt;
                                        }
                                    }
                                    else if (shiftKey)
                                    {
                                        Inventory.push([new Item(invenType, false, false), bankAccount[i][1]]);
                                        bankAccount.splice(i, 1);
                                    }
                                    else
                                    {
                                        Inventory.push([new Item(invenType, false, false), 1]);
                                        if (bankAccount[i][1] - 1 < 1)
                                        {
                                            bankAccount.splice(i, 1);
                                        }
                                        else
                                        {
                                            bankAccount[i][1] -= 1;
                                        }
                                    }
                                }
                            }
                            else if (mouseX > listOfInvX1Coords[i] && mouseX < listOfInvX2Coords[i] && mouseY > invY1Coord && mouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                            {
                                var sizer = 0;

                                for (var k = 0; k < bankAccount[i][0].identity.length; k++)
                                {
                                    if (bankAccount[i][0].identity[k] == "'")
                                    {
                                        sizer += 1;
                                    }
                                    else if (bankAccount[i][0].identity[k].indexOf(' ') != -1)
                                    {
                                        sizer += 0;
                                        console.log("space");
                                    }
                                    else if (bankAccount[i][0].identity[k] == bankAccount[i][0].identity[k].toUpperCase() )
                                    {
                                        sizer += 17; //9.21;
                                    }
                                    else if (bankAccount[i][0].identity[k] == bankAccount[i][0].identity[k].toLowerCase())
                                    {
                                        sizer += 12;
                                    }
                                }

                                XXX.beginPath();
                                XXX.fillStyle="white";
                                XXX.fillRect(3, 82, sizer, 22);
                                //The Name of the Item
                                XXX.font = "bold 22px Book Antiqua";
                                XXX.fillStyle = "black";
                                XXX.textAlign = "left"; //this is to reset it to the standard for the rest to come.
                                console.log(bankAccount);
                                XXX.fillText(bankAccount[i][0].identity, 4, 100);
                            }
                        }
                    }
                };
                //TITLE
                XXX.font = "bold 60px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                XXX.fillText("The Golden Glove Banking Company", 1/2 * CCC.width, 152.5);
                XXX.font = "bold 60px Book Antiqua";
                XXX.fillStyle = "gold";
                XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                console.log(bankAccount);
                XXX.fillText("The Golden Glove Banking Company", 1/2 * CCC.width, 155);

                //BUY BANK SLOTS (option 1)
                if (mouseX > 1/2 * CCC.width - 200 && mouseX < 1/2 * CCC.width - 200 + 400 && mouseY > 200 && mouseY < 235)
                {
                    XXX.beginPath();
                    XXX.lineWidth=4;
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.rect(1/2 * CCC.width - 200, 200, 400, 35);
                    XXX.fill();
                    XXX.stroke();
                    //Text part
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText(bankSlotCost + " Coins", 1/2 * CCC.width, 228);
                    if (clickReleased)
                    {
                        var paid = false;
                        for (var i = 0; i < Inventory.length; i++)
                        {
                            if (Inventory[i][0].type == "coins" && Inventory[i][1] - bankSlotCost > 0)
                            {
                                Inventory[i][1] -= bankSlotCost;
                                bankSlots += 1;
                                paid = true;
                                break;
                            }
                            else if (Inventory[i][0].type == "coins" && Inventory[i][1] - bankSlotCost == 0)
                            {
                                Inventory.splice(i, 1);
                                bankSlots += 1;
                                paid = true;
                                break;
                            }
                        }
                        if (paid == false)
                        {
                            for (var i = 0; i < bankAccount.length; i++)
                            {
                                if (bankAccount[i][0].type == "coins" && bankAccount[i][1] - bankSlotCost > 0)
                                {
                                    bankAccount[i][1] -= bankSlotCost;
                                    bankSlots += 1;
                                    paid = true;
                                    break;
                                }
                                else if (bankAccount[i][0].type == "coins" && bankAccount[i][1] - bankSlotCost == 0)
                                {
                                    bankAccount.splice(i, 1);
                                    bankSlots += 1;
                                    paid = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                else
                {
                    XXX.beginPath();
                    XXX.lineWidth=4;
                    XXX.fillStyle = "#ffbf00";
                    XXX.strokeStyle = "black";
                    XXX.rect(1/2 * CCC.width - 200, 200, 400, 35);
                    XXX.fill();
                    XXX.stroke();
                    //Text part
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                    XXX.fillText("Purchase a Banking Slot", 1/2 * CCC.width, 226);
                }

                this.bankSlotPricer = function()
                {
                    if (bankSlots == 1)
                    {
                        bankSlotCost = 25;
                    }
                    else if (bankSlots == 2)
                    {
                        bankSlotCost = 50;
                    }
                    else if (bankSlots == 3)
                    {
                        bankSlotCost = 75;
                    }
                    else if (bankSlots == 4)
                    {
                        bankSlotCost = 100;
                    }
                    else if (bankSlots == 5)
                    {
                        bankSlotCost = 150;
                    }
                    else if (bankSlots == 6)
                    {
                        bankSlotCost = 200;
                    }
                    else if (bankSlots == 7)
                    {
                        bankSlotCost = 250;
                    }
                    else if (bankSlots == 8)
                    {
                        bankSlotCost = 300;
                    }
                    else if (bankSlots >= 9)
                    {
                        bankSlotCost = 350;
                    }
                };

                this.bankAccountInteract();
                this.customerInventoryInteract();
                this.displayBankAccount();
                this.bankAccountScrolling();
                this.displayCustomerInventory();
                this.bankSlotPricer();
            }
        };

        //SAVE SLOTS
        this.displaySaves = function()
        {
            if (lowBar == "save")
            {
                //box 1
                LXX.beginPath();
                LXX.fillStyle = "lightGrey";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(1, 1, 350 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //text
                LXX.fillStyle = "black";
                LXX.textAlign ="center";
                LXX.font="bold 40px Book Antiqua";
                LXX.fillText("Save 1", 175, 52);
                //sensing/action
                if (lMouseX > 1 && lMouseX < 350 && lMouseY > 1 && lMouseY < 78)
                {
                    //highlight
                    LXX.beginPath();
                    LXX.fillStyle = "rgba(255,215,0, 0.35)";
                    LXX.lineWidth=2;
                    LXX.strokeStyle = "black";
                    LXX.rect(1, 1, 350 - 2, 78);
                    LXX.fill();
                    LXX.stroke();
                    //save
                    if (clicked == true)
                    {
                        clicked = false;

                        saveType = 1;

                        popType = "save1";
                        confirmed = false;
                        save1 = null;
                    }
                }

                //box 2
                LXX.beginPath();
                LXX.fillStyle = "lightGrey";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(351, 1, 350 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //text
                LXX.fillStyle = "black";
                LXX.textAlign ="center";
                LXX.font="bold 40px Book Antiqua";
                LXX.fillText("Save 2", 525, 52);
                //sensing/action
                if (lMouseX > 351 && lMouseX < 701 && lMouseY > 1 && lMouseY < 78)
                {
                    //highlight
                    LXX.beginPath();
                    LXX.fillStyle = "rgba(255,215,0, 0.35)";
                    LXX.lineWidth=2;
                    LXX.strokeStyle = "black";
                    LXX.rect(351, 1, 350 - 2, 78);
                    LXX.fill();
                    LXX.stroke();
                    //save
                    if (clicked == true)
                    {
                        clicked = false;

                        saveType = 2;

                        popType = "save2";
                        confirmed = false;
                        save2 = null;
                    }
                }

                //box 3
                LXX.beginPath();
                LXX.fillStyle = "lightGrey";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(701, 1, 350 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //text
                LXX.fillStyle = "black";
                LXX.textAlign ="center";
                LXX.font="bold 40px Book Antiqua";
                LXX.fillText("Save 3", 875, 52);
                //sensing/action
                if (lMouseX > 701 && lMouseX < 1049 && lMouseY > 1 && lMouseY < 78)
                {
                    //highlight
                    LXX.beginPath();
                    LXX.fillStyle = "rgba(255,215,0, 0.35)";
                    LXX.lineWidth=2;
                    LXX.strokeStyle = "black";
                    LXX.rect(701, 1, 350 - 2, 78);
                    LXX.fill();
                    LXX.stroke();
                    //save
                    if (clicked == true)
                    {
                        clicked = false;

                        saveType = 3;

                        popType = "save3";
                        confirmed = false;
                        save3 = null;
                    }
                }

                //box 4
                LXX.beginPath();
                LXX.fillStyle = "lightGrey";
                LXX.lineWidth=2;
                LXX.strokeStyle = "black";
                LXX.rect(1051, 1, 350 - 2, 78);
                LXX.fill();
                LXX.stroke();
                //text
                LXX.fillStyle = "black";
                LXX.textAlign ="center";
                LXX.font="bold 40px Book Antiqua";
                LXX.fillText("Save 4", 1225, 52);
                //sensing/action
                if (lMouseX > 1051 && lMouseX < 1399 && lMouseY > 1 && lMouseY < 78)
                {
                    //highlight
                    LXX.beginPath();
                    LXX.fillStyle = "rgba(255,215,0, 0.35)";
                    LXX.lineWidth=2;
                    LXX.strokeStyle = "black";
                    LXX.rect(1051, 1, 350 - 2, 78);
                    LXX.fill();
                    LXX.stroke();
                    //save
                    if (clicked == true)
                    {
                        clicked = false;

                        saveType = 4;

                        popType = "save4";
                        confirmed = false;
                        save4 = null;
                    }
                }
            }
        };

        //SHOP
        this.displayShop = function()
        {
            if (lowBar == "shop")
            {
                //MAIN BACKGROUND
                XXX.beginPath();
                XXX.fillStyle = "lightGrey";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(1, 1, 1398, 526);
                XXX.fill();
                XXX.stroke();

                //Exit Shop Button
                //the button part
                if (mouseX > 2 && mouseX < 2 + 148 && mouseY > 529 && mouseY < 529 + 20)
                {
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 3;
                    XXX.rect(2, 529, 148, 20);
                    XXX.fill();
                    XXX.stroke();

                    if (clicked == true)
                    {
                        clicked = false;
                        lowBar = "information";
                        gameState = "active";
                    }
                }
                else
                {
                    XXX.beginPath();
                    XXX.fillStyle = "E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 3;
                    XXX.rect(2, 529, 148, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                //the text part
                XXX.font = "bold 14px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Exit Shop", 75, 543);

                //line between inventory and description
                XXX.beginPath();
                XXX.strokeStyle = "black";
                XXX.lineWidth = 2;
                XXX.moveTo(0, 80);
                XXX.lineTo(1400, 80);
                XXX.stroke();

                //DISPLAY PLAYER'S INVENTORY
                this.displaySellInventory = function()
                {
                    // each inventory slot is a list with three things in it... [Item, quantity]
                    for (var i = 0; i < Inventory.length; i++)
                    {
                        if (Inventory[i][0].equipped == true)
                        {
                            LXX.beginPath();
                            LXX.lineWidth = 2;
                            LXX.fillStyle ="rgba(102, 255, 102, 0.35)";
                            LXX.strokeStyle ="black";
                            LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                            LXX.fill();
                            LXX.stroke();
                            Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                            //quantity
                            LXX.font="16px Book Antiqua";
                            LXX.textAlign="left";
                            LXX.fillStyle ="black";
                            if (Inventory[i][1] < 1000)
                            {
                                LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                            {
                                LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            else if (Inventory[i][1] >= 1000000)
                            {
                                LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            //weight
                            LXX.font="10px Book Antiqua";
                            LXX.fillStyle ="black";
                            LXX.textAlign="right";
                            LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                            LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                        }
                        else
                        {
                            LXX.beginPath();
                            LXX.lineWidth = 2;
                            LXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                            LXX.strokeStyle ="black";
                            LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                            LXX.fill();
                            LXX.stroke();
                            Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                            //quantity
                            LXX.font="16px Book Antiqua";
                            LXX.textAlign="left";
                            LXX.fillStyle ="black";
                            if (Inventory[i][1] < 1000)
                            {
                                LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                            {
                                LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            else if (Inventory[i][1] >= 1000000)
                            {
                                LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                            }
                            //weight
                            LXX.font="10px Book Antiqua";
                            LXX.fillStyle ="black";
                            LXX.textAlign="right";
                            LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                            LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                        }
                    }

                    //left scroll arrow
                    LXX.beginPath();
                    LXX.lineWidth = 1;
                    LXX.fillStyle ="darkGrey";
                    LXX.strokeStyle ="black";
                    LXX.rect(0.5, 0.5, 20, 79);
                    LXX.fill();
                    LXX.stroke();
                    LXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                    //weight display
                    LXX.beginPath();
                    LXX.fillStyle ="lightGray";
                    LXX.strokeStyle ="black";
                    LXX.rect(1329.5, 0.1, 50, 79.8);
                    LXX.fill();
                    LXX.stroke();
                    //Draw a cover on the weight display to represent the amount of carry weight filled.
                    LXX.beginPath();
                    //LXX.fillStyle ="rgba(255, 255, 255, 0.65)"; //white fill in colour
                    //LXX.fillStyle ="rgba(139, 134, 78, 0.8)"; //beige fill in colour
                    //LXX.fillStyle = "rgba(138, 54, 15, 0.65)"; //burnt sienna colour
                    LXX.fillStyle ="grey";
                    LXX.rect(1329.6, 79.5, 50, -79 * this.carryWeight / this.carryWeightMAX);
                    LXX.fill();
                    //Draw the weight number on the top and bottom and the deviding bar.
                    LXX.font="16px Book Antiqua";
                    LXX.fillStyle = "black";
                    LXX.textAlign="center";
                    LXX.fillText(JSON.stringify(Math.floor(this.carryWeight)), 1352, 25);
                    //dividing line
                    LXX.beginPath();
                    LXX.strokeStyle="black";
                    LXX.lineWidth=3;
                    LXX.moveTo(1334, 39.5);
                    LXX.lineTo(1374, 39.5);
                    LXX.stroke();
                    //divisor
                    LXX.font="16px Book Antiqua";
                    LXX.fillStyle = "black";
                    LXX.textAlign="center";
                    LXX.fillText(JSON.stringify(Math.floor(this.carryWeightMAX)), 1352, 64.5);
                    LXX.textAlign="left"; //this is to reset it to the standard for the rest to come.

                    //right scroll arrow
                    LXX.beginPath();
                    LXX.lineWidth=1;
                    LXX.fillStyle ="darkGrey";
                    LXX.strokeStyle ="black";
                    LXX.rect(1379.5, 0.5, 20, 79);
                    LXX.fill();
                    LXX.stroke();
                    LXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
                };

                this.sellInventoryInteract = function()
                {
                    var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                    for (var i = -this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
                    {
                        listOfInvX1Coords.push(20.5 + (79 * i));
                    }


                    var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                    for (var i = -this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
                    {
                        listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                    }


                    var invY1Coord = 0.5; //This doesn't change.


                    var invY2Coord = 79.5; //this is just Y + 79

                    for (var i = Inventory.length - 1; i > -1; i--)
                    {
                        if (lMouseX >= 21 && lMouseX <= 1329) //This checks if the mouse is between the scroll buttons rather than on them.
                        {
                            if (clickReleased == true && lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord && this.projectileReleased == true) //When you click on an item you either access its utility or you equip it.
                            {
                                if (Inventory[i][1] - itemAmount >= 0 && Inventory[i][0].type != "coins" && Inventory[i][0].equipped == false)
                                {
                                    var badDeal = false;
                                    var shifted = 0;
                                    var newMoney = -1;
                                    var money = -1;
                                    var shopMoney = -1;
                                    var targetItem = -1; //the item that will be added to the shops inventory.
                                    for (var j = shopInventory.length - 1; j > -1; j--)
                                    {
                                        if (shopInventory[j][0].type == "coins")
                                        {
                                            shopMoney = j;
                                        }
                                        if (shopInventory[j][0].type == Inventory[i][0].type)
                                        {
                                            targetItem = j;
                                        }
                                    }
                                    for (var k = Inventory.length - 1; k > -1; k--)
                                    {
                                        if (Inventory[k][0].type == "coins")
                                        {
                                            money = k;
                                        }
                                    }

                                    if (shopMoney != -1)
                                    {
                                        if (shopInventory[shopMoney][1] >= Inventory[i][0].sellValue * itemAmount)
                                        {
                                            shopInventory[shopMoney][1] -= Inventory[i][0].sellValue * itemAmount;

                                            if (money != -1)
                                            {
                                                Inventory[money][1] += Inventory[i][0].sellValue * itemAmount;
                                            }
                                            else
                                            {
                                                newMoney = [new Item("coins", false, false), (Inventory[i][0].sellValue * itemAmount)];
                                                Inventory.unshift(newMoney);
                                                money = 0;
                                                shifted = 1;
                                            }

                                            //Item Transference
                                            if (Inventory[i + shifted][1] - itemAmount == 0)
                                            {
                                                if (targetItem != -1)
                                                {
                                                    shopInventory[targetItem][1] += itemAmount;
                                                }
                                                else
                                                {
                                                    shopInventory.push([Inventory[i + shifted][0], itemAmount]);
                                                }
                                                Inventory.splice(i + shifted, 1);
                                            }
                                            else
                                            {
                                                Inventory[i + shifted][1] -= itemAmount;
                                                if (targetItem != -1)
                                                {
                                                    shopInventory[targetItem][1] += itemAmount;
                                                }
                                                else
                                                {
                                                    shopInventory.push([Inventory[i + shifted][0], itemAmount]);
                                                }
                                            }

                                            //Since the location may have been altered we need to reset money and shopMoney
                                            for (var j = shopInventory.length - 1; j > -1; j--)
                                            {
                                                if (shopInventory[j][0].type == "coins")
                                                {
                                                    shopMoney = j;
                                                }
                                            }
                                            for (var k = Inventory.length - 1; k > -1; k--)
                                            {
                                                if (Inventory[k][0].type == "coins")
                                                {
                                                    money = k;
                                                }
                                            }

                                            if (shopInventory[shopMoney][1] <= 0)
                                            {
                                                shopInventory.splice(shopMoney, 1);
                                            }

                                            if (money != -1)
                                            {
                                                console.log(Inventory);
                                                if (Inventory[money][1] <= 0)
                                                {
                                                    Inventory.splice(money, 1);
                                                }
                                            }
                                        }
                                        else //If the shop can't afford to buy it you sell it anyway for whatever the shop has left.
                                        {
                                            if (itemAmount > 1)
                                            {
                                                badDeal = confirm("Are you sure you want to sell your " + itemAmount + " " + Inventory[i][0].identity + "s for only " + shopInventory[shopMoney][1] + " coins?");
                                            }
                                            else
                                            {
                                                badDeal = confirm("Are you sure you want to sell your " + Inventory[i][0].identity + " for only " + shopInventory[shopMoney][1] + " coins?");
                                            }


                                            if (badDeal == true)
                                            {
                                                badDeal = shopInventory[shopMoney][1];
                                                shopInventory[shopMoney][1] -= shopInventory[shopMoney][1];

                                                if (money != -1)
                                                {
                                                    Inventory[money][1] += badDeal;
                                                }
                                                else
                                                {
                                                    newMoney = [new Item("coins", false, false), shopInventory[shopMoney][1]];
                                                    Inventory.unshift(newMoney);
                                                    money = 0;
                                                    shifted = 1;
                                                }

                                                //Item Transference
                                                if (Inventory[i + shifted][1] - itemAmount == 0)
                                                {
                                                    if (targetItem != -1)
                                                    {
                                                        shopInventory[targetItem][1] += itemAmount;
                                                    }
                                                    else
                                                    {
                                                        shopInventory.push([Inventory[i + shifted][0], itemAmount]);
                                                    }
                                                    Inventory.splice(i + shifted, 1);
                                                }
                                                else
                                                {
                                                    Inventory[i + shifted][1] -= itemAmount;
                                                    if (targetItem != -1)
                                                    {
                                                        shopInventory[targetItem][1] += itemAmount;
                                                    }
                                                    else
                                                    {
                                                        shopInventory.push([Inventory[i + shifted][0], itemAmount]);
                                                    }
                                                }

                                                //Since the location may have been altered we need to reset money and shopMoney
                                                for (var j = shopInventory.length - 1; j > -1; j--)
                                                {
                                                    if (shopInventory[j][0].type == "coins")
                                                    {
                                                        shopMoney = j;
                                                    }
                                                }
                                                for (var k = Inventory.length - 1; k > -1; k--)
                                                {
                                                    if (Inventory[k][0].type == "coins")
                                                    {
                                                        money = k;
                                                    }
                                                }

                                                if (shopInventory[shopMoney][1] <= 0)
                                                {
                                                    shopInventory.splice(shopMoney, 1);
                                                }

                                                if (money != -1)
                                                {
                                                    if (Inventory[money][1] <= 0)
                                                    {
                                                        Inventory.splice(money, 1);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                            {
                                //The Name of the Item
                                XXX.font = "bold 60px Book Antiqua";
                                XXX.fillStyle = "black";
                                XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                                XXX.fillText(Inventory[i][0].identity, 1/2 * CCC.width, 140);

                                //Sell Price

                                XXX.font = "bold 140px Book Antiqua";
                                XXX.fillStyle = "gold";
                                XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                                XXX.fillText(Inventory[i][0].sellValue * itemAmount, 1/2 * CCC.width, 340);

                            }
                        }
                    }
                };

                //DISPLAY SHOP INVENTORY
                this.displayMerchandise = function()
                {
                    // each inventory slot is a list with three things in it... [Item, quantity]
                    for (var i = 0; i < shopInventory.length; i++)
                    {
                        XXX.beginPath();
                        XXX.lineWidth = 2;
                        XXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                        XXX.strokeStyle ="black";
                        XXX.rect(merchScroll + 20.5 + (79 * i), 0.5, 79, 79);
                        XXX.fill();
                        XXX.stroke();
                        shopInventory[i][0].drawShopCraftItem(shopInventory[i][0].type, merchScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                        //quantity
                        XXX.font="16px Book Antiqua";
                        XXX.textAlign="left";
                        XXX.fillStyle ="black";
                        if (shopInventory[i][1] < 1000)
                        {
                            XXX.fillText(shopInventory[i][1], merchScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (shopInventory[i][1] >= 1000 && shopInventory[i][1] < 1000000)
                        {
                            XXX.fillText(Math.floor(shopInventory[i][1] / 1000) + "K", merchScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (shopInventory[i][1] >= 1000000)
                        {
                            XXX.fillText((Math.floor(shopInventory[i][1] / 100000) / 10) + "M", merchScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        //weight
                        XXX.font="10px Book Antiqua";
                        XXX.fillStyle ="black";
                        XXX.textAlign="right";
                        XXX.fillText("W:" + shopInventory[i][0].weight, merchScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                        XXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                    }

                    //left scroll arrow
                    XXX.beginPath();
                    XXX.lineWidth = 1;
                    XXX.fillStyle ="darkGrey";
                    XXX.strokeStyle ="black";
                    XXX.rect(0.5, 0.5, 20, 79);
                    XXX.fill();
                    XXX.stroke();
                    XXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                    //right scroll arrow
                    XXX.beginPath();
                    XXX.lineWidth=1;
                    XXX.fillStyle ="darkGrey";
                    XXX.strokeStyle ="black";
                    XXX.rect(1379.5, 0.5, 20, 79);
                    XXX.fill();
                    XXX.stroke();
                    XXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
                };

                this.merchandiseInteract = function()
                {
                    var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

                    for (var i = -this.merchPosition; i < shopInventory.length - this.merchPosition; i++)
                    {
                        listOfInvX1Coords.push(20.5 + (79 * i));
                    }


                    var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

                    for (var i = -this.merchPosition; i < shopInventory.length - this.merchPosition; i++)
                    {
                        listOfInvX2Coords.push(20.5 + (79 * i) + 79);
                    }


                    var invY1Coord = 0.5; //This doesn't change.


                    var invY2Coord = 79.5; //this is just Y + 79

                    for (var i = shopInventory.length - 1; i > -1; i--)
                    {
                        if (mouseX >= 21 && mouseX <= 1329  && mouseY < 80) //This checks if the mouse is between the scroll buttons rather than on them.
                        {
                            if (clickReleased == true && mouseX > listOfInvX1Coords[i] && mouseX < listOfInvX2Coords[i] && mouseY > invY1Coord && mouseY < invY2Coord && this.projectileReleased == true)
                            {
                                if (shopInventory[i][1] - itemAmount >= 0 && shopInventory[i][0].type != "coins")
                                {
                                    var shifted = 0;
                                    var newMoney = -1;
                                    var money = -1;
                                    var shopMoney = -1;
                                    var targetItem = -1;
                                    for (var j = Inventory.length - 1; j > -1; j--)
                                    {
                                        if (Inventory[j][0].type == "coins")
                                        {
                                            money = j;
                                        }
                                        if (Inventory[j][0].type == shopInventory[i][0].type)
                                        {
                                            targetItem = j;
                                        }
                                    }
                                    for (var k = shopInventory.length - 1; k > -1; k--)
                                    {
                                        if (shopInventory[k][0].type == "coins")
                                        {
                                            shopMoney = k;
                                        }
                                    }

                                    if (money != -1)
                                    {
                                        if (Inventory[money][1] >= shopInventory[i][0].buyValue * itemAmount)
                                        {
                                            Inventory[money][1] -= shopInventory[i][0].buyValue * itemAmount;

                                            if (shopMoney != -1)
                                            {
                                                shopInventory[shopMoney][1] += shopInventory[i][0].buyValue * itemAmount;
                                            }
                                            else
                                            {
                                                newMoney = [new Item("coins", false, false), (shopInventory[i][0].buyValue * itemAmount)];
                                                shopInventory.unshift(newMoney);
                                                shopMoney = 0;
                                                shifted = 1;
                                            }

                                            //Item Transference
                                            if (shopInventory[i + shifted][1] - itemAmount == 0)
                                            {
                                                if (targetItem != -1)
                                                {
                                                    Inventory[targetItem][1] += itemAmount;
                                                }
                                                else
                                                {
                                                    Inventory.push([shopInventory[i + shifted][0], itemAmount]);
                                                }
                                                shopInventory.splice(i + shifted, 1);
                                            }
                                            else
                                            {
                                                shopInventory[i + shifted][1] -= itemAmount;

                                                if (targetItem != -1)
                                                {
                                                    Inventory[targetItem][1] += itemAmount;
                                                }
                                                else
                                                {
                                                    Inventory.push([shopInventory[i + shifted][0], itemAmount]);
                                                }
                                            }

                                            //Since the location may have been altered we need to reset shopMoney and money
                                            for (var j = Inventory.length - 1; j > -1; j--)
                                            {
                                                if (Inventory[j][0].type == "coins")
                                                {
                                                    money = j;
                                                }
                                            }
                                            for (var k = shopInventory.length - 1; k > -1; k--)
                                            {
                                                if (shopInventory[k][0].type == "coins")
                                                {
                                                    shopMoney = k;
                                                }
                                            }

                                            if (Inventory[money][1] <= 0)
                                            {
                                                Inventory.splice(money, 1);
                                            }

                                            if (shopMoney != -1)
                                            {
                                                if (shopInventory[shopMoney][1] <= 0)
                                                {
                                                    shopInventory.splice(shopMoney, 1);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (mouseX > listOfInvX1Coords[i] && mouseX < listOfInvX2Coords[i] && mouseY > invY1Coord && mouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                            {
                                //The Name of the Item
                                XXX.font = "bold 60px Book Antiqua";
                                XXX.fillStyle = "black";
                                XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                                XXX.fillText(shopInventory[i][0].identity, 1/2 * CCC.width, 140);

                                //Buy Price
                                XXX.font = "bold 140px Book Antiqua";
                                XXX.fillStyle = "gold";
                                XXX.textAlign = "center"; //this is to reset it to the standard for the rest to come.
                                XXX.fillText(shopInventory[i][0].buyValue * itemAmount, 1/2 * CCC.width, 340);
                            }
                        }
                    }
                };

                this.merchandiseScrolling = function()
                {
                    //When the left inventory scroll is clicked scroll one to the left if there is one to the left otherwise don't.
                    if (this.merchPosition < shopInventory.length && mouseX > 1379.5 && mouseX < 1399.5 && mouseY > 0.5 && mouseY < 80 && clickReleased == true) //this (20.5, 0.5, 79, 79) is the position the first in the list will be in if the left scroll will not work.
                    {
                        this.timeSinceLastScrolled = new Date().getTime();
                        merchScroll -= 79;
                        this.merchPosition += 1;
                    }

                    //When the right inventory scroll is clicked scroll one to the right if there is one to the right otherwise don't.
                    if (this.merchPosition > 0 && mouseX > 0.5 && mouseX < 20.5 && mouseY > 0.5 && mouseY < 80 && clickReleased == true)
                    {
                        this.timeSinceLastScrolled = new Date().getTime();
                        merchScroll += 79;
                        this.merchPosition -= 1;
                    }
                };

                var selectNumber = 0;

                this.drawAmountSelector = function()
                {
                    //Draw Left Scroller
                    XXX.drawImage(polyPNG, 1, 735, 11, 30, (1/2 * CCC.width - 40) - 11, 440, 6, 32);
                    //Draw Name Display
                    XXX.beginPath();
                    XXX.fillStyle = "lightGrey";
                    XXX.lineWidth = 1;
                    XXX.strokeStyle = "black";
                    XXX.rect((1/2 * CCC.width - 40), 440, 80, 30);
                    XXX.fill();
                    XXX.stroke();
                    //Draw Right Scroller
                    XXX.drawImage(polyPNG, 11, 735, 11, 30, (1/2 * CCC.width - 40) + 84, 440, 6, 32);
                };

                this.amountScroll = function()
                {
                    //left Scroll
                    if (itemAmount > 1 && mouseX < (1/2 * CCC.width - 40) && mouseX >= (1/2 * CCC.width - 40) - 13 && mouseY > 440 && mouseY < 440 + 30 && clicked == true)
                    {
                        clicked = false;
                        if (shiftKey)
                        {
                            itemAmount = 1;
                        }
                        else
                        {
                            itemAmount -= 1;
                        }
                    }
                    else if (mouseX > (1/2 * CCC.width - 40) + 80 && mouseX <= (1/2 * CCC.width - 40) + 93 && mouseY > 440 && mouseY < 440 + 30 && clicked == true)
                    {
                        clicked = false;
                        if (shiftKey)
                        {
                            itemAmount = itemAmount * 2;
                        }
                        else
                        {
                            itemAmount += 1;
                        }
                    }

                    //Write number of amount in box
                    XXX.font = "bold 22px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(itemAmount, (1/2 * CCC.width - 40) + 40, 462.5)
                };

                //activate internal methods
                this.displaySellInventory();
                this.sellInventoryInteract();
                this.merchandiseScrolling();
                this.displayMerchandise();
                this.merchandiseInteract();
                this.drawAmountSelector();
                this.amountScroll();
            }
        };

        //SKILLS
        this.displayCharacterInfo = function ()
        {

            if (lowBar == "skills")
            {
                //MAIN BACKGROUND
                XXX.beginPath();
                XXX.fillStyle = "lightGrey";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(1, 1, 1398, 526);
                XXX.fill();
                XXX.stroke();

                //CHARACTER DETAILS BOX
                XXX.beginPath();
                XXX.strokeStyle = "black";
                XXX.lineWidth = 4;
                XXX.strokeRect(0, 0, 350, 215);

                //LEVEL AND MAGIC LEVEL BOX
                XXX.beginPath();
                XXX.strokeStyle = "black";
                XXX.lineWidth = 4;
                XXX.strokeRect(0, 215, 350, 309);

                //EXPERIENCE SWITCHER BUTTON
                //the button part
                if (mouseX > 2 && mouseX < 2 + 148 && mouseY > 529 && mouseY < 529 + 20)
                {
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 3;
                    XXX.rect(2, 529, 148, 20);
                    XXX.fill();
                    XXX.stroke();

                    if (clicked == true)
                    {
                        clicked = false;
                        if (this.experienceToggle == "normal")
                        {
                            this.experienceToggle = "magical";
                        }
                        else if (this.experienceToggle == "magical")
                        {
                            this.experienceToggle = "normal";
                        }
                    }
                }
                else
                {
                    XXX.beginPath();
                    XXX.fillStyle = "E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 3;
                    XXX.rect(2, 529, 148, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                //the text part
                XXX.font = "12px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Toggle Experience Type", 75, 542);

                //EXPERIENCE BAR
                if (this.experienceToggle == "normal")
                {
                    LXX.beginPath();
                    LXX.fillStyle = "goldenrod";
                    LXX.fillRect(0, 0, (this.experience / this.experienceRequiredToLevel) * 1400, 80);

                    if (lMouseX > 0 && lMouseX < 1400 && lMouseY > 0 && lMouseY < 80)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "45px Book Antiqua";
                        LXX.textAlign = "center";
                        LXX.fillText("Experience: " + this.experience + " / " + this.experienceRequiredToLevel, 700, 55);
                    }
                }
                else if (this.experienceToggle == "magical")
                {
                    LXX.beginPath();
                    LXX.fillStyle = "indigo";
                    LXX.fillRect(0, 0, (this.magicalExperience / this.magicalExperienceRequiredToLevel) * 1400, 80);

                    if (lMouseX > 0 && lMouseX < 1400 && lMouseY > 0 && lMouseY < 80)
                    {
                        LXX.fillStyle = "black";
                        LXX.font = "45px Book Antiqua";
                        LXX.textAlign = "center";
                        LXX.fillText("Magic Experience: " + this.magicalExperience + " / " + this.magicalExperienceRequiredToLevel, 700, 55);
                    }
                }

                //PLAYER DETAILS
                //NAME
                //box
                XXX.beginPath();
                XXX.fillStyle = "lightGrey";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.rect(0, 0, 350, 51);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "bold 35px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.name, 174, 36);

                //Race
                //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(10, 61, 85, 40);
                XXX.fill();
                XXX.stroke();

                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Race", 10 + (1 / 2 * 85), 90);

                //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(105, 61, 235, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.raceName, 105 + (1 / 2 * 235), 90);

                //Gender
                //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(10, 111, 85, 40);
                XXX.fill();
                XXX.stroke();

                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Sex", 10 + (1 / 2 * 85), 90 + 50);

                //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(105, 111, 235, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.gender, 105 + (1 / 2 * 235), 90 + 50);

                //Status
                //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(10, 161, 85, 40);
                XXX.fill();
                XXX.stroke();

                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Status", 10 + (1 / 2 * 85), 90 + 100);

                //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(105, 161, 235, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.title, 105 + (1 / 2 * 235), 90 + 100);

                //LEVEL

                //Level
                //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(10, 76 + 150, 235, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Level", 10 + (1 / 2 * 235), 105 + 150);

                //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(255, 76 + 150, 85, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.level, 255 + (1 / 2 * 85), 105 + 150);

                //Skill Points
                //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(10, 76 + 200, 235, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Skill Points", 10 + (1 / 2 * 235), 105 + 200);

                //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(255, 76 + 200, 85, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.skillPoints, 255 + (1 / 2 * 85), 105 + 200);

                //Total Skill Points
                //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(10, 76 + 250, 235, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Total Skill Points", 10 + (1 / 2 * 235), 105 + 250);

                //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(255, 76 + 250, 85, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.totalSkillPoints, 255 + (1 / 2 * 85), 105 + 250);

                //Deviding line between level and magic level stuff
                XXX.beginPath();
                XXX.strokeStyle = "black";
                XXX.lineWidth = 3;
                XXX.moveTo(0, 376);
                XXX.lineTo(350, 376);
                XXX.stroke();

                //Magic Level
                //Magic Level
                //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(10, 86 + 300, 235, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Magic Level", 10 + (1 / 2 * 235), 115 + 300);

                //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(255, 86 + 300, 85, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.magicLevel, 255 + (1 / 2 * 85), 115 + 300);

                //Magic Points
                //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(10, 86 + 345, 235, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Magic Points", 10 + (1 / 2 * 235), 115 + 345);

                //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(255, 86 + 345, 85, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.magicalSkillPoints, 255 + (1 / 2 * 85), 115 + 345);

                //Total Magic Points
                //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(10, 86 + 390, 235, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Total Magic Points", 10 + (1 / 2 * 235), 115 + 390);

                //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(255, 86 + 390, 85, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText(this.totalMagicPoints, 255 + (1 / 2 * 85), 115 + 390);

                //THE SKILLS
                //Constitution
                //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(360, 108 + (-87), 235, 40);
                XXX.fill();
                XXX.stroke();
                //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Constitution", 360 + (1 / 2 * 235), 137 + (-87));

                //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(605, 108 + (-87), 105, 40);
                XXX.fill();
                XXX.stroke();
                //text
                if (this.AdConstitution > 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#00EE76";
                    XXX.textAlign = "center";
                    XXX.fillText(this.constitution + " + " + this.AdConstitution, 605 + (1 / 2 * 105), 137 + (-87));
                }
                else if (this.AdConstitution < 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#EE0000";
                    XXX.textAlign = "center";
                    XXX.fillText(this.constitution + " - " + (this.AdConstitution * -1), 605 + (1 / 2 * 105), 137 + (-87));
                }
                else
                {
                    XXX.font = "30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(this.constitution, 605 + (1 / 2 * 105), 137 + (-87));
                }

                if (mouseX > 720 && mouseX < 740 && mouseY > 118 + (-87) && mouseY < 138 + (-87))
                {
                    if (clicked == true && this.skillPoints >= 1)
                    {
                        clicked = false;
                        this.skillPoints -= 1;
                        this.constitution += 1;
                    }

                    //box: Upgrade box (hovered over)
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + (-87), 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                else
                {
                    //box: Upgrade box
                    XXX.beginPath();
                    XXX.fillStyle = "#E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + (-87), 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                //text
                XXX.font = "italic 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("+", 730, 136 + (-87));

                    //Endurance
                        //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(360, 108 + (-37), 235, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Endurance", 360 + (1 / 2 * 235), 137 + (-37));

                        //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(605, 108 + (-37), 105, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                if (this.AdEndurance > 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#00EE76";
                    XXX.textAlign = "center";
                    XXX.fillText(this.endurance + " + " + this.AdEndurance, 605 + (1 / 2 * 105), 137 + (-37));
                }
                else if (this.AdEndurance < 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#EE0000";
                    XXX.textAlign = "center";
                    XXX.fillText(this.endurance + " - " + (this.AdEndurance * -1), 605 + (1 / 2 * 105), 137 + (-37));
                }
                else
                {
                    XXX.font = "30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(this.endurance, 605 + (1 / 2 * 105), 137 + (-37));
                }

                if (mouseX > 720 && mouseX < 740 && mouseY > 118 + (-37) && mouseY < 138 + (-37))
                {
                    if (clicked == true && this.skillPoints >= 1)
                    {
                        clicked = false;
                        this.skillPoints -= 1;
                        this.endurance += 1;
                    }

                        //box: Upgrade box (hovered over)
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + (-37), 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                else
                {
                        //box: Upgrade box
                    XXX.beginPath();
                    XXX.fillStyle = "#E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + (-37), 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                            //text
                XXX.font = "italic 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("+", 730, 136 + (-37));

                    //Strength
                        //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(360, 108 + 13, 235, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Strength", 360 + (1 / 2 * 235), 137 + 13);

                        //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(605, 108 + 13, 105, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                if (this.AdStrength > 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#00EE76";
                    XXX.textAlign = "center";
                    XXX.fillText(this.strength + " + " + this.AdStrength, 605 + (1 / 2 * 105), 137 + 13);
                }
                else if (this.AdStrength < 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#EE0000";
                    XXX.textAlign = "center";
                    XXX.fillText(this.strength + " - " + (this.AdStrength * -1), 605 + (1 / 2 * 105), 137 + 13);
                }
                else
                {
                    XXX.font = "30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(this.strength, 605 + (1 / 2 * 105), 137 + 13);
                }

                if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 13 && mouseY < 138 + 13)
                {
                    if (clicked == true && this.skillPoints >= 1)
                    {
                        clicked = false;
                        this.skillPoints -= 1;
                        this.strength += 1;
                    }

                        //box: Upgrade box (hovered over)
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 13, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                else
                {
                        //box: Upgrade box
                    XXX.beginPath();
                    XXX.fillStyle = "#E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 13, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                            //text
                XXX.font = "italic 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("+", 730, 136 + 13);

                    //Toughness
                        //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(360, 108 + 63, 235, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Toughness", 360 + (1 / 2 * 235), 137 + 63);

                        //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(605, 108 + 63, 105, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                if (this.AdToughness > 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#00EE76";
                    XXX.textAlign = "center";
                    XXX.fillText(this.toughness + " + " + this.AdToughness, 605 + (1 / 2 * 105), 137 + 63);
                }
                else if (this.AdToughness < 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#EE0000";
                    XXX.textAlign = "center";
                    XXX.fillText(this.toughness + " - " + (this.AdToughness * -1), 605 + (1 / 2 * 105), 137 + 63);
                }
                else
                {
                    XXX.font = "30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(this.toughness, 605 + (1 / 2 * 105), 137 + 63);
                }

                if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 63 && mouseY < 138 + 63)
                {
                    if (clicked == true && this.skillPoints >= 1)
                    {
                        clicked = false;
                        this.skillPoints -= 1;
                        this.toughness += 1;
                    }

                        //box: Upgrade box (hovered over)
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 63, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                else
                {
                        //box: Upgrade box
                    XXX.beginPath();
                    XXX.fillStyle = "#E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 63, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                            //text
                XXX.font = "italic 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("+", 730, 136 + 63);

                    //Stamina
                        //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(360, 108 + 113, 235, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Stamina", 360 + (1 / 2 * 235), 137 + 113);

                        //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(605, 108 + 113, 105, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                if (this.AdStamina > 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#00EE76";
                    XXX.textAlign = "center";
                    XXX.fillText(this.stamina + " + " + this.AdStamina, 605 + (1 / 2 * 105), 137 + 113);
                }
                else if (this.AdStamina < 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#EE0000";
                    XXX.textAlign = "center";
                    XXX.fillText(this.stamina + " - " + (this.AdStamina * -1), 605 + (1 / 2 * 105), 137 + 113);
                }
                else
                {
                    XXX.font = "30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(this.stamina, 605 + (1 / 2 * 105), 137 + 113);
                }

                if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 113 && mouseY < 138 + 113)
                {
                    if (clicked == true && this.skillPoints >= 1)
                    {
                        clicked = false;
                        this.skillPoints -= 1;
                        this.stamina += 1;
                    }

                        //box: Upgrade box (hovered over)
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 113, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                else
                {
                        //box: Upgrade box
                    XXX.beginPath();
                    XXX.fillStyle = "#E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 113, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                            //text
                XXX.font = "italic 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("+", 730, 136 + 113);

                    //Dexterity
                        //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(360, 108 + 163, 235, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Dexterity", 360 + (1 / 2 * 235), 137 + 163);

                        //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(605, 108 + 163, 105, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                if (this.AdDexterity > 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#00EE76";
                    XXX.textAlign = "center";
                    XXX.fillText(this.dexterity + " + " + this.AdDexterity, 605 + (1 / 2 * 105), 137 + 163);
                }
                else if (this.AdDexterity < 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#EE0000";
                    XXX.textAlign = "center";
                    XXX.fillText(this.dexterity + " - " + (this.AdDexterity * -1), 605 + (1 / 2 * 105), 137 + 163);
                }
                else
                {
                    XXX.font = "30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(this.dexterity, 605 + (1 / 2 * 105), 137 + 163);
                }

                if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 163 && mouseY < 138 + 163)
                {
                    if (clicked == true && this.skillPoints >= 1)
                    {
                        clicked = false;
                        this.skillPoints -= 1;
                        this.dexterity += 1;
                    }

                        //box: Upgrade box (hovered over)
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 163, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                else
                {
                        //box: Upgrade box
                    XXX.beginPath();
                    XXX.fillStyle = "#E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 163, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                            //text
                XXX.font = "italic 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("+", 730, 136 + 163);

                    //RANGED
                        //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(360, 108 + 213, 235, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Ranged", 360 + (1 / 2 * 235), 137 + 213);

                        //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(605, 108 + 213, 105, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                if (this.AdRanged > 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#00EE76";
                    XXX.textAlign = "center";
                    XXX.fillText(this.ranged + " + " + this.AdRanged, 605 + (1 / 2 * 105), 137 + 213);
                }
                else if (this.AdRanged < 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#EE0000";
                    XXX.textAlign = "center";
                    XXX.fillText(this.ranged + " - " + (this.AdRanged * -1), 605 + (1 / 2 * 105), 137 + 213);
                }
                else
                {
                    XXX.font = "30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(this.ranged, 605 + (1 / 2 * 105), 137 + 213);
                }

                if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 213 && mouseY < 138 + 213)
                {
                    if (clicked == true && this.skillPoints >= 1)
                    {
                        clicked = false;
                        this.skillPoints -= 1;
                        this.ranged += 1;
                    }

                        //box: Upgrade box (hovered over)
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 213, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                else
                {
                        //box: Upgrade box
                    XXX.beginPath();
                    XXX.fillStyle = "#E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 213, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                            //text
                XXX.font = "italic 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("+", 730, 136 + 213);

                    //Stealth
                        //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(360, 108 + 263, 235, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Stealth", 360 + (1 / 2 * 235), 137 + 263);

                        //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(605, 108 + 263, 105, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                if (this.AdStealth > 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#00EE76";
                    XXX.textAlign = "center";
                    XXX.fillText(this.stealth + " + " + this.AdStealth, 605 + (1 / 2 * 105), 137 + 263);
                }
                else if (this.AdStealth < 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#EE0000";
                    XXX.textAlign = "center";
                    XXX.fillText(this.stealth + " - " + (this.AdStealth * -1), 605 + (1 / 2 * 105), 137 + 263);
                }
                else
                {
                    XXX.font = "30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(this.stealth, 605 + (1 / 2 * 105), 137 + 263);
                }

                if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 263 && mouseY < 138 + 263)
                {
                    if (clicked == true && this.skillPoints >= 1)
                    {
                        clicked = false;
                        this.skillPoints -= 1;
                        this.stealth += 1;
                    }

                        //box: Upgrade box (hovered over)
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 263, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                else
                {
                        //box: Upgrade box
                    XXX.beginPath();
                    XXX.fillStyle = "#E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 263, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                            //text
                XXX.font = "italic 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("+", 730, 136 + 263);

                    //Intelligence
                        //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(360, 108 + 313, 235, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Intelligence", 360 + (1 / 2 * 235), 137 + 313);

                        //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(605, 108 + 313, 105, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                if (this.AdIntelligence > 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#00EE76";
                    XXX.textAlign = "center";
                    XXX.fillText(this.intelligence + " + " + this.AdIntelligence, 605 + (1 / 2 * 105), 137 + 313);
                }
                else if (this.AdIntelligence < 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#EE0000";
                    XXX.textAlign = "center";
                    XXX.fillText(this.intelligence + " - " + (this.AdIntelligence * -1), 605 + (1 / 2 * 105), 137 + 313);
                }
                else
                {
                    XXX.font = "30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(this.intelligence, 605 + (1 / 2 * 105), 137 + 313);
                }

                if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 313 && mouseY < 138 + 313)
                {
                    if (clicked == true && this.skillPoints >= 1)
                    {
                        clicked = false;
                        this.skillPoints -= 1;
                        this.intelligence += 1;
                    }

                        //box: Upgrade box (hovered over)
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 313, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                else
                {
                        //box: Upgrade box
                    XXX.beginPath();
                    XXX.fillStyle = "#E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 313, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                            //text
                XXX.font = "italic 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("+", 730, 136 + 313);

                    //Charisma
                        //box: subject half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(360, 108 + 363, 235, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                XXX.font = "30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("Charisma", 360 + (1 / 2 * 235), 137 + 363);

                        //box: response half
                XXX.beginPath();
                XXX.fillStyle = "#E8E8E8";
                XXX.strokeStyle = "black";
                XXX.lineWidth = 1;
                XXX.rect(605, 108 + 363, 105, 40);
                XXX.fill();
                XXX.stroke();
                            //text
                if (this.AdCharisma > 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#00EE76";
                    XXX.textAlign = "center";
                    XXX.fillText(this.charisma + " + " + this.AdCharisma, 605 + (1 / 2 * 105), 137 + 363);
                }
                else if (this.AdCharisma < 0)
                {
                    XXX.font = "bold 30px Book Antiqua";
                    XXX.fillStyle = "#EE0000";
                    XXX.textAlign = "center";
                    XXX.fillText(this.charisma + " - " + (this.AdCharisma * -1), 605 + (1 / 2 * 105), 137 + 363);
                }
                else
                {
                    XXX.font = "30px Book Antiqua";
                    XXX.fillStyle = "black";
                    XXX.textAlign = "center";
                    XXX.fillText(this.charisma, 605 + (1 / 2 * 105), 137 + 363);
                }

                if (mouseX > 720 && mouseX < 740 && mouseY > 118 + 363 && mouseY < 138 + 363)
                {
                    if (clicked == true && this.skillPoints >= 1)
                    {
                        clicked = false;
                        this.skillPoints -= 1;
                        this.charisma += 1;
                    }

                        //box: Upgrade box (hovered over)
                    XXX.beginPath();
                    XXX.fillStyle = "gold";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 363, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                else
                {
                        //box: Upgrade box
                    XXX.beginPath();
                    XXX.fillStyle = "#E8E8E8";
                    XXX.strokeStyle = "black";
                    XXX.lineWidth = 1;
                    XXX.rect(720, 118 + 363, 20, 20);
                    XXX.fill();
                    XXX.stroke();
                }
                            //text
                XXX.font = "italic 30px Book Antiqua";
                XXX.fillStyle = "black";
                XXX.textAlign = "center";
                XXX.fillText("+", 730, 136 + 363);
            }
        };

            //INVENTORY
        this.displayInventory = function()
        {
            if (lowBar == "inventory")
            {
                // each inventory slot is a list with three things in it... [Item, quantity]
                for (var i = 0; i < Inventory.length; i++)
                {
                    if (Inventory[i][0].equipped == true)
                    {
                        LXX.beginPath();
                        LXX.lineWidth = 2;
                        LXX.fillStyle ="rgba(102, 255, 102, 0.35)";
                        LXX.strokeStyle ="black";
                        LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                        LXX.fill();
                        LXX.stroke();
                        Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                        //quantity
                        LXX.font="16px Book Antiqua";
                        LXX.textAlign="left";
                        LXX.fillStyle ="black";
                        if (Inventory[i][1] < 1000)
                        {
                            LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                        {
                            LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000000)
                        {
                            LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        //drop button
                        LXX.drawImage(polyPNG, 183, 7, 17, 15, invScroll +20.5 + (79 * i) + 62, 3, 18.7, 16.5);
                        //weight
                        LXX.font="10px Book Antiqua";
                        LXX.fillStyle ="black";
                        LXX.textAlign="right";
                        LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                        LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                    }
                    else
                    {
                        LXX.beginPath();
                        LXX.lineWidth = 2;
                        LXX.fillStyle ="rgba(222, 184, 135, 0.15)";
                        LXX.strokeStyle ="black";
                        LXX.rect(invScroll + 20.5 + (79 * i), 0.5, 79, 79);
                        LXX.fill();
                        LXX.stroke();
                        Inventory[i][0].drawInventoryItem(Inventory[i][0].type, invScroll + 20.5 + (79 * i) + (1/2 * 79), 1/2 * 79);
                        //quantity
                        LXX.font="16px Book Antiqua";
                        LXX.textAlign="left";
                        LXX.fillStyle ="black";
                        if (Inventory[i][1] < 1000)
                        {
                            LXX.fillText(Inventory[i][1], invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000 && Inventory[i][1] < 1000000)
                        {
                            LXX.fillText(Math.floor(Inventory[i][1] / 1000) + "K", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        else if (Inventory[i][1] >= 1000000)
                        {
                            LXX.fillText((Math.floor(Inventory[i][1] / 100000) / 10) + "M", invScroll + 20.5 + (79 * i) + (1/2 * 79) - 37, (39/40 * 79));
                        }
                        //drop button
                        LXX.drawImage(polyPNG, 183, 7, 17, 15, invScroll +20.5 + (79 * i) + 62, 3, 18.7, 16.5);
                        //weight
                        LXX.font="10px Book Antiqua";
                        LXX.fillStyle ="black";
                        LXX.textAlign="right";
                        LXX.fillText("W:" + Inventory[i][0].weight, invScroll + 20.5 + (79 * i) + (1/2 * 79) + 37, (39/40 * 79));
                        LXX.textAlign="left"; // this is to reset it back to standard for those oldies out there...
                    }
                }

                //left scroll arrow
                LXX.beginPath();
                LXX.lineWidth = 1;
                LXX.fillStyle ="darkGrey";
                LXX.strokeStyle ="black";
                LXX.rect(0.5, 0.5, 20, 79);
                LXX.fill();
                LXX.stroke();
                LXX.drawImage(polyPNG, 1, 735, 11, 30, 4, 8, 12, 64);

                //weight display
                LXX.beginPath();
                LXX.fillStyle ="lightGray";
                LXX.strokeStyle ="black";
                LXX.rect(1329.5, 0.1, 50, 79.8);
                LXX.fill();
                LXX.stroke();
                //Draw a cover on the weight display to represent the amount of carry weight filled.
                LXX.beginPath();
                //LXX.fillStyle ="rgba(255, 255, 255, 0.65)"; //white fill in colour
                //LXX.fillStyle ="rgba(139, 134, 78, 0.8)"; //beige fill in colour
                //LXX.fillStyle = "rgba(138, 54, 15, 0.65)"; //burnt sienna colour
                LXX.fillStyle ="grey";
                LXX.rect(1329.6, 79.5, 50, -79 * this.carryWeight / this.carryWeightMAX);
                LXX.fill();
                //Draw the weight number on the top and bottom and the deviding bar.
                LXX.font="16px Book Antiqua";
                LXX.fillStyle = "black";
                LXX.textAlign="center";
                LXX.fillText(JSON.stringify(Math.floor(this.carryWeight)), 1352, 25);
                    //dividing line
                LXX.beginPath();
                LXX.strokeStyle="black";
                LXX.lineWidth=3;
                LXX.moveTo(1334, 39.5);
                LXX.lineTo(1374, 39.5);
                LXX.stroke();
                    //divisor
                LXX.font="16px Book Antiqua";
                LXX.fillStyle = "black";
                LXX.textAlign="center";
                LXX.fillText(JSON.stringify(Math.floor(this.carryWeightMAX)), 1352, 64.5);
                LXX.textAlign="left"; //this is to reset it to the standard for the rest to come.

                //right scroll arrow
                LXX.beginPath();
                LXX.lineWidth=1;
                LXX.fillStyle ="darkGrey";
                LXX.strokeStyle ="black";
                LXX.rect(1379.5, 0.5, 20, 79);
                LXX.fill();
                LXX.stroke();
                LXX.drawImage(polyPNG, 11, 735, 11, 30, 1384, 8, 12, 64);
            }
        };

        this.interactWithInventory = function()
        {
            var listOfInvX1Coords = []; //this is the list of the X coordinates for the Inventory Slots.

            for (var i = - this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
            {
                listOfInvX1Coords.push(20.5 + (79 * i));
            }


            var listOfInvX2Coords = []; //This is the same as the X1 coords except for with an added 79 to each.

            for (var i = - this.inventoryPosition; i < Inventory.length - this.inventoryPosition; i++)
            {
                listOfInvX2Coords.push(20.5 + (79 * i) + 79);
            }


            var invY1Coord = 0.5; //This doesn't change.


            var invY2Coord = 79.5; //this is just Y + 79

            for (var i = Inventory.length - 1; i > -1; i--)
            {
                if (lMouseX >= 21 && lMouseX <= 1329) //This checks if the mouse is between the scroll buttons rather than on them.
                {
                    if (shiftKey != true && lowBar == "inventory" && clickReleased == true && lMouseX > listOfInvX1Coords[i] + 64 && lMouseX < listOfInvX2Coords[i] && lMouseY > 3 && lMouseY < 20 && Inventory[i][0].equipped == false && this.projectileReleased == true) //Drop item when the X button is pressed.
                    {
                        Inventory[i][1] -= 1;
                        if (Inventory[i][1] <= 0)
                        {
                            Inventory[i][0].X = X;
                            Inventory[i][0].Y = Y;
                            worldItems.push([Inventory[i][0], 1]);

                            Inventory.splice(i, 1);
                        }
                        else
                        {
                            worldItems.push([new Item(Inventory[i][0].type, X, Y), 1]);
                        }
                    }
                    else if (shiftKey == true && lowBar == "inventory"  && clickReleased == true && lMouseX > listOfInvX1Coords[i] + 64 && lMouseX < listOfInvX2Coords[i] && lMouseY > 3 && lMouseY < 20 && Inventory[i][0].equipped == false && this.projectileReleased == true) //Drop all items when the X button is pressed.
                    {
                            worldItems.push([new Item(Inventory[i][0].type, X, Y), Inventory[i][1] + cheatItem]);
                            Inventory.splice(i, 1);
                    }
                    else if (clickReleased == true && lowBar == "inventory" && lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord && this.projectileReleased == true) //When you click on an item you either access its utility or you equip it.
                    {
                        //console.log(Inventory[i][0].equipped);
                        if (Inventory[i][0].utility == "food")
                        {
                            //Eating/Drinking
                            this.hunger = Math.min(this.hungerMAX, this.hunger + Inventory[i][0].hunger);
                            this.energy = Math.min(this.energyMAX, this.energy + Inventory[i][0].generation);
                            this.health = Math.min(this.healthMAX, this.health + Inventory[i][0].heal);
                            this.will = Math.min(this.willMAX, this.will + Inventory[i][0].replenish);
                            this.warmth = Math.min(this.warmthMAX, this.warmth + Inventory[i][0].warmth);
                            this.thirst = Math.min(this.thirstMAX, this.thirst + Inventory[i][0].thirst);

                            //Inside of this IF statement is the place to write the effects gained from eating/drinking etc.
                            if (Inventory[i][0].ability != "none")
                            {
                                //Effects

                                if (Inventory[i][0].ability == "gutWorms" && this.gutWorms == false) //gut worms
                                {
                                    var gutwormz = Math.round(Math.random()); //this makes it so that you will only get the gut worms 50% of the time.
                                    if (gutwormz)
                                    {
                                        this.gutWorms = true;
                                    }
                                }
                                else if (Inventory[i][0].ability == "gojii") //gojii berry poison
                                {
                                    this.gojiiTimer = new Date().getTime();
                                    this.gojiiVomit = true;
                                }
                                else if (Inventory[i][0].ability == "satiate") //Food with this effect will keep you fed for a little bit.
                                {
                                    this.fed = true;
                                }
                                else if (Inventory[i][0].ability == "healthVI") //This is the highest level of health regeneration.
                                {
                                    this.recoveryTime = 200;
                                    this.recoverV = true;
                                }
                                else if (Inventory[i][0].ability == "healthV") //This is the highest level of health regeneration.
                                {
                                    this.recoveryTime = 100;
                                    this.recoverV = true;
                                }
                                else if (Inventory[i][0].ability == "healthIV") //This is the fourth level of health regeneration.
                                {
                                    this.recoveryTime = 100;
                                    this.recoverIV = true;
                                }
                                else if (Inventory[i][0].ability == "healthIII") //This is the third level of health regeneration.
                                {
                                    this.recoveryTime = 100;
                                    this.recoverIII = true;
                                }
                                else if (Inventory[i][0].ability == "healthII") //This is the third level of health regeneration.
                                {
                                    this.recoveryTime = 100;
                                    this.recoverII = true;
                                }
                                else if (Inventory[i][0].ability == "healthI") //This is the third level of health regeneration.
                                {
                                    this.recoveryTime = 100;
                                    this.recoverI = true;
                                }
                                else if (Inventory[i][0].ability == "energyV") //This is the highest level of health regeneration.
                                {
                                    this.energizeTime = 100;
                                    this.energizeV = true;
                                }
                                else if (Inventory[i][0].ability == "energyIV") //This is the fourth level of health regeneration.
                                {
                                    this.energizeTime = 100;
                                    this.energizeIV = true;
                                }
                                else if (Inventory[i][0].ability == "energyIII") //This is the third level of health regeneration.
                                {
                                    this.energizeTime = 100;
                                    this.energizeIII = true;
                                }
                                else if (Inventory[i][0].ability == "energyII") //This is the third level of health regeneration.
                                {
                                    this.energizeTime = 100;
                                    this.energizeII = true;
                                }
                                else if (Inventory[i][0].ability == "energyI") //This is the third level of health regeneration.
                                {
                                    this.energizeTime = 100;
                                    this.energizeI = true;
                                }
                                else if (Inventory[i][0].ability == "speedI") //This is for enhancing dexterity.
                                {
                                    this.dexTime = new Date().getTime();
                                    this.speedI = true;
                                }
                                else if (Inventory[i][0].ability == "speedII") //This is for enhancing dexterity.
                                {
                                    this.dexTime = new Date().getTime();
                                    this.speedII = true;
                                }
                                else if (Inventory[i][0].ability == "speedIII") //This is for enhancing dexterity.
                                {
                                    this.dexTime = new Date().getTime();
                                    this.speedIII = true;
                                }
                                else if (Inventory[i][0].ability == "speedIV") //This is for enhancing dexterity.
                                {
                                    this.dexTime = new Date().getTime();
                                    this.speedIV = true;
                                }
                                else if (Inventory[i][0].ability == "speedV") //This is for enhancing dexterity.
                                {
                                    this.dexTime = new Date().getTime();
                                    this.speedV = true;
                                }
                                else if (Inventory[i][0].ability == "cleansing")
                                {
                                    //takes away satiation
                                    this.fedClock = 0;

                                    //takes away up to poisonIII
                                    this.poisonI = false;
                                    this.poisonII = false;
                                    this.poisonIII = false;
                                    this.poisonIV = false;
                                    if (this.poisonV == true)
                                    {
                                        this.poisonV = false;
                                        this.poisonI = true;
                                    }
                                    this.gutWorms = false;
                                    this.gojiiTimer = 0;
                                    this.gojiiPoisoned = false;

                                    //food poison and reduced hunger.
                                    if (this.timeSinceBadFoodEaten == 0)
                                    {
                                        this.timeSinceBadFoodEaten = new Date().getTime();
                                    }
                                }
                                else if (Inventory[i][0].ability == "foodPoisoning") //this effect makes the player vomit and lose 22 hunger.
                                {
                                    if (this.timeSinceBadFoodEaten == 0)
                                    {
                                        this.timeSinceBadFoodEaten = new Date().getTime();
                                    }
                                    else if (new Date().getTime() - this.timeSinceBadFoodEaten < 33000 - 11500)
                                    {
                                        this.timeSinceBadFoodEaten -= 11000
                                    }
                                    else if (new Date().getTime() - this.timeSinceBadFoodEaten < 33000 - 4500)
                                    {
                                        this.timeSinceBadFoodEaten -= 4000
                                    }
                                }
                                else if (Inventory[i][0].ability == "trollPoison") //trollPoison
                                {
                                    this.poisonI = true;
                                    this.timeSinceRawTrollBlood = new Date().getTime();
                                }
                                else if (Inventory[i][0].ability == "poisonI") //poisonI
                                {
                                    this.poisonI = true;
                                }
                                else if (Inventory[i][0].ability == "poisonII") //poisonII
                                {
                                    this.poisonII = true;
                                }
                                else if (Inventory[i][0].ability == "poisonIII") //poisonIII
                                {
                                    this.poisonIII = true;
                                }
                                else if (Inventory[i][0].ability == "poisonIV") //poisonIV
                                {
                                    this.poisonIV = true;
                                }
                                else if (Inventory[i][0].ability == "poisonV") //poisonV
                                {
                                    this.poisonV = true;
                                }
                            }

                            if (Inventory[i][1] <= 1)
                            {
                                Inventory.splice(i, 1);
                            }
                            else
                            {
                                Inventory[i][1] -= 1;
                            }
                        }
                        else if (Inventory[i][0].utility == "weapon")
                        {
                            //equpping a weapon
                            if (this.isWeaponEquipped == false)
                            {
                                Inventory[i][0].equipped = true;
                                this.isWeaponEquipped = true;
                                this.weaponEquipped = Inventory[i][0].type;
                                this.weaponIsRanged = false;
                            }
                            else
                            {
                                //unequipping a weapon
                                if (Inventory[i][0].equipped == true)
                                {
                                    Inventory[i][0].equipped = false;
                                    this.isWeaponEquipped = false;
                                    this.weaponEquipped = "none";
                                    this.weaponIsRanged = false;
                                }

                            }
                        }
                        else if (Inventory[i][0].utility == "ranged")
                        {
                            //equpping a ranged weapon
                            if (this.isWeaponEquipped == false)
                            {
                                Inventory[i][0].equipped = true;
                                this.isWeaponEquipped = true;
                                this.weaponEquipped = Inventory[i][0].type;
                                this.rangedWeaponType = Inventory[i][0].subUtility;
                                this.weaponIsRanged = true;
                            }
                            else
                            {
                                //unequipping a ranged weapon
                                if (Inventory[i][0].equipped == true)
                                {
                                    Inventory[i][0].equipped = false;
                                    this.isWeaponEquipped = false;
                                    this.rangedWeaponType = "none";
                                    this.weaponEquipped = "none";
                                    this.weaponIsRanged = false;
                                }
                            }
                        }
                        else if (Inventory[i][0].utility == "ammunition")
                        {
                            //equpping a ranged weapon
                            if (this.isAmmoEquipped == false)
                            {
                                Inventory[i][0].equipped = true;
                                this.isAmmoEquipped = true;
                            }
                            else
                            {
                                //unequipping a ranged weapon
                                if (Inventory[i][0].equipped == true)
                                {
                                    Inventory[i][0].equipped = false;
                                    this.isAmmoEquipped = false;
                                }
                            }
                        }
                        else if (Inventory[i][0].utility == "worn")
                        {
                            if (Inventory[i][0].subUtility == "armour" || Inventory[i][0].subUtility == "clothing" || Inventory[i][0].subUtility == "magic")
                            {
                                //equpping armour
                                if (this.isArmourEquipped == false)
                                {
                                    Inventory[i][0].equipped = true;
                                    this.isArmourEquipped = true;
                                    this.outfitEquipped = Inventory[i][0].type;
                                    console.log(Inventory[i][0].type + " :: " + this.armour);
                                }
                                else
                                {
                                    console.log(Inventory[i][0].type + " :: " + this.armour);
                                    //unequipping armour
                                    if (Inventory[i][0].equipped == true)
                                    {
                                        Inventory[i][0].equipped = false;
                                        this.isArmourEquipped = false;
                                        this.outfitEquipped = "none";
                                    }
                                }
                            }
                            //TODO add equipping for other accessories such as pendants, rings, and shoes/boots.
                        }
                    }
                    else if (lowBar == "inventory" && lMouseX > listOfInvX1Coords[i] && lMouseX < listOfInvX2Coords[i] && lMouseY > invY1Coord && lMouseY < invY2Coord) //give the name of the Item and its stats when hovered over.
                    {
                        //this allows intelligence based descriptions if the player's character meets the correct requirements in intelligence.
                        var regProps;
                        var intDes;

                        if (Inventory[i][0].isRegenerative == true)
                        {
                            regProps = true;
                        }
                        else
                        {
                            regProps = false;
                        }

                        if (this.intelligence >= Inventory[i][0].intForDes)
                        {
                            intDes = true;
                        }
                        else
                        {
                            intDes = false;
                        }

                        //This is the Item Information Pannel
                        XXX.beginPath();
                        XXX.lineWidth = 1;
                        XXX.fillStyle = "lightGrey";
                        XXX.strokeStyle = "black";
                        XXX.rect(152, 458, 1247, 68);
                        XXX.fill();
                        XXX.stroke();

                        //The Name of the Item
                        XXX.font="bold 16px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        XXX.fillText(Inventory[i][0].identity, 157, 474);

                        //The description of the item and perhaps also the intelligence description...
                        XXX.font="italic 15px Book Antiqua";
                        XXX.fillStyle = "black";
                        XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                        if (intDes == true)
                        {
                            XXX.fillText( " - " + Inventory[i][0].description + "   ' " + Inventory[i][0].intDescription + " ' ", 157, 490);
                        }
                        else
                        {
                            XXX.fillText( " - " + Inventory[i][0].description, 157, 490);
                        }

                        //Based on the utility of the item, different information is displayed to the player.
                        if (Inventory[i][0].utility == "food")
                        {
                                //How much hunger, thirst, and warmth it gives.
                            XXX.font="14px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                            if (regProps == true)
                            {
                                XXX.fillText("      Food + " + Inventory[i][0].hunger + "   Drink + " + Inventory[i][0].thirst + "    Warming + " + Inventory[i][0].warmth + "    Energy + " + Inventory[i][0].generation + "    Health + " + Inventory[i][0].heal + "    Will + " + Inventory[i][0].replenish, 157, 514);
                            }
                            else
                            {
                                XXX.fillText("      Food + " + Inventory[i][0].hunger + "   Drink + " + Inventory[i][0].thirst + "    Warming + " + Inventory[i][0].warmth, 157, 514);
                            }
                        }
                        else if (Inventory[i][0].utility == "weapon")
                        {
                            XXX.font="14px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText("      Damage + " + Math.floor(Inventory[i][0].damage) + "   Armour Negation + " + Math.floor(Inventory[i][0].negateArmour) + "    Magic + " + Math.floor(Inventory[i][0].magicalDamage) + "    Reach + " + Math.floor(Inventory[i][0].range) + "    Energy Cost: " + Math.floor(Inventory[i][0].energyCost), 157, 514);
                        }
                        else if (Inventory[i][0].utility == "ranged")
                        {
                            XXX.font="14px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText("      Range + " + Math.floor(Inventory[i][0].range) + "   Rate + " + Math.floor(Inventory[i][0].rate) + "    Projectile Speed + " + Math.floor(Inventory[i][0].speed) + "    Armour Negation + " + Math.floor(Inventory[i][0].negateArmour), 157, 514);
                        }
                        else if (Inventory[i][0].utility == "ammunition")
                        {
                            XXX.font="14px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText("      Type: " + Inventory[i][0].subUtilityName + "   Damage + " + Math.floor(Inventory[i][0].damage) + "    Magical Damage + " + Math.floor(Inventory[i][0].magicalDamage), 157, 514);
                        }
                        else if (Inventory[i][0].utility == "material")
                        {
                            XXX.font="14px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText("      Material", 157, 514);
                        }
                        else if (Inventory[i][0].utility == "currency")
                        {
                            XXX.font="14px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText(Inventory[i][1], 237, 514);
                            XXX.fillText("      Currency", 157, 514);
                        }
                        else if (Inventory[i][0].utility == "junk")
                        {
                            XXX.font="14px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                            XXX.fillText("      Junk", 157, 514);
                        }
                        else if (Inventory[i][0].utility == "worn")
                        {
                            //How much hunger, thirst, and warmth it gives.
                            XXX.font="14px Book Antiqua";
                            XXX.fillStyle = "black";
                            XXX.textAlign="left"; //this is to reset it to the standard for the rest to come.
                            if (Inventory[i][0].subUtility == "armour")
                            {
                                XXX.fillText("      Armour + " + Math.floor(Inventory[i][0].protection) + "   Magical Resistance  + " + Inventory[i][0].magicalProtection + "    Heat Resistance + " + Inventory[i][0].thirstRetention + "    Cold Resistance + " + Inventory[i][0].warmthRetention + "    Toughness Required: " + Math.floor(Inventory[i][0].toughnessRequirement), 157, 514);
                            }
                            else if (Inventory[i][0].subUtility == "clothing")
                            {
                                //TODO show different stats based on the subUtility of the Worn Item.
                            }
                            //TODO add stat displays for: "magic" which is like armour but shows eminence requirement etc.,"ring", "Pendant", "Boots", etc. ...
                        }
                    }
                }
            }
        };

        this.pickUpItem = function()
        {
            if (worldItems.length > 0 && gameState == "active" || worldItems.length > 0 && gameState == "stopTime")
            {
                if (dClick == true)
                {
                    console.log( "worldItems:" );
                    console.log( worldItems );
                     //console.log("dClicked");
                     for (var i = worldItems.length - 1; i > -1; i -= 1)
                     {
                         this.distanceFromMouse = Math.sqrt((X - (X - mouseX + (1/2 * CCC.width)))  *   (X - (X - mouseX + (1/2 * CCC.width)))   +  (Y - (Y - mouseY + (1/2 * CCC.height)))  *   (Y - (Y - mouseY + (1/2 * CCC.height)))); //distanceToPlayerFromMouse
                         var itemDistanceToMouse = Math.sqrt((worldItems[i][0].X - (X - mouseX + (1/2 * CCC.width))) * (worldItems[i][0].X - (X - mouseX + (1/2 * CCC.width))) + (worldItems[i][0].Y - (Y - mouseY + (1/2 * CCC.height))) * (worldItems[i][0].Y - (Y - mouseY + (1/2 * CCC.height)))); //distanceToItemFromMouse
                         if (this.distanceFromMouse <= this.lootRadius && itemDistanceToMouse <= worldItems[i][0].size)
                         {
                             //console.log(i + " ;; " + itemDistanceToMouse + " ;; " + worldItems[i].type);
                             if (Inventory.length > 0)
                             {
                                 var hits = 0;
                                 for (var j = Inventory.length - 1; j > -1; j -= 1)
                                 {
                                     if (Inventory[j][0].type == worldItems[i][0].type)
                                     {
                                         //console.log("sameType, changing quantity!");
                                         Inventory[j][1] += worldItems[i][1];
                                         worldItems.splice(i, 1);
                                         break;
                                     }
                                     else
                                     {
                                         hits += 1; // if the type is not the same then add a hit.
                                     }
                                 }

                                 if (hits >= Inventory.length) // if hits is equal to the length of the inventory that means that none of the inventory item types are matching.
                                 {
                                     //console.log("notSameType, adding item!")
                                     Inventory.push([new Item(worldItems[i][0].type, false, false), worldItems[i][1]]);
                                     worldItems.splice(i, 1);
                                     break;
                                 }
                             }
                             else
                             {
                                 //console.log("no items in list, adding item!")

                                 Inventory.push([new Item(worldItems[i][0].type, false, false), worldItems[i][1]]);
                                 worldItems.splice(i, 1);
                             }
                         }
                     }
                }
            }
        };

        this.inventoryScrolling = function()
        {
            //When the left inventory scroll is clicked scroll one to the left if there is one to the left otherwise don't.
            if (this.inventoryPosition < Inventory.length && lMouseX > 1379.5 && lMouseX < 1399.5 && lMouseY > 0.5 && lMouseY < 80 && clickReleased == true) //this (20.5, 0.5, 79, 79) is the position the first in the list will be in if the left scroll will not work.
            {
                this.timeSinceLastScrolled = new Date().getTime();
                invScroll -= 79;
                this.inventoryPosition += 1;
            }

            //When the right inventory scroll is clicked scroll one to the right if there is one to the right otherwise don't.
            if (this.inventoryPosition > 0 && lMouseX > 0.5 && lMouseX < 20.5 && lMouseY > 0.5 && lMouseY < 80 && clickReleased == true)
            {
                this.timeSinceLastScrolled = new Date().getTime();
                invScroll += 79;
                this.inventoryPosition -= 1;
            }
        };

            //Health bar
        this.drawHealthBar = function()
        {
            //This is the background for the bar.
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "lightGrey";
            XXX.rect(1, 527, 150, 22);
            XXX.fill();
            XXX.stroke();
            //This is the layer that shows how much has been lost in the current fight.
            XXX.beginPath();
            XXX.fillStyle = "red";
            XXX.rect((this.health / this.healthMAX) * 151, 527, (this.decreaseInHealth / this.healthMAX) * 150, 22);
            XXX.fill();
            //This is the layer that changes to represent the amount.
            XXX.beginPath();
            XXX.fillStyle = "lightGreen";
            XXX.rect(1, 527, (this.health / this.healthMAX) * 150, 22);
            XXX.fill();

            // When the mouse hovers over it says its type.
            if (mouseX > 1 && mouseX < 151 && mouseY > 527 && mouseY < 549)
            {
                XXX.fillStyle ="black";
                XXX.font = "16px Serif";
                XXX.fillText("Health: " + Math.floor(this.health) + "/" + Math.floor(this.healthMAX), 31, 544);
            }

        };

        //Health bar
        this.drawAntiVenomBar = function()
        {
            var avY;
            if (showAntiVenomBar)
            {
                avY = 1;
            }
            else
            {
                avY = -200;
            }

            //This is the background for the bar.
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "lightGrey";
            XXX.rect(1, avY + 27, 150, 22);
            XXX.fill();
            XXX.stroke();

            //This is the layer that changes to represent the amount.
            XXX.beginPath();
            XXX.fillStyle = "Green";
            XXX.rect(1, avY + 27, (this.health / this.healthMAX) * 150, 22);
            XXX.fill();

            // When the mouse hovers over it says its type.
            if (mouseX > 1 && mouseX < 151 && mouseY > avY + 27 && mouseY < avY + 49)
            {
                XXX.fillStyle ="black";
                XXX.font = "16px Serif";
                XXX.fillText("Anti-Venom: " + Math.floor(this.antiVenom) + "/" + Math.floor(this.antiVenomMAX), 31, avY + 44);
            }
        };
            //Energy Bar
        this.drawStaminaBar = function()
        {
            XXX.beginPath();
            XXX.strokeStyle = "black";
            XXX.fillStyle = "lightGrey";
            XXX.lineWidth = 1;
            XXX.rect(1, 504, 150, 22);
            XXX.fill();
            XXX.stroke();
            //This is the layer that changes to represent the amount.
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.fillStyle = "yellow";
            XXX.rect(1, 504, (this.energy / this.energyMAX) * 150, 22);
            XXX.fill();

            // When the mouse hovers over it says its type.
            if (mouseX > 1 && mouseX < 151 && mouseY > 504 && mouseY < 526)
            {
                XXX.fillStyle ="black";
                XXX.font = "16px Serif";
                XXX.fillText("Energy: " + Math.floor(this.energy) + "/" + this.energyMAX, 31, 521);
            }

        };
            //Hunger Bar
        this.drawHungerBar = function()
        {
            //This is the background for the bar.
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "lightGrey";
            XXX.rect(1, 481, 150, 22);
            XXX.fill();
            XXX.stroke();
            //This is the layer that changes to represent the amount.
            XXX.beginPath();
            XXX.fillStyle = "orangered";
            XXX.rect(1, 481, (this.hunger / this.hungerMAX) * 150, 22);
            XXX.fill();

            // When the mouse hovers over it says its type.
            if (mouseX > 1 && mouseX < 151 && mouseY > 481 && mouseY < 503)
            {
                XXX.fillStyle ="black";
                XXX.font = "16px Serif";
                XXX.fillText("Hunger: " + Math.floor(this.hunger) + "/" + this.hungerMAX, 31, 498);
            }

        };
            //Willpower Bar
        this.drawWillBar = function()
        {
            //This is the background for the bar.
            XXX.beginPath();
            XXX.lineWidth = 1;
            XXX.strokeStyle = "black";
            XXX.fillStyle = "lightGrey";
            XXX.rect(1, 458, 150, 22);
            XXX.fill();
            XXX.stroke();
            //This is the layer that changes to represent the amount.
            XXX.beginPath();
            XXX.fillStyle = "mediumpurple";
            XXX.rect(1, 458, (this.will / this.willMAX) * 150, 22);
            XXX.fill();

            // When the mouse hovers over it says its type.
            if (mouseX > 1 && mouseX < 151 && mouseY > 458 && mouseY < 480)
            {
                XXX.fillStyle ="black";
                XXX.font = "16px Serif";
                XXX.fillText("Will: " + Math.floor(this.will) + "/" + Math.floor(this.willMAX), 31, 475);
            }
        };

        //FUNCTION FOR COMPACTING ALL USER INTERFACE FUNCTIONS
        this.UI = function()
        {

            //UI Bar
            this.buildUIBar(); //#UI Bar
            this.uiButton(); //#Inventory
            this.highlightSelectedUI(); //#UI Bar
            this.toggleUIIcon(); //#UI Bar

            //Stat Bars
            if (gameState == "active" || gameState == "stopTime" || gameState == "popUp")
            {
                XXX.textAlign = "left";
                this.drawWillBar(); //#Stat Bar
                this.drawHungerBar(); //#Stat Bar
                this.drawStaminaBar(); //#Stat Bar
                this.drawHealthBar(); //#Stat Bar
            }
            this.drawAntiVenomBar(); //#Stat Bar //this is a developer stat bar only and it also is used to take the fall for an animation glitch that only affects the last stat bar drawn.

            //Shop
            this.displayShop(); //#Shop

            //Bank
            this.displayBank(); //#Bank

            //Skills
            this.displayCharacterInfo(); //#Skills

            //Dialogue
            //this.displayDialogueOptions(); //#Diaglogue

            //Saves
            this.displaySaves(); //#Saves

            //Inventory
            this.inventoryScrolling(); //#Inventory
            this.displayInventory(); //#Inventory
            this.pickUpItem(); //#Inventory
            this.interactWithInventory(); //#Inventory
        };

        //STAT RECHARGING
            //Health
        this.healthRegeneration = function()
        {
            if (this.health < this.healthMAX && this.health > 0)
            {
                this.health += 1 * (TTD / (45000 - 420 * this.getEndurance() * 2));
            }
            if (this.health > this.healthMAX)
            {
                this.health = this.healthMAX;
            }
            else if (this.health < 0)
            {
                this.health = 0;
            }
        };

        this.antiVenomRegeneration = function()
        {
            if (this.antiVenom < this.antiVenomMAX)
            {
                this.antiVenom += 1 * (TTD / (120000 - 820 * this.getEndurance() * 2));
            }
            if (this.antiVenom > this.antiVenomMAX)
            {
                this.antiVenom = this.antiVenomMAX;
            }
            else if (this.antiVenom < 0)
            {
                this.antiVenom = 0;
            }
        };

            //Energy
        this.energyRegeneration = function()
        {
            if (this.movingType != 2)
            {
                if (this.hunger > 1/10 * this.hungerMAX) //if the hunger is greater than 1/10 regeneration is allowed.
                {
                    if (this.energy < this.energyMAX)
                    {
                        this.energy += 1 * (TTD / (6000 - 57 * this.getEndurance() * 2));
                    }
                    if (this.energy > this.energyMAX)
                    {
                        this.energy = this.energyMAX;
                    }
                }
            }
            else if (this.movingType == 2) //Drain energy while running rather than regenerate it.
            {
                if (this.energy > 0)
                {
                    this.energy -= 1 * (TTD / (1300 + 50 * this.getEndurance() * 2));
                }

                if (this.energy < 0)
                {
                    this.energy = -5;
                }
            }
        };
            //Hunger
                //this is a timer that starts whenever food is eaten, it makes it so that hunger doesn't go down for a little while directly after eating food.
        this.fedTimer = function()
        {
            if (this.fed == true)
            {
                this.fedClock = 50 + 1/2 * this.getEndurance() * 2;
                this.fed = false;
            }
            if (this.fedClock > 0)
            {
                this.satiated = true;
                this.fedClock -= 1 * (TTD / 1400);
            }
            else
            {
                //console.log(this.fedClock);
                this.satiated = false;
            }

        };
                //this is the hunger timer.
        this.hungerClock = function()
        {
            if (this.satiated == false)
            {
                this.hunger -= 1 * (TTD / (30000 + 300 * this.getEndurance() * 2));

                if (this.hunger <= 1/10 * this.hungerMAX && this.hunger > -10) // at 1/10 of hunger the player loses the use of energy... That means no attacks.
                {
                    this.energy -= 1 * (TTD / (1000 + 100 * this.getEndurance() * 2));
                }
                if (this.hunger <= 0)
                {
                    this.hunger = 0;
                    this.health -= 1 * (TTD / (1100 + 100 * this.getEndurance() * 2));
                }
            }
        };
            //WILL
        this.willRegeneration = function()
        {
            if (this.will < this.willMAX)
            {
                this.will += 1 * (TTD / (10000 - 95 * this.memory));
            }
            if (this.will > this.willMAX)
            {
                this.will = this.willMAX;
            }
        };
        //FUNCTION FOR COMPACTING ALL STAT RECHARGE FUNCTIONS
        this.statRecharge = function()
        {
            this.willRegeneration();
            this.fedTimer();
            this.hungerClock();
            this.energyRegeneration();
            this.antiVenomRegeneration();
            if (this.inCombat == false)
            {
                this.healthRegeneration();
            }
        };

        //DEATH SENSING
        this.deathSensor = function()
        {
            if (this.health <= 0)
            {
                //respawn
                X = spawnX;
                Y = spawnY;

                //clear effects
                this.gojiiPoisoned = false;
                this.gojiiTimer = 0;
                this.poisoned = false;
                this.poisonI = false;
                this.poisonII = false;
                this.poisonIII = false;
                this.poisonIV = false;
                this.poisonV = false;
                this.gutWorms = false;
                this.freezing = false;
                this.recoveryTime = 0;
                this.energizeTime = 0;
                this.timeSinceRawTrollBlood = 0;

                //refresh all stats to max
                this.health = this.healthMAX;
                this.energy = this.energyMAX;
                this.hunger = this.hungerMAX;
                this.will = this.willMAX;
                this.warmth = this.warmthMAX;
                this.antiVenom = this.antiVenomMAX;

                //reset functionality variables
                this.inCombat = false;
                this.decreaseInHealth = 0;

                //respawn bonus effects
                this.fed = true;

                //all items that are not equipped are lossed upon death
                for (var i = Inventory.length - 1; i > -1; i--)
                {
                    if (Inventory[i][0].equipped == false)
                    {
                        Inventory.splice(i, 1);
                    }
                }

                //all units still alive get their health reset and their disturbance set back to false.
                for (var i = ArtificialIntelligenceAccess.length - 1; i > -1; i--)
                {
                    if (ArtificialIntelligenceAccess[i].health < ArtificialIntelligenceAccess[i].healthMAX || ArtificialIntelligenceAccess[i].disturbed == true)
                    {
                        ArtificialIntelligenceAccess[i].disturbedTime = 0;
                        ArtificialIntelligenceAccess[i].extraRangeTime = 0;
                        ArtificialIntelligenceAccess[i].extraRange = 0;
                        ArtificialIntelligenceAccess[i].disturbed = false;
                        ArtificialIntelligenceAccess[i].health = ArtificialIntelligenceAccess[i].healthMAX;
                    }
                }
            }
        };

        //This is a test function that displays the players coords on the screen as text.
        this.tellCoordinates = function()
        {
            if (tellCoords == true)
            {
                XXX.beginPath();
                XXX.fillStyle ="gold";
                XXX.font = "30px courier";
                XXX.fillText("X: " + Math.floor(X) + " " + "Y: " + Math.floor(Y), this.myScreenX - 140, this.myScreenY + 60);
            }
        };

        //OPERATIONS [this is where everysingle function relating to the main character is activated from]
        this.operations = function()
        {
            //this sets the players stats and is in charge of leveling for normal skills and magical ones.
            this.skillOperations();

            if (gameState == "active" || gameState == "stopTime") //This makes it so that the players operations do not play while the game is paused.
            {
                this.deathSensor();
                //stat based or altering effects
                this.effects();
                this.motion();
                this.pointAtMouse();
                this.movement();
            }

            //USER INTERFACE
            this.UI(); //The user interface has to go here because otherwise it will break some of the player drawing animations...

            if (gameState == "active" || gameState == "stopTime" || gameState == "popUp") //This makes it so that the players operations do not play while the game is paused.
            {
                //Draw the player

                //the player's legs
                this.drawLegs();

                //this is rare, but some weapons draw below the body layer.
                if (this.weaponEquipped == "freydicSword" || this.weaponEquipped == "freydicGreatSword") //add more cases for more overhead weapons.
                {
                    this.drawArms();
                }

                //the player's body
                this.drawBody();

                //most weapons draw beneath the armour layer.
                if (this.weaponEquipped != "nirineseSabre" && this.weaponEquipped != "freydicSword" && this.weaponEquipped != "freydicGreatSword") //add more cases for more overhead weapons.
                {
                    this.drawArms();
                }

                //draw the armour/clothing here.
                this.drawOutfit();

                //certain weapons draw over the armour layer
                if (this.weaponEquipped == "nirineseSabre") //add more cases for more overhead weapons.
                {
                    this.drawArms();
                }

                //effect notices, and deveoper functions, etc.
                this.tellCoordinates();
                this.miniNotices();
            }

            if (gameState == "active" || gameState == "stopTime")
            {
                //Stat recharging
                this.statRecharge();

                //This enables the players weapons and attacking
                this.weaponSetup();
                this.attack();
            }
        };
    }

    function Projectile(type, startX, startY, startAngle, speed, range, negation, list, damage, magicDamage, ability)
    {
        this.X = startX;
        this.Y = startY;
        this.rotation = startAngle;
        this.distanceFromStart = 0;
        this.damage = 0;
        this.magicalDamage = 0;
        this.negateArmour = negation;
        this.ability = "none";
        this.statsSet = false;

        //PROJECTILE AI
        //TODO this is where unique projectile AI like target following would be added.

            //SHOOT (project self)
        this.shoot = function()
        {
            if (list == playerProjectiles)
            {
                this.distanceFromStart = Math.sqrt((this.X - startX)*(this.X - startX)+(this.Y - startY)*(this.Y - startY));
                if (this.distanceFromStart < range)
                {
                    this.X += (Math.cos(this.rotation + (1/2 * Math.PI)) * speed) * (TTD / 16.75);
                    this.Y += (Math.sin(this.rotation + (1/2 * Math.PI)) * speed) * (TTD / 16.75);
                }
                else
                {
                    for (var i = list.length - 1; i > -1; i--)
                    {
                        if (list[i] == this)
                        {
                            list.splice(i, 1);
                            break;
                        }
                    }
                }
            }
            else if (list == unitProjectiles)
            {
                this.distanceFromStart = Math.sqrt((this.X - startX)*(this.X - startX)+(this.Y - startY)*(this.Y - startY));
                if (this.distanceFromStart < range)
                {
                    this.X += (Math.cos(this.rotation - (1/2 * Math.PI)) * speed) * (TTD / 16.75);
                    this.Y += (Math.sin(this.rotation - (1/2 * Math.PI)) * speed) * (TTD / 16.75);
                }
                else
                {
                    for (var i = list.length - 1; i > -1; i--)
                    {
                        if (list[i] == this)
                        {
                            list.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        };

        //This sets the projectiles damages and ability to that of the item its type referrs to.
        this.setStats = function()
        {
            if (list == playerProjectiles)
            {
                if (this.statsSet == false)
                {
                    for (var i = 0; i < allWeapons.length; i++)
                    {
                        if (type == allWeapons[i].type)
                        {
                            this.damage = allWeapons[i].damage;
                            this.magicalDamage = allWeapons[i].magicalDamage;
                            this.ability = allWeapons[i].ability;
                            this.statsSet = true;
                            break;
                        }
                    }
                }
            }
            else if (list == unitProjectiles)
            {
                if (this.statsSet == false)
                {
                    this.damage = damage;
                    this.magicalDamage = magicDamage;
                    this.ability = ability;
                    this.statsSet = true;
                }
            }
            //TODO make sure once abilities are added that this can also take those into account.
        };

        //Deal damage to enemy and then disappear.
        this.impact = function()
        {
            if (list == playerProjectiles)
            {
                for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                {
                    var distanceFromUnit = Math.sqrt((this.X - ArtificialIntelligenceAccess[i].X)*(this.X - ArtificialIntelligenceAccess[i].X)+(this.Y - ArtificialIntelligenceAccess[i].Y)*(this.Y - ArtificialIntelligenceAccess[i].Y));

                    if (distanceFromUnit < ArtificialIntelligenceAccess[i].sizeRadius)
                    {
                        ArtificialIntelligenceAccess[i].health -= Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) + Math.max(0, this.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance);
                        ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                        ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();

                        for (var j = list.length - 1; j > -1; j--)
                        {
                            if (list[j] == this)
                            {
                                list.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            else if (list == unitProjectiles)
            {
                //Unit arrows can harm the player!
                var distanceFromPlayer = Math.sqrt((this.X - X)*(this.X - X)+(this.Y - Y)*(this.Y - Y));
                if (distanceFromPlayer <= player.mySize + 1)
                {
                    player.health -= Math.max(0, this.damage - Math.max(0, player.armour - this.negateArmour)) + Math.max(0, this.magicalDamage - player.magicalResistance);

                    for (var j = list.length - 1; j > -1; j--)
                    {
                        if (list[j] == this)
                        {
                            list.splice(j, 1);
                            break;
                        }
                    }
                }
            }
        };

        //This function determines what the projectile will do and how it will draw when it is called based on its type.
        this.projectileBuilder = function()
        {
            if (type == "arrow")
            {
                if (list == playerProjectiles)
                {
                    //WHAT IT WILL DO...
                    player.projYAd = 0;
                    player.projXAd = 0;
                    this.setStats();
                    this.shoot();
                    this.impact();

                    //HOW IT WILL DRAW...
                    XXX.save();
                    XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                    XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                    XXX.drawImage(polyPNG, 432, 554, 20, 8, 0, 0, 30, 12);
                    XXX.restore();
                }
                else if (list == unitProjectiles)
                {
                    //WHAT IT WILL DO...
                    player.projYAd = 0;
                    player.projXAd = 0;
                    this.setStats();
                    this.shoot();
                    this.impact();

                    //HOW IT WILL DRAW...
                    XXX.save();
                    XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                    XXX.rotate(this.rotation + (1 / 2 * Math.PI));
                    XXX.drawImage(polyPNG, 432, 554, 20, 8, 0, 0, 30, 12);
                    XXX.restore();
                }
            }
            else if (type == "aldrekiiArrow")
            {
                if (list == playerProjectiles)
                {
                    //WHAT IT WILL DO...
                    player.projYAd = 0;
                    player.projXAd = 0;
                    this.setStats();
                    this.shoot();
                    this.impact();

                    //HOW IT WILL DRAW...
                    XXX.save();
                    XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                    XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                    XXX.drawImage(verse, 2832, 3, 41, 12, 0, 0, 32, 12);
                    XXX.restore();
                }
                else if (list == unitProjectiles)
                {
                    //WHAT IT WILL DO...
                    player.projYAd = 0;
                    player.projXAd = 0;
                    this.setStats();
                    this.shoot();
                    this.impact();

                    //HOW IT WILL DRAW...
                    XXX.save();
                    XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                    XXX.rotate(this.rotation + (1 / 2 * Math.PI));
                    XXX.drawImage(verse, 2832, 3, 41, 12, 0, 0, 32, 12);
                    XXX.restore();
                }
            }
        };

        this.operations = function()
        {
            this.projectileBuilder();
        };
    }

    // This is the template for building a map out of tiles.
    function outlineBuilder(width, length, terrain, extraX, extraY)
    {
        for(var i = 0; i < width; i++)
        {
            for(var j = 0; j < length; j++)
            {
                if (terrain == "outline")
                {
                    XXX.beginPath();
                    XXX.fillStyle = "white";
                    XXX.strokeStyle = "black";
                    XXX.rect((j-1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    XXX.fill();
                    XXX.stroke();
                }
                if (terrain == "greenGrass")
                {
                    XXX.drawImage(greenGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                if (terrain == "forest")
                {
                    XXX.drawImage(forestEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                if (terrain == "crag")
                {
                    XXX.drawImage(rockyFlatEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                if (terrain == "desert")
                {
                    XXX.drawImage(sandyEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                if (terrain == "frost")
                {
                    XXX.drawImage(snowyEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                if (terrain == "stoneWork")
                {
                    XXX.drawImage(stoneWorkEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                if (terrain == "molten")
                {
                    XXX.drawImage(volcanicEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                if (terrain == "dryGrass")
                {
                    XXX.drawImage(dryGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                if (terrain == "snow")
                {
                    XXX.drawImage(snowEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                if (terrain == "stonePath")
                {
                    XXX.drawImage(stonePathEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                if (terrain == "arctic")
                {
                    XXX.drawImage(frozenEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
            }

        }
    }

    //This class supports ALL of the games AI. Each individual will henceforth be called a Unit.
    function Unit(unitX, unitY, type, isalpha, ID, ultra) //ultra is an object that allows for numerous unique arguments to be accessed.
    {
        //TODO add a respawn function, and a respawn rate stat, and possibly respawn coords based roughly on their set coords.
        //Priority Variables
        this.ID = ID; //This is gives this unit an identity so that they can be identified if a problem comes up.
        this.X = unitX; // this is the units X position in the world
        this.Y = unitY; // this is the units Y position in the world
        this.type = type; //This determines what kind of unit it is.

        //variables concerning code functionality
        this.ultra = ultra;
        //Important Game Variables
        this.health = 0;
        this.armour = 0;
        this.damage = 0;
        this.negateArmour = 0;
        this.magicalDamage = 0;
        this.speed = 0;
        this.rangeOfSight = 120;
        this.alpha = false;
        this.effect = "none"; //This is a special effect that happens on attacks against the player.
        this.drops = []; //This is the list of items that this unit will drop upon death.
        this.experience = 1; //This is the amount of experience that the player will earn from slaying this creature. It becomes either regular or magical experience depending on what means the player used to get the killing blow.
        //Operational game variables
        this.rotation = 0; //this is the unit's current rotation.
        this.newRotation = 0; //this is the target rotation, or the rotation that the unit would like to be at.
        this.costume = 0; //This is costume as in scratch's type of costume, like a frame... It is used for movement and attack animation frames.
        this.rotationSpeed = 0.1; // this is the speed at which the unit rotates.
        //functionality game variables
        this.engagementRadius = 15; //this is the distance before a target that the unit will stop at to leave itself appropriate room to attack or whatever interaction it will do.
        this.sizeRadius = 20; // this is the radius that represents the total size of the unit.
        this.alive = true;
        this.alpha = isalpha;
        this.alphaSize = 1;
        //AI and sensing variables
        this.closestDistance; //this is the distance away from this unit that the closest other unit is.
        this.closestUnit; // this is the exact unit that is the closest at the moment.
        this.playerSeen = false; //This shows whether or not this unit currently sees the player.
        this.extraRange = 0; //This is range that is added to rangeOfSight so that a unit can see the player if a packmember does.
        this.extraRangeTime = 0;
        this.disturbed = false; //When activated the creature will have twice as much sight!
        this.disturbedTime = 0; //this is the timer that regulates how long a creature is in the disturbed state.
        //animation variables
        this.resetFrameOrder = true; //This switches the costumeEngine back to positive direction framerate
        this.attacking = false; //This flag is active while this unit is attacking so that the game knows when this unit is attacking.
        this.moving = false; //This flag is active while this unit is moving so that the game knows when this unit is moving.
        this.timeStoppedMoving = new Date().getTime(); //This variable is used to measure how long a unit has not been moving so that the unit can switch back to a stationary costume after an appropriate amount of time.
        //lesser animation variables
        this.healthShownTime = 0;
        this.hostile = true;
        //attacking variables (excluding the attacking flag)
        this.damageFrame = "automatic"; //When this is set to automatic it makes the last attack frame deal the damage to the target. If it is anything else the final attack frame needs to be triggered from within the front end of the animation.
        this.finalAttackCostume = false; //When this flag is triggered the Unit deals its damage to the player.
        this.damageDealt = false; //for manual Unit damage dealing (meaning damage dealt on a frame picked inside of the Units animation rather than automatically the final frame)
        this.attackStyle = "chunked";
        this.attackRate = 10;
        this.attackWait = 0.1;
        this.justAttacked = false; //just to be safe this.justAttacked should be true. This is the flag that shows whether or not a unit has just attacked.
        this.timeBetweenAttacks = new Date().getTime(); //this is a variable that regulates the wait timer for attacking.
        this.grudge = 0; //this is how long the unit will hold a grudge against the player for attacking them. 20 seconds is what it starts at so a grudge 0 seconds long would be - 20.
        this.combatMode = 0; //Some Units can switch between different styles of attacks or enter a beserker mode etc.
        //other extra variables for combat stuff
        this.keepSpeed = 0;
        //movement specific variables
        this.fleeing = false;
        //game pause related variables
        this.timeResistance = false;
        //death variables
        this.timeSinceDead = 0;
        this.wasAlive = true;
        //Humanoid related Variables (for humanlike units only)
        this.lLegY = 0;
        this.rLegY = 0;
        this.legSwitch = 0;
        this.doOnDeathOnce = true; //this is for unique characters, upon their death they trigger a flag letting the game know never to respawn them.

        //Artificial Intelligence
                //this creates a variable to easily access information about the main character.


            //this function determines the distance to the player [Distance To Player]
        this.DTP = function()
        {
            return Math.sqrt((X - this.X) * (X - this.X) + (Y - this.Y) * (Y - this.Y));
        };

        this.DTM = function()
        {
            return Math.sqrt((this.X - (X - mouseX + (1/2 * CCC.width)))*(this.X - (X - mouseX + (1/2 * CCC.width))) + (this.Y - (Y - mouseY + (1/2 * CCC.height)))*(this.Y - (Y - mouseY + (1/2 * CCC.height))));
        };

        this.interaction = function()
        {
            if (this.alive == true)
            {
                //Interaction with...
                var dtp = this.DTP();
                if (dtp < 200 )
                {
                    var dtm = this.DTM();
                    if (dtm < this.sizeRadius)
                    {
                        if (this.type == "Person" || this.type == "Soldier")
                        {
                            if (this.hostile == true)
                            {
                                XXX.fillStyle = "red";
                            }
                            else
                            {
                                XXX.fillStyle = "gold";
                            }
                            XXX.textAlign = "center";
                            XXX.font="bold 15px Book Antiqua";
                            XXX.fillText(this.ID, X - this.X + 1/2 * CCC.width, Y - this.Y - 16 + 1/2 * CCC.height);

                            //click-based interaction
                            if (this.ultra.faction != "outlander")
                            {
                                var parsedFactionRelation = eval("player." + this.ultra.faction + "Faction");
                            }
                            else
                            {
                                var parsedFactionRelation = 0;
                            }

                            if (dClick == true && this.ultra.merchant == true && dtp < 100 && this.disturbed == false && parsedFactionRelation >= -25)
                            {
                                shopInventory = this.ultra.merchandise;
                                shopID = this.ID;
                                lowBar = "shop";
                                gameState = "paused";
                            }
                            else if (dClick == true && this.ultra.banker == true && dtp < 100 && this.disturbed == false && parsedFactionRelation >= -49)
                            {
                                lowBar = "bank";
                                gameState = "paused";
                            }
                        }
                    }
                }
            }
        };
            //this points the unit toward the main character.
        this.pointTowardsPlayer = function()
        {
            var dtp = this.DTP();
            if (dtp < this.rangeOfSight) //if the player is close enough to the unit the unit will rotate toward him/her.
            {
                this.playerSeen = true;
                this.newRotation = Math.atan2(Y - this.Y, X - this.X) + Math.PI;
                //console.log(this.rotation + " | " + this.newRotation);
            }
            else
            {
                this.playerSeen = false;
            }
        };

        this.noticePlayer = function()
        {
            var dtp = this.DTP();
            if (dtp < this.rangeOfSight) //if the player is close enough to the unit the unit will rotate toward him/her.
            {
                this.playerSeen = true;
            }
            else
            {
                this.playerSeen = false;
            }
        };
            //this points away from the player.
        this.pointAwayFromPlayer = function()
        {
            var dtp = this.DTP();
            if (dtp < this.rangeOfSight) //if the player is close enough to the unit the unit will rotate toward him/her.
            {
                this.playerSeen = true;
                this.fleeing = true;
                this.newRotation = Math.atan2(Y - this.Y, X - this.X);
                //console.log(this.rotation + " | " + this.newRotation);
            }
            else
            {
                this.fleeing = false;
                this.playerSeen = false;
            }
        };

            //Patrol -- move between set locations on the map.
        this.patrolStart = true;

        this.patrolDTP = this.DTP();
        this.patrolDestinationX;
        this.patrolDestinationY;
        this.patrolDistance;
        this.patrolArrived = false;
        this.patrolProgress = 0;

        this.patrol = function(numberOfStops, loop) //number of places that the unit goes to; whether or not the unit will head back towards the first stop or retrace its steps;
        {

            this.dtd = function() // distance to destination
            {
                this.patrolDistance = Math.sqrt((this.patrolDestinationX - this.X)*(this.patrolDestinationX - this.X) + (this.patrolDestinationY - this.Y)*(this.patrolDestinationY - this.Y));
            };

            if (numberOfStops == 1)
            {
                this.patrolArrived = false;
                this.patrolDestinationX = this.ultra.route[0][0];
                this.patrolDestinationY = this.ultra.route[0][1];
                if (this.patrolArrived == false)
                {
                    this.dtd();
                }
            }
            else if (numberOfStops == 2)
            {
                if (this.patrolProgress == 0)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 1 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[1][0];
                    this.patrolDestinationY = this.ultra.route[1][1];
                    this.patrolArrived = false;
                }

                if (this.patrolProgress == 2 && this.patrolArrived == true && loop == true)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolProgress = 0;
                    this.patrolArrived = false;
                }

                if (this.patrolArrived == false)
                {
                    this.dtd();
                }
            }
            else if (numberOfStops == 3)
            {
                if (this.patrolProgress == 0)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 1 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[1][0];
                    this.patrolDestinationY = this.ultra.route[1][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 2 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[2][0];
                    this.patrolDestinationY = this.ultra.route[2][1];
                    this.patrolArrived = false;
                }

                if (this.patrolProgress == 3 && this.patrolArrived == true && loop == true)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolProgress = 0;
                    this.patrolArrived = false;
                }

                if (this.patrolArrived == false)
                {
                    this.dtd();
                }
            }
            else if (numberOfStops == 4)
            {
                if (this.patrolProgress == 0)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 1 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[1][0];
                    this.patrolDestinationY = this.ultra.route[1][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 2 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[2][0];
                    this.patrolDestinationY = this.ultra.route[2][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 3 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[3][0];
                    this.patrolDestinationY = this.ultra.route[3][1];
                    this.patrolArrived = false;
                }

                if (this.patrolProgress == 4 && this.patrolArrived == true && loop == true)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolProgress = 0;
                    this.patrolArrived = false;
                }

                if (this.patrolArrived == false)
                {
                    this.dtd();
                }
            }
            else if (numberOfStops == 5)
            {
                if (this.patrolProgress == 0)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 1 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[1][0];
                    this.patrolDestinationY = this.ultra.route[1][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 2 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[2][0];
                    this.patrolDestinationY = this.ultra.route[2][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 3 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[3][0];
                    this.patrolDestinationY = this.ultra.route[3][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 4 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[4][0];
                    this.patrolDestinationY = this.ultra.route[4][1];
                    this.patrolArrived = false;
                }

                if (this.patrolProgress == 5 && this.patrolArrived == true && loop == true)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolProgress = 0;
                    this.patrolArrived = false;
                }

                if (this.patrolArrived == false)
                {
                    this.dtd();
                }
            }
            else if (numberOfStops == 6)
            {
                if (this.patrolProgress == 0)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 1 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[1][0];
                    this.patrolDestinationY = this.ultra.route[1][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 2 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[2][0];
                    this.patrolDestinationY = this.ultra.route[2][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 3 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[3][0];
                    this.patrolDestinationY = this.ultra.route[3][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 4 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[4][0];
                    this.patrolDestinationY = this.ultra.route[4][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 5 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[5][0];
                    this.patrolDestinationY = this.ultra.route[5][1];
                    this.patrolArrived = false;
                }

                if (this.patrolProgress == 6 && this.patrolArrived == true && loop == true)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolProgress = 0;
                    this.patrolArrived = false;
                }

                if (this.patrolArrived == false)
                {
                    this.dtd();
                }
            }
            else if (numberOfStops == 7)
            {
                if (this.patrolProgress == 0)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 1 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[1][0];
                    this.patrolDestinationY = this.ultra.route[1][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 2 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[2][0];
                    this.patrolDestinationY = this.ultra.route[2][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 3 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[3][0];
                    this.patrolDestinationY = this.ultra.route[3][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 4 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[4][0];
                    this.patrolDestinationY = this.ultra.route[4][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 5 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[5][0];
                    this.patrolDestinationY = this.ultra.route[5][1];
                    this.patrolArrived = false;
                }
                else if (this.patrolProgress == 6 && this.patrolArrived == true)
                {
                    this.patrolDestinationX = this.ultra.route[6][0];
                    this.patrolDestinationY = this.ultra.route[6][1];
                    this.patrolArrived = false;
                }

                if (this.patrolProgress == 7 && this.patrolArrived == true && loop == true)
                {
                    this.patrolDestinationX = this.ultra.route[0][0];
                    this.patrolDestinationY = this.ultra.route[0][1];
                    this.patrolProgress = 0;
                    this.patrolArrived = false;
                }


                if (this.patrolArrived == false)
                {
                    this.dtd();
                }
            }

            this.patrolDTP = this.DTP();
            if (this.patrolDTP < this.rangeOfSight) //if the player is close enough to the unit the unit will rotate toward him/her.
            {
                this.playerSeen = true;
            }
            else
            {
                this.playerSeen = false;
            }

            if (numberOfStops != 0)
            {
                this.newRotation = Math.atan2(this.patrolDestinationY - this.Y, this.patrolDestinationX - this.X) + Math.PI; //Point toward the destination.

                if (this.patrolDistance > ((TTD / 16.75) * this.speed + 1)) //If the buffer between the target and this unit is not reached yet, and this has not been obstructed by anything, and the target is within sight then move a little bit in the direction of that target.
                {
                    var nextX = this.X - Math.cos(this.rotation) * ((TTD / 16.75) * this.speed);
                    var nextY = this.Y - Math.sin(this.rotation) * ((TTD / 16.75) * this.speed);

                    if (!this.isObstructed(nextX, nextY))
                    {
                        this.X = nextX;
                        this.Y = nextY;
                        this.moving = true;
                    }
                }
                else
                {
                    this.patrolArrived = true;
                    this.moving = false;
                    if (this.patrolProgress == 0)
                    {
                        this.patrolProgress = 1;
                    }
                    else if (this.patrolProgress == 1)
                    {
                        this.patrolProgress = 2;
                    }
                    else if (this.patrolProgress == 2)
                    {
                        this.patrolProgress = 3;
                    }
                    else if (this.patrolProgress == 3)
                    {
                        this.patrolProgress = 4;
                    }
                    else if (this.patrolProgress == 4)
                    {
                        this.patrolProgress = 5;
                    }
                    else if (this.patrolProgress == 5)
                    {
                        this.patrolProgress = 6;
                    }
                    else if (this.patrolProgress == 6)
                    {
                        this.patrolProgress = 7;
                    }
                }
            }

        };

            //this determines a unit's range of sight in a number of different situations.
        this.rangeOfSightCalculator = function(baseSight, hostile) //base sight is the base amount of rangeOfSight that the unit has, hostile implys that this particular type of unit will persue its prey for much longer than others would.
        {
            // if the extra range is expired then set it to 0.
            if (new Date().getTime() - this.extraRangeTime > 4000)
            {
                this.extraRange = 0;
            }
            //rangeOfSight When player is sneaking.
            if (this.disturbed == true)
            {
                this.rangeOfSight = baseSight * 4 + this.extraRange;
            }
            else if (wKey == true && shiftKey == true && this.playerSeen == false)
            {
                if (hostile == false)
                {
                    this.rangeOfSight = baseSight * 1.1 + this.extraRange;
                }
                else
                {
                    this.rangeOfSight = baseSight * 1.35 + this.extraRange;
                }
            }
            else if (altKey == true && wKey == false && this.playerSeen == false && this.disturbed == false) // If sneaking and the player has not yet been noticed by the enemy...
            {
                this.rangeOfSight = baseSight * (13 / (14 + (player.getStealth() * 2))) + this.extraRange; // the enemy's sight is severely lowered.
            }
            else if (this.playerSeen == false) //otherwise if the enemy had already noticed the player...
            {
                this.rangeOfSight = baseSight + this.extraRange; //the enemy will retain its rangeOfSight.
            }
            else if (this.playerSeen == true && hostile == false || this.disturbed == true && hostile == false)
            {
                this.rangeOfSight = baseSight * 1.2 + this.extraRange;
            }
            else if (this.playerSeen == true && hostile == "mildly" || this.disturbed == true && hostile == "mildly")
            {
                this.rangeOfSight = baseSight * 1.45 + this.extraRange;
            }
            else if (this.playerSeen == true && hostile == true || this.disturbed == true && hostile == true)
            {
                this.rangeOfSight = baseSight * 1.7 + this.extraRange;
            }
            else if (this.playerSeen == true && hostile == "very" || this.disturbed == true && hostile == "very")
            {
                this.rangeOfSight = baseSight * 2 + this.extraRange;
            }
            else if (this.playerSeen == true && hostile == "extremely" || this.disturbed == true && hostile == "extremely")
            {
                this.rangeOfSight = baseSight * 2.5 + this.extraRange;
            }
            else if (this.playerSeen == true && hostile == "unrelenting" || this.disturbed == true && hostile == "unrelenting")
            {
                this.rangeOfSight = baseSight * 3 + this.extraRange;
            }
        };

            //This moves the unit forwards either away from or toward the player.
        this.moveInRelationToPlayer = function() //the fraction of PI is the amount of angle-adjustment for the specific type of unit.
        {
            var dtp = this.DTP();
            if (dtp > this.engagementRadius && dtp < this.rangeOfSight || this.fleeing == true && dtp < this.rangeOfSight) //If the buffer between the target and this unit is not reached yet, and this has not been obstructed by anything, and the target is within sight then move a little bit in the direction of that target.
            {

                var nextX = this.X - Math.cos(this.rotation) * ((TTD / 16.75) * this.speed);
                var nextY = this.Y - Math.sin(this.rotation) * ((TTD / 16.75) * this.speed);

                if (! this.isObstructed( nextX, nextY ))
                {
                    this.X = nextX;
                    this.Y = nextY;
                    this.moving = true;
                }
                else
                {
                    if (this.moving && this.attacking == false)
                    {
                        this.timeStoppedMoving = new Date().getTime();
                    }
                    this.moving = false;

                    if (new Date().getTime() - this.timeStoppedMoving > 500 && this.attacking == false)
                    {
                        this.costume = 0;
                    }
                }
            }
            else
            {
                if (this.moving && this.attacking == false)
                {
                    this.timeStoppedMoving = new Date().getTime();
                }
                this.moving = false;

                if (new Date().getTime() - this.timeStoppedMoving > 500 && this.attacking == false)
                {
                    this.costume = 0;
                }
            }
        };

        this.Attack = function(randomDamage, setDamage)
        {
            //this method relies on the class variable being set: this.timeBetweenAttacks = new Date().getTime();
            var dtp = this.DTP();
            if (dtp <= this.engagementRadius && dtp <= this.rangeOfSight)
            {
                this.attacking = true;
            }
            else
            {
                this.attacking = false;
            }

            if (this.attacking == true)
            {
                player.inCombat = true;
                if (this.attackStyle == "rapid")
                {
                    if (this.damage > player.armourTotal)
                    {
                        this.damage = Math.floor(Math.random() * (randomDamage + 1)) + setDamage;
                        player.health -= Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) * (TTD / (16.75 + (100 * this.attackRate)));
                        player.decreaseInHealth += Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) * (TTD / (16.75 + (100 * this.attackRate))); // this is how much health is displayed as blood red for the player;
                    }
                }
                if (this.attackStyle == "chunked")
                {
                        if (this.justAttacked == true)
                        {
                            this.finalAttackCostume = false;
                            this.justAttacked = false;
                            this.damage = Math.floor(Math.random() * (randomDamage + 1)) + setDamage;
                        }

                        if (this.finalAttackCostume)
                        {
                            //console.log(this.damage + " is the damage done by " + this.ID + " through an armour total of " + player.armourTotal + ". The resulting damage was " + Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) * (TTD / 16.75) + ".");
                            player.health -= Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour));
                            player.decreaseInHealth += Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour));
                            this.justAttacked = true;

                            //Special Attacking Effects
                            if (this.effect == "poisonIII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.poisonIII = true;
                            }
                        }
                }
                if (this.attackStyle == "magical")
                {

                }
            }

        };

            //This function increases the rangeOfSight of all of the surrounding nearby units.
        this.callForNearbyHelpFromType = function(range, type)
        {
            var nearbyUnitsList = [];
            this.findNearbyUnitTypeGroup(range, type, nearbyUnitsList);

            if (this.playerSeen == true) // If this unit sees the player call friends over to help in the attack.
            {
                for (var i = 0; i < nearbyUnitsList.length; i++)
                {
                    //distanceFromOtherToPlayer
                    var dfotp = Math.sqrt((X-nearbyUnitsList[i].X)*(X-nearbyUnitsList[i].X) + (Y-nearbyUnitsList[i].Y)*(Y-nearbyUnitsList[i].Y));

                    if (nearbyUnitsList[i].rangeOfSight < dfotp) //If other units range is less than their distance from the player...
                    {
                        var rangeNeeded = Math.max(0, dfotp - nearbyUnitsList[i].rangeOfSight);
                        nearbyUnitsList[i].extraRange = rangeNeeded + 20; // the extra range they will need to spy the player will be added.
                        nearbyUnitsList[i].extraRangeTime = new Date().getTime();
                    }
                    else
                    {
                        if (type == "Soldier")
                        {
                            nearbyUnitsList[i].disturbed = true;
                        }
                    }
                }
            }
        };

            //this unit's rangeOfSight is shown as a transparent red bubble.
        this.visibleSight = function()
        {
            if (showSight == true)
            {
                XXX.beginPath();
                XXX.fillStyle = "rgba( 255, 0, 0, 0.075)";
                XXX.arc(X - this.X + CCC.width / 2, Y - this.Y + CCC.height / 2, this.rangeOfSight, 0, 2 * Math.PI);
                XXX.fill();
            }
        };

        this.isObstructed = function(x, y)
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i] !== this)
                {
                    var focusUnit = ArtificialIntelligenceAccess[i]; //This is the current unit focused on other than this unit.
                    var x1 = focusUnit.X; //the focus unit's X position.
                    var y1 = focusUnit.Y; //the focus unit's Y position.
                    var d = Math.sqrt( (x-x1)*(x-x1) + (y-y1)*(y-y1) ); //This is the distance between this unit and the focus unit.
                    if (d < this.sizeRadius + focusUnit.sizeRadius && focusUnit.alive == true) // if the total distance between this unit and the focus unit is less than the size of the two radiuses then it returns true to the movement function which calls it.
                    {
                        return true; //d == this.sizeRadius + focusUnit.sizeRadius :: this is the point at which the two units would be exactly touching eachother with no overlap.
                    }
                }
            }
        };

        this.drawHumanArms = function()
        {
            if (this.ranged == true)
            {
                var dtp = this.DTP();
                if (this.disturbed == true && dtp <= this.rangeOfSight && this.playerSeen == true) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    this.attacking = true;
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.ultra.ranged[8] * 1000))
                    {
                        if (this.weapon == "longbow")
                        {
                            this.costumeEngine(8, 0.2, false);
                        }
                    }
                    //this is the actual launch
                    if (this.finalAttackCostume == true)
                    {
                        this.finalAttackCostume = false;
                        this.timeBetweenAttacks = new Date().getTime();
                        unitProjectiles.push(new Projectile(this.ultra.ranged[1], this.X, this.Y, this.rotation -  1 / 2 * Math.PI, this.ultra.ranged[2], this.ultra.ranged[3], this.ultra.ranged[4], unitProjectiles, this.ultra.ranged[5], this.ultra.ranged[6], this.ultra.ranged[7]));
                    }
                }
            }

            var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.
            //manual damaging
            if (this.weapon == "none")
            {
                if (theCostume <= 0)
                {
                    this.drawUnit(polyPNG, 631, 55, 92, 30, -22, -17, 46, 22, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 1)
                {
                    this.drawUnit(polyPNG, 638, 118, 80, 37, -24, -17, 46, 22, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 2)
                {
                    this.drawUnit(polyPNG, 639, 195, 80, 37, -26, -20, 46, 22, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 3)
                {
                    this.drawUnit(polyPNG, 643, 276, 80, 37, -28.5, -20, 48, 23, 1 / 2 * Math.PI);
                }
                else if (theCostume >= 4)
                {
                    this.drawUnit(polyPNG, 653, 352, 80, 37, -26.5, -21, 48, 23, 1 / 2 * Math.PI);
                }
            }
            else if (this.weapon == "longbow")
            {
                if (theCostume <= 0)
                {
                    this.drawUnit(polyPNG, 421, 589, 40, 43, -17, -41, 50, 53.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 1)
                {
                    this.drawUnit(polyPNG, 487, 589, 40, 43, -11, -42, 50, 53.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 2)
                {
                    this.drawUnit(polyPNG, 536, 589, 40, 43, -16, -39, 50, 53.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 3)
                {
                    this.drawUnit(polyPNG, 576, 588, 40, 43, -19, -41, 50, 53.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 4)
                {
                    this.drawUnit(polyPNG, 608, 588, 40, 43, -21, -41, 50, 53.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 5)
                {
                    this.drawUnit(polyPNG, 645, 589, 40, 43, -16, -40, 50, 53.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 6)
                {
                    this.drawUnit(polyPNG, 681, 582, 40, 43, -22, -38.5, 50, 53.75, 1 / 2 * Math.PI);
                }
                else if (theCostume >= 7)
                {
                    this.drawUnit(polyPNG, 717, 583, 40, 43, -17, -38.5, 50, 53.75, 1 / 2 * Math.PI);
                }
            }
            else if (this.weapon == "freydicSword")
            {
                if (theCostume <= 0)
                {
                    this.drawUnit(verse, 2210, 1, 73, 63, -13, -60, 91.875, 78.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 1)
                {
                    this.drawUnit(verse, 2290, 1, 73, 63, -17.5, -60, 91.875, 78.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 2)
                {
                    this.drawUnit(verse, 2367, 1, 73, 63, -25, -61, 91.875, 78.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 3)
                {
                    this.drawUnit(verse, 2438, 1, 73, 63, -31, -61.5, 91.875, 78.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 4)
                {
                    this.drawUnit(verse, 2513, 1, 73, 63, -36, -64, 91.875, 78.75, 1 / 2 * Math.PI);
                }
                else if (theCostume <= 5)
                {
                    this.drawUnit(verse, 2577, 1, 73, 63, -44, -69, 91.875, 78.75, 1 / 2 * Math.PI);
                }
                else if (theCostume >= 6)
                {
                    this.drawUnit(verse, 2635, 1, 73, 63, -49.25, -69, 91.875, 78.75, 1 / 2 * Math.PI);
                }
            }
        };

        this.switchToRanged = function(weapon)
        {
            if (this.disturbed == true)
            {
                var dtp = this.DTP();
                if (this.engagementRadius < dtp)
                {
                    this.weapon = weapon;
                    this.ranged = true;
                    this.attacking = true;
                }
                else
                {
                    this.weapon = this.ultra.weapon[0];
                    this.ranged = false;
                }
            }
            else
            {
                this.attacking = false;
            }
        };

        //Basic Functionality

        this.disturbedTimer = function()
        {
            if (new Date().getTime() - this.disturbedTime < 20000 + (this.grudge * 1000))
            {
                this.disturbed = true;
            }
            else
            {
                if (this.type != "Soldier")
                {
                    this.disturbed = false;
                }
            }
        };
        //death checker -- checks to see if they should be dead.
        this.deathChecker = function()
        {
            if (this.health <= 0)
            {
                this.alive = false;

                this.attacking = false;
                this.moving = false;
                this.playerSeen = false;
                this.disturbedTime = 0;
                this.disturbed = false;
                this.extraRangeTime = 0;
                this.extraRange = 0;

                if (this.wasAlive == true)
                {
                    this.wasAlive = false;
                    this.timeSinceDead = new Date().getTime();

                    //loot and experience
                    player.experience += this.experience;
                    for (var i = 0; i < this.drops.length; i++)
                    {
                        worldItems.push([this.drops[i], 1]);
                    }

                    //transference into the list of the dead...
                    var me = ArtificialIntelligenceAccess.indexOf(this);
                    deadAIList.push(this);
                    ArtificialIntelligenceAccess.splice(me, 1);
                }
            }
        };

        //draw X and Y point.
        this.testForCenter = function()
        {
            XXX.beginPath();
            XXX.fillStyle="gold";
            XXX.arc(X - this.X + (CCC.width / 2) , Y - this.Y + (CCC.height / 2), 4, 0, 2 * Math.PI);
            XXX.fill();
        };
        //this draws a circle that represents the size of the AI Unit
        this.testForSize = function()
        {
            XXX.beginPath();
            XXX.strokeStyle ="rgba(255, 255, 255, 0)";
            XXX.fillStyle="rgba(255, 255, 255, 0.4)";
            XXX.arc(X - this.X + (CCC.width / 2) , Y - this.Y + (CCC.height / 2), this.sizeRadius, 0, 2 * Math.PI);
            XXX.fill();
        };

        //if damaged a mini health bar will be displayed.
        this.showHealthWhenHurt = function()
        {
            if (this.health < this.healthMAX && (new Date().getTime() - this.healthShownTime) < 5000)
            {
                XXX.beginPath();
                XXX.fillStyle ="red";
                XXX.fillRect(X - this.X + (CCC.width / 2), Y - this.Y + (CCC.height / 2), 12, 3);
                if (this.health >= 0)
                {
                    XXX.beginPath();
                    XXX.fillStyle ="lightGreen";
                    XXX.fillRect(X - this.X + (CCC.width / 2), Y - this.Y + (CCC.height / 2), (12 * this.health / this.healthMAX), 3);
                }
            }
        };

        // Are any units currently attacking? If not then set the players inCombat status to false.
        this.AreAnyUnitsAttacking = function()
        {
            var hits = 0;
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].attacking == true)
                {
                    hits += 1;
                }
            }
            if (hits == 0)
            {
                player.inCombat = false;
                player.decreaseInHealth = 0; // this is how much health is displayed as blood red for the player;
            }
            //console.log(player.inCombat + " is player.inCombat");
        };

        //finds the unit nearest this unit and its distance and sets them to class accessible variables.
        this.findNearestUnit = function()
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                var distanceToOther = Math.sqrt((ArtificialIntelligenceAccess[i].X - this.X) * (ArtificialIntelligenceAccess[i].X - this.X) + (ArtificialIntelligenceAccess[i].Y - this.Y) * (ArtificialIntelligenceAccess[i].Y - this.Y)); // this is the distance formula and in this line it is being used to find the distance each Unit is away from this one...
                if (this.closestDistance == null && ArtificialIntelligenceAccess[i] != this) // if the process is just starting there will not have been a closest yet to compare with so it is set to the first unit in the list.
                {
                    this.closestDistance = distanceToOther;
                    this.closestUnit = ArtificialIntelligenceAccess[i];
                }
                else if (distanceToOther < this.closestDistance && ArtificialIntelligenceAccess[i] != this) //this compares the distance of the unit that is being focused on with that of the one stored in the variable closest. Only the one with the least distance from this Unit can hold the title closest.
                {
                    this.closestDistance = distanceToOther;
                    this.closestUnit = ArtificialIntelligenceAccess[i];
                }
            }
        };

        //This function finds all nearby units within a certain range and puts them in a given list. This is a function called by other functions.
        this.findNearbyUnitTypeGroup = function(range, type, list)
        {

            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                var distanceToOther = Math.sqrt((ArtificialIntelligenceAccess[i].X - this.X) * (ArtificialIntelligenceAccess[i].X - this.X) + (ArtificialIntelligenceAccess[i].Y - this.Y) * (ArtificialIntelligenceAccess[i].Y - this.Y)); // this is the distance formula and in this line it is being used to find the distance each Unit is away from this one...

                if (ArtificialIntelligenceAccess[i] !== this && ArtificialIntelligenceAccess[i].type == type && distanceToOther <= range)
                {
                    list.push(ArtificialIntelligenceAccess[i]);
                }
            }
        };

        // find the difference between two angles, and the sign of the difference
        this.angleDelta = function(start, end)
        {
            var delta = end - start;

            if (delta > Math.PI)
            {
                delta = delta - (Math.PI * 2)
            }
            else if (delta < - Math.PI)
            {
                delta = delta + (Math.PI * 2)
            }

            return delta;
        };

            // turns to the rotation that the unit would like to be at.
        this.turnToDestination = function()
        {
            var quickestRotation = this.angleDelta(this.rotation, this.newRotation); //This is a number that represents the quickest rotation possible.
            if (Math.abs(quickestRotation) > this.rotationSpeed)
            {
                if (quickestRotation < 0 - this.rotationSpeed) // if the rotation would bring the unit to a rotation that is less than zero then
                {
                    this.rotation -= this.rotationSpeed;
                }
                else if (quickestRotation >= 0 + this.rotationSpeed)
                {
                    this.rotation += this.rotationSpeed;
                }
            }
        };

        //BUILD-LAB [this section is where the individualized ai unit skeletons will start to form up a bit.
            //this is a quick draw self function to make things a lot easier...
        this.drawUnit = function(img, cutX, cutY, width, length, positionX, positionY, skewW, skewL, extraRotation)
        {
            //DRAW SELF
            XXX.save();
            // translate to...
            //  X - this.X   >>>  gives you screen coordinates with (0,0) at center of canvas
            //    + canvasWidth/2  >>> gives you screen coordinates relative to top left of canvas
            // ... but ...  that is a point, and you want to center your images, so ...
            //    you will want to subtract half the image's width // I do this externally through positionX and PositionY
            //
            // and do the same thing for Y of course
            var extraRot;
            if (extraRotation != undefined)
            {
                extraRot = extraRotation;
            }
            else
            {
                extraRot = 0;
            }

            XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
            XXX.rotate(this.rotation + extraRot);
            XXX.beginPath();
            XXX.drawImage(img, cutX, cutY, width, length, positionX, positionY , skewW, skewL);
            XXX.restore();
        };

        this.drawHuman = function(outfit, dead)
        {
            XXX.save();
            XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
            XXX.rotate(this.rotation);
            XXX.beginPath();
            if (this.ultra.faction == "freynor")
            {
                XXX.fillStyle = "navy";
            }
            else if (this.ultra.faction == "orgell")
            {
                XXX.fillStyle = "gold";
            }
            else
            {
                //Faelan fairy Princess is the default.
                XXX.fillStyle = "pink";
            }
            XXX.arc(0, 0, 10, 0, 2 * Math.PI);
            XXX.fill();
            XXX.lineWidth = 0.5;
            XXX.strokeStyle = "black";
            XXX.stroke();

            //Unit Worn Outfits
            if (dead != true)
            {
                if (outfit == "chainArmour")
                {
                    XXX.restore();
                    XXX.save();
                    XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                    XXX.rotate(this.rotation + 1/2 * Math.PI);
                    XXX.drawImage(verse, 1915, 1, 31, 27, -(1 / 2 * 26) - 1.3, -(1 / 2 * 27) + 1.5, 27, 27);
                }
                else if (outfit == "walrusLeatherArmour")
                {
                    XXX.drawImage(polyPNG, 804, 262, 35, 24, -(1 / 2 * 45.5) + 8, -(1 / 2 * 31.2) + 1.25, 42, 28.8);
                }
            }

            XXX.restore();
        };

            //This sets each unique unit's skills based on their type, for both normal and alpha, also it is where positioning for alphas or units who differ from the normal size will be.
        this.designUnits = function() //this includes all of the non-variable unit design as well as drops.
        {
            if (this.type == "Etyr")
            {
                this.damageFrame = "automatic";

                if (this.alpha == true)
                {
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0; //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 6) + 6;
                    this.health = this.healthMAX;
                    this.armour = 3;
                    this.speed = 2.75;
                    this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.025; // 0.01 is a standard turn speed.
                    this.engagementRadius = 39;
                    this.sizeRadius = 30;
                    this.negateArmour = 5;
                    this.attackWait = 0.55;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 1.5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 10;
                    this.xAdjustment = 13; // was 0
                }
                else
                {
                    //STATS (non-variable)
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 3) + 2;
                    this.health = this.healthMAX;
                    this.armour = 1;
                    this.speed = 2;
                    this.rangeOfSight = 450; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.025; // 0.01 is a standard turn speed.
                    this.engagementRadius = 29;
                    this.sizeRadius = 20;
                    this.negateArmour = 3;
                    this.attackWait = 0.57;

                    //this multiplies the draw image skew numbers by 1 so that it stays the same
                    this.alphaSize = 1;
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 0;
                    this.xAdjustment = 0;

                }
            }
            else if (this.type == "Walrus")
            {
                this.damageFrame = "automatic";

                if (this.alpha == true)
                {
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 40) + 55;
                    this.health = this.healthMAX;
                    this.armour = 2;
                    this.speed = 1.1;
                    this.rangeOfSight = 330; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.01; // 0.01 is a standard turn speed.
                    this.engagementRadius = 65; //was 55
                    this.sizeRadius = 45;
                    this.negateArmour = 7;
                    this.attackWait = 1.75;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 1.35; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 21;
                    this.xAdjustment = 39; // was 0
                }
                else
                {
                    //STATS (non-variable)
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 10) + 18;
                    this.health = this.healthMAX;
                    this.armour = 0.5;
                    this.speed = 0.65;
                    this.rangeOfSight = 250; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.01; // 0.01 is a standard turn speed.
                    this.engagementRadius = 59; //was 49
                    this.sizeRadius = 40;
                    this.negateArmour = 2;
                    this.attackWait = 2;

                    //this multiplies the draw image skew numbers by 1 so that it stays the same
                    this.alphaSize = 1;
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 0;
                    this.xAdjustment = 0;

                }
            }
            else if (this.type == "Beruln")
            {
                this.damageFrame = "manual";

                if (this.alpha == true)
                {
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 26) + 36;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 6.1 + (Math.floor(Math.random() * 5) / 10);
                    this.rangeOfSight = 900; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.075; // was 0.05
                    this.engagementRadius = 69;
                    this.sizeRadius = 50;
                    this.negateArmour = 8;
                    this.attackWait = 0.75;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 1.1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 5;
                    this.xAdjustment = 4;
                }
                else
                {
                    //STATS (non-variable)
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 14) + 32;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 5.8 + (Math.floor(Math.random() * 3) / 10);
                    this.rangeOfSight = 750; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.075; // was 0.05
                    this.engagementRadius = 61;
                    this.sizeRadius = 42;
                    this.negateArmour = 6;
                    this.attackWait = 0.85;

                    //this multiplies the draw image skew numbers by 1 so that it stays the same
                    this.alphaSize = 1;
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 0;
                    this.xAdjustment = 0;

                }
            }
            else if (this.type == "BogTroll")
            {
                this.justAttacked = true;

                if (this.alpha == true)
                {
                    this.magicalResistance = 5;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 31) + 100;
                    this.health = this.healthMAX;
                    this.armour = 1;
                    this.speed = 5.2 + (Math.floor(Math.random() * 6) / 10);
                    this.keepSpeed = this.speed;
                    this.rangeOfSight = 1000; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.035; // was 0.05
                    this.engagementRadius = 91;
                    this.sizeRadius = 80;
                    this.negateArmour = 16;
                    this.attackWait = 4.2;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 52;
                    this.xAdjustment = 53;
                }
                else if (this.alpha == "baby")
                {
                    //STATS (non-variable)
                    this.magicalResistance = 1.5;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 9) + 17;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 3.1 + (Math.floor(Math.random() * 7) / 10);
                    this.keepSpeed = this.speed;
                    this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.035; // was 0.05
                    this.engagementRadius = 61;
                    this.sizeRadius = 42;
                    this.negateArmour = 3;
                    this.attackWait = 3.2;

                    //this multiplies the draw image skew numbers by 1 so that it stays the same
                    this.alphaSize = 0.65;
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = -19;
                    this.xAdjustment = -32;
                }
                else
                {
                    //STATS (non-variable)
                    this.magicalResistance = 3;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 36) + 65;
                    this.health = this.healthMAX;
                    this.armour = 1;
                    this.speed = 4.4 + (Math.floor(Math.random() * 7) / 10);
                    this.keepSpeed = this.speed;
                    this.rangeOfSight = 850; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.035; // was 0.05
                    this.engagementRadius = 61;
                    this.sizeRadius = 42;
                    this.negateArmour = 10;
                    this.attackWait = 3.2;

                    //this multiplies the draw image skew numbers by 1 so that it stays the same
                    this.alphaSize = 1.4;
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 20;
                    this.xAdjustment = 17;
                }
            }
            else if (this.type == "WinterWolf")
            {
                this.damageFrame = "manual";

                if (this.alpha == true)
                {
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 26) + 30;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 5 + (Math.floor(Math.random() * 5) / 10);
                    this.rangeOfSight = 665; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.085; // was 0.05
                    this.engagementRadius = 59;
                    this.sizeRadius = 35;
                    this.negateArmour = 3;
                    this.attackWait = 1.5;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 3.2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = -2;
                    this.xAdjustment = 4;
                }
                else
                {
                    //STATS (non-variable)
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 9) + 9;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 4.7 + (Math.floor(Math.random() * 3) / 10);
                    this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.085; // was 0.05
                    this.engagementRadius = 35;
                    this.sizeRadius = 24;
                    this.negateArmour = 1;
                    this.attackWait = 1.5;

                    //this multiplies the draw image skew numbers by 1 so that it stays the same
                    this.alphaSize = 1.8;
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = -24;
                    this.xAdjustment = -33;

                }
            }
            else if (this.type == "Gulfrey")
            {
                this.damageFrame = "automatic";

                if (this.alpha == true)
                {
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 19) + 13;
                    this.health = this.healthMAX;
                    this.armour = 8;
                    this.speed = 3 + (Math.floor(Math.random() * 3) / 10);
                    this.rangeOfSight = 490; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                    this.engagementRadius = 42;
                    this.sizeRadius = 33;
                    this.negateArmour = 7;
                    this.attackWait = 0.5;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 1.5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = -15; //was - 10
                    this.xAdjustment = 26; //was 30
                }
                else
                {
                    //STATS (non-variable)
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 5) + 4;
                    this.health = this.healthMAX;
                    this.armour = 4;
                    this.speed = 2.8 + (Math.floor(Math.random() * 4) / 10);
                    this.rangeOfSight = 440; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                    this.engagementRadius = 22;
                    this.sizeRadius = 13;
                    this.negateArmour = 4;
                    this.attackWait = 0.5;

                    //this multiplies the draw image skew numbers by 1 so that it stays the same
                    this.alphaSize = 0.65;
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = -37; //was -34
                    this.xAdjustment = -26; //was - 26

                }
            }
            else if (this.type == "Frich")
            {
                this.damageFrame = "automatic";

                if (this.alpha == true)
                {
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 4) + 3;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 2.8 + (Math.floor(Math.random() * 4) / 10);
                    this.rangeOfSight = 400; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                    this.engagementRadius = 42;
                    this.sizeRadius = 17;
                    this.negateArmour = 0;
                    this.attackWait = 0.55;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 1.2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 3.5; //was - 10
                    this.xAdjustment = 6; //was 30
                }
                else
                {
                    //STATS (non-variable)
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 3) + 2;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 2.6 + (Math.floor(Math.random() * 5) / 10);
                    this.rangeOfSight = 385; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                    this.engagementRadius = 40;
                    this.sizeRadius = 15;
                    this.negateArmour = 0;
                    this.attackWait = 0.55;

                    //this multiplies the draw image skew numbers by 1 so that it stays the same
                    this.alphaSize = 1;
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 0; //was -34
                    this.xAdjustment = 0; //was - 26

                }
            }
            else if (this.type == "Torper")
            {
                this.damageFrame = "automatic";
                this.effect = "poisonIII";

                if (this.alpha == true)
                {
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 10) + 9;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 5.5 + (Math.floor(Math.random() * 8) / 10);
                    this.rangeOfSight = 675; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = Math.PI / 10; // 0.01 is a standard turn speed.
                    this.engagementRadius = 36;
                    this.sizeRadius = 16;
                    this.negateArmour = 7;
                    this.attackWait = 0.7 + (Math.floor(Math.random() * 5) / 10);

                    //alpha has a larger size body and skills.
                    this.alphaSize = 1.5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 18; //was - 10
                    this.xAdjustment = 24; //was 30
                }
                else
                {
                    //STATS (non-variable)
                    this.magicalResistance = 0;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 7) + 7;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 5 + (Math.floor(Math.random() * 8) / 10);
                    this.rangeOfSight = 550; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = Math.PI / 10; // 0.01 is a standard turn speed.
                    this.engagementRadius = 30;
                    this.sizeRadius = 12;
                    this.negateArmour = 4;
                    this.attackWait = 0.7 + (Math.floor(Math.random() * 5) / 10);

                    //this multiplies the draw image skew numbers by 1 so that it stays the same
                    this.alphaSize = 1;
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 0;
                    this.xAdjustment = 0;

                }
            }
            else if (this.type == "Person")
            {
                this.damageFrame = "automatic";

                //Personality effected STATS
                if (this.ultra.personality == "scared")
                {
                    this.grudge = 40;
                }
                else if (this.ultra.personality == "violent")
                {
                    this.grudge = 20;
                }
                else if (this.ultra.personality == "calculated")
                {
                    this.grudge = 10;
                }

                //STATS (non-variable)
                this.ranged = this.ultra.ranged[0];
                this.outfit = this.ultra.outfit[0];
                this.weapon = this.ultra.weapon[0];
                this.magicalResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = (Math.floor(Math.random() * 4) * 4) + 0.1;
                this.health = this.healthMAX;
                this.armour = this.ultra.outfit[1];
                this.speed = 0.65 + (Math.floor(Math.random() * 12) / 10);
                this.rangeOfSight = 500; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = Math.PI / 10; // 0.01 is a standard turn speed.
                this.engagementRadius = 30 + this.ultra.weapon[3];
                this.sizeRadius = 10;
                this.negateArmour = this.ultra.weapon[2];
                this.attackWait = this.ultra.weapon[4];

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;

            }
            else if (this.type == "Soldier")
            {
                this.damageFrame = "automatic";

                //STATS (non-variable)
                this.ranged = this.ultra.ranged[0];
                this.con = this.ultra.con;
                this.outfit = this.ultra.outfit[0];
                this.weapon = this.ultra.weapon[0];
                this.magicalResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = this.con * 4 + 0.1;
                this.health = this.healthMAX;
                this.armour = this.ultra.outfit[1];
                this.speed = this.ultra.speed;
                this.rangeOfSight = 650; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = Math.PI / 10; // 0.01 is a standard turn speed.
                this.engagementRadius = 30 + this.ultra.weapon[3];
                this.sizeRadius = 10;
                this.negateArmour = this.ultra.weapon[2];
                this.attackWait = this.ultra.weapon[4];
            }
        };
        this.designUnits();

            //This makes the AI draw themselves to the world and alters the AI's variable STATS and also runs all of the AI functions.
        this.activateUnits = function()
        {
            var self = this;
            this.costumeEngine = function(maxcostume, framerate, bothwaysBool)
            {
                if (this.resetFrameOrder == true)
                {
                    this.frameOrder = "positive"; // this sets the animation frame cycling direction to positive when the attack is initialized.
                    this.resetFrameOrder = false; // this keeps the reset from messing up reverse swings that may come after the primary positive direction attack.
                }
                if (this.frameOrder == "positive")
                {
                    self.costume += framerate * TTD / (16.75 - 0.1 * self.speed); //This is the part that actually changes the frame in the positive direction.
                    if (self.costume >= maxcostume)
                    {
                        self.costume = maxcostume - 0.001;

                        if (this.attacking && this.damageFrame == "automatic")
                        {
                            this.finalAttackCostume = true;
                        }

                        if (bothwaysBool == false) // if the animation is one way it ends here...
                        {
                            self.costume = 0;
                            if (this.attacking)
                            {
                                this.timeBetweenAttacks = new Date().getTime();
                            }
                        }
                        else if (bothwaysBool == true) //but if it is two directional it swings back to frame zero.
                        {
                            this.frameOrder = "negative";
                        }
                    }
                }

                if (this.frameOrder == "negative") //This stuff is for the swing back.
                {
                    self.costume -= framerate * TTD / (16.75 - 0.1 * self.speed); //This is the part that actually changes the frame in the positive direction.
                    if (self.costume <= 0)
                    {
                        if (this.attacking)
                        {
                            this.timeBetweenAttacks = new Date().getTime();
                        }
                        self.costume = 0 + 0.001;
                        this.resetFrameOrder = true; //This variable resets the order of the frames so that it always starts cycling through the animations in the positive direction.
                    }
                }
            };

            //UNITS BY TYPE (this includes all of the variable unit design as well as animations and AI)
                //ETYR
            if (this.type == "Etyr")
            {
                //Set Drops and experience
                if (this.alpha == true)
                {
                    if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 40 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (40 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("etyrHide", this.X, this.Y), new Item("etyrHide", this.X, this.Y), new Item("rawEtyrFlesh", this.X, this.Y), new Item("rawEtyrFlesh", this.X, this.Y)];
                }
                else
                {
                    if (Math.max(0, 2 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 22 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (22 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("etyrHide", this.X, this.Y), new Item("rawEtyrFlesh", this.X, this.Y)];
                }

                //RANGE OF SIGHT (anything related to range of sight)
                if (this.alpha == true)
                {
                    this.rangeOfSightCalculator(600, "very");
                }
                else
                {
                    this.rangeOfSightCalculator(450, "very");
                }

                //AI
                if (this.alive == true)
                {
                    if (this.alpha == true)
                    {
                        this.Attack(6, 1);
                    }
                    else
                    {
                        this.Attack(3, 1);
                    }

                    this.deathChecker();
                    this.disturbedTimer();
                    this.callForNearbyHelpFromType(350, "Etyr");
                    this.visibleSight();
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }

                //ANIMATIONS

                if (this.alive == true)
                {
                    if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(2, 0.1, false);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(2, 0.07, false);
                        }
                    }

                    // the frames/stages/costumes of the animation.
                    var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                    if (theCostume <= 0)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(theCrack, 282, 18, 53, 41, -25 - this.xAdjustment, -19 - this.yAdjustment, 53 * this.alphaSize, 41 * this.alphaSize);
                            //this.drawUnit(theCrack, 131, 18, 53, 41, -26 - this.xAdjustment, -20 - this.yAdjustment, 53 * this.alphaSize, 41 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(theCrack, 56, 18, 53, 41, -26 - this.xAdjustment, -20 - this.yAdjustment, 53 * this.alphaSize, 41 * this.alphaSize);
                        }
                    }
                    else if (theCostume == 1)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(theCrack, 205, 18, 53, 41, -27 - this.xAdjustment, -19 - this.yAdjustment, 53 * this.alphaSize, 41 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(theCrack, 131, 18, 53, 41, -26 - this.xAdjustment, -19 - this.yAdjustment, 53 * this.alphaSize, 41 * this.alphaSize);
                        }
                    }
                }
                else
                {
                    this.drawUnit(theCrack, 360, 18, 53, 41, -25 - this.xAdjustment, -19 - this.yAdjustment, 53 * this.alphaSize, 41 * this.alphaSize);
                }

            }
            //WALRUS
            if (this.type == "Walrus")
            {
                //Set Drops and experience
                if (this.alpha == true)
                {
                    if (Math.max(0, 47 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 104 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        (this.experience = 104 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("elderWalrusHide", this.X, this.Y), new Item("rawWalrusFlesh", this.X, this.Y), new Item("rawWalrusFlesh", this.X, this.Y), new Item("rawWalrusFlesh", this.X, this.Y), new Item("rawWalrusFlesh", this.X, this.Y), new Item("blubber", this.X, this.Y), new Item("blubber", this.X, this.Y), new Item("elderWalrusTusks", this.X, this.Y)];
                }
                else
                {
                    if (Math.max(0, 14 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 28 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        (this.experience = 28 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("walrusHide", this.X, this.Y), new Item("rawWalrusFlesh", this.X, this.Y), new Item("rawWalrusFlesh", this.X, this.Y), new Item("blubber", this.X, this.Y), new Item("walrusTusks", this.X, this.Y)];
                }

                //RANGE OF SIGHT (anything related to range of sight)
                if (this.alpha == true)
                {
                    this.rangeOfSightCalculator(330, "very");
                }
                else
                {
                    this.rangeOfSightCalculator(250, "very");
                }

                //AI
                if (this.alive == true)
                {
                    if (this.alpha == true)
                    {
                        this.Attack(35, 12);
                        this.callForNearbyHelpFromType(160, "Walrus");
                    }
                    else
                    {
                        this.Attack(12, 2);
                        this.callForNearbyHelpFromType(100, "Walrus");
                    }

                    this.deathChecker();
                    this.disturbedTimer();
                    this.visibleSight();
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();

                }

                //ANIMATIONS

                if (this.alive == true)
                {
                    if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(2, 0.05, false);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(2, 0.03, false);
                        }
                    }

                    // the frames/stages/costumes of the animation.
                    var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                    if (theCostume <= 0)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(polyPNG, 871, 695, 77, 63, -91 - this.xAdjustment, -64 - this.yAdjustment, 146 * this.alphaSize, 126 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(polyPNG, 871, 695, 77, 63, -91 - this.xAdjustment, -64 - this.yAdjustment, 146 * this.alphaSize, 126 * this.alphaSize);
                        }
                    }
                    else if (theCostume >= 1)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(polyPNG, 798, 643, 77, 63, -91 - this.xAdjustment, -64 - this.yAdjustment, 146 * this.alphaSize, 126 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(polyPNG, 713, 687, 77, 63, -91 - this.xAdjustment, -64 - this.yAdjustment, 146 * this.alphaSize, 126 * this.alphaSize);
                        }
                    }
                }
                else
                {
                    this.drawUnit(polyPNG, 676, 624, 77, 63, -91 - this.xAdjustment, -64 - this.yAdjustment, 146 * this.alphaSize, 126 * this.alphaSize);
                }
            }
            //FRICH
            if (this.type == "Frich")
            {
                //Set Drops and experience
                if (this.alpha == true)
                {
                    if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 15 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (15 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("frichPelt", this.X, this.Y), new Item("rawFrichFlesh", this.X, this.Y)];
                }
                else
                {
                    if (Math.max(0, 2 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 11 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = 11 * ((player.getIntelligence() / 50) + 1) / 10;
                    }

                    this.drops = [new Item("frichPelt", this.X, this.Y), new Item("rawFrichFlesh", this.X, this.Y)];
                }

                //RANGE OF SIGHT (anything related to range of sight)
                if (this.alpha == true)
                {
                    this.rangeOfSightCalculator(431, "mildly");
                }
                else
                {
                    this.rangeOfSightCalculator(400, "mildy");
                }

                //AI
                if (this.alive == true)
                {
                    if (this.alpha == true)
                    {
                        this.Attack(3, 1);
                        this.callForNearbyHelpFromType(381, "Frich");
                    }
                    else
                    {
                        this.Attack(1, 1);
                        this.callForNearbyHelpFromType(350, "Frich");
                    }

                    this.deathChecker();
                    this.disturbedTimer();
                    this.visibleSight();
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();

                }

                //ANIMATIONS

                if (this.alive == true)
                {
                    if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(2, 0.075, false);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(2, 0.03, false);
                        }
                    }

                    // the frames/stages/costumes of the animation.
                    var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                    if (theCostume <= 0)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 1529, 3, 83, 33, -55 - this.xAdjustment, -16 - this.yAdjustment, 83 * this.alphaSize, 33 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 1290, 5, 83, 33, -55 - this.xAdjustment, -16 - this.yAdjustment, 83 * this.alphaSize, 33 * this.alphaSize);
                        }
                    }
                    else if (theCostume >= 1)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 1641, 3, 83, 33, -55 - this.xAdjustment, -18 - this.yAdjustment, 83 * this.alphaSize, 33 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 1402, 5, 83, 33, -55 - this.xAdjustment, -16 - this.yAdjustment, 83 * this.alphaSize, 33 * this.alphaSize);
                        }
                    }
                }
                else
                {
                    this.drawUnit(verse, 1742, 5, 83, 33, -55 - this.xAdjustment, -16 - this.yAdjustment, 83 * this.alphaSize, 33 * this.alphaSize);
                }

            }
            //BERULN
            if (this.type == "Beruln")
            {
                //Set Drops and experience
                if (this.alpha == true)
                {
                    if (Math.max(0, 22 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 93 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (93 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("bigBerulnPelt", this.X, this.Y), new Item("berulnSkull", this.X, this.Y), new Item("rawBerulnFlesh", this.X, this.Y), new Item("rawBerulnFlesh", this.X, this.Y), new Item("rawBerulnFlesh", this.X, this.Y), new Item("rawBerulnFlesh", this.X, this.Y)];
                }
                else
                {
                    if (Math.max(0, 22 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 81 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (81 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("berulnPelt", this.X, this.Y), new Item("berulnSkull", this.X, this.Y), new Item("rawBerulnFlesh", this.X, this.Y), new Item("rawBerulnFlesh", this.X, this.Y), new Item("rawBerulnFlesh", this.X, this.Y)];
                }

                //RANGE OF SIGHT (anything related to range of sight)
                if (this.alpha == true)
                {
                    this.rangeOfSightCalculator(900, "extremely");
                }
                else
                {
                    this.rangeOfSightCalculator(850, "extremely");
                }

                //AI
                if (this.alive == true)
                {
                    if (this.alpha == true)
                    {
                        this.Attack(14, 8);
                        this.callForNearbyHelpFromType(300, "Beruln");
                    }
                    else
                    {
                        this.Attack(15, 7);
                        this.callForNearbyHelpFromType(300, "Beruln");
                    }

                    this.deathChecker();
                    this.disturbedTimer();
                    this.visibleSight();
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();

                }

                //ANIMATIONS

                if (this.alive == true)
                {
                    if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(2, 0.100, false);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(3, 0.095, false);
                        }
                    }

                    // the frames/stages/costumes of the animation.
                    var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.
                        //manual damaging
                    if (theCostume <= 0)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(polyPNG, 92, 599, 77, 54, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(polyPNG, 8, 658, 77, 54, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                        }
                    }
                    else if (theCostume == 1)
                    {
                        if (this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                        {
                            this.finalAttackCostume = true; //deal the damage!
                            this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                        }

                        if (this.attacking)
                        {
                            this.drawUnit(polyPNG, 93, 655, 77, 54, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(polyPNG, 94, 547, 77, 54, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                        }
                    }
                    else if (theCostume >= 2)
                    {
                        this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.

                        if (this.attacking)
                        {
                            this.drawUnit(polyPNG, 93, 709, 77, 54, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                        }
                    }
                }
                else
                {
                    this.drawUnit(polyPNG, 11, 598, 77, 54, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                }

            }
            //BOG TROLL
            if (this.type == "BogTroll")
            {
                //Set Drops and experience
                if (this.alpha == true)
                {
                    if (Math.max(0, 90 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 1580 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (1580 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("hugeBogTrollSkull", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y)];
                }
                else if (this.alpha == "baby")
                {
                    if (Math.max(0, 12 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 116 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (116 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("babyBogTrollSkull", this.X, this.Y), new Item("trollFlesh", this.X, this.Y)];
                }
                else
                {
                    if (Math.max(0, 22 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 940 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (940 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("bogTrollSkull", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y), new Item("trollFlesh", this.X, this.Y)];
                }

                //RANGE OF SIGHT (anything related to range of sight)
                if (this.alpha == true)
                {
                    this.rangeOfSightCalculator(1000, true);
                }
                else if (this.alpha == "baby")
                {
                    this.rangeOfSightCalculator(600, false);
                }
                else
                {
                    this.rangeOfSightCalculator(850, true);
                }

                //AI
                if (this.alive == true)
                {
                    if (this.health <= this.healthMAX / 2)
                    {
                        this.combatMode = 1;
                    }
                    else
                    {
                        this.combatMode = 0;
                    }
                    if (this.alpha == true)
                    {
                        //troll health regeneration
                        if (this.health < this.healthMAX)
                        {
                            this.health += 0.05;
                        }
                        else
                        {
                            this.health = this.healthMAX;
                        }

                        if (this.combatMode == 1)
                        {
                            this.damageFrame = "manual";
                            this.Attack(60, 40);
                            this.speed = 6.2;
                            this.rotationSpeed = 0.025; // was 0.05
                            this.engagementRadius = 141;
                            this.sizeRadius = 75;
                            this.negateArmour = 10;
                            this.attackWait = 3.7;
                        }
                        else
                        {
                            this.damageFrame = "automatic";
                            this.Attack(55, 35);
                            this.speed = this.keepSpeed;
                            this.rotationSpeed = 0.035; // was 0.05
                            this.engagementRadius = 97;
                            this.sizeRadius = 75;
                            this.negateArmour = 16;
                            this.attackWait = 4.5;
                        }
                    }
                    else if (this.alpha == "baby")
                    {
                        this.callForNearbyHelpFromType(750, "wTroll");

                        //troll health regeneration
                        if (this.health < this.healthMAX)
                        {
                            this.health += 0.0185;
                        }
                        else
                        {
                            this.health = this.healthMAX;
                        }

                        if (this.combatMode == 1)
                        {
                            this.damageFrame = "manual";
                            this.Attack(10, 4);
                            this.speed = 4.1;
                            this.rotationSpeed = 0.025; // was 0.05
                            this.engagementRadius = 47;
                            this.sizeRadius = 30;
                            this.negateArmour = 1;
                            this.attackWait = 2.7;
                        }
                        else
                        {
                            this.Attack(9, 3);
                            this.speed = this.keepSpeed;
                            this.rotationSpeed = 0.035; // was 0.05
                            this.engagementRadius = 42;
                            this.sizeRadius = 30;
                            this.negateArmour = 3;
                            this.attackWait = 3.5;
                            this.damageFrame = "automatic";

                        }
                    }
                    else
                    {
                        //troll health regeneration
                        if (this.health < this.healthMAX)
                        {
                            this.health += 0.04;
                        }
                        else
                        {
                            this.health = this.healthMAX;
                        }

                        if (this.combatMode == 1)
                        {
                            this.damageFrame = "manual";
                            this.Attack(38, 23);
                            this.speed = 5.4;
                            this.rotationSpeed = 0.025; // was 0.05
                            this.engagementRadius = 92;
                            this.sizeRadius = 47;
                            this.negateArmour = 5;
                            this.attackWait = 3.7;
                        }
                        else
                        {
                            this.Attack(35, 20);
                            this.speed = this.keepSpeed;
                            this.rotationSpeed = 0.035; // was 0.05
                            this.engagementRadius = 72;
                            this.sizeRadius = 47;
                            this.negateArmour = 10;
                            this.attackWait = 4.5;
                            this.damageFrame = "automatic";
                        }
                    }

                    this.deathChecker();
                    this.disturbedTimer();
                    this.visibleSight();
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();

                }

                //ANIMATIONS

                if (this.alive == true)
                {
                    if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {

                        this.costumeEngine(4, 0.065, false);

                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            if (this.combatMode == 0)
                            {
                                this.costumeEngine(5, 0.2, true);
                            }
                            else if (this.combatMode == 1)
                            {
                                this.costumeEngine(4, 0.2, false);
                            }
                        }
                    }

                    // the frames/stages/costumes of the animation.
                    var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.
                    //manual damaging
                    if (this.combatMode == 0)
                    {
                        if (theCostume <= 0)
                        {
                            if (this.attacking)
                            {
                                this.drawUnit(verse, 3331, 10, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                            else
                            {
                                this.drawUnit(verse, 3770, 16, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                        }
                        else if (theCostume == 1)
                        {
                            if (this.attacking)
                            {
                                this.drawUnit(verse, 3225, 10, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                            else
                            {
                                this.drawUnit(verse, 3872, 16, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);

                            }
                        }
                        else if (theCostume == 2)
                        {
                            if (this.attacking)
                            {
                                this.drawUnit(verse, 3331, 10, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                            else
                            {
                                this.drawUnit(verse, 3770, 16, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                        }
                        else if (theCostume == 3)
                        {
                            this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.

                            if (this.attacking)
                            {
                                this.drawUnit(verse, 3441, 10, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                            else
                            {
                                this.drawUnit(verse, 3665, 16, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                        }
                        else if (theCostume >= 4)
                        {

                            if (this.attacking)
                            {
                                this.drawUnit(verse, 3558, 10, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                        }
                    }
                    else if (this.combatMode == 1)
                    {
                        if (theCostume <= 0)
                        {
                            if (this.attacking)
                            {
                                this.drawUnit(verse, 3770, 16, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                            else
                            {
                                this.drawUnit(verse, 3770, 16, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }

                        }
                        else if (theCostume == 1)
                        {

                            if (this.attacking)
                            {
                                this.drawUnit(verse, 3735, 138, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                                if (this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                                {
                                    this.finalAttackCostume = true; //deal the damage!
                                    this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                                }
                            }
                            else
                            {
                                this.drawUnit(verse, 3872, 16, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);

                            }
                        }
                        else if (theCostume == 2)
                        {
                            this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.

                            if (this.attacking)
                            {
                                this.drawUnit(verse, 3873, 138, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                            else
                            {
                                this.drawUnit(verse, 3770, 16, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                        }
                        else if (theCostume == 3)
                        {

                            if (this.attacking)
                            {
                                this.drawUnit(verse, 3735, 138, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                            else
                            {
                                this.drawUnit(verse, 3665, 16, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                            }
                        }
                        else if (theCostume >= 4)
                        {
                            this.drawUnit(verse, 11, 598, 106, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                        }
                    }
                }
                else
                {
                    this.drawUnit(verse, 3586, 134, 115, 129, -77 - this.xAdjustment, -53 - this.yAdjustment, 154 * this.alphaSize, 108 * this.alphaSize);
                }
            }
            //WINTER WOLF
            if (this.type == "WinterWolf")
            {
                var rndm = Math.round(Math.random());
                //Set Drops and experience
                if (this.alpha == true)
                {
                    if (Math.max(0, 25 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 100 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (100 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    if (rndm)
                    {
                        this.drops = [new Item("massiveWinterWolfPelt", this.X, this.Y), new Item("rawWinterWolfFlesh", this.X, this.Y), new Item("rawWinterWolfFlesh", this.X, this.Y), new Item("rawWinterWolfFlesh", this.X, this.Y), new Item("rawWolfLiver", this.X, this.Y)];
                    }
                    else
                    {
                        this.drops = [new Item("massiveWinterWolfPelt", this.X, this.Y), new Item("rawWinterWolfFlesh", this.X, this.Y), new Item("rawWinterWolfFlesh", this.X, this.Y), new Item("rawWinterWolfFlesh", this.X, this.Y)];
                    }
                }
                else
                {
                    if (Math.max(0, 10 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 49 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (49 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    if (rndm)
                    {
                        this.drops = [new Item("winterWolfPelt", this.X, this.Y), new Item("rawWinterWolfFlesh", this.X, this.Y), new Item("rawWolfLiver", this.X, this.Y)];
                    }
                    else
                    {
                        this.drops = [new Item("winterWolfPelt", this.X, this.Y), new Item("rawWinterWolfFlesh", this.X, this.Y)];
                    }
                }

                //RANGE OF SIGHT (anything related to range of sight)
                if (this.alpha == true)
                {
                    this.rangeOfSightCalculator(775, "very");
                }
                else
                {
                    this.rangeOfSightCalculator(665, "very");
                }

                //AI
                if (this.alive == true)
                {
                    if (this.alpha == true)
                    {
                        this.Attack(19, 6);
                        this.callForNearbyHelpFromType(350, "WinterWolf");
                    }
                    else
                    {
                        this.Attack(6, 4);
                        this.callForNearbyHelpFromType(640, "WinterWolf");
                    }

                    this.deathChecker();
                    this.disturbedTimer();
                    this.visibleSight();
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();

                }

                //ANIMATIONS

                if (this.alive == true)
                {
                    if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(3, 0.100, false);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(5, 0.1, false);
                        }
                    }

                    // the frames/stages/costumes of the animation.
                    var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.
                    //manual damaging
                    if (theCostume <= 0)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 2853, 17, 49, 29, -89 - this.xAdjustment, -53 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 2853, 17, 49, 29, -89 - this.xAdjustment, -53 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                        }
                    }
                    else if (theCostume == 1)
                    {
                        if (this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                        {
                            this.finalAttackCostume = true; //deal the damage!
                            this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                        }

                        if (this.attacking)
                        {
                            this.drawUnit(verse, 2911, 18, 49, 29, -89 - this.xAdjustment, -48 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 2730, 16, 49, 29, -89 - this.xAdjustment, -53 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                        }
                    }
                    else if (theCostume == 2)
                    {
                        this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.

                        if (this.attacking)
                        {
                            this.drawUnit(verse, 2968, 18, 49, 29, -89 - this.xAdjustment, -53 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 2791, 17, 49, 29, -89 - this.xAdjustment, -52 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                        }
                    }
                    else if (theCostume == 3)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 3027, 18, 49, 29, -89 - this.xAdjustment, -55 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                        }
                    }
                    else if (theCostume >= 4)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 3083, 21, 49, 29, -89 - this.xAdjustment, -51 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                        }
                    }
                }
                else
                {
                    this.drawUnit(verse, 3139, 24, 49, 29, -93 - this.xAdjustment, -44 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                }

            }
            //GULFREY
            if (this.type == "Gulfrey")
            {
                //Set Drops and experience
                if (this.alpha == true)
                {
                    if (Math.max(0, 10 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 21 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (21 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("gulfreyShell", this.X, this.Y), new Item("gulfreyShell", this.X, this.Y), new Item("gulfreyShell", this.X, this.Y), new Item("rawGulfreyFlesh", this.X, this.Y), new Item("rawGulfreyFlesh", this.X, this.Y), new Item("rawGulfreyFlesh", this.X, this.Y), new Item("gulfreyMandibles", this.X, this.Y)];
                }
                else
                {
                    if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 8 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (8 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    this.drops = [new Item("rawGulfreyFlesh", this.X, this.Y)];
                }

                //RANGE OF SIGHT (anything related to range of sight)
                if (this.alpha == true)
                {
                    this.rangeOfSightCalculator(490, true);
                }
                else
                {
                    this.rangeOfSightCalculator(440, true);
                }

                //AI
                if (this.alive == true)
                {
                    if (this.alpha == true)
                    {
                        this.Attack(6, 4);
                        this.callForNearbyHelpFromType(300, "Gulfrey");
                    }
                    else
                    {
                        this.Attack(2, 2);
                        this.callForNearbyHelpFromType(440, "Gulfrey");
                    }

                    this.deathChecker();
                    this.disturbedTimer();
                    this.visibleSight();
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();

                }

                //ANIMATIONS

                if (this.alive == true)
                {
                    if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(4, 0.125, false);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(4, 0.35, false);
                        }
                    }

                    // the frames/stages/costumes of the animation.
                    var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                    if (theCostume <= 0)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 103, 172, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 242, 10, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                        }
                    }
                    else if (theCostume == 1)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 103, 92, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 103, 172, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                        }
                    }
                    else if (theCostume == 2)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 103, 172, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 241, 94, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                        }
                    }
                    else if (theCostume >= 3)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 100, 12, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 241, 173, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                        }
                    }
                }
                else
                {
                    this.drawUnit(verse, 163, 225, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                }

            }
            //TORPER
            if (this.type == "Torper")
            {
                //Set Drops and experience
                var rndmzr = Math.floor(Math.random() * 3);
                if (this.alpha == true)
                {
                    if (Math.max(0, 14 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 75 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (75 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    if (player.getIntelligence >= 42)
                    {
                        this.drops = [new Item("torperFuzz", this.X, this.Y), new Item("rawTorperFlesh", this.X, this.Y), new Item("rawTorperFlesh", this.X, this.Y)];
                    }
                    else
                    {
                        if (rndmzr == 2)
                        {
                            this.drops = [new Item("torperVenomSac", this.X, this.Y), new Item("rawTorperFlesh", this.X, this.Y), new Item("rawTorperFlesh", this.X, this.Y)];
                        }
                        else
                        {
                            this.drops = [new Item("rawTorperFlesh", this.X, this.Y), new Item("rawTorperFlesh", this.X, this.Y)];
                        }
                    }

                }
                else
                {
                    if (Math.max(0, 10 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                    {
                        this.experience = 45 * ((player.getIntelligence() / 50) + 1);
                    }
                    else
                    {
                        this.experience = (45 * ((player.getIntelligence() / 50) + 1)) / 10;
                    }

                    if (player.getIntelligence >= 48)
                    {
                        this.drops = [new Item("torperFuzz", this.X, this.Y), new Item("torperVenomSac", this.X, this.Y), new Item("rawTorperFlesh", this.X, this.Y)];
                    }
                    else
                    {
                        if (rndmzr == 2)
                        {
                            this.drops = [new Item("torperVenomSac", this.X, this.Y), new Item("rawTorperFlesh", this.X, this.Y)];
                        }
                        else
                        {
                            this.drops = [new Item("rawTorperFlesh", this.X, this.Y)];
                        }
                    }
                }

                //RANGE OF SIGHT (anything related to range of sight)
                if (this.alpha == true)
                {
                    this.rangeOfSightCalculator(675, "unrelenting");
                }
                else
                {
                    this.rangeOfSightCalculator(575, "unrelenting");
                }

                //AI
                if (this.alive == true)
                {
                    if (this.alpha == true)
                    {
                        this.Attack(10, 4);
                        this.callForNearbyHelpFromType(675, "Torper");
                    }
                    else
                    {
                        this.Attack(7, 3);
                        this.callForNearbyHelpFromType(575, "Torper");
                    }

                    this.deathChecker();
                    this.disturbedTimer();
                    this.visibleSight();
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();

                }

                //ANIMATIONS

                if (this.alive == true)
                {
                    if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(3, 1/3, true);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(5, 0.150, true);
                        }
                    }

                    // the frames/stages/costumes of the animation.
                    var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.
                    //manual damaging
                    if (theCostume <= 0)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 1592, 40, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 1304, 38, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                        }
                    }
                    else if (theCostume == 1)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 1671, 42, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 1409, 41, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                        }
                    }
                    else if (theCostume == 2)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 1740, 40, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(verse, 1504, 41, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                        }
                    }
                    else if (theCostume == 3)
                    {
                        this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.

                        if (this.attacking)
                        {
                            this.drawUnit(verse, 1808, 40, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                        }
                    }
                    else if (theCostume >= 4)
                    {
                        if (this.attacking)
                        {
                            this.drawUnit(verse, 1877, 41, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                        }
                    }
                }
                else
                {
                    this.drawUnit(verse, 1967, 41, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                }
            }
            //PERSON
            if (this.type == "Person")
            {
                //Set Drops and experience
                if (Math.max(0, 0.5 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 5 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (5 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [];
                //RANGE OF SIGHT (anything related to range of sight)

                this.rangeOfSightCalculator(500, "true");

                //AI
                if (this.alive == true)
                {

                    if (this.disturbed == true)
                    {
                        this.hostile = true; //let the games animation know to display the person's name in red.

                        if (this.ultra.personality == "violent")
                        {
                            this.pointTowardsPlayer();
                            this.moveInRelationToPlayer();
                            if (this.ranged == false)
                            {
                                this.Attack(this.ultra.weapon[1][1], this.ultra.weapon[1][0]);
                            }
                            this.callForNearbyHelpFromType(900, "Soldier");
                        }
                        else if (this.ultra.personality == "calculated")
                        {
                            if (player.weaponEquipped == "none" && player.armourTotal < 0.5)
                            {
                                this.fleeing = false;
                                this.ranged = this.ultra.ranged[0];
                                this.pointTowardsPlayer();
                                this.moveInRelationToPlayer();
                                if (this.ranged == false)
                                {
                                    this.Attack(this.ultra.weapon[1][1], this.ultra.weapon[1][0]);
                                }
                                this.callForNearbyHelpFromType(900, "Soldier");
                            }
                            else
                            {
                                this.ranged = false;
                                this.attacking = false;
                                this.moveInRelationToPlayer();
                                this.pointAwayFromPlayer();
                                this.callForNearbyHelpFromType(900, "Soldier");
                            }
                        }
                        else if (this.ultra.personality == "scared")
                        {
                            this.ranged = false;
                            this.moveInRelationToPlayer();
                            this.pointAwayFromPlayer();
                            this.callForNearbyHelpFromType(900, "Soldier");
                        }
                    }
                    else
                    {
                        this.hostile = false;
                        this.attacking = false;
                        this.fleeing = false;
                        this.dtp = this.DTP();
                        if (this.dtp > 35)
                        {
                            this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                        }
                        else
                        {
                            this.pointTowardsPlayer();
                            this.moving = false;
                        }
                    }

                    this.deathChecker();
                    this.disturbedTimer();
                    this.visibleSight();
                }
                else
                {
                    if (this.doOnDeathOnce == true)
                    {
                        //Faction relation decreases
                        if (this.ultra.faction == "freynor")
                        {
                            player.freynorFaction -= 20;
                            this.callForNearbyHelpFromType(900, "Soldier");
                        }
                        else if (this.ultra.faction == "orgell")
                        {
                            player.orgellFaction -= 20;
                            this.callForNearbyHelpFromType(900, "Soldier");
                        }

                        //Unique Characters Permanent Death
                        if (ID == "Laandeg the Alchemist")
                        {
                            uniqueChars.laandegLDS = false;
                            player.freynorFaction -= 6;
                        }
                        if (ID == "Bobith the Smith")
                        {
                            uniqueChars.bobithLDS = false;
                            player.freynorFaction -= 9;
                        }
                        else if (ID == "Medlia the Merchant")
                        {
                            uniqueChars.medliaLDS = false;
                            player.freynorFaction -= 12;
                        }
                        else if (ID == "Drohfor")
                        {
                            uniqueChars.drohforLDS = false;
                            player.freynorFaction -= 2;
                        }
                        else if (ID == "Maggy the Tailor")
                        {
                            uniqueChars.maggyLDS = false;
                            player.freynorFaction -= 14;
                        }
                        else if (ID == "Odee the banker")
                        {
                            uniqueChars.odeeLDS = false;
                            player.freynorFaction -= 11;
                        }

                        this.doOnDeathOnce = false;
                    }
                }

                //ANIMATIONS

                if (this.alive == true)
                {
                    if (this.moving == false && this.attacking == false)
                    {
                        this.costume = 0;
                    }
                    else if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costume = 0;
                        // the right leg goes back 25 pixles and the left goes forward 25.
                        if (this.lLegY < 23 && this.legSwitch == 0 )
                        {
                            // this makes the legs extend
                            this.lLegY += 11 / (16.75 - (0.17 / 2 * 80));
                            this.rLegY -= 11 / (16.75 - (0.17 / 2 * 80));
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
                            this.lLegY -= 11 / (16.75 - (0.17 / 2 * 80));
                            this.rLegY += 11 / (16.75 - (0.17 / 2 * 80));
                            //console.log("right" + " " + self.lLegY + " " + self.rLegY);
                        }
                        else
                        {
                            // switch to the left leg forward routine.
                            this.legSwitch = 0;
                        }

                        //to put it simply, this function draws two lines that represent the main character's legs.
                        this.drawLegs = function()
                        {
                            XXX.save();
                            XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                            XXX.rotate(this.rotation - 1/2 * Math.PI);
                            XXX.beginPath();
                            XXX.strokeStyle ="black";
                            XXX.lineWidth = 2;
                            XXX.moveTo(-4, 0);
                            XXX.lineTo(-4, 0 + this.lLegY);
                            XXX.stroke();
                            XXX.beginPath();
                            XXX.strokeStyle ="black";
                            XXX.lineWidth = 2;
                            XXX.moveTo(4, 0);
                            XXX.lineTo(4, 0 + this.rLegY);
                            XXX.stroke();
                            XXX.restore();
                        };
                        this.drawLegs();
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            if (this.weapon == "none")
                            {
                                this.costumeEngine(6, 0.2, true);
                            }
                            else if (this.weapon == "freydicSword")
                            {
                                this.costumeEngine(7, 0.2, true);
                            }
                        }
                    }
                    //draw some weapons underneath the body
                    if (this.weapon == "freydicSword" || this.weapon == "longbow")
                    {
                        this.drawHumanArms();
                    }

                    //Draw the Person's body
                    this.drawHuman(this.ultra.outfit[0], false);

                    //draw the others over it.
                    if (this.weapon != "freydicSword" && this.weapon != "longbow")
                    {
                        this.drawHumanArms();
                    }
                }
                else
                {
                    this.drawHuman("none", true);
                    this.drawUnit(verse, 0, 302, 35, 80, -20.5, -20, 57, 100, 1/2 * Math.PI);
                }
            };
            //SOLDIER
            if (this.type == "Soldier")
            {
                //Set Drops and experience

                if (Math.max(0, (this.ultra.weapon[1][0] + this.ultra.weapon[1][1]) - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 20 * this.con * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (20 * this.con * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [];

                //RANGE OF SIGHT (anything related to range of sight)
                this.rangeOfSightCalculator(650, "true");

                //AI
                if (this.alive == true)
                {
                    if (this.ultra.faction == "freynor")
                    {
                        if (player.freynorFaction <= -50)
                        {
                            this.disturbed = true;
                        }

                        this.switchToRanged("longbow");
                    }

                    if (this.disturbed == true)
                    {
                        this.hostile = true; //let the games animation know to display the person's name in red.
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                        if (this.ranged == false)
                        {
                            this.Attack(this.ultra.weapon[1][1], this.ultra.weapon[1][0]);
                        }
                        this.callForNearbyHelpFromType(900, "Soldier");
                    }
                    else
                    {
                        this.weapon = this.ultra.weapon[0];
                        this.ranged = false;
                        this.hostile = false;
                        this.attacking = false;
                        this.dtp = this.DTP();
                        if (this.dtp > 35)
                        {
                            this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                        }
                        else
                        {
                            this.pointTowardsPlayer();
                            this.moving = false;
                        }
                    }

                    this.deathChecker();
                    this.disturbedTimer();
                    this.visibleSight();
                }
                else
                {
                    if (this.doOnDeathOnce == true)
                    {
                        //Faction relation decreases
                        if (this.ultra.faction == "freynor")
                        {
                            player.freynorFaction -= 50;
                        }
                        //Unique Characters Permanent Death

                        this.doOnDeathOnce = false;
                    }
                }

                //ANIMATIONS

                if (this.alive == true)
                {
                    if (this.moving == false && this.attacking == false)
                    {
                        this.costume = 0;
                    }
                    else if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costume = 0;
                        // the right leg goes back 25 pixles and the left goes forward 25.
                        if (this.lLegY < 23 && this.legSwitch == 0)
                        {
                            // this makes the legs extend
                            this.lLegY += 11 / (16.75 - (0.17 / 2 * 80));
                            this.rLegY -= 11 / (16.75 - (0.17 / 2 * 80));
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
                            this.lLegY -= 11 / (16.75 - (0.17 / 2 * 80));
                            this.rLegY += 11 / (16.75 - (0.17 / 2 * 80));
                            //console.log("right" + " " + self.lLegY + " " + self.rLegY);
                        }
                        else
                        {
                            // switch to the left leg forward routine.
                            this.legSwitch = 0;
                        }

                        //to put it simply, this function draws two lines that represent the main character's legs.
                        this.drawLegs = function ()
                        {
                            XXX.save();
                            XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                            XXX.rotate(this.rotation - 1 / 2 * Math.PI);
                            XXX.beginPath();
                            XXX.strokeStyle = "black";
                            XXX.lineWidth = 2;
                            XXX.moveTo(-4, 0);
                            XXX.lineTo(-4, 0 + this.lLegY);
                            XXX.stroke();
                            XXX.beginPath();
                            XXX.strokeStyle = "black";
                            XXX.lineWidth = 2;
                            XXX.moveTo(4, 0);
                            XXX.lineTo(4, 0 + this.rLegY);
                            XXX.stroke();
                            XXX.restore();
                        };
                        this.drawLegs();
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            if (this.weapon == "none")
                            {
                                this.costumeEngine(6, 0.2, true);
                            }
                            else if (this.weapon == "freydicSword")
                            {
                                this.costumeEngine(7, 0.2, true);
                            }
                        }
                    }
                    //draw some weapons underneath the body
                    if (this.weapon == "freydicSword" || this.weapon == "longbow")
                    {
                        this.drawHumanArms();
                    }

                    //Draw the Person's body
                    this.drawHuman(this.ultra.outfit[0], false);

                    //draw the others over it.
                    if (this.weapon != "freydicSword" && this.weapon != "longbow")
                    {
                        this.drawHumanArms();
                    }
                }
                else
                {
                    this.drawHuman("none", true);
                    this.drawUnit(verse, 0, 302, 35, 80, -20.5, -20, 57, 100, 1 / 2 * Math.PI);
                }
            }
        };
        //OPERATION [all of the functions in this class are activated here]
        this.operation = function()
        {
            this.activateUnits();

            if (this.alive == true)
            {
                this.turnToDestination();
            }

            this.deathChecker();
            this.AreAnyUnitsAttacking();

            if (this.alive == true || new Date().getTime() - this.timeSinceDead < 1000)
            {
                this.showHealthWhenHurt();
            }
            else if (new Date().getTime() - this.timeSinceDead > 90000)
            {
                var me = deadAIList.indexOf(this);
                deadAIList.splice(me, 1);
            }

            //this is a test to see where the true center of the unit is.
            if (testingUnitCenters == true && this.alive == true)
            {
                this.testForCenter();
            }
            //this is a test to see what the true size of the unit is.
            if (testingUnitSizes == true && this.alive == true)
            {
                this.testForSize();
            }
        };
    };

    function Item(type, x, y)
    {
        this.type = type;
        this.X = x;
        this.Y = y;
        this.equipped = false; //this is for the inventory and equipping to the player.

        this.setItemID = function()
        {
            // because I don't want damage to be decreased from the starting amount by the multiplyer this makes sure that it is evened out at one before taking level into consideration.
            if (player.getStrength() >= 25)
            {
                this.leveledDamageMultiple = player.getStrength();
            }
            else
            {
                this.leveledDamageMultiple = 25;
            }
            //if strength is less than 4 all weapons are 1 damage weaker unless they only do 1 damage.
            if (player.getStrength() >= 4)
            {
                this.damageHandicap = 0;
            }
            else
            {
                this.damageHandicap = 1;
            }
            //For some weapons if the player's strength is less than 25 they will get a deduction
            if (player.getStrength() >= 25)
            {
                this.damageHandicapII = 0;
            }
            else if (player.getStrength() >= 20)
            {
                this.damageHandicapII = 1;
            }
            else if (player.getStrength() >= 15)
            {
                this.damageHandicapII = 3;
            }
            else if (player.getStrength() >= 10)
            {
                this.damageHandicapII = 4;
            }
            else
            {
                this.damageHandicapII = 5;
            }

            //INDIVIDUAL ITEM DETAILS


                //FISTS (not a real item)
            if (this.type == "none")
            {
                //For All Items
                this.identity = "Fists";
                this.weight = 0;
                this.size = 10;
                this.description = "Your Fists.";
                this.intForDes = 4;
                this.intDescription = "Face Punch!";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 0;
                this.range = 1;
                this.rate = 35;
                this.damage = player.fistDamage;
                this.magicalDamage = player.fistMagicalDamage;
                this.negateArmour = 0;

                //ability
                this.ability = player.onTouchSpell;
            }
            else if (this.type == "nude")
            {
                //For All Items
                this.identity = "Nakedness";
                this.weight = 0;
                this.size = 0;
                this.description = "your player's body... IN THE NUDE!!!";
                this.intForDes = 0;
                this.intDescription = "You are sooo naked right now!";

                //Define Utility
                this.utility = "worn";
                //the this.type of armour/clothing it is...
                this.subUtility = "none";
                //Utility Focused
                //protections
                this.protection = 0;
                this.toughnessRequirement = 0;
                this.magicalProtection = 0;
                this.warmthRetention = 0;
                this.thirstRetention = 0;
                //Main Stat Bonuses
                this.strengthBonus = 0;
                this.enduranceBonus = 0;
                this.toughnessBonus = 0;
                this.intelligenceBonus = 0;
                this.charismaBonus = 0;
                this.rangedBonus = 0;
                this.constitutionBonus = 0;
                this.staminaBonus = 0;
                this.dexterityBonus = 0;
                this.stealthBonus = 0;
                //Extra Stat Bonuses
                this.hungerBonus = 0;
                this.thirstBonus = 0;
                this.warmthBonus = 0;
                //Magical Stat Bonuses
                this.eminenceBonus = 0;
                this.willpowerBonus = 0;
                this.knowledgeBonus = 0;
                this.concentrationBonus = 0;
                this.memoryBonus = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 0;
                this.sellValue = 0;
            }

                //ACTUAL ITEMS
            else if (this.type == "coins")
            {
                //For All Items
                this.identity = "Coins";
                this.weight = 0;
                this.size = 6;
                this.description = "A currency that is widely accepted among the several kingdoms in the land.";
                this.intForDes = 0;
                this.intDescription = "Although they may appear to be made of solid gold, it is only actually their outermost layer that is made of gold.";

                //Define Utility
                this.utility = "currency";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 1;
                this.sellValue = 1;
            }
            if (this.type == "etyrMeat")
            {
                //For All Items
                this.identity = "Etyr Meat";
                this.weight = 1;
                this.size = 6;
                this.description = "The cooked meat of an Etyr.";
                this.intForDes = 1;
                this.intDescription = "Stringy, chewy, and tough... but it's edible.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 6; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 1; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.


                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 3 - Math.floor(player.getCharisma() / 25); // at max, buy for 1.
                this.sellValue = 1; // at max, sell for 1.
            }
            if (this.type == "hugeBogTrollSkull")
            {
                //For All Items
                this.identity = "Huge Bog Troll Skull";
                this.weight = 50;
                this.size = 30;
                this.description = "The skull of a humongous bog troll.";
                this.intForDes = 1;
                this.intDescription = "A testament to the valor and might of the one that has slain such a monstrous beast!";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 3000 - Math.floor(player.getCharisma() / 0.05125); // at max, buy for 2025.
                this.sellValue = 1445 + Math.floor(player.getCharisma() / 0.125); // at max, sell for 1845.
            }
            if (this.type == "bogTrollSkull")
            {
                //For All Items
                this.identity = "Bog Troll Skull";
                this.weight = 35;
                this.size = 24;
                this.description = "The skull of a bog troll.";
                this.intForDes = 1;
                this.intDescription = "A testament to the valor and might of the one that has slain such a beast!";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 1900 - Math.floor(player.getCharisma() / 0.125); // at max, buy for 1500.
                this.sellValue = 1060 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 1260.
            }
            if (this.type == "babyBogTrollSkull")
            {
                //For All Items
                this.identity = "Baby Bog Troll Skull";
                this.weight = 8;
                this.size = 15;
                this.description = "The skull of a baby bog troll.";
                this.intForDes = 1;
                this.intDescription = "A trophy of a sort, for a troll is a troll, even a baby is dangerous...";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 70 - Math.floor(player.getCharisma() / 2); // at max, buy for 45.
                this.sellValue = 30 + Math.floor(player.getCharisma() / 3); // at max, sell for 45.
            }
            else if (this.type == "trollFlesh")
            {
                //For All Items
                this.identity = "Troll Flesh";
                this.weight = 4;
                this.size = 11;
                this.description = "The raw flesh of a Troll.";
                this.intForDes = 40;
                this.intDescription = "This meat can be strained for the troll's blood which has regenerative properties.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                if (player.getIntelligence >= 25)
                {
                    this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
                }
                else
                {
                    this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                }
                this.hunger = 1; //satisfies hunger.
                this.thirst = 1; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = -6; //recoops lost energy.
                this.replenish = -6; //restores will.

                //ability
                this.ability = "poisonI";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 135 - Math.floor(player.getCharisma() / 2); // at max, buy for 110.
                this.sellValue = 80 + Math.floor(player.getCharisma() / 2); // at max, sell for 105.
            }
            else if (this.type == "trollMeat")
            {
                //For All Items
                this.identity = "Troll Meat";
                this.weight = 3;
                this.size = 11;
                this.description = "The cooked meat of a troll.";
                this.intForDes = 5;
                this.intDescription = "It is tough to chew, and quite frankly it tastes disgusting...";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 4; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = -2; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 15 - Math.floor(player.getCharisma() / 25); // at max, buy for 13.
                this.sellValue = 8 + Math.floor(player.getCharisma() / 25); // at max, sell for 10.
            }
            else if (this.type == "rawWalrusFlesh")
            {
                //For All Items
                this.identity = "Raw Walrus Flesh";
                this.weight = 2;
                this.size = 11;
                this.description = "The raw flesh of a land walrus.";
                this.intForDes = 1;
                this.intDescription = "Eating this raw would be tough...";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 1; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = -1; //recoops lost energy.
                this.replenish = 0; //restores will.


                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 9 - Math.floor(player.getCharisma() / 15); // at max, buy for 6.
                this.sellValue = 3 + Math.floor(player.getCharisma() / 15); // at max, sell for 6.
            }
            else if (this.type == "walrusMeat")
            {
                //For All Items
                this.identity = "Walrus Meat";
                this.weight = 2;
                this.size = 11;
                this.description = "The cooked meat of a land walrus.";
                this.intForDes = 3;
                this.intDescription = "Land walrus meat is filling and hearty, and even more it can provide you with the energy you need to endure in cold climates.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 19; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 4; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.


                //ability
                this.ability = "satiate";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 18 - Math.floor(player.getCharisma() / 6.25); // at max, buy for 10.
                this.sellValue = 6 + Math.floor(player.getCharisma() / 12.5); // at max, sell for 10.
            }
            else if (this.type == "ogoFruit")
            {
                //For All Items
                this.identity = "Ogo Fruit";
                this.weight = 1;
                this.size = 7;
                this.description = "The ogo fruit is sweet, tender, and smooth.";
                this.intForDes = 19;
                this.intDescription = "The ogo fruit has been known to make people get a bit hyper!";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 3; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 1; //recoops lost energy.
                this.replenish = 0; //restores will.


                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 37 - Math.floor(player.getCharisma() / 2); // at max, buy for 12.
                this.sellValue = 7 + Math.floor(player.getCharisma() / 10); // at max, sell for 12.
            }
            else if (this.type == "rawEtyrFlesh")
            {
                //For All Items
                this.identity = "Raw Etyr Flesh";
                this.weight = 1;
                this.size = 6;
                this.description = "The raw flesh from an Etyr.";
                this.intForDes = 3;
                this.intDescription = "Rare, with extra gut worms!";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 1; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "gutWorms";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 1; // at max, buy for 1.
                this.sellValue = 1; // at max, sell for 1.
            }
            else if (this.type == "frichMeat")
            {
                //For All Items
                this.identity = "Frich Meat";
                this.weight = 1;
                this.size = 12;
                this.description = "The cooked flesh of a Frich.";
                this.intForDes = 2;
                this.intDescription = "Cooking it didn't do much to soften it up, but at least it is safe to eat...";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 5; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = -1; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 4 - Math.floor(player.getCharisma() / 50); // at max, buy for 3.
                this.sellValue = 2 + Math.floor(player.getCharisma() / 50); // at max, sell for 3.
            }
            else if (this.type == "rawFrichFlesh")
            {
                //For All Items
                this.identity = "Raw Frich Flesh";
                this.weight = 1;
                this.size = 12;
                this.description = "The raw flesh from a Frich.";
                this.intForDes = 4;
                this.intDescription = "It is tough, slimy with curdling blood, and finished with an occasionally gut worm here or there.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 1; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = -1; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "gutWorms";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 1; // at max, buy for 1.
                this.sellValue = 1; // at max, sell for 1.
            }
            else if (this.type == "rawBerulnFlesh")
            {
                //For All Items
                this.identity = "Raw Beruln Flesh";
                this.weight = 2;
                this.size = 17;
                this.description = "A chunk of rib flesh from a beruln.";
                this.intForDes = 2;
                this.intDescription = "The meat is tough and sticky with blood. It is going to be a challenge to eat it in this state...";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 0.5; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = -1; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 3 - Math.floor(player.getCharisma() / 50); // at max, buy for 2.
                this.sellValue = 2; // at max, sell for 2.
            }
            else if (this.type == "berulnMeat")
            {
                //For All Items
                this.identity = "Beruln Meat";
                this.weight = 2;
                this.size = 17;
                this.description = "Cooked rib meat from a beruln.";
                this.intForDes = 1;
                this.intDescription = "The meat is too tough to chew comfortably...";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 7; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 1; //warms player.
                this.heal = 0; //heals health.
                this.generation = -1; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 4 - Math.floor(player.getCharisma() / 50); // at max, buy for 3.
                this.sellValue = 3; // at max, sell for 3.
            }
            else if (this.type == "yaihefBerries")
            {
                //For All Items
                this.identity = "Yaihef Berries";
                this.weight = 0.5;
                this.size = 7;
                this.description = "Juicy light blue berries with a plumlike texture.";
                this.intForDes = 2;
                this.intDescription = "They're the quenchiest!";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 1; //satisfies hunger.
                this.thirst = 3; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 4 - Math.floor(player.getCharisma() / 25); // at max, buy for 2.
                this.sellValue = 1; // at max, sell for 1.
            }
            else if (this.type == "gojiiBerries")
            {
                //For All Items
                this.identity = "Gojii Berries";
                this.weight = 0.5;
                this.size = 7;
                this.description = "Sweet smelling light green berries dotted with three red spots.";
                this.intForDes = 44;
                this.intDescription = "The Gojii berry contains one of the most poisonous compounds in the world...";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 0.5; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "gojii";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 45 - Math.floor(player.getCharisma() / 2.5); // at max, buy for 25.
                this.sellValue = 5 + Math.floor(player.getCharisma() / 5); // at max, sell for 15.
            }
            else if (this.type == "trollsBlood")
            {
                //For All Items
                this.identity = "Jar of Tempered Troll's Blood";
                this.weight = 3;
                this.size = 6;
                this.description = "Troll's blood that has been tempered at a perfect temperature over the course of several days.";
                this.intForDes = 24;
                this.intDescription = "Trolls' blood is responsible for their uncanny ability to regenerate from injuries.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 1; //satisfies hunger.
                this.thirst = 3; //quenches thirst.
                this.warmth = 3; //warms player.
                this.heal = 15; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "healthVI";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 1000 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 800.
                this.sellValue = 300 + Math.floor(player.getCharisma() / 0.25); // at max, sell for 500.
            }
            else if (this.type == "rawTrollsBlood")
            {
                //For All Items
                this.identity = "Jar of Troll's Blood";
                this.weight = 4;
                this.size = 6;
                this.description = "The blood of a troll stored in a jar.";
                this.intForDes = 20;
                this.intDescription = "Troll's have a slight natural magic resistance; their raw blood exhibits this feature!";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 1; //satisfies hunger.
                this.thirst = 3; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = -4; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = -20; //restores will.

                //ability
                this.ability = "trollPoison";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 690 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 590.
                this.sellValue = 185 + Math.floor(player.getCharisma() / 0.5); // at max, sell for 285.
            }
            else if (this.type == "glassJar")
            {
                //For All Items
                this.identity = "Glass Jar";
                this.weight = 4;
                this.size = 6;
                this.description = "A Jar made of class sealed tighly with a metal lid.";
                this.intForDes = 4;
                this.intDescription = "This can be used to contain magical substances and other such commodities that should be stored in a vaccum sealed container.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 4 - Math.floor(player.getCharisma() / 25); // at max, buy for 2.
                this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
            }
            else if (this.type == "cleansingPotion")
            {
                //For All Items
                this.identity = "Potion of Cleansing";
                this.weight = 0.5;
                this.size = 5;
                this.description = "A light coloured liquid that is both tasteless and odorless.";
                this.intForDes = 41;
                this.intDescription = "This potion causes the player to become sick with a magical illness that cures poisons and other biological afflictions.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = -2; //satisfies hunger.
                this.thirst = -10; //quenches thirst.
                this.warmth = -10; //warms player.
                this.heal = 0; //heals health.
                this.generation = -2; //recoops lost energy.
                this.replenish = 1; //restores will.

                //ability
                this.ability = "cleansing";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 425 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 325.
                this.sellValue = 95 + Math.floor(player.getCharisma() / 0.325); // at max, sell for 248.
            }
            else if (this.type == "energyPotionI")
            {
                //For All Items
                this.identity = "Potion of Energizing";
                this.weight = 0.5;
                this.size = 5;
                this.description = "The smooth syrup thick yellow liquid ripples quickly; you can feel the vibrations it makes through its glass container.";
                this.intForDes = 41;
                this.intDescription = "This potion restores your energy slowly over time.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 0; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 1; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "energyI";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 140 - Math.floor(player.getCharisma() / 1); // at max, buy for 90.
                this.sellValue = 65 + Math.floor(player.getCharisma() / 2); // at max, sell for 90.
            }
            else if (this.type == "speedPotionI")
            {
                //For All Items
                this.identity = "Elixer of Dexterity";
                this.weight = 0.5;
                this.size = 5;
                this.description = "A glimmering yellow liquid swirls around rapidly in the glass as if it itself is restless.";
                this.intForDes = 0;
                this.intDescription = "This potion magically enhances your dexterity.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = true; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 0; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 1; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "speedI";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 225 - Math.floor(player.getCharisma() / 1); // at max, buy for 175.
                this.sellValue = 95 + Math.floor(player.getCharisma() / 2); // at max, sell for 120.
            }
            else if (this.type == "etyrHide")
            {
                //For All Items
                this.identity = "Etyr Hide";
                this.weight = 1;
                this.size = 11;
                this.description = "Scaley hide from an Etyr.";
                this.intForDes = 6;
                this.intDescription = "This looks like it could sell for about 2 coins, but if I haggle I might be able to raise that to 5.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 9 - Math.floor(player.getCharisma() / 15); // at max, buy for 6.
                this.sellValue = 2 + Math.floor(player.getCharisma() / 15); // at max, sell for 5.
            }
            else if (this.type == "frichPelt")
            {
                //For All Items
                this.identity = "Frich Pelt";
                this.weight = 1;
                this.size = 12;
                this.description = "The foul smelling, mangy, grey pelt of a Frich.";
                this.intForDes = 4;
                this.intDescription = "This can be made into inexpensive clothing.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 5 - Math.floor(player.getCharisma() / 15); // at max, buy for 2.
                this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
            }
            else if (this.type == "blubber")
            {
                //For All Items
                this.identity = "Blubber";
                this.weight = 1;
                this.size = 10;
                this.description = "A glob of fat...";
                this.intForDes = 21;
                this.intDescription = "This can be used to make oil.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 14 - Math.floor(player.getCharisma() / 10); // at max, buy for 9.
                this.sellValue = 4 + Math.floor(player.getCharisma() / 10); // at max, sell for 9.
            }
            else if (this.type == "walrusTusks")
            {
                //For All Items
                this.identity = "Walrus Tusks";
                this.weight = 2;
                this.size = 12;
                this.description = "The tusks of a land walrus.";
                this.intForDes = 12;
                this.intDescription = "Walrus tusks are used in the creation of several Freydic weapons and armours.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 17 - Math.floor(player.getCharisma() / 6); // at max, buy for 9.
                this.sellValue = 3 + Math.floor(player.getCharisma() / 12.5); // at max, sell for 7.
            }
            else if (this.type == "elderWalrusTusks")
            {
                //For All Items
                this.identity = "Elder Walrus Tusks";
                this.weight = 7;
                this.size = 20;
                this.description = "The tusks of an elder walrus.";
                this.intForDes = 16;
                this.intDescription = "Elder Walrus tusks can sell for up to 37 coins and can be used to make specialized Freydic weapons and armour.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 59 - Math.floor(player.getCharisma() / 3); // at max, buy for 40.
                this.sellValue = 18 + Math.floor(player.getCharisma() / 3); // at max, sell for 37.
            }
            else if (this.type == "walrusHide")
            {
                //For All Items
                this.identity = "Walrus Hide";
                this.weight = 6;
                this.size = 35;
                this.description = "The hide of a land walrus.";
                this.intForDes = 15;
                this.intDescription = "Walrus hide is particularly thick and can be made into a number of different items!";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 16 - Math.floor(player.getCharisma() / 12.5); // at max, buy for 12.
                this.sellValue = 7 + Math.floor(player.getCharisma() / 10); // at max, sell for 12.
            }
            else if (this.type == "vomit")
            {
                //For All Items
                this.identity = "Vomit";
                this.weight = 1;
                this.size = 17;
                this.description = "This is well, vomit... Maybe I shouldn't be carrying this.";
                this.intForDes = 4;
                this.intDescription = "Vomiting usually occurs when a disease or poison affects hunger. A massive loss of hunger usually accompanies vomiting.";

                //Define Utility
                this.utility = "junk";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 0; // at max, buy for 0.
                this.sellValue = 0; // at max, sell for 0.
            }
            else if (this.type == "berulnPelt")
            {
                //For All Items
                this.identity = "Buruln Pelt";
                this.weight = 7;
                this.size = 38;
                this.description = "The pelt of a Beruln.";
                this.intForDes = 23;
                this.intDescription = "Beruln fur can be used to make warm clothing as well as to line fine Thengan Armours.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 116 - Math.floor(player.getCharisma() / 1); // at max, buy for 66.
                this.sellValue = 24 + Math.floor(player.getCharisma() / 1.25); // at max, sell for 64.
            }
            else if (this.type == "bigBerulnPelt")
            {
                //For All Items
                this.identity = "Large Buruln Pelt";
                this.weight = 10;
                this.size = 43;
                this.description = "The pelt of a Beruln.";
                this.intForDes = 23;
                this.intDescription = "Beruln fur can be used to make warm clothing as well as to line fine Thengan Armours.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 136 - Math.floor(player.getCharisma() / 1); // at max, buy for 86.
                this.sellValue = 34 + Math.floor(player.getCharisma() / 1.25); // at max, sell for 74.
            }
            else if (this.type == "berulnSkull")
            {
                //For All Items
                this.identity = "Beruln Skull";
                this.weight = 3;
                this.size = 11;
                this.description = "The skull of a beruln.";
                this.intForDes = 1;
                this.intDescription = "This beruln is not going to hurt anyone anymore...";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 98 - Math.floor(player.getCharisma() / 1); // at max, buy for 48.
                this.sellValue = 13 + Math.floor(player.getCharisma() / 2); // at max, sell for 38.
            }
            else if (this.type == "winterWolfPelt")
            {
                //For All Items
                this.identity = "Winter Wolf Pelt";
                this.weight = 2;
                this.size = 16;
                this.description = "The pale white fur of a winter wolf.";
                this.intForDes = 17;
                this.intDescription = "Winter wolf fur is used to make fine Freydic clothing.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 14 - Math.floor(player.getCharisma() / 8); // at max, buy for 10.
                this.sellValue = 5 + Math.floor(player.getCharisma() / 10); // at max, sell for 10.
            }
            else if (this.type == "massiveWinterWolfPelt")
            {
                //For All Items
                this.identity = "Massive Winter Wolf Pelt";
                this.weight = 6;
                this.size = 24;
                this.description = "The pale white fur of a monstrously huge winter wolf.";
                this.intForDes = 17;
                this.intDescription = "The fur from this rare breed of winter wolf is often made into clothing for those of higher class in Freydic society.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 85 - Math.floor(player.getCharisma() / 2); // at max, buy for 60.
                this.sellValue = 30 + Math.floor(player.getCharisma() / 2); // at max, sell for 55.
            }
            else if (this.type == "rawWinterWolfFlesh")
            {
                //For All Items
                this.identity = "Raw Winter Wolf Flesh";
                this.weight = 1;
                this.size = 14;
                this.description = "A tough slab of meat cut from a winter wolf.";
                this.intForDes = 2;
                this.intDescription = "Winter wolf flesh is a commonly used commodity in the land of the Freynor.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 1; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                if (player.raceName == "Freynor")
                {
                    this.generation = 0; //recoops lost energy.
                }
                else
                {
                    this.generation = -1; //recoops lost energy.
                }
                this.replenish = 0; //restores will.

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 7 - Math.floor(player.getCharisma() / 12.5); // at max, buy for 3.
                this.sellValue = 1 + Math.floor(player.getCharisma() / 50); // at max, sell for 2.
            }
            else if (this.type == "winterWolfMeat")
            {
                //For All Items
                this.identity = "Winter Wolf Meat";
                this.weight = 1;
                this.size = 14;
                this.description = "The cooked meat of a winter wolf.";
                this.intForDes = 4;
                this.intDescription = "The Freynor have adapted to this tough meat after many generations of traditional meals and recipes.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.thirst = 0; //quenches thirst.
                this.heal = 0; //heals health.
                this.replenish = 0; //restores will.
                if (player.raceName == "Freynor")
                {
                    this.hunger = 8; //satisfies hunger.
                    this.warmth = 2; //warms player.
                    this.generation = 0; //recoops lost energy.
                    //ability
                    this.ability = "satiate";
                }
                else
                {
                    this.hunger = 5; //satisfies hunger.
                    this.warmth = 0; //warms player.
                    this.generation = -1; //recoops lost energy.
                    //ability
                    this.ability = "none";
                }

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 12 - Math.floor(player.getCharisma() / 12.5); // at max, buy for 8.
                this.sellValue = 5 + Math.floor(player.getCharisma() / 8); // at max, sell for 8.
            }
            else if (this.type == "rawWolfLiver")
            {
                //For All Items
                this.identity = "Raw Wolf Liver";
                this.weight = 0.5;
                this.size = 9;
                this.description = "The liver organ of a wolf.";
                this.intForDes = 6;
                this.intDescription = "Wolf Livers can make a wholesome food when cooked and has alchemical properties while raw.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 1; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 11 - Math.floor(player.getCharisma() / 25); // at max, buy for 9.
                this.sellValue = 4 + Math.floor(player.getCharisma() / 10); // at max, sell for 9.
            }
            else if (this.type == "wolfLiver")
            {
                //For All Items
                this.identity = "Wolf Liver";
                this.weight = 0.5;
                this.size = 9;
                this.description = "Cooked liver from a wolf.";
                this.intForDes = 3;
                this.intDescription = "High iron content!";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 4; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 1; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0.25; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 8 - Math.floor(player.getCharisma() / 15); // at max, buy for 5.
                this.sellValue = 2 + Math.floor(player.getCharisma() / 15); // at max, sell for 5.
            }
            else if (this.type == "elderWalrusHide")
            {
                //For All Items
                this.identity = "Elder Walrus Hide";
                this.weight = 17;
                this.size = 45;
                this.description = "The hide of an elder walrus.";
                this.intForDes = 20;
                this.intDescription = "Elder Walrus hide can be made into a unique freydic armor!";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 120 - Math.floor(player.getCharisma() / 1); // at max, buy for 70.
                this.sellValue = 43 + Math.floor(player.getCharisma() / 3); // at max, sell for 59.
            }
            else if (this.type == "gulfreyShell")
            {
                //For All Items
                this.identity = "Gulfrey Shell Section";
                this.weight = 3;
                this.size = 17;
                this.description = "A piece of a gulfrey's shell plating.";
                this.intForDes = 30;
                this.intDescription = "Gulfreys are hot blooded and their shell helps to retain their heat in the frozen climates they inhabit.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 59 - Math.floor(player.getCharisma() / 2); // at max, buy for 34.
                this.sellValue = 8 + Math.floor(player.getCharisma() / 5); // at max, sell for 18.
            }
            else if (this.type == "gulfreyMandibles")
            {
                //For All Items
                this.identity = "Gulfrey Mandibles";
                this.weight = 3;
                this.size = 17;
                this.description = "The mandibles of a gulfrey.";
                this.intForDes = 2;
                this.intDescription = "Gulfreys use their mandibles to grab and devour their prey.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 29 - Math.floor(player.getCharisma() / 5); // at max, buy for 19.
                this.sellValue = 5 + Math.floor(player.getCharisma() / 5); // at max, sell for 15.
            }
            else if (this.type == "rawGulfreyFlesh")
            {
                //For All Items
                this.identity = "Raw Gulfrey Flesh";
                this.weight = 1;
                this.size = 17;
                this.description = "The slick and tender meat of a gulfrey. It has a sweet and meaty flavor.";
                this.intForDes = 12;
                this.intDescription = "The meat is supposed to be eaten raw, because when it is cooked it curdles and darkens.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 6; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 1; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 14 - Math.floor(player.getCharisma() / 10); // at max, buy for 9.
                this.sellValue = 3 + Math.floor(player.getCharisma() / 10); // at max, sell for 8.
            }
            else if (this.type == "gulfreyMeat")
            {
                //For All Items
                this.identity = "Gulfrey Meat";
                this.weight = 1;
                this.size = 17;
                this.description = "The cooked gulfrey meat is curdled, gooey, and quite frankly, disgusting!";
                this.intForDes = 8;
                this.intDescription = "Gulfrey meat is not meant to be cooked; cooking the meat ruins it.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 1; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "foodPoisoning";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 0; // at max, buy for 0.
                this.sellValue = 0; // at max, sell for 0.
            }
            else if (this.type == "rawTorperFlesh")
            {
                //For All Items
                this.identity = "Raw Torper Flesh";
                this.weight = 1;
                this.size = 14;
                this.description = "The slick and rubbery flesh of a Torper.";
                this.intForDes = 9;
                this.intDescription = "Although the meat has no negative properties raw, it tastes much better cooked.";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 1; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 11 - Math.floor(player.getCharisma() / 10); // at max, buy for 6.
                this.sellValue = 4 + Math.floor(player.getCharisma() / 25); // at max, sell for 6.
            }
            else if (this.type == "torperMeat")
            {
                //For All Items
                this.identity = "Torper Meat";
                this.weight = 1;
                this.size = 14;
                this.description = "The mild, yet scrumptious meat of a Torper.";
                this.intForDes = 2;
                this.intDescription = "The meat is a bit chewy, but not tough at all, perhaps it would go well with some honey...";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 14; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "satiate";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 17 - Math.floor(player.getCharisma() / 25); // at max, buy for 15.
                this.sellValue = 10 + Math.floor(player.getCharisma() / 15); // at max, sell for 13.
            }
            else if (this.type == "torperVenomSac")
            {
                //For All Items
                this.identity = "Torper Venom Sac";
                this.weight = 1;
                this.size = 10;
                this.description = "A torper's venom producing gland that is swolen with the venom it has created so far.";
                this.intForDes = 0;
                this.intDescription = "Oh by the way, don't eat it...";

                //Define Utility
                this.utility = "food";

                //Utility Focused
                this.isRegenerative = false; //if this is true heal, generation, and restore show up in the item's description.
                this.hunger = 0; //satisfies hunger.
                this.thirst = 0; //quenches thirst.
                this.warmth = 0; //warms player.
                this.heal = 0; //heals health.
                this.generation = 0; //recoops lost energy.
                this.replenish = 0; //restores will.

                //ability
                this.ability = "poisonIII";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 45 - Math.floor(player.getCharisma() / 3); // at max, buy for 29.
                this.sellValue = 9 + Math.floor(player.getCharisma() / 2.5); // at max, sell for 29.
            }
            else if (this.type == "torperFuzz")
            {
                //For All Items
                this.identity = "Torper Fuzz";
                this.weight = 1;
                this.size = 15;
                this.description = "The fur from a torper.";
                this.intForDes = 44;
                this.intDescription = "Torper fuzz is highly valuable and used in expensive clothing manufacture. Not only must the fuzz be procured from a torper, a giant deadly flying insect, the individual harvesting it must be extremely skilled or else it will come off in shreds.";

                //Define Utility
                this.utility = "material";

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 90 - Math.floor(player.getCharisma() / 1.63); // at max, buy for 60.
                this.sellValue = 30 + Math.floor(player.getCharisma() / 1.63); // at max, sell for 60.
            }
            else if (this.type == "mace")
            {
                //For All Items
                this.identity = "Mace";
                this.weight = 4;
                this.size = 19;
                this.description = "An average sized iron mace.";
                this.intForDes = 4;
                this.intDescription = "This looks like it could do some good against light armoured enemies.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 2;
                this.range = 1;
                this.rate = 10;
                this.damage = (3 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 3;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 18 - Math.floor(player.getCharisma() / 6); // at max, buy for 12.
                this.sellValue = 7 + Math.floor(player.getCharisma() / 10); // at max, sell for 12.
            }
            else if (this.type == "freydicSword")
            {
                //For All Items
                this.identity = "Longsword";
                this.weight = 4;
                this.size = 16;
                this.description = "A longsword made of mostly steel but forged with just a hint of jvostran ore.";
                this.intForDes = 3;
                this.intDescription = "This sword looks to be Freynor in origin.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 5;
                this.range = 5;
                this.rate = 10;
                this.damage = 5 * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 38 - Math.floor(player.getCharisma() / 3); // at max, buy for 22.
                this.sellValue = 14 + Math.floor(player.getCharisma() / 10); // at max, sell for 19.
            }
            else if (this.type == "pickaxe")
            {
                //For All Items
                this.identity = "Pickaxe";
                this.weight = 2;
                this.size = 15;
                this.description = "An iron pickaxe used for mining.";
                this.intForDes = 4;
                this.intDescription = "A pickaxe is required for mining ore.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 2.5;
                this.range = 3;
                this.rate = 10;
                this.damage = 2 * (this.leveledDamageMultiple / 25);
                this.magicalDamage = 0;
                this.negateArmour = 4;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 26 - Math.floor(player.getCharisma() / 5); // at max, buy for 16.
                this.sellValue = 9 + Math.floor(player.getCharisma() / 10); // at max, sell for 14.
            }
            else if (this.type == "longbow")
            {
                //For All Items
                this.identity = "Long Bow";
                this.weight = 2;
                this.size = 23;
                this.description = "A well crafted long bow carved from fine and flexible wood and strung with an equally durable bowstring.";
                this.intForDes = 4;
                this.intDescription = "Long bows are known for their superior range!";

                //Define Utility
                this.utility = "ranged";
                    //Sub Utility
                this.subUtility = "bow";

                //Utility Focused
                this.range = 1800 + (500 * player.getRanged() / 50);
                this.rate = Math.max(0.1, 35 - (34 * player.getRanged() / 50));
                this.speed = 5 + (3 * player.getRanged() / 50);
                this.negateArmour = (2 * player.getRanged() / 50);

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 44 - Math.floor(player.getCharisma() / 8); // at max, buy for 38.
                this.sellValue = 23 + Math.floor(player.getCharisma() / 3); // at max, sell for 38.
            }
            else if (this.type == "arrow")
            {
                //For All Items
                this.identity = "Iron Arrow";
                this.weight = 0.05;
                this.size = 8;
                this.description = "An arrow with a sharp iron pointed tip";
                this.intForDes = 4;
                this.intDescription = "It is the arrow that determines the damage, not the bow.";

                //Define Utility
                this.utility = "ammunition";
                //Sub Utility
                this.subUtility = "arrow";
                this.subUtilityName = "Arrow";

                //Utility Focused
                this.damage = 3 * (1 + player.getRanged() / 25);
                this.magicalDamage = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 3 - Math.floor(player.getCharisma() / 25); // at max, buy for 1.
                this.sellValue = 1; // at max, sell for 1.
            }
            else if (this.type == "aldrekiiArrow")
            {
                //For All Items
                this.identity = "Aldrekii Arrow";
                this.weight = 0.05;
                this.size = 8;
                this.description = "A meticulously and skillfully crafted arrow of Aldrekii design.";
                this.intForDes = 4;
                this.intDescription = "The Aldrek are famed for their talent in archery, but also for their expertly crafted bows and arrows.";

                //Define Utility
                this.utility = "ammunition";
                //Sub Utility
                this.subUtility = "arrow";
                this.subUtilityName = "Arrow";

                //Utility Focused
                this.damage = 7 * (1 + player.getRanged() / 25);
                this.magicalDamage = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 20 - Math.floor(player.getCharisma() / 10); // at max, buy for 15.
                this.sellValue = 5 + Math.floor(player.getCharisma() / 10); // at max, sell for 10.
            }
            else if (this.type == "walrusLeatherArmour")
            {
                //For All Items
                this.identity = "Walrus Leather Armour";
                this.weight = 3;
                this.size = 26;
                this.description = "Armour made from the hide of a land walrus.";
                this.intForDes = 3;
                this.intDescription = "This armour helps you to retain warmth and endure cold climates!";

                //Define Utility
                this.utility = "worn";
                    //the type of armour/clothing it is...
                    this.subUtility = "armour";
                //Utility Focused
                    //protections
                this.protection = 5 * ((player.toughness / 100) + 1);
                this.toughnessRequirement = 4;
                this.eminenceRequirement = 0;
                this.magicalProtection = 0;
                this.warmthRetention = 1;
                this.thirstRetention = - 0.25;
                    //Main Stat Bonuses
                this.strengthBonus = 0;
                this.enduranceBonus = 0;
                this.toughnessBonus = 0;
                this.intelligenceBonus = 0;
                this.charismaBonus = 0;
                this.rangedBonus = 0;
                this.constitutionBonus = 0;
                this.staminaBonus = 0;
                this.dexterityBonus = 0;
                this.stealthBonus = 0;
                    //Extra Stat Bonuses
                this.hungerBonus = 0;
                this.thirstBonus = 0;
                this.warmthBonus = 0;
                    //Magical Stat Bonuses
                this.eminenceBonus = 0;
                this.willpowerBonus = 0;
                this.knowledgeBonus = 0;
                this.concentrationBonus = 0;
                this.memoryBonus = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 71 - Math.floor(player.getCharisma() / 3); // at max, buy for 56.
                this.sellValue = 29 + Math.floor(player.getCharisma() / 2); // at max, sell for 54.
            }
            else if (this.type == "gulfreyShellArmour")
            {
                //For All Items
                this.identity = "Gulfrey Shell Plate Armour";
                this.weight = 12;
                this.size = 26;
                this.description = "Armour made from the shell sections of a gulfrey.";
                this.intForDes = 6;
                this.intDescription = "This armour is particularly light compared to metal plate armours.";

                //Define Utility
                this.utility = "worn";
                //the type of armour/clothing it is...
                this.subUtility = "armour";
                //Utility Focused
                //protections
                this.protection = 10 * ((player.toughness / 100) + 1);
                this.toughnessRequirement = 10;
                this.eminenceRequirement = 0;
                this.magicalProtection = 0;
                this.warmthRetention = 0;
                this.thirstRetention = 0;
                //Main Stat Bonuses
                this.strengthBonus = 0;
                this.enduranceBonus = 0;
                this.toughnessBonus = 0;
                this.intelligenceBonus = 0;
                this.charismaBonus = 3;
                this.rangedBonus = -3;
                this.constitutionBonus = 0;
                this.staminaBonus = 0;
                this.dexterityBonus = -1;
                this.stealthBonus = -12;
                //Extra Stat Bonuses
                this.hungerBonus = 0;
                this.thirstBonus = 0;
                this.warmthBonus = 0;
                //Magical Stat Bonuses
                this.eminenceBonus = 0;
                this.willpowerBonus = 0;
                this.knowledgeBonus = 0;
                this.concentrationBonus = 0;
                this.memoryBonus = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 194 - Math.floor(player.getCharisma() / 1); // at max, buy for 144.
                this.sellValue = 90 + Math.floor(player.getCharisma() / 1); // at max, sell for 140.
            }
            else if (this.type == "chainArmour")
            {
                //For All Items
                this.identity = "Chain Mail Armour";
                this.weight = 15;
                this.size = 26;
                this.description = "Armour made from many small interconnected steel rings.";
                this.intForDes = 2;
                this.intDescription = "This armour is often used by a kingdom's soldiers because it is effective yet cheap enough to equip an army with.";

                //Define Utility
                this.utility = "worn";
                //the type of armour/clothing it is...
                this.subUtility = "armour";
                //Utility Focused
                //protections
                this.protection = 8 * ((player.toughness / 100) + 1);
                this.toughnessRequirement = 7;
                this.eminenceRequirement = 0;
                this.magicalProtection = 0;
                this.warmthRetention = 0;
                this.thirstRetention = 0;
                //Main Stat Bonuses
                this.strengthBonus = 0;
                this.enduranceBonus = 0;
                this.toughnessBonus = 0;
                this.intelligenceBonus = 0;
                this.charismaBonus = 0;
                this.rangedBonus = -2;
                this.constitutionBonus = 0;
                this.staminaBonus = 0;
                this.dexterityBonus = -4;
                this.stealthBonus = -15;
                //Extra Stat Bonuses
                this.hungerBonus = 0;
                this.thirstBonus = 0;
                this.warmthBonus = 0;
                //Magical Stat Bonuses
                this.eminenceBonus = 0;
                this.willpowerBonus = 0;
                this.knowledgeBonus = 0;
                this.concentrationBonus = 0;
                this.memoryBonus = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 95 - Math.floor(player.getCharisma() / 3); // at max, buy for 80.
                this.sellValue = 65 + Math.floor(player.getCharisma() / 3); // at max, sell for 80.
            }
            else if (this.type == "blackChainArmour")
            {
                //For All Items
                this.identity = "Black Chain Mail Armour";
                this.weight = 18;
                this.size = 26;
                this.description = "Armour made from many small interconnected rings of tempered nechrovite.";
                this.intForDes = 13;
                this.intDescription = "This armour is generally worn by soldiers in Vardania due to the land's abundance of nechrovite.";

                //Define Utility
                this.utility = "worn";
                //the type of armour/clothing it is...
                this.subUtility = "armour";
                //Utility Focused
                //protections
                this.protection = 9 * ((player.toughness / 100) + 1);
                this.toughnessRequirement = 9;
                this.eminenceRequirement = 0;
                this.magicalProtection = 0;
                this.warmthRetention = 0;
                this.thirstRetention = 0;
                //Main Stat Bonuses
                this.strengthBonus = 0;
                this.enduranceBonus = 0;
                this.toughnessBonus = 0;
                this.intelligenceBonus = 0;
                this.charismaBonus = 0;
                this.rangedBonus = -2;
                this.constitutionBonus = 0;
                this.staminaBonus = 0;
                this.dexterityBonus = -5;
                this.stealthBonus = -20;
                //Extra Stat Bonuses
                this.hungerBonus = 0;
                this.thirstBonus = 0;
                this.warmthBonus = 0;
                //Magical Stat Bonuses
                this.eminenceBonus = 0;
                this.willpowerBonus = 0;
                this.knowledgeBonus = 0;
                this.concentrationBonus = 0;
                this.memoryBonus = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 139 - Math.floor(player.getCharisma() / 3); // at max, buy for 124.
                this.sellValue = 100 + Math.floor(player.getCharisma() / 2.5); // at max, sell for 120.
            }
            else if (this.type == "longsword")
            {
                //For All Items
                this.identity = "Longsword";
                this.weight = 3;
                this.size = 30;
                this.description = "A well forged longsword.";
                this.intForDes = 5;
                this.intDescription = "This style of longsword is made in the lands of Thengar.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 6;
                this.range = 4.5;
                this.rate = 15;
                this.damage = (7 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 28 - Math.floor(player.getCharisma() / 4); // at max, buy for 15.
                this.sellValue = 11 + Math.floor(player.getCharisma() / 12.4); // at max, sell for 15.
            }
            else if (this.type == "freydicWarAxe")
            {
                //For All Items
                this.identity = "Freydic War Axe";
                this.weight = 8;
                this.size = 30;
                this.description = "A powerful Freynor great axe.";
                this.intForDes = 25;
                this.intDescription = "Used by the Freynor as both a hunting weapon and a weapon of war.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 15;
                this.range = 5.4;
                this.rate = 15;
                this.damage = (11 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 2;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 175 - Math.floor(player.getCharisma() / 1); // at max, buy for 125.
                this.sellValue = 75 + Math.floor(player.getCharisma() / 1); // at max, sell for 125.
            }
            else if (this.type == "freydicSpear")
            {
                //For All Items
                this.identity = "Freydic Spear";
                this.weight = 3;
                this.size = 30;
                this.description = "A Freydic spear used for hunting.";
                this.intForDes = 1;
                this.intDescription = "The Freydic spear is simply made with a wooden shaft wrapped in leather for the handle and a tip carved from bone.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 2;
                this.range = 2.8;
                this.rate = 15;
                this.damage = (4 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/25) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 19 - Math.floor(player.getCharisma() / 5); // at max, buy for 9.
                this.sellValue = 7 + Math.floor(player.getCharisma() / 25); // at max, sell for 9.
            }
            else if (this.type == "vardanianAxe")
            {
                //For All Items
                this.identity = "Small War Axe";
                this.weight = 1;
                this.size = 20;
                this.description = "A small axe forged for war.";
                this.intForDes = 1;
                this.intDescription = "This axe is of Vardanian design.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 1;
                this.range = 2.5;
                this.rate = 15;
                this.damage = (3 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/50) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 11 - Math.floor(player.getCharisma() / 12.5); // at max, buy for 7.
                this.sellValue = 3 + Math.floor(player.getCharisma() / 12.5); // at max, sell for 7.
            }
            else if (this.type == "vardanianAxeDual")
            {
                //For All Items
                this.identity = "Twin War Axes";
                this.weight = 2;
                this.size = 25;
                this.description = "Two small axes forged for war.";
                this.intForDes = 1;
                this.intDescription = "One axe per hand, that's how the Vardanians do it...";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 3;
                this.range = 3.25;
                this.rate = 15;
                this.damage = (6 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/25) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 27 - Math.floor(player.getCharisma() / 5); // at max, buy for 17.
                this.sellValue = 8 + Math.floor(player.getCharisma() / 8); // at max, sell for 14.
            }
            else if (this.type == "nirineseSabre")
            {
                //For All Items
                this.identity = "Nirinese Sabre";
                this.weight = 4;
                this.size = 30;
                this.description = "A deadly Nirwaden sabre made from hardened thrice forged steel.";
                this.intForDes = 3;
                this.intDescription = "The sabre is one of the most frequently used weapons by the Nirinese.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 7;
                this.range = 5.4;
                this.rate = 15;
                this.damage = (8 - this.damageHandicap) * (this.leveledDamageMultiple / 25) + ((1/10) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 57 - Math.floor(player.getCharisma() / 5); // at max, buy for 47.
                this.sellValue = 22 + Math.floor(player.getCharisma() / 2); // at max, sell for 47.
            }
            else if (this.type == "blueBlade")
            {
                //For All Items
                this.identity = "Ruhn-kor-gren";
                this.weight = 23;
                this.size = 32;
                this.description = "A Freydic greatsword made out of pure jvostran ore.";
                this.intForDes = 36;
                this.intDescription = "pronounced: | Run | Kar | Gren | The name means strong, long and sharp in Ancient Freydic.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 23;
                this.range = 7;
                this.rate = 12;
                this.damage = (19 - this.damageHandicap - this.damageHandicapII) * (this.leveledDamageMultiple / 25) + ((1/25) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 640 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 540.
                this.sellValue = 219 + Math.floor(player.getCharisma() / 0.4); // at max, sell for 344.
            }
            else if (this.type == "flail")
            {
                //For All Items
                this.identity = "Flail";
                this.weight = 17;
                this.size = 24;
                this.description = "A heavy spiked metal ball attached to a handle by a chain.";
                this.intForDes = 3;
                this.intDescription = "Spikey crushy death death!";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 25;
                this.range = 6;
                this.rate = 12;
                this.damage = (17 - this.damageHandicap - this.damageHandicapII) * (this.leveledDamageMultiple / 25) + ((1/12.5) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 11;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 435 - Math.floor(player.getCharisma() / 0.25); // at max, buy for 235.
                this.sellValue = 195 + Math.floor(player.getCharisma() / 2); // at max, sell for 220.
            }
            else if (this.type == "aldrekiiBardiche")
            {
                //For All Items
                this.identity = "Aldrekii Bardiche";
                this.weight = 11;
                this.size = 32;
                this.description = "A long reaching pole axe forged by the Aldrek.";
                this.intForDes = 2;
                this.intDescription = "This weapon is used to attack enemies whilst maintaining a safe distance from them.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 20;
                this.range = 3.6;
                this.rate = 15;
                this.damage = (17 - this.damageHandicap - this.damageHandicapII) * (this.leveledDamageMultiple / 25) + Math.floor(((1/6.6) * player.getStrength()));
                this.magicalDamage = 0;
                this.negateArmour = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 274 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 174.
                this.sellValue = 118 + Math.floor(player.getCharisma() / 1); // at max, sell for 168.
            }
            else if (this.type == "aldrekiiBlade")
            {
                //For All Items
                this.identity = "Aldrekii War Blade";
                this.weight = 3;
                this.size = 32;
                this.description = "A deeply curved blade forged by the aldrekii.";
                this.intForDes = 13;
                this.intDescription = "This blade was designed to be used in a quick fighting style.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 1.5;
                this.range = 5;
                this.rate = 15;
                this.damage = (5 - this.damageHandicap) * (this.leveledDamageMultiple / 25);
                this.magicalDamage = 0;
                this.negateArmour = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 35 - Math.floor(player.getCharisma() / 10); // at max, buy for 30.
                this.sellValue = 14 + Math.floor(player.getCharisma() / 3); // at max, sell for 29.
            }
            else if (this.type == "freydicGreatSword")
            {
                //For All Items
                this.identity = "Greatsword";
                this.weight = 12;
                this.size = 35;
                this.description = "A powerful steel great sword of Freydic design.";
                this.intForDes = 1;
                this.intDescription = "It takes some strength to swing this blade effectively.";

                //Define Utility
                this.utility = "weapon";

                //Utility Focused
                this.energyCost = 18;
                this.range = 8; //was 8.3
                this.rate = 15;
                this.damage = (15 - (this.damageHandicap * 7)) * (this.leveledDamageMultiple / 25) + ((1/25) * player.getStrength());
                this.magicalDamage = 0;
                this.negateArmour = 0;

                //ability
                this.ability = "none";

                //Prices (these are standards and do not necessarily represent the exact amount every shop will trade them for)
                this.buyValue = 268 - Math.floor(player.getCharisma() / 0.5); // at max, buy for 168.
                this.sellValue = 110 + Math.floor(player.getCharisma() / 1); // at max, sell for 160.
            }
        };

        //This draws items onto the map.
        this.drawItem = function()
        {
            if (this.type == "coins")
            {
                for (var i = 0; i < worldItems.length; i++)
                {
                    if (worldItems[i][0] === this)
                    {
                        if (worldItems[i][1] <= 10)
                        {
                            XXX.beginPath();
                            XXX.drawImage(polyPNG, 405, 7, 6, 4, X - this.X + (1/2 * CCC.width) - (1/2 * 6), Y - this.Y + (1/2 * CCC.height) - (1/2 * 4), 6, 4);
                            worldItems[i][0].size = 7;
                        }
                        else if (worldItems[i][1] > 10 && worldItems[i][1] <= 199)
                        {
                            XXX.beginPath();
                            XXX.drawImage(polyPNG, 405, 4, 16, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 16, 17);
                            worldItems[i][0].size = 14;
                        }
                        else if (worldItems[i][1] > 199 && worldItems[i][1] <= 549)
                        {
                            XXX.beginPath();
                            XXX.drawImage(polyPNG, 482, 32, 22, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 22), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22), 22, 22);
                            worldItems[i][0].size = 21;
                        }
                        else if (worldItems[i][1] > 549 && worldItems[i][1] <= 2999)
                        {
                            XXX.beginPath();
                            XXX.drawImage(polyPNG, 418, 21, 27, 29, X - this.X + (1/2 * CCC.width) - (1/2 * 27), Y - this.Y + (1/2 * CCC.height) - (1/2 * 29), 27, 29);
                            worldItems[i][0].size = 28;
                        }
                        else if (worldItems[i][1] > 2999)
                        {
                            XXX.beginPath();
                            XXX.drawImage(polyPNG, 948, 5, 56, 50, X - this.X + (1/2 * CCC.width) - (1/2 * 56), Y - this.Y + (1/2 * CCC.height) - (1/2 * 50), 56, 50);
                            worldItems[i][0].size = 32;
                        }
                    }
                }
            }
            else if (this.type == "rawTrollsBlood")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 452, 33, 8, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 12), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 12, 21);
            }
            else if (this.type == "glassJar")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 465, 33, 8, 14, X - this.X + (1/2 * CCC.width) - (1/2 * 12), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 12, 21);
            }
            else if (this.type == "chainArmour")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 38, 310, 40, 61, X - this.X + (1/2 * CCC.width) - (1/2 * 60), Y - this.Y + (1/2 * CCC.height) - (1/2 * 91.5), 60, 91.5);
            }
            else if (this.type == "blackChainArmour")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 80, 310, 40, 61, X - this.X + (1/2 * CCC.width) - (1/2 * 60), Y - this.Y + (1/2 * CCC.height) - (1/2 * 91.5), 60, 91.5);
            }
            else if (this.type == "freydicGreatSword")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 126, 302, 16, 70, X - this.X + (1/2 * CCC.width) - (1/2 * 19.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 84), 19.2, 84);
            }
            else if (this.type == "hugeBogTrollSkull")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 63, 264, 45, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 67.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 54), 67.5, 54);
            }
            else if (this.type == "bogTrollSkull")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 63, 264, 45, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 45), Y - this.Y + (1/2 * CCC.height) - (1/2 * 36), 49.5, 39.6);
            }
            else if (this.type == "babyBogTrollSkull")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 63, 264, 45, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 22.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 22.5, 18);
            }
            else if (this.type == "trollFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2875, 1, 19, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 38), Y - this.Y + (1/2 * CCC.height) - (1/2 * 36), 38, 36);
            }
            else if (this.type == "trollMeat")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2900, 1, 19, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 38), Y - this.Y + (1/2 * CCC.height) - (1/2 * 36), 38, 36);
            }
            else if (this.type == "aldrekiiArrow")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2832, 3, 41, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 32), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12), 32, 12);
            }
            else if (this.type == "rawWolfLiver")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2769, 2, 10, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 10, 15);
            }
            else if (this.type == "wolfLiver")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2782, 2, 10, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 10, 15);
            }
            else if (this.type == "winterWolfMeat")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2812, 1, 14, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 21), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 21, 24);
            }
            else if (this.type == "rawWinterWolfFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2794, 1, 14, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 21), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 21, 24);
            }
            else if (this.type == "winterWolfPelt")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2737, 2, 29, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 52.2), Y - this.Y + (1/2 * CCC.height) - (1/2 * 28.8), 52.2, 28.8);
            }
            else if (this.type == "massiveWinterWolfPelt")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2737, 2, 29, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 92.8), Y - this.Y + (1/2 * CCC.height) - (1/2 * 51.2), 92.8, 51.2);
            }
            else if (this.type == "energyPotionI")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 38, 267, 10, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 10, 17);
            }
            else if (this.type == "speedPotionI")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 86, 134, 10, 17, X - this.X + (1/2 * CCC.width) - (1/2 * 10), Y - this.Y + (1/2 * CCC.height) - (1/2 * 17), 10, 17);
            }
            else if (this.type == "cleansingPotion")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 35, 134, 11, 19, X - this.X + (1/2 * CCC.width) - (1/2 * 11), Y - this.Y + (1/2 * CCC.height) - (1/2 * 19), 11, 19);
            }
            else if (this.type == "freydicSword")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2089, 2, 13, 46, X - this.X + (1/2 * CCC.width) - (1/2 * 16.25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 57.5), 16.25, 57.5);
            }
            else if (this.type == "pickaxe")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 103, 233, 22, 26, X - this.X + (1/2 * CCC.width) - (1/2 * 33), Y - this.Y + (1/2 * CCC.height) - (1/2 * 39), 33, 39);
            }
            else if (this.type == "aldrekiiBlade")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2057, 4, 20, 45, X - this.X + (1/2 * CCC.width) - (1/2 * 24), Y - this.Y + (1/2 * CCC.height) - (1/2 * 54), 24, 54);
            }
            else if (this.type == "flail")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1995, 1, 37, 33, X - this.X + (1/2 * CCC.width) - (1/2 * 55.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 49.5), 55.5, 49.5);
            }
            else if (this.type == "torperVenomSac")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 40, 226, 17, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 17), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 17, 16);
            }
            else if (this.type == "torperFuzz")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1867, 9, 23, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 23), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20), 23, 20);
            }
            else if (this.type == "rawTorperFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1894, 3, 18, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11), 18, 11);
            }
            else if (this.type == "torperMeat")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1895, 16, 18, 11, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 11), 18, 11);
            }
            else if (this.type == "gulfreyShellArmour")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1, 157, 36, 63, X - this.X + (1/2 * CCC.width) - (1/2 * 36), Y - this.Y + (1/2 * CCC.height) - (1/2 * 63), 49.4, 90.6);
            }
            else if (this.type == "frichPelt")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1832, 10, 31, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 31), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 31, 18);
            }
            else if (this.type == "rawFrichFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 65, 226, 10, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 20, 24);
            }
            else if (this.type == "frichMeat")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 79, 227, 10, 12, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 24), 20, 24);
            }
            else if (this.type == "vardanianAxe")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 53, 158, 37, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 37), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22), 37, 22);
            }
            else if (this.type == "vardanianAxeDual")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 48, 187, 31, 35, X - this.X + (1/2 * CCC.width) - (1/2 * 31), Y - this.Y + (1/2 * CCC.height) - (1/2 * 35), 31, 35);
            }
            else if (this.type == "gulfreyShell")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 48, 41, 31, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 31), Y - this.Y + (1/2 * CCC.height) - (1/2 * 23), 31, 23);
            }
            else if (this.type == "freydicSpear")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 4, 227, 20, 75, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 75), 20, 75);
            }
            else if (this.type == "gulfreyMandibles")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2, 92, 33, 33, X - this.X + (1/2 * CCC.width) - (1/2 * 33), Y - this.Y + (1/2 * CCC.height) - (1/2 * 33), 33, 33);
            }
            else if (this.type == "rawGulfreyFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 37, 9, 20, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20), 20, 20);
            }
            else if (this.type == "gulfreyMeat")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 66, 9, 20, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 20), Y - this.Y + (1/2 * CCC.height) - (1/2 * 20), 20, 20);
            }
            else if (this.type == "vomit")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 55, 135, 24, 21, X - this.X + (1/2 * CCC.width) - (1/2 * 24), Y - this.Y + (1/2 * CCC.height) - (1/2 * 21), 24, 21);
            }
            else if (this.type == "gojiiBerries")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 615, 3, 19, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 19), Y - this.Y + (1/2 * CCC.height) - (1/2 * 15), 19, 15);
            }
            else if (this.type == "nirineseSabre")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 7, 7, 26, 80, X - this.X + (1/2 * CCC.width) - (1/2 * 26), Y - this.Y + (1/2 * CCC.height) - (1/2 * 80), 26, 80);
            }
            else if (this.type == "arrow")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 432, 554, 20, 8, X - this.X + (1/2 * CCC.width) - (1/2 * 30), Y - this.Y + (1/2 * CCC.height) - (1/2 * 12), 20, 8);
            }
            else if (this.type == "ogoFruit")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 426, 4, 12, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 18), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22.5), 18, 22.5);
            }
            else if (this.type == "blueBlade")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 8, 531, 57, 63, X - this.X + (1/2 * CCC.width) - (1/2 * 68.4), Y - this.Y + (1/2 * CCC.height) - (1/2 * 75.6), 68.4, 75.6);
            }
            else if (this.type == "berulnSkull")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 446, 3, 15, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 30), Y - this.Y + (1/2 * CCC.height) - (1/2 * 40), 30, 40);
            }
            else if (this.type == "rawBerulnFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 526, 6, 21, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 31.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 34.5), 31.5, 34.5);
            }
            else if (this.type == "berulnMeat")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 506, 38, 21, 23, X - this.X + (1/2 * CCC.width) - (1/2 * 31.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 34.5), 31.5, 34.5);
            }
            else if (this.type == "bigBerulnPelt")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 465, 1, 51, 30, X - this.X + (1/2 * CCC.width) - (1/2 * 117.3), Y - this.Y + (1/2 * CCC.height) - (1/2 * 69), 117.3, 69);
            }
            else if (this.type == "berulnPelt")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 465, 1, 51, 30, X - this.X + (1/2 * CCC.width) - (1/2 * 102), Y - this.Y + (1/2 * CCC.height) - (1/2 * 60), 102, 60);
            }
            else if (this.type == "longbow")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 380, 593, 34, 34, X - this.X + (1/2 * CCC.width) - (1/2 * 51), Y - this.Y + (1/2 * CCC.height) - (1/2 * 51), 51, 51);
            }
            else if (this.type == "walrusLeatherArmour")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 734, 202, 52, 58, X - this.X + (1/2 * CCC.width) - (1/2 * 52), Y - this.Y + (1/2 * CCC.height) - (1/2 * 58), 72.8, 81.2);
            }
            else if (this.type == "rawWalrusFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 99, 4, 17, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 26.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30), 26.5, 30);
            }
            else if (this.type == "aldrekiiBardiche")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 580, 253, 42, 137, X - this.X + (1/2 * CCC.width) - (1/2 * 42), Y - this.Y + (1/2 * CCC.height) - (1/2 * 137), 35.6, 109.6);
            }
            else if (this.type == "rawWalrusFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 99, 4, 17, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 26.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30), 26.5, 30);
            }
            else if (this.type == "walrusMeat")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 257, 1, 17, 20, X - this.X + (1/2 * CCC.width) - (1/2 * 26.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 30), 26.5, 30);
            }
            else if (this.type == "walrusHide")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 287, 3, 45, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 112.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 55), 103.5, 50.6);
            }
            else if (this.type == "elderWalrusHide")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 287, 3, 45, 22, X - this.X + (1/2 * CCC.width) - (1/2 * 157.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 77), 148.5, 72.6);
            }
            else if (this.type == "blubber")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 368, 9, 12, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 24), Y - this.Y + (1/2 * CCC.height) - (1/2 * 26), 24, 26);
            }
            else if (this.type == "walrusTusks")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 341, 10, 17, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 42.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 32.5), 42.5, 32.5);
            }
            else if (this.type == "elderWalrusTusks")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 341, 10, 17, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 68), Y - this.Y + (1/2 * CCC.height) - (1/2 * 52), 68, 52);
            }
            else if (this.type == "mace")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 554, 10, 61, 36, X - this.X + (1/2 * CCC.width) - (1/2 * 61), Y - this.Y + (1/2 * CCC.height) - (1/2 * 36), 61, 36);
            }
            else if (this.type == "longsword")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 75, 366, 17, 47, X - this.X + (1/2 * CCC.width) - (1/2 * 17), Y - this.Y + (1/2 * CCC.height) - (1/2 * 47), 17, 64);
            }
            else if (this.type == "freydicWarAxe")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 17, 115, 113, 104, X - this.X + (1/2 * CCC.width) - (1/2 * 113), Y - this.Y + (1/2 * CCC.height) - (1/2 * 104), 113, 104);
            }
            else if (this.type == "rawEtyrFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 43, 684, 16, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13), 16, 13);
            }
            else if (this.type == "etyrMeat")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 73, 684, 16, 13, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 13), 16, 13);
            }
            else if (this.type == "etyrHide")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 37, 720, 25, 18, X - this.X + (1/2 * CCC.width) - (1/2 * 25), Y - this.Y + (1/2 * CCC.height) - (1/2 * 18), 25, 18);
            }
            else if (this.type == "trollsBlood")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 385, 7, 11, 15, X - this.X + (1/2 * CCC.width) - (1/2 * 16.5), Y - this.Y + (1/2 * CCC.height) - (1/2 * 22.5), 16.5, 22.5);
            }
            else if (this.type == "yaihefBerries")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 62, 508, 16, 16, X - this.X + (1/2 * CCC.width) - (1/2 * 16), Y - this.Y + (1/2 * CCC.height) - (1/2 * 16), 16, 16);
            }
        };

        this.drawInventoryItem = function(type, invX, invY)
        {
            this.invX = invX;
            this.invY = invY;
            this.type = type;

            if (this.type == "coins")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 405, 4, 16, 17, this.invX - (1/2 * 32), this.invY - (1/2 * 34), 32, 34);
            }
            else if (this.type == "rawTrollsBlood")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 452, 33, 8, 14, this.invX - (1/2 * 12), this.invY - (1/2 * 21), 12, 21);
            }
            else if (this.type == "glassJar")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 465, 33, 8, 14, this.invX - (1/2 * 12), this.invY - (1/2 * 21), 12, 21);
            }
            else if (this.type == "chainArmour")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 38, 310, 40, 61, this.invX - (1/2 * 40), this.invY - (1/2 * 61), 40, 61);
            }
            else if (this.type == "blackChainArmour")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 80, 310, 40, 61, this.invX - (1/2 * 40), this.invY - (1/2 * 61), 40, 61);
            }
            else if (this.type == "freydicGreatSword")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 126, 302, 16, 70, this.invX - (1/2 * 16), this.invY - (1/2 * 70), 16, 70);
            }
            else if (this.type == "hugeBogTrollSkull")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 67.5), this.invY - (1/2 * 54), 67.5, 54);
            }
            else if (this.type == "bogTrollSkull")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 45), this.invY - (1/2 * 36), 49.5, 39.6);
            }
            else if (this.type == "babyBogTrollSkull")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 22.5), this.invY - (1/2 * 18), 22.5, 18);
            }
            else if (this.type == "trollFlesh")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2875, 1, 19, 18, this.invX - (1/2 * 38), this.invY - (1/2 * 36), 38, 36);
            }
            else if (this.type == "trollMeat")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2900, 1, 19, 18, this.invX - (1/2 * 38), this.invY - (1/2 * 36), 38, 36);
            }
            else if (this.type == "aldrekiiArrow")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2832, 3, 41, 12, this.invX - (1/2 * 32), this.invY - (1/2 * 12), 32, 12);
            }
            else if (this.type == "rawWolfLiver")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2769, 2, 10, 15, this.invX - (1/2 * 15), this.invY - (1/2 * 22.5), 15, 22.5);
            }
            else if (this.type == "wolfLiver")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2782, 2, 10, 15, this.invX - (1/2 * 15), this.invY - (1/2 * 22.5), 15, 22.5);
            }
            else if (this.type == "winterWolfMeat")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2812, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
            }
            else if (this.type == "rawWinterWolfFlesh")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2794, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
            }
            else if (this.type == "winterWolfPelt")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2737, 2, 26, 16, this.invX - (1/2 * 34.8), this.invY - (1/2 * 19.2), 34.8, 19.2);
            }
            else if (this.type == "massiveWinterWolfPelt")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2737, 2, 29, 16, this.invX - (1/2 * 58), this.invY - (1/2 * 32), 58, 32);
            }
            else if (this.type == "energyPotionI")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 38, 267, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
            }
            else if (this.type == "speedPotionI")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 86, 134, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
            }
            else if (this.type == "cleansingPotion")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 35, 134, 11, 19, this.invX - (1/2 * 11), this.invY - (1/2 * 19), 11, 19);
            }
            else if (this.type == "freydicSword")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2089, 2, 13, 46, this.invX - (1/2 * 16.25), this.invY - (1/2 * 57.5), 16.25, 57.5);
            }
            else if (this.type == "pickaxe")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 103, 233, 22, 26, this.invX - (1/2 * 33), this.invY - (1/2 * 39), 33, 39);
            }
            else if (this.type == "aldrekiiBlade")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2057, 4, 20, 45, this.invX - (1/2 * 24), this.invY - (1/2 * 54), 24, 54);
            }
            else if (this.type == "flail")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 1995, 1, 37, 33, this.invX - (1/2 * 37), this.invY - (1/2 * 33), 37, 33);
            }
            else if (this.type == "torperVenomSac")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 40, 226, 17, 16, this.invX - (1/2 * 17), this.invY - (1/2 * 16), 17, 16);
            }
            else if (this.type == "torperFuzz")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 1867, 9, 23, 20, this.invX - (1/2 * 23), this.invY - (1/2 * 20), 23, 20);
            }
            else if (this.type == "rawTorperFlesh")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 1894, 3, 18, 11, this.invX - (1/2 * 18), this.invY - (1/2 * 11), 18, 11);
            }
            else if (this.type == "torperMeat")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 1895, 16, 18, 11, this.invX - (1/2 * 18), this.invY - (1/2 * 11), 18, 11);
            }
            else if (this.type == "gulfreyShellArmour")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 1, 157, 36, 63, this.invX - (1/2 * 36) + 2, this.invY - (1/2 * 63), 28.4, 59.6);
            }
            else if (this.type == "frichPelt")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 1832, 10, 31, 18, this.invX - (1/2 * 31), this.invY - (1/2 * 18), 31, 18);
            }
            else if (this.type == "rawFrichFlesh")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 65, 226, 10, 12, this.invX - (1/2 * 20), this.invY - (1/2 * 24), 20, 24);
            }
            else if (this.type == "frichMeat")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 79, 227, 10, 12, this.invX - (1/2 * 20), this.invY - (1/2 * 24), 20, 24);
            }
            else if (this.type == "vardanianAxe")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 53, 158, 37, 22, this.invX - (1/2 * 33.3), this.invY - (1/2 * 19.8), 33.3, 19.8);
            }
            else if (this.type == "vardanianAxeDual")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 48, 187, 31, 35, this.invX - (1/2 * 27.9), this.invY - (1/2 * 31.5), 27.9, 31.5);
            }
            else if (this.type == "freydicSpear")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 4, 227, 20, 75, this.invX - (1/2 * 17.5), this.invY - (1/2 * 56.75), 17.5, 56.75);
            }
            else if (this.type == "gulfreyShell")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 48, 41, 31, 23, this.invX - (1/2 * 31), this.invY - (1/2 * 23), 31, 23);
            }
            else if (this.type == "gulfreyMandibles")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 2, 92, 33, 33, this.invX - (1/2 * 26.6), this.invY - (1/2 * 26.6), 26.6, 26.6);
            }
            else if (this.type == "rawGulfreyFlesh")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 37, 9, 20, 20, this.invX - (1/2 * 20), this.invY - (1/2 * 20), 20, 20);
            }
            else if (this.type == "gulfreyMeat")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 66, 9, 20, 20, this.invX - (1/2 * 20), this.invY - (1/2 * 20), 20, 20);
            }
            else if (this.type == "vomit")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 55, 135, 24, 21, this.invX - (1/2 * 24), this.invY - (1/2 * 21), 24, 21);
            }
            else if (this.type == "gojiiBerries")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 615, 3, 19, 15, this.invX - (1/2 * 38), this.invY - (1/2 * 30), 38, 30);
            }
            else if (this.type == "nirineseSabre")
            {
                LXX.beginPath();
                LXX.drawImage(verse, 7, 7, 26, 80, this.invX - (1/2 * 19.5), this.invY - (1/2 * 60), 19.5, 60);
            }
            else if (this.type == "arrow")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 432, 554, 20, 8, this.invX - (1/2 * 40), this.invY - (1/2 * 16), 40, 16);
            }
            else if (this.type == "ogoFruit")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 426, 4, 12, 15, this.invX - (1/2 * 24), this.invY - (1/2 * 30), 24, 30);
            }
            else if (this.type == "blueBlade")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 8, 531, 57, 63, this.invX - (1/2 * 51.3), this.invY - (1/2 * 56.7), 51.3, 56.7);
            }
            else if (this.type == "berulnSkull")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 446, 3, 15, 20, this.invX - (1/2 * 22.5), this.invY - (1/2 * 30), 22.5, 30);
            }
            else if (this.type == "rawBerulnFlesh")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 526, 6, 21, 23, this.invX - (1/2 * 31.5), this.invY - (1/2 * 34.5), 31.5, 34.5);
            }
            else if (this.type == "berulnMeat")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 506, 38, 21, 23, this.invX - (1/2 * 31.5), this.invY - (1/2 * 34.5), 31.5, 34.5);
            }
            else if (this.type == "bigBerulnPelt")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 465, 1, 51, 30, this.invX - (1/2 * 76.5), this.invY - (1/2 * 45), 76.5, 45);
            }
            else if (this.type == "berulnPelt")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 465, 1, 51, 30, this.invX - (1/2 * 66.3), this.invY - (1/2 * 39), 66.3, 39);
            }
            else if (this.type == "longbow")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 380, 593, 34, 34, this.invX - (1/2 * 51), this.invY - (1/2 * 51), 51, 51);
            }
            else if (this.type == "walrusLeatherArmour")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 734, 202, 52, 58, this.invX - (1/2 * 52), this.invY - (1/2 * 58), 52, 58);
            }
            else if (this.type == "rawWalrusFlesh")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 99, 4, 17, 20, this.invX - (1/2 * 26.5), this.invY - (1/2 * 30), 26.5, 30);
            }
            else if (this.type == "aldrekiiBardiche")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 580, 253, 42, 137, this.invX - (1/2 * 21), this.invY - (1/2 * 68.5), 21, 68.5);
            }
            else if (this.type == "walrusMeat")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 257, 1, 17, 20, this.invX - (1/2 * 26.5), this.invY - (1/2 * 30), 26.5, 30);
            }
            else if (this.type == "walrusHide")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 287, 3, 45, 22, this.invX - (1/2 * 45), this.invY - (1/2 * 22), 45, 22);
            }
            else if (this.type == "elderWalrusHide")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 287, 3, 45, 22, this.invX - (1/2 * 90) + 7, this.invY - (1/2 * 44) + 4, 77.5, 33);
            }
            else if (this.type == "blubber")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 368, 9, 12, 13, this.invX - (1/2 * 24), this.invY - (1/2 * 26), 24, 26);
            }
            else if (this.type == "walrusTusks")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 341, 10, 17, 13, this.invX - (1/2 * 42.5), this.invY - (1/2 * 32.5), 42.5, 32.5);
            }
            else if (this.type == "elderWalrusTusks")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 341, 10, 17, 13, this.invX - (1/2 * 68), this.invY - (1/2 * 52), 68, 52);
            }
            else if (this.type == "mace")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 554, 10, 61, 36, this.invX - (1/2 * 61), this.invY - (1/2 * 38), 61, 36);
            }
            else if (this.type == "longsword")
            {
                LXX.beginPath();
                LXX.drawImage(theCrack, 75, 366, 17, 47, this.invX - (1/2 * 25.5), this.invY - (1/2 * 70.5) - 3, 25.5, 70.5);
            }
            else if (this.type == "rawEtyrFlesh")
            {
                LXX.beginPath();
                LXX.drawImage(theCrack, 43, 684, 16, 13, this.invX - (1/2 * 32), this.invY - (1/2 * 26), 32, 26);
            }
            else if (this.type == "freydicWarAxe")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 17, 115, 113, 104, this.invX - (1/2 * 90.4), this.invY - (1/2 * 83.2) + 4, 90.4, 83.2);
            }
            else if (this.type == "etyrMeat")
            {
                LXX.beginPath();
                LXX.drawImage(theCrack, 73, 684, 16, 13, this.invX - (1/2 * 32), this.invY - (1/2 * 26), 32, 26);
            }
            else if (this.type == "etyrHide")
            {
                LXX.beginPath();
                LXX.drawImage(theCrack, 37, 720, 25, 18, this.invX - (1/2 * 50), this.invY - (1/2 * 36), 50, 36);
            }
            else if (this.type == "trollsBlood")
            {
                LXX.beginPath();
                LXX.drawImage(polyPNG, 385, 7, 11, 15, this.invX - (1/2 * 16.5), this.invY - (1/2 * 22.5), 16.5, 22.5);
            }
            else if (this.type == "yaihefBerries")
            {
                LXX.beginPath();
                LXX.drawImage(theCrack, 62, 508, 16, 16, this.invX - (1/2 * 32), this.invY - (1/2 * 32), 32, 32);
            }
        };

        this.drawShopCraftItem = function(type, invX, invY)
        {
            this.invX = invX;
            this.invY = invY;
            this.type = type;

            if (this.type == "coins")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 405, 4, 16, 17, this.invX - (1/2 * 32), this.invY - (1/2 * 34), 32, 34);
            }
            else if (this.type == "rawTrollsBlood")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 452, 33, 8, 14, this.invX - (1/2 * 12), this.invY - (1/2 * 21), 12, 21);
            }
            else if (this.type == "glassJar")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 465, 33, 8, 14, this.invX - (1/2 * 12), this.invY - (1/2 * 21), 12, 21);
            }
            else if (this.type == "chainArmour")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 38, 310, 40, 61, this.invX - (1/2 * 40), this.invY - (1/2 * 61), 40, 61);
            }
            else if (this.type == "blackChainArmour")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 80, 310, 40, 61, this.invX - (1/2 * 40), this.invY - (1/2 * 61), 40, 61);
            }
            else if (this.type == "freydicGreatSword")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 126, 302, 16, 70, this.invX - (1/2 * 16), this.invY - (1/2 * 70), 16, 70);
            }
            else if (this.type == "hugeBogTrollSkull")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 67.5), this.invY - (1/2 * 54), 67.5, 54);
            }
            else if (this.type == "bogTrollSkull")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 45), this.invY - (1/2 * 36), 49.5, 39.6);
            }
            else if (this.type == "babyBogTrollSkull")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 63, 264, 45, 36, this.invX - (1/2 * 22.5), this.invY - (1/2 * 18), 22.5, 18);
            }
            else if (this.type == "trollFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2875, 1, 19, 18, this.invX - (1/2 * 38), this.invY - (1/2 * 36), 38, 36);
            }
            else if (this.type == "trollMeat")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2900, 1, 19, 18, this.invX - (1/2 * 38), this.invY - (1/2 * 36), 38, 36);
            }
            else if (this.type == "aldrekiiArrow")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2832, 3, 41, 12, this.invX - (1/2 * 32), this.invY - (1/2 * 12), 32, 12);
            }
            else if (this.type == "rawWolfLiver")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2769, 2, 10, 15, this.invX - (1/2 * 15), this.invY - (1/2 * 22.5), 15, 22.5);
            }
            else if (this.type == "wolfLiver")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2782, 2, 10, 15, this.invX - (1/2 * 15), this.invY - (1/2 * 22.5), 15, 22.5);
            }
            else if (this.type == "winterWolfMeat")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2812, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
            }
            else if (this.type == "rawWinterWolfFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2794, 1, 14, 16, this.invX - (1/2 * 21), this.invY - (1/2 * 24), 21, 24);
            }
            else if (this.type == "winterWolfPelt")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2737, 2, 26, 16, this.invX - (1/2 * 34.8), this.invY - (1/2 * 19.2), 34.8, 19.2);
            }
            else if (this.type == "massiveWinterWolfPelt")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2737, 2, 29, 16, this.invX - (1/2 * 58), this.invY - (1/2 * 32), 58, 32);
            }
            else if (this.type == "energyPotionI")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 38, 267, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
            }
            else if (this.type == "speedPotionI")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 86, 134, 10, 17, this.invX - (1/2 * 10), this.invY - (1/2 * 17), 10, 17);
            }
            else if (this.type == "cleansingPotion")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 35, 134, 11, 19, this.invX - (1/2 * 11), this.invY - (1/2 * 19), 11, 19);
            }
            else if (this.type == "freydicSword")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2089, 2, 13, 46, this.invX - (1/2 * 16.25), this.invY - (1/2 * 57.5), 16.25, 57.5);
            }
            else if (this.type == "pickaxe")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 103, 233, 22, 26, this.invX - (1/2 * 33), this.invY - (1/2 * 39), 33, 39);
            }
            else if (this.type == "aldrekiiBlade")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2057, 4, 20, 45, this.invX - (1/2 * 24), this.invY - (1/2 * 54), 24, 54);
            }
            else if (this.type == "flail")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1995, 1, 37, 33, this.invX - (1/2 * 37), this.invY - (1/2 * 33), 37, 33);
            }
            else if (this.type == "torperVenomSac")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 40, 226, 17, 16, this.invX - (1/2 * 17), this.invY - (1/2 * 16), 17, 16);
            }
            else if (this.type == "torperFuzz")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1867, 9, 23, 20, this.invX - (1/2 * 23), this.invY - (1/2 * 20), 23, 20);
            }
            else if (this.type == "rawTorperFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1894, 3, 18, 11, this.invX - (1/2 * 18), this.invY - (1/2 * 11), 18, 11);
            }
            else if (this.type == "torperMeat")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1895, 16, 18, 11, this.invX - (1/2 * 18), this.invY - (1/2 * 11), 18, 11);
            }
            else if (this.type == "gulfreyShellArmour")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1, 157, 36, 63, this.invX - (1/2 * 36) + 2, this.invY - (1/2 * 63), 28.4, 59.6);
            }
            else if (this.type == "frichPelt")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 1832, 10, 31, 18, this.invX - (1/2 * 31), this.invY - (1/2 * 18), 31, 18);
            }
            else if (this.type == "rawFrichFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 65, 226, 10, 12, this.invX - (1/2 * 20), this.invY - (1/2 * 24), 20, 24);
            }
            else if (this.type == "frichMeat")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 79, 227, 10, 12, this.invX - (1/2 * 20), this.invY - (1/2 * 24), 20, 24);
            }
            else if (this.type == "vardanianAxe")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 53, 158, 37, 22, this.invX - (1/2 * 33.3), this.invY - (1/2 * 19.8), 33.3, 19.8);
            }
            else if (this.type == "vardanianAxeDual")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 48, 187, 31, 35, this.invX - (1/2 * 27.9), this.invY - (1/2 * 31.5), 27.9, 31.5);
            }
            else if (this.type == "freydicSpear")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 4, 227, 20, 75, this.invX - (1/2 * 17.5), this.invY - (1/2 * 56.75), 17.5, 56.75);
            }
            else if (this.type == "gulfreyShell")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 48, 41, 31, 23, this.invX - (1/2 * 31), this.invY - (1/2 * 23), 31, 23);
            }
            else if (this.type == "gulfreyMandibles")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 2, 92, 33, 33, this.invX - (1/2 * 26.6), this.invY - (1/2 * 26.6), 26.6, 26.6);
            }
            else if (this.type == "rawGulfreyFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 37, 9, 20, 20, this.invX - (1/2 * 20), this.invY - (1/2 * 20), 20, 20);
            }
            else if (this.type == "gulfreyMeat")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 66, 9, 20, 20, this.invX - (1/2 * 20), this.invY - (1/2 * 20), 20, 20);
            }
            else if (this.type == "vomit")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 55, 135, 24, 21, this.invX - (1/2 * 24), this.invY - (1/2 * 21), 24, 21);
            }
            else if (this.type == "gojiiBerries")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 615, 3, 19, 15, this.invX - (1/2 * 38), this.invY - (1/2 * 30), 38, 30);
            }
            else if (this.type == "nirineseSabre")
            {
                XXX.beginPath();
                XXX.drawImage(verse, 7, 7, 26, 80, this.invX - (1/2 * 19.5), this.invY - (1/2 * 60), 19.5, 60);
            }
            else if (this.type == "arrow")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 432, 554, 20, 8, this.invX - (1/2 * 40), this.invY - (1/2 * 16), 40, 16);
            }
            else if (this.type == "ogoFruit")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 426, 4, 12, 15, this.invX - (1/2 * 24), this.invY - (1/2 * 30), 24, 30);
            }
            else if (this.type == "blueBlade")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 8, 531, 57, 63, this.invX - (1/2 * 51.3), this.invY - (1/2 * 56.7), 51.3, 56.7);
            }
            else if (this.type == "berulnSkull")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 446, 3, 15, 20, this.invX - (1/2 * 22.5), this.invY - (1/2 * 30), 22.5, 30);
            }
            else if (this.type == "rawBerulnFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 526, 6, 21, 23, this.invX - (1/2 * 31.5), this.invY - (1/2 * 34.5), 31.5, 34.5);
            }
            else if (this.type == "berulnMeat")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 506, 38, 21, 23, this.invX - (1/2 * 31.5), this.invY - (1/2 * 34.5), 31.5, 34.5);
            }
            else if (this.type == "bigBerulnPelt")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 465, 1, 51, 30, this.invX - (1/2 * 76.5), this.invY - (1/2 * 45), 76.5, 45);
            }
            else if (this.type == "berulnPelt")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 465, 1, 51, 30, this.invX - (1/2 * 66.3), this.invY - (1/2 * 39), 66.3, 39);
            }
            else if (this.type == "longbow")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 380, 593, 34, 34, this.invX - (1/2 * 51), this.invY - (1/2 * 51), 51, 51);
            }
            else if (this.type == "walrusLeatherArmour")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 734, 202, 52, 58, this.invX - (1/2 * 52), this.invY - (1/2 * 58), 52, 58);
            }
            else if (this.type == "rawWalrusFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 99, 4, 17, 20, this.invX - (1/2 * 26.5), this.invY - (1/2 * 30), 26.5, 30);
            }
            else if (this.type == "aldrekiiBardiche")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 580, 253, 42, 137, this.invX - (1/2 * 21), this.invY - (1/2 * 68.5), 21, 68.5);
            }
            else if (this.type == "walrusMeat")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 257, 1, 17, 20, this.invX - (1/2 * 26.5), this.invY - (1/2 * 30), 26.5, 30);
            }
            else if (this.type == "walrusHide")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 287, 3, 45, 22, this.invX - (1/2 * 45), this.invY - (1/2 * 22), 45, 22);
            }
            else if (this.type == "elderWalrusHide")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 287, 3, 45, 22, this.invX - (1/2 * 90) + 7, this.invY - (1/2 * 44) + 4, 77.5, 33);
            }
            else if (this.type == "blubber")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 368, 9, 12, 13, this.invX - (1/2 * 24), this.invY - (1/2 * 26), 24, 26);
            }
            else if (this.type == "walrusTusks")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 341, 10, 17, 13, this.invX - (1/2 * 42.5), this.invY - (1/2 * 32.5), 42.5, 32.5);
            }
            else if (this.type == "elderWalrusTusks")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 341, 10, 17, 13, this.invX - (1/2 * 68), this.invY - (1/2 * 52), 68, 52);
            }
            else if (this.type == "mace")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 554, 10, 61, 36, this.invX - (1/2 * 61), this.invY - (1/2 * 38), 61, 36);
            }
            else if (this.type == "longsword")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 75, 366, 17, 47, this.invX - (1/2 * 25.5), this.invY - (1/2 * 70.5) - 3, 25.5, 70.5);
            }
            else if (this.type == "rawEtyrFlesh")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 43, 684, 16, 13, this.invX - (1/2 * 32), this.invY - (1/2 * 26), 32, 26);
            }
            else if (this.type == "freydicWarAxe")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 17, 115, 113, 104, this.invX - (1/2 * 90.4), this.invY - (1/2 * 83.2) + 4, 90.4, 83.2);
            }
            else if (this.type == "etyrMeat")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 73, 684, 16, 13, this.invX - (1/2 * 32), this.invY - (1/2 * 26), 32, 26);
            }
            else if (this.type == "etyrHide")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 37, 720, 25, 18, this.invX - (1/2 * 50), this.invY - (1/2 * 36), 50, 36);
            }
            else if (this.type == "trollsBlood")
            {
                XXX.beginPath();
                XXX.drawImage(polyPNG, 385, 7, 11, 15, this.invX - (1/2 * 16.5), this.invY - (1/2 * 22.5), 16.5, 22.5);
            }
            else if (this.type == "yaihefBerries")
            {
                XXX.beginPath();
                XXX.drawImage(theCrack, 62, 508, 16, 16, this.invX - (1/2 * 32), this.invY - (1/2 * 32), 32, 32);
            }
        };

        this.operations = function()
        {
            this.setItemID(); //this constantly redefines the item's stats and/or details based on the players skills (for the items that use that kind of adjustment.

            if (this.X != false && this.Y != false) //this only lets an item draw if it has coordinates other than false.
            {
                this.drawItem(); //this draws the item onto the world's map.
            }
        };

    }

    function buildMaster()
    {
        if (map == "world") //If the map is the main world map.
        {
            if (region == "central") //Y < 6870
            {
                if (change != "central")
                {
                    //Delete All Non-native AI Units
                    for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                    {
                        if (ArtificialIntelligenceAccess[i].playerSeen == false)
                        {
                            ArtificialIntelligenceAccess.splice(i, 1);
                            console.log(i + " in list 'AI access' has been deleted. " + ArtificialIntelligenceAccess.length);
                        }
                        else
                        {
                            console.log(i + " in list 'AI access' has been saved.");
                        }
                    }

                    //Delete All Non-native Items
                    worldItems = [];

                    //Delete All Non-native Structures
                    //todo when structures are created add their list's refresh sequence here.

                    //Delete All Non-native Scenery
                    //todo when scenery is created add their list's refresh sequence here.

                    //REGION CREATION
                        //Build AI Units

                    //Friches in the plains
                    ArtificialIntelligenceAccess.push(new Unit(2921, -1125, "Frich", false, "Fuzzy Wuzzy"));
                    ArtificialIntelligenceAccess.push(new Unit(2683, -1204, "Frich", false, "Ruby Soho"));
                    ArtificialIntelligenceAccess.push(new Unit(2786, -1398, "Frich", true, "Brufe"));
                    ArtificialIntelligenceAccess.push(new Unit(1739, -863, "Frich", true, "Nosey"));
                    ArtificialIntelligenceAccess.push(new Unit(1513, -803, "Frich", true, "Friskers"));
                    ArtificialIntelligenceAccess.push(new Unit(5000, 226, "Frich", false, "Tiddle"));
                    ArtificialIntelligenceAccess.push(new Unit(4976, 316, "Frich", false, "Toodle"));
                    ArtificialIntelligenceAccess.push(new Unit(4908, 230, "Frich", false, "Takkle"));
                    ArtificialIntelligenceAccess.push(new Unit(4874, 37, "Frich", false, "Tooble"));
                    ArtificialIntelligenceAccess.push(new Unit(4791, 82, "Frich", false, "Tuddle"));
                    ArtificialIntelligenceAccess.push(new Unit(-1110, 10, "Frich", false, "Tuk"));
                    ArtificialIntelligenceAccess.push(new Unit(-1166, 85, "Frich", false, "Tud"));
                    ArtificialIntelligenceAccess.push(new Unit(-1152, -22, "Frich", false, "Tux"));
                    ArtificialIntelligenceAccess.push(new Unit(-1558, -1017, "Frich", false, "boo"));
                    ArtificialIntelligenceAccess.push(new Unit(-1536, -1108, "Frich", true, "baa"));
                    ArtificialIntelligenceAccess.push(new Unit(-1687, -1365, "Frich", true, "bei"));
                    ArtificialIntelligenceAccess.push(new Unit(-1555, -1412, "Frich", false, "ban"));
                    ArtificialIntelligenceAccess.push(new Unit(-1358, 128, "Frich", false, "buk"));
                    ArtificialIntelligenceAccess.push(new Unit(4458, 3109, "Frich", false, "uk"));
                    ArtificialIntelligenceAccess.push(new Unit(4544, 3162, "Frich", false, "us"));
                    ArtificialIntelligenceAccess.push(new Unit(4422, 3236, "Frich", true, "au"));
                    ArtificialIntelligenceAccess.push(new Unit(6181, 3940, "Frich", false, "Zuke"));
                    ArtificialIntelligenceAccess.push(new Unit(6071, 3847, "Frich", false, "Cuke"));
                    ArtificialIntelligenceAccess.push(new Unit(6030, 4102, "Frich", false, "kook"));
                    ArtificialIntelligenceAccess.push(new Unit(6142, 4141, "Frich", false, "Zook"));
                    ArtificialIntelligenceAccess.push(new Unit(5333, 1329, "Frich", true, "Luke"));
                    ArtificialIntelligenceAccess.push(new Unit(5212, 1254, "Frich", false, "shook"));
                    ArtificialIntelligenceAccess.push(new Unit(3428, 4445, "Frich", false, "Tuco"));
                    ArtificialIntelligenceAccess.push(new Unit(3215, 4393, "Frich", true, "Zuko"));
                    ArtificialIntelligenceAccess.push(new Unit(3045, 4011, "Frich", false, "Jango"));
                    ArtificialIntelligenceAccess.push(new Unit(3226, 4819, "Frich", false, "Franco"));
                    ArtificialIntelligenceAccess.push(new Unit(3397, 4777, "Frich", true, "Bilbo"));
                    ArtificialIntelligenceAccess.push(new Unit(3467, 4626, "Frich", true, "Frodo"));
                    ArtificialIntelligenceAccess.push(new Unit(-339, 4588, "Frich", false, "Bambi"));
                    ArtificialIntelligenceAccess.push(new Unit(-377, 4684, "Frich", true, "Hunter"));
                    ArtificialIntelligenceAccess.push(new Unit(-622, 4606, "Frich", false, "MamaDeer"));
                    ArtificialIntelligenceAccess.push(new Unit(-692, 4814, "Frich", false, "PapaBuck"));
                    ArtificialIntelligenceAccess.push(new Unit(-2132, 5878, "Frich", true, "Rathair"));

                    //Citizens of Teshir
                    ArtificialIntelligenceAccess.push(new Unit(2741, 1421, "Soldier", false, "Freynor Soldier", {faction: "freynor", con: 4, speed: 1.25, outfit: ["chainArmour", 9], weapon: ["freydicSword", [8, 6], 0, 16, 1], ranged: [false, "arrow", 7, 2000, 1, 6, 0, "none", 1.25], patrolStops: 4, patrolLoop: true, route:[[1833, 1424], [1848, 2413], [3046, 2407], [2741, 1421]]}));
                    ArtificialIntelligenceAccess.push(new Unit(1247, 1210, "Soldier", false, "Freynor Soldier", {faction: "freynor", con: 6, speed: 1.4, outfit: ["chainArmour", 8], weapon: ["freydicSword", [8, 9], 0, 16, 1], ranged: [false, "arrow", 6, 1950, 1, 4, 0, "none", 1.35], patrolStops: 6, patrolLoop: true, route:[[901, 1195], [969, 527], [1932, 549], [1941, 814], [1932, 549], [969, 527]]}));
                    ArtificialIntelligenceAccess.push(new Unit(2584, 1385, "Person", false, "Freynor Villager", {faction: "freynor", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 5, patrolLoop: true, route:[[2523, 2061], [2041, 2046], [2036, 2118], [2594, 2169], [2584, 1385]]}));
                    ArtificialIntelligenceAccess.push(new Unit(2338, 1205, "Person", false, "Freynor Villager", {faction: "freynor", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 4, patrolLoop: true, route:[[1622, 1196], [1655, 1300], [2518, 1366], [2338, 1205]]}));
                    ArtificialIntelligenceAccess.push(new Unit(2335, 924, "Person", false, "Freynor Villager", {faction: "freynor", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 5, patrolLoop: true, route:[[1355, 935], [1402, 1962], [1402, 1962], [1461, 902], [2335, 924]]}));
                    if (uniqueChars.drohforLDS == true)
                    {
                        var hits = 0;
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "drohfor")
                            {
                                hits += 1;
                            }
                        }
                        if (hits == 0)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(2583, 818, "Person", false, "Drohfor", {faction: "freynor", personality: "violent", outfit: ["walrusLeatherArmour", 5], weapon: ["longbow", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [true, "arrow", 8, 2000, 1, 6, 0, "none", 0.95], patrolStops: 6, patrolLoop: true, route:[[2001, 658], [2252, -509], [2423, -588], [2032, 440], [2030, 770], [2583, 818]]}));
                        }
                    }
                    if (uniqueChars.odeeLDS == true)
                    {
                        var hits = 0;
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Odee the Banker")
                            {
                                hits += 1;
                            }
                        }
                        if (hits == 0)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(2232, 1142, "Person", false, "Odee the Banker", {faction: "orgell", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.85], ranged: [false, "arrow", 8, 2000, 1, 6, 0, "none", 0.95], patrolStops: 0, patrolLoop: false, route:[[2200, 1460]], banker: true}));
                        }
                    }
                    if (uniqueChars.laandegLDS == true)
                    {
                        var hits = 0;
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Laandeg the Alchemist")
                            {
                                hits += 1;
                            }
                        }
                        if (hits == 0)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(744, 1545, "Person", false, "Laandeg the Alchemist", {faction: "freynor", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 1.1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 4, patrolLoop: true, route:[[744, 1133], [801, 1156], [840, 373], [744, 1545]], merchant: true, merchandise: [[new Item("coins", false, false), 29], [new Item("trollsBlood", false, false), 1], [new Item("rawTrollsBlood", false, false), 1], [new Item("cleansingPotion", false, false), 1], [new Item("energyPotionI", false, false), 3], [new Item("speedPotionI", false, false), 2], [new Item("glassJar", false, false), 14], [new Item("rawWolfLiver", false, false), 4]]}));
                        }
                    }
                    if (uniqueChars.bobithLDS == true)
                    {
                        var hits = 0;
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Bobith the Smith")
                            {
                                hits += 1;
                            }
                        }
                        if (hits == 0)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(1690, 1021, "Person", false, "Bobith the Smith", {faction: "freynor", personality: "violent", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.65], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 3, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 103], [new Item("mace", false, false), 3], [new Item("freydicSpear", false, false), 5], [new Item("freydicSword", false, false), 2], [new Item("freydicWarAxe", false, false), 1], [new Item("freydicGreatSword", false, false), 1], [new Item("chainArmour", false, false), 2], [new Item("longbow", false, false), 2], [new Item("arrow", false, false), 92]]}));
                        }
                    }
                    if (uniqueChars.medliaLDS == true)
                    {
                        var hits = 0;
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Medlia the Merchant")
                            {
                                hits += 1;
                            }
                        }
                        if (hits == 0)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(1930, 1793, "Person", false, "Medlia the Merchant", {faction: "freynor", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 3, patrolLoop: true, route:[[1710, 1717], [1812, 1835], [1713, 1882], [1930, 1793]], merchant: true, merchandise: [[new Item("coins", false, false), 79], [new Item("rawWalrusFlesh", false, false), 8], [new Item("walrusMeat", false, false), 6], [new Item("walrusHide", false, false), 1], [new Item("walrusTusks", false, false), 1], [new Item("frichPelt", false, false), 3], [new Item("rawFrichFlesh", false, false), 12], [new Item("frichMeat", false, false), 9], [new Item("winterWolfPelt", false, false), 3], [new Item("rawWinterWolfFlesh", false, false), 2], [new Item("winterWolfMeat", false, false), 1], [new Item("rawWolfLiver", false, false), 1], [new Item("wolfLiver", false, false), 1]]}));
                        }
                    }
                    if (uniqueChars.maggyLDS == true)
                    {
                        var hits = 0;
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Maggy the Tailor")
                            {
                                hits += 1;
                            }
                        }
                        if (hits == 0)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(2858, 1524, "Person", false, "Maggy the Tailor", {faction: "freynor", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 1.2], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 2, patrolLoop: true, route:[[2836, 2058], [2858, 1524]], merchant: true, merchandise: [[new Item("coins", false, false), 85], [new Item("walrusLeatherArmour", false, false), 3]]}));
                        }
                    }

                    //TEST Bog Troll
                    //ArtificialIntelligenceAccess.push(new Unit(2550, 1450, "BogTroll", "baby", "Kekleblad"));

                    //Torpers in the jungle?
                    //ArtificialIntelligenceAccess.push(new Unit(2550, 1450, "Torper", true, "Neebs"));
                    //ArtificialIntelligenceAccess.push(new Unit(2350, 1350, "Torper", true, "Sokka"));
                    //for (var i = 0; i < 30; i++)
                    //{
                    //    ArtificialIntelligenceAccess.push(new Unit(500, i * 40, "Torper", false, null));
                    //}

                    //Lizards in the East
                    //ArtificialIntelligenceAccess.push(new Unit(0, 0, "Etyr", true, "Toby"));
                    //ArtificialIntelligenceAccess.push(new Unit(-300, -300, "Etyr", true, "Tammy"));
                    //ArtificialIntelligenceAccess.push(new Unit(-100, 150, "Etyr", true, "Tibz"));
                    //ArtificialIntelligenceAccess.push(new Unit(-200, -200, "Etyr", true, "TamTam"));
                    //for (var i = 0; i < 30; i++)
                    //{
                    //    ArtificialIntelligenceAccess.push(new Unit(100, i * 40, "Etyr", false, null));
                    //}
                    //ArtificialIntelligenceAccess.push(new Unit(600, -400, "Etyr", true, "Franky"));
                    //ArtificialIntelligenceAccess.push(new Unit(700, -500, "Etyr", true, "Rosa"));
                    //ArtificialIntelligenceAccess.push(new Unit(790, -570, "Etyr", true, "Kelly"));
                    //ArtificialIntelligenceAccess.push(new Unit(350, -600, "Etyr", true, "Natily"));
                    //ArtificialIntelligenceAccess.push(new Unit(-50, -50, "Etyr", false, "Butter-Snap"));

                    change = "central";
                }
            }
            else if (region == "n1") //Y > 6290 && Y < 32370
            {
                if (change != "n1")
                {
                    //Delete All Non-native AI Units
                    for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                    {
                        if (ArtificialIntelligenceAccess[i].playerSeen == false)
                        {
                            ArtificialIntelligenceAccess.splice(i, 1);
                            console.log(i + " in list 'AI access' has been deleted. " + ArtificialIntelligenceAccess.length);
                        }
                        else
                        {
                            console.log(i + " in list 'AI access' has been saved.");
                        }
                    }

                    //Delete All Non-native Items
                    worldItems = [];

                    //Delete All Non-native Structures
                    //todo when structures are created add their list's refresh sequence here.

                    //Delete All Non-native Scenery
                    //todo when scenery is created add their list's refresh sequence here.

                    //REGION CREATION
                    //Build AI Units

                    //elder walruses
                    ArtificialIntelligenceAccess.push(new Unit(1600, 7790, "Walrus", true, "Ice Toby"));
                    ArtificialIntelligenceAccess.push(new Unit(2000, 7890, "Walrus", true, "Ice Tammy"));

                    //walruses
                    ArtificialIntelligenceAccess.push(new Unit(900, 7290, "Walrus", false, "Santa Claws"));
                    ArtificialIntelligenceAccess.push(new Unit(1200, 7290, "Walrus", false, "Mary Claws"));
                    ArtificialIntelligenceAccess.push(new Unit(325, 7290, "Walrus", false, "Big Boy Ringo"));

                    //winter wolves
                    ArtificialIntelligenceAccess.push(new Unit(2400, 8820, "WinterWolf", false, "Dogmeat"));
                    ArtificialIntelligenceAccess.push(new Unit(2600, 8940, "WinterWolf", false, "Husky"));
                    ArtificialIntelligenceAccess.push(new Unit(2500, 8600, "WinterWolf", false, "German"));
                    ArtificialIntelligenceAccess.push(new Unit(4000, 10000, "WinterWolf", true, "Ghost"));

                    //Gulfreys in the jungle
                    //ArtificialIntelligenceAccess.push(new Unit(3400, 8820, "Gulfrey", true, "Plikt"));
                    //ArtificialIntelligenceAccess.push(new Unit(3600, 8940, "Gulfrey", true, "Plakt"));
                    //for (var i = 0; i < 20; i++)
                    //{
                    //    ArtificialIntelligenceAccess.push(new Unit(3000 + (i * 40), 9250, "Gulfrey", false, null));
                    //}

                    change = "n1";
                }
            }
            else if (region == "w1") //Y > 6290 && Y < 32370
            {
                if (change != "w1")
                {
                    //Delete All Non-native AI Units
                    for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                    {
                        if (ArtificialIntelligenceAccess[i].playerSeen == false)
                        {
                            ArtificialIntelligenceAccess.splice(i, 1);
                            console.log(i + " in list 'AI access' has been deleted. " + ArtificialIntelligenceAccess.length);
                        }
                        else
                        {
                            console.log(i + " in list 'AI access' has been saved.");
                        }
                    }

                    //Delete All Non-native Items
                    worldItems = [];

                    //Delete All Non-native Structures
                    //todo when structures are created add their list's refresh sequence here.

                    //Delete All Non-native Scenery
                    //todo when scenery is created add their list's refresh sequence here.

                    //REGION CREATION
                    //Build AI Units

                    //berulns in the west
                    ArtificialIntelligenceAccess.push(new Unit(10700, 1100, "Beruln", true, "Grug"));
                    ArtificialIntelligenceAccess.push(new Unit(10700, 500, "Beruln", false, "Dak"));
                    ArtificialIntelligenceAccess.push(new Unit(11900, 1300, "Beruln", false, "Nosh"));
                    ArtificialIntelligenceAccess.push(new Unit(12000, 2000, "Beruln", true, "Drelk"));
                    ArtificialIntelligenceAccess.push(new Unit(13800, 3500, "Beruln", false, "Kagim"));

                    change = "w1";
                }
            }
        }
    }

    function saveList(list, listName, complex) //complex is for a list that has lists in it like the inventory.
    {
        var contents = [];

        if (complex == true)
        {
            for (var i = 0; i < list.length; i++)
            {
                var elem = list[i][0]; //This variable is set equal to the class in the argument list.
                var className = elem.constructor.name; //this stores the specific identity of the class like whether it is a Unit or an Item or a Projectile etc.
                var classData = {}; //This is just like the data in the class in that it stores all of the keys and values that the focus class presently holds excluding the methods.
                var amount = list[i][1];
                for (var key in elem)
                {
                    var value = elem[key]; //this finds and stores the value attached to the present key within the focus class.
                    if (typeof(value) != "function") // so if the key is anything other than a method it will be added to the object class data so that it can be saved.
                    {
                        classData[key] = value;
                    }
                }
                contents.push([{type: className, data: classData}, amount]); //this adds a save object interpretation of the original class that has the original classes type and all of the original class's non-method data.
            }
        }
        else
        {
            for (var i = 0; i < list.length; i++)
            {
                var elem = list[i]; //This variable is set equal to the class in the argument list.
                var className = elem.constructor.name; //this stores the specific identity of the class like whether it is a Unit or an Item or a Projectile etc.
                var classData = {}; //This is just like the data in the class in that it stores all of the keys and values that the focus class presently holds excluding the methods.
                for (var key in elem)
                {
                    var value = elem[key]; //this finds and stores the value attached to the present key within the focus class.
                    if (typeof(value) != "function") // so if the key is anything other than a method it will be added to the object class data so that it can be saved.
                    {
                        classData[key] = value;
                    }
                }
                contents.push({type: className, data: classData}); //this adds a save object interpretation of the original class that has the original classes type and all of the original class's non-method data.
            }
        }

        saveBrain[listName] = contents;
    }
    function save()
    {
        //This is the stuff that will be saved to the local storage.
        saveList(mainCharacterAccess, "mainCharacterAccess");
        saveList(ArtificialIntelligenceAccess, "ArtificialIntelligenceAccess");
        saveList(deadAIList, "deadAIList");
        saveList(worldItems, "worldItems", true);
        saveList(Inventory, "Inventory", true);
        saveList(playerProjectiles, "playerProjectiles");
        saveList(unitProjectiles, "unitProjectiles");
        saveList(shopInventory, "shopInventory", true);
        saveList(bankAccount, "bankAccount", true);
        for (var n = 0; n < ArtificialIntelligenceAccess.length; n++)
        {
            var merchN = "merchandise" + JSON.stringify(n);
            if (typeof(ArtificialIntelligenceAccess[n].ultra) != "undefined")
            {
                if (typeof(ArtificialIntelligenceAccess[n].ultra.merchandise) != "undefined")
                {
                    saveList(ArtificialIntelligenceAccess[n].ultra.merchandise, merchN, true)
                }
            }
        }
        saveBrain["uniqueChars"] = uniqueChars;
        saveBrain["quests"] = quests;
        saveBrain["X"] = X;
        saveBrain["Y"] = Y;
        saveBrain["spawnX"] = spawnX;
        saveBrain["spawnY"] = spawnY;
        saveBrain["map"] = map;
        saveBrain["region"] = region;
        saveBrain["update"] = update;
        saveBrain["change"] = change;
        saveBrain["bankSlots"] = bankSlots;

        var saveFile = JSON.stringify(saveBrain);
        //based on what save type the player chooses the save will be stored in one of the four game slots.
        if (saveType == 1)
        {
            localStorage.setItem("save1", saveFile);
        }
        else if (saveType == 2)
        {
            localStorage.setItem("save2", saveFile);
        }
        else if (saveType == 3)
        {
            localStorage.setItem("save3", saveFile);
        }
        else if (saveType == 4)
        {
            localStorage.setItem("save4", saveFile);
        }


    }

    function load()
    {
        retrieveSave();
        mainCharacterAccess = loadList("mainCharacterAccess");
        if (update == lastUpdate && typeof(lastUpdate) != "undefined")
        {
            ArtificialIntelligenceAccess = loadList("ArtificialIntelligenceAccess");
            deadAIList = loadList("deadAIList");
        }
        playerProjectiles = loadList("playerProjectiles");
        unitProjectiles = loadList("unitProjectiles");
        worldItems = loadList("worldItems", true);
        Inventory = loadList("Inventory", true);
        shopInventory = loadList("shopInventory", true);
        bankAccount = loadList("bankAccount", true);
        for (var n = 0; n < ArtificialIntelligenceAccess.length; n++)
        {
            //ArtificialIntelligenceAccess[n].ultra.merchandise = loadList("merchandise" + n, true);
            var merchN = "merchandise" + JSON.stringify(n);
            if (typeof(ArtificialIntelligenceAccess[n].ultra) != "undefined")
            {
                if (typeof(ArtificialIntelligenceAccess[n].ultra.merchandise) != "undefined")
                {
                    ArtificialIntelligenceAccess[n].ultra.merchandise = loadList(merchN, true);
                    for (var m = 0; m < ArtificialIntelligenceAccess[n].ultra.merchandise.length; m++)
                    {
                        ArtificialIntelligenceAccess[n].ultra.merchandise[m][0];
                        //console.log(ArtificialIntelligenceAccess[n].ultra.merchandise[m][0].weight)
                    }
                }
            }
        }
        player = mainCharacterAccess[0];
    }

    function loadList(listName, complex)
    {
        var load = retrieveSave(listName);
        var contents = [];

        if (complex == true)
        {
            for (var i = 0; i < load.length; i++)
            {
                var parts = load[i];
                var elem = eval("new " + parts[0].type + "()");
                var amount = load[i][1];
                for (var key in parts[0].data)
                {
                    elem[key] = parts[0].data[key];
                }
                contents.push([elem, amount]);
            }
        }
        else
        {
            for (var i = 0; i < load.length; i++)
            {
                var parts = load[i];
                var elem = eval("new " + parts.type + "()");
                for (var key in parts.data)
                {
                    elem[key] = parts.data[key];
                }
                contents.push(elem);
            }
        }

        return contents;
    }

    function retrieveSave(listName)
    {
        if (loadType == 1)
        {
            var restore = localStorage.getItem("save1");
        }
        else if (loadType == 2)
        {
            var restore = localStorage.getItem("save2");
        }
        else if (loadType == 3)
        {
            var restore = localStorage.getItem("save3");
        }
        else if (loadType == 4)
        {
            var restore = localStorage.getItem("save4");
        }

        var parsed = JSON.parse(restore);

        //The argument will determine which list it will return.
        for (var n = 0; n < ArtificialIntelligenceAccess.length; n++)
        {
            var merchN = "merchandise" + JSON.stringify(n);
            if (listName == merchN)
            {
                return parsed[merchN];
            }
        }

        if (listName == "mainCharacterAccess")
        {
            return parsed.mainCharacterAccess;
        }
        else if (listName == "ArtificialIntelligenceAccess")
        {
            return parsed.ArtificialIntelligenceAccess;
        }
        else if (listName == "deadAIList")
        {
            return parsed.deadAIList;
        }
        else if (listName == "worldItems")
        {
            return parsed.worldItems;
        }
        else if (listName == "Inventory")
        {
            return parsed.Inventory;
        }
        else if (listName == "playerProjectiles")
        {
            return parsed.playerProjectiles;
        }
        else if (listName == "unitProjectiles")
        {
            return parsed.unitProjectiles;
        }
        else if (listName == "shopInventory")
        {
            return parsed.shopInventory;
        }
        else if (listName == "bankAccount")
        {
            return parsed.bankAccount;
        }
        else
        {
            if (update == parsed.update && typeof(parsed.update) != "undefined")
            {
                change = parsed.change;
            }
            lastUpdate = parsed.update;
            map = parsed.map;
            region = parsed.region;
            X = parsed.X;
            Y = parsed.Y;
            spawnX = parsed.spawnX;
            spawnY = parsed.spawnY;

            for (var key in parsed.uniqueChars)
            {
                uniqueChars[key] = parsed.uniqueChars[key];
            }
            for (var key in parsed.quests)
            {
                quests[key] = parsed.quests[key];
            }
            bankSlots = parsed.bankSlots;
        }

    }

    requestAnimationFrame(mainMenuLoop, CCC); //This starts the game as normal.
    //gameState = "active"; //This is for testing the game (if turned on it will let you bypass the main menu)
    //requestAnimationFrame(gameloopOfDestiny, CCC); //This is for testing the game (if turned on it will let you bypass the main menu)
}
