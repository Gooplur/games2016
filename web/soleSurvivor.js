/**
 * Created by skyeguy on 9/13/15.
 */
// here is an example of how to upload and draw images in javascript.
//var airplane = new Image();
    //airplane.src = ""images/airplane.png";
//ctx.drawImage( airplane, x, y );
//
// here is how you add sound into JS:
// var audio = new Audio('audio_file.mp3');
// audio.play();

// this is how you can draw a rotated image, centered, in any x and y position you want!!!
//
// function drawRotatedImage( ctx, image, ix, iy, iw, ih, x, y, angle )
//{
//    ctx.save();
//    ctx.translate( x, y );
//    ctx.rotate( angle );
//    ctx.drawImage( image,  ix, iy, iw, ih, -iw/2, -ih/2 );
//    ctx.restore();
//}

//TODO perhaps add an ending animation to this game... or maybe an ending animation that continues a second part of the game?
// here are my loaded images
var plane = new Image();
plane.src = "images/airplane.png";

// here are my loaded sounds
var Xplode = new Audio("sounds/shortExplosion.mp3");
var longBurning = new Audio("sounds/longBurning.mp3");
longBurning.load();
var coinCollect = new Audio("sounds/Blop.mp3");
coinCollect.load();
var smashed = new Audio("sounds/impact.mp3");
smashed.load();
var rewarded = new Audio("sounds/greatness.mp3");
rewarded.load();
var birdCall = new Audio("sounds/birdCall.mp3")
birdCall.load();

