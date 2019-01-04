/**
 * Created by skyeguy on 1/22/17.
 */

var doAutosave = false;
var doQuicksave = false;
var singleAuto = false;
var doBARSave = false;
function autosave()
{
    //Downloadsave
    if (keyBAR == true)
    {
        doBARSave = true;
    }
    else if (keyBAR == false && doBARSave == true)
    {
        doBARSave = false;
        saveType = "download";
        save();
        saveType = null;
    }
    //Quicksave
    if (tildKey == false && player.petrified != true && player.drowned != true) //quicksaves the game when the tild key is pressed -- unless the player is petrified or drowning
    {
        doQuicksave = true;
    }
    else if (tildKey == true && doQuicksave == true)
    {
        doQuicksave = false;
        saveType = "quicksave";
        save();
        saveType = null;
    }
    //Autosave
    if (player.autosaveEnabled && player.health > (25/100) * player.healthMAX && player.inCombat == false && player.thirst > 5 && player.hunger > 10 && player.warmth > (5/10 * player.warmthMAX))
    {
        if (new Date().getTime() - autosaveTime > player.autosaveFrequency * 1000) //manual number of seconds between autosaves (starts at 200)
        {
            autosaveTime = new Date().getTime();
            if (lowBar != "save")
            {
                //alert("** Autosave **");
                console.log("** Autosave **");
                saveType = "autosave";
                save();
                saveType = null;
            }
        }
    }
}

