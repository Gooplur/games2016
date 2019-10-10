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
        //Layer 34 (hot tropical region): elev -4
        //mapS34 //Holuim City
        if (Y > -350716 && Y < -339932 && X < 7687 && X > - 3901) //X0
        {
            elevation = -4;
            region = "s34";
            campout = false;
            outlineBuilder( 34, 34, "prairy", -20, 1136);
            outlineBuilder(9, 14, "cephrianTile", -13, 1142);
            outlineBuilder(1, 16, "cephrianRoad", -14, 1141);
            outlineBuilder(10, 1, "cephrianRoad", -14, 1142);
            outlineBuilder(1, 15, "cephrianRoad", -13, 1151);
            outlineBuilder(9, 1, "cephrianRoad", 1, 1142);
            outlineBuilder(1, 6, "cephrianRoad", -20, 1149);
            outlineBuilder(1, 12, "cephrianRoad", 2, 1143);

            outlineBuilder(9, 1, "cephrianRoad", -9, 1142);
            outlineBuilder(7, 1, "cephrianRoad", -6, 1142);
            outlineBuilder(7, 1, "cephrianRoad", -2, 1142);

            outlineBuilder(1, 3, "cephrianRoad", -5, 1148);

            outlineBuilder(1, 4, "cephrianRoad", -13, 1144);
            outlineBuilder(1, 4, "cephrianRoad", -13, 1147);

            outlineBuilder(6, 3, "jungle", -5, 1142);

            outlineBuilder(5, 5, "jungle", -2, 1154);
            outlineBuilder(4, 1, "cephrianRoad", 0, 1152);
        }
        //mapS34W1
        if (Y > -350716 && Y < -339932 && X < 17891 && X > 6299) //X-1
        {
            elevation = -4;
            region = "s34w1";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -54, 1136);
            outlineBuilder(1, 34, "cephrianRoad", -54, 1149);
        }
        //Layer 33 (hot tropical region): elev -4
        //mapS33
        if (Y > -340527 && Y < -329725 && X < 7687 && X > - 3901) //X0
        {
            elevation = -4;
            region = "s33";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -20, 1102);
        }
        //Layer 32 (hot tropical region): elev -4
        //mapS32
        if (Y > -330303.19 && Y < -319526 && X < 7687 && X > - 3901) //X0
        {
            elevation = -4;
            region = "s32";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -20, 1068);

            outlineBuilder(2, 7, "outline", -19, 1068);
            outlineBuilder(1, 4, "outline", -11, 1068);
            outlineBuilder(2, 5, "outline", -5, 1068);
            outlineBuilder(1, 6, "outline", 2, 1068);
            outlineBuilder(1, 3, "outline", 10, 1068);

            outlineBuilder(1, 3, "outline", -17, 1070);
            outlineBuilder(1, 2, "outline", -10, 1069);
            outlineBuilder(1, 2, "outline", -2, 1070);
            outlineBuilder(2, 4, "outline", 5, 1069);

            outlineBuilder(1, 1, "outline", 10, 1069);
            outlineBuilder(1, 4, "outline", 4, 1071);
        }
        //Layer 31 (tropical region): elev -3
        //mapS31
        if ( Y > -320122.8 && Y < -309321.7 && X < 7687 && X > - 3901) //X0 //todo add this map
        {
            elevation = -3;
            region = "s31";
            campout = true;
            outlineBuilder( 34, 34, "jungle", -20, 1034);
        }
        //Layer 30 (tropical region): elev -3
        //mapS30
        if (Y > -309958.45 && Y < -299132 && X < 7687 && X > - 3901) //X0 //todo add this map
        {
            elevation = -3;
            region = "s30";
            campout = true;
            outlineBuilder( 34, 34, "outline", -20, 1000);
        }
        //Layer -29 (tropical region): elev -3
        //mapS29
        if (Y > -299717.93 && Y < -288910.49 && X < 7687 && X > - 3901) //X0
        {
            elevation = -3;
            region = "s29";
            campout = true;
            outlineBuilder( 34, 34, "jungle", -20, 966);
        }
        //mapS28  (tropical region): elev -3
        if (Y > -289573.87 && Y < -278703.92 && X < 7687 && X > - 3901) //X0
        {
            elevation = -3;
            region = "s28";
            campout = true;
            outlineBuilder( 34, 34, "jungle", -20, 932);
        }
        //Layer -27 (tropical region): elev -3
        //mapS27
        if (Y > -279312 && Y < -268536 && X < 7687 && X > - 3901) //X0
        {
            elevation = -3;
            region = "s27";
            campout = true;
            outlineBuilder( 34, 34, "jungle", -20, 898);
        }
        //Layer -26 (tropical region): elev -3
        //mapS26
        if (Y > -269151 && Y < -258299 && X < 7687 && X > - 3901) //X0
        {
            elevation = -3;
            region = "s26";
            campout = true;
            outlineBuilder( 34, 34, "jungle", -20, 864);
        }
        //mapS26W1
        if (Y > -269151 && Y < -258299 && X < 17891 && X > 6299) //X-1
        {
            elevation = -3;
            region = "s26w1";
            campout = true;
            outlineBuilder( 34, 34, "jungle", -54, 864);
        }
        //Layer -25 (tropical region): elev -3
        //mapS25
        if (Y > -258904 && Y < -248132 && X < 7687 && X > - 3901) //X0
        {
            elevation = -3;
            region = "s25";
            campout = true;
            outlineBuilder( 34, 34, "jungle", -20, 830);
        }
        //Layer -24 (tropical region): elev -3
        //mapS24
        if (Y > -248711 && Y < -237943 && X < 7687 && X > - 3901) //X0
        {
            elevation = -3;
            region = "s24";
            campout = true;
            outlineBuilder( 34, 34, "jungle", -20, 796);
        }
        //Layer -23 (warm region): elev -2
        //mapS23
        if (Y > -238507 && Y < -227726 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s23";
            campout = true;
            outlineBuilder( 34, 34, "savannah", -20, 762);
            outlineBuilder( 2, 2, "savannahDirt", -15, 770);
            outlineBuilder( 3, 1, "savannahDirt", 2, 789);
            outlineBuilder( 1, 1, "savannahDirt", 0, 775);
            outlineBuilder( 1, 1, "savannahDirt", -9, 783);
            outlineBuilder( 2, 5, "jungle", -18, 794);
            outlineBuilder( 1, 2, "jungle", -17, 793);
            outlineBuilder( 1, 4, "jungle", -13, 795);
            outlineBuilder( 1, 3, "jungle", -9, 795);
            outlineBuilder( 1, 6, "jungle", -2, 795);
            outlineBuilder( 1, 3, "jungle", 0, 794);
            outlineBuilder( 1, 2, "jungle", 9, 795);
            outlineBuilder( 1, 1, "jungle", 13, 795);
        }
        //Layer -22 (warm region): elev -2
        //mapS22
        if (Y > -228312 && Y < -217520 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s22";
            campout = true;
            outlineBuilder( 34, 34, "savannah", -20, 728);
            outlineBuilder( 4, 2, "savannahDirt", -16, 737);
            outlineBuilder( 1, 3, "savannahDirt", 8, 742);
            outlineBuilder( 1, 1, "savannahDirt", 3, 735);
        }
        //Layer -21 (warm region): elev -2
        //mapS21
        if (Y > -218110 && Y < -207328 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s21";
            campout = true;
            outlineBuilder( 34, 34, "savannah", -20, 694);
            outlineBuilder( 1, 1, "savannahDirt", 2, 700);
            outlineBuilder( 1, 1, "savannahDirt", 6, 712);
            outlineBuilder( 1, 2, "savannahDirt", -11, 705);
            outlineBuilder( 1, 1, "savannahDirt", -17, 720);
            outlineBuilder( 1, 1, "savannahDirt", -14, 717);
            outlineBuilder( 1, 1, "savannahDirt", -7, 718);
        }
        //Layer -20 (warm region): elev -2
        //mapS20
        if (Y > -207902 && Y < -197116 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s20";
            campout = true;
            outlineBuilder( 34, 34, "savannah", -20, 660);
            outlineBuilder( 2, 2, "savannahDirt", -3, 670);
            outlineBuilder( 1, 2, "savannahDirt", -7, 683);
            outlineBuilder( 1, 1, "savannahDirt", 8, 692);
            outlineBuilder( 1, 1, "savannahDirt", 4, 667);
            outlineBuilder( 1, 1, "savannahDirt", 10, 677);
        }
        //Layer -19 (warm region): elev -2
        //mapS19
        if (Y > -197728 && Y < -186928 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s19";
            campout = true;
            outlineBuilder( 34, 34, "savannah", -20, 626);
            outlineBuilder( 2, 3, "savannahDirt", -13, 637);
            outlineBuilder( 1, 1, "savannahDirt", -5, 642);
            outlineBuilder( 1, 2, "savannahDirt", -16, 631);
            outlineBuilder( 1, 1, "savannahDirt", 10, 650);
        }
        //Layer -18 (warm region): elev -2
        //mapS18
        if (Y > -187519 && Y < -176743 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s18";
            campout = true;
            //outlineBuilder( 34, 34, "savannah", -20, 592);
            outlineBuilder( 4, 34, "savannah", -20, 592);
            outlineBuilder( 16, 34, "savannahDirt", -20, 596);
            outlineBuilder( 4, 9, "savannah", -20, 596);
            outlineBuilder( 2, 5, "savannah", -11, 596);
            outlineBuilder( 1, 2, "savannah", -11, 598);
            outlineBuilder( 1, 5, "savannah", -6, 596);
            outlineBuilder( 1, 11, "savannahDirt", 3, 595);
            outlineBuilder( 14, 34, "savannah", -20, 612);
            outlineBuilder( 3, 18, "savannah", -4, 609);
            outlineBuilder( 1, 2, "savannah", -6, 611);
            outlineBuilder( 1, 1, "savannah", -5, 610);
            outlineBuilder( 2, 8, "savannah", 6, 607);
            outlineBuilder( 7, 9, "sea", 5, 597);
            outlineBuilder( 7, 3, "sea", 2, 598);
            outlineBuilder( 1, 1, "seaCornerTL", 4, 597);
            outlineBuilder( 1, 1, "seaCornerBR", 5, 604);
            outlineBuilder( 7, 4, "sea", -2, 599);
            outlineBuilder( 1, 1, "seaCornerTL", 1, 598);
            outlineBuilder( 1, 1, "seaCornerBR", 2, 605);
            outlineBuilder( 7, 6, "sea", -8, 600);
            outlineBuilder( 1, 1, "seaCornerTL", -3, 599);
            outlineBuilder( 1, 1, "seaCornerBR", -2, 606);
            outlineBuilder( 7, 1, "sea", -9, 601);
            outlineBuilder( 7, 1, "sea", -10, 602);
            outlineBuilder( 7, 5, "sea", -15, 603);
            outlineBuilder( 7, 5, "sea", -20, 604);
            outlineBuilder( 1, 1, "seaCornerTL", -9, 600);
            outlineBuilder( 1, 1, "seaCornerTL", -10, 601);
            outlineBuilder( 1, 1, "seaCornerTL", -11, 602);
            outlineBuilder( 1, 1, "seaCornerBR", -9, 608);
            outlineBuilder( 1, 1, "seaCornerBR", -8, 607);
            outlineBuilder( 1, 1, "seaCornerBR", -10, 609);
            outlineBuilder( 1, 1, "seaCornerBR", -15, 610);
            outlineBuilder( 1, 1, "seaCornerTL", -16, 603);
            outlineBuilder( 2, 3, "savannahDirt", -16, 615);
            outlineBuilder( 1, 1, "savannahDirt", -14, 617);
            outlineBuilder( 1, 2, "savannahDirt", -7, 618);
            outlineBuilder( 1, 1, "savannahDirt", -2, 622);
        }
        //mapS18E1
        if (Y > -187519 && Y < -176743 && X < - 2490 && X > -14114) //X1
        {
            elevation = -2;
            region = "s18e1";
            campout = true;

            outlineBuilder( 34, 34, "savannah", 14, 592);

            outlineBuilder( 2, 24, "savannahDirt", 14, 595);
            outlineBuilder( 1, 18, "savannahDirt", 20, 594);
            outlineBuilder( 1, 9, "savannahDirt", 30, 593);
            outlineBuilder( 1, 7, "savannahDirt", 34, 592);
            outlineBuilder( 3, 20, "savannahDirt", 14, 602);
            outlineBuilder( 1, 15, "savannahDirt", 14, 605);
            outlineBuilder( 4, 5, "savannahDirt", 34, 600);
            outlineBuilder( 5, 5, "savannahDirt", 39, 598);
            outlineBuilder( 5, 4, "savannahDirt", 44, 596);

            outlineBuilder( 7, 7, "sea", 14, 597);
            outlineBuilder( 6, 2, "sea", 21, 597);
            outlineBuilder( 7, 9, "sea", 23, 596);
            outlineBuilder( 7, 4, "sea", 32, 595);
            outlineBuilder( 1, 1, "seaCornerBR", 21, 603);
            outlineBuilder( 1, 1, "seaCornerTL", 22, 596);
            outlineBuilder( 1, 1, "seaCornerTL", 31, 595);
            outlineBuilder( 1, 1, "seaCornerBR", 32, 602);
            outlineBuilder( 1, 1, "seaCornerTL", 36, 594);
            outlineBuilder( 1, 1, "seaCornerTL", 37, 593);
            outlineBuilder( 1, 1, "seaCornerBR", 36, 601);
            outlineBuilder( 1, 1, "seaCornerBR", 37, 600);
            outlineBuilder( 6, 1, "sea", 36, 595);
            outlineBuilder( 6, 1, "sea", 37, 594);
            outlineBuilder( 7, 2, "sea", 38, 593);
            outlineBuilder( 1, 1, "seaCornerTL", 40, 592);
            outlineBuilder( 1, 1, "seaCornerBR", 40, 599);
            outlineBuilder( 6, 1, "sea", 40, 593);
            outlineBuilder( 7, 3, "sea", 41, 592);
            outlineBuilder( 1, 1, "seaCornerBR", 44, 598);
            outlineBuilder( 6, 2, "sea", 44, 592);
            outlineBuilder( 1, 1, "seaCornerBR", 46, 597);
            outlineBuilder( 1, 1, "seaCornerBR", 47, 596);
            outlineBuilder( 5, 1, "sea", 46, 592);
            outlineBuilder( 4, 1, "sea", 47, 592);
        }
        //Layer -17 (warm region): elev -2
        //mapS17
        if (Y > -177325 && Y < -166541 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s17";
            campout = true;
            outlineBuilder(34, 34, "savannah", -20, 558);
            outlineBuilder(2, 1, "savannahDirt", -15, 570);
            outlineBuilder(1, 1, "savannahDirt", -2, 579);
            outlineBuilder(2, 2, "savannahDirt", -11, 558);
            outlineBuilder(1, 1, "savannahDirt", -12, 559);
            outlineBuilder(1, 1, "savannahDirt", 6, 571);
        }
        //Layer -16 (warm region): elev -2
        //mapS16
        if (Y > -167118 && Y < -156349 && X < 7687 && X > - 3901) //X0
        {
            elevation = -2;
            region = "s16";
            campout = true;
            outlineBuilder(34, 34, "savannah", -20, 524);
            outlineBuilder(5, 5, "savannahDirt", -20, 533);
            outlineBuilder(8, 1, "stonePath", 0, 524);
            outlineBuilder(1, 5, "stonePath", -4, 532);
            outlineBuilder(8, 5, "savannahDirt", -9, 531);
        }
        //Layer -15 (temperate region): elev -1
        //mapS15W2
        if (Y > -156924 && Y < -146147 && X < 28129 && X > 16474) //X-2
        {
            elevation = -1;
            region = "s15w2";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -88, 490);
            outlineBuilder( 1, 34, "savannah", -88, 523);
            outlineBuilder( 1, 5, "savannah", -88, 522);
            outlineBuilder( 1, 4, "savannah", -87, 521);
            outlineBuilder( 1, 24, "savannah", -79, 522);
            outlineBuilder( 1, 2, "savannah", -77, 521);
            outlineBuilder( 1, 3, "savannah", -68, 521);
            outlineBuilder( 1, 5, "savannah", -61, 521);

            outlineBuilder( 2, 1, "muckgrass", -79, 490);
            outlineBuilder( 1, 4, "muckgrass", -78, 490);
            outlineBuilder( 4, 1, "muckgrass", -74, 490);
            outlineBuilder( 3, 1, "muckgrass", -80, 492);
            outlineBuilder( 3, 3, "muckgrass", -83, 494);
            outlineBuilder( 1, 1, "muckgrass", -84, 496);
            outlineBuilder( 5, 2, "muckgrass", -86, 496);
            outlineBuilder( 5, 1, "muckgrass", -87, 500);
            outlineBuilder( 7, 1, "muckgrass", -86, 504);
            outlineBuilder( 3, 1, "muckgrass", -85, 509);
            outlineBuilder( 1, 6, "muckgrass", -84, 512);
            outlineBuilder( 1, 4, "muckgrass", -82, 513);
            outlineBuilder(1, 1, "muckgrass", -79, 511);
            outlineBuilder(2, 2, "muckgrass", -79, 509);
            outlineBuilder(4, 1, "muckgrass", -77, 507);
            outlineBuilder( 3, 2, "muckgrass", -73, 493);
            outlineBuilder( 1, 3, "muckgrass", -71, 495);
            outlineBuilder( 5, 1, "muckgrass", -68, 495);
            outlineBuilder( 4, 1, "muckgrass", -67, 496);
            outlineBuilder( 3, 3, "muckgrass", -67, 493);
            outlineBuilder( 5, 2, "muckgrass", -70, 499);
            outlineBuilder( 4, 1, "muckgrass", -71, 500);
            outlineBuilder( 5, 2, "muckgrass", -73, 502);
            outlineBuilder( 11, 1, "muckgrass", -74, 503);
            outlineBuilder( 1, 1, "muckgrass", -75, 505);
            outlineBuilder( 2, 1, "muckgrass", -75, 509);
            outlineBuilder( 1, 1, "muckgrass", -76, 510);
            outlineBuilder( 3, 1, "muckgrass", -73, 514);
            outlineBuilder( 1, 2, "muckgrass", -72, 516);
            outlineBuilder( 2, 1, "muckgrass", -70, 515);
            outlineBuilder( 1, 2, "muckgrass", -69, 515);
            outlineBuilder( 2, 1, "muckgrass", -67, 514);
            outlineBuilder( 1, 1, "muckgrass", -66, 514);
            outlineBuilder( 2, 1, "muckgrass", -65, 513);
            outlineBuilder( 1, 1, "muckgrass", -64, 513);
            outlineBuilder( 2, 3, "muckgrass", -63, 513);
            outlineBuilder( 1, 1, "muckgrass", -60, 513);
            outlineBuilder( 3, 1, "muckgrass", -59, 510);
            outlineBuilder( 4, 1, "muckgrass", -58, 509);
            outlineBuilder( 2, 1, "muckgrass", -57, 508);
            outlineBuilder( 3, 1, "muckgrass", -73, 508);
            outlineBuilder( 2, 2, "muckgrass", -72, 509);
            outlineBuilder( 3, 1, "muckgrass", -70, 509);
            outlineBuilder( 4, 1, "muckgrass", -69, 507);
            outlineBuilder( 1, 2, "muckgrass", -68, 507);
            outlineBuilder( 3, 1, "muckgrass", -66, 505);
            outlineBuilder( 3, 1, "muckgrass", -65, 504);
            outlineBuilder( 1, 1, "muckgrass", -64, 504);
            outlineBuilder( 2, 2, "muckgrass", -63, 502);
            outlineBuilder( 3, 1, "muckgrass", -61, 502);
            outlineBuilder( 1, 1, "muckgrass", -60, 504);
            outlineBuilder( 2, 1, "muckgrass", -59, 505);
            outlineBuilder( 4, 1, "muckgrass", -58, 505);

            outlineBuilder( 3, 1, "muck", -86, 501);
            outlineBuilder( 8, 1, "muck", -85, 501);
            outlineBuilder( 15, 4, "muck", -84, 497);
            outlineBuilder( 17, 1, "muck", -80, 495);
            outlineBuilder( 17, 1, "muck", -79, 492);
            outlineBuilder( 18, 1, "muck", -78, 491);
            outlineBuilder( 16, 1, "muck", -77, 491);
            outlineBuilder( 3, 2, "muck", -70, 496);
            outlineBuilder( 4, 1, "muck", -71, 496);
            outlineBuilder( 6, 2, "muck", -73, 496);
            outlineBuilder( 9, 1, "muck", -74, 494);
            outlineBuilder( 19, 1, "muck", -76, 491);
            outlineBuilder( 14, 1, "muck", -75, 491);
            outlineBuilder( 3, 1, "muck", -75, 506);
            outlineBuilder( 3, 1, "muck", -73, 511);
            outlineBuilder( 5, 2, "muck", -72, 511);
            outlineBuilder( 3, 1, "muck", -70, 512);
            outlineBuilder( 4, 1, "muck", -69, 511);
            outlineBuilder( 7, 1, "muck", -68, 508);
            outlineBuilder( 6, 1, "muck", -67, 508);
            outlineBuilder( 6, 1, "muck", -66, 508);
            outlineBuilder( 6, 1, "muck", -65, 507);
            outlineBuilder( 8, 1, "muck", -64, 505);
            outlineBuilder( 9, 2, "muck", -63, 504);
            outlineBuilder( 8, 2, "muck", -61, 505);
            outlineBuilder( 3, 1, "muck", -59, 507);
        }
        //mapS15W1
        if (Y > -156924 && Y < -146147 && X < 17891 && X > 6299) //X-1
        {
            elevation = -1;
            region = "s15w1";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -54, 490);

            outlineBuilder( 1, 5, "savannah", -53, 523);
            outlineBuilder( 1, 3, "savannah", -50, 522);
            outlineBuilder( 1, 4, "savannah", -45, 523);
            outlineBuilder( 1, 3, "savannah", -44, 522);
            outlineBuilder( 1, 5, "savannah", -39, 523);
            outlineBuilder( 1, 2, "savannah", -38, 522);
            outlineBuilder( 1, 1, "savannah", -38, 521);
            outlineBuilder( 1, 4, "savannah", -24, 523);
            outlineBuilder( 2, 3, "savannah", -31, 522);
            outlineBuilder( 1, 2, "savannah", -28, 523);
        }
        //mapS15
        if (Y > -156924 && Y < -146147 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s15";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 490);
            outlineBuilder(2, 9, "savannah", -20, 522);
            outlineBuilder(1, 4, "savannah", -11, 523);
            outlineBuilder(1, 6, "savannah", -4, 523);
            outlineBuilder(1, 2, "savannah", -8, 522);
            outlineBuilder(1, 3, "savannah", 5, 523);
            outlineBuilder(1, 1, "savannah", 8, 523);
            outlineBuilder( 34, 1, "stonePath", 0, 490);
        }
        //mapS15W34
        if (Y > -156924 && Y < -146147 && X < 354544 && X > 342860) //X-34
        {
            elevation = 0;
            region = "s15w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1176, 490);
            outlineBuilder(34, 1, "vardanianStone", -1159, 490);
        }
        //Layer -14 (temperate region): elev -1
        //mapS14
        if (Y > -146711 && Y < -135937 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s14";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 456);
            outlineBuilder( 6, 1, "stonePath", -6, 456);
            outlineBuilder( 1, 6, "stonePath", -6, 462);
            outlineBuilder( 28, 1, "stonePath", 0, 462);
        }
        //mapS14W34
        if (Y > -146711 && Y < -135937 && X < 354544 && X > 342860) //X-34
        {
            elevation = 0;
            region = "s14w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1176, 456);
            outlineBuilder(34, 1, "vardanianStone", -1159, 456);
        }
        //Layer -13 (temperate region): elev -1
        //mapS13
        if (Y > -136522 && Y < -125745 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s13";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 422);
            outlineBuilder( 34, 1, "stonePath", -6, 422);
        }
        //mapS13W34
        if (Y > -136522 && Y < -125745 && X < 354544 && X > 342860) //X-34
        {
            elevation = 0;
            region = "s13w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1176, 422);

            outlineBuilder(9, 8, "vardanianForest", -1162, 441);
            outlineBuilder(4, 1, "vardanianForest", -1154, 443);
            outlineBuilder(3, 5, "vardanianForest", -1161, 450);
            outlineBuilder(1, 1, "vardanianForest", -1155, 450);
            outlineBuilder(3, 3, "vardanianForest", -1158, 438);
            outlineBuilder(4, 1, "vardanianForest", -1158, 434);
            outlineBuilder(4, 1, "vardanianForest", -1160, 436);
            outlineBuilder(3, 5, "vardanianForest", -1157, 436);
            outlineBuilder(1, 1, "vardanianForest", -1157, 435);
            outlineBuilder(3, 2, "vardanianForest", -1162, 437);
            outlineBuilder(1, 4, "vardanianForest", -1164, 439);
            outlineBuilder(1, 1, "vardanianForest", -1155, 439);
            outlineBuilder(4, 2, "vardanianForest", -1153, 442);
            outlineBuilder(2, 1, "vardanianForest", -1150, 442);
            outlineBuilder(4, 1, "vardanianForest", -1151, 441);
            outlineBuilder(1, 4, "vardanianForest", -1160, 453);
            outlineBuilder(1, 3, "vardanianForest", -1160, 454);
            outlineBuilder(1, 1, "vardanianForest", -1158, 455);
            outlineBuilder(6, 2, "vardanianForest", -1164, 442);
            outlineBuilder(2, 1, "vardanianForest", -1165, 445);

            outlineBuilder(34, 1, "vardanianStone", -1159, 422);
            outlineBuilder(1, 10, "vardanianStone", -1169, 440);
            outlineBuilder(1, 8, "vardanianStone", -1176, 441);
        }
        //mapS13W35
        if (Y > -136522 && Y < -125745 && X < 364713 && X > 353021) //X-35
        {
            elevation = 0;
            region = "s13w35";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1210, 422);
            outlineBuilder(1, 34, "vardanianStone", -1210, 441);
            outlineBuilder(14, 1, "vardanianStone", -1196, 442);

        }
        //Layer -12 (temperate region): elev -1
        //mapS12
        if (Y > -126325 && Y < -115546 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s12";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 388);
            outlineBuilder( 34, 1, "stonePath", -6, 388);
        }
        //mapS12W34
        if (Y > -126325 && Y < -115546 && X < 354544 && X > 342860) //X-34
        {
            elevation = 0;
            region = "s12w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1176, 388);
            outlineBuilder(34, 1, "vardanianStone", -1159, 388);
        }
        //Layer -11 (temperate region): elev -1 | (cold region) past w-28: elev 0
        //mapS11
        if (Y > -116103 && Y < -105338 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s11";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 354);
            outlineBuilder( 34, 1, "stonePath", -6, 354);
        }
        //mapS11W33
        if (Y > -116103 && Y < -105338 && X < 344333 && X > 332640) //X-33
        {
            elevation = 0;
            region = "s11w33";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1142, 354);
            outlineBuilder(2, 1, "vardanianGrass", -1142, 361);
            outlineBuilder(3, 1, "vardanianGrass", -1142, 367);
            outlineBuilder(2, 1, "vardanianGrass", -1142, 373);
            outlineBuilder(2, 1, "vardanianGrass", -1142, 378);
            outlineBuilder(1, 2, "vardanianGrass", -1142, 377);
        }
        //mapS11W34 //MORROW (city)
        if (Y > -116103 && Y < -105338 && X < 354544 && X > 342860) //X-34 //todo add map
        {
            elevation = 0;
            region = "s11w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1176, 354);
            outlineBuilder( 29, 33, "stonePath", -1176, 325 + 34); //todo vardanianStone
        }
        //mapS11W35 //MORROW (city)
        if (Y > -116103 && Y < -105338 && X < 364713 && X > 353021) //X-35 //todo add map
        {
            elevation = 0;
            region = "s11w35";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1210, 354);
            outlineBuilder( 5, 1, "vardanianStone", -1196, 320 + 34);
            outlineBuilder( 29, 33, "vardanianStone", -1209, 325 + 34);
        }
        //mapS11W36
        if (Y > -116103 && Y < -105338 && X < 374956 && X > 363245) //X-36 //todo add map
        {
            elevation = 0;
            region = "s11w36";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1244, 354);
        }
        //Layer -10 (temperate region): elev -1  | (cold region) past w-28: elev 0
        //mapS10
        if (Y > -105953 && Y < -95142 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s10";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 320);
            outlineBuilder( 34, 1, "stonePath", -6, 320);
        }
        //mapS10W33
        if (Y > -105953 && Y < -95142 && X < 344333 && X > 332640) //X-33
        {
            elevation = 0;
            region = "s10w33";
            campout = true;
            outlineBuilder(34, 34, "vardanianWetland", -1142, 320);

            outlineBuilder(3, 1, "swamp", -1140, 320);
            outlineBuilder(1, 1, "swamp", -1141, 320);
            outlineBuilder(4, 1, "swamp", -1139, 320);
            outlineBuilder(2, 1, "swamp", -1138, 322);
            outlineBuilder(4, 1, "swamp", -1137, 322);
            outlineBuilder(1, 1, "swamp", -1138, 325);
            outlineBuilder(3, 1, "swamp", -1136, 323);
            outlineBuilder(1, 1, "swamp", -1134, 320);
            outlineBuilder(9, 1, "swamp", -1133, 320);
            outlineBuilder(5, 1, "swamp", -1132, 320);
            outlineBuilder(4, 1, "swamp", -1131, 320);
            outlineBuilder(13, 1, "swamp", -1135, 323);
            outlineBuilder(7, 1, "swamp", -1134, 324);
            outlineBuilder(1, 1, "swamp", -1136, 328);
            outlineBuilder(2, 1, "swamp", -1132, 327);
            outlineBuilder(4, 1, "swamp", -1131, 327);
            outlineBuilder(5, 1, "swamp", -1136, 332);
            outlineBuilder(3, 1, "swamp", -1137, 334);
            outlineBuilder(5, 1, "swamp", -1134, 334);
            outlineBuilder(3, 1, "swamp", -1133, 334);
            outlineBuilder(4, 1, "swamp", -1130, 328);
            outlineBuilder(5, 1, "swamp", -1129, 328);
            outlineBuilder(8, 1, "swamp", -1128, 325);
            outlineBuilder(6, 1, "swamp", -1127, 325);
            outlineBuilder(4, 2, "swamp", -1126, 326);
            outlineBuilder(7, 1, "swamp", -1124, 329);
            outlineBuilder(3, 2, "swamp", -1126, 333);
            outlineBuilder(3, 1, "swamp", -1133, 338);
            outlineBuilder(3, 2, "swamp", -1125, 320);
            outlineBuilder(2, 1, "swamp", -1123, 320);
            outlineBuilder(3, 1, "swamp", -1122, 320);
            outlineBuilder(5, 1, "swamp", -1121, 320);
            outlineBuilder(1, 1, "swamp", -1120, 321);
            outlineBuilder(1, 1, "swamp", -1120, 324);
            outlineBuilder(9, 2, "swamp", -1123, 331);
            outlineBuilder(2, 1, "swamp", -1124, 338);
            outlineBuilder(2, 1, "swamp", -1132, 339);
            outlineBuilder(7, 1, "swamp", -1131, 337);
            outlineBuilder(8, 3, "swamp", -1130, 336);
            outlineBuilder(3, 1, "swamp", -1127, 339);
            outlineBuilder(2, 2, "swamp", -1126, 339);
            outlineBuilder(7, 1, "swamp", -1121, 334);
            outlineBuilder(10, 1, "swamp", -1120, 335);
            outlineBuilder(6, 3, "swamp", -1115, 336);
            outlineBuilder(3, 2, "swamp", -1112, 337);
            outlineBuilder(5, 1, "swamp", -1119, 336);
            outlineBuilder(5, 3, "swamp", -1118, 335);
            outlineBuilder(3, 1, "swamp", -1119, 324);
            outlineBuilder(2, 1, "swamp", -1118, 324);
            outlineBuilder(4, 2, "swamp", -1117, 323);
            outlineBuilder(3, 3, "swamp", -1115, 325);
            outlineBuilder(2, 1, "swamp", -1113, 323);
            outlineBuilder(1, 2, "swamp", -1112, 323);
            outlineBuilder(2, 4, "swamp", -1122, 328);
            outlineBuilder(1, 3, "swamp", -1119, 330);
            outlineBuilder(1, 1, "swamp", -1118, 329);
            outlineBuilder(2, 1, "swamp", -1123, 324);
            outlineBuilder(1, 2, "swamp", -1122, 327);
            outlineBuilder(1, 2, "swamp", -1122, 343);
            outlineBuilder(5, 2, "swamp", -1124, 343);
            outlineBuilder(2, 1, "swamp", -1122, 346);
            outlineBuilder(2, 2, "swamp", -1121, 347);
            outlineBuilder(10, 1, "swamp", -1119, 341);
            outlineBuilder(4, 4, "swamp", -1118, 346);
            outlineBuilder(2, 2, "swamp", -1116, 342);
            outlineBuilder(2, 5, "swamp", -1116, 342);
            outlineBuilder(3, 2, "swamp", -1113, 348);
            outlineBuilder(2, 1, "swamp", -1112, 346);
            outlineBuilder(1, 4, "swamp", -1114, 344);
            outlineBuilder(1, 2, "swamp", -1115, 321);

            outlineBuilder(27, 1, "crag", -1109, 320);
            outlineBuilder(6, 1, "crag", -1109, 348);
            outlineBuilder(2, 1, "crag", -1110, 348);
            outlineBuilder(1, 1, "crag", -1110, 353);
            outlineBuilder(3, 1, "crag", -1110, 320);
            outlineBuilder(2, 2, "crag", -1112, 320);
            outlineBuilder(20, 1, "crag", -1110, 326);
            outlineBuilder(9, 1, "crag", -1111, 328);
            outlineBuilder(7, 2, "crag", -1113, 329);
            outlineBuilder(2, 2, "crag", -1115, 329);
            outlineBuilder(3, 3, "crag", -1118, 332);
            outlineBuilder(4, 2, "crag", -1115, 332);
            outlineBuilder(1, 1, "crag", -1112, 336);
            outlineBuilder(2, 1, "crag", -1112, 340);
            outlineBuilder(4, 1, "crag", -1111, 340);

            outlineBuilder(31, 1, "vardanianWoods", -1142, 323);
            outlineBuilder(3, 1, "vardanianWoods", -1141, 325);
            outlineBuilder(24, 1, "vardanianWoods", -1141, 330);
            outlineBuilder(4, 1, "vardanianWoods", -1140, 330);
            outlineBuilder(19, 1, "vardanianWoods", -1140, 335);
            outlineBuilder(18, 1, "vardanianWoods", -1139, 336);
            outlineBuilder(15, 1, "vardanianWoods", -1138, 339);
            outlineBuilder(12, 2, "vardanianWoods", -1137, 342);
            outlineBuilder(9, 1, "vardanianWoods", -1135, 345);
            outlineBuilder(7, 2, "vardanianWoods", -1134, 347);
            outlineBuilder(6, 3, "vardanianWoods", -1132, 348);
            outlineBuilder(3, 1, "vardanianWoods", -1129, 351);
            outlineBuilder(4, 3, "vardanianWoods", -1128, 350);
            outlineBuilder(3, 2, "vardanianWoods", -1125, 351);
            outlineBuilder(1, 2, "vardanianWoods", -1123, 353);
            outlineBuilder(1, 3, "vardanianWoods", -1118, 353);
            outlineBuilder(1, 1, "vardanianWoods", -1114, 353);
            outlineBuilder(2, 2, "vardanianWoods", -1113, 352);
        }
        //mapS10W34
        if (Y > -105953 && Y < -95142 && X < 354544 && X > 342860) //X-34
        {
            elevation = 0;
            region = "s10w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1176, 320);
        }
        //mapS10W35
        if (Y > -105953 && Y < -95142 && X < 364713 && X > 353021) //X-35
        {
            elevation = 0;
            region = "s10w35";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1210, 320);
            outlineBuilder( 34, 1, "vardanianStone", -1196, 320);
        }
        //mapS10W36
        if (Y > -105953 && Y < -95142 && X < 374956 && X > 363245) //X-36
        {
            elevation = 0;
            region = "s10w36";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1244, 320);
            outlineBuilder(1, 1, "swampBR", -1230, 332);
            outlineBuilder(1, 1, "swamp", -1229, 332);
            outlineBuilder(1, 3, "swamp", -1231, 333);
            outlineBuilder(1, 2, "swamp", -1231, 334);

            outlineBuilder(1, 2, "vardanianGrass", -1239, 332);
            outlineBuilder(2, 5, "vardanianGrass", -1240, 333);
            outlineBuilder(1, 4, "vardanianGrass", -1241, 335);
            outlineBuilder(1, 6, "vardanianGrass", -1243, 336);
            outlineBuilder(1, 1, "vardanianGrass", -1239, 331);
            outlineBuilder(1, 1, "vardanianGrass", -1237, 335);
            outlineBuilder(1, 1, "vardanianGrass", -1241, 334);
            outlineBuilder(1, 1, "vardanianGrass", -1242, 335);
            outlineBuilder(17, 12, "vardanianGrass", -1244, 337);
            outlineBuilder(15, 1, "vardanianGrass", -1232, 339);
            outlineBuilder(16, 5, "vardanianGrass", -1231, 338);
            outlineBuilder(1, 2, "vardanianGrass", -1229, 337);
            outlineBuilder(15, 7, "vardanianGrass", -1226, 339);
            outlineBuilder(1, 5, "vardanianGrass", -1224, 338);
            outlineBuilder(1, 2, "vardanianGrass", -1221, 337);
            outlineBuilder(14, 1, "vardanianGrass", -1219, 340);
            outlineBuilder(12, 1, "vardanianGrass", -1218, 343);
            outlineBuilder(8, 2, "vardanianGrass", -1217, 346);
            outlineBuilder(3, 1, "vardanianGrass", -1215, 351);
            outlineBuilder(1, 1, "vardanianGrass", -1214, 353);
        }
        //Layer -9 (temperate region): elev -1  | (cold region) past w-28: elev 0
        //mapS9
        if (Y > -95730 && Y < -84938 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s9";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 286);
            outlineBuilder( 6, 1, "stonePath", -20, 286);
            outlineBuilder( 1, 14, "stonePath", -20, 292);
            outlineBuilder( 28, 1, "stonePath", -6, 292);
        }
        //mapS9W32
        if (Y > -95730 && Y < -84938 && X < 334130 && X > 322464) //X-32
        {
            elevation = 0;
            region = "s9w32";
            campout = true;
            outlineBuilder(34, 34, "crag", -1108, 286);
            outlineBuilder(4, 4, "mistywoods", -1078, 286);
            outlineBuilder(2, 2, "mistywoods", -1076, 290);
            outlineBuilder(2, 5, "mistywoods", -1096, 286);
            outlineBuilder(1, 3, "mistywoods", -1105, 286);
            outlineBuilder(3, 5, "mistywoods", -1091, 286);
            outlineBuilder(1, 4, "mistywoods", -1086, 286);
            outlineBuilder(1, 2, "mistywoods", -1080, 287);
            outlineBuilder(1, 1, "mistywoods", -1079, 288);
        }
        //mapS9W33
        if (Y > -95730 && Y < -84938 && X < 344333 && X > 332640) //X-33
        {
            elevation = 0;
            region = "s9w33";
            campout = true;
            outlineBuilder(34, 34, "vardanianWetland", -1142, 286);

            outlineBuilder( 1, 7, "vardanianStone", -1120, 286);
            outlineBuilder( 1, 1, "vardanianStone", -1120, 287);
            outlineBuilder( 1, 2, "vardanianStone", -1122, 287);
            outlineBuilder( 1, 1, "vardanianStone", -1122, 288);
            outlineBuilder( 15, 1, "vardanianStone", -1123, 288);
            outlineBuilder( 4, 1, "vardanianStone", -1124, 302);
            outlineBuilder( 3, 1, "vardanianStone", -1125, 305);
            outlineBuilder( 1, 3, "vardanianStone", -1128, 307);
            outlineBuilder( 1, 6, "vardanianStone", -1133, 306);
            outlineBuilder( 1, 8, "vardanianStone", -1140, 305);
            outlineBuilder( 1, 3, "vardanianStone", -1142, 306);

            outlineBuilder( 1, 1, "swamp", -1140, 286);
            outlineBuilder( 1, 2, "swamp", -1140, 287);
            outlineBuilder( 1, 2, "swamp", -1137, 286);
            outlineBuilder( 5, 2, "swamp", -1142, 292);
            outlineBuilder( 2, 1, "swamp", -1142, 292);
            outlineBuilder( 3, 1, "swamp", -1140, 293);
            outlineBuilder( 3, 1, "swamp", -1139, 295);
            outlineBuilder( 1, 1, "swamp", -1139, 293);
            outlineBuilder( 1, 2, "swamp", -1139, 289);
            outlineBuilder( 1, 5, "swamp", -1140, 290);
            outlineBuilder( 1, 4, "swamp", -1138, 291);
            outlineBuilder( 1, 4, "swamp", -1139, 292);
            outlineBuilder( 1, 1, "swamp", -1136, 289);
            outlineBuilder( 1, 4, "swamp", -1136, 288);
            outlineBuilder( 1, 4, "swamp", -1134, 287);
            outlineBuilder( 1, 6, "swamp", -1137, 293);
            outlineBuilder( 1, 3, "swamp", -1133, 292);
            outlineBuilder( 1, 3, "swamp", -1132, 291);
            outlineBuilder( 1, 2, "swamp", -1132, 290);
            outlineBuilder( 7, 5, "swamp", -1134, 294);
            outlineBuilder( 4, 1, "swamp", -1135, 295);
            outlineBuilder( 3, 1, "swamp", -1136, 296);
            outlineBuilder( 5, 1, "swamp", -1138, 297);
            outlineBuilder( 3, 1, "swamp", -1137, 297);
            outlineBuilder( 1, 1, "swamp", -1139, 300);
            outlineBuilder( 2, 1, "swamp", -1129, 297);
            outlineBuilder( 2, 1, "swamp", -1128, 298);
            outlineBuilder( 2, 1, "swamp", -1127, 299);
            outlineBuilder( 3, 1, "swamp", -1126, 297);
            outlineBuilder( 1, 1, "swamp", -1125, 298);
            outlineBuilder( 1, 1, "swamp", -1130, 301);
            outlineBuilder( 1, 2, "swamp", -1134, 301);
            outlineBuilder( 1, 7, "swamp", -1135, 302);
            outlineBuilder( 1, 3, "swamp", -1131, 303);
            outlineBuilder( 1, 1, "swamp", -1130, 304);
            outlineBuilder( 2, 1, "swamp", -1128, 289);
            outlineBuilder( 6, 1, "swamp", -1127, 288);
            outlineBuilder( 4, 1, "swamp", -1126, 289);
            outlineBuilder( 1, 1, "swamp", -1125, 292);
            outlineBuilder( 1, 9, "swamp", -1121, 292);
            outlineBuilder( 1, 6, "swamp", -1119, 291);
            outlineBuilder( 1, 5, "swamp", -1120, 290);
            outlineBuilder( 1, 2, "swamp", -1117, 289);
            outlineBuilder( 1, 2, "swamp", -1114, 290);
            outlineBuilder( 1, 1, "swamp", -1113, 289);
            outlineBuilder( 1, 3, "swamp", -1113, 293);
            outlineBuilder( 1, 1, "swamp", -1113, 294);
            outlineBuilder( 2, 3, "swamp", -1117, 293);
            outlineBuilder( 2, 1, "swamp", -1116, 295);
            outlineBuilder( 1, 2, "swamp", -1118, 296);
            outlineBuilder( 1, 3, "swamp", -1119, 297);
            outlineBuilder( 1, 2, "swamp", -1119, 298);
            outlineBuilder( 1, 2, "swamp", -1111, 296);
            outlineBuilder( 1, 1, "swamp", -1111, 297);
            outlineBuilder( 1, 4, "swamp", -1114, 298);
            outlineBuilder( 1, 2, "swamp", -1114, 299);
            outlineBuilder( 1, 1, "swamp", -1110, 290);
            outlineBuilder( 2, 1, "swamp", -1110, 299);
            outlineBuilder( 1, 1, "swamp", -1111, 300);
            outlineBuilder( 1, 3, "swamp", -1142, 318);
            outlineBuilder( 1, 3, "swamp", -1141, 319);
            outlineBuilder( 1, 1, "swamp", -1139, 315);
            outlineBuilder( 1, 2, "swamp", -1139, 314);
            outlineBuilder( 1, 5, "swamp", -1139, 313);
            outlineBuilder( 1, 3, "swamp", -1136, 314);
            outlineBuilder( 5, 1, "swamp", -1134, 315);
            outlineBuilder( 1, 1, "swamp", -1135, 317);
            outlineBuilder( 1, 1, "swamp", -1133, 318);
            outlineBuilder( 1, 3, "swamp", -1133, 319);
            outlineBuilder( 1, 1, "swamp", -1131, 318);
            outlineBuilder( 1, 2, "swamp", -1131, 317);
            outlineBuilder( 1, 4, "swamp", -1133, 315);
            outlineBuilder( 1, 3, "swamp", -1130, 316);
            outlineBuilder( 2, 1, "swamp", -1131, 313);
            outlineBuilder( 2, 1, "swamp", -1142, 312);
            outlineBuilder( 4, 1, "swamp", -1141, 310);
            outlineBuilder( 1, 2, "swamp", -1141, 314);
            outlineBuilder( 1, 1, "swamp", -1140, 310);
            outlineBuilder( 1, 3, "swamp", -1140, 309);
            outlineBuilder( 1, 4, "swamp", -1138, 308);
            outlineBuilder( 1, 1, "swamp", -1137, 307);
            outlineBuilder( 2, 3, "swamp", -1135, 309);
            outlineBuilder( 2, 2, "swamp", -1136, 311);
            outlineBuilder( 1, 2, "swamp", -1131, 309);
            outlineBuilder( 1, 4, "swamp", -1130, 310);
            outlineBuilder( 1, 1, "swamp", -1127, 311);
            outlineBuilder( 2, 2, "swamp", -1130, 312);
            outlineBuilder( 3, 1, "swamp", -1128, 312);
            outlineBuilder( 6, 1, "swamp", -1127, 312);
            outlineBuilder( 5, 1, "swamp", -1126, 313);
            outlineBuilder( 5, 1, "swamp", -1125, 312);
            outlineBuilder( 6, 1, "swamp", -1124, 311);
            outlineBuilder( 6, 1, "swamp", -1123, 308);
            outlineBuilder( 5, 1, "swamp", -1122, 310);
            outlineBuilder( 6, 1, "swamp", -1121, 310);
            outlineBuilder( 3, 1, "swamp", -1123, 317);
            outlineBuilder( 1, 1, "swamp", -1124, 319);
            outlineBuilder( 2, 2, "swamp", -1122, 318);
            outlineBuilder( 9, 1, "swamp", -1120, 310);
            outlineBuilder( 17, 1, "swamp", -1119, 301);
            outlineBuilder( 1, 1, "swamp", -1120, 308);
            outlineBuilder( 1, 2, "swamp", -1121, 306);
            outlineBuilder( 2, 1, "swamp", -1120, 302);
            outlineBuilder( 19, 1, "swamp", -1118, 299);
            outlineBuilder( 3, 1, "swamp", -1109, 309);
            outlineBuilder( 6, 1, "swamp", -1110, 307);
            outlineBuilder( 6, 1, "swamp", -1111, 308);
            outlineBuilder( 1, 1, "swamp", -1111, 317);
            outlineBuilder( 6, 1, "swamp", -1112, 309);
            outlineBuilder( 10, 1, "swamp", -1113, 309);
            outlineBuilder( 3, 1, "swamp", -1112, 316);
            outlineBuilder( 3, 2, "swamp", -1117, 300);
            outlineBuilder( 1, 2, "swamp", -1119, 318);
            outlineBuilder( 13, 1, "swamp", -1117, 305);
            outlineBuilder( 12, 1, "swamp", -1116, 307);
            outlineBuilder( 11, 1, "swamp", -1115, 306);
            outlineBuilder( 13, 1, "swamp", -1114, 305);
            outlineBuilder( 1, 2, "swamp", -1114, 302);
            outlineBuilder( 1, 5, "swamp", -1114, 303);
            outlineBuilder( 1, 4, "swamp", -1113, 304);
            outlineBuilder( 1, 1, "swamp", -1112, 305);
            outlineBuilder( 3, 1, "swamp", -1113, 305);

            outlineBuilder( 1, 1, "swampTL", -1139, 310);
            outlineBuilder( 1, 1, "swampTR", -1138, 302);
            outlineBuilder( 1, 1, "swampTL", -1135, 289);
            outlineBuilder( 1, 1, "swampBL", -1116, 288);
            outlineBuilder( 1, 1, "swampBR", -1117, 288);
            outlineBuilder( 1, 1, "swampBR", -1125, 319);
            outlineBuilder( 1, 1, "swampTR", -1135, 315);
            outlineBuilder( 1, 1, "swampTR", -1111, 299);

            outlineBuilder( 1, 1, "crag", -1109, 286);
            outlineBuilder( 1, 1, "crag", -1110, 288);
            outlineBuilder( 8, 1, "crag", -1109, 288);
            outlineBuilder( 3, 1, "crag", -1110, 291);
            outlineBuilder( 1, 1, "crag", -1111, 292);
            outlineBuilder( 2, 1, "crag", -1109, 300);
            outlineBuilder( 1, 1, "crag", -1110, 301);
            outlineBuilder( 2, 1, "crag", -1109, 307);
            outlineBuilder( 5, 1, "crag", -1109, 312);
            outlineBuilder( 1, 1, "crag", -1110, 313);
            outlineBuilder( 2, 1, "crag", -1110, 315);
            outlineBuilder( 1, 2, "crag", -1110, 318);
            outlineBuilder( 1, 3, "crag", -1111, 319);

        }
        //mapS9W34
        if (Y > -95730 && Y < -84938 && X < 354544 && X > 342860) //X-34 //todo add map
        {
            elevation = 0;
            region = "s9w34";
            campout = true;
            outlineBuilder(34, 34, "outline", -1176, 286); //todo vardanianWetland
            outlineBuilder( 1, 34, "vardanianStone", -1176, 306);
        }
        //mapS9W35
        if (Y > -95730 && Y < -84938 && X < 364713 && X > 353021) //X-35
        {
            elevation = 0;
            region = "s9w35";
            campout = true;

            outlineBuilder(34, 34, "vardanianGrass", -1210, 286);
            outlineBuilder(1, 34, "vardanianStone", -1210, 306);
            outlineBuilder(14, 1, "vardanianStone", -1196, 306);

            outlineBuilder(10, 10, "vardanianForest", -1208, 288);
            outlineBuilder(3, 8, "vardanianForest", -1209, 298);
            outlineBuilder(2, 5, "vardanianForest", -1208, 301);
            outlineBuilder(6, 6, "vardanianForest", -1198, 292);
            outlineBuilder(3, 7, "vardanianForest", -1199, 298);
            outlineBuilder(1, 4, "vardanianForest", -1208, 303);
            outlineBuilder(1, 2, "vardanianForest", -1208, 304);
            outlineBuilder(2, 1, "vardanianForest", -1200, 298);
            outlineBuilder(1, 1, "vardanianForest", -1198, 290);
            outlineBuilder(1, 4, "vardanianForest", -1198, 291);
            outlineBuilder(3, 1, "vardanianForest", -1192, 294);
            outlineBuilder(4, 2, "vardanianForest", -1192, 299);
            outlineBuilder(1, 2, "vardanianForest", -1194, 301);

            outlineBuilder(2, 8, "vardanianForest", -1188, 316);
            outlineBuilder(1, 1, "vardanianForest", -1189, 317);
            outlineBuilder(3, 6, "vardanianForest", -1187, 313);
            outlineBuilder(1, 1, "vardanianForest", -1180, 317);
            outlineBuilder(3, 1, "vardanianForest", -1181, 312);
            outlineBuilder(3, 4, "vardanianForest", -1189, 312);
            outlineBuilder(2, 1, "vardanianForest", -1180, 312);

            outlineBuilder(6, 12, "vardanianWetland", -1188, 286);
            outlineBuilder(2, 10, "vardanianWetland", -1186, 292);
            outlineBuilder(3, 1, "vardanianWetland", -1185, 294);
            outlineBuilder(2, 3, "vardanianWetland", -1184, 294);
            outlineBuilder(5, 5, "vardanianWetland", -1181, 294);
            outlineBuilder(3, 3, "vardanianWetland", -1179, 299);
            outlineBuilder(1, 2, "vardanianWetland", -1178, 302);
            outlineBuilder(3, 1, "vardanianWetland", -1177, 303);
            outlineBuilder(2, 1, "vardanianWetland", -1178, 304);
            outlineBuilder(2, 1, "vardanianWetland", -1177, 307);
            outlineBuilder(1, 2, "vardanianWetland", -1195, 286);
            outlineBuilder(1, 4, "vardanianWetland", -1194, 287);
            outlineBuilder(1, 4, "vardanianWetland", -1192, 288);
            outlineBuilder(1, 2, "vardanianWetland", -1190, 289);

            outlineBuilder(5, 3, "swamp", -1183, 286);
            outlineBuilder(1, 2, "swamp", -1184, 286);
            outlineBuilder(2, 3, "swamp", -1179, 287);
            outlineBuilder(1, 2, "swamp", -1178, 289);
            outlineBuilder(1, 2, "swamp", -1179, 291);
            outlineBuilder(1, 1, "swamp", -1178, 292);
            outlineBuilder(2, 1, "swamp", -1187, 287);
            outlineBuilder(2, 1, "swamp", -1184, 290);
            outlineBuilder(2, 2, "swamp", -1186, 288);
            outlineBuilder(3, 2, "swamp", -1178, 298);
            outlineBuilder(2, 2, "swamp", -1183, 293);
            outlineBuilder(2, 1, "swamp", -1181, 294);
            outlineBuilder(2, 1, "swamp", -1178, 295);
            outlineBuilder(2, 1, "swamp", -1177, 296);
            outlineBuilder(1, 5, "swamp", -1193, 286);
            outlineBuilder(1, 2, "swamp", -1190, 287);

            outlineBuilder(4, 12, "vardanianWoods", -1210, 286);
            outlineBuilder(2, 1, "vardanianWoods", -1198, 286);
            outlineBuilder(1, 9, "vardanianWoods", -1210, 290);
            outlineBuilder(2, 7, "vardanianWoods", -1210, 291);
            outlineBuilder(1, 5, "vardanianWoods", -1210, 293);
            outlineBuilder(1, 4, "vardanianWoods", -1210, 294);
            outlineBuilder(11, 1, "vardanianWoods", -1210, 295);
            outlineBuilder(4, 1, "vardanianWoods", -1209, 295);
            outlineBuilder(5, 1, "vardanianWoods", -1209, 301);
            outlineBuilder(2, 1, "vardanianWoods", -1208, 295);
            outlineBuilder(13, 2, "vardanianWoods", -1210, 307);
            outlineBuilder(3, 1, "vardanianWoods", -1208, 308);
            outlineBuilder(2, 4, "vardanianWoods", -1208, 311);
            outlineBuilder(1, 5, "vardanianWoods", -1208, 313);
            outlineBuilder(1, 8, "vardanianWoods", -1208, 314);
            outlineBuilder(1, 1, "vardanianWoods", -1207, 310);
            outlineBuilder(2, 10, "vardanianWoods", -1208, 315);
            outlineBuilder(1, 11, "vardanianWoods", -1208, 317);
            outlineBuilder(1, 9, "vardanianWoods", -1195, 319);
            outlineBuilder(2, 12, "vardanianWoods", -1208, 318);
            outlineBuilder(1, 5, "vardanianWoods", -1191, 318);
            outlineBuilder(3, 5, "vardanianWoods", -1186, 317);
            outlineBuilder(2, 5, "vardanianWoods", -1181, 318);
        }
        //mapS9W36
        if (Y > -95730 && Y < -84938 && X < 374956 && X > 363245) //X-36
        {
            elevation = 0;
            region = "s9w36";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1244, 286);
            outlineBuilder( 1, 13, "vardanianStone", -1223, 306);
            outlineBuilder( 1, 9, "vardanianStone", -1231, 305);
            outlineBuilder( 1, 5, "vardanianStone", -1235, 304);
            outlineBuilder( 1, 10, "vardanianStone", -1244, 303);
        }
        //Layer -8 (temperate region): elev -1  | (cold region) past w-28: elev 0
        //mapS8
        if (Y > -85605 && Y < -74729 && X < 7687 && X > - 3901) //X0
        {
            elevation = -1;
            region = "s8";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 252);
            outlineBuilder( 34, 1, "stonePath", -20, 252);
        }
        //mapS8W30
        if (Y > -85605 && Y < -74729 && X < 313753 && X > 302099) //X-30
        {
            elevation = 0;
            region = "s8w30";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -1040, 252);

            outlineBuilder( 15, 1, "brickRoad", -1040, 252);
        }
        //mapS8W31
        if (Y > -85605 && Y < -74729 && X < 323936 && X > 312277) //X-31
        {
            elevation = 0;
            region = "s8w31";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -1074, 252);

            outlineBuilder( 1, 34, "brickRoad", -1074, 266);
            outlineBuilder( 4, 1, "brickRoad", -1064, 262);
            outlineBuilder(1, 2, "brickRoad", -1063, 262);
            outlineBuilder(4, 1, "brickRoad", -1061, 259);
            outlineBuilder(3, 2, "farmland", -1060, 258);
            outlineBuilder(2, 2, "farmland", -1069, 267);
        }
        //mapS8W32 //RAUKE (town)
        if (Y > -85605 && Y < -74729 && X < 334130 && X > 322464) //X-32 //todo add map
        {
            elevation = 0;
            region = "s8w32";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -1108, 252);

            outlineBuilder(9, 10, "thenganBrick", -1090, 261);
            outlineBuilder(4, 6, "thenganBrick", -1092, 266);
            outlineBuilder(1, 12, "brickRoad", -1091, 260);

            outlineBuilder(1, 12, "brickRoad", -1091, 263);

            outlineBuilder(9, 1, "brickRoad", -1086, 261);

            outlineBuilder(5, 1, "brickRoad", -1091, 261);
            outlineBuilder(5, 1, "brickRoad", -1093, 266);
            outlineBuilder(1, 13, "brickRoad", -1092, 270);
            outlineBuilder(9, 1, "brickRoad", -1080, 261);

            outlineBuilder( 1, 34, "brickRoad", -1108, 266);

            outlineBuilder(2, 2, "farmland", -1103, 264);
        }
        //mapS8W33
        if (Y > -85605 && Y < -74729 && X < 344333 && X > 332640) //X-33
        {
            elevation = 0;
            region = "s8w33";
            campout = true;
            outlineBuilder(34, 34, "vardanianWetland", -1142, 252);

            outlineBuilder(5, 2, "swamp", -1112, 280);
            outlineBuilder(1, 1, "swamp", -1111, 279);
            outlineBuilder(2, 1, "swamp", -1110, 281);

            outlineBuilder(7, 1, "swamp", -1110, 273);
            outlineBuilder(5, 2, "swamp", -1112, 269);

            outlineBuilder(1, 1, "swamp", -1111, 268);
            outlineBuilder(3, 4, "swamp", -1114, 261);
            outlineBuilder(4, 2, "swamp", -1114, 256);
            outlineBuilder(3, 5, "swamp", -1126, 256);
            outlineBuilder(9, 2, "swamp", -1135, 252);
            outlineBuilder(4, 3, "swamp", -1140, 252);
            outlineBuilder(3, 1, "swamp", -1140, 256);
            outlineBuilder(2, 3, "swamp", -1132, 252);
            outlineBuilder(1, 2, "swamp", -1137, 252);
            outlineBuilder(5, 1, "swamp", -1137, 257);
            outlineBuilder(5, 5, "swamp", -1140, 262);
            outlineBuilder(2, 2, "swamp", -1142, 263);
            outlineBuilder(4, 8, "swamp", -1135, 264);
            outlineBuilder(1, 2, "swamp", -1142, 253);
            outlineBuilder(1, 1, "swamp", -1141, 252);
            outlineBuilder(1, 1, "swamp", -1142, 257);
            outlineBuilder(2, 2, "swamp", -1141, 260);
            outlineBuilder(3, 5, "swamp", -1133, 256);
            outlineBuilder(2, 3, "swamp", -1133, 261);
            outlineBuilder(4, 2, "swamp", -1125, 261);
            outlineBuilder(5, 3, "swamp", -1120, 260);
            outlineBuilder(1, 7, "swamp", -1124, 252);
            outlineBuilder(2, 4, "swamp", -1118, 257);
            outlineBuilder(2, 1, "swamp", -1116, 261);
            outlineBuilder(1, 3, "swamp", -1112, 264);
            outlineBuilder(3, 1, "swamp", -1112, 255);
            outlineBuilder(3, 2, "swamp", -1112, 252);
            outlineBuilder(2, 3, "swamp", -1114, 252);
            outlineBuilder(9, 3, "swamp", -1120, 268);
            outlineBuilder(5, 4, "swamp", -1119, 279);
            outlineBuilder(3, 9, "swamp", -1134, 280);
            outlineBuilder(2, 4, "swamp", -1138, 279);
            outlineBuilder(4, 2, "swamp", -1142, 280);
            outlineBuilder(1, 8, "swamp", -1140, 285);
            outlineBuilder(3, 3, "swamp", -1139, 282);
            outlineBuilder(2, 5, "swamp", -1128, 284);
            outlineBuilder(2, 1, "swamp", -1120, 282);
            outlineBuilder(1, 5, "swamp", -1121, 284);
            outlineBuilder(5, 1, "swamp", -1122, 281);
            outlineBuilder(4, 6, "swamp", -1142, 271);
            outlineBuilder(4, 3, "swamp", -1141, 275);
            outlineBuilder(2, 2, "swamp", -1138, 277);
            outlineBuilder(4, 4, "swamp", -1132, 272);
            outlineBuilder(1, 5, "swamp", -1132, 279);
            outlineBuilder(4, 8, "swamp", -1128, 274);
            outlineBuilder(1, 3, "swamp", -1124, 278);
            outlineBuilder(4, 3, "swamp", -1126, 266);
            outlineBuilder(2, 2, "swamp", -1138, 268);
            outlineBuilder(1, 1, "swamp", -1136, 269);
            outlineBuilder(3, 2, "swamp", -1136, 270);
            outlineBuilder(1, 2, "swamp", -1136, 284);
            outlineBuilder(1, 1, "swampTR", -1127, 279);
            outlineBuilder(1, 1, "swampBL", -1129, 276);
            outlineBuilder(1, 1, "swampBL", -1136, 261);
            outlineBuilder(1, 1, "swamp", -1138, 261);
            outlineBuilder(1, 1, "swampBR", -1138, 260);
            outlineBuilder(1, 1, "swampBR", -1139, 261);
            outlineBuilder(1, 1, "swampTR", -1141, 254);
            outlineBuilder(1, 1, "swampTL", -1139, 256);
            outlineBuilder(1, 1, "swampBR", -1142, 252);
            outlineBuilder(1, 2, "swamp", -1124, 282);
            outlineBuilder(1, 1, "swampTR", -1123, 283);
            outlineBuilder(1, 1, "swampTR", -1129, 285);
            outlineBuilder(1, 1, "swampBR", -1129, 284);
            outlineBuilder(1, 1, "swampBL", -1134, 284);
            outlineBuilder(1, 1, "swamp", -1131, 283);
            outlineBuilder(1, 1, "swampTL", -1130, 283);
            outlineBuilder(1, 1, "swampTR", -1132, 283);

            outlineBuilder(6, 1, "mistywoods", -1109, 268);
            outlineBuilder(2, 1, "mistywoods", -1110, 271);

            outlineBuilder(3, 1, "mistywoods", -1109, 283);
            outlineBuilder(2, 1, "mistywoods", -1109, 263);
            outlineBuilder(1, 1, "mistywoods", -1109, 258);
            outlineBuilder(2, 1, "mistywoods", -1109, 252);

            outlineBuilder( 1, 6, "vardanianStone", -1114, 266);
            outlineBuilder( 20, 1, "vardanianStone", -1114, 266);
        }
        //mapS8W34 //VOZA (village)
        if (Y > -85605 && Y < -74729 && X < 354544 && X > 342860) //X-34
        {
            elevation = 0;
            region = "s8w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianWetland", -1176, 252);

            outlineBuilder(2, 2, "swamp", -1176, 280);
            outlineBuilder(2, 1, "swamp", -1163, 259);
            outlineBuilder(1, 1, "swamp", -1155, 267);
            outlineBuilder(8, 2, "swamp", -1175, 252);
            outlineBuilder(5, 6, "swamp", -1170, 263);
            outlineBuilder(3, 2, "swamp", -1165, 258);
            outlineBuilder(2, 2, "swamp", -1156, 270);
            outlineBuilder(2, 1, "swamp", -1155, 272);
            outlineBuilder(4, 7, "swamp", -1155, 274);
            outlineBuilder(7, 8, "swamp", -1150, 267);
            outlineBuilder(5, 8, "swamp", -1171, 276);
            outlineBuilder(3, 4, "swamp", -1148, 279);
            outlineBuilder(5, 5, "swamp", -1172, 275);
            outlineBuilder(3, 3, "swamp", -1162, 281);
            outlineBuilder(1, 3, "swamp", -1165, 281);
            outlineBuilder(4, 2, "swamp", -1174, 278);
            outlineBuilder(4, 2, "swamp", -1173, 282);
            outlineBuilder(2, 5, "swamp", -1174, 283);
            outlineBuilder(9, 3, "swamp", -1158, 260);
            outlineBuilder(2, 2, "swamp", -1166, 262);
            outlineBuilder(3, 6, "swamp", -1159, 256);
            outlineBuilder(3, 2, "swamp", -1169, 254);
            outlineBuilder(2, 2, "swamp", -1167, 256);
            outlineBuilder(2, 2, "swamp", -1174, 260);
            outlineBuilder(1, 3, "swamp", -1173, 256);
            outlineBuilder(5, 4, "swamp", -1172, 260);
            outlineBuilder(2, 8, "swamp", -1174, 266);
            outlineBuilder(2, 3, "swamp", -1170, 258);
            outlineBuilder(1, 1, "swamp", -1167, 258);
            outlineBuilder(6, 2, "swamp", -1162, 258);
            outlineBuilder(3, 2, "swamp", -1160, 262);
            outlineBuilder(1, 1, "swampBL", -1160, 261);
            outlineBuilder(1, 1, "swampTR", -1159, 265);
            outlineBuilder(1, 1, "swampBL", -1165, 257);
            outlineBuilder(3, 6, "swamp", -1163, 254);
            outlineBuilder(1, 1, "swampTR", -1160, 257);
            outlineBuilder(5, 4, "swamp", -1169, 270);
            outlineBuilder(2, 2, "swamp", -1165, 271);
            outlineBuilder(1, 1, "swamp", -1165, 273);
            outlineBuilder(2, 3, "swamp", -1174, 271);
            outlineBuilder(3, 2, "swamp", -1175, 273);
            outlineBuilder(4, 6, "swamp", -1154, 252);
            outlineBuilder(4, 3, "swamp", -1150, 257);
            outlineBuilder(1, 2, "swamp", -1149, 264);
            outlineBuilder(2, 2, "swamp", -1153, 269);
            outlineBuilder(7, 4, "swamp", -1147, 256);
            outlineBuilder(2, 3, "swamp", -1145, 264);
            outlineBuilder(2, 2, "swamp", -1145, 253);
            outlineBuilder(1, 1, "swamp", -1143, 253);
            outlineBuilder(1, 1, "swampTL", -1143, 254);
            outlineBuilder(6, 2, "swamp", -1153, 261);
            outlineBuilder(1, 4, "swamp", -1154, 267);
            outlineBuilder(3, 10, "swamp", -1155, 283);
            outlineBuilder(2, 7, "swamp", -1167, 284);
            outlineBuilder(2, 1, "swamp", -1173, 268);
            outlineBuilder(1, 1, "swampTR", -1173, 262);
            outlineBuilder(1, 1, "swampTL", -1173, 257);
            outlineBuilder(1, 1, "swampBL", -1157, 255);
        }
        //mapS8W35
        if (Y > -85605 && Y < -74729 && X < 364713 && X > 353021) //X-35
        {
            elevation = 0;
            region = "s8w35";
            campout = true;

            outlineBuilder(34, 10, "vardanianWoods", -1210, 252);

            outlineBuilder(34, 24, "vardanianWetland", -1200, 252);

            outlineBuilder(7, 1, "vardanianWetland", -1201, 257);
            outlineBuilder(4, 1, "vardanianWetland", -1202, 258);
            outlineBuilder(2, 1, "vardanianWoods", -1200, 252);
            outlineBuilder(5, 1, "vardanianWoods", -1200, 267);
            outlineBuilder(3, 2, "vardanianWoods", -1200, 275);
            outlineBuilder(2, 4, "vardanianWoods", -1200, 284);
            outlineBuilder(1, 1, "vardanianWoods", -1199, 264);
            outlineBuilder(1, 1, "vardanianWoods", -1200, 274);
            outlineBuilder(1, 2, "vardanianWoods", -1198, 275);
            outlineBuilder(1, 1, "vardanianWoods", -1198, 276);
            outlineBuilder(3, 1, "vardanianWoods", -1200, 279);
            outlineBuilder(1, 2, "vardanianWoods", -1200, 283);

            outlineBuilder(7, 1, "swamp", -1180, 254);
            outlineBuilder(8, 1, "swamp", -1179, 252);
            outlineBuilder(3, 1, "swamp", -1178, 254);
            outlineBuilder(6, 1, "swamp", -1177, 261);
            outlineBuilder(5, 2, "swamp", -1179, 263);
            outlineBuilder(4, 1, "swamp", -1180, 265);
            outlineBuilder(2, 1, "swamp", -1181, 256);
            outlineBuilder(2, 3, "swamp", -1190, 254);
            outlineBuilder(3, 2, "swamp", -1185, 264);
            outlineBuilder(4, 4, "swamp", -1187, 255);
            outlineBuilder(3, 2, "swamp", -1191, 258);
            outlineBuilder(2, 1, "swamp", -1188, 258);
            outlineBuilder(2, 2, "swamp", -1193, 257);
            outlineBuilder(1, 1, "swamp", -1190, 256);
            outlineBuilder(1, 1, "swampTR", -1191, 256);
            outlineBuilder(2, 1, "swamp", -1185, 259);
            outlineBuilder(3, 1, "swamp", -1186, 260);
            outlineBuilder(2, 1, "swamp", -1185, 262);
            outlineBuilder(2, 1, "swamp", -1183, 266);
            outlineBuilder(1, 2, "swamp", -1186, 268);
            outlineBuilder(2, 1, "swamp", -1184, 260);
            outlineBuilder(2, 1, "swamp", -1183, 261);
            outlineBuilder(4, 4, "swamp", -1194, 263);
            outlineBuilder(4, 1, "swamp", -1190, 264);
            outlineBuilder(4, 2, "swamp", -1196, 262);
            outlineBuilder(2, 1, "swamp", -1188, 263);
            outlineBuilder(1, 2, "swamp", -1188, 266);
            outlineBuilder(1, 1, "swamp", -1187, 265);
            outlineBuilder(4, 1, "swamp", -1188, 267);
            outlineBuilder(7, 2, "swamp", -1181, 272);
            outlineBuilder(6, 1, "swamp", -1179, 275);
            outlineBuilder(5, 1, "swamp", -1178, 279);
            outlineBuilder(7, 1, "swamp", -1177, 278);
            outlineBuilder(1, 1, "swampBR", -1181, 268);
            outlineBuilder(5, 3, "swamp", -1186, 270);
            outlineBuilder(3, 1, "swamp", -1182, 273);
            outlineBuilder(3, 2, "swamp", -1185, 281);
            outlineBuilder(2, 2, "swamp", -1193, 276);
            outlineBuilder(4, 1, "swamp", -1187, 272);
            outlineBuilder(1, 2, "swamp", -1190, 273);
            outlineBuilder(2, 2, "swamp", -1194, 268);
            outlineBuilder(4, 1, "swamp", -1192, 269);
            outlineBuilder(2, 1, "swamp", -1194, 273);
            outlineBuilder(2, 1, "swamp", -1191, 270);
            outlineBuilder(2, 3, "swamp", -1192, 274);
            outlineBuilder(2, 4, "swamp", -1184, 279);
            outlineBuilder(1, 2, "swamp", -1182, 281);
            outlineBuilder(1, 3, "swamp", -1182, 285);
            outlineBuilder(2, 5, "swamp", -1190, 280);
            outlineBuilder(2, 3, "swamp", -1191, 282);
            outlineBuilder(2, 1, "swamp", -1186, 283);
            outlineBuilder(1, 1, "swamp", -1183, 278);
            outlineBuilder(2, 1, "swamp", -1195, 281);
            outlineBuilder(1, 1, "swamp", -1194, 282);
            outlineBuilder(1, 2, "swamp", -1192, 285);
            outlineBuilder(2, 2, "swamp", -1198, 263);
            outlineBuilder(2, 1, "swamp", -1194, 258);
            outlineBuilder(1, 2, "swamp", -1195, 252);
            outlineBuilder(3, 6, "swamp", -1198, 253);
            outlineBuilder(1, 2, "swamp", -1199, 256);
            outlineBuilder(1, 3, "swamp", -1198, 258);
            outlineBuilder(2, 3, "swamp", -1199, 259);
            outlineBuilder(3, 1, "swamp", -1189, 265);
        }
        //mapS8W36
        if (Y > -85605 && Y < -74729 &&  X < 374956 && X > 363245) //X-36
        {
            elevation = 0;
            region = "s8w36";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1244, 252);
        }
        //Layer -7 (cold region): elev 0
        //mapS7
        if (Y > -75331 && Y < -64538 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s7";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 218);
            outlineBuilder( 34, 1, "stonePath", -20, 218);
        }
        //mapS7W25
        if (Y > -75331 && Y < -64538 && X < 262722 && X > 251041) //X-25
        {
            elevation = 0;
            region = "s7w25";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -870, 218);
            outlineBuilder(1, 2, "sea", -865, 222);

            outlineBuilder( 34, 1, "brickRoad", -855, 218);
        }
        //mapS7W26
        if (Y > -75331 && Y < -64538 && X < 272924 && X > 261266) //X-26 //todo add map
        {
            elevation = 0;
            region = "s7w26";
            campout = true;
            outlineBuilder(34, 34, "outline", -904, 218); //todo mistywoods

            outlineBuilder( 16, 1, "brickRoad", -894, 218);
            outlineBuilder( 1, 11, "brickRoad", -904, 234);
        }
        //mapS7W27
        if (Y > -75331 && Y < -64538 && X < 283157 && X > 271438) //X-27 //todo add map
        {
            elevation = 0;
            region = "s7w27";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -938, 218);
            outlineBuilder( 1, 1, "sea", -917, 222);

            outlineBuilder( 1, 34, "brickRoad", -938, 234);
        }
        //mapS7W28
        if (Y > -75331 && Y < -64538 && X < 293338 && X > 281664) //X-28 //todo add map
        {
            elevation = 0;
            region = "s7w28";
            campout = true;
            outlineBuilder(34, 34, "outline", -972, 218); //todo mistywoods

            outlineBuilder( 1, 34, "brickRoad", -972, 234);
        }
        //mapS7W29
        if (Y > -75331 && Y < -64538 && X < 303561 && X > 291852) //X-29 //todo add map
        {
            elevation = 0;
            region = "s7w29";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -1006, 218);

            outlineBuilder( 1, 28, "brickRoad", -1000, 234);
            outlineBuilder( 1, 7, "brickRoad", -1006, 235);
        }
        //mapS7W30
        if (Y > -75331 && Y < -64538 && X < 313753 && X > 302099) //X-30
        {
            elevation = 0;
            region = "s7w30";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -1040, 218);

            outlineBuilder( 1, 10, "brickRoad", -1015, 235);
            outlineBuilder( 1, 10, "brickRoad", -1024, 236);
            outlineBuilder( 1, 10, "brickRoad", -1033, 237);
            outlineBuilder( 1, 8, "brickRoad", -1040, 238);
            outlineBuilder( 13, 1, "brickRoad", -1040, 239);

            outlineBuilder(13, 1, "crag", -1040, 220);
            outlineBuilder(9, 1, "crag", -1039, 221);
            outlineBuilder(3, 1, "crag", -1038, 225);
            outlineBuilder(1, 3, "crag", -1038, 225);
            outlineBuilder(1, 4, "crag", -1037, 226);
            outlineBuilder(1, 2, "crag", -1037, 227);
            outlineBuilder(2, 1, "crag", -1040, 235);
        }
        //mapS7W31
        if (Y > -75331 && Y < -64538 && X < 323936 && X > 312277) //X-31
        {
            elevation = 0;
            region = "s7w31";
            campout = true;
            outlineBuilder(34, 34, "crag", -1074, 218);
            outlineBuilder(1, 4, "mistywoods", -1074, 251);
            outlineBuilder(1, 1, "mistywoods", -1074, 250);
            outlineBuilder(1, 6, "mistywoods", -1067, 251);
            outlineBuilder(1, 3, "mistywoods", -1056, 251);
            outlineBuilder(1, 1, "mistywoods", -1055, 250);
            outlineBuilder(2, 3, "mistywoods", -1044, 250);
            outlineBuilder(3, 1, "mistywoods", -1041, 249);
        }
        //mapS7W32
        if (Y > -75331 && Y < -64538 && X < 334130 && X > 322464) //X-32
        {
            elevation = 0;
            region = "s7w32";
            campout = true;
            outlineBuilder(34, 34, "crag", -1108, 218);

            outlineBuilder(3, 1, "mistywoods", -1076, 249);
            outlineBuilder(4, 1, "mistywoods", -1075, 248);
            outlineBuilder(1, 3, "mistywoods", -1079, 251);
            outlineBuilder(2, 8, "mistywoods", -1099, 250);
            outlineBuilder(1, 4, "mistywoods", -1107, 251);
            outlineBuilder(1, 3, "mistywoods", -1090, 251);
            outlineBuilder(1, 3, "mistywoods", -1098, 249);
            outlineBuilder(1, 2, "mistywoods", -1101, 251);
        }
        //mapS7W33
        if (Y > -75331 && Y < -64538 && X < 344345 && X > 332522) //X-33
        {
            elevation = 0;
            region = "s7w33";
            campout = true;
            outlineBuilder(34, 34, "vardanianWetland", -1142, 218);

            outlineBuilder(2, 5, "swamp", -1142, 218);
            outlineBuilder(1, 3, "swamp", -1142, 220);
            outlineBuilder(2, 5, "swamp", -1131, 218);
            outlineBuilder(1, 8, "swamp", -1134, 220);
            outlineBuilder(1, 6, "swamp", -1136, 221);
            outlineBuilder(1, 3, "swamp", -1136, 222);
            outlineBuilder(1, 2, "swamp", -1136, 223);
            outlineBuilder(1, 3, "swamp", -1140, 224);
            outlineBuilder(1, 4, "swamp", -1141, 225);
            outlineBuilder(2, 3, "swamp", -1141, 226);
            outlineBuilder(1, 1, "swamp", -1141, 228);
            outlineBuilder(4, 1, "swamp", -1124, 220);
            outlineBuilder(2, 3, "swamp", -1128, 224);
            outlineBuilder(6, 2, "swamp", -1133, 224);
            outlineBuilder(2, 1, "swamp", -1131, 224);
            outlineBuilder(1, 1, "swamp", -1131, 228);
            outlineBuilder(3, 2, "swamp", -1135, 227);
            outlineBuilder(1, 2, "swamp", -1137, 229);
            outlineBuilder(1, 2, "swamp", -1142, 229);
            outlineBuilder(1, 1, "swamp", -1137, 230);
            outlineBuilder(4, 5, "swamp", -1142, 230);
            outlineBuilder(3, 1, "swamp", -1137, 233);
            outlineBuilder(1, 4, "swamp", -1141, 234);
            outlineBuilder(2, 2, "swamp", -1139, 235);
            outlineBuilder(1, 3, "swamp", -1115, 218);
            outlineBuilder(1, 4, "swamp", -1115, 219);
            outlineBuilder(1, 4, "swamp", -1115, 220);
            outlineBuilder(1, 8, "swamp", -1119, 221);
            outlineBuilder(1, 6, "swamp", -1116, 222);
            outlineBuilder(2, 7, "swamp", -1116, 223);
            outlineBuilder(1, 1, "swamp", -1115, 225);
            outlineBuilder(1, 2, "swamp", -1114, 226);
            outlineBuilder(1, 1, "swamp", -1120, 219);
            outlineBuilder(1, 1, "swamp", -1122, 221);
            outlineBuilder(8, 4, "swamp", -1124, 224);
            outlineBuilder(1, 1, "swamp", -1125, 227);
            outlineBuilder(1, 4, "swamp", -1120, 226);
            outlineBuilder(1, 1, "swamp", -1120, 227);
            outlineBuilder(1, 5, "swamp", -1120, 231);
            outlineBuilder(1, 1, "swamp", -1116, 230);
            outlineBuilder(1, 2, "swamp", -1125, 232);
            outlineBuilder(1, 1, "swamp", -1125, 231);
            outlineBuilder(2, 3, "swamp", -1128, 230);
            outlineBuilder(1, 2, "swamp", -1131, 231);
            outlineBuilder(1, 9, "swamp", -1134, 234);
            outlineBuilder(1, 10, "swamp", -1135, 235);
            outlineBuilder(1, 1, "swamp", -1112, 234);
            outlineBuilder(3, 2, "swamp", -1114, 234);
            outlineBuilder(6, 2, "swamp", -1120, 233);
            outlineBuilder(4, 1, "swamp", -1118, 234);
            outlineBuilder(3, 1, "swamp", -1117, 235);
            outlineBuilder(2, 1, "swamp", -1121, 235);
            outlineBuilder(4, 1, "swamp", -1122, 234);
            outlineBuilder(5, 1, "swamp", -1123, 234);
            outlineBuilder(4, 1, "swamp", -1124, 235);
            outlineBuilder(2, 7, "swamp", -1133, 232);
            outlineBuilder(3, 2, "swamp", -1130, 236);
            outlineBuilder(2, 3, "swamp", -1135, 236);
            outlineBuilder(1, 5, "swamp", -1137, 238);
            outlineBuilder(2, 4, "swamp", -1137, 239);
            outlineBuilder(2, 1, "swamp", -1127, 236);
            outlineBuilder(1, 2, "swamp", -1126, 240);
            outlineBuilder(1, 5, "swamp", -1127, 241);
            outlineBuilder(1, 7, "swamp", -1128, 242);
            outlineBuilder(1, 8, "swamp", -1128, 243);
            outlineBuilder(1, 4, "swamp", -1127, 244);
            outlineBuilder(1, 3, "swamp", -1126, 245);
            outlineBuilder(3, 2, "swamp", -1122, 244);
            outlineBuilder(1, 7, "swamp", -1122, 247);
            outlineBuilder(1, 2, "swamp", -1119, 246);
            outlineBuilder(1, 2, "swamp", -1120, 248);
            outlineBuilder(1, 5, "swamp", -1117, 249);
            outlineBuilder(1, 2, "swamp", -1115, 250);
            outlineBuilder(1, 1, "swamp", -1113, 248);
            outlineBuilder(3, 1, "swamp", -1110, 242);
            outlineBuilder(6, 3, "swamp", -1115, 239);
            outlineBuilder(2, 1, "swamp", -1116, 241);
            outlineBuilder(2, 1, "swamp", -1112, 240);
            outlineBuilder(1, 2, "swamp", -1138, 243);
            outlineBuilder(1, 7, "swamp", -1140, 244);
            outlineBuilder(1, 8, "swamp", -1140, 245);
            outlineBuilder(3, 1, "swamp", -1134, 241);
            outlineBuilder(2, 5, "swamp", -1142, 246);
            outlineBuilder(2, 6, "swamp", -1142, 248);
            outlineBuilder(1, 8, "swamp", -1139, 250);
            outlineBuilder(1, 4, "swamp", -1135, 246);
            outlineBuilder(3, 1, "swamp", -1132, 247);
            outlineBuilder(2, 4, "swamp", -1126, 250);
            outlineBuilder(1, 1, "swamp", -1126, 237);
            outlineBuilder(2, 1, "swamp", -1125, 237);
            outlineBuilder(1, 2, "swamp", -1125, 239);

            outlineBuilder(1, 1, "swampTL", -1133, 239);
            outlineBuilder(1, 1, "swampTR", -1131, 236);
            outlineBuilder(1, 1, "swampBL", -1123, 223);
            outlineBuilder(1, 1, "swampTL", -1120, 228);
            outlineBuilder(1, 1, "swampBR", -1134, 226);
            outlineBuilder(1, 1, "swampTL", -1140, 228);
            outlineBuilder(1, 1, "swampTL", -1126, 246);
            outlineBuilder(1, 1, "swampTR", -1127, 245);
            outlineBuilder(1, 1, "swampTR", -1129, 225);
            outlineBuilder(1, 1, "swampBR", -1129, 224);
            outlineBuilder(1, 1, "swampTR", -1127, 226);
            outlineBuilder(1, 1, "swampBL", -1131, 227);
            outlineBuilder(1, 1, "swampTR", -1136, 246);

            outlineBuilder(10, 1, "crag", -1109, 218);
            outlineBuilder(5, 1, "crag", -1110, 218);
            outlineBuilder(4, 1, "crag", -1111, 218);
            outlineBuilder(1, 1, "crag", -1112, 218);
            outlineBuilder(1, 2, "crag", -1113, 220);
            outlineBuilder(2, 1, "crag", -1110, 226);
            outlineBuilder(3, 2, "crag", -1110, 229);
            outlineBuilder(2, 1, "crag", -1111, 230);
            outlineBuilder(11, 1, "crag", -1109, 234);
            outlineBuilder(7, 1, "crag", -1110, 235);
            outlineBuilder(3, 2, "crag", -1112, 235);
            outlineBuilder(1, 1, "crag", -1109, 246);
            outlineBuilder(1, 2, "crag", -1110, 248);
            outlineBuilder(2, 1, "crag", -1109, 250);
            outlineBuilder(1, 1, "crag", -1110, 251);
        }
        //mapS7W34
        if (Y > -75331 && Y < -64538 && X < 354544 && X > 342860) //X-34 //todo add map
        {
            elevation = 0;
            region = "s7w34";
            campout = true;
            outlineBuilder(34, 34, "outline", -1176, 218); //todo vardanianWetland
            outlineBuilder(1, 1, "swamp", -1174, 251);
            outlineBuilder(2, 4, "swamp", -1175, 249);
            outlineBuilder(1, 7, "swamp", -1174, 248);
            outlineBuilder(1, 8, "swamp", -1172, 247);
            outlineBuilder(3, 6, "swamp", -1170, 243);
            outlineBuilder(5, 3, "swamp", -1164, 240);
            outlineBuilder(1, 2, "swamp", -1166, 240);
            outlineBuilder(6, 9, "swamp", -1169, 232);
            outlineBuilder(7, 5, "swamp", -1160, 235);
            outlineBuilder(2, 8, "swamp", -1158, 242);
            outlineBuilder(1, 10, "swamp", -1156, 244);
            outlineBuilder(3, 9, "swamp", -1152, 245);
            outlineBuilder(4, 1, "swamp", -1143, 246);
            outlineBuilder(3, 2, "swamp", -1145, 241);
            outlineBuilder(2, 2, "swamp", -1147, 240);
            outlineBuilder(7, 1, "swamp", -1149, 237);
            outlineBuilder(2, 3, "swamp", -1152, 237);
            outlineBuilder(2, 9, "swamp", -1153, 232);
            outlineBuilder(1, 4, "swamp", -1149, 234);
            outlineBuilder(1, 2, "swamp", -1148, 235);
            outlineBuilder(5, 2, "swamp", -1144, 228);
            outlineBuilder(5, 14, "swamp", -1158, 223);
            outlineBuilder(2, 4, "swamp", -1148, 228);
            outlineBuilder(4, 7, "swamp", -1157, 219);
            outlineBuilder(3, 8, "swamp", -1168, 225);
            outlineBuilder(3, 5, "swamp", -1166, 222);
            outlineBuilder(4, 2, "swamp", -1165, 218);
            outlineBuilder(2, 6, "swamp", -1147, 219);
            outlineBuilder(1, 3, "swamp", -1148, 218);
            outlineBuilder(1, 3, "swamp", -1146, 221);
            outlineBuilder(1, 1, "swamp", -1157, 218);
            outlineBuilder(2, 2, "swamp", -1161, 219);
            outlineBuilder(1, 2, "swamp", -1162, 218);
            outlineBuilder(2, 4, "swamp", -1158, 229);
            outlineBuilder(1, 1, "swamp", -1155, 231);
            outlineBuilder(3, 1, "swamp", -1158, 231);
            outlineBuilder(1, 2, "swamp", -1166, 228);
            outlineBuilder(10, 4, "swamp", -1175, 219);
            outlineBuilder(7, 1, "swamp", -1171, 221);
            outlineBuilder(5, 3, "swamp", -1170, 218);
            outlineBuilder(9, 2, "swamp", -1174, 229);
            outlineBuilder(3, 1, "swamp", -1172, 232);
            outlineBuilder(5, 1, "swamp", -1176, 237);
            outlineBuilder(4, 2, "swamp", -1176, 233);
            outlineBuilder(1, 2, "swamp", -1173, 238);
            outlineBuilder(3, 2, "swamp", -1175, 244);
            outlineBuilder(1, 1, "swamp", -1170, 231);
            outlineBuilder(2, 1, "swamp", -1171, 233);
        }
        //mapS7w35
        if (Y > -75331 && Y < -64538 && X < 364713 && X > 353021) //X-35
        {
            elevation = 0;
            region = "s7w35";
            campout = true;


            outlineBuilder(34, 34, "vardanianWetland", -1210, 218);

            outlineBuilder(6, 2, "vardanianGrass", -1210, 218);
            outlineBuilder(3, 2, "vardanianGrass", -1208, 218);
            outlineBuilder(2, 3, "vardanianGrass", -1206, 218);

            outlineBuilder(31, 1, "vardanianWoods", -1210, 221);
            outlineBuilder(6, 2, "vardanianWoods", -1209, 223);
            outlineBuilder(6, 5, "vardanianWoods", -1209, 229);
            outlineBuilder(3, 1, "vardanianWoods", -1207, 225);
            outlineBuilder(4, 2, "vardanianWoods", -1204, 230);
            outlineBuilder(1, 1, "vardanianWoods", -1204, 234);
            outlineBuilder(7, 9, "vardanianWoods", -1209, 235);
            outlineBuilder(6, 11, "vardanianWoods", -1209, 242);
            outlineBuilder(4, 8, "vardanianWoods", -1209, 248);
            outlineBuilder(1, 1, "vardanianWoods", -1201, 251);
            outlineBuilder(3, 1, "vardanianWoods", -1198, 244);
            outlineBuilder(1, 2, "vardanianWoods", -1200, 237);
            outlineBuilder(1, 1, "vardanianWoods", -1200, 238);
            outlineBuilder(1, 2, "vardanianWoods", -1201, 248);


            outlineBuilder(10, 5, "swamp", -1181, 232);
            outlineBuilder(6, 3, "swamp", -1184, 237);
            outlineBuilder(2, 3, "swamp", -1185, 235);
            outlineBuilder(3, 1, "swamp", -1179, 249);
            outlineBuilder(4, 2, "swamp", -1181, 245);
            outlineBuilder(3, 1, "swamp", -1177, 244);
            outlineBuilder(2, 1, "swamp", -1178, 247);
            outlineBuilder(2, 1, "swamp", -1177, 248);
            outlineBuilder(2, 3, "swamp", -1183, 250);
            outlineBuilder(4, 5, "swamp", -1194, 241);
            outlineBuilder(3, 2, "swamp", -1184, 247);
            outlineBuilder(6, 3, "swamp", -1195, 220);
            outlineBuilder(1, 3, "swamp", -1191, 223);
            outlineBuilder(4, 4, "swamp", -1190, 224);
            outlineBuilder(5, 2, "swamp", -1187, 219);
            outlineBuilder(3, 2, "swamp", -1185, 220);
            outlineBuilder(2, 1, "swamp", -1191, 219);
            outlineBuilder(2, 2, "swamp", -1190, 220);
            outlineBuilder(8, 1, "swamp", -1196, 222);
            outlineBuilder(2, 1, "swamp", -1195, 226);
            outlineBuilder(4, 2, "swamp", -1198, 228);
            outlineBuilder(2, 1, "swamp", -1197, 224);
            outlineBuilder(1, 3, "swamp", -1196, 219);
            outlineBuilder(1, 3, "swamp", -1179, 231);
            outlineBuilder(6, 2, "swamp", -1187, 229);
            outlineBuilder(2, 1, "swamp", -1185, 233);
            outlineBuilder(1, 5, "swamp", -1192, 239);
            outlineBuilder(1, 3, "swamp", -1188, 240);
            outlineBuilder(2, 1, "swamp", -1185, 239);
            outlineBuilder(3, 2, "swamp", -1189, 230);
            outlineBuilder(3, 3, "swamp", -1183, 229);
            outlineBuilder(1, 2, "swamp", -1182, 228);
            outlineBuilder(3, 4, "swamp", -1195, 245);
            outlineBuilder(2, 6, "swamp", -1196, 250);
            outlineBuilder(2, 3, "swamp", -1190, 249);
            outlineBuilder(1, 2, "swamp", -1194, 249);
            outlineBuilder(1, 3, "swamp", -1197, 238);
            outlineBuilder(4, 1, "swamp", -1188, 243);
            outlineBuilder(2, 1, "swamp", -1185, 246);
            outlineBuilder(2, 2, "swamp", -1184, 244);
            outlineBuilder(1, 1, "swamp", -1185, 244);
            outlineBuilder(1, 2, "swamp", -1187, 241);
            outlineBuilder(2, 2, "swamp", -1187, 244);
            outlineBuilder(1, 1, "swamp", -1204, 223);
            outlineBuilder(2, 3, "swamp", -1180, 218);
            outlineBuilder(2, 2, "swamp", -1178, 220);
            outlineBuilder(1, 1, "swamp", -1189, 244);
            outlineBuilder(1, 3, "swamp", -1191, 245);
            outlineBuilder(1, 1, "swamp", -1191, 246);
            outlineBuilder(1, 2, "swamp", -1183, 243);
            outlineBuilder(2, 2, "swamp", -1189, 222);

            outlineBuilder(1, 1, "swampTR", -1196, 220);
        }
        //Layer -6 (cold region): elev 0
        //mapS6
        if (Y > -65106 && Y < -54332 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s6";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 184);
            outlineBuilder( 34, 1, "stonePath", -20, 184);
        }
        //mapS6W25 //Cergadet City
        if (Y > -65106 && Y < -54332 && X < 262722 && X > 251041) //X-25 //todo add map
        {
            elevation = 0;
            region = "s6w25";
            campout = false;
            outlineBuilder(34, 34, "outline", -870, 184); //todo hotGrass

            outlineBuilder( 9, 9, "thenganBrick", -860, 194);
            outlineBuilder( 7, 5, "thenganBrick", -851, 196);
            outlineBuilder( 1, 3, "thenganBrick", -849, 195);
            outlineBuilder( 1, 10, "brickRoad", -861, 193);
            outlineBuilder( 10, 1, "brickRoad", -861, 193);
            outlineBuilder( 1, 12, "brickRoad", -861, 203);

            outlineBuilder( 1, 21, "brickRoad", -870, 197);

            outlineBuilder( 34, 1, "brickRoad", -855, 184);

            outlineBuilder( 3, 1, "brickRoad", -849, 201);
            outlineBuilder( 1, 4, "brickRoad", -849, 200);

            outlineBuilder( 3, 1, "brickRoad", -846, 201);

            outlineBuilder( 1, 3, "brickRoad", -849, 203);

            outlineBuilder( 1, 1, "brickRoad", -847, 199);

            outlineBuilder( 3, 1, "brickRoad", -858, 194);

            outlineBuilder( 3, 1, "brickRoad", -851, 193);
            outlineBuilder( 1, 1, "brickRoad", -850, 195);
        }
        //mapS6W26
        if (Y > -65106 && Y < -54332 && X < 272924 && X > 261266) //X-26 //todo add map
        {
            elevation = 0;
            region = "s6w26";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -904, 184);

            outlineBuilder( 1, 24, "brickRoad", -894, 197);
            outlineBuilder( 20, 1, "brickRoad", -894, 198);
        }
        //Layer -5 (cold region): elev 0
        //mapS5
        if (Y > -54904 && Y < -44148 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s5";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 150);
            outlineBuilder( 1, 26, "stonePath", -19, 150);
            outlineBuilder( 7, 1, "stonePath", -19, 151);
            outlineBuilder( 1, 2, "stonePath", -19, 158);
            outlineBuilder( 14, 1, "stonePath", -18, 158);
            outlineBuilder( 1, 2, "stonePath", -18, 172);
            outlineBuilder( 10, 1, "stonePath", -17, 173);
            outlineBuilder( 1, 4, "stonePath", -20, 183);
        }
        //mapS5W20
        if (Y > -54904 && Y < -44148 && X < 211710 && X > 200055) //X-20
        {
            elevation = 0;
            region = "s5w20";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -700, 150);

            outlineBuilder( 17, 1, "brickRoad", -677, 150);
            outlineBuilder( 1, 23, "brickRoad", -700, 166);
        }
        //mapS5W21
        if (Y > -54904 && Y < -44148 && X < 221940 && X > 210266) //X-21
        {
            elevation = 0;
            region = "s5w21";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -734, 150);

            outlineBuilder( 1, 30, "brickRoad", -730, 166);
            outlineBuilder( 1, 5, "brickRoad", -734, 165);
        }
        //mapS5W22
        if (Y > -54904 && Y < -44148 && X < 232101 && X > 220483) //X-22
        {
            elevation = 0;
            region = "s5w22";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -768, 150);

            outlineBuilder( 1, 34, "brickRoad", -768, 165);
        }
        //mapS5W23
        if (Y > -54904 && Y < -44148 && X < 242353 && X > 230643) //X-23
        {
            elevation = 0;
            region = "s5w23";
            campout = true;
            outlineBuilder(34, 34, "hotGrass", -802, 150);

            outlineBuilder( 1, 34, "brickRoad", -802, 165);

            outlineBuilder( 1, 3, "dirt", -793, 154);
            outlineBuilder( 1, 2, "dirt", -794, 155);
            outlineBuilder( 2, 1, "dirt", -793, 156);
            outlineBuilder( 3, 2, "dirt", -789, 171);
            outlineBuilder( 2, 1, "dirt", -791, 172);
            outlineBuilder( 2, 1, "dirt", -789, 174);
            outlineBuilder( 3, 1, "dirt", -790, 170);

            outlineBuilder( 3, 1, "mistywoods", -769, 150);
            outlineBuilder( 1, 2, "mistywoods", -770, 154);
            outlineBuilder( 1, 1, "mistywoods", -769, 157);
            outlineBuilder( 3, 2, "mistywoods", -770, 158);
            outlineBuilder( 2, 1, "mistywoods", -769, 162);
            outlineBuilder( 4, 1, "mistywoods", -769, 168);
            outlineBuilder( 2, 2, "mistywoods", -770, 173);
            outlineBuilder( 2, 3, "mistywoods", -771, 175);
            outlineBuilder( 2, 2, "mistywoods", -770, 177);
            outlineBuilder( 2, 1, "mistywoods", -769, 180);

        }
        //mapS5W24
        if (Y > -54904 && Y < -44148 && X < 252559 && X > 240873) //X-24
        {
            elevation = 0;
            region = "s5w24";
            campout = true;
            outlineBuilder(34, 34, "hotGrass", -836, 150);

            outlineBuilder( 1, 34, "brickRoad", -836, 165);

            outlineBuilder( 3, 1, "dirt", -824, 154);
            outlineBuilder( 1, 3, "dirt", -824, 153);
            outlineBuilder( 3, 1, "dirt", -825, 152);
            outlineBuilder( 1, 1, "dirt", -823, 154);

            outlineBuilder( 1, 1, "dirt", -818, 155);
            outlineBuilder( 2, 3, "dirt", -819, 156);
            outlineBuilder( 3, 1, "dirt", -816, 154);
            outlineBuilder( 2, 2, "dirt", -820, 158);
            outlineBuilder( 1, 2, "dirt", -822, 171);

        }
        //mapS5W25
        if (Y > -54904 && Y < -44148 && X < 262722 && X > 251041) //X-25
        {
            elevation = 0;
            region = "s5w25";
            campout = true;
            outlineBuilder(34, 34, "hotGrass", -870, 150);

            outlineBuilder( 1, 4, "brickRoad", -840, 165);

            outlineBuilder( 1, 2, "brickRoad", -841, 166);
            outlineBuilder( 1, 2, "brickRoad", -842, 167);
            outlineBuilder( 1, 2, "brickRoad", -843, 168);
            outlineBuilder( 1, 2, "brickRoad", -844, 169);
            outlineBuilder( 1, 2, "brickRoad", -845, 170);
            outlineBuilder( 1, 2, "brickRoad", -846, 171);
            outlineBuilder( 1, 2, "brickRoad", -847, 172);
            outlineBuilder( 1, 2, "brickRoad", -848, 173);
            outlineBuilder( 1, 2, "brickRoad", -849, 174);
            outlineBuilder( 1, 2, "brickRoad", -850, 175);
            outlineBuilder( 1, 2, "brickRoad", -851, 176);
            outlineBuilder( 1, 2, "brickRoad", -852, 177);
            outlineBuilder( 1, 2, "brickRoad", -853, 178);
            outlineBuilder( 1, 2, "brickRoad", -854, 179);
            outlineBuilder( 1, 2, "brickRoad", -855, 180);
            outlineBuilder( 3, 1, "brickRoad", -855, 181);

            outlineBuilder( 2, 1, "dirt", -860, 165);
            outlineBuilder( 2, 1, "dirt", -859, 164);

            outlineBuilder( 1, 2, "dirt", -851, 162);
        }
        //Layer -4 (cold region): elev 0
        //mapS4
        if (Y > -44704 && Y < -33915 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s4";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 116);
            outlineBuilder( 1, 4, "stonePath", 3, 116);
            outlineBuilder( 33, 1, "stonePath", 6, 117);
        }
        //mapS4W13 //CRANHEIM
        if (Y > -44704 && Y < -33877 && X < 140305 && X > 128660) //X-13 //todo add map
        {
            elevation = 0;
            region = "s4w13";
            campout = false;
            //outlineBuilder(34, 34, "outline", -462, 116);
            outlineBuilder(32, 25, "thenganBrick", -462, 116);
            outlineBuilder(2, 25, "hotGrass", -462, 148);
            outlineBuilder(34, 9, "hotGrass", -437, 116);

            outlineBuilder( 1, 25, "brickRoad", -462, 116);

            outlineBuilder( 1, 25, "brickRoad", -462, 120);

            outlineBuilder( 1, 25, "brickRoad", -462, 124);

            outlineBuilder( 1, 25, "brickRoad", -462, 128);

            outlineBuilder( 1, 25, "brickRoad", -462, 132);

            outlineBuilder( 1, 25, "brickRoad", -462, 136);

            outlineBuilder( 28, 1, "brickRoad", -462, 116);
            outlineBuilder( 1, 9, "brickRoad", -461, 141);
            outlineBuilder( 4, 1, "brickRoad", -452, 141);
            outlineBuilder( 1, 14, "brickRoad", -459, 145);
            outlineBuilder( 2, 1, "brickRoad", -459, 146);
            outlineBuilder( 2, 1, "brickRoad", -456, 146);
            outlineBuilder( 2, 1, "brickRoad", -453, 146);
            outlineBuilder( 2, 1, "brickRoad", -450, 146);
            outlineBuilder( 2, 1, "brickRoad", -446, 146);

            outlineBuilder( 25, 1, "brickRoad", -443, 121);

            outlineBuilder( 1, 6, "brickRoad", -443, 146);

            outlineBuilder(32, 1, "brickRoad", -438, 116);

            outlineBuilder(30, 1, "brickRoad", -448, 116);

            outlineBuilder( 1, 2, "brickRoad", -445, 146);

            outlineBuilder( 15, 1, "brickRoad", -455, 121);
            outlineBuilder( 1, 8, "brickRoad", -445, 141);

            outlineBuilder(3, 1, "brickRoad", -458, 117);
            outlineBuilder(4, 1, "brickRoad", -459, 120);
            outlineBuilder(3, 1, "brickRoad", -453, 117);
            outlineBuilder(1, 1, "brickRoad", -442, 121);
            outlineBuilder(3, 1, "brickRoad", -441, 117);

        }
        //mapS4W14
        if (Y > -44704 && Y < -33877 && X < 150510 && X > 138886) //X-14
        {
            elevation = 0;
            region = "s4w14";
            campout = true;
            outlineBuilder(34, 34, "hotGrass", -496, 116);

            outlineBuilder(5, 3, "dirt", -490, 122);
            outlineBuilder(2, 1, "dirt", -491, 124);
            outlineBuilder(1, 1, "dirt", -492, 125);
            outlineBuilder(1, 1, "dirt", -488, 127);
            outlineBuilder(1, 1, "dirt", -487, 123);

            outlineBuilder(2, 4, "dirt", -483, 140);
            outlineBuilder(1, 1, "dirt", -481, 139);
            outlineBuilder(1, 3, "dirt", -480, 143);
            outlineBuilder(1, 1, "dirt", -478, 144);
            outlineBuilder(2, 2, "dirt", -482, 142);
            outlineBuilder(1, 1, "dirt", -483, 143);
            outlineBuilder(1, 1, "dirt", -484, 140);

            outlineBuilder(1, 1, "dirt", -486, 146);
            outlineBuilder(2, 2, "dirt", -488, 145);

            outlineBuilder(1, 2, "dirt", -488, 141);

            outlineBuilder(1, 1, "dirt", -492, 139);

            outlineBuilder(2, 2, "dirt", -480, 125);
            outlineBuilder(1, 1, "dirt", -477, 122);

            outlineBuilder(1, 4, "farmland", -473, 128);

            outlineBuilder(3, 2, "farmland", -469, 120);

            outlineBuilder(2, 2, "farmland", -474, 133);

            outlineBuilder(3, 1, "farmland", -482, 131);

            outlineBuilder(1, 1, "dirt", -467, 138);
            outlineBuilder(1, 3, "dirt", -468, 139);

            outlineBuilder( 3, 2, "brickRoad", -464, 127);
            outlineBuilder( 1, 12, "brickRoad", -476, 129);
            outlineBuilder( 6, 1, "brickRoad", -476, 130);
            outlineBuilder( 1, 20, "brickRoad", -496, 135);
            outlineBuilder( 20, 1, "brickRoad", -470, 130);
        }
        //mapS4W15
        if (Y > -44704 && Y < -33877 && X < 160743 && X > 149080) //X-15
        {
            elevation = 0;
            region = "s4w15";
            campout = true;
            outlineBuilder(34, 34, "hotGrass", -530, 116);

            outlineBuilder(1, 1, "mistywoods", -530, 116);
            outlineBuilder(9, 1, "mistywoods", -530, 119);
            outlineBuilder(4, 1, "mistywoods", -529, 123);
            outlineBuilder(1, 1, "mistywoods", -528, 125);

            outlineBuilder(5, 1, "mistywoods", -530, 130);
            outlineBuilder(2, 1, "mistywoods", -529, 132);

            outlineBuilder(3, 1, "mistywoods", -530, 140);

            outlineBuilder(6, 2, "dirt", -525, 126);
            outlineBuilder(2, 1, "dirt", -523, 125);
            outlineBuilder(1, 1, "dirt", -526, 129);
            outlineBuilder(1, 2, "dirt", -527, 131);

            outlineBuilder(3, 4, "dirt", -510, 126);
            outlineBuilder(2, 1, "dirt", -511, 127);

            outlineBuilder(2, 2, "dirt", -513, 118);
            outlineBuilder(1, 1, "dirt", -519, 121);

            outlineBuilder(3, 3, "dirt", -520, 139);
            outlineBuilder(1, 1, "dirt", -517, 140);
            outlineBuilder(1, 1, "dirt", -518, 142);

            outlineBuilder(3, 1, "dirt", -526, 143);

            outlineBuilder(1, 2, "dirt", -524, 138);

            outlineBuilder(1, 1, "dirt", -509, 144);

            outlineBuilder( 1, 34, "brickRoad", -530, 135);
        }
        //mapS4W16
        if (Y > -44704 && Y < -33877 && X < 170912 && X > 159263) //X-16
        {
            elevation = 0;
            region = "s4w16";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -564, 116);

            outlineBuilder( 1, 34, "brickRoad", -564, 135);
        }
        //mapS4W17
        if (Y > -44704 && Y < -33877 && X < 181104 && X > 169450) //X-17
        {
            elevation = 0;
            region = "s4w17";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -598, 116);

            outlineBuilder( 1, 34, "brickRoad", -598, 135);
        }
        //mapS4W18
        if (Y > -44704 && Y < -33877 && X < 191342 && X > 179679) //X-18
        {
            elevation = 0;
            region = "s4w18";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -632, 116);

            outlineBuilder( 1, 16, "brickRoad", -614, 135);
            outlineBuilder( 1, 19, "brickRoad", -632, 136);
        }
        //mapS4W19
        if (Y > -44704 && Y < -33877 && X < 201526 && X > 189853) //X-19
        {
            elevation = 0;
            region = "s4w19";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -666, 116);

            outlineBuilder( 1, 7, "brickRoad", -639, 136);
            outlineBuilder( 7, 1, "brickRoad", -639, 137);
            outlineBuilder( 1, 27, "brickRoad", -666, 143);
        }
        //mapS4W20
        if (Y > -44704 && Y < -33877 && X < 211710 && X > 200055) //X-20
        {
            elevation = 0;
            region = "s4w20";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -700, 116);

            outlineBuilder( 1, 11, "brickRoad", -677, 143);
            outlineBuilder( 6, 1, "brickRoad", -677, 144);
        }
        //Layer -3 (cold region): elev 0
        //mapS3W14 //CRANHEIM
        if (Y > -34556 && Y < -23654 && X < 150510 && X > 138886) //X-14 //todo add map
        {
            elevation = 0;
            region = "s3w14";
            campout = false;
            //outlineBuilder(34, 34, "outline", -496, 82);
            outlineBuilder(32, 30, "thenganBrick", -492, 82);
            outlineBuilder(34, 4, "hotGrass", -496, 82);
            outlineBuilder(2, 32, "hotGrass", -494, 114);


            outlineBuilder( 18, 1, "brickRoad", -487, 82);
            outlineBuilder( 2, 3, "brickRoad", -488, 100);

            outlineBuilder( 18, 1, "brickRoad", -490, 90);
            outlineBuilder( 1, 30, "brickRoad", -492, 90);

            outlineBuilder( 1, 6, "brickRoad", -492, 82);
            outlineBuilder( 8, 1, "brickRoad", -492, 82);
            outlineBuilder( 6, 1, "brickRoad", -492, 108);

            outlineBuilder( 18, 1, "brickRoad", -463, 82);
            outlineBuilder( 5, 1, "brickRoad", -464, 108);
            outlineBuilder( 2, 1, "brickRoad", -467, 106);
            outlineBuilder( 1, 19, "brickRoad", -486, 106);
            outlineBuilder( 4, 1, "brickRoad", -486, 104);
            outlineBuilder( 14, 1, "brickRoad", -480, 91);
            outlineBuilder( 4, 1, "brickRoad", -480, 109);

            outlineBuilder( 1, 30, "brickRoad", -492, 104);
            outlineBuilder( 1, 30, "brickRoad", -492, 108);
            outlineBuilder( 1, 30, "brickRoad", -492, 112);

        }
        //mapS3W13 //CRANHEIM
        if (Y > -34556 && Y < -23654 && X < 140305 && X > 128660) //X-13 //todo add map
        {
            elevation = 0;
            region = "s3w13";
            campout = false;
            //outlineBuilder(34, 34, "outline", -462, 82);
            outlineBuilder(34, 25, "thenganBrick", -462, 82);
            outlineBuilder(34, 9, "outline", -437, 82); //todo hotGrass

            outlineBuilder( 6, 3, "thenganBrick", -447, 89);

            outlineBuilder( 1, 20, "brickRoad", -448, 91);
            outlineBuilder( 3, 2, "brickRoad", -437, 90);
            outlineBuilder( 24, 1, "brickRoad", -438, 82);
            outlineBuilder( 24, 1, "brickRoad", -441, 82);
            outlineBuilder( 24, 1, "brickRoad", -444, 82);

            outlineBuilder( 1, 25, "brickRoad", -462, 82);
            outlineBuilder( 1, 25, "brickRoad", -462, 102);

            outlineBuilder( 1, 18, "brickRoad", -462, 88);
            outlineBuilder( 1, 18, "brickRoad", -462, 95);

            //outlineBuilder( 6, 5, "thenganBrick", -453, 89);
            outlineBuilder( 8, 1, "brickRoad", -454, 88);
            outlineBuilder( 6, 1, "brickRoad", -448, 89);

            outlineBuilder( 1, 25, "brickRoad", -462, 99);

            outlineBuilder( 1, 24, "brickRoad", -462, 105);
            outlineBuilder( 1, 25, "brickRoad", -462, 85);

            outlineBuilder( 34, 1, "brickRoad", -453, 82);

            outlineBuilder( 34, 1, "brickRoad", -459, 82);

            outlineBuilder( 1, 25, "brickRoad", -462, 108);
            outlineBuilder( 1, 25, "brickRoad", -462, 112);

            outlineBuilder( 11, 1, "brickRoad", -446, 105);
            outlineBuilder( 11, 1, "brickRoad", -439, 105);
            outlineBuilder( 6, 1, "brickRoad", -462, 99);
        }
        //mapS3W12
        if (Y > -34556 && Y < -23654 && X < 130130 && X > 108284) //X-12
        {
            elevation = 0;
            region = "s3w12";
            campout = true;
            outlineBuilder(34, 34, "hotGrass", -428, 82);

            outlineBuilder(2, 3, "farmland", -415, 95);
            outlineBuilder(6, 2, "farmland", -426, 88);

            outlineBuilder(4, 2, "farmland", -416, 107);

            outlineBuilder(2, 2, "farmland", -405, 102);

            outlineBuilder(4, 6, "dirt", -407, 84);
            outlineBuilder(1, 3, "dirt", -406, 83);
            outlineBuilder(2, 1, "dirt", -408, 86);
            outlineBuilder(1, 1, "dirt", -401, 84);
            outlineBuilder(1, 4, "dirt", -406, 88);

            outlineBuilder(3, 2, "dirt", -422, 99);
            outlineBuilder(1, 1, "dirt", -423, 99);

            outlineBuilder(2, 2, "dirt", -414, 85);
            outlineBuilder(2, 1, "dirt", -420, 83);

            outlineBuilder(1, 1, "dirt", -423, 108);

            outlineBuilder(2, 2, "dirt", -409, 108);
            outlineBuilder(1, 2, "dirt", -411, 109);
            outlineBuilder(1, 2, "dirt", -408, 110);

            outlineBuilder( 1, 34, "brickRoad", -428, 91);

        }
        //mapS3W11
        if (Y > -34556 && Y < -23654 && X < 119902 && X > 108284) //X-11
        {
            elevation = 0;
            region = "s3w11";
            campout = true;
            outlineBuilder(34, 34, "woods", -394, 82);

            outlineBuilder( 1, 34, "brickRoad", -394, 91);

            outlineBuilder(19, 1, "sea", -382, 82);
            outlineBuilder(1, 1, "seaCornerBL", -382, 101);
            outlineBuilder(1, 1, "seaCornerTR", -381, 101);
            outlineBuilder(8, 1, "sea", -381, 102);
            outlineBuilder(1, 1, "seaCornerBL", -381, 110);
            outlineBuilder(1, 1, "seaCornerTR", -380, 110);
            outlineBuilder(1, 1, "seaCornerBL", -380, 111);
            outlineBuilder(1, 1, "seaCornerTR", -379, 111);
            outlineBuilder(1, 1, "sea", -379, 112);
            outlineBuilder(1, 1, "seaCornerBL", -379, 113);
            outlineBuilder(1, 1, "seaCornerTR", -378, 113);
            outlineBuilder(2, 1, "shallow", -378, 114);
        }
        //mapS3W10
        if (Y > -34556 && Y < -23654 && X < 109729 && X > 98077) //X-10
        {
            elevation = 0;
            region = "s3w10";
            campout = true;
            outlineBuilder(34, 34, "woods", -360, 82);


            outlineBuilder( 1, 34, "brickRoad", -360, 91);

        }
        //mapS3W9
        if (Y > -34556 && Y < -23654 && X < 99554 && X > 87882) //X-9
        {
            elevation = 0;
            region = "s3w9";
            campout = true;
            outlineBuilder(34, 34, "woods", -326, 82);


            outlineBuilder( 10, 1, "brickRoad", -321, 82);
            outlineBuilder( 1, 5, "brickRoad", -326, 91);

        }
        //mapS3 //Calcutt (town)
        if (Y > -34556 && Y < -23654 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s3";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 82);
            outlineBuilder( 34, 1, "stonePath", 3, 82);
            outlineBuilder( 4, 4, "thatch", 4, 103);
            outlineBuilder( 1, 1, "farmland", 8, 104);
        }
        //mapS3E1
        if (Y > -34556 && Y < -23654 && X < - 2490 && X > -14114) //X1
        {
            elevation = 0;
            region = "s3e1";
            campout = true;
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
        //mapS2E6
        if (Y > -24704 && Y < -13476 && X < -53489.88731544383 && X > -65110.798814782334) //X6
        {
            elevation = 0;
            region = "s2e6";
            campout = true;
            outlineBuilder( 34, 34, "brightGrass", 184, 48); //brightGrass
            outlineBuilder(2, 3, "farmland", 195, 66);
            outlineBuilder(1, 2, "farmland", 192, 63);
            outlineBuilder(2, 3, "farmland", 193, 69);
        }
        //mapS2E1
        if (Y > -24704 && Y < -13476 && X < - 2490 && X > -14114) //X1
        {
            elevation = 0;
            region = "s2e1";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", 14, 48);
        }
        //mapS2
        if (Y > -24704 && Y < -13476 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s2";
            campout = true;
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
        //mapS2W5
        if (Y > -24704 && Y < -13476 && X < 58680 && X > 47082) //X-5
        {
            elevation = 0;
            region = "s2w5";
            campout = true;

            outlineBuilder( 34, 34, "hotGrass", -190, 48);
            outlineBuilder( 12, 1, "brickRoad", -167, 48);
            outlineBuilder( 2, 4, "farmland", -168, 62);
        }
        //mapS2W6
        if (Y > -24704 && Y < -13476 && X < 68925 && X > 57283) //X-6
        {
            elevation = 0;
            region = "s2w6";
            campout = true;
            outlineBuilder( 34, 29, "woods", -224, 48);
            outlineBuilder( 34, 5, "hotGrass", -195, 48);
            outlineBuilder( 1, 1, "hotGrass", -196, 48);
            outlineBuilder( 6, 1, "hotGrass", -196, 55);
            outlineBuilder( 4, 2, "hotGrass", -197, 60);
            outlineBuilder( 1, 1, "hotGrass", -198, 61);
            outlineBuilder( 4, 1, "hotGrass", -196, 64);
            outlineBuilder( 5, 2, "hotGrass", -197, 70);
            outlineBuilder( 2, 1, "hotGrass", -196, 68);
            outlineBuilder( 3, 1, "hotGrass", -197, 58);
            outlineBuilder( 2, 1, "hotGrass", -196, 77);
        }
        //mapS2W7
        if (Y > -24704 && Y < -13476 && X < 79186 && X > 67501) //X-7
        {
            elevation = 0;
            region = "s2w7";
            campout = true;
            outlineBuilder( 34, 34, "woods", -258, 48);

            outlineBuilder( 1, 25, "brickRoad", -258, 53);
            outlineBuilder( 6, 1, "brickRoad", -233, 48);
        }
        //mapS2W8
        if (Y > -24704 && Y < -13476 && X < 89314 && X > 77652) //X-8
        {
            elevation = 0;
            region = "s2w8";
            campout = true;
            outlineBuilder(34, 34, "woods", -292, 48);

            outlineBuilder( 1, 14, "brickRoad", -272, 53);
            outlineBuilder( 4, 1, "brickRoad", -272, 54);
            outlineBuilder( 1, 8, "brickRoad", -280, 57);
            outlineBuilder( 2, 1, "brickRoad", -280, 58);
            outlineBuilder( 1, 12, "brickRoad", -291, 60);
            outlineBuilder( 1, 1, "brickRoad", -291, 61);
            outlineBuilder( 1, 2, "brickRoad", -292, 62);

        }
        //mapS2W9
        if (Y > -24704 && Y < -13476 && X < 99554 && X > 87882) //X-9
        {
            elevation = 0;
            region = "s2w9";
            campout = true;
            outlineBuilder(34, 34, "woods", -326, 48);

            outlineBuilder( 1, 28, "brickRoad", -320, 62);
            outlineBuilder( 34, 1, "brickRoad", -321, 48);

        }
        //Layer -1 (cold region): elev 0
        //mapS1E1
        if (Y > -14144 && Y < -3328 && X < - 2490 && X > -14114) //X1
        {
            elevation = 0;
            region = "s1e1";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", 14, 14);
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
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 14);
            outlineBuilder( 34, 1, "stonePath", -4, 14);
            //outlineBuilder( 1, 1, "forest", -4, 14);
        }
        // mapS1W1
        if (Y > -14144 && Y < -3328 && X < 17891 && X > 6299) //X-1
        {
            elevation = 0;
            region = "s1w1";
            campout = true;
            outlineBuilder( 34, 34, "crag", -54, 14);
            outlineBuilder( 4, 1, "greenGrass", -22, 16);
            outlineBuilder( 34, 2, "greenGrass", -22, 14);
            outlineBuilder( 1, 1, "greenGrass", -25, 28);
            outlineBuilder( 34, 2, "greenGrass", -22, 14);
            outlineBuilder( 25, 2, "greenGrass", -24, 20);
            outlineBuilder( 3, 3, "greenGrass", -25, 45);
            outlineBuilder( 1, 1, "greenGrass", -26, 47);
        }
        // mapS1W2
        if (Y > -14144 && Y < -3328 && X < 28129 && X > 16474) //X-2
        {
            elevation = 0;
            region = "s1w2";
            campout = true;
            outlineBuilder( 34, 34, "crag", -88, 14);
        }
        // mapS1W3
        if (Y > -14144 && Y < -3328 && X < 38616 && X > 26689) //X-3
        {
            elevation = 0;
            region = "s1w3";
            campout = true;
            outlineBuilder( 34, 34, "crag", -122, 14);
        }
        //mapS1W4
        if (Y > -14144 && Y < -3328 && X < 48510 && X > 36883) //X-4
        {
            elevation = 0;
            region = "s1w4";
            campout = true;
            outlineBuilder( 34, 34, "crag", -156, 14);
            //outlineBuilder( 1, 34, "greenGrass", -156, 14);
        }
        //mapS1W5 //Lethik City
        if (Y > -14144 && Y < -3328 && X < 58680 && X > 47082) //X-5
        {
            elevation = 0;
            region = "s1w5";
            campout = false;

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
            outlineBuilder( 12, 1, "brickRoad", -167, 36);
            if (uniqueChars.vsevolodLDS)
            {
                outlineBuilder( 1, 2, "gritty", -175, 22);
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
            campout = true;
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
        //mapS1W7
        if (Y > -14144 && Y < -3328 && X < 79186 && X > 67501) //X-7
        {
            elevation = 0;
            region = "s1w7";
            campout = true;
            outlineBuilder( 34, 34, "woods", -258, 14);

            outlineBuilder( 1, 9, "brickRoad", -233, 35);
            outlineBuilder( 13, 1, "brickRoad", -233, 35);
        }
        //mapS1W9
        if (Y > -14144 && Y < -3328 && X < 99554 && X > 87882) //X-9
        {
            elevation = 0;
            region = "s1w9";
            campout = true;
            outlineBuilder(34, 34, "woods", -326, 14);
            outlineBuilder( 34, 1, "brickRoad", -321, 14);
        }
        //mapS1E4 Loroka Woods
        if (Y > -14144 && Y < -3328 && X < -33084 && X > -44714) //X4
        {
            elevation = 0;
            region = "s1e4";
            campout = true;
            //outlineBuilder( 34, 34, "outline", 116, 14);
            outlineBuilder( 34, 8, "greenGrass", 116, 14);
            outlineBuilder( 34, 12, "forest", 138, 14);
            outlineBuilder( 34, 14, "sea", 124, 14);
        }
        //mapS1E6
        if (Y > -14144 && Y < -3328 && X < -53489.88731544383 && X > -65110.798814782334) //X6
        {
            elevation = 0;
            region = "s1e6";
            campout = true;
            outlineBuilder( 34, 34, "brightGrass", 184, 14);
        }
        //mapS1E5 Loroka Woods //nirwaden south road
        if (Y > -14144 && Y < -3328 && X < -43290 && X > -54907) //X5
        {
            elevation = 0;
            region = "s1e5";
            campout = true;
            outlineBuilder( 34, 26, "brightGrass", 158, 14);
            outlineBuilder( 34, 8, "forest", 150, 14);
            outlineBuilder( 30, 2, "forest", 150, 14);
            outlineBuilder( 9, 1, "forest", 150, 20);
            outlineBuilder( 5, 1, "forest", 150, 23);
            outlineBuilder( 34, 1, "nirRoad", 158, 14);
            //outlineBuilder( 34, 34, "outline", 150, 14);
        }
        //Layer 0 (cold region): elev 0
        //mapE6
        if (Y > -3919 && Y < 6870 && X < -53489.88731544383 && X > -65110.798814782334) //X6
        {
            elevation = 0;
            region = "e6";
            campout = true;
            outlineBuilder( 34, 34, "brightGrass", 184, -20);
        }
        //mapE5 //Atalin City
        if (Y > -3919 && Y < 6870 && X < -42678 && X > -54937) //X5
        {
            elevation = 0;
            region = "e5";
            campout = false;
            outlineBuilder( 34, 34, "brightGrass", 150, -20);
            //outlineBuilder( 34, 34, "outline", 150, -20);
            outlineBuilder( 3, 4, "forest", 150, 11);
            outlineBuilder( 1, 7, "nirRoad", 150, -3);
            outlineBuilder( 6, 7, "nirRoad", 150, 6);

            outlineBuilder( 3, 1, "nirRoad", 150, 3);
            outlineBuilder( 3, 2, "lomita", 151, 3);
            outlineBuilder( 3, 1, "nirRoad", 153, 3);
            outlineBuilder( 3, 2, "lomita", 154, 3);
            outlineBuilder( 3, 1, "nirRoad", 156, 3);

            outlineBuilder( 3, 7, "nirRoad", 150, -8);
            outlineBuilder( 10, 11, "nirRoad", 150, -3);

            outlineBuilder( 1, 2, "nirRoad", 159, 7);
            outlineBuilder( 7, 1, "nirRoad", 158, 7);

            outlineBuilder( 2, 1, "nirRoad", 150, -5);
            outlineBuilder( 2, 2, "lomita", 151, -5);
            outlineBuilder( 2, 1, "nirRoad", 153, -5);
            outlineBuilder( 2, 2, "lomita", 154, -5);
            outlineBuilder( 2, 1, "nirRoad", 156, -5);

            outlineBuilder( 12, 5, "lomita", 151, -20); //garden
            outlineBuilder( 12, 1, "nirRoad", 153, -20); //garden road
            outlineBuilder( 3, 3, "nirRoad", 152, -15); //garden plaza
            outlineBuilder( 12, 1, "nirRoad", 150, -20); //garden road L
            outlineBuilder( 12, 1, "nirRoad", 156, -20); //garden road R

            outlineBuilder( 1, 3, "nirRoad", 152, -9);

        }
        //mapE4 //Atalin City
        if (Y > -3919 && Y < 6870 && X < -33089 && X > -44725) //X4
        {
            elevation = 0;
            region = "e4";
            campout = false;
            //outlineBuilder( 34, 34, "outline", 116, -20);
            outlineBuilder( 34, 8, "forest", 116, -20);
            outlineBuilder( 33, 12, "brightGrass", 138, -20);
            outlineBuilder( 1, 12, "forest", 138, 13);
            outlineBuilder( 1, 10, "forest", 140, 12);
            outlineBuilder( 34, 14, "sea", 124, -20);

            outlineBuilder( 1, 1, "sea", 123, -20);
            outlineBuilder( 1, 1, "seaCornerBL", 122, -20);
            outlineBuilder( 1, 1, "seaCornerBL", 123, -19);

            outlineBuilder( 1, 1, "seaCornerBR", 138, -20);

            outlineBuilder( 1, 2, "nirDockH", 136, -5);
            outlineBuilder( 1, 2, "nirDockH", 136, -7);
            outlineBuilder( 1, 2, "nirDockH", 136, -1);
            outlineBuilder( 1, 2, "nirDockH", 136, 1);

            outlineBuilder( 1, 8, "stonePath", 116, -3);
            outlineBuilder( 10, 12, "lomita", 138, -7); //orchards
            outlineBuilder( 1, 12, "nirRoad", 138, -3); //main road
            outlineBuilder( 1, 12, "nirRoad", 138, -8); //upper road
            outlineBuilder( 1, 12, "nirRoad", 138, 2); //lower road
            outlineBuilder( 10, 5, "nirRoad", 138, -8);
            outlineBuilder( 1, 14, "nirBridge", 124, -3); //bridge

            outlineBuilder( 3, 1, "nirRoad", 140, 3);
            outlineBuilder( 3, 9, "lomita", 141, 3);
            outlineBuilder( 6, 7, "nirRoad", 140, 6);
            outlineBuilder( 1, 3, "nirRoad", 147, 6);
            outlineBuilder( 4, 3, "lomita", 147, 7);
            outlineBuilder( 1, 3, "nirRoad", 147, 11);
        }
        //mapE3
        if (Y > -3919 && Y < 6870 && X < -22900 && X > -34519) //X3
        {
            elevation = 0;
            region = "e3";
            campout = true;
            //outlineBuilder( 34, 34, "outline", 82, -20);
            outlineBuilder( 34, 34, "forest", 82, -20);
            outlineBuilder( 1, 34, "stonePath", 82, -3);
            outlineBuilder( 1, 1, "sea", 89, 10);
        }
        //mapE2
        if (Y > -3919 && Y < 6870 && X < -12685 && X > -24362) //X2
        {
            elevation = 0;
            region = "e2";
            campout = true;
            outlineBuilder( 34, 34, "forest", 48, -20);
            outlineBuilder( 1, 34, "stonePath", 48, -3);
        }
        //mapE1
        if (Y > -3919 && Y < 6870 && X < - 2490 && X > -14114) //X1
        {
            elevation = 0;
            region = "e1";
            campout = true;
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
            campout = false;
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
            campout = true;

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
        //mapW2
        if (Y > -3919 && Y < 6870 && X < 28129 && X > 16474) //X-2
        {
            elevation = 0;
            region = "w2";
            campout = true;

            outlineBuilder( 34, 34, "crag", -88, -20);
            //outlineBuilder( 34, 1, "greenGrass", -55, -20);

        }
        //mapW3
        if (Y > -3919 && Y < 6870 && X < 38616 && X > 26689) //X-3
        {
            elevation = 0;
            region = "w3";
            campout = true;

            outlineBuilder( 34, 34, "crag", -122, -20);
            //outlineBuilder( 34, 1, "greenGrass", -89, -20);

        }
        //mapW4
        if (Y > -3919 && Y < 6870 && X < 48510 && X > 36883) //X-4
        {
            elevation = 0;
            region = "w4";
            campout = true;

            outlineBuilder( 34, 34, "crag", -156, -20);
            //outlineBuilder( 34, 1, "greenGrass", -123, -20);

        }
        //mapW5
        if (Y > -3919 && Y < 6870 && X < 58680 && X > 47082) //X-5
        {
            elevation = 0;
            region = "w5";
            campout = true;

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

        //mapN1W1
        if (Y > 6290 && Y < 17073 && X < 17891 && X > 6299) //X-1
        {
            elevation = 0;
            region = "n1w1";
            campout = true;

            outlineBuilder(34, 34, "frost", -54, -54);
            outlineBuilder(1, 7, "crag", -49, -21);
            outlineBuilder(1, 3, "crag", -38, -21);
            outlineBuilder(2, 4, "crag", -31, -22);
            outlineBuilder(1, 2, "crag", -27, -21);
        }
        //mapN1
        if (Y > 6290 && Y < 17073 && X < 7726 && X > -3910) //X0
        {
            elevation = 1;
            region = "n1";
            campout = true;
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
        //mapN1E1
        if (Y > 6290 && Y < 17073 && X < -2423 && X > -14153) //X1
        {
            elevation = 0;
            region = "n1e1";
            campout = true;
            outlineBuilder( 34, 34, "frost", 14, -54);

            outlineBuilder( 6, 22, "forest", 26, -26);
            outlineBuilder( 1, 4, "forest", 26, -27);
            outlineBuilder( 1, 2, "forest", 28, -28);
            outlineBuilder( 1, 6, "forest", 39, -27);
            outlineBuilder( 2, 3, "forest", 44, -28);
            outlineBuilder( 1, 8, "forest", 42, -27);

            outlineBuilder( 5, 1, "forest", 25, -25);
            outlineBuilder( 3, 1, "forest", 24, -26);
        }
        //mapN1E2
        if (Y > 6290 && Y < 17073 && X < -12680 && X > -24308) //X2
        {
            elevation = 0;
            region = "n1e2";
            campout = true;
            outlineBuilder( 34, 34, "frost", 48, -54);

            outlineBuilder( 8, 34, "forest", 48, -28);
            outlineBuilder( 1, 9, "forest", 48, -29);
            outlineBuilder( 1, 4, "forest", 50, -30);
            outlineBuilder( 1, 1, "forest", 52, -31);

            outlineBuilder( 1, 6, "forest", 60, -29);
            outlineBuilder( 1, 3, "forest", 62, -30);
            outlineBuilder( 1, 2, "forest", 64, -31);
            outlineBuilder( 1, 1, "forest", 64, -32);

            outlineBuilder( 1, 2, "forest", 74, -29);
            outlineBuilder( 1, 1, "forest", 69, -29);

            outlineBuilder( 2, 3, "forest", 79, -30);
            outlineBuilder( 2, 1, "forest", 80, -32);
        }
        //mapN1E3
        if (Y > 6290 && Y < 17073 && X < -22859 && X > -34534) //X3
        {
            elevation = 0;
            region = "n1e3";
            campout = true;
            outlineBuilder( 34, 34, "frost", 82, -54);
            outlineBuilder( 2, 1, "forest", 82, -29);
            outlineBuilder( 7, 23, "forest", 82, -27);
            outlineBuilder( 1, 8, "forest", 88, -28);
            outlineBuilder( 1, 3, "forest", 90, -29);
            outlineBuilder( 5, 3, "forest", 105, -25);
            outlineBuilder( 4, 4, "forest", 108, -24);
            outlineBuilder( 3, 2, "forest", 112, -23);
            outlineBuilder( 1, 1, "forest", 114, -21);
        }
        //mapN1E4
        if (Y > 6290 && Y < 17073 && X < -33084 && X > -44714) //X4
        {
            elevation = 0;
            region = "n1e4";
            campout = true;
            outlineBuilder( 20, 6, "frost", 116, -54);
            outlineBuilder( 18, 11, "snow", 139, -54);

            outlineBuilder( 14, 6, "frost", 116, -34);
            outlineBuilder( 16, 11, "brightGrass", 139, -36);

            outlineBuilder( 1, 11, "frost", 139, -36);
            outlineBuilder( 2, 10, "frost", 139, -35);
            outlineBuilder( 2, 8, "frost", 140, -33);
            outlineBuilder( 1, 5, "frost", 142, -31);
            outlineBuilder( 1, 2, "frost", 144, -30);

            //outlineBuilder( 34, 34, "outline", 116, -54);
            outlineBuilder( 34, 17, "sea", 122, -54);
            outlineBuilder( 1, 5, "forest", 117, -21);
            outlineBuilder( 1, 2, "forest", 119, -22);

            outlineBuilder( 1, 3, "snow", 141, -36);

            outlineBuilder( 2, 1, "snow", 146, -36);
        }
        //mapN1E5 //Atalin City (castle)
        if (Y > 6290 && Y < 17073 && X < -43292 && X > -54937) //X5
        {
            elevation = 0;
            region = "n1e5";
            campout = false;
            outlineBuilder( 18, 34, "snow", 150, -54);
            outlineBuilder( 14, 34, "brightGrass", 150, -34);
            outlineBuilder( 2, 34, "frost", 150, -36);
            outlineBuilder( 1, 27, "frost", 155, -34);
            outlineBuilder( 1, 3, "frost", 160, -33);
            outlineBuilder( 1, 1, "frost", 168, -33);
            //outlineBuilder( 34, 34, "outline", 150, -54);

            outlineBuilder( 8, 7, "nirRoad", 150, -31); //castle plaza
            outlineBuilder( 4, 5, "lomita", 151, -24); //garden
            outlineBuilder( 4, 1, "nirRoad", 153, -24); //garden road
            outlineBuilder( 4, 1, "nirRoad", 150, -24); //garden road L
            outlineBuilder( 4, 1, "nirRoad", 156, -24); //garden road R

            outlineBuilder( 1, 7, "snow", 152, -36);
            outlineBuilder( 2, 3, "snow", 163, -36);
            outlineBuilder( 1, 2, "snow", 166, -36);
            outlineBuilder( 1, 3, "snow", 174, -36);
        }
        //layer 2 (frosty region): elev 1
        //mapN2
        if (Y > 16445 && Y < 27296 && X < 7726 && X > -3910) //X0
        {
            elevation = 1;
            region = "n2";
            campout = true;
            outlineBuilder(34, 34, "frost", -20, -88);
            outlineBuilder(34, 1, "stonePath", -3, -88);
        }
        //mapN2E1
        if (Y > 16445 && Y < 27296 && X < -2423 && X > -14153) //X1
        {
            elevation = 1;
            region = "n2e1";
            campout = true;
            outlineBuilder(34, 34, "frost", 14, -88);
        }
        //mapN2E2
        if (Y > 16445 && Y < 27296 && X < -12680 && X > -24308) //X2
        {
            elevation = 1;
            region = "n2e2";
            campout = true;
            outlineBuilder(34, 34, "frost", 48, -88);
        }
        //mapN2E3
        if (Y > 16445 && Y < 27296 && X < -22859 && X > -34534) //X3
        {
            elevation = 1;
            region = "n2e3";
            campout = true;
            outlineBuilder(34, 34, "frost", 82, -88);
        }
        //mapN2E4
        if (Y > 16445 && Y < 27296 && X < -33084 && X > -44714) //X4
        {
            elevation = 1;
            region = "n2e4";
            campout = true;
            //outlineBuilder(34, 34, "outline", 116, -88);

            outlineBuilder(1, 24, "sea", 116, -88);
            outlineBuilder(3, 23, "sea", 117, -87);
            outlineBuilder(5, 22, "sea", 118, -84);
            outlineBuilder(5, 21, "sea", 118, -79);
            outlineBuilder(8, 19, "sea", 120, -74); //21
            outlineBuilder(7, 18, "sea", 121, -66); //20
            outlineBuilder(5, 17, "sea", 122, -59); //18

            outlineBuilder(5, 6, "frost", 116, -59);
            outlineBuilder(7, 5, "frost", 116, -66);
            outlineBuilder(8, 4, "frost", 116, -74);
            outlineBuilder(10, 2, "frost", 116, -84);
            outlineBuilder(3, 1, "frost", 116, -87);
            outlineBuilder(9, 10, "snow", 140, -88);
            outlineBuilder(25, 11, "snow", 139, -79);

            outlineBuilder(1, 1, "seaCornerBR", 140, -88);
            outlineBuilder(1, 1, "seaCornerBR", 139, -79);

            outlineBuilder(1, 1, "seaCornerBL", 121, -59);
            outlineBuilder(1, 1, "seaCornerBL", 120, -66);
            outlineBuilder(1, 1, "seaCornerBL", 119, -74);
            outlineBuilder(1, 1, "seaCornerBL", 117, -84);
            outlineBuilder(1, 1, "seaCornerBL", 116, -87);

            outlineBuilder(1, 6, "searock", 142, -88);
            outlineBuilder(2, 4, "searock", 143, -87);
            outlineBuilder(1, 2, "searock", 144, -85);
        }
        //layer 3 (frosty region): elev 1
        //mapN3
        if (Y > 26650 && Y < 37456 && X < 7726 && X > -3910) //X0
        {
            elevation = 1;
            region = "n3";
            campout = true;
            outlineBuilder(34, 34, "frost", -20, -122);
            outlineBuilder(34, 1, "stonePath", -3, -122);
        }
        //mapN3E1
        if (Y > 26650 && Y < 37456 && X < -2423 && X > -14153) //X1
        {
            elevation = 1;
            region = "n3e1";
            campout = true;
            outlineBuilder(34, 34, "frost", 14, -122);
        }
        //mapN3E2 //Jalsirsted (hamlet)
        if (Y > 26650 && Y < 37456 && X < -12680 && X > -24308) //X2
        {
            elevation = 1;
            region = "n3e2";
            campout = true;
            outlineBuilder(34, 34, "frost", 48, -122);
            outlineBuilder(1, 1, "farmland", 62, -99);
            outlineBuilder(1, 1, "farmland", 64, -96);
        }
        //mapN3E3
        if (Y > 26650 && Y < 37456 && X < -22859 && X > -34534) //X3
        {
            elevation = 1;
            region = "n3e3";
            campout = true;
            //outlineBuilder(34, 34, "outline", 82, -122);

            outlineBuilder(11, 4, "sea", 112, -122);

            outlineBuilder(1, 3, "sea", 113, -111);
            outlineBuilder(4, 1, "sea", 115, -110);

            outlineBuilder(34, 26, "frost", 82, -122);

            outlineBuilder(18, 1, "frost", 108, -106);
            outlineBuilder(1, 2, "frost", 109, -104);
            outlineBuilder(1, 2, "frost", 110, -102);
            outlineBuilder(1, 4, "frost", 110, -101);
            outlineBuilder(4, 5, "frost", 110, -101);
            outlineBuilder(13, 5, "frost", 110, -101);
            outlineBuilder(11, 1, "frost", 115, -99);
            outlineBuilder(16, 1, "frost", 109, -104);

            outlineBuilder(12, 8, "searock", 104, -122);
            outlineBuilder(6, 4, "searock", 100, -122);
            outlineBuilder(3, 2, "searock", 102, -116);
            outlineBuilder(2, 1, "searock", 103, -113);

            outlineBuilder(4, 1, "searock", 99, -122);
            outlineBuilder(4, 8, "searock", 107, -110);
            outlineBuilder(2, 7, "searock", 109, -106);

            outlineBuilder(1, 1, "searock", 112, -111);
            outlineBuilder(1, 1, "seaCornerBL", 112, -111);
            outlineBuilder(1, 1, "seaCornerBL", 114, -110);

            outlineBuilder(1, 4, "searock", 111, -104);
            outlineBuilder(1, 6, "searock", 110, -103);
            outlineBuilder(1, 1, "seaCornerBL", 115, -103);
            outlineBuilder(1, 1, "sea", 115, -104);

            outlineBuilder(2, 2, "searock", 114, -102);
            outlineBuilder(4, 1, "searock", 115, -100);
            outlineBuilder(1, 2, "searock", 112, -102);
            outlineBuilder(1, 1, "seaCornerBL", 113, -103);
        }
        //mapN3E4
        if (Y > 26650 && Y < 37456 && X < -33084 && X > -44714) //X4
        {
            elevation = 1;
            region = "n3e4";
            campout = true;
            //outlineBuilder(34, 34, "outline", 116, -122);

            outlineBuilder(34, 25, "sea", 116, -122);

            outlineBuilder(3, 7, "searock", 143, -122);
            outlineBuilder(1, 1, "seaCornerBR", 143, -122);
            outlineBuilder(22, 8, "searock", 142, -119);
            outlineBuilder(1, 1, "seaCornerBR", 142, -119);
            outlineBuilder(9, 9, "searock", 141, -97);
            outlineBuilder(1, 1, "seaCornerBR", 141, -97);

            outlineBuilder(3, 1, "sea", 142, -122);
            outlineBuilder(25, 1, "sea", 141, -122);
        }
        //layer 4 (frosty region): elev 1
        //mapN4W1
        if (Y > 36878 && Y < 47662 && X < 17903 && X > 6294) //North Coast//X-1
        {
            elevation = 1;
            region = "n4w1";
            campout = true;
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
            campout = true;
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
            campout = true;
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
            campout = true;
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

            outlineBuilder(4, 1, "stonePath", 65, -148);

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
            campout = true;
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
        //mapN4E4
        if (Y > 36878 && Y < 47662 && X < -33084 && X > -44714) //rivermouth//X4
        {
            elevation = 1;
            region = "n4e4";
            campout = true;
            //outlineBuilder(34, 34, "outline", 116, -156);

            outlineBuilder(34, 30, "sea", 116, -156);

            outlineBuilder(27, 4, "sea", 146, -156);
            outlineBuilder(1, 3, "sea", 146, -129);
            outlineBuilder(1, 1, "sea", 146, -128);
            outlineBuilder(1, 1, "sea", 147, -128);
            outlineBuilder(1, 1, "sea", 146, -127);
            outlineBuilder(1, 1, "sea", 145, -126);
            outlineBuilder(1, 1, "shallow", 148, -128);
            outlineBuilder(1, 1, "shallow", 147, -127);
            outlineBuilder(1, 1, "shallow", 146, -126);
            outlineBuilder(1, 2, "shallow", 144, -125);
            outlineBuilder(2, 1, "shallow", 144, -124);
            outlineBuilder(2, 1, "searock", 149, -129);
            outlineBuilder(1, 2, "searock", 148, -127);
            outlineBuilder(4, 3, "searock", 147, -126);
            outlineBuilder(3, 1, "searock", 146, -125);
            outlineBuilder(2, 1, "searock", 145, -124);
            outlineBuilder(1, 1, "seaCornerBR", 146, -125);
            outlineBuilder(1, 1, "seaCornerBR", 147, -126);
            outlineBuilder(1, 1, "seaCornerBR", 148, -127);
            outlineBuilder(1, 1, "seaCornerBR", 149, -129);
        }
        //layer 5 (frosty region): elev 1
        //mapN5W1
        if (Y > 47071 && Y < 57864 && X < 17903 && X > 6294)//North Sea//X-1
        {
            elevation = 1;
            region = "n5w1";
            campout = true;
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
            campout = true;
            outlineBuilder(34, 34, "sea", -20, -190);
        }
        //mapN5E1
        if (Y > 47071 && Y < 57864 && X < -2423 && X > -14153)//North Sea//X1
        {
            elevation = 1;
            region = "n5e1";
            campout = true;
            outlineBuilder(34, 34, "sea", 14, -190);
        }
        //mapN5E2
        if (Y > 47071 && Y < 57864 && X < -2423 && X < -12680)//North Sea//X2
        {
            elevation = 1;
            region = "n5e2";
            campout = true;
            outlineBuilder(34, 34, "sea", 48, -190);
        }
        //mapN5E3
        if (Y > 47071 && Y < 57864 && X < -22859 && X > -34534)//North Sea//X3
        {
            elevation = 1;
            region = "n5e3";
            campout = true;
            outlineBuilder(34, 34, "sea", 82, -190);
        }
        //mapN5E4
        if (Y > 47071 && Y < 57864 && X < -33084 && X > -44714)//North Sea//X4
        {
            elevation = 1;
            region = "n5e4";
            campout = true;
            outlineBuilder(34, 34, "sea", 116, -190);
        }
    } //ALTERNATE DIMENSIONS
    else if (map == "sagesCache") //This is a dungeon found in map W3
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "sagesCache";
        campout = true;
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
    else if (map == "sagesTrap")
    {
        player.dmx = map;
        player.underground = false;
        elevation = -5; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "sagesTrap";
        campout = true;

        outlineBuilder( 80, 80, "molten", -40, -40);
    }
    else if (map == "skriatok")
    {
        player.dmx = map;
        player.underground = false;
        elevation = 0; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "skriatok";
        campout = true;

        if (skriatokX > 128465)
        {
            outlineBuilder(90, 90, "mistywoods", -45 + Math.round(skriatokX / 300) * -1, -45 + Math.round(skriatokY / 300) * -1);
        }
        else if (skriatokX > 27192)
        {
            outlineBuilder(90, 90, "woods", -45 + Math.round(skriatokX / 300) * -1, -45 + Math.round(skriatokY / 300) * -1);
        }
        else
        {
            outlineBuilder(90, 90, "forest", -45 + Math.round(skriatokX / 300) * -1, -45 + Math.round(skriatokY / 300) * -1);
        }
    }
    else if (map == "olkrinCave") //This is a dungeon found in map W3
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "olkrinCave";
        campout = true;
        //starting chamber
        outlineBuilder( 2, 4, "rock", 0, 0);
        outlineBuilder( 2, 2, "rock", 1, 2);
        outlineBuilder( 1, 1, "rock", 3, -1);
    }
    else if (map == "ansetEggRoom")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "ansetEggRoom";
        campout = false;
        //starting chamber
        outlineBuilder( 2, 2, "cephrianTile", 0, 0);
    }
    else if (map == "lethikCityPrison")
    {
        player.dmx = map;
        player.underground = false;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "lethikCityPrison";
        campout = false;
        //starting chamber
        outlineBuilder( 2, 4, "dungeon", 0, 0);
    }
    else if (map == "venningCityPrison")
    {
        player.dmx = map;
        player.underground = false;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "venningCityPrison";
        campout = false;
        //starting chamber
        outlineBuilder( 2, 2, "dungeon", 0, 0);
    }
    else if (map == "cranheimSewer")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "cranheimSewer";
        campout = true;
        //starting chamber
        outlineBuilder(2, 1, "thenganBrick", 2, 1); //start
        outlineBuilder(1, 1, "thenganBrick", 1, 2);
        outlineBuilder(1, 1, "thenganBrick", 3, 2);
        outlineBuilder(1, 1, "sewage", 1, 1);
        outlineBuilder(1, 1, "sewage", 3, 1);
        outlineBuilder(20, 1, "thenganBrick", 0, -17);
        outlineBuilder(20, 1, "thenganBrick", 4, -17);

        outlineBuilder(14, 1, "sewage", 2, -17);
        outlineBuilder(3, 1, "sewage", 2, -2);

        outlineBuilder(18, 1, "sewage", 1, -17);
        outlineBuilder(18, 1, "sewage", 3, -17);

        outlineBuilder(1, 30, "sewage", -4, -20);
        outlineBuilder(1, 6, "sewage", -4, -19);
        outlineBuilder(1, 23, "sewage", 3, -19);
        outlineBuilder(1, 29, "sewage", -4, -18);

        outlineBuilder(5, 2, "thenganBrick", -6, -21);

        outlineBuilder(1, 2, "thenganBrick", -4, -21);
        outlineBuilder(1, 4, "thenganBrick", -4, -17);

        outlineBuilder(1, 1, "thenganBrick", 2, -3);

        outlineBuilder(1, 1, "thenganBrick", 2, -19);

        outlineBuilder(8, 3, "sewage", -2, -28);
        outlineBuilder(7, 1, "thenganBrick", -3, -28);
        outlineBuilder(8, 1, "thenganBrick", 1, -28);

        outlineBuilder(1, 24, "thenganBrick", 2, -21);
        outlineBuilder(4, 3, "thenganBrick", 26, -21);
        outlineBuilder(1, 2, "sewage", 26, -19);
        outlineBuilder(1, 21, "thenganBrick", 5, -17);
        outlineBuilder(1, 1, "thenganBrick", 25, -18);

        outlineBuilder(3, 1, "sewage", 28, -21);

        outlineBuilder(2, 2, "dungeon", 27, -17);

        //sewer junky hangout
        outlineBuilder(2, 10, "sewage", 4, -8);
        outlineBuilder(6, 1, "sewage", 13, -6);
        outlineBuilder(6, 1, "sewage", 8, -6);
        outlineBuilder(1, 5, "sewage", 14, -8);
        outlineBuilder(2, 2, "sewage", 17, -10);
        outlineBuilder(2, 4, "sewage", 13, 0);

        outlineBuilder(1, 3, "thenganBrick", 5, -6);
        outlineBuilder(6, 1, "thenganBrick", 7, -5);
        outlineBuilder(2, 2, "thenganBrick", 8, 0);
        outlineBuilder(6, 1, "thenganBrick", 9, -6);
        outlineBuilder(1, 3, "thenganBrick", 10, -6);
        outlineBuilder(8, 1, "thenganBrick", 12, -5);

        outlineBuilder(1, 5, "thenganBrick", 13, 2);
        outlineBuilder(3, 1, "thenganBrick", 17, -1);

        outlineBuilder(1, 3, "thenganBrick", 14, -1);
        outlineBuilder(6, 1, "thenganBrick", 14, -7);
        outlineBuilder(2, 6, "thenganBrick", 15, -7);
        outlineBuilder(5, 2, "thenganBrick", 19, -11);
        outlineBuilder(1, 2, "thenganBrick", 17, -11);
        outlineBuilder(3, 2, "thenganBrick", 15, -11);

        outlineBuilder(1, 9, "thenganBrick", 5, -9);
        outlineBuilder(2, 1, "thenganBrick", 14, -10);

        outlineBuilder(1, 1, "thenganBrick", 15, -2);
        outlineBuilder(1, 1, "thenganBrick", -1, -16);
    }
    else if (map == "atalinDrugLab")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "atalinDrugLab";
        campout = true;
        //starting chamber
        outlineBuilder( 1, 1, "dockV", 0, 0);
    }
    else if (map == "estolTunnel")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "estolTunnel";
        campout = true;
        //starting chamber
        outlineBuilder( 9, 1, "dockV", 0, 0);
        outlineBuilder( 1, 2, "dockV", 1, 0);
        outlineBuilder( 1, 13, "dockV", -12, 9);
        outlineBuilder( 4, 1, "dockV", -12, 5);
        outlineBuilder( 3, 1, "dockV", -7, 10);
        outlineBuilder( 3, 1, "dockV", -7, 13);
        outlineBuilder( 4, 3, "dockV", -8, 14);
    }
    else if (map == "atalinCityPrison")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "atalinCityPrison";
        campout = false;
        //starting chamber
        outlineBuilder( 1, 1, "dockH", 0, 0);
    }
    else if (map == "atalinTortureChamber")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "atalinTortureChamber";
        campout = false;
        //starting chamber
        outlineBuilder(1, 1, "dockH", 0, 0);
    }
    else if (map == "mrbHQ")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -3;
        region = "mrbHQ";
        campout = false;
        //starting chamber
        elevation = -3;
        region = "mrbHQ";
        outlineBuilder( 2, 3, "lab", -20, 776);
        outlineBuilder( 6, 1, "lab", -19, 778);
        outlineBuilder( 1, 1, "lab", -18, 780);
        outlineBuilder( 2, 2, "lab", -17, 779);
        outlineBuilder( 3, 3, "lab", -20, 784);
        outlineBuilder( 1, 6, "lab", -25, 782);
        outlineBuilder( 3, 1, "lab", -24, 779);
        outlineBuilder( 2, 1, "lab", -23, 779);
        outlineBuilder( 3, 2, "lab", -27, 781);
        outlineBuilder( 1, 1, "lab", -28, 782);
        outlineBuilder( 3, 3, "lab", -31, 781);
        outlineBuilder( 50, 1, "lab", -30, 784);
        outlineBuilder( 1, 50, "lab", -81, 782);
        outlineBuilder( 50, 1, "lab", -30, 731);

        outlineBuilder( 1, 1, "lab", -33, 781);
        outlineBuilder( 1, 1, "lab", -33, 783);
        outlineBuilder( 1, 1, "lab", -35, 781);
        outlineBuilder( 1, 1, "lab", -35, 783);
        outlineBuilder( 1, 1, "lab", -37, 781);
        outlineBuilder( 1, 1, "lab", -37, 783);
        outlineBuilder( 1, 1, "lab", -39, 781);
        outlineBuilder( 1, 1, "lab", -39, 783);
        outlineBuilder( 1, 1, "lab", -41, 781);
        outlineBuilder( 1, 1, "lab", -41, 783);
        outlineBuilder( 1, 1, "lab", -43, 781);
        outlineBuilder( 1, 1, "lab", -43, 783);
        outlineBuilder( 1, 1, "lab", -45, 781);
        outlineBuilder( 1, 1, "lab", -45, 783);
        outlineBuilder( 1, 1, "lab", -47, 781);
        outlineBuilder( 1, 1, "lab", -47, 783);
        outlineBuilder( 1, 1, "lab", -49, 781);
        outlineBuilder( 1, 1, "lab", -49, 783);
        outlineBuilder( 1, 1, "lab", -51, 781);
        outlineBuilder( 1, 1, "lab", -51, 783);
        outlineBuilder( 1, 1, "lab", -53, 781);
        outlineBuilder( 1, 1, "lab", -53, 783);
        outlineBuilder( 1, 1, "lab", -55, 781);
        outlineBuilder( 1, 1, "lab", -55, 783);
        outlineBuilder( 1, 1, "lab", -57, 781);
        outlineBuilder( 1, 1, "lab", -57, 783);
        outlineBuilder( 1, 1, "lab", -59, 781);
        outlineBuilder( 1, 1, "lab", -59, 783);
        outlineBuilder( 1, 1, "lab", -61, 781);
        outlineBuilder( 1, 1, "lab", -61, 783);
        outlineBuilder( 1, 1, "lab", -63, 781);
        outlineBuilder( 1, 1, "lab", -63, 783);

        //Skeleton containment cell
        outlineBuilder( 1, 1, "lab", -31, 785);
        outlineBuilder( 2, 1, "lab", -32, 785);
        outlineBuilder( 2, 2, "rock", -34, 785);

        //Hydra containment cell
        outlineBuilder( 1, 1, "lab", -31, 790);
        outlineBuilder( 2, 1, "lab", -32, 790);
        outlineBuilder( 2, 2, "swamp", -34, 790);

        //Mimic containment cell
        outlineBuilder( 1, 1, "lab", -29, 790);
        outlineBuilder( 2, 1, "lab", -28, 790);
        outlineBuilder( 2, 1, "vardanianStone", -27, 790);
        outlineBuilder( 1, 1, "vardanianWetland", -26, 790);
        outlineBuilder( 1, 1, "swamp", -26, 791);

        //Venandi containment cell
        outlineBuilder( 1, 1, "lab", -31, 795);
        outlineBuilder( 2, 1, "lab", -32, 795);
        outlineBuilder( 2, 2, "jungle", -34, 795);

        //Xormid containment cell
        outlineBuilder( 1, 1, "lab", -29, 795);
        outlineBuilder( 2, 1, "lab", -28, 795);
        outlineBuilder( 2, 2, "rock", -27, 795);

        //Mandrake containment cell
        outlineBuilder( 1, 1, "lab", -31, 778);
        outlineBuilder( 2, 1, "lab", -32, 777);
        outlineBuilder( 1, 2, "vardanianGrass", -34, 777);
        outlineBuilder( 1, 2, "vardanianWetland", -34, 778);

        //Neev containment cell
        outlineBuilder( 1, 1, "lab", -29, 773);
        outlineBuilder( 2, 1, "lab", -28, 772);
        outlineBuilder( 2, 2, "woods", -27, 772);

        //changeling containment cell
        outlineBuilder( 1, 1, "lab", -31, 773);
        outlineBuilder( 2, 1, "lab", -32, 772);
        outlineBuilder( 2, 2, "forest", -34, 772);
    }
    else if (map == "venningMineshaft")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "venningMineshaft";
        campout = true;
        //starting chamber
        outlineBuilder( 6, 1, "rock", 0, -5);
        outlineBuilder( 3, 1, "rock", 1, -6);
        outlineBuilder( 1, 14, "rock", -12, -7);
        outlineBuilder( 2, 8, "rock", -17, -9);
        outlineBuilder( 8, 1, "rock", -17, -17);
        outlineBuilder( 2, 1, "rock", -18, -17);
        outlineBuilder( 3, 5, "rock", -20, -20);
        outlineBuilder( 2, 3, "rock", -23, -19);
        outlineBuilder( 3, 3, "rock", -15, -21);
    }
    else if (map == "arcusMine")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "arcusMine";
        campout = false;
        //starting chamber
        outlineBuilder( 6, 1, "rock", 0, 5);
        outlineBuilder( 3, 2, "rock", -1, -3);
        outlineBuilder( 1, 1, "rock", 0, 0);
        outlineBuilder( 1, 4, "rock", -4, -4);
        outlineBuilder( 2, 2, "rock", -5, -5);
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
                    else if (terrain == "shallow" || terrain == "dockV" || terrain == "dockH" || terrain == "nirDockH" || terrain == "nirDockV" || terrain == "seaCornerBR" || terrain == "seaCornerBL" || terrain == "seaCornerTR" || terrain == "seaCornerTL")
                    {
                        over("landing", j, i, extraX, extraY);
                    }
                    else if (terrain == "nirBridge")
                    {
                        if (player.weaponEquipped != "swimming" || player.weaponEquipped != "boat" || player.water == false || player.land == true)
                        {
                            over("tollBridge", j, i, extraX, extraY);
                        }
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
                else if (terrain == "lab")
                {
                    XXX.drawImage(labEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
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
                else if (terrain == "nirRoad")
                {
                    XXX.drawImage(nirRoad, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "nirBridge")
                {
                    if (player.land == false && player.water == true && player.weaponEquipped == "swimming" || player.weaponEquipped == "boat" && player.water == true && player.land == false)
                    {
                        XXX.save();
                        XXX.globalAlpha = 0.5;
                        XXX.drawImage(nirRoad, (j - 1) * 300 + (extraX * 300) + X - 10, (i - 1) * 300 + (extraY * 300) + Y - 10, 320, 320);
                        XXX.restore();
                    }
                    else
                    {
                        over("tollBridge", j, i, extraX, extraY);
                        XXX.drawImage(nirRoad, (j - 1) * 300 + (extraX * 300) + X - 10, (i - 1) * 300 + (extraY * 300) + Y - 10, 320, 320);
                    }
                }
                else if (terrain == "nirDockV")
                {
                    over("landing", j, i, extraX, extraY);
                    XXX.drawImage(nirDockV, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "nirDockH")
                {
                    over("landing", j, i, extraX, extraY);
                    XXX.drawImage(nirDockH, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
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
                else if (terrain == "lomita")
                {
                    XXX.drawImage(lomita, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
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
                else if (terrain == "harshGrass")
                {
                    XXX.drawImage(harshGrass, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "crag")
                {
                    XXX.drawImage(rockyFlatEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "rock")
                {
                    XXX.drawImage(rockEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "dirt")
                {
                    XXX.drawImage(wormDirtEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "mudFlats")
                {
                    XXX.drawImage(dirtEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "gritty")
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
                else if (terrain == "mistywoods")
                {
                    XXX.drawImage(mistywoodsEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "savannah")
                {
                    XXX.drawImage(savannahEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "savannahDirt")
                {
                    XXX.drawImage(savannahDirtEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "vardanianStone")
                {
                    XXX.drawImage(vardanianStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "vardanianForest")
                {
                    XXX.drawImage(vardanianForest, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "vardanianWoods")
                {
                    XXX.drawImage(vardanianWoods, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "vardanianGrass")
                {
                    XXX.drawImage(vardanianGrass, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "vardanianWetland")
                {
                    XXX.drawImage(vardanianWetland, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "cephrianRoad")
                {
                    XXX.drawImage(cephRoad, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "cephrianTile")
                {
                    XXX.drawImage(cephTile, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "zetianStone")
                {
                    XXX.drawImage(zetianStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "desert")
                {
                    XXX.drawImage(dunesEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "redDesert")
                {
                    XXX.drawImage(redEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "prairy")
                {
                    XXX.drawImage(prairyEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "vardanianMire")
                {
                    XXX.drawImage(vardanianMire, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "shallowSwamp")
                {
                    over("landing", j, i, extraX, extraY);
                    XXX.drawImage(swampEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
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
                else if (terrain == "swamp")
                {
                    over("sea", j, i, extraX, extraY);

                    XXX.drawImage(swampEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "swampTR")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(swampTR, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "swampTL")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(swampTL, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "swampBR")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(swampBR, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "swampBL")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(swampBL, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "sewage")
                {
                    over("sewer", j, i, extraX, extraY);
                    XXX.drawImage(sewageEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
            }
        }
    }
}
