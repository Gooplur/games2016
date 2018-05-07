/**
 * Created by skyeguy on 1/22/17.
 */
function worldBuilder()
{
    // THIS IS THE BACKGROUND BUILDER (height, width, type, x, y) // The tile coords 0, 0 are at the bottom right corner of Teshir City.
    //Different parts of the world load at different Y values. // maps are 34 by 34 tiles and for some reason the maps are -20 to the left. and + 14 down.
    //Each elevation (climate) zone extends 8 maps long: a different standard may apply at the extremes (such as very cold or very hot) Higher elevation is colder and lower is hotter.
    if (map == "world")
    {
        player.dmx = map;
        player.underground = false;
        //Layer -24 (tropical region): elev -3
        //mapS24
        if (Y > -248711 && Y < -237943 && X < 7687 && X > - 3901) //X0
        {
            elevation = -3;
            region = "s24";
            outlineBuilder( 34, 34, "jungle", -20, 796);
        }
        //Layer -23 (warm region): elev -2
        //mapS23
        if (Y > -238507 && Y < -227726 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s23";
            outlineBuilder( 34, 34, "savannahDirt", -20, 762);
        }
        //Layer -22 (warm region): elev -2
        //mapS22
        if (Y > -228312 && Y < -217520 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s22";
            outlineBuilder( 34, 34, "savannah", -20, 728);
        }
        //Layer -21 (warm region): elev -2
        //mapS21
        if (Y > -218110 && Y < -207328 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s21";
            outlineBuilder( 34, 34, "savannahDirt", -20, 694);
        }
        //Layer -20 (warm region): elev -2
        //mapS20
        if (Y > -207902 && Y < -197116 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s20";
            outlineBuilder( 34, 34, "savannah", -20, 660);
        }
        //Layer -19 (warm region): elev -2
        //mapS19
        if (Y > -197728 && Y < -186928 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s19";
            outlineBuilder( 34, 34, "savannahDirt", -20, 626);
            outlineBuilder( 34, 9, "sea", -20, 610);
        }
        //Layer -18 (warm region): elev -2
        //mapS18
        if (Y > -187519 && Y < -176743 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s18";
            outlineBuilder( 34, 34, "savannah", -20, 592);
        }
        //Layer -17 (warm region): elev -2
        //mapS17
        if (Y > -177325 && Y < -166541 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s17";
            outlineBuilder( 34, 34, "savannahDirt", -20, 558);
        }
        //Layer -16 (warm region): elev -2
        //mapS16
        if (Y > -167118 && Y < -156349 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s16";
            outlineBuilder( 34, 34, "savannah", -20, 524);
            outlineBuilder( 5, 5, "savannahDirt", -20, 533);
        }
        //Layer -15 (temperate region): elev -1
        //mapS15
        if (Y > -156924 && Y < -146147 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s15";
            outlineBuilder( 34, 34, "greenGrass", -20, 490);
        }
        //Layer -14 (temperate region): elev -1
        //mapS14
        if (Y > -146711 && Y < -135937 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s14";
            outlineBuilder( 34, 34, "greenGrass", -20, 456);
        }
        //Layer -13 (temperate region): elev -1
        //mapS13
        if (Y > -136522 && Y < -125745 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s13";
            outlineBuilder( 34, 34, "greenGrass", -20, 422);
        }
        //Layer -12 (temperate region): elev -1
        //mapS12
        if (Y > -126325 && Y < -115546 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s12";
            outlineBuilder( 34, 34, "greenGrass", -20, 388);
        }
        //Layer -11 (temperate region): elev -1
        //mapS11
        if (Y > -116103 && Y < -105338 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s11";
            outlineBuilder( 34, 34, "greenGrass", -20, 354);
        }
        //Layer -10 (temperate region): elev -1
        //mapS10
        if (Y > -105953 && Y < -95142 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s10";
            outlineBuilder( 34, 34, "greenGrass", -20, 320);
        }
        //Layer -9 (temperate region): elev -1
        //mapS9
        if (Y > -95730 && Y < -84938 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s9";
            outlineBuilder( 34, 34, "greenGrass", -20, 286);
        }
        //Layer -8 (temperate region): elev -1
        //mapS8
        if (Y > -85605 && Y < -74729 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s8";
            outlineBuilder( 34, 34, "greenGrass", -20, 252);
        }
        //Layer -7 (cold region): elev 0
        //mapS7
        if (Y > -75331 && Y < -64538 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s7";
            outlineBuilder( 34, 34, "greenGrass", -20, 218);
        }
        //Layer -6 (cold region): elev 0
        //mapS6
        if (Y > -65106 && Y < -54332 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s6";
            outlineBuilder( 34, 34, "greenGrass", -20, 184);
        }
        //Layer -5 (cold region): elev 0
        //mapS5
        if (Y > -54904 && Y < -44148 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s5";
            outlineBuilder( 34, 34, "greenGrass", -20, 150);
        }
        //Layer -4 (cold region): elev 0
        //mapS4
        if (Y > -44704 && Y < -33915 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s4";
            outlineBuilder( 34, 34, "greenGrass", -20, 116);
        }
        //Layer -3 (cold region): elev 0
        //mapS3 //Calcutt (town)
        if (Y > -34556 && Y < -23654 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s3";
            outlineBuilder( 34, 34, "greenGrass", -20, 82);
            outlineBuilder( 34, 1, "stonePath", 3, 82);
            outlineBuilder( 4, 4, "thatch", 4, 103);
            outlineBuilder( 1, 1, "farmland", 8, 104);
        }
        //mapS3 E1
        if (Y > -34556 && Y < -23654 && X < - 2490 && X > -14114) //X1
        {
            elevation = 0;
            region = "s3e1";
            outlineBuilder( 4, 34, "greenGrass", 14, 82);
            outlineBuilder( 30, 4, "muckgrass", 44, 86);
            outlineBuilder( 30, 6, "greenGrass", 14, 86);
            outlineBuilder( 4, 1, "greenGrass", 20, 93);
            outlineBuilder( 2, 2, "greenGrass", 20, 97);
            //outlineBuilder( 34, 1, "forest", 14, 82);
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
        //Layer -2 (cold region): elev 0
        //mapS2
        if (Y > -24704 && Y < -13476 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
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
        //Layer -1 (cold region): elev 0
        //mapS1E1 //TODO make the map
        if (Y > -14144 && Y < -3328 && X < - 2490 && X > -14114) //X1
        {
            elevation = 0;
            region = "s1e1";
            outlineBuilder( 34, 34, "outline", 14, 14);
            outlineBuilder( 1, 22, "forest", 26, 14);
            outlineBuilder( 1, 20, "forest", 28, 15);
            outlineBuilder( 1, 13, "forest", 35, 16);
            outlineBuilder( 1, 9, "forest", 39, 17);
            outlineBuilder( 1, 7, "forest", 41, 18);
            outlineBuilder( 1, 4, "forest", 44, 19);
        }
        // mapS1
        if (Y > -14144 && Y < -3328 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s1";
            outlineBuilder( 34, 34, "greenGrass", -20, 14);
            outlineBuilder( 34, 1, "stonePath", -4, 14);
            //outlineBuilder( 1, 1, "forest", -4, 14);
        }
        //mapS1W4
        if (Y > -14144 && Y < -3328 && X < 48510 && X > 36883) //X-4
        {
            elevation = 0;
            region = "s1w4";
            outlineBuilder( 34, 34, "crag", -156, 14);
            //outlineBuilder( 1, 34, "greenGrass", -156, 14);
        }
        //mapS1W5 //Lethik City
        if (Y > -14144 && Y < -3328 && X < 58680 && X > 47082) //X-5
        {
            elevation = 0;
            region = "s1w5";

            outlineBuilder( 34, 34, "hotGrass", -190, 14);
            outlineBuilder( 8, 5, "thenganBrick", -170, 27);
            outlineBuilder( 3, 8, "thenganBrick", -174, 24);
            outlineBuilder( 1, 2, "brickRoad", -169, 32); //
            outlineBuilder( 8, 1, "brickRoad", -170, 27);
            outlineBuilder( 4, 1, "brickRoad", -175, 24);
            outlineBuilder( 1, 4, "brickRoad", -174, 27);
            outlineBuilder( 1, 4, "brickRoad", -170, 27);
            outlineBuilder( 1, 10, "brickRoad", -175, 23);
            outlineBuilder( 11, 1, "brickRoad", -166, 24);
            outlineBuilder( 1, 5, "brickRoad", -170, 35);
            outlineBuilder( 1, 25, "brickRoad", -190, 30);
            outlineBuilder( 24, 5, "crag", -161, 20);
            outlineBuilder( 4, 4, "crag", -160, 44);
            outlineBuilder( 5, 3, "crag", -159, 15);
            outlineBuilder( 1, 2, "crag", -158, 14);
            outlineBuilder( 2, 1, "crag", -160, 16);
            outlineBuilder( 13, 2, "crag", -163, 25);
            outlineBuilder( 4, 1, "crag", -162, 38);
            outlineBuilder( 1, 1, "crag", -161, 47);
            if (uniqueChars.vsevolodLDS)
            {
                outlineBuilder( 1, 2, "desert", -175, 22);
            }
            else
            {
                outlineBuilder( 1, 2, "farmland", -175, 22);
            }
            outlineBuilder( 2, 1, "farmland", -176, 26);
            //outlineBuilder( 1, 34, "greenGrass", -190, 14);
        }
        //mapS1W6
        if (Y > -14144 && Y < -3328 && X < 68925 && X > 57283) //X-6
        {
            elevation = 0;
            region = "s1w6";
            outlineBuilder( 34, 29, "woods", -224, 14);
            outlineBuilder( 34, 5, "hotGrass", -195, 14);
            outlineBuilder( 1, 1, "hotGrass", -196, 14);
            outlineBuilder( 6, 1, "hotGrass", -196, 21);
            outlineBuilder( 4, 2, "hotGrass", -197, 26);
            outlineBuilder( 1, 1, "hotGrass", -198, 27);
            outlineBuilder( 2, 1, "hotGrass", -196, 30);
            outlineBuilder( 5, 2, "hotGrass", -197, 36);
            outlineBuilder( 2, 1, "hotGrass", -196, 34);
            outlineBuilder( 2, 1, "hotGrass", -197, 24);
            outlineBuilder( 1, 1, "hotGrass", -196, 43);
            outlineBuilder( 1, 14, "brickRoad", -204, 30);
            outlineBuilder( 5, 1, "brickRoad", -205, 30);
            outlineBuilder( 1, 20, "brickRoad", -224, 35);
        }
        //Layer 0 (cold region): elev 0
        //mapE2
        if (Y > -3919 && Y < 6870 && X < -12685 && X > -24362) //X2
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
        // mapCentral //Teshir City
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
            outlineBuilder( 1, 2, "stonePath", -5, -4);
            outlineBuilder( 1, 1, "stonePath", -3, -2);
            outlineBuilder( 3, 1, "stonePath", 4, -3);
            outlineBuilder( 1, 1, "stoneWork", 4, 0);
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
            outlineBuilder( 1, 14, "stonePath", -34, -7);
            outlineBuilder( 1, 1, "brokenStonePath", -35, -7);
            outlineBuilder( 13, 1, "greenGrass", -21, 1);
            outlineBuilder( 10, 1, "greenGrass", -22, 3);
            outlineBuilder( 7, 1, "greenGrass", -23, 6);
            outlineBuilder( 1, 1, "greenGrass", -24, 9);
            outlineBuilder( 2, 2, "greenGrass", -25, 10);
            outlineBuilder( 4, 2, "greenGrass", -22, -11);
            outlineBuilder( 3, 1, "greenGrass", -23, -11);
            outlineBuilder( 4, 1, "greenGrass", -21, -17);

        }
        //mapW2 //TODO make the map
        if (Y > -3919 && Y < 6870 && X < 28129 && X > 16474) //X-2
        {
            elevation = 0;
            region = "w2";

            outlineBuilder( 34, 34, "crag", -88, -20);
            //outlineBuilder( 34, 1, "greenGrass", -55, -20);

        }
        //mapW3
        if (Y > -3919 && Y < 6870 && X < 38616 && X > 26689) //X-3
        {
            elevation = 0;
            region = "w3";

            outlineBuilder( 34, 34, "crag", -122, -20);
            //outlineBuilder( 34, 1, "greenGrass", -89, -20);

        }
        //mapW4
        if (Y > -3919 && Y < 6870 && X < 48510 && X > 36883) //X-4
        {
            elevation = 0;
            region = "w4";

            outlineBuilder( 34, 34, "crag", -156, -20);
            //outlineBuilder( 34, 1, "greenGrass", -123, -20);

        }
        //mapW5
        if (Y > -3919 && Y < 6870 && X < 58680 && X > 47082) //X-5
        {
            elevation = 0;
            region = "w5";

            outlineBuilder( 34, 34, "dirt", -190, -20);
            outlineBuilder( 6, 34, "hotGrass", -190, 8);
            outlineBuilder( 1, 13, "hotGrass", -180, 7);
            outlineBuilder( 2, 6, "hotGrass", -190, 6);
            outlineBuilder( 1, 2, "hotGrass", -184, 7);
            outlineBuilder( 1, 3, "hotGrass", -189, 5);
            outlineBuilder( 1, 5, "hotGrass", -163, 7);
            outlineBuilder( 1, 4, "hotGrass", -173, 6);
            outlineBuilder( 8, 1, "crag", -157, -3);
            outlineBuilder( 3, 1, "crag", -158, 1);
            outlineBuilder( 5, 1, "crag", -157, -18);
            outlineBuilder( 1, 1, "crag", -158, -15);
            outlineBuilder( 2, 1, "crag", -157, -20);
            //outlineBuilder( 34, 1, "greenGrass", -157, -20);

        }
        //layer 1 (frosty region): elev 1
        //mapN1 //TODO remake this map
        if (Y > 6290 && Y < 17073) //X0
        {
            elevation = 1;
            region = "n1";
            //outlineBuilder( 20, 83, "frost", -80, -40); //frost
            //outlineBuilder( 80, 83, "snow", -80, -105); //snow
            outlineBuilder(34, 34, "frost", -20, -54);
            outlineBuilder(2, 7, "greenGrass", -5, -22);
            outlineBuilder(1, 5, "greenGrass", 1, -21);
            outlineBuilder(1, 1, "greenGrass", 4, -22);
            outlineBuilder(1, 2, "greenGrass", -1, -23);
            outlineBuilder(1, 6, "greenGrass", -14, -21);
            outlineBuilder(1, 3, "greenGrass", -13, -22);
            outlineBuilder(2, 2, "greenGrass", -19, -22);
            outlineBuilder(1, 1, "greenGrass", -18, -23);
            outlineBuilder(1, 5, "greenGrass", -20, -21);
            outlineBuilder(1, 5, "greenGrass", 9, -21);
            outlineBuilder(1, 2, "greenGrass", 10, -22);
            outlineBuilder(34, 1, "stonePath", -3, -54);
        }
        //layer 2 (frosty region): elev 1
        //mapN2
        if (Y > 16445 && Y < 27296) //X0
        {
            elevation = 1;
            region = "n2";
            outlineBuilder(34, 34, "frost", -20, -88);
            outlineBuilder(34, 1, "stonePath", -3, -88);
        }
        //layer 3 (frosty region): elev 1
        //mapN3
        if (Y > 26650 && Y < 37456) //X0
        {
            elevation = 1;
            region = "n3";
            outlineBuilder(34, 34, "frost", -20, -122);
            outlineBuilder(34, 1, "stonePath", -3, -122);
        }
        //layer 4 (frosty region): elev 1
        //mapN4W1
        if (Y > 36878 && Y < 47662 && X < 17903 && X > 6294) //North Coast//X-1
        {
            elevation = 1;
            region = "n4w1";
            //outlineBuilder(34, 34, "outline", -54, -156);
            outlineBuilder(16, 34, "frost", -54, -138);
            outlineBuilder(14, 34, "greySand", -54, -152); //11 tiles thick of sand
            outlineBuilder(1, 25, "frost", -45, -139);
            outlineBuilder(2, 17, "frost", -37, -141);
            outlineBuilder(1, 5, "frost", -31, -142);
            outlineBuilder(1, 2, "frost", -29, -143);
            outlineBuilder(1, 1, "frost", -29, -144);

            outlineBuilder(1, 1, "seaCornerBL", -21, -152);
            outlineBuilder(1, 34, "shallow", -54, -153);
            outlineBuilder(3, 34, "sea", -54, -156);

        }
        //mapN4 (frosty region): elev 1
        if (Y > 36878 && Y < 47662 && X < 7726 && X > -3910) //North Coast//X0
        {
            elevation = 1;
            region = "n4";
            outlineBuilder(18, 34, "frost", -20, -140); //-156 is the top of the map //18 tiles thick of snow

            outlineBuilder(12, 34, "greySand", -20, -152); //11 tiles thick of sand
            outlineBuilder(4, 34, "sea", -20, -156); //4 tiles thick of sea
            outlineBuilder(1, 1, "seaCornerBL", -17, -151);
            outlineBuilder(1, 4, "sea", -16, -153);
            outlineBuilder(1, 3, "sea", -15, -152);
            outlineBuilder(1, 1, "shallow", -16, -152);
            outlineBuilder(1, 4, "shallow", -16, -151);
            outlineBuilder(1, 4, "shallow", -20, -152);
            outlineBuilder(1, 1, "sea", -12, -152);
            outlineBuilder(1, 1, "seaCornerBR", -11, -152);
            outlineBuilder(1, 1, "seaCornerBR", -12, -151);
            outlineBuilder(1, 24, "shallow", -10, -153);
            outlineBuilder(1, 1, "seaCornerBL", -3, -152);
            outlineBuilder(1, 2, "shallow", -2, -152);
            outlineBuilder(1, 1, "seaCornerBR", 0, -152);

            outlineBuilder(1, 20, "frost", -16, -141);
            outlineBuilder(1, 3, "frost", -9, -142);
            outlineBuilder(1, 6, "frost", -17, -142);
            outlineBuilder(2, 5, "frost", 9, -142);
            outlineBuilder(1, 1, "frost", 12, -143);
            outlineBuilder(1, 2, "frost", 6, -141);
            outlineBuilder(1, 2, "frost", -14, -143);
            outlineBuilder(3, 1, "frost", -20, -143);

            outlineBuilder(8, 1, "stonePath", -1, -132);
            outlineBuilder(1, 1, "stonePath", -3, -123);
            outlineBuilder(1, 3, "stonePath", -3, -124);
            outlineBuilder(1, 14, "stonePath", 0, -132);
        }
        //mapN4E1
        if (Y > 36878 && Y < 47662 && X < -2423 && X > -14153) //North Coast//X1
        {
            elevation = 1;
            region = "n4e1";
            //outlineBuilder(34, 34, "outline", 14, -156);
            outlineBuilder(6, 8, "greySand", 14, -150);
            outlineBuilder(2, 2, "greySand", 14, -152);
            outlineBuilder(3, 3, "greySand", 19, -153);

            outlineBuilder(22, 8, "frost", 14, -144);
            outlineBuilder(1, 2, "frost", 19, -145);

            outlineBuilder(17, 20, "greySand", 22, -153);
            outlineBuilder(12, 6, "greySand", 42, -151);

            outlineBuilder(14, 20, "frost", 22, -136);
            outlineBuilder(5, 2, "frost", 22, -141);
            outlineBuilder(3, 1, "frost", 24, -142);
            outlineBuilder(1, 3, "frost", 24, -137);
            outlineBuilder(1, 5, "frost", 34, -138);
            outlineBuilder(1, 8, "frost", 32, -137);
            outlineBuilder(1, 2, "frost", 35, -139);
            outlineBuilder(2, 1, "frost", 39, -140);
            outlineBuilder(1, 1, "frost", 38, -139);
            outlineBuilder(1, 1, "frost", 41, -137);

            outlineBuilder(17, 6, "frost", 42, -139);

            outlineBuilder(1, 1, "shallow", 14, -153);
            outlineBuilder(1, 1, "seaCornerBL", 14, -152);
            outlineBuilder(1, 1, "shallow", 15, -152);
            outlineBuilder(1, 1, "seaCornerBL", 15, -151);
            outlineBuilder(1, 3, "shallow", 16, -151);
            outlineBuilder(1, 1, "shallow", 19, -152);
            outlineBuilder(1, 1, "seaCornerBR", 19, -151);
            outlineBuilder(1, 1, "shallow", 20, -153);
            outlineBuilder(1, 1, "seaCornerBR", 20, -152);
            outlineBuilder(1, 21, "shallow", 21, -154);
            outlineBuilder(1, 1, "seaCornerBR", 21, -153);
            outlineBuilder(2, 34, "sea", 14, -156);
            outlineBuilder(1, 7, "sea", 14, -154);
            outlineBuilder(1, 5, "sea", 15, -153);
            outlineBuilder(1, 3, "sea", 16, -152);
            outlineBuilder(1, 1, "shallow", 42, -154);
            outlineBuilder(1, 1, "greySand", 42, -153);
            outlineBuilder(1, 3, "greySand", 42, -152);
            outlineBuilder(1, 1, "seaCornerBL", 42, -153);
            outlineBuilder(1, 5, "sea", 43, -154);
            outlineBuilder(1, 1, "shallow", 43, -153);
            outlineBuilder(1, 4, "sea", 44, -153);
            outlineBuilder(1, 1, "seaCornerBL", 44, -152);
            outlineBuilder(1, 3, "shallow", 45, -152);

            outlineBuilder(4, 1, "stonePath", 14, -135);
            outlineBuilder(1, 33, "stonePath", 15, -135);
        }
        //mapN4E2
        if (Y > 36878 && Y < 47662 && X < -12680 && X > -24308) //North Coast//X2
        {
            elevation = 1;
            region = "n4e2";
            //outlineBuilder(34, 34, "outline", 48, -156);
            outlineBuilder(15, 34, "frost", 48, -137);
            outlineBuilder(1, 7, "greySand", 59, -137);
            outlineBuilder(1, 4, "greySand", 64, -136);
            outlineBuilder(13, 34, "greySand", 48, -150);
            outlineBuilder(1, 2, "frost", 48, -138);
            outlineBuilder(1, 1, "frost", 66, -138);

            outlineBuilder(2, 21, "stoneWork", 56, -145);
            outlineBuilder(1, 21, "stoneWork", 56, -143);

            outlineBuilder(3, 18, "stoneWork", 51, -149);
            outlineBuilder(1, 16, "stonePath", 51, -149);
            outlineBuilder(7, 1, "stoneWork", 56, -148);
            outlineBuilder(8, 1, "stonePath", 55, -149);
            outlineBuilder(2, 1, "stonePath", 54, -146);
            outlineBuilder(4, 1, "stoneWork", 53, -146);
            outlineBuilder(2, 1, "stoneWork", 54, -144);
            outlineBuilder(1, 2, "stonePath", 52, -146);

            outlineBuilder(1, 6, "stonePath", 48, -135);
            outlineBuilder(7, 1, "stonePath", 53, -142);
            outlineBuilder(1, 1, "stonePath", 54, -142);

            outlineBuilder(7, 3, "stoneWork", 70, -144);
            outlineBuilder(1, 20, "stonePath", 56, -144);
            outlineBuilder(5, 1, "stonePath", 71, -144);
            outlineBuilder(2, 2, "farmland", 77, -133);

            outlineBuilder(1, 33, "sea", 49, -152);
            outlineBuilder(1, 29, "shallow", 49, -151);
            outlineBuilder(1, 1, "shallow", 48, -152);
            outlineBuilder(1, 1, "greySand", 48, -151);
            outlineBuilder(1, 1, "seaCornerBL", 48, -151);
            outlineBuilder(4, 34, "sea", 48, -156);
            outlineBuilder(1, 1, "seaCornerBL", 77, -150);
            outlineBuilder(1, 4, "sea", 78, -151);
            outlineBuilder(1, 2, "shallow", 78, -150);
            outlineBuilder(1, 2, "sea", 80, -150);
            outlineBuilder(1, 1, "seaCornerBL", 79, -149);
            outlineBuilder(1, 2, "shallow", 80, -149);
            outlineBuilder(1, 1, "seaCornerBL", 81, -148);

            outlineBuilder(6, 1, "dockV", 53, -155);
            outlineBuilder(6, 1, "dockV", 57, -155);
            outlineBuilder(6, 1, "dockV", 61, -155);
            outlineBuilder(6, 1, "dockV", 65, -155);
        }
        //mapN4E3
        if (Y > 36878 && Y < 47662 && X < -22859 && X > -34534) //North Coast//X3
        {
            elevation = 1;
            region = "n4e3";
            //outlineBuilder(34, 34, "outline", 82, -156);

            outlineBuilder(15, 18, "frost", 82, -137); //frost
            outlineBuilder(11, 4, "greySand", 82, -147); //greySand
            outlineBuilder(1, 2, "greySand", 86, -146); //greySand
            outlineBuilder(10, 4, "greySand", 86, -145); //greySand
            outlineBuilder(1, 1, "greySand", 90, -144); //greySand
            outlineBuilder(6, 5, "greySand", 90, -143); //greySand
            outlineBuilder(2, 1, "searock", 94, -140); //searock
            outlineBuilder(4, 2, "searock", 93, -138); //searock
            outlineBuilder(3, 2, "searock", 97, -133); //searock
            outlineBuilder(1, 1, "searock", 98, -130); //searock
            outlineBuilder(3, 1, "searock", 98, -125); //searock
            outlineBuilder(1, 1, "searock", 95, -142); //searock
            outlineBuilder(8, 4, "searock", 95, -141); //searock
            outlineBuilder(18, 3, "searock", 99, -140); //searock
            outlineBuilder(15, 3, "searock", 102, -137); //searock
            outlineBuilder(2, 1, "searock", 102, -139); //searock
            outlineBuilder(13, 3, "searock", 105, -135); //searock
            outlineBuilder(9, 2, "searock", 108, -131); //searock
            outlineBuilder(6, 1, "searock", 110, -128); //searock
            outlineBuilder(2, 1, "searock", 111, -124); //searock

            outlineBuilder(1, 1, "shallow", 105, -130); //searock
            outlineBuilder(1, 2, "shallow", 102, -132); //searock
            outlineBuilder(1, 1, "shallow", 103, -135); //searock
            outlineBuilder(1, 1, "shallow", 100, -127); //searock

            outlineBuilder(8, 34, "sea", 82, -156);
            outlineBuilder(1, 4, "shallow", 82, -148);
            outlineBuilder(1, 1, "seaCornerBL", 85, -147);
            outlineBuilder(1, 3, "shallow", 86, -147);
            outlineBuilder(1, 1, "seaCornerBL", 87, -146);
            outlineBuilder(1, 3, "shallow", 88, -146);
            outlineBuilder(1, 1, "seaCornerBL", 89, -145);
            outlineBuilder(1, 1, "shallow", 90, -145);
            outlineBuilder(1, 1, "seaCornerBL", 90, -144);
            outlineBuilder(1, 4, "shallow", 91, -144);
            outlineBuilder(1, 1, "seaCornerBL", 94, -143);
            outlineBuilder(1, 1, "seaCornerBL", 95, -142);
            outlineBuilder(1, 3, "sea", 96, -142);
            outlineBuilder(1, 1, "seaCornerBL", 98, -141);
            outlineBuilder(1, 3, "sea", 99, -141);
            outlineBuilder(1, 1, "seaCornerBL", 101, -140);
            outlineBuilder(1, 1, "seaCornerBL", 102, -139);
            outlineBuilder(1, 1, "sea", 103, -139);
            outlineBuilder(1, 2, "sea", 103, -138);
            outlineBuilder(1, 1, "seaCornerBL", 104, -137);
            outlineBuilder(1, 3, "sea", 105, -136);
            outlineBuilder(1, 1, "seaCornerBL", 107, -135);
            outlineBuilder(1, 1, "seaCornerBL", 109, -131);
            outlineBuilder(1, 1, "seaCornerBL", 110, -128);
            outlineBuilder(1, 1, "seaCornerBL", 111, -124);

            outlineBuilder(1, 31, "sea", 85, -148);
            outlineBuilder(1, 27, "sea", 89, -147);
            outlineBuilder(1, 25, "sea", 91, -146);
            outlineBuilder(1, 25, "sea", 91, -145);
            outlineBuilder(2, 24, "sea", 92, -144);
            outlineBuilder(1, 19, "sea", 97, -142);
            outlineBuilder(2, 14, "sea", 102, -141);
            outlineBuilder(1, 12, "sea", 104, -139);
            outlineBuilder(2, 11, "sea", 105, -138);
            outlineBuilder(5, 8, "sea", 108, -136);
            outlineBuilder(3, 6, "sea", 110, -131);
            outlineBuilder(4, 5, "sea", 111, -128);
            outlineBuilder(2, 4, "sea", 112, -124);
        }
        //layer 5 (frosty region): elev 1
        //mapN5W1
        if (Y > 47071 && Y < 57864 && X < 17903 && X > 6294)//North Sea//X-1
        {
            elevation = 1;
            region = "n5w1";
            //outlineBuilder(34, 34, "outline", -54, -190);
            outlineBuilder(5, 34, "sea", -54, -190);
            outlineBuilder(19, 11, "sea", -31, -185);
            outlineBuilder(13, 2, "sea", -54, -185);
            outlineBuilder(6, 10, "sea", -54, -172);
            outlineBuilder(10, 34, "sea", -54, -166);
            outlineBuilder(1, 1, "sea", -35, -185);
            outlineBuilder(2, 1, "sea", -34, -185);
            outlineBuilder(6, 1, "sea", -33, -185);
            outlineBuilder(9, 1, "sea", -32, -185);
            outlineBuilder(1, 3, "sea", -52, -185);
            outlineBuilder(2, 2, "sea", -52, -184);
            outlineBuilder(1, 1, "sea", -52, -182);
            outlineBuilder(1, 1, "sea", -52, -173);
            outlineBuilder(4, 2, "sea", -44, -170);
            outlineBuilder(2, 1, "sea", -32, -168);

            outlineBuilder(11, 13, "greySand", -49, -184);
            outlineBuilder(8, 10, "greySand", -42, -176);
            outlineBuilder(8, 2, "greySand", -51, -182);
            outlineBuilder(1, 1, "greySand", -50, -183);
            outlineBuilder(1, 1, "greySand", -50, -174);
            outlineBuilder(3, 3, "greySand", -44, -173);
            outlineBuilder(1, 1, "greySand", -45, -173);
            outlineBuilder(1, 1, "greySand", -42, -170);
            outlineBuilder(3, 3, "greySand", -36, -179);
            outlineBuilder(3, 2, "greySand", -36, -182);
            outlineBuilder(1, 1, "greySand", -36, -183);
            outlineBuilder(1, 8, "greySand", -47, -185);
            outlineBuilder(1, 7, "greySand", -41, -168);

            outlineBuilder(1, 3, "frost", -41, -183);
            outlineBuilder(1, 3, "frost", -42, -182);
            outlineBuilder(6, 8, "frost", -46, -181);
            outlineBuilder(4, 5, "frost", -40, -175);
            outlineBuilder(1, 3, "frost", -39, -171);
            outlineBuilder(1, 1, "frost", -39, -170);
            outlineBuilder(3, 1, "frost", -47, -179);
            outlineBuilder(2, 2, "frost", -42, -175);
            outlineBuilder(1, 2, "frost", -44, -175);
            outlineBuilder(3, 1, "frost", -38, -178);
            outlineBuilder(1, 1, "frost", -37, -176);
            outlineBuilder(2, 1, "frost", -35, -173);

            outlineBuilder(1, 1, "seaCornerBR", -49, -184);
            outlineBuilder(2, 1, "shallow", -50, -184);
            outlineBuilder(1, 1, "seaCornerBR", -50, -182);
            outlineBuilder(1, 1, "shallow", -51, -182);
            outlineBuilder(1, 1, "seaCornerBR", -51, -181);
            outlineBuilder(8, 1, "shallow", -52, -181);
            outlineBuilder(1, 1, "seaCornerTR", -51, -175);
            outlineBuilder(1, 1, "shallow", -51, -174);
            outlineBuilder(1, 1, "seaCornerTR", -50, -174);
            outlineBuilder(1, 7, "shallow", -51, -173);
            outlineBuilder(1, 1, "seaCornerTR", -44, -173);
            outlineBuilder(1, 1, "shallow", -44, -172);
            outlineBuilder(1, 1, "shallow", -44, -171);
            outlineBuilder(1, 1, "shallow", -43, -171);
            outlineBuilder(1, 1, "seaCornerTR", -42, -171);
            outlineBuilder(3, 1, "shallow", -42, -170);
            outlineBuilder(1, 10, "shallow", -42, -167);
            outlineBuilder(1, 1, "seaCornerTR", -41, -168);
            outlineBuilder(1, 1, "seaCornerTL", -35, -168);
            outlineBuilder(1, 1, "seaCornerTL", -33, -169);
            outlineBuilder(1, 1, "shallow", -34, -168);
            outlineBuilder(1, 1, "sea", -33, -168);
            outlineBuilder(8, 1, "shallow", -32, -176);
            outlineBuilder(1, 1, "seaCornerBL", -33, -176);
            outlineBuilder(3, 1, "shallow", -33, -179);
            outlineBuilder(1, 1, "seaCornerBL", -34, -179);
            outlineBuilder(4, 1, "shallow", -34, -183);
            outlineBuilder(1, 1, "seaCornerBL", -35, -182);
            outlineBuilder(1, 1, "shallow", -35, -183);
            outlineBuilder(1, 1, "seaCornerBL", -36, -183);
            outlineBuilder(2, 1, "shallow", -36, -185);
            outlineBuilder(1, 1, "shallow", -35, -184);
            outlineBuilder(1, 13, "shallow", -49, -185);
            outlineBuilder(1, 1, "seaCornerBL", -37, -184);
        }
        //mapN5
        if (Y > 47071 && Y < 57864 && X < 7726 && X > -3910)//North Sea//X0
        {
            elevation = 1;
            region = "n5";
            outlineBuilder(34, 34, "sea", -20, -190);
        }
        //mapN5E1
        if (Y > 47071 && Y < 57864 && X < -2423 && X > -14153)//North Sea//X1
        {
            elevation = 1;
            region = "n5e1";
            outlineBuilder(34, 34, "sea", 14, -190);
        }
        //mapN5E2
        if (Y > 47071 && Y < 57864 && X < -2423 && X < -12680)//North Sea//X2
        {
            elevation = 1;
            region = "n5e2";
            outlineBuilder(34, 34, "sea", 48, -190);
        }
        //mapN5E3
        if (Y > 47071 && Y < 57864 && X < -22859 && X > -34534)//North Sea//X3
        {
            elevation = 1;
            region = "n5e3";
            outlineBuilder(34, 34, "sea", 82, -190);
        }
    } //ALTERNATE DIMENSIONS
    else if (map == "sagesCache") //This is a dungeon found in map W3
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "sagesCache";
        //starting chamber
        outlineBuilder( 2, 2, "dungeon", 0, 0);
        //north chamber
        outlineBuilder( 7, 1, "dungeon", 1, -7);
        outlineBuilder( 3, 3, "dungeon", 0, -10);
        outlineBuilder( 1, 6, "dungeon", -6, -8);
        //west chamber
        outlineBuilder( 5, 2, "dungeon", -8, -9);
        outlineBuilder( 7, 1, "dungeon", -7, -16);
        outlineBuilder( 1, 10, "dungeon", -6, -13);
        //mid chamber
        outlineBuilder( 4, 3, "dungeon", 4, -15);
        outlineBuilder( 1, 3, "dungeon", 7, -14);
        outlineBuilder( 1, 9, "dungeon", 9, -13);
        outlineBuilder( 3, 1, "dungeon", 17, -12);
        //grand east chamber
        outlineBuilder( 3, 6, "dungeon", 15, -11);
        outlineBuilder( 1, 2, "dungeon", 21, -10);
        outlineBuilder( 3, 3, "dungeon", 23, -11);
        outlineBuilder( 1, 4, "dungeon", -7, -17);
        outlineBuilder( 2, 1, "dungeon", -4, -19);
        outlineBuilder( 2, 3, "dungeon", -5, -21);
        //dead-end west
        outlineBuilder( 1, 7, "dungeon", -14, -15);
        outlineBuilder( 5, 1, "dungeon", -14, -14);
        //east chamber
        outlineBuilder( 1, 7, "dungeon", 2, -4);
        outlineBuilder( 1, 1, "dungeon", 8, -3);
        outlineBuilder( 3, 2, "dungeon", 7, -2);
        outlineBuilder( 10, 1, "dungeon", 9, -13);
    }
    else if (map == "lethikCityPrison") //This is a dungeon found in map W3
    {
        player.dmx = map;
        player.underground = false;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "lethikCityPrison";
        //starting chamber
        outlineBuilder( 2, 4, "dungeon", 0, 0);
    }
    else if (map == "venningCityPrison") //This is a dungeon found in map W3
    {
        player.dmx = map;
        player.underground = false;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "venningCityPrison";
        //starting chamber
        outlineBuilder( 2, 2, "dungeon", 0, 0);
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
                    //still check for terrain types that send out special signals to the player and units that are over it
                    if (terrain == "sea")
                    {
                        over("sea", j, i, extraX, extraY);
                    }
                    else if (terrain == "shallow" || terrain == "dockV" || terrain == "dockH" || terrain == "seaCornerBR" || terrain == "seaCornerBL" || terrain == "seaCornerTR" || terrain == "seaCornerTL")
                    {
                        over("landing", j, i, extraX, extraY);
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
                else if (terrain == "thenganBrick")
                {
                    XXX.drawImage(thenganBrickEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "brickRoad")
                {
                    XXX.drawImage(brickRoadEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "kellstone")
                {
                    XXX.drawImage(kellStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "thatch")
                {
                    XXX.drawImage(thatchEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
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
                else if (terrain == "brightGrass")
                {
                    XXX.drawImage(verdantGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "dungeon")
                {
                    XXX.drawImage(dungeonStoneEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "hotGrass")
                {
                    XXX.drawImage(greenGrassEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "jungle")
                {
                    XXX.drawImage(jungleEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "crag")
                {
                    XXX.drawImage(rockyFlatEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "dirt")
                {
                    XXX.drawImage(wormDirtEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "mudFlats")
                {
                    XXX.drawImage(dirtEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
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
                else if (terrain == "woods")
                {
                    XXX.drawImage(woodsEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "savannah")
                {
                    XXX.drawImage(savannahEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "savannahDirt")
                {
                    XXX.drawImage(savannahDirtEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "searock")
                {
                    XXX.drawImage(beachRock, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "greySand")
                {
                    XXX.drawImage(greySand, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "dockV")
                {
                    over("landing", j, i, extraX, extraY);
                    XXX.drawImage(dockV, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "dockH")
                {
                    over("landing", j, i, extraX, extraY);
                    XXX.drawImage(dockH, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "shallow")
                {
                    over("landing", j, i, extraX, extraY);
                    if (seaFlux < 35)
                    {
                        XXX.drawImage(sea, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else if (seaFlux < 70)
                    {
                        XXX.drawImage(sea, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(sea2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                    else if (seaFlux < 105)
                    {
                        XXX.drawImage(sea2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else
                    {
                        XXX.drawImage(sea2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(sea, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                }
                else if (terrain == "sea")
                {
                    over("sea", j, i, extraX, extraY);
                    if (seaFlux < 35)
                    {
                        XXX.drawImage(sea, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else if (seaFlux < 70)
                    {
                        XXX.drawImage(sea, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(sea2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                    else if (seaFlux < 105)
                    {
                        XXX.drawImage(sea2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else
                    {
                        XXX.drawImage(sea2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(sea, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                }
                else if (terrain == "seaCornerBR")
                {
                    over("landing", j, i, extraX, extraY);
                    if (seaFlux < 35)
                    {
                        XXX.drawImage(seaCornerBR, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else if (seaFlux < 70)
                    {
                        XXX.drawImage(seaCornerBR, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(seaCornerBR2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                    else if (seaFlux < 105)
                    {
                        XXX.drawImage(seaCornerBR2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else
                    {
                        XXX.drawImage(seaCornerBR2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(seaCornerBR, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                }
                else if (terrain == "seaCornerBL")
                {
                    over("landing", j, i, extraX, extraY);
                    if (seaFlux < 35)
                    {
                        XXX.drawImage(seaCornerBL, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else if (seaFlux < 70)
                    {
                        XXX.drawImage(seaCornerBL, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(seaCornerBL2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                    else if (seaFlux < 105)
                    {
                        XXX.drawImage(seaCornerBL2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else
                    {
                        XXX.drawImage(seaCornerBL2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(seaCornerBL, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                }
                else if (terrain == "seaCornerTL")
                {
                    over("landing", j, i, extraX, extraY);
                    if (seaFlux < 35)
                    {
                        XXX.drawImage(seaCornerTL, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else if (seaFlux < 70)
                    {
                        XXX.drawImage(seaCornerTL, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(seaCornerTL2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                    else if (seaFlux < 105)
                    {
                        XXX.drawImage(seaCornerTL2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else
                    {
                        XXX.drawImage(seaCornerTL2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(seaCornerTL, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                }
                else if (terrain == "seaCornerTR")
                {
                    over("landing", j, i, extraX, extraY);
                    if (seaFlux < 35)
                    {
                        XXX.drawImage(seaCornerTR, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else if (seaFlux < 70)
                    {
                        XXX.drawImage(seaCornerTR, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(seaCornerTR2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                    else if (seaFlux < 105)
                    {
                        XXX.drawImage(seaCornerTR2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else
                    {
                        XXX.drawImage(seaCornerTR2, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.save();
                        XXX.globalAlpha = 0.4;
                        XXX.drawImage(seaCornerTR, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                        XXX.restore();
                    }
                }
            }
        }
    }
}
