/**
 * Created by skyeguy on 9/17/15.
 */
// this will be a two dimensional stick-figure based gun game, I would like to see this become some sort of a small RPG with an inventory, character enhancing, and also with a place to buy and sell equipment.

function imageInvasion()
{
    //sounds go here
    var snakeGun = new Audio("sounds/snakePistol.mp3");
    window.snakeGun = snakeGun;
    var insertClip = new Audio("sounds/insertClip.mp3");
    window.insertClip = insertClip;
    var breakRubble = new Audio("sounds/collapse.mp3");
    window.breakRubble = breakRubble;
    //images go here
    var invasion = new Image();
    invasion.src = "images/invasion.png";
    window.invasion = invasion;
    //sounds go here
    // the image starts the rest of the code...
    invasion.onload = function()
    {
        basicallyInvade();
    }
}

function basicallyInvade()
{
    var ic = document.getElementById("invasionBoard");
    var ictx = ic.getContext("2d");
    var mouseX = 0;
    var mouseY = 0;
    var iTPrev = false;
    var iTNow = 0;
    var iDT = 0;
    var mapCenterX = 450;
    var mapCenterY = 325;
    var worldX = 0;
    var worldY = 0;
    var grav = 1;
    var wok = 0;
    var wokStage = 0;
    var movementDest = 0;
    var zone = 0;
    var upPressed = 0;
    var downPressed = 0;
    var rightPressed = 0;
    var leftPressed = 0;
    var kDown = 0;
    var kUp = 0;
    var beginning = true;

    var bullets = [];
    var AIs = [];

    // add AI to each zone
    function aiAdder()
    {
       if (zone == 0)
       {
           AIs.push(new AI(100, 100, "Empiric Enforcer"));
       }
    }
    aiAdder();
    function invasionLoop(time)
    {
        window.addEventListener("mousemove", learnMouseCoords);
        window.addEventListener("click", fire);
        window.addEventListener("keydown", onKeyPress);
        window.addEventListener("keyup", onKeyRelease);
        characterMovement();

        timeStabilizer(time);
        Player.gravity();
        ictx.clearRect(0, 0, 900, 650);
        drawSetting();
        goToDestination();
        gunFire();
        Player.drawSelf();
        aiManager();
        Player.rotateHeadByMouse();
        drawAmmoCounter();
        window.requestAnimationFrame(invasionLoop, ic);
    }

    function drawAmmoCounter()
    {
        if (Player.gun == 1)
        {
            ictx.beginPath();
            ictx.fillStyle="black";
            ictx.fillRect(866, 645, 31, -20);
            ictx.beginPath();
            ictx.fillStyle="gold";
            ictx.font="14px Impact";
            ictx.fillText(Player.gun1Ammo, 870, 640);

            if (Player.gun1Clip == 6)
            {
                drawRooted(invasion, 559, 53.5, 13, 5, 0, 0, 52, 20, -810, -627);
            }
            else if (Player.gun1Clip == 5)
            {
                drawRooted(invasion, 559, 49.5, 13, 4, 0, 0, 52, 16, -810, -627);
            }
            else if (Player.gun1Clip == 4)
            {
                drawRooted(invasion, 559, 44.5, 13, 5, 0, 0, 52, 20, -810, -627);
            }
            else if (Player.gun1Clip == 3)
            {
                drawRooted(invasion, 559, 39.5, 13, 5, 0, 0, 52, 20, -810, -627);
            }
            else if (Player.gun1Clip == 2)
            {
                drawRooted(invasion, 559, 34.5, 13, 5, 0, 0, 52, 20, -810, -627);
            }
            else if (Player.gun1Clip == 1)
            {
                drawRooted(invasion, 559, 29.5, 13, 5, 0, 0, 52, 20, -810, -627);
            }
            else if (Player.gun1Clip <= 0)
            {
                drawRooted(invasion, 559, 24.5, 13, 5, 0, 0, 52, 20, -810, -627);
            }

            //TODO put clip ammo next to it and program in data for clips into everything...
        }
    }

    function timeStabilizer(time)
    {
        if (!iTPrev)
        {
            iTPrev = time;
        }
        iTNow = time;
        iDT = iTNow - iTPrev;
        iTPrev = time;
    }

    // a class for individually destructable terrain pieces.
    function destructableSetting(sizeX, sizeY, health, color)
    {
        this.alive = true;
        this.hp = health;
        // X and Y are set externally
        this.X = null;
        this.Y = null;

        this.rubbleBuf = true;

        this.damageSelf = function()
        {
            for (var i = 0; i < bullets.length; i++)
            {
                if (bullets[i].X < this.X + sizeX && bullets[i].X > this.X && bullets[i].Y < this.Y + sizeY && bullets[i].Y > this.Y && this.rubbleBuf == true)
                {
                    this.rubbleBuf = false;
                    this.hp -= 0.025;
                    console.log("bullet noticed " + "health is now at " + this.hp);
                }
            }

                this.rubbleBuf = true;
        };

        this.destructSelf = function()
        {
            if (this.hp <= 0 && this.alive != null)
            {
                this.alive = false;
            }

            if (this.alive == false)
            {
                breakRubble.play();
                this.alive = null;
            }
        };

        this.drawSelf = function()
        {
            if (this.alive == true)
            {
                ictx.beginPath();
                ictx.fillStyle= color;
                ictx.fillRect(this.X, this.Y, sizeX, sizeY);
                ictx.fill();
            }
        };

        this.operations = function()
        {
            //console.log( "Alive = " + this.alive + " this.X = " + this.X + " this.Y = " + this.Y + " sizeX = " + sizeX + " sizeY = " + sizeY + " health = " + this.hp + " colour = " + color);
            this.damageSelf();
            this.destructSelf();
            this.drawSelf();
        };

    }

    // DESTRUCTIBLE BLOCK LOADS
    var DBL = {};
    if (zone == 0)
    {
        // a destructable block #1
        DBL.blok1 = new destructableSetting(100, 100, 1, "grey");
        DBL.blok2a = new destructableSetting(70, 35, 0.5, "grey");
        DBL.blok2b = new destructableSetting(70, 35, 0.5, "grey");
        DBL.blok2c = new destructableSetting(70, 35, 0.5, "grey");
        DBL.blok3 = new destructableSetting(50, 80, 0.7, "darkgrey");
    }

    function drawSetting()
    {
        if (zone == 0)
        {
            //orange sky
            ictx.beginPath();
            ictx.fillStyle="orangeRed";
            ictx.fillRect(0, 0, 900, 650);
            ictx.fill();
            // the desert floor
            ictx.beginPath();
            ictx.fillStyle="#883322";
            ictx.fillRect(-12000 - worldX, 380 + worldY, 24000, 450);
            ictx.fill();
            // a platform
            ictx.beginPath();
            ictx.fillStyle="#665544";
            ictx.fillRect(800 - worldX, 300 + worldY, 450, 80);
            ictx.fill();
            // a platform
            ictx.beginPath();
            ictx.fillStyle="#665544";
            ictx.fillRect(2140 - worldX, 225 + worldY, 200, 155);
            ictx.fill();
            ictx.beginPath();
            ictx.fillStyle="#776666";
            ictx.fillRect(2090 - worldX, 320 + worldY, 100, 60);
            ictx.fill();
            // a barrier
            ictx.beginPath();
            ictx.fillStyle="#391111";
            ictx.fillRect(2350 - worldX, 260 + worldY, 10, 120);
            ictx.fill();
            // a destructible block #1
            DBL.blok1.X = 2690 - worldX;
            DBL.blok1.Y = 280 + worldY;
            DBL.blok1.operations();
            // a destructible block #2 parts a, b, and c
                //a
            DBL.blok2a.X = 3090 - worldX;
            DBL.blok2a.Y = 345 + worldY;
            DBL.blok2a.operations();
                //b
            DBL.blok2b.X = 3160 - worldX;
            DBL.blok2b.Y = 345 + worldY;
            DBL.blok2b.operations();
                //c
            DBL.blok2c.X = 3230 - worldX;
            DBL.blok2c.Y = 345 + worldY;
            DBL.blok2c.operations();
            // a destructible block #3
            DBL.blok3.X = 3800 - worldX;
            DBL.blok3.Y = 300 + worldY;
            DBL.blok3.operations();

        }

    }

    function aiManager()
    {
        for (var i = 0; i < AIs.length; i++)
        {
            AIs[i].loop();
        }
    }

    function onKeyPress(event)
    {
        kDown = event;

        //onkey down
        if (kDown.keyCode == 87 || kDown.keyCode == 38)
        {
            upPressed = 1;
        }
        if (kDown.keyCode == 68 || kDown.keyCode == 39)
        {
            rightPressed = 1;
        }
        if (kDown.keyCode == 65 || kDown.keyCode == 37)
        {
            leftPressed = 1;
        }
        if (kDown.keyCode == 83 || kDown.keyCode == 40)
        {
            downPressed = 1;
        }
    }

    function onKeyRelease(event)
    {
        kUp = event;

        // onkey release
        if (kUp.keyCode == 87 || kUp.keyCode == 38)
        {
            upPressed = 0;
        }
        if (kUp.keyCode == 68 || kUp.keyCode == 39)
        {
            rightPressed = 0;
        }
        if (kUp.keyCode == 65 || kUp.keyCode == 37)
        {
            leftPressed = 0;
        }
        if (kUp.keyCode == 83 || kUp.keyCode == 40)
        {
            downPressed = 0;
        }
    }
//TODO make arrays for obstacles and platforms!!! Condensing stuff is a good thing...
    function characterMovement()
    {
        if (zone == 0)
        {
            if (upPressed == 1)
            {
                //exceptions
                if (worldY == 1000000000) //basically this would be the point at which I could tell it not to jump because of a roof or something
                {
                    //don't jump up
                    upPressed = 0;
                    console.log("That would hurt my head.");
                }
                else
                {
                    //jump up
                    upPressed = 0;
                    worldY += 150;
                    console.log(worldY);

                }
            }
            if (rightPressed == 1)
            {
                //exceptions
                if (movementDest + 2 >= 1902 - 6 && movementDest + 2 <= 1902 + 6 && worldY <= 151)
                {
                    // don't move in direction: right
                    console.log("I cant go that way...");
                }
                else
                {
                    //move right
                    movementDest += 2;
                    console.log(worldX);
                }
            }
            if (leftPressed == 1)
            {
                // exceptions
                if (movementDest - 2 <= 1902 + 6 && movementDest - 2 >= 1902 - 6 && worldY <= 151)
                {
                    // don't move in direction: left
                    console.log("I cant go that way...");
                }
                else
                {
                    //move left
                    movementDest -= 2;
                    console.log(worldX);
                }
            }
        }
    }

    function goToDestination()
    {
        if (movementDest < worldX - 2)
        {
            worldX -= Player.speed;
            Player.walkAnimation();
        }
        else if (movementDest > worldX + 2)
        {
            worldX += Player.speed;
            Player.walkAnimation();
        }
        else
        {
            Player.backLeg1Rotation = 0;
            Player.frontLeg1Rotation = 0;
        }
    }

    function fire()
    {
        console.log(bullets);
            if (Player.gun == 1 && Player.gun1Ammo >= 1 || Player.gun1Clip >= 1)
            {
                if (Player.gun1Clip >= 1)
                {
                    snakeGun.currentTime = 0;
                    snakeGun.play();
                    Player.gun1Clip -= 1;
                    bullets.push(new Bullet);
                }
                else if (Player.gun1Ammo <= Player.gun1ClipSize)
                {
                    insertClip.currentTime = 0;
                    insertClip.play();
                    Player.gun1Clip = Player.gun1Ammo;
                    Player.gun1Ammo = 0;
                }
                else
                {
                    insertClip.load();
                    insertClip.play();
                    Player.gun1Clip = Player.gun1ClipSize;
                    Player.gun1Ammo -= Player.gun1ClipSize;
                }
            }
    }

    function drawRotated(img, cutX, cutY, cutW, cutH, x, y, skewW, skewH, degrees, centerX, centerY)
    {
        ictx.save();
        ictx.translate(x, y);
        ictx.rotate((degrees * (Math.PI) / 180));
        ictx.drawImage(img, cutX, cutY, cutW, cutH, -centerX, -centerY, skewW, skewH);
        ictx.restore();
    }

    function drawRooted(img, cutX, cutY, cutW, cutH, x, y, skewW, skewH, centerX, centerY)
    {
        ictx.save();
        ictx.translate(x, y);
        ictx.drawImage(img, cutX, cutY, cutW, cutH, -centerX, -centerY, skewW, skewH);
        ictx.restore();
    }

    function gunFire()
    {
        if (bullets.length)
        {
            for (var i = 0; i < bullets.length; i ++)
            {
               bullets[i].shoot();
            }
            //TODO complete the shooting animation... switch degrees to radians for sin and cos!!!
        }
    }

    function Bullet()
    {
        this.distance = 0;
        this.hitTarget = false;
        this.shotStep = 0;
        this.direction = Player.rotation;
        this.delete = function()
        {
            for (var i = 0; i < bullets.length; i++)
            {
                if ( this === bullets[i])
                {
                    bullets.splice(i, 1);
                    break;
                }
                else
                {
                    console.log("Lost the bullet!!! The bullet list system is broken!")
                }
            }
        };

        if (Player.gun == 1)
        {
            if (Player.rotation >= -90 && Player.rotation <= 90)
            {
                var dNozzle = Player.gun1Distance - 2;
                var aNozzle = Player.rotation - 15.5;
            }
            else if (Player.rotation < -90 || Player.rotation > 90)
            {
                var dNozzle = Player.gun1Distance - 2;
                var aNozzle = Player.rotation + 15.5;
            }
            this.startX = Player.gun1X + dNozzle * Math.cos(aNozzle * (Math.PI / 180));
            this.startY = Player.gun1Y + dNozzle * Math.sin(aNozzle * (Math.PI / 180));

            this.drawSelf = function(degrees, x, y)
            {
                //drawRotated(invasion, 535, 27, 6, 5, x, y, 18, 15, degrees, 3, 6);
                ictx.save();
                ictx.strokeStyle="yellow";
                ictx.translate(x, y);
                ictx.rotate(degrees * Math.PI / 180);
                ictx.moveTo(0, 0);
                ictx.lineTo(35, 0);
                ictx.stroke();
                ictx.restore();
            };
            this.shoot = function()
            {
                if (this.shotStep < 120)
                {
                    this.X = this.distance * Math.cos(this.direction * (Math.PI) / 180) + this.startX;
                    this.Y = this.distance * Math.sin(this.direction * (Math.PI) / 180) + this.startY;
                    this.drawSelf(this.direction, this.X, this.Y);
                    this.distance += 15 * (iDT/16.75);
                    this.shotStep += 1;
                    if (this.shotStep == 119 || this.hitTarget == true)
                    {
                        this.delete();
                    }
                }
            };
        }
    }

    function learnMouseCoords(event)
    {
        if (typeof(event.offsetX) == "undefined")
        {
            mouseX = event.clientX - ic.offsetLeft;
        }
        else
        {
            mouseX = event.offsetX;
        }

        if (typeof(event.offsetY) == "undefined")
        {
            mouseY = event.clientY - ic.offsetTop;
        }
        else
        {
            mouseY = event.offsetY;
        }
    }

    var Player = {};
    Player.gun = 1;
    Player.speed = 2;
    Player.gun1Ammo = 999;
    Player.gun1Clip = 6;
    Player.gun1ClipSize = 6;
    Player.rotation = 25;
    Player.X = mapCenterX;
    Player.Y = mapCenterY;
    Player.gun1X = 0;
    Player.gun1Y = 0;
    Player.gun1Rotation = 0;
    Player.backArm2X = 0;
    Player.backArm2Y = 0;
    Player.backLeg2X = 0;
    Player.backLeg2Y = 0;
    Player.frontArm2X = 0;
    Player.frontArm2Y = 0;
    Player.frontLeg2X = 0;
    Player.frontLeg2Y = 0;
    Player.backArm2Rotation = 0;
    Player.frontArm2Rotation = 0;
    Player.backArm1Rotation = 0;
    Player.frontArm1Rotation = 0;
    Player.backLeg2Rotation = 0; // do not change from 0.
    Player.frontLeg2Rotation = 0; // do not change from 0.
    Player.backLeg1Rotation = 25;
    Player.frontLeg1Rotation = 0;
    Player.arm1Distance = 20;
    Player.arm2Distance = 20;
    Player.leg1Distance = 0;
    Player.gun1Distance = 24; // this was 24 for the ball shaped bullet
    Player.yVelocity = 0;
    Player.walkAnimation = function()
    {

        if (wokStage <= 9 && wokStage >= 0)
        {
            wok = 0;
        }
        else if (wokStage <= 19 && wokStage > 9)
        {
            wok = 1;
        }
        else if (wokStage <= 29 && wokStage > 19)
        {
            wok = 0;
        }
        else if (wokStage <= 39 && wokStage > 29)
        {
            wok = 1;
        }
        else
        {
            Player.backLeg1Rotation = 0;
            Player.frontLeg1Rotation = 0;
            wokStage = 0;
        }

        if (wok == 0)
        {
            Player.backLeg1Rotation += 1;
            Player.frontLeg1Rotation -= 1;
        }
        else if (wok == 1)
        {
            Player.backLeg1Rotation -= 1;
            Player.frontLeg1Rotation += 1;
        }

        wokStage += 1
    };
    Player.gravity = function()
    {
        worldY += Player.yVelocity;
        if (zone == 0)
        {
            if (worldY <= 0 || worldX >= 360 && worldX <= 800 && worldY >= 80 && worldY <= 90 || worldX >= 1640 && worldX <= 1740 && worldY >= 60 && worldY <= 70 || worldX >= 1690 && worldX <= 1880 && worldY >= 155 && worldY <= 165)
            {
                Player.yVelocity = 0;
            }
            else
            {
                Player.yVelocity -= grav;
            }
        }
        else
        {
            if (worldY <= 0)
            {
                Player.yVelocity = 0;
            }
            else
            {
                Player.yVelocity -= grav;
            }
        }
    };

    Player.drawSelf = function()
    {
        // Draw the player's character using separate images for each movable body part.
            //Draw head facing either left or right depending on which way the Player is pointing.
        if (Player.rotation >= -90 && Player.rotation <= 90)
        {
            //back arm pt1
            drawRotated(invasion, 376, 19, 14, 27, Player.X, Player.Y - 8, 14, 27, (Player.rotation + 90) + Player.backArm1Rotation, 14/2, 27);
            //back arm pt2
            drawRotated(invasion, 424, 71, 9, 23, Player.backArm2X = Player.X + Player.arm1Distance * Math.cos((Player.rotation + Player.backArm1Rotation) * Math.PI/180), Player.backArm2Y = Player.Y -8 + Player.arm1Distance * Math.sin(Player.rotation * Math.PI/180), 14, 27, (Player.rotation - 90) + Player.backArm2Rotation, 9, 0);
            //back leg pt2
            drawRotated(invasion, 147, 35, 13, 37, Player.backLeg2X = Player.X - 3 + Player.leg1Distance * Math.cos((Player.backLeg1Rotation + Player.backLeg2Rotation) * Math.PI/180), Player.backLeg2Y = Player.Y + 8 + Player.leg1Distance * Math.sin(Player.backLeg1Rotation * Math.PI/180), 19, 33, Player.backLeg1Rotation + Player.backLeg2Rotation, 9, - 25);
            //back leg pt1
            drawRotated(invasion, 204, 35, 14, 36, Player.X - 3, Player.Y + 8, 14, 36, Player.backLeg1Rotation, 14/2, 0);
            //torso
            drawRooted(invasion, 309, 16, 45, 45, Player.X, Player.Y, 45, 45, 45/2, 45/2);
            //back leg pt2
            drawRotated(invasion, 147, 35, 13, 37, Player.frontLeg2X = Player.X - 3 + Player.leg1Distance * Math.cos((Player.frontLeg1Rotation + Player.frontLeg2Rotation) * Math.PI/180), Player.frontLeg2Y = Player.Y + 8 + Player.leg1Distance * Math.sin(Player.frontLeg1Rotation * Math.PI/180), 19, 33, Player.frontLeg1Rotation + Player.frontLeg2Rotation, 9, - 25);
            //front leg pt1
            drawRotated(invasion, 204, 35, 14, 36, Player.X - 3, Player.Y + 8, 14, 36, Player.frontLeg1Rotation, 14/2, 0);
            //head
            drawRotated(invasion, 13, 12, 42, 42, Player.X, Player.Y - 14, 42, 42, Player.rotation, 42/2, 35);
            //gun
            if (Player.gun == 1)
            {
                drawRotated(invasion, 475, 25, 22, 13, Player.gun1X = Player.backArm2X + Player.arm2Distance * Math.cos((Player.rotation + Player.backArm2Rotation) * Math.PI/180), Player.gun1Y = Player.backArm2Y + Player.arm2Distance * Math.sin(Player.rotation * Math.PI/180), 22, 13, Player.rotation + Player.gun1Rotation, 0, 9);
            }
            //front arm pt1
            drawRotated(invasion, 376, 19, 14, 27, Player.X, Player.Y - 8, 14, 27, Player.rotation + 94, 14/2, 27);
            //front arm pt2
            drawRotated(invasion, 424, 71, 9, 23, Player.frontArm2X = Player.X + Player.arm1Distance * Math.cos((Player.rotation + Player.frontArm1Rotation) * Math.PI/180), Player.frontArm2Y = Player.Y -8 + Player.arm1Distance * Math.sin(Player.rotation * Math.PI/180), 14, 27, (Player.rotation - 90) + Player.frontArm2Rotation, 9, 0);
        }
        else if (Player.rotation < -90 || Player.rotation > 90)
        {
            //back arm pt1
            drawRotated(invasion, 423, 20, 11, 27, Player.X, Player.Y -8, 14, 27, Player.rotation + 90, 11/2, 27);
            //back arm pt2
            drawRotated(invasion, 378, 71, 9, 23, Player.backArm2X = Player.X + Player.arm1Distance * Math.cos((Player.rotation + Player.backArm1Rotation) * Math.PI/180), Player.backArm2Y = Player.Y -8 + Player.arm1Distance * Math.sin(Player.rotation * Math.PI/180), 14, 27, (Player.rotation - 90) + Player.backArm2Rotation, 9, 0);
            //back leg pt2
            drawRotated(invasion, 84, 34, 13, 37, Player.backLeg2X = Player.X + Player.leg1Distance * Math.cos((Player.backLeg1Rotation + Player.backLeg1Rotation) * Math.PI/180), Player.backLeg2Y = Player.Y + 8 + Player.leg1Distance * Math.sin(Player.backLeg1Rotation * Math.PI/180), 19, 33, Player.backLeg1Rotation + Player.backLeg2Rotation, 7.5, - 25);
            //back leg pt1
            drawRotated(invasion, 261, 36, 14, 36, Player.X, Player.Y + 8, 14, 36, Player.backLeg1Rotation, 14/2, 0);
            //torso
            drawRooted(invasion, 478, 59, 45, 45, Player.X, Player.Y, 45, 45, 45/2, 45/2);
            //front leg pt2
            drawRotated(invasion, 84, 34, 13, 37, Player.frontLeg2X = Player.X + Player.leg1Distance * Math.cos((Player.frontLeg1Rotation + Player.frontLeg2Rotation) * Math.PI/180), Player.frontLeg2Y = Player.Y + 8 + Player.leg1Distance * Math.sin(Player.frontLeg1Rotation * Math.PI/180), 19, 33, Player.frontLeg1Rotation + Player.frontLeg2Rotation, 7.5, - 25);
            //front leg pt1
            drawRotated(invasion, 261, 36, 14, 36, Player.X, Player.Y + 8, 14, 36, Player.frontLeg1Rotation, 14/2, 0);
            //head
            drawRotated(invasion, 13, 64, 42, 42, Player.X, Player.Y - 14, 42, 42, Player.rotation + 180, 42/2, 35);
            if (Player.gun == 1)
            {
                drawRotated(invasion, 506, 24, 22, 13, Player.gun1X = Player.backArm2X + Player.arm2Distance * Math.cos((Player.rotation + Player.backArm2Rotation) * Math.PI/180), Player.gun1Y = Player.backArm2Y + Player.arm2Distance * Math.sin(Player.rotation * Math.PI/180), 22, 13, (Player.rotation + 180) + Player.gun1Rotation, 22, 11);
            }
            //front arm pt1
            drawRotated(invasion, 423, 20, 11, 27, Player.X, Player.Y -8, 14, 27, Player.rotation + 94, 11/2, 27);
            //front arm pt2
            drawRotated(invasion, 378, 71, 9, 23, Player.frontArm2X = Player.X + Player.arm1Distance * Math.cos((Player.rotation + Player.frontArm1Rotation) * Math.PI/180), Player.frontArm2Y = Player.Y -8 + Player.arm1Distance * Math.sin(Player.rotation * Math.PI/180), 14, 27, (Player.rotation - 90) + Player.frontArm2Rotation, 9, 0);
        }
    };
    Player.rotateHeadByMouse= function()
    {
        var headX = Player.X;
        var headY = Player.Y - 14;
        Player.rotation = Math.atan2(mouseY - headY, mouseX - headX) * 180 / Math.PI;
    };

    function AI(x, y, type)
    {
        // "Emperic Enforcer"
        this.typeOfAI = type;
        this.isHostile = true;
        this.rotation = 0;
        this.X = x;
        this.Y = y;
        this.brain = function()
        {
            //TODO add the actual intelligence of the AI here.
        };
        this.drawSelf = function()
        {

            //TODO dad's trig practice isn't working for me... limb rotation doesn't work, still!!!
            // x1/y1 = x0/y0 * cos/sin(the rotation angle of the thigh in radians) * the length of the leg
            // the above doesn't work, but it should, I also tried it with addition after x0/y0 rather than multiplication, that didn't work either...
            // sad, because that is the exact formula that theoretically was supposed to work, at least according to what dad taught me.

            if (this.typeOfAI == "Empiric Enforcer")
            {
                this.ftLeg1Rot = 70;
                this.ftLeg2Rot = 0;
                this.bkLeg1Rot = 0;
                this.bkLeg2Rot = 0;
                this.leg1Dist = -70;

                if (this.rotation >= -90 && this.rotation <= 90)
                {
                    //back leg pt2
                    drawRotated(invasion, 1405, 137, 15, 29, (this.X - worldX) + Math.cos(Math.PI/180 * this.bkLeg1Rot) * this.leg1Dist, (this.Y + worldY) + Math.sin(Math.PI/180 * this.bkLeg1Rot) * this.leg1Dist, 15, 29, this.bkLeg2Rot + this.bkLeg1Rot, 7.5, 27);
                    //back leg pt1
                    drawRotated(invasion, 1403, 78, 18, 34, (this.X - worldX), (this.Y + worldY) + 12.5, 18, 34, this.bkLeg1Rot, 18/2, 0);
                    //torso
                    drawRooted(invasion, 1450, 9, 31, 42, (this.X - worldX), (this.Y + worldY), 31, 42, 31 / 2, 42 / 2);
                    //front leg pt2
                    drawRotated(invasion, 1405, 137, 15, 29, (this.X - worldX) + Math.cos(Math.PI/180 * this.ftLeg1Rot) * this.leg1Dist, (this.Y + worldY) + Math.sin(Math.PI/180 * this.ftLeg1Rot) * this.leg1Dist, 15, 29, this.ftLeg2Rot + this.ftLeg1Rot, 7.5, 27);
                    //front leg pt1
                    drawRotated(invasion, 1447, 81, 18, 34, (this.X - worldX), (this.Y + worldY) + 12.5, 18, 34, this.ftLeg1Rot, 18/2, 0);
                }
                else if (this.rotation < -90 || this.rotation > 90)
                {
                    //torso
                    drawRooted(invasion, 1398, 8, 31, 42, (this.X - worldX), (this.Y + worldY), 31, 42, 31 / 2, 42 / 2);
                }
            }
        };
        this.loop = function()
        {
            //TODO put all of the AI's repeatable actions and intelligence here (perhaps make another function for intelligence and call it here)
            this.drawSelf();
        };
    }

    window.requestAnimationFrame(invasionLoop, ic);
}