function saveList(list, listName, complex) //complex is for a list that has lists in it like the inventory.
{
    var contents = [];

    if (complex == true)
    {
        for (var i = 0; i < list.length; i++)
        {
            var elem = list[i][0]; //This variable is set equal to the class in the argument list.
            var className = elem.constructor.name; //this stores the specific identity of the class like whether it is a Unit or an Item or a Projectile etc.
            var classData = {}; //This is just like the data in the class in that it stores all of the keys and values that the focus class presently holds excluding the methods.
            var amount = list[i][1];
            for (var key in elem)
            {
                var value = elem[key]; //this finds and stores the value attached to the present key within the focus class.
                if (typeof(value) != "function") // so if the key is anything other than a method it will be added to the object class data so that it can be saved.
                {
                    classData[key] = value;
                }
            }
            contents.push([{type: className, data: classData}, amount]); //this adds a save object interpretation of the original class that has the original classes type and all of the original class's non-method data.
        }
    }
    else if (complex == "storage")
    {
        for (var i = 0; i < list.length; i++)
        {
            var id = list[i][0];
            var slots = list[i][1];
            var itemListAspect = [];
            for (var j = 0; j < list[i][2].length; j++)
            {
                var elem = list[i][2][j][0]; //This variable is set equal to the class in the argument list.
                var className = elem.constructor.name; //this stores the specific identity of the class like whether it is a Unit or an Item or a Projectile etc.
                var classData = {}; //This is just like the data in the class in that it stores all of the keys and values that the focus class presently holds excluding the methods.
                var amount = list[i][2][j][1];

                for (var key in elem)
                {
                    var value = elem[key]; //this finds and stores the value attached to the present key within the focus class.
                    if (typeof(value) != "function") // so if the key is anything other than a method it will be added to the object class data so that it can be saved.
                    {
                        classData[key] = value;
                    }
                }
                itemListAspect.push([{type: className, data: classData}, amount])
            }
            contents.push([id, slots, itemListAspect]); //this adds a save object interpretation of the original class that has the original classes type and all of the original class's non-method data.
        }
    }
    else
    {
        for (var i = 0; i < list.length; i++)
        {
            var elem = list[i]; //This variable is set equal to the class in the argument list.
            var className = elem.constructor.name; //this stores the specific identity of the class like whether it is a Unit or an Item or a Projectile etc.
            var classData = {}; //This is just like the data in the class in that it stores all of the keys and values that the focus class presently holds excluding the methods.
            for (var key in elem)
            {
                var value = elem[key]; //this finds and stores the value attached to the present key within the focus class.
                if (typeof(value) != "function") // so if the key is anything other than a method it will be added to the object class data so that it can be saved.
                {
                    classData[key] = value;
                }
            }
            contents.push({type: className, data: classData}); //this adds a save object interpretation of the original class that has the original classes type and all of the original class's non-method data.
        }
    }

    saveBrain[listName] = contents;
}
function save()
{
    //Set target to none for all Units before saving. //both dead and alive
    for (var i = 0; i < ArtificialIntelligenceAccess.length; i++)
    {
        ArtificialIntelligenceAccess[i].target = "none";
    }
    for (var i = 0; i < deadAIList.length; i++)
    {
        deadAIList[i].target = "none";
    }
    //This is the stuff that will be saved to the local storage.
    saveList(mainCharacterAccess, "mainCharacterAccess");
    saveList(ArtificialIntelligenceAccess, "ArtificialIntelligenceAccess");
    saveList(deadAIList, "deadAIList");
    saveList(barrierList, "barrierList");
    saveList(scenicList, "scenicList");
    saveList(worldItems, "worldItems", true);
    saveList(Inventory, "Inventory", true);
    saveList(playerProjectiles, "playerProjectiles");
    saveList(unitProjectiles, "unitProjectiles");
    saveList(shopInventory, "shopInventory", true);
    saveList(bankAccount, "bankAccount", true);
    saveList(storageList, "storageList", "storage");
    for (var n = 0; n < ArtificialIntelligenceAccess.length; n++)
    {
        var merchN = "merchandise" + JSON.stringify(n);
        if (typeof(ArtificialIntelligenceAccess[n].ultra) != "undefined")
        {
            if (typeof(ArtificialIntelligenceAccess[n].ultra.merchandise) != "undefined")
            {
                saveList(ArtificialIntelligenceAccess[n].ultra.merchandise, merchN, true)
            }
        }
    }
    saveBrain["uniqueChars"] = uniqueChars;
    saveBrain["quests"] = quests;
    saveBrain["conversations"] = conversations;
    saveBrain["timePlayed"] = timePlayed;
    saveBrain["sleeperTime"] = sleeperTime;
    saveBrain["elevation"] = elevation;
    saveBrain["X"] = X;
    saveBrain["Y"] = Y;
    saveBrain["spawnX"] = spawnX;
    saveBrain["spawnY"] = spawnY;
    saveBrain["map"] = map;
    saveBrain["region"] = region;
    saveBrain["update"] = update;
    saveBrain["change"] = change;
    saveBrain["bankSlots"] = bankSlots;
    saveBrain["primarySpells"] = primarySpells;
    saveBrain["secondarySpells"] = secondarySpells;
    saveBrain["tertiarySpells"] = tertiarySpells;
    saveBrain["beastJournal"] = beastJournal;

    var saveFile = JSON.stringify(saveBrain);

    //based on what save type the player chooses the save will be stored in one of the four game slots.
    if (saveType == 1)
    {
        localStorage.setItem("save1", saveFile);
    }
    else if (saveType == 2)
    {
        localStorage.setItem("save2", saveFile);
    }
    else if (saveType == 3)
    {
        localStorage.setItem("save3", saveFile);
    }
    else if (saveType == 4)
    {
        localStorage.setItem("save4", saveFile);
    }
    else if (saveType == 5)
    {
        localStorage.setItem("save5", saveFile);
    }
    else if (saveType == 6)
    {
        localStorage.setItem("save6", saveFile);
    }
    else if (saveType == 7)
    {
        localStorage.setItem("save7", saveFile);
    }
    else if (saveType == 8)
    {
        localStorage.setItem("save8", saveFile);
    }
    else if (saveType == "quicksave")
    {
        localStorage.setItem("quicksave", saveFile);
    }
    else if (saveType == "autosave")
    {
        //Code that I took off the Internet in order to download a string as a file
        var csvString = saveFile;
        var fileName = player.name + "_Auto";

        if (window.navigator.msSaveOrOpenBlob)
        {
            var blob = new Blob([csvString]);
            window.navigator.msSaveOrOpenBlob(blob, fileName + ".txt");
        }
        else
        {
            var a = document.createElement('a');
            a.href = 'data:attachment/txt,' +  encodeURIComponent(csvString);
            a.target = '_blank';
            a.download = fileName + ".txt"; //csv
            document.body.appendChild(a);
            a.click();
        }
    }
    else if (saveType == "download")
    {
        //Code that I took off the Internet in order to download a string as a file
        var csvString = saveFile;
        var fileName = player.name;

        if (window.navigator.msSaveOrOpenBlob)
        {
            var blob = new Blob([csvString]);
            window.navigator.msSaveOrOpenBlob(blob, fileName + ".txt");
        }
        else
        {
            var a = document.createElement('a');
            //a.href = 'data:attachment/txt,' +  encodeURIComponent(csvString);
            a.href = "data:text/plain;base64," + btoa(encodeURIComponent(csvString));
            a.target = '_blank';
            a.download = fileName + ".txt"; //csv
            document.body.appendChild(a);
            a.click();
        }
    }


}