function startFallLoop()
{
    var tNow = false;
    var tPrev = false;
    var deltaT = false;
    var gameLength = 0;
    var can = document.getElementById("skyDrop");
    var vas = can.getContext("2d");
    var fallScore = document.getElementById("fallingScore");
    var paraX = 400;
    var paraY = 400;
    var destX = 400;
    var destY = 0;
    var paraXV = 2.5;
    var dirr = false;
    var collision = false; //set to false
    var armFlailAnimationStage = 0;
    var z = 1;
    var needToRestartGame = false;
    var planeX = 1000;
    var planeY = 300;
    var planeXV = 5;
    var planeAnimationStage = 0;
    var airplaneScene = true;
    var flameFrame = 0;
    var explodeFrame = 0;
    var paraIX = 400;
    var paraIY = 400;
    var paraIXV = 1;
    var paraIYV = 2;
    var score = 0;
    var paraInPlane = true;
    var longBurningPlayed = false;
    var playCollisionSound = true;
    var playRewardedSound = true;
    var birdSummon = true;
    var isGameActive = true;

    function imageDrawBoard(context, x, y, degrees, image, cutX, cutY, cutW, cutH, skewW, skewH)
    {
        context.save();
        context.translate( x, y);
        context.rotate((Math.PI * 2 / 180) * degrees);
        context.drawImage(image, cutX, cutY, cutW, cutH, (cutW / 2), (cutH / 2), skewW, skewH);
        context.restore();
    }

    function Bird()
    {
      this.birdX = [-30, 830];
      this.birdY = 0;
      this.positionListLX = [-30, -80, -120, -180, -220, -270];
      this.positionListRX = [830, 880, 920, 980, 1020, 1070];
      this.positionListY = [630, 710, 840, 960, 1080, 1220];
      this.flapStage = 0;
      this.birdCalled = false;
      this.birdDirr = Math.floor(Math.random() * 2);
      this.getNewYPos = function()
      {
          var rndY = Math.floor(Math.random() * this.positionListY.length);
          this.birdY = this.positionListY[rndY];
      };
      this.screenCrossL = function()
      {
        if (this.birdX[1] >= 830)
        {
            var rndLX = Math.floor(Math.random() * this.positionListLX.length);
            this.birdX[1] = this.positionListLX[rndLX];
            this.getNewYPos();
        }
          this.birdX[1] += 2;
          this.birdY -= 1;
      };
      this.screenCrossR = function()
      {
        if (this.birdX[0] <= -30)
        {
            var rndRX = Math.floor(Math.random() * this.positionListRX.length);
            this.birdX[0] = this.positionListRX[rndRX];
            this.getNewYPos();
        }
        this.birdX[0] -= 1.5;
        this.birdY -= 1;
      };
       this.flap = function(leftOrRight)
       {
           this.flapStage += 0.15;
           if (this.flapStage > 3)
           {
               this.flapStage = 0;
           }
           if (leftOrRight == 0) // left, so the second value in the birdX list, 1.
           {
               if (this.flapStage <= 1.5)
               {
                   vas.drawImage(plane, 113, 116, 20, 15, this.birdX[1] + 9, this.birdY + 6, 50, 50);
               }
               if (this.flapStage > 1.5 && this.flapStage <= 3)
               {
                   vas.drawImage(plane, 129, 137, 20, 15, this.birdX[1] + 9, this.birdY + 5, 50, 50);
               }
           }
           if (leftOrRight == 1) // right, so the first value in the bird list, 0.
           {
               if (this.flapStage <= 1.5)
               {
                   vas.drawImage(plane, 230, 81, 20, 15, this.birdX[0] + 9, this.birdY + 7, 50, 50);
               }
               if (this.flapStage > 1.5 && this.flapStage <= 3)
               {
                   vas.drawImage(plane, 230, 41, 20, 15, this.birdX[0] + 10, this.birdY + 6, 50, 50);
               }
           }
       };
      this.screenFly = function()
      {
         if (this.birdDirr == 0 && this.birdX[1] >= 830)
         {
             this.birdDirr = Math.floor(Math.random() * 2);
         }
         else if (this.birdDirr == 1 && this.birdX[0] <= -30)
         {
             this.birdDirr = Math.floor(Math.random() * 2);
         }
         if (this.birdDirr == 0)
         {
             this.screenCrossL();
             if (this.birdX[1] + 8 <= paraX && this.birdX[1] + 49 >= paraX && this.birdY - 35 <= paraY && this.birdY + 45 >= paraY)
             {
                collision = true;
                if (this.birdCalled == false)
                {
                    birdCall.play();
                    setTimeout(shortenBirdCall, 500);
                    this.birdCalled = true;
                }
             }
         }
         else if (this.birdDirr == 1)
         {
             this.screenCrossR();
             if (this.birdX[0] + 6 <= paraX && this.birdX[0] + 49 >= paraX && this.birdY - 60 <= paraY && this.birdY + 45 >= paraY)
             {
                 collision = true;
                 if (this.birdCalled == false)
                 {
                     birdCall.play();
                     setTimeout(shortenBirdCall, 500);
                     this.birdCalled = true;
                 }
             }
         }
         this.flap(this.birdDirr);

      };
    }

    function Cloud()
    {
        this.cloudX = 100;
        this.cloudY = -120;
        this.positionListY = [670, 620, 700, 750, 800, 840, 950, 910, 860, 1000, 1065, 1130];
        this.positionListX = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800];
        this.upFall = function()
        {

            if (this.cloudY <= -120)
            {
                var pX = Math.floor(Math.random() * this.positionListX.length);
                this.cloudX = this.positionListX[pX];
                var pY = Math.floor(Math.random() * this.positionListY.length);
                this.cloudY = this.positionListY[pY];
            }
            else
            {
                this.cloudY -= (deltaT / 16.75);
                vas.drawImage(plane, 214, 8, 36, 29, this.cloudX - 17.5, this.cloudY - 14.5, 160, 160);
            }
        }
    }

    function Debris()
    {
        this.gotCoin = false;
        this.degrees = 0;
        this.debrisX = 0;
        this.debrisY = -80;
        this.debrisYV = 3.5;
        this.debrisType = "suitcase";
        this.getNewType = function()
        {
            var typeNumber = Math.floor(Math.random() * 11);

            if (typeNumber <= 1)
            {
                this.debrisType = "seat";
            }
            else if (typeNumber > 1 && typeNumber <= 2)
            {
                this.debrisType = "passenger";
            }
            else if (typeNumber > 2 && typeNumber <= 3)
            {
                this.debrisType = "seatedPassenger";
            }
            else if (typeNumber > 3 && typeNumber <= 5)
            {
                this.debrisType = "suitcase";
            }
            else if (typeNumber > 5 && typeNumber <= 7)
            {
                this.debrisType = "coin";
            }
            else if (typeNumber > 7 && typeNumber <= 10)
            {
                this.debrisType = "rubble";
            }
        };
        this.getNewFallCoords = function()
        {
            this.debrisX = Math.floor(Math.random() * 801);
        };
        this.debrisFall = function()
        {
            if (this.debrisType == "passenger")
            {
                imageDrawBoard(vas, this.debrisX, this.debrisY, 0, plane, 64, 119, 48, 38, 120, 120);
                this.debrisY += this.debrisYV * (deltaT / 16.75);
                this.degrees -= 5;

                if (paraX >= this.debrisX + 20 && paraX <= this.debrisX + 115 && paraY >= this.debrisY - 10 && paraY <= this.debrisY + 90)
                {
                    collision = true;
                }
            }
            else if (this.debrisType == "seat")
            {
                imageDrawBoard(vas, this.debrisX, this.debrisY, 0, plane, 187, 59, 31, 26, 80, 80);
                this.debrisY += this.debrisYV * (deltaT / 16.75);
                this.degrees += 7;

                if (paraX >= this.debrisX + 35 && paraX <= this.debrisX + 75 && paraY >= this.debrisY - 10 && paraY <= this.debrisY + 65)
                {
                    collision = true;
                }
            }
            else if (this.debrisType == "seatedPassenger")
            {
                imageDrawBoard(vas, this.debrisX, this.debrisY, 0, plane, 155, 28, 47, 31, 110, 110);
                this.debrisY += this.debrisYV * (deltaT / 16.75);
                this.degrees += 2;

                if (paraX >= this.debrisX + 40 && paraX <= this.debrisX + 105 && paraY >= this.debrisY - 10 && paraY <= this.debrisY + 90)
                {
                    collision = true;
                }
            }
            else if (this.debrisType == "rubble")
            {
                imageDrawBoard(vas, this.debrisX, this.debrisY, 0, plane, 19, 112, 40, 43, 145, 145);
                this.debrisY += this.debrisYV * (deltaT / 16.75);
                this.degrees -= 1;

                if (paraX >= this.debrisX + 28 && paraX <= this.debrisX + 140 && paraY >= this.debrisY - 20 && paraY <= this.debrisY + 132)
                {
                    collision = true;
                }
            }
            else if (this.debrisType == "coin")
            {
                if (this.gotCoin == false)
                {
                    vas.beginPath();
                    vas.arc(this.debrisX, this.debrisY, 7, 0, (2 * Math.PI));
                    vas.fillStyle="gold";
                    vas.fill();
                    this.degrees += 3;

                    if (paraX >= this.debrisX - 10 && paraX <= this.debrisX + 10 && paraY >= this.debrisY - 59 && paraY <= this.debrisY + 7)
                    {
                        coinCollect.play();
                        score += 1;
                        this.gotCoin = true;
                    }
                }
                this.debrisY += (this.debrisYV -1) * (deltaT / 16.75);
            }
            else if (this.debrisType == "suitcase")
            {
                imageDrawBoard(vas, this.debrisX, this.debrisY, 0, plane, 186, 6, 16, 13, 40, 40);
                this.debrisY += this.debrisYV * (deltaT / 16.75);
                this.degrees += 4;

                if (paraX >= this.debrisX - 3 && paraX <= this.debrisX + 34 && paraY >= this.debrisY - 55 && paraY <= this.debrisY + 34)
                {
                    collision = true;
                }
            }

            if (this.degrees >= 360 || this.degrees <= -360)
            {
                this.degrees = 0;
            }

            if (this.debrisY >= 880)
            {
                this.getNewFallCoords();
                this.getNewType();
                this.degrees = 0;
                this.debrisY = -80;
                this.gotCoin = false;
            }
        }

    }
