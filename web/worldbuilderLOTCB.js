/**
 * Created by skyeguy on 1/22/17.
 */
function worldBuilder()
{
    // THIS IS THE BACKGROUND BUILDER (height, width, type, x, y) // The tile coords 0, 0 are at the bottom right corner of Teshir City.
    //Different parts of the world load at different Y values. // maps are 34 by 34 tiles and for some reason the maps are -20 to the left. and + 14 down.
    //Each elevation zone extends 4 maps long: a different standard may apply at the extremes (such as very cold or very hot) Higher elevation is colder and lower is hotter.
    if (map == "world")
    {
        player.dmx = map;
        player.underground = false;
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
        //mapN4
        if (Y > 36878 && Y < 47662 && X < 7530 && X > -3910) //North Coast//X0
        {
            elevation = 1;
            region = "n4";
            outlineBuilder(18, 34, "frost", -20, -140); //-156 is the top of the map //18 tiles thick of of snow

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

            outlineBuilder(34, 1, "outline", 14, -156);

            outlineBuilder(4, 1, "stonePath", 14, -135);
            outlineBuilder(1, 33, "stonePath", 15, -135);
        }
        //mapN4E2
        if (Y > 36878 && Y < 47662 && X < -12680) //North Coast//X1
        {
            elevation = 1;
            region = "n4e2";
            outlineBuilder(34, 34, "outline", 48, -156);
            outlineBuilder(15, 34, "frost", 48, -137);
            outlineBuilder(1, 7, "greySand", 59, -137);
            outlineBuilder(1, 4, "greySand", 64, -136);
            outlineBuilder(13, 34, "greySand", 48, -150);
            outlineBuilder(1, 2, "frost", 48, -138);
            outlineBuilder(1, 1, "frost", 66, -138);

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
        //layer 5 (northern sea): elev 1
        //mapN5
        if (Y > 47071 && X < 7530 && X > -3910)//North Sea//X0
        {
            elevation = 1;
            region = "n5";
            outlineBuilder(34, 34, "sea", -20, -190);
        }
        //mapN5E1
        if (Y > 47071 && X < -2423 && X > -14153)//North Sea//X0
        {
            elevation = 1;
            region = "n5e1";
            outlineBuilder(34, 34, "sea", 14, -190);
        }
        //mapN5E2
        if (Y > 47071 && X < -2423 && X < -12680)//North Sea//X0
        {
            elevation = 1;
            region = "n5e2";
            outlineBuilder(34, 34, "sea", 48, -190);
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

function buildMaster()
{
    if (map == "world") //If the map is the main world map.
    {
        if (region == "central") //Y < 6870
        {
            if (change != "central")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

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

                ArtificialIntelligenceAccess.push(new Unit(1661, 2311, "Soldier", false, "Tor Captain", {race: "Freynor", faction: "Freynor", con: 9, speed: 1.15, outfit: ["chainArmour", 10], weapon: ["freydicGreatSword", [25, 14], 0, 35, 2.25], ranged: [false, "arrow", 7, 1800, 1, 6, 0, "stunI", 2.4], patrolStops: 4, patrolLoop: true, route:[[1654, 1507], [1661, 2311], [1864, 2315], [1852, 1499]]}));
                ArtificialIntelligenceAccess.push(new Unit(2254, 311, "Soldier", false, "Tor Soldier", {race: "Freynor", faction: "Freynor", con: 5, speed: 1.50, outfit: ["chainArmour", 7], weapon: ["freydicSword", [9, 7], 0, 16, 1], ranged: [false, "arrow", 5, 1500, 1, 3, 0, "none", 1.50], patrolStops: 3, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                ArtificialIntelligenceAccess.push(new Unit(2741, 1421, "Soldier", false, "Tor Soldier", {race: "Freynor", faction: "Freynor", con: 4, speed: 1.25, outfit: ["chainArmour", 9], weapon: ["freydicSword", [8, 6], 0, 16, 1], ranged: [false, "arrow", 7, 2000, 1, 6, 0, "none", 1.25], patrolStops: 4, patrolLoop: true, route:[[1833, 1424], [1848, 2413], [3046, 2407], [2741, 1421]]}));
                ArtificialIntelligenceAccess.push(new Unit(1430, 2238, "Soldier", false, "Tor Soldier", {race: "Freynor", faction: "Freynor", con: 8, speed: 1.1, outfit: ["chainArmour", 9], weapon: ["freydicSword", [7, 9], 0, 16, 1], ranged: [false, "arrow", 8, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[]}));
                ArtificialIntelligenceAccess.push(new Unit(1247, 1210, "Soldier", false, "Tor Soldier", {race: "Freynor", faction: "Freynor", con: 6, speed: 1.40, outfit: ["chainArmour", 8], weapon: ["freydicSword", [8, 9], 0, 16, 1], ranged: [false, "arrow", 6, 1950, 1, 4, 0, "none", 1.35], patrolStops: 6, patrolLoop: true, route:[[901, 1195], [969, 527], [1932, 549], [1941, 814], [1932, 549], [969, 527]]}));

                ArtificialIntelligenceAccess.push(new Unit(2360, 2341, "Person", false, "Freynor Villager", {race: "Freynor", faction: "Freynor", personality: "calculated", outfit: ["frichFurClothing", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 10, patrolLoop: true, route:[[2284, 2430], [1677, 2425], [1712, 1410], [1405, 1459], [1405, 1637], [1237, 1637], [1405, 1637], [1405, 1459], [1699, 1434], [1692, 2500]]}));
                ArtificialIntelligenceAccess.push(new Unit(2249, 754, "Person", false, "Freynor Villager", {race: "Freynor", faction: "Freynor", personality: "calculated", outfit: ["frichFurClothing", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 9, patrolLoop: true, route:[[2144, 751], [2154, 504], [2942, 536], [2884, 2455], [1655, 2430], [1663, 1165], [2152, 1141], [2181, 795], [2249, 754]]}));
                ArtificialIntelligenceAccess.push(new Unit(1807, 645, "Person", false, "Freynor Villager", {race: "Freynor", faction: "Freynor", personality: "calculated", outfit: ["frichFurClothing", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 7, patrolLoop: true, route:[[1793, 314], [761, 337], [749, 1431], [1663, 1439], [2138, 1272], [2165, 697], [1807, 645]]}));

                //The Jarl's Guards
                ArtificialIntelligenceAccess.push(new Unit(-95, 645, "Soldier", false, "Tor Huskarl", {race: "Freynor", faction: "Freynor", con: 16, speed: 1.55, outfit: ["chainArmour", 12], weapon: ["freydicSword", [11, 9], 0, 17, 1], ranged: [false, "arrow", 7, 2000, 1, 6, 0, "none", 1.25], rot: -1/2*Math.PI, patrolStops: 2, patrolLoop: true, route:[[-95, 645], [-95, 645]]}));
                ArtificialIntelligenceAccess.push(new Unit(-620, 645, "Soldier", false, "Tor Huskarl", {race: "Freynor", faction: "Freynor", con: 16, speed: 1.55, outfit: ["chainArmour", 12], weapon: ["freydicSword", [11, 9], 0, 17, 1], ranged: [false, "arrow", 7, 2000, 1, 6, 0, "none", 1.25], rot: -1/2*Math.PI, patrolStops: 2, patrolLoop: true, route:[[-620, 645], [-620, 645]]}));

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
                        ArtificialIntelligenceAccess.push(new Unit(1875, 243, "Person", false, "Drohfor", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["walrusLeatherArmour", 5], weapon: ["longbow", [0.1, 0.4], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [true, "arrow", 8, 2000, 1, 6, 0, "none", 0.95], patrolStops: 7, patrolLoop: true, route:[[1875, 243], [1600, -181], [987, -45], [384, -299], [1707, -151], [1420, -366], [1581, 21]]}));
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
                            ArtificialIntelligenceAccess.push(new Unit(1830, 2767, "Person", false, "Toggin", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["blackBearFurClothing", 0], weapon: ["timberAxe", [10, 4], 1.5, 12, 1.55], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 3, patrolLoop: true, route:[[1771, 2698], [1675, 2861], [1830, 2767]]}));
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
                        ArtificialIntelligenceAccess.push(new Unit(2287, 2065, "Person", false, "Kedwin", {race: "Freynor", faction: "Freynor", personality: "calculated", outfit: ["frichFurClothing", 0], weapon: ["none", [0.5, 1], 0, 0, 1.1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 1, patrolLoop: false, route:[[2287, 2065]]}));
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
                        ArtificialIntelligenceAccess.push(new Unit(2523, 1489, "Person", false, "Garld the Crazy Beggar", {race: "Freynor", faction: "Freynor", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.5, 1], 0, 0, 1.1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[2072, 1535], [1939, 1509], [2033, 1499]]}));
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
                        ArtificialIntelligenceAccess.push(new Unit(1205, 1635, "Person", false, "Odee the Banker", {race: "Orgell", faction: "Freynor", personality: "calculated", outfit: ["winterWolfClothing", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.85], ranged: [false, "arrow", 8, 2000, 1, 6, 0, "none", 0.95], patrolStops: 0, patrolLoop: false, route:[[2200, 1460]], banker: true}));
                    }
                }
                if (uniqueChars.stendorLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Tor Commissioner Stendor")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(1949, 2282, "Soldier", false, "Tor Commissioner Stendor", {race: "Freynor", faction: "Freynor", con: 12, speed: 1.32, outfit: ["chainArmour", 10], weapon: ["freydicGreatSword", [25, 14], 0, 35, 2.25], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], patrolStops: 0, patrolLoop: true, route:[[1654, 1507], [1661, 2311], [1864, 2315], [1852, 1499]]}));
                    }
                }
                if (uniqueChars.OrjovTorLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Jarl Orjov Tor")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-341, -24, "Soldier", false, "Jarl Orjov Tor", {race: "Freynor", faction: "Freynor", con: 40, speed: 0.6, outfit: ["jvostranPlateArmour", 42], weapon: ["freydicGreatSword", [37, 20], 0, 37, 5], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 2, patrolLoop: true, route:[[-341, -24], [-341, -24]]}));
                    }
                }
                if (uniqueChars.pynskeLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Ser Olis Pynske")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-514, 277, "Soldier", false, "Ser Olis Pynske", {race: "Freynor", faction: "Freynor", con: 20, speed: 0.55, outfit: ["jvostranPlateArmour", 37.5], weapon: ["freydicGreatSword", [25, 14], 0, 37, 5.5], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 2, patrolLoop: true, route:[[-514, 277], [-514, 277]]}));
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
                        ArtificialIntelligenceAccess.push(new Unit(1193, 777, "Person", false, "Laandeg the Alchemist", {race: "Freynor", faction: "Freynor", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 1.1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 1, patrolLoop: false, route:[[1193, 777]], merchant: true, merchandise: [[new Item("coins", false, false), 29], [new Item("culprisBandage", false, false), 2], [new Item("healingSalve", false, false), 4], [new Item("trollsBlood", false, false), 1], [new Item("rawTrollsBlood", false, false), 1], [new Item("cleansingPotion", false, false), 1], [new Item("energyPotionI", false, false), 3], [new Item("speedPotionI", false, false), 2], [new Item("energilPotionI", false, false), 2], [new Item("energilPotionII", false, false), 1], [new Item("mightPotionI", false, false), 3], [new Item("pouchOfGlowDust", false, false), 2], [new Item("pouchOfIrilDust", false, false), 2], [new Item("ogardPerfume", false, false), 8], [new Item("potionGlass", false, false), 18], [new Item("glassJar", false, false), 14], [new Item("rawWolfLiver", false, false), 4], [new Item("salt", false, false), 3]]}));
                    }
                }
                if (uniqueChars.hilmundChildLDS == true && quests.hilmundChild)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "[ " + quests.hilmundChildName + " ]")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(2346, 1788, "Person", false, "[ " + quests.hilmundChildName + " ]", {race: player.raceName, faction: "player", personality: "violent", outfit: ["frichFurClothing", 0], weapon: ["none", [0.2, 0.2], 0, 0, 1.2], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2164, 1656]], kid: true}));
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
                        ArtificialIntelligenceAccess.push(new Unit(2346, 1756, "Person", false, "Hilmund the Innkeeper", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["none", 0], weapon: ["none", [0.3, 0.7], 0, 0, 0.8], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2164, 1656]], merchant: true, merchandise: [[new Item("coins", false, false), 86 + quests.hilmundNewWealth], [new Item("harstAle", false, false), 64], [new Item("mead", false, false), 8], [new Item("santhAle", false, false), 5], [new Item("pluttWine", false, false), 19], [new Item("glassBottleOfPluttWine", false, false), 6], [new Item("pluttCiderPintGlass", false, false), 7], [new Item("waterPintGlass", false, false), 9], [new Item("bucketOfWater", false, false), 1], [new Item("walrusLeatherWaterskinFull", false, false), 11], [new Item("walrusMeat", false, false), 8], [new Item("bearMeat", false, false), 3], [new Item("winterWolfMeat", false, false), 5], [new Item("frichMeat", false, false), 17], [new Item("wolfLiver", false, false), 6], [new Item("harstBread", false, false), 1], [new Item("suuliMelonSlice", false, false), 14]]}));
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
                            ArtificialIntelligenceAccess.push(new Unit(1690, 1021, "Person", false, "Svehn the Smith", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.65], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 124 + quests.bobithNewWealth], [new Item("thriceForgedSteel", false, false), 1], [new Item("steel", false, false), 8], [new Item("iron", false, false), 6], [new Item("mace", false, false), 3], [new Item("hammer", false, false), 2], [new Item("freydicSpear", false, false), 5], [new Item("freydicSword", false, false), 2], [new Item("freydicWarAxe", false, false), 1], [new Item("freydicGreatSword", false, false), 1], [new Item("chainArmour", false, false), 2], [new Item("longbow", false, false), 2], [new Item("arrow", false, false), 92], [new Item("steelArrow", false, false), 61], [new Item("timberAxe", false, false), 3], [new Item("nirineseSpear", false, false), 1], [new Item("nirineseSabre", false, false), 1], [new Item("pickaxe", false, false), 1], [new Item("beartrap", false, false), 1], [new Item("clawtrap", false, false), 1], [new Item("jacks", false, false), 14]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(1690, 1021, "Person", false, "Svehn the Smith", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["none", 0], weapon: ["none", [0.1, 0.4], 0, 0, 0.65], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 103 + quests.bobithNewWealth], [new Item("steel", false, false), 8], [new Item("iron", false, false), 6], [new Item("mace", false, false), 3], [new Item("hammer", false, false), 2], [new Item("freydicSpear", false, false), 5], [new Item("freydicSword", false, false), 2], [new Item("freydicWarAxe", false, false), 1], [new Item("freydicGreatSword", false, false), 1], [new Item("chainArmour", false, false), 2], [new Item("longbow", false, false), 2], [new Item("arrow", false, false), 92], [new Item("steelArrow", false, false), 61], [new Item("timberAxe", false, false), 3], [new Item("pickaxe", false, false), 1], [new Item("beartrap", false, false), 1], [new Item("clawtrap", false, false), 1], [new Item("jacks", false, false), 14]]}));
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
                        ArtificialIntelligenceAccess.push(new Unit(1406, 1941, "Person", false, "Medlia the Merchant", {race: "Freynor", faction: "Freynor", personality: "calculated", outfit: ["winterWolfClothing", 0], weapon: ["none", [0.1, 0.4], 0, 0, 1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 1, patrolLoop: false, route:[[1425, 1941]], merchant: true, merchandise: [[new Item("coins", false, false), 179 + quests.medliaNewWealth], [new Item("wood", false, false), 48], [new Item("tent", false, false), 2], [new Item("fireStarter", false, false), 3], [new Item("jarOfOil", false, false), 1], [new Item("rawWalrusFlesh", false, false), 8], [new Item("walrusHide", false, false), 1], [new Item("walrusTusks", false, false), 1], [new Item("oilLampEmpty", false, false), 2], [new Item("oilLanternEmpty", false, false), 5], [new Item("candle", false, false), 12], [new Item("beesWax", false, false), 9], [new Item("ogardPerfume", false, false), 2], [new Item("frichPelt", false, false), 3], [new Item("rawFrichFlesh", false, false), 22], [new Item("winterWolfPelt", false, false), 3], [new Item("rawWinterWolfFlesh", false, false), 2], [new Item("rawWolfLiver", false, false), 1], [new Item("walrusLeatherWaterskin", false, false), 2], [new Item("harstGrain", false, false), 29], [new Item("potato", false, false), 8], [new Item("carrot", false, false), 13], [new Item("suuliMelon", false, false), 5], [new Item("driedTechiLeaf", false, false), 14], [new Item("ogard", false, false), 1], [new Item("freydicFolkTales", false, false), 1]]}));
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
                        if (quests.bankruptNeculai)
                        {
                            var xx = 2644;
                            var yy = 2006;
                        }
                        else
                        {
                            var xx = 1999;
                            var yy = 1604;
                        }

                        ArtificialIntelligenceAccess.push(new Unit(xx, yy, "Person", false, "Teber the Artisan", {race: "Freynor", faction: "Kel", personality: "scared", outfit: ["winterWolfClothing", 0], weapon: ["none", [0.4, 0.6], 0, 0, 1.15], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 75], [new Item("naapridFiber", false, false), 7], [new Item("pintGlass", false, false), 19], [new Item("potionGlass", false, false), 18], [new Item("glassJar", false, false), 10]]}));
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
                                    ArtificialIntelligenceAccess.push(new Unit(2498, 1144, "Person", false, "Neculai the Merchant", {race: "Vardan", faction: "Vardan", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.2, 0.5], 0, 0, 0.55], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[], merchant: true, merchandise: [[new Item("coins", false, false), 37], [new Item("frichFurClothing", false, false), 3], [new Item("mace", false, false), 1], [new Item("vardanianAxe", false, false), 3], [new Item("vardanianAxeDual", false, false), 2], [new Item("vardanianCleaver", false, false), 1], [new Item("vardanianClub", false, false), 1], [new Item("smashStick", false, false), 1], [new Item("rawWolfLiver", false, false), 4], [new Item("blackChainArmour", false, false), 2], [new Item("trollFlesh", false, false), 2], [new Item("wood", false, false), 14], [new Item("freydicSword", false, false), 1], [new Item("frichPelt", false, false), 6], [new Item("rawWalrusFlesh", false, false), 5], [new Item("walrusMeat", false, false), 1], [new Item("swampWalkerArmour", false, false), 1]]}));
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(2498, 1144, "Person", false, "Neculai the Merchant", {race: "Vardan", faction: "Vardan", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.2, 0.5], 0, 0, 0.55], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[], merchant: true, merchandise: [[new Item("coins", false, false), 37], [new Item("frichFurClothing", false, false), 3], [new Item("mace", false, false), 1], [new Item("vardanianAxe", false, false), 3], [new Item("vardanianAxeDual", false, false), 2], [new Item("vardanianCleaver", false, false), 1], [new Item("smashStick", false, false), 1], [new Item("rawWolfLiver", false, false), 4], [new Item("blackChainArmour", false, false), 2], [new Item("trollFlesh", false, false), 2], [new Item("wood", false, false), 14], [new Item("freydicSword", false, false), 1], [new Item("frichPelt", false, false), 6], [new Item("rawWalrusFlesh", false, false), 5], [new Item("walrusMeat", false, false), 1]]}));
                                }
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(2756, 1815, "Person", false, "Neculai the Beggar", {race: "Vardan", faction: "Vardan", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.2, 0.5], 0, 0, 0.55], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[]}));
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
                ArtificialIntelligenceAccess.push(new Unit(-905, 2130, "Varn", false, "Domingo"));
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
                        ArtificialIntelligenceAccess.push(new Unit(35 - 750, 5540, "Soldier", false, "Hetmer The Bandit Chief", {race: "Freynor", faction: "hostile", con: 7, speed: 1.2, outfit: ["hetmerArmour", 5.5], weapon: ["freydicSword", [7, 7], 0, 16, 1], ranged: [false, "arrow", 9, 2100, 1, 7, 0, "none", 1.2], patrolStops: 1, patrolLoop: false, route:[[221 -750, 5517]]}));
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
                scenicList.push(new Scenery("freydicBuilding2", 2111, 2268, 0, true));
                scenicList.push(new Scenery("freydicBuilding2", 2430, 2268, 0, true));
                scenicList.push(new Scenery("freydicBuilding2", 2698, 2268, 0, true));
                scenicList.push(new Scenery("freydicBuilding2", 2319, 876, 0, true));
                scenicList.push(new Scenery("freydicBuilding2", 2319, 683, 0, true));
                scenicList.push(new Scenery("freydicBuilding2", 2319, 1064, 0, true));
                scenicList.push(new Scenery("freydicBuilding2", 1149, 1043, 0, true));
                scenicList.push(new Scenery("freydicBuilding2", 1149, 2256, 0, true));
                scenicList.push(new Scenery("freydicBuilding2", 1149, 2078, 0, true));
                scenicList.push(new Scenery("freydicBuilding2", 1149, 1900, 0, true));
                scenicList.push(new Scenery("freydicBuilding3", 2654, 2000, 0, true));
                scenicList.push(new Scenery("freydicBuilding3", 2654, 1644, 0, true));
                scenicList.push(new Scenery("freydicBuilding3", 1430, 1051, 0, true));
                scenicList.push(new Scenery("freydicBuilding3", 1450, 2240, 0, true));
                scenicList.push(new Scenery("freydicBuilding3", 1450, 1943, 0, true));
                scenicList.push(new Scenery("freydicBuilding4", 1260, 734, 0, true));
                scenicList.push(new Scenery("freydicBuilding4", 1306, 1643, 0, true));
                scenicList.push(new Scenery("freydicBuilding5", 1735, 715, 0, true));
                scenicList.push(new Scenery("freydicBuilding5", 2678, 1064, 0, true));
                scenicList.push(new Scenery("freydicBuilding5", 2678, 876, 0, true));
                scenicList.push(new Scenery("freydicBuilding5", 2678, 683, 0, true));

                //Signs
                scenicList.push(new Scenery("sign", 1570, 1115, 1/2 * Math.PI, 3, "Svehn's Smithy"));
                scenicList.push(new Scenery("sign", 2792, 1706, 1/2 * Math.PI, 3, "Northfolk Outfitters"));
                scenicList.push(new Scenery("sign", 1583, 2026, 1/2 * Math.PI, 3, "Teshir General Goods"));
                scenicList.push(new Scenery("sign", 1583, 2316, 1/2 * Math.PI, 3, "Teshir City Barracks"));
                scenicList.push(new Scenery("sign", 1484, 1514, 0 * Math.PI, 3, "Teshir City Bank"));
                scenicList.push(new Scenery("sign", 2175, 1657, 0 * Math.PI, 3, "The Harvest's Bounty - Inn"));

                //filler and the rest
                    //the inn
                scenicList.push(new Scenery("bartop", 2308, 1736, -1/2 * Math.PI, true));
                scenicList.push(new Scenery("bed", 1985, 1850, 1/2 * Math.PI, false));
                scenicList.push(new Scenery("bed", 2105, 1913, -1/2 * Math.PI, false));
                scenicList.push(new Scenery("hearth", 2186, 1880, 1/2 * Math.PI, "lit"));

                //The Players Home (purchasable)
                if (quests.teshirHomeOwned)
                {
                    scenicList.push(new Scenery("walrusHideRug", 2663, 1989, 0, 1.65));
                    scenicList.push(new Scenery("sign", 2792, 2056, 1/2 * Math.PI, 3, "Fairfield Lodge"));
                    scenicList.push(new Scenery("bed", 2594, 2082, 1/2 * Math.PI, true));
                    scenicList.push(new Scenery("hearth", 2555, 1910, 3/4 * Math.PI, true));
                    scenicList.push(new Scenery("crate", 2731, 2080, 3.5/4 * Math.PI, 3, [1.2, "teshirHomeCrate1", 6, [[new Item("woodenBowl", false, false), 7]], false, 0]));
                }
                else
                {
                    scenicList.push(new Scenery("walrusHideRug", 2663, 1989, 0, 1.65));
                    scenicList.push(new Scenery("sign", 2792, 2056, 1/2 * Math.PI, 3, "For Sale - 6200 coins"));
                    scenicList.push(new Scenery("bed", 2594, 2082, 1/2 * Math.PI, false));
                    scenicList.push(new Scenery("hearth", 2555, 1910, 3/4 * Math.PI, false));
                    scenicList.push(new Scenery("crate", 2731, 2080, 3.5/4 * Math.PI, 1, [1.2]));
                }

                //The Jarl's Estate
                scenicList.push(new Scenery("freydicBuilding6", -102, 474, 0, true));
                scenicList.push(new Scenery("freydicBuilding7", -338, 127, 0, true));
                scenicList.push(new Scenery("freydicBuilding3", -603, 474, 0, true));
                scenicList.push(new Scenery("woodenGate", -348, 597, 0, true));
                scenicList.push(new Scenery("smallRockCircle", -348 , 464, 4, true));
                scenicList.push(new Scenery("smallRockCircle", -348 , 464, 4 * 1/2 * Math.PI, true));
                scenicList.push(new Scenery("smallRockCircle", -348 , 464, 4 * -1/4 * Math.PI, true));
                scenicList.push(new Scenery("tylunPlant", -348 , 464, 4, "freynor", "theGreatFlowerOfTheJarlOfTeshir"));
                    //The noble player's room
                scenicList.push(new Scenery("walrusHideRug", -90, 466, 0, 2));
                if (player.title == "Nobility" && player.raceName == "Freynor" || player.title == "Royalty" && player.raceName == "Freynor")
                {
                    scenicList.push(new Scenery("hearth", -339, -79, 0, "flame"));
                    scenicList.push(new Scenery("bed", -50, 563, -1/2 * Math.PI, true));
                }
                else
                {
                    scenicList.push(new Scenery("hearth", -339, -79, 0, "lit"));
                    scenicList.push(new Scenery("bed", -50, 563, -1/2 * Math.PI, false));
                }
                if (player.gender == "Female" && player.title == "Nobility" && player.raceName == "Freynor")
                {
                    scenicList.push(new Scenery("loom", -183, 392, 3/4 * Math.PI, true));
                }
                    //The Jarls Chamber
                scenicList.push(new Scenery("walrusHideRug", -331, 141, -1/2 * Math.PI, 2.5));
                scenicList.push(new Scenery("feastingTable", -476, 156, -1/2 * Math.PI, true));
                scenicList.push(new Scenery("feastingTable", -187, 156, -1/2 * Math.PI, true));
                scenicList.push(new Scenery("bartop", -335, -3, 0 * Math.PI, true));

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
                scenicList.push(new Scenery("lab", 1199, 824, 0, true));
                if (quests.theBrokenWellFixed)
                {
                    scenicList.push(new Scenery("well", 2446, 1712, 0, true));
                }
                else
                {
                    scenicList.push(new Scenery("brokenWell", 2446, 1712, 0, true));
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
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //meant for the map
                //balkur
                ArtificialIntelligenceAccess.push(new Unit(5432, 15332, "Balkur", true, "Tiitvehlesh"));
                ArtificialIntelligenceAccess.push(new Unit(-396, 15991, "Balkur", false, "Tiitvehlesh"));
                ArtificialIntelligenceAccess.push(new Unit(-2158, 13626, "Balkur", false, "Tiitvehlesh"));

                //waanti
                ArtificialIntelligenceAccess.push(new Unit(323, 15308, "Waanti", true, "Goablt"));
                ArtificialIntelligenceAccess.push(new Unit(-693, 14241, "Waanti", true, "golabtlt"));
                ArtificialIntelligenceAccess.push(new Unit(110, 14479, "Waanti", false, "hablyem"));
                ArtificialIntelligenceAccess.push(new Unit(614, 14798, "Waanti", false, "yematlt"));
                ArtificialIntelligenceAccess.push(new Unit(219, 14191, "Waanti", "baby", "yem"));
                ArtificialIntelligenceAccess.push(new Unit(853, 14583, "Waanti", "baby", "yatlt"));
                ArtificialIntelligenceAccess.push(new Unit(19, 13961, "Waanti", false, "yetlat"));
                ArtificialIntelligenceAccess.push(new Unit(645, 14231, "Waanti", true, "Lebyetlt"));
                ArtificialIntelligenceAccess.push(new Unit(4965, 12265, "Waanti", true, "Kajlabtlt"));
                ArtificialIntelligenceAccess.push(new Unit(5334, 12140, "Waanti", false, "yablyem"));
                ArtificialIntelligenceAccess.push(new Unit(5037, 12049, "Waanti", false, "kematlt"));
                ArtificialIntelligenceAccess.push(new Unit(4620, 11851, "Waanti", "baby", "jemsi"));
                ArtificialIntelligenceAccess.push(new Unit(-2041, 7579, "Waanti", true, "Febyektl"));

                //winter wolves
                ArtificialIntelligenceAccess.push(new Unit(4659, 8375, "WinterWolf", false, "Dogmeat"));
                ArtificialIntelligenceAccess.push(new Unit(4345, 8849, "WinterWolf", false, "Husky"));
                ArtificialIntelligenceAccess.push(new Unit(3674, 8607, "WinterWolf", false, "German"));
                ArtificialIntelligenceAccess.push(new Unit(5676, 9600, "WinterWolf", true, "Ghost"));
                ArtificialIntelligenceAccess.push(new Unit(-1466, 9900, "WinterWolf", false, "Russia"));
                ArtificialIntelligenceAccess.push(new Unit(-2484, 9430, "WinterWolf", false, "Icepaw"));
                ArtificialIntelligenceAccess.push(new Unit(-1447, 9055, "WinterWolf", false, "Eski"));
                ArtificialIntelligenceAccess.push(new Unit(629, 10673, "WinterWolf", false, "Moaba"));
                ArtificialIntelligenceAccess.push(new Unit(198, 10037, "WinterWolf", false, "Alaska"));
                ArtificialIntelligenceAccess.push(new Unit(6290, 8636, "WinterWolf", false, "Everest"));

                //glutids
                ArtificialIntelligenceAccess.push(new Unit(-275, 9055, "Glutid", "massive", "Glub", {patrolStops: 4, patrolLoop: true, route:[[-1071, 9239], [-1003, 9594], [-75, 9913], [-275, 9055]]}));
                ArtificialIntelligenceAccess.push(new Unit(2255, 10148, "Glutid", true, "Glup", {patrolStops: 5, patrolLoop: true, route:[[1741, 10369], [1898, 9900], [1602, 9909], [1635, 10189], [2255, 10148]]}));
                ArtificialIntelligenceAccess.push(new Unit(5175, 12158, "Glutid", false, "Glip", {patrolStops: 3, patrolLoop: true, route:[[4509, 12083], [5073, 12453], [5175, 12158]]}));

                //Scenery
                scenicList.push(new Scenery("bushkaPlant", 576, 8067, 2.5, true));
                scenicList.push(new Scenery("bushkaPlant", -930 , 11917, -1, true));
                scenicList.push(new Scenery("wightbloomPlant", -1508 , 14448, 0, true));
                scenicList.push(new Scenery("wightbloomPlant", 611 , 15616, 5, true));
                scenicList.push(new Scenery("bushkaPlant", 5101 , 14837, -3.2, true));
                scenicList.push(new Scenery("bushkaPlant", 4226 , 13450, 0, true));
                scenicList.push(new Scenery("wightbloomPlant", 5400 , 10239, -4, true));
                scenicList.push(new Scenery("bushkaPlant", -1811 , 15449, -1.5, true));

                //off map //todo put these in other maps later on
                    //boss
                //ArtificialIntelligenceAccess.push(new Unit(2000, 30087, "AncientBeing", true, "Dejn-Vaa-Chorm"));
                //
                ////elder walruses
                //ArtificialIntelligenceAccess.push(new Unit(1600, 21790, "Walrus", true, "Ice Toby"));
                //ArtificialIntelligenceAccess.push(new Unit(2000, 21890, "Walrus", true, "Ice Tammy"));
                //
                ////walruses
                //ArtificialIntelligenceAccess.push(new Unit(900, 21290, "Walrus", false, "Santa Claws"));
                //ArtificialIntelligenceAccess.push(new Unit(1200, 21490, "Walrus", false, "Mary Claws"));
                //ArtificialIntelligenceAccess.push(new Unit(325, 21590, "Walrus", false, "Big Boy Ringo"));

                    //Seguidores del Hielo
                ArtificialIntelligenceAccess.push(new Unit(9000, 10000, "HyelingSoldier", true, "Frost Maw"));
                ArtificialIntelligenceAccess.push(new Unit(8900, 10100, "HyelingSoldier", false, "Long Tooth"));
                ArtificialIntelligenceAccess.push(new Unit(9584, 9046, "Hyeling", "baby", "Cold Cloth"));
                ArtificialIntelligenceAccess.push(new Unit(9498, 8856, "Hyeling", false, "Old Eyes"));
                ArtificialIntelligenceAccess.push(new Unit(10041, 8746, "Hyeling", true, "White Hammer"));
                ArtificialIntelligenceAccess.push(new Unit(9711, 8503, "HyelingSoldier", false, "Running Stone"));
                scenicList.push(new Scenery("largeCeremonialRockCircle", 10075 , 8783, 0, true));
                scenicList.push(new Scenery("hyelingTent", 9199 , 8965, 1/2 * Math.PI, true));
                scenicList.push(new Scenery("hyelingTent", 9677 , 9170, -1/11 * Math.PI, true));
                scenicList.push(new Scenery("hyelingTent", 10800 , 8897, -1/2 * Math.PI, true));
                scenicList.push(new Scenery("hyelingTent", 10458 , 8363, -3/5 * Math.PI, true));


                change = "n1";
            }
        }
        else if (region == "n2")
        {
            if (change != "n2")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Non-native Scenery
                scenicList = [];

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //meant for the map

                //humans
                    //walrus stuff merchant
                if (uniqueChars.hetmerLDS == false)
                {
                    if (Math.random() < 0.2)
                    {
                        if (change == "n1")
                        {
                            ArtificialIntelligenceAccess.push(new Unit(1714, 27290, "Person", false, "Freydic Merchant", {race: "Freynor", faction: "Freynor", personality: "scared", outfit: ["winterWolfClothing", 0], weapon: ["none", [0.4, 0.6], 0, 0, 1.15], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 6, patrolLoop: false, route:[[1720, 1939], [1488, 1939], [1714, 1939], [1714, 1457], [1730, 1187], [1734, 1192]], merchant: true, merchandise: [[new Item("coins", false, false), 18], [new Item("walrusTusks", false, false), 2], [new Item("rawWalrusFlesh", false, false), 3], [new Item("walrusHide", false, false), 2], [new Item("blubber", false, false), 5]]}));
                            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                            {
                                if (ArtificialIntelligenceAccess[i].ID == "Freydic Merchant")
                                {
                                    ArtificialIntelligenceAccess[i].speed = 1.05;
                                    ArtificialIntelligenceAccess[i].healthMAX = 9;
                                    ArtificialIntelligenceAccess[i].health = 9;
                                    break;
                                }
                            }
                            ArtificialIntelligenceAccess.push(new Unit(1740, 27200, "Soldier", false, "Hired Blade", {race: "Freynor", faction: "Freynor", con: 3, speed: 1.05, outfit: ["walrusLeatherArmour", 4], weapon: ["freydicSword", [4, 4], 0, 16, 1.1], ranged: [false, "arrow", 4, 1500, 1, 4, 0, "none", 2], patrolStops: 4, patrolLoop: true, route:[[1746, 1939], [1740, 1457], [1756, 1187], [1760, 1190]]}));
                        }
                    }
                }

                //balkur
                if (this.change != "n3")
                {
                    ArtificialIntelligenceAccess.push(new Unit(-1455, 26201, "Balkur", false, "Tivilesh"));
                }
                else if (this.change != "n2e1")
                {
                    ArtificialIntelligenceAccess.push(new Unit(-2227, 24702, "Balkur", true, "Tivel"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-2601, 25894, "WinterWolf", false, "Lusgya"));
                    ArtificialIntelligenceAccess.push(new Unit(-1989, 25549, "WinterWolf", false, "Lusgo"));
                    ArtificialIntelligenceAccess.push(new Unit(-1574, 25983, "WinterWolf", false, "Lusga"));
                    ArtificialIntelligenceAccess.push(new Unit(-740, 26220, "WinterWolf", false, "Lusgor"));
                }
                //waanti
                ArtificialIntelligenceAccess.push(new Unit(2658, 24515, "Waanti", "baby", "yiim"));
                ArtificialIntelligenceAccess.push(new Unit(2831, 24278, "Waanti", true, "Jilm"));
                ArtificialIntelligenceAccess.push(new Unit(2856, 24679, "Waanti", false, "Gemela"));
                ArtificialIntelligenceAccess.push(new Unit(5475, 23502, "Waanti", true, "Halm"));
                ArtificialIntelligenceAccess.push(new Unit(4605, 25537, "Waanti", false, "Gemala"));
                ArtificialIntelligenceAccess.push(new Unit(5266, 25378, "Waanti", true, "Holm"));
                ArtificialIntelligenceAccess.push(new Unit(-14, 22543, "Waanti", "baby", "yaam"));
                ArtificialIntelligenceAccess.push(new Unit(438, 22293, "Waanti", true, "Kilmi"));
                ArtificialIntelligenceAccess.push(new Unit(227, 22115, "Waanti", false, "Gemelia"));
                ArtificialIntelligenceAccess.push(new Unit(367, 22857, "Waanti", true, "Helm"));
                ArtificialIntelligenceAccess.push(new Unit(-754, 22419, "Waanti", "baby", "yaant"));
                ArtificialIntelligenceAccess.push(new Unit(-1304, 22980, "Waanti", true, "Kilmikan"));
                ArtificialIntelligenceAccess.push(new Unit(-1153, 22410, "Waanti", false, "Gemelaya"));
                ArtificialIntelligenceAccess.push(new Unit(533, 23721, "Waanti", false, "Gemayla"));

                //koobu
                ArtificialIntelligenceAccess.push(new Unit(-917, 19442, "Koobu", false, "Kipper"));

                //winter wolves
                    //Southwesterly woof pak... Represent!
                if (this.change != "n1" && this.change != "n2w1")
                {
                    ArtificialIntelligenceAccess.push(new Unit(6199, 16919, "WinterWolf", true, "Husky"));
                    ArtificialIntelligenceAccess.push(new Unit(6605, 16771, "WinterWolf", false, "Husgy"));
                    ArtificialIntelligenceAccess.push(new Unit(6493, 17189, "WinterWolf", false, "Husgo"));
                    ArtificialIntelligenceAccess.push(new Unit(5851, 17051, "WinterWolf", false, "Husga"));
                    ArtificialIntelligenceAccess.push(new Unit(6259, 16641, "WinterWolf", false, "Husgor"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(5824, 17987, "WinterWolf", true, "Husgol"));
                    ArtificialIntelligenceAccess.push(new Unit(5685, 17633, "WinterWolf", false, "Husgorr"));
                }
                    //mid west group
                ArtificialIntelligenceAccess.push(new Unit(3537, 21261, "WinterWolf", false, "Hasga"));
                ArtificialIntelligenceAccess.push(new Unit(4215, 21803, "WinterWolf", false, "Hasgora"));
                ArtificialIntelligenceAccess.push(new Unit(4546, 19176, "WinterWolf", false, "Holsgor"));
                    //mideasterly woofs
                ArtificialIntelligenceAccess.push(new Unit(119, 24403, "WinterWolf", false, "Lusgora"));
                ArtificialIntelligenceAccess.push(new Unit(-2350, 17359, "WinterWolf", false, "Lusgorr"));

                //glutids
                ArtificialIntelligenceAccess.push(new Unit(6317, 21218, "Glutid", true, "Gluptard", {patrolStops: 5, patrolLoop: true, route:[[6037, 21507], [6833, 21852], [6568, 22378], [7140, 22077], [6317, 21218]]}));
                ArtificialIntelligenceAccess.push(new Unit(6021, 26071, "Glutid", false, "Gluptario", {patrolStops: 3, patrolLoop: true, route:[[6709, 26233], [6448, 26854], [6021, 26071]]}));
                ArtificialIntelligenceAccess.push(new Unit(6293, 26383, "Glutid", false, "Gluptaria", {patrolStops: 1, patrolLoop: true, route:[[6293, 26383]]}));
                ArtificialIntelligenceAccess.push(new Unit(2674, 17194, "Glutid", false, "Gluptariela", {patrolStops: 1, patrolLoop: true, route:[[2674, 17194]]}));
                ArtificialIntelligenceAccess.push(new Unit(2874, 20010, "Glutid", true, "Gluptiel", {patrolStops: 2, patrolLoop: true, route:[[3445, 19710], [2874, 20010]]}));

                //Scenery
                scenicList.push(new Scenery("bushkaPlant", 5940, 17870, -1.5, true));
                scenicList.push(new Scenery("bushkaPlant", 2608, 24656, 8, true));
                scenicList.push(new Scenery("bushkaPlant", 202, 23641, -5.2, true));

                scenicList.push(new Scenery("wightbloomPlant", 5160 , 26153, 0.25, true));
                scenicList.push(new Scenery("wightbloomPlant", -2114 , 25954, -3, true));
                scenicList.push(new Scenery("wightbloomPlant", -1606 , 22788, -4.78, true));

                scenicList.push(new Scenery("tyrniPlant", 3391, 22531, 0, true));
                scenicList.push(new Scenery("tyrniPlant", -1157, 25240, -5.5, true));

                scenicList.push(new Scenery("stone", -1033 , 22648, 6, 1, 1));
                scenicList.push(new Scenery("stone", -949 , 22322, 4, 0.5, 3));
                scenicList.push(new Scenery("stone", 56 , 23763, 2, 1.5, 1));

                //Hyeling Camps
                //ArtificialIntelligenceAccess.push(new Unit(10041, 8746, "Hyeling", true, "White Hammer"));
                //ArtificialIntelligenceAccess.push(new Unit(9711, 8503, "HyelingSoldier", false, "Running Stone"));
                //scenicList.push(new Scenery("largeCeremonialRockCircle", 10075 , 8783, 0, true));
                //scenicList.push(new Scenery("hyelingTent", 9199 , 8965, 1/2 * Math.PI, true));
                //scenicList.push(new Scenery("hyelingSkeleton", 10071 , 8788, 0.12, true));

                change = "n2";
            }
        }
        else if (region == "n3")
        {
            if (change != "n3")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Non-native Scenery
                scenicList = [];

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //meant for the map

                //humans

                //balkur
                if (Math.round(Math.random()))
                {
                    ArtificialIntelligenceAccess.push(new Unit(6014, 29100, "Balkur", true, "Kalovesh"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(6014, 29100, "Balkur", false, "Kalobech"));
                }
                ArtificialIntelligenceAccess.push(new Unit(4674, 34221, "Balkur", true, "Kalobesh"));

                //waanti
                ArtificialIntelligenceAccess.push(new Unit(6268, 30642, "Waanti", "baby", "yiam"));
                ArtificialIntelligenceAccess.push(new Unit(6037, 30878, "Waanti", "baby", "yiom"));
                ArtificialIntelligenceAccess.push(new Unit(6022, 30704, "Waanti", "baby", "yiilmera"));
                ArtificialIntelligenceAccess.push(new Unit(6330, 31214, "Waanti", false, "Ilmurdara"));
                ArtificialIntelligenceAccess.push(new Unit(5665, 30990, "Waanti", false, "Genjura"));
                ArtificialIntelligenceAccess.push(new Unit(5449, 30427, "Waanti", true, "Jolhaffsmur"));
                ArtificialIntelligenceAccess.push(new Unit(6642, 32479, "Waanti", true, "Jolhaffsmuro"));
                ArtificialIntelligenceAccess.push(new Unit(2067, 32440, "Waanti", false, "Genjuraya"));
                ArtificialIntelligenceAccess.push(new Unit(1969, 32293, "Waanti", true, "Ialhoffsmurre"));
                ArtificialIntelligenceAccess.push(new Unit(253, 34639, "Waanti", "baby", "yiaam"));
                ArtificialIntelligenceAccess.push(new Unit(-16, 34447, "Waanti", "baby", "yialmera"));
                ArtificialIntelligenceAccess.push(new Unit(431, 34196, "Waanti", false, "Almurdara"));
                ArtificialIntelligenceAccess.push(new Unit(84, 34672, "Waanti", false, "Jenjura"));
                ArtificialIntelligenceAccess.push(new Unit(-207, 34260, "Waanti", true, "Golhaffsmur"));
                ArtificialIntelligenceAccess.push(new Unit(-31, 33917, "Waanti", true, "Holhaffsmuro"));
                ArtificialIntelligenceAccess.push(new Unit(545, 34903, "Waanti", false, "Lenjurara"));
                ArtificialIntelligenceAccess.push(new Unit(-40, 35098, "Waanti", true, "Falhoffsmurrek"));
                ArtificialIntelligenceAccess.push(new Unit(322, 29192, "Waanti", false, "Lenjura"));
                ArtificialIntelligenceAccess.push(new Unit(-411, 29166, "Waanti", "baby", "Lolhaffsmur"));
                ArtificialIntelligenceAccess.push(new Unit(65, 28751, "Waanti", true, "Hiolhaffsmuro"));
                ArtificialIntelligenceAccess.push(new Unit(-50, 28988, "Waanti", false, "Thenjurara"));
                ArtificialIntelligenceAccess.push(new Unit(-343, 28802, "Waanti", true, "Thalhoffsmurrek"));
                ArtificialIntelligenceAccess.push(new Unit(-1944, 28046, "Waanti", "baby", "Lalhaffsmur"));
                ArtificialIntelligenceAccess.push(new Unit(-2338, 28313, "Waanti", true, "Hialhaffsmuro"));
                ArtificialIntelligenceAccess.push(new Unit(-2464, 27845, "Waanti", false, "Thanara"));
                ArtificialIntelligenceAccess.push(new Unit(-1850, 28239, "Waanti", false, "Thihoffsmurrek"));

                if (change != "n4")
                {
                    ArtificialIntelligenceAccess.push(new Unit(1523, 37117, "Waanti", true, "Hioulhioffsmurre"));
                    ArtificialIntelligenceAccess.push(new Unit(1484, 37247, "Waanti", false, "Hioulhioffsmurre"));

                    ArtificialIntelligenceAccess.push(new Unit(2025, 37205, "Waanti", "baby", "Lalhaffsmur"));
                    ArtificialIntelligenceAccess.push(new Unit(2157, 37116, "Waanti", false, "Thanara"));
                }
                if (Math.round(Math.random() * 4) == 1)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2026, 36815, "Waanti", true, "Hialhaffsmuro"));
                }

                //koobu
                ArtificialIntelligenceAccess.push(new Unit(3997, 27954, "Koobu", true, "Kapper"));
                ArtificialIntelligenceAccess.push(new Unit(4653, 28074, "Koobu", false, "Keppler"));
                if (Math.round(Math.random()))
                {
                    ArtificialIntelligenceAccess.push(new Unit(2957, 29014, "Koobu", false, "Kippler"));
                }

                if (Math.round(Math.random()))
                {
                    ArtificialIntelligenceAccess.push(new Unit(-2090, 34378, "Koobu", false, "Kouppler"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-2090, 34378, "Koobu", true, "Kauppler"));
                }

                if (Math.round(Math.random()))
                {
                    ArtificialIntelligenceAccess.push(new Unit(-2381, 33953, "Koobu", false, "Kuppler"));
                }
                ArtificialIntelligenceAccess.push(new Unit(934, 30135, "Koobu", false, "Kilppar"));


                //winter wolves
                if (change != "n2")
                {
                    ArtificialIntelligenceAccess.push(new Unit(4605, 27278, "WinterWolf", false, "Lusgorre"));
                    if (change == "n4")
                    {
                        ArtificialIntelligenceAccess.push(new Unit(5054, 27117, "WinterWolf", false, "Lusgorria"));
                        ArtificialIntelligenceAccess.push(new Unit(4743, 27010, "WinterWolf", false, "Lusgorrial"));
                    }
                }
                if (Math.round(Math.random() * 5) == 4)
                {
                    ArtificialIntelligenceAccess.push(new Unit(4562, 29644, "WinterWolf", false, "Lusgorrai"));
                    ArtificialIntelligenceAccess.push(new Unit(4207, 29666, "WinterWolf", false, "Lusgorriel"));
                }
                ArtificialIntelligenceAccess.push(new Unit(2905, 36769, "WinterWolf", false, "Lusgorraiya"));

                if (change != "n3w1")
                {
                    ArtificialIntelligenceAccess.push(new Unit(6161, 36572, "WinterWolf", true, "Lusgorrielle"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(6228, 36216, "WinterWolf", false, "Losgorrailia"));
                    ArtificialIntelligenceAccess.push(new Unit(5691, 36371, "WinterWolf", false, "Lisgorriellia"));
                }
                ArtificialIntelligenceAccess.push(new Unit(35, 32208, "WinterWolf", false, "Luusgorrail"));
                ArtificialIntelligenceAccess.push(new Unit(-90, 31873, "WinterWolf", false, "Laasgorriellia"));
                ArtificialIntelligenceAccess.push(new Unit(145, 31910, "WinterWolf", false, "Liusgorrailia"));
                ArtificialIntelligenceAccess.push(new Unit(-387, 32016, "WinterWolf", false, "Loisgorrielle"));
                ArtificialIntelligenceAccess.push(new Unit(-535, 31680, "WinterWolf", false, "Laugorrel"));

                ArtificialIntelligenceAccess.push(new Unit(83, 27616, "WinterWolf", false, "Laurgorrelle"));
                if (Math.round(Math.random()))
                {
                    ArtificialIntelligenceAccess.push(new Unit(292, 36133, "WinterWolf", false, "Luargorrua"));
                    ArtificialIntelligenceAccess.push(new Unit(-243, 36242, "WinterWolf", false, "Luargorru"));
                    ArtificialIntelligenceAccess.push(new Unit(396, 36440, "WinterWolf", false, "Luargurana"));
                }

                //glutids
                //ArtificialIntelligenceAccess.push(new Unit(6317, 21218, "Glutid", true, "Gluptard", {patrolStops: 5, patrolLoop: true, route:[[6037, 21507], [6833, 21852], [6568, 22378], [7140, 22077], [6317, 21218]]}));
                //ArtificialIntelligenceAccess.push(new Unit(2674, 17194, "Glutid", false, "Gluptariela", {patrolStops: 1, patrolLoop: true, route:[[2674, 17194]]}));

                //Plants
                scenicList.push(new Scenery("bushkaPlant", 3207, 27390, 5, true));
                scenicList.push(new Scenery("bushkaPlant", 4497, 27682, 4.8, true));
                scenicList.push(new Scenery("bushkaPlant", 5300, 35493, -6.61, true));
                scenicList.push(new Scenery("bushkaPlant", -2366, 35548, -2.75, true));
                scenicList.push(new Scenery("bushkaPlant", -2182, 34319, 2.75, true));
                scenicList.push(new Scenery("bushkaPlant", -1849, 34052, 4.75, true));
                scenicList.push(new Scenery("bushkaPlant", -1078, 28815, -5.1, true));

                scenicList.push(new Scenery("wightbloomPlant", 4185 , 32149, 10, true));
                scenicList.push(new Scenery("wightbloomPlant", 53 , 30093, -9, true));

                if (change != "n4")
                {
                    scenicList.push(new Scenery("tyrniPlant", 3902, 36896, 6, true));
                }
                else
                {
                    scenicList.push(new Scenery("tyrniPlant", 3575, 36471, 6.5, true));
                }
                scenicList.push(new Scenery("tyrniPlant", 19, 36084, -5.4, true));

                //Scenery
                scenicList.push(new Scenery("stone", 3755 , 29352, 1.2, 2, 2));
                scenicList.push(new Scenery("stone", 4214 , 29229, -4, 1, 3));
                scenicList.push(new Scenery("stone", 4733 , 30127, -3, 1.5, 2));
                if (Math.round(Math.random() * 3) == 3)
                {
                    ArtificialIntelligenceAccess.push(new Unit(3675, 29302, "Soldier", false, "Freydic Hunter", {race: "Freynor", faction: "Freynor", con: 8, speed: 1.1, outfit: ["sealSkinClothing", 0], weapon: ["freydicSpear", [2, 3], 4, 24, 1.25], ranged: [false, "arrow", 5, 1600, 1, 4, 0, "none", 2], patrolStops: 5, patrolLoop: true, route:[[2197, 29577], [3889, 29603], [3736, 30019], [2977, 28941], [3701, 29233]]}));
                    //hunter's camp
                    scenicList.push(new Scenery("tent", 3822, 29306, 1/8 * 2 * Math.PI, true));
                    scenicList.push(new Scenery("deadWaanti", 3755 , 29352, 3.14, 1.6));
                    scenicList.push(new Scenery("campFire", 3757 , 29275, 1, "permaLit"));
                    scenicList.push(new Scenery("item", 3807, 29356, 0, "freynor", ["bucket", 1, -18]));
                    scenicList.push(new Scenery("item", 3797, 29257, 0, "freynor", ["arrow", 3, -9]));
                }
                scenicList.push(new Scenery("stone", 4201 , 28220, 3.6, 0.5, 1));
                scenicList.push(new Scenery("stone", 5626 , 31426, 8.3, 0.5, 3));
                scenicList.push(new Scenery("stone", 6055 , 31963, -2, 0.5, 3));
                scenicList.push(new Scenery("stone", 845 , 35479, 4.444, 1.5, 2));
                scenicList.push(new Scenery("stone", 256 , 35885, 2.8, 0.5, 1));
                scenicList.push(new Scenery("stone", -2069 , 32193, -1, 1, 2));

                //sign to Teshir
                scenicList.push(new Scenery("sign", 1908, 35783, Math.PI / 2, 1, "Teshir City - 109 sectors"));

                //Hyeling Camps
                //ArtificialIntelligenceAccess.push(new Unit(10041, 8746, "Hyeling", true, "White Hammer"));
                //ArtificialIntelligenceAccess.push(new Unit(9711, 8503, "HyelingSoldier", false, "Running Stone"));
                //scenicList.push(new Scenery("largeCeremonialRockCircle", 10075 , 8783, 0, true));
                //scenicList.push(new Scenery("hyelingTent", 9199 , 8965, 1/2 * Math.PI, true));
                //scenicList.push(new Scenery("hyelingSkeleton", 10071 , 8788, 0.12, true));

                change = "n3";
            }
        }
        else if (region == "n4")
        {
            if (change != "n4")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Non-native Scenery
                scenicList = [];

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //meant for the map

                //humans

                //balkur
                //ArtificialIntelligenceAccess.push(new Unit(4674, 34221, "Balkur", true, "Kalobesh"));

                //waanti
                ArtificialIntelligenceAccess.push(new Unit(4592, 40636, "Waanti", "baby", "yiam"));
                ArtificialIntelligenceAccess.push(new Unit(4922, 40968, "Waanti", true, "yiam"));
                ArtificialIntelligenceAccess.push(new Unit(4480, 40755, "Waanti", false, "yiam"));

                //koobu
                ArtificialIntelligenceAccess.push(new Unit(6077, 39074, "Koobu", true, "Kooper"));
                ArtificialIntelligenceAccess.push(new Unit(-256, 39271, "Koobu", false, "Kouperr"));


                //winter wolves
                ArtificialIntelligenceAccess.push(new Unit(-1750, 37746, "WinterWolf", false, "Laugorrela"));
                ArtificialIntelligenceAccess.push(new Unit(-1952, 37576, "WinterWolf", false, "Laugorreli"));
                ArtificialIntelligenceAccess.push(new Unit(-2507, 37794, "WinterWolf", false, "Laugorrele"));
                ArtificialIntelligenceAccess.push(new Unit(-2462, 37602, "WinterWolf", false, "Laugorrelo"));

                //glutids
                ArtificialIntelligenceAccess.push(new Unit(3105, 39083, "Glutid", true, "Gluuptarg", {patrolStops: 5, patrolLoop: true, route:[[2547, 38775], [2060, 39066], [1805, 38576], [3082, 38393], [3105, 39083]]}));
                ArtificialIntelligenceAccess.push(new Unit(4084, 38917, "Glutid", false, "Gluho", {patrolStops: 1, patrolLoop: true, route:[[4084, 38917]]}));
                ArtificialIntelligenceAccess.push(new Unit(5167, 37697, "Glutid", false, "Gluho", {patrolStops: 3, patrolLoop: true, route:[[4186, 38091], [4854, 38220], [5167, 37697]]}));


                //beach creatures
                ArtificialIntelligenceAccess.push(new Unit(3918, 46085, "Cangrejo", "baby", "pincher"));
                ArtificialIntelligenceAccess.push(new Unit(3940, 45556, "Cangrejo", "baby", "pinchy"));
                if (Math.round(Math.random() * 3) == 2)
                {
                    ArtificialIntelligenceAccess.push(new Unit(1899, 45526, "Cangrejo", false, "pincharette"));
                }
                else
                {
                    if (Math.round(Math.random()))
                    {
                        ArtificialIntelligenceAccess.push(new Unit(1899, 45526, "Anemone", false, "slimer"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(1899, 45526, "Anemone", "baby", "slimal"));
                    }
                }
                //anemones
                ArtificialIntelligenceAccess.push(new Unit(4505, 46018, "Anemone", true, "slimar"));
                if (change != "n4w1")
                {
                    ArtificialIntelligenceAccess.push(new Unit(6237, 46128, "Anemone", false, "slimic"));
                    ArtificialIntelligenceAccess.push(new Unit(6748, 45976, "Anemone", "baby", "slimy"));
                    ArtificialIntelligenceAccess.push(new Unit(6691, 45447, "Seal", false, "uf"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(6237, 46128, "Seal", true, "oof"));
                }
                //seals
                ArtificialIntelligenceAccess.push(new Unit(6282, 45115, "Seal", false, "uf"));
                ArtificialIntelligenceAccess.push(new Unit(881, 43637, "Seal", true, "arf"));
                ArtificialIntelligenceAccess.push(new Unit(301, 44174, "Seal", true, "urf"));
                ArtificialIntelligenceAccess.push(new Unit(675, 45843, "Seal", false, "ouf"));
                ArtificialIntelligenceAccess.push(new Unit(622, 46092, "Seal", "baby", "auf"));
                ArtificialIntelligenceAccess.push(new Unit(6, 45851, "Seal", true, "ourf"));
                ArtificialIntelligenceAccess.push(new Unit(-368, 46245, "Seal", false, "aurf"));
                ArtificialIntelligenceAccess.push(new Unit(-609, 45823, "Seal", false, "ouourf"));
                ArtificialIntelligenceAccess.push(new Unit(-210, 46421, "Seal", "baby", "oof"));
                ArtificialIntelligenceAccess.push(new Unit(-2542, 46364, "Seal", true, "aaurf"));
                ArtificialIntelligenceAccess.push(new Unit(-2256, 45723, "Seal", false, "auurf"));
                ArtificialIntelligenceAccess.push(new Unit(-1686, 46378, "Seal", false, "ouuoourf"));
                ArtificialIntelligenceAccess.push(new Unit(-2456, 46135, "Seal", "baby", "oaouf"));
                ArtificialIntelligenceAccess.push(new Unit(-2080, 43806, "Seal", false, "oaourf"));

                //mites
                ArtificialIntelligenceAccess.push(new Unit(3402, 45274, "BeachMite", false, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(4121, 44340, "BeachMite", true, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(5415, 45022, "BeachMite", false, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(5419, 45032, "BeachMite", true, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(5410, 45020, "BeachMite", false, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(-2305, 44720, "BeachMite", false, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(-2315, 44710, "BeachMite", false, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(6088, 44272, "BeachMite", true, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(6080, 44270, "BeachMite", false, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(6075, 44277, "BeachMite", false, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(6095, 44275, "BeachMite", false, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(4156, 44677, "BeachMite", false, "bit"));
                ArtificialIntelligenceAccess.push(new Unit(4150, 44670, "BeachMite", false, "bit"));

                //cloimids
                ArtificialIntelligenceAccess.push(new Unit(4721, 45874, "Cloimid", true, "moistClambyTickle", {rotation: -110/360 * 2 * Math.PI}));
                ArtificialIntelligenceAccess.push(new Unit(4707, 45837, "Cloimid", false, "moistClambyFondle", {rotation: -155/360 * 2 * Math.PI}));
                ArtificialIntelligenceAccess.push(new Unit(4679, 45836, "Cloimid", false, "moistClambyLick", {rotation: -235/360 * 2 * Math.PI}));
                ArtificialIntelligenceAccess.push(new Unit(4476, 44980, "Cloimid", true, "moistClambyTickles", {rotation: -90/360 * 2 * Math.PI}));
                ArtificialIntelligenceAccess.push(new Unit(4435, 44970, "Cloimid", false, "moistClambyLicks", {rotation: -45/360 * 2 * Math.PI}));
                ArtificialIntelligenceAccess.push(new Unit(4503, 44950, "Cloimid", true, "moistClambyKiss", {rotation: -180/360 * 2 * Math.PI}));
                ArtificialIntelligenceAccess.push(new Unit(4424, 44919, "Cloimid", true, "moistClambyKisses", {rotation: 35/360 * 2 * Math.PI}));
                ArtificialIntelligenceAccess.push(new Unit(4440, 44885, "Cloimid", false, "moistClambyHicky", {rotation: 72/360 * 2 * Math.PI}));


                //Plants
                scenicList.push(new Scenery("bushkaPlant", 3504, 42017, 1, true));
                scenicList.push(new Scenery("bushkaPlant", -1493, 38240, 1.55, true));
                scenicList.push(new Scenery("tyrniPlant", 5472, 38523, -7, true));
                scenicList.push(new Scenery("tyrniPlant", -1070, 41492, -3.77, true));
                scenicList.push(new Scenery("tyrniPlant", 3130, 42388, 4.6, true));
                    //algae
                //scenicList.push(new Scenery("algae", 4656, 45859, 0, 1)); //use these coords please

                //Scenery
                scenicList.push(new Scenery("stone", 4265 , 41412, 2.4, 2, 3));
                scenicList.push(new Scenery("stone", 4897 , 41696, 2.2, 0.5, 2));
                scenicList.push(new Scenery("stone", 3914 , 45416, 6.2, 1.5, 2));
                scenicList.push(new Scenery("stone", 3548 , 45487, 6.9, 1, 1));
                scenicList.push(new Scenery("stone", 3797 , 45784, 1.3, 1, 2));
                scenicList.push(new Scenery("stone", 3329 , 45948, -5.58, 0.5, 3));
                scenicList.push(new Scenery("stone", 2423 , 45781, -8.1, 1.5, 1));
                scenicList.push(new Scenery("stone", 2172 , 45197, 0, 0.5, 2));
                scenicList.push(new Scenery("stone", 5252 , 46088, -2, 2.5, 2));
                scenicList.push(new Scenery("stone", 4750 , 46484, 4.3, 2, 3));
                scenicList.push(new Scenery("stone", 4684 , 45879, 3, 2, 1));
                scenicList.push(new Scenery("stone", 4461 , 44964, 0.5, 1.5, 2));
                scenicList.push(new Scenery("stone", 4467 , 44916, 4, 2, 1));
                scenicList.push(new Scenery("stone", 4417 , 44955, 2.9, 1, 3));

                //Hyeling Camps
                //ArtificialIntelligenceAccess.push(new Unit(10041, 8746, "Hyeling", true, "White Hammer"));
                //ArtificialIntelligenceAccess.push(new Unit(9711, 8503, "HyelingSoldier", false, "Running Stone"));
                //scenicList.push(new Scenery("largeCeremonialRockCircle", 10075 , 8783, 0, true));
                //scenicList.push(new Scenery("hyelingTent", 9199 , 8965, 1/2 * Math.PI, true));
                //scenicList.push(new Scenery("hyelingSkeleton", 10071 , 8788, 0.12, true));

                change = "n4";
            }
        }
        else if (region == "n4e1")
        {
            if (change != "n4e1")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Non-native Scenery
                scenicList = [];

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //meant for the map

                //humans

                //balkur
                //ArtificialIntelligenceAccess.push(new Unit(4674, 34221, "Balkur", true, "Kalobesh"));

                //waanti
                //ArtificialIntelligenceAccess.push(new Unit(4592, 40636, "Waanti", "baby", "yiam"));

                //koobu
                //ArtificialIntelligenceAccess.push(new Unit(6077, 39074, "Koobu", true, "Kooper"));


                //winter wolves
                //ArtificialIntelligenceAccess.push(new Unit(-1750, 37746, "WinterWolf", false, "Laugorrela"));

                //glutids
                //ArtificialIntelligenceAccess.push(new Unit(3105, 39083, "Glutid", true, "Gluuptarg", {patrolStops: 5, patrolLoop: true, route:[[2547, 38775], [2060, 39066], [1805, 38576], [3082, 38393], [3105, 39083]]}));
                //ArtificialIntelligenceAccess.push(new Unit(4084, 38917, "Glutid", false, "Gluho", {patrolStops: 1, patrolLoop: true, route:[[4084, 38917]]}));



                //beach creatures
                //ArtificialIntelligenceAccess.push(new Unit(3918, 46085, "Cangrejo", "baby", "pincher"));

                //anemones
                //ArtificialIntelligenceAccess.push(new Unit(4505, 46018, "Anemone", true, "slimar"));

                //seals
                //ArtificialIntelligenceAccess.push(new Unit(-2080, 43806, "Seal", false, "oaourf"));

                //mites
                //ArtificialIntelligenceAccess.push(new Unit(3402, 45274, "BeachMite", false, "bit"));

                //cloimids
                //ArtificialIntelligenceAccess.push(new Unit(4721, 45874, "Cloimid", true, "moistClambyTickle", {rotation: -110/360 * 2 * Math.PI}));

                //Plants
                //scenicList.push(new Scenery("bushkaPlant", 3504, 42017, 1, true));
                //scenicList.push(new Scenery("tyrniPlant", 3130, 42388, 4.6, true));
                //scenicList.push(new Scenery("wightbloomPlant", 3130, 42388, 4.6, true));

                //algae
                //scenicList.push(new Scenery("algae", 4656, 45859, 0, 1)); //use these coords please

                //Scenery
                //scenicList.push(new Scenery("stone", 4265 , 41412, 2.4, 2, 3));

                //Hyeling Camps
                //ArtificialIntelligenceAccess.push(new Unit(10041, 8746, "Hyeling", true, "White Hammer"));
                //ArtificialIntelligenceAccess.push(new Unit(9711, 8503, "HyelingSoldier", false, "Running Stone"));
                //scenicList.push(new Scenery("largeCeremonialRockCircle", 10075 , 8783, 0, true));
                //scenicList.push(new Scenery("hyelingTent", 9199 , 8965, 1/2 * Math.PI, true));
                //scenicList.push(new Scenery("hyelingSkeleton", 10071 , 8788, 0.12, true));

                //sign to Venning
                scenicList.push(new Scenery("sign", -4811, 41074, 0 * Math.PI, 1, "Venning City - 41 sectors"));

                change = "n4e1";
            }
        }
        else if (region == "n4e2")
        {
            if (change != "n4e2")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Non-native Scenery
                scenicList = [];

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //meant for the map

                //balkur
                //ArtificialIntelligenceAccess.push(new Unit(4674, 34221, "Balkur", true, "Kalobesh"));

                //waanti
                //ArtificialIntelligenceAccess.push(new Unit(4592, 40636, "Waanti", "baby", "yiam"));

                //koobu
                //ArtificialIntelligenceAccess.push(new Unit(6077, 39074, "Koobu", true, "Kooper"));


                //winter wolves
                //ArtificialIntelligenceAccess.push(new Unit(-1750, 37746, "WinterWolf", false, "Laugorrela"));

                //glutids
                //ArtificialIntelligenceAccess.push(new Unit(3105, 39083, "Glutid", true, "Gluuptarg", {patrolStops: 5, patrolLoop: true, route:[[2547, 38775], [2060, 39066], [1805, 38576], [3082, 38393], [3105, 39083]]}));
                //ArtificialIntelligenceAccess.push(new Unit(4084, 38917, "Glutid", false, "Gluho", {patrolStops: 1, patrolLoop: true, route:[[4084, 38917]]}));

                //beach creatures
                //ArtificialIntelligenceAccess.push(new Unit(3918, 46085, "Cangrejo", "baby", "pincher"));

                //anemones
                //ArtificialIntelligenceAccess.push(new Unit(4505, 46018, "Anemone", true, "slimar"));

                //seals
                //ArtificialIntelligenceAccess.push(new Unit(-2080, 43806, "Seal", false, "oaourf"));

                //mites
                //ArtificialIntelligenceAccess.push(new Unit(3402, 45274, "BeachMite", false, "bit"));

                //cloimids
                //ArtificialIntelligenceAccess.push(new Unit(4721, 45874, "Cloimid", true, "moistClambyTickle", {rotation: -110/360 * 2 * Math.PI}));

                //Plants
                //scenicList.push(new Scenery("bushkaPlant", 3504, 42017, 1, true));
                //scenicList.push(new Scenery("tyrniPlant", 3130, 42388, 4.6, true));
                //scenicList.push(new Scenery("wightbloomPlant", 3130, 42388, 4.6, true));

                //algae
                //scenicList.push(new Scenery("algae", 4656, 45859, 0, 1)); //use these coords please

                //Scenery
                //scenicList.push(new Scenery("stone", 4265 , 41412, 2.4, 2, 3));

                //HUMANS

                    //unique humans

                if (uniqueChars.siggiLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Siggi the Harborman")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-14540, 44796, "Person", false, "Siggi the Harborman", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["northernClothing", 0], weapon: ["none", [0.4, 0.8], 0, 0, 0.75], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[-14542, 44796]], merchant: true, merchandise: [[new Item("coins", false, false), 90], [new Item("boat", false, false), 2], [new Item("fishingpole", false, false), 6]]}));
                    }
                }
                if (uniqueChars.rannukLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Jarl Rannuk Stambjord")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-18930, 44712, "Soldier", false, "Jarl Rannuk Stambjord", {race: "Freynor", faction: "Freynor", con: 16, speed: 0, outfit: ["fineFreydicOutfitM", 0], weapon: ["none", [0.5, 0.5], 0, 0, 1.15], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "none", 2.65], rot: -1/2*Math.PI, patrolStops: 0, patrolLoop: false, route:[[-18930, 44712]]}));
                    }
                }
                if (uniqueChars.seethLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Seeth the Innkeeper")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-15043, 44824, "Person", false, "Seeth the Innkeeper", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["northernClothing", 0], weapon: ["none", [0.45, 0.6], 0, 0, 1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[-14542, 44796]], merchant: true, merchandise: [[new Item("coins", false, false), 61], [new Item("mead", false, false), 82], [new Item("harstAle", false, false), 53], [new Item("walrusMeat", false, false), 2], [new Item("sealMeat", false, false), 4], [new Item("redCrombal", false, false), 6], [new Item("waantiMeat", false, false), 4], [new Item("harstBread", false, false), 3], [new Item("butteredHarstBread", false, false), 3], [new Item("tyrniBerries", false, false), 4]]}));
                    }
                }
                if (uniqueChars.neculaiLDS == true && quests.medliaCompetitionControlQuest == "complete" && quests.medliaCompetitionControlCompletionStyle == "friendly")
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Neculai the Merchant")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(-17508, 44883, "Person", false, "Neculai the Merchant", {race: "Vardan", faction: "Freynor", personality: "calculated", outfit: ["northernClothing", 0], weapon: ["none", [0.2, 0.5], 0, 0, 0.55], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[], merchant: true, merchandise: [[new Item("coins", false, false), 87], [new Item("varnFiber", false, false), 10], [new Item("walrusLeatherWaterskin", false, false), 2], [new Item("frichFurClothing", false, false), 4], [new Item("sealSkinClothing", false, false), 1], [new Item("mace", false, false), 1], [new Item("vardanianAxe", false, false), 3], [new Item("vardanianAxeDual", false, false), 2], [new Item("vardanianCleaver", false, false), 1], [new Item("vardanianClub", false, false), 1], [new Item("smashStick", false, false), 1], [new Item("rawWolfLiver", false, false), 6], [new Item("blackChainArmour", false, false), 2], [new Item("trollFlesh", false, false), 2], [new Item("wood", false, false), 18], [new Item("freydicSword", false, false), 1], [new Item("frichPelt", false, false), 9], [new Item("rawWalrusFlesh", false, false), 8], [new Item("fireStarter", false, false), 1], [new Item("swampWalkerArmour", false, false), 1]]}));
                    }
                }
                else //generic shopkeeper
                {
                    ArtificialIntelligenceAccess.push(new Unit(-17501, 44860, "Person", false, "Freydic Shopkeeper", {race: "Freynor", faction: "Freynor", personality: "violent", outfit: ["northernClothing", 0], weapon: ["none", [0.45, 0.6], 0, 0, 1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[-14542, 44796]], merchant: true, merchandise: [[new Item("coins", false, false), 25], [new Item("naapridFiber", false, false), 3], [new Item("walrusLeatherWaterskin", false, false), 3], [new Item("rawSealFlesh", false, false), 5], [new Item("sealSkin", false, false), 2], [new Item("walrusHide", false, false), 3], [new Item("rawWalrusFlesh", false, false), 1], [new Item("ironRing", false, false), 1], [new Item("rawWaantiFlesh", false, false), 2], [new Item("wood", false, false), 4], [new Item("fireStarter", false, false), 1]]}));
                }

                    //respawnable humans

                ArtificialIntelligenceAccess.push(new Unit(-19038, 44781, "Soldier", false, "Stambjord Huskarl", {race: "Freynor", faction: "Freynor", con: 20, speed: 1.45, outfit: ["chainArmour", 12], weapon: ["freydicSword", [12, 10], 0, 17, 1.1], ranged: [false, "arrow", 9, 2500, 1, 6, 0, "none", 1.5], rot: Math.PI, patrolStops: 0, patrolLoop: true, route:[[-95, 645], [-95, 645]]}));
                ArtificialIntelligenceAccess.push(new Unit(-19100, 44781, "Soldier", false, "Stambjord Huskarl", {race: "Freynor", faction: "Freynor", con: 22, speed: 1.4, outfit: ["chainArmour", 13], weapon: ["freydicSword", [11, 11], 0, 17, 1.15], ranged: [false, "arrow", 5, 2000, 1, 6, 0, "none", 1.75], rot: Math.PI, patrolStops: 0, patrolLoop: true, route:[[-95, 645], [-95, 645]]}));
                ArtificialIntelligenceAccess.push(new Unit(-19165, 44778, "Soldier", false, "Stambjord Huskarl", {race: "Freynor", faction: "Freynor", con: 19, speed: 1.55, outfit: ["chainArmour", 11], weapon: ["freydicSword", [12, 11], 0, 17, 1.2], ranged: [false, "arrow", 8, 2200, 1, 6, 0, "none", 1.5], rot: Math.PI, patrolStops: 0, patrolLoop: true, route:[[-95, 645], [-95, 645]]}));
                ArtificialIntelligenceAccess.push(new Unit(-19224, 44776, "Soldier", false, "Stambjord Huskarl", {race: "Freynor", faction: "Freynor", con: 21, speed: 1.45, outfit: ["chainArmour", 12], weapon: ["freydicSword", [10, 11], 0, 17, 1.1], ranged: [false, "arrow", 6, 2100, 1, 6, 0, "none", 1.5], rot: Math.PI, patrolStops: 0, patrolLoop: true, route:[[-95, 645], [-95, 645]]}));
                ArtificialIntelligenceAccess.push(new Unit(-19048, 44649, "Soldier", false, "Stambjord Huskarl", {race: "Freynor", faction: "Freynor", con: 20, speed: 1.35, outfit: ["chainArmour", 11], weapon: ["freydicSword", [10, 10], 0, 17, 1], ranged: [false, "arrow", 5, 2000, 1, 5, 0, "none", 1.5], rot: Math.PI, patrolStops: 0, patrolLoop: true, route:[[-95, 645], [-95, 645]]}));
                ArtificialIntelligenceAccess.push(new Unit(-19102, 44647, "Soldier", false, "Stambjord Huskarl", {race: "Freynor", faction: "Freynor", con: 23, speed: 1.5, outfit: ["chainArmour", 12.5], weapon: ["freydicSword", [12, 12], 0, 17, 1.3], ranged: [false, "arrow", 4, 1700, 1, 4, 0, "none", 2], rot: Math.PI, patrolStops: 0, patrolLoop: true, route:[[-95, 645], [-95, 645]]}));
                ArtificialIntelligenceAccess.push(new Unit(-19180, 44645, "Soldier", false, "Stambjord Huskarl", {race: "Freynor", faction: "Freynor", con: 20, speed: 1.45, outfit: ["chainArmour", 12], weapon: ["freydicSword", [12, 10], 0, 17, 1.1], ranged: [false, "arrow", 9, 2600, 1, 7, 0, "none", 1.5], rot: Math.PI, patrolStops: 0, patrolLoop: true, route:[[-95, 645], [-95, 645]]}));
                ArtificialIntelligenceAccess.push(new Unit(-19260, 44645, "Soldier", false, "Stambjord Huskarl", {race: "Freynor", faction: "Freynor", con: 22, speed: 1.4, outfit: ["chainArmour", 11.5], weapon: ["freydicSword", [11, 11], 0, 17, 1.1], ranged: [false, "arrow", 8, 2200, 1, 6, 0, "none", 1.4], rot: Math.PI, patrolStops: 0, patrolLoop: true, route:[[-95, 645], [-95, 645]]}));
                ArtificialIntelligenceAccess.push(new Unit(-19557, 45010, "Soldier", false, "Stambjord Huskarl", {race: "Freynor", faction: "Freynor", con: 20, speed: 1.55, outfit: ["chainArmour", 12], weapon: ["freydicSword", [12, 10], 0, 17, 1.1], ranged: [false, "arrow", 9, 2600, 1, 7, 0, "none", 1.5], rot: Math.PI, patrolStops: 2, patrolLoop: true, route:[[-19557, 45010], [-19557, 45010]]}));
                ArtificialIntelligenceAccess.push(new Unit(-15545, 44929, "Soldier", false, "Stambjord Captain", {race: "Freynor", faction: "Freynor", con: 28, speed: 1, outfit: ["northernPlateArmour", 22], weapon: ["freydicGreatSword", [24, 16], 0, 36, 2.65], ranged: [false, "arrow", 9.5, 2700, 1, 7, 0, "stunI", 1.35], patrolStops: 7, patrolLoop: true, route:[[-15545, 44315], [-14935, 44315], [-14935, 44108], [-15263, 44108], [-15263, 43818], [-15545, 43818], [-15545, 44929]]}));
                ArtificialIntelligenceAccess.push(new Unit(-19028, 45212, "Soldier", false, "Stambjord Soldier", {race: "Freynor", faction: "Freynor", con: 6, speed: 1.50, outfit: ["chainArmour", 7], weapon: ["freydicSword", [9, 8], 0, 16, 1], ranged: [false, "arrow", 7, 2000, 1, 6, 0, "none", 1.50], patrolStops: 4, patrolLoop: true, route:[[-14379, 45212], [-14379, 45024], [-19028, 45024],[-19028, 45212]]}));
                ArtificialIntelligenceAccess.push(new Unit(-15544, 43728, "Soldier", false, "Stambjord Soldier", {race: "Freynor", faction: "Freynor", con: 6, speed: 1.50, outfit: ["chainArmour", 7], weapon: ["freydicSword", [9, 8], 0, 16, 1], ranged: [false, "arrow", 7, 2000, 1, 6, 0, "none", 1.50], patrolStops: 4, patrolLoop: true, route:[[-15544, 42905], [-15770, 42905], [-15770, 43728],[-15544, 43728]]}));
                ArtificialIntelligenceAccess.push(new Unit(-18410, 44468, "Soldier", false, "Stambjord Soldier", {race: "Freynor", faction: "Freynor", con: 7, speed: 1.40, outfit: ["chainArmour", 8], weapon: ["freydicSword", [8, 9], 0, 16, 1], ranged: [false, "arrow", 6, 2000, 1, 5, 0, "none", 1.50], patrolStops: 0, patrolLoop: true, route:[[-18410, 44468]]}));
                ArtificialIntelligenceAccess.push(new Unit(-18266, 44656, "Soldier", false, "Stambjord Soldier", {race: "Freynor", faction: "Freynor", con: 8, speed: 1.30, outfit: ["chainArmour", 8.5], weapon: ["freydicSword", [9, 9], 0, 16, 1.25], ranged: [false, "arrow", 5, 1800, 1, 4, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[-18266, 44656]]}));

                //Venning City
                    //docks
                scenicList.push(new Scenery("floatingBoat", -14825, 46962, 3.5, true));
                scenicList.push(new Scenery("floatingBoat", -15142, 47107, 1/2*Math.PI, true));
                scenicList.push(new Scenery("floatingBoat", -15246, 46661, 0, true));
                scenicList.push(new Scenery("floatingBoat", -14814, 46569, -45/360 * Math.PI, true));
                scenicList.push(new Scenery("floatingBoat", -14831, 46154, -100/360 * Math.PI, true));
                scenicList.push(new Scenery("boat", -18900, 45797, -150/360 * Math.PI, true));
                scenicList.push(new Scenery("floatingBoat", -18445, 46237, -0.02 * Math.PI, true));
                scenicList.push(new Scenery("floatingBoat", -18834, 46704, 0 * Math.PI, true));
                scenicList.push(new Scenery("floatingBoat", -18877, 46893, 60/100 * Math.PI, true));

                scenicList.push(new Scenery("northernFishingSpot", -14720, 46388, 0, true));
                scenicList.push(new Scenery("northernFishingSpot", -14974, 47237, -2, true));
                scenicList.push(new Scenery("northernFishingSpot", -15336, 46820, 1, true));
                scenicList.push(new Scenery("northernFishingSpot", -18328, 46505, 5.5, true));
                scenicList.push(new Scenery("northernFishingSpot", -18986, 47092, -6.25, true));
                scenicList.push(new Scenery("northernFishingSpot", -18289, 47205, 3.6, true));
                        //shops at the docks district
                            //Harborshop
                scenicList.push(new Scenery("freydicBuilding8", -14591, 44814, 0, true));
                scenicList.push(new Scenery("sign", -14525, 44884, Math.PI - 0.15, 3, "The Harbor Shop"));
                scenicList.push(new Scenery("boat", -14757, 44792, 1.2, true));
                scenicList.push(new Scenery("boat", -14731, 44863, -0.05, true));
                scenicList.push(new Scenery("crate", -14640, 44782, 2.8/4 * Math.PI, 2, [1.3]));
                            //Fish Shop
                scenicList.push(new Scenery("freydicBuilding8", -17883, 44873, 0, true));
                scenicList.push(new Scenery("sign", -17820, 44945, Math.PI - 0.15, 3, "Fish Shop"));

                            //Necolai's shop / generic merchandise shop
                scenicList.push(new Scenery("freydicBuilding8", -17513, 44880, 0, true));
                if (uniqueChars.neculaiLDS == true && quests.medliaCompetitionControlQuest == "complete" && quests.medliaCompetitionControlCompletionStyle == "friendly")
                {
                    scenicList.push(new Scenery("sign", -17453, 44951, Math.PI - 0.15, 3, "Necolai's Everything Store"));
                    scenicList.push(new Scenery("crate", -17449, 44898, 1.11/4 * Math.PI, 1, [1.45]));
                }
                else
                {
                    scenicList.push(new Scenery("sign", -17453, 44951, Math.PI - 0.15, 3, "Beachfront General Store"));
                    scenicList.push(new Scenery("crate", -17571, 44901, 1.4/4 * Math.PI, 2, [1.15]));
                }
                            //jarls longhouse
                scenicList.push(new Scenery("freydicBuildingHalveR", -19380, 44722, 10, true));
                scenicList.push(new Scenery("freydicBuildingHalveL", -19000, 44722, 0, true));
                scenicList.push(new Scenery("sign", -19413, 44967, Math.PI, 3, "Stambjord Longhouse"));
                scenicList.push(new Scenery("hearth", -18803, 44515, 4, "lit"));
                scenicList.push(new Scenery("hearth", -18807, 44917, 4 + 1/2 * Math.PI, "lit"));
                scenicList.push(new Scenery("item", -18873, 44921, 0, "freynor", ["wood", 3, -17]));
                scenicList.push(new Scenery("item", -18796, 44566, 0, "freynor", ["wood", 4, -23]));
                scenicList.push(new Scenery("longTable", -19170, 44716, 0, false));
                scenicList.push(new Scenery("stumpStool", -18934, 44715, 5, 2));
                                //the jarl feasts about 2/3 of the time
                scenicList.push(new Scenery("item", -19032, 44710, 0, "freynor", ["cloimidMeat", 1, -75]));
                scenicList.push(new Scenery("item", -18967, 44731, 0, "freynor", ["crabChowder", 1, -40]));
                scenicList.push(new Scenery("item", -18964, 44702, 0, "freynor", ["butteredHarstBread", 1, -30]));
                scenicList.push(new Scenery("item", -18959, 44720, 0, "freynor", ["butteredCrab", 1, -40]));
                scenicList.push(new Scenery("item", -18978, 44677, 0, "freynor", ["pintGlass", 1, -5]));
                scenicList.push(new Scenery("item", -19016, 44739, 0, "freynor", ["pintGlass", 1, -5]));
                scenicList.push(new Scenery("item", -18963, 44676, 0, "freynor", ["mead", 1, -25]));
                scenicList.push(new Scenery("item", -18975, 44753, 0, "freynor", ["mead", 1, -25]));
                scenicList.push(new Scenery("item", -18960, 44748, 0, "freynor", ["mead", 1, -25]));
                scenicList.push(new Scenery("item", -19034, 44675, 0, "freynor", ["woodenBowl", 1, -5]));
                scenicList.push(new Scenery("item", -19037, 44754, 0, "freynor", ["butteredCrab", 1, -30]));
                scenicList.push(new Scenery("item", -19091, 44714, 0, "freynor", ["walrusMeat", 1, -70]));
                scenicList.push(new Scenery("item", -19107, 44704, 0, "freynor", ["walrusMeat", 1, -70]));
                scenicList.push(new Scenery("item", -19238, 44711, 0, "freynor", ["dryKelp", 2, -10]));
                scenicList.push(new Scenery("item", -19248, 44720, 0, "freynor", ["crabClaw", 1, -80]));
                scenicList.push(new Scenery("item", -19256, 44704, 0, "freynor", ["crabClaw", 1, -80]));
                scenicList.push(new Scenery("item", -19160, 44713, 0, "freynor", ["waantiMeat", 1, -80]));
                scenicList.push(new Scenery("item", -19179, 44706, 0, "freynor", ["waantiMeat", 1, -80]));
                scenicList.push(new Scenery("item", -19057, 44679, 0, "freynor", ["mead", 1, -20]));
                scenicList.push(new Scenery("item", -19329, 44695, 0, "freynor", ["tyrniBerries", 2, -14]));
                scenicList.push(new Scenery("item", -19305, 44723, 0, "freynor", ["tyrniBerries", 2, -14]));
                scenicList.push(new Scenery("item", -19338, 44713, 0, "freynor", ["tyrniBerries", 2, -14]));
                scenicList.push(new Scenery("item", -19323, 44715, 0, "freynor", ["thab", 1, -90]));
                scenicList.push(new Scenery("item", -19209, 44714, 0, "freynor", ["bushkaBerries", 2, -12]));
                scenicList.push(new Scenery("item", -19207, 44714, 0, "freynor", ["bushkaBerries", 2, -12]));
                scenicList.push(new Scenery("item", -19212, 44715, 0, "freynor", ["bushkaBerries", 2, -12]));
                scenicList.push(new Scenery("item", -19213, 44704, 0, "freynor", ["crabMeat", 3, -45]));
                scenicList.push(new Scenery("item", -19213, 44704, 0, "freynor", ["waantiButter", 1, -31]));
                scenicList.push(new Scenery("item", -19100, 44678, 0, "freynor", ["crabChowder", 1, -35]));
                scenicList.push(new Scenery("item", -19099, 44749, 0, "freynor", ["crabChowder", 1, -35]));
                scenicList.push(new Scenery("item", -19081, 44744, 0, "freynor", ["pintGlass", 1, -5]));
                scenicList.push(new Scenery("item", -19131, 44685, 0, "freynor", ["pintGlass", 1, -5]));
                scenicList.push(new Scenery("item", -19170, 44746, 0, "freynor", ["butteredCrab", 1, -30]));
                scenicList.push(new Scenery("item", -19157, 44736, 0, "freynor", ["mead", 1, -20]));
                scenicList.push(new Scenery("item", -19191, 44685, 0, "freynor", ["mead", 1, -20]));
                scenicList.push(new Scenery("item", -19172, 44674, 0, "freynor", ["crabChowder", 1, -35]));
                scenicList.push(new Scenery("item", -19246, 44677, 0, "freynor", ["butteredCrab", 1, -30]));
                scenicList.push(new Scenery("item", -19230, 44747, 0, "freynor", ["butteredCrab", 1, -30]));
                scenicList.push(new Scenery("item", -19192, 44726, 0, "freynor", ["pintGlass", 1, -5]));
                scenicList.push(new Scenery("item", -19202, 44741, 0, "freynor", ["mead", 1, -20]));
                scenicList.push(new Scenery("item", -19276, 44689, 0, "freynor", ["mead", 1, -20]));
                scenicList.push(new Scenery("item", -19264, 44676, 0, "freynor", ["mead", 1, -20]));
                scenicList.push(new Scenery("woodenBench", -19063, 44781, -0.025, 2));
                scenicList.push(new Scenery("woodenBench", -19073, 44646, 0.05, 2));
                scenicList.push(new Scenery("woodenBench", -19217, 44645, -0.03, 2));
                scenicList.push(new Scenery("woodenBench", -19205, 44780, -0.015, 2));
                //to block the doorway that should not be there...
                scenicList.push(new Scenery("woodenBench", -18899, 44505, -0.015, 2));
                scenicList.push(new Scenery("woodenBench", -18899, 44494, -0.015, 2));
                scenicList.push(new Scenery("item", -18894, 44509, 0, "freynor", ["freydicSpear", 1, -50]));
                scenicList.push(new Scenery("item", -18928, 44508, 0, "freynor", ["walrusTusks", 1, -50]));
                scenicList.push(new Scenery("item", -18870, 44505, 0, "freynor", ["coins", 200, -150]));
                scenicList.push(new Scenery("item", -18870, 44505, 0, "freynor", ["dustPouch", 1, -50]));
                scenicList.push(new Scenery("barrel", -18794, 44740, 0, 1));
                scenicList.push(new Scenery("barrel", -18794, 44777, 0.02, 1));
                        //barracks
                scenicList.push(new Scenery("freydicBuilding7", -18340, 44623, 0, true));
                scenicList.push(new Scenery("sign", -18383, 44868, 1 * Math.PI, 3, "Venning City Barracks"));
                scenicList.push(new Scenery("bed", -18155, 44478, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", -18155, 44578, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", -18155, 44678, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", -18155, 44778, 0 * Math.PI, false));
                scenicList.push(new Scenery("woodenBench", -18533, 44744, 1/2 * Math.PI, 0));
                scenicList.push(new Scenery("woodenBench", -18514, 44744, 1/2 * Math.PI, 0));
                scenicList.push(new Scenery("woodenBench", -18495, 44744, 1/2 * Math.PI, 0));
                scenicList.push(new Scenery("item", -18504, 44786, 0, "freynor", ["pintGlass", 1, -2]));
                scenicList.push(new Scenery("item", -18492, 44744, 0, "freynor", ["mead", 1, -8]));
                scenicList.push(new Scenery("item", -18509, 44706, 0, "freynor", ["mead", 1, -8]));
                scenicList.push(new Scenery("item", -18494, 44721, 0, "freynor", ["sealMeat", 1, -9]));
                scenicList.push(new Scenery("item", -18494, 44769, 0, "freynor", ["sealMeat", 1, -9]));
                scenicList.push(new Scenery("stumpStoolSml", -18467, 44702, 8.1, 0));
                scenicList.push(new Scenery("stumpStoolSml", -18471, 44760, 1.3, 0));
                scenicList.push(new Scenery("stumpStoolSml", -18510, 44823, 7.4, 0));

                if (player.raceName != "Freynor" || player.title != "Royalty")
                {
                    scenicList.push(new Scenery("item", -18528, 44749, 0, "freynor", ["freydicSword", 1, -55]));
                    scenicList.push(new Scenery("crate", -18288, 44448, 1.8/4 * Math.PI, 3, [1.2, "venningBarracksCrate1", 3, [[new Item("freydicSword", false, false), 8], [new Item("northernPlateArmour", false, false), 1], [new Item("chainArmour", false, false), 2]], "freynor", -500]));
                }
                else
                {
                    scenicList.push(new Scenery("item", -18528, 44749, 0, "freynor", ["freydicSword", 1, 0]));
                    scenicList.push(new Scenery("crate", -18288, 44448, 1.8/4 * Math.PI, 3, [1.2, "venningBarracksCrate1", 3, [[new Item("freydicSword", false, false), 8], [new Item("northernPlateArmour", false, false), 1], [new Item("chainArmour", false, false), 2]], "freynor", 0]));
                }
                            //city prison
                scenicList.push(new Scenery("trapdoor", -18509, 44450, 0 * Math.PI, [483, 45], "venningCityPrison"));
                    //center
                        //inn
                scenicList.push(new Scenery("freydicBuilding1", -15192, 44627, 0, true));
                scenicList.push(new Scenery("sign", -15022, 44379, 0 * Math.PI, 3, "The Salty Gullet - Inn"));
                scenicList.push(new Scenery("barrel", -14990, 44825, -5, 1));
                scenicList.push(new Scenery("bartop", -15033, 44777, 0, true));
                scenicList.push(new Scenery("bed", -15219, 44426, 1/2 * Math.PI, false));
                scenicList.push(new Scenery("smallTable", -15308, 44570, 0 * Math.PI, false));
                scenicList.push(new Scenery("stumpStoolSml", -15370, 44576, -2.214, 2));
                scenicList.push(new Scenery("smallTable", -15239, 44645, 0.035 * Math.PI, false));
                scenicList.push(new Scenery("stumpStoolSml", -15185, 44639, 4.1, 2));
                scenicList.push(new Scenery("bed", -15378, 44787, 0 * Math.PI, false));
                scenicList.push(new Scenery("hearth", -14983, 44596, 3.14159 / -2, "lit"));
                scenicList.push(new Scenery("smallTable", -15142, 44606, -0.01 * Math.PI, false));
                scenicList.push(new Scenery("stumpStoolSml", -15131, 44556, 6, 2));
                scenicList.push(new Scenery("stumpStoolSml", -15133, 44657, 6.5, 2));
                scenicList.push(new Scenery("smallTable", -14989, 44422, 0.0125 * Math.PI, false));
                scenicList.push(new Scenery("stumpStoolSml", -14987, 44471, 3.7, 2));
                scenicList.push(new Scenery("stumpStoolSml", -15033, 44426, 7.2, 2));
                        //well
                scenicList.push(new Scenery("well", -14640, 44562, 7, true));


                change = "n4e2";
            }
        }
        else if (region == "w1") //Y > 6290 && Y < 32370
        {
            if (change != "w1")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //Un Frich Periférico
                ArtificialIntelligenceAccess.push(new Unit(7716, 3482, "Frich", false, "Alfer"));
                ArtificialIntelligenceAccess.push(new Unit(7530, -685, "Frich", true, "Endle"));

                //High-Hill Howlers
                ArtificialIntelligenceAccess.push(new Unit(15517, 5728, "GreyWolf", false, "Clawder"));
                ArtificialIntelligenceAccess.push(new Unit(15296, 5951, "GreyWolf", false, "Claudia"));
                ArtificialIntelligenceAccess.push(new Unit(15404, 6273, "GreyWolf", false, "Caidlin"));
                ArtificialIntelligenceAccess.push(new Unit(12764, 5055, "GreyWolf", false, "Cal"));
                ArtificialIntelligenceAccess.push(new Unit(9742, -2615, "GreyWolf", false, "Claw"));
                ArtificialIntelligenceAccess.push(new Unit(9990, -2765, "GreyWolf", false, "Walca"));
                ArtificialIntelligenceAccess.push(new Unit(14650, 5353, "GreyWolf", false, "Calca"));
                ArtificialIntelligenceAccess.push(new Unit(12346, -3157, "GreyWolf", false, "Calcor"));
                ArtificialIntelligenceAccess.push(new Unit(10988, -2291, "GreyWolf", false, "Cor"));

                //The friches of the rocky west
                ArtificialIntelligenceAccess.push(new Unit(8307, 4918, "MountainFrich", "massive", "Fruyuk"));
                ArtificialIntelligenceAccess.push(new Unit(11253, -790, "MountainFrich", true, "Farayiu"));
                ArtificialIntelligenceAccess.push(new Unit(7504, 1592, "MountainFrich", false, "Fama"));
                ArtificialIntelligenceAccess.push(new Unit(16403, 4633, "MountainFrich", false, "Famo"));
                ArtificialIntelligenceAccess.push(new Unit(9508, 4287, "MountainFrich", false, "Fameh"));
                ArtificialIntelligenceAccess.push(new Unit(9261, 871, "MountainFrich", false, "Fomih"));
                ArtificialIntelligenceAccess.push(new Unit(9126, -3115, "MountainFrich", true, "Fara"));
                ArtificialIntelligenceAccess.push(new Unit(14655, 2529, "MountainFrich", false, "Famal"));
                ArtificialIntelligenceAccess.push(new Unit(14332, 2614, "MountainFrich", false, "Fomal"));
                ArtificialIntelligenceAccess.push(new Unit(8958, -1322, "MountainFrich", false, "Fomol"));
                ArtificialIntelligenceAccess.push(new Unit(12865, 3133, "MountainFrich", "massive", "Kruff"));
                ArtificialIntelligenceAccess.push(new Unit(10288, 1640, "MountainFrich", true, "Kuy"));
                ArtificialIntelligenceAccess.push(new Unit(11150, 796, "MountainFrich", false, "Kolmuyka"));

                //berulns in the west
                ArtificialIntelligenceAccess.push(new Unit(15918, -1709, "Beruln", false, "Kagim"));
                ArtificialIntelligenceAccess.push(new Unit(14705, -228, "Beruln", true, "Korgg"));
                ArtificialIntelligenceAccess.push(new Unit(14996, -2974, "Beruln", false, "Kormok"));

                //olkrin of the rocklands
                //ArtificialIntelligenceAccess.push(new Unit(8199, 2310, "Olkrin", false, "Efaldor"));

                //Rocky Rock Monsters of the Rocky Rock West
                ArtificialIntelligenceAccess.push(new Unit(10752, 4668, "StoneGolem", false, "Orefal"));
                ArtificialIntelligenceAccess.push(new Unit(16174, -1500, "StoneGolem", false, "Orefaw"));
                ArtificialIntelligenceAccess.push(new Unit(12473, 2171, "StoneGolem", "baby", "Foge"));
                ArtificialIntelligenceAccess.push(new Unit(15833, 2190, "StoneGolem", true, "stoner"));
                ArtificialIntelligenceAccess.push(new Unit(8980, 1303, "StoneGolem", "baby", "Folg"));
                ArtificialIntelligenceAccess.push(new Unit(13738, -466, "StoneGolem", false, "Fawm"));
                ArtificialIntelligenceAccess.push(new Unit(10132, -1992, "StoneGolem", "baby", "Folgem"));
                ArtificialIntelligenceAccess.push(new Unit(15272, 2811, "StoneGolem", true, "Gilgum"));



                //Ores
                scenicList.push(new Scenery("stone", 14572 , -1949, 0, 3, 1));
                scenicList.push(new Scenery("stone", 16197 , -1257, -1, 2, 3));
                scenicList.push(new Scenery("darkStone", 11323 , 676, 1.37, 2.5, 2));
                scenicList.push(new Scenery("stone", 13570 , -752, 5.213, 1.5, 2));
                scenicList.push(new Scenery("ashStone", 16223 , -3079, 2.345678910, 1, 1));
                scenicList.push(new Scenery("stone", 13693 , 346, -1.5, 4, 3));
                scenicList.push(new Scenery("jvostran", 11944 , 4617, 7, 1, 1));
                scenicList.push(new Scenery("darkStone", 14892 , 4138, -3.4, 1.5, 3));
                scenicList.push(new Scenery("jvostran", 14074 , 5728, 5.6, 2, 2));
                scenicList.push(new Scenery("ashStone", 16010 , 5129, 3, 3.5, 2));
                scenicList.push(new Scenery("stone", 10582 , 4635, 1, 1, 1));
                scenicList.push(new Scenery("stone", 10722 , 4370, -8, 1.5, 2));
                scenicList.push(new Scenery("stone", 9031 , 1374, -2, 0.5, 3));
                scenicList.push(new Scenery("darkStone", 8458 , 1980, 4.47, 4, 1));
                scenicList.push(new Scenery("darkStone", 13894 , 970, 2.3, 1.5, 1));
                scenicList.push(new Scenery("stone", 15468 , 223, 5, 2, 3));
                scenicList.push(new Scenery("stone", 15614 , 322, 6, 1, 2));
                scenicList.push(new Scenery("stone", 16151 , 130, -2.5, 3.5, 1));
                scenicList.push(new Scenery("stone", 8300 , 941, 4.444, 2.5, 1));
                scenicList.push(new Scenery("darkStone", 16208 , 4062, 12.12, 1, 3));
                scenicList.push(new Scenery("ashStone", 10587 , 5548, -3.14159, 2, 2));
                scenicList.push(new Scenery("darkStone", 10852 , 4617, -14, 0.5, 1));
                scenicList.push(new Scenery("darkStone", 12229 , 2802, -16.88, 1.5, 1));
                scenicList.push(new Scenery("jvostran", 11408 , -2348, 14.64, 1, 3));
                scenicList.push(new Scenery("stone", 13718 , -2521, 6.969, 4, 1));
                scenicList.push(new Scenery("darkStone", 13060 , -1400, -11, 2.5, 2));
                scenicList.push(new Scenery("stone", 13409 , 1943, 2.969, 1.5, 3));
                scenicList.push(new Scenery("ashStone", 11234 , 1726, -4.45, 0.5, 1));
                scenicList.push(new Scenery("stone", 9380 , 312, 3.757, 1, 2));
                scenicList.push(new Scenery("stone", 10199 , -2776, 0, 2, 1));
                scenicList.push(new Scenery("stone", 13224 , 2702, 0.12, 1, 2));

                //Plants
                scenicList.push(new Scenery("haeflowerPlant", 15185, 4442, 4, true));
                scenicList.push(new Scenery("haeflowerPlant", 11706, -656, 2.333, true));
                scenicList.push(new Scenery("haeflowerPlant", 14185, 2966, -6.51245, true));
                scenicList.push(new Scenery("haeflowerPlant", 9214, 1615, -8.9, true));
                scenicList.push(new Scenery("haeflowerPlant", 14638, 1229, 9, true));

                //scenes
                    //"Don't wander alone..." Gayden
                scenicList.push(new Scenery("skeleton", 14053, -1661, 3.45, 1.55));
                scenicList.push(new Scenery("campFire", 13349, -1891, 1.2/4 * Math.PI, true));
                if (quests.lonerGuyStash)
                {
                    quests.lonerGuyStash = false;

                    worldItems.push([new Item("lonersJournal", 14023, -1673), 1]);
                    worldItems.push([new Item("freydicSword", 13903, -1976), 1]);
                    worldItems.push([new Item("frichPelt", 13458, -1787), 4]);
                    worldItems.push([new Item("tent", 13220, -1963), 1]);
                    worldItems.push([new Item("wizardGown", 14542, 3836), 1]);
                    worldItems.push([new Item("frostWind", 14574, 3832), 1]);
                }
                    //epic duel between mage and rock golem... golem won.
                scenicList.push(new Scenery("skeleton", 14542, 3815, -1 + 1/2 * Math.PI, 1.6));
                scenicList.push(new Scenery("darkStoneOver", 14542, 3815, 15.4, 1.5, 3));

                change = "w1";
            }
        }
        else if (region == "w2")
        {
            if (change != "w2")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //High-Hill Howlers
                ArtificialIntelligenceAccess.push(new Unit(18276, -2764, "GreyWolf", false, "Claumous"));
                ArtificialIntelligenceAccess.push(new Unit(19236, -1866, "GreyWolf", false, "Claudior"));
                ArtificialIntelligenceAccess.push(new Unit(19230, -1900, "GreyWolf", false, "Clondala"));
                ArtificialIntelligenceAccess.push(new Unit(19705, -1755, "GreyWolf", false, "Clorala"));
                ArtificialIntelligenceAccess.push(new Unit(19486, -1458, "GreyWolf", false, "Rufus"));
                ArtificialIntelligenceAccess.push(new Unit(19406, -2449, "GreyWolf", false, "Rulfor"));
                ArtificialIntelligenceAccess.push(new Unit(25105, -2221, "GreyWolf", false, "Cala"));
                ArtificialIntelligenceAccess.push(new Unit(25110, -1962, "GreyWolf", false, "Dolorian"));
                ArtificialIntelligenceAccess.push(new Unit(24684, -2325, "GreyWolf", false, "Rulthoul"));

                //Nogs (a dumb variety of goblins)
                ArtificialIntelligenceAccess.push(new Unit(23944, 2486, "Nog", true, "Buckle-Snorp"));
                ArtificialIntelligenceAccess.push(new Unit(23833, 2378, "Nog", true, "Bark-Gropp"));
                ArtificialIntelligenceAccess.push(new Unit(25689, 3165, "Nog", false, "Hemethelmesh"));
                ArtificialIntelligenceAccess.push(new Unit(21939, 4206, "Nog", true, "Biggle-Gromber"));
                ArtificialIntelligenceAccess.push(new Unit(20856, 2738, "Nog", false, "Hegladesh"));
                ArtificialIntelligenceAccess.push(new Unit(26502, -2251, "Nog", false, "Heg-Lagersh"));
                ArtificialIntelligenceAccess.push(new Unit(19869, 3730, "Nog", true, "Kadder-Spitsack"));
                ArtificialIntelligenceAccess.push(new Unit(19540, 3567, "Nog", false, "Dek-Batterbash"));
                ArtificialIntelligenceAccess.push(new Unit(18981, 4974, "Nog", false, "Cof-bloodbrane"));
                ArtificialIntelligenceAccess.push(new Unit(26691, -3269, "Nog", false, "Cottlecroch-bloodhumper"));
                ArtificialIntelligenceAccess.push(new Unit(25743, 1232, "Nog", false, "Cutlove-Fleshbang"));
                ArtificialIntelligenceAccess.push(new Unit(27253, -1968, "Nog", true, "Shindig-Toestomper"));
                ArtificialIntelligenceAccess.push(new Unit(27038, -1573, "Nog", false, "Scarbrane-Fleshbane"));

                //The friches of the rocky west
                ArtificialIntelligenceAccess.push(new Unit(17949, 5536, "MountainFrich", false, "Froikel"));
                ArtificialIntelligenceAccess.push(new Unit(18201, 5407, "MountainFrich", false, "Fralker"));
                ArtificialIntelligenceAccess.push(new Unit(26230, 6004, "MountainFrich", true, "Frolk"));
                ArtificialIntelligenceAccess.push(new Unit(22803, -262, "MountainFrich", true, "Froikon"));
                ArtificialIntelligenceAccess.push(new Unit(22331, -409, "MountainFrich", false, "Fralkir"));
                ArtificialIntelligenceAccess.push(new Unit(23243, -784, "MountainFrich", false, "Fralkon"));
                ArtificialIntelligenceAccess.push(new Unit(26759, 2664, "MountainFrich", false, "Froikek"));
                ArtificialIntelligenceAccess.push(new Unit(26977, 2871, "MountainFrich", false, "Fralkek"));
                ArtificialIntelligenceAccess.push(new Unit(26924, 2110, "MountainFrich", false, "Fralkirk"));
                ArtificialIntelligenceAccess.push(new Unit(26551, 2175, "MountainFrich", false, "Fralkonk"));
                ArtificialIntelligenceAccess.push(new Unit(21828, -3113, "MountainFrich", "massive", "Frakalholff"));
                ArtificialIntelligenceAccess.push(new Unit(24716, 1667, "MountainFrich", false, "Froiked"));
                ArtificialIntelligenceAccess.push(new Unit(17476, 453, "MountainFrich", false, "Froket"));

                //berulns in the west
                ArtificialIntelligenceAccess.push(new Unit(20729, 5514, "Beruln", true, "Migm"));
                ArtificialIntelligenceAccess.push(new Unit(21509, 6131, "Beruln", true, "Mavrim"));
                ArtificialIntelligenceAccess.push(new Unit(25688, -677, "Beruln", false, "Bajgerr"));

                //olkrin of the rocklands
                var rndNum = Math.random();
                if (rndNum < 0.15 && change == "s1w2" || rndNum < 0.15 && change == "w1")
                {
                    ArtificialIntelligenceAccess.push(new Unit(25342, 4764, "Olkrin", false, "Efaldor"));
                    ArtificialIntelligenceAccess.push(new Unit(26545, 3822, "Olkrin", "baby", "Athalkrond"));
                    ArtificialIntelligenceAccess.push(new Unit(23552, -1702, "Olkrin", "baby", "Ilidrith"));
                }
                else if (rndNum < 0.4)
                {
                    ArtificialIntelligenceAccess.push(new Unit(25342, 4764, "Beruln", true, "Ojoscarr"));
                    ArtificialIntelligenceAccess.push(new Unit(26545, 3822, "Beruln", false, "Ilmane"));
                }
                else if (rndNum < 0.7)
                {
                    ArtificialIntelligenceAccess.push(new Unit(25345, 4765, "GreyWolf", true, "Calrorus"));
                    ArtificialIntelligenceAccess.push(new Unit(25042, 4750, "GreyWolf", false, "Rork"));
                    ArtificialIntelligenceAccess.push(new Unit(25242, 4864, "GreyWolf", false, "Ril"));
                    ArtificialIntelligenceAccess.push(new Unit(25125, 4664, "GreyWolf", false, "Calila"));
                    ArtificialIntelligenceAccess.push(new Unit(25442, 4514, "GreyWolf", false, "Dorla"));
                    ArtificialIntelligenceAccess.push(new Unit(25242, 4680, "GreyWolf", false, "Rulthil"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(25345, 4765, "Nog", true, "Ips"));
                    ArtificialIntelligenceAccess.push(new Unit(25042, 4750, "Nog", true, "Squeak"));
                    ArtificialIntelligenceAccess.push(new Unit(25242, 4864, "Nog", false, "Chillar"));
                    ArtificialIntelligenceAccess.push(new Unit(25125, 4664, "Nog", false, "Grito"));
                    ArtificialIntelligenceAccess.push(new Unit(25442, 4514, "Nog", false, "Cron"));
                    ArtificialIntelligenceAccess.push(new Unit(25242, 4680, "Nog", true, "Buth"));
                }

                //Rocky Rock Monsters of the Rocky Rock West
                ArtificialIntelligenceAccess.push(new Unit(21240, -1705, "StoneGolem", "giant", "Gorundarumn the Trembler"));
                ArtificialIntelligenceAccess.push(new Unit(24850, 156, "StoneGolem", true, "Tormukk the Rock"));
                ArtificialIntelligenceAccess.push(new Unit(24153, 1123, "StoneGolem", false, "Ilif the Tremor"));
                ArtificialIntelligenceAccess.push(new Unit(25750, 960, "StoneGolem", "baby", "Tilf the Pebble-Tosser"));
                ArtificialIntelligenceAccess.push(new Unit(24600, 1656, "StoneGolem", "baby", "Galt the Shale-Pincher"));

                //Ores
                scenicList.push(new Scenery("jvostran", 20116 , -740, -1, 0.5, 1));
                scenicList.push(new Scenery("darkStone", 23174 , 4056, -1, 1, 1));
                scenicList.push(new Scenery("darkStone", 21245 , 944, 2, 1.5, 2));
                scenicList.push(new Scenery("darkStone", 25711 , 2496, 3, 2.5, 1));
                scenicList.push(new Scenery("darkStone", 23795 , 1029, 0, 1.5, 3));
                scenicList.push(new Scenery("darkStone", 23902 , 5830, 5.5555, 1, 2));
                scenicList.push(new Scenery("ashStone", 19759 , 1744, -9.5, 2, 2));
                scenicList.push(new Scenery("ashStone", 21270 , 4218, -0.6, 1, 3));
                scenicList.push(new Scenery("ashStone", 19616 , 2958, 0.5, 1, 2));
                scenicList.push(new Scenery("ashStone", 21847 , -2560, 10, 1.5, 2));
                scenicList.push(new Scenery("ashStone", 26080 ,5164, 11, 1, 1));
                scenicList.push(new Scenery("ashStone", 26363 ,3601, -13, 0.5, 1));
                scenicList.push(new Scenery("stone", 18302 , 5943, 19, 0.5, 1));
                scenicList.push(new Scenery("stone", 25388 , 584, 0, 1, 3));
                scenicList.push(new Scenery("stone", 22281 , 2813, 2.2, 1.5, 1));
                scenicList.push(new Scenery("stone", 20875 , 2548, -5, 2, 2));
                scenicList.push(new Scenery("stone", 20971 , 5504, -6.8, 3, 3));
                scenicList.push(new Scenery("stone", 25986 , 2148, 8, 0.5, 1));
                scenicList.push(new Scenery("stone", 23351 , -186, 0, 1, 1));
                scenicList.push(new Scenery("stone", 25089 , 2613, 0.1, 1, 2));
                scenicList.push(new Scenery("stone", 21803 , 5103, -4, 1, 1));
                scenicList.push(new Scenery("stone", 24354 , 3504, -2.45, 2, 1));
                scenicList.push(new Scenery("stone", 25850, 960, 2.45, 1.5, 3));
                scenicList.push(new Scenery("stone", 18215, 3084, 3.5, 3.5, 3));
                scenicList.push(new Scenery("stone", 18826 , -1000, 0, 2, 2));

                //Plants
                scenicList.push(new Scenery("haeflowerPlant", 18910, -1741, -3, true));
                scenicList.push(new Scenery("haeflowerPlant", 23376, 2139, -1.5, true));
                scenicList.push(new Scenery("haeflowerPlant", 23197, -1731, 0.7, true));

                change = "w2";
            }
        }
        else if (region == "w3")
        {
            if (change != "w3")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //High-Hill Howlers
                ArtificialIntelligenceAccess.push(new Unit(32553, 15, "GreyWolf", false, "Clowder"));
                ArtificialIntelligenceAccess.push(new Unit(33567, 622, "GreyWolf", true, "Chauwder"));
                ArtificialIntelligenceAccess.push(new Unit(32909, 678, "GreyWolf", false, "Choudah"));
                ArtificialIntelligenceAccess.push(new Unit(33142, 71, "GreyWolf", false, "Choular"));
                ArtificialIntelligenceAccess.push(new Unit(33060, -334, "GreyWolf", false, "Chorg"));
                ArtificialIntelligenceAccess.push(new Unit(33754, 5, "GreyWolf", false, "Chalgra"));
                ArtificialIntelligenceAccess.push(new Unit(34112, 351, "GreyWolf", false, "Choumol"));
                ArtificialIntelligenceAccess.push(new Unit(34191, 887, "GreyWolf", false, "Choukama"));
                ArtificialIntelligenceAccess.push(new Unit(33368, 1060, "GreyWolf", false, "Chowck"));

                //Nogs (a dumb variety of goblins)
                ArtificialIntelligenceAccess.push(new Unit(28495, 6199, "Nog", false, "Backle-Snarp"));
                ArtificialIntelligenceAccess.push(new Unit(29622, 2479, "Nog", true, "Boogle-Snirp"));
                ArtificialIntelligenceAccess.push(new Unit(29654, 2389, "Nog", false, "Boggle-Snurp"));
                ArtificialIntelligenceAccess.push(new Unit(28493, 2492, "Nog", false, "Boggle-Snarp"));
                ArtificialIntelligenceAccess.push(new Unit(33450, -2347, "Nog", false, "Baggle-Snirp"));
                ArtificialIntelligenceAccess.push(new Unit(33274, -2475, "Nog", false, "Biggle-Snorp"));
                ArtificialIntelligenceAccess.push(new Unit(33471, -2485, "Nog", false, "Beggle-Snerp"));
                ArtificialIntelligenceAccess.push(new Unit(33862, -3122, "Nog", true, "Buggle-Snirk"));
                ArtificialIntelligenceAccess.push(new Unit(33025, -2855, "Nog", false, "Boggle-Snark"));
                ArtificialIntelligenceAccess.push(new Unit(34923, -1777, "Nog", false, "Biggle-Snork"));
                ArtificialIntelligenceAccess.push(new Unit(36146, -2395, "Nog", true, "Riggle-Prok"));
                ArtificialIntelligenceAccess.push(new Unit(36817, -2763, "Nog", true, "Roggle-Prak"));
                ArtificialIntelligenceAccess.push(new Unit(36802, -2608, "Nog", false, "Raggle-Prik"));
                ArtificialIntelligenceAccess.push(new Unit(35716, 469, "Nog", false, "Riggly-Palk"));
                ArtificialIntelligenceAccess.push(new Unit(35472, 464, "Nog", true, "Roggly-Pilk"));
                ArtificialIntelligenceAccess.push(new Unit(27848, 1582, "Nog", true, "Reggly-Polk"));
                ArtificialIntelligenceAccess.push(new Unit(27959, -2856, "Nog", false, "Ralgy-Pik"));

                if (change != "sagesCache")
                {
                    ArtificialIntelligenceAccess.push(new Unit(36177, 1615, "Nog", false, "Shaggle-Snelk"));
                    ArtificialIntelligenceAccess.push(new Unit(35998, 1434, "Nog", false, "Chiggler-Parnik"));
                    ArtificialIntelligenceAccess.push(new Unit(36018, 1208, "Nog", true, "Rigry-Pook"));
                    ArtificialIntelligenceAccess.push(new Unit(35793, 1254, "Nog", true, "Rogly-Preik"));
                    ArtificialIntelligenceAccess.push(new Unit(35783, 1093, "Nog", false, "Raggly-Prolk"));
                    ArtificialIntelligenceAccess.push(new Unit(35964, 573, "Nog", false, "Riggly-Palk"));
                }

                //The friches of the rocky west
                ArtificialIntelligenceAccess.push(new Unit(29626, 5521, "MountainFrich", false, "Frayuk"));
                ArtificialIntelligenceAccess.push(new Unit(29760, 5431, "MountainFrich", false, "Frayak"));
                ArtificialIntelligenceAccess.push(new Unit(29427, 3797, "MountainFrich", true, "Rayak"));
                ArtificialIntelligenceAccess.push(new Unit(30527, 4339, "MountainFrich", false, "Frahak"));
                ArtificialIntelligenceAccess.push(new Unit(30725, 3323, "MountainFrich", false, "Frohak"));
                ArtificialIntelligenceAccess.push(new Unit(30823, 3246, "MountainFrich", false, "Frahok"));
                ArtificialIntelligenceAccess.push(new Unit(30707, 3061, "MountainFrich", false, "Frohok"));
                ArtificialIntelligenceAccess.push(new Unit(31458, 2838, "MountainFrich", false, "Frahook"));
                ArtificialIntelligenceAccess.push(new Unit(31555, -2489, "MountainFrich", false, "Frihaak"));
                ArtificialIntelligenceAccess.push(new Unit(29425, -2555, "MountainFrich", false, "Freehaawk"));
                ArtificialIntelligenceAccess.push(new Unit(36020, -51, "MountainFrich", false, "Freehok"));
                ArtificialIntelligenceAccess.push(new Unit(36201, -197, "MountainFrich", false, "Frilhork"));
                ArtificialIntelligenceAccess.push(new Unit(28075, 4399, "MountainFrich", true, "Harak"));
                ArtificialIntelligenceAccess.push(new Unit(27781, 3768, "MountainFrich", false, "Frilkuh"));

                //berulns in the west
                ArtificialIntelligenceAccess.push(new Unit(33469, 5517, "Beruln", true, "Galima"));

                //olkrin of the rocklands
                //ArtificialIntelligenceAccess.push(new Unit(8199, 2310, "Olkrin", false, "Efaldor"));

                //Rocky Rock Monsters of the Rocky Rock West
                ArtificialIntelligenceAccess.push(new Unit(34641, -676, "StoneGolem", "baby", "Oree"));
                ArtificialIntelligenceAccess.push(new Unit(33690, 3385, "StoneGolem", true, "Oreface"));

                //Ores
                scenicList.push(new Scenery("stone", 28299 , -2272, 4, 2, 2));
                scenicList.push(new Scenery("stone", 29689 , -1418, -2.5, 3, 3));
                scenicList.push(new Scenery("stone", 30883 , 4805, 8, 1.5, 3));
                scenicList.push(new Scenery("stone", 32429 , 5619, -11, 1.5, 3));
                scenicList.push(new Scenery("stone", 34271 , 3975, 6, 1, 1));
                scenicList.push(new Scenery("stone", 34271 , 3975, 9, 2.5, 1));
                scenicList.push(new Scenery("stone", 34000 , -2770, 5, 3, 2));
                scenicList.push(new Scenery("stone", 35121 , -3247, 3, 1, 1));
                scenicList.push(new Scenery("stone", 36696 , -2366, 0, 1.5, 3));
                scenicList.push(new Scenery("stone", 36055 , -354, 16, 3.5, 3));
                scenicList.push(new Scenery("stone", 34675 , 65, 10.5, 2.5, 2));
                scenicList.push(new Scenery("stone", 36487 , -57, -9, 1, 2));
                scenicList.push(new Scenery("stone", 36318 , -3039, 2, 2, 1));
                scenicList.push(new Scenery("darkStone", 31968 , 455, 6.5, 2.5, 2));
                scenicList.push(new Scenery("darkStone", 32435 , -1586, -1, 3, 1));
                scenicList.push(new Scenery("darkStone", 35402 , -1873, 0, 1, 3));
                scenicList.push(new Scenery("darkStone", 36397 , 5826, -5.5, 1.5, 3));
                scenicList.push(new Scenery("darkStone", 33707 , 4850, 6, 2, 2));
                scenicList.push(new Scenery("darkStone", 29058 , 40, 0, 1.5, 3));
                scenicList.push(new Scenery("darkStone", 30873 , 2846, -2.4, 1.5, 1));
                scenicList.push(new Scenery("ashStone", 35160 , 4938, -8.85, 1, 1));
                scenicList.push(new Scenery("ashStone", 29330 , 5128, 7, 2, 2));
                scenicList.push(new Scenery("ashStone", 33659 , 1792, -1, 1, 3));
                scenicList.push(new Scenery("ashStone", 32954 , -2545, -3, 1.5, 2));

                //Dungeon "Sage's Cache"
                scenicList.push(new Scenery("cave", 35742, 1359, 0, [932, 36], "sagesCache"));

                //Plants
                scenicList.push(new Scenery("haeflowerPlant", 32791, 5076, 4.444, true));

                change = "w3";
            }
        }
        else if (region == "w4")
        {
            if (change != "w4")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //High-Hill Howlers
                ArtificialIntelligenceAccess.push(new Unit(45825, 1195, "GreyWolf", false, "Shod"));
                ArtificialIntelligenceAccess.push(new Unit(46096, 1568, "GreyWolf", false, "Shad"));
                ArtificialIntelligenceAccess.push(new Unit(45369, 1393, "GreyWolf", false, "Sheid"));
                ArtificialIntelligenceAccess.push(new Unit(42240, -3220, "GreyWolf", false, "Shiad"));
                ArtificialIntelligenceAccess.push(new Unit(42737, -3112, "GreyWolf", false, "Shoad"));

                //Nogs (a dumb variety of goblins)
                ArtificialIntelligenceAccess.push(new Unit(45598, -3206, "Nog", true, "Snack-Pack"));
                ArtificialIntelligenceAccess.push(new Unit(45280, -3064, "Nog", true, "Meat-Sack"));
                ArtificialIntelligenceAccess.push(new Unit(45405, -3279, "Nog", false, "Fish-Purse"));
                ArtificialIntelligenceAccess.push(new Unit(47070, -2106, "Nog", true, "Slush-Guts"));
                ArtificialIntelligenceAccess.push(new Unit(46921, -2280, "Nog", false, "Garlic-Lips"));
                ArtificialIntelligenceAccess.push(new Unit(46960, -234, "Nog", false, "Tooth-Tooth"));
                ArtificialIntelligenceAccess.push(new Unit(46694, -30, "Nog", true, "Fang-Face"));
                ArtificialIntelligenceAccess.push(new Unit(46716, 6072, "Nog", false, "Fish-Feet"));
                ArtificialIntelligenceAccess.push(new Unit(46846, 5820, "Nog", true, "Fire-Back"));
                ArtificialIntelligenceAccess.push(new Unit(46508, 5872, "Nog", true, "Striker"));
                ArtificialIntelligenceAccess.push(new Unit(46695, 5496, "Nog", false, "Chub"));
                ArtificialIntelligenceAccess.push(new Unit(46027, 5536, "Nog", false, "Stub-Claw"));
                ArtificialIntelligenceAccess.push(new Unit(39693, 452, "Nog", true, "Straiuka"));
                ArtificialIntelligenceAccess.push(new Unit(38481, 308, "Nog", false, "Chulab"));
                ArtificialIntelligenceAccess.push(new Unit(38421, 474, "Nog", true, "Sudor-Iktil"));
                ArtificialIntelligenceAccess.push(new Unit(39252, 1805, "Nog", true, "Irmott"));
                ArtificialIntelligenceAccess.push(new Unit(38974, 2052, "Nog", true, "Irmaht"));
                ArtificialIntelligenceAccess.push(new Unit(38519, 2257, "Nog", false, "Irmol"));
                ArtificialIntelligenceAccess.push(new Unit(38339, 1713, "Nog", false, "Irmoc"));
                ArtificialIntelligenceAccess.push(new Unit(40478, 4228, "Nog", true, "Sudol-Iktol"));
                ArtificialIntelligenceAccess.push(new Unit(40603, 4444, "Nog", true, "Irmotol"));
                ArtificialIntelligenceAccess.push(new Unit(40732, 4107, "Nog", false, "Irmahtol"));
                ArtificialIntelligenceAccess.push(new Unit(40462, 4073, "Nog", false, "Irmolk"));
                ArtificialIntelligenceAccess.push(new Unit(40240, 4266, "Nog", false, "Irmocol"));
                ArtificialIntelligenceAccess.push(new Unit(42544, -1440, "Nog", true, "Ermotol"));
                ArtificialIntelligenceAccess.push(new Unit(42661, -1638, "Nog", false, "Ermahtol"));
                ArtificialIntelligenceAccess.push(new Unit(43303, 4189, "Nog", true, "Snock-Pusk"));
                ArtificialIntelligenceAccess.push(new Unit(40132, 3214, "Nog", false, "Erma"));

                //The friches of the rocky west
                ArtificialIntelligenceAccess.push(new Unit(44115, -1707, "MountainFrich", "massive", "Tarf"));
                ArtificialIntelligenceAccess.push(new Unit(43603, -2466, "MountainFrich", true, "Torf"));
                ArtificialIntelligenceAccess.push(new Unit(44030, -2599, "MountainFrich", true, "Tolf"));
                ArtificialIntelligenceAccess.push(new Unit(45168, -1332, "MountainFrich", false, "Rifre"));
                ArtificialIntelligenceAccess.push(new Unit(46422, -1618, "MountainFrich", false, "Rifral"));
                ArtificialIntelligenceAccess.push(new Unit(46713, -2907, "MountainFrich", false, "Rifalt"));
                ArtificialIntelligenceAccess.push(new Unit(46876, -3073, "MountainFrich", false, "Riferel"));
                ArtificialIntelligenceAccess.push(new Unit(46466, -3154, "MountainFrich", true, "Tulfre"));
                ArtificialIntelligenceAccess.push(new Unit(45047, 2478, "MountainFrich", false, "Refolkot"));
                ArtificialIntelligenceAccess.push(new Unit(38464, 5368, "MountainFrich", false, "Refalt"));
                ArtificialIntelligenceAccess.push(new Unit(39219, 5891, "MountainFrich", true, "Refolt"));
                ArtificialIntelligenceAccess.push(new Unit(40131, 5537, "MountainFrich", false, "Hefolyot"));
                ArtificialIntelligenceAccess.push(new Unit(40433, 5385, "MountainFrich", false, "Hefalt"));
                ArtificialIntelligenceAccess.push(new Unit(42448, 2658, "MountainFrich", true, "Talforch"));
                ArtificialIntelligenceAccess.push(new Unit(42050, 740, "MountainFrich", true, "Hefolt"));
                ArtificialIntelligenceAccess.push(new Unit(41658, 524, "MountainFrich", false, "Tefolyot"));
                ArtificialIntelligenceAccess.push(new Unit(41889, 340, "MountainFrich", false, "Tefalt"));
                ArtificialIntelligenceAccess.push(new Unit(41470, -161, "MountainFrich", "massive", "Halforch"));
                ArtificialIntelligenceAccess.push(new Unit(42677, -2294, "MountainFrich", true, "Fesh"));

                //berulns in the west
                ArtificialIntelligenceAccess.push(new Unit(39983, -1944, "Beruln", false, "Jolrovitar"));

                //olkrin of the rocklands
                if (Math.random() >= 0.75)
                {
                    ArtificialIntelligenceAccess.push(new Unit(44406, 4212, "Olkrin", "baby", "Vekomdor"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(44748, 3976, "MountainFrich", true, "Tolfet"));
                    ArtificialIntelligenceAccess.push(new Unit(44406, 4212, "MountainFrich", false, "Rifelt"));
                    ArtificialIntelligenceAccess.push(new Unit(45392, 4439, "MountainFrich", false, "Refalsha"));
                }

                //Rocky Rock Monsters of the Rocky Rock West
                ArtificialIntelligenceAccess.push(new Unit(46754, 674, "StoneGolem", false, "Stonorone"));
                ArtificialIntelligenceAccess.push(new Unit(38982, 5303, "StoneGolem", false, "Stonoral"));
                ArtificialIntelligenceAccess.push(new Unit(43421, 1623, "StoneGolem", "baby", "Rockabye"));
                ArtificialIntelligenceAccess.push(new Unit(41326, -694, "StoneGolem", "baby", "Daymorning"));

                //Ores
                scenicList.push(new Scenery("darkStone", 38321 , 547, -6, 4, 2));
                scenicList.push(new Scenery("darkStone", 39063 , 1828, -2.3, 1, 2));
                scenicList.push(new Scenery("darkStone", 38337 , 4002, 3, 0.5, 3));
                scenicList.push(new Scenery("ashStone", 39388 , 5656, 4.444, 2.5, 2));
                scenicList.push(new Scenery("ashStone", 41856 , -1828, 256, 4.5, 3));
                scenicList.push(new Scenery("ashStone", 46942 , 1687, 81, 2, 1));
                scenicList.push(new Scenery("stone", 45819 , -202, 0.12, 3.5, 2));
                scenicList.push(new Scenery("stone", 46845 , 109, 6.94, 1, 2));
                scenicList.push(new Scenery("darkStone", 44399 , 6080, -4, 1.5, 1));
                scenicList.push(new Scenery("stone", 45066 , 4470, -9, 2, 3));
                scenicList.push(new Scenery("darkStone", 45931 , 3824, 1, 1, 2));
                scenicList.push(new Scenery("ashStone", 45004 , 2121, -64, 1, 1));
                scenicList.push(new Scenery("ashStone", 43858 , -246, -1, 3.5, 2));
                scenicList.push(new Scenery("darkStone", 45508 , -931, 6.4, 0.5, 1));
                scenicList.push(new Scenery("stone", 45964 , -3051, -2.58, 1, 3));
                scenicList.push(new Scenery("stone", 45001 , -3283, 3.4, 0.5, 1));
                scenicList.push(new Scenery("darkStone", 44707 , -1258, 5, 2.5, 1));
                scenicList.push(new Scenery("ashStone", 43109 , -2053, -1, 1.5, 3));
                scenicList.push(new Scenery("stone", 41280 , -12, 7.1, 5, 2));
                scenicList.push(new Scenery("stone", 39228 , -1406, -5.678, 2.5, 1));
                scenicList.push(new Scenery("ashStone", 40293 , -2519, -12, 1, 2));
                scenicList.push(new Scenery("darkStone", 42681 , -3009, 5.5, 2, 1));
                scenicList.push(new Scenery("stone", 39056 , -2866, 6.8765, 1.5, 3));
                scenicList.push(new Scenery("stone", 42287 , 158, 6.3, 1, 2));
                scenicList.push(new Scenery("stone", 43160 , 4543, -3.9, 3, 3));
                scenicList.push(new Scenery("darkStone", 44331 , 3410, 4.5, 1.5, 2));
                scenicList.push(new Scenery("ashStone", 40807 , 1118, -2.4, 3.5, 1));
                scenicList.push(new Scenery("stone", 40277 , 4435, 3.82, 2, 3));

                //Plants
                scenicList.push(new Scenery("haeflowerPlant", 44702, 4124, 6.9, true));
                scenicList.push(new Scenery("haeflowerPlant", 42415, -2151, -9.6, true));

                change = "w4";
            }
        }
        else if (region == "s1w4")
        {
            if (change != "s1w4")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //High-Hill Howlers
                ArtificialIntelligenceAccess.push(new Unit(38399, -3875, "GreyWolf", false, "Clemont"));
                ArtificialIntelligenceAccess.push(new Unit(37876, -4052, "GreyWolf", false, "Ceymorr"));
                ArtificialIntelligenceAccess.push(new Unit(38204, -4154, "GreyWolf", false, "Claya"));
                ArtificialIntelligenceAccess.push(new Unit(38683, -4113, "GreyWolf", false, "Trebol"));
                ArtificialIntelligenceAccess.push(new Unit(37971, -3727, "GreyWolf", false, "Clover"));

                //Nogs (a dumb variety of goblins)
                ArtificialIntelligenceAccess.push(new Unit(46843, -12924, "Nog", false, "Chum-Bucket"));
                ArtificialIntelligenceAccess.push(new Unit(47085, -12290, "Nog", true, "Romp-Cleener"));
                ArtificialIntelligenceAccess.push(new Unit(46884, -12438, "Nog", false, "Twat-Sizzler"));
                ArtificialIntelligenceAccess.push(new Unit(44569, -10942, "Nog", false, "Cully-Licker"));
                ArtificialIntelligenceAccess.push(new Unit(45575, -8040, "Nog", true, "Cereal-Muncher"));
                ArtificialIntelligenceAccess.push(new Unit(45756, -8168, "Nog", false, "Grain-Cruncher"));
                ArtificialIntelligenceAccess.push(new Unit(46395, -8029, "Nog", false, "Wheat-Licker"));
                ArtificialIntelligenceAccess.push(new Unit(46765, -8589, "Nog", true, "Grass-Cleaner"));
                ArtificialIntelligenceAccess.push(new Unit(44707, -7086, "Nog", true, "Tunc-Rekcuf"));
                ArtificialIntelligenceAccess.push(new Unit(44230, -7312, "Nog", true, "Rimp-Dipper"));
                ArtificialIntelligenceAccess.push(new Unit(44329, -7133, "Nog", false, "Tweet-Salter"));
                ArtificialIntelligenceAccess.push(new Unit(46795, -4773, "Nog", false, "Twat-Warmer"));
                ArtificialIntelligenceAccess.push(new Unit(46490, -5219, "Nog", false, "Romp-Filler"));
                ArtificialIntelligenceAccess.push(new Unit(46681, -5350, "Nog", true, "Twat-Stuffer"));
                ArtificialIntelligenceAccess.push(new Unit(44447, -4859, "Nog", true, "Tweed-Bearer"));
                ArtificialIntelligenceAccess.push(new Unit(41668, -7617, "Nog", false, "Tweed-Warmer"));
                ArtificialIntelligenceAccess.push(new Unit(42516, -7522, "Nog", false, "Romp-Brimmer"));
                ArtificialIntelligenceAccess.push(new Unit(42278, -7694, "Nog", true, "Twat-Packer"));
                ArtificialIntelligenceAccess.push(new Unit(42244, -7451, "Nog", true, "Tweed-Swallower"));
                ArtificialIntelligenceAccess.push(new Unit(45986, -6971, "Nog", false, "Tweet-Moistener"));
                ArtificialIntelligenceAccess.push(new Unit(45666, -7115, "Nog", false, "Rimp-Lancer"));
                ArtificialIntelligenceAccess.push(new Unit(46158, -7492, "Nog", false, "Barely-Grinder"));
                ArtificialIntelligenceAccess.push(new Unit(42316, -8535, "Nog", true, "Twat-Pricker"));
                ArtificialIntelligenceAccess.push(new Unit(42181, -8574, "Nog", false, "Tweed-Spinner"));
                ArtificialIntelligenceAccess.push(new Unit(41777, -8107, "Nog", false, "Tweed-Moistener"));
                ArtificialIntelligenceAccess.push(new Unit(41590, -8155, "Nog", false, "Rimp-Stabber"));
                ArtificialIntelligenceAccess.push(new Unit(41959, -8359, "Nog", true, "Corn-Sucker"));
                ArtificialIntelligenceAccess.push(new Unit(41185, -8796, "Nog", false, "Penny-Pincher"));
                ArtificialIntelligenceAccess.push(new Unit(45425, -9448, "Nog", true, "Dime-Harvester"));
                ArtificialIntelligenceAccess.push(new Unit(45587, -9617, "Nog", false, "Nickel-Grabber"));
                ArtificialIntelligenceAccess.push(new Unit(46685, -9490, "Nog", false, "Dollar-Spitter"));
                ArtificialIntelligenceAccess.push(new Unit(46008, -8984, "Nog", true, "Quarter-Biter"));

                //The friches of the rocky west
                ArtificialIntelligenceAccess.push(new Unit(43718, -12504, "MountainFrich", true, "Fruku"));
                ArtificialIntelligenceAccess.push(new Unit(43948, -12407, "MountainFrich", false, "Frokol"));
                ArtificialIntelligenceAccess.push(new Unit(42732, -4699, "MountainFrich", false, "Frakol"));
                ArtificialIntelligenceAccess.push(new Unit(42950, -4429, "MountainFrich", false, "Frakal"));
                ArtificialIntelligenceAccess.push(new Unit(43024, -4554, "MountainFrich", false, "Frukal"));
                ArtificialIntelligenceAccess.push(new Unit(38809, -6798, "MountainFrich", true, "Frakil"));
                ArtificialIntelligenceAccess.push(new Unit(40031, -6850, "MountainFrich", false, "Frikil"));
                ArtificialIntelligenceAccess.push(new Unit(39591, -7371, "MountainFrich", "massive", "Frikol"));
                ArtificialIntelligenceAccess.push(new Unit(42444, -9932, "MountainFrich", false, "Frykol"));
                ArtificialIntelligenceAccess.push(new Unit(42832, -9729, "MountainFrich", false, "Frakyl"));
                ArtificialIntelligenceAccess.push(new Unit(43023, -9993, "MountainFrich", false, "Frykal"));
                ArtificialIntelligenceAccess.push(new Unit(44047, -9779, "MountainFrich", false, "Frukyl"));
                ArtificialIntelligenceAccess.push(new Unit(40584, -10222, "MountainFrich", true, "Frykil"));
                ArtificialIntelligenceAccess.push(new Unit(45810, -10448, "MountainFrich", false, "Frouhyl"));

                //berulns in the west
                var rnd = Math.random();
                if (rnd >= 0.7)
                {
                    ArtificialIntelligenceAccess.push(new Unit(38628, -12634, "Beruln", false, "Hulet"));
                    ArtificialIntelligenceAccess.push(new Unit(39478, -13120, "Beruln", true, "Thadolge"));
                }
                else if (rnd >= 0.4)
                {
                    ArtificialIntelligenceAccess.push(new Unit(39478, -13120, "Beruln", true, "Thadolge"));
                }
                else if (rnd >= 0.1)
                {
                    ArtificialIntelligenceAccess.push(new Unit(38628, -12634, "Beruln", false, "Hulet"));
                }
                else
                {
                    //olkrin of the rocklands
                    if (change == "s1w5")
                    {
                        ArtificialIntelligenceAccess.push(new Unit(38628, -12634, "Olkrin", false, "Vanaandunm Bringer of Wickedness"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(38628, -12634, "Olkrin", "baby", "The Wicked Offspring"));
                        ArtificialIntelligenceAccess.push(new Unit(39478, -13120, "Olkrin", "baby", "The Wicked Offspring"));
                    }
                }

                //Rocky Rock Monsters of the Rocky Rock West
                ArtificialIntelligenceAccess.push(new Unit(41972, -11595, "StoneGolem", true, "Oregol"));
                ArtificialIntelligenceAccess.push(new Unit(38660, -8546, "StoneGolem", false, "Leregol"));
                ArtificialIntelligenceAccess.push(new Unit(41570, -8290, "StoneGolem", "baby", "Regol"));
                ArtificialIntelligenceAccess.push(new Unit(43411, -9501, "StoneGolem", true, "Oregun"));
                ArtificialIntelligenceAccess.push(new Unit(45576, -10997, "StoneGolem", false, "Leregun"));
                ArtificialIntelligenceAccess.push(new Unit(38628, -13302, "StoneGolem", "baby", "Lere"));
                ArtificialIntelligenceAccess.push(new Unit(44488, -10113, "StoneGolem", "baby", "Regun"));

                //Ores
                scenicList.push(new Scenery("darkStone", 39548 , -6850, -13, 1.5, 2));
                scenicList.push(new Scenery("darkStone", 41692 , -8319, 10, 3.5, 1));
                scenicList.push(new Scenery("darkStone", 41514 , -12957, -19, 2, 2));
                scenicList.push(new Scenery("darkStone", 38453 , -13492, 49, 0.5, 3));
                scenicList.push(new Scenery("darkStone", 38342 , -8908, -49, 1, 3));
                scenicList.push(new Scenery("darkStone", 42437 , -11004, 14, 1.5, 3));
                scenicList.push(new Scenery("darkStone", 44035 , -6652, -22.7, 2.5, 3));
                scenicList.push(new Scenery("darkStone", 46249 , -6350, 22.1, 1, 1));
                scenicList.push(new Scenery("darkStone", 46183 , -10802, -0.5, 1.5, 2));
                scenicList.push(new Scenery("ashStone", 38457 , -3905, -4.45, 1, 2));
                scenicList.push(new Scenery("ashStone", 38828 , -5130, 4.45, 2, 3));
                scenicList.push(new Scenery("ashStone", 40664 , -7623, 3, 0.5, 2));
                scenicList.push(new Scenery("ashStone", 40762 , -7868, 15, 1.5, 3));
                scenicList.push(new Scenery("ashStone", 40935 , -7673, 5, 1, 1));
                scenicList.push(new Scenery("ashStone", 40474 , -13042, -6, 1.5, 1));
                scenicList.push(new Scenery("ashStone", 40557 , -9488, -666, 3.5, 1));
                scenicList.push(new Scenery("ashStone", 41646 , -4739, 67.4, 2, 2));
                scenicList.push(new Scenery("ashStone", 44982 , -7118, 444.4, 3, 2));
                scenicList.push(new Scenery("ashStone", 45249 , -9199, 44.44, 4, 2));
                scenicList.push(new Scenery("ashStone", 43598 , -11824, 4444, 1, 3));
                scenicList.push(new Scenery("ashStone", 46726 , -10033, 0.4444, 1, 1));
                scenicList.push(new Scenery("ashStone", 42801 , -11081, -1.4444, 1, 2));
                scenicList.push(new Scenery("ashStone", 46639 , -4702, 2.4446, 0.5, 1));
                scenicList.push(new Scenery("stone", 38418 , -5354, 35, 0.5, 1));
                scenicList.push(new Scenery("stone", 38928 , -8059, 25, 1, 3));
                scenicList.push(new Scenery("stone", 40774 , -8938, 15, 2, 3));
                scenicList.push(new Scenery("stone", 44313 , -10834, 5, 4, 3));
                scenicList.push(new Scenery("stone", 42456 , -12014, -5, 0.5, 3));
                scenicList.push(new Scenery("stone", 38507 , -12978, -28, 2.5, 2));
                scenicList.push(new Scenery("stone", 39250 , -10382, -36.2, 1, 1));
                scenicList.push(new Scenery("stone", 43210 , -3914, 45.45454545, 1.5, 1));
                scenicList.push(new Scenery("stone", 44989 , -5485, 0, 1, 1));
                scenicList.push(new Scenery("stone", 47044 , -4392, 0, 0.5, 3));
                scenicList.push(new Scenery("stone", 41317 , -11133, 36.363636, 1.5, 3));

                //Plants
                scenicList.push(new Scenery("haeflowerPlant", 39374, -12147, Math.PI, true));

                change = "s1w4";
            }
        }
        else if (region == "s1w5")
        {
            if (change != "s1w5")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee || ArtificialIntelligenceAccess[i].team == "arena1" || ArtificialIntelligenceAccess[i].team == "arena2" || ArtificialIntelligenceAccess[i].team == "arena3")
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

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //characters
                    //unique AND non-unique only by necessity
                if (uniqueChars.bameyLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Bamey the Huntsman")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51563, -9805, "Person", false, "Bamey the Huntsman", {race: "Thengar", faction: "Thengar", personality: "violent", outfit: ["boulchomLeatherArmour", 1.5], weapon: ["longbow", [0.2, 0.25], 0, 1, 1.1], ranged: [true, "arrow", 8, 2200, 5, 7, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 36], [new Item("longbow", false, false), 3], [new Item("arrow", false, false), 160], [new Item("steelArrow", false, false), 80], [new Item("beartrap", false, false), 4], [new Item("clawtrap", false, false), 3], [new Item("jacks", false, false), 39], [new Item("spindletrap", false, false), 1]]}));
                        ArtificialIntelligenceAccess[i].health = 37;
                    }
                }

                if (uniqueChars.bruneldaLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Brunelda the Merchant")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(50986, -9534, "Person", false, "Brunelda the Merchant", {race: "Thengar", faction: "Thengar", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 1.3], ranged: [false, "arrow", 8, 2200, 5, 7, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 65], [new Item("skolPelt", false, false), 3], [new Item("mountainFrichPelt", false, false), 1], [new Item("boulchomPelt", false, false), 2], [new Item("wood", false, false), 5], [new Item("fireStarter", false, false), 2], [new Item("jarOfOil", false, false), 2], [new Item("oilLampEmpty", false, false), 2], [new Item("bucket", false, false), 3], [new Item("tent", false, false), 1], [new Item("hammer", false, false), 2], [new Item("pickaxe", false, false), 4], [new Item("timberAxe", false, false), 1], [new Item("harstGrain", false, false), 18]]}));
                        ArtificialIntelligenceAccess[i].health = 4;
                    }
                }

                if (uniqueChars.gerlachLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Gerlach the Butcher")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51564, -9414, "Person", false, "Gerlach the Butcher", {race: "Thengar", faction: "Thengar", personality: "violent", outfit: ["none", 0], weapon: ["meatCleaver", [1, 2], 1, 11, 1.7], ranged: [false, "arrow", 8, 2200, 5, 7, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 43], [new Item("rawBearFlesh", false, false), 4], [new Item("rawBearTongue", false, false), 1], [new Item("rawRabbitFlesh", false, false), 7], [new Item("rawBoulchomFlesh", false, false), 3], [new Item("rawHoffalgreFlesh", false, false), 6]]}));
                        ArtificialIntelligenceAccess[i].health = 8;
                    }
                }

                if (uniqueChars.johannaLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Johanna the Herbalist")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51560, -8907, "Person", false, "Johanna the Herbalist", {race: "Thengar", faction: "Thengar", personality: "scared", outfit: ["hoffalgreFurCloak", 0], weapon: ["none", [0.3, 0.25], 0, 0, 1.4], ranged: [false, "arrow", 8, 2200, 5, 7, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 50], [new Item("hydroraSalve", false, false), 2], [new Item("culprisBandage", false, false), 4], [new Item("kofkeLeaves", false, false), 6], [new Item("steugiurneFlower", false, false), 2], [new Item("thalisLeaf", false, false), 4], [new Item("viperSnakeSkin", false, false), 2], [new Item("lizardTail", false, false), 7], [new Item("glassJar", false, false), 6], [new Item("potionGlass", false, false), 5]]}));
                        ArtificialIntelligenceAccess[i].health = 3;
                    }
                }

                if (uniqueChars.lenaLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Lena")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51499, -8933, "Person", false, "Lena", {race: "Thengar", faction: "Thengar", personality: "scared", outfit: ["hoffalgreFurCloak", 0], weapon: ["none", [0.03, 0.025], 0, 0, 1], ranged: [false, "arrow", 8, 2200, 5, 7, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], kid: true}));
                        ArtificialIntelligenceAccess[i].health = 1;
                    }
                }

                if (uniqueChars.axelLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Axel")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(52794, -6236, "Person", false, "Axel", {race: "Thengar", faction: "Thengar", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.03, 0.025], 0, 0, 1], ranged: [false, "arrow", 8, 2200, 5, 7, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]]}));
                        ArtificialIntelligenceAccess[i].health = 7;
                    }
                }

                if (uniqueChars.hildegardLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Hildegard")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51616, -7327, "Person", false, "Hildegard", {race: "Thengar", faction: "Thengar", personality: "scared", outfit: ["hoffalgreFurCloak", 0], weapon: ["none", [0.03, 0.025], 0, 0, 1], ranged: [false, "arrow", 8, 2200, 5, 7, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]]}));
                        ArtificialIntelligenceAccess[i].health = 1;
                    }
                }

                if (uniqueChars.cherylLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Cheryl the Tailor")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51263, -9776, "Person", false, "Cheryl the Tailor", {race: "Thengar", faction: "Thengar", personality: "calculated", outfit: ["hoffalgreFurCloak", 0], weapon: ["none", [0.25, 0.25], 0, 1, 1.25], ranged: [false, "arrow", 8, 2200, 5, 7, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 29], [new Item("boulchomLeatherArmour", false, false), 2], [new Item("boulchomLeatherBoots", false, false), 2], [new Item("boulchomLeatherGloves", false, false), 3], [new Item("blackBearFurClothing", false, false), 2], [new Item("blackBearLeatherArmour", false, false), 1], [new Item("hoffalgreFurCloak", false, false), 8]]}));
                        ArtificialIntelligenceAccess[i].health = 3;
                    }
                }

                if (uniqueChars.cherylChildLDS == true && quests.cherylChild)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "[ " + quests.cherylChildName + " ]")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51325, -9860, "Person", false, "[ " + quests.cherylChildName + " ]", {race: player.raceName, faction: "Thengar", personality: "violent", outfit: ["hoffalgreFurCloak", 0], weapon: ["none", [0.25, 0.25], 0, 0, 1.3], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[51325, -9860]], kid: true}));
                        ArtificialIntelligenceAccess[i].health = 1;
                    }
                }

                if (uniqueChars.adolfLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Adolf the Pit Fighter")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        if (quests.swordDeliveryQuest == "complete")
                        {
                            if (quests.swordDeliveryFight)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51493, -8252, "Soldier", false, "Adolf the Pit Fighter", {race: "Thengar", faction: "arena1", con: 10, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["thenganSword", [9, 4], 0, 16, 1.4], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 0, patrolLoop: true, route:[[-514, 277], [-514, 277]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51645, -8388, "Soldier", false, "Adolf the Pit Fighter", {race: "Thengar", faction: "Thengar", con: 10, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["thenganSword", [9, 4], 0, 16, 1.4], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 0, patrolLoop: true, route:[[-514, 277], [-514, 277]]}));
                            }
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51645, -8388, "Soldier", false, "Adolf the Pit Fighter", {race: "Thengar", faction: "Thengar", con: 10, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["none", [0.5, 0.6], 0, 1, 0.9], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 0, patrolLoop: true, route:[[-514, 277], [-514, 277]]}));
                        }
                    }
                }

                if (uniqueChars.markosLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Markos the Pit Master")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(50858, -8123, "Soldier", false, "Markos the Pit Master", {race: "Thengar", faction: "Thengar", con: 22, speed: 0.85, outfit: ["thenganPlateArmour", 19], weapon: ["flail", [26, 10], 14, 63, 3.6], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 0, patrolLoop: true, route:[[-514, 277], [-514, 277]]}));
                    }
                }

                if (uniqueChars.rutgarLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Rutgar the Warden")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(53108, -6704, "Soldier", false, "Rutgar the Warden", {race: "Thengar", faction: "Thengar", con: 19, speed: 0.74, outfit: ["thenganPlateArmour", 14], weapon: ["thenganSword", [12, 8], 0, 16, 1.25], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 0, patrolLoop: true, route:[[-514, 277], [-514, 277]]}));
                    }
                }

                if (uniqueChars.friedrichLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Beulingerr Commander Friedrich")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51236, -7402, "Soldier", false, "Beulingerr Commander Friedrich", {race: "Thengar", faction: "Thengar", con: 26, speed: 0.88, outfit: ["thenganPlateArmour", 22], weapon: ["thenganWarhammer", [30, 20], 20, 48, 5.75], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 0, patrolLoop: true, route:[[-514, 277], [-514, 277]]}));
                    }
                }

                if (uniqueChars.ederhalLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Ederhal the Innkeeper")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(50569, -10420, "Person", false, "Ederhal the Innkeeper", {race: "Thengar", faction: "Thengar", personality: "calculated", outfit: ["hoffalgreFurCloak", 0], weapon: ["none", [0.3, 0.4], 0, 1, 1.15], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 69], [new Item("bearMeat", false, false), 3], [new Item("hoffalgreMeat", false, false), 3], [new Item("rabbitMeat", false, false), 5], [new Item("harstAle", false, false), 39], [new Item("harstBread", false, false), 1], [new Item("vel", false, false), 4]]}));
                        ArtificialIntelligenceAccess[i].health = 13;
                    }
                }

                if (uniqueChars.naokoLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Naoko the Banker")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(50956, -9146, "Person", false, "Naoko the Banker", {race: "Orgell", faction: "Thengar", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.2, 0.1], 0, 0, 1.2], ranged: [false, "arrow", 8, 2000, 1, 6, 0, "none", 0.95], patrolStops: 0, patrolLoop: false, route:[[2200, 1460]], banker: true}));
                    }
                }

                if (uniqueChars.dagmarLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Dagmar the Smith")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51270, -9539, "Person", false, "Dagmar the Smith", {race: "Thengar", faction: "Thengar", personality: "violent", outfit: ["none", 0], weapon: ["thenganSword", [8, 5], 0, 16, 1.45], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 240], [new Item("steel", false, false), 6], [new Item("iron", false, false), 4], [new Item("mace", false, false), 4], [new Item("thenganDagger", false, false), 3], [new Item("longsword", false, false), 4], [new Item("thenganSwordAndShield", false, false), 1], [new Item("longSpikedMorningStar", false, false), 2], [new Item("thenganWarhammer", false, false), 1], [new Item("flail", false, false), 1], [new Item("smashStick", false, false), 1], [new Item("thenganPlateArmour", false, false), 1], [new Item("timberAxe", false, false), 1], [new Item("pickaxe", false, false), 2]]}));
                        ArtificialIntelligenceAccess[i].health = 46;
                    }
                    ArtificialIntelligenceAccess.push(new Unit(51352, -9394, "Person", false, "Blacksmith's Apprentice", {race: "Thengar", faction: "Thengar", personality: "violent", outfit: ["none", 0], weapon: ["hammer", [2, 1.5], 3, 12, 1.35], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[1793, 314]]}));
                }
                else if (uniqueChars.lennardLDS == true)
                {
                    var hits = 0;
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].ID == "Lennard the Smith")
                        {
                            hits += 1;
                        }
                    }
                    if (hits == 0)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51270, -9539, "Person", false, "Lennard the Smith", {race: "Thengar", faction: "Thengar", personality: "violent", outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 1, 1.1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 60], [new Item("steel", false, false), 2], [new Item("iron", false, false), 1], [new Item("mace", false, false), 1], [new Item("thenganDagger", false, false), 1], [new Item("longsword", false, false), 1], [new Item("longSpikedMorningStar", false, false), 1], [new Item("timberAxe", false, false), 1], [new Item("pickaxe", false, false), 3]]}));
                        ArtificialIntelligenceAccess[i].health = 9;
                    }
                    ArtificialIntelligenceAccess.push(new Unit(51352, -9394, "Person", false, "Blacksmith's Apprentice", {race: "Thengar", faction: "Thengar", personality: "violent", outfit: ["none", 0], weapon: ["hammer", [2, 1.5], 3, 12, 1.35], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[1793, 314]]}));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(51270, -9539, "Person", false, "Journeyman Blacksmith", {race: "Thengar", faction: "Thengar", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.1, 0.1], 0, 1, 1.2], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 20], [new Item("steel", false, false), 1], [new Item("iron", false, false), 1], [new Item("mace", false, false), 1], [new Item("thenganDagger", false, false), 1], [new Item("timberAxe", false, false), 1], [new Item("pickaxe", false, false), 1]]}));
                }

                //a well known thengan mercenary crew's captain.
                if (uniqueChars.kronheimeLDS == true && quests.theBalgurMercenariesQuest == false || uniqueChars.kronheimeLDS == true && quests.theBalgurMercenariesQuest == "complete")
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
                        ArtificialIntelligenceAccess.push(new Unit(51243, -7210, "Soldier", false, "Mercenary Captain Kronheime", {race: "Thengar", faction: "TheBalgurMercenaries", con: 20, speed: 1.3, outfit: ["balgurCaptainArmour", 7], weapon: ["flail", [25, 7], 11, 63, 3.1], ranged: [false, "arrow", 7, 1800, 1, 6, 0, "none", 2.4], patrolStops: 0, patrolLoop: false, route:[[1654, 1507], [1661, 2311], [1864, 2315], [1852, 1499]]}));
                    }
                }
                else if (uniqueChars.kronheimeLDS == false)
                {
                    if (uniqueChars.barretLDS == true)
                    {
                        var hits = 0;
                        for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                        {
                            if (ArtificialIntelligenceAccess[i].ID == "Mercenary Captain Barret")
                            {
                                hits += 1;
                            }
                        }
                        if (hits == 0)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51243, -7210, "Soldier", false, "Mercenary Captain Barret", {race: "Thengar", faction: "TheBalgurMercenaries", con: 24, speed: 1.25, outfit: ["balgurCaptainArmour", 7], weapon: ["thenganWarhammer", [26, 26], 20, 47, 5], ranged: [false, "arrow", 7, 1800, 1, 6, 0, "none", 2.4], patrolStops: 0, patrolLoop: false, route:[[1654, 1507], [1661, 2311], [1864, 2315], [1852, 1499]]}));
                        }
                    }
                }

                //non-unique
                    //balgur mercs
                if (uniqueChars.kronheimeLDS == true || uniqueChars.barretLDS == true)
                {
                    ArtificialIntelligenceAccess.push(new Unit(51435, -6729, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 12, speed: 1.2, outfit: ["balgurMercArmour", 5], weapon: ["longSpikedMorningStar", [13, 5], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(51334, -6700, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 9, speed: 1.25, outfit: ["balgurMercArmour", 4], weapon: ["longSpikedMorningStar", [11, 4], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(51020, -6731, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 11, speed: 1.3, outfit: ["balgurMercArmour", 4], weapon: ["longSpikedMorningStar", [12, 4], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(51141, -6698, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 13, speed: 1.225, outfit: ["balgurMercArmour", 4.5], weapon: ["longSpikedMorningStar", [14, 6], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(51398, -6934, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 8, speed: 1.175, outfit: ["balgurMercArmour", 3.5], weapon: ["longSpikedMorningStar", [10, 3], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(51083, -7027, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 14, speed: 1.3, outfit: ["balgurMercArmour", 5], weapon: ["longSpikedMorningStar", [14, 7], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(50894, -6932, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 15, speed: 1.4, outfit: ["balgurMercArmour", 5], weapon: ["longSpikedMorningStar", [16, 6.5], 14, 20, 2.3], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    ArtificialIntelligenceAccess.push(new Unit(51567, -6939, "Soldier", false, "Balgur Mercenary", {race: "Thengar", faction: "TheBalgurMercenaries", con: 12, speed: 1.2, outfit: ["balgurMercArmour", 5], weapon: ["longSpikedMorningStar", [13, 5], 14, 20, 2.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                }
                    //adolf arena fight v skols
                if (quests.swordDeliveryFight && uniqueChars.adolfLDS == true && quests.swordDeliveryQuest == "complete")
                {
                    quests.swordDeliveryFight = false;
                    ArtificialIntelligenceAccess.push(new Unit(51308, -8021, "Skol", false, "arena2"));
                    ArtificialIntelligenceAccess.push(new Unit(51038, -8134, "Skol", false, "arena2"));
                }

                if (quests.kellExecution == "beasts")
                {
                    var rnd = Math.random();
                    if (rnd > 0.64)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51509, -7990, "Skol", false, "arena1"));
                        ArtificialIntelligenceAccess.push(new Unit(51508, -8245, "Skol", false, "arena1"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51309, -8098, "Nog", false, "arena1"));
                        ArtificialIntelligenceAccess.push(new Unit(51392, -8021, "Nog", false, "arena1"));
                        ArtificialIntelligenceAccess.push(new Unit(51526, -8100, "Nog", true, "arena1"));
                        ArtificialIntelligenceAccess.push(new Unit(51438, -8223, "Nog", false, "arena1"));
                    }

                    rnd = Math.random();
                    if (rnd > 0.3333)
                    {
                        //kell soldier (prisoner)
                        ArtificialIntelligenceAccess.push(new Unit(51178, -8128, "Soldier", false, "War Prisoner", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.3, 0.35], 0, 0, 1.1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    }
                    else
                    {
                        //kell family
                        if (Math.round(Math.random()))
                        {
                            if (Math.round(Math.random()))
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51178, -8145, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51101, -8198, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51056, -8124, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51048, -8191, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51077, -8171, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51079, -8218, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                        else
                        {
                            if (Math.round(Math.random()))
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51048, -8146, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51077, -8126, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51079, -8173, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51154, -8213, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51107, -8264, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51239, -8035, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51182, -8089, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                    }
                    quests.kellExecution = false;
                }
                else if (quests.kellExecution == "champion")
                {
                    var rnd = Math.random();
                    if (rnd > 0.7)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    }
                    else if (rnd > 0.4)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 13, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    }
                    else if (rnd > 0.1)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 9, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 5], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 6, speed: 0.73, outfit: ["thenganPlateArmour", 14], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    }

                    rnd = Math.random();
                    if (rnd > 0.3333)
                    {
                        //kell soldier (prisoner)
                        ArtificialIntelligenceAccess.push(new Unit(51178, -8128, "Soldier", false, "War Prisoner", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.3, 0.35], 0, 0, 1.1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                    }
                    else
                    {
                        //kell family
                        if (Math.round(Math.random()))
                        {
                            if (Math.round(Math.random()))
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51178, -8145, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51101, -8198, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51056, -8124, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51048, -8191, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51077, -8171, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51079, -8218, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                        else
                        {
                            if (Math.round(Math.random()))
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51048, -8146, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51077, -8126, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51079, -8173, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51154, -8213, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51107, -8264, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51239, -8035, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(51182, -8089, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                    }
                    quests.kellExecution = false;
                }
                else if (quests.pitFight == "spectacle")
                {
                    quests.pitFight = "none";
                    var rndm = Math.random();
                    if (rndm > 0.9)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 13, speed: 1.41, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [15, 5], 14, 20, 2.35], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 0.9, outfit: ["skolLeatherArmour", 3], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 8, speed: 1.3, outfit: ["boulchomLeatherArmour", 2], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 10, speed: 0.79, outfit: ["thenganPlateArmour", 14], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.65)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51061, -8126, "Soldier", false, "Alzkwaya Tribal", {race: "Kel", faction: "arena2", con: 13, speed: 1.5, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [8, 4], 3, 12, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(50987, -8126, "Soldier", false, "Alzkwaya Slave Man", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["mofuTribalWear", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(50950, -8085, "Soldier", false, "Alzkwaya Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["mofuTribalWear", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(50960, -8178, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["mofuTribalWear", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.32)
                        {
                            if (Math.random() > 0.65)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51061, -8126, "Soldier", false, "Echlin Tribal", {race: "Kel", faction: "arena2", con: 17, speed: 1.37, outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [16, 1], 8, 16, 1.25], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(50987, -8126, "Soldier", false, "Echlin Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["naapridLeatherArmour", 4], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(50960, -8178, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["naapridLeatherArmour", 1.5], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                ArtificialIntelligenceAccess.push(new Unit(50950, -8085, "Soldier", false, "Echlin Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["naapridLeatherArmour", 1.5], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51099, -8071, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.5, speed: 0.9, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [4, 0], 1, 4, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51083, -8156, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.5, speed: 0.9, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [2, 1], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(50992, -8109, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0.82, outfit: ["naapridLeatherArmour", 1.5], weapon: ["hammer", [1, 0.8], 0.35, 0, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                    }
                    else if (rndm > 0.849)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 13, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 9, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 5], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 6, speed: 0.73, outfit: ["thenganPlateArmour", 14], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.3333)
                        {
                            //kell soldier (prisoner)
                            ArtificialIntelligenceAccess.push(new Unit(51178, -8128, "Soldier", false, "War Prisoner", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.3, 0.35], 0, 0, 1.1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            //kell family
                            if (Math.round(Math.random()))
                            {
                                if (Math.round(Math.random()))
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51178, -8145, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51101, -8198, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51056, -8124, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51048, -8191, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51077, -8171, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51079, -8218, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                            }
                            else
                            {
                                if (Math.round(Math.random()))
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51048, -8146, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51077, -8126, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51079, -8173, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51154, -8213, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51107, -8264, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51239, -8035, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51182, -8089, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                            }
                        }
                    }
                    else if (rndm > 0.8)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.64)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51509, -7990, "Skol", false, "arena1"));
                            ArtificialIntelligenceAccess.push(new Unit(51508, -8245, "Skol", false, "arena1"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51309, -8098, "Nog", false, "arena1"));
                            ArtificialIntelligenceAccess.push(new Unit(51392, -8021, "Nog", false, "arena1"));
                            ArtificialIntelligenceAccess.push(new Unit(51526, -8100, "Nog", true, "arena1"));
                            ArtificialIntelligenceAccess.push(new Unit(51438, -8223, "Nog", false, "arena1"));
                        }

                        rnd = Math.random();
                        if (rnd > 0.3333)
                        {
                            //kell soldier (prisoner)
                            ArtificialIntelligenceAccess.push(new Unit(51178, -8128, "Soldier", false, "War Prisoner", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.3, 0.35], 0, 0, 1.1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            //kell family
                            if (Math.round(Math.random()))
                            {
                                if (Math.round(Math.random()))
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51178, -8145, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51101, -8198, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51056, -8124, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51048, -8191, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51077, -8171, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51079, -8218, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                            }
                            else
                            {
                                if (Math.round(Math.random()))
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51048, -8146, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51077, -8126, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51079, -8173, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51154, -8213, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51107, -8264, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51239, -8035, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51182, -8089, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                            }
                        }
                    }
                    else if (rndm > 0.749)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51486, -8114, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 15, speed: 1.42, outfit: ["blackBearLeatherArmour", 6], weapon: ["thenganSword", [9, 6], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51486, -8114, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 16, speed: 1, outfit: ["skolLeatherArmour", 3], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51486, -8114, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 11, speed: 1.25, outfit: ["boulchomLeatherArmour", 2], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51486, -8114, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 10, speed: 0.66, outfit: ["thenganPlateArmour", 14], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.50)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(50978, -8134, "Soldier", false, "Echlin Tribal", {race: "Kel", faction: "arena2", con: 15, speed: 1.55, outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [16, 1], 8, 16, 1.25], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else //when I come up with more kellish tribes add more exemplary soldiers.
                        {
                            ArtificialIntelligenceAccess.push(new Unit(50978, -8134, "Soldier", false, "Alzkwaya Tribal", {race: "Kel", faction: "arena2", con: 15, speed: 1.55, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [8, 4], 3, 12, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                    }
                    else if (rndm > 0.7)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.45)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51450, -8126, "Skol", true, "arena1"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51452, -8027, "BlackBear", true, "arena1"));
                            ArtificialIntelligenceAccess.push(new Unit(51450, -8126, "BlackBear", true, "arena1"));
                            ArtificialIntelligenceAccess.push(new Unit(51453, -8249, "BlackBear", true, "arena1"));
                        }

                        rnd = Math.random();
                        if (rnd > 0.50)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(50978, -8134, "Soldier", false, "Echlin Tribal", {race: "Kel", faction: "arena2", con: 15, speed: 1.55, outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [16, 0], 8, 16, 1.25], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else //when I come up with more kellish tribes add more exemplary soldiers.
                        {
                            ArtificialIntelligenceAccess.push(new Unit(50978, -8134, "Soldier", false, "Alzkwaya Tribal", {race: "Kel", faction: "arena2", con: 15, speed: 1.55, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [8, 4], 3, 12, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                    }
                    else if (rndm > 0.6)
                    {

                        var rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51486, -8114, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 16, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51486, -8114, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 13, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51486, -8114, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 19, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51486, -8114, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 0.7, outfit: ["thenganPlateArmour", 17], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.45)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51058, -8130, "Skol", true, "arena2"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51037, -7990, "BlackBear", true, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(51058, -8130, "BlackBear", true, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(51001, -8284, "BlackBear", true, "arena2"));
                        }
                    }
                    else if (rndm > 0.5)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 13, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 9, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 5], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 6, speed: 0.73, outfit: ["thenganPlateArmour", 14], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.64)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51047, -8014, "Skol", false, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(51038, -8262, "Skol", false, "arena2"));
                            if (Math.round(Math.random()))
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51007, -8084, "Skol", false, "arena2"));
                            }
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51047, -8014, "Nog", true, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(51038, -8262, "Nog", false, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(50969, -8097, "Nog", true, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(51107, -8156, "Nog", false, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(51173, -8076, "Nog", false, "arena2"));
                        }
                    }
                    else if (rndm > 0.4)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8126, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8126, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 11, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8126, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 17, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8126, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 12, speed: 0.7, outfit: ["thenganPlateArmour", 16], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8132, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 15, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8132, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 14, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8132, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 10, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 6], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8132, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 19, speed: 0.65, outfit: ["thenganPlateArmour", 15], weapon: ["thenganWarhammer", [26, 16], 19, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                    }
                    else if (rndm > 0.3)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 11, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 17, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 12, speed: 0.7, outfit: ["thenganPlateArmour", 16], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 15, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 10, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 6], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 19, speed: 0.65, outfit: ["thenganPlateArmour", 15], weapon: ["thenganWarhammer", [26, 16], 19, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 15, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 14, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 10, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 6], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 19, speed: 0.65, outfit: ["thenganPlateArmour", 15], weapon: ["thenganWarhammer", [26, 16], 19, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 14, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 11, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 17, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 12, speed: 0.7, outfit: ["thenganPlateArmour", 16], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                    }
                    else if (rndm > 0.2)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 15, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 12, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 18, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 13, speed: 0.7, outfit: ["thenganPlateArmour", 16], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 16, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 15, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 11, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 6], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 20, speed: 0.65, outfit: ["thenganPlateArmour", 15], weapon: ["thenganWarhammer", [26, 16], 19, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.45)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51043, -8004, "Skol", true, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(51063, -8250, "Skol", true, "arena2"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51041, -7995, "BlackBear", true, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(51065, -8069, "BlackBear", true, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(51084, -8179, "BlackBear", true, "arena2"));
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8264, "BlackBear", true, "arena2"));
                        }
                    }
                    else if (rndm > 0.15)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.45)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51486, -8062, "Skol", false, "arena1"));
                            ArtificialIntelligenceAccess.push(new Unit(51347, -8269, "Skol", false, "arena1"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51520, -8118, "BlackBear", true, "arena1"));
                        }

                        rnd = Math.random();

                        if (rnd > 0.49)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51079, -8019, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.5, speed: 0.95, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [4, 0.5], 1, 4, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51008, -8134, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0.85, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51130, -8114, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0.82, outfit: ["naapridLeatherArmour", 1.5], weapon: ["hammer", [1.5, 1], 0.25, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51059, -8298, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena2", con: 0.5, speed: 0.89, outfit: ["naapridLeatherArmour", 1.5], weapon: ["hammer", [1, 1.5], 0, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51079, -8019, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.5, speed: 0.9, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [4, 0.5], 1, 4, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51008, -8134, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.5, speed: 0.9, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51130, -8114, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena2", con: 1, speed: 0.85, outfit: ["naapridLeatherArmour", 1.5], weapon: ["warHammer", [3.5, 2], 1, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51059, -8298, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.75, speed: 1, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1.5], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                    }
                    else if (rndm > 0.1)
                    {
                        var rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 11, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 10, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 6, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 5], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51491, -8120, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 5, speed: 0.73, outfit: ["thenganPlateArmour", 14], weapon: ["thenganSword", [9, 6], 0, 16, 1.45], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();

                        if (rnd > 0.49)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51079, -8019, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.5, speed: 0.95, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [4, 0.5], 1, 4, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51008, -8134, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0.85, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51130, -8114, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0.82, outfit: ["naapridLeatherArmour", 1.5], weapon: ["hammer", [1.5, 1], 0.25, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51059, -8298, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena2", con: 0.5, speed: 0.89, outfit: ["naapridLeatherArmour", 1.5], weapon: ["hammer", [1, 1.5], 0, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51154, -8192, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena2", con: 1, speed: 0.85, outfit: ["naapridLeatherArmour", 1.5], weapon: ["warHammer", [3.5, 2], 1, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51079, -8019, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena2", con: 0.5, speed: 0.89, outfit: ["naapridLeatherArmour", 1.5], weapon: ["hammer", [1, 1.5], 0, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51008, -8134, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.5, speed: 0.9, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51130, -8114, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena2", con: 1, speed: 0.85, outfit: ["naapridLeatherArmour", 1.5], weapon: ["warHammer", [3.5, 2], 1, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51059, -8298, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 0.75, speed: 1, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1.5], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            ArtificialIntelligenceAccess.push(new Unit(51154, -8192, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena2", con: 1, speed: 1.1, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1.75], 1, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                    }
                    else
                    {
                        var rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 11, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 17, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8086, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 12, speed: 0.7, outfit: ["thenganPlateArmour", 16], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 15, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 10, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 6], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51538, -8166, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 19, speed: 0.65, outfit: ["thenganPlateArmour", 15], weapon: ["thenganWarhammer", [26, 16], 19, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51568, -8132, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 14, speed: 1.35, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51568, -8132, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 18, speed: 1.3, outfit: ["skolLeatherArmour", 3], weapon: ["smashStick", [13, 12], 10, 30, 2.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51568, -8132, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 16, speed: 1.1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51568, -8132, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena1", con: 7, speed: 0.85, outfit: ["thenganPlateArmour", 20], weapon: ["thenganSword", [10, 7], 0, 16, 1.35], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 15, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 14, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 10, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 6], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 19, speed: 0.65, outfit: ["thenganPlateArmour", 15], weapon: ["thenganWarhammer", [26, 16], 19, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 14, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 11, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 17, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 12, speed: 0.7, outfit: ["thenganPlateArmour", 16], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }

                        rnd = Math.random();
                        if (rnd > 0.7)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 13, speed: 1.35, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.4)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 12, speed: 1.3, outfit: ["skolLeatherArmour", 3], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else if (rnd > 0.1)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 16, speed: 1.1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena2", con: 13, speed: 0.85, outfit: ["thenganPlateArmour", 18], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                    }

                    quests.pitFight = false;
                }
                else if (quests.pitFight == "bears")
                {
                    quests.pitFight = "none";
                    if (Math.round(Math.random()))
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51046, -8031, "BlackBear", true, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(51042, -8252, "BlackBear", true, "arena3"));
                        if (Math.round(Math.random()))
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51001, -8140, "BlackBear", true, "arena3"));
                        }
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51046, -8031, "BlackBear", false, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(51042, -8252, "BlackBear", false, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(51001, -8140, "BlackBear", false, "arena3"));
                        if (Math.round(Math.random()))
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51160, -7975, "BlackBear", false, "arena3"));
                            ArtificialIntelligenceAccess.push(new Unit(51166, -8301, "BlackBear", false, "arena3"));
                        }
                    }
                }
                else if (quests.pitFight == "skols")
                {
                    quests.pitFight = "none";
                    if (Math.round(Math.random()))
                    {
                        if (Math.round(Math.random()))
                        {
                            if (Math.round(Math.random()))
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51046, -8031, "Skol", true, "arena3"));
                            }
                            ArtificialIntelligenceAccess.push(new Unit(51042, -8252, "Skol", true, "arena3"));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51042, -8252, "Skol", false, "arena3"));
                            ArtificialIntelligenceAccess.push(new Unit(51046, -8031, "Skol", false, "arena3"));
                            if (Math.round(Math.random()))
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51001, -8140, "Skol", false, "arena3"));
                            }
                            else
                            {
                                if (Math.round(Math.random()))
                                {
                                    if (Math.round(Math.random()))
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51160, -8000, "Skol", false, "arena3"));
                                        ArtificialIntelligenceAccess.push(new Unit(51166, -8276, "Skol", false, "arena3"));
                                    }
                                    else
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51162, -8012, "Skol", false, "arena3"));
                                    }
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51160, -8000, "Skol", false, "arena3"));
                                    ArtificialIntelligenceAccess.push(new Unit(51166, -8276, "Skol", false, "arena3"));
                                    if (Math.round(Math.random()))
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51162, -8012, "Skol", false, "arena3"));
                                    }
                                }
                            }
                        }
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51042, -8252, "Skol", false, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(51046, -8031, "Skol", false, "arena3"));
                        if (Math.round(Math.random()))
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51001, -8140, "Skol", false, "arena3"));
                        }
                    }
                }
                else if (quests.pitFight == "nogs")
                {
                    quests.pitFight = "none";
                    var rnd = Math.random();
                    if (rnd > 0.65)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51047, -8014, "Nog", true, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(51038, -8262, "Nog", false, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(50969, -8097, "Nog", true, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(51107, -8156, "Nog", false, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(51173, -8076, "Nog", false, "arena3"));
                        if (Math.round(Math.random()))
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51155, -8247, "Nog", false, "arena3"));
                            ArtificialIntelligenceAccess.push(new Unit(51202, -8131, "Nog", true, "arena3"));
                        }
                    }
                    else if (rnd > 0.32)
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51047, -8014, "Nog", false, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(51038, -8262, "Nog", true, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(50969, -8097, "Nog", false, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(51107, -8156, "Nog", true, "arena3"));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(51038, -8262, "Nog", false, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(50969, -8097, "Nog", true, "arena3"));
                        ArtificialIntelligenceAccess.push(new Unit(51107, -8156, "Nog", false, "arena3"));
                    }
                }
                else if (quests.pitFight == "pitFighters")
                {
                    quests.pitFight = "none";
                    var rnd = Math.random();
                    if (rnd > 0.65)
                    {
                        if (Math.round(Math.random()))
                        {
                            var rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 9, speed: 1.34, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 10, speed: 1.4, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 7, speed: 1.56, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 5], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 5, speed: 0.74, outfit: ["thenganPlateArmour", 14], weapon: ["flail", [27, 8.5], 17, 47, 7], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                        else
                        {
                            var rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 16, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["thenganSword", [10, 7], 0, 16, 1.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 14, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 17, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 10, speed: 0.7, outfit: ["thenganPlateArmour", 15], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                    }
                    else if (rnd > 0.32)
                    {
                        if (Math.round(Math.random()))
                        {
                            var rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 16, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["thenganSword", [10, 7], 0, 16, 1.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 14, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 17, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 10, speed: 0.7, outfit: ["thenganPlateArmour", 15], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }

                            rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 9, speed: 1.34, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 10, speed: 1.4, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 7, speed: 1.56, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 5], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 5, speed: 0.74, outfit: ["thenganPlateArmour", 14], weapon: ["flail", [27, 8.5], 17, 47, 7], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                        else
                        {
                            var rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 11, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["thenganWarhammer", [26, 16], 19, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 13, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 8, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 6], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 15, speed: 0.86, outfit: ["thenganPlateArmour", 15], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }

                            rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 13, speed: 1.35, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 12, speed: 1.3, outfit: ["skolLeatherArmour", 3], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 16, speed: 1.1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 13, speed: 0.85, outfit: ["thenganPlateArmour", 18], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                    }
                    else
                    {
                        if (Math.round(Math.random()))
                        {
                            var rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 11, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["thenganWarhammer", [26, 16], 19, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 13, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 8, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 6], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 15, speed: 0.86, outfit: ["thenganPlateArmour", 15], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }

                            rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 15, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["thenganSword", [10, 7], 0, 16, 1.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 10, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 18, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 11, speed: 0.7, outfit: ["thenganPlateArmour", 16], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }

                            rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 12, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [15, 5], 14, 20, 2.3], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 15, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 17, speed: 1.4, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 6], 0, 16, 1.2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 9, speed: 0.69, outfit: ["thenganPlateArmour", 14], weapon: ["longSpikedMorningStar", [18, 7], 14, 20, 2.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                        else
                        {
                            var rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 15, speed: 1.38, outfit: ["blackBearLeatherArmour", 6], weapon: ["smashStick", [12, 11], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 14, speed: 1.45, outfit: ["skolLeatherArmour", 3], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 10, speed: 1.55, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganSword", [8, 6], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8092, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 19, speed: 0.65, outfit: ["thenganPlateArmour", 15], weapon: ["thenganWarhammer", [26, 16], 19, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }

                            rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 14, speed: 1.2, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 11, speed: 1.52, outfit: ["skolLeatherArmour", 3], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 17, speed: 1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(51005, -8172, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 12, speed: 0.7, outfit: ["thenganPlateArmour", 16], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }

                            rnd = Math.random();
                            if (rnd > 0.7)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 13, speed: 1.35, outfit: ["blackBearLeatherArmour", 6], weapon: ["longSpikedMorningStar", [16, 6], 14, 20, 2.5], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.4)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 12, speed: 1.3, outfit: ["skolLeatherArmour", 3], weapon: ["smashStick", [13, 12], 10, 30, 2], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else if (rnd > 0.1)
                            {
                                ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 16, speed: 1.1, outfit: ["boulchomLeatherArmour", 2], weapon: ["thenganWarhammer", [20, 14], 16, 47, 6.4], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                ArtificialIntelligenceAccess.push(new Unit(50949, -8128, "Soldier", false, "Pit Fighting Champion", {race: "Thengar", faction: "arena3", con: 13, speed: 0.85, outfit: ["thenganPlateArmour", 18], weapon: ["thenganSword", [10, 7], 0, 16, 1.6], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                        }
                    }
                }
                else if (quests.pitFight == "prisoners")
                {
                    quests.pitFight = "none";
                    var rnd = Math.random();
                    if (rnd > 0.65)
                    {
                        if (Math.round(Math.random()))
                        {
                            rnd = Math.random();
                            if (rnd > 0.3333)
                            {
                                //kell soldier (prisoner)
                                ArtificialIntelligenceAccess.push(new Unit(51178, -8128, "Soldier", false, "War Prisoner", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.3, 0.35], 0, 0, 1.1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                //kell family
                                if (Math.round(Math.random()))
                                {
                                    if (Math.round(Math.random()))
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51178, -8145, "Soldier", false, "Slave Man", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51101, -8198, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51056, -8124, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    }
                                    else
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51048, -8191, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51077, -8171, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51079, -8218, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    }
                                }
                                else
                                {
                                    if (Math.round(Math.random()))
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51048, -8146, "Soldier", false, "Slave Man", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51077, -8126, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51079, -8173, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    }
                                    else
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51154, -8213, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51107, -8264, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51239, -8035, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51182, -8089, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    }
                                }
                            }
                        }
                        else
                        {
                            rnd = Math.random();
                            if (rnd > 0.3333)
                            {
                                //kell soldier (prisoner)
                                ArtificialIntelligenceAccess.push(new Unit(51178, -8128, "Soldier", false, "War Prisoner", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.3, 0.35], 0, 0, 1.1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                            }
                            else
                            {
                                //kell family
                                if (Math.round(Math.random()))
                                {
                                    if (Math.round(Math.random()))
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51178, -8145, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51101, -8198, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51056, -8124, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    }
                                    else
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51048, -8191, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51077, -8171, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51079, -8218, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    }
                                }
                                else
                                {
                                    if (Math.round(Math.random()))
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51048, -8146, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51077, -8126, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51079, -8173, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    }
                                    else
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51154, -8213, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51107, -8264, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51239, -8035, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(51182, -8089, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    }
                                }
                            }
                        }
                    }
                    else if (rnd > 0.32)
                    {
                        if (Math.round(Math.random()))
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51178, -8128, "Soldier", false, "War Prisoner", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["none", 0], weapon: ["none", [0.3, 0.35], 0, 0, 1.1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51061, -8126, "Soldier", false, "Alzkwaya Tribal", {race: "Kel", faction: "arena3", con: 14, speed: 1.5, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [8, 4], 3, 12, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                    }
                    else
                    {
                        if (Math.round(Math.random()))
                        {
                            ArtificialIntelligenceAccess.push(new Unit(51061, -8126, "Soldier", false, "Echlin Tribal", {race: "Kel", faction: "arena3", con: 18, speed: 1.37, outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [16, 1], 8, 16, 1.25], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                        }
                        else
                        {
                            if (Math.round(Math.random()))
                            {
                                rnd = Math.random();
                                if (rnd > 0.65)
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51061, -8126, "Soldier", false, "Alzkwaya Tribal", {race: "Kel", faction: "arena3", con: 13, speed: 1.5, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [8, 4], 3, 12, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(50987, -8126, "Soldier", false, "Alzkwaya Slave Man", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["mofuTribalWear", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(50950, -8085, "Soldier", false, "Alzkwaya Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["mofuTribalWear", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(50960, -8178, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["mofuTribalWear", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                                else if (rnd > 0.32)
                                {
                                    if (Math.random() > 0.65)
                                    {
                                        ArtificialIntelligenceAccess.push(new Unit(51061, -8126, "Soldier", false, "Echlin Tribal", {race: "Kel", faction: "arena3", con: 17, speed: 1.37, outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [16, 1], 8, 16, 1.25], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(50987, -8126, "Soldier", false, "Echlin Slave Woman", {race: "Kel", faction: "arena3", con: 1, speed: 0, outfit: ["naapridLeatherArmour", 4], weapon: ["none", [0.2, 0.2], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(50960, -8178, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["naapridLeatherArmour", 1.5], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                        ArtificialIntelligenceAccess.push(new Unit(50950, -8085, "Soldier", false, "Echlin Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0, outfit: ["naapridLeatherArmour", 1.5], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    }
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51099, -8071, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena3", con: 0.5, speed: 0.9, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [4, 0], 1, 4, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51083, -8156, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena3", con: 0.5, speed: 0.9, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [2, 1], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(50992, -8109, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0.82, outfit: ["naapridLeatherArmour", 1.5], weapon: ["hammer", [1, 0.8], 0.35, 0, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                            }
                            else
                            {
                                rnd = Math.random();

                                if (rnd > 0.49)
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51079, -8019, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena3", con: 0.5, speed: 0.95, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [4, 0.5], 1, 4, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51008, -8134, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena3", con: 0.25, speed: 0.85, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51130, -8114, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena3", con: 0.25, speed: 0.82, outfit: ["naapridLeatherArmour", 1.5], weapon: ["hammer", [1.5, 1], 0.25, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51059, -8298, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena3", con: 0.5, speed: 0.89, outfit: ["naapridLeatherArmour", 1.5], weapon: ["hammer", [1, 1.5], 0, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51154, -8192, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena3", con: 1, speed: 0.85, outfit: ["naapridLeatherArmour", 1.5], weapon: ["warHammer", [3.5, 2], 1, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                                else
                                {
                                    ArtificialIntelligenceAccess.push(new Unit(51079, -8019, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena3", con: 0.5, speed: 0.89, outfit: ["naapridLeatherArmour", 1.5], weapon: ["hammer", [1, 1.5], 0, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51008, -8134, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena3", con: 0.5, speed: 0.9, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51130, -8114, "Soldier", false, "Echlin Slave Boy", {race: "Kel", faction: "arena3", con: 1, speed: 0.85, outfit: ["naapridLeatherArmour", 1.5], weapon: ["warHammer", [3.5, 2], 1, 3, 0.9], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51059, -8298, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena3", con: 0.75, speed: 1, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1.5], 0.5, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                    ArtificialIntelligenceAccess.push(new Unit(51154, -8192, "Soldier", false, "Alzkwaya Slave Girl", {race: "Kel", faction: "arena3", con: 1, speed: 1.1, outfit: ["mofuTribalWear", 0], weapon: ["kellishSawClub", [3, 1.75], 1, 4, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                                }
                            }
                        }
                    }
                }

                //city guards
                ArtificialIntelligenceAccess.push(new Unit(51166, -7530, "Soldier", false, "Beulingerr Soldier", {race: "Thengar", faction: "Thengar", con: 5, speed: 1.15, outfit: ["chainArmour", 7], weapon: ["thenganSword", [8, 5], 0, 16, 1.3], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 0, patrolLoop: true, route:[[-514, 277], [-514, 277]]}));
                ArtificialIntelligenceAccess.push(new Unit(51945, -8393, "Soldier", false, "Beulingerr Soldier", {race: "Thengar", faction: "Thengar", con: 8, speed: 1.34, outfit: ["chainArmour", 6.5], weapon: ["thenganSword", [12, 4], 0, 16, 1.45], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 4, patrolLoop: true, route:[[51945, -10184], [50570, -10156], [50559, -8470], [51972, -8481]]}));
                ArtificialIntelligenceAccess.push(new Unit(51738, -9966, "Soldier", false, "Beulingerr Soldier", {race: "Thengar", faction: "Thengar", con: 6, speed: 1.27, outfit: ["chainArmour", 7.5], weapon: ["thenganSword", [6, 6], 0, 16, 1.25], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 8, patrolLoop: true, route:[[51724, -9287], [51157, -9272], [51152, -9064], [51747, -9066], [51738, -8679], [50749, -8692], [50750, -9979], [51738, -9966]]}));
                ArtificialIntelligenceAccess.push(new Unit(52037, -7560, "Soldier", false, "Beulingerr Soldier", {race: "Thengar", faction: "Thengar", con: 7, speed: 1.38, outfit: ["chainArmour", 7], weapon: ["thenganSword", [10, 5], 0, 16, 1.4], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 5, patrolLoop: true, route:[[53457, -7558], [53450, -7776], [50544, -7777], [50548, -6374], [53459, -6369]]}));
                ArtificialIntelligenceAccess.push(new Unit(53257, -6468, "Soldier", false, "Beulingerr Soldier", {race: "Thengar", faction: "Thengar", con: 9, speed: 1.21, outfit: ["chainArmour", 8], weapon: ["thenganSword", [9, 6], 0, 16, 1.3], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 2, patrolLoop: true, route:[[53267, -7596], [53257, -6468]]}));
                //citizens
                    //grain seller (only one on the map at once)
                var hits = 0;
                for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                {
                    if (ArtificialIntelligenceAccess[i].ID == "Grain Farmer")
                    {
                        hits += 1;
                    }
                }
                if (hits == 0)
                {
                    ArtificialIntelligenceAccess.push(new Unit(53064, -7291, "Person", false, "Grain Farmer", {race: "Thengar", faction: "Thengar", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.3, 0.25], 0, 1, 1], ranged: [false, "arrow", 8, 2200, 5, 7, 0, "none", 2], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 4], [new Item("harstGrain", false, false), 80]]}));
                }

                //Creatures
                ArtificialIntelligenceAccess.push(new Unit(48545, -4542, "Nog", false, "Chom-Chom"));
                ArtificialIntelligenceAccess.push(new Unit(48522, -5978, "Nog", false, "Cham-Chom"));
                ArtificialIntelligenceAccess.push(new Unit(48633, -6134, "Nog", false, "Chom-Cham"));
                ArtificialIntelligenceAccess.push(new Unit(48523, -7671, "Nog", true, "Cham-Cham"));
                ArtificialIntelligenceAccess.push(new Unit(49222, -8636, "Nog", false, "Chim-Chom"));
                ArtificialIntelligenceAccess.push(new Unit(48981, -8754, "Nog", false, "Chim-Cham"));
                ArtificialIntelligenceAccess.push(new Unit(47822, -9474, "Nog", false, "Chim-Chim"));
                ArtificialIntelligenceAccess.push(new Unit(48710, -9747, "Nog", false, "Cham-Chim"));
                ArtificialIntelligenceAccess.push(new Unit(49471, -9477, "Nog", false, "Chom-Chim"));
                ArtificialIntelligenceAccess.push(new Unit(48667, -10602, "Nog", false, "Chilm-Chom"));
                ArtificialIntelligenceAccess.push(new Unit(48479, -10688, "Nog", false, "Chom-Chalm"));
                ArtificialIntelligenceAccess.push(new Unit(48828, -10765, "Nog", true, "Cholm-Chilm"));
                ArtificialIntelligenceAccess.push(new Unit(49343, -10196, "Nog", false, "Cholm-Chim"));
                ArtificialIntelligenceAccess.push(new Unit(48547, -11796, "Nog", false, "Chilm-Chim"));
                ArtificialIntelligenceAccess.push(new Unit(48810, -11983, "Nog", true, "Chilm-Chorm"));
                ArtificialIntelligenceAccess.push(new Unit(48416, -13042, "Nog", false, "Chirm-Chim"));

                //buildings
                scenicList.push(new Scenery("thenganBuilding4", 50497, -10330, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 51258, -9800, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 51561, -9800, 0, true));
                scenicList.push(new Scenery("thenganBuilding3", 51052, -9548, 0, true));
                scenicList.push(new Scenery("thenganBuilding3", 51052, -9055, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 51561, -8874, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 51258, -8874, 0, true));
                scenicList.push(new Scenery("thenganBuilding5", 51561, -9506, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 51258, -9530, 0, true));
                scenicList.push(new Scenery("thenganBuilding3", 51486, -6942, 0, true));
                scenicList.push(new Scenery("thenganBuilding5", 51084, -6942, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 51238, -7205, 0, true));
                scenicList.push(new Scenery("thenganBuilding3", 51025, -7344, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 51234, -7398, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 51556, -7356, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 51858, -7356, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 52160, -7356, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 52462, -7356, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 52764, -7356, 0, true));
                scenicList.push(new Scenery("thenganBuilding5", 53066, -7282, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 51858, -7206, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 52160, -7206, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 52462, -7206, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 52764, -7206, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 51858, -6896, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 52160, -6896, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 52462, -6896, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 52764, -6896, 0, true));
                scenicList.push(new Scenery("thenganBuilding5", 53066, -6812, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 51858, -6746, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 52160, -6746, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 52462, -6746, 0, true));
                scenicList.push(new Scenery("thenganBuilding2", 52764, -6746, 0, true));
                scenicList.push(new Scenery("thenganBuilding1", 52793, -6224, 0, true));
                    //the residential zone
                scenicList.push(new Scenery("bed", 52833, -7184, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 52531, -7184, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 52229, -7184, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51927, -7184, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 52700, -7384, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 52398, -7384, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 52096, -7384, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51794, -7384, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51492, -7384, 0 * Math.PI, false));
                scenicList.push(new Scenery("thenganHearth", 51617, -7286, 0 * Math.PI, "lit"));
                scenicList.push(new Scenery("bed", 52833, -7184 + 460, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 52531, -7184 + 460, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 52229, -7184 + 460, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51927, -7184 + 460, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 52700, -7384 + 460, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 52398, -7384 + 460, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 52096, -7384 + 460, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51794, -7384 + 460, 1 * Math.PI, false));
                    //the inn
                scenicList.push(new Scenery("thenganHearth", 50281, -10331, 1/2 * Math.PI, "lit"));
                scenicList.push(new Scenery("bed", 50471, -10423, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 50471, -10240, 1 * Math.PI, false));
                scenicList.push(new Scenery("bartop", 50563, -10381, 1 * Math.PI, false));
                    //the well
                scenicList.push(new Scenery("thenganWell", 50927, -9830, 0, false));
                    //the sand pit
                scenicList.push(new Scenery("thenganSandbox", 51254, -8126, 0, false));
                    //blacksmithy
                scenicList.push(new Scenery("anvil", 51345, -9360, Math.PI * 5/8, true));
                scenicList.push(new Scenery("forge", 51178, -9377, Math.PI * 1/4, true));
                scenicList.push(new Scenery("countertop", 51179, -9536, 1/2 * Math.PI, false));
                scenicList.push(new Scenery("countertop", 51337, -9536, 1/2 * Math.PI, false));
                if (uniqueChars.dagmarLDS)
                {
                    scenicList.push(new Scenery("item", 51182, -9502, 0, "thengar", ["longSpikedMorningStar", 1, -100]));
                    scenicList.push(new Scenery("item", 51180, -9555, 0, "thengar", ["longsword", 1, -70]));
                    scenicList.push(new Scenery("item", 51334, -9496, 0, "thengar", ["thenganDagger", 1, -50]));
                    scenicList.push(new Scenery("item", 51334, -9563, 0, "thengar", ["smashStick", 1, -90]));
                }
                    //butcher's shop
                scenicList.push(new Scenery("countertop", 51642, -9415, 1/2 * Math.PI, false));
                if (uniqueChars.gerlachLDS)
                {
                    scenicList.push(new Scenery("item", 51643, -9367, 0, "thengar", ["rawHoffalgreFlesh", 1, -15]));
                    scenicList.push(new Scenery("item", 51642, -9387, 0, "thengar", ["rawBearFlesh", 1, -15]));
                    scenicList.push(new Scenery("item", 51643, -9409, 0, "thengar", ["rawBearTongue", 1, -15]));
                    scenicList.push(new Scenery("item", 51644, -9453, 0, "thengar", ["rawBoulchomFlesh", 1, -10]));
                    scenicList.push(new Scenery("item", 51642, -9429, 0, "thengar", ["rawRabbitFlesh", 1, -10]));
                }
                    //tailor shop
                scenicList.push(new Scenery("loom", 51324, -9747, 3/4 * Math.PI, true));
                scenicList.push(new Scenery("countertop", 51177, -9823, 1/2 * Math.PI, false));
                scenicList.push(new Scenery("countertop", 51205, -9823, 1/2 * Math.PI, false));
                scenicList.push(new Scenery("item", 51192, -9785, 0, "thengar", ["boulchomPelt", 1, -20]));
                scenicList.push(new Scenery("item", 51192, -9825, 0, "thengar", ["boulchomPelt", 1, -20]));
                scenicList.push(new Scenery("item", 51192, -9865, 0, "thengar", ["hoffalgrePelt", 1, -15]));
                    //balgurMercsHQ
                scenicList.push(new Scenery("bed", 51449, -6847, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51449, -7038, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51315, -6847, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51315, -7038, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51149, -6847, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51149, -7038, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51022, -6847, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51022, -7038, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51304, -7173, 0 * Math.PI, false));
                scenicList.push(new Scenery("thenganHearth", 51240, -7276, Math.PI, "lit"));
                    //playerPurchasableHome
                if (quests.lethikHomeOwned)
                {
                    scenicList.push(new Scenery("bed", 51329, -8839, 0 * Math.PI, true));
                    scenicList.push(new Scenery("thenganHearth", 51181, -8925, 1/2 * Math.PI, true));
                    scenicList.push(new Scenery("sign", 51186, -8775, Math.PI, 3, "Battlecry Cabin"));
                }
                else
                {
                    scenicList.push(new Scenery("bed", 51329, -8839, 0 * Math.PI, false));
                    scenicList.push(new Scenery("thenganHearth", 51181, -8925, 1/2 * Math.PI, false));
                    scenicList.push(new Scenery("sign", 51186, -8775, Math.PI, 3, "For Sale - 5500 coins"));
                }
                    //barracks
                scenicList.push(new Scenery("bed", 51449 - 465, -6847 - 396, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51449 - 465, -7038 - 407, 1 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51315 - 465, -6847 - 396, 0 * Math.PI, false));
                scenicList.push(new Scenery("bed", 51315 - 465, -7038 - 407, 1 * Math.PI, false));
                    //apothecary
                scenicList.push(new Scenery("thenganHearth", 51564, -8943, 1 * Math.PI, "lit"));
                scenicList.push(new Scenery("lab", 51562, -8874, 0 * Math.PI, true));
                scenicList.push(new Scenery("countertop", 51642, -8897, -1/2 * Math.PI, false));
                if (uniqueChars.johannaLDS)
                {
                    scenicList.push(new Scenery("item", 51642, -8947, 0, "thengar", ["lizardTail", 1, -10]));
                    scenicList.push(new Scenery("item", 51642, -8921, 0, "thengar", ["steugiurneFlower", 1, -30]));
                    scenicList.push(new Scenery("item", 51640, -8892, 0, "thengar", ["thalisLeaf", 1, -15]));
                    scenicList.push(new Scenery("item", 51641, -8870, 0, "thengar", ["viperSnakeSkin", 1, -20]));
                    scenicList.push(new Scenery("item", 51643, -8850, 0, "thengar", ["kofkeLeaves", 1, -20]));
                }
                //city prison
                scenicList.push(new Scenery("trapdoor", 53014, -6700, 0 * Math.PI, [379, 424], "lethikCityPrison"));
                if (quests.rutgarSlave)
                {
                    quests.rutgarSlave = false;
                    var slavesSex = Math.round(Math.random());
                    if (slavesSex)
                    {
                        var slaveName = prompt("Your slave has been procured, but what is her name?", "Ailey");
                    }
                    else
                    {
                        var slaveName = prompt("Your slave has been procured, but what is his name?", "Connor");
                    }

                    if (typeof(slaveName) == "undefined" || slaveName == "")
                    {
                        if (slavesSex)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(53014, -6700, "Soldier", false, "Slave Woman", {race: "Kel", faction: "player", con: 1.25, speed: 1.15, outfit: ["none", 0], weapon: ["none", [0.3, 0.25], 0, 1, 1], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: 0, patrolStops: 0, patrolLoop: false, route:[], storage: true, storageCap: 1, merchant: true, merchandise: []}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(53014, -6700, "Soldier", false, "Slave Man", {race: "Kel", faction: "player", con: 3, speed: 1, outfit: ["none", 0], weapon: ["none", [0.3, 0.25], 0, 1, 1], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: 0, patrolStops: 0, patrolLoop: false, route:[], storage: true, storageCap: 1, merchant: true, merchandise: []}));
                        }


                    }
                    else
                    {
                        if (slavesSex)
                        {
                            ArtificialIntelligenceAccess.push(new Unit(53014, -6700, "Soldier", false, slaveName + ", " + player.name + "'s Slave", {race: "Kel", faction: "player", con: 1.25, speed: 1.15, outfit: ["none", 0], weapon: ["none", [0.3, 0.25], 0, 1, 1], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: 0, patrolStops: 0, patrolLoop: false, route:[], storage: true, storageCap: 1, merchant: true, merchandise: []}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(53014, -6700, "Soldier", false, slaveName + ", " + player.name + "'s Slave", {race: "Kel", faction: "player", con: 3, speed: 1, outfit: ["none", 0], weapon: ["none", [0.3, 0.25], 0, 1, 1], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: 0, patrolStops: 0, patrolLoop: false, route:[], storage: true, storageCap: 1, merchant: true, merchandise: []}));
                        }
                    }

                }
                //signs
                scenicList.push(new Scenery("sign", 50710, -10222, Math.PI, 3, "The Ragged Wanderer - Inn"));
                scenicList.push(new Scenery("sign", 51307, -9427, Math.PI, 3, "Bonecrusher Arms/Armour"));
                scenicList.push(new Scenery("sign", 51631, -9904, -0 * Math.PI, 3, "Bamey's Hunt Shop"));
                scenicList.push(new Scenery("sign", 51193, -9902, -0 * Math.PI, 3, "The Careful Stiches"));
                scenicList.push(new Scenery("sign", 51677, -9586, 1/2 * Math.PI, 3, "The Meatery"));
                scenicList.push(new Scenery("sign", 50834, -9593, -1/2 * Math.PI, 3, "Lethik General Store"));
                scenicList.push(new Scenery("sign", 50834, -8972, -1/2 * Math.PI, 3, "Lethik City Bank"));
                scenicList.push(new Scenery("sign", 51631, -8771, Math.PI, 3, "Sweet Leaf Apothecary"));
                scenicList.push(new Scenery("sign", 50805, -7419, -1/2 * Math.PI, 3, "Lethik City Barracks"));
                scenicList.push(new Scenery("sign", 51292, -7496, -0 * Math.PI, 3, "Lethik City Barracks"));
                scenicList.push(new Scenery("sign", 53180, -7371, 1/2 * Math.PI, 3, "Redbrick Farm - Produce Shop/Farm"));
                scenicList.push(new Scenery("sign", 53180, -6750, 1/2 * Math.PI, 3, "Lethik City Prison"));

                //leaping beasts
                ArtificialIntelligenceAccess.push(new Unit(51835, -4394, "Boulchom", true, "Chraular"));
                ArtificialIntelligenceAccess.push(new Unit(54848, -10379, "Boulchom", false, "Graw"));
                ArtificialIntelligenceAccess.push(new Unit(56007, -4941, "Boulchom", false, "Grew"));

                //fuzzy bunnies
                ArtificialIntelligenceAccess.push(new Unit(51199, -5791, "Conejo", true, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(49944, -6433, "Conejo", false, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(51472, -11115, "Conejo", true, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(52512, -10540, "Conejo", false, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(52555, -9697, "Conejo", false, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(52975, -8101, "Conejo", true, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(54535, -6473, "Conejo", true, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(54245, -5778, "Conejo", false, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(53112, -10408, "Conejo", false, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(52474, -11869, "Conejo", true, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(50198, -11730, "Conejo", false, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(56994, -9547, "Conejo", false, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(56103, -7759, "Conejo", true, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(57216, -7422, "Conejo", false, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(52782, -9167, "Conejo", false, "neutral2"));
                ArtificialIntelligenceAccess.push(new Unit(51403, -13049, "Conejo", true, "neutral2"));

                //sun baskers basking in the sun
                ArtificialIntelligenceAccess.push(new Unit(53162, -12293, "Thueg", true, "Dillo"));
                ArtificialIntelligenceAccess.push(new Unit(52521, -12553, "Thueg", false, "Arma"));
                ArtificialIntelligenceAccess.push(new Unit(50330, -12849, "Thueg", true, "Dallo"));
                ArtificialIntelligenceAccess.push(new Unit(51547, -12505, "Thueg", "baby", "Dal"));
                ArtificialIntelligenceAccess.push(new Unit(52152, -13314, "Thueg", false, "Calma"));
                ArtificialIntelligenceAccess.push(new Unit(56617, -11499, "Thueg", false, "Gal"));
                ArtificialIntelligenceAccess.push(new Unit(56999, -12395, "Thueg", "baby", "Dol"));
                ArtificialIntelligenceAccess.push(new Unit(55838, -12139, "Thueg", "baby", "Dil"));
                ArtificialIntelligenceAccess.push(new Unit(56498, -6155, "Thueg", true, "Dollo"));
                ArtificialIntelligenceAccess.push(new Unit(56493, -5432, "Thueg", false, "Gallo"));
                ArtificialIntelligenceAccess.push(new Unit(49215, -5067, "Thueg", false, "Gillo"));

                //Plants
                    //flora silvestre
                scenicList.push(new Scenery("vorlymPlant", 56069, -4971, 1.2, false));
                scenicList.push(new Scenery("galloshPlant", 54769, -6544, 6, false));
                scenicList.push(new Scenery("galloshPlant", 51798, -5305, 0, false));
                scenicList.push(new Scenery("vorlymPlant", 50130, -12600, -4.4, false));
                scenicList.push(new Scenery("galloshPlant", 56590, -12133, 3, false));
                scenicList.push(new Scenery("vorlymPlant", 55622, -10570, 2.81, false));
                scenicList.push(new Scenery("galloshPlant", 53651, -12192, 5.5, false));
                scenicList.push(new Scenery("galloshPlant", 51235, -11803, -2.6, false));
                    //Farms
                        //Cursed Farm
                if (uniqueChars.vsevolodLDS == false)
                {
                    scenicList.push(new Scenery("suuliPlant", 52958, -6076, 0, "thengar"));
                    scenicList.push(new Scenery("suuliPlant", 53028, -6076, -4, "thengar"));
                    scenicList.push(new Scenery("suuliPlant", 53114, -6076, 1, "thengar"));
                    scenicList.push(new Scenery("suuliPlant", 53214, -6076, 3.15, "thengar"));
                    scenicList.push(new Scenery("santhPlant", 53301, -6080, 1, "thengar"));
                    scenicList.push(new Scenery("santhPlant", 53342, -6080, 5, "thengar"));
                    scenicList.push(new Scenery("santhPlant", 53400, -6080, 2, "thengar"));
                    scenicList.push(new Scenery("santhPlant", 53462, -6080, 3, "thengar"));
                    scenicList.push(new Scenery("santhPlant", 53370, -6055, 0, "thengar"));
                    scenicList.push(new Scenery("santhPlant", 53432, -6053, 4, "thengar"));
                    scenicList.push(new Scenery("santhPlant", 53316, -6050, -3, "thengar"));
                    scenicList.push(new Scenery("santhPlant", 53478, -6050, -6, "thengar"));

                    //carrots row 1
                    scenicList.push(new Scenery("carrotPlant", 52936, -6158, -0.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 17, -6158, 4.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 34, -6158, 2.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 51, -6158, 5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 68, -6158, 2, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 85, -6158, -2.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 102, -6158, 4, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 119, -6158, -3.25, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 136, -6158, 3, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 153, -6158, 1.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 170, -6158, -5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 187, -6158, -2, "thengar"));
                    //carrots row 2
                    scenicList.push(new Scenery("carrotPlant", 52936, -6158 + 10, -4.3, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 17, -6158 + 20, 2.3, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 34, -6158 + 20, 2, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 51, -6158 + 20, 8, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 68, -6158 + 20, 6, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 85, -6158 + 20, -5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 102, -6158 + 20, 3, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 119, -6158 + 20, -21, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 136, -6158 + 20, 6, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 153, -6158 + 20, 7.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 170, -6158 + 20, -2, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 187, -6158 + 20, -3, "thengar"));
                    //carrots row 3
                    scenicList.push(new Scenery("carrotPlant", 52936, -6158 - 20, -0.9, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 17, -6158 - 20, 4.4, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 34, -6158 - 20, 4.9, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 51, -6158 - 20, 1.3, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 68, -6158 - 20, 3.6, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 85, -6158 - 20, -12.2, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 102, -6158 - 20, 2.6, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 119, -6158 - 20, -2, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 136, -6158 - 20, 1, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 153, -6158 - 20, 6, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 170, -6158 - 20, -7, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 187, -6158 - 20, -4, "thengar"));

                    //carrots row 1
                    scenicList.push(new Scenery("carrotPlant", 52936, -6158 - 95, -0.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 17, -6158 - 95, 4.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 34, -6158 - 95, 2.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 51, -6158 - 95, 5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 68, -6158 - 95, 2, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 85, -6158 - 95, -2.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 102, -6158 - 95, 4, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 119, -6158 - 95, -3.25, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 136, -6158 - 95, 3, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 153, -6158 - 95, 1.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 170, -6158 - 95, -5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 187, -6158 - 95, -2, "thengar"));
                    //carrots row 2
                    scenicList.push(new Scenery("carrotPlant", 52936, -6158 - 75, -4.3, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 17, -6158 - 75, 2.3, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 34, -6158 - 75, 2, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 51, -6158 - 75, 8, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 68, -6158 - 75, 6, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 85, -6158 - 75, -5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 102, -6158 - 75, 3, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 119, -6158 - 75, -21, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 136, -6158 - 75, 6, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 153, -6158 - 75, 7.5, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 170, -6158 - 75, -2, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 187, -6158 - 75, -3, "thengar"));
                    //carrots row 3
                    scenicList.push(new Scenery("carrotPlant", 52936, -6158 - 115, -0.9, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 17, -6158 - 115, 4.4, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 34, -6158 - 115, 4.9, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 51, -6158 - 115, 1.3, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 68, -6158 - 115, 3.6, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 85, -6158 - 115, -12.2, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 102, -6158 - 115, 2.6, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 119, -6158 - 115, -2, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 136, -6158 - 115, 1, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 153, -6158 - 115, 6, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 170, -6158 - 115, -7, "thengar"));
                    scenicList.push(new Scenery("carrotPlant", 52936 + 187, -6158 - 115, -4, "thengar"));

                    scenicList.push(new Scenery("potatoPlant", 53220, -6287, -1.1, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 30, -6287, -5, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 60, -6287, 3.72, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 90, -6287, 1.8, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 120, -6287, 6.72, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 150, -6287, -5, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 180, -6287, 5, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 210, -6287, 1, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 240, -6287, -3, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 270, -6287, -9, "thengar"));

                    scenicList.push(new Scenery("potatoPlant", 53220, -6287 + 70, -4.1, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 30, -6287 + 70, -5, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 60, -6287 + 70, 7.62, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 90, -6287 + 70, 11, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 120, -6287 + 70, 32, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 150, -6287 + 70, -3, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 180, -6287 + 70, 4, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 210, -6287 + 70, 1, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 240, -6287 + 70, -7, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 270, -6287 + 70, -55, "thengar"));

                    scenicList.push(new Scenery("potatoPlant", 53220, -6287 + 140, -2, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 30, -6287 + 140, -3, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 60, -6287 + 140, 1.46, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 90, -6287 + 140, 7.9, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 120, -6287 + 140, -3.6, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 150, -6287 + 140, 4.75, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 180, -6287 + 140, -5, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 210, -6287 + 140, -1, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 240, -6287 + 140, 1.7, "thengar"));
                    scenicList.push(new Scenery("potatoPlant", 53220 + 270, -6287 + 140, 4, "thengar"));
                }
                        //redbrick farm
                //column 1
                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267, 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267 - (44 * 1), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267 - (44 * 2), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267 - (44 * 3), 4, "thengar"));

                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267 - (44 * 5), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267 - (44 * 6), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267 - (44 * 7), 4, "thengar"));

                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267 - (44 * 9), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267 - (44 * 10), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267 - (44 * 11), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 - 10, -7267 - (44 * 12), 4, "thengar"));

                //column 2
                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267, 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267 - (44 * 1), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267 - (44 * 2), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267 - (44 * 3), 4, "thengar"));

                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267 - (44 * 5), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267 - (44 * 6), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267 - (44 * 7), 4, "thengar"));

                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267 - (44 * 9), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267 - (44 * 10), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267 - (44 * 11), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 70, -7267 - (44 * 12), 4, "thengar"));

                //column 3
                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267, 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267 - (44 * 1), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267 - (44 * 2), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267 - (44 * 3), 4, "thengar"));

                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267 - (44 * 5), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267 - (44 * 6), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267 - (44 * 7), 4, "thengar"));

                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267 - (44 * 9), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267 - (44 * 10), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267 - (44 * 11), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 150, -7267 - (44 * 12), 4, "thengar"));

                //column 4
                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267, 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267 - (44 * 1), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267 - (44 * 2), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267 - (44 * 3), 4, "thengar"));

                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267 - (44 * 5), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267 - (44 * 6), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267 - (44 * 7), 4, "thengar"));

                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267 - (44 * 9), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267 - (44 * 10), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267 - (44 * 11), 4, "thengar"));
                scenicList.push(new Scenery("harstPlant", 53546 + 230, -7267 - (44 * 12), 4, "thengar"));
                //scenicList.push(new Scenery("haeflowerPlant", 15185, 4442, 4, true));

                change = "s1w5";
            }
        }
        else if (region == "w5")
        {
            if (change != "w5")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION

                //Creatures
                ArtificialIntelligenceAccess.push(new Unit(49791, -2099, "Boulchom", false, "Boork"));
                ArtificialIntelligenceAccess.push(new Unit(56357, -2218, "Thueg", false, "Spindles"));
                ArtificialIntelligenceAccess.push(new Unit(57089, -2223, "Thueg", "baby", "Spindlez"));
                ArtificialIntelligenceAccess.push(new Unit(56780, -2980, "Conejo", true, "boo"));
                ArtificialIntelligenceAccess.push(new Unit(54703, -2152, "Conejo", false, "book"));
                ArtificialIntelligenceAccess.push(new Unit(49347, -3077, "Boulchom", false, "Balg"));
                ArtificialIntelligenceAccess.push(new Unit(48738, -2165, "Thueg", false, "Spindles"));
                ArtificialIntelligenceAccess.push(new Unit(49756, -2106, "Conejo", false, "booky"));

                //Worms (not ripped off from Dune whatsoever)
                ArtificialIntelligenceAccess.push(new Unit(48678, -1004, "Lombris", false, "Dune"));
                ArtificialIntelligenceAccess.push(new Unit(49865, -661, "Lombris", false, "Duna"));
                ArtificialIntelligenceAccess.push(new Unit(50518, -1460, "Lombris", false, "Lom"));
                ArtificialIntelligenceAccess.push(new Unit(51522, -732, "Lombris", false, "Bris"));
                ArtificialIntelligenceAccess.push(new Unit(54476, -387, "Lombris", true, "Brys"));
                ArtificialIntelligenceAccess.push(new Unit(56400, -485, "Lombris", false, "Lomol"));
                ArtificialIntelligenceAccess.push(new Unit(56904, 1205, "Lombris", true, "Brysol"));
                ArtificialIntelligenceAccess.push(new Unit(54758, 1943, "Lombris", false, "Draln"));
                ArtificialIntelligenceAccess.push(new Unit(52311, 1550, "Lombris", false, "Driln"));
                ArtificialIntelligenceAccess.push(new Unit(48867, 2248, "Lombris", false, "Dreln"));
                ArtificialIntelligenceAccess.push(new Unit(51315, 1394, "Lombris", false, "Druln"));
                ArtificialIntelligenceAccess.push(new Unit(49674, 3448, "Lombris", true, "Dryln"));
                ArtificialIntelligenceAccess.push(new Unit(48833, 5885, "Lombris", true, "Dreuln"));
                ArtificialIntelligenceAccess.push(new Unit(52760, 5462, "Lombris", true, "Draaln"));
                ArtificialIntelligenceAccess.push(new Unit(52929, -597, "Lombris", false, "Drooln"));
                ArtificialIntelligenceAccess.push(new Unit(51847, 4531, "Lombris", true, "Drouln"));
                ArtificialIntelligenceAccess.push(new Unit(54483, 3935, "Lombris", false, "Dreiln"));
                ArtificialIntelligenceAccess.push(new Unit(56540, 2269, "Lombris", true, "Droaln"));
                ArtificialIntelligenceAccess.push(new Unit(57427, 5350, "Lombris", false, "Drieln"));
                ArtificialIntelligenceAccess.push(new Unit(53909, 5323, "Lombris", false, "Drioln"));
                ArtificialIntelligenceAccess.push(new Unit(50610, 9, "Lombris", false, "Dryiln"));
                ArtificialIntelligenceAccess.push(new Unit(52654, 2604, "Lombris", true, "Drueln"));
                ArtificialIntelligenceAccess.push(new Unit(55717, 4334, "Lombris", true, "Druyln"));
                ArtificialIntelligenceAccess.push(new Unit(49396, 899, "Lombris", true, "Drualn"));
                ArtificialIntelligenceAccess.push(new Unit(57382, 3259, "Lombris", false, "Drieln"));
                //Mud Beetles
                ArtificialIntelligenceAccess.push(new Unit(54541, 192, "MudBeetle", true, "Brufe"));
                ArtificialIntelligenceAccess.push(new Unit(50024, 1055, "MudBeetle", true, "Brufe"));
                ArtificialIntelligenceAccess.push(new Unit(52521, 4689, "MudBeetle", true, "Brufe"));
                ArtificialIntelligenceAccess.push(new Unit(54120, 3408, "MudBeetle", true, "Brufe"));
                ArtificialIntelligenceAccess.push(new Unit(55264, 2258, "MudBeetle", true, "Brufe"));
                ArtificialIntelligenceAccess.push(new Unit(52169, 27, "MudBeetle", true, "Brufe"));
                ArtificialIntelligenceAccess.push(new Unit(51113, -1230, "MudBeetle", true, "Brufe"));
                ArtificialIntelligenceAccess.push(new Unit(48970, -11, "MudBeetle", true, "Brufe"));
                ArtificialIntelligenceAccess.push(new Unit(51652, 3171, "MudBeetle", true, "Brufe"));
                ArtificialIntelligenceAccess.push(new Unit(56369, 944, "MudBeetle", true, "Brufe"));
                ArtificialIntelligenceAccess.push(new Unit(53413, 71, "MudBeetle", true, "Brufe"));


                //Plants
                scenicList.push(new Scenery("vorlymPlant", 50983, -2297, 1.5, false));
                scenicList.push(new Scenery("galloshPlant", 56610, -2539, -4, false));
                scenicList.push(new Scenery("galloshPlant", 49607, -2238, -2, false));

                change = "w5";
            }
        }
        else if (region == "s1w6") //Visig Forest
        {
            if (change != "s1w6")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Non-native Scenery
                scenicList = [];

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION

                //Creatures

                //plains
                if (change == "s1w5")
                {
                    ArtificialIntelligenceAccess.push(new Unit(58903, -11142, "Boulchom", true, "Borke"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(58903, -11142, "Boulchom", false, "Borke"));
                }
                ArtificialIntelligenceAccess.push(new Unit(58559, -12675, "Boulchom", false, "Borkuh"));
                ArtificialIntelligenceAccess.push(new Unit(58786, -4115, "Thueg", true, "Spinele"));
                ArtificialIntelligenceAccess.push(new Unit(59074, -4404, "Thueg", "baby", "Espind"));
                ArtificialIntelligenceAccess.push(new Unit(58302, -4371, "Thueg", false, "Spinedler"));
                ArtificialIntelligenceAccess.push(new Unit(58900, -13337, "Thueg", false, "Spinedlar"));
                ArtificialIntelligenceAccess.push(new Unit(58720, -5452, "Conejo", true, "Boka"));
                ArtificialIntelligenceAccess.push(new Unit(59171, -6370, "Conejo", false, "Boke"));
                ArtificialIntelligenceAccess.push(new Unit(58296, -7143, "Conejo", true, "Boko"));
                ArtificialIntelligenceAccess.push(new Unit(59347, -8061, "Conejo", false, "Boki"));

                //bears
                if (change != "s2w6") //if the player comes into the map from any direction other than the south.
                {
                    ArtificialIntelligenceAccess.push(new Unit(62507, -13387, "BlackBear", true, "Jude"));
                    ArtificialIntelligenceAccess.push(new Unit(64266, -13056, "BlackBear", false, "Judy"));
                    ArtificialIntelligenceAccess.push(new Unit(63375, -5468, "BlackBear", true, "Juda"));
                }
                ArtificialIntelligenceAccess.push(new Unit(66639, -5687, "BlackBear", false, "Judis"));

                //skols
                if (change != "s1w7") //if the player comes into the map from any direction other than the West.
                {
                    ArtificialIntelligenceAccess.push(new Unit(68000, -12516, "Skol", false, "Jane"));
                    ArtificialIntelligenceAccess.push(new Unit(67703, -12273, "Skol", true, "John"));
                }

                ArtificialIntelligenceAccess.push(new Unit(66760, -12016, "Skol", false, "Joe"));
                ArtificialIntelligenceAccess.push(new Unit(60743, -6730, "Skol", false, "Joe"));
                ArtificialIntelligenceAccess.push(new Unit(61410, -6051, "Skol", false, "Joe"));
                ArtificialIntelligenceAccess.push(new Unit(62161, -5413, "Skol", false, "Joe"));
                ArtificialIntelligenceAccess.push(new Unit(60671, -5870, "Skol", false, "Joana"));
                ArtificialIntelligenceAccess.push(new Unit(60579, -5241, "Skol", true, "Joey"));
                ArtificialIntelligenceAccess.push(new Unit(61816, -4725, "Skol", false, "Joe"));
                ArtificialIntelligenceAccess.push(new Unit(62187, -4415, "Skol", false, "Joe"));
                ArtificialIntelligenceAccess.push(new Unit(59966, -13347, "Skol", false, "Joe"));

                //scamper or buzz
                ArtificialIntelligenceAccess.push(new Unit(64720, -8143, "Lizard", true, "Lizol"));
                ArtificialIntelligenceAccess.push(new Unit(60758, -11715, "Lizard", false, "Lizelit"));
                ArtificialIntelligenceAccess.push(new Unit(59936, -9982, "Lizard", false, "Lizelit"));
                ArtificialIntelligenceAccess.push(new Unit(60687, -10171, "Lizard", true, "Lazaro"));
                ArtificialIntelligenceAccess.push(new Unit(60108, -12414, "Fletter", true, "Floz"));
                ArtificialIntelligenceAccess.push(new Unit(62028, -9727, "Fletter", true, "Fliz"));
                ArtificialIntelligenceAccess.push(new Unit(61254, -9727, "Fletter", false, "Flaz"));
                ArtificialIntelligenceAccess.push(new Unit(65747, -13070, "Fletter", false, "Fluz"));
                ArtificialIntelligenceAccess.push(new Unit(67176, -13386, "Lizard", false, "Lizaq"));
                ArtificialIntelligenceAccess.push(new Unit(62515, -10555, "Lizard", false, "Lizelith"));
                ArtificialIntelligenceAccess.push(new Unit(64379, -17435, "Fletter", false, "Flooz"));
                ArtificialIntelligenceAccess.push(new Unit(61672, -17692, "Fletter", false, "Flilz"));
                ArtificialIntelligenceAccess.push(new Unit(62041, -5599, "Lizard", true, "docile"));
                ArtificialIntelligenceAccess.push(new Unit(66430, -4469, "Lizard", false, "Lizelim"));
                ArtificialIntelligenceAccess.push(new Unit(66642, -3981, "Fletter", true, "Flip"));
                ArtificialIntelligenceAccess.push(new Unit(65654, -4186, "Lizard", true, "lizaker"));
                ArtificialIntelligenceAccess.push(new Unit(65521, -4248, "Lizard", false, "Lizelinc"));

                //random
                var rnd = Math.random();

                if (rnd > 0.45)
                {
                    ArtificialIntelligenceAccess.push(new Unit(61382, -11143, "Lizard", false, "Liza"));
                    ArtificialIntelligenceAccess.push(new Unit(66985, -6172, "Skol", true, "Johanan"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(61382, -11143, "BlackBear", false, "Juhv"));
                    ArtificialIntelligenceAccess.push(new Unit(66985, -6172, "BlackBear", false, "Juhvuh"));
                }

                rnd = Math.random();

                if (rnd > 0.9)
                {
                    ArtificialIntelligenceAccess.push(new Unit(60198, -13161, "Skol", true, "Joey"));
                    ArtificialIntelligenceAccess.push(new Unit(60231, -13360, "Skol", false, "Joe"));
                }
                else if (rnd > 0.7)
                {
                    ArtificialIntelligenceAccess.push(new Unit(60198, -13161, "Skol", false, "Joe"));
                    ArtificialIntelligenceAccess.push(new Unit(60231, -13360, "Skol", false, "Joe"));
                }
                else if (rnd > 0.6)
                {
                    ArtificialIntelligenceAccess.push(new Unit(60198, -13161, "Skol", false, "Joe"));
                    ArtificialIntelligenceAccess.push(new Unit(60231, -13360, "Skol", false, "Joe"));
                    ArtificialIntelligenceAccess.push(new Unit(59851, -13442, "Skol", false, "Joe"));
                    ArtificialIntelligenceAccess.push(new Unit(60267, -12705, "Skol", false, "Joe"));
                    ArtificialIntelligenceAccess.push(new Unit(60539, -13118, "Skol", false, "Joe"));
                }

                rnd = Math.random();

                if (rnd > 0.33)
                {
                    ArtificialIntelligenceAccess.push(new Unit(7593, -13477, "Lizard", true, "Lizathera"));
                    ArtificialIntelligenceAccess.push(new Unit(66417, -13665, "Lizard", false, "Lizatherine"));
                }
                else
                {
                    if (change != "s2w6") //if the player comes into the map from any direction other than the south.
                    {
                        ArtificialIntelligenceAccess.push(new Unit(7593, -13477, "Skol", false, "Joe"));
                        ArtificialIntelligenceAccess.push(new Unit(66417, -13665, "Skol", false, "Joe"));
                    }
                }

                rnd = Math.random();

                if (rnd > 0.51)
                {
                    if (change != "w6") //if the player comes into the map from any direction other than the south.
                    {
                        ArtificialIntelligenceAccess.push(new Unit(60173, -4454, "Skol", false, "Joe"));
                        ArtificialIntelligenceAccess.push(new Unit(60398, -3769, "Skol", false, "Joe"));
                        ArtificialIntelligenceAccess.push(new Unit(60742, -4194, "Skol", false, "Joe"));
                    }
                }

                rnd = Math.random();

                if (rnd > 0.4)
                {
                    ArtificialIntelligenceAccess.push(new Unit(63884, -10679, "Lizard", true, "Lizather"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(63884, -10679, "BlackBear", false, "Juve"));
                }

                rnd = Math.random();

                if (rnd > 0.35)
                {
                    ArtificialIntelligenceAccess.push(new Unit(63343, -12367, "Lizard", true, "Lizeltor"));
                }
                else if (rnd > 0.25)
                {
                    ArtificialIntelligenceAccess.push(new Unit(63343, -12367, "Skol", true, "Jolina"));
                }
                else if (rnd > 0.15)
                {
                    ArtificialIntelligenceAccess.push(new Unit(63343, -12367, "BlackBear", true, "Juvjuv"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(63343, -12367, "BlackBear", false, "Juventud"));
                }

                rnd = Math.random();

                if (rnd > 0.84)
                {
                    ArtificialIntelligenceAccess.push(new Unit(63787, -11429, "Skol", false, "Jole"));
                    ArtificialIntelligenceAccess.push(new Unit(64029, -12234, "Skol", false, "Jome"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(63787, -11429, "Lizard", false, "Lizeilia"));
                }

                rnd = Math.random();

                if (rnd > 0.50)
                {
                    ArtificialIntelligenceAccess.push(new Unit(66704, -7915, "Skol", false, "Joel"));
                    ArtificialIntelligenceAccess.push(new Unit(67043, -9071, "Skol", false, "Joem"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(66351, -7422, "Hoffalgre", true, "Humfrez"));
                    ArtificialIntelligenceAccess.push(new Unit(65857, -7533, "Hoffalgre", true, "Herbertaz"));
                }

                rnd = Math.random();

                if (rnd > 0.50)
                {
                    ArtificialIntelligenceAccess.push(new Unit(63956, -4871, "Skol", true, "Jolac"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(63956, -4871, "Hoffalgre", true, "Humfar"));
                    ArtificialIntelligenceAccess.push(new Unit(63692, -4440, "Hoffalgre", true, "Hirbel"));
                }

                rnd = Math.random();

                if (rnd > 0.30)
                {
                    ArtificialIntelligenceAccess.push(new Unit(63474, -8177, "Skol", false, "Joela"));
                    ArtificialIntelligenceAccess.push(new Unit(63223, -8591, "Skol", false, "Joema"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(63474, -8177, "Hoffalgre", false, "Herber"));
                    ArtificialIntelligenceAccess.push(new Unit(63223, -8591, "Lizard", true, "Lizo"));
                }

                rnd = Math.random();

                if (rnd > 0.40)
                {
                    ArtificialIntelligenceAccess.push(new Unit(63908, -7556, "Skol", false, "Joele"));
                }
                else
                {

                    ArtificialIntelligenceAccess.push(new Unit(63908, -7556, "Lizard", false, "Lizom"));
                }

                rnd = Math.random();

                if (rnd > 0.45)
                {
                    scenicList.push(new Scenery("callopPlant", 60515, -5461, -10, false));
                }
                else
                {

                    scenicList.push(new Scenery("darbPlant", 60515, -5461, -10, false));
                }

                rnd = Math.random();

                if (rnd > 0.14)
                {
                    ArtificialIntelligenceAccess.push(new Unit(61076, -10412, "Lizard", false, "Liza"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(61076, -10412, "BlackBear", true, "Juvorh"));
                }

                //etnas
                ArtificialIntelligenceAccess.push(new Unit(65777, -12188, "Etna", true, "Shelob"));
                ArtificialIntelligenceAccess.push(new Unit(65939, -12363, "Etna", false, "Shembil"));
                ArtificialIntelligenceAccess.push(new Unit(65780, -12509, "Etna", false, "Shaltherg"));
                ArtificialIntelligenceAccess.push(new Unit(65795, -12679, "Etna", false, "Shilb"));
                ArtificialIntelligenceAccess.push(new Unit(65413, -12170, "Etna", false, "Shalib"));
                ArtificialIntelligenceAccess.push(new Unit(65593, -12565, "Etna", false, "Elnorsh"));
                ArtificialIntelligenceAccess.push(new Unit(63366, -6487, "Etna", false, "Aldernesh"));
                ArtificialIntelligenceAccess.push(new Unit(63348, -6402, "Etna", false, "Galshohma"));
                ArtificialIntelligenceAccess.push(new Unit(65457, -4859, "Etna", true, "Wollosh"));
                ArtificialIntelligenceAccess.push(new Unit(65285, -8023, "Etna", false, "Shulib"));
                ArtificialIntelligenceAccess.push(new Unit(65279, -7888, "Etna", false, "Alnarsh"));
                ArtificialIntelligenceAccess.push(new Unit(65303, -7800, "Etna", false, "Elinesh"));
                ArtificialIntelligenceAccess.push(new Unit(65430, -7621, "Etna", false, "Gasholb"));

                //tentacle oodlers
                ArtificialIntelligenceAccess.push(new Unit(61829, -8965, "Hoffalgre", true, "Humfrey"));
                ArtificialIntelligenceAccess.push(new Unit(61285, -9105, "Hoffalgre", true, "Herberta"));
                ArtificialIntelligenceAccess.push(new Unit(61495, -9601, "Hoffalgre", true, "Halber"));
                ArtificialIntelligenceAccess.push(new Unit(60759, -13451, "Hoffalgre", false, "Halbara"));
                ArtificialIntelligenceAccess.push(new Unit(65561, -11615, "Hoffalgre", false, "Halbire"));

                //Scenery

                //web
                    //1
                scenicList.push(new Scenery("web", 65813, -12467, 8, 1.9));
                scenicList.push(new Scenery("web", 65749, -12354, 10, 1.2));
                scenicList.push(new Scenery("web", 65656, -12416, 10, 1.1));
                scenicList.push(new Scenery("web", 65873, -12575, 1, 1));
                scenicList.push(new Scenery("web", 65762, -12567, 0, 1.6));
                scenicList.push(new Scenery("web", 65902, -11986, -0.666, 1.5));
                scenicList.push(new Scenery("web", 65763, -12404, -2.12, 1.4));
                scenicList.push(new Scenery("web", 65813, -12312, 5, 1));
                scenicList.push(new Scenery("web", 65718, -12045, 0, 3));
                scenicList.push(new Scenery("web", 65563, -12109, 3, 2.65));
                scenicList.push(new Scenery("web", 65529, -12412, 1.5, 2.7));
                scenicList.push(new Scenery("web", 65928, -12190, 0.75, 2.9));
                scenicList.push(new Scenery("web", 65683, -12263, 2, 2.8));
                scenicList.push(new Scenery("web", 65777, -12187, 0, 1.8));
                scenicList.push(new Scenery("web", 65945, -12403, 4, 3.2));
                scenicList.push(new Scenery("web", 65929, -12051, 1.2, 2));
                scenicList.push(new Scenery("web", 66107, -12423, 0, 3));
                scenicList.push(new Scenery("web", 65984, -12599, -2, 2.2));
                scenicList.push(new Scenery("web", 65399, -12238, -4, 2.5));
                scenicList.push(new Scenery("etnaEggSac", 65774, -12244, 0, true));
                scenicList.push(new Scenery("web", 65557, -12259, -5, 1));
                scenicList.push(new Scenery("web", 65355, -12413, 16, 2.5));
                scenicList.push(new Scenery("web", 65256, -12283, 0.63, 2.1));
                scenicList.push(new Scenery("web", 65369, -12085, 10, 2.75));
                scenicList.push(new Scenery("web", 65236, -12164, 3, 2));
                scenicList.push(new Scenery("web", 65500, -11973, 0, 2.25));
                scenicList.push(new Scenery("web", 65707, -12562, 6, 2.96));
                scenicList.push(new Scenery("web", 65860, -12727, -8, 2.8));
                scenicList.push(new Scenery("web", 65709, -12758, -13, 3));
                scenicList.push(new Scenery("web", 66004, -12869, -3.13, 2.9));
                scenicList.push(new Scenery("web", 66030, -12719, -2.222, 2));
                scenicList.push(new Scenery("web", 65524, -12621, -6.464, 2.64));
                scenicList.push(new Scenery("web", 65399, -12534, -7, 2));
                scenicList.push(new Scenery("etnaEggSac", 65904, -12424, -2, true));
                scenicList.push(new Scenery("etnaEggSac", 65601, -12520, 4, true));
                scenicList.push(new Scenery("etnaEggSac", 65841, -12257, 9, true));
                    //2
                scenicList.push(new Scenery("web", 63261, -6450, 1.2, 0.9));
                scenicList.push(new Scenery("web", 63342, -6434, 3.141592365239, 1.45));
                scenicList.push(new Scenery("web", 63284, -6529, -3.10102, 1.77));
                scenicList.push(new Scenery("web", 63205, -6321, -1, 2.7));
                scenicList.push(new Scenery("web", 63127, -6520, -2, 2.8));
                scenicList.push(new Scenery("web", 63487, -6462, 0, 3.1));
                scenicList.push(new Scenery("web", 63340, -6370, -4, 1.8));
                scenicList.push(new Scenery("web", 63417, -6523, 0.5, 1.55));
                scenicList.push(new Scenery("etnaEggSac", 63260, -6451, -20, true));
                    //3
                scenicList.push(new Scenery("web", 65427, -4877, -0.123, 1.23456789101112));
                scenicList.push(new Scenery("web", 65337, -4886, 1.5, 1.42));
                scenicList.push(new Scenery("web", 65537, -4898, 3.15, 1.63));
                scenicList.push(new Scenery("web", 65644, -4757, 4, 1.7));
                scenicList.push(new Scenery("web", 65770, -4901, 3.5, 1.6));
                scenicList.push(new Scenery("web", 65411, -4754, -2.61, 2));
                scenicList.push(new Scenery("web", 65257, -4948, 12, 1.48));
                scenicList.push(new Scenery("web", 65667, -4869, 7, 1.89));
                scenicList.push(new Scenery("web", 65525, -4806, -6, 2.3));
                scenicList.push(new Scenery("web", 65335, -4889, -4.5, 1.94));
                scenicList.push(new Scenery("web", 65679, -4905, -1.3, 1.03));
                scenicList.push(new Scenery("web", 65437, -4900, 4.9, 1.78));
                scenicList.push(new Scenery("skeleton", 65558, -4904, 0.26, 1.62));
                scenicList.push(new Scenery("overWeb", 65603, -4892, 2.9, 0.23));
                scenicList.push(new Scenery("overWeb", 65543, -4922, -0.17, 0.7));
                scenicList.push(new Scenery("overWeb", 65555, -4897, 0.1, 0.86));
                scenicList.push(new Scenery("overWeb", 65543, -4922, -0.1, 0.8));
                scenicList.push(new Scenery("overWeb", 65555, -4897, 0.16, 0.94));
                scenicList.push(new Scenery("overWeb", 65603, -4892, 3.14159, 0.3));
                if (quests.spiderwebLoot) //risky alchemist tried to collect a web sample... it didn't work out so well.
                {
                    quests.spiderwebLoot = false;
                    worldItems.push([new Item("coins", 65511, -4888), 34]);
                    worldItems.push([new Item("thenganDagger", 65602, -4892), 1]);
                }
                    //4
                scenicList.push(new Scenery("web", 65536, -7963, 0, 0.88));
                scenicList.push(new Scenery("web", 65135, -7988, -1.04, 1));
                scenicList.push(new Scenery("web", 65397, -7683, -12, 1.52));
                scenicList.push(new Scenery("web", 65249, -7850, -14, 1.66));
                scenicList.push(new Scenery("web", 65525, -7538, -1.9, 1.63));
                scenicList.push(new Scenery("web", 65290, -7652, -2.4, 1.71));
                scenicList.push(new Scenery("web", 65454, -7756, 8, 1.56));
                scenicList.push(new Scenery("web", 65120, -7894, 0, 1.8));
                scenicList.push(new Scenery("web", 65164, -8140, 3, 1.75));
                scenicList.push(new Scenery("web", 65456, -8032, -7.8, 2.26));
                scenicList.push(new Scenery("web", 65756, -7975, -19, 1.68));
                scenicList.push(new Scenery("web", 65630, -7955, -1, 2));
                scenicList.push(new Scenery("web", 65299, -7973, 1.12, 2.4));
                scenicList.push(new Scenery("web", 65323, -7770, 1.1, 1.4));
                scenicList.push(new Scenery("web", 65189, -7770, 5.56, 1.61));
                scenicList.push(new Scenery("web", 65501, -7622, 9, 1.45));
                scenicList.push(new Scenery("web", 65402, -7579, 4, 1.78));
                scenicList.push(new Scenery("web", 65491, -7860, 11, 2.1));
                scenicList.push(new Scenery("web", 65381, -7825, -3.91, 1.41));
                scenicList.push(new Scenery("web", 65206, -7919, 1.55, 1.2));
                scenicList.push(new Scenery("web", 65301, -8076, -3.3, 1.77));
                scenicList.push(new Scenery("web", 65148, -8023, -1.6, 1.54));
                scenicList.push(new Scenery("etnaEggSac", 65242, -7861, -2, true));

                //forest plants
                scenicList.push(new Scenery("kofkePlant", 60871, -9467, -5.5, false));
                scenicList.push(new Scenery("steugiurnePlant", 61199, -10760, 4, false));
                scenicList.push(new Scenery("callopPlant", 63348, -12077, -8, false));
                scenicList.push(new Scenery("thalisPlant", 60352, -12956, 0, false));
                scenicList.push(new Scenery("thalisPlant", 62538, -12622, 3, false));
                scenicList.push(new Scenery("kofkePlant", 64371, -11519, -5.5, false));
                scenicList.push(new Scenery("darbPlant", 61049, -11870, 1.2, false));
                scenicList.push(new Scenery("darbPlant", 66809, -12785, -1, false));
                scenicList.push(new Scenery("callopPlant", 62198, -10637, -2.5, false));
                scenicList.push(new Scenery("callopPlant", 64554, -10949, 3, false));
                scenicList.push(new Scenery("kofkePlant", 65112, -11901, -5.5, false));
                scenicList.push(new Scenery("darbPlant", 66809, -12785, -1, false));
                scenicList.push(new Scenery("thalisPlant", 66332, -11589, 5, false));
                scenicList.push(new Scenery("darbPlant", 65320, -10941, 0.5, false));
                scenicList.push(new Scenery("callopPlant", 66790, -7518, 9, false));
                scenicList.push(new Scenery("steugiurnePlant", 65878, -5989, 16, false));
                scenicList.push(new Scenery("kofkePlant", 65513, -6450, -5.5, false));
                scenicList.push(new Scenery("darbPlant", 64764, -7018, 1, false));
                scenicList.push(new Scenery("thalisPlant", 64440, -8472, 8, false));
                scenicList.push(new Scenery("kofkePlant", 64817, -9418, -6.8, false));
                scenicList.push(new Scenery("kofkePlant", 61538, -7648, -3.2, false));
                scenicList.push(new Scenery("steugiurnePlant", 61979, -5269, 15, false));
                scenicList.push(new Scenery("callopPlant", 63366, -5187, 6, false));
                scenicList.push(new Scenery("kofkePlant", 64290, -4443, 3.5, false));
                scenicList.push(new Scenery("darbPlant", 63176, -3943, 0.2, false));
                scenicList.push(new Scenery("thalisPlant", 61311, -4626, 3, false));
                scenicList.push(new Scenery("kofkePlant", 66572, -4400, 4.5, false));
                scenicList.push(new Scenery("kofkePlant", 66028, -5132, -2.6, false));
                scenicList.push(new Scenery("darbPlant", 66157, -4731, -0.81, false));
                scenicList.push(new Scenery("kofkePlant", 63419, -4237, 4.7, false));

                //plains plants
                scenicList.push(new Scenery("vorlymPlant", 59178, -10389, -4, false));
                scenicList.push(new Scenery("galloshPlant", 58849, -12778, 5, false));
                scenicList.push(new Scenery("galloshPlant", 58515, -4256, 0, false));

                //stumps
                //scenicList.push(new Scenery("pineStumps", -6474 , 1900, 0, true));

                //Border Trees (North)
                scenicList.push(new Scenery("pineTree", 65223, -4200, 5.4, true));
                scenicList.push(new Scenery("pineTree", 64879, -4054, 6.12, true));
                scenicList.push(new Scenery("pineTree", 65093, -3764, 0.25, true));
                scenicList.push(new Scenery("pineTree", 65594, -3924, 4, true));
                scenicList.push(new Scenery("pineTree", 65648, -3592, -5.8, true));
                scenicList.push(new Scenery("pineTree", 65952, -4170, 4.45, true));
                scenicList.push(new Scenery("pineTree", 66345, -4008, 3.5, true));
                scenicList.push(new Scenery("pineTree", 66916, -3868, -4.3, true));
                scenicList.push(new Scenery("pineTree", 66526, -3664, -5.7, true));
                scenicList.push(new Scenery("pineTree", 66819, -4220, 2, true)); //original
                scenicList.push(new Scenery("pineTree", 67249, -4137, 1.3, true)); //original
                scenicList.push(new Scenery("pineTree", 67249, -4137, -0.775, true)); //original
                scenicList.push(new Scenery("pineTree", 67238, -3591, 1.89, true)); //original
                scenicList.push(new Scenery("pineTree", 67692, -3758, 2.34, true)); //original
                scenicList.push(new Scenery("pineTree", 67804, -4101, 0.89, true)); //original
                scenicList.push(new Scenery("pineTree", 68195, -3886, 7.65, true)); //original
                scenicList.push(new Scenery("pineTree", 67361, -3855, 9.28, true)); //original
                scenicList.push(new Scenery("pineTree", 68080, -3561, -8.2, true)); //original
                scenicList.push(new Scenery("pineTree", 64382, -4223, 7, true));
                scenicList.push(new Scenery("pineTree", 64757, -3624, 3.2, true));
                scenicList.push(new Scenery("pineTree", 64468, -3905, -6, true));
                scenicList.push(new Scenery("pineTree", 64041, -3766, -1.4, true));
                scenicList.push(new Scenery("pineTree", 63991, -4071, 5.5, true));
                scenicList.push(new Scenery("pineTree", 63419, -3891, -8.275, true));
                scenicList.push(new Scenery("pineTree", 63681, -3589, 64, true));
                scenicList.push(new Scenery("pineTree", 63195, -4211, 8.623, true));
                scenicList.push(new Scenery("pineTree", 62945, -3758, -5.3, true));
                scenicList.push(new Scenery("pineTree", 62797, -4050, 10.2, true));
                scenicList.push(new Scenery("pineTree", 62452, -3851, 12.07, true));
                scenicList.push(new Scenery("pineTree", 62337, -4220, 13.12, true));
                scenicList.push(new Scenery("pineTree", 63638, -4194, 9.45, true));
                scenicList.push(new Scenery("pineTree", 62081, -3624, -2.8, true));
                scenicList.push(new Scenery("pineTree", 61902, -3925, -12.12, true));
                scenicList.push(new Scenery("pineTree", 61520, -3790, 8.5, true));
                scenicList.push(new Scenery("pineTree", 61563, -4127, -2.222, true));
                scenicList.push(new Scenery("pineTree", 61049, -4055, 6.3, true));
                scenicList.push(new Scenery("pineTree", 61236, -3549, 5.41, true));
                scenicList.push(new Scenery("pineTree", 60602, -3924, 54.1, true));
                scenicList.push(new Scenery("pineTree", 60988, -3769, -5.8549, true));
                scenicList.push(new Scenery("pineTree", 60398, -4224, -5, true));
                scenicList.push(new Scenery("pineTree", 60183, -3976, 3.6, true));
                scenicList.push(new Scenery("pineTree", 59633, -4041, 3.42, true));
                scenicList.push(new Scenery("pineTree", 59873, -3697, -3.05, true));
                scenicList.push(new Scenery("pineTree", 60518, -3634, 2.84, true));
                scenicList.push(new Scenery("pineTree", 68204, -4229, 3, true)); //original
                scenicList.push(new Scenery("pineTree", 66071, -3787, 1.43859, true));

                //Border Trees (South)
                scenicList.push(new Scenery("pineTree", 59655, -13702, 0.22, true));
                scenicList.push(new Scenery("pineTree", 60102, -13527, 3.27, true));
                scenicList.push(new Scenery("pineTree", 59551, -13236, 1, true));
                scenicList.push(new Scenery("pineTree", 60470, -13367, -5.56, true));
                scenicList.push(new Scenery("pineTree", 60771, -13653, -2.5, true));
                scenicList.push(new Scenery("pineTree", 61136, -13547, 3.72, true));
                scenicList.push(new Scenery("pineTree", 61434, -13759, 4, true));
                scenicList.push(new Scenery("pineTree", 61317, -13221, -0.6, true));
                scenicList.push(new Scenery("pineTree", 60909, -13286, -3, true));
                scenicList.push(new Scenery("pineTree", 63800, -13528, -7.63192631, true));
                scenicList.push(new Scenery("pineTree", 63253, -13673, -5, true));
                scenicList.push(new Scenery("pineTree", 63375, -13237, 2.46435, true));
                scenicList.push(new Scenery("pineTree", 62946, -13375, 3.6927836, true));
                scenicList.push(new Scenery("pineTree", 61892, -13365, 8.229, true));
                scenicList.push(new Scenery("pineTree", 62126, -13659, 0.75, true));
                scenicList.push(new Scenery("pineTree", 62562, -13790, -6.1, true));
                scenicList.push(new Scenery("pineTree", 64513, -13657, 5.85, true));
                scenicList.push(new Scenery("pineTree", 64394, -13267, -8.1, true));
                scenicList.push(new Scenery("pineTree", 65106, -13572, 3.333, true));
                scenicList.push(new Scenery("pineTree", 65575, -13365, -7.6, true));
                scenicList.push(new Scenery("pineTree", 65817, -13727, 2.424, true));
                scenicList.push(new Scenery("pineTree", 66131, -13468, 3.9, true));
                scenicList.push(new Scenery("pineTree", 66600, -13232, 4.666, true)); //original
                scenicList.push(new Scenery("pineTree", 66938, -13550, -28.7, true)); //original
                scenicList.push(new Scenery("pineTree", 67423, -13700, 1.654, true)); //original
                scenicList.push(new Scenery("pineTree", 68201, -13828, -5, true)); //original
                scenicList.push(new Scenery("pineTree", 67863, -13504, -9, true)); //original
                scenicList.push(new Scenery("pineTree", 67425, -13277, 6.69, true)); //original
                scenicList.push(new Scenery("pineTree", 68175, -13212, 4.343434, true)); //original

                //Border Trees (West)
                //scenicList.push(new Scenery("pineTree", 66938, -13550, -28.7, true)); //copy
                //scenicList.push(new Scenery("pineTree", 67423, -13700, 1.654, true)); //copy
                //scenicList.push(new Scenery("pineTree", 66600, -13232, 4.666, true)); //copy
                //scenicList.push(new Scenery("pineTree", 68201, -13828, -5, true)); //copy
                //scenicList.push(new Scenery("pineTree", 67863, -13504, -9, true)); //copy
                //scenicList.push(new Scenery("pineTree", 67425, -13277, 6.69, true)); //copy
                //scenicList.push(new Scenery("pineTree", 68175, -13212, 4.343434, true)); //copy
                //scenicList.push(new Scenery("pineTree", 66819, -4220, 2, true)); //copy
                //scenicList.push(new Scenery("pineTree", 67249, -4137, 1.3, true)); //copy
                //scenicList.push(new Scenery("pineTree", 67249, -4137, -0.775, true)); //copy
                //scenicList.push(new Scenery("pineTree", 67238, -3591, 1.89, true)); //copy
                //scenicList.push(new Scenery("pineTree", 67692, -3758, 2.34, true)); //copy
                //scenicList.push(new Scenery("pineTree", 67804, -4101, 0.89, true)); //copy
                //scenicList.push(new Scenery("pineTree", 68195, -3886, 7.65, true)); //copy
                //scenicList.push(new Scenery("pineTree", 67361, -3855, 9.28, true)); //copy
                //scenicList.push(new Scenery("pineTree", 68080, -3561, -8.2, true)); //copy
                //scenicList.push(new Scenery("pineTree", 68204, -4229, 3, true)); //copy

                //scenicList.push(new Scenery("pineTree", 64120, -6017, -1.5, true));
                //scenicList.push(new Scenery("pineTree", 64282, -5535, 0.5, true));
                //scenicList.push(new Scenery("pineTree", 64690, -5623, -0.8, true));
                //scenicList.push(new Scenery("pineTree", 64529, -5151, -5, true));
                //scenicList.push(new Scenery("pineTree", 64795, -4823, -1.44, true));
                //scenicList.push(new Scenery("pineTree", 64283, -4841, 2.34, true));
                //scenicList.push(new Scenery("pineTree", 64922, -4527, -3.85, true));
                //scenicList.push(new Scenery("pineTree", 66148, -4497, -4.5219, true));
                //scenicList.push(new Scenery("pineTree", 60009, -4336, 4.19, true));
                //scenicList.push(new Scenery("pineTree", 66286, -4883, -7, true));
                //scenicList.push(new Scenery("pineTree", 66477, -5142, -3.2, true));
                //scenicList.push(new Scenery("pineTree", 66710, -4626, 6, true));
                //scenicList.push(new Scenery("pineTree", 67112, -4525, 1.4, true));
                //scenicList.push(new Scenery("pineTree", 67001, -4929, -5.5, true));
                //scenicList.push(new Scenery("pineTree", 66362, -5609, 8.275, true));
                //scenicList.push(new Scenery("pineTree", 66768, -5447, -64, true));
                //scenicList.push(new Scenery("pineTree", 67022, -5227, -8.623, true));
                //scenicList.push(new Scenery("pineTree", 67266, -5608, 5.3, true));
                //scenicList.push(new Scenery("pineTree", 66702, -5950, -10.2, true));
                //scenicList.push(new Scenery("pineTree", 66210, -6125, -12.07, true));
                //scenicList.push(new Scenery("pineTree", 65800, -6231, -13.12, true));
                //scenicList.push(new Scenery("pineTree", 65759, -6518, -9.45, true));
                //scenicList.push(new Scenery("pineTree", 65871, -6800, 2.8, true));
                //scenicList.push(new Scenery("pineTree", 66254, -6967, 12.12, true));
                //scenicList.push(new Scenery("pineTree", 66184, -7216, -8.5, true));
                //scenicList.push(new Scenery("pineTree", 66678, -7127, 2.222, true));
                //scenicList.push(new Scenery("pineTree", 66580, -7422, -6.3, true));
                //scenicList.push(new Scenery("pineTree", 66735, -7725, -5.41, true));
                //scenicList.push(new Scenery("pineTree", 67068, -7918, -54.1, true));
                //scenicList.push(new Scenery("pineTree", 66757, -8112, 5.8549, true));
                //scenicList.push(new Scenery("pineTree", 67304, -8158, 5, true));
                //scenicList.push(new Scenery("pineTree", 66996, -7441, -3.6, true));
                //scenicList.push(new Scenery("pineTree", 67421, -7614, -3.42, true));
                //scenicList.push(new Scenery("pineTree", 67679, -7979, 79, true));
                //scenicList.push(new Scenery("pineTree", 67729, -8261, -2.84, true));
                //scenicList.push(new Scenery("pineTree", 68095, -8100, 2.8, true));

                scenicList.push(new Scenery("pineTree", 67162, -12964, -4.2, true));
                scenicList.push(new Scenery("pineTree", 66498, -11920, -3.5, true));
                scenicList.push(new Scenery("pineTree", 66951, -12625, 4.5, true));
                scenicList.push(new Scenery("pineTree", 67444, -12184, 2.89, true));
                scenicList.push(new Scenery("pineTree", 67063, -11927, 3.1, true));
                scenicList.push(new Scenery("pineTree", 67451, -12475, -3.95, true));
                scenicList.push(new Scenery("pineTree", 62376, -13167, -4.8, true));
                scenicList.push(new Scenery("pineTree", 66555, -12788, 2.89, true));
                scenicList.push(new Scenery("pineTree", 66710, -12325, 9, true));
                scenicList.push(new Scenery("pineTree", 67694, -13044, -10, true));
                scenicList.push(new Scenery("pineTree", 68193, -12889, 42, true));
                scenicList.push(new Scenery("pineTree", 66721, -11555, -1.2, true));
                scenicList.push(new Scenery("pineTree", 67805, -12773, 1.8, true));
                scenicList.push(new Scenery("pineTree", 67964, -12247, -3.93, true));
                scenicList.push(new Scenery("pineTree", 67796, -11733, 0.7, true));
                scenicList.push(new Scenery("pineTree", 67779, -11986, -45, true));
                scenicList.push(new Scenery("pineTree", 67384, -11546, -0.15, true));
                scenicList.push(new Scenery("pineTree", 68083, -11539, -15, true));
                scenicList.push(new Scenery("pineTree", 67604, -11122, -3.25, true));
                scenicList.push(new Scenery("pineTree", 67936, -10822, 4.45, true));
                scenicList.push(new Scenery("pineTree", 68192, -10484, -4.65, true));
                scenicList.push(new Scenery("pineTree", 67243, -11281, 0.55, true));
                scenicList.push(new Scenery("pineTree", 67762, -10369, -2.25, true));
                scenicList.push(new Scenery("pineTree", 67379, -10657, -7.25, true));
                scenicList.push(new Scenery("pineTree", 66990, -10426, 2.65, true));
                scenicList.push(new Scenery("pineTree", 67129, -10943, -4.25, true));
                scenicList.push(new Scenery("pineTree", 66733, -11150, -1.1, true));
                scenicList.push(new Scenery("pineTree", 66880, -10683, 8.8, true));
                scenicList.push(new Scenery("pineTree", 67394, -9778, -1.8, true));
                scenicList.push(new Scenery("pineTree", 68109, -9629, 5.4, true));
                scenicList.push(new Scenery("pineTree", 67768, -9732, -9.15, true));
                scenicList.push(new Scenery("pineTree", 66916, -9567, 8.15, true));
                scenicList.push(new Scenery("pineTree", 67539, -9447, -4.09, true));
                scenicList.push(new Scenery("pineTree", 67937, -9172, -16, true));
                scenicList.push(new Scenery("pineTree", 67335, -9127, -12.5, true));
                scenicList.push(new Scenery("pineTree", 66999, -9269, 3.08, true));
                scenicList.push(new Scenery("pineTree", 67689, -8890, -48, true));
                scenicList.push(new Scenery("pineTree", 68195, -8873, -5.65, true));
                scenicList.push(new Scenery("pineTree", 67978, -8537, 9.4, true));
                scenicList.push(new Scenery("pineTree", 65825, -7976, -1.8, true));
                scenicList.push(new Scenery("pineTree", 67020, -8841, -1.9, true));
                scenicList.push(new Scenery("pineTree", 67478, -8533, -7.777777777, true));
                scenicList.push(new Scenery("pineTree", 67345, -8768, -8.05, true));
                scenicList.push(new Scenery("pineTree", 66587, -8587, 6, true));
                scenicList.push(new Scenery("pineTree", 67033, -8507, -5.24, true));
                scenicList.push(new Scenery("pineTree", 67290, -6106, -12.5, true));
                scenicList.push(new Scenery("pineTree", 66101, -6571, 3.08, true));
                scenicList.push(new Scenery("pineTree", 66482, -6431, -48, true));
                scenicList.push(new Scenery("pineTree", 66565, -6706, -5.65, true));
                scenicList.push(new Scenery("pineTree", 67031, -6843, 9.4, true));
                scenicList.push(new Scenery("pineTree", 66979, -6504, -1.8, true));
                scenicList.push(new Scenery("pineTree", 67541, -6636, -1.9, true));
                scenicList.push(new Scenery("pineTree", 67634, -4512, -7.777777777, true));
                scenicList.push(new Scenery("pineTree", 68037, -4573, -8.05, true));
                scenicList.push(new Scenery("pineTree", 67829, -4931, 6, true));
                scenicList.push(new Scenery("pineTree", 67468, -4790, -5.24, true));
                scenicList.push(new Scenery("pineTree", 67412, -5121, 8.18, true));
                scenicList.push(new Scenery("pineTree", 68142, -5213, 7.55, true));
                scenicList.push(new Scenery("pineTree", 67734, -5298, 0, true));
                scenicList.push(new Scenery("pineTree", 68198, -5184, 0, true));
                scenicList.push(new Scenery("pineTree", 68010, -5578, 3.14, true));
                scenicList.push(new Scenery("pineTree", 67835, -5899, -1.56, true));
                scenicList.push(new Scenery("pineTree", 68203, -6229, -6, true));
                scenicList.push(new Scenery("pineTree", 67674, -6334, 2, true));
                scenicList.push(new Scenery("pineTree", 67356, -7174, 1.3, true));
                scenicList.push(new Scenery("pineTree", 67911, -7341, -0.9, true));
                scenicList.push(new Scenery("pineTree", 68127, -6591, 3, true));
                scenicList.push(new Scenery("pineTree", 67842, -6932, -5, true));
                scenicList.push(new Scenery("pineTree", 68050, -7710, 6.3, true));

                //Trees
                scenicList.push(new Scenery("pineTree", 65520, -4403, 0, true));
                scenicList.push(new Scenery("pineTree", 60273, -10049, 0, true));
                scenicList.push(new Scenery("pineTree", 60749, -10416, 3.14, true));
                scenicList.push(new Scenery("pineTree", 60430, -10803, -1.56, true));
                scenicList.push(new Scenery("pineTree", 60283, -11183, -6, true));
                scenicList.push(new Scenery("pineTree", 60940, -11009, 2, true));
                scenicList.push(new Scenery("pineTree", 60673, -11250, 1.1, true));
                scenicList.push(new Scenery("pineTree", 60490, -11740, -0.9, true));
                scenicList.push(new Scenery("pineTree", 59849, -11830, 3, true));
                scenicList.push(new Scenery("pineTree", 61230, -11357, -4, true));
                scenicList.push(new Scenery("pineTree", 61605, -10961, 4.3, true));
                scenicList.push(new Scenery("pineTree", 59971, -13083, 5, true));
                scenicList.push(new Scenery("pineTree", 59726, -12819, -8, true));
                scenicList.push(new Scenery("pineTree", 60234, -12905, 2.65, true));
                scenicList.push(new Scenery("pineTree", 60021, -12636, -3.4, true));
                scenicList.push(new Scenery("pineTree", 60299, -12501, -6.4, true));
                scenicList.push(new Scenery("pineTree", 59887, -12419, 8, true));
                scenicList.push(new Scenery("pineTree", 59654, -12138, 6, true));
                scenicList.push(new Scenery("pineTree", 60102, -12155, 3.9, true));
                scenicList.push(new Scenery("pineTree", 60590, -12254, -4.829, true));
                scenicList.push(new Scenery("pineTree", 63704, -12170, -1.073, true));
                scenicList.push(new Scenery("pineTree", 64843, -12693, -2.87687, true));
                scenicList.push(new Scenery("pineTree", 63050, -13046, 7.5, true));
                scenicList.push(new Scenery("pineTree", 65381, -12485, -5.5, true));
                scenicList.push(new Scenery("pineTree", 65280, -12820, 0.45, true));
                scenicList.push(new Scenery("pineTree", 65003, -13110, 6.2, true));
                scenicList.push(new Scenery("pineTree", 65607, -12257, -1.8, true));
                scenicList.push(new Scenery("pineTree", 65617, -12786, 1.9, true));
                scenicList.push(new Scenery("pineTree", 66055, -12580, 7.777777777, true));
                scenicList.push(new Scenery("pineTree", 66170, -12272, 0, true));
                scenicList.push(new Scenery("pineTree", 65978, -11983, -6, true));
                scenicList.push(new Scenery("pineTree", 65202, -12187, 5.28, true));
                scenicList.push(new Scenery("pineTree", 64824, -11979, -3.5219, true));
                scenicList.push(new Scenery("pineTree", 65879, -11580, -2.90012, true));
                scenicList.push(new Scenery("pineTree", 64803, -12286, 6.702931247829, true));
                scenicList.push(new Scenery("pineTree", 64254, -12485, 4.13369123926, true));
                scenicList.push(new Scenery("pineTree", 64372, -12113, -2.8, true));
                scenicList.push(new Scenery("pineTree", 65495, -11933, 5.9, true));
                scenicList.push(new Scenery("pineTree", 66060, -12916, -3.6, true));
                scenicList.push(new Scenery("pineTree", 60775, -12917, 1.5, true));
                scenicList.push(new Scenery("pineTree", 60918, -12617, -3.75, true));
                scenicList.push(new Scenery("pineTree", 61444, -12766, 5.75, true));
                scenicList.push(new Scenery("pineTree", 61697, -13019, 6.3, true));
                scenicList.push(new Scenery("pineTree", 66590, -9784, 3.15, true));
                scenicList.push(new Scenery("pineTree", 66205, -11226, 5.75, true));
                scenicList.push(new Scenery("pineTree", 66365, -10808, -7.45, true));
                scenicList.push(new Scenery("pineTree", 65883, -10950, 2.30, true));
                scenicList.push(new Scenery("pineTree", 65501, -11173, 6.371, true));
                scenicList.push(new Scenery("pineTree", 65306, -11527, 4.61, true));
                scenicList.push(new Scenery("pineTree", 64886, -11552, -1.6, true));
                scenicList.push(new Scenery("pineTree", 65059, -10930, 0, true));
                scenicList.push(new Scenery("pineTree", 64422, -12852, 0, true));
                scenicList.push(new Scenery("pineTree", 63980, -12993, -5, true));
                scenicList.push(new Scenery("pineTree", 63581, -12766, 1.68, true));
                scenicList.push(new Scenery("pineTree", 63804, -12552, 2.34, true));
                scenicList.push(new Scenery("pineTree", 63026, -12607, 3.75, true));
                scenicList.push(new Scenery("pineTree", 62675, -12803, -5.4321012, true));
                scenicList.push(new Scenery("pineTree", 62127, -12871, -1, true));
                scenicList.push(new Scenery("pineTree", 62497, -12480, -3.35, true));
                scenicList.push(new Scenery("pineTree", 64500, -11719, 0.9, true));
                scenicList.push(new Scenery("pineTree", 65504, -8119, -5.3, true));
                scenicList.push(new Scenery("pineTree", 65133, -8212, -6.24, true));
                scenicList.push(new Scenery("pineTree", 64922, -8524, -2.1, true));
                scenicList.push(new Scenery("pineTree", 64631, -8245, 2.8, true));
                scenicList.push(new Scenery("pineTree", 64669, -7829, 1.386, true));
                scenicList.push(new Scenery("pineTree", 65517, -7792, -6, true));
                scenicList.push(new Scenery("pineTree", 65232, -7602, -2, true));
                scenicList.push(new Scenery("pineTree", 65046, -7858, 5.77, true));
                scenicList.push(new Scenery("pineTree", 64731, -7523, -3.14, true));
                scenicList.push(new Scenery("pineTree", 64279, -8019, -4.80, true));
                scenicList.push(new Scenery("pineTree", 65154, -7300, 4.6825, true));
                scenicList.push(new Scenery("pineTree", 62491, -6184, 3.14, true));
                scenicList.push(new Scenery("pineTree", 62416, -6480, -1.5, true));
                scenicList.push(new Scenery("pineTree", 62691, -6699, 2.3, true));
                scenicList.push(new Scenery("pineTree", 63108, -6557, 3.78, true));
                scenicList.push(new Scenery("pineTree", 63251, -6212, 4.39, true));
                scenicList.push(new Scenery("pineTree", 62778, -5918, -0.65, true));
                scenicList.push(new Scenery("pineTree", 63398, -5754, 0, true));
                scenicList.push(new Scenery("pineTree", 63169, -7010, 0.25, true));
                scenicList.push(new Scenery("pineTree", 63590, -6457, -4.1, true));
                scenicList.push(new Scenery("pineTree", 63805, -5759, 1.4, true));
                scenicList.push(new Scenery("pineTree", 63470, -6828, -2.6, true));
                scenicList.push(new Scenery("pineTree", 62720, -7137, -1.30313, true));
                scenicList.push(new Scenery("pineTree", 63062, -7331, -2.5, true));
                scenicList.push(new Scenery("pineTree", 63685, -7378, -5.4, true));
                scenicList.push(new Scenery("pineTree", 63747, -7046, -6.894, true));
                scenicList.push(new Scenery("pineTree", 63217, -7837, 7.54, true));
                scenicList.push(new Scenery("pineTree", 63334, -7554, 2.63, true));
                scenicList.push(new Scenery("pineTree", 63643, -7771, 6.26, true));
                scenicList.push(new Scenery("pineTree", 64197, -7681, -62.6, true));
                scenicList.push(new Scenery("pineTree", 64125, -7319, 1.25, true));
                scenicList.push(new Scenery("pineTree", 64410, -7109, 5.8, true));
                scenicList.push(new Scenery("pineTree", 64218, -6816, -7, true));
                scenicList.push(new Scenery("pineTree", 62872, -6281, -11, true));
                scenicList.push(new Scenery("pineTree", 65355, -4677, 0.39, true));
                scenicList.push(new Scenery("pineTree", 65833, -4933, 2.88, true));
                scenicList.push(new Scenery("pineTree", 65200, -4986, -3.6, true));
                scenicList.push(new Scenery("pineTree", 65688, -4710, 4.2, true));
                scenicList.push(new Scenery("pineTree", 65433, -5452, -2.325, true));
                scenicList.push(new Scenery("pineTree", 66032, -5332, -3.82, true));
                scenicList.push(new Scenery("pineTree", 64977, -5367, -5.5555, true));
                scenicList.push(new Scenery("pineTree", 65926, -5720, -6.74, true));
                scenicList.push(new Scenery("pineTree", 60024, -9638, 5.8, true));
                scenicList.push(new Scenery("pineTree", 60856, -9742, -7, true));
                scenicList.push(new Scenery("pineTree", 62872, -6281, -11, true));
                scenicList.push(new Scenery("pineTree", 60578, -9254, 0.39, true));
                scenicList.push(new Scenery("pineTree", 59881, -9277, 2.88, true));
                scenicList.push(new Scenery("pineTree", 61315, -9401, -3.6, true));
                scenicList.push(new Scenery("pineTree", 61191, -10167, 4.2, true));
                scenicList.push(new Scenery("pineTree", 61706, -10532, -2.325, true));
                scenicList.push(new Scenery("pineTree", 62200, -10813, -3.82, true));
                scenicList.push(new Scenery("pineTree", 61227, -11798, -5.5555, true));
                scenicList.push(new Scenery("pineTree", 61431, -12164, -6.74, true));
                scenicList.push(new Scenery("pineTree", 60240, -8871, -3.25, true));
                scenicList.push(new Scenery("pineTree", 61053, -8950, 4.45, true));
                scenicList.push(new Scenery("pineTree", 62045, -8871, -4.65, true));
                scenicList.push(new Scenery("pineTree", 61938, -9249, 0.55, true));
                scenicList.push(new Scenery("pineTree", 61367, -9805, -2.25, true));
                scenicList.push(new Scenery("pineTree", 61893, -9968, -7.25, true));
                scenicList.push(new Scenery("pineTree", 62214, -10394, 2.65, true));
                scenicList.push(new Scenery("pineTree", 62807, -10606, -4.25, true));
                scenicList.push(new Scenery("pineTree", 63209, -10639, -1.1, true));
                scenicList.push(new Scenery("pineTree", 63698, -10503, 8.8, true));
                scenicList.push(new Scenery("pineTree", 64140, -10343, -1.8, true));
                scenicList.push(new Scenery("pineTree", 63402, -10882, 5.4, true));
                scenicList.push(new Scenery("pineTree", 62968, -11130, -9.15, true));
                scenicList.push(new Scenery("pineTree", 62449, -11270, 8.15, true));
                scenicList.push(new Scenery("pineTree", 62004, -11515, -4.09, true));
                scenicList.push(new Scenery("pineTree", 62039, -12111, -16, true));
                scenicList.push(new Scenery("pineTree", 62444, -11864, -12.5, true));
                scenicList.push(new Scenery("pineTree", 62654, -9606, 3.08, true));
                scenicList.push(new Scenery("pineTree", 62989, -9773, -48, true));
                scenicList.push(new Scenery("pineTree", 63397, -9636, -5.65, true));
                scenicList.push(new Scenery("pineTree", 63037, -9318, 9.4, true));
                scenicList.push(new Scenery("pineTree", 63690, -9779, 0, true));
                scenicList.push(new Scenery("pineTree", 64167, -9739, -3.14, true));
                scenicList.push(new Scenery("pineTree", 63846, -9418, 1.56, true));
                scenicList.push(new Scenery("pineTree", 64307, -9232, 6, true));
                scenicList.push(new Scenery("pineTree", 63770, -8967, -2, true));
                scenicList.push(new Scenery("pineTree", 62694, -8984, -1.1, true));
                scenicList.push(new Scenery("pineTree", 63285, -8908, 0.9, true));
                scenicList.push(new Scenery("pineTree", 62803, -8579, -13, true));
                scenicList.push(new Scenery("pineTree", 62645, -8275, 3.82, true));
                scenicList.push(new Scenery("pineTree", 63136, -8323, -3.3, true));
                scenicList.push(new Scenery("pineTree", 62153, -8124, 5.5555, true));
                scenicList.push(new Scenery("pineTree", 61801, -8269, 7.8, true));
                scenicList.push(new Scenery("pineTree", 61751, -9605, -8, true));
                scenicList.push(new Scenery("pineTree", 61457, -8295, 2.15, true));
                scenicList.push(new Scenery("pineTree", 61870, -7730, 4.9, true));
                scenicList.push(new Scenery("pineTree", 61291, -7822, -2.22, true));
                scenicList.push(new Scenery("pineTree", 62842, -7934, 3, true));
                scenicList.push(new Scenery("pineTree", 62847, -7658, -8, true));
                scenicList.push(new Scenery("pineTree", 62260, -7376, -6, true));
                scenicList.push(new Scenery("pineTree", 62202, -6921, -3.9, true));
                scenicList.push(new Scenery("pineTree", 61810, -7292, 4.829, true));
                scenicList.push(new Scenery("pineTree", 61461, -7461, 1.073, true));
                scenicList.push(new Scenery("pineTree", 61554, -7056, 2.87687, true));
                scenicList.push(new Scenery("pineTree", 61677, -6624, -7.5, true));
                scenicList.push(new Scenery("pineTree", 62036, -6287, 5.5, true));
                scenicList.push(new Scenery("pineTree", 61519, -6323, -0.45, true));
                scenicList.push(new Scenery("pineTree", 61254, -6766, -6.2, true));
                scenicList.push(new Scenery("pineTree", 62374, -7770, 1.8, true));
                scenicList.push(new Scenery("pineTree", 60962, -8176, -1.9, true));
                scenicList.push(new Scenery("pineTree", 60618, -8290, -7.777777777, true));
                scenicList.push(new Scenery("pineTree", 60250, -8236, 1, true));
                scenicList.push(new Scenery("pineTree", 60478, -7935, 6, true));
                scenicList.push(new Scenery("pineTree", 60949, -7523, -5.28, true));
                scenicList.push(new Scenery("pineTree", 60569, -7594, 3.5219, true));
                scenicList.push(new Scenery("pineTree", 60248, -7381, 2.90012, true));
                scenicList.push(new Scenery("pineTree", 60662, -7190, -6.702931247829, true));
                scenicList.push(new Scenery("pineTree", 61113, -7197, -4.13369123926, true));
                scenicList.push(new Scenery("pineTree", 60874, -6930, 2.8, true));
                scenicList.push(new Scenery("pineTree", 60312, -7016, -5.9, true));
                scenicList.push(new Scenery("pineTree", 60518, -6631, 3.6, true));
                scenicList.push(new Scenery("pineTree", 60918, -6572, 5.073, true));
                scenicList.push(new Scenery("pineTree", 61131, -6150, -3.14, true));
                scenicList.push(new Scenery("pineTree", 61747, -5923, -6.6, true));
                scenicList.push(new Scenery("pineTree", 61285, -5802, 45, true));
                scenicList.push(new Scenery("pineTree", 61679, -5428, 4.822, true));
                scenicList.push(new Scenery("pineTree", 62138, -5955, 22, true));
                scenicList.push(new Scenery("pineTree", 62457, -5531, 3.7, true));
                scenicList.push(new Scenery("pineTree", 66098, -9696, 7.2, true));
                scenicList.push(new Scenery("pineTree", 66547, -9426, -2.8, true));
                scenicList.push(new Scenery("pineTree", 66491, -10350, -4.2, true));
                scenicList.push(new Scenery("pineTree", 66036, -10514, -3.5, true));
                scenicList.push(new Scenery("pineTree", 65353, -10657, 4.5, true));
                scenicList.push(new Scenery("pineTree", 65609, -10364, 2.89, true));
                scenicList.push(new Scenery("pineTree", 65051, -10462, 3.1, true));
                scenicList.push(new Scenery("pineTree", 64552, -10738, -3.95, true));
                scenicList.push(new Scenery("pineTree", 64638, -10363, -4.8, true));
                scenicList.push(new Scenery("pineTree", 64667, -11060, 2.89, true));
                scenicList.push(new Scenery("pineTree", 64505, -11310, 2.5, true));
                scenicList.push(new Scenery("pineTree", 64186, -10968, -10, true));
                scenicList.push(new Scenery("pineTree", 64066, -11756, 42, true));
                scenicList.push(new Scenery("pineTree", 61857, -12483, -1.2, true));
                scenicList.push(new Scenery("pineTree", 63972, -11251, 1.8, true));
                scenicList.push(new Scenery("pineTree", 63861, -10906, -3.93, true));
                scenicList.push(new Scenery("pineTree", 63556, -11625, 0.7, true));
                scenicList.push(new Scenery("pineTree", 63502, -11291, -43, true));
                scenicList.push(new Scenery("pineTree", 63209, -11957, -0.15, true));
                scenicList.push(new Scenery("pineTree", 62872, -12184, 14, true));
                scenicList.push(new Scenery("pineTree", 61731, -11849, 15, true));
                scenicList.push(new Scenery("pineTree", 62854, -11562, 16, true));
                scenicList.push(new Scenery("pineTree", 63188, -11709, -17, true));
                scenicList.push(new Scenery("pineTree", 63563, -8544, 4.4, true));
                scenicList.push(new Scenery("pineTree", 64079, -8629, 6, true));
                scenicList.push(new Scenery("pineTree", 64005, -8332, -8.5, true));
                scenicList.push(new Scenery("pineTree", 64548, -8894, 2.75, true));
                scenicList.push(new Scenery("pineTree", 64671, -9804, -1.4, true));
                scenicList.push(new Scenery("pineTree", 64673, -9454, -6.4, true));
                scenicList.push(new Scenery("pineTree", 65203, -9755, -9, true));
                scenicList.push(new Scenery("pineTree", 65118, -9218, 3, true));
                scenicList.push(new Scenery("pineTree", 65352, -8879, 5.9, true));
                scenicList.push(new Scenery("pineTree", 65727, -8579, -4.153, true));
                scenicList.push(new Scenery("pineTree", 66100, -8784, -1.073, true));
                scenicList.push(new Scenery("pineTree", 65801, -9070, -2.66687, true));
                scenicList.push(new Scenery("pineTree", 65596, -9375, 7.6, true));
                scenicList.push(new Scenery("pineTree", 66530, -8940, -5.9, true));
                scenicList.push(new Scenery("pineTree", 66104, -9293, -0.55, true));
                scenicList.push(new Scenery("pineTree", 65987, -8278, 6.2, true));
                scenicList.push(new Scenery("pineTree", 66425, -8298, -3.45, true));
                scenicList.push(new Scenery("pineTree", 66261, -7979, -2.8, true));
                scenicList.push(new Scenery("pineTree", 65798, -7230, -6.2, true));
                scenicList.push(new Scenery("pineTree", 65573, -7455, 4.1111011, true));
                scenicList.push(new Scenery("pineTree", 66100, -7569, 2.77, true));
                scenicList.push(new Scenery("pineTree", 65377, -6624, 5.9, true));
                scenicList.push(new Scenery("pineTree", 64838, -6867, -3.6, true));
                scenicList.push(new Scenery("pineTree", 65387, -6934, 1.5, true));
                scenicList.push(new Scenery("pineTree", 64975, -6414, 35, true));
                scenicList.push(new Scenery("pineTree", 64655, -6613, 5.75, true));
                scenicList.push(new Scenery("pineTree", 64457, -6248, -6.2, true));
                scenicList.push(new Scenery("pineTree", 65040, -5821, 1.15, true));
                scenicList.push(new Scenery("pineTree", 65464, -5917, -5.95, true));
                scenicList.push(new Scenery("pineTree", 64974, -6102, -7.125, true));
                scenicList.push(new Scenery("pineTree", 65346, -6264, 7.30, true));
                scenicList.push(new Scenery("pineTree", 64472, -5911, 6.173, true));
                scenicList.push(new Scenery("pineTree", 63609, -6071, 4.61, true));
                scenicList.push(new Scenery("pineTree", 64120, -6017, -1.5, true));
                scenicList.push(new Scenery("pineTree", 64282, -5535, 0.5, true));
                scenicList.push(new Scenery("pineTree", 64690, -5623, -0.8, true));
                scenicList.push(new Scenery("pineTree", 64529, -5151, -5, true));
                scenicList.push(new Scenery("pineTree", 64795, -4823, -1.44, true));
                scenicList.push(new Scenery("pineTree", 64283, -4841, 2.34, true));
                scenicList.push(new Scenery("pineTree", 64922, -4527, -3.85, true));
                scenicList.push(new Scenery("pineTree", 66148, -4497, -4.5219, true));
                scenicList.push(new Scenery("pineTree", 60009, -4336, 4.19, true));
                scenicList.push(new Scenery("pineTree", 66286, -4883, -7, true));
                scenicList.push(new Scenery("pineTree", 66477, -5142, -3.2, true));
                scenicList.push(new Scenery("pineTree", 66710, -4626, 6, true));
                scenicList.push(new Scenery("pineTree", 67112, -4525, 1.4, true));
                scenicList.push(new Scenery("pineTree", 67001, -4929, -5.5, true));
                scenicList.push(new Scenery("pineTree", 66362, -5609, 8.275, true));
                scenicList.push(new Scenery("pineTree", 66768, -5447, -64, true));
                scenicList.push(new Scenery("pineTree", 67022, -5227, -8.623, true));
                scenicList.push(new Scenery("pineTree", 67266, -5608, 5.3, true));
                scenicList.push(new Scenery("pineTree", 66702, -5950, -10.2, true));
                scenicList.push(new Scenery("pineTree", 66210, -6125, -12.07, true));
                scenicList.push(new Scenery("pineTree", 65800, -6231, -13.12, true));
                scenicList.push(new Scenery("pineTree", 65759, -6518, -9.45, true));
                scenicList.push(new Scenery("pineTree", 65871, -6800, 2.8, true));
                scenicList.push(new Scenery("pineTree", 66254, -6967, 12.12, true));
                scenicList.push(new Scenery("pineTree", 66184, -7216, -8.5, true));
                scenicList.push(new Scenery("pineTree", 66678, -7127, 2.222, true));
                scenicList.push(new Scenery("pineTree", 66580, -7422, -6.3, true));
                scenicList.push(new Scenery("pineTree", 66735, -7725, -5.41, true));
                scenicList.push(new Scenery("pineTree", 67068, -7918, -54.1, true));
                scenicList.push(new Scenery("pineTree", 66757, -8112, 5.8549, true));
                scenicList.push(new Scenery("pineTree", 67304, -8158, 5, true));
                scenicList.push(new Scenery("pineTree", 66996, -7441, -3.6, true));
                scenicList.push(new Scenery("pineTree", 67421, -7614, -3.42, true));
                scenicList.push(new Scenery("pineTree", 67679, -7979, 79, true));
                scenicList.push(new Scenery("pineTree", 67729, -8261, -2.84, true));
                scenicList.push(new Scenery("pineTree", 68095, -8100, 2.8, true));
                scenicList.push(new Scenery("pineTree", 59658, -4682, 6.173, true));
                scenicList.push(new Scenery("pineTree", 59572, -5030, 4.61, true));
                scenicList.push(new Scenery("pineTree", 60018, -4893, -1.5, true));
                scenicList.push(new Scenery("pineTree", 60341, -4632, 0.5, true));
                scenicList.push(new Scenery("pineTree", 60725, -4468, -0.8, true));
                scenicList.push(new Scenery("pineTree", 64001, -4484, -5, true));
                scenicList.push(new Scenery("pineTree", 64003, -5195, -1.44, true));
                scenicList.push(new Scenery("pineTree", 63668, -5302, 2.34, true));
                scenicList.push(new Scenery("pineTree", 63677, -4723, -3.85, true));
                scenicList.push(new Scenery("pineTree", 63408, -4984, -4.5219, true));
                scenicList.push(new Scenery("pineTree", 63408, -4984, 4.19, true));
                scenicList.push(new Scenery("pineTree", 63004, -5569, -7, true));
                scenicList.push(new Scenery("pineTree", 63165, -5242, -3.2, true));
                scenicList.push(new Scenery("pineTree", 63044, -4751, 6, true));
                scenicList.push(new Scenery("pineTree", 62684, -5001, 1.4, true));
                scenicList.push(new Scenery("pineTree", 62739, -4471, -5.5, true));
                scenicList.push(new Scenery("pineTree", 63364, -4547, 8.275, true));
                scenicList.push(new Scenery("pineTree", 61934, -4264, -64, true));
                scenicList.push(new Scenery("pineTree", 62122, -4660, -8.623, true));
                scenicList.push(new Scenery("pineTree", 62266, -5112, 5.3, true));
                scenicList.push(new Scenery("pineTree", 61752, -4976, -10.2, true));
                scenicList.push(new Scenery("pineTree", 61212, -5167, -12.07, true));
                scenicList.push(new Scenery("pineTree", 61273, -5450, -13.12, true));
                scenicList.push(new Scenery("pineTree", 60853, -5884, -9.59, true));
                scenicList.push(new Scenery("pineTree", 60742, -5517, 2.8, true));
                scenicList.push(new Scenery("pineTree", 60082, -6490, 10.02, true));
                scenicList.push(new Scenery("pineTree", 60646, -6226, 6.26, true));
                scenicList.push(new Scenery("pineTree", 60174, -6224, 2.228, true));
                scenicList.push(new Scenery("pineTree", 59903, -5975, -6.3, true));
                scenicList.push(new Scenery("pineTree", 60131, -5668, 5.14, true));
                scenicList.push(new Scenery("pineTree", 60568, -5712, 154, true));
                scenicList.push(new Scenery("pineTree", 60543, -5963, 5.8549, true));
                scenicList.push(new Scenery("pineTree", 60218, -5941, 5, true));
                scenicList.push(new Scenery("pineTree", 59684, -5614, -3.6, true));
                scenicList.push(new Scenery("pineTree", 59840, -5276, -3.42, true));
                scenicList.push(new Scenery("pineTree", 60377, -5471, -9.7, true));
                scenicList.push(new Scenery("pineTree", 61585, -4533, 2.84, true));
                scenicList.push(new Scenery("pineTree", 61306, -4887, 3.8, true));
                scenicList.push(new Scenery("pineTree", 61087, -4428, 0.8, true));
                scenicList.push(new Scenery("pineTree", 60891, -4753, 5, true));
                scenicList.push(new Scenery("pineTree", 60836, -5129, 1.44, true));
                scenicList.push(new Scenery("pineTree", 60257, -5141, 2.34, true));
                scenicList.push(new Scenery("pineTree", 60491, -4884, 4.84, true));
                scenicList.push(new Scenery("pineTree", 61583, -9024, -4.29, true));
                scenicList.push(new Scenery("pineTree", 63027, -10358, 9.4, true));

                change = "s1w6";
            }
        }
        else if (region == "e1") //Y > 6290 && Y < 32370
        {
            if (change != "e1")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

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
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

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
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

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

                //sign to Calcutt
                scenicList.push(new Scenery("sign", -212, -15217, Math.PI / 2, 1, "Calcutt Village - 52 sectors"));

                change = "s2";
            }
        }
        else if (region == "s3") //Y > 6290 && Y < 32370
        {
            if (change != "s3")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //citizens of Echlin village/tribe
                if (quests.fenwikEchlinArmed)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-995, -30767, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 4, speed: 1.65, outfit: ["naapridLeatherArmour", 4], weapon: ["kellishClaymore", [24, 9], 0, 50, 2.06], ranged: [false, "arrow", 5, 1500, 1, 3, 0, "none", 1.50], patrolStops: 0, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-1348, -30360, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 2, speed: 1.80, outfit: ["naapridLeatherArmour", 4], weapon: ["kellishClaymore", [23, 9], 0, 50, 2.15], ranged: [false, "arrow", 5, 1500, 1, 3, 0, "none", 1.50], patrolStops: 6, patrolLoop: true, route:[[-218, -30349], [-227, -31505], [-1706, -31503], [-1724, -30600], [-1366, -30601], [-1348, -30360]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-295, -30422, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 1, speed: 1.95, outfit: ["naapridLeatherArmour", 4], weapon: ["kellishClaymore", [18, 9], 0, 50, 3], ranged: [false, "arrow", 7, 1500, 1, 3, 0, "none", 1.50], patrolStops: 0, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-588, -31257, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 2, speed: 1.7, outfit: ["naapridLeatherArmour", 4], weapon: ["kellishClaymore", [20, 9], 0, 50, 3.15], ranged: [false, "arrow", 7, 1500, 1, 3, 0, "none", 1.50], patrolStops: 0, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-995, -30767, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 4, speed: 1.65, outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [10, 1], 8, 16, 1], ranged: [false, "arrow", 5, 1500, 1, 3, 0, "none", 1.50], patrolStops: 0, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-1348, -30360, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 2, speed: 1.80, outfit: ["naapridLeatherArmour", 4], weapon: ["warHammer", [11, 1], 8, 16, 1], ranged: [false, "arrow", 5, 1500, 1, 3, 0, "none", 1.50], patrolStops: 6, patrolLoop: true, route:[[-218, -30349], [-227, -31505], [-1706, -31503], [-1724, -30600], [-1366, -30601], [-1348, -30360]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-295, -30422, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 1, speed: 1.95, outfit: ["naapridLeatherArmour", 4], weapon: ["longbow", [8, 1], 8, 16, 1], ranged: [true, "arrow", 7, 1500, 1, 5, 0, "none", 1.50], patrolStops: 0, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
                    ArtificialIntelligenceAccess.push(new Unit(-588, -31257, "Soldier", false, "Echlin Tribe Warrior", {race: "Kel", faction: "Kel", con: 2, speed: 1.7, outfit: ["naapridLeatherArmour", 4], weapon: ["longbow", [8, 1], 8, 16, 1], ranged: [true, "arrow", 7, 1200, 1, 3, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[3071, 314], [3014, 394], [2218, 346]]}));
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
                            ArtificialIntelligenceAccess.push(new Unit(-441, -30503, "Person", false, teberName, {race: "Freynor", faction: "Kel", personality: "violent", outfit: ["naapridLeatherArmour", 4], weapon: ["kellishClaymore", [19, 2], 0, 50, 2.45], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 62], [new Item("naapridFiber", false, false), 11], [new Item("ironRing", false, false), 6], [new Item("pintGlass", false, false), 18], [new Item("potionGlass", false, false), 16], [new Item("glassJar", false, false), 7]]}));
                        }
                        else
                        {
                            ArtificialIntelligenceAccess.push(new Unit(-441, -30503, "Person", false, teberName, {race: "Freynor", faction: "Kel", personality: "violent", outfit: ["naapridLeatherArmour", 4], weapon: ["freydicSword", [6, 6], 0, 0, 1.45], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 62], [new Item("naapridFiber", false, false), 11], [new Item("ironRing", false, false), 6], [new Item("pintGlass", false, false), 18], [new Item("potionGlass", false, false), 16], [new Item("glassJar", false, false), 7]]}));
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
                        ArtificialIntelligenceAccess.push(new Unit(-1281, -30842, "Person", false, "Chieftain Schuylar", {race: "Kel", faction: "Kel", personality: "violent", outfit: ["naapridLeatherArmour", 6], weapon: ["kellishClaymore", [25, 1], 0, 50, 2], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: true, route:[[2049, 1021], [1943, 1127], [1690, 1021]], merchant: true, merchandise: [[new Item("coins", false, false), 492], [new Item("kellishClayPotOfNaapridMilk", false, false), 6], [new Item("naapridButter", false, false), 5], [new Item("kellishClayPotOfMushroomStew", false, false), 1], [new Item("kellishClayPotOfWater", false, false), 8], [new Item("kellishClayPot", false, false), 9], [new Item("santhBread", false, false), 1], [new Item("kellishSanthDough", false, false), 2], [new Item("rawNaapridFlesh", false, false), 4], [new Item("naapridMeat", false, false), 2], [new Item("pumpkin", false, false), 2], [new Item("jackOLanternEmpty", false, false), 3], [new Item("beesWax", false, false), 4], [new Item("candle", false, false), 6], [new Item("fireStarter", false, false), 2]]}));

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
                //Buildings
                scenicList.push(new Scenery("kellishBuilding1", -1238, -30472, 0, true));
                scenicList.push(new Scenery("kellishBuilding1", -879, -30432, 0, true));
                scenicList.push(new Scenery("kellishBuilding1", -443, -30529, 0, true));
                scenicList.push(new Scenery("kellishBuilding2", -741, -31419, 0, true));
                scenicList.push(new Scenery("kellishBuilding2", -382, -31379, 0, true));
                scenicList.push(new Scenery("kellishBuilding4", -469, -31083, 0, true));
                scenicList.push(new Scenery("kellishBuilding3", -1168, -31170, 0, true));
                scenicList.push(new Scenery("kellishBuilding3", -1319, -31348, 0, true));
                scenicList.push(new Scenery("kellishBuilding4", -312, -30807, 0, true));
                scenicList.push(new Scenery("kellishBuilding6", -1205, -30838, 0, true));

                //stuff
                scenicList.push(new Scenery("well", -718, -30700, 4, true));
                scenicList.push(new Scenery("campFire", -1186, -30846, -1.2, "permaLit"));

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
                ArtificialIntelligenceAccess.push(new Unit(-1420, -29340, "Frich", false, "Rataul"));
                ArtificialIntelligenceAccess.push(new Unit(-1204, -29146, "Frich", false, "Ratein"));
                ArtificialIntelligenceAccess.push(new Unit(-1381, -33597, "Frich", true, "Froozle"));

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
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

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

                //tomb of ulther, the brave
                scenicList.push(new Scenery("pineTree", -10076 , -11643, 3, true));
                scenicList.push(new Scenery("pineTree", -10720 , -11378, 1, true));
                scenicList.push(new Scenery("stone", -10195 , -11349, 1.3, 3, 1));
                scenicList.push(new Scenery("pineTree", -9458 , -11437, 7, true));
                scenicList.push(new Scenery("pineTree", -10452 , -10851, 4, true));
                scenicList.push(new Scenery("pineTree", -11136 , -11033, 2, true));
                scenicList.push(new Scenery("brightbloomPlant", -10190 , -11268, 4.1, "ultherFlower"));
                ArtificialIntelligenceAccess.push(new Unit(-12115, -11594, "Varn", true, "bossmanI"));
                ArtificialIntelligenceAccess.push(new Unit(-12166, -11846, "Varn", false, "bossmanII"));
                ArtificialIntelligenceAccess.push(new Unit(-11953, -11997, "Varn", true, "bossmanIII"));
                ArtificialIntelligenceAccess.push(new Unit(-10489, -10993, "Shehid", false, "hackeyI"));
                ArtificialIntelligenceAccess.push(new Unit(-11009, -11109, "Shehid", false, "hackeyII"));
                ArtificialIntelligenceAccess.push(new Unit(-10154, -11510, "Shehid", true, "hackeyBossman"));
                scenicList.push(new Scenery("akerPlant", -10152 , -11356, 5.5, true));
                ArtificialIntelligenceAccess.push(new Unit(-12454, -12972, "Avrak", false, "ahhratattackI"));
                ArtificialIntelligenceAccess.push(new Unit(-12200, -12910, "Avrak", false, "ahhratattackII"));
                ArtificialIntelligenceAccess.push(new Unit(-5000, -7500, "Frich", "massive", "uhohspagheti"));
                scenicList.push(new Scenery("grushweedPlant", -7654 , -12453, 1.3, 3));
                scenicList.push(new Scenery("grushweedPlant", -7832 , -12332, 4, 1.6));
                var rndmxz = Math.round(Math.random());
                if (rndmxz == 0)
                {
                    scenicList.push(new Scenery("grushweedPlant", -7370 , -12397, 6, 2));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(-7370 , -12397, "Grush", true, "boyomatic"));
                }
                scenicList.push(new Scenery("glinPlant", -10695 , -11241, 3.7, true));





                //all items dropped on map
                if (quests.ultherMapItems == true)
                {
                    quests.ultherMapItems = false;
                    worldItems.push([new Item("ultherRIP", -10163 , -11312), 1]);
                    worldItems.push([new Item("sealSkin", -10150 , -11312), 1]);
                    worldItems.push([new Item("culprisLeaf", -10157 , -11312), 2]);
                    worldItems.push([new Item("tylunFlower", -10150 , -11312), 1]);
                }

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
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //REGION CREATION
                //Build AI Units

                //grassborder animals
                ArtificialIntelligenceAccess.push(new Unit(-3906, -29862, "Frich", true, "Ratool"));
                ArtificialIntelligenceAccess.push(new Unit(-4181, -30861, "Frich", false, "Ratain"));
                ArtificialIntelligenceAccess.push(new Unit(-4251, -31000, "Frich", true, "Ratoal"));
                ArtificialIntelligenceAccess.push(new Unit(-4438, -30923, "Frich", false, "Rataon"));
                ArtificialIntelligenceAccess.push(new Unit(-3795, -32187, "Frich", false, "Ration"));
                ArtificialIntelligenceAccess.push(new Unit(-11615, -24474, "Frich", true, "Ratoala"));
                ArtificialIntelligenceAccess.push(new Unit(-11815, -24561, "Frich", false, "Rataono"));
                ArtificialIntelligenceAccess.push(new Unit(-9604, -24669, "Frich", true, "Ratoalo"));
                ArtificialIntelligenceAccess.push(new Unit(-6382, -24510, "Frich", false, "Rata"));

                ArtificialIntelligenceAccess.push(new Unit(-4432, -33545, "Mofu", true, "Kaperbaldi"));
                ArtificialIntelligenceAccess.push(new Unit(-4650, -33429, "Mofu", false, "Aperbaldica"));
                ArtificialIntelligenceAccess.push(new Unit(-4590, -33709, "Mofu", "baby", "Aper"));

                scenicList.push(new Scenery("tunskMound", -9277, -33752, 0, true)); //for mofu nests the last number determines its size multiplier.

                //Mofu Habitations
                scenicList.push(new Scenery("mofuNest", -4432, -33545, -2.1, 1.315)); //for mofu nests the last number determines its size multiplier.
                scenicList.push(new Scenery("techiPlant", -4599, -28695, 3, true));
                scenicList.push(new Scenery("luufPlant", -4355, -24889, -5, true));
                scenicList.push(new Scenery("itlinPlant", -9599, -24620, -3.2, true));
                scenicList.push(new Scenery("techiPlant", -9265, -24930, 1.11, true));

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
                scenicList.push(new Scenery("brolleFeast", -10116 , -29425, 0, false));
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
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (ArtificialIntelligenceAccess[i].playerSeen == false && !ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

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
    else if (map == "sagesCache")
    {
        if (region == "sagesCache")
        {
            if (change != "sagesCache")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (!ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //barriers
                barrierList.push(new Barrier(1000, -66, 720, 70, true));
                barrierList.push(new Barrier(328, -66, 1546, 70, true)); //long vertical right (entrance)
                barrierList.push(new Barrier(328, 1775, 900, 70, true)); //extension vertical right (entrance)
                barrierList.push(new Barrier(328, -96, 70, 720, true));
                barrierList.push(new Barrier(702, 570, 70, 370, true));
                barrierList.push(new Barrier(702, 630, 2045, 70, true)); //longer vertical left (entrance)
                barrierList.push(new Barrier(30, 2607, 70, 300, true));
                barrierList.push(new Barrier(30, 2607, 990, 70, true));
                barrierList.push(new Barrier(770, 2607, 70, 2031, true)); //bottom left horizontal east
                barrierList.push(new Barrier(1070, 2977, 70, 1731, true)); //top left horizontal east
                barrierList.push(new Barrier(1000, 2976, 650, 70, true));
                barrierList.push(new Barrier(30, 3578, 70, 1020, true));
                barrierList.push(new Barrier(2730, 1738, 886, 70, true)); //east chamber
                barrierList.push(new Barrier(3401, 1738, 1550, 70, true));
                barrierList.push(new Barrier(2730, 1704, 70, 700, true));
                barrierList.push(new Barrier(3100, 3278, 70, 340, true));
                barrierList.push(new Barrier(2730, 3045, 1130, 70, true));
                barrierList.push(new Barrier(3099, 3347, 1430, 70, true));
                barrierList.push(new Barrier(3163, 4704, 70, 1738, true));
                barrierList.push(new Barrier(3100, 5073, 70, 2105, true));
                barrierList.push(new Barrier(2732, 4475, 899, 70, true));
                barrierList.push(new Barrier(3099, 5141, 560, 70, true));
                barrierList.push(new Barrier(1832, 5304, 70, 900, true));
                barrierList.push(new Barrier(1830, 5308, 966, 70, true));
                barrierList.push(new Barrier(2199, 5658, 70, 950, true));
                barrierList.push(new Barrier(2199, 5677, 598, 70, true));
                barrierList.push(new Barrier(5198, 3273, 1850, 70, true));
                barrierList.push(new Barrier(4832, 3208, 70, 415, true));
                barrierList.push(new Barrier(4832, 3208, 1560, 70, true));
                barrierList.push(new Barrier(1535, 6204, 70, 330, true));
                barrierList.push(new Barrier(1535, 6209, 700, 70, true));
                barrierList.push(new Barrier(2270, 6206, 70, 330, true));
                barrierList.push(new Barrier(2497, 6239, 670, 70, true));
                barrierList.push(new Barrier(1552, 6878, 70, 1000, true));
                barrierList.push(new Barrier(-202, 4106, 70, 3000, true));
                barrierList.push(new Barrier(-199, 4478, 70, 3000, true));
                barrierList.push(new Barrier(-196, 4478, 600, 70, true));
                barrierList.push(new Barrier(-1160, 5078, 70, 1010, true));
                barrierList.push(new Barrier(-1173, 4778, 340, 70, true));
                barrierList.push(new Barrier(-1168, 3805, 70, 1010, true));
                barrierList.push(new Barrier(-1169, 3795, 680, 70, true));
                barrierList.push(new Barrier(-202, 3800, 320, 70, true));
                barrierList.push(new Barrier(-1699, 4406, 70, 535, true));
                barrierList.push(new Barrier(-2054, 4777, 70, 910, true));
                barrierList.push(new Barrier(-1701, 1774, 2640, 70, true)); //long vertical
                barrierList.push(new Barrier(-2078, 1403, 70, 380, true));
                barrierList.push(new Barrier(-2068, 1426, 2752, 70, true));
                barrierList.push(new Barrier(-2072, 4477, 390, 70, true));
                barrierList.push(new Barrier(-1786, 202, 70, 740, true));
                barrierList.push(new Barrier(-1766, 200, 1240, 70, true));
                barrierList.push(new Barrier(-1097, 212, 1000, 70, true)); //vertical left side south
                barrierList.push(new Barrier(-1398, 1174, 70, 400, true));
                barrierList.push(new Barrier(-1398, 1174, 262, 70, true));
                barrierList.push(new Barrier(-1404, 1403, 70, 1740, true));
                barrierList.push(new Barrier(-1636, 1778, 70, 1964, true));
                barrierList.push(new Barrier(-4085, 4108, 70, 2060, true)); //bot
                barrierList.push(new Barrier(-4470, 4478, 70, 2417, true)); //top
                barrierList.push(new Barrier(-4100, 3871, 300, 70, true));
                barrierList.push(new Barrier(-4093, 3872, 70, 600, true));
                barrierList.push(new Barrier(-4468, 3874, 620, 70, true)); //right vertical
                barrierList.push(new Barrier(-3506, 2906, 1025, 70, true)); //far left low
                barrierList.push(new Barrier(-5357, 2907, 70, 1900, true)); //bottom low (left)
                barrierList.push(new Barrier(-5370, 2924, 290, 70, true)); // |
                barrierList.push(new Barrier(-5902, 3200, 70, 603, true)); // --
                barrierList.push(new Barrier(-5905, 2898, 320, 70, true)); // |
                barrierList.push(new Barrier(-6890, 2904, 70, 1010, true));
                barrierList.push(new Barrier(-6869, 2900, 1000, 70, true));
                barrierList.push(new Barrier(-6889, 3872, 70, 1010, true)); //top right far horizontal
                barrierList.push(new Barrier(-5359, 3870, 70, 900, true)); //top right near horizontal
                barrierList.push(new Barrier(-5899, 3578, 70, 570, true));
                barrierList.push(new Barrier(-5899, 3581, 360, 70, true));
                barrierList.push(new Barrier(-5373, 3574, 340, 70, true));


                //REGION CREATION
                //Build AI Units

                //first room
                var rndx = Math.random();
                if (rndx >= 0.55)
                {
                    ArtificialIntelligenceAccess.push(new Unit(845, 498, "Nog", true, "Kalp"));
                    ArtificialIntelligenceAccess.push(new Unit(490, 106, "Nog", true, "Dilk"));
                    ArtificialIntelligenceAccess.push(new Unit(757, 144, "Nog", false, "Pesht"));
                }
                else if (rndx >= 0.25)
                {
                    ArtificialIntelligenceAccess.push(new Unit(845, 498, "Frich", true, "Ja"));
                    ArtificialIntelligenceAccess.push(new Unit(490, 106, "Frich", false, "Li"));
                    ArtificialIntelligenceAccess.push(new Unit(757, 144, "Frich", true, "Ko"));
                }
                else if (rndx >= 0.15)
                {
                    ArtificialIntelligenceAccess.push(new Unit(795, 439, "Oolid", true, "Oglomok"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(931, 482, "Oolid", false, "Aglomel"));
                    ArtificialIntelligenceAccess.push(new Unit(672, 35, "Oolid", false, "Eklamil"));
                }
                //hallway ambush or not
                rndx = Math.random();
                if (rndx >= 0.67)
                {
                    ArtificialIntelligenceAccess.push(new Unit(558, 1522, "Nog", false, "Paik"));
                }
                else if (rndx >= 0.46)
                {
                    ArtificialIntelligenceAccess.push(new Unit(558, 1522, "Nog", true, "Paike"));
                }
                else if (rndx >= 0.34)
                {
                    ArtificialIntelligenceAccess.push(new Unit(486, 1607, "Oolid", false, "ilklo"));
                }
                else if (rndx >= 0.26)
                {
                    ArtificialIntelligenceAccess.push(new Unit(558, 1522, "Frich", true, "Zo"));
                    ArtificialIntelligenceAccess.push(new Unit(486, 1607, "Frich", false, "Ka"));
                }

                rndx = Math.random();
                if (rndx >= 0.80)
                {
                    ArtificialIntelligenceAccess.push(new Unit(770, 2982, "Frich", "massive", "Scurr"));
                    ArtificialIntelligenceAccess.push(new Unit(487, 3438, "Frich", "massive", "Relf"));
                }
                else if (rndx >= 0.60)
                {
                    ArtificialIntelligenceAccess.push(new Unit(560, 3189, "Tilk", true, "Poluikeiv"));
                }
                else if (rndx >= 0.40)
                {
                    ArtificialIntelligenceAccess.push(new Unit(853, 3420, "Tilk", false, "Kastur"));
                    ArtificialIntelligenceAccess.push(new Unit(235, 3325, "Tilk", false, "Polukz"));
                }
                else if (rndx >= 0.20)
                {
                    ArtificialIntelligenceAccess.push(new Unit(476, 3362, "Oolid", true, "Merhuv"));
                    ArtificialIntelligenceAccess.push(new Unit(697, 3090, "Oolid", false, "Clotzalk"));
                }
                else
                {
                    if (Math.round(Math.random()))
                    {
                        ArtificialIntelligenceAccess.push(new Unit(538, 3055, "Soldier", false, "Looter", {race: "Thengar", faction: "hostile", con: 4, speed: 0, outfit: ["none", 0], weapon: ["longbow", [0.1, 0.4], 0, 16, 1], ranged: [true, "arrow", 8, 1100, 1, 5, 0, "none", 1.2], patrolStops: 0, patrolLoop: false, route:[[435 - 750, 5563], [400 - 750, 5668], [636 - 750, 5860], [827 - 750, 5357]]}));
                    }
                    else
                    {
                        ArtificialIntelligenceAccess.push(new Unit(538, 3055, "Soldier", false, "Looter", {race: "Freynor", faction: "hostile", con: 6, speed: 0, outfit: ["none", 0], weapon: ["longbow", [0.1, 0.4], 0, 16, 1], ranged: [true, "arrow", 7, 1275, 1, 4, 0, "none", 1.6], patrolStops: 0, patrolLoop: false, route:[[435 - 750, 5563], [400 - 750, 5668], [636 - 750, 5860], [827 - 750, 5357]]}));
                    }
                    scenicList.push(new Scenery("bearTrap", 629, 2638, 1/8 * Math.PI, true));
                    scenicList.push(new Scenery("bearTrap", 549, 2500, 5.5/8 * Math.PI, true));
                    scenicList.push(new Scenery("bearTrap", 448, 2531, 0 * Math.PI, true));
                    scenicList.push(new Scenery("bearTrap", 409, 2405, 0.5 * Math.PI, true));
                    scenicList.push(new Scenery("bearTrap", 660, 2315, 0.33 * Math.PI, true));
                }
                rndx = Math.random();
                if (rndx <= 0.5)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2981, 1978, "Nog", true, "Pok"));
                    ArtificialIntelligenceAccess.push(new Unit(3332, 1834, "Nog", true, "Zob"));
                    ArtificialIntelligenceAccess.push(new Unit(3253, 2121, "Nog", false, "Zim"));
                    ArtificialIntelligenceAccess.push(new Unit(3089, 2322, "Nog", false, "Zal"));
                    ArtificialIntelligenceAccess.push(new Unit(2903, 2302, "Nog", false, "Zil"));
                    ArtificialIntelligenceAccess.push(new Unit(3297, 2545, "Nog", false, "Zop"));
                    ArtificialIntelligenceAccess.push(new Unit(3198, 2888, "Nog", true, "Zolth"));
                    ArtificialIntelligenceAccess.push(new Unit(3089, 3165, "Nog", false, "Zole"));
                    ArtificialIntelligenceAccess.push(new Unit(3368, 3229, "Nog", false, "Afer"));
                }
                else if (rndx <= 0.8)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2981, 1978, "Frich", false, "Fok"));
                    ArtificialIntelligenceAccess.push(new Unit(3332, 1834, "Frich", false, "Fob"));
                    ArtificialIntelligenceAccess.push(new Unit(3253, 2121, "Frich", true, "Fim"));
                    ArtificialIntelligenceAccess.push(new Unit(3089, 2322, "Frich", true, "Fal"));
                    ArtificialIntelligenceAccess.push(new Unit(2903, 2302, "Frich", false, "Fil"));
                    ArtificialIntelligenceAccess.push(new Unit(3297, 2545, "Frich", false, "Fop"));
                    ArtificialIntelligenceAccess.push(new Unit(3198, 2888, "Frich", true, "Folth"));
                    ArtificialIntelligenceAccess.push(new Unit(3089, 3165, "Frich", true, "Fole"));
                    ArtificialIntelligenceAccess.push(new Unit(3368, 3229, "Frich", false, "Fer"));
                }
                else if (rndx <= 0.95)
                {
                    ArtificialIntelligenceAccess.push(new Unit(3071, 1887, "Oolid", true, "Plutma"));
                    ArtificialIntelligenceAccess.push(new Unit(3219, 2195, "Oolid", true, "Hlolutmor"));
                    ArtificialIntelligenceAccess.push(new Unit(3231, 2657, "Oolid", false, "Hlotm"));
                    ArtificialIntelligenceAccess.push(new Unit(2948, 3245, "Oolid", false, "Flomlaak"));
                    ArtificialIntelligenceAccess.push(new Unit(3293, 2822, "Oolid", false, "Flotmora"));
                }
                else
                {
                    ArtificialIntelligenceAccess.push(new Unit(3241, 2194, "Tilk", false, "Kolkezafa"));
                    ArtificialIntelligenceAccess.push(new Unit(3153, 1883, "Tilk", false, "Karkefol"));
                }

                rndx = Math.random();
                if (rndx <= 0.25)
                {
                    ArtificialIntelligenceAccess.push(new Unit(5056, 3469, "Tilk", true, "Lestuxlevt"));
                }
                else if (rndx <= 0.5)
                {
                    ArtificialIntelligenceAccess.push(new Unit(5056, 3469, "Olkrin", "baby", "Vaulswarthe"));
                }

                rndx = Math.random();
                if (rndx <= 0.1)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2362, 6727, "Tilk", false, "Ekenveldt"));
                    ArtificialIntelligenceAccess.push(new Unit(1758, 6733, "Tilk", false, "Akenveldt"));
                    ArtificialIntelligenceAccess.push(new Unit(2049, 6625, "Tilk", false, "Ikenveldt"));
                }
                else if (rndx <= 0.2)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2053, 6796, "Olkrin", "baby", "Vonklaove"));
                }
                else if (rndx <= 0.3)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2049, 6558, "Tilk", true, "Kavenveldt"));
                }
                else if (rndx <= 0.8)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2298, 6676, "Nog", false, "Af"));
                    ArtificialIntelligenceAccess.push(new Unit(2115, 6553, "Nog", true, "Aft"));
                    ArtificialIntelligenceAccess.push(new Unit(2039, 6798, "Nog", true, "Afte"));
                    ArtificialIntelligenceAccess.push(new Unit(1814, 6738, "Nog", false, "Afe"));
                    ArtificialIntelligenceAccess.push(new Unit(1707, 6535, "Nog", true, "Tefa"));
                    ArtificialIntelligenceAccess.push(new Unit(1943, 6477, "Nog", false, "Tafe"));
                    ArtificialIntelligenceAccess.push(new Unit(2232, 6520, "Nog", true, "Efat"));
                    ArtificialIntelligenceAccess.push(new Unit(2443, 6387, "Nog", false, "Faet"));
                }
                else if (rndx <= 0.88)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2055, 6547, "MountainFrich", true, "Holof"));
                }

                rndx = Math.random();
                if (rndx <= 0.2)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2016, 4351, "Nog", false, "Atle"));
                }
                else if (rndx <= 0.4)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2016, 4351, "Nog", true, "Etla"));
                }
                else if (rndx <= 0.5)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2016, 4351, "Nog", true, "Etla"));
                    ArtificialIntelligenceAccess.push(new Unit(1959, 4257, "Nog", true, "Leat"));
                }
                else if (rndx <= 0.6)
                {
                    ArtificialIntelligenceAccess.push(new Unit(2011, 4322, "MountainFrich", false, "Kalofer"));
                }
                else if (rndx <= 0.7)
                {
                    ArtificialIntelligenceAccess.push(new Unit(1513, 4426, "Oolid", false, "Koulpil"));
                }
                else if (rndx <= 0.8)
                {
                    ArtificialIntelligenceAccess.push(new Unit(1513, 4426, "Oolid", true, "Foulok"));
                    ArtificialIntelligenceAccess.push(new Unit(1631, 4236, "Oolid", true, "Fowlomn"));
                }

                rndx = Math.random();
                if (rndx <= 0.3)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-670, 1671, "Miter", false, "Cash"));
                }
                else if (rndx <= 0.6)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-670, 1671, "Miter", true, "Cash"));
                }
                else if (rndx <= 0.7)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-670, 1671, "Miter", false, "Cash"));
                    ArtificialIntelligenceAccess.push(new Unit(-863, 1532, "Miter", false, "Grave"));
                }
                else if (rndx <= 0.8)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-815, 1699, "Miter", true, "Cash"));
                    ArtificialIntelligenceAccess.push(new Unit(-568, 1560, "Miter", true, "Grave"));
                }
                else if (rndx <= 0.9)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-815, 1699, "Miter", true, "Cash"));
                    ArtificialIntelligenceAccess.push(new Unit(-568, 1560, "Miter", false, "Grave"));
                }
                else if (rndx <= 1)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-815, 1699, "Miter", false, "Cash"));
                    ArtificialIntelligenceAccess.push(new Unit(-568, 1560, "Miter", true, "Grave"));
                }

                rndx = Math.random();
                if (rndx <= 0.25)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-1257, 873, "Tilk", true, "Thavenveldt"));
                    ArtificialIntelligenceAccess.push(new Unit(-1409, 492, "Tilk", true, "Dgavemxeldt"));
                    ArtificialIntelligenceAccess.push(new Unit(-1199, 474, "Tilk", false, "Jyermovenm"));
                }
                else if (rndx <= 0.6)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-1249, 1029, "Miter", false, "Ditch"));
                    ArtificialIntelligenceAccess.push(new Unit(-1221, 383, "Miter", true, "Cash"));
                    ArtificialIntelligenceAccess.push(new Unit(-1422, 470, "Miter", true, "Grave"));
                    ArtificialIntelligenceAccess.push(new Unit(-1520, 749, "Miter", true, "Dig"));
                }
                else if (rndx <= 1)
                {
                    ArtificialIntelligenceAccess.push(new Unit(-1221, 383, "Miter", true, "Cash"));
                    ArtificialIntelligenceAccess.push(new Unit(-1422, 470, "Miter", true, "Grave"));
                    ArtificialIntelligenceAccess.push(new Unit(-1520, 749, "Miter", true, "Dig"));
                }

                scenicList.push(new Scenery("spindleTrap", -1748, 1715, -0.33 * Math.PI, true));
                scenicList.push(new Scenery("spindleTrap", -1911, 1543, 0.66 * Math.PI, true));
                scenicList.push(new Scenery("spindleTrap", -1904, 1719, 0.2 * Math.PI, true));
                scenicList.push(new Scenery("spindleTrap", -1777, 1588, -0.55 * Math.PI, true));

                //TODO finish this dungeon (include the lightning spear mage as the final boss if you engage the right quest)

                //Build Scenery
                scenicList.push(new Scenery("caveExit", 959, 16, 3/4 * Math.PI, [35773, 1297], "world"));

                scenicList.push(new Scenery("blackBearFurRug", 2049, 6450, 1/2 * Math.PI, 1.6));
                scenicList.push(new Scenery("skeleton", 2058, 6781, 0.2 * Math.PI, 1.6));
                scenicList.push(new Scenery("feastingTable", 2232, 6536, -1/2 * Math.PI, true));
                scenicList.push(new Scenery("feastingTable", 1790, 6536, -1/2 * Math.PI, true));
                scenicList.push(new Scenery("bartop", 2061, 6712, 1 * Math.PI, true));
                scenicList.push(new Scenery("hearth", 2062, 6855, 0 * Math.PI, "ash"));


                if (quests.sagesCacheStash)
                {
                    quests.sagesCacheStash = false;
                    worldItems.push([new Item("oiledArrow", 2051, 6782), 9]);
                    worldItems.push([new Item("longbow", 2066, 6646), 1]);
                    worldItems.push([new Item("longsword", 2099, 6821), 1]);
                    worldItems.push([new Item("pintGlass", 2053, 6701), 1]);
                }

                change = "sagesCache";
            }
        }
    }
    else if (map == "venningCityPrison")
    {
        if (region == "venningCityPrison")
        {
            if (change != "venningCityPrison")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (!ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //barriers
                barrierList.push(new Barrier(1000, -66, 720, 70, true));
                barrierList.push(new Barrier(330, -66, 720, 70, true));
                barrierList.push(new Barrier(320, -99, 70, 750, true));
                barrierList.push(new Barrier(320, 577, 70, 750, true));

                //scenery
                if (player.prisoner != true)
                {
                    scenicList.push(new Scenery("ladder", 483, 45, 0 * Math.PI, [-18509, 44450], "world"));
                }
                //units
                ArtificialIntelligenceAccess.push(new Unit(780, 338, "Soldier", false, "Prisoner", {race: "Freynor", faction: "arena2", con: 2, speed: 1.5, outfit: ["none", 0], weapon: ["none", [0.45, 0.3], 0, 0, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));

                change = "venningCityPrison";
            }
        }
    }
    else if (map == "lethikCityPrison")
    {
        if (region == "lethikCityPrison")
        {
            if (change != "lethikCityPrison")
            {
                dialogueReset();
                //Delete All Non-native AI Units
                for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--) //Splice will alter the list so the numbers will be off if you loop through beginning to end, so this for loop goes from the end to the beginning.
                {
                    if (!ArtificialIntelligenceAccess[i].guarantee)
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

                //Delete All Barriers
                barrierList = [];

                //barriers
                barrierList.push(new Barrier(1000, -66, 720, 70, true));
                barrierList.push(new Barrier(-275, -66, 720, 70, true));
                barrierList.push(new Barrier(-291, -99, 70, 1320, true));
                barrierList.push(new Barrier(-291, 577, 70, 1320, true));

                //scenery
                scenicList.push(new Scenery("ladder", 373, 465, 0 * Math.PI, [53014, -6700], "world"));
                //units
                ArtificialIntelligenceAccess.push(new Unit(467, 434, "Soldier", false, "Beulingerr Soldier", {race: "Thengar", faction: "Thengar", con: 7, speed: 1.38, outfit: ["chainArmour", 7], weapon: ["thenganSword", [10, 5], 0, 16, 1.4], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 0, patrolLoop: true, route:[]}));
                ArtificialIntelligenceAccess.push(new Unit(852, 495, "Soldier", false, "Slave Man", {race: "Kel", faction: "arena2", con: 1.25, speed: 1, outfit: ["none", 0], weapon: ["none", [0.45, 0.3], 0, 0, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(855, 252, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 1.15, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(869, 284, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(794, 248, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(520, 319, "Soldier", false, "Slave Man", {race: "Kel", faction: "arena2", con: 1.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.45, 0.3], 0, 0, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(178, 505, "Soldier", false, "Slave Man", {race: "Kel", faction: "Kel", con: 1.25, speed: 1, outfit: ["none", 0], weapon: ["none", [0.45, 0.3], 0, 0, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(304, 388, "Soldier", false, "Beulingerr Soldier", {race: "Thengar", faction: "Thengar", con: 7, speed: 1.38, outfit: ["chainArmour", 7], weapon: ["thenganSword", [10, 5], 0, 16, 1.4], ranged: [false, "arrow", 8, 2100, 1, 7, 0, "stunI", 2.65], rot: -1/2*Math.PI, patrolStops: 0, patrolLoop: true, route:[]}));
                ArtificialIntelligenceAccess.push(new Unit(374, 192, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 2, speed: 0, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(389, 114, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(50, 25, "Soldier", false, "Slave Boy", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.075, 0.075], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(4, 41, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.25, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(-14, 74, "Soldier", false, "Slave Girl", {race: "Kel", faction: "arena2", con: 0.75, speed: 0, outfit: ["none", 0], weapon: ["none", [0.045, 0.045], 0, 0, 0.75], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], kid: true, patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(41, 287, "Soldier", false, "Slave Man", {race: "Kel", faction: "arena2", con: 1.25, speed: 1, outfit: ["none", 0], weapon: ["none", [0.45, 0.3], 0, 0, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(-70, 429, "Soldier", false, "Slave Man", {race: "Kel", faction: "arena2", con: 1.25, speed: 1, outfit: ["none", 0], weapon: ["none", [0.45, 0.3], 0, 0, 1], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));
                ArtificialIntelligenceAccess.push(new Unit(623, 53, "Soldier", false, "Slave Woman", {race: "Kel", faction: "arena2", con: 1, speed: 1.15, outfit: ["none", 0], weapon: ["none", [0.2, 0.2], 0, 0, 0.85], ranged: [false, "arrow", 4, 2000, 1, 6, 0, "none", 1.4], patrolStops: 0, patrolLoop: false, route:[[348 - 750, 5428], [391 - 750, 5303], [260 - 750, 5339]]}));

                //If not noble or royal and thengan the guards will attack you for trespassing.
                if (player.raceName != "Thengar" || player.title != "Nobility" && player.title != "Royalty")
                {
                    console.log("pass");
                    for (var ii = 0; ii < ArtificialIntelligenceAccess.length; ii++)
                    {
                        if (ArtificialIntelligenceAccess[ii].team == "Thengar")
                        {
                            ArtificialIntelligenceAccess[ii].disturbedTime = new Date().getTime();
                        }
                    }
                }

                change = "lethikCityPrison";
            }
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
                    XXX.drawImage(forestEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
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
