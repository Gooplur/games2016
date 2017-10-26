/**
 * Created by skyeguy on 1/22/17.
 */

//This class supports ALL of the games AI. Each individual will henceforth be called a Unit.
function Unit(unitX, unitY, type, isalpha, ID, ultra) //ultra is an object that allows for numerous unique arguments to be accessed.
{
    //TODO add a respawn function, and a respawn rate stat, and possibly respawn coords based roughly on their set coords.
    //Priority Variables
    this.mobile = true;
    this.stackDominance = Math.random();
    this.ID = ID; //This is gives this unit an identity so that they can be identified if a problem comes up.
    this.X = unitX; // this is the units X position in the world
    this.Y = unitY; // this is the units Y position in the world
    this.type = type; //This determines what kind of unit it is.
    this.zIndex = 2;
    this.team = "wild"; //wild = all predators //herd = all passive or not predator animals //neutral = all creatures that are pure neutral but are not targeted //freynor = freynor faction etc.
    this.allys = []; // all non-enemy teams.
    this.target = "none";
    this.targetDistance = "none";
    this.extraRot = 0;
    this.traverse = false; //the ability to walk over other units but nothing else.

    //variables concerning code functionality
    this.ultra = ultra;
    //Important Game Variables
    this.health = 0;
    this.armour = 0;
    this.damage = 0;
    this.negateArmour = 0;
    this.magicalDamage = 0;
    this.heatResistance = 0;
    this.magicalResistance = 0;
    this.speed = 0;
    this.rangeOfSight = 120;
    this.baseSight = 120;
    this.alpha = false;
    this.effect = "none"; //This is a special effect that happens on attacks against the player.
    this.drops = []; //This is the list of items that this unit will drop upon death.
    this.experience = 1; //This is the amount of experience that the player will earn from slaying this creature. It becomes either regular or magical experience depending on what means the player used to get the killing blow.
    this.lessEXP = 0;
    this.resistances = [];
    this.unavoidable = false; //if this is true the player can not use jump back or any other immunity based dodging technique to dodge.
    //Operational game variables
    this.rotation = 0; //this is the unit's current rotation.
    this.newRotation = 0; //this is the target rotation, or the rotation that the unit would like to be at.
    this.costume = 0; //This is costume as in scratch's type of costume, like a frame... It is used for movement and attack animation frames.
    this.rotationSpeed = 0.1; // this is the speed at which the unit rotates.
    this.rotatable = true; //when false the unit is unable to rotate.
    //functionality game variables
    this.engagementRadius = 15; //this is the distance before a target that the unit will stop at to leave itself appropriate room to attack or whatever interaction it will do.
    this.sizeRadius = 20; // this is the radius that represents the total size of the unit.
    this.alive = true;
    this.alpha = isalpha;
    this.alphaSize = 1;
    this.beastEntry = "none";
    this.killNotByPlayer = false;
    this.killByPlayerTeam = false; //if killed by a player controlled unit.
    //AI and sensing variables
    this.closestDistance; //this is the distance away from this unit that the closest other unit is.
    this.closestUnit; // this is the exact unit that is the closest at the moment.
    this.playerSeen = false; //This shows whether or not this unit currently sees the player.
    this.extraRange = 0; //This is range that is added to rangeOfSight so that a unit can see the player if a packmember does.
    this.extraRangeTime = 0;
    this.disturbed = false; //When activated the creature will have twice as much sight!
    this.disturbedTime = 0; //this is the timer that regulates how long a creature is in the disturbed state.
    this.offended = false; //this is if the unit is mad at targetable AI that attacked first.
    //animation variables
    this.resetFrameOrder = true; //This switches the costumeEngine back to positive direction framerate
    this.attacking = false; //This flag is active while this unit is attacking so that the game knows when this unit is attacking.
    this.moving = false; //This flag is active while this unit is moving so that the game knows when this unit is moving.
    this.timeStoppedMoving = new Date().getTime(); //This variable is used to measure how long a unit has not been moving so that the unit can switch back to a stationary costume after an appropriate amount of time.
    //lesser animation variables
    this.healthShownTime = 0; //this is for showing health after being damaged in combat.
    this.showHealthTime = 0; //this is for showing health under any other circumstance.
    this.hostile = true;
    //attacking variables (excluding the attacking flag)
    this.stopAttacking = false; // for units that use followThrough this manually ends the attack at the right time if the attack is more complex and is not able to be manually ended at the last frame.
    this.followThrough = false; //this variable determines if a unit finishes an attack even if the target isn't there to be hit by it.
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
    this.attackType = false; //for units that have multiple attacks this variable stores which of their attacks is currently being used.
    //special attacking variables
    this.storeChargeTime = new Date().getTime();
    this.charge = false;
    this.chargeReady = true;
    //other extra variables for combat stuff
    this.keepSpeed = 0;
    this.staySpeed = 0;
    //other animations variables
    this.flashFrame = 0;
    this.flashFrameTime = new Date().getTime();
    //movement specific variables
    this.fleeing = false;
    this.underground = false;
    this.flying = false;
    this.haste = false;
    this.charger = false; //A charger is a unit that keeps moving even after it passes through the engagement radius.
    this.chargeDist = 150; //the distance past the target the creature will run before turning around.
    this.doCharge = false; //if active the creature will no longer point to its target (as it is running past its target)
    //game pause related variables
    this.timeResistance = false;
    //death variables
    this.timeSinceDead = 0;
    this.wasAlive = true;
    this.revived = false;
    //Humanoid related Variables (for humanlike units only)
    this.lLegY = 0;
    this.rLegY = 0;
    this.legSwitch = 0;
    this.doOnDeathOnce = true; //this is for unique characters, upon their death they trigger a flag letting the game know never to respawn them.
    //Other variables
    this.other = false; //this is unique for every unit... do whith it what you will.
    this.attackBusy = false; //used to see if the attack is happening and the creature is not just waiting to attack.
    this.emerge = false; //this is for the creatures that use an animation phase like lombrises. blah blah blah
    this.creatureBiz = false; //reference evadeObstructions to see purpose
    this.suspendConflictingPointSystems = false; //reference evadeObstructions to see purpose
    this.spin = 0; //this is the rotation aspect of flash animate.
    this.plantedX = this.X;
    this.plantedY = this.Y;
    this.mofuTargetFood = "none";
    this.mofuFood = 0;
    this.eggTimer = 0;
    this.loopTimer = new Date().getTime();
    this.kidSize = 0.72;
    this.kid = false;
    if (typeof(this.ultra) != "undefined")
    {
        if (typeof(this.ultra.kid) != "undefined")
        {
            if (this.ultra.kid == true)
            {
                this.kid = true;
            }
        }
    }
    this.numberOfSameTypeNearby = 0;

    //Sound variables
    this.voicedSounds = [];
    this.voiceTime = new Date().getTime();
    this.voiceFrequency = 45;
    //effects variables
    this.blindedTime = 0;
    this.blinded = false;
    this.burningTime = 0;
    this.burningTime2 = new Date().getTime();
    this.frozenTime = 0;
    this.stunTime = 0;
    this.stunTimer = 0;
    this.stunI = false;
    this.stunII = false;
    this.stunIII = false;
    this.stunIV = false;
    this.stunV = false;
    this.stunned = 1;
    this.shockedTime = 0;
    this.shockedTime2 = new Date().getTime();
    this.acidV = false;
    this.acidIV = false;
    this.acidIII = false;
    this.acidII = false;
    this.acidI = false;
    this.halfAcid = false;
    this.quarterAcid = false;
    this.acidTime = new Date().getTime();
    this.charmedTeam = false;
    this.charmedTime = new Date().getTime();
    this.marked = false;
    this.webbedTime = new Date().getTime();
    this.webbedNum = 0;
    this.stayTime = new Date().getTime();
    this.stay = false;
    this.guaranteeTime = new Date().getTime();
    this.guarantee = false;

    //Artificial Intelligence

    this.teamCommands = function()
    {
        //PLAYER TEAM COMMANDS
        if (this.team == "player")
        {
            //STAY
            if (!shiftKey && vKey && this.DTP() < 140 && !this.stay && this.stayTime <= new Date().getTime()) //makes minions who are in direct proximity to the player stay put
            {
                this.stay = true;
                if (this.keepSpeed < this.speed)
                {
                    this.staySpeed = this.speed;
                }
                else
                {
                    this.staySpeed = this.keepSpeed;
                }

                this.speed = 0;
                this.stayTime = new Date().getTime() + 900;
            }
            else if (!shiftKey && vKey && this.stay && this.DTP() < 140 && this.stayTime <= new Date().getTime()) //un-stays minions in direct proximity to the player
            {
                this.stay = false;
                this.speed = this.staySpeed;
                this.stayTime = new Date().getTime() + 900;
            }
            else if (vKey && shiftKey && this.stay && this.stayTime <= new Date().getTime()) //un-stays all minions
            {
                this.stay = false;
                this.speed = this.staySpeed;
                this.stayTime = new Date().getTime() + 900;
            }
            //GUARANTEE (toggles a creature between being a preserved companion and being an expendable follower)
            if (!shiftKey && gKey && !this.guarantee && this.guaranteeTime <= new Date().getTime() && this.DTP() < 140 && player.companions.length < player.companionLimit)
            {
                this.showHealthTime = new Date().getTime();
                this.guarantee = true;
                this.guaranteeTime = new Date().getTime() + 3000;
                player.companions.push(this);
            }
            else if (!shiftKey && gKey && this.guarantee && this.guaranteeTime <= new Date().getTime() && this.DTP() < 140)
            {
                this.showHealthTime = new Date().getTime();
                this.guarantee = false;
                player.companions.splice(player.companions.indexOf(this), 1);
                this.guaranteeTime = new Date().getTime() + 3000;
            }
            else if (shiftKey && gKey && this.guarantee && this.guaranteeTime <= new Date().getTime())
            {
                this.showHealthTime = new Date().getTime();
                this.guarantee = false;
                player.companions.splice(player.companions.indexOf(this), 1);
                this.guaranteeTime = new Date().getTime() + 3000;
            }
        }
        else
        {
            if (this.stay)
            {
                this.stay = false;
                this.speed = this.staySpeed;
            }

            if (this.guarantee)
            {
                this.guarantee = false;
                player.companions.splice(player.companions.indexOf(this), 1);
            }
        }
    };

    //This makes sure that each existing Unit has a different dominance ranking and so when they get stuck on eachother the one with lower dominance will move out of the way.
    this.stackSorter = function()
    {
        this.stackDominance = Math.random();
        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
        {
            if (this.stackDominance == ArtificialIntelligenceAccess[i].stackDominance)
            {
                this.stackSorter();
                break;
            }
        }
    };

    this.attackBubble = function(bubbleConstructorList) // [[radius, this.rotation, relativeAngle, distance], ["", "", ""] etc. //relative angle is angle plus the units current angle.
    {
        var dfbtt;
        //if the player is in one of the proper attack bubbles return true.
        if (this.target == player)
        {
            for (var i = 0; i < bubbleConstructorList.length; i++)
            {
                dfbtt = Math.sqrt(((this.X + Math.cos(bubbleConstructorList[i][1] + bubbleConstructorList[i][2]) * (-bubbleConstructorList[i][3]))- X)*((this.X + Math.cos(bubbleConstructorList[i][1] + bubbleConstructorList[i][2]) * (-bubbleConstructorList[i][3])) - X) + ((this.Y + Math.sin(bubbleConstructorList[i][1] + bubbleConstructorList[i][2]) * (-bubbleConstructorList[i][3])) - Y)*((this.Y + Math.sin(bubbleConstructorList[i][1] + bubbleConstructorList[i][2]) * (-bubbleConstructorList[i][3])) - Y));
                if (dfbtt <= bubbleConstructorList[i][0])
                {
                    return true;
                }
            }
        }
        else if (this.target != "none" && typeof(this.target) != "undefined")
        {
            for (var i = 0; i < bubbleConstructorList.length; i++)
            {
                dfbtt = Math.sqrt(((this.X + Math.cos(bubbleConstructorList[i][1] + bubbleConstructorList[i][2]) * (-bubbleConstructorList[i][3]))- this.target.X)*((this.X + Math.cos(bubbleConstructorList[i][1] + bubbleConstructorList[i][2]) * (-bubbleConstructorList[i][3])) - this.target.X) + ((this.Y + Math.sin(bubbleConstructorList[i][1] + bubbleConstructorList[i][2]) * (-bubbleConstructorList[i][3])) - this.target.Y)*((this.Y + Math.sin(bubbleConstructorList[i][1] + bubbleConstructorList[i][2]) * (-bubbleConstructorList[i][3])) - this.target.Y));
                if (dfbtt <= bubbleConstructorList[i][0])
                {
                    return true;
                }
            }
        }
        //draw all of the attack bubbles.
        if (showUnitAttackBubble)
        {
            for (var i = 0; i < bubbleConstructorList.length; i++)
            {
                XXX.beginPath();
                XXX.lineWidth = 2;
                XXX.strokeStyle = "blue";
                XXX.arc(X - (this.X + Math.cos(bubbleConstructorList[i][1] + bubbleConstructorList[i][2]) * (-bubbleConstructorList[i][3])) + 1/2 * CCC.width, Y - (this.Y + Math.sin(bubbleConstructorList[i][1] + bubbleConstructorList[i][2]) * (-bubbleConstructorList[i][3])) + 1/2 * CCC.height, bubbleConstructorList[i][0], 0, 2 * Math.PI);
                XXX.stroke();
            }
        }
    };

    this.evadeObstruction = function()
    {
        if (this.creatureBiz)
        {
            this.creatureBiz = false;
        }
        else
        {
            if (!this.attacking)
            {
                var testMovX;
                var testMovY;
                var testMovPass = 0;
                this.suspendConflictingPointSystems = true;
                for (var i = 0; i < 8; i++)
                {
                    testMovX = this.X + Math.cos(this.rotation + (15 / 360 * Math.PI)) * ((TTD / 16.75) * this.speed * i);
                    testMovY = this.Y + Math.sin(this.rotation + (15 / 360 * Math.PI)) * ((TTD / 16.75) * this.speed * i);
                    if (!this.isObstructed(testMovX, testMovY))
                    {
                        testMovPass += 1;
                    }
                }
                if (testMovPass >= 8)
                {
                    this.newRotation = this.rotation + (15 / 360 * Math.PI);
                }
                else
                {
                    this.newRotation = this.rotation + (15 / 360 * Math.PI);
                    //this.evadeObstruction();
                }
            }
        }
    };

    this.stackSorter();

    this.selfPosition = function(target, nextX, nextY)
    {
        var obstructorDist = Math.sqrt((target.X - nextX) * (target.X - nextX) + (target.Y - nextY) * (target.Y - nextY));
        if (obstructorDist <= this.sizeRadius + target.sizeRadius && this.attacking == false)
        {
            return true;
        }
    };

    this.unStack = function()
    {
        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
        {
            if (gameLoopNumber % 5 == 0 && ArtificialIntelligenceAccess[i] !== this) //todo whilst this is set to == 0 it will not truly ever work but it think i prefer it not working.
            {
                var upcX = this.X - Math.cos(this.rotation) * (TTD / 16.75) * this.speed;
                var upcY = this.Y - Math.sin(this.rotation) * (TTD / 16.75) * this.speed;

                var obstrDist = Math.sqrt((ArtificialIntelligenceAccess[i].X - upcX) * (ArtificialIntelligenceAccess[i].X - upcX) + (ArtificialIntelligenceAccess[i].Y - upcY) * (ArtificialIntelligenceAccess[i].Y - upcY));

                if (obstrDist <= this.sizeRadius + ArtificialIntelligenceAccess[i].sizeRadius && this.attacking == false)
                {
                    if (this.mobile)
                    {
                        if (this.target == player)
                        {
                            if (this.stackDominance < ArtificialIntelligenceAccess[i].stackDominance || ArtificialIntelligenceAccess[i].attacking)
                            {
                                this.X += (this.speed * (1.25 + Math.random())) * Math.cos(Math.atan2(Y - this.Y, X - this.X) + Math.PI / 2);
                                this.Y += (this.speed * (1.25 + Math.random())) * Math.sin(Math.atan2(Y - this.Y, X - this.X) + Math.PI / 2);
                            }
                        }
                        else if (this.target != "none")
                        {
                            if (this.stackDominance < ArtificialIntelligenceAccess[i].stackDominance || ArtificialIntelligenceAccess[i].attacking)
                            {
                                this.X += (this.speed * (1.25 + Math.random())) * Math.cos(Math.atan2(this.target.Y - this.Y, this.target.X - this.X) + Math.PI / 2);
                                this.Y += (this.speed * (1.25 + Math.random())) * Math.sin(Math.atan2(this.target.Y - this.Y, this.target.X - this.X) + Math.PI / 2);
                            }
                        }
                        else
                        {
                            if (this.stackDominance < ArtificialIntelligenceAccess[i].stackDominance)
                            {
                                this.X += (this.speed * (1.25 + Math.random())) * Math.cos(Math.atan2(Y - this.Y, X - this.X) + Math.PI / 2);
                                this.Y += (this.speed * (1.25 + Math.random())) * Math.sin(Math.atan2(Y - this.Y, X - this.X) + Math.PI / 2);
                            }
                        }
                    }
                }
            }
        }
    };

    //this function determines the distance to the player [Distance To Player]
    this.DTP = function()
    {
        return Math.sqrt((X - this.X) * (X - this.X) + (Y - this.Y) * (Y - this.Y));
    };

    this.DTU = function(target)
    {
        return Math.sqrt((target.X - this.X) * (target.X - this.X) + (target.Y - this.Y) * (target.Y - this.Y));
    };

    this.DTM = function()
    {
        return Math.sqrt((this.X - (X - mouseX + (1/2 * CCC.width)))*(this.X - (X - mouseX + (1/2 * CCC.width))) + (this.Y - (Y - mouseY + (1/2 * CCC.height)))*(this.Y - (Y - mouseY + (1/2 * CCC.height))));
    };

    this.webTargeting = function()
    {
        this.target = "none";
        this.targetDistance = 1000000000;

        for (var i = 0; i < scenicList.length; i++)
        {
            if (this.team != "neutral" && scenicList[i].type == "web")
            {
                for (var k = 0; k < scenicList[i].webbed.length; k++)
                {
                    var swtchTrgt = false;
                    for (var j = 0; j < this.allys.length; j++)
                    {
                        if (this.allys[j] == scenicList[i].webbed[k].team)
                        {
                            swtchTrgt = true;
                            break;
                        }
                    }

                    if (!swtchTrgt && scenicList[i].webbed[k] != this && !scenicList[i].webbed[k].underground || !swtchTrgt && scenicList[i].webbed[k] != this && this.underground)
                    {
                        if (scenicList[i].webbed[k] == player)
                        {
                            var storeDTU = this.DTP();
                            if (this.targetDistance > storeDTU)
                            {
                                this.targetDistance = storeDTU;
                                this.target = player;
                            }
                        }
                        else
                        {
                            var storeDTU = this.DTU(scenicList[i].webbed[k]);
                            if (this.targetDistance > storeDTU)
                            {
                                this.targetDistance = storeDTU;
                                this.target = scenicList[i].webbed[k];
                            }
                        }
                    }
                }
            }
        }
    };

    this.targeting = function()
    {
        this.target = player;
        if (this.team == "player" && cKey) //charge command player team units will target their master only as a last resort while "C" is pressed
        {
            this.targetDistance = 1000000000;
        }
        else //this is the normal code for all other units given all other circumstances
        {
            this.targetDistance = this.DTP();
        }


        if (this.team != "neutral")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                var swtchTrgt = false;
                for (var j = 0; j < this.allys.length; j++)
                {
                    if (this.allys[j] == ArtificialIntelligenceAccess[i].team)
                    {
                        swtchTrgt = true;
                        break;
                    }
                }

                if (!swtchTrgt && ArtificialIntelligenceAccess[i] != this && !ArtificialIntelligenceAccess[i].underground || !swtchTrgt && ArtificialIntelligenceAccess[i] != this && this.underground)
                {
                    var storeDTU = this.DTU(ArtificialIntelligenceAccess[i]);
                    if (this.targetDistance > storeDTU)
                    {
                        this.targetDistance = storeDTU;
                        this.target = ArtificialIntelligenceAccess[i];
                    }
                }
            }
        }

        if (this.target != "none")
        {
            if (this.target != player && this.DTU(this.target) > this.baseSight)
            {
                this.target = "none";
                this.offended = false;
                this.attacking = false;
            }
        }

        if (typeof(this.target) == "undefined")
        {
            this.target = "none";
            this.offended = false;
            this.attacking = false;
        }

        if (fKey || tKey)
        {
            if (this.allys.indexOf("player") != -1)
            {
                this.target = player;
                this.targetDistance = this.DTP();
            }
        }
    };

    this.friendDecider = function()
    {
        this.allys = [this.team, "neutral"];

        if (this.team == "player")
        {
            if (player.kelPeace)
            {
                this.allys.push("Kel");
            }
            if (player.thengarPeace)
            {
                this.allys.push("Thengar");
            }
            if (player.freynorPeace)
            {
                this.allys.push("Freynor");
            }
            if (player.aldrekPeace)
            {
                this.allys.push("Aldrek");
            }
            if (player.orgellPeace)
            {
                this.allys.push("Orgell");
            }
            if (player.vardanPeace)
            {
                this.allys.push("Vardan");
            }
            if (player.cephritePeace)
            {
                this.allys.push("Cephrite");
            }
            if (player.nirwadenPeace)
            {
                this.allys.push("Nirwaden");
            }
            if (player.theBalgurMercenariesPeace)
            {
                this.allys.push("theBalgurMercenaries");
            }
        }
        if (this.team == "Freynor")
        {
            if (player.freynorPeace && player.freynorFaction > -50)
            {
                this.allys.push("player");
            }
            this.allys.push("theBalgurMercenaries"); //temporarily so that the guards will not slay the mercs. //booble
            this.allys.push("Vardan"); //temporarily so that the guards will not slay neculai. //booble
        }
        if (this.team == "Vardan")
        {
            if (player.vardanPeace && player.vardanFaction > -50)
            {
                this.allys.push("player");
            }
            this.allys.push("Freynor"); //temporarily so that neculai will not slay the villagers. //booble
        }
        if (this.team == "Kel")
        {
            if (player.kelPeace && player.kelFaction > -50)
            {
                this.allys.push("player");
            }
        }
        if (this.team == "Thengar")
        {
            if (player.thengarPeace && player.thengarFaction > -50)
            {
                this.allys.push("player");
            }
        }
        if (this.team == "Aldrek")
        {
            if (player.aldrekPeace && player.aldrekFaction > -50)
            {
                this.allys.push("player");
            }
        }
        if (this.team == "Orgell")
        {
            if (player.orgellPeace && player.orgellFaction > -50)
            {
                this.allys.push("player");
            }
        }
        if (this.team == "Cephrite")
        {
            if (player.cephritePeace && player.cephriteFaction > -50)
            {
                this.allys.push("player");
            }
        }
        if (this.team == "Nirwaden")
        {
            if (player.nirwadenPeace && player.nirwadenFaction > -50)
            {
                this.allys.push("player");
            }
        }
        if (this.team == "theBalgurMercenaries")
        {
            if (player.theBalgurMercenariesPeace && player.theBalgurMercenariesFaction > -50)
            {
                this.allys.push("player");
            }
        }
        if (this.team == "wild")
        {
            this.allys.push("etnia");
            this.allys.push("shehidia");
            this.allys.push("narthwarpia");
            this.allys.push("docile");
            this.allys.push("bearia");
            this.allys.push("ulgoyia");
        }
        if (this.team == "etnia")
        {
            this.allys.push("lombrisia");
            this.allys.push("shehidia");
            this.allys.push("ulgoyia");
            this.allys.push("docile");
        }
        if (this.team == "ulgoyia")
        {
            this.allys.push("lombrisia");
            this.allys.push("shehidia");
            this.allys.push("docile");
        }
        if (this.team == "lombrisia")
        {
            this.allys.push("shehidia");
            this.allys.push("ulgoyia");
            this.allys.push("docile");
        }
        if (this.team == "shehidia")
        {
            this.allys.push("etnia");
            this.allys.push("lombrisia");
            this.allys.push("ulgoyia");
            this.allys.push("docile");
        }
        if (this.team == "narthwarpia")
        {
            this.allys.push("wild");
            this.allys.push("gribia");
            this.allys.push("bearia");
            this.allys.push("docile");
        }
        if (this.team == "docile") //Narthwarps that are not in a hunting mood. //Gribs that have betrayed their very nature and have dedicated their lives solely to hunting the player. //Bears that just aren't in the mood to hunt... anything but you.
        {
            this.allys.push("herd");
            this.allys.push("wild");
            this.allys.push("gribia");
            this.allys.push("bearia");
            this.allys.push("shehidia");
            this.allys.push("ulgoyia");
            this.allys.push("narthwarpia");
            this.allys.push("berulnia");
            this.allys.push("lombrisia");
            this.allys.push("etnia");
        }
        if (this.team == "gribia")
        {
            this.allys.push("shehidia");
            this.allys.push("narthwarpia");
            this.allys.push("docile");
            this.allys.push("bearia");
            this.allys.push("ulgoyia");
        }
        if (this.team == "bearia")
        {
            this.allys.push("shehidia");
            this.allys.push("narthwarpia");
            this.allys.push("docile");
            this.allys.push("gribia");
            this.allys.push("wild");
        }
        if (this.team == "berulnia")
        {
            this.allys.push("docile");
        }
    };

    this.isSameTypeNearby = function(x, y, range, type)
    {
        this.numberOfSameTypeNearby = 0;
        var rotfl = false;
        for (var lol = 0; lol < ArtificialIntelligenceAccess.length; lol++)
        {
            if (ArtificialIntelligenceAccess[lol].type == type && ArtificialIntelligenceAccess[lol] !== this)
            {
                if (ArtificialIntelligenceAccess[lol].X <= x + range && ArtificialIntelligenceAccess[lol].X >= x - range && ArtificialIntelligenceAccess[lol].Y <= y + range && ArtificialIntelligenceAccess[lol].Y >= y - range)
                {
                    this.numberOfSameTypeNearby += 1;
                    rotfl = true;
                }
            }
        }
        return rotfl;
    }

    //this points the unit toward the main character.
    this.pointTowardsPlayer = function()
    {
        if (!this.suspendConflictingPointSystems)
        {
            var dtp = this.DTP();
            if (dtp < this.rangeOfSight && this.blinded == false) //if the player is close enough to the unit the unit will rotate toward him/her.
            {
                this.playerSeen = true;
                if (this.team != "player")
                {
                    this.newRotation = Math.atan2(Y - this.Y, X - this.X) + Math.PI;
                    //console.log(this.rotation + " | " + this.newRotation);
                }
                else
                {
                    if (rKey)
                    {
                        this.fleeing = true;
                        this.newRotation = Math.atan2(Y - this.Y, X - this.X); //The player sends their minions away from them with the tild key
                    }
                    else if (tKey)
                    {
                        this.fleeing = true;
                        this.newRotation = Math.atan2((Y - mouseY + 1/2 * CCC.height) - this.Y, (X - mouseX + 1/2 * CCC.width) - this.X) + Math.PI; //The player sends their minions away from them with the tild key
                    }
                    else
                    {
                        this.newRotation = Math.atan2(Y - this.Y, X - this.X) + Math.PI; //the player's minions return to their master if the master is in sight
                    }
                }
            }
            else if (this.blinded == true)
            {
                this.playerSeen = false;
                var rndmz = Math.floor(Math.random() * 13);
                if (rndmz <= 3)
                {
                    this.newRotation += 1 * Math.PI;
                }
                else if (rndmz > 3 && rndmz <= 7)
                {
                    this.newRotation -= 1/2 * Math.PI;
                }
                else if (rndmz > 7 && rndmz <= 9)
                {
                    this.newRotation = Math.atan2(Y - this.Y, X - this.X) + Math.PI;
                }
            }
            else
            {
                this.playerSeen = false;
            }
        }
    };

    this.noticePlayer = function()
    {
        var dtp = this.DTP();
        if (dtp < this.rangeOfSight && this.blinded == false) //if the player is close enough to the unit the unit will rotate toward him/her.
        {
            this.playerSeen = true;
        }
        else
        {
            this.playerSeen = false;
        }
    };

    this.pointAway = function(thing)
    {
        if (!this.suspendConflictingPointSystems)
        {
            if (this.blinded == false)
            {
                this.newRotation = Math.atan2(thing.Y - this.Y, thing.X - this.X);
            }
            else if (this.blinded == true)
            {
                var rndmz = Math.floor(Math.random() * 13);
                if (rndmz <= 3)
                {
                    this.newRotation += 1 * Math.PI;
                }
                else if (rndmz > 3 && rndmz <= 7)
                {
                    this.newRotation -= 1/2 * Math.PI;
                }
                else if (rndmz > 7 && rndmz <= 9)
                {
                    this.newRotation = Math.atan2(thing.Y - this.Y, thing.X - this.X);
                }
            }
        }
    };

    //this points away from the player.
    this.pointAwayFromPlayer = function()
    {
        if (!this.suspendConflictingPointSystems)
        {
            var dtp = this.DTP();
            if (dtp < this.rangeOfSight && this.blinded == false) //if the player is close enough to the unit the unit will rotate toward him/her.
            {
                this.playerSeen = true;
                if (this.team != "player")
                {
                    this.fleeing = true;
                    this.newRotation = Math.atan2(Y - this.Y, X - this.X);
                    //console.log(this.rotation + " | " + this.newRotation);
                }
                else
                {
                    if (rKey)
                    {
                        this.fleeing = true;
                        this.newRotation = Math.atan2(Y - this.Y, X - this.X); //The player sends their minions away from them with the tild key
                    }
                    else if (tKey)
                    {
                        this.fleeing = true;
                        this.newRotation = Math.atan2((Y - mouseY + 1/2 * CCC.height) - this.Y, (X - mouseX + 1/2 * CCC.width) - this.X) + Math.PI; //The player sends their minions away from them with the tild key
                    }
                    else
                    {
                        this.newRotation = Math.atan2(Y - this.Y, X - this.X) + Math.PI; //the player's minions return to their master if the master is in sight
                    }
                }
            }
            else if (this.blinded == true)
            {
                this.playerSeen = false;
                var rndmz = Math.floor(Math.random() * 14);
                if (rndmz <= 3)
                {
                    this.newRotation -= 1 * Math.PI;
                }
                else if (rndmz > 3 && rndmz <= 7)
                {
                    this.newRotation += 1 / 2 * Math.PI;
                }
                else if (rndmz > 7 && rndmz <= 9)
                {
                    this.newRotation = Math.atan2(Y - this.Y, X - this.X);
                }
            }
            else
            {
                this.fleeing = false;
                this.playerSeen = false;
            }
        }
    };

    this.isChargeBlocked = function() //if a charger is blocked from getting to its target it cannot exploit its unnaturally long range to attack the target from afar.
    {
        var nextX = this.X - Math.cos(this.rotation) * ((TTD / 16.75) * this.speed);
        var nextY = this.Y - Math.sin(this.rotation) * ((TTD / 16.75) * this.speed);

        if (!this.isObstructed(nextX, nextY) || this.flying == true || this.underground == true)
        {
            return false;
        }
        else
        {
            return true;
        }
    };


    //Wander -- move between randomly selected points within a set radius.
    this.wanderX = this.X;
    this.wanderY = this.Y;
    this.wandering = false;
    this.wanderHold = false;

    this.wander = function(XX, YY, totalZone, stepZone, manual) //total zone is the total amount of area that is allowed for wandering, while step zone is the amount of space available for determining where the next movement objective should be.
    {
        this.dtd = function() // distance to destination
        {
            return Math.sqrt((this.wanderX - this.X)*(this.wanderX - this.X) + (this.wanderY - this.Y)*(this.wanderY - this.Y));
        };

        //if unit is outside of wander zone reset to center
        if (this.X > XX + totalZone && this.X < XX - totalZone && this.Y > YY + totalZone && this.Y < YY - totalZone)
        {
            this.wanderX = XX;
            this.wanderY = YY;
            this.wandering = true;
        }

        if (!this.wandering && !this.wanderHold)
        {
            if (stepZone == false || stepZone >= totalZone)
            {
                this.wandering = true;
                this.wanderX = XX + ((Math.random() * totalZone) - 1/2 * totalZone);
                this.wanderY = YY + ((Math.random() * totalZone) - 1/2 * totalZone);
            }
            else
            {
                this.wanderX = this.X + ((Math.random() * stepZone) - 1/2 * stepZone);
                this.wanderY = this.Y + ((Math.random() * stepZone) - 1/2 * stepZone);

                if (this.wanderX <= XX + totalZone && this.wanderX >= XX - totalZone && this.wanderY <= YY + totalZone && this.wanderY >= YY - totalZone)
                {
                    this.wandering = true;
                }
            }
        }
        else
        {
            if (!this.suspendConflictingPointSystems)
            {
                this.newRotation = Math.atan2(this.wanderY - this.Y, this.wanderX - this.X) + Math.PI; //Point toward the destination.

                if (this.dtd() > ((TTD / 16.75) * this.speed + 1))
                {
                    var nextX = this.X - Math.cos(this.rotation) * ((TTD / 16.75) * this.speed) * this.stunned;
                    var nextY = this.Y - Math.sin(this.rotation) * ((TTD / 16.75) * this.speed) * this.stunned;

                    if (!this.isObstructed(nextX, nextY) || this.flying == true || this.underground == true)
                    {
                        this.X = nextX;
                        this.Y = nextY;
                        this.moving = true;
                    }
                    else
                    {
                        this.evadeObstruction();
                    }
                }
                else
                {
                    if (manual)
                    {
                        this.wandering = false;
                        this.wanderHold = true;
                    }
                    this.moving = false;
                }
            }
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
        else if (numberOfStops == 8)
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
            else if (this.patrolProgress == 7 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[7][0];
                this.patrolDestinationY = this.ultra.route[7][1];
                this.patrolArrived = false;
            }

            if (this.patrolProgress == 8 && this.patrolArrived == true && loop == true)
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
        else if (numberOfStops == 9)
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
            else if (this.patrolProgress == 7 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[7][0];
                this.patrolDestinationY = this.ultra.route[7][1];
                this.patrolArrived = false;
            }
            else if (this.patrolProgress == 8 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[8][0];
                this.patrolDestinationY = this.ultra.route[8][1];
                this.patrolArrived = false;
            }

            if (this.patrolProgress == 9 && this.patrolArrived == true && loop == true)
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
        else if (numberOfStops == 10)
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
            else if (this.patrolProgress == 7 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[7][0];
                this.patrolDestinationY = this.ultra.route[7][1];
                this.patrolArrived = false;
            }
            else if (this.patrolProgress == 8 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[8][0];
                this.patrolDestinationY = this.ultra.route[8][1];
                this.patrolArrived = false;
            }
            else if (this.patrolProgress == 9 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[9][0];
                this.patrolDestinationY = this.ultra.route[9][1];
                this.patrolArrived = false;
            }

            if (this.patrolProgress == 10 && this.patrolArrived == true && loop == true)
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
        else if (numberOfStops == 11)
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
            else if (this.patrolProgress == 7 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[7][0];
                this.patrolDestinationY = this.ultra.route[7][1];
                this.patrolArrived = false;
            }
            else if (this.patrolProgress == 8 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[8][0];
                this.patrolDestinationY = this.ultra.route[8][1];
                this.patrolArrived = false;
            }
            else if (this.patrolProgress == 9 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[9][0];
                this.patrolDestinationY = this.ultra.route[9][1];
                this.patrolArrived = false;
            }
            else if (this.patrolProgress == 10 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[9][0];
                this.patrolDestinationY = this.ultra.route[9][1];
                this.patrolArrived = false;
            }

            if (this.patrolProgress == 11 && this.patrolArrived == true && loop == true)
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
        else if (numberOfStops == 12)
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
            else if (this.patrolProgress == 7 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[7][0];
                this.patrolDestinationY = this.ultra.route[7][1];
                this.patrolArrived = false;
            }
            else if (this.patrolProgress == 8 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[8][0];
                this.patrolDestinationY = this.ultra.route[8][1];
                this.patrolArrived = false;
            }
            else if (this.patrolProgress == 9 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[9][0];
                this.patrolDestinationY = this.ultra.route[9][1];
                this.patrolArrived = false;
            }
            else if (this.patrolProgress == 10 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[9][0];
                this.patrolDestinationY = this.ultra.route[9][1];
                this.patrolArrived = false;
            }
            else if (this.patrolProgress == 11 && this.patrolArrived == true)
            {
                this.patrolDestinationX = this.ultra.route[9][0];
                this.patrolDestinationY = this.ultra.route[9][1];
                this.patrolArrived = false;
            }

            if (this.patrolProgress == 12 && this.patrolArrived == true && loop == true)
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
            if (!this.suspendConflictingPointSystems)
            {
                this.newRotation = Math.atan2(this.patrolDestinationY - this.Y, this.patrolDestinationX - this.X) + Math.PI; //Point toward the destination.

                if (this.patrolDistance > ((TTD / 16.75) * this.speed + 1)) //If the buffer between the target and this unit is not reached yet, and this has not been obstructed by anything, and the target is within sight then move a little bit in the direction of that target.
                {
                    var nextX = this.X - Math.cos(this.rotation) * ((TTD / 16.75) * this.speed) * this.stunned;
                    var nextY = this.Y - Math.sin(this.rotation) * ((TTD / 16.75) * this.speed) * this.stunned;

                    if (!this.isObstructed(nextX, nextY) || this.flying == true || this.underground == true)
                    {
                        this.X = nextX;
                        this.Y = nextY;
                        this.moving = true;
                    }
                    else
                    {
                        this.evadeObstruction();
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
                    else if (this.patrolProgress == 7)
                    {
                        this.patrolProgress = 8;
                    }
                    else if (this.patrolProgress == 8)
                    {
                        this.patrolProgress = 9;
                    }
                    else if (this.patrolProgress == 9)
                    {
                        this.patrolProgress = 10;
                    }
                    else if (this.patrolProgress == 10)
                    {
                        this.patrolProgress = 11;
                    }
                    else if (this.patrolProgress == 11)
                    {
                        this.patrolProgress = 12;
                    }
                }
            }
        }

    };

    //this determines a unit's range of sight in a number of different situations.
    this.rangeOfSightCalculator = function(baseSight, hostile) //base sight is the base amount of rangeOfSight that the unit has, hostile implys that this particular type of unit will persue its prey for much longer than others would.
    {
        this.baseSight = baseSight;
        // if the extra range is expired then set it to 0.
        if (new Date().getTime() - this.extraRangeTime > 4000)
        {
            this.extraRange = 0;
        }
        if (this.team == "player" && this.target == player) //this allows the units under the player character's control to see the player at any distance.
        {
            if (fKey || tKey)
            {
                this.extraRange = this.DTP();
            }
        }

        if (this.target == player)
        {
            if (wKey == true && shiftKey == true && this.playerSeen == false && !altKey)
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
            else if (altKey == true && this.playerSeen == false && !this.disturbed) // If sneaking and the player has not yet been noticed by the enemy...
            {
                this.rangeOfSight = baseSight * (13 / (14 + (player.getDexterity() * 2))) + this.extraRange; // the enemy's sight is severely lowered.
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

            if (this.disturbed == true)
            {
                this.rangeOfSight = baseSight * 4 + this.extraRange;
            }

            //If superstealth is active and the player is not yet seen then the the unit fails to notice the player.
            if (this.playerSeen == false && player.superStealth && this.resistances.indexOf("stealth") == -1)
            {
                this.rangeOfSight = 0;
            }
        }
        else if (this.target != "none")
        {
            if (this.target.flying != true && this.target.speed >= 4)
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
            else if (!this.flying && this.target.flying && !this.disturbed || this.target.speed <= 1 && !this.disturbed) // slow and flying enemies are harder to track for non-flying units.
            {
                this.rangeOfSight = baseSight * 0.85 + this.extraRange; // the enemy's sight is a bit lowered.
            }
            else if (hostile == false || this.disturbed == true && hostile == false)
            {
                this.rangeOfSight = baseSight * 1.2 + this.extraRange;
            }
            else if (hostile == "mildly" || this.disturbed == true && hostile == "mildly")
            {
                this.rangeOfSight = baseSight * 1.45 + this.extraRange;
            }
            else if (hostile == true || this.disturbed == true && hostile == true)
            {
                this.rangeOfSight = baseSight * 1.7 + this.extraRange;
            }
            else if (hostile == "very" || this.disturbed == true && hostile == "very")
            {
                this.rangeOfSight = baseSight * 2 + this.extraRange;
            }
            else if (hostile == "extremely" || this.disturbed == true && hostile == "extremely")
            {
                this.rangeOfSight = baseSight * 2.5 + this.extraRange;
            }
            else if (hostile == "unrelenting" || this.disturbed == true && hostile == "unrelenting")
            {
                this.rangeOfSight = baseSight * 3 + this.extraRange;
            }
            else
            {
                this.rangeOfSight = baseSight + this.extraRange; //the enemy will retain its rangeOfSight.
            }

            if (this.disturbed == true)
            {
                this.rangeOfSight = baseSight * 4 + this.extraRange;
            }

            if (this.target.superStealth && this.resistances.indexOf("stealth") == -1)
            {
                this.rangeOfSight = 0;
            }
        }
        else
        {
            this.rangeOfSight = baseSight + this.extraRange;
        }
    };

    //Units may casually speak every so often. //VOICE
    this.voice = function(soundList, range, repeat)
    {
        var sounds = soundList;
        for (var v = 0; v < soundList.length; v++)
        {
            sounds[v].volume = Math.max(0, Math.min(1, 1 - (this.DTP() / range)));
        }

        if (new Date().getTime() - this.voiceTime >= this.voiceFrequency * 1000)
        {
            this.voiceTime = new Date().getTime();

            var rnd = Math.floor(Math.random() * soundList.length);
            var hitz = false;

            if (!repeat)
            {
                for (var i = 0; i < this.voicedSounds.length; i++)
                {
                    if (this.voicedSounds[i] == rnd)
                    {
                        hitz = true;
                    }
                }
            }

            if (hitz == false)
            {
                if (this.DTP() <= range)
                {
                    for (var j = 0; j < soundList.length; j++)
                    {
                        if (j == rnd)
                        {
                            if (player.cyrinthilimTrip)
                            {
                                sounds[j].playbackRate = -2;
                                sounds[j].currentTime = soundList[j].duration;
                            }
                            else
                            {
                                sounds[j].playbackRate = 1;
                                sounds[j].currentTime = 0;
                            }

                            this.voicedSounds.push(rnd);
                            sounds[j].play();
                        }
                    }
                }
            }
        }
    };

    //This moves the unit forwards either away from or toward the player.
    this.moveInRelationToPlayer = function() //the fraction of PI is the amount of angle-adjustment for the specific type of unit.
    {
        if (!this.suspendConflictingPointSystems)
        {
            var dtp = this.DTP();
            if (dtp > this.engagementRadius && dtp < this.rangeOfSight || this.fleeing == true && dtp < this.rangeOfSight || this.charger == true && dtp <= this.rangeOfSight) //If the buffer between the target and this unit is not reached yet, and this has not been obstructed by anything, and the target is within sight then move a little bit in the direction of that target.
            {

                var nextX = this.X - Math.cos(this.rotation) * ((TTD / 16.75) * this.speed) * this.stunned;
                var nextY = this.Y - Math.sin(this.rotation) * ((TTD / 16.75) * this.speed) * this.stunned;

                if (!this.isObstructed( nextX, nextY ) || this.flying == true || this.underground == true)
                {
                    this.X = nextX;
                    this.Y = nextY;
                    this.moving = true;
                }
                else
                {
                    this.evadeObstruction();
                }
                /*else
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
                 }*/
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
    };

    this.nearbyPlants = function(numberToList, excludeSubVariety, nectarOnly, nonPickedOnly)
    {
        var nearPlants = [];
        var checkedAlready = [];
        var nearestDistance = false;
        var closest = -1;
        var skip = false;
        var dist = false;

        for (var n = 0; n < numberToList; n++)
        {
            for (var i = 0; i < scenicList.length; i++)
            {
                if (typeof(excludeSubVariety) != "undefined")
                {
                    var nect = true;
                    var pikked = true;
                    if (nectarOnly)
                    {
                        if (scenicList[i].nectarNum <= 0)
                        {
                            nect = false;
                        }
                    }

                    if (nonPickedOnly)
                    {
                        if (scenicList[i].phase == "picked")
                        {
                            pikked = false;
                        }
                    }

                    if (scenicList[i].subVariety != excludeSubVariety && scenicList[i].variety == "plant" && nect && pikked)
                    {
                        skip = false;
                        for (var j = 0; j < checkedAlready.length; j++)
                        {
                            if (checkedAlready[j] == i)
                            {
                                skip = true;
                            }
                        }
                        if (!skip)
                        {
                            var dist = this.distanceFinder(scenicList[i].X, scenicList[i].Y);
                            //console.log("dist " + dist);
                            if (nearestDistance == false)
                            {
                                nearestDistance = dist;
                                closest = i;
                            }
                            else if (dist < nearestDistance)
                            {
                                nearestDistance = dist;
                                closest = i;
                            }
                        }
                    }
                }
                else if (scenicList[i].variety == "plant")
                {
                    skip = false;
                    for (var j = 0; j < checkedAlready.length; j++)
                    {
                        if (checkedAlready[j] == i)
                        {
                            skip = true;
                        }
                    }
                    if (!skip)
                    {
                        var dist = this.distanceFinder(scenicList[i].X, scenicList[i].Y);
                        if (nearestDistance == false)
                        {
                            nearestDistance = dist;
                            closest = i;
                        }
                        else if (dist < nearestDistance)
                        {
                            nearestDistance = dist;
                            closest = i;
                        }
                    }
                }
            }
            if (closest != -1)
            {
                nearPlants.push(scenicList[closest]);
                checkedAlready.push(closest);
                nearestDistance = false;
            }
        }
        //console.log(nearPlants);
        return nearPlants;
    };

    this.distanceFinder = function(thing1, thing2)
    {
        return Math.sqrt((thing1.X - thing2.X)*(thing1.X - thing2.X)+(thing1.Y - thing2.Y)*(thing1.Y - thing2.Y));
    };

    this.pointTowards = function(thing)
    {
        if (!this.suspendConflictingPointSystems)
        {
            if (this.blinded == false)
            {
                this.newRotation = Math.atan2(thing.Y - this.Y, thing.X - this.X) + Math.PI;
            }
            else if (this.blinded == true)
            {
                var rndmz = Math.floor(Math.random() * 13);
                if (rndmz <= 3)
                {
                    this.newRotation += 1 * Math.PI;
                }
                else if (rndmz > 3 && rndmz <= 7)
                {
                    this.newRotation -= 1/2 * Math.PI;
                }
                else if (rndmz > 7 && rndmz <= 9)
                {
                    this.newRotation = Math.atan2(thing.Y - this.Y, thing.X - this.X) + Math.PI;
                }
            }
        }
    };

    this.moveInRelationToThing = function(thing, extraSight) //move towards target thing.
    {
        if (!this.suspendConflictingPointSystems)
        {
            var extraS = extraSight;
            if (typeof(extraS) == "undefined")
            {
                extraS = 0;
            }
            var dTo = this.distanceFinder(this, thing);
            if (dTo > this.engagementRadius && dTo < (this.rangeOfSight + extraS) || this.fleeing == true && dTo < (this.rangeOfSight + extraS) || this.charger == true && dTo <= this.rangeOfSight) //If the buffer between the target and this unit is not reached yet, and this has not been obstructed by anything, and the target is within sight then move a little bit in the direction of that target.
            {
                var nextX = this.X - Math.cos(this.rotation) * ((TTD / 16.75) * this.speed) * this.stunned;
                var nextY = this.Y - Math.sin(this.rotation) * ((TTD / 16.75) * this.speed) * this.stunned;

                if (!this.isObstructed( nextX, nextY ) || this.flying == true || this.underground == true)
                {
                    this.X = nextX;
                    this.Y = nextY;
                    this.moving = true;
                }
                else
                {
                    this.evadeObstruction();
                }
                /*else
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
                 }*/
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
    };

    this.Attack = function(randomDamage, setDamage)
    {
        if (this.target == player && this.team != "player")
        {
            //this method relies on the class variable being set: this.timeBetweenAttacks = new Date().getTime();
            var dtp = this.DTP();
            if (dtp <= this.engagementRadius && dtp <= this.rangeOfSight)
            {
                this.attacking = true;
            }
            else if (this.followThrough == false)
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

                        if (player.immune && this.unavoidable == false)
                        {
                            this.damage = 0;
                        }

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
                        if (player.immune && this.unavoidable == false)
                        {
                            this.damage = 0;
                        }
                        //console.log(this.damage + " is the damage done by " + this.ID + " through an armour total of " + player.armourTotal + ". The resulting damage was " + Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) * (TTD / 16.75) + ".");
                        if (player.mageShield > 0)
                        {
                            player.mageShield -= this.damage;
                            this.justAttacked = true;
                        }
                        else
                        {
                            player.health += player.mageShield;
                            //player.decreaseInHealth -= player.mageShield;
                            player.mageShield = 0;

                            player.health -= Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour));
                            player.decreaseInHealth += Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour));
                            this.justAttacked = true;

                            //Special Attacking Effects
                            if (this.effect == "poisonIII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.poisonIII = true;
                            }
                            else if (this.effect == "poisonII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.poisonII = true;
                            }
                            else if (this.effect == "poisonI" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.poisonI = true;
                            }
                            else if (this.effect == "stunIII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.stunnedIII = true;
                                player.stunnedTime = 11;
                            }
                            else if (this.effect == "stunII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.stunnedII = true;
                                player.stunnedTime = 8;
                            }
                            else if (this.effect == "stunI" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.stunnedI = true;
                                player.stunnedTime = 5;
                            }
                            else if (this.effect == "etnaVenom" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.etnaVenTime = new Date().getTime();
                            }
                            else if (this.effect == "freezingStun")
                            {
                                player.stunnedIII = true;
                                player.stunnedTime = 20;
                                player.warmth -= 20;

                                XXX.save();
                                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                                XXX.globalAlpha = 0.6;
                                XXX.drawImage(polypol, 1691, 240, 28, 24, - 1/2 * (28 * 1.2), - 1/2 * (24 * 1.2), (28 * 1.2), (24 * 1.2));
                                XXX.restore();
                            }
                            else if (this.effect == "narthwarpToxin" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.energy -= Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) / 1.5;
                            }
                            else if (this.effect == "fatigueI" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.energilTime = 60;
                                player.fatigueI = true;
                            }
                            else if (this.effect == "fatigueII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.energilTime = 60;
                                player.fatigueII = true;
                            }
                            else if (this.effect == "fatigueIII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.energilTime = 60;
                                player.fatigueIII = true;
                            }
                            else if (this.effect == "fatigueIV" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.energilTime = 60;
                                player.fatigueIV = true;
                            }
                            else if (this.effect == "fatigueV" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.energilTime = 60;
                                player.fatigueV = true;
                            }
                            else if (this.effect == "grewbleToxinI" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.energilTime = 300;
                                player.fatigueI = true;
                            }
                            else if (this.effect == "grewbleToxinII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.energilTime = 300;
                                player.fatigueII = true;
                            }
                            else if (this.effect == "grewbleToxinIII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.energilTime = 360;
                                player.fatigueIV = true;
                            }
                            else if (this.effect == "smashbackI" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                var twrdsUnit = Math.atan2(this.Y - Y, this.X - X);
                                X -= Math.cos(twrdsUnit) * 50;
                                Y -= Math.sin(twrdsUnit) * 50;
                                player.stunnedIII = true;
                                player.stunnedTime = 3;
                            }
                            else if (this.effect == "smashbackII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                var twrdsUnit = Math.atan2(this.Y - Y, this.X - X);
                                X -= Math.cos(twrdsUnit) * 125;
                                Y -= Math.sin(twrdsUnit) * 125;
                                player.stunnedIII = true;
                                player.stunnedTime = 4;
                            }
                            else if (this.effect == "smashbackIII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                var twrdsUnit = Math.atan2(this.Y - Y, this.X - X);
                                X -= Math.cos(twrdsUnit) * 325;
                                Y -= Math.sin(twrdsUnit) * 325;
                                player.stunnedIII = true;
                                player.stunnedTime = 4;
                            }
                            else if (this.effect == "smashbackIV" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                var twrdsUnit = Math.atan2(this.Y - Y, this.X - X);
                                X -= Math.cos(twrdsUnit) * 550;
                                Y -= Math.sin(twrdsUnit) * 550;
                                player.stunnedIII = true;
                                player.stunnedTime = 5;
                            }
                            else if (this.effect == "fire" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.burningTime = new Date().getTime();
                            }
                            else if (this.effect == "blindingI" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 2;
                            }
                            else if (this.effect == "blindingII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 3;
                            }
                            else if (this.effect == "blindingIII" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 5;
                            }
                            else if (this.effect == "blindingIV" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 8;
                            }
                            else if (this.effect == "blindingV" && (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0))
                            {
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 13;
                            }
                        }
                    }
                }
            }
        }
        else if (this.target != "none")
        {
            //this method relies on the class variable being set: this.timeBetweenAttacks = new Date().getTime();
            var dtu = this.DTU(this.target);

            if (dtu <= this.engagementRadius + (this.target.sizeRadius - 10) && dtu <= this.baseSight)
            {
                this.attacking = true;
            }
            else
            {
                this.attacking = false;
            }

            if (this.attacking == true)
            {
                if (this.attackStyle == "rapid")
                {
                    if (this.damage > this.target.armour)
                    {
                        this.damage = Math.floor(Math.random() * (randomDamage + 1)) + setDamage;
                        this.target.health -= Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) * (TTD / (16.75 + (100 * this.attackRate)));
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

                        this.target.health -= Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour));
                        this.target.lessEXP += this.target.experience * (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) / this.target.healthMAX);
                        this.target.offended = true;
                        if (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour) > 0))
                        {
                            if (this.team == "player")
                            {
                                this.target.disturbedTime = new Date().getTime();
                            }
                            this.target.healthShownTime = new Date().getTime();
                        }
                        if (this.target.health <= 0)
                        {
                            if (this.team == "player")
                            {
                                this.target.killByPlayerTeam = true;
                                this.target.killNotByPlayer = true;
                            }
                            else
                            {
                                this.target.killNotByPlayer = true;
                            }
                        }
                        this.justAttacked = true;

                        //Special Attacking Effects

                        if (this.effect == "stunV" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.stunV = true;
                            this.target.stunTimer = 12;
                            this.target.stunTime = new Date().getTime();
                        }
                        else if (this.effect == "etnaVenom" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.stunV = true;
                            this.target.stunTimer = 20;
                            this.target.stunTime = new Date().getTime();
                        }
                        else if (this.effect == "stunIV" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.stunIV = true;
                            this.target.stunTimer = 12;
                            this.target.stunTime = new Date().getTime();
                        }
                        else if (this.effect == "stunIII" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.stunIII = true;
                            this.target.stunTimer = 11;
                            this.target.stunTime = new Date().getTime();
                        }
                        else if (this.effect == "stunII" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.stunII = true;
                            this.target.stunTimer = 8;
                            this.target.stunTime = new Date().getTime();
                        }
                        else if (this.effect == "stunI" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.stunI = true;
                            this.target.stunTimer = 5;
                            this.target.stunTime = new Date().getTime();
                        }
                        else if (this.effect == "freezingStun" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.stunV = true;
                            this.target.stunTimer = 12;
                            this.target.stunTime = new Date().getTime();
                            this.target.frozenTime = new Date().getTime();
                        }
                        else if (this.effect == "smashbackI" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            var twrdsUnit = Math.atan2(this.Y - this.target.Y, this.X - this.target.X);
                            this.target.X -= Math.cos(twrdsUnit) * 50;
                            this.target.Y -= Math.sin(twrdsUnit) * 50;
                            this.target.stunIII = true;
                            this.target.stunTimer = 3;
                            this.target.stunTime = new Date().getTime();
                        }
                        else if (this.effect == "smashbackII" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            var twrdsUnit = Math.atan2(this.Y - this.target.Y, this.X - this.target.X);
                            this.target.X -= Math.cos(twrdsUnit) * 125;
                            this.target.Y -= Math.sin(twrdsUnit) * 125;
                            this.target.stunIII = true;
                            this.target.stunTimer = 4;
                            this.target.stunTime = new Date().getTime();
                        }
                        else if (this.effect == "smashbackIII" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            var twrdsUnit = Math.atan2(this.Y - this.target.Y, this.X - this.target.X);
                            this.target.X -= Math.cos(twrdsUnit) * 325;
                            this.target.Y -= Math.sin(twrdsUnit) * 325;
                            this.target.stunIII = true;
                            this.target.stunTimer = 4;
                            this.target.stunTime = new Date().getTime();
                        }
                        else if (this.effect == "smashbackIV" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            var twrdsUnit = Math.atan2(this.Y - this.target.Y, this.X - this.target.X);
                            this.target.X -= Math.cos(twrdsUnit) * 550;
                            this.target.Y -= Math.sin(twrdsUnit) * 550;
                            this.target.stunIV = true;
                            this.target.stunTimer = 4;
                            this.target.stunTime = new Date().getTime();
                        }
                        else if (this.effect == "fire" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.burningTime = new Date().getTime();
                        }
                        else if (this.effect == "blindingI" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.blinded = true;
                            this.target.blindedStoreTime = new Date().getTime();
                            this.target.blindedTime = 2;
                        }
                        else if (this.effect == "blindingII" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.blinded = true;
                            this.target.blindedStoreTime = new Date().getTime();
                            this.target.blindedTime = 3;
                        }
                        else if (this.effect == "blindingIII" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.blinded = true;
                            this.target.blindedStoreTime = new Date().getTime();
                            this.target.blindedTime = 5;
                        }
                        else if (this.effect == "blindingIV" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.blinded = true;
                            this.target.blindedStoreTime = new Date().getTime();
                            this.target.blindedTime = 8;
                        }
                        else if (this.effect == "blindingV" && (Math.max(0, this.damage - Math.max(0, this.target.armour - this.negateArmour)) > 0))
                        {
                            this.target.blinded = true;
                            this.target.blindedStoreTime = new Date().getTime();
                            this.target.blindedTime = 13;
                        }
                    }
                }
            }
        }
    };

    this.flashAnimate = function(framerate, rotation, transparency, list)
    {
        //use a list with coords for images: [{image:, imgX:, imgY:, portionW:, portionH:, adjX:, adjY:, width:, height:}, ... etc.]
        if (this.flashFrame >= list.length)
        {
            this.flashFrame = 0;
        }

        if (rotation != false)
        {
            XXX.save();
            XXX.globalAlpha = transparency;
            XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
            XXX.rotate(rotation);
            XXX.drawImage(list[this.flashFrame].image, list[this.flashFrame].imgX, list[this.flashFrame].imgY, list[this.flashFrame].portionW, list[this.flashFrame].portionH, list[this.flashFrame].adjX, list[this.flashFrame].adjY, list[this.flashFrame].width, list[this.flashFrame].height);
            XXX.restore();
        }
        else
        {
            XXX.save();
            XXX.globalAlpha = transparency;
            XXX.drawImage(list[this.flashFrame].image, list[this.flashFrame].imgX, list[this.flashFrame].imgY, list[this.flashFrame].portionW, list[this.flashFrame].portionH, X - this.X + (1 / 2 * CCC.width) + list[this.flashFrame].adjX, Y - this.Y + (1 / 2 * CCC.height) + list[this.flashFrame].adjY, list[this.flashFrame].width, list[this.flashFrame].height);
            XXX.restore();
        }

        if (new Date().getTime() - this.flashFrameTime >= framerate)
        {
            this.flashFrameTime = new Date().getTime();
            this.flashFrame += 1;
        }
    };

    //this function deals with all of the effects that can effect AI UNITS.
    this.effected = function(resistancesList)
    {
        //Resistances to effects
        //variables that signify restant or not.
        var frozenResistance = false;
        var burningResistance = false;
        var blindedResistance = false;
        var stunResistance = false;
        var shockResistance = false;
        var acidResistance = false;
        var charmResistance = false;
        var webResistance = false;

        //for loop to check for resistance
        for (var i = 0; i < resistancesList.length; i++)
        {
            if (resistancesList[i] == "frozen")
            {
                frozenResistance = true;
            }
            else if (resistancesList[i] == "burning")
            {
                burningResistance = true;
            }
            else if (resistancesList[i] == "blinded")
            {
                blindedResistance = true;
            }
            else if (resistancesList[i] == "stun")
            {
                stunResistance = true;
            }
            else if (resistancesList[i] == "shock")
            {
                shockResistance = true;
            }
            else if (resistancesList[i] == "acid")
            {
                acidResistance = true;
            }
            else if (resistancesList[i] == "charm")
            {
                charmResistance = true;
            }
            else if (resistancesList[i] == "web")
            {
                webResistance = true;
            }
        }

        //Burning Effect
        if (burningResistance == false && new Date().getTime() - this.burningTime <= 9000 && (1.2 - this.heatResistance) > 0)
        {
            this.frozenTime = 0;
            this.flashAnimate(90, false, 0.90, [{image: polypol, imgX: 1691, imgY: 184, portionW: 24, portionH: 23, adjX: -1 / 2 * ((24 * 1.5)/10) * this.sizeRadius, adjY: -1 / 2 * ((23 * 1.5)/10) * this.sizeRadius, width: ((24 * 1.5)/10) * this.sizeRadius, height: ((23 * 1.5)/10) * this.sizeRadius}, {image: polypol, imgX: 1721, imgY: 185, portionW: 24, portionH: 23, adjX: -1 / 2 * ((24 * 1.5)/10) * this.sizeRadius, adjY: -1 / 2 * ((23 * 1.5)/10) * this.sizeRadius, width: ((24 * 1.5)/10) * this.sizeRadius, height: ((23 * 1.5)/10) * this.sizeRadius}, {image: polypol, imgX: 1750, imgY: 185, portionW: 24, portionH: 23, adjX: -1 / 2 * ((24 * 1.5)/10) * this.sizeRadius, adjY: -1 / 2 * ((23 * 1.5)/10) * this.sizeRadius, width: ((24 * 1.5)/10) * this.sizeRadius, height: ((23 * 1.5)/10) * this.sizeRadius}, {image: polypol, imgX: 1783, imgY: 185, portionW: 24, portionH: 23, adjX: -1 / 2 * ((24 * 1.5)/10) * this.sizeRadius, adjY: -1 / 2 * ((23 * 1.5)/10) * this.sizeRadius, width: ((24 * 1.5)/10) * this.sizeRadius, height: ((23 * 1.5)/10) * this.sizeRadius}]);
            if (new Date().getTime() - this.burningTime2 >= 99)
            {
                this.burningTime2 = new Date().getTime();
                this.health -= Math.max(0, 0.12 - (this.heatResistance / 10));
            }
        }

        //Shock Effect
        if (shockResistance == false && new Date().getTime() - this.shockedTime <= 3000)
        {
            this.flashAnimate(90, false, 0.90, [{image: mofu, imgX: 415, imgY: 4, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * this.sizeRadius, adjY: -1 / 2 * ((28 * 1.5)/10) * this.sizeRadius, width: ((28 * 1.5)/10) * this.sizeRadius, height: ((28 * 1.5)/10) * this.sizeRadius}, {image: mofu, imgX: 455, imgY: 3, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * this.sizeRadius, adjY: -1 / 2 * ((28 * 1.5)/10) * this.sizeRadius, width: ((28 * 1.5)/10) * this.sizeRadius, height: ((28 * 1.5)/10) * this.sizeRadius}, {image: mofu, imgX: 497, imgY: 4, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * this.sizeRadius, adjY: -1 / 2 * ((28 * 1.5)/10) * this.sizeRadius, width: ((28 * 1.5)/10) * this.sizeRadius, height: ((28 * 1.5)/10) * this.sizeRadius}]);
            if (new Date().getTime() - this.shockedTime2 >= 250)
            {
                this.shockedTime2 = new Date().getTime();
                this.health -= 1;
            }
        }

        //Frozen Effect
        if (new Date().getTime() - this.frozenTime > 4500)
        {
            if (this.hasBeenFrozen)
            {
                this.speed = this.freezeKeepSpeed;
            }
            this.freezeKeepSpeed = this.speed;
            this.hasBeenFrozen = false;
        }
        if (frozenResistance == false && new Date().getTime() - this.frozenTime <= 4500)
        {
            this.burningTime = 0;
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.globalAlpha = 0.9;
            XXX.drawImage(polypol, 1691, 240, 28, 24, - 1/2 * (28 * 1.2) / 10 * this.sizeRadius, - 1/2 * (24 * 1.2) / 10 * this.sizeRadius, (28 * 1.2) / 10 * this.sizeRadius, (24 * 1.2) / 10 * this.sizeRadius);
            XXX.restore();

            this.speed = this.freezeKeepSpeed / 4.5;
            this.hasBeenFrozen = true;
        }

        //Charmed/Marked Effect
        if (charmResistance == false && this.team != "neutral" && new Date().getTime() < this.charmedTime)
        {
            if (this.marked)
            {
                this.spin += 1/17 * Math.PI;
                this.flashAnimate(90, this.spin, 0.37, [{image: zapa, imgX: 308, imgY: 42, portionW: 18, portionH: 31, adjX: -1 / 2 * ((18 * 1.7)/10) * this.sizeRadius, adjY: -1 / 2 * ((31 * 1.7)/10) * this.sizeRadius, width: ((18 * 1.7)/10) * this.sizeRadius, height: ((31 * 1.7)/10) * this.sizeRadius}]);
            }
            else
            {
                this.spin += 1/30;
                this.flashAnimate(90, this.spin, 0.86, [{image: polpol, imgX: 120, imgY: 375, portionW: 23, portionH: 23, adjX: -1 / 2 * ((23 * 1.5)/10) * this.sizeRadius, adjY: -1 / 2 * ((23 * 1.5)/10) * this.sizeRadius, width: ((23 * 1.5)/10) * this.sizeRadius, height: ((23 * 1.5)/10) * this.sizeRadius}]);
            }
            this.team = this.charmedTeam;
        }
        else
        {
            this.team = this.baseTeam;
            this.marked = false;
        }

        //Acid Effect
        if (acidResistance == false)
        {
            if (this.acidTime > new Date().getTime())
            {
                if (this.acidV == true)
                {
                    this.health -= Math.max(0, 0.05 - (this.acidResistance / 1000));
                }
                else if (this.acidIV == true)
                {
                    this.health -= Math.max(0, 0.04 - (this.acidResistance / 1000));
                }
                else if (this.acidIII == true)
                {
                    this.health -= Math.max(0, 0.03 - (this.acidResistance / 1000));
                }
                else if (this.acidII == true)
                {
                    this.health -= Math.max(0, 0.02 - (this.acidResistance / 1000));
                }
                else if (this.acidI == true)
                {
                    this.health -= Math.max(0, 0.01 - (this.acidResistance / 1000));
                }
                else if (this.halfAcid == true)
                {
                    this.health -= Math.max(0, 0.005 - (this.acidResistance / 1000));
                }
                else if (this.quarterAcid == true)
                {
                    this.health -= Math.max(0, 0.0025 - (this.acidResistance / 1000));
                }
            }
            else
            {
                this.acidV = false;
                this.acidIV = false;
                this.acidIII = false;
                this.acidII = false;
                this.acidI = false;
                this.halfAcid = false;
                this.quarterAcid = false;
            }
        }

        //Blinded Effect
        if (blindedResistance == false && new Date().getTime() - this.blindedTime <= 5000 + (1000 * (player.getConcentration() / 5)))
        {
            this.blinded = true;
        }
        else
        {
            this.blinded = false;
        }
        //Stun Effect
        if (stunResistance == false && new Date().getTime() - this.stunTime <= this.stunTimer * 1000)
        {
            if (this.stunV)
            {
                this.stunned = 0;
            }
            else if (this.stunIV)
            {
                this.stunned = 0.1;
            }
            else if (this.stunIII)
            {
                this.stunned = 0.2;
            }
            else if (this.stunII)
            {
                this.stunned = 0.3;
            }
            else if (this.stunI)
            {
                this.stunned = 0.5;
            }
        }
        else if (stunResistance == false)
        {
            this.stunned = 1;
            this.stunV = false;
            this.stunIV = false;
            this.stunIII = false;
            this.stunII = false;
            this.stunI = false;
        }
        //Web Effect
        if (webResistance == false && this.webbedNum > 0)
        {
            if (new Date().getTime() < this.webbedTime + 1000)
            {
                this.webbedTime = new Date().getTime();
                this.webbedNum -= 1;
            }
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            //XXX.globalAlpha = 0.9;
            XXX.drawImage(nognog, 739, 351, 70, 62, - 1/2 * ((70 * 1.2) / 23 * this.sizeRadius), - 1/2 * ((62 * 1.2) / 23 * this.sizeRadius), (70 * 1.2) / 23 * this.sizeRadius, (62 * 1.2) / 23 * this.sizeRadius);
            XXX.restore();
            this.stunned = 0.09;
        }
        else if (webResistance == false && !this.stunV && !this.stunIV && !this.stunIII && !this.stunII && !this.stunI)
        {
            this.stunned = 1;
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
                    if (type == "Soldier" && nearbyUnitsList[i].ultra.faction == this.ultra.faction || type == "Shehid")
                    {
                        nearbyUnitsList[i].disturbed = true;
                    }
                }
            }
        }
    };

    this.callForHelp = function(range, type)
    {
        var nearbyUnitsList = [];
        this.findNearbyUnitTypeGroup(range, type, nearbyUnitsList);

        for (var i = 0; i < nearbyUnitsList.length; i++)
        {
            nearbyUnitsList[i].offended = true;
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
        var creaturesO = false;
        var sceneryO = false;
        var barrierO = false;

        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
        {
            if (ArtificialIntelligenceAccess[i] !== this && !ArtificialIntelligenceAccess[i].flying)
            {
                var focusUnit = ArtificialIntelligenceAccess[i]; //This is the current unit focused on other than this unit.
                var x1 = focusUnit.X; //the focus unit's X position.
                var y1 = focusUnit.Y; //the focus unit's Y position.
                var d = Math.sqrt( (x-x1)*(x-x1) + (y-y1)*(y-y1) ); //This is the distance between this unit and the focus unit.
                if (d < this.sizeRadius + focusUnit.sizeRadius && focusUnit.alive == true) // if the total distance between this unit and the focus unit is less than the size of the two radiuses then it returns true to the movement function which calls it.
                {
                    if (ArtificialIntelligenceAccess[i].mobile)
                    {
                        this.creatureBiz = true; // this lets the creatures sort out there own stuff by suspending the normal processes (evadeObstruction) that would happen upon getting stuck.
                    }

                    if (this.target != ArtificialIntelligenceAccess[i] || !this.charger) //this is so that a chargers attack is not hindered upon contact with its own target.
                    {
                        if (!this.traverse)
                        {
                            creaturesO = true; //d == this.sizeRadius + focusUnit.sizeRadius :: this is the point at which the two units would be exactly touching eachother with no overlap.
                        }
                    }
                }
            }
        }
        for (var i = 0; i < scenicList.length; i++)
        {
            if (scenicList[i].solid == true || scenicList[i].type == "campFire" && scenicList[i].lit == true && this.X > scenicList[i].X - scenicList[i].radius && this.X < scenicList[i].X + scenicList[i].radius && this.Y > scenicList[i].Y - scenicList[i].radius && this.Y < scenicList[i].Y + scenicList[i].radius)
            {
                var focusObject = scenicList[i]; //This is the current unit focused on other than this unit.
                var x1 = focusObject.X; //the focus unit's X position.
                var y1 = focusObject.Y; //the focus unit's Y position.
                var d = Math.sqrt( (x-x1)*(x-x1) + (y-y1)*(y-y1) ); //This is the distance between this unit and the focus unit.
                if (!this.haste || focusObject.unpassable)
                {
                    if (d < this.sizeRadius + focusObject.radius) // if the total distance between this unit and the focus unit is less than the size of the two radiuses then it returns true to the movement function which calls it.
                    {
                        this.creatureBiz = false; //if the creatures are stuck on an obstacle it is more important to get unstuck than to attempt to encircle the player.
                        sceneryO = true;
                    }
                }
            }
        }
        for (var i = 0; i < barrierList.length; i++)
        {
            var focusObject = barrierList[i]; //This is the current unit focused on other than this unit.
            var x1 = focusObject.X; //the focus unit's X position.
            var y1 = focusObject.Y; //the focus unit's Y position.
            if (x - this.sizeRadius < x1 + focusObject.width && x + this.sizeRadius > x1 && y - this.sizeRadius < y1 + focusObject.height && y + this.sizeRadius > y1)
            {
                barrierO = true;
            }
        }

        if (creaturesO || sceneryO || barrierO)
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    this.drawHumanArms = function()
    {
        var playerFriendly = false
        if (this.team == "player" && this.target == player) //this is so that ranged weapon using humans will not attack the player if they are on the players team.
        {
            playerFriendly = true;
        }

        if (this.ranged == true && !playerFriendly)
        {
            var dtp;
            var dtu;
            if (this.target == player)
            {
                dtp = this.DTP();
            }
            else if (this.target != "none")
            {
                dtu = this.DTU(this.target);
            }

            if (this.disturbed == true && dtp <= this.rangeOfSight && this.playerSeen == true || dtu <= this.baseSight && this.target != player) //otherwise if it is attacking then initiate attacking animation, and if neither...
            {
                this.attacking = true;
                if(new Date().getTime() - this.timeBetweenAttacks > (this.ultra.ranged[8] * 1000))
                {
                    if (this.weapon == "longbow")
                    {
                        this.costumeEngine(8, 0.20, false);
                    }
                    else if (this.weapon == "crossbow")
                    {
                        this.costumeEngine(28, 0.10, false);
                    }
                }
                //this is the actual launch
                if (this.finalAttackCostume == true)
                {
                    this.finalAttackCostume = false;
                    this.timeBetweenAttacks = new Date().getTime();
                    if (this.target == player)
                    {
                        unitProjectiles.push(new Projectile(this.ultra.ranged[1], this.X, this.Y, this.rotation -  1 / 2 * Math.PI, this.ultra.ranged[2], this.ultra.ranged[3], this.ultra.ranged[4], unitProjectiles, this.ultra.ranged[5], this.ultra.ranged[6], this.ultra.ranged[7], true, this.team));
                    }
                    else if (this.target != "none")
                    {
                        playerProjectiles.push(new Projectile(this.ultra.ranged[1], this.X, this.Y, this.rotation -  1 / 2 * Math.PI, this.ultra.ranged[2], this.ultra.ranged[3], this.ultra.ranged[4], playerProjectiles, this.ultra.ranged[5], this.ultra.ranged[6], this.ultra.ranged[7], true, this.team));
                    }
                }
            }
        }

        XXX.save();
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
        else if (this.weapon == "crossbow")
        {
            if (theCostume <= 0)
            {
                this.drawUnit(verse, 3911, 695, 50, 40, -27, -43, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 1)
            {
                this.drawUnit(verse, 2788, 695, 50, 40, -25, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 2)
            {
                this.drawUnit(verse, 2843, 695, 50, 40, -26, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 3)
            {
                this.drawUnit(verse, 2899, 695, 50, 40, -28, -39.5, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 4)
            {
                this.drawUnit(verse, 2950, 695, 50, 40, -26, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 5)
            {
                this.drawUnit(verse, 2994, 695, 50, 40, -28, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 6)
            {
                this.drawUnit(verse, 3044, 695, 50, 40, -25.5, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 7)
            {
                this.drawUnit(verse, 3089, 695, 50, 40, -27, -39.5, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 8)
            {
                this.drawUnit(verse, 3135, 695, 50, 40, -26, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 9)
            {
                this.drawUnit(verse, 3183, 695, 50, 40, -27.85, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 10)
            {
                this.drawUnit(verse, 3227, 695, 50, 40, -26.85, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 11)
            {
                this.drawUnit(verse, 3270, 695, 50, 40, -28, -39.5, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 12)
            {
                this.drawUnit(verse, 3313, 695, 50, 40, -26.35, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 13)
            {
                this.drawUnit(verse, 3358, 695, 50, 40, -26.85, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 14)
            {
                this.drawUnit(verse, 3403, 695, 50, 40, -26.85, -42, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 15)
            {
                this.drawUnit(verse, 3452, 695, 50, 40, -25.85, -41, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 16)
            {
                this.drawUnit(verse, 3498, 695, 50, 40, -25, -40, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 17)
            {
                this.drawUnit(verse, 3552, 695, 50, 40, -23.6, -39, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 18)
            {
                this.drawUnit(verse, 3608, 698, 50, 40, -22.5, -36, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 19)
            {
                this.drawUnit(verse, 3665, 698, 50, 40, -23.5, -37.25, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 20)
            {
                this.drawUnit(verse, 3717, 698, 50, 40, -26, -38.25, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 21)
            {
                this.drawUnit(verse, 3770, 698, 50, 40, -26, -38.25, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 22)
            {
                this.drawUnit(verse, 3817, 698, 50, 40, -27, -38.25, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 23)
            {
                this.drawUnit(verse, 3865, 698, 50, 40, -27, -38.25, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 26)
            {
                this.drawUnit(verse, 3865, 698, 50, 40, -27, -38.25, 52.5, 42, 1 / 2 * Math.PI);
            }
            else if (theCostume >= 27)
            {
                this.drawUnit(verse, 3911, 695, 50, 40, -27, -43, 52.5, 42, 1 / 2 * Math.PI);
            }
        }
        else if (this.weapon == "freydicSword")
        {
            this.damageFrame = "automatic";
            if (theCostume <= 0)
            {
                this.drawUnit(oldverse, 2210, 1, 73, 63, -13, -60, 91.875, 78.75, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 1)
            {
                this.drawUnit(oldverse, 2290, 1, 73, 63, -17.5, -60, 91.875, 78.75, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 2)
            {
                this.drawUnit(oldverse, 2367, 1, 73, 63, -25, -61, 91.875, 78.75, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 3)
            {
                this.drawUnit(oldverse, 2438, 1, 73, 63, -31, -61.5, 91.875, 78.75, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 4)
            {
                this.drawUnit(oldverse, 2513, 1, 73, 63, -36, -64, 91.875, 78.75, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 5)
            {
                this.drawUnit(oldverse, 2577, 1, 73, 63, -44, -69, 91.875, 78.75, 1 / 2 * Math.PI);
            }
            else if (theCostume >= 6)
            {
                this.drawUnit(oldverse, 2635, 1, 73, 63, -49.25, -69, 91.875, 78.75, 1 / 2 * Math.PI);
            }
        }
        else if (this.weapon == "freydicGreatSword")
        {
            this.damageFrame = "automatic";
            if (theCostume <= 0)
            {
                this.drawUnit(oldverse, 2205, 203, 89, 88, -7, -80, 106.8, 105.6, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 1)
            {
                this.drawUnit(oldverse, 2305, 203, 89, 88, -6, -83.5, 106.8, 105.6, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 2)
            {
                this.drawUnit(oldverse, 2405, 203, 89, 88, -8, -85.5, 106.8, 105.6, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 3)
            {
                this.drawUnit(oldverse, 2505, 203, 89, 88, -13.5, -87, 106.8, 105.6, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 4)
            {
                this.drawUnit(oldverse, 2605, 203, 89, 88, -21, -90, 106.8, 105.6, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 5)
            {
                this.drawUnit(oldverse, 2678, 203, 89, 88, -49, -93, 106.8, 105.6, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 6)
            {
                this.drawUnit(oldverse, 2750, 203, 89, 88, -55, -92.5, 106.8, 105.6, 1 / 2 * Math.PI);
            }
            else if (theCostume >= 7)
            {
                this.drawUnit(oldverse, 2830, 203, 89, 88, -65, -90, 106.8, 105.6, 1 / 2 * Math.PI);
            }
        }
        else if (this.weapon == "timberAxe")
        {
            this.damageFrame = "automatic";
            if (theCostume <= 0)
            {
                this.drawUnit(verse, 334, 332, 54, 49, -60.25, -42, 54 * 1.4, 49 * 1.4, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 1)
            {
                this.drawUnit(verse, 390, 328, 54, 49, -56.25, -47, 54 * 1.4, 49 * 1.4, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 2)
            {
                this.drawUnit(verse, 453, 330, 54, 49, -44.25, -60, 54 * 1.4, 49 * 1.4, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 3)
            {
                this.drawUnit(verse, 516, 330, 54, 49, -35, -60, 54 * 1.4, 49 * 1.4, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 4)
            {
                this.drawUnit(verse, 576, 332, 54, 49, -30, -56, 54 * 1.4, 49 * 1.4, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 5)
            {
                this.drawUnit(verse, 634, 332, 54, 49, -25, -49, 54 * 1.4, 49 * 1.4, 1 / 2 * Math.PI);
            }
            else if (theCostume >= 6)
            {
                this.drawUnit(verse, 680, 332, 54, 49, -16, -43, 54 * 1.4, 49 * 1.4, 1 / 2 * Math.PI);
            }
        }
        else if (this.weapon == "longSpikedMorningStar")
        {
            this.damageFrame = "automatic";
            if (theCostume <= 0)
            {
                this.drawUnit(poly, 207, 143, 55, 58, -34, -39, 55 * 1.15, 58 * 1.15, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 1)
            {
                this.drawUnit(poly, 260, 145, 55, 58, -30, -42, 55 * 1.15, 58 * 1.15, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 2)
            {
                this.drawUnit(poly, 307, 147, 55, 58, -31, -40, 55 * 1.15, 58 * 1.15, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 3)
            {
                this.drawUnit(poly, 356, 147, 55, 58, -33, -39, 55 * 1.15, 58 * 1.15, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 4)
            {
                this.drawUnit(poly, 400, 142, 55, 58, -30, -47, 55 * 1.15, 58 * 1.15, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 5)
            {
                this.drawUnit(poly, 452, 141, 55, 58, -31, -51, 55 * 1.15, 58 * 1.15, 1 / 2 * Math.PI);
            }
            else if (theCostume >= 6)
            {
                this.drawUnit(poly, 452, 141, 55, 58, -31, -51, 55 * 1.15, 58 * 1.15, 1 / 2 * Math.PI);
            }
        }
        else if (this.weapon == "kellishSword")
        {
            this.damageFrame = "automatic";
            if (theCostume <= 0)
            {
                this.drawUnit(polpol, 160, 14, 77, 75, -1/2 * 77 * 1.3 + 4, -1/2 * 75 * 1.3 - 17, 77 * 1.3, 75 * 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 1)
            {
                this.drawUnit(polpol, 161, 101, 77, 75, -1/2 * 77 * 1.3 + 1, -1/2 * 75 * 1.3 - 13, 77 * 1.3, 75 * 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 2)
            {
                this.drawUnit(polpol, 160, 14, 77, 75, -1/2 * 77 * 1.3 + 4, -1/2 * 75 * 1.3 - 17, 77 * 1.3, 75 * 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 3)
            {
                this.drawUnit(polpol, 166, 190, 77, 75, -1/2 * 77 * 1.3 - 0.2, -1/2 * 75 * 1.3 - 22, 77 * 1.3, 75 * 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 4)
            {
                this.drawUnit(polpol, 248, 9, 77, 75, -1/2 * 77 * 1.3 -0.5, -1/2 * 75 * 1.3 - 23, 77 * 1.3, 75 * 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 5)
            {
                this.drawUnit(polpol, 258, 99, 77, 75, -1/2 * 77 * 1.3 + 0.5, -1/2 * 75 * 1.3 - 15, 77 * 1.3, 75 * 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume >= 6)
            {
                this.drawUnit(polpol, 258, 205, 77, 75, -1/2 * 77 * 1.3 - 3, -1/2 * 75 * 1.3 - 3.5, 77 * 1.3, 75 * 1.3, 1 / 2 * Math.PI);
            }
        }
        else if (this.weapon == "rasper")
        {
            this.damageFrame = "automatic";
            if (theCostume <= 0)
            {
                this.drawUnit(freeverse, 683, 43, 55, 51, -47, -49, 55 * 1.3, 51 * 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 1)
            {
                this.drawUnit(freeverse, 755, 37, 55, 51, -39, -55, 55 * 1.3, 51 * 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 2)
            {
                this.drawUnit(freeverse, 834, 38, 55, 51, -36, -54, 55 * 1.3, 51 * 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 3)
            {
                this.drawUnit(freeverse, 903, 35, 55, 51, -30, -54.5, 55 * 1.3, 51 * 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume >= 4)
            {
                this.drawUnit(freeverse, 928, 346, 55, 51, -27, -54, 55 * 1.3, 51 * 1.3, 1 / 2 * Math.PI);
            }
        }
        else if (this.weapon == "warHammer")
        {
            this.damageFrame = "automatic";
            if (theCostume <= 0)
            {
                this.drawUnit(polypol, 32, 605, 93, 87, -21, -43, 93 / 1.3, 87 / 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 1)
            {
                this.drawUnit(polypol, 169, 605, 93, 87, -21, -43, 93 / 1.3, 87 / 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 2)
            {
                this.drawUnit(polypol, 304, 605, 93, 87, -22, -45, 93 / 1.3, 87 / 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 3)
            {
                this.drawUnit(polypol, 443, 605, 93, 87, -29, -46, 93 / 1.3, 87 / 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 4)
            {
                this.drawUnit(polypol, 589, 599, 93, 87, -32, -50, 93 / 1.3, 87 / 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 5)
            {
                this.drawUnit(polypol, 720, 590, 93, 87, -36, -53, 93 / 1.3, 87 / 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 6)
            {
                this.drawUnit(polypol, 836, 594, 93, 87, -46, -50, 93 / 1.3, 87 / 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 7)
            {
                this.drawUnit(polypol, 958, 593, 93, 87, -49, -47.5, 93 / 1.3, 87 / 1.3, 1 / 2 * Math.PI);
            }
            else if (theCostume >= 8)
            {
                this.drawUnit(polypol, 1083, 591, 93, 87, -51.5, -45, 93 / 1.3, 87 / 1.3, 1 / 2 * Math.PI);
            }
        }
        else if (this.weapon == "kellishClaymore")
        {
            this.damageFrame = "automatic";
            if (theCostume <= 0)
            {
                this.drawUnit(polypol, 491, 830, 135, 135, -50, -90, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 1)
            {
                this.drawUnit(polypol, 654, 827, 135, 135, -50, -93, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 2)
            {
                this.drawUnit(polypol, 870, 837, 135, 135, -46, -85, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 3)
            {
                this.drawUnit(polypol, 1100, 838, 135, 135, -44, -80, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 4)
            {
                this.drawUnit(polypol, 1386, 832, 135, 135, -14, -81, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 5)
            {
                this.drawUnit(polypol, 1652, 828, 135, 135, -10, -79, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 6)
            {
                this.drawUnit(polypol, 513, 993, 135, 135, -15, -82, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 7)
            {
                this.drawUnit(polypol, 673, 990, 135, 135, -21, -83, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 8)
            {
                this.drawUnit(polypol, 892, 981, 135, 135, -17, -93, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 9)
            {
                this.drawUnit(polypol, 1106, 971, 135, 135, -18, -113, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 10)
            {
                this.drawUnit(polypol, 1333, 963, 135, 135, -59, -124, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 11)
            {
                this.drawUnit(polypol, 1611, 961, 135, 135, -74, -124, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 12)
            {
                this.drawUnit(polypol, 503, 1162, 135, 135, -75, -117, 135, 135, 1 / 2 * Math.PI);
            }
            else if (theCostume >= 13)
            {
                this.drawUnit(polypol, 680, 1158, 135, 135, -88, -112, 135, 135, 1 / 2 * Math.PI);
            }
        }
        else if (this.weapon == "flail")
        {
            this.damageFrame = "manual";
            if (theCostume <= 0) //11 frames
            {
                this.drawUnit(oldverse, 2194, 128, 66, 72, -42, -102, 99, 108, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 1)
            {
                this.drawUnit(oldverse, 2253, 128, 66, 72, -47.5, -103, 99, 108, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 2)
            {
                this.drawUnit(oldverse, 2313, 128, 66, 72, -41.75, -103, 99, 108, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 3)
            {
                this.doAttackThisFrame = true;
                this.drawUnit(oldverse, 2373, 128, 66, 72, -46.5, -102, 99, 108, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 4)
            {
                //this is the frame that should do the damage.
                if (this.doAttackThisFrame)
                {
                    this.doAttackThisFrame = false;
                    this.finalAttackCostume = true;
                }
                this.drawUnit(oldverse, 2430, 128, 66, 72, -62, -104.5, 99, 108, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 5)
            {
                this.drawUnit(oldverse, 2489, 128, 66, 72, -57.5, -105, 99, 108, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 6)
            {
                this.drawUnit(oldverse, 2539, 128, 66, 72, -59.25, -103, 99, 108, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 7)
            {
                this.drawUnit(oldverse, 2588, 128, 66, 72, -61.5, -104.5, 99, 108, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 8)
            {
                this.drawUnit(oldverse, 2639, 128, 66, 72, -58, -104, 99, 108, 1 / 2 * Math.PI);
            }
            else if (theCostume <= 9)
            {
                this.drawUnit(oldverse, 2689, 128, 66, 72, -62, -104, 99, 108, 1 / 2 * Math.PI);
            }
            else if (theCostume >= 10)
            {
                this.drawUnit(oldverse, 2744, 128, 66, 72, -51.5, -105, 99, 108, 1 / 2 * Math.PI);
            }
        }
        XXX.restore();
    };

    this.switchToRanged = function(weapon)
    {
        if (this.disturbed == true || this.DTU(this.target) <= this.baseSight)
        {
            if (this.target == player)
            {
                var dtp = this.DTP();
                var targRad = player.mySize;
            }
            else if (this.target != "none")
            {
                var dtp = this.DTU(this.target);
                var targRad = this.target.sizeRadius;
            }

            if (this.engagementRadius + (targRad - 10) < dtp)
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
                if (player.spell == "none" && this.killNotByPlayer == false)
                {
                    player.experience += Math.max(0, this.experience - this.lessEXP);
                }

                if (this.killNotByPlayer == false)
                {
                    if (this.revived != true)
                    {
                        for (var i = 0; i < this.drops.length; i++)
                        {
                            worldItems.push([this.drops[i][0], this.drops[i][1]]);
                        }
                    }
                    else
                    {
                        worldItems.push([new Item("nechromanticDust", this.X, this.Y), 1 + Math.floor(this.healthMAX / 35)]);
                    }

                    if (this.beastEntry != "none")
                    {
                        if (player.getSurvivalism() >= this.beastEntry.intReq)
                        {
                            var addEntry = true;
                            for (var i = 0; i < beastJournal.length; i++)
                            {
                                if (this.beastEntry.name == beastJournal[i].name && this.beastEntry.alpha == beastJournal[i].alpha)
                                {
                                    addEntry = false;
                                    break;
                                }
                            }

                            if (addEntry)
                            {
                                beastJournal.push(this.beastEntry);
                            }
                        }
                    }
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
        if (this.health < this.healthMAX && (new Date().getTime() - this.healthShownTime) < 5000 || (new Date().getTime() - this.showHealthTime) < 3000)
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
        if (this.rotatable)
        {
            var quickestRotation = this.angleDelta(this.rotation, this.newRotation); //This is a number that represents the quickest rotation possible.
            if (this.suspendConflictingPointSystems && Math.abs(quickestRotation) < this.rotationSpeed)
            {
                this.suspendConflictingPointSystems = false;
            }

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
        if (this.kid)
        {
            XXX.scale(this.kidSize, this.kidSize);
        }
        XXX.rotate(this.rotation + this.extraRot + extraRot);
        XXX.beginPath();
        XXX.drawImage(img, cutX, cutY, width, length, positionX, positionY , skewW, skewL);
        XXX.restore();
    };

    this.drawHuman = function()
    {
        XXX.save();
        XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
        if (this.kid)
        {
            XXX.scale(this.kidSize, this.kidSize);
        }
        XXX.rotate(this.rotation);
        XXX.beginPath();
        if (this.ultra.race == "Freynor")
        {
            XXX.fillStyle = "navy";
        }
        else if (this.ultra.race == "Orgell")
        {
            XXX.fillStyle = "gold";
        }
        else if (this.ultra.race == "Vardan")
        {
            XXX.fillStyle = "#1c1c1c";
        }
        else if (this.ultra.race == "Thengar")
        {
            XXX.fillStyle = "#663300";
        }
        else if (this.ultra.race == "Nirwaden")
        {
            XXX.fillStyle = "#e68900";
        }
        else if (this.ultra.race == "Kel")
        {
            XXX.fillStyle = "green";
        }
        else if (this.ultra.race == "Aldrek")
        {
            XXX.fillStyle = "darkRed";
        }
        else if (this.ultra.race == "Cephrite")
        {
            XXX.fillStyle = "purple";
        }
        else if (this.ultra.race == "Outlander")
        {
            XXX.fillStyle = "white";
        }
        else
        {
            //Faelan fairy Princess is the default.
            XXX.fillStyle = "pink";
        }

        XXX.arc(0, 0, 10, 0, 2 * Math.PI);
        XXX.fill();
        XXX.strokeStyle = "black";
        XXX.lineWidth = 0.5;
        XXX.stroke();

        XXX.restore();
    };

    this.drawHumanOutfit = function(outfit, dead)
    {
        //Unit Worn Outfits
        if (dead != true)
        {
            XXX.save();
            if (outfit == "chainArmour")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation + 1/2 * Math.PI);
                XXX.drawImage(verse, 1915, 1, 31, 27, -(1 / 2 * 26) - 1.3, -(1 / 2 * 27) + 1.5, 27, 27);
            }
            else if (outfit == "jvostranPlateArmour")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 508, 659, 40, 39, -(1 / 2 * 40 * 0.8) + 2, -(1 / 2 * 39 * 0.8) + 0, 40 * 0.8, 39 * 0.8);
            }
            else if (outfit == "walrusLeatherArmour")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 804, 262, 35, 24, -(1 / 2 * 45.5) + 8, -(1 / 2 * 31.2) + 1.25, 42, 28.8);
            }
            else if (outfit == "winterWolfClothing")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation + 1/2 * Math.PI);
                XXX.drawImage(verse, 3185, 165, 33, 28, -(1 / 2 * 26.4) + 0, -(1 / 2 * 22.4) - 0.75, 29.7, 25.2);
            }
            else if (outfit == "hetmerArmour")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation);
                XXX.drawImage(polyPNG, 792, 308, 52, 48, -(1 / 2 * 62.4) + 0, -(1 / 2 * 57.6) - 2.5, 67.6, 62.4);
            }
            else if (outfit == "evrakLeatherArmour")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation);
                XXX.drawImage(mofu, 71, 2186, 53, 57, -(1 / 2 * 53 * 0.7) + 2, -(1 / 2 * 57 * 0.7) + 1, 53 * 0.7, 57 * 0.7);
            }
            else if (outfit == "frichFurClothing")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation + 1/2 * Math.PI);
                XXX.drawImage(verse, 2106, 5, 29, 24, -(1 / 2 * 29) + 1.75, -(1 / 2 * 24) - 0, 26, 26);
            }
            else if (outfit == "ardilFurClothing" || outfit == "ardilFurSkirt")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 4, 234, 41, 22, -(1 / 2 * 41 * 1.7) - 4, -(1 / 2 * 22 * 1.7) - 0.2, 41 * 1.7, 22 * 1.7);
            }
            else if (outfit == "naapridLeatherArmour")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation + 1/2 * Math.PI);
                XXX.drawImage(verse, 3062, 1, 35, 22, -(1 / 2 * 49) + 0.5, -(1 / 2 * 30.8) + 2.25, 49, 30.8);
            }
            else if (outfit == "balgurMercArmour")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation - 1/2 * Math.PI);
                XXX.drawImage(poly, 48, 106, 40, 32, -(1 / 2 * 40 * 1.2) - 3.65, -(1 / 2 * 32 * 1.2) -18.25, 40 * 1.38, 32 * 1.73);
            }
            else if (outfit == "balgurCaptainArmour")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation - 1/2 * Math.PI);
                XXX.drawImage(poly, 50, 140, 36, 36, -(1 / 2 * 36 * 1.2) + 5, -(1 / 2 * 36 * 1.2) -9.5, 36 * 0.9, 36 * 1.45);
            }
            else if (outfit == "blackBearLeatherArmour")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 622, 26, 23, 22, -(1 / 2 * 23 * 1.3) - 0, -(1 / 2 * 22 * 1.3) + 0, 23 * 1.3, 22 * 1.3);
            }
            else if (outfit == "skinAndBones")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation);
                //XXX.drawImage(polpol, 112, 139, 21, 26, -(1 / 2 * 21 * 1.6) - 2, -(1 / 2 * 26 * 1.6) + 2, 21 * 1.6, 26 * 1.6);
                XXX.drawImage(polpol, 112, 139, 21, 26, -(1 / 2 * 21 * 2) - 2, -(1 / 2 * 26 * 2) + 2, 21 * 2, 26 * 2);
            }
            else if (outfit == "blackBearFurClothing")
            {
                XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                if (this.kid)
                {
                    XXX.scale(this.kidSize, this.kidSize);
                }
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 622, 3, 23, 22, -(1 / 2 * 23 * 1.4) - 0, -(1 / 2 * 22 * 1.4) + 0, 23 * 1.4, 22 * 1.4);
            }
            XXX.restore();
        }
    };

    //This sets each unique unit's skills based on their type, for both normal and alpha, also it is where positioning for alphas or units who differ from the normal size will be.
    this.designUnits = function() //this includes all of the non-variable unit design as well as drops.
    {
        if (this.type == "Etyr")
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 1;
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
                this.beastEntry = {intReq: 3, name: "Etyr", health: "6 - 11", armour: "3", damage: "1 - 7", negate: "5", ability: "none", fireProof: 1, habitat: "Jungle", sight: 600, alpha: "Alpha", magicProof: 0, size: 30, speed: 2.75, rotation: 0.025, rate: 0.55, experience: 40, description: ["Etyr's are scaley reptilian creatures that have a behavior similar to that of a wolf. They hunt in packs, it is very", "rare to find one alone, and if you do the rest of its pack is probably about to ambush you. They", "usually lurk about the forest floor eating whatever small critters they can get their jaws around."], image: ["theCrack", 56, 18, 53, 41, 0, 0, 53 * 1.5 / 3, 41 * 1.5 / 3]};

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
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 3) + 3;
                this.health = this.healthMAX;
                this.armour = 1;
                this.speed = 2;
                this.rangeOfSight = 450; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 29;
                this.sizeRadius = 20;
                this.negateArmour = 3;
                this.attackWait = 0.57;
                this.beastEntry = {intReq: 1, name: "Etyr", health: "3 - 5", armour: "1", damage: "1 - 4", negate: "3", ability: "none", fireProof: 1, habitat: "Jungle", sight: 450, alpha: "Normal", magicProof: 0, size: 20, speed: 2, rotation: 0.1, rate: 0.57, experience: 22, description: ["Etyr's are scaley reptilian creatures that have a behavior similar to that of a wolf. They hunt in packs, it is very", "rare to find one alone, and if you do the rest of its pack is probably about to ambush you. They", "usually lurk about the forest floor eating whatever small critters they can get their jaws around."], image: ["theCrack", 56, 18, 53, 0, 0, 20, 53 / 3, 41 / 3]};

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
            this.resistances = ["frozen", "shock"];
            this.team = "walarusia";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 3;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 40) + 100;
                this.health = this.healthMAX;
                this.armour = 2;
                this.speed = 1.1;
                this.rangeOfSight = 330; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.035;
                this.engagementRadius = 65; //was 55
                this.sizeRadius = 45;
                this.negateArmour = 17;
                this.attackWait = 1.75;
                this.beastEntry = {intReq: 13, name: "Walrus", health: "100 - 139", armour: "2", damage: "32 - 77", negate: "17", ability: "Cold Resistant", fireProof: 3, habitat: "Ice Flats", sight: 330, alpha: "Elder", magicProof: 0, size: 45, speed: 1.1, rotation: 0.035, rate: 1.75, experience: 104, description: ["It is said that elder walruses are just walruses that have lived for hundreds of years. They tend to be fairly solitary unlike", "the younger variety, except of course when they have to mate, then the male usually protects the female while it is pregnant."], image: ["polyPNG", 871, 695, 77, 63, 0, 0, 146 * 1.35 / 3, 126 * 1.35 / 3]};

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
                this.heatResistance = 2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 10) + 18;
                this.health = this.healthMAX;
                this.armour = 1;
                this.speed = 0.85;
                this.rangeOfSight = 250; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.025; // 0.01 is a standard turn speed.
                this.engagementRadius = 59; //was 49
                this.sizeRadius = 40;
                this.negateArmour = 6;
                this.attackWait = 3.25;
                this.beastEntry = {intReq: 4, name: "Walrus", health: "18 - 27", armour: "1", damage: "2 - 14", negate: "6", ability: "Cold Resistant", fireProof: 2, habitat: "Ice Flats", sight: 250, alpha: "Normal", magicProof: 0, size: 40, speed: 0.85, rotation: 0.025, rate: 3.25, experience: 28, description: ["Walruses are large tusked animals with thick skin and a large blubber layer of fat to keep them warm in the harsh cold climate that they", "live in. They tend to group together so as to keep predators away by numbers, but it is not uncommon for one to be found alone."], image: ["polyPNG", 871, 695, 77, 63, 0, 0, 146 / 3, 126 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;

            }
        }
        else if (this.type == "Shehid")
        {
            this.damageFrame = "automatic";
            this.awake = Math.round(Math.random());
            this.formChange = false; //this is for transforming from awake to asleep or sleep to awake... it signals that a change has been made so that an animation can play.
            this.resistances = ["acid", "stun", "burning", "shock"];
            this.team = "shehidia";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 5;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 17) + 26;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 1.65;
                this.rangeOfSight = 285; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.085;
                this.engagementRadius = 37;
                this.sizeRadius = 25;
                this.negateArmour = 10;
                this.attackWait = 2;
                this.effect = "stunII";
                this.beastEntry = {intReq: 20, name: "Shehid", health: "26 - 42", armour: "0 - 56", damage: "6 - 20", negate: "10", ability: "StunII", fireProof: "0 - 56", habitat: "Northern / Temperate Forests", sight: "65 - 285", alpha: "Alpha", magicProof: 5, size: 25, speed: 1.65, rotation: 0.085, rate: 2, experience: 77, description: ["Shehids are a form of living ooze creature that has a biologically formed shell and insectoid legs. The shehid's ooze is highly toxic to the", "extent of paralasis and it is used to melt and absorb its prey. Shehids normally rest in their shell which is colored to look like a mossy", "rock so that they can ooze out and devour unsuspecting creatures that happen to wander by."], image: ["polypol", 1170, 11, 43, 40, 0, 0, 43 * 2 / 3, 40 * 2 / 3]};

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 22;
                this.xAdjustment = 20; // was 0
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 2;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 9) + 12;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 1.35;
                this.rangeOfSight = 185; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.085; // 0.01 is a standard turn speed.
                this.engagementRadius = 29; //was 49
                this.sizeRadius = 14;
                this.negateArmour = 10;
                this.attackWait = 1.25;
                this.effect = "stunI";
                this.beastEntry = {intReq: 10, name: "Shehid", health: "12 - 20", armour: "0 - 30", damage: "3 - 10", negate: "10", ability: "StunI", fireProof: "1 - 30", habitat: "Northern / Temperate Forests", sight: "65 - 185", alpha: "Normal", magicProof: 2, size: 14, speed: 1.35, rotation: 0.085, rate: 1.25, experience: 38, description: ["Shehids are a form of living ooze creature that has a biologically formed shell and insectoid legs. The shehid's ooze is highly toxic to the", "extent of paralysis and it is used to melt and absorb its prey. Shehids normally rest in their shell which is colored to look like a mossy", "rock so that they can ooze out and devour unsuspecting creatures that happen to wander by."], image: ["polypol", 1170, 11, 43, 40, 0, 0, 43 / 3, 40 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;

            }
        }
        else if (this.type == "Thueg")
        {
            this.damageFrame = "automatic";
            this.awake = Math.round(Math.random());
            this.formChange = false; //this is for transforming from awake to asleep or sleep to awake... it signals that a change has been made so that an animation can play.
            this.resistances = ["burning", "blinded"]; //this is only a resistance while in sleeping form.
            this.team = "wild";
            this.baseTeam = this.team;
            this.attackListo = "start"; //this activates the feature that randomizes the attack of the unit (for this unit)

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 9) + 22;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4.6;
                this.rangeOfSight = 250; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.085;
                this.engagementRadius = 50;
                this.sizeRadius = 26;
                this.negateArmour = 5;
                this.attackWait = 1.80;
                this.effect = "none";
                this.beastEntry = {intReq: 22, name: "Thueg", health: "22 - 30", armour: "0 - 25", damage: "8 - 18", negate: "5", ability: "none", fireProof: "0 - 30", habitat: "Northern Plains / Mud Plains", sight: "250 - 1000", alpha: "Alpha", magicProof: 0, size: 26, speed: 4.6, rotation: 0.05, rate: 1.8, experience: 92, description: ["Thueg lie around all day sleeping in the shelter of their protective shell. Other plains creatures sometimes seek shade by them and meet their untimely demise.", "Thueg may rest a lot, but they are not lazy beasts. They can run quickly and wil persue their prey for long distances to catch it. Thueg are blind and use echolocation and smell to hunt."], image: ["nognog", 283, 47, 47, 37, 0, 0, 47 * 3 / 3, 37 * 3 / 3]};

                //alpha has a larger size body and skills.
                this.alphaSize = 1.4; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0; // was 0
            }
            else if (this.alpha == "baby")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 3;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.5;
                this.rangeOfSight = 250; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 30;
                this.sizeRadius = 12;
                this.negateArmour = 0.5;
                this.attackWait = 1.80;
                this.effect = "none";
                this.beastEntry = {intReq: 10, name: "Thueg", health: "3", armour: "0 - 5", damage: "1.5 - 2.5", negate: "0.5", ability: "none", fireProof: "0 - 10", habitat: "Northern Plains / Mud Plains", sight: "100 - 360", alpha: "Baby", magicProof: 0, size: 12, speed: 3.5, rotation: 0.05, rate: 1.8, experience: 2, description: ["While still being completely ravenous and vile, baby thueg are notably less so than the older of their species. Thueg are blind and use echolocation and smell to hunt."], image: ["nognog", 283, 47, 47, 37, 0, 0, 47 * 1 / 3, 37 * 1 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 0.65;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;

            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 5) + 7;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4.3;
                this.rangeOfSight = 250; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 41; //was 49
                this.sizeRadius = 18;
                this.negateArmour = 1.5;
                this.attackWait = 1.80;
                this.effect = "none";
                this.beastEntry = {intReq: 16, name: "Thueg", health: "7 - 11", armour: "0 - 15", damage: "4 - 10", negate: "1.5", ability: "none", fireProof: "0 - 20", habitat: "Northern Plains / Mud Plains", sight: "250 - 1000", alpha: "Normal", magicProof: 0, size: 18, speed: 4.3, rotation: 0.05, rate: 1.8, experience: 23, description: ["Thueg lie around all day sleeping in the shelter of their protective shell. Other plains creatures sometimes seek shade by them and meet their untimely demise.", "Thueg may rest a lot, but they are not lazy beasts. They can run quickly and wil persue their prey for long distances to catch it. Thueg are blind and use echolocation and smell to hunt."], image: ["nognog", 283, 47, 47, 37, 0, 0, 47 * 2 / 3, 37 * 2 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;

            }
        }
        else if (this.type == "Grush")
        {
            this.damageFrame = "automatic";
            this.awake = Math.round(Math.random());
            this.formChange = false; //this is for transforming from awake to asleep or sleep to awake... it signals that a change has been made so that an animation can play.
            this.resistances = ["shock"];
            this.team = "wild";
            this.baseTeam = this.team;

            if (this.alpha == "giant")
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 40) + 204;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.2;
                this.rangeOfSight = 285; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.09;
                this.engagementRadius = 84;
                this.sizeRadius = 25;
                this.negateArmour = 11;
                this.attackWait = 0.6;
                this.effect = "none";
                this.beastEntry = {intReq: 30, name: "Grush", health: "204 - 243", armour: "0 - 75", damage: "10 - 18", negate: "11", ability: "none", fireProof: -1, habitat: "Grasslands", sight: "80 - 140", alpha: "Giant", magicProof: 0, size: 25, speed: 3.2, rotation: 0.09, rate: 0.6, experience: 1100, description: ["Grushes live in a protective shell that grows biological plantlike fibers from its pores that strongly resember the plant grush weed that grushes", "usually live around. A grush will not leave its shell until its prey comes right next to it which is when it will poke its long sharp toothed", "jaw out and gnaw whatever it finds apart and then pull what it can of the mangled flesh back into its shell to have itself a feast. Grushes are", "incredily lazy and they will stop persuing a target almost as fast as they had started, either they succeed at eating it while it's near there", "resting place or they go back to sleep."], image: ["mofu", 877, 1, 72, 72, 0, 0, 72 * 3 / 3, 72 * 3 / 3]};

                //alpha has a larger size body and skills.
                this.alphaSize = 3; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0; // was 0
            }
            else if (this.alpha == "baby")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 1) + 1;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 0.85;
                this.rangeOfSight = 100; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 24;
                this.sizeRadius = 8;
                this.negateArmour = 0.1;
                this.attackWait = 0.5;
                this.effect = "none";
                this.beastEntry = {intReq: 6, name: "Grush", health: "1", armour: "0 - 15", damage: "0.5 - 1", negate: 0.1, ability: "none", fireProof: -1, habitat: "Grasslands", sight: "45 - 60", alpha: "Baby", magicProof: 0, size: 8, speed: 0.85, rotation: 0.05, rate: 0.5, experience: 4, description: ["Grushes live in a protective shell that grows biological plantlike fibers from its pores that strongly resemble the plant grush weed that grushes", "usually live around. A grush will not leave its shell until its prey comes right next to it which is when it will poke its long sharp toothed", "jaw out and gnaw whatever it finds apart and then pull what it can of the mangled flesh back into its shell to have itself a feast. Grushes are", "incredily lazy and they will stop persuing a target almost as fast as they had started, either they succeed at eating it while it's near their", "resting place or they go back to sleep."], image: ["mofu", 877, 1, 72, 72, 0, 0, 72 * 0.6 / 3, 72 * 0.6 / 3]};

                //alpha has a larger size body and skills.
                this.alphaSize = 0.6; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0; // was 0
            }
            else if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 10) + 44;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 1.6;
                this.rangeOfSight = 285; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.085;
                this.engagementRadius = 47;
                this.sizeRadius = 21;
                this.negateArmour = 2.5;
                this.attackWait = 0.6;
                this.effect = "none";
                this.beastEntry = {intReq: 16, name: "Grush", health: "44 - 53", armour: "0 - 55", damage: "3 - 9", negate: "2.5", ability: "none", fireProof: -1, habitat: "Grasslands", sight: "55 - 90", alpha: "Alpha", magicProof: 0, size: 21, speed: 1.6, rotation: 0.085, rate: 0.6, experience: 95, description: ["Grushes live in a protective shell that grows biological plantlike fibers from its pores that strongly resemble the plant grush weed that grushes", "usually live around. A grush will not leave its shell until its prey comes right next to it which is when it will poke its long sharp toothed", "jaw out and gnaw whatever it finds apart and then pull what it can of the mangled flesh back into its shell to have a itself feast. Grushes are", "incredily lazy and they will stop persuing a target almost as fast as they had started, either they succeed at eating it while it's near their", "resting place or they go back to sleep."], image: ["mofu", 877, 1, 72, 72, 0, 0, 72 * 1.5 / 3, 72 * 1.5 / 3]};

                //alpha has a larger size body and skills.
                this.alphaSize = 1.5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.

                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 7) + 29;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 1;
                this.rangeOfSight = 100; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 36; //was 49
                this.sizeRadius = 14;
                this.negateArmour = 1;
                this.attackWait = 0.5;
                this.effect = "none";
                this.beastEntry = {intReq: 9, name: "Grush", health: "29 - 36", armour: "0 - 35", damage: "2 - 6", negate: 1, ability: "none", fireProof: -1, habitat: "Grasslands", sight: "45 - 60", alpha: "Normal", magicProof: 0, size: 14, speed: 1, rotation: 0.05, rate: 0.5, experience: 45, description: ["Grushes live in a protective shell that grows biological plantlike fibers from its pores that strongly resemble the plant grush weed that grushes", "usually live around. A grush will not leave its shell until its prey comes right next to it which is when it will poke its long sharp toothed", "jaw out and gnaw whatever it finds apart and then pull what it can of the mangled flesh back into its shell to have a itself feast. Grushes are", "incredily lazy and they will stop persuing a target almost as fast as they had started, either they succeed at eating it while it's near their", "resting place or they go back to sleep."], image: ["mofu", 877, 1, 72, 72, 0, 0, 72 / 3, 72 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Narthwarp")
        {
            this.damageFrame = "automatic";
            this.team = "narthwarpia";
            if (this.ID == "docile")
            {
                this.team = "docile";
            }
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 17) + 53;
                this.health = this.healthMAX;
                this.armour = 4.5;
                this.speed = 2.75;
                this.rangeOfSight = 550; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.09;
                this.engagementRadius = 46;
                this.sizeRadius = 25;
                this.negateArmour = 1;
                this.attackWait = 1.5;
                this.effect = "narthwarpToxin";
                this.beastEntry = {intReq: 28, name: "Narthwarp", health: "53 - 69", armour: 4.5, damage: "7 - 21", negate: 1, ability: "Narthwarp Toxin", fireProof: 1, habitat: "Northern / Temperate Forests", sight: 550, alpha: "Alpha", magicProof: 0, size: 25, speed: 2.75, rotation: 0.09, rate: 1.5, experience: 95, description: ["Narthwarps are large six-legged armoured insects that have a long barbed appendage that it uses as a tool for food absorption as well as to release", "its toxins into its prey. The toxins a narthwarp produces cause their victim to lose energy and if the injection was large enough they could", "even faint. A narthwarps favorite foods are shehids and ulgoy plants because the toxins in both are digested and formed by", "a complex chemical process into the narthwarp's own toxin."], image: ["polypol", 29, 400, 71, 81, 0, 0, 71 * 2 / 3, 81 * 2 / 3]};

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 45;
                this.xAdjustment = 24; // was 0
            }
            else if (this.alpha == "baby")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 0.1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 3) + 3;
                this.health = this.healthMAX;
                this.armour = 0.5;
                this.speed = 1.75;
                this.rangeOfSight = 300; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 24;
                this.sizeRadius = 10;
                this.negateArmour = 0;
                this.attackWait = 0.85;
                this.effect = "narthwarpToxin";
                this.beastEntry = {intReq: 4, name: "Narthwarp", health: "3 - 5", armour: 0.5, damage: "1 - 2", negate: 0, ability: "Narthwarp Toxin", fireProof: 0.1, habitat: "Northern / Temperate Forests", sight: 300, alpha: "Baby", magicProof: 0, size: 10, speed: 1.75, rotation: 0.1, rate: 0.85, experience: 4, description: ["Narthwarps are large six-legged armoured insects that have a long barbed appendage that it uses as a tool for food absorption as well as to release", "its toxins into its prey. The toxins a narthwarp produces cause their victim to lose energy and if the injection was large enough they could", "even faint. A narthwarps favorite foods are shehids and ulgoy plants because the toxins in both are digested and formed by", "a complex chemical process into the narthwarp's own toxin."], image: ["polypol", 29, 400, 71, 81, 0, 0, 71 * 0.5 / 3, 81 * 0.5 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 0.5;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = -17;
                this.xAdjustment = -25;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 0.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 10) + 16;
                this.health = this.healthMAX;
                this.armour = 1.5;
                this.speed = 2.25;
                this.rangeOfSight = 425; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.095; // 0.01 is a standard turn speed.
                this.engagementRadius = 29;
                this.sizeRadius = 14;
                this.negateArmour = 0.5;
                this.attackWait = 1.45;
                this.effect = "narthwarpToxin";
                this.beastEntry = {intReq: 8, name: "Narthwarp", health: "16 - 25", armour: 1.5, damage: "4 - 9", negate: 0.5, ability: "Narthwarp Toxin", fireProof: 0.5, habitat: "Northern / Temperate Forests", sight: 425, alpha: "Normal", magicProof: 0, size: 14, speed: 2.25, rotation: 0.095, rate: 1.45, experience: 36, description: ["Narthwarps are large six-legged armoured insects that have a long barbed appendage that it uses as a tool for food absorption as well as to release", "its toxins into its prey. The toxins a narthwarp produces cause their victim to lose energy and if the injection was large enough they could", "even faint. A narthwarps favorite foods are shehids and ulgoy plants because the toxins in both are digested and formed by", "a complex chemical process into the narthwarp's own toxin."], image: ["polypol", 29, 400, 71, 81, 0, 0, 71 / 3, 81 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 4;
                this.xAdjustment = -7;
            }
        }
        else if (this.type == "Beruln")
        {
            this.damageFrame = "manual";
            this.team = "berulnia";
            if (this.ID == "playerSummonedBeruln")
            {
                this.team = "player";
            }
            else if (this.ID == "docile")
            {
                this.team = "docile";
            }
            this.haste = true;
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
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
                this.negateArmour = 10;
                this.attackWait = 0.75;
                this.beastEntry = {intReq: 13, name: "Beruln", health: "36 - 61", armour: 0, damage: "8 - 22", negate: 10, ability: "None", fireProof: -1, habitat: "Northern Rocky Barrens", sight: 900, alpha: "Alpha", magicProof: 0, size: 50, speed: "6.1 - 6.5", rotation: 0.075, rate: 0.75, experience: 93, description: ["Berulns are massive grey furred beasts that are known for their ferocity. They have an extra thick patch of fur that goes from the back of their", "head and widenes as it bristles back toward their tail end. Berulns are skilled hunters and they can be fairly silent while stalking prey and can", "also be exceptionally good climbers. Berulns are savage when it comes to eating, they will grasp their victim in their jaws and swing it around and", "smash it into the ground or large rocks before finally settling down to eat it. Alpha Berulns are slightly larger than the normal ones and they are a bit more agressive and perceptive to prey as well."], image: ["polyPNG", 92, 599, 77, 54, 0, 0, 154 * 1.1 / 3, 108 * 1.1 / 3]};

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
                this.heatResistance = -1;
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
                this.negateArmour = 9;
                this.attackWait = 0.85;
                this.beastEntry = {intReq: 11, name: "Beruln", health: "32 - 45", armour: 0, damage: "7 - 22", negate: 9, ability: "None", fireProof: -1, habitat: "Northern Rocky Barrens", sight: 850, alpha: "Normal", magicProof: 0, size: 42, speed: "5.8 - 6", rotation: 0.075, rate: 0.85, experience: 81, description: ["Berulns are massive grey furred beasts that are known for their ferocity. They have an extra thick patch of fur that goes from the back of their", "head and widenes as it bristles back toward their tail end. Berulns are skilled hunters and they can be fairly silent while stalking prey and can", "also be exceptionally good climbers. Berulns are savage when it comes to eating, they will grasp their victim in their jaws and swing it around and", "smash it into the ground or large rocks before finally settling down to eat it."], image: ["polyPNG", 92, 599, 77, 54, 0, 0, 154 / 3, 108 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;

            }
        }
        else if (this.type == "Olkrin")
        {
            this.damageFrame = "manual";
            this.team = "olkrinia";
            this.baseTeam = this.team;
            this.haste = true;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 101) + 500;
                this.health = this.healthMAX;
                this.armour = 9;
                this.speed = 7.1 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 1100; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // was 0.05
                this.engagementRadius = 69;
                this.sizeRadius = 47;
                this.negateArmour = 20;
                this.attackWait = 3;
                this.beastEntry = {intReq: 45, name: "Olkrin", health: "500 - 600", armour: 9, damage: "36 - 64", negate: 20, ability: "None", fireProof: 0, habitat: "Rocky Barrens", sight: 1100, alpha: "Goliath", magicProof: 0, size: 47, speed: "7.1 - 7.5", rotation: 0.1, rate: 3, experience: 1400, description: ["Olkrins are thought to be only of myth and legend for the reason that they are not common to find, which is because they are humongous beasts", "with vast appetites that need to be filled and many places do not have the right ecosystem to support their species' size. Those who do recognize there", "existence often consider olkrins to be a type of demon, but in truth they are just an ancient species of abnormally huge ferocious monsters that may be", "on the verge of extinction."], image: ["verse", 156, 706, 117, 157, 0, 0, 117 * 2.4 / 3, 157 * 2.4 / 3]};

                //alpha has a larger size body and skills.
                this.alphaSize = 2.40; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 55;
                this.xAdjustment = 35;
            }
            else if (this.alpha == "baby")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 16) + 45;
                this.health = this.healthMAX;
                this.armour = 2.5;
                this.speed = 5.1 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 750; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 35;
                this.sizeRadius = 24;
                this.negateArmour = 10;
                this.attackWait = 2;
                this.beastEntry = {intReq: 35, name: "Olkrin", health: "45 - 60", armour: 2.5, damage: "12 - 20", negate: 10, ability: "None", fireProof: 0, habitat: "Rocky Barrens", sight: 750, alpha: "Baby", magicProof: 0, size: 24, speed: "5.1 - 5.3", rotation: 0.1, rate: 2, experience: 172, description: ["Olkrins are thought to be only of myth and legend for the reason that they are not common to find, which is because they are humongous beasts", "with vast appetites that need to be filled and many places do not have the right ecosystem to support their species' size. Those who do recognize there", "existence often consider olkrins to be a type of demon, but in truth they are just an ancient species of abnormally huge ferocious monsters that may be", "on the verge of extinction."], image: ["verse", 156, 706, 117, 157, 0, 0, 117 * 1.1 / 3, 157 * 1.1 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = -50;
                this.xAdjustment = -32;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 86) + 225;
                this.health = this.healthMAX;
                this.armour = 5;
                this.speed = 6.8 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 900; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // was 0.05
                this.engagementRadius = 61;
                this.sizeRadius = 42;
                this.negateArmour = 14;
                this.attackWait = 3;
                this.beastEntry = {intReq: 40, name: "Olkrin", health: "225 - 310", armour: 5, damage: "24 - 40", negate: 14, ability: "None", fireProof: 0, habitat: "Rocky Barrens", sight: 900, alpha: "Normal", magicProof: 0, size: 42, speed: "6.8 - 7", rotation: 0.1, rate: 3, experience: 1000, description: ["Olkrins are thought to be only of myth and legend for the reason that they are not common to find, which is because they are humongous beasts", "with vast appetites that need to be filled and many places do not have the right ecosystem to support their species' size. Those who do recognize there", "existence often consider olkrins to be a type of demon, but in truth they are just an ancient species of abnormally huge ferocious monsters that may be", "on the verge of extinction."], image: ["verse", 156, 706, 117, 157, 0, 0, 117 * 1.75 / 3, 157 * 1.75 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.75;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "BogTroll")
        {
            this.justAttacked = true;
            this.team = "trollia";
            this.baseTeam = this.team;
            this.haste = true;

            if (this.alpha == true)
            {
                this.magicalResistance = 5;
                this.heatResistance = 7;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 41) + 180;
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
                this.beastEntry = {intReq: 38, name: "Bog Troll", health: "180 - 220", armour: 1, damage: "40 - 100", negate: 16, ability: "Health Regeneration", fireProof: 7, habitat: "Marshes/Bogs/Swamps", sight: 1000, alpha: "Alpha", magicProof: 5, size: 80, speed: "5.2 - 5.7", rotation: 0.035, rate: 4.2, experience: 1580, description: ["Bog trolls are a ferocious sort, but at times they can be found soaking lazily in the bog water only eating that which gets too close to their mouths.", "When they are not lazing about bog trolls are notably dangerous. 'Fear not the deadly plagues of the bog for the trolls will kill you first'"], image: ["verse", 3770, 16, 106, 129, 0, 0, 154 * 2 / 3, 108 * 2 / 3]};

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
                this.heatResistance = 3;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 9) + 23;
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
                this.beastEntry = {intReq: 25, name: "Bog Troll", health: "23 - 32", armour: 0, damage: "4 - 14", negate: 3, ability: "Health Regeneration", fireProof: 3, habitat: "Marshes/Bogs/Swamps", sight: 600, alpha: "Baby", magicProof: 1.5, size: 42, speed: "3.1 - 3.7", rotation: 0.035, rate: 3.2, experience: 116, description: ["Bog trolls give birth to numerous young at once. It is not at all uncommon to see a baby bog troll wandering about without a parent, this is because the", "mother is likely to eat the young right after birth if they are not fit enough to escape her reach. Many young bog trolls fall victim to the dangers of", "the swamp, but the sheer number of offspring ensures the survival of their species."], image: ["verse", 3770, 16, 106, 129, 0, 0, 154 * 0.65 / 3, 108 * 0.65 / 3]};

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
                this.heatResistance = 5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 36) + 102;
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
                this.beastEntry = {intReq: 34, name: "Bog Troll", health: "102 - 137", armour: 1, damage: "23 - 61", negate: 10, ability: "Health Regeneration", fireProof: 5, habitat: "Marshes/Bogs/Swamps", sight: 850, alpha: "Normal", magicProof: 3, size: 42, speed: "4.4 - 5", rotation: 0.035, rate: 3.2, experience: 940, description: ["Bog trolls are a ferocious sort, but at times they can be found soaking lazily in the bog water only eating that which gets too close to their mouths.", "When they are not lazing about bog trolls are notably dangerous. 'Fear not the deadly plagues of the bog for the trolls will kill you first'"], image: ["verse", 3770, 16, 106, 129, 0, 0, 154 * 1.4 / 3, 108 * 1.4 / 3]};

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
            this.team = "wild";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
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
                this.beastEntry = {intReq: 12, name: "Winter Wolf", health: "30 - 55", armour: 0, damage: "6 - 25", negate: 3, ability: "None", fireProof: -1, habitat: "Frozen Tundra/Ice Flats", sight: 775, alpha: "Massive", magicProof: 0, size: 35, speed: "5 - 5.4", rotation: 0.085, rate: 1.5, experience: 100, description: ["Winter wolves can grow to monstrous proportions; the largest of them can make a full grown wolf seem like a new born pup. Winter wolves are highly valued", "for their blizzard white pelts, for this reason winter wolves are often hunted by the Freydic people of the north."], image: ["verse", 2853, 17, 49, 29, 0, 0, 49 * 3.2 / 3, 29 * 3.2 / 3]};

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
                this.heatResistance = -1;
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
                this.beastEntry = {intReq: 10, name: "Winter Wolf", health: "9 - 17", armour: 0, damage: "4 - 10", negate: 1, ability: "None", fireProof: -1, habitat: "Frozen Tundra/Ice Flats", sight: 665, alpha: "Normal", magicProof: 0, size: 24, speed: "4.7 - 4.9", rotation: 0.085, rate: 1.5, experience: 49, description: ["White as a winter storm, winter wolves are the fierce canine hunters of the cold northern lands. They are commonly thought to be more ruthless and feral", "than most other varieties of wolves."], image: ["verse", 2853, 17, 49, 29, 0, 0, 49 * 1.8 / 3, 29 * 1.8 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.8;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = -24;
                this.xAdjustment = -33;

            }
        }
        else if (this.type == "GreyWolf")
        {
            this.damageFrame = "manual";
            this.team = "wild";
            if (this.ID == "playerSummonedWolf")
            {
                this.team = "player";
            }
            else if (this.ID == "docile")
            {
                this.team = "docile";
            }

            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 20) + 28;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4.7 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 650; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.085; // was 0.05
                this.engagementRadius = 59;
                this.sizeRadius = 35;
                this.negateArmour = 2.5;
                this.attackWait = 1.65;
                this.beastEntry = {intReq: 11, name: "Grey Wolf", health: "28 - 47", armour: 0, damage: "5 - 22", negate: 2.5, ability: "None", fireProof: -1, habitat: "Mountains/Rocky Barrens/Temperate Forest", sight: 700, alpha: "Massive", magicProof: 0, size: 35, speed: "4.7 - 5.1", rotation: 0.085, rate: 1.65, experience: 90, description: ["Tales have been told of such oversized man-eating wolves. Grey wolves are the most common wolves of the lands, though there is nothing common about the much larger version of these fearsome grey-furred beasts."], image: ["oldverse", 2853, 17, 49, 29, 0, 0, 49 * 3.2 / 3, 29 * 3.2 / 3]};

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
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 8) + 8;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4.5 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 575; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.085; // was 0.05
                this.engagementRadius = 35;
                this.sizeRadius = 24;
                this.negateArmour = 0.5;
                this.attackWait = 1.65;
                this.beastEntry = {intReq: 6, name: "Grey Wolf", health: "8 - 15", armour: 0, damage: "3 - 8", negate: 0.5, ability: "None", fireProof: -1, habitat: "Mountains/Rocky Barrens/Temperate Forest", sight: 600, alpha: "Normal", magicProof: 0, size: 24, speed: "4.5 - 4.7", rotation: 0.085, rate: 1.65, experience: 38, description: ["Grey wolves are the most common type of wolf in the lands. They are found in small to medium large packs, which may be found in forest regions, in", "mountainous regions, and in rocky barrens."], image: ["oldverse", 2853, 17, 49, 29, 0, 0, 49 * 1.8 / 3, 29 * 1.8 / 3]};

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
            this.resistances = ["shock"];
            this.team = "wild";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 4;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 19) + 16;
                this.health = this.healthMAX;
                this.armour = 8;
                this.speed = 3 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 490; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 42;
                this.sizeRadius = 33;
                this.negateArmour = 7;
                this.attackWait = 0.5;
                this.beastEntry = {intReq: 13, name: "Gulfrey", health: "16 - 34", armour: 8, damage: "4 - 10", negate: 7, ability: "None", fireProof: 4, habitat: "Jungle", sight: 490, alpha: "Normal", magicProof: 0, size: 33, speed: "3 - 3.2", rotation: 0.05, rate: 0.5, experience: 21, description: ["Gulfreys are long shelled insects with multiple shell sections that allow them much maneuverability. The larger gulfreys often hunt alone. They have", "large mandibles that they use to force their prey towards their gnarly insectoid eating graspers. They will usually eat whatever creatures are available", "to them, given that they are not too dangerous to contend with."], image: ["oldverse", 242, 10, 123, 52, 0, 0, 123 * 1.5 / 3, 52 * 1.5 / 3]};

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
                this.heatResistance = 1;
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
                this.beastEntry = {intReq: 9, name: "Gulfrey", health: "4 - 8", armour: 4, damage: "2 - 4", negate: 4, ability: "None", fireProof: 1, habitat: "Jungle", sight: 440, alpha: "Baby", magicProof: 0, size: 13, speed: "2.8 - 3.1", rotation: 0.05, rate: 0.5, experience: 8, description: ["Gulfreys are long shelled insects with multiple shell sections that allow them much maneuverability. Young Gulfreys are born from large clusters of eggs and they tend to be successful at surviving if they hatch because they will all hunt together. A pack of young gulfreys is a fearful sight, but worse is when they each grow into their fully grown form which is massive."], image: ["oldverse", 242, 10, 123, 52, 0, 0, 123 * 0.65 / 3, 52 * 0.65 / 3]};

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 0.65;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = -37; //was -34
                this.xAdjustment = -26; //was - 26

            }
        }
        else if (this.type == "Neev")
        {
            this.damageFrame = "automatic";
            this.team = "neutral";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 7;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 16) + 39;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.2 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 800; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 32;
                this.sizeRadius = 16;
                this.negateArmour = 1;
                this.attackWait = 1;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.8; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 20;
                this.xAdjustment = 6;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 5;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 7) + 11;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 2.4 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 650; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 23;
                this.sizeRadius = 13;
                this.negateArmour = 0;
                this.attackWait = 1;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 4; //was -34
                this.xAdjustment = -11; //was - 26

            }
        }
        else if (this.type == "Golgemoff")
        {
            this.damageFrame = "automatic";
            this.effect = "blindingIII";
            this.team = "golgemoffia";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 9) + 31;
                this.health = this.healthMAX;
                this.armour = 4;
                this.speed = 5.5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 860; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 42;
                this.sizeRadius = 18;
                this.negateArmour = 0.15;
                this.attackWait = 0.25;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.35; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was - 10
                this.xAdjustment = 0; //was 30
            }
            else if (this.alpha == "massive")
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 18) + 55;
                this.health = this.healthMAX;
                this.armour = 6;
                this.speed = 6 + (Math.floor(Math.random() * 8) / 10);
                this.rangeOfSight = 1000; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 50;
                this.sizeRadius = 23;
                this.negateArmour = 0.5;
                this.attackWait = 0.25;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.85; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "baby")
            {
                this.magicalResistance = 0;
                this.heatResistance = 2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 1.5;
                this.health = this.healthMAX;
                this.armour = 1;
                this.speed = 3.5 + (Math.floor(Math.random() * 11) / 10);
                this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 20;
                this.sizeRadius = 4;
                this.negateArmour = 0;
                this.attackWait = 0.25;

                //alpha has a larger size body and skills.
                this.alphaSize = 0.35; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 3) + 3;
                this.health = this.healthMAX;
                this.armour = 2.5;
                this.speed = 5 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 800; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 39;
                this.sizeRadius = 13;
                this.negateArmour = 0;
                this.attackWait = 0.55;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "Bees")
        {
            this.damageFrame = "automatic";
            this.team = "neutral";

            //STATS (non-variable)
            this.magicalResistance = 0;
            this.heatResistance = -1;
            this.attackStyle = "chunked";
            this.attackRate = 0;  //this is for rapid style combat only.
            this.healthMAX = Math.floor(Math.random() * 3) + 1;
            this.health = this.healthMAX;
            this.armour = 0;
            this.speed = 4 + (Math.floor(Math.random() * 4) / 10);
            this.rangeOfSight = 500; //This is just to set the variable initially. The rest is variable.
            this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
            this.engagementRadius = 0;
            this.sizeRadius = 12;
            this.negateArmour = 45;
            this.attackWait = 0.1;

            //this multiplies the draw image skew numbers by 1 so that it stays the same
            this.alphaSize = 1;
            // this is the adjustment the alpha type of Etyr needs to be centered.
            this.yAdjustment = 0; //was -34
            this.xAdjustment = 0; //was - 26
        }
        else if (this.type == "Frich")
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            if (this.ID == "playerSummonedFrich")
            {
                this.team = "player";
            }
            else if (this.ID == "docile")
            {
                this.team = "docile";
            }
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 4) + 4;
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
            else if (this.alpha == "massive")
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 8) + 12;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.3 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 525; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 49;
                this.sizeRadius = 19;
                this.negateArmour = 1;
                this.attackWait = 0.80;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.6; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 5.5;
                this.xAdjustment = 26;
            }

            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 3) + 3;
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
        else if (this.type == "MountainFrich")
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 16) + 47;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.6 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 625; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 50;
                this.sizeRadius = 19;
                this.negateArmour = 2;
                this.attackWait = 0.85;

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 10; //was - 10
                this.xAdjustment = 50; //was 30
            }
            else if (this.alpha == "massive")
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 22) + 73;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4.1 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 725; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 51;
                this.sizeRadius = 24;
                this.negateArmour = 3;
                this.attackWait = 0.90;

                //alpha has a larger size body and skills.
                this.alphaSize = 2.5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 20;
                this.xAdjustment = 86;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 7) + 30;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.2 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 525; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 46;
                this.sizeRadius = 18;
                this.negateArmour = 1;
                this.attackWait = 0.8;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.5;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 5.5; //was -34
                this.xAdjustment = 26; //was - 26

            }
        }
        else if (this.type == "Anter")
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 0.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 7) + 9;
                this.health = this.healthMAX;
                this.armour = 6;
                this.speed = 3.9 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 400; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 57;
                this.sizeRadius = 17;
                this.negateArmour = 3;
                this.attackWait = 1.25;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.6; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was - 10
                this.xAdjustment = 0; //was 30
            }
            else if (this.alpha == "massive")
            {
                this.magicalResistance = 0;
                this.heatResistance = 0.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 12) + 35;
                this.health = this.healthMAX;
                this.armour = 6;
                this.speed = 3.9 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 400; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 46;
                this.sizeRadius = 18;
                this.negateArmour = 3;
                this.attackWait = 1.25;

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = 0.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 5) + 5;
                this.health = this.healthMAX;
                this.armour = 6;
                this.speed = 3.9 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 400; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 59;
                this.sizeRadius = 15;
                this.negateArmour = 3;
                this.attackWait = 1.25;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.3;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "Pelcrid")
        {
            this.damageFrame = "automatic";
            this.resistances = ["acid", "stun", "blinded", "burning", "frozen"];
            this.team = "shehidia";
            this.baseTeam = this.team;
            this.other = new Date().getTime();

            if (this.alpha == true)
            {
                //alpha has a larger size body and skills.
                this.alphaSize = 5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.

                this.magicalResistance = -2;
                this.heatResistance = 1000;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 3) + 3 * this.alphaSize;
                this.health = this.healthMAX;
                this.armour = 7 + 0.75 * this.alphaSize;
                this.speed = 0.15 + (Math.floor(Math.random() * 4) / 10) + 0.02 * this.alphaSize;
                this.rangeOfSight = 700; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 10 + 7 * this.alphaSize;
                this.sizeRadius = 10 + 2 * this.alphaSize;
                this.negateArmour = 4 + 0.45 * this.alphaSize;
                this.attackWait = 0.86 + (Math.random() * 2);
                this.effect = "fire";

                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                //alpha has a larger size body and skills.
                this.alphaSize = 3; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.

                this.magicalResistance = -2;
                this.heatResistance = 1000;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 3) + 3 * this.alphaSize;
                this.health = this.healthMAX;
                this.armour = 7 + 0.75 * this.alphaSize;
                this.speed = 0.15 + (Math.floor(Math.random() * 4) / 10) + 0.02 * this.alphaSize;
                this.rangeOfSight = 700; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 10 + 7 * this.alphaSize;
                this.sizeRadius = 10 + 2 * this.alphaSize;
                this.negateArmour = 4 + 0.45 * this.alphaSize;
                this.attackWait = 0.86 + (Math.random() * 2);
                this.effect = "fire";

                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Oolid")
        {
            this.damageFrame = "automatic";
            this.resistances = ["acid", "stun", "blinded", "shock"];
            this.team = "shehidia";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 4;
                this.heatResistance = -3;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 4) + 20;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 0.3 + (Math.floor(Math.random() * 8) / 10);
                this.rangeOfSight = 700; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 53;
                this.sizeRadius = 15;
                this.negateArmour = 14;
                this.attackWait = 0.45 + Math.random();
                this.effect = "stunII";

                //alpha has a larger size body and skills.
                this.alphaSize = 1.5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "massive")
            {
                this.magicalResistance = 4;
                this.heatResistance = -3;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 7) + 31;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 1 + (Math.floor(Math.random() * 8) / 10);
                this.rangeOfSight = 700; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.025; // 0.01 is a standard turn speed.
                this.engagementRadius = 65;
                this.sizeRadius = 23;
                this.negateArmour = 19;
                this.attackWait = 0.45 + Math.random();
                this.effect = "stunII";

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 4;
                this.heatResistance = -3;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 3) + 10;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 0.2 + (Math.floor(Math.random() * 8) / 10);
                this.rangeOfSight = 700; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 26;
                this.sizeRadius = 12;
                this.negateArmour = 8;
                this.attackWait = 0.45 + Math.random();
                this.effect = "stunI";

                //alpha has a larger size body and skills.
                this.alphaSize = 1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Glutid")
        {
            this.damageFrame = "automatic";
            this.resistances = ["acid", "stun", "blinded", "shock", "burning", "frozen"];
            this.team = "shehidia";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 5;
                this.heatResistance = 4;
                this.attackStyle = "chunked";
                this.attackRate = 0; //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 7) + 34;
                this.health = this.healthMAX;
                this.armour = 6;
                this.speed = 0.25 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 34;
                this.sizeRadius = 18;
                this.negateArmour = 6;
                this.attackWait = 1 + Math.random();
                this.effect = "freezingStun";

                //alpha has a larger size body and skills.
                this.alphaSize = 1.5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "massive")
            {
                this.magicalResistance = 5;
                this.heatResistance = 4;
                this.attackStyle = "chunked";
                this.attackRate = 0; //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 9) + 59;
                this.health = this.healthMAX;
                this.armour = 7;
                this.speed = 0.25 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 43;
                this.sizeRadius = 23;
                this.negateArmour = 6;
                this.attackWait = 1 + Math.random();
                this.effect = "freezingStun";

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 5;
                this.heatResistance = 4;
                this.attackStyle = "chunked";
                this.attackRate = 0; //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 4) + 19;
                this.health = this.healthMAX;
                this.armour = 5;
                this.speed = 0.25 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 27;
                this.sizeRadius = 13;
                this.negateArmour = 6;
                this.attackWait = 1 + Math.random();
                this.effect = "freezingStun";

                //alpha has a larger size body and skills.
                this.alphaSize = 1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Tilk")
        {
            this.damageFrame = "manual";
            this.team = "tilkia";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 12) + 31;
                this.health = this.healthMAX;
                this.armour = 1;
                this.speed = 5.7 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 900; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 56;
                this.sizeRadius = 29;
                this.negateArmour = 6;
                this.attackWait = 0.25;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.4;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "massive")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 41) + 182;
                this.health = this.healthMAX;
                this.armour = 1.5;
                this.speed = 6.3 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 1100; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 95;
                this.sizeRadius = 47;
                this.negateArmour = 12;
                this.attackWait = 0.25;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 3;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 7) + 10;
                this.health = this.healthMAX;
                this.armour = 0.5;
                this.speed = 5 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 900; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 35;
                this.sizeRadius = 20;
                this.negateArmour = 3;
                this.attackWait = 0.25;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "SpittingMudFly")
        {
            this.damageFrame = "manual";
            this.team = "wild";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 2) + 6;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 5 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 850; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 56;
                this.sizeRadius = 13;
                this.negateArmour = 0;
                this.attackWait = 2.85;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.5;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "giant")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 16) + 59;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 1250; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 95;
                this.sizeRadius = 47;
                this.negateArmour = 0;
                this.attackWait = 4.25;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 5;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "baby")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 0) + 1;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 450; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 95;
                this.sizeRadius = 4;
                this.negateArmour = 0;
                this.attackWait = 3.15;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 0.5;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 2) + 3;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4.5 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 750; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 35;
                this.sizeRadius = 9;
                this.negateArmour = 0;
                this.attackWait = 2.85;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            this.keepSpeed = this.speed;
        }
        else if (this.type == "Ulgoy")
        {
            this.mobile = false;
            this.stackDominance = 1000;
            this.damageFrame = "automatic";
            this.team = "ulgoyia";
            this.baseTeam = this.team;
            this.mode = "waiting";

            if (this.alpha == true)
            {
                this.magicalResistance = 3;
                this.heatResistance = 4;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 23) + 43;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 0;
                this.rangeOfSight = 500; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 85;
                this.sizeRadius = 24;
                this.negateArmour = 4;
                this.attackWait = 4.5;

                //alpha has a larger size body and skills.
                this.alphaSize = 2.2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was - 10
                this.xAdjustment = 0; //was 30
            }
            else if (this.alpha == "giant")
            {
                this.magicalResistance = 4;
                this.heatResistance = 4;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 131) + 210;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.3 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 500; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 190;
                this.sizeRadius = 56;
                this.negateArmour = 10;
                this.attackWait = 12;

                //alpha has a larger size body and skills.
                this.alphaSize = 5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "baby")
            {
                this.magicalResistance = 1;
                this.heatResistance = 4;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 5) + 5;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 0;
                this.rangeOfSight = 500; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 45;
                this.sizeRadius = 9;
                this.negateArmour = 1;
                this.attackWait = 3.6;

                //alpha has a larger size body and skills.
                this.alphaSize = 0.8; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 2;
                this.heatResistance = 4;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 9) + 22;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 0;
                this.rangeOfSight = 500; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 64;
                this.sizeRadius = 14;
                this.negateArmour = 3;
                this.attackWait = 4.1;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.4;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "BrolleWorms")
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            this.baseTeam = this.team;
            this.haste = true;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            this.magicalResistance = 0;
            this.heatResistance = 0;
            this.attackStyle = "chunked";
            this.attackRate = 0;  //this is for rapid style combat only.
            this.healthMAX = 1;
            this.health = this.healthMAX;
            this.armour = 0;
            this.speed = 0.8 + (Math.floor(Math.random() * 3) / 10);
            this.rangeOfSight = 300; //This is just to set the variable initially. The rest is variable.
            this.rotationSpeed = 0.1;
            this.engagementRadius = 6;
            this.sizeRadius = 10;
            this.negateArmour = 0;
            this.attackWait = 0.05;

            //alpha has a larger size body and skills.
            this.alphaSize = 1.45; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
            // this is the adjustment the alpha type of Etyr needs to be centered.
            this.yAdjustment = 1; //was - 3.5
            this.xAdjustment = 6; //was 6
        }
        else if (this.type == "Varn")
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 5) + 10;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.2 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 525; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 41.5;
                this.sizeRadius = 19;
                this.negateArmour = 0;
                this.attackWait = 0.5;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.45; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 1; //was - 3.5
                this.xAdjustment = 6; //was 6
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 4) + 7;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 2.9 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 450; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 38.5;
                this.sizeRadius = 18;
                this.negateArmour = 0;
                this.attackWait = 0.5;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.3;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "Skol")
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 11) + 36;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 5 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 625;
                this.rotationSpeed = 0.1;
                this.engagementRadius = 70;
                this.sizeRadius = 33;
                this.negateArmour = 3;
                this.attackWait = 1.35;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.6; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 1; //was - 3.5
                this.xAdjustment = 6; //was 6
            }
            else if (this.alpha == "massive")
            {
                this.magicalResistance = 0;
                this.heatResistance = -2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 21) + 69;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 6 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 900;
                this.rotationSpeed = 0.1;
                this.engagementRadius = 96;
                this.sizeRadius = 60;
                this.negateArmour = 6;
                this.attackWait = 1.5;

                //alpha has a larger size body and skills.
                this.alphaSize = 2.2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 1; //was - 3.5
                this.xAdjustment = 6; //was 6
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 6) + 12;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 575;
                this.rotationSpeed = 0.1;
                this.engagementRadius = 55;
                this.sizeRadius = 23;
                this.negateArmour = 1;
                this.attackWait = 1.25;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "Boulchom")
        {
            this.followThrough = true; //this unit follows through with its attacks even if the player moves out of range.
            this.charger = true; //this unit charges through and past the enemy.
            this.damageFrame = "manual"; //it is necessary to set this to "manual" so that the attackBubble function can determine the damaging.
            this.team = "wild";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 10) + 20;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 6 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 1000; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 247;
                this.sizeRadius = 28;
                this.negateArmour = 4;
                this.attackWait = 2.5;
                this.chargeDist = this.engagementRadius * 1.7;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.8; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 7) + 11;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 900; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 210;
                this.sizeRadius = 19;
                this.negateArmour = 2;
                this.attackWait = 2.5;
                this.chargeDist = this.engagementRadius * 1.5;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.25;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;

            }
        }
        else if (this.type == "Lombris")
        {
            this.resistances = ["blinded", "burning"];
            this.followThrough = true; //this unit follows through with its attacks even if the player moves out of range.
            this.damageFrame = "manual"; //it is necessary to set this to "manual" so that the attackBubble function can determine the damaging.
            this.team = "lombrisia";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 16) + 45;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 700; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 64;
                this.sizeRadius = 28;
                this.negateArmour = 0;
                this.attackWait = 7;

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 6) + 12;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.8 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 550; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 42;
                this.sizeRadius = 19;
                this.negateArmour = 0;
                this.attackWait = 6;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;

            }
        }
        else if (this.type == "Nog")
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 1.1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 4) + 2.5;
                this.health = this.healthMAX;
                this.armour = 0.5;
                this.speed = 4 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 525; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.2;
                this.engagementRadius = 34;
                this.sizeRadius = 12.5;
                this.negateArmour = 0.25;
                this.attackWait = 1;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.25; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 3) + 1;
                this.health = this.healthMAX;
                this.armour = 0.4;
                this.speed = 3.8 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 375; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.2;
                this.engagementRadius = 24.85;
                this.sizeRadius = 10;
                this.negateArmour = 0.2;
                this.attackWait = 1;

                //alpha has a larger size body and skills.
                this.alphaSize = 1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "HyelingSoldier")
        {
            this.damageFrame = "automatic";
            this.team = "hyeling";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }
            this.dropRND = Math.random();
            this.extraRot = 1/2 * Math.PI;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 9) + 26;
                this.health = this.healthMAX;
                this.armour = 2.5;
                this.speed = 5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 860; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 62;
                this.sizeRadius = 20;
                this.negateArmour = 0;
                this.attackWait = 1.1;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.22; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 1; //was - 3.5
                this.xAdjustment = 6; //was 6
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 7) + 21;
                this.health = this.healthMAX;
                this.armour = 2.25;
                this.speed = 4.75 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 820; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 50;
                this.sizeRadius = 18;
                this.negateArmour = 0;
                this.attackWait = 1.1;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "Hyeling")
        {
            this.damageFrame = "automatic";
            this.team = "hyeling";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }
            this.dropRND = Math.random();
            this.extraRot = 1/2 * Math.PI;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 6) + 20;
                this.health = this.healthMAX;
                this.armour = 0.15;
                this.speed = 5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 860; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 36;
                this.sizeRadius = 20;
                this.negateArmour = 1.5;
                this.attackWait = 0.75;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.22; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 1; //was - 3.5
                this.xAdjustment = 6; //was 6
            }
            else if (this.alpha == "baby")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.round(Math.random() * 2) + 4;
                this.health = this.healthMAX;
                this.armour = 0.02;
                this.speed = 4.75 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 820; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 19;
                this.sizeRadius = 10;
                this.negateArmour = 0.2;
                this.attackWait = 0.82;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 0.61;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 5) + 16;
                this.health = this.healthMAX;
                this.armour = 0.1;
                this.speed = 4.75 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 820; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 30;
                this.sizeRadius = 18;
                this.negateArmour = 1;
                this.attackWait = 0.75;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26
            }
        }
        else if (this.type == "Ut") //utttttt
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 1;
                this.heatResistance = 6;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 26) + 140;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 2 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 700; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05;
                this.engagementRadius = 36;
                this.sizeRadius = 19;
                this.negateArmour = 14;
                this.attackWait = 3.85;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.9; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "baby")
            {
                this.magicalResistance = 1;
                this.heatResistance = 6;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 5) + 14;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 1 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 500; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05;
                this.engagementRadius = 26;
                this.sizeRadius = 16;
                this.negateArmour = 3;
                this.attackWait = 3.55;

                //alpha has a larger size body and skills.
                this.alphaSize = 0.75; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 1;
                this.heatResistance = 6;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 12) + 49;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 1.5 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05;
                this.engagementRadius = 30;
                this.sizeRadius = 19;
                this.negateArmour = 9;
                this.attackWait = 3.75;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.25; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Grewble")
        {
            this.damageFrame = "automatic";
            this.resistances = ["stun"];
            this.team = "wild";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 5) + 21;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 800; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.effect = "grewbleToxinII";
                this.engagementRadius = 75;
                this.sizeRadius = 24;
                this.negateArmour = 11;
                this.attackWait = 3.25;

                //alpha has a larger size body and skills.
                this.alphaSize = 3; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "giant")
            {
                this.magicalResistance = 0;
                this.heatResistance = 2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 16) + 35;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 8;
                this.rangeOfSight = 1000; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.effect = "grewbleToxinIII";
                this.engagementRadius = 114;
                this.sizeRadius = 34;
                this.negateArmour = 90;
                this.attackWait = 9;

                //alpha has a larger size body and skills.
                this.alphaSize = 4; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "baby")
            {
                this.magicalResistance = 0;
                this.heatResistance = 2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 2) + 3;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 800; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.effect = "fatigueI";
                this.engagementRadius = 32;
                this.sizeRadius = 5;
                this.negateArmour = 2.5;
                this.attackWait = 1.25;

                //alpha has a larger size body and skills.
                this.alphaSize = 1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = 2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 2) + 9;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.5 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 800; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.effect = "grewbleToxinI";
                this.engagementRadius = 49;
                this.sizeRadius = 15;
                this.negateArmour = 14;
                this.attackWait = 2.25;

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Etna")
        {
            this.damageFrame = "automatic";
            this.resistances = ["stun", "web"];
            this.team = "etnia";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 0.3;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 4) + 7;
                this.health = this.healthMAX;
                this.armour = 1.2;
                this.speed = 3.2 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 650; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.effect = "etnaVenom";
                this.engagementRadius = 35;
                this.sizeRadius = 16;
                this.negateArmour = 7.4;
                this.attackWait = 1.89;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.3; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "baby")
            {
                this.magicalResistance = 0;
                this.heatResistance = 0.3;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 1;
                this.health = this.healthMAX;
                this.armour = 0.45;
                this.speed = 2.25 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 650; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.effect = "etnaVenom";
                this.engagementRadius = 19.8;
                this.sizeRadius = 3;
                this.negateArmour = 0;
                this.attackWait = 1.89;

                //alpha has a larger size body and skills.
                this.alphaSize = 0.4; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = 0.3;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 2) + 4;
                this.health = this.healthMAX;
                this.armour = 1;
                this.speed = 3 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 650; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.effect = "etnaVenom";
                this.engagementRadius = 32;
                this.sizeRadius = 13;
                this.negateArmour = 6;
                this.attackWait = 1.89;

                //alpha has a larger size body and skills.
                this.alphaSize = 1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Avrak")
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 0.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 31) + 45;
                this.health = this.healthMAX;
                this.armour = 2.5;
                this.speed = 5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 950; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 52;
                this.sizeRadius = 25;
                this.negateArmour = 3.5;
                this.attackWait = 1.35;

                //alpha has a larger size body and skills.
                this.alphaSize = 0.65; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was - 10
                this.xAdjustment = 0; //was 30
            }
            else if (this.alpha == "giant")
            {
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 61) + 190;
                this.health = this.healthMAX;
                this.armour = 4;
                this.speed = 7.5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 1250; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 150;
                this.sizeRadius = 85;
                this.negateArmour = 7;
                this.attackWait = 1.65;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = 0.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 10) + 14;
                this.health = this.healthMAX;
                this.armour = 1.5;
                this.speed = 4 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 750; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 51;
                this.sizeRadius = 20;
                this.negateArmour = 2.25;
                this.attackWait = 1.25;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 0.4;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "Evrak")
        {
            this.damageFrame = "automatic";
            this.team = "wild";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 11) + 20;
                this.health = this.healthMAX;
                this.armour = 3;
                this.speed = 6 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 950; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 50;
                this.sizeRadius = 25;
                this.negateArmour = 4;
                this.attackWait = 1.65;

                //alpha has a larger size body and skills.
                this.alphaSize = 0.65; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 7; //was - 10
                this.xAdjustment = 0; //was 30
            }
            else if (this.alpha == "giant")
            {
                this.magicalResistance = 0;
                this.heatResistance = 2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 31) + 140;
                this.health = this.healthMAX;
                this.armour = 5;
                this.speed = 8.5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 1250; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 98;
                this.sizeRadius = 81;
                this.negateArmour = 9;
                this.attackWait = 2;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 9;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = 1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 7) + 12;
                this.health = this.healthMAX;
                this.armour = 2;
                this.speed = 5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 750; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 36;
                this.sizeRadius = 20;
                this.negateArmour = 3;
                this.attackWait = 1.5;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 0.4;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 8; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "StoneGolem")
        {
            this.damageFrame = "automatic";
            this.state = "resting";
            this.resistances = ["shock"];
            this.team = "neutral";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = -5;
                this.heatResistance = 8;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 66) + 165;
                this.health = this.healthMAX;
                this.armour = 17;
                this.speed = 3 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 1500; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 51;
                this.sizeRadius = 20 * 3 * 1.25;
                this.negateArmour = 30;
                this.attackWait = 8;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.25; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was - 10
                this.xAdjustment = 0; //was 30
            }
            else if (this.alpha == "giant")
            {
                this.magicalResistance = -5;
                this.heatResistance = 10;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 151) + 400;
                this.health = this.healthMAX;
                this.armour = 28;
                this.speed = 4.5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 2000; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 51 * 3;
                this.sizeRadius = 20 * 3 * 2.2;
                this.negateArmour = 50;
                this.attackWait = 9;

                //alpha has a larger size body and skills.
                this.alphaSize = 2.2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "baby")
            {
                this.magicalResistance = -5;
                this.heatResistance = 5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 16) + 25;
                this.health = this.healthMAX;
                this.armour = 6;
                this.speed = 2 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 650; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 22;
                this.sizeRadius = 20;
                this.negateArmour = 4;
                this.attackWait = 2.65;

                //alpha has a larger size body and skills.
                this.alphaSize = 0.33; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = -5;
                this.heatResistance = 6;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 26) + 75;
                this.health = this.healthMAX;
                this.armour = 10;
                this.speed = 2.5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 1000; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 38
                this.sizeRadius = (20 * 3) * 0.65;
                this.negateArmour = 12;
                this.attackWait = 4.5;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 0.65;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "Grib")
        {
            this.damageFrame = "automatic";
            this.team = "gribia";
            if (this.ID == "docile")
            {
                this.team = "docile";
            }
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 5) + 16;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.9 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 400; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 40;
                this.sizeRadius = 19;
                this.negateArmour = 0;
                this.attackWait = 0.85;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.75; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 5; //was - 3.5
                this.xAdjustment = 6; //was 6
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 6) + 8;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.3 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 350; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 28;
                this.sizeRadius = 15;
                this.negateArmour = 0;
                this.attackWait = 0.85;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.3;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = -2; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "BlackBear")
        {
            this.damageFrame = "automatic";
            this.team = "bearia";
            if (this.ID == "docile")
            {
                this.team = "docile";
            }
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 11) + 32;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 2.2 + (Math.floor(Math.random() * 8) / 10);
                this.rangeOfSight = 425; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 41.5;
                this.sizeRadius = 20;
                this.negateArmour = 3;
                this.attackWait = 1.65;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.4; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 7; //was - 3.5
                this.xAdjustment = 10; //was 6
            }
            else if (this.alpha == "giant")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 41) + 155;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 6.5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 650; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 78;
                this.sizeRadius = 44;
                this.negateArmour = 15;
                this.attackWait = 3.5;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 3.35;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 45; //was -34
                this.xAdjustment = 80; //was - 26

            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.attackStyle = "chunked";
                this.heatResistance = -1;
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 11) + 20;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 2 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 400; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 33;
                this.sizeRadius = 15;
                this.negateArmour = 1.5;
                this.attackWait = 1.35;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26

            }
        }
        else if (this.type == "Viper")
        {
            this.damageFrame = "automatic";
            this.effect = "poisonII";
            this.team = "wild";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 0.1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 11) + 16;
                this.health = this.healthMAX;
                this.armour = 1;
                this.speed = 3.8 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 425; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 31.5;
                this.sizeRadius = 18;
                this.negateArmour = 4;
                this.attackWait = 1.65;

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 20;
                this.xAdjustment = 56;
            }
            else if (this.alpha == "giant")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = 0.25;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 25) + 64;
                this.health = this.healthMAX;
                this.armour = 6;
                this.speed = 5.5 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 650; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05;
                this.engagementRadius = 40;
                this.sizeRadius = 30;
                this.negateArmour = 19;
                this.attackWait = 2.4;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 3.4;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 50;
                this.xAdjustment = 120;

            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.attackStyle = "chunked";
                this.heatResistance = 0;
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random()) + 3;
                this.health = this.healthMAX;
                this.armour = 0.2;
                this.speed = 2.7 + (Math.floor(Math.random() * 6) / 10);
                this.rangeOfSight = 400; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1;
                this.engagementRadius = 33;
                this.sizeRadius = 15;
                this.negateArmour = 3;
                this.attackWait = 1.2;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;

            }
        }
        else if (this.type == "Naaprid")
        {
            this.damageFrame = "manual";
            this.team = "herd";
            this.baseTeam = this.team;
            this.milkTime = new Date().getTime();

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 8) + 9;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.8 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 385; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 59;
                this.sizeRadius = 35;
                this.negateArmour = 2;
                this.attackWait = 2.5;

                //alpha has a larger size body and skills.
                this.alphaSize = 2.15; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 10; //was - 10
                this.xAdjustment = 11; //was 30
            }
            else if (this.alpha == "baby")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 3) + 3;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.1 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 300; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 38;
                this.sizeRadius = 17;
                this.negateArmour = 2;
                this.attackWait = 2.5;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = -13.5; //was -34
                this.xAdjustment = -26; //was - 26
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 8) + 5;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.6 + (Math.floor(Math.random() * 5) / 10);
                this.rangeOfSight = 350; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 47;
                this.sizeRadius = 25;
                this.negateArmour = 2;
                this.attackWait = 2.5;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1.75;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0; //was -34
                this.xAdjustment = 0; //was - 26
            }
        }
        else if (this.type == "Waanti")
        {
            this.damageFrame = "manual";
            this.team = "herd";
            this.baseTeam = this.team;
            this.milkTime = new Date().getTime();
            this.goatEatness = 0;
            this.goatly = false;

            if (this.alpha == true)
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -3;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 5) + 13;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 5 + (Math.floor(Math.random() * 4) / 10);
                this.rangeOfSight = 500; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.045; // 0.01 is a standard turn speed.
                this.engagementRadius = 35;
                this.sizeRadius = 16;
                this.negateArmour = 0;
                this.attackWait = 8;

                this.alphaSize = 2;

                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "baby")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -2;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 1) + 2;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3 + (Math.floor(Math.random() * 2) / 10);
                this.rangeOfSight = 375; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 10;
                this.sizeRadius = 7;
                this.negateArmour = 0;
                this.attackWait = 4;

                this.alphaSize = 0.9;

                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -3;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 3) + 8;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 4 + (Math.floor(Math.random() * 3) / 10);
                this.rangeOfSight = 450; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.045; // 0.01 is a standard turn speed.
                this.engagementRadius = 20;
                this.sizeRadius = 12;
                this.negateArmour = 0;
                this.attackWait = 6;

                this.alphaSize = 1.45;

                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Mofu") //moe-foo
        {
            this.damageFrame = "manual";
            this.team = "herd";
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -0.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 7 + Math.round(Math.random());
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 1.35;
                this.rangeOfSight = 900; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 24;
                this.sizeRadius = 18;
                this.negateArmour = 0;
                this.attackWait = 2.5;

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else if (this.alpha == "baby")
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -0.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 1;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 0.8;
                this.rangeOfSight = 400; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 6;
                this.sizeRadius = 4.5;
                this.negateArmour = 0;
                this.attackWait = 3.5;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 0.5;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                //STATS (non-variable)
                this.magicalResistance = 0;
                this.heatResistance = -0.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 4;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 1;
                this.rangeOfSight = 800; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 12;
                this.sizeRadius = 9;
                this.negateArmour = 0;
                this.attackWait = 3;

                //this multiplies the draw image skew numbers by 1 so that it stays the same
                this.alphaSize = 1;
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Hoffalgre")
        {
            this.damageFrame = "manual";
            this.team = "herd";
            this.baseTeam = this.team;
            this.sex = "Young";
            this.traverse = true;

            if (this.alpha == true)
            {
                if (Math.round(Math.random()))
                {
                    this.bounce = false;
                    this.sex = "Female";
                    this.magicalResistance = 0;
                    this.heatResistance = -2.5;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 6) + 12;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 1.4;
                    this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                    this.engagementRadius = 39;
                    this.sizeRadius = 15.5;
                    this.negateArmour = 0;
                    this.attackWait = 1.5;
                    this.horniness = 0;
                    this.hungerMAX = 55;
                    this.hunger = 55;
                    this.sustenance = 0;
                    this.suckling = false;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 1.35; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 0;
                    this.xAdjustment = 0;
                }
                else
                {
                    this.sex = "Male";
                    this.magicalResistance = 0;
                    this.heatResistance = -2.5;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = Math.floor(Math.random() * 8) + 15;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 2.4;
                    this.rangeOfSight = 640; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                    this.engagementRadius = 44;
                    this.sizeRadius = 17;
                    this.negateArmour = 0;
                    this.attackWait = 1.5;
                    this.horniness = 0;
                    this.hungerMAX = 25;
                    this.hunger = 25;
                    this.sustenance = 0;
                    this.suckling = false;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 1.55; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 0;
                    this.xAdjustment = 0;
                }
            }
            else if (this.alpha == "baby")
            {
                this.magicalResistance = 0;
                this.heatResistance = -2.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 2) + 1;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 1.5;
                this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 10;
                this.sizeRadius = 9;
                this.negateArmour = 0;
                this.attackWait = 0.5;
                this.horniness = 0;
                this.hungerMAX = 10;
                this.hunger = 10;
                this.sustenance = 0;

                //alpha has a larger size body and skills.
                this.alphaSize = 0.65; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = -2.5;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = Math.floor(Math.random() * 5) + 7;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 2;
                this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 25;
                this.sizeRadius = 13.75;
                this.negateArmour = 0;
                this.attackWait = 1.5;
                this.horniness = 0;
                this.hungerMAX = 20;
                this.hunger = 20;
                this.sustenance = 0;
                this.suckling = false;

                //alpha has a larger size body and skills.
                this.alphaSize = 1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Fletter")
        {
            this.damageFrame = "manual";
            this.team = "herd";
            this.baseTeam = this.team;
            this.flying = true;

            this.magicalResistance = 0;
            this.heatResistance = 0;
            this.attackStyle = "chunked";
            this.attackRate = 0;  //this is for rapid style combat only.
            this.healthMAX = 2.2;
            this.health = this.healthMAX;
            this.armour = 0;
            this.speed = 4.1;
            this.rangeOfSight = 900; //This is just to set the variable initially. The rest is variable.
            this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
            this.engagementRadius = 22;
            this.sizeRadius = 11;
            this.negateArmour = 0;
            this.attackWait = 1.8;
            this.hungerMAX = 9;
            this.hunger = 9;
            this.consume = false;

            //alpha has a larger size body and skills.
            this.alphaSize = 1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
            // this is the adjustment the alpha type of Etyr needs to be centered.
            this.yAdjustment = 0;
            this.xAdjustment = 0;

        }
        else if (this.type == "Ardil")
        {
            this.damageFrame = "manual";
            this.team = "herd";
            if (this.ID == "playerSummonedArdil")
            {
                this.team = "player";
            }
            else if (this.ID == "Irene's Pet Ardil")
            {
                this.team = "Kel";
            }
            this.baseTeam = this.team;
            this.sex = "Young";

            if (this.alpha == true)
            {
                if (Math.round(Math.random()))
                {
                    this.sex = "Female";
                    this.magicalResistance = 0;
                    this.heatResistance = -1;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = 4;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 3;
                    this.rangeOfSight = 800; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                    this.engagementRadius = 24;
                    this.sizeRadius = 17;
                    this.negateArmour = 0;
                    this.attackWait = 3;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 1.65; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 0;
                    this.xAdjustment = 0;
                }
                else
                {
                    this.sex = "Male";
                    this.magicalResistance = 0;
                    this.heatResistance = -1;
                    this.attackStyle = "chunked";
                    this.attackRate = 0;  //this is for rapid style combat only.
                    this.healthMAX = 3;
                    this.health = this.healthMAX;
                    this.armour = 0;
                    this.speed = 4;
                    this.rangeOfSight = 800; //This is just to set the variable initially. The rest is variable.
                    this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                    this.engagementRadius = 24;
                    this.sizeRadius = 14;
                    this.negateArmour = 0;
                    this.attackWait = 2;

                    //alpha has a larger size body and skills.
                    this.alphaSize = 1.45; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                    // this is the adjustment the alpha type of Etyr needs to be centered.
                    this.yAdjustment = 0;
                    this.xAdjustment = 0;
                }
            }
            else if (this.alpha == "baby")
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 0.5;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 2.75;
                this.rangeOfSight = 700; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 24;
                this.sizeRadius = 7;
                this.negateArmour = 0;
                this.attackWait = 2.4;

                //alpha has a larger size body and skills.
                this.alphaSize = 0.65; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 1;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.4;
                this.rangeOfSight = 800; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.05; // 0.01 is a standard turn speed.
                this.engagementRadius = 24;
                this.sizeRadius = 11;
                this.negateArmour = 0;
                this.attackWait = 2;

                //alpha has a larger size body and skills.
                this.alphaSize = 1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Lizard")
        {
            this.damageFrame = "manual";
            this.team = "herd";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 1.5;
                this.health = this.healthMAX;
                this.armour = 0.25;
                this.speed = 2.5;
                this.rangeOfSight = 250; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 10;
                this.sizeRadius = 4;
                this.negateArmour = 0;
                this.attackWait = 0.01;

                //alpha has a larger size body and skills.
                this.alphaSize = 2; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 0.5;
                this.health = this.healthMAX;
                this.armour = 0.1;
                this.speed = 2;
                this.rangeOfSight = 250; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 10;
                this.sizeRadius = 2;
                this.negateArmour = 0;
                this.attackWait = 0.01;

                //alpha has a larger size body and skills.
                this.alphaSize = 1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Conejo")
        {
            this.damageFrame = "manual";
            this.team = "herd";
            this.baseTeam = this.team;
            if (this.ID == "docile")
            {
                this.team = "docile";
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 2.5;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.33;
                this.rangeOfSight = 240; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 15;
                this.sizeRadius = 6;
                this.negateArmour = 0;
                this.attackWait = 4;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.4; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 1;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 2.9;
                this.rangeOfSight = 190; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 14;
                this.sizeRadius = 4;
                this.negateArmour = 0;
                this.attackWait = 4;

                //alpha has a larger size body and skills.
                this.alphaSize = 1; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Tunsk")
        {
            this.damageFrame = "manual";
            this.team = "herd";
            this.baseTeam = this.team;
            if (Math.random() <= 0.49)
            {
                this.tunskTurn = 1;
            }
            else
            {
                this.tunskTurn = -1
            }

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 4;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 3.1;
                this.rangeOfSight = 350; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 10;
                this.sizeRadius = 5;
                this.negateArmour = 0;
                this.attackWait = 0.01;

                //alpha has a larger size body and skills.
                this.alphaSize = 2.5; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
            else
            {
                this.magicalResistance = 0;
                this.heatResistance = 0;
                this.attackStyle = "chunked";
                this.attackRate = 0;  //this is for rapid style combat only.
                this.healthMAX = 3;
                this.health = this.healthMAX;
                this.armour = 0;
                this.speed = 2.75;
                this.rangeOfSight = 300; //This is just to set the variable initially. The rest is variable.
                this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                this.engagementRadius = 10;
                this.sizeRadius = 4;
                this.negateArmour = 0;
                this.attackWait = 0.01;

                //alpha has a larger size body and skills.
                this.alphaSize = 1.7; //this multiplies the draw image skew numbers by 1.5 so that this unit is 1.5 times as large as the original.
                // this is the adjustment the alpha type of Etyr needs to be centered.
                this.yAdjustment = 0;
                this.xAdjustment = 0;
            }
        }
        else if (this.type == "Torper")
        {
            this.damageFrame = "automatic";
            this.effect = "poisonIII";
            this.team = "torperia";
            this.flying = true;
            this.baseTeam = this.team;

            if (this.alpha == true)
            {
                this.magicalResistance = 0;
                this.heatResistance = -1;
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
                this.heatResistance = -1;
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
            this.customEXP = false;
            this.team = this.ultra.faction;
            this.baseTeam = this.team;

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
            if (typeof(this.ultra.rot) != "undefined")
            {
                this.rotation = this.ultra.rot;
            }
            this.ranged = this.ultra.ranged[0];
            this.outfit = this.ultra.outfit[0];
            this.weapon = this.ultra.weapon[0];
            this.magicalResistance = 0;
            this.heatResistance = 0;
            this.attackStyle = "chunked";
            this.attackRate = 0;  //this is for rapid style combat only.
            this.healthMAX = (Math.floor(Math.random() * 4) * 4) + 0.1;
            this.health = this.healthMAX;
            this.armour = this.ultra.outfit[1];
            this.speed = 0.65 + (Math.floor(Math.random() * 12) / 10);
            this.rangeOfSight = 500; //This is just to set the variable initially. The rest is variable.
            this.rotationSpeed = 0.15; // 0.01 is a standard turn speed.
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
            this.team = this.ultra.faction;
            this.baseTeam = this.team;

            //STATS (non-variable)
            if (typeof(this.ultra.rot) != "undefined")
            {
                this.rotation = this.ultra.rot;
            }
            this.ranged = this.ultra.ranged[0];
            this.con = this.ultra.con;
            this.outfit = this.ultra.outfit[0];
            this.weapon = this.ultra.weapon[0];
            this.magicalResistance = 0;
            this.heatResistance = 0;
            this.attackStyle = "chunked";
            this.attackRate = 0;  //this is for rapid style combat only.
            this.healthMAX = this.con * 4 + 0.1;
            this.health = this.healthMAX;
            this.armour = this.ultra.outfit[1];
            this.speed = this.ultra.speed;
            this.rangeOfSight = 650; //This is just to set the variable initially. The rest is variable.
            this.rotationSpeed = 0.15; // 0.01 is a standard turn speed.
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

                this.drops = [[new Item("etyrHide", this.X, this.Y), 2], [new Item("rawEtyrFlesh", this.X, this.Y), 2]];
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

                this.drops = [[new Item("etyrHide", this.X, this.Y), 1], [new Item("rawEtyrFlesh", this.X, this.Y), 1]];
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

                //this.deathChecker();
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
                if (Math.max(0, 60 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 104 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    (this.experience = 104 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("elderWalrusHide", this.X, this.Y), 1], [new Item("rawWalrusFlesh", this.X, this.Y), 4], [new Item("blubber", this.X, this.Y), 2], [new Item("elderWalrusTusks", this.X, this.Y), 1]];
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

                this.drops = [[new Item("walrusHide", this.X, this.Y), 1], [new Item("rawWalrusFlesh", this.X, this.Y), 2], [new Item("blubber", this.X, this.Y), 1], [new Item("walrusTusks", this.X, this.Y), 1]];
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
                    this.Attack(45, 32);
                    this.callForNearbyHelpFromType(160, "Walrus");
                }
                else
                {
                    this.Attack(12, 2);
                    this.callForNearbyHelpFromType(100, "Walrus");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();

                this.friendDecider();
                this.targeting();
                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

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
        //Tilk
        if (this.type == "Tilk")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 4.5 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 46 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (46 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawTilkFlesh", this.X, this.Y), 3], [new Item("lrgTilkTentacle", this.X, this.Y), 1 + Math.floor(Math.random() * 3)]];
            }
            else if (this.alpha == "massive")
            {
                if (Math.max(0, 8 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 136 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (136 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawTilkFlesh", this.X, this.Y), 14], [new Item("giantTilkTentacle", this.X, this.Y), 1 + Math.floor(Math.random() * 3)]];
            }
            else
            {
                if (Math.max(0, 2.5 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 26 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 26 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("rawTilkFlesh", this.X, this.Y), 2], [new Item("tilkTentacle", this.X, this.Y), 1 + Math.floor(Math.random() * 3)]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(1000, "mildly");
            }
            else if (this.alpha == "massive")
            {
                this.rangeOfSightCalculator(1100, "mildly");
            }
            else
            {
                this.rangeOfSightCalculator(900, "mildy");
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(3, 1.5);
                    this.callForNearbyHelpFromType(1200, "Tilk");
                }
                if (this.alpha == "massive")
                {
                    this.Attack(7, 4);
                    this.callForNearbyHelpFromType(1200, "Tilk");
                }
                else
                {
                    this.Attack(2, 0.5);
                    this.callForNearbyHelpFromType(1200, "Tilk");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    if (this.DTP() > this.rangeOfSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                }
                else if (this.target != "none")
                {
                    if (this.DTU(this.target) > this.baseSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowards(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }

            }
            else
            {
                //do stuff when a tilk dies...
                if (this.doOnDeathOnce == true)
                {
                    //track Deaths Of Certain Non-Unique Units During Certain Quests

                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(4, 0.1, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(2, 0.1, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        if (this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                        {
                            this.finalAttackCostume = true; //deal the damage!
                            this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                        }
                        this.flashAnimate(40, this.rotation, 1, [{image: theCrack, imgX: 896, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 762, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 620, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 478, imgY: 12, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}]);
                    }
                    else
                    {
                        this.flashAnimate(40, this.rotation, 1, [{image: theCrack, imgX: 896, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 762, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 620, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 478, imgY: 12, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}]);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.damageDealt = false;
                        this.flashAnimate(40, this.rotation, 1, [{image: theCrack, imgX: 896, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 762, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 620, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 478, imgY: 12, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}]);
                    }
                    else
                    {
                        this.flashAnimate(40, this.rotation, 1, [{image: theCrack, imgX: 758, imgY: 130, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 340, imgY: 125, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}]);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.flashAnimate(40, this.rotation, 1, [{image: theCrack, imgX: 896, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 762, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 620, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 478, imgY: 12, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}]);
                    }
                    else
                    {
                        this.flashAnimate(40, this.rotation, 1, [{image: theCrack, imgX: 896, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 762, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 620, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 478, imgY: 12, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}]);
                    }
                }
                else if (theCostume >= 3)
                {
                    if (this.attacking)
                    {
                        this.flashAnimate(40, this.rotation, 1, [{image: theCrack, imgX: 896, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 762, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 620, imgY: 14, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 478, imgY: 12, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}]);
                    }
                    else
                    {
                        this.flashAnimate(40, this.rotation, 1, [{image: theCrack, imgX: 485, imgY: 129, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}, {image: theCrack, imgX: 636, imgY: 130, portionW: 95, portionH: 94, adjX: -1 / 2 * 95 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 94 * this.alphaSize - this.yAdjustment, width: 95 * this.alphaSize, height: 94 * this.alphaSize}]);
                    }
                }
            }
            else
            {
                this.drawUnit(theCrack, 896, 130, 95, 94, -1/2 * 95 * this.alphaSize - this.xAdjustment, -1/2 * 94 * this.alphaSize - this.yAdjustment, 95 * this.alphaSize, 94 * this.alphaSize);
            }

        }

        //SPITTING MUD FLY
        if (this.type == "SpittingMudFly")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 4.5 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (10 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawMudflyFlesh", this.X, this.Y), 2]];
            }
            else if (this.alpha == "giant")
            {
                if (Math.max(0, 8 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (10 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawMudflyFlesh", this.X, this.Y), 9]];
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 8 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (10 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [];
            }
            else
            {
                if (Math.max(0, 2.5 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("rawMudflyFlesh", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(900, false);
            }
            else if (this.alpha == "giant")
            {
                this.rangeOfSightCalculator(1250, false);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(550, false);
            }
            else
            {
                this.rangeOfSightCalculator(800, false);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    //this.Attack(3, 1.5);
                    this.callForNearbyHelpFromType(900, "SpittingMudFly");
                }
                else if (this.alpha == "giant")
                {
                    //this.Attack(3, 1.5);
                    this.callForNearbyHelpFromType(1250, "SpittingMudFly");
                }
                else if (this.alpha == "baby")
                {
                    //this.Attack(3, 1.5);
                    this.callForNearbyHelpFromType(550, "SpittingMudFly");
                }
                else
                {
                    //this.Attack(2, 0.5);
                    this.callForNearbyHelpFromType(800, "SpittingMudFly");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.attacking = true;
                    if (this.DTP() > this.rangeOfSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        if (this.DTP() > 1/2 * this.rangeOfSight)
                        {
                            this.speed = this.keepSpeed * 0.75;
                            this.pointTowardsPlayer();
                            this.moveInRelationToPlayer();
                        }
                        else if (this.DTP() <= 180)
                        {
                            this.speed = this.keepSpeed * 1.25;
                            this.timeBetweenAttacks = new Date().getTime();
                            this.pointAwayFromPlayer();
                            this.moveInRelationToPlayer();
                        }
                        else
                        {
                            this.speed = this.keepSpeed;
                            this.pointTowardsPlayer();
                        }
                    }
                }
                else if (this.target != "none")
                {
                    this.attacking = true;
                    if (this.DTU(this.target) > this.baseSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        if (this.DTU(this.target) > 1/2 * this.rangeOfSight)
                        {
                            this.speed = this.keepSpeed * 0.75;
                            this.pointTowards(this.target);
                            this.moveInRelationToThing(this.target);
                        }
                        else if (this.DTU(this.target) <= 400)
                        {
                            this.speed = this.keepSpeed * 1.25;
                            this.timeBetweenAttacks = new Date().getTime();
                            this.pointAway(this.target);
                            this.moveInRelationToThing(this.target);
                        }
                        else
                        {
                            this.speed = this.keepSpeed;
                            this.pointTowards(this.target);
                        }
                    }
                }

            }
            else
            {
                //do stuff when a mud fly dies...
                if (this.doOnDeathOnce == true)
                {
                    //track Deaths Of Certain Non-Unique Units During Certain Quests

                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                {
                    this.costumeEngine(2, 0.05, false);
                }
                else
                {
                    theCostume = 0;
                    this.other = true;
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    this.flashAnimate(25, this.rotation, 1, [{image: lodo, imgX: 139, imgY: 46, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}, {image: lodo, imgX: 140, imgY: 68, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}, {image: lodo, imgX: 139, imgY: 117, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}, {image: lodo, imgX: 141, imgY: 94, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}]);
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        if (this.other == true)
                        {
                            magicList.push(new Magic({ID: "flySpit"}, false, false, this));
                            this.other = false;
                        }
                        this.flashAnimate(25, this.rotation, 1, [{image: lodo, imgX: 174, imgY: 46, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}, {image: lodo, imgX: 175, imgY: 68, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}, {image: lodo, imgX: 176, imgY: 94, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}, {image: lodo, imgX: 174, imgY: 116, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}]);
                    }
                    else
                    {
                        this.flashAnimate(25, this.rotation, 1, [{image: lodo, imgX: 139, imgY: 46, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}, {image: lodo, imgX: 140, imgY: 68, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}, {image: lodo, imgX: 139, imgY: 117, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}, {image: lodo, imgX: 141, imgY: 94, portionW: 18, portionH: 17, adjX: -1 / 2 * 18 * 2 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 17 * 2 * this.alphaSize - this.yAdjustment, width: 18 * 2 * this.alphaSize, height: 17 * 2 * this.alphaSize}]);
                    }
                }
            }
            else
            {
                this.drawUnit(lodo, 211, 46, 18, 17, -1/2 * 18 * this.alphaSize * 2 - this.xAdjustment, -1/2 * 17 * this.alphaSize * 2 - this.yAdjustment, 18 * this.alphaSize * 2, 17 * this.alphaSize * 2);
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

                this.drops = [[new Item("frichPelt", this.X, this.Y), 1], [new Item("rawFrichFlesh", this.X, this.Y), 1]];
            }
            else if (this.alpha == "massive")
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 33 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (33 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("frichPelt", this.X, this.Y), 4], [new Item("rawFrichFlesh", this.X, this.Y), 4]];
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

                this.drops = [[new Item("frichPelt", this.X, this.Y), 1], [new Item("rawFrichFlesh", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(431, "mildly");
            }
            else if (this.alpha == "massive")
            {
                this.rangeOfSightCalculator(525, "mildly");
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
                if (this.alpha == "massive")
                {
                    this.Attack(5, 2);
                    this.callForNearbyHelpFromType(505, "Frich");
                }
                else
                {
                    this.Attack(1, 1);
                    this.callForNearbyHelpFromType(350, "Frich");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }
            else
            {
                //do stuff when a frich dies...
                if (this.doOnDeathOnce == true)
                {
                    //track Deaths Of Certain Non-Unique Units During Certain Quests
                    if (this.alpha == "massive")
                    {
                        quests.huntingWagerKillCount += 1;
                    }

                    this.doOnDeathOnce = false;
                }
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
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(2, 0.03, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

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
        //MOUNTAIN FRICH
        if (this.type == "MountainFrich")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 41 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (41 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("mountainFrichPelt", this.X, this.Y), 2], [new Item("rawMountainFrichFlesh", this.X, this.Y), 2]];
            }
            else if (this.alpha == "massive")
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 55 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (55 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("mountainFrichPelt", this.X, this.Y), 4], [new Item("rawMountainFrichFlesh", this.X, this.Y), 4]];
            }
            else
            {
                if (Math.max(0, 2 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 30 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 30 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("mountainFrichPelt", this.X, this.Y), 1], [new Item("rawMountainFrichFlesh", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(625, "mildly");
            }
            else if (this.alpha == "massive")
            {
                this.rangeOfSightCalculator(725, "mildly");
            }
            else
            {
                this.rangeOfSightCalculator(525, "mildy");
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(7, 3);
                    this.callForNearbyHelpFromType(600, "MountainFrich");
                }
                if (this.alpha == "massive")
                {
                    this.Attack(10, 4);
                    this.callForNearbyHelpFromType(700, "MountainFrich");
                }
                else
                {
                    this.Attack(5, 2);
                    this.callForNearbyHelpFromType(500, "MountainFrich");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }
            else
            {
                //do stuff when a frich dies...
                if (this.doOnDeathOnce == true)
                {
                    //track Deaths Of Certain Non-Unique Units During Certain Quests


                    this.doOnDeathOnce = false;
                }
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
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(2, 0.03, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1529, 3, 83, 33, -55 - this.xAdjustment, -16 - this.yAdjustment, 83 * this.alphaSize, 33 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 1290, 5, 83, 33, -55 - this.xAdjustment, -16 - this.yAdjustment, 83 * this.alphaSize, 33 * this.alphaSize);
                    }
                }
                else if (theCostume >= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1641, 3, 83, 33, -55 - this.xAdjustment, -18 - this.yAdjustment, 83 * this.alphaSize, 33 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 1402, 5, 83, 33, -55 - this.xAdjustment, -16 - this.yAdjustment, 83 * this.alphaSize, 33 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(oldverse, 1742, 5, 83, 33, -55 - this.xAdjustment, -16 - this.yAdjustment, 83 * this.alphaSize, 33 * this.alphaSize);
            }

        }
        //PELCRID
        if (this.type == "Pelcrid")
        {
            //Set Drops and experience

                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 13 * this.alphaSize * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (13 * this.alphaSize * ((player.getIntelligence() / 50) + 1)) / 10;
                }

            if (this.alphaSize > 5)
            {
                this.drops = [[new Item("pelcridOozeRemains", this.X, this.Y), Math.floor(this.alphaSize / 5)]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            this.rangeOfSightCalculator(245 + 15 * this.alphaSize, true);

            //AI
            if (this.alive == true)
            {
                //pelcrids grow when in contact with fire
                if (new Date().getTime() - this.burningTime <= 9000 && this.other < new Date().getTime())
                {
                    this.alphaSize = Math.min(20, this.alphaSize + 1);
                    this.burningTime = 0;

                    //stats level up!
                    this.healthMAX += 3;
                    this.health = this.healthMAX;
                    this.armour += 0.5;
                    this.keepSpeed += 0.02;
                    this.speed += 0.02;
                    this.engagementRadius += 6.75;
                    this.sizeRadius += 2.05;
                    this.negateArmour += 0.45;

                    //this causes a delay so that level ups do not happen multiple times in the same event.
                    this.other = new Date().getTime() + 3000;
                }
                else if (new Date().getTime() - this.frozenTime <= 4500 && this.other < new Date().getTime()) //ice hurts pelcrids
                {
                    this.frozenTime = 0;
                    this.health = Math.max(0, this.health - 12.5);

                    //this causes a delay so that damage by ice does not happen multiple times in the same event.
                    this.other = new Date().getTime() + 2000;
                }

                this.Attack(this.alphaSize, 2.35 + 0.9 * this.alphaSize);
                this.callForNearbyHelpFromType(1245 + 15 * this.alphaSize, "Pelcrid");

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    if (this.DTP() > this.rangeOfSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                }
                else if (this.target != "none")
                {
                    if (this.DTU(this.target) > this.baseSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowards(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }

            }
            else
            {
                //do stuff when a pelcrid dies...
                if (this.doOnDeathOnce == true)
                {

                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS
            var szx = 1.7;
            if (this.alive == true)
            {
                if (!this.moving && !this.attacking) //If not moving and not attacking initiate standing animation...
                {
                    this.costume = 0;
                }
                else if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(2, 0.10, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(3, 0.15, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 560, 92, 43, 28, -1/2 * 43 * (this.alphaSize / 5) * szx - this.xAdjustment, -1/2 * 28 * (this.alphaSize / 5) * szx - this.yAdjustment, 43 * (this.alphaSize / 5) * szx, 28 * (this.alphaSize / 5) * szx);
                    }
                    else
                    {
                        this.drawUnit(nognog, 560, 92, 43, 28, -1/2 * 43 * (this.alphaSize / 5) * szx - this.xAdjustment, -1/2 * 28 * (this.alphaSize / 5) * szx - this.yAdjustment, 43 * (this.alphaSize / 5) * szx, 28 * (this.alphaSize / 5) * szx);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 450, 89, 43, 28, -1/2 * 43 * (this.alphaSize / 5) * szx - this.xAdjustment, -1/2 * 28 * (this.alphaSize / 5) * szx - this.yAdjustment, 43 * (this.alphaSize / 5) * szx, 28 * (this.alphaSize / 5) * szx);
                    }
                    else
                    {
                        this.drawUnit(nognog, 454, 89, 43, 28, -1/2 * 43 * (this.alphaSize / 5) * szx - this.xAdjustment, -1/2 * 28 * (this.alphaSize / 5) * szx - this.yAdjustment, 43 * (this.alphaSize / 5) * szx, 28 * (this.alphaSize / 5) * szx);
                    }
                }
                else if (theCostume >= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 494, 87, 56, 29, -1/2 * 56 * (this.alphaSize / 5) * szx - this.xAdjustment, -1/2 * 29 * (this.alphaSize / 5) * szx - this.yAdjustment, 56 * (this.alphaSize / 5) * szx, 29 * (this.alphaSize / 5) * szx);
                    }
                    else
                    {
                        this.drawUnit(nognog, 560, 92, 43, 28, -1/2 * 43 * (this.alphaSize / 5) * szx - this.xAdjustment, -1/2 * 28 * (this.alphaSize / 5) * szx - this.yAdjustment, 43 * (this.alphaSize / 5) * szx, 28 * (this.alphaSize / 5) * szx);
                    }
                }
            }
            else
            {
                this.drawUnit(nognog, 606, 94, 38, 24, -1/2 * 38 * (this.alphaSize / 5) * szx - this.xAdjustment, -1/2 * 24 * (this.alphaSize / 5) * szx - this.yAdjustment, 38 * (this.alphaSize / 5) * szx, 24 * (this.alphaSize / 5) * szx);
            }
        }
        //OOLID
        if (this.type == "Oolid")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (10 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("medOolidOozeRemains", this.X, this.Y), 1]];
            }
            else if (this.alpha == "massive")
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 30 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (30 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("lrgOolidOozeRemains", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 2 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("smlOolidOozeRemains", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(700, "unrelenting");
            }
            else if (this.alpha == "massive")
            {
                this.rangeOfSightCalculator(700, "unrelenting");
            }
            else
            {
                this.rangeOfSightCalculator(700, "unrelenting");
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(8, 6);
                    this.callForNearbyHelpFromType(1000, "Oolid");
                }
                if (this.alpha == "massive")
                {
                    this.Attack(12, 9);
                    this.callForNearbyHelpFromType(1000, "Oolid");
                }
                else
                {
                    this.Attack(4, 3);
                    this.callForNearbyHelpFromType(1000, "Oolid");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    if (this.DTP() > this.rangeOfSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                }
                else if (this.target != "none")
                {
                    if (this.DTU(this.target) > this.baseSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowards(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }

            }
            else
            {
                //do stuff when a oolid dies...
                if (this.doOnDeathOnce == true)
                {

                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (!this.moving && !this.attacking) //If not moving and not attacking initiate standing animation...
                {
                    this.costume = 0;
                }
                else if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(4, 0.10, true);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(4, 0.15, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 38, 171, 38, 36, -1/2 * 38 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 38 * this.alphaSize, 36 * this.alphaSize, 1/2 * Math.PI);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 38, 171, 38, 36, -1/2 * 38 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 38 * this.alphaSize, 36 * this.alphaSize, 1/2 * Math.PI);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 5, 307, 40, 58, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 58 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 58 * this.alphaSize, 1/2 * Math.PI);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 38, 171, 38, 36, -1/2 * 38 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 38 * this.alphaSize, 36 * this.alphaSize * 1.08, 1/2 * Math.PI);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 65, 304, 40, 66, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 66 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 66 * this.alphaSize, 1/2 * Math.PI);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 38, 171, 38, 36, -1/2 * 38 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 38 * this.alphaSize, 36 * this.alphaSize * 1.16, 1/2 * Math.PI);
                    }
                }
                else if (theCostume >= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 29, 79, 40, 94, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 94 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 94 * this.alphaSize, 1/2 * Math.PI);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 38, 171, 38, 36, -1/2 * 38 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 38 * this.alphaSize, 36 * this.alphaSize * 1.24, 1/2 * Math.PI);
                    }
                }
            }
            else
            {
                //this.drawUnit(theCrack, 38, 171, 38, 36, -1/2 * 38 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 38 * this.alphaSize, 36 * this.alphaSize);
            }
        }
        //GLUTID
        if (this.type == "Glutid")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 30 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (30 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("medGlutidOoze", this.X, this.Y), 1]];
            }
            else if (this.alpha == "massive")
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 50 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (50 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("lrgGlutidOoze", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 2 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 15 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 15 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("smlGlutidOoze", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(600, true);
            }
            else if (this.alpha == "massive")
            {
                this.rangeOfSightCalculator(600, true);
            }
            else
            {
                this.rangeOfSightCalculator(600, true);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(12, 8);
                    this.callForNearbyHelpFromType(860, "Glutid");
                }
                if (this.alpha == "massive")
                {
                    this.Attack(16, 12);
                    this.callForNearbyHelpFromType(860, "Glutid");
                }
                else
                {
                    this.Attack(8, 6);
                    this.callForNearbyHelpFromType(860, "Glutid");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    if (this.DTP() > this.rangeOfSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                }
                else if (this.target != "none")
                {
                    if (this.DTU(this.target) > this.baseSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowards(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }

            }
            else
            {
                //do stuff when a oolid dies...
                if (this.doOnDeathOnce == true)
                {

                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (!this.moving && !this.attacking) //If not moving and not attacking initiate standing animation...
                {
                    this.costume = 0;
                }
                else if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(6, 0.10, true);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(5, 0.15, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.25, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    if (this.moving)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.25, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment -5 * this.alphaSize, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.35, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.3, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment - 7.5 * this.alphaSize, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.45, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.35, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment - 10 * this.alphaSize, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.55, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.4, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment - 11.25 * this.alphaSize, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.6, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.45, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume >= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 743, 260, 78, 49, -1/2 * 78 * this.alphaSize - this.xAdjustment + 3, -1/2 * 49 * this.alphaSize - this.yAdjustment, 78 * this.alphaSize, 49 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.5, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(theCrack, 372, 268, 40, 37, - (1/2 * 40 * this.alphaSize), - (1/2 * 37 * this.alphaSize), 40 * this.alphaSize, 37 * this.alphaSize);
            }
        }
        //Bacteria
        if (this.type == "Bacteria")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                //AI

                if (typeof(this.ultra) != "undefined")
                {
                    this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                }

            }
            else
            {
                this.health = this.healthMAX;
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (!this.moving && !this.attacking) //If not moving and not attacking initiate standing animation...
                {
                    this.costume = 0;
                }
                else if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(6, 0.10, true);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(5, 0.15, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.25, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    if (this.moving)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.25, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment -5 * this.alphaSize, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.35, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.3, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment - 7.5 * this.alphaSize, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.45, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.35, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment - 10 * this.alphaSize, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.55, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.4, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment - 11.25 * this.alphaSize, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.6, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.45, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume >= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theCrack, 743, 260, 78, 49, -1/2 * 78 * this.alphaSize - this.xAdjustment + 3, -1/2 * 49 * this.alphaSize - this.yAdjustment, 78 * this.alphaSize, 49 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 312, 266, 41, 39, -1/2 * 41 * this.alphaSize * 1.25 - this.xAdjustment + 3, -1/2 * 39 * this.alphaSize * 1.25 - this.yAdjustment, 41 * this.alphaSize * 1.25, 39 * this.alphaSize * 1.5, 1/2 * Math.PI);
                        this.drawUnit(theCrack, 372, 265, 41, 39, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 39 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
            }
            else
            {
                //this.drawUnit(theCrack, 38, 171, 38, 36, -1/2 * 38 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 38 * this.alphaSize, 36 * this.alphaSize);
            }
        }
        //ULGOY
        if (this.type == "Ulgoy")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 25 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 139 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (139 * ((player.getIntelligence() / 50) + 1)) / 10;
                }
            }
            else if (this.alpha == "giant")
            {
                if (Math.max(0, 175 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 660 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (660 * ((player.getIntelligence() / 50) + 1)) / 10;
                }
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 5 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 8 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (8 * ((player.getIntelligence() / 50) + 1)) / 10;
                }
            }
            else
            {
                if (Math.max(0, 15 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 25 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 12 * ((player.getIntelligence() / 50) + 1) / 10;
                }
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(350, false);
            }
            else if (this.alpha == "giant")
            {
                this.rangeOfSightCalculator(600, false);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(300, false);
            }
            else
            {
                this.rangeOfSightCalculator(300, false);
            }

            //AI
            if (this.alive == true)
            {
                //An ulgoy must never move from its origin point because it is a plant.
                this.X = this.plantedX;
                this.Y = this.plantedY;

                if (this.alpha == true)
                {
                    this.Attack(19, 9);
                }
                else if (this.alpha == "giant")
                {
                    this.Attack(125, 60);
                }
                else if (this.alpha == "baby")
                {
                    this.Attack(4, 2);
                }
                else
                {
                    this.Attack(9, 4);
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                }

                if (this.target == player)
                {
                    if (this.DTP() <= this.rangeOfSight)
                    {
                        this.modeRequest = "active";
                    }
                    else
                    {
                        this.modeRequest = "waiting";
                    }
                }
                else if (this.target != "none")
                {
                    if (this.DTU(this.target) <= this.rangeOfSight)
                    {
                        this.modeRequest = "active";
                    }
                    else
                    {
                        this.modeRequest = "waiting";
                    }
                }

            }
            else
            {
                //do stuff when a frich dies...
                if (this.doOnDeathOnce == true)
                {

                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.modeRequest != this.mode) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(3, 0.5, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(10, 0.20, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else if (this.modeRequest != this.mode)
                    {
                        if (this.mode == "waiting" && this.modeRequest == "active")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        if (this.mode == "active" && this.modeRequest == "waiting")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }

                    }
                    else
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polpol, 225, 457, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 225, 457, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else if (this.modeRequest != this.mode)
                    {
                        this.drawUnit(polpol, 225, 457, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 225, 457, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else if (this.modeRequest != this.mode)
                    {
                        if (this.mode == "waiting" && this.modeRequest == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        if (this.mode == "active" && this.modeRequest == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        this.mode = this.modeRequest;
                    }
                    else
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polpol, 224, 506, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 224, 506, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else if (this.modeRequest != this.mode)
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polpol, 226, 537, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 226, 537, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else if (this.modeRequest != this.mode)
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume <= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polpol, 225, 568, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 225, 568, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else if (this.modeRequest != this.mode)
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume <= 6)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polpol, 272, 434, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 272, 434, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else if (this.modeRequest != this.mode)
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume <= 7)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polpol, 272, 469, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 272, 469, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else if (this.modeRequest != this.mode)
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume <= 8)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polpol, 274, 499, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 274, 499, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else if (this.modeRequest != this.mode)
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume <= 9)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polpol, 272, 524, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        this.drawUnit(polpol, 272, 524, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                    }
                    else if (this.modeRequest != this.mode)
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.mode == "waiting")
                        {
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 230, 433, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                        else if (this.mode == "active")
                        {
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                            this.drawUnit(polpol, 224, 480, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                        }
                    }
                }
            }
            else
            {
                this.drawUnit(polpol, 275, 555, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
                this.drawUnit(polpol, 275, 555, 48, 28, -1/2 * 48 * this.alphaSize - this.xAdjustment, -1/2 * 28 * this.alphaSize - this.yAdjustment, 48 * this.alphaSize, 28 * this.alphaSize);
            }

        }
        //BEES
        if (this.type == "Bees")
        {
            //Set Drops and experience

            if (Math.max(0, 0.2 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
            {
                this.experience = 3 * ((player.getIntelligence() / 50) + 1);
            }
            else
            {
                this.experience = 3 * ((player.getIntelligence() / 50) + 1) / 10;
            }

            this.drops = [[new Item("bee", this.X, this.Y), 1]];


            //RANGE OF SIGHT (anything related to range of sight)
            this.rangeOfSightCalculator(500, true);

            //AI
            if (this.alive == true)
            {
                this.flying = true;
                //Flying Insect Attack
                if (this.DTP() < this.sizeRadius)
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.timeBetweenAttacks = new Date().getTime();
                        player.health -= Math.max(0, 0.015 - Math.max(0, player.armourTotal - this.negateArmour));
                        if (Math.max(0, 0.015 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                        {
                            if (!player.resistDisease)
                            {
                                player.swollenI = true;
                                player.swollenTime = Math.max(player.swollenTime, 180);
                            }
                        }
                    }
                }
                this.callForNearbyHelpFromType(500, "Bees");

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.DTP() > 90 && typeof(this.ultra) != "undefined" && !this.disturbed)
                {
                    this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                }
                else
                {
                    if (this.DTP() > 4)
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                }
            }
            else
            {
                //do stuff when bees die...
                if (this.doOnDeathOnce == true)
                {
                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {

                this.costumeEngine(6, 0.23, false);


                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    this.drawUnit(poly, 42, 312, 79, 70, - this.xAdjustment - 1/2 * 79 * this.alphaSize, - this.yAdjustment - 1/2 * 70 * this.alphaSize, 79 * this.alphaSize, 70 * this.alphaSize);
                }
                else if (theCostume <= 1)
                {
                    this.drawUnit(poly, 112, 316, 79, 70, - this.xAdjustment - 1/2 * 79 * this.alphaSize, - this.yAdjustment - 1/2 * 70 * this.alphaSize, 79 * this.alphaSize, 70 * this.alphaSize);
                }
                else if (theCostume <= 2)
                {
                    this.drawUnit(poly, 198, 323, 79, 70, - this.xAdjustment - 1/2 * 79 * this.alphaSize, - this.yAdjustment - 1/2 * 70 * this.alphaSize, 79 * this.alphaSize, 70 * this.alphaSize);
                }
                else if (theCostume <= 3)
                {
                    this.drawUnit(poly, 271, 333, 79, 70, - this.xAdjustment - 1/2 * 79 * this.alphaSize, - this.yAdjustment - 1/2 * 70 * this.alphaSize, 79 * this.alphaSize, 70 * this.alphaSize);
                }
                else if (theCostume <= 4)
                {
                    this.drawUnit(poly, 342, 334, 79, 70, - this.xAdjustment - 1/2 * 79 * this.alphaSize, - this.yAdjustment - 1/2 * 70 * this.alphaSize, 79 * this.alphaSize, 70 * this.alphaSize);
                }
                else if (theCostume >= 5)
                {
                    this.drawUnit(poly, 410, 331, 79, 70, - this.xAdjustment - 1/2 * 79 * this.alphaSize, - this.yAdjustment - 1/2 * 70 * this.alphaSize, 79 * this.alphaSize, 70 * this.alphaSize);
                }
            }
        }
        //GOLGEMOFF
        if (this.type == "Golgemoff")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 27 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (27 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawGolgemoffFlesh", this.X, this.Y), 3], [new Item("golgemoffFeelers", this.X, this.Y), 2]];
            }
            else if (this.alpha == "massive")
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 84 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (84 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawGolgemoffFlesh", this.X, this.Y), 5], [new Item("golgemoffFeelers", this.X, this.Y), 3]];
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 1 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (1 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawGolgemoffFlesh", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 2 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("rawGolgemoffFlesh", this.X, this.Y), 2], [new Item("golgemoffFeelers", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(860, true);
            }
            else if (this.alpha == "massive")
            {
                this.rangeOfSightCalculator(1000, true);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(700, true);
            }
            else
            {
                this.rangeOfSightCalculator(800, true);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(1.5, 1);
                    this.callForNearbyHelpFromType(750, "Golgemoff");
                }
                else if (this.alpha == "massive")
                {
                    this.Attack(3, 2);
                    this.callForNearbyHelpFromType(700, "Golgemoff");
                }
                else if (this.alpha == "baby")
                {
                    this.Attack(0, 0.25);
                    this.callForNearbyHelpFromType(900, "Golgemoff");
                }
                else
                {
                    this.Attack(1, 0.5);
                    this.callForNearbyHelpFromType(700, "Golgemoff");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    if (this.DTP() > this.rangeOfSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                }
                else if (this.target != "none")
                {
                    if (this.DTU(this.target) > this.baseSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowards(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }

            }
            else
            {
                //do stuff when a golgemoff dies...
                if (this.doOnDeathOnce == true)
                {
                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(5, 0.15, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(5, 0.13, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(mofu, 938, 679, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 945, 283, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(mofu, 939, 742, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 938, 360, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(mofu, 939, 805, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 939, 440, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(mofu, 939, 870, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 936, 526, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
                    }
                }
                else if (theCostume >= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(mofu, 945, 283, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 935, 601, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(mofu, 938, 936, 67, 69, - this.xAdjustment - 1/2 * 67 * this.alphaSize, - this.yAdjustment - 1/2 * 69 * this.alphaSize, 67 * this.alphaSize, 69 * this.alphaSize);
            }

        }
        //ANTER
        if (this.type == "Anter") //giant ant
        {
            //Set Drops and experience
            if (this.alpha == true) //SOLDIER
            {
                if (Math.max(0, 5 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (20 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("anterInnards", this.X, this.Y), 2], [new Item("anterShell", this.X, this.Y), 1], [new Item("anterMandibles", this.X, this.Y), 1]];

                if (Math.round(Math.random()) == 1)
                {
                    this.drops.unshift([new Item("anterAcid", this.X, this.Y), 1]);
                }
            }
            else if (this.alpha == "massive") //ROYAL
            {
                if (Math.max(0, 8 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 60 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (60 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("anterInnards", this.X, this.Y), 5], [new Item("anterShell", this.X, this.Y), 2], [new Item("anterMandibles", this.X, this.Y), 1]];

                if (Math.round(Math.random()) == 1)
                {
                    this.drops.unshift([new Item("anterAcid", this.X, this.Y), 3]);
                }
            }
            else //WORKER
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 14 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 14 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("anterInnards", this.X, this.Y), 2], [new Item("anterShell", this.X, this.Y), 1], [new Item("anterMandibles", this.X, this.Y), 1]];

                if (Math.round(Math.random()) == 1)
                {
                    this.drops.unshift([new Item("anterAcid", this.X, this.Y), 1]);
                }
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(400, true);
            }
            else if (this.alpha == "massive")
            {
                this.rangeOfSightCalculator(500, true);
            }
            else
            {
                this.rangeOfSightCalculator(400, false);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(3, 3);
                    this.callForNearbyHelpFromType(400, "Anter");
                }
                else if (this.alpha == "massive")
                {
                    this.Attack(5, 4);
                    this.callForNearbyHelpFromType(500, "Anter");
                }
                else
                {
                    this.Attack(2, 2);
                    this.callForNearbyHelpFromType(400, "Anter");
                }

                if (this.target == player)
                {
                    if (this.DTP() > this.rangeOfSight)
                    {
                        this.mofuTargetFood = "none";
                        this.moving = false;
                        this.eating = false;

                        for (var i = 0; i < worldItems.length; i++) //look for food...
                        {
                            if (worldItems[i][0].utility == "food")
                            {
                                if (worldItems[i][0].hunger >= 1)
                                {
                                    if (this.distanceFinder(this, worldItems[i][0]) <= (this.rangeOfSight + 1200)) //go after nearby food.
                                    {
                                        if (this.mofuTargetFood == "none")
                                        {
                                            this.mofuTargetFood = worldItems[i][0];
                                        }
                                        else
                                        {
                                            if (this.distanceFinder(this, worldItems[i][0]) < this.distanceFinder(this, this.mofuTargetFood))
                                            {
                                                this.mofuTargetFood = worldItems[i][0];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (this.mofuTargetFood != "none")
                        {
                            if (this.distanceFinder(this, this.mofuTargetFood) <= this.engagementRadius)
                            {
                                this.eating = true;
                            }
                            else
                            {
                                this.eating = false;
                                this.pointTowards(this.mofuTargetFood);
                                this.moveInRelationToThing(this.mofuTargetFood, 1200);
                            }
                        }
                        else if (typeof(this.ultra) != "undefined")
                        {
                            this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                        }
                    }
                    else
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                }
                else if (this.target != "none")
                {
                    if (this.DTU(this.target) > this.baseSight)
                    {
                        this.mofuTargetFood = "none";
                        this.moving = false;
                        this.eating = false;

                        for (var i = 0; i < worldItems.length; i++) //look for food...
                        {
                            if (worldItems[i][0].utility == "food")
                            {
                                if (worldItems[i][0].hunger >= 1)
                                {
                                    if (this.distanceFinder(this, worldItems[i][0]) <= (this.rangeOfSight + 1200)) //go after nearby food.
                                    {
                                        if (this.mofuTargetFood == "none")
                                        {
                                            this.mofuTargetFood = worldItems[i][0];
                                        }
                                        else
                                        {
                                            if (this.distanceFinder(this, worldItems[i][0]) < this.distanceFinder(this, this.mofuTargetFood))
                                            {
                                                this.mofuTargetFood = worldItems[i][0];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (this.mofuTargetFood != "none")
                        {
                            if (this.distanceFinder(this, this.mofuTargetFood) <= this.engagementRadius)
                            {
                                this.eating = true;
                            }
                            else
                            {
                                this.eating = false;
                                this.pointTowards(this.mofuTargetFood);
                                this.moveInRelationToThing(this.mofuTargetFood, 1200);
                            }
                        }
                        else if (typeof(this.ultra) != "undefined")
                        {
                            this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                        }
                    }
                    else
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

            }
            else
            {
                //do stuff when a anter dies...
                if (this.doOnDeathOnce == true)
                {
                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(5, 0.15, false);
                }
                else if (this.attacking || this.eating) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(4, 0.14, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking || this.eating)
                    {
                        this.drawUnit(polpol, 13, 489, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polpol, 13, 489, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking || this.eating)
                    {
                        this.drawUnit(polpol, 13, 518, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polpol, 13, 458, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking || this.eating)
                    {
                        this.mofuFeastPrepped = true;
                        this.drawUnit(polpol, 13, 489, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polpol, 12, 426, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking || this.eating)
                    {
                        this.drawUnit(polpol, 13, 548, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
                        if (this.eating && !this.attacking)
                        {
                            if (this.mofuFeastPrepped == true)
                            {
                                for (var i = 0; i < worldItems.length; i++)
                                {
                                    if (worldItems[i][0] === this.mofuTargetFood)
                                    {
                                        this.mofuFood += 1;
                                        if (worldItems[i][0].ability == "poisonI" || worldItems[i][0].ability == "poisonII" || worldItems[i][0].ability == "poisonIII" || worldItems[i][0].ability == "poisonIV" || worldItems[i][0].ability == "poisonV")
                                        {
                                            this.health = 0;
                                        }
                                        if (worldItems[i][1] > 1)
                                        {
                                            worldItems[i][1] -= 1;
                                            break;
                                        }
                                        else
                                        {
                                            this.mofuTargetFood = "none";
                                            worldItems.splice(i, 1);
                                            break;
                                        }
                                    }
                                }
                                this.mofuFeastPrepped = false;
                            }
                        }
                    }
                    else
                    {
                        this.drawUnit(polpol, 13, 394, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
                    }
                }
                else if (theCostume >= 4)
                {
                    if (this.attacking || this.eating)
                    {
                        this.drawUnit(polpol, 13, 548, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polpol, 13, 361, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(polpol, 63, 489, 50, 30, - this.xAdjustment - 1/2 * 50 * this.alphaSize, - this.yAdjustment - 1/2 * 30 * this.alphaSize, 50 * this.alphaSize, 30 * this.alphaSize);
            }

        }
        //STONE GOLEM
        if (this.type == "StoneGolem")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 80 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 1200 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (1200 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [];
            }
            else if (this.alpha == "giant")
            {
                if (Math.max(0, 130 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 3333 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (3333 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [];
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 12 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 65 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (65 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                if (quests.lostGirlFound == false && quests.lostGirlQuest == true && this.ID == "Sleeping Stone")
                {
                    this.drops = [[new Item("natureCall", this.X, this.Y), 1]];
                }
                else
                {
                    this.drops = [];
                }
            }
            else
            {
                if (Math.max(0, 45 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 212 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 212 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(1500, false);
            }
            else if (this.alpha == "giant")
            {
                this.rangeOfSightCalculator(2000, false);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(650, false);
            }
            else
            {
                this.rangeOfSightCalculator(1000, false);
            }

            //AI
            if (this.alive == true)
            {
                if (this.disturbed == true)
                {
                    this.disturbedTime = new Date().getTime();
                    if (this.state != "resting")
                    {
                        if (this.DTP() <= this.engagementRadius + this.sizeRadius + this.engagementRadius + 65)
                        {
                            this.state = "pounding";
                        }
                        else
                        {
                            this.state = "throwing";
                        }

                        if (this.state == "pounding")
                        {
                            if (this.alpha == true)
                            {
                                this.Attack(50, 35);
                                this.sizeRadius = 35;
                            }
                            if (this.alpha == "giant")
                            {
                                this.Attack(76, 60);
                            }
                            if (this.alpha == "baby")
                            {
                                this.Attack(9, 4);
                                this.sizeRadius = 12;
                            }
                            else
                            {
                                this.Attack(34, 14);
                                this.sizeRadius = 24;
                            }

                            this.moveInRelationToPlayer();
                        }

                        this.callForNearbyHelpFromType(1000, "StoneGolem");
                        this.pointTowardsPlayer();
                    }
                }

                if (this.state == "resting")
                {
                    this.mobile = false;
                }
                else
                {
                    this.mobile = true;
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();
            }
            else
            {
                //do stuff when a Stone Golem dies...
                if (this.doOnDeathOnce == true)
                {

                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.disturbed == true && this.state == "resting") //The golem gets up once if you attack it.
                {
                    this.costumeEngine(6, 0.19, false);
                }
                else if (this.state == "resting")
                {
                    this.costume = 0;
                }
                else if (this.state == "throwing")
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > ((this.attackWait / 1.5) * 1000))
                    {
                        this.costumeEngine(6, 0.16, false);
                    }
                }
                else if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(4, 0.075, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (this.state == "pounding")
                    {
                        if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(3, 0.14, true);
                        }
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.state == "resting")
                    {
                        this.drawUnit(polypol, -2, 723, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else if (this.state == "throwing" || this.attacking && this.state == "pounding")
                    {
                        this.drawUnit(polypol, 1152, 1186, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(polypol, 815, 1185, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 185, 1138, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.state == "resting")
                    {
                        this.drawUnit(polypol, 205, 721, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else if (this.state == "throwing" || this.attacking && this.state == "pounding")
                    {
                        this.drawUnit(polypol, 1276, 1186, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 185, 1138, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.state == "resting")
                    {
                        this.drawUnit(polypol, 22, 926, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else if (this.state == "throwing" || this.attacking && this.state == "pounding")
                    {
                        this.drawUnit(polypol, 1419, 1186, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 989, 1185, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.state == "resting")
                    {
                        this.drawUnit(polypol, 197, 949, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else if (this.state == "throwing" || this.attacking && this.state == "pounding")
                    {
                        if (this.state == "throwing")
                        {
                            this.chargeReady = true;
                        }
                        this.drawUnit(polypol, 1419, 1186, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 185, 1138, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.state == "resting")
                    {
                        this.drawUnit(polypol, 5, 1135, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else if (this.state == "throwing")
                    {
                        if (this.chargeReady)
                        {
                            this.chargeReady = false;
                            magicList.push(new Magic({ID:"golemRock"}, false, false, this));
                        }
                        this.drawUnit(polypol, 1277, 1186, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 815, 1185, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                }
                else if (theCostume <= 5)
                {
                    if (this.state == "resting")
                    {
                        this.state = "transition";
                        this.drawUnit(polypol, 185, 1138, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else if (this.state == "throwing")
                    {
                        this.timeBetweenAttacks = new Date().getTime();
                        this.costume = 0;
                        this.drawUnit(polypol, 1150, 1186, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 185, 1138, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(polypol, 177, 955, 160, 164, -1/2 * 160 * this.alphaSize - this.xAdjustment, -1/2 * 164 * this.alphaSize - this.yAdjustment, 160 * this.alphaSize, 164 * this.alphaSize);
            }

        }
        //AVRAK
        if (this.type == "Avrak")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 15 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 90 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (90 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawAvrakFlesh", this.X, this.Y), 4], [new Item("avrakHide", this.X, this.Y), 3]];
            }
            else if (this.alpha == "giant")
            {
                if (Math.max(0, 34 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 432 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (432 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawAvrakFlesh", this.X, this.Y), 16], [new Item("avrakHide", this.X, this.Y), 11]];
            }
            else
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("rawAvrakFlesh", this.X, this.Y), 1], [new Item("avrakHide", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(950, "mildly");
            }
            else if (this.alpha == "giant")
            {
                this.rangeOfSightCalculator(1250, "mildly");
            }
            else
            {
                this.rangeOfSightCalculator(750, "mildy");
            }

            //AI
            if (this.alive == true)
            {
                if (this.charge != true)
                {
                    this.effect = "none";
                    if (this.alpha == true)
                    {
                        this.Attack(12, 6);
                        this.callForNearbyHelpFromType(650, "Avrak");
                    }
                    else if (this.alpha == "giant")
                    {
                        this.Attack(28, 12);
                        this.callForNearbyHelpFromType(650, "Avrak");
                    }
                    else
                    {
                        this.Attack(6, 2);
                        this.callForNearbyHelpFromType(2000, "Avrak");
                    }
                }
                else
                {
                    if (this.alpha == true)
                    {
                        this.Attack(0, 20);
                        this.callForNearbyHelpFromType(650, "Avrak");
                        this.effect = "smashbackII";
                    }
                    else if (this.alpha == "giant")
                    {
                        this.Attack(0, 55);
                        this.callForNearbyHelpFromType(650, "Avrak");
                        this.effect = "smashbackIII";
                    }
                    else
                    {
                        this.Attack(0, 9);
                        this.callForNearbyHelpFromType(2000, "Avrak");
                        this.effect = "smashbackI";
                    }
                }

                //Charge for special attack...
                if (new Date().getTime() - this.storeChargeTime > 8000)
                {
                    this.charge = true;
                }
                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }
            else
            {
                //do stuff when an avrak dies...
                if (this.doOnDeathOnce == true)
                {

                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(2, 0.12, false);
                }
                else if (this.attacking && this.charge) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1500))
                    {
                        this.costumeEngine(11, 0.35, true);
                    }
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(6, 0.20, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    this.chargeReady = false;
                    if (this.attacking && this.charge)
                    {
                        this.drawUnit(mofu, 584, 856, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 607, 418, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(mofu, 607, 418, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 259, 410, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking && this.charge)
                    {
                        if (this.chargeReady == true)
                        {
                            this.charge = false;
                            this.storeChargeTime = new Date().getTime();
                        }
                        this.drawUnit(mofu, 542, 1064, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 569, 652, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 257, 635, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking && this.charge)
                    {
                        this.drawUnit(mofu, 225, 1064, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 607, 418, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 607, 418, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking && this.charge)
                    {
                        this.drawUnit(mofu, 209, 1327, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 259, 410, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 257, 635, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking && this.charge)
                    {
                        this.drawUnit(mofu, 496, 1310, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 257, 635, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 607, 418, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
                else if (theCostume <= 5)
                {
                    if (this.attacking && this.charge)
                    {
                        this.drawUnit(mofu, 176, 1574, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 261, 839, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 257, 635, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
                else if (theCostume <= 6)
                {
                    if (this.attacking && this.charge)
                    {
                        this.drawUnit(mofu, 475, 1577, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 261, 839, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 607, 418, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
                else if (theCostume <= 7)
                {
                    if (this.attacking && this.charge)
                    {
                        this.drawUnit(mofu, 180, 1814, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 261, 839, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 257, 635, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
                else if (theCostume <= 8)
                {
                    if (this.attacking && this.charge)
                    {
                        this.drawUnit(mofu, 469, 1802, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 261, 839, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 607, 418, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
                else if (theCostume <= 9)
                {
                    if (this.attacking && this.charge)
                    {
                        this.drawUnit(mofu, 184, 2022, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 261, 839, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 257, 635, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
                else if (theCostume >= 10)
                {
                    if (this.attacking && this.charge)
                    {
                        this.chargeReady = true;
                        this.drawUnit(mofu, 494, 2022, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else if (this.attacking)
                    {
                        this.drawUnit(mofu, 261, 839, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 607, 418, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(mofu, 605, 210, 278, 224, -1/2 * 278 * this.alphaSize - this.xAdjustment, -1/2 * 224 * this.alphaSize - this.yAdjustment, 278 * this.alphaSize, 224 * this.alphaSize);
            }
        }
        //EVRAK
        if (this.type == "Evrak")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 25 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (25 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawEvrakFlesh", this.X, this.Y), 4], [new Item("evrakHide", this.X, this.Y), 3]];
            }
            if (this.alpha == "giant")
            {
                if (Math.max(0, 30 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 190 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (190 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawEvrakFlesh", this.X, this.Y), 16], [new Item("evrakHide", this.X, this.Y), 11]];
            }
            else
            {
                if (Math.max(0, 3 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("rawEvrakFlesh", this.X, this.Y), 1], [new Item("evrakHide", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(800, true);
            }
            else if (this.alpha == "giant")
            {
                this.rangeOfSightCalculator(1000, true);
            }
            else
            {
                this.rangeOfSightCalculator(700, true);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(3, 4);
                    this.callForNearbyHelpFromType(920, "Evrak");
                    this.callForNearbyHelpFromType(860, "Avrak");
                }
                else if (this.alpha == "giant")
                {
                    this.Attack(19, 11);
                    this.callForNearbyHelpFromType(920, "Evrak");
                    this.callForNearbyHelpFromType(860, "Avrak");
                }
                else
                {
                    this.Attack(1, 2.5);
                    this.callForNearbyHelpFromType(920, "Evrak");
                    this.callForNearbyHelpFromType(860, "Avrak");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(4, 0.075, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(4, 0.105, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(mofu, 944, 2256, 230, 211, - 1/2 * 230 * this.alphaSize - this.xAdjustment, - 1/2 * 211 * this.alphaSize - this.yAdjustment, 230 * this.alphaSize, 211 * this.alphaSize);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(mofu, 463, 2252, 230, 211, - 1/2 * 230 * this.alphaSize - this.xAdjustment, - 1/2 * 211 * this.alphaSize - this.yAdjustment, 230 * this.alphaSize, 211 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 730, 2250, 230, 211, - 1/2 * 230 * this.alphaSize - this.xAdjustment, - 1/2 * 211 * this.alphaSize - this.yAdjustment, 230 * this.alphaSize, 211 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(mofu, 944, 2256, 230, 211, - 1/2 * 230 * this.alphaSize - this.xAdjustment, - 1/2 * 211 * this.alphaSize - this.yAdjustment, 230 * this.alphaSize, 211 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 200, 2258, 230, 211, - 1/2 * 230 * this.alphaSize - this.xAdjustment, - 1/2 * 211 * this.alphaSize - this.yAdjustment, 230 * this.alphaSize, 211 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(mofu, 1171, 2264, 230, 211, - 1/2 * 230 * this.alphaSize - this.xAdjustment, - 1/2 * 211 * this.alphaSize - this.yAdjustment, 230 * this.alphaSize, 211 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 463, 2252, 230, 211, - 1/2 * 230 * this.alphaSize - this.xAdjustment, - 1/2 * 211 * this.alphaSize - this.yAdjustment, 230 * this.alphaSize, 211 * this.alphaSize);
                    }
                }
                else if (theCostume >= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(mofu, 940, 2258, 230, 211, - 1/2 * 230 * this.alphaSize - this.xAdjustment, - 1/2 * 211 * this.alphaSize - this.yAdjustment, 230 * this.alphaSize, 211 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 200, 2258, 230, 211, - 1/2 * 230 * this.alphaSize - this.xAdjustment, - 1/2 * 211 * this.alphaSize - this.yAdjustment, 230 * this.alphaSize, 211 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(mofu, 1420, 2290, 197, 167, - 1/2 * 197 * this.alphaSize - this.xAdjustment, - 1/2 * 167 * this.alphaSize - this.yAdjustment, 197 * this.alphaSize, 167 * this.alphaSize);
            }
        }
        //SHEHID
        if (this.type == "Shehid")
        {
            if (this.alive)
            {
                this.friendDecider();
                this.targeting();
            }
            //If it is attacked it will wake up.

            if (this.target != "none" && this.target != player)
            {
                this.dtu = this.DTU(this.target);

                if (this.disturbed == true && this.disturbedPrereq == true|| this.dtu <= this.baseSight)
                {
                    if (this.awake == 0 || this.formChange == "wake")
                    {
                        this.formChange = "wake";
                    }
                    else
                    {
                        this.formChange = false;
                    }

                    this.awake = 1;
                    this.disturbedPrereq = false;
                }

                //If the player is no longer being persued it will go to sleep (this is primarily my way of making it good against archers)
                if (this.dtu > this.baseSight)
                {
                    if (this.awake == 1 || this.formChange == "sleep")
                    {
                        this.formChange = "sleep";
                    }
                    else
                    {
                        this.formChange = false;
                    }
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.awake = 0;
                }
                //Armour is much greater while asleep
                if (this.awake == 0)
                {
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.disturbedPrereq = true;

                    if (this.alpha == true)
                    {
                        this.armour = 56;
                        this.heatResistance = 56;
                    }
                    else
                    {
                        this.armour = 30;
                        this.heatResistance = 30;
                    }
                }
            }
            else
            {
                this.dtp = this.DTP();

                if (this.disturbed == true && this.disturbedPrereq == true|| this.dtp <= this.rangeOfSight)
                {
                    if (this.awake == 0 || this.formChange == "wake")
                    {
                        this.formChange = "wake";
                    }
                    else
                    {
                        this.formChange = false;
                    }

                    this.awake = 1;
                    this.disturbedPrereq = false;
                }

                //If the player is no longer being persued it will go to sleep (this is primarily my way of making it good against archers)
                if (this.dtp > this.rangeOfSight)
                {
                    if (this.awake == 1 || this.formChange == "sleep")
                    {
                        this.formChange = "sleep";
                    }
                    else
                    {
                        this.formChange = false;
                    }
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.awake = 0;
                }
                //Armour is much greater while asleep
                if (this.awake == 0)
                {
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.disturbedPrereq = true;

                    if (this.alpha == true)
                    {
                        this.armour = 56;
                        this.heatResistance = 56;
                    }
                    else
                    {
                        this.armour = 30;
                        this.heatResistance = 30;
                    }
                }
            }

            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 20 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 77 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (77 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("shehidShellLrg", this.X, this.Y), 1], [new Item("shehidOozeLrg", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 10 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 38 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 38 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("shehidShellSml", this.X, this.Y), 1], [new Item("shehidOozeSml", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                if (this.awake == 0)
                {
                    this.rangeOfSightCalculator(65, false);
                }
                else
                {
                    this.rangeOfSightCalculator(285, "very");
                }
            }
            else
            {
                if (this.awake == 0)
                {
                    this.rangeOfSightCalculator(65, false);
                }
                else
                {
                    this.rangeOfSightCalculator(185, true);
                }
            }

            //AI
            if (this.alive == true && this.awake == 1 && this.formChange == false)
            {
                if (this.alpha == true)
                {
                    this.Attack(14, 6);
                    this.callForNearbyHelpFromType(250, "Shehid");
                }
                else
                {
                    this.Attack(7, 3);
                    this.callForNearbyHelpFromType(150, "Shehid");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.awake == 1)
                {
                    if (this.formChange == "wake")
                    {
                        this.costumeEngine(7, 0.025, false);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(3, 0.15, true);
                        }
                    }
                    else if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(4, 0.075, false);
                    }
                    else
                    {
                        this.drawUnit(polypol, 1010, 9, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else
                {
                    if (this.formChange == "sleep")
                    {
                        this.costumeEngine(7, 0.025, false);
                    }
                    else
                    {
                        this.drawUnit(polypol, 805, 3, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            if (this.formReset == true)
                            {
                                this.formChange = false;
                                this.formReset = false;
                            }
                            this.drawUnit(polypol, 805, 3, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                        else if (this.attacking)
                        {
                            this.drawUnit(polypol, 1010, 9, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(polypol, 1170, 11, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.formReset == true)
                        {
                            this.formChange = false;
                            this.formReset = false;
                        }
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(polypol, 1010, 9, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                }
                if (theCostume == 1)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(polypol, 840, 5, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                        else if (this.attacking)
                        {
                            this.drawUnit(polypol, 1211, 9, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(polypol, 1046, 9, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(polypol, 974, 9, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                }
                if (theCostume == 2)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(polypol, 873, 5, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                        else if (this.attacking)
                        {
                            this.drawUnit(polypol, 1260, 11, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(polypol, 1083, 10, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(polypol, 940, 7, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                }
                if (theCostume == 3)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(polypol, 906, 6, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(polypol, 1123, 9, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(polypol, 906, 6, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                }
                if (theCostume == 4)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(polypol, 940, 7, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(polypol, 873, 5, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                }
                if (theCostume == 5)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(polypol, 975, 8, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(polypol, 840, 5, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume >= 6)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(polypol, 1010, 9, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                            this.formReset = true;
                            this.armour = 0;
                            this.heatResistance = 0;
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(polypol, 805, 3, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
                            this.formReset = true;
                        }
                    }
                }
            }
            else
            {
                this.drawUnit(polypol, 1390, 12, 43, 40, -20 - this.xAdjustment, -22 - this.yAdjustment, 43 * this.alphaSize, 40 * this.alphaSize);
            }

        }
        //THUEG
        if (this.type == "Thueg")
        {
            if (this.alive)
            {
                this.friendDecider();
                this.targeting();
            }
            //If it is attacked it will wake up.

            if (this.target != "none" && this.target != player)
            {
                this.dtu = this.DTU(this.target);

                if (this.disturbed == true && this.disturbedPrereq == true || this.dtu <= this.baseSight)
                {
                    if (this.awake == 0 || this.formChange == "wake")
                    {
                        this.formChange = "wake";
                    }
                    else
                    {
                        this.formChange = false;
                    }

                    this.awake = 1;
                    this.disturbedPrereq = false;
                }

                //If the player is no longer being persued it will go to sleep (this is primarily my way of making it good against archers)
                if (this.dtu > this.baseSight)
                {
                    if (this.awake == 1 || this.formChange == "sleep")
                    {
                        this.formChange = "sleep";
                    }
                    else
                    {
                        this.formChange = false;
                    }
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.awake = 0;
                }
                //Armour is much greater while asleep
                if (this.awake == 0)
                {
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.disturbedPrereq = true;

                    this.resistances = ["burning", "blinded"];
                    if (this.alpha == true)
                    {
                        this.armour = 25;
                        this.heatResistance = 30;
                    }
                    else if (this.alpha == "baby")
                    {
                        this.armour = 5;
                        this.heatResistance = 10;
                    }
                    else
                    {
                        this.armour = 15;
                        this.heatResistance = 20;
                    }
                }
            }
            else
            {
                this.dtp = this.DTP();

                if (this.disturbed == true && this.disturbedPrereq == true|| this.dtp <= this.rangeOfSight)
                {
                    if (this.awake == 0 || this.formChange == "wake")
                    {
                        this.formChange = "wake";
                    }
                    else
                    {
                        this.formChange = false;
                    }

                    this.awake = 1;
                    this.disturbedPrereq = false;
                }

                //If the player is no longer being persued it will go to sleep (this is primarily my way of making it good against archers)
                if (this.dtp > this.rangeOfSight)
                {
                    if (this.awake == 1 || this.formChange == "sleep")
                    {
                        this.formChange = "sleep";
                    }
                    else
                    {
                        this.formChange = false;
                    }
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.awake = 0;
                }
                //Armour is much greater while asleep
                if (this.awake == 0)
                {
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.disturbedPrereq = true;

                    this.resistances = ["burning", "blinded"];
                    if (this.alpha == true)
                    {
                        this.armour = 25;
                        this.heatResistance = 30;
                    }
                    else if (this.alpha == "baby")
                    {
                        this.armour = 5;
                        this.heatResistance = 10;
                    }
                    else
                    {
                        this.armour = 15;
                        this.heatResistance = 20;
                    }
                }
            }

            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 20 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 92 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (92 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                if (player.getIntelligence() >= 25)
                {
                    this.drops = [[new Item("rawThuegTripe", this.X, this.Y), 2]];
                }
                else
                {
                    this.drops = [];
                }
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 20 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 2 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (2 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [];
            }
            else
            {
                if (Math.max(0, 10 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 23 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 23 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                if (player.getIntelligence() >= 25)
                {
                    this.drops = [[new Item("rawThuegTripe", this.X, this.Y), 1]];
                }
                else
                {
                    this.drops = [];
                }
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                if (this.awake == 0)
                {
                    this.rangeOfSightCalculator(250, false);
                }
                else
                {
                    this.rangeOfSightCalculator(1000, "very");
                }
            }
            else if (this.alpha == "baby")
            {
                if (this.awake == 0)
                {
                    this.rangeOfSightCalculator(100, false);
                }
                else
                {
                    this.rangeOfSightCalculator(360, false);
                }
            }
            else
            {
                if (this.awake == 0)
                {
                    this.rangeOfSightCalculator(175, false);
                }
                else
                {
                    this.rangeOfSightCalculator(800, true);
                }
            }

            //AI
            if (this.alive == true && this.awake == 1 && this.formChange == false)
            {
                var rndATK;
                //Determine which attack will take place when the timing is appropriate to do so.
                if (this.attackListo == "finished" || this.attackListo == "start")
                {
                    this.attackListo = "standby";
                    rndATK = Math.round(Math.random());
                    if (rndATK)
                    {
                        this.attackType = "bite";
                    }
                    else
                    {
                        this.attackType = "slash";
                    }
                }

                if (this.attackType == "bite")
                {
                    if (this.alpha == true)
                    {
                        this.negateArmour = 5;
                        this.attackWait = 1.80;
                        this.Attack(10, 8);
                        this.callForNearbyHelpFromType(600, "Thueg");
                    }
                    else if (this.alpha == "baby")
                    {
                        this.negateArmour = 0.5;
                        this.attackWait = 1.80;
                        this.Attack(1, 1.5);
                        this.callForNearbyHelpFromType(600, "Thueg");
                    }
                    else
                    {
                        this.negateArmour = 1.5;
                        this.attackWait = 1.80;
                        this.Attack(6, 4);
                        this.callForNearbyHelpFromType(600, "Thueg");
                    }
                }
                else
                {
                    if (this.alpha == true)
                    {
                        this.negateArmour = 3;
                        this.attackWait = 0.5;
                        this.Attack(3, 3);
                        this.callForNearbyHelpFromType(600, "Thueg");
                    }
                    else if (this.alpha == "baby")
                    {
                        this.negateArmour = 0;
                        this.attackWait = 0.5;
                        this.Attack(1, 1.25);
                        this.callForNearbyHelpFromType(600, "Thueg");
                    }
                    else
                    {
                        this.negateArmour = 0.5;
                        this.attackWait = 0.5;
                        this.Attack(2, 1.5);
                        this.callForNearbyHelpFromType(600, "Thueg");
                    }
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS
            var  szr = 2;
            if (this.alive == true)
            {
                if (this.awake == 1)
                {
                    if (this.formChange == "wake")
                    {
                        this.costumeEngine(5, 0.025, false);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if (this.attackType == "bite")
                        {
                            if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                            {
                                this.costumeEngine(6, 0.20, false);
                            }
                        }
                        else if (this.attackType == "slash")
                        {
                            if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                            {
                                this.costumeEngine(6, 0.15, true);
                            }
                        }
                    }
                    else if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(4, 0.075, false);
                    }
                    else //awake derp frame
                    {
                        this.drawUnit(nognog, 279, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //out of shell
                    }
                }
                else
                {
                    if (this.formChange == "sleep")
                    {
                        this.costumeEngine(5, 0.025, false);
                    }
                    else //sleeping frame
                    {
                        this.drawUnit(nognog, 0, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //fully in shell
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            if (this.formReset == true)
                            {
                                this.formChange = false;
                                this.formReset = false;
                            }
                            this.drawUnit(nognog, 0, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //fully in shell
                        }
                        else if (this.attacking)
                        {
                            if (this.attackType == "bite")
                            {
                                this.drawUnit(nognog, 279, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //out of shell
                            }
                            else if (this.attackType == "slash")
                            {
                                if (this.attackListo == "reverse")
                                {
                                    this.attackListo = "finished"; //this allows the random attack picking feature to select a new random attack type.
                                }
                                this.drawUnit(nognog, 279, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //out of shell
                            }
                        }
                        else
                        {
                            this.drawUnit(nognog, 0, 96, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                        }
                    }
                    else
                    {
                        if (this.formReset == true)
                        {
                            this.formChange = false;
                            this.formReset = false;
                        }
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(nognog, 279, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //out of shell
                        }
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(nognog, 55, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //#1
                        }
                        else if (this.attacking)
                        {
                            if (this.attackType == "bite")
                            {
                                this.drawUnit(nognog, 193, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                            }
                            else if (this.attackType == "slash")
                            {
                                this.drawUnit(nognog, 193, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                            }
                        }
                        else
                        {
                            this.drawUnit(nognog, 79, 95, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(nognog, 381, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //#3
                        }
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(nognog, 123, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //#2
                        }
                        else if (this.attacking)
                        {
                            if (this.attackType == "bite")
                            {
                                this.drawUnit(nognog, 580, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                            }
                            else if (this.attackType == "slash")
                            {
                                this.drawUnit(nognog, 279, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //out of shell
                            }
                        }
                        else
                        {
                            this.drawUnit(nognog, 170, 95, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(nognog, 123, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //#2
                        }
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(nognog, 381, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //#3
                        }
                        else if (this.attacking)
                        {
                            if (this.attackType == "bite")
                            {
                                this.drawUnit(nognog, 662, 51, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                            }
                            else if (this.attackType == "slash")
                            {
                                this.drawUnit(nognog, 381, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //#3
                            }
                        }
                        else
                        {
                            this.drawUnit(nognog, 263, 94, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(nognog, 55, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //#1
                        }
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(nognog, 279, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //out of shell
                            this.formReset = true;
                            this.armour = 0;
                            this.heatResistance = 0;
                            this.resistances = ["blinded"];
                        }
                        else if (this.attacking)
                        {
                            if (this.attackType == "bite")
                            {
                                this.drawUnit(nognog, 662, 51, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                            }
                            else if (this.attackType == "slash") //last frame for slash attack
                            {
                                this.drawUnit(nognog, 480, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                            }
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(nognog, 0, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //fully in shell
                            this.formReset = true;
                        }
                    }
                }
                else if (theCostume >= 5)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake") //just in case it goes over
                        {
                            this.drawUnit(nognog, 279, 48, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //out of shell
                        }
                        else if (this.attacking)
                        {
                            if (this.attackType == "bite")
                            {
                                this.attackListo = "finished";
                                this.drawUnit(nognog, 751, 54, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                            }
                            else if (this.attackType == "slash")
                            {
                                this.attackListo = "reverse"; //this means that when the animator loops back it will trigger the state "finished".
                                this.drawUnit(nognog, 480, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr);
                            }
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep") //just in case it goes over
                        {
                            this.drawUnit(nognog, 0, 49, 56, 37, -1/2 * 56 * szr * this.alphaSize - this.xAdjustment, -1/2 * 37 * szr * this.alphaSize - this.yAdjustment, 56 * this.alphaSize * szr, 37 * this.alphaSize * szr); //fully in shell
                        }
                    }
                }
            }
            else
            {
                this.drawUnit(nognog, 332, 93, 66, 50, -1/2 * 66 * szr * this.alphaSize - this.xAdjustment, -1/2 * 50 * szr * this.alphaSize - this.yAdjustment, 66 * this.alphaSize * szr, 50 * this.alphaSize * szr);
            }

        }
        //Grush
        if (this.type == "Grush")
        {
            if (this.alive)
            {
                this.friendDecider();
                this.targeting();
            }

            if (this.target != "none" && this.target != player)
            {
                //If it is attacked it will wake up.
                this.dtu = this.DTU(this.target);

                if (this.disturbed == true && this.disturbedPrereq == true || this.dtu <= this.baseSight)
                {
                    if (this.awake == 0 || this.formChange == "wake")
                    {
                        this.formChange = "wake";
                    }
                    else
                    {
                        this.formChange = false;
                    }

                    this.awake = 1;
                    this.disturbedPrereq = false;
                }

                //If the player is no longer being persued it will go to sleep (this is primarily my way of making it good against archers)
                if (this.dtu > this.baseSight)
                {
                    if (this.awake == 1 || this.formChange == "sleep")
                    {
                        this.formChange = "sleep";
                    }
                    else
                    {
                        this.formChange = false;
                    }
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.awake = 0;
                }
                //Armour is much greater while asleep
                if (this.awake == 0)
                {
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.disturbedPrereq = true;

                    if (this.alpha == true)
                    {
                        this.armour = 55;
                        this.resistances = ["blinded", "burning"];
                    }
                    else if (this.alpha == "giant")
                    {
                        this.armour = 75;
                        this.resistances = ["blinded", "burning"];
                    }
                    else if (this.alpha == "baby")
                    {
                        this.armour = 15;
                        this.resistances = ["blinded", "burning"];
                    }
                    else
                    {
                        this.armour = 35;
                        this.resistances = ["blinded", "burning"];
                    }
                }
            }
            else
            {
                //If it is attacked it will wake up.
                this.dtp = this.DTP();

                if (this.disturbed == true && this.disturbedPrereq == true || this.dtp <= this.rangeOfSight)
                {
                    if (this.awake == 0 || this.formChange == "wake")
                    {
                        this.formChange = "wake";
                    }
                    else
                    {
                        this.formChange = false;
                    }

                    this.awake = 1;
                    this.disturbedPrereq = false;
                }

                //If the player is no longer being persued it will go to sleep (this is primarily my way of making it good against archers)
                if (this.dtp > this.rangeOfSight)
                {
                    if (this.awake == 1 || this.formChange == "sleep")
                    {
                        this.formChange = "sleep";
                    }
                    else
                    {
                        this.formChange = false;
                    }
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.awake = 0;
                }
                //Armour is much greater while asleep
                if (this.awake == 0)
                {
                    this.attacking = false; // just in case...
                    this.disturbed = false;
                    this.disturbedPrereq = true;

                    if (this.alpha == true)
                    {
                        this.armour = 55;
                    }
                    else if (this.alpha == "giant")
                    {
                        this.armour = 75;
                    }
                    else if (this.alpha == "baby")
                    {
                        this.armour = 15;
                    }
                    else
                    {
                        this.armour = 35;
                    }
                }
            }

            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 9 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 95 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (95 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawGrushFlesh", this.X, this.Y), 6 + Math.floor(Math.random() * 3)], [new Item("grushFur", this.X, this.Y), 4 + Math.floor(Math.random() * 3)]];
            }
            else if (this.alpha == "giant")
            {
                if (Math.max(0, 18 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 1100 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (1100 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawGrushFlesh", this.X, this.Y), 12 + Math.floor(Math.random() * 7)], [new Item("grushFur", this.X, this.Y), 10 + Math.floor(Math.random() * 3)]];
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 1 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 4 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (4 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                if (Math.round(Math.random()))
                {
                    this.drops = [[new Item("rawGrushFlesh", this.X, this.Y), 1], [new Item("grushFur", this.X, this.Y), 1]];
                }
                else
                {
                    this.drops = [[new Item("rawGrushFlesh", this.X, this.Y), 1]];
                }
            }
            else
            {
                if (Math.max(0, 6 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 45 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 45 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("rawGrushFlesh", this.X, this.Y), 3], [new Item("grushFur", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                if (this.awake == 0)
                {
                    this.rangeOfSightCalculator(55, false);
                }
                else
                {
                    this.rangeOfSightCalculator(180, false);
                }
            }
            else if (this.alpha == "giant")
            {
                if (this.awake == 0)
                {
                    this.rangeOfSightCalculator(80, false);
                }
                else
                {
                    this.rangeOfSightCalculator(280, false);
                }
            }
            else if (this.alpha == "baby")
            {
                if (this.awake == 0)
                {
                    this.rangeOfSightCalculator(45, false);
                }
                else
                {
                    this.rangeOfSightCalculator(120, false);
                }
            }
            else
            {
                if (this.awake == 0)
                {
                    this.rangeOfSightCalculator(45, false);
                }
                else
                {
                    this.rangeOfSightCalculator(120, false);
                }
            }

            //AI
            if (this.alive == true && this.awake == 1 && this.formChange == false)
            {
                if (this.alpha == true)
                {
                    this.Attack(6, 3);
                }
                else if (this.alpha == "giant")
                {
                    this.Attack(8, 10);
                }
                else if (this.alpha == "baby")
                {
                    this.Attack(0.5, 0.5);
                }
                else
                {
                    this.Attack(4, 2);
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.awake == 1)
                {
                    if (this.formChange == "wake")
                    {
                        this.costumeEngine(4, 0.045, false);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(2, 0.15, true);
                        }
                    }
                    else if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(2, 0.060, false);
                    }
                    else
                    {
                        this.drawUnit(mofu, 690, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                    }
                }
                else
                {
                    if (this.formChange == "sleep")
                    {
                        this.costumeEngine(4, 0.045, false);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 3022, 233, 40, 42, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 42 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 42 * this.alphaSize);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            if (this.formReset == true)
                            {
                                this.formChange = false;
                                this.formReset = false;
                            }
                            this.drawUnit(oldverse, 3022, 233, 40, 42, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 42 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 42 * this.alphaSize);
                        }
                        else if (this.attacking)
                        {
                            this.drawUnit(mofu, 973, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                        }
                        else if (this.moving && !this.attacking)
                        {
                            this.drawUnit(mofu, 782, 3, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.formReset == true)
                        {
                            this.formChange = false;
                            this.formReset = false;
                        }
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(mofu, 690, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                        }
                    }
                }
                if (theCostume == 1)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(mofu, 546, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                        }
                        else if (this.attacking)
                        {
                            this.drawUnit(mofu, 1056, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * (72 - 4) * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                        }
                        else if (this.moving && !this.attacking)
                        {
                            this.drawUnit(mofu, 877, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(mofu, 619, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                        }
                    }
                }
                if (theCostume == 2)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(mofu, 620, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(mofu, 547, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                        }
                    }
                }
                if (theCostume == 3)
                {
                    if (this.awake == 1)
                    {
                        if (this.formChange == "wake")
                        {
                            this.drawUnit(mofu, 690, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
                            this.formReset = true;
                            this.armour = 0;
                        }
                    }
                    else
                    {
                        if (this.formChange == "sleep")
                        {
                            this.drawUnit(oldverse, 3022, 233, 40, 42, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 42 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 42 * this.alphaSize);
                            this.formReset = true;
                        }
                    }
                }
            }
            else
            {
                this.drawUnit(mofu, 1133, 1, 72, 72, -1/2 * 72 * this.alphaSize - this.xAdjustment, -1/2 * 72 * this.alphaSize - this.yAdjustment, 72 * this.alphaSize, 72 * this.alphaSize);
            }

        }
        //BROLLE WORMS
        if (this.type == "BrolleWorms")
        {
            //Set Drops and experience

            if (Math.max(0, 1 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
            {
                this.experience = 1 * ((player.getIntelligence() / 50) + 1);
            }
            else
            {
                this.experience = (1 * ((player.getIntelligence() / 50) + 1)) / 10;
            }

            this.drops = [];

            //RANGE OF SIGHT (anything related to range of sight)
            this.rangeOfSightCalculator(300, false);


            //AI
            if (this.alive == true)
            {
                this.Attack(0, 0.15);
                this.callForNearbyHelpFromType(425, "BrolleWorms");

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();
                //todo add a script to allow brolle worms to seek out dead bodies to feed upon and in doing so summoning more worms.


                if (this.target == player)
                {
                    if (this.DTP() > this.rangeOfSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                }
                else if (this.target != "none")
                {
                    if (this.DTU(this.target) > this.baseSight && typeof(this.ultra) != "undefined")
                    {
                        this.patrol(this.ultra.patrolStops, this.ultra.patrolLoop);
                    }
                    else
                    {
                        this.pointTowards(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }

            }
            else
            {
                //do stuff when a tilk dies...
                if (this.doOnDeathOnce == true)
                {
                    //track Deaths Of Certain Non-Unique Units During Certain Quests

                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(1, 0.1, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(1, 0.1, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0 || theCostume >= 0)
                {
                    this.flashAnimate(250, this.rotation, 1, [{image: lodo, imgX: 7, imgY: 78, portionW: 28, portionH: 24, adjX: -1 / 2 * 28 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 24 * this.alphaSize - this.yAdjustment, width: 28 * this.alphaSize, height: 24 * this.alphaSize}, {image: lodo, imgX: 7, imgY: 100, portionW: 28, portionH: 24, adjX: -1 / 2 * 28 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 24 * this.alphaSize - this.yAdjustment, width: 28 * this.alphaSize, height: 24 * this.alphaSize}, {image: lodo, imgX: 8, imgY: 126, portionW: 28, portionH: 24, adjX: -1 / 2 * 28 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 24 * this.alphaSize - this.yAdjustment, width: 28 * this.alphaSize, height: 24 * this.alphaSize}, {image: lodo, imgX: 7, imgY: 152, portionW: 28, portionH: 24, adjX: -1 / 2 * 28 * this.alphaSize - this.xAdjustment, adjY: -1 / 2 * 24 * this.alphaSize - this.yAdjustment, width: 28 * this.alphaSize, height: 24 * this.alphaSize}]);
                }

            }
            else
            {
                this.drawUnit(lodo, 12, 128, 20, 19, -1/2 * 20 * this.alphaSize - this.xAdjustment, -1/2 * 19 * this.alphaSize - this.yAdjustment, 20 * this.alphaSize, 19 * this.alphaSize);
            }

        }
        //VARN
        if (this.type == "Varn")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 24 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (24 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("varnPelt", this.X, this.Y), 2], [new Item("rawVarnFlesh", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 17 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 17 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("varnPelt", this.X, this.Y), 1], [new Item("rawVarnFlesh", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(525, "mildly");
            }
            else
            {
                this.rangeOfSightCalculator(450, "mildy");
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(5, 2);
                    this.callForNearbyHelpFromType(350, "Varn");
                }
                else
                {
                    this.Attack(2, 2);
                    this.callForNearbyHelpFromType(275, "Varn");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(3, 0.085, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(3, 0.110, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 3095, 254, 54, 32, -35 - this.xAdjustment, -22 - this.yAdjustment, 54 * this.alphaSize, 32 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(verse, 2933, 254, 54, 32, -35 - this.xAdjustment, -22 - this.yAdjustment, 54 * this.alphaSize, 32 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 3154, 254, 54, 32, -35 - this.xAdjustment, -21 - this.yAdjustment, 54 * this.alphaSize, 32 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(verse, 2985, 254, 54, 32, -35 - this.xAdjustment, -21 - this.yAdjustment, 54 * this.alphaSize, 32 * this.alphaSize);
                    }
                }
                else if (theCostume >= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 3214, 254, 54, 32, -35 - this.xAdjustment, -21 - this.yAdjustment, 54 * this.alphaSize, 32 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(verse, 3037, 254, 54, 32, -35 - this.xAdjustment, -21 - this.yAdjustment, 54 * this.alphaSize, 32 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(verse, 2929, 283, 54, 32, -35 - this.xAdjustment, -22 - this.yAdjustment, 54 * this.alphaSize, 32 * this.alphaSize);
            }
        }
        //SKOL
        if (this.type == "Skol")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 34 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (34 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawSkolFlesh", this.X, this.Y), 5], [new Item("skolPelt", this.X, this.Y), 4]];
            }
            else if (this.alpha == "massive")
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 140 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (140 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawSkolFlesh", this.X, this.Y), 10], [new Item("skolPelt", this.X, this.Y), 9]];
            }
            else
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 26 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 26 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("rawSkolFlesh", this.X, this.Y), 1], [new Item("skolPelt", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(625, true);
            }
            else if (this.alpha == "massive")
            {
                this.rangeOfSightCalculator(900, true);
            }
            else
            {
                this.rangeOfSightCalculator(575, true);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(13, 7);
                    this.callForNearbyHelpFromType(600, "Skol");
                }
                else if (this.alpha == "massive")
                {
                    this.Attack(35, 10);
                    this.callForNearbyHelpFromType(800, "Skol");
                }
                else
                {
                    this.Attack(5, 5);
                    this.callForNearbyHelpFromType(550, "Skol");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS
            var szx = 1.9
            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(6, 0.15, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(6, 0.110, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theng, 354, 2, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(theng, 62, 4, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theng, 3, 46, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(theng, 144, 3, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theng, 62, 47, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(theng, 223, 3, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theng, 144, 50, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(theng, 62, 4, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theng, 225, 52, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(theng, 4, 4, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                }
                else if (theCostume >= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(theng, 292, 52, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(theng, 289, 2, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
                    }
                }
            }
            else
            {
                this.drawUnit(theng, 356, 55, 53, 34, -1/2 * 53 * this.alphaSize * szx - this.xAdjustment, -1/2 * 34 * this.alphaSize * szx - this.yAdjustment, 53 * this.alphaSize * szx, 34 * this.alphaSize * szx);
            }
        }
        //BOULCHOM
        if (this.type == "Boulchom")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 110 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (67 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("boulchomPelt", this.X, this.Y), 1], [new Item("rawboulchomFlesh", this.X, this.Y), 2]];
                if (player.getIntelligence() >= 30)
                {
                    this.drops.push([new Item("boulchomLung", this.X, this.Y), 1]);
                }
            }
            else
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 17 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 17 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("boulchomPelt", this.X, this.Y), 1], [new Item("rawboulchomFlesh", this.X, this.Y), 1]];
                if (player.getIntelligence() >= 30)
                {
                    this.drops.push([new Item("boulchomLung", this.X, this.Y), 1]);
                }
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(1000, false);
            }
            else
            {
                this.rangeOfSightCalculator(900, false);
            }

            //AI
            if (this.alive == true)
            {
                if (showUnitAttackBubble)
                {
                    if (this.alpha)
                    {
                        this.attackBubble([[35, this.rotation, 0, this.sizeRadius + 31]]); //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                    }
                    else
                    {
                       this.attackBubble([[26, this.rotation, 0, this.sizeRadius + 23]]); //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                    }
                }

                if (this.alpha == true)
                {
                    this.Attack(23, 12);
                    this.callForNearbyHelpFromType(900, "Boulchom");
                }
                else
                {
                    this.Attack(12, 5);
                    this.callForNearbyHelpFromType(800, "Boulchom");
                }

                //if the charging creature becomes stuck on an obstacle it alters its engagement radius such that it thinks to unstick itself and it points towards its target again.
                if (!this.isChargeBlocked()) //if not trapped on a non-unit obstacle
                {
                    if (this.alpha)
                    {
                        this.engagementRadius = 247;
                    }
                    else
                    {
                        this.engagementRadius = 210;
                    }
                }
                else //if trapped on a non-unit obstacle
                {
                    if (this.target == player)
                    {
                        this.pointTowardsPlayer();
                    }
                    else if (this.target != "none" && typeof(this.target) != "undefined")
                    {
                        this.pointTowards(this.target);
                    }

                    if (this.alpha)
                    {
                        this.engagementRadius = this.sizeRadius + 13;
                    }
                    else
                    {
                        this.engagementRadius = this.sizeRadius + 8;
                    }
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.dtp = this.DTP();

                    if (this.dtp > this.engagementRadius && !this.doCharge)
                    {
                        this.attackWait = 0;
                        this.pointTowardsPlayer();
                    }
                    else if (this.dtp <= this.engagementRadius)
                    {
                        this.attackWait = 2.5;
                        this.doCharge = true;
                    }

                    if (this.doCharge && this.dtp >= this.chargeDist)
                    {
                        this.doCharge = false;
                    }
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none" && typeof(this.target) != "undefined")
                {
                    this.dtu = this.DTU(this.target);

                    if (this.dtu > this.engagementRadius && !this.doCharge)
                    {
                        this.attackWait = 0;
                        this.pointTowards(this.target);
                    }
                    else if (this.dtu <= this.engagementRadius)
                    {
                        this.attackWait = 2.5;
                        this.doCharge = true;
                    }

                    if (this.doCharge && this.dtu >= this.chargeDist)
                    {
                        this.doCharge = false;
                    }
                    this.moveInRelationToThing(this.target);
                }
            }

            //ANIMATIONS
            var szr = 1.5;
            if (this.alive == true)
            {
                if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(4, 0.125, true);
                    }
                }
                else if (this.moving) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(4, 0.085, false);
                }
                else
                {
                    this.drawUnit(nognog, 159, 194, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        if (this.stopAttacking)
                        {
                            this.attacking = false;
                        }

                        if (this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                        {
                            this.finalAttackCostume = true; //deal the damage!
                            this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                        }

                        this.drawUnit(nognog, 159, 194, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(nognog, 15, 193, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
                    }
                    else
                    {
                        this.drawUnit(nognog, 159, 194, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        if (!this.isChargeBlocked())
                        {
                            if (this.alpha)
                            {
                                if (this.attackBubble([[35, this.rotation, 0, this.sizeRadius + 31]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                            else
                            {
                                if (this.attackBubble([[26, this.rotation, 0, this.sizeRadius + 23]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                        }
                        else
                        {
                            if (this.alpha)
                            {
                                if (this.attackBubble([[21, this.rotation, 0, this.sizeRadius + 19]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                            else
                            {
                                if (this.attackBubble([[16, this.rotation, 0, this.sizeRadius + 14]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                        }
                        this.stopAttacking = true;

                        this.drawUnit(nognog, 229, 195, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
                    }
                    else
                    {
                        this.drawUnit(nognog, 93, 194, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        if (!this.isChargeBlocked())
                        {
                            if (this.alpha)
                            {
                                if (this.attackBubble([[35, this.rotation, 0, this.sizeRadius + 31]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                            else
                            {
                                if (this.attackBubble([[26, this.rotation, 0, this.sizeRadius + 23]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                        }
                        else
                        {
                            if (this.alpha)
                            {
                                if (this.attackBubble([[21, this.rotation, 0, this.sizeRadius + 19]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                            else
                            {
                                if (this.attackBubble([[16, this.rotation, 0, this.sizeRadius + 14]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                        }
                        this.stopAttacking = true;

                        this.drawUnit(nognog, 321, 227, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
                    }
                    else
                    {
                        this.drawUnit(nognog, 15, 193, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
                    }
                }
                else if (theCostume >= 3)
                {
                    if (this.attacking)
                    {
                        if (!this.isChargeBlocked())
                        {
                            if (this.alpha)
                            {
                                if (this.attackBubble([[35, this.rotation, 0, this.sizeRadius + 31]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                            else
                            {
                                if (this.attackBubble([[26, this.rotation, 0, this.sizeRadius + 23]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                        }
                        else
                        {
                            if (this.alpha)
                            {
                                if (this.attackBubble([[21, this.rotation, 0, this.sizeRadius + 19]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                            else
                            {
                                if (this.attackBubble([[16, this.rotation, 0, this.sizeRadius + 14]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                        }
                        this.stopAttacking = true;

                        this.drawUnit(nognog, 391, 229, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
                    }
                    else
                    {
                        this.drawUnit(nognog, 93, 194, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
                    }
                }
            }
            else
            {
                this.drawUnit(nognog, 475, 229, 46, 42, -1/2 * 46 * this.alphaSize * szr - this.xAdjustment, -1/2 * 42 * this.alphaSize * szr - this.yAdjustment, 46 * this.alphaSize * szr, 42 * this.alphaSize * szr);
            }
        }
        //Lombris
        if (this.type == "Lombris")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 245 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (245 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("lombrisFlesh", this.X, this.Y), 3]];
            }
            else
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 92 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 92 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("lombrisFlesh", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(700, false);
            }
            else
            {
                this.rangeOfSightCalculator(550, false);
            }

            //AI
            if (this.alive == true)
            {
                if (showUnitAttackBubble)
                {
                    if (this.alpha)
                    {
                        this.attackBubble([[35, this.rotation, 0, this.sizeRadius + 38], [26, this.rotation, 0, this.sizeRadius + 2]]); //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                    }
                    else
                    {
                        this.attackBubble([[15, this.rotation, 0, this.sizeRadius + 9], [12, this.rotation, 0, this.sizeRadius - 7]]); //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                    }
                }

                if (!this.attacking)
                {
                    this.underground = true;
                    this.resistances = ["blinded", "burning"];
                }
                else
                {
                    this.resistances = ["blinded"];
                }

                if (this.alpha == true)
                {
                    this.Attack(55, 35);
                    this.callForNearbyHelpFromType(200, "Lombris");
                }
                else
                {
                    this.Attack(19, 10);
                    this.callForNearbyHelpFromType(200, "Lombris");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    if (!this.attacking)
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                    else if (!this.attackBusy)
                    {
                        this.underground = true;
                        this.pointTowardsPlayer();
                    }
                    else
                    {
                        this.underground = false;
                    }
                }
                else if (this.target != "none" && typeof(this.target) != "undefined")
                {
                    if (!this.attacking)
                    {
                        this.pointTowards(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                    else if (!this.attackBusy)
                    {
                        this.underground = true;
                        this.pointTowards(this.target);
                    }
                    else
                    {
                        this.underground = false;
                    }
                }
            }

            //ANIMATIONS
            var szr = 1.5;
            if (this.alive == true)
            {
                if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.attackBusy = true;
                        this.costumeEngine(11, 0.125, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    this.emerge = true;

                    if (this.attacking)
                    {
                        this.attackBusy = true;
                        if (this.stopAttacking)
                        {
                            this.attackBusy = false;
                            this.attacking = false;
                        }
                        //draw nothing
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 524, 260, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 565, 260, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 604, 260, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        if (this.emerge)
                        {
                            this.drawUnit(nognog, 652, 260, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
                        }
                        else
                        {
                            this.drawUnit(nognog, 791, 259, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr); //on the way back
                        }
                    }
                }
                else if (theCostume <= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 746, 260, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
                    }
                }
                else if (theCostume <= 6)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 699, 259, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
                    }
                }
                else if (theCostume <= 7)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 648, 228, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
                    }
                }
                else if (theCostume <= 8)
                {
                    if (this.attacking)
                    {
                        if (this.emerge)
                        {
                            if (this.alpha)
                            {
                                if (this.attackBubble([[26, this.rotation, 0, this.sizeRadius + 30], [26, this.rotation, 0, this.sizeRadius + 2]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                            else
                            {
                                if (this.attackBubble([[15, this.rotation, 0, this.sizeRadius + 9], [12, this.rotation, 0, this.sizeRadius - 7]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                        }

                        this.drawUnit(nognog, 694, 226, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
                    }
                }
                else if (theCostume <= 9)
                {
                    if (this.attacking)
                    {
                        if (this.emerge)
                        {
                            if (this.alpha)
                            {
                                if (this.attackBubble([[26, this.rotation, 0, this.sizeRadius + 30], [26, this.rotation, 0, this.sizeRadius + 2]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                            else
                            {
                                if (this.attackBubble([[15, this.rotation, 0, this.sizeRadius + 9], [12, this.rotation, 0, this.sizeRadius - 7]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                        }
                        this.drawUnit(nognog, 746, 226, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
                    }
                }
                else if (theCostume >= 10)
                {
                    if (this.attacking)
                    {
                        if (this.emerge)
                        {
                            if (this.alpha)
                            {
                                if (this.attackBubble([[26, this.rotation, 0, this.sizeRadius + 30], [26, this.rotation, 0, this.sizeRadius + 2]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                            else
                            {
                                if (this.attackBubble([[15, this.rotation, 0, this.sizeRadius + 9], [12, this.rotation, 0, this.sizeRadius - 7]])) //[[radius, this.rotation, relativeAngle, distance], ["", "", "", ""], etc.]
                                {
                                    this.damageDealt = false;
                                }
                            }
                        }
                        if (this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                        {
                            this.finalAttackCostume = true; //deal the damage!
                            this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                        }
                        this.stopAttacking = true;
                        this.drawUnit(nognog, 799, 228, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
                    }

                    this.emerge = false;
                }
            }
            else
            {
                this.drawUnit(nognog, 829, 259, 57, 26, -1/2 * 57 * this.alphaSize * szr - this.xAdjustment, -1/2 * 26 * this.alphaSize * szr - this.yAdjustment, 57 * this.alphaSize * szr, 26 * this.alphaSize * szr);
            }
        }
        //NOG
        if (this.type == "Nog")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 10 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (10 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("nogSkin", this.X, this.Y), 1], [new Item("rawNogFlesh", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 6 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 6 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("nogSkin", this.X, this.Y), 1], [new Item("rawNogFlesh", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(525, true);
            }
            else
            {
                this.rangeOfSightCalculator(375, true);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(3, 1.5);
                    this.callForNearbyHelpFromType(350, "Varn");
                }
                else
                {
                    this.Attack(2, 1);
                    this.callForNearbyHelpFromType(275, "Varn");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(3, 0.085, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(3, 0.110, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 386, 296, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(nognog, 222, 297, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 457, 296, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(nognog, 304, 297, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 536, 296, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(nognog, 304, 297, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 610, 297, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(nognog, 304, 297, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
                else if (theCostume >= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 688, 297, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(nognog, 304, 297, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(nognog, 792, 764, 56, 39, -1/2 * 56 - this.xAdjustment, -1/2 * 39 - this.yAdjustment, 56 * this.alphaSize, 39 * this.alphaSize);
            }
        }
        //Hyeling Soldier
        if (this.type == "HyelingSoldier") //soldado de hielo
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 9 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 40 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (40 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                if (this.dropRND >= 0.85)
                {
                    this.drops = [[new Item("hyelingCleaver", this.X, this.Y), 1], [new Item("hyelingClaws", this.X, this.Y), 1], [new Item("rawHyelingFlesh", this.X, this.Y), 2]];
                }
                else
                {
                    if (this.dropRND >= 0.80)
                    {
                        this.drops = [[new Item("hyelingArmour", this.X, this.Y), 1], [new Item("hyelingClaws", this.X, this.Y), 1], [new Item("rawHyelingFlesh", this.X, this.Y), 2]];
                    }
                    else
                    {
                        this.drops = [[new Item("brokenHyelingCleaver", this.X, this.Y), 1], [new Item("hyelingClaws", this.X, this.Y), 1], [new Item("rawHyelingFlesh", this.X, this.Y), 2]];
                    }
                }
            }
            else
            {
                if (Math.max(0, 8 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 32 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 32 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                if (this.dropRND >= 0.92)
                {
                    this.drops = [[new Item("hyelingCleaver", this.X, this.Y), 1], [new Item("hyelingClaws", this.X, this.Y), 1], [new Item("rawHyelingFlesh", this.X, this.Y), 2]];
                }
                else
                {
                    if (this.dropRND >= 0.87)
                    {
                        this.drops = [[new Item("hyelingArmour", this.X, this.Y), 1], [new Item("hyelingClaws", this.X, this.Y), 1], [new Item("rawHyelingFlesh", this.X, this.Y), 2]];
                    }
                    else
                    {
                        this.drops = [[new Item("brokenHyelingCleaver", this.X, this.Y), 1], [new Item("hyelingClaws", this.X, this.Y), 1], [new Item("rawHyelingFlesh", this.X, this.Y), 2]];
                    }
                }
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(860, true);
            }
            else
            {
                this.rangeOfSightCalculator(820, true);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(8, 3);
                    this.callForNearbyHelpFromType(940, "HyelingSoldier");
                    this.callForNearbyHelpFromType(940, "Hyeling");
                }
                else
                {
                    this.Attack(7, 2.5);
                    this.callForNearbyHelpFromType(940, "HyelingSoldier");
                    this.callForNearbyHelpFromType(940, "Hyeling");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.action == "charging")
                {
                    if (this.target == player)
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                    else if (this.target != "none")
                    {
                        this.pointTowards(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }
                else if (this.action == "fleeing")
                {
                    if (this.target == player)
                    {
                        this.pointAwayFromPlayer();
                        this.moveInRelationToPlayer();
                    }
                    else if (this.target != "none")
                    {
                        this.pointAway(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }

                //BRAIN
                //if about to die run away
                this.action = "charging";

                if (this.health <= 1/4 * this.healthMAX)
                {
                    this.action = "fleeing";

                    if (this.DTP() <= 110 && shiftKey == true)
                    {
                        this.action = "charging";
                    }
                }
                else
                {
                    // If target persuing gets too close, turn and fight regardless of chances...
                    if (this.target == player)
                    {
                        if (player.health > this.health && player.weaponEquipped != "none" || player.armourTotal >= 6 && player.weaponEquipped != "none" || player.level > 15 || player.magicLevel > 1)
                        {
                            this.action = "fleeing";
                            this.isSameTypeNearby(this.X, this.Y, 940, this.type);
                            if (this.numberOfSameTypeNearby >= 1 && player.armourTotal < 8 && player.level <= 15 && player.magicLevel <= 1)
                            {
                                this.action = "charging";
                            }
                            else if (this.numberOfSameTypeNearby >= 3 && player.armourTotal <= 8.25 && player.level <= 30 && player.magicLevel <= 5)
                            {
                                this.action = "charging";
                            }
                        }
                        if (this.DTP() <= 175 && shiftKey == true)
                        {
                            this.action = "charging";
                        }
                    }
                    else if (this.target != "none")
                    {
                        if (this.target.health > this.health && this.target.team != "herd" || this.target.armour >= 6 && this.target.team != "herd")
                        {
                            this.action = "fleeing";
                            this.isSameTypeNearby(this.X, this.Y, 900, this.type);
                            if (this.numberOfSameTypeNearby >= 1 && this.target.armour < 8 && this.target.health < (3 * Math.max(this.health, 1/2 * this.healthMAX)))
                            {
                                this.action = "charging";
                            }
                            else if (this.numberOfSameTypeNearby >= 2 && this.target.armour <= 8 && this.target.health < (4 * Math.max(this.health, 1/2 * this.healthMAX)))
                            {
                                this.action = "charging";
                            }
                            else if (this.numberOfSameTypeNearby >= 3 && this.target.armour <= 8.25 && this.target.health < (5 * Math.max(this.health, 1/2 * this.healthMAX)))
                            {
                                this.action = "charging";
                            }
                            else if (this.numberOfSameTypeNearby >= 4 && this.target.armour <= 8.35 && this.target.health < (8 * Math.max(this.health, 1/2 * this.healthMAX)))
                            {
                                this.action = "charging";
                            }
                        }
                        if (this.DTU(this.target) <= 175 && this.target.speed >= this.speed)
                        {
                            this.action = "charging";
                        }
                    }
                }

                //sounds for circumstances
                if (this.target == player)
                {
                    if (this.isSameTypeNearby(this.X, this.Y, 310, this.type) && this.DTP() > this.rangeOfSight || this.X != this.plantedX && this.Y != this.plantedY && this.isSameTypeNearby(this.X, this.Y, 310, this.type) && !this.attacking)
                    {
                        this.voice([hyelingClick1, hyelingClick2, hyelingClick3], 2100, true);
                        this.voiceFrequency = 9 * this.dropRND + 2;
                    }
                    else if (this.action == "fleeing")
                    {
                        this.voice([hyelingPaincry1, hyelingPaincry2], 2100, true);
                        this.voiceFrequency = 4 * this.dropRND + 3.5;
                    }
                    else if (this.action == "charging")
                    {
                        this.voice([hyelingBattlecry1, hyelingBattlecry2], 2100, true);
                        this.voiceFrequency = 4 * this.dropRND + 3.5;
                    }
                }
                else
                {
                    if (this.isSameTypeNearby(this.X, this.Y, 310, this.type) && this.DTU(this.target) > this.rangeOfSight || this.target == "none" && this.isSameTypeNearby(this.X, this.Y, 310, this.type) || this.X != this.plantedX && this.Y != this.plantedY && this.isSameTypeNearby(this.X, this.Y, 310, this.type) && !this.attacking)
                    {
                        this.voice([hyelingClick1, hyelingClick2, hyelingClick3], 2100, true);
                        this.voiceFrequency = 9 * this.dropRND + 2;
                    }
                    else if (this.action == "fleeing")
                    {
                        this.voice([hyelingPaincry1, hyelingPaincry2], 2100, true);
                        this.voiceFrequency = 4 * this.dropRND + 3.5;
                    }
                    else if (this.action == "charging")
                    {
                        this.voice([hyelingBattlecry1, hyelingBattlecry2], 2100, true);
                        this.voiceFrequency = 4 * this.dropRND + 3.5;
                    }
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(6, 0.150, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (this.X != this.plantedX && this.Y != this.plantedY)
                {
                    this.flashAnimate( 550 / this.speed, this.rotation + 1/2 * Math.PI, 1, [{image: furr, imgX: 229, imgY: 298, portionW: 30, portionH: 62, adjX: -1/2 * 30 * 1 * this.alphaSize, adjY: -1/2 * 62 * 1 * this.alphaSize, width: 30 * 1 * this.alphaSize, height: 62 * 1 * this.alphaSize}, {image: furr, imgX: 227, imgY: 375, portionW: 30, portionH: 62, adjX: -1/2 * 30 * 1 * this.alphaSize, adjY: -1/2 * 62 * 1 * this.alphaSize, width: 30 * 1 * this.alphaSize, height: 62 * 1 * this.alphaSize}])
                }
                this.plantedX = this.X;
                this.plantedY = this.Y;
                if (!this.attacking)
                {
                    this.drawUnit(furr, 26, 133, 92, 53, -1/2 * 92 * 1.6 * this.alphaSize - this.xAdjustment, -1/2 * 53 * 1.6  * this.alphaSize - this.yAdjustment, 92 * 1.6 * this.alphaSize, 53 * 1.6 * this.alphaSize);
                }

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(furr, 26, 133, 92, 53, -1/2 * 92 * 1.6 * this.alphaSize - this.xAdjustment, -1/2 * 53 * 1.6  * this.alphaSize - this.yAdjustment, 92 * 1.6 * this.alphaSize, 53 * 1.6 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(furr, 25, 195, 92, 53, -1/2 * 92 * 1.6 * this.alphaSize - this.xAdjustment, -1/2 * 53 * 1.6  * this.alphaSize - this.yAdjustment, 92 * 1.6 * this.alphaSize, 53 * 1.6 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(furr, 24, 253, 92, 53, -1/2 * 92 * 1.6 * this.alphaSize - this.xAdjustment, -1/2 * 53 * 1.6  * this.alphaSize - this.yAdjustment, 92 * 1.6 * this.alphaSize, 53 * 1.6 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(furr, 25, 311, 92, 53, -1/2 * 92 * 1.6 * this.alphaSize - this.xAdjustment, (-1/2 * 53 * 1.6 - 17) * this.alphaSize - this.yAdjustment, 92 * 1.6 * this.alphaSize, 53 * 1.6 * this.alphaSize);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(furr, 28, 366, 92, 53, (-1/2 * 92 * 1.6 + 5) * this.alphaSize - this.xAdjustment, (-1/2 * 53 * 1.6 - 23)  * this.alphaSize - this.yAdjustment, 92 * 1.6 * this.alphaSize, 53 * 1.6 * this.alphaSize);
                    }
                }
                else if (theCostume >= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(furr, 28, 431, 92, 53, (-1/2 * 92 * 1.6 + 5) * this.alphaSize - this.xAdjustment, (-1/2 * 53 * 1.6 - 25)  * this.alphaSize - this.yAdjustment, 92 * 1.6 * this.alphaSize, 53 * 1.6 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(furr, 208, 623, 56, 72, -1/2 * 56 * 1.6 * this.alphaSize - this.xAdjustment, -1/2 * 72 * 1.6 * this.alphaSize - this.yAdjustment, 56 * 1.6 * this.alphaSize, 72 * 1.6 * this.alphaSize);
            }
        }
        //Hyeling
        if (this.type == "Hyeling") //ciudadano de hielo
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (20 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("hyelingClaws", this.X, this.Y), 1], [new Item("rawHyelingFlesh", this.X, this.Y), 2]];
            }
            if (this.alpha == "baby")
            {
                if (Math.max(0, 1 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 3 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (3 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawHyelingFlesh", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 14 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 14 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("hyelingClaws", this.X, this.Y), 1], [new Item("rawHyelingFlesh", this.X, this.Y), 2]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(860, true);
            }
            if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(780, true);
            }
            else
            {
                this.rangeOfSightCalculator(820, true);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(4, 2);
                    this.callForNearbyHelpFromType(940, "HyelingSoldier");
                    this.callForNearbyHelpFromType(940, "Hyeling");
                }
                if (this.alpha == true)
                {
                    this.Attack(1.5, 0.5);
                    this.callForNearbyHelpFromType(940, "HyelingSoldier");
                    this.callForNearbyHelpFromType(940, "Hyeling");
                }
                else
                {
                    this.Attack(3, 1.5);
                    this.callForNearbyHelpFromType(940, "HyelingSoldier");
                    this.callForNearbyHelpFromType(940, "Hyeling");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.action == "charging")
                {
                    if (this.target == player)
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                    else if (this.target != "none")
                    {
                        this.pointTowards(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }
                else if (this.action == "fleeing")
                {
                    if (this.target == player)
                    {
                        this.pointAwayFromPlayer();
                        this.moveInRelationToPlayer();
                    }
                    else if (this.target != "none")
                    {
                        this.pointAway(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }

                //BRAIN
                //if about to die run away
                this.action = "charging";

                if (this.health <= 1/4 * this.healthMAX || this.health <= 99/100 * this.healthMAX && this.alpha == "baby")
                {
                    this.action = "fleeing";

                    if (this.DTP() <= 110 && shiftKey == true && this.alpha != "baby")
                    {
                        this.action = "charging";
                    }
                }
                else
                {
                    // If target persuing gets too close, turn and fight regardless of chances...
                    if (this.target == player)
                    {
                        if (player.health > this.health && player.weaponEquipped != "none" || player.armourTotal >= 6 && player.weaponEquipped != "none" || player.level > 15 || player.magicLevel > 1)
                        {
                            this.action = "fleeing";
                            this.isSameTypeNearby(this.X, this.Y, 940, this.type);
                            if (this.numberOfSameTypeNearby >= 2 && player.armourTotal < 8 && player.level <= 15 && player.magicLevel <= 1)
                            {
                                this.action = "charging";
                            }
                            else if (this.numberOfSameTypeNearby >= 4 && player.armourTotal <= 8.25 && player.level <= 30 && player.magicLevel <= 5)
                            {
                                this.action = "charging";
                            }
                        }
                        if (this.DTP() <= 175 && shiftKey == true)
                        {
                            this.action = "charging";
                        }
                    }
                    else if (this.target != "none")
                    {
                        if (this.target.health > this.health && this.target.team != "herd" || this.target.armour >= 6 && this.target.team != "herd")
                        {
                            this.action = "fleeing";
                            this.isSameTypeNearby(this.X, this.Y, 900, this.type);
                            if (this.numberOfSameTypeNearby >= 2 && this.target.armour < 8 && this.target.health < (3 * Math.max(this.health, 1/2 * this.healthMAX)))
                            {
                                this.action = "charging";
                            }
                            else if (this.numberOfSameTypeNearby >= 3 && this.target.armour <= 8 && this.target.health < (4 * Math.max(this.health, 1/2 * this.healthMAX)))
                            {
                                this.action = "charging";
                            }
                            else if (this.numberOfSameTypeNearby >= 4 && this.target.armour <= 8.25 && this.target.health < (5 * Math.max(this.health, 1/2 * this.healthMAX)))
                            {
                                this.action = "charging";
                            }
                            else if (this.numberOfSameTypeNearby >= 5 && this.target.armour <= 8.35 && this.target.health < (8 * Math.max(this.health, 1/2 * this.healthMAX)))
                            {
                                this.action = "charging";
                            }
                        }
                        if (this.DTU(this.target) <= 175 && this.target.speed >= this.speed)
                        {
                            this.action = "charging";
                        }
                    }
                }

                //sounds for circumstances
                if (this.target == player)
                {
                    if (this.isSameTypeNearby(this.X, this.Y, 310, this.type) && this.DTP() > this.rangeOfSight || this.X != this.plantedX && this.Y != this.plantedY && this.isSameTypeNearby(this.X, this.Y, 310, this.type) && !this.attacking)
                    {
                        this.voice([hyelingClick1, hyelingClick2, hyelingClick3], 2100, true);
                        this.voiceFrequency = 9 * this.dropRND + 2;
                    }
                    else if (this.action == "fleeing")
                    {
                        this.voice([hyelingPaincry1, hyelingPaincry2], 2100, true);
                        this.voiceFrequency = 4 * this.dropRND + 3.5;
                    }
                    else if (this.action == "charging")
                    {
                        this.voice([hyelingBattlecry1, hyelingBattlecry2], 2100, true);
                        this.voiceFrequency = 4 * this.dropRND + 3.5;
                    }
                }
                else
                {
                    if (this.isSameTypeNearby(this.X, this.Y, 310, this.type) && this.DTU(this.target) > this.rangeOfSight || this.target == "none" && this.isSameTypeNearby(this.X, this.Y, 310, this.type) || this.X != this.plantedX && this.Y != this.plantedY && this.isSameTypeNearby(this.X, this.Y, 310, this.type) && !this.attacking)
                    {
                        this.voice([hyelingClick1, hyelingClick2, hyelingClick3], 2100, true);
                        this.voiceFrequency = 9 * this.dropRND + 2;
                    }
                    else if (this.action == "fleeing")
                    {
                        this.voice([hyelingPaincry1, hyelingPaincry2], 2100, true);
                        this.voiceFrequency = 4 * this.dropRND + 3.5;
                    }
                    else if (this.action == "charging")
                    {
                        this.voice([hyelingBattlecry1, hyelingBattlecry2], 2100, true);
                        this.voiceFrequency = 4 * this.dropRND + 3.5;
                    }
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(4, 0.122, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (this.X != this.plantedX && this.Y != this.plantedY)
                {
                    this.flashAnimate( 550 / this.speed, this.rotation + 1/2 * Math.PI, 1, [{image: furr, imgX: 229, imgY: 220, portionW: 30, portionH: 62, adjX: -1/2 * 30 * 1 * this.alphaSize, adjY: -1/2 * 62 * 1 * this.alphaSize, width: 30 * 1 * this.alphaSize, height: 62 * 1 * this.alphaSize}, {image: furr, imgX: 230, imgY: 143, portionW: 30, portionH: 62, adjX: -1/2 * 30 * 1 * this.alphaSize, adjY: -1/2 * 62 * 1 * this.alphaSize, width: 30 * 1 * this.alphaSize, height: 62 * 1 * this.alphaSize}])
                }
                this.plantedX = this.X;
                this.plantedY = this.Y;
                if (!this.attacking)
                {
                    this.drawUnit(furr, 141, 137, 61, 49, -1/2 * 61 * 1.6 * this.alphaSize - this.xAdjustment, -1/2 * 49 * 1.6  * this.alphaSize - this.yAdjustment, 61 * 1.6 * this.alphaSize, 49 * 1.6 * this.alphaSize);
                }

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(furr, 141, 137, 61, 49, -1/2 * 61 * 1.6 * this.alphaSize - this.xAdjustment, -1/2 * 49 * 1.6  * this.alphaSize - this.yAdjustment, 61 * 1.6 * this.alphaSize, 49 * 1.6 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(furr, 143, 190, 61, 49, -1/2 * 61 * 1.6 * this.alphaSize - this.xAdjustment, -1/2 * 49 * 1.6  * this.alphaSize - this.yAdjustment, 61 * 1.6 * this.alphaSize, 49 * 1.6 * this.alphaSize);
                    }
                }
                else if (theCostume >= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(furr, 143, 242, 61, 49, -1/2 * 61 * 1.6 * this.alphaSize - this.xAdjustment, -1/2 * 49 * 1.6  * this.alphaSize - this.yAdjustment, 61 * 1.6 * this.alphaSize, 49 * 1.6 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(furr, 281, 617, 76, 70, -1/2 * 76 * 1.6 * this.alphaSize - this.xAdjustment, -1/2 * 70 * 1.6 * this.alphaSize - this.yAdjustment, 76 * 1.6 * this.alphaSize, 70 * 1.6 * this.alphaSize);
            }
        }
        //UT
        if (this.type == "Ut") //uttttt
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 129 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (129 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawUtFlesh", this.X, this.Y), 5], [new Item("utTentacle", this.X, this.Y), 9]];
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 9 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (9 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawUtFlesh", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 49 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 49 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("rawUtFlesh", this.X, this.Y), 2], [new Item("utTentacle", this.X, this.Y), 2]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(700, true);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(500, true);
            }
            else
            {
                this.rangeOfSightCalculator(600, true);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(22, 8);
                    this.callForNearbyHelpFromType(800, "Ut");
                }
                else if (this.alpha == "baby")
                {
                    this.Attack(4, 1);
                    this.callForNearbyHelpFromType(1200, "Ut");
                }
                else
                {
                    this.Attack(11, 4);
                    this.callForNearbyHelpFromType(700, "Ut");
                }

                //Super Sticky Slime Trail
                if (this.moving && !this.attacking)
                {
                    if (new Date().getTime() >= this.loopTimer + 625)
                    {
                        this.loopTimer = new Date().getTime();
                        scenicList.push(new Scenery("utSlime", this.X , this.Y, this.rotation, this.alphaSize));
                    }
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(6, 0.070, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(8, 0.110, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 681, 794, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 520, 245, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 797, 786, 93, 103, -1/2 * 93 * this.alphaSize - this.xAdjustment, -1/2 * 103 * this.alphaSize - this.yAdjustment, 93 * this.alphaSize, 103 * this.alphaSize);
                        //this.drawUnit(freeverse, 794, 800, 91, 75, -1/2 * 91 * this.alphaSize - this.xAdjustment, -1/2 * 75 * this.alphaSize - this.yAdjustment, 91 * this.alphaSize, 95 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 616, 247, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 901, 788, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 707, 236, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 676, 888, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 681, 794, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 783, 888, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 797, 786, 93, 103, -1/2 * 93 * this.alphaSize - this.xAdjustment, -1/2 * 103 * this.alphaSize - this.yAdjustment, 93 * this.alphaSize, 103 * this.alphaSize);
                    }
                }
                else if (theCostume <= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 876, 890, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 901, 788, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                }
                else if (theCostume >= 6)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 569, 911, 97, 84, -1/2 * 97 * this.alphaSize - this.xAdjustment, -1/2 * 84 * this.alphaSize - this.yAdjustment, 97 * this.alphaSize, 84 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 520, 245, 99, 96, -1/2 * 99 * this.alphaSize - this.xAdjustment, -1/2 * 96 * this.alphaSize - this.yAdjustment, 99 * this.alphaSize, 96 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(freeverse, 400, 228, 97, 95, -1/2 * 97 * this.alphaSize - this.xAdjustment, -1/2 * 95 * this.alphaSize - this.yAdjustment, 97 * this.alphaSize, 95 * this.alphaSize);
            }
        }
        //GREWBLE
        if (this.type == "Grewble")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 129 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (129 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("grewbleGuts", this.X, this.Y), 5]];
            }
            else if (this.alpha == "giant")
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 340 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (340 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("grewbleGuts", this.X, this.Y), 9]];
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 9 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (9 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("grewbleGuts", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 49 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 49 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("grewbleGuts", this.X, this.Y), 3]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(650, true);
            }
            else if (this.alpha == "giant")
            {
                this.rangeOfSightCalculator(1000, true);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(500, true);
            }
            else
            {
                this.rangeOfSightCalculator(500, true);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(8, 10);
                    this.callForNearbyHelpFromType(500, "Grewble");
                }
                else if (this.alpha == "giant")
                {
                    this.Attack(16, 24);
                    this.callForNearbyHelpFromType(500, "Grewble");
                }
                else if (this.alpha == "baby")
                {
                    this.Attack(1, 1);
                    this.callForNearbyHelpFromType(500, "Grewble");
                }
                else
                {
                    this.Attack(2, 4);
                    this.callForNearbyHelpFromType(500, "Grewble");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(5, 0.100, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(8, 0.110, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(lodo, 66, 1, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(lodo, 66, 1, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(lodo, 115, 1, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(lodo, 64, 35, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(lodo, 166, 2, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(lodo, 66, 1, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(lodo, 220, 2, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(lodo, 63, 67, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(lodo, 269, 1, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(lodo, 62, 103, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                }
                else if (theCostume <= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(lodo, 319, 1, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(lodo, 66, 1, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                }
                else if (theCostume >= 6)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(lodo, 315, 41, 60, 30, -1/2 * 60 * this.alphaSize - this.xAdjustment, -1/2 * 30 * this.alphaSize - this.yAdjustment, 60 * this.alphaSize, 30 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(lodo, 115, 1, 49, 34, -1/2 * 49 * this.alphaSize - this.xAdjustment, -1/2 * 34 * this.alphaSize - this.yAdjustment, 49 * this.alphaSize, 34 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(lodo, 315, 82, 60, 30, -1/2 * 60 * this.alphaSize - this.xAdjustment, -1/2 * 30 * this.alphaSize - this.yAdjustment, 60 * this.alphaSize, 30 * this.alphaSize);
            }
        }
        //ETNA
        if (this.type == "Etna")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 67 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (67 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("etnaVenomSack", this.X, this.Y), 1]];
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 7 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 4 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (4 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [];
            }
            else
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 60 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 60 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("etnaVenomSack", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(670, true);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(670, true);
            }
            else
            {
                this.rangeOfSightCalculator(670, true);
            }

            //AI
            if (this.alive == true)
            {
                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                //this.targeting();
                this.webTargeting(); //this type of targeting makes it so this unit only targets units or players stuck in web.

                if (this.target == player)
                {
                    if (this.alpha == true)
                    {
                        this.Attack(0, 3);
                        this.callForNearbyHelpFromType(50, "Etna");
                    }
                    else if (this.alpha == "baby")
                    {
                        this.Attack(0, 0.2);
                        this.callForNearbyHelpFromType(50, "Etna");
                    }
                    else
                    {
                        this.Attack(0, 2);
                        this.callForNearbyHelpFromType(50, "Etna");
                    }

                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    if (this.alpha == true)
                    {
                        this.Attack(4, 7);
                        this.callForNearbyHelpFromType(50, "Etna");
                    }
                    else if (this.alpha == "baby")
                    {
                        this.Attack(2, 2);
                        this.callForNearbyHelpFromType(50, "Etna");
                    }
                    else
                    {
                        this.Attack(4, 5);
                        this.callForNearbyHelpFromType(50, "Etna");
                    }

                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS
            var szx = 1.6
            if (this.alive == true)
            {
                if (this.target != "none")
                {
                    if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                    {
                        this.costumeEngine(7, 0.100, false);
                    }
                    else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                    {
                        if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                        {
                            this.costumeEngine(3, 0.110, true);
                        }
                    }
                }
                else
                {
                    this.costume = 0;
                }



                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 289, 358, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(nognog, 289, 358, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 661, 361, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(nognog, 335, 359, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 661, 361, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(nognog, 386, 359, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 661, 361, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(nognog, 436, 360, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 4)
                {
                    this.drawUnit(nognog, 484, 361, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                }
                else if (theCostume <= 5)
                {
                    this.drawUnit(nognog, 546, 361, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    this.other = Math.round(Math.random());
                }
                else if (theCostume >= 6)
                {
                    if (this.other)
                    {
                        this.drawUnit(nognog, 385, 359, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(nognog, 484, 361, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
                    }
                }
            }
            else
            {
                this.drawUnit(nognog, 613, 361, 39, 37, -1/2 * 39 * this.alphaSize * szx - this.xAdjustment, -1/2 * 37 * this.alphaSize * szx - this.yAdjustment, 39 * this.alphaSize * szx, 37 * this.alphaSize * szx);
            }
        }
        //NEEV
        if (this.type == "Neev")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 11 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 55 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (55 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("neevFlesh", this.X, this.Y), 3], [new Item("neevFur", this.X, this.Y), 2]];
            }
            else
            {
                if (Math.max(0, 4.5 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("neevFlesh", this.X, this.Y), 1], [new Item("neevFur", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(800, true);
            }
            else
            {
                this.rangeOfSightCalculator(650, "mildy");
            }

            //AI
            if (this.alive == true)
            {
                //NEEV BRAIN
                //Process

                if (this.DTP() <= 1/6 * this.rangeOfSight && player.inebriation >= 100 + (player.getToughness() * 3))
                {
                    this.disturbedTime = new Date().getTime();
                }

                if (this.disturbed == false) //if not frightened...
                {
                    this.mofuTargetFood = "none";
                    this.moving = false;
                    this.attacking = false;

                    if (player.inebriation < 100 + (player.getToughness() * 3) && this.DTP() <= 1/12 * this.rangeOfSight) //somehow this: && this.disturbed == false actually fixes the running around...
                    {
                        this.pointAwayFromPlayer();
                        this.moveInRelationToPlayer();
                    }
                    else
                    {
                        for (var i = 0; i < worldItems.length; i++) //look for any item but quest items to eat/steal.
                        {
                            if (worldItems[i][0].utility != "questItem")
                            {
                                if (this.distanceFinder(this, worldItems[i][0]) <= this.rangeOfSight)
                                {
                                    if (this.mofuTargetFood == "none")
                                    {
                                        this.mofuTargetFood = worldItems[i][0];
                                    }
                                    else
                                    {
                                        if (this.distanceFinder(this, worldItems[i][0]) < this.distanceFinder(this, this.mofuTargetFood))
                                        {
                                            this.mofuTargetFood = worldItems[i][0];
                                        }
                                    }
                                }
                            }
                        }
                        if (this.mofuTargetFood != "none")
                        {
                            if (this.distanceFinder(this, this.mofuTargetFood) <= this.engagementRadius)
                            {
                                this.eating = true;

                                //Actually eat the thing at the right frame.
                                if (Math.floor(this.costume) <= 1)
                                {
                                    this.mofuFeastPrepped = true;
                                }
                                else if (Math.floor(this.costume) <= 2)
                                {
                                    if (this.mofuFeastPrepped == true)
                                    {
                                        for (var i = 0; i < worldItems.length; i++)
                                        {
                                            if (worldItems[i][0] === this.mofuTargetFood)
                                            {
                                                this.mofuFood += 1;
                                                if (worldItems[i][1] > 1)
                                                {
                                                    worldItems[i][1] -= 1;
                                                    break;
                                                }
                                                else
                                                {
                                                    this.mofuTargetFood = "none";
                                                    worldItems.splice(i, 1);
                                                    break;
                                                }
                                            }
                                        }
                                        this.mofuFeastPrepped = false;
                                    }
                                }
                                //end of eating item code block
                            }
                            else
                            {
                                this.eating = false;
                                this.pointTowards(this.mofuTargetFood);
                                this.moveInRelationToThing(this.mofuTargetFood);
                            }
                        }
                        else
                        {
                            this.eating = false;
                        }
                    }
                }
                else if (this.disturbed == true)
                {
                    if (this.alpha == true)
                    {
                        this.Attack(8, 3);
                        this.callForNearbyHelpFromType(2000, "Neev");
                    }
                    else
                    {
                        this.Attack(3, 1.5);
                        this.callForNearbyHelpFromType(2000, "Neev");
                    }

                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                //FOR NEEVS ANIMATION STARTER IS MOVED RIGHT HERE
                if (this.moving && !this.attacking && !this.eating) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(4, 0.09, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(3, 0.20, true);
                    }
                }
                else if (this.eating) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(4, 0.11, true);
                    }
                }
            }
            else
            {
                if (this.doOnDeathOnce)
                {
                    if (this.ID == "Easter")
                    {
                        quests.theMasterThiefOfTeshirNeevSlain = true;
                    }

                    this.doOnDeathOnce = false;
                }
            }

            //ANIMATIONS

            if (this.alive == true && player.inebriation >= 100 + (player.getToughness() * 3))
            {
                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(poly, 284, 46, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                    else if (this.eating)
                    {
                        this.drawUnit(poly, 235, 3, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(poly, 186, 3, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(poly, 235, 3, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                    else if (this.eating)
                    {
                        this.drawUnit(poly, 285, 1, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(poly, 387, 4, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(poly, 234, 45, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                    else if (this.eating)
                    {
                        this.drawUnit(poly, 331, 4, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(poly, 186, 3, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                }
                else if (theCostume >= 3)
                {
                    if (this.attacking || this.eating)
                    {
                        this.drawUnit(poly, 234, 45, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(poly, 439, 6, 48, 51, -35 - this.xAdjustment, -22 - this.yAdjustment, 48 * this.alphaSize, 51 * this.alphaSize);
                    }
                }
            }
            else if (this.alive == false)
            {
                this.drawUnit(poly, 124, 7, 65, 41, -35 - this.xAdjustment, -22 - this.yAdjustment, 65 * this.alphaSize, 41 * this.alphaSize);
            }
        }
        //GRIB
        if (this.type == "Grib")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 13 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 45 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (45 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("gribPelt", this.X, this.Y), 2], [new Item("rawGribFlesh", this.X, this.Y), 3]];
            }
            else
            {
                if (Math.max(0, 8 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 24 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 24 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                this.drops = [[new Item("gribPelt", this.X, this.Y), 1], [new Item("rawGribFlesh", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(400, "mildly");
            }
            else
            {
                this.rangeOfSightCalculator(350, "mildy");
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(9, 4);
                    this.callForNearbyHelpFromType(400, "Grib");
                }
                else
                {
                    this.Attack(5, 3);
                    this.callForNearbyHelpFromType(350, "Grib");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(3, 0.085, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(6, 0.110, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1636, 154, 49, 29, -35 - this.xAdjustment, -21 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 1226, 155, 49, 29, -35 - this.xAdjustment, -22 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1451, 157, 49, 29, -35 - this.xAdjustment, -21 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 1305, 155, 49, 29, -35 - this.xAdjustment, -21 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1513, 157, 49, 29, -35 - this.xAdjustment, -21 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 1373, 156, 54, 32, -35 - this.xAdjustment, -21 - this.yAdjustment, 54 * this.alphaSize, 32 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1578, 154, 49, 29, -35 - this.xAdjustment, -21 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1513, 157, 49, 29, -35 - this.xAdjustment, -21 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                }
                else if (theCostume >= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1451, 157, 49, 29, -35 - this.xAdjustment, -21 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(oldverse, 1145, 143, 53, 44, -35 - this.xAdjustment, -22 - this.yAdjustment, 53 * this.alphaSize, 44 * this.alphaSize);
            }

        }
        //BLACK BEAR
        if (this.type == "BlackBear")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 20 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 99 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (99 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                if (player.getIntelligence() >= 5)
                {
                    this.drops = [[new Item("medBlackBearPelt", this.X, this.Y), 1], [new Item("rawBearFlesh", this.X, this.Y), 2], [new Item("rawBearTongue", this.X, this.Y), 1]];
                }
                else
                {
                    this.drops = [[new Item("medBlackBearPelt", this.X, this.Y), 1], [new Item("rawBearFlesh", this.X, this.Y), 2]];
                }
            }
            else if (this.alpha == "giant")
            {
                if (Math.max(0, 70 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 1111 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (1111 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("lrgBlackBearPelt", this.X, this.Y), 1], [new Item("rawBearFlesh", this.X, this.Y), 13]];
            }
            else
            {
                if (Math.max(0, 13 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 62 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 62 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                if (player.getIntelligence() >= 5)
                {
                    this.drops = [[new Item("smlBlackBearPelt", this.X, this.Y), 1], [new Item("rawBearFlesh", this.X, this.Y), 1], [new Item("rawBearTongue", this.X, this.Y), 1]];
                }
                else
                {
                    this.drops = [[new Item("smlBlackBearPelt", this.X, this.Y), 1], [new Item("rawBearFlesh", this.X, this.Y), 1]];
                }
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(425, "mildly");
            }
            else if (this.alpha == "giant")
            {
                this.rangeOfSightCalculator(650, true);
            }
            else
            {
                this.rangeOfSightCalculator(400, false);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(13, 7);
                    this.callForNearbyHelpFromType(300, "BlackBear");
                }
                else if (this.alpha == "giant")
                {
                    this.Attack(40, 30);
                    this.callForNearbyHelpFromType(250, "BlackBear");
                }
                else
                {
                    this.Attack(7, 6);
                    this.callForNearbyHelpFromType(300, "BlackBear");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(4, 0.085, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(6, 0.110, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 224, 8, 61, 40, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 0, 5, 61, 40, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 301, 9, 61, 40, -34 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 67, 8, 61, 40, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 384, 10, 61, 40, -31 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 0, 5, 61, 40, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 301, 9, 61, 40, -33 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 141, 7, 61, 40, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else if (theCostume >= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 224, 8, 61, 40, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(polypol, 471, 16, 61, 40, -35 - this.xAdjustment, -22 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
            }
        }
        //VIPER
        if (this.type == "Viper")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 13 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 92 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (92 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                if (player.getIntelligence() >= 23)
                {
                    this.drops = [[new Item("rawViperFlesh", this.X, this.Y), 6], [new Item("viperVenomGland", this.X, this.Y), 1], [new Item("viperSnakeSkin", this.X, this.Y), 6]];
                }
                else
                {
                    this.drops = [[new Item("rawViperFlesh", this.X, this.Y), 6], [new Item("viperSnakeSkin", this.X, this.Y), 6]];
                }
            }
            else if (this.alpha == "giant")
            {
                if (Math.max(0, 51 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 499 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (499 * ((player.getIntelligence() / 50) + 1)) / 10;
                }


                this.drops = [[new Item("rawViperFlesh", this.X, this.Y), 17], [new Item("viperSnakeSkin", this.X, this.Y), 17]];
            }
            else
            {
                if (Math.max(0, 4 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1) / 10;
                }

                if (player.getIntelligence() >= 18)
                {
                    this.drops = [[new Item("rawViperFlesh", this.X, this.Y), 1], [new Item("viperVenomGland", this.X, this.Y), 1], [new Item("viperSnakeSkin", this.X, this.Y), 1]];
                }
                else
                {
                    this.drops = [[new Item("rawViperFlesh", this.X, this.Y), 1], [new Item("viperSnakeSkin", this.X, this.Y), 1]];
                }
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(700, "mildly");
            }
            else if (this.alpha == "giant")
            {
                this.rangeOfSightCalculator(900, "mildly");
            }
            else
            {
                this.rangeOfSightCalculator(260, true);
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(9, 4);
                }
                else if (this.alpha == "giant")
                {
                    this.Attack(34, 17);
                }
                else
                {
                    this.Attack(3, 1);
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(7, 0.090, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(7, 0.145, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 438, 5, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 438, 5, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 518, 6, 70, 30, -34 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 438, 33, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 598, 5, 70, 30, -31 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 438, 5, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 678, 7, 70, 30, -33 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 438, 7, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 764, 9, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 438, 120, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else if (theCostume <= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 850, 7, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 438, 147, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
                else if (theCostume >= 6)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(freeverse, 921, 7, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(freeverse, 438, 172, 70, 30, -35 - this.xAdjustment, -21 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(freeverse, 436, 199, 70, 30, -35 - this.xAdjustment, -22 - this.yAdjustment, 61 * this.alphaSize, 40 * this.alphaSize);
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

                this.drops = [[new Item("bigBerulnPelt", this.X, this.Y), 1], [new Item("berulnSkull", this.X, this.Y), 1], [new Item("rawBerulnFlesh", this.X, this.Y), 4]];
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

                this.drops = [[new Item("berulnPelt", this.X, this.Y), 1], [new Item("berulnSkull", this.X, this.Y), 1], [new Item("rawBerulnFlesh", this.X, this.Y), 3]];
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

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

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
                    if (this.attacking)
                    {
                        if (this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                        {
                            this.finalAttackCostume = true; //deal the damage!
                            this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                        }
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
        //OLKRIN
        if (this.type == "Olkrin")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                var randoom = Math.round(Math.random());
                if (Math.max(0, 57 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 1400 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (1400 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                if (randoom == 0)
                {
                    this.drops = [[new Item("goliathOlkrinSkull", this.X, this.Y), 1], [new Item("rawOlkrinFlesh", this.X, this.Y), 10]];
                }
                else
                {
                    this.drops = [[new Item("olkrinHorn", this.X, this.Y), 2], [new Item("rawOlkrinFlesh", this.X, this.Y), 12]];
                }
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 18 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 172 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (172 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawOlkrinFlesh", this.X, this.Y), 1]];
            }
            else
            {
                var randoom = Math.round(Math.random());
                if (Math.max(0, 36 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 1000 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (1000 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                if (randoom)
                {
                    this.drops = [[new Item("olkrinSkull", this.X, this.Y), 1], [new Item("rawOlkrinFlesh", this.X, this.Y), 4]];
                }
                else
                {
                    this.drops = [[new Item("olkrinArm", this.X, this.Y), 1], [new Item("olkrinHorn", this.X, this.Y), 2], [new Item("rawOlkrinFlesh", this.X, this.Y), 3]];
                }
            }

            //RANGE OF SIGHT (anything related to range of sight)

            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(1100, "very");
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(750, "very");
            }
            else
            {
                this.rangeOfSightCalculator(900, "very");
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(28, 36);
                    this.callForNearbyHelpFromType(1000, "Olkrin");
                }
                else if (this.alpha == "baby")
                {
                    this.Attack(8, 12);
                    this.callForNearbyHelpFromType(1600, "Olkrin");
                }
                else
                {
                    this.Attack(16, 24);
                    this.callForNearbyHelpFromType(1000, "Olkrin");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(4, 0.070, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(15, 0.225, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                //manual damaging
                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 156, 706, 117, 157, -91 - this.xAdjustment, -145 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(verse, 156, 706, 117, 157, -91 - this.xAdjustment, -145 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 156, 904, 117, 157, -99 - this.xAdjustment, -131 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(verse, 143, 395, 117, 157, -106 - this.xAdjustment, -136 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 165, 1082, 117, 157, -87 - this.xAdjustment, -110 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(verse, 156, 706, 117, 157, -91 - this.xAdjustment, -145 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 163, 1228, 117, 157, -92 - this.xAdjustment, -108 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(verse, 147, 551, 117, 157, -102 - this.xAdjustment, -108 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 4)
                {
                    if (this.attacking)
                    {
                        if (this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                        {
                            this.finalAttackCostume = true; //deal the damage!
                            this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                        }
                        this.drawUnit(verse, 163, 1228, 117, 157, -90 - this.xAdjustment, -109 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 5)
                {
                    this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.

                    if (this.attacking)
                    {
                        this.drawUnit(verse, 163, 1228, 117, 157, -92 - this.xAdjustment, -108 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 6)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 165, 1082, 117, 157, -87 - this.xAdjustment, -110 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 7)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 156, 904, 117, 157, -99 - this.xAdjustment, -131 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 8)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 156, 706, 117, 157, -91 - this.xAdjustment, -145 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                } // back to frame 0 here.
                else if (theCostume == 9)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 30, 902, 117, 157, -100 - this.xAdjustment, -155 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 10)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 38, 1071, 117, 157, -88 - this.xAdjustment, -163 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 11)
                {
                    if (this.attacking)
                    {
                        if (this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                        {
                            this.finalAttackCostume = true; //deal the damage!
                            this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                        }

                        this.drawUnit(verse, 43, 1228, 117, 157, -90 - this.xAdjustment, -171 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 12)
                {
                    if (this.attacking)
                    {
                        this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.
                        this.drawUnit(verse, 38, 1071, 117, 157, -88 - this.xAdjustment, -163 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 13)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 30, 902, 117, 157, -100 - this.xAdjustment, -155 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
                else if (theCostume == 14)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 156, 706, 117, 157, -91 - this.xAdjustment, -145 - this.yAdjustment, 117 * this.alphaSize, 157 * this.alphaSize);
                    }
                }
            }
            else
            {
                if (this.alpha == false)
                {
                    this.drawUnit(verse, 10, 1413, 133, 92, -186 - this.xAdjustment, -80 - this.yAdjustment, 133 * this.alphaSize, 92 * this.alphaSize);
                }
                else if (this.alpha == true)
                {
                    this.drawUnit(verse, 10, 1413, 133, 92, -186 - this.xAdjustment, -80 - this.yAdjustment, 133 * this.alphaSize, 92 * this.alphaSize);
                }
                else if (this.alpha == "baby")
                {
                    this.drawUnit(verse, 10, 1413, 133, 92, -156 - this.xAdjustment, -100 - this.yAdjustment, 133 * this.alphaSize, 92 * this.alphaSize);
                }
            }

        }
        //NAAPRID
        if (this.type == "Naaprid")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 9 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 20 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (20 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("naapridPelt", this.X, this.Y), 1], [new Item("rawNaapridFlesh", this.X, this.Y), 1], [new Item("naapridHorn", this.X, this.Y), 1]];
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 2 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 6 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (6 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawYoungNaapridFlesh", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 6 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 14 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (14 * ((player.getIntelligence() / 50) + 1)) / 10;
                }
                this.drops = [[new Item("naapridPelt", this.X, this.Y), 1], [new Item("rawNaapridFlesh", this.X, this.Y), 1], [new Item("naapridHorn", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(345, "mildy");
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(285, "very");
            }
            else
            {
                this.rangeOfSightCalculator(300, "very");
            }
            //Milking Naaprid
            if (this.alpha == false && player.getSurvivalism() >= 10 && X - mouseX + 1/2 * CCC.width < this.X + this.sizeRadius && X - mouseX + 1/2 * CCC.width > this.X - this.sizeRadius && Y - mouseY + 1/2 * CCC.height < this.Y + this.sizeRadius && Y - mouseY + 1/2 * CCC.height > this.Y - this.sizeRadius)
            {
                if (this.DTP() <= this.sizeRadius + 70 && dClick && new Date().getTime() > this.milkTime + 40000)
                {
                    this.milkTime = new Date().getTime();
                    this.doBreak = false;
                    this.yaTiene = false;

                    for (var i = 0; i < Inventory.length; i++)
                    {
                        for (var j = 0; j < naapridConversionList.length; j++)
                        {
                            //console.log(Inventory[i][0].type + " v.s. "  + naapridConversionList[j][0]);
                            if (Inventory[i][0].type == naapridConversionList[j][0])
                            {
                                for (var k = 0; k < Inventory.length; k++)
                                {
                                    if (Inventory[k][0].type == naapridConversionList[j][1])
                                    {
                                        this.yaTiene = k;
                                    }
                                }

                                if (Inventory[i][1] > 1)
                                {
                                    Inventory[i][1] -= 1;
                                    if (this.yaTiene == false)
                                    {
                                        Inventory.push([new Item(naapridConversionList[j][1], false, false), 1]);
                                    }
                                    else
                                    {
                                        Inventory[this.yaTiene][1] +=1;
                                    }
                                    this.doBreak = true;
                                    break;
                                }
                                else
                                {
                                    if (this.yaTiene == false)
                                    {
                                        Inventory.splice(i, 1);
                                        Inventory.push([new Item(naapridConversionList[j][1], false, false), 1]);
                                    }
                                    else
                                    {
                                        Inventory[this.yaTiene][1] +=1;
                                        Inventory.splice(i, 1);
                                    }
                                    this.doBreak = true;
                                    break;
                                }
                            }
                        }
                        if (this.doBreak == true)
                        {
                            break;
                        }
                    }
                }
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    if (this.disturbed || player.getSurvivalism() < 10 || player.weaponEquipped != "none")
                    {
                        this.Attack(7, 2);
                        this.callForNearbyHelpFromType(385, "Naaprid");
                    }
                }
                else if (this.alpha == "baby")
                {
                    this.Attack(2, 0);
                    this.callForNearbyHelpFromType(300, "Naaprid");
                }
                else
                {
                    if (this.disturbed || player.getSurvivalism() < 10|| player.weaponEquipped != "none")
                    {
                        this.Attack(5, 1);
                        this.callForNearbyHelpFromType(350, "Naaprid");
                    }
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();
                if (this.alpha == true)
                {
                    if (this.target == player)
                    {
                        this.pointTowardsPlayer();
                    }
                    else if (this.target != "none")
                    {
                        this.pointTowards(this.target);
                    }
                }
                else if (this.alpha == "baby")
                {
                    if (this.target == player)
                    {
                        this.pointAwayFromPlayer();
                    }
                    else if (this.target != "none")
                    {
                        this.pointAway(this.target);
                    }
                }
                else
                {
                    if (this.disturbed == true && this.health > (this.healthMAX * (3/4)) || player.weaponEquipped == "none" && player.getSurvivalism() >= 10 && this.disturbed == false)
                    {
                        if (this.target == player)
                        {
                            this.pointTowardsPlayer();
                        }
                        else if (this.target != "none")
                        {
                            this.pointTowards(this.target);
                        }
                    }
                    else
                    {
                        if (this.target == player)
                        {
                            this.pointAwayFromPlayer();
                        }
                        else if (this.target != "none")
                        {
                            this.pointAway(this.target);
                        }
                    }
                }
                if (this.target == player && player.getSurvivalism() < 10 || this.target == player && this.disturbed || this.target == player && player.weaponEquipped != "none")
                {
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(3, 0.140, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(6, 0.225, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                //manual damaging
                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 2849, 50, 61, 37, -55 - this.xAdjustment, -32 - this.yAdjustment, 61 * this.alphaSize, 37 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(verse, 2849, 50, 61, 37, -55 - this.xAdjustment, -32 - this.yAdjustment, 61 * this.alphaSize, 37 * this.alphaSize);
                    }
                }
                else if (theCostume == 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 2928, 50, 61, 37, -55 - this.xAdjustment, -32 - this.yAdjustment, 61 * this.alphaSize, 37 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(verse, 3088, 50, 61, 37, -55 - this.xAdjustment, -32 - this.yAdjustment, 61 * this.alphaSize, 37 * this.alphaSize);
                    }
                }
                else if (theCostume == 2)
                {
                    if (this.attacking)
                    {
                        if (this.damageDealt == false && this.alpha == true || this.alpha != "baby" && this.disturbed == true && this.health > (this.healthMAX * (3/4)) && this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                        {
                            this.finalAttackCostume = true; //deal the damage!
                            this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                        }
                        this.drawUnit(verse, 2852, 84, 61, 37, -55 - this.xAdjustment, -32 - this.yAdjustment, 61 * this.alphaSize, 37 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(verse, 3005, 50, 61, 37, -55 - this.xAdjustment, -32 - this.yAdjustment, 61 * this.alphaSize, 37 * this.alphaSize);
                    }
                }
                else if (theCostume == 3)
                {
                    this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.

                    if (this.attacking)
                    {
                        this.drawUnit(verse, 2935, 84, 61, 37, -55 - this.xAdjustment, -32 - this.yAdjustment, 61 * this.alphaSize, 37 * this.alphaSize);
                    }
                }
                else if (theCostume == 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 2852, 84, 61, 37, -55 - this.xAdjustment, -32 - this.yAdjustment, 61 * this.alphaSize, 37 * this.alphaSize);
                    }
                }
                else if (theCostume >= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(verse, 3007, 84, 61, 37, -55 - this.xAdjustment, -32 - this.yAdjustment, 61 * this.alphaSize, 37 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(verse, 3080, 90, 71, 48, -55 - this.xAdjustment, -32 - this.yAdjustment, 71 * this.alphaSize, 48 * this.alphaSize);
            }

        }
        //WAANTI
        if (this.type == "Waanti")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 9 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 6 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (6 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawWaantiFlesh", this.X, this.Y), 2], [new Item("waantiPelt", this.X, this.Y), 2]];
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 2 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 1 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (1 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawWaantiFlesh", this.X, this.Y), 1]];
            }
            else
            {
                if (Math.max(0, 6 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 3 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (3 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("rawWaantiFlesh", this.X, this.Y), 2], [new Item("waantiPelt", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)

            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(500, false);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(350, false);
            }
            else
            {
                this.rangeOfSightCalculator(450, false);
            }
            //Milking Waanti
            if (this.alpha == false && player.getSurvivalism() >= 12 && X - mouseX + 1/2 * CCC.width < this.X + this.sizeRadius && X - mouseX + 1/2 * CCC.width > this.X - this.sizeRadius && Y - mouseY + 1/2 * CCC.height < this.Y + this.sizeRadius && Y - mouseY + 1/2 * CCC.height > this.Y - this.sizeRadius)
            {
                if (this.DTP() <= this.sizeRadius + 70 && dClick && new Date().getTime() > this.milkTime + 90000)
                {
                    this.milkTime = new Date().getTime();
                    this.doBreak = false;
                    this.yaTiene = false;

                    for (var i = 0; i < Inventory.length; i++)
                    {
                        for (var j = 0; j < waantiConversionList.length; j++)
                        {
                            //console.log(Inventory[i][0].type + " v.s. "  + waantiConversionList[j][0]);
                            if (Inventory[i][0].type == waantiConversionList[j][0])
                            {
                                for (var k = 0; k < Inventory.length; k++)
                                {
                                    if (Inventory[k][0].type == waantiConversionList[j][1])
                                    {
                                        this.yaTiene = k;
                                    }
                                }

                                if (Inventory[i][1] > 1)
                                {
                                    Inventory[i][1] -= 1;
                                    if (this.yaTiene == false)
                                    {
                                        Inventory.push([new Item(waantiConversionList[j][1], false, false), 1]);
                                    }
                                    else
                                    {
                                        Inventory[this.yaTiene][1] +=1;
                                    }
                                    this.doBreak = true;
                                    break;
                                }
                                else
                                {
                                    if (this.yaTiene == false)
                                    {
                                        Inventory.splice(i, 1);
                                        Inventory.push([new Item(waantiConversionList[j][1], false, false), 1]);
                                    }
                                    else
                                    {
                                        Inventory[this.yaTiene][1] +=1;
                                        Inventory.splice(i, 1);
                                    }
                                    this.doBreak = true;
                                    break;
                                }
                            }
                        }
                        if (this.doBreak == true)
                        {
                            break;
                        }
                    }
                }
            }

            //AI
            if (this.alive == true) //Waanti's attack is used for grazing not attacking. //grazing heals them.
            {
                if (this.alpha == true)
                {
                    this.callForNearbyHelpFromType(500, "Waanti");
                }
                else if (this.alpha == "baby")
                {
                    this.callForNearbyHelpFromType(450, "Waanti");
                }
                else
                {
                    this.callForNearbyHelpFromType(350, "Waanti");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();
                if (this.alpha == true)
                {
                    if (player.weaponEquipped == "none" && player.getSurvivalism() >= 12 && !this.disturbed)
                    {
                        if (this.target == player)
                        {
                            this.pointTowardsPlayer();
                        }
                        else if (this.target != "none")
                        {
                            this.pointTowards(this.target);
                        }
                    }
                    else
                    {
                        if (this.target == player)
                        {
                            this.pointAwayFromPlayer();
                        }
                        else if (this.target != "none")
                        {
                            this.pointAway(this.target);
                        }
                    }
                }
                else if (this.alpha == "baby")
                {
                    if (player.weaponEquipped == "none" && player.getSurvivalism() >= 12 && !this.disturbed)
                    {
                        if (this.target == player)
                        {
                            this.pointTowardsPlayer();
                        }
                        else if (this.target != "none")
                        {
                            this.pointAway(this.target);
                        }
                    }
                    else
                    {
                        if (this.target == player)
                        {
                            this.pointAwayFromPlayer();
                        }
                        else if (this.target != "none")
                        {
                            this.pointAway(this.target);
                        }
                    }
                }
                else
                {
                    if (player.weaponEquipped == "none" && player.getSurvivalism() >= 12 && !this.disturbed)
                    {
                        if (this.target == player)
                        {
                            this.pointTowardsPlayer();
                        }
                        else if (this.target != "none")
                        {
                            this.pointAway(this.target);
                        }
                    }
                    else
                    {
                        if (this.target == player)
                        {
                            this.pointAwayFromPlayer();
                        }
                        else if (this.target != "none")
                        {
                            this.pointAway(this.target);
                        }
                    }
                }
                if (this.target == player && player.getSurvivalism() < 12 || this.target == player && this.disturbed || this.target == player && player.weaponEquipped != "none")
                {
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(2, 0.155, false);
                }
                else
                {
                    this.goatEatness += 1;
                    if(this.goatEatness > (this.attackWait * 100))
                    {
                        this.costumeEngine(4, 0.045, true);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.

                //manual damaging
                if (theCostume <= 0)
                {
                    if (this.goatly == true)
                    {
                        this.goatEatness = 0;
                        this.goatly = false
                    }
                    if (this.moving  && !this.attacking)
                    {
                        this.drawUnit(furr, 263, 12, 76, 46, -1/2 * 76 * this.alphaSize - this.xAdjustment, -1/2 * 46 * this.alphaSize - this.yAdjustment, 76 * this.alphaSize, 46 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(furr, 269, 109, 76, 46, -1/2 * 76 * this.alphaSize - this.xAdjustment, -1/2 * 46 * this.alphaSize - this.yAdjustment, 76 * this.alphaSize, 46 * this.alphaSize);
                    }
                }
                else if (theCostume == 1)
                {
                    if (this.moving && !this.attacking)
                    {
                        this.drawUnit(furr, 268, 64, 76, 46, -1/2 * 76 * this.alphaSize - this.xAdjustment, -1/2 * 46 * this.alphaSize - this.yAdjustment, 76 * this.alphaSize, 46 * this.alphaSize);
                    }
                    else
                    {
                        this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.
                        this.drawUnit(furr, 271, 191, 76, 46, -1/2 * 76 * this.alphaSize - this.xAdjustment, -1/2 * 46 * this.alphaSize - this.yAdjustment, 76 * this.alphaSize, 46 * this.alphaSize);
                    }
                }
                else if (theCostume == 2)
                {
                    if (this.moving && !this.attacking)
                    {
                        this.drawUnit(furr, 269, 109, 76, 46, -1/2 * 76 * this.alphaSize - this.xAdjustment, -1/2 * 46 * this.alphaSize - this.yAdjustment, 76 * this.alphaSize, 46 * this.alphaSize);
                    }
                    else
                    {
                        if (this.damageDealt == false) // if the Unit has not yet dealt damage to its target then...
                        {
                            this.health = Math.min(this.healthMAX, this.health + 0.2);
                            this.damageDealt = true; //tell the loop that the Unit has already dealt the damage for this attack.
                        }
                        this.drawUnit(furr, 271, 147, 76, 46, -1/2 * 76 * this.alphaSize - this.xAdjustment, -1/2 * 46 * this.alphaSize - this.yAdjustment, 76 * this.alphaSize, 46 * this.alphaSize);
                    }
                }
                else if (theCostume == 3)
                {
                    if (this.moving && !this.attacking)
                    {
                        this.drawUnit(furr, 269, 109, 76, 46, -1/2 * 76 * this.alphaSize - this.xAdjustment, -1/2 * 46 * this.alphaSize - this.yAdjustment, 76 * this.alphaSize, 46 * this.alphaSize);
                    }
                    else
                    {
                        this.goatly = true;
                        this.drawUnit(furr, 271, 147, 76, 46, -1/2 * 76 * this.alphaSize - this.xAdjustment, -1/2 * 46 * this.alphaSize - this.yAdjustment, 76 * this.alphaSize, 46 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(furr, 268, 236, 76, 46, -1/2 * 76 * this.alphaSize - this.xAdjustment, -1/2 * 46 * this.alphaSize - this.yAdjustment, 76 * this.alphaSize, 46 * this.alphaSize);
            }

            if (this.X != this.plantedX || this.Y != this.plantedY)
            {
                console.log(this.plantedX + " " + this.X)
                this.attacking = false;
            }
            else
            {
                this.attacking = true;
            }

            this.plantedX = this.X;
            this.plantedY = this.Y;

        }
        //MOFU
        if (this.type == "Mofu") //pronounced moe-foo
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                this.experience = (2 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("rawLargeMofuFlesh", this.X, this.Y), 1], [new Item("mofuFeather", this.X, this.Y), Math.floor(Math.random() * 5) + 1], [new Item("mofuFoot", this.X, this.Y), 2]];
            }
            else if (this.alpha == "baby")
            {
                this.experience = (2 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("rawMofflingFlesh", this.X, this.Y), 1]];
            }
            else
            {
                this.experience = (2 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("rawMofuFlesh", this.X, this.Y), 1], [new Item("mofuFeather", this.X, this.Y), Math.floor(Math.random() * 2) + 1], [new Item("mofuFoot", this.X, this.Y), 2]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(1000, false);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(400, false);
            }
            else
            {
                this.rangeOfSightCalculator(800, false);
            }

            //AI
            if (this.alive == true)
            {
                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                //Growth by food (leveling/evolution)
                if (this.alpha == "baby")
                {
                    if (this.mofuFood >= 14)
                    {
                        this.mofuFood = 0;
                        this.alpha = false;

                        //new stats below:
                        //----------------

                        this.healthMAX = 4;
                        this.health = this.healthMAX;
                        this.engagementRadius = 12;
                        this.sizeRadius = 9;
                        this.attackWait = 3;
                        this.alphaSize = 1;
                    }
                }
                else if (this.alpha == false)
                {
                    if (this.mofuFood >= 26)
                    {
                        this.mofuFood = 0;
                        this.alpha = true;

                        //new stats below:
                        //----------------

                        this.healthMAX = 7 + Math.round(Math.random());
                        this.health = this.healthMAX;
                        this.engagementRadius = 24;
                        this.sizeRadius = 18;
                        this.attackWait = 2.5;
                        this.alphaSize = 2;
                    }
                }
                else if (this.alpha == true)
                {
                    if (this.mofuFood >= 66)
                    {
                        this.drops = [[new Item("rawLargeMofuFlesh", this.X, this.Y), 1], [new Item("mofuFeather", this.X, this.Y), Math.floor(Math.random() * 5) + 1], [new Item("mofuFoot", this.X, this.Y), 2], [new Item("fattyMofuLiver", this.X, this.Y), 1]];
                    }
                }

                if (this.alpha == false || this.alpha == true)
                {
                    //egg laying
                    this.eggTimer += 1 * (TTD / 16.75);
                    if (this.eggTimer >= 10000)
                    {
                        this.eggTimer = 0;

                        var canPlace = true;
                        var hits = 0;
                        for (var j = 0; j < scenicList.length; j++)
                        {
                            //5 is the radius of mofuEgg Scenery Object.
                            if (scenicList[j].X - 5 <= this.X + scenicList[j].radius && scenicList[j].X + 5 >= this.X - scenicList[j].radius && scenicList[j].Y - 5 <= this.Y + scenicList[j].radius && scenicList[j].Y + 5 >= this.Y - scenicList[j].radius)
                            {
                                canPlace = false;
                            }
                        }

                        if (canPlace == true)
                        {
                            scenicList.push(new Scenery("fertilizedMofuEgg", this.X, this.Y, (Math.random() * (2 * Math.PI)), false));
                        }

                        this.mofuFood = Math.max(0, this.mofuFood - 1)
                    }
                }

                //BIRD BRAIN
                //Process
                if (this.team != "player")
                {
                    if (this.DTP() <= 1/3 * this.rangeOfSight && shiftKey == true && wKey == true && player.getSurvivalism() < 40 || this.alpha != true && this.DTP() <= 28 && this.attacking == false && altKey == false || this.alpha == true && this.DTP() <= 41 && this.attacking == false && altKey == false || this.DTU(this.target) <= 36 && this.target != player)
                    {
                        this.disturbedTime = new Date().getTime();
                    }
                }

                if (this.disturbed == false) //if not frightened...
                {
                    this.mofuTargetFood = "none";
                    this.moving = false;
                    this.attacking = false;
                    this.flying = false;
                    if (this.alpha == false)
                    {
                        this.speed = 1;
                    }
                    else if (this.alpha == true)
                    {
                        this.speed = 1.35;
                    }
                    else if (this.alpha == "baby")
                    {
                        this.speed = 0.85;
                    }
                    for (var i = 0; i < worldItems.length; i++) //look for food... (grains and breads)
                    {
                        if (worldItems[i][0].type == "santhGrain" || worldItems[i][0].type == "harstGrain" || worldItems[i][0].type == "santhBread"|| worldItems[i][0].type == "butteredSanthBread" || worldItems[i][0].type == "harstBread" || worldItems[i][0].type == "butteredHarstBread")
                        {
                            if (this.distanceFinder(this, worldItems[i][0]) <= (this.rangeOfSight / 2)) // if grains are easy to get to go after them.
                            {
                                if (this.mofuTargetFood == "none")
                                {
                                    this.mofuTargetFood = worldItems[i][0];
                                }
                                else
                                {
                                    if (this.distanceFinder(this, worldItems[i][0]) < this.distanceFinder(this, this.mofuTargetFood))
                                    {
                                        this.mofuTargetFood = worldItems[i][0];
                                    }
                                }
                            }
                        }
                    }
                    if (this.mofuTargetFood != "none")
                    {
                        if (this.distanceFinder(this, this.mofuTargetFood) <= this.engagementRadius)
                        {
                            this.attacking = true;
                        }
                        else
                        {
                            this.attacking = false;
                            this.pointTowards(this.mofuTargetFood);
                            this.moveInRelationToThing(this.mofuTargetFood);
                        }
                    }
                }
                else
                {
                    this.attacking = false;
                    this.flying = true;
                    if (this.alpha == false)
                    {
                        this.speed = 5;
                    }
                    else if (this.alpha == true)
                    {
                        this.speed = 6.5;
                    }
                    else if (this.alpha == "baby")
                    {
                        this.speed = 3.85;
                    }

                    if (this.target == player)
                    {
                        this.pointAwayFromPlayer();
                        this.moveInRelationToPlayer();
                    }
                    else if (this.target != "none")
                    {
                        this.pointAway(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking && this.disturbed == false) //walking (towards food)
                {
                    this.costumeEngine(2, 0.05, false);
                }
                else if (this.moving && !this.attacking && this.disturbed == true) //flying (away from player)
                {
                    this.costumeEngine(2, 0.065, false);
                }
                else if (this.attacking) //eating food (off the ground)
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(3, 0.04, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                //manual damaging
                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(mofu, 108, 9, 40, 36, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 36 * this.alphaSize);
                    }
                    else if (this.moving && !this.flying)
                    {
                        this.drawUnit(mofu, 194, 10, 40, 36, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 36 * this.alphaSize);
                    }
                    else if (this.flying)
                    {
                        this.drawUnit(mofu, 163, 48, 40, 36, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 36 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 108, 9, 40, 36, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 36 * this.alphaSize);
                    }
                }
                else if (theCostume == 1)
                {
                    if (this.attacking)
                    {
                        this.mofuFeastPrepped = true;
                        this.drawUnit(mofu, 152, 10, 40, 36, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 36 * this.alphaSize);
                    }
                    else if (!this.flying)
                    {
                        this.drawUnit(mofu, 236, 9, 40, 36, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 36 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 205, 47, 40, 36, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 36 * this.alphaSize);
                    }
                }
                else if (theCostume >= 2)
                {
                    if (this.attacking)
                    {
                        if (this.mofuFeastPrepped == true)
                        {
                            for (var i = 0; i < worldItems.length; i++)
                            {
                                if (worldItems[i][0] === this.mofuTargetFood)
                                {
                                    this.mofuFood += 1;
                                    if (worldItems[i][1] > 1)
                                    {
                                        worldItems[i][1] -= 1;
                                        break;
                                    }
                                    else
                                    {
                                        this.mofuTargetFood = "none";
                                        worldItems.splice(i, 1);
                                        break;
                                    }
                                }
                            }
                            this.mofuFeastPrepped = false;
                        }
                        this.drawUnit(mofu, 152, 10, 40, 36, -1 / 2 * 40 * this.alphaSize - this.xAdjustment, -1 / 2 * 36 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 36 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(mofu, 108, 9, 40, 36, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 36 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(mofu, 348, 5, 40, 36, -1/2 * 40 * this.alphaSize - this.xAdjustment, -1/2 * 36 * this.alphaSize - this.yAdjustment, 40 * this.alphaSize, 36 * this.alphaSize);
            }

        }
        //FLETTER
        if (this.type == "Fletter")
        {
            //Set Drops and experience
            this.experience = (1 * ((player.getIntelligence() / 50) + 1));
            if (this.hunger >= 7)
            {
                this.drops = [[new Item("fletterWing", this.X, this.Y), Math.round(Math.random() + 1)], [new Item("vel", this.X, this.Y), 1]];
            }
            else if (this.hunger > 0)
            {
                this.drops = [[new Item("fletterWing", this.X, this.Y), Math.round(Math.random() + 1)]];
            }


            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(900, false);
            }
            else
            {
                this.rangeOfSightCalculator(900, false);
            }

            //AI
            if (this.alive == true)
            {
                this.hunger -= 0.0002 * (TTD / 16.75);
                if (this.hunger < 0)
                {
                    this.health -= 0.0005 * (TTD / 16.75);
                }

                //eat from plants (non-fungi)
                var plantsToTarget = this.nearbyPlants(1, "fungi", true, false);
                var plantTarget = "none";
                if (plantsToTarget.length >= 1)
                {
                    plantTarget = plantsToTarget[0];
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    if (this.DTP() < 100 && player.getSurvivalism() >= 2 && this.hunger > 5 || this.DTP() < 290 && player.getSurvivalism() < 2 && this.hunger > 5)
                    {
                        this.pointAwayFromPlayer();
                        this.moveInRelationToPlayer();
                    }
                    else if (this.hunger <= 8)
                    {
                        if (plantTarget != "none")
                        {
                            this.pointTowards(plantTarget);
                            this.moveInRelationToThing(plantTarget);
                            if (this.DTU(plantTarget) <= this.engagementRadius && plantTarget.nectarNum >= 1)
                            {
                                this.attacking = true;
                            }
                            else
                            {
                                this.attacking = false;
                            }
                        }
                    }
                    else //fly around in circles to waste time
                    {
                        this.newRotation += this.rotationSpeed;
                        this.moveInRelationToPlayer();
                    }
                }
                else if (this.target != "none")
                {
                    if (this.DTU(this.target) < 900 && this.hunger > 5)
                    {
                        this.pointAway(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                    else if (this.hunger < 8)
                    {
                        if (plantTarget != "none")
                        {
                            this.pointTowards(plantTarget);
                            this.moveInRelationToThing(plantTarget);
                            if (this.DTU(plantTarget) <= this.engagementRadius && plantTarget.nectarNum >= 1)
                            {
                                this.attacking = true;
                            }
                            else
                            {
                                this.attacking = false;
                            }
                        }
                    }
                    else //fly around in circles to waste time
                    {
                        this.newRotation -= this.rotationSpeed;
                        this.moveInRelationToThing(this.target);
                    }
                }
            }

            //ANIMATIONS
            var szx = 1.6;
            if (this.alive == true)
            {
                this.costumeEngine(4, 0.5, false);

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                //manual damaging
                if (theCostume <= 0)
                {
                    this.other = true;
                    this.drawUnit(nognog, 774, 135, 28, 28, -1/2 * 28 * this.alphaSize * szx - this.xAdjustment, -1/2 * 28 * this.alphaSize * szx - this.yAdjustment, 28 * this.alphaSize * szx, 28 * this.alphaSize * szx);
                }
                else if (theCostume <= 1)
                {
                    this.drawUnit(nognog, 812, 135, 28, 28, -1/2 * 28 * this.alphaSize * szx - this.xAdjustment, -1/2 * 28 * this.alphaSize * szx - this.yAdjustment, 28 * this.alphaSize * szx, 28 * this.alphaSize * szx);
                }
                else if (theCostume <= 2)
                {
                    this.drawUnit(nognog, 849, 135, 28, 28, -1/2 * 28 * this.alphaSize * szx - this.xAdjustment, -1/2 * 28 * this.alphaSize * szx - this.yAdjustment, 28 * this.alphaSize * szx, 28 * this.alphaSize * szx);
                }
                else if (theCostume >= 3)
                {
                    if (this.attacking)
                    {
                        if (this.other)
                        {
                            this.attacking = false;
                            this.other = false;
                            plantTarget.nectarNum -= 1;
                            this.hunger = Math.min(this.hungerMAX, this.hunger + 1);
                        }
                    }
                    this.drawUnit(nognog, 812, 135, 28, 28, -1/2 * 28 * this.alphaSize * szx - this.xAdjustment, -1/2 * 28 * this.alphaSize * szx - this.yAdjustment, 28 * this.alphaSize * szx, 28 * this.alphaSize * szx);
                }
            }
            else
            {
                this.drawUnit(nognog, 838, 103, 28, 28, -1/2 * 28 * this.alphaSize * szx - this.xAdjustment, -1/2 * 28 * this.alphaSize * szx - this.yAdjustment, 28 * this.alphaSize * szx, 28 * this.alphaSize * szx);
            }

        }

        //HOFFALGRE
        if (this.type == "Hoffalgre")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                this.experience = (25 * ((player.getIntelligence() / 50) + 1));
                if (this.hunger > 0)
                {
                    if (this.sex == "Male")
                    {
                        this.drops = [[new Item("hoffalgrePelt", this.X, this.Y), 2], [new Item("rawHoffalgreFlesh", this.X, this.Y), 2], [new Item("hoffalgreTendrils", this.X, this.Y), 1]];
                    }
                    else if (this.horniness == 100)
                    {
                        this.drops = [[new Item("hoffalgrePelt", this.X, this.Y), 1], [new Item("rawHoffalgreFlesh", this.X, this.Y), 2], [new Item("hoffalgreTendrils", this.X, this.Y), 2]];
                    }
                    else
                    {
                        this.drops = [[new Item("hoffalgrePelt", this.X, this.Y), 1], [new Item("rawHoffalgreFlesh", this.X, this.Y), 1], [new Item("hoffalgreTendrils", this.X, this.Y), 2]];
                    }
                }
            }
            else if (this.alpha == "baby")
            {
                this.experience = (3 * ((player.getIntelligence() / 50) + 1));
                if (this.hunger > 0)
                {
                    this.drops = [[new Item("rawHoffalgreFlesh", this.X, this.Y), 1]];
                }
            }
            else
            {
                this.experience = (15 * ((player.getIntelligence() / 50) + 1));
                if (this.hunger > 0)
                {
                    this.drops = [[new Item("hoffalgrePelt", this.X, this.Y), 1], [new Item("rawHoffalgreFlesh", this.X, this.Y), 1], [new Item("hoffalgreTendrils", this.X, this.Y), 1]];
                }
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(250, false);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(200, false);
            }
            else
            {
                this.rangeOfSightCalculator(250, false);
            }

            //AI
            if (this.alive == true)
            {
                //Growth by food (leveling/evolution)
                if (this.alpha == "baby")
                {
                    if (this.sustenance >= 10)
                    {
                        this.alpha = false;

                        //new stats below:
                        //----------------
                        this.alphaSize = 1;

                        this.magicalResistance = 0;
                        this.heatResistance = -2.5;
                        this.attackStyle = "chunked";
                        this.attackRate = 0;  //this is for rapid style combat only.
                        this.healthMAX = Math.floor(Math.random() * 5) + 7;
                        this.health = this.healthMAX;
                        this.armour = 0;
                        this.speed = 1.9;
                        this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                        this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                        this.engagementRadius = 25;
                        this.sizeRadius = 13.75;
                        this.negateArmour = 0;
                        this.attackWait = 1.5;
                        this.horniness = 0;
                        this.hungerMAX = 20;
                        this.hunger = 20;
                        this.sustenance = 0;
                    }
                }
                else if (this.alpha == false)
                {
                    if (this.sustenance >= 35)
                    {
                        this.alpha = true;

                        //new stats below:
                        //----------------

                        if (Math.round(Math.random()))
                        {
                            this.sex = "Female";
                            this.magicalResistance = 0;
                            this.heatResistance = -2.5;
                            this.attackStyle = "chunked";
                            this.attackRate = 0;  //this is for rapid style combat only.
                            this.healthMAX = Math.floor(Math.random() * 6) + 12;
                            this.health = this.healthMAX;
                            this.armour = 0;
                            this.speed = 2.1;
                            this.rangeOfSight = 600; //This is just to set the variable initially. The rest is variable.
                            this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                            this.engagementRadius = 39;
                            this.sizeRadius = 15.5;
                            this.negateArmour = 0;
                            this.attackWait = 1.5;
                            this.horniness = 0;
                            this.hungerMAX = 55;
                            this.hunger = 55;
                            this.sustenance = -1000000;
                        }
                        else
                        {
                            this.sex = "Male";
                            this.magicalResistance = 0;
                            this.heatResistance = -2.5;
                            this.attackStyle = "chunked";
                            this.attackRate = 0;  //this is for rapid style combat only.
                            this.healthMAX = Math.floor(Math.random() * 8) + 15;
                            this.health = this.healthMAX;
                            this.armour = 0;
                            this.speed = 2.4;
                            this.rangeOfSight = 640; //This is just to set the variable initially. The rest is variable.
                            this.rotationSpeed = 0.1; // 0.01 is a standard turn speed.
                            this.engagementRadius = 44;
                            this.sizeRadius = 17;
                            this.negateArmour = 0;
                            this.attackWait = 1.5;
                            this.horniness = 0;
                            this.hungerMAX = 25;
                            this.hunger = 25;
                            this.sustenance = -1000000;
                        }
                    }
                }

                if (this.sex == "Female" && this.horniness == 100)
                {
                    //egg laying
                    this.eggTimer += 1 * (TTD / 16.75);
                    if (this.eggTimer >= 4000)
                    {
                        this.horniness = 0;
                        this.eggTimer = 0;
                        var babyAmt = Math.floor(Math.random() * 2) + 1;
                        for (var i = 0; i < babyAmt; i++)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Hoffalgre", "baby", "Unit Generated Hoffalgre"));
                        }
                        this.hunger = Math.max(0, this.hunger - 15);
                    }
                }

                //Hoffalgre Brain
                var mate = {horniness: 0};
                var mother = "none";
                if (this.alpha == "baby")
                {
                    var closestMother = 1000000;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].type == "Hoffalgre")
                        {
                            if (ArtificialIntelligenceAccess[i].sex == "Female")
                            {
                                if (this.DTU(ArtificialIntelligenceAccess[i]) < closestMother)
                                {
                                    mother = ArtificialIntelligenceAccess[i];
                                }
                            }
                        }
                    }
                }

                //hunger and tittling
                if (mother != "none")
                {
                    if (this.DTU(mother) > (this.engagementRadius + this.sizeRadius + mother.sizeRadius) || mother.hunger < 10 || this.hunger > 9.75)
                    {
                        this.hunger -= 0.0002 * (TTD / 16.75);
                        if (this.hunger < 0)
                        {
                            this.health -= 0.0005 * (TTD / 16.75);
                        }
                        this.suckling = false;
                    }
                    else
                    {
                        this.suckling = true;
                    }
                }
                else
                {
                    this.hunger -= 0.0002 * (TTD / 16.75);
                    if (this.hunger < 0)
                    {
                        this.health -= 0.0005 * (TTD / 16.75);
                    }
                }

                //male sex drive
                if (this.sex == "Male")
                {
                    this.horniness += 0.001 * (TTD / 16.75);
                    if (this.hunger > 10)
                    {
                        this.health -= 0.0005 * (TTD / 16.75);
                    }
                }

                //eat from plants (non-fungi)
                var plantsToTarget = this.nearbyPlants(1, "fungi", false, true);
                var plantTarget = "none";
                if (plantsToTarget.length >= 1)
                {
                    plantTarget = plantsToTarget[0];
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    if (this.DTP() < this.rangeOfSight)
                    {
                        this.pointAwayFromPlayer();
                        this.moveInRelationToPlayer();
                        this.suckling = false;
                    }
                    else if (this.alpha == "baby")
                    {
                        if (mother != "none")
                        {
                            if (this.DTU(mother) > this.engagementRadius + this.sizeRadius + mother.sizeRadius)
                            {
                                this.pointTowards(mother);
                                this.moveInRelationToThing(mother);
                            }
                            else
                            {
                                this.pointTowards(mother);
                                this.moving = false;
                            }
                        }
                        else
                        {
                            this.suckling = false;
                        }
                    }
                    else if (this.horniness > 10 && this.sex == "Male")
                    {
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].type == "Hoffalgre")
                            {
                                if (ArtificialIntelligenceAccess[i].sex == "Female" && ArtificialIntelligenceAccess[i].horniness == 0)
                                {
                                    mate = ArtificialIntelligenceAccess[i];
                                    break;
                                }
                            }
                        }
                        this.pointTowards(mate);
                        this.moveInRelationToThing(mate);
                        if (this.DTU(mate) <= this.engagementRadius)
                        {
                            this.sexing = true;
                        }
                    }
                    else if (this.hunger <= this.hungerMAX - 5)
                    {
                        if (plantTarget != "none")
                        {
                            this.pointTowards(plantTarget);
                            this.moveInRelationToThing(plantTarget);
                            if (this.DTU(plantTarget) <= this.engagementRadius && plantTarget.phase != "picked")
                            {
                                this.attacking = true;
                            }
                            else
                            {
                                this.attacking = false;
                            }
                        }
                    }
                    else
                    {
                        this.moving = false;
                    }
                }
                else if (this.target != "none")
                {
                    if (this.DTU(this.target) < this.rangeOfSight)
                    {
                        this.pointAway(this.target);
                        this.moveInRelationToThing(this.target);
                        this.suckling = false;
                    }
                    else if (this.alpha == "baby")
                    {
                        if (mother != "none")
                        {
                            if (this.DTU(mother) > this.engagementRadius + this.sizeRadius + mother.sizeRadius)
                            {
                                this.pointTowards(mother);
                                this.moveInRelationToThing(mother);
                            }
                            else
                            {
                                this.moving = false;
                                this.pointTowards(mother);
                            }
                        }
                        else
                        {
                            this.suckling = false;
                        }
                    }
                    else if (this.horniness > 10 && this.sex == "Male")
                    {
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].type == "Hoffalgre")
                            {
                                if (ArtificialIntelligenceAccess[i].sex == "Female" && ArtificialIntelligenceAccess[i].horniness == 0)
                                {
                                    mate = ArtificialIntelligenceAccess[i];
                                    break;
                                }
                            }
                        }
                        this.pointTowards(mate);
                        this.moveInRelationToThing(mate);
                        if (this.DTU(mate) <= this.engagementRadius * 1.5)
                        {
                            this.sexing = true;
                        }
                    }
                    else if (this.hunger <= this.hungerMAX - 5)
                    {
                        if (plantTarget != "none")
                        {
                            this.pointTowards(plantTarget);
                            this.moveInRelationToThing(plantTarget);
                            if (this.DTU(plantTarget) <= this.engagementRadius && plantTarget.phase != "picked")
                            {
                                this.attacking = true;
                            }
                            else
                            {
                                this.attacking = false;
                            }
                        }
                    }
                    else
                    {
                        this.moving = false;
                    }
                }
            }

            //ANIMATIONS
            var szx = 1.6;
            if (this.alive == true)
            {
                if (this.attacking || this.sexing || this.suckling)
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(7, 0.20, true);
                    }
                }
                else if (this.moving && !this.attacking)
                {
                    this.costumeEngine(4, 0.15, false);
                }
                else
                {
                    this.costume = 0;
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                //manual damaging
                if (theCostume <= 0)
                {
                    this.other = true;
                    if (this.attacking || this.sexing || this.suckling)
                    {
                        this.drawUnit(nognog, 49, 9, 56, 19, -1/2 * 56 * this.alphaSize * szx - this.xAdjustment, -1/2 * 19 * this.alphaSize * szx - this.yAdjustment, 56 * this.alphaSize * szx, 19 * this.alphaSize * szx);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(nognog, 532, 9, 58, 23, -1/2 * 58 * this.alphaSize * szx - this.xAdjustment, -1/2 * 23 * this.alphaSize * szx - this.yAdjustment, 58 * this.alphaSize * szx, 23 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.drawUnit(nognog, 49, 9, 56, 19, -1/2 * 56 * this.alphaSize * szx - this.xAdjustment, -1/2 * 19 * this.alphaSize * szx - this.yAdjustment, 56 * this.alphaSize * szx, 19 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking || this.sexing || this.suckling)
                    {
                        this.drawUnit(nognog, 91, 9, 56, 19, -1/2 * 56 * this.alphaSize * szx - this.xAdjustment, -1/2 * 19 * this.alphaSize * szx - this.yAdjustment, 56 * this.alphaSize * szx, 19 * this.alphaSize * szx);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(nognog, 582, 9, 58, 23, -1/2 * 58 * this.alphaSize * szx - this.xAdjustment, -1/2 * 23 * this.alphaSize * szx - this.yAdjustment, 58 * this.alphaSize * szx, 23 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking || this.sexing || this.suckling)
                    {
                        this.drawUnit(nognog, 138, 10, 56, 19, -1/2 * 56 * this.alphaSize * szx - this.xAdjustment, -1/2 * 19 * this.alphaSize * szx - this.yAdjustment, 56 * this.alphaSize * szx, 19 * this.alphaSize * szx);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(nognog, 421, 10, 58, 23, -1/2 * 58 * this.alphaSize * szx - this.xAdjustment, -1/2 * 23 * this.alphaSize * szx - this.yAdjustment, 58 * this.alphaSize * szx, 23 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking || this.sexing || this.suckling)
                    {
                        this.drawUnit(nognog, 191, 10, 51, 19, -1/2 * 51 * this.alphaSize * szx - this.xAdjustment, -1/2 * 19 * this.alphaSize * szx - this.yAdjustment, 51 * this.alphaSize * szx, 19 * this.alphaSize * szx);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(nognog, 469, 10, 58, 23, -1/2 * 58 * this.alphaSize * szx - this.xAdjustment, -1/2 * 23 * this.alphaSize * szx - this.yAdjustment, 58 * this.alphaSize * szx, 23 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking || this.sexing || this.suckling)
                    {
                        this.drawUnit(nognog, 241, 10, 55, 19, -1/2 * 55 * this.alphaSize * szx - this.xAdjustment, -1/2 * 19 * this.alphaSize * szx - this.yAdjustment, 55 * this.alphaSize * szx, 19 * this.alphaSize * szx);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(nognog, 532, 9, 58, 23, -1/2 * 58 * this.alphaSize * szx - this.xAdjustment, -1/2 * 23 * this.alphaSize * szx - this.yAdjustment, 58 * this.alphaSize * szx, 23 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 5)
                {
                    if (this.attacking || this.sexing || this.suckling)
                    {
                        this.drawUnit(nognog, 302, 10, 62, 21, -1/2 * 62 * this.alphaSize * szx - this.xAdjustment, -1/2 * 21 * this.alphaSize * szx - this.yAdjustment, 62 * this.alphaSize * szx, 21 * this.alphaSize * szx);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(nognog, 582, 9, 58, 23, -1/2 * 58 * this.alphaSize * szx - this.xAdjustment, -1/2 * 23 * this.alphaSize * szx - this.yAdjustment, 58 * this.alphaSize * szx, 23 * this.alphaSize * szx);
                    }
                }
                else if (theCostume >= 6)
                {
                    if (this.attacking || this.sexing || this.suckling)
                    {
                        this.drawUnit(nognog, 362, 9, 58, 23, -1/2 * 58 * this.alphaSize * szx - this.xAdjustment, -1/2 * 23 * this.alphaSize * szx - this.yAdjustment, 58 * this.alphaSize * szx, 23 * this.alphaSize * szx);
                    }
                    else if (this.moving)
                    {
                        this.drawUnit(nognog, 421, 10, 58, 23, -1/2 * 58 * this.alphaSize * szx - this.xAdjustment, -1/2 * 23 * this.alphaSize * szx - this.yAdjustment, 58 * this.alphaSize * szx, 23 * this.alphaSize * szx);
                    }

                    if (this.sexing)
                    {
                        this.sexing = false;
                        mate.horniness = 100;
                        this.horniness = 0;
                    }

                    if (this.suckling && this.hunger <= 9.75 && this.alpha == "baby")
                    {
                        if (this.other)
                        {
                            this.other = false;
                            mother.hunger -= 0.25;
                            this.hunger += 0.25;
                            this.sustenance += 0.25;
                            this.suckling = false;
                        }
                    }

                    if (this.attacking)
                    {
                        if (this.other)
                        {
                            this.attacking = false;
                            this.other = false;
                            plantTarget.phase = "picked";
                            this.hunger = Math.min(this.hungerMAX, this.hunger + 5);
                            this.sustenance += 5;
                        }
                    }
                }
            }
            else
            {
                this.drawUnit(nognog, 798, 7, 58, 23, -1/2 * 58 * this.alphaSize * szx - this.xAdjustment, -1/2 * 23 * this.alphaSize * szx - this.yAdjustment, 58 * this.alphaSize * szx, 23 * this.alphaSize * szx);
            }
        }

        //ARDIL
        if (this.type == "Ardil")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                this.experience = (1 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("rawArdilFlesh", this.X, this.Y), 2], [new Item("ardilPelt", this.X, this.Y), 1]];
            }
            else if (this.alpha == "baby")
            {
                this.experience = (1 * ((player.getIntelligence() / 50) + 1));
            }
            else
            {
                this.experience = (1 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("rawArdilFlesh", this.X, this.Y), 1], [new Item("ardilPelt", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(800, false);
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(700, false);
            }
            else
            {
                this.rangeOfSightCalculator(800, false);
            }

            //AI
            if (this.alive == true)
            {
                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                //Growth by food (leveling/evolution)
                if (this.alpha == "baby")
                {
                    if (this.mofuFood >= 10)
                    {
                        this.mofuFood = 0;
                        this.alpha = false;

                        //new stats below:
                        //----------------

                        this.healthMAX = 1;
                        this.health = this.healthMAX;
                        this.engagementRadius = 12;
                        this.sizeRadius = 11;
                        this.attackWait = 2;
                        this.alphaSize = 1;
                        this.speed = 3.4
                    }
                }
                else if (this.alpha == false)
                {
                    if (this.mofuFood >= 22)
                    {
                        this.mofuFood = 0;
                        this.alpha = true;

                        //new stats below:
                        //----------------

                        if (Math.round(Math.random()))
                        {
                            this.healthMAX = 4;
                            this.health = this.healthMAX;
                            this.engagementRadius = 24;
                            this.sizeRadius = 16;
                            this.attackWait = 3;
                            this.alphaSize = 1.65;
                            this.speed = 3;
                            this.sex = "Female";
                        }
                        else
                        {
                            this.healthMAX = 3;
                            this.health = this.healthMAX;
                            this.engagementRadius = 24;
                            this.sizeRadius = 14;
                            this.attackWait = 2;
                            this.alphaSize = 1.45;
                            this.speed = 4;
                            this.sex = "Male";
                        }
                    }
                }

                if (this.sex == "Female")
                {
                    //egg laying
                    this.eggTimer += 1 * (TTD / 16.75);
                    if (this.eggTimer >= 20000)
                    {
                        this.eggTimer = 0;
                        var babyAmt = Math.floor(Math.random() * 3) + 1;
                        for (var i = 0; i < babyAmt; i++)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Ardil", "baby", "Unit Generated Ardil"));
                        }
                        this.mofuFood = Math.max(0, this.mofuFood - 22)
                    }
                }

                //Ardil BRAIN
                //Process
                if (this.team != "player")
                {
                    if (this.DTP() <= 1/2 * this.rangeOfSight && wKey == true && player.getSurvivalism() < 40 || this.DTU(this.target) <= 1/2 * this.rangeOfSight && this.target != player && this.target.type != "Ardil")
                    {
                        this.disturbedTime = new Date().getTime();
                    }
                }
                else
                {
                    if (this.DTP() <= this.rangeOfSight || this.DTU(this.target) <= 1/2 * this.rangeOfSight && this.target != player && this.target.type != "Ardil")
                    {
                        this.disturbedTime = new Date().getTime();
                    }
                }

                if (this.disturbed == false) //if not frightened...
                {
                    this.mofuTargetFood = "none";
                    this.moving = false;
                    this.attacking = false;

                    for (var i = 0; i < worldItems.length; i++) //look for food... (grains and breads)
                    {
                        if (worldItems[i][0].type == "santhGrain" || worldItems[i][0].type == "harstGrain" || worldItems[i][0].type == "santhBread" || worldItems[i][0].type == "butteredSanthBread" || worldItems[i][0].type == "harstBread" || worldItems[i][0].type == "butteredHarstBread" || worldItems[i][0].type == "akerBerries" || worldItems[i][0].type == "pluttBerries" || worldItems[i][0].type == "bushkaBerries" || worldItems[i][0].type == "gojiiBerries" || worldItems[i][0].type == "luufBerries" || worldItems[i][0].type == "suuliMelonSlice")
                        {
                            if (this.distanceFinder(this, worldItems[i][0]) <= (this.rangeOfSight / 2)) // if grains are easy to get to go after them.
                            {
                                if (this.mofuTargetFood == "none")
                                {
                                    this.mofuTargetFood = worldItems[i][0];
                                }
                                else
                                {
                                    if (this.distanceFinder(this, worldItems[i][0]) < this.distanceFinder(this, this.mofuTargetFood))
                                    {
                                        this.mofuTargetFood = worldItems[i][0];
                                    }
                                }
                            }
                        }
                    }
                    if (this.mofuTargetFood != "none")
                    {
                        if (this.distanceFinder(this, this.mofuTargetFood) <= this.engagementRadius)
                        {
                            this.attacking = true;
                        }
                        else
                        {
                            this.attacking = false;
                            this.pointTowards(this.mofuTargetFood);
                            this.moveInRelationToThing(this.mofuTargetFood);
                        }
                    }
                }
                else
                {
                    this.attacking = false;

                    if (this.target == player)
                    {
                        if (this.ID == "Irene's Pet Ardil")
                        {
                            if (wKey == true && shiftKey == false || wKey == false)
                            {
                                this.pointTowardsPlayer();
                            }
                            else
                            {
                                this.pointAwayFromPlayer();
                                this.moveInRelationToPlayer();
                            }
                        }
                        else
                        {
                            this.pointAwayFromPlayer();
                            this.moveInRelationToPlayer();
                        }
                    }
                    else if (this.target != "none")
                    {
                        this.pointAway(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //walking (towards food)
                {
                    this.costumeEngine(2, 0.05, false);
                }
                else if (this.attacking) //eating food (off the ground)
                {
                    if(new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(3, 0.05, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                //manual damaging
                if (theCostume <= 0)
                {
                    this.drawUnit(theCrack, 864, 700, 41, 22, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 22 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 22 * this.alphaSize);
                }
                else if (theCostume == 1)
                {
                    this.drawUnit(theCrack, 928, 700, 41, 22, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 22 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 22 * this.alphaSize);
                    if (this.attacking)
                    {
                        this.mofuFeastPrepped = true
                    }
                }
                else if (theCostume >= 2)
                {
                    if (this.attacking)
                    {
                        if (this.mofuFeastPrepped == true)
                        {
                            for (var i = 0; i < worldItems.length; i++)
                            {
                                if (worldItems[i][0] === this.mofuTargetFood)
                                {
                                    this.mofuFood += 1;
                                    if (worldItems[i][0].ability == "poisonI" || worldItems[i][0].ability == "poisonII" || worldItems[i][0].ability == "poisonIII" || worldItems[i][0].ability == "poisonIV" || worldItems[i][0].ability == "poisonV")
                                    {
                                        this.health = 0;
                                    }
                                    if (worldItems[i][1] > 1)
                                    {
                                        worldItems[i][1] -= 1;
                                        break;
                                    }
                                    else
                                    {
                                        this.mofuTargetFood = "none";
                                        worldItems.splice(i, 1);
                                        break;
                                    }
                                }
                            }
                            this.mofuFeastPrepped = false;
                        }
                        this.drawUnit(theCrack, 864, 700, 41, 22, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 22 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 22 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(theCrack, 864, 700, 41, 22, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 22 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 22 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(theCrack, 928, 700, 41, 22, -1/2 * 41 * this.alphaSize - this.xAdjustment, -1/2 * 22 * this.alphaSize - this.yAdjustment, 41 * this.alphaSize, 22 * this.alphaSize);
            }

        }
        //LIZARD
        if (this.type == "Lizard")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                this.experience = (1 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("lizardTail", this.X, this.Y), 1]];
            }
            else
            {
                this.experience = (0.5 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("lizardTail", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(250, false);
            }
            else
            {
                this.rangeOfSightCalculator(225, false);
            }

            //AI
            if (this.alive == true)
            {
                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointAwayFromPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointAway(this.target);
                    this.moveInRelationToThing(this.target);
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //walking (towards food)
                {
                    this.costumeEngine(3, 0.12, false);
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                //manual damaging
                if (theCostume <= 0)
                {
                    this.drawUnit(polypol, 1452, 24, 21, 14, -1/2 * 21 * this.alphaSize - this.xAdjustment, -1/2 * 14 * this.alphaSize - this.yAdjustment, 21 * this.alphaSize, 14 * this.alphaSize);
                }
                else if (theCostume == 1)
                {
                    this.drawUnit(polypol, 1475, 25, 21, 14, -1/2 * 21 * this.alphaSize - this.xAdjustment, -1/2 * 14 * this.alphaSize - this.yAdjustment, 21 * this.alphaSize, 14 * this.alphaSize);
                }
                else if (theCostume >= 2)
                {
                    this.drawUnit(polypol, 1499, 26, 21, 14, -1/2 * 21 * this.alphaSize - this.xAdjustment, -1/2 * 14 * this.alphaSize - this.yAdjustment, 21 * this.alphaSize, 14 * this.alphaSize);
                }
            }
            else
            {
                this.drawUnit(polypol, 1521, 26, 21, 14, -1/2 * 21 * this.alphaSize - this.xAdjustment, -1/2 * 14 * this.alphaSize - this.yAdjustment, 21 * this.alphaSize, 14 * this.alphaSize);
            }

        }
        //CONEJO
        if (this.type == "Conejo")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                this.experience = (1 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("rabbitFoot", this.X, this.Y), Math.floor(Math.random() * 3)], [new Item("rawRabbitFlesh", this.X, this.Y), 2], [new Item("rabbitPelt", this.X, this.Y), 1]];
            }
            else
            {
                this.experience = (0.5 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("rabbitFoot", this.X, this.Y), Math.floor(Math.random() * 3)], [new Item("rawRabbitFlesh", this.X, this.Y), 1], [new Item("rabbitPelt", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(240, false);
            }
            else
            {
                this.rangeOfSightCalculator(190, false);
            }

            //AI
            if (this.alive == true)
            {
                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    if (this.DTP() <= this.rangeOfSight && this.disturbed)
                    {
                        this.pointAwayFromPlayer();
                        this.moveInRelationToPlayer();
                        this.wandering = false; //when the rabbit encounters a threat it forgets its previous movement objective.
                        this.wanderHold = false;
                    }
                    else
                    {
                        this.wander(unitX, unitY, 600, 1/2 * this.baseSight, true);
                        if (this.wanderHold)
                        {
                            this.attacking = true;
                        }
                        else
                        {
                            this.attacking = false;
                        }
                    }
                }
                else if (this.target != "none")
                {

                    if (this.DTU(this.target) <= this.rangeOfSight)
                    {
                        this.pointAway(this.target);
                        this.moveInRelationToThing(this.target);
                        this.wandering = false; //when the rabbit encounters a threat it forgets its previous movement objective.
                        this.wanderHold = false;
                    }
                    else
                    {
                        this.wander(unitX, unitY, 600, 1/2 * this.baseSight, true);
                        if (this.wanderHold)
                        {
                            this.attacking = true;
                        }
                        else
                        {
                            this.attacking = false;
                        }
                    }
                }
            }

            //ANIMATIONS
            var szx = 1.5;
            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //hopping
                {
                    this.costumeEngine(8, 0.12, false);
                }
                else if (this.attacking) //looking around then nibbling at something on the ground
                {
                    this.costumeEngine(12, 0.20, false);
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                //manual damaging
                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 593, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.rotatable = true;
                        this.drawUnit(nognog, 593, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 626, 194, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.rotatable = true;
                        this.drawUnit(nognog, 776, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 593, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.rotatable = false;
                        this.drawUnit(nognog, 593, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 660, 194, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.rotatable = false;
                        this.drawUnit(nognog, 820, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 593, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.rotatable = false;
                        this.drawUnit(nognog, 820, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 699, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.rotatable = false;
                        this.drawUnit(nognog, 820, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 6)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 739, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.rotatable = false;
                        this.drawUnit(nognog, 820, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 7)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 739, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else
                    {
                        this.rotatable = false;
                        this.drawUnit(nognog, 820, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 8)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 739, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else //movement cut off (backup only)
                    {
                        this.rotatable = true;
                        this.drawUnit(nognog, 593, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 9)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 739, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else //movement cut off (backup only)
                    {
                        this.rotatable = true;
                        this.drawUnit(nognog, 593, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume <= 10)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(nognog, 699, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else //movement cut off (backup only)
                    {
                        this.rotatable = true;
                        this.drawUnit(nognog, 593, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
                else if (theCostume >= 11)
                {
                    if (this.attacking)
                    {
                        this.wanderHold = false;
                        this.drawUnit(nognog, 593, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                    else //movement cut off (backup only)
                    {
                        this.rotatable = true;
                        this.drawUnit(nognog, 593, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
                    }
                }
            }
            else
            {
                this.drawUnit(nognog, 863, 193, 19, 13, -1/2 * 19 * this.alphaSize * szx - this.xAdjustment, -1/2 * 13 * this.alphaSize * szx - this.yAdjustment, 19 * this.alphaSize * szx, 13 * this.alphaSize * szx);
            }

        }
        //TUNSK
        if (this.type == "Tunsk")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                this.experience = (2 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("rawTunskFlesh", this.X, this.Y), 1]];
            }
            else
            {
                this.experience = (1 * ((player.getIntelligence() / 50) + 1));
                this.drops = [[new Item("rawTunskFlesh", this.X, this.Y), 1]];
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(375, false);
            }
            else
            {
                this.rangeOfSightCalculator(325, false);
            }

            //AI
            if (this.alive == true)
            {
                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    //this.pointAwayFromPlayer();
                    //this.moveInRelationToPlayer();
                    if (this.moving)
                    {
                        this.newRotation -= (Math.random() / 5) * this.tunskTurn;

                        if (Math.round(Math.random()))
                        {
                            this.pointAwayFromPlayer();
                        }
                    }
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    //this.pointAway(this.target);
                    //this.moveInRelationToThing(this.target);
                    if (this.moving)
                    {
                        this.newRotation -= (Math.random() / 5) * this.tunskTurn;

                        if (Math.round(Math.random()))
                        {
                            this.pointAway(this.target);
                        }
                    }
                    this.moveInRelationToThing(this.target);
                }
            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //walking (towards food)
                {
                    this.costumeEngine(4, 0.135, false);
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor( this.costume ); //This rounds this.costume down to the nearest whole number.

                //manual damaging
                if (theCostume <= 0)
                {
                    this.drawUnit(mufmuf, 16, 3, 19, 15, -1/2 * 19 * this.alphaSize - this.xAdjustment, -1/2 * 15 * this.alphaSize - this.yAdjustment, 19 * this.alphaSize, 15 * this.alphaSize);
                }
                else if (theCostume <= 1)
                {
                    this.drawUnit(mufmuf, 45, 3, 19, 15, -1/2 * 19 * this.alphaSize - this.xAdjustment, -1/2 * 15 * this.alphaSize - this.yAdjustment, 19 * this.alphaSize, 15 * this.alphaSize);
                }
                else if (theCostume <= 2)
                {
                    this.drawUnit(mufmuf, 16, 3, 19, 15, -1/2 * 19 * this.alphaSize - this.xAdjustment, -1/2 * 15 * this.alphaSize - this.yAdjustment, 19 * this.alphaSize, 15 * this.alphaSize);
                }
                else if (theCostume >= 3)
                {
                    this.drawUnit(mufmuf, 75, 3, 19, 15, -1/2 * 19 * this.alphaSize - this.xAdjustment, -1/2 * 15 * this.alphaSize - this.yAdjustment, 19 * this.alphaSize, 15 * this.alphaSize);
                }
            }
            else
            {
                this.drawUnit(mufmuf, 104, 4, 19, 15, -1/2 * 19 * this.alphaSize - this.xAdjustment, -1/2 * 15 * this.alphaSize - this.yAdjustment, 19 * this.alphaSize, 15 * this.alphaSize);
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

                this.drops = [[new Item("hugeBogTrollSkull", this.X, this.Y), 1], [new Item("trollFlesh", this.X, this.Y), 12]];
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

                this.drops = [[new Item("babyBogTrollSkull", this.X, this.Y), 1], [new Item("trollFlesh", this.X, this.Y), 1]];
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

                this.drops = [[new Item("bogTrollSkull", this.X, this.Y), 1], [new Item("trollFlesh", this.X, this.Y), 7]];
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
                        this.health += 0.14;
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
                    this.callForNearbyHelpFromType(750, "Troll");

                    //troll health regeneration
                    if (this.health < this.healthMAX)
                    {
                        this.health += 0.025; //was 0.0185
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
                        this.health += 0.09;
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

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

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
                    this.drops = [[new Item("massiveWinterWolfPelt", this.X, this.Y), 1], [new Item("rawWinterWolfFlesh", this.X, this.Y), 3], [new Item("rawWolfLiver", this.X, this.Y), 1]];
                }
                else
                {
                    this.drops = [[new Item("massiveWinterWolfPelt", this.X, this.Y), 1], [new Item("rawWinterWolfFlesh", this.X, this.Y), 3]];
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
                    this.drops = [[new Item("winterWolfPelt", this.X, this.Y), 1], [new Item("rawWinterWolfFlesh", this.X, this.Y), 1], [new Item("rawWolfLiver", this.X, this.Y), 1]];
                }
                else
                {
                    this.drops = [[new Item("winterWolfPelt", this.X, this.Y), 1], [new Item("rawWinterWolfFlesh", this.X, this.Y), 1]];
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

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

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
        //GREY WOLF
        if (this.type == "GreyWolf")
        {
            var rndm = Math.round(Math.random());
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 22 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 90 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (90 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                if (rndm)
                {
                    this.drops = [[new Item("massiveGreyWolfPelt", this.X, this.Y), 1], [new Item("rawGreyWolfFlesh", this.X, this.Y), 3], [new Item("rawWolfLiver", this.X, this.Y), 1]];
                }
                else
                {
                    this.drops = [[new Item("massiveGreyWolfPelt", this.X, this.Y), 1], [new Item("rawGreyWolfFlesh", this.X, this.Y), 3]];
                }
            }
            else
            {
                if (Math.max(0, 8 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 38 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (38 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                if (rndm)
                {
                    this.drops = [[new Item("greyWolfPelt", this.X, this.Y), 1], [new Item("rawGreyWolfFlesh", this.X, this.Y), 1], [new Item("rawWolfLiver", this.X, this.Y), 1]];
                }
                else
                {
                    this.drops = [[new Item("greyWolfPelt", this.X, this.Y), 1], [new Item("rawGreyWolfFlesh", this.X, this.Y), 1]];
                }
            }

            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(700, "very");
            }
            else
            {
                this.rangeOfSightCalculator(600, "very");
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(17, 5);
                    this.callForNearbyHelpFromType(300, "GreyWolf");
                }
                else
                {
                    this.Attack(5, 3);
                    this.callForNearbyHelpFromType(550, "GreyWolf");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

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
                        this.drawUnit(oldverse, 2853, 17, 49, 29, -89 - this.xAdjustment, -53 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 2853, 17, 49, 29, -89 - this.xAdjustment, -53 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
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
                        this.drawUnit(oldverse, 2911, 18, 49, 29, -89 - this.xAdjustment, -48 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 2730, 16, 49, 29, -89 - this.xAdjustment, -53 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                }
                else if (theCostume == 2)
                {
                    this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.

                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 2968, 18, 49, 29, -89 - this.xAdjustment, -53 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 2791, 17, 49, 29, -89 - this.xAdjustment, -52 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                }
                else if (theCostume == 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 3027, 18, 49, 29, -89 - this.xAdjustment, -55 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                }
                else if (theCostume >= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 3083, 21, 49, 29, -89 - this.xAdjustment, -51 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(oldverse, 3139, 24, 49, 29, -93 - this.xAdjustment, -44 - this.yAdjustment, 49 * this.alphaSize, 29 * this.alphaSize);
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

                this.drops = [[new Item("gulfreyShell", this.X, this.Y), 3], [new Item("rawGulfreyFlesh", this.X, this.Y), 3], [new Item("gulfreyMandibles", this.X, this.Y), 1]];
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

                this.drops = [[new Item("rawGulfreyFlesh", this.X, this.Y), 1]];
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

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

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
                        this.drawUnit(oldverse, 103, 172, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 242, 10, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                    }
                }
                else if (theCostume == 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 103, 92, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 103, 172, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                    }
                }
                else if (theCostume == 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 103, 172, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 241, 94, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                    }
                }
                else if (theCostume >= 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 100, 12, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 241, 173, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(oldverse, 163, 225, 123, 52, -77 - this.xAdjustment, -53 - this.yAdjustment, 123 * this.alphaSize, 52 * this.alphaSize);
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
                    this.drops = [[new Item("torperFuzz", this.X, this.Y), 1], [new Item("torperVenomSac", this.X, this.Y), 1], [new Item("rawTorperFlesh", this.X, this.Y), 2]];
                }
                else
                {
                    if (rndmzr == 2)
                    {
                        this.drops = [[new Item("torperVenomSac", this.X, this.Y), 1], [new Item("rawTorperFlesh", this.X, this.Y), 2]];
                    }
                    else
                    {
                        this.drops = [[new Item("rawTorperFlesh", this.X, this.Y), 2]];
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
                    this.drops = [[new Item("torperFuzz", this.X, this.Y), 1], [new Item("torperVenomSac", this.X, this.Y), 1], [new Item("rawTorperFlesh", this.X, this.Y), 1]];
                }
                else
                {
                    if (rndmzr == 2)
                    {
                        this.drops = [[new Item("torperVenomSac", this.X, this.Y), 1], [new Item("rawTorperFlesh", this.X, this.Y), 1]];
                    }
                    else
                    {
                        this.drops = [[new Item("rawTorperFlesh", this.X, this.Y), 1]];
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

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

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
                        this.drawUnit(oldverse, 1592, 40, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 1304, 38, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                    }
                }
                else if (theCostume == 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1671, 42, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 1409, 41, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                    }
                }
                else if (theCostume == 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1740, 40, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(oldverse, 1504, 41, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                    }
                }
                else if (theCostume == 3)
                {
                    this.damageDealt = false; //this resets the potential for the Unit to damage its target, because by this point the unit has already passed the damaging phase.

                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1808, 40, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                    }
                }
                else if (theCostume >= 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(oldverse, 1877, 41, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(oldverse, 1967, 41, 75, 75, -43 - this.xAdjustment, -38 - this.yAdjustment, 75 * this.alphaSize, 75 * this.alphaSize);
            }
        }
        //NARTHWARP
        if (this.type == "Narthwarp")
        {
            //Set Drops and experience
            if (this.alpha == true)
            {
                if (Math.max(0, 21 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 95 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (95 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("lrgNarthwarpMouth", this.X, this.Y), 1]];
            }
            else if (this.alpha == "baby")
            {
                if (Math.max(0, 2 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 4 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (4 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [];
            }
            else
            {
                if (Math.max(0, 9 - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 36 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (36 * ((player.getIntelligence() / 50) + 1)) / 10;
                }

                this.drops = [[new Item("narthwarpMouth", this.X, this.Y), 1]];
            }


            //RANGE OF SIGHT (anything related to range of sight)
            if (this.alpha == true)
            {
                this.rangeOfSightCalculator(550, "mildly");
            }
            else if (this.alpha == "baby")
            {
                this.rangeOfSightCalculator(300, "mildly");
            }
            else
            {
                this.rangeOfSightCalculator(425, "mildly");
            }

            //AI
            if (this.alive == true)
            {
                if (this.alpha == true)
                {
                    this.Attack(14, 7);
                    this.callForNearbyHelpFromType(550, "Narthwarp");
                }
                else if (this.alpha == "baby")
                {
                    this.Attack(1, 1);
                    this.callForNearbyHelpFromType(300, "Narthwarp");
                }
                else
                {
                    this.Attack(5, 4);
                    this.callForNearbyHelpFromType(425, "Narthwarp");
                }

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
                this.friendDecider();
                this.targeting();

                if (this.target == player)
                {
                    this.pointTowardsPlayer();
                    this.moveInRelationToPlayer();
                }
                else if (this.target != "none")
                {
                    this.pointTowards(this.target);
                    this.moveInRelationToThing(this.target);
                }

            }

            //ANIMATIONS

            if (this.alive == true)
            {
                if (this.moving && !this.attacking) //If moving and not attacking initiate moving animation...
                {
                    this.costumeEngine(4, 0.145, false);
                }
                else if (this.attacking) //otherwise if it is attacking then initiate attacking animation, and if neither...
                {
                    if (new Date().getTime() - this.timeBetweenAttacks > (this.attackWait * 1000))
                    {
                        this.costumeEngine(8, 0.4, false);
                    }
                }

                // the frames/stages/costumes of the animation.
                var theCostume = Math.floor(this.costume); //This rounds this.costume down to the nearest whole number.
                //manual damaging
                if (theCostume <= 0)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 29, 400, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                    else
                    {
                        if (this.moving == false)
                        {
                            this.drawUnit(polypol, 29, 400, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                        }
                        else
                        {
                            this.drawUnit(polypol, 115, 401, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                        }
                    }
                }
                else if (theCostume == 1)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 32, 488, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 212, 404, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                }
                else if (theCostume == 2)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 122, 491, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 308, 403, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                }
                else if (theCostume == 3)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 32, 488, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                    else
                    {
                        this.drawUnit(polypol, 409, 404, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                }
                else if (theCostume == 4)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 29, 400, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                }
                else if (theCostume == 5)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 217, 488, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                }
                else if (theCostume == 6)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 318, 489, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                }
                else if (theCostume >= 7)
                {
                    if (this.attacking)
                    {
                        this.drawUnit(polypol, 217, 488, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
                    }
                }
            }
            else
            {
                this.drawUnit(polypol, 416, 489, 71, 81, -43 - this.xAdjustment, -38 - this.yAdjustment, 71 * this.alphaSize, 81 * this.alphaSize);
            }
        }
        //PERSON
        if (this.type == "Person")
        {
            if (this.alive)
            {
                this.friendDecider();
                this.targeting();
            }
            //RANGE OF SIGHT (anything related to range of sight)

            this.rangeOfSightCalculator(600, "true");

            //other faction-like stuff
            if (this.ultra.faction == "Freynor")
            {
                if (player.title == "Royalty" && player.raceName == "Freynor")
                {
                    //this.team = "player";
                    //this.baseTeam = "player"
                }
            }

            //Unique Characters and special type -- drops and experience
            if (this.ID == "Laandeg the Alchemist")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 12]];
            }
            if (this.ID == "Svehn the Smith")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 95 + (quests.bobithNewWealth / 2)]];
            }
            else if (this.ID == "Medlia the Merchant")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 109 + (quests.medliaNewWealth / 2)]];
            }
            else if (this.ID == "Garld the Crazy Beggar" || this.ID == "Garld, Sage of Gemith")
            {
                if (quests.garldCrazyScroll == "obtained")
                {
                    this.drops = [[new Item("coins", this.X, this.Y), 10]];
                }
                else if (quests.garldCrazyScroll == "obtained1")
                {
                    this.drops = [[new Item("coins", this.X, this.Y), 11]];
                }
                else if (quests.garldCrazyScroll == "obtained100")
                {
                    this.drops = [[new Item("coins", this.X, this.Y), 110]];
                }
                else
                {
                    this.drops = [[new Item("coins", this.X, this.Y), 10], [new Item("summonFrich", this.X, this.Y), 1]];
                }
            }
            else if (this.ID == "Drohfor")
            {
                this.drops = [[new Item("longbow", this.X, this.Y), 1], [new Item("arrow", this.X, this.Y), 19]];
                this.customEXP = true;
                this.experience = 65 * ((player.getIntelligence() / 50) + 1);
            }
            else if (this.ID == "Maggy the Tailor")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 115]];
            }
            else if (this.ID == "Jarl Orjov Tor")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 2000], [new Item("jvostranPlateArmour", this.X, this.Y), 1], [new Item("freydicGreatSword", this.X, this.Y), 1]];
            }
            else if (this.ID == "Odee the Banker")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 145]];
            }
            else if (this.ID == "Toggin")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 20], [new Item("timberAxe", this.X, this.Y), 1]];
                this.customEXP = true;
                this.experience = 25 * ((player.getIntelligence() / 50) + 1);
            }
            else if (this.ID == "Kedwin")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 2], [new Item("pintGlass", this.X, this.Y), 1]];
                this.customEXP = true;
                this.experience = 6 * ((player.getIntelligence() / 50) + 1);
            }
            else if (this.ID == "Neculai the Merchant")
            {
                if (quests.bankruptNeculai != true || quests.medliaCompetitionControlCompletionStyle == "friendly" && quests.medliaCompetitionControlQuest == "complete")
                {
                    this.drops = [[new Item("coins", this.X, this.Y), 17 + (quests.neculaiNewWealth / 2)]];
                }
                else
                {
                    this.drops = [];
                }

                if (quests.theBalgurMercenariesQuest == true)
                {
                    this.drops.push([new Item("neculaisEar", this.X, this.Y), 1]);
                }



                if (this.health < this.healthMAX && quests.medliaCompetitionControlCompletionStyle != "friendly" && quests.medliaCompetitionControlQuest == true)
                {
                    quests.medliaCompetitionControlCompletionStyle = "violence";
                }
            }
            else if (this.ID == "Roselin the Tailor")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 13]];
            }
            else if (this.ID == "Fenwik the Smith")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 38]];
            }
            else if (this.ID == "Chieftan Schuylar")
            {
                this.drops = [[new Item("coins", this.X, this.Y), 97], [new Item("kellishClaymore", this.X, this.Y), 1]];
                this.customEXP = true;
                this.experience = 91 * ((player.getIntelligence() / 50) + 1);
            }
            else
            {
                this.drops = [];
            }

            if (this.customEXP == false)
            {
                if (Math.max(0, (this.ultra.weapon[1][1] + this.ultra.weapon[1][0]) - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                {
                    this.experience = 5 * ((player.getIntelligence() / 50) + 1);
                }
                else
                {
                    this.experience = (5 * ((player.getIntelligence() / 50) + 1)) / 10;
                }
            }

            //AI
            if (this.alive == true)
            {

                if (this.disturbed == true || this.DTU(this.target) <= this.baseSight)
                {
                    if (this.disturbed == true)
                    {
                        this.hostile = true; //let the games animation know to display the person's name in red.
                    }

                    if (this.ultra.personality == "violent")
                    {
                        if (this.target == player && this.disturbed)
                        {
                            this.pointTowardsPlayer();
                            this.moveInRelationToPlayer();
                        }
                        else if (this.target != "none")
                        {
                            this.pointTowards(this.target);
                            this.moveInRelationToThing(this.target);
                        }
                        else
                        {
                            this.offended = false;
                        }

                        if (this.ranged == false)
                        {
                            if (this.target == player && this.disturbed || this.target != player)
                            {
                                this.Attack(this.ultra.weapon[1][1], this.ultra.weapon[1][0]);
                            }
                        }

                        if (this.disturbed == true)
                        {
                            if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                            {
                                this.callForNearbyHelpFromType(1850, "Soldier");
                            }
                        }
                        else
                        {
                            //this.callForHelp(1850, "Soldier");
                        }
                    }
                    else if (this.ultra.personality == "calculated")
                    {
                        if (player.weaponEquipped == "none" && player.armourTotal < 0.5 || this.target != player)
                        {
                            this.fleeing = false;
                            this.ranged = this.ultra.ranged[0];

                            if (this.target == player && this.disturbed)
                            {
                                this.pointTowardsPlayer();
                                this.moveInRelationToPlayer();
                            }
                            else if (this.target != "none")
                            {
                                this.pointTowards(this.target);
                                this.moveInRelationToThing(this.target);
                            }
                            else
                            {
                                this.offended = false;
                            }

                            if (this.ranged == false)
                            {
                                if (this.target == player && this.disturbed || this.target != player)
                                {
                                    this.Attack(this.ultra.weapon[1][1], this.ultra.weapon[1][0]);
                                }
                            }

                            if (this.disturbed == true)
                            {
                                if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                                {
                                    this.callForNearbyHelpFromType(1850, "Soldier");
                                }
                            }
                            else
                            {
                                //this.callForHelp(1850, "Soldier");
                            }
                        }
                        else
                        {
                            this.ranged = false;
                            this.attacking = false;
                            if (this.target == player && this.disturbed)
                            {
                                this.moveInRelationToPlayer();
                                this.pointAwayFromPlayer();
                            }
                            else if (this.target != "none")
                            {
                                this.pointAway(this.target);
                                this.moveInRelationToThing(this.target);
                            }
                            else
                            {
                                this.offended = false;
                            }

                            if (this.disturbed == true)
                            {
                                if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                                {
                                    this.callForNearbyHelpFromType(1850, "Soldier");
                                }
                            }
                            else
                            {
                                //this.callForHelp(1850, "Soldier");
                            }
                        }
                    }
                    else if (this.ultra.personality == "scared")
                    {
                        this.ranged = false;
                        if (this.target == player && this.disturbed)
                        {
                            this.moveInRelationToPlayer();
                            this.pointAwayFromPlayer();
                        }
                        else if (this.target != "none")
                        {
                            this.pointAway(this.target);
                            this.moveInRelationToThing(this.target);
                        }
                        else
                        {
                            this.offended = false;
                        }

                        if (this.disturbed == true)
                        {
                            if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                            {
                                this.callForNearbyHelpFromType(1850, "Soldier");
                            }
                        }
                        else
                        {
                            this.callForHelp(1850, "Soldier");
                        }
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

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
            }
            else
            {
                if (this.doOnDeathOnce == true)
                {
                    //Faction relation decreases
                    if (this.ultra.faction == "Freynor" && this.killNotByPlayer == false || this.ultra.faction == "Freynor" && this.killByPlayerTeam)
                    {
                        player.freynorFaction -= 25;
                        if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                        {
                            this.callForNearbyHelpFromType(1850, "Soldier");
                        }
                    }
                    else if (this.ultra.faction == "Orgell" && this.killNotByPlayer == false || this.ultra.faction == "Orgell" && this.killByPlayerTeam)
                    {
                        player.orgellFaction -= 25;
                        if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                        {
                            this.callForNearbyHelpFromType(1850, "Soldier");
                        }
                    }
                    else if (this.ultra.faction == "Vardan" && this.killNotByPlayer == false || this.ultra.faction == "Vardan" && this.killByPlayerTeam)
                    {
                        player.vardanFaction -= 25;
                        if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                        {
                            this.callForNearbyHelpFromType(1850, "Soldier");
                        }
                    }
                    else if (this.ultra.faction == "Kel" && this.killNotByPlayer == false || this.ultra.faction == "Kel" && this.killByPlayerTeam)
                    {
                        player.kelFaction -= 25;
                        this.callForNearbyHelpFromType(1850, "Soldier");
                    }
                    else if (this.ultra.faction == "Thengar" && this.killNotByPlayer == false || this.ultra.faction == "Thengar" && this.killByPlayerTeam)
                    {
                        player.thengarFaction -= 25;
                        if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                        {
                            this.callForNearbyHelpFromType(1850, "Soldier");
                        }
                    }
                    else if (this.ultra.faction == "Aldrek" && this.killNotByPlayer == false || this.ultra.faction == "Aldrek" && this.killByPlayerTeam)
                    {
                        player.aldrekFaction -= 25;
                        if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                        {
                            this.callForNearbyHelpFromType(1850, "Soldier");
                        }
                    }
                    else if (this.ultra.faction == "Cephrite" && this.killNotByPlayer == false || this.ultra.faction == "Cephrite" && this.killByPlayerTeam)
                    {
                        player.cephriteFaction -= 25;
                        this.callForNearbyHelpFromType(1850, "Soldier");
                    }
                    else if (this.ultra.faction == "Nirwaden" && this.killNotByPlayer == false || this.ultra.faction == "Nirwaden" && this.killByPlayerTeam)
                    {
                        player.nirwadenFaction -= 25;
                        if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                        {
                            this.callForNearbyHelpFromType(1850, "Soldier");
                        }
                    }

                    //Unique Characters Permanent Death
                    if (this.ID == "Laandeg the Alchemist")
                    {
                        uniqueChars.laandegLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 6;
                        }
                    }
                    if (this.ID == "Garld the Crazy Beggar" || this.ID == "Garld, Sage of Gemeth")
                    {
                        uniqueChars.garldLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            if (this.ID == "Garld, Sage of Gemeth")
                            {
                                player.freynorFaction -= 17;
                            }
                            else
                            {
                                player.freynorFaction += 10;
                            }

                        }
                    }
                    if (this.ID == "Svehn the Smith")
                    {
                        uniqueChars.bobithLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 9;
                        }
                    }
                    else if (this.ID == "Medlia the Merchant")
                    {
                        uniqueChars.medliaLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 12;
                        }
                    }
                    else if (this.ID == "Kedwin")
                    {
                        uniqueChars.kedwinLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 7;
                        }
                    }
                    else if (this.ID == "Teber the Deserter" || this.ID == "Teber the Artisan")
                    {
                        uniqueChars.teberLDS = false;
                    }
                    else if (this.ID == "Hilmund the Innkeeper")
                    {
                        uniqueChars.hilmundLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 15;
                        }
                    }
                    else if (this.ID == "Drohfor")
                    {
                        uniqueChars.drohforLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 2;
                        }
                    }
                    else if (this.ID == "Maggy the Tailor")
                    {
                        uniqueChars.maggyLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 14;
                        }
                    }
                    else if (this.ID == "Odee the Banker")
                    {
                        uniqueChars.odeeLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 11;
                        }
                    }
                    else if (this.ID == "Toggin")
                    {
                        uniqueChars.togginLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 6;
                        }
                    }
                    else if (this.ID == "Neculai the Merchant" || this.ID == "Neculai the Beggar")
                    {
                        uniqueChars.neculaiLDS = false;
                    }
                    else if (this.ID == "Fenwik the Smith")
                    {
                        uniqueChars.fenwikLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.kelFaction -= 10;
                        }
                    }
                    else if (this.ID == "Irene")
                    {
                        uniqueChars.ireneLDS = false
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.kelFaction -= 50;
                        }
                    }
                    else if (this.ID == "Roselin the Tailor")
                    {
                        uniqueChars.roselinLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.kelFaction -= 12;
                        }
                    }
                    else if (this.ID == "Chieftan Schuylar")
                    {
                        uniqueChars.schuylarLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.kelFaction -= 100;
                        }
                    }
                    else
                    {
                        this.drops = [];
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
                        else if (this.weapon == "freydicGreatSword")
                        {
                            this.costumeEngine(8, 0.23, true);
                        }
                        else if (this.weapon == "timberAxe")
                        {
                            this.costumeEngine(7, 0.25, true);
                        }
                        else if (this.weapon == "rasper")
                        {
                            this.costumeEngine(5, 0.20, true);
                        }
                        else if (this.weapon == "longSpikedMorningStar")
                        {
                            this.costumeEngine(7, 0.125, true);
                        }
                        else if (this.weapon == "kellishSword")
                        {
                            this.costumeEngine(7, 0.21, true);
                        }
                        else if (this.weapon == "warHammer")
                        {
                            this.costumeEngine(9, 0.22, true);
                        }
                        else if (this.weapon == "kellishClaymore")
                        {
                            this.costumeEngine(14, 0.32, true);
                        }
                        else if (this.weapon == "flail")
                        {
                            this.costumeEngine(11, 0.18, false);
                        }
                    }
                }
                //draw some weapons underneath the body
                if (this.weapon == "freydicSword" || this.weapon == "longbow" || this.weapon == "crossbow" || this.weapon == "kellishClaymore")
                {
                    this.drawHumanArms();
                }

                //Draw the Person's body
                this.drawHuman();

                //draw the others over it.
                if (this.weapon != "freydicSword" && this.weapon != "longbow" && this.weapon != "crossbow" && this.weapon != "longSpikedMorningStar" && this.weapon != "kellishClaymore")
                {
                    this.drawHumanArms();
                }

                //draw the Person's Outfit.
                this.drawHumanOutfit(this.ultra.outfit[0], false);

                //draw some weapons over the outfit
                if (this.weapon == "longSpikedMorningStar")
                {
                    this.drawHumanArms();
                }
            }
            else
            {
                this.drawHuman();
                this.drawHumanOutfit("none", true);
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

            //AI
            if (this.alive == true)
            {
                this.friendDecider();
                this.targeting();

                if (this.ultra.faction == "Freynor")
                {
                    if (player.title == "Royalty" && player.raceName == "Freynor") //booble
                    {
                        //this.team = "player";
                        //this.baseTeam = "player"
                    }

                    if (this.ID == "Tor Soldier" || this.ID == "Tor Captain" || this.ID == "Tor Commissioner Stendor")
                    {
                        if (player.title == "Nobility" && player.raceName == "Freynor") //booble
                        {
                            //this.team = "player";
                            //this.baseTeam = "player"
                        }
                        //RANGE OF SIGHT (anything related to range of sight)
                        this.rangeOfSightCalculator(750, "true");

                        //All of this factions guards drop this:
                        this.drops = [[new Item("coins", this.X, this.Y), 1 + Math.floor(Math.random() * 24)]];

                        lights.push({X:this.X, Y: this.Y, size: 250, extraStops: true, GRD: 0.7, Alpha: 0.9, showMe: false});
                        // If the target has too low a level of relations with the faction they are an enemy.
                        if (player.freynorFaction <= -50)
                        {
                            if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction || player.freynorFaction <= -500)
                            {
                                this.disturbed = true;
                            }
                            else if (this.health >= this.healthMAX * 5/6 && player.title == "Royalty" && player.raceName == this.ultra.faction|| this.health >= this.healthMAX * 5/6 && player.title == "Nobility" && player.raceName == this.ultra.faction)
                            {
                                this.disturbed = false;
                            }
                        }
                        else if (this.health >= this.healthMAX * 5/6 && player.title == "Royalty" && player.raceName == this.ultra.faction|| this.health >= this.healthMAX * 5/6 && player.title == "Nobility" && player.raceName == this.ultra.faction)
                        {
                            this.disturbed = false;
                        }

                        //Call for help from other guards unless the culprit is the royal leader.
                        if (this.disturbed == true)
                        {
                            if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                            {
                                this.callForNearbyHelpFromType(2000, "Soldier");
                            }
                        }

                        this.switchToRanged("longbow");
                    }
                    else if (this.ID == "Tor Huskarl" || this.ID == "Jarl Orjov Tor") //no ranged attack
                    {
                        //RANGE OF SIGHT (anything related to range of sight)
                        this.rangeOfSightCalculator(950, false);

                        //All of this factions guards drop this:
                        this.drops = [[new Item("coins", this.X, this.Y), 45 + Math.floor(Math.random() * 56)]];

                        lights.push({X:this.X, Y: this.Y, size: 250, extraStops: true, GRD: 0.7, Alpha: 0.9, showMe: false});
                        // If the target has too low a level of relations with the faction they are an enemy.
                        if (player.freynorFaction <= -50)
                        {
                            if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction || player.freynorFaction <= -500)
                            {
                                this.disturbed = true;
                            }
                            else if (this.health >= this.healthMAX * 5/6 && player.title == "Royalty" && player.raceName == this.ultra.faction|| this.health >= this.healthMAX * 5/6 && player.title == "Nobility" && player.raceName == this.ultra.faction)
                            {
                                this.disturbed = false;
                            }
                        }
                        else if (this.health >= this.healthMAX * 5/6 && player.title == "Royalty" && player.raceName == this.ultra.faction|| this.health >= this.healthMAX * 5/6 && player.title == "Nobility" && player.raceName == this.ultra.faction)
                        {
                            this.disturbed = false;
                        }

                        //Call for help from other guards unless the culprit is the royal leader.
                        if (this.disturbed == true)
                        {
                            if (player.title != "Royalty" && player.title != "Nobility" || player.raceName != this.ultra.faction)
                            {
                                this.callForNearbyHelpFromType(2500, "Soldier");
                            }
                        }
                    }
                    else
                    {
                        //RANGE OF SIGHT (anything related to range of sight)
                        this.rangeOfSightCalculator(750, "true");

                        //All of this factions guards drop this:
                        this.drops = [];

                        lights.push({X:this.X, Y: this.Y, size: 250, extraStops: true, GRD: 0.7, Alpha: 0.9, showMe: false});
                        // If the target has too low a level of relations with the faction they are an enemy.
                        if (player.freynorFaction <= -50)
                        {
                            if (player.title != "Royalty" || player.raceName != this.ultra.faction || player.freynorFaction <= -500)
                            {
                                this.disturbed = true;
                            }
                            else if (this.health >= this.healthMAX * 5/6 && player.title == "Royalty" && player.raceName == this.ultra.faction)
                            {
                                this.disturbed = false;
                            }
                        }
                        else if (this.health >= this.healthMAX * 5/6 && player.title == "Royalty" && player.raceName == this.ultra.faction)
                        {
                            this.disturbed = false;
                        }

                        //Call for help from other guards unless the culprit is the royal leader.
                        if (this.disturbed == true)
                        {
                            if (player.title != "Royalty" || player.raceName != this.ultra.faction)
                            {
                                this.callForNearbyHelpFromType(2000, "Soldier");
                            }
                        }

                        this.switchToRanged("longbow");
                    }
                }
                else if (this.ultra.faction == "Kel")
                {
                    //RANGE OF SIGHT (anything related to range of sight)
                    this.rangeOfSightCalculator(750, "true");

                    //All of this factions guards drop this:
                    this.drops = [];

                    lights.push({X: this.X, Y: this.Y, size: 85, extraStops: true, GRD: 0.7, Alpha: 0.4, showMe: false});
                    // If the target has too low a level of relations with the faction they are an enemy.
                    if (player.kelFaction <= -50)
                    {
                        this.disturbed = true;
                    }

                    //Call for help from other guards unless the culprit is the royal leader.
                    if (this.disturbed == true)
                    {
                        this.callForNearbyHelpFromType(2000, "Soldier");
                    }
                }
                else if (this.ultra.faction == "TheBalgurMercenaries")
                {
                    if (player.theBalgurMercenariesFaction <= -50)
                    {
                        this.disturbed = true;
                    }

                    if (this.ID == "Mercenary Captain Kronheime")
                    {
                        //RANGE OF SIGHT (anything related to range of sight)
                        this.rangeOfSightCalculator(325, false);

                        this.drops = [[new Item("balgurCaptainArmour", this.X, this.Y), 1], [new Item("berulnToothNecklace", this.X, this.Y), 1], [new Item("flail", this.X, this.Y), 1], [new Item("coins", this.X, this.Y), Math.floor(Math.random() * 140) + 43]];

                        if (this.disturbed == true)
                        {
                            this.callForNearbyHelpFromType(this.rangeOfSight, "Soldier");
                        }
                    }
                    else if (this.ID == "Balgur Mercenary")
                    {
                        //RANGE OF SIGHT (anything related to range of sight)
                        this.rangeOfSightCalculator(300, false);

                        this.drops = [[new Item("balgurMercArmour", this.X, this.Y), 1], [new Item("coins", this.X, this.Y), Math.floor(Math.random() * 14) + 5]];

                        if (this.disturbed == true)
                        {
                            this.callForNearbyHelpFromType(this.rangeOfSight, "Soldier");
                        }
                    }
                }
                else if (this.ultra.faction == "hostile")
                {
                    if (this.ID == "Northern Bandit")
                    {
                        //RANGE OF SIGHT (anything related to range of sight)
                        this.rangeOfSightCalculator(325, false);

                        this.drops = [[new Item("coins", this.X, this.Y), Math.floor(Math.random() * 5) + 1]];

                        this.disturbed = true;

                        if (this.disturbed == true)
                        {
                            this.callForNearbyHelpFromType(this.rangeOfSight, "Soldier");
                        }
                    }
                    if (this.ID == "Hetmer The Bandit Chief")
                    {
                        //RANGE OF SIGHT (anything related to range of sight)
                        this.rangeOfSightCalculator(350, false);

                        this.drops = [[new Item("hetmerArmour", this.X, this.Y), 1], [new Item("coins", this.X, this.Y), Math.floor(Math.random() * 33) + 6]];

                        this.disturbed = true;

                        if (this.disturbed == true)
                        {
                            this.callForNearbyHelpFromType(this.rangeOfSight, "Soldier");
                        }

                        this.switchToRanged("longbow");
                    }
                    if (this.ID == "Nelgref the Flayer")
                    {
                        //RANGE OF SIGHT (anything related to range of sight)
                        this.rangeOfSightCalculator(325, false);

                        this.drops = [[new Item("skinAndBones", this.X, this.Y), 1], [new Item("rasper", this.X, this.Y), 1]];

                        this.disturbed = true;

                        if (this.disturbed == true)
                        {
                            this.callForNearbyHelpFromType(this.rangeOfSight, "Soldier");
                        }
                        this.haste = true;
                        this.voiceFrequency = 8;

                        if (player.gender == "Male" && this.playerSeen)
                        {
                            this.voice([nelgrefSkin, nelgrefEyes, nelgrefDie], 1000, true);
                        }
                        else if (this.playerSeen)
                        {
                            this.voice([nelgrefSkin, nelgrefEyes, nelgrefDie, nelgrefKiss], 1000, true);
                        }

                        if (this.health <= 1/3 * this.healthMAX)
                        {
                            this.negateArmour = 1;
                            this.attackWait = 0.4;
                            this.rangeOfSightCalculator(425, false);
                            this.speed = 3.1;
                            this.armour = 6;
                            this.ultra.weapon[1][1] = 9;
                            this.ultra.weapon[1][0] = 4;
                        }
                    }
                    if (this.ID == "Nelgref's Pet Bandit")
                    {
                        //RANGE OF SIGHT (anything related to range of sight)
                        this.rangeOfSightCalculator(350, false);

                        if (quests.lostDeliveryPetsKilled == 1)
                        {
                            this.drops = [[new Item("blackBearLeatherArmour", this.X, this.Y), 1]];
                        }
                        else
                        {
                            this.drops = [];
                        }

                        this.disturbed = true;

                        if (this.disturbed == true)
                        {
                            this.callForNearbyHelpFromType(this.rangeOfSight, "Soldier");
                        }
                    }
                }
                else
                {
                    //RANGE OF SIGHT (anything related to range of sight)
                    this.rangeOfSightCalculator(750, "true");

                    //Call for help from other guards unless the culprit is the royal leader.
                    if (this.disturbed == true)
                    {
                        if (player.title != "Royalty" || player.raceName != this.ultra.faction)
                        {
                            this.callForNearbyHelpFromType(2000, "Soldier");
                        }
                    }

                    this.drops = [];
                }

                if (this.disturbed == true || this.DTU(this.target) <= this.baseSight && this.target != player)
                {
                    if (this.disturbed == true)
                    {
                        this.hostile = true; //let the games animation know to display the person's name in red.
                    }

                    if (this.target == player && this.disturbed)
                    {
                        this.pointTowardsPlayer();
                        this.moveInRelationToPlayer();
                    }
                    else if (this.target != "none")
                    {
                        this.pointTowards(this.target);
                        this.moveInRelationToThing(this.target);
                    }
                    else
                    {
                        this.offended = false;
                    }

                    if (this.ranged == false)
                    {
                        if (this.target == player && this.disturbed || this.target != player)
                        {
                            this.Attack(this.ultra.weapon[1][1], this.ultra.weapon[1][0]);
                        }
                    }
                }
                else
                {
                    this.weapon = this.ultra.weapon[0];
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

                //this.deathChecker();
                this.disturbedTimer();
                this.visibleSight();
            }
            else
            {
                if (this.doOnDeathOnce == true)
                {
                    if (this.ultra.faction == "hostile")
                    {
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            if (this.ID == "Northern Bandit" || this.ID == "Hetmer The Bandit Chief" || this.ID == "Nelgref's Pet Bandit" || this.ID == "Nelgref the Flayer")
                            {
                                this.callForNearbyHelpFromType(350, "Soldier");
                            }
                        }
                    }
                    else if (player.title != "Royalty" || player.raceName != this.ultra.faction)
                    {
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            this.callForNearbyHelpFromType(2000, "Soldier");
                        }
                    }
                    //Faction relation decreases
                    if (this.ultra.faction == "Freynor")
                    {
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 50;
                        }
                    }
                    else if (this.ultra.faction == "Kel")
                    {
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.kelFaction -= 50;
                        }
                    }
                    else if (this.ultra.faction == "Thengar")
                    {
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.thengarFaction -= 50;
                        }
                    }
                    else if (this.ultra.faction == "Aldrek")
                    {
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.aldrekFaction -= 50;
                        }
                    }
                    else if (this.ultra.faction == "Orgell")
                    {
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.orgellFaction -= 50;
                        }
                    }
                    else if (this.ultra.faction == "Vardan")
                    {
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.vardanFaction -= 50;
                        }
                    }
                    else if (this.ultra.faction == "Cephrite")
                    {
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.cephriteFaction -= 50;
                        }
                    }
                    else if (this.ultra.faction == "Nirwaden")
                    {
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.nirwadenFaction -= 50;
                        }
                    }
                    //Unique Characters Permanent Death
                    if (this.ID == "Hetmer The Bandit Chief")
                    {
                        uniqueChars.hetmerLDS = false;
                    }
                    else if (this.ID == "Mercenary Captain Kronheime")
                    {
                        uniqueChars.kronheimeLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.theBalgurMercenariesFaction -= 75;
                        }
                    }
                    else if (this.ID == "Tor Commissioner Stendor")
                    {
                        uniqueChars.stendorLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            player.freynorFaction -= 80;
                        }
                    }
                    else if (this.ID == "Jarl Orjov Tor")
                    {
                        uniqueChars.OrjovTorLDS = false;
                        if (this.killNotByPlayer == false || this.killByPlayerTeam)
                        {
                            if (player.title == "Royalty" && player.faction == "Freynor")
                            {
                                player.freynorFaction -= 300;
                            }
                            else
                            {
                                player.freynorFaction -= 1200;
                            }
                        }
                    }
                    else if (this.ID == "Nelgref the Flayer") //also a bandit chieftain
                    {
                        uniqueChars.nelgrefLDS = false;
                    }

                    //track Deaths Of Certain Non-Unique Units During Certain Quests

                    //during the TeshirNorthRoadQuest the number of bandits you kill is tracked.
                    if (quests.teshirNorthRoadQuest == true)
                    {
                        if (this.ID == "Northern Bandit")
                        {
                            quests.teshirNorthRoadKillCount += 1;
                        }
                    }
                    if (this.ID == "Nelgref's Pet Bandit")
                    {
                        quests.lostDeliveryPetsKilled += 1;
                    }
                    if (quests.theBalgurMercenariesQuest == true)
                    {
                        if (this.ID == "Balgur Mercenary")
                        {
                            quests.theBalgurMercenariesMercsKilled += 1;
                            if (this.killNotByPlayer == false || this.killByPlayerTeam)
                            {
                                player.theBalgurMercenariesFaction -= 50;
                            }
                        }
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
                        else if (this.weapon == "freydicGreatSword")
                        {
                            this.costumeEngine(8, 0.23, true);
                        }
                        else if (this.weapon == "timberAxe")
                        {
                            this.costumeEngine(7, 0.25, true);
                        }
                        else if (this.weapon == "rasper")
                        {
                            this.costumeEngine(5, 0.20, true);
                        }
                        else if (this.weapon == "longSpikedMorningStar")
                        {
                            this.costumeEngine(7, 0.125, true);
                        }
                        else if (this.weapon == "kellishSword")
                        {
                            this.costumeEngine(7, 0.21, true);
                        }
                        else if (this.weapon == "warHammer")
                        {
                            this.costumeEngine(9, 0.22, true);
                        }
                        else if (this.weapon == "kellishClaymore")
                        {
                            this.costumeEngine(14, 0.32, true);
                        }
                        else if (this.weapon == "flail")
                        {
                            this.costumeEngine(11, 0.18, false);
                        }
                    }
                }
                //draw some weapons underneath the body
                if (this.weapon == "freydicSword" || this.weapon == "longbow" || this.weapon == "crossbow" || this.weapon == "kellishClaymore")
                {
                    this.drawHumanArms();
                }

                //Draw the Person's body
                this.drawHuman();

                //draw the others over it.
                if (this.weapon != "freydicSword" && this.weapon != "longbow" && this.weapon != "crossbow" && this.weapon != "longSpikedMorningStar" && this.weapon != "kellishClaymore")
                {
                    this.drawHumanArms();
                }

                //draw the Person's Outfit.
                this.drawHumanOutfit(this.ultra.outfit[0], false);

                //draw some weapons over the outfit
                if (this.weapon == "longSpikedMorningStar")
                {
                    this.drawHumanArms();
                }
            }
            else
            {
                this.drawHuman();
                this.drawHumanOutfit("none", true);
                this.drawUnit(verse, 0, 302, 35, 80, -20.5, -20, 57, 100, 1 / 2 * Math.PI);
            }
        }
    };
    //OPERATION [all of the functions in this class are activated here]
    this.operation = function()
    {
        this.activateUnits(); //this is what runs all normal unit code
        this.teamCommands(); //this is a list of specific key commands the player can use to control those on his/her team.

        if (this.alive == true)
        {
            this.turnToDestination();
            this.deathChecker();
            this.unStack();
            this.effected(this.resistances);
        }

        if (this.alive == true || new Date().getTime() - this.timeSinceDead < 1000)
        {
            if (!this.underground)
            {
                this.showHealthWhenHurt();
            }
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

        //Error Sponge: this sucks up the nasty draw errors that affect the last thing drawn.
        XXX.beginPath();
        XXX.lineWidth = 1;
        XXX.fillStyle = "black";
        XXX.arc(-100, -100, 5, 0, Math.PI);
        XXX.fill();
        XXX.stroke();

        //this is a test to see what the true size of the unit is.
        if (testingUnitSizes == true && this.alive == true)
        {
            this.testForSize();
        }
    };
};