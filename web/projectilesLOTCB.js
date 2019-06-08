/**
 * Created by skyeguy on 1/22/17.
 */

function Projectile(type, startX, startY, startAngle, speed, range, negation, list, damage, magicDamage, ability, nonPlayer, team)
{
    this.X = startX;
    this.Y = startY;
    this.dmx = map;
    this.rotation = startAngle;
    this.distanceFromStart = 0;
    this.damage = 0;
    this.magicalDamage = 0;
    this.negateArmour = negation;
    this.ability = "none";
    this.statsSet = false;
    this.zIndex = 4;
    this.team = team;
    this.isPlayerProjectile = false;
    this.speed = speed;
    this.radius = 4;
    this.thrown = false;
    this.doNada = false;
    this.notShotByPlayer = nonPlayer;
    this.tipo = type;

    this.timeSinceShot = new Date().getTime();

    //thrown variables
    this.thrownID = "none";
    this.thrownRotation = 0;
    //random individual variables
    this.flameFrame = 0;
    this.flameTic = 0;
    this.canLight = false;
    //random external variables
    this.changelingTampered = false;
    //visual animation variables
    this.spin = 0;

    //PROJECTILE AI
    //TODO this is where unique projectile AI like target following would be added.

    //SHOOT (project self)
    this.shoot = function()
    {
        if (this.doNada == false)
        {
            if (list == playerProjectiles)
            {
                this.distanceFromStart = Math.sqrt((this.X - startX)*(this.X - startX)+(this.Y - startY)*(this.Y - startY));
                if (this.distanceFromStart < range)
                {
                    if (typeof(nonPlayer) == "undefined")
                    {
                        this.X += (Math.cos(this.rotation + (1/2 * Math.PI)) * this.speed) * (TTD / 16.75) * timeSpeed;
                        this.Y += (Math.sin(this.rotation + (1/2 * Math.PI)) * this.speed) * (TTD / 16.75) * timeSpeed;
                    }
                    else
                    {
                        this.X += (Math.cos(this.rotation - (1/2 * Math.PI)) * this.speed) * (TTD / 16.75) * timeSpeed;
                        this.Y += (Math.sin(this.rotation - (1/2 * Math.PI)) * this.speed) * (TTD / 16.75) * timeSpeed;
                    }
                }
                else
                {
                    if (this.thrown == true && this.isPlayerProjectile == true && this.thrownID != "none")
                    {
                        scenicList.push(new Scenery(this.thrownID, this.X, this.Y, this.thrownRotation, false));
                    }

                    for (var i = list.length - 1; i > -1; i--)
                    {
                        if (list[i] == this)
                        {
                            list.splice(i, 1);
                            this.doNada = true;
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
                    this.X += (Math.cos(this.rotation - (1/2 * Math.PI)) * this.speed) * (TTD / 16.75) * timeSpeed;
                    this.Y += (Math.sin(this.rotation - (1/2 * Math.PI)) * this.speed) * (TTD / 16.75) * timeSpeed;
                }
                else
                {
                    for (var i = list.length - 1; i > -1; i--)
                    {
                        if (list[i] == this)
                        {
                            list.splice(i, 1);
                            this.doNada = true;
                            break;
                        }
                    }
                }
            }
        }
    };

    //This sets the projectiles damages and ability to that of the item its type referrs to.
    this.setStats = function()
    {
        if (this.doNada == false)
        {
            if (list == playerProjectiles)
            {
                if (this.statsSet == false)
                {
                    for (var i = 0; i < allWeapons.length; i++)
                    {
                        if (type == allWeapons[i].type)
                        {
                            if (type == "oiledArrow")
                            {
                                for (var i = 0; i < Inventory.length; i++)
                                {
                                    if (Inventory[i][0].type == "fireStarter")
                                    {
                                        this.canLight = true;
                                    }
                                }
                            }
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
        }
    };

    //Deal damage to enemy and then disappear.
    this.impact = function()
    {
        if (this.doNada == false)
        {
            if (list == playerProjectiles)
            {
                for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                {
                    var distanceFromUnit = Math.sqrt((this.X - ArtificialIntelligenceAccess[i].X)*(this.X - ArtificialIntelligenceAccess[i].X)+(this.Y - ArtificialIntelligenceAccess[i].Y)*(this.Y - ArtificialIntelligenceAccess[i].Y));

                    if (distanceFromUnit < (ArtificialIntelligenceAccess[i].sizeRadius + this.radius) && !ArtificialIntelligenceAccess[i].underground)
                    {
                        //bullets do half damage against large enough non-human creatures. All others damage always remains the same.
                        if (ArtificialIntelligenceAccess[i].team != this.team && this.dmx == ArtificialIntelligenceAccess[i].dmx)
                        {
                            if (type == "bullet" && ArtificialIntelligenceAccess[i].healthMAX > 100 && ArtificialIntelligenceAccess[i].type != "Person" && ArtificialIntelligenceAccess[i].type != "Soldier")
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, (this.damage / 3) - Math.max(0, ArtificialIntelligenceAccess[i].armour - (this.negateArmour / 2))) + Math.max(0, this.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance);
                            }
                            else if (type == "5.56MMRound" && ArtificialIntelligenceAccess[i].healthMAX > 90 && ArtificialIntelligenceAccess[i].type != "Person" && ArtificialIntelligenceAccess[i].type != "Soldier" || type == "shotgunRound" && ArtificialIntelligenceAccess[i].healthMAX > 90 && ArtificialIntelligenceAccess[i].type != "Person" && ArtificialIntelligenceAccess[i].type != "Soldier")
                            {
                                if (ArtificialIntelligenceAccess[i].healthMAX <= 160)
                                {
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, (this.damage / 10) - Math.max(0, ArtificialIntelligenceAccess[i].armour - (this.negateArmour / 20))) + Math.max(0, this.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance);
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, (this.damage / 20) - Math.max(0, ArtificialIntelligenceAccess[i].armour - (this.negateArmour / 20))) + Math.max(0, this.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance);
                                }
                            }
                            else
                            {
                                ArtificialIntelligenceAccess[i].health -= Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) + Math.max(0, this.magicalDamage - ArtificialIntelligenceAccess[i].magicalResistance);
                            }

                            if (nonPlayer && ArtificialIntelligenceAccess[i].health <= 0) //booble if this works then delete this message
                            {
                                ArtificialIntelligenceAccess[i].killNotByPlayer = true;
                            }
                            ArtificialIntelligenceAccess[i].healthShownTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].disturbedTime = new Date().getTime();
                            ArtificialIntelligenceAccess[i].hurtByPlayer = true;

                            //Effects
                            if (ArtificialIntelligenceAccess[i].health <= 0 && this.isPlayerProjectile)
                            {
                                ArtificialIntelligenceAccess[i].killNotByPlayer = false;
                            }

                            if (this.ability == "stunI")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].stunTimer = 5;
                                    ArtificialIntelligenceAccess[i].stunI = true;
                                }
                            }
                            else if (this.ability == "stunII")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].stunTimer = 5;
                                    ArtificialIntelligenceAccess[i].stunII = true;
                                }
                            }
                            else if (this.ability == "stunIII")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].stunTimer = 5;
                                    ArtificialIntelligenceAccess[i].stunIII = true;
                                }
                            }
                            else if (this.ability == "stunIV")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].stunTimer = 5;
                                    ArtificialIntelligenceAccess[i].stunIV = true;
                                }
                            }
                            else if (this.ability == "stunV")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                                    ArtificialIntelligenceAccess[i].stunTimer = 5;
                                    ArtificialIntelligenceAccess[i].stunV = true;
                                }
                            }
                            else if (this.ability == "knockbackI")
                            {
                                if (Math.max(0, this.magicalDamage - Math.max(0, ArtificialIntelligenceAccess[i].magicalResistance)) > 0)
                                {
                                    var twrdsUnit = Math.atan2(Y - ArtificialIntelligenceAccess[i].Y, X - ArtificialIntelligenceAccess[i].X);
                                    ArtificialIntelligenceAccess[i].X -= Math.cos(twrdsUnit) * 50;
                                    ArtificialIntelligenceAccess[i].Y -= Math.sin(twrdsUnit) * 50;
                                    ArtificialIntelligenceAccess[i].stunIII = true;
                                    ArtificialIntelligenceAccess[i].stunTimer = 1;
                                    ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                                }
                            }
                            else if (this.ability == "knockbackII")
                            {
                                if (Math.max(0, this.magicalDamage - Math.max(0, ArtificialIntelligenceAccess[i].magicalResistance)) > 0)
                                {
                                    var twrdsUnit = Math.atan2(Y - ArtificialIntelligenceAccess[i].Y, X - ArtificialIntelligenceAccess[i].X);
                                    ArtificialIntelligenceAccess[i].X -= Math.cos(twrdsUnit) * 100;
                                    ArtificialIntelligenceAccess[i].Y -= Math.sin(twrdsUnit) * 100;
                                    ArtificialIntelligenceAccess[i].stunIII = true;
                                    ArtificialIntelligenceAccess[i].stunTimer = 2;
                                    ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                                }
                            }
                            else if (this.ability == "knockbackIII")
                            {
                                if (Math.max(0, this.magicalDamage - Math.max(0, ArtificialIntelligenceAccess[i].magicalResistance)) > 0)
                                {
                                    var twrdsUnit = Math.atan2(Y - ArtificialIntelligenceAccess[i].Y, X - ArtificialIntelligenceAccess[i].X);
                                    ArtificialIntelligenceAccess[i].X -= Math.cos(twrdsUnit) * 100;
                                    ArtificialIntelligenceAccess[i].Y -= Math.sin(twrdsUnit) * 100;
                                    ArtificialIntelligenceAccess[i].stunIII = true;
                                    ArtificialIntelligenceAccess[i].stunTimer = 3;
                                    ArtificialIntelligenceAccess[i].stunTime = new Date().getTime();
                                }
                            }
                            else if (this.ability == "freeze")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].frozenTime = new Date().getTime();
                                }
                            }
                            else if (this.ability == "poisonI")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].acidI = true;
                                    ArtificialIntelligenceAccess[i].acidTime = new Date().getTime() + 90000;
                                    if (nonPlayer)
                                    {
                                        ArtificialIntelligenceAccess[i].killNotByPlayer = true;
                                    }
                                }
                            }
                            else if (this.ability == "poisonII")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].acidII = true;
                                    ArtificialIntelligenceAccess[i].acidTime = new Date().getTime() + 90000;
                                    if (nonPlayer)
                                    {
                                        ArtificialIntelligenceAccess[i].killNotByPlayer = true;
                                    }
                                }
                            }
                            else if (this.ability == "poisonIII")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].acidIII = true;
                                    ArtificialIntelligenceAccess[i].acidTime = new Date().getTime() + 90000;
                                    if (nonPlayer)
                                    {
                                        ArtificialIntelligenceAccess[i].killNotByPlayer = true;
                                    }
                                }
                            }
                            else if (this.ability == "burning")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].burningTime = new Date().getTime();
                                }
                            }
                            else if (this.ability == "longBurning")
                            {
                                ArtificialIntelligenceAccess[i].burningTime = new Date().getTime() + 5000;
                            }
                            else if (this.ability == "leach")
                            {
                                if (Math.max(0, this.damage - Math.max(0, ArtificialIntelligenceAccess[i].armour - this.negateArmour)) > 0)
                                {
                                    ArtificialIntelligenceAccess[i].health -= Math.max(0, 12 - ArtificialIntelligenceAccess[i].magicalResistance);

                                    var counterOrbCount = 0;
                                    if (ArtificialIntelligenceAccess[i].health < 0)
                                    {
                                        counterOrbCount = Math.round(- ArtificialIntelligenceAccess[i].health);
                                    }
                                    var orbsAllowed = Math.max(0, 12 - ArtificialIntelligenceAccess[i].magicalResistance - counterOrbCount);
                                    for (var j = 0; j < orbsAllowed; j++)
                                    {
                                        magicList.push(new Magic({ID: "drainOrb"}, false, 0, ArtificialIntelligenceAccess[i]));
                                    }
                                }
                            }

                            if (this.thrown == true && this.isPlayerProjectile == true && this.thrownID != "none")
                            {
                                scenicList.push(new Scenery(this.thrownID, this.X, this.Y, this.thrownRotation, false));
                            }

                            //Self Delete Projectile
                            for (var j = list.length - 1; j > -1; j--)
                            {
                                if (list[j] == this)
                                {
                                    list.splice(j, 1);
                                    this.doNada = true;
                                    break;
                                }
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
                    if (player.mageShield > 0)
                    {
                        player.mageShield -= Math.max(0, this.damage + Math.max(0, (2/3 * this.magicalDamage) - (2 * player.magicalResistance)));
                    }
                    else
                    {
                        player.health += player.mageShield;
                        player.mageShield = 0;

                        player.health -= Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) + Math.max(0, this.magicalDamage - player.magicalResistance) + player.mageShield;

                        if (this.ability == "stunI")
                        {
                            if (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                            {
                                player.stunnedI = true;
                                player.stunnedTime = 5;
                            }
                        }
                        else if (this.ability == "burning")
                        {
                            if (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                            {
                                player.burningTime = new Date().getTime();
                            }
                        }
                        else if (this.ability == "freeze")
                        {
                            if (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                            {
                                player.frozenTime = new Date().getTime();
                            }
                        }
                        else if (this.ability == "poisonI")
                        {
                            if (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                            {
                                player.poisonI = true;
                            }
                        }
                        else if (this.ability == "poisonII")
                        {
                            if (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                            {
                                player.poisonII = true;
                            }
                        }
                        else if (this.ability == "poisonIII")
                        {
                            if (Math.max(0, this.damage - Math.max(0, player.armourTotal - this.negateArmour)) > 0)
                            {
                                player.poisonIII = true;
                            }
                        }
                        else if (this.ability == "longBurning")
                        {
                            player.burningTime = new Date().getTime() + 5000;
                        }
                    }

                    for (var j = list.length - 1; j > -1; j--)
                    {
                        if (list[j] == this)
                        {
                            list.splice(j, 1);
                            this.doNada = true;
                            break;
                        }
                    }
                }
            }
        }
    };

    //This function determines what the projectile will do and how it will draw when it is called based on its type.
    this.projectileBuilder = function()
    {
        //If the player is the source of this projectile then the projectile lets the players shots avoid hitting the players allies while also informing the class that it is the player's projectile.
        if (typeof(this.team) == "undefined")
        {
            this.team = "player";
            this.isPlayerProjectile = true;
        }

        if (type == "arrow")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
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
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
        else if (type == "steelArrow")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
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
                XXX.drawImage(poly, 182, 104, 23, 9, 0, 0, 34.5, 13.5);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
                XXX.drawImage(poly, 182, 104, 23, 9, 0, 0, 34.5, 13.5);
                XXX.restore();
            }
        }
        else if (type == "freezingArrow")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
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
                XXX.drawImage(mofu, 66, 73, 22, 9, 0, 0, 33, 13.5);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
                XXX.drawImage(mofu, 66, 73, 22, 9, 0, 0, 33, 13.5);
                XXX.restore();
            }
        }
        else if (type == "windArrow")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
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
                XXX.drawImage(gent, 571, 1873, 31, 10, 0, 0, 31, 10);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
                XXX.drawImage(gent, 571, 1873, 31, 10, 0, 0, 31, 10);
                XXX.restore();
            }
        }
        else if (type == "timeArrow")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.speed = speed / timeSpeed;
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
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.speed = speed / timeSpeed;
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
        else if (type == "fireArrow")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
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
                XXX.drawImage(mofu, 66, 80, 22, 9, 0, 0, 33, 13.5);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
                XXX.drawImage(mofu, 66, 80, 22, 9, 0, 0, 33, 13.5);
                XXX.restore();
            }
        }
        else if (type == "lifeLeachArrow")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
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
                XXX.drawImage(mofu, 65, 88, 22, 9, 0, 0, 33, 13.5);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
            {
                //todo add the complicated life drain spell equivelent for the AI in the Leach ability section.
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
                XXX.drawImage(mofu, 65, 88, 22, 9, 0, 0, 33, 13.5);
                XXX.restore();
            }
        }
        else if (type == "oiledArrow")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.shoot();
                this.impact();

                if (this.canLight)
                {
                    this.ability = "burning";
                    this.flameTic += 1;
                    if (this.flameTic % 307)
                    {
                        this.flameFrame += 1;

                        if (this.flameFrame > 2)
                        {
                            this.flameFrame = 0;
                        }
                    }
                }
                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                if (this.canLight)
                {
                    if (this.flameFrame == 0)
                    {
                        XXX.drawImage(mofu, 66, 49, 23, 8, 0, 0, 34.5, 12);
                    }
                    else if (this.flameFrame == 1)
                    {
                        XXX.drawImage(mofu, 66, 41, 23, 8, 0, 0, 34.5, 12);
                    }
                    else if (this.flameFrame == 2)
                    {
                        XXX.drawImage(mofu, 66, 32, 23, 8, 0, 0, 34.5, 12);
                    }
                }
                else
                {
                    XXX.drawImage(mofu, 67, 57, 19, 7, 0, 0, 28.5, 10.5);
                }
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.ability = "burning";
                this.flameTic += 1;
                if (this.flameTic % 307)
                {
                    this.flameFrame += 1;

                    if (this.flameFrame > 2)
                    {
                        this.flameFrame = 0;
                    }
                }
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation + (1 / 2 * Math.PI));
                if (this.flameFrame == 0)
                {
                    XXX.drawImage(mofu, 66, 49, 23, 8, 0, 0, 34.5, 12);
                }
                else if (this.flameFrame == 1)
                {
                    XXX.drawImage(mofu, 66, 41, 23, 8, 0, 0, 34.5, 12);
                }
                else if (this.flameFrame == 2)
                {
                    XXX.drawImage(mofu, 66, 32, 23, 8, 0, 0, 34.5, 12);
                }
                XXX.restore();
            }
        }
        else if (type == "shehidToxinArrow")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
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
                XXX.drawImage(mofu, 66, 21, 22, 9, 0, 0, 33, 13.5);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
                XXX.drawImage(mofu, 66, 21, 22, 9, 0, 0, 33, 13.5);
                XXX.restore();
            }
        }
        else if (type == "steelBolt")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                XXX.drawImage(verse, 3173, 1, 25, 9, 0, 0, 30, 10.8);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation + (1 / 2 * Math.PI));
                XXX.drawImage(verse, 3173, 1, 25, 9, 6, -6, 30, 10.8);
                XXX.restore();
            }
        }
        else if (type == "ironBolt")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                XXX.drawImage(hydra, 293, 603, 18, 9, 0, 0, 18, 9);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
                XXX.drawImage(hydra, 293, 603, 18, 9, 0, 0, 18, 9);
                XXX.restore();
            }
        }
        else if (type == "zetianBlowdart")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
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
                XXX.rotate(this.rotation);
                XXX.drawImage(raed, 525, 117, 11, 22, -1/2 * 11, -1/2 * 22, 11, 22);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
                XXX.rotate(this.rotation + Math.PI);
                XXX.drawImage(raed, 525, 117, 11, 22, -1/2 * 11, -1/2 * 22, 11, 22);
                XXX.restore();
            }
        }
        else if (type == "zetianRattlerBlowdart" || type == "zetianRattlerBlowdartThick")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
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
                XXX.rotate(this.rotation);
                XXX.drawImage(raed, 542, 115, 11, 23, -1/2 * 11, -1/2 * 23, 11, 23);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
                XXX.rotate(this.rotation + Math.PI);
                XXX.drawImage(raed, 542, 115, 11, 23, -1/2 * 11, -1/2 * 23, 11, 23);
                XXX.restore();
            }
        }
        else if (type == "vardanianThrowingSpear") //thrown
        {
            this.radius = 9;
            this.thrown = true;
            this.thrownID = "vardanianThrowingSpear";
            this.thrownRotation = this.rotation + (1 / 2 * Math.PI);

            if (list == playerProjectiles && this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.damage = damage;
                this.magicalDamage = magicDamage;
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation + (1 / 2 * Math.PI));
                XXX.drawImage(ribak, 973, 6, 91, 16, 0, 0, 91, 16);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.damage = damage;
                this.magicalDamage = magicDamage;
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                XXX.drawImage(ribak, 973, 6, 91, 16, 0, 0, 91, 16);
                XXX.restore();
            }
        }
        else if (type == "throwingStar") //thrown
        {
            this.radius = 3;
            this.thrown = true;
            this.thrownID = "throwingStar";
            this.thrownRotation = this.rotation + (1 / 2 * Math.PI);
            if (this.spin == 0)
            {
                this.speed = this.speed / 4;
            }
            this.spin += 0.24;

            if (list == playerProjectiles && this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.damage = damage;
                this.magicalDamage = magicDamage;
                this.shoot();
                this.impact();
                //fade
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.spin);
                XXX.globalAlpha = 0.1;
                XXX.drawImage(theCrack, 207, 402, 9, 9, -1/2 * (9 * 1.4), -1/2 * (9 * 1.4), 9 * 1.4, 9 * 1.4);
                XXX.restore();
                this.spin += 0.24;
                this.shoot();
                this.impact();
                //fade
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.spin);
                XXX.globalAlpha = 0.2;
                XXX.drawImage(theCrack, 207, 402, 9, 9, -1/2 * (9 * 1.4), -1/2 * (9 * 1.4), 9 * 1.4, 9 * 1.4);
                XXX.restore();
                this.spin += 0.24;
                this.shoot();
                this.impact();
                //fade
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.spin);
                XXX.globalAlpha = 0.4;
                XXX.drawImage(theCrack, 207, 402, 9, 9, -1/2 * (9 * 1.4), -1/2 * (9 * 1.4), 9 * 1.4, 9 * 1.4);
                XXX.restore();
                this.spin += 0.24;
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.spin);
                XXX.drawImage(theCrack, 207, 402, 9, 9, -1/2 * (9 * 1.4), -1/2 * (9 * 1.4), 9 * 1.4, 9 * 1.4);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.damage = damage;
                this.magicalDamage = magicDamage;
                this.shoot();
                this.impact();
                //fade
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.spin);
                XXX.globalAlpha = 0.1;
                XXX.drawImage(theCrack, 207, 402, 9, 9, -1/2 * (9 * 1.4), -1/2 * (9 * 1.4), 9 * 1.4, 9 * 1.4);
                XXX.restore();
                this.spin += 0.24;
                this.shoot();
                this.impact();
                //fade
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.spin);
                XXX.globalAlpha = 0.2;
                XXX.drawImage(theCrack, 207, 402, 9, 9, -1/2 * (9 * 1.4), -1/2 * (9 * 1.4), 9 * 1.4, 9 * 1.4);
                XXX.restore();
                this.spin += 0.24;
                this.shoot();
                this.impact();
                //fade
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.spin);
                XXX.globalAlpha = 0.4;
                XXX.drawImage(theCrack, 207, 402, 9, 9, -1/2 * (9 * 1.4), -1/2 * (9 * 1.4), 9 * 1.4, 9 * 1.4);
                XXX.restore();
                this.spin += 0.24;
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.spin);
                XXX.drawImage(theCrack, 207, 402, 9, 9, -1/2 * (9 * 1.4), -1/2 * (9 * 1.4), 9 * 1.4, 9 * 1.4);
                XXX.restore();
            }
        }
        else if (type == "cheatMachineGunBullet")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.damage = 19;
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation);
                XXX.drawImage(verse, 3854, 492, 3, 19, 0, -40, 4.5, 28.5);
                XXX.restore();
            }
            //no unit list for this cheat item.
        }
        else if (type == "aldrekiiArrow")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
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
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
        else if (type == "bullet")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                //The bullet moves thrice and checks for damaging thrice so it can move fast without skipping small targets.
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                XXX.drawImage(mofu, 1321, 16, 5, 5, 4, 4, 8, 8);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
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
                XXX.drawImage(mofu, 1321, 16, 5, 5, 4, 4, 8, 8);
                XXX.restore();
            }
        }
        else if (type == "5.56MMRound")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.damage = 29;
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                XXX.drawImage(troli, 365, 334, 11, 16, 0, 0, 11, 16);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.damage = 29;
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation + (1 / 2 * Math.PI));
                XXX.drawImage(troli, 365, 334, 11, 16, 0, 0, 11, 16);
                XXX.restore();
            }
        }
        else if (type == "shotgunRound")
        {
            if (list == playerProjectiles && this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.damage = 19;
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation - (1 / 2 * Math.PI));
                XXX.drawImage(gent, 663, 261, 5, 5, 0, 0, 5, 5);
                XXX.restore();
            }
            else if (list == unitProjectiles || list == playerProjectiles && !this.isPlayerProjectile)
            {
                //WHAT IT WILL DO...
                player.projYAd = 0;
                player.projXAd = 0;
                this.setStats();
                this.damage = 19;
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();
                this.shoot();
                this.impact();

                //HOW IT WILL DRAW...
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(this.rotation + (1 / 2 * Math.PI));
                XXX.drawImage(gent, 663, 261, 5, 5, 0, 0, 5, 5);
                XXX.restore();
            }
        }

        //projectiles are accompanied by a gross psycodelic halucination if on a drug trip
        if (player.bahabTrip)
        {
            var randip = Math.random();

            if (randip < 0.25)
            {
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(2*Math.PI * Math.random());
                XXX.globalAlpha = 0.95;
                XXX.drawImage(stic, 27, 349, 66, 57, 0, 0, 66, 57);
                XXX.restore();
            }
            else if (randip < 0.50)
            {
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(2*Math.PI * Math.random());
                XXX.globalAlpha = 0.95;
                XXX.drawImage(stic, 30, 410, 66, 57, 0, 0, 66, 57);
                XXX.restore();
            }
            else if (randip < 0.75)
            {
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(2*Math.PI * Math.random());
                XXX.globalAlpha = 0.95;
                XXX.drawImage(stic, 30, 471, 66, 57, 0, 0, 66, 57);
                XXX.restore();
            }
            else if (randip <= 1)
            {
                XXX.save();
                XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
                XXX.rotate(2*Math.PI * Math.random());
                XXX.globalAlpha = 0.95;
                XXX.drawImage(stic, 34, 532, 66, 57, 0, 0, 66, 57);
                XXX.restore();
            }
        }

        if (player.cyrinthilimTrip)
        {
            XXX.save();
            XXX.translate(X - this.X + (1 / 2 * CCC.width), Y - this.Y + (1 / 2 * CCC.height));
            XXX.rotate(this.rotation + (1 / 2 * Math.PI));
            XXX.drawImage(polyPNG, 876, 707, 70, 42, 0, 0, 70 / 2, 42 / 2);
            XXX.restore();
        }
    };

    this.operations = function()
    {
        this.projectileBuilder();
    };
}