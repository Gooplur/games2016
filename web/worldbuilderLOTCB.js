/**
 * Created by skyeguy on 1/22/17.
 */
function worldBuilder()
{
    // THIS IS THE BACKGROUND BUILDER (height, width, type, x, y) // The tile coords 0, 0 are at the bottom right corner of Teshir City.
    //Different parts of the world load at different Y values. // maps are 34 by 34 tiles and for some reason the maps are -20 to the left. and + 14 down.
    if (map == "world")
    {
        //Layer -3 (cold temperate region) //mapS3
        if (Y > -34556 && Y < -23654 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s3";
            outlineBuilder( 34, 34, "greenGrass", -20, 82);
            outlineBuilder( 34, 1, "stonePath", 3, 82);
            outlineBuilder( 4, 4, "kelltile", 4, 103);
            outlineBuilder( 1, 1, "farmland", 8, 104);
        }
        //Layer -3 (cold temperate region) //mapS3 E1
        if (Y > -34556 && Y < -23654 && X < - 2490 && X > -14114) //X1
        {
            elevation = -1;
            region = "s3e1";
            outlineBuilder( 4, 34, "greenGrass", 14, 82);
            outlineBuilder( 30, 4, "muckgrass", 44, 86);
            outlineBuilder( 30, 6, "greenGrass", 14, 86);
            outlineBuilder( 4, 1, "greenGrass", 20, 93);
            outlineBuilder( 2, 2, "greenGrass", 20, 97);
            outlineBuilder( 34, 1, "forest", 14, 82);
            outlineBuilder( 7, 3, "muckgrass", 20, 86);
            outlineBuilder( 4, 2, "muckgrass", 21, 93);
            outlineBuilder( 1, 11, "muckgrass", 22, 85);
            outlineBuilder( 15, 3, "muckgrass", 20, 99);
            outlineBuilder( 5, 1, "greenGrass", 20, 111);
            outlineBuilder( 2, 28, "greenGrass", 20, 114);
            outlineBuilder( 2, 26, "muckgrass", 22, 112);
            outlineBuilder( 2, 8, "muckgrass", 23, 110);
            outlineBuilder( 24, 21, "muck", 23, 86);
            outlineBuilder( 1, 17, "muck", 28, 110);
            outlineBuilder( 1, 14, "muck", 31, 111);
            outlineBuilder( 2, 2, "muckgrass", 22, 97);
            outlineBuilder( 1, 2, "muckgrass", 23, 99);
            outlineBuilder( 2, 14, "muckgrass", 30, 86);
            //outlineBuilder( 1, 1, "muckgrass", 8, 104);
        }
        //Layer -2 (cold temperate region)//mapS2
        if (Y > -24704 && Y < -13476 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s2";
            outlineBuilder( 34, 34, "greenGrass", -20, 48);
            outlineBuilder( 34, 1, "stonePath", 3, 48);
            outlineBuilder( 1, 7, "stonePath", -4, 48);
            outlineBuilder( 8, 10, "forest", -13, 62); //little patch of forest in the middle of the kellish northern plains
            outlineBuilder( 1, 5, "forest", -13, 61); //^
            outlineBuilder( 1, 3, "forest", -7, 61); //^
            outlineBuilder( 1, 3, "forest", -12, 60); //^
            outlineBuilder( 5, 1, "forest", -3, 64); //^
            outlineBuilder( 3, 1, "forest", -14, 65); //^
            outlineBuilder( 1, 6, "forest", -10, 70); //^
        }
        //Layer -1 (cold temperate region)//mapS1
        if (Y > -14144 && Y < -3328 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s1";
            outlineBuilder( 34, 34, "greenGrass", -20, 14);
            outlineBuilder( 34, 1, "stonePath", -4, 14);
            //outlineBuilder( 1, 1, "forest", -4, 14);
        }
        //Layer 0 (cold region)//mapCentral
        if (Y > -3919 && Y < 6870 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
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
            outlineBuilder( 2, 3, "farmland", -7, 1);
        }
        //mapS1 E1
        if (Y > -14144 && Y < -3328 && X < - 2490 && X > -14114) //X1
        {
            elevation = -1;
            region = "s1e1";
            outlineBuilder( 34, 34, "outline", 14, 14);
            outlineBuilder( 1, 22, "forest", 26, 14);
            outlineBuilder( 1, 20, "forest", 28, 15);
            outlineBuilder( 1, 13, "forest", 35, 16);
            outlineBuilder( 1, 9, "forest", 39, 17);
            outlineBuilder( 1, 7, "forest", 41, 18);
            outlineBuilder( 1, 4, "forest", 44, 19);
        }
        //layer 1 (frosty region) anti warmth effects start here
        if (Y > 6290 && Y < 32370) //this is the cold snowy environment //X0
        {
            elevation = 1;
            region = "n1";
            outlineBuilder( 20, 83, "frost", -80, -40); //frost
            outlineBuilder( 80, 83, "snow", -80, -105); //snow
        }
        //mapE2
        if (Y > -3919 && Y < 6870 && X < -12685 && X > -24362) //X1
        {
            elevation = 0;
            region = "e2";
            outlineBuilder( 34, 34, "forest", 48, -20);
            outlineBuilder( 1, 34, "stonePath", 48, -3);
        }
        //mapE1
        if (Y > -3919 && Y < 6870 && X < - 2490 && X > -14114) //X1
        {
            elevation = 0;
            region = "e1";
            outlineBuilder( 34, 22, "forest", 26, -20);
            outlineBuilder( 7, 2, "greenGrass", 26, -18);
            outlineBuilder( 4, 3, "greenGrass", 28, -17);
            outlineBuilder( 1, 2, "greenGrass", 28, -13);
            outlineBuilder( 2, 1, "greenGrass", 26, -20);
            outlineBuilder( 34, 12, "greenGrass", 14, -20);
            outlineBuilder( 7, 1, "greenGrass", 26, -7);
            outlineBuilder( 6, 2, "greenGrass", 26, 3);
            outlineBuilder( 3, 1, "greenGrass", 28, 5);
            outlineBuilder( 4, 1, "greenGrass", 26, 9);
            outlineBuilder( 1, 2, "greenGrass", 26, -4);
            outlineBuilder( 1, 34, "stonePath", 14, -3);
        }
        //mapW1
        if (Y > -3919 && Y < 6870 && X < 17891 && X > 6299) //X-1
        {
            elevation = 0;
            region = "w1";
            outlineBuilder( 14, 6, "crag", -40, -20);
            outlineBuilder( 14, 6, "crag", -40, 0);
            outlineBuilder( 34, 14, "crag", -54, -20);
            outlineBuilder( 34, 14, "crag", -34, -20);
            outlineBuilder( 6, 6, "crag", -40, -6);
        }
        //layer 2 (freezing region)
        if (Y > 31750 && Y < 77360) //this is the freezing arctic environment //X0
        {
            elevation = 2;
            region = "n2";
            outlineBuilder( 150, 83, "snow", -80, -255);
        }
        //layer 3 (freezing region)
        if (Y > 76780) //this is the north Pole... basically. //X0
        {
            elevation = 2;
            region = "n3";
            outlineBuilder( 150, 83, "snow", -80, -405);
        }
    }
}

// This is the template for building a map out of tiles.
function outlineBuilder(width, length, terrain, extraX, extraY)
{
    for(var i = 0; i < width; i++)
    {
        for(var j = 0; j < length; j++)
        {
            if ((j - 1) * 300 + (extraX * 300) >= -X - 1 * CCC.width && (j - 1) * 300 + (extraX * 300) <= -X + 1 * CCC.width && (i - 1) * 300 + (extraY * 300) >= -Y - 1 * CCC.height && (i - 1) * 300 + (extraY * 300) <= -Y + 1 * CCC.height)
            {
                if (player.cyrinthilimTrip || player.haeflowerTrip)
                {
                    if (player.cyrinthilimTrip)
                    {
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.scale(Math.random() * 6 + 1,Math.random() * 6 + 1);
                        XXX.drawImage(blurDots, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                    else if (player.haeflowerTrip)
                    {
                        haeRotate += 0.22;
                        XXX.beginPath();
                        XXX.fillStyle = "pink";
                        XXX.strokeStyle = "pink";
                        XXX.rect((j-1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.fill();
                        XXX.stroke();
                    }
                }
                else if (terrain == "outline")
                {
                    XXX.beginPath();
                    XXX.fillStyle = "white";
                    XXX.strokeStyle = "black";
                    XXX.rect((j-1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    XXX.fill();
                    XXX.stroke();
                }
                else if (terrain == "muckgrass")
                {
                    XXX.drawImage(bogGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "muck")
                {
                    XXX.drawImage(bogMuckEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "kellstone")
                {
                    XXX.drawImage(kellStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "kelltile")
                {
                    XXX.drawImage(kellsStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "farmland")
                {
                    XXX.drawImage(farmground, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "greenGrass")
                {
                    XXX.drawImage(lushGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "hotGrass")
                {
                    XXX.drawImage(greenGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "jungle")
                {
                    XXX.drawImage(forestEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "crag")
                {
                    XXX.drawImage(rockyFlatEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "desert")
                {
                    XXX.drawImage(sandyEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "frost")
                {
                    XXX.drawImage(snowyEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "stoneWork")
                {
                    XXX.drawImage(stoneWorkEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "molten")
                {
                    XXX.drawImage(volcanicEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "dryGrass")
                {
                    XXX.drawImage(dryGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "snow")
                {
                    XXX.drawImage(snowEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "stonePath")
                {
                    XXX.drawImage(stonePathEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "brokenStonePath")
                {
                    XXX.drawImage(brokenStonePathEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "arctic")
                {
                    XXX.drawImage(frozenEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "forest")
                {
                    XXX.drawImage(nordWoods, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
            }
        }

    }
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
                //worldItems = [];

                //Delete All Non-native Structures
                //todo when structures are created add their list's refresh sequence here.

                //Delete All Non-native Scenery
                scenicList = [];

                //REGION CREATION
                //Build AI Units
                //The master thief of teshir
                if (quests.theMasterThiefOfTeshirNeevSlain != true)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2100, 1050, "Neev", false, "Easter"));
                }

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
                ArtificialIntelligenceAccess.push(new Unit(-730, 3592, "Frich", false, "Richard"));
                ArtificialIntelligenceAccess.push(new Unit(-923, 3404, "Frich", false, "John"));
                ArtificialIntelligenceAccess.push(new Unit(-955, 3520, "Frich", true, "Izzy"));
                ArtificialIntelligenceAccess.push(new Unit(-910, 3645, "Frich", false, "Charles"));
                ArtificialIntelligenceAccess.push(new Unit(-596, 3860, "Frich", false, "Edward"));
                ArtificialIntelligenceAccess.push(new Unit(-30, -833, "Frich", true, "Chak"));
                ArtificialIntelligenceAccess.push(new Unit(-221, -891, "Frich", false, "Eduk"));
                ArtificialIntelligenceAccess.push(new Unit(-121, -1062, "Frich", false, "Toog"));
                ArtificialIntelligenceAccess.push(new Unit(-389, 2569, "Frich", false, "Gud"));
                ArtificialIntelligenceAccess.push(new Unit(-1673, -2423, "Frich", true, "mayonzuko"));
                //Alpha only frich pack guarding the lone farm house
                ArtificialIntelligenceAccess.push(new Unit(-885, -1994, "Frich", true, "Chucky"));
                ArtificialIntelligenceAccess.push(new Unit(-836, -2136, "Frich", true, "Chucky2"));
                ArtificialIntelligenceAccess.push(new Unit(-1048, -1858, "Frich", true, "Chucky3"));
                ArtificialIntelligenceAccess.push(new Unit(-1156, -1766, "Frich", true, "Chucky4"));
                ArtificialIntelligenceAccess.push(new Unit(-1277, -1974, "Frich", true, "Chucky5"));
                ArtificialIntelligenceAccess.push(new Unit(-1080, -2190, "Frich", true, "Chucky6"));

                if (quests.huntingWagerFrichPack == true && quests.huntingWagerKillCount < 3)
                {
                    if (quests.huntingWagerKillCount == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3665, -624, "Frich", "massive", "Pucker"));
                        ArtificialIntelligenceAccess.push(new Unit(3927, -494, "Frich", "massive", "Tucker"));
                        ArtificialIntelligenceAccess.push(new Unit(3792, -802, "Frich", "massive", "Hunky-Dory"));
                    }
                    else if (quests.huntingWagerKillCount == 1)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3665, -624, "Frich", "massive", "Pucker"));
                        ArtificialIntelligenceAccess.push(new Unit(3927, -494, "Frich", "massive", "Tucker"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3792, -802, "Frich", "massive", "Hunky-Dory"));
                    }
                }


                //Citizens of Teshir

                //Projectile(TYPE ultra.ranged[1],startX, startY, startAngle, SPEED ultra.ranged[2], RANGE ultra.ranged[3], NEGATION ultra.ranged[4], list, DAMAGE ultra.ranged[5], MAGIC DAMAGE ultra.ranged[6], ABILITY ultra.ranged[7])

                ArtificialIntelligenceAccess.push(new Unit(1661, 2311, "Soldier", false, "Torg Captain", {race: "Freynor", faction: "Freynor", con: 9, speed: 1.15, outfit: ["chainArmour", 10], weapon: ["freydicGreatSword", [25, 14], 0, 35, 2.25], ranged: [false, "arrow", 7, 1800, 1, 6, 0, "stunI", 2.4], patrolStops: 4, patrolLoop: true, route:[[1654, 1507], [1661, 2311], [1864, 2315], [1852, 1499]]}));
                ArtificialIntelligenceAccess.push(new Unit(2254, 311, "Soldier", false, "Torg Soldier", {race: "Freynor", faction: "Freynor", con: 5, speed: 1.50, outfit: ["chainArmour", 7], weapon: ["freydicSword", [9, 7], 0, 16, 1], ranged: [false, "arrow", 5, 1500, 1, 3, 0, "none", 1.50], patrolStops: 3, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                ArtificialIntelligenceAccess.push(new Unit(2741, 1421, "Soldier", false, "Torg Soldier", {race: "Freynor", faction: "Freynor", con: 4, speed: 1.25, outfit: ["chainArmour", 9], weapon: ["freydicSword", [8, 6], 0, 16, 1], ranged: [false, "arrow", 7, 2000, 1, 6, 0, "none", 1.25], patrolStops: 4, patrolLoop: true, route:[[1833, 1424], [1848, 2413], [3046, 2407], [2741, 1421]]}));
                ArtificialIntelligenceAccess.push(new Unit(1247, 1210, "Soldier", false, "Torg Soldier", {race: "Freynor", faction: "Freynor", con: 6, speed: 1.40, outfit: ["chainArmour", 8], weapon: ["freydicSword", [8, 9], 0, 16, 1], ranged: [false, "arrow", 6, 1950, 1, 4, 0, "none", 1.35], patrolStops: 6, patrolLoop: true, route:[[901, 1195], [969, 527], [1932, 549], [1941, 814], [1932, 549], [969, 527]]}));
                ArtificialIntelligenceAccess.push(new Unit(2584, 1385, "Person", false, "Freynor Villager", {race: "Freynor", faction: "Freynor", personality: "calculated", outfit: ["frichFurClothing", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 5, patrolLoop: true, route:[[2523, 2061], [2041, 2046], [2036, 2118], [2594, 2169], [2584, 1385]]}));
                ArtificialIntelligenceAccess.push(new Unit(2338, 1205, "Person", false, "Freynor Villager", {race: "Freynor", faction: "Freynor", personality: "calculated", outfit: ["frichFurClothing", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 4, patrolLoop: true, route:[[1622, 1196], [1655, 1300], [2518, 1366], [2338, 1205]]}));
                ArtificialIntelligenceAccess.push(new Unit(2335, 924, "Person", false, "Freynor Villager", {race: "Freynor", faction: "Freynor", personality: "calculated", outfit: ["frichFurClothing", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 5, patrolLoop: true, route:[[1355, 935], [1402, 1962], [1402, 1962], [1461, 902], [2335, 924]]}));

                if (uniqueChars.drohforLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Drohfor")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(2583, 818, "Person", false, "Drohfor", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["walrusLeatherArmour", 5], weapon: ["longbow", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [true, "arrow", 8, 2000, 1, 6, 0, "none", 0.95], patrolStops: 6, patrolLoop: true, route:[[2001, 658], [2252, -509], [2423, -588], [2032, 440], [2030, 770], [2583, 818]]}));
                    }
                }
                if (quests.teshirNorthRoadQuest != "complete")
                {
                    if (uniqueChars.togginLDS == true)
                    {
                        var hits = 0;
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Toggin")
                            {
                                hits += 1;
                            }
                        }
                        if (hits == 0)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(739, 1830, "Person", false, "Toggin", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["blackBearFurClothing", 0], weapon: ["timberAxe", [10, 4], 1.5, 12, 1.55], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 3, patrolLoop: true, route:[[739, 1830], [756, 1635], [840, 1603]]}));
                        }
                    }
                }
                if (uniqueChars.kedwinLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Kedwin")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(2317, 2074, "Person", false, "Kedwin", {race: "Freynor", faction: "Freynor", personality: "calculated", outfit: ["frichFurClothing", 0], weapon: ["none", [0.5, 1], 0, 0, 1.1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 3, patrolLoop: true, route:[[2212, 2071], [2317, 2074], [2244, 2063]]}));
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Kedwin")
                            {
                                ArtificialIntelligenceAccess[i].healthMAX = 19;
                                ArtificialIntelligenceAccess[i].health = 19;
                            }
                        }
                    }
                }
                if (uniqueChars.garldLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Garld the Crazy Beggar" || ArtificialIntelligenceAccess[i].ID == "Garld, Sage of Gemith")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(1282, 1622, "Person", false, "Garld the Crazy Beggar", {race: "Freynor", faction: "Freynor", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.5, 1], 0, 0, 1.1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[2072, 1535], [1939, 1509], [2033, 1499]]}));
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Garld the Crazy Beggar" || ArtificialIntelligenceAccess[i].ID == "Garld, Sage of Gemith")
                            {
                                ArtificialIntelligenceAccess[i].healthMAX = 12.1;
                                ArtificialIntelligenceAccess[i].health = 12.1;
                            }
                        }
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
                        ArtificialIntelligenceAccess.push(new Unit(2232, 1142, "Person", false, "Odee the Banker", {race: "Orgell", faction: "Freynor", personality: "calculated", outfit: ["winterWolfClothing", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.85], ranged: [false, "arrow", 8, 2000, 1, 6, 0, "none", 0.95], patrolStops: 0, patrolLoop: false, route:[[2200, 1460]], banker: true}));
                    }
                }
                if (uniqueChars.stendorLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Torg Commissioner Stendor")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(1949, 2282, "Soldier", false, "Torg Commissioner Stendor", {race: "Freynor", faction: "Freynor", con: 12, speed: 1.32, outfit: ["chainArmour", 10], weapon: ["freydicGreatSword", [25, 14], 0, 35, 2.25], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], patrolStops: 0, patrolLoop: true, route:[[1654, 1507], [1661, 2311], [1864, 2315], [1852, 1499]]}));
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
                        ArtificialIntelligenceAccess.push(new Unit(1171, 699, "Person", false, "Laandeg the Alchemist", {race: "Freynor", faction: "Freynor", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 1.1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[744, 1133], [801, 1156], [840, 373], [744, 1545]], merchant: true, merchandise: [[new Item("coins", false, false), 29], [new Item("culprisBandage", false, false), 2], [new Item("healingSalve", false, false), 4], [new Item("trollsBlood", false, false), 1], [new Item("rawTrollsBlood", false, false), 1], [new Item("cleansingPotion", false, false), 1], [new Item("energyPotionI", false, false), 3], [new Item("speedPotionI", false, false), 2], [new Item("energilPotionI", false, false), 2], [new Item("energilPotionII", false, false), 1], [new Item("potionGlass", false, false), 18], [new Item("glassJar", false, false), 14], [new Item("rawWolfLiver", false, false), 4]]}));
                    }
                }
                if (uniqueChars.hilmundLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Hilmund the Innkeeper")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(2346, 1756, "Person", false, "Hilmund the Innkeeper", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["none", 0], weapon: ["none", [0.3, 0.7], 0, 0, 0.8], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2164, 1656]], merchant: true, merchandise: [[new Item("coins", false, false), 86 + quests.hilmundNewWealth], [new Item("harstAle", false, false), 64], [new Item("pluttWine", false, false), 19], [new Item("glassBottleOfPluttWine", false, false), 6], [new Item("pluttCiderPintGlass", false, false), 7], [new Item("waterPintGlass", false, false), 9], [new Item("bucketOfWater", false, false), 1], [new Item("walrusLeatherWaterskinFull", false, false), 11], [new Item("walrusMeat", false, false), 8], [new Item("bearMeat", false, false), 3], [new Item("winterWolfMeat", false, false), 5], [new Item("frichMeat", false, false), 17], [new Item("wolfLiver", false, false), 6], [new Item("harstBread", false, false), 1], [new Item("suuliMelonSlice", false, false), 14]]}));
                    }
                }
                if (uniqueChars.bobithLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Svehn the Smith")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        if (quests.lostDeliveryCompletionStyle != "keptShipment" && quests.lostDeliveryQuest == "complete")
                        {
                            ArtificialIntelligenceAccess.push(new Unit(1690, 1021, "Person", false, "Svehn the Smith", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.65], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 124 + quests.bobithNewWealth], [new Item("thriceForgedSteel", false, false), 1], [new Item("steel", false, false), 8], [new Item("iron", false, false), 6], [new Item("mace", false, false), 3], [new Item("hammer", false, false), 2], [new Item("freydicSpear", false, false), 5], [new Item("freydicSword", false, false), 2], [new Item("freydicWarAxe", false, false), 1], [new Item("freydicGreatSword", false, false), 1], [new Item("chainArmour", false, false), 2], [new Item("longbow", false, false), 2], [new Item("arrow", false, false), 92], [new Item("steelArrow", false, false), 61], [new Item("timberAxe", false, false), 3], [new Item("nirineseSpear", false, false), 1], [new Item("nirineseSabre", false, false), 1], [new Item("pickaxe", false, false), 1], [new Item("beartrap", false, false), 1]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(1690, 1021, "Person", false, "Svehn the Smith", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.65], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 103 + quests.bobithNewWealth], [new Item("steel", false, false), 8], [new Item("iron", false, false), 6], [new Item("mace", false, false), 3], [new Item("hammer", false, false), 2], [new Item("freydicSpear", false, false), 5], [new Item("freydicSword", false, false), 2], [new Item("freydicWarAxe", false, false), 1], [new Item("freydicGreatSword", false, false), 1], [new Item("chainArmour", false, false), 2], [new Item("longbow", false, false), 2], [new Item("arrow", false, false), 92], [new Item("steelArrow", false, false), 61], [new Item("timberAxe", false, false), 3], [new Item("pickaxe", false, false), 1], [new Item("beartrap", false, false), 1]]}));
                        }
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
                        ArtificialIntelligenceAccess.push(new Unit(1930, 1793, "Person", false, "Medlia the Merchant", {race: "Freynor", faction: "Freynor", personality: "calculated", outfit: ["winterWolfClothing", 0], weapon: ["none", [0.1, 0.4], 0, 0, 1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 3, patrolLoop: true, route:[[1710, 1717], [1812, 1835], [1713, 1882], [1930, 1793]], merchant: true, merchandise: [[new Item("coins", false, false), 179 + quests.medliaNewWealth], [new Item("wood", false, false), 48], [new Item("tent", false, false), 2], [new Item("fireStarter", false, false), 3], [new Item("jarOfOil", false, false), 1], [new Item("rawWalrusFlesh", false, false), 8], [new Item("walrusHide", false, false), 1], [new Item("walrusTusks", false, false), 1], [new Item("oilLampEmpty", false, false), 2], [new Item("oilLanternEmpty", false, false), 5], [new Item("candle", false, false), 12], [new Item("beesWax", false, false), 9], [new Item("ogardPerfume", false, false), 2], [new Item("frichPelt", false, false), 3], [new Item("rawFrichFlesh", false, false), 22], [new Item("winterWolfPelt", false, false), 3], [new Item("rawWinterWolfFlesh", false, false), 2], [new Item("rawWolfLiver", false, false), 1], [new Item("walrusLeatherWaterskin", false, false), 2], [new Item("harstGrain", false, false), 29], [new Item("potato", false, false), 8], [new Item("carrot", false, false), 13], [new Item("suuliMelon", false, false), 5], [new Item("driedTechiLeaf", false, false), 14], [new Item("ogard", false, false), 1], [new Item("freydicFolkTales", false, false), 1]]}));
                    }
                }
                if (uniqueChars.teberLDS == true && quests.bountyTeberCompletionStyle == "royal pardon")
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Teber the Artisan")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-631, -30389, "Person", false, "Teber the Artisan", {race: "Freynor", faction: "Kel", personality: "scared", outfit: ["winterWolfClothing", 0], weapon: ["none", [0.4, 0.6], 0, 0, 1.15], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 75], [new Item("naapridFiber", false, false), 7], [new Item("pintGlass", false, false), 19], [new Item("potionGlass", false, false), 18], [new Item("glassJar", false, false), 10]]}));
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Teber the Artisan")
                            {
                                ArtificialIntelligenceAccess[i].healthMAX = 29;
                                ArtificialIntelligenceAccess[i].health = 29;
                                ArtificialIntelligenceAccess[i].speed += 0.05;
                                ArtificialIntelligenceAccess[i].grudge = 340;
                            }
                        }
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
                        ArtificialIntelligenceAccess.push(new Unit(2672, 1594, "Person", false, "Maggy the Tailor", {race: "Freynor", faction: "Freynor", personality: "scared", outfit: ["ardilFurSkirt", 0], weapon: ["none", [0.1, 0.4], 0, 0, 1.2], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2836, 2058], [2858, 1524]], merchant: true, merchandise: [[new Item("coins", false, false), 180], [new Item("frichFurClothing", false, false), 12], [new Item("frichFurMittens", false, false), 5], [new Item("varnFurClothing", false, false), 5], [new Item("varnFurCloak", false, false), 2], [new Item("varnFurDress", false, false), 3], [new Item("ardilFurClothing", false, false), 1], [new Item("ardilFurSkirt", false, false), 2], [new Item("ardilFurGloves", false, false), 4], [new Item("winterWolfClothing", false, false), 1], [new Item("winterWolfOutfit", false, false), 1], [new Item("winterWolfDress", false, false), 1], [new Item("naapridLeatherArmour", false, false), 2], [new Item("walrusLeatherArmour", false, false), 3], [new Item("blackBearFurClothing", false, false), 1], [new Item("emptyBagHarst", false, false), 3]]}));
                    }
                }

                //a vardanian merchant who can be kicked out of town in a quest.
                if (uniqueChars.neculaiLDS == true && quests.medliaCompetitionControlQuest != "complete")
                {
                    if (player.raceName != "Freynor" || player.title != "Royalty" || player.raceName == "Freynor" && player.title == "Royalty" && player.vardanFaction >= 0) // if you are royalty of freynor your actions determine the nations friends and enemies.
                    {
                        var hits = 0;
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Neculai the Merchant" || ArtificialIntelligenceAccess[i].ID == "Neculai the Beggar")
                            {
                                hits += 1;
                            }
                        }
                        if (hits == 0)
                        {
                            if (quests.bankruptNeculai != true)
                            {
                                if (quests.theBalgurMercenariesCompletionStyle == "killedMercs" && quests.theBalgurMercenariesQuest == "complete" || quests.theBalgurMercenariesCompletionStyle == "royalProtection" && quests.theBalgurMercenariesQuest == "complete"|| quests.theBalgurMercenariesCompletionStyle == "threaten" && quests.theBalgurMercenariesQuest == "complete" || quests.theBalgurMercenariesCompletionStyle == "paidMercs" && quests.theBalgurMercenariesQuest == "complete") //if you beat neculai's quest in a way positive for neculai he likes you enough to sell his swamp walker armour.
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(2365, 1059, "Person", false, "Neculai the Merchant", {race: "Vardan", faction: "Vardan", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.2, 0.5], 0, 0, 0.55], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[], merchant: true, merchandise: [[new Item("coins", false, false), 37], [new Item("frichFurClothing", false, false), 3], [new Item("mace", false, false), 1], [new Item("vardanianAxe", false, false), 3], [new Item("vardanianAxeDual", false, false), 2], [new Item("vardanianCleaver", false, false), 1], [new Item("vardanianClub", false, false), 1], [new Item("smashStick", false, false), 1], [new Item("rawWolfLiver", false, false), 4], [new Item("blackChainArmour", false, false), 2], [new Item("trollFlesh", false, false), 2], [new Item("wood", false, false), 14], [new Item("freydicSword", false, false), 1], [new Item("frichPelt", false, false), 6], [new Item("rawWalrusFlesh", false, false), 5], [new Item("walrusMeat", false, false), 1], [new Item("swampWalkerArmour", false, false), 1]]}));
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(2365, 1059, "Person", false, "Neculai the Merchant", {race: "Vardan", faction: "Vardan", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.2, 0.5], 0, 0, 0.55], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[], merchant: true, merchandise: [[new Item("coins", false, false), 37], [new Item("frichFurClothing", false, false), 3], [new Item("mace", false, false), 1], [new Item("vardanianAxe", false, false), 3], [new Item("vardanianAxeDual", false, false), 2], [new Item("vardanianCleaver", false, false), 1], [new Item("smashStick", false, false), 1], [new Item("rawWolfLiver", false, false), 4], [new Item("blackChainArmour", false, false), 2], [new Item("trollFlesh", false, false), 2], [new Item("wood", false, false), 14], [new Item("freydicSword", false, false), 1], [new Item("frichPelt", false, false), 6], [new Item("rawWalrusFlesh", false, false), 5], [new Item("walrusMeat", false, false), 1]]}));
                                }
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(2365, 1059, "Person", false, "Neculai the Beggar", {race: "Vardan", faction: "Vardan", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.2, 0.5], 0, 0, 0.55], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[]}));
                            }

                        }
                    }
                }

                //A stray herd of Naaprids in the northern grassland
                ArtificialIntelligenceAccess.push(new Unit(4942, -1180, "Naaprid", true, "Naanav"));
                ArtificialIntelligenceAccess.push(new Unit(4860, -1377, "Naaprid", true, "Naarimov"));
                ArtificialIntelligenceAccess.push(new Unit(5265, -1535, "Naaprid", true, "Naastelav"));
                ArtificialIntelligenceAccess.push(new Unit(5513, -1322, "Naaprid", false, "Naanava"));
                ArtificialIntelligenceAccess.push(new Unit(5468, -1244, "Naaprid", "baby", "Naarimova"));
                ArtificialIntelligenceAccess.push(new Unit(5634, -1223, "Naaprid", false, "Naastelava"));
                ArtificialIntelligenceAccess.push(new Unit(5737, -1388, "Naaprid", false, "kaastelava"));
                ArtificialIntelligenceAccess.push(new Unit(5896, -1482, "Naaprid", false, "Laastelava"));
                ArtificialIntelligenceAccess.push(new Unit(5986, -1355, "Naaprid", "baby", "Aaptelava"));
                ArtificialIntelligenceAccess.push(new Unit(6111, -943, "Naaprid", true, "Paaktolav"));

                //Grassland Ardils
                ArtificialIntelligenceAccess.push(new Unit(-24, -235, "Ardil", true, "Fuzzybut"));
                ArtificialIntelligenceAccess.push(new Unit(1796, -2657, "Ardil", true, "Fannyfur"));
                ArtificialIntelligenceAccess.push(new Unit(-3756, -1947, "Ardil", true, "Fannybut"));
                ArtificialIntelligenceAccess.push(new Unit(-3953, -2040, "Ardil", false, "Fannyfran"));
                ArtificialIntelligenceAccess.push(new Unit(-3432, 884, "Ardil", false, "Frannyfran"));
                ArtificialIntelligenceAccess.push(new Unit(-103, 1881, "Ardil", true, "Fannylanlan"));
                ArtificialIntelligenceAccess.push(new Unit(301, 4049, "Ardil", false, "Frannyfranfran"));
                ArtificialIntelligenceAccess.push(new Unit(4575, 4970, "Ardil", false, "fuzybut"));
                ArtificialIntelligenceAccess.push(new Unit(5756, 5372, "Ardil", true, "furrybut"));
                ArtificialIntelligenceAccess.push(new Unit(6183, 1172, "Ardil", false, "Furryfran"));
                ArtificialIntelligenceAccess.push(new Unit(4742, 2099, "Ardil", true, "Fuzzyfran"));

                //Wild Varns ventured into grassland to find new food source (because of clearcut)
                ArtificialIntelligenceAccess.push(new Unit(-42, -1983, "Varn", true, "Scrag"));
                ArtificialIntelligenceAccess.push(new Unit(-420, -1871, "Varn", false, "Kretta"));
                ArtificialIntelligenceAccess.push(new Unit(-2190, -1403, "Varn", false, "Arlea"));
                ArtificialIntelligenceAccess.push(new Unit(-2033, -1369, "Varn", true, "Valentina"));
                ArtificialIntelligenceAccess.push(new Unit(-1257, -6310, "Varn", false, "Racho"));
                ArtificialIntelligenceAccess.push(new Unit(-1910, 4940, "Varn", false, "Ferra"));
                ArtificialIntelligenceAccess.push(new Unit(-1549, -5102, "Varn", false, "Juanito"));
                ArtificialIntelligenceAccess.push(new Unit(-937, 708, "Varn", false, "Domingo"));
                ArtificialIntelligenceAccess.push(new Unit(3918, -2387, "Varn", false, "Wyhay"));
                ArtificialIntelligenceAccess.push(new Unit(-2340, -2853, "Varn", true, "Wandigo"));
                ArtificialIntelligenceAccess.push(new Unit(-2357, -3126, "Varn", false, "Wandago"));
                ArtificialIntelligenceAccess.push(new Unit(-2012, -3280, "Varn", true, "wandoo"));
                ArtificialIntelligenceAccess.push(new Unit(-2406, 757, "Varn", false, "Wiggin"));
                ArtificialIntelligenceAccess.push(new Unit(-2206, 2201, "Varn", true, "Ender"));
                ArtificialIntelligenceAccess.push(new Unit(-1712, 2328, "Varn", false, "Starter"));
                ArtificialIntelligenceAccess.push(new Unit(-2187, 3320, "Varn", false, "Easer"));

                if (uniqueChars.hetmerLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Hetmer The Bandit Chief")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(35 - 750, 5540, "Soldier", false, "Hetmer The Bandit Chief", {race: "Freynor", faction: "hostile", con: 6, speed: 1.2, outfit: ["hetmerArmour", 5.5], weapon: ["freydicSword", [6, 5], 0, 16, 1], ranged: [false, "arrow", 9, 2100, 1, 7, 0, "none", 1.2], patrolStops: 1, patrolLoop: false, route:[[221 -750, 5517]]}));
                    }
                }

                //Bandits and bandit chief (Bandidos Nortenos)
                if (quests.teshirNorthRoadBandits == true)
                {
                    //ArtificialIntelligenceAccess.push(new Unit(1663, 5750, "Soldier", false, "Northern Bandit", {race: "Freynor", faction: "hostile", con: 5, speed: 1.10, outfit: ["walrusLeatherArmour", 4], weapon: ["crossbow", [0.1, 0.4], 0, 16, 1], ranged: [true, "steelBolt", 10, 2000, 12, 23, 0, "none", 2.2], patrolStops: 1, patrolLoop: false, route:[[586, 6301]]}));
                    ArtificialIntelligenceAccess.push(new Unit(1563, 5864, "Soldier", false, "Northern Bandit", {race: "Freynor", faction: "hostile", con: 2, speed: 1.05, outfit: ["walrusLeatherArmour", 4], weapon: ["freydicSword", [4, 4], 0, 16, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 4, patrolLoop: true, route:[[506, 6152], [1042, 6325], [1551, 6202], [1563, 5864]]}));
                    ArtificialIntelligenceAccess.push(new Unit(1941, 5902, "Soldier", false, "Northern Bandit", {race: "Freynor", faction: "hostile", con: 4, speed: 1.15, outfit: ["none", 0], weapon: ["longbow", [0.1, 0.4], 0, 0, 0.85], ranged: [true, "arrow", 6, 1750, 1, 4, 0, "none", 1.4], patrolStops: 3, patrolLoop: true, route:[[1941, 5902], [2384, 5809], [1926, 6003]]}));
                    ArtificialIntelligenceAccess.push(new Unit(435 - 750, 5563, "Soldier", false, "Northern Bandit", {race: "Freynor", faction: "hostile", con: 3, speed: 1.05, outfit: ["walrusLeatherArmour", 4], weapon: ["longbow", [0.1, 0.4], 0, 16, 1], ranged: [true, "arrow", 7, 1900, 1, 4, 0, "none", 1.5], patrolStops: 4, patrolLoop: true, route:[[435 - 750, 5563], [400 - 750, 5668], [636 - 750, 5860], [827 - 750, 5357]]}));
                    ArtificialIntelligenceAccess.push(new Unit(348 - 750, 5428, "Soldier", false, "Northern Bandit", {race: "Freynor", faction: "hostile", con: 5, speed: 0.90, outfit: ["none", 1], weapon: ["freydicSword", [6, 4], 0, 16, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 3, patrolLoop: true, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                }

                //a well known thengan mercenary crew's captain.
                if (uniqueChars.kronheimeLDS == true && quests.theBalgurMercenariesQuest == true && quests.theBalgurMercenariesCompletionStyle != "threaten" && quests.theBalgurMercenariesCompletionStyle != "paidMercs"&& quests.theBalgurMercenariesCompletionStyle != "royalProtection")
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Mercenary Captain Kronheime")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(4062, 2531, "Soldier", false, "Mercenary Captain Kronheime", {race: "Thengar", faction: "TheBalgurMercenaries", con: 20, speed: 1.3, outfit: ["balgurCaptainArmour", 7], weapon: ["flail", [25, 7], 11, 63, 3.1], ranged: [false, "arrow", 7, 1800, 1, 6, 0, "none", 2.4], patrolStops: 0, patrolLoop: false, route:[[1654, 1507], [1661, 2311], [1864, 2315], [1852, 1499]]}));
                    }
                }
                //balgur mercenaries
                if (quests.theBalgurMercenariesQuest == true && quests.theBalgurMercenariesCompletionStyle != "threaten" && quests.theBalgurMercenariesCompletionStyle != "paidMercs" && quests.theBalgurMercenariesCompletionStyle != "royalProtection")
                {
                    ArtificialIntelligenceAccess.push(new Unit(4143, 2400, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 10, speed: 1.2, outfit: ["balgurMercArmour", 5], weapon: ["longSpikedMorningStar", [13, 5], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(4138, 2642, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 8, speed: 1.25, outfit: ["balgurMercArmour", 3.5], weapon: ["longSpikedMorningStar", [11, 4], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(4321, 2575, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 10, speed: 1.3, outfit: ["balgurMercArmour", 3.5], weapon: ["longSpikedMorningStar", [12, 4], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(4322, 2486, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 12, speed: 1.225, outfit: ["balgurMercArmour", 4.5], weapon: ["longSpikedMorningStar", [14, 6], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(3912, 2723, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 7, speed: 1.175, outfit: ["balgurMercArmour", 3.5], weapon: ["longSpikedMorningStar", [10, 3], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(3924, 2341, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 13, speed: 1.3, outfit: ["balgurMercArmour", 5], weapon: ["longSpikedMorningStar", [14, 7], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(3796, 2347, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 11, speed: 1.25, outfit: ["balgurMercArmour", 4], weapon: ["longSpikedMorningStar", [13, 6], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 2, patrolLoop: true, route:[[3409, 2704], [3796, 2347]]}));
                    ArtificialIntelligenceAccess.push(new Unit(3785, 2716, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 9, speed: 1.25, outfit: ["balgurMercArmour", 4], weapon: ["longSpikedMorningStar", [12, 5], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 2, patrolLoop: true, route:[[3414, 2337], [3785, 2716]]}));
                }

                //Scenery
                //buildings in the city
                scenicList.push(new Scenery("freydicBuilding1", 2142, 1900, 0, true));
                //scenicList.push(new Scenery("freydicRoof1", 2142, 1900, 0, true));
                //bandit Camp in the north east
                //tents
                scenicList.push(new Scenery("tent", 74 - 750, 5672, (0.5/5 * 2 * Math.PI), true));
                scenicList.push(new Scenery("tent", 544 - 750, 5618, (4.5/5 * 2 * Math.PI), true));
                scenicList.push(new Scenery("tent", 280 - 750, 5700, 0, true));
                scenicList.push(new Scenery("tent", 255 - 750, 5249, Math.PI, true));
                scenicList.push(new Scenery("tent", -12 - 750, 5426, 1/2 * Math.PI, true));
                //campfire
                scenicList.push(new Scenery("campFire", 248 - 750, 5494, 3/4 * Math.PI, true));
                //Teshir Shop Stuff (outdoor until buildings are added)
                scenicList.push(new Scenery("anvil", 1751, 948, Math.PI * 3.45/4, true));
                scenicList.push(new Scenery("forge", 1770, 1086, Math.PI, true));
                scenicList.push(new Scenery("loom", 2625, 1569, 1/2 * Math.PI, true));
                scenicList.push(new Scenery("lab", 1217, 728, 0, true));
                if (quests.theBrokenWellFixed)
                {
                    scenicList.push(new Scenery("well", 2036, 1565, 0, true));
                }
                else
                {
                    scenicList.push(new Scenery("brokenWell", 2036, 1565, 0, true));
                }

                //The lonely farm house
                scenicList.push(new Scenery("rubbledHome", -1107, -1974, 0, true));
                //its own broken well
                scenicList.push(new Scenery("brokenWell", -1398, -1886, -2.74, true));
                //its little farm
                scenicList.push(new Scenery("harstPlant", -940 , -1944, Math.PI * 0.58, "freynor"));
                scenicList.push(new Scenery("harstPlant", -987 , -2007, Math.PI * 1, "freynor"));
                scenicList.push(new Scenery("harstPlant", -892 , -2019, -Math.PI * 2.2, "freynor"));
                scenicList.push(new Scenery("harstPlant", -822 , -1975, Math.PI * 3, "freynor"));
                scenicList.push(new Scenery("harstPlant", -816 , -2069, -Math.PI * 0.4675, "freynor"));

                //The City Farm
                scenicList.push(new Scenery("harstPlant", 2241 , 240, Math.PI * 0.44, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2241 , 165, Math.PI * 3.1, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2241 , 52, -Math.PI * 3.1, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2241 , -31, Math.PI * 2, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2241 , -107, Math.PI * 2.45, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2241 , -197, -Math.PI * 1.66, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2241 , -286, -Math.PI * 0.1, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2329 , 240, -Math.PI * 2.2, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2329 , 166, Math.PI * 3.1, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2329 , 76, Math.PI * 3.1, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2329 , -17, Math.PI * 3.1, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2329 , -105, Math.PI * 3.1, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2329 , -197, Math.PI * 3.1, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2329 , -297, Math.PI * 3.1, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2422 , 240, Math.PI * 0.05, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2422 , 162, Math.PI * 0.05, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2422 , 71, Math.PI * 0.05, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2422 , -12, Math.PI * 0.05, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2422 , -95, Math.PI * 0.05, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2422 , -195, Math.PI * 0.05, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2422 , -289, Math.PI * 0.05, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2498 , 240, -Math.PI * 1.56, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2498 , 164, -Math.PI * 1.56, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2498 , 59, -Math.PI * 1.56, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2498 , -24, -Math.PI * 1.56, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2498 , -95, -Math.PI * 1.56, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2498 , -192, -Math.PI * 1.56, "freynor"));
                scenicList.push(new Scenery("harstPlant", 2498 , -286, -Math.PI * 1.56, "freynor"));

                scenicList.push(new Scenery("potatoPlant", 2566 , 240, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2566 , 193, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2566 , 165, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2566 , 118, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2566 , 84, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2566 , 140, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2603 , 240, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2603 , 206, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2603 , 179, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2603 , 138, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2603 , 113, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2603 , 83, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2668 , 240, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2668 , 221, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2668 , 194, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2668 , 153, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2668 , 122, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2668 , 86, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2696 , 240, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2696 , 214, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2696 , 178, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2696 , 147, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2696 , 111, 0, "freynor"));
                scenicList.push(new Scenery("potatoPlant", 2696 , 81, 0, "freynor"));

                scenicList.push(new Scenery("suuliPlant", 2686 , 6, 1, "freynor"));
                scenicList.push(new Scenery("suuliPlant", 2686 , -59, 2, "freynor"));
                scenicList.push(new Scenery("suuliPlant", 2628 , 5, 3, "freynor"));
                scenicList.push(new Scenery("suuliPlant", 2628 , -60, 0, "freynor"));
                scenicList.push(new Scenery("suuliPlant", 2566 , 3, -0.5, "freynor"));
                scenicList.push(new Scenery("suuliPlant", 2566 , -61, 2.34, "freynor"));

                scenicList.push(new Scenery("carrotPlant", 2559 , -138, 1.2, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -153, -2.1, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -168, -1.2, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -183, 3, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -198, 1.78, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -213, -0.4, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -228, -3, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -243, -1.2, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -258, 3, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -273, 1.78, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -288, -0.4, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2559 , -303, -3, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -138, -0.9, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -153, -2.8, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -168, -1.9, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -183, -2, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -198, 2.34, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -213, 0.5, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -228, 1, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -243, 0, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -258, 0.1, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -273, -0.95, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -288, -3.214, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2624 , -303, 2.867, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -138, -1.8, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -153, 2.1, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -168, -1.5667, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -183, 0, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -198, 1.3, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -213, 0.4, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -228, 3, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -243, -1.5, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -258, 1.5, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -273, 1.89, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -288, -0.21, "freynor"));
                scenicList.push(new Scenery("carrotPlant", 2680 , -303, 0.3, "freynor"));

                scenicList.push(new Scenery("santhPlant", 2763 , -310, Math.PI * 0.14, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2763 , -285, -Math.PI * 0.44, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2763 , -260, Math.PI * 1.8, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2763 , -235, -Math.PI * 2.34, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2763 , -210, Math.PI * 0.44, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2763 , -185, Math.PI * 0.14, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2763 , -160, -Math.PI * 0.44, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2763 , -135, Math.PI * 1.8, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2763 , -110, -Math.PI * 2.34, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2763 , -85, Math.PI * 3.2, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2823 , -310, Math.PI * 0.14, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2823 , -285, -Math.PI * 0.44, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2823 , -260, Math.PI * 1.8, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2823 , -235, -Math.PI * 2.34, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2823 , -210, Math.PI * 0.44, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2823 , -185, Math.PI * 0.14, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2823 , -160, -Math.PI * 0.44, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2823 , -135, Math.PI * 1.8, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2823 , -110, -Math.PI * 2.34, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2823 , -85, Math.PI * 3.2, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2883 , -310, Math.PI * 0.14, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2883 , -285, -Math.PI * 0.44, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2883 , -260, Math.PI * 1.8, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2883 , -235, -Math.PI * 2.34, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2883 , -210, Math.PI * 0.44, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2883 , -185, Math.PI * 0.14, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2883 , -160, -Math.PI * 0.44, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2883 , -135, Math.PI * 1.8, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2883 , -110, -Math.PI * 2.34, "freynor"));
                scenicList.push(new Scenery("santhPlant", 2883 , -85, Math.PI * 3.2, "freynor"));

                //plains plants
                scenicList.push(new Scenery("techiPlant", 3781 , -1155, -Math.PI * 0.2, true));
                scenicList.push(new Scenery("techiPlant", 5001 , 164, Math.PI * 0.5, true));
                scenicList.push(new Scenery("techiPlant", 6014 , -1047, 3, true));
                scenicList.push(new Scenery("techiPlant", 3021 , -2478, 1, true));
                scenicList.push(new Scenery("techiPlant", 3068 , -2418, Math.PI * 9.1, true));
                scenicList.push(new Scenery("techiPlant", 6018 , -2253, 2, true));
                scenicList.push(new Scenery("techiPlant", 5689 , 3451, Math.PI * 1.7, true));
                scenicList.push(new Scenery("techiPlant", 2937 , 5977, Math.PI * 0.66, true));
                scenicList.push(new Scenery("techiPlant", -1057 , 2813, Math.PI * 3.8, true));
                scenicList.push(new Scenery("techiPlant", -62 , -46, Math.PI * -62.46, true));

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
                //worldItems = [];

                //Delete All Non-native Structures
                //todo when structures are created add their list's refresh sequence here.

                //Delete All Non-native Scenery
                scenicList = [];

                //REGION CREATION
                //Build AI Units

                //waanti
                ArtificialIntelligenceAccess.push(new Unit(3458, 12734, "Waanti", true, "goablt"));
                ArtificialIntelligenceAccess.push(new Unit(2901, 12535, "Waanti", true, "golabtlt"));
                ArtificialIntelligenceAccess.push(new Unit(3113, 12857, "Waanti", false, "hablyem"));
                ArtificialIntelligenceAccess.push(new Unit(2726, 13078, "Waanti", false, "yematlt"));
                ArtificialIntelligenceAccess.push(new Unit(3118, 13167, "Waanti", "baby", "yem"));
                ArtificialIntelligenceAccess.push(new Unit(3239, 13076, "Waanti", "baby", "yatlt"));
                ArtificialIntelligenceAccess.push(new Unit(3538, 13144, "Waanti", false, "yetlat"));
                ArtificialIntelligenceAccess.push(new Unit(3303, 13486, "Waanti", true, "Lebyetlt"));

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

                //glutids
                ArtificialIntelligenceAccess.push(new Unit(895, 9921, "Glutid", "massive", "Glub", {patrolStops: 7, patrolLoop: true, route:[[1527, 10105], [1114, 10325], [834, 10992], [895, 9921]]}));
                ArtificialIntelligenceAccess.push(new Unit(2255, 10148, "Glutid", true, "Glup", {patrolStops: 7, patrolLoop: true, route:[[1741, 10369], [1898, 9900], [1602, 9909], [1635, 10189], [2255, 10148]]}));

                //Seguidores del Hielo
                ArtificialIntelligenceAccess.push(new Unit(9000, 10000, "HyelingSoldier", true, "Frost Maw"));
                ArtificialIntelligenceAccess.push(new Unit(8900, 10100, "HyelingSoldier", false, "Long Tooth"));
                ArtificialIntelligenceAccess.push(new Unit(9584, 9046, "Hyeling", "baby", "Cold Cloth"));
                ArtificialIntelligenceAccess.push(new Unit(9498, 8856, "Hyeling", false, "Old Eyes"));
                ArtificialIntelligenceAccess.push(new Unit(10041, 8746, "Hyeling", true, "White Hammer"));
                ArtificialIntelligenceAccess.push(new Unit(9711, 8503, "HyelingSoldier", false, "Running Stone"));

                //Scenery
                scenicList.push(new Scenery("bushkaPlant", 2410 , 7578, 2.5, true));
                scenicList.push(new Scenery("bushkaPlant", 2710 , 7478, -1, true));
                scenicList.push(new Scenery("wightbloomPlant", 2900 , 7900, 0, true));
                scenicList.push(new Scenery("largeCeremonialRockCircle", 10075 , 8783, 0, true));
                scenicList.push(new Scenery("hyelingTent", 9199 , 8965, 1/2 * Math.PI, true));
                scenicList.push(new Scenery("hyelingTent", 9677 , 9170, -1/11 * Math.PI, true));
                scenicList.push(new Scenery("hyelingTent", 10800 , 8897, -1/2 * Math.PI, true));
                scenicList.push(new Scenery("hyelingTent", 10458 , 8363, -3/5 * Math.PI, true));
                scenicList.push(new Scenery("hyelingSkeleton", 10071 , 8788, 0.12, true));

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
                //worldItems = [];

                //Delete All Non-native Structures
                //todo when structures are created add their list's refresh sequence here.

                //Delete All Non-native Scenery
                scenicList = [];

                //REGION CREATION
                //Build AI Units

                //High-Hill Howlers
                ArtificialIntelligenceAccess.push(new Unit(7100, 4000, "GreyWolf", false, "Clawface"));
                ArtificialIntelligenceAccess.push(new Unit(9100, 1900, "GreyWolf", false, "Clawder"));
                //The friches of the rocky west
                ArtificialIntelligenceAccess.push(new Unit(8491, 3382, "MountainFrich", false, "Frus"));
                ArtificialIntelligenceAccess.push(new Unit(8924, 575, "MountainFrich", true, "Frel"));
                ArtificialIntelligenceAccess.push(new Unit(11382, 3044, "MountainFrich", "massive", "Fruyuk"));

                //berulns in the west
                ArtificialIntelligenceAccess.push(new Unit(12700, 1100, "Beruln", true, "Grug"));
                ArtificialIntelligenceAccess.push(new Unit(12700, 500, "Beruln", false, "Dak"));
                ArtificialIntelligenceAccess.push(new Unit(13500, 1300, "Beruln", false, "Nosh"));
                ArtificialIntelligenceAccess.push(new Unit(13000, 2000, "Beruln", true, "Drelk"));
                ArtificialIntelligenceAccess.push(new Unit(13800, 3500, "Beruln", false, "Kagim"));

                //Rocky Rock Monsters of the Rocky Rock West
                ArtificialIntelligenceAccess.push(new Unit(8199, 2310, "StoneGolem", false, "Orefaw"));
                ArtificialIntelligenceAccess.push(new Unit(8516, 5121, "StoneGolem", "baby", "Bluston"));

                //Ores
                scenicList.push(new Scenery("stone", 10458 , 8363, 0, 3, 1));
                scenicList.push(new Scenery("stone", 10373 , 2310, -1, 2, 3));
                scenicList.push(new Scenery("stone", 8895 , 5126, 5.213, 4, 2));
                scenicList.push(new Scenery("darkStone", 11364 , 1651, 1.37, 2.5, 2));
                scenicList.push(new Scenery("darkStone", 9581 , -1232, -3.4, 3.5, 3));
                scenicList.push(new Scenery("ashStone", 11682 , 4722, 2.345678910, 4, 1));
                scenicList.push(new Scenery("jvostran", 12500 , 2000, 7, 3, 2));

                //Plants
                scenicList.push(new Scenery("haeflowerPlant", 11256 , 2707, 4, true));

                change = "w1";
            }
        }
        else if (region == "e1") //Y > 6290 && Y < 32370
        {
            if (change != "e1")
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
                //worldItems = [];

                //Delete All Non-native Structures
                //todo when structures are created add their list's refresh sequence here.

                //Delete All Non-native Scenery
                scenicList = [];

                //REGION CREATION
                //Build AI Units

                //ArtificialIntelligenceAccess.push(new Unit(1300, 2000, "BlackBear", "giant", "Lugtug"));

                //Shehids in the forest
                ArtificialIntelligenceAccess.push(new Unit(-8690, 2326, "Shehid", false, "clamgirl"));
                ArtificialIntelligenceAccess.push(new Unit(-8880, 2875, "Shehid", false, "clamboy"));
                ArtificialIntelligenceAccess.push(new Unit(-8860, 3275, "Shehid", false, "berch"));
                ArtificialIntelligenceAccess.push(new Unit(-9490, 2941, "Shehid", false, "shamble"));
                ArtificialIntelligenceAccess.push(new Unit(-8216, 3766, "Shehid", false, "timbson"));
                ArtificialIntelligenceAccess.push(new Unit(-7519, 583, "Shehid", false, "timberly"));
                ArtificialIntelligenceAccess.push(new Unit(-7460, 544, "Shehid", false, "timbar"));
                ArtificialIntelligenceAccess.push(new Unit(-7480, 504, "Shehid", false, "timblin"));
                ArtificialIntelligenceAccess.push(new Unit(-8094, 739, "Shehid", false, "timblo"));
                ArtificialIntelligenceAccess.push(new Unit(-8005, 786, "Shehid", false, "timbla"));
                ArtificialIntelligenceAccess.push(new Unit(-8080, 646, "Shehid", false, "timbli"));
                ArtificialIntelligenceAccess.push(new Unit(-8066, 159, "Shehid", true, "timblik"));
                ArtificialIntelligenceAccess.push(new Unit(-10170, 4248, "Shehid", true, "liklim"));
                ArtificialIntelligenceAccess.push(new Unit(-9838, 4451, "Shehid", true, "ogklip"));
                ArtificialIntelligenceAccess.push(new Unit(-9715, 4227, "Shehid", true, "lipsorn"));
                ArtificialIntelligenceAccess.push(new Unit(-9198, 4538, "Shehid", false, "lipi"));
                ArtificialIntelligenceAccess.push(new Unit(-12332, -723, "Shehid", true, "lipthorn"));
                ArtificialIntelligenceAccess.push(new Unit(-12410, 4867, "Shehid", true, "galtong"));
                ArtificialIntelligenceAccess.push(new Unit(-11427, 3467, "Shehid", false, "tooblo"));
                ArtificialIntelligenceAccess.push(new Unit(-11470, 3506, "Shehid", false, "toobla"));
                ArtificialIntelligenceAccess.push(new Unit(-12564, -2860, "Shehid", true, "pipthorn"));
                ArtificialIntelligenceAccess.push(new Unit(-12354, -2884, "Shehid", false, "toobli"));
                ArtificialIntelligenceAccess.push(new Unit(-12334, -3126, "Shehid", false, "tooble"));
                ArtificialIntelligenceAccess.push(new Unit(-12465, -3230, "Shehid", false, "tooblu"));
                ArtificialIntelligenceAccess.push(new Unit(-8377, 568, "Shehid", false, "fooblo"));
                ArtificialIntelligenceAccess.push(new Unit(-8518, 319, "Shehid", false, "foobla"));
                ArtificialIntelligenceAccess.push(new Unit(-8555, 411, "Shehid", false, "foobli"));
                ArtificialIntelligenceAccess.push(new Unit(-8500, 627, "Shehid", false, "fooble"));
                ArtificialIntelligenceAccess.push(new Unit(-8293, 713, "Shehid", false, "fooblu"));
                ArtificialIntelligenceAccess.push(new Unit(-8410, 878, "Shehid", false, "kuabo"));
                ArtificialIntelligenceAccess.push(new Unit(-8955, 936, "Shehid", true, "ogklap"));
                ArtificialIntelligenceAccess.push(new Unit(-9056, -1588, "Shehid", true, "Giglap"));
                ArtificialIntelligenceAccess.push(new Unit(-8946, -1755, "Shehid", false, "Gigi"));
                ArtificialIntelligenceAccess.push(new Unit(-8867, -1724, "Shehid", false, "Giga"));
                ArtificialIntelligenceAccess.push(new Unit(-9251, -1724, "Shehid", false, "Gigil"));
                ArtificialIntelligenceAccess.push(new Unit(-9257, -1606, "Shehid", false, "Gigli"));
                ArtificialIntelligenceAccess.push(new Unit(-9463, 4504, "Shehid", false, "Giglo"));
                ArtificialIntelligenceAccess.push(new Unit(-9351, 4391, "Shehid", false, "Gigo"));
                ArtificialIntelligenceAccess.push(new Unit(-9404, 4137, "Shehid", true, "timbap"));
                ArtificialIntelligenceAccess.push(new Unit(-9062, 4191, "Shehid", false, "timbri"));
                ArtificialIntelligenceAccess.push(new Unit(-9270, 4377, "Shehid", false, "timbro"));
                ArtificialIntelligenceAccess.push(new Unit(-8787, 4040, "Shehid", false, "timbra"));

                //Ardils
                ArtificialIntelligenceAccess.push(new Unit(-3936, 5729, "Ardil", true, "Fannyfranfran"));
                ArtificialIntelligenceAccess.push(new Unit(-4277, 4587, "Ardil", false, "busybut"));

                //Vipers
                ArtificialIntelligenceAccess.push(new Unit(-9607, 2648, "Viper", false, "slitherz"));
                ArtificialIntelligenceAccess.push(new Unit(-11027, 239, "Viper", false, "Serpil"));

                //Lizards
                ArtificialIntelligenceAccess.push(new Unit(-8277, 1718, "Lizard", false, "Lizzy"));
                ArtificialIntelligenceAccess.push(new Unit(-9173, 1272, "Lizard", true, "Lizander"));
                ArtificialIntelligenceAccess.push(new Unit(-10079, 274, "Lizard", false, "Lizabeth"));
                ArtificialIntelligenceAccess.push(new Unit(-11443, 1183, "Lizard", false, "Lizzer"));
                ArtificialIntelligenceAccess.push(new Unit(-12784, 2278, "Lizard", true, "Lizzely"));
                ArtificialIntelligenceAccess.push(new Unit(-10461, -337, "Lizard", false, "Liza"));
                ArtificialIntelligenceAccess.push(new Unit(-9394, -1962, "Lizard", false, "Lizian"));
                ArtificialIntelligenceAccess.push(new Unit(-8182, -2325, "Lizard", true, "Lizel"));
                ArtificialIntelligenceAccess.push(new Unit(-7434, -2070, "Lizard", false, "Liz"));
                ArtificialIntelligenceAccess.push(new Unit(-9265, 5185, "Lizard", false, "Liziela"));
                ArtificialIntelligenceAccess.push(new Unit(-10220, 1426, "Lizard", true, "Lizalt"));
                ArtificialIntelligenceAccess.push(new Unit(-10284, 2670, "Lizard", false, "Liziana"));
                ArtificialIntelligenceAccess.push(new Unit(-12115, 1323, "Lizard", false, "Lizarina"));

                //Bees
                scenicList.push(new Scenery("beeHive", -8287 , 3377, 0, true));

                //Ulgoys
                scenicList.push(new Scenery("ulgoyPlant", -9580, 3557, 0, 3.2));
                ArtificialIntelligenceAccess.push(new Unit(-9569, 3566, "Ulgoy", true, "Venus"));
                scenicList.push(new Scenery("ulgoyPlant", -9125, 494, 0, 2));
                ArtificialIntelligenceAccess.push(new Unit(-9118, 497, "Ulgoy", false, "Trampa"));
                scenicList.push(new Scenery("ulgoyPlant", -11382, 351, 0, 1.15));
                ArtificialIntelligenceAccess.push(new Unit(-11379, 353, "Ulgoy", "baby", "Flytrap"));
                scenicList.push(new Scenery("ulgoyPlant", -11008, 568, 0, 1.15));
                ArtificialIntelligenceAccess.push(new Unit(-11005, 570, "Ulgoy", "baby", "Trap"));

                //narthwarps
                ArtificialIntelligenceAccess.push(new Unit(-11292, 3177, "Narthwarp", true, "krinklestitch"));
                ArtificialIntelligenceAccess.push(new Unit(-10291, -2926, "Narthwarp", false, "krinklestitchenheimerIII"));
                ArtificialIntelligenceAccess.push(new Unit(-10449, -2880, "Narthwarp", false, "krinklestitchenheimerII"));
                ArtificialIntelligenceAccess.push(new Unit(-10398, -3076, "Narthwarp", false, "krinklestitchenheimerI"));
                ArtificialIntelligenceAccess.push(new Unit(-12321, -1836, "Narthwarp", true, "Kacklkromf"));
                ArtificialIntelligenceAccess.push(new Unit(-12708, -1973, "Narthwarp", false, "kacklkromfenheimerI"));
                ArtificialIntelligenceAccess.push(new Unit(-12549, -1447, "Narthwarp", false, "kacklkromfenheimerII"));
                ArtificialIntelligenceAccess.push(new Unit(-12662, -1314, "Narthwarp", false, "kacklkromfenheimerIII"));
                ArtificialIntelligenceAccess.push(new Unit(-9366, -1072, "Narthwarp", false, "Mokinshanks"));
                ArtificialIntelligenceAccess.push(new Unit(-9330, -1403, "Narthwarp", false, "Kronkenstocks"));
                ArtificialIntelligenceAccess.push(new Unit(-8989, -1015, "Narthwarp", false, "Bokinshanks"));
                ArtificialIntelligenceAccess.push(new Unit(-9117, -713, "Narthwarp", false, "Fronkenstocks"));

                //Varns of the woodlands
                ArtificialIntelligenceAccess.push(new Unit(-7847, -139, "Varn", true, "rain"));
                ArtificialIntelligenceAccess.push(new Unit(-7462, -39, "Varn", true, "sun"));
                ArtificialIntelligenceAccess.push(new Unit(-7105, -695, "Varn", false, "snow"));
                ArtificialIntelligenceAccess.push(new Unit(-8007, -989, "Varn", true, "wind"));
                ArtificialIntelligenceAccess.push(new Unit(-10694, 2278, "Varn", true, "si"));
                ArtificialIntelligenceAccess.push(new Unit(-11065, 2029, "Varn", true, "no"));
                ArtificialIntelligenceAccess.push(new Unit(-10738, 2083, "Varn", true, "gracias"));
                ArtificialIntelligenceAccess.push(new Unit(-11350, 2166, "Varn", false, "denada"));
                ArtificialIntelligenceAccess.push(new Unit(-11276, 1877, "Varn", true, "todos"));
                ArtificialIntelligenceAccess.push(new Unit(-10630, 2151, "Varn", false, "ningunos"));
                ArtificialIntelligenceAccess.push(new Unit(-7303, -3040, "Varn", true, "hail"));
                ArtificialIntelligenceAccess.push(new Unit(-7116, -3121, "Varn", true, "storm"));
                ArtificialIntelligenceAccess.push(new Unit(-6537, -3078, "Varn", true, "will"));
                ArtificialIntelligenceAccess.push(new Unit(-6983, -2796, "Varn", true, "eatyou"));
                ArtificialIntelligenceAccess.push(new Unit(-11059, -839, "Varn", true, "wewill"));
                ArtificialIntelligenceAccess.push(new Unit(-11155, -958, "Varn", false, "wewil"));
                ArtificialIntelligenceAccess.push(new Unit(-11311, -1134, "Varn", true, "lrock"));
                ArtificialIntelligenceAccess.push(new Unit(-11420, -1109, "Varn", false, "you!"));
                ArtificialIntelligenceAccess.push(new Unit(-11613, -1079, "Varn", false, "Living"));
                ArtificialIntelligenceAccess.push(new Unit(-11783, -1025, "Varn", true, "ona"));
                ArtificialIntelligenceAccess.push(new Unit(-11664, -901, "Varn", true, "sunnybeach"));
                ArtificialIntelligenceAccess.push(new Unit(-11890, -897, "Varn", true, "heckyeah!!!"));
                ArtificialIntelligenceAccess.push(new Unit(-7175, 5260, "Varn", true, "johny"));
                ArtificialIntelligenceAccess.push(new Unit(-7497, 5379, "Varn", true, "james"));
                ArtificialIntelligenceAccess.push(new Unit(-7517, 5188, "Varn", true, "jillian"));
                ArtificialIntelligenceAccess.push(new Unit(-7513, 4941, "Varn", true, "jude"));
                ArtificialIntelligenceAccess.push(new Unit(-7374, 4660, "Varn", true, "julian"));
                ArtificialIntelligenceAccess.push(new Unit(-7625, 4700, "Varn", true, "july"));
                ArtificialIntelligenceAccess.push(new Unit(-6621, 4758, "Varn", true, "jekkle"));
                ArtificialIntelligenceAccess.push(new Unit(-6580, 4418, "Varn", false, "jazz"));
                ArtificialIntelligenceAccess.push(new Unit(-6799, 3911, "Varn", true, "June"));
                ArtificialIntelligenceAccess.push(new Unit(-7090, 3991, "Varn", false, "Jed"));
                ArtificialIntelligenceAccess.push(new Unit(-6317, 204, "Varn", true, "Tal"));
                ArtificialIntelligenceAccess.push(new Unit(-6594, 46, "Varn", true, "Til"));
                ArtificialIntelligenceAccess.push(new Unit(-7581, -1658, "Varn", true, "Tyl"));
                ArtificialIntelligenceAccess.push(new Unit(-7128, 1989, "Varn", false, "Tol"));
                ArtificialIntelligenceAccess.push(new Unit(-5986, 2947, "Varn", true, "Tul"));
                ArtificialIntelligenceAccess.push(new Unit(-6329, -3246, "Varn", false, "Tel"));
                ArtificialIntelligenceAccess.push(new Unit(-5897, -3461, "Varn", false, "Tela"));
                ArtificialIntelligenceAccess.push(new Unit(-4240, -1519, "Varn", true, "Tula"));

                //lions tigers and BLACKBEARS oh my!
                ArtificialIntelligenceAccess.push(new Unit(-11630, 5669, "BlackBear", true, "Jugtug"));
                ArtificialIntelligenceAccess.push(new Unit(-12041, 4710, "BlackBear", false, "Yugtug"));
                ArtificialIntelligenceAccess.push(new Unit(-12275, 4426, "BlackBear", true, "Pugtug"));
                ArtificialIntelligenceAccess.push(new Unit(-12170, 6191, "BlackBear", false, "Tugtug"));
                ArtificialIntelligenceAccess.push(new Unit(-7769, 640, "BlackBear", false, "Hugtug"));
                ArtificialIntelligenceAccess.push(new Unit(-12765, -2427, "BlackBear", true, "Nugtug"));
                ArtificialIntelligenceAccess.push(new Unit(-9195, -3204, "BlackBear", false, "Luvtug"));
                ArtificialIntelligenceAccess.push(new Unit(-11660, -1679, "BlackBear", false, "Duvtuv"));
                ArtificialIntelligenceAccess.push(new Unit(-12407, -86, "BlackBear", false, "Guvtug"));
                ArtificialIntelligenceAccess.push(new Unit(-12203, 677, "BlackBear", false, "Ruvtuv"));
                ArtificialIntelligenceAccess.push(new Unit(-12686, 843, "BlackBear", true, "Mugtug"));
                ArtificialIntelligenceAccess.push(new Unit(-8550, 6131, "BlackBear", true, "Grugtug"));
                ArtificialIntelligenceAccess.push(new Unit(-8251, 5968, "BlackBear", false, "Yuvtuv"));
                ArtificialIntelligenceAccess.push(new Unit(-10860, 5750, "BlackBear", false, "Juvtuv"));
                ArtificialIntelligenceAccess.push(new Unit(-9664, -2658, "BlackBear", true, "Ugug"));

                //ferocious gribs...
                ArtificialIntelligenceAccess.push(new Unit(-11836, 3742, "Grib", true, "stuckan"));
                ArtificialIntelligenceAccess.push(new Unit(-11601, 3904, "Grib", true, "frukkan"));
                ArtificialIntelligenceAccess.push(new Unit(-9993, 3965, "Grib", true, "fuckan"));
                ArtificialIntelligenceAccess.push(new Unit(-7932, -2046, "Grib", false, "lucytoodlewop"));
                ArtificialIntelligenceAccess.push(new Unit(-8480, -1979, "Grib", false, "mandybibblbop"));
                ArtificialIntelligenceAccess.push(new Unit(-7960, -2824, "Grib", true, "buckan"));
                ArtificialIntelligenceAccess.push(new Unit(-11080, -3075, "Grib", true, "truckan"));
                ArtificialIntelligenceAccess.push(new Unit(-11318, -3167, "Grib", true, "krukkan"));
                ArtificialIntelligenceAccess.push(new Unit(-11579, -3048, "Grib", false, "tucytoodletop"));
                ArtificialIntelligenceAccess.push(new Unit(-13110, -514, "Grib", true, "Gruckan"));
                ArtificialIntelligenceAccess.push(new Unit(-9919, 5837, "Grib", false, "Gucytoodlewop"));
                ArtificialIntelligenceAccess.push(new Unit(-9269, 5971, "Grib", false, "Tandybibblbop"));
                ArtificialIntelligenceAccess.push(new Unit(-9446, 5542, "Grib", false, "Quilcytoodlewop"));
                ArtificialIntelligenceAccess.push(new Unit(-9827, 5637, "Grib", false, "Vandybibblbop"));
                ArtificialIntelligenceAccess.push(new Unit(-6214, 3512, "Grib", true, "Vandybibblbeed"));

                //naaprids of the southern grasslands
                ArtificialIntelligenceAccess.push(new Unit(-5031, -2683, "Naaprid", "baby", "Naarimo"));
                ArtificialIntelligenceAccess.push(new Unit(-4966, -2960, "Naaprid", false, "Naaste"));
                ArtificialIntelligenceAccess.push(new Unit(-5207, -2871, "Naaprid", false, "kaaste"));
                ArtificialIntelligenceAccess.push(new Unit(-5169, -3136, "Naaprid", false, "Laaste"));
                ArtificialIntelligenceAccess.push(new Unit(-3817, -3336, "Naaprid", false, "phaashe"));
                ArtificialIntelligenceAccess.push(new Unit(-4940, -2567, "Naaprid", true, "Yaahmo"));

                //friches of the grasslands before the wuncwer woods
                ArtificialIntelligenceAccess.push(new Unit(-3891, -2492, "Frich", false, "Sansa"));
                ArtificialIntelligenceAccess.push(new Unit(-3961, -2617, "Frich", false, "Aria"));

                if (player.level > 8 && player.level < 13 || Math.floor(Math.random() * 9) == 8) // summon giant friches if between these levels.
                {
                    ArtificialIntelligenceAccess.push(new Unit(-5441, -2609, "Frich", "massive", "Edard"));
                    ArtificialIntelligenceAccess.push(new Unit(-5434, -2411, "Frich", "massive", "Robert"));
                    ArtificialIntelligenceAccess.push(new Unit(-5570, -2522, "Frich", "massive", "Stannis"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-3797, -2540, "Frich", true, "Edard"));
                    ArtificialIntelligenceAccess.push(new Unit(-5434, -2411, "Frich", false, "Robert"));
                    ArtificialIntelligenceAccess.push(new Unit(-5342, -2290, "Frich", false, "Stannis"));
                }
                ArtificialIntelligenceAccess.push(new Unit(-5110, -2116, "Frich", false, "Renely"));

                ArtificialIntelligenceAccess.push(new Unit(-5334, -1338, "Frich", true, "Tjon"));
                ArtificialIntelligenceAccess.push(new Unit(-5593, -1410, "Frich", false, "Sam"));
                ArtificialIntelligenceAccess.push(new Unit(-5990, -910, "Frich", false, "RedDeadWalder"));
                ArtificialIntelligenceAccess.push(new Unit(-5508, -566, "Frich", true, "Robbstar"));

                ArtificialIntelligenceAccess.push(new Unit(-4086, 159, "Frich", true, "Ramsay"));
                ArtificialIntelligenceAccess.push(new Unit(-4591, -361, "Frich", false, "Umber"));
                ArtificialIntelligenceAccess.push(new Unit(-4428, -2500, "Frich", false, "Tormund"));
                ArtificialIntelligenceAccess.push(new Unit(-5508, -566, "Frich", true, "Daavos"));

                ArtificialIntelligenceAccess.push(new Unit(-4318, -3341, "Frich", false, "inspector"));
                ArtificialIntelligenceAccess.push(new Unit(-4688, -3525, "Frich", true, "Harold"));
                ArtificialIntelligenceAccess.push(new Unit(-5143, 2663, "Frich", true, "gadget"));
                ArtificialIntelligenceAccess.push(new Unit(-4428, 2433, "Frich", true, "toolbox"));

                ArtificialIntelligenceAccess.push(new Unit(-4757, 4016, "Frich", true, "Gizmo"));
                ArtificialIntelligenceAccess.push(new Unit(-5201, 5973, "Frich", true, "Gear"));

                //Trees of the forest
                scenicList.push(new Scenery("pineTree", -7703 , 1761, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -7319 , 2158, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -7918 , 2493, 0, true));
                scenicList.push(new Scenery("pineTree", -7110 , 2531, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -7087 , 2950, - Math.PI * 0.19, true));
                scenicList.push(new Scenery("pineTree", -7632 , 2872, 0.19, true));
                scenicList.push(new Scenery("pineTree", -7427 , 3301, 1.87 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -7061 , 3661, - Math.PI * 1.33, true));
                scenicList.push(new Scenery("pineTree", -7800 , 3550, - 0.25, true));
                scenicList.push(new Scenery("pineTree", -8284 , 3238, Math.PI * 1.61, true));
                scenicList.push(new Scenery("pineTree", -8340 , 2685, - Math.PI * 0.91, true));
                scenicList.push(new Scenery("pineTree", -8155 , 2015, 0.32, true));
                scenicList.push(new Scenery("pineTree", -7714 , 3982, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -8399 , 3798, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -8743 , 3450, 0, true));
                scenicList.push(new Scenery("pineTree", -8926 , 2996, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -8743 , 2291, Math.PI * 0.72, true));
                scenicList.push(new Scenery("pineTree", -8525 , 1670, - 0.39, true));
                scenicList.push(new Scenery("pineTree", -9151 , 1782, 1.98 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -9362 , 2188, Math.PI * 1.53, true));
                scenicList.push(new Scenery("pineTree", -9395 , 2720, - 0.50, true));
                scenicList.push(new Scenery("pineTree", -9642 , 3192, - Math.PI * 1.20, true));
                scenicList.push(new Scenery("pineTree", -9325 , 3380, Math.PI * 0.33, true));
                scenicList.push(new Scenery("pineTree", -9090 , 3989, - 0.77, true));
                scenicList.push(new Scenery("pineTree", -7316 , 1029, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -7765 , 940, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -7479 , 711, 0, true));
                scenicList.push(new Scenery("pineTree", -7994 , 834, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -7514 , 458, - Math.PI * 0.19, true));
                scenicList.push(new Scenery("pineTree", -8097 , 566, 0.19, true));
                scenicList.push(new Scenery("pineTree", -7160 , 59, - Math.PI * 1.33, true));
                scenicList.push(new Scenery("pineTree", -7969 , 87, 1.87 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -8431 , 160, - 0.25, true));
                scenicList.push(new Scenery("pineTree", -8451 , 4238, Math.PI * 1.61, true));
                scenicList.push(new Scenery("pineTree", -8741 , 4800, - Math.PI * 0.91, true));
                scenicList.push(new Scenery("pineTree", -9093 , 4430, 0.32, true));
                scenicList.push(new Scenery("pineTree", -9666 , 4132, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -9920 , 3648, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -10249 , 3374, 0, true));
                scenicList.push(new Scenery("pineTree", -9999 , 2766, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -9820 , 2337, Math.PI * 0.72, true));
                scenicList.push(new Scenery("pineTree", -10049 , 1824, - 0.39, true));
                scenicList.push(new Scenery("pineTree", -9652 , 1798, 1.98 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -8554 , 925, Math.PI * 1.53, true));
                scenicList.push(new Scenery("pineTree", -8781 , 522, - 0.50, true));
                scenicList.push(new Scenery("pineTree", -9014 , 39, - Math.PI * 1.20, true));
                scenicList.push(new Scenery("pineTree", -8653 , -317, Math.PI * 0.33, true));
                scenicList.push(new Scenery("pineTree", -7708 , -319, - 0.77, true));
                scenicList.push(new Scenery("pineTree", -8189 , -266, 0.56, true));
                scenicList.push(new Scenery("pineTree", -7885 , -733, 0.995, true));
                scenicList.push(new Scenery("pineTree", -7896 , -1224, - Math.PI * 0.666, true));
                scenicList.push(new Scenery("pineTree", -8270 , -971, 0.454545, true));
                scenicList.push(new Scenery("pineTree", -8702 , -727, - 0.126, true));
                scenicList.push(new Scenery("pineTree", -9432 , -354, 0.65, true));
                scenicList.push(new Scenery("pineTree", -8519 , 5313, Math.PI * 0.21, true));
                scenicList.push(new Scenery("pineTree", -9431 , 4798, - 0.283, true));
                scenicList.push(new Scenery("pineTree", -9919 , 4570, -0.19, true));
                scenicList.push(new Scenery("pineTree", -10308 , 4227, 0.26, true));
                scenicList.push(new Scenery("pineTree", -10453 , 3825, 0.066, true));
                scenicList.push(new Scenery("pineTree", -10923 , 4107, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -11056 , 3599, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -10740 , 3190, 0, true));
                scenicList.push(new Scenery("pineTree", -10583 , 2834, Math.PI * 1.55, true));
                scenicList.push(new Scenery("pineTree", -10612 , 2370, - Math.PI * 0.19, true));
                scenicList.push(new Scenery("pineTree", -10448 , 2047, 0.16, true));
                scenicList.push(new Scenery("pineTree", -10572 , 1661, 1.93 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -10953 , 1579, - Math.PI * 1.33, true));
                scenicList.push(new Scenery("pineTree", -11358 , 3550, - 0.25, true));
                scenicList.push(new Scenery("pineTree", -12008 , 1780, Math.PI * 1.61, true));
                scenicList.push(new Scenery("pineTree", -11401 , 1922, - Math.PI * 0.91, true));
                scenicList.push(new Scenery("pineTree", -11539 , 1630, 0.32, true));
                scenicList.push(new Scenery("pineTree", -12573 , 1643, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -12635 , 2024, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -12515 , 2375, 0.1, true));
                scenicList.push(new Scenery("pineTree", -11440 , 2401, -48.1, true));
                scenicList.push(new Scenery("pineTree", -10936 , 2016, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -11183 , 2742, Math.PI * 0.72, true));
                scenicList.push(new Scenery("pineTree", -11025 , 2984, - 0.39, true));
                scenicList.push(new Scenery("pineTree", -11590 , 3174, 1.98 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -11921 , 3713, Math.PI * 1.53, true));
                scenicList.push(new Scenery("pineTree", -11604 , 3829, - 0.50, true));
                scenicList.push(new Scenery("pineTree", -11311 , 3952, - Math.PI * 1.20, true));
                scenicList.push(new Scenery("pineTree", -11245 , 4527, Math.PI * 0.33, true));
                scenicList.push(new Scenery("pineTree", -10739 , 4526, - 0.80, true));
                scenicList.push(new Scenery("pineTree", -10336 , 4787, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -9734 , 5002, Math.PI * 0.65, true));
                scenicList.push(new Scenery("pineTree", -10894 , 4991, -Math.PI * 1.25, true));
                scenicList.push(new Scenery("pineTree", -10183 , 5372, - Math.PI * 0.19, true));
                scenicList.push(new Scenery("pineTree", -9067 , 5036, 0.995, true));
                scenicList.push(new Scenery("pineTree", -9449 , 5429, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -8885 , 5550, - Math.PI * 0.19, true));
                scenicList.push(new Scenery("pineTree", -8545 , 5837, - Math.PI * 0.50, true));
                scenicList.push(new Scenery("pineTree", -9187 , 6047, - 0.25, true));
                scenicList.push(new Scenery("pineTree", -9077 , 6365, Math.PI * 0.33, true));
                scenicList.push(new Scenery("pineTree", -8313 , 6303, Math.PI * 1.24, true));
                scenicList.push(new Scenery("pineTree", -7475 , 6291, 0.27, true));
                scenicList.push(new Scenery("pineTree", -7921 , 6103, - 0.40, true));
                scenicList.push(new Scenery("pineTree", -7804 , 5809, Math.PI * 0.20, true));
                scenicList.push(new Scenery("pineTree", -9923 , 5734, 0.2, true));
                scenicList.push(new Scenery("pineTree", -9864 , 6233, Math.PI * 1.24, true));
                scenicList.push(new Scenery("pineTree", -10591 , 6072, - Math.PI * 0.19, true));
                scenicList.push(new Scenery("pineTree", -10783 , 6306, - Math.PI * 1.33, true));
                scenicList.push(new Scenery("pineTree", -11250 , 5783, 1.87 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -11392 , 4881, - 0.25, true));
                scenicList.push(new Scenery("pineTree", -11725 , 4243, Math.PI * 1.61, true));
                scenicList.push(new Scenery("pineTree", -12296 , 4005, - Math.PI * 0.91, true));
                scenicList.push(new Scenery("pineTree", -12193 , 3257, 0.32, true));
                scenicList.push(new Scenery("pineTree", -11689 , 2800, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -11972 , 2192, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -10249 , 3374, 0, true));
                scenicList.push(new Scenery("pineTree", -12220 , 2789, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -12853 , 2723, Math.PI * 0.72, true));
                scenicList.push(new Scenery("pineTree", -10049 , 1824, - 0.39, true));
                scenicList.push(new Scenery("pineTree", -13093 , 2211, 1.98 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -13164 , 1675, Math.PI * 1.53, true));
                scenicList.push(new Scenery("pineTree", -10576 , 5660, - 0.50, true));
                scenicList.push(new Scenery("pineTree", -11448 , 5333, - Math.PI * 1.20, true));
                scenicList.push(new Scenery("pineTree", -11935 , 4582, - 0.77, true));
                scenicList.push(new Scenery("pineTree", -11526 , 6213, 0.56, true));
                scenicList.push(new Scenery("pineTree", -11860 , 6012, 0.995, true));
                scenicList.push(new Scenery("pineTree", -12024 , 5545, - Math.PI * 0.666, true));
                scenicList.push(new Scenery("pineTree", -11899 , 5050, 0.454545, true));
                scenicList.push(new Scenery("pineTree", -12542 , 6099, - 0.126, true));
                scenicList.push(new Scenery("pineTree", -12891 , 5725, 0.65, true));
                scenicList.push(new Scenery("pineTree", -13251 , 6393, Math.PI * 0.21, true));
                scenicList.push(new Scenery("pineTree", -12082 , 6404, - 0.283, true));
                scenicList.push(new Scenery("pineTree", -12650 , 5221, -0.19, true));
                scenicList.push(new Scenery("pineTree", -13097 , 4946, 0.26, true));
                scenicList.push(new Scenery("pineTree", -12725 , 4595, 0.066, true));
                scenicList.push(new Scenery("pineTree", -13011 , 3906, - 0.40, true));
                scenicList.push(new Scenery("pineTree", -12663 , 3593, Math.PI * 0.20, true));
                scenicList.push(new Scenery("pineTree", -13022 , 3142, 0.2, true));
                scenicList.push(new Scenery("pineTree", -12583 , 3044, 0.32, true));
                scenicList.push(new Scenery("pineTree", -9214 , 892, -Math.PI * 1.25, true));
                scenicList.push(new Scenery("pineTree", -9615 , 1045, - Math.PI * 0.19, true));
                scenicList.push(new Scenery("pineTree", -9823 , 20, 0.995, true));
                scenicList.push(new Scenery("pineTree", -8217 , -1658, - Math.PI * 0.50, true));
                scenicList.push(new Scenery("pineTree", -7891 , -1934, - 0.25, true));
                scenicList.push(new Scenery("pineTree", -7370 , -2314, Math.PI * 0.33, true));
                scenicList.push(new Scenery("pineTree", -7139 , -3469, Math.PI * 1.24, true));
                scenicList.push(new Scenery("pineTree", -7245 , -3134, 0.27, true));
                scenicList.push(new Scenery("pineTree", -9322 , 437, - 0.40, true));
                scenicList.push(new Scenery("pineTree", -10063 , 713, Math.PI * 0.20, true));
                scenicList.push(new Scenery("pineTree", -10309 , 243, 0.2, true));
                scenicList.push(new Scenery("pineTree", -9978 , -465, Math.PI * 1.24, true));
                scenicList.push(new Scenery("pineTree", -9245 , -705, - Math.PI * 0.19, true));
                scenicList.push(new Scenery("pineTree", -8896 , -1116, - Math.PI * 1.33, true));
                scenicList.push(new Scenery("pineTree", -11250 , 5783, 1.87 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -8684 , -1417, - 0.25, true));
                scenicList.push(new Scenery("pineTree", -8455 , -2074, Math.PI * 1.61, true));
                scenicList.push(new Scenery("pineTree", -7879 , -2381, - Math.PI * 0.91, true));
                scenicList.push(new Scenery("pineTree", -7395 , -2737, 0.32, true));
                scenicList.push(new Scenery("pineTree", -7737 , -3007, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -7693 , -3388, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -8189 , -2732, 0, true));
                scenicList.push(new Scenery("pineTree", -8213 , -3275, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -8500 , -3458, Math.PI * 0.72, true));
                scenicList.push(new Scenery("pineTree", -8904 , -3271, - 0.39, true));
                scenicList.push(new Scenery("pineTree", -9120 , -3546, 1.98 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -9665 , -3381, Math.PI * 1.53, true));
                scenicList.push(new Scenery("pineTree", -9772 , -2970, - 0.50, true));
                scenicList.push(new Scenery("pineTree", -9539 , -2410, - Math.PI * 1.20, true));
                scenicList.push(new Scenery("pineTree", -9194 , -2915, - 0.77, true));
                scenicList.push(new Scenery("pineTree", -8634 , -2906, 0.56, true));
                scenicList.push(new Scenery("pineTree", -8846 , -2378, 0.995, true));
                scenicList.push(new Scenery("pineTree", -9027 , -1800, - Math.PI * 0.666, true));
                scenicList.push(new Scenery("pineTree", -9454 , -1422, 0.454545, true));
                scenicList.push(new Scenery("pineTree", -10054 , -1709, - 0.126, true));
                scenicList.push(new Scenery("pineTree", -10143 , -2230, 0.65, true));
                scenicList.push(new Scenery("pineTree", -10155 , -2715, Math.PI * 0.21, true));
                scenicList.push(new Scenery("pineTree", -10087 , -3247, - 0.283, true));
                scenicList.push(new Scenery("pineTree", -10340 , -3485, -0.19, true));
                scenicList.push(new Scenery("pineTree", -10708 , -3304, 0.26, true));
                scenicList.push(new Scenery("pineTree", -10591 , 557, 0.066, true));
                scenicList.push(new Scenery("pineTree", -10433 , 990, - 0.40, true));
                scenicList.push(new Scenery("pineTree", -11134 , 889, Math.PI * 0.20, true));
                scenicList.push(new Scenery("pineTree", -10553 , -117, 0.23467, true));
                scenicList.push(new Scenery("pineTree", -10620 , -573, 0.37, true));
                scenicList.push(new Scenery("pineTree", -11684 , 1035, 0.19, true));
                scenicList.push(new Scenery("pineTree", -11574 , 557, 1.87 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -11037 , 319, - Math.PI * 1.33, true));
                scenicList.push(new Scenery("pineTree", -11063 , -160, - 0.25, true));
                scenicList.push(new Scenery("pineTree", -11296 , -475, Math.PI * 1.61, true));
                scenicList.push(new Scenery("pineTree", -10957 , -904, - Math.PI * 0.91, true));
                scenicList.push(new Scenery("pineTree", -10408 , -1066, 0.32, true));
                scenicList.push(new Scenery("pineTree", -9813 , -855, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -10063 , -1277, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -10673 , -2910, 0, true));
                scenicList.push(new Scenery("pineTree", -11317 , -3284, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -12008 , -3076, Math.PI * 0.72, true));
                scenicList.push(new Scenery("pineTree", -12445 , -3415, - 0.39, true));
                scenicList.push(new Scenery("pineTree", -10452 , -1525, 1.98 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -10634 , -1999, Math.PI * 1.53, true));
                scenicList.push(new Scenery("pineTree", -10572 , -2536, - 0.50, true));
                scenicList.push(new Scenery("pineTree", -11802 , -3406, - Math.PI * 1.20, true));
                scenicList.push(new Scenery("pineTree", -12137 , 1018, Math.PI * 0.33, true));
                scenicList.push(new Scenery("pineTree", -13073 , -3473, - 0.77, true));
                scenicList.push(new Scenery("pineTree", -12807 , -3020, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -13094 , -2621, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -12440 , -2139, 0, true));
                scenicList.push(new Scenery("pineTree", -12634 , 915, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -13149 , 1028, - Math.PI * 0.19, true));
                scenicList.push(new Scenery("pineTree", -12778 , 670, 0.19, true));
                scenicList.push(new Scenery("pineTree", -13103 , 381, - Math.PI * 1.33, true));
                scenicList.push(new Scenery("pineTree", -12750 , 128, 1.87 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -13105 , -609, - 0.25, true));
                scenicList.push(new Scenery("pineTree", -12693 , -1046, Math.PI * 1.61, true));
                scenicList.push(new Scenery("pineTree", -12994 , -1378, - Math.PI * 0.91, true));
                scenicList.push(new Scenery("pineTree", -12778 , -1823, 0.32, true));
                scenicList.push(new Scenery("pineTree", -13100 , -1978, Math.PI, true));
                scenicList.push(new Scenery("pineTree", -12501 , -2696, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -12004 , -2395, 0, true));
                scenicList.push(new Scenery("pineTree", -11552 , -2709, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -11084 , -2969, Math.PI * 0.72, true));
                scenicList.push(new Scenery("pineTree", -11138 , -2620, - 0.39, true));
                scenicList.push(new Scenery("pineTree", -11009 , -1658, 1.98 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -10875 , -1273, Math.PI * 1.53, true));
                scenicList.push(new Scenery("pineTree", -11771 , -879, - 0.50, true));
                scenicList.push(new Scenery("pineTree", -11539 , -11, - Math.PI * 1.20, true));
                scenicList.push(new Scenery("pineTree", -13155 , -213, Math.PI * 0.63, true));
                scenicList.push(new Scenery("pineTree", -12654 , -352, 0, true));
                scenicList.push(new Scenery("pineTree", -12388 , -742, Math.PI * 1.45, true));
                scenicList.push(new Scenery("pineTree", -12297 , -1401, Math.PI * 0.72, true));
                scenicList.push(new Scenery("pineTree", -12041 , -1866, - 0.39, true));
                scenicList.push(new Scenery("pineTree", -11418 , -2293, 1.98 * Math.PI, true));
                scenicList.push(new Scenery("pineTree", -11077 , -2148, Math.PI * 1.53, true));
                scenicList.push(new Scenery("pineTree", -11568 , -1864, - 0.50, true));
                scenicList.push(new Scenery("pineTree", -11381 , -1227, - Math.PI * 1.20, true));
                scenicList.push(new Scenery("pineTree", -12263 , -638, - 0.77, true));
                scenicList.push(new Scenery("pineTree", -11751 , -1497, Math.PI * 0.68, true));
                scenicList.push(new Scenery("pineTree", -12002 , -324, -0.454545, true));
                scenicList.push(new Scenery("pineTree", -12193 , 88, - 0.126, true));
                scenicList.push(new Scenery("pineTree", -12332 , 430, 0.54, true));
                scenicList.push(new Scenery("pineTree", -12017 , 569, Math.PI * 0.21, true));

                //replacement trees of the map s1e1
                scenicList.push(new Scenery("pineTree", -7583 , -3885, 1.2, true));
                scenicList.push(new Scenery("pineTree", -8065 , -3688, -3, true));
                scenicList.push(new Scenery("pineTree", -8710 , -3916, -2.5, true));
                scenicList.push(new Scenery("pineTree", -9578 , -3837, 4, true));
                scenicList.push(new Scenery("pineTree", -10111 , -3906, -5, true));
                scenicList.push(new Scenery("pineTree", -11025 , -3706, 2.6, true));
                scenicList.push(new Scenery("pineTree", -11548 , -3882, 5.2, true));
                scenicList.push(new Scenery("pineTree", -12132 , -3725, -1, true));
                scenicList.push(new Scenery("pineTree", -12700 , -3822, 6, true));
                scenicList.push(new Scenery("pineTree", -13186 , -3942, -6.3, true));
                scenicList.push(new Scenery("pineTree", -6995 , -3821, 6.995, true));
                scenicList.push(new Scenery("pineTree", -6398 , -3743, 0.23, true));
                scenicList.push(new Scenery("pineTree", -6848 , -4186, -3.678, true));
                scenicList.push(new Scenery("pineTree", -8029 , -4161, 3.1, true));
                scenicList.push(new Scenery("pineTree", -7448 , -4370, 4.5, true));
                scenicList.push(new Scenery("pineTree", -8620 , -4332, -1.7, true));
                scenicList.push(new Scenery("pineTree", -9388 , -4224, -4.62, true));
                scenicList.push(new Scenery("pineTree", -9795 , -4691, -5.9, true));
                scenicList.push(new Scenery("pineTree", -9968 , -4233, 2.3, true));
                scenicList.push(new Scenery("pineTree", -10507 , -4023, 2.5, true));
                scenicList.push(new Scenery("pineTree", -10465 , -4521, 3.98, true));
                scenicList.push(new Scenery("pineTree", -11005 , -4119, -4.1, true));
                scenicList.push(new Scenery("pineTree", -10660 , -4900, -2, true));
                scenicList.push(new Scenery("pineTree", -11008 , -4524, -4.8, true));
                scenicList.push(new Scenery("pineTree", -11744 , -4280, -1.891, true));
                scenicList.push(new Scenery("pineTree", -11263 , -4864, 5.435, true));
                scenicList.push(new Scenery("pineTree", -11857 , -4696, 3.82, true));
                scenicList.push(new Scenery("pineTree", -11717 , -5059, -6.42, true));
                scenicList.push(new Scenery("pineTree", -12329 , -4069, 2.93, true));
                scenicList.push(new Scenery("pineTree", -12245 , -4426, -4.7, true));
                scenicList.push(new Scenery("pineTree", -12174 , -4947, -2.2, true));
                scenicList.push(new Scenery("pineTree", -12232 , -5375, 5.68, true));
                scenicList.push(new Scenery("pineTree", -12808 , -5502, 1, true));
                scenicList.push(new Scenery("pineTree", -12913 , -4233, -1.5, true));
                scenicList.push(new Scenery("pineTree", -13143 , -4801, 3, true));
                scenicList.push(new Scenery("pineTree", -12722, -4981, 2.136, true));
                scenicList.push(new Scenery("pineTree", -13009 , -5159, -1.29, true));
                scenicList.push(new Scenery("pineTree", -11286 , -5204, 7, true));

                //replacement trees for the map e2.
                scenicList.push(new Scenery("pineTree", -13696, 1772, 1.3, true));
                scenicList.push(new Scenery("pineTree", -14036, 1575, 2.25, true));
                scenicList.push(new Scenery("pineTree", -14255, 1933, -5.3, true));
                scenicList.push(new Scenery("pineTree", -14548, 1709, -4.25, true));
                scenicList.push(new Scenery("pineTree", -13749, 2072, 3, true));
                scenicList.push(new Scenery("pineTree", -13699, 707, -1.3, true));
                scenicList.push(new Scenery("pineTree", -13735, 1127, -2.25, true));
                scenicList.push(new Scenery("pineTree", -14119, 917, 5.4, true));
                scenicList.push(new Scenery("pineTree", -13447, 104, 4.25, true));
                scenicList.push(new Scenery("pineTree", -14194, 574, -3.5, true));
                scenicList.push(new Scenery("pineTree", -13709, -299, 4.6, true));
                scenicList.push(new Scenery("pineTree", -13857, 269, 2, true));
                scenicList.push(new Scenery("pineTree", -14349, 210, 2.95, true));
                scenicList.push(new Scenery("pineTree", -13966, -29, -6, true));
                scenicList.push(new Scenery("pineTree", -14213, -537, -5, true));
                scenicList.push(new Scenery("pineTree", -13696, -764, 3.7, true));
                scenicList.push(new Scenery("pineTree", -14226, -958, -2, true));
                scenicList.push(new Scenery("pineTree", -13429, -1039, -2.75, true));
                scenicList.push(new Scenery("pineTree", -13757, -1282, 6.1, true));
                scenicList.push(new Scenery("pineTree", -14638, 1014, 4.85, true));
                scenicList.push(new Scenery("pineTree", -14088, -1655, -4.2, true));
                scenicList.push(new Scenery("pineTree", -13524, -1559, 3.8, true));
                scenicList.push(new Scenery("pineTree", -13681, -1845, 1.4, true));
                scenicList.push(new Scenery("pineTree", -14604, 718, 1.68, true));
                scenicList.push(new Scenery("pineTree", -14346, -203, 5.79, true));
                scenicList.push(new Scenery("pineTree", -14298, -1385, -5.34, true));
                scenicList.push(new Scenery("pineTree", -13604, -2246, -2.75, true));
                scenicList.push(new Scenery("pineTree", -14054, -2088, 6.1, true));
                scenicList.push(new Scenery("pineTree", -14422, -1919, -4.85, true));
                scenicList.push(new Scenery("pineTree", -14636, -1141, -6.2, true));
                scenicList.push(new Scenery("pineTree", -14750, -1668, -3.8, true));
                scenicList.push(new Scenery("pineTree", -14003, -2427, -1.4, true));
                scenicList.push(new Scenery("pineTree", -13513, -2573, -1.68, true));
                scenicList.push(new Scenery("pineTree", -13401, -2965, -5.79, true));
                scenicList.push(new Scenery("pineTree", -13693, -3272, 5.34, true));
                scenicList.push(new Scenery("pineTree", -13853, -3600, 2.4, true));
                scenicList.push(new Scenery("pineTree", -13898, -2842, -2.25, true));
                scenicList.push(new Scenery("pineTree", -14160, -3433, 5.6, true));
                scenicList.push(new Scenery("pineTree", -14274, -3142, -4.4, true));
                scenicList.push(new Scenery("pineTree", -14489, -2910, 2.55, true));
                scenicList.push(new Scenery("pineTree", -14605, -3349, -1.3, true));
                scenicList.push(new Scenery("pineTree", -14225, -2703, -2.25, true));
                scenicList.push(new Scenery("pineTree", -14570, -2559, -5.9, true));
                scenicList.push(new Scenery("pineTree", -14744, -2267, 4.25, true));
                scenicList.push(new Scenery("pineTree", -14315, -2276, -3.5, true));
                scenicList.push(new Scenery("pineTree", -14899, -3219, 4.6, true));
                scenicList.push(new Scenery("pineTree", -14827, -3578, 2.678, true));
                scenicList.push(new Scenery("pineTree", -14623, -727, 2.95, true));
                scenicList.push(new Scenery("pineTree", -14891, -334, -6, true));
                scenicList.push(new Scenery("pineTree", -14685, 31, -5, true));
                scenicList.push(new Scenery("pineTree", -14837, 405, 3.7, true));
                scenicList.push(new Scenery("pineTree", -14850, 1520, -2, true));
                scenicList.push(new Scenery("pineTree", -14699, 2005, -2.75, true));
                scenicList.push(new Scenery("pineTree", -13700, 2375, 6.6, true));
                scenicList.push(new Scenery("pineTree", -13454, 2883, 4.85, true));
                scenicList.push(new Scenery("pineTree", -13835, 2716, -4.2, true));
                scenicList.push(new Scenery("pineTree", -14187, 2273, 3.8, true));
                scenicList.push(new Scenery("pineTree", -14702, 2454, 1.4, true));
                scenicList.push(new Scenery("pineTree", -14278, 2555, -1.9, true));
                scenicList.push(new Scenery("pineTree", -14550, 2857, 5.82, true));
                scenicList.push(new Scenery("pineTree", -14060, 3070, 8.9, true));
                scenicList.push(new Scenery("pineTree", -14775, 3265, -3.75, true));
                scenicList.push(new Scenery("pineTree", -13615, 3272, 6.25, true));
                scenicList.push(new Scenery("pineTree", -14006, 3491, 4.45, true));
                scenicList.push(new Scenery("pineTree", -13382, 3558, -6.77, true));
                scenicList.push(new Scenery("pineTree", -13811, 3791, -3.8, true));
                scenicList.push(new Scenery("pineTree", -14545, 3577, -2.1, true));
                scenicList.push(new Scenery("pineTree", -14751, 4028, -1.68, true));
                scenicList.push(new Scenery("pineTree", -14245, 3877, -5.36, true));
                scenicList.push(new Scenery("pineTree", -14299, 4240, 6, true));
                scenicList.push(new Scenery("pineTree", -13935, 4112, -1.5, true));
                scenicList.push(new Scenery("pineTree", -13455, 4015, 1.5, true));
                scenicList.push(new Scenery("pineTree", -14828, 4400, 3.5, true));
                scenicList.push(new Scenery("pineTree", -13638, 4478, -7, true));
                scenicList.push(new Scenery("pineTree", -13579, 4760, 4.8, true));
                scenicList.push(new Scenery("pineTree", -14176, 4636, -4.15, true));
                scenicList.push(new Scenery("pineTree", -14636, 4744, 5, true));
                scenicList.push(new Scenery("pineTree", -13902, 5082, -2.64, true));
                scenicList.push(new Scenery("pineTree", -13402, 5321, 6.64, true));
                scenicList.push(new Scenery("pineTree", -13541, 5707, 0, true));
                scenicList.push(new Scenery("pineTree", -14000, 5467, 24, true));
                scenicList.push(new Scenery("pineTree", -14382, 5058, -1, true));
                scenicList.push(new Scenery("pineTree", -14904, 4994, -3.14, true));
                scenicList.push(new Scenery("pineTree", -14644, 5409, 4.326, true));
                scenicList.push(new Scenery("pineTree", -13707, 6029, 0.2, true));
                scenicList.push(new Scenery("pineTree", -14063, 6249, -1.81, true));
                scenicList.push(new Scenery("pineTree", -13699, 6445, 8.92, true));
                scenicList.push(new Scenery("pineTree", -14144, 5820, 3.14, true));
                scenicList.push(new Scenery("pineTree", -14623, 5700, -4.326, true));
                scenicList.push(new Scenery("pineTree", -14450, 6526, 2.7, true));
                scenicList.push(new Scenery("pineTree", -14642, 6116, 5.82, true));
                scenicList.push(new Scenery("pineTree", -14893, 6438, 0.726, true));

                //plants of the forest
                scenicList.push(new Scenery("neprilnePlant", -9639 , 2010, 0.11, true));
                scenicList.push(new Scenery("neprilnePlant", -10556 , -1226, -0.39, true));
                scenicList.push(new Scenery("neprilnePlant", -7891 , -297, 0.47, true));
                scenicList.push(new Scenery("stomwikPlant", -11300 , -195, -0.25, true));
                scenicList.push(new Scenery("stomwikPlant", -11227 , 3073, 0.25, true));
                scenicList.push(new Scenery("akerPlant", -8231 , 3819, 0.25, true));
                scenicList.push(new Scenery("akerPlant", -9761 , 2581, -0.35, true));
                scenicList.push(new Scenery("akerPlant", -9448 , 4934, 0.85, true));
                scenicList.push(new Scenery("pluttPlant", -11859 , 4788, -1.99, true));
                scenicList.push(new Scenery("pluttPlant", -12504 , 4632, -1.99, true));
                scenicList.push(new Scenery("tylunPlant", -12021 , 4296, 0, true));
                scenicList.push(new Scenery("akerPlant", -12083 , 3772, 0.38, true));
                scenicList.push(new Scenery("culprisPlant", -11508 , 3369, 3, true));
                scenicList.push(new Scenery("culprisPlant", -11188 , 2437, 1, true));
                scenicList.push(new Scenery("neprilnePlant", -12402 , 5071, -0.12, true));
                scenicList.push(new Scenery("akerPlant", -12137 , 6239, 0.67, true));
                scenicList.push(new Scenery("akerPlant", -7797 , 584, 2.15, true));
                scenicList.push(new Scenery("stomwikPlant", -8318 , -1954, -2.25, true));
                scenicList.push(new Scenery("pluttPlant", -7905 , -3013, Math.PI, true));
                scenicList.push(new Scenery("culprisPlant", -10581 , -3108, -2, true));
                scenicList.push(new Scenery("neprilnePlant", -11731 , -3186, 0.15, true));
                scenicList.push(new Scenery("neprilnePlant", -12416 , -3062, -0.45, true));
                scenicList.push(new Scenery("stomwikPlant", -12630 , -3084, 1.16, true));
                scenicList.push(new Scenery("akerPlant", -12526 , -2289, -2.75, true));
                scenicList.push(new Scenery("pluttPlant", -9196 , -3085, -1.99, true));
                scenicList.push(new Scenery("culprisPlant", -12176 , -1052, -1, true));
                scenicList.push(new Scenery("akerPlant", -12591 , 24, 0.44, true));
                scenicList.push(new Scenery("akerPlant", -12324 , 50, 1.26, true));
                scenicList.push(new Scenery("neprilnePlant", -12246 , -174, -2.3122512, true));
                scenicList.push(new Scenery("neprilnePlant", -8865 , 815, 1.4822332, true));
                scenicList.push(new Scenery("pluttPlant", -8549 , 5995, Math.PI, true));
                scenicList.push(new Scenery("neprilnePlant", -10044 , 5079, 1.89314221, true));
                scenicList.push(new Scenery("glinPlant", -8443 , 3193, 0, true));
                scenicList.push(new Scenery("glinPlant", -10762 , 2744, 1, true));
                scenicList.push(new Scenery("glinPlant", -9620 , -923, 0, true));
                scenicList.push(new Scenery("glinPlant", -9585 , -1144, 3, true));
                scenicList.push(new Scenery("glinPlant", -9353 , 4496, 0, true));
                scenicList.push(new Scenery("glinPlant", -9422 , 4483, -2, true));
                scenicList.push(new Scenery("glinPlant", -9447 , 4519, 2.9, true));
                scenicList.push(new Scenery("glinPlant", -9493 , 4485, 1, true));
                scenicList.push(new Scenery("glinPlant", -9195 , -1943, 0.65, true));
                scenicList.push(new Scenery("culprisPlant", -10156 , -2418, -3.212, true));
                scenicList.push(new Scenery("akerPlant", -9458 , -2568, -2.75, true));
                scenicList.push(new Scenery("glinPlant", -11587 , -2109, 2, true));
                scenicList.push(new Scenery("stomwikPlant", -11965 , -1414, 0, true));
                scenicList.push(new Scenery("glinPlant", -12768 , -1507, -1.55, true));
                scenicList.push(new Scenery("glinPlant", -9157 , 4196, -1.55, true));
                scenicList.push(new Scenery("halcifPlant", -11413 , 3822, -0.55, true));
                scenicList.push(new Scenery("cyrinthilimPlant", -11015 , 152, 1.23, true));
                scenicList.push(new Scenery("wyrPlant", -9872 , 4197, -Math.PI * 0.16, true));
                scenicList.push(new Scenery("wyrPlant", -11220 , -1408, Math.PI * 0.67, true));
                scenicList.push(new Scenery("wyrPlant", -8187 , -2331, -Math.PI * 0.92, true));
                scenicList.push(new Scenery("halcifPlant", -12291 , -2532, 0.85, true));
                scenicList.push(new Scenery("cyrinthilimPlant", -10634 , 2471, -2.34, true));

                //stumps of the "Wuncwer" woods
                scenicList.push(new Scenery("pineStumps", -6474 , 1900, 0, true));
                scenicList.push(new Scenery("pineStumps", -6496 , 548, -0.75, true));
                scenicList.push(new Scenery("pineStumps", -6191 , 2871, 1.6, true));
                scenicList.push(new Scenery("pineStumps", -7423 , 4794, 0.2, true));
                scenicList.push(new Scenery("pineStumps", -6544 , 5895, -0.9, true));
                scenicList.push(new Scenery("pineStumps", -6659 , 4000, 0.23, true));

                scenicList.push(new Scenery("pineStumps", -6248 , 4985, -1.6, true));
                scenicList.push(new Scenery("pineStumps", -5852 , -329, 0, true));
                scenicList.push(new Scenery("pineStumps", -6818 , -650, -1.4, true));
                scenicList.push(new Scenery("pineStumps", -7003 , -1749, 0, true));
                scenicList.push(new Scenery("pineStumps", -6395 , -2816, -0.88, true));
                scenicList.push(new Scenery("pineStumps", -7911 , 5498, -0.3, true));


                change = "e1";
            }
        }
        else if (region == "s1") //Y > 6290 && Y < 32370
        {
            if (change != "s1")
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
                //worldItems = [];

                //Delete All Non-native Structures
                //todo when structures are created add their list's refresh sequence here.

                //Delete All Non-native Scenery
                scenicList = [];

                //REGION CREATION
                //Build AI Units
                var bushornot = Math.floor(Math.random() * 9);
                if (bushornot == 1)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2977, -4894, "Grush", false, "turtlebob"));
                    ArtificialIntelligenceAccess.push(new Unit(3082, -4954, "Grush", "baby", "turtletim"));
                    ArtificialIntelligenceAccess.push(new Unit(5669, -4701, "Grush", false, "turtledahlia"));
                    scenicList.push(new Scenery("butterMellowPlant", -1071 , -10780, 12.6, true));
                }
                else
                {
                    scenicList.push(new Scenery("techiPlant", -1071 , -10780, 12.6, true));
                    scenicList.push(new Scenery("grushweedPlant", 2977, -4894, 0, 1)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("grushweedPlant", 3082, -4954, 0, 0.6)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("grushweedPlant", 5669, -4701, 0, 1)); //for grush weed the last number determines its size multiplier.
                }

                if (bushornot == 2)
                {
                    ArtificialIntelligenceAccess.push(new Unit(5612, -4955, "Grush", false, "turtlejoe"));
                    ArtificialIntelligenceAccess.push(new Unit(5885, -5133, "Grush", "baby", "turtlejimmy"));
                    ArtificialIntelligenceAccess.push(new Unit(765, -7802, "Grush", "baby", "turtletommy"));
                    ArtificialIntelligenceAccess.push(new Unit(704, -7814, "Grush", "baby", "turtletimmy"));
                    ArtificialIntelligenceAccess.push(new Unit(616, -7845, "Grush", "baby", "turtledarly"));
                    ArtificialIntelligenceAccess.push(new Unit(728, -7995, "Grush", false, "turtlejohn"));
                    scenicList.push(new Scenery("palntPlant", -1544 , -7933, -2.1, true));
                    ArtificialIntelligenceAccess.push(new Unit(1658, -7708, "Naaprid", false, "dopra"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(3008, -7333, "Naaprid", false, "opra"));
                    scenicList.push(new Scenery("palntPlant", -1544 , -7933, -2.1, true));
                    scenicList.push(new Scenery("grushweedPlant", 728, -7995, 2.5, 1)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("grushweedPlant", 704, -7814, 2.5, 0.6)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("grushweedPlant", 765, -7802, 0, 0.6)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("grushweedPlant", 616, -7845, -1, 0.6)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("grushweedPlant", 5612, -4955, 0, 1)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("grushweedPlant", 5885, -5133, 0, 0.6)); //for grush weed the last number determines its size multiplier.
                }

                if (bushornot == 7)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-1294, -7184, "Grush", false, "turtlejamz"));
                    scenicList.push(new Scenery("grushweedPlant", -1495, -7108, 0, 1)); //for grush weed the last number determines its size multiplier.
                    ArtificialIntelligenceAccess.push(new Unit(5798, -4989, "Grush", true, "turtleTrudge"));
                    ArtificialIntelligenceAccess.push(new Unit(1345, -13190, "Grush", false, "turtleBudge"));
                    scenicList.push(new Scenery("palntPlant", -1387 , -10444, 2.2, true));
                    ArtificialIntelligenceAccess.push(new Unit(-2293, -9072, "Evrak", true, "evil"));
                }
                else
                {
                    scenicList.push(new Scenery("grushweedPlant", -1294, -7184, 0, 1)); //for grush weed the last number determines its size multiplier.
                    ArtificialIntelligenceAccess.push(new Unit(-1495, -7108, "Grush", false, "turtlejamza"));
                    ArtificialIntelligenceAccess.push(new Unit(-2293, -9072, "Evrak", false, "evil"));
                    scenicList.push(new Scenery("itlinPlant", -1387 , -10444, -2.2, true));
                    scenicList.push(new Scenery("grushweedPlant", 1345, -13190, 0, 1.425)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("grushweedPlant", 5798, -4989, 2, 1.6)); //for grush weed the last number determines its size multiplier.
                }

                if (bushornot == 5)
                {
                    ArtificialIntelligenceAccess.push(new Unit(1217, -8134, "Grush", true, "turtledarla"));
                    ArtificialIntelligenceAccess.push(new Unit(5593, -4493, "Grush", true, "turtletom"));
                    ArtificialIntelligenceAccess.push(new Unit(2253, -12972, "Grush", false, "turtletyler"));
                    scenicList.push(new Scenery("butterMellowPlant", -597 , -5256, 0, true));
                    ArtificialIntelligenceAccess.push(new Unit(1080, -13248, "Grush", "baby", "turtletonk"));
                    ArtificialIntelligenceAccess.push(new Unit(-1838, -11241, "Frich", "massive", "superpuper"));
                    ArtificialIntelligenceAccess.push(new Unit(1486, -13498, "Golgemoff", true, "Sweetling"));
                }
                else
                {
                    scenicList.push(new Scenery("grushweedPlant", 2253, -12972, 6.5, 1)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("grushweedPlant", 1080, -13248, 0.6, 0.6)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("techiPlant", -597 , -5256, 0, true));
                    scenicList.push(new Scenery("grushweedPlant", 1217, -8134, 1, 1.5)); //for grush weed the last number determines its size multiplier.
                    scenicList.push(new Scenery("grushweedPlant", 5593, -4493, 0, 1.5)); //for grush weed the last number determines its size multiplier.
                }

                //Friches in the plains
                ArtificialIntelligenceAccess.push(new Unit(4510, -6220, "Frich", true, "sweatypie"));
                ArtificialIntelligenceAccess.push(new Unit(4676, -6326, "Frich", false, "manospequenas"));
                ArtificialIntelligenceAccess.push(new Unit(922, -6521, "Frich", true, "paydulce"));
                ArtificialIntelligenceAccess.push(new Unit(819, -6556, "Frich", false, "piespequenos"));
                ArtificialIntelligenceAccess.push(new Unit(1006, -6779, "Frich", false, "culo"));
                ArtificialIntelligenceAccess.push(new Unit(1048, -6976, "Frich", true, "verga"));
                ArtificialIntelligenceAccess.push(new Unit(912, -6945, "Frich", false, "huelefeo"));
                ArtificialIntelligenceAccess.push(new Unit(492, -7087, "Frich", false, "mesamesa"));
                ArtificialIntelligenceAccess.push(new Unit(-818, -11490, "Frich", true, "superculo"));
                ArtificialIntelligenceAccess.push(new Unit(-901, -11511, "Frich", true, "superverga"));
                ArtificialIntelligenceAccess.push(new Unit(-870, -11615, "Frich", true, "superfeo"));
                ArtificialIntelligenceAccess.push(new Unit(-989, -11564, "Frich", false, "sillasilla"));
                ArtificialIntelligenceAccess.push(new Unit(-1706, -11155, "Frich", false, "superfea"));
                ArtificialIntelligenceAccess.push(new Unit(840, -9459, "Frich", false, "superfly"));
                ArtificialIntelligenceAccess.push(new Unit(5050, -5181, "Frich", false, "chal"));
                ArtificialIntelligenceAccess.push(new Unit(4779, -5070, "Frich", false, "chol"));
                ArtificialIntelligenceAccess.push(new Unit(4909, -4986, "Frich", false, "chil"));
                ArtificialIntelligenceAccess.push(new Unit(-308, -4190, "Frich", true, "cholera"));
                ArtificialIntelligenceAccess.push(new Unit(1175, -4670, "Frich", false, "chale"));
                ArtificialIntelligenceAccess.push(new Unit(1274, -4852, "Frich", false, "chole"));
                ArtificialIntelligenceAccess.push(new Unit(1166, -4813, "Frich", false, "chile"));
                ArtificialIntelligenceAccess.push(new Unit(-914, -4703, "Frich", true, "argentina"));
                ArtificialIntelligenceAccess.push(new Unit(2819, -5572, "Frich", true, "bolivia"));
                ArtificialIntelligenceAccess.push(new Unit(6325, -4420, "Frich", false, "chule"));


                //Golgemoffs crawling through your nightmares...
                /*var golgSz = "baby";

                 if (currentSeason == "Frost")
                 {
                 golgSz = false;
                 }
                 if (currentSeason == "Bounty")
                 {
                 golgSz = true;
                 }
                 if (currentSeason != "Bright")
                 {
                 for (var i = 0; i < 5; i++)
                 {
                 for (var j = 0; j < 5; j++)
                 {
                 var rdmX = ((30 * Math.random()) - 15) * i;
                 var rdmY = ((30 * Math.random()) - 15) * j;
                 ArtificialIntelligenceAccess.push(new Unit(3337 + rdmX, -5504 + rdmY, "Golgemoff", golgSz, "Teek", {patrolStops: 5, patrolLoop: true, route:[[3617 + rdmX, -7861 + rdmY], [529 + rdmX, -10411 + rdmY], [-698 + rdmX, -8887 + rdmY], [-2232 + rdmX, -8130 + rdmY], [3337 + rdmX, -5504 + rdmY]]}));
                 }
                 }
                 }*/
                ArtificialIntelligenceAccess.push(new Unit(4526, -5718, "Golgemoff", false, "Keek", {patrolStops: 7, patrolLoop: true, route:[[6981, -6924], [6042, -5080], [5943, -4895], [5813, -4301], [-3119, -4307], [-1572, -6834], 4526, -5718]}));

                //Evrak and Avrak dominating the plains!!!
                ArtificialIntelligenceAccess.push(new Unit(577, -5839, "Evrak", false, "elvin"));
                ArtificialIntelligenceAccess.push(new Unit(727, -12342, "Evrak", false, "evin"));
                ArtificialIntelligenceAccess.push(new Unit(3273, -9944, "Evrak", false, "evarin"));
                ArtificialIntelligenceAccess.push(new Unit(5974, -7025, "Evrak", false, "evarlin"));
                ArtificialIntelligenceAccess.push(new Unit(3584, -12245, "Evrak", true, "Telvarin"));
                ArtificialIntelligenceAccess.push(new Unit(-1799, -12734, "Avrak", true, "alkra"));
                ArtificialIntelligenceAccess.push(new Unit(-1235, -12105, "Avrak", false, "alka"));
                ArtificialIntelligenceAccess.push(new Unit(4638, -5615, "Avrak", false, "alkro"));
                ArtificialIntelligenceAccess.push(new Unit(1298, -10506, "Avrak", false, "alko"));
                ArtificialIntelligenceAccess.push(new Unit(942, -10185, "Avrak", false, "alkii"));
                ArtificialIntelligenceAccess.push(new Unit(5611, -10601, "Avrak", true, "alkrii"));
                ArtificialIntelligenceAccess.push(new Unit(3873, -7008, "Avrak", false, "alke"));

                //A few varns prowl the fields!!!
                ArtificialIntelligenceAccess.push(new Unit(782, -9091, "Varn", true, "elp"));
                ArtificialIntelligenceAccess.push(new Unit(703, -9124, "Varn", true, "h"));
                ArtificialIntelligenceAccess.push(new Unit(451, -9021, "Varn", true, "mepl"));
                ArtificialIntelligenceAccess.push(new Unit(-2228, -10171, "Varn", false, "ease"));
                ArtificialIntelligenceAccess.push(new Unit(-813, -8554, "Varn", false, "coolBouy"));
                ArtificialIntelligenceAccess.push(new Unit(-2474, -4294, "Varn", true, "ent"));
                ArtificialIntelligenceAccess.push(new Unit(-2860, -4164, "Varn", true, "artm"));
                ArtificialIntelligenceAccess.push(new Unit(-2301, -4213, "Varn", false, "dep"));


                //Anters!!!
                scenicList.push(new Scenery("anterHill", 400, -6000, 0, true));
                scenicList.push(new Scenery("anterHill", 170, -10453, 2.7, true));
                scenicList.push(new Scenery("anterHill", 5691, -13164, -5.7, true));

                //Ardils!!!
                ArtificialIntelligenceAccess.push(new Unit(-1190, -9867, "Ardil", true, "Butklii"));
                ArtificialIntelligenceAccess.push(new Unit(-232, -9270, "Ardil", false, "Butkliil"));
                ArtificialIntelligenceAccess.push(new Unit(15, -9447, "Ardil", true, "Butkliik"));
                ArtificialIntelligenceAccess.push(new Unit(138, -13222, "Ardil", false, "Buttlick"));
                ArtificialIntelligenceAccess.push(new Unit(-2433, -12028, "Ardil", true, "Buklii"));
                ArtificialIntelligenceAccess.push(new Unit(5792, -5342, "Ardil", false, "Buliil"));
                ArtificialIntelligenceAccess.push(new Unit(2934, -5905, "Ardil", false, "Buliilk"));
                ArtificialIntelligenceAccess.push(new Unit(4273, -9773, "Ardil", true, "Buklii"));
                ArtificialIntelligenceAccess.push(new Unit(2361, -8858, "Ardil", false, "Bullkilt"));
                ArtificialIntelligenceAccess.push(new Unit(3644, -5757, "Ardil", false, "Bullkilp"));

                //Naaprids grazing!!!
                ArtificialIntelligenceAccess.push(new Unit(808, -11538, "Naaprid", false, "Hueso"));
                ArtificialIntelligenceAccess.push(new Unit(480, -11396, "Naaprid", false, "Hueco"));
                ArtificialIntelligenceAccess.push(new Unit(569, -11716, "Naaprid", false, "Luto"));
                ArtificialIntelligenceAccess.push(new Unit(805, -11862, "Naaprid", false, "Pena"));
                ArtificialIntelligenceAccess.push(new Unit(1038, -11781, "Naaprid", "baby", "Huesito"));
                ArtificialIntelligenceAccess.push(new Unit(924, -11594, "Naaprid", "baby", "Huequita"));
                ArtificialIntelligenceAccess.push(new Unit(254, -11037, "Naaprid", true, "Sufrimiento"));
                ArtificialIntelligenceAccess.push(new Unit(475, -12180, "Naaprid", true, "Agobio"));
                ArtificialIntelligenceAccess.push(new Unit(5017, -8591, "Naaprid", false, "ad"));
                ArtificialIntelligenceAccess.push(new Unit(4740, -8444, "Naaprid", false, "lad"));
                ArtificialIntelligenceAccess.push(new Unit(4813, -8159, "Naaprid", false, "dad"));
                ArtificialIntelligenceAccess.push(new Unit(5077, -8224, "Naaprid", false, "Pad"));
                ArtificialIntelligenceAccess.push(new Unit(4350, -8271, "Naaprid", false, "Pod"));
                ArtificialIntelligenceAccess.push(new Unit(4483, -8366, "Naaprid", "baby", "rod"));
                ArtificialIntelligenceAccess.push(new Unit(4933, -8304, "Naaprid", "baby", "claud"));
                ArtificialIntelligenceAccess.push(new Unit(4931, -8444, "Naaprid", "baby", "bo"));
                ArtificialIntelligenceAccess.push(new Unit(4626, -8263, "Naaprid", "baby", "shu"));
                ArtificialIntelligenceAccess.push(new Unit(4717, -8770, "Naaprid", true, "tod"));
                ArtificialIntelligenceAccess.push(new Unit(4102, -8558, "Naaprid", true, "kerod"));
                ArtificialIntelligenceAccess.push(new Unit(4368, -7993, "Naaprid", true, "dod"));
                ArtificialIntelligenceAccess.push(new Unit(5110, -7913, "Naaprid", true, "kerod"));
                ArtificialIntelligenceAccess.push(new Unit(5472, -8361, "Naaprid", true, "dode"));

                ArtificialIntelligenceAccess.push(new Unit(3400, -7644, "Naaprid", true, "tode"));
                ArtificialIntelligenceAccess.push(new Unit(2769, -7608, "Naaprid", false, "doda"));
                ArtificialIntelligenceAccess.push(new Unit(3028, -7728, "Naaprid", false, "poda"));
                ArtificialIntelligenceAccess.push(new Unit(3010, -7568, "Naaprid", "baby", "dodo"));

                //Perma-Grushes!!!
                ArtificialIntelligenceAccess.push(new Unit(1166, -7761, "Grush", true, "Cruncher"));
                ArtificialIntelligenceAccess.push(new Unit(1196, -13286, "Grush", false, "Crutcher"));
                ArtificialIntelligenceAccess.push(new Unit(-831, -4602, "Grush", false, "Brutcher"));
                ArtificialIntelligenceAccess.push(new Unit(-1625, -7172, "Grush", "baby", "Butch"));

                //Scenery
                scenicList.push(new Scenery("grushweedPlant", 3160 , -4483, -0.3, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 3250 , -4508, -1.3, 0.6)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 2260 , -13141, -1.3, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 2327 , -12965, 2, 0.6)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 3200 , -4541, 0.3, 0.6)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 3257 , -4597, 3.2, 1.2)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 3129 , -4815, -0.8, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 2899 , -5057, 0, 1.5)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 3025 , -5183, 0, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 5462 , -4553, 0, 1.5)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 5785 , -4826, 0, 1.1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 5632 , -4801, 0, 0.8)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 5547 , -5043, 0, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 5842 , -5190, 0, 0.6)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 5568 , -5328, -1, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 1436 , -8010, 0, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 1400 , -8000, 0, 1.15)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 851 , -8382, -5, 1.5)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 395 , -8227, 5, 1.2)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 1006 , -12969, 1.111, 1.5)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 837 , -12997, 1, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", 882 , -12903, 1.6, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", -1501 , -7190, 3.9, 0.9)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", -1770 , -7376, -1.43, 1.7)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", -1398 , -7335, 2.43, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", -1508 , -7609, 3.333, 1.1657)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", -634 , -4556, -5.333, 1.5)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("grushweedPlant", -928 , -4507, 6.333, 1)); //for grush weed the last number determines its size multiplier.
                scenicList.push(new Scenery("techiPlant", 2702 , -12061, -8.5, true));
                scenicList.push(new Scenery("techiPlant", 4234 , -5994, -2.5, true));
                scenicList.push(new Scenery("techiPlant", 5419 , -6449, 2.146, true));
                scenicList.push(new Scenery("techiPlant", 1213 , -10947, -2.146, true));
                scenicList.push(new Scenery("techiPlant", 1818 , -13349, -3.05, true));
                scenicList.push(new Scenery("techiPlant", 6059 , -6527, 1, true));
                scenicList.push(new Scenery("techiPlant", 5391 , -5262, -0.1, true));
                scenicList.push(new Scenery("techiPlant", 890 , -7731, -0.2, true));
                scenicList.push(new Scenery("techiPlant", 2227 , -13406, -1.6, true));
                scenicList.push(new Scenery("techiPlant", 707 , -13146, 1.2, true));
                scenicList.push(new Scenery("techiPlant", 3043 , -13540, 1.82, true));
                scenicList.push(new Scenery("techiPlant", 288 , -13032, 0, true));
                scenicList.push(new Scenery("techiPlant", 3204 , -5508, 4, true));
                scenicList.push(new Scenery("techiPlant", 2228 , -4731, -1.46, true));
                scenicList.push(new Scenery("techiPlant", 1510 , -8302, 1.5, true));
                scenicList.push(new Scenery("techiPlant", 6269 , -4950, -3, true));
                scenicList.push(new Scenery("techiPlant", 6317 , -4979, 3, true));
                scenicList.push(new Scenery("techiPlant", 1332 , -13530, 1.45, true));
                scenicList.push(new Scenery("techiPlant", -339 , -10565, 0.1, true));
                scenicList.push(new Scenery("techiPlant", 247 , -10314, -0.05, true));
                scenicList.push(new Scenery("techiPlant", -907 , -4618, 5, true));
                scenicList.push(new Scenery("techiPlant", 1165 , -5317, 4.5, true));
                scenicList.push(new Scenery("techiPlant", 6013 , -5986, 0, true));
                scenicList.push(new Scenery("techiPlant", 2391 , -13076, -4.85, true));
                scenicList.push(new Scenery("techiPlant", 4478 , -9698, -4.5, true));
                scenicList.push(new Scenery("techiPlant", 6212 , -7094, -0.5, true));
                scenicList.push(new Scenery("techiPlant", 3088 , -7476, 3.55, true));
                scenicList.push(new Scenery("techiPlant", 5112 , -10337, -3.75, true));
                scenicList.push(new Scenery("techiPlant", 6302 , -4235, -3.55, true));
                scenicList.push(new Scenery("techiPlant", 4348 , -13031, 8, true));
                scenicList.push(new Scenery("techiPlant", 1298 , -10232, -0.65, true));
                scenicList.push(new Scenery("techiPlant", 4921 , -10739, 0.45, true));
                scenicList.push(new Scenery("luufPlant", 1040 , -6090, 0, true));
                scenicList.push(new Scenery("luufPlant", 3986 , -5087, -6.4, true));
                scenicList.push(new Scenery("luufPlant", 1270 , -12813, -3, true));
                scenicList.push(new Scenery("luufPlant", 189 , -7280, 2, true));
                scenicList.push(new Scenery("luufPlant", 359 , -10792, 1.11, true));
                scenicList.push(new Scenery("luufPlant", 6164 , -5617, 1.111, true));
                scenicList.push(new Scenery("luufPlant", 395 , -12528, 2.3, true));
                scenicList.push(new Scenery("luufPlant", -1373 , -4875, -6.111, true));
                scenicList.push(new Scenery("luufPlant", 6011 , -8981, 2.5, true));
                scenicList.push(new Scenery("luufPlant", 6263 , -12475, -3, true));
                scenicList.push(new Scenery("luufPlant", 1212 , -4303, -6.111, true));
                scenicList.push(new Scenery("luufPlant", 5130 , -11435, 0, true));
                scenicList.push(new Scenery("luufPlant", 4990 , -13386, -5.4321, true));
                scenicList.push(new Scenery("itlinPlant", 3967 , -8854, -2.25, true));
                scenicList.push(new Scenery("itlinPlant", 5067 , -9141, 3.25, true));
                scenicList.push(new Scenery("itlinPlant", 1721 , -10010, -40.4, true));
                scenicList.push(new Scenery("itlinPlant", -1912 , -12299, 0, true));
                scenicList.push(new Scenery("itlinPlant", -715 , -11942, 1, true));
                scenicList.push(new Scenery("itlinPlant", -1536 , -11629, -2.264, true));
                scenicList.push(new Scenery("itlinPlant", 328 , -4654, -2.4, true));
                scenicList.push(new Scenery("itlinPlant", 4636 , -4323, 5.5, true));
                scenicList.push(new Scenery("itlinPlant", 4427 , -11153, -4.444, true));
                scenicList.push(new Scenery("itlinPlant", 2326 , -8795, 6.4, true));
                scenicList.push(new Scenery("itlinPlant", 5033 , -4823, -6.4, true));
                scenicList.push(new Scenery("itlinPlant", 6229 , -3987, 1.5, true));
                scenicList.push(new Scenery("itlinPlant", 3171 , -10964, 0, true));
                scenicList.push(new Scenery("itlinPlant", 6441 , -9318, 2.5, true));
                scenicList.push(new Scenery("palntPlant", 3758 , -4310, 6, true));
                scenicList.push(new Scenery("palntPlant", 5412 , -6751, 0, true));
                scenicList.push(new Scenery("palntPlant", -134 , -5841, 1, true));
                scenicList.push(new Scenery("palntPlant", 852 , -8584, 2, true));
                scenicList.push(new Scenery("palntPlant", 819 , -13343, 4, true));
                scenicList.push(new Scenery("palntPlant", 410 , -11262, 3, true));
                scenicList.push(new Scenery("palntPlant", 4141 , -11693, -3.2, true));
                scenicList.push(new Scenery("palntPlant", -1572 , -9399, -1.4, true));
                scenicList.push(new Scenery("palntPlant", 3047 , -12626, -2.5, true));
                scenicList.push(new Scenery("palntPlant", 1076 , -9888, 0, true));
                scenicList.push(new Scenery("palntPlant", 1544 , -9168, -3.14159, true));
                scenicList.push(new Scenery("palntPlant", -779 , -5189, 1.9, true));
                scenicList.push(new Scenery("palntPlant", 4348 , -7674, 4.89, true));
                scenicList.push(new Scenery("palntPlant", 5326 , -8149, -1.9, true));
                scenicList.push(new Scenery("palntPlant", 5586 , -12299, 6.2, true));
                scenicList.push(new Scenery("palntPlant", -714 , -6487, 2.3, true));
                scenicList.push(new Scenery("palntPlant", 2858 , -5643, 0.25, true));
                scenicList.push(new Scenery("palntPlant", 3579 , -9140, -1, true));
                scenicList.push(new Scenery("palntPlant", 2950 , -11178, 0, true));
                scenicList.push(new Scenery("butterMellowPlant", 4099 , -12455, 6.66666, true));


                change = "s1";
            }
        }
        else if (region == "s2") //Y > 6290 && Y < 32370
        {
            if (change != "s2")
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
                //worldItems = [];

                //Delete All Non-native Structures
                //todo when structures are created add their list's refresh sequence here.

                //Delete All Non-native Scenery
                scenicList = [];

                //REGION CREATION
                //Build AI Units

                //pine trees of the Hent Woods
                scenicList.push(new Scenery("pineTree", 4454 , -17547, 0, true));
                scenicList.push(new Scenery("pineTree", 4165 , -17636, -2, true));
                scenicList.push(new Scenery("pineTree", 4096 , -17461, 0.25, true));
                scenicList.push(new Scenery("pineTree", 3881 , -17567, 6, true));
                scenicList.push(new Scenery("pineTree", 4458 , -17811, -5.5, true));
                scenicList.push(new Scenery("pineTree", 4760 , -17816, 0, true));
                scenicList.push(new Scenery("pineTree", 4690 , -18108, 3, true));
                scenicList.push(new Scenery("pineTree", 4257 , -18126, -4, true));
                scenicList.push(new Scenery("pineTree", 4030 , -17864, -2.87, true));
                scenicList.push(new Scenery("pineTree", 3592 , -17885, -0.25, true));
                scenicList.push(new Scenery("pineTree", 3911 , -18085, 1.4, true));
                scenicList.push(new Scenery("pineTree", 3527 , -18125, -3.6, true));
                scenicList.push(new Scenery("pineTree", 3200 , -18090, 1, true));
                scenicList.push(new Scenery("pineTree", 2945 , -17832, -1, true));
                scenicList.push(new Scenery("pineTree", 2930 , -18115, 0.64, true));
                scenicList.push(new Scenery("pineTree", 2628 , -17873, -21, true));
                scenicList.push(new Scenery("pineTree", 2463 , -18015, -4.25, true));
                scenicList.push(new Scenery("pineTree", 2400 , -17827, 5, true));
                scenicList.push(new Scenery("pineTree", 2604 , -18292, -6, true));
                scenicList.push(new Scenery("pineTree", 2150 , -18202, -3.333, true));
                scenicList.push(new Scenery("pineTree", 2302 , -18474, 2.62, true));
                scenicList.push(new Scenery("pineTree", 2067 , -18710, -4, true));
                scenicList.push(new Scenery("pineTree", 1758 , -18755, 2.9, true));
                scenicList.push(new Scenery("pineTree", 1819 , -19032, -3.2, true));
                scenicList.push(new Scenery("pineTree", 1779 , -19291, -1.4, true));
                scenicList.push(new Scenery("pineTree", 1689 , -19530, 3.45, true));
                scenicList.push(new Scenery("pineTree", 1788 , -19793, 10, true));
                scenicList.push(new Scenery("pineTree", 1784 , -19975, -1, true));
                scenicList.push(new Scenery("pineTree", 2184 , -20173, 0, true));
                scenicList.push(new Scenery("pineTree", 2507 , -20311, -2.6, true));
                scenicList.push(new Scenery("pineTree", 2380 , -20519, 6.25, true));
                scenicList.push(new Scenery("pineTree", 2516 , -20051, 1.9, true));
                scenicList.push(new Scenery("pineTree", 2625 , -20605, 5.4, true));
                scenicList.push(new Scenery("pineTree", 2855 , -20359, -1.3, true));
                scenicList.push(new Scenery("pineTree", 3001 , -20632, 3, true));
                scenicList.push(new Scenery("pineTree", 3273 , -20420, 420, true));
                scenicList.push(new Scenery("pineTree", 3562 , -20574, -2.95, true));
                scenicList.push(new Scenery("pineTree", 3827 , -20435, 2.25, true));
                scenicList.push(new Scenery("pineTree", 3777 , -20587, 1.4, true));
                scenicList.push(new Scenery("pineTree", 3287 , -20705, -3.8, true));
                scenicList.push(new Scenery("pineTree", 3858 , -20196, 0, true));
                scenicList.push(new Scenery("pineTree", 3549 , -20041, 5.1, true));
                scenicList.push(new Scenery("pineTree", 3397 , -20228, -4.64, true));
                scenicList.push(new Scenery("pineTree", 3075 , -20114, -2.2, true));
                scenicList.push(new Scenery("pineTree", 3278 , -19859, -5.25, true));
                scenicList.push(new Scenery("pineTree", 2900 , -19899, 5.27, true));
                scenicList.push(new Scenery("pineTree", 4203 , -20271, 6, true));
                scenicList.push(new Scenery("pineTree", 4095 , -19928, 3.333, true));
                scenicList.push(new Scenery("pineTree", 4590 , -20355, -2.62, true));
                scenicList.push(new Scenery("pineTree", 4455 , -20090, -4.8, true));
                scenicList.push(new Scenery("pineTree", 4782 , -20162, -2.9, true));
                scenicList.push(new Scenery("pineTree", 4648 , -19831, 3.2, true));
                scenicList.push(new Scenery("pineTree", 4288 , -19741, 1.8, true));
                scenicList.push(new Scenery("pineTree", 2147 , -19859, 5.45, true));
                scenicList.push(new Scenery("pineTree", 2560 , -19729, -9, true));
                scenicList.push(new Scenery("pineTree", 2080 , -19510, 6.4, true));
                scenicList.push(new Scenery("pineTree", 2294 , -19131, 0, true));
                scenicList.push(new Scenery("pineTree", 2687 , -19276, 5.1, true));
                scenicList.push(new Scenery("pineTree", 3061 , -19422, -4.64, true));
                scenicList.push(new Scenery("pineTree", 2617 , -18834, -2.2, true));
                scenicList.push(new Scenery("pineTree", 3736 , -19516, -5.25, true));
                scenicList.push(new Scenery("pineTree", 3566 , -19178, 5.27, true));
                scenicList.push(new Scenery("pineTree", 3080 , -18993, 6, true));
                scenicList.push(new Scenery("pineTree", 4236 , -19212, 3.17, true));
                scenicList.push(new Scenery("pineTree", 4954 , -19360, -2.62, true));
                scenicList.push(new Scenery("pineTree", 5164 , -19079, -4.8, true));
                scenicList.push(new Scenery("pineTree", 4725 , -18928, -2.9, true));
                scenicList.push(new Scenery("pineTree", 5044 , -19662, 3.9, true));
                scenicList.push(new Scenery("pineTree", 4689 , -18608, 1.8, true));
                scenicList.push(new Scenery("pineTree", 4089 , -18840, 5.45, true));
                scenicList.push(new Scenery("pineTree", 3554 , -18767, -0.9, true));
                scenicList.push(new Scenery("pineTree", 3903 , -18510, 6.21, true));
                scenicList.push(new Scenery("pineTree", 3170 , -18554, 0, true));
                scenicList.push(new Scenery("pineTree", 3442 , -18398, -1.8, true));
                scenicList.push(new Scenery("pineTree", 4535 , -19436, 4.525, true));
                scenicList.push(new Scenery("pineTree", 4322 , -18519, -2.7, true));
                scenicList.push(new Scenery("pineTree", 2876 , -18659, 2.25, true));

                //shehids of the Hent Woods
                ArtificialIntelligenceAccess.push(new Unit(3932, -17662, "Shehid", true, "Kulbai"));
                ArtificialIntelligenceAccess.push(new Unit(4035, -17625, "Shehid", false, "Kelb"));
                ArtificialIntelligenceAccess.push(new Unit(3938, -17523, "Shehid", false, "Kalblii"));
                ArtificialIntelligenceAccess.push(new Unit(4022, -17478, "Shehid", false, "Kellib"));
                ArtificialIntelligenceAccess.push(new Unit(4151, -17714, "Shehid", true, "Kulblii"));
                ArtificialIntelligenceAccess.push(new Unit(4393, -17575, "Shehid", false, "Kalb"));
                ArtificialIntelligenceAccess.push(new Unit(4507, -17775, "Shehid", false, "Kolblii"));
                ArtificialIntelligenceAccess.push(new Unit(4141, -19864, "Shehid", true, "Kulb"));
                ArtificialIntelligenceAccess.push(new Unit(4366, -19780, "Shehid", false, "Kelblii"));
                ArtificialIntelligenceAccess.push(new Unit(4226, -20180, "Shehid", false, "Kilb"));
                ArtificialIntelligenceAccess.push(new Unit(3423, -20291, "Shehid", false, "Kilblii"));
                ArtificialIntelligenceAccess.push(new Unit(3364, -20321, "Shehid", true, "Kullib"));
                ArtificialIntelligenceAccess.push(new Unit(3288, -20360, "Shehid", false, "Kilbin"));
                ArtificialIntelligenceAccess.push(new Unit(3315, -20481, "Shehid", false, "Kilobii"));
                ArtificialIntelligenceAccess.push(new Unit(3239, -20496, "Shehid", false, "Kilobin"));
                ArtificialIntelligenceAccess.push(new Unit(3709, -20608, "Shehid", true, "Kulobii"));
                ArtificialIntelligenceAccess.push(new Unit(4471, -19469, "Shehid", true, "Kulobin"));
                ArtificialIntelligenceAccess.push(new Unit(4587, -19363, "Shehid", false, "Kelobii"));
                ArtificialIntelligenceAccess.push(new Unit(4436, -19307, "Shehid", false, "Keloblii"));
                ArtificialIntelligenceAccess.push(new Unit(4294, -19340, "Shehid", false, "Kalobii"));
                ArtificialIntelligenceAccess.push(new Unit(4262, -19156, "Shehid", false, "Kaloblii"));
                ArtificialIntelligenceAccess.push(new Unit(4339, -19166, "Shehid", false, "Kelobin"));
                ArtificialIntelligenceAccess.push(new Unit(4476, -19184, "Shehid", false, "Kalobin"));
                ArtificialIntelligenceAccess.push(new Unit(4784, -19147, "Shehid", true, "Kulublii"));
                ArtificialIntelligenceAccess.push(new Unit(4931, -19224, "Shehid", false, "Kaloblin"));
                ArtificialIntelligenceAccess.push(new Unit(4647, -19220, "Shehid", false, "Keloblin"));
                ArtificialIntelligenceAccess.push(new Unit(4771, -19344, "Shehid", false, "Kiloblii"));
                ArtificialIntelligenceAccess.push(new Unit(4647, -19461, "Shehid", false, "Kiloblin"));
                ArtificialIntelligenceAccess.push(new Unit(4839, -19518, "Shehid", true, "Kulub"));
                ArtificialIntelligenceAccess.push(new Unit(4673, -19017, "Shehid", false, "Kilbii"));
                ArtificialIntelligenceAccess.push(new Unit(4514, -18962, "Shehid", false, "Kalbii"));
                ArtificialIntelligenceAccess.push(new Unit(4141, -18799, "Shehid", false, "Kelbii"));
                ArtificialIntelligenceAccess.push(new Unit(5068, -19003, "Shehid", false, "Kolbii"));
                ArtificialIntelligenceAccess.push(new Unit(4027, -18966, "Shehid", false, "Kolblin"));
                ArtificialIntelligenceAccess.push(new Unit(4651, -18044, "Shehid", true, "Kulbii"));
                ArtificialIntelligenceAccess.push(new Unit(4385, -18047, "Shehid", false, "Kilbolin"));
                ArtificialIntelligenceAccess.push(new Unit(2574, -19383, "Shehid", false, "Kalbilin"));
                ArtificialIntelligenceAccess.push(new Unit(2731, -19378, "Shehid", false, "Kolbelin"));
                ArtificialIntelligenceAccess.push(new Unit(1719, -19712, "Shehid", false, "Kelbalin"));
                ArtificialIntelligenceAccess.push(new Unit(1768, -19896, "Shehid", true, "Kulbulun"));
                ArtificialIntelligenceAccess.push(new Unit(2130, -20041, "Shehid", false, "Kellbell"));

                //Plants in the Hent Woods
                scenicList.push(new Scenery("glinPlant", 4600 , -19019, 0.2, true));
                scenicList.push(new Scenery("glinPlant", 4561 , -18967, -2, true));
                scenicList.push(new Scenery("glinPlant", 4671 , -19123, 1, true));
                scenicList.push(new Scenery("glinPlant", 4284 , -19098, -3, true));
                scenicList.push(new Scenery("glinPlant", 4620 , -19317, 2.3, true));
                scenicList.push(new Scenery("glinPlant", 4790 , -19239, 4, true));
                scenicList.push(new Scenery("glinPlant", 4375 , -19333, -0.6, true));
                scenicList.push(new Scenery("glinPlant", 4366 , -19272, 4.3, true));
                scenicList.push(new Scenery("glinPlant", 4515 , -19202, -0.15, true));
                scenicList.push(new Scenery("glinPlant", 4122 , -18173, 3.15, true));
                scenicList.push(new Scenery("glinPlant", 3466 , -19105, 0, true));
                scenicList.push(new Scenery("glinPlant", 2469 , -19910, -5.15, true));
                scenicList.push(new Scenery("glinPlant", 3086 , -18163, 6, true));
                scenicList.push(new Scenery("glinPlant", 2759 , -18588, -1, true));
                scenicList.push(new Scenery("cyrinthilimPlant", 3272 , -20230, 5.3, true));
                scenicList.push(new Scenery("cyrinthilimPlant", 3750 , -19465, 0, true));
                scenicList.push(new Scenery("cyrinthilimPlant", 2502 , -17940, -4.75, true));
                scenicList.push(new Scenery("tepprekliaPlant", 2786 , -19180, 4, true));
                scenicList.push(new Scenery("tepprekliaPlant", 3447 , -19738, 1, true));
                scenicList.push(new Scenery("tepprekliaPlant", 4295 , -19967, -2, true));
                scenicList.push(new Scenery("tepprekliaPlant", 2456 , -19518, -5, true));
                scenicList.push(new Scenery("culprisPlant", 3873 , -19086, -3.1, true));
                scenicList.push(new Scenery("culprisPlant", 3520 , -18606, 2.4, true));
                scenicList.push(new Scenery("culprisPlant", 2823 , -18275, 4.6, true));
                scenicList.push(new Scenery("culprisPlant", 3546 , -18276, -1.9, true));
                scenicList.push(new Scenery("culprisPlant", 4032 , -17721, -3.1, true));
                scenicList.push(new Scenery("stomwikPlant", 4355 , -18817, 0.25, true));
                scenicList.push(new Scenery("stomwikPlant", 3873 , -19909, 2, true));
                scenicList.push(new Scenery("stomwikPlant", 2241 , -18805, -1.11112, true));
                scenicList.push(new Scenery("akerPlant", 3670 , -20463, 0, true));
                scenicList.push(new Scenery("akerPlant", 3569 , -20203, -5, true));
                scenicList.push(new Scenery("akerPlant", 3739 , -20320, 3.8, true));
                scenicList.push(new Scenery("akerPlant", 2496 , -18207, -6, true));
                scenicList.push(new Scenery("akerPlant", 3670 , -18860, 2, true));
                scenicList.push(new Scenery("akerPlant", 4586 , -19997, -4, true));
                scenicList.push(new Scenery("bequonPlant", 3884 , -18747, 0, true));
                scenicList.push(new Scenery("bequonPlant", 4256 , -17828, -5.56, true));

                //creatures of the Hent Woods
                var random = Math.floor(Math.random() * 8);

                if (random == 0) //Varns and Snakes and Bears, oh my!
                {
                    ArtificialIntelligenceAccess.push(new Unit(4519, -19650, "BlackBear", false, "Juvjuv"));
                    ArtificialIntelligenceAccess.push(new Unit(3599, -20269, "BlackBear", false, "Juvjuvjuv"));
                    ArtificialIntelligenceAccess.push(new Unit(4400, -20315, "BlackBear", true, "Juv"));
                    ArtificialIntelligenceAccess.push(new Unit(4413, -18753, "BlackBear", false, "Juvjuvjuvjuv"));
                    ArtificialIntelligenceAccess.push(new Unit(3554, -20498, "Viper", false, "slitherin'"));
                    ArtificialIntelligenceAccess.push(new Unit(3004, -19881, "Viper", false, "Serpal"));
                    ArtificialIntelligenceAccess.push(new Unit(2704, -17946, "Viper", false, "Serper"));
                    ArtificialIntelligenceAccess.push(new Unit(3939, -18619, "Viper", false, "Serperus"));
                    ArtificialIntelligenceAccess.push(new Unit(2685, -18280, "Viper", true, "Serpenta"));
                    ArtificialIntelligenceAccess.push(new Unit(1629, -20101, "Lizard", false, "Lizella"));
                    ArtificialIntelligenceAccess.push(new Unit(4529, -17865, "Lizard", false, "Lizette"));
                    ArtificialIntelligenceAccess.push(new Unit(3435, -17908, "Varn", true, "Dog"));
                    ArtificialIntelligenceAccess.push(new Unit(3540, -17820, "Varn", false, "Dogdog"));
                    ArtificialIntelligenceAccess.push(new Unit(3504, -17954, "Varn", false, "Doggy"));
                    ArtificialIntelligenceAccess.push(new Unit(3583, -18003, "Varn", false, "Doggydog"));
                    ArtificialIntelligenceAccess.push(new Unit(3969, -17955, "Varn", true, "Doggg"));
                    ArtificialIntelligenceAccess.push(new Unit(4102, -17937, "Varn", true, "Dogg"));
                    ArtificialIntelligenceAccess.push(new Unit(3412, -18028, "Varn", true, "Dogggg"));
                    ArtificialIntelligenceAccess.push(new Unit(3270, -18037, "Varn", true, "Doggdog"));
                    ArtificialIntelligenceAccess.push(new Unit(3205, -17996, "Varn", false, "Doggdogdog"));
                    ArtificialIntelligenceAccess.push(new Unit(2989, -17786, "Varn", true, "Doggdogg"));
                    ArtificialIntelligenceAccess.push(new Unit(3922, -19819, "Varn", true, "Gen"));
                    ArtificialIntelligenceAccess.push(new Unit(3688, -19583, "Varn", true, "Gengen"));
                    ArtificialIntelligenceAccess.push(new Unit(3764, -20017, "Varn", false, "Gengengen"));
                    ArtificialIntelligenceAccess.push(new Unit(3148, -19486, "Varn", true, "Gengengengen"));
                    ArtificialIntelligenceAccess.push(new Unit(3335, -19775, "Varn", false, "Gengengengengen"));
                }
                else if (random == 1) //Gribs, Lizards, and Narthwarps + more
                {
                    ArtificialIntelligenceAccess.push(new Unit(2382, -18246, "Lizard", true, "lizelia"));
                    ArtificialIntelligenceAccess.push(new Unit(3232, -18359, "Lizard", true, "lizario"));
                    ArtificialIntelligenceAccess.push(new Unit(3528, -18283, "Lizard", false, "Lizuel"));
                    ArtificialIntelligenceAccess.push(new Unit(3899, -19196, "Lizard", false, "Lizlo"));
                    ArtificialIntelligenceAccess.push(new Unit(4529, -17865, "Lizard", false, "Lizette"));
                    ArtificialIntelligenceAccess.push(new Unit(1629, -20101, "Lizard", false, "Lizella"));
                    ArtificialIntelligenceAccess.push(new Unit(4112, -18408, "Narthwarp", false, "Mokmok"));
                    ArtificialIntelligenceAccess.push(new Unit(3471, -18754, "Narthwarp", false, "Mokmokmok"));
                    ArtificialIntelligenceAccess.push(new Unit(3566, -18703, "Narthwarp", false, "Mokmokmokmok"));
                    ArtificialIntelligenceAccess.push(new Unit(2280, -19632, "Narthwarp", false, "Mokmokmokmokmok"));
                    ArtificialIntelligenceAccess.push(new Unit(2263, -18893, "Narthwarp", false, "Mokkmokk"));
                    ArtificialIntelligenceAccess.push(new Unit(2111, -18829, "Narthwarp", false, "Mokk"));
                    ArtificialIntelligenceAccess.push(new Unit(2065, -18977, "Narthwarp", false, "Mokkmokkmokk"));
                    ArtificialIntelligenceAccess.push(new Unit(2588, -19033, "Narthwarp", false, "Mokkmokkmokkmokk"));
                    ArtificialIntelligenceAccess.push(new Unit(2493, -19087, "Narthwarp", false, "Mokkmokkmokkmokkmokk"));
                    ArtificialIntelligenceAccess.push(new Unit(3922, -19819, "Grib", true, "Gen"));
                    ArtificialIntelligenceAccess.push(new Unit(3688, -19583, "Grib", true, "Gengen"));
                    ArtificialIntelligenceAccess.push(new Unit(3764, -20017, "Grib", false, "Gengengen"));
                    ArtificialIntelligenceAccess.push(new Unit(3148, -19486, "Grib", true, "Gengengengen"));
                    ArtificialIntelligenceAccess.push(new Unit(3335, -19775, "Grib", false, "Gengengengengen"));
                    ArtificialIntelligenceAccess.push(new Unit(2924, -19247, "BlackBear", false, "Juvjuvjuvjuv"));
                    ArtificialIntelligenceAccess.push(new Unit(4572, -19736, "Viper", false, "Serperal"));
                    ArtificialIntelligenceAccess.push(new Unit(4509, -19980, "Varn", true, "Gengengengengen"));
                    ArtificialIntelligenceAccess.push(new Unit(3914, -20453, "Varn", false, "Gengengen"));
                    ArtificialIntelligenceAccess.push(new Unit(3593, -20375, "BlackBear", true, "Juv"));
                    ArtificialIntelligenceAccess.push(new Unit(3122, -20103, "Grib", true, "Genn"));
                    ArtificialIntelligenceAccess.push(new Unit(2713, -20004, "BlackBear", false, "Juvjuv"));
                    ArtificialIntelligenceAccess.push(new Unit(4832, -20389, "Varn", true, "Genegen"));
                    ArtificialIntelligenceAccess.push(new Unit(3983, -20706, "Varn", true, "Gengenege"));
                    ArtificialIntelligenceAccess.push(new Unit(4317, -17697, "Lizard", true, "Genngenn"));
                    ArtificialIntelligenceAccess.push(new Unit(4460, -17692, "Lizard", false, "Gengengenn"));
                    scenicList.push(new Scenery("beeHive", 4386 , -19231, -5.7, true));
                }
                else if (random == 2) //mix of all + extra Lizards and Shehids
                {
                    ArtificialIntelligenceAccess.push(new Unit(4312, -17799, "Shehid", true, "Oogluk"));
                    ArtificialIntelligenceAccess.push(new Unit(4259, -17920, "Shehid", true, "Ooglook"));
                    ArtificialIntelligenceAccess.push(new Unit(3915, -18710, "BlackBear", true, "Juv"));
                    ArtificialIntelligenceAccess.push(new Unit(3689, -18923, "BlackBear", false, "Juve"));
                    ArtificialIntelligenceAccess.push(new Unit(3981, -19126, "BlackBear", false, "Juva"));
                    ArtificialIntelligenceAccess.push(new Unit(4521, -19642, "Varn", true, "Genegen"));
                    ArtificialIntelligenceAccess.push(new Unit(4466, -19796, "Varn", true, "Gengenege"));
                    ArtificialIntelligenceAccess.push(new Unit(4658, -19933, "Varn", false, "Genegene"));
                    ArtificialIntelligenceAccess.push(new Unit(4534, -20054, "Varn", false, "Gengenegeg"));
                    ArtificialIntelligenceAccess.push(new Unit(4739, -19996, "Varn", false, "Gengegnegeg"));
                    ArtificialIntelligenceAccess.push(new Unit(4609, -20199, "Varn", true, "Gengengegg"));
                    ArtificialIntelligenceAccess.push(new Unit(4219, -20339, "Varn", false, "Gengegnegegegg"));
                    ArtificialIntelligenceAccess.push(new Unit(4074, -20492, "Varn", true, "Gengengeggeg"));
                    ArtificialIntelligenceAccess.push(new Unit(3517, -20388, "Lizard", true, "lil"));
                    ArtificialIntelligenceAccess.push(new Unit(3451, -20442, "Lizard", false, "lili"));
                    ArtificialIntelligenceAccess.push(new Unit(3630, -20386, "Lizard", false, "lilil"));
                    ArtificialIntelligenceAccess.push(new Unit(3628, -20278, "Lizard", true, "lilily"));
                    ArtificialIntelligenceAccess.push(new Unit(3730, -20247, "Lizard", true, "lilili"));
                    ArtificialIntelligenceAccess.push(new Unit(3609, -20199, "Lizard", false, "lililil"));
                    ArtificialIntelligenceAccess.push(new Unit(3822, -19959, "Shehid", true, "looklook"));
                    ArtificialIntelligenceAccess.push(new Unit(3366, -19871, "Viper", false, "Serpal"));
                    ArtificialIntelligenceAccess.push(new Unit(3275, -19793, "Viper", false, "Serpette"));
                    ArtificialIntelligenceAccess.push(new Unit(3236, -19926, "Viper", false, "Serpikk"));
                    ArtificialIntelligenceAccess.push(new Unit(3209, -20196, "Shehid", false, "Aglolok"));
                    ArtificialIntelligenceAccess.push(new Unit(3321, -20228, "Shehid", false, "Agloolok"));
                    ArtificialIntelligenceAccess.push(new Unit(2528, -20469, "Narthwarp", false, "Mokk"));
                    ArtificialIntelligenceAccess.push(new Unit(2065, -20536, "Narthwarp", false, "Mokmok"));
                    ArtificialIntelligenceAccess.push(new Unit(2298, -20584, "Narthwarp", false, "Mok"));
                    ArtificialIntelligenceAccess.push(new Unit(2564, -20385, "Narthwarp", false, "Mokkmokk"));
                    ArtificialIntelligenceAccess.push(new Unit(2795, -20356, "Narthwarp", false, "Mokkmokkmokk"));
                    ArtificialIntelligenceAccess.push(new Unit(2189, -20240, "Narthwarp", false, "Mokmokmok"));
                    ArtificialIntelligenceAccess.push(new Unit(1900, -19618, "Grib", false, "Genden"));
                    ArtificialIntelligenceAccess.push(new Unit(1722, -19423, "Grib", true, "Gengen"));
                    ArtificialIntelligenceAccess.push(new Unit(2182, -19675, "Grib", false, "Gengengen"));
                    ArtificialIntelligenceAccess.push(new Unit(2368, -20157, "Shehid", true, "Uglug"));
                    ArtificialIntelligenceAccess.push(new Unit(2385, -19351, "BlackBear", false, "Juvu"));
                    ArtificialIntelligenceAccess.push(new Unit(1792, -19565, "Grib", true, "Gengenggle"));
                    ArtificialIntelligenceAccess.push(new Unit(2835, -18881, "Varn", false, "Gengenegegee"));
                    ArtificialIntelligenceAccess.push(new Unit(2572, -18527, "Narthwarp", false, "Mokkly"));
                    ArtificialIntelligenceAccess.push(new Unit(2386, -18217, "Narthwarp", false, "Mokmokly"));
                    ArtificialIntelligenceAccess.push(new Unit(3128, -18323, "Narthwarp", false, "Mokly"));
                    ArtificialIntelligenceAccess.push(new Unit(3009, -18300, "Narthwarp", false, "Mokkmokkly"));
                    ArtificialIntelligenceAccess.push(new Unit(2787, -17985, "Lizard", true, "lililily"));
                    ArtificialIntelligenceAccess.push(new Unit(2243, -17750, "Lizard", false, "lillii"));
                    ArtificialIntelligenceAccess.push(new Unit(2105, -18961, "Lizard", false, "llili"));
                    ArtificialIntelligenceAccess.push(new Unit(3744, -18017, "Viper", false, "Serpilate"));
                    ArtificialIntelligenceAccess.push(new Unit(3428, -17772, "Lizard", true, "lilililii"));
                    ArtificialIntelligenceAccess.push(new Unit(3642, -18547, "BlackBear", false, "Juvjuv"));
                }
                else if (random == 3)
                {
                    ArtificialIntelligenceAccess.push(new Unit(3848, -18740, "Viper", true, "Serpral"));
                    ArtificialIntelligenceAccess.push(new Unit(4235, -17914, "Narthwarp", true, "tantan"));
                    ArtificialIntelligenceAccess.push(new Unit(4327, -17734, "Narthwarp", false, "tant"));
                    ArtificialIntelligenceAccess.push(new Unit(4323, -17625, "Narthwarp", false, "tanto"));
                    ArtificialIntelligenceAccess.push(new Unit(4260, -17499, "Narthwarp", false, "tanta"));
                    ArtificialIntelligenceAccess.push(new Unit(4116, -18008, "Narthwarp", false, "tantin"));
                    ArtificialIntelligenceAccess.push(new Unit(4479, -18079, "Narthwarp", false, "tantil"));
                    ArtificialIntelligenceAccess.push(new Unit(4429, -18138, "Narthwarp", false, "tantilizer"));
                    ArtificialIntelligenceAccess.push(new Unit(4134, -18013, "Narthwarp", false, "tanton"));
                    ArtificialIntelligenceAccess.push(new Unit(4005, -18143, "Narthwarp", false, "tantorl"));
                    ArtificialIntelligenceAccess.push(new Unit(4087, -18229, "Narthwarp", false, "tantarl"));
                    ArtificialIntelligenceAccess.push(new Unit(3973, -18441, "Narthwarp", false, "tantirl"));
                    if (player.level >= 16 && Math.random() > 0.78)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3868, -19021, "Viper", "giant", "Seprias Lady-Regent of Snakes"));
                        ArtificialIntelligenceAccess.push(new Unit(2660, -19158, "Viper", true, "Serprala the Lady's Daughter"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(2660, -19158, "Viper", false, "Serpserp"));
                        ArtificialIntelligenceAccess.push(new Unit(3411, -19806, "Grib", true, "Gengenagin"));
                        ArtificialIntelligenceAccess.push(new Unit(3900, -19921, "Grib", true, "Gengenagen"));
                        ArtificialIntelligenceAccess.push(new Unit(3617, -20306, "Grib", false, "Gengenagon"));
                    }
                    ArtificialIntelligenceAccess.push(new Unit(3148, -18301, "Viper", true, "Serpril"));
                    ArtificialIntelligenceAccess.push(new Unit(2514, -18338, "Viper", false, "Serprol"));
                    ArtificialIntelligenceAccess.push(new Unit(2209, -18137, "Viper", false, "Serprul"));
                    ArtificialIntelligenceAccess.push(new Unit(2277, -18815, "BlackBear", false, "Juvjuv"));
                    ArtificialIntelligenceAccess.push(new Unit(1844, -18832, "Viper", false, "Serprool"));
                    ArtificialIntelligenceAccess.push(new Unit(2735, -20136, "Lizard", true, "lizzzzzzzzzzzzz"));
                    ArtificialIntelligenceAccess.push(new Unit(2890, -20208, "Lizard", false, "lizz"));
                    ArtificialIntelligenceAccess.push(new Unit(3063, -20462, "Shehid", true, "Uglug"));
                    ArtificialIntelligenceAccess.push(new Unit(3260, -20145, "Lizard", false, "lizzz"));
                    ArtificialIntelligenceAccess.push(new Unit(4177, -20089, "BlackBear", true, "Juve"));
                    ArtificialIntelligenceAccess.push(new Unit(4445, -19885, "BlackBear", false, "Juva"));
                    ArtificialIntelligenceAccess.push(new Unit(4394, -20305, "Varn", false, "Geng"));
                    ArtificialIntelligenceAccess.push(new Unit(1597, -19724, "Varn", true, "Genge"));
                    ArtificialIntelligenceAccess.push(new Unit(2285, -20689, "Varn", false, "Gengen"));
                    ArtificialIntelligenceAccess.push(new Unit(2442, -20721, "Varn", true, "Gen"));
                    ArtificialIntelligenceAccess.push(new Unit(1931, -20187, "Varn", true, "Genger"));
                    ArtificialIntelligenceAccess.push(new Unit(1939, -20390, "Varn", true, "Gengerly"));
                    ArtificialIntelligenceAccess.push(new Unit(2161, -20412, "Varn", true, "Gengar"));
                    ArtificialIntelligenceAccess.push(new Unit(3945, -20676, "Lizard", true, "lizzzz"));
                }
                else if (random == 4) //Leveled/Random Map
                {

                    if (player.level >= 9)
                    {
                        if (Math.random() > 0.5)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(2687, -20340, "Grib", true, "geg"));
                            ArtificialIntelligenceAccess.push(new Unit(2526, -20468, "Grib", true, "Gege"));
                            ArtificialIntelligenceAccess.push(new Unit(2819, -20542, "Grib", false, "Gech"));
                            ArtificialIntelligenceAccess.push(new Unit(3002, -20457, "Grib", false, "Goch"));
                            ArtificialIntelligenceAccess.push(new Unit(3162, -20555, "Grib", false, "Gich"));
                            ArtificialIntelligenceAccess.push(new Unit(3133, -20755, "Grib", false, "Guch"));
                            ArtificialIntelligenceAccess.push(new Unit(2791, -20695, "Grib", false, "Gooch"));

                            ArtificialIntelligenceAccess.push(new Unit(2587, -19656, "Varn", false, "Geng"));
                            ArtificialIntelligenceAccess.push(new Unit(2527, -19619, "Varn", true, "Genge"));
                            ArtificialIntelligenceAccess.push(new Unit(2489, -19693, "Varn", false, "Gengen"));
                            ArtificialIntelligenceAccess.push(new Unit(2138, -19535, "Varn", true, "Gen"));
                            ArtificialIntelligenceAccess.push(new Unit(2119, -19443, "Varn", true, "Genger"));
                            ArtificialIntelligenceAccess.push(new Unit(2229, -19145, "Varn", false, "Gengenar"));
                            ArtificialIntelligenceAccess.push(new Unit(1856, -19245, "Varn", true, "Genar"));
                            ArtificialIntelligenceAccess.push(new Unit(2311, -19255, "Varn", true, "Gengar"));
                            ArtificialIntelligenceAccess.push(new Unit(3129, -19416, "Viper", false, "Serprul"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(2687, -20340, "Varn", true, "geg"));
                            ArtificialIntelligenceAccess.push(new Unit(2526, -20468, "Varn", true, "Gege"));
                            ArtificialIntelligenceAccess.push(new Unit(2819, -20542, "Varn", false, "Gech"));
                            ArtificialIntelligenceAccess.push(new Unit(3002, -20457, "Varn", false, "Goch"));
                            ArtificialIntelligenceAccess.push(new Unit(3162, -20555, "Varn", false, "Gich"));
                            ArtificialIntelligenceAccess.push(new Unit(3133, -20755, "Varn", false, "Guch"));
                            ArtificialIntelligenceAccess.push(new Unit(2791, -20695, "Varn", false, "Gooch"));

                            ArtificialIntelligenceAccess.push(new Unit(2587, -19656, "Grib", false, "Geng"));
                            ArtificialIntelligenceAccess.push(new Unit(2527, -19619, "Grib", true, "Genge"));
                            ArtificialIntelligenceAccess.push(new Unit(2489, -19693, "Grib", false, "Gengen"));
                            ArtificialIntelligenceAccess.push(new Unit(2138, -19535, "Grib", true, "Gen"));
                            ArtificialIntelligenceAccess.push(new Unit(2119, -19443, "Grib", true, "Genger"));
                            ArtificialIntelligenceAccess.push(new Unit(2229, -19145, "Grib", false, "Gengenar"));
                            ArtificialIntelligenceAccess.push(new Unit(1856, -19245, "Grib", true, "Genar"));
                            ArtificialIntelligenceAccess.push(new Unit(2311, -19255, "Grib", true, "Gengar"));
                        }
                        ArtificialIntelligenceAccess.push(new Unit(3751, -17759, "Grib", true, "Giigor"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(2687, -20340, "Lizard", true, "geg"));
                        ArtificialIntelligenceAccess.push(new Unit(2526, -20468, "Lizard", true, "Gege"));
                        ArtificialIntelligenceAccess.push(new Unit(2819, -20542, "Lizard", false, "Gech"));
                        ArtificialIntelligenceAccess.push(new Unit(3002, -20457, "Varn", false, "Goch"));
                        ArtificialIntelligenceAccess.push(new Unit(3162, -20555, "Varn", false, "Gich"));
                        ArtificialIntelligenceAccess.push(new Unit(3133, -20755, "Varn", false, "Guch"));
                        ArtificialIntelligenceAccess.push(new Unit(2791, -20695, "Varn", false, "Gooch"));

                        ArtificialIntelligenceAccess.push(new Unit(2587, -19656, "Grib", false, "Geng"));
                        ArtificialIntelligenceAccess.push(new Unit(2527, -19619, "Lizard", true, "Genge"));
                        ArtificialIntelligenceAccess.push(new Unit(2489, -19693, "Lizard", false, "Gengen"));
                        ArtificialIntelligenceAccess.push(new Unit(2138, -19535, "Lizard", true, "Gen"));
                        ArtificialIntelligenceAccess.push(new Unit(2229, -19145, "Lizard", false, "Gengenar"));
                        ArtificialIntelligenceAccess.push(new Unit(1856, -19245, "Grib", false, "Genar"));
                        ArtificialIntelligenceAccess.push(new Unit(2311, -19255, "Grib", false, "Gengar"));
                    }

                    ArtificialIntelligenceAccess.push(new Unit(2681, -19030, "BlackBear", false, "Juvjuv"));
                    ArtificialIntelligenceAccess.push(new Unit(3179, -19216, "Lizard", true, "Liz"));
                    ArtificialIntelligenceAccess.push(new Unit(3442, -20728, "Varn", true, "Gronny"));
                    ArtificialIntelligenceAccess.push(new Unit(4042, -19877, "Lizard", false, "Lizonya"));
                    ArtificialIntelligenceAccess.push(new Unit(4492, -19925, "BlackBear", true, "Juv"));
                    ArtificialIntelligenceAccess.push(new Unit(4219, -19484, "Lizard", true, "anaverga"));
                    ArtificialIntelligenceAccess.push(new Unit(3553, -18984, "Narthwarp", false, "tantarla"));
                    ArtificialIntelligenceAccess.push(new Unit(3650, -18626, "Narthwarp", false, "tentarla"));
                    ArtificialIntelligenceAccess.push(new Unit(3889, -18583, "Narthwarp", false, "tintarla"));
                    ArtificialIntelligenceAccess.push(new Unit(4451, -18796, "BlackBear", false, "Jalva"));
                    ArtificialIntelligenceAccess.push(new Unit(4680, -18325, "Narthwarp", false, "tintarla"));
                    ArtificialIntelligenceAccess.push(new Unit(4263, -17901, "Varn", true, "Grealnny"));
                    ArtificialIntelligenceAccess.push(new Unit(3166, -18316, "Lizard", true, "anapico"));
                    ArtificialIntelligenceAccess.push(new Unit(3355, -18232, "Lizard", false, "anapene"));
                    ArtificialIntelligenceAccess.push(new Unit(2481, -17945, "Lizard", true, "Lizeg"));
                    ArtificialIntelligenceAccess.push(new Unit(4727, -17895, "Lizard", false, "Lizplog"));

                    if (Math.random > 0.4)
                    {
                        scenicList.push(new Scenery("beeHive", 3674 , 20495, 3, true));
                    }

                    if (player.level >= 7)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3419, -19562, "BlackBear", true, "Juva"));
                        ArtificialIntelligenceAccess.push(new Unit(3419, -19562, "BlackBear", false, "Julva"));
                        ArtificialIntelligenceAccess.push(new Unit(3712, -20276, "Varn", true, "Gren"));
                        ArtificialIntelligenceAccess.push(new Unit(3605, -20258, "Varn", true, "Grenny"));
                        ArtificialIntelligenceAccess.push(new Unit(3635, -20757, "Varn", true, "Grinny"));
                        ArtificialIntelligenceAccess.push(new Unit(3813, -20752, "Varn", false, "Grunny"));
                        ArtificialIntelligenceAccess.push(new Unit(4028, -20382, "Varn", true, "Grilnny"));
                        ArtificialIntelligenceAccess.push(new Unit(3987, -20702, "Varn", false, "Gralnny"));
                        ArtificialIntelligenceAccess.push(new Unit(4321, -20178, "Varn", true, "Grolnny"));
                        ArtificialIntelligenceAccess.push(new Unit(2647, -18539, "Grib", true, "Gulch"));
                        ArtificialIntelligenceAccess.push(new Unit(2333, -18795, "Grib", true, "Golch"));
                        ArtificialIntelligenceAccess.push(new Unit(2706, -18085, "BlackBear", true, "Juve"));
                        ArtificialIntelligenceAccess.push(new Unit(3973, -18693, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3827, -18705, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3823, -19007, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(4329, -18900, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(4503, -18785, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(4753, -18549, "Varn", false, "Graelnie"));
                        ArtificialIntelligenceAccess.push(new Unit(4312, -18210, "Varn", true, "Graeln"));
                        ArtificialIntelligenceAccess.push(new Unit(3887, -18275, "BlackBear", false, "Juventud"));
                        ArtificialIntelligenceAccess.push(new Unit(4323, -17698, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(4061, -17747, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3971, -17992, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(4322, -18068, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2277, -18032, "Grib", true, "Galch"));
                        ArtificialIntelligenceAccess.push(new Unit(3146, -17891, "Grib", true, "Giich"));
                        ArtificialIntelligenceAccess.push(new Unit(3224, -18019, "Grib", false, "Giichii"));
                        ArtificialIntelligenceAccess.push(new Unit(3425, -18015, "Grib", true, "Giichiich"));
                        ArtificialIntelligenceAccess.push(new Unit(3448, -17765, "Grib", true, "Giichiichii"));
                    }
                    else if (player.level >= 3)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3419, -19562, "BlackBear", false, "Juvu"));
                        ArtificialIntelligenceAccess.push(new Unit(3419, -19562, "Grib", false, "Gerk"));
                        ArtificialIntelligenceAccess.push(new Unit(3605, -20259, "BlackBear", false, "Juvjuv"));
                        ArtificialIntelligenceAccess.push(new Unit(3635, -20757, "Varn", false, "Grinny"));
                        ArtificialIntelligenceAccess.push(new Unit(4321, -20178, "Varn", false, "Grolnny"));
                        ArtificialIntelligenceAccess.push(new Unit(2647, -18539, "Grib", true, "Gulch"));
                        ArtificialIntelligenceAccess.push(new Unit(2333, -18795, "Grib", false, "Golch"));
                        ArtificialIntelligenceAccess.push(new Unit(2706, -18085, "BlackBear", false, "Juvjuvjuv"));
                        ArtificialIntelligenceAccess.push(new Unit(3973, -18693, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3827, -18705, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(4503, -18785, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(4753, -18549, "Varn", false, "Graelnie"));
                        ArtificialIntelligenceAccess.push(new Unit(3887, -18275, "Lizard", true, "Lizpor"));
                        ArtificialIntelligenceAccess.push(new Unit(4323, -17698, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(4061, -17747, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2277, -18032, "Grib", false, "Galch"));
                        ArtificialIntelligenceAccess.push(new Unit(3146, -17891, "Grib", false, "Giich"));
                        ArtificialIntelligenceAccess.push(new Unit(3224, -18019, "Grib", false, "Giichii"));
                        ArtificialIntelligenceAccess.push(new Unit(3425, -18015, "Grib", true, "Giichiich"));
                        ArtificialIntelligenceAccess.push(new Unit(3448, -17765, "Grib", false, "Giichiichii"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3419, -19562, "Varn", false, "Vam"));
                        ArtificialIntelligenceAccess.push(new Unit(3419, -19562, "Lizard", true, "LizardBoy"));
                        ArtificialIntelligenceAccess.push(new Unit(3686, -20349, "Lizard", false, "Lizp"));
                        ArtificialIntelligenceAccess.push(new Unit(3615, -20287, "Lizard", true, "Lizpon"));
                        ArtificialIntelligenceAccess.push(new Unit(2647, -18539, "Grib", false, "Gulch"));
                        ArtificialIntelligenceAccess.push(new Unit(2333, -18795, "Grib", false, "Golch"));
                        ArtificialIntelligenceAccess.push(new Unit(2706, -18085, "BlackBear", false, "Juvjuvjuv"));
                        ArtificialIntelligenceAccess.push(new Unit(3973, -18693, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(4503, -18785, "Varn", false, "Tumvam"));
                        ArtificialIntelligenceAccess.push(new Unit(3887, -18275, "Lizard", false, "Lizpy"));
                        ArtificialIntelligenceAccess.push(new Unit(4323, -17698, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2277, -18032, "Varn", false, "Vamtum"));
                        ArtificialIntelligenceAccess.push(new Unit(3146, -17891, "Varn", false, "Giich"));
                        ArtificialIntelligenceAccess.push(new Unit(3224, -18019, "Varn", false, "Giichii"));
                        ArtificialIntelligenceAccess.push(new Unit(3425, -18015, "Varn", false, "Giichiich"));
                        ArtificialIntelligenceAccess.push(new Unit(3448, -17765, "Varn", false, "Giichiichii"));
                        if (Math.random() < 0.6)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(3751, -17759, "varn", true, "Fizigor"));
                            ArtificialIntelligenceAccess.push(new Unit(3935, -20447, "Lizard", true, "Lizpila"));
                            ArtificialIntelligenceAccess.push(new Unit(4020, -20326, "Lizard", false, "Lizpil"));
                            ArtificialIntelligenceAccess.push(new Unit(4394, -20285, "Lizard", true, "Lizpilo"));
                            ArtificialIntelligenceAccess.push(new Unit(5151, -19278, "Lizard", false, "Lizpilona"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(4855, -17761, "varn", false, "Fizigor"));
                            ArtificialIntelligenceAccess.push(new Unit(3935, -20447, "Lizard", false, "Lizpil"));
                            ArtificialIntelligenceAccess.push(new Unit(4020, -20326, "Lizard", true, "Lizpila"));
                            ArtificialIntelligenceAccess.push(new Unit(4809, -20370, "Lizard", true, "Lizpilo"));
                            ArtificialIntelligenceAccess.push(new Unit(5132, -19480, "Lizard", true, "Lizpilon"));
                        }
                    }


                }
                else if (random == 5) //Mostly docile-Narthwarps + a few other creatures...
                {
                    ArtificialIntelligenceAccess.push(new Unit(3393, -20539, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(3651, -20226, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(3700, -20367, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(3540, -20233, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(3151, -20186, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(3010, -20568, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(2549, -20398, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(2606, -20704, "Lizard", false, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(2274, -20513, "Lizard", false, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(1989, -20179, "Lizard", true, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(1728, -19425, "Lizard", false, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(2767, -18754, "Lizard", true, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(4579, -18346, "Lizard", false, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(3580, -17967, "Lizard", false, "Lizard"));

                    ArtificialIntelligenceAccess.push(new Unit(4252, -17859, "Varn", true, "Grib"));
                    ArtificialIntelligenceAccess.push(new Unit(4332, -17707, "Varn", false, "Grib"));
                    ArtificialIntelligenceAccess.push(new Unit(4427, -17490, "Varn", true, "Grib"));
                    ArtificialIntelligenceAccess.push(new Unit(4108, -17398, "Varn", false, "Grib"));
                    ArtificialIntelligenceAccess.push(new Unit(3794, -17792, "Varn", false, "Grib"));
                    ArtificialIntelligenceAccess.push(new Unit(3915, -17962, "Varn", true, "Grib"));

                    if (Math.random() > 0.71 && player.level >= 5)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3705, -18333, "BlackBear", true, "Juv"));
                        ArtificialIntelligenceAccess.push(new Unit(4182, -18886, "Varn", true, "Luv"));
                        ArtificialIntelligenceAccess.push(new Unit(4611, -17819, "Varn", true, "Gribbly"));
                        ArtificialIntelligenceAccess.push(new Unit(2634, -19204, "Viper", false, "Serprul"));
                        ArtificialIntelligenceAccess.push(new Unit(2813, -20089, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2685, -20290, "Narthwarp", false, "docile"));

                        if (Math.random() <= 0.34 && player.level >= 10)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(2371, -19404, "Narthwarp", true, "docile"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(2371, -19404, "BlackBear", true, "docile"));
                        }
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3705, -18333, "BlackBear", false, "Juvjuv"));
                        ArtificialIntelligenceAccess.push(new Unit(3538, -18844, "Viper", false, "Serprul"));
                        ArtificialIntelligenceAccess.push(new Unit(2359, -19873, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2371, -19404, "BlackBear", false, "docile"));
                    }

                    ArtificialIntelligenceAccess.push(new Unit(4097, -18654, "BlackBear", false, "Juvo"));
                    ArtificialIntelligenceAccess.push(new Unit(2942, -18395, "BlackBear", false, "Juvon"));
                    ArtificialIntelligenceAccess.push(new Unit(4658, -18861, "Varn", true, "Luvy"));
                    ArtificialIntelligenceAccess.push(new Unit(4701, -18694, "Varn", false, "Luvii"));
                    ArtificialIntelligenceAccess.push(new Unit(2863, -19212, "Viper", false, "Serpral"));
                    ArtificialIntelligenceAccess.push(new Unit(2229, -18912, "Varn", false, "Luviy"));
                    ArtificialIntelligenceAccess.push(new Unit(2179, -18591, "Varn", false, "Luviiy"));
                    ArtificialIntelligenceAccess.push(new Unit(2019, -18381, "Varn", true, "Luvil"));
                    ArtificialIntelligenceAccess.push(new Unit(1800, -18703, "Varn", false, "Luviil"));
                    ArtificialIntelligenceAccess.push(new Unit(2122, -18902, "Varn", false, "Luviila"));
                    ArtificialIntelligenceAccess.push(new Unit(1664, -19146, "Varn", true, "Luto"));
                    ArtificialIntelligenceAccess.push(new Unit(1542, -19283, "Varn", false, "Luvluv"));
                    ArtificialIntelligenceAccess.push(new Unit(2045, -19245, "Varn", false, "Luviduv"));

                    ArtificialIntelligenceAccess.push(new Unit(2819, -19500, "Varn", true, "Luta"));
                    ArtificialIntelligenceAccess.push(new Unit(2644, -19719, "Varn", false, "Luvlov"));
                    ArtificialIntelligenceAccess.push(new Unit(2045, -19245, "Varn", false, "Luvidov"));
                    ArtificialIntelligenceAccess.push(new Unit(3225, -19798, "Varn", false, "Luvidove"));
                    ArtificialIntelligenceAccess.push(new Unit(3549, -19961, "Varn", true, "Luvlove"));
                    ArtificialIntelligenceAccess.push(new Unit(3725, -19595, "Varn", false, "Loveydove"));

                    ArtificialIntelligenceAccess.push(new Unit(2143, -18132, "Grib", true, "Giichiil"));

                    ArtificialIntelligenceAccess.push(new Unit(4244, -20082, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4037, -20302, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4595, -20192, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4609, -19901, "Narthwarp", false, "docile"));

                    ArtificialIntelligenceAccess.push(new Unit(2493, -17938, "Shehid", true, "Kulborlii"));
                    ArtificialIntelligenceAccess.push(new Unit(2723, -17863, "Shehid", false, "Kulborliin"));
                    ArtificialIntelligenceAccess.push(new Unit(2812, -17989, "Shehid", true, "Kulborl"));
                    ArtificialIntelligenceAccess.push(new Unit(2689, -17946, "Shehid", false, "Kulboriin"));
                    ArtificialIntelligenceAccess.push(new Unit(2743, -18276, "Shehid", false, "Kulboliin"));
                    ArtificialIntelligenceAccess.push(new Unit(2896, -17759, "Shehid", false, "Koolboliin"));
                }
                else if (random == 6) //Docile-Gribs, docile-Narthwarps, Varn Pack, bit of a mix
                {
                    ArtificialIntelligenceAccess.push(new Unit(4291, -17495, "Grib", true, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4347, -17692, "Grib", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4096, -18117, "Grib", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4484, -18050, "Grib", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4170, -19196, "Grib", true, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4281, -19688, "Grib", true, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(3790, -17838, "Lizard", false, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(3750, -18020, "Lizard", true, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(3645, -18037, "Lizard", false, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(4814, -18254, "Lizard", true, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(4598, -20192, "Lizard", false, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(4401, -20284, "Lizard", true, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(4307, -20421, "Lizard", false, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(4612, -17919, "Lizard", false, "Lizard"));
                    ArtificialIntelligenceAccess.push(new Unit(4433, -19881, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4363, -20088, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4653, -19999, "Ardil", false, "Chipp"));
                    ArtificialIntelligenceAccess.push(new Unit(3705, -19815, "BlackBear", false, "Juvjuv"));
                    ArtificialIntelligenceAccess.push(new Unit(3636, -20386, "BlackBear", true, "Juv"));
                    ArtificialIntelligenceAccess.push(new Unit(3323, -20671, "Viper", false, "Serpral"));
                    ArtificialIntelligenceAccess.push(new Unit(3051, -20328, "Varn", true, "Luta"));
                    ArtificialIntelligenceAccess.push(new Unit(3327, -20042, "Varn", true, "Luto"));
                    ArtificialIntelligenceAccess.push(new Unit(2976, -20028, "Varn", false, "Luvidov"));
                    ArtificialIntelligenceAccess.push(new Unit(2661, -20404, "Varn", false, "Luvidove"));
                    ArtificialIntelligenceAccess.push(new Unit(2784, -20705, "Varn", true, "Lute"));
                    ArtificialIntelligenceAccess.push(new Unit(2577, -20742, "Varn", false, "Luvydove"));
                    ArtificialIntelligenceAccess.push(new Unit(2465, -20662, "Varn", false, "Lovduv"));
                    ArtificialIntelligenceAccess.push(new Unit(2214, -20411, "Varn", true, "Luviidove"));
                    ArtificialIntelligenceAccess.push(new Unit(2161, -19494, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(2560, -19663, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(2800, -19032, "BlackBear", false, "Juvjuvjuv"));
                    ArtificialIntelligenceAccess.push(new Unit(2698, -18094, "BlackBear", true, "Juva"));
                    ArtificialIntelligenceAccess.push(new Unit(2608, -18573, "Grib", true, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(2041, -18980, "Grib", true, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(2091, -18130, "Grib", false, "docile"));
                }
                else if (random == 7) //Docile-BlackBears, Random, Vipers, docile-others, Lizards, Mix
                {
                    ArtificialIntelligenceAccess.push(new Unit(3429, -19926, "BlackBear", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(3153, -20195, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(3006, -20550, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(3864, -20276, "Viper", false, "Serpile"));
                    ArtificialIntelligenceAccess.push(new Unit(3294, -20656, "Viper", false, "Serpinala"));
                    ArtificialIntelligenceAccess.push(new Unit(2118, -18778, "Viper", false, "Serpella"));
                    ArtificialIntelligenceAccess.push(new Unit(3485, -18481, "Viper", false, "Serpine"));
                    ArtificialIntelligenceAccess.push(new Unit(2816, -20636, "Lizard", true, "Lizalina"));
                    ArtificialIntelligenceAccess.push(new Unit(2658, -20406, "Lizard", false, "Lizarene"));
                    ArtificialIntelligenceAccess.push(new Unit(2537, -20470, "Lizard", false, "Lizara"));
                    ArtificialIntelligenceAccess.push(new Unit(2596, -20183, "Lizard", false, "Lizelle"));
                    ArtificialIntelligenceAccess.push(new Unit(3901, -19211, "Lizard", false, "Lizarena")); //
                    ArtificialIntelligenceAccess.push(new Unit(3823, -19446, "Lizard", false, "Lizaria"));
                    ArtificialIntelligenceAccess.push(new Unit(3587, -19390, "Lizard", false, "Lizello"));
                    ArtificialIntelligenceAccess.push(new Unit(2693, -19898, "Lizard", true, "Lizette"));
                    ArtificialIntelligenceAccess.push(new Unit(3095, -19921, "Lizard", true, "Lizayette"));
                    ArtificialIntelligenceAccess.push(new Unit(2690, -18669, "Lizard", false, "Lizanburdough"));
                    ArtificialIntelligenceAccess.push(new Unit(4826, -20366, "Lizard", true, "Lizonardo Di'Caprio"));
                    ArtificialIntelligenceAccess.push(new Unit(2835, -20118, "BlackBear", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(2800, -19579, "BlackBear", true, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(3299, -18800, "Lizard", false, "Lizellia"));
                    ArtificialIntelligenceAccess.push(new Unit(3753, -19823, "BlackBear", true, "Juv"));
                    ArtificialIntelligenceAccess.push(new Unit(4704, -18702, "Grib", true, "Grit"));
                    ArtificialIntelligenceAccess.push(new Unit(4437, -18547, "Grib", true, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4559, -18322, "Grib", false, "Gritlin"));
                    ArtificialIntelligenceAccess.push(new Unit(3569, -17987, "Narthwarp", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(4289, -17748, "BlackBear", true, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(2066, -19286, "Lizard", true, "Lizaloria"));

                    if (Math.random() > 0.32)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3650, -20234, "BlackBear", true, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3642, -20418, "BlackBear", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3689, -20334, "BlackBear", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2498, -19377, "BlackBear", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2308, -19649, "Lizard", false, "Lizalite"));
                        ArtificialIntelligenceAccess.push(new Unit(4040, -19394, "Grib", false, "docile"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(3632, -20281, "Viper", true, "Serpevera"));
                        ArtificialIntelligenceAccess.push(new Unit(2308, -19649, "BlackBear", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(4166, -17973, "BlackBear", false, "docile"));
                    }

                    if (Math.random() <= 0.47)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(2869, -18754, "Grib", true, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3074, -19188, "Grib", true, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2965, -18979, "Grib", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2689, -18067, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2373, -18223, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3070, -18081, "Narthwarp", false, "Master Henriquez El Tercero"));
                        ArtificialIntelligenceAccess.push(new Unit(2677, -18246, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3814, -18853, "BlackBear", true, "docile"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(2869, -18754, "Varn", false, "Tum"));
                        ArtificialIntelligenceAccess.push(new Unit(3074, -19188, "Varn", true, "Timtum"));
                        ArtificialIntelligenceAccess.push(new Unit(2965, -18979, "Varn", true, "Tid"));
                        ArtificialIntelligenceAccess.push(new Unit(2689, -18067, "Grib", true, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2373, -18223, "Grib", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3070, -18081, "Narthwarp", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(2677, -18246, "Grib", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(3814, -18853, "BlackBear", false, "docile"));
                        ArtificialIntelligenceAccess.push(new Unit(1609, -19128, "Lizard", false, "Lizaline"));

                        if (Math.random() < 0.25)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(2504, -17936, "Viper", true, "Serprandora"));
                            ArtificialIntelligenceAccess.push(new Unit(4194, -20081, "BlackBear", false, "docile"));
                            ArtificialIntelligenceAccess.push(new Unit(4514, -19928, "BlackBear", false, "Juve"));
                            ArtificialIntelligenceAccess.push(new Unit(3710, -18617, "BlackBear", false, "docile"));
                            ArtificialIntelligenceAccess.push(new Unit(1647, -19177, "Lizard", true, "Lizalina"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(2504, -17936, "Viper", false, "Serpranda"));
                            ArtificialIntelligenceAccess.push(new Unit(4750, -20065, "Varn", false, "Tum"));
                            ArtificialIntelligenceAccess.push(new Unit(4610, -19921, "Varn", false, "Timtum"));
                            ArtificialIntelligenceAccess.push(new Unit(4444, -20015, "Varn", true, "Tid"));
                            ArtificialIntelligenceAccess.push(new Unit(4433, -19836, "Varn", false, "Timtumtin"));
                            ArtificialIntelligenceAccess.push(new Unit(4073, -20007, "Varn", true, "Tidtim"));
                        }
                    }
                }

                //Plants in the plains
                scenicList.push(new Scenery("tenicPlant", 4733, -21143, 0, true));
                scenicList.push(new Scenery("tenicPlant", 4181, -15438, 6, true));
                scenicList.push(new Scenery("tenicPlant", -1836, -16383, -5, true));
                scenicList.push(new Scenery("tenicPlant", -2063, -19190, 2, true));
                scenicList.push(new Scenery("mufPlant", -2223, -22349, 0, true));
                scenicList.push(new Scenery("mufPlant", 1279, -22813, -4.444, true));
                scenicList.push(new Scenery("mufPlant", 4760, -22801, 5.45, true));
                scenicList.push(new Scenery("mufPlant", -986, -17496, 3.2, true));
                scenicList.push(new Scenery("mufPlant", 860, -20301, -2.34, true));
                scenicList.push(new Scenery("mufPlant", -2283, -17095, 6.1, true));
                scenicList.push(new Scenery("mufPlant", -1738, -22652, -6.1, true));
                scenicList.push(new Scenery("mufPlant", 3443, -21920, 1.4, true));
                scenicList.push(new Scenery("mufPlant", -2474, -20415, -1.5, true));
                scenicList.push(new Scenery("butterMellowPlant", 1056, -18795, 0, true));
                scenicList.push(new Scenery("butterMellowPlant", -1971, -21494, 2, true));
                scenicList.push(new Scenery("butterMellowPlant", 5900, -16792, 3, true));
                scenicList.push(new Scenery("butterMellowPlant", 2159, -17200, 5, true));
                scenicList.push(new Scenery("butterMellowPlant", -2656, -22817, -1, true));
                scenicList.push(new Scenery("butterMellowPlant", 6028, -15547, -4.5, true));
                scenicList.push(new Scenery("palntPlant", 2735, -21625, 1, true));
                scenicList.push(new Scenery("palntPlant", 5698, -18767, 0, true));
                scenicList.push(new Scenery("palntPlant", 1118, -20842, 2.2, true));
                scenicList.push(new Scenery("palntPlant", 295, -20660, 8, true));
                scenicList.push(new Scenery("palntPlant", -1186, -20800, -2.5, true));
                scenicList.push(new Scenery("palntPlant", 3159, -16400, 2.8, true));
                scenicList.push(new Scenery("palntPlant", 2825, -14371, 3.8, true));
                scenicList.push(new Scenery("palntPlant", -2596, -17742, -0.024, true));
                scenicList.push(new Scenery("palntPlant", -853, -22338, 0, true));
                scenicList.push(new Scenery("palntPlant", -2523, -21197, -2.4, true));
                scenicList.push(new Scenery("palntPlant", -1395, -19579, 1.1, true));
                scenicList.push(new Scenery("palntPlant", -1481, -18743, 3, true));
                scenicList.push(new Scenery("palntPlant", 6238, -21848, 0.55, true));
                scenicList.push(new Scenery("palntPlant", 2321, -14880, -1.85, true));
                scenicList.push(new Scenery("palntPlant", 4610, -16078, 5, true));
                scenicList.push(new Scenery("techiPlant", 1616, -20636, 0, true));
                scenicList.push(new Scenery("techiPlant", 1652, -21154, -1.2, true));
                scenicList.push(new Scenery("techiPlant", 894, -19586, -4.2, true));
                scenicList.push(new Scenery("techiPlant", -915, -21455, 3.56, true));
                scenicList.push(new Scenery("techiPlant", -1032, -21601, -3.08, true));
                scenicList.push(new Scenery("techiPlant", -642, -20181, -5.56, true));
                scenicList.push(new Scenery("techiPlant", 4065, -17035, -2.25, true));
                scenicList.push(new Scenery("techiPlant", 1174, -14411, 2.75, true));
                scenicList.push(new Scenery("techiPlant", -2122, -18474, 5.75, true));
                scenicList.push(new Scenery("techiPlant", -799, -19885, -3.92, true));
                scenicList.push(new Scenery("techiPlant", 5837, -17667, 4.22, true));
                scenicList.push(new Scenery("techiPlant", -943, -18314, 5, true));
                scenicList.push(new Scenery("techiPlant", 4462, -14910, 6, true));
                scenicList.push(new Scenery("techiPlant", 5925, -21159, -3.3, true));
                scenicList.push(new Scenery("techiPlant", 6575, -16872, 0, true));
                scenicList.push(new Scenery("techiPlant", 3259, -15092, 0.5, true));
                scenicList.push(new Scenery("techiPlant", 5405, -19306, 6.3, true));
                scenicList.push(new Scenery("techiPlant", 5434, -17520, 3.5, true));
                scenicList.push(new Scenery("techiPlant", -2166, -18274, 1, true));
                scenicList.push(new Scenery("techiPlant", 4024, -14955, 2.25, true));
                scenicList.push(new Scenery("luufPlant", 5068, -17446, -2.06, true));
                scenicList.push(new Scenery("luufPlant", 2710, -16097, -1, true));
                scenicList.push(new Scenery("luufPlant", -1693, -15572, 3, true));
                scenicList.push(new Scenery("luufPlant", -1377, -19963, 0, true));
                scenicList.push(new Scenery("luufPlant", -1497, -23407, 4.6, true));
                scenicList.push(new Scenery("luufPlant", -1421, -14786, -6, true));
                scenicList.push(new Scenery("itlinPlant", 1332, -21470, 2.3, true));
                scenicList.push(new Scenery("itlinPlant", 6052, -19890, -2.9, true));
                scenicList.push(new Scenery("itlinPlant", 6342, -14468, 4.1, true));
                scenicList.push(new Scenery("itlinPlant", -675, -20348, 6.425, true));
                scenicList.push(new Scenery("itlinPlant", -2905, -17392, -5.3, true));
                scenicList.push(new Scenery("itlinPlant", -2447, -23431, 1.3, true));
                scenicList.push(new Scenery("grushweedPlant", 5971, -14811, 6.1, 1));
                scenicList.push(new Scenery("grushweedPlant", 6399, -14768, 3.05, 1.7));
                scenicList.push(new Scenery("grushweedPlant", -1291, -18621, 3.05, 1.3));
                scenicList.push(new Scenery("grushweedPlant", -977, -18860, 0, 0.6));
                scenicList.push(new Scenery("grushweedPlant", -732, -19624, 4.6, 1.5));
                scenicList.push(new Scenery("grushweedPlant", -808, -19963, 0.38, 1));

                //Random
                random = Math.floor(Math.random() * 8);

                if (random == 0)
                {
                    ArtificialIntelligenceAccess.push(new Unit(6249, -14933, "Grush", true, "Grassy"));
                    ArtificialIntelligenceAccess.push(new Unit(2030, -15428, "Grush", "baby", "Gratzini"));
                    ArtificialIntelligenceAccess.push(new Unit(2047, -15510, "Grush", false, "Gratz"));
                }
                else
                {
                    scenicList.push(new Scenery("grushweedPlant", 6249, -14933, 0, 1.5));
                    scenicList.push(new Scenery("grushweedPlant", 2030, -15428, 0, 0.49));
                    scenicList.push(new Scenery("grushweedPlant", 2047, -15510, 1, 1.02));
                }

                if (random == 2)
                {
                    ArtificialIntelligenceAccess.push(new Unit(6201, -14686, "Grush", false, "Grassy-ass"));
                    ArtificialIntelligenceAccess.push(new Unit(6169, -14817, "Grush", "baby", "Grassito"));
                }
                else
                {
                    scenicList.push(new Scenery("grushweedPlant", 6201, -14686, 0, 1));
                    scenicList.push(new Scenery("grushweedPlant", 6169, -14817, 0, 0.6));
                }

                if (random == 4)
                {
                    ArtificialIntelligenceAccess.push(new Unit(1814, -15460, "Grush", false, "Grasselle"));
                    ArtificialIntelligenceAccess.push(new Unit(5946, -14724, "Grush", false, "Grassia"));
                    ArtificialIntelligenceAccess.push(new Unit(6012, -14645, "Grush", "baby", "Grassita"));
                    ArtificialIntelligenceAccess.push(new Unit(-940, -18757, "Grush", false, "Grassette"));
                    ArtificialIntelligenceAccess.push(new Unit(-738, -19814, "Grush", "baby", "Hierbita"));
                    ArtificialIntelligenceAccess.push(new Unit(-824, -19786, "Grush", "baby", "Pastito"));
                    ArtificialIntelligenceAccess.push(new Unit(-923, -19865, "Grush", false, "Hierba"));
                }
                else
                {
                    scenicList.push(new Scenery("grushweedPlant", -738, -19814, 0, 0.6));
                    scenicList.push(new Scenery("grushweedPlant", -824, -19786, 0, 0.6));
                    scenicList.push(new Scenery("grushweedPlant", -923, -19865, 0, 1));
                    scenicList.push(new Scenery("grushweedPlant", 5946, -14724, 0, 1));
                    scenicList.push(new Scenery("grushweedPlant", 6012, -14645, 0, 0.6));
                    scenicList.push(new Scenery("grushweedPlant", 1814, -15460, 0, 1));
                    scenicList.push(new Scenery("grushweedPlant", -940, -18757, -2, 1.25));
                }

                if (random == 5)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-1723, -18922, "Grush", "giant", "The Hill"));
                    ArtificialIntelligenceAccess.push(new Unit(6622, -14666, "Grush", false, "Grassio"));
                }
                else
                {
                    scenicList.push(new Scenery("grushweedPlant", 6622, -14666, 0.34, 1.21));
                    scenicList.push(new Scenery("grushweedPlant", -1723, -18922, 0, 3));
                }

                if (random == 7)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2179, -15473, "Grush", false, "Grassi"));
                    scenicList.push(new Scenery("grushweedPlant", -1562, -18668, 0, 1.9));
                }
                else
                {
                    scenicList.push(new Scenery("grushweedPlant", 2179, -15473, 0, 1));
                }

                if (random == 8)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-644, -19755, "Grush", false, "Grawly"));
                    ArtificialIntelligenceAccess.push(new Unit(-1177, -18763, "Grush", true, "Grawls"));
                    ArtificialIntelligenceAccess.push(new Unit(2258, -15590, "Grush", false, "Grass"));
                }
                else
                {
                    scenicList.push(new Scenery("grushweedPlant", -1177, -18763, 4, 1.6));
                    scenicList.push(new Scenery("grushweedPlant", 2258, -15590, -4.34, 0.92));
                    scenicList.push(new Scenery("grushweedPlant", -644, -19755, 0, 1));
                }

                if (quests.lostGirlFound == false && quests.lostGirlQuest == true)
                {
                    ArtificialIntelligenceAccess.push(new Unit(4795, -18752, "StoneGolem", "baby", "Sleeping Stone"));
                }
                if (uniqueChars.ireneLDS == true && quests.lostGirlFound == false && quests.lostGirlQuest == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Irene, Fenwik's Daughter")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(5697, -19390, "Person", false, "Irene, Fenwik's Daughter", {race: "Kel", faction: "Kel", personality: "scared", outfit: ["ardilFurClothing", 0], weapon: ["none", [0.1, 0.05], 0, 9, 0.9], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], kid: true, patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]]}));
                    }
                }
                //Avraks/Evraks of the plains
                ArtificialIntelligenceAccess.push(new Unit(2991, -14637, "Evrak", false, "Telve"));
                ArtificialIntelligenceAccess.push(new Unit(4922, -15301, "Avrak", false, "Akreve"));
                ArtificialIntelligenceAccess.push(new Unit(2802, -17230, "Avrak", false, "Akrevel"));
                ArtificialIntelligenceAccess.push(new Unit(6208, -18260, "Avrak", false, "Akrevii"));
                ArtificialIntelligenceAccess.push(new Unit(4030, -23183, "Evrak", false, "Telvel"));
                ArtificialIntelligenceAccess.push(new Unit(2093, -23518, "Evrak", false, "Telvel"));
                ArtificialIntelligenceAccess.push(new Unit(-2319, -21510, "Avrak", false, "Akrevele"));
                ArtificialIntelligenceAccess.push(new Unit(-1762, -19934, "Avrak", false, "Akrevelii"));
                ArtificialIntelligenceAccess.push(new Unit(-1151, -14374, "Evrak", false, "Telven"));
                ArtificialIntelligenceAccess.push(new Unit(-1944, -15540, "Avrak", false, "Akreven"));

                //Mofu Nests / Mofu
                ArtificialIntelligenceAccess.push(new Unit(-1421, -23142, "Mofu", true, "Klenda"));
                ArtificialIntelligenceAccess.push(new Unit(-943, -23383, "Mofu", true, "Klen"));
                ArtificialIntelligenceAccess.push(new Unit(-1126, -23311, "Mofu", false, "Klene"));
                ArtificialIntelligenceAccess.push(new Unit(-1043, -23077, "Mofu", false, "Klena"));
                ArtificialIntelligenceAccess.push(new Unit(-1037, -23202, "Mofu", "baby", "Klee"));
                ArtificialIntelligenceAccess.push(new Unit(-1342, -23373, "Mofu", "baby", "Klea"));
                ArtificialIntelligenceAccess.push(new Unit(-1001, -23405, "Mofu", "baby", "Kleo"));
                ArtificialIntelligenceAccess.push(new Unit(-1467, -23256, "Mofu", "baby", "Kley"));
                ArtificialIntelligenceAccess.push(new Unit(-1505, -23383, "Mofu", false, "Kleno"));
                ArtificialIntelligenceAccess.push(new Unit(-1194, -23568, "Mofu", true, "Klendo"));
                ArtificialIntelligenceAccess.push(new Unit(-1641, -23205, "Mofu", false, "Klenoo"));
                ArtificialIntelligenceAccess.push(new Unit(-1365, -22911, "Mofu", false, "Klendoo"));
                ArtificialIntelligenceAccess.push(new Unit(-1194, -22876, "Mofu", "baby", "Kli"));
                ArtificialIntelligenceAccess.push(new Unit(1908, -23210, "Mofu", false, "Klendup"));
                ArtificialIntelligenceAccess.push(new Unit(2133, -23285, "Mofu", false, "Klip"));
                ArtificialIntelligenceAccess.push(new Unit(1998, -23350, "Mofu", "baby", "Klup"));
                ArtificialIntelligenceAccess.push(new Unit(848, -20033, "Mofu", true, "Klendup"));
                scenicList.push(new Scenery("mofuNest", -943, -23383, -5.5, 1.4)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", -1126, -23311, 6, 1.124)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", -1043, -23077, -1, 1)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", -1421, -23142, -3, 1.6)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", -1505, -23383, 2.5, 1.25)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", -1365, -22911, 4.3, 1)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", 1908, -23210, -4.6, 1.055)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", 2133, -23285, 2.1, 0.9)); //for mofu nests the last number determines its size multiplier.

                //Naaprid herds
                ArtificialIntelligenceAccess.push(new Unit(-1463, -22360, "Naaprid", true, "gove"));
                ArtificialIntelligenceAccess.push(new Unit(-1270, -22172, "Naaprid", true, "gabe"));
                ArtificialIntelligenceAccess.push(new Unit(-1635, -22635, "Naaprid", false, "gebriela"));
                ArtificialIntelligenceAccess.push(new Unit(-1061, -22709, "Naaprid", false, "govree"));
                ArtificialIntelligenceAccess.push(new Unit(-990, -22556, "Naaprid", "baby", "gode"));
                ArtificialIntelligenceAccess.push(new Unit(5784, -20732, "Naaprid", true, "gebriel"));
                ArtificialIntelligenceAccess.push(new Unit(5883, -20926, "Naaprid", false, "gabii"));
                ArtificialIntelligenceAccess.push(new Unit(5514, -21045, "Naaprid", false, "govrea"));

                //Frich Packs
                ArtificialIntelligenceAccess.push(new Unit(-2650, -22483, "Frich", false, "Friz"));
                ArtificialIntelligenceAccess.push(new Unit(-2897, -22179, "Frich", false, "Frez"));
                ArtificialIntelligenceAccess.push(new Unit(-2765, -22644, "Frich", true, "Frilz"));
                ArtificialIntelligenceAccess.push(new Unit(-2363, -22713, "Frich", true, "Frelz"));
                ArtificialIntelligenceAccess.push(new Unit(-2864, -22379, "Frich", false, "Frizly"));
                ArtificialIntelligenceAccess.push(new Unit(-1810, -20015, "Frich", true, "Fraz"));
                ArtificialIntelligenceAccess.push(new Unit(-1678, -20281, "Frich", false, "Frezno"));
                ArtificialIntelligenceAccess.push(new Unit(-1804, -20245, "Frich", false, "Freliz"));
                ArtificialIntelligenceAccess.push(new Unit(-2473, -20333, "Frich", false, "Freloz"));
                ArtificialIntelligenceAccess.push(new Unit(-2697, -19285, "Frich", true, "Frel"));
                ArtificialIntelligenceAccess.push(new Unit(-1085, -18128, "Frich", true, "Frele"));
                ArtificialIntelligenceAccess.push(new Unit(1193, -14827, "Frich", false, "Fraloz"));
                ArtificialIntelligenceAccess.push(new Unit(6703, -19799, "Frich", false, "Fralooz"));
                ArtificialIntelligenceAccess.push(new Unit(5863, -22420, "Frich", true, "Freliz"));
                ArtificialIntelligenceAccess.push(new Unit(6346, -22565, "Frich", false, "Freloz"));
                ArtificialIntelligenceAccess.push(new Unit(6511, -15230, "Frich", true, "Frelaz"));
                ArtificialIntelligenceAccess.push(new Unit(878, -19133, "Frich", false, "Frooz"));

                //Varns
                ArtificialIntelligenceAccess.push(new Unit(-1244, -19247, "Varn", true, "Frel"));
                ArtificialIntelligenceAccess.push(new Unit(5740, -17079, "Varn", false, "Fral"));
                ArtificialIntelligenceAccess.push(new Unit(4016, -21134, "Varn", true, "Freel"));
                ArtificialIntelligenceAccess.push(new Unit(3907, -21317, "Varn", true, "Frol"));
                ArtificialIntelligenceAccess.push(new Unit(2801, -21413, "Varn", false, "Frool"));
                ArtificialIntelligenceAccess.push(new Unit(1155, -17721, "Varn", true, "Frul"));

                //Ardils
                ArtificialIntelligenceAccess.push(new Unit(-558, -22201, "Ardil", false, "Fluffers"));
                ArtificialIntelligenceAccess.push(new Unit(-815, -20960, "Ardil", true, "Fluffiez"));
                ArtificialIntelligenceAccess.push(new Unit(-1514, -16661, "Ardil", false, "Fluffy"));
                ArtificialIntelligenceAccess.push(new Unit(1929, -16664, "Ardil", true, "Fluffez"));
                ArtificialIntelligenceAccess.push(new Unit(5968, -19355, "Ardil", false, "Fluff"));
                ArtificialIntelligenceAccess.push(new Unit(1385, -21580, "Ardil", true, "Fluffel"));

                change = "s2";
            }
        }
        else if (region == "s3") //Y > 6290 && Y < 32370
        {
            if (change != "s3")
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
                //worldItems = [];

                //Delete All Non-native Structures
                //todo when structures are created add their list's refresh sequence here.

                //Delete All Non-native Scenery
                scenicList = [];

                //REGION CREATION
                //Build AI Units

                //citizens of Echlin village/tribe
                if (quests.fenwikEchlinArmed)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-1366, -30864, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 3, speed: 1.65, outfit: ["naapridLeatherArmour", 4], weapon: ["kellishClaymore", [24, 1], 0, 50, 2.06], ranged: [false, "arrow", 5, 1500, 1, 3, 0, "none", 1.50], patrolStops: 0, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-1348, -30360, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 2, speed: 1.80, outfit: ["naapridLeatherArmour", 4], weapon: ["kellishClaymore", [23, 1], 0, 50, 2.15], ranged: [false, "arrow", 5, 1500, 1, 3, 0, "none", 1.50], patrolStops: 6, patrolLoop: true, route:[[-218, -30349], [-227, -31505], [-1706, -31503], [-1724, -30600], [-1366, -30601], [-1348, -30360]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-295, -30422, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 1, speed: 1.95, outfit: ["naapridLeatherArmour", 4], weapon: ["kellishClaymore", [18, 1], 0, 50, 3], ranged: [false, "arrow", 7, 1500, 1, 3, 0, "none", 1.50], patrolStops: 0, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-1366, -30864, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 3, speed: 1.65, outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [10, 0], 8, 16, 1], ranged: [false, "arrow", 5, 1500, 1, 3, 0, "none", 1.50], patrolStops: 0, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-1348, -30360, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 2, speed: 1.80, outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [11, 0], 8, 16, 1], ranged: [false, "arrow", 5, 1500, 1, 3, 0, "none", 1.50], patrolStops: 6, patrolLoop: true, route:[[-218, -30349], [-227, -31505], [-1706, -31503], [-1724, -30600], [-1366, -30601], [-1348, -30360]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-295, -30422, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 1, speed: 1.95, outfit: ["naapridLeatherArmour", 4], weapon: ["longbow", [8, 0], 8, 16, 1], ranged: [true, "arrow", 7, 1500, 1, 3, 0, "none", 1.50], patrolStops: 0, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                }

                if (uniqueChars.teberLDS == true && quests.bountyTeberCompletionStyle != "royal pardon")
                {
                    var teberName = "Teber the Artisan";
                    if (quests.bountyTeberQuest == true)
                    {
                        teberName = "Teber the Deserter";
                    }

                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == teberName)
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        if (quests.fenwikEchlinArmed)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(-631, -30389, "Person", false, teberName, {race: "Freynor", faction: "Kel", personality: "violent", outfit: ["naapridLeatherArmour", 4], weapon: ["kellishClaymore", [19, 2], 0, 50, 2.45], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 62], [new Item("naapridFiber", false, false), 11], [new Item("ironRing", false, false), 6], [new Item("pintGlass", false, false), 18], [new Item("potionGlass", false, false), 16], [new Item("glassJar", false, false), 7]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(-631, -30389, "Person", false, teberName, {race: "Freynor", faction: "Kel", personality: "violent", outfit: ["naapridLeatherArmour", 4], weapon: ["freydicSword", [6, 6], 0, 0, 1.45], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 62], [new Item("naapridFiber", false, false), 11], [new Item("ironRing", false, false), 6], [new Item("pintGlass", false, false), 18], [new Item("potionGlass", false, false), 16], [new Item("glassJar", false, false), 7]]}));
                        }

                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == teberName)
                            {
                                ArtificialIntelligenceAccess[i].healthMAX = 29;
                                ArtificialIntelligenceAccess[i].health = 29;
                                ArtificialIntelligenceAccess[i].speed += 0.05;
                                ArtificialIntelligenceAccess[i].grudge = 340;
                            }
                        }
                    }
                }
                if (uniqueChars.roselinLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Roselin the Tailor")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-1312, -31363, "Person", false, "Roselin the Tailor", {race: "Kel", faction: "Kel", personality: "scared", outfit: ["naapridLeatherArmour", 4], weapon: ["none", [0.1, 0.4], 0, 0, 0.65], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 30], [new Item("naapridPelt", false, false), 7], [new Item("naapridHorn", false, false), 12], [new Item("naapridLeatherArmour", false, false), 5]]}));
                    }
                }
                if (uniqueChars.fenwikLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Fenwik the Smith")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        if (quests.fenwikShopStyle == "normal")
                        {
                            ArtificialIntelligenceAccess.push(new Unit(-963, -31386, "Person", false, "Fenwik the Smith", {race: "Kel", faction: "Kel", personality: "violent", outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [8, 1], 8, 16, 1.4], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 43], [new Item("iron", false, false), 2], [new Item("kellishSawClub", false, false), 3], [new Item("warHammer", false, false), 4], [new Item("kellishClaymore", false, false), 1], [new Item("timberAxe", false, false), 2], [new Item("longbow", false, false), 1], [new Item("arrow", false, false), 9], [new Item("mace", false, false), 2], [new Item("hammer", false, false), 3]]}));
                        }
                        else if (quests.fenwikShopStyle == "cash")
                        {
                            ArtificialIntelligenceAccess.push(new Unit(-963, -31386, "Person", false, "Fenwik the Smith", {race: "Kel", faction: "Kel", personality: "violent", outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [8, 1], 8, 16, 1.4], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 145], [new Item("kellishSawClub", false, false), 1], [new Item("warHammer", false, false), 1], [new Item("hammer", false, false), 1]]}));
                        }
                    }
                }
                if (uniqueChars.ireneLDS == true && quests.lostGirlFound == true)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-1117, -31425, "Ardil", true, "Irene's Pet Ardil"));
                    ArtificialIntelligenceAccess.push(new Unit(-1004, -31483, "Ardil", true, "Irene's Pet Ardil"));
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Irene")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-1076, -31514, "Person", false, "Irene", {race: "Kel", faction: "Kel", personality: "scared", outfit: ["ardilFurClothing", 0], weapon: ["none", [0.1, 0.05], 0, 9, 0.9], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], kid: true, patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]]}));
                    }
                }
                if (uniqueChars.schuylarLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Chieftan Schuylar")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-1335, -30763, "Person", false, "Chieftan Schuylar", {race: "Kel", faction: "Kel", personality: "violent", outfit: ["naapridLeatherArmour", 6], weapon: ["kellishClaymore", [25, 1], 0, 50, 2], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 492], [new Item("kellishClayPotOfNaapridMilk", false, false), 6], [new Item("naapridButter", false, false), 5], [new Item("kellishClayPotOfMushroomStew", false, false), 1], [new Item("kellishClayPotOfWater", false, false), 8], [new Item("kellishClayPot", false, false), 9], [new Item("santhBread", false, false), 1], [new Item("kellishSanthDough", false, false), 2], [new Item("rawNaapridFlesh", false, false), 4], [new Item("naapridMeat", false, false), 2], [new Item("pumpkin", false, false), 2], [new Item("jackOLanternEmpty", false, false), 3], [new Item("beesWax", false, false), 4], [new Item("candle", false, false), 6], [new Item("fireStarter", false, false), 2]]}));

                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Chieftan Schuylar")
                            {
                                ArtificialIntelligenceAccess[i].healthMAX = 32;
                                ArtificialIntelligenceAccess[i].health = 32;
                                ArtificialIntelligenceAccess[i].speed += 0.55;
                                ArtificialIntelligenceAccess[i].grudge = 340;

                            }
                        }
                    }
                }

                //Echlin Village crafting stations
                scenicList.push(new Scenery("anvil", -884, -31318, -Math.PI * 1/4, true));
                scenicList.push(new Scenery("forge", -882, -31444, Math.PI * 1/2, true));
                scenicList.push(new Scenery("loom", -1327, -31313, 0, true));

                //Echlin Village Farm
                scenicList.push(new Scenery("suuliPlant", -1651 , -30665, 3, "kel"));

                scenicList.push(new Scenery("harstPlant", -1428 , -30652, 1, "kel"));
                scenicList.push(new Scenery("harstPlant", -1458 , -30652, 1, "kel"));
                scenicList.push(new Scenery("harstPlant", -1488 , -30652, 1, "kel"));
                scenicList.push(new Scenery("harstPlant", -1518 , -30652, 1, "kel"));
                scenicList.push(new Scenery("harstPlant", -1548 , -30652, 1, "kel"));
                scenicList.push(new Scenery("harstPlant", -1578 , -30652, 1, "kel"));

                scenicList.push(new Scenery("potatoPlant", -1428 , -30724, 1, "kel"));
                scenicList.push(new Scenery("potatoPlant", -1458 , -30724, 1, "kel"));
                scenicList.push(new Scenery("potatoPlant", -1488 , -30724, 1, "kel"));
                scenicList.push(new Scenery("potatoPlant", -1518 , -30724, 1, "kel"));
                scenicList.push(new Scenery("potatoPlant", -1548 , -30724, 1, "kel"));
                scenicList.push(new Scenery("potatoPlant", -1578 , -30724, 1, "kel"));

                scenicList.push(new Scenery("carrotPlant", -1428 , -30790, 1, "kel"));
                scenicList.push(new Scenery("carrotPlant", -1458 , -30790, 1, "kel"));
                scenicList.push(new Scenery("carrotPlant", -1488 , -30790, 1, "kel"));
                scenicList.push(new Scenery("carrotPlant", -1518 , -30790, 1, "kel"));
                scenicList.push(new Scenery("carrotPlant", -1548 , -30790, 1, "kel"));
                scenicList.push(new Scenery("carrotPlant", -1578 , -30790, 1, "kel"));

                scenicList.push(new Scenery("santhPlant", -1652 , -30738, 1, "kel"));
                scenicList.push(new Scenery("santhPlant", -1652 , -30768, 1, "kel"));
                scenicList.push(new Scenery("santhPlant", -1652 , -30798, 1, "kel"));
                scenicList.push(new Scenery("santhPlant", -1652 , -30828, 1, "kel"));

                scenicList.push(new Scenery("pumpkinPlant", -1653 , -30888, 2, "kel"));
                scenicList.push(new Scenery("pumpkinPlant", -1583 , -30888, -1, "kel"));
                scenicList.push(new Scenery("pumpkinPlant", -1513 , -30888, 1, "kel"));
                scenicList.push(new Scenery("pumpkinPlant", -1443 , -30888, 0, "kel"));

                ArtificialIntelligenceAccess.push(new Unit(-2089, -29849, "Mofu", false, "Tupper"));
                ArtificialIntelligenceAccess.push(new Unit(-2054, -29703, "Mofu", "baby", "Goozy"));
                ArtificialIntelligenceAccess.push(new Unit(-2278, -29667, "Mofu", false, "Tem"));
                ArtificialIntelligenceAccess.push(new Unit(-2372, -29720, "Mofu", "baby", "Tilby"));
                ArtificialIntelligenceAccess.push(new Unit(-2472, -29756, "Mofu", "baby", "Libby"));
                ArtificialIntelligenceAccess.push(new Unit(-2429, -29856, "Mofu", false, "Gelnam"));
                ArtificialIntelligenceAccess.push(new Unit(-2440, -29962, "Mofu", "baby", "Tally"));
                ArtificialIntelligenceAccess.push(new Unit(-2500, -29938, "Mofu", "baby", "Jilin"));
                ArtificialIntelligenceAccess.push(new Unit(-2176, -29434, "Mofu", true, "Loz"));
                ArtificialIntelligenceAccess.push(new Unit(-2368, -29393, "Mofu", "baby", "Kleena"));
                ArtificialIntelligenceAccess.push(new Unit(5547, -29081, "Mofu", "baby", "Feath"));
                ArtificialIntelligenceAccess.push(new Unit(5332, -28842, "Mofu", true, "Fey"));
                ArtificialIntelligenceAccess.push(new Unit(5245, -29093, "Mofu", false, "Fea"));
                ArtificialIntelligenceAccess.push(new Unit(5417, -28940, "Mofu", false, "Fella"));
                ArtificialIntelligenceAccess.push(new Unit(5699, -29055, "Mofu", false, "Afetho"));
                ArtificialIntelligenceAccess.push(new Unit(5526, -29155, "Mofu", true, "Ley"));
                ArtificialIntelligenceAccess.push(new Unit(5040, -28965, "Mofu", true, "Fellont"));
                ArtificialIntelligenceAccess.push(new Unit(5550, -28918, "Mofu", false, "Feo"));
                ArtificialIntelligenceAccess.push(new Unit(5929, -28989, "Mofu", false, "Fennel"));
                ArtificialIntelligenceAccess.push(new Unit(5353, -29162, "Mofu", "baby", "Oregano"));
                ArtificialIntelligenceAccess.push(new Unit(5163, -28992, "Mofu", "baby", "Lavender"));
                ArtificialIntelligenceAccess.push(new Unit(5356, -29044, "Mofu", "baby", "Thyme"));

                ArtificialIntelligenceAccess.push(new Unit(3760, -25089, "Ardil", false, "Fluffi"));
                ArtificialIntelligenceAccess.push(new Unit(1475, -26274, "Ardil", true, "Flof"));
                ArtificialIntelligenceAccess.push(new Unit(2087, -24322, "Ardil", false, "Fluffor"));
                ArtificialIntelligenceAccess.push(new Unit(4695, -31293, "Ardil", false, "Fluffim"));

                ArtificialIntelligenceAccess.push(new Unit(5860, -25482, "Naaprid", true, "tabe"));
                ArtificialIntelligenceAccess.push(new Unit(5715, -25851, "Naaprid", false, "tebriela"));
                ArtificialIntelligenceAccess.push(new Unit(5209, -25700, "Naaprid", false, "tovree"));
                ArtificialIntelligenceAccess.push(new Unit(5292, -25813, "Naaprid", "baby", "tode"));
                ArtificialIntelligenceAccess.push(new Unit(4712, -25481, "Naaprid", true, "tebriel"));
                ArtificialIntelligenceAccess.push(new Unit(4984, -25920, "Naaprid", "baby", "tabii"));
                ArtificialIntelligenceAccess.push(new Unit(5131, -26117, "Naaprid", false, "tovrea"));
                ArtificialIntelligenceAccess.push(new Unit(5702, -26234, "Naaprid", false, "tabel"));
                ArtificialIntelligenceAccess.push(new Unit(5549, -26092, "Naaprid", "baby", "tebel"));
                ArtificialIntelligenceAccess.push(new Unit(6176, -26436, "Naaprid", true, "tebe"));
                ArtificialIntelligenceAccess.push(new Unit(4849, -26178, "Naaprid", true, "telb"));
                ArtificialIntelligenceAccess.push(new Unit(-1573, -32540, "Naaprid", false, "thovrea"));
                ArtificialIntelligenceAccess.push(new Unit(-1065, -32518, "Naaprid", false, "thabel"));
                ArtificialIntelligenceAccess.push(new Unit(-1327, -32617, "Naaprid", "baby", "thebel"));
                ArtificialIntelligenceAccess.push(new Unit(-1165, -32271, "Naaprid", true, "thebe"));

                ArtificialIntelligenceAccess.push(new Unit(-1122, -25315, "Frich", true, "Ratter"));
                ArtificialIntelligenceAccess.push(new Unit(-875, -25470, "Frich", false, "Rata"));
                ArtificialIntelligenceAccess.push(new Unit(-2099, -24804, "Frich", false, "Raton"));
                ArtificialIntelligenceAccess.push(new Unit(-1799, -26221, "Frich", false, "Ratal"));
                ArtificialIntelligenceAccess.push(new Unit(-2069, -27769, "Frich", false, "Ratol"));
                ArtificialIntelligenceAccess.push(new Unit(-1980, -27949, "Frich", false, "Ratyl"));
                ArtificialIntelligenceAccess.push(new Unit(1314, -32450, "Frich", true, "Rattalon"));
                ArtificialIntelligenceAccess.push(new Unit(5609, -27402, "Frich", false, "Ratil"));
                ArtificialIntelligenceAccess.push(new Unit(5797, -27298, "Frich", false, "Ratul"));
                ArtificialIntelligenceAccess.push(new Unit(2245, -27179, "Frich", false, "Ratin"));
                ArtificialIntelligenceAccess.push(new Unit(1895, -25407, "Frich", true, "Rattail"));

                ArtificialIntelligenceAccess.push(new Unit(1314, -32450, "Avrak", false, "Ava"));

                scenicList.push(new Scenery("tunskMound", -2326, -30565, 0, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", -660, -29920, -3, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", -1619, -25422, 5, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", -1234, -26529, -1.5, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 219, -26761, 2.34, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 1328, -27619, 4, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 1089, -28642, -2, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 5323, -28604, 6.44, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 5837, -32383, 1, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 2475, -32587, -4.2, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 3009, -33697, 5.7, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 1016, -32180, 3.3, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 2800, -30129, -3.89, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 3927, -25973, 3.9, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 778, -25529, 4.5, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 1433, -24726, -4.5, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", 2162, -28579, -5.3, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", -2110, -31828, -2.25, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", -1159, -33195, 3.5, true)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("tunskMound", -2384, -33735, -1, true)); //for mofu nests the last number determines its size multiplier.

                //Mofu Habitations
                scenicList.push(new Scenery("mofuNest", -2089, -29849, -3, 1.2)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", -2278, -29667, 1, 1)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", -2429, -29856, 0, 1.15)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", -2176, -29434, -2.245, 1.9)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", 5245, -29093, -6, 1.1)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", 5417, -28940, 1.9, 1.05)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", 5699, -29055, 0.65, 1.15)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", 5332, -28842, -3.845, 1.7)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", 5929, -28989, 4, 1.35)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("mofuNest", 5526, -29155, 5.45, 2.2)); //for mofu nests the last number determines its size multiplier.

                //Plantlife
                scenicList.push(new Scenery("grushweedPlant", -1934, -27527, 5, 1.2));
                scenicList.push(new Scenery("grushweedPlant", 5213, -32206, 2.3681, 1.15));
                scenicList.push(new Scenery("grushweedPlant", 5027, -32290, 2.3681, 0.96));
                scenicList.push(new Scenery("mufPlant", -1212, -25586, 2, true));
                scenicList.push(new Scenery("mufPlant", -1625, -28741, -4, true));
                scenicList.push(new Scenery("mufPlant", 3916, -26914, 3, true));
                scenicList.push(new Scenery("mufPlant", 3791, -28886, -6, true));
                scenicList.push(new Scenery("techiPlant", -2181, -30042, -3.5, true));
                scenicList.push(new Scenery("techiPlant", -574, -27261, 1.65, true));
                scenicList.push(new Scenery("techiPlant", 4316, -27563, -3.5, true));
                scenicList.push(new Scenery("techiPlant", 5929, -32834, 4.98, true));
                scenicList.push(new Scenery("techiPlant", 6297, -32969, -5.78, true));
                scenicList.push(new Scenery("techiPlant", 5597, -25983, -6.13, true));
                scenicList.push(new Scenery("techiPlant", 1211, -28938, 0, true));
                scenicList.push(new Scenery("techiPlant", -1191, -29547, -1.55, true));
                scenicList.push(new Scenery("luufPlant", -2190, -28265, 6, true));
                scenicList.push(new Scenery("luufPlant", 4912, -33426, -4.66, true));
                scenicList.push(new Scenery("itlinPlant", -2044, -26903, -5.9, true));
                scenicList.push(new Scenery("itlinPlant", 1175, -25095, 4.3, true));
                scenicList.push(new Scenery("itlinPlant", 3959, -31413, -3.3, true));
                scenicList.push(new Scenery("itlinPlant", -1843, -25164, 5, true));
                scenicList.push(new Scenery("tenicPlant", 5959, -27404, 2.7, true));
                scenicList.push(new Scenery("butterMellowPlant", 4959, -25479, -1, true));
                scenicList.push(new Scenery("butterMellowPlant", 3003, -32876, -2.2345, true));
                scenicList.push(new Scenery("palntPlant", 3347, -25438, -2.3, true));
                scenicList.push(new Scenery("palntPlant", 4799, -29996, 4.4, true));
                scenicList.push(new Scenery("palntPlant", 3751, -33251, -3.6, true));
                scenicList.push(new Scenery("palntPlant", 1771, -28054, -0.4, true));


                change = "s3";
            }
        }
        else if (region == "s1e1")
        {
            if (change != "s1e1")
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
                //worldItems = [];

                //Delete All Non-native Structures
                //todo when structures are created add their list's refresh sequence here.

                //Delete All Non-native Scenery
                scenicList = [];

                //REGION CREATION
                //Build AI Units

                //Animals in the forest
                ArtificialIntelligenceAccess.push(new Unit(-12632, -4608, "Grib", false, "Kab"));
                ArtificialIntelligenceAccess.push(new Unit(-12339, -4511, "Grib", true, "Keb"));
                ArtificialIntelligenceAccess.push(new Unit(-12856, -4354, "Grib", true, "Kubb"));
                ArtificialIntelligenceAccess.push(new Unit(-12706, -4829, "Grib", true, "Kiib"));
                ArtificialIntelligenceAccess.push(new Unit(-12423, -5247, "Narthwarp", false, "Grax"));
                ArtificialIntelligenceAccess.push(new Unit(-11373, -4376, "Shehid", false, "Toot"));
                ArtificialIntelligenceAccess.push(new Unit(-11348, -4490, "Shehid", false, "Tut"));
                ArtificialIntelligenceAccess.push(new Unit(-11120, -4466, "Shehid", false, "Tat"));
                ArtificialIntelligenceAccess.push(new Unit(-10984, -4232, "Shehid", false, "Tittle"));
                ArtificialIntelligenceAccess.push(new Unit(-11225, -4217, "Shehid", false, "Tit"));
                ArtificialIntelligenceAccess.push(new Unit(-10009, -4348, "Shehid", false, "Tilt"));
                ArtificialIntelligenceAccess.push(new Unit(-10428, -4256, "BlackBear", true, "Grrrr"));
                ArtificialIntelligenceAccess.push(new Unit(-7498, -4088, "BlackBear", false, "Grrr"));
                ArtificialIntelligenceAccess.push(new Unit(-10009, -4348, "Shehid", false, "Tilt"));
                scenicList.push(new Scenery("ulgoyPlant", -11988, -4219, 2, 3.4));
                ArtificialIntelligenceAccess.push(new Unit(-12001, -4216, "Ulgoy", true, "Neptune"));
                ArtificialIntelligenceAccess.push(new Unit(-8839, -4188, "Varn", true, "fluff"));
                ArtificialIntelligenceAccess.push(new Unit(-9071, -4112, "Varn", false, "fluf"));
                ArtificialIntelligenceAccess.push(new Unit(-8965, -4248, "Varn", false, "flufff"));
                ArtificialIntelligenceAccess.push(new Unit(-11025, -4803, "Viper", false, "scale"));
                ArtificialIntelligenceAccess.push(new Unit(-11448, -4055, "Lizard", true, "eLIZabeth"));

                //Build Scenery

                //trees in the southern wuncwer woods.
                scenicList.push(new Scenery("pineTree", -7583 , -3885, 1.2, true));
                scenicList.push(new Scenery("pineTree", -8065 , -3688, -3, true));
                scenicList.push(new Scenery("pineTree", -8710 , -3916, -2.5, true));
                scenicList.push(new Scenery("pineTree", -9578 , -3837, 4, true));
                scenicList.push(new Scenery("pineTree", -10111 , -3906, -5, true));
                scenicList.push(new Scenery("pineTree", -11025 , -3706, 2.6, true));
                scenicList.push(new Scenery("pineTree", -11548 , -3882, 5.2, true));
                scenicList.push(new Scenery("pineTree", -12132 , -3725, -1, true));
                scenicList.push(new Scenery("pineTree", -12700 , -3822, 6, true));
                scenicList.push(new Scenery("pineTree", -13186 , -3942, -6.3, true));
                scenicList.push(new Scenery("pineTree", -6995 , -3821, 6.995, true));
                scenicList.push(new Scenery("pineTree", -6398 , -3743, 0.23, true));
                scenicList.push(new Scenery("pineTree", -6848 , -4186, -3.678, true));
                scenicList.push(new Scenery("pineTree", -8029 , -4161, 3.1, true));
                scenicList.push(new Scenery("pineTree", -7448 , -4370, 4.5, true));
                scenicList.push(new Scenery("pineTree", -8620 , -4332, -1.7, true));
                scenicList.push(new Scenery("pineTree", -9388 , -4224, -4.62, true));
                scenicList.push(new Scenery("pineTree", -9795 , -4691, -5.9, true));
                scenicList.push(new Scenery("pineTree", -9968 , -4233, 2.3, true));
                scenicList.push(new Scenery("pineTree", -10507 , -4023, 2.5, true));
                scenicList.push(new Scenery("pineTree", -10465 , -4521, 3.98, true));
                scenicList.push(new Scenery("pineTree", -11005 , -4119, -4.1, true));
                scenicList.push(new Scenery("pineTree", -10660 , -4900, -2, true));
                scenicList.push(new Scenery("pineTree", -11008 , -4524, -4.8, true));
                scenicList.push(new Scenery("pineTree", -11744 , -4280, -1.891, true));
                scenicList.push(new Scenery("pineTree", -11263 , -4864, 5.435, true));
                scenicList.push(new Scenery("pineTree", -11857 , -4696, 3.82, true));
                scenicList.push(new Scenery("pineTree", -11717 , -5059, -6.42, true));
                scenicList.push(new Scenery("pineTree", -12329 , -4069, 2.93, true));
                scenicList.push(new Scenery("pineTree", -12245 , -4426, -4.7, true));
                scenicList.push(new Scenery("pineTree", -12174 , -4947, -2.2, true));
                scenicList.push(new Scenery("pineTree", -12232 , -5375, 5.68, true));
                scenicList.push(new Scenery("pineTree", -12808 , -5502, 1, true));
                scenicList.push(new Scenery("pineTree", -12913 , -4233, -1.5, true));
                scenicList.push(new Scenery("pineTree", -13143 , -4801, 3, true));
                scenicList.push(new Scenery("pineTree", -12722, -4981, 2.136, true));
                scenicList.push(new Scenery("pineTree", -13009 , -5159, -1.29, true));
                scenicList.push(new Scenery("pineTree", -11286 , -5204, 7, true));

                //Plants of the souther tip of the wuncwer woods
                scenicList.push(new Scenery("akerPlant", -7460 , -4008, 6.8, true));
                scenicList.push(new Scenery("glinPlant", -8837 , -4003, 1, true));
                scenicList.push(new Scenery("culprisPlant", -12566 , -4628, -2, true));
                scenicList.push(new Scenery("neprilnePlant", -11329 , -4441, 3, true));
                scenicList.push(new Scenery("akerPlant", -12309 , -5242, -5.5, true));


                change = "s1e1";
            }
        }
        else if (region == "s3e1")
        {
            if (change != "s3e1")
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
                //worldItems = [];

                //Delete All Non-native Structures
                //todo when structures are created add their list's refresh sequence here.

                //Delete All Non-native Scenery
                scenicList = [];

                //REGION CREATION
                //Build AI Units

                //Animals in the mud bog
                //ArtificialIntelligenceAccess.push(new Unit(-6610, -32189, "Grewble", false, "Glud"));
                //ArtificialIntelligenceAccess.push(new Unit(-7778, -32048, "BrolleWorms", false, "Slickers"));
                //ArtificialIntelligenceAccess.push(new Unit(-6838, -31129, "Ut", false, "Icky Icky"));
                //ArtificialIntelligenceAccess.push(new Unit(-9239, -31197, "SpittingMudFly", true, "Super Fly"));

                //Build Scenery
                scenicList.push(new Scenery("grewbleEggPatch", -7237 , -31546, -Math.PI * 2.2, false));
                scenicList.push(new Scenery("grewbleEggPatch", -7611 , -29496, -Math.PI * 1.4, false));
                scenicList.push(new Scenery("grewbleEggPatch", -8235 , -26971, -Math.PI * -6.1, false));
                scenicList.push(new Scenery("grewbleEggPatch", -10523 , -27599, -Math.PI * 0, false));
                scenicList.push(new Scenery("grewbleEggPatch", -10238 , -27403, -Math.PI * 5, false));
                scenicList.push(new Scenery("grewbleEggPatch", -10235 , -27494, -Math.PI * 3.77, false));
                scenicList.push(new Scenery("grewbleEggPatch", -10445 , -27153, -Math.PI * -2.4, false));
                scenicList.push(new Scenery("grewbleEggPatch", -10578 , -26210, 1, false));
                scenicList.push(new Scenery("grewbleEggPatch", -6830 , -31015, 2, false));
                scenicList.push(new Scenery("brolleFeast", -10116 , -29425, -Math.PI * 0, false));
                scenicList.push(new Scenery("brolleFeast", -7534 , -28197, -Math.PI * 4.2, false));
                scenicList.push(new Scenery("brolleFeast", -10049 , -28561, -Math.PI * -2, false));
                scenicList.push(new Scenery("brolleFeast", -9314 , -26816, -Math.PI * -Math.PI, false));


                //Plants in the mud bog
                scenicList.push(new Scenery("wegPlant", -8039 , -31917, 5, true));
                scenicList.push(new Scenery("wegPlant", -6300 , -33078, 3, true));
                scenicList.push(new Scenery("wegPlant", -8432 , -31226, 0, true));
                scenicList.push(new Scenery("wegPlant", -8636 , -27421, -3.2, true));
                scenicList.push(new Scenery("wegPlant", -7448 , -30705, -4, true));
                scenicList.push(new Scenery("wegPlant", -5333 , -29560, -2, true));
                scenicList.push(new Scenery("wegPlant", -9743 , -26443, 3.14159, true));
                scenicList.push(new Scenery("wegPlant", -6928 , -26150, -1.1, true));
                scenicList.push(new Scenery("wegPlant", -8484 , -25656, -6, true));
                scenicList.push(new Scenery("wegPlant", -12774 , -29931, -2.23, true));
                scenicList.push(new Scenery("wegPlant", -7536 , -31824, 4.3, true));
                scenicList.push(new Scenery("sesrePlant", -9030 , -30602, 1, true));
                scenicList.push(new Scenery("sesrePlant", -9324 , -31587, 2.42, true));
                scenicList.push(new Scenery("sesrePlant", -6549 , -30150, -5.5, true));
                scenicList.push(new Scenery("sesrePlant", -6796 , -27705, 3.6, true));
                scenicList.push(new Scenery("sesrePlant", -10083 , -27886, -2.83, true));
                scenicList.push(new Scenery("sesrePlant", -10853 , -28016, -4, true));
                scenicList.push(new Scenery("sesrePlant", -10158 , -31303, 4.444, true));
                scenicList.push(new Scenery("sesrePlant", -11527 , -32609, -1.131320096913069, true));
                scenicList.push(new Scenery("lorkweedPlant", -7842 , -30440, -2.5, true));
                scenicList.push(new Scenery("lorkweedPlant", -8435 , -32994, 6, true));
                scenicList.push(new Scenery("lorkweedPlant", -9418 , -33194, 9, true));
                scenicList.push(new Scenery("lorkweedPlant", -7043 , -30258, -1, true));
                scenicList.push(new Scenery("lorkweedPlant", -6332 , -28978, 2, true));
                scenicList.push(new Scenery("lorkweedPlant", -6183 , -28293, -1.5, true));
                scenicList.push(new Scenery("lorkweedPlant", -5505 , -26480, 1.35, true));
                scenicList.push(new Scenery("lorkweedPlant", -6410 , -26714, 5.5, true));
                scenicList.push(new Scenery("lorkweedPlant", -8085 , -26216, -5, true));
                scenicList.push(new Scenery("lorkweedPlant", -11399 , -25450, 4.5, true));
                scenicList.push(new Scenery("lorkweedPlant", -11009 , -27171, -3.3, true));
                scenicList.push(new Scenery("lorkweedPlant", -9248 , -26859, 1, true));
                scenicList.push(new Scenery("lorkweedPlant", -6327 , -25252, -3.4444, true));
                scenicList.push(new Scenery("lorkweedPlant", -10968 , -26032, 1.6, true));
                scenicList.push(new Scenery("lorkweedPlant", -11345 , -32173, -3.4444, true));
                scenicList.push(new Scenery("lorkweedPlant", -10617 , -30279, 5.56, true));
                scenicList.push(new Scenery("lorkweedPlant", -8516 , -32417, 2, true));

                var random = Math.floor(Math.random() * 13);

                if (random >= 0 && random <= 7)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-10634, -27122, "Grewble", false, "Glod"));
                    ArtificialIntelligenceAccess.push(new Unit(-10582, -27338, "Grewble", false, "Gled"));
                    ArtificialIntelligenceAccess.push(new Unit(-10158, -27824, "Grewble", false, "Glid"));
                    ArtificialIntelligenceAccess.push(new Unit(-10296, -26454, "Grewble", false, "Glidr"));
                    ArtificialIntelligenceAccess.push(new Unit(-10738, -26060, "Grewble", false, "Glood"));
                    ArtificialIntelligenceAccess.push(new Unit(-11333, -28148, "Grewble", false, "Glewd"));

                    ArtificialIntelligenceAccess.push(new Unit(-10125, -27563, "Grewble", "baby", "Glad"));
                    ArtificialIntelligenceAccess.push(new Unit(-11679, -26352, "Grewble", "baby", "Gliid"));

                    ArtificialIntelligenceAccess.push(new Unit(-10065, -27223, "Grewble", true, "Glud"));
                }
                else if (random <= 11)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-10634, -27122, "Grewble", "baby", "Glod"));
                    ArtificialIntelligenceAccess.push(new Unit(-10582, -27338, "Grewble", false, "Gled"));
                    ArtificialIntelligenceAccess.push(new Unit(-10158, -27824, "Grewble", "baby", "Glid"));
                    ArtificialIntelligenceAccess.push(new Unit(-10296, -26454, "Grewble", false, "Glidr"));
                    ArtificialIntelligenceAccess.push(new Unit(-10738, -26060, "Grewble", false, "Glood"));
                    ArtificialIntelligenceAccess.push(new Unit(-11333, -28148, "Grewble", "baby", "Glewd"));

                    ArtificialIntelligenceAccess.push(new Unit(-10125, -27563, "Grewble", false, "Glad"));
                    ArtificialIntelligenceAccess.push(new Unit(-11679, -26352, "Grewble", true, "Gliid"));

                    ArtificialIntelligenceAccess.push(new Unit(-10065, -27223, "Grewble", false, "Glud"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-10634, -27122, "Grewble", false, "Glod"));
                    ArtificialIntelligenceAccess.push(new Unit(-10582, -27338, "Grewble", true, "Gled"));
                    ArtificialIntelligenceAccess.push(new Unit(-10158, -27824, "Grewble", false, "Glid"));
                    ArtificialIntelligenceAccess.push(new Unit(-10296, -26454, "Grewble", false, "Glidr"));
                    ArtificialIntelligenceAccess.push(new Unit(-10738, -26060, "Grewble", false, "Glood"));
                    ArtificialIntelligenceAccess.push(new Unit(-11333, -28148, "Grewble", true, "Glewd"));

                    ArtificialIntelligenceAccess.push(new Unit(-10125, -27563, "Grewble", true, "Glad"));
                    ArtificialIntelligenceAccess.push(new Unit(-11679, -26352, "Grewble", false, "Gliid"));

                    ArtificialIntelligenceAccess.push(new Unit(-10065, -27223, "Grewble", "giant", "Horgune the Mud King"));
                }

                random = Math.floor(Math.random() * 13);

                if (random >= 8)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-6385, -29752, "Ut", "baby", "Icky"));
                    ArtificialIntelligenceAccess.push(new Unit(-6187, -30102, "SpittingMudFly", "baby", "Lil Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-6548, -30629, "Grewble", false, "Gluck"));
                    ArtificialIntelligenceAccess.push(new Unit(-7718, -29738, "Grewble", false, "Glick"));
                    ArtificialIntelligenceAccess.push(new Unit(-7313, -28682, "BrolleWorms", false, "Slipper"));
                    ArtificialIntelligenceAccess.push(new Unit(-6850, -28821, "BrolleWorms", false, "Zapatilla"));
                    ArtificialIntelligenceAccess.push(new Unit(-6843, -28150, "BrolleWorms", false, "Boot"));
                    ArtificialIntelligenceAccess.push(new Unit(-7282, -27862, "Ut", false, "Ick"));
                    ArtificialIntelligenceAccess.push(new Unit(-6706, -27347, "SpittingMudFly", true, "The Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-6002, -27849, "Grewble", false, "Glon"));
                    ArtificialIntelligenceAccess.push(new Unit(-6843, -28150, "BrolleWorms", false, "Bota"));
                    ArtificialIntelligenceAccess.push(new Unit(-8192, -28544, "SpittingMudFly", "baby", "La Mosca"));
                    ArtificialIntelligenceAccess.push(new Unit(-8341, -27860, "SpittingMudFly", false, "A Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-8271, -27163, "Grewble", "baby", "Glilk"));
                    ArtificialIntelligenceAccess.push(new Unit(-7761, -26946, "Grewble", false, "Glolk"));
                    ArtificialIntelligenceAccess.push(new Unit(-8552, -26284, "Ut", true, "Ickick"));
                    ArtificialIntelligenceAccess.push(new Unit(-7366, -26352, "Ut", "baby", "Ickuh"));
                    ArtificialIntelligenceAccess.push(new Unit(-6914, -26993, "Ut", "baby", "Ickor"));
                    ArtificialIntelligenceAccess.push(new Unit(-8791, -26838, "Ut", "baby", "Icklii"));
                    ArtificialIntelligenceAccess.push(new Unit(-7199, -25952, "BrolleWorms", false, "Zapato"));
                    ArtificialIntelligenceAccess.push(new Unit(-6452, -26153, "BrolleWorms", false, "Shoe"));
                    ArtificialIntelligenceAccess.push(new Unit(-6784, -25361, "BrolleWorms", false, "Sandal"));
                    ArtificialIntelligenceAccess.push(new Unit(-9461, -27794, "BrolleWorms", false, "Huarache"));
                    ArtificialIntelligenceAccess.push(new Unit(-9021, -29168, "SpittingMudFly", false, "Una Mosca"));
                    ArtificialIntelligenceAccess.push(new Unit(-9415, -29669, "SpittingMudFly", "baby", "Moscita"));
                    ArtificialIntelligenceAccess.push(new Unit(-9155, -30201, "BrolleWorms", false, "Sandalia"));
                    ArtificialIntelligenceAccess.push(new Unit(-8265, -30756, "Ut", false, "Ickle"));
                    ArtificialIntelligenceAccess.push(new Unit(-6741, -31899, "Grewble", false, "Gluyka"));
                    ArtificialIntelligenceAccess.push(new Unit(-8380, -32059, "Ut", false, "Ickler"));
                    ArtificialIntelligenceAccess.push(new Unit(-9083, -32672, "Ut", "baby", "Ickluh"));
                    ArtificialIntelligenceAccess.push(new Unit(-10275, -32356, "BrolleWorms", false, "Flip-Flop"));
                    ArtificialIntelligenceAccess.push(new Unit(-9882, -31837, "BrolleWorms", false, "Chancla"));
                    ArtificialIntelligenceAccess.push(new Unit(-9103, -32300, "BrolleWorms", false, "High-Heels"));
                    ArtificialIntelligenceAccess.push(new Unit(-9271, -31727, "BrolleWorms", false, "Zapato de Tacón"));
                    ArtificialIntelligenceAccess.push(new Unit(-8359, -32655, "BrolleWorms", false, "Tacón"));
                    ArtificialIntelligenceAccess.push(new Unit(-11368, -32751, "SpittingMudFly", true, "Mosca Mosca"));
                    ArtificialIntelligenceAccess.push(new Unit(-12187, -32622, "SpittingMudFly", "baby", "Las Moscas"));
                    ArtificialIntelligenceAccess.push(new Unit(-11866, -32840, "Ut", false, "Icklem"));
                    ArtificialIntelligenceAccess.push(new Unit(-10470, -30354, "BrolleWorms", false, "99er"));
                    ArtificialIntelligenceAccess.push(new Unit(-11487, -29952, "Ut", false, "Icklek"));
                    ArtificialIntelligenceAccess.push(new Unit(-10967, -28766, "SpittingMudFly", "baby", "Fly Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-6372, -31461, "BrolleWorms", false, "666er"));
                }
                else if (random >= 3)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-6385, -29752, "Ut", false, "Icky"));
                    ArtificialIntelligenceAccess.push(new Unit(-6187, -30102, "SpittingMudFly", false, "Lil Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-6548, -30629, "Grewble", true, "Gluck"));
                    ArtificialIntelligenceAccess.push(new Unit(-7718, -29738, "Grewble", "baby", "Glick"));
                    ArtificialIntelligenceAccess.push(new Unit(-7313, -28682, "BrolleWorms", false, "Slipper"));
                    ArtificialIntelligenceAccess.push(new Unit(-6850, -28821, "BrolleWorms", false, "Zapatilla"));
                    ArtificialIntelligenceAccess.push(new Unit(-6843, -28150, "BrolleWorms", false, "Boot"));
                    ArtificialIntelligenceAccess.push(new Unit(-7282, -27862, "Ut", "baby", "Ick"));
                    ArtificialIntelligenceAccess.push(new Unit(-6706, -27347, "SpittingMudFly", "giant", "The Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-6002, -27849, "Grewble", false, "Glon"));
                    ArtificialIntelligenceAccess.push(new Unit(-6843, -28150, "BrolleWorms", false, "Bota"));
                    ArtificialIntelligenceAccess.push(new Unit(-8192, -28544, "SpittingMudFly", false, "La Mosca"));
                    ArtificialIntelligenceAccess.push(new Unit(-8341, -27860, "SpittingMudFly", "baby", "A Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-8271, -27163, "Grewble", false, "Glilk"));
                    ArtificialIntelligenceAccess.push(new Unit(-7761, -26946, "Grewble", false, "Glolk"));
                    ArtificialIntelligenceAccess.push(new Unit(-8552, -26284, "Ut", false, "Ickick"));
                    ArtificialIntelligenceAccess.push(new Unit(-7366, -26352, "Ut", "baby", "Ickuh"));
                    ArtificialIntelligenceAccess.push(new Unit(-6914, -26993, "BrolleWorms", false, "Ickor"));
                    ArtificialIntelligenceAccess.push(new Unit(-8791, -26838, "Ut", false, "Icklii"));
                    ArtificialIntelligenceAccess.push(new Unit(-7199, -25952, "BrolleWorms", false, "Zapato"));
                    ArtificialIntelligenceAccess.push(new Unit(-6452, -26153, "SpittingMudFly", "baby", "Shoe"));
                    ArtificialIntelligenceAccess.push(new Unit(-6784, -25361, "BrolleWorms", false, "Sandal"));
                    ArtificialIntelligenceAccess.push(new Unit(-9461, -27794, "BrolleWorms", false, "Huarache"));
                    ArtificialIntelligenceAccess.push(new Unit(-9021, -29168, "SpittingMudFly", true, "Una Mosca"));
                    ArtificialIntelligenceAccess.push(new Unit(-9415, -29669, "SpittingMudFly", "baby", "Moscita"));
                    ArtificialIntelligenceAccess.push(new Unit(-9155, -30201, "BrolleWorms", false, "Sandalia"));
                    ArtificialIntelligenceAccess.push(new Unit(-8265, -30756, "Ut", true, "Ickle"));
                    ArtificialIntelligenceAccess.push(new Unit(-6741, -31899, "Grewble", "baby", "Gluyka"));
                    ArtificialIntelligenceAccess.push(new Unit(-8380, -32059, "Ut", "baby", "Ickler"));
                    ArtificialIntelligenceAccess.push(new Unit(-9083, -32672, "Ut", false, "Ickluh"));
                    ArtificialIntelligenceAccess.push(new Unit(-10275, -32356, "BrolleWorms", false, "Flip-Flop"));
                    ArtificialIntelligenceAccess.push(new Unit(-9882, -31837, "BrolleWorms", false, "Chancla"));
                    ArtificialIntelligenceAccess.push(new Unit(-9103, -32300, "BrolleWorms", false, "High-Heels"));
                    ArtificialIntelligenceAccess.push(new Unit(-9271, -31727, "BrolleWorms", false, "Zapato de Tacón"));
                    ArtificialIntelligenceAccess.push(new Unit(-8359, -32655, "BrolleWorms", false, "Tacón"));
                    ArtificialIntelligenceAccess.push(new Unit(-11368, -32751, "SpittingMudFly", "baby", "Mosca Mosca"));
                    ArtificialIntelligenceAccess.push(new Unit(-12187, -32622, "SpittingMudFly", false, "Las Moscas"));
                    ArtificialIntelligenceAccess.push(new Unit(-11866, -32840, "Ut", "baby", "Icklem"));
                    ArtificialIntelligenceAccess.push(new Unit(-10470, -30354, "SpittingMudFly", "baby", "99er"));
                    ArtificialIntelligenceAccess.push(new Unit(-11487, -29952, "Ut", false, "Icklek"));
                    ArtificialIntelligenceAccess.push(new Unit(-10967, -28766, "SpittingMudFly", false, "Fly Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-6372, -31461, "BrolleWorms", false, "999er"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-6385, -29752, "Ut", true, "Icky"));
                    ArtificialIntelligenceAccess.push(new Unit(-6187, -30102, "SpittingMudFly", "giant", "Lil Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-6548, -30629, "Grewble", false, "Gluck"));
                    ArtificialIntelligenceAccess.push(new Unit(-7718, -29738, "Grewble", true, "Glick"));
                    ArtificialIntelligenceAccess.push(new Unit(-7313, -28682, "BrolleWorms", false, "Slipper"));
                    ArtificialIntelligenceAccess.push(new Unit(-6850, -28821, "BrolleWorms", false, "Zapatilla"));
                    ArtificialIntelligenceAccess.push(new Unit(-6843, -28150, "BrolleWorms", false, "Boot"));
                    ArtificialIntelligenceAccess.push(new Unit(-7282, -27862, "Ut", false, "Ick"));
                    ArtificialIntelligenceAccess.push(new Unit(-6706, -27347, "SpittingMudFly", false, "The Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-6002, -27849, "Grewble", false, "Glon"));
                    ArtificialIntelligenceAccess.push(new Unit(-6843, -28150, "BrolleWorms", false, "Bota"));
                    ArtificialIntelligenceAccess.push(new Unit(-8192, -28544, "SpittingMudFly", true, "La Mosca"));
                    ArtificialIntelligenceAccess.push(new Unit(-8341, -27860, "SpittingMudFly", false, "A Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-8271, -27163, "Grewble", true, "Glilk"));
                    ArtificialIntelligenceAccess.push(new Unit(-7761, -26946, "Grewble", false, "Glolk"));
                    ArtificialIntelligenceAccess.push(new Unit(-8552, -26284, "Ut", "baby", "Ickick"));
                    ArtificialIntelligenceAccess.push(new Unit(-7366, -26352, "Ut", "baby", "Ickuh"));
                    ArtificialIntelligenceAccess.push(new Unit(-6914, -26993, "Ut", false, "Ickor"));
                    ArtificialIntelligenceAccess.push(new Unit(-8791, -26838, "Ut", "baby", "Icklii"));
                    ArtificialIntelligenceAccess.push(new Unit(-7199, -25952, "BrolleWorms", false, "Zapato"));
                    ArtificialIntelligenceAccess.push(new Unit(-6452, -26153, "BrolleWorms", false, "Shoe"));
                    ArtificialIntelligenceAccess.push(new Unit(-6784, -25361, "BrolleWorms", false, "Sandal"));
                    ArtificialIntelligenceAccess.push(new Unit(-9461, -27794, "BrolleWorms", false, "Huarache"));
                    ArtificialIntelligenceAccess.push(new Unit(-9021, -29168, "SpittingMudFly", "giant", "Una Mosca"));
                    ArtificialIntelligenceAccess.push(new Unit(-9415, -29669, "SpittingMudFly", false, "Moscita"));
                    ArtificialIntelligenceAccess.push(new Unit(-9155, -30201, "BrolleWorms", false, "Sandalia"));
                    ArtificialIntelligenceAccess.push(new Unit(-8265, -30756, "Ut", true, "Ickle"));
                    ArtificialIntelligenceAccess.push(new Unit(-6741, -31899, "Grewble", false, "Gluyka"));
                    ArtificialIntelligenceAccess.push(new Unit(-8380, -32059, "Ut", false, "Ickler"));
                    ArtificialIntelligenceAccess.push(new Unit(-9083, -32672, "Ut", "baby", "Ickluh"));
                    ArtificialIntelligenceAccess.push(new Unit(-10275, -32356, "BrolleWorms", false, "Flip-Flop"));
                    ArtificialIntelligenceAccess.push(new Unit(-9882, -31837, "BrolleWorms", false, "Chancla"));
                    ArtificialIntelligenceAccess.push(new Unit(-9103, -32300, "BrolleWorms", false, "High-Heels"));
                    ArtificialIntelligenceAccess.push(new Unit(-9271, -31727, "BrolleWorms", false, "Zapato de Tacón"));
                    ArtificialIntelligenceAccess.push(new Unit(-8359, -32655, "BrolleWorms", false, "Tacón"));
                    ArtificialIntelligenceAccess.push(new Unit(-11368, -32751, "SpittingMudFly", true, "Mosca Mosca"));
                    ArtificialIntelligenceAccess.push(new Unit(-12187, -32622, "SpittingMudFly", true, "Las Moscas"));
                    ArtificialIntelligenceAccess.push(new Unit(-11866, -32840, "Ut", false, "Icklem"));
                    ArtificialIntelligenceAccess.push(new Unit(-10470, -30354, "BrolleWorms", false, "777er"));
                    ArtificialIntelligenceAccess.push(new Unit(-11487, -29952, "Ut", "baby", "Icklek"));
                    ArtificialIntelligenceAccess.push(new Unit(-10967, -28766, "SpittingMudFly", "baby", "Fly Fly"));
                    ArtificialIntelligenceAccess.push(new Unit(-6372, -31461, "BrolleWorms", false, "55er"));
                }

                //Clay Deposits
                scenicList.push(new Scenery("clayDeposit", -7528, -27313, -5.2, 6));
                scenicList.push(new Scenery("clayDeposit", -9444, -26065, 3.06, 4));
                scenicList.push(new Scenery("clayDeposit", -9253, -28028, 0.25, 2));
                scenicList.push(new Scenery("clayDeposit", -11376, -31332, 5.99, 2));
                scenicList.push(new Scenery("clayDeposit", -7820, -30081, -2.4, 9));
                scenicList.push(new Scenery("clayDeposit", -9852, -31025, 4, 5));
                scenicList.push(new Scenery("clayDeposit", -10243, -32593, -1, 3));
                scenicList.push(new Scenery("clayDeposit", -11861, -32456, 2.46, 7));
                scenicList.push(new Scenery("clayDeposit", -6878, -25600, 3.5, 4));
                scenicList.push(new Scenery("clayDeposit", -6966, -31909, 2.2, 3));

                change = "s3e1";
            }
        }
        else if (region == "e2")
        {
            if (change != "e2")
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
                //worldItems = [];

                //Delete All Non-native Structures

                //Delete All Non-native Scenery
                scenicList = [];

                //REGION CREATION
                //Build AI Units

                //Nelgref Himself
                if (uniqueChars.nelgrefLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Nelgref the Flayer")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-19124, 4998, "Soldier", false, "Nelgref the Flayer", {race: "Freynor", faction: "hostile", con: 12, speed: 2.7, outfit: ["skinAndBones", 4], weapon: ["rasper", [7, 3], 0, 15, 0.9], ranged: [false, "arrow", 9, 2100, 1, 7, 0, "none", 1.2], patrolStops: 0, patrolLoop: false, route:[[221 -750, 5517]]}));
                    }
                }
                //Nelgref's Pets
                if (quests.lostDeliveryPetsKilled < 7)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-19065, 5180, "Soldier", false, "Nelgref's Pet Bandit", {race: "Freynor", faction: "hostile", con: 2, speed: 0, outfit: ["blackBearLeatherArmour", 3.5], weapon: ["longbow", [7, 5], 0, 17, 1.5], ranged: [true, "steelArrow", 10, 2200, 2, 13, 0, "none", 1.65], patrolStops: 0, patrolLoop: true, route:[[3071, 314]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-19488, 4727, "Soldier", false, "Nelgref's Pet Bandit", {race: "Freynor", faction: "hostile", con: 3, speed: 0, outfit: ["blackBearLeatherArmour", 3.75], weapon: ["longbow", [7, 5], 0, 17, 1.5], ranged: [true, "arrow", 8, 2100, 1, 7, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[3071, 314]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-19304, 4578, "Soldier", false, "Nelgref's Pet Bandit", {race: "Freynor", faction: "hostile", con: 4, speed: 0, outfit: ["blackBearLeatherArmour", 3.5], weapon: ["longbow", [7, 5], 0, 17, 1.5], ranged: [true, "arrow", 9, 2000, 1, 8, 0, "none", 1], patrolStops: 0, patrolLoop: true, route:[[3071, 314]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-18944, 4663, "Soldier", false, "Nelgref's Pet Bandit", {race: "Freynor", faction: "hostile", con: 4, speed: 0, outfit: ["blackBearLeatherArmour", 3.5], weapon: ["crossbow", [7, 5], 0, 17, 1.5], ranged: [true, "steelBolt", 11, 2250, 18, 40, 0, "none", 7], patrolStops: 0, patrolLoop: true, route:[[3071, 314]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-19037, 4844, "Soldier", false, "Nelgref's Pet Bandit", {race: "Freynor", faction: "hostile", con: 7, speed: 2, outfit: ["blackBearLeatherArmour", 4], weapon: ["freydicSword", [7, 5], 0, 17, 1.5], ranged: [false, "steelBolt", 11, 2250, 18, 40, 0, "none", 7], patrolStops: 0, patrolLoop: true, route:[[3071, 314]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-19102, 5055, "Soldier", false, "Nelgref's Pet Bandit", {race: "Freynor", faction: "hostile", con: 6, speed: 1.89, outfit: ["blackBearLeatherArmour", 4], weapon: ["freydicSword", [9, 4], 0, 17, 1.4], ranged: [false, "steelBolt", 11, 2250, 18, 40, 0, "none", 7], patrolStops: 0, patrolLoop: true, route:[[3071, 314]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-18829, 4944, "Soldier", false, "Nelgref's Pet Bandit", {race: "Freynor", faction: "hostile", con: 5, speed: 1.95, outfit: ["blackBearLeatherArmour", 4.5], weapon: ["freydicSword", [8, 5], 0, 17, 1.65], ranged: [false, "steelBolt", 11, 2250, 18, 40, 0, "none", 7], patrolStops: 0, patrolLoop: true, route:[[3071, 314]]}));
                }
                else if (uniqueChars.nelgrefLDS == false)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-19031, 5072, "Shehid", true, "shetop"));
                    ArtificialIntelligenceAccess.push(new Unit(-19209, 4955, "Shehid", true, "shetel"));
                    ArtificialIntelligenceAccess.push(new Unit(-19220, 4736, "Shehid", false, "shetlip"));
                    ArtificialIntelligenceAccess.push(new Unit(-19361, 4670, "Shehid", false, "shetlic"));
                    ArtificialIntelligenceAccess.push(new Unit(-19390, 4819, "Shehid", false, "shetlil"));
                    ArtificialIntelligenceAccess.push(new Unit(-19028, 4798, "Shehid", false, "shetlaf"));
                    ArtificialIntelligenceAccess.push(new Unit(-18892, 4652, "Shehid", true, "shetlint"));
                    ArtificialIntelligenceAccess.push(new Unit(-19029, 5211, "Shehid", false, "shetluf"));
                    ArtificialIntelligenceAccess.push(new Unit(-18844, 4864, "Shehid", false, "shetlif"));
                    scenicList.push(new Scenery("glinPlant", -19151 , 5065, 5, true));
                    scenicList.push(new Scenery("glinPlant", -19348 , 4690, 1, true));
                    scenicList.push(new Scenery("glinPlant", -19192 , 4937, -2.94, true));
                    scenicList.push(new Scenery("glinPlant", -19087 , 4935, 0, true));
                }

                //The Victims
                scenicList.push(new Scenery("skeleton", -19230, 5008, 5.12, 1.75));
                scenicList.push(new Scenery("skeleton", -19152, 4938, 0, 1.6));
                scenicList.push(new Scenery("skeleton", -19142, 4932, 3, 1));
                scenicList.push(new Scenery("skeleton", -19157, 4928, 1.5, 1.8));
                scenicList.push(new Scenery("skeleton", -19162, 4925, 6, 1.7));
                scenicList.push(new Scenery("skeleton", -19332, 4714, 4.6, 1.6));

                if (quests.lostDeliveryQuest != "complete")
                {
                    scenicList.push(new Scenery("skeleton", -19014, 1364, 2.1, 1.624));
                    scenicList.push(new Scenery("deadNaaprid", -18626, 1304, 3.4, 1.93));
                    scenicList.push(new Scenery("propWagon", -18822, 1253, -3.24, 1.75));
                }

                //Nelgref's Camp
                scenicList.push(new Scenery("tent", -18961, 5013, -1/4 * Math.PI, true));
                scenicList.push(new Scenery("tent", -19367, 5077, 1/4 * Math.PI, true));
                scenicList.push(new Scenery("tent", -19088, 4716, Math.PI, true));
                scenicList.push(new Scenery("tent", -19413, 4554, 1/2 * Math.PI, true));
                scenicList.push(new Scenery("tent", -19511, 4796, 0.875/2 * Math.PI, true));
                if (quests.lostDeliveryCrate == true)
                {
                    quests.lostDeliveryCrate = false;
                    worldItems.push([new Item("freydicSword", -18885, 4710), 1]);
                    worldItems.push([new Item("longbow", -18885, 4845), 1]);
                    worldItems.push([new Item("longbow", -18880, 4849), 1]);
                    worldItems.push([new Item("coins", -18890, 4865), 114]);
                    worldItems.push([new Item("arrow", -18924, 4835), 1]);
                    worldItems.push([new Item("arrow", -18923, 4837), 59]);
                    worldItems.push([new Item("arrow", -18923, 4839), 1]);
                    worldItems.push([new Item("arrow", -18921, 4840), 1]);
                    worldItems.push([new Item("steelBolt", -18924, 4835), 2]);
                    worldItems.push([new Item("steelBolt", -18923, 4837), 14]);
                    worldItems.push([new Item("steelBolt", -18923, 4839), 1]);
                    worldItems.push([new Item("steelBolt", -18922, 4840), 1]);
                    worldItems.push([new Item("crossbow", -18857, 4765), 1]);
                    worldItems.push([new Item("svehnsShipment", -18942, 4822), 1]);
                }

                //Animals in the forest
                ArtificialIntelligenceAccess.push(new Unit(-13935, 2270, "Grib", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-13805, 2514, "Grib", true, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-14035, 4389, "Grib", true, "Kab"));
                ArtificialIntelligenceAccess.push(new Unit(-14477, 1925, "Viper", false, "Slib"));
                ArtificialIntelligenceAccess.push(new Unit(-14087, 1359, "Lizard", true, "Lib"));
                ArtificialIntelligenceAccess.push(new Unit(-14854, 1081, "Lizard", false, "Liv"));
                ArtificialIntelligenceAccess.push(new Unit(-14501, 3283, "BlackBear", false, "Clib"));
                ArtificialIntelligenceAccess.push(new Unit(-14409, 5947, "BlackBear", true, "Clob"));
                ArtificialIntelligenceAccess.push(new Unit(-15119, 2314, "Varn", true, "Flib"));
                ArtificialIntelligenceAccess.push(new Unit(-15015, 2450, "Varn", true, "Flab"));
                ArtificialIntelligenceAccess.push(new Unit(-15423, 2581, "Varn", true, "Flob"));
                ArtificialIntelligenceAccess.push(new Unit(-15295, 2370, "Varn", false, "Fleeb"));
                ArtificialIntelligenceAccess.push(new Unit(-15517, 2396, "Varn", false, "Fliib"));
                ArtificialIntelligenceAccess.push(new Unit(-15335, 2212, "Varn", true, "Fleb"));
                ArtificialIntelligenceAccess.push(new Unit(-15138, 1770, "Varn", false, "Floob"));
                ArtificialIntelligenceAccess.push(new Unit(-17199, 1851, "Varn", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-13713, 5329, "Narthwarp", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-15646, 4550, "Narthwarp", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-15865, 4466, "Narthwarp", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-16109, 4842, "Narthwarp", false, "docile"));
                if (uniqueChars.nelgrefLDS == false)
                {
                    scenicList.push(new Scenery("ulgoyPlant", -16488, 3908, 4.9, 7));
                    ArtificialIntelligenceAccess.push(new Unit(-16473, 3885, "Ulgoy", "giant", "The Really Big Plant"));
                }
                else
                {
                    scenicList.push(new Scenery("ulgoyPlant", -16488, 3908, -1, 3.15));
                    ArtificialIntelligenceAccess.push(new Unit(-16473, 3885, "Ulgoy", true, "Biggy-Realz"));
                }
                ArtificialIntelligenceAccess.push(new Unit(-16247, 3330, "BlackBear", true, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-16497, 2348, "Grib", true, "Gral"));
                ArtificialIntelligenceAccess.push(new Unit(-16874, 2476, "Grib", true, "Grul"));
                ArtificialIntelligenceAccess.push(new Unit(-19305, 2966, "BlackBear", false, "Clibly"));
                if (Math.random() > 0.64)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-19573, 2028, "Viper", true, "Slizer"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-19573, 2028, "Viper", false, "Slizer"));
                    ArtificialIntelligenceAccess.push(new Unit(-16259, -3313, "Viper", false, "Slipre"));
                    ArtificialIntelligenceAccess.push(new Unit(-15731, 5838, "Narthwarp", false, "Eklitora"));
                }
                ArtificialIntelligenceAccess.push(new Unit(-21387, 2488, "Grib", false, "Bilbo"));
                ArtificialIntelligenceAccess.push(new Unit(-21779, 2420, "Grib", true, "Frodo"));
                ArtificialIntelligenceAccess.push(new Unit(-21522, 2687, "Grib", true, "Samwise"));
                ArtificialIntelligenceAccess.push(new Unit(-22888, 2091, "Varn", true, "Flaib"));
                scenicList.push(new Scenery("ulgoyPlant", -22546, 4123, -3, 2.12));
                ArtificialIntelligenceAccess.push(new Unit(-22550, 4118, "Ulgoy", false, "Planter"));
                ArtificialIntelligenceAccess.push(new Unit(-20755, 3424, "BlackBear", false, "Clibord the Bear"));
                ArtificialIntelligenceAccess.push(new Unit(-21610, 5421, "Lizard", false, "Liva"));
                ArtificialIntelligenceAccess.push(new Unit(-21075, 4279, "Varn", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-20984, 4020, "Varn", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-18413, 6123, "BlackBear", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-17227, 5680, "Lizard", true, "Ligazo"));
                ArtificialIntelligenceAccess.push(new Unit(-15719, 6052, "Narthwarp", false, "Kabordo"));
                ArtificialIntelligenceAccess.push(new Unit(-16052, 6015, "Narthwarp", false, "Eklit"));
                ArtificialIntelligenceAccess.push(new Unit(-14353, 3844, "Shehid", true, "sheta"));
                ArtificialIntelligenceAccess.push(new Unit(-17202, 1305, "Lizard", true, "Luc"));
                ArtificialIntelligenceAccess.push(new Unit(-16084, 1398, "Lizard", false, "Luv"));
                scenicList.push(new Scenery("beeHive", -15375 , -2055, 4.5, true));
                scenicList.push(new Scenery("beeHive", -19953 , -2708, -3.8, true));
                ArtificialIntelligenceAccess.push(new Unit(-17095, -2815, "Narthwarp", true, "Kettoltep"));
                ArtificialIntelligenceAccess.push(new Unit(-17079, -3085, "Narthwarp", false, "Kettol"));
                ArtificialIntelligenceAccess.push(new Unit(-16980, -3120, "Narthwarp", false, "Teptep"));
                ArtificialIntelligenceAccess.push(new Unit(-17672, -3085, "Narthwarp", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-17522, -2898, "Narthwarp", false, "Kettep"));
                ArtificialIntelligenceAccess.push(new Unit(-17424, -2814, "Narthwarp", false, "Toltep"));
                ArtificialIntelligenceAccess.push(new Unit(-16882, -2909, "Narthwarp", false, "Koltep"));
                ArtificialIntelligenceAccess.push(new Unit(-16593, -3099, "Lizard", true, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-16833, -3200, "Lizard", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-16743, -3522, "Lizard", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-16181, -2238, "Shehid", true, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-16327, -2176, "Shehid", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-16161, -2091, "Shehid", false, "Scrud"));
                ArtificialIntelligenceAccess.push(new Unit(-15474, -1603, "BlackBear", true, "Juvitude"));
                ArtificialIntelligenceAccess.push(new Unit(-15906, -1761, "BlackBear", true, "Juvily"));
                ArtificialIntelligenceAccess.push(new Unit(-14651, -1987, "BlackBear", false, "Juvol"));
                ArtificialIntelligenceAccess.push(new Unit(-14275, -2508, "Lizard", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-14922, -2996, "Varn", false, "Tib"));
                ArtificialIntelligenceAccess.push(new Unit(-15003, -3225, "Varn", false, "Tab"));
                ArtificialIntelligenceAccess.push(new Unit(-15621, -2601, "Varn", true, "Tob"));
                ArtificialIntelligenceAccess.push(new Unit(-13547, -3147, "Grib", true, "Todder"));
                ArtificialIntelligenceAccess.push(new Unit(-14165, -1195, "Lizard", true, "docile"));
                scenicList.push(new Scenery("ulgoyPlant", -14555, 441, -1, 3.25));
                ArtificialIntelligenceAccess.push(new Unit(-14546, 437, "Ulgoy", true, "Planted"));
                ArtificialIntelligenceAccess.push(new Unit(-15058, -47, "BlackBear", false, "Plant Food"));
                ArtificialIntelligenceAccess.push(new Unit(-14311, -383, "Varn", true, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-15181, -576, "Lizard", true, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-18661, 424, "BlackBear", false, "Berry Buffer"));
                ArtificialIntelligenceAccess.push(new Unit(-16843, -1317, "Narthwarp", false, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-14871, -912, "Varn", true, "docile"));
                if (Math.random() > 0.74)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-17651, -2072, "Narthwarp", true, "Kulpatelep"));
                    ArtificialIntelligenceAccess.push(new Unit(-18089, -2704, "Narthwarp", false, "Telp"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-17651, -2072, "Narthwarp", false, "Kulpa"));
                    ArtificialIntelligenceAccess.push(new Unit(-17449, -2093, "Narthwarp", false, "Telep"));
                    ArtificialIntelligenceAccess.push(new Unit(-17798, -2281, "Narthwarp", false, "Leplep"));
                    ArtificialIntelligenceAccess.push(new Unit(-17836, -2802, "Narthwarp", false, "Telp"));
                    ArtificialIntelligenceAccess.push(new Unit(-18278, -2802, "Narthwarp", false, "Tepla"));
                    ArtificialIntelligenceAccess.push(new Unit(-19849, -3181, "BlackBear", false, "Juvelina"));
                }
                ArtificialIntelligenceAccess.push(new Unit(-19272, -2795, "BlackBear", true, "Juvelin"));
                ArtificialIntelligenceAccess.push(new Unit(-20060, -2796, "Lizard", true, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(-20511, -2924, "Grib", true, "Tedder"));
                ArtificialIntelligenceAccess.push(new Unit(-20619, -2502, "Grib", false, "Tedrit"));
                ArtificialIntelligenceAccess.push(new Unit(-18988, -2543, "Viper", false, "Slick-scale"));
                if (Math.random() > 0.82)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-18630, -2335, "Viper", true, "Slick-skin"));
                    ArtificialIntelligenceAccess.push(new Unit(-16830, -64, "BlackBear", false, "Juvelen"));
                    ArtificialIntelligenceAccess.push(new Unit(-21241, 638, "BlackBear", false, "Juvalic"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-18630, -2335, "Viper", false, "Slick-skin"));
                    ArtificialIntelligenceAccess.push(new Unit(-16830, -64, "BlackBear", true, "Juvelen"));
                    ArtificialIntelligenceAccess.push(new Unit(-21241, 638, "Lizard", false, "docile"));
                    ArtificialIntelligenceAccess.push(new Unit(-21031, 477, "Lizard", false, "docile"));
                }
                ArtificialIntelligenceAccess.push(new Unit(-17137, -593, "BlackBear", false, "Juvel"));
                ArtificialIntelligenceAccess.push(new Unit(-17886, -1025, "Lizard", false, "lizter"));
                ArtificialIntelligenceAccess.push(new Unit(-18023, -1131, "Lizard", false, "liztel"));
                ArtificialIntelligenceAccess.push(new Unit(-17567, -1193, "Lizard", false, "lizt"));
                ArtificialIntelligenceAccess.push(new Unit(-16960, 534, "Shehid", false, "Glup"));
                ArtificialIntelligenceAccess.push(new Unit(-17007, 150, "Shehid", false, "Glip"));
                ArtificialIntelligenceAccess.push(new Unit(-14576, 812, "Shehid", true, "Glap"));
                ArtificialIntelligenceAccess.push(new Unit(-15164, 722, "Shehid", false, "Glep"));
                ArtificialIntelligenceAccess.push(new Unit(-15561, 844, "Shehid", true, "Glop"));
                ArtificialIntelligenceAccess.push(new Unit(-19052, -2302, "Shehid", false, "Gliip"));
                ArtificialIntelligenceAccess.push(new Unit(-20743, -2220, "Shehid", false, "Gleep"));
                ArtificialIntelligenceAccess.push(new Unit(-20938, -1931, "Shehid", false, "Gleap"));
                ArtificialIntelligenceAccess.push(new Unit(-20776, -1903, "Varn", true, "docdoc"));
                ArtificialIntelligenceAccess.push(new Unit(-20580, -1805, "Varn", true, "docedoc"));
                ArtificialIntelligenceAccess.push(new Unit(-20254, -1786, "Varn", true, "doc"));
                ArtificialIntelligenceAccess.push(new Unit(-20446, -1736, "Varn", true, "dock"));
                ArtificialIntelligenceAccess.push(new Unit(-20558, -1394, "Varn", true, "doce"));
                ArtificialIntelligenceAccess.push(new Unit(-20809, -1594, "Varn", false, "dewey"));
                ArtificialIntelligenceAccess.push(new Unit(-20745, -1272, "Varn", false, "scrappy"));
                ArtificialIntelligenceAccess.push(new Unit(-21055, -724, "Narthwarp", false, "Kulta"));
                ArtificialIntelligenceAccess.push(new Unit(-20815, -833, "Narthwarp", false, "Tultet"));
                ArtificialIntelligenceAccess.push(new Unit(-21202, 974, "Shehid", false, "Glupt"));
                ArtificialIntelligenceAccess.push(new Unit(-22587, 760, "Grib", true, "Talgtits"));
                ArtificialIntelligenceAccess.push(new Unit(-22665, 465, "Shehid", false, "Glipt"));
                ArtificialIntelligenceAccess.push(new Unit(-22492, -2627, "Shehid", true, "Glept"));
                ArtificialIntelligenceAccess.push(new Unit(-22330, -2847, "Shehid", false, "Glapt"));
                ArtificialIntelligenceAccess.push(new Unit(-21940, -2697, "Shehid", false, "Glopt"));
                ArtificialIntelligenceAccess.push(new Unit(-23064, -3078, "Varn", false, "B-Dew"));
                ArtificialIntelligenceAccess.push(new Unit(-22850, -1810, "Shehid", false, "Gleept"));
                ArtificialIntelligenceAccess.push(new Unit(-22400, -1305, "Lizard", false, "liztil"));
                ArtificialIntelligenceAccess.push(new Unit(-18456, 3006, "Shehid", false, "Glilpt"));
                ArtificialIntelligenceAccess.push(new Unit(-17556, 3418, "Shehid", true, "Glulpt"));
                ArtificialIntelligenceAccess.push(new Unit(-14218, 4947, "Shehid", false, "Glolpt"));
                ArtificialIntelligenceAccess.push(new Unit(-16711, 5327, "Shehid", false, "Glelpt"));
                ArtificialIntelligenceAccess.push(new Unit(-21770, 5635, "Shehid", false, "Glelpt"));
                ArtificialIntelligenceAccess.push(new Unit(-14530, -669, "Shehid", false, "Gloolpt"));
                ArtificialIntelligenceAccess.push(new Unit(-22718, -369, "Lizard", false, "docile"));
                if (Math.random() > 0.80)
                {
                    if (Math.random() > 5)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-21429, 1215, "Viper", false, "Dry-scale"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-21429, 1215, "Shehid", true, "Glum"));
                    }
                }
                else
                {
                    if (Math.random() > 6.5)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-21429, 1215, "Shehid", false, "Glim"));
                    }
                }
                //Build Scenery

                //trees in the wuncwer woods.
                scenicList.push(new Scenery("pineTree", -13696, 1772, 1.3, true));
                scenicList.push(new Scenery("pineTree", -14036, 1575, 2.25, true));
                scenicList.push(new Scenery("pineTree", -14255, 1933, -5.3, true));
                scenicList.push(new Scenery("pineTree", -14548, 1709, -4.25, true));
                scenicList.push(new Scenery("pineTree", -13749, 2072, 3, true));
                scenicList.push(new Scenery("pineTree", -13699, 707, -1.3, true));
                scenicList.push(new Scenery("pineTree", -13735, 1127, -2.25, true));
                scenicList.push(new Scenery("pineTree", -14119, 917, 5.4, true));
                scenicList.push(new Scenery("pineTree", -13447, 104, 4.25, true));
                scenicList.push(new Scenery("pineTree", -14194, 574, -3.5, true));
                scenicList.push(new Scenery("pineTree", -13709, -299, 4.6, true));
                scenicList.push(new Scenery("pineTree", -13857, 269, 2, true));
                scenicList.push(new Scenery("pineTree", -14349, 210, 2.95, true));
                scenicList.push(new Scenery("pineTree", -13966, -29, -6, true));
                scenicList.push(new Scenery("pineTree", -14213, -537, -5, true));
                scenicList.push(new Scenery("pineTree", -13696, -764, 3.7, true));
                scenicList.push(new Scenery("pineTree", -14226, -958, -2, true));
                scenicList.push(new Scenery("pineTree", -13429, -1039, -2.75, true));
                scenicList.push(new Scenery("pineTree", -13757, -1282, 6.1, true));
                scenicList.push(new Scenery("pineTree", -14638, 1014, 4.85, true));
                scenicList.push(new Scenery("pineTree", -14088, -1655, -4.2, true));
                scenicList.push(new Scenery("pineTree", -13524, -1559, 3.8, true));
                scenicList.push(new Scenery("pineTree", -13681, -1845, 1.4, true));
                scenicList.push(new Scenery("pineTree", -14604, 718, 1.68, true));
                scenicList.push(new Scenery("pineTree", -14346, -203, 5.79, true));
                scenicList.push(new Scenery("pineTree", -14298, -1385, -5.34, true));
                scenicList.push(new Scenery("pineTree", -13604, -2246, -2.75, true));
                scenicList.push(new Scenery("pineTree", -14054, -2088, 6.1, true));
                scenicList.push(new Scenery("pineTree", -14422, -1919, -4.85, true));
                scenicList.push(new Scenery("pineTree", -14636, -1141, -6.2, true));
                scenicList.push(new Scenery("pineTree", -14750, -1668, -3.8, true));
                scenicList.push(new Scenery("pineTree", -14003, -2427, -1.4, true));
                scenicList.push(new Scenery("pineTree", -13513, -2573, -1.68, true));
                scenicList.push(new Scenery("pineTree", -13401, -2965, -5.79, true));
                scenicList.push(new Scenery("pineTree", -13693, -3272, 5.34, true));
                scenicList.push(new Scenery("pineTree", -13853, -3600, 2.4, true));
                scenicList.push(new Scenery("pineTree", -13898, -2842, -2.25, true));
                scenicList.push(new Scenery("pineTree", -14160, -3433, 5.6, true));
                scenicList.push(new Scenery("pineTree", -14274, -3142, -4.4, true));
                scenicList.push(new Scenery("pineTree", -14489, -2910, 2.55, true));
                scenicList.push(new Scenery("pineTree", -14605, -3349, -1.3, true));
                scenicList.push(new Scenery("pineTree", -14225, -2703, -2.25, true));
                scenicList.push(new Scenery("pineTree", -14570, -2559, -5.9, true));
                scenicList.push(new Scenery("pineTree", -14744, -2267, 4.25, true));
                scenicList.push(new Scenery("pineTree", -14315, -2276, -3.5, true));
                scenicList.push(new Scenery("pineTree", -14899, -3219, 4.6, true));
                scenicList.push(new Scenery("pineTree", -14827, -3578, 2.678, true));
                scenicList.push(new Scenery("pineTree", -14623, -727, 2.95, true));
                scenicList.push(new Scenery("pineTree", -14891, -334, -6, true));
                scenicList.push(new Scenery("pineTree", -14685, 31, -5, true));
                scenicList.push(new Scenery("pineTree", -14837, 405, 3.7, true));
                scenicList.push(new Scenery("pineTree", -14850, 1520, -2, true));
                scenicList.push(new Scenery("pineTree", -14699, 2005, -2.75, true));
                scenicList.push(new Scenery("pineTree", -13700, 2375, 6.6, true));
                scenicList.push(new Scenery("pineTree", -13454, 2883, 4.85, true));
                scenicList.push(new Scenery("pineTree", -13835, 2716, -4.2, true));
                scenicList.push(new Scenery("pineTree", -14187, 2273, 3.8, true));
                scenicList.push(new Scenery("pineTree", -14702, 2454, 1.4, true));
                scenicList.push(new Scenery("pineTree", -14278, 2555, -1.9, true));
                scenicList.push(new Scenery("pineTree", -14550, 2857, 5.82, true));
                scenicList.push(new Scenery("pineTree", -14060, 3070, 8.9, true));
                scenicList.push(new Scenery("pineTree", -14775, 3265, -3.75, true));
                scenicList.push(new Scenery("pineTree", -13615, 3272, 6.25, true));
                scenicList.push(new Scenery("pineTree", -14006, 3491, 4.45, true));
                scenicList.push(new Scenery("pineTree", -13382, 3558, -6.77, true));
                scenicList.push(new Scenery("pineTree", -13811, 3791, -3.8, true));
                scenicList.push(new Scenery("pineTree", -14545, 3577, -2.1, true));
                scenicList.push(new Scenery("pineTree", -14751, 4028, -1.68, true));
                scenicList.push(new Scenery("pineTree", -14245, 3877, -5.36, true));
                scenicList.push(new Scenery("pineTree", -14299, 4240, 6, true));
                scenicList.push(new Scenery("pineTree", -13935, 4112, -1.5, true));
                scenicList.push(new Scenery("pineTree", -13455, 4015, 1.5, true));
                scenicList.push(new Scenery("pineTree", -14828, 4400, 3.5, true));
                scenicList.push(new Scenery("pineTree", -13638, 4478, -7, true));
                scenicList.push(new Scenery("pineTree", -13579, 4760, 4.8, true));
                scenicList.push(new Scenery("pineTree", -14176, 4636, -4.15, true));
                scenicList.push(new Scenery("pineTree", -14636, 4744, 5, true));
                scenicList.push(new Scenery("pineTree", -13902, 5082, -2.64, true));
                scenicList.push(new Scenery("pineTree", -13402, 5321, 6.64, true));
                scenicList.push(new Scenery("pineTree", -13541, 5707, 0, true));
                scenicList.push(new Scenery("pineTree", -14000, 5467, 24, true));
                scenicList.push(new Scenery("pineTree", -14382, 5058, -1, true));
                scenicList.push(new Scenery("pineTree", -14904, 4994, -3.14, true));
                scenicList.push(new Scenery("pineTree", -14644, 5409, 4.326, true));
                scenicList.push(new Scenery("pineTree", -13707, 6029, 0.2, true));
                scenicList.push(new Scenery("pineTree", -14063, 6249, -1.81, true));
                scenicList.push(new Scenery("pineTree", -13699, 6445, 8.92, true));
                scenicList.push(new Scenery("pineTree", -14144, 5820, 3.14, true));
                scenicList.push(new Scenery("pineTree", -14623, 5700, -4.326, true));
                scenicList.push(new Scenery("pineTree", -14450, 6526, 2.7, true));
                scenicList.push(new Scenery("pineTree", -14642, 6116, 5.82, true));
                scenicList.push(new Scenery("pineTree", -14893, 6438, 0.726, true));
                scenicList.push(new Scenery("pineTree", -15628, 1611, 1.3, true));
                scenicList.push(new Scenery("pineTree", -15344, 1992, 2.25, true));
                scenicList.push(new Scenery("pineTree", -15190, 2889, -5.3, true));
                scenicList.push(new Scenery("pineTree", -15615, 3098, -4.25, true));
                scenicList.push(new Scenery("pineTree", -15241, 3679, 3, true));
                scenicList.push(new Scenery("pineTree", -15469, 2507, -1.3, true));
                scenicList.push(new Scenery("pineTree", -16320, 1764, -2.25, true));
                scenicList.push(new Scenery("pineTree", -15943, 2235, 5.4, true));
                scenicList.push(new Scenery("pineTree", -16085, 2692, 4.25, true));
                scenicList.push(new Scenery("pineTree", -16512, 3569, -3.5, true));
                scenicList.push(new Scenery("pineTree", -15498, 4189, 4.6, true));
                scenicList.push(new Scenery("pineTree", -15242, 4637, 2, true));
                scenicList.push(new Scenery("pineTree", -15361, 5314, 2.95, true));
                scenicList.push(new Scenery("pineTree", -15203, 5851, -6, true));
                scenicList.push(new Scenery("pineTree", -15465, 6213, -5, true));
                scenicList.push(new Scenery("pineTree", -16035, 6526, 3.7, true));
                scenicList.push(new Scenery("pineTree", -16141, 6034, -2, true));
                scenicList.push(new Scenery("pineTree", -15757, 5754, -2.75, true));
                scenicList.push(new Scenery("pineTree", -15901, 4924, 6.1, true));
                scenicList.push(new Scenery("pineTree", -16093, 4488, 4.85, true));
                scenicList.push(new Scenery("pineTree", -16098, 3890, -4.2, true));
                scenicList.push(new Scenery("pineTree", -15749, 3541, 3.8, true));
                scenicList.push(new Scenery("pineTree", -16300, 2986, 1.4, true));
                scenicList.push(new Scenery("pineTree", -16861, 1612, 1.68, true));
                scenicList.push(new Scenery("pineTree", -16864, 2094, 5.79, true));
                scenicList.push(new Scenery("pineTree", -16757, 2600, -5.34, true));
                scenicList.push(new Scenery("pineTree", -16849, 3207, -2.75, true));
                scenicList.push(new Scenery("pineTree", -17408, 2504, 6.1, true));
                scenicList.push(new Scenery("pineTree", -17372, 2912, -4.85, true));
                scenicList.push(new Scenery("pineTree", -16578, 4340, -6.2, true));
                scenicList.push(new Scenery("pineTree", -16868, 4013, -3.8, true));
                scenicList.push(new Scenery("pineTree", -17472, 3463, -1.4, true));
                scenicList.push(new Scenery("pineTree", -16269, 5517, -1.68, true));
                scenicList.push(new Scenery("pineTree", -16404, 5215, -5.79, true));
                scenicList.push(new Scenery("pineTree", -16900, 4847, 5.34, true));
                scenicList.push(new Scenery("pineTree", -17335, 5020, 2.4, true));
                scenicList.push(new Scenery("pineTree", -17027, 5461, -2.25, true));
                scenicList.push(new Scenery("pineTree", -16899, 5902, 5.6, true));
                scenicList.push(new Scenery("pineTree", -16640, 6412, -4.4, true));
                scenicList.push(new Scenery("pineTree", -17292, 6300, 2.55, true));
                scenicList.push(new Scenery("pineTree", -17573, 5935, -1.3, true));
                scenicList.push(new Scenery("pineTree", -17567, 5488, -2.25, true));
                scenicList.push(new Scenery("pineTree", -18078, 5167, -5.9, true));
                scenicList.push(new Scenery("pineTree", -18066, 6193, 4.25, true));
                scenicList.push(new Scenery("pineTree", -18063, 5832, -3.5, true));
                scenicList.push(new Scenery("pineTree", -18476, 5510, 4.6, true));
                scenicList.push(new Scenery("pineTree", -17723, 4700, 2.678, true));
                scenicList.push(new Scenery("pineTree", -17409, 4286, 2.95, true));
                scenicList.push(new Scenery("pineTree", -18154, 3967, -6, true));
                scenicList.push(new Scenery("pineTree", -18089, 3548, -5, true));
                scenicList.push(new Scenery("pineTree", -18045, 2677, 3.7, true));
                scenicList.push(new Scenery("pineTree", -17417, 1513, -2, true));
                scenicList.push(new Scenery("pineTree", -17501, 1941, -2.75, true));
                scenicList.push(new Scenery("pineTree", -18204, 2160, 6.6, true));
                scenicList.push(new Scenery("pineTree", -17837, 3063, 4.85, true));
                scenicList.push(new Scenery("pineTree", -18068, 1665, -4.2, true));
                scenicList.push(new Scenery("pineTree", -19271, 5223, 3.8, true));
                scenicList.push(new Scenery("pineTree", -18871, 5094, 1.4, true));
                scenicList.push(new Scenery("pineTree", -18813, 4792, -1.9, true));
                scenicList.push(new Scenery("pineTree", -19098, 4599, 5.82, true));
                scenicList.push(new Scenery("pineTree", -19543, 4574, 8.9, true));
                scenicList.push(new Scenery("pineTree", -19433, 4942, 0, true));
                scenicList.push(new Scenery("pineTree", -18354, 4916, 6.25, true));
                scenicList.push(new Scenery("pineTree", -17924, 4397, 4.45, true));
                scenicList.push(new Scenery("pineTree", -17583, 3765, -6.77, true));
                scenicList.push(new Scenery("pineTree", -17091, 3684, -3.8, true));
                scenicList.push(new Scenery("pineTree", -18492, 4564, -2.1, true));
                scenicList.push(new Scenery("pineTree", -18851, 4176, -1.68, true));
                scenicList.push(new Scenery("pineTree", -18639, 1603, -5.36, true));
                scenicList.push(new Scenery("pineTree", -18441, 1910, 6, true));
                scenicList.push(new Scenery("pineTree", -18706, 3761, -1.5, true));
                scenicList.push(new Scenery("pineTree", -18544, 2952, 1.5, true));
                scenicList.push(new Scenery("pineTree", -18653, 2522, 3.5, true));
                scenicList.push(new Scenery("pineTree", -18919, 2081, -7.5, true));
                scenicList.push(new Scenery("pineTree", -19315, 1774, 4.8, true));
                scenicList.push(new Scenery("pineTree", -19719, 1517, -4.15, true));
                scenicList.push(new Scenery("pineTree", -19914, 1983, 5, true));
                scenicList.push(new Scenery("pineTree", -19293, 2219, -2.64, true));
                scenicList.push(new Scenery("pineTree", -19081, 2835, 6.64, true));
                scenicList.push(new Scenery("pineTree", -18500, 3371, 0, true));
                scenicList.push(new Scenery("pineTree", -19132, 3300, 23.3, true));
                scenicList.push(new Scenery("pineTree", -19480, 2548, -1, true));
                scenicList.push(new Scenery("pineTree", -19696, 3059, -3.46, true));
                scenicList.push(new Scenery("pineTree", -20199, 1676, 4.637, true));
                scenicList.push(new Scenery("pineTree", -20577, 1620, 0.2, true));
                scenicList.push(new Scenery("pineTree", -20402, 2215, -1.81, true));
                scenicList.push(new Scenery("pineTree", -19785, 2312, 8.92, true));
                scenicList.push(new Scenery("pineTree", -20302, 2697, 3.14, true));
                scenicList.push(new Scenery("pineTree", -18697, 5892, -4.326, true));
                scenicList.push(new Scenery("pineTree", -18660, 6413, 2.7, true));
                scenicList.push(new Scenery("pineTree", -19173, 6128, 5.82, true));
                scenicList.push(new Scenery("pineTree", -18934, 3576, 0.726, true));
                scenicList.push(new Scenery("pineTree", -19412, 5677, -2, true));
                scenicList.push(new Scenery("pineTree", -19471, 4118, 2.25, true));
                scenicList.push(new Scenery("pineTree", -19417, 3763, -5.5, true));
                scenicList.push(new Scenery("pineTree", -19814, 3479, -4.4, true));
                scenicList.push(new Scenery("pineTree", -20462, 3144, 3, true));
                scenicList.push(new Scenery("pineTree", -20954, 2391, -1.3, true));
                scenicList.push(new Scenery("pineTree", -20952, 1992, -2.67, true));
                scenicList.push(new Scenery("pineTree", -21203, 1680, 5.4, true));
                scenicList.push(new Scenery("pineTree", -21683, 1554, 4.25, true));
                scenicList.push(new Scenery("pineTree", -22198, 1638, -3.5, true));
                scenicList.push(new Scenery("pineTree", -22848, 1769, 4.6, true));
                scenicList.push(new Scenery("pineTree", -23443, 1639, 2, true));
                scenicList.push(new Scenery("pineTree", -23265, 2104, 2.95, true));
                scenicList.push(new Scenery("pineTree", -23590, 2527, -6.2, true));
                scenicList.push(new Scenery("pineTree", -22965, 2502, -4.8, true));
                scenicList.push(new Scenery("pineTree", -22529, 2257, 1.7, true));
                scenicList.push(new Scenery("pineTree", -22034, 2058, -3, true));
                scenicList.push(new Scenery("pineTree", -21587, 1938, -2.75, true));
                scenicList.push(new Scenery("pineTree", -21503, 2293, 6.1, true));
                scenicList.push(new Scenery("pineTree", -21065, 2911, 4.85, true));
                scenicList.push(new Scenery("pineTree", -21982, 2543, -4.2, true));
                scenicList.push(new Scenery("pineTree", -22548, 2847, 4.8, true));
                scenicList.push(new Scenery("pineTree", -23254, 2962, 1.4, true));
                scenicList.push(new Scenery("pineTree", -21161, 3398, 2.68, true));
                scenicList.push(new Scenery("pineTree", -20274, 3694, 5.79, true));
                scenicList.push(new Scenery("pineTree", -20851, 3742, -6.34, true));
                scenicList.push(new Scenery("pineTree", -21719, 3688, -3.75, true));
                scenicList.push(new Scenery("pineTree", -21789, 2995, 6.1, true));
                scenicList.push(new Scenery("pineTree", -23551, 3569, -4.85, true));
                scenicList.push(new Scenery("pineTree", -22873, 3300, -6.2, true));
                scenicList.push(new Scenery("pineTree", -23363, 4039, -3.8, true));
                scenicList.push(new Scenery("pineTree", -23458, 4367, -1.4, true));
                scenicList.push(new Scenery("pineTree", -22987, 4643, -1.68, true));
                scenicList.push(new Scenery("pineTree", -23456, 4963, -5.79, true));
                scenicList.push(new Scenery("pineTree", -23592, 5367, 5.34, true));
                scenicList.push(new Scenery("pineTree", -23371, 5680, 2.4, true));
                scenicList.push(new Scenery("pineTree", -23153, 6151, -2.25, true));
                scenicList.push(new Scenery("pineTree", -23518, 6494, 5.6, true));
                scenicList.push(new Scenery("pineTree", -22809, -6432, -4.4, true));
                scenicList.push(new Scenery("pineTree", -16381, 4806, -2.95, true));
                scenicList.push(new Scenery("pineTree", -22013, 3355, 6.2, true));
                scenicList.push(new Scenery("pineTree", -22373, 3615, 4.1, true));
                scenicList.push(new Scenery("pineTree", -22906, 3756, -1.7, true));
                scenicList.push(new Scenery("pineTree", -20111, 4179, 3, true));
                scenicList.push(new Scenery("pineTree", -19838, 3870, 2.75, true));
                scenicList.push(new Scenery("pineTree", -20736, 4221, -6.1, true));
                scenicList.push(new Scenery("pineTree", -21323, 4021, -4.85, true));
                scenicList.push(new Scenery("pineTree", -20033, 4569, 4.2, true));
                scenicList.push(new Scenery("pineTree", -19915, 4909, -4.8, true));
                scenicList.push(new Scenery("pineTree", -20402, 4822, -1.4, true));
                scenicList.push(new Scenery("pineTree", -20422, 4481, -2.68, true));
                scenicList.push(new Scenery("pineTree", -18960, 5557, -5.79, true));
                scenicList.push(new Scenery("pineTree", -19737, 5205, 6.34, true));
                scenicList.push(new Scenery("pineTree", -19925, 5523, 3.75, true));
                scenicList.push(new Scenery("pineTree", -19708, 6434, -6.1, true));
                scenicList.push(new Scenery("pineTree", -19623, 6020, 4.85, true));
                scenicList.push(new Scenery("pineTree", -20206, 6182, 6.2, true));
                scenicList.push(new Scenery("pineTree", -20078, 5835, 3.8, true));
                scenicList.push(new Scenery("pineTree", -20358, 5210, 1.4, true));
                scenicList.push(new Scenery("pineTree", -21859, 4232, 1.68, true));
                scenicList.push(new Scenery("pineTree", -22259, 4058, 5.79, true));
                scenicList.push(new Scenery("pineTree", -22843, 4133, -5.34, true));
                scenicList.push(new Scenery("pineTree", -22906, 5194, -2.4, true));
                scenicList.push(new Scenery("pineTree", -22347, 4442, 2.25, true));
                scenicList.push(new Scenery("pineTree", -21285, 4514, -5.6, true));
                scenicList.push(new Scenery("pineTree", -20887, 4575, 3.8, true));
                scenicList.push(new Scenery("pineTree", -20993, 5001, 1.5, true));
                scenicList.push(new Scenery("pineTree", -21859, 4778, -1.72, true));
                scenicList.push(new Scenery("pineTree", -21489, 5020, 5.9, true));
                scenicList.push(new Scenery("pineTree", -20763, 5526, 5.5, true));
                scenicList.push(new Scenery("pineTree", -22641, 6364, -2.85, true));
                scenicList.push(new Scenery("pineTree", -22659, 5806, 3.2, true));
                scenicList.push(new Scenery("pineTree", -20654, 5920, -5.79, true));
                scenicList.push(new Scenery("pineTree", -20691, 6455, 3, true));
                scenicList.push(new Scenery("pineTree", -21207, 6173, -1.3, true));
                scenicList.push(new Scenery("pineTree", -21382, 5754, -2.25, true));
                scenicList.push(new Scenery("pineTree", -21300, 5423, 5.4, true));
                scenicList.push(new Scenery("pineTree", -21972, 5332, 4.25, true));
                scenicList.push(new Scenery("pineTree", -22316, 5071, -3.5, true));
                scenicList.push(new Scenery("pineTree", -21902, 5673, 4.6, true));
                scenicList.push(new Scenery("pineTree", -22422, 5411, 2, true));
                scenicList.push(new Scenery("pineTree", -22324, 6086, 2.95, true));
                scenicList.push(new Scenery("pineTree", -21735, 5972, -6, true));
                scenicList.push(new Scenery("pineTree", -21914, 6486, -3.75, true));
                scenicList.push(new Scenery("pineTree", -21454, 6550, 1, true));
                scenicList.push(new Scenery("pineTree", -15523, -3446, 1.7, true));
                scenicList.push(new Scenery("pineTree", -15477, -2936, -3, true));
                scenicList.push(new Scenery("pineTree", -15047, -2829, -2.75, true));
                scenicList.push(new Scenery("pineTree", -15291, -2535, 6.1, true));
                scenicList.push(new Scenery("pineTree", -15961, -3196, 4.85, true));
                scenicList.push(new Scenery("pineTree", -16104, -3584, -4.2, true));
                scenicList.push(new Scenery("pineTree", -16551, -3362, 4.8, true));
                scenicList.push(new Scenery("pineTree", -16988, -3495, 0.4, true));
                scenicList.push(new Scenery("pineTree", -17527, -3290, 2.9, true));
                scenicList.push(new Scenery("pineTree", -17857, -3467, -5.4, true));
                scenicList.push(new Scenery("pineTree", -17041, -3173, 6.4, true));
                scenicList.push(new Scenery("pineTree", -16385, -3044, -3.75, true));
                scenicList.push(new Scenery("pineTree", -16764, -2891, 5.6, true));
                scenicList.push(new Scenery("pineTree", -18357, -3323, -4.85, true));
                scenicList.push(new Scenery("pineTree", -18771, -3552, -6.2, true));
                scenicList.push(new Scenery("pineTree", -19190, -3559, -3.8, true));
                scenicList.push(new Scenery("pineTree", -19585, -3316, -1.4, true));
                scenicList.push(new Scenery("pineTree", -19997, -3500, -1.68, true));
                scenicList.push(new Scenery("pineTree", -20458, -3171, -5.79, true));
                scenicList.push(new Scenery("pineTree", -20633, -3579, 5.34, true));
                scenicList.push(new Scenery("pineTree", -20843, -3241, -2.25, true));
                scenicList.push(new Scenery("pineTree", -21051, -3468, 2.4, true));
                scenicList.push(new Scenery("pineTree", -21493, -3139, 5.6, true));
                scenicList.push(new Scenery("pineTree", -21542, -3563, -4.4, true));
                scenicList.push(new Scenery("pineTree", -21973, -3329, -2.95, true));
                scenicList.push(new Scenery("pineTree", -22451, -3402, 6.2, true));
                scenicList.push(new Scenery("pineTree", -22851, -3178, 4.1, true));
                scenicList.push(new Scenery("pineTree", -22988, -3485, -1.7, true));
                scenicList.push(new Scenery("pineTree", -23453, -3480, 3, true));
                scenicList.push(new Scenery("pineTree", -23268, -3193, 2.75, true));
                scenicList.push(new Scenery("pineTree", -23545, -2893, -6.1, true));
                scenicList.push(new Scenery("pineTree", -23159, -2845, -4.85, true));
                scenicList.push(new Scenery("pineTree", -23369, -2422, 4.2, true));
                scenicList.push(new Scenery("pineTree", -23000, -2106, -4.8, true));
                scenicList.push(new Scenery("pineTree", -23584, -1940, -1.4, true));
                scenicList.push(new Scenery("pineTree", -22735, -2606, -2.68, true));
                scenicList.push(new Scenery("pineTree", -22683, -2274, -5.79, true));
                scenicList.push(new Scenery("pineTree", -23244, -1655, 6.34, true));
                scenicList.push(new Scenery("pineTree", -23352, -1265, 3.75, true));
                scenicList.push(new Scenery("pineTree", -23330, -836, -6.9, true));
                scenicList.push(new Scenery("pineTree", -23001, -1077, 4.85, true));
                scenicList.push(new Scenery("pineTree", -22881, -742, 4.34, true));
                scenicList.push(new Scenery("pineTree", -23181, -555, 3.8, true));
                scenicList.push(new Scenery("pineTree", -23519, -321, 1.4, true));
                scenicList.push(new Scenery("pineTree", -23457, 139, 1.68, true));
                scenicList.push(new Scenery("pineTree", -23589, 498, 5.79, true));
                scenicList.push(new Scenery("pineTree", -23146, 704, -5.34, true));
                scenicList.push(new Scenery("pineTree", -23575, 820, -2.4, true));
                scenicList.push(new Scenery("pineTree", -23345, 1047, 2.25, true));
                scenicList.push(new Scenery("pineTree", -19017, -3180, -5.6, true));
                scenicList.push(new Scenery("pineTree", -22878, 1154, 3.8, true));
                scenicList.push(new Scenery("pineTree", -22479, 998, 1.5, true));
                scenicList.push(new Scenery("pineTree", -22018, 1043, -1.72, true));
                scenicList.push(new Scenery("pineTree", -21627, 860, 5.9, true));
                scenicList.push(new Scenery("pineTree", -21408, 1133, 5.5, true));
                scenicList.push(new Scenery("pineTree", -21076, 960, -2.85, true));
                scenicList.push(new Scenery("pineTree", -20592, 1055, 3.2, true));
                scenicList.push(new Scenery("pineTree", -20125, 1130, -5.79, true));
                scenicList.push(new Scenery("pineTree", -15166, 879, 3, true));
                scenicList.push(new Scenery("pineTree", -15498, 1073, -1.3, true));
                scenicList.push(new Scenery("pineTree", -15836, 959, -2.25, true));
                scenicList.push(new Scenery("pineTree", -16481, 1123, 5.4, true));
                scenicList.push(new Scenery("pineTree", -13447, 104, 4.25, true));
                scenicList.push(new Scenery("pineTree", -16239, 786, -3.5, true));
                scenicList.push(new Scenery("pineTree", -16912, 1090, 4.6, true));
                scenicList.push(new Scenery("pineTree", -16836, 783, 2, true));
                scenicList.push(new Scenery("pineTree", -17340, 948, 2.95, true));
                scenicList.push(new Scenery("pineTree", -17633, 1128, -6, true));
                scenicList.push(new Scenery("pineTree", -17686, 853, -5, true));
                scenicList.push(new Scenery("pineTree", -18051, 1017, 3.8, true));
                scenicList.push(new Scenery("pineTree", -18640, 1109, 2.95, true));
                scenicList.push(new Scenery("pineTree", -18449, 626, -1.3, true));
                scenicList.push(new Scenery("pineTree", -18086, 473, -2.25, true));
                scenicList.push(new Scenery("pineTree", -18595, 177, -5.9, true));
                scenicList.push(new Scenery("pineTree", -18943, 470, 4.25, true));
                scenicList.push(new Scenery("pineTree", -19007, 863, -3.5, true));
                scenicList.push(new Scenery("pineTree", -19321, 1028, 4.6, true));
                scenicList.push(new Scenery("pineTree", -19591, 1086, 2.678, true));
                scenicList.push(new Scenery("pineTree", -19454, 591, 2.95, true));
                scenicList.push(new Scenery("pineTree", -19861, 782, -6, true));
                scenicList.push(new Scenery("pineTree", -20305, 610, -5, true));
                scenicList.push(new Scenery("pineTree", -20726, 677, 3.7, true));
                scenicList.push(new Scenery("pineTree", -21306, 349, -2, true));
                scenicList.push(new Scenery("pineTree", -22272, 467, -2.75, true));
                scenicList.push(new Scenery("pineTree", -22777, 218, 6.6, true));
                scenicList.push(new Scenery("pineTree", -22961, -99, 4.85, true));
                scenicList.push(new Scenery("pineTree", -22601, -389, -4.2, true));
                scenicList.push(new Scenery("pineTree", -22346, -1032, 3.8, true));
                scenicList.push(new Scenery("pineTree", -22679, -1501, 1.4, true));
                scenicList.push(new Scenery("pineTree", -22394, -1777, -1.9, true));
                scenicList.push(new Scenery("pineTree", -22195, -2152, 5.82, true));
                scenicList.push(new Scenery("pineTree", -22280, -2462, 8.9, true));
                scenicList.push(new Scenery("pineTree", -22460, -2966, -3.75, true));
                scenicList.push(new Scenery("pineTree", -21994, -2890, 6.25, true));
                scenicList.push(new Scenery("pineTree", -21847, -2554, 4.45, true));
                scenicList.push(new Scenery("pineTree", -21242, -2782, -6.77, true));
                scenicList.push(new Scenery("pineTree", -20737, -2813, -3.8, true));
                scenicList.push(new Scenery("pineTree", -20941, -2418, -2.1, true));
                scenicList.push(new Scenery("pineTree", -21599, -2301, -1.68, true));
                scenicList.push(new Scenery("pineTree", -21830, -1919, -5.36, true));
                scenicList.push(new Scenery("pineTree", -22015, -1518, 6, true));
                scenicList.push(new Scenery("pineTree", -21745, -1091, -1.5, true));
                scenicList.push(new Scenery("pineTree", -21982, -822, 1.5, true));
                scenicList.push(new Scenery("pineTree", -22405, -657, 3.5, true));
                scenicList.push(new Scenery("pineTree", -22649, 555, -7, true));
                scenicList.push(new Scenery("pineTree", -21978, 702, 4.8, true));
                scenicList.push(new Scenery("pineTree", -21794, 281, -4.15, true));
                scenicList.push(new Scenery("pineTree", -22303, 89, 5, true));
                scenicList.push(new Scenery("pineTree", -21923, -316, -2.64, true));
                scenicList.push(new Scenery("pineTree", -21497, -600, 0, true));
                scenicList.push(new Scenery("pineTree", -21209, -2156, 7.9, true));
                scenicList.push(new Scenery("pineTree", -19867, -2946, -9.1, true));
                scenicList.push(new Scenery("pineTree", -18467, -2825, 4.0668, true));
                scenicList.push(new Scenery("pineTree", -18014, -3018, 2.2764, true));
                scenicList.push(new Scenery("pineTree", -17524, -2797, 9.2, true));
                scenicList.push(new Scenery("pineTree", -17149, -2392, -5.669, true));
                scenicList.push(new Scenery("pineTree", -17794, -2511, -1.6281, true));
                scenicList.push(new Scenery("pineTree", -19003, -2621, 2.8392, true));
                scenicList.push(new Scenery("pineTree", -19415, -2979, -6.08, true));
                scenicList.push(new Scenery("pineTree", -19710, -2256, -5, true));
                scenicList.push(new Scenery("pineTree", -16417, -2940, 3.7, true));
                scenicList.push(new Scenery("pineTree", -15963, -2636, 3.5, true));
                scenicList.push(new Scenery("pineTree", -15804, -2315, -0.17, true));
                scenicList.push(new Scenery("pineTree", -16299, -2065, 0.47, true));
                scenicList.push(new Scenery("pineTree", -16735, -2222, -4.18, true));
                scenicList.push(new Scenery("pineTree", -17319, -2106, 9.6, true));
                scenicList.push(new Scenery("pineTree", -18003, -2179, 1.45, true));
                scenicList.push(new Scenery("pineTree", -18405, -2448, -10.34, true));
                scenicList.push(new Scenery("pineTree", -19012, -2127, 3.614, true));
                scenicList.push(new Scenery("pineTree", -20250, -2499, -4.628, true));
                scenicList.push(new Scenery("pineTree", -20266, -2840, -3.4, true));
                scenicList.push(new Scenery("pineTree", -21413, -132, 57, true));
                scenicList.push(new Scenery("pineTree", -21084, -417, 0, true));
                scenicList.push(new Scenery("pineTree", -20910, 40, 3.9, true));
                scenicList.push(new Scenery("pineTree", -20649, -186, -5.4, true));
                scenicList.push(new Scenery("pineTree", -20913, 351, 4.76, true));
                scenicList.push(new Scenery("pineTree", -20389, 143, -2.3764, true));
                scenicList.push(new Scenery("pineTree", -20670, -583, -9.215, true));
                scenicList.push(new Scenery("pineTree", -21272, -973, 5.169, true));
                scenicList.push(new Scenery("pineTree", -20489, -2182, 3.1543, true));
                scenicList.push(new Scenery("pineTree", -16469, -2535, -2.53, true));
                scenicList.push(new Scenery("pineTree", -15175, 539, -4.85, true));
                scenicList.push(new Scenery("pineTree", -15252, 172, 4.2, true));
                scenicList.push(new Scenery("pineTree", -15407, -135, -4.8, true));
                scenicList.push(new Scenery("pineTree", -15893, 98, -1.4, true));
                scenicList.push(new Scenery("pineTree", -15964, -316, -2.68, true));
                scenicList.push(new Scenery("pineTree", -15537, -525, -5.79, true));
                scenicList.push(new Scenery("pineTree", -15121, -901, 6.34, true));
                scenicList.push(new Scenery("pineTree", -15172, -1282, 3.75, true));
                scenicList.push(new Scenery("pineTree", -15234, -1648, -6.9, true));
                scenicList.push(new Scenery("pineTree", -14945, -1971, -4.85, true));
                scenicList.push(new Scenery("pineTree", -15148, -2213, -4.34, true));
                scenicList.push(new Scenery("pineTree", -15506, -2018, -3.8, true));
                scenicList.push(new Scenery("pineTree", -15925, -1908, 1.4, true));
                scenicList.push(new Scenery("pineTree", -15696, 515, -1.68, true));
                scenicList.push(new Scenery("pineTree", -16270, 359, -5.79, true));
                scenicList.push(new Scenery("pineTree", -16702, 375, 5.34, true));
                scenicList.push(new Scenery("pineTree", -17269, 524, 2.4, true));
                scenicList.push(new Scenery("pineTree", -17131, 118, 2.25, true));
                scenicList.push(new Scenery("pineTree", -16383, -38, 5.6, true));
                scenicList.push(new Scenery("pineTree", -16434, -350, 3.8, true));
                scenicList.push(new Scenery("pineTree", -16141, -647, -1.5, true));
                scenicList.push(new Scenery("pineTree", -15721, -803, -1.72, true));
                scenicList.push(new Scenery("pineTree", -15542, -1113, -5.9, true));
                scenicList.push(new Scenery("pineTree", -15649, -1442, -5.5, true));
                scenicList.push(new Scenery("pineTree", -16217, -1569, 2.85, true));
                scenicList.push(new Scenery("pineTree", -16599, -1823, -3.2, true));
                scenicList.push(new Scenery("pineTree", -16996, -1833, -5.79, true));
                scenicList.push(new Scenery("pineTree", -16617, -1506, 3, true));
                scenicList.push(new Scenery("pineTree", -17093, -1481, -1.3, true));
                scenicList.push(new Scenery("pineTree", -17716, -1802, -2.25, true));
                scenicList.push(new Scenery("pineTree", -17687, -1338, 5.4, true));
                scenicList.push(new Scenery("pineTree", -18217, -1786, 4.25, true));
                scenicList.push(new Scenery("pineTree", -18453, -2031, -3.5, true));
                scenicList.push(new Scenery("pineTree", -19535, -2606, 4.6, true));
                scenicList.push(new Scenery("pineTree", -18736, -1734, 2, true));
                scenicList.push(new Scenery("pineTree", -19323, -1726, 2.95, true));
                scenicList.push(new Scenery("pineTree", -19704, -1835, -6, true));
                scenicList.push(new Scenery("pineTree", -20136, -1981, -5, true));
                scenicList.push(new Scenery("pineTree", -20092, -1615, 3.8, true));
                scenicList.push(new Scenery("pineTree", -20490, -1802, 2.95, true));
                scenicList.push(new Scenery("pineTree", -20840, -1975, -1.3, true));
                scenicList.push(new Scenery("pineTree", -21206, -1730, -2.25, true));
                scenicList.push(new Scenery("pineTree", -21494, -1430, -5.9, true));
                scenicList.push(new Scenery("pineTree", -20864, -1537, 4.25, true));
                scenicList.push(new Scenery("pineTree", -20885, -1187, -3.5, true));
                scenicList.push(new Scenery("pineTree", -20468, -1406, 4.6, true));
                scenicList.push(new Scenery("pineTree", -19978, -1231, 2.678, true));
                scenicList.push(new Scenery("pineTree", -19683, -1509, 2.95, true));
                scenicList.push(new Scenery("pineTree", -19035, -1325, -6, true));
                scenicList.push(new Scenery("pineTree", -19546, -1065, -5, true));
                scenicList.push(new Scenery("pineTree", -18977, -932, 3.7, true));
                scenicList.push(new Scenery("pineTree", -20276, -917, -2, true));
                scenicList.push(new Scenery("pineTree", -18295, -1396, -2.75, true));
                scenicList.push(new Scenery("pineTree", -18337, -1079, 6.6, true));
                scenicList.push(new Scenery("pineTree", -17802, -692, 4.85, true));
                scenicList.push(new Scenery("pineTree", -17407, -1040, -5, true));
                scenicList.push(new Scenery("pineTree", -16086, -1190, 3.8, true));
                scenicList.push(new Scenery("pineTree", -16723, -1118, 1.4, true));
                scenicList.push(new Scenery("pineTree", -16909, -724, -1.9, true));
                scenicList.push(new Scenery("pineTree", -17025, -328, 5.82, true));
                scenicList.push(new Scenery("pineTree", -17572, -357, 8.9, true));
                scenicList.push(new Scenery("pineTree", -17698, -90, -3.75, true));
                scenicList.push(new Scenery("pineTree", -17633, 258, 6.25, true));
                scenicList.push(new Scenery("pineTree", -18141, -62, 4.45, true));
                scenicList.push(new Scenery("pineTree", -18048, -419, -6.77, true));
                scenicList.push(new Scenery("pineTree", -18575, -806, -3.8, true));
                scenicList.push(new Scenery("pineTree", -18587, -385, -2.1, true));
                scenicList.push(new Scenery("pineTree", -19092, -631, -1.68, true));
                scenicList.push(new Scenery("pineTree", -19616, -734, -5.36, true));
                scenicList.push(new Scenery("pineTree", -20099, -563, 6, true));
                scenicList.push(new Scenery("pineTree", -19891, -204, -1.5, true));
                scenicList.push(new Scenery("pineTree", -19332, -290, 1.5, true));
                scenicList.push(new Scenery("pineTree", -18907, -86, 3.5, true));
                scenicList.push(new Scenery("pineTree", -19545, 124, -7, true));
                scenicList.push(new Scenery("pineTree", -19923, 398, 4.8, true));
                scenicList.push(new Scenery("pineTree", -16155, -2337, -4.15, true));
                scenicList.push(new Scenery("pineTree", -19903, -2595, 0, true));
                scenicList.push(new Scenery("pineTree", -18192, -746, 2.9999, true));

                //Plants of the wuncwer woods
                scenicList.push(new Scenery("neprilnePlant", -17425 , 3993, -5.8, true));
                scenicList.push(new Scenery("pluttPlant", -16685 , 4251, 2.4, true));
                scenicList.push(new Scenery("pluttPlant", -20807 , 5229, 3.4, true));
                scenicList.push(new Scenery("pluttPlant", -17457 , 4992, -5.2, true));
                scenicList.push(new Scenery("pluttPlant", -21673 , -3221, 4.444, true));
                scenicList.push(new Scenery("pluttPlant", -15564 , -1707, 1, true));
                scenicList.push(new Scenery("pluttPlant", -15572 , -1722, 2, true));
                scenicList.push(new Scenery("pluttPlant", -15581 , -1697, 4, true));
                scenicList.push(new Scenery("pluttPlant", -15591 , -1718, 8, true));
                scenicList.push(new Scenery("pluttPlant", -18613 , 308, 16, true));
                scenicList.push(new Scenery("culprisPlant", -16183 , 5023, -3, true));
                scenicList.push(new Scenery("culprisPlant", -15028 , 3554, 3, true));
                scenicList.push(new Scenery("culprisPlant", -18402 , 2601, 4.9, true));
                scenicList.push(new Scenery("culprisPlant", -19197 , 3033, 1.6, true));
                scenicList.push(new Scenery("culprisPlant", -22381 , -2686, 12, true));
                scenicList.push(new Scenery("culprisPlant", -16883 , -1358, -1.5, true));
                scenicList.push(new Scenery("culprisPlant", -21156 , 617, -3.5, true));
                scenicList.push(new Scenery("neprilnePlant", -15323 , 4987, 4, true));
                scenicList.push(new Scenery("neprilnePlant", -21654 , 5532, -4, true));
                scenicList.push(new Scenery("stomwikPlant", -15793 , 5985, 0, true));
                scenicList.push(new Scenery("stomwikPlant", -16580 , 3181, -4.4, true));
                scenicList.push(new Scenery("stomwikPlant", -18732 , -2343, 6, true));
                scenicList.push(new Scenery("akerPlant", -14491 , 5755, 1, true));
                scenicList.push(new Scenery("akerPlant", -14522 , 5800, 0.5, true));
                scenicList.push(new Scenery("akerPlant", -19358 , 4061, 7.6, true));
                scenicList.push(new Scenery("akerPlant", -19053 , 3597, -8.8, true));
                scenicList.push(new Scenery("akerPlant", -22214 , 4390, 0, true));
                scenicList.push(new Scenery("akerPlant", -20611 , -2843, 9.64, true));
                scenicList.push(new Scenery("akerPlant", -14692 , -1805, 7.6, true));
                scenicList.push(new Scenery("akerPlant", -18994 , -2891, -0.89, true));
                scenicList.push(new Scenery("akerPlant", -22180 , 132, -6.6, true));
                scenicList.push(new Scenery("akerPlant", -17058 , -498, 1.9, true));
                scenicList.push(new Scenery("akerPlant", -14749 , 284, -4.82, true));
                scenicList.push(new Scenery("akerPlant", -15193 , -2065, 0.25, true));
                scenicList.push(new Scenery("akerPlant", -17115 , -221, 6.25, true));
                scenicList.push(new Scenery("glinPlant", -14380 , 4881, -1, true));
                scenicList.push(new Scenery("glinPlant", -15147 , 3024, 6, true));
                scenicList.push(new Scenery("glinPlant", -17777 , 3397, -3.5, true));
                scenicList.push(new Scenery("glinPlant", -21282 , 3248, -3.1, true));
                scenicList.push(new Scenery("glinPlant", -15555 , 4047, 4.3, true));
                scenicList.push(new Scenery("glinPlant", -14563 , 3658, 7, true));
                scenicList.push(new Scenery("glinPlant", -16949 , -3390, 6, true));
                scenicList.push(new Scenery("glinPlant", -17023 , -2793, 5, true));
                scenicList.push(new Scenery("glinPlant", -14274 , -2850, -0.4, true));
                scenicList.push(new Scenery("glinPlant", -16534 , -2922, 6, true));
                scenicList.push(new Scenery("glinPlant", -15944 , -2502, -7.789, true));
                scenicList.push(new Scenery("neprilnePlant", -17081 , 2517, -2.6, true));
                scenicList.push(new Scenery("ogardPlant", -19517 , 2316, 3.141593862489, true));
                scenicList.push(new Scenery("ogardPlant", -16292 , -2231, 0, true));
                scenicList.push(new Scenery("wyrPlant", -15134 , 2399, 2.8, true));
                scenicList.push(new Scenery("wyrPlant", -20621 , -1614, -5.6, true));
                scenicList.push(new Scenery("wyrPlant", -17775 , -2176, -2.96, true));
                scenicList.push(new Scenery("wyrPlant", -20900 , -834, 3.9, true));
                scenicList.push(new Scenery("neprilnePlant", -18139 , -2706, 2.34, true));
                scenicList.push(new Scenery("halcifPlant", -17912 , -708, -4.7, true));
                scenicList.push(new Scenery("neprilnePlant", -14519 , -2354, 6.1, true));
                scenicList.push(new Scenery("cyrinthilimPlant", -16948 , -3143, 2, true));
                scenicList.push(new Scenery("cyrinthilimPlant", -21038 , -2478, 4, true));
                scenicList.push(new Scenery("neprilnePlant", -17892 , -1006, 8.5, true));
                if (Math.random() >= 0.84)
                {
                    scenicList.push(new Scenery("halcifPlant", -19558 , -2494, 0, true));
                }
                else
                {
                    scenicList.push(new Scenery("glinPlant", -19558 , -2494, 0, true));
                }

                change = "e2";
            }
        }
    }
}