function load()
{
    retrieveSave();
    mainCharacterAccess = loadList("mainCharacterAccess");
    if (update == lastUpdate && typeof(lastUpdate) != "undefined")
    {
        ArtificialIntelligenceAccess = loadList("ArtificialIntelligenceAccess");
        deadAIList = loadList("deadAIList");
    }
    playerProjectiles = loadList("playerProjectiles");
    barrierList = loadList("barrierList");
    scenicList = loadList("scenicList");
    unitProjectiles = loadList("unitProjectiles");
    worldItems = loadList("worldItems", true);
    Inventory = loadList("Inventory", true);
    shopInventory = loadList("shopInventory", true);
    bankAccount = loadList("bankAccount", true);
    storageList = loadList("storageList", "storage");
    for (var n = 0; n < ArtificialIntelligenceAccess.length; n++)
    {
        //ArtificialIntelligenceAccess[n].ultra.merchandise = loadList("merchandise" + n, true);
        var merchN = "merchandise" + JSON.stringify(n);
        if (typeof(ArtificialIntelligenceAccess[n].ultra) != "undefined")
        {
            if (typeof(ArtificialIntelligenceAccess[n].ultra.merchandise) != "undefined")
            {
                ArtificialIntelligenceAccess[n].ultra.merchandise = loadList(merchN, true);
                for (var m = 0; m < ArtificialIntelligenceAccess[n].ultra.merchandise.length; m++)
                {
                    ArtificialIntelligenceAccess[n].ultra.merchandise[m][0];
                    //console.log(ArtificialIntelligenceAccess[n].ultra.merchandise[m][0].weight)
                }
            }
        }
    }
    player = mainCharacterAccess[0];
    itemPlacer();
}

function loadList(listName, complex)
{
    var load = retrieveSave(listName);
    var contents = [];

    if (complex == true)
    {
        for (var i = 0; i < load.length; i++)
        {
            var parts = load[i];
            var elem = eval("new " + parts[0].type + "()");
            var amount = load[i][1];
            for (var key in parts[0].data)
            {
                elem[key] = parts[0].data[key];
            }
            contents.push([elem, amount]);
        }
    }
    else if (complex == "storage")
    {
        for (var i = 0; i < load.length; i++)
        {
            var id = load[i][0];
            var slots = load[i][1];
            var itemListAspect = [];
            for (var j = 0; j < load[i][2].length; j++)
            {
                var parts = load[i][2][j][0]; // [[id, slots, [ [{TYPE, DATA}, #], ... ], ... ] //Capital implies that it is selected by what is written in the code to the left.
                var elem = eval("new " + parts.type + "()");
                var amount = load[i][2][j][1];
                for (var key in parts.data)
                {
                    elem[key] = parts.data[key];
                }
                itemListAspect.push([elem, amount]);
            }
            contents.push([id, slots, itemListAspect]);
        }
    }
    else
    {
        for (var i = 0; i < load.length; i++)
        {
            var parts = load[i];
            var elem = eval("new " + parts.type + "()");
            for (var key in parts.data)
            {
                elem[key] = parts.data[key];
            }
            contents.push(elem);
        }
    }

    return contents;
}

