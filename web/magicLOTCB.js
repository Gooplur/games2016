/**
 * Created by skyeguy on 1/22/17.
 */

//Official Magic Class
function Magic(spellInfo, caster, instructions, unitSelf, damagesPlayer) //caster means either the player or an AI UNIT true: player false: AI UNIT //unitSelf is the object that the unit is so that this function can track its data. (this is for AI UNITS only) //instructions is for any extra input the spell might need.
{
    if (spellInfo != "none")
    {
        //VARIABLES FOR ALL SPELLS
        this.spellType = spellInfo.ID;
        this.cnx = spellInfo.CNX;
        if (player.getConcentration() < this.cnx)
        {
            this.cnx = player.getConcentration();
        }
        this.X = false;
        this.Y = false;
        this.dmx = map;
        this.rotation = 0;
        this.size = 1;
        this.sizeChanger = 0; //this changes size by the value of the variable.
        this.zIndex = 4;
        this.orders = instructions;
        this.ordenes = false; //use this for whatever but not in a function
        //VARIABLES for some or even single spells
        this.duration = 0;
        this.speed = 0; //this allows a fixed random speed to be selected if it is wanted.
        this.turn = 0; //this is a fixed rotation to add spin to or not...
        this.spin = 0; //this is a fixed spin rate that you add to rotation to make the spell spin.
        this.flashFrame = 0;
        this.flashFrameTime = new Date().getTime();
        this.contactDamageTime = new Date().getTime();
        this.spellTime = new Date().getTime();
        this.distanceCovered = 0;
        this.playerRotation = player.rotation;
        this.ratonX = X - mouseX + 1/2 * CCC.width;
        this.ratonY = Y - mouseY + 1/2 * CCC.height;
        if (typeof(unitSelf) != "undefined" && typeof(unitSelf) != "boolean")
        {
            this.unitRotation = unitSelf.rotation + Math.PI;
        }
        this.damagesPlayer = damagesPlayer;
        this.stage = 0; // this can be used by whichever spell but shall not be used in functions.
        this.setRotation = 0;
        this.ticCount = 0;
        this.repeated = false;
        this.size = 0;
        this.claim = "none"; //this is used as part of the claim and chase movement method.
        this.lockOn = "none"; //this is used as part of the missile method.
        this.missileTime = 0; //this is used as part of the missile method.
        this.missileLaunched = false; //this is used as part of the missile method.
        this.missileDirection = this.playerRotation;
        this.doOnce = true; //this is not to be used for a function.
        this.alert = false; //this is flicked on when the spell would otherwise have been destroyed to let the custom code know to get rid of the spell in its own way.
        this.doDelete = true; //this is a touch and die function variable that determines if it deletes or not for very special cases.
        this.durAlert = false;
        this.targeted = "none"; //this is a variable that is not for use in functions meant to serve as a standard targeting tool.
        this.ready = false; //ready is an alternative to alert just in case alert is already being used for something.
        //SPELL BUILDER (functions that can be given to each individual spell to define its characteristics)
        this.spellTimer = function(duration, alert)
        {
            this.duration = duration;
            this.durAlert = alert;
            if (new Date().getTime() - this.spellTime >= (this.duration * 1000) / timeSpeed)
            {
                if (this.durAlert == true)
                {
                    this.alert = true;
                }
                else if (this.durAlert == "ready")
                {
                    this.ready = true;
                }
                else if (this.durAlert == "unready")
                {
                    this.ready = false;
                }
                else
                {
                    for (var i = 0; i < magicList.length; i++)
                    {
                        if (magicList[i] === this)
                        {
                            magicList.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        };

        this.orientToCaster = function (radius, rotate)
        {
            if (caster)
            {
                this.Y = Y + Math.sin(player.rotation + rotate) * radius;
                this.X = X + Math.cos(player.rotation + rotate) * radius;
            }
            else
            {
                this.Y = unitSelf.Y + Math.sin(unitSelf.rotation + rotate) * radius;
                this.X = unitSelf.X + Math.cos(unitSelf.rotation + rotate) * radius;
            }
        };

        this.orientToInstructions = function (radius, rotate)
        {
            this.Y = this.orders.Y + Math.sin(this.orders.rotation + rotate) * radius;
            this.X = this.orders.X + Math.cos(this.orders.rotation + rotate) * radius;
        };

        this.flashAnimate = function(framerate, rotation, transparency, list, repeat, deleteAfter)
        {
            //use a list with coords for images: [{image:, imgX:, imgY:, portionW:, portionH:, adjX:, adjY:, width:, height:}, ... etc.]
            if (this.flashFrame >= list.length)
            {
                this.repeated = true;
                this.flashFrame = 0;
            }

            if (repeat != false || repeat == false && this.repeated == false)
            {
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
            }
            else
            {
                if (deleteAfter == true)
                {
                    for (var j=0; j < magicList.length; j++)
                    {
                        if (magicList[j] === this)
                        {
                            magicList.splice(j, 1);
                            break;
                        }
                    }
                }
                else if (deleteAfter == "alert")
                {
                    this.alert = true;
                }
            }
        };

        this.drawWithRotation = function (image, imgX, imgY, portionW, portionH, width, height, rotation, adjX, adjY)
        {
            XXX.save();
            XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
            XXX.rotate(rotation);
            XXX.drawImage(image, imgX, imgY, portionW, portionH, adjX, adjY, width, height);
            XXX.restore();
        };

        this.project = function(rotation, range, speed, selfDelete)
        {
            if (this.distanceCovered < range)
            {
                this.distanceCovered += speed * (TTD / 16.75) * timeSpeed;
                this.X += (Math.cos(rotation) * speed) * (TTD / 16.75) * timeSpeed;
                this.Y += (Math.sin(rotation) * speed) * (TTD / 16.75) * timeSpeed;
            }
            else if (selfDelete || selfDelete == "alert")
            {
                if (selfDelete == "alert")
                {
                    this.alert = true;
                }
                else
                {
                    for (var i = 0; i < magicList.length; i++)
                    {
                        if (magicList[i] === this)
                        {
                            magicList.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        };

        var checkLockOn;
        var closestLockOn = "none";
        var closestLockOnDist = "none";
        this.missile = function(targetingType, rotation, time, speed, alert)
        {
            if (targetingType == "nearby")
            {
                if (this.lockOn == "none")
                {
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (!ArtificialIntelligenceAccess[i].underground)
                        {
                            checkLockOn = Math.sqrt((this.X - ArtificialIntelligenceAccess[i].X)*(this.X - ArtificialIntelligenceAccess[i].X) + (this.Y - ArtificialIntelligenceAccess[i].Y)*(this.Y - ArtificialIntelligenceAccess[i].Y));
                            if (closestLockOnDist == "none")
                            {
                                closestLockOnDist = checkLockOn;
                                closestLockOn = ArtificialIntelligenceAccess[i];
                            }
                            else if (checkLockOn < closestLockOnDist)
                            {
                                closestLockOnDist = checkLockOn;
                                closestLockOn = ArtificialIntelligenceAccess[i];
                            }
                        }
                    }

                    //console.log(closestLockOn);
                    if (closestLockOn == "none")
                    {
                        for (var i = 0; i < magicList.length; i++)
                        {
                            if (this === magicList[i])
                            {
                                magicList.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else
                    {
                        this.lockOn = closestLockOn;
                    }
                }
            }
            if (this.missileLaunched == false)
            {
                this.missileLaunched = true;
                this.missileTime = new Date().getTime();
            }

            if (new Date().getTime() - this.missileTime < (time * 1000))
            {
                this.missileDirection = rotation;
                this.X += (Math.cos(rotation) * speed) * (TTD / 16.75) * timeSpeed;
                this.Y += (Math.sin(rotation) * speed) * (TTD / 16.75) * timeSpeed;
            }
            else
            {
                if (alert)
                {
                    this.alert = true;
                }
                else
                {
                    this.missileDirection = Math.atan2(this.lockOn.Y - this.Y, this.lockOn.X - this.X);
                    this.X += (Math.cos(Math.atan2(this.lockOn.Y - this.Y, this.lockOn.X - this.X)) * speed) * (TTD / 16.75) * timeSpeed;
                    this.Y += (Math.sin(Math.atan2(this.lockOn.Y - this.Y, this.lockOn.X - this.X)) * speed) * (TTD / 16.75) * timeSpeed;
                }
            }
        };

        this.ticCounter = function(rate)
        {
            this.ticCount += rate * 0.001 * (TTD / 16.75);
            return this.ticCount;
        };

        var checkClosestClaimDist;
        var closestClaimDist = "none";
        var closestClaim = "none";
        var chasingLightsLockOn = false;

        //CLAIM AND CHASE - pick a target and follow them.
        this.claimAndChase = function(range, speed, extraRot)
        {
            if (this.claim == "none")
            {
                var otherClaims = [];
                for (var i = 0; i < magicList.length; i++)
                {
                    if (magicList[i].claim != "none" && magicList[i].spellType == this.spellType)
                    {
                        otherClaims.push(magicList[i].claim);
                    }
                }

                for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                {
                    var claimHitz = 0;
                    for (var j = 0; j < otherClaims.length; j++)
                    {
                        if (ArtificialIntelligenceAccess[i] !== otherClaims[j] && !ArtificialIntelligenceAccess[i].underground)
                        {
                            claimHitz += 1;
                        }
                    }
                    if (claimHitz >= otherClaims.length && !ArtificialIntelligenceAccess[i].underground)
                    {
                        checkClosestClaimDist = Math.sqrt((this.X - ArtificialIntelligenceAccess[i].X)*(this.X - ArtificialIntelligenceAccess[i].X) + (this.Y - ArtificialIntelligenceAccess[i].Y)*(this.Y - ArtificialIntelligenceAccess[i].Y));
                        if (range == true || checkClosestClaimDist <= range)
                        {
                            if (closestClaimDist == "none")
                            {
                                closestClaimDist = checkClosestClaimDist;
                                closestClaim = ArtificialIntelligenceAccess[i];
                            }
                            else if (checkClosestClaimDist < closestClaimDist)
                            {
                                closestClaimDist = checkClosestClaimDist;
                                closestClaim = ArtificialIntelligenceAccess[i];
                            }
                        }
                    }
                }

                console.log(closestClaim);
                if (closestClaim == "none")
                {
                    for (var i = 0; i < magicList.length; i++)
                    {
                        if (this === magicList[i])
                        {
                            magicList.splice(i, 1);
                            break;
                        }
                    }
                }
                else
                {
                    this.claim = closestClaim;
                }
            }


            if (this.spellType == "chasingLights")
            {
                if (chasingLightsLockOn == false)
                {
                    if (gameLoopNumber % 3)
                    {
                        checkClosestClaimDist = Math.sqrt((this.X - this.claim.X)*(this.X - this.claim.X) + (this.Y - this.claim.Y)*(this.Y - this.claim.Y));
                    }
                    this.rotation = Math.atan2(this.claim.Y - this.Y, this.claim.X - this.X) + extraRot;
                    this.X += Math.cos(this.rotation + extraRot) * speed * timeSpeed;
                    this.Y += Math.sin(this.rotation + extraRot) * speed * timeSpeed;

                    if (checkClosestClaimDist <= this.claim.sizeRadius)
                    {
                        chasingLightsLockOn = true;
                    }
                    this.size = 4;
                }
                else
                {
                    this.size = this.claim.sizeRadius * 2.2;
                    this.X = this.claim.X;
                    this.Y = this.claim.Y;
                }
            }
            else
            {
                this.rotation = Math.atan2(this.claim.Y - this.Y, this.claim.X - this.X) + extraRot;
                this.X += Math.cos(this.rotation + extraRot) * speed * timeSpeed;
                this.Y += Math.sin(this.rotation + extraRot) * speed * timeSpeed;
            }
        };

        this.shieldFactoring = function(damage)
        {
            if (player.mageShield > 0)
            {
                player.mageShield -= damage;
            }
            else
            {
                player.health += player.mageShield;
                player.mageShield = 0;

                player.health -= damage;
            }
        };

        this.damageThenGoAway = function(radius, whatDoIDo, damage, negate, affectPlayer, extra)
        {
            if (affectPlayer == true)
            {
                var distanceToPlayer = Math.sqrt((X - this.X)*(X - this.X) + (Y - this.Y)*(Y - this.Y));

                if (distanceToPlayer <= radius + player.mySize && player.dmx == this.dmx)
                {
                    if (whatDoIDo == "drainOrb")
                    {
                        player.health += damage;
                    }
                    else if (whatDoIDo == "fire")
                    {
                        this.shieldFactoring(Math.max(0, (damage - (player.heatResistance))));
                        if (player.mageShield <= 0)
                        {
                            player.thirst -= Math.max(0, damage - player.heatResistance);
                            player.burningTime = new Date().getTime();
                        }
                    }
                    else if (whatDoIDo == "iceSpike")
                    {
                        player.health -= Math.max(0, 4 + (4/50 * this.cnx) - Math.max(0, player.armourTotal - Math.max(0, 100 - 19 * player.magicalResistanceTotal)));
                    }
                    else if (whatDoIDo == "soulOrb")
                    {
                        player.skillPoints += 1;
                        player.extraSkillPoints += 1;
                    }
                    else if (whatDoIDo == "bonk")
                    {
                        this.shieldFactoring(Math.max(0, damage - Math.max(0, player.armourTotal - negate)));
                        if (player.mageShield <= 0)
                        {
                            player.stunnedIII = true;
                            player.stunnedTime = 2;
                        }
                    }
                    else if (whatDoIDo == "quarterAcid")
                    {
                        this.shieldFactoring(Math.max(0, damage - Math.max(0, player.armourTotal - negate)));
                        if (player.mageShield <= 0)
                        {
                            if (damage + negate > player.armourTotal)
                            {
                                player.quarterAcid = true;
                                player.acidTime = new Date().getTime() + 5000;
                            }
                        }
                    }
                    else if (whatDoIDo == "acidI")
                    {
                        this.shieldFactoring(Math.max(0, damage - Math.max(0, player.armourTotal - negate)));
                        if (player.mageShield <= 0)
                        {
                            if (damage + negate > player.armourTotal)
                            {
                                player.acidI = true;
                                player.acidTime = new Date().getTime() + 5000;
                            }
                        }
                    }
                    else if (whatDoIDo == "electricity")
                    {
                        this.shieldFactoring(Math.max(0, damage - ((player.totalShockResist * 3) + (19 * player.magicalResistanceTotal))));
                        if (player.mageShield <= 0)
                        {
                            if (Math.max(0, damage -  (19 * player.magicalResistanceTotal)) > 0)
                            {
                                player.shockedTime = new Date().getTime();
                                player.shockedTime2 = new Date().getTime();
                            }
                        }
                    }

                    if (extra != "alert")
                    {
                        for (var j = 0; j < magicList.length; j++)
                        {
                            if (magicList[j] === this)
                            {
                                magicList.splice(j, 1);
                                break;
                            }
                        }
                    }
                    else
                    {
                        this.alert = true;
                    }
                }
            }
            else
            {
                for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                {
                    var distanceToEnemy = Math.sqrt((ArtificialIntelligenceAccess[i].X - this.X)*(ArtificialIntelligenceAccess[i].X - this.X) + (ArtificialIntelligenceAccess[i].Y - this.Y)*(ArtificialIntelligenceAccess[i].Y - this.Y));

                    if (this.dmx == ArtificialIntelligenceAccess[i].dmx)
                    {
                        if (distanceToEnemy <= radius + ArtificialIntelligenceAccess[i].sizeRadius && !ArtificialIntelligenceAccess[i].underground && !ArtificialIntelligenceAccess[i].flying || distanceToEnemy <= radius + ArtificialIntelligenceAccess[i].sizeRadius && !ArtificialIntelligenceAccess[i].underground && ArtificialIntelligenceAccess[i].flying && whatDoIDo != "earthDamage" && whatDoIDo != "magicalEarthDamage" || distanceToEnemy <= radius + ArtificialIntelligenceAccess[i].sizeRadius && whatDoIDo == "earthDamage" && ArtificialIntelligenceAccess[i].underground || distanceToEnemy <= radius + ArtificialIntelligenceAccess[i].sizeRadius && whatDoIDo == "magicalEarthDamage" && ArtificialIntelligenceAccess[i].underground)
                        {
                            if (whatDoIDo == "soulOrb")
                            {
                                ArtificialIntelligenceAccess[i].health = Math.min(ArtificialIntelligenceAccess[i].healthMAX, ArtificialIntelligenceAccess[i].health + 55)
                            }
                            else if (whatDoIDo == "fire")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].heatResistance);
                                ArtificialIntelligenceAccess[i].burningTime = new Date().getTime();
                            }
                            else if (whatDoIDo == "blinding")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance);
                                ArtificialIntelligenceAccess[i].blindedTime = new Date().getTime() + (1000 * (this.cnx / 5));
                            }
                            else if (whatDoIDo == "blindingGlow") //this is a type of physical damaging
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - negate));
                                ArtificialIntelligenceAccess[i].blindedTime = new Date().getTime() - 1500;
                                ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                var claimTaken = false;
                                for (var ll = 0; ll < magicList.length; ll++)
                                {
                                    if (magicList[ll].spellType == "chasingLights" && magicList[ll].claim === ArtificialIntelligenceAccess[i])
                                    {
                                        claimTaken = true;
                                        break;
                                    }
                                }
                                if (!claimTaken)
                                {
                                    magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, ["glowDust", this.X, this.Y]));
                                }
                            }
                            else if (whatDoIDo == "physicalDamage")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - negate));
                                ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                            }
                            else if (whatDoIDo == "earthDamage" && !ArtificialIntelligenceAccess[i].flying)
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - negate));
                                ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                            }
                            else if (whatDoIDo == "magicalDamage")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].magicalResistance));
                                ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                            }
                            else if (whatDoIDo == "magicalEarthDamage" && !ArtificialIntelligenceAccess[i].flying)
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].magicalResistance));
                                ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                            }
                            else if (whatDoIDo == "iceSpike")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, 4 + (4/50 * this.cnx) - Math.max(0, ArtificialIntelligenceAccess[i].armour - Math.max(0, 100 - 19 * ArtificialIntelligenceAccess[i].magicalResistance)));
                                ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                            }
                            else if (whatDoIDo == "iceBlast")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, 7 + (2/50 * this.cnx) - Math.max(0, ArtificialIntelligenceAccess[i].armour - Math.max(0, 100 - 19 * ArtificialIntelligenceAccess[i].magicalResistance)));
                                ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                            }
                            else if (whatDoIDo == "quarterAcid")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - negate));
                                if (damage + negate > ArtificialIntelligenceAccess[i].armour)
                                {
                                    ArtificialIntelligenceAccess[i].quarterAcid = true;
                                    ArtificialIntelligenceAccess[i].acidTime = new Date().getTime() + 5000;
                                    ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }
                            }
                            else if (whatDoIDo == "acidI")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - negate));
                                if (damage + negate > ArtificialIntelligenceAccess[i].armour)
                                {
                                    ArtificialIntelligenceAccess[i].acidI = true;
                                    ArtificialIntelligenceAccess[i].acidTime = new Date().getTime() + 5000;
                                    ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }
                            }
                            else if (whatDoIDo == "acidII")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - negate));
                                if (damage + negate > ArtificialIntelligenceAccess[i].armour)
                                {
                                    ArtificialIntelligenceAccess[i].acidII = true;
                                    ArtificialIntelligenceAccess[i].acidTime = new Date().getTime() + 5000;
                                    ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }
                            }
                            else if (whatDoIDo == "acidIII")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - negate));
                                if (damage + negate > ArtificialIntelligenceAccess[i].armour)
                                {
                                    ArtificialIntelligenceAccess[i].acidIII = true;
                                    ArtificialIntelligenceAccess[i].acidTime = new Date().getTime() + 5000;
                                    ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }
                            }
                            else if (whatDoIDo == "acidIV")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - negate));
                                if (damage + negate > ArtificialIntelligenceAccess[i].armour)
                                {
                                    ArtificialIntelligenceAccess[i].acidIV = true;
                                    ArtificialIntelligenceAccess[i].acidTime = new Date().getTime() + 5000;
                                    ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }
                            }
                            else if (whatDoIDo == "acidV")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - negate));
                                if (damage + negate > ArtificialIntelligenceAccess[i].armour)
                                {
                                    ArtificialIntelligenceAccess[i].acidV = true;
                                    if (extra == "pimber")
                                    {
                                        ArtificialIntelligenceAccess[i].acidTime = new Date().getTime() + 10000;
                                        ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime() + 8500;
                                    }
                                    else
                                    {
                                        ArtificialIntelligenceAccess[i].acidTime = new Date().getTime() + 5000;
                                        ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                    }
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }
                            }
                            else if (whatDoIDo == "alter")
                            {
                                ArtificialIntelligenceAccess[i].buffoutTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].buffoutTimer = negate;
                                ArtificialIntelligenceAccess[i].initBuffout = damage;
                                ArtificialIntelligenceAccess[i].subBuffoutToggle = true;

                                if (damage < 1)
                                {
                                    console.log(ArtificialIntelligenceAccess[i].buffout);
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }

                                if (extra == "iril")
                                {
                                    ArtificialIntelligenceAccess[i].stunIII = true;
                                    ArtificialIntelligenceAccess[i].stunTimer = 5;
                                    ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }
                            }
                            else if (whatDoIDo == "charm")
                            {
                                if (ArtificialIntelligenceAccess[i].magicalResistance < 3 + 1/10 * this.cnx && ArtificialIntelligenceAccess[i].healthMAX <= 25 + 2 * this.cnx && !ArtificialIntelligenceAccess[i].marked)
                                {
                                    ArtificialIntelligenceAccess[i].charmedTeam = "player";
                                    ArtificialIntelligenceAccess[i].charmedTime = new Date().getTime() + 45000;
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }
                            }
                            else if (whatDoIDo == "mark")
                            {
                                if (ArtificialIntelligenceAccess[i].magicalResistance < 3 + 1/10 * this.cnx && ArtificialIntelligenceAccess[i].healthMAX <= 25 + 2 * this.cnx)
                                {
                                    ArtificialIntelligenceAccess[i].charmedTeam = (Math.random() * 1.7888888889);
                                    ArtificialIntelligenceAccess[i].charmedTime = new Date().getTime() + 25000;
                                    if (extra == "shome")
                                    {
                                        console.log("soDuh!");
                                        ArtificialIntelligenceAccess[i].marked = "shome";
                                    }
                                    else
                                    {
                                        ArtificialIntelligenceAccess[i].marked = true;
                                    }
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();

                                }
                            }
                            else if (whatDoIDo == "electricity")
                            {
                                this.doDelete = false;
                                if (instructions != "aftershock" && instructions != "aftershocked")
                                {
                                    this.doDelete = true;
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, damage -  (19 * ArtificialIntelligenceAccess[i].magicalResistance));
                                    if (Math.max(0, damage -  (19 * ArtificialIntelligenceAccess[i].magicalResistance)) > 0)
                                    {
                                        ArtificialIntelligenceAccess[i].shockedTime = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].shockedTime2 = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                    }

                                    if (this.cnx >= 65)
                                    {
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                    }
                                    else if (this.cnx >= 50)
                                    {
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                    }
                                    else if (this.cnx >= 35)
                                    {
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                        magicList.push(new Magic({ID: "electricBolt", CNX: this.cnx}, true, "aftershock", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                    }
                                }
                                else if (unitSelf[3] !== ArtificialIntelligenceAccess[i] && this.instructions != "aftershocked")
                                {
                                    this.doDelete = true;
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, damage -  (19 * ArtificialIntelligenceAccess[i].magicalResistance));
                                    if (Math.max(0, damage -  (19 * ArtificialIntelligenceAccess[i].magicalResistance)) > 0)
                                    {
                                        ArtificialIntelligenceAccess[i].shockedTime = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].shockedTime2 = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                    }

                                    //magicList.push(new Magic({ID: "electricBolt"}, true, "aftershocked", [Math.random() * (2 * Math.PI), this.X, this.Y, ArtificialIntelligenceAccess[i]]));
                                }
                                else if (instructions == "aftershocked" && unitSelf[3] !== ArtificialIntelligenceAccess[i])
                                {
                                    this.doDelete = true;
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, damage -  (19 * ArtificialIntelligenceAccess[i].magicalResistance));
                                    if (Math.max(0, damage -  (19 * ArtificialIntelligenceAccess[i].magicalResistance)) > 0)
                                    {
                                        ArtificialIntelligenceAccess[i].shockedTime = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].shockedTime2 = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                    }
                                }
                            }
                            else if (whatDoIDo == "draining")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance);
                                ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                //todo add that it turns lifeforce successfully stolen into magical life orbs that shoot off to the player and heal him/her.
                                var counterOrbCount = 0;
                                if (ArtificialIntelligenceAccess[i].health < 0)
                                {
                                    counterOrbCount = Math.round(- ArtificialIntelligenceAccess[i].health);
                                }
                                var orbsAllowed = Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance - counterOrbCount);
                                for (var j = 0; j < orbsAllowed; j++)
                                {
                                    magicList.push(new Magic({ID: "drainOrb", CNX: this.cnx}, false, 0, ArtificialIntelligenceAccess[i]));
                                }
                                if (player.extraDraining)
                                {
                                    for (var j = 0; j < 5; j++)
                                    {
                                        magicList.push(new Magic({ID: "drainOrb", CNX: this.cnx}, false, 0, ArtificialIntelligenceAccess[i]));
                                    }
                                }
                            }

                            if (caster == true && ArtificialIntelligenceAccess[i].health <= 0)
                            {
                                ArtificialIntelligenceAccess[i].killNotByPlayer = false;
                            }

                            if (extra != "alert")
                            {
                                if (this.doDelete)
                                {
                                    for (var j=0; j < magicList.length; j++)
                                    {
                                        if (magicList[j] === this)
                                        {
                                            magicList.splice(j, 1);
                                            break;
                                        }
                                    }
                                }
                            }
                            else
                            {
                                this.alert = true;
                            }
                        }
                    }
                }
            }
        };

        this.contactDamage = function(dangerous, radius, damage, frequency, kind, effect)
        {
            //kind is so that certain restistances can apply in avoiding damage like heatResistance for fire!
            if (dangerous == true) //if dangerous is true it hurts all, even the caster.
            {
                if (new Date().getTime() - this.contactDamageTime >= frequency)
                {

                    this.contactDamageTime = new Date().getTime();

                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        var distanceToEnemy = Math.sqrt((ArtificialIntelligenceAccess[i].X - this.X) * (ArtificialIntelligenceAccess[i].X - this.X) + (ArtificialIntelligenceAccess[i].Y - this.Y) * (ArtificialIntelligenceAccess[i].Y - this.Y));

                        if (distanceToEnemy <= radius + ArtificialIntelligenceAccess[i].sizeRadius && !ArtificialIntelligenceAccess[i].underground && this.dmx == ArtificialIntelligenceAccess[i].dmx)
                        {
                            if (kind == "fire")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].heatResistance);
                                ArtificialIntelligenceAccess[i].burningTime = new Date().getTime();
                            }
                            else if (kind == "electricity")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - (19 * ArtificialIntelligenceAccess[i].magicalResistance));
                                if (Math.max(0, damage - (19 * ArtificialIntelligenceAccess[i].magicalResistance)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].shockedTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].shockedTime2 = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }
                            }
                            else if (kind == "frostwind")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance);
                                ArtificialIntelligenceAccess[i].frozenTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].X -= ((6 * this.cnx) / 50) * Math.cos(this.playerRotation - 1 / 2 * Math.PI);
                                ArtificialIntelligenceAccess[i].Y -= ((6 * this.cnx) / 50) * Math.sin(this.playerRotation - 1 / 2 * Math.PI);
                            }
                            else if (kind == "force")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance);
                                ArtificialIntelligenceAccess[i].X -= (2 + 4 * ArtificialIntelligenceAccess[i].speed) * Math.cos(Math.atan(X - ArtificialIntelligenceAccess[i].X, Y - ArtificialIntelligenceAccess[i].Y) - 1 / 2 * Math.PI);
                                ArtificialIntelligenceAccess[i].Y -= (2 + 4 * ArtificialIntelligenceAccess[i].speed) * Math.sin(Math.atan(X - ArtificialIntelligenceAccess[i].X, Y - ArtificialIntelligenceAccess[i].Y) - 1 / 2 * Math.PI);
                            }
                            else if (kind == "magic")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance);
                            }
                            else if (kind == "blinding")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance);
                                ArtificialIntelligenceAccess[i].blindedTime = new Date().getTime() + (1000 * (this.cnx / 5));
                            }
                            if (kind != "blinding")
                            {
                                ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                            }
                        }

                        if (i == 0)
                        {
                            var distanceToPlayer = Math.sqrt((X - this.X) * (X - this.X) + (Y - this.Y) * (Y - this.Y));

                            if (distanceToPlayer <= radius + player.mySize && this.dmx == player.dmx)
                            {

                                if (kind == "fire")
                                {
                                    this.shieldFactoring(Math.max(0, damage - player.heatResistance));
                                    player.thirst -= Math.max(0, damage - player.heatResistance);
                                    player.burningTime = new Date().getTime();
                                }
                                else if (kind == "electricity")
                                {
                                    this.shieldFactoring(Math.max(0, damage - ((player.totalShockResist * 3) + (19 * player.magicalResistanceTotal))));
                                    if (Math.max(0, damage - (19 * player.magicalResistanceTotal)) > 0)
                                    {
                                        player.shockedTime = new Date().getTime();
                                        player.shockedTime2 = new Date().getTime();
                                    }
                                }
                                else if (kind == "frostwind")
                                {
                                    this.shieldFactoring(Math.max(0, damage - player.warmthProtection));
                                    player.warmth -= Math.max(0, 5 - player.warmthProtection);
                                    //todo figure out how to add wind pushback based on ai rotation for the player and put it here.
                                }
                                else if (kind == "magic")
                                {
                                    this.shieldFactoring(Math.max(0, damage - player.magicalResistanceTotal));
                                }
                                else if (kind == "blinding")
                                {
                                    player.blinded = true;
                                    player.blindedStoreTime = new Date().getTime();
                                    player.blindedTime = 2;
                                }
                                else if (kind == "ChokingII")
                                {
                                    player.asfixiationTime = 0.9;
                                    player.asfixiationII = true;
                                }
                                else if (kind == "ChokingI")
                                {
                                    player.asfixiationTime = 0.9;
                                    player.asfixiationI = true;
                                }
                                else if (kind == "blindingChokeII")
                                {
                                    player.blinded = true;
                                    player.blindedStoreTime = new Date().getTime();
                                    player.blindedTime = 2;
                                    player.asfixiationTime = 0.9;
                                    player.asfixiationII = true;
                                }
                                else if (kind == "blindingChokeI")
                                {
                                    player.blinded = true;
                                    player.blindedStoreTime = new Date().getTime();
                                    player.blindedTime = 2;
                                    player.asfixiationTime = 0.9;
                                    player.asfixiationI = true;
                                }

                                this.contactDamageTime = new Date().getTime();

                            }
                        }
                    }
                }
            }
            else
            {
                if (caster)
                {
                    if (new Date().getTime() - this.contactDamageTime >= frequency)
                    {
                        this.contactDamageTime = new Date().getTime();
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            var distanceToEnemy = Math.sqrt((ArtificialIntelligenceAccess[i].X - this.X) * (ArtificialIntelligenceAccess[i].X - this.X) + (ArtificialIntelligenceAccess[i].Y - this.Y) * (ArtificialIntelligenceAccess[i].Y - this.Y));

                            if (distanceToEnemy <= radius + ArtificialIntelligenceAccess[i].sizeRadius && !ArtificialIntelligenceAccess[i].underground && this.dmx == ArtificialIntelligenceAccess[i].dmx)
                            {
                                if (kind == "fire")
                                {
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].heatResistance);
                                    ArtificialIntelligenceAccess[i].burningTime = new Date().getTime();
                                }
                                else if (kind == "electricity")
                                {
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - (19 * ArtificialIntelligenceAccess[i].magicalResistance));
                                    if (Math.max(0, damage - (19 * ArtificialIntelligenceAccess[i].magicalResistance)) > 0)
                                    {
                                        ArtificialIntelligenceAccess[i].shockedTime = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].shockedTime2 = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                        ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                    }
                                }
                                else if (kind == "frostwind")
                                {
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance);
                                    ArtificialIntelligenceAccess[i].frozenTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].X -= ((6 * this.cnx) / 50) * Math.cos(this.playerRotation - 1 / 2 * Math.PI);
                                    ArtificialIntelligenceAccess[i].Y -= ((6 * this.cnx) / 50) * Math.sin(this.playerRotation - 1 / 2 * Math.PI);
                                }
                                else if (kind == "force")
                                {
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance);
                                    ArtificialIntelligenceAccess[i].X -= (2 + 4 * ArtificialIntelligenceAccess[i].speed) * Math.cos(Math.atan(X - ArtificialIntelligenceAccess[i].X, Y - ArtificialIntelligenceAccess[i].Y) - 1 / 2 * Math.PI);
                                    ArtificialIntelligenceAccess[i].Y -= (2 + 4 * ArtificialIntelligenceAccess[i].speed) * Math.sin(Math.atan(X - ArtificialIntelligenceAccess[i].X, Y - ArtificialIntelligenceAccess[i].Y) - 1 / 2 * Math.PI);
                                }
                                else if (kind == "magic")
                                {
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance);
                                }
                                else if (kind == "blinding" || kind == "blindingChokeII" || kind == "blindingChokeI")
                                {
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, damage - ArtificialIntelligenceAccess[i].magicalResistance);
                                    ArtificialIntelligenceAccess[i].blindedTime = new Date().getTime() + (1000 * (this.cnx / 5));;
                                }

                                if (kind != "blinding" || kind != "blindingChokeII" || kind != "blindingChokeI")
                                {
                                    ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                                }

                                if (caster == true && ArtificialIntelligenceAccess[i].health <= 0)
                                {
                                    ArtificialIntelligenceAccess[i].killNotByPlayer = false;
                                }
                            }
                        }
                    }
                }
                else
                {
                    var distanceToPlayer = Math.sqrt((X - this.X)*(X - this.X) + (Y - this.Y)*(Y - this.Y));

                    if (distanceToPlayer <= radius + player.mySize && this.dmx == player.dmx)
                    {
                        if (new Date().getTime() - this.contactDamageTime >= frequency)
                        {
                            this.contactDamageTime = new Date().getTime();

                            if (kind == "fire")
                            {
                                player.health -= Math.max(0, damage - player.heatResistance);
                                player.thirst -= Math.max(0, damage - player.heatResistance);
                                player.burningTime = new Date().getTime();
                            }
                            else if (kind == "electricity")
                            {
                                player.health -= Math.max(0, damage - ((player.totalShockResist * 3) + (19 * player.magicalResistanceTotal)));
                                if (Math.max(0, damage - (19 * player.magicalResistanceTotal)) > 0)
                                {
                                    player.shockedTime = new Date().getTime();
                                    player.shockedTime2 = new Date().getTime();
                                }
                            }
                            else if (kind == "frostwind")
                            {
                                player.health -= Math.max(0, damage - player.warmthProtection);
                                player.warmth -= Math.max(0, 5 - player.warmthProtection);
                                //todo figure out how to add wind pushback based on ai rotation for the player and put it here.
                            }
                            else if (kind == "magic")
                            {
                                player.health -= Math.max(0, damage - player.magicalResistanceTotal);
                            }
                            else if (kind == "blinding")
                            {
                                player.blinded = true;
                                player.blindedStoreTime = new Date().getTime();
                                player.blindedTime = 2;
                            }
                            else if (kind == "ChokingII")
                            {
                                if (player.airFilter != true)
                                {
                                    player.asfixiationTime = 0.9;
                                    player.asfixiationII = true;
                                }
                            }
                            else if (kind == "ChokingI")
                            {
                                if (player.airFilter != true)
                                {
                                    player.asfixiationTime = 0.9;
                                    player.asfixiationI = true;
                                }
                            }
                            else if (kind == "blindingChokeII")
                            {
                                if (player.airFilter != true)
                                {
                                    player.blinded = true;
                                    player.blindedStoreTime = new Date().getTime();
                                    player.blindedTime = 2;
                                    player.asfixiationTime = 0.9;
                                    player.asfixiationII = true;
                                }
                            }
                            else if (kind == "blindingChokeI")
                            {
                                if (player.airFilter != true)
                                {
                                    player.blinded = true;
                                    player.blindedStoreTime = new Date().getTime();
                                    player.blindedTime = 2;
                                    player.asfixiationTime = 0.9;
                                    player.asfixiationI = true;
                                }
                            }
                        }
                    }
                }
            }
        };

        //SPELL OUTLINES (this section is the outline for what the spells are)
        //CHASING LIGHTS
        if (this.spellType == "chasingLights")
        {
            if (this.orders[0] == "glowDust")
            {
                this.X = this.orders[1];
                this.Y = this.orders[2];
            }
            else
            {
                this.orientToCaster(0, 1 / 2 * Math.PI);
            }
        }
        //FART
        if (this.spellType == "fart")
        {
            this.orientToCaster(10, - 1 / 2 * Math.PI);
        }
        //DUSTS
        if (this.spellType == "glowDust" || this.spellType == "vrezinDust" || this.spellType == "irilDust" || this.spellType == "pimberDust" || this.spellType == "shomeDust")
        {
            if (caster)
            {
                this.orientToCaster(42, 2.8 / 5 * Math.PI);
                this.rotation = this.playerRotation + 1/2 * Math.PI;
            }
            else
            {
                this.orientToCaster(42, 2.8 / 5 * Math.PI);
            }
        }
        //SHADOW FOG
        if (this.spellType == "shadowFog")
        {
            this.size = 1;
            this.orientToCaster(0, 0);
        }
        //SHADOWPORT
        if (this.spellType == "shadowport")
        {
            if (instructions == 1)
            {
                this.orientToCaster(0, 1 / 2 * Math.PI);
            }
            else if (instructions == 2)
            {
                this.X = this.ratonX;
                this.Y = this.ratonY;
            }
        }
        //GOLEM ROCK
        if (this.spellType == "golemRock")
        {
            this.spin = (Math.random() * 2) - 1;
            this.speed = 5 + (3 * Math.random());
            this.rotation = unitSelf.rotation;

            if (unitSelf.alpha == "baby")
            {
                this.orientToCaster(9, Math.PI);
            }
            else if (unitSelf.alpha == false)
            {
                this.orientToCaster(27 * 0.65, Math.PI);
            }
            else if (unitSelf.alpha == true)
            {
                this.orientToCaster(27 * 1.25, Math.PI);
            }
            else if (unitSelf.alpha == "giant")
            {
                this.orientToCaster(27 * 2.2, Math.PI);
            }
        }
        //Mud Fly Spit
        if (this.spellType == "flySpit")
        {
            this.speed = 9 + (2 * Math.random());

            if (unitSelf.alpha == "baby")
            {
                this.orientToCaster(9, Math.PI);
            }
            else if (unitSelf.alpha == false)
            {
                this.orientToCaster(9, Math.PI);
            }
            else if (unitSelf.alpha == true)
            {
                this.orientToCaster(9, Math.PI);
            }
            else if (unitSelf.alpha == "giant")
            {
                this.orientToCaster(9, Math.PI);
            }
        }
        //EMBERS
        if (this.spellType == "embers")
        {
            this.orientToCaster(17, 1 / 2 * Math.PI);
            this.drawWithRotation(polypol, 1688, 212, 29, 26, 29, 26, player.rotation, -1 / 2 * 29, -1 / 2 * 26);
        }
        //SMOKE
        if (this.spellType == "smoke")
        {
            this.orientToInstructions(0, Math.random() * 2*Math.PI);
            this.rotation = Math.random() * 2*Math.PI;
            this.size = 0.2;
        }
        //FLAMING MISSILES
        if (this.spellType == "flamingMissiles")
        {
            var directedRotation = "none";
            if (caster)
            {
                this.orientToCaster(20, 8 / 16 * Math.PI); //TODO fix this up to be accurate for the player
            }
            else
            {
                if (unitSelf.type == "AncientBeing")
                {
                    if (this.orders == "left")
                    {
                        this.orientToCaster(34, 11 / 16 * Math.PI);
                    }
                    else if (this.orders == "right")
                    {
                        this.orientToCaster(34, -5 / 16 * Math.PI);
                    }
                }
                else
                {
                    this.orientToCaster(20, 8 / 16 * Math.PI); //TODO fix this up to be accurate for other units
                }
            }
        }
        //SURGE
        if (this.spellType == "surge")
        {
            this.orientToCaster(0, 1 / 2 * Math.PI);
        }
        //MINOR VORTEX
        if (this.spellType == "minorVortex")
        {
            this.orientToCaster(0, 1 / 2 * Math.PI);
        }
        //FIREBALL I
        if (this.spellType == "fireballI")
        {
            this.orientToCaster(23, 1 / 2 * Math.PI);
            this.drawWithRotation(polypol, 1691, 184, 24, 23, 29, 26, player.rotation, -1 / 2 * 24, -1 / 2 * 23);
        }
        //ELECTRIC BOLT
        if (this.spellType == "electricBolt")
        {
            if (caster)
            {
                if (instructions != "aftershock" && instructions != "aftershocked")
                {
                    this.orientToCaster(29, 3.2 / 5 * Math.PI);
                    this.drawWithRotation(mofu, 454, 46, 19, 32, 29, 26, player.rotation, -1 / 2 * 19, -1 / 2 * 32);
                }
                else
                {
                    this.X = unitSelf[1];
                    this.Y = unitSelf[2];
                }
            }
            else
            {
                if (instructions != "aftershock" && instructions != "aftershocked")
                {
                    this.orientToCaster(29, -0.7 / 5 * Math.PI); //0.7
                    this.drawWithRotation(mofu, 454, 46, 19, 32, 29, 26, this.unitRotation, -1 / 2 * 19, -1 / 2 * 32);
                }
            }
        }
        //ENTANGLEMENT
        if (this.spellType == "entanglement")
        {
            this.stage = 0;
            this.zIndex = 1;
            this.size = 1;

            if (caster)
            {
                this.X = X - mouseX + 1/2 * CCC.width;
                this.Y = Y - mouseY + 1/2 * CCC.height;
            }
            else
            {
                this.orientToCaster(29, 3.2 / 5 * Math.PI);
                this.drawWithRotation(mofu, 454, 46, 19, 32, 29, 26, player.rotation, -1 / 2 * 19, -1 / 2 * 32);
            }
        }
        //WHIRLWIND
        if (this.spellType == "whirlwind")
        {
            this.stage = 0;
            this.zIndex = 5;
            this.size = 1;
            this.turn = 1/5 * Math.PI;

            if (caster)
            {
                this.X = X;
                this.Y = Y;
            }
            else
            {
                this.orientToCaster(29, 3.2 / 5 * Math.PI);
                this.drawWithRotation(mofu, 454, 46, 19, 32, 29, 26, player.rotation, -1 / 2 * 19, -1 / 2 * 32);
            }
        }
        //SOUL ORB
        if (this.spellType == "soulOrb")
        {
            if (caster)
            {
                this.orientToCaster(0, 0);
            }
            else
            {
                if (typeof(this.orders) != "boolean" && typeof(this.orders) != "string" && typeof(this.orders) != "undefined")
                {
                    this.orientToInstructions(0, 0);
                }
            }
        }
        //Ancient Rift
        if (this.spellType == "ancientRift")
        {
            this.spin = -0.0004;
            if (caster)
            {
                this.X = X + (400 - Math.random() * 800);
                this.Y = Y + (400 - Math.random() * 800);
            }
            else
            {
                this.X = unitSelf.X + (400 - Math.random() * 800);
                this.Y = unitSelf.Y + (400 - Math.random() * 800);
            }
        }
        //ICEBERG
        if (this.spellType == "iceberg")
        {
            this.explosion = false;
            this.shardTime = 0;
            if (instructions == "iceShard")
            {
                this.size = 0.35;
            }
            else
            {
                this.size = 0.1;
            }
            this.keepSizeTime = new Date().getTime();
            if (caster)
            {
                if (instructions != "iceShard")
                {
                    this.rotation = player.rotation + 1/2 * Math.PI;
                    this.orientToCaster(25, 2.5 / 5 * Math.PI);
                    this.drawWithRotation(zapa, 392, 345, 22, 21, -11, -10.5, player.rotation, -1 / 2 * 22, -1 / 2 * 21);
                }
                else
                {
                    this.X = unitSelf[1];
                    this.Y = unitSelf[2];
                }
            }
            else
            {
                this.rotation = unitSelf.rotation;
                this.orientToCaster(32, 2.5 / 5 * Math.PI);
                this.drawWithRotation(zapa, 392, 345, 22, 21, -11, -10.5, unitSelf.rotation, -1 / 2 * 22, -1 / 2 * 21);
            }
        }
        //Draining I
        if (this.spellType == "drainingI")
        {
            this.orientToCaster(20, 0.64 / 2 * Math.PI);
            this.drawWithRotation(polypol, 1767, 266, 16, 25, 29, 26, player.rotation, -1 / 2 * 16, -1 / 2 * 25);
        }
        //DrainOrb
        if (this.spellType == "drainOrb")
        {
            this.orientToCaster(Math.random() * 24, (Math.random() * 2) / 2 * Math.PI);
        }
        //LifeTap
        if (this.spellType == "lifeTap")
        {
            this.orientToCaster(0, 1 / 2 * Math.PI);
        }
        //REPEL
        if (this.spellType == "repel")
        {
            this.orientToCaster(0, 1 / 2 * Math.PI);
        }
        //SANCTUARY
        if (this.spellType == "sanctuary")
        {
            this.orientToCaster(0, 1 / 2 * Math.PI);
            this.spin = ((-Math.random() * 2) + 1) /200;
        }
        //WARD OF REPELLING
        if (this.spellType == "repellingWard")
        {
            this.orientToCaster(0, 1 / 2 * Math.PI);
            this.spin = ((-Math.random() * 2) + 1) /200;
            this.size = 0.1;
        }
        //FROST WIND
        if (this.spellType == "frostWind")
        {
            var rdxn = Math.floor(Math.random() * 8);

            if (instructions == 1)
            {
                this.orientToCaster(18, 1.2/3 * Math.PI);
            }
            else if (instructions == 2)
            {
                this.orientToCaster(18 + rdxn, 2.2/3 * Math.PI);
            }
            else if (instructions == 3)
            {
                this.orientToCaster(18 + rdxn, 2.8/4 * Math.PI);
            }
            else if (instructions == 4)
            {
                this.orientToCaster(18 + rdxn, 1.2/4 * Math.PI);
            }
            else if (instructions == 5)
            {
                this.orientToCaster(18 + rdxn, 1.9/4 * Math.PI);
            }
            else if (instructions == 6)
            {
                this.orientToCaster(18 + rdxn, 2.1/4 * Math.PI);
            }
            else if (instructions == 7)
            {
                this.orientToCaster(18 + rdxn, 1.95/4 * Math.PI);
            }
            else if (instructions == 8)
            {
                this.orientToCaster(18 + rdxn, 2.05/4 * Math.PI);
            }
        }
        //ICE BLAST
        if (this.spellType == "iceBlast")
        {
            var rdxn = Math.floor(Math.random() * 8);

            if (instructions == 1)
            {
                this.setRotation = 1/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 2)
            {
                this.setRotation = 2/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 3)
            {
                this.setRotation = 3/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 4)
            {
                this.setRotation = 4/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 5)
            {
                this.setRotation = 5/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 6)
            {
                this.setRotation = 6/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 7)
            {
                this.setRotation = 7/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 8)
            {
                this.setRotation = 8/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 9)
            {
                this.setRotation = 9/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 10)
            {
                this.setRotation = 10/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 11)
            {
                this.setRotation = 11/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 12)
            {
                this.setRotation = 12/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 13)
            {
                this.setRotation = 13/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 14)
            {
                this.setRotation = 14/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 15)
            {
                this.setRotation = 15/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 16)
            {
                this.setRotation = 16/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 17)
            {
                this.setRotation = 17/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 18)
            {
                this.setRotation = 18/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 19)
            {
                this.setRotation = 19/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 20)
            {
                this.setRotation = 20/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 21)
            {
                this.setRotation = 21/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 22)
            {
                this.setRotation = 22/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 23)
            {
                this.setRotation = 23/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
            else if (instructions == 24)
            {
                this.setRotation = 24/24 * 2*Math.PI;
                this.orientToCaster(18, 1/2 * Math.PI);
            }
        }
        //ICE SPIKES
        if (this.spellType == "iceSpikes")
        {
            var rdxn = Math.floor(Math.random() * 8);

            if (caster)
            {
                if (instructions == 1)
                {
                    this.orientToCaster(19, 1 / 2 * Math.PI);
                }
                else if (instructions == 2)
                {
                    this.orientToCaster(16 + rdxn, 4 / 6 * Math.PI );
                }
                else if (instructions == 3)
                {
                    this.orientToCaster(16 + rdxn, 2 / 6 * Math.PI );
                }
                else if (instructions == 4)
                {
                    this.orientToCaster(16 + rdxn, 3 / 6 * Math.PI );
                }
                else if (instructions == 5)
                {
                    this.orientToCaster(16 + rdxn, 1.6 / 6 * Math.PI );
                }
                else if (instructions == 6)
                {
                    this.orientToCaster(16 + rdxn, 0.6 / 6 * Math.PI );
                }
                else if (instructions == 7)
                {
                    this.orientToCaster(16 + rdxn, 4 / 6 * Math.PI );
                }
            }
            else
            {
                if (instructions == 1)
                {
                    this.orientToCaster(19, 0);
                }
                else if (instructions == 2)
                {
                    this.orientToCaster(16 + rdxn, 0 + 1/6 * Math.PI);
                }
                else if (instructions == 3)
                {
                    this.orientToCaster(16 + rdxn, 0 - 1/6 * Math.PI);
                }
                else if (instructions == 4)
                {
                    this.orientToCaster(16 + rdxn, 0 + 2/6 * Math.PI);
                }
                else if (instructions == 5)
                {
                    this.orientToCaster(16 + rdxn, 0 - 2/6 * Math.PI);
                }
                else if (instructions == 6)
                {
                    this.orientToCaster(16 + rdxn, 0 + 3/6 * Math.PI);
                }
                else if (instructions == 7)
                {
                    this.orientToCaster(16 + rdxn, 0 - 3/6 * Math.PI);
                }
            }
        }
        //Magic Missiles
        if (this.spellType == "magicMissiles")
        {
            this.orientToCaster(19, 1 / 2 * Math.PI);
        }
        //Summoning
        if (this.spellType == "summonFrich" || this.spellType == "summonWolf" || this.spellType == "summonGriffin" || this.spellType == "adminSummon")
        {
            this.spin = ((Math.random() * 11) - 5) / 25;
            var rdxn = Math.floor(Math.random() * 8);

            if (instructions == 1)
            {
                this.orientToCaster(19, 1 / 2 * Math.PI);
            }
            else if (instructions == 2)
            {
                this.orientToCaster(16 + rdxn, 4 / 6 * Math.PI );
            }
            else if (instructions == 3)
            {
                this.orientToCaster(16 + rdxn, 2 / 6 * Math.PI );
            }
            else if (instructions == 4)
            {
                this.orientToCaster(16 + rdxn, 3 / 6 * Math.PI );
            }
            else if (instructions == 5)
            {
                this.orientToCaster(16 + rdxn, 1.6 / 6 * Math.PI );
            }
            else if (instructions == 6)
            {
                this.orientToCaster(16 + rdxn, 0.6 / 6 * Math.PI );
            }
            else if (instructions == 7)
            {
                this.orientToCaster(16 + rdxn, 4 / 6 * Math.PI );
            }
            else
            {
                this.orientToCaster(19, 1 / 2 * Math.PI);
            }
        }

        //CHARMING
        if (this.spellType == "charm")
        {
            this.spin = 1/5;
            this.orientToCaster(19, 1 / 2 * Math.PI);
        }
        //MARK
        if (this.spellType == "mark")
        {
            this.orientToCaster(19, 1 / 2 * Math.PI);
        }
        //FLYING COLOURS
        if (this.spellType == "flyingColours")
        {
            this.orientToCaster(21, 1 / 2 * Math.PI);
            this.drawWithRotation(polypol, 1725, 238, 29, 26, 29, 26, player.rotation, -1 / 2 * 29, -1 / 2 * 26);
        }
        //Todo add the AI part to these.
        //OPERATIONS
        this.operations = function ()
        {
            //CHASING LIGHTS
            if (this.spellType == "chasingLights")
            {
                this.claimAndChase(true, 4, 0);
                if (caster)
                {
                    lights.push({X: this.X, Y: this.Y, size: this.size, extraStops: true, GRD: 0.7, Alpha: 0.4, showMe: false});
                }
                else
                {
                    //todo add chasing lights spell for AI
                }


                this.spellTimer(180 + 3 * this.cnx);

            }
            //ICE SPIKES
            if (this.spellType == "iceSpikes")
            {
                if (caster)
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.playerRotation);
                    XXX.drawImage(polypol, 1791, 209, 8, 28, - (1/2 * 8), - (1/2 * 28), 8, 28);
                    XXX.restore();

                    this.damageThenGoAway(7, "iceSpike");
                    this.project(this.playerRotation + 1/2 * Math.PI, 166 * ((50 + 3 * this.cnx) / 50), 5 * ((50 + this.cnx) / 50), true);

                }
                else
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.unitRotation + 1/2 * Math.PI);
                    XXX.drawImage(polypol, 1791, 209, 8, 28, - (1/2 * 8), - (1/2 * 28), 8, 28);
                    XXX.restore();

                    this.damageThenGoAway(7, "iceSpike", "damage", "negate", this.damagesPlayer);
                    this.project(this.unitRotation, 166 * ((50 + 3 * this.cnx) / 50), 5 * ((50 + this.cnx) / 50), true);
                }

                if (this.cnx >= 50)
                {
                    this.spellTimer(0.85);
                }
                else if (this.cnx >= 40)
                {
                    this.spellTimer(0.65);
                }
                else
                {
                    this.spellTimer(0.45);
                }
            }
            //ICE BLAST
            if (this.spellType == "iceBlast")
            {
                if (caster)
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate((this.playerRotation + this.setRotation - 1/2 * Math.PI));
                    XXX.drawImage(polypol, 1791, 209, 8, 28, - (1/2 * 8 * 1.4), - (1/2 * 28 * 1.4), 8 * 1.4, 28 * 1.4);
                    XXX.restore();

                    this.damageThenGoAway(11.5, "iceBlast");
                    this.project((this.playerRotation + this.setRotation), 200 * ((50 + 3 * this.cnx) / 50), 5.5 * ((50 + this.cnx) / 50), true);

                }
                else
                {
                    //todo add iceBlast spell for AI
                }

                if (this.cnx >= 50 && caster)
                {
                    this.spellTimer(0.9);
                }
                else if (this.cnx >= 40 && caster)
                {
                    this.spellTimer(0.7);
                }
                else
                {
                    this.spellTimer(0.5);
                }
            }

            //Magic Missiles
            if (this.spellType == "magicMissiles")
            {
                if (caster)
                {
                    this.flashAnimate(90, this.missileDirection - Math.PI, 0.92, [{image: nognog, imgX: 739, imgY: 116, portionW: 36, portionH: 20, adjX: -1 / 2 * 36 * 1.5, adjY: -1 / 2 * 20 * 1.5, width: 36 * 1.5, height: 20 * 1.5}, {image: nognog, imgX: 740, imgY: 94, portionW: 36, portionH: 20, adjX: -1 / 2 * 36 * 1.5, adjY: -1 / 2 * 20 * 1.5, width: 36 * 1.5, height: 20 * 1.5}, {image: nognog, imgX: 693, imgY: 95, portionW: 36, portionH: 20, adjX: -1 / 2 * 36 * 1.5, adjY: -1 / 2 * 20 * 1.5, width: 36 * 1.5, height: 20 * 1.5}, {image: nognog, imgX: 693, imgY: 114, portionW: 36, portionH: 20, adjX: -1 / 2 * 36 * 1.5, adjY: -1 / 2 * 20 * 1.5, width: 36 * 1.5, height: 20 * 1.5}]);

                    this.damageThenGoAway(7, "magicalDamage", 4 + 0.2 * this.cnx, 0, false);
                    //this.project(this.playerRotation + 1/2 * Math.PI, 166 * ((50 + 3 * this.cnx) / 50), 5 * ((50 + this.cnx) / 50), true);
                    if (instructions == 1)
                    {
                        this.missile("nearby", this.playerRotation + 5/10 * Math.PI, 0.35, 3.5, false);
                    }
                    else if (instructions == 2)
                    {
                        this.missile("nearby", this.playerRotation + 3/10 * Math.PI, 0.35, 3.5, false);
                    }
                    else if (instructions == 3)
                    {
                        this.missile("nearby", this.playerRotation + 7/10 * Math.PI, 0.35, 3.5, false);
                    }
                    else if (instructions == 4)
                    {
                        this.missile("nearby", this.playerRotation + 1/10 * Math.PI, 0.35, 3.5, false);
                    }
                    else if (instructions == 5)
                    {
                        this.missile("nearby", this.playerRotation + 9/10 * Math.PI, 0.35, 3.5, false);
                    }
                    else if (instructions == 6)
                    {
                        this.missile("nearby", this.playerRotation + 4/10 * Math.PI, 0.35, 3.5, false);
                    }
                    else if (instructions == 7)
                    {
                        this.missile("nearby", this.playerRotation + 6/10 * Math.PI, 0.35, 3.5, false);
                    }
                }
                else
                {
                    //todo add magicMissiles spell for AI
                }

                if (this.cnx >= 50 && caster)
                {
                    this.spellTimer(3);
                }
                else if (this.cnx >= 40 && caster)
                {
                    this.spellTimer(2.5);
                }
                else
                {
                    this.spellTimer(2.2);
                }
            }

            //SUMMONING
            if (this.spellType == "summonFrich" || this.spellType == "summonWolf" || this.spellType == "summonGriffin" || this.spellType == "adminSummon")
            {
                this.turn += this.spin;
                if (caster)
                {
                    var rang = 175 * ((50 + 2 * this.cnx) / 50);
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.turn);
                    if ((this.distanceCovered / rang) <= 0.4)
                    {
                        XXX.drawImage(polpol, 125, 504, 15, 15, - (1/2 * 15), - (1/2 * 15), 15, 15);
                    }
                    else if ((this.distanceCovered / rang) <= 0.6)
                    {
                        XXX.drawImage(polpol, 122, 525, 19, 16, - (1/2 * 19), - (1/2 * 16), 19, 16);
                    }
                    else if ((this.distanceCovered / rang) <= 0.8)
                    {
                        XXX.drawImage(polpol, 122, 546, 19, 18, - (1/2 * 19), - (1/2 * 18), 19, 18);
                    }
                    else
                    {
                        XXX.drawImage(polpol, 118, 569, 25, 23, - (1/2 * 25), - (1/2 * 23), 25, 23);
                    }
                    XXX.restore();

                    if (this.spellType == "summonFrich" && this.alert)
                    {
                        var alph = (Math.random() * 100) + 1;
                        if (alph <= 1 + (this.cnx / 2))
                        {
                            alph = "massive";
                        }
                        else if (alph <= 20 + this.cnx)
                        {
                            alph = true;
                        }
                        else
                        {
                            alph = false
                        }
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Frich", alph, "playerSummonedFrich"));

                        for (var i = 0; i < magicList.length; i++)
                        {
                            if (magicList[i] === this)
                            {
                                magicList.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (this.spellType == "summonWolf" && this.alert)
                    {
                        var alph = (Math.random() * 100) + 1;
                        if (alph <= 1 + (this.cnx / 5))
                        {
                            alph = true;
                        }
                        else
                        {
                            alph = false
                        }
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "GreyWolf", alph, "playerSummonedWolf"));

                        for (var i = 0; i < magicList.length; i++)
                        {
                            if (magicList[i] === this)
                            {
                                magicList.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (this.spellType == "summonGriffin" && this.alert)
                    {
                        if (this.cnx >= 45)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Griffin", false, "player"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "Griffin", false, "summonedGriffin"));
                        }

                        for (var i = 0; i < magicList.length; i++)
                        {
                            if (magicList[i] === this)
                            {
                                magicList.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (this.spellType == "adminSummon")
                    {

                        if (instructions[4] == true)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(instructions[0], instructions[1], instructions[2], instructions[3], "playerSummoned" + instructions[2]));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(instructions[0], instructions[1], instructions[2], instructions[3], "adminGenerated" + instructions[2]));
                        }

                        for (var i = 0; i < magicList.length; i++)
                        {
                            if (magicList[i] === this)
                            {
                                magicList.splice(i, 1);
                                break;
                            }
                        }

                    }

                    this.project(this.playerRotation + 1/2 * Math.PI, rang, 3.5 * ((50 + this.cnx) / 50), "alert");

                }
                else
                {
                    //todo add summoning spell for AI
                }
            }

            //CHARMING
            if (this.spellType == "charm")
            {
                this.turn += this.spin;
                if (caster)
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.turn);
                    XXX.drawImage(polpol, 120, 375, 23, 23, - (1/2 * 23), - (1/2 * 23), 23, 23);
                    XXX.restore();


                    if (this.alert)
                    {
                        for (var i = 0; i < magicList.length; i++)
                        {
                            if (magicList[i] === this)
                            {
                                magicList.splice(i, 1);
                                break;
                            }
                        }
                    }

                    this.damageThenGoAway(12, "charm", 0, 0, false, "alert");
                    this.project(this.playerRotation + 1/2 * Math.PI, 100 + 3 * this.cnx, 2 * ((50 + this.cnx) / 50), "alert");

                }
                else
                {
                    //todo add charming spell for AI
                }
            }

            //MARK
            if (this.spellType == "mark")
            {
                if (caster)
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.playerRotation);
                    XXX.globalAlpha = 0.65;
                    XXX.drawImage(zapa, 308, 42, 18, 31, - (1/2 * 18 * 1.7), - (1/2 * 31 * 1.7), 18 * 1.7, 31 * 1.7);
                    XXX.restore();


                    if (this.alert)
                    {
                        for (var i = 0; i < magicList.length; i++)
                        {
                            if (magicList[i] === this)
                            {
                                magicList.splice(i, 1);
                                break;
                            }
                        }
                    }

                    this.damageThenGoAway(12, "mark", 0, 0, false, "alert");
                    this.project(this.playerRotation + 1/2 * Math.PI, 150 + 3 * this.cnx, 1 + 2 * ((50 + this.cnx) / 50), "alert");

                }
                else
                {
                    //todo add mark spell for AI
                }
            }

            //FLAMING MISSILES
            if (this.spellType == "flamingMissiles")
            {
                if (caster)
                {
                    this.flashAnimate(90, this.rotation - Math.PI, 0.92, [{image: oldverse, imgX: 1510, imgY: 201, portionW: 29, portionH: 18, adjX: -1 / 2 * 29 * 1.5, adjY: -1 / 2 * 18 * 1.5, width: 29 * 1.5, height: 18 * 1.5}, {image: oldverse, imgX: 1511, imgY: 221, portionW: 29, portionH: 18, adjX: -1 / 2 * 29 * 1.5, adjY: -1 / 2 * 18 * 1.5, width: 29 * 1.5, height: 18 * 1.5}, {image: oldverse, imgX: 1510, imgY: 245, portionW: 29, portionH: 18, adjX: -1 / 2 * 29 * 1.5, adjY: -1 / 2 * 18 * 1.5, width: 29 * 1.5, height: 18 * 1.5}, {image: oldverse, imgX: 1510, imgY: 267, portionW: 29, portionH: 18, adjX: -1 / 2 * 29 * 1.5, adjY: -1 / 2 * 18 * 1.5, width: 29 * 1.5, height: 18 * 1.5}]);

                    this.damageThenGoAway(8, "fire", 3 * (1 + this.cnx / 25), 0, false, true);

                    var elBlanco = {alive: false};

                    if (this.targeted == "none" || elBlanco.alive == false)
                    {
                        var loMasCercano = 1000000;
                        var suIdentidad = -1;
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            var distancia = Math.sqrt((this.X - ArtificialIntelligenceAccess[i].X)*(this.X - ArtificialIntelligenceAccess[i].X) + (this.Y - ArtificialIntelligenceAccess[i].Y)*(this.Y - ArtificialIntelligenceAccess[i].Y))
                            if (distancia < loMasCercano || suIdentidad == -1)
                            {
                                if (ArtificialIntelligenceAccess[i].team != "player")
                                {
                                    loMasCercano = distancia;
                                    suIdentidad = i;
                                    this.targeted = i;
                                }
                            }
                        }
                    }
                    if (this.targeted != "none")
                    {
                        elBlanco = ArtificialIntelligenceAccess[this.targeted];
                    }

                    if (this.ready == false && directedRotation == "none")
                    {
                        this.spellTimer(1, "ready");
                    }

                    if (this.ready && elBlanco.alive == true)
                    {
                        if (directedRotation == "none")
                        {
                            this.spellTime = new Date().getTime();
                        }
                        this.rotation = Math.atan2(elBlanco.Y - this.Y, elBlanco.X - this.X);
                        this.project(this.rotation, 1000 + 10 * this.cnx, 3 + 2 * ((50 + this.cnx) / 50), true);

                        this.spellTimer(0.5, "unready");
                        directedRotation = Number(this.rotation);
                    }
                    else if (this.ready || directedRotation == "none")
                    {
                        this.rotation = this.playerRotation + 1/2 * Math.PI;
                        this.project(this.rotation, 1000 + 10 * this.cnx, 3 + 2 * ((50 + this.cnx) / 50), true);
                    }

                    if (this.ready == false && directedRotation != "none")
                    {
                        this.rotation = directedRotation;
                        this.project(this.rotation, 1000 + 10 * this.cnx, 3 + 2 * ((50 + 40) / 50), true);
                    }
                }
                else
                {
                    this.flashAnimate(90, this.rotation - Math.PI, 0.92, [{image: oldverse, imgX: 1510, imgY: 201, portionW: 29, portionH: 18, adjX: -1 / 2 * 29 * 1.5, adjY: -1 / 2 * 18 * 1.5, width: 29 * 1.5, height: 18 * 1.5}, {image: oldverse, imgX: 1511, imgY: 221, portionW: 29, portionH: 18, adjX: -1 / 2 * 29 * 1.5, adjY: -1 / 2 * 18 * 1.5, width: 29 * 1.5, height: 18 * 1.5}, {image: oldverse, imgX: 1510, imgY: 245, portionW: 29, portionH: 18, adjX: -1 / 2 * 29 * 1.5, adjY: -1 / 2 * 18 * 1.5, width: 29 * 1.5, height: 18 * 1.5}, {image: oldverse, imgX: 1510, imgY: 267, portionW: 29, portionH: 18, adjX: -1 / 2 * 29 * 1.5, adjY: -1 / 2 * 18 * 1.5, width: 29 * 1.5, height: 18 * 1.5}]);

                    var elBlanco = {health: 0};
                    if (this.targeted == "player")
                    {
                        this.damageThenGoAway(8, "fire", 8, 0, true, true);
                        elBlanco = player;
                    }
                    else if (this.targeted != "none")
                    {
                        this.damageThenGoAway(8, "fire", 8, 0, false, true);
                        elBlanco = ArtificialIntelligenceAccess[this.targeted];
                    }
                    var sePuedePasar = false;
                    if (typeof(elBlanco) != "undefined")
                    {
                        if (elBlanco.health <= 0)
                        {
                            sePuedePasar = true;
                        }
                    }
                    else
                    {
                        sePuedePasar = true;
                    }

                    if (this.targeted == "none" || sePuedePasar)
                    {
                        var distanciaAlUsario;
                        var loMasCercano = 1000000;
                        var suIdentidad = -1;
                        if (this.team != "player")
                        {
                            distanciaAlUsario = Math.sqrt((this.X - X)*(this.X - X) + (this.Y - Y)*(this.Y - Y));
                            this.targeted = "player";
                        }

                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            var distancia = Math.sqrt((this.X - ArtificialIntelligenceAccess[i].X)*(this.X - ArtificialIntelligenceAccess[i].X) + (this.Y - ArtificialIntelligenceAccess[i].Y)*(this.Y - ArtificialIntelligenceAccess[i].Y));
                            if (this.targeted == "player")
                            {
                                if (distancia < distanciaAlUsario && ArtificialIntelligenceAccess[i] != unitSelf && ArtificialIntelligenceAccess[i].team != unitSelf.team)
                                {
                                    loMasCercano = distancia;
                                    suIdentidad = i;
                                    this.targeted = i;
                                }
                            }
                            else
                            {
                                if (ArtificialIntelligenceAccess[i] != unitSelf && ArtificialIntelligenceAccess[i].team != unitSelf.team)
                                {
                                    if (distancia < loMasCercano || suIdentidad == -1)
                                    {
                                        loMasCercano = distancia;
                                        suIdentidad = i;
                                        this.targeted = i;
                                    }
                                }
                            }
                        }
                    }
                    if (this.ready == false && directedRotation == "none")
                    {
                        this.spellTimer(1, "ready");
                    }

                    if (this.ready && elBlanco.health > 0)
                    {
                        if (directedRotation == "none")
                        {
                            this.spellTime = new Date().getTime();
                        }

                        if (elBlanco == player)
                        {
                            this.rotation = Math.atan2(Y - this.Y, X - this.X);
                        }
                        else
                        {
                            this.rotation = Math.atan2(elBlanco.Y - this.Y, elBlanco.X - this.X);
                        }
                        this.project(this.rotation, 1500, 3 + 2 * ((50 + 40) / 50), true);
                        this.spellTimer(0.5, "unready");
                        directedRotation = Number(this.rotation);
                    }
                    else if (this.ready || directedRotation == "none")
                    {
                        //this.rotation = Math.atan2(Y - this.Y, X - this.X);
                        this.rotation = unitSelf.rotation + Math.PI;
                        this.project(this.rotation, 1500, 3 + 2 * ((50 + 40) / 50), true);
                    }

                    if (this.ready == false && directedRotation != "none")
                    {
                        this.rotation = directedRotation;
                        this.project(this.rotation, 1500, 3 + 2 * ((50 + 40) / 50), true);
                    }
                }
            }

            //FROST WIND
            if (this.spellType == "frostWind")
            {
                if (caster)
                {
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.playerRotation);
                    XXX.globalAlpha = 0.45;
                    XXX.drawImage(polypol, 1815, 207, 28, 28, - (1/2 * 28), - (1/2 * 28), 28, 28);
                    XXX.restore();

                    this.contactDamage(false, 28, ((Math.random()) + 0.025 * this.cnx) / 2, 250, "frostwind", "frostI");

                    if (instructions == 1)
                    {
                        this.project(this.playerRotation + 0.7 / 2 * Math.PI, 90 * ((50 + 0.7 * this.cnx) / 50), 2.2, true);
                    }
                    else if (instructions == 2)
                    {
                        this.project(this.playerRotation + 1.3 / 2 * Math.PI, 90 * ((50 + 0.7 * this.cnx) / 50), 2.2, true);
                    }
                    else if (instructions == 3)
                    {
                        this.project(this.playerRotation + 1.4 / 2 * Math.PI, 90 * ((50 + 0.7 * this.cnx) / 50), 2.2, true);
                    }
                    else if (instructions == 4)
                    {
                        this.project(this.playerRotation + 0.6 / 2 * Math.PI, 90 * ((50 + 0.7 * this.cnx) / 50), 2.2, true);
                    }
                    else if (instructions == 5)
                    {
                        this.project(this.playerRotation + 1.2 / 2 * Math.PI, 90 * ((50 + 0.7 * this.cnx) / 50), 2.2, true);
                    }
                    else if (instructions == 6)
                    {
                        this.project(this.playerRotation + 0.8 / 2 * Math.PI, 90 * ((50 + 0.7 * this.cnx) / 50), 2.2, true);
                    }
                    else if (instructions == 7)
                    {
                        this.project(this.playerRotation + 1.05 / 2 * Math.PI, 90 * ((50 + 0.7 * this.cnx) / 50), 2.2, true);
                    }
                    else if (instructions == 8)
                    {
                        this.project(this.playerRotation + 0.95 / 2 * Math.PI, 90 * ((50 + 0.7 * this.cnx) / 50), 2.2, true);
                    }
                }
                else
                {
                    //todo add frostWind spell for AI
                }
            }
            //REPEL
            if (this.spellType == "repel")
            {
                if (caster)
                {
                    if (this.ticCounter(250 + 11 * this.cnx) + 40 <= 85 + this.cnx)
                    {
                        this.contactDamage(false, 10 + this.ticCounter(250 + 11 * this.cnx), ((Math.random()) + 0.02 * this.cnx) / 100, 5,  "force", "force");

                        XXX.save();
                        XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                        XXX.globalAlpha = 0.55;
                        XXX.beginPath();
                        XXX.strokeStyle = "white";
                        XXX.lineWidth = 10 + 1/50 * this.ticCounter(250 + 11 * this.cnx);
                        XXX.arc(0, 0, 10 + this.ticCounter(250 + 11 * this.cnx), 0, 2*Math.PI);
                        XXX.stroke();
                        XXX.restore();
                    }
                }

                this.spellTimer(0.65);
            }

            //SANCTUARY
            if (this.spellType == "sanctuary")
            {
                if (caster)
                {
                    if (this.repeated)
                    {
                        this.turn += this.spin;
                        XXX.save();
                        XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                        XXX.rotate(this.turn);
                        XXX.drawImage(zapa, 253, 121, 74, 71, - (1/2 * 74 * 2), - (1/2 * 71 * 2), 74 * 2, 71 * 2);
                        XXX.restore();
                    }
                    this.flashAnimate(165, false, 1, [{image: zapa, imgX: 347, imgY: 45, portionW: 30, portionH: 28, adjX: -1 / 2 * 30 * 2, adjY: -1 / 2 * 28 * 2, width: 30 * 2, height: 28 * 2}, {image: zapa, imgX: 387, imgY: 25, portionW: 74, portionH: 71, adjX: -1 / 2 * 74 * 2, adjY: -1 / 2 * 71 * 2, width: 74 * 2, height: 71 * 2}, {image: zapa, imgX: 474, imgY: 25, portionW: 74, portionH: 71, adjX: -1 / 2 * 74 * 2, adjY: -1 / 2 * 71 * 2, width: 74 * 2, height: 71 * 2}, {image: zapa, imgX: 564, imgY: 27, portionW: 74, portionH: 71, adjX: -1 / 2 * 74 * 2, adjY: -1 / 2 * 71 * 2, width: 74 * 2, height: 71 * 2}, {image: zapa, imgX: 349, imgY: 118, portionW: 74, portionH: 71, adjX: -1 / 2 * 74 * 2, adjY: -1 / 2 * 71 * 2, width: 74 * 2, height: 71 * 2}, {image: zapa, imgX: 445, imgY: 121, portionW: 74, portionH: 71, adjX: -1 / 2 * 74 * 2, adjY: -1 / 2 * 71 * 2, width: 74 * 2, height: 71 * 2}, {image: zapa, imgX: 542, imgY: 121, portionW: 74, portionH: 71, adjX: -1 / 2 * 74 * 2, adjY: -1 / 2 * 71 * 2, width: 74 * 2, height: 71 * 2}, {image: zapa, imgX: 253, imgY: 121, portionW: 74, portionH: 71, adjX: -1 / 2 * 74 * 2, adjY: -1 / 2 * 71 * 2, width: 74 * 2, height: 71 * 2}], false, false);
                    lights.push({X: this.X, Y: this.Y, size: 78, extraStops: true, GRD: 0.86, Alpha: 0.9, showMe: false});

                    //Heals player's minions
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].team == "player")
                        {
                            var distanceToAI = Math.sqrt((ArtificialIntelligenceAccess[i].X - this.X) * (ArtificialIntelligenceAccess[i].X - this.X) + (ArtificialIntelligenceAccess[i].Y - this.Y) * (ArtificialIntelligenceAccess[i].Y - this.Y));
                            if (distanceToAI <= 75)
                            {
                                if (this.cnx >= 50)
                                {
                                    ArtificialIntelligenceAccess[i].health = Math.min(ArtificialIntelligenceAccess[i].healthMAX, ArtificialIntelligenceAccess[i].health + 0.06);
                                }
                                else if (this.cnx >= 30)
                                {
                                    ArtificialIntelligenceAccess[i].health = Math.min(ArtificialIntelligenceAccess[i].healthMAX, ArtificialIntelligenceAccess[i].health + 0.055);
                                }
                                else if (this.cnx >= 20)
                                {
                                    ArtificialIntelligenceAccess[i].health = Math.min(ArtificialIntelligenceAccess[i].healthMAX, ArtificialIntelligenceAccess[i].health + 0.05);
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess[i].health = Math.min(ArtificialIntelligenceAccess[i].healthMAX, ArtificialIntelligenceAccess[i].health + 0.025);
                                }
                            }
                        }
                    }

                    //Restores player's energy and health
                    var distanceToPlayer = Math.sqrt((X - this.X)*(X - this.X) + (Y - this.Y)*(Y - this.Y));
                    if (distanceToPlayer <= 75 + player.mySize)
                    {
                        if (this.cnx >= 50)
                        {
                            player.energy += 0.04;
                            player.health += 0.06;
                        }
                        else if (this.cnx >= 30)
                        {
                            player.energy += 0.035;
                            player.health += 0.055;
                        }
                        else if (this.cnx >= 20)
                        {
                            player.energy += 0.03;
                            player.health += 0.05;
                        }
                        else
                        {
                            player.energy += 0.015;
                            player.health += 0.025;
                        }
                    }

                    //Disintegrate non-magical projectiles
                    for (var i = 0; i < unitProjectiles.length; i++)
                    {
                        var distanceToProjectile = Math.sqrt((unitProjectiles[i].X - this.X)*(unitProjectiles[i].X - this.X) + (unitProjectiles[i].Y - this.Y)*(unitProjectiles[i].Y - this.Y));
                        if (distanceToProjectile <= 75)
                        {
                            unitProjectiles.splice(i, 1);
                        }
                    }
                }

                this.spellTimer(15 + this.cnx * 4);
            }

            //WARD OF REPELLING
            if (this.spellType == "repellingWard")
            {
                if (caster)
                {
                    if (this.size < 2.5)
                    {
                        this.size += 0.05;
                        this.turn += this.spin;
                        XXX.save();
                        XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                        XXX.rotate(this.turn);
                        XXX.drawImage(zapa, 3, 60, 61, 55, - (1/2 * 61 * this.size), - (1/2 * 55 * this.size), 61 * this.size, 55 * this.size);
                        XXX.restore();
                    }
                    else
                    {
                        this.turn += this.spin;
                        this.flashAnimate(90, this.turn, 1, [{image: zapa, imgX: 85, imgY: 63, portionW: 61, portionH: 55, adjX: -1 / 2 * 61 * this.size, adjY: -1 / 2 * 55 * this.size, width: 61 * this.size, height: 55 * this.size}, {image: zapa, imgX: 152, imgY: 64, portionW: 61, portionH: 55, adjX: -1 / 2 * 61 * this.size, adjY: -1 / 2 * 55 * this.size, width: 61 * this.size, height: 55 * this.size}, {image: zapa, imgX: 223, imgY: 61, portionW: 61, portionH: 55, adjX: -1 / 2 * 61 * this.size, adjY: -1 / 2 * 55 * this.size, width: 61 * this.size, height: 55 * this.size}], true, false);
                        lights.push({X: this.X, Y: this.Y, size: 75, extraStops: true, GRD: 0.86, Alpha: 0.9, showMe: false});
                    }

                    //Pushes non player team units away
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].team != "player")
                        {
                            var distanceToAI = Math.sqrt((ArtificialIntelligenceAccess[i].X - this.X) * (ArtificialIntelligenceAccess[i].X - this.X) + (ArtificialIntelligenceAccess[i].Y - this.Y) * (ArtificialIntelligenceAccess[i].Y - this.Y));
                            if (distanceToAI <= 85)
                            {
                                ArtificialIntelligenceAccess[i].X -= (2 + 4 * ArtificialIntelligenceAccess[i].speed) * Math.cos(Math.atan2(this.X - ArtificialIntelligenceAccess[i].X, this.Y - ArtificialIntelligenceAccess[i].Y) - 1 / 2 * Math.PI);
                                ArtificialIntelligenceAccess[i].Y -= (2 + 4 * ArtificialIntelligenceAccess[i].speed) * Math.sin(Math.atan2(this.X - ArtificialIntelligenceAccess[i].X, this.Y - ArtificialIntelligenceAccess[i].Y) - 1 / 2 * Math.PI);
                            }
                        }
                    }

                    //reflects non-magical projectiles
                    for (var i = 0; i < unitProjectiles.length; i++)
                    {
                        var distanceToProjectile = Math.sqrt((unitProjectiles[i].X - this.X)*(unitProjectiles[i].X - this.X) + (unitProjectiles[i].Y - this.Y)*(unitProjectiles[i].Y - this.Y));
                        if (distanceToProjectile <= 85)
                        {
                            unitProjectiles[i].rotation = Math.atan2(this.X - unitProjectiles[i].X, this.Y - unitProjectiles[i].Y) - Math.PI;
                        }
                    }
                }

                this.spellTimer(9 + (120 / 50) * this.cnx);
            }

            //WHIRLWIND
            if (this.spellType == "whirlwind")
            {
                if (caster)
                {
                    this.rotation += this.turn;
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.rotation);
                    XXX.drawImage(mofu, 1244, 4, 53, 50, -(1/2 * 53), -(1/2 * 50), 53, 50);
                    XXX.restore();
                    var gamouseX = X - mouseX + 1/2 * CCC.width;
                    var gamouseY = Y - mouseY + 1/2 * CCC.height;
                    this.X += Math.cos(Math.atan2(this.Y - gamouseY, this.X - gamouseX) + Math.PI) * 5;
                    this.Y += Math.sin(Math.atan2(this.Y - gamouseY, this.X - gamouseX) + Math.PI) * 5;

                    this.contactDamage(false, 30, ((2.5 * Math.random()) + 0.05 * this.cnx) / 100, 5,  "force", "force");
                    this.spellTimer(8 + (this.cnx / 5));
                }
                else
                {

                }
            }

            //ENTANGLEMENT
            if (this.spellType == "entanglement")
            {
                if (caster)
                {
                    if (this.alert)
                    {
                        this.stage += 1;
                        this.alert = false;
                        this.repeated = false;
                    }

                    if (this.stage == 1)
                    {
                        XXX.save();
                        XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                        XXX.rotate(0);
                        XXX.drawImage(oldverse, 3098, 133, 121, 91, - (1/2 * 121 * this.size), - (1/2 * 91 * this.size), 121 * this.size, 91 * this.size);
                        XXX.restore();
                    }
                    else if (this.stage == 0)
                    {
                        this.flashAnimate(200, 0, 1, [{image: oldverse, imgX: 3100, imgY: 309, portionW: 121, portionH: 91, adjX: -1 / 2 * 121 * this.size, adjY: -1 / 2 * 91 * this.size, width: 121 * this.size, height: 91 * this.size}, {image: oldverse, imgX: 3097, imgY: 225, portionW: 121, portionH: 91, adjX: -1 / 2 * 121 * this.size, adjY: -1 / 2 * 91 * this.size, width: 121 * this.size, height: 91 * this.size}, {image: oldverse, imgX: 3098, imgY: 133, portionW: 121, portionH: 91, adjX: -1 / 2 * 121 * this.size, adjY: -1 / 2 * 91 * this.size, width: 121 * this.size, height: 91 * this.size}], false, "alert");
                        if (this.alert)
                        {
                            XXX.save();
                            XXX.translate(X - this.X + 1 / 2 * CCC.width, Y - this.Y + 1 / 2 * CCC.height);
                            XXX.rotate(0);
                            XXX.drawImage(oldverse, 3098, 133, 121, 91, -(1 / 2 * 121 * this.size), -(1 / 2 * 91 * this.size), 121 * this.size, 91 * this.size);
                            XXX.restore();
                        }
                    }
                    else if (this.stage >= 1)
                    {
                        this.flashAnimate(200, 0, 1, [{image: oldverse, imgX: 3098, imgY: 133, portionW: 121, portionH: 91, adjX: -1 / 2 * 121 * this.size, adjY: -1 / 2 * 91 * this.size, width: 121 * this.size, height: 91 * this.size}, {image: oldverse, imgX: 3097, imgY: 225, portionW: 121, portionH: 91, adjX: -1 / 2 * 121 * this.size, adjY: -1 / 2 * 91 * this.size, width: 121 * this.size, height: 91 * this.size}, {image: oldverse, imgX: 3100, imgY: 309, portionW: 121, portionH: 91, adjX: -1 / 2 * 121 * this.size, adjY: -1 / 2 * 91 * this.size, width: 121 * this.size, height: 91 * this.size}], false, true);
                    }


                    //Pushes non player team units away
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].team != "player")
                        {
                            var distanceToAI = Math.sqrt((ArtificialIntelligenceAccess[i].X - this.X) * (ArtificialIntelligenceAccess[i].X - this.X) + (ArtificialIntelligenceAccess[i].Y - this.Y) * (ArtificialIntelligenceAccess[i].Y - this.Y));
                            if (distanceToAI <= 45)
                            {
                                ArtificialIntelligenceAccess[i].stunIV = true;
                                ArtificialIntelligenceAccess[i].stunTimer = 1;
                                ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                            }
                        }
                    }
                }

                this.spellTimer(6 + (this.cnx / 5), true);
            }

            //SURGE
            if (this.spellType == "surge")
            {
                this.orientToCaster(0, 1 / 2 * Math.PI);
                if (caster)
                {
                    if (this.cnx >= 25)
                    {
                        this.contactDamage(false, 100, 4 + 0.15 * this.cnx, 450, "electricity");
                        this.flashAnimate(90, false, 0.90, [{image: mofu, imgX: 415, imgY: 4, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * 52, adjY: -1 / 2 * ((28 * 1.5)/10) * 52, width: ((28 * 1.5)/10) * 52, height: ((28 * 1.5)/10) * 52}, {image: mofu, imgX: 455, imgY: 3, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * 52, adjY: -1 / 2 * ((28 * 1.5)/10) * 52, width: ((28 * 1.5)/10) * 52, height: ((28 * 1.5)/10) * 52}, {image: mofu, imgX: 497, imgY: 4, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * 52, adjY: -1 / 2 * ((28 * 1.5)/10) * 52, width: ((28 * 1.5)/10) * 52, height: ((28 * 1.5)/10) * 52}]);
                        lights.push({X: this.X, Y: this.Y, size: 100, extraStops: true, GRD: 0.75, Alpha: 0.8, showMe: false});
                    }
                    else
                    {
                        this.contactDamage(false, 75, 3 + 0.15 * this.cnx, 450, "electricity");
                        this.flashAnimate(90, false, 0.90, [{image: mofu, imgX: 415, imgY: 4, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * 34, adjY: -1 / 2 * ((28 * 1.5)/10) * 34, width: ((28 * 1.5)/10) * 34, height: ((28 * 1.5)/10) * 34}, {image: mofu, imgX: 455, imgY: 3, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * 34, adjY: -1 / 2 * ((28 * 1.5)/10) * 34, width: ((28 * 1.5)/10) * 34, height: ((28 * 1.5)/10) * 34}, {image: mofu, imgX: 497, imgY: 4, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * 34, adjY: -1 / 2 * ((28 * 1.5)/10) * 34, width: ((28 * 1.5)/10) * 34, height: ((28 * 1.5)/10) * 34}]);
                        lights.push({X: this.X, Y: this.Y, size: 75, extraStops: true, GRD: 0.75, Alpha: 0.8, showMe: false});
                    }
                }
                else
                {
                    this.contactDamage(false, 100, 3.5 + 0.15 * this.cnx, 450, "electricity");
                    this.flashAnimate(90, false, 0.90, [{image: mofu, imgX: 415, imgY: 4, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * 52, adjY: -1 / 2 * ((28 * 1.5)/10) * 52, width: ((28 * 1.5)/10) * 52, height: ((28 * 1.5)/10) * 52}, {image: mofu, imgX: 455, imgY: 3, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * 52, adjY: -1 / 2 * ((28 * 1.5)/10) * 52, width: ((28 * 1.5)/10) * 52, height: ((28 * 1.5)/10) * 52}, {image: mofu, imgX: 497, imgY: 4, portionW: 28, portionH: 28, adjX: -1 / 2 * ((28 * 1.5)/10) * 52, adjY: -1 / 2 * ((28 * 1.5)/10) * 52, width: ((28 * 1.5)/10) * 52, height: ((28 * 1.5)/10) * 52}]);
                    lights.push({X: this.X, Y: this.Y, size: 100, extraStops: true, GRD: 0.75, Alpha: 0.8, showMe: false});
                }

                this.spellTimer(0.5);
            }

            //MINOR VORTEX
            if (this.spellType == "minorVortex")
            {

                var activeMe = false;
                for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                {
                    if (Math.sqrt((this.X - ArtificialIntelligenceAccess[i].X)*(this.X - ArtificialIntelligenceAccess[i].X) + (this.Y - ArtificialIntelligenceAccess[i].Y)*(this.Y - ArtificialIntelligenceAccess[i].Y)) <= 100)
                    {
                        if (ArtificialIntelligenceAccess[i].healthMAX <= 4 || ArtificialIntelligenceAccess[i].health <= 2)
                        {
                            if (ArtificialIntelligenceAccess[i].magicalResistance < 1)
                            {
                                ArtificialIntelligenceAccess[i].X = this.X;
                                ArtificialIntelligenceAccess[i].Y = this.Y;
                                activeMe = true;
                            }
                        }
                    }
                }
                if (Math.sqrt((this.X - X)*(this.X - X) + (this.Y - Y)*(this.Y - Y)) <= 100)
                {
                    if (player.healthMAX <= 4 || player.health <= 2)
                    {
                        if (player.magicalResistanceTotal < 1)
                        {
                            X = this.X;
                            Y = this.Y;
                            activeMe = true;
                        }
                    }
                }

                if (activeMe)
                {
                    this.size = 1.5;
                    this.spin += 0.04;
                    this.turn += this.spin;
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.turn);
                    XXX.drawImage(nognog, 792, 100, 20, 18, - (1/2 * 20 * this.size), - (1/2 * 18 * this.size), 20 * this.size, 18 * this.size);
                    XXX.restore();
                }
                else
                {
                    this.size = 1.5;
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.turn);
                    XXX.drawImage(nognog, 798, 122, 7, 7, - (1/2 * 7 * this.size), - (1/2 * 7 * this.size), 7 * this.size, 7 * this.size);
                    XXX.restore();
                }

                this.spellTimer(15 + this.cnx);
            }

            //SMOKE
            if (this.spellType == "smoke")
            {
                this.contactDamage(true, 17 * this.size, 0, 90,  "blindingChokeII", "blinding");
                //move
                this.X += Math.cos(this.rotation) * 0.2;
                this.Y += Math.sin(this.rotation) * 0.2;
                //spin
                this.turn += 0.005;

                //grow
                if (this.size < 1.4)
                {
                    this.size += 0.02
                }
                else
                {
                    //self delete after it reaches full size for 3 seconds
                    this.spellTimer(3);
                }

                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                XXX.rotate(this.turn);
                XXX.drawImage(atal, 436, 576, 81, 77, - (1/2 * 81 * this.size), - (1/2 * 77 * this.size), 81 * this.size, 77 * this.size);
                XXX.restore();
            }

            //EMBERS
            if (this.spellType == "embers")
            {
                if (caster)
                {
                    if (this.cnx >= 25)
                    {
                        this.contactDamage(false, 24, ((Math.random() + 3) + 0.2 * this.cnx) / 2, 250, "fire", "fireI");
                        this.flashAnimate(90, false, 1, [{image: polypol, imgX: 1688, imgY: 212, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * 2, adjY: -1 / 2 * 26 * 2, width: 29 * 2, height: 26 * 2}, {image: polypol, imgX: 1720, imgY: 210, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * 2, adjY: -1 / 2 * 26 * 2, width: 29 * 2, height: 26 * 2}, {image: polypol, imgX: 1754, imgY: 211, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * 2, adjY: -1 / 2 * 26 * 2, width: 29 * 2, height: 26 * 2}]);
                        lights.push({X: this.X, Y: this.Y, size: 30, extraStops: true, GRD: 0.75, Alpha: 0.7, showMe: false});
                    }
                    else
                    {
                        this.contactDamage(false, 14, ((Math.random() + 3) + 0.2 * this.cnx) / 2, 250,  "fire", "fireI");
                        this.flashAnimate(100, false, 1, [{image: polypol, imgX: 1688, imgY: 212, portionW: 29, portionH: 26, adjX: -1 / 2 * 29, adjY: -1 / 2 * 26, width: 29, height: 26}, {image: polypol, imgX: 1720, imgY: 210, portionW: 29, portionH: 26, adjX: -1 / 2 * 29, adjY: -1 / 2 * 26, width: 29, height: 26}, {image: polypol, imgX: 1754, imgY: 211, portionW: 29, portionH: 26, adjX: -1 / 2 * 29, adjY: -1 / 2 * 26, width: 29, height: 26}]);
                        lights.push({X: this.X, Y: this.Y, size: 17.5, extraStops: true, GRD: 0.75, Alpha: 0.7, showMe: false});
                    }
                }
                else
                {
                    this.contactDamage(false, 20, ((Math.random() + 5)) / 2, 250,  "fire", "fireI");
                    this.flashAnimate(100, false, 1, [{image: polypol, imgX: 1688, imgY: 212, portionW: 29, portionH: 26, adjX: -1 / 2 * 29, adjY: -1 / 2 * 26, width: 29, height: 26}, {image: polypol, imgX: 1720, imgY: 210, portionW: 29, portionH: 26, adjX: -1 / 2 * 29, adjY: -1 / 2 * 26, width: 29, height: 26}, {image: polypol, imgX: 1754, imgY: 211, portionW: 29, portionH: 26, adjX: -1 / 2 * 29, adjY: -1 / 2 * 26, width: 29, height: 26}]);
                }

                if (this.cnx >= 50 && caster)
                {
                    this.spellTimer(0.85);
                }
                else if (this.cnx >= 40 && caster)
                {
                    this.spellTimer(0.65);
                }
                else
                {
                    this.spellTimer(0.45);
                }
            }

            if (this.spellType == "fireballI")
            {
                if (caster)
                {
                    if (this.cnx >= 30)
                    {
                        this.contactDamage(false, 16, ((Math.random() * 6 + 6) + 0.3 * this.cnx) / 5, 100,  "fire", "none");
                        this.flashAnimate(90, false, 1, [{image: polypol, imgX: 1691, imgY: 184, portionW: 24, portionH: 23, adjX: -1 / 2 * 24 * 1.5, adjY: -1 / 2 * 23 * 1.5, width: 24 * 1.5, height: 23 * 1.5}, {image: polypol, imgX: 1721, imgY: 185, portionW: 24, portionH: 23, adjX: -1 / 2 * 24 * 1.5, adjY: -1 / 2 * 23 * 1.5, width: 24 * 1.5, height: 23 * 1.5}, {image: polypol, imgX: 1750, imgY: 185, portionW: 24, portionH: 23, adjX: -1 / 2 * 24 * 1.5, adjY: -1 / 2 * 23 * 1.5, width: 24 * 1.5, height: 23 * 1.5}, {image: polypol, imgX: 1783, imgY: 185, portionW: 24, portionH: 23, adjX: -1 / 2 * 24 * 1.5, adjY: -1 / 2 * 23 * 1.5, width: 24 * 1.5, height: 23 * 1.5}]);
                        lights.push({X: this.X, Y: this.Y, size: 32, extraStops: true, GRD: 0.86, Alpha: 0.7, showMe: false});
                    }
                    else
                    {
                        this.contactDamage(false, 11, ((Math.random() * 4 + 4) + 0.3 * this.cnx) / 5, 100,  "fire", "none");
                        this.flashAnimate(100, false, 1, [{image: polypol, imgX: 1691, imgY: 184, portionW: 24, portionH: 23, adjX: -1 / 2 * 24, adjY: -1 / 2 * 23, width: 24, height: 23}, {image: polypol, imgX: 1721, imgY: 185, portionW: 24, portionH: 23, adjX: -1 / 2 * 24, adjY: -1 / 2 * 23, width: 24, height: 23}, {image: polypol, imgX: 1750, imgY: 185, portionW: 24, portionH: 23, adjX: -1 / 2 * 24, adjY: -1 / 2 * 23, width: 24, height: 23}, {image: polypol, imgX: 1783, imgY: 185, portionW: 24, portionH: 23, adjX: -1 / 2 * 24, adjY: -1 / 2 * 23, width: 24, height: 23}]);
                        lights.push({X: this.X, Y: this.Y, size: 22, extraStops: true, GRD: 0.86, Alpha: 0.7, showMe: false});
                    }
                    this.project(this.playerRotation + 1/2 * Math.PI, 100 * ((50 + 3 * this.cnx) / 50), 3 * ((50 + this.cnx) / 50), true);
                }
                else
                {
                    //Todo add the Ai part of this spell...
                }
            }

            if (this.spellType == "shadowFog")
            {
                if (caster)
                {
                    if (this.size <= 1)
                    {
                        this.sizeChanger = 0.0025;
                    }
                    else if (this.size >= 1.2)
                    {
                        this.sizeChanger = -0.0025;
                    }
                    this.size += this.sizeChanger;
                    this.spin = 0.01;
                    this.turn += this.spin;
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.turn);
                    XXX.drawImage(oldverse, 276, 258, 156, 134, - (1/2 * 156 * this.size), - (1/2 * 134 * this.size), 156 * this.size, 134 * this.size);
                    XXX.restore();

                    this.contactDamage(false, 74 * this.size, 0, 90,  "blinding", "blinding");
                    this.spellTimer(7 + (this.cnx / 10));
                }
                else
                {
                    if (this.size <= 1)
                    {
                        this.sizeChanger = 0.0025;
                    }
                    else if (this.size >= 1.2)
                    {
                        this.sizeChanger = -0.0025;
                    }
                    this.size += this.sizeChanger;
                    this.spin = 0.01;
                    this.turn += this.spin;
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.turn);
                    XXX.drawImage(oldverse, 276, 258, 156, 134, - (1/2 * 156 * this.size), - (1/2 * 134 * this.size), 156 * this.size, 134 * this.size);
                    XXX.restore();

                    this.contactDamage(true, 74 * this.size, 0, 90,  "blinding", "blinding");
                    if (this.orders == "short")
                    {
                        this.spellTimer(3);
                    }
                    else
                    {
                        this.spellTimer(9);
                    }
                }
            }

            if (this.spellType == "shadowport")
            {
                if (caster)
                {
                    if (this.size <= 1)
                    {
                        this.sizeChanger = 0.0025;
                    }
                    else if (this.size >= 1.2)
                    {
                        this.sizeChanger = -0.0025;
                    }
                    this.size += this.sizeChanger;
                    this.spin = 0.01;
                    this.turn += this.spin;
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.turn);
                    XXX.drawImage(oldverse, 276, 258, 156, 134, - (1/2 * 156 * this.size), - (1/2 * 134 * this.size), 156 * this.size, 134 * this.size);
                    XXX.restore();
                    this.contactDamage(false, 74 * this.size, 0, 90,  "blinding", "blinding");
                    this.spellTimer(7 + (this.cnx / 10));

                    if (this.doOnce)
                    {
                        this.doOnce = false;
                        X = this.ratonX;
                        Y = this.ratonY;
                        //if (player.getEminence() < 5)
                        //{
                            player.blinded = true;
                            player.blindedStoreTime = new Date().getTime();
                            player.blindedTime = 1;
                        //}
                    }
                }
            }

            if (this.spellType == "golemRock")
            {
                if (unitSelf.alpha == "baby")
                {
                    this.damageThenGoAway(6, "bonk", 4 + Math.random() * 7, 2, true, "alert");
                    this.size = 0.333;
                }
                else if (unitSelf.alpha == false)
                {
                    this.damageThenGoAway(18 * 0.65, "bonk", 10 + Math.random() * 15, 5, true, "alert");
                    this.size = 0.65;
                }
                else if (unitSelf.alpha == true)
                {
                    this.damageThenGoAway(18 * 1.25, "bonk", 45 + Math.random() * 56, 35, true, "alert");
                    this.size = 1.25;
                }
                else if (unitSelf.alpha == "giant")
                {
                    this.damageThenGoAway(18 * 2.2, "bonk", 125 + Math.random() * 150, 50, true, "alert");
                    this.size = 2.2;
                }

                if (this.alert == true)
                {
                    this.flashAnimate(90, this.turn, 1, [{image: polypol, imgX: 1690, imgY: 1237, portionW: 58, portionH: 63, adjX: -1 / 2 * 58 * this.size, adjY: -1 / 2 * 63 * this.size, width: 58 * this.size, height:63 * this.size}, {image: polypol, imgX: 1690, imgY: 1237, portionW: 58, portionH: 63, adjX: -1 / 2 * 58 * this.size, adjY: -1 / 2 * 63 * this.size, width: 58 * this.size, height:63 * this.size}, {image: polypol, imgX: 1755, imgY: 1238, portionW: 58, portionH: 63, adjX: -1 / 2 * 58 * this.size, adjY: -1 / 2 * 63 * this.size, width: 58 * this.size, height:63 * this.size}, {image: polypol, imgX: 1755, imgY: 1238, portionW: 58, portionH: 63, adjX: -1 / 2 * 58 * this.size, adjY: -1 / 2 * 63 * this.size, width: 58 * this.size, height:63 * this.size}], false, true);
                }
                else
                {
                    this.turn += this.spin;
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.rotate(this.turn);
                    XXX.drawImage(polypol, 1618, 1237, 58, 63, - (1/2 * 58 * this.size), - (1/2 * 63 * this.size), 58 * this.size, 63 * this.size);
                    //XXX.beginPath();
                    //XXX.fillStyle = "blue";
                    //XXX.arc(0, 0, 18 * 2.2, 0, Math.PI * 2);
                    //XXX.fill();
                    XXX.restore();
                }


                if (unitSelf.alpha != "giant")
                {
                    this.project(this.rotation + Math.PI, 2000, this.speed, "alert");
                }
                else
                {
                    this.project(this.rotation + Math.PI, 3200, this.speed, "alert");
                }

            }

            if (this.spellType == "flySpit")
            {
                if (unitSelf.target == player)
                {
                    if (unitSelf.alpha == "baby")
                    {
                        this.damageThenGoAway(4, "quarterAcid", 0, 2, true, false);
                    }
                    else if (unitSelf.alpha == false)
                    {
                        this.damageThenGoAway(6, "acidI", 0.5, 4.5, true, false);
                    }
                    else if (unitSelf.alpha == true)
                    {
                        this.damageThenGoAway(9, "acidI", 1.5, 5, true, false);
                    }
                    else if (unitSelf.alpha == "giant")
                    {
                        this.damageThenGoAway(17, "acidI", 10, 10, true, false);
                    }
                }
                else
                {
                    if (unitSelf.alpha == "baby")
                    {
                        this.damageThenGoAway(4, "acidI", 0, 2, false, false);
                    }
                    else if (unitSelf.alpha == false)
                    {
                        this.damageThenGoAway(6, "acidI", 0.5, 4.5, false, false);
                    }
                    else if (unitSelf.alpha == true)
                    {
                        this.damageThenGoAway(9, "acidI", 1.5, 5, false, false);
                    }
                    else if (unitSelf.alpha == "giant")
                    {
                        this.damageThenGoAway(17, "acidI", 10, 10, false, false);
                    }
                }

                this.size = 3/5 * unitSelf.alphaSize;
                this.flashAnimate(90, this.unitRotation, 1, [{image: lodo, imgX: 46, imgY: 146, portionW: 16, portionH: 12, adjX: -1 / 2 * 16 * 2 * this.size, adjY: -1 / 2 * 12 * 2 * this.size, width: 16 * 2 * this.size, height: 12 * 2 * this.size}, {image: lodo, imgX: 65, imgY: 146, portionW: 16, portionH: 12, adjX: -1 / 2 * 16 * 2 * this.size, adjY: -1 / 2 * 12 * 2 * this.size, width: 16 * 2 * this.size, height: 12 * 2 * this.size}, {image: lodo, imgX: 83, imgY: 147, portionW: 16, portionH: 12, adjX: -1 / 2 * 16 * 2 * this.size, adjY: -1 / 2 * 12 * 2 * this.size, width: 16 * 2 * this.size, height: 12 * 2 * this.size}, {image: lodo, imgX: 104, imgY: 148, portionW: 16, portionH: 12, adjX: -1 / 2 * 16 * 2 * this.size, adjY: -1 / 2 * 12 * 2 * this.size, width: 16 * 2 * this.size, height: 12 * 2 * this.size}], true, false);
                this.project(this.unitRotation, unitSelf.baseSight, this.speed, true); //removed  - Math.PI

            }

            if (this.spellType == "iceberg")
            {

                if (new Date().getTime() - this.keepSizeTime > 100)
                {
                    this.keepSizeTime = new Date().getTime();
                    if (instructions != "iceShard")
                    {
                        if (this.cnx >= 50)
                        {
                            if (this.size < 1.3)
                            {
                                this.size += 0.05
                            }
                        }
                        else
                        {
                            if (this.size < 1.1)
                            {
                                this.size += 0.05
                            }
                        }
                    }
                    else
                    {
                        this.shardTime += 1;
                    }
                }

                if (instructions != "iceShard")
                {
                    if (this.cnx == 50)
                    {
                        if (this.size > 1.25)
                        {
                            this.explosion = true;
                        }
                    }
                    else
                    {
                        if (this.size > 1.05)
                        {
                            this.explosion = true;
                        }
                    }
                }
                else
                {
                    if (this.shardTime > 24)
                    {
                        magicList.splice(magicList.indexOf(this), 1);
                    }
                }

                if (caster)
                {
                    this.damageThenGoAway(20 * this.size, "physicalDamage", ((45 + (25 / 50) * this.cnx) * this.size), (5 + (10 / 50) * this.cnx) * this.size, false, false);
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    if (instructions != "iceShard")
                    {
                        XXX.rotate(this.rotation - 1/2 * Math.PI);
                    }
                    else
                    {
                        XXX.rotate(unitSelf[0]);
                    }
                    XXX.drawImage(zapa, 461, 204, 48, 60, - (1/2 * 48 * this.size), - (1/2 * 60 * this.size), 48 * this.size, 60 * this.size);
                    XXX.restore();
                    if (instructions != "iceShard")
                    {
                        this.project(this.rotation, 10000, 2, false);
                    }
                    else
                    {
                        this.project(unitSelf[0] + 1/2 * Math.PI, 10000, 5, false);
                    }

                    if (this.explosion == true)
                    {
                        this.explosion = false;
                        if (this.cnx >= 50)
                        {
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                        }
                        else if (this.cnx >= 40)
                        {
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                        }
                        else if (this.cnx >= 30)
                        {
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                        }
                        else if (this.cnx >= 20)
                        {
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                        }
                        else if (this.cnx >= 10)
                        {
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                        }
                        else
                        {
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                            magicList.push(new Magic({ID: "iceberg", CNX: this.cnx}, true, "iceShard", [Math.random() * (2 * Math.PI), this.X, this.Y]));
                        }

                        magicList.splice(magicList.indexOf(this), 1);
                    }
                }
                else
                {
                    //Todo add the Ai part of this spell...
                }
            }

            if (this.spellType == "electricBolt")
            {
                if (caster)
                {
                    if (instructions == "aftershock")
                    {
                        this.damageThenGoAway(10, "electricity", 5.5 + 0.2 * this.cnx, 0, false);
                        this.flashAnimate(90, unitSelf[0], 0.9, [{image: mofu, imgX: 454, imgY: 46, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 475, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 498, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}]);
                        this.project(unitSelf[0] + 1/2 * Math.PI, 400 + ((100 * this.cnx) / 50), 7 + 2 * (this.cnx / 50), true);
                    }
                    else if (instructions == "aftershocked")
                    {
                        this.damageThenGoAway(10, "electricity", 4 + 0.1 * this.cnx, 0, false);
                        this.flashAnimate(90, unitSelf[0], 0.7, [{image: mofu, imgX: 454, imgY: 46, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 475, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 498, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}]);
                        this.project(unitSelf[0] + 1/2 * Math.PI, 400 + ((100 * this.cnx) / 50), 7 + 2 * (this.cnx / 50), true);
                    }
                    else
                    {
                        this.damageThenGoAway(10, "electricity", 11 + 0.4 * this.cnx, 0, false);
                        this.flashAnimate(90, this.playerRotation, 1, [{image: mofu, imgX: 454, imgY: 46, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 475, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 498, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}]);
                        this.project(this.playerRotation + 1/2 * Math.PI, 450 + ((250 * this.cnx) / 50), 7 + 2 * (this.cnx / 50), true);
                    }
                    lights.push({X: this.X, Y: this.Y, size: 18, extraStops: true, GRD: 0.75, Alpha: 0.8, showMe: false});
                }
                else
                {
                    if (instructions == "aftershock")
                    {
                        this.damageThenGoAway(10, "electricity", 5.5 + 0.2 * this.cnx, 0, this.damagesPlayer);
                        this.flashAnimate(90, unitSelf[0], 0.9, [{image: mofu, imgX: 454, imgY: 46, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 475, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 498, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}]);
                        this.project(unitSelf[0] + 1/2 * Math.PI, 400 + ((100 * this.cnx) / 50), 7 + 2 * (this.cnx / 50), true);
                    }
                    else if (instructions == "aftershocked")
                    {
                        this.damageThenGoAway(10, "electricity", 4 + 0.1 * this.cnx, 0, this.damagesPlayer);
                        this.flashAnimate(90, unitSelf[0], 0.7, [{image: mofu, imgX: 454, imgY: 46, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 475, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 498, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}]);
                        this.project(unitSelf[0] + 1/2 * Math.PI, 400 + ((100 * this.cnx) / 50), 7 + 2 * (this.cnx / 50), true);
                    }
                    else
                    {
                        this.damageThenGoAway(10, "electricity", 11 + 0.4 * this.cnx, 0, this.damagesPlayer);
                        this.flashAnimate(90, this.unitRotation + 1/2 * Math.PI, 1, [{image: mofu, imgX: 454, imgY: 46, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 475, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}, {image: mofu, imgX: 498, imgY: 48, portionW: 19, portionH: 32, adjX: -1 / 2 * 19, adjY: -1 / 2 * 32, width: 19, height: 32}]);
                        this.project(this.unitRotation, 450 + ((250 * this.cnx) / 50), 7 + 2 * (this.cnx / 50), true);
                    }
                    lights.push({X: this.X, Y: this.Y, size: 18, extraStops: true, GRD: 0.75, Alpha: 0.8, showMe: false});
                }
            }

            if (this.spellType == "drainOrb")
            {
                if (caster)
                {
                    //Todo add the Ai part of this spell...
                }
                else
                {
                    this.damageThenGoAway(6, "drainOrb", 1, 0, true);
                    this.flashAnimate(90, this.ticCounter(100), 0.75, [{image: polypol, imgX: 1668, imgY: 270, portionW: 20, portionH: 18, adjX: -1 / 2 * 20 * 0.4, adjY: -1 / 2 * 18 * 0.4, width: 20 * 0.4, height: 18 * 0.4}, {image: polypol, imgX: 1695, imgY: 270, portionW: 20, portionH: 18, adjX: -1 / 2 * 20 * 0.4, adjY: -1 / 2 * 18 * 0.4, width: 20 * 0.4, height: 18 * 0.4}, {image: polypol, imgX: 1723, imgY: 270, portionW: 20, portionH: 18, adjX: -1 / 2 * 20 * 0.4, adjY: -1 / 2 * 18 * 0.4, width: 20 * 0.4, height: 18 * 0.4}]);
                    this.project(Math.atan2(Y - this.Y, X - this.X), 100000, 3 + Math.random() * 2, true);
                }
            }
            if (this.spellType == "soulOrb")
            {
                if (caster)
                {
                    this.damageThenGoAway(8, "soulOrb", 0, 0, false);
                    this.turn -= 0.314;
                    XXX.beginPath();
                    XXX.save();
                    XXX.translate(X - this.X + (1/2 * CCC.width), Y - this.Y + (1/2 * CCC.height));
                    XXX.rotate(this.turn);
                    XXX.drawImage(mofu, 23, 51, 22, 19, - (1/2 * 22), - (1/2 * 19), 22, 19);
                    XXX.restore();
                    this.project(Math.atan2(unitSelf.Y - this.Y, unitSelf.X - this.X), 1000000, 4 + (Math.random() * 3), true);
                }
                else
                {
                    //this spell is not for player use.
                }
            }

            //ANCIENT RIFT
            if (this.spellType == "ancientRift")
            {
                XXX.save();
                XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                this.spin += 0.025;
                this.turn += this.spin;
                XXX.rotate(this.turn);
                XXX.drawImage(oldverse, 1953, 133, 170, 159, - (1/2 * 170 * 1.4), - (1/2 * 159 * 1.4), 170 * 1.4, 159 * 1.4);
                XXX.restore();

                if (this.doOnce)
                {
                    if (this.orders == "AncientBeing")
                    {
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "AncientBeing", true, "Dejn-Vaa-Chorm"));
                    }
                    else if (this.orders == "AncientCrawler")
                    {
                        ArtificialIntelligenceAccess.push(new Unit(this.X, this.Y, "AncientCrawler", true, "Kavad-Hod"));
                    }
                    this.doOnce = false;
                }

                this.spellTimer(4);
            }

            if (this.spellType == "drainingI")
            {
                if (caster)
                {
                    this.damageThenGoAway(10, "draining", 1 + (Math.floor(4/50 * this.cnx)));
                    this.flashAnimate(90, this.playerRotation, 1, [{image: polypol, imgX: 1767, imgY: 267, portionW: 16, portionH: 25, adjX: -1 / 2 * 16, adjY: -1 / 2 * 25, width: 16, height: 25}, {image: polypol, imgX: 1784, imgY: 267, portionW: 16, portionH: 25, adjX: -1 / 2 * 16, adjY: -1 / 2 * 25, width: 16, height: 25}, {image: polypol, imgX: 1809, imgY: 267, portionW: 16, portionH: 25, adjX: -1 / 2 * 16, adjY: -1 / 2 * 25, width: 16, height: 25}, {image: polypol, imgX: 1827, imgY: 267, portionW: 16, portionH: 25, adjX: -1 / 2 * 16, adjY: -1 / 2 * 25, width: 16, height: 25}]);
                    this.project(this.playerRotation + 1/2 * Math.PI, 110 * ((50 + 3 * this.cnx) / 50), 4 * ((50 + this.cnx) / 50), true);
                }
                else
                {
                    //Todo add the Ai part of this spell...
                }
            }

            if (this.spellType == "drainOrb")
            {
                if (caster)
                {
                    //Todo add the Ai part of this spell...
                }
                else
                {
                    this.damageThenGoAway(6, "drainOrb", 1, 0, true);
                    this.flashAnimate(90, this.ticCounter(100), 0.75, [{image: polypol, imgX: 1668, imgY: 270, portionW: 20, portionH: 18, adjX: -1 / 2 * 20 * 0.4, adjY: -1 / 2 * 18 * 0.4, width: 20 * 0.4, height: 18 * 0.4}, {image: polypol, imgX: 1695, imgY: 270, portionW: 20, portionH: 18, adjX: -1 / 2 * 20 * 0.4, adjY: -1 / 2 * 18 * 0.4, width: 20 * 0.4, height: 18 * 0.4}, {image: polypol, imgX: 1723, imgY: 270, portionW: 20, portionH: 18, adjX: -1 / 2 * 20 * 0.4, adjY: -1 / 2 * 18 * 0.4, width: 20 * 0.4, height: 18 * 0.4}]);
                    this.project(Math.atan2(Y - this.Y, X - this.X), 100000, 3 + Math.random() * 2, true);
                }
            }

            if (this.spellType == "lifeTap")
            {
                if (caster)
                {
                    this.X = X;
                    this.Y = Y;
                    this.flashAnimate(350, this.ticCounter(44) * -1, 0.85, [{image: polypol, imgX: 1758, imgY: 298, portionW: 65, portionH: 68, adjX: -1/2 * 65, adjY: -1/2 * 68, width: 65, height: 68}, {image: polypol, imgX: 1674, imgY: 298, portionW: 65, portionH: 68, adjX: -1/2 * 65, adjY: -1/2 * 68, width: 65, height: 68}, {image: polypol, imgX: 1582, imgY: 299, portionW: 65, portionH: 68, adjX: -1/2 * 65, adjY: -1/2 * 68, width: 65, height: 68}, {image: polypol, imgX: 1485, imgY: 300, portionW: 65, portionH: 68, adjX: -1/2 * 65, adjY: -1/2 * 68, width: 65, height: 68}, {image: polypol, imgX: 1480, imgY: 218, portionW: 65, portionH: 68, adjX: -1/2 * 65, adjY: -1/2 * 68, width: 65, height: 68}], false, true);
                }
                else
                {
                    //Todo add the Ai part of this spell...
                }
            }

            if (this.spellType == "fart")
            {
                if (caster)
                {
                    XXX.beginPath();
                    XXX.save();
                    XXX.translate(X - this.X + 1/2 * CCC.width, Y - this.Y + 1/2 * CCC.height);
                    XXX.fillStyle = "saddleBrown";
                    XXX.arc(0, 0, 2 + this.ticCounter(135), 0, Math.PI * 2);
                    XXX.globalAlpha = 0.15;
                    XXX.fill();
                    XXX.restore();
                    this.spellTimer(1);
                }
                else
                {
                    //todo add farting for AI
                }
            }

            if (this.spellType == "glowDust")
            {
                var szx = 3;
                if (caster)
                {
                    this.flashAnimate(90, this.rotation, 0.90, [{image: trapper, imgX: 3, imgY: 18, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}, {image: trapper, imgX: 3, imgY: 35, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}, {image: trapper, imgX: 3, imgY: 52, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}], true, false);
                    this.damageThenGoAway(7.5 * szx, "blindingGlow", 0, 100, false);
                    lights.push({X: this.X, Y: this.Y, size: 7.5 * szx, extraStops: true, GRD: 0.8, Alpha: 0.9, showMe: false});
                    this.project(this.rotation, 35, 2.5, true);
                }
                else
                {
                    //todo add glowDust for AI
                }
            }

            if (this.spellType == "vrezinDust")
            {
                var szx = 3;
                if (caster)
                {
                    this.flashAnimate(90, this.rotation, 0.90, [{image: trapper, imgX: 23, imgY: 18, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}, {image: trapper, imgX: 23, imgY: 35, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}, {image: trapper, imgX: 22, imgY: 52, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}], true, false);
                    this.damageThenGoAway(7.5 * szx, "fire", 5, 100, false);
                    lights.push({X: this.X, Y: this.Y, size: 7.5 * szx, extraStops: true, GRD: 0.7, Alpha: 0.55, showMe: false});
                    this.project(this.rotation, 35, 2.5, true);
                }
                else
                {
                    //todo add vrezinDust for AI
                }
            }

            if (this.spellType == "irilDust")
            {
                var szx = 3;
                if (caster)
                {
                    this.flashAnimate(90, this.rotation, 0.90, [{image: trapper, imgX: 43, imgY: 18, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}, {image: trapper, imgX: 43, imgY: 35, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}, {image: trapper, imgX: 42, imgY: 52, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}], true, false);
                    this.damageThenGoAway(7.5 * szx, "alter", 0.5, 5, false, "iril"); //negate is the timer for 'alter' //0.6 damage means that enemy damage is 60% of its normal amount
                    this.project(this.rotation, 35, 2.5, true);
                }
                else
                {
                    //todo add irilDust for AI
                }
            }

            if (this.spellType == "pimberDust")
            {
                var szx = 3;
                if (caster)
                {
                    this.flashAnimate(90, this.rotation, 0.90, [{image: trapper, imgX: 281, imgY: 126, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}, {image: trapper, imgX: 281, imgY: 143, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}, {image: trapper, imgX: 280, imgY: 160, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}], true, false);
                    this.damageThenGoAway(7.5 * szx, "acidV", 2, 100, false, "pimber");
                    this.project(this.rotation, 35, 2.5, true);
                }
                else
                {
                    //todo add pimberDust for AI
                }
            }

            if (this.spellType == "shomeDust")
            {
                this.cnx = 60;
                var szx = 3;
                if (caster)
                {
                    this.flashAnimate(90, this.rotation, 0.90, [{image: trapper, imgX: 281, imgY: 197, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}, {image: trapper, imgX: 281, imgY: 214, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}, {image: trapper, imgX: 280, imgY: 231, portionW: 15, portionH: 15, adjX: -1/2 * 15 * szx, adjY: -1/2 * 15 * szx, width: 15 * szx, height: 15 * szx}], true, false);
                    this.damageThenGoAway(7.5 * szx, "mark", 0, 100, false, "shome");
                    this.project(this.rotation, 35, 2.5, true);
                }
                else
                {
                    //todo add shomeDust for AI
                }
            }

            if (this.spellType == "flyingColours")
            {
                if (caster)
                {
                    if (this.cnx >= 50)
                    {

                        for (var j = 0; j < ArtificialIntelligenceAccess.length; j++)
                        {
                            ArtificialIntelligenceAccess[j].blindedTime = new Date().getTime();
                        }

                        this.ticCounter(1400);
                        this.flashAnimate(25, false, 0.98, [{image: polypol, imgX: 1725, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}, {image: polypol, imgX: 1756, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}, {image: polypol, imgX: 1788, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}, {image: polypol, imgX: 1818, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}]);
                        this.spellTimer(2);
                        lights.push({X: this.X, Y: this.Y, size: 10000, extraStops: true, GRD: 0.95, Alpha: 0.8, showMe: false});
                    }
                    else if (this.cnx >= 15)
                    {
                        this.ticCounter(120);
                        this.contactDamage(false, 20 + 6 * this.ticCount, 0, 100,  "blinding", "none");
                        this.flashAnimate(25, false, 0.98, [{image: polypol, imgX: 1725, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}, {image: polypol, imgX: 1756, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}, {image: polypol, imgX: 1788, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}, {image: polypol, imgX: 1818, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}]);
                        this.spellTimer(2);
                        lights.push({X: this.X, Y: this.Y, size: 20 + 10 * this.ticCount, extraStops: true, GRD: 0.65, Alpha: 0.8, showMe: false});
                    }
                    else
                    {
                        this.ticCounter(90);
                        this.contactDamage(false, 20 + 6 * this.ticCount, 0, 100,  "blinding", "none");
                        this.flashAnimate(25, false, 0.98, [{image: polypol, imgX: 1725, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}, {image: polypol, imgX: 1756, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}, {image: polypol, imgX: 1788, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}, {image: polypol, imgX: 1818, imgY: 238, portionW: 29, portionH: 26, adjX: -1 / 2 * 29 * this.ticCount, adjY: -1 / 2 * 26 * this.ticCount, width: 29 * this.ticCount, height: 26 * this.ticCount}]);
                        this.spellTimer(1.2);
                        lights.push({X: this.X, Y: this.Y, size: 20 + 8 * this.ticCount, extraStops: true, GRD: 0.65, Alpha: 0.8, showMe: false});
                    }
                    this.project(this.playerRotation + 1/2 * Math.PI, 10000, 2, true);
                }
                else
                {
                    //todo add flying colours spell for AI
                }
            }
        };
    }
}