// this is how many obstacles there are...
    var debrisList = [];
    // add six new debris to the game.
    for (var i = 0; i < 6; i++)
    {
        debrisList.push(new Debris());
    }
// this is how many clouds there are...
    var cloudList = [];
    //add eight clouds to the game
    for (var j = 0; j < 8; j++)
    {
        cloudList.push(new Cloud());
    }
// this is how many birds there are... but it is in a function so it is only activated later in the game.
    var birdList = [];
    function addNewBird(x)
    {
        for (var i = 0; i < x; i++)
        {
            birdList.push(new Bird());
        }
    }

    // this is the main game loop, it is triggered by the intro sequence.
    function fallLoop(time)
    {
        if (isGameActive == true)
        {
            vas.clearRect(0, 0, 800, 800);
            drawSky();
            drawClouds();
            timeChange(time);
            gameLength += deltaT;
            birdSeason();
            conjureBirds();
            drawParaGuy();
            fallScore.innerHTML= score;
            rewardPathway();
            activateFallers();
            needToRestartChecker();
            goToDest();
        }
        can.addEventListener("mousemove", setDestMouse);
        can.addEventListener("click", repatacionDelJuego);
        window.requestAnimationFrame(fallLoop, can);
    }

    function birdSeason()
    {
        if (((gameLength / 1000) / 60) < 4)
        {
            birdSummon = true;
        }
        else if (((gameLength / 1000) / 60) >= 4 && ((gameLength / 1000) / 60) <= 6)
        {
            if (birdSummon == true)
            {
                addNewBird(1);
                birdSummon = false;
            }
        }
        else if (((gameLength / 1000) / 60) > 6 && ((gameLength / 1000) / 60) <= 7)
        {
            birdSummon = true;
        }
        else if (((gameLength / 1000) / 60) >= 9 && ((gameLength / 1000) / 60) <= 10)
        {
            if (birdSummon == true)
            {
                addNewBird(2);
                birdSummon = false;
            }
        }
    }

    function repatacionDelJuego()
    {
        if (destX >= 150 && destX <= 650 && destY >= 150 && destY <= 450)
        {
            if (needToRestartGame == "no")
            {
                needToRestartGame = false;
                location.reload();
            }
        }
    }
    function shortenBirdCall()
    {
        birdCall.pause();
        birdCall.load();
    }

    function conjureBirds()
    {
       for (var i = 0; i < birdList.length; i++)
       {
           birdList[i].screenFly();
       }
    }

    function rewardPathway()
    {
        if (score >= 100 && score < 299)
        {
            if (playRewardedSound == true)
            {
                rewarded.play();
            }
            playRewardedSound = false;
            paraXV = 4;
        }
        if (score == 299)
        {
            playRewardedSound = true;
            paraXV = 4;
        }
        else if (score >= 300)
        {
            if (playRewardedSound == true)
            {
                rewarded.play();
            }
            playRewardedSound = false;
            paraXV = 5.5;
        }
    }

    function activateFallers()
    {
        for (var i = 0; i < debrisList.length; i++)
        {
            debrisList[i].debrisFall();
        }
    }

    // a function for keeping track of how much real time has passed
    function timeChange(time)
    {
        if (!tPrev)
        {
            tPrev = time;
        }
        tNow = time;
        deltaT = tNow - tPrev;
        tPrev = time;
        // now deltaT (difference in time) can be used to balance requestAnimationFrame's looping speed with real time. example: guyX += velocity * (deltaT / a good processing time);
        // console.log(deltaT) to see the current requestAnimationFrame speed in milliseconds, if you like how your game is running at the speed then divide your deltaT by that number.
    }

    function drawClouds()
    {
        for (var i = 0; i < cloudList.length; i++)
        {
            cloudList[i].upFall();
        }
    }

    function drawSky()
    {
        vas.beginPath();
        vas.rect(0, 0, 800, 800);
        vas.fillStyle="skyBlue";
        vas.fill();
    }

    function drawAirplane()
    {
        // here is how the draw image function works:
        // img , cutX, cutY, cut width, cut height, canvasX, canvasY, real width, real height
        // here is an example: vas.drawImage(plane, 0, 0, plane.width / 2, plane.height / 2, 100, 400, plane.width, plane.height);
        // you need to have all of the arguments filled otherwise it will try to adjust your images size instead of cutting out the piece that you want.
        // if the other arguments are not present, then the format becomes: img, canvasX, canvasY, real width, real height
        // here is an example of this case: vas.drawImage(plane, 100, 400, plane.width, plane.height);
        if (longBurningPlayed == false)
        {
            longBurning.play();
            longBurningPlayed = true;
            setTimeout(notBurningForLong, 3000);
        }
        vas.clearRect(0, 0, 800, 800);
        drawSky();

        if (planeAnimationStage == 0)
        {
            vas.drawImage(plane, 0, 0, 72, 50, planeX, planeY, 120, 70);
            animatePlaneFire();

            planeX -= planeXV;

            if (planeX >= 400 && planeX <= 415 && paraInPlane == true)
            {
                paraIX = planeX + 45;
                paraIY = planeY + 35;
                paraInPlane = false;
            }
        }

        if (paraInPlane == false && paraIY < 870)
        {
            drawIntroParaGuy();
            can.addEventListener("mousemove", setDestMouse);
            goToDestIntro();
            paraIY += paraIYV;
        }
        else if (paraIY >= 870 && planeAnimationStage == 2)
        {
            airplaneScene = false;
        }

        if (planeX <= 300 && planeAnimationStage == 0)
        {
            planeAnimationStage = 1;
        }

        if (planeAnimationStage == 1)
        {
            //this is where the plane explodes
            animateExplodePlane()
        }

        if (airplaneScene)
        {
            setTimeout(drawAirplane, 16.75);
        }
        else
        {
            window.requestAnimationFrame(fallLoop, can);
        }
    }

    function drawParaGuy()
    {
        // para guy's head
        vas.beginPath();
        vas.arc(paraX, paraY, 10, 0, (2 * Math.PI));
        vas.fillStyle="grey";
        vas.fill();
        // para guy's torso
        vas.beginPath();
        vas.lineWidth= 3;
        vas.moveTo(paraX, (paraY + 10));
        vas.lineTo(paraX, (paraY + 35));
        vas.strokeStyle="black";
        vas.stroke();
        if (collision == false)
        {
            // para guy's left arm
            vas.beginPath();
            vas.lineWidth= 2;
            vas.moveTo(paraX, (paraY + 18));
            vas.lineTo((paraX - 20), (paraY - 15));
            vas.stroke();

            // para guy's right arm
            vas.beginPath();
            vas.lineWidth= 2;
            vas.moveTo(paraX, (paraY + 18));
            vas.lineTo((paraX + 20), (paraY - 15));
            vas.stroke();
        }
        else if (collision == true)
        {
            if (playCollisionSound == true)
            {
                smashed.play();
                playCollisionSound = false;
            }
                flailingArms();
        }
        // para guy's left leg
        vas.beginPath();
        vas.lineWidth= 2;
        vas.moveTo(paraX, (paraY + 30));
        vas.lineTo((paraX - 6), (paraY + 66) );
        vas.stroke();
        // para guy's right leg
        vas.beginPath();
        vas.lineWidth= 2;
        vas.moveTo(paraX, (paraY + 30));
        vas.lineTo((paraX + 6), (paraY + 66));
        vas.stroke();
        // para guy's parachute
            // the handle
        vas.beginPath();
        vas.lineWidth= 3;
        vas.strokeStyle="tan";
        vas.moveTo((paraX - 24), (paraY - 13));
        vas.lineTo((paraX + 24), (paraY - 13));
        vas.stroke();
            // the two connector strings (also some code to account for movement rotation)
        if (dirr == false)
        {
            vas.lineWidth= 1;
            vas.strokeStyle="darkGrey";
            //left
            vas.moveTo((paraX - 24), (paraY - 13));
            vas.lineTo((paraX - 28), (paraY - 90));
            //right
            vas.moveTo((paraX + 24), (paraY - 13));
            vas.lineTo((paraX + 28), (paraY - 90));
            vas.stroke();
        }
        if (dirr == "left")
        {
            vas.lineWidth= 1;
            vas.strokeStyle="darkGrey";
            //left
            vas.moveTo((paraX - 24), (paraY - 13));
            vas.lineTo((paraX - 13), (paraY - 96));
            //right
            vas.moveTo((paraX + 24), (paraY - 13));
            vas.lineTo((paraX + 43), (paraY - 96));
            vas.stroke();
        }
        if (dirr == "right")
        {
            vas.lineWidth= 1;
            vas.strokeStyle="darkGrey";
            //left
            vas.moveTo((paraX - 24), (paraY - 13));
            vas.lineTo((paraX - 43), (paraY - 96));
            //right
            vas.moveTo((paraX + 24), (paraY - 13));
            vas.lineTo((paraX + 13), (paraY - 96));
            vas.stroke();
        }
            // the chute itself (also some code to account for movement rotation)
        if (dirr == false)
        {
            vas.beginPath();
            vas.arc(paraX, (paraY - 90), 40, Math.PI, (2 * Math.PI));
            vas.fillStyle="lightGrey";
            vas.fill();
        }
        else if (dirr == "left")
        {
            vas.beginPath();
            vas.arc((paraX + 15), (paraY - 90), 40, Math.PI + 0.15, (2 * Math.PI) + 0.15);
            vas.fillStyle="lightGrey";
            vas.fill();
        }
        else if (dirr == "right")
        {
            vas.beginPath();
            vas.arc((paraX - 15), (paraY - 90), 40, Math.PI - 0.15, (2 * Math.PI) - 0.15);
            vas.fillStyle="lightGrey";
            vas.fill();
        }
    }

    function setDestMouse(event)
    {
        if (typeof(event.offsetX) == "undefined")
        {
           destX = event.clientX - can.offsetLeft;
        }
        else
        {
            destX = event.offsetX;
        }

        if (typeof(event.offsetY) == "undefined")
        {
            destY = event.clientY - can.offsetTop;
        }
        else
        {
            destY = event.offsetY;
        }
    }

    function goToDest()
    {
        // go towards mouse if not already at it.
        if (paraX < (destX - 4))
        {
            paraX += (paraXV * (deltaT / 16.75));
            dirr = "right";
        }
        else if (paraX > (destX + 4))
        {
            paraX -= (paraXV * (deltaT / 16.75));
            dirr = "left";
        }
        else if (paraX >= (destX - 4) && paraX <= (destX + 4))
        {
            dirr = false;
        }

    }

    function flailingArms()
    {
        if (paraY < 950)
        {
            paraY += (4 * (deltaT / 16.75));

            armFlailAnimationStage += z;

            if (armFlailAnimationStage == 0)
            {
                // para guy's left arm
                vas.beginPath();
                vas.strokeStyle="black";
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX - 20), (paraY - 15));
                vas.stroke();

                // para guy's right arm
                vas.beginPath();
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX + 20), (paraY - 15));
                vas.stroke();
            }
            else if (armFlailAnimationStage == 1)
            {
                // para guy's left arm
                vas.beginPath();
                vas.strokeStyle="black";
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX - 22), (paraY - 10));
                vas.stroke();

                // para guy's right arm
                vas.beginPath();
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX + 22), (paraY - 10));
                vas.stroke();
            }
            else if (armFlailAnimationStage == 2)
            {
                // para guy's left arm
                vas.beginPath();
                vas.strokeStyle="black";
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX - 24), (paraY - 5));
                vas.stroke();

                // para guy's right arm
                vas.beginPath();
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX + 24), (paraY - 5));
                vas.stroke();
            }
            else if (armFlailAnimationStage == 3)
            {
                // para guy's left arm
                vas.beginPath();
                vas.strokeStyle="black";
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX - 26), (paraY));
                vas.stroke();

                // para guy's right arm
                vas.beginPath();
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX + 26), (paraY));
                vas.stroke();
            }
            else if (armFlailAnimationStage == 4)
            {
                // para guy's left arm
                vas.beginPath();
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX - 28), (paraY + 5));
                vas.stroke();

                // para guy's right arm
                vas.beginPath();
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX + 28), (paraY + 5));
                vas.stroke();
            }
            else if (armFlailAnimationStage == 5)
            {
                // para guy's left arm
                vas.beginPath();
                vas.strokeStyle="black";
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX - 30), (paraY + 10));
                vas.stroke();

                // para guy's right arm
                vas.beginPath();
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX + 30), (paraY + 10));
                vas.stroke();

            }
            else if (armFlailAnimationStage == 6)
            {
                // para guy's left arm
                vas.beginPath();
                vas.strokeStyle="black";
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX - 28), (paraY + 15));
                vas.stroke();

                // para guy's right arm
                vas.beginPath();
                vas.lineWidth= 2;
                vas.moveTo(paraX, (paraY + 18));
                vas.lineTo((paraX + 28), (paraY + 15));
                vas.stroke();
            }

            if (armFlailAnimationStage >= 7)
            {
                z = -1
            }
            else if (armFlailAnimationStage <= -1)
            {
                z = 1
            }
        }
        else
        {
            if (needToRestartGame == false)
            {
                needToRestartGame = true;
            }
        }
    }

    function needToRestartChecker()
    {
        if (needToRestartGame == true)
        {
            needToRestartGame = "no";
            isGameActive = false;

            vas.beginPath();
            vas.fillStyle="red";
            vas.strokeStyle="black";
            vas.lineWidth="4";
            vas.rect(150, 150, 500, 300);
            vas.font="30pt Serif";
            vas.fontStyle="black";
            vas.fill();
            vas.stroke();
            vas.fillStyle="black";
            vas.fillText("                        ", 175, 185);
            vas.fillText("You have fallen to your", 175, 225);
            vas.fillText("              death...", 175, 265);
            vas.fillText("                         ", 175, 305);
            vas.fillText("Click this box to restart", 175, 345);
            vas.fillText("         and play again.", 175, 385);
            vas.font="8pt Serif";
            vas.fillText("All sounds sourced from www.soundbible.com, by sound authors: Mike Koenig, Mark DiAngelo, and JaBa.", 165, 425);
        }
    }

    function animatePlaneFire()
    {
        flameFrame += 0.2;
        if (flameFrame <= 1)
        {
            vas.drawImage(plane, 0, 50, 72, 60, planeX, planeY, 120, 70);
        }
        else if (flameFrame > 1 && flameFrame <= 2)
        {
            vas.drawImage(plane, 82, 0, 70, 49, planeX, planeY, 120, 70);
        }
        else if (flameFrame > 2)
        {
            flameFrame = 0;
        }
    }
    function drawIntroParaGuy()
    {
        // para guy's head
        vas.beginPath();
        vas.arc(paraIX, paraIY, 2, 0, (2 * Math.PI));
        vas.fillStyle="grey";
        vas.fill();
        // para guy's torso
        vas.beginPath();
        vas.lineWidth= 2;
        vas.moveTo(paraIX, (paraIY + 2));
        vas.lineTo(paraIX, (paraIY + 7));
        vas.strokeStyle="black";
        vas.stroke();
        // para guy's left arm
        vas.beginPath();
        vas.lineWidth= 1;
        vas.moveTo(paraIX, (paraIY + 3.25));
        vas.lineTo((paraIX - 4), (paraIY - 3));
        vas.stroke();
        // para guy's right arm
        vas.beginPath();
        vas.lineWidth= 1;
        vas.moveTo(paraIX, (paraIY + 3.25));
        vas.lineTo((paraIX + 4), (paraIY - 3));
        vas.stroke();
        // para guy's left leg
        vas.beginPath();
        vas.lineWidth= 1;
        vas.moveTo(paraIX, (paraIY + 6));
        vas.lineTo((paraIX - 1.2), (paraIY + 13.2) );
        vas.stroke();
        // para guy's left leg
        vas.beginPath();
        vas.lineWidth= 1;
        vas.moveTo(paraIX, (paraIY + 6));
        vas.lineTo((paraIX + 1.2), (paraIY + 13.2));
        vas.stroke();
        // para guy's parachute
        // the handle
        vas.beginPath();
        vas.lineWidth= 2;
        vas.strokeStyle="tan";
        vas.moveTo((paraIX - 4.8), (paraIY - 2.6));
        vas.lineTo((paraIX + 4.8), (paraIY - 2.6));
        vas.stroke();
        // the two connector strings (also some code to account for movement rotation)
        if (dirr == false)
        {
            vas.lineWidth= 1;
            vas.strokeStyle="darkGrey";
            //left
            vas.moveTo((paraIX - 4.8), (paraIY - 2.6));
            vas.lineTo((paraIX - 5.6), (paraIY - 18));
            //right
            vas.moveTo((paraIX + 4.8), (paraIY - 2.6));
            vas.lineTo((paraIX + 5.6), (paraIY - 18));
            vas.stroke();
        }
        if (dirr == "left")
        {
            vas.lineWidth= 1;
            vas.strokeStyle="darkGrey";
            //left
            vas.moveTo((paraIX - 4.8), (paraIY - 2.6));
            vas.lineTo((paraIX - 2.6), (paraIY - 19.2));
            //right
            vas.moveTo((paraIX + 4.8), (paraIY - 2.6));
            vas.lineTo((paraIX + 8.6), (paraIY - 19.2));
            vas.stroke();
        }
        if (dirr == "right")
        {
            vas.lineWidth= 1;
            vas.strokeStyle="darkGrey";
            //left
            vas.moveTo((paraIX - 4.8), (paraIY - 2.6));
            vas.lineTo((paraIX - 8.6), (paraIY - 19.2));
            //right
            vas.moveTo((paraIX + 4.8), (paraIY - 2.6));
            vas.lineTo((paraIX + 2.6), (paraIY - 19.2));
            vas.stroke();
        }
        // the chute itself (also some code to account for movement rotation)
        if (dirr == false)
        {
            vas.beginPath();
            vas.arc(paraIX, (paraIY - 18), 8, Math.PI, (2 * Math.PI));
            vas.fillStyle="lightGrey";
            vas.fill();
        }
        else if (dirr == "left")
        {
            vas.beginPath();
            vas.arc((paraIX + 3), (paraIY - 18), 8, Math.PI + 0.03, (2 * Math.PI) + 0.03);
            vas.fillStyle="lightGrey";
            vas.fill();
        }
        else if (dirr == "right")
        {
            vas.beginPath();
            vas.arc((paraIX - 3), (paraIY - 18), 8, Math.PI - 0.03, (2 * Math.PI) - 0.03);
            vas.fillStyle="lightGrey";
            vas.fill();
        }
    }

    function animateExplodePlane()
    {
        explodeFrame += 0.35;
        if (explodeFrame <= 1)
        {
            vas.drawImage(plane, 0, 0, 72, 50, planeX, planeY, 120, 120);
            vas.drawImage(plane, 82, 51, 74, 52, planeX, planeY, 120, 120);
        }
        else if (explodeFrame > 1 && explodeFrame <= 2)
        {
            if (explodeFrame == 1.0499999999999998)
            {
                Xplode.play();
            }
            vas.drawImage(plane, 0, 0, 72, 50, planeX, planeY, 120, 120);
            vas.drawImage(plane, 160, 96, 86, 67, planeX, planeY, 120, 120);
        }
        else if (explodeFrame > 2)
        {
            planeAnimationStage = 2;
        }

    }

    function goToDestIntro()
    {
        if (paraIX < (destX - 4))
        {
            paraIX += paraIXV;
            dirr = "right";
        }
        else if (paraIX > (destX + 4))
        {
            paraIX -= paraIXV;
            dirr = "left";
        }
        else if (paraIX >= (destX - 4) && paraIX <= (destX + 4))
        {
            dirr = false;
        }
    }

    function notBurningForLong()
    {
            longBurning.pause();
            longBurning.load();
    }
// this starts the intro sequence which starts the game.
    drawAirplane()
}