function retrieveSave(listName)
{
    if (loadType == 1)
    {
        var restore = localStorage.getItem("save1");
    }
    else if (loadType == 2)
    {
        var restore = localStorage.getItem("save2");
    }
    else if (loadType == 3)
    {
        var restore = localStorage.getItem("save3");
    }
    else if (loadType == 4)
    {
        var restore = localStorage.getItem("save4");
    }
    else if (loadType == 5)
    {
        var restore = localStorage.getItem("save5");
    }
    else if (loadType == 6)
    {
        var restore = localStorage.getItem("save6");
    }
    else if (loadType == 7)
    {
        var restore = localStorage.getItem("save7");
    }
    else if (loadType == 8)
    {
        var restore = localStorage.getItem("save8");
    }
    else if (loadType == "autosave")
    {
        var restore = localStorage.getItem("autosave");
    }
    else if (loadType == "quicksave")
    {
        var restore = localStorage.getItem("quicksave");
    }
    else if (loadType == "upload")
    {
        var restore = keyString;
    }

    var parsed = JSON.parse(restore);

    //The argument will determine which list it will return.
    for (var n = 0; n < ArtificialIntelligenceAccess.length; n++)
    {
        var merchN = "merchandise" + JSON.stringify(n);
        if (listName == merchN)
        {
            return parsed[merchN];
        }
    }

    if (listName == "mainCharacterAccess")
    {
        return parsed.mainCharacterAccess;
    }
    else if (listName == "ArtificialIntelligenceAccess")
    {
        return parsed.ArtificialIntelligenceAccess;
    }
    else if (listName == "deadAIList")
    {
        return parsed.deadAIList;
    }
    else if (listName == "barrierList")
    {
        return parsed.barrierList;
    }
    else if (listName == "scenicList")
    {
        return parsed.scenicList;
    }
    else if (listName == "worldItems")
    {
        return parsed.worldItems;
    }
    else if (listName == "Inventory")
    {
        return parsed.Inventory;
    }
    else if (listName == "playerProjectiles")
    {
        return parsed.playerProjectiles;
    }
    else if (listName == "unitProjectiles")
    {
        return parsed.unitProjectiles;
    }
    else if (listName == "shopInventory")
    {
        return parsed.shopInventory;
    }
    else if (listName == "bankAccount")
    {
        return parsed.bankAccount;
    }
    else if (listName == "storageList")
    {
        return parsed.storageList;
    }
    else
    {
        if (update == parsed.update && typeof(parsed.update) != "undefined")
        {
            change = parsed.change;
        }
        lastUpdate = parsed.update;
        map = parsed.map;
        region = parsed.region;
        timePlayed = parsed.timePlayed;
        sleeperTime = parsed.sleeperTime;
        elevation = parsed.elevation;
        X = parsed.X;
        Y = parsed.Y;
        spawnX = parsed.spawnX;
        spawnY = parsed.spawnY;
        primarySpells = parsed.primarySpells;
        secondarySpells = parsed.secondarySpells;
        tertiarySpells = parsed.tertiarySpells;
        beastJournal = parsed.beastJournal;

        for (var key in parsed.uniqueChars)
        {
            uniqueChars[key] = parsed.uniqueChars[key];
        }
        for (var key in parsed.quests)
        {
            quests[key] = parsed.quests[key];
        }
        for (var key in parsed.conversations)
        {
            conversations[key] = parsed.conversations[key];
        }
        bankSlots = parsed.bankSlots;
    }
}