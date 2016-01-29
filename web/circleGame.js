/**
 * Created by skyeguy on 9/23/15.
 */

function circleFun()
{
    var beforeMode = true;
    function gameStarter(x)
    {
        circularStart(x);
        beforeMode = false;
    }
    function circlePassCodes(event)
    {
        var key = event.keyCode || key.which;
        if (key == 80  || event.keyCode == 80)
        {
            var roundWord = prompt("Enter Game Code");
        }
        if (roundWord == "decorate")
        {
            circularStart(5);
            beforeMode = false;
        }
    }
    document.gameStarter = gameStarter;
    function keyPressingRounds()
    {
        window.addEventListener("keydown", circlePassCodes);

        if (beforeMode = true)
        {
            setTimeout(keyPressingRounds, 16.75)
        }
    }
    keyPressingRounds();
}

function circularStart(modue)
{
    var canvas = document.getElementById("circleScreen");
    var context = canvas.getContext("2d");

    var shift = 0;
    var up = 0;
    var down = 0;
    var left = 0;
    var right = 0;
    var lip = 0;
    var mode = 0;
    var circulate = 0;

    function translateMode()
    {
       if (modue == 1)
       {
           mode = "easy";
       }
       else if (modue == 2)
       {
           mode = "medium"
       }
       else if (modue == 3)
       {
           mode = "hard"
       }
       else if (modue == 4)
       {
           mode = "impossible"
       }
       else if (modue == 5)
       {
           mode = "decorative"
       }
    }
    translateMode();


    var Me = {};
    Me.X = 250;
    Me.Y = 250;
    Me.XV = 0;
    Me.YV = 0;
    Me.alive = true;
    if (mode == "easy")
    {
        Me.food = 20;
        var circles = 22;
        circulate = 16;
    }
    else if (mode == "medium")
    {
        Me.food = 36;
        var circles = 24;
        circulate = 16;
    }
    else if (mode == "hard")
    {
        Me.food = 70;
        var circles = 26;
        circulate = 16;
    }
    else if (mode == "impossible")
    {
        Me.food = 111;
        var circles = 30;
        circulate = 16;
    }
    else if (mode == "decorative")
    {
        Me.food = 16;
        var circles = 50;
        circulate = 40;
    }

    var colorList= ["Red", "orangeRed", "orange", "gold", "yellow", "lightGreen", "green", "forestGreen", "darkBlue", "blue", "lightBlue", "pink", "indigo", "purple", "violet", "darkViolet"];
    var circleList = [];

    // add main character to the ai sensing list.
    circleList.push(Me);
    for (var i = 0; i < circles; i++)
    {
        circleList.push(new OtherCircle());
    }

    function regulateCircleList()
    {
        if (circles < circulate)
        {
                circles += 1;
                circleList.push(new OtherCircle());
        }

        for (var i = 0; i < circleList.length; i++)
        {
            if (circleList[i].alive == 0)
            {
                circleList.splice(i, 1);
            }
        }

        for (var i = 1; i < circleList.length; i++)
        {
                circleList[i].aiLoop();
        }

        if (Me.alive == false)
        {
            Me.X = 400000;
            Me.Y = 400000;
            Me.XV = 0;
            Me.YV = 0;
        }
    }

    function circularLoop()
    {
        context.fillStyle="lightYellow";
        context.fillRect(0 , 0, 700, 700);

        window.addEventListener("keydown", keySensingDown);
        window.addEventListener("keyup", keySensingUp);
        foodBelly();
        bouncyEdges();
        //context.clearRect(Me.X - Me.size * 6, Me.Y  - Me.size * 6, Me.size * 12, Me.size * 12);
        regulateCircleList();
        Me.drawMyCircle();
        Umove();

        requestAnimationFrame(circularLoop, canvas);
    }

    Me.drawMyCircle = function()
    {
        if (Me.alive == true)
        {
            context.beginPath();
            coloredGrowth(Me);
            context.arc(Me.X, Me.Y, Me.size, 0, (2 * Math.PI));
            rainbowOutline();
            context.fill();
            context.stroke();
        }
    };

    function rainbowOutline()
    {
        lip += 0.1;

            context.strokeStyle= colorList[Math.floor(lip)];

        if (lip > colorList.length)
        {
            lip = 0;
        }
    }

    function coloredGrowth(type)
    {
        if (type.size <= 4)
        {
            context.fillStyle="transparent";
        }
        else if (type.size > 4 && type.size <= 10)
        {
            context.fillStyle="black";
        }
        else if (type.size > 10 && type.size <= 15)
        {
            context.fillStyle="green";
        }
        else if (type.size > 15 && type.size <= 20)
        {
            context.fillStyle="yellow";
        }
        else if (type.size > 20 && type.size <= 25)
        {
            context.fillStyle="pink";
        }
        else if (type.size > 25 && type.size <= 30)
        {
            context.fillStyle="orange";
        }
        else if (type.size > 30 && type.size <= 35)
        {
            context.fillStyle="blue";
        }
        else if (type.size > 35 && type.size <= 40)
        {
            context.fillStyle="purple";
        }
        else if (type.size > 40 && type.size <= 80)
        {
            context.fillStyle="grey";
        }
        else if (type.size > 80 && type.size <= 100)
        {
            context.fillStyle="lightGreen";
        }
        else if (type.size > 100 && type.size <= 115)
        {
            context.fillStyle="gold";
        }
        else if (type.size > 115 && type.size <= 130)
        {
            context.fillStyle="orangered";
        }
        else if (type.size > 130 && type.size <= 150)
        {
            context.fillStyle="indianred";
        }
        else if (type.size > 150 && type.size <= 165)
        {
            context.fillStyle="coral";
        }
        else if (type.size > 165 && type.size <= 190)
        {
            context.fillStyle="blanchedalmond";
        }
        else if (type.size > 190 && type.size <= 220)
        {
            context.fillStyle="white";
        }
        else
        {
            context.fillStyle="crimson";
        }
    }

    function keySensingDown(event)
    {
        var key = event.which || window.event.keyCode;

        if (key == 87  || event.keyCode == 87 || key == 38 || event.keyCode == 38)
        {
            up = 1;
        }
        if (key == 83  || event.keyCode == 83 || key == 40 || event.keyCode == 40)
        {
            down = 1;
        }
        if (key == 65  || event.keyCode == 65 || key == 37 || event.keyCode == 37)
        {
            left = 1;
        }
        if (key == 68  || event.keyCode == 68 || key == 39 || event.keyCode == 39)
        {
            right = 1;
        }
        if (key == 16  || event.keyCode == 16)
        {
            shift = 1;
        }
    }

    function keySensingUp(event)
    {
        var key = event.which || window.event.keyCode;

        if (key == 87  || event.keyCode == 87 || key == 38 || event.keyCode == 38)
        {
            up = 0;
        }
        if (key == 83  || event.keyCode == 83 || key == 40 || event.keyCode == 40)
        {
            down = 0;
        }
        if (key == 65  || event.keyCode == 65 || key == 37 || event.keyCode == 37)
        {
            left = 0;
        }
        if (key == 68  || event.keyCode == 68 || key == 39 || event.keyCode == 39)
        {
            right = 0;
        }
        if (key == 16  || event.keyCode == 16)
        {
            shift = 0;
        }
    }

    function foodBelly()
    {
        if (mode == "easy")
        {
            Me.size = Me.food/5;
        }
        else if (mode == "medium")
        {
            Me.size = Me.food/9;
        }
        else if (mode == "hard")
        {
            Me.size = Me.food/10;
        }
        else if (mode == "impossible")
        {
            Me.size = Me.food/11;
        }
        else if (mode == "decorative")
        {
            Me.size = Me.food;
        }
    }

    function bouncyEdges()
    {
        if (Me.X <= -5)
        {
            Me.X = - 4;
            Me.XV = Me.XV * -1;
        }

        if (Me.X >= 705)
        {
            Me.X = 704;
            Me.XV = Me.XV * -1;
        }
        if (Me.Y <= -5)
        {
            Me.Y = - 4;
            Me.YV = Me.YV * -1;
        }
        if (Me.Y >= 705)
        {
            Me.Y = 704;
            Me.YV = Me.YV * -1;
        }
    }

    function Umove()
    {
        Me.X += Me.XV;
        Me.Y += Me.YV;

        if (up == 1)
        {
            Me.YV -= .1;
        }
        if (down == 1)
        {
            Me.YV += .1;
        }
        if (left == 1)
        {
            Me.XV -= .1;
        }
        if (right == 1)
        {
            Me.XV += .1;
        }
        if (shift == 1)
        {
            Me.XV = Me.XV / 2;
            Me.YV = Me.YV / 2;
        }
    }

    function OtherCircle()
    {
        // turn these off if you turn coord organizer back on.
        //this.X = Math.floor(Math.random() * 701);
        //this.Y = Math.floor(Math.random() * 701);
        this.SLP;
        if (mode == "easy")
        {
            // was 55
            this.sight = 100;
            this.speed = Math.random() * 1.4 + 0.1;
            if (Me.size >= 9)
            {
                this.food = Math.floor(Math.random() * 280 + 5);
            }
            else
            {
                this.food = Math.floor(Math.random() * 60 + 5);
            }
        }
        else if (mode == "medium")
        {
            this.sight = 150;
            this.speed = Math.random() * 1.5 + 0.1;
            if (Me.size >= 11.5)
            {
                this.food = Math.floor(Math.random() * 350 + 5);
            }
            else
            {
                this.food = Math.floor(Math.random() * 100 + 5);
            }
        }
        else if (mode == "hard")
        {
            this.sight = 200;
            this.speed = Math.random() * 1.7 + 0.1;
            if (Me.size >= 17)
            {
                this.food = Math.floor(Math.random() * 530 + 5);
            }
            else
            {
                this.food = Math.floor(Math.random() * 250 + 5);
            }
        }
        else if (mode == "impossible")
        {
            this.sight = 250;
            this.speed = Math.random() * 2.1 + 0.1;
            if (Me.size >= 25)
            {
                this.food = Math.floor(Math.random() * 320 + 5);
            }
            else
            {
                this.food = Math.floor(Math.random() * 150 + 5);
            }
        }
        else if (mode == "decorative")
        {
            this.sight = 1000;
            this.speed = Math.random() * 2 + 0.1;
            this.food = Math.floor(Math.random() * 250 + 5);
        }
        this.alive = 1;
        this.distanceFromClosest = null;
        this.closest = null;
        this.isStrolling = 0;
        this.goToX = this.X;
        this.goToY = this.Y;
        this.startGame = false;

        this.coordsOrganizer = function()
        {
            this.X = Math.floor(Math.random() * 701);
            this.Y = Math.floor(Math.random() * 701);

            for (var i = 0; i < circleList.length; i++)
            {
                if (circleList[i].X >= this.X - this.size && circleList[i].X <= this.X + this.size && circleList[i].Y >= this.Y - this.size && circleList[i].Y <= this.Y + this.size)
                {
                    this.conflictingSpawn += 1;
                    if (this.conflictingSpawn != 0)
                    {
                        this.X = Math.floor(Math.random() * 701);
                        this.Y = Math.floor(Math.random() * 701);
                        if (circleList[i].X >= this.X - this.size && circleList[i].X <= this.X + this.size && circleList[i].Y >= this.Y - this.size && circleList[i].Y <= this.Y + this.size)
                        {
                        }
                        else
                        {
                            this.conflictingSpawn = 0;
                        }
                    }
                }
            }
        };
        this.coordsOrganizer();

        this.findSLP = function()
        {
            for (var i = 0; i < circleList.length; i++)
            {
                if ( this === circleList[i])
                {
                    this.SLP = i;
                }
            }
        };

        this.draw = function()
        {
            //console.log(this.X + " is the x, and " + this.Y + " is the Y." + " My goToX is " + this.goToX + ", and my goToY is " + this.goToY + ". Oh and size is " + this.size + ". Also distance from closest is " + this.distanceFromClosest + ", and the closest is " + this.closest + ". I am " + this.SLP + ".");
            context.beginPath();
            context.strokeStyle="black";
            coloredGrowth(this);
            context.arc(this.X, this.Y, this.size, 0, (2 * Math.PI));
            context.fill();
            context.stroke();
        };

        this.positionChecker = function()
        {
            this.distanceI = null;
            for (var i = 0; i < circleList.length; i++)
            {
                this.distanceFromI = Math.sqrt(((circleList[i].X - this.X) * (circleList[i].X - this.X)) + ((circleList[i].Y - this.Y) * (circleList[i].Y - this.Y)));
                if (this.distanceFromI < this.distanceI && this.SLP != i || this.distanceI == null && this.SLP != i)
                {
                    this.distanceI = this.distanceFromI;
                    this.distanceFromClosest = this.distanceFromI;
                    this.closest = circleList[i];
                }
            }
        };

        this.goToCoords = function()
        {
            if (this.X < this.goToX)
            {
                this.X += this.speed;
            }
            else if (this.X > this.goToX)
            {
                this.X -= this.speed;
            }

            if (this.Y < this.goToY)
            {
                this.Y += this.speed;
            }
            else if (this.Y > this.goToY)
            {
                this.Y -= this.speed;
            }
        };

        this.dontGetLost = function()
        {
            // forceful

            if (this.X < 0)
            {
                this.X = 0;
            }
            else if (this.X > 700)
            {
                this.X = 700;
            }

            if (this.Y < 0)
            {
                this.Y = 0;
            }
            else if (this.Y > 700)
            {
                this.Y = 700;
            }

            // pre-forceful

            if (this.goToX < 0)
            {
                this.goToX = 0;
            }
            else if (this.goToX > 700)
            {
                this.goToX = 700;
            }

            if (this.goToY < 0)
            {
                this.goToY = 0;
            }
            else if (this.goToY > 700)
            {
                this.goToY = 700;
            }


        };

        this.isMovementComplete = function()
        {
            var lenience = 2;

            if (mode == "easy")
            {
               lenience = 2;
            }
            else if (mode == "medium")
            {
                lenience = 2;
            }
            else if (mode == "hard")
            {
                lenience = 2;
            }
            else if (mode == "impossible")
            {
                lenience = 3;
            }
            else if (mode == "decorative")
            {
                lenience = 3;
            }

            if (this.X > this.goToX - lenience && this.X < this.goToX + lenience && this.Y > this.goToY - lenience && this.Y < this.goToY + lenience)
            {
                return true;
            }
            else
            {
                return false;
            }

        };

        this.fleeFightOrFind = function()
        {
            if (this.distanceFromClosest <= this.sight)
            {
                if (this.closest.size < this.size)
                {
                    this.isStrolling = 0;
                    //fight
                    this.goToX = this.closest.X;
                    this.goToY = this.closest.Y;
                }
                else if (this.closest.size >= this.size)
                {
                    this.isStrolling = 0;
                    //flee
                    // i am not sure if this works... I'll see if it does later
                    //this.goToX = this.goToX + Math.cos(Math.PI / 180 * 90) * this.sight;
                    //this.goToY = this.goToY + Math.sin(Math.PI / 180 * 90) * this.sight;

                    // this doesn't work either... and it is the official way.
                    // x=h+rcosθ,y=k+rsinθ
                    //this.goToX = this.X + Math.cos(Math.PI / 180 * 90) * this.sight;
                    //this.goToY = this.Y + Math.sin(Math.PI / 180 * 90) * this.sight;

                    // this way actually works!!!
                    this.deltaY = this.Y - this.closest.Y;

                    this.deltaX = this.X - this.closest.X;

                    this.angleBetweenPoints = Math.atan2(this.deltaY, this.deltaX) * 180 / Math.PI;

                    this.goToX = this.X + Math.cos(Math.PI / 180 * this.angleBetweenPoints) * this.sight;
                    this.goToY = this.Y + Math.sin(Math.PI / 180 * this.angleBetweenPoints) * this.sight;
                }
            }
            else
            {
                //find
                if (this.isStrolling == 0)
                {
                    this.isStrolling = 1;
                    this.goToX = Math.floor(Math.random() * 701);
                    this.goToY = Math.floor(Math.random() * 701);
                }
                if (this.isMovementComplete())
                {
                    this.isStrolling = 0;
                }
            }
        };

        this.ateOrEaten = function()
        {
            if (this.closest == Me)
            {
                if (this.closest.size > this.size && this.X > this.closest.X - this.closest.size && this.X < this.closest.X + this.closest.size && this.Y > this.closest.Y - this.closest.size  && this.Y < this.closest.Y + this.closest.size)
                {
                    if (Me.size > this.size)
                    {
                        console.log(" you ate a guy who was: " + this.size + " in size, because you had a size of " + Me.size + ".");
                        this.alive = 0;
                        Me.food += this.size;
                        circles -= 1;
                    }
                }
                else if (this.closest.size < this.size && this.X > this.closest.X - this.size && this.X < this.closest.X + this.size && this.Y > this.closest.Y - this.size && this.Y < this.closest.Y + this.size)
                {
                    if (Me.alive == true)
                    {
                        this.food += this.closest.size / 2;
                        Me.alive = false;
                    }
                }
            }
            else
            {
                //if (this.closest.size > this.size && this.X > this.closest.X - this.closest.size  && this.X < this.closest.X + this.closest.size && this.Y > this.closest.Y - this.closest.size  && this.Y < this.closest.Y + this.closest.size)
                //{
                //    this.alive = 0;
                //    circles -= 1;
                //}
                // turn the lower back into an else if if the top part is turned back on
                //TODO figure out why powerful circles sometimes/often die randomly -- it has to be a glitch because I have observed it happen to circles that had no adequate competitors at all.
                if (this.closest.size < this.size && this.X > this.closest.X - this.size  && this.X < this.closest.X + this.size && this.Y > this.closest.Y - this.size  && this.Y < this.closest.Y + this.size)
                {
                    this.closest.alive = 0;
                    circles -= 1;
                    this.food += this.closest.size / 2;
                }
            }
        };

        this.growthFromFood = function()
        {

            if (mode == "easy")
            {
                this.size = this.food/20;
            }
            else if (mode == "medium")
            {
                this.size = this.food/20;
            }
            else if (mode == "hard")
            {
                this.size = this.food/20;
            }
            else if (mode == "impossible")
            {
                this.size = this.food/10;
            }
            else if (mode == "decorative")
            {
                this.size = this.food/10;
            }
        };

        this.aiLoop = function()
        {
            this.findSLP();
            this.positionChecker();
            this.goToCoords();
            this.ateOrEaten();
            this.growthFromFood();
            this.draw();
            this.dontGetLost();
            this.fleeFightOrFind();
        };
    }
    requestAnimationFrame(circularLoop, canvas);
}