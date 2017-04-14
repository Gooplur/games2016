/**
 * Created by skyeguy on 1/22/17.
 */

function Scenery(type, x, y, rotation, longevity, information) //longevity is used either to portray permanence or ownership, information is an extra input for anything
{
    this.type = type;
    this.variety = "generic";
    this.subVariety = "generic";
    this.X = x;
    this.Y = y;
    this.radius = 1;
    this.rotation = rotation;
    this.temporary = longevity; //This is whether or not it will stay permanently or is subject to despawning after time.
    this.owned = longevity; //if an items longevity is unimportant or is obvious that can be used to define its ownership.
    this.solid = false;
    this.mouser = 10000; //this is the measurement of the mouse's distance from the Scenery object.
    this.playerer = 10000; //this is the measurement of the player's distance from the Scenery object.
    this.counter = 0; //this is a call regulating variable that works to make sure heavy code isn't called too often.
    this.activate = false; //this is a flag that turns true when the Scenery object is clicked.
    this.interactionRange = 0;
    this.zIndex = 1;
    this.loopNum = 0;
    this.loopRate = 0;
    this.frameLoopComplete = false;
    this.runOneTime = true; //this will not be used in general functions, only for making sure each type of scenery can run something only once.
    this.loopTimer = new Date().getTime();
    //Campfire variables
    this.lit = false;
    this.fireCostume = 0;
    this.campFireTime = 0;
    this.burnt = false;
    this.burntTime = 0;
    this.gotFireStarter = false;
    //Well Variables
    this.wellListo = true;
    this.toggleWell = false;
    this.wellUp = false;
    this.wellChange = false;
    //Tree Variables
    this.treePhase = 0;
    this.treeHealth = 120;
    //Rock variables
    this.rockLoad = [];
    //Destroyable Variables
    this.health = 1;
    //Bird variables
    this.eggHatchTimer = 0;
    //Plant Variables
    this.phase = 0;
    //light source variables
    this.lightGetTime = new Date().getTime();
    this.lightTime = 0;
    //Hive Variables
    this.hiveID = Math.random();
    this.minions = 0; //the current amount of soldiers the hive has.
    this.minionsMAX = 3; //total amount of soldiers the hive can have.
    this.summonRate = 32; //how long in seconds it takes to summon a new minion.
    this.summonTime = new Date().getTime();

    this.minionCount = function()
    {
        this.minions = 0;
        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
        {
            if (ArtificialIntelligenceAccess[i].ID == this.hiveID)
            {
                this.minions += 1;
            }
        }
    };

    this.dst = function(x, y) //finds the distance between this and input.
    {
        return Math.sqrt((this.X - x) * (this.X - x) + (this.Y - y) * (this.Y - y));
    };

    this.rockLoader = function(list)
    {
        var hits = 0;
        var selection = list[Math.floor(Math.random() * list.length)];

        for (var i = 0; i < Inventory.length; i ++)
        {
            if (Inventory[i][0].type == selection.type)
            {
                Inventory[i][1] += selection.quantity;
                break;
            }
            else
            {
                hits += 1;
            }
        }
        if (hits == Inventory.length)
        {
            Inventory.push([new Item(selection.type, false, false), selection.quantity]);
        }
    };

    this.nearbyPlants = function(numberToList, excludeSubVariety)
    {
        var nearPlants = [];
        var checkedAlready = [];
        var nearestDistance = false;
        var closest = false;
        var skip = false;
        var dist = false;

        for (var n = 0; n < numberToList; n++)
        {
            for (var i = 0; i < scenicList.length; i++)
            {
                if (typeof(excludeSubVariety) != "undefined")
                {
                    if (scenicList[i].subVariety != excludeSubVariety && scenicList[i].variety == "plant")
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
                            var dist = this.dst(scenicList[i].X, scenicList[i].Y);
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
                        var dist = this.dst(scenicList[i].X, scenicList[i].Y);
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
            if (this.closest != false)
            {
                nearPlants.push(scenicList[closest]);
                checkedAlready.push(closest);
                nearestDistance = false;
            }
        }
        //console.log(nearPlants);
        return nearPlants;
    };

    this.changeFactionRelation = function(changeAmount)
    {
        if (this.owned.length > 1)
        {
            if (this.owned == "freynor")
            {
                player.freynorFaction += changeAmount;
            }
            else if (this.owned == "kel")
            {
                player.kelFaction += changeAmount;
            }
            else if (this.owned == "vardan")
            {
                player.vardanFaction += changeAmount;
            }
            else if (this.owned == "nirwaden")
            {
                player.nirwadenFaction += changeAmount;
            }
            else if (this.owned == "outlander")
            {
                player.outlanderFaction += changeAmount;
            }
            else if (this.owned == "aldrek")
            {
                player.aldrekFaction += changeAmount;
            }
            else if (this.owned == "cephrite")
            {
                player.cephriteFaction += changeAmount;
            }
            else if (this.owned == "orgel")
            {
                player.orgelFaction += changeAmount;
            }
            else if (this.owned == "thengar")
            {
                player.thengarFaction += changeAmount;
            }
        }
    };

    this.countAdder = function()
    {
        this.counter += 1 * (TTD / 16.75);
    };

    this.count = function()
    {
        if (this.counter >= 80)
        {
            this.counter = 0;
            return true;
        }
        else
        {
            return false;
        }
    };

    this.flashFrame = 0;
    this.flashFrameTime = new Date().getTime();
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

    // []
    this.frameLoop = function(theLoop, loopLimit, loopingRate, endless)
    {
        if (theLoop != [])
        {
            if (this.frameLoopComplete == false)
            {
                this.loopRate += 1;
            }

            if (this.loopRate > loopingRate)
            {
                this.loopRate = 0;

                if (this.frameLoopComplete == false)
                {
                    this.loopNum += 1;
                }
            }

            if (this.loopNum > loopLimit)
            {
                this.loopNum = 0;
                if (endless == false)
                {
                    this.frameLoopComplete = true;
                }
            }

            if (this.frameLoopComplete == false)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theLoop[this.loopNum][0], theLoop[this.loopNum][1], theLoop[this.loopNum][2], theLoop[this.loopNum][3], theLoop[this.loopNum][4], -(1/2 * theLoop[this.loopNum][5]), -(1/2 * theLoop[this.loopNum][6]), theLoop[this.loopNum][5], theLoop[this.loopNum][6]);
                XXX.restore();
            }
        }
    };


    this.mouseSensing = function()
    {
        if (this.count())
        {
            this.mouser = Math.sqrt(((X - mouseX + 1/2 * CCC.width) - this.X)*((X - mouseX + 1/2 * CCC.width) - this.X) + ((Y - mouseY + 1/2 * CCC.height) - this.Y)*((Y - mouseY + 1/2 * CCC.height) - this.Y));
            this.playerer = Math.sqrt((X - this.X)*(X - this.X) + (Y - this.Y)*(Y - this.Y));
            //console.log("mouser " + this.mouser + " playerer " + this.playerer);
        }

        if (this.mouser <= this.radius && this.playerer <= this.interactionRange)
        {
            //Make sure the player and the mouse are both still there...
            this.mouser = Math.sqrt(((X - mouseX + 1/2 * CCC.width) - this.X)*((X - mouseX + 1/2 * CCC.width) - this.X) + ((Y - mouseY + 1/2 * CCC.height) - this.Y)*((Y - mouseY + 1/2 * CCC.height) - this.Y));
            this.playerer = Math.sqrt((X - this.X)*(X - this.X) + (Y - this.Y)*(Y - this.Y));

            if (dClick)
            {
                dClick = false;
                this.activate = true;
            }
        }

    };

    this.typeBuilder = function()
    {
        if (this.type == "pineStumps")
        {
            //TRAITS
            this.solid = false;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 1, 1685, 156, 109, -(1/2 * 156 * 8), -(1/2 * 109 * 8), 156 * 8, 109 * 8);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 17;

        }
        else if (this.type == "mofuNest")
        {
            //TRAITS
            this.solid = false;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(mofu, 123, 89, 30, 29, -(1/2 * 30 * longevity), -(1/2 * 29 * longevity), 30 * longevity, 29 * longevity);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 20;

        }
        else if (this.type == "anvil")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 100;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 2877, 149, 27, 15, -(1/2 * 54), -(1/2 * 30), 54, 30);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 17;

            //INTERACTION
            if (this.activate == true && player.weaponEquipped == "hammer")
            {
                this.activate = false;
                player.craftPosition = 0;
                craftScroll = 0;
                crafting = "smithing";
                lowBar = "crafting";
                gameState = "paused";
            }
        }
        else if (this.type == "candle")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 45;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(candlewic, 33, 16, 9, 9, -(1/2 * 9 * 1.2), -(1/2 * 9 * 1.2), 9 * 1.2, 9 * 1.2);
            XXX.restore();

            // for the candle scenery object information == [lightsource duration, type of candle (fuel left in used candle)]
            if (this.runOneTime == true)
            {
                this.runOneTime = false;
                this.lightTime = information[0];
            }

            if (longevity != true)
            {
                if (new Date().getTime() - this.lightGetTime < this.lightTime * 1000)
                {
                    lights.push({X: this.X, Y: this.Y, size: 65, extraStops: true, GRD: 0.35, Alpha: 0.5, showMe: false});
                }
                else
                {
                    if (information[1] == 3)
                    {
                        worldItems.push([new Item("candle2", this.X, this.Y), 1])
                    }
                    else if (information[1] == 2)
                    {
                        worldItems.push([new Item("candle1", this.X, this.Y), 1])
                    }
                    for (var i = 0; i < scenicList.length; i++)
                    {
                        if (scenicList[i] === this)
                        {
                            scenicList.splice(i, 1);
                            break;
                        }
                    }
                }
            }
            else
            {
                lights.push({X: this.X, Y: this.Y, size: 65, extraStops: true, GRD: 0.35, Alpha: 0.5, showMe: false});
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 8;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                if (player.getIntelligence() < 1)
                {
                    player.health = Math.min(player.health, player.health - (0.25 - player.heatResistance)); //it burns the players finger :( ... or not
                }
                else if (longevity != true)
                {
                    if (information[1] == 3)
                    {
                        worldItems.push([new Item("candle2", this.X, this.Y), 1])
                    }
                    else if (information[1] == 2)
                    {
                        worldItems.push([new Item("candle1", this.X, this.Y), 1])
                    }
                    for (var i = 0; i < scenicList.length; i++)
                    {
                        if (scenicList[i] === this)
                        {
                            scenicList.splice(i, 1);
                            break;
                        }
                    }
                }

            }
        }
        else if (this.type == "jackOLantern")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 45;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(candlewic, 4, 100, 17, 18, - (1/2 * 17 * 1.2), - (1/2 * 18 * 1.2), 17 * 1.2, 18 * 1.2);
            XXX.restore();

            // for the candle scenery object information == [lightsource duration, type of candle (fuel left in used candle)]
            if (this.runOneTime == true)
            {
                this.runOneTime = false;
                this.lightTime = information[0];
            }

            if (longevity != true)
            {
                if (new Date().getTime() - this.lightGetTime < this.lightTime * 1000)
                {
                    lights.push({X: this.X, Y: this.Y, size: 85, extraStops: true, GRD: 0.7, Alpha: 0.4, showMe: false});
                }
                else
                {
                    if (information[1] == 3)
                    {
                        worldItems.push([new Item("jackOLantern2", this.X, this.Y), 1])
                    }
                    else if (information[1] == 2)
                    {
                        worldItems.push([new Item("jackOLantern1", this.X, this.Y), 1])
                    }
                    else if (information[1] == 1)
                    {
                        worldItems.push([new Item("jackOLanternEmpty", this.X, this.Y), 1])
                    }

                    for (var i = 0; i < scenicList.length; i++)
                    {
                        if (scenicList[i] === this)
                        {
                            scenicList.splice(i, 1);
                            break;
                        }
                    }
                }
            }
            else
            {
                lights.push({X: this.X, Y: this.Y, size: 85, extraStops: true, GRD: 0.7, Alpha: 0.4, showMe: false});
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 14;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                if (longevity != true)
                {
                    if (information[1] == 3)
                    {
                        worldItems.push([new Item("jackOLantern2", this.X, this.Y), 1])
                    }
                    else if (information[1] == 2)
                    {
                        worldItems.push([new Item("jackOLantern1", this.X, this.Y), 1])
                    }
                    else if (information[1] == 1)
                    {
                        worldItems.push([new Item("jackOLanternEmpty", this.X, this.Y), 1])
                    }

                    for (var i = 0; i < scenicList.length; i++)
                    {
                        if (scenicList[i] === this)
                        {
                            scenicList.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
        else if (this.type == "oilLamp")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 45;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(candlewic, 51, 110, 14, 15, - (1/2 * 14 * 1.2), - (1/2 * 15 * 1.2), 14 * 1.2, 15 * 1.2);
            XXX.restore();

            // for the candle scenery object information == [lightsource duration, type of candle (fuel left in used candle)]
            if (this.runOneTime == true)
            {
                this.runOneTime = false;
                this.lightTime = information[0];
            }

            if (longevity != true)
            {
                if (new Date().getTime() - this.lightGetTime < this.lightTime * 1000)
                {
                    lights.push({X: this.X, Y: this.Y, size: 175, extraStops: true, GRD: 0.7, Alpha: 0.8, showMe: false});
                }
                else
                {
                    if (information[1] == 3)
                    {
                        worldItems.push([new Item("oilLamp2", this.X, this.Y), 1])
                    }
                    else if (information[1] == 2)
                    {
                        worldItems.push([new Item("oilLamp1", this.X, this.Y), 1])
                    }
                    else if (information[1] == 1)
                    {
                        worldItems.push([new Item("oilLampEmpty", this.X, this.Y), 1])
                    }

                    for (var i = 0; i < scenicList.length; i++)
                    {
                        if (scenicList[i] === this)
                        {
                            scenicList.splice(i, 1);
                            break;
                        }
                    }
                }
            }
            else
            {
                lights.push({X: this.X, Y: this.Y, size: 175, extraStops: true, GRD: 0.7, Alpha: 0.8, showMe: false});
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 11;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                if (longevity != true)
                {
                    if (information[1] == 3)
                    {
                        worldItems.push([new Item("oilLamp2", this.X, this.Y), 1])
                    }
                    else if (information[1] == 2)
                    {
                        worldItems.push([new Item("oilLamp1", this.X, this.Y), 1])
                    }
                    else if (information[1] == 1)
                    {
                        worldItems.push([new Item("oilLampEmpty", this.X, this.Y), 1])
                    }

                    for (var i = 0; i < scenicList.length; i++)
                    {
                        if (scenicList[i] === this)
                        {
                            scenicList.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
        else if (this.type == "oilLantern")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 45;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(candlewic, 26, 109, 16, 16, - (1/2 * 16 * 1.2), - (1/2 * 16 * 1.2), 16 * 1.2, 16 * 1.2);
            XXX.restore();

            // for the candle scenery object information == [lightsource duration, type of candle (fuel left in used candle)]
            if (this.runOneTime == true)
            {
                this.runOneTime = false;
                this.lightTime = information[0];
            }

            if (longevity != true)
            {
                if (new Date().getTime() - this.lightGetTime < this.lightTime * 1000)
                {
                    lights.push({X: this.X, Y: this.Y, size: 250, extraStops: true, GRD: 0.7, Alpha: 0.9, showMe: false});
                }
                else
                {
                    if (information[1] == 5)
                    {
                        worldItems.push([new Item("oilLantern4", this.X, this.Y), 1])
                    }
                    else if (information[1] == 4)
                    {
                        worldItems.push([new Item("oilLantern3", this.X, this.Y), 1])
                    }
                    else if (information[1] == 3)
                    {
                        worldItems.push([new Item("oilLantern2", this.X, this.Y), 1])
                    }
                    else if (information[1] == 2)
                    {
                        worldItems.push([new Item("oilLantern1", this.X, this.Y), 1])
                    }
                    else if (information[1] == 1)
                    {
                        worldItems.push([new Item("oilLanternEmpty", this.X, this.Y), 1])
                    }

                    for (var i = 0; i < scenicList.length; i++)
                    {
                        if (scenicList[i] === this)
                        {
                            scenicList.splice(i, 1);
                            break;
                        }
                    }
                }
            }
            else
            {
                lights.push({X: this.X, Y: this.Y, size: 250, extraStops: true, GRD: 0.7, Alpha: 0.9, showMe: false});
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 11;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                if (longevity != true)
                {
                    if (information[1] == 5)
                    {
                        worldItems.push([new Item("oilLantern4", this.X, this.Y), 1])
                    }
                    else if (information[1] == 4)
                    {
                        worldItems.push([new Item("oilLantern3", this.X, this.Y), 1])
                    }
                    else if (information[1] == 3)
                    {
                        worldItems.push([new Item("oilLantern2", this.X, this.Y), 1])
                    }
                    else if (information[1] == 2)
                    {
                        worldItems.push([new Item("oilLantern1", this.X, this.Y), 1])
                    }
                    else if (information[1] == 1)
                    {
                        worldItems.push([new Item("oilLanternEmpty", this.X, this.Y), 1])
                    }

                    for (var i = 0; i < scenicList.length; i++)
                    {
                        if (scenicList[i] === this)
                        {
                            scenicList.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
        else if (this.type == "fertilizedMofuEgg")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 55;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(mofu, 109, 54, 8, 11, -(1/2 * 8), -(1/2 * 11), 8, 11);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 5;

            //HATCHING
            this.eggHatchTimer += 1 * (TTD / 16.75);
            if (this.eggHatchTimer >= 15000)
            {
                this.eggHatchTimer = -1000000;
                ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Mofu", "baby", "Generic Mofu"));
                for (var i = 0; i < scenicList.length; i++)
                {
                    if (scenicList[i] === this)
                    {
                        scenicList.splice(i, 1);
                        break;
                    }
                }
            }

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                worldItems.push([new Item("mofuEgg", this.X, this.Y), 1]);

                for (var i = 0; i < scenicList.length; i++)
                {
                    if (scenicList[i] === this)
                    {
                        scenicList.splice(i, 1);
                        break;
                    }
                }
            }
        }
        else if (this.type == "grewbleEgg")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 55;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(lodo, 9, 29, 12, 12, -(1/2 * 12 * 2), -(1/2 * 12 * 2), 12 * 2, 12 * 2);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 8;

            //HATCHING
            this.eggHatchTimer += 1 * (TTD / 16.75);
            if (this.eggHatchTimer >= 6000)
            {
                this.eggHatchTimer = -1000000;
                ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Grewble", "baby", "Generic Grewble"));
                for (var i = 0; i < scenicList.length; i++)
                {
                    if (scenicList[i] === this)
                    {
                        scenicList.splice(i, 1);
                        break;
                    }
                }
            }

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                worldItems.push([new Item("grewbleEgg", this.X, this.Y), 1]);

                for (var i = 0; i < scenicList.length; i++)
                {
                    if (scenicList[i] === this)
                    {
                        scenicList.splice(i, 1);
                        break;
                    }
                }
            }
        }
        else if (this.type == "grewbleEggPatch")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 55;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1 / 2 * CCC.width, Y - this.Y + 1 / 2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 29, 23, 24, 23, -(1 / 2 * 24 * 2), -(1 / 2 * 23 * 2), 24 * 2, 23 * 2);
                XXX.restore();
            }
            else if (this.phase == "broken")
            {
                XXX.save();
                XXX.translate(X - this.X + 1 / 2 * CCC.width, Y - this.Y + 1 / 2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 30, 50, 24, 23, -(1 / 2 * 24 * 2), -(1 / 2 * 23 * 2), 24 * 2, 23 * 2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 12;

            //HATCHING
            this.eggHatchTimer += 1 * (TTD / 16.75);
            if (this.eggHatchTimer >= 6000 && this.phase != "broken")
            {
                this.eggHatchTimer = -1000000;
                ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Grewble", "baby", "Generic Grewble"));
                ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Grewble", "baby", "Generic Grewble"));
                ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Grewble", "baby", "Generic Grewble"));
                this.phase = "broken";
            }

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                if (this.phase != "broken" && player.getSurvivalism() >= 8)
                {
                    worldItems.push([new Item("grewbleEgg", this.X, this.Y), 3]);

                    for (var i = 0; i < scenicList.length; i++)
                    {
                        if (scenicList[i] === this)
                        {
                            scenicList.splice(i, 1);
                            break;
                        }
                    }
                }
                else
                {
                    this.phase = "broken";
                }
            }
        }
        else if (this.type == "rubbledHome")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 135;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(freeverse, 273, 416, 64, 71, -(1/2 * 64 * 2.5), -(1/2 * 71 * 2.5), 64 * 2.5, 71 * 2.5);
            XXX.drawImage(freeverse, 306, 487, 28, 13, -(8.5 * 2.5), (19 * 2.5), 28 * 2.5, 13 * 2.5);
            XXX.drawImage(freeverse, 363, 411, 64, 71, -(1/2 * 64 * 2.5), -(1/2 * 71 * 2.5), 64 * 2.5, 71 * 2.5);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 90;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }
        }
        else if (this.type == "brokenWell")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 100;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(freeverse, 146, 336, 47, 40, -(1/2 * 47 * 1.6), -(1/2 * 40 * 1.6), 47 * 1.6, 40 * 1.6);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 27;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }
        }
        else if (this.type == "well")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 100;

            //DRAWSELF

            if (this.wellChange == true)
            {
                this.wellListo = false;
                if (this.toggleWell == true)
                {
                    this.frameLoop([[freeverse, 87, 46, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 87, 85, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 145, 84, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 202, 83, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 255, 83, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 306, 82, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 308, 124, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 255, 124, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 198, 125, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 140, 126, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 87.65, 125.65, 47, 40, 47 * 1.6, 40 * 1.6]], 10, 18, false);
                    if (this.frameLoopComplete == true)
                    {
                        this.wellChange = false;
                        this.wellUp = true;
                        this.wellListo = true;
                    }
                }
                else if (this.toggleWell == false)
                {
                    this.frameLoop([[freeverse, 87.65, 125.65, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 140, 126, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 198, 125, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 255, 124, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 308, 124, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 306, 82, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 255, 83, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 202, 83, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 145, 84, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 87, 85, 47, 40, 47 * 1.6, 40 * 1.6], [freeverse, 87, 46, 47, 40, 47 * 1.6, 40 * 1.6]], 10, 18, false);
                    if (this.frameLoopComplete == true)
                    {
                        this.wellChange = false;
                        this.wellUp = false;
                        this.wellListo = true;
                    }
                }
            }

            if (this.wellChange == false)
            {
                if (this.wellUp == true)
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(freeverse, 87.65, 125.65, 47, 40, -(1/2 * 47 * 1.6), -(1/2 * 40 * 1.6), 47 * 1.6, 40 * 1.6);
                    XXX.restore();
                }
                else if (this.wellUp == false)
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(freeverse, 87, 46, 47, 40, -(1/2 * 47 * 1.6), -(1/2 * 40 * 1.6), 47 * 1.6, 40 * 1.6);
                    XXX.restore();
                }
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 27;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                if (this.wellListo)
                {
                    this.wellChange = true;
                    this.loopNum = 0;
                    this.loopRate = 0;
                    this.frameLoopComplete = false;

                    //fill container with water
                    if (this.wellUp == true)
                    {
                        this.doBreak = false;
                        this.yaTiene = false;

                        for (var i = 0; i < Inventory.length; i++)
                        {
                            for (var j = 0; j < wellConversionList.length; j++)
                            {
                                //console.log(Inventory[i][0].type + " v.s. "  + wellConversionList[j][0]);
                                if (Inventory[i][0].type == wellConversionList[j][0])
                                {
                                    for (var k = 0; k < Inventory.length; k++)
                                    {
                                        if (Inventory[k][0].type == wellConversionList[j][1])
                                        {
                                            this.yaTiene = k;
                                        }
                                    }

                                    if (Inventory[i][1] > 1)
                                    {
                                        Inventory[i][1] -= 1;
                                        if (this.yaTiene == false)
                                        {
                                            Inventory.push([new Item(wellConversionList[j][1], false, false), 1]);
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
                                            Inventory.push([new Item(wellConversionList[j][1], false, false), 1]);
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
                if (this.toggleWell == false && this.wellListo)
                {
                    this.toggleWell = true;
                }
                else if (this.toggleWell == true && this.wellListo)
                {
                    this.toggleWell = false;
                }
            }
        }
        else if (this.type == "forge")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 100;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 2907, 149, 35, 19, -(1/2 * 70), -(1/2 * 38), 70, 38);
            XXX.restore();

            //produce light
            if (timeOfDay != "Day")
            {
                lights.push({X:this.X, Y: this.Y, size: 100, extraStops: true, GRD: 0.25, Alpha: 0.875, showMe: false});
            }

            //produce heat
            if (this.playerer <= 105)
            {
                player.warmth += Math.max(0, (0.90 - (player.heatResistance / 200)));
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 25;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                player.craftPosition = 0;
                craftScroll = 0;
                crafting = "forging";
                lowBar = "crafting";
                gameState = "paused";
            }
        }
        else if (this.type == "loom")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 100;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 2841, 139, 34, 26, -(1/2 * 68), -(1/2 * 52), 68, 52);
            XXX.drawImage(verse, 2841, 139, 34, 26, -(1/2 * 68), -(1/2 * 52), 68, 52);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 22;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                player.craftPosition = 0;
                craftScroll = 0;
                crafting = "tailoring";
                lowBar = "crafting";
                gameState = "paused";
            }
        }
        else if (this.type == "lab")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 100;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 2890, 125, 32, 22, -(1/2 * 64), -(1/2 * 44), 64, 44);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 22;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                player.craftPosition = 0;
                craftScroll = 0;
                crafting = "alchemy";
                lowBar = "crafting";
                gameState = "paused";
            }
        }
        else if (this.type == "skeleton")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 1;
            if (typeof(this.owned) != "null" && typeof(this.owned) != "boolean")
            {
                this.size = this.owned;
            }
            else
            {
                this.size = 1.4;
            }

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(mofu, 1303, 79, 64, 55, -(1/2 * 64 * this.size), -(1/2 * 55 * this.size), 64 * this.size, 55 * this.size);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 1;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }
        }
        else if (this.type == "propWagon")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 1;
            if (typeof(this.owned) != "null" && typeof(this.owned) != "boolean")
            {
                this.size = this.owned;
            }
            else
            {
                this.size = 1.5;
            }

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(polpol, 209, 279, 87, 63, -(1/2 * 87 * this.size), -(1/2 * 63 * this.size), 87 * this.size, 63 * this.size);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 28 * this.size;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }
        }
        else if (this.type == "clayDeposit")
        {

            if (this.runOneTime)
            {
                this.runOneTime = false;

                this.phase = longevity;
            }

            //TRAITS
            this.solid = false;
            this.interactionRange = 50 + 9 * this.phase;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(mufmuf, 1, 4, 11, 10, -(1/2 * 11 * 2 * this.phase), -(1/2 * 10 * 2 * this.phase), 11 * 2 * this.phase, 10 * 2 * this.phase);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 9 * this.phase;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                this.phase -= 1;
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "clay")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("clay", false, false), 1]);
                }

                if (this.phase < 1)
                {
                    scenicList.splice(scenicList.indexOf(this), 1);
                }
            }
        }
        else if (this.type == "utSlime")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 1;

            if (typeof(this.owned) != "null" && typeof(this.owned) != "boolean")
            {
                this.size = this.owned;
            }
            else
            {
                this.size = 1.5;
            }

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.globalAlpha = 0.4;
            XXX.rotate(this.rotation);
            XXX.drawImage(freeverse, 473, 921, 85, 66, -(1/2 * 85 * this.size), -(1/2 * 66 * this.size), 85 * this.size, 66 * this.size);
            XXX.restore();

            //Permanence
            if (typeof(this.owned) != "null" && typeof(this.owned) != "boolean")
            {
                if (new Date().getTime() >= this.loopTimer + 8400)
                {
                    scenicList.splice(scenicList.indexOf(this), 1);
                }
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 35 * this.size;

            //FUNCTIONALITY
            if (player.stunnedI == false)
            {
                if (Math.sqrt((X - this.X) * (X - this.X) + (Y - this.Y) * (Y - this.Y)) <= this.radius)
                {
                    player.stunnedI = true;
                    player.stunnedTime = 1;
                }
            }

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }
        }
        else if (this.type == "deadNaaprid")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 1;
            if (typeof(this.owned) != "null" && typeof(this.owned) != "boolean")
            {
                this.size = this.owned;
            }
            else
            {
                this.size = 1.25;
            }

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 3080, 90, 71, 48, -(1/2 * 71 * this.size), -(1/2 * 48 * this.size), 71 * this.size, 48 * this.size);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 1;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }
        }
        else if (this.type == "brolleFeast")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 1;
            var distToPlayer = 1000;

            if (this.runOneTime)
            {
                this.runOneTime = false;

                this.phase = "busy";
                this.tiic = 0;
                this.selTyp = Math.round(Math.random()); //selection type
            }
            //DRAWSELF
            if (this.phase == "busy")
            {
                this.flashAnimate(150 + Math.random() * 250, this.rotation, 1, [{image: lodo, imgX: 330, imgY: 231, portionW: 22, portionH: 21, adjX: - (1/2 * 22 * 2), adjY: - (1/2 * 21 * 2), width: 22 * 2, height: 21 * 2}, {image: lodo, imgX: 357, imgY: 231, portionW: 22, portionH: 21, adjX: - (1/2 * 22 * 2), adjY: - (1/2 * 21 * 2), width: 22 * 2, height: 21 * 2}]);
                distToPlayer = Math.sqrt((this.X - X) * (this.X - X) + (this.Y - Y) * (this.Y - Y));
            }
            else if (this.phase = "done")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 305, 232, 22, 21, -(1/2 * 22 * 2), -(1/2 * 21 * 2), 22 * 2, 21 * 2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 1;

            if (distToPlayer <= 250 && this.phase == "busy")
            {
                this.tiic += 1;
                if (this.tiic >= 240)
                {
                    this.tiic = 0;
                    this.phase = "done";

                    if (this.selTyp == 1)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "BrolleWorms", true, "Hungry Brolles"));
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "BrolleWorms", true, "Hungry Brolles"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "BrolleWorms", true, "Hungry Brolles"));
                    }
                }
            }

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }
        }
        else if (this.type == "grushweedPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = true;
            this.interactionRange = 100;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(oldverse, 3022, 233, 40, 42, -1/2 * 20 * this.owned, -1/2 * 42 * this.owned, 40 * this.owned, 42 * this.owned);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 16 * this.owned;
        }
        else if (this.type == "neprilnePlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 100;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2029, 501, 46, 42, -(1/2 * 46), -(1/2 * 42), 46, 42);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2088, 501, 46, 42, -(1/2 * 46), -(1/2 * 42), 46, 42);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 22;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "neprilneBerries")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("neprilneBerries", false, false), 1]);
                }
            }
        }
        else if (this.type == "potatoPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 40;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2912, 68, 20, 19, -(1/2 * 20), -(1/2 * 19), 20, 19);
                XXX.restore();
            }
            else
            {
                for (var i = 0; i < scenicList.length; i++)
                {
                    if (scenicList[i] === this)
                    {
                        scenicList.splice(i, 1);
                        break;
                    }
                }
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 18;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";

                //if the plant is owned and you are noticed by any AI then decrease faction relation for stealing.
                if (this.owned.length > 1)
                {
                    if (player.noticed == true)
                    {
                        this.changeFactionRelation(-7);
                    }
                }

                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "potato")
                    {
                        Inventory[i][1] += Math.floor(Math.random() * 6) + 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("potato", false, false), Math.floor(Math.random() * 6) + 1]);
                }
            }
        }
        else if (this.type == "carrotPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 40;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2892, 73, 13, 12, -(1/2 * 13), -(1/2 * 12), 13, 12);
                XXX.restore();
            }
            else
            {
                for (var i = 0; i < scenicList.length; i++)
                {
                    if (scenicList[i] === this)
                    {
                        scenicList.splice(i, 1);
                        break;
                    }
                }
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 18;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";

                //if the plant is owned and you are noticed by any AI then decrease faction relation for stealing.
                if (this.owned.length > 1)
                {
                    if (player.noticed == true)
                    {
                        this.changeFactionRelation(-5);
                    }
                }

                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "carrot")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("carrot", false, false), 1]);
                }
            }
        }
        else if (this.type == "glinPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.subVariety = "fungi";
            this.solid = false;
            this.interactionRange = 60;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 26, 1, 26, 23, -(1/2 * 26), -(1/2 * 23), 26, 23);
                XXX.restore();
            }
            else
            {
                for (var i = 0; i < scenicList.length; i++)
                {
                    if (scenicList[i] === this)
                    {
                        scenicList.splice(i, 1);
                        break;
                    }
                }
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 18;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "glinMushrooms")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("glinMushrooms", false, false), 1]);
                }
            }
        }
        else if (this.type == "halcifPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.subVariety = "fungi";
            this.solid = false;
            this.interactionRange = 45;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 7, 58, 26, 22, -(1/2 * 26), -(1/2 * 22), 26, 22);
                XXX.restore();
            }
            else
            {
                for (var i = 0; i < scenicList.length; i++)
                {
                    if (scenicList[i] === this)
                    {
                        scenicList.splice(i, 1);
                        break;
                    }
                }
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 14;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                if (player.glovesEquipped == "none")
                {
                    player.poisonIII = true;
                }
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "halcifMushroom")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 6);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("halcifMushroom", false, false), Math.floor(1 + Math.random() * 6)]);
                }
            }
        }
        else if (this.type == "cyrinthilimPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.subVariety = "fungi";
            this.solid = false;
            this.interactionRange = 60;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 7, 29, 38, 23, -(1/2 * 38), -(1/2 * 23), 38, 23);
                XXX.restore();
            }
            else
            {
                for (var i = 0; i < scenicList.length; i++)
                {
                    if (scenicList[i] === this)
                    {
                        scenicList.splice(i, 1);
                        break;
                    }
                }
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 18;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "cyrinthilimMushroom")
                    {
                        Inventory[i][1] += Math.floor(Math.random() * 5) + 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("cyrinthilimMushroom", false, false), Math.floor(Math.random() * 5) + 1]);
                }
            }
        }
        else if (this.type == "culprisPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 85;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2075, 194, 32, 32, -(1/2 * 32), -(1/2 * 32), 32, 32);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2120, 195, 32, 32, -(1/2 * 32), -(1/2 * 32), 32, 32);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 17;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "culprisLeaf")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 3);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("culprisLeaf", false, false), Math.floor(1 + Math.random() * 3)]);
                }
            }
        }
        else if (this.type == "harstPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 85;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 240, 27, 17, 19, -(1/2 * 17 * 2), -(1/2 * 19 * 2), 17 * 2, 19 * 2);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 261, 42, 17, 19, -(1/2 * 17 * 2), -(1/2 * 19 * 2), 17 * 2, 19 * 2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 17;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";

                //if the plant is owned and you are noticed by any AI then decrease faction relation for stealing.
                if (this.owned.length > 1)
                {
                    if (player.noticed == true)
                    {
                        this.changeFactionRelation(-5);
                    }
                }

                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "harstGrain")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 2);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("harstGrain", false, false), Math.floor(1 + Math.random() * 2)]);
                }
            }
        }
        else if (this.type == "santhPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 85;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2972, 178, 24, 23, -(1/2 * 24), -(1/2 * 23), 24, 23);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2941, 178, 24, 23, -(1/2 * 24), -(1/2 * 23), 24, 23);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 17;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";

                //if the plant is owned and you are noticed by any AI then decrease faction relation for stealing.
                if (this.owned.length > 1)
                {
                    if (player.noticed == true)
                    {
                        this.changeFactionRelation(-19);
                    }
                }

                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "santhGrain")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("santhGrain", false, false), 1]);
                }
            }
        }
        else if (this.type == "suuliPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 90;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2878, 92, 49, 50, -(1/2 * 49), -(1/2 * 50), 49, 50);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 2947, 94, 49, 50, -(1/2 * 49), -(1/2 * 50), 49, 50);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 17;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";

                //if the plant is owned and you are noticed by any AI then decrease faction relation for stealing.
                if (this.owned.length > 1)
                {
                    if (player.noticed == true)
                    {
                        this.changeFactionRelation(-17);
                    }
                }

                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "suuliMelon")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 3);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("suuliMelon", false, false), Math.floor(1 + Math.random() * 3)]);
                }
            }
        }
        else if (this.type == "pumpkinPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 80;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(candlewic, 27, 28, 56, 39, -(1/2 * 56 * 1.2), -(1/2 * 39 * 1.2), 56 * 1.2, 39 * 1.2);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(candlewic, 27, 64, 56, 39, -(1/2 * 56 * 1.2), -(1/2 * 39 * 1.2), 56 * 1.2, 39 * 1.2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 17;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";

                //if the plant is owned and you are noticed by any AI then decrease faction relation for stealing.
                if (this.owned.length > 1)
                {
                    if (player.noticed == true)
                    {
                        this.changeFactionRelation(-14);
                    }
                }

                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "pumpkin")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 3);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("pumpkin", false, false), Math.floor(1 + Math.random() * 3)]);
                }
            }
        }
        else if (this.type == "tylunPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 60;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2113, 150, 32, 30, -(1/2 * 32), -(1/2 * 30), 32, 30);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2078, 150, 32, 30, -(1/2 * 32), -(1/2 * 30), 32, 30);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 19;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "tylunFlower")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("tylunFlower", false, false), 1]);
                }
            }
        }
        else if (this.type == "ulgoyPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 50 * this.owned;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 245, 385, 39, 34, -(1/2 * 31 * this.owned), -(1/2 * 30 * this.owned), 31 * this.owned, 30 * this.owned);
                XXX.drawImage(polpol, 245, 385, 39, 34, -(1/2 * 31 * this.owned), -(1/2 * 30 * this.owned), 31 * this.owned, 30 * this.owned);
                XXX.restore();
            }
            else if (this.phase == 1)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 286, 385, 39, 34, -(1/2 * 31 * this.owned), -(1/2 * 30 * this.owned), 31 * this.owned, 30 * this.owned);
                XXX.drawImage(polpol, 286, 385, 39, 34, -(1/2 * 31 * this.owned), -(1/2 * 30 * this.owned), 31 * this.owned, 30 * this.owned);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(polpol, 317, 385, 39, 34, -(1/2 * 31 * this.owned), -(1/2 * 30 * this.owned), 31 * this.owned, 30 * this.owned);
                XXX.drawImage(polpol, 317, 385, 39, 34, -(1/2 * 31 * this.owned), -(1/2 * 30 * this.owned), 31 * this.owned, 30 * this.owned);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 10 * this.owned;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = 1;
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "ulgoyLeaf")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 3);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("ulgoyLeaf", false, false), Math.floor(1 + Math.random() * 3)]);
                }
            }
            else if (this.activate == true && this.phase == 1)
            {
                this.activate = false;
                var jarHitz = [-1, 1];
                for (var i = 0; i < Inventory.length; i++)
                {
                    if (Inventory[i][0].type == "glassJar")
                    {
                        jarHitz[0] = i;
                        jarHitz[1] = Inventory[i][1];
                    }
                }
                if (jarHitz[0] > -1 && player.getIntelligence() >= 12)
                {
                    if (jarHitz[1] - 1 > 0)
                    {
                        Inventory[jarHitz[0]][1] -= 1;
                    }
                    else
                    {
                        Inventory.splice(jarHitz[0], 1);
                    }
                    this.phase = "picked";
                    var hits = 0;
                    for (var i = 0; i < Inventory.length; i ++)
                    {
                        if (Inventory[i][0].type == "jarOfUlgoyNectar")
                        {
                            Inventory[i][1] += 1;
                            break;
                        }
                        else
                        {
                            hits += 1;
                        }
                    }
                    if (hits == Inventory.length)
                    {
                        Inventory.push([new Item("jarOfUlgoyNectar", false, false), 1]);
                    }
                }
            }
        }
        else if (this.type == "akerPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = true;
            this.interactionRange = 95;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2103, 73, 39, 34, -(1/2 * 39), -(1/2 * 34), 39, 34);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2060, 73, 39, 34, -(1/2 * 39), -(1/2 * 34), 39, 34);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 22;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "akerBerries")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 5);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("akerBerries", false, false), Math.floor(1 + Math.random() * 5)]);
                }
            }
        }
        else if (this.type == "tepprekliaPlant")
        {
            //TRAITS
            this.solid = true;
            this.variety = "plant";
            this.subVariety = "fungi";
            this.interactionRange = 110;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 3190, 59, 78, 72, -(1/2 * 78), -(1/2 * 72), 78, 72);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 3105, 62, 78, 72, -(1/2 * 78), -(1/2 * 72), 78, 72);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 25;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "tepprekliaFungus")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 9);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("tepprekliaFungus", false, false), Math.floor(1 + Math.random() * 9)]);
                }
            }
        }
        else if (this.type == "bequonPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 50;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 3028, 72, 68, 57, -(1/2 * 68), -(1/2 * 57), 68, 57);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(oldverse, 3024, 129, 68, 57, -(1/2 * 68), -(1/2 * 57), 68, 57);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 19;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "bequonFruit")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("bequonFruit", false, false), 1]);
                }
            }
        }
        else if (this.type == "tenicPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 75;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 222, 65, 33, 27, -(1/2 * 33 * 2), -(1/2 * 27 * 2), 33 * 2, 27 * 2);
                XXX.restore();
            }
            else if (this.phase == 1)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 260, 66, 33, 27, -(1/2 * 33 * 2), -(1/2 * 27 * 2), 33 * 2, 27 * 2);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 180, 65, 33, 27, -(1/2 * 33 * 2), -(1/2 * 27 * 2), 33 * 2, 27 * 2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 19;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = 1;
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "tenicFlower")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 3);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("tenicFlower", false, false), Math.floor(1 + Math.random() * 3)]);
                }
            }
            else if (this.activate == true && this.phase == 1)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "tenicLeaf")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 7);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("tenicLeaf", false, false), Math.floor(1 + Math.random() * 7)]);
                }
            }
        }
        else if (this.type == "palntPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 85;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 157, 467, 20, 20, -(1/2 * 20 * 1.35), -(1/2 * 20 * 1.35), 20 * 1.3, 20 * 1.35);
                XXX.restore();
            }
            else if (this.phase == 1)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 158, 495, 20, 20, -(1/2 * 20 * 1.35), -(1/2 * 20 * 1.35), 20 * 1.3, 20 * 1.35);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 177, 492, 32, 23, -(1/2 * 32 * 1.35 * 1.75), -(1/2 * 23 * 1.35 * 1.75), 32 * 1.35 * 1.75, 23 * 1.35 * 1.75);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 18;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = 1;
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "palntFlower")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("palntFlower", false, false), 1]);
                }
            }
            else if (this.activate == true && this.phase == 1)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "palntRoot")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 3);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("palntRoot", false, false), Math.floor(1 + Math.random() * 3)]);
                }
            }
        }
        else if (this.type == "sesrePlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 75;

            //DRAWSELF
            if (this.phase == 0)
            {
                if (timeOfDay == "Day")
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(lodo, 271, 174, 27, 25, -(1/2 * 27 * 2), -(1/2 * 25 * 2), 27 * 2, 25 * 2);
                    XXX.restore();
                }
                else
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(lodo, 271, 140, 27, 25, -(1/2 * 27 * 2), -(1/2 * 25 * 2), 27 * 2, 25 * 2);
                    XXX.restore();
                    lights.push({X: this.X, Y: this.Y, size: 92, extraStops: true, GRD: 0.1, Alpha: 0.68, showMe: false});
                }
            }
            else if (this.phase == 1)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 215, 174, 27, 25, -(1/2 * 27 * 2), -(1/2 * 25 * 2), 27 * 2, 25 * 2);
                XXX.restore();
                lights.push({X: this.X, Y: this.Y, size: 92, extraStops: true, GRD: 0.1, Alpha: 0.68, showMe: false});
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 216, 141, 27, 25, -(1/2 * 27 * 2), -(1/2 * 25 * 2), 27 * 2, 25 * 2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 15;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = 1;
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "sesreLeaf")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 4);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("sesreLeaf", false, false), Math.floor(1 + Math.random() * 4)]);
                }
            }
            else if (this.activate == true && this.phase == 1)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "sesreStamen")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("sesreStamen", false, false), 1]);
                }
            }
        }
        else if (this.type == "wegPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 90;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 345, 179, 25, 23, -(1/2 * 25 * 2), -(1/2 * 23 * 2), 25 * 2, 23 * 2);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 330, 121, 46, 49, -(1/2 * 46 * 2) - 7.5, -(1/2 * 49 * 2), 46 * 2, 49 * 2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 18;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "wegRoot")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("wegRoot", false, false), 1]);
                }
            }
        }
        else if (this.type == "wightbloomPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 100;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 154, 523, 27, 27, -(1/2 * 27 * 1.5), -(1/2 * 27 * 1.5), 27 * 1.5, 27 * 1.5);
                XXX.drawImage(theCrack, 154, 523, 27, 27, -(1/2 * 27 * 1.5), -(1/2 * 27 * 1.5), 27 * 1.5, 27 * 1.5);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 116, 524, 27, 27, -(1/2 * 27 * 1.5), -(1/2 * 27 * 1.5), 27 * 1.5, 27 * 1.5);
                XXX.drawImage(theCrack, 116, 524, 27, 27, -(1/2 * 27 * 1.5), -(1/2 * 27 * 1.5), 27 * 1.5, 27 * 1.5);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 21;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "wightbloomBerries")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 3);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("wightbloomBerries", false, false), Math.floor(1 + Math.random() * 3)]);
                }
            }
        }
        else if (this.type == "lorkweedPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.interactionRange = 65;
            this.solid = false;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 106, 173, 20, 17, -(1/2 * 20 * 2), -(1/2 * 17 * 2), 20 * 2, 17 * 2);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(lodo, 84, 174, 20, 17, -(1/2 * 20 * 2), -(1/2 * 17 * 2), 20 * 2, 17 * 2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 10;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                if (player.glovesEquipped == "none")
                {
                    player.health -= 0.45;
                    player.energy -= 0.25;
                }
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "lorkWeed")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("lorkWeed", false, false), 1]);
                }
            }
        }
        else if (this.type == "ishPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.interactionRange = 95;

            //DRAWSELF
            if (this.phase == 0)
            {
                this.solid = true;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 759, 542, 47, 46, -(1/2 * 47), -(1/2 * 46), 47, 46);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                this.solid = false;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 809, 543, 47, 46, -(1/2 * 47), -(1/2 * 46), 47, 46);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 22;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "ishBranch")
                    {
                        Inventory[i][1] += Math.floor(2 + Math.random() * 8);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("ishBranch", false, false), Math.floor(2 + Math.random() * 8)]);
                }
            }
        }
        else if (this.type == "itlinPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.interactionRange = 85;

            //DRAWSELF
            if (this.phase == 0)
            {
                this.solid = true;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 469, 59, 25, 22, -(1/2 * 25 * 2), -(1/2 * 22 * 2), 25 * 2, 22 * 2);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                this.solid = false;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 470, 82, 25, 22, -(1/2 * 25 * 2), -(1/2 * 22 * 2), 25 * 2, 22 * 2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 14;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "itlinBranch")
                    {
                        Inventory[i][1] += Math.floor(2 + Math.random() * 6);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("itlinBranch", false, false), Math.floor(2 + Math.random() * 6)]);
                }
            }
        }
        else if (this.type == "butterMellowPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.interactionRange = 50;
            this.solid = false;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 274, 46, 10, 8, -(1/2 * 10 * 2), -(1/2 * 8 * 2), 10 * 2, 8 * 2);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 287, 46, 10, 8, -(1/2 * 10 * 2), -(1/2 * 8 * 2), 10 * 2, 8 * 2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 14;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "butterMellowFlower")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("butterMellowFlower", false, false), 1]);
                }
            }
        }
        else if (this.type == "mufPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.interactionRange = 85;
            this.solid = false;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 278, 5, 13, 12, -(1/2 * 13 * 2), -(1/2 * 12 * 2), 13 * 2, 12 * 2);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 294, 5, 13, 12, -(1/2 * 13 * 2), -(1/2 * 12 * 2), 13 * 2, 12 * 2);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 14;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "mufBall")
                    {
                        Inventory[i][1] += 1;
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("mufBall", false, false), 1]);
                }
            }
        }
        else if (this.type == "wyrPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 90;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 376, 71, 49, 45, -(1/2 * 49 * 1.5), -(1/2 * 45 * 1.5), 49 * 1.5, 45 * 1.5);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 376, 116, 49, 45, -(1/2 * 49 * 1.5), -(1/2 * 45 * 1.5), 49 * 1.5, 45 * 1.5);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 20;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "wyrLeaf")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 8);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("wyrLeaf", false, false), Math.floor(1 + Math.random() * 8)]);
                }
            }
        }
        else if (this.type == "luufPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 85;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 383, 3, 21, 16, -(1/2 * 21), -(1/2 * 16), 21, 16);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(freeverse, 362, 4, 21, 16, -(1/2 * 21), -(1/2 * 16), 21, 16);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 15;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "luufBerries")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 2);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("luufBerries", false, false), Math.floor(1 + Math.random() * 2)]);
                }
            }
        }
        else if (this.type == "bushkaPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = true;
            this.interactionRange = 80;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(candlewic, 1, 174, 41, 33, -(1/2 * 41), -(1/2 * 33), 41, 33);
                XXX.restore();
            }
            if (this.phase == 1)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(candlewic, 2, 138, 41, 33, -(1/2 * 41), -(1/2 * 33), 41, 33);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(candlewic, 40, 138, 39, 34, -(1/2 * 39), -(1/2 * 34), 39, 34);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 18;

            //INTERACTION
            if (this.activate == true && this.phase != "picked")
            {
                this.activate = false;
                if (this.phase == 0)
                {

                    this.phase = 1;
                    var hits = 0;
                    for (var i = 0; i < Inventory.length; i++)
                    {
                        if (Inventory[i][0].type == "bushkaBerries")
                        {
                            Inventory[i][1] += Math.floor(1 + Math.random() * 6);
                            break;
                        }
                        else
                        {
                            hits += 1;
                        }
                    }
                    if (hits == Inventory.length)
                    {
                        Inventory.push([new Item("bushkaBerries", false, false), Math.floor(1 + Math.random() * 6)]);
                    }
                }
                else if (this.phase == 1)
                {

                    this.phase = "picked";
                    var hits = 0;
                    for (var i = 0; i < Inventory.length; i++)
                    {
                        if (Inventory[i][0].type == "bushkaLeaves")
                        {
                            Inventory[i][1] += Math.floor(2 + Math.random() * 7);
                            break;
                        }
                        else
                        {
                            hits += 1;
                        }
                    }
                    if (hits == Inventory.length)
                    {
                        Inventory.push([new Item("bushkaLeaves", false, false), Math.floor(2 + Math.random() * 7)]);
                    }
                }
            }
        }
        else if (this.type == "pluttPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = true;
            this.interactionRange = 95;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2064, 245, 39, 34, -(1/2 * 39), -(1/2 * 34), 39, 34);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2113, 245, 39, 34, -(1/2 * 39), -(1/2 * 34), 39, 34);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 22;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "pluttBerries")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 3);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("pluttBerries", false, false), Math.floor(1 + Math.random() * 3)]);
                }
            }
        }
        else if (this.type == "stomwikPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 90;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2112, 112, 32, 32, -(1/2 * 32), -(1/2 * 32), 32, 32);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2078, 108, 32, 32, -(1/2 * 32), -(1/2 * 32), 32, 32);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 18;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "stomwikLeaf")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 5);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("stomwikLeaf", false, false), Math.floor(1 + Math.random() * 5)]);
                }
            }
        }
        else if (this.type == "techiPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 90;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(candlewic, 79, 108, 18, 21, -(1/2 * 18), -(1/2 * 21), 18, 21);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(candlewic, 79, 128, 18, 21, -(1/2 * 18), -(1/2 * 21), 18, 21);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 18;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "techiLeaf")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 3);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("techiLeaf", false, false), Math.floor(1 + Math.random() * 3)]);
                }
            }
        }
        else if (this.type == "ogardPlant")
        {
            //TRAITS
            this.variety = "plant";
            this.solid = false;
            this.interactionRange = 85;

            //DRAWSELF
            if (this.phase == 0)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(poly, 60, 66, 34, 32, -(1/2 * 34 * 1.3), -(1/2 * 32 * 1.3), 34 * 1.3, 32 * 1.3);
                XXX.restore();
            }
            else if (this.phase == "picked")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(poly, 19, 65, 34, 32, -(1/2 * 34 * 1.3), -(1/2 * 32 * 1.3), 34 * 1.3, 32 * 1.3);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 22;

            //INTERACTION
            if (this.activate == true && this.phase == 0)
            {
                this.activate = false;
                this.phase = "picked";
                var hits = 0;
                for (var i = 0; i < Inventory.length; i ++)
                {
                    if (Inventory[i][0].type == "ogard")
                    {
                        Inventory[i][1] += Math.floor(1 + Math.random() * 3);
                        break;
                    }
                    else
                    {
                        hits += 1;
                    }
                }
                if (hits == Inventory.length)
                {
                    Inventory.push([new Item("ogard", false, false), Math.floor(1 + Math.random() * 3)]);
                }
            }
        }
        else if (this.type == "largeCeremonialRockCircle")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 1;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(furr, 15, 685, 164, 147, -(1/2 * 164 * 1.7), -(1/2 * 147 * 1.7), 164 * 1.7, 147 * 1.7);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 0;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }
        }
        else if (this.type == "hyelingSkeleton")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 1;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(furr, 282, 707, 54, 45, -(1/2 * 54 * 1.6), -(1/2 * 45 * 1.6), 54 * 1.6, 45 * 1.6);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 0;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }
        }
        else if (this.type == "tent")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 110;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(verse, 162, 1436, 40, 45, -(1/2 * 80), -(1/2 * 90), 80, 90);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 42;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                if (player.weaponEquipped == "hammer" && longevity == false) //if hammer is equipped deconstruct the tent.
                {
                    worldItems.push([new Item("tent", this.X, this.Y), 1]);
                    for (var i = 0; i < scenicList.length; i++)
                    {
                        if (scenicList[i] === this)
                        {
                            scenicList.splice(i, 1);
                            break;
                        }
                    }

                }
                else
                {
                    sleep();
                }
            }
        }
        else if (this.type == "hyelingTent")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 130;

            //DRAWSELF
            XXX.save();
            XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
            XXX.rotate(this.rotation);
            XXX.drawImage(furr, 188, 715, 64, 57, -(1/2 * 64 * 1.9), -(1/2 * 57 * 1.9), 64 * 1.9, 57 * 1.9);
            XXX.restore();

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 54;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
                player.warmth += 50;
                sleep();
            }
        }
        else if (this.type == "pineTree")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 120;

            //DRAWSELF
            if (this.treePhase == 0)
            {
                if (this.playerer < 130)
                {
                    this.zIndex = 5;
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 172, 1593, 28, 28, -(1/2 * 28 * 4.5), -(1/2 * 28 * 4.5), 28 * 4.5, 28 * 4.5);
                    XXX.restore();

                    XXX.globalAlpha = 0.96;
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3783, 317, 79, 71, -(1/2 * 79 * 4.5), -(1/2 * 71 * 4.5), 79 * 4.5, 71 * 4.5);
                    XXX.restore();
                    XXX.globalAlpha = 1;
                }
                else
                {
                    this.zIndex = 5;
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 3783, 317, 79, 71, -(1/2 * 79 * 4.5), -(1/2 * 71 * 4.5), 79 * 4.5, 71 * 4.5);
                    XXX.restore();
                }
            }
            else if (this.treePhase == 1)
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 1, 1597, 165, 82, -(1/2 * 25 * 4.5), -(1/2 * 80 * 4.5), 165 * 4.5, 82 * 4.5);
                XXX.restore();
            }
            else if (this.treePhase == 2)
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 172, 1593, 28, 28, -(1/2 * 28 * 4.5), -(1/2 * 26 * 4.5), 28 * 4.5, 28 * 4.5);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 30;

            //INTERACTION
            if (this.activate == true)
            {
                if (this.treePhase == 1)
                {
                    var hits = 0;
                    for (var i = 0; i < Inventory.length; i ++)
                    {
                        if (Inventory[i][0].type == "wood")
                        {
                            Inventory[i][1] += 60;
                            this.treePhase = 2;
                            break;
                        }
                        else
                        {
                            hits += 1;
                        }
                    }
                    if (hits == Inventory.length)
                    {
                        Inventory.push([new Item("wood", false, false), 60]);
                        this.treePhase = 2;
                    }
                }
                this.activate = false;
            }

            if (this.treePhase == 0) //if this tree is in its cut down phase.
            {
                //console.log(player.finalAttackStage);
                if (player.weaponEquipped == "vardanianAxe" && player.cutcut == true && this.playerer < 130 || player.weaponEquipped == "vardanianAxeDual" && player.cutcut == true && this.playerer < 130)
                {
                    var distFromCutCut = Math.sqrt((this.X - player.bubbleOfDamageX)*(this.X - player.bubbleOfDamageX) + (this.Y - player.bubbleOfDamageY)*(this.Y - player.bubbleOfDamageY));
                    console.log(distFromCutCut);
                    if (distFromCutCut <= player.weapon.range * 7 + 35)
                    {
                        this.treeHealth -= 0.2;
                    }

                    if (this.treeHealth <= 0)
                    {
                        this.treePhase = 1
                    }
                }
                else if (player.weaponEquipped == "timberAxe" && player.cutcut == true && this.playerer < 130)
                {
                    var distFromCutCut = Math.sqrt((this.X - player.bubbleOfDamageX)*(this.X - player.bubbleOfDamageX) + (this.Y - player.bubbleOfDamageY)*(this.Y - player.bubbleOfDamageY));
                    console.log(distFromCutCut);
                    if (distFromCutCut <= player.weapon.range * 7 + 35)
                    {
                        this.treeHealth -= 1;
                    }

                    if (this.treeHealth <= 0)
                    {
                        this.treePhase = 1
                    }
                }
                else if (player.weaponEquipped == "vardanianBattleAxe" && player.cutcut == true && this.playerer < 130 || player.weaponEquipped == "freydicWarAxe" && player.cutcut == true  && this.playerer < 130)
                {
                    var distFromCutCut = Math.sqrt((this.X - player.bubbleOfDamageX)*(this.X - player.bubbleOfDamageX) + (this.Y - player.bubbleOfDamageY)*(this.Y - player.bubbleOfDamageY));
                    console.log(distFromCutCut);
                    if (distFromCutCut <= player.weapon.range * 7 + 35)
                    {
                        this.treeHealth -= 0.4;
                    }

                    if (this.treeHealth <= 0)
                    {
                        this.treePhase = 1
                    }
                }
                else if (player.weaponEquipped == "dualVardanianBattleAxe" && player.cutcut == true && this.playerer < 130)
                {
                    var distFromCutCut = Math.sqrt((this.X - player.bubbleOfDamageX)*(this.X - player.bubbleOfDamageX) + (this.Y - player.bubbleOfDamageY)*(this.Y - player.bubbleOfDamageY));
                    console.log(distFromCutCut);
                    if (distFromCutCut <= player.weapon.range * 10 + 35)
                    {
                        this.treeHealth -= 0.8;
                    }

                    if (this.treeHealth <= 0)
                    {
                        this.treePhase = 1
                    }
                }
            }
        }
        else if (this.type == "stone")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 1;

            //Establish Rock Load
            if (this.runOneTime == true)
            {
                this.runOneTime = false;
                this.health = 10;
                this.rockLoad = [];
                for (var looop = 0; looop < 80; looop++)
                {
                    this.rockLoad.push({type: "stone", quantity: 1});
                }
                for (var looop = 0; looop < 8; looop++)
                {
                    this.rockLoad.push({type: "stone", quantity: 2});
                }
                for (var looop = 0; looop < 6 + player.miningLuck; looop++)
                {
                    this.rockLoad.push({type: "coal", quantity: 1});
                }
                for (var looop = 0; looop < 4 + player.miningLuck; looop++)
                {
                    this.rockLoad.push({type: "ironOre", quantity: 1});
                }
                for (var looop = 0; looop < 1 + player.miningLuck; looop++)
                {
                    this.rockLoad.push({type: "rawSilver", quantity: 1});
                }
                for (var looop = 0; looop < 1 + player.miningLuck; looop++)
                {
                    this.rockLoad.push({type: "rawGold", quantity: 1});
                }
            }

            //DRAWSELF
            if (information == 1)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 956, 397, 49, 55, -(1/2 * 49 * this.owned), -(1/2 * 55 * this.owned), 49 * this.owned, 55 * this.owned);
                XXX.restore();
            }
            else if (information == 2)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 896, 398, 55, 41, -(1/2 * 55 * this.owned), -(1/2 * 41 * this.owned), 55 * this.owned, 41 * this.owned);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 864, 410, 31, 30, -(1/2 * 31 * this.owned * 1.5), -(1/2 * 30 * this.owned * 1.5), 31 * this.owned * 1.5, 30 * this.owned * 1.5);
                XXX.restore();
            }


            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 10 * this.owned;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }


            //console.log(player.finalAttackStage);
            if (player.weaponEquipped == "pickaxe" && player.cutcut == true)
            {
                var distFromCutCut = Math.sqrt((this.X - player.bubbleOfDamageX)*(this.X - player.bubbleOfDamageX) + (this.Y - player.bubbleOfDamageY)*(this.Y - player.bubbleOfDamageY));
                console.log(distFromCutCut);
                if (distFromCutCut <= player.weapon.range * 7 + 18)
                {
                    this.health -= 1;
                    if (this.health <= 0)
                    {
                        this.health = 10;
                        this.rockLoader(this.rockLoad);
                        this.owned -= 0.25;
                        if (this.owned <= 0)
                        {
                            scenicList.splice(scenicList.indexOf(this), 1);
                        }
                    }
                }
            }
        }
        else if (this.type == "darkStone")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 1;

            //Establish Rock Load
            if (this.runOneTime == true)
            {
                this.runOneTime = false;
                this.health = 13;
                this.rockLoad = [];
                for (var looop = 0; looop < 64; looop++)
                {
                    this.rockLoad.push({type: "darkStone", quantity: 1});
                }
                for (var looop = 0; looop < 8; looop++)
                {
                    this.rockLoad.push({type: "darkStone", quantity: 2});
                }
                for (var looop = 0; looop < 15 + player.miningLuck; looop++)
                {
                    this.rockLoad.push({type: "coal", quantity: 1});
                }
                for (var looop = 0; looop < 10 + player.miningLuck; looop++)
                {
                    this.rockLoad.push({type: "ironOre", quantity: 1});
                }
                for (var looop = 0; looop < 1 + player.miningLuck; looop++)
                {
                    this.rockLoad.push({type: "ruby", quantity: 1});
                }
                for (var looop = 0; looop < 1 + player.miningLuck; looop++)
                {
                    this.rockLoad.push({type: "rawSilver", quantity: 1});
                }
                for (var looop = 0; looop < 1 + player.miningLuck; looop++)
                {
                    this.rockLoad.push({type: "rawGold", quantity: 1});
                }
            }

            //DRAWSELF
            if (information == 1)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 780, 460, 45, 42, -(1/2 * 45 * this.owned), -(1/2 * 42 * this.owned), 45 * this.owned, 42 * this.owned);
                XXX.restore();
            }
            else if (information == 2)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 722, 461, 54, 42, -(1/2 * 54 * this.owned), -(1/2 * 42 * this.owned), 54 * this.owned, 42 * this.owned);
                XXX.restore();
            }
            else
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(polypol, 691, 473, 25, 26, -(1/2 * 25 * this.owned * 1.5), -(1/2 * 26 * this.owned * 1.5), 25 * this.owned * 1.5, 26 * this.owned * 1.5);
                XXX.restore();
            }


            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 10 * this.owned;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }


            //console.log(player.finalAttackStage);
            if (player.weaponEquipped == "pickaxe" && player.cutcut == true)
            {
                var distFromCutCut = Math.sqrt((this.X - player.bubbleOfDamageX)*(this.X - player.bubbleOfDamageX) + (this.Y - player.bubbleOfDamageY)*(this.Y - player.bubbleOfDamageY));
                console.log(distFromCutCut);
                if (distFromCutCut <= player.weapon.range * 7 + 18)
                {
                    this.health -= 1;
                    if (this.health <= 0)
                    {
                        this.health = 13;
                        this.rockLoader(this.rockLoad);
                        this.owned -= 0.25;
                        if (this.owned <= 0)
                        {
                            scenicList.splice(scenicList.indexOf(this), 1);
                        }
                    }
                }
            }
        }
        else if (this.type == "beeHive")
        {
            //TRAITS
            this.solid = true;
            this.interactionRange = 1;

            if (this.runOneTime)
            {
                this.runOneTime = false;

                this.health = 3;
            }
            console.log(player.cutcut);
            //DRAWSELF
            if (this.phase == 0)
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(poly, 490, 341, 20, 27, -(1/2 * 20), -(1/2 * 27), 20, 27);
                XXX.restore();
            }
            else if (this.phase == "dead")
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(poly, 489, 375, 20, 27, -(1/2 * 20), -(1/2 * 27), 20, 27);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 10;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }

            //HIVE
            this.minionCount();
            var nearPlants = this.nearbyPlants(5, "fungi");
            //console.log(nearPlants);
            if (this.minions < this.minionsMAX && this.phase != "dead")
            {
                if (new Date().getTime() - this.summonTime > this.summonRate * 1000)
                {
                    this.summonTime = new Date().getTime();
                    var random = Math.floor(Math.random() * 4);
                    if (nearPlants.length == 5)
                    {
                        if (random == 0)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[nearPlants[3].X, nearPlants[3].Y], [nearPlants[0].X, nearPlants[0].Y], [nearPlants[4].X, nearPlants[4].Y], [nearPlants[2].X, nearPlants[2].Y], [nearPlants[1].X, nearPlants[1].Y], [this.X, this.Y]]}));
                        }
                        else if (random == 1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[nearPlants[0].X, nearPlants[0].Y], [nearPlants[1].X, nearPlants[1].Y], [nearPlants[2].X, nearPlants[2].Y], [nearPlants[3].X, nearPlants[3].Y], [nearPlants[4].X, nearPlants[4].Y], [this.X, this.Y]]}));
                        }
                        else if (random == 2)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[nearPlants[1].X, nearPlants[1].Y], [nearPlants[2].X, nearPlants[2].Y], [nearPlants[0].X, nearPlants[0].Y], [nearPlants[4].X, nearPlants[4].Y], [nearPlants[3].X, nearPlants[3].Y], [this.X, this.Y]]}));
                        }
                        else if (random == 3)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[nearPlants[2].X, nearPlants[2].Y], [nearPlants[4].X, nearPlants[4].Y], [nearPlants[3].X, nearPlants[3].Y], [nearPlants[1].X, nearPlants[1].Y], [nearPlants[0].X, nearPlants[0].Y], [this.X, this.Y]]}));
                        }
                    }
                    else
                    {
                        if (random == 0)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X + 210, this.Y + 15], [this.X + 560, this.Y + 200], [this.X - 90, this.Y + 185], [this.X, this.Y], [this.X + 132, this.Y - 78], [this.X - 300, this.Y - 146]]}));
                        }
                        else if (random == 1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X - 210, this.Y - 15], [this.X - 560, this.Y - 200], [this.X + 90, this.Y - 185], [this.X, this.Y], [this.X - 132, this.Y + 78], [this.X + 300, this.Y + 146]]}));
                        }
                        else if (random == 2)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X - 130, this.Y - 115], [this.X - 205, this.Y + 340], [this.X + 39, this.Y + 70], [this.X - 60, this.Y - 10], [this.X - 200, this.Y - 100], [this.X + 200, this.Y + 200]]}));
                        }
                        else if (random == 3)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X + 130, this.Y + 115], [this.X + 205, this.Y - 340], [this.X - 39, this.Y - 70], [this.X + 60, this.Y + 10], [this.X + 200, this.Y + 100], [this.X - 200, this.Y - 200]]}));
                        }
                    }
                }
            }
            //DAMAGE AND DEATH SENSING
            if (this.phase == 0)
            {
                if (player.cutcut == true)
                {
                    var distFromCutCut = Math.sqrt((this.X - player.bubbleOfDamageX)*(this.X - player.bubbleOfDamageX) + (this.Y - player.bubbleOfDamageY)*(this.Y - player.bubbleOfDamageY));
                    if (distFromCutCut <= player.weapon.range * 7 + this.radius)
                    {
                        this.health -= player.weapon.damage;
                    }

                    if (this.health <= 0)
                    {
                        this.phase = "dead";
                        for (var i = 0; i < 2; i++)
                        {
                            var random = Math.floor(Math.random() * 4);
                            if (random == 0)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X + 210, this.Y + 15], [this.X + 560, this.Y + 200], [this.X - 90, this.Y + 185], [this.X, this.Y], [this.X + 132, this.Y - 78], [this.X - 300, this.Y - 146]]}));
                            }
                            else if (random == 1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X - 210, this.Y - 15], [this.X - 560, this.Y - 200], [this.X + 90, this.Y - 185], [this.X, this.Y], [this.X - 132, this.Y + 78], [this.X + 300, this.Y + 146]]}));
                            }
                            else if (random == 2)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X - 130, this.Y - 115], [this.X - 205, this.Y + 340], [this.X + 39, this.Y + 70], [this.X - 60, this.Y - 10], [this.X - 200, this.Y - 100], [this.X + 200, this.Y + 200]]}));
                            }
                            else if (random == 3)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Bees", false, this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X + 130, this.Y + 115], [this.X + 205, this.Y - 340], [this.X - 39, this.Y - 70], [this.X + 60, this.Y + 10], [this.X + 200, this.Y + 100], [this.X - 200, this.Y - 200]]}));
                            }
                        }
                        worldItems.push([new Item("beesWax", this.X, this.Y), 3]);
                        worldItems.push([new Item("honey", this.X, this.Y), 1]);
                    }
                }
            }
        }
        else if (this.type == "anterHill")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 1;

            if (this.runOneTime)
            {
                this.runOneTime = false;

                this.phase = "sturdy";
                this.health = 125;
                this.tiic = 0;
                this.minionsMAX = 21; //total amount of soldiers the hive can have.
                this.summonRate = 100; //how long in seconds it takes to summon a new minion.
                this.selTyp = Math.round(Math.random()); //selection type
            }
            console.log(player.cutcut);
            //DRAWSELF
            if (this.phase == "sturdy")
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                if (this.selTyp == 1)
                {
                    XXX.drawImage(theCrack, 923, 507, 78, 74, -(1/2 * 78 * 1.5), -(1/2 * 74 * 1.5), 78 * 1.5, 74 * 1.5);
                }
                else
                {
                    XXX.drawImage(theCrack, 923, 600, 78, 74, -(1/2 * 78 * 1.5), -(1/2 * 74 * 1.5), 78 * 1.5, 74 * 1.5);
                }
                XXX.restore();
            }
            else if (this.phase == "break1")
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 735, 608, 78, 74, -(1/2 * 78 * 1.5), -(1/2 * 74 * 1.5), 78 * 1.5, 74 * 1.5);
                XXX.restore();
            }
            else if (this.phase == "break2")
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 737, 689, 78, 74, -(1/2 * 78 * 1.5), -(1/2 * 74 * 1.5), 78 * 1.5, 74 * 1.5);
                XXX.restore();
            }
            else if (this.phase == "break3")
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 638, 689, 78, 74, -(1/2 * 78 * 1.5), -(1/2 * 74 * 1.5), 78 * 1.5, 74 * 1.5);
                XXX.restore();
            }
            else if (this.phase == "broken")
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(theCrack, 830, 603, 78, 74, -(1/2 * 78 * 1.5), -(1/2 * 74 * 1.5), 78 * 1.5, 74 * 1.5);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 100;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }

            //HIVE
            this.minionCount();
            if (this.minions < this.minionsMAX && this.phase == "sturdy")
            {
                if (new Date().getTime() - this.summonTime > this.summonRate * 1000)
                {
                    this.summonTime = new Date().getTime();
                    var random = Math.floor(Math.random() * 4);
                    var randAlpha = Math.floor(Math.random() * 6);
                    var alphaPicks = [false, false, false, true, true, "massive"];

                    if (random == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Anter", alphaPicks[randAlpha], this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X + (Math.random() * 1200) - 600, this.Y + (Math.random() * 1200) - 600], [this.X + (Math.random() * 1200) - 600, this.Y + (Math.random() * 1200) - 600], [this.X + (Math.random() * 1200) - 600, this.Y + (Math.random() * 1200) - 600], [this.X + (Math.random() * 1200) - 600, this.Y + (Math.random() * 1200) - 600], [this.X, this.Y], [this.X + (Math.random() * 1200) - 600, this.Y + (Math.random() * 1200) - 600]]}));
                    }
                    else if (random == 1)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Anter", alphaPicks[randAlpha], this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X + (Math.random() * 1800) - 900, this.Y + (Math.random() * 1800) - 900], [this.X + (Math.random() * 1800) - 900, this.Y + (Math.random() * 1800) - 900], [this.X + (Math.random() * 1800) - 900, this.Y + (Math.random() * 1800) - 900], [this.X + (Math.random() * 1800) - 900, this.Y + (Math.random() * 1800) - 900], [this.X + (Math.random() * 1800) - 900, this.Y + (Math.random() * 1800) - 900], [this.X, this.Y]]}));
                    }
                    else if (random == 2)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Anter", alphaPicks[randAlpha], this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X, this.Y], [this.X + (Math.random() * 2400) - 1200, this.Y + (Math.random() * 2400) - 1200], [this.X + (Math.random() * 2400) - 1200, this.Y + (Math.random() * 2400) - 1200], [this.X, this.Y], [this.X + (Math.random() * 2400) - 1200, this.Y + (Math.random() * 2400) - 1200], [this.X + (Math.random() * 2400) - 1200, this.Y + (Math.random() * 2400) - 1200]]}));
                    }
                    else if (random == 3)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Anter", alphaPicks[randAlpha], this.hiveID, {patrolStops: 6, patrolLoop: true, route:[[this.X + (Math.random() * 800) - 400, this.Y + (Math.random() * 800) - 400], [this.X, this.Y], [this.X + (Math.random() * 800) - 400, this.Y + (Math.random() * 800) - 400], [this.X, this.Y], [this.X + (Math.random() * 800) - 400, this.Y + (Math.random() * 800) - 400], [this.X, this.Y]]}));
                    }
                }
            }

            //DAMAGE AND DEATH SENSING
            if (player.cutcut == true)
            {
                var distFromCutCut = Math.sqrt((this.X - player.bubbleOfDamageX)*(this.X - player.bubbleOfDamageX) + (this.Y - player.bubbleOfDamageY)*(this.Y - player.bubbleOfDamageY));
                if (distFromCutCut <= player.weapon.range * 7 + this.radius)
                {
                    this.health -= player.weapon.damage;
                }
            }
            console.log(this.health);
            if (this.health <= 0 && this.phase == "sturdy")
            {
                console.log("pass");
                this.tiic += 1;
                if (this.tiic >= 12)
                {
                    this.tiic = 0;
                    this.phase = "break1";
                    anterHillCollapse.play();
                }
            }
            if (this.phase == "break1")
            {
                this.tiic += 1;
                if (this.tiic >= 12)
                {
                    this.tiic = 0;
                    this.phase = "break2";
                }
            }
            if (this.phase == "break2")
            {
                this.tiic += 1;
                if (this.tiic >= 12)
                {
                    this.tiic = 0;
                    this.phase = "break3";
                }
            }
            if (this.phase == "break3")
            {
                this.tiic += 1;
                if (this.tiic >= 12)
                {
                    this.tiic = 0;
                    this.phase = "broken";
                }
            }
        }
        else if (this.type == "tunskMound")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 1;
            var distToPlayer = 1000;

            if (this.runOneTime)
            {
                this.runOneTime = false;

                this.phase = "sturdy";
                this.tiic = 0;
                this.selTyp = Math.round(Math.random()); //selection type
            }

            //DRAWSELF
            if (this.phase == "sturdy")
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 145, 3, 18, 17, -(1/2 * 18 * 2.4), -(1/2 * 17 * 2.4), 18 * 2.4, 17 * 2.4);
                XXX.restore();

                distToPlayer = Math.sqrt((this.X - X) * (this.X - X) + (this.Y - Y) * (this.Y - Y));
            }
            else if (this.phase == "break1")
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 164, 3, 18, 17, -(1/2 * 18 * 2.4), -(1/2 * 17 * 2.4), 18 * 2.4, 17 * 2.4);
                XXX.restore();
            }
            else if (this.phase == "break2")
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 183, 2, 18, 17, -(1/2 * 18 * 2.4), -(1/2 * 17 * 2.4), 18 * 2.4, 17 * 2.4);
                XXX.restore();
            }
            else if (this.phase == "broken")
            {
                this.zIndex = 1;
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(mufmuf, 206, 3, 18, 17, -(1/2 * 18 * 2.4), -(1/2 * 17 * 2.4), 18 * 2.4, 17 * 2.4);
                XXX.restore();
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 10;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;
            }

            //A tunsk scurries out of its burrow when a player is near for too long.
            if (distToPlayer <= 130 && this.phase == "sturdy")
            {
                this.tiic += 1;
                if (this.tiic >= 290)
                {
                    this.tiic = 0;
                    this.phase = "break1";
                    anterHillCollapse.play();
                }
            }
            if (this.phase == "break1")
            {
                this.tiic += 1;
                if (this.tiic >= 14)
                {
                    this.tiic = 0;
                    this.phase = "break2";
                }
            }
            if (this.phase == "break2")
            {
                this.tiic += 1;
                if (this.tiic >= 14)
                {
                    this.tiic = 0;
                    this.phase = "broken";

                    if (this.selTyp == 1)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Tunsk", true, "Un-burrowed Tunsk"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Tunsk", false, "Un-burrowed Tunsk"));
                    }
                }
            }
        }
        else if (this.type == "campFire")
        {
            //TRAITS
            this.solid = false;
            this.interactionRange = 35;

            //animate
            if (this.lit == true)
            {
                lights.push({X:this.X, Y: this.Y, size: 140, extraStops: true, GRD: 0.5, Alpha: 0.75, showMe: false});
                this.fireCostume += 1;
                this.campFireTime += 1;

                //die out over time
                if (this.campFireTime >= 10000)
                {
                    this.campFireTime = 0;
                    this.lit = false;
                    this.burnt = true;
                }
            }

            if (this.burnt == true)
            {
                this.burntTime += 1;

                if (this.burntTime >= 2000)
                {
                    this.burntTime = 0;
                    if (longevity == false)
                    {
                        for (var i = 0; i < scenicList.length; i++)
                        {
                            if (scenicList[i] === this)
                            {
                                scenicList.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
            }

            //DRAWSELF
            if (this.lit == false)
            {
                if (this.burnt == false)
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2917, 174, 23, 23, -(1/2 * 34.5), -(1/2 * 34.5), 34.5, 34.5);
                    XXX.drawImage(verse, 2917, 174, 23, 23, -(1/2 * 34.5), -(1/2 * 34.5), 34.5, 34.5);
                    XXX.restore();
                }
                else
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(verse, 2890, 173, 23, 23, -(1/2 * 34.5), -(1/2 * 34.5), 34.5, 34.5);
                    XXX.drawImage(verse, 2890, 173, 23, 23, -(1/2 * 34.5), -(1/2 * 34.5), 34.5, 34.5);
                    XXX.restore();
                }
            }
            else if (this.fireCostume <= 14)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2865, 168, 23, 23, -(1/2 * 34.5) - 0.225, -(1/2 * 34.5) + 0.4, 34.5, 34.5);
                XXX.drawImage(verse, 2865, 168, 23, 23, -(1/2 * 34.5) - 0.225, -(1/2 * 34.5) + 0.4, 34.5, 34.5);
                XXX.restore();
            }
            else if (this.fireCostume > 14 && this.fireCostume <= 28)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2939, 220, 23, 23, -(1/2 * 34.5) + 1, -(1/2 * 34.5) + 0.6, 34.5, 34.5);
                XXX.drawImage(verse, 2939, 220, 23, 23, -(1/2 * 34.5) + 1, -(1/2 * 34.5) + 0.6, 34.5, 34.5);
                XXX.restore();
            }
            else if (this.fireCostume > 28 && this.fireCostume <= 42)
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2966, 220, 23, 23, -(1/2 * 34.5) + 1, -(1/2 * 34.5) + 0.6, 34.5, 34.5);
                XXX.drawImage(verse, 2966, 220, 23, 23, -(1/2 * 34.5) + 1, -(1/2 * 34.5) + 0.6, 34.5, 34.5);
                XXX.restore();
            }
            else if (this.fireCostume > 42)
            {
                this.fireCostume = 0;

                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 2865, 168, 23, 23, -(1/2 * 34.5) - 0.225, -(1/2 * 34.5) + 0.4, 34.5, 34.5);
                XXX.drawImage(verse, 2865, 168, 23, 23, -(1/2 * 34.5) - 0.225, -(1/2 * 34.5) + 0.4, 34.5, 34.5);
                XXX.restore();
            }

            if (this.playerer <= this.radius && this.lit == true) //fire burns the player but heat resistance can reduce the damage it does.
            {
                if (player.mageShield > 0)
                {
                    player.mageShield -= 0.125;
                    player.warmth += Math.max(0, (1 - (player.heatResistance / 200)));
                }
                else
                {
                    player.health += player.mageShield;
                    player.mageShield = 0;

                    player.health -= Math.max(0, (0.125 - (player.heatResistance / 200)));
                    player.warmth += Math.max(0, (1 - (player.heatResistance / 200)));
                    player.burningTime = new Date().getTime();
                }
            }
            else if (this.playerer <= 50 && this.lit == true)
            {
                player.warmth += Math.max(0, (0.65 - (player.heatResistance / 200)));
            }

            //SIZE //a radius that the player cannot walk through and that when clicked will trigger the scenery object.
            this.radius = 19;

            //INTERACTION
            if (this.activate == true)
            {
                this.activate = false;

                if (this.lit == false && this.burnt == false || this.lit == false && longevity == true)
                {
                    for (var i = 0; i < Inventory.length; i++)
                    {
                        if (Inventory[i][0].identity == "Fire-Starter")
                        {
                            this.gotFireStarter = true;
                        }
                    }

                    if (this.gotFireStarter)
                    {
                        this.burntTime = 0;
                        this.lit = true;
                    }
                }
                else if (this.lit == true && this.burnt == false)
                {
                    player.craftPosition = 0;
                    craftScroll = 0;
                    crafting = "foods";
                    lowBar = "crafting";
                    gameState = "paused";
                }
            }
        }
    };

    this.operations = function()
    {
        this.countAdder();
        this.mouseSensing();
        this.typeBuilder();
    }
}