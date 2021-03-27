/**
 * Created by skyeguy on 1/22/17.
 */
//this function contains cheat methods that rely on the gameLoop.
function cheats()
{
    if (tileBuilder == true)
    {
        if (xKey)
        {
            xKey = false;
            console.log('outlineBuilder(1, 1, "outline", ' + (Math.floor((X - 700) / 300) * -1) + ', ' + (Math.floor((Y - 275) / 300) * -1) + ');');
        }
    }
    if (buildMode == true)
    {
        var buildList = ["coords", "Selva Tree", "Sonja Tree", "Gallosh Plant", "Vorlym Plant", "Thueg", "Conejo", "Boulchom", "Great Pine Tree", "Pine Tree", "Snowy Great Pine Tree", "Snowy Pine Tree", "Ashai Tree", "Ghoul", "Ribback", "Vreck", "Dalger", "Varonoi", "Stovol Beetle", "Thegol Thorn", "Elk", "Black Beruln", "Mekle Plant", "Black Bear", "Turkey", "Skol", "Deer", "Fox", "Badger", "Hoffalgre", "Crow", "Silter", "Scilt Plant", "Korsk Beetle", "Cheshire", "Grizzly Bear", "Borgal", "Lizard", "Koivaya (loner)", "Koivaya (breeder)", "Cranberry Plant", "Eyewort Plant", "Korceida Plant", "Laumin Plant", "Jolle Plant", "Porstol Plant", "Fallory Plant", "Palgga Plant", "Bleeding Heart Plant", "Aberdom Plant", "Beunum Plant", "Ciprin Plant", "Marigold Plant", "Hoil Plant", "Callop Plant", "Darb Plant", "Kofke Plant", "Steugiurne Plant", "Web", "Etna Egg Sack", "Etna", "Mustard Plant", "Carrot Plant", "Potato Plant", "Cabbage Plant", "Harst Plant", "Santh Plant", "Wheat Plant", "Suuli Plant", "Lilypads", "Swamp Brush", "Swamp Lily Plant", "Borsht Plant", "Cattail Plant", "Mandrake Plant", "Leech", "Mud Toad", "Ker", "Palinsyda", "GhoulFly", "Toad", "Hydra", "Bat", "Vecher Bug", "Bog Troll", "Cerebris Mycelium I", "Cerebris Mycelium II", "Swamp Island", "Xuim Mycelium I", "Xuim Mycelium II", "Saffron", "Murdered Vardanians", "Blood", "Skeleton", "Bones", "Scuffle Marks", "West Furniture", "Floor Decorations", "South Furniture", "Nirwaden Furniture", "Nirwaden Goods", "Vardanian Spikes", "Pike Wall", "Cephrian Buidling", "Hyena", "Giraffe", "Lion", "Wild Dog", "Gazelle", "Zarbu", "Termite Mound", "Empty Termite Mound", "Acacia Tree", "Zwaleim Plant", "Glaza Plant", "Nupala Plant", "Tchalta Plant", "Tchafula Plant", "Gnoll", "Thengan Buildings", "Freydic Buildings", "Nirwaden Buildings", "Vardanian Buildings", "Vardanian Fencing", "Prison Bars", "Door", "Crate", "Sign", "Item", "Bed", "Fine Bed", "Vardanian Bed", "South Bed", "Angler", "Trubka Plant", "Eisyncryne Plant", "Cauw Plant", "Hesk Fungus", "Toadstools", "Thimblecap Mushrooms", "Royla Plant", "Vardanian Mardyl Plant", "Orgish Mardyl Plant", "Forest Thadine Plant", "Danzig Plant", "Chyoul Plant", "Ameloy Plant", "Laicaum Plant", "Plains Thadine Plant", "Saug Plant", "Kozlyak Mushrooms", "Maleot Mushrooms", "Gribnoy Mushroom", "Poegroon Mushrooms", "Iod Fungus", "Chervstrakha", "Motylekh", "Shrieking Bloodworm", "Pokinutyy", "Swamp Walks", "Vardanian Utilities", "Tents", "mireIsla", "Rat", "Varmin", "Fegil", "Lyagushka", "Lyagushka Egg Cluster", "Ostryy Grass Plant", "Mornid", "Grey Horse", "Brain Fly Hive", "Cirmusid", "Spitting Mud Fly", "Mud Beetle", "Raed Beetle", "Scorpion", "Whip Scorpion", "Barbol", "Desert Lizard", "Rattler", "Pasha Plant", "Anjay Plant", "Inum Plant", "Naib Plant", "Mawe Plant", "Voaii", "Xerocole", "Zetian Well", "Zetian Oven", "Chapul Plant", "Armadii", "Burnt Vardanian Assets", "Carts", "Mimicry", "Mimic", "Capul", "Noth Brush", "Stepov Tree", "Rona Plant", "Rulma Plant", "Iloptheora Plant", "Bosk Plant", "Qiao Plant", "Acretia Plant", "Kroloc Plant", "Grey Scretil", "Udnal", "Mud Troll", "Nulga", "Vodmena", "Dagger Fish", "Marnica", "Bogwasp", "Sagro", "Mud Strider", "Crilm Bug", "EemegMound", "Eemeg", "Sleeper Mudman", "Standard Mudman", "Hunter Mudman", "Nothian Snapjaw", "Snapjaw", "Grave", "Headstones", "Stone", "Xormid", "Tarsi Plant", "Purpura", "Hikari Fungus", "Laryk Plant", "Blood Lily Plant", "Neth Plant", "Bahvseg", "Khorkhoi", "Libelula", "Dragonfly", "Harvestman", "Gremling", "Drowner", "Old Thenganor Assets", "Still Fountains", "Placeable Light Sources", "Thengan Bridges", "Thenganor Castle Parts", "Thenganor Castle Parts High", "Thenganor Castles", "Soldier", "Person", "Apple Tree", "Hops Plant", "Cathedral Statues", "Husk Assets", "Husk Wall", "Light", "Cephrian Oven", "Aldrekii Oven", "Toad Huskling", "Ghoul Husk", "Husk", "GhoulHuskling", "ToadHuskling", "Huskling", "Noth Assets", "Noth Buildings", "Perched Mudman", "Birch Tree", "Qiao Campfire", "Leikshor Lilypads", "Spruce Tree", "Andrezil Plant", "Reyasinth Plant", "Muscha Plant", "Laushtaa Plant", "Nimhoc Plant", "Tosk Plant", "Nahaline Plant", "Bullfrog", "Shelisher", "Olmid", "Moba Worm", "Bridge Troll", "Moppot", "Fae", "Eglim", "Ibabi", "Saelcheag", "Kthetrat", "Laumei", "Vuhuhn Plant", "Naume Plant", "Leikshor Spider", "Sutetchi", "Omlai", "Seonjang", "Tiger", "Pig", "Glade Wasp", "Ha", "Panda", "Koi Fish", "Yong", "Snapjaw", "Swan", "Shenqianshou Beetle", "Mulcreu", "Surface Xevolati", "Lanternbug", "Hummingbird", "Iguana", "Giavev", "Tya", "Red Jungle Fowl", "Red Panda", "Echidna", "Jackal", "Geomi", "Geomi Turret", "Bushmaster", "Cobra", "Dragonfly", "Shoko", "Needleworm", "Erokira", "Shishizhe", "Mehib", "Ula", "Yeoumiza", "Poun", "Turatura", "Sasori", "Tao", "Arantanid", "Agaru", "Kabuto", "Cave Xevolati", "Carnid", "Reshid", "Purpura", "Red Lanternbug", "Nayu", "Zhizhu", "Tsutori Plant", "Ikasto Plant", "Yuna Plant", "Nasoba Plant", "Hikari Fungus", "Culumi Plant", "Syanj Plant", "Kuzan", "Zhongye Plant", "Orgish Giant Lily Plant", "Glade Lilypads Plant", "Glade Lily Plant", "Feza Plant", "Mikadzuki Plant", "Ashiga Plant", "Lagu Plant", "Glade Grass Plant", "Ologai Plant", "Jun Plant", "Memem Plant", "Masmao Plant", "Banticul Plant", "Spali Plant", "Milsan Plant", "Eneoji Plant", "Ketsueki Plant", "Unlin Plant", "Olmhaka Plant", "Scretil Plant", "Pink Scretil Plant", "Atsui Bamboo Plant", "Bamboo", "Glade Isla", "Vardanian Road", "Kellish Storage Pot", "Naaprid Sleeping Mat", "Tunnel Web", "Cave Web", "Purpura Spawn", "Hawk Spawn", "Hawk"];
        //                  0           1              2               3                4          5        6           7              8               9                  10                    11              12         13         14       15        16        17             18              19         20          21              22            23          24       25      26      27      28          29        30       31          32             33             34             35         36         37            38                  39                   40                41               42                43             44              45               46               47                 48                   49              50               51               52             53             54             55            56                57            58         59           60           61              62               63              64              65            66             67              68           69            70               71                72               73                74           75        76       77        78           79        80      81      82         83           84                 85                    86                   87               88                  89              90              91               92        93         94           95               96                  97                 98                   99                  100               101               102             103            104       105       106      107         108       109          110                  111               112              113            114             115             116               117          118            119                 120                   121                    122                    123               124       125      126      127     128    129       130           131             132        133         134               135               136           137           138                 139                 140                 141                     142                     143                 144             145             146             147                 148                 149             150                   151                152                   153               154            155           156             157                158           159                160              161      162       163      164      165        166                 167                    168             169        170              171            172            173              174            175           176           177           178          179           180          181            182            183          184            185        186        187          188           189              190          191              192                193       194       195      196         197           198            199           200               201             202            203            204              205             206         207        208        209       210           211         212        213       214         215            216          217        218           219               220               221               222            223       224         225        226       227         228          229           230             231               232             233          234         235         236         237           238          239        240               241                  242                    243                    244                    245                        246                         247            248       249          250          251                252              253           254        255          256             257               258             259        260         261              262           263          264             265                266             267            268                269                270             271                272              273              274              275            276             277            278         279        280        281            282          283     284     285      286        287          288        289         290              291             292             293        294      295        296     297        298       299    300
        if (tKey)
        {
            tKey = false;

            buildRot = 0;
            buildSize = 1;
            buildClase = 0;

            buildToggle -= 1;
            if (buildToggle < 0)
            {
                buildToggle = (buildList.length - 1);
            }
            //console.log(buildList[buildToggle]);
        }
        if (yKey)
        {
            yKey = false;

            buildRot = 0;
            buildSize = 1;
            buildClase = 0;

            buildToggle += 1;
            if (buildToggle >= buildList.length)
            {
                buildToggle = 0;
            }
            //console.log(buildList[buildToggle]);
        }

        //BUILDMENU
        if (buildToggle == 0)
        {
            if (xKey)
            {
                xKey = false;
                console.log(X + ", " + Y);
                worldItems.push([new Item("marker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.beginPath();
                XXX.fillStyle = "#BF0000";
                XXX.arc(1/2 * CCC.width, 1/2 * CCC.height, 15, 0, Math.PI * 2);
                XXX.fill();
            }
        }
        else if (buildToggle == 1)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("selvaTree", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("treeMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(humpa, 1211, 394, 755, 871, -(1/2 * 755 * 1), -(1/2 * 871 * 1), 755 * 1, 871 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 2)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("sonjaTree", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("treeMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(humpa, 1802, 26, 279, 242, -(1/2 * 279 * 1.5), -(1/2 * 242 * 1.5), 279 * 1.5, 242 * 1.5);
                XXX.restore();

                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(humpa, 2128, 24, 279, 242, -(1/2 * 279 * 1.5), -(1/2 * 242 * 1.5), 279 * 1.5, 242 * 1.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 3)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("galloshPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(nognog, 7, 354, 19, 19, -(1/2 * 19 * 2), -(1/2 * 19 * 2), 19 * 2, 19 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 4)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("vorlymPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(nognog, 106, 355, 22, 22, -(1/2 * 22 * 2.5), -(1/2 * 22 * 2.5), 22 * 2.5, 22 * 2.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 5)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else if (alphon > 0.3)
                {
                    alphon = false;
                }
                else
                {
                    alphon = '"baby"';
                }
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X + ', ' + Y + ', "Thueg", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(nognog, 751, 54, 56, 37, -1/2 * 56 * 3, -1/2 * 37 * 3, 56 * 3, 37 * 3);
                XXX.restore();
            }
        }
        else if (buildToggle == 6)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.6)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Conejo", ' + alphon + ', "neutral2"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(nognog, 593, 193, 19, 13, -1/2 * 19 * 3, -1/2 * 13 * 3, 19 * 3, 13 * 3);
                XXX.restore();
            }
        }
        else if (buildToggle == 7)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Boulchom", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(nognog, 159, 194, 46, 42, -1/2 * 46 * 2, -1/2 * 42 * 2, 46 * 2, 42 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 8)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("greatPineTree", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', ' + (5 + 4 * Math.random()) + '));');
                worldItems.push([new Item("treeMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(verse, 3783, 317, 79, 71, -(1/2 * 79 * 8), -(1/2 * 71 * 8), 79 * 8, 71 * 8);
                XXX.restore();
            }
        }
        else if (buildToggle == 9)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("pineTree", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("treeMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(verse, 3783, 317, 79, 71, -(1/2 * 79 * 4.5), -(1/2 * 71 * 4.5), 79 * 4.5, 71 * 4.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 10)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("greatPineTree", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', ' + (5 + 4 * Math.random()) + ', "snowy"));');
                worldItems.push([new Item("treeMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(folw, 19, 315, 82, 79, -(1/2 * 82 * 8), -(1/2 * 79 * 8), 82 * 8, 79 * 8);
                XXX.restore();
            }
        }
        else if (buildToggle == 11)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("pineTree", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true, "snowy"));');
                worldItems.push([new Item("treeMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(folw, 19, 315, 82, 79, -(1/2 * 82 * 4.5), -(1/2 * 79 * 4.5), 82 * 4.5, 79 * 4.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 12)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("ashaiTree", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', ' + (0.6 + 2.4 * Math.random()) + '));');
                worldItems.push([new Item("treeMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(dmil, 15, 522, 99, 108, -(1/2 * 99 * 2 * 2), -(1/2 * 108 * 2 * 2), 99 * 2 * 2, 108 * 2 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 13)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else if (alphon > 0.25)
                {
                    alphon = '"baby"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Ghoul", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(gul, 559, 1, 175, 103, -1/2 * 175 * 1,  -1/2 * 103 * 1, 175 * 1, 103 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 14)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.8)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Ribback", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ribak, 40, 1, 215, 218, -1/2 * 215 * 1, -1/2 * 218 * 1, 215 * 1, 218 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 15)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.85)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                var vrekPat0 = [X, Y];
                var vrekPat1 = [(X + spacer(800)), (Y + spacer(800))];
                var vrekPat2 = [(vrekPat1[0] + spacer(800)), (vrekPat1[1] + spacer(800))];
                var vrekPat3 = [(vrekPat2[0] + spacer(800)), (vrekPat2[1] + spacer(800))];
                var vrekPat4 = [(vrekPat3[0] + spacer(800)), (vrekPat3[1] + spacer(800))];
                var vrekPat5 = [(vrekPat4[0] + spacer(800)), (vrekPat4[1] + spacer(800))];
                var vrekPat6 = [(vrekPat5[0] + spacer(800)), (vrekPat5[1] + spacer(800))];

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Vreck", ' + alphon + ', "preBuilt", {patrolStops: 7, patrolLoop: true, route:' + "[[" + vrekPat1.toString() + "], [" + vrekPat2.toString() + "], [" + vrekPat3.toString() + "], [" + vrekPat4.toString() + "], [" + vrekPat5.toString() + "], [" + vrekPat6.toString() + "], [" + vrekPat0.toString() + "]]}));");
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(gul, 41, 494, 116, 61, -1/2 * 116 * 1 - 14, -1/2 * 61 * 1, 116 * 1, 61 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 16)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.5)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Dalger", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(stic, 340, 172, 125, 95, -1/2 * 125 * 1, -1/2 * 95 * 1, 125 * 1, 95 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 17)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.85)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                var vrekPat0 = [X, Y];
                var vrekPat1 = [(X + spacer(800)), (Y + spacer(800))];
                var vrekPat2 = [(vrekPat1[0] + spacer(800)), (vrekPat1[1] + spacer(800))];
                var vrekPat3 = [(vrekPat2[0] + spacer(800)), (vrekPat2[1] + spacer(800))];
                var vrekPat4 = [(vrekPat3[0] + spacer(800)), (vrekPat3[1] + spacer(800))];
                var vrekPat5 = [(vrekPat4[0] + spacer(800)), (vrekPat4[1] + spacer(800))];

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Varonoi", ' + alphon + ', "preBuilt", {patrolStops: 6, patrolLoop: true, route:' + "[[" + vrekPat1.toString() + "], [" + vrekPat2.toString() + "], ["+ vrekPat3.toString() + "], [" + vrekPat4.toString() + "], [" + vrekPat5.toString() + "] , [" + vrekPat0.toString() + "]]}));");
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(milk, 20, 440, 59, 75, -1/2 * 59 * 1, -1/2 * 75 * 1, 59 * 1, 75 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 18)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.6)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "StovolBeetle", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(wendi, 2, 1281, 108, 55, -1/2 * 108 * 1, -1/2 * 55 * 1, 108 * 1, 55 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 19)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('scenicList.push(new Scenery("thegolthornPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', ' + alphon + '));');
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "ThegolThorn", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(milk, 521, 32, 32, 30, -(1/2 * 32) * 1.17, -(1/2 * 30) * 1.17, 32 * 1.17, 30 * 1.17);
                XXX.restore();

                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0.9);
                XXX.drawImage(milk, 404, 83, 64, 68, -1/2 * 64 * 1.17, -1/2 * 68 * 1.17, 64 * 1.17, 68 * 1.17);
                XXX.restore();
            }
        }
        else if (buildToggle == 20)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.77)
                {
                    alphon = true;
                }
                else if (alphon > 0.32)
                {
                    alphon = '"baby"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Elk", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(toad, 0, 336, 92, 80, -1/2 * 92 * 1.1 + 9, -1/2 * 80 * 1.1, 92 * 1.1, 80 * 1.1);
                XXX.restore();
            }
        }
        else if (buildToggle == 21)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.68)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "BlackBeruln", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(norc, 93, 597, 69, 53, -1/2 * 69 * 2 * 1, -1/2 * 53 * 2 * 1, 69 * 2 * 1, 53 * 2 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 22)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("meklePlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(gul, 1018, 13, 29, 29, -(1/2 * 29 * 1.5), -(1/2 * 29 * 1.5), 29 * 1.5, 29 * 1.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 23)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.72)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "BlackBear", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(polypol, 0, 5, 61, 40, -35, -21, 61 * 1.1, 40 * 1.1);
                XXX.restore();
            }
        }
        else if (buildToggle == 24)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.5)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Turkey", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(pavo, 581, 323, 123, 83, -1/2 * 123 * 1,  -1/2 * 83 * 1, 123 * 1, 83 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 25)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.9)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Skol", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(theng, 354, 2, 53, 34, -1/2 * 53 * 2.25, -1/2 * 34 * 2.25, 53 * 2.25, 34 * 2.25);
                XXX.restore();
            }
        }
        else if (buildToggle == 26)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.8)
                {
                    alphon = true;
                }
                else if (alphon > 0.3)
                {
                    alphon = '"baby"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Deer", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(wendi, 0, 1019, 96, 51, -1/2 * 96 * 2 + 2, -1/2 * 51 * 2, 96 * 2, 51 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 27)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.6)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Fox", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(bloat, 95, 697, 83, 27, -1/2 * 83 * 1.2, -1/2 * 27 * 1.2, 83 * 1.2, 27 * 1.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 28)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.54)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Badger", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(wendi, 7, 908, 52, 31, -1/2 * 52 * 1.75, -1/2 * 31 * 1.75, 52 * 1.75, 31 * 1.75);
                XXX.restore();
            }
        }
        else if (buildToggle == 29)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.45)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Hoffalgre", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(nognog, 49, 9, 56, 19, -1/2 * 56 * 2.2, -1/2 * 19 * 2.2, 56 * 2.2, 19 * 2.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 30)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Crow", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(leshen, 302, 135, 72, 63, -1/2 * 72 * 1.6, -1/2 * 63 * 1.6, 72 * 1.6, 63 * 1.6);
                XXX.restore();
            }
        }
        else if (buildToggle == 31)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.63)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Silter", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(beets, 361, 5, 124, 103, -1/2 * 124 * 1.4, -1/2 * 103 * 1.4, 124 * 1.4, 103 * 1.4);
                XXX.restore();
            }
        }
        else if (buildToggle == 32)
        {
            if (xKey)
            {
                xKey = false;
                var randoonSz = 0.8 + 0.8 * Math.random();
                console.log('scenicList.push(new Scenery("sciltPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true, ' + randoonSz + '));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(beets, 3, 351, 114, 101, -(1/2 * 114 * 2), -(1/2 * 101 * 2), 114 * 2, 101 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 33)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.59)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "KorskBeetle", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(beets, 6, 168, 68, 71, -1/2 * 68 * 1.4, -1/2 * 71 * 1.4, 68 * 1.4, 71 * 1.4);
                XXX.restore();
            }
        }
        else if (buildToggle == 34)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.67)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Cheshire", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(tomb, 384, 586, 127, 100, -1/2 * 127 * 1, -1/2 * 100 * 1, 127 * 1, 100 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 35)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.86)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "GrizzlyBear", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(wendi, 200, 780, 89, 41, -1/2 * 89 * 2, -1/2 * 41 * 2, 89 * 2, 41 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 36)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.81)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Borgal", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(nognog, 90, 440, 145, 114, -1/2 * 145 * 1.7, -1/2 * 114 * 1.7, 145 * 1.7, 114 * 1.7);
                XXX.restore();
            }
        }
        else if (buildToggle == 37)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.7)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Lizard", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(polypol, 1452, 24, 21, 14, -1/2 * 21 * 2.3, -1/2 * 14 * 2.3, 21 * 2.3, 14 * 2.3);
                XXX.restore();
            }
        }
        else if (buildToggle == 38)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.81)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Koivaya", ' + alphon + ', "loner"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(toad, 109, 193, 78, 57, -1/2 * 78 * 1.1, -1/2 * 57 * 1.1, 78 * 1.1, 57 * 1.1);
                XXX.restore();
            }
        }
        else if (buildToggle == 39)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.81)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Koivaya", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(toad, 296, 194, 78, 57, -1/2 * 78 * 1.1, -1/2 * 57 * 1.1, 78 * 1.1, 57 * 1.1);
                XXX.restore();
            }
        }
        else if (buildToggle == 40)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("cranberryPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 812, 107, 29, 28, -(1/2 * 29 * 2.1), -(1/2 * 28 * 2.1), 29 * 2.1, 28 * 2.1);
                XXX.restore();
            }
        }
        else if (buildToggle == 41)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("eyewortPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(beets, 552, 369, 34, 34, -(1/2 * 34 * 2.4), -(1/2 * 34 * 2.4), 34 * 2.4, 34 * 2.4);
                XXX.restore();
            }
        }
        else if (buildToggle == 42)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("korceidaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(beets, 238, 46, 31, 30, -(1/2 * 31 * 2), -(1/2 * 30 * 2), 31 * 2, 30 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 43)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("lauminPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(beets, 237, 132, 31, 30, -(1/2 * 31 * 2), -(1/2 * 30 * 2), 31 * 2, 30 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 44)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("jollePlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(wendi, 333, 957, 55, 50, -(1/2 * 55 * 2), -(1/2 * 50 * 2), 55 * 2, 50 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 45)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("porstolPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(nognog, 568, 223, 31, 26, -(1/2 * 31 * 2), -(1/2 * 26 * 2), 31 * 2, 26 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 46)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("falloryPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(floras, 3, 14, 99, 96, -(1/2 * 99 * 1), -(1/2 * 96 * 1), 99 * 1, 96 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 47)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("palggaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(floras, 122, 15, 99, 96, -(1/2 * 99 * 1), -(1/2 * 96 * 1), 99 * 1, 96 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 48)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("bleedingHeartPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(floras, 471, 146, 37, 40, -(1/2 * 37 * 2), -(1/2 * 40 * 2), 37 * 2, 40 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 49)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("aberdomPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(floras, 856, 166, 22, 27, -(1/2 * 22 * 2), -(1/2 * 27 * 2), 22 * 2, 27 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 50)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("beunumPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(floras, 907, 170, 38, 30, -(1/2 * 38 * 2), -(1/2 * 30 * 2), 38 * 2, 30 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 51)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("ciprinPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(floras, 948, 172, 33, 30, -(1/2 * 33 * 2), -(1/2 * 30 * 2), 33 * 2, 30 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 52)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("marigoldPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(floras, 260, 137, 56, 46, -(1/2 * 56 * 2), -(1/2 * 46 * 2), 56 * 2, 46 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 53)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("hoilPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(norc, 13, 360, 18, 16, -(1/2 * 18 * 2.6), -(1/2 * 16 * 2.6), 18 * 2.6, 16 * 2.6);
                XXX.restore();
            }
        }
        else if (buildToggle == 54)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("callopPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(nognog, 36, 366, 13, 12, -(1/2 * 13 * 3), -(1/2 * 12 * 3), 13 * 3, 12 * 3);
                XXX.restore();
            }
        }
        else if (buildToggle == 55)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("darbPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(nognog, 31, 385, 12, 11, -(1/2 * 12 * 3), -(1/2 * 11 * 3), 12 * 3, 11 * 3);
                XXX.restore();
            }
        }
        else if (buildToggle == 56)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("kofkePlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(nognog, 9, 295, 17, 16, -(1/2 * 17 * 3), -(1/2 * 16 * 3), 17 * 3, 16 * 3);
                XXX.restore();
            }
        }
        else if (buildToggle == 57)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("steugiurnePlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(nognog, 114, 256, 64, 56, -(1/2 * 64 * 3), -(1/2 * 56 * 3), 64 * 3, 56 * 3);
                XXX.restore();
            }
        }
        else if (buildToggle == 58)
        {
            if (xKey)
            {
                xKey = false;
                var randoonSz = 0.9 + 1.9 * Math.random();
                console.log('scenicList.push(new Scenery("web", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', ' + randoonSz + '));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(nognog, 739, 351, 70, 62, -(1/2 * 70 * 1.6 * 1.2), -(1/2 * 62 * 1.6 * 1.2), 70 * 1.6 * 1.2, 62 * 1.6 * 1.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 59)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("etnaEggSac", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(nognog, 834, 374, 10, 10, -(1/2 * 10 * 3.7), -(1/2 * 10 * 3.7), 10 * 3.7, 10 * 3.7);
                XXX.restore();
            }
        }
        else if (buildToggle == 60)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.7)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Etna", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(nognog, 289, 358, 39, 37, -1/2 * 39 * 2, -1/2 * 37 * 2, 39 * 2, 37 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 61)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("mustardPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(floras, 711, 155, 27, 28, -(1/2 * 27 * 1.8), -(1/2 * 28 * 1.8), 27 * 1.8, 28 * 1.8);
                XXX.restore();
            }
        }
        else if (buildToggle == 62)
        {
            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Write in faction:");
            }
            
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("carrotPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', "' + buildPrompt + '"));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(oldverse, 2892, 73, 13, 12, -(1/2 * 13 * 3.6), -(1/2 * 12 * 3.6), 13 * 3.6, 12 * 3.6);
                XXX.restore();
            }
        }
        else if (buildToggle == 63)
        {
            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Write in faction:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("potatoPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', "' + buildPrompt + '"));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(oldverse, 2912, 68, 20, 19, -(1/2 * 20 * 2), -(1/2 * 19 * 2), 20 * 2, 19 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 64)
        {
            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Write in faction:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("cabbagePlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', "' + buildPrompt + '"));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 0, 5, 23, 24, -(1/2 * 23 * 1.6), -(1/2 * 24 * 1.6), 23 * 1.6, 24 * 1.6);
                XXX.restore();
            }
        }
        else if (buildToggle == 65)
        {
            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Write in faction:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("harstPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', "' + buildPrompt + '"));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(freeverse, 240, 27, 17, 19, -(1/2 * 17 * 2.6), -(1/2 * 19 * 2.6), 17 * 2.6, 19 * 2.6);
                XXX.restore();
            }
        }
        else if (buildToggle == 66)
        {
            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Write in faction:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("santhPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', "' + buildPrompt + '"));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(oldverse, 2972, 178, 24, 23, -(1/2 * 24 * 1.65), -(1/2 * 23 * 1.65), 24 * 1.65, 23 * 1.65);
                XXX.restore();
            }
        }
        else if (buildToggle == 67)
        {
            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Write in faction:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("wheatPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', "' + buildPrompt + '"));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 718, 268, 39, 39, -(1/2 * 39 * 2), -(1/2 * 39 * 2), 39 * 2, 39 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 68)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("suuliPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(oldverse, 2878, 92, 49, 50, -(1/2 * 49), -(1/2 * 50), 49, 50);
                XXX.restore();
            }
        }
        else if (buildToggle == 69)
        {
            if (xKey)
            {
                xKey = false;
                var alphon = Math.random();
                if (alphon > 0.66)
                {
                    alphon = 2;
                }
                else if (alphon > 0.33)
                {
                    alphon = 1;
                }
                else
                {
                    alphon = 0;
                }
                console.log('scenicList.push(new Scenery("lilypads", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', ' + alphon + '));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 114, 3, 83, 84, -(1/2 * 83 * 1.2), -(1/2 * 84 * 1.2), 83 * 1.2, 84 * 1.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 70)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("vardanianSwampBrush", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', '+ (1.4 + (Math.random() * 0.8)) +'));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 178, 108, 55, 58, -(1/2 * 55 * 1.4), -(1/2 * 58 * 1.4), 55 * 1.4, 58 * 1.4);
                XXX.restore();
            }
        }
        else if (buildToggle == 71)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("swampLilyPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 100, 143, 25, 24, -(1/2 * 25 * 2.2), -(1/2 * 24 * 2.2), 25 * 2.2, 24 * 2.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 72)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("borshtPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 13, 98, 30, 32, -(1/2 * 30 * 1.4), -(1/2 * 32 * 1.4), 30 * 1.4, 32 * 1.4);
                XXX.restore();
            }
        }
        else if (buildToggle == 73)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("cattailPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 0, 41, 50, 59, -(1/2 * 50 * 1.25), -(1/2 * 59 * 1.25), 50 * 1.25, 59 * 1.25);
                XXX.restore();
            }
        }
        else if (buildToggle == 74)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("mandrakePlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 812, 202, 25, 41, -(1/2 * 25 * 1.5), -(1/2 * 41 * 1.5), 25 * 1.5, 41 * 1.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 75)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Leech", true, "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(dmil, 369, 659, 44, 24, -1/2 * 44 * 2, -1/2 * 24 * 2, 44 * 2, 24 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 76)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.5)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "MudToad", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(toad, 819, 55, 44, 31, -1/2 * 44 * 3, -1/2 * 31 * 3, 44 * 3, 31 * 3);
                XXX.restore();
            }
        }
        else if (buildToggle == 77)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Ker", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(milk, 157, 185, 157, 111, -1/2 * 157, -1/2 * 111, 157, 111);
                XXX.restore();
            }
        }
        else if (buildToggle == 78)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.55)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Palinsyda", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ion, 1194, 166, 48, 44, -1/2 * 48 * 2, -1/2 * 44 * 2, 48 * 2, 48 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 79)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.81)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "GhoulFly", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(dmil, 14, 15, 109, 100, -1/2 * 109, -1/2 * 100, 109, 100);
                XXX.restore();
            }
        }
        else if (buildToggle == 80)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.9)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Toad", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(toad, 36, 555, 193, 138, -1/2 * 193, -1/2 * 138, 193, 138);
                XXX.restore();
            }
        }
        else if (buildToggle == 81)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Hydra", false, "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(hydra, 29, 168, 146, 83, -1/2 * 146, -1/2 * 83, 146, 83);
                XXX.restore();
            }
        }
        else if (buildToggle == 82)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.5)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Bat", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(tomb, 674, 22, 20, 21, -1/2 * 20 * 4, -1/2 * 21 * 4, 20 * 4, 21 * 4);
                XXX.restore();
            }
        }
        else if (buildToggle == 83)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.5)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "VecherBug", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(milk, 749, 156, 32, 28, -1/2 * 32 * 5, -1/2 * 28 * 5, 32 * 5, 28 * 5);
                XXX.restore();
            }
        }
        else if (buildToggle == 84)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.89)
                {
                    alphon = true;
                }
                else if (alphon > 0.56)
                {
                    alphon = false;
                }
                else
                {
                    alphon = '"baby"';
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "BogTroll", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(troli, 563, 5, 107, 140, -1/2 * 107, -1/2 * 140, 107, 140);
                XXX.restore();
            }
        }
        else if (buildToggle == 85)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("jungleStuff", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 6, ' + (1 + 0.4 * Math.random()) +'));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(cef, 1501, 135, 121, 107, -(1/2 * 121 * 1.2), -(1/2 * 107 * 1.2), 121 * 1.2, 107 * 1.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 86)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("jungleStuff", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 7, ' + (1 + 0.4 * Math.random()) +'));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(cef, 1774, 1, 300, 233, -(1/2 * 300 * 1.2), -(1/2 * 233 * 1.2), 300 * 1.2, 233 * 1.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 87)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 7)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 7;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("swampIsla", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("swampIsla", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("swampIsla", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 88)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("jungleStuff", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 12, ' + (1 + 0.2 * Math.random()) +'));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(fect, 607, 149, 175, 171, -(1/2 * 175 * 1), -(1/2 * 171 * 1), 175 * 1, 171 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 89)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("jungleStuff", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 13, ' + (1 + 0.2 * Math.random()) +'));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(fect, 634, 69, 77, 69, -(1/2 * 77 * 1), -(1/2 * 69 * 1), 77 * 1, 69 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 90)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("saffronPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(jungho, 24, 425, 24, 23, -(1/2 * 24 * 1.6), -(1/2 * 23 * 1.6), 24 * 1.6, 23 * 1.6);
                XXX.restore();
            }
        }
        else if (buildToggle == 91)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 18)
                {
                    buildClase = 1;
                }
                else if ((buildClase < 1))
                {
                    buildClase = 18;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("murderedVardanians", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("murderedVardanians", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("murderedVardanians", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 92)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 15)
                {
                    buildClase = 1;
                }
                else if ((buildClase < 1))
                {
                    buildClase = 15;
                }
            }
            if (buildClase == 0)
            {
                buildClase = 1;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("blood", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("blood", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("blood", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 93)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("skeleton", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + '));');
                scenicList.push(new Scenery("skeleton", X, Y, buildRot, buildSize));
            }

            var islonDDDD = new Scenery("skeleton", X, Y, buildRot, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 94)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 11)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 11;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("bones", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize +', ' + buildClase +'));');
                scenicList.push(new Scenery("bones", X, Y, buildRot, buildSize, buildClase));
            }

            var islonDDDD = new Scenery("bones", X, Y, buildRot, buildSize, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 95)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("scuffleMarks", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize +'));');
                scenicList.push(new Scenery("scuffleMarks", X, Y, buildRot, buildSize));
            }

            var islonDDDD = new Scenery("scuffleMarks", X, Y, buildRot, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 96)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 87)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 87;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("westMueble", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("westMueble", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("westMueble", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 97)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 64)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 64;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("floorDeco", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("floorDeco", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("floorDeco", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 98)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 57)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 57;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("southMueble", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("southMueble", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("southMueble", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 99)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 8)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 8;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("nirwadenMueble", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("nirwadenMueble", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("nirwadenMueble", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 100)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 28)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 28;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("nirwadenGoods", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +'));');
                scenicList.push(new Scenery("nirwadenGoods", X, Y, buildRot, buildClase));
            }

            var islonDDDD = new Scenery("nirwadenGoods", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 101)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 28)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 28;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("vardanianSpike", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize + '));');
                scenicList.push(new Scenery("vardanianSpike", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("vardanianSpike", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 102)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("pikeWall", ' + X + ', ' + Y + ', ' + buildRot + ', true));');
                scenicList.push(new Scenery("pikeWall", X, Y, buildRot, true));
            }

            var islonDDDD = new Scenery("pikeWall", X, Y, buildRot, true);
            islonDDDD.operations();
        }
        else if (buildToggle == 103)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 14)
                {
                    buildClase = 1;
                }
                else if ((buildClase < 1))
                {
                    buildClase = 14;
                }
            }

            if (buildClase == 0)
            {
                buildClase = 1;
            }
            buildName = "cephrianBuilding" + buildClase;

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("cephrianBuilding' + buildClase + '", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + '));');
                scenicList.push(new Scenery(buildName, X, Y, buildRot, buildSize));
            }

            var islonDDDD = new Scenery(buildName, X, Y, buildRot, buildSize);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 104)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.88)
                {
                    alphon = true;
                }
                else if (alphon > 0.32)
                {
                    alphon = false;
                }
                else
                {
                    alphon = '"small"';
                }

                xKey = false;
                if (Math.random() > 0.5)
                {
                    console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Hyena", ' + alphon + ', "preBuilt"));');
                }
                else
                {
                    if (Math.random() >= 0.3)
                    {
                        console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Hyena", ' + alphon + ', "hungry"));');
                    }
                    else
                    {
                        console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Hyena", ' + alphon + ', "hangry"));');
                    }
                }

                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(salem, 655, 58, 113, 58, -1/2 * 113 * 1.6, -1/2 * 58 * 1.6, 113 * 1.6, 58 * 1.6);
                XXX.restore();
            }
        }
        else if (buildToggle == 105)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Giraffe", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(salem, 285, 543, 233, 114, -1/2 * 233 * 1.25, -1/2 * 114 * 1.25, 233 * 1.25, 114 * 1.25);
                XXX.restore();
            }
        }
        else if (buildToggle == 106)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.80)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Lion", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(jeru, 331, 63, 121, 53, -1/2 * 121 * 1.5, -1/2 * 53 * 1.5 + 10, 121 * 1.5, 53 * 1.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 107)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.70)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "WildDog", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(salem, 573, 382, 75, 38, -1/2 * 75 * 1.7, -1/2 * 38 * 1.7, 75 * 1.7, 38 * 1.7);
                XXX.restore();
            }
        }
        else if (buildToggle == 108)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.60)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Gazelle", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(jeru, 2370, 927, 147, 57, -1/2 * 147 * 1.5, -1/2 * 57 * 1.5, 147 * 1.5, 57 * 1.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 109)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.8)
                {
                    alphon = true;
                }
                else if (alphon > 0.3)
                {
                    alphon = false;
                }
                else
                {
                    alphon = '"baby"';
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Zarbu", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(polux, 597, 258, 195, 92, -1/2 * 195 * 1.2, -1/2 * 92 * 1.2, 195 * 1.2, 92 * 1.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 110)
        {
            if (xKey)
            {
                var alphon = Math.floor(Math.random() * 4);

                xKey = false;
                console.log('scenicList.push(new Scenery("killerTermiteMound", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', ' + alphon + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(jeru, 2546, 90, 178, 159, -(1/2 * 178 * 1.3), -(1/2 * 159 * 1.3), 178 * 1.3, 159 * 1.3);
                XXX.restore();
            }
        }
        else if (buildToggle == 111)
        {
            if (xKey)
            {
                var alphon = Math.floor(Math.random() * 4);

                xKey = false;
                console.log('scenicList.push(new Scenery("killerTermiteMound", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', ' + alphon + ', false));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(jeru, 2541, 406, 178, 159, -(1/2 * 178 * 1.3), -(1/2 * 159 * 1.3), 178 * 1.3, 159 * 1.3);
                XXX.restore();
            }
        }
        else if (buildToggle == 112)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("acaciaTree", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', ' + (0.7 + (Math.random() * 1.2)) +'));');
                worldItems.push([new Item("treeMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(jeru, 1157, 40, 337, 335, -(1/2 * 337 * 1.1), -(1/2 * 335 * 1.1), 337 * 1.1, 335 * 1.1);
                XXX.drawImage(jeru, 1131, 408, 364, 370, -(1/2 * 364 * 1.1) + 5, -(1/2 * 370 * 1.1), 364 * 1.1, 370 * 1.1);
                XXX.restore();
            }
        }
        else if (buildToggle == 113)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("zwaleimPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(cef, 258, 12, 53, 52, -(1/2 * 53 * 1.55), -(1/2 * 52 * 1.55), 53 * 1.55, 52 * 1.55);
                XXX.restore();
            }
        }
        else if (buildToggle == 114)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("glazaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(cef, 6, 22, 28, 30, -(1/2 * 28 * 2), -(1/2 * 30 * 2), 28 * 2, 30 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 115)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("nupalaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(cef, 144, 15, 44, 46, -(1/2 * 44 * 1.7), -(1/2 * 46 * 1.7), 44 * 1.7, 46 * 1.7);
                XXX.restore();
            }
        }
        else if (buildToggle == 116)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("tchaltaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(cef, 147, 52, 44, 46, -(1/2 * 44 * 2), -(1/2 * 46 * 2), 44 * 2, 46 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 117)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("tchafulaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(cef, 340, 4, 70, 56, -(1/2 * 70 * 1.7), -(1/2 * 56 * 1.7), 70 * 1.7, 56 * 1.7);
                XXX.restore();
            }
        }
        else if (buildToggle == 118)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.83)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Gnoll", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(gnoll, 567, 330, 136, 69, -1/2 * 136 * 1.3, -1/2 * 69 * 1.3, 136 * 1.3, 69 * 1.3);
                XXX.restore();
            }
        }
        else if (buildToggle == 119)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 9)
                {
                    buildClase = 1;
                }
                else if ((buildClase < 1))
                {
                    buildClase = 9;
                }
            }

            if (buildClase == 0)
            {
                buildClase = 1;
            }
            buildName = "thenganBuilding" + buildClase;

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("thenganBuilding' + buildClase + '", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + '));');
                scenicList.push(new Scenery(buildName, X, Y, buildRot, buildSize));
            }

            var islonDDDD = new Scenery(buildName, X, Y, buildRot, buildSize);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 120)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 9)
                {
                    buildClase = 1;
                }
                else if ((buildClase < 1))
                {
                    buildClase = 9;
                }
            }

            if (buildClase == 0)
            {
                buildClase = 1;
            }
            buildName = "freydicBuilding" + buildClase;

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("freydicBuilding' + buildClase + '", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + '));');
                scenicList.push(new Scenery(buildName, X, Y, buildRot, buildSize));
            }

            var islonDDDD = new Scenery(buildName, X, Y, buildRot, buildSize);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 121)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 8)
                {
                    buildClase = 1;
                }
                else if ((buildClase < 1))
                {
                    buildClase = 8;
                }
            }

            if (buildClase == 0)
            {
                buildClase = 1;
            }
            buildName = "nirwadenBuilding" + buildClase;

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("nirwadenBuilding' + buildClase + '", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + '));');
                scenicList.push(new Scenery(buildName, X, Y, buildRot, buildSize));
            }

            var islonDDDD = new Scenery(buildName, X, Y, buildRot, buildSize);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 122)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 46)
                {
                    buildClase = 1;
                }
                else if ((buildClase < 1))
                {
                    buildClase = 46;
                }
            }

            if (buildClase == 0)
            {
                buildClase = 1;
            }
            buildName = "vardanBuilding" + buildClase;

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("vardanBuilding' + buildClase + '", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + '));');
                scenicList.push(new Scenery(buildName, X, Y, buildRot, buildSize));
            }

            var islonDDDD = new Scenery(buildName, X, Y, buildRot, buildSize);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 123)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 2)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 2;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("vardanianFence", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + ', ' + buildClase +'));');
                scenicList.push(new Scenery("vardanianFence", X, Y, buildRot, buildSize, buildClase));
            }

            var islonDDDD = new Scenery("vardanianFence", X, Y, buildRot, buildSize, buildClase);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 124)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 1)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 1;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("bars", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + ', ' + buildClase +'));');
                scenicList.push(new Scenery("bars", X, Y, buildRot, buildSize, buildClase));
            }

            var islonDDDD = new Scenery("bars", X, Y, buildRot, buildSize, buildClase);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 125)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 4)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 4;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("door", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + ', [true, "password"]));');
                scenicList.push(new Scenery("door", X, Y, buildRot, buildClase, [true, "password"]));
            }

            var islonDDDD = new Scenery("door", X, Y, buildRot, buildClase, [true, "password"]);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 126)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 2)
                {
                    buildClase = -4;
                }
                else if ((buildClase < -4))
                {
                    buildClase = 2;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("crate", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + ', [' + buildSize + ']));');
                scenicList.push(new Scenery("crate", X, Y, buildRot, buildClase, [buildSize]));
            }

            var islonDDDD = new Scenery("crate", X, Y, buildRot, buildClase, [buildSize]);
            islonDDDD.operations();
        }
        else if (buildToggle == 127)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 5)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 5;
                }
            }

            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Write message below:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("sign", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + ', "' + buildPrompt +'"));');
                scenicList.push(new Scenery("sign", X, Y, buildRot, buildClase, buildPrompt));
            }

            var islonDDDD = new Scenery("sign", X, Y, buildRot, buildClase, buildPrompt);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 128)
        {
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildClase -= 5;
                }
                else
                {
                    buildClase -= 1;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildClase += 5;
                }
                else
                {
                    buildClase += 1;
                }
            }
            if (buildClase < 1)
            {
                buildClase = 1;
            }
            buildRot = Math.floor(buildRot);
            player.thirst = buildClase;

            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 5;
                }
                else
                {
                    buildRot -= 1;
                }
            }
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 5;
                }
                else
                {
                    buildRot += 1;
                }
            }
            buildRot = Math.floor(buildRot);
            player.hunger = buildRot;

            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("write item type:");
                buildPrompt2 = prompt("write faction:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("item", ' + X + ', ' + Y + ', 0, "' + buildPrompt2 + '", [ "' + buildPrompt + '", ' + buildClase + ', ' + buildRot + ']));');
                scenicList.push(new Scenery("item", X, Y, 0, buildPrompt2, [buildPrompt, buildClase, buildRot]));
            }

            var islonDDDD = new Scenery("item", X, Y, 0, buildPrompt2, [buildPrompt, buildClase, buildRot]);
            islonDDDD.operations();
        }
        else if (buildToggle == 129)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("bed", ' + X + ', ' + Y + ', ' + buildRot + ', false));');
                scenicList.push(new Scenery("bed", X, Y, buildRot, false));
            }

            var islonDDDD = new Scenery("bed", X, Y, buildRot, false);
            islonDDDD.operations();
        }
        else if (buildToggle == 130)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 6)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 6;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("fineBed", ' + X + ', ' + Y + ', ' + buildRot + ', false, ' + buildClase + '));');
                scenicList.push(new Scenery("fineBed", X, Y, buildRot, false, buildClase));
            }

            var islonDDDD = new Scenery("fineBed", X, Y, buildRot, false, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 131)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 8)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 8;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("vardanBed", ' + X + ', ' + Y + ', ' + buildRot + ', [false, ' + buildSize + '], ' + buildClase + '));');
                scenicList.push(new Scenery("vardanBed", X, Y, buildRot, [false, buildSize], buildClase));
            }

            var islonDDDD = new Scenery("vardanBed", X, Y, buildRot, [false, buildSize], buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 132)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 4)
                {
                    buildClase = 1;
                }
                else if ((buildClase < 1))
                {
                    buildClase = 4;
                }
            }
            if (buildClase < 1)
            {
                buildClase = 1;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("southBed", ' + X + ', ' + Y + ', ' + buildRot + ', false, ' + buildClase + '));');
                scenicList.push(new Scenery("southBed", X, Y, buildRot, false, buildClase));
            }

            var islonDDDD = new Scenery("southBed", X, Y, buildRot, false, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 133)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Angler", false, "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(pixi, 310, 834, 258, 153, -1/2 * 258 * 1.55, -1/2 * 153 * 1.55, 258 * 1.55, 153 * 1.55);
                XXX.restore();
            }
        }
        else if (buildToggle == 134)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("trubkaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(pixi, 712, 86, 74, 68, -(1/2 * 74 * 1.55), -(1/2 * 68 * 1.55), 74 * 1.55, 68 * 1.55);
                XXX.restore();
            }
        }
        else if (buildToggle == 135)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("eisyncrynePlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(mawt, 1645, 1029, 44, 40, -(1/2 * 44 * 1.4), -(1/2 * 40 * 1.4), 44 * 1.4, 40 * 1.4);
                XXX.restore();
            }
        }
        else if (buildToggle == 136)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("cauwPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(mawt, 1588, 977, 53, 49, -(1/2 * 53 * 1.3), -(1/2 * 49 * 1.3), 53 * 1.3, 49 * 1.3);
                XXX.restore();
            }
        }
        else if (buildToggle == 137)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("heskPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(ruin, 190, 63, 47, 55, -(1/2 * 47 * 1.45), -(1/2 * 55 * 1.45), 47 * 1.45, 55 * 1.45);
                XXX.restore();
            }
        }
        else if (buildToggle == 138)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("toadstoolPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(ruin, 196, 6, 86, 57, -(1/2 * 86 * 1.25), -(1/2 * 57 * 1.25), 86 * 1.25, 57 * 1.25);
                XXX.restore();
            }
        }
        else if (buildToggle == 139)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("thimblecapPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(negro, 32, 33, 83, 54, -(1/2 * 83 * 0.75), -(1/2 * 54 * 0.75), 83 * 0.75, 54 * 0.75);
                XXX.restore();
            }
        }
        else if (buildToggle == 140)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("roylaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(ruin, 22, 2, 48, 45, -(1/2 * 48 * 1.7), -(1/2 * 45 * 1.7), 48 * 1.7, 45 * 1.7);
                XXX.restore();
            }
        }
        else if (buildToggle == 141)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("vardanianMardylPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', '+ Math.floor(Math.random()*5) +'));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(mawt, 1183, 414, 100, 94, -(1/2 * 100 * 1), -(1/2 * 94 * 1), 100 * 1, 94 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 142)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("orgishMardylPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', '+ Math.floor(Math.random()*5) +'));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(mawt, 381, 20, 100, 94, -(1/2 * 100 * 1.1), -(1/2 * 94 * 1.1), 100 * 1.1, 94 * 1.1);
                XXX.restore();
            }
        }
        else if (buildToggle == 143)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("thadinePlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(milk, 186, 103, 79, 73, -(1/2 * 79), -(1/2 * 73), 79, 73);
                XXX.restore();
            }
        }
        else if (buildToggle == 144)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("danzigPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(gul, 869, 150, 50, 46, -(1/2 * 50 * 1.5), -(1/2 * 46 * 1.5), 50 * 1.5, 46 * 1.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 145)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("chyoulPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 857, 140, 25, 23, -(1/2 * 25 * 1.5), -(1/2 * 23 * 1.5), 25 * 1.5, 23 * 1.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 146)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("ameloyPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(milk, 283, 24, 33, 32, -(1/2 * 33), -(1/2 * 32), 33, 32);
                XXX.restore();
            }
        }
        else if (buildToggle == 147)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("laicaumPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(gul, 978, 54, 35, 33, -(1/2 * 35 * 2), -(1/2 * 33 * 2), 35 * 2, 33 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 148)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("thadinePlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', false));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(milk, 97, 104, 79, 73, -(1/2 * 79), -(1/2 * 73), 79, 73);
                XXX.restore();
            }
        }
        else if (buildToggle == 149)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("saugPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(tribe, 464, 6, 19, 17, -(1/2 * 19 * 3), -(1/2 * 17 * 3), 19 * 3, 17 * 3);
                XXX.restore();
            }
        }
        else if (buildToggle == 150)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("kozlyakPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(toad, 407, 577, 26, 27, -(1/2 * 26 * 3), -(1/2 * 27 * 3), 26 * 3, 27 * 3);
                XXX.restore();
            }
        }
        else if (buildToggle == 151)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("maleotPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(hydra, 667, 727, 62, 65, -(1/2 * 62), -(1/2 * 65), 62, 65);
                XXX.restore();
            }
        }
        else if (buildToggle == 152)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("gribnoyPlant", ' + X + ', ' + Y + ', ' + buildRot + ', true));');
                scenicList.push(new Scenery("gribnoyPlant", X, Y, buildRot, true));
            }

            var islonDDDD = new Scenery("gribnoyPlant", X, Y, buildRot, true);
            islonDDDD.operations();
        }
        else if (buildToggle == 153)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("poegroonPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(hydra, 541, 711, 76, 93, -(1/2 * 76), -(1/2 * 93), 76, 93);
                XXX.restore();
            }
        }
        else if (buildToggle == 154)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("iodPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(hydra, 396, 713, 62, 65, -(1/2 * 62), -(1/2 * 65), 62, 65);
                XXX.restore();
            }
        }
        else if (buildToggle == 155)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Motylekh", "baby", "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(moth, 782, 383, 116, 68, -1/2 * 116 * 1.2, -1/2 * 68 * 1.2, 116 * 1.2, 68 * 1.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 156)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Motylekh", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(moth, 39, 377, 189, 202, -1/2 * 189 * 1.2, -1/2 * 202 * 1.2, 189 * 1.2, 202 * 1.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 157)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "ShriekingBloodworm", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(blud, 199, 815, 175, 63, -1/2 * 175 * 1.3, -1/2 * 63 * 1.3, 175 * 1.3, 63 * 1.3);
                XXX.restore();
            }
        }
        else if (buildToggle == 158)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.7)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Pokinutyy", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(blud, 134, 145, 118, 106, -1/2 * 118 * 1, -1/2 * 106 * 1, 118 * 1, 106 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 159)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 6)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 6;
                }
            }

            if (buildClase == 0)
            {
                buildPrompt = "swampPlatform";
                buildPrompt2 = true;
            }
            else if (buildClase == 1)
            {
                buildPrompt = "swampWalk";
                buildPrompt2 = true;
            }
            else if (buildClase == 2)
            {
                buildPrompt = "swampWalkShort";
                buildPrompt2 = true;
            }
            else if (buildClase == 3)
            {
                buildPrompt = "swampBridge";
                buildPrompt2 = false;
            }
            else if (buildClase == 4)
            {
                buildPrompt = "swampStilt";
                buildPrompt2 = true;
            }
            else if (buildClase == 5)
            {
                buildPrompt = "swampBridge";
                buildPrompt2 = true;
            }
            else if (buildClase == 6)
            {
                buildPrompt = "swampWalkBridge";
                buildPrompt2 = true;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("'+ buildPrompt +'", ' + X + ', ' + Y + ', ' + buildRot + ', '+ buildPrompt2 +'));');
                scenicList.push(new Scenery(buildPrompt, X, Y, buildRot, buildPrompt2));
            }

            var islonDDDD = new Scenery(buildPrompt, X, Y, buildRot, buildPrompt2);
            islonDDDD.operations();
        }
        else if (buildToggle == 160)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 5)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 5;
                }
            }

            if (buildClase == 0)
            {
                buildPrompt = "vardanianWell";
                buildPrompt2 = true;
            }
            else if (buildClase == 1)
            {
                buildPrompt = "vardanianPyre";
                buildPrompt2 = true;
            }
            else if (buildClase == 2)
            {
                buildPrompt = "vardanianBasin";
                buildPrompt2 = true;
            }
            else if (buildClase == 3)
            {
                buildPrompt = "vardanianHearth";
                buildPrompt2 = '"lit"';
            }
            else if (buildClase == 4)
            {
                buildPrompt = "vardanianHearth";
                buildPrompt2 = false;
            }
            else if (buildClase == 5)
            {
                buildPrompt = "ashaiCampFire";
                buildPrompt2 = '"permaLit"';
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("'+ buildPrompt +'", ' + X + ', ' + Y + ', ' + buildRot + ', '+ buildPrompt2 +', '+ buildSize +'));');
                scenicList.push(new Scenery(buildPrompt, X, Y, buildRot, buildPrompt2, buildSize));
            }

            var islonDDDD = new Scenery(buildPrompt, X, Y, buildRot, buildPrompt2, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 161)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 4)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 4;
                }
            }

            if (buildClase == 0)
            {
                buildPrompt = "vardanianTent";
                buildPrompt2 = true;
            }
            else if (buildClase == 1)
            {
                buildPrompt = "nomadTent";
                buildPrompt2 = true;
            }
            else if (buildClase == 2)
            {
                buildPrompt = "tent";
                buildPrompt2 = true;
            }
            else if (buildClase == 3)
            {
                buildPrompt = "brokenTent";
                buildPrompt2 = 1;
            }
            else if (buildClase == 4)
            {
                buildPrompt = "brokenTent";
                buildPrompt2 = 2;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("'+ buildPrompt +'", ' + X + ', ' + Y + ', ' + buildRot + ', '+ buildPrompt2 +', ' + buildSize + '));');
                scenicList.push(new Scenery(buildPrompt, X, Y, buildRot, buildPrompt2, buildSize));
            }

            var islonDDDD = new Scenery(buildPrompt, X, Y, buildRot, buildPrompt2, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 162)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 7)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 7;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("mireIsla", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("mireIsla", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("mireIsla", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 163)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = '"massive"';
                }
                else if (alphon > 0.3)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Rat", '+ alphon +', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ruin, 343, 527, 233, 93, -1/2 * 233 * 0.25, -1/2 * 93 * 0.25, 233 * 0.25, 93 * 0.25);
                XXX.restore();
            }
        }
        else if (buildToggle == 164)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.95)
                {
                    alphon = '"massive"';
                }
                else if (alphon > 0.75)
                {
                    alphon = true;
                }
                else if (alphon > 0.5)
                {
                    alphon = '"baby"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Varmin", '+ alphon +', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ruin, 343, 527, 233, 93, -1/2 * 233 * 2, -1/2 * 93 * 2, 233 * 2, 93 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 165)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.625)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Fegil", '+ alphon +', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(jungho, 66, 975, 46, 23, -1/2 * 46 * 1.5, -1/2 * 23 * 1.5, 46 * 1.5, 23 * 1.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 166)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Lyagushka", '+ alphon +', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(cleen, 715, 184, 72, 76, -1/2 * 72 * 1.4, -1/2 * 76 * 1.4, 72 * 1.4, 76 * 1.4);
                XXX.restore();
            }
        }
        else if (buildToggle == 167)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("lyagushkaEggCluster", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', ' + Math.round(Math.random()) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(cleen, 439, 49, 36, 33, -(1 / 2 * 36 * 1), -(1 / 2 * 33 * 1), 36 * 1, 33 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 168)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("ostryyGrassPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + Math.min(1.4, Math.max(0.8, buildSize)) + '));');
                scenicList.push(new Scenery("ostryyGrassPlant", X, Y, buildRot, Math.min(1.4, Math.max(0.8, buildSize))));
            }

            var islonDDDD = new Scenery("ostryyGrassPlant", X, Y, buildRot, Math.min(1.4, Math.max(0.8, buildSize)));
            islonDDDD.operations();
        }
        else if (buildToggle == 169)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.76)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Mornid", '+ alphon +', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ribak, 5, 921, 150, 103, -1/2 * 150 * 1.2, -1/2 * 103 * 1.2, 150 * 1.2, 103 * 1.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 170)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.52)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "GreyHorse", '+ alphon +', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(bogg, 0, 971, 218, 64, -1/2 * 218 * 1.1, -1/2 * 64 * 1.1, 218 * 1.1, 64 * 1.1);
                XXX.restore();
            }
        }
        else if (buildToggle == 171)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("brainFlyHive", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                scenicList.push(new Scenery("brainFlyHive", X, Y, buildRot, true));
            }

            var islonDDDD = new Scenery("brainFlyHive", X, Y, buildRot, true);
            islonDDDD.operations();
        }
        else if (buildToggle == 172)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.8)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Cirmusid", '+ alphon +', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(nognog, 565, 93, 32, 24, -1/2 * 32 * 1, -1/2 * 24 * 1, 32 * 1, 24 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 173)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.9)
                {
                    alphon = true;
                }
                else if (alphon < 0.1)
                {
                    alphon = '"baby"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "SpittingMudFly", '+ alphon +', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(lodo, 211, 46, 18, 17, -1/2 * 18 * 2, -1/2 * 17 * 2, 18 * 2, 17 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 174)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.6)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "MudBeetle", '+ alphon +', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(norc, 584, 342, 61, 45, -1/2 * 61 * 1, -1/2 * 45 * 1, 61 * 1, 45 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 175)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.7)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "RaedBeetle", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(raed, 205, 2, 74, 66, -1/2 * 74 * 1, -1/2 * 66 * 1, 74 * 1, 66 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 176)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.85)
                {
                    alphon = true;
                }
                else if (alphon < 0.5)
                {
                    alphon = '"tiny"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Scorpion", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ion, 195, 383, 217, 120, -1/2 * 217 * 1, -1/2 * 120 * 1, 217 * 1, 120 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 177)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.9)
                {
                    alphon = true;
                }
                else if (alphon < 0.6)
                {
                    alphon = '"tiny"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "WhipScorpion", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ion, 1834, 14, 231, 336, -1/2 * 231 * 1, -1/2 * 336 * 1, 231 * 1, 336 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 178)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.8)
                {
                    alphon = true;
                }
                else if (alphon < 0.01)
                {
                    alphon = '"massive"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Barbol", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(scorp, 425, 579, 237, 129, -1/2 * 237 * 1, -1/2 * 129 * 1, 237 * 1, 129 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 179)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "DesertLizard", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(scorp, 687, 467, 69, 39, -1/2 * 69 * 1, -1/2 * 39 * 1, 69 * 1, 39 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 180)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.55)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Rattler", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(scorp, 818, 695, 58, 51, -1/2 * 58 * 1, -1/2 * 51 * 1, 58 * 1, 51 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 181)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("pashaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(ion, 1111, 376, 74, 50, -(1/2 * 74), -(1/2 * 50), 74, 50);
                XXX.restore();
            }
        }
        else if (buildToggle == 182)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("anjayPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(raed, 605, 460, 33, 33, -(1/2 * 33), -(1/2 * 33), 33, 33);
                XXX.restore();
            }
        }
        else if (buildToggle == 183)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("inumPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(ion, 1438, 707, 35, 38, -(1/2 * 35 * 1.2), -(1/2 * 38 * 1.2), 35 * 1.2, 38 * 1.2);
                XXX.restore();
            }
        }
        else if (buildToggle == 184)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("naibPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(ion, 1227, 682, 70, 68, -(1/2 * 70 * 1.4), -(1/2 * 68 * 1.4), 70 * 1.4, 68 * 1.4);
                XXX.restore();
            }
        }
        else if (buildToggle == 185)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("mawePlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(ion, 1134, 208, 33, 36, -(1/2 * 33 * 1.5), -(1/2 * 36 * 1.5), 33 * 1.5, 36 * 1.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 186)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.80)
                {
                    alphon = true;
                    buildClase = '"Voaii"';
                }
                else if (alphon > 0.60)
                {
                    alphon = false;
                    buildClase = '"Voaii"';
                }
                else if (alphon > 0.40)
                {
                    alphon = '"small"';
                    buildClase = '"Voaii"';
                }
                else if (alphon > 0.20)
                {
                    alphon = true;
                    buildClase = '"VoaiiYoung"';
                }
                else
                {
                    alphon = false;
                    buildClase = '"VoaiiYoung"';
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', ' + buildClase + ', ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(raed, 629, 268, 123, 147, -1/2 * 123 * 1, -1/2 * 147 * 1, 123 * 1, 147 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 187)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.56)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Xerocole", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(scorp, 376, 111, 121, 56, -1/2 * 121 * 1, -1/2 * 56 * 1, 121 * 1, 56 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 188)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("zetianWell", ' + X + ', ' + Y + ', ' + buildRot + ', true));');
                scenicList.push(new Scenery("zetianWell", X, Y, buildRot, true));
            }

            var islonDDDD = new Scenery("zetianWell", X, Y, buildRot, true);
            islonDDDD.operations();
        }
        else if (buildToggle == 189)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("zetianOven", ' + X + ', ' + Y + ', ' + buildRot + ', "flamed"));');
                scenicList.push(new Scenery("zetianOven", X, Y, buildRot, "flamed"));
            }

            var islonDDDD = new Scenery("zetianOven", X, Y, buildRot, "flamed");
            islonDDDD.operations();
        }
        else if (buildToggle == 190)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("chapulPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', 0));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(ion, 1639, 292, 38, 40, -(1/2 * 38 * 1.3), -(1/2 * 40 * 1.3), 38 * 1.3, 40 * 1.3);
                XXX.restore();
            }
        }
        else if (buildToggle == 191)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.78)
                {
                    alphon = true;
                }
                else if (alphon < 0.12)
                {
                    alphon = '"baby"';
                }
                else
                {
                    alphon = false;
                }

                var vrekPat0 = [X, Y];
                var vrekPat1 = [(X + spacer(600)), (Y + spacer(600))];
                var vrekPat2 = [(vrekPat1[0] + spacer(600)), (vrekPat1[1] + spacer(600))];
                var vrekPat3 = [(vrekPat2[0] + spacer(600)), (vrekPat2[1] + spacer(600))];
                var vrekPat4 = [(vrekPat3[0] + spacer(600)), (vrekPat3[1] + spacer(600))];

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Armadii", ' + alphon + ', "preBuilt", {merchandise: [], patrolStops: 5, patrolLoop: true, route:[' + vrekPat0, vrekPat1, vrekPat2, vrekPat3, vrekPat4 +']}));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(pill, 11, 581, 86, 117, -1/2 * 86, -1/2 * 117, 86, 117);
                XXX.restore();
            }
        }
        else if (buildToggle == 192)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 36)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 36;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("burntVardanianAssets", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("burntVardanianAssets", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("burntVardanianAssets", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 193)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 27)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 27;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("carts", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("carts", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("carts", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 194)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 8)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 8;
                }
            }

            if (buildClase == 0)
            {
                buildPrompt = "BarrelMimic";
                buildPrompt2 = "westMueble";
                buildSize = 26;
            }
            else if (buildClase == 1)
            {
                buildPrompt = "CrateMimic";
                buildPrompt2 = "crate";
                buildSize = 0;
            }
            else if (buildClase == 2)
            {
                buildPrompt = "TableMimic";
                buildPrompt2 = "westMueble";
                buildSize = 70;
            }
            else if (buildClase == 3)
            {
                buildPrompt = "CartMimic";
                buildPrompt2 = "carts";
                buildSize = 2;
            }
            else if (buildClase == 4)
            {
                buildPrompt = "TentMimic";
                buildPrompt2 = "vardanianTent";
            }
            else if (buildClase == 5)
            {
                buildPrompt = "HouseMimic";
                buildPrompt2 = "vardanBuilding31";
                buildSize = 1;
            }
            else if (buildClase == 6)
            {
                buildPrompt = "ChairMimic";
                buildPrompt2 = "westMueble";
                buildSize = 6;
            }
            else if (buildClase == 7)
            {
                buildPrompt = "HearthMimic";
                buildPrompt2 = "vardanianHearth";
                buildSize = 1.6;
            }
            else if (buildClase == 8)
            {
                buildPrompt = "RugMimic";
                buildPrompt2 = "floorDeco";
                buildSize = 1;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("mimicry", ' + X + ', ' + Y + ', ' + buildRot + ', "'+ buildPrompt + '"));');

                if (shiftKey)
                {
                    scenicList.push(new Scenery("mimicry", X, Y, buildRot, buildPrompt));
                    worldItems.push([new Item("plantMarker", X, Y), 1]);
                }
                else
                {
                    if (buildClase == 1)
                    {
                        scenicList.push(new Scenery(buildPrompt2, X, Y, buildRot, buildSize, [1]));
                    }
                    else if (buildClase == 7)
                    {
                        scenicList.push(new Scenery(buildPrompt2, X, Y, buildRot - 1/2 * Math.PI, buildSize, 1));
                    }
                    else if (buildClase == 8)
                    {
                        scenicList.push(new Scenery(buildPrompt2, X, Y, buildRot, buildSize, 1.5));
                    }
                    else
                    {
                        scenicList.push(new Scenery(buildPrompt2, X, Y, buildRot, buildSize, 1));
                    }
                }
            }

            if (buildClase == 1)
            {
                var islonDDDD = new Scenery(buildPrompt2, X, Y, buildRot, buildSize, [1]);
                islonDDDD.operations();
            }
            else if (buildClase == 7)
            {
                var islonDDDD = new Scenery(buildPrompt2, X, Y, buildRot - 1/2 * Math.PI, buildSize, 1);
                islonDDDD.operations();
            }
            else if (buildClase == 8)
            {
                var islonDDDD = new Scenery(buildPrompt2, X, Y, buildRot, buildSize, 1.5);
                islonDDDD.operations();
            }
            else
            {
                var islonDDDD = new Scenery(buildPrompt2, X, Y, buildRot, buildSize, 1);
                islonDDDD.operations();
            }
            barrierList = [];
        }
        else if (buildToggle == 195)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Mimic", true, "mim"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
                ArtificialIntelligenceAccess.push(new Unit(X, Y, "Mimic", true, "mim"));
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(mimi, 21, 4, 113, 92, -1/2 * 113 * 1, -1/2 * 92 * 1, 113 * 1, 92 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 196)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.55)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                var vrekPat0 = [X, Y];
                var vrekPat1 = [(X + spacer(140)), (Y + spacer(140))];
                var vrekPat2 = [(vrekPat1[0] + spacer(140)), (vrekPat1[1] + spacer(140))];
                var vrekPat3 = [(vrekPat2[0] + spacer(140)), (vrekPat2[1] + spacer(140))];
                var vrekPat4 = [(vrekPat3[0] + spacer(140)), (vrekPat3[1] + spacer(140))];
                var vrekPat5 = [(vrekPat4[0] + spacer(140)), (vrekPat4[1] + spacer(140))];
                var vrekPat6 = [(vrekPat5[0] + spacer(140)), (vrekPat5[1] + spacer(140))];

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Capul", ' + alphon + ', "preBuilt", {patrolStops: 7, patrolLoop: true, route:' + "[[" + vrekPat1.toString() + "], [" + vrekPat2.toString() + "], [" + vrekPat3.toString() + "], [" + vrekPat4.toString() + "], [" + vrekPat5.toString() + "], [" + vrekPat6.toString() + "], [" + vrekPat0.toString() + "]]}));");
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(pill, 654, 458, 66, 80, -1/2 * 66 * 0.65, -1/2 * 80 * 0.65, 66 * 0.65, 80 * 0.65);
                XXX.restore();
            }
        }
        else if (buildToggle == 197)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 1)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 1;
                }
            }

            if (xKey)
            {
                var rand = Math.floor(Math.random()*3);
                xKey = false;
                console.log('scenicList.push(new Scenery("nothBrush", ' + X + ', ' + Y + ', ' + buildRot + ', ' + rand + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("nothBrush", X, Y, buildRot, rand, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("nothBrush", X, Y, buildRot, 0, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 198)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (xKey)
            {
                var rand = Math.floor(Math.random()*3);
                var rando = Math.round(Math.random());
                xKey = false;
                console.log('scenicList.push(new Scenery("stepovTree", ' + X + ', ' + Y + ', ' + buildRot + ', ' + rand + ', ' + rando +', ' + buildSize +'));');
                scenicList.push(new Scenery("stepovTree", X, Y, buildRot, rand, rando, buildSize));
            }

            var islonDDDD = new Scenery("stepovTree", X, Y, buildRot, 0, 0, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 199)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("ronaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(sabez, 498, 858, 41, 42, -(1/2 * 41 * 1.3), -(1/2 * 42 * 1.3), 41 * 1.3, 42 * 1.3);
                XXX.restore();
            }
        }
        else if (buildToggle == 200)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("rulmaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(sabez, 503, 1129, 41, 42, -(1/2 * 41 * 0.9), -(1/2 * 42 * 0.9), 41 * 0.9, 42 * 0.9);
                XXX.restore();
            }
        }
        else if (buildToggle == 201)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("iloptheoraPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(bosh, 0, 232, 107, 97, -(1/2 * 107), -(1/2 * 97), 107, 97);
                XXX.restore();
            }
        }
        else if (buildToggle == 202)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("boskPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(bosh, 512, 26, 69, 66, -(1/2 * 69 * 0.65), -(1/2 * 66 * 0.65), 69 * 0.65, 66 * 0.65);
                XXX.restore();
            }
        }
        else if (buildToggle == 203)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("qiaoPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("qiaoPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("qiaoPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 204)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("acretiaPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(scrag, 82, 21, 80, 72, -(1/2 * 80 * 0.85), -(1/2 * 72 * 0.85), 80 * 0.85, 72 * 0.85);
                XXX.restore();
            }
        }
        else if (buildToggle == 205)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("krolocPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(scrag, 6, 94, 186, 174, -(1/2 * 186), -(1/2 * 174), 186, 174);
                XXX.restore();
            }
        }
        else if (buildToggle == 206)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("greyScretilPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(site, 461, 285, 129, 124, -(1/2 * 129 * 0.6), -(1/2 * 124 * 0.6), 129 * 0.6, 124 * 0.6);
                XXX.restore();
            }
        }
        else if (buildToggle == 207)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.76)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Udnal", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(nal, 665, -3, 304, 271, -1/2 * 304 * 1, -1/2 * 271 * 1, 304 * 1, 271 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 208)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.95)
                {
                    alphon = true;
                }
                else if (alphon > 0.3)
                {
                    alphon = '"small"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "MudTroll", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(mrol, -5, 66, 220, 151, -1/2 * 220 * 1, -1/2 * 151 * 1, 220 * 1, 151 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 209)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.67)
                {
                    alphon = true;
                }
                else if (alphon > 0.57)
                {
                    alphon = '"massive"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Nulga", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(nulg, 8, 73, 143, 63, -1/2 * 143 * 1, -1/2 * 63 * 1, 143 * 1, 63 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 210)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.72)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Vodmena", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(site, -29, 444, 300, 224, -1/2 * 300 * 1, -1/2 * 224 * 1, 300 * 1, 224 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 211)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.59)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "DaggerFish", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(nal, 616, 816, 233, 109, -1/2 * 233 * 1, -1/2 * 109 * 1, 233 * 1, 109 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 212)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.52)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Marnica", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(scrag, 1016, 243, 38, 30, -1/2 * 38 * 1, -1/2 * 30 * 1, 38 * 1, 30 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 213)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.52)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "BogWasp", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(mboo, 1162, 754, 128, 112, -1/2 * 128 * 1, -1/2 * 112 * 1, 128 * 1, 112 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 214)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Sagro", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(scrag, 642, 347, 213, 98, -1/2 * 213 * 1, -1/2 * 98 * 1, 213 * 1, 98 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 215)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "MudStrider", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(pill, 411, 705, 288, 204, -1/2 * 288 * 1, -1/2 * 204 * 1, 288 * 1, 204 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 216)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.6)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "CrilmBug", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(yil, 358, 15, 35, 33, -1/2 * 35 * 5, -1/2 * 33 * 5, 35 * 5, 33 * 5);
                XXX.restore();
            }
        }
        else if (buildToggle == 217)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 1)
            {
                buildClase = 1.4;
            }
            else if (zKey)
            {
                buildClase = 1;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("eemegMound", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + ', true));');
                scenicList.push(new Scenery("eemegMound", X, Y, buildRot, buildClase, true));
            }

            var islonDDDD = new Scenery("eemegMound", X, Y, buildRot, buildClase, true);
            islonDDDD.operations();
        }
        else if (buildToggle == 218)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.89)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Eemeg", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(carn, 150, 348, 195, 104, -1/2 * 195, -1/2 * 104, 195, 104);
                XXX.restore();
            }
        }
        else if (buildToggle == 219)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.91)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Mudman", ' + alphon + ', "sleeper"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(mudm, 506, 2328, 144, 99, -1/2 * 144, -1/2 * 99, 144, 99);
                XXX.restore();
            }
        }
        else if (buildToggle == 220)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.91)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Mudman", ' + alphon + ', "standard"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(mudm, 47, 805, 144, 99, -1/2 * 144, -1/2 * 99, 144, 99);
                XXX.restore();
            }
        }
        else if (buildToggle == 221)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.91)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Mudman", ' + alphon + ', "tweaker"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(mudm, 273, 2082, 144, 99, -1/2 * 144, -1/2 * 99, 144, 99);
                XXX.restore();
            }
        }
        else if (buildToggle == 222)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.82)
                {
                    alphon = '"massive"';
                }
                else if (alphon > 0.4)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "NothianSnapjaw", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(croco, 86, 53, 83, 39, -1/2 * 83 * 1, -1/2 * 39 * 1, 83 * 1, 39 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 223)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.82)
                {
                    alphon = '"massive"';
                }
                else if (alphon > 0.4)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Snapjaw", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(croc, 86, 53, 83, 39, -1/2 * 83 * 1, -1/2 * 39 * 1, 83 * 1, 39 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 224)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 8)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 8;
                }
            }

            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Write message below:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("grave", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildPrompt +'));');
                scenicList.push(new Scenery("grave", X, Y, buildRot, buildClase, buildPrompt));
                scenicList[scenicList.length - 1].runOneTime = false;
                scenicList[scenicList.length - 1].phase = 2;
            }

            var islonDDDD = new Scenery("grave", X, Y, buildRot, buildClase, buildPrompt);
            islonDDDD.runOneTime = false;
            islonDDDD.phase = 2;
            islonDDDD.operations();
        }
        else if (buildToggle == 225)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 10)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 10;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("tombstone", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("tombstone", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("tombstone", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 226)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 1;
                }
                else
                {
                    buildSize += 0.5;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 1;
                }
                else
                {
                    buildSize -= 0.5;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.5;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 2)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 2;
                }
            }

            if (typeof(buildPrompt2) != "number")
            {
                buildPrompt2 = 0;
            }

            if (lKey && shiftKey)
            {
                lKey = false;
                buildPrompt2 -= 1;
            }
            else if (lKey)
            {
                lKey = false;
                buildPrompt2 += 1;
            }

            if (buildPrompt2 < 0)
            {
                buildPrompt2 = 6;
            }
            else if (buildPrompt2 > 6)
            {
                buildPrompt2 = 0;
            }

            if (buildPrompt2 == 0)
            {
                buildPrompt = "stone";
            }
            else if (buildPrompt2 == 1)
            {
                buildPrompt = "darkStone";
            }
            else if (buildPrompt2 == 2)
            {
                buildPrompt = "ashStone";
            }
            else if (buildPrompt2 == 3)
            {
                buildPrompt = "alcaStone";
            }
            else if (buildPrompt2 == 4)
            {
                buildPrompt = "jvostran";
            }
            else if (buildPrompt2 == 5)
            {
                buildPrompt = "nechrovite";
            }
            else if (buildPrompt2 == 6)
            {
                buildPrompt = "brightStone";
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("' + buildPrompt + '", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize +', ' + buildClase +'));');
                scenicList.push(new Scenery(buildPrompt, X, Y, buildRot, buildSize, buildClase));
            }

            var islonDDDD = new Scenery(buildPrompt, X, Y, buildRot, buildSize, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 227)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.7)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Xormid", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(blac, 11, 58, 72, 43, -1/2 * 72 * 1, -1/2 * 43 * 1, 72 * 1, 43 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 228)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("tarsiPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(sheg, 260, 1186, 98, 92, -(1/2 * 98), -(1/2 * 92), 98, 92);
                XXX.restore();
            }
        }
        else if (buildToggle == 229)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.4)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Purpura", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(joso, 990, 1730, 94, 85, -1/2 * 94 * 0.5, -1/2 * 85 * 0.5, 94 * 0.5, 85 * 0.5);
                XXX.restore();
            }
        }
        else if (buildToggle == 230)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("hikariFungus", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("hikariFungus", X, Y, buildRot, buildClase));
            }

            var islonDDDD = new Scenery("hikariFungus", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 231)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("larykPlant", ' + X + ', ' + Y + ', ' + buildRot + ', true));');
                scenicList.push(new Scenery("larykPlant", X, Y, buildRot, true));
            }

            var islonDDDD = new Scenery("larykPlant", X, Y, buildRot, true);
            islonDDDD.operations();
        }
        else if (buildToggle == 232)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("bloodLilyPlant", ' + X + ', ' + Y + ', ' + (Math.random()*2*Math.PI) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(harv, 846, 223, 92, 93, -(1/2 * 92 * 1), -(1/2 * 93 * 1), 92 * 1, 93 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 233)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("nethPlant", ' + X + ', ' + Y + ', ' + buildRot + ', true));');
                scenicList.push(new Scenery("nethPlant", X, Y, buildRot, true));
            }

            var islonDDDD = new Scenery("nethPlant", X, Y, buildRot, true);
            islonDDDD.operations();
        }
        else if (buildToggle == 234)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.63)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Bahvseg", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(sheg, 918, 460, 172, 202, -1/2 * 172 * 1, -1/2 * 202 * 1, 172 * 1, 202 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 235)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                var vrekPat0 = [X, Y];
                var vrekPat1 = [(X + spacer(320)), (Y + spacer(320))];
                var vrekPat2 = [(vrekPat1[0] + spacer(230)), (vrekPat1[1] + spacer(230))];
                var vrekPat3 = [(vrekPat2[0] + spacer(230)), (vrekPat2[1] + spacer(230))];
                var vrekPat4 = [(vrekPat3[0] + spacer(230)), (vrekPat3[1] + spacer(230))];
                var vrekPat5 = [(vrekPat4[0] + spacer(230)), (vrekPat4[1] + spacer(230))];
                var vrekPat6 = [(vrekPat5[0] + spacer(230)), (vrekPat5[1] + spacer(230))];

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Khorkhoi", ' + alphon + ', "preBuilt", {patrolStops: 7, patrolLoop: true, route:' + "[[" + vrekPat1.toString() + "], [" + vrekPat2.toString() + "], [" + vrekPat3.toString() + "], [" + vrekPat4.toString() + "], [" + vrekPat5.toString() + "], [" + vrekPat6.toString() + "], [" + vrekPat0.toString() + "]]}));");
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(sheg, 1367, 812, 195, 159, -1/2 * 195 * 1, -1/2 * 159 * 1, 195 * 1, 159 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 236)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Libelula", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(julio, 5, 2777, 224, 237, -1/2 * 224 * 0.65, -1/2 * 237 * 0.65, 224 * 0.65, 237 * 0.65);
                XXX.restore();
            }
        }
        else if (buildToggle == 237)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Dragonfly", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(julio, 578, 812, 224, 237, -1/2 * 224 * 1, -1/2 * 237 * 1, 224 * 1, 237 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 238)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.62)
                {
                    alphon = true;
                }
                else if (alphon < 0.05)
                {
                    alphon = '"massive"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Harvestman", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(harv, 14, 805, 353, 365, -1/2 * 353 * 1, -1/2 * 365 * 1, 353 * 1, 365 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 239)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Gremlin", ' + false + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(grem, 215, 126, 71, 57, -1/2 * 71 * 1, -1/2 * 57 * 1, 71 * 1, 57 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 240)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Gremlin", ' + true + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(grem, 413, 293, 151, 69, -1/2 * 151 * 1, -1/2 * 69 * 1, 151 * 1, 69 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 241)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 48)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 48;
                }
            }

            if (buildClase == 0)
            {
                buildPrompt = "thenganHearth";
                buildPrompt2 = "lit";
                buildPrompt3 = '"lit"';
            }
            else if (buildClase == 1)
            {
                buildPrompt = "mediumTable";
                buildPrompt2 = 1;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 2)
            {
                buildPrompt = "thenganWell";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 3)
            {
                buildPrompt = "thenganTray";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 4)
            {
                buildPrompt = "smallTable";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 5)
            {
                buildPrompt = "stumpStool";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 6)
            {
                buildPrompt = "stumpStoolSml";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 7)
            {
                buildPrompt = "bed";
                buildPrompt2 = false;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 8)
            {
                buildPrompt = "bartop";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 9)
            {
                buildPrompt = "countertop";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 10)
            {
                buildPrompt = "feastingTable";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 11)
            {
                buildPrompt = "longTable";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 12)
            {
                buildPrompt = "woodenBench";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 13)
            {
                buildPrompt = "barrel";
                buildPrompt2 = 0;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 14)
            {
                buildPrompt = "barrel";
                buildPrompt2 = 1;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 15)
            {
                buildPrompt = "forge";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 16)
            {
                buildPrompt = "loom";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 17)
            {
                buildPrompt = "lab";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 18)
            {
                buildPrompt = "hearth";
                buildPrompt2 = "lit";
                buildPrompt3 = '"lit"';
            }
            else if (buildClase == 19)
            {
                buildPrompt = "campFire";
                buildPrompt2 = "permaLit";
                buildPrompt3 = '"permaLit"';
            }
            else if (buildClase == 20)
            {
                buildPrompt = "hayPile";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 21)
            {
                buildPrompt = "hayBale";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 22)
            {
                buildPrompt = "mediumTable";
                buildPrompt2 = 0;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 23)
            {
                buildPrompt = "furRug";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 24)
            {
                buildPrompt = "trainingDummy";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 25)
            {
                buildPrompt = "rangedTarget";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 26)
            {
                buildPrompt = "mediumTable";
                buildPrompt2 = 3;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 27)
            {
                buildPrompt = "anvil";
                buildPrompt2 = true;
                buildPrompt3 = buildPrompt2;
            }
            else if (buildClase == 28)
            {
                buildPrompt = "stove";
                buildPrompt2 = "lit";
                buildPrompt3 = '"lit"';
            }
            else if (buildClase == 29)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 87;
                buildPrompt3 = "87";
            }
            else if (buildClase == 30)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 30;
                buildPrompt3 = "30";
            }
            else if (buildClase == 31)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 31;
                buildPrompt3 = "31";
            }
            else if (buildClase == 32)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 32;
                buildPrompt3 = "32";
            }
            else if (buildClase == 33)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 33;
                buildPrompt3 = "33";
            }
            else if (buildClase == 34)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 34;
                buildPrompt3 = "34";
            }
            else if (buildClase == 35)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 35;
                buildPrompt3 = "35";
            }
            else if (buildClase == 36)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 36;
                buildPrompt3 = "36";
            }
            else if (buildClase == 37)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 37;
                buildPrompt3 = "37";
            }
            else if (buildClase == 38)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 38;
                buildPrompt3 = "38";
            }
            else if (buildClase == 39)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 39;
                buildPrompt3 = "39";
            }
            else if (buildClase == 40)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 40;
                buildPrompt3 = "40";
            }
            else if (buildClase == 41)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 41;
                buildPrompt3 = "41";
            }
            else if (buildClase == 42)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 42;
                buildPrompt3 = "42";
            }
            else if (buildClase == 43)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 43;
                buildPrompt3 = "43";
            }
            else if (buildClase == 44)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 44;
                buildPrompt3 = "44";
            }
            else if (buildClase == 45)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 45;
                buildPrompt3 = "45";
            }
            else if (buildClase == 46)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 46;
                buildPrompt3 = "46";
            }
            else if (buildClase == 47)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 47;
                buildPrompt3 = "47";
            }
            else if (buildClase == 48)
            {
                buildPrompt = "westMueble";
                buildPrompt2 = 48;
                buildPrompt3 = "48";
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("'+ buildPrompt +'", ' + X + ', ' + Y + ', ' + buildRot + ', '+ buildPrompt3 +', ' + buildSize + '));');
                scenicList.push(new Scenery(buildPrompt, X, Y, buildRot, buildPrompt2, buildSize));
            }

            var islonDDDD = new Scenery(buildPrompt, X, Y, buildRot, buildPrompt2, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 242)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 3)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 3;
                }
            }

            if (buildClase == 0)
            {
                buildPrompt = "candle";
                buildPrompt2 = 1000000000000000000;
            }
            else if (buildClase == 1)
            {
                buildPrompt = "oilLamp";
                buildPrompt2 = 1000000000000000000;
            }
            else if (buildClase == 2)
            {
                buildPrompt = "oilLantern";
                buildPrompt2 = 1000000000000000000;
            }
            else if (buildClase == 3)
            {
                buildPrompt = "vardanianLamp";
                buildPrompt2 = 1000000000000000000;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("'+ buildPrompt +'", ' + X + ', ' + Y + ', ' + buildRot + ', '+ true +', ' + buildPrompt2 + '));');
                scenicList.push(new Scenery(buildPrompt, X, Y, buildRot, true, buildPrompt2));
            }

            var islonDDDD = new Scenery(buildPrompt, X, Y, buildRot, true, buildPrompt2);
            islonDDDD.operations();
        }
        else if (buildToggle == 243)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 3)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 3;
                }
            }

            if (buildClase == 0)
            {
                buildPrompt = "stillFountain";
                buildPrompt2 = 0;
            }
            else if (buildClase == 1)
            {
                buildPrompt = "stillFountain";
                buildPrompt2 = 1;
            }
            else if (buildClase == 2)
            {
                buildPrompt = "stillFountain";
                buildPrompt2 = 2;
            }
            else if (buildClase == 3)
            {
                buildPrompt = "stillFountain";
                buildPrompt2 = 3;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("'+ buildPrompt +'", ' + X + ', ' + Y + ', ' + buildRot + ', '+ buildPrompt2 +', ' + buildSize + '));');
                scenicList.push(new Scenery(buildPrompt, X, Y, buildRot, buildPrompt2, buildSize));
            }

            var islonDDDD = new Scenery(buildPrompt, X, Y, buildRot, buildPrompt2, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 244)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 5)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 5;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("thenganBridges", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + ', ' + buildClase + '));');
                scenicList.push(new Scenery("thenganBridges", X, Y, buildRot, buildSize, buildClase));
            }

            var islonDDDD = new Scenery("thenganBridges", X, Y, buildRot, buildSize, buildClase);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 245)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 5)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 5;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("thenganorCastleParts", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + ', ' + buildClase + '));');
                scenicList.push(new Scenery("thenganorCastleParts", X, Y, buildRot, buildSize, buildClase));
            }

            var islonDDDD = new Scenery("thenganorCastleParts", X, Y, buildRot, buildSize, buildClase);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 246)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 5)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 5;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("thenganorCastlePartsHigh", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + ', ' + buildClase + '));');
                scenicList.push(new Scenery("thenganorCastlePartsHigh", X, Y, buildRot, buildSize, buildClase));
            }

            var islonDDDD = new Scenery("thenganorCastlePartsHigh", X, Y, buildRot, buildSize, buildClase);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 247)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 3)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 3;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("thenganorCastles", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + ', ' + buildClase + '));');
                scenicList.push(new Scenery("thenganorCastles", X, Y, buildRot, buildSize, buildClase));
            }

            var islonDDDD = new Scenery("thenganorCastles", X, Y, buildRot, buildSize, buildClase);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 248)
        {
            if (lKey && shiftKey)
            {
                lKey = false;
                buildPrompt2 = prompt("Write in faction:");
            }
            else if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Enter ID for the soldier:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Soldier", ' + false + ', "' + buildPrompt +'", {race: "' + buildPrompt2 + '", faction: "' + buildPrompt2 + '", con: ' + (4 + Math.round(Math.random() * 4)) + ', speed: ' + (1.2 + (Math.round(0.35 * Math.random() * 10) / 10)) + ', outfit: ["chainArmour", 7], weapon: ["longsword", [8, 7], 0, 16, 1.1], ranged: [false, "arrow", 7, 2000, 1, 6, 0, "none", 1.50], patrolStops: 1, patrolLoop: false, route:[[' + (X + Math.cos(player.rotation + 1/2 * Math.PI) * 5) + ', ' + (Y + Math.sin(player.rotation + 1/2 * Math.PI) * 5) + ']]}));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.beginPath();
                XXX.fillStyle = "pink";
                XXX.arc(0, 0, 10, 0, 2*Math.PI);
                XXX.fill();
                XXX.restore();
            }
        }
        else if (buildToggle == 249) //Personalities: violent, calculated, scared
        {
            if (lKey && shiftKey)
            {
                lKey = false;
                buildPrompt2 = prompt("Write in faction:");
            }
            else if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Enter ID for the person:");
            }

            if (xKey)
            {
                xKey = false;
                if (shiftKey)
                {
                    console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Person", ' + false + ', "' + buildPrompt +'", {race: "' + buildPrompt2 + '", faction: "' + buildPrompt2 + '", personality: "violent", outfit: ["none", 0], weapon: ["none", [0.05, 0.05], 0, 0, 1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 1, patrolLoop: false, route:[[' + (X + Math.cos(player.rotation + 1/2 * Math.PI) * 5) + ', ' + (Y + Math.sin(player.rotation + 1/2 * Math.PI) * 5) + ']], kid: true}));');
                }
                else
                {
                    console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Person", ' + false + ', "' + buildPrompt +'", {race: "' + buildPrompt2 + '", faction: "' + buildPrompt2 + '", personality: "violent", outfit: ["none", 0], weapon: ["none", [0.5, 0.5], 0, 0, 1], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 1, patrolLoop: false, route:[[' + (X + Math.cos(player.rotation + 1/2 * Math.PI) * 5) + ', ' + (Y + Math.sin(player.rotation + 1/2 * Math.PI) * 5) + ']]}));');
                }
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.beginPath();
                XXX.fillStyle = "magenta";
                XXX.arc(0, 0, 10, 0, 2*Math.PI);
                XXX.fill();
                XXX.restore();
            }
        }
        else if (buildToggle == 250)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Write in faction:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("appleTree", ' + X + ', ' + Y + ', ' + buildRot + ', "' + buildPrompt + '"));');
                scenicList.push(new Scenery("appleTree", X, Y, buildRot, true));
            }

            var islonDDDD = new Scenery("appleTree", X, Y, buildRot, true);
            islonDDDD.operations();
        }
        else if (buildToggle == 251)
        {
            if (lKey)
            {
                lKey = false;
                buildPrompt = prompt("Write in faction:");
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("hopsPlant", ' + X + ', ' + Y + ', ' + (2 * Math.PI * Math.random()) + ', "' + buildPrompt + '"));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.rotate(0);
                XXX.drawImage(freeverse, 290, 29, 33, 25, -(1/2 * 33 * 1.25), -(1/2 * 25 * 1.25), 33 * 1.25, 25 * 1.25);
                XXX.restore();
            }
        }
        else if (buildToggle == 252)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 7)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 7;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("cathedralStatues", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + ', ' + buildSize +'));');
                scenicList.push(new Scenery("cathedralStatues", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("cathedralStatues", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 253)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 9)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 9;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("huskAssets", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + ', ' + buildSize +'));');
                scenicList.push(new Scenery("huskAssets", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("huskAssets", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 254)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 2)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 2;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("huskWall", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + ', ' + buildSize + '));');
                scenicList.push(new Scenery("huskWall", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("huskWall", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 255)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 0.05 * Math.PI;
                }
                else
                {
                    buildRot += 0.01 * Math.PI;
                }

                if (buildRot > 1)
                {
                    buildRot = 1;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 0.05 * Math.PI;
                }
                else
                {
                    buildRot -= 0.01 * Math.PI;
                }

                if (buildRot < 0.01)
                {
                    buildRot = 0.01;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 5;
                }
                else
                {
                    buildSize += 1;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 5;
                }
                else
                {
                    buildSize -= 1;
                }
            }

            if (buildSize < 10)
            {
                buildSize = 10;
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 0.05;
                }
                else
                {
                    buildClase += 0.05;
                }

                if (buildClase > 1)
                {
                    buildClase = 1;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 0;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("light", ' + X + ', ' + Y + ', ' + 0 + ', ' + buildSize + ', ' + buildRot +', ' + buildClase + '));');
                scenicList.push(new Scenery("light", X, Y, 0, buildSize, buildRot, buildClase));
            }

            var islonDDDD = new Scenery("light", X, Y, 0, buildSize, buildRot, buildClase);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 256)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                xKey = false;
                if (shiftKey)
                {
                    console.log('scenicList.push(new Scenery("cephrianOven", ' + X + ', ' + Y + ', ' + buildRot + ', "flamed"));');
                }
                else
                {
                    console.log('scenicList.push(new Scenery("cephrianOven", ' + X + ', ' + Y + ', ' + buildRot + ', "lit"));');
                }
                scenicList.push(new Scenery("cephrianOven", X, Y, buildRot, "flamed"));
            }

            var islonDDDD = new Scenery("cephrianOven", X, Y, buildRot, "flamed");
            islonDDDD.operations();
        }
        else if (buildToggle == 257)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                xKey = false;
                if (shiftKey)
                {
                    console.log('scenicList.push(new Scenery("aldrekiiOven", ' + X + ', ' + Y + ', ' + buildRot + ', "flamed"));');
                }
                else
                {
                    console.log('scenicList.push(new Scenery("aldrekiiOven", ' + X + ', ' + Y + ', ' + buildRot + ', "lit"));');
                }
                scenicList.push(new Scenery("aldrekiiOven", X, Y, buildRot, "flamed"));
            }

            var islonDDDD = new Scenery("aldrekiiOven", X, Y, buildRot, "flamed");
            islonDDDD.operations();
        }
        else if (buildToggle == 258)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "ToadHusk", ' + Math.round(Math.random()) + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(hoad, -6, 328, 199, 139, -1/2 * 199, -1/2 * 139, 199, 139);
                XXX.restore();
            }
        }
        else if (buildToggle == 259)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "GhoulHusk", ' + Math.round(Math.random()) + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(gusk, 973, 12, 265, 187, -1/2 * 265, -1/2 * 187, 265, 187);
                XXX.restore();
            }
        }
        else if (buildToggle == 260)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Husk", ' + Math.round(Math.random()) + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(husk, 170, 335, 132, 122, -1/2 * 132, -1/2 * 122, 132, 122);
                XXX.restore();
            }
        }
        else if (buildToggle == 261)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "GhoulHuskling", ' + Math.round(Math.random()) + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(gusk, 973, 12, 265, 187, -1/2 * 265, -1/2 * 187, 265, 187);
                XXX.restore();
            }
        }
        else if (buildToggle == 262)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "ToadHuskling", ' + Math.round(Math.random()) + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(hoad, 12, 2343, 105, 64, -1/2 * 105, -1/2 * 64, 105, 64);
                XXX.restore();
            }
        }
        else if (buildToggle == 263)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Huskling", ' + Math.round(Math.random()) + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(husk, 145, 150, 137, 122, -1/2 * 137, -1/2 * 122, 137, 122);
                XXX.restore();
            }
        }
        else if (buildToggle == 264)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 81)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 81;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("nothDeco", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("nothDeco", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("nothDeco", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 265)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 3)
                {
                    buildClase = 1;
                }
                else if ((buildClase < 1))
                {
                    buildClase = 3;
                }
            }

            if (buildClase == 0)
            {
                buildClase = 1;
            }
            buildName = "nothBuilding" + buildClase;

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("nothBuilding' + buildClase + '", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize + '));');
                scenicList.push(new Scenery(buildName, X, Y, buildRot, buildSize));
            }

            var islonDDDD = new Scenery(buildName, X, Y, buildRot, buildSize);
            islonDDDD.operations();
            barrierList = [];
        }
        else if (buildToggle == 266)
        {
            if (fKey)
            {
                fKey = false;
                buildRot += 1/2 * Math.PI;
                if (buildRot > Math.PI)
                {
                    buildRot = -1/2 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                buildRot -= 1/2 * Math.PI;
                if (buildRot < (-1/2 *Math.PI))
                {
                    buildRot = Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                buildPrompt = true;
            }
            if (vKey)
            {
                vKey = false;
                buildPrompt = false;
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 6)
                {
                    buildClase = 6;
                }
                else if ((buildClase < 1))
                {
                    buildClase = 1;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("perchedMudman", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildPrompt + ', ' + buildClase + '));');
                scenicList.push(new Scenery("perchedMudman", X, Y, buildRot, buildPrompt, buildClase));
            }

            var islonDDDD = new Scenery("perchedMudman", X, Y, buildRot, buildPrompt, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 267)
        {
            if (gKey)
            {
                gKey = false;
                buildPrompt = true;
            }
            if (vKey)
            {
                vKey = false;
                buildPrompt = false;
            }

            if (xKey)
            {
                xKey = false;
                if (buildPrompt == true)
                {
                    console.log('scenicList.push(new Scenery("birchTree", ' + X + ', ' + Y + ', ' + 2*Math.PI*Math.random() + ', ' + (1 + (0.7 * Math.random())) + ', ' + 6 + '));');
                    scenicList.push(new Scenery("birchTree", X, Y, 2*Math.PI*Math.random(), 1 + (0.7 * Math.random()), 6));
                }
                else
                {
                    console.log('scenicList.push(new Scenery("birchTree", ' + X + ', ' + Y + ', ' + 2*Math.PI*Math.random() + ', ' + (1 + (0.7 * Math.random())) + ', ' + (Math.floor(Math.random() * 5) + 1) + '));');
                    scenicList.push(new Scenery("birchTree", X, Y, 2*Math.PI*Math.random(), 1 + (0.5 * Math.random()), (Math.floor(Math.random() * 5) + 1)));
                }
            }

            if (buildPrompt == true)
            {
                var islonDDDD = new Scenery("birchTree", X, Y, 0, 1.2, 6);
                islonDDDD.operations();
            }
            else
            {
                var islonDDDD = new Scenery("birchTree", X, Y, 0, 1.4, 4);
                islonDDDD.operations();
            }
        }
        else if (buildToggle == 268)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (gKey)
            {
                gKey = false;
                buildPrompt = true;
            }
            if (vKey)
            {
                vKey = false;
                buildPrompt = false;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("qiaoCampFire", ' + X + ', ' + Y + ', ' + buildRot + ', "lit"));');
                scenicList.push(new Scenery("qiaoCampFire", X, Y, buildRot, "lit"));
            }

            var islonDDDD = new Scenery("qiaoCampFire", X, Y, buildRot, "lit");
            islonDDDD.operations();
        }
        else if (buildToggle == 269)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 2)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 2;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("leikshorLilypads", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("leikshorLilypads", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("leikshorLilypads", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 270)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (xKey)
            {
                var ssszzx = 0.9 + 0.65 * Math.random();
                xKey = false;
                console.log('scenicList.push(new Scenery("spruceTree", ' + X + ', ' + Y + ', ' + buildRot + ', ' + ssszzx + '));');
                scenicList.push(new Scenery("spruceTree", X, Y, buildRot, ssszzx));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("spruceTree", X, Y, buildRot, 1.25);
            islonDDDD.operations();
        }
        else if (buildToggle == 271)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("andrezilPlant", ' + X + ', ' + Y + ', ' + (2 * Math.PI * Math.random()) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                var islonDDDD = new Scenery("andrezilPlant", X, Y, 0, true);
                islonDDDD.operations();
            }
        }
        else if (buildToggle == 272)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("reyasinthPlant", ' + X + ', ' + Y + ', ' + (2 * Math.PI * Math.random()) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                var islonDDDD = new Scenery("reyasinthPlant", X, Y, 0, true);
                islonDDDD.operations();
            }
        }
        else if (buildToggle == 273)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("muschaPlant", ' + X + ', ' + Y + ', ' + (2 * Math.PI * Math.random()) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                var islonDDDD = new Scenery("muschaPlant", X, Y, 0, true);
                islonDDDD.operations();
            }
        }
        else if (buildToggle == 274)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("laushtaaPlant", ' + X + ', ' + Y + ', ' + (2 * Math.PI * Math.random()) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                var islonDDDD = new Scenery("laushtaaPlant", X, Y, 0, true);
                islonDDDD.operations();
            }
        }
        else if (buildToggle == 275)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("nimhocPlant", ' + X + ', ' + Y + ', ' + (2 * Math.PI * Math.random()) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                var islonDDDD = new Scenery("nimhocPlant", X, Y, 0, true);
                islonDDDD.operations();
            }
        }
        else if (buildToggle == 276)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("toskPlant", ' + X + ', ' + Y + ', ' + (2 * Math.PI * Math.random()) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                var islonDDDD = new Scenery("toskPlant", X, Y, 0, true);
                islonDDDD.operations();
            }
        }
        else if (buildToggle == 277)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("nahalinePlant", ' + X + ', ' + Y + ', ' + (2 * Math.PI * Math.random()) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                var islonDDDD = new Scenery("nahalinePlant", X, Y, 0, true);
                islonDDDD.operations();
            }
        }
        else if (buildToggle == 278)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "BullFrog", ' + true + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(shor, 86, 21, 52, 46, -1/2 * 52 * 1, -1/2 * 46 * 1, 52 * 1, 46 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 279)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Shelisher", ' + true + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(slug, 412, 156, 139, 86, -1/2 * 139 * 1, -1/2 * 86 * 1, 139 * 1, 86 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 280)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Olmid", ' + false + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(slug, 227, 292, 77, 50, -1/2 * 77 * 1, -1/2 * 50 * 1, 77 * 1, 50 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 281)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "MobaWorm", ' + Math.round(Math.random()) + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(scorp, 28, 633, 49, 18, -1/2 * 49 * 2, -1/2 * 18 * 2, 49 * 2, 18 * 2);
                XXX.restore();
            }
        }
        else if (buildToggle == 282)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.45)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "BridgeTroll", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(leik, 674, 173, 186, 143, -1/2 * 186 * 1, -1/2 * 143 * 1, 186 * 1, 143 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 283)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.7)
                {
                    alphon = true;
                }
                else if (alphon > 0.5)
                {
                    alphon = false;
                }
                else if (alphon > 0.25)
                {
                    alphon = '"kid"';
                }
                else
                {
                    alphon = '"baby"';
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Moppot", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(slug, 24, 381, 106, 89, -1/2 * 106 * 1, -1/2 * 89 * 1, 106 * 1, 89 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 284)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.4)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Fae", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(shor, 339, 443, 133, 141, -1/2 * 133 * 1, -1/2 * 141 * 1, 133 * 1, 141 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 285)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Eglim", ' + false + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(orco, 533, 23, 74, 85, -1/2 * 74 * 1, -1/2 * 85 * 1, 74 * 1, 85 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 286)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Ibabi", ' + false + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(orco, 14, 180, 222, 99, -1/2 * 222 * 1, -1/2 * 99 * 1, 222 * 1, 99 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 287)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Saelcheag", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(slug, 165, 64, 134, 61, -1/2 * 134 * 1, -1/2 * 61 * 1, 134 * 1, 61 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 288)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.68)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Kthetrat", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(slug, -15, 501, 115, 76, -1/2 * 115 * 1, -1/2 * 76 * 1, 115 * 1, 76 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 289)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.6)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Laumei", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(orco, 68, 36, 88, 67, -1/2 * 88 * 1, -1/2 * 67 * 1, 88 * 1, 67 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 290)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("vuhuhnPlant", ' + X + ', ' + Y + ', ' + (2 * Math.PI * Math.random()) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                var islonDDDD = new Scenery("vuhuhnPlant", X, Y, 0, true);
                islonDDDD.operations();
            }
        }
        else if (buildToggle == 291)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("naumePlant", ' + X + ', ' + Y + ', ' + (2 * Math.PI * Math.random()) + ', true));');
                worldItems.push([new Item("plantMarker", X, Y), 1]);
            }

            if (rKey)
            {
                var islonDDDD = new Scenery("naumePlant", X, Y, 0, true);
                islonDDDD.operations();
            }
        }
        else if (buildToggle == 292)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.6)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                // xKey = false;
                // console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Laumei", ' + alphon + ', "preBuilt"));');
                // worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                // XXX.save();
                // XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                // XXX.drawImage(orco, 68, 36, 88, 67, -1/2 * 88 * 1, -1/2 * 67 * 1, 88 * 1, 67 * 1);
                // XXX.restore();
            }
        }
        else if (buildToggle == 293)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.7)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Sutetchi", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(olg, 39, 153, 70, 70, -1/2 * 70, -1/2 * 70, 70, 70);
                XXX.restore();
            }
        }
        else if (buildToggle == 294)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Omlai", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(mboo, 2270, 305, 98, 100, -1/2 * 98, -1/2 * 100, 98, 100);
                XXX.restore();
            }
        }
        else if (buildToggle == 295)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.55)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Seonjang", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(olg, 26, 346, 29, 29, -1/2 * 29, -1/2 * 29, 29, 29);
                XXX.restore();
            }
        }
        else if (buildToggle == 296)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.85)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Tiger", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ggell, 185, 56, 190, 77, -1/2 * 190, -1/2 * 77, 190, 77);
                XXX.restore();
            }
        }
        else if (buildToggle == 297)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.5)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Pig", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ggell, 1311, 409, 99, 90, -1/2 * 99, -1/2 * 90, 99, 90);
                XXX.restore();
            }
        }
        else if (buildToggle == 298)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.5)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "GladeWasp", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(moonberry, 1162, 754, 128, 112, -1/2 * 128, -1/2 * 112, 128, 112);
                XXX.restore();
            }
        }
        else if (buildToggle == 299)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.6)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Ha", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(olg, 37, 53, 24, 23, -1/2 * 24, -1/2 * 23, 24, 23);
                XXX.restore();
            }
        }
        else if (buildToggle == 300)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.8)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Panda", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(how, 684, 365, 123, 53, -1/2 * 123, -1/2 * 53, 123, 53);
                XXX.restore();
            }
        }
        else if (buildToggle == 301)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.85)
                {
                    alphon = true;
                    console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "RedKoiFish", ' + alphon + ', "preBuilt"));');
                }
                else if (alphon > 0.50)
                {
                    alphon = false;
                    console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "BlueKoiFish", ' + alphon + ', "preBuilt"));');
                }
                else if (alphon > 0.35)
                {
                    alphon = true;
                    console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "RedKoiFish", ' + alphon + ', "preBuilt"));');
                }
                else
                {
                    alphon = false;
                    console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "BlueKoiFish", ' + alphon + ', "preBuilt"));');
                }

                xKey = false;
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(how, 21, 338, 195, 81, -1/2 * 195, -1/2 * 81, 195, 81);
                XXX.restore();
            }
        }
        else if (buildToggle == 302)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Yong", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(gel, 62, 47, 259, 92, -1/2 * 259, -1/2 * 92, 259, 92);
                XXX.restore();
            }
        }
        else if (buildToggle == 303)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.82)
                {
                    alphon = '"massive"';
                }
                else if (alphon > 0.4)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Snapjaw", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(croc, 86, 53, 83, 39, -1/2 * 83 * 1, -1/2 * 39 * 1, 83 * 1, 39 * 1);
                XXX.restore();
            }
        }
        else if (buildToggle == 304)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Swan", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(gel, 714, 82, 114, 93, -1/2 * 114, -1/2 * 93, 114, 93);
                XXX.restore();
            }
        }
        else if (buildToggle == 305)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else if (alphon > 0.5)
                {
                    alphon = '"baby"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                if (Math.random() > 0.75)
                {
                    console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "ShenqianshouBeetle", ' + alphon + ', "marksman"));');
                }
                else
                {
                    console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "ShenqianshouBeetle", ' + alphon + ', "preBuilt"));');
                }
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(grem, 579, 282, 197, 102, -1/2 * 197, -1/2 * 102, 197, 102);
                XXX.restore();
            }
        }
        else if (buildToggle == 306)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.88)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Mulcreu", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(harv, 24, 364, 189, 190, -1/2 * 189, -1/2 * 190, 189, 190);
                XXX.restore();
            }
        }
        else if (buildToggle == 307) //surface growing xevolati
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Xevolati", true, "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(joso, 45, 1704, 167, 145, - 1/2 * 167, - 1/2 * 145, 167, 145);
                XXX.restore();
            }
        }
        else if (buildToggle == 308)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "LanternBug", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(luciernaga, 411, 258, 154, 86, -1/2 * 154, -1/2 * 86, 154, 86);
                XXX.restore();
            }
        }
        else if (buildToggle == 309)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Hummingbird", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(joso, 831, 1738, 108, 80, -1/2 * 108, -1/2 * 80, 108, 80);
                XXX.restore();
            }
        }
        else if (buildToggle == 310)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.9)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Iguana", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(olg, 161, 376, 59, 29, -1/2 * 59, -1/2 * 29, 59, 29);
                XXX.restore();
            }
        }
        else if (buildToggle == 311)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.9)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Giavev", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(vult, 28, 1484, 213, 198, -1/2 * 213, -1/2 * 198, 213, 198);
                XXX.restore();
            }
        }
        else if (buildToggle == 312)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.6)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Tya", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(roost, 415, 7, 81, 81, -1/2 * 81, -1/2 * 81, 81, 81);
                XXX.restore();
            }
        }
        else if (buildToggle == 313)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.77)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "RedJungleFowl", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(roost, 141, 186, 115, 59, -1/2 * 115, -1/2 * 59, 115, 59);
                XXX.restore();
            }
        }
        else if (buildToggle == 314)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.73)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "RedPanda", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(spid, 121, 77, 78, 29, -1/2 * 78, -1/2 * 29, 78, 29);
                XXX.restore();
            }
        }
        else if (buildToggle == 315)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.68)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Echidna", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(spid, 258, 3, 143, 56, -1/2 * 143, -1/2 * 56, 143, 56);
                XXX.restore();
            }
        }
        else if (buildToggle == 316)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.79)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Jackal", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(julio, 347, 329, 141, 68, -1/2 * 141, -1/2 * 68, 141, 68);
                XXX.restore();
            }
        }
        else if (buildToggle == 317)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Geomi", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ider, 456, 373, 165, 136, -1/2 * 165, -1/2 * 136, 165, 136);
                XXX.restore();
            }
        }
        else if (buildToggle == 318)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("geomiTurret", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("geomiTurret", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("geomiTurret", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 319)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Bushmaster", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(julio, 526, 525, 125, 49, -1/2 * 125, -1/2 * 49, 125, 49);
                XXX.restore();
            }
        }
        else if (buildToggle == 320)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.55)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Cobra", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(julio, 557, 77, 88, 43, -1/2 * 88, -1/2 * 43, 88, 43);
                XXX.restore();
            }
        }
        else if (buildToggle == 321)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.71)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Dragonfly", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(julio, 192, 1229, 224, 237, -1/2 * 224, -1/2 * 237, 224, 237);
                XXX.restore();
            }
        }
        else if (buildToggle == 322)
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Shoko", true, "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(julio, 420, 9, 41, 34, -1/2 * 41, -1/2 * 34, 41, 34);
                XXX.restore();
            }
        }
        else if (buildToggle == 323)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.76)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Needleworm", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(site, 920, 7, 106, 63, -1/2 * 106, -1/2 * 63, 106, 63);
                XXX.restore();
            }
        }
        else if (buildToggle == 324)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.88)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Erokira", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(rapt, 267, 89, 143, 66, -1/2 * 143, -1/2 * 66, 143, 66);
                XXX.restore();
            }
        }
        else if (buildToggle == 325)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.84)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Shishizhe", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(ider, 247, -1, 143, 109, -1/2 * 143, -1/2 * 109, 143, 109);
                XXX.restore();
            }
        }
        else if (buildToggle == 326)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.87)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Mehib", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(bant, 1529, 13, 267, 129, -1/2*267, -1/2*129, 267, 129);
                XXX.restore();
            }
        }
        else if (buildToggle == 327)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.69)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Ula", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(arpoo, 1142, 1099, 156, 64, -1/2 * 156, -1/2 * 64, 156, 64);
                XXX.restore();
            }
        }
        else if (buildToggle == 328)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.57)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Yeoumiza", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(arpoo, 1761, 1475, 109, 70, -1/2 * 109, -1/2 * 70, 109, 70);
                XXX.restore();
            }
        }
        else if (buildToggle == 329)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.92)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Poun", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(poon, 363, 856, 362, 299, -1/2 * 362, -1/2 * 299, 362, 299);
                XXX.restore();
            }
        }
        else if (buildToggle == 330)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.65)
                {
                    alphon = true;
                }
                else if (alphon > 0.6)
                {
                    alphon = '"massive"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Turatura", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(bootrex, 2130, 6, 360, 187, -1/2 * 360, -1/2 * 187, 360, 187);
                XXX.restore();
            }
        }
        else if (buildToggle == 331)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.8)
                {
                    alphon = true;
                }
                else if (alphon > 0.45)
                {
                    alphon = '"small"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Sasori", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(poon, 240, 21, 133, 100, -1/2 * 133, -1/2 * 100, 133, 100);
                XXX.restore();
            }
        }
        else if (buildToggle == 332)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.8)
                {
                    alphon = true;
                }
                else if (alphon > 0.75)
                {
                    alphon = '"massive"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Tao", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(sluth, 2057, -8, 434, 279, -1/2 * 434, -1/2 * 279, 434, 279);
                XXX.restore();
            }
        }
        else if (buildToggle == 333) //green slime
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.92)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Arantanid", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(arpoo, 1114, 895, 245, 136, -1/2 * 245, -1/2 * 136, 245, 136);
                XXX.restore();
            }
        }
        else if (buildToggle == 334)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.59)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Agaru", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(joso, 57, 465, 306, 204, -1/2 * 306, -1/2 * 204, 306, 204);
                XXX.restore();
            }
        }
        else if (buildToggle == 335)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.99)
                {
                    alphon = '"giant"';
                }
                else if (alphon > 0.75)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Kabuto", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(bootrex, 1910, 752, 307, 204, -1/2 * 307, -1/2 * 204, 307, 204);
                XXX.restore();
            }
        }
        else if (buildToggle == 336) //red cave xevolati
        {
            if (xKey)
            {
                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Xevolati", false, "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(joso, 52, 30, 167, 145, - 1/2 * 167, - 1/2 * 145, 167, 145);
                XXX.restore();
            }
        }
        else if (buildToggle == 337)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.9)
                {
                    alphon = true;
                }
                else if (alphon > 0.6)
                {
                    alphon = "medium";
                }
                else if (alphon > 0.4)
                {
                    alphon = "small";
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Carnid", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(carn, 199, 44, 145, 117, -1/2 * 145, -1/2 * 117, 145, 117);
                XXX.restore();
            }
        }
        else if (buildToggle == 338)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.81)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Reshid", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(olg, 572, 55, 65, 63, -1/2 * 65, -1/2 * 63, 65, 63);
                XXX.restore();
            }
        }
        else if (buildToggle == 339)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.81)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Purpura", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(joso, 990, 1730, 94, 85, -1/2 * 94, -1/2 * 85, 94, 85);
                XXX.restore();
            }
        }
        else if (buildToggle == 340)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.8)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "RedLanternBug", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(luciernaga, 2, 163, 154, 86, -1/2 * 154, -1/2 * 86, 154, 86);
                XXX.restore();
            }
        }
        else if (buildToggle == 341)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.86)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Nayu", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(joso, 1020, 1452, 123, 214, -1/2 * 123, -1/2 * 214, 123, 214);
                XXX.restore();
            }
        }
        else if (buildToggle == 342)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.91)
                {
                    alphon = "massive";
                }
                else if (alphon > 0.54)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Zhizhu", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(arpoo, 57, 1084, 141, 133, -1/2 * 141, -1/2 * 133, 141, 133);
                XXX.restore();
            }
        }
        else if (buildToggle == 343)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("tsutoriPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("tsutoriPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("tsutoriPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 344)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("ikastoPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("ikastoPlant", X, Y, buildRot, buildClase));
            }

            var islonDDDD = new Scenery("ikastoPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 345)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("yunaPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("yunaPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("yunaPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 346)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("nasobaPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("nasobaPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("nasobaPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 347)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("hikariFungus", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("hikariFungus", X, Y, buildRot, buildClase));
            }

            var islonDDDD = new Scenery("hikariFungus", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 348)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("culumiPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("culumiPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("culumiPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 349)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            var islonDDDD = new Scenery("syanjPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("syanjPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("syanjPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }
        }
        else if (buildToggle == 350)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.8)
                {
                    alphon = true;
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Kuzan", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(how, 212, 38, 162, 91, -1/2 * 162, -1/2 * 91, 162, 91);
                XXX.restore();
            }
        }
        else if (buildToggle == 351)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("zhongyePlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("zhongyePlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("zhongyePlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 352)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("orgishGiantLilyPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("orgishGiantLilyPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("orgishGiantLilyPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 353)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 3)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 3;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("gladeLilypads", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("gladeLilypads", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("gladeLilypads", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 354)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("gladeLilyPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("gladeLilyPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("gladeLilyPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 355)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("fezaPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("fezaPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("fezaPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 356)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("mikadzukiPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("mikadzukiPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("mikadzukiPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 357)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("ashigaPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("ashigaPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("ashigaPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 358)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("laguPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("laguPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("laguPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 359)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("gladeGrassPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("gladeGrassPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("gladeGrassPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 360)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("ologaiPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("ologaiPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("ologaiPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 361)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("junPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("junPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("junPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 362)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("mememPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("mememPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("mememPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 363)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("masmaoPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("masmaoPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("masmaoPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 364)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("banticulPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("banticulPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("banticulPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 365)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("spaliPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("spaliPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("spaliPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 366)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("milsanPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("milsanPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("milsanPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 367)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("eneojiPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("eneojiPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("eneojiPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 368)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("ketsuekiPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("ketsuekiPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("ketsuekiPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 369)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("unlinPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("unlinPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("unlinPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 370)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("olmhakaPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("olmhakaPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("olmhakaPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 371)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("scretilPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("scretilPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("scretilPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 372)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey && buildClase == 0)
            {
                buildClase = 1;
            }
            else if (zKey)
            {
                buildClase = 0;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("pinkScretilPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("pinkScretilPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("pinkScretilPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 373)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 2)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 2;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("atsuiBambooPlant", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase + '));');
                scenicList.push(new Scenery("atsuiBambooPlant", X, Y, buildRot, buildClase));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("atsuiBambooPlant", X, Y, buildRot, buildClase);
            islonDDDD.operations();
        }
        else if (buildToggle == 374)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 3)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 3;
                }
            }

            if (buildClase == 0)
            {
                buildPrompt = 0;
                buildPrompt2 = 0;
            }
            else if (buildClase == 1)
            {
                buildPrompt = 1;
                buildPrompt2 = 0;
            }
            else if (buildClase == 2)
            {
                buildPrompt = 0;
                buildPrompt2 = 1;
            }
            else
            {
                buildPrompt = 1;
                buildPrompt2 = 1;
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("bamboo", ' + X + ', ' + Y + ', ' + buildRot + ', 0, ' + buildPrompt + ', ' + buildPrompt2 + '));');
                scenicList.push(new Scenery("bamboo", X, Y, buildRot, 0, buildPrompt, buildPrompt2));
                buildRot = 2*Math.PI*Math.random();
            }

            var islonDDDD = new Scenery("bamboo", X, Y, buildRot, 0, buildPrompt, buildPrompt2);
            islonDDDD.operations();
        }
        else if (buildToggle == 375)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (zKey)
            {
                zKey = false;
                if (shiftKey)
                {
                    buildClase -= 1;
                }
                else
                {
                    buildClase += 1;
                }

                if (buildClase > 7)
                {
                    buildClase = 0;
                }
                else if ((buildClase < 0))
                {
                    buildClase = 7;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("gladeIsla", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildClase +', ' + buildSize +'));');
                scenicList.push(new Scenery("gladeIsla", X, Y, buildRot, buildClase, buildSize));
            }

            var islonDDDD = new Scenery("gladeIsla", X, Y, buildRot, buildClase, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 376)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("vardanianRoad", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize +'));');
                scenicList.push(new Scenery("vardanianRoad", X, Y, buildRot, buildSize));
            }

            var islonDDDD = new Scenery("vardanianRoad", X, Y, buildRot, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 377)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("crate", ' + X + ', ' + Y + ', ' + buildRot + ', -5, [' + buildSize +']));');
                scenicList.push(new Scenery("crate", X, Y, buildRot, -5, [buildSize]));
            }

            var islonDDDD = new Scenery("crate", X, Y, buildRot, -5, [buildSize]);
            islonDDDD.operations();
        }
        else if (buildToggle == 378)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("naapridSleepingMat", ' + X + ', ' + Y + ', ' + buildRot + ', false, ' + buildSize +'));');
                scenicList.push(new Scenery("naapridSleepingMat", X, Y, buildRot, false, buildSize));
            }

            var islonDDDD = new Scenery("naapridSleepingMat", X, Y, buildRot, false, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 379)
        {
            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("tunnelWeb", ' + X + ', ' + Y + ', ' + buildRot + ', 1));');
                scenicList.push(new Scenery("tunnelWeb", X, Y, buildRot, 1));
            }

            var islonDDDD = new Scenery("tunnelWeb", X, Y, buildRot, 1);
            islonDDDD.operations();
        }
        else if (buildToggle == 380)
        {
            if (fKey)
            {
                fKey = false;
                if (shiftKey)
                {
                    buildRot += 1/16 * Math.PI;
                }
                else
                {
                    buildRot += 1/32 * Math.PI;
                }
            }
            if (cKey)
            {
                cKey = false;
                if (shiftKey)
                {
                    buildRot -= 1/16 * Math.PI;
                }
                else
                {
                    buildRot -= 1/32 * Math.PI;
                }
            }
            if (gKey)
            {
                gKey = false;
                if (shiftKey)
                {
                    buildSize += 0.1;
                }
                else
                {
                    buildSize += 0.02;
                }
            }
            if (vKey)
            {
                vKey = false;
                if (shiftKey)
                {
                    buildSize -= 0.1;
                }
                else
                {
                    buildSize -= 0.02;
                }
                if (buildSize <= 0)
                {
                    buildSize = 0.1;
                }
            }

            if (xKey)
            {
                xKey = false;
                console.log('scenicList.push(new Scenery("caveWeb", ' + X + ', ' + Y + ', ' + buildRot + ', ' + buildSize +'));');
                scenicList.push(new Scenery("caveWeb", X, Y, buildRot, buildSize));
            }

            var islonDDDD = new Scenery("caveWeb", X, Y, buildRot, buildSize);
            islonDDDD.operations();
        }
        else if (buildToggle == 381)
        {
            if (xKey)
            {
                xKey = false;
                console.log('Purpura Spawn Test');
                ArtificialIntelligenceAccess.push(new Unit(X, Y, "Purpura", Math.round(Math.random()), "spawnbug"));
            }

            XXX.save();
            XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
            XXX.drawImage(joso, 990, 1730, 94, 85, -1/2 * 94 * 0.5, -1/2 * 85 * 0.5, 94 * 0.5, 85 * 0.5);
            XXX.restore();
        }
        else if (buildToggle == 382)
        {
            var alphon = Math.random();
            if (alphon > 0.61)
            {
                alphon = true;
            }
            if (alphon > 0.51)
            {
                alphon = '"massive"';
            }
            else
            {
                alphon = false;
            }

            if (xKey)
            {
                xKey = false;
                console.log('Hawk Spawn Test');
                ArtificialIntelligenceAccess.push(new Unit(X, Y, "Hawk", alphon, "spawnbird"));
            }

            XXX.save();
            XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
            XXX.drawImage(sprea, 353, 64, 101, 116, -1/2 * 101 * 0.7, -1/2 * 116 * 0.7, 101 * 0.7, 116 * 0.7);
            XXX.restore();
        }
        else if (buildToggle == 383)
        {
            if (xKey)
            {
                var alphon = Math.random();
                if (alphon > 0.61)
                {
                    alphon = true;
                }
                if (alphon > 0.51)
                {
                    alphon = '"massive"';
                }
                else
                {
                    alphon = false;
                }

                xKey = false;
                console.log('ArtificialIntelligenceAccess.push(new Unit(' + X +', ' + Y + ', "Hawk", ' + alphon + ', "preBuilt"));');
                worldItems.push([new Item("unitMarker", X, Y), 1]);
            }

            if (rKey)
            {
                XXX.save();
                XXX.translate(1/2 * CCC.width, 1/2 * CCC.height);
                XXX.drawImage(sprea, 353, 64, 101, 116, -1/2 * 101 * 1, -1/2 * 116 * 1, 101 * 1, 116 * 1);
                XXX.restore();
            }
        }
    }


    //kids mode silliness
    if (player.gamemode == "protagonist")
    {
        for (var iiii = scenicList.length - 1; iiii >= 0; iiii--)
        {
            if (scenicList[iiii].type == "blood" || scenicList[iiii].type == "deadBody" || scenicList[iiii].type == "skeleton" || scenicList[iiii].type == "hyelingSkeleton" || scenicList[iiii].type == "deadNaaprid" || scenicList[iiii].type == "deadHorse")
            {
                scenicList.splice(iiii, 1);
            }
        }
    }

    if (player.raceName == "Goop" && player.name == "Gooplur")
    {
        player.recoveryTime = 10;
        player.recoverV = true;
        player.will += 0.02;
    }

    if (constantEXP == true)
    {
        player.experience += 1;
    }

    if (constantMagic == true)
    {
        player.will += 0.2;
    }

    //Official Cheats
    if (key0)
    {
        key0 = false;
        var cheatcode = prompt("Enter game code:");
        if (cheatcode == null)
        {

        }
        else if (cheatcode == "peterization")
        {
            player.name = "Peter";
            player.race = "#fc9462";
            alert("You are become Peter. You can now use the 'HACK' command in the console menu.")
        }
        else if (cheatcode == "monsterMaker")
        {
            var creature = prompt("Pick creature type...");
            var alpha = prompt("Pick creature's alpha...");
            if (alpha == "true")
            {
                alpha = true;
            }
            else if (alpha == false)
            {
                alpha = false;
            }
            var equis = Number(prompt("Set X value..."));
            var yGriega = Number(prompt("Set Y value..."));
            var alliegenced = confirm("Click cancle and it will try to cancle you, clikc ok and it will be ok with you.");
            magicList.push(new Magic({ID: "adminSummon", CNX: 100}, true, [equis, yGriega, creature, alpha, alliegenced], false));
        }
        else if (cheatcode == "unitListChecker")
        {
            console.log(ArtificialIntelligenceAccess);
        }
        else if (cheatcode == "1390")
        {
            player.concentration = Math.round(player.concentration / 2);
            player.eminence = Math.round(player.eminence / 2);
        }
        else if (cheatcode == "deleteGhouls")
        {
            for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--)
            {
                if (ArtificialIntelligenceAccess[i].type == "Ghoul")
                {
                    ArtificialIntelligenceAccess.splice(i, 1);
                }
            }
            for (var i = scenicList.length - 1; i >= 0; i--)
            {
                if (scenicList[i].type == "ghoulDen")
                {
                    scenicList.splice(i, 1);
                }
            }
            for (var i = scenicList.length - 1; i >= 0; i--)
            {
                if (scenicList[i].type == "ghoulEggs")
                {
                    scenicList.splice(i, 1);
                }
            }
        }
        else if (cheatcode == "deleteRibbacks")
        {
            for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--)
            {
                if (ArtificialIntelligenceAccess[i].type == "Ribback")
                {
                    ArtificialIntelligenceAccess.splice(i, 1);
                }
            }
            for (var i = scenicList.length - 1; i >= 0; i--)
            {
                if (scenicList[i].type == "ribbackNest")
                {
                    scenicList.splice(i, 1);
                }
            }
            for (var i = scenicList.length - 1; i >= 0; i--)
            {
                if (scenicList[i].type == "ribbackWeb")
                {
                    scenicList.splice(i, 1);
                }
            }
        }
        else if (cheatcode == "deleteViudas")
        {
            for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--)
            {
                if (ArtificialIntelligenceAccess[i].type == "Viuda")
                {
                    ArtificialIntelligenceAccess.splice(i, 1);
                }
            }
            for (var i = scenicList.length - 1; i >= 0; i--)
            {
                if (scenicList[i].type == "viudaTunnel")
                {
                    scenicList.splice(i, 1);
                }
            }
        }
        else if (cheatcode == "deleteVrecks")
        {
            for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--)
            {
                if (ArtificialIntelligenceAccess[i].type == "Vreck")
                {
                    ArtificialIntelligenceAccess.splice(i, 1);
                }
            }
        }
        else if (cheatcode == "deleteElk")
        {
            for (var i = ArtificialIntelligenceAccess.length - 1; i >= 0; i--)
            {
                if (ArtificialIntelligenceAccess[i].type == "Elk")
                {
                    ArtificialIntelligenceAccess.splice(i, 1);
                }
            }
        }
        else if (cheatcode == "duendeéstanlosduendes" || cheatcode == "duendeestanlosduendes")
        {
            duendeSwarm = true;
        }
        else if (cheatcode == "licántropo" || cheatcode == "lobizón" || cheatcode == "licantropo" || cheatcode == "lobizon")
        {
            player.lycanthropy = true;
        }
        else if (cheatcode == "201E89THAVE")
        {
            player.skillPoints += 10;
            player.gender = "!*&#$^*CHEATER!#(&*#(&(";
            player.name = "***!!NOOB-SUCKER198!!***";
            player.title = "&*%^&$%^$^%**$";
            player.race = "&&&$0Wh4T&&&!^!!";
            player.raceName = "&&&$0Wh4T&&&!^!!";

        }
        else if (cheatcode == "2863980297")
        {
            player.concentration = JSON.parse(prompt("How much concentration would you like?"));
            player.eminence = JSON.parse(prompt("How much eminence would you like?"));
        }
        else if (cheatcode == "MedliaKit")
        {
            uniqueChars.medliaLDS = true;
        }
        else if (cheatcode == "radical")
        {
            player.radiation += 90;
        }
        else if (cheatcode == "radiantRebirth")
        {
            uniqueChars.dimitryLDS = true;
        }
        else if (cheatcode == "jellz")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 400, Y, "Holn", false, "Zapper"));
        }
        else if (cheatcode == "jellzer")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 500, Y, "Holn", true, "Shocker"));
        }
        else if (cheatcode == "sharky")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 500, Y, "Taebjuur", true, "Saltfin"));
        }
        else if (cheatcode == "sharkypoo")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 400, Y, "Taebjuur", false, "Seafin"));
        }
        else if (cheatcode == "jaws")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 700, Y, "Taebjuur", "massive", "Seafin"));
        }
        else if (cheatcode == "oozling")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 600, Y, "Xormid", true, "Sluba"));
        }
        else if (cheatcode == "curseTrap")
        {
            scenicList.push(new Scenery("wendigoCircle", X, Y, 2*Math.PI*Math.random(), true));
        }
        else if (cheatcode == "forget")
        {
            if (player.getKnowledge() >= 1)
            {
                var chekerPromt = confirm("Are you sure you want to forget all of the spells you have learned?");
                if (chekerPromt)
                {
                    primarySpells = [];
                    secondarySpells = [];
                    tertiarySpells = [];
                }
            }
        }
        else if (cheatcode == "MedliaKit")
        {
            uniqueChars.medliaLDS = true;
        }
        else if (cheatcode == "fixOrgell")
        {
            if (player.raceName == "Orgell")
            {
                player.baseThirst = 25;
                player.baseHunger = 55;
            }
        }
        else if (cheatcode == "rename")
        {
            if (player.name != "Peter" || player.race != "#fc9462")
            {
                if (player.name != "Gooplur" && player.name != "Qualdo")
                {
                    player.name = prompt("You are apparently a total idiot who can not stick to their decisions: Please be my guest and pick a new name for your character, you'll be back again soon I'm sure.", "XXXbu113t5uckin6N00BXXX")
                }
            }
            else
            {
                alert("WARNING: Peter is a perfect name; you do not have the required permissions to change it.");
            }
        }
        else if (cheatcode == "pointMeInTheRightDirection")
        {
            player.skillPoints += 1;
        }
        else if (cheatcode == "suberbian")
        {
            player.survivalism = 0;
        }
        else if (cheatcode == "army")
        {
            player.companionLimit = 16;
        }
        else if (cheatcode == "showsize")
        {
            testingUnitSizes = true;
        }
        else if (cheatcode == "seeSight" || cheatcode == "seesight" || cheatcode == "showSight" || cheatcode == "showsight")
        {
            if (showSightCheat == false)
            {
                showSightCheat = true;
            }
            else
            {
                showSightCheat = false;
            }
        }
        else if (cheatcode == "showcenter")
        {
            testingUnitCenters = true;
        }
        else if (cheatcode == "earnings")
        {
            console.log(player.earnings);
        }
        else if (cheatcode == "corriente")
        {
            for (var ii = 0; ii < bankAccount.length; ii++)
            {
                console.log(bankAccount[ii]);
            }
        }
        else if (cheatcode == "glassThePlanet" || cheatcode == "glasstheplanet")
        {
            for (var ii = 0; ii < ArtificialIntelligenceAccess.length; ii++)
            {
                ArtificialIntelligenceAccess[ii].glassed = true;
                ArtificialIntelligenceAccess[ii].petrified = true;
            }
        }
        else if (cheatcode == "00567817")
        {
            player.concentration = 0;
            player.eminence = 0;
            if (player.willpower == 1)
            {
                player.willpower = 0;
            }
            else
            {
                player.willpower = 1;
            }
        }
        else if (cheatcode == "wobéame" || cheatcode == "wobeame")
        {
            scenicList.push(new Scenery("wobeaPlant", X + 200, Y, Math.random() * 2 * Math.PI, true));
        }
        else if (cheatcode == "8675309")
        {
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
            magicList.push(new Magic({ID: "chasingLights", CNX: 50}, true, [true]));
        }
        else if (cheatcode == "111248392741664s")
        {
            if (player.eminence == 50)
            {
                player.eminence = 1000;
            }
        }
        else if (cheatcode == "SerJackOfLantern")
        {
            player.timeSinceLightSourceFuelUsed = new Date().getTime();
            player.lightSourceDuration = 540;
            player.lightSource = "jackOLantern";
        }
        else if (cheatcode == "KoolKandleKrew")
        {
            player.timeSinceLightSourceFuelUsed = new Date().getTime();
            player.lightSourceDuration = 180;
            player.lightSource = "candle";
        }
        else if (cheatcode == "getSurvive")
        {
            console.log("getSurvivalism() = " + player.getSurvivalism());
        }
        else if (cheatcode.toLowerCase() == "beastjam")
        {
            if (!changeBeastiary)
            {
                changeBeastiary = true;
            }
            else
            {
                changeBeastiary = false;
            }
        }
        else if (cheatcode.toLowerCase() == "offwithyourhead")
        {
            quests.guillotine = true;
        }
        else if (cheatcode == "JumP")
        {
            sleeperTime += (60 * 60 * 24 * 90);
        }
        else if (cheatcode == "SkiP")
        {
            sleeperTime += (60 * 60 * 3);
        }
        else if (cheatcode == "SkP")
        {
            sleeperTime += (60 * 60 * 1);
        }
        else if (cheatcode == "SliP")
        {
            sleeperTime -= (60 * 60 * 3);
        }
        else if (cheatcode == "SlP")
        {
            sleeperTime -= (60 * 60 * 1);
        }
        else if (cheatcode == "hotterthanchurchonatuesday")
        {
            for (var l = 0; l < 12; l++)
            {
                magicList.push(new Magic({ID: "firestorm", CNX: 50}, true, {X: X, Y: Y}, false, false));
                magicList[magicList.length - 1].X = X + Math.random() * 1000 - 500;
                magicList[magicList.length - 1].Y = Y + Math.random() * 1000 - 500;
            }
        }
        else if (cheatcode == "flowerstorm")
        {
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 0}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 0}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 0}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 1}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 1}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 2}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 3}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 3}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 3}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 4}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
            magicList.push(new Magic({ID: "flowerStormFlower", CNX: 50}, false, {X: X, Y: Y , sort: 5}, this, false));
            magicList[magicList.length - 1].X = X + Math.random() * 1800 - 900;
            magicList[magicList.length - 1].Y = Y + Math.random() * 1800 - 900;
        }
        else if (cheatcode == "frogme" || cheatcode == "froglegs")
        {
            player.frogaform = true;
        }
        else if (cheatcode == "IBEMANGIRL" || cheatcode == "ibegirlman")
        {
            player.gender = "Hermaphrodite";
        }
        else if (cheatcode == "getTime")
        {
            alert("Total Real Time Played: " + Math.floor(timePlayed) +
                " Second Of Game Minute: " + secondOfMinute +
                " Minute Of Game Hour: " + minuteOfHour + " Hour Of Game Day: " + hourOfDay + " Day of Game Year: " + dayOfYear + " Time of Day: " + timeOfDay +
                " Current Game Season: " + currentSeason)
        }
        else if (cheatcode == "time")
        {
            alert(hourOfDay + ":" + minuteOfHour + "    ( " + secondOfMinute + " )");
        }
        else if (cheatcode == "exists")
        {
            var exst = prompt("Type the name of the item which you would like to investigate.");
            alert("The existence status of " + exst + " is currently: " + exists(exst));
        }
        else if (cheatcode == "6060842")
        {
            player.energilTime = 100;
            player.fatigueI = true;
        }
        else if (cheatcode == "SMSP")
        {
            player.warmth += 5;
            player.thirst += 3;
            player.hunger += 2;
        }
        else if (cheatcode == "GOOPGOOPGOOPGOOP")
        {
            if (player.title != "MRB Agent")
            {
                player.endurance = 50;
                player.constitution = 100;
                player.knowledge = 50;
                player.willpower = 100;
                player.will = 100;
                player.concentration = 50;
                player.eminence = 50;
                player.memory = 100;
                player.health = 400;
                player.race = "#336600";
                player.strength = 50;
                player.stamina = 100;
                player.energy = 506;
                player.toughness = 50;
                player.intelligence = 50;
                player.ranged = 50;
                player.dexterity = 70;
                player.raceName = "Goop";
                player.title = "Supreme Overlord";
                player.name = "Gooplur";
                player.gender = "Goop";
            }
        }
        else if (cheatcode == "VOOP" || cheatcode == "venandify" || cheatcode == "venandi")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                if (cheatcode == "venandify")
                {
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].DTP() <= 900)
                        {
                            ArtificialIntelligenceAccess[i].venandi = 400;
                        }
                    }
                }
                else if (cheatcode == "venandi")
                {
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].DTP() <= 2000)
                        {
                            ArtificialIntelligenceAccess[i].venandi = 390;
                        }
                    }
                }
                else
                {
                    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
                    {
                        if (ArtificialIntelligenceAccess[i].DTP() <= 1000)
                        {
                            ArtificialIntelligenceAccess[i].venandi = 361;
                        }
                    }
                }
            }
        }
        else if (cheatcode == "ANTIFUNGAL")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                player.venandi = 0;
                player.form = false;
            }
        }
        else if (cheatcode == "G")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                developerRapidamente = true;
                rapidamente = true;
            }
        }
        else if (cheatcode == "SHIFT")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                if (player.hide == true)
                {
                    player.hide = false;
                    cheatAtop = false;
                    wallPhase = false;
                }
                else
                {
                    player.hide = true;
                    cheatAtop = true;
                    wallPhase = true;
                }
            }
        }
        else if (cheatcode == "GOPLUR")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                Inventory = allSpells;
            }
        }
        else if (cheatcode == "GP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                worldItems.push([new Item("coins", X, Y), 1000]);
            }
        }
        else if (cheatcode == "GOOP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                var chtItem = prompt("Enter the name of the item you would like.");
                var chtAmnt = JSON.parse(prompt("Enter the amount of " + chtItem + " you would like."));
                worldItems.push([new Item(chtItem, X, Y), chtAmnt]);
            }
        }
        else if (cheatcode == "DMX")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                var chtDmx = prompt("Enter the dimension you seek to enter.");
                map = chtDmx;
            }
        }
        else if (cheatcode == "HACK")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                alert("Welcome to your exclusive life manipulation informational center. Here are the commands that you can use: \ getItem \ setCoords \ setAttribute \ getAllWeapons \ getAllWorn \ getAllSpells \ getSkillpoints \ getMagicpoints")
            }
        }
        else if (cheatcode == "setAttribute")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                var attrib = prompt("select attribute to set:", "catEye \ medusa \ tunskBlood \ heavenlyStep");
                if (attrib == "catEye")
                {
                    if (player.nightVision)
                    {
                        player.nightVision = false;
                        alert("catEye = false;");
                    }
                    else
                    {
                        player.nightVision = true;
                        alert("catEye = true;");
                    }
                }
                else if (attrib == "medusa")
                {
                    if (player.medusa == true)
                    {
                        player.medusa = false;
                        alert("medusa = false;");
                    }
                    else
                    {
                        player.medusa = true;
                        alert("medusa = true;");
                    }
                }
                else if (attrib == "tunskBlood")
                {
                    if (player.petrificationResistanceTime > 0)
                    {
                        player.petrificationResistanceTime = 0;
                        alert("tunskBlood = false;");
                    }
                    else
                    {
                        player.petrificationResistanceTime = 100000000000000000;
                        alert("tunskBlood = true;");
                    }
                }
                else if (attrib == "heavenlyStep")
                {
                    if (player.waterwalkingTime > 0)
                    {
                        player.waterwalkingTime = 0;
                        alert("heavenlyStep = false;");
                    }
                    else
                    {
                        player.waterwalkingTime = 100000000000000000;
                        alert("heavenlyStep = true;");
                    }
                }
            }
        }
        else if (cheatcode == "getAllWeapons")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                var wepp;
                for (var i = 0; i < allWeapons.length; i++)
                {
                    if (i != 2)
                    {
                        wepp = [new Item(allWeapons[i].type, X, Y), 1];
                        Inventory.push(wepp);
                    }
                }
            }
        }
        else if (cheatcode == "getAllWorn")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                var wepp;
                for (var i = 1; i < allWorn.length; i++)
                {
                    wepp = [new Item(allWorn[i].type, X, Y), 1];
                    Inventory.push(wepp);
                }
            }
        }
        else if (cheatcode == "getAllSpells")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                for (var i = 1; i < allSpells.length; i++)
                {
                    Inventory.push(allSpells[i]);
                }
            }
        }
        else if (cheatcode == "getSkillpoints")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                player.skillPoints += 50;
            }
        }
        else if (cheatcode == "getMagicpoints")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                player.magicalSkillPoints += 50;
            }
        }
        else if (cheatcode == "getItem")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                var chtItem = prompt("Poly-Land-Server:~ Administrative-User$ getItem =");
                var chtAmnt = JSON.parse(prompt("Poly-Land-Server:~ Administrative-User$ setAmount ="));
                worldItems.push([new Item(chtItem, X, Y), chtAmnt]);
            }
        }
        else if (cheatcode == "setCoords")
        {
            if (player.name == "Peter" && player.race == "#fc9462")
            {
                X = Number(prompt("Poly-Land-Server:~ Administrative-User$ setXCoord ="));
                Y = Number(prompt("Poly-Land-Server:~ Administrative-User$ setYCoord ="));

            }
        }
        else if (cheatcode == "thereallyverysuperspecialcorner")
        {
            //1899 2373
            if (X < 1899 + 50 && X > 1899 - 50 && Y < 2373 + 50 && Y > 2373 - 50)
            {
                var chtItem = prompt("And so it was that you reached enlightenment here on the street corner of Teshir City... Suddenly it all became clear... the physical the spiritual... one and the same!!! Imagine and you shall create:");
                var chtAmnt = JSON.parse(prompt("What quantity of " + chtItem + " do you imagine will appear into this worldy mesh of confused energy?"));
                worldItems.push([new Item(chtItem, X, Y), chtAmnt]);
            }
        }
        else if (cheatcode == "GOP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                player.survivalism = 500;
                player.venandi = 0;
                if (player.form == "venandi")
                {
                    player.form = false;
                    player.weapon = "none";
                }
            }
        }
        else if (cheatcode == "BEAUTY")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                player.charisma = 50;
            }
        }
        else if (cheatcode == "CRONE")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                primarySpells.unshift({name: "Frog Curse", ID: "frogify", equipped: false, cost: 0.5, cooldown: 0.145, description: "The ancient curse that turns human beings into frogs.", EXP: 5, CNX: 50});
            }
        }
        else if (cheatcode == "OOP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                X = Number(prompt("Teleport X"));
                Y = Number(prompt("Teleport Y"));
            }
        }
        else if (cheatcode == "GOOPGOOP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                buildMode = true;
                player.lifeEternal = true;
            }
        }
        else if (cheatcode == "OP")
        {
            if (player.name == "Gooplur" && player.race == "#336600")
            {
                X = X + Number(prompt("Teleport X"));
                Y = Y + Number(prompt("Teleport Y"));
            }
        }
        else if (cheatcode == "GOO")
        {
            if (player.name == "Gooplur" && player.gender == "Goop" && player.race == "#336600")
            {
                player.gender = "Gooplon";
                player.waterwalkingTime = 99999999999999999999999999;
                player.petrificationResistanceTime = 99999999999999999999999999;
                player.nightVision = true;
            }
            else if (player.race == "#336600" && player.name == "Gooplur")
            {
                if (player.nightVision == true)
                {
                    player.nightVision = false;
                }
                else if (player.gender == "Gooplon")
                {
                    player.nightVision = true;
                }
            }
        }
        else if (cheatcode == "NEO")
        {
            if (player.name == "Gooplur" && player.gender == "Goop" && player.race == "#336600" || player.name == "Gooplur" && player.gender == "Gooplon" && player.race == "#336600" || player.name == "Gooplur" && player.gender == "Gooplurg" && player.race == "#336600")
            {
                player.gender = "Gooplitor";
            }
        }
        else if (cheatcode == "SPINE")
        {
            if (player.name == "Gooplur" && player.gender == "Goop" && player.race == "#336600")
            {
                player.gender = "Gooplis";
            }
        }
        else if (cheatcode == "MEDUSA")
        {
            if (player.name == "Gooplur" && player.gender == "Gooplon" && player.race == "#336600")
            {
                player.gender = "Gooplurg";
                player.medusa = true;
            }
        }
        else if (cheatcode == "cmplst")
        {
            alert("The length of the companion list is: " + player.companions.length);
            for (var cmplst = 0; cmplst < player.companions.length; cmplst++)
            {
                console.log(player.companions[cmplst]);
            }
        }
        else if (cheatcode == "termites") //termite cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 90, Y - 90, "KillerTermite", true, "Terminal"));
        }
        else if (cheatcode == "wingedTermites") //winged termite cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 90, Y - 90, "KillerTermite", true, "Terminal"));
            ArtificialIntelligenceAccess[ArtificialIntelligenceAccess.length -1].winged = true;
        }
        else if (cheatcode == "sustituto") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 60, Y - 60, "Changeling", false, "changeling"));
        }
        else if (cheatcode == "sustituida") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Changeling", true, "Young Kellish Slave Girl", {race: "Kel", faction: "player", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "sustituido") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Changeling", true, "Young Kellish Girl", {race: "Kel", faction: "Kel", personality: "calculated", outfit: ["none", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "sustituible") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Person", true, "Sue", {race: "Kel", faction: "Kel", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "sustituir") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Person", true, "Young Kellish Slave Girl", {race: "Kel", faction: "player", personality: "scared", outfit: ["none", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "magzSustituir") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Person", true, "Little Maggy", {race: "Freynor", faction: "player", personality: "scared", outfit: ["frichFurClothing", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "tailorSustituir") //changeling cheat
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 70, Y - 70, "Person", true, "Maggy the Tailor", {race: "Freynor", faction: "player", personality: "scared", outfit: ["frichFurClothing", 0], weapon: ["none", [0.05, 0.05], 0, 0, 0.40 + (Math.floor(Math.random() * 6) / 10)], ranged: [false, "arrow", 1, 2000, 1, 6, 0, "none", 1.25], patrolStops: 0, patrolLoop: false, route:[[0, 0]], kid: true}));
        }
        else if (cheatcode == "drugsaregoodandifyoudothempeoplethinkthatyou'recool")
        {
            player.constitution = 1000;
            player.health = player.healthMAX;
            player.inebriation = 10000000;
            player.cyrinthilimTime = 10000000;
        }
        else if (cheatcode == "drugsAreBadMmmkay")
        {
            for (var ixuim = 0; ixuim < 20; ixuim++)
            {
                scenicList.push(new Scenery("xuimSpores", X, Y, Math.random() * 2 * Math.PI, false));
            }
        }
        else if (cheatcode == "444416theskyisthecoolerest164444")
        {
            constantMagic = true;
        }
        else if (cheatcode == "renewHildegardQuest")
        {
            quests.thePlightOfLethikQuest = false;
            quests.thePlightOfLethikWitchInterrogated = false;
            quests.thePlightOfLethikVardan = false;
            quests.thePlightOfLethikCompletionStyle = false;
            quests.thePlightOfLethikFarmRestored = false;
            quests.thePlightOfLethikPay = 0;
            uniqueChars.vsevolodLDS = true;
            uniqueChars.hildegardLDS = true;
            uniqueChars.axelLDS = true;
        }
        else if (cheatcode == "renewBakeryQuest")
        {
            quests.imaginaryFriendQuest = false;
            quests.imaginaryFriendCompletionStyle = false;
            quests.imaginaryFriendMentioned = false;
            quests.imaginaryFriendAdopted = false;
            uniqueChars.lelailaLDS = true;
            uniqueChars.velaLDS = true;
            uniqueChars.boggartLezarLDS = true;
        }
        else if (cheatcode == "renewDuendeQuest")
        {
            quests.duendeInfestationQuest = false;
            quests.duendeInfestationCompletionStyle = false;
            quests.duendeInfestationKillCount = 0;
            quests.duendeInfestationDuendeLoad = 0;
            quests.duendeInfestationKindness = false;
            quests.duendeInfestationPay = 0;
            uniqueChars.luceliusLDS = true;
        }
        else if (cheatcode == "renewFeastQuest")
        {
            quests.aFeastForFewerQuest = false;
            quests.aFeastForFewerCompletionStyle = false;
            quests.aFeastForFewerInfiltrator = false;
            quests.aFeastForFewerBelgos = false;
            uniqueChars.lailionaLDS = true;
            uniqueChars.belgosLDS = true;
            uniqueChars.altezorInfiltratorLDS = true;
            uniqueChars.mecheloLDS = true;
            uniqueChars.emyliaLDS = true;
        }
        else if (cheatcode == "renewInventorQuest")
        {
            quests.inventorsFeudQuest = false;
            quests.inventorsFeudCompletionStyle = false;
            quests.inventorsFeudStage = false;
            uniqueChars.ernestoLDS = true;
            uniqueChars.hugoLDS = true;
        }
        else if (cheatcode == "renewChangelingQuest")
        {
            quests.aFairyInBoysClothingQuest = false;
            quests.aFairyInBoysClothingCompletionStyle = false;
            quests.aFairyInBoysClothingFall = false;
            quests.aFairyInBoysClothingRude = false;
            quests.aFairyInBoysClothingPayed = false;
            quests.aFairyInBoysClothingNatalia = false;
            quests.aFairyInBoysClothingEvid = false;
            uniqueChars.nataliaLDS = true;
            uniqueChars.giomardoLDS = true;
            uniqueChars.elmaLDS = true;
            uniqueChars.ebaroLDS = true;
        }
        else if (cheatcode == "drodro")
        {
            uniqueChars.drohforLDS = true;
        }
        else if (cheatcode.toLowerCase() == "greaty")
        {
            var lesky = Y;
            for (var i = 0; i < scenicList.length; i++)
            {
                if (scenicList[i].Y > lesky)
                {
                    console.log('scenicList.push(new Scenery("' + scenicList[i].type +'", ' + scenicList[i].X + ', ' + scenicList[i].Y + ',' + scenicList[i].rotation + ', ' + scenicList[i].temporary +', ' + scenicList[i].information + ', ' + scenicList[i].extra + ')); //copied ' + region);
                }
            }
        }
        else if (cheatcode.toLowerCase() == "lessy")
        {
            var lesky = Y;
            for (var i = 0; i < scenicList.length; i++)
            {
                if (scenicList[i].Y < lesky)
                {
                    console.log('scenicList.push(new Scenery("' + scenicList[i].type +'", ' + scenicList[i].X + ', ' + scenicList[i].Y + ',' + scenicList[i].rotation + ', ' + scenicList[i].temporary +', ' + scenicList[i].information + ', ' + scenicList[i].extra + ')); //copied ' + region);
                }
            }
        }
        else if (cheatcode.toLowerCase() == "lessx")
        {
            var lesky = X;
            for (var i = 0; i < scenicList.length; i++)
            {
                if (scenicList[i].X < lesky)
                {
                    console.log('scenicList.push(new Scenery("' + scenicList[i].type +'", ' + scenicList[i].X + ', ' + scenicList[i].Y + ',' + scenicList[i].rotation + ', ' + scenicList[i].temporary +', ' + scenicList[i].information + ', ' + scenicList[i].extra + ')); //copied ' + region);
                }
            }
        }
        else if (cheatcode.toLowerCase() == "greatx")
        {
            var lesky = X;
            for (var i = 0; i < scenicList.length; i++)
            {
                if (scenicList[i].X > lesky)
                {
                    console.log('scenicList.push(new Scenery("' + scenicList[i].type +'", ' + scenicList[i].X + ', ' + scenicList[i].Y + ',' + scenicList[i].rotation + ', ' + scenicList[i].temporary +', ' + scenicList[i].information + ', ' + scenicList[i].extra +')); //copied ' + region);
                }
            }
        }
        else if (cheatcode == "badbeans")
        {
            player.gassinessTime += 10;
            magicList.push(new Magic({ID:"fart"}, true));
        }
        else if (cheatcode == "missedOpportunities")
        {
            if (player.levelBonusSkillPoints < 2 && player.level >= 10 && player.level < 20)
            {
                player.skillPoints += 2;
                player.levelBonusSkillPoints = 2;
            }
        }
        else if (cheatcode.toLowerCase() == "salty")
        {
            player.thirst = 3;
            if (player.raceName == "Freynor" && player.gender == "Female")
            {
                player.romance.push("hilmund");
            }
        }
        else if (cheatcode.toLowerCase() == "haeyouthere")
        {
            player.haeflowerTime += 60;
        }
        else if (cheatcode.toLowerCase() == "youdoyoubella")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].ID == "Madam Bella" || ArtificialIntelligenceAccess[i].ID == "Mesek the Runaway")
                {
                    ArtificialIntelligenceAccess[i].ultra.patrolStops = 6;
                }
            }
        }
        else if (cheatcode.toLowerCase() == "iwill")
        {
            player.will = 0;
        }
        else if (cheatcode.toLowerCase() == "sslow")
        {
            player.slowItDown = true;
            console.log("game pace: slow");
        }
        else if (cheatcode.toLowerCase() == "ffast")
        {
            player.slowItDown = false;
            console.log("game pace: fast");
        }
        else if (cheatcode == "MRB")
        {
            player.race = "#999966";
            player.raceName = "Empiric";
            player.title = "MRB Agent";
            player.constitution = 1;
            player.toughness = 4;
        }
        else if (cheatcode.toLowerCase() == "testunits")
        {
            if (testingUnitCenters == true)
            {
                testingUnitCenters = false;
                testingUnitSizes = false;
                showUnitAttackBubble = false;
            }
            else
            {
                testingUnitCenters = true;
                testingUnitSizes = true;
                showUnitAttackBubble = true;
            }
        }
        else if (cheatcode.toLowerCase() == "showbarriers" || cheatcode.toLowerCase() == "testbarriers" || cheatcode.toLowerCase() == "b")
        {
            if (!testBarriers)
            {
                testBarriers = true;
            }
            else
            {
                testBarriers = false;
            }
        }
        else if (cheatcode.toLowerCase() == "resetsurvivalism")
        {
            player.survivalism = 0;
        }
        else if (cheatcode.toLowerCase() == "resetdexterity")
        {
            player.dexterity = 0;
        }
        else if (cheatcode.toLowerCase() == "followercheck")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].team == "player")
                {
                    console.log(ArtificialIntelligenceAccess[i]);
                }
            }
        }
        else if (cheatcode.toLowerCase() == "horseypoo")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].type == "Horse")
                {
                    ArtificialIntelligenceAccess[i].X = X + spacer(120);
                    ArtificialIntelligenceAccess[i].Y = Y + spacer(120);
                    ArtificialIntelligenceAccess[i].plantedX = ArtificialIntelligenceAccess[i].X;
                    ArtificialIntelligenceAccess[i].plantedY = ArtificialIntelligenceAccess[i].Y;
                    ArtificialIntelligenceAccess[i].rotation = 2*Math.PI*Math.random();
                    ArtificialIntelligenceAccess[i].rotationSpeed = 0.12;
                    ArtificialIntelligenceAccess[i].speed = 6;
                    ArtificialIntelligenceAccess[i].healthMAX = 15;
                    ArtificialIntelligenceAccess[i].stay = false;
                    ArtificialIntelligenceAccess[i].costume = 0;
                    ArtificialIntelligenceAccess[i].keepSpeed = 0;
                    ArtificialIntelligenceAccess[i].targetDistance = 1000000;
                    ArtificialIntelligenceAccess[i].baselineRotationSpeed = 0.12;
                    ArtificialIntelligenceAccess[i].baselineSpeed = 6;
                    ArtificialIntelligenceAccess[i].baselineHealthMAX = 15;
                    ArtificialIntelligenceAccess[i].freezeKeepSpeed = 6;
                    ArtificialIntelligenceAccess[i].baseRotationSpeed = 0.12;
                    ArtificialIntelligenceAccess[i].baseSpeed = 6;
                }
            }
        }
        else if (cheatcode.toLowerCase() == "lostintimeandspace")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (typeof(ArtificialIntelligenceAccess[i].X) != "number" || typeof(ArtificialIntelligenceAccess[i].Y) != "number" || typeof(ArtificialIntelligenceAccess[i].rotation) != "number" || typeof(ArtificialIntelligenceAccess[i].rotationSpeed) != "number" || typeof(ArtificialIntelligenceAccess[i].rotationSpeed) != "number" || typeof(ArtificialIntelligenceAccess[i].healthMAX) != "number")
                {
                    ArtificialIntelligenceAccess[i].X = X + spacer(120);
                    ArtificialIntelligenceAccess[i].Y = Y + spacer(120);
                    ArtificialIntelligenceAccess[i].plantedX = ArtificialIntelligenceAccess[i].X;
                    ArtificialIntelligenceAccess[i].plantedY = ArtificialIntelligenceAccess[i].Y;
                    ArtificialIntelligenceAccess[i].rotation = 2*Math.PI*Math.random();
                    ArtificialIntelligenceAccess[i].rotationSpeed = ArtificialIntelligenceAccess[i].baselineRotationSpeed;
                    ArtificialIntelligenceAccess[i].speed = ArtificialIntelligenceAccess[i].baselineSpeed;
                    ArtificialIntelligenceAccess[i].freezeKeepSpeed = ArtificialIntelligenceAccess[i].baselineSpeed;
                    ArtificialIntelligenceAccess[i].healthMAX = ArtificialIntelligenceAccess[i].baselineHealthMAX;
                    ArtificialIntelligenceAccess[i].stay = false;
                    ArtificialIntelligenceAccess[i].costume = 0;
                    ArtificialIntelligenceAccess[i].keepSpeed = 0;
                    ArtificialIntelligenceAccess[i].targetDistance = 1000000;
                }
            }
        }
        else if (cheatcode.toLowerCase() == "getfistdamage")
        {
            alert(player.getFistDamage());
        }
        else if (cheatcode.toLowerCase() == "testmap" || cheatcode.toLowerCase() == "testroom")
        {
            region = "testMap";
            map = "testMap";
            X = 0;
            Y = 0;
        }
        else if (cheatcode == "4444444444444444")
        {
            if (player.eminence == 50 && player.knowledge == 50)
            {
                player.hunger = player.hungerMAX;
                player.thirst = player.thirstMAX;
            }
        }
        else if (cheatcode == "showtiles" || cheatcode == "showTiles")
        {
            if (showTiles != true)
            {
                showTiles = true;
            }
            else
            {
                showTiles = false;
            }
        }
        else if (cheatcode == "sleepyseed")
        {
            player.sleep -= 14;
        }
        else if (cheatcode == "holuimTalisman")
        {
            if (player.name.search("Blackwood") != -1 && quests.holuimStash == true || player.name.search("Anset") != -1 && quests.holuimStash == true)
            {
                if (player.title == "Nobility" && player.raceName == "Cephrite")
                {
                    console.log("- Talisman Retireved -");
                    quests.holuimStash = false;
                    worldItems.push([new Item("holuimTalisman", X, Y), 1]);
                }
            }
        }
        else if (cheatcode == "unitList")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                console.log(ArtificialIntelligenceAccess[i]);
            }
        }
        else if (cheatcode == "isThere")
        {
            var unttNme = prompt("Enter the type of unit you are seeking");
            var isDere = false;
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].type == unttNme)
                {
                    alert("Yes, there is. At coords (" + ArtificialIntelligenceAccess[i].X + ", " + ArtificialIntelligenceAccess[i].Y + ")");
                    isDere = true;
                    break;
                }
            }
            if (isDere == false)
            {
                alert("No, there is not.");
            }
        }
        else if (cheatcode == "hay")
        {
            var unttNme = prompt("Ingresa el tipo del objeto decorativo que buscas.");
            var isDere = false;
            for (var i = 0; i < scenicList.length; i++)
            {
                if (scenicList[i].type == unttNme)
                {
                    isDere = true;
                    alert("Yes, there is. At coords (" + scenicList[i].X + ", " + scenicList[i].Y + ")");
                    break;
                }
            }
            if (isDere == false)
            {
                alert("No, there is not.");
            }
        }
        else if (cheatcode == "bones")
        {
            console.log(quests.flamingBones);
        }
        else if (cheatcode == "charlar")
        {
            console.log("conversationID: " + conversationID);
            conversationID = ["none", 0];
        }
        else if (cheatcode.toLowerCase() == "themags")
        {
            uniqueChars.maggieLDS = true;
            uniqueChars.maggyLDS = true;
        }
        else if (cheatcode.toLowerCase() == "peter")
        {
            var crrPrompt;
            var crPrompt = prompt("Hello user, my name is Peter. I am your informational asistant, here to help you find out more about your character.", "cold, sleep, team, tutorial")
            if (crPrompt == "cold")
            {
                alert("Cold is what happens when the tempurature in a particular region of the game world is meant to simulate a low-temperature environment from real life. Your cold stat is so -- Warmth: " + player.warmth + " / " + "Full Warmth: " + player.warmthMAX);
            }
            else if (crPrompt == "sleep")
            {
                alert("Sleep is a stat that decreases over time and must be replenished by sleeping, and if it isn't then the player character will suffer negative effects from sleep deprivation. Your sleep stat is so -- Sleep: " + (Math.round((player.sleep * 100)) / 100) + " / " + "Full Sleep: " + player.totalSleep);
            }
            else if (crPrompt == "tutorial")
            {
                alert("If you need a tutorial to play this absurdly complex game you are clearly not one of the few people this game was intended to be played by. Consider putting in the effort to learn the games rules or finding something else to do with your time. Thank you for using Peter, your personal Q and A assistant!");
            }
            else if (crPrompt == "team")
            {
                crrPrompt = prompt("Almost all beings in the game have a team/faction, the player is the exception. The player has stored relation with each faction. Which faction would you like to know your value in?", "freynor, thengar, kel, aldrek, orgell, vardan, cephrite, nirwaden");
            }

            if (crrPrompt == "kel")
            {
                alert("Your relation with this faction is: " + player.kelFaction);
            }
            else if (crrPrompt == "freynor")
            {
                alert("Your relation with this faction is: " + player.freynorFaction);
            }
            else if (crrPrompt == "thengar")
            {
                alert("Your relation with this faction is: " + player.thengarFaction);
            }
            else if (crrPrompt == "aldrek")
            {
                alert("Your relation with this faction is: " + player.aldrekFaction);
            }
            else if (crrPrompt == "orgell")
            {
                alert("Your relation with this faction is: " + player.orgellFaction);
            }
            else if (crrPrompt == "vardan")
            {
                alert("Your relation with this faction is: " + player.vardanFaction);
            }
            else if (crrPrompt == "cephrite")
            {
                alert("Your relation with this faction is: " + player.cephriteFaction);
            }
            else if (crrPrompt == "nirwaden")
            {
                alert("Your relation with this faction is: " + player.nirwadenFaction);
            }

            if (typeof(crPrompt) != null)
            {
                alert("Thank you for letting me help you to know more!")
            }
            else
            {
                alert("Interaction Terminated")
            }
        }
        else if (cheatcode.toLowerCase() == "overview")
        {
            console.log(player);
        }
        else if (cheatcode.toLowerCase() == "unitoverview")
        {
            console.log(ArtificialIntelligenceAccess);
        }
        else if (cheatcode.toLowerCase() == "tellme")
        {
            console.log(this.levelBonusMagicPoints);
        }
        else if (cheatcode.toLowerCase() == "dime")
        {
            alert([player.illnesses[0][0], player.illnesses[0][1]]);
        }
        else if (cheatcode.toLowerCase() == "throatfrosttest")
        {
            var chekked = 0;
            for (var i = 0; i < player.illnesses.length; i++)
            {
                if (player.illnesses[i][0] == "Throat-Frost")
                {
                    chekked = 1;
                }
            }

            if (chekked == 0)
            {
                player.illnesses.push(["Throat-Frost", 0, 43]);
            }
        }
        else if (cheatcode.toLowerCase() == "lypelistest")
        {
            var chekked = 0;
            for (var i = 0; i < player.illnesses.length; i++)
            {
                if (player.illnesses[i][0] == "Lypelis")
                {
                    chekked = 1;
                }
            }

            if (chekked == 0)
            {
                player.illnesses.push(["Lypelis", 0, 89]);
            }
        }
        else if (cheatcode.toLowerCase() == "clearinv")
        {
            Inventory = [];
        }
        else if (cheatcode.toLowerCase() == "testinv")
        {
            console.log(Inventory);
        }
        else if (cheatcode.toLowerCase() == "buenasiesta")
        {
            sleep();
        }
        else if (cheatcode.toLowerCase() == "happykel")
        {
            player.kelFaction += 5;
        }
        else if (cheatcode.toLowerCase() == "coords")
        {
            if (tellCoords == true)
            {
                tellCoords = false;
            }
            else
            {
                tellCoords = true;
            }
        }
        else if (cheatcode.toLowerCase() == "tiles")
        {
            if (tellTile == true)
            {
                tellTile = false;
            }
            else
            {
                tellTile = true;
            }
        }
        else if (cheatcode.toLowerCase() == "map")
        {
            if (tellMap == true)
            {
                tellMap = false;
            }
            else
            {
                tellMap = true;
            }
        }
        else if (cheatcode.toLowerCase() == "tilebuilder" || cheatcode.toLowerCase() == "til")
        {
            tileBuilder = true;
        }
        else if (cheatcode.toLowerCase() == "attackbubble")
        {
            if (showPlayerAttackBubble == true)
            {
                showPlayerAttackBubble = false;
            }
            else
            {
                showPlayerAttackBubble = true;
            }
        }
        else if (cheatcode.toLowerCase() == "restoredesmonde")
        {
            if (player.name == "Desmonde")
            {
                player.level = 13;
                player.skillPoints = 4 * 13;
                player.totalSkillPoints = 4 * 14;
                teshirNorthRoadBandits = false;
                teshirNorthRoadKillCount = 4;
                teshirNorthRoadQuest = "complete";
                huntingWagerFrichPack = false;
                huntingWagerKillCount = 3;
                huntingWagerQuest = "complete";
                Inventory = [[new Item("glinMushrooms", false, false), 3], [new Item("neprilneBerries", false, false), 6], [new Item("frichMeat", false, false), 130], [new Item("hetmerArmour", false, false), 1], [new Item("vardanianCleaver", false, false), 1], [new Item("freydicSword", false, false), 1], [new Item("freydicGreatSword", false, false), 1], [new Item("winterWolfOutfit", false, false), 1], [new Item("walrusLeatherWaterskinFull", false, false), 6], [new Item("walrusLeatherWaterskin", false, false), 28], [new Item("walrusMeat", false, false), 5], [new Item("fireStarter", false, false), 1], [new Item("suuliMelonSlice", false, false), 12], [new Item("coins", false, false), 394]];
                bankSlots = 10;
            }
        }
        else if (cheatcode.toLowerCase() == "noonesawnooneknows")
        {
            if (player.name == "Desmonde")
            {
                player.theBalgurMercenariesFaction = 0;
            }
        }
        else if (cheatcode.toLowerCase() == "ghostgear")
        {
            player.areBootsEquipped = false;
            player.bootsEquipped = "none";
            player.areGlovesEquipped = false;
            player.glovesEquipped = "none";
            player.isNecklaceEquipped = false;
            player.necklaceEquipped = "none";
            player.isRingEquipped = false;
            player.ringEquipped = "none";
            player.isArmourEquipped = false;
            player.outfitEquipped = "none";
            player.isWeaponEquipped = false;
            player.weaponEquipped = "none";
            player.ammoLoaded = false;
            console.log("ghostgear removed");
        }
        else if (cheatcode.toLowerCase() == "fthisfingf")
        {
            quests.sagesCachePortal = true;
        }
        else if (cheatcode.toLowerCase() == "metiitem")
        {
            var chtItem = prompt("Enter the name of the item you would like.");
            var chtAmnt = JSON.parse(prompt("Enter the amount of " + chtItem + " you would like."));
            worldItems.push([new Item(chtItem, X, Y), chtAmnt]);
        }
        else if (cheatcode.toLowerCase() == "qualdo")
        {
            console.log(allSpells.length);
            Inventory = allSpells;
            player.race = "#301934";
            player.name = "Qualdo";
            player.magicalSkillPoints = 250 + allSpells.length;
            player.title = "Superhero";
            player.gender = "Male";
        }
        else if (cheatcode.toLowerCase() == "yoglithewarriornun")
        {
            if (player.name == "Yogli" && player.gender == "Female")
            {
                player.constitution = 4;
                player.strength = 10;
                player.stamina = 5;
                player.dexterity = 1;
                player.skillPoints = 4;
                player.totalSkillPoints = 4 * 6;
                player.title = "Warrior Nun";
            }
        }
        else if (cheatcode.toLowerCase() == "fixcombatsenser")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].DTP() > ArtificialIntelligenceAccess[i].rangeOfSight)
                {
                    ArtificialIntelligenceAccess[i].playerSeen = false;
                }
            }
            player.engagedSenser();
        }
        else if (cheatcode.toLowerCase() == "killall")
        {
            ArtificialIntelligenceAccess = [];
        }
        else if (cheatcode.toLowerCase() == "change")
        {
            change = "cheatChange#" + (Math.random() * Math.random() * Math.random());
        }
        else if (cheatcode.toLowerCase() == "howsexyami")
        {
            player.charisma = JSON.parse(prompt("You tell me, how sexy are you???"));
        }
        else if (cheatcode.toLowerCase() == "easterly")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 55, Y - 55, "Neev", false, "Bruma"));
        }
        else if (cheatcode.toLowerCase() == "westerly")
        {
            ArtificialIntelligenceAccess.push(new Unit(X - 55, Y - 55, "Neev", true, "Wester"));
        }
        else if (cheatcode.toLowerCase() == "racepickeradvanced")
        {
            if (player.name != "Peter")
            {
                player.raceName = prompt("Welcome to the all new race picker advanced edition, Enter your desired racial preload:");
            }
        }
        else if (cheatcode.toLowerCase() == "selfproclaimedtitle")
        {
            if (player.name != "Peter" && player.title != "MRB Agent")
            {
                player.title = prompt("Proclaim your new title then...");
            }
        }
        else if (cheatcode.toLowerCase() == "unstuckme")
        {
            this.speechMovementInhibitor = false;
            playersTurnToSpeak = true;

            {
                X = X + Math.cos(player.rotation + 1/2 * Math.PI) * 55;
                Y = Y + Math.sin(player.rotation + 1/2 * Math.PI) * 55;
            }
        }
        else if (cheatcode.toLowerCase() == "fixmininoticelist")
        {
            player.miniNoticeList = [];
        }
        else if (cheatcode.toLowerCase() == "fixinvplus")
        {
            //invScroll = -79;
            player.inventoryPosition += 1;
            alert(player.inventoryPosition);
        }
        else if (cheatcode.toLowerCase() == "fixinv")
        {
            player.inventoryPosition = 0;
            invScroll = 0;
        }
        else if (cheatcode.toLowerCase() == "fixinvminus")
        {
            //invScroll = 0;
            player.inventoryPosition -= 1;
            alert(player.inventoryPosition);
        }
        else if (cheatcode.toLowerCase() == "fixshopplus")
        {
            //merchScroll = -79;
            player.merchPosition += 1;
            alert(player.merchPosition);
        }
        else if (cheatcode.toLowerCase() == "fixshop")
        {
            player.merchPosition = 0;
            merchScroll = 0;
        }
        else if (cheatcode.toLowerCase() == "fixshopminus")
        {
            //merchScroll = 0;
            player.merchPosition -= 1;
            alert(player.merchPosition);
        }
        else if (cheatcode.toLowerCase() == "hornyspiders")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].type == "Ribback" && ArtificialIntelligenceAccess[i].gender == 1)
                {
                    console.log(ArtificialIntelligenceAccess[i].horny);
                    ArtificialIntelligenceAccess[i].horny = 100;
                }
            }
        }
        else if (cheatcode.toLowerCase() == "ribbackpreggers")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                if (ArtificialIntelligenceAccess[i].type == "Ribback" && ArtificialIntelligenceAccess[i].gender == 0)
                {
                    console.log(ArtificialIntelligenceAccess[i].prego);
                    ArtificialIntelligenceAccess[i].prego = 99;
                }
            }
        }
        else if (cheatcode.toLowerCase() == "serpytheserpent")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 40, Y, "Viper", false, "Serpy the Serpent"));
        }
        else if (cheatcode.toLowerCase() == "phantyphanty")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 500 - 1/2 * CCC.width, Y + 500 - 1/2 * CCC.height, "Phantom", false, "Phanty"));
        }
        else if (cheatcode.toLowerCase() == "traavinjathetroll")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 500 - 1/2 * CCC.width, Y + 500 - 1/2 * CCC.height, "BogTroll", false, "Traavinja the Troll"));
        }
        else if (cheatcode.toLowerCase() == "gravimullthetroll")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 500 - 1/2 * CCC.width, Y + 500 - 1/2 * CCC.height, "BogTroll", true, "Gravimull the Troll"));
        }
        else if (cheatcode.toLowerCase() == "devomori")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 400 - 1/2 * CCC.width, Y + 400 - 1/2 * CCC.height, "Olkrin", true, "Devomori the Destroyer"));
        }
        else if (cheatcode.toLowerCase() == "tulli")
        {
            ArtificialIntelligenceAccess.push(new Unit(X + 400 - 1/2 * CCC.width, Y + 400 - 1/2 * CCC.height, "Sprite", true, "Tulli the Watcher"));
        }
        else if (cheatcode.toLowerCase() == "wetnoodle") //resets all physical stats to 0
        {
            player.toughness = 0;
            player.endurance = 0;
            player.stamina = 0;
            player.charisma = 0;
            player.constitution = 0;
            player.strength = 0;
            player.dexterity = 0;
            player.ranged = 0;
            player.intelligence = 0;
            player.survivalism = 0;
        }
        else if (cheatcode.toLowerCase() == "drynoodle") //resets all magical stats to 0
        {
            player.eminence = 0;
            player.concentration = 0;
            player.willpower= 0;
            player.knowledge= 0;
            player.memory = 0;
        }
        else if (cheatcode.toLowerCase() == "wallachia") //resets all magical stats to 0
        {
            player.vamprism = true;
        }
        else if (cheatcode.toLowerCase() == "gankthemvamps")
        {
            player.baseHunger = 50;
            player.baseThirst = 20;
        }
        else if (cheatcode.toLowerCase() == "ratsinthewhitecity") //turns off content filter
        {
            ArtificialIntelligenceAccess.push(new Unit(3400, 2400, "Vreck", true, "Skeever", {patrolStops: 5, patrolLoop: true, route:[[4000, 2000], [3400, 2400], [3100, 2600], [3500, 3000], [4500, 2500]]}));
            ArtificialIntelligenceAccess.push(new Unit(3300, 2200, "Vreck", false, "Skeever"));
            ArtificialIntelligenceAccess.push(new Unit(3200, 2250, "Vreck", false, "Skeever"));
        }
        else if (cheatcode.toLowerCase() == "nofilter") //turns off content filter
        {
            player.matureContentFilter = false;
        }
        else if (cheatcode.toLowerCase() == "perfectArmour")
        {
            perfectArmour = true;
        }
        else if (cheatcode.toLowerCase() == "foePerfectArmour")
        {
            foePerfectArmour = true;
        }
        else if (cheatcode.toLowerCase() == "filter") //turns on content filter
        {
            player.matureContentFilter = true;
        }
        else if (cheatcode.toLowerCase() == "tellmap") //resets all magical stats to 0
        {
            alert("World: " +  map +", Map: " + region + ", Elevation: " + elevation);
        }
        else if (cheatcode.toLowerCase() == "borrar")
        {
            dialogueReset();
            //Delete All Non-native AI Units
            for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--)
            {
                if (!ArtificialIntelligenceAccess[i].guarantee)
                {
                    ArtificialIntelligenceAccess.splice(i, 1);
                }
            }
            //Delete All Non-native Scenery
            scenicList = [];
            //Delete All Barriers
            barrierList = [];
        }
        else if (cheatcode.toLowerCase() == "reiniciar")
        {
            for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
            {
                dialogueReset(ArtificialIntelligenceAccess[i]);
            }
            //Delete All Non-native AI Units
            for (var i =  ArtificialIntelligenceAccess.length - 1; i >= 0; i--)
            {
                if (!ArtificialIntelligenceAccess[i].guarantee)
                {
                    ArtificialIntelligenceAccess.splice(i, 1);
                }
            }
            //Delete All Non-native Scenery
            scenicList = [];
            //Delete All Barriers
            barrierList = [];

            change = "reiniciar";
        }
        else if (cheatcode.toLowerCase() == "kalbus")
        {
            if (player.name == "Kalbus")
            {
                player.willpower = 10;
                player.memory = 10;
                player.eminence = 0;
                player.knowledge = 10;
                Inventory.push([new Item("wizardGown", X, Y), 1], [new Item("frostWind", X, Y), 1]);
            }
        }
        else if (cheatcode.toLowerCase() == "lightningflashspeedyspeed")
        {
            rapidamente = true;
            developerRapidamente = true;
        }
        else if (cheatcode.toLowerCase() == "dameunaespada")
        {
            worldItems.push([new Item("katana", X, Y), 1]);
        }
        else if (cheatcode.toLowerCase() == "damedinero")
        {
            worldItems.push([new Item("coins", X, Y), 100]);
        }
        else if (cheatcode == "over9000")
        {
            player.level = 9001;
        }
        else if (cheatcode == "masDeCincuenta")
        {
            player.level = 51;
        }
        else if (cheatcode == "questData")
        {
            console.log(quests);
        }
        else if (cheatcode == "saltblood'sLocker")
        {
            if (quests.aNobleConspiracyQuest == true)
            {
                quests.aNobleConspiracyCompletionStyle = "saltblood";
                quests.aNobleConspiracyQuest = "complete";

                quests.completeQuests.push({name: "A Noble Conspiracy", description: "The jarl of Venning was in league with a powerful band of pirates that terrorized the north sea. You slayed the pirate captain, Jalmari Saltblood and put an end to the madness."});

                player.freynorFaction += 60;
                if (player.class == "Mage" || player.class == "Priest" || player.class == "Shaman" || player.class == "Sage")
                {
                    player.magicalExperience += 600;
                }
                else
                {
                    player.experience += 1100;
                }
                player.fame += 2;
            }
        }
        else if (cheatcode == "googleIsMyHusbandCheatingOnMeWithPirates?")
        {
            if (quests.aNobleConspiracyQuest == false && quests.matrimonyTorStambjordCompletionStyle == "marriage")
            {
                quests.aNobleConspiracyQuest = true;
                quests.activeQuests.push({name: "A Noble Conspiracy", description: "You have witnessed evidence that The Jarl of Venning permits piratry in exchange for a cut of the loot."});
            }
        }
        else if (cheatcode == "googleIsMySistersHusbandCheatingOnHerWithPirates?")
        {
            if (quests.aNobleConspiracyQuest == false && quests.matrimonyTorStambjordCompletionStyle != "marriage")
            {
                quests.aNobleConspiracyQuest = true;
                quests.activeQuests.push({name: "A Noble Conspiracy", description: "You have witnessed evidence that The Jarl of Venning permits piratry in exchange for a cut of the loot."});
            }
        }
        else if (cheatcode.toLowerCase() == "toggleautosave")
        {
            if (player.autosaveEnabled)
            {
                alert("Autosaving Disabled!");
                player.autosaveEnabled = false;
            }
            else
            {
                alert("Autosaving Enabled!");
                player.autosaveEnabled = true;
            }
        }
        else if (cheatcode.toLowerCase() == "saverate")
        {
            var saveRateManual = prompt("Set the rate at which the game downloads an autosave file to your computer in terms of seconds. If you do not want autosaving use the cheat 'toggleAutosave'.");
            if (saveRateManual >= 180)
            {
                player.autosaveFrequency = saveRateManual;
                alert("The game will now make an autosave every " + saveRateManual + " seconds.")
            }
            else
            {
                player.autosaveFrequency = 200;
                alert("Input too small, save rate set to default. (minimum input: 180 seconds)")
            }
        }
        else if (cheatcode.toLowerCase() == "tellarmour")
        {
            alert("Armour Rating [ " + player.armourTotal + " ]");
        }
        else if (cheatcode.toLowerCase() == "tellweight")
        {
            alert("Weight Carried [ " + player.carryWeight + " ]");
        }
        else if (cheatcode.toLowerCase() == "thisgameismissingsomething")
        {
            player.totalSkillPoints -= player.constitution;
            player.constitution = 0;
            player.strength = 20;
            player.health = player.healthMAX;
            if (machineGunCrossbow == false)
            {
                Inventory = [];
                Inventory.push([new Item("crossbow", false, false), 1]);
                Inventory.push([new Item("steelBolt", false, false), 501]);
                machineGunCrossbow = true;
            }
        }
        else if (cheatcode == "ohSayCanYouSeeByTheDawn'sEarlyLight" && player.name == "Big Sister" || cheatcode == "ohSayCanYouSeeByTheDawn'sEarlyLight" && player.name == "Big Brother" || cheatcode == "ohSayCanYouSeeByTheDawn'sEarlyLight" && player.name == "Uncle Sam" || cheatcode == "whoseBroadStripesAndBrightStarsThroughThePerilousFight" && player.name == "Uncle Sam" || cheatcode == "ohSayCanYouSeeByTheDawn'sEarlyLight" && player.name == "Aunt Sue" || cheatcode == "whoseBroadStripesAndBrightStarsThroughThePerilousFight" && player.name == "Aunt Sue")
        {
            Inventory.push([new Item("m16Carbine", false, false), 1]);
            Inventory.push([new Item("m16CarbineClip", false, false), 25]);
        }
        else if (cheatcode == "july4" && player.name == "Big Sister" || cheatcode == "july4" && player.name == "Big Brother" || cheatcode == "july4" && player.name == "Uncle Sam" || cheatcode == "july4" && player.name == "Aunt Sue")
        {
            Inventory.push([new Item("orgishFireworkUSA", false, false), 50]);
            Inventory.push([new Item("orgishFireworkLauncher", false, false), 1]);
        }
        else if (cheatcode.toLowerCase() == "clearitems")
        {
            worldItems = [];
        }
    }
}