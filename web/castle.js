/**
 * Created by skyeguy on 10/11/15.
 */
function imageCastle()
{
    // sound load
    //etc.

    // image load
    var grass = new Image();
    grass.src = ("images/grass.jpg");
    window.grass = grass;

    var cAssets = new Image();
    cAssets.src = ("images/cAssets.png");
    window.cAssets = cAssets;

    cAssets.onload = function()
    {
            castleLoader();
    }
}


function castleLoader()
{
    // fundamental vars
    var cc = document.getElementById("castleWorldView");
    var cx = cc.getContext("2d");

    // functional vars
    var worldX = 0;
    var worldY = 0;

    //interactive vars
    var ku = 0;
    var kd = 0;
    var kl = 0;
    var kr = 0;

    //system vars

    //lists

        //the block grid
            var blkGrid = [];
            for (var i = 0; i < 85; i++)
            {
                blkGrid.push([]);
                for (var j = 0; j < 123; j++)
                {
                    blkGrid[i].push([]);
                }
            }
            //starting area
            blkGrid[41][60] = 1;
            blkGrid[42][60] = 1;
            blkGrid[43][60] = 1;
            blkGrid[41][61] = 1;
            blkGrid[42][61] = 1;
            blkGrid[43][61] = 1;
        //AI in game
            var worldAI = [];

    function controlLoop()
    {
        //sensing
        window.addEventListener("keydown", buttonsDown );
        window.addEventListener("keyup", buttonsUp );
        mapScroll();

        //game
        cx.clearRect(0, 0, 1400, 550);
        textureBackground();
        aiActivator();
        drawMiniMap();
        window.requestAnimationFrame(controlLoop, cc);
    }

    function Warrior(type, X, Y, tag)
    {
        //recreational vars
        this.damage = 0;
        this.health = 0;
        this.speed = 0;
        this.attackSpeed = 0;
        this.armour = 0;
        this.type = type;
        this.team = 0;
        this.rotSpeed = 0;
        this.vision = 0;

        //functional vars
        this.X = X;
        this.Y = Y;
        this.XX = X; // these are my destination X and Y in this code.
        this.YY = Y;
        this.rotation = 0;
        this.blockX = 0;
        this.blockY = 0;
        this.path = [];
        this.tag = tag;
        this.path = [];

        //interaction vars
            // this is the entity that this entity wishes to persue
        this.target = 0;
            // this is the list of enemies in sight
        this.inSight = [];
            // this is the list of allies in sight
        this.nearby = [];
            // this is the closest enemy
        this.closest = 0;
            // this is the weakest enemy nearby
        this.weakest = 0;
            // this is the strongest enemy nearby
        this.strongest = 0;
            // this is the slowest enemy nearby
        this.slowest = 0;
            // this is the closest ally
        this.nearest = 0;
            // the ratio of x between entity and target
        this.targetXRatio = 0;
            // the ratio of Y between entity and target
        this.targetYRatio = 0;
            // this is the distance from the entity's target
        this.targetDistance = 0;
            // this is the distance from the closest
        this.closestDistance = 0;

        //system vars
        this.attacking = false;
        this.xDif = 0;
        this.yDif = 0;
        this.hDif = 0;
        this.engaged = false;
        this.rotConfirmed = false;
        this.pauseEngagement = false;
        this.collisionBreaker = false;
        this.engaging = false;
        this.priority = "default";

        // functions
        this.drawSelf = function()
        {
            if (type == "Thangorian Warrior")
            {
                if (this.attacking == false)
                {
                    cx.save();
                    cx.translate(this.X + worldX, this.Y + worldY);
                    cx.rotate(this.rotation / 180 * Math.PI);
                    cx.drawImage(cAssets, 89, 170, 57, 55, -(114 - 89), -(187 - 170) , 57, 55);
                    cx.restore();
                }
            }
            else if (type == "Thangorian Knight")
            {
                if (this.attacking == false)
                {
                    cx.save();
                    cx.translate(this.X + worldX, this.Y + worldY);
                    cx.rotate(this.rotation / 180 * Math.PI);
                    cx.drawImage(cAssets, 49, 45, 95, 48, -(117 - 49), -(64 - 45) , 95, 48);
                    cx.restore();
                }
            }
        };

        this.learnBlockCoords = function()
        {
            this.blockX = Math.floor ((this.X / 500) + 41);
            this.blockY = Math.floor((this.Y / 298) + 60);
            //console.log("My block coords are X: " + this.blockX + " Y: " + this.blockY + " ... and the blocks discovery number is " + blkGrid[this.blockX][this.blockY] + ".");

            if (blkGrid[this.blockX][this.blockY] == 0)
            {
                blkGrid[this.blockX][this.blockY] = 1;
            }
        };

        this.setRecreationalVars = function()
        {
            if (type == "Thangorian Warrior")
            {
                this.damage = 5;
                this.health = 5;
                this.speed = 2.3;
                this.attackSpeed = 1;
                this.armour = 3;
                this.team = "Thangorlon";
                this.rotSpeed = 2;
                this.vision = 500;
            }
            if (type == "Thangorian Knight")
            {
                this.damage = 10;
                this.health = 5;
                this.speed = 1.25;
                this.attackSpeed = 0.5;
                this.armour = 9;
                this.team = "Player";
                this.rotSpeed = 1.5;
                this.vision = 450;
            }
        };

        this.attackOrNot = function()
        {
            if (this.priority == "default")
            {
                if (this.inSight.length >= 1)
                {
                    this.engaging = true;
                }
            }
        };

        this.engage = function()
        {
            //console.log("I am currently engaged in a conflict with " + this.target.tag + ". " + this.engaged + "; but I should probably go to XX: " + this.XX + " and also YY: " + this.YY + ".");
            if (this.engaged == false && this.pauseEngagement == false)
            {

                this.targetDistance = Math.sqrt(((this.X - this.target.X) * (this.X - this.target.X)) + ((this.Y - this.target.Y) * (this.Y - this.target.Y)));

                if (this.type == "Thangorian Knight")
                {
                    if (this.closestDistance < 145)
                    {
                        this.target = this.closest;
                    }
                    else if (this.strongest != undefined)
                    {
                        this.target = this.strongest;
                    }
                    else
                    {
                        this.target = this.closest;
                    }
                }
                else if (this.type == "Thangorian Warrior")
                {
                    if (this.closestDistance < 145)
                    {
                        this.target = this.closest;
                    }
                    else
                    {
                        this.target = this.weakest;
                    }
                }

            }

            // isEngaged in combat?
            if (this.targetDistance <= 55)
            {
                //this.targetDistance <= 45 && this.Y <= this.YY + this.speed && this.Y >= this.YY - this.speed && this.X <= this.XX + this.speed && this.X >= this.XX - this.speed
                if (this.tag == "philip")
                {
                    console.log("I am close enough to my target to face it");
                }

                this.XX = this.X;
                this.YY = this.Y;

                this.engaged = true;
            }
            else
            {
                if (this.tag == "Philip")
                {
                    console.log("I am not close enough to my target to face it because I am " +  Math.sqrt(((this.X - this.target.X) * (this.X - this.target.X)) + ((this.Y - this.target.Y) * (this.Y - this.target.Y))) + " distance away. And I my engaged is: "+ this.engaged + " and my pauseEngagement is: " + this.pauseEngagement + " and my engaging is: " + this.engaging + " also my avoiding object statis is: " + this.avoidingOb + " I AM " + this.tag.toUpperCase());
                }
                this.engaged = false;

                this.XX = this.target.X;
                this.YY = this.target.Y;
            }


        };

        this.attack = function()
        {
            if (this.engaged)
            {
                //TODO do the attack here
            }
        };

        //TODO make a path for movement!
        this.drawPath = function (target, obstacle)
        {

        };

        this.recognition = function()
        {
            //console.log(this.target.type + " is the my target. I am a " + this.type + ". The closest enemy to me is: " + this.closest + ". The strongest enemy I see is a " + this.strongest.type + ".");
            if (type != "Player")
            {
                // find out who is in sight
                this.inSight = [];
                this.nearby = [];
                for (var i = 0; i < worldAI.length; i++)
                {
                    if (worldAI[i].X <= this.X + this.vision && worldAI[i].X >= this.X - this.vision && worldAI[i].Y <= this.Y + this.vision && worldAI[i].Y >= this.Y - this.vision)
                    {
                        if (worldAI !== this)
                        {
                            if(worldAI[i].team == this.team)
                            {
                                var distanceFrom = Math.sqrt(((this.X - worldAI[i].X) * (this.X - worldAI[i].X)) + ((this.Y - worldAI[i].Y) * (this.Y - worldAI[i].Y)));
                                this.nearby.push([worldAI[i], distanceFrom]);
                            }
                            else
                            {
                                distanceFrom = Math.sqrt(((this.X - worldAI[i].X) * (this.X - worldAI[i].X)) + ((this.Y - worldAI[i].Y) * (this.Y - worldAI[i].Y)));
                                this.inSight.push([worldAI[i], distanceFrom]);
                            }
                        }
                    }
                }

                //decide who within sight is the closest and who is best to target etc.
                var distanceStorage = null;
                var healthStorage = null;
                var armourStorage = null;
                var damageStorage = null;
                var healthStorageS = null;
                var armourStorageS = null;
                var damageStorageS = null;
                var speedStorage = null;
                for (var i = 0; i < this.inSight.length; i ++)
                {
                    if (this !== i)
                    {
                        if (this.inSight[i][1] < distanceStorage || distanceStorage == null)
                        {
                            distanceStorage = this.inSight[i][1];
                            this.closestDistance = this.inSight[i][1];
                            this.closest = this.inSight[i][0];
                        }
                        if (this.inSight[i][0].health <= healthStorage && this.inSight[i][0].armour < armourStorage && this.inSight[i][0].damage < damageStorage || healthStorage == null)
                        {
                            healthStorage = this.inSight[i][0].health;
                            armourStorage = this.inSight[i][0].armour;
                            damageStorage = this.inSight[i][0].damage;
                            this.weakest = this.inSight[i][0];
                        }
                        if (this.inSight[i][0].health >= healthStorage && this.inSight[i][0].armour > armourStorage && this.inSight[i][0].damage > damageStorage || healthStorageS == null)
                        {
                            healthStorageS = this.inSight[i][0].health;
                            armourStorageS = this.inSight[i][0].armour;
                            damageStorageS = this.inSight[i][0].damage;
                            this.strongest = this.inSight[i][0];
                        }
                        if (this.inSight[i][0].speed < speedStorage || speedStorage == null)
                        {
                            speedStorage = this.inSight[i][0].speed;
                            this.slowest = this.inSight[i][0];
                        }
                    }
                }

                var nearestStorage = null;
                for (var i = 0; i < this.nearby.length; i++)
                {
                    if (this.nearby[i][1] < nearestStorage || nearestStorage == null)
                    {
                        if (this.nearby[i][0] !== this)
                        {
                            nearestStorage = this.nearby[i][1];
                            this.nearest = this.nearby[i][0];
                        }
                    }
                }
            }
        };


        this.movement = function()
        {
           // find the greatest difference in x and y
           this.xDif = Math.sqrt((this.XX - this.X) * (this.XX - this.X));
           this.yDif = Math.sqrt((this.YY - this.Y) * (this.YY - this.Y));

           if (this.xDif < this.yDif && this.xDif != 0)
           {
               this.hDif = this.xDif / this.yDif;
           }
           else if (this.yDif < this.xDif && this.yDif != 0)
           {
               this.hDif = this.yDif / this.xDif;
           }

           // if pointing in the proper direction then move in that direction
           if (this.rotConfirmed == true)
           {
               if (this.X < this.XX)
               {
                   if (this.xDif < this.yDif && this.xDif != 0)
                   {
                       this.X += this.speed * this.hDif;
                   }
                   else
                   {
                       this.X += this.speed;
                   }
               }
               else if (this.X > this.XX)
               {
                   if (this.xDif < this.yDif && this.xDif != 0)
                   {
                       this.X -= this.speed * this.hDif;
                   }
                   else
                   {
                       this.X -= this.speed;
                   }
               }

               if (this.Y < this.YY)
               {
                   if (this.yDif < this.xDif && this.yDif != 0)
                   {
                       this.Y += this.speed * this.hDif;
                   }
                   else
                   {
                       this.Y += this.speed;
                   }
               }
               else if (this.Y > this.YY)
               {
                   if (this.yDif < this.xDif && this.yDif != 0)
                   {
                       this.Y -= this.speed * this.hDif;
                   }
                   else
                   {
                       this.Y -= this.speed;
                   }
               }
           }
        };

        //this.avoidObstacle = function()
        //{
            //for (var i = 0; i < worldAI.length; i++)
            //{
                //if (this !== worldAI[i] && this.target !== worldAI[i])
                //{
                    //if (this.X - this.speed * 15 <= worldAI[i].X + 10 && this.X + this.speed * 15 >= worldAI[i].X - 10 && this.Y - this.speed * 15 <= worldAI[i].Y + 10 && this.Y + this.speed * 15 >= worldAI[i].Y - 10)
                    //{
                        //  && this.engaged == false was 15
                        //var oldDestX = this.XX;
                        //var oldDestY = this.YY;
                        //this.engaged = false;
                        //this.pauseEngagement = true;
                        //var oldEngagement = this.engaging;
                        //this.engaging = false;
                        //this.avoidingOb = true;
                        //TODO make it so that the AI's do not bumble around like idiots when they run into each other.
                        //if (this.collisionBreaker == false)
                        //{
                            //this.XX = this.XX + Math.cos(45 * Math.PI / 180) * (this.speed * 75);
                            //this.YY = this.YY + Math.sin(45 * Math.PI / 180)* (this.speed * 75);
                            //this.collisionBreaker = true;
                        //}

                    //}
                    //else if (this.X >= this.XX - this.speed && this.X <= this.XX + this.speed && this.Y >= this.YY - this.speed && this.Y <= this.YY + this.speed)
                    //{
                        //this.pauseEngagement = false;
                        //this.collisionBreaker = false;
                        //this.engaging = oldEngagement;
                        //this.avoidingOb = false;
                    //}

                    //TODO continue work on obstacle evasion
                    //this.XX = this.oldDestX;
                    //this.YY = this.oldDestY;
                    //this.pauseEngagement = false;

                    //if (oldDestX <= worldAI[i].X + 10 && oldDestX >= worldAI[i].X - 10 && oldDestY <= worldAI[i].Y + 10 && oldDestY >= worldAI[i].Y - 10)
                    //{
                        //if (oldDestX > this.X)
                        //{
                            //oldDestX -= 10;
                        //}
                        //else
                        //{
                            //oldDestX += 10;
                        //}

                        //if (oldDestY > this.Y)
                        //{
                            //oldDestY -= 10;
                        //}
                        //else
                        //{
                            //oldDestY += 10;
                        //}
                    //}
                //}
            //}
            //TODO add evasion of structures with a two dimensional array checker.
       // };

        // set target rotation such that we are pointing toward a given coordinate
        this.pointTowards = function(x,y)
        {
            this.newRotation = Math.atan2(y - this.Y, x - this.X) * 180 / Math.PI - (270 / Math.PI);
        };

        // points toward where you're going to move
        this.pointTowardsMove = function()
        {
            //console.log(this.X + " is my X, and " + this.Y + " is my Y, and I am called: " + this.tag);

            if (this.engaged == true) // change this to engaging == true id you want it to constantly face the target otherwise call it engaged == true
            {
                // point toward target if nearby
                this.pointTowards( this.target.X, this.target.Y );
            }
            else if (this.X != this.XX || this.Y != this.YY)
            {
                // point towards destination
                this.pointTowards( this.XX, this.YY );
            }

            // rotate toward target rotation
            var quickestRotation = this.angleDelta(this.rotation, this.newRotation);
            if (quickestRotation < 0 - this.rotSpeed)
            {
                this.rotation -= this.rotSpeed;
            }
            else if (quickestRotation >= 0 + this.rotSpeed)
            {
                this.rotation += this.rotSpeed;
            }
            if (Math.abs(quickestRotation) < this.rotSpeed)
            {
                this.rotConfirmed = true;
            }
            else
            {
                this.rotConfirmed = false;
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

        this.operation = function()
        {
            this.setRecreationalVars();
            this.learnBlockCoords();
            this.recognition();
            this.attackOrNot();
            if (this.engaging == true)
            {
                this.engage();
            }
            //this.avoidObstacle();
            this.drawSelf();
            this.movement();
            this.pointTowardsMove();
        };
    }
    // test Warriors
    worldAI.push(new Warrior("Thangorian Warrior", 400, 500, "sand"), new Warrior("Thangorian Knight", 575, 280, "Philip"), new Warrior("Thangorian Knight", 700, 200, "focus"), new Warrior("Thangorian Knight", 500, 300, "bob"));
    //, new Warrior("Thangorian Knight", 700, 200, "focus"), new Warrior("Thangorian Knight", 500, 300, "bob")
    function aiActivator()
    {
        for (var i = 0; i < worldAI.length; i++)
        {
            worldAI[i].operation();
        }
    }
    function textureBackground()
    {
        for (var i = 0; i < 85; i++)
        {
            for (var j = 0; j < 123; j++)
            {
                if (blkGrid[i][j] == 1)
                {
                    cx.drawImage(grass, 0, 0, 500, 298, worldX + ((i - 41) * 500), worldY + ((j - 60) * 298), 500, 298);
                }
                else
                {
                    cx.beginPath();
                    cx.fillStyle="black";
                    cx.fillRect(worldX + ((i - 41) * 500), worldY + ((j - 60) * 298), 500, 298);
                }
            }
        }
    }

    function buttonsDown(event)
    {
        var key = event.keyCode || event.which;

        if (key == 38)
        {
            ku = 1;
        }
        if (key == 40)
        {
            kd = 1;
        }
        if (key == 37)
        {
            kl = 1;
        }
        if (key == 39)
        {
            kr = 1;
        }

    }

    function buttonsUp(event)
    {
        var key = event.keyCode || event.which;

        if (key == 38)
        {
            ku = 0;
        }
        if (key == 40)
        {
            kd = 0;
        }
        if (key == 37)
        {
            kl = 0;
        }
        if (key == 39)
        {
            kr = 0;
        }

    }

    function mapScroll()
    {
        if (ku == 1 && worldY <= 296 * 60)
        {
            worldY += 10;
        }
        else if (kd == 1 && worldY >= 296 * -60)
        {
            worldY -= 10;
        }

        if (kl == 1 && worldX <= 500 * 40)
        {
            worldX += 10;
        }
        else if (kr == 1 && worldX >= 500 * -40)
        {
            worldX -= 10;
        }
    }

    function drawMiniMap()
    {
        cx.save();
        cx.translate(1334, 54);
        cx.scale(.003, 0.003);
        //Draw world events into miniMap
        textureBackground();
        for (var i = 0; i < worldAI.length; i++)
        {
            worldAI[i].drawSelf();
        }
        //Draw player's view into miniMap
        cx.fillStyle="transparent";
        cx.strokeStyle="gold";
        cx.lineWidth=200;
        cx.strokeRect(-worldX, -worldY, 1400, 550);
        cx.restore();
    }

    window.requestAnimationFrame(controlLoop);
}