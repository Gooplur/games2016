/**
 * Created by skyeguy on 5/17/16.
 */
    //THIS IS A CARD GAME SUPPLEMENT TO LEGEND OF THE CRACK BEAR THAT IS CALLED HORDE

//List of TODOs
//todo add the actually game.
//todo hook up the game to legend of the crack bear.


function playHorde()
{

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

    function lowerCanvasMouseCoordsReset()
    {
        lMouseX = -1000; //this makes it so when you are not in the lower canvas it does not try to set your mouses position, which can accidentally click something you didn't want to.
        lMouseY = 1000;
    }

    function mainCanvasMouseCoordsReset()
    {


        mouseX = -1000;
        mouseY = 1000;
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

        if (key == 81)
        {
            qKey = false;
        }

        if (key == 49)
        {
            key1 = false;
        }

        if (key == 50)
        {
            key2 = false;
        }

        if (key == 51)
        {
            key3 = false;
        }

        if (key == 52)
        {
            key4 = false;
        }

        if (key == 53)
        {
            key5 = false;
        }

        if (key == 54)
        {
            key6 = false;
        }

        if (key == 55)
        {
            key7 = false;
        }

        if (key == 56)
        {
            key8 = false;
        }

        if (key == 57)
        {
            key9 = false;
        }

        if (key == 48)
        {
            key0 = false;
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

        if (key == 81)
        {
            qKey = true;
        }

        if (key == 49)
        {
            key1 = true;
        }

        if (key == 50)
        {
            key2 = true;
        }

        if (key == 51)
        {
            key3 = true;
        }

        if (key == 52)
        {
            key4 = true;
        }

        if (key == 53)
        {
            key5 = true;
        }

        if (key == 54)
        {
            key6 = true;
        }

        if (key == 55)
        {
            key7 = true;
        }

        if (key == 56)
        {
            key8 = true;
        }

        if (key == 57)
        {
            key9 = true;
        }

        if (key == 48)
        {
            key0 = true;
        }
    }

//Variables (Variables)
    //game specific (especifico al juego)
    //functionality
    var canv = document.getElementById("bearPawBravo");
    var conx = canv.getContext("2d");
    var lowCanv = document.getElementById("bearPawAlpha");
    var lowConx = lowCanv.getContext("2d");

    //Key sensing variables
    var wKey = false;
    var spaceKey = false;
    var shiftKey = false;
    var altKey = false;
    var qKey = false;
    var key1 = false;
    var key2 = false;
    var key3 = false;
    var key4 = false;
    var key5 = false;
    var key6 = false;
    var key7 = false;
    var key8 = false;
    var key9 = false;
    var key0 = false;

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

    //gameplay
    var roundTime = 0;
    var shelf = "game"; //this determines what menu is displayed on the lowbar.
    var currentGameRound = 0;
    var turn = "undecided";
    var secrets = 0; //secrets let you look at a card in your enemy's hand.
    var enemySecrets = 0;
    var caution = 9;//1-10
    var runHorde = true;
    //player specific (especifico a usted/tú)
    var playerHordeLife = 10000;
    var playerBattlePoints = 5;
    //alternate specific (especifico a su/tu enemigo)
    var altHordeLife = 10000;
    var altBattlePoints = 5;

//Lists (Listas)
    //Player (Usted/tú)
    var playerHordeDeck = [new HordeCard("threeHeadedDeath", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("mountainFrich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("mountainFrich", 0, 0, 1, true)];
    var playerHordeGraveyard = [];
    var playerHordeHand = [];
    var playerHordeField = [];
    var playerAttacking = [];
    //Alternate (enemigo)
    var altHordeDeck = [new HordeCard("frich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("mountainFrich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("mountainFrich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true), new HordeCard("mountainFrich", 0, 0, 1, true), new HordeCard("frich", 0, 0, 1, true)];
    var altHordeGraveyard = [];
    var altHordeHand = [];
    var altHordeField = [];
    var altAIContainer = [new alternateAI()];
    var altAI = altAIContainer[0];
    var altAttacking = []; //the list of all attacking cards.

//Objects (Objetos)

//classes (categorías de identificación)
    function HordeCard(ID, X, Y, scale, face, round)
    {
        //variables
        this.X = X;
        this.Y = Y;
        this.scale = scale;
        this.face = face;
        this.inspection = false;
        this.owner = true;
        this.visible = false;
        this.id = ID;
        this.images = [];
        this.cost = 0;
        this.name = "none";
        this.effects = [];
        this.type = "none";
        this.subType = "none";
        this.subSet = "none";
        this.set = "none";
        this.description = "none";
        this.health = 0;
        this.power = 0;
        this.attack = 0;
        this.defense = 0;
        this.lives = 0;
        this.attacking = false;
        if (round >= 0)
        {
            this.roundPlayed = round;
        }
        else
        {
            this.roundPlayed = 0;
        }

        this.cardSetUp = function ()
        {
            //CARDS
            if (this.id == "frich")
            {
                this.name = "Frich";
                this.images = [[verse, 2068, 76, 21, 23, 21 * 14.2, 23 * 7.86, 0, -50, 0, 1], [verse, 1643, 1, 79, 36, 79 * 3, 36 * 3, -14, -35, 0, 1]]; //[img, X, Y, cutX, cutY, skewX, skewY, adjX, adjY, rotation, global alpha]
                this.type = "creature";
                this.subType = "normal";
                this.set = "Beast";
                this.subSet = "Frich";
                this.cost = 1;
                this.effects = [["Infectious", "Any non-frich card that faces this card with [1] defense or less dies at the end of the attack phase."]];
                this.description = "Friches are Large mangy rodents that often make their burrows in the plains.";
                this.power = 25;
                this.attack = 1;
                this.defense = 1;
                this.lives = 1;

            }
            else if (this.id == "mountainFrich")
            {
                this.name = "Mountain Frich";
                this.images = [[verse, 1679, 12, 25, 13, 25 * 11.9, 13 * 13.8, 0, -50, 0, 1], [oldverse, 1643, 1, 79, 36, 79 * 3.4, 36 * 3.4, -21, -35, 0, 1]]; //[img, X, Y, cutX, cutY, skewX, skewY, adjX, adjY, rotation, global alpha]
                this.type = "creature";
                this.subType = "normal";
                this.set = "Beast";
                this.subSet = "Frich";
                this.cost = 3;
                this.effects = [["Infectious", "Any non-frich card that faces this card with [1] defense or less dies at the end of the attack phase."]];
                this.description = "Mountain friches are black furred and they are much larger than regular friches.";
                this.power = 300;
                this.attack = 2;
                this.defense = 2;
                this.lives = 1;
            }
            else if (this.id == "threeHeadedDeath")
            {
                this.name = "Three Headed Death";
                this.images = [[horde1, 516, 258, 66, 40, 66 * 4.55, 40 * 4.5, 0, -50, 0, 1], [horde1, 691, 211, 200, 195, 200 * 0.85, 195 * 0.85, 5, -39, 0, 1]]; //[img, X, Y, cutX, cutY, skewX, skewY, adjX, adjY, rotation, global alpha]
                this.type = "creature";
                this.subType = "normal";
                this.set = "Undead";
                this.subSet = "Skeleton";
                this.cost = 8;
                this.effects = [];
                this.description = "All fear its arrival, no one will survive.";
                this.power = 300;
                this.attack = 3;
                this.defense = 2;
                this.lives = 3;

            }
        };

        this.isAttacking = function(altOrPlayer)
        {
            var conts = 0;
            if (altOrPlayer == "alternate")
            {
                for (var i = 0; i < altAttacking.length; i++)
                {
                    if (altAttacking[i] === this)
                    {
                        this.attacking = true
                    }
                    else
                    {
                        conts += 1;
                    }
                }
                if (conts == altAttacking.length)
                {
                    this.attacking = false;
                }
            }
            else if (altOrPlayer == "player")
            {
                for (var i = 0; i < playerAttacking.length; i++)
                {
                    if (playerAttacking[i] === this)
                    {
                        this.attacking = true
                    }
                    else
                    {
                        conts += 1;
                    }
                }
                if (conts == playerAttacking.length)
                {
                    this.attacking = false;
                }
            }

        };

        this.playCardFromHand = function()
        {
            if ( this.inspection == false && turn == "player" && clicked && this.face == false && mouseX > -150 * this.scale + this.X && mouseX < 150 * this.scale + this.X && mouseY > -200 * this.scale + this.Y && mouseY < 200 * this.scale + this.Y)
            {
                clicked = false;
                if (this.subType == "normal")
                {
                    if (this.cost <= playerBattlePoints)
                    {
                        playerBattlePoints -= this.cost;
                        for (var i = 0; i < playerHordeHand.length; i ++)
                        {
                            if (playerHordeHand[i] === this)
                            {
                                playerHordeField.push(new HordeCard(playerHordeHand[i].id, 0, 0, 1, true, currentGameRound));

                                playerHordeHand.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
            }
        };

        this.drawSelf = function ()
        {
            if (this.inspection)
            {
                this.X = 1/2 * canv.width;
                this.Y = 1/2 * canv.height;
                this.scale = 1;
            }

            if (turn == "player" && this.inspection == false && dClick && mouseX > -150 * this.scale + this.X && mouseX < 150 * this.scale + this.X && mouseY > -200 * this.scale + this.Y && mouseY < 200 * this.scale + this.Y)
            {
                this.inspection = true;
                dClick = false;
            }
            else if (this.inspection == true && dClick)
            {
                this.inspection = false;
            }

            if (this.owner == true || secrets >= 1)
            {
                if (spaceKey == true && this.face == false && mouseX > -150 * this.scale + this.X && mouseX < 150 * this.scale + this.X && mouseY > -200 * this.scale + this.Y && mouseY < 200 * this.scale + this.Y)
                {
                    this.face = true;
                    spaceKey = false;
                    secrets -= 1;
                }
                else if (this.owner == true && spaceKey == true && this.face == true && mouseX > -150 * this.scale + this.X && mouseX < 150 * this.scale + this.X && mouseY > -200 * this.scale + this.Y && mouseY < 200 * this.scale + this.Y)
                {
                    this.face = false;
                    spaceKey = false;
                }
            }

            /*if (key0)
             {
             this.X += 0.5;
             if (shiftKey)
             {
             this.scale -= 0.01;
             }
             else
             {
             this.scale += 0.01;
             }
             }
             else if (key9)
             {
             this.X -= 0.5;
             }

             if (key1)
             {
             this.Y += 0.5;
             }
             else if (key2)
             {
             this.Y -= 0.5;
             }*/

            if (this.face)
            {
                this.isAttacking("alternate");
                this.isAttacking("player");

                //DRAW CARD
                var pxS = 30 * this.scale; //pixel size for text.
                conx.beginPath();
                conx.fillStyle = "lightgrey";
                if (this.attacking)
                {
                    conx.lineWidth = 4;
                    conx.strokeStyle = "red";
                }
                else
                {
                    conx.lineWidth = 2;
                    conx.strokeStyle = "black";
                }
                //conx.rect(1/2 * canv.width - 75, 1/2 * canv.height - 100, 150, 200);
                conx.rect(-150 * this.scale + this.X, -200 * this.scale + this.Y, 300 * this.scale, 400 * this.scale);
                conx.fill();
                conx.stroke();
                //line sectioning off the name of the card
                conx.beginPath();
                conx.lineWidth = 2;
                conx.strokeStyle = "black";
                conx.moveTo(-150 * this.scale + this.X, -170 * this.scale + this.Y);
                conx.lineTo(150 * this.scale + this.X, -170 * this.scale + this.Y);
                conx.stroke();
                //The name
                conx.font = pxS + "px bold Book Antiqua";
                conx.fillStyle = "black";
                conx.textAlign = "center";
                conx.fillText(this.name, 0 + this.X, -174 * this.scale + this.Y);
                //conx.fillText("( " + this.X + ", " + this.Y + " )     scale: " + this.scale, 1/2 * canv.width, 1/2 * canv.height);
                //line sectioning off the skills
                conx.beginPath();
                conx.lineWidth = 2;
                conx.strokeStyle = "black";
                conx.moveTo(-150 * this.scale + this.X, -140 * this.scale + this.Y);
                conx.lineTo(150 * this.scale + this.X, -140 * this.scale + this.Y);
                conx.stroke();

                if (this.type == "creature")
                {
                    //attack
                    conx.font = pxS * 0.9 + "px bold Book Antiqua";
                    conx.fillStyle = "black";
                    conx.textAlign = "center";
                    conx.fillText(this.attack, -100 * this.scale + this.X, -145 * this.scale + this.Y);

                    //power
                    conx.font = pxS * 0.9 + "px bold Book Antiqua";
                    conx.fillStyle = "black";
                    conx.textAlign = "center";
                    conx.fillText(this.power, 0 + this.X, -145 * this.scale + this.Y);

                    //defense
                    conx.font = pxS * 0.9 + "px bold Book Antiqua";
                    conx.fillStyle = "black";
                    conx.textAlign = "center";
                    conx.fillText(this.defense, 100 * this.scale + this.X, -145 * this.scale + this.Y);
                }
                //lines between the skills.
                conx.beginPath();
                conx.lineWidth = 2;
                conx.strokeStyle = "black";
                conx.moveTo(-50 * this.scale + this.X, -170 * this.scale + this.Y);
                conx.lineTo(-50 * this.scale + this.X, -140 * this.scale + this.Y);
                conx.stroke();
                //lines between the skills.
                conx.beginPath();
                conx.lineWidth = 2;
                conx.strokeStyle = "black";
                conx.moveTo(50 * this.scale + this.X, -170 * this.scale + this.Y);
                conx.lineTo(50 * this.scale + this.X, -140 * this.scale + this.Y);
                conx.stroke();
                //lines between the skills.
                conx.beginPath();
                conx.lineWidth = 2;
                conx.strokeStyle = "black";
                conx.moveTo(150 * this.scale + this.X, -170 * this.scale + this.Y);
                conx.lineTo(150 * this.scale + this.X, -140 * this.scale + this.Y);
                conx.stroke();

                //picture
                for (var j = 0; j < this.images.length; j++)
                {
                    conx.save();
                    //conx.rotate(this.images[j][9]);
                    conx.globalAlpha = this.images[j][10];
                    conx.drawImage(this.images[j][0], this.images[j][1], this.images[j][2], this.images[j][3], this.images[j][4], (this.images[j][7] - 1 / 2 * this.images[j][5]) * this.scale + this.X, (this.images[j][8] - 1 / 2 * this.images[j][6]) * this.scale + this.Y, this.images[j][5] * this.scale, this.images[j][6] * this.scale);
                    conx.restore();
                }
                //line sectioning off the picture from the types
                conx.beginPath();
                conx.lineWidth = 2;
                conx.strokeStyle = "black";
                conx.moveTo(-150 * this.scale + this.X, 40 * this.scale + this.Y);
                conx.lineTo(150 * this.scale + this.X, 40 * this.scale + this.Y);
                conx.stroke();

                //the type
                conx.font = pxS * 0.8 + "px italics Book Antiqua";
                conx.fillStyle = "black";
                conx.textAlign = "center";
                conx.fillText(this.type, -94 * this.scale + this.X, 61 * this.scale + this.Y);
                //the set
                conx.font = pxS * 0.5 + "px italics Book Antiqua";
                conx.fillStyle = "black";
                conx.textAlign = "center";
                conx.fillText(this.set + ":", 94 * this.scale + this.X, 53 * this.scale + this.Y);
                //the subset
                conx.font = pxS * 0.5 + "px italics Book Antiqua";
                conx.fillStyle = "black";
                conx.textAlign = "center";
                conx.fillText(this.subSet, 94 * this.scale + this.X, 66 * this.scale + this.Y);

                //line sectioning off the types from the effects life and cost
                conx.beginPath();
                conx.lineWidth = 2;
                conx.strokeStyle = "black";
                conx.moveTo(-150 * this.scale + this.X, 70 * this.scale + this.Y);
                conx.lineTo(150 * this.scale + this.X, 70 * this.scale + this.Y);
                conx.stroke();

                if (this.type == "creature")
                {
                    //lives
                    conx.beginPath();
                    conx.lineWidth = 2;
                    conx.strokeStyle = "black";
                    conx.fillStyle = "lightgrey";
                    conx.moveTo(0 * this.scale + this.X, 25 * this.scale + this.Y);
                    conx.lineTo(40 * this.scale + this.X, 70 * this.scale + this.Y);
                    conx.lineTo(-40 * this.scale + this.X, 70 * this.scale + this.Y);
                    conx.lineTo(0 * this.scale + this.X, 25 * this.scale + this.Y);
                    conx.closePath();
                    conx.fill();
                    conx.stroke();

                    //the number of lives
                    conx.font = pxS * 1.1 + "px bold Book Antiqua";
                    conx.fillStyle = "black";
                    conx.textAlign = "center";
                    conx.fillText(this.lives, 0 + this.X, 65 * this.scale + this.Y);
                }
            }
            else
            {
                var pxS = 30 * this.scale; //pixel size for text.
                //DRAW CARD
                conx.beginPath();
                conx.lineWidth = 2;
                conx.fillStyle = "darkgrey";
                conx.strokeStyle = "black";
                //conx.rect(1/2 * canv.width - 75, 1/2 * canv.height - 100, 150, 200);
                conx.rect(-150 * this.scale + this.X, -200 * this.scale + this.Y, 300 * this.scale, 400 * this.scale);
                conx.fill();
                conx.stroke();

                conx.beginPath();
                conx.lineWidth = 4;
                conx.strokeStyle = "black";
                conx.fillStyle = "grey";
                conx.arc(0 + this.X, 0 + this.Y, 100 * this.scale, 0, 2 * Math.PI);
                conx.fill();
                conx.stroke();

                //the number of lives
                conx.font = pxS * 3 + "px bold Book Antiqua";
                conx.fillStyle = "black";
                conx.textAlign = "center";
                conx.fillText(this.cost, 0 + this.X, 30 * this.scale + this.Y);

            }
        };

        this.operations = function ()
        {
            if (this.visible == true)
            {
                this.drawSelf(0, 0, 1, false);
            }
        };

        this.cardSetUp(); // only does this once.
        this.operations(); //this task is repeated.
    }

    function takeHordeCard(playerOrAlt)
    {
        if (playerOrAlt == "player")
        {
            if (playerHordeDeck.length >= 1)
            {
                playerHordeHand.push(playerHordeDeck[0]);
                playerHordeDeck.splice(0, 1);
            }
        }
        else if (playerOrAlt == "alternate")
        {
            if (altHordeDeck.length >= 1)
            {
                altHordeHand.push(altHordeDeck[0]);
                altHordeDeck.splice(0, 1);
            }
        }
    }

    function creatureTotal(playerOrAlt)
    {
        var total = 0;
        if (playerOrAlt == "player")
        {
            for (var i = 0; i < playerHordeField.length; i++)
            {
                if (playerHordeField[i].type == "creature")
                {
                    total += 1;
                }
            }
        }
        else if (playerOrAlt == "alternate")
        {
            for (var i = 0; i < altHordeField.length; i++)
            {
                if (altHordeField[i].type == "creature")
                {
                    total += 1;
                }
            }
        }
        return total;
    }

    function shelfManager()
    {
        lowConx.beginPath();
        lowConx.fillStyle = "lightgrey";
        lowConx.fillRect(0, 0, 1400, 80);

        if (shelf == "game")
        {
            //End Turn Button
            lowConx.beginPath();
            lowConx.fillStyle = "gold";
            lowConx.lineWidth = 2;
            lowConx.strokeStyle = "black";
            lowConx.rect(0, 0, 60, 80);
            lowConx.fill();
            lowConx.stroke();

            lowConx.drawImage(horde1, 383, 192, 67, 85, -35 + 1/2 * 67, -40 + 1/2 * 85, 67, 85);
            if (lMouseX < 60 && lMouseX > 0 && clicked)
            {
                clicked = false;

                if (turn == "player")
                {
                    turn = 0;
                }
            }

            //Battle Points
            lowConx.beginPath();
            lowConx.fillStyle = "#ffc34d";
            lowConx.lineWidth = 2;
            lowConx.strokeStyle = "black";
            lowConx.rect(60, 0, 105, 80);
            lowConx.fill();
            lowConx.stroke();

            lowConx.drawImage(horde1, 365, 51, 111, 91, 2 + 1/2 * 111, - 50 + 1/2 * 91, 111, 91);

            //the number of Battle Points
            lowConx.font = "20px bold Book Antiqua";
            lowConx.fillStyle = "black";
            lowConx.textAlign = "center";
            lowConx.fillText(playerBattlePoints, 123, 60);
        }
    }

    function hordeGameManager() //todo figure out why this card drawing function leads to both players drawing more than 5. //todo also the ugly out of place card are from the player's and alternate's decks, those cards have not been given coordinate to go elswhere yet.
    {
        if (playerHordeLife && altHordeLife > 0)
        {
            if (turn == "undecided")
            {
                for (var i = 0; i < 5; i++)
                {
                    //player draws 5 to start
                    takeHordeCard("player");
                    //alternate draws 5 to start
                    takeHordeCard("alternate");
                }
            }

            //A coin flip determines who goes first.
            if (turn == "undecided")
            {
                turn = Math.round(Math.random());
            }

            //Draw Cycles.
            if (turn == 1)
            {
                currentGameRound += 1;
                playerBattlePoints += 1 + Math.floor(creatureTotal("player") / 2);
                takeHordeCard("player");
                turn = "player";
            }
            else if (turn == 0)
            {
                altBattlePoints += 1 + Math.floor(creatureTotal("alternate") / 2);
                takeHordeCard("alternate");
                turn = "alternate";
            }

            if (turn == "alternate")
            {
                //play a card or multiple.
                for (var i = 0; i < altHordeHand.length; i++)
                {
                    altAI.playACard();
                }
                turn = "altPlanningPhase";

            }

            if (turn == "altPlanningPhase")
            {
                turn = "altAttackPhase";
                altAI.planTheAssault();
            }

            if (turn == "altAttackPhase")
            {
                console.log(altAttacking)
            }
        }
    }

    function alternateAI()
    {
        //Variables
        var strongestEnemyAttack = 0;
        var strongestEnemyDefense = 0;
        var highestPower = 0;
        var leastEnemyAttack = 10000;
        var leastEnemyDefense = 10000;


        this.ableToAttack = function(who)
        {
            //This determinines how many of the cards played can attack
            if (who != true)
            {
                var amount = 0;
                for (var i = 0; i < altHordeField.length; i ++)
                {
                    if (altHordeField[i].type == "creature")
                    {
                        if (altHordeField[i].roundPlayed < currentGameRound)
                        {
                            amount += 1;
                        }
                        else
                        {
                            for (var j = 0; j < altHordeField[i].effects.length; j++)
                            {
                                if (altHordeField[i].effects[j][0] == "Frenzy")
                                {
                                    amount += 1;
                                    break;
                                }
                            }
                        }
                    }
                }
                return amount;
            }
            else //this tells you the number on the field list of those who can attack.
            {
                var whom = [];
                for (var i = 0; i < altHordeField.length; i ++)
                {
                    if (altHordeField[i].type == "creature")
                    {
                        if (altHordeField[i].roundPlayed < currentGameRound)
                        {
                            whom.push(i);
                        }
                        else
                        {
                            for (var j = 0; j < altHordeField[i].effects.length; j++)
                            {
                                if (altHordeField[i].effects[j][0] == "Frenzy")
                                {
                                    whom.push(i);
                                    break;
                                }
                            }
                        }
                    }
                }
                return whom;
            }

        };

        this.planTheAssault = function() //TODO figure out what's wrong with this function, most of the attack methods seem to be completely disregarded.
        {
            this.calculateWorstEnemyDefenseAndAttackOnField();
            //first it checks if any on the field can attack.
            if (this.ableToAttack() > 0)
            {
                //If the player has nothing on the field attack with everything available.
                if (creatureTotal("player") == 0 || caution == 1)
                {
                    for (var i = 0; i < this.ableToAttack(true).length; i++)
                    {
                        altAttacking.push(this.ableToAttack(true)[i]);
                    }
                }
                else if (caution >= 5) //!!!
                {
                    for (var i = 0; i < this.ableToAttack(true).length; i++)
                    {
                        var num = this.ableToAttack(true)[i];
                        if (altHordeField[num].attack >= strongestEnemyDefense || altHordeField[num].defense > strongestEnemyAttack)
                        {
                            altAttacking.push(num);
                        }
                    }
                    if (altAttacking.length == 0)
                    {
                        turn = 1;
                    }
                }
                else if (caution < 5)
                {
                    for (var i = 0; i < this.ableToAttack(true).length; i++)
                    {
                        if (altHordeField[this.ableToAttack(true)[i]].attack >= leastEnemyDefense && altHordeField[this.ableToAttack(true)[i]].defense > leastEnemyAttack)
                        {
                            altAttacking.push(this.ableToAttack(true)[i]);
                        }
                    }
                    if (altAttacking.length == 0)
                    {
                        turn = 1;
                    }
                }
                else
                {
                    if (altAttacking.length == 0)
                    {
                        turn = 1;
                    }
                    //todo eventually come up with another attack style.
                }
            }
            else
            {
                turn = 1;
            }
        };

        //playing cards
        this.playACard = function()
        {
            var goodGoodChoices = [];
            var goodChoices = [];
            var nextFromGoodChoices = [];
            var nextFromNextChoices = [];
            var afterChoices = [];
            var bestChoice = "none";

            this.highestPowered();

            if (creatureTotal("player") + 1 + (Math.round(Math.random() * 3)) > creatureTotal("alternate") && creatureTotal("alternate") < 6 || creatureTotal("player") == 0)
            {
                if (creatureTotal("player") > 0)
                {
                    this.calculateBestEnemyDefenseAndAttackOnField();
                }

                //look through the alternate's hand and see if it meets the following:
                for (var i = 0; i < altHordeHand.length; i++)
                {
                    //TODO later on have the AI first search for an anti infantry type spell to kill the creatures with...
                    //If there are no enemies on the field put the creatures with the highest amount of power so you can hurt there life the most.
                    if (altHordeHand[i].cost <= altBattlePoints && altHordeHand[i].type == "creature" && altHordeHand[i].subType == "normal" && altHordeHand[i].power >= highestPower && creatureTotal("player") == 0)
                    {
                        goodGoodChoices.push(i);
                    } //if your enemies do have cards on the field then play a card that surpasses theirs in stats.
                    else if (altHordeHand[i].cost <= altBattlePoints && altHordeHand[i].type == "creature" && altHordeHand[i].subType == "normal" && altHordeHand[i].attack >= strongestEnemyDefense && altHordeHand[i].defense > strongestEnemyAttack)
                    {
                        goodChoices.push(i);
                    } //if you do not have both stats at a strong point at least make sure that your damage can kill your enemies most defensive card.
                    else if (altHordeHand[i].cost <= altBattlePoints && altHordeHand[i].type == "creature" && altHordeHand[i].subType == "normal" && altHordeHand[i].attack >= strongestEnemyDefense)
                    {
                        nextFromGoodChoices.push(i);
                    } //if you only have good defense cards make sure to play one with more defense than the strongest offensive card your enemy has.
                    else if (altHordeHand[i].cost <= altBattlePoints && altHordeHand[i].type == "creature" && altHordeHand[i].subType == "normal" && altHordeHand[i].defense > strongestEnemyAttack)
                    {
                        nextFromNextChoices.push(i);
                    } //if you cant manage any of it just put out some cannon fodder for the enemy to trample on.
                    else if (altHordeHand[i].cost <= altBattlePoints && altHordeHand[i].type == "creature" && altHordeHand[i].subType == "normal")
                    {
                        afterChoices.push(i);
                    }
                }

                if (goodGoodChoices.length > 1)
                {
                    bestChoice = goodGoodChoices[Math.floor(Math.random() * goodGoodChoices.length)];
                }
                else if (goodGoodChoices.length == 1)
                {
                    bestChoice = goodGoodChoices[0];
                }
                else if (goodChoices.length > 1)
                {
                    bestChoice = goodChoices[Math.floor(Math.random() * goodChoices.length)];
                }
                else if (goodChoices.length == 1)
                {
                    bestChoice = goodChoices[0];
                }
                else if (nextFromGoodChoices.length > 1)
                {
                    bestChoice = nextFromGoodChoices[Math.floor(Math.random() * nextFromGoodChoices.length)];
                }
                else if (nextFromGoodChoices.length == 1)
                {
                    bestChoice = nextFromGoodChoices[0];
                }
                else if (nextFromNextChoices.length > 1)
                {
                    bestChoice = nextFromNextChoices[Math.floor(Math.random() * nextFromNextChoices.length)];
                }
                else if (nextFromNextChoices.length == 1)
                {
                    bestChoice = nextFromNextChoices[0];
                }
                else if (afterChoices.length > 1)
                {
                    bestChoice = afterChoices[Math.floor(Math.random() * afterChoices.length)];
                }
                else
                {
                    //If this is the result then the ai didn't have any creatures at all in their hand, or they could afford to play them.
                    //todo have it check spells and other things at this point.
                    bestChoice = "none";
                }

                if (bestChoice != "none")
                {
                    altBattlePoints -= altHordeHand[bestChoice].cost;

                    altHordeField.push(new HordeCard(altHordeHand[bestChoice].id, 0, 0, 0, true, currentGameRound));
                    altHordeHand.splice(bestChoice, 1);
                }
            }
            //todo add an else if that covers other possible plays that could be made. including saving up for a bigger play, or using spell cards.
        };

        this.highestPowered = function()
        {
            //highest power you can afford to play.
            for (var i = 0; i < altHordeHand.length; i++)
            {
                if (altHordeHand[i].cost <= altBattlePoints && altHordeHand[i].power > highestPower)
                {
                    highestPower = altHordeHand[i].power;
                }
            }
        };

        this.calculateBestEnemyDefenseAndAttackOnField = function()
        {
            for (var i = 0; i < playerHordeField.length; i++)
            {
                if (strongestEnemyDefense < playerHordeField[i].defense)
                {
                    strongestEnemyDefense = playerHordeField[i].defense;
                }
                if (strongestEnemyAttack < playerHordeField[i].attack)
                {
                    strongestEnemyAttack = playerHordeField[i].attack;
                }
            }
        };

        this.calculateWorstEnemyDefenseAndAttackOnField = function()
        {
            for (var i = 0; i < playerHordeField.length; i++)
            {
                if (leastEnemyDefense > playerHordeField[i].defense)
                {
                    leastEnemyDefense = playerHordeField[i].defense;
                }
                if (leastEnemyAttack > playerHordeField[i].attack)
                {
                    leastEnemyAttack = playerHordeField[i].attack;
                }
            }
        };
    }

    function hordeLoop()
    {
        conx.clearRect(0, 0, 1400, 550);

        //Sensing
        addEventListener("mousemove", getMousePositionOnWindow); //This enables the sensing of mouse movement for the window.
        lowCanv.addEventListener("mousemove", findMouse); //This enables the sensing of mouse movement for the lower canvas.
        lowCanv.addEventListener("mouseout", lowerCanvasMouseCoordsReset); //This obscures the mouse coordinates for the lower canvas when the mouse has left.
        canv.addEventListener("mousemove", locateMouse); //This enables the sensing of mouse movement for the main canvas.
        canv.addEventListener("mouseout", mainCanvasMouseCoordsReset); //This obscures the mouse coordinates for the main canvas when the mouse has left.
        addEventListener("mousedown", mouseClicked); //This enables the sensing of mouse clicking.
        addEventListener("mouseup", mouseReleased); //This enables the sensing of the mouse release from clicking.
        addEventListener("keyup", keyReleased); //This enables key release sensing.
        addEventListener("keydown", keyHeld); //This enables key press sensing.
        addEventListener("dblclick", doubleClicker);

        //Run List Managers
        for (var i = 0; i < playerHordeDeck.length; i++)
        {
            playerHordeDeck[i].operations();
            playerHordeDeck[i].cardSetUp();
            playerHordeDeck[i].owner = false;
            playerHordeDeck[i].face = false;
            playerHordeDeck[i].visible = false;
        }
        for (var i = 0; i < playerHordeGraveyard.length; i++)
        {
            playerHordeGraveyard[i].operations();
            playerHordeGraveyard[i].owner = true;
            playerHordeGraveyard[i].visible = false;
        }
        for (var i = 0; i < playerHordeHand.length; i++)
        {
            playerHordeHand[i].operations();
            playerHordeHand[i].cardSetUp();
            if (!playerHordeHand[i].inspection)
            {
                playerHordeHand[i].X = 38.25 + (70 * i);
                playerHordeHand[i].Y = 501.5;
                playerHordeHand[i].scale = 0.212;
            }
            playerHordeHand[i].owner = true;
            playerHordeHand[i].visible = true;
            playerHordeHand[i].playCardFromHand();
        }
        for (var i = 0; i < playerHordeField.length; i++)
        {
            playerHordeField[i].operations();
            if (!playerHordeField[i].inspection)
            {
                playerHordeField[i].X = 60.25 + (114 * i);
                playerHordeField[i].Y = 376.25;
                playerHordeField[i].scale = 0.36;
            }
            playerHordeField[i].owner = true;
            playerHordeField[i].visible = true;
        }
        for (var i = 0; i < altHordeDeck.length; i++)
        {
            altHordeDeck[i].operations();
            altHordeDeck[i].cardSetUp();
            altHordeDeck[i].owner = false;
            altHordeDeck[i].face = false;
            altHordeDeck[i].visible = false;
        }
        for (var i = 0; i < altHordeGraveyard.length; i++)
        {
            altHordeGraveyard[i].operations();
            altHordeGraveyard[i].owner = false;
            altHordeGraveyard[i].face = false;
            altHordeGraveyard[i].visible = false;
        }
        for (var i = 0; i < altHordeHand.length; i++)
        {
            altHordeHand[i].operations();
            altHordeHand[i].cardSetUp();
            if (!altHordeHand[i].inspection)
            {
                altHordeHand[i].X = 38.25 + (70 * i);
                altHordeHand[i].Y = 48.5;
                altHordeHand[i].scale = 0.212;
            }
            altHordeHand[i].owner = false;
            altHordeHand[i].face = false;
            altHordeHand[i].visible = true;
        }
        for (var i = 0; i < altHordeField.length; i++)
        {
            altHordeField[i].operations();
            if (!altHordeField[i].inspection)
            {
                altHordeField[i].X = 60.25 + (114 * i);
                altHordeField[i].Y = 550 - 376.25;
                altHordeField[i].scale = 0.36;
            }
            altHordeField[i].owner = false;
            altHordeField[i].face = true;
            altHordeField[i].visible = true;
        }
        //Operate the actually game mechanics here.
        shelfManager();
        hordeGameManager();


        dClick = false;
        //Reloop Game
        if (runHorde == true)
        {
            requestAnimationFrame(hordeLoop, canv);
        }
    }
    if (runHorde == true)
    {
        requestAnimationFrame(hordeLoop, canv);
    }
}
