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
        //Layer 43 (desert region): elev -5
        //mapS43W3
        if (Y > -442506.1818652715 && Y < -431728.14560109196 && X < 38616 && X > 26689) //X-3
        {
            elevation = -5;
            region = "s43w3";
            campout = true;
            outlineBuilder( 34, 34, "redDesert", -122, 1442);
        }
        //Layer 42 (desert region): elev -5
        //mapS42W3
        if (Y > -432300.7512061376 && Y < -421526.0353835158 && X < 38616 && X > 26689) //X-3
        {
            elevation = -5;
            region = "s42w3";
            campout = true;
            outlineBuilder( 34, 34, "desert", -122, 1408);
        }
        //Layer 41 (desert region): elev -5
        //mapS41W3 //Sairch (town)
        if (Y > -422129.84792075714 && Y < -411311.1793450688 && X < 38616 && X > 26689) //X-3
        {
            elevation = -5;
            region = "s41w3";
            campout = false;
            outlineBuilder( 34, 34, "redDesert", -122, 1374);
        }
        //Layer 40 (desert region): elev -5
        //mapS40W3
        if (Y > -411905.7400827678 && Y < -401123.0117133992 && X < 38616 && X > 26689) //X-3
        {
            elevation = -5;
            region = "s40w3";
            campout = true;
            outlineBuilder( 34, 34, "desert", -122, 1340);
        }
        //Layer 39 (hot tropical region): elev -4
        //mapS39W3
        if (Y > -401726.522144297 && Y < -390931.79184541304 && X < 38616 && X > 26689) //X-3
        {
            elevation = -4;
            region = "s39w3";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -122, 1306);
        }
        //Layer 38 (hot tropical region): elev -4
        //mapS38W3
        if (Y > -391528.9538407116 && Y < -380736.5971355503 && X < 38616 && X > 26689) //X-3
        {
            elevation = -4;
            region = "s38w3";
            campout = true;
            outlineBuilder( 34, 34, "outline", -122, 1272);
        }
        //Layer 37 (hot tropical region): elev -4
        //mapS37W3
        if (Y > -381318.58715533663 && Y < -370497.12971439585 && X < 38616 && X > 26689) //X-3
        {
            elevation = -4;
            region = "s37w3";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -122, 1238);
        }
        //Layer 36 (hot tropical region): elev -4
        //mapS36W3
        if (Y > -371125.682407676 && Y < -360337.4594920414 && X < 38616 && X > 26689) //X-3
        {
            elevation = -4;
            region = "s36w3";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -122, 1204);
        }
        //Layer 35 (hot tropical region): elev -4
        //mapS35W3
        if (Y > -360913 && Y < -350103 && X < 38616 && X > 26689) //X-3
        {
            elevation = -4;
            region = "s35w3";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -122, 1170);
        }
        //Layer 34 (hot tropical region): elev -4
        //mapS34E2
        if (Y > -350716 && Y < -339932 && X < -2423 && X < -12680) //X2
        {
            elevation = -4;
            region = "s34e2";
            campout = true;
            outlineBuilder( 34, 34, "prairy", 48, 1136);
            outlineBuilder(1, 34, "cephrianRoad", 48, 1143);
        }
        //mapS34E1
        if (Y > -350716 && Y < -339932 && X < - 2490 && X > -14114) //X1
        {
            elevation = -4;
            region = "s34e1";
            campout = true;
            outlineBuilder( 34, 34, "prairy", 14, 1136);
            outlineBuilder(1, 34, "cephrianRoad", 14, 1143);

        }
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
        //mapS34W2
        if (Y > -350716 && Y < -339932 && X < 28129 && X > 16474) //X-2
        {
            elevation = -4;
            region = "s34w2";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -88, 1136);
            outlineBuilder(1, 34, "cephrianRoad", -88, 1149);
        }
        //mapS34W3
        if (Y > -350716 && Y < -339932 && X < 38616 && X > 26689) //X-3
        {
            elevation = -4;
            region = "s34w3";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -122, 1136);
            outlineBuilder(1, 34, "cephrianRoad", -122, 1149);
        }
        //Layer 33 (hot tropical region): elev -4
        //mapS33E1
        if (Y > -340527 && Y < -329725 && X < - 2490 && X > -14114) //X1
        {
            elevation = -4;
            region = "s33e1";
            campout = true;
            outlineBuilder( 34, 34, "prairy", 14, 1102);
        }
        //mapS33
        if (Y > -340527 && Y < -329725 && X < 7687 && X > - 3901) //X0
        {
            elevation = -4;
            region = "s33";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -20, 1102);
        }
        //mapS33W1
        if (Y > -340527 && Y < -329725 && X < 17891 && X > 6299) //X-1
        {
            elevation = -4;
            region = "s33w1";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -54, 1102);
        }
        //Layer 32 (hot tropical region): elev -4
        //mapS32
        if (Y > -330303.19 && Y < -319526 && X < 7687 && X > - 3901) //X0
        {
            elevation = -4;
            region = "s32";
            campout = true;
            outlineBuilder( 34, 34, "prairy", -20, 1068);

            outlineBuilder(2, 7, "jungle", -19, 1068);
            outlineBuilder(1, 4, "jungle", -11, 1068);
            outlineBuilder(2, 5, "jungle", -5, 1068);
            outlineBuilder(1, 6, "jungle", 2, 1068);
            outlineBuilder(1, 3, "jungle", 10, 1068);

            outlineBuilder(1, 3, "jungle", -17, 1070);
            outlineBuilder(1, 2, "jungle", -10, 1069);
            outlineBuilder(1, 2, "jungle", -2, 1070);
            outlineBuilder(2, 4, "jungle", 5, 1069);

            outlineBuilder(1, 1, "jungle", 10, 1069);
            outlineBuilder(1, 4, "jungle", 4, 1071);
        }
        //Layer 31 (tropical region): elev -3
        //mapS31
        if ( Y > -320122.8 && Y < -309321.7 && X < 7687 && X > - 3901) //X0
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
            outlineBuilder( 34, 34, "jungle", -20, 1000);
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
        //mapS28W32  (tropical region): elev -3
        if (Y > -289573.87 && Y < -278703.92 && X < 334130 && X > 322464) //X32
        {
            elevation = -3;
            region = "s28w32";
            campout = true;
            outlineBuilder(34, 34, "gladeGrass", -1108, 932);

            outlineBuilder(8, 1, "glade", -1108, 941);
            outlineBuilder(6, 1, "glade", -1107, 941);
            outlineBuilder(3, 1, "glade", -1106, 944);
            outlineBuilder(2, 15, "glade", -1105, 945);
            outlineBuilder(1, 10, "glade", -1099, 944);
            outlineBuilder(2, 9, "glade", -1098, 942);
            outlineBuilder(1, 4, "glade", -1093, 941);
            outlineBuilder(3, 2, "glade", -1089, 940);
            outlineBuilder(1, 3, "glade", -1088, 939);
            outlineBuilder(2, 8, "glade", -1089, 937);
            outlineBuilder(1, 3, "glade", -1085, 936);
            outlineBuilder(1, 1, "glade", -1107, 947);
            outlineBuilder(1, 14, "glade", -1103, 947);
            outlineBuilder(1, 14, "glade", -1104, 948);
            outlineBuilder(1, 12, "glade", -1102, 949);
            outlineBuilder(1, 1, "glade", -1090, 946);
            outlineBuilder(1, 7, "glade", -1102, 950);
            outlineBuilder(1, 3, "glade", -1094, 950);
            outlineBuilder(1, 8, "glade", -1103, 951);
            outlineBuilder(2, 5, "glade", -1101, 952);
            outlineBuilder(1, 5, "glade", -1100, 954);
            outlineBuilder(1, 9, "glade", -1100, 955);
            outlineBuilder(1, 12, "glade", -1101, 956);
            outlineBuilder(1, 2, "glade", -1100, 957);
            outlineBuilder(2, 2, "glade", -1091, 957);
            outlineBuilder(1, 7, "glade", -1101, 932);
            outlineBuilder(5, 7, "glade", -1103, 933);
            outlineBuilder(1, 1, "glade", -1097, 934);
            outlineBuilder(1, 7, "glade", -1104, 938);
            outlineBuilder(1, 4, "glade", -1105, 939);
            outlineBuilder(1, 3, "glade", -1106, 940);
            outlineBuilder(1, 1, "glade", -1105, 941);
            outlineBuilder(11, 1, "glade", -1075, 955);
            outlineBuilder(10, 2, "glade", -1077, 956);
            outlineBuilder(9, 2, "glade", -1079, 957);
            outlineBuilder(8, 1, "glade", -1080, 958);
            outlineBuilder(7, 1, "glade", -1081, 959);
            outlineBuilder(3, 3, "glade", -1084, 963);
            outlineBuilder(2, 1, "glade", -1085, 963);
            outlineBuilder(1, 1, "glade", -1086, 964);
            outlineBuilder(2, 1, "glade", -1083, 958);
            outlineBuilder(5, 1, "glade", -1082, 956);
            outlineBuilder(1, 2, "glade", -1081, 956);
            outlineBuilder(1, 1, "glade", -1080, 955);
        }
        //mapS28W33  (tropical region): elev -3
        if (Y > -289573.87 && Y < -278703.92 && X < 344333 && X > 332640) //X33
        {
            elevation = -3;
            region = "s28w33";
            campout = true;
            outlineBuilder( 34, 34, "gladeGrass", -1142, 932);

            outlineBuilder(1, 8, "vardanianWetlands", -1142, 932);
            outlineBuilder(1, 6, "vardanianWetlands", -1142, 933);
            outlineBuilder(1, 2, "vardanianWetlands", -1142, 934);

            outlineBuilder(1, 4, "glade", -1114, 964);
            outlineBuilder(1, 8, "glade", -1117, 965);

            outlineBuilder(1, 1, "glade", -1115, 932);
            outlineBuilder(2, 1, "glade", -1114, 932);
            outlineBuilder(7, 1, "glade", -1138, 936);
            outlineBuilder(4, 1, "glade", -1139, 937);
            outlineBuilder(1, 1, "glade", -1140, 938);
            outlineBuilder(4, 1, "glade", -1137, 938);
            outlineBuilder(3, 1, "glade", -1136, 939);
            outlineBuilder(4, 1, "glade", -1135, 939);
            outlineBuilder(5, 1, "glade", -1134, 940);
            outlineBuilder(6, 1, "glade", -1133, 940);
            outlineBuilder(2, 1, "glade", -1132, 942);
            outlineBuilder(2, 1, "glade", -1126, 946);
            outlineBuilder(4, 1, "glade", -1125, 945);
            outlineBuilder(6, 2, "glade", -1124, 944);
            outlineBuilder(7, 1, "glade", -1122, 944);
            outlineBuilder(10, 1, "glade", -1121, 940);
            outlineBuilder(11, 1, "glade", -1120, 938);
            outlineBuilder(12, 1, "glade", -1119, 937);
            outlineBuilder(12, 1, "glade", -1118, 938);
            outlineBuilder(11, 1, "glade", -1117, 938);
            outlineBuilder(7, 1, "glade", -1116, 939);
            outlineBuilder(6, 1, "glade", -1115, 938);
            outlineBuilder(5, 1, "glade", -1114, 938);
            outlineBuilder(4, 1, "glade", -1113, 938);
            outlineBuilder(6, 1, "glade", -1112, 937);
            outlineBuilder(12, 1, "glade", -1111, 936);
            outlineBuilder(11, 1, "glade", -1110, 936);
            outlineBuilder(11, 1, "glade", -1109, 938);
            outlineBuilder(2, 1, "glade", -1112, 945);
            outlineBuilder(10, 1, "glade", -1142, 956);
            outlineBuilder(11, 3, "glade", -1141, 955);
            outlineBuilder(2, 1, "glade", -1140, 953);
            outlineBuilder(9, 3, "glade", -1138, 957);
            outlineBuilder(8, 1, "glade", -1135, 958);
            outlineBuilder(6, 1, "glade", -1134, 959);
            outlineBuilder(5, 1, "glade", -1133, 958);
            outlineBuilder(3, 2, "glade", -1132, 959);
            outlineBuilder(2, 1, "glade", -1130, 959);
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
        //mapS27W30
        if (Y > -279312 && Y < -268536 && X < 313753 && X > 302099) //X30
        {
            elevation = -3;
            region = "s27w30";
            campout = true;
            outlineBuilder( 34, 34, "gladeGrass", -1040, 898);
            outlineBuilder(3, 34, "vardanianWetlands", -1040, 898);
            outlineBuilder(1, 1, "vardanianWetlands", -1040, 901);
            outlineBuilder(1, 4, "vardanianWetlands", -1033, 901);
            outlineBuilder(2, 2, "vardanianWetlands", -1028, 901);
            outlineBuilder(1, 3, "vardanianWetlands", -1021, 901);
            outlineBuilder(2, 4, "vardanianWetlands", -1016, 901);
            outlineBuilder(1, 2, "vardanianWetlands", -1012, 901);
            outlineBuilder(1, 1, "vardanianWetlands", -1026, 901);
            outlineBuilder(1, 1, "vardanianWetlands", -1017, 901);
            outlineBuilder(2, 2, "vardanianWetlands", -1008, 901);

            outlineBuilder(1, 4, "glade", -1036, 906);
            outlineBuilder(1, 1, "glade", -1034, 907);
            outlineBuilder(1, 3, "glade", -1027, 910);
            outlineBuilder(1, 1, "glade", -1027, 911);

            outlineBuilder(5, 7, "glade", -1040, 915);
            outlineBuilder(1, 6, "glade", -1039, 914);
            outlineBuilder(1, 8, "glade", -1038, 913);
            outlineBuilder(2, 4, "glade", -1036, 911);
            outlineBuilder(2, 2, "glade", -1033, 914);
            outlineBuilder(2, 1, "glade", -1033, 916);
            outlineBuilder(7, 8, "glade", -1032, 917);
            outlineBuilder(4, 2, "glade", -1024, 919);
            outlineBuilder(4, 6, "glade", -1028, 928);
            outlineBuilder(2, 4, "glade", -1038, 920);
            outlineBuilder(1, 1, "glade", -1024, 918);
            outlineBuilder(3, 4, "glade", -1028, 924);
            outlineBuilder(1, 1, "glade", -1029, 924);
            outlineBuilder(1, 2, "glade", -1027, 927);
            outlineBuilder(1, 2, "glade", -1030, 926);
            outlineBuilder(2, 3, "glade", -1040, 930);
            outlineBuilder(2, 2, "glade", -1030, 930);
            outlineBuilder(1, 2, "glade", -1032, 931);
            outlineBuilder(2, 1, "glade", -1040, 928);
            outlineBuilder(1, 3, "glade", -1037, 931);

            outlineBuilder(2, 9, "glade", -1016, 930);
            outlineBuilder(1, 1, "glade", -1017, 930);
            outlineBuilder(3, 6, "glade", -1015, 927);
            outlineBuilder(1, 4, "glade", -1014, 926);
            outlineBuilder(2, 1, "glade", -1009, 927);
            outlineBuilder(3, 3, "glade", -1010, 922);
            outlineBuilder(5, 1, "glade", -1007, 919);
            outlineBuilder(5, 3, "glade", -1015, 914);
            outlineBuilder(2, 4, "glade", -1014, 912);
            outlineBuilder(2, 2, "glade", -1010, 914);
            outlineBuilder(1, 1, "glade", -1010, 913);
            outlineBuilder(1, 4, "glade", -1015, 911);
            outlineBuilder(1, 1, "glade", -1016, 914);
            outlineBuilder(1, 1, "glade", -1013, 910);
            outlineBuilder(2, 3, "glade", -1009, 909);

            outlineBuilder(5, 1, "vardanianStone", -1021, 898);
            outlineBuilder(29, 1, "orgishTile", -1021, 903);
        }
        //mapS27W33
        if (Y > -279312 && Y < -268536 && X < 344333 && X > 332640) //X33
        {
            elevation = -3;
            region = "s27w33";
            campout = true;
            outlineBuilder( 34, 34, "vardanianWetlands", -1142, 898);

            outlineBuilder(1, 26, "gladeGrass", -1134, 931);
            outlineBuilder(2, 23, "gladeGrass", -1131, 929);
            outlineBuilder(1, 22, "gladeGrass", -1130, 928);
            outlineBuilder(1, 20, "gladeGrass", -1128, 927);
            outlineBuilder(1, 18, "gladeGrass", -1126, 926);
            outlineBuilder(1, 15, "gladeGrass", -1123, 925);
            outlineBuilder(1, 9, "gladeGrass", -1117, 924);
            outlineBuilder(6, 8, "gladeGrass", -1116, 918);
            outlineBuilder(1, 1, "gladeGrass", -1130, 927);
            outlineBuilder(2, 1, "gladeGrass", -1117, 917);
            outlineBuilder(1, 6, "gladeGrass", -1114, 917);
            outlineBuilder(1, 7, "gladeGrass", -1115, 916);
            outlineBuilder(2, 5, "gladeGrass", -1113, 914);
            outlineBuilder(2, 4, "gladeGrass", -1112, 912);
            outlineBuilder(2, 5, "gladeGrass", -1113, 910);
            outlineBuilder(1, 1, "gladeGrass", -1112, 909);
            outlineBuilder(3, 2, "gladeGrass", -1110, 907);
            outlineBuilder(1, 2, "glade", -1115, 931);
            outlineBuilder(1, 2, "glade", -1116, 930);
            outlineBuilder(1, 1, "glade", -1116, 929);
            outlineBuilder(1, 4, "glade", -1126, 929);
            outlineBuilder(1, 2, "glade", -1124, 928);
            outlineBuilder(1, 1, "glade", -1124, 930);
            outlineBuilder(6, 1, "glade", -1109, 915);
            outlineBuilder(4, 1, "glade", -1110, 916);
            outlineBuilder(5, 1, "glade", -1111, 917);
            outlineBuilder(2, 1, "glade", -1112, 919);
            outlineBuilder(2, 1, "southbog", -1113, 900);
            outlineBuilder(2, 1, "southbog", -1114, 901);
            outlineBuilder(3, 1, "southbog", -1142, 926);
            outlineBuilder(3, 1, "southbog", -1141, 925);
            outlineBuilder(1, 1, "southbog", -1140, 925);
            outlineBuilder(1, 2, "southbog", -1119, 902);
            outlineBuilder(1, 2, "southbog", -1120, 903);
            outlineBuilder(1, 3, "southbog", -1122, 904);
            outlineBuilder(1, 1, "southbog", -1122, 903);
            outlineBuilder(1, 1, "southbog", -1121, 905);
            outlineBuilder(2, 1, "southbog", -1119, 907);
            outlineBuilder(2, 1, "southbog", -1118, 908);
            outlineBuilder(4, 1, "southbog", -1137, 908);
            outlineBuilder(2, 1, "southbog", -1138, 909);
            outlineBuilder(1, 1, "southbog", -1136, 911);
            outlineBuilder(1, 1, "southbog", -1134, 913);
            outlineBuilder(1, 2, "southbog", -1135, 914);
            outlineBuilder(1, 2, "southbog", -1136, 915);
            outlineBuilder(2, 1, "southbog", -1136, 918);
            outlineBuilder(2, 1, "southbog", -1135, 919);
            outlineBuilder(7, 1, "southbogMud", -1142, 900);
            outlineBuilder(4, 1, "southbogMud", -1141, 902);
            outlineBuilder(1, 1, "southbogMud", -1140, 903);
            outlineBuilder(4, 1, "southbogMud", -1142, 913);
            outlineBuilder(2, 1, "southbogMud", -1141, 914);
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
        //mapS26w30
        if (Y > -269151 && Y < -258299 && X < 313753 && X > 302099) //X-30
        {
            elevation = -2;
            region = "s26w30";
            campout = true;
            outlineBuilder( 34, 34, "vardanianWetlands", -1040, 864);

            outlineBuilder(12, 9, "southbog", -1020, 864);
            outlineBuilder(5, 4, "southbog", -1027, 864);
            outlineBuilder(1, 2, "southbog", -1026, 869);
            outlineBuilder(3, 4, "southbog", -1027, 870);
            outlineBuilder(5, 4, "southbog", -1028, 873);
            outlineBuilder(2, 1, "southbog", -1023, 865);
            outlineBuilder(5, 1, "southbog", -1021, 868);
            outlineBuilder(4, 1, "southbog", -1023, 871);
            outlineBuilder(4, 2, "southbog", -1023, 876);
            outlineBuilder(1, 2, "southbog", -1024, 881);
            outlineBuilder(3, 3, "southbog", -1026, 878);
            outlineBuilder(3, 5, "southbog", -1020, 877);
            outlineBuilder(2, 2, "southbog", -1014, 878);
            outlineBuilder(1, 2, "southbog", -1014, 876);
            outlineBuilder(1, 4, "southbog", -1015, 877);
            outlineBuilder(1, 1, "southbog", -1012, 878);
            outlineBuilder(1, 4, "southbog", -1017, 880);
            outlineBuilder(1, 5, "southbog", -1020, 876);
            outlineBuilder(2, 1, "southbog", -1015, 878);
            outlineBuilder(2, 2, "southbog", -1029, 887);
            outlineBuilder(1, 1, "southbog", -1028, 886);
            outlineBuilder(2, 3, "southbog", -1024, 889);
            outlineBuilder(3, 2, "southbog", -1020, 889);
            outlineBuilder(3, 3, "southbog", -1037, 882);
            outlineBuilder(1, 2, "southbog", -1031, 867);
            outlineBuilder(2, 2, "southbog", -1028, 894);
            outlineBuilder(1, 3, "southbog", -1039, 865);
            outlineBuilder(1, 2, "southbog", -1037, 866);
            outlineBuilder(2, 2, "southbog", -1036, 867);

            outlineBuilder(4, 4, "southbogMud", -1010, 864);

            outlineBuilder(1, 1, "southbogMud", -1033, 879);
            outlineBuilder(1, 1, "southbogMud", -1039, 878);
            outlineBuilder(2, 2, "southbogMud", -1037, 889);
            outlineBuilder(2, 1, "southbogMud", -1015, 891);

            outlineBuilder(10, 1, "vardanianStone", -1022, 864);
            outlineBuilder(1, 2, "vardanianStone", -1022, 874);
            outlineBuilder(6, 1, "vardanianStone", -1021, 875);
            outlineBuilder(17, 1, "vardanianStone", -1021, 881);

        }
        //mapS26W33
        if (Y > -269151 && Y < -258299 && X < 344333 && X > 332640) //X-33
        {
            elevation = -2;
            region = "s26w33";
            campout = true;
            outlineBuilder( 34, 34, "vardanianWetlands", -1142, 864);

            outlineBuilder(4, 1, "crag", -1124, 867);
            outlineBuilder(3, 1, "crag", -1123, 867);
            outlineBuilder(3, 1, "crag", -1125, 868);
            outlineBuilder(1, 1, "crag", -1126, 870);
            outlineBuilder(3, 1, "crag", -1112, 873);
            outlineBuilder(3, 1, "crag", -1111, 874);
            outlineBuilder(1, 1, "crag", -1113, 875);
            outlineBuilder(2, 1, "crag", -1110, 876);
            outlineBuilder(1, 2, "crag", -1138, 885);
            outlineBuilder(1, 2, "crag", -1137, 886);
            outlineBuilder(1, 5, "crag", -1138, 887);
            outlineBuilder(1, 2, "crag", -1139, 888);
            outlineBuilder(1, 1, "crag", -1135, 888);
            outlineBuilder(4, 1, "southbog", -1142, 864);
            outlineBuilder(3, 1, "southbog", -1141, 864);
            outlineBuilder(2, 1, "southbog", -1140, 864);
            outlineBuilder(1, 1, "southbog", -1139, 864);
            outlineBuilder(1, 14, "southbog", -1122, 864);
            outlineBuilder(1, 12, "southbog", -1120, 865);
            outlineBuilder(2, 11, "southbog", -1119, 866);
            outlineBuilder(2, 1, "southbog", -1139, 868);
            outlineBuilder(3, 1, "southbog", -1138, 869);
            outlineBuilder(5, 1, "southbog", -1137, 868);
            outlineBuilder(4, 1, "southbog", -1136, 869);
            outlineBuilder(3, 1, "southbog", -1135, 870);
            outlineBuilder(2, 1, "southbog", -1134, 870);
            outlineBuilder(1, 1, "southbog", -1133, 871);
            outlineBuilder(1, 8, "southbog", -1118, 868);
            outlineBuilder(1, 1, "southbog", -1117, 869);
            outlineBuilder(1, 1, "southbog", -1109, 868);
            outlineBuilder(1, 3, "southbog", -1114, 869);
            outlineBuilder(1, 1, "southbog", -1112, 870);
            outlineBuilder(3, 1, "southbog", -1134, 874);
            outlineBuilder(5, 1, "southbog", -1135, 874);
            outlineBuilder(9, 1, "southbog", -1136, 875);
            outlineBuilder(8, 1, "southbog", -1137, 875);
            outlineBuilder(1, 1, "southbog", -1135, 883);
            outlineBuilder(7, 1, "southbog", -1138, 876);
            outlineBuilder(7, 1, "southbog", -1139, 875);
            outlineBuilder(8, 1, "southbog", -1140, 874);
            outlineBuilder(2, 1, "southbog", -1141, 873);
            outlineBuilder(5, 1, "southbog", -1141, 878);
            outlineBuilder(7, 1, "southbog", -1142, 879);
            outlineBuilder(3, 1, "southbog", -1141, 884);
            outlineBuilder(1, 2, "southbog", -1120, 870);
            outlineBuilder(1, 4, "southbog", -1121, 871);
            outlineBuilder(1, 7, "southbog", -1123, 872);
            outlineBuilder(1, 8, "southbog", -1124, 873);
            outlineBuilder(2, 5, "southbog", -1124, 874);
            outlineBuilder(1, 5, "southbog", -1125, 876);
            outlineBuilder(1, 4, "southbog", -1124, 877);
            outlineBuilder(1, 2, "southbog", -1123, 878);
            outlineBuilder(2, 1, "southbog", -1126, 895);
            outlineBuilder(1, 1, "southbog", -1128, 894);
            outlineBuilder(3, 1, "southbog", -1127, 893);
            outlineBuilder(2, 1, "southbog", -1126, 892);
            outlineBuilder(1, 1, "southbog", -1125, 892);
            outlineBuilder(1, 2, "southbog", -1114, 882);
            outlineBuilder(1, 2, "southbog", -1113, 883);
            outlineBuilder(1, 1, "southbog", -1112, 884);
            outlineBuilder(1, 2, "southbog", -1116, 897);
            outlineBuilder(1, 2, "southbog", -1117, 896);
            outlineBuilder(1, 1, "southbog", -1116, 895);
            outlineBuilder(1, 2, "southbogMud", -1137, 864);
            outlineBuilder(1, 1, "southbogMud", -1135, 864);
            outlineBuilder(4, 1, "southbogMud", -1134, 864);
            outlineBuilder(3, 1, "southbogMud", -1133, 864);
            outlineBuilder(1, 1, "southbogMud", -1132, 864);
            outlineBuilder(1, 4, "southbogMud", -1130, 864);
            outlineBuilder(1, 1, "southbogMud", -1125, 864);
            outlineBuilder(2, 1, "southbogMud", -1127, 865);
            outlineBuilder(1, 1, "southbogMud", -1128, 865);
            outlineBuilder(1, 2, "southbogMud", -1140, 891);
            outlineBuilder(1, 2, "southbogMud", -1137, 891);
            outlineBuilder(1, 4, "southbogMud", -1139, 892);
            outlineBuilder(1, 4, "southbogMud", -1140, 893);
            outlineBuilder(1, 5, "southbogMud", -1141, 894);
            outlineBuilder(1, 4, "southbogMud", -1139, 895);
            outlineBuilder(1, 3, "southbogMud", -1137, 896);
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
        //mapS25w30
        if (Y > -258904 && Y < -248132 && X < 313753 && X > 302099) //X-30
        {
            elevation = -2;
            region = "s25w30";
            campout = true;
            outlineBuilder( 34, 34, "vardanianWetlands", -1040, 830);

            outlineBuilder(8, 1, "vardanianStone", -1027, 830);
            outlineBuilder(6, 1, "vardanianStone", -1026, 837);
            outlineBuilder(9, 1, "vardanianStone", -1025, 842);
            outlineBuilder(1, 2, "vardanianStone", -1024, 850);
            outlineBuilder(5, 1, "vardanianStone", -1022, 850);
            outlineBuilder(1, 1, "vardanianStone", -1021, 854);
            outlineBuilder(8, 1, "vardanianStone", -1020, 854);
            outlineBuilder(1, 1, "vardanianStone", -1021, 861);
            outlineBuilder(3, 1, "vardanianStone", -1022, 861);

            outlineBuilder(4, 4, "southbog", -1025, 856);
            outlineBuilder(5, 2, "southbog", -1027, 857);
            outlineBuilder(2, 3, "southbog", -1026, 862);
            outlineBuilder(2, 2, "southbog", -1029, 860);
            outlineBuilder(3, 4, "southbog", -1027, 852);
            outlineBuilder(1, 2, "southbog", -1026, 855);
            outlineBuilder(3, 2, "southbog", -1028, 850);
            outlineBuilder(2, 1, "southbog", -1029, 851);
            outlineBuilder(1, 1, "southbog", -1028, 849);
            outlineBuilder(3, 5, "southbog", -1025, 833);
            outlineBuilder(2, 2, "southbog", -1025, 831);
            outlineBuilder(8, 5, "southbog", -1023, 836);
            outlineBuilder(5, 3, "southbog", -1018, 838);
            outlineBuilder(1, 1, "southbog", -1023, 832);
            outlineBuilder(3, 3, "southbog", -1015, 839);
            outlineBuilder(2, 2, "southbog", -1012, 839);
            outlineBuilder(5, 5, "southbog", -1015, 845);
            outlineBuilder(2, 8, "southbog", -1014, 843);
            outlineBuilder(2, 3, "southbog", -1009, 830);
            outlineBuilder(2, 2, "southbog", -1008, 849);
            outlineBuilder(3, 3, "southbog", -1012, 852);
            outlineBuilder(2, 3, "southbog", -1015, 850);
            outlineBuilder(1, 9, "southbog", -1020, 863);
            outlineBuilder(1, 6, "southbog", -1018, 862);
            outlineBuilder(1, 3, "southbog", -1016, 861);
            outlineBuilder(2, 2, "southbog", -1016, 859);
            outlineBuilder(1, 1, "southbog", -1017, 858);
            outlineBuilder(5, 5, "southbog", -1038, 831);
            outlineBuilder(3, 1, "southbog", -1033, 833);
            outlineBuilder(2, 1, "southbog", -1032, 833);

            outlineBuilder(1, 1, "crag", -1031, 834);
            outlineBuilder(3, 1, "crag", -1030, 834);
            outlineBuilder(2, 2, "crag", -1031, 832);
            outlineBuilder(2, 1, "crag", -1029, 833);
            outlineBuilder(1, 1, "crag", -1030, 831);
            outlineBuilder(2, 2, "crag", -1029, 835);

            outlineBuilder(3, 5, "southbogMud", -1033, 837);
            outlineBuilder(4, 9, "southbogMud", -1035, 841);
            outlineBuilder(3, 1, "southbogMud", -1026, 843);

            outlineBuilder(3, 1, "southbogMud", -1027, 838);
            outlineBuilder(2, 1, "southbogMud", -1028, 839);
            outlineBuilder(1, 6, "southbogMud", -1032, 845);
            outlineBuilder(2, 8, "southbogMud", -1033, 846);
            outlineBuilder(1, 1, "southbogMud", -1026, 848);
            outlineBuilder(5, 7, "southbogMud", -1024, 845);
            outlineBuilder(3, 1, "southbogMud", -1025, 839);
            outlineBuilder(4, 5, "southbogMud", -1021, 850);
            outlineBuilder(3, 6, "southbogMud", -1019, 854);
            outlineBuilder(1, 5, "southbogMud", -1015, 857);
            outlineBuilder(1, 1, "southbogMud", -1018, 857);
            outlineBuilder(3, 1, "southbogMud", -1019, 857);
            outlineBuilder(1, 1, "southbogMud", -1018, 860);
            outlineBuilder(1, 1, "southbogMud", -1021, 855);
            outlineBuilder(1, 3, "southbogMud", -1031, 848);
            outlineBuilder(2, 3, "southbogMud", -1032, 849);

            outlineBuilder(8, 5, "southbogMud", -1036, 853);
            outlineBuilder(4, 3, "southbogMud", -1031, 854);
            outlineBuilder(1, 2, "southbogMud", -1031, 858);
            outlineBuilder(7, 3, "southbogMud", -1040, 838);
            outlineBuilder(8, 2, "southbogMud", -1037, 839);
            outlineBuilder(3, 3, "southbogMud", -1040, 851);
            outlineBuilder(4, 4, "southbogMud", -1010, 860);
            outlineBuilder(2, 2, "southbogMud", -1008, 855);
            outlineBuilder(1, 1, "southbogMud", -1007, 854);
            outlineBuilder(1, 1, "southbogMud", -1008, 857);
        }
        //mapS25w33
        if (Y > -258904 && Y < -248132 && X < 344333 && X > 332640) //X-33
        {
            elevation = -2;
            region = "s25w33";
            campout = true;
            outlineBuilder( 34, 34, "vardanianWetlands", -1142, 830);
            outlineBuilder(1, 1, "crag", -1137, 830);
            outlineBuilder(5, 1, "crag", -1136, 834);
            outlineBuilder(4, 1, "crag", -1137, 833);
            outlineBuilder(5, 1, "crag", -1138, 833);
            outlineBuilder(1, 1, "crag", -1135, 836);
            outlineBuilder(5, 1, "crag", -1139, 834);
            outlineBuilder(2, 1, "crag", -1140, 836);
            outlineBuilder(1, 1, "crag", -1122, 860);
            outlineBuilder(4, 1, "crag", -1123, 858);
            outlineBuilder(5, 1, "crag", -1124, 857);
            outlineBuilder(3, 1, "crag", -1125, 858);
            outlineBuilder(2, 1, "crag", -1126, 859);
            outlineBuilder(2, 1, "crag", -1115, 845);
            outlineBuilder(3, 1, "crag", -1114, 844);
            outlineBuilder(5, 1, "crag", -1113, 843);
            outlineBuilder(6, 2, "crag", -1112, 843);
            outlineBuilder(2, 1, "crag", -1110, 844);
            outlineBuilder(1, 4, "southbog", -1142, 863);
            outlineBuilder(1, 3, "southbog", -1142, 862);
            outlineBuilder(1, 1, "southbog", -1142, 861);
            outlineBuilder(4, 1, "southbog", -1136, 830);
            outlineBuilder(2, 1, "southbog", -1137, 831);
            outlineBuilder(3, 2, "southbog", -1135, 832);
            outlineBuilder(1, 2, "southbog", -1133, 834);
            outlineBuilder(1, 5, "southbog", -1128, 830);
            outlineBuilder(1, 4, "southbog", -1126, 831);
            outlineBuilder(1, 4, "southbog", -1127, 832);
            outlineBuilder(1, 5, "southbog", -1128, 833);
            outlineBuilder(1, 6, "southbog", -1128, 834);
            outlineBuilder(1, 1, "southbog", -1127, 835);
            outlineBuilder(2, 1, "southbog", -1126, 835);
            outlineBuilder(3, 1, "southbog", -1124, 835);
            outlineBuilder(2, 1, "southbog", -1123, 835);
            outlineBuilder(1, 3, "southbog", -1111, 830);
            outlineBuilder(5, 1, "southbog", -1142, 850);
            outlineBuilder(6, 1, "southbog", -1141, 849);
            outlineBuilder(4, 1, "southbog", -1140, 850);
            outlineBuilder(3, 1, "southbog", -1139, 851);
            outlineBuilder(2, 1, "southbog", -1138, 851);
            outlineBuilder(2, 1, "southbog", -1138, 854);
            outlineBuilder(3, 3, "southbog", -1137, 854);
            outlineBuilder(4, 2, "southbog", -1134, 854);
            outlineBuilder(5, 1, "southbog", -1132, 853);
            outlineBuilder(3, 2, "southbog", -1131, 854);
            outlineBuilder(1, 1, "southbog", -1129, 855);
            outlineBuilder(2, 1, "southbog", -1128, 855);
            outlineBuilder(3, 2, "southbog", -1127, 854);
            outlineBuilder(6, 1, "southbog", -1125, 852);
            outlineBuilder(5, 1, "southbog", -1124, 852);
            outlineBuilder(6, 1, "southbog", -1123, 852);
            outlineBuilder(7, 1, "southbog", -1122, 853);
            outlineBuilder(8, 1, "southbog", -1121, 856);
            outlineBuilder(3, 1, "southbog", -1122, 861);
            outlineBuilder(2, 1, "southbog", -1123, 862);
            outlineBuilder(4, 1, "southbog", -1120, 860);
            outlineBuilder(3, 2, "southbog", -1119, 861);
            outlineBuilder(2, 4, "southbog", -1117, 862);
            outlineBuilder(3, 1, "southbog", -1113, 861);
            outlineBuilder(4, 2, "southbog", -1112, 860);
            outlineBuilder(7, 2, "southbog", -1110, 857);
            outlineBuilder(8, 2, "southbog", -1110, 835);
            outlineBuilder(7, 1, "southbog", -1111, 836);
            outlineBuilder(8, 1, "southbog", -1112, 835);
            outlineBuilder(7, 1, "southbog", -1113, 836);
            outlineBuilder(7, 1, "southbog", -1114, 837);
            outlineBuilder(8, 1, "southbog", -1115, 837);
            outlineBuilder(7, 2, "southbog", -1117, 838);
            outlineBuilder(10, 1, "southbog", -1118, 836);
            outlineBuilder(17, 1, "southbog", -1119, 836);
            outlineBuilder(5, 1, "southbog", -1120, 836);
            outlineBuilder(2, 1, "southbog", -1121, 839);
            outlineBuilder(11, 1, "southbog", -1120, 842);
            outlineBuilder(1, 1, "southbog", -1121, 843);
            outlineBuilder(3, 1, "southbog", -1121, 848);
            outlineBuilder(3, 1, "southbog", -1118, 849);
            outlineBuilder(4, 1, "southbogMud", -1142, 830);
            outlineBuilder(3, 1, "southbogMud", -1141, 830);
            outlineBuilder(2, 1, "southbogMud", -1140, 830);
            outlineBuilder(1, 4, "southbogMud", -1134, 830);
            outlineBuilder(1, 4, "southbogMud", -1132, 831);
            outlineBuilder(1, 3, "southbogMud", -1131, 832);
            outlineBuilder(1, 6, "southbogMud", -1122, 830);
            outlineBuilder(1, 2, "southbogMud", -1115, 830);
            outlineBuilder(1, 9, "southbogMud", -1121, 831);
            outlineBuilder(1, 10, "southbogMud", -1119, 832);
            outlineBuilder(1, 8, "southbogMud", -1118, 833);
            outlineBuilder(1, 3, "southbogMud", -1117, 834);
            outlineBuilder(1, 1, "southbogMud", -1115, 835);
            outlineBuilder(1, 1, "southbogMud", -1140, 835);
            outlineBuilder(2, 1, "southbogMud", -1141, 836);
            outlineBuilder(1, 1, "southbogMud", -1142, 837);
            outlineBuilder(3, 1, "southbogMud", -1142, 856);
            outlineBuilder(5, 1, "southbogMud", -1141, 856);
            outlineBuilder(2, 1, "southbogMud", -1140, 858);
            outlineBuilder(4, 1, "southbogMud", -1139, 858);
            outlineBuilder(3, 1, "southbogMud", -1138, 859);
            outlineBuilder(5, 3, "southbogMud", -1137, 859);
            outlineBuilder(6, 1, "southbogMud", -1134, 858);
            outlineBuilder(1, 1, "southbogMud", -1133, 863);
            outlineBuilder(4, 2, "southbogMud", -1133, 858);
            outlineBuilder(3, 1, "southbogMud", -1131, 859);
            outlineBuilder(7, 1, "southbogMud", -1137, 837);
            outlineBuilder(9, 1, "southbogMud", -1138, 838);
            outlineBuilder(8, 1, "southbogMud", -1136, 839);
            outlineBuilder(17, 1, "southbogMud", -1135, 837);
            outlineBuilder(7, 1, "southbogMud", -1139, 842);
            outlineBuilder(5, 1, "southbogMud", -1140, 840);
            outlineBuilder(8, 1, "southbogMud", -1141, 839);
            outlineBuilder(8, 1, "southbogMud", -1142, 840);
            outlineBuilder(1, 2, "southbogMud", -1138, 848);
            outlineBuilder(2, 1, "southbogMud", -1136, 850);
            outlineBuilder(1, 1, "southbogMud", -1137, 851);
            outlineBuilder(14, 1, "southbogMud", -1134, 839);
            outlineBuilder(12, 1, "southbogMud", -1133, 840);
            outlineBuilder(15, 1, "southbogMud", -1132, 837);
            outlineBuilder(12, 1, "southbogMud", -1131, 837);
            outlineBuilder(15, 2, "southbogMud", -1130, 837);
            outlineBuilder(14, 1, "southbogMud", -1128, 839);
            outlineBuilder(13, 1, "southbogMud", -1127, 840);
            outlineBuilder(13, 1, "southbogMud", -1126, 839);
            outlineBuilder(12, 1, "southbogMud", -1125, 839);
            outlineBuilder(1, 1, "southbogMud", -1124, 839);
            outlineBuilder(3, 1, "southbogMud", -1123, 838);
            outlineBuilder(1, 1, "southbogMud", -1122, 837);
            outlineBuilder(3, 1, "southbogMud", -1124, 841);
            outlineBuilder(1, 1, "southbogMud", -1123, 843);
            outlineBuilder(1, 2, "southbogMud", -1123, 846);
            outlineBuilder(5, 1, "southbogMud", -1124, 846);
            outlineBuilder(1, 4, "southbogMud", -1130, 863);
            outlineBuilder(1, 5, "southbogMud", -1129, 862);
            outlineBuilder(1, 1, "southbogMud", -1125, 863);
            outlineBuilder(1, 4, "southbogMud", -1128, 861);
            outlineBuilder(1, 2, "southbogMud", -1128, 860);
            outlineBuilder(1, 1, "southbogMud", -1127, 859);
            outlineBuilder(2, 1, "southbogMud", -1118, 854);
            outlineBuilder(4, 1, "southbogMud", -1117, 854);
            outlineBuilder(10, 1, "southbogMud", -1116, 851);
            outlineBuilder(11, 1, "southbogMud", -1115, 850);
            outlineBuilder(8, 1, "southbogMud", -1114, 851);
            outlineBuilder(7, 1, "southbogMud", -1113, 851);
            outlineBuilder(1, 1, "southbogMud", -1113, 849);
            outlineBuilder(9, 1, "southbogMud", -1112, 849);
            outlineBuilder(6, 1, "southbogMud", -1111, 849);
            outlineBuilder(7, 1, "southbogMud", -1110, 847);
            outlineBuilder(6, 1, "southbogMud", -1109, 847);
            outlineBuilder(3, 1, "southbogMud", -1118, 846);
            outlineBuilder(5, 1, "southbogMud", -1117, 845);
            outlineBuilder(2, 1, "southbogMud", -1116, 845);
        }
        //mapS25w34
        if (Y > -258904 && Y < -248132 && X < 354544 && X > 342860) //X-34
        {
            elevation = -2;
            region = "s25w34";
            campout = true;
            outlineBuilder( 34, 34, "vardanianWetlands", -1176, 830);

            outlineBuilder(1, 1, "crag", -1152, 830);
            outlineBuilder(2, 1, "crag", -1153, 830);
            outlineBuilder(1, 2, "crag", -1164, 835);
            outlineBuilder(1, 4, "crag", -1166, 836);
            outlineBuilder(1, 5, "crag", -1167, 837);
            outlineBuilder(1, 4, "crag", -1167, 838);
            outlineBuilder(1, 4, "crag", -1168, 839);
            outlineBuilder(1, 2, "crag", -1168, 840);
            outlineBuilder(2, 4, "crag", -1169, 841);
            outlineBuilder(1, 3, "crag", -1169, 843);
            outlineBuilder(1, 2, "crag", -1168, 844);
            outlineBuilder(1, 1, "crag", -1167, 845);
            outlineBuilder(1, 1, "crag", -1172, 837);
            outlineBuilder(1, 3, "crag", -1174, 838);
            outlineBuilder(1, 3, "crag", -1175, 839);
            outlineBuilder(1, 1, "crag", -1174, 840);
            outlineBuilder(2, 1, "southbog", -1144, 860);
            outlineBuilder(5, 1, "southbog", -1143, 858);
            outlineBuilder(4, 1, "southbog", -1143, 851);
            outlineBuilder(4, 1, "southbog", -1144, 852);
            outlineBuilder(2, 1, "southbog", -1145, 853);
            outlineBuilder(1, 1, "southbog", -1171, 840);
            outlineBuilder(1, 1, "southbog", -1172, 841);
            outlineBuilder(1, 2, "southbog", -1173, 842);
            outlineBuilder(1, 3, "southbog", -1174, 843);
            outlineBuilder(1, 4, "southbog", -1176, 844);
            outlineBuilder(2, 1, "southbog", -1176, 842);
            outlineBuilder(2, 3, "southbog", -1176, 845);
            outlineBuilder(1, 2, "southbog", -1176, 847);
            outlineBuilder(2, 3, "southbog", -1176, 848);
            outlineBuilder(1, 1, "southbog", -1175, 850);
            outlineBuilder(3, 1, "southbog", -1168, 845);
            outlineBuilder(1, 2, "southbog", -1168, 848);
            outlineBuilder(1, 4, "southbog", -1169, 849);
            outlineBuilder(1, 5, "southbog", -1170, 850);
            outlineBuilder(1, 6, "southbog", -1172, 851);
            outlineBuilder(1, 6, "southbog", -1173, 852);
            outlineBuilder(1, 7, "southbog", -1172, 853);
            outlineBuilder(2, 9, "southbog", -1172, 854);
            outlineBuilder(1, 8, "southbog", -1171, 856);
            outlineBuilder(1, 7, "southbog", -1171, 857);
            outlineBuilder(1, 9, "southbog", -1172, 858);
            outlineBuilder(2, 8, "southbog", -1174, 859);
            outlineBuilder(1, 9, "southbog", -1175, 861);
            outlineBuilder(1, 9, "southbog", -1176, 862);
            outlineBuilder(1, 8, "southbog", -1176, 863);
            outlineBuilder(1, 12, "southbog", -1169, 830);
            outlineBuilder(1, 13, "southbog", -1168, 831);
            outlineBuilder(1, 12, "southbog", -1168, 832);
            outlineBuilder(1, 6, "southbog", -1167, 833);
            outlineBuilder(1, 5, "southbog", -1167, 834);
            outlineBuilder(1, 2, "southbog", -1166, 835);
            outlineBuilder(2, 4, "southbog", -1159, 833);
            outlineBuilder(2, 4, "southbog", -1158, 835);
            outlineBuilder(1, 4, "southbog", -1156, 837);
            outlineBuilder(1, 5, "southbog", -1156, 838);
            outlineBuilder(1, 7, "southbog", -1156, 839);
            outlineBuilder(2, 1, "southbog", -1148, 838);
            outlineBuilder(1, 10, "southbog", -1156, 840);
            outlineBuilder(1, 1, "southbog", -1156, 841);
            outlineBuilder(1, 7, "southbog", -1154, 841);
            outlineBuilder(1, 8, "southbog", -1154, 842);
            outlineBuilder(1, 8, "southbog", -1155, 843);
            outlineBuilder(1, 6, "southbog", -1154, 844);
            outlineBuilder(1, 4, "southbog", -1154, 845);
            outlineBuilder(1, 6, "southbog", -1155, 846);
            outlineBuilder(1, 2, "southbog", -1152, 847);
            outlineBuilder(1, 2, "southbog", -1153, 848);
            outlineBuilder(1, 2, "southbog", -1152, 849);
            outlineBuilder(1, 3, "southbog", -1152, 850);
            outlineBuilder(1, 4, "southbog", -1153, 851);
            outlineBuilder(1, 6, "southbog", -1154, 852);
            outlineBuilder(1, 1, "southbog", -1150, 853);
            outlineBuilder(2, 12, "southbog", -1157, 862);
            outlineBuilder(1, 1, "southbog", -1147, 861);
            outlineBuilder(1, 5, "southbog", -1156, 861);
            outlineBuilder(1, 2, "southbog", -1155, 860);
            outlineBuilder(3, 2, "southbog", -1161, 854);
            outlineBuilder(1, 1, "southbog", -1162, 855);
            outlineBuilder(4, 1, "southbog", -1158, 853);
            outlineBuilder(1, 2, "southbog", -1157, 853);
            outlineBuilder(3, 2, "southbog", -1157, 855);
            outlineBuilder(3, 1, "southbog", -1155, 856);
            outlineBuilder(1, 5, "southbogMud", -1176, 830);
            outlineBuilder(1, 6, "southbogMud", -1176, 831);
            outlineBuilder(2, 7, "southbogMud", -1176, 832);
            outlineBuilder(3, 1, "southbogMud", -1176, 834);
            outlineBuilder(2, 1, "southbogMud", -1175, 834);
            outlineBuilder(1, 3, "southbogMud", -1173, 834);
            outlineBuilder(1, 4, "southbogMud", -1146, 830);
            outlineBuilder(1, 3, "southbogMud", -1145, 831);
            outlineBuilder(1, 3, "southbogMud", -1147, 832);
            outlineBuilder(6, 1, "southbogMud", -1143, 842);
            outlineBuilder(4, 1, "southbogMud", -1144, 843);
            outlineBuilder(1, 1, "southbogMud", -1145, 845);
            outlineBuilder(3, 1, "southbogMud", -1174, 854);
            outlineBuilder(3, 1, "southbogMud", -1176, 857);
            outlineBuilder(1, 2, "southbogMud", -1175, 857);
            outlineBuilder(2, 1, "southbogMud", -1143, 837);
            outlineBuilder(2, 1, "southbogMud", -1144, 838);
            outlineBuilder(1, 5, "southbogMud", -1166, 863);
            outlineBuilder(1, 5, "southbogMud", -1165, 862);
            outlineBuilder(1, 3, "southbogMud", -1164, 861);
            outlineBuilder(1, 1, "southbogMud", -1165, 860);
            outlineBuilder(6, 1, "vardanianStone", -1150, 830);
            outlineBuilder(1, 4, "vardanianStone", -1154, 835);
            outlineBuilder(1, 2, "vardanianStone", -1158, 837);
            outlineBuilder(1, 2, "vardanianStone", -1159, 838);
            outlineBuilder(6, 1, "vardanianStone", -1159, 839);
            outlineBuilder(7, 1, "vardanianStone", -1160, 844);
            outlineBuilder(14, 1, "vardanianStone", -1159, 850);
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
        //maps24w30
        if (Y > -248711 && Y < -237943 && X < 313753 && X > 302099) //X30
        {
            elevation = -2;
            region = "s24w30";
            campout = true;
            //outlineBuilder( 34, 34, "frost", -1040, 796);

            outlineBuilder( 31, 34, "vardanianGrass", -1040, 796);

            outlineBuilder(1, 34, "vardanianWetlands", -1040, 829);
            outlineBuilder(9, 1, "vardanianWetlands", -1040, 820);
            outlineBuilder(10, 3, "vardanianWetlands", -1039, 819);
            outlineBuilder(9, 7, "vardanianWetlands", -1036, 820);
            outlineBuilder(8, 2, "vardanianWetlands", -1029, 821);
            outlineBuilder(7, 1, "vardanianWetlands", -1026, 822);
            outlineBuilder(8, 3, "vardanianWetlands", -1025, 821);
            outlineBuilder(1, 1, "vardanianWetlands", -1007, 827);
            outlineBuilder(3, 3, "vardanianWetlands", -1010, 826);
            outlineBuilder(5, 2, "vardanianWetlands", -1013, 824);
            outlineBuilder(4, 1, "vardanianWetlands", -1011, 825);
            outlineBuilder(7, 3, "vardanianWetlands", -1022, 822);
            outlineBuilder(6, 1, "vardanianWetlands", -1019, 823);
            outlineBuilder(4, 5, "vardanianWetlands", -1018, 825);

            outlineBuilder(1, 1, "crag", -1020, 824);
            outlineBuilder(2, 1, "crag", -1021, 823);
            outlineBuilder(1, 1, "crag", -1020, 826);
            outlineBuilder(3, 1, "crag", -1031, 822);
            outlineBuilder(1, 1, "crag", -1030, 823);
            outlineBuilder(2, 1, "crag", -1032, 821);

            outlineBuilder(21, 1, "vardanianStone", -1028, 796);
            outlineBuilder(14, 1, "vardanianStone", -1027, 816);

            outlineBuilder(2, 3, "southbog", -1040, 827);
            outlineBuilder(2, 5, "southbog", -1038, 826);
            outlineBuilder(1, 1, "southbog", -1034, 828);
            outlineBuilder(2, 3, "southbog", -1033, 827);
            outlineBuilder(1, 2, "southbog", -1033, 829);
            outlineBuilder(1, 3, "southbog", -1009, 829);
            outlineBuilder(1, 2, "southbog", -1008, 828);
            outlineBuilder(1, 2, "southbog", -1013, 826);
            outlineBuilder(1, 6, "southbog", -1016, 827);
            outlineBuilder(1, 3, "southbog", -1015, 828);
            outlineBuilder(5, 1, "southbog", -1040, 821);
            outlineBuilder(3, 1, "southbog", -1039, 822);
            outlineBuilder(4, 1, "southbog", -1038, 820);
            outlineBuilder(2, 1, "southbog", -1037, 821);
            outlineBuilder(2, 2, "southbog", -1037, 822);
        }
        //mapS24w33
        if (Y > -248711 && Y < -237943 && X < 344333 && X > 332640) //X33
        {
            elevation = -2;
            region = "s24w33";
            campout = true;
            outlineBuilder(34, 34, "vardanianWetlands", -1142, 796);

            outlineBuilder(1, 2, "crag", -1137, 815);
            outlineBuilder(1, 4, "crag", -1138, 816);
            outlineBuilder(1, 6, "crag", -1140, 817);
            outlineBuilder(1, 5, "crag", -1140, 818);
            outlineBuilder(1, 1, "crag", -1138, 819);
            outlineBuilder(1, 2, "crag", -1138, 800);
            outlineBuilder(1, 4, "crag", -1138, 801);
            outlineBuilder(1, 4, "crag", -1137, 802);
            outlineBuilder(1, 4, "crag", -1136, 803);
            outlineBuilder(1, 1, "crag", -1134, 804);
            outlineBuilder(1, 2, "crag", -1116, 809);
            outlineBuilder(1, 6, "crag", -1118, 810);
            outlineBuilder(1, 8, "crag", -1119, 811);
            outlineBuilder(1, 6, "crag", -1117, 812);
            outlineBuilder(1, 3, "crag", -1115, 813);
            outlineBuilder(1, 1, "crag", -1114, 814);
            outlineBuilder(1, 1, "crag", -1138, 827);
            outlineBuilder(1, 3, "crag", -1139, 828);
            outlineBuilder(1, 3, "crag", -1138, 829);
            outlineBuilder(1, 3, "southbog", -1140, 796);
            outlineBuilder(2, 5, "southbog", -1141, 797);
            outlineBuilder(1, 2, "southbog", -1139, 799);
            outlineBuilder(1, 10, "southbog", -1133, 796);
            outlineBuilder(1, 9, "southbog", -1132, 797);
            outlineBuilder(1, 8, "southbog", -1132, 798);
            outlineBuilder(3, 6, "southbog", -1131, 799);
            outlineBuilder(1, 5, "southbog", -1131, 802);
            outlineBuilder(3, 1, "southbog", -1109, 797);
            outlineBuilder(1, 1, "southbog", -1110, 798);
            outlineBuilder(1, 3, "southbog", -1120, 799);
            outlineBuilder(2, 6, "southbog", -1121, 800);
            outlineBuilder(1, 6, "southbog", -1122, 802);
            outlineBuilder(1, 7, "southbog", -1123, 803);
            outlineBuilder(1, 6, "southbog", -1124, 804);
            outlineBuilder(1, 4, "southbog", -1122, 805);
            outlineBuilder(1, 2, "southbog", -1130, 803);
            outlineBuilder(1, 2, "southbog", -1127, 805);
            outlineBuilder(1, 4, "southbog", -1128, 806);
            outlineBuilder(1, 5, "southbog", -1129, 807);
            outlineBuilder(1, 6, "southbog", -1129, 808);
            outlineBuilder(1, 5, "southbog", -1128, 809);
            outlineBuilder(1, 4, "southbog", -1127, 810);
            outlineBuilder(1, 2, "southbog", -1126, 811);
            outlineBuilder(1, 2, "southbog", -1127, 812);
            outlineBuilder(1, 2, "southbog", -1112, 800);
            outlineBuilder(1, 3, "southbog", -1112, 801);
            outlineBuilder(2, 5, "southbog", -1113, 802);
            outlineBuilder(1, 4, "southbog", -1112, 804);
            outlineBuilder(1, 3, "southbog", -1111, 805);
            outlineBuilder(2, 2, "southbog", -1110, 806);
            outlineBuilder(1, 3, "southbog", -1111, 808);
            outlineBuilder(2, 1, "southbog", -1109, 809);
            outlineBuilder(1, 2, "southbog", -1131, 814);
            outlineBuilder(1, 2, "southbog", -1130, 815);
            outlineBuilder(1, 3, "southbog", -1130, 816);
            outlineBuilder(1, 3, "southbog", -1129, 817);
            outlineBuilder(1, 2, "southbog", -1129, 818);
            outlineBuilder(1, 2, "southbog", -1132, 819);
            outlineBuilder(1, 6, "southbog", -1134, 820);
            outlineBuilder(1, 7, "southbog", -1135, 821);
            outlineBuilder(1, 1, "southbog", -1140, 815);
            outlineBuilder(1, 3, "southbog", -1141, 816);
            outlineBuilder(2, 2, "southbog", -1142, 817);
            outlineBuilder(1, 4, "southbog", -1142, 819);
            outlineBuilder(3, 6, "southbog", -1142, 820);
            outlineBuilder(1, 5, "southbog", -1142, 823);
            outlineBuilder(1, 3, "southbog", -1142, 824);
            outlineBuilder(1, 2, "southbog", -1142, 825);
            outlineBuilder(1, 6, "southbog", -1135, 822);
            outlineBuilder(1, 8, "southbog", -1135, 823);
            outlineBuilder(2, 8, "southbog", -1136, 824);
            outlineBuilder(1, 1, "southbog", -1134, 799);
            outlineBuilder(1, 3, "southbog", -1135, 800);
            outlineBuilder(1, 2, "southbog", -1134, 801);
            outlineBuilder(1, 1, "southbog", -1112, 810);
            outlineBuilder(6, 1, "southbog", -1111, 810);
            outlineBuilder(3, 1, "southbog", -1112, 813);
            outlineBuilder(1, 1, "southbog", -1113, 814);
            outlineBuilder(2, 1, "southbog", -1110, 813);
            outlineBuilder(1, 2, "southbog", -1128, 811);
            outlineBuilder(1, 7, "southbog", -1135, 826);
            outlineBuilder(1, 7, "southbog", -1134, 827);
            outlineBuilder(1, 5, "southbog", -1131, 828);
            outlineBuilder(1, 5, "southbog", -1130, 829);
            outlineBuilder(5, 1, "southbog", -1109, 825);
            outlineBuilder(3, 1, "southbog", -1110, 827);
            outlineBuilder(6, 1, "southbog", -1111, 824);
            outlineBuilder(5, 1, "southbog", -1112, 825);
            outlineBuilder(6, 2, "southbog", -1114, 824);
            outlineBuilder(2, 2, "southbog", -1116, 825);
            outlineBuilder(1, 1, "southbog", -1115, 828);
            outlineBuilder(1, 2, "southbog", -1121, 818);
            outlineBuilder(2, 4, "southbog", -1123, 819);
            outlineBuilder(1, 2, "southbog", -1124, 821);
            outlineBuilder(1, 1, "southbog", -1124, 822);
            outlineBuilder(1, 1, "southbog", -1121, 821);
            outlineBuilder(1, 1, "southbog", -1123, 796);
            outlineBuilder(1, 1, "southbogMud", -1141, 800);
            outlineBuilder(1, 4, "southbogMud", -1142, 801);
            outlineBuilder(1, 5, "southbogMud", -1142, 802);
            outlineBuilder(1, 6, "southbogMud", -1142, 803);
            outlineBuilder(1, 8, "southbogMud", -1142, 804);
            outlineBuilder(1, 9, "southbogMud", -1141, 805);
            outlineBuilder(1, 9, "southbogMud", -1140, 806);
            outlineBuilder(1, 10, "southbogMud", -1141, 807);
            outlineBuilder(1, 11, "southbogMud", -1142, 808);
            outlineBuilder(2, 10, "southbogMud", -1141, 809);
            outlineBuilder(2, 1, "southbogMud", -1140, 811);
            outlineBuilder(1, 6, "southbogMud", -1138, 811);
            outlineBuilder(1, 7, "southbogMud", -1138, 812);
            outlineBuilder(1, 5, "southbogMud", -1137, 813);
            outlineBuilder(1, 4, "southbogMud", -1136, 814);
            outlineBuilder(1, 2, "southbogMud", -1135, 815);
            outlineBuilder(1, 3, "southbogMud", -1120, 808);
            outlineBuilder(1, 3, "southbogMud", -1119, 809);
            outlineBuilder(1, 1, "southbogMud", -1119, 810);
            outlineBuilder(1, 2, "southbogMud", -1122, 811);
            outlineBuilder(1, 5, "southbogMud", -1122, 812);
            outlineBuilder(1, 8, "southbogMud", -1123, 813);
            outlineBuilder(1, 9, "southbogMud", -1123, 814);
            outlineBuilder(1, 1, "southbogMud", -1123, 815);
            outlineBuilder(2, 1, "southbogMud", -1124, 815);
            outlineBuilder(1, 7, "southbogMud", -1121, 815);
            outlineBuilder(1, 1, "southbogMud", -1118, 816);
            outlineBuilder(1, 4, "southbogMud", -1142, 829);
            outlineBuilder(1, 2, "southbogMud", -1141, 828);
            outlineBuilder(1, 1, "southbogMud", -1140, 827);
            outlineBuilder(1, 2, "southbogMud", -1134, 829);
            outlineBuilder(2, 1, "southbogMud", -1110, 821);
            outlineBuilder(4, 1, "southbogMud", -1109, 820);
            outlineBuilder(1, 2, "southbogMud", -1111, 817);
            outlineBuilder(1, 2, "southbogMud", -1114, 816);
            outlineBuilder(1, 4, "southbogMud", -1116, 817);
            outlineBuilder(1, 8, "southbogMud", -1117, 818);
            outlineBuilder(1, 7, "southbogMud", -1117, 819);
            outlineBuilder(1, 7, "southbogMud", -1118, 820);
            outlineBuilder(1, 5, "southbogMud", -1116, 821);
            outlineBuilder(1, 2, "southbogMud", -1117, 822);
            outlineBuilder(1, 1, "southbogMud", -1117, 823);
            outlineBuilder(1, 1, "southbogMud", -1113, 822);
            outlineBuilder(1, 3, "southbogMud", -1123, 829);
            outlineBuilder(1, 5, "southbogMud", -1124, 828);
            outlineBuilder(1, 4, "southbogMud", -1124, 827);
            outlineBuilder(1, 3, "southbogMud", -1122, 826);
            outlineBuilder(1, 2, "southbogMud", -1121, 825);
            outlineBuilder(1, 2, "southbogMud", -1125, 826);
            outlineBuilder(1, 3, "southbogMud", -1126, 825);
            outlineBuilder(1, 1, "southbogMud", -1126, 824);
            outlineBuilder(1, 11, "southbogMud", -1121, 796);
            outlineBuilder(1, 2, "southbogMud", -1119, 797);
            outlineBuilder(1, 3, "southbogMud", -1115, 797);
            outlineBuilder(1, 4, "southbogMud", -1116, 798);
            outlineBuilder(1, 1, "southbogMud", -1114, 799);
        }
        //mapS24w34
        if (Y > -248711 && Y < -237943 && X < 354544 && X > 342860) //X34
        {
            elevation = -2;
            region = "s24w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianWetlands", -1176, 796);

            outlineBuilder(6, 1, "vardanianStone", -1150, 796);
            outlineBuilder(1, 3, "vardanianStone", -1152, 802);
            outlineBuilder(1, 1, "vardanianStone", -1152, 803);
            outlineBuilder(1, 3, "vardanianStone", -1154, 804);
            outlineBuilder(1, 1, "vardanianStone", -1154, 805);
            outlineBuilder(1, 3, "vardanianStone", -1156, 806);
            outlineBuilder(8, 1, "vardanianStone", -1157, 806);
            outlineBuilder(9, 1, "vardanianStone", -1158, 813);
            outlineBuilder(2, 1, "vardanianStone", -1157, 821);
            outlineBuilder(2, 1, "vardanianStone", -1156, 822);
            outlineBuilder(2, 1, "vardanianStone", -1155, 823);
            outlineBuilder(1, 2, "vardanianStone", -1154, 824);
            outlineBuilder(1, 2, "vardanianStone", -1153, 825);
            outlineBuilder(1, 3, "vardanianStone", -1152, 826);
            outlineBuilder(5, 1, "vardanianStone", -1150, 826);
            outlineBuilder(1, 1, "southbogMud", -1143, 827);
            outlineBuilder(1, 3, "southbogMud", -1145, 828);
            outlineBuilder(1, 4, "southbogMud", -1146, 829);
            outlineBuilder(1, 5, "southbogMud", -1176, 829);
            outlineBuilder(1, 4, "southbogMud", -1176, 828);
            outlineBuilder(1, 3, "southbogMud", -1176, 827);
            outlineBuilder(1, 1, "southbogMud", -1176, 826);
            outlineBuilder(6, 1, "southbogMud", -1176, 796);
            outlineBuilder(7, 1, "southbogMud", -1175, 796);
            outlineBuilder(6, 1, "southbogMud", -1174, 796);
            outlineBuilder(1, 1, "southbogMud", -1173, 796);
            outlineBuilder(3, 2, "southbogMud", -1173, 798);
            outlineBuilder(3, 1, "southbogMud", -1171, 797);
            outlineBuilder(2, 1, "southbogMud", -1168, 796);
            outlineBuilder(1, 1, "southbogMud", -1167, 796);
            outlineBuilder(1, 2, "southbogMud", -1165, 796);
            outlineBuilder(2, 1, "southbogMud", -1148, 799);
            outlineBuilder(4, 1, "southbogMud", -1147, 798);
            outlineBuilder(6, 1, "southbogMud", -1146, 797);
            outlineBuilder(9, 1, "southbogMud", -1145, 798);
            outlineBuilder(11, 1, "southbogMud", -1144, 800);
            outlineBuilder(9, 1, "southbogMud", -1143, 800);
            outlineBuilder(2, 1, "southbogMud", -1145, 808);
            outlineBuilder(2, 1, "southbogMud", -1146, 804);
            outlineBuilder(2, 1, "southbogMud", -1147, 805);
            outlineBuilder(1, 5, "southbogMud", -1172, 814);
            outlineBuilder(1, 3, "southbogMud", -1171, 813);
            outlineBuilder(1, 2, "southbogMud", -1170, 812);
            outlineBuilder(1, 4, "southbogMud", -1171, 815);
            outlineBuilder(1, 3, "southbogMud", -1169, 816);
            outlineBuilder(1, 2, "southbogMud", -1168, 817);
            outlineBuilder(5, 1, "crag", -1174, 803);
            outlineBuilder(1, 1, "crag", -1175, 804);
            outlineBuilder(5, 1, "crag", -1173, 804);
            outlineBuilder(1, 1, "crag", -1172, 804);
            outlineBuilder(2, 1, "crag", -1172, 806);
            outlineBuilder(3, 1, "crag", -1175, 807);
            outlineBuilder(1, 1, "crag", -1176, 808);
            outlineBuilder(1, 1, "crag", -1172, 811);
            outlineBuilder(3, 1, "crag", -1173, 811);
            outlineBuilder(2, 1, "crag", -1174, 813);
            outlineBuilder(6, 1, "crag", -1165, 797);
            outlineBuilder(6, 1, "crag", -1166, 798);
            outlineBuilder(1, 1, "crag", -1164, 798);
            outlineBuilder(4, 1, "crag", -1164, 800);
            outlineBuilder(3, 1, "crag", -1163, 802);
            outlineBuilder(1, 1, "crag", -1162, 802);
            outlineBuilder(5, 1, "crag", -1167, 800);
            outlineBuilder(3, 1, "crag", -1168, 803);
            outlineBuilder(1, 1, "crag", -1169, 805);
            outlineBuilder(2, 1, "crag", -1167, 819);
            outlineBuilder(2, 1, "crag", -1168, 820);
            outlineBuilder(3, 1, "crag", -1169, 819);
            outlineBuilder(2, 1, "crag", -1170, 821);
            outlineBuilder(4, 1, "crag", -1166, 821);
            outlineBuilder(6, 1, "crag", -1165, 820);
            outlineBuilder(3, 1, "crag", -1164, 820);
            outlineBuilder(1, 1, "crag", -1163, 821);
            outlineBuilder(1, 1, "crag", -1167, 823);
            outlineBuilder(3, 1, "crag", -1151, 808);
            outlineBuilder(4, 1, "crag", -1152, 809);
            outlineBuilder(2, 1, "crag", -1153, 810);
            outlineBuilder(1, 2, "southbog", -1173, 803);
            outlineBuilder(1, 2, "southbog", -1172, 802);
            outlineBuilder(2, 1, "southbog", -1175, 805);
            outlineBuilder(4, 1, "southbog", -1176, 804);
            outlineBuilder(7, 1, "southbog", -1175, 815);
            outlineBuilder(8, 1, "southbog", -1174, 816);
            outlineBuilder(8, 1, "southbog", -1171, 819);
            outlineBuilder(1, 1, "southbog", -1170, 820);
            outlineBuilder(5, 1, "southbog", -1170, 823);
            outlineBuilder(8, 1, "southbog", -1169, 822);
            outlineBuilder(7, 1, "southbog", -1168, 823);
            outlineBuilder(6, 1, "southbog", -1167, 824);
            outlineBuilder(5, 1, "southbog", -1166, 825);
            outlineBuilder(4, 1, "southbog", -1165, 826);
            outlineBuilder(7, 1, "southbog", -1164, 823);
            outlineBuilder(8, 1, "southbog", -1163, 822);
            outlineBuilder(7, 1, "southbog", -1162, 823);
            outlineBuilder(5, 2, "southbog", -1161, 825);
            outlineBuilder(4, 1, "southbog", -1159, 826);
            outlineBuilder(2, 1, "southbog", -1158, 825);
            outlineBuilder(1, 1, "southbog", -1157, 825);
            outlineBuilder(11, 1, "southbog", -1176, 812);
            outlineBuilder(10, 1, "southbog", -1173, 816);
            outlineBuilder(10, 1, "southbog", -1172, 817);
            outlineBuilder(1, 7, "southbog", -1159, 796);
            outlineBuilder(1, 1, "southbog", -1165, 803);
            outlineBuilder(1, 2, "southbog", -1165, 804);
            outlineBuilder(1, 4, "southbog", -1166, 805);
            outlineBuilder(1, 5, "southbog", -1165, 806);
            outlineBuilder(1, 5, "southbog", -1164, 807);
            outlineBuilder(1, 6, "southbog", -1165, 808);
            outlineBuilder(1, 3, "southbog", -1163, 809);
            outlineBuilder(1, 6, "southbog", -1164, 810);
            outlineBuilder(1, 6, "southbog", -1165, 811);
            outlineBuilder(1, 4, "southbog", -1163, 812);
            outlineBuilder(1, 5, "southbog", -1164, 813);
            outlineBuilder(1, 4, "southbog", -1163, 814);
            outlineBuilder(1, 2, "southbog", -1162, 815);
            outlineBuilder(1, 1, "southbog", -1161, 816);
            outlineBuilder(1, 4, "southbog", -1159, 797);
            outlineBuilder(1, 4, "southbog", -1160, 798);
            outlineBuilder(1, 6, "southbog", -1161, 799);
            outlineBuilder(1, 7, "southbog", -1161, 800);
            outlineBuilder(1, 6, "southbog", -1160, 801);
            outlineBuilder(1, 5, "southbog", -1160, 802);
            outlineBuilder(1, 2, "southbog", -1160, 803);
            outlineBuilder(2, 3, "southbog", -1161, 804);
            outlineBuilder(2, 1, "southbog", -1158, 828);
            outlineBuilder(1, 1, "southbog", -1157, 828);
            outlineBuilder(1, 1, "southbog", -1157, 803);
            outlineBuilder(9, 1, "southbog", -1152, 814);
            outlineBuilder(3, 1, "southbog", -1153, 815);
            outlineBuilder(1, 2, "southbog", -1155, 816);
            outlineBuilder(1, 1, "southbog", -1153, 819);
            outlineBuilder(2, 1, "southbog", -1153, 821);
            outlineBuilder(1, 1, "southbog", -1154, 821);
            outlineBuilder(8, 1, "southbog", -1151, 815);
            outlineBuilder(5, 1, "southbog", -1150, 817);
            outlineBuilder(4, 1, "southbog", -1149, 818);
            outlineBuilder(4, 1, "southbog", -1148, 817);
            outlineBuilder(8, 1, "southbog", -1147, 814);
            outlineBuilder(3, 1, "southbog", -1148, 812);
            outlineBuilder(2, 1, "southbog", -1149, 811);
            outlineBuilder(6, 1, "southbog", -1146, 816);
            outlineBuilder(13, 1, "southbog", -1144, 815);
            outlineBuilder(11, 1, "southbog", -1143, 816);
            outlineBuilder(10, 1, "southbog", -1145, 817);
            outlineBuilder(2, 1, "southbog", -1146, 823);
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
        //mapS23w29
        if (Y > -238507 && Y < -227726 && X < 303561 && X > 291852) //X29
        {
            elevation = -2;
            region = "s23w29";
            campout = true;
            outlineBuilder( 34, 34, "hollowGrass", -1006, 762);

            outlineBuilder(1, 34, "vardanianStone", -1006, 783);

            outlineBuilder(1, 1, "hollow", -1005, 785);
            outlineBuilder(4, 2, "hollowDirt", -1004, 785);
            outlineBuilder(21, 1, "vardanianStone", -992, 762);
        }
        //mapS23w30
        if (Y > -238507 && Y < -227726 && X < 313753 && X > 302099) //X30
        {
            elevation = -2;
            region = "s23w30";
            campout = true;
            outlineBuilder( 34, 34, "vardanianGrass", -1040, 762);

            outlineBuilder(2, 7, "hollowDirt", -1013, 781);
            outlineBuilder(6, 5, "hollowDirt", -1011, 775);
            outlineBuilder(2, 1, "hollowDirt", -1012, 775);
            outlineBuilder(2, 1, "hollowDirt", -1012, 779);
            outlineBuilder(33, 1, "hollowDirt", -1007, 763);
            outlineBuilder(5, 1, "hollowDirt", -1008, 765);
            outlineBuilder(1, 5, "hollowDirt", -1012, 774);
            outlineBuilder(1, 2, "hollowDirt", -1012, 773);
            outlineBuilder(3, 2, "hollowDirt", -1009, 768);
            outlineBuilder(1, 6, "hollowDirt", -1012, 784);
            outlineBuilder(2, 3, "hollowDirt", -1010, 785);
            outlineBuilder(8, 1, "hollowDirt", -1008, 787);
            outlineBuilder(5, 1, "hollowDirt", -1009, 788);

            outlineBuilder(5, 1, "hollowGrass", -1007, 777);
            outlineBuilder(2, 1, "hollowGrass", -1010, 779);
            outlineBuilder(1, 1, "hollowGrass", -1009, 777);
            outlineBuilder(1, 3, "hollowGrass", -1009, 782);
            outlineBuilder(1, 1, "hollowGrass", -1008, 781);
            outlineBuilder(1, 1, "hollowGrass", -1008, 779);
            outlineBuilder(1, 1, "hollowGrass", -1007, 784);
            outlineBuilder(1, 1, "hollowGrass", -1007, 790);

            outlineBuilder(1, 2, "hollow", -1010, 781);
            outlineBuilder(1, 2, "hollow", -1009, 780);
            outlineBuilder(2, 1, "hollow", -1009, 778);
            outlineBuilder(4, 1, "hollow", -1007, 767);
            outlineBuilder(1, 1, "hollow", -1008, 769);
            outlineBuilder(1, 2, "hollow", -1008, 791);
            outlineBuilder(1, 1, "hollow", -1007, 792);

            outlineBuilder(1, 34, "vardanianStone", -1040, 783);
            outlineBuilder(12, 1, "vardanianStone", -1028, 784);

        }
        //mapS23w31
        if (Y > -238507 && Y < -227726 && X < 323936 && X > 312277) //X31
        {
            elevation = -2;
            region = "s23w31";
            campout = true;
            outlineBuilder( 34, 34, "vardanianGrass", -1074, 762);

            outlineBuilder(1, 34, "vardanianStone", -1074, 783);
            outlineBuilder(12, 1, "vardanianStone", -1067, 784);

            outlineBuilder(1, 2, "vardanianFarmland", -1067, 779);
            outlineBuilder(1, 1, "vardanianFarmland", -1063, 786);
            outlineBuilder(2, 1, "vardanianFarmland", -1062, 792);

        }
        //mapS23w32
        if (Y > -238507 && Y < -227726 && X < 334130 && X > 322464) //X32
        {
            elevation = -2;
            region = "s23w32";
            campout = true;
            outlineBuilder( 34, 34, "vardanianGrass", -1108, 762);

            outlineBuilder(6, 1, "vardanianStone", -1097, 762);
            outlineBuilder(7, 1, "vardanianStone", -1096, 767);
            outlineBuilder(6, 1, "vardanianStone", -1095, 773);
            outlineBuilder(3, 1, "vardanianStone", -1094, 778);
            outlineBuilder(2, 1, "vardanianStone", -1093, 780);
            outlineBuilder(1, 1, "vardanianStone", -1092, 781);
            outlineBuilder(1, 4, "vardanianStone", -1092, 782);
            outlineBuilder(1, 15, "vardanianStone", -1089, 783);

        }
        //mapS23w33
        if (Y > -238507 && Y < -227726 && X < 344333 && X > 332640) //X33
        {
            elevation = -2;
            region = "s23w33";
            campout = true;
            outlineBuilder( 34, 34, "vardanianGrass", -1142, 762);

            outlineBuilder(6, 1, "vardanianWetlands", -1142, 790);
            outlineBuilder(1, 1, "vardanianWetlands", -1141, 791);
            outlineBuilder(2, 1, "vardanianWetlands", -1141, 794);
            outlineBuilder(1, 1, "vardanianWetlands", -1140, 795);
            outlineBuilder(4, 1, "vardanianWetlands", -1142, 772);
            outlineBuilder(2, 1, "vardanianWetlands", -1141, 773);
            outlineBuilder(3, 1, "vardanianWetlands", -1140, 773);
            outlineBuilder(5, 1, "vardanianWetlands", -1139, 773);
            outlineBuilder(8, 1, "vardanianWetlands", -1138, 774);
            outlineBuilder(5, 1, "vardanianWetlands", -1137, 777);
            outlineBuilder(2, 1, "vardanianWetlands", -1139, 781);
            outlineBuilder(3, 1, "vardanianWetlands", -1140, 782);
            outlineBuilder(2, 1, "vardanianWetlands", -1138, 782);
            outlineBuilder(1, 1, "vardanianWetlands", -1135, 795);
            outlineBuilder(2, 1, "vardanianWetlands", -1136, 794);
            outlineBuilder(1, 1, "vardanianWetlands", -1137, 793);
            outlineBuilder(1, 3, "vardanianWetlands", -1138, 792);
            outlineBuilder(1, 2, "vardanianWetlands", -1138, 791);
            outlineBuilder(2, 1, "vardanianWetlands", -1136, 789);
            outlineBuilder(1, 1, "vardanianWetlands", -1135, 789);
            outlineBuilder(1, 1, "vardanianWetlands", -1139, 785);
            outlineBuilder(2, 1, "vardanianWetlands", -1138, 786);
            outlineBuilder(2, 5, "vardanianWetlands", -1137, 787);
            outlineBuilder(1, 1, "vardanianWetlands", -1135, 786);
            outlineBuilder(1, 1, "vardanianWetlands", -1133, 786);
            outlineBuilder(3, 1, "vardanianWetlands", -1132, 785);
            outlineBuilder(4, 1, "vardanianWetlands", -1131, 783);
            outlineBuilder(2, 1, "vardanianWetlands", -1130, 783);
            outlineBuilder(4, 1, "vardanianWetlands", -1129, 782);
            outlineBuilder(1, 1, "vardanianWetlands", -1109, 795);
            outlineBuilder(2, 2, "vardanianWetlands", -1111, 794);
            outlineBuilder(3, 1, "vardanianWetlands", -1112, 792);
            outlineBuilder(3, 1, "vardanianWetlands", -1113, 791);
            outlineBuilder(1, 2, "vardanianWetlands", -1115, 792);
            outlineBuilder(11, 1, "vardanianWetlands", -1128, 783);
            outlineBuilder(5, 1, "vardanianWetlands", -1129, 788);
            outlineBuilder(2, 1, "vardanianWetlands", -1130, 791);
            outlineBuilder(6, 1, "vardanianWetlands", -1127, 784);
            outlineBuilder(4, 1, "vardanianWetlands", -1127, 791);
            outlineBuilder(2, 1, "vardanianWetlands", -1126, 791);
            outlineBuilder(2, 1, "vardanianWetlands", -1125, 792);
            outlineBuilder(3, 2, "vardanianWetlands", -1124, 792);
            outlineBuilder(3, 1, "vardanianWetlands", -1122, 793);
            outlineBuilder(3, 1, "vardanianWetlands", -1121, 792);
            outlineBuilder(3, 1, "vardanianWetlands", -1120, 791);
            outlineBuilder(2, 2, "vardanianWetlands", -1119, 791);
            outlineBuilder(4, 1, "vardanianWetlands", -1117, 790);
            outlineBuilder(3, 1, "vardanianWetlands", -1116, 789);
            outlineBuilder(2, 1, "vardanianWetlands", -1115, 790);
            outlineBuilder(2, 1, "crag", -1141, 792);
            outlineBuilder(4, 1, "crag", -1140, 791);
            outlineBuilder(3, 1, "crag", -1139, 792);
            outlineBuilder(3, 1, "crag", -1138, 793);
            outlineBuilder(2, 1, "crag", -1137, 794);
            outlineBuilder(2, 1, "crag", -1139, 783);
            outlineBuilder(2, 1, "crag", -1138, 784);
            outlineBuilder(4, 1, "crag", -1137, 783);
            outlineBuilder(2, 1, "crag", -1136, 785);
            outlineBuilder(1, 1, "southbog", -1139, 795);
            outlineBuilder(14, 1, "southbog", -1142, 776);
            outlineBuilder(3, 1, "southbog", -1139, 778);
            outlineBuilder(6, 1, "southbog", -1140, 776);
            outlineBuilder(16, 1, "southbog", -1141, 775);
            outlineBuilder(6, 1, "southbog", -1140, 785);
            outlineBuilder(6, 1, "southbog", -1139, 786);
            outlineBuilder(3, 1, "southbog", -1138, 788);
            outlineBuilder(2, 1, "southbog", -1137, 789);
            outlineBuilder(1, 1, "southbog", -1130, 785);
            outlineBuilder(1, 2, "southbog", -1130, 786);
            outlineBuilder(1, 3, "southbog", -1131, 787);
            outlineBuilder(1, 3, "southbog", -1132, 788);
            outlineBuilder(1, 5, "southbog", -1134, 789);
            outlineBuilder(1, 6, "southbog", -1135, 790);
            outlineBuilder(1, 6, "southbog", -1136, 791);
            outlineBuilder(1, 5, "southbog", -1135, 792);
            outlineBuilder(1, 8, "southbog", -1136, 793);
            outlineBuilder(1, 8, "southbog", -1135, 794);
            outlineBuilder(1, 12, "southbog", -1134, 795);
            outlineBuilder(1, 2, "southbog", -1126, 794);
            outlineBuilder(1, 1, "southbog", -1126, 793);
            outlineBuilder(1, 1, "southbog", -1124, 794);
            outlineBuilder(1, 1, "southbog", -1130, 784);
            outlineBuilder(1, 10, "southbogMud", -1121, 795);
            outlineBuilder(1, 8, "southbogMud", -1120, 794);
            outlineBuilder(1, 2, "southbogMud", -1119, 793);
            outlineBuilder(1, 3, "southbogMud", -1116, 793);
            outlineBuilder(1, 1, "southbogMud", -1116, 792);
        }
        //mapS23w34
        if (Y > -238507 && Y < -227726 && X < 354544 && X > 342860) //X34
        {
            elevation = -2;
            region = "s23w34";
            campout = true;
            outlineBuilder( 34, 34, "vardanianWetlands", -1176, 762); //vardanianWetlands
            outlineBuilder(1, 3, "vardanianGrass", -1145, 762); //vardanianGrass
            outlineBuilder(1, 5, "vardanianGrass", -1147, 763);
            outlineBuilder(4, 4, "vardanianGrass", -1146, 764);
            outlineBuilder(1, 3, "vardanianGrass", -1145, 768);
            outlineBuilder(2, 1, "vardanianGrass", -1143, 769);
            outlineBuilder(6, 1, "vardanianStone", -1159, 762);
            outlineBuilder(1, 2, "vardanianStone", -1161, 767);
            outlineBuilder(4, 1, "vardanianStone", -1162, 767);
            outlineBuilder(1, 1, "vardanianStone", -1163, 770);
            outlineBuilder(1, 10, "vardanianStone", -1172, 771);
            outlineBuilder(1, 1, "vardanianStone", -1172, 772);
            outlineBuilder(9, 1, "vardanianStone", -1173, 772);
            outlineBuilder(1, 3, "vardanianStone", -1173, 781);
            outlineBuilder(1, 7, "vardanianStone", -1171, 782);
            outlineBuilder(2, 1, "vardanianStone", -1165, 783);
            outlineBuilder(1, 16, "vardanianStone", -1165, 785);
            outlineBuilder(10, 1, "vardanianStone", -1150, 786);
            outlineBuilder(3, 1, "crag", -1151, 772);
            outlineBuilder(3, 1, "crag", -1150, 773);
            outlineBuilder(3, 1, "crag", -1149, 774);
            outlineBuilder(2, 1, "crag", -1148, 774);
            outlineBuilder(1, 1, "crag", -1147, 775);
            outlineBuilder(4, 1, "crag", -1145, 770);
            outlineBuilder(1, 1, "crag", -1146, 771);
            outlineBuilder(3, 1, "crag", -1144, 772);
            outlineBuilder(4, 1, "crag", -1170, 788);
            outlineBuilder(2, 1, "crag", -1171, 789);
            outlineBuilder(3, 1, "crag", -1169, 789);
            outlineBuilder(1, 1, "crag", -1168, 791);
            outlineBuilder(3, 1, "crag", -1161, 791);
            outlineBuilder(3, 1, "crag", -1162, 792);
            outlineBuilder(1, 1, "crag", -1163, 793);
            outlineBuilder(3, 2, "crag", -1160, 792);
            outlineBuilder(2, 1, "crag", -1158, 792);
            outlineBuilder(2, 1, "crag", -1166, 766);
            outlineBuilder(1, 1, "crag", -1167, 767);
            outlineBuilder(1, 12, "southbog", -1174, 762); //southbog
            outlineBuilder(1, 12, "southbog", -1173, 763);
            outlineBuilder(1, 4, "southbog", -1171, 764);
            outlineBuilder(1, 5, "southbog", -1173, 765);
            outlineBuilder(1, 5, "southbog", -1174, 766);
            outlineBuilder(1, 7, "southbog", -1175, 767);
            outlineBuilder(1, 5, "southbog", -1174, 768);
            outlineBuilder(1, 1, "southbog", -1171, 769);
            outlineBuilder(1, 1, "southbog", -1173, 769);
            outlineBuilder(1, 2, "southbog", -1163, 764);
            outlineBuilder(1, 2, "southbog", -1162, 765);
            outlineBuilder(1, 1, "southbog", -1170, 773);
            outlineBuilder(1, 3, "southbog", -1171, 774);
            outlineBuilder(1, 2, "southbog", -1171, 775);
            outlineBuilder(1, 8, "southbog", -1171, 776);
            outlineBuilder(2, 7, "southbog", -1171, 777);
            outlineBuilder(1, 5, "southbog", -1170, 779);
            outlineBuilder(1, 1, "southbog", -1168, 780);
            outlineBuilder(1, 1, "southbog", -1166, 780);
            outlineBuilder(1, 13, "southbog", -1167, 774);
            outlineBuilder(1, 15, "southbog", -1168, 775);
            outlineBuilder(1, 10, "southbog", -1162, 776);
            outlineBuilder(1, 10, "southbog", -1164, 773);
            outlineBuilder(1, 2, "southbog", -1159, 769);
            outlineBuilder(1, 3, "southbog", -1159, 770);
            outlineBuilder(1, 4, "southbog", -1160, 771);
            outlineBuilder(1, 8, "southbog", -1161, 772);
            outlineBuilder(1, 2, "southbog", -1154, 771);
            outlineBuilder(1, 8, "southbog", -1160, 777);
            outlineBuilder(1, 5, "southbog", -1158, 778);
            outlineBuilder(1, 4, "southbog", -1157, 779);
            outlineBuilder(6, 1, "southbog", -1152, 778);
            outlineBuilder(3, 1, "southbog", -1151, 778);
            outlineBuilder(3, 1, "southbog", -1153, 780);
            outlineBuilder(1, 1, "southbog", -1151, 783);
            outlineBuilder(1, 2, "southbog", -1146, 777);
            outlineBuilder(1, 1, "southbog", -1145, 778);
            outlineBuilder(1, 1, "southbog", -1143, 778);
            outlineBuilder(2, 3, "southbog", -1145, 779);
            outlineBuilder(1, 1, "southbog", -1148, 779);
            outlineBuilder(1, 3, "southbog", -1149, 780);
            outlineBuilder(1, 8, "southbog", -1150, 781);
            outlineBuilder(1, 7, "southbog", -1149, 782);
            outlineBuilder(2, 6, "southbog", -1148, 783);
            outlineBuilder(2, 5, "southbog", -1147, 785);
            outlineBuilder(8, 1, "southbog", -1176, 778);
            outlineBuilder(1, 1, "southbog", -1175, 779);
            outlineBuilder(7, 1, "southbog", -1175, 781);
            outlineBuilder(6, 1, "southbog", -1174, 783);
            outlineBuilder(2, 3, "southbog", -1145, 787);
            outlineBuilder(1, 3, "southbog", -1146, 789);
            outlineBuilder(1, 4, "southbog", -1147, 790);
            outlineBuilder(1, 3, "southbog", -1147, 791);
            outlineBuilder(1, 3, "southbog", -1148, 792);
            outlineBuilder(1, 3, "southbog", -1147, 793);
            outlineBuilder(1, 1, "southbog", -1147, 794);
            outlineBuilder(4, 1, "southbog", -1173, 785);
            outlineBuilder(4, 1, "southbog", -1172, 784);
            outlineBuilder(2, 1, "southbog", -1171, 785);
            outlineBuilder(1, 1, "southbog", -1170, 785);
            outlineBuilder(4, 1, "southbog", -1168, 784);
            outlineBuilder(1, 1, "southbog", -1169, 786);
            outlineBuilder(4, 1, "southbog", -1167, 785);
            outlineBuilder(1, 1, "southbog", -1166, 787);
            outlineBuilder(1, 1, "southbog", -1161, 787);
            outlineBuilder(1, 1, "southbog", -1163, 789);
            outlineBuilder(1, 9, "southbog", -1162, 788);
            outlineBuilder(1, 9, "southbog", -1161, 789);
            outlineBuilder(1, 4, "southbog", -1159, 787);
            outlineBuilder(1, 1, "southbog", -1159, 790);
            outlineBuilder(1, 5, "southbog", -1157, 790);
            outlineBuilder(3, 5, "southbog", -1156, 791);
            outlineBuilder(1, 3, "southbog", -1155, 794);
            outlineBuilder(1, 5, "southbog", -1157, 795);
            outlineBuilder(2, 1, "southbog", -1143, 776);
            outlineBuilder(1, 7, "southbogMud", -1156, 762); //southbogMud
            outlineBuilder(1, 4, "southbogMud", -1156, 763);
            outlineBuilder(1, 4, "southbogMud", -1155, 764);
            outlineBuilder(1, 6, "southbogMud", -1154, 765);
            outlineBuilder(1, 1, "southbogMud", -1150, 764);
            outlineBuilder(1, 7, "southbogMud", -1156, 766);
            outlineBuilder(1, 9, "southbogMud", -1157, 767);
            outlineBuilder(1, 8, "southbogMud", -1155, 768);
            outlineBuilder(1, 2, "southbogMud", -1154, 769);
            outlineBuilder(1, 1, "southbogMud", -1148, 769);
            outlineBuilder(1, 2, "southbogMud", -1151, 769);
            outlineBuilder(1, 1, "southbogMud", -1150, 770);
            outlineBuilder(6, 1, "southbogMud", -1176, 769);
            outlineBuilder(3, 1, "southbogMud", -1175, 771);
            outlineBuilder(1, 5, "southbogMud", -1165, 779);
            outlineBuilder(1, 2, "southbogMud", -1163, 778);
            outlineBuilder(1, 7, "southbogMud", -1164, 780);
            outlineBuilder(1, 7, "southbogMud", -1163, 781);
            outlineBuilder(1, 8, "southbogMud", -1162, 782);
            outlineBuilder(1, 5, "southbogMud", -1161, 783);
            outlineBuilder(7, 1, "southbogMud", -1176, 789);
            outlineBuilder(6, 1, "southbogMud", -1175, 790);
            outlineBuilder(5, 1, "southbogMud", -1174, 791);
            outlineBuilder(6, 2, "southbogMud", -1173, 790);
            outlineBuilder(5, 1, "southbogMud", -1171, 791);
            outlineBuilder(1, 2, "southbogMud", -1170, 792);
            outlineBuilder(1, 5, "southbogMud", -1170, 794);
            outlineBuilder(1, 4, "southbogMud", -1170, 795);
            outlineBuilder(1, 2, "southbogMud", -1168, 793);
            outlineBuilder(1, 2, "southbogMud", -1165, 795);
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
        //mapS22w29
        if (Y > -228312 && Y < -217520 && X < 303561 && X > 291852) //X29
        {
            elevation = -2;
            region = "s22w29";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1006, 728);

            outlineBuilder(1, 21, "hollowDirt", -993, 761);
            outlineBuilder(1, 10, "hollowDirt", -982, 760);
            outlineBuilder(1, 4, "hollowDirt", -976, 759);
            outlineBuilder(2, 3, "hollowDirt", -975, 757);
            outlineBuilder(3, 2, "hollowDirt", -974, 754);
            outlineBuilder(3, 1, "hollowDirt", -973, 751);
            outlineBuilder(1, 3, "hollowDirt", -989, 760);

            outlineBuilder(34, 1, "vardanianStone", -992, 728);

            outlineBuilder(1, 1, "vardanianFarmland", -986, 747);
            outlineBuilder(1, 2, "vardanianFarmland", -989, 748);
            outlineBuilder(2, 1, "vardanianFarmland", -990, 738);
            outlineBuilder(1, 1, "vardanianFarmland", -986, 739);
            outlineBuilder(2, 1, "vardanianFarmland", -996, 740);
        }
        //mapS22w30
        if (Y > -228312 && Y < -217520 && X < 313753 && X > 302099) //X30
        {
            elevation = -2;
            region = "s22w30";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1040, 728);
        }
        //mapS22w32
        if (Y > -228312 && Y < -217520 && X < 334130 && X > 322464) //X32
        {
            elevation = -2;
            region = "s22w32";
            campout = false;
            outlineBuilder( 34, 34, "vardanianGrass", -1108, 728);

            outlineBuilder(1, 2, "graveyard", -1100, 730);
            outlineBuilder(14, 4, "graveyard", -1097, 728);
            outlineBuilder(13, 10, "graveyard", -1093, 728);
            outlineBuilder(7, 2, "graveyard", -1083, 730);
            outlineBuilder(6, 3, "graveyard", -1082, 731);
            outlineBuilder(3, 3, "graveyard", -1101, 731);
            outlineBuilder(2, 4, "graveyard", -1102, 733);
            outlineBuilder(2, 4, "graveyard", -1101, 735);
            outlineBuilder(3, 2, "graveyard", -1100, 737);
            outlineBuilder(1, 1, "graveyard", -1099, 740);

            outlineBuilder(28, 1, "vardanianStone", -1098, 728);
            outlineBuilder(1, 11, "vardanianStone", -1108, 748);
            outlineBuilder(7, 1, "vardanianStone", -1097, 755);
        }
        //mapS22w33
        if (Y > -228312 && Y < -217520 && X < 344333 && X > 332640) //X33
        {
            elevation = -2;
            region = "s22w33";
            campout = true;
            outlineBuilder( 34, 34, "vardanianGrass", -1142, 728);

            outlineBuilder(2, 3, "vardanianFarmland", -1132, 742);
            outlineBuilder(1, 1, "vardanianFarmland", -1125, 753);

            outlineBuilder(1, 34, "vardanianStone", -1142, 748);
        }
        //mapS22w34
        if (Y > -228312 && Y < -217520 && X < 354544 && X > 342860) //X34
        {
            elevation = -2;
            region = "s22w34";
            campout = true;
            outlineBuilder( 34, 34, "vardanianGrass", -1176, 728); //vardanianGrass

            outlineBuilder(1, 34, "vardanianStone", -1176, 748);
            outlineBuilder(13, 1, "vardanianStone", -1159, 749);
            outlineBuilder(6, 2, "vardanianWetlands", -1176, 756);
            outlineBuilder(1, 2, "vardanianWetlands", -1174, 760);
            outlineBuilder(2, 1, "vardanianWetlands", -1174, 755);
            outlineBuilder(2, 1, "vardanianWetlands", -1173, 754);
            outlineBuilder(1, 2, "vardanianWetlands", -1172, 754);
            outlineBuilder(3, 1, "vardanianWetlands", -1170, 754);
            outlineBuilder(2, 1, "vardanianWetlands", -1169, 756);
            outlineBuilder(1, 1, "vardanianWetlands", -1168, 757);
            outlineBuilder(2, 2, "vardanianWetlands", -1169, 753);
            outlineBuilder(3, 1, "vardanianWetlands", -1167, 753);
            outlineBuilder(2, 1, "vardanianWetlands", -1166, 754);
            outlineBuilder(4, 1, "vardanianWetlands", -1165, 753);
            outlineBuilder(4, 1, "vardanianWetlands", -1164, 752);
            outlineBuilder(3, 1, "vardanianWetlands", -1163, 752);
            outlineBuilder(2, 1, "vardanianWetlands", -1162, 752);
            outlineBuilder(3, 1, "vardanianWetlands", -1161, 753);
            outlineBuilder(11, 1, "vardanianWetlands", -1160, 751);
            outlineBuilder(2, 1, "vardanianWetlands", -1161, 760);
            outlineBuilder(1, 1, "vardanianWetlands", -1162, 761);
            outlineBuilder(10, 1, "vardanianWetlands", -1158, 752);
            outlineBuilder(3, 1, "vardanianWetlands", -1157, 752);
            outlineBuilder(2, 1, "vardanianWetlands", -1156, 753);
            outlineBuilder(3, 3, "vardanianWetlands", -1155, 753);
            outlineBuilder(4, 2, "vardanianWetlands", -1152, 754);
            outlineBuilder(3, 1, "vardanianWetlands", -1150, 756);
            outlineBuilder(4, 1, "vardanianWetlands", -1149, 757);
            outlineBuilder(4, 1, "vardanianWetlands", -1148, 757);
            outlineBuilder(4, 1, "vardanianWetlands", -1147, 758);
            outlineBuilder(3, 1, "vardanianWetlands", -1146, 759);
            outlineBuilder(1, 1, "vardanianWetlands", -1145, 761);
            outlineBuilder(1, 3, "vardanianWetlands", -1148, 756);
            outlineBuilder(1, 3, "vardanianWetlands", -1147, 757);
            outlineBuilder(4, 1, "vardanianWetlands", -1157, 756);
            outlineBuilder(1, 1, "vardanianWetlands", -1156, 757);
            outlineBuilder(1, 1, "vardanianWetlands", -1150, 755);
            outlineBuilder(1, 2, "vardanianWetlands", -1152, 753);
            outlineBuilder(1, 3, "vardanianWetlands", -1154, 752);
            outlineBuilder(3, 1, "crag", -1174, 757);
            outlineBuilder(4, 1, "crag", -1173, 756);
            outlineBuilder(5, 1, "crag", -1172, 755);
            outlineBuilder(4, 1, "crag", -1171, 755);
            outlineBuilder(2, 1, "crag", -1170, 757);
            outlineBuilder(1, 1, "crag", -1150, 754);
            outlineBuilder(3, 1, "crag", -1149, 754);
            outlineBuilder(1, 1, "crag", -1148, 755);
            outlineBuilder(1, 12, "southbog", -1174, 761);
            outlineBuilder(1, 11, "southbog", -1172, 760);
            outlineBuilder(1, 11, "southbog", -1171, 759);
            outlineBuilder(1, 9, "southbog", -1169, 758);
            outlineBuilder(1, 7, "southbog", -1167, 757);
            outlineBuilder(1, 3, "southbog", -1168, 756);
            outlineBuilder(1, 2, "southbog", -1169, 755);
            outlineBuilder(1, 4, "southbog", -1164, 756);
            outlineBuilder(1, 2, "southbog", -1163, 755);
            outlineBuilder(1, 1, "southbog", -1162, 754);
            outlineBuilder(1, 10, "southbogMud", -1157, 761);
            outlineBuilder(1, 9, "southbogMud", -1157, 760);
            outlineBuilder(1, 8, "southbogMud", -1156, 759);
            outlineBuilder(1, 6, "southbogMud", -1156, 758);
            outlineBuilder(1, 2, "southbogMud", -1157, 755);
            outlineBuilder(1, 5, "southbogMud", -1156, 756);
            outlineBuilder(1, 3, "southbogMud", -1155, 757);
            outlineBuilder(1, 2, "southbogMud", -1153, 755);
        }
        //mapS22w35
        if (Y > -228312 && Y < -217520 && X < 364713 && X > 353021) //X35
        {
            elevation = -2;
            region = "s22w35";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1210, 728);

            outlineBuilder(4, 1, "vardanianWetlands", -1177, 758);
            outlineBuilder(2, 3, "vardanianWetlands", -1180, 760);
            outlineBuilder(1, 2, "vardanianWetlands", -1182, 761);

            outlineBuilder(1, 34, "vardanianStone", -1210, 748);

            outlineBuilder(2, 3, "vardanianFarmland", -1195, 756);
            outlineBuilder(2, 1, "vardanianFarmland", -1187, 754);
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
        //mapS21W32 //Boroye (city)
        if (Y > -218110 && Y < -207328 && X < 334130 && X > 322464) //X32
        {
            elevation = -1;
            region = "s21w32";
            campout = false;
            outlineBuilder(34, 34, "boroStone", -1108, 694);

            outlineBuilder(1, 2, "burntBoroStone", -1108, 694);

            outlineBuilder(34, 2, "vardanianGrass", -1076, 694);
            outlineBuilder(19, 3, "vardanianGrass", -1079, 709);
            outlineBuilder(13, 2, "vardanianGrass", -1081, 715);
            outlineBuilder(9, 2, "vardanianGrass", -1083, 719);
            outlineBuilder(7, 8, "vardanianGrass", -1091, 721);
            outlineBuilder(6, 15, "vardanianGrass", -1106, 722);
            outlineBuilder(3, 2, "vardanianGrass", -1108, 725);

            //tree or garden to the castle
            outlineBuilder(1, 2, "vardanianGrass", -1108, 704);
            outlineBuilder(1, 4, "vardanianGrass", -1108, 701);
            outlineBuilder(1, 1, "vardanianGrass", -1105, 704);

            outlineBuilder(7, 5, "vardanianGrass", -1108, 705);

            outlineBuilder(1, 5, "vardanianGrass", -1099, 710);

            outlineBuilder(1, 10, "vardanianStone", -1108, 720);
            outlineBuilder(9, 1, "vardanianStone", -1098, 719);
            outlineBuilder(1, 9, "vardanianStone", -1097, 719);
            outlineBuilder(6, 1, "vardanianStone", -1088, 714);
            outlineBuilder(1, 3, "vardanianStone", -1086, 714);
            outlineBuilder(6, 1, "vardanianStone", -1087, 709);
            outlineBuilder(4, 1, "vardanianStone", -1083, 711);
            outlineBuilder(1, 2, "vardanianStone", -1082, 711);
            outlineBuilder(1, 3, "vardanianStone", -1108, 712);
            outlineBuilder(2, 17, "vardanianStone", -1108, 702);
            outlineBuilder(8, 1, "vardanianStone", -1106, 704);
            outlineBuilder(1, 5, "vardanianStone", -1108, 695);
            outlineBuilder(1, 1, "vardanianStone", -1104, 694);
            outlineBuilder(4, 1, "vardanianStone", -1100, 694);
            outlineBuilder(10, 2, "vardanianStone", -1091, 694);
            outlineBuilder(6, 1, "vardanianStone", -1082, 694);
            outlineBuilder(1, 1, "vardanianStone", -1081, 699);
            outlineBuilder(13, 1, "vardanianStone", -1080, 699);

            outlineBuilder(5, 7, "graveyard", -1090, 723);
            outlineBuilder(1, 4, "graveyard", -1094, 725);
            outlineBuilder(1, 5, "graveyard", -1095, 726);
            outlineBuilder(1, 6, "graveyard", -1096, 727);
        }
        //mapS21W33 //Boroye (city)
        if (Y > -218110 && Y < -207328 && X < 344333 && X > 332640) //X33
        {
            elevation = -1;
            region = "s21w33";
            campout = false;
            outlineBuilder(34, 34, "vardanianGrass", -1142, 694);

            //outlineBuilder(3, 5, "boroStone", -1119, 691);
            outlineBuilder(1, 2, "boroStone", -1138, 702);
            outlineBuilder(1, 4, "boroStone", -1138, 703);
            outlineBuilder(1, 12, "boroStone", -1124, 694);
            outlineBuilder(7, 16, "boroStone", -1124, 695);
            outlineBuilder(2, 21, "boroStone", -1129, 702);
            outlineBuilder(3, 30, "boroStone", -1138, 704);
            outlineBuilder(11, 32, "boroStone", -1140, 707);
            outlineBuilder(2, 31, "boroStone", -1139, 718);
            outlineBuilder(3, 30, "boroStone", -1138, 720);
            outlineBuilder(1, 29, "boroStone", -1137, 723);
            outlineBuilder(1, 22, "boroStone", -1130, 724);
            outlineBuilder(1, 16, "boroStone", -1130, 725);

            outlineBuilder(1, 4, "burntBoroStone", -1112, 694);
            outlineBuilder(7, 1, "burntBoroStone", -1125, 719);
            outlineBuilder(7, 1, "burntBoroStone", -1126, 719);
            outlineBuilder(2, 1, "burntBoroStone", -1124, 724);
            outlineBuilder(2, 1, "burntBoroStone", -1122, 721);
            outlineBuilder(3, 1, "burntBoroStone", -1121, 721);
            outlineBuilder(2, 3, "burntBoroStone", -1120, 722);
            outlineBuilder(6, 1, "burntBoroStone", -1127, 720);
            outlineBuilder(4, 1, "burntBoroStone", -1123, 721);
            outlineBuilder(5, 1, "burntBoroStone", -1128, 721);
            outlineBuilder(1, 3, "burntBoroStone", -1133, 722);
            outlineBuilder(1, 4, "burntBoroStone", -1134, 723);
            outlineBuilder(5, 2, "burntBoroStone", -1130, 721);
            outlineBuilder(2, 2, "burntBoroStone", -1132, 724);
            outlineBuilder(1, 9, "burntBoroStone", -1130, 726);

            outlineBuilder(2, 2, "vardanianGrass", -1128, 723);

            outlineBuilder(26, 1, "vardanianStone", -1132, 694);
            outlineBuilder(1, 4, "vardanianStone", -1136, 711);
            outlineBuilder(1, 5, "vardanianStone", -1137, 717);
            outlineBuilder(1, 13, "vardanianStone", -1131, 714);
            outlineBuilder(4, 1, "vardanianStone", -1127, 710);
            outlineBuilder(1, 7, "vardanianStone", -1126, 705);
            outlineBuilder(24, 1, "vardanianStone", -1119, 696);
            outlineBuilder(1, 16, "vardanianStone", -1124, 720);
            outlineBuilder(3, 1, "vardanianStone", -1124, 721);
            outlineBuilder(1, 4, "vardanianStone", -1118, 707);
            outlineBuilder(1, 10, "vardanianStone", -1118, 712);
            outlineBuilder(1, 5, "vardanianStone", -1118, 699);
            outlineBuilder(7, 1, "vardanianStone", -1111, 713);
            outlineBuilder(4, 1, "vardanianStone", -1115, 704);
            outlineBuilder(1, 7, "vardanianStone", -1115, 703);
            outlineBuilder(4, 1, "vardanianStone", -1114, 695);
            outlineBuilder(1, 6, "vardanianStone", -1114, 695);
            outlineBuilder(8, 1, "vardanianStone", -1110, 696);
            outlineBuilder(1, 1, "vardanianStone", -1109, 702);
            outlineBuilder(3, 1, "vardanianStone", -1127, 715);
        }
        //mapS21W34
        if (Y > -218110 && Y < -207328 && X < 354544 && X > 342860) //X-34
        {
            elevation = 0;
            region = "s21w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1176, 694);
            outlineBuilder(1, 1, "vardanianFarmland", -1155, 718);
            outlineBuilder(1, 1, "vardanianFarmland", -1155, 706);
        }
        //mapS21W35
        if (Y > -218110 && Y < -207328 && X < 364713 && X > 353021) //X-35
        {
            elevation = 0;
            region = "s21w35";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1210, 694);
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
        //mapS20W33
        if (Y > -207902 && Y < -197116 && X < 344333 && X > 332640) //X33
        {
            elevation = -1;
            region = "s20w33";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1142, 660); // vardanianGrass

            outlineBuilder(11, 8, "vardanianWoods", -1142, 660); //vardanianWoods
            outlineBuilder(20, 2, "vardanianWoods", -1134, 667);
            outlineBuilder(3, 7, "vardanianWoods", -1141, 671);
            outlineBuilder(1, 6, "vardanianWoods", -1140, 674);
            outlineBuilder(3, 5, "vardanianWoods", -1139, 675);
            outlineBuilder(1, 6, "vardanianWoods", -1140, 678);
            outlineBuilder(4, 7, "vardanianWoods", -1141, 679);
            outlineBuilder(2, 6, "vardanianWoods", -1140, 683);
            outlineBuilder(2, 5, "vardanianWoods", -1139, 685);
            outlineBuilder(2, 5, "vardanianWoods", -1138, 687);
            outlineBuilder(1, 4, "vardanianWoods", -1138, 689);
            outlineBuilder(1, 3, "vardanianWoods", -1137, 690);
            outlineBuilder(1, 2, "vardanianWoods", -1137, 691);
            outlineBuilder(1, 1, "vardanianWoods", -1136, 692);

            outlineBuilder(4, 25, "vardanianWoods", -1133, 660);
            outlineBuilder(1, 23, "vardanianWoods", -1133, 664);
            outlineBuilder(1, 19, "vardanianWoods", -1133, 665);
            outlineBuilder(1, 3, "vardanianWoods", -1113, 665);
            outlineBuilder(2, 16, "vardanianWoods", -1131, 666);
            outlineBuilder(1, 14, "vardanianWoods", -1131, 668);
            outlineBuilder(2, 9, "vardanianWoods", -1131, 669);
            outlineBuilder(1, 4, "vardanianWoods", -1121, 669);
            outlineBuilder(1, 3, "vardanianWoods", -1120, 670);
            outlineBuilder(1, 2, "vardanianWoods", -1120, 671);
            outlineBuilder(2, 1, "vardanianWoods", -1119, 672);
            outlineBuilder(1, 2, "vardanianWoods", -1124, 671);
            outlineBuilder(1, 5, "vardanianWoods", -1131, 671);
            outlineBuilder(4, 4, "vardanianWoods", -1131, 672);
            outlineBuilder(1, 3, "vardanianWoods", -1131, 676);
            outlineBuilder(2, 2, "vardanianWoods", -1131, 677);
            outlineBuilder(2, 1, "vardanianWoods", -1131, 679);

            outlineBuilder(6, 1, "vardanianStone", -1134, 660);
            outlineBuilder(1, 2, "vardanianStone", -1134, 666);
            outlineBuilder(28, 1, "vardanianStone", -1132, 666);

            outlineBuilder(3, 5, "boroStone", -1119, 691);
            outlineBuilder(1, 2, "boroStone", -1117, 690);
            outlineBuilder(1, 1, "boroStone", -1114, 693);

            outlineBuilder(1, 6, "burntBoroStone", -1114, 689);
            outlineBuilder(1, 4, "burntBoroStone", -1112, 688);
            outlineBuilder(2, 6, "burntBoroStone", -1114, 691);
            outlineBuilder(1, 5, "burntBoroStone", -1113, 693);
            outlineBuilder(1, 7, "burntBoroStone", -1115, 690);
        }
        //mapS20W34
        if (Y > -207902 && Y < -197116 && X < 354544 && X > 342860) //X34
        {
            elevation = -1;
            region = "s20w34";
            campout = true;
            outlineBuilder( 34, 34, "vardanianGrass", -1176, 660);
            outlineBuilder(6, 1, "vardanianWoods", -1176, 660);
            outlineBuilder(4, 2, "vardanianWoods", -1175, 660);
            outlineBuilder(2, 3, "vardanianWoods", -1173, 660);
            outlineBuilder(1, 1, "vardanianWoods", -1173, 662);
            outlineBuilder(1, 4, "vardanianWoods", -1170, 660);
            outlineBuilder(1, 5, "vardanianWoods", -1158, 660);
            outlineBuilder(2, 1, "vardanianWoods", -1157, 661);
            outlineBuilder(1, 1, "vardanianWoods", -1156, 661);
            outlineBuilder(1, 8, "vardanianWoods", -1150, 660);
            outlineBuilder(1, 5, "vardanianWoods", -1147, 661);
            outlineBuilder(5, 4, "vardanianWoods", -1146, 662);
            outlineBuilder(2, 2, "vardanianWoods", -1144, 668);
            outlineBuilder(1, 3, "vardanianWoods", -1145, 667);

        }
        //mapS20W35
        if (Y > -207902 && Y < -197116 && X < 364713 && X > 353021) //X-35
        {
            elevation = 0;
            region = "s20w35";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1210, 660);

            outlineBuilder(27, 1, "vardanianGrass", -1177, 667);
            outlineBuilder(26, 2, "vardanianGrass", -1179, 668);
            outlineBuilder(24, 1, "vardanianGrass", -1180, 670);
            outlineBuilder(23, 3, "vardanianGrass", -1183, 671);
            outlineBuilder(22, 1, "vardanianGrass", -1184, 672);
            outlineBuilder(21, 2, "vardanianGrass", -1186, 673);
            outlineBuilder(18, 1, "vardanianGrass", -1187, 676);
            outlineBuilder(19, 2, "vardanianGrass", -1189, 675);
            outlineBuilder(20, 1, "vardanianGrass", -1190, 674);
            outlineBuilder(19, 1, "vardanianGrass", -1191, 675);
            outlineBuilder(17, 2, "vardanianGrass", -1193, 677);
            outlineBuilder(16, 1, "vardanianGrass", -1194, 678);
            outlineBuilder(15, 3, "vardanianGrass", -1197, 679);
            outlineBuilder(11, 1, "vardanianGrass", -1198, 683);
            outlineBuilder(9, 1, "vardanianGrass", -1199, 685);
            outlineBuilder(2, 1, "vardanianGrass", -1200, 686);
            outlineBuilder(3, 1, "vardanianGrass", -1200, 691);
            outlineBuilder(2, 2, "vardanianGrass", -1202, 692);
            outlineBuilder(3, 1, "vardanianGrass", -1203, 691);
            outlineBuilder(4, 1, "vardanianGrass", -1204, 690);
            outlineBuilder(5, 1, "vardanianGrass", -1205, 689);
            outlineBuilder(6, 2, "vardanianGrass", -1207, 688);
            outlineBuilder(7, 1, "vardanianGrass", -1208, 687);
            outlineBuilder(5, 1, "vardanianGrass", -1209, 689);
            outlineBuilder(4, 1, "vardanianGrass", -1210, 690);
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
        //mapS19W36
        if (Y > -197728 && Y < -186928 && X < 374956 && X > 363245) //X36
        {
            elevation = -1;
            region = "s19w36";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1244, 626);
        }
        //mapS19W35
        if (Y > -197728 && Y < -186928 && X < 364713 && X > 353021 ) //X35
        {
            elevation = -1;
            region = "s19w35";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1210, 626);
        }
        //mapS19W34
        if (Y > -197728 && Y < -186928 && X < 354544 && X > 342860) //X34
        {
            elevation = -1;
            region = "s19w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1176, 626);

            outlineBuilder(1, 3, "vardanianGrass", -1153, 659);
            outlineBuilder(1, 7, "vardanianGrass", -1165, 659);
            outlineBuilder(2, 6, "vardanianGrass", -1164, 657);
            outlineBuilder(1, 1, "vardanianGrass", -1161, 656);
            outlineBuilder(2, 1, "vardanianGrass", -1162, 655);
            outlineBuilder(1, 1, "vardanianGrass", -1152, 658);

            outlineBuilder(5, 1, "vardanianStone", -1158, 626);
            outlineBuilder(1, 16, "vardanianStone", -1158, 631);

            outlineBuilder(1, 2, "vardanianWetlands", -1171, 626);

            outlineBuilder(2, 1, "shallowMire", -1152, 626);
            outlineBuilder(2, 1, "shallowMire", -1151, 627);
            outlineBuilder(3, 3, "shallowMire", -1150, 626);
            outlineBuilder(1, 2, "shallowMire", -1149, 629);
            outlineBuilder(3, 2, "shallowMire", -1173, 626);
            outlineBuilder(2, 1, "shallowMire", -1171, 627);
            outlineBuilder(3, 1, "shallowMire", -1172, 630);
            outlineBuilder(2, 3, "shallowMire", -1169, 626);
            outlineBuilder(1, 3, "shallowMire", -1164, 626);
            outlineBuilder(2, 2, "shallowMire", -1169, 630);
            outlineBuilder(3, 1, "shallowMire", -1171, 631);
            outlineBuilder(2, 2, "shallowMire", -1168, 631);
            outlineBuilder(1, 1, "shallowMire", -1169, 634);
            outlineBuilder(2, 2, "shallowMire", -1169, 635);
            outlineBuilder(2, 2, "shallowMire", -1168, 643);
            outlineBuilder(2, 3, "shallowMire", -1167, 645);
            outlineBuilder(1, 2, "shallowMire", -1167, 647);
            outlineBuilder(2, 1, "shallowMire", -1169, 642);
            outlineBuilder(1, 1, "shallowMire", -1165, 632);

            outlineBuilder(1, 1, "mire", -1151, 626);
            outlineBuilder(3, 2, "mire", -1166, 626);
        }
        //mapS19W33
        if (Y > -197728 && Y < -186928 && X < 344333 && X > 332640) //X33
        {
            elevation = -1;
            region = "s19w33";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1142, 626);

            outlineBuilder(1, 2, "mire", -1132, 626);
            outlineBuilder(2, 1, "mire", -1132, 627);

            outlineBuilder(1, 1, "shallowMire", -1133, 626);
            outlineBuilder(1, 1, "shallowMire", -1131, 627);
            outlineBuilder(3, 1, "shallowMire", -1131, 628);
            outlineBuilder(2, 1, "shallowMire", -1130, 630);

            outlineBuilder(1, 8, "vardanianStone", -1142, 631);
            outlineBuilder(29, 1, "vardanianStone", -1134, 631);
        }
        //Layer -18 (warm region): elev -2
        //mapS18W35
        if (Y > -187519 && Y < -176743 && X < 364713 && X > 353021) //X35
        {
            elevation = -1;
            region = "s18w35";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1210, 592); //vardanianWoods

            outlineBuilder(1, 4, "vardanianWetlands", -1169, 592); //vardanianWetlands
            outlineBuilder(1, 1, "vardanianWetlands", -1186, 592);
            outlineBuilder(3, 1, "vardanianWetlands", -1185, 592);
            outlineBuilder(1, 1, "vardanianWetlands", -1183, 592);
            outlineBuilder(1, 1, "vardanianWetlands", -1184, 597);
            outlineBuilder(1, 2, "vardanianWetlands", -1184, 596);
            outlineBuilder(1, 2, "vardanianWetlands", -1183, 595);
            outlineBuilder(1, 1, "vardanianWetlands", -1177, 593);
            outlineBuilder(1, 1, "vardanianWetlands", -1179, 594);
            outlineBuilder(1, 2, "vardanianWetlands", -1179, 595);
            outlineBuilder(2, 1, "vardanianWetlands", -1180, 598);
            outlineBuilder(2, 1, "vardanianWetlands", -1178, 597);
            outlineBuilder(2, 1, "vardanianWetlands", -1209, 595);
            outlineBuilder(2, 1, "vardanianWetlands", -1210, 596);
            outlineBuilder(1, 1, "vardanianWetlands", -1209, 599);
            outlineBuilder(3, 1, "vardanianWetlands", -1210, 600);
            outlineBuilder(1, 1, "vardanianWetlands", -1209, 601);
            outlineBuilder(1, 1, "vardanianWetlands", -1205, 602);
            outlineBuilder(1, 3, "vardanianWetlands", -1206, 603);
            outlineBuilder(1, 1, "vardanianWetlands", -1206, 604);
            outlineBuilder(1, 1, "vardanianWetlands", -1206, 607);
            outlineBuilder(1, 2, "vardanianWetlands", -1208, 608);
            outlineBuilder(1, 2, "vardanianWetlands", -1209, 609);
            outlineBuilder(1, 1, "vardanianWetlands", -1201, 607);
            outlineBuilder(1, 4, "vardanianWetlands", -1202, 608);
            outlineBuilder(2, 1, "vardanianWetlands", -1178, 617);
            outlineBuilder(1, 1, "vardanianWetlands", -1179, 619);
            outlineBuilder(2, 1, "vardanianWetlands", -1178, 614);
            outlineBuilder(2, 1, "vardanianWetlands", -1179, 615);
            outlineBuilder(2, 1, "vardanianWetlands", -1180, 616);
            outlineBuilder(2, 1, "vardanianWetlands", -1183, 619);
            outlineBuilder(2, 1, "vardanianWetlands", -1184, 620);
            outlineBuilder(1, 1, "vardanianWetlands", -1202, 609);
            outlineBuilder(2, 1, "vardanianWetlands", -1203, 609);
            outlineBuilder(3, 1, "vardanianWetlands", -1200, 610);
            outlineBuilder(2, 1, "vardanianWetlands", -1201, 611);
            outlineBuilder(4, 1, "vardanianWetlands", -1199, 612);
            outlineBuilder(2, 1, "vardanianWetlands", -1198, 609);
            outlineBuilder(3, 1, "vardanianWetlands", -1197, 611);
            outlineBuilder(1, 1, "vardanianWetlands", -1196, 611);
            outlineBuilder(1, 2, "vardanianWetlands", -1196, 610);
            outlineBuilder(1, 1, "vardanianWetlands", -1198, 614);
            outlineBuilder(3, 1, "vardanianWetlands", -1200, 614);
            outlineBuilder(1, 1, "vardanianWetlands", -1201, 615);
            outlineBuilder(3, 1, "vardanianWetlands", -1202, 613);
            outlineBuilder(5, 1, "vardanianWetlands", -1192, 612);
            outlineBuilder(1, 1, "vardanianWetlands", -1193, 616);
            outlineBuilder(2, 1, "vardanianWetlands", -1191, 614);
            outlineBuilder(1, 1, "vardanianWetlands", -1190, 613);
            outlineBuilder(1, 1, "vardanianWetlands", -1189, 614);
            outlineBuilder(2, 1, "vardanianWetlands", -1188, 615);
            outlineBuilder(1, 2, "vardanianWetlands", -1182, 612);
            outlineBuilder(1, 2, "vardanianWetlands", -1183, 613);
            outlineBuilder(1, 1, "vardanianWetlands", -1184, 616);
            outlineBuilder(3, 1, "vardanianWetlands", -1185, 615);
            outlineBuilder(1, 1, "vardanianWetlands", -1187, 612);
            outlineBuilder(1, 1, "vardanianWetlands", -1187, 610);
            outlineBuilder(2, 1, "vardanianWetlands", -1188, 610);
            outlineBuilder(2, 1, "vardanianWetlands", -1188, 620);
            outlineBuilder(2, 1, "vardanianWetlands", -1189, 619);
            outlineBuilder(2, 1, "vardanianWetlands", -1190, 618);

            outlineBuilder(1, 1, "shallowMire", -1210, 594); //shallowMire
            outlineBuilder(1, 1, "shallowMire", -1190, 592);
            outlineBuilder(1, 3, "shallowMire", -1188, 593);
            outlineBuilder(1, 1, "shallowMire", -1186, 594);
            outlineBuilder(1, 1, "shallowMire", -1184, 592);
            outlineBuilder(1, 2, "shallowMire", -1184, 593);
            outlineBuilder(2, 1, "shallowMire", -1185, 595);
            outlineBuilder(1, 1, "shallowMire", -1184, 595);
            outlineBuilder(1, 2, "shallowMire", -1179, 592);
            outlineBuilder(1, 4, "shallowMire", -1181, 593);
            outlineBuilder(1, 2, "shallowMire", -1181, 594);
            outlineBuilder(1, 1, "shallowMire", -1180, 595);
            outlineBuilder(1, 2, "shallowMire", -1178, 594);
            outlineBuilder(1, 1, "shallowMire", -1177, 595);
            outlineBuilder(1, 2, "shallowMire", -1182, 597);
            outlineBuilder(1, 3, "shallowMire", -1183, 598);
            outlineBuilder(1, 2, "shallowMire", -1184, 599);
            outlineBuilder(1, 1, "shallowMire", -1181, 599);
            outlineBuilder(1, 1, "shallowMire", -1180, 600);
            outlineBuilder(1, 1, "shallowMire", -1179, 598);
            outlineBuilder(2, 1, "shallowMire", -1177, 598);
            outlineBuilder(1, 1, "shallowMire", -1209, 597);
            outlineBuilder(1, 1, "shallowMire", -1210, 598);
            outlineBuilder(3, 1, "shallowMire", -1208, 598);
            outlineBuilder(1, 1, "shallowMire", -1207, 598);
            outlineBuilder(1, 1, "shallowMire", -1209, 600);
            outlineBuilder(1, 1, "shallowMire", -1208, 595);
            outlineBuilder(1, 1, "shallowMire", -1205, 600);
            outlineBuilder(2, 1, "shallowMire", -1206, 601);
            outlineBuilder(1, 1, "shallowMire", -1207, 602);
            outlineBuilder(2, 1, "shallowMire", -1177, 622);
            outlineBuilder(2, 1, "shallowMire", -1178, 621);
            outlineBuilder(4, 1, "shallowMire", -1177, 613);
            outlineBuilder(1, 1, "shallowMire", -1178, 616);
            outlineBuilder(2, 1, "shallowMire", -1179, 617);
            outlineBuilder(2, 1, "shallowMire", -1180, 618);
            outlineBuilder(2, 1, "shallowMire", -1182, 621);
            outlineBuilder(2, 1, "shallowMire", -1183, 622);
            outlineBuilder(1, 1, "shallowMire", -1203, 603);
            outlineBuilder(4, 1, "shallowMire", -1210, 612);
            outlineBuilder(1, 1, "shallowMire", -1209, 608);
            outlineBuilder(1, 3, "shallowMire", -1209, 607);
            outlineBuilder(1, 3, "shallowMire", -1208, 606);
            outlineBuilder(1, 3, "shallowMire", -1207, 605);
            outlineBuilder(1, 1, "shallowMire", -1205, 604);
            outlineBuilder(2, 1, "shallowMire", -1206, 608);
            outlineBuilder(2, 1, "shallowMire", -1207, 609);
            outlineBuilder(1, 2, "shallowMire", -1206, 611);
            outlineBuilder(1, 1, "shallowMire", -1205, 612);
            outlineBuilder(1, 1, "shallowMire", -1209, 614);
            outlineBuilder(2, 1, "shallowMire", -1209, 616);
            outlineBuilder(4, 1, "shallowMire", -1208, 615);
            outlineBuilder(1, 1, "shallowMire", -1207, 616);
            outlineBuilder(1, 2, "shallowMire", -1207, 619);
            outlineBuilder(1, 1, "shallowMire", -1206, 617);
            outlineBuilder(2, 1, "shallowMire", -1204, 615);
            outlineBuilder(2, 1, "shallowMire", -1205, 620);
            outlineBuilder(2, 1, "shallowMire", -1206, 621);
            outlineBuilder(3, 1, "shallowMire", -1204, 619);
            outlineBuilder(1, 1, "shallowMire", -1203, 619);
            outlineBuilder(1, 1, "shallowMire", -1202, 618);
            outlineBuilder(1, 1, "shallowMire", -1203, 611);
            outlineBuilder(1, 1, "shallowMire", -1186, 622);
            outlineBuilder(1, 1, "shallowMire", -1182, 619);
            outlineBuilder(1, 1, "shallowMire", -1198, 618);
            outlineBuilder(3, 1, "shallowMire", -1197, 619);
            outlineBuilder(1, 2, "shallowMire", -1196, 624);
            outlineBuilder(1, 1, "shallowMire", -1195, 623);
            outlineBuilder(3, 1, "shallowMire", -1194, 621);
            outlineBuilder(3, 1, "shallowMire", -1193, 619);
            outlineBuilder(1, 2, "shallowMire", -1201, 609);
            outlineBuilder(1, 1, "shallowMire", -1201, 610);
            outlineBuilder(2, 1, "shallowMire", -1202, 610);
            outlineBuilder(2, 1, "shallowMire", -1199, 610);
            outlineBuilder(1, 1, "shallowMire", -1198, 611);
            outlineBuilder(1, 1, "shallowMire", -1196, 609);
            outlineBuilder(1, 2, "shallowMire", -1196, 608);
            outlineBuilder(1, 1, "shallowMire", -1197, 614);
            outlineBuilder(1, 2, "shallowMire", -1195, 611);
            outlineBuilder(1, 1, "shallowMire", -1196, 612);
            outlineBuilder(3, 1, "shallowMire", -1193, 613);
            outlineBuilder(2, 1, "shallowMire", -1194, 615);
            outlineBuilder(1, 1, "shallowMire", -1195, 617);
            outlineBuilder(2, 1, "shallowMire", -1180, 614);
            outlineBuilder(5, 1, "shallowMire", -1181, 613);
            outlineBuilder(1, 1, "shallowMire", -1182, 614);
            outlineBuilder(2, 1, "shallowMire", -1182, 616);
            outlineBuilder(5, 1, "shallowMire", -1183, 614);
            outlineBuilder(1, 1, "shallowMire", -1184, 617);
            outlineBuilder(3, 1, "shallowMire", -1184, 613);
            outlineBuilder(1, 1, "shallowMire", -1185, 612);
            outlineBuilder(1, 1, "shallowMire", -1185, 614);
            outlineBuilder(6, 1, "shallowMire", -1186, 612);
            outlineBuilder(2, 1, "shallowMire", -1185, 618);
            outlineBuilder(2, 1, "shallowMire", -1186, 619);
            outlineBuilder(1, 1, "shallowMire", -1187, 620);
            outlineBuilder(2, 1, "shallowMire", -1187, 615);
            outlineBuilder(3, 1, "shallowMire", -1188, 612);
            outlineBuilder(1, 1, "shallowMire", -1187, 611);
            outlineBuilder(1, 1, "shallowMire", -1190, 611);
            outlineBuilder(2, 1, "shallowMire", -1189, 609);
            outlineBuilder(1, 2, "shallowMire", -1181, 611);
            outlineBuilder(2, 1, "shallowMire", -1189, 615);
            outlineBuilder(2, 1, "shallowMire", -1190, 616);
            outlineBuilder(1, 1, "shallowMire", -1191, 618);
            outlineBuilder(1, 2, "shallowMire", -1189, 622);
            outlineBuilder(1, 3, "shallowMire", -1191, 621);
            outlineBuilder(1, 1, "shallowMire", -1190, 620);
            outlineBuilder(1, 1, "shallowMire", -1189, 618);
            outlineBuilder(2, 1, "shallowMire", -1188, 618);
            outlineBuilder(1, 2, "shallowMire", -1185, 611);

            outlineBuilder(1, 1, "mire", -1210, 595); //mire
            outlineBuilder(1, 3, "mire", -1189, 592);
            outlineBuilder(1, 3, "mire", -1184, 594);
            outlineBuilder(1, 1, "mire", -1182, 593);
            outlineBuilder(1, 3, "mire", -1182, 592);
            outlineBuilder(1, 1, "mire", -1177, 592);
            outlineBuilder(1, 1, "mire", -1181, 595);
            outlineBuilder(1, 6, "mire", -1182, 596);
            outlineBuilder(1, 1, "mire", -1183, 597);
            outlineBuilder(1, 2, "mire", -1180, 597);
            outlineBuilder(1, 1, "mire", -1177, 597);
            outlineBuilder(1, 1, "mire", -1182, 599);
            outlineBuilder(1, 2, "mire", -1179, 599);
            outlineBuilder(1, 3, "mire", -1179, 600);
            outlineBuilder(1, 1, "mire", -1209, 598);
            outlineBuilder(1, 1, "mire", -1210, 599);
            outlineBuilder(1, 1, "mire", -1210, 603);
            outlineBuilder(1, 2, "mire", -1209, 602);
            outlineBuilder(1, 2, "mire", -1208, 601);
            outlineBuilder(1, 2, "mire", -1207, 600);
            outlineBuilder(2, 1, "mire", -1207, 603);
            outlineBuilder(5, 1, "mire", -1177, 617);
            outlineBuilder(2, 1, "mire", -1178, 619);
            outlineBuilder(1, 2, "mire", -1180, 620);
            outlineBuilder(1, 1, "mire", -1209, 615);
            outlineBuilder(1, 1, "mire", -1207, 617);
            outlineBuilder(1, 5, "mire", -1207, 618);
            outlineBuilder(1, 1, "mire", -1205, 619);
            outlineBuilder(1, 3, "mire", -1204, 617);
            outlineBuilder(1, 4, "mire", -1205, 607);
            outlineBuilder(1, 1, "mire", -1204, 614);
            outlineBuilder(1, 3, "mire", -1205, 608);
            outlineBuilder(1, 2, "mire", -1205, 609);
            outlineBuilder(1, 3, "mire", -1206, 610);
            outlineBuilder(1, 1, "mire", -1204, 611);
            outlineBuilder(1, 3, "mire", -1204, 612);
            outlineBuilder(4, 1, "mire", -1203, 613);
            outlineBuilder(2, 1, "mire", -1181, 618);
            outlineBuilder(1, 1, "mire", -1182, 618);
            outlineBuilder(1, 1, "mire", -1183, 621);
            outlineBuilder(1, 1, "mire", -1182, 620);
            outlineBuilder(1, 1, "mire", -1184, 622);
            outlineBuilder(3, 1, "mire", -1185, 620);
            outlineBuilder(1, 1, "mire", -1186, 621);
            outlineBuilder(2, 1, "mire", -1187, 621);
            outlineBuilder(2, 1, "mire", -1184, 618);
            outlineBuilder(1, 3, "mire", -1198, 617);
            outlineBuilder(1, 6, "mire", -1197, 618);
            outlineBuilder(1, 3, "mire", -1196, 619);
            outlineBuilder(1, 1, "mire", -1196, 620);
            outlineBuilder(1, 1, "mire", -1194, 620);
            outlineBuilder(1, 1, "mire", -1199, 609);
            outlineBuilder(2, 1, "mire", -1198, 612);
            outlineBuilder(2, 1, "mire", -1197, 609);
            outlineBuilder(1, 2, "mire", -1198, 608);
            outlineBuilder(2, 1, "mire", -1201, 613);
            outlineBuilder(1, 1, "mire", -1200, 613);
            outlineBuilder(1, 5, "mire", -1199, 616);
            outlineBuilder(1, 4, "mire", -1198, 615);
            outlineBuilder(2, 3, "mire", -1196, 613);
            outlineBuilder(1, 3, "mire", -1195, 612);
            outlineBuilder(1, 4, "mire", -1194, 617);
            outlineBuilder(1, 1, "mire", -1191, 616);
            outlineBuilder(1, 1, "mire", -1182, 615);
            outlineBuilder(1, 1, "mire", -1185, 613);
            outlineBuilder(2, 1, "mire", -1187, 613);
            outlineBuilder(1, 1, "mire", -1192, 619);
            outlineBuilder(2, 1, "mire", -1191, 619);
            outlineBuilder(1, 2, "mire", -1189, 617);
            outlineBuilder(3, 1, "mire", -1187, 617);
            outlineBuilder(1, 1, "mire", -1186, 618);
            outlineBuilder(2, 1, "mire", -1190, 614);
            outlineBuilder(1, 1, "mire", -1190, 612);
            outlineBuilder(3, 1, "mire", -1189, 611);
            outlineBuilder(2, 1, "mire", -1191, 612);
            outlineBuilder(1, 3, "mire", -1193, 611);
            outlineBuilder(1, 5, "mire", -1194, 610);
            outlineBuilder(1, 6, "mire", -1195, 609);
            outlineBuilder(1, 2, "mire", -1184, 612);
            outlineBuilder(1, 1, "mire", -1179, 614);
            outlineBuilder(1, 3, "mire", -1180, 613);
            outlineBuilder(1, 4, "mire", -1180, 612);
            outlineBuilder(1, 3, "mire", -1179, 611);
            outlineBuilder(1, 1, "mire", -1186, 611);
            outlineBuilder(1, 2, "mire", -1183, 611);
            outlineBuilder(1, 20, "mire", -1210, 592);
            outlineBuilder(1, 22, "mire", -1210, 593);
            outlineBuilder(1, 23, "mire", -1209, 594);
            outlineBuilder(1, 22, "mire", -1207, 595);
            outlineBuilder(1, 23, "mire", -1208, 596);
            outlineBuilder(1, 24, "mire", -1208, 597);
            outlineBuilder(1, 23, "mire", -1206, 598);
            outlineBuilder(1, 23, "mire", -1207, 599);
            outlineBuilder(1, 24, "mire", -1204, 600);
            outlineBuilder(1, 29, "mire", -1205, 601);
            outlineBuilder(1, 28, "mire", -1204, 602);
            outlineBuilder(1, 26, "mire", -1202, 603);
            outlineBuilder(2, 28, "mire", -1204, 604);
            outlineBuilder(1, 29, "mire", -1205, 606);
            outlineBuilder(1, 24, "mire", -1200, 607);
            outlineBuilder(1, 18, "mire", -1194, 608);
            outlineBuilder(1, 12, "mire", -1188, 609);
            outlineBuilder(1, 10, "mire", -1186, 610);
        }
        //mapS18W34
        if (Y > -187519 && Y < -176743 && X < 354544 && X > 342860) //X34
        {
            elevation = -1;
            region = "s18w34";
            campout = true;
            outlineBuilder(1, 1, "mire", -1157, 624);
            outlineBuilder(1, 1, "mire", -1176, 592);
            outlineBuilder(2, 1, "mire", -1176, 594);
            outlineBuilder(2, 1, "mire", -1175, 595);
            outlineBuilder(1, 1, "mire", -1174, 595);
            outlineBuilder(5, 1, "mire", -1176, 618);
            outlineBuilder(1, 1, "mire", -1175, 619);
            outlineBuilder(2, 1, "mire", -1175, 621);
            outlineBuilder(3, 1, "mire", -1174, 621);
            outlineBuilder(2, 1, "mire", -1173, 621);
            outlineBuilder(2, 1, "mire", -1173, 624);
            outlineBuilder(1, 1, "mire", -1172, 625);
            outlineBuilder(2, 1, "mire", -1172, 620);
            outlineBuilder(2, 1, "mire", -1171, 622);
            outlineBuilder(1, 1, "mire", -1170, 623);
            outlineBuilder(19, 1, "mire", -1176, 598);
            outlineBuilder(4, 1, "mire", -1175, 599);
            outlineBuilder(2, 1, "mire", -1174, 600);
            outlineBuilder(1, 1, "mire", -1173, 601);
            outlineBuilder(12, 1, "mire", -1175, 604);
            outlineBuilder(12, 1, "mire", -1174, 605);
            outlineBuilder(14, 1, "mire", -1173, 603);
            outlineBuilder(14, 1, "mire", -1172, 601);
            outlineBuilder(15, 1, "mire", -1171, 600);
            outlineBuilder(15, 1, "mire", -1170, 601);
            outlineBuilder(1, 1, "mire", -1171, 619);
            outlineBuilder(2, 1, "mire", -1170, 618);
            outlineBuilder(16, 3, "mire", -1169, 603);
            outlineBuilder(2, 1, "mire", -1167, 624);
            outlineBuilder(1, 1, "mire", -1167, 621);
            outlineBuilder(5, 1, "mire", -1166, 621);
            outlineBuilder(6, 1, "mire", -1165, 620);
            outlineBuilder(2, 1, "mire", -1164, 624);
            outlineBuilder(1, 2, "mire", -1163, 625);
            outlineBuilder(2, 1, "mire", -1161, 624);
            outlineBuilder(2, 1, "mire", -1164, 620);
            outlineBuilder(14, 1, "mire", -1166, 603);
            outlineBuilder(11, 1, "mire", -1165, 607);
            outlineBuilder(13, 1, "mire", -1164, 605);
            outlineBuilder(1, 1, "mire", -1165, 604);
            outlineBuilder(1, 1, "mire", -1164, 603);
            outlineBuilder(1, 5, "mire", -1174, 597);
            outlineBuilder(1, 2, "mire", -1172, 595);
            outlineBuilder(1, 3, "mire", -1173, 592);
            outlineBuilder(1, 4, "mire", -1172, 593);
            outlineBuilder(1, 1, "mire", -1170, 594);
            outlineBuilder(1, 2, "mire", -1172, 595);
            outlineBuilder(1, 1, "mire", -1167, 594);
            outlineBuilder(2, 1, "mire", -1166, 594);
            outlineBuilder(1, 1, "mire", -1167, 597);
            outlineBuilder(1, 3, "mire", -1167, 599);
            outlineBuilder(2, 2, "mire", -1165, 600);
            outlineBuilder(21, 1, "mire", -1163, 601);
            outlineBuilder(2, 1, "mire", -1162, 601);
            outlineBuilder(2, 1, "mire", -1161, 599);
            outlineBuilder(11, 2, "mire", -1161, 599);
            outlineBuilder(14, 2, "mire", -1160, 601);
            outlineBuilder(4, 1, "mire", -1162, 617);
            outlineBuilder(1, 1, "mire", -1161, 618);
            outlineBuilder(1, 1, "mire", -1160, 619);
            outlineBuilder(1, 2, "mire", -1159, 620);
            outlineBuilder(3, 1, "mire", -1157, 620);
            outlineBuilder(2, 1, "mire", -1156, 620);
            outlineBuilder(12, 1, "mire", -1158, 602);
            outlineBuilder(13, 1, "mire", -1157, 601);
            outlineBuilder(11, 1, "mire", -1156, 603);
            outlineBuilder(10, 1, "mire", -1155, 604);
            outlineBuilder(11, 1, "mire", -1154, 603);
            outlineBuilder(2, 1, "mire", -1156, 617);
            outlineBuilder(8, 1, "mire", -1155, 616);
            outlineBuilder(7, 1, "mire", -1154, 616);
            outlineBuilder(1, 2, "mire", -1152, 625);
            outlineBuilder(20, 1, "mire", -1153, 603);
            outlineBuilder(1, 3, "mire", -1152, 621);
            outlineBuilder(1, 2, "mire", -1152, 622);
            outlineBuilder(1, 1, "mire", -1150, 623);
            outlineBuilder(1, 1, "mire", -1149, 625);
            outlineBuilder(3, 1, "mire", -1147, 621);
            outlineBuilder(1, 1, "mire", -1143, 619);
            outlineBuilder(1, 4, "mire", -1146, 620);
            outlineBuilder(1, 2, "mire", -1144, 621);
            outlineBuilder(3, 1, "mire", -1149, 618);
            outlineBuilder(1, 1, "mire", -1148, 619);
            outlineBuilder(2, 1, "mire", -1145, 617);
            outlineBuilder(1, 1, "mire", -1144, 617);
            outlineBuilder(1, 1, "mire", -1165, 593);
            outlineBuilder(1, 1, "mire", -1165, 597);
            outlineBuilder(1, 1, "mire", -1164, 598);
            outlineBuilder(3, 1, "mire", -1162, 596);
            outlineBuilder(3, 1, "mire", -1164, 592);
            outlineBuilder(2, 1, "mire", -1163, 593);
            outlineBuilder(1, 1, "mire", -1162, 594);
            outlineBuilder(3, 1, "mire", -1161, 594);
            outlineBuilder(2, 1, "mire", -1160, 594);
            outlineBuilder(1, 2, "mire", -1159, 596);
            outlineBuilder(1, 1, "mire", -1156, 598);
            outlineBuilder(1, 1, "mire", -1153, 600);
            outlineBuilder(1, 1, "mire", -1156, 595);
            outlineBuilder(3, 1, "mire", -1155, 595);
            outlineBuilder(4, 1, "mire", -1154, 594);
            outlineBuilder(5, 1, "mire", -1153, 594);
            outlineBuilder(1, 1, "mire", -1152, 597);
            outlineBuilder(1, 1, "mire", -1147, 593);
            outlineBuilder(1, 1, "mire", -1146, 594);
            outlineBuilder(1, 1, "mire", -1143, 596);
            outlineBuilder(1, 3, "mire", -1146, 592);
            outlineBuilder(1, 2, "mire", -1145, 595);
            outlineBuilder(4, 1, "mire", -1152, 592);
            outlineBuilder(1, 3, "mire", -1151, 592);
            outlineBuilder(2, 1, "mire", -1150, 594);
            outlineBuilder(1, 2, "mire", -1151, 597);
            outlineBuilder(1, 1, "mire", -1149, 596);
            outlineBuilder(1, 3, "mire", -1151, 598);
            outlineBuilder(3, 1, "mire", -1148, 596);
            outlineBuilder(3, 2, "mire", -1147, 597);
            outlineBuilder(1, 1, "mire", -1145, 599);
            outlineBuilder(3, 1, "mire", -1143, 598);
            outlineBuilder(2, 1, "mire", -1144, 600);
            outlineBuilder(1, 1, "mire", -1145, 601);
            outlineBuilder(19, 1, "mire", -1152, 599);
            outlineBuilder(17, 1, "mire", -1151, 601);
            outlineBuilder(18, 1, "mire", -1150, 600);
            outlineBuilder(17, 1, "mire", -1149, 600);
            outlineBuilder(11, 1, "mire", -1143, 605);
            outlineBuilder(16, 1, "mire", -1148, 601);
            outlineBuilder(12, 1, "mire", -1147, 603);
            outlineBuilder(12, 1, "mire", -1146, 602);
            outlineBuilder(11, 1, "mire", -1145, 604);
            outlineBuilder(12, 1, "mire", -1144, 603);
            outlineBuilder(11, 2, "mire", -1162, 604);


            outlineBuilder(1, 2, "shallowMire", -1175, 592); //shallowMire
            outlineBuilder(1, 1, "shallowMire", -1175, 594);
            outlineBuilder(1, 1, "shallowMire", -1173, 595);
            outlineBuilder(1, 1, "shallowMire", -1171, 594);
            outlineBuilder(1, 1, "shallowMire", -1174, 596);
            outlineBuilder(1, 1, "shallowMire", -1171, 596);
            outlineBuilder(2, 1, "shallowMire", -1176, 596);
            outlineBuilder(1, 4, "shallowMire", -1173, 598);
            outlineBuilder(1, 2, "shallowMire", -1174, 599);
            outlineBuilder(1, 1, "shallowMire", -1173, 600);
            outlineBuilder(1, 1, "shallowMire", -1173, 602);
            outlineBuilder(1, 2, "shallowMire", -1175, 603);
            outlineBuilder(1, 1, "shallowMire", -1174, 604);
            outlineBuilder(1, 3, "shallowMire", -1168, 600);
            outlineBuilder(1, 1, "shallowMire", -1167, 601);
            outlineBuilder(1, 3, "shallowMire", -1169, 602);
            outlineBuilder(1, 1, "shallowMire", -1165, 603);
            outlineBuilder(1, 1, "shallowMire", -1164, 604);
            outlineBuilder(1, 1, "shallowMire", -1165, 606);
            outlineBuilder(1, 1, "shallowMire", -1170, 592);
            outlineBuilder(1, 1, "shallowMire", -1165, 592);
            outlineBuilder(1, 1, "shallowMire", -1166, 593);
            outlineBuilder(1, 3, "shallowMire", -1167, 596);
            outlineBuilder(2, 1, "shallowMire", -1157, 595);
            outlineBuilder(1, 2, "shallowMire", -1163, 592);
            outlineBuilder(1, 2, "shallowMire", -1162, 593);
            outlineBuilder(1, 1, "shallowMire", -1155, 594);
            outlineBuilder(2, 1, "shallowMire", -1153, 592);
            outlineBuilder(1, 1, "shallowMire", -1160, 596);
            outlineBuilder(2, 1, "shallowMire", -1161, 597);
            outlineBuilder(1, 1, "shallowMire", -1160, 600);
            outlineBuilder(2, 4, "shallowMire", -1156, 601);
            outlineBuilder(1, 1, "shallowMire", -1155, 603);
            outlineBuilder(1, 1, "shallowMire", -1154, 600);
            outlineBuilder(1, 2, "shallowMire", -1154, 599);
            outlineBuilder(1, 2, "shallowMire", -1155, 598);
            outlineBuilder(3, 1, "shallowMire", -1163, 598);
            outlineBuilder(1, 1, "shallowMire", -1167, 598);
            outlineBuilder(1, 1, "shallowMire", -1170, 596);
            outlineBuilder(1, 2, "shallowMire", -1151, 593);
            outlineBuilder(1, 1, "shallowMire", -1148, 592);
            outlineBuilder(1, 1, "shallowMire", -1147, 594);
            outlineBuilder(1, 1, "shallowMire", -1145, 594);
            outlineBuilder(1, 1, "shallowMire", -1146, 595);
            outlineBuilder(1, 2, "shallowMire", -1147, 595);
            outlineBuilder(1, 1, "shallowMire", -1147, 596);
            outlineBuilder(3, 2, "shallowMire", -1145, 596);
            outlineBuilder(1, 1, "shallowMire", -1143, 595);
            outlineBuilder(2, 1, "shallowMire", -1144, 593);
            outlineBuilder(1, 1, "shallowMire", -1152, 598);
            outlineBuilder(2, 1, "shallowMire", -1151, 599);
            outlineBuilder(1, 3, "shallowMire", -1150, 599);
            outlineBuilder(1, 1, "shallowMire", -1151, 595);
            outlineBuilder(1, 1, "shallowMire", -1150, 596);
            outlineBuilder(1, 1, "shallowMire", -1149, 597);
            outlineBuilder(1, 1, "shallowMire", -1148, 600);
            outlineBuilder(1, 1, "shallowMire", -1145, 600);
            outlineBuilder(2, 1, "shallowMire", -1143, 603);
            outlineBuilder(1, 1, "shallowMire", -1143, 597);
            outlineBuilder(1, 1, "shallowMire", -1144, 602);
            outlineBuilder(1, 1, "shallowMire", -1147, 602);
            outlineBuilder(1, 2, "shallowMire", -1162, 603);
            outlineBuilder(1, 1, "shallowMire", -1145, 603);
            outlineBuilder(1, 2, "shallowMire", -1164, 597);
            outlineBuilder(1, 1, "shallowMire", -1161, 601);
            outlineBuilder(1, 2, "shallowMire", -1176, 623);
            outlineBuilder(1, 1, "shallowMire", -1174, 624);
            outlineBuilder(1, 3, "shallowMire", -1175, 620);
            outlineBuilder(1, 1, "shallowMire", -1175, 618);
            outlineBuilder(1, 2, "shallowMire", -1176, 617);
            outlineBuilder(1, 2, "shallowMire", -1172, 615);
            outlineBuilder(2, 3, "shallowMire", -1172, 616);
            outlineBuilder(1, 2, "shallowMire", -1169, 625);
            outlineBuilder(1, 3, "shallowMire", -1169, 623);
            outlineBuilder(1, 1, "shallowMire", -1172, 622);
            outlineBuilder(1, 3, "shallowMire", -1171, 620);
            outlineBuilder(1, 2, "shallowMire", -1171, 621);
            outlineBuilder(1, 4, "shallowMire", -1169, 619);
            outlineBuilder(1, 2, "shallowMire", -1167, 620);
            outlineBuilder(1, 2, "shallowMire", -1165, 618);
            outlineBuilder(1, 1, "shallowMire", -1166, 617);
            outlineBuilder(1, 2, "shallowMire", -1163, 624);
            outlineBuilder(1, 1, "shallowMire", -1161, 619);
            outlineBuilder(2, 1, "shallowMire", -1160, 621);
            outlineBuilder(6, 2, "shallowMire", -1169, 594);
            outlineBuilder(1, 4, "shallowMire", -1170, 595);
            outlineBuilder(1, 1, "shallowMire", -1157, 623);
            outlineBuilder(1, 2, "shallowMire", -1146, 621);
            outlineBuilder(1, 4, "shallowMire", -1147, 619);
            outlineBuilder(1, 2, "shallowMire", -1150, 624);
            outlineBuilder(1, 1, "shallowMire", -1153, 625);
            outlineBuilder(1, 1, "shallowMire", -1150, 625);
            outlineBuilder(1, 2, "shallowMire", -1148, 620);
            outlineBuilder(1, 3, "shallowMire", -1152, 620);
            outlineBuilder(2, 1, "shallowMire", -1150, 618);
            outlineBuilder(1, 2, "shallowMire", -1144, 618);
            outlineBuilder(1, 2, "shallowMire", -1149, 617);
            outlineBuilder(1, 1, "shallowMire", -1148, 618);
            outlineBuilder(2, 1, "shallowMire", -1144, 615);
            outlineBuilder(1, 1, "shallowMire", -1147, 615);
            outlineBuilder(1, 1, "shallowMire", -1146, 614);

            outlineBuilder(1, 4, "vardanianWetlands", -1176, 593);
            outlineBuilder(1, 3, "vardanianWetlands", -1174, 594);
            outlineBuilder(1, 2, "vardanianWetlands", -1173, 596);
            outlineBuilder(1, 1, "vardanianWetlands", -1175, 597);
            outlineBuilder(1, 2, "vardanianWetlands", -1175, 598);
            outlineBuilder(1, 1, "vardanianWetlands", -1174, 602);
            outlineBuilder(2, 1, "vardanianWetlands", -1172, 599);
            outlineBuilder(1, 1, "vardanianWetlands", -1171, 599);
            outlineBuilder(2, 2, "vardanianWetlands", -1170, 599);
            outlineBuilder(1, 2, "vardanianWetlands", -1169, 601);
            outlineBuilder(1, 1, "vardanianWetlands", -1166, 601);
            outlineBuilder(1, 3, "vardanianWetlands", -1166, 602);
            outlineBuilder(1, 1, "vardanianWetlands", -1165, 605);
            outlineBuilder(1, 2, "vardanianWetlands", -1169, 595);
            outlineBuilder(1, 1, "vardanianWetlands", -1156, 596);
            outlineBuilder(1, 5, "vardanianWetlands", -1160, 597);
            outlineBuilder(1, 4, "vardanianWetlands", -1160, 598);
            outlineBuilder(1, 6, "vardanianWetlands", -1160, 599);
            outlineBuilder(1, 5, "vardanianWetlands", -1159, 600);
            outlineBuilder(2, 1, "vardanianWetlands", -1165, 594);
            outlineBuilder(2, 2, "vardanianWetlands", -1164, 595);
            outlineBuilder(2, 1, "vardanianWetlands", -1166, 597);
            outlineBuilder(1, 1, "vardanianWetlands", -1165, 598);
            outlineBuilder(1, 1, "vardanianWetlands", -1164, 599);
            outlineBuilder(2, 1, "vardanianWetlands", -1162, 599);
            outlineBuilder(1, 1, "vardanianWetlands", -1162, 595);
            outlineBuilder(1, 1, "vardanianWetlands", -1161, 602);
            outlineBuilder(1, 1, "vardanianWetlands", -1151, 594);
            outlineBuilder(3, 2, "vardanianWetlands", -1149, 593);
            outlineBuilder(1, 1, "vardanianWetlands", -1147, 592);
            outlineBuilder(1, 2, "vardanianWetlands", -1146, 593);
            outlineBuilder(3, 1, "vardanianWetlands", -1143, 592);
            outlineBuilder(1, 1, "vardanianWetlands", -1146, 596);
            outlineBuilder(1, 2, "vardanianWetlands", -1152, 596);
            outlineBuilder(2, 2, "vardanianWetlands", -1147, 600);
            outlineBuilder(1, 1, "vardanianWetlands", -1144, 599);
            outlineBuilder(1, 1, "vardanianWetlands", -1145, 602);
            outlineBuilder(2, 1, "vardanianWetlands", -1143, 601);
            outlineBuilder(1, 1, "vardanianWetlands", -1175, 616);
            outlineBuilder(1, 2, "vardanianWetlands", -1174, 617);
            outlineBuilder(1, 4, "vardanianWetlands", -1174, 618);
            outlineBuilder(1, 3, "vardanianWetlands", -1174, 619);
            outlineBuilder(1, 2, "vardanianWetlands", -1173, 623);
            outlineBuilder(1, 5, "vardanianWetlands", -1172, 624);
            outlineBuilder(1, 2, "vardanianWetlands", -1171, 625);
            outlineBuilder(1, 4, "vardanianWetlands", -1170, 622);
            outlineBuilder(1, 2, "vardanianWetlands", -1169, 621);
            outlineBuilder(1, 1, "vardanianWetlands", -1168, 620);
            outlineBuilder(1, 1, "vardanianWetlands", -1166, 618);
            outlineBuilder(1, 2, "vardanianWetlands", -1165, 619);
            outlineBuilder(2, 4, "vardanianWetlands", -1164, 622);
            outlineBuilder(1, 2, "vardanianWetlands", -1162, 621);
            outlineBuilder(1, 2, "vardanianWetlands", -1161, 620);
            outlineBuilder(4, 1, "vardanianWetlands", -1148, 621);
            outlineBuilder(3, 1, "vardanianWetlands", -1149, 621);
            outlineBuilder(1, 1, "vardanianWetlands", -1150, 622);
            outlineBuilder(2, 2, "vardanianWetlands", -1152, 618);
            outlineBuilder(3, 2, "vardanianWetlands", -1147, 616);
            outlineBuilder(2, 1, "vardanianWetlands", -1145, 615);
            outlineBuilder(1, 1, "vardanianWetlands", -1146, 615);
            outlineBuilder(2, 1, "vardanianWetlands", -1143, 616);

            outlineBuilder(1, 4, "vardanianWoods", -1169, 592); //vardanianWoods
            outlineBuilder(1, 2, "vardanianWoods", -1168, 593);
            outlineBuilder(1, 8, "vardanianWoods", -1161, 592);
            outlineBuilder(1, 7, "vardanianWoods", -1160, 593);
            outlineBuilder(1, 4, "vardanianWoods", -1159, 594);
            outlineBuilder(1, 1, "vardanianWoods", -1159, 595);
            outlineBuilder(2, 2, "vardanianWoods", -1176, 624);
            outlineBuilder(1, 1, "vardanianWoods", -1174, 625);
            outlineBuilder(4, 4, "vardanianWoods", -1160, 615);
            outlineBuilder(1, 4, "vardanianWoods", -1159, 619);
            outlineBuilder(2, 4, "vardanianWoods", -1157, 614);
            outlineBuilder(1, 1, "vardanianWoods", -1156, 616);
            outlineBuilder(3, 1, "vardanianWoods", -1161, 615);
            outlineBuilder(3, 1, "vardanianWoods", -1160, 623);
            outlineBuilder(5, 1, "vardanianWoods", -1159, 621);
            outlineBuilder(4, 1, "vardanianWoods", -1156, 622);
            outlineBuilder(1, 1, "vardanianWoods", -1157, 625);
            outlineBuilder(2, 2, "vardanianWoods", -1155, 624);
            outlineBuilder(1, 6, "vardanianWoods", -1148, 625);
            outlineBuilder(1, 5, "vardanianWoods", -1147, 624);
            outlineBuilder(2, 4, "vardanianWoods", -1146, 622);
            outlineBuilder(2, 4, "vardanianWoods", -1154, 623);

            outlineBuilder(4, 1, "vardanianStone", -1158, 592);
            outlineBuilder(5, 1, "vardanianStone", -1158, 597);
            outlineBuilder(5, 1, "vardanianStone", -1158, 621);
            outlineBuilder(6, 1, "vardanianStone", -1158, 614);
            outlineBuilder(2, 4, "vardanianStone", -1162, 615);
            outlineBuilder(1, 2, "vardanianStone", -1160, 617);
            outlineBuilder(1, 2, "vardanianStone", -1160, 618);

        }
        //mapS18W33
        if (Y > -187519 && Y < -176743 && X < 344333 && X > 332640) //X33
        {
            elevation = -1;
            region = "s18w33";
            campout = true;
            //outlineBuilder(34, 34, "outline", -1142, 592);

            outlineBuilder(2, 1, "vardanianWetlands", -1142, 592); //vardanianWetlands
            outlineBuilder(2, 1, "vardanianWetlands", -1142, 616);
            outlineBuilder(1, 1, "vardanianWetlands", -1138, 592);
            outlineBuilder(4, 1, "vardanianWetlands", -1136, 592);
            outlineBuilder(1, 1, "vardanianWetlands", -1137, 593);
            outlineBuilder(1, 1, "vardanianWetlands", -1135, 592);
            outlineBuilder(3, 1, "vardanianWetlands", -1135, 594);
            outlineBuilder(2, 1, "vardanianWetlands", -1134, 595);
            outlineBuilder(1, 1, "vardanianWetlands", -1138, 597);
            outlineBuilder(2, 1, "vardanianWetlands", -1137, 598);
            outlineBuilder(1, 1, "vardanianWetlands", -1136, 598);
            outlineBuilder(2, 1, "vardanianWetlands", -1132, 593);
            outlineBuilder(4, 1, "vardanianWetlands", -1131, 592);
            outlineBuilder(1, 1, "vardanianWetlands", -1130, 593);
            outlineBuilder(3, 1, "vardanianWetlands", -1142, 600);
            outlineBuilder(2, 1, "vardanianWetlands", -1141, 601);
            outlineBuilder(1, 1, "vardanianWetlands", -1140, 601);
            outlineBuilder(1, 1, "vardanianWetlands", -1139, 615);
            outlineBuilder(3, 1, "vardanianWetlands", -1138, 614);
            outlineBuilder(1, 1, "vardanianWetlands", -1139, 617);
            outlineBuilder(2, 1, "vardanianWetlands", -1136, 615);
            outlineBuilder(1, 1, "vardanianWetlands", -1133, 617);
            outlineBuilder(3, 1, "vardanianWetlands", -1132, 615);
            outlineBuilder(1, 1, "vardanianWetlands", -1131, 616);
            outlineBuilder(2, 2, "vardanianWetlands", -1129, 616);
            outlineBuilder(6, 1, "vardanianWetlands", -1127, 613);
            outlineBuilder(1, 1, "vardanianWetlands", -1126, 618);
            outlineBuilder(2, 1, "vardanianWetlands", -1126, 615);
            outlineBuilder(2, 1, "vardanianWetlands", -1125, 616);
            outlineBuilder(1, 1, "vardanianWetlands", -1122, 615);
            outlineBuilder(1, 2, "vardanianWetlands", -1122, 616);
            outlineBuilder(1, 1, "vardanianWetlands", -1120, 617);
            outlineBuilder(1, 1, "vardanianWetlands", -1121, 612);
            outlineBuilder(2, 1, "vardanianWetlands", -1119, 611);
            outlineBuilder(2, 1, "vardanianWetlands", -1118, 612);
            outlineBuilder(4, 1, "vardanianWetlands", -1117, 613);
            outlineBuilder(3, 1, "vardanianWetlands", -1116, 613);
            outlineBuilder(1, 1, "vardanianWetlands", -1118, 608);
            outlineBuilder(3, 1, "vardanianWetlands", -1118, 616);
            outlineBuilder(1, 1, "vardanianWetlands", -1116, 609);
            outlineBuilder(2, 1, "vardanianWetlands", -1115, 609);
            outlineBuilder(1, 1, "vardanianWetlands", -1115, 607);
            outlineBuilder(4, 1, "vardanianWetlands", -1114, 606);
            outlineBuilder(1, 1, "vardanianWetlands", -1111, 614);
            outlineBuilder(2, 2, "vardanianWetlands", -1113, 613);
            outlineBuilder(1, 2, "vardanianWetlands", -1114, 612);
            outlineBuilder(1, 1, "vardanianWetlands", -1113, 606);
            outlineBuilder(3, 1, "vardanianWetlands", -1115, 617);
            outlineBuilder(2, 1, "vardanianWetlands", -1114, 617);
            outlineBuilder(2, 1, "vardanianWetlands", -1112, 609);
            outlineBuilder(3, 1, "vardanianWetlands", -1111, 608);
            outlineBuilder(2, 1, "vardanianWetlands", -1110, 608);
            outlineBuilder(2, 1, "vardanianWetlands", -1109, 593);
            outlineBuilder(1, 2, "vardanianWetlands", -1111, 595);
            outlineBuilder(1, 2, "vardanianWetlands", -1110, 596);
            outlineBuilder(1, 2, "vardanianWetlands", -1110, 598);
            outlineBuilder(2, 1, "vardanianWetlands", -1112, 599);
            outlineBuilder(3, 1, "vardanianWetlands", -1111, 600);
            outlineBuilder(1, 1, "vardanianWetlands", -1114, 603);
            outlineBuilder(3, 1, "vardanianWetlands", -1113, 602);
            outlineBuilder(2, 1, "vardanianWetlands", -1112, 603);
            outlineBuilder(3, 1, "vardanianWetlands", -1110, 603);
            outlineBuilder(6, 1, "vardanianWetlands", -1109, 600);
            outlineBuilder(1, 1, "vardanianWetlands", -1110, 592);

            outlineBuilder(1, 1, "vardanianWoods", -1136, 620); //vardanianWoods
            outlineBuilder(3, 1, "vardanianWoods", -1135, 619);
            outlineBuilder(4, 1, "vardanianWoods", -1134, 620);
            outlineBuilder(3, 1, "vardanianWoods", -1133, 621);
            outlineBuilder(4, 1, "vardanianWoods", -1132, 620);
            outlineBuilder(5, 3, "vardanianWoods", -1142, 621);
            outlineBuilder(4, 1, "vardanianWoods", -1139, 622);
            outlineBuilder(2, 1, "vardanianWoods", -1138, 624);
            outlineBuilder(3, 1, "vardanianWoods", -1137, 623);
            outlineBuilder(2, 1, "vardanianWoods", -1136, 624);
            outlineBuilder(1, 1, "vardanianWoods", -1135, 625);
            outlineBuilder(4, 1, "vardanianWoods", -1131, 619);
            outlineBuilder(6, 1, "vardanianWoods", -1130, 619);
            outlineBuilder(4, 1, "vardanianWoods", -1129, 620);
            outlineBuilder(2, 1, "vardanianWoods", -1128, 621);
            outlineBuilder(1, 1, "vardanianWoods", -1128, 625);
            outlineBuilder(2, 4, "vardanianWoods", -1127, 624);
            outlineBuilder(2, 2, "vardanianWoods", -1125, 621);
            outlineBuilder(1, 1, "vardanianWoods", -1126, 620);
            outlineBuilder(4, 1, "vardanianWoods", -1123, 622);
            outlineBuilder(6, 1, "vardanianWoods", -1122, 620);
            outlineBuilder(4, 1, "vardanianWoods", -1121, 622);
            outlineBuilder(6, 1, "vardanianWoods", -1120, 620);
            outlineBuilder(3, 1, "vardanianWoods", -1119, 623);
            outlineBuilder(5, 1, "vardanianWoods", -1118, 621);
            outlineBuilder(6, 1, "vardanianWoods", -1117, 620);
            outlineBuilder(1, 1, "vardanianWoods", -1116, 625);
            outlineBuilder(2, 1, "vardanianWoods", -1115, 624);
            outlineBuilder(4, 1, "vardanianWoods", -1114, 622);
            outlineBuilder(1, 1, "vardanianWoods", -1113, 622);
            outlineBuilder(2, 1, "vardanianWoods", -1113, 624);
            outlineBuilder(1, 1, "vardanianWoods", -1112, 625);
            outlineBuilder(1, 1, "vardanianWoods", -1113, 620);
            outlineBuilder(6, 1, "vardanianWoods", -1112, 617);
            outlineBuilder(8, 1, "vardanianWoods", -1111, 618);
            outlineBuilder(4, 1, "vardanianWoods", -1110, 622);
            outlineBuilder(3, 1, "vardanianWoods", -1109, 623);
            outlineBuilder(2, 1, "vardanianWoods", -1110, 618);
            outlineBuilder(1, 1, "vardanianWoods", -1110, 616);
            outlineBuilder(8, 1, "vardanianWoods", -1109, 613);

            outlineBuilder(3, 1, "shallowMire", -1141, 592); //shallowMire
            outlineBuilder(4, 2, "shallowMire", -1140, 592);
            outlineBuilder(1, 1, "shallowMire", -1134, 592);
            outlineBuilder(1, 1, "shallowMire", -1135, 593);
            outlineBuilder(2, 1, "shallowMire", -1138, 593);
            outlineBuilder(1, 1, "shallowMire", -1138, 596);
            outlineBuilder(1, 1, "shallowMire", -1136, 596);
            outlineBuilder(1, 3, "shallowMire", -1137, 597);
            outlineBuilder(1, 2, "shallowMire", -1136, 599);
            outlineBuilder(1, 2, "shallowMire", -1137, 600);
            outlineBuilder(1, 1, "shallowMire", -1132, 592);
            outlineBuilder(1, 1, "shallowMire", -1133, 594);
            outlineBuilder(1, 2, "shallowMire", -1133, 595);
            outlineBuilder(1, 1, "shallowMire", -1130, 592);
            outlineBuilder(1, 2, "shallowMire", -1129, 593);
            outlineBuilder(1, 2, "shallowMire", -1130, 594);
            outlineBuilder(1, 1, "shallowMire", -1142, 594);
            outlineBuilder(2, 1, "shallowMire", -1142, 598);
            outlineBuilder(2, 2, "shallowMire", -1141, 599);
            outlineBuilder(2, 1, "shallowMire", -1142, 603);
            outlineBuilder(1, 1, "shallowMire", -1141, 603);
            outlineBuilder(1, 1, "shallowMire", -1140, 602);
            outlineBuilder(1, 1, "shallowMire", -1141, 617);
            outlineBuilder(1, 2, "shallowMire", -1142, 618);
            outlineBuilder(1, 2, "shallowMire", -1141, 620);
            outlineBuilder(1, 1, "shallowMire", -1139, 621);
            outlineBuilder(1, 1, "shallowMire", -1140, 615);
            outlineBuilder(1, 1, "shallowMire", -1139, 616);
            outlineBuilder(1, 1, "shallowMire", -1139, 614);
            outlineBuilder(1, 1, "shallowMire", -1138, 617);
            outlineBuilder(1, 1, "shallowMire", -1137, 615);
            outlineBuilder(1, 1, "shallowMire", -1137, 618);
            outlineBuilder(3, 1, "shallowMire", -1136, 617);
            outlineBuilder(2, 1, "shallowMire", -1135, 616);
            outlineBuilder(1, 1, "shallowMire", -1135, 622);
            outlineBuilder(1, 1, "shallowMire", -1134, 625);
            outlineBuilder(1, 1, "shallowMire", -1132, 624);
            outlineBuilder(1, 1, "shallowMire", -1131, 623);
            outlineBuilder(1, 1, "shallowMire", -1134, 619);
            outlineBuilder(1, 1, "shallowMire", -1133, 618);
            outlineBuilder(2, 1, "shallowMire", -1133, 615);
            outlineBuilder(2, 1, "shallowMire", -1132, 613);
            outlineBuilder(2, 1, "shallowMire", -1131, 614);
            outlineBuilder(1, 1, "shallowMire", -1128, 623);
            outlineBuilder(1, 1, "shallowMire", -1129, 625);
            outlineBuilder(1, 3, "shallowMire", -1131, 618);
            outlineBuilder(1, 1, "shallowMire", -1129, 619);
            outlineBuilder(1, 1, "shallowMire", -1128, 620);
            outlineBuilder(1, 3, "shallowMire", -1126, 623);
            outlineBuilder(1, 1, "shallowMire", -1126, 621);
            outlineBuilder(1, 1, "shallowMire", -1129, 615);
            outlineBuilder(2, 1, "shallowMire", -1128, 614);
            outlineBuilder(1, 1, "shallowMire", -1126, 614);
            outlineBuilder(1, 1, "shallowMire", -1125, 615);
            outlineBuilder(2, 1, "shallowMire", -1124, 616);
            outlineBuilder(2, 1, "shallowMire", -1125, 618);
            outlineBuilder(1, 1, "shallowMire", -1124, 620);
            outlineBuilder(1, 1, "shallowMire", -1123, 621);
            outlineBuilder(2, 1, "shallowMire", -1122, 618);
            outlineBuilder(1, 1, "shallowMire", -1120, 619);
            outlineBuilder(1, 1, "shallowMire", -1119, 622);
            outlineBuilder(1, 1, "shallowMire", -1118, 620);
            outlineBuilder(1, 1, "shallowMire", -1122, 614);
            outlineBuilder(1, 2, "shallowMire", -1121, 615);
            outlineBuilder(1, 1, "shallowMire", -1120, 616);
            outlineBuilder(1, 1, "shallowMire", -1122, 610);
            outlineBuilder(1, 1, "shallowMire", -1121, 611);
            outlineBuilder(2, 1, "shallowMire", -1120, 612);
            outlineBuilder(1, 1, "shallowMire", -1119, 613);
            outlineBuilder(1, 1, "shallowMire", -1118, 614);
            outlineBuilder(1, 1, "shallowMire", -1120, 609);
            outlineBuilder(3, 1, "shallowMire", -1119, 608);
            outlineBuilder(1, 1, "shallowMire", -1118, 609);
            outlineBuilder(1, 1, "shallowMire", -1118, 611);
            outlineBuilder(1, 2, "shallowMire", -1117, 612);
            outlineBuilder(3, 1, "shallowMire", -1117, 617);
            outlineBuilder(1, 1, "shallowMire", -1113, 623);
            outlineBuilder(1, 1, "shallowMire", -1112, 624);
            outlineBuilder(1, 2, "shallowMire", -1114, 621);
            outlineBuilder(4, 1, "shallowMire", -1116, 619);
            outlineBuilder(1, 1, "shallowMire", -1109, 622);
            outlineBuilder(2, 1, "shallowMire", -1110, 620);
            outlineBuilder(1, 1, "shallowMire", -1110, 617);
            outlineBuilder(1, 1, "shallowMire", -1112, 616);
            outlineBuilder(3, 1, "shallowMire", -1111, 615);
            outlineBuilder(2, 1, "shallowMire", -1110, 614);
            outlineBuilder(1, 1, "shallowMire", -1109, 612);
            outlineBuilder(1, 1, "shallowMire", -1112, 612);
            outlineBuilder(1, 1, "shallowMire", -1114, 613);
            outlineBuilder(1, 1, "shallowMire", -1116, 617);
            outlineBuilder(1, 2, "shallowMire", -1115, 616);
            outlineBuilder(1, 1, "shallowMire", -1114, 610);
            outlineBuilder(3, 1, "shallowMire", -1113, 607);
            outlineBuilder(3, 1, "shallowMire", -1112, 606);
            outlineBuilder(1, 1, "shallowMire", -1111, 607);
            outlineBuilder(1, 2, "shallowMire", -1110, 606);
            outlineBuilder(1, 1, "shallowMire", -1109, 607);
            outlineBuilder(1, 1, "shallowMire", -1109, 592);
            outlineBuilder(1, 1, "shallowMire", -1112, 592);
            outlineBuilder(1, 1, "shallowMire", -1111, 593);
            outlineBuilder(2, 1, "shallowMire", -1110, 593);
            outlineBuilder(1, 2, "shallowMire", -1113, 595);
            outlineBuilder(1, 2, "shallowMire", -1112, 596);
            outlineBuilder(1, 1, "shallowMire", -1109, 597);
            outlineBuilder(1, 1, "shallowMire", -1111, 598);
            outlineBuilder(1, 1, "shallowMire", -1110, 599);
            outlineBuilder(1, 1, "shallowMire", -1114, 604);
            outlineBuilder(1, 1, "shallowMire", -1115, 603);
            outlineBuilder(1, 1, "shallowMire", -1114, 602);
            outlineBuilder(2, 1, "shallowMire", -1113, 600);
            outlineBuilder(1, 1, "shallowMire", -1112, 602);
            outlineBuilder(1, 1, "shallowMire", -1111, 603);
            outlineBuilder(2, 1, "shallowMire", -1110, 601);

            outlineBuilder(3, 1, "mire", -1142, 595); //mire
            outlineBuilder(4, 1, "mire", -1141, 595);
            outlineBuilder(3, 1, "mire", -1140, 596);
            outlineBuilder(2, 1, "mire", -1142, 619);
            outlineBuilder(1, 1, "mire", -1141, 619);
            outlineBuilder(1, 1, "mire", -1138, 595);
            outlineBuilder(3, 1, "mire", -1137, 594);
            outlineBuilder(1, 1, "mire", -1137, 592);
            outlineBuilder(4, 1, "mire", -1140, 616);
            outlineBuilder(3, 1, "mire", -1139, 618);
            outlineBuilder(6, 1, "mire", -1138, 618);
            outlineBuilder(4, 1, "mire", -1137, 619);
            outlineBuilder(3, 1, "mire", -1136, 621);
            outlineBuilder(2, 1, "mire", -1135, 623);
            outlineBuilder(1, 1, "mire", -1134, 624);
            outlineBuilder(2, 1, "mire", -1133, 624);
            outlineBuilder(1, 1, "mire", -1132, 625);
            outlineBuilder(2, 1, "mire", -1131, 624);
            outlineBuilder(1, 1, "mire", -1130, 625);
            outlineBuilder(1, 2, "mire", -1129, 624);
            outlineBuilder(1, 1, "mire", -1126, 619);
            outlineBuilder(1, 1, "mire", -1125, 620);
            outlineBuilder(1, 1, "mire", -1126, 617);
            outlineBuilder(2, 1, "mire", -1128, 618);
            outlineBuilder(5, 1, "mire", -1127, 619);
            outlineBuilder(1, 1, "mire", -1126, 622);
            outlineBuilder(2, 1, "mire", -1124, 618);
            outlineBuilder(1, 1, "mire", -1135, 598);
            outlineBuilder(2, 1, "mire", -1137, 616);
            outlineBuilder(2, 1, "mire", -1133, 592);
            outlineBuilder(2, 1, "mire", -1134, 593);
            outlineBuilder(1, 1, "mire", -1135, 618);
            outlineBuilder(2, 1, "mire", -1133, 619);
            outlineBuilder(2, 1, "mire", -1132, 618);
            outlineBuilder(1, 1, "mire", -1131, 617);
            outlineBuilder(1, 2, "mire", -1129, 592);
            outlineBuilder(1, 1, "mire", -1109, 621);
            outlineBuilder(1, 1, "mire", -1112, 623);
            outlineBuilder(1, 1, "mire", -1110, 607);
            outlineBuilder(1, 1, "mire", -1112, 601);
            outlineBuilder(1, 1, "mire", -1110, 600);
            outlineBuilder(1, 1, "mire", -1109, 599);
            outlineBuilder(1, 1, "mire", -1111, 599);
            outlineBuilder(1, 1, "mire", -1109, 595);
            outlineBuilder(1, 1, "mire", -1111, 592);
            outlineBuilder(1, 3, "mire", -1114, 605);
            outlineBuilder(3, 1, "mire", -1111, 604);
            outlineBuilder(1, 1, "mire", -1116, 616);
            outlineBuilder(3, 1, "mire", -1122, 611);
            outlineBuilder(2, 1, "mire", -1121, 613);
            outlineBuilder(1, 1, "mire", -1120, 614);
            outlineBuilder(1, 1, "mire", -1118, 615);
            outlineBuilder(1, 1, "mire", -1122, 617);
            outlineBuilder(1, 1, "mire", -1120, 618);
            outlineBuilder(5, 1, "mire", -1121, 617);
            outlineBuilder(8, 1, "mire", -1119, 614);
            outlineBuilder(1, 1, "mire", -1118, 619);
            outlineBuilder(1, 1, "mire", -1116, 618);
            outlineBuilder(2, 1, "mire", -1116, 623);
            outlineBuilder(4, 1, "mire", -1115, 620);
            outlineBuilder(4, 1, "mire", -1109, 608);
            outlineBuilder(4, 1, "mire", -1110, 610);
            outlineBuilder(3, 1, "mire", -1111, 611);
            outlineBuilder(1, 1, "mire", -1112, 615);
            outlineBuilder(2, 1, "mire", -1114, 619);
            outlineBuilder(5, 1, "mire", -1113, 615);
            outlineBuilder(2, 1, "mire", -1114, 614);
            outlineBuilder(1, 1, "mire", -1111, 594);
            outlineBuilder(2, 1, "mire", -1112, 593);
            outlineBuilder(3, 1, "mire", -1113, 592);
            outlineBuilder(1, 2, "mire", -1111, 597);
            outlineBuilder(2, 1, "mire", -1112, 597);
            outlineBuilder(4, 1, "mire", -1113, 596);
            outlineBuilder(1, 1, "mire", -1112, 611);
            outlineBuilder(2, 1, "mire", -1113, 610);
            outlineBuilder(1, 1, "mire", -1114, 611);
            outlineBuilder(5, 1, "mire", -1115, 611);
            outlineBuilder(1, 1, "mire", -1118, 610);
            outlineBuilder(2, 1, "mire", -1116, 610);
            outlineBuilder(2, 1, "mire", -1120, 610);
            outlineBuilder(3, 1, "mire", -1115, 604);
            outlineBuilder(1, 1, "mire", -1115, 608);
            outlineBuilder(18, 1, "mire", -1139, 596);
            outlineBuilder(13, 1, "mire", -1141, 604);
            outlineBuilder(12, 1, "mire", -1140, 603);
            outlineBuilder(16, 1, "mire", -1138, 598);
            outlineBuilder(14, 2, "mire", -1137, 601);
            outlineBuilder(16, 1, "mire", -1135, 600);
            outlineBuilder(22, 1, "mire", -1134, 597);
            outlineBuilder(19, 1, "mire", -1133, 596);
            outlineBuilder(17, 1, "mire", -1132, 596);
            outlineBuilder(18, 1, "mire", -1131, 596);
            outlineBuilder(23, 1, "mire", -1130, 595);
            outlineBuilder(20, 1, "mire", -1129, 595);
            outlineBuilder(20, 1, "mire", -1128, 594);
            outlineBuilder(21, 1, "mire", -1127, 592);
            outlineBuilder(22, 1, "mire", -1126, 592);
            outlineBuilder(23, 1, "mire", -1125, 592);
            outlineBuilder(24, 1, "mire", -1124, 592);
            outlineBuilder(29, 1, "mire", -1123, 592);
            outlineBuilder(11, 1, "mire", -1142, 605);
            outlineBuilder(20, 1, "mire", -1117, 592);
            outlineBuilder(17, 1, "mire", -1116, 592);
            outlineBuilder(11, 1, "mire", -1115, 592);
            outlineBuilder(10, 1, "mire", -1114, 592);
            outlineBuilder(16, 2, "mire", -1119, 592);
            outlineBuilder(17, 1, "mire", -1120, 592);
            outlineBuilder(18, 1, "mire", -1122, 592);
            outlineBuilder(19, 1, "mire", -1121, 592);
        }
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
        //mapS17W32
        if (Y > -177325 && Y < -166541 && X < 334130 && X > 322464) //X32
        {
            elevation = -1;
            region = "s17w32";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1108, 558);

            outlineBuilder(1, 1, "vardanianWetlands", -1108, 558);
            outlineBuilder(1, 1, "vardanianWetlands", -1108, 591);
            outlineBuilder(1, 2, "vardanianWetlands", -1108, 590);
            outlineBuilder(1, 1, "vardanianWetlands", -1107, 560);
            outlineBuilder(1, 3, "vardanianWetlands", -1108, 561);
            outlineBuilder(1, 4, "vardanianWetlands", -1108, 562);
            outlineBuilder(1, 1, "vardanianWetlands", -1106, 563);
            outlineBuilder(1, 1, "vardanianWetlands", -1108, 565);
            outlineBuilder(3, 1, "vardanianWetlands", -1107, 570);
            outlineBuilder(2, 1, "vardanianWetlands", -1108, 572);
            outlineBuilder(1, 2, "vardanianWetlands", -1106, 573);
            outlineBuilder(1, 4, "vardanianWetlands", -1106, 574);
            outlineBuilder(1, 2, "vardanianWetlands", -1107, 575);
            outlineBuilder(5, 1, "vardanianWetlands", -1108, 577);
            outlineBuilder(4, 1, "vardanianWetlands", -1107, 578);
            outlineBuilder(1, 1, "vardanianWetlands", -1106, 579);
            outlineBuilder(1, 1, "vardanianWetlands", -1108, 587);
            outlineBuilder(1, 2, "vardanianWetlands", -1083, 558);
            outlineBuilder(1, 2, "vardanianWetlands", -1084, 559);
            outlineBuilder(3, 1, "vardanianWetlands", -1075, 560);
            outlineBuilder(1, 1, "vardanianWetlands", -1076, 561);

            outlineBuilder(1, 3, "shallowMire", -1107, 558);
            outlineBuilder(1, 3, "shallowMire", -1107, 591);
            outlineBuilder(1, 1, "shallowMire", -1106, 590);
            outlineBuilder(1, 2, "shallowMire", -1108, 589);
            outlineBuilder(1, 1, "shallowMire", -1108, 560);
            outlineBuilder(2, 1, "shallowMire", -1108, 563);
            outlineBuilder(2, 1, "shallowMire", -1107, 564);
            outlineBuilder(2, 1, "shallowMire", -1106, 565);
            outlineBuilder(1, 3, "shallowMire", -1103, 559);
            outlineBuilder(1, 4, "shallowMire", -1105, 560);
            outlineBuilder(1, 2, "shallowMire", -1105, 561);
            outlineBuilder(1, 1, "shallowMire", -1102, 561);
            outlineBuilder(1, 3, "shallowMire", -1104, 562);
            outlineBuilder(2, 1, "shallowMire", -1104, 563);
            outlineBuilder(2, 1, "shallowMire", -1103, 564);
            outlineBuilder(1, 2, "shallowMire", -1102, 567);
            outlineBuilder(1, 4, "shallowMire", -1101, 566);
            outlineBuilder(2, 1, "shallowMire", -1107, 568);
            outlineBuilder(2, 1, "shallowMire", -1108, 569);
            outlineBuilder(1, 1, "shallowMire", -1105, 569);
            outlineBuilder(1, 3, "shallowMire", -1106, 570);
            outlineBuilder(1, 2, "shallowMire", -1106, 571);
            outlineBuilder(1, 3, "shallowMire", -1106, 572);
            outlineBuilder(1, 3, "shallowMire", -1104, 573);
            outlineBuilder(1, 1, "shallowMire", -1102, 574);
            outlineBuilder(1, 5, "shallowMire", -1105, 575);
            outlineBuilder(1, 4, "shallowMire", -1108, 576);
            outlineBuilder(1, 1, "shallowMire", -1107, 577);
            outlineBuilder(1, 8, "shallowMire", -1103, 576);
            outlineBuilder(1, 6, "shallowMire", -1101, 577);
            outlineBuilder(1, 4, "shallowMire", -1101, 578);
            outlineBuilder(1, 1, "shallowMire", -1101, 579);
            outlineBuilder(1, 2, "shallowMire", -1098, 575);
            outlineBuilder(3, 1, "shallowMire", -1107, 583);
            outlineBuilder(3, 1, "shallowMire", -1108, 584);
            outlineBuilder(1, 2, "shallowMire", -1097, 565);
            outlineBuilder(1, 4, "shallowMire", -1096, 567);
            outlineBuilder(1, 4, "shallowMire", -1093, 566);
            outlineBuilder(1, 7, "shallowMire", -1096, 564);
            outlineBuilder(1, 2, "shallowMire", -1099, 558);
            outlineBuilder(1, 2, "shallowMire", -1096, 559);
            outlineBuilder(1, 2, "shallowMire", -1092, 558);
            outlineBuilder(1, 2, "shallowMire", -1087, 558);
            outlineBuilder(1, 1, "shallowMire", -1085, 559);
            outlineBuilder(1, 4, "shallowMire", -1078, 559);
            outlineBuilder(1, 3, "shallowMire", -1078, 560);
            outlineBuilder(1, 2, "shallowMire", -1079, 561);
            outlineBuilder(1, 2, "shallowMire", -1089, 563);
            outlineBuilder(1, 2, "shallowMire", -1088, 565);
            outlineBuilder(1, 1, "shallowMire", -1086, 564);
            outlineBuilder(1, 2, "shallowMire", -1086, 562);
            outlineBuilder(1, 2, "shallowMire", -1083, 561);
            outlineBuilder(1, 1, "shallowMire", -1081, 558);
            outlineBuilder(1, 1, "shallowMire", -1082, 559);
            outlineBuilder(1, 1, "shallowMire", -1082, 559);
            outlineBuilder(1, 1, "shallowMire", -1081, 558);
            outlineBuilder(2, 1, "shallowMire", -1076, 563);
            outlineBuilder(6, 1, "shallowMire", -1075, 563);
            outlineBuilder(3, 1, "shallowMire", -1076, 567);
            outlineBuilder(2, 1, "shallowMire", -1077, 569);

            outlineBuilder(1, 5, "mire", -1108, 559);
            outlineBuilder(1, 1, "mire", -1106, 560);
            outlineBuilder(1, 5, "mire", -1104, 558);
            outlineBuilder(1, 1, "mire", -1107, 563);
            outlineBuilder(1, 1, "mire", -1105, 563);
            outlineBuilder(1, 2, "mire", -1106, 564);
            outlineBuilder(1, 1, "mire", -1100, 559);
            outlineBuilder(1, 1, "mire", -1103, 561);
            outlineBuilder(1, 1, "mire", -1101, 562);
            outlineBuilder(3, 1, "mire", -1108, 566);
            outlineBuilder(2, 1, "mire", -1107, 566);
            outlineBuilder(3, 1, "mire", -1106, 567);
            outlineBuilder(1, 6, "mire", -1105, 568);
            outlineBuilder(1, 2, "mire", -1104, 567);
            outlineBuilder(1, 3, "mire", -1104, 569);
            outlineBuilder(2, 1, "mire", -1102, 565);
            outlineBuilder(1, 4, "mire", -1100, 567);
            outlineBuilder(1, 1, "mire", -1097, 566);
            outlineBuilder(1, 1, "mire", -1108, 571);
            outlineBuilder(2, 1, "mire", -1107, 573);
            outlineBuilder(2, 1, "mire", -1108, 574);
            outlineBuilder(1, 3, "mire", -1108, 588);
            outlineBuilder(1, 2, "mire", -1107, 587);
            outlineBuilder(1, 1, "mire", -1107, 586);
            outlineBuilder(1, 1, "mire", -1106, 585);
            outlineBuilder(2, 1, "mire", -1106, 577);
            outlineBuilder(3, 1, "mire", -1105, 578);
            outlineBuilder(1, 1, "mire", -1104, 579);
            outlineBuilder(1, 1, "mire", -1103, 580);
            outlineBuilder(4, 1, "mire", -1106, 580);
            outlineBuilder(1, 1, "mire", -1107, 582);
            outlineBuilder(2, 1, "mire", -1108, 582);
            outlineBuilder(1, 4, "mire", -1092, 565);
            outlineBuilder(1, 5, "mire", -1097, 558);
            outlineBuilder(1, 1, "mire", -1094, 559);
            outlineBuilder(1, 3, "mire", -1089, 564);
            outlineBuilder(1, 4, "mire", -1087, 563);
            outlineBuilder(1, 4, "mire", -1084, 562);
            outlineBuilder(1, 1, "mire", -1081, 561);
            outlineBuilder(1, 2, "mire", -1085, 558);
            outlineBuilder(1, 6, "mire", -1080, 558);
            outlineBuilder(2, 3, "mire", -1081, 559);
            outlineBuilder(1, 1, "mire", -1080, 561);
            outlineBuilder(1, 3, "mire", -1078, 562);
            outlineBuilder(1, 1, "mire", -1077, 561);
            outlineBuilder(1, 1, "mire", -1077, 563);
        }
        //mapS17W33
        if (Y > -177325 && Y < -166541 && X < 344333 && X > 332640) //X33
        {
            elevation = -1;
            region = "s17w33";
            campout = true;
            //outlineBuilder(34, 34, "outline", -1142, 558);

            outlineBuilder(1, 1, "vardanianWetlands", -1137, 558); //vardanianWetlands
            outlineBuilder(1, 1, "vardanianWetlands", -1140, 588);
            outlineBuilder(1, 3, "vardanianWetlands", -1140, 589);
            outlineBuilder(1, 2, "vardanianWetlands", -1139, 590);
            outlineBuilder(1, 1, "vardanianWetlands", -1138, 591);
            outlineBuilder(1, 1, "vardanianWetlands", -1109, 558);
            outlineBuilder(1, 2, "vardanianWetlands", -1135, 558);
            outlineBuilder(1, 4, "vardanianWetlands", -1135, 559);
            outlineBuilder(1, 1, "vardanianWetlands", -1134, 560);
            outlineBuilder(3, 1, "vardanianWetlands", -1141, 566);
            outlineBuilder(1, 1, "vardanianWetlands", -1142, 567);
            outlineBuilder(2, 1, "vardanianWetlands", -1142, 580);
            outlineBuilder(5, 1, "vardanianWetlands", -1141, 579);
            outlineBuilder(1, 1, "vardanianWetlands", -1140, 580);
            outlineBuilder(1, 2, "vardanianWetlands", -1139, 559);
            outlineBuilder(1, 3, "vardanianWetlands", -1139, 560);
            outlineBuilder(1, 1, "vardanianWetlands", -1129, 559);
            outlineBuilder(1, 2, "vardanianWetlands", -1129, 560);
            outlineBuilder(1, 2, "vardanianWetlands", -1130, 561);
            outlineBuilder(1, 1, "vardanianWetlands", -1127, 561);
            outlineBuilder(1, 2, "vardanianWetlands", -1129, 563);
            outlineBuilder(1, 3, "vardanianWetlands", -1130, 564);
            outlineBuilder(1, 2, "vardanianWetlands", -1130, 565);
            outlineBuilder(1, 1, "vardanianWetlands", -1137, 563);
            outlineBuilder(1, 1, "vardanianWetlands", -1138, 564);
            outlineBuilder(1, 3, "vardanianWetlands", -1139, 565);
            outlineBuilder(2, 1, "vardanianWetlands", -1135, 562);
            outlineBuilder(1, 1, "vardanianWetlands", -1134, 562);
            outlineBuilder(2, 1, "vardanianWetlands", -1132, 562);
            outlineBuilder(2, 1, "vardanianWetlands", -1133, 563);
            outlineBuilder(2, 1, "vardanianWetlands", -1133, 566);
            outlineBuilder(3, 1, "vardanianWetlands", -1134, 568);
            outlineBuilder(1, 1, "vardanianWetlands", -1135, 569);
            outlineBuilder(1, 1, "vardanianWetlands", -1133, 570);
            outlineBuilder(1, 1, "vardanianWetlands", -1132, 571);
            outlineBuilder(1, 1, "vardanianWetlands", -1134, 590);
            outlineBuilder(3, 1, "vardanianWetlands", -1133, 589);
            outlineBuilder(1, 1, "vardanianWetlands", -1132, 590);
            outlineBuilder(1, 1, "vardanianWetlands", -1131, 591);
            outlineBuilder(1, 2, "vardanianWetlands", -1130, 589);
            outlineBuilder(1, 1, "vardanianWetlands", -1112, 589);
            outlineBuilder(1, 3, "vardanianWetlands", -1112, 590);
            outlineBuilder(1, 1, "vardanianWetlands", -1111, 591);
            outlineBuilder(1, 3, "vardanianWetlands", -1111, 587);
            outlineBuilder(1, 2, "vardanianWetlands", -1111, 586);
            outlineBuilder(1, 1, "vardanianWetlands", -1112, 585);
            outlineBuilder(1, 1, "vardanianWetlands", -1138, 587);
            outlineBuilder(1, 1, "vardanianWetlands", -1135, 587);
            outlineBuilder(1, 3, "vardanianWetlands", -1135, 586);
            outlineBuilder(1, 2, "vardanianWetlands", -1139, 585);
            outlineBuilder(1, 2, "vardanianWetlands", -1138, 584);
            outlineBuilder(1, 2, "vardanianWetlands", -1140, 578);
            outlineBuilder(1, 1, "vardanianWetlands", -1112, 561);
            outlineBuilder(1, 1, "vardanianWetlands", -1109, 561);
            outlineBuilder(1, 2, "vardanianWetlands", -1110, 562);
            outlineBuilder(2, 1, "vardanianWetlands", -1110, 564);
            outlineBuilder(3, 1, "vardanianWetlands", -1109, 564);
            outlineBuilder(1, 1, "vardanianWetlands", -1140, 575);
            outlineBuilder(1, 1, "vardanianWetlands", -1138, 571);
            outlineBuilder(1, 4, "vardanianWetlands", -1139, 572);
            outlineBuilder(1, 2, "vardanianWetlands", -1138, 573);
            outlineBuilder(1, 3, "vardanianWetlands", -1134, 576);
            outlineBuilder(1, 4, "vardanianWetlands", -1135, 577);
            outlineBuilder(1, 3, "vardanianWetlands", -1135, 578);
            outlineBuilder(1, 3, "vardanianWetlands", -1136, 579);
            outlineBuilder(1, 3, "vardanianWetlands", -1135, 580);
            outlineBuilder(1, 2, "vardanianWetlands", -1134, 581);
            outlineBuilder(3, 1, "vardanianWetlands", -1131, 579);
            outlineBuilder(1, 1, "vardanianWetlands", -1130, 580);
            outlineBuilder(2, 1, "vardanianWetlands", -1112, 566);
            outlineBuilder(1, 1, "vardanianWetlands", -1113, 567);
            outlineBuilder(1, 1, "vardanianWetlands", -1114, 569);
            outlineBuilder(1, 2, "vardanianWetlands", -1112, 569);
            outlineBuilder(1, 4, "vardanianWetlands", -1113, 570);
            outlineBuilder(1, 1, "vardanianWetlands", -1112, 571);
            outlineBuilder(1, 2, "vardanianWetlands", -1116, 572);
            outlineBuilder(1, 2, "vardanianWetlands", -1119, 574);
            outlineBuilder(1, 3, "vardanianWetlands", -1119, 575);
            outlineBuilder(1, 1, "vardanianWetlands", -1118, 576);
            outlineBuilder(1, 5, "vardanianWetlands", -1118, 577);
            outlineBuilder(1, 4, "vardanianWetlands", -1116, 576);
            outlineBuilder(1, 2, "vardanianWetlands", -1115, 578);
            outlineBuilder(1, 2, "vardanianWetlands", -1113, 575);
            outlineBuilder(1, 3, "vardanianWetlands", -1114, 574);
            outlineBuilder(2, 1, "vardanianWetlands", -1109, 573);
            outlineBuilder(1, 1, "vardanianWetlands", -1111, 577);
            outlineBuilder(1, 1, "vardanianWetlands", -1109, 578);
            outlineBuilder(1, 2, "vardanianWetlands", -1110, 579);
            outlineBuilder(1, 4, "vardanianWetlands", -1112, 580);
            outlineBuilder(1, 3, "vardanianWetlands", -1113, 581);
            outlineBuilder(1, 2, "vardanianWetlands", -1113, 582);
            outlineBuilder(1, 1, "vardanianWetlands", -1109, 581);

            outlineBuilder(1, 4, "vardanianWoods", -1142, 558); //vardanianWoods
            outlineBuilder(1, 3, "vardanianWoods", -1142, 559);
            outlineBuilder(1, 1, "vardanianWoods", -1142, 560);

            outlineBuilder(1, 1, "shallowMire", -1138, 558); //shallowMire
            outlineBuilder(1, 1, "shallowMire", -1142, 561);
            outlineBuilder(1, 1, "shallowMire", -1141, 562);
            outlineBuilder(1, 2, "shallowMire", -1141, 560);
            outlineBuilder(1, 3, "shallowMire", -1140, 561);
            outlineBuilder(1, 3, "shallowMire", -1139, 562);
            outlineBuilder(1, 2, "shallowMire", -1137, 559);
            outlineBuilder(1, 2, "shallowMire", -1136, 560);
            outlineBuilder(1, 1, "shallowMire", -1133, 558);
            outlineBuilder(1, 3, "shallowMire", -1130, 558);
            outlineBuilder(1, 2, "shallowMire", -1128, 559);
            outlineBuilder(1, 2, "shallowMire", -1127, 560);
            outlineBuilder(1, 1, "shallowMire", -1125, 559);
            outlineBuilder(1, 2, "shallowMire", -1125, 558);
            outlineBuilder(1, 1, "shallowMire", -1110, 558);
            outlineBuilder(1, 1, "shallowMire", -1109, 559);
            outlineBuilder(1, 2, "shallowMire", -1141, 590);
            outlineBuilder(1, 2, "shallowMire", -1140, 591);
            outlineBuilder(1, 1, "shallowMire", -1138, 563);
            outlineBuilder(1, 2, "shallowMire", -1140, 564);
            outlineBuilder(1, 2, "shallowMire", -1141, 565);
            outlineBuilder(1, 1, "shallowMire", -1142, 566);
            outlineBuilder(1, 2, "shallowMire", -1140, 587);
            outlineBuilder(1, 3, "shallowMire", -1139, 588);
            outlineBuilder(1, 1, "shallowMire", -1138, 586);
            outlineBuilder(1, 3, "shallowMire", -1137, 585);
            outlineBuilder(1, 1, "shallowMire", -1136, 584);
            outlineBuilder(1, 1, "shallowMire", -1136, 586);
            outlineBuilder(1, 1, "shallowMire", -1134, 584);
            outlineBuilder(3, 1, "shallowMire", -1137, 589);
            outlineBuilder(2, 1, "shallowMire", -1136, 589);
            outlineBuilder(3, 1, "shallowMire", -1135, 589);
            outlineBuilder(1, 1, "shallowMire", -1134, 591);
            outlineBuilder(1, 1, "shallowMire", -1132, 591);
            outlineBuilder(1, 3, "shallowMire", -1130, 591);
            outlineBuilder(1, 3, "shallowMire", -1131, 590);
            outlineBuilder(1, 2, "shallowMire", -1132, 589);
            outlineBuilder(1, 4, "shallowMire", -1133, 588);
            outlineBuilder(1, 2, "shallowMire", -1134, 587);
            outlineBuilder(2, 2, "shallowMire", -1130, 586);
            outlineBuilder(1, 1, "shallowMire", -1142, 568);
            outlineBuilder(1, 1, "shallowMire", -1141, 569);
            outlineBuilder(1, 1, "shallowMire", -1140, 568);
            outlineBuilder(1, 2, "shallowMire", -1138, 566);
            outlineBuilder(3, 1, "shallowMire", -1142, 582);
            outlineBuilder(1, 1, "shallowMire", -1142, 579);
            outlineBuilder(1, 1, "shallowMire", -1141, 578);
            outlineBuilder(1, 4, "shallowMire", -1135, 561);
            outlineBuilder(1, 1, "shallowMire", -1133, 560);
            outlineBuilder(1, 1, "shallowMire", -1133, 562);
            outlineBuilder(1, 1, "shallowMire", -1126, 562);
            outlineBuilder(2, 1, "shallowMire", -1127, 562);
            outlineBuilder(1, 2, "shallowMire", -1130, 562);
            outlineBuilder(1, 1, "shallowMire", -1130, 563);
            outlineBuilder(5, 1, "shallowMire", -1131, 563);
            outlineBuilder(3, 1, "shallowMire", -1132, 564);
            outlineBuilder(2, 1, "shallowMire", -1130, 567);
            outlineBuilder(1, 1, "shallowMire", -1129, 566);
            outlineBuilder(1, 2, "shallowMire", -1128, 565);
            outlineBuilder(2, 1, "shallowMire", -1134, 563);
            outlineBuilder(1, 1, "shallowMire", -1134, 567);
            outlineBuilder(1, 2, "shallowMire", -1136, 568);
            outlineBuilder(1, 2, "shallowMire", -1137, 569);
            outlineBuilder(1, 2, "shallowMire", -1136, 570);
            outlineBuilder(1, 2, "shallowMire", -1134, 571);
            outlineBuilder(1, 1, "shallowMire", -1133, 572);
            outlineBuilder(1, 1, "shallowMire", -1133, 569);
            outlineBuilder(1, 2, "shallowMire", -1132, 570);
            outlineBuilder(1, 1, "shallowMire", -1110, 591);
            outlineBuilder(1, 1, "shallowMire", -1109, 590);
            outlineBuilder(1, 2, "shallowMire", -1111, 589);
            outlineBuilder(1, 3, "shallowMire", -1113, 588);
            outlineBuilder(1, 1, "shallowMire", -1112, 587);
            outlineBuilder(2, 2, "shallowMire", -1114, 589);
            outlineBuilder(1, 1, "shallowMire", -1113, 591);
            outlineBuilder(1, 1, "shallowMire", -1116, 586);
            outlineBuilder(1, 2, "shallowMire", -1115, 585);
            outlineBuilder(1, 1, "shallowMire", -1114, 587);
            outlineBuilder(1, 1, "shallowMire", -1110, 561);
            outlineBuilder(1, 1, "shallowMire", -1113, 562);
            outlineBuilder(1, 3, "shallowMire", -1112, 563);
            outlineBuilder(1, 1, "shallowMire", -1111, 564);
            outlineBuilder(2, 1, "shallowMire", -1113, 565);
            outlineBuilder(2, 1, "shallowMire", -1114, 566);
            outlineBuilder(1, 5, "shallowMire", -1117, 568);
            outlineBuilder(1, 1, "shallowMire", -1115, 569);
            outlineBuilder(1, 1, "shallowMire", -1116, 570);
            outlineBuilder(2, 1, "shallowMire", -1141, 575);
            outlineBuilder(1, 3, "shallowMire", -1140, 579);
            outlineBuilder(1, 1, "shallowMire", -1139, 580);
            outlineBuilder(1, 3, "shallowMire", -1140, 581);
            outlineBuilder(1, 1, "shallowMire", -1139, 582);
            outlineBuilder(1, 4, "shallowMire", -1140, 583);
            outlineBuilder(1, 3, "shallowMire", -1141, 584);
            outlineBuilder(1, 2, "shallowMire", -1141, 585);
            outlineBuilder(1, 1, "shallowMire", -1136, 582);
            outlineBuilder(1, 1, "shallowMire", -1130, 581);
            outlineBuilder(1, 2, "shallowMire", -1139, 575);
            outlineBuilder(1, 5, "shallowMire", -1140, 574);
            outlineBuilder(1, 1, "shallowMire", -1139, 573);
            outlineBuilder(1, 1, "shallowMire", -1140, 572);
            outlineBuilder(1, 1, "shallowMire", -1139, 571);
            outlineBuilder(1, 2, "shallowMire", -1136, 573);
            outlineBuilder(1, 1, "shallowMire", -1137, 571);
            outlineBuilder(1, 2, "shallowMire", -1133, 574);
            outlineBuilder(1, 4, "shallowMire", -1134, 575);
            outlineBuilder(1, 2, "shallowMire", -1136, 576);
            outlineBuilder(1, 2, "shallowMire", -1137, 577);
            outlineBuilder(1, 1, "shallowMire", -1136, 578);
            outlineBuilder(1, 1, "shallowMire", -1131, 576);
            outlineBuilder(1, 2, "shallowMire", -1131, 577);
            outlineBuilder(1, 3, "shallowMire", -1132, 578);
            outlineBuilder(1, 2, "shallowMire", -1133, 579);
            outlineBuilder(2, 1, "shallowMire", -1132, 580);
            outlineBuilder(1, 2, "shallowMire", -1132, 582);
            outlineBuilder(2, 1, "shallowMire", -1111, 567);
            outlineBuilder(1, 1, "shallowMire", -1110, 569);
            outlineBuilder(1, 1, "shallowMire", -1109, 570);
            outlineBuilder(1, 1, "shallowMire", -1112, 583);
            outlineBuilder(3, 1, "shallowMire", -1111, 583);
            outlineBuilder(1, 1, "shallowMire", -1110, 585);
            outlineBuilder(3, 1, "shallowMire", -1109, 584);
            outlineBuilder(1, 1, "shallowMire", -1113, 571);
            outlineBuilder(1, 3, "shallowMire", -1114, 572);
            outlineBuilder(1, 6, "shallowMire", -1118, 573);
            outlineBuilder(1, 3, "shallowMire", -1117, 574);
            outlineBuilder(1, 3, "shallowMire", -1116, 575);
            outlineBuilder(1, 1, "shallowMire", -1109, 572);
            outlineBuilder(2, 1, "shallowMire", -1110, 572);
            outlineBuilder(1, 1, "shallowMire", -1111, 574);
            outlineBuilder(1, 2, "shallowMire", -1111, 575);
            outlineBuilder(1, 4, "shallowMire", -1112, 576);
            outlineBuilder(1, 2, "shallowMire", -1113, 577);
            outlineBuilder(1, 2, "shallowMire", -1110, 577);
            outlineBuilder(1, 4, "shallowMire", -1113, 578);
            outlineBuilder(1, 1, "shallowMire", -1110, 581);
            outlineBuilder(1, 1, "shallowMire", -1111, 579);
            outlineBuilder(4, 1, "shallowMire", -1114, 579);
            outlineBuilder(2, 1, "shallowMire", -1113, 579);
            outlineBuilder(1, 1, "shallowMire", -1116, 579);
            outlineBuilder(1, 2, "shallowMire", -1118, 578);
            outlineBuilder(1, 1, "shallowMire", -1119, 577);
            outlineBuilder(1, 1, "shallowMire", -1117, 576);

            outlineBuilder(1, 1, "mireBR", -1130, 565);

            outlineBuilder(1, 1, "mire", -1136, 558); //mire
            outlineBuilder(1, 1, "mire", -1127, 558);
            outlineBuilder(2, 1, "mire", -1126, 558);
            outlineBuilder(1, 2, "mire", -1132, 558);
            outlineBuilder(7, 1, "mire", -1142, 585);
            outlineBuilder(1, 3, "mire", -1141, 586);
            outlineBuilder(3, 1, "mire", -1141, 587);
            outlineBuilder(1, 1, "mire", -1141, 591);
            outlineBuilder(1, 1, "mire", -1141, 561);
            outlineBuilder(1, 1, "mire", -1140, 562);
            outlineBuilder(1, 1, "mire", -1142, 562);
            outlineBuilder(1, 4, "mire", -1142, 563);
            outlineBuilder(1, 2, "mire", -1142, 564);
            outlineBuilder(1, 1, "mire", -1142, 565);
            outlineBuilder(5, 1, "mire", -1141, 570);
            outlineBuilder(1, 2, "mire", -1131, 559);
            outlineBuilder(1, 3, "mire", -1132, 560);
            outlineBuilder(2, 1, "mire", -1131, 561);
            outlineBuilder(2, 1, "mire", -1128, 561);
            outlineBuilder(1, 1, "mire", -1130, 566);
            outlineBuilder(1, 2, "mire", -1140, 566);
            outlineBuilder(1, 6, "mire", -1140, 567);
            outlineBuilder(3, 1, "mire", -1136, 561);
            outlineBuilder(1, 1, "mire", -1137, 561);
            outlineBuilder(1, 3, "mire", -1137, 564);
            outlineBuilder(1, 4, "mire", -1136, 565);
            outlineBuilder(1, 3, "mire", -1136, 566);
            outlineBuilder(1, 1, "mire", -1132, 567);
            outlineBuilder(1, 3, "mire", -1133, 568);
            outlineBuilder(1, 1, "mire", -1109, 591);
            outlineBuilder(2, 1, "mire", -1109, 588);
            outlineBuilder(1, 1, "mire", -1110, 588);
            outlineBuilder(1, 1, "mire", -1112, 591);
            outlineBuilder(1, 1, "mire", -1113, 587);
            outlineBuilder(1, 4, "mire", -1115, 586);
            outlineBuilder(1, 1, "mire", -1113, 585);
            outlineBuilder(1, 1, "mire", -1136, 591);
            outlineBuilder(1, 1, "mire", -1137, 586);
            outlineBuilder(1, 2, "mire", -1137, 587);
            outlineBuilder(1, 3, "mire", -1136, 588);
            outlineBuilder(1, 1, "mire", -1134, 589);
            outlineBuilder(1, 1, "mire", -1111, 561);
            outlineBuilder(1, 2, "mire", -1112, 562);
            outlineBuilder(2, 2, "mire", -1132, 586);
            outlineBuilder(1, 1, "mire", -1135, 584);
            outlineBuilder(1, 1, "mire", -1109, 563);
            outlineBuilder(1, 3, "mire", -1139, 568);
            outlineBuilder(1, 3, "mire", -1140, 569);
            outlineBuilder(1, 1, "mire", -1140, 582);
            outlineBuilder(1, 2, "mire", -1138, 582);
            outlineBuilder(1, 3, "mire", -1135, 582);
            outlineBuilder(1, 3, "mire", -1137, 581);
            outlineBuilder(1, 3, "mire", -1138, 580);
            outlineBuilder(1, 1, "mire", -1137, 579);
            outlineBuilder(1, 4, "mire", -1140, 570);
            outlineBuilder(1, 1, "mire", -1140, 571);
            outlineBuilder(1, 2, "mire", -1136, 571);
            outlineBuilder(1, 2, "mire", -1135, 572);
            outlineBuilder(1, 2, "mire", -1135, 574);
            outlineBuilder(1, 3, "mire", -1137, 575);
            outlineBuilder(1, 4, "mire", -1140, 576);
            outlineBuilder(1, 1, "mire", -1140, 573);
            outlineBuilder(1, 4, "mire", -1141, 577);
            outlineBuilder(1, 2, "mire", -1138, 578);
            outlineBuilder(1, 1, "mire", -1112, 565);
            outlineBuilder(2, 1, "mire", -1111, 565);
            outlineBuilder(3, 1, "mire", -1110, 566);
            outlineBuilder(3, 1, "mire", -1109, 567);
            outlineBuilder(1, 1, "mire", -1112, 568);
            outlineBuilder(1, 1, "mire", -1113, 569);
            outlineBuilder(1, 2, "mire", -1115, 570);
            outlineBuilder(1, 3, "mire", -1111, 571);
            outlineBuilder(1, 1, "mire", -1111, 572);
            outlineBuilder(1, 2, "mire", -1112, 573);
            outlineBuilder(1, 1, "mire", -1110, 574);
            outlineBuilder(1, 1, "mire", -1109, 575);
            outlineBuilder(1, 1, "mire", -1115, 579);
            outlineBuilder(1, 1, "mire", -1116, 578);
            outlineBuilder(1, 1, "mire", -1112, 579);
            outlineBuilder(1, 1, "mire", -1111, 582);
            outlineBuilder(3, 1, "mire", -1110, 582);
            outlineBuilder(2, 1, "mire", -1109, 582);

            outlineBuilder(1, 13, "mire", -1123, 558);
            outlineBuilder(1, 15, "mire", -1124, 559);
            outlineBuilder(1, 17, "mire", -1125, 560);
            outlineBuilder(1, 14, "mire", -1126, 561);
            outlineBuilder(1, 12, "mire", -1125, 562);
            outlineBuilder(1, 14, "mire", -1126, 563);
            outlineBuilder(1, 16, "mire", -1127, 564);
            outlineBuilder(1, 13, "mire", -1126, 565);
            outlineBuilder(1, 14, "mire", -1127, 591);
            outlineBuilder(2, 14, "mire", -1128, 589);
            outlineBuilder(1, 16, "mire", -1129, 588);
            outlineBuilder(1, 14, "mire", -1128, 587);
            outlineBuilder(1, 12, "mire", -1128, 586);
            outlineBuilder(1, 14, "mire", -1128, 566);
            outlineBuilder(1, 15, "mire", -1129, 567);
            outlineBuilder(1, 12, "mire", -1129, 568);
            outlineBuilder(1, 17, "mire", -1132, 569);
            outlineBuilder(1, 14, "mire", -1130, 570);
            outlineBuilder(1, 18, "mire", -1131, 571);
            outlineBuilder(1, 16, "mire", -1132, 572);
            outlineBuilder(1, 16, "mire", -1134, 573);
            outlineBuilder(1, 12, "mire", -1131, 574);
            outlineBuilder(1, 11, "mire", -1130, 575);
            outlineBuilder(1, 12, "mire", -1130, 576);
            outlineBuilder(1, 19, "mire", -1134, 585);
            outlineBuilder(1, 22, "mire", -1133, 584);
            outlineBuilder(1, 24, "mire", -1136, 583);
            outlineBuilder(1, 10, "mire", -1129, 577);
            outlineBuilder(1, 11, "mire", -1129, 578);
            outlineBuilder(1, 14, "mire", -1130, 579);
            outlineBuilder(2, 15, "mire", -1129, 580);
            outlineBuilder(1, 16, "mire", -1130, 582);

            outlineBuilder(10, 1, "mire", -1142, 569);
        }
        //mapS17W34
        if (Y > -177325 && Y < -166541 && X < 354544 && X > 342860) //X34
        {
            elevation = -1;
            region = "s17w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1176, 558);


            outlineBuilder(1, 5, "shallowMire", -1173, 559);
            outlineBuilder(1, 2, "shallowMire", -1170, 560);
            outlineBuilder(1, 1, "shallowMire", -1175, 561);
            outlineBuilder(1, 3, "shallowMire", -1176, 560);
            outlineBuilder(2, 1, "shallowMire", -1143, 560);
            outlineBuilder(2, 2, "shallowMire", -1144, 562);
            outlineBuilder(4, 1, "shallowMire", -1145, 563);
            outlineBuilder(2, 1, "shallowMire", -1146, 563);
            outlineBuilder(1, 1, "shallowMire", -1147, 560);
            outlineBuilder(1, 3, "shallowMire", -1149, 561);
            outlineBuilder(1, 3, "shallowMire", -1150, 559);
            outlineBuilder(1, 1, "shallowMire", -1150, 560);
            outlineBuilder(1, 1, "shallowMire", -1144, 569);
            outlineBuilder(3, 2, "shallowMire", -1155, 561);
            outlineBuilder(5, 1, "shallowMire", -1153, 561);
            outlineBuilder(2, 1, "shallowMire", -1152, 563);
            outlineBuilder(1, 1, "shallowMire", -1151, 565);
            outlineBuilder(1, 1, "shallowMire", -1159, 566);
            outlineBuilder(1, 2, "shallowMire", -1159, 568);
            outlineBuilder(1, 5, "shallowMire", -1155, 568);
            outlineBuilder(1, 5, "shallowMire", -1151, 569);
            outlineBuilder(1, 2, "shallowMire", -1145, 571);
            outlineBuilder(4, 1, "shallowMire", -1150, 570);
            outlineBuilder(2, 1, "shallowMire", -1151, 571);
            outlineBuilder(2, 1, "shallowMire", -1149, 572);
            outlineBuilder(2, 1, "shallowMire", -1148, 573);
            outlineBuilder(1, 1, "shallowMire", -1160, 569);
            outlineBuilder(3, 2, "shallowMire", -1163, 569);
            outlineBuilder(4, 1, "shallowMire", -1164, 569);
            outlineBuilder(1, 1, "shallowMire", -1165, 569);
            outlineBuilder(1, 3, "shallowMire", -1167, 568);
            outlineBuilder(1, 2, "shallowMire", -1168, 569);
            outlineBuilder(2, 2, "shallowMire", -1163, 563);
            outlineBuilder(3, 2, "shallowMire", -1165, 564);
            outlineBuilder(1, 2, "shallowMire", -1167, 566);
            outlineBuilder(1, 1, "shallowMire", -1170, 567);
            outlineBuilder(1, 1, "shallowMire", -1172, 567);
            outlineBuilder(1, 1, "shallowMire", -1173, 568);
            outlineBuilder(1, 1, "shallowMire", -1174, 567);
            outlineBuilder(1, 2, "shallowMire", -1174, 570);
            outlineBuilder(1, 1, "shallowMire", -1175, 571);
            outlineBuilder(1, 1, "shallowMire", -1174, 562);
            outlineBuilder(1, 2, "shallowMire", -1172, 561);
            outlineBuilder(1, 1, "shallowMire", -1171, 563);
            outlineBuilder(1, 1, "shallowMire", -1173, 564);
            outlineBuilder(2, 1, "shallowMire", -1171, 571);
            outlineBuilder(2, 1, "shallowMire", -1169, 570);
            outlineBuilder(1, 1, "shallowMire", -1174, 574);
            outlineBuilder(2, 1, "shallowMire", -1175, 575);
            outlineBuilder(4, 3, "shallowMire", -1170, 572);
            outlineBuilder(1, 1, "shallowMire", -1167, 574);
            outlineBuilder(1, 8, "shallowMire", -1172, 576);
            outlineBuilder(1, 9, "shallowMire", -1173, 577);
            outlineBuilder(2, 2, "shallowMire", -1165, 578);
            outlineBuilder(1, 1, "shallowMire", -1168, 578);
            outlineBuilder(1, 3, "shallowMire", -1172, 578);
            outlineBuilder(1, 4, "shallowMire", -1174, 579);
            outlineBuilder(1, 2, "shallowMire", -1173, 580);
            outlineBuilder(1, 1, "shallowMire", -1173, 581);
            outlineBuilder(1, 1, "shallowMire", -1171, 582);
            outlineBuilder(3, 1, "shallowMire", -1174, 580);
            outlineBuilder(2, 1, "shallowMire", -1174, 582);
            outlineBuilder(2, 1, "shallowMire", -1175, 583);
            outlineBuilder(1, 1, "shallowMire", -1176, 582);
            outlineBuilder(3, 1, "shallowMire", -1173, 584);
            outlineBuilder(2, 1, "shallowMire", -1174, 587);
            outlineBuilder(1, 1, "shallowMire", -1175, 588);
            outlineBuilder(1, 1, "shallowMire", -1173, 589);
            outlineBuilder(1, 2, "shallowMire", -1146, 577);
            outlineBuilder(1, 2, "shallowMire", -1147, 578);
            outlineBuilder(1, 1, "shallowMire", -1147, 579);
            outlineBuilder(1, 4, "shallowMire", -1147, 580);
            outlineBuilder(2, 1, "shallowMire", -1143, 581);
            outlineBuilder(3, 1, "shallowMire", -1146, 581);
            outlineBuilder(1, 1, "shallowMire", -1145, 584);
            outlineBuilder(3, 1, "shallowMire", -1146, 585);
            outlineBuilder(1, 1, "shallowMire", -1146, 585);
            outlineBuilder(2, 1, "shallowMire", -1145, 585);
            outlineBuilder(1, 1, "shallowMire", -1145, 590);
            outlineBuilder(2, 1, "shallowMire", -1148, 583);
            outlineBuilder(2, 1, "shallowMire", -1149, 581);
            outlineBuilder(1, 1, "shallowMire", -1150, 580);
            outlineBuilder(4, 1, "shallowMire", -1150, 583);
            outlineBuilder(3, 1, "shallowMire", -1151, 582);
            outlineBuilder(1, 1, "shallowMire", -1152, 583);
            outlineBuilder(2, 1, "shallowMire", -1146, 588);
            outlineBuilder(2, 1, "shallowMire", -1147, 586);
            outlineBuilder(1, 1, "shallowMire", -1148, 587);
            outlineBuilder(1, 2, "shallowMire", -1151, 588);
            outlineBuilder(1, 2, "shallowMire", -1152, 587);
            outlineBuilder(1, 1, "shallowMire", -1154, 587);
            outlineBuilder(1, 2, "shallowMire", -1150, 590);
            outlineBuilder(1, 2, "shallowMire", -1149, 591);
            outlineBuilder(1, 3, "shallowMire", -1147, 591);
            outlineBuilder(1, 1, "shallowMire", -1154, 590);
            outlineBuilder(1, 1, "shallowMire", -1160, 590);
            outlineBuilder(1, 2, "shallowMire", -1162, 591);
            outlineBuilder(1, 1, "shallowMire", -1163, 590);
            outlineBuilder(1, 1, "shallowMire", -1170, 591);
            outlineBuilder(1, 2, "shallowMire", -1166, 591);
            outlineBuilder(1, 1, "shallowMire", -1168, 590);
            outlineBuilder(1, 1, "shallowMire", -1167, 587);


            outlineBuilder(1, 3, "mire", -1173, 560);
            outlineBuilder(1, 2, "mire", -1149, 560);
            outlineBuilder(17, 1, "mire", -1143, 564);
            outlineBuilder(5, 1, "mire", -1144, 564);
            outlineBuilder(1, 1, "mire", -1152, 565);
            outlineBuilder(1, 10, "mire", -1158, 566);
            outlineBuilder(1, 16, "mire", -1159, 567);
            outlineBuilder(1, 8, "mire", -1150, 568);
            outlineBuilder(1, 2, "mire", -1157, 568);
            outlineBuilder(1, 2, "mire", -1146, 569);
            outlineBuilder(1, 1, "mire", -1146, 569);
            outlineBuilder(2, 1, "mire", -1145, 569);
            outlineBuilder(1, 1, "mire", -1144, 570);
            outlineBuilder(1, 1, "mire", -1161, 569);
            outlineBuilder(1, 5, "mire", -1164, 568);
            outlineBuilder(1, 7, "mire", -1167, 567);
            outlineBuilder(2, 1, "mire", -1168, 567);
            outlineBuilder(3, 1, "mire", -1169, 567);
            outlineBuilder(4, 1, "mire", -1170, 568);
            outlineBuilder(4, 1, "mire", -1171, 567);
            outlineBuilder(3, 1, "mire", -1172, 568);
            outlineBuilder(1, 1, "mire", -1173, 569);
            outlineBuilder(2, 1, "mire", -1174, 568);
            outlineBuilder(20, 1, "mire", -1176, 561);
            outlineBuilder(8, 1, "mire", -1175, 562);
            outlineBuilder(1, 2, "mire", -1174, 561);
            outlineBuilder(2, 1, "mire", -1174, 563);
            outlineBuilder(1, 2, "mire", -1173, 563);
            outlineBuilder(1, 1, "mire", -1175, 570);
            outlineBuilder(3, 1, "mire", -1175, 572);
            outlineBuilder(2, 2, "mire", -1175, 577);
            outlineBuilder(1, 2, "mire", -1172, 581);
            outlineBuilder(2, 2, "mire", -1173, 582);
            outlineBuilder(3, 1, "mire", -1175, 580);
            outlineBuilder(2, 1, "mire", -1174, 580);
            outlineBuilder(1, 1, "mire", -1176, 581);
            outlineBuilder(9, 1, "mire", -1176, 583);
            outlineBuilder(3, 1, "mire", -1174, 584);
            outlineBuilder(3, 1, "mire", -1175, 585);
            outlineBuilder(3, 2, "mire", -1175, 589);
            outlineBuilder(5, 1, "mire", -1144, 575);
            outlineBuilder(2, 1, "mire", -1145, 578);
            outlineBuilder(1, 1, "mire", -1146, 579);
            outlineBuilder(1, 1, "mire", -1148, 582);
            outlineBuilder(3, 1, "mire", -1147, 583);
            outlineBuilder(1, 1, "mire", -1146, 584);
            outlineBuilder(6, 2, "mire", -1144, 586);
            outlineBuilder(2, 1, "mire", -1145, 588);
            outlineBuilder(1, 1, "mire", -1148, 586);
            outlineBuilder(1, 2, "mire", -1150, 587);
            outlineBuilder(4, 1, "mire", -1153, 587);
            outlineBuilder(4, 1, "mire", -1152, 588);
            outlineBuilder(3, 1, "mire", -1151, 589);
            outlineBuilder(1, 1, "mire", -1150, 591);
            outlineBuilder(2, 1, "mire", -1154, 588);
            outlineBuilder(1, 6, "mire", -1159, 589);
            outlineBuilder(3, 1, "mire", -1160, 587);
            outlineBuilder(2, 1, "mire", -1161, 589);
            outlineBuilder(2, 3, "mire", -1173, 590);
            outlineBuilder(1, 4, "mire", -1171, 589);
            outlineBuilder(1, 2, "mire", -1164, 591);
            outlineBuilder(1, 1, "mire", -1162, 590);
            outlineBuilder(1, 2, "mire", -1170, 590);
            outlineBuilder(1, 3, "mire", -1166, 590);
            outlineBuilder(2, 1, "mire", -1167, 588);
            outlineBuilder(1, 2, "mire", -1166, 589);


            outlineBuilder(3, 1, "vardanianWetlands", -1174, 571);
            outlineBuilder(6, 1, "vardanianWetlands", -1173, 571);
            outlineBuilder(5, 1, "vardanianWetlands", -1172, 571);
            outlineBuilder(3, 1, "vardanianWetlands", -1171, 573);
            outlineBuilder(2, 1, "vardanianWetlands", -1174, 575);
            outlineBuilder(1, 1, "vardanianWetlands", -1173, 578);
            outlineBuilder(1, 1, "vardanianWetlands", -1175, 579);
            outlineBuilder(1, 1, "vardanianWetlands", -1146, 586);
            outlineBuilder(1, 1, "vardanianWetlands", -1145, 587);
            outlineBuilder(1, 1, "vardanianWetlands", -1148, 585);
            outlineBuilder(4, 1, "vardanianWetlands", -1149, 583);
            outlineBuilder(1, 3, "vardanianWetlands", -1149, 588);
            outlineBuilder(1, 4, "vardanianWetlands", -1150, 589);
            outlineBuilder(1, 1, "vardanianWetlands", -1148, 590);
            outlineBuilder(1, 2, "vardanianWetlands", -1147, 590);


            outlineBuilder(1, 1, "mireTR", -1149, 562);
            outlineBuilder(1, 1, "mireTR", -1155, 590);

            outlineBuilder(1, 1, "mireTL", -1148, 562);

            outlineBuilder(1, 1, "mireBL", -1151, 564);

            outlineBuilder(1, 1, "mireBR", -1154, 565);
            outlineBuilder(1, 1, "mireBR", -1168, 566);


            outlineBuilder(8, 1, "vardanianStone", -1159, 558);
            outlineBuilder(7, 1, "vardanianStone", -1159, 569);
            outlineBuilder(14, 1, "vardanianStone", -1158, 575);
            outlineBuilder(2, 1, "vardanianStone", -1158, 590);
        }
        //mapS17W35
        if (Y > -177325 && Y < -166541 && X < 364713 && X > 353021) //X35
        {
            elevation = -1;
            region = "s17w35";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1210, 558);

            outlineBuilder(1, 1, "vardanianWetlands", -1178, 574);
            outlineBuilder(1, 2, "vardanianWetlands", -1209, 561);
            outlineBuilder(1, 1, "vardanianWetlands", -1208, 562);
            outlineBuilder(2, 1, "vardanianWetlands", -1183, 561);
            outlineBuilder(1, 1, "vardanianWetlands", -1184, 562);
            outlineBuilder(1, 2, "vardanianWetlands", -1203, 561);
            outlineBuilder(1, 1, "vardanianWetlands", -1203, 562);
            outlineBuilder(2, 1, "vardanianWetlands", -1204, 563);
            outlineBuilder(1, 2, "vardanianWetlands", -1186, 565);
            outlineBuilder(1, 2, "vardanianWetlands", -1185, 564);
            outlineBuilder(1, 1, "vardanianWetlands", -1181, 562);
            outlineBuilder(1, 1, "vardanianWetlands", -1182, 580);
            outlineBuilder(2, 1, "vardanianWetlands", -1181, 580);
            outlineBuilder(1, 1, "vardanianWetlands", -1180, 582);
            outlineBuilder(1, 1, "vardanianWetlands", -1179, 581);
            outlineBuilder(2, 1, "vardanianWetlands", -1178, 584);
            outlineBuilder(1, 1, "vardanianWetlands", -1185, 590);
            outlineBuilder(1, 1, "vardanianWetlands", -1186, 591);
            outlineBuilder(1, 1, "vardanianWetlands", -1183, 591);
            outlineBuilder(1, 2, "vardanianWetlands", -1184, 590);
            outlineBuilder(1, 1, "vardanianWetlands", -1185, 591);
            outlineBuilder(1, 2, "vardanianWetlands", -1179, 590);
            outlineBuilder(1, 1, "vardanianWetlands", -1180, 591);

            outlineBuilder(1, 1, "shallowMire", -1177, 560);
            outlineBuilder(1, 1, "shallowMire", -1184, 591);
            outlineBuilder(4, 1, "shallowMire", -1177, 572);
            outlineBuilder(1, 1, "shallowMire", -1178, 573);
            outlineBuilder(1, 1, "shallowMire", -1179, 574);
            outlineBuilder(2, 1, "shallowMire", -1179, 577);
            outlineBuilder(2, 1, "shallowMire", -1178, 578);
            outlineBuilder(1, 1, "shallowMire", -1177, 579);
            outlineBuilder(1, 1, "shallowMire", -1182, 578);
            outlineBuilder(1, 3, "shallowMire", -1183, 579);
            outlineBuilder(1, 1, "shallowMire", -1210, 560);
            outlineBuilder(1, 1, "shallowMire", -1208, 560);
            outlineBuilder(3, 1, "shallowMire", -1207, 560);
            outlineBuilder(1, 1, "shallowMire", -1206, 562);
            outlineBuilder(1, 2, "shallowMire", -1181, 559);
            outlineBuilder(1, 2, "shallowMire", -1183, 560);
            outlineBuilder(1, 2, "shallowMire", -1182, 561);
            outlineBuilder(2, 1, "shallowMire", -1180, 562);
            outlineBuilder(2, 1, "shallowMire", -1179, 561);
            outlineBuilder(1, 1, "shallowMire", -1185, 562);
            outlineBuilder(1, 4, "shallowMire", -1187, 563);
            outlineBuilder(1, 2, "shallowMire", -1187, 564);
            outlineBuilder(1, 2, "shallowMire", -1188, 565);
            outlineBuilder(1, 2, "shallowMire", -1187, 566);
            outlineBuilder(1, 1, "shallowMire", -1190, 564);
            outlineBuilder(1, 1, "shallowMire", -1187, 567);
            outlineBuilder(1, 5, "shallowMire", -1204, 560);
            outlineBuilder(1, 1, "shallowMire", -1200, 559);
            outlineBuilder(1, 1, "shallowMire", -1201, 561);
            outlineBuilder(2, 1, "shallowMire", -1202, 562);
            outlineBuilder(2, 1, "shallowMire", -1203, 563);
            outlineBuilder(1, 1, "shallowMire", -1204, 562);
            outlineBuilder(2, 1, "shallowMire", -1208, 563);
            outlineBuilder(1, 1, "shallowMire", -1209, 564);
            outlineBuilder(2, 1, "shallowMire", -1210, 565);
            outlineBuilder(2, 2, "shallowMire", -1206, 563);
            outlineBuilder(2, 1, "shallowMire", -1183, 565);
            outlineBuilder(2, 1, "shallowMire", -1182, 562);
            outlineBuilder(1, 2, "shallowMire", -1182, 565);
            outlineBuilder(1, 4, "shallowMire", -1182, 564);
            outlineBuilder(1, 1, "shallowMire", -1179, 563);
            outlineBuilder(1, 1, "shallowMire", -1183, 564);
            outlineBuilder(1, 2, "shallowMire", -1180, 565);
            outlineBuilder(1, 2, "shallowMire", -1182, 566);
            outlineBuilder(1, 1, "shallowMire", -1204, 565);
            outlineBuilder(1, 2, "shallowMire", -1199, 563);
            outlineBuilder(1, 2, "shallowMire", -1200, 564);
            outlineBuilder(1, 1, "shallowMire", -1198, 565);
            outlineBuilder(1, 1, "shallowMire", -1194, 563);
            outlineBuilder(1, 1, "shallowMire", -1177, 588);
            outlineBuilder(1, 1, "shallowMire", -1178, 589);
            outlineBuilder(1, 2, "shallowMire", -1179, 591);
            outlineBuilder(1, 2, "shallowMire", -1182, 591);
            outlineBuilder(1, 2, "shallowMire", -1188, 591);
            outlineBuilder(1, 2, "shallowMire", -1189, 590);
            outlineBuilder(1, 1, "shallowMire", -1190, 589);
            outlineBuilder(1, 1, "shallowMire", -1189, 588);
            outlineBuilder(1, 2, "shallowMire", -1189, 585);
            outlineBuilder(1, 2, "shallowMire", -1188, 586);
            outlineBuilder(1, 2, "shallowMire", -1180, 580);
            outlineBuilder(1, 1, "shallowMire", -1181, 582);
            outlineBuilder(1, 1, "shallowMire", -1179, 582);
            outlineBuilder(1, 1, "shallowMire", -1180, 581);
            outlineBuilder(2, 1, "shallowMire", -1182, 581);
            outlineBuilder(1, 7, "shallowMire", -1183, 583);
            outlineBuilder(1, 1, "shallowMire", -1183, 584);
            outlineBuilder(1, 1, "shallowMire", -1179, 585);
            outlineBuilder(1, 1, "shallowMire", -1178, 586);
            outlineBuilder(2, 1, "shallowMire", -1177, 584);
            outlineBuilder(1, 3, "shallowMire", -1182, 586);
            outlineBuilder(1, 2, "shallowMire", -1181, 587);
            outlineBuilder(1, 2, "shallowMire", -1180, 588);
            outlineBuilder(1, 1, "shallowMire", -1180, 590);

            outlineBuilder(1, 1, "mireBL", -1190, 563);
            outlineBuilder(1, 1, "mireBL", -1198, 562);
            outlineBuilder(1, 1, "mireBR", -1192, 562);

            outlineBuilder(1, 2, "mire", -1210, 559);
            outlineBuilder(1, 1, "mire", -1209, 560);
            outlineBuilder(2, 1, "mire", -1177, 590);
            outlineBuilder(1, 22, "mire", -1210, 591);
            outlineBuilder(1, 21, "mire", -1210, 590);
            outlineBuilder(1, 20, "mire", -1210, 589);
            outlineBuilder(1, 21, "mire", -1210, 588);
            outlineBuilder(2, 22, "mire", -1210, 586);
            outlineBuilder(1, 21, "mire", -1210, 585);
            outlineBuilder(2, 27, "mire", -1210, 583);
            outlineBuilder(3, 28, "mire", -1210, 580);
            outlineBuilder(1, 27, "mire", -1210, 579);
            outlineBuilder(1, 28, "mire", -1210, 578);
            outlineBuilder(1, 31, "mire", -1210, 577);
            outlineBuilder(1, 34, "mire", -1210, 576);
            outlineBuilder(1, 33, "mire", -1210, 575);
            outlineBuilder(1, 31, "mire", -1210, 574);
            outlineBuilder(1, 32, "mire", -1210, 573);
            outlineBuilder(1, 33, "mire", -1210, 572);
            outlineBuilder(4, 34, "mire", -1210, 568);
            outlineBuilder(2, 1, "mire", -1177, 577);
            outlineBuilder(1, 1, "mire", -1178, 577);
            outlineBuilder(1, 2, "mire", -1181, 578);
            outlineBuilder(1, 2, "mire", -1180, 579);
            outlineBuilder(1, 1, "mire", -1179, 580);
            outlineBuilder(3, 2, "mire", -1178, 580);
            outlineBuilder(1, 4, "mire", -1181, 560);
            outlineBuilder(1, 1, "mire", -1180, 561);
            outlineBuilder(1, 2, "mire", -1185, 561);
            outlineBuilder(1, 1, "mire", -1186, 562);
            outlineBuilder(1, 1, "mire", -1191, 562);
            outlineBuilder(7, 2, "mire", -1178, 561);
            outlineBuilder(1, 8, "mire", -1186, 567);
            outlineBuilder(1, 1, "mire", -1185, 566);
            outlineBuilder(2, 1, "mire", -1184, 565);
            outlineBuilder(1, 1, "mire", -1183, 563);
            outlineBuilder(1, 1, "mire", -1181, 563);
            outlineBuilder(1, 1, "mire", -1179, 563);
            outlineBuilder(1, 1, "mire", -1183, 564);
            outlineBuilder(1, 2, "mire", -1180, 565);
            outlineBuilder(1, 4, "mire", -1182, 566);
            outlineBuilder(2, 1, "mire", -1207, 563);
            outlineBuilder(1, 5, "mire", -1209, 565);
            outlineBuilder(1, 23, "mire", -1210, 567);
            outlineBuilder(1, 22, "mire", -1209, 566);
            outlineBuilder(1, 5, "mire", -1203, 565);
            outlineBuilder(1, 1, "mire", -1202, 564);
            outlineBuilder(3, 1, "mire", -1201, 562);
            outlineBuilder(3, 1, "mire", -1200, 561);
            outlineBuilder(1, 1, "mire", -1199, 562);
            outlineBuilder(1, 7, "mire", -1196, 565);
            outlineBuilder(1, 5, "mire", -1195, 564);
            outlineBuilder(1, 3, "mire", -1193, 563);
            outlineBuilder(1, 4, "mire", -1182, 584);
            outlineBuilder(1, 8, "mire", -1187, 585);
            outlineBuilder(1, 1, "mire", -1177, 589);
            outlineBuilder(2, 1, "mire", -1177, 586);
            outlineBuilder(3, 1, "mire", -1178, 587);
            outlineBuilder(4, 1, "mire", -1179, 586);
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
        //mapS16W34
        if (Y > -167118 && Y < -156349 && X < 354544 && X > 342860) //X34
        {
            elevation = -1;
            region = "s16w34";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1176, 524);

            outlineBuilder(1, 32, "vardanianGrass", -1176, 524); //vardanianGrass
            outlineBuilder(1, 2, "vardanianGrass", -1147, 525);
            outlineBuilder(1, 25, "vardanianGrass", -1174, 525);
            outlineBuilder(1, 1, "vardanianGrass", -1169, 527);
            outlineBuilder(1, 14, "vardanianGrass", -1169, 526);
            outlineBuilder(1, 2, "vardanianGrass", -1162, 527);
            outlineBuilder(1, 2, "vardanianGrass", -1158, 527);

            outlineBuilder(34, 1, "vardanianStone", -1159, 524);
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
        //mapS13W36
        if (Y > -136522 && Y < -125745 && X < 374956 && X > 363245) //X-36
        {
            elevation = 0;
            region = "s13w36";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1244, 422);
            outlineBuilder(1, 34, "vardanianStone", -1244, 441);
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
        //mapS12W35
        if (Y > -126325 && Y < -115546 && X < 364713 && X > 353021) //X-34
        {
            elevation = 0;
            region = "s12w35";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1210, 388);

            outlineBuilder(3, 2, "vardanianWetland", -1195, 400);
            outlineBuilder(1, 2, "vardanianWetland", -1197, 401);
            outlineBuilder(4, 1, "vardanianWetland", -1198, 401);
            outlineBuilder(2, 1, "vardanianWetland", -1199, 402);
            outlineBuilder(1, 1, "vardanianWetland", -1196, 400);
            outlineBuilder(3, 1, "vardanianWetland", -1197, 403);
            outlineBuilder(1, 2, "vardanianWetland", -1196, 405);
            outlineBuilder(1, 3, "vardanianWetland", -1196, 404);
            outlineBuilder(6, 1, "vardanianWetland", -1193, 401);
            outlineBuilder(3, 1, "vardanianWetland", -1192, 402);
            outlineBuilder(1, 1, "vardanianWetland", -1191, 403);
            outlineBuilder(3, 1, "vardanianWetland", -1190, 403);
            outlineBuilder(2, 1, "vardanianWetland", -1191, 405);
            outlineBuilder(2, 1, "vardanianWetland", -1192, 406);
            outlineBuilder(1, 1, "vardanianWetland", -1194, 406);
            outlineBuilder(1, 3, "vardanianWetland", -1197, 407);
            outlineBuilder(3, 1, "vardanianWetland", -1193, 407);
            outlineBuilder(3, 1, "vardanianWetland", -1198, 408);
            outlineBuilder(2, 1, "vardanianWetland", -1197, 409);
            outlineBuilder(1, 2, "vardanianWetland", -1196, 410);
            outlineBuilder(4, 1, "vardanianWetland", -1194, 409);
            outlineBuilder(1, 1, "vardanianWetland", -1198, 411);
            outlineBuilder(1, 3, "vardanianWetland", -1197, 412);
            outlineBuilder(1, 2, "vardanianWetland", -1196, 413);
            outlineBuilder(2, 1, "vardanianWetland", -1199, 409);
            outlineBuilder(5, 7, "vardanianWetland", -1188, 400);
            outlineBuilder(1, 4, "vardanianWetland", -1186, 399);
            outlineBuilder(2, 1, "vardanianWetland", -1181, 401);
            outlineBuilder(2, 4, "vardanianWetland", -1187, 405);
            outlineBuilder(2, 1, "vardanianWetland", -1182, 405);
            outlineBuilder(1, 1, "vardanianWetland", -1181, 406);
            outlineBuilder(6, 1, "vardanianWetland", -1180, 403);
            outlineBuilder(1, 1, "vardanianWetland", -1179, 405);
            outlineBuilder(1, 2, "vardanianWetland", -1179, 406);
            outlineBuilder(1, 1, "vardanianWetland", -1177, 407);
            outlineBuilder(2, 2, "vardanianWetland", -1179, 408);
            outlineBuilder(1, 1, "vardanianWetland", -1181, 407);
            outlineBuilder(1, 2, "vardanianWetland", -1186, 407);
            outlineBuilder(5, 3, "vardanianWetland", -1187, 408);
            outlineBuilder(3, 1, "vardanianWetland", -1188, 409);
            outlineBuilder(4, 2, "vardanianWetland", -1185, 410);
            outlineBuilder(1, 2, "vardanianWetland", -1191, 412);
            outlineBuilder(4, 3, "vardanianWetland", -1191, 413);
            outlineBuilder(1, 4, "vardanianWetland", -1190, 417);
            outlineBuilder(1, 2, "vardanianWetland", -1188, 418);
            outlineBuilder(1, 2, "vardanianWetland", -1188, 414);
            outlineBuilder(1, 3, "vardanianWetland", -1186, 415);
            outlineBuilder(1, 3, "vardanianWetland", -1187, 416);
            outlineBuilder(2, 1, "vardanianWetland", -1192, 413);
            outlineBuilder(5, 1, "vardanianWetland", -1205, 396);
            outlineBuilder(1, 1, "vardanianWetland", -1206, 396);
            outlineBuilder(1, 2, "vardanianWetland", -1207, 395);
            outlineBuilder(2, 2, "vardanianWetland", -1204, 400);
            outlineBuilder(3, 1, "vardanianWetland", -1207, 400);
            outlineBuilder(1, 2, "vardanianWetland", -1208, 401);
            outlineBuilder(2, 1, "vardanianWetland", -1206, 402);
            outlineBuilder(2, 1, "vardanianWetland", -1205, 403);
            outlineBuilder(2, 1, "vardanianWetland", -1204, 402);
            outlineBuilder(1, 1, "vardanianWetland", -1204, 399);
            outlineBuilder(1, 2, "vardanianWetland", -1204, 396);
            outlineBuilder(1, 1, "vardanianWetland", -1204, 397);
            outlineBuilder(2, 1, "vardanianWetland", -1208, 396);
            outlineBuilder(1, 1, "vardanianWetland", -1207, 398);
            outlineBuilder(2, 1, "vardanianWetland", -1208, 399);
            outlineBuilder(1, 1, "vardanianWetland", -1202, 400);
            outlineBuilder(3, 1, "vardanianWetland", -1201, 397);
            outlineBuilder(1, 1, "vardanianWetland", -1202, 397);
            outlineBuilder(1, 1, "vardanianWetland", -1200, 398);

            outlineBuilder(1, 1, "swampTR", -1204, 399);

            outlineBuilder(1, 2, "swamp", -1197, 402);
            outlineBuilder(1, 3, "swamp", -1196, 403);
            outlineBuilder(1, 1, "swamp", -1192, 405);
            outlineBuilder(2, 1, "swamp", -1194, 407);
            outlineBuilder(1, 3, "swamp", -1197, 411);
            outlineBuilder(2, 2, "swamp", -1190, 414);
            outlineBuilder(1, 2, "swamp", -1186, 411);
            outlineBuilder(3, 1, "swamp", -1181, 403);
            outlineBuilder(1, 2, "swamp", -1179, 407);
            outlineBuilder(1, 1, "swamp", -1197, 408);
            outlineBuilder(2, 2, "swamp", -1196, 408);
            outlineBuilder(2, 1, "swamp", -1186, 409);
            outlineBuilder(1, 1, "swamp", -1187, 410);
            outlineBuilder(1, 1, "swamp", -1191, 404);
            outlineBuilder(1, 2, "swamp", -1187, 402);
            outlineBuilder(2, 1, "swamp", -1186, 403);
            outlineBuilder(2, 2, "swamp", -1185, 402);
            outlineBuilder(2, 2, "swamp", -1184, 401);
            outlineBuilder(2, 1, "swamo", -1182, 404);
            outlineBuilder(1, 2, "swamp", -1188, 415);
            outlineBuilder(1, 2, "swamp", -1189, 416);
            outlineBuilder(2, 1, "swamp", -1205, 401);
            outlineBuilder(5, 1, "swamp", -1206, 397);
            outlineBuilder(1, 1, "swamp", -1204, 398);
            outlineBuilder(3, 1, "swamp", -1203, 397);
            outlineBuilder(2, 1, "swamp", -1202, 398);
            outlineBuilder(2, 1, "swamp", -1207, 396);
            outlineBuilder(1, 1, "swamp", -1207, 399);
        }
        //mapS12W36
        if (Y > -126325 && Y < -115546 && X < 374956 && X > 363245) //X-34
        {
            elevation = 0;
            region = "s12w36";
            campout = true;
            outlineBuilder(34, 34, "vardanianGrass", -1244, 388);
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

            outlineBuilder(34, 34, "vardanianWetland", -1176, 286);
            outlineBuilder(4, 1, "swamp", -1176, 286);
            outlineBuilder(3, 2, "swamp", -1175, 287);
            outlineBuilder(6, 6, "swamp", -1176, 295);
            outlineBuilder(2, 5, "swamp", -1174, 301);
            outlineBuilder(4, 3, "swamp", -1170, 293);
            outlineBuilder(1, 2, "swamp", -1173, 293);
            outlineBuilder(3, 2, "swamp", -1172, 286);
            outlineBuilder(2, 1, "swamp", -1169, 297);
            outlineBuilder(2, 2, "swamp", -1171, 290);
            outlineBuilder(2, 1, "swamp", -1175, 291);
            outlineBuilder(3, 4, "swamp", -1167, 287);
            outlineBuilder(1, 10, "swamp", -1168, 286);
            outlineBuilder(1, 2, "swamp", -1161, 287);
            outlineBuilder(2, 7, "swamp", -1166, 290);
            outlineBuilder(5, 6, "swamp", -1162, 293);
            outlineBuilder(1, 4, "swamp", -1164, 292);
            outlineBuilder(5, 2, "swamp", -1156, 290);
            outlineBuilder(2, 2, "swamp", -1164, 294);
            outlineBuilder(2, 1, "swamp", -1165, 295);
            outlineBuilder(3, 2, "swamp", -1165, 298);
            outlineBuilder(2, 2, "swamp", -1167, 302);
            outlineBuilder(1, 1, "swamp", -1168, 303);
            outlineBuilder(1, 2, "swamp", -1166, 304);
            outlineBuilder(1, 2, "swamp", -1164, 302);
            outlineBuilder(1, 1, "swamp", -1163, 303);
            outlineBuilder(4, 3, "swamp", -1160, 299);
            outlineBuilder(3, 3, "swamp", -1157, 301);
            outlineBuilder(3, 3, "swamp", -1154, 300);
            outlineBuilder(2, 4, "swamp", -1152, 303);
            outlineBuilder(4, 5, "swamp", -1152, 294);
            outlineBuilder(5, 3, "swamp", -1147, 295);
            outlineBuilder(4, 2, "swamp", -1145, 299);
            outlineBuilder(2, 2, "swamp", -1147, 299);
            outlineBuilder(5, 4, "swamp", -1153, 287);
            outlineBuilder(1, 10, "swamp", -1154, 286);
            outlineBuilder(2, 1, "swamp", -1149, 288);
            outlineBuilder(2, 3, "swamp", -1148, 289);
            outlineBuilder(1, 1, "swamp", -1146, 291);
            outlineBuilder(2, 1, "swamp", -1143, 296);
            outlineBuilder(1, 1, "swamp", -1143, 294);
            outlineBuilder(2, 2, "swamp", -1145, 291);
            outlineBuilder(1, 1, "swamp", -1146, 287);
            outlineBuilder(3, 3, "swamp", -1149, 309);
            outlineBuilder(5, 4, "swamp", -1146, 311);
            outlineBuilder(1, 2, "swamp", -1150, 312);
            outlineBuilder(2, 3, "swamp", -1154, 314);
            outlineBuilder(2, 1, "swamp", -1154, 316);
            outlineBuilder(1, 2, "swamp", -1154, 312);
            outlineBuilder(1, 3, "swamp", -1158, 312);
            outlineBuilder(1, 2, "swamp", -1158, 313);
            outlineBuilder(2, 3, "swamp", -1160, 315);
            outlineBuilder(1, 1, "swamp", -1160, 314);
            outlineBuilder(1, 1, "swamp", -1161, 317);
            outlineBuilder(6, 6, "swamp", -1170, 311);
            outlineBuilder(1, 5, "swamp", -1170, 310);
            outlineBuilder(1, 2, "swamp", -1167, 309);
            outlineBuilder(7, 3, "swamp", -1174, 312);
            outlineBuilder(2, 2, "swamp", -1163, 313);
            outlineBuilder(2, 2, "swamp", -1163, 309);
            outlineBuilder(1, 1, "swamp", -1161, 309);
            outlineBuilder(1, 1, "swamp", -1165, 318);
            outlineBuilder(3, 1, "swamp", -1171, 313);
            outlineBuilder(1, 1, "swamp", -1167, 319);
            outlineBuilder(1, 2, "swamp", -1170, 318);
            outlineBuilder(2, 1, "swamp", -1175, 316);
            outlineBuilder(1, 1, "swamp", -1154, 308);
            outlineBuilder(1, 2, "swamp", -1145, 308);
            outlineBuilder(2, 4, "swamp", -1150, 317);
            outlineBuilder(2, 2, "swamp", -1144, 318);
            outlineBuilder(2, 1, "swamp", -1152, 318);
            outlineBuilder(3, 3, "swamp", -1175, 308);
            outlineBuilder(2, 2, "swamp", -1152, 310);
            outlineBuilder(2, 1, "swamp", -1150, 310);
            outlineBuilder(2, 2, "swamp", -1153, 316);
            outlineBuilder(5, 1, "swamp", -1151, 313);
            outlineBuilder(4, 3, "swamp", -1150, 313);
            outlineBuilder(3, 1, "swamp", -1147, 314);
            outlineBuilder(2, 4, "swamp", -1146, 316);
            outlineBuilder(4, 3, "swamp", -1157, 308);
            outlineBuilder(3, 2, "swamp", -1154, 309);
            outlineBuilder(1, 2, "swamp", -1164, 296);
            outlineBuilder(2, 2, "swamp", -1144, 292);

            outlineBuilder(1, 7, "vardanianWoods", -1151, 319);
            outlineBuilder(1, 1, "vardanianWoods", -1146, 318);
            outlineBuilder(1, 1, "vardanianWoods", -1151, 318);
            outlineBuilder(1, 3, "vardanianWoods", -1155, 319);
            outlineBuilder(1, 7, "vardanianWoods", -1163, 319);
            outlineBuilder(1, 4, "vardanianWoods", -1161, 318);
            outlineBuilder(1, 3, "vardanianWoods", -1176, 319);

            outlineBuilder(8, 1, "vardanianGrass", -1176, 311);
            outlineBuilder(1, 1, "vardanianGrass", -1175, 318);
            outlineBuilder(1, 1, "vardanianGrass", -1174, 311);
            outlineBuilder(5, 1, "vardanianGrass", -1175, 311);


            outlineBuilder( 1, 15, "vardanianStone", -1176, 306);
            outlineBuilder(1, 8, "vardanianStone", -1162, 305);
            outlineBuilder(1, 13, "vardanianStone", -1155, 306);
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
        //mapS8w24 //Zimber Village (Hamlet)
        if (Y > -85605 && Y < -74729 && X < 252559 && X > 240873) //X-24
        {
            elevation = 0;
            region = "s8w24";
            campout = true;
            outlineBuilder( 34, 34, "murkwoods", -836, 252);
            outlineBuilder(5, 2, "mistywoods", -836, 252);
            outlineBuilder(3, 2, "mistywoods", -834, 252);
            outlineBuilder(2, 30, "mistywoods", -832, 252);
            outlineBuilder(1, 1, "farmland", -821, 252);
            outlineBuilder(2, 1, "farmland", -814, 252);

            outlineBuilder(4, 2, "murklake", -836, 265);
            outlineBuilder(4, 3, "murklake", -834, 264);
            outlineBuilder(4, 2, "murklake", -831, 263);
            outlineBuilder(5, 25, "murklake", -829, 262);
            outlineBuilder(5, 2, "murklake", -804, 261);

            outlineBuilder(1, 5, "murklake", -820, 268);
            outlineBuilder(1, 3, "murklake", -819, 270);
            outlineBuilder(1, 1, "murklake", -818, 271);
            outlineBuilder(1, 4, "murklake", -817, 269);
            outlineBuilder(2, 3, "murklake", -815, 270);

            outlineBuilder(3, 2, "murklake", -825, 274);
            outlineBuilder(3, 1, "murklake", -823, 275);
            outlineBuilder(2, 2, "murklake", -815, 281);
            outlineBuilder(2, 1, "murklake", -813, 272);

            outlineBuilder(3, 3, "murklake", -809, 274);
            outlineBuilder(2, 2, "murklake", -806, 275);
            outlineBuilder(1, 1, "murklake", -804, 275);

            outlineBuilder(1, 1, "murklake", -809, 277);
            outlineBuilder(1, 3, "murklake", -809, 284);
            outlineBuilder(1, 3, "murklake", -807, 285);

            outlineBuilder(1, 1, "murklake", -812, 276);
            outlineBuilder(1, 1, "murklake", -814, 275);
            outlineBuilder(2, 3, "murklake", -821, 280);

            outlineBuilder(1, 1, "murklake", -828, 281);
            outlineBuilder(1, 2, "murklake", -823, 271);
            outlineBuilder(1, 1, "murklake", -825, 268);

            outlineBuilder(1, 1, "murklake", -811, 285);
        }
        //mapS8W25
        if (Y > -85605 && Y < -74729 && X < 262722 && X > 251041) //X-25
        {
            elevation = 0;
            region = "s8w25";
            campout = true;
            outlineBuilder(34, 34, "murkwoods", -870, 252);

            outlineBuilder(7, 34, "mistywoods", -870, 252);
            outlineBuilder(2, 10, "mistywoods", -870, 259);
            outlineBuilder(1, 16, "mistywoods", -859, 259);
            outlineBuilder(2, 13, "mistywoods", -858, 260);
            outlineBuilder(1, 3, "mistywoods", -840, 259);
            outlineBuilder(2, 1, "mistywoods", -839, 260);
            outlineBuilder(2, 9, "mistywoods", -855, 262);
            outlineBuilder(1, 2, "mistywoods", -846, 262);
            outlineBuilder(2, 4, "mistywoods", -870, 261);
            outlineBuilder(1, 3, "mistywoods", -866, 261);
            outlineBuilder(1, 1, "mistywoods", -862, 261);
            outlineBuilder(1, 2, "mistywoods", -849, 264);
            outlineBuilder(1, 1, "mistywoods", -855, 264);
            outlineBuilder(1, 1, "mistywoods", -856, 263);
            outlineBuilder(1, 1, "mistywoods", -870, 263);

            outlineBuilder( 7, 1, "brickRoad", -855, 252);
            outlineBuilder(1, 2, "brickRoad", -854, 258);
            outlineBuilder(9, 1, "brickRoad", -852, 258);
            outlineBuilder(20, 1, "brickRoad", -851, 266);

            outlineBuilder(3, 7, "murklake", -855, 271);
            outlineBuilder(4, 1, "murklake", -848, 269);
            outlineBuilder(4, 1, "murklake", -847, 269);
            outlineBuilder(4, 1, "murklake", -846, 267);
            outlineBuilder(3, 5, "murklake", -845, 267);
            outlineBuilder(1, 1, "murklake", -846, 271);
            outlineBuilder(1, 1, "murklake", -845, 270);
            outlineBuilder(3, 4, "murklake", -840, 266);
            outlineBuilder(2, 4, "murklake", -846, 275);
            outlineBuilder(3, 1, "murklake", -848, 273);
            outlineBuilder(3, 1, "murklake", -847, 275);
            outlineBuilder(1, 4, "murklake", -845, 271);
            outlineBuilder(5, 1, "murklake", -843, 270);
            outlineBuilder(1, 1, "murklake", -847, 274);
            outlineBuilder(1, 1, "murklake", -844, 272);
            outlineBuilder(2, 1, "murklake", -845, 277);
            outlineBuilder(1, 1, "murklake", -844, 277);
            outlineBuilder(5, 1, "murklake", -856, 272);
            outlineBuilder(6, 1, "murklake", -857, 272);
            outlineBuilder(5, 1, "murklake", -858, 273);
            outlineBuilder(3, 6, "murklake", -864, 276);
            outlineBuilder(3, 6, "murklake", -870, 277);
            outlineBuilder(2, 2, "murklake", -868, 282);
            outlineBuilder(2, 1, "murklake", -861, 283);
            outlineBuilder(2, 1, "murklake", -869, 283);
            outlineBuilder(1, 2, "murklake", -846, 280);
            outlineBuilder(1, 2, "murklake", -840, 282);
            outlineBuilder(1, 1, "murklake", -838, 277);
            outlineBuilder(1, 1, "murklake", -849, 281);
            outlineBuilder(2, 2, "murklake", -846, 284);
            outlineBuilder(3, 1, "murklake", -856, 280);
            outlineBuilder(2, 2, "murklake", -855, 281);
            outlineBuilder(1, 2, "murklake", -855, 283);
            outlineBuilder(2, 1, "murklake", -854, 284);
            outlineBuilder(1, 1, "murklake", -853, 284);
            outlineBuilder(1, 1, "murklake", -857, 280);
            outlineBuilder(1, 1, "murklake", -863, 281);
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
        //mapS7W24 //Aster Village
        if (Y > -75331 && Y < -64538 && X < 252559 && X > 240873) //X-24
        {
            elevation = 0;
            region = "s7w24";
            campout = true;
            outlineBuilder(34, 34, "mistywoods", -836, 218);

            outlineBuilder(1, 3, "hotGrass", -836, 218);
            outlineBuilder(2, 2, "hotGrass", -833, 218);
            outlineBuilder(5, 3, "hotGrass", -831, 218);
            outlineBuilder(6, 2, "hotGrass", -828, 218);
            outlineBuilder(8, 4, "hotGrass", -826, 218);
            outlineBuilder(12, 3, "hotGrass", -822, 218);
            outlineBuilder(15, 3, "hotGrass", -819, 218);
            outlineBuilder(17, 2, "hotGrass", -816, 218);
            outlineBuilder(22, 3, "hotGrass", -814, 218);
            outlineBuilder(24, 2, "hotGrass", -811, 218);
            outlineBuilder(27, 3, "hotGrass", -809, 218);
            outlineBuilder(29, 2, "hotGrass", -806, 218);
            outlineBuilder(32, 1, "hotGrass", -804, 218);
            outlineBuilder(34, 1, "hotGrass", -803, 218);

            outlineBuilder(8, 5, "thenganBrick", -811, 220);
            outlineBuilder(1, 23, "brickRoad", -830, 221);
            outlineBuilder(2, 1, "brickRoad", -830, 219);
            outlineBuilder(1, 2, "brickRoad", -832, 219);
            outlineBuilder(1, 1, "brickRoad", -832, 218);
            outlineBuilder(5, 1, "brickRoad", -809, 222);
            outlineBuilder(1, 2, "brickRoad", -810, 226);
            outlineBuilder(1, 1, "brickRoad", -808, 226);
            outlineBuilder(1, 1, "brickRoad", -810, 224);

            outlineBuilder(3, 2, "farmland", -805, 221);
            outlineBuilder(2, 2, "farmland", -805, 225);
            outlineBuilder(1, 1, "farmland", -805, 228);
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
            outlineBuilder(34, 34, "vardanianWetland", -1176, 218);

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
        //mapS7W36
        if (Y > -75331 && Y < -64538 && X < 374956 && X > 363245) //X-36
        {
            elevation = 0;
            region = "s7w36";
            campout = true;
            outlineBuilder(34, 34, "vardanianWoods", -1244, 218);

            outlineBuilder(4, 2, "vardanianGrass", -1212, 218);
            outlineBuilder(3, 1, "vardanianGrass", -1213, 218);
            outlineBuilder(2, 2, "vardanianGrass", -1215, 218);
            outlineBuilder(1, 1, "vardanianGrass", -1216, 218);
            outlineBuilder(2, 1, "vardanianGrass", -1217, 218);
            outlineBuilder(1, 3, "vardanianGrass", -1220, 218);
            outlineBuilder(1, 1, "vardanianGrass", -1220, 219);
            outlineBuilder(2, 2, "vardanianGrass", -1222, 218);
            outlineBuilder(1, 1, "vardanianGrass", -1223, 218);
            outlineBuilder(1, 7, "vardanianGrass", -1238, 218);
            outlineBuilder(2, 8, "vardanianGrass", -1238, 218);
            outlineBuilder(1, 8, "vardanianGrass", -1240, 220);
            outlineBuilder(1, 4, "vardanianGrass", -1239, 222);
            outlineBuilder(1, 3, "vardanianGrass", -1240, 223);
            outlineBuilder(1, 1, "vardanianGrass", -1240, 224);
            outlineBuilder(1, 8, "vardanianGrass", -1241, 221);
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
        if (Y > -65106 && Y < -54332 && X < 262722 && X > 251041) //X-25
        {
            elevation = 0;
            region = "s6w25";
            campout = false;
            outlineBuilder(34, 34, "hotGrass", -870, 184);

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

            outlineBuilder(2, 3, "farmland", -848, 192);
            outlineBuilder(2, 1, "farmland", -845, 195);

            outlineBuilder(2, 2, "farmland", -846, 206);
            outlineBuilder(2, 1, "farmland", -843, 206);
            outlineBuilder(2, 2, "farmland", -841, 204);
            outlineBuilder(3, 2, "farmland", -842, 200);
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
        //mapS6W33
        if (Y > -65123.86412538113 && Y < -54318.61407216786 && X < 344333 && X > 332640) //X-33
        {
            elevation = 0;
            region = "s6w33";
            campout = true;
            outlineBuilder(34, 34, "vardanianWetland", -1142, 184);

            outlineBuilder(1, 6, "swamp", -1142, 217);
            outlineBuilder(1, 1, "swamp", -1142, 188);
            outlineBuilder(2, 1, "swamp", -1140, 187);
            outlineBuilder(1, 3, "swamp", -1136, 184);
            outlineBuilder(1, 3, "swamp", -1130, 184);
            outlineBuilder(1, 5, "swamp", -1138, 188);
            outlineBuilder(1, 1, "swamp", -1131, 188);
            outlineBuilder(1, 1, "swamp", -1141, 189);
            outlineBuilder(1, 3, "swamp", -1141, 190);
            outlineBuilder(1, 7, "swamp", -1142, 191);
            outlineBuilder(1, 3, "swamp", -1136, 189);
            outlineBuilder(1, 3, "swamp", -1137, 190);
            outlineBuilder(1, 4, "swamp", -1126, 188);
            outlineBuilder(1, 1, "swamp", -1121, 188);
            outlineBuilder(2, 6, "swamp", -1114, 184);
            outlineBuilder(1, 8, "swamp", -1116, 186);
            outlineBuilder(1, 5, "swamp", -1118, 187);
            outlineBuilder(1, 2, "swamp", -1110, 187);
            outlineBuilder(1, 2, "swamp", -1118, 188);
            outlineBuilder(1, 7, "swamp", -1123, 189);
            outlineBuilder(1, 8, "swamp", -1123, 190);
            outlineBuilder(1, 3, "swamp", -1138, 192);
            outlineBuilder(1, 1, "swamp", -1138, 193);
            outlineBuilder(2, 2, "swamp", -1142, 192);
            outlineBuilder(2, 3, "swamp", -1142, 194);
            outlineBuilder(1, 5, "swamp", -1142, 196);
            outlineBuilder(1, 3, "swamp", -1142, 197);
            outlineBuilder(1, 2, "swamp", -1142, 198);
            outlineBuilder(1, 9, "swamp", -1126, 193);
            outlineBuilder(1, 4, "swamp", -1116, 193);
            outlineBuilder(1, 4, "swamp", -1132, 193);
            outlineBuilder(1, 1, "swamp", -1130, 192);
            outlineBuilder(1, 1, "swamp", -1140, 201);
            outlineBuilder(1, 3, "swamp", -1142, 202);
            outlineBuilder(1, 2, "swamp", -1142, 203);
            outlineBuilder(1, 2, "swamp", -1139, 203);
            outlineBuilder(1, 1, "swamp", -1138, 202);
            outlineBuilder(2, 6, "swamp", -1142, 204);
            outlineBuilder(2, 5, "swamp", -1142, 206);
            outlineBuilder(1, 1, "swamp", -1139, 208);
            outlineBuilder(2, 2, "swamp", -1142, 208);
            outlineBuilder(1, 1, "swamp", -1142, 210);
            outlineBuilder(2, 5, "swamp", -1141, 215);
            outlineBuilder(1, 5, "swamp", -1140, 214);
            outlineBuilder(1, 6, "swamp", -1138, 213);
            outlineBuilder(1, 5, "swamp", -1137, 212);
            outlineBuilder(1, 2, "swamp", -1137, 211);
            outlineBuilder(1, 5, "swamp", -1130, 217);
            outlineBuilder(1, 4, "swamp", -1129, 216);
            outlineBuilder(1, 2, "swamp", -1129, 215);
            outlineBuilder(1, 1, "swamp", -1128, 214);
            outlineBuilder(2, 3, "swamp", -1127, 210);
            outlineBuilder(1, 1, "swamp", -1126, 209);
            outlineBuilder(1, 3, "swamp", -1132, 196);
            outlineBuilder(1, 2, "swamp", -1128, 196);
            outlineBuilder(3, 8, "swamp", -1119, 196);
            outlineBuilder(1, 7, "swamp", -1119, 199);
            outlineBuilder(1, 2, "swamp", -1118, 200);
            outlineBuilder(2, 3, "swamp", -1118, 201);
            outlineBuilder(1, 5, "swamp", -1127, 198);
            outlineBuilder(1, 6, "swamp", -1127, 199);
            outlineBuilder(2, 5, "swamp", -1126, 200);
            outlineBuilder(1, 6, "swamp", -1126, 202);
            outlineBuilder(1, 1, "swamp", -1134, 196);
            outlineBuilder(1, 6, "swamp", -1135, 197);
            outlineBuilder(1, 2, "swamp", -1136, 198);
            outlineBuilder(1, 4, "swamp", -1117, 217);
            outlineBuilder(2, 3, "swamp", -1118, 215);
            outlineBuilder(1, 1, "swamp", -1116, 214);
            outlineBuilder(1, 4, "swamp", -1121, 214);
            outlineBuilder(1, 3, "swamp", -1122, 215);
            outlineBuilder(1, 1, "swamp", -1120, 216);
            outlineBuilder(2, 1, "swamp", -1118, 212);
            outlineBuilder(1, 2, "swamp", -1123, 213);
            outlineBuilder(1, 1, "swamp", -1120, 213);
            outlineBuilder(1, 3, "swamp", -1122, 212);
            outlineBuilder(1, 5, "swamp", -1123, 211);
            outlineBuilder(1, 1, "swamp", -1120, 210);
            outlineBuilder(1, 1, "swamp", -1119, 209);
            outlineBuilder(1, 1, "swamp", -1118, 210);
            outlineBuilder(1, 2, "swamp", -1123, 210);
            outlineBuilder(1, 3, "swamp", -1123, 209);
            outlineBuilder(1, 3, "swamp", -1124, 208);
            outlineBuilder(1, 4, "swamp", -1125, 207);
            outlineBuilder(1, 5, "swamp", -1126, 206);
            outlineBuilder(1, 4, "swamp", -1133, 198);
            outlineBuilder(1, 4, "swamp", -1134, 199);
            outlineBuilder(1, 6, "swamp", -1136, 200);
            outlineBuilder(1, 5, "swamp", -1135, 201);
            outlineBuilder(1, 7, "swamp", -1135, 202);
            outlineBuilder(1, 6, "swamp", -1133, 203);
            outlineBuilder(1, 5, "swamp", -1120, 205);
            outlineBuilder(1, 4, "swamp", -1118, 206);
            outlineBuilder(1, 3, "swamp", -1116, 207);
            outlineBuilder(1, 1, "swamp", -1113, 206);
            outlineBuilder(1, 1, "swamp", -1114, 208);
            outlineBuilder(1, 1, "swamp", -1116, 208);
            outlineBuilder(1, 2, "swamp", -1116, 209);
            outlineBuilder(1, 5, "swamp", -1132, 206);
            outlineBuilder(1, 4, "swamp", -1132, 207);
            outlineBuilder(1, 2, "swamp", -1131, 208);
            outlineBuilder(1, 1, "swamp", -1130, 209);
            outlineBuilder(1, 3, "swamp", -1114, 200);
            outlineBuilder(4, 4, "swamp", -1140, 187);
            outlineBuilder(1, 2, "swamp", -1136, 203);
            outlineBuilder(1, 1, "swamp", -1136, 204);
            outlineBuilder(1, 1, "swamp", -1120, 209);
            outlineBuilder(1, 1, "swamp", -1128, 211);
            outlineBuilder(1, 3, "swamp", -1129, 212);
            outlineBuilder(1, 3, "swamp", -1129, 213);
            outlineBuilder(4, 1, "swamp", -1124, 209);
            outlineBuilder(2, 1, "swamp", -1125, 208);
            outlineBuilder(2, 3, "swamp", -1125, 212);
            outlineBuilder(1, 10, "swamp", -1121, 195);
            outlineBuilder(1, 10, "swamp", -1133, 195);
            outlineBuilder(1, 12, "swamp", -1136, 185);
            outlineBuilder(1, 16, "swamp", -1139, 186);
            outlineBuilder(1, 14, "swamp", -1137, 187);
            outlineBuilder(1, 10, "swamp", -1123, 191);
            outlineBuilder(1, 11, "swamp", -1123, 192);
            outlineBuilder(1, 23, "swamp", -1134, 194);
            outlineBuilder(1, 11, "swamp", -1126, 203);
            outlineBuilder(1, 17, "swamp", -1131, 204);
            outlineBuilder(1, 10, "swamp", -1132, 205);

            outlineBuilder(24, 1, "crag", -1109, 194);
            outlineBuilder(13, 1, "crag", -1110, 196);
            outlineBuilder(6, 1, "crag", -1110, 211);
            outlineBuilder(1, 1, "crag", -1111, 211);
            outlineBuilder(3, 1, "crag", -1110, 215);
            outlineBuilder(2, 1, "crag", -1112, 216);
            outlineBuilder(1, 1, "crag", -1113, 217);
            outlineBuilder(3, 1, "crag", -1111, 215);
            outlineBuilder(1, 2, "crag", -1112, 199);
            outlineBuilder(4, 1, "crag", -1111, 202);
            outlineBuilder(2, 1, "crag", -1112, 203);
            outlineBuilder(1, 1, "crag", -1113, 203);
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

            outlineBuilder(1, 2, "farmland", -851, 167);
        }
        //Layer -4 (cold region): elev 0
        //mapS4E1
        if (Y > -44704 && Y < -33915 && X < - 2490 && X > -14114) //X1
        {
            elevation = 0;
            region = "s4e1";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", 14, 116);

            //Eschuttes
            outlineBuilder(3, 2, "thatch", 22, 127);
            outlineBuilder(2, 1, "thatch", 24, 128);
            outlineBuilder(2, 2, "thatch", 21, 130);
            outlineBuilder(1, 1, "farmland", 23, 130);
            outlineBuilder(1, 1, "farmland", 21, 129);
            //Hamlt
            outlineBuilder(2, 1, "thatch", 28, 142);
            outlineBuilder(1, 1, "farmland", 29, 143);
            //Aiernock
            outlineBuilder(2, 2, "thatch", 41, 121);
            outlineBuilder(1, 1, "thatch", 41, 123);
            outlineBuilder(2, 2, "farmland", 38, 123);
            outlineBuilder(2, 1, "farmland", 40, 122);
            outlineBuilder(1, 1, "farmland", 39, 125);

            outlineBuilder(1, 9, "forest", 34, 146);
            outlineBuilder(1, 5, "forest", 37, 145);
            outlineBuilder(1, 3, "forest", 37, 144);
            outlineBuilder(1, 3, "forest", 36, 147);
            outlineBuilder(1, 4, "forest", 41, 139);
            outlineBuilder(1, 3, "forest", 42, 138);
            outlineBuilder(1, 2, "forest", 43, 140);
        }
        //mapS4
        if (Y > -44704 && Y < -33915 && X < 7687 && X > - 3901) //X0
        {
            elevation = 0;
            region = "s4";
            campout = true;
            outlineBuilder( 34, 34, "greenGrass", -20, 116);
            outlineBuilder( 1, 4, "stonePath", 3, 116);
            outlineBuilder( 33, 1, "stonePath", 6, 117);

            outlineBuilder(2, 2, "forest", -6, 126);
            outlineBuilder(1, 1, "forest", -7, 126);
            outlineBuilder(2, 1, "forest", -3, 128);
            outlineBuilder(1, 1, "forest", -2, 129);
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
        //mapS3E6
        if (Y > -34556 && Y < -23654 && X < -53489.88731544383 && X > -65110.798814782334) //X6
        {
            elevation = 0;
            region = "s3e6";
            campout = true;
            outlineBuilder( 34, 34, "brightGrass", 184, 82);

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
        //mapS2W14 //CRANHEIM DRAINAGE SWAMP
        if (Y > -24704 && Y < -13476 && X < 150510 && X > 138886) //X-14 //todo add map
        {
            elevation = 0;
            region = "s2w14";
            campout = true;
            outlineBuilder(34, 34, "hotGrass", -496, 48);

            outlineBuilder(11, 18, "dirt", -494, 63);
            outlineBuilder(2, 2, "dirt", -496, 71);
            outlineBuilder(2, 5, "dirt", -496, 80);
            outlineBuilder(8, 4, "dirt", -481, 74);
            outlineBuilder(4, 2, "dirt", -477, 77);
            outlineBuilder(3, 18, "dirt", -493, 60);
            outlineBuilder(1, 10, "dirt", -487, 59);
            outlineBuilder(2, 3, "dirt", -492, 58);
            outlineBuilder(1, 1, "dirt", -489, 59);

            outlineBuilder(7, 18, "dirt", -496, 73);
            outlineBuilder(7, 18, "shallowSewage", -496, 73);

            outlineBuilder(9, 14, "dirt", -493, 64);
            outlineBuilder(9, 14, "shallowSewage", -493, 64);

            outlineBuilder(1, 2, "dirt", -491, 63);
            outlineBuilder(1, 2, "shallowSewage", -491, 63);

            outlineBuilder(2, 12, "dirt", -489, 62);
            outlineBuilder(2, 12, "shallowSewage", -489, 62);

            outlineBuilder(3, 1, "dirt", -479, 64);
            outlineBuilder(3, 1, "shallowSewage", -479, 64);

            outlineBuilder(4, 5, "sewage", -491, 78);
            outlineBuilder(3, 3, "sewage", -494, 76);
            outlineBuilder(2, 3, "sewage", -493, 74);
            outlineBuilder(2, 2, "sewage", -493, 79);
            outlineBuilder(8, 5, "sewage", -490, 70);
            outlineBuilder(2, 1, "sewage", -492, 72);
            outlineBuilder(2, 1, "sewage", -491, 71);
            outlineBuilder(2, 4, "sewage", -488, 68);
            outlineBuilder(2, 3, "sewage", -484, 69);
            outlineBuilder(1, 2, "sewage", -483, 71);
            outlineBuilder(2, 4, "sewage", -485, 72);
            outlineBuilder(4, 3, "sewage", -483, 65);
            outlineBuilder(3, 1, "sewage", -485, 74);
            outlineBuilder(1, 2, "sewage", -484, 74);
            outlineBuilder(2, 1, "sewage", -483, 75);
            outlineBuilder(2, 1, "sewage", -484, 76);
            outlineBuilder(2, 5, "sewage", -486, 80);
            outlineBuilder(2, 2, "sewage", -484, 78);
            outlineBuilder(2, 2, "sewage", -482, 75);
            outlineBuilder(3, 1, "sewage", -481, 77);
            outlineBuilder(1, 1, "sewage", -482, 79);
            outlineBuilder(1, 2, "sewage", -481, 80);
            outlineBuilder(2, 2, "sewage", -480, 76);
            outlineBuilder(2, 4, "sewage", -492, 67);
            outlineBuilder(1, 2, "sewage", -491, 69);
            outlineBuilder(1, 1, "sewage", -492, 70);
            outlineBuilder(1, 1, "sewage", -493, 72);
            outlineBuilder(1, 2, "sewage", -495, 74);
            outlineBuilder(2, 3, "sewage", -490, 65);
            outlineBuilder(1, 2, "sewage", -482, 64);
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
        //mapS1W8
        if (Y > -14144 && Y < -3328 && X < 89314 && X > 77652) //X-8
        {
            elevation = 0;
            region = "s1w8";
            campout = true;
            outlineBuilder(34, 34, "woods", -292, 14);
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
        //mapN1E6
        if (Y > 6290 && Y < 17073 && X < -53489.88731544383 && X > -65110.798814782334) //X6
        {
            elevation = 0;
            region = "n1e6";
            campout = true;
            //outlineBuilder( 34, 34, "outline", 184, -54);
            outlineBuilder(18, 34, "brightGrass", 184, -38);

            outlineBuilder( 16, 34, "snow", 184, -54);
            outlineBuilder(1, 8, "snow", 184, -38);

            outlineBuilder(3, 9, "frost", 184, -37);
            outlineBuilder(3, 6, "frost", 192, -38);
            outlineBuilder(1, 1, "frost", 198, -38);
            outlineBuilder(2, 5, "frost", 199, -38);
            outlineBuilder(3, 4, "frost",  204, -38);
            outlineBuilder(2, 8, "frost", 207, -39);
            outlineBuilder(1, 3, "frost", 215, -39);
            outlineBuilder(1, 1, "frost", 216, -40);
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
        //mapN2E5
        if (Y > 16445 && Y < 27296 && X < -43292 && X > -54937) //X5
        {
            elevation = 1;
            region = "n2e5";
            campout = true;
            outlineBuilder(34, 34, "snow", 150, -88);
        }
        //mapN2E6
        if (Y > 16445 && Y < 27296 && X < -53489.88731544383 && X > -65110.798814782334) //X6
        {
            elevation = 1;
            region = "n2e6";
            campout = true;
            outlineBuilder(34, 34, "snow", 184, -88);
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
        //mapN3E6
        if (Y > 26650 && Y < 37456 && X < -53489.88731544383 && X > -65110.798814782334) //X6
        {
            elevation = 1;
            region = "n3e6";
            campout = true;
            outlineBuilder(34, 34, "snow", 184, -122);
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
        //mapN4E6
        if (Y > 36878 && Y < 47662 && X < -53489.88731544383 && X > -65110.798814782334) //X6
        {
            elevation = 1;
            region = "n4e6";
            campout = true;
            outlineBuilder(34, 34, "snow", 184, -156);
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
    else if (map == "floodedHideout") //This is a dungeon found in map W3
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "floodedHideout";
        campout = true;
        //starting chamber
        outlineBuilder( 4, 4, "rock", 0, 0);
    }
    else if (map == "murkwaterCave")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "murkwaterCave";
        campout = true;
        //starting chamber
        outlineBuilder( 4, 4, "rock", 0, 0);

        outlineBuilder(1, 2, "rock", 1, -1);
        outlineBuilder(1, 2, "rock", 2, -2);
        outlineBuilder(1, 3, "rock", 1, 4);
        outlineBuilder(1, 6, "rock", 4, 3);
        outlineBuilder(5, 1, "rock", 4, -6);
        outlineBuilder(2, 1, "rock", 3, -7);
        outlineBuilder(2, 1, "rock", 2, -8);
        outlineBuilder(1, 1, "rock", 9, 4);
        outlineBuilder(3, 1, "rock", 10, 4);
        outlineBuilder(1, 1, "rock", 10, 9);
        outlineBuilder(2, 1, "rock", 11, 9);
        outlineBuilder(6, 1, "rock", 12, 10);
        outlineBuilder(3, 1, "rock", 11, 15);
        outlineBuilder(2, 1, "rock", 10, 16);
        outlineBuilder(2, 1, "rock", 12, 17);
        outlineBuilder(2, 1, "rock", 13, 18);
        outlineBuilder(2, 1, "rock", 14, 19);
        outlineBuilder(1, 2, "rock", 14, 5);
        outlineBuilder(1, 3, "rock", 15, 4);
        outlineBuilder(1, 2, "rock", 17, 5);
        outlineBuilder(1, 1, "rock", 18, 6);
        outlineBuilder(6, 1, "rock", 19, 6);
        outlineBuilder(4, 1, "rock", 18, 11);
        outlineBuilder(1, 3, "rock", 19, 14);
        outlineBuilder(1, 4, "rock", 19, 15);
        outlineBuilder(2, 3, "rock", 20, 16);
        outlineBuilder(1, 2, "rock", 21, 18);
        outlineBuilder(1, 2, "rock", 20, 19);
        outlineBuilder(1, 6, "rock", 15, 20);
        outlineBuilder(1, 1, "rock", 19, 21);
        outlineBuilder(8, 1, "rock", 15, 21);
        outlineBuilder(1, 1, "rock", 9, 17);
        outlineBuilder(1, 6, "rock", -4, -8);
        outlineBuilder(1, 2, "rock", -8, -8);
        outlineBuilder(1, 7, "rock", -9, -7);
        outlineBuilder(1, 9, "rock", -12, -6);
        outlineBuilder(1, 5, "rock", -13, -5);
        outlineBuilder(1, 2, "rock", -15, -4);
        outlineBuilder(1, 2, "rock", -16, -3);
        outlineBuilder(1, 3, "rock", -7, -5);
        outlineBuilder(1, 1, "rock", -13, 1);
        outlineBuilder(1, 9, "rock", -9, 2);
        outlineBuilder(1, 4, "rock", -14, 2);
        outlineBuilder(1, 8, "rock", -13, 3);
        outlineBuilder(1, 5, "rock", -13, 4);
        outlineBuilder(3, 1, "rock", -11, 5);
        outlineBuilder(2, 1, "rock", -10, 7);
        outlineBuilder(2, 1, "rock", -9, 8);
        outlineBuilder(5, 1, "rock", -8, 9);
        outlineBuilder(2, 1, "rock", -7, 11);
        outlineBuilder(3, 1, "rock", -9, 13);
        outlineBuilder(4, 1, "rock", -8, 15);
        outlineBuilder(2, 1, "rock", -6, 12);
        outlineBuilder(1, 1, "rock", -5, 13);
        outlineBuilder(3, 1, "rock", -4, 13);
        outlineBuilder(4, 1, "rock", -9, 18);
        outlineBuilder(1, 1, "rock", -10, 21);
        outlineBuilder(3, 1, "rock", -3, 15);
        outlineBuilder(2, 1, "rock", -2, 17);
        outlineBuilder(1, 2, "rock", -1, 18);
        outlineBuilder(1, 3, "rock", 0, 19);
        outlineBuilder(1, 8, "rock", 2, 18);
        outlineBuilder(1, 2, "rock", 3, 17);
        outlineBuilder(1, 1, "rock", 3, 16);
        outlineBuilder(1, 2, "rock", 2, 15);
        outlineBuilder(1, 3, "rock", 2, 14);
        outlineBuilder(2, 3, "rock", 1, 12);
        outlineBuilder(1, 1, "rock", 1, 11);
        outlineBuilder(1, 2, "rock", -9, -9);
        outlineBuilder(1, 2, "rock", -10, -10);
        outlineBuilder(1, 5, "rock", -12, -11);
        outlineBuilder(1, 3, "rock", -8, -12);
        outlineBuilder(1, 3, "rock", -14, -12);
        outlineBuilder(1, 4, "rock", -6, -13);
        outlineBuilder(1, 13, "rock", -3, -14);
        outlineBuilder(1, 5, "rock", -1, -15);
        outlineBuilder(1, 5, "rock", 0, -13);
        outlineBuilder(1, 2, "rock", 1, -12);
        outlineBuilder(1, 3, "rock", 7, -13);
        outlineBuilder(1, 2, "rock", 9, -12);
        outlineBuilder(2, 1, "rock", 23, 16);
        outlineBuilder(2, 2, "rock", 16, -9);
        outlineBuilder(1, 2, "rock", 15, -7);
        outlineBuilder(2, 1, "vardanianWetland", 0, 1);
        outlineBuilder(1, 1, "vardanianWetland", -1, 2);
        outlineBuilder(3, 1, "swamp", 3, -5);
        outlineBuilder(3, 1, "swamp", 2, -6);
        outlineBuilder(1, 1, "swamp", 1, -6);
        outlineBuilder(2, 1, "swamp", 10, 7);
        outlineBuilder(2, 1, "swamp", 9, 8);
        outlineBuilder(1, 1, "swamp", 8, 9);
        outlineBuilder(3, 1, "swamp", 11, 6);
        outlineBuilder(2, 2, "swamp", 12, 5);
        outlineBuilder(2, 1, "swamp", 12, 8);
        outlineBuilder(2, 1, "swamp", 13, 9);
        outlineBuilder(1, 1, "swamp", 14, 6);
        outlineBuilder(2, 1, "swamp", 15, 6);
        outlineBuilder(3, 1, "swamp", 16, 5);
        outlineBuilder(1, 2, "swamp", 17, 3);
        outlineBuilder(1, 1, "swamp", 18, 4);
        outlineBuilder(2, 1, "swamp", 19, 4);
        outlineBuilder(2, 1, "swamp", 17, 6);
        outlineBuilder(3, 1, "swamp", 18, 7);
        outlineBuilder(1, 4, "swamp", -13, -4);
        outlineBuilder(1, 6, "swamp", -14, -3);
        outlineBuilder(2, 5, "swamp", -16, -2);
        outlineBuilder(1, 6, "swamp", -16, 0);
        outlineBuilder(1, 7, "swamp", -12, 1);
        outlineBuilder(1, 1, "swamp", -10, 2);
        outlineBuilder(2, 1, "swamp", -15, 1);
        outlineBuilder(1, 1, "swamp", -14, 1);
        outlineBuilder(1, 1, "swamp", -8, 14);
        outlineBuilder(4, 1, "swamp", -7, 13);
        outlineBuilder(2, 1, "swamp", -6, 14);
        outlineBuilder(1, 1, "swamp", -5, 14);
        outlineBuilder(1, 2, "swamp", -16, -12);
        outlineBuilder(1, 4, "swamp", -16, -11);
        outlineBuilder(1, 1, "swamp", -16, -10);
        outlineBuilder(1, 3, "swamp", -14, -10);
        outlineBuilder(1, 7, "swamp", -17, -13);
        outlineBuilder(1, 5, "swamp", -14, -14);
        outlineBuilder(1, 1, "swamp", -12, -15);
        outlineBuilder(1, 7, "swamp", 11, -12);
        outlineBuilder(1, 8, "swamp", 10, -11);
        outlineBuilder(1, 1, "swamp", 10, -10);
        outlineBuilder(1, 1, "swamp", 13, -10);
        outlineBuilder(1, 2, "swamp", 13, -13);
        outlineBuilder(1, 1, "swamp", 17, -13);
        outlineBuilder(1, 4, "swamp", 15, -10);
        outlineBuilder(1, 2, "swamp", 14, -9);
        outlineBuilder(1, 3, "swamp", 13, -8);
        outlineBuilder(1, 1, "swamp", 14, -10);
        outlineBuilder(1, 3, "swamp", 12, -7);
        outlineBuilder(1, 1, "swamp", 12, -6);
        outlineBuilder(4, 1, "swamp", 18, -9);
        outlineBuilder(1, 1, "swamp", 19, -8);
        outlineBuilder(4, 1, "swamp", 17, -7);
        outlineBuilder(3, 1, "swamp", 16, -6);
        outlineBuilder(1, 2, "swamp", 14, -6);

    }
    else if (map == "sourceOfTheGlow")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "sourceOfTheGlow";
        campout = true;
        //starting chamber
        outlineBuilder( 4, 4, "rock", 0, 0);
        outlineBuilder(2, 3, "rock", 1, -2);
        outlineBuilder(3, 2, "rock", 2, -5);
        outlineBuilder(4, 1, "rock", 4, -8);
        outlineBuilder(1, 1, "rock", 5, -8);
        outlineBuilder(5, 1, "rock", 6, -12);
        outlineBuilder(1, 6, "rock", 7, -12);
        outlineBuilder(1, 1, "rock", 12, -11);
        outlineBuilder(1, 6, "rock", 12, -10);
        outlineBuilder(7, 1, "rock", 17, -17);
        outlineBuilder(4, 2, "rock", 15, -21);
        outlineBuilder(3, 4, "rock", 15, -24);
        outlineBuilder(2, 3, "rock", 16, -26);
        outlineBuilder(1, 1, "rock", 16, -17);
        outlineBuilder(1, 1, "rock", 18, -16);
        outlineBuilder(2, 1, "rock", 18, -28);
    }
    else if (map == "sourceOfTheGlow2")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "sourceOfTheGlow2";
        campout = true;
        //starting chamber
        outlineBuilder( 2, 2, "rock", 0, 0);
        outlineBuilder(2, 1, "rock", 1, 2);
        outlineBuilder(1, 4, "rock", -4, 0);
        outlineBuilder(1, 6, "rock", 2, 0);
        outlineBuilder(2, 2, "rock", -1, -2);
        outlineBuilder(3, 1, "rock", -5, -3);
        outlineBuilder(1, 1, "rock", -4, -1);
        outlineBuilder(1, 3, "rock", 0, -3);
        outlineBuilder(2, 1, "rock", 2, -5);
        outlineBuilder(2, 2, "rock", 7, 1);
        outlineBuilder(2, 5, "rock", 9, 2);
        outlineBuilder(1, 7, "rock", 11, 4);
        outlineBuilder(8, 1, "rock", 18, -3);
        outlineBuilder(1, 2, "rock", 16, -3);
        outlineBuilder(3, 1, "rock", 17, -6);
        outlineBuilder(1, 9, "rock", -11, -4);
        outlineBuilder(1, 4, "rock", 12, -5);
        outlineBuilder(1, 7, "rock", -15, 1);
        outlineBuilder(4, 1, "rock", -14, 2);
        outlineBuilder(1, 1, "rock", -12, -4);
        outlineBuilder(4, 1, "rock", -10, -3);
        outlineBuilder(1, 1, "rock", 16, -5);
    }
    else if (map == "huskCave")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "huskCave";
        campout = true;
        //starting chamber
        outlineBuilder(1, 4, "huskcave", 0, 0);
        outlineBuilder(1, 11, "huskcave", 2, 1);
        outlineBuilder(1, 1, "huskcave", 3, -1);
        outlineBuilder(1, 8, "huskcave", 5, 2);
        outlineBuilder(1, 7, "huskcave", 6, 0);
        outlineBuilder(1, 3, "huskcave", 8, -1);
        outlineBuilder(1, 4, "huskcave", 6, 3);
        outlineBuilder(3, 1, "huskcave", 13, 1);
        outlineBuilder(1, 1, "huskcave", 14, 3);
        outlineBuilder(2, 1, "huskcave", 15, 3);
        outlineBuilder(8, 1, "huskcave", 16, 4);
        outlineBuilder(3, 1, "huskcave", 17, 5);
        outlineBuilder(6, 1, "huskcave", 15, 6);
        outlineBuilder(2, 1, "huskcave", 17, 9);
        outlineBuilder(7, 1, "huskcave", 14, 8);
        outlineBuilder(5, 1, "huskcave", 13, 9);
        outlineBuilder(1, 4, "huskcave", 15, 13);
        outlineBuilder(1, 5, "huskcave", 15, 14);
        outlineBuilder(1, 4, "huskcave", 16, 15);
        outlineBuilder(2, 21, "huskcave", 18, 16);
        outlineBuilder(1, 3, "huskcave", 16, 18);
        outlineBuilder(1, 2, "huskcave", 16, 19);
        outlineBuilder(2, 1, "huskcave", 16, 20);
        outlineBuilder(3, 1, "huskcave", 15, 21);
        outlineBuilder(2, 1, "huskcave", 16, 23);
        outlineBuilder(1, 1, "huskcave", 17, 24);
        outlineBuilder(4, 1, "huskcave", 18, 24);
        outlineBuilder(1, 1, "huskcave", 17, 27);
        outlineBuilder(1, 5, "huskcave", 13, 28);
        outlineBuilder(1, 2, "huskcave", 12, 29);
        outlineBuilder(1, 2, "huskcave", 11, 30);
        outlineBuilder(1, 5, "huskcave", 9, 31);
        outlineBuilder(1, 2, "huskcave", 8, 32);
        outlineBuilder(1, 2, "huskcave", 7, 33);
        outlineBuilder(1, 4, "huskcave", 6, 34);
        outlineBuilder(1, 2, "huskcave", 8, 35);
        outlineBuilder(1, 1, "huskcave", 6, 35);
        outlineBuilder(3, 1, "huskcave", 5, 35);
        outlineBuilder(1, 1, "huskcave", 4, 37);
        outlineBuilder(1, 4, "huskcave", 13, 32);
        outlineBuilder(2, 5, "huskcave", 13, 33);
        outlineBuilder(1, 7, "huskcave", 12, 35);
        outlineBuilder(1, 10, "huskcave", 9, 36);
        outlineBuilder(1, 9, "huskcave", 10, 37);
        outlineBuilder(1, 6, "huskcave", 10, 38);
        outlineBuilder(1, 7, "huskcave", 9, 39);
        outlineBuilder(1, 6, "huskcave", 9, 40);
        outlineBuilder(1, 4, "huskcave", 10, 41);
        outlineBuilder(1, 3, "huskcave", 10, 42);
        outlineBuilder(1, 1, "huskcave", 18, 38);
        outlineBuilder(1, 17, "huskcave", 20, 18);
        outlineBuilder(2, 14, "huskcave", 23, 19);
        outlineBuilder(1, 13, "huskcave", 23, 21);
        outlineBuilder(1, 16, "huskcave", 23, 15);
        outlineBuilder(2, 9, "huskcave", 24, 22);
        outlineBuilder(1, 6, "huskcave", 25, 24);
        outlineBuilder(1, 7, "huskcave", 26, 25);
        outlineBuilder(1, 8, "huskcave", 26, 26);
        outlineBuilder(1, 5, "huskcave", 26, 27);
        outlineBuilder(1, 14, "huskcave", 26, 14);
        outlineBuilder(1, 19, "huskcave", 26, 13);
        outlineBuilder(1, 17, "huskcave", 27, 12);
        outlineBuilder(2, 1, "huskcave", 29, 10);
        outlineBuilder(1, 9, "huskcave", 32, 11);
        outlineBuilder(2, 1, "huskcave", 27, 6);
        outlineBuilder(7, 1, "huskcave", 28, 4);
        outlineBuilder(2, 1, "huskcave", 29, 3);
        outlineBuilder(1, 1, "huskcave", 30, 3);
        outlineBuilder(1, 1, "huskcave", 40, 10);
        outlineBuilder(1, 2, "huskcave", 43, 14);
        outlineBuilder(1, 3, "huskcave", 32, 27);
        outlineBuilder(2, 2, "huskcave", 33, 28);
        outlineBuilder(1, 3, "huskcave", 32, 30);
        outlineBuilder(1, 3, "huskcave", 31, 31);
        outlineBuilder(1, 2, "huskcave", 31, 32);
        outlineBuilder(1, 3, "huskcave", 30, 33);
        outlineBuilder(1, 4, "huskcave", 29, 34);
        outlineBuilder(1, 1, "huskcave", 34, 34);
        outlineBuilder(1, 7, "huskcave", 29, 35);
        outlineBuilder(1, 8, "huskcave", 31, 36);
        outlineBuilder(1, 4, "huskcave", 30, 37);
        outlineBuilder(1, 3, "huskcave", 31, 38);
        outlineBuilder(1, 4, "huskcave", 31, 39);
        outlineBuilder(1, 4, "huskcave", 32, 40);
        outlineBuilder(1, 7, "huskcave", 31, 41);
        outlineBuilder(1, 1, "huskcave", 31, 42);
        outlineBuilder(1, 2, "huskcave", 33, 42);
        outlineBuilder(1, 2, "huskcave", 34, 43);
        outlineBuilder(1, 2, "huskcave", 35, 44);
        outlineBuilder(1, 2, "huskcave", 38, 37);
        outlineBuilder(1, 4, "huskcave", 39, 38);
        outlineBuilder(1, 1, "huskcave", 42, 39);
        outlineBuilder(1, 2, "huskcave", 41, 40);
        outlineBuilder(1, 10, "huskcave", 42, 41);
        outlineBuilder(1, 4, "huskcave", 48, 40);
        outlineBuilder(1, 4, "huskcave", 47, 42);
        outlineBuilder(1, 2, "huskcave", 48, 43);
        outlineBuilder(2, 1, "huskcave", 49, 38);
        outlineBuilder(1, 1, "huskcave", 43, 15);
        outlineBuilder(1, 2, "huskcave", 42, 16);
        outlineBuilder(1, 2, "huskcave", 41, 17);
        outlineBuilder(3, 2, "huskcave", 40, 18);
        outlineBuilder(9, 1, "huskcave", 42, 20);
        outlineBuilder(1, 1, "huskcave", 41, 26);
        outlineBuilder(4, 1, "huskcave", 43, 26);
        outlineBuilder(3, 1, "huskcave", 44, 27);
        outlineBuilder(1, 2, "huskcave", 45, 28);
        outlineBuilder(2, 1, "huskcave", 47, 28);
        outlineBuilder(2, 1, "huskcave", 48, 29);
        outlineBuilder(3, 1, "huskcave", 49, 30);
        outlineBuilder(7, 1, "huskcave", 50, 32);
        outlineBuilder(1, 7, "huskcave", 42, 11);
        outlineBuilder(1, 5, "huskcave", 43, 10);
        outlineBuilder(1, 1, "huskcave", 50, 11);
        outlineBuilder(1, 5, "huskcave", 47, 12);
        outlineBuilder(1, 5, "huskcave", 48, 13);
        outlineBuilder(1, 8, "huskcave", 49, 14);
        outlineBuilder(1, 7, "huskcave", 50, 16);
        outlineBuilder(1, 2, "huskcave", 53, 15);
        outlineBuilder(1, 3, "huskcave", 53, 17);
        outlineBuilder(2, 7, "huskcave", 52, 19);
        outlineBuilder(1, 1, "huskcave", 51, 15);
        outlineBuilder(2, 6, "huskcave", 51, 18);
        outlineBuilder(1, 2, "huskcave", 53, 21);
        outlineBuilder(2, 1, "huskcave", 59, 19);
        outlineBuilder(1, 2, "huskcave", 57, 21);
        outlineBuilder(1, 1, "huskcave", 56, 13);
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
    else if (map == "blacktrollCave")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -1; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "blacktrollCave";
        campout = true;
        //starting chamber
        outlineBuilder( 1, 1, "jungle", 0, 0);
        outlineBuilder(1, 8, "rock", -8, 0);
        outlineBuilder(1, 3, "rock", -7, -1);
        outlineBuilder(1, 2, "rock", -7, 1);
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
    else if (map == "firstRedCave")
    {
        player.dmx = map;
        player.underground = true;
        elevation = -2; //underground temperatures are consistently -1 unless there is a certain closeness to magma...
        region = "firstRedCave";
        campout = true;
        //starting chamber
        //outlineBuilder(1, 1, "outline", 0, 0);

        outlineBuilder(8, 1, "redMoss", 0, -1);
        outlineBuilder(6, 1, "redMoss", -1, -3);
        outlineBuilder(4, 1, "redMoss", 1, 0);
        outlineBuilder(1, 1, "redMoss", 2, 2);
        outlineBuilder(3, 1, "redMoss", -2, 0);
        outlineBuilder(1, 1, "redMoss", -3, 0);
        outlineBuilder(1, 5, "redMoss", -7, -1);
        outlineBuilder(1, 2, "redMoss", -6, -2);
        outlineBuilder(2, 1, "redMoss", -7, 1);
        outlineBuilder(2, 1, "redMoss", -1, 4);
        outlineBuilder(1, 2, "redMoss", -7, 3);
        outlineBuilder(1, 2, "redMoss", -6, 4);
        outlineBuilder(1, 4, "redMoss", -5, 5);
        outlineBuilder(1, 8, "redMoss", -14, 0);
        outlineBuilder(1, 2, "redMoss", -12, 1);
        outlineBuilder(1, 3, "redMoss", -16, -1);
        outlineBuilder(1, 3, "redMoss", -18, -2);
        outlineBuilder(6, 1, "redMoss", -19, -4);
        outlineBuilder(1, 1, "redMoss", -20, -3);
        outlineBuilder(4, 1, "redMoss", -20, 1);
        outlineBuilder(4, 1, "redMoss", -13, 2);
        outlineBuilder(1, 1, "redMoss", -12, 2);
        outlineBuilder(3, 1, "redMoss", -19, 4);
        outlineBuilder(2, 1, "redMoss", -18, 3);
        outlineBuilder(3, 1, "redMoss", -17, 4);
        outlineBuilder(4, 1, "redMoss", -20, 6);
        outlineBuilder(1, 1, "redMoss", -16, 5);
        outlineBuilder(1, 1, "redMoss", -15, 5);
        outlineBuilder(8, 1, "redMoss", -14, 3);
        outlineBuilder(1, 1, "redMoss", -19, 9);
        outlineBuilder(1, 4, "redMoss", -19, 10);
        outlineBuilder(1, 6, "redMoss", -16, 11);
        outlineBuilder(1, 4, "redMoss", -24, 8);
        outlineBuilder(1, 2, "redMoss", -25, 7);
        outlineBuilder(1, 2, "redMoss", -14, 12);
        outlineBuilder(1, 3, "redMoss", -13, 13);
        outlineBuilder(1, 4, "redMoss", -11, 12);
        outlineBuilder(1, 1, "redMoss", -10, 11);
        outlineBuilder(1, 2, "redMoss", -8, 13);
        outlineBuilder(1, 4, "redMoss", -7, 14);
        outlineBuilder(2, 1, "redMoss", -7, 15);
        outlineBuilder(3, 1, "redMoss", -8, 16);
        outlineBuilder(2, 1, "redMoss", -9, 18);
        outlineBuilder(1, 2, "redMoss", -4, 15);
        outlineBuilder(1, 1, "redMoss", 1, 5);
        outlineBuilder(1, 5, "redMoss", 0, 6);
        outlineBuilder(1, 5, "redMoss", 2, 7);
        outlineBuilder(1, 8, "redMoss", 3, 8);
        outlineBuilder(2, 1, "redMoss", 3, 9);
        outlineBuilder(1, 1, "redMoss", 2, 10);
        outlineBuilder(6, 1, "redMoss", 1, 10);
        outlineBuilder(1, 1, "redMoss", 2, 14);
        outlineBuilder(1, 1, "redMoss", 0, 15);
        outlineBuilder(7, 1, "redMoss", -2, 15);
        outlineBuilder(8, 1, "redMoss", -1, 15);
        outlineBuilder(2, 1, "redMoss", -3, 17);
        outlineBuilder(7, 1, "redMoss", 0, 17);
        outlineBuilder(6, 1, "redMoss", 1, 18);
        outlineBuilder(4, 1, "redMoss", 2, 19);
        outlineBuilder(1, 2, "redMoss", 6, 9);
        outlineBuilder(1, 3, "redMoss", 10, 7);
        outlineBuilder(1, 5, "redMoss", 12, 8);
        outlineBuilder(1, 2, "redMoss", 16, 7);
        outlineBuilder(1, 1, "redMoss", 15, 9);
        outlineBuilder(1, 3, "redMoss", 13, 10);
        outlineBuilder(1, 2, "redMoss", 12, 11);
        outlineBuilder(1, 1, "redMoss", 10, 11);
        outlineBuilder(1, 3, "redMoss", 10, 12);
        outlineBuilder(1, 5, "redMoss", 12, 13);
        outlineBuilder(1, 1, "redMoss", 16, 12);
        outlineBuilder(1, 2, "redMoss", 14, 14);
        outlineBuilder(2, 1, "redMoss", 15, 15);
        outlineBuilder(1, 1, "redMoss", 15, 17);
        outlineBuilder(1, 3, "redMoss", 15, 18);
        outlineBuilder(1, 6, "redMoss", 14, 19);
        outlineBuilder(1, 1, "redMoss", 14, 20);
        outlineBuilder(1, 6, "redMoss", 16, 20);
        outlineBuilder(1, 2, "redMoss", 21, 21);
        outlineBuilder(1, 2, "redMoss", 17, 21);
        outlineBuilder(1, 1, "redMoss", 17, 22);
        outlineBuilder(1, 2, "redMoss", 16, 23);
        outlineBuilder(1, 2, "redMoss", 15, 24);
        outlineBuilder(1, 2, "redMoss", 14, 25);
        outlineBuilder(2, 2, "redMoss", 13, 31);
        outlineBuilder(4, 1, "redMoss", 12, 32);
        outlineBuilder(2, 1, "redMoss", 11, 34);
        outlineBuilder(2, 1, "redMoss", 10, 35);
        outlineBuilder(2, 1, "redMoss", 9, 36);
        outlineBuilder(4, 1, "redMoss", 8, 35);
        outlineBuilder(1, 1, "redMoss", 7, 36);
        outlineBuilder(3, 1, "redMoss", 6, 34);
        outlineBuilder(2, 2, "redMoss", 4, 33);

        outlineBuilder(1, 1, "redWater", -16, -4);
        outlineBuilder(3, 2, "redWater", -18, -5);
        outlineBuilder(2, 1, "redWater", -19, -6);
        outlineBuilder(1, 1, "redWater", -22, -3);
        outlineBuilder(2, 1, "redWater", -22, -1);
        outlineBuilder(5, 1, "redWater", -21, -3);
        outlineBuilder(3, 1, "redWater", -20, -2);
        outlineBuilder(1, 1, "redWater", 9, 7);
        outlineBuilder(1, 3, "redWater", 9, 6);
        outlineBuilder(1, 2, "redWater", 11, 5);
        outlineBuilder(1, 3, "redWater", 12, 4);
        outlineBuilder(1, 3, "redWater", 13, 7);
        outlineBuilder(1, 3, "redWater", 14, 6);
        outlineBuilder(1, 1, "redWater", 14, 3);
        outlineBuilder(1, 1, "redWater", 11, 8);
        outlineBuilder(1, 6, "redWater", 9, 9);
        outlineBuilder(1, 4, "redWater", 9, 10);
        outlineBuilder(1, 3, "redWater", 12, 2);
        outlineBuilder(1, 4, "redWater", 11, 1);
        outlineBuilder(1, 5, "redWater", 11, 0);
        outlineBuilder(1, 3, "redWater", 13, -1);
        outlineBuilder(1, 2, "redWater", 15, -2);
        outlineBuilder(4, 1, "redWater", 17, 8);
        outlineBuilder(3, 1, "redWater", 16, 9);
        outlineBuilder(2, 1, "redWater", 18, 9);
        outlineBuilder(1, 1, "redWater", 11, 11);
        outlineBuilder(2, 3, "redWater", 7, 11);
        outlineBuilder(1, 6, "redWater", 6, 13);
        outlineBuilder(1, 5, "redWater", 9, 14);
        outlineBuilder(1, 4, "redWater", 10, 15);
        outlineBuilder(1, 1, "redWater", 13, 16);
        outlineBuilder(5, 1, "redWater", 14, 26);
        outlineBuilder(6, 1, "redWater", 13, 24);
        outlineBuilder(6, 1, "redWater", 12, 23);
        outlineBuilder(5, 1, "redWater", 11, 23);
        outlineBuilder(3, 1, "redWater", 10, 24);
        outlineBuilder(3, 1, "redWater", 9, 23);
        outlineBuilder(4, 1, "redWater", 8, 22);
        outlineBuilder(1, 1, "redWater", 7, 24);
        outlineBuilder(7, 1, "redWater", 15, 27);
        outlineBuilder(1, 1, "redWater", 16, 28);
        outlineBuilder(2, 2, "redWater", 16, 30);
        outlineBuilder(6, 1, "redWater", 18, 28);
        outlineBuilder(3, 1, "redWater", 19, 27);
        outlineBuilder(2, 1, "redWater", 20, 27);
        outlineBuilder(2, 1, "redWater", 21, 28);
        outlineBuilder(6, 1, "redWater", 19, 33);
        outlineBuilder(2, 1, "redWater", 21, 34);
        outlineBuilder(2, 1, "redWater", 22, 35);
        outlineBuilder(1, 1, "redWater", 20, 34);
        outlineBuilder(1, 1, "redWater", 20, 38);
        outlineBuilder(1, 3, "redWater", 20, 39);
        outlineBuilder(1, 2, "redWater", 22, 40);
        outlineBuilder(1, 1, "redWater", 18, 37);
        outlineBuilder(1, 1, "redWater", 14, 33);
        outlineBuilder(3, 1, "redWater", 13, 33);

        outlineBuilder(1, 2, "shallowRedWater", 0, 7);
        outlineBuilder(1, 3, "shallowRedWater", 0, 8);
        outlineBuilder(1, 2, "shallowRedWater", 1, 9);
        outlineBuilder(2, 1, "shallowRedWater", 2, 11);

        outlineBuilder(1, 1, "outline", 0, 0); //delete this bottom section
        outlineBuilder(1, 1, "outline", 6, 9);
        outlineBuilder(1, 1, "outline", 4, 34);
        outlineBuilder(1, 1, "desert", -9, 19);//We need to go deeper!
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

        //Changeling containment cell
        outlineBuilder( 1, 1, "lab", -31, 773);
        outlineBuilder( 2, 1, "lab", -32, 772);
        outlineBuilder( 2, 2, "forest", -34, 772);

        //Boggart containment cell
        outlineBuilder(1, 1, "lab", -31, 768);
        outlineBuilder(2, 1, "lab", -32, 767);
        outlineBuilder(2, 1, "nirRoad", -34, 767);
        outlineBuilder(2, 1, "brightGrass", -33, 767);

        //StoneGolem containment cell
        outlineBuilder(1, 1, "lab", -29, 768);
        outlineBuilder(2, 1, "lab", -28, 767);
        outlineBuilder(2, 2, "crag", -27, 767);

        //Skriatok containment cell
        outlineBuilder(1, 1, "lab", -31, 800);
        outlineBuilder(2, 1, "lab", -32, 800);
        outlineBuilder(2, 2, "mistywoods", -34, 800);

        //AncientCrawler containment cell
        outlineBuilder(1, 1, "lab", -29, 800);
        outlineBuilder(2, 1, "lab", -28, 800);
        outlineBuilder(2, 2, "molten", -27, 800);

        //Wendigo containment cell
        outlineBuilder(1, 1, "lab", -31, 805);
        outlineBuilder(2, 1, "lab", -32, 805);
        outlineBuilder(2, 2, "vardanianWoods", -34, 805);

        //Glassworm containment cell
        outlineBuilder(1, 1, "lab", -29, 805);
        outlineBuilder(2, 1, "lab", -28, 805);
        outlineBuilder(2, 2, "cephrianTile", -27, 805);

        //Gargoyle containment cell
        outlineBuilder(1, 1, "lab", -31, 810);
        outlineBuilder(2, 1, "lab", -32, 810);
        outlineBuilder(2, 1, "boroStone", -34, 810);
        outlineBuilder(1, 1, "boroStone", -33, 810);
        outlineBuilder(1, 1, "vardanianGrass", -33, 811);

        //Werewolf containment cell
        outlineBuilder(1, 1, "lab", -29, 810);
        outlineBuilder(2, 1, "lab", -28, 810);
        outlineBuilder(2, 2, "mistywoods",  -27, 810);

        //Beholder containment cell
        outlineBuilder(1, 1, "lab", -31, 815);
        outlineBuilder(2, 1, "lab", -32, 815);
        outlineBuilder(2, 2, "prairy", -34, 815);

        //Chupacabras containment cell
        outlineBuilder(1, 1, "lab", -29, 815);
        outlineBuilder(2, 1, "lab", -28, 815);
        outlineBuilder(2, 2, "brightGrass", -27, 815);
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
    else if (map == "testMap") //TESTING //TEST //TEST ROOM //TESTROOM //TESTMAP //TEST MAP
    {
        player.dmx = map;
        player.underground = false;
        elevation = -1;
        region = "testMap";
        campout = true;
        //starting chamber
        outlineBuilder(68,68, "murkwoods", -34, -34); //gladeGrass //royalwoods //murkwoods
        outlineBuilder(1,4, "murklake", 1, 1); //glade //royalwater //murklake
        outlineBuilder(2, 1, "murklake", 4, -1);
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
                else if (terrain == "vorcadian")
                {
                    XXX.drawImage(vorcadianFields, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "blueWoods")
                {
                    XXX.drawImage(blueVardanWoods, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
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
                else if (terrain == "vardanianFarmland")
                {
                    XXX.drawImage(vardanFarmlandEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "vardanianStone")
                {
                    XXX.drawImage(vardanianStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "burntVardanianStone")
                {
                    XXX.drawImage(burntVardanianStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "boroStone")
                {
                    XXX.drawImage(boroStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "burntBoroStone")
                {
                    XXX.drawImage(burntBoroStone, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
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
                else if (terrain == "shallowSouthbog")
                {
                    over("landing", j, i, extraX, extraY);
                    XXX.drawImage(southbog, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "southbogMud")
                {
                    over("sticky", j, i, extraX, extraY);
                    XXX.drawImage(southbogMud, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "southbog")
                {
                    over("sea", j, i, extraX, extraY);
                    XXX.drawImage(southbog, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
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
                else if (terrain == "orgishTile")
                {
                    XXX.drawImage(orgishTile, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "hollowDirt")
                {
                    XXX.drawImage(hollowDirt, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "hollowGrass")
                {
                    XXX.drawImage(hollowGrass, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "redMoss")
                {
                    XXX.drawImage(redMoss, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "gladeGrass")
                {
                    XXX.drawImage(gladeGrass, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "shallowGlade")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(glade, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "glade")
                {
                    over("sea", j, i, extraX, extraY);

                    XXX.drawImage(glade, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "hollow")
                {
                    over("hollow", j, i, extraX, extraY);

                    XXX.drawImage(hollow, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "swamp")
                {
                    over("swamp", j, i, extraX, extraY);

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
                else if (terrain == "vardanianWetlands")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(vardanianWetlands, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "shallowMire")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(vardanMire, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "mire")
                {
                    over("sea", j, i, extraX, extraY);

                    XXX.drawImage(vardanMire, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "mireTR")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(mireTR, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "mireTL")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(mireTL, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "mireBR")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(mireBR, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "mireBL")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(mireBL, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "redWater")
                {
                    over("sea", j, i, extraX, extraY);

                    XXX.drawImage(redCaveWater, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "shallowRedWater")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(redCaveWater, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "murklake")
                {
                    over("sea", j, i, extraX, extraY);

                    XXX.drawImage(murklake, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "shallowMurklake")
                {
                    over("landing", j, i, extraX, extraY);

                    XXX.drawImage(murklake, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "murkwoods")
                {
                    XXX.drawImage(murkwoods, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "badlands")
                {
                    XXX.drawImage(utah, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "royalwater")
                {
                    over("sea", j, i, extraX, extraY);

                    XXX.drawImage(royalWater, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "royaldirt")
                {
                    XXX.drawImage(royalDirt, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "royalwoods")
                {
                    if (currentSeason == "Frost")
                    {
                        XXX.drawImage(royalDirt, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else if (currentSeason == "Harvest")
                    {
                        XXX.drawImage(royalWoods, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                    else
                    {
                        XXX.drawImage(royalSummer, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    }
                }
                else if (terrain == "huskcave")
                {
                    XXX.drawImage(huskTile, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "graveyard")
                {
                    XXX.drawImage(vardanGraveyardEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "sewage")
                {
                    over("sewer", j, i, extraX, extraY);
                    XXX.drawImage(sewageEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                }
                else if (terrain == "shallowSewage")
                {
                    over("landing", j, i, extraX, extraY);
                    XXX.save();
                    XXX.globalAlpha = 0.6;
                    XXX.drawImage(sewageEnv, (j - 1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    XXX.restore();
                }

                if (showTiles == true)
                {
                    XXX.beginPath();
                    XXX.lineWidth = 5;
                    XXX.strokeStyle = "black";
                    XXX.rect((j-1) * 300 + (extraX * 300) + X, (i - 1) * 300 + (extraY * 300) + Y, 300, 300);
                    XXX.stroke();
                }
            }
        }
    